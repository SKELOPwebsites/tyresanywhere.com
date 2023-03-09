<template>
    <Head>
        <title>Manage Inventory</title>
    </Head>

    <Container class="mt-12">

        <div class="w-full grid grid-cols-10">
            <div v-for="(category, index) in tyres" class="col-span-1">
                <button @click="selectedCategory = index" :class="{'w-full flex items-center justify-between py-2 px-2 border-y border-l border-gray-300': true, 'border-r': index === `Com`, 'shadow-md shadow-green-500': selectedCategory === index}">
                    <span class="text-sm" v-text="index"></span>
                    <span class="text-xs px-2 py-1 bg-gray-500 rounded-full text-white">{{ category.count }}</span>
                </button>
            </div>
        </div>

        <div v-show="index === selectedCategory" v-for="(sizes, index) in tyres" class="mt-4">
            <template v-for="(ctyres, ind) in sizes">
                <span class="block text-gray-500 font-semibold text-sm mt-6" v-if="ind !== 'count'" v-text="ind"></span>

                <template v-if="ind !== 'count'">
                    <AdminTyre v-for="tyre in ctyres" :tyre="tyre" @selectTyre="(id) => selectedTyre === id ? selectedTyre = null : selectedTyre = id" :selectedTyre="selectedTyre" :key="tyre.id"></AdminTyre>
                </template>
            </template>
        </div>

    </Container>

    <Transition name="success">
        <div v-show="success" v-text="success" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold"></div>
    </Transition>

    <div class="min-h-[50vh]"></div>
</template>

<script>
import AdminLayout from "../../Shared/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import Container from "../../Shared/Container.vue"
import AdminTyre from "../../Shared/AdminTyre.vue"
import { Link, Head, usePage } from "@inertiajs/vue3"
import { computed, ref, watch } from "vue"

defineProps({
    tyres: Object,
})

const categories = ['R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R29', 'R21', 'R22', 'Com']

const selectedCategory = ref('R14');
const selectedTyre = ref(null);

const success = computed(() => usePage().props.flash.success.admin);

watch(success, () => {
    if(success.value) {
        //play a ding sound
        let audio = new Audio('/audio/notify.mp3');
        audio.play();

        setTimeout(() => {
            usePage().props.flash.success.admin = '';
        }, 2000)
    }
})

</script>

<style scoped>
.success-enter-active,
.success-leave-active {
    transition: opacity 0.5s ease;
}

.success-enter-from,
.success-leave-to {
    opacity: 0;
}
</style>
