<template>
    <h1 class="text-center text-3xl font-semibold">Search Tyre</h1>
    <div class="grid grid-cols-10 mt-4 gap-x-1 gap-y-2">
        <div class="col-span-3">
            <select v-model="form.width" class="block md:text-base text-sm w-full py-2 pl-4 sm:pr-9 pr-5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600">
                <option value="null">Width</option>
                <option v-for="width in widths" :value="width" v-text="width"></option>
            </select>
        </div>
        <div class="col-span-3">
            <select v-model="form.profile" class="block md:text-base text-sm w-full py-2 pl-4 sm:pr-9 pr-5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600">
                <option value="null">Profile</option>
                <option v-for="profile in profiles" :value="profile" v-text="profile"></option>
            </select>
        </div>
        <div class="col-span-3">
            <select v-model="form.rim" class="block md:text-base text-sm w-full py-2 pl-4 sm:pr-9 pr-5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600">
                <option value="null">Rim</option>
                <option v-for="rim in rims" :value="rim" v-text="rim"></option>
            </select>
        </div>
        <div class="col-span-1">
            <button @click="submit" class="flex items-center justify-center bg-green-400 h-full w-full rounded-md text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>

    <h1 v-if="search_results && search_results.length" class="text-center text-2xl font-semibold mt-12" v-text="search_results[0].width + '/' + search_results[0].profile + ' R' + search_results[0].rim"></h1>
    <h1 v-else class="text-center text-2xl font-semibold mt-12">No tyres in this size</h1>

    <div class="mt-6 space-y-2">
        <button
            v-for="tyre in search_results"
            class="relative group overflow-hidden bg-white p-2 w-full rounded-lg shadow-lg flex items-center"
        >
            <div class="h-7 mr-3">
                <img v-if="tyre.commercial" class="h-full" src="/images/tyres/icons/commercial.webp">
                <img v-else class="h-full" src="/images/tyres/icons/passenger.webp">
            </div>
            <div class="flex flex-col">
                <div><span class="font-semibold mr-2" v-text="tyre.brand"></span><span>({{tyre.quantity}})</span></div>
                <span class="text-xs text-left" v-text="tyre.model"></span>
            </div>
            <span class="ml-auto font-semibold" v-text="'£' + tyre.cost"></span>

            <button @click="sellTyre(tyre.id)" class="absolute right-0 bg-green-400 w-40 h-9 translate-x-full group-focus:translate-x-0 transition">
                <span class="font-bold uppercase">Sell 1</span>
            </button>
        </button>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3"

defineProps({
    search_results: Object,
})

const emit = defineEmits(['sellTyre'])

const widths = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335]
const profiles = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
const rims = [14, 15, 16, 17, 18, 19, 20, 21, 22]

const form = useForm({
    width: null,
    profile: null,
    rim: null,
})

function submit() {
    form.post('/admin/inventory/search', {
        preserveScroll: true,
        preserveState: true,
    })
}

function sellTyre(_id) {
    emit('sellTyre', _id)
}

</script>

<style scoped>

</style>
