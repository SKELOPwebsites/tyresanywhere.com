<template>
    <Head>
        <title>Manage Products</title>
    </Head>
    <div class="mt-4">
        <Link href="/admin/bulk-adjust-products" class="text-sm underline text-blue-500 italic">Bulk Adjust Products</Link>
        <div class="w-full grid grid-cols-10 mb-8 mt-1">
            <div v-for="(category, index) in tyres" class="col-span-1">
                <button @click="selectedCategory = index" :class="{'w-full flex items-center justify-between py-2 px-2 border-y border-l border-gray-300': true, 'border-r': index === `Com`, 'shadow-md shadow-green-500': selectedCategory === index}">
                    <span class="text-sm" v-text="index"></span>
                    <span class="text-xs px-2 py-1 bg-gray-500 rounded-full text-white">{{ category.count }}</span>
                </button>
            </div>
        </div>

        <div v-click-outside="() => selectTyre(null)">
            <template v-for="(sizes, index) in tyres">
                <div v-if="index === selectedCategory" v-for="(ctyres, ind) in sizes">
                    <div v-if="ind !== 'count'">
                        <div class="bg-indigo-400 grid grid-cols-27 w-full h-6 border border-gray-500">
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>#</span></div>
                            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Tyre Size</span></div>
                            <div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Brand</span></div>
                            <div class="col-span-5 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Model</span></div>
                            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Quality</span></div>
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Speed</span></div>
                            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Usage</span></div>
                            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Season</span></div>
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>XL</span></div>
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Runflat</span></div>
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2" fill="currentColor"><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path></svg></div>
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16"><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"></path></svg></div>
                            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path></svg></div>
                            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Price</span></div>
                            <div class="col-span-2 flex items-center justify-center border-gray-500 h-full text-xs font-bold"><span>Price (4+)</span></div>
                        </div>
                        <AdminTyre v-for="(tyre, index2) in ctyres" :tyre="tyre" :index="index2" :key="tyre.id" @selectTyre="selectTyre" :selectedTyre="selectedTyre"></AdminTyre>

                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import AdminLayout from "/resources/js/Shared/Layouts/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import AdminTyre from "/resources/js/Shared/Admin/AdminTyre.vue"
import { Link, usePage, Head } from "@inertiajs/vue3"
import { computed, ref, watch } from "vue"

const props = defineProps({
    tyres: Object,
})

const categories = ['R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R29', 'R21', 'R22', 'Com']

const selectedCategory = ref(null);
const selectedTyre = ref(null);

function selectTyre(id) {
    selectedTyre.value = id;
}

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
