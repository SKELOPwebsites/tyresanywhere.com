<template>
    <div class="border-x border-b rounded-b-lg border-gray-300 font-montserrat">
        <div class="grid grid-cols-7 w-full py-4">
            <div class="col-span-2"></div>
            <div class="col-span-1" v-for="date in timeslots.dates">
                <div class="flex items-center justify-center flex-col">
                    <span v-text="date.day_text"></span>
                    <span class="font-semibold" v-text="date.day"></span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-7 py-4 bg-gray-100 border-y">
            <div class="col-span-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold text-sm">Anytime</span>
            </div>
        </div>

        <div class="grid grid-cols-7 w-full py-4">
            <div class="col-span-2 flex items-center justify-center">
                <span class="font-semibold text-sm text-gray-700" v-text="timeslots.slots[0]"></span>
            </div>
            <div class="col-span-1" v-for="date in timeslots.dates">
                <div v-if="date.timeslots[0]" class="flex items-center justify-center flex-col">
                    <template v-if="!date.timeslots[0].taken">
                        <Timeslot @selectTimeslot="(form, timeslotSelected) => $emit('selectTimeslot', form, timeslotSelected)" :timeslot="date.timeslots[0]" :date="date" :key="date.date"/>
                    </template>

                    <span v-else class="text-center block xl:w-20 md:w-16 w-14 xl:py-2 py-1 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed">
                        <span class="uppercase text-[10px] font-semibold">
                            Taken
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-7 py-4 bg-gray-100 border-y">
            <div class="col-span-2 flex items-center justify-center">
                <span class="font-semibold text-sm">Specific Times</span>
            </div>
        </div>

        <template v-for="(slot, index) in timeslots.slots">
            <div v-if="index !== 0" :class="{'grid grid-cols-7 w-full py-4': true, 'bg-gray-50': index % 2 === 0}">
                <div class="col-span-2 flex items-center justify-center">
                    <span class="font-semibold text-sm text-gray-700" v-text="slot"></span>
                </div>
                <div class="col-span-1" v-for="date in timeslots.dates">
                    <div v-if="date.timeslots[index]" class="flex items-center justify-center flex-col">
                        <template v-if="!date.timeslots[index].taken">
                            <Timeslot @selectTimeslot="(form, timeslotSelected) => $emit('selectTimeslot', form, timeslotSelected)" :timeslot="date.timeslots[index]" :date="date" :key="date.date"/>
                        </template>

                        <span v-else class="text-center block xl:w-20 md:w-16 w-14 xl:py-2 py-1 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed">
                            <span class="uppercase text-[10px] font-semibold">
                                Taken
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script setup>
import Timeslot from "./Timeslot.vue";
import {usePage} from "@inertiajs/vue3";

defineProps({
    timeslots: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>

</style>
