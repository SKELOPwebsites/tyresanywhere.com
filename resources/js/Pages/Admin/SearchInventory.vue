<template>
    <Head>
        <title>Search Local Stock</title>
    </Head>

    <div class="leading-normal tracking-normal lg:min-w-[1700px]">
        <div class="flex flex-wrap">

            <Sidebar class="lg:block hidden" @sidebar="sidebar" />

            <div class="w-full bg-gray-100 lg:min-h-[936px] transition-all duration-500" :class="sideBarOpen ? 'lg:pl-64' : 'lg:pl-20'">

                <Navbar class="lg:block hidden" />

                <div class="py-6 lg:px-[20rem] px-10 bg-gray-100 mb-20">
                    <div class="mt-20 mx-auto">
                        <AdminLocalStockSearch @sellTyre="sellTyre" :search_results="search_results" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlankLayout from "/resources/js/Shared/Layouts/BlankLayout.vue"
export default {
    layout: BlankLayout
}
</script>

<script setup>
import { router, Head } from "@inertiajs/vue3"
import Navbar from "/resources/js/Shared/Admin/Navbar.vue"
import Sidebar from "/resources/js/Shared/Admin/Sidebar.vue"
import AdminLocalStockSearch from "/resources/js/Shared/Admin/AdminLocalStockSearch.vue"
import {ref} from "vue";

defineProps({
    search_results: Object,
})

function sellTyre(_id) {
    console.log(_id)
    router.post('/admin/inventory/sell-tyre', {
        id: _id,
    }, {
        preserveScroll: true,
        preserveState: true,
    })
}

const sideBarOpen = ref(true)

function sidebar(value) {
    sideBarOpen.value = value;
}
</script>

<style scoped>

</style>
