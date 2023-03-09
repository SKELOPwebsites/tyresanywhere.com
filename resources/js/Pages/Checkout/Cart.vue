<template>
    <Head>
        <title>Your Cart | Tyres Anywhere LTD</title>
        <link rel="canonical" href="https://tyresanywhere.com/cart">
    </Head>

    <div class="bg-gray-200 pt-8">
        <Container v-if="cart" class="pb-56 grid grid-cols-12 gap-x-4 gap-y-4 items-start">
            <div class="2xl:col-span-9 xl:col-span-8 col-span-12 w-full sm:px-5 px-3 py-5 bg-white">
                <div class="flex items-center justify-between pb-3 border-b">
                    <span class="sm:text-2xl text-xl">Your Cart</span>
                    <span class="sm:block hidden text-gray-500 text-sm mt-auto">Price</span>
                </div>

                <CartTyre :tyre="cart"/>

                <div class="flex items-center justify-end pt-3">
                    <span class="sm:text-lg">Subtotal ({{ items }} items): <b>£{{ subtotal }}</b></span>
                </div>
            </div>

            <div class="2xl:col-span-3 xl:col-span-4 col-span-12 w-full px-5 py-5 bg-white">
                <div class="flex flex-col items-center justify-start">
                    <span class="sm:text-lg">Subtotal ({{ items }} items): <b>£{{ subtotal }}</b></span>

                    <span class="flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2rem] bg-gray-400 hover:cursor-not-allowed text-white font-semibold text-sm text-center uppercase transition duration-150 ease-in-out">
                        Unavailable
                    </span>
                </div>
            </div>
        </Container>

        <Container v-else class="2xl:py-32 xl:py-28 lg:py-24 md:py-16 sm:py-6">
            <div class="lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5 bg-white mx-auto">
                <div class="h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden">
                    <img class="md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50" src="/images/cart/empty-shopping-cart.png" alt="">

                    <div class="flex flex-col z-10">
                        <span class="sm:text-2xl text-xl font-semibold">Your Cart is empty!</span>

                        <a class="flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out" href="/search-tyres">
                            Search for Tyres
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </div>

</template>

<script setup>
import { Head } from "@inertiajs/vue3"
import Container from "../../Shared/Container.vue"
import CartTyre from "../../Shared/CartTyre.vue"

defineProps({
    cart: {
        type: Object,
        required: true,
    },
    subtotal: {
        type: String,
        required: true,
    },
    items: {
        type: Number,
        required: true,
    }
})

</script>

<style scoped>

</style>
