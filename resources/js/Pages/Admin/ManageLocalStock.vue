<template>
    <Head>
        <title>Manage Local Stock</title>
    </Head>

    <Container class="mt-6">

        <div class="w-[640px] grid grid-cols-2 gap-2">
            <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                <div class="w-2/5 h-full flex items-center justify-center bg-emerald-200">
                    <span class="uppercase font-semibold">Stocks</span>
                </div>
                <div class="w-3/5 h-full flex items-center justify-center bg-gray-200">
                    <span class="uppercase font-semibold">323</span>
                </div>
            </div>
            <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                <div class="w-2/5 h-full flex items-center justify-center bg-emerald-200">
                    <span class="uppercase font-semibold">Sold Stocks</span>
                </div>
                <div class="w-3/5 h-full flex items-center justify-center bg-gray-200">
                    <span class="uppercase font-semibold">1530</span>
                </div>
            </div>
            <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                <div class="w-2/5 h-full flex items-center justify-center bg-emerald-200">
                    <span class="uppercase font-semibold">Value</span>
                </div>
                <div class="w-3/5 h-full flex items-center justify-center bg-gray-200">
                    <span class="uppercase font-semibold">323</span>
                </div>
            </div>
            <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                <div class="w-2/5 h-full flex items-center justify-center bg-emerald-200">
                    <span class="uppercase font-semibold">Revenue</span>
                </div>
                <div class="w-3/5 h-full flex items-center justify-center bg-gray-200">
                    <span class="uppercase font-semibold">1530</span>
                </div>
            </div>
        </div>

        <div class="w-full grid grid-cols-10 mb-4 mt-6">
            <div v-for="(category, index) in tyres" class="col-span-1">
                <button @click="selectedCategory = index" :class="{'w-full flex items-center justify-between py-2 px-2 border-y border-l border-gray-300': true, 'border-r': index === `Com`, 'shadow-md shadow-green-500': selectedCategory === index}">
                    <span class="text-sm" v-text="index"></span>
                    <span class="text-xs px-2 py-1 bg-gray-500 rounded-full text-white">{{ category.count }}</span>
                </button>
            </div>
        </div>

        <div class="bg-indigo-200 grid grid-cols-20 w-full h-6 border border-gray-500">
            <div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs"><span>Tyre Size</span></div>
            <div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs"><span>Brand</span></div>
            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs"><span>Price</span></div>
            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs"><span>T Price</span></div>
            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs"><span>Qty</span></div>
            <div class="col-span-4 flex items-center justify-center border-r border-gray-500 h-full text-xs"><span>Model</span></div>
            <div class="col-span-5 flex items-center justify-center border-gray-500 h-full text-xs"><span>Notes</span></div>
        </div>

        <div v-show="index === selectedCategory" v-for="(sizes, index) in tyres">
            <template v-for="(ctyres, ind) in sizes">
                <template v-if="ind !== 'count'">
                    <AdminLocalTyre v-for="tyre in ctyres" :tyre="tyre" :key="tyre.id" />
                </template>
            </template>
        </div>

        <AddLocalTyre />

    </Container>

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
import AdminLocalTyre from "../../Shared/AdminLocalTyre.vue"
import AddLocalTyre from "../../Shared/AddLocalTyre.vue"
import { Link, Head, usePage } from "@inertiajs/vue3"
import { ref } from "vue"

defineProps({
    tyres: Object,
})

const selectedCategory = ref('R14');
</script>

<style scoped>

</style>
