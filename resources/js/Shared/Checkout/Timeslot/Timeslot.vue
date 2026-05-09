<template>
    <button @click="$emit('selectTimeslot', form, timeslotSelected)" :disabled="timeslotSelected" :class="{'xl:w-20 md:w-16 w-14 xl:py-2 py-1 rounded-lg': true, 'bg-white border-2 border-green-500 text-black': timeslotSelected, 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': !timeslotSelected}">
        <template v-if="timeslot.type === 'anytime'">
            <span v-if="date.price_anytime === 0" class="uppercase md:text-sm text-xs font-semibold">Free</span>
            <span v-else class="uppercase md:text-sm text-xs font-semibold">£{{ date.price_anytime }}</span>
        </template>
        <template v-if="timeslot.type === 'specific'">
            <span v-if="date.price_specific === 0" class="uppercase md:text-sm text-xs font-semibold">Free</span>
            <span v-else class="uppercase md:text-sm text-xs font-semibold">£{{ date.price_specific }}</span>
        </template>
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
