<template>
    <Head>
        <title>Products | Tyres Anywhere LTD</title>
        <meta name="description" content="Products">
        <link rel="canonical" href="https://tyresanywhere.com/checkout/products">
    </Head>

    <Container class="font-montserrat">
        <div class="py-12 sm:px-4 px-2">
            <div class="grid grid-cols-12 gap-x-4 xl:gap-y-0 gap-y-4">
                <div class="xl:col-span-2 col-span-12">
                    <ProductFilter />
                </div>
                <div class="xl:col-span-10 col-span-12">
                    <template v-if="recommended_tyres.length > 0">
                        <RecommendedProducts @addToCart="addToCart" :recommended_tyres="recommended_tyres"/>
                    </template>
                    <div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-12 gap-y-6">
                        <Product @addToCart="addToCart" v-for="tyre in tyres" :tyre="tyre"></Product>

                        <div v-if="tyres.length + recommended_tyres.length <= 0" class="container">
                            <div class="lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5  mx-auto">
                                <div class="h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden">
                                    <img class="md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50" src="/images/cart/empty-shopping-cart.png" alt="">

                                    <div class="flex flex-col z-10">
                                        <span class="sm:text-2xl text-xl font-semibold">No products found!</span>

                                        <Link href="/" class="flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out">
                                            Search for Tyres
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>


    <Transition name="success">
        <div v-show="cartSuccess" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold">
            Item successfully added to your cart.
        </div>
    </Transition>

</template>

<script setup>
import { router, usePage, Head, Link } from "@inertiajs/vue3"
import { computed, watch } from "vue"
import Container from "/resources/js/Shared/Main/Container.vue"
import Product from "/resources/js/Shared/Checkout/Product.vue"
import ProductFilter from "/resources/js/Shared/Checkout/ProductFilter.vue"
import RecommendedProducts from "/resources/js/Shared/Checkout/RecommendedProducts.vue"

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
    tyres: Object,
    recommended_tyres: Object,
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
