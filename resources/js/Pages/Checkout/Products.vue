<template>
    <Head>
        <title>Products | Tyres Anywhere LTD</title>
        <link rel="canonical" href="https://tyresanywhere.com/checkout/products">
    </Head>

    <div class="hidden" hidden>
        <div class="text-budget-secondary bg-budget-primary border-budget-primary"></div>
        <div class="text-midrange-secondary bg-midrange-primary border-midrange-primary"></div>
        <div class="text-premium-secondary bg-premium-primary border-premium-primary"></div>
        <div class="text-high-performance-secondary bg-high-performance-primary border-high-performance-primary"></div>
        <div class="text-best-budget-secondary bg-best-budget-primary border-best-budget-primary"></div>
        <div class="text-best-selling-secondary bg-best-selling-primary border-best-selling-primary"></div>
        <div class="text-popular-choice-secondary bg-popular-choice-primary border-popular-choice-primary"></div>
        <div class="text-custom-secondary bg-custom-primary border-custom-primary"></div>
    </div>

    <div class="bg-gray-200">
        <Container v-if="tyres.length > 0" class="py-12">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-12 gap-y-6 lg:px-0 md:px-12">
                <Product @addToCart="addToCart" v-for="tyre in tyres" :tyre="tyre"></Product>
            </div>
        </Container>
        <Container v-else class="2xl:py-32 xl:py-28 lg:py-24 md:py-16 sm:py-6">
            <div class="lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5 bg-white mx-auto">
                <div class="h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden">
                    <img class="md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50" src="/images/cart/empty-shopping-cart.png" alt="">

                    <div class="flex flex-col z-10">
                        <span class="sm:text-2xl text-xl font-semibold">No products found!</span>

                        <a class="flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out" href="/search-tyres">
                            Search for Tyres
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </div>


    <Transition name="success">
        <div v-show="cartSuccess" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold">
            Item successfully added to your cart.
        </div>
    </Transition>

</template>

<script setup>
import { router, Head, usePage } from "@inertiajs/vue3"
import { computed, watch } from "vue"
import Container from "../../Shared/Container.vue"
import Product from "../../Shared/Product.vue"

const cartSuccess = computed(() => usePage().props.flash.success.cart.add);

watch(cartSuccess, () => {
    if(cartSuccess.value) {
        //play a ding sound
        let audio = new Audio('/audio/notify.mp3');
        audio.play();

        setTimeout(() => {
            usePage().props.flash.success.cart.add = '';
        }, 2000)
    }
})

defineProps({
    tyres: Object
})

function addToCart(form, inCart) {
    if(inCart) {
        router.get('/cart')
        return;
    }

    if(form.tyre_id && form.quantity){
        form.submit('post', '/cart/add', {
            preserveScroll: true
        })
    }
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
