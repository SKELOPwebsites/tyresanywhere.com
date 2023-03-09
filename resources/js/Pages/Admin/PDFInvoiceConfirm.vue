<template>
    <Head>
        <title>PDF Invoice</title>
    </Head>

    <iframe
        class="w-screen h-screen"
        :src="'/admin/pdf-invoice/stream'"
    ></iframe>

    <button @click="submit" :class="{'fixed bottom-4 left-1/2 -translate-x-1/2 mt-6 w-72 rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out': true, 'button--loading': form.processing}">
        <span v-if="!form.processing">Create & Send Invoice</span>
    </button>
</template>

<script>
import AdminLayout from "../../Shared/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { useForm, Head, Link, usePage } from "@inertiajs/vue3"
import Container from "../../Shared/Container.vue";
import {computed, watch} from "vue";

const props = defineProps({
    details: {
        type: Object,
        required: true,
    },
    errors: {
        type: Object,
        required: false,
    }
})

const form = useForm({
    date: props.details.date,
    name: props.details.name,
    phone: props.details.phone,
    email: props.details.email,
    address: props.details.address,
    town: props.details.town,
    postcode: props.details.postcode,
    fitting_address: props.details.fitting_address,
    fitting_town: props.details.fitting_town,
    fitting_postcode: props.details.fitting_postcode,
    registration: props.details.registration,
    fitting: props.details.fitting,
    callout: props.details.callout,
    disposal: props.details.disposal,
    callout_type: props.details.callout_type,
    tyres: props.details.tyres,
    items: props.details.items,
    payment_type: props.details.payment_type,
    amount_to_pay: props.details.amount_to_pay,
    recipient_email: props.details.recipient_email,
});

function submit() {
    form.post('/admin/pdf-invoice/send', {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        }
    })
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

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
