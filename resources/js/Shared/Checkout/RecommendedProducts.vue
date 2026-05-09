<template>
    <div class="sm:p-6 p-0 sm:bg-stone-900 mb-10 rounded-lg">
        <h1 class="mb-3 sm:text-3xl text-2xl text-stone-300 text-center font-poppins font-bold">Recommended Tyres for you</h1>
        <div class="grid xl:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-4 gap-y-6 lg:px-0">
            <RecommendedProduct
                @addToCart="(a, b) => $emit('addToCart', a, b)"
                v-for="tyre in recommended_tyres"
                :tyre="tyre"
            />
        </div>
        <hr class="sm:hidden block mt-6 border-stone-900">
    </div>
</template>

<script setup>
import RecommendedProduct from "./RecommendedProduct.vue"

defineProps({
    recommended_tyres: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>

</style>
