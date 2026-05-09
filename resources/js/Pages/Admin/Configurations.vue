<template>
    <Head>
        <title>Configurations</title>
    </Head>
    <div class="container">
        <div class="lg:w-1/3 w-full mx-auto pt-8">
            <p class="font-semibold text-3xl text-center mb-8">Manage Site Configurations</p>

            <div class="flex flex-col space-y-2">
                <AdminConfig v-for="config in configs" :config="config" @save="(id, form) => submit(id, form)"></AdminConfig>
            </div>
        </div>
    </div>

    <Transition name="success">
        <div v-show="success" v-text="success" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold"></div>
    </Transition>

    <div class="min-h-[50vh]"></div>
</template>

<script>
import AdminLayout from "/resources/js/Shared/Layouts/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import AdminConfig from "/resources/js/Shared/Admin/AdminConfig.vue";
import {computed, watch} from "vue";
import {usePage, Head} from "@inertiajs/vue3";

defineProps({
    configs: {
        required: true,
    }
})
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
function submit(id, form) {
    form.put('/admin/config/' + id, {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => {
            form.reset();
        }
    })
}
</script>

<style scoped>

</style>
