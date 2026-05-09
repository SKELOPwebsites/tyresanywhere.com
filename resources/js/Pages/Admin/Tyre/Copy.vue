<template>
    <Head>
        <title>Copy Product</title>
    </Head>
    <div class="container">
        <div class="w-full mx-auto pt-8">
            <div class="flex justify-center items-center space-x-4 mb-8">
                <p class="font-semibold text-3xl text-center">Copy Product</p>
            </div>

            <ProductForm :tyre="tyre" :tyre_brands="tyre_brands" :tyre_sizes="tyre_sizes" :errors="errors"/>
        </div>
    </div>

    <div class="min-h-[50vh]"></div>
</template>

<script>
import AdminLayout from "/resources/js/Shared/Layouts/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { Head } from "@inertiajs/vue3"
import ProductForm from "/resources/js/Shared/Admin/ProductForm.vue";

const props = defineProps({
    errors: {
        type: Object,
        required: false,
    },
    success: {
        type: String,
        required: false,
    },
    tyre: {
        type: Object,
        required: true,
    },
    tyre_brands: {
        type: Object,
        required: true,
    },
    tyre_sizes: {
        type: Object,
        required: true,
    },
})
</script>

<style scoped>

</style>
