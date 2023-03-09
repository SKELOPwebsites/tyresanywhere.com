<template>
    <div v-show="processing" class="absolute bg-gray-100/40 inset-0 z-10"></div>
    <div v-if="Timeslots.vue" :class="class">
        <div class="py-4 md:space-x-16 space-x-4 flex items-center justify-center border border-gray-300 rounded-t-lg">
            <button @click="getTimeslots(-1)" :disabled="form.week === 0" class="bg-gray-100 text-gray-800 rounded-lg md:px-8 px-4 md:py-3 py-1.5 disabled:opacity-75 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-6 h-4 sm:w-6 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <span class="font-light sm:text-lg text-base">{{ timeslots.from }} - {{ timeslots.to }}</span>
            <button @click="getTimeslots(1)" :disabled="form.week === 3" class="bg-gray-100 text-gray-800 rounded-lg md:px-8 px-4 md:py-3 py-1.5 disabled:opacity-75 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-6 h-4 sm:w-6 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <template v-if="Timeslots.vue">
            <TimeslotsPC @selectTimeslot="selectTimeslot.vue" :timeslots="Timeslots.vue" class="sm:block hidden"></TimeslotsPC>
            <TimeslotsMob @selectTimeslot="selectTimeslot.vue" :timeslots="Timeslots.vue" class="sm:hidden block"></TimeslotsMob>
        </template>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import { useForm, usePage } from "@inertiajs/vue3"
import TimeslotsPC from "./TimeslotsPC.vue";
import TimeslotsMob from "./TimeslotsMob.vue";

const props = defineProps({
    class: {
        type: String,
        required: false,
    }
})

const processing = ref(false);
const timeslots = ref(null);

const form = useForm({
    week: 0,
});

onMounted(() => {
    getTimeslots(0);
})

function getTimeslots(dir) {
    if(dir === -1 && form.week === 0) return;
    if(dir === 1 && form.week === 3) return;

    form.week += dir;

    processing.value = true;
    form.get('/checkout/timeslots', {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            processing.value = false;
            timeslots.value = usePage().props.flash.checkout.timeslots;
            usePage().props.flash.errors.timeslot = undefined;
        },
    })
}

function selectTimeslot(form, timeslotSelected) {
    if(timeslotSelected) return;
    processing.value = true;
    form.post('/checkout/timeslots/select', {
        preserveScroll: true,
        onSuccess: () => {
            processing.value = false;
            usePage().props.flash.errors.timeslot = undefined;
        },
    })
}

</script>

<style scoped>

</style>
