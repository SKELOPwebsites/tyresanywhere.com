<template>
    <div class="border-x border-b rounded-b-lg border-gray-300 font-montserrat">
        <div class="grid grid-cols-5 w-full py-4">
            <div class="col-span-1 p-1" v-for="date in timeslots.dates">
                <button @click="changeSelectedDate(date)" :class="{'border rounded-lg w-full px-4 py-2': true, 'bg-white border-2 border-green-500 text-black': date.date === selectedDate.date, 'bg-gray-100 border-gray-300': date.date !== selectedDate.date}">
                    <div class="flex items-center justify-center flex-col">
                        <span class="text-sm" v-text="date.day_text"></span>
                        <span class="text-sm font-semibold" v-text="date.day"></span>
                    </div>
                </button>
            </div>
        </div>
        <div class="p-4 bg-gray-100 border-y">
            <div class="flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold text-sm">Anytime</span>
            </div>
        </div>

        <div class="w-full p-4">
            <template v-for="(timeslot, index) in selectedDate.Timeslots.vue">
                <template v-if="timeslot.type === 'anytime'">
                    <TimeslotMob @selectTimeslot="(form, timeslotSelected) => $emit('selectTimeslot', form, timeslotSelected)" :timeslot="Timeslot.vue" :date="selectedDate" :key="selectedDate.date + timeslot.from"/>
                </template>
            </template>
        </div>

        <div class="p-4 bg-gray-100 border-y">
            <span class="font-semibold text-sm">Specific Times</span>
        </div>

        <div class="w-full p-4 space-y-4">
            <template v-for="(timeslot, index) in selectedDate.Timeslots.vue">
                <template v-if="timeslot.type === 'specific'">
                    <TimeslotMob @selectTimeslot="(form, timeslotSelected) => $emit('selectTimeslot', form, timeslotSelected)" :timeslot="Timeslot.vue" :date="selectedDate" :key="selectedDate.date + timeslot.from"/>
                </template>
            </template>

            <div v-if="selectedDate.timeslots.length < 2" class="">
                No specific times available
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import TimeslotMob from "./TimeslotMob.vue";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    timeslots: {
        type: Object,
        required: true,
    }
})

const selectedDate = ref(props.timeslots.dates[0])

function changeSelectedDate(date) {
    selectedDate.value = date;
}
</script>

<style scoped>

</style>
