<template>
    <div class="flex flex-col w-full pt-2 rounded-md bg-transparent border border-stone-800 text-stone-300 shadow-2xl font-montserrat">
        <div @click="open = !open" class="flex flex-row xl:justify-center justify-between items-center pb-2 xl:mb-8 xl:px-0 px-4">
            <div class="xl:hidden block">
                <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
                <span class="lowercase text-center" v-text="usePage().props.products_count + ' products found'"></span>
                <span class="lowercase text-xs text-center mb-1" v-text="usePage().props.filter_count + ' filters selected'"></span>
                <a @click="resetFilters" class="flex items-center justify-center text-xs uppercase font-semibold text-site-400 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Reset
                </a>
            </div>
            <div class="xl:hidden block">
                <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
        </div>
        <div class="xl:block hidden bg-transparent transition-all duration-300 ease-in-out">
            <div class="w-full xl:text-base text-sm">
                <FilterDropdown :options="brands" :name="'Brand'" :id="'brand'" :value="filterForm.brand" @update="update"/>
                <FilterCheckbox :options="tyre_type" :name="'Tyre Type'" :id="'tyre_type'" :value="filterForm.tyre_type" @update="update"/>
                <FilterCheckbox :options="tyre_quality" :name="'Tyre Quality'" :id="'tyre_quality'" :value="filterForm.tyre_quality" @update="update"/>
                <FilterCheckbox :options="tyre_attr" :name="'Tyre Attributes'" :id="'tyre_attr'" :value="filterForm.tyre_attr" @update="update"/>
                <FilterRadio :options="speed_rating" :name="'Speed Rating'" :id="'speed_rating'" :value="filterForm.speed_rating" @update="update"/>
            </div>
        </div>
        <div v-if="open" class="xl:hidden block bg-transparent transition-all duration-300 ease-in-out">
            <div class="w-full xl:text-base text-sm">
                <FilterDropdown :options="brands" :name="'Brand'" :id="'brand'" :value="filterForm.brand" @update="update"/>
                <FilterCheckbox :options="tyre_type" :name="'Tyre Type'" :id="'tyre_type'" :value="filterForm.tyre_type" @update="update"/>
                <FilterCheckbox :options="tyre_quality" :name="'Tyre Quality'" :id="'tyre_quality'" :value="filterForm.tyre_quality" @update="update"/>
                <FilterCheckbox :options="tyre_attr" :name="'Tyre Attributes'" :id="'tyre_attr'" :value="filterForm.tyre_attr" @update="update"/>
                <FilterRadio :options="speed_rating" :name="'Speed Rating'" :id="'speed_rating'" :value="filterForm.speed_rating" @update="update"/>
            </div>
        </div>

        <div v-if="filterForm.processing" class="fixed w-full h-full bg-white opacity-10 inset-0 z-50"></div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useForm, usePage } from "@inertiajs/vue3"
import FilterDropdown from "./FilterDropdown.vue";
import FilterCheckbox from "./FilterCheckbox.vue";
import FilterRadio from "./FilterRadio.vue";

const open = ref(false)

const page = usePage()

const brands = {
    1: {
        name: 'Premium',
        options: ['Bridgestone', 'Continental', 'Dunlop', 'Goodyear', 'Michelin', 'Pirelli']
    },
    2: {
        name: 'Mid-Range',
        options: ['Avon', 'Falken', 'Firestone', 'Hankook', 'Nexen', 'Yokohama']
    },
    3: {
        name: 'Budget',
        options: ['Banoze', 'Farroad', 'Churchill']
    }
}
const tyre_type = [{label: '4x4', value: '4x4'}, {label: 'Car', value: 'passenger'},]
const tyre_quality = [
    {label: 'Budget', value: 'budget'},
    {label: 'Mid Range', value: 'midrange'},
    {label: 'Premium', value: 'premium'},
]
const tyre_attr = [
    {label: 'Commercial', value: 'commercial'},
    {label: 'Run Flat', value: 'runflat'},
    {label: 'Extra Load', value: 'extra_load'},
]
const speed_rating = [
    {label: 'T or better', value: 'T'},
    {label: 'H or better', value: 'H'},
    {label: 'V or better', value: 'V'},
    {label: 'W or better', value: 'W'},
]

let filterForm
if(page.props.filters) {
    filterForm = useForm({
        brand: page.props.filters.brand,
        tyre_type: page.props.filters.tyre_type,
        tyre_quality: page.props.filters.tyre_quality,
        tyre_attr: page.props.filters.tyre_attr,
        speed_rating: page.props.filters.speed_rating,
    })
} else {
    filterForm = useForm({
        brand: null ,
        tyre_type: null,
        tyre_quality: null,
        tyre_attr: null,
        speed_rating: null,
    })
}

function update(property, value) {
    switch (property) {
        case 'brand':
            filterForm.brand = value
            break
        case 'tyre_type':
            filterForm.tyre_type = value
            break
        case 'tyre_quality':
            filterForm.tyre_quality = value
            break
        case 'tyre_attr':
            filterForm.tyre_attr = value
            break
        case 'speed_rating':
            filterForm.speed_rating = value
            break
    }

    filterForm.post('/tyre/filter')
}
function resetFilters() {
    filterForm.brand = null
    filterForm.tyre_type = null
    filterForm.tyre_quality = null
    filterForm.tyre_attr = null
    filterForm.speed_rating = null

    filterForm.post('/tyre/filter')
}
</script>

<style scoped>

</style>
