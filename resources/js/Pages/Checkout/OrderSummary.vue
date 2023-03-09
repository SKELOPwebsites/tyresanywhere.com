<template>
    <Head>
        <title>Order Summary | Tyres Anywhere LTD</title>
        <link rel="canonical" href="https://tyresanywhere.com/checkout">
    </Head>

    <div class="md:pb-24 sm:pb-12 pb-6">
        <Container>
            <div class="max-w-4xl mx-auto">
                <div class="bg-white lg:px-24 md:px-12 px-4 sm:py-12 py-6 rounded-lg border border-gray-300 shadow-lg">
                    <span class="block text-center sm:text-2xl text-xl font-light">Thank you for your order!</span>
                    <span class="block mt-2 text-center text-gray-500 sm:text-sm text-xs font-light">Your order is confirmed, here is your order summary - this will also be emailed to you.</span>

                    <div class="mb-6 mt-12">
                        <div class="flex items-center justify-between pb-3 border-b">
                            <span class="sm:text-2xl text-xl">Your Fitting Details</span>
                            <span class="sm:block hidden text-gray-500 text-sm mt-auto">Price</span>
                        </div>
                        <div class="relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b">
                            <div class="col-span-12 md:hidden flex pb-2">
                                <span class="sm:text-base text-sm text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ timeslot.slot_from }}-{{ timeslot.slot_to }} {{ timeslot.day }}/{{ timeslot.month }}/{{ timeslot.year }}</span>
                            </div>
                            <div class="sm:col-span-2 col-span-3 flex items-center">
                                <img class="w-full" src="/images/tyres/timeslot.webp" alt="Timeslot.vue">
                            </div>
                            <div class="sm:col-span-10 col-span-9 flex flex-col">
                                <div class="flex justify-between pb-2">
                                    <span class="md:block hidden text-base text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ timeslot.slot_from }}-{{ timeslot.slot_to }} {{ timeslot.day }}/{{ timeslot.month }}/{{ timeslot.year }}</span>
                                    <div class="md:block hidden">
                                        <span v-if="timeslot.price > 0" class="text-black font-semibold md:text-lg text-base mt-auto">£{{ timeslot.price }}</span>
                                        <span v-else class="text-black font-semibold md:text-lg text-base mt-auto">FREE</span>
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <span class="text-xs"><b>Timeslot:</b> {{ timeslot.slot_from }}-{{ timeslot.slot_to }}</span>
                                    <span class="text-xs"><b>Date:</b> {{ timeslot.day }}/{{ timeslot.month }}/{{ timeslot.year }}</span>
                                    <span class="text-xs"><b>Fitting Location:</b> {{ user.fitting_address_1 }}, {{ user.fitting_town }}, {{ user.fitting_postcode }}</span>
                                    <span class="text-xs"><b>Vehicle Reg #:</b> {{ user.registration }}</span>
                                    <span class="text-[10px] text-gray-400">If any of these detail(s) are missing or incorrect, please let us know ASAP</span>
                                </div>
                                <div class="mt-auto flex items-center justify-end">
                                    <div class="md:hidden block">
                                        <span class="text-black font-semibold md:text-lg text-base mt-auto">£{{ timeslot.price }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between pb-3 border-b">
                            <span class="sm:text-2xl text-xl">Your Cart</span>
                            <span class="sm:block hidden text-gray-500 text-sm mt-auto">Price</span>
                        </div>

                        <template v-for="item in cart">
                            <OrderSummaryTyre :tyre="item"></OrderSummaryTyre>
                        </template>

                        <div class="md:w-1/2 w-full mx-auto">
                            <div class="pt-8 pb-4 mx-4 space-y-4 border-b">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <span class="block text-sm">Subtotal</span>
                                        <span class="block text-[10px]">({{ summary.items }} items)</span>
                                    </div>
                                    <span class="block text-sm text-gray-600 font-semibold">£{{ summary.subtotal }}</span>
                                </div>
                                <div class="flex items-start justify-between">
                                    <div>
                                        <span class="block text-sm">Fitting & Balancing</span>
                                        <span class="block text-[10px]">£{{ summary.fitting_cost }} per tyre</span>
                                    </div>
                                    <span class="block text-sm text-gray-600 font-semibold">£{{ summary.fitting }}</span>
                                </div>
                                <div class="flex items-start justify-between">
                                    <div>
                                        <span class="block text-sm">Call-out</span>
                                        <span class="block text-[10px]">We Come To You</span>
                                    </div>
                                    <span class="block text-sm text-gray-600 font-semibold">£{{ summary.callout }}</span>
                                </div>
                                <div class="flex items-start justify-between">
                                    <div>
                                        <span class="block text-sm">Tyre Disposal</span>
                                        <span class="block text-[10px]">£{{ summary.disposal_cost }} per tyre</span>
                                    </div>
                                    <span class="block text-sm text-gray-600 font-semibold">£{{ summary.disposal }}</span>
                                </div>
                            </div>
                            <div class="pt-8 pb-4 px-4 space-y-4 border-b">
                                <div class="flex items-center justify-between">
                                    <span class="block text-sm">Total</span>
                                    <span class="block text-sm text-gray-600 font-semibold">£{{ summary.total }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="block text-sm">Paid 25%</span>
                                    <span class="block text-sm text-gray-600 font-semibold">-£{{ summary.total_today }}</span>
                                </div>
                                <div class="flex items-start justify-between">
                                    <div>
                                        <span class="block text-sm text-red-500">Remaining Balance</span>
                                        <span class="block text-[10px]">Pay when the tyre is fitted</span>
                                    </div>
                                    <span class="block text-sm text-gray-600 font-semibold">£{{ summary.total_later }}</span>
                                </div>
                            </div>
                            <span class="block text-[11px] text-center text-gray-500">TXN: {{ summary.txn_id }}</span>

                        </div>
                    </div>
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
import { Head } from "@inertiajs/vue3"
import Container from "../../Shared/Container.vue"
import OrderSummaryTyre from "../../Shared/OrderSummaryTyre.vue"

defineProps({
    order_summary: {
        type: Object,
        required: true,
    },
    summary: {
        type: Object,
        required: true,
    },
    cart: {
        type: Object,
        required: true,
    },
    timeslot: {
        type: Object,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    }
})

</script>

<style scoped>

</style>
