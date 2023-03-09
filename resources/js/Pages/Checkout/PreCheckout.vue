<template>
    <Head>
        <title>Checkout - Fitting Details | Tyres Anywhere LTD</title>
        <link rel="canonical" href="https://tyresanywhere.com/checkout">
    </Head>

    <div class="pb-24">
        <Container>
            <div class="relative grid grid-cols-12 gap-x-6 gap-y-4">
                <div class="col-span-12">
                    <div class="lg:w-3/4 w-full">
                        <div class="w-[250px] mx-auto flex text-xs flex-row justify-between items-center text-gray-400">
                        <span class="flex items-center text-gray-600 font-bold">
                            Fitting Details
                        </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            Payment
                        </span>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-9 col-span-12 space-y-4">
                    <div class="bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg">
                        <span class="block text-center text-2xl font-light">Your Contact Details</span>
                        <span class="block mt-2 text-center text-gray-500 text-sm font-light">We'll use this to keep you updated on your order.</span>

                        <div class="mt-6">
                            <label for="phone" class="text-sm">Phone Number <span class="text-red-500">*</span></label>
                            <div class="flex items-center w-full bg-white border border-gray-300 rounded">
                                <span class="font-light text-sm px-4 py-1.5 bg-gray-100">+44</span>
                                <input v-model="form.phone" type="text" id="phone" class="grow-1 border-0 outline-0 text-sm py-1.5 px-3 w-full shadow-sm appearance-none outline-0 focus:ring-2 transition">
                            </div>
                            <span v-if="errors.phone" class="text-xs text-red-500">{{ errors.phone }}</span>
                        </div>
                        <div class="mt-4">
                            <label for="email" class="text-sm">Email Address <span class="text-red-500">*</span></label>
                            <input v-model="form.email" type="text" id="email" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                            <span v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</span>
                        </div>
                    </div>

                    <div class="bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg">
                        <span class="block text-center text-2xl font-light">Your Fitting Address</span>

                        <div class="mt-6">
                            <div class="sm:w-1/3 w-full">
                                <label for="postcode" class="text-sm">Postcode <span class="text-red-500">*</span></label>
                                <input v-model="form.postcode" type="text" id="postcode" class="uppercase text-sm py-1.5 px-3 w-full border border-gray-300 bg-gray-200 cursor-not-allowed shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" readonly disabled>
                            </div>
                            <span class="text-xs text-gray-500">To change your fitting address, please click <span @click="changePostcode" class="text-blue-600 underline cursor-pointer">here</span> - this will empty your cart.</span>
                        </div>
                        <div class="mt-4">
                            <label for="addressLine1" class="text-sm">Address Line 1 <span class="text-red-500">*</span></label>
                            <input v-model="form.addressLine1" type="text" id="addressLine1" autocomplete="address-line1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                            <span v-if="errors.addressLine1" class="text-xs text-red-500">{{ errors.addressLine1 }}</span>
                        </div>
                        <div class="mt-4">
                            <label for="addressLine2" class="text-sm">Address Line 2</label>
                            <input v-model="form.addressLine2" type="text" id="addressLine2" autocomplete="address-line2" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                            <span v-if="errors.addressLine2" class="text-xs text-red-500">{{ errors.addressLine2 }}</span>
                        </div>
                        <div class="mt-4">
                            <label for="town" class="text-sm">Town/City <span class="text-red-500">*</span></label>
                            <input v-model="form.town" type="text" id="town" autocomplete="address-level1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                            <span v-if="errors.town" class="text-xs text-red-500">{{ errors.town }}</span>
                        </div>
                        <div class="mt-4">
                            <div class="sm:w-1/3 w-full">
                                <label for="registration" class="text-sm">Vehicle Registration <span class="text-red-500">*</span></label>
                                <input v-model="form.registration" type="text" id="registration" class="uppercase text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.registration" class="text-xs text-red-500">{{ errors.registration }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg">
                        <span class="block text-center text-2xl font-light">Your Fitting Timeslot</span>
                        <div v-show="showTimeslotError" class="flex items-center justify-between bg-red-400 w-full py-3 px-4 mb-4 mt-6 rounded-lg">
                            <span class="text-sm text-white" v-text="$page.props.flash.errors.Timeslot.vue"></span>
                            <button @click="showTimeslotError = false; $page.props.flash.errors.timeslot = ''" class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <Timeslots class="mt-4" />

                        <div class="flex items-center justify-center mt-12">
                            <button @click="submit" :disabled="form.processing" :class="{'relative rounded-lg outline-0 h-12 w-64 text-base text-center uppercase transition duration-150 ease-in-out bg-green-500 hover:bg-green-600 text-white font-semibold': true, 'button--loading': form.processing}">
                                <span v-if="!form.processing">Continue</span>
                            </button>
                        </div>
                    </div>

                </div>
                <div class="lg:col-span-3 col-span-12 space-y-4">
                    <OrderSummary :summary="summary" :cart="cart" :tyre="tyre"/>
                </div>
            </div>
        </Container>
    </div>

</template>

<script>
import CheckoutLayout from "../../Shared/CheckoutLayout.vue"

export default {
    layout: CheckoutLayout
}
</script>

<script setup>
import { ref, watch } from "vue";
import { router, Head, useForm, usePage, Link } from "@inertiajs/vue3"
import Container from "../../Shared/Container.vue"
import OrderSummary from "../../Shared/OrderSummary.vue"
import Timeslots from "../../Shared/Timeslots.vue"

const props = defineProps({
    cart: {
        type: Object,
        required: true,
    },
    tyre: {
        type: Object,
        required: true,
    },
    summary: {
        type: Object,
        required: true,
    },
    errors: {
        type: Object,
        required: false,
    },
})

const showTimeslotError = ref(false);

watch(() => usePage().props.flash.errors.timeslot, (err) => {
    if(err) {
        showTimeslotError.value = true;
    }
})

const form = useForm({
    phone: null,
    email: null,
    postcode: props.cart.postcode,
    addressLine1: null,
    addressLine2: null,
    town: null,
    registration: null,
})

function submit() {
    form.post('/checkout');
}

function changePostcode() {
    router.post('/cart/remove');
}

</script>

<style scoped>
.button--loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}

</style>
