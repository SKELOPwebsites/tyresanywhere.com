<template>
    <button v-if="!timeslot.taken" @click="$emit('selectTimeslot', form, timeslotSelected)" :disabled="timeslotSelected" :class="{'border rounded-lg w-full px-4 py-2 flex items-center justify-between': true, 'bg-white border-2 border-green-500 text-black': timeslotSelected, 'bg-gray-100 border-gray-300': !timeslotSelected}">
        <div>
            <span class="font-semibold text-sm text-gray-700">{{ timeslot.from }} - {{ timeslot.to }}</span>
        </div>
        <div>
            <template v-if="timeslot.type === 'anytime'">
                <span v-if="date.price_anytime <= 0" class="uppercase text-sm font-semibold">Free</span>
                <span v-else class="uppercase text-sm font-semibold">£{{ date.price_anytime }}</span>
            </template>
            <template v-else-if="timeslot.type === 'specific'">
                <span v-if="date.price_specific <= 0" class="uppercase text-sm font-semibold">Free</span>
                <span v-else class="uppercase text-sm font-semibold">£{{ date.price_specific }}</span>
            </template>
        </div>
    </button>
    <button v-else disabled class="bg-gray-100 border-gray-300 opacity-50 border rounded-lg w-full px-4 py-2 flex items-center justify-between">
        <span class="font-semibold text-sm text-gray-700">{{ timeslot.from }} - {{ timeslot.to }}</span>
        <span class="uppercase text-sm font-semibold">TAKEN</span>
    </button>
</template>

<script setup>
import { computed } from "vue";
import { useForm, usePage } from "@inertiajs/vue3"

const timeslotSelected = computed(() => {
    let timeslot = usePage().props.cart.timeslot;
    if(!timeslot) return false;

    return timeslot.day === form.day && timeslot.month === form.month && timeslot.year === form.year && timeslot.from === form.from && timeslot.to === form.to;
});

const props = defineProps({
    timeslot: {
        type: Object,
        required: true,
    },
    date: {
        type: Object,
        required: true,
    }
})

const form = useForm({
    day: props.date.day,
    month: props.date.month,
    year: props.date.year,
    from: props.timeslot.from,
    to: props.timeslot.to
})

</script>

<style scoped>

</style>
