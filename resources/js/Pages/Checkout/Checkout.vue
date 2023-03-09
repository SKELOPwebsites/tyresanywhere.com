<template>
    <Head>
        <title>Checkout | Tyres Anywhere LTD</title>
        <link rel="canonical" href="https://tyresanywhere.com/checkout">
    </Head>

    <div class="pb-24">
        <Container class="">
            <div class="relative grid grid-cols-12 gap-x-6 gap-y-4">
                <div class="col-span-12">
                    <div class="lg:w-3/4 w-full">
                        <div class="w-[250px] mx-auto flex text-xs flex-row justify-between items-center text-gray-400">
                        <span class="flex items-center text-gray-600">
                            Fitting Details
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="flex items-center text-gray-600 font-bold">
                            Payment
                        </span>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-9 col-span-12 relative">
                    <div v-show="processing" class="absolute bg-gray-100/40 inset-0 z-10"></div>

                    <div class="bg-white rounded-lg border border-gray-300 shadow-lg">
                        <div class="flex items-center justify-start pt-2 pl-2">
                            <button @click="returnToFittingDetails" class="flex items-center justify-start text-gray-600 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm">Return to fitting details</span>
                            </button>
                        </div>

                        <div class="xl:px-24 sm:px-12 px-6 pb-12 pt-6">
                            <span class="block text-center text-2xl font-light">Billing Details</span>

                            <div class="mt-6">
                                <label for="firstname" class="text-sm">First Name <span class="text-red-500">*</span></label>
                                <input v-model="customer.firstname" type="text" id="firstname" autocomplete="given-name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.firstname" class="text-xs text-red-500">{{ errors.firstname }}</span>
                            </div>
                            <div class="mt-4">
                                <label for="lastname" class="text-sm">Last Name <span class="text-red-500">*</span></label>
                                <input v-model="customer.lastname" type="text" id="lastname" autocomplete="family-name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.lastname" class="text-xs text-red-500">{{ errors.lastname }}</span>
                            </div>

                            <SwitchGroup>
                                <div class="mt-12 w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4">
                                    <Switch
                                        v-model="useFittingAsBilling"
                                        :class='useFittingAsBilling ? "bg-green-500" : "bg-gray-200"'
                                        class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"
                                    >
                                    <span
                                        :class='useFittingAsBilling ? "translate-x-6" : "translate-x-1"'
                                        class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
                                    />
                                    </Switch>
                                    <SwitchLabel class="mr-4 sm:text-base text-sm sm:text-left text-center">Use my fitting address as my billing address</SwitchLabel>
                                </div>
                            </SwitchGroup>

                            <div class="mt-6 space-y-4" v-show="!useFittingAsBilling">
                                <div>
                                    <label for="addressLine1" class="text-sm">Address Line 1 <span class="text-red-500">*</span></label>
                                    <input v-model="billingAddress.addressLine1" type="text" id="addressLine1" autocomplete="address-line1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                    <span v-if="errors.addressLine1" class="text-xs text-red-500">{{ errors.addressLine1 }}</span>
                                </div>
                                <div>
                                    <label for="addressLine2" class="text-sm">Address Line 2</label>
                                    <input v-model="billingAddress.addressLine2" type="text" id="addressLine2" autocomplete="address-line2" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                    <span v-if="errors.addressLine2" class="text-xs text-red-500">{{ errors.addressLine2 }}</span>
                                </div>
                                <div>
                                    <label for="town" class="text-sm">Town/City</label>
                                    <input v-model="billingAddress.town" type="text" id="town" autocomplete="address-level1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                    <span v-if="errors.town" class="text-xs text-red-500">{{ errors.town }}</span>
                                </div>
                                <div>
                                    <label for="postcode" class="text-sm">Postcode <span class="text-red-500">*</span></label>
                                    <input v-model="billingAddress.postcode" type="text" id="postcode" autocomplete="postal-code" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                    <span v-if="errors.postcode" class="text-xs text-red-500">{{ errors.postcode }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg border border-gray-300 shadow-lg mt-4">
                        <div class="pb-12 xl:px-24 sm:px-12 px-6 pt-6">
                            <div class="flex flex-col items-center justify-center">
                                <span class="block text-center text-2xl">Total to pay now</span>
                                <span class="block text-center text-3xl font-bold mt-2">£{{ summary.total_today }}</span>
                                <span class="block text-center text-sm mt-2 text-gray-600">Pay <b>£{{ summary.total_later }}</b> when the tyre is fitted</span>
                            </div>

                            <div class="flex flex-wrap -mx-2 mt-8">
                                <div class="p-2 w-full space-y-4">
                                    <div>
                                        <label for="card-element" class="text-sm">Debit / Credit Card <span class="text-red-500">*</span></label>
                                        <div id="card-element"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-center mt-8">
                                <button
                                    @click="processPayment"
                                    :disabled="paymentProcessing"
                                    :class="{'relative rounded-lg outline-0 h-12 w-64 text-base text-center uppercase transition duration-150 ease-in-out bg-green-500 hover:bg-green-600 text-white font-semibold': true, 'button--loading': paymentProcessing}">
                                    <span v-if="!paymentProcessing" class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                        Pay Securely
                                    </span>
                                </button>
                            </div>
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
import { loadStripe } from "@stripe/stripe-js";
import { router, Head, useForm } from "@inertiajs/vue3"
import { ref, onMounted } from "vue"
import Container from "../../Shared/Container.vue"
import OrderSummary from "../../Shared/OrderSummary.vue"
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const props = defineProps({
    fitting_details: {
        type: Object,
        required: true,
    },
    timeslot: {
        type: Object,
        required: true,
    },
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

const useFittingAsBilling = ref(true);
const processing = ref(false);

const billingAddress = useForm({
    addressLine1: null,
    addressLine2: null,
    town: null,
    postcode: null
})

const customer = useForm({
    firstname: null,
    lastname: null,
    email: props.fitting_details.email,
    phone: props.fitting_details.phone,
    registration: props.fitting_details.registration,
    addressLine1: props.fitting_details.addressLine1,
    addressLine2: props.fitting_details.addressLine2,
    town: props.fitting_details.town,
    postcode: props.fitting_details.postcode,

    fitting_addressLine1: props.fitting_details.addressLine1,
    fitting_addressLine2: props.fitting_details.addressLine2,
    fitting_town: props.fitting_details.town,
    fitting_postcode: props.fitting_details.postcode,

    timeslot: props.timeslot,
})

const stripe = ref({});
const cardElement = ref({});

const paymentProcessing = ref(false);

onMounted(async () => {
    stripe.value = await loadStripe(process.env.MIX_STRIPE_KEY);

    const options = {
        classes: {
            base: 'text-sm py-2 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 transition',
            focus: 'ring-2',
            invalid: 'border-red-500'
        },
        hidePostalCode: true,
    }

    const elements = stripe.value.elements();

    cardElement.value = elements.create('card', options);
    cardElement.value.mount('#card-element');
})

async function processPayment() {
    // send the payment information to laravel + stripe
    paymentProcessing.value = true;

    customer.addressLine1 = useFittingAsBilling.value ? props.fitting_details.addressLine1 : billingAddress.addressLine1;
    customer.addressLine2 = useFittingAsBilling.value ? props.fitting_details.addressLine2 : billingAddress.addressLine2;
    customer.town = useFittingAsBilling.value ? props.fitting_details.town : billingAddress.town;
    customer.postcode = useFittingAsBilling.value ? props.fitting_details.postcode : billingAddress.postcode;

    const {paymentMethod, error} = await stripe.value.createPaymentMethod(
        'card', cardElement.value, {
            billing_details: {
                name: customer.firstname + ' ' + customer.lastname,
                email: customer.email,
                address: {
                    line1: customer.addressLine1,
                    line2: customer.addressLine2,
                    city: customer.town,
                    postal_code: customer.postcode,
                }
            }
        }
    );

    if (error) {
        paymentProcessing.value = false;
        console.log(error)
    }else {
        customer.transform((data) => ({
            ...data,
            payment_method_id: paymentMethod.id,
            amount: props.summary.total_today_pence,
            cart: JSON.stringify(props.cart),
        }));

        customer.post('/checkout/purchase', {
            onSuccess: () => {
                paymentProcessing.value = false;
            },
            onError: (err) => {
                paymentProcessing.value = false;
                console.log(err);
            }
        })
    }
}

function returnToFittingDetails() {
    processing.value = true;
    router.post('/checkout/remove-details', null, {
        onSuccess: () => {
            processing.value = false;
        }
    })
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
