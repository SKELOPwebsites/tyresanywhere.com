<template>
    <div>
        <div
            class="relative grid grid-cols-24 h-7 w-full border-x border-gray-300 font-semibold"
            :class="{'bg-gray-200': (index % 2 !== 0) && !selected, 'bg-blue-500/50': selected}"
            @click="$emit('selectOrder', order.id)"
            v-click-outside="() => customerDetailsOpen = false"
        >
            <div
                class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.id"></span>
            </div>
            <div
                class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.tyres[0].id"></span>
            </div>
            <div
                class="col-span-3 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.user.timeslot.slot_from + ' - ' + order.user.timeslot.slot_to + ' | ' + order.user.timeslot.day + '/' + order.user.timeslot.month + '/' + order.user.timeslot.year"></span>
            </div>
            <div
                class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.tyres[0].pivot.quantity"></span>
            </div>
            <div
                class="col-span-5 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <button @click="customerDetailsOpen = !customerDetailsOpen" class="flex items-center">
                    <span class="mr-1">{{ order.user.firstname }} {{ order.user.lastname }}</span>

                    <svg v-if="!customerDetailsOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w36 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                </button>
                <div v-if="customerDetailsOpen" class="absolute bottom-0 bg-white w-full translate-y-full p-2 z-10">
                    <div>Email: {{ order.user.email }}</div>
                    <div>Phone: {{ order.user.phone }}</div>
                    <div>Registration: {{ order.user.registration }}</div>
                    <div>Address: {{ order.user.address_1 }}</div>
                    <div>Town: {{ order.user.town }}</div>
                    <div>Postcode: {{ order.user.postcode }}</div>
                    <!-- Include other customer details -->
                </div>
            </div>
            <div
                class="col-span-3 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.user.fitting_address_1"></span>
            </div>
            <div
                class="col-span-2 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.user.fitting_town"></span>
            </div>
            <div
                class="col-span-2 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="order.user.fitting_postcode"></span>
            </div>
            <div
                class="col-span-3 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="new Date(order.created_at).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })"></span>
            </div>
            <div
                class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="(order.total / 100).toFixed(2)"></span>
            </div>
            <div
                class="col-span-2 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"
            >
                <span v-text="(order.remaining / 100).toFixed(2)"></span>
            </div>


            <div v-if="selected" class="absolute right-0 bottom-0 translate-y-full bg-white flex flex-row space-x-2 ml-auto z-50" @click="stopPropagation">
                <button @click="viewInvoice(order.id)" class="block rounded p-1 text-black sm:text-sm text-xs font-semibold" v-tooltip="'PDF Invoice'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
import {router, Link, useForm} from "@inertiajs/vue3"

const props = defineProps({
    order: {
        type: Object,
        required: true,
    },
    selectedOrder: {
        type: Number,
        required: false,
    },
    index: {
        type: Number,
        required: false,
    }
})

const selected = computed(() => {
    return props.selectedOrder === props.order.id;
})
const form = useForm({
    width: null,
})
const customerDetailsOpen = ref(false)

const viewInvoice = (id) => {
    const url = `/admin/invoices/${id}`;
    window.open(url, '_blank');
};

function stopPropagation(e) {
    e.stopPropagation()
}
</script>

<style scoped>

</style>
