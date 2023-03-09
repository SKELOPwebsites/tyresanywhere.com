<template>
    <div>
        <div @click="$emit('selectTyre', tyre.id)" class="w-full mt-2 px-2 py-3 cursor-pointer flex items-center justify-start border border-gray-300 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" :class="{'h-6 w-6 mr-2': true, 'rotate-180': selectedTyre === tyre.id}" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span class="text-lg mr-2 font-semibold">{{ tyre.width }}/{{ tyre.profile }} R{{tyre.rim}} {{ tyre.speed }}</span>
            <span class="text-lg mr-2 font-light">{{ tyre.brand }}</span>
            <span class="text-lg font-light">{{ tyre.model }}</span>

            <div class="flex flex-row space-x-2 ml-auto" @click="stopPropagation">
                <Link :href="'/admin/tyres/create?copy='+tyre.id" class="block rounded bg-gray-400 text-white sm:text-sm text-xs font-semibold py-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                    </svg>
                </Link>
                <Link :href="'/admin/tyres/'+tyre.id+'/edit'" class="block rounded bg-gray-400 text-white sm:text-sm text-xs font-semibold py-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                    </svg>
                </Link>
                <button @click="deleteTyre" class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div :class="{'max-h-0 overflow-hidden transition-all duration-300 ease-in-out': true, 'max-h-[600px]': selectedTyre === tyre.id}">
            <table class="flex flex-col w-full text-sm px-3">
                <tbody class="md:space-y-0 space-y-4">
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Brand</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.brand }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Model</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.model }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Tyre Quality</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center capitalize">{{ tyre.quality }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Vehicle Type</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center capitalize">{{ tyre.usage }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Tyre Season</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center capitalize">{{ tyre.season }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Size</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.width }}/{{ tyre.profile }} R{{tyre.rim}}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Speed Rating</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.speed }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Extra Load</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.extra_load ? 'Yes' : 'No' }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Fuel Rating</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center uppercase">{{ tyre.fuel }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Wet Grip Rating</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center uppercase">{{ tyre.wet }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Noise Level</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.noise }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Product Header</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center capitalize">{{ tyre.header }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Price</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.price }}</td>
                </tr>
                <tr class="flex md:flex-row flex-col">
                    <th class="border px-4 py-2 md:w-40 md:shrink-0">Price (4+ Tyres)</th>
                    <td class="border px-2 py-2 md:grow md:text-left text-center">{{ tyre.price_offer }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { router, Link } from "@inertiajs/vue3"

const props = defineProps({
    tyre: {
        type: Object,
        required: true,
    },
    selectedTyre: {
        type: String,
        required: false,
    }
})

function deleteTyre() {
    if(confirm('Are you sure you want to delete this?')) {
        router.delete('/admin/tyres/' + props.tyre.id, {
            preserveState: true,
            preserveScroll: true,
        })
    }
}

function stopPropagation(e) {
    e.stopPropagation()
}
</script>

<style scoped>

</style>
