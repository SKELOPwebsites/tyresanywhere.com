<template>
    <Head>
        <title>Search Local Stock</title>
    </Head>


    <div class="container mt-20">
        <AdminLocalStockSearch @sellTyre="sellTyre" :search_results="search_results" />
    </div>

    <div class="min-h-[50vh]"></div>

</template>

<script>
import BlankLayout from "/resources/js/Shared/Layouts/BlankLayout.vue"
export default {
    layout: BlankLayout
}
</script>

<script setup>
import { Link, Head, usePage, router } from "@inertiajs/vue3"
import { ref, watch, onMounted, onUnmounted } from "vue"

import AdminLocalTyre from "/resources/js/Shared/Admin/AdminLocalTyre.vue"
import AddLocalTyre from "/resources/js/Shared/Admin/AddLocalTyre.vue"
import AdminColorPicker from "/resources/js/Shared/Admin/AdminColorPicker.vue"
import AdminLocalStockSearch from "/resources/js/Shared/Admin/AdminLocalStockSearch.vue"

defineProps({
    search_results: Object,
})

function sellTyre(_id) {
    router.post('/admin/inventory/sell-tyre', {
        id: _id,
    }, {
        preserveScroll: true,
        preserveState: true,
    })
}

</script>

<style scoped>

</style>
