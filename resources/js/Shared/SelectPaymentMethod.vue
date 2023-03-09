<template>
    <div class="w-full pb-16 pt-12">
        <div class="w-full mx-auto">
            <RadioGroup v-model="selected">
                <RadioGroupLabel class="sr-only">Payment Method</RadioGroupLabel>
                <div class="grid grid-cols-2 gap-x-4">
                    <RadioGroupOption as="template" v-for="payment in payments" :key="payment.name" :value="payment" v-slot="{ active, checked }">
                        <div :class="[checked ? 'shadow-sm shadow-green-500 border-green-500 text-white ' : 'bg-white shadow-md border-transparent']" class="grid-cols-1 relative flex px-3 py-4 rounded-lg border cursor-pointer focus:outline-none">
                            <div class="flex items-center justify-between w-full">
                                <div class="flex items-center space-x-6">
                                    <div>
                                        <img v-if="payment.type === 'card'" src="/images/main/payment_card.png" alt="Pay using Debit / Credit Card" class="w-28">
                                        <img v-else-if="payment.type === 'paypal'" src="/images/main/payment_paypal.png" alt="Pay using PayPal" class="w-28">
                                    </div>
                                    <div class="text-sm">
                                        <RadioGroupLabel as="p" class="font-medium text-lg text-gray-900">
                                            {{ payment.name }}
                                        </RadioGroupLabel>
                                        <RadioGroupDescription as="span" class="inline text-sm text-gray-400">
                                            <span> {{ payment.desc }}</span>
                                        </RadioGroupDescription>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupDescription, RadioGroupOption } from '@headlessui/vue'

const payments = [
    {
        type: 'card',
        name: 'Debit / Credit Card',
        desc: 'Visa, AMEX, MasterCard, Maestro, Discover',
    },
    {
        type: 'paypal',
        name: 'PayPal',
        desc: 'Pay with PayPal, Debit or Credit Card',
    }
]

const selected = ref(payments[0])
</script>

<style scoped>

</style>
