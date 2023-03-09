<template>
    <div class="sticky top-4 space-y-4">
        <div class="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-lg">
            <div class="flex items-center justify-between w-full bg-gray-700 py-2 px-2">
                <span class="text-white uppercase text-sm font-semibold tracking-wide">Order Summary</span>
                <Link method="post" href="/cart/remove-details" as="button" type="button" class="text-white text-sm underline tracking-wide">Edit</Link>
            </div>

            <div class="px-4">
                <div class="py-4 border-b">
                    <span class="block whitespace-nowrap overflow-hidden text-ellipsis xl:text-base lg:text-sm text-base">{{ tyre.brand }} {{ tyre.model }}</span>
                    <span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500">{{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }} {{ tyre.speed }}</span>

                    <div class="flex items-center justify-between">
                        <span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500">Qty: {{ tyre.quantity }}</span>
                        <span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-600 font-semibold">£{{ tyre.total }}</span>
                    </div>
                </div>
                <template v-if="cart.Timeslot.vue">
                    <div class="py-4 border-b">
                        <span class="block whitespace-nowrap overflow-hidden text-ellipsis xl:text-base lg:text-sm text-base">Fitting {{ cart.timeslot.day }}/{{ cart.timeslot.month }}/{{ cart.timeslot.year }}</span>
                        <span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500">{{ cart.timeslot.from }} - {{ cart.timeslot.to }}</span>

                        <div class="flex items-center justify-between">
                            <span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500"></span>
                            <span v-if="cart.timeslot.price" class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-600 font-semibold">£{{ cart.timeslot.price }}</span>
                            <span v-else class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-600 font-semibold">Free</span>
                        </div>
                    </div>
                </template>
            </div>

            <div class="pt-8 pb-4 mx-4 space-y-4">
                <div class="flex items-center justify-between">
                    <span class="block xl:text-sm lg:text-xs text-sm">Subtotal</span>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.subtotal }}</span>
                </div>
                <div class="flex items-start justify-between">
                    <div>
                        <span class="block xl:text-sm lg:text-xs text-sm">Fitting & Balancing</span>
                        <span class="block text-[10px]">£{{ summary.fitting_cost }} per tyre</span>
                    </div>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.fitting }}</span>
                </div>
                <div class="flex items-start justify-between">
                    <div>
                        <span class="block xl:text-sm lg:text-xs text-sm">Call-out</span>
                        <span class="block text-[10px]">We Come To You</span>
                    </div>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.callout }}</span>
                </div>
                <div class="flex items-start justify-between">
                    <div>
                        <span class="block xl:text-sm lg:text-xs text-sm">Tyre Disposal</span>
                        <span class="block text-[10px]">£{{ summary.disposal_cost }} per tyre</span>
                    </div>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.disposal }}</span>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-lg">
            <div class="pt-8 pb-4 px-4 space-y-4 border-b">
                <div class="flex items-center justify-between">
                    <span class="block xl:text-sm lg:text-xs text-sm">Total</span>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.total }}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="block xl:text-sm lg:text-xs text-sm">Pay 25% Today</span>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.total_today }}</span>
                </div>
                <div class="flex items-start justify-between">
                    <div>
                        <span class="block xl:text-sm lg:text-xs text-sm text-red-500">Remaining Balance</span>
                        <span class="block text-[10px]">Pay when the tyre is fitted</span>
                    </div>
                    <span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£{{ summary.total_later }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"

defineProps({
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
})
</script>

<style scoped>

</style>
