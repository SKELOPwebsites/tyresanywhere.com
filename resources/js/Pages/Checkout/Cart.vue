<template>
    <Head>
        <title>Your Cart | Tyres Anywhere LTD</title>
        <meta name="description" content="Your Cart">
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

                    <div class="text-xs  flex items-center bg-yellow-300 rounded-lg py-1 px-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 shrink-0 mr-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        <span>Site Maintenance: please call us to complete your order.</span>
                    </div>
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
import Container from "/resources/js/Shared/Main/Container.vue"
import CartTyre from "/resources/js/Shared/Checkout/Cart/CartTyre.vue"

defineProps({
    cart: {
        type: Object,
        required: false,
        default: {}
    },
    subtotal: {
        type: String,
        required: false,
    },
    items: {
        type: Number,
        required: false,
    }
})

</script>

<style scoped>

</style>
