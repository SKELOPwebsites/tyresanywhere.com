<template>
    <Head>
        <title>Copy Tyre</title>
    </Head>
    <Container>
        <div class="lg:w-1/2 w-full mx-auto pt-8">
            <p class="font-semibold text-3xl text-center mb-8">Copy Tyre</p>
            <div>
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="brand">
                    Brand <span class="text-red-500">*</span>
                </label>
                <div id="brand">
                    <SelectSearch
                        :modelValue="form.brand"
                        @update:modelValue="newValue => form.brand = newValue"
                        :data="tyre_brands"
                        placeholder="Select a brand"
                        name="brand"
                    ></SelectSearch>
                </div>
                <span class="text-xs text-red-500" v-if="errors.brand" v-text="errors.brand"></span>
            </div>
            <div class="mt-4">
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="model">
                    Model <span class="text-red-500">*</span>
                </label>
                <input
                    v-model="form.model"
                    id="model"
                    class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                    type="text"
                >
                <span class="text-xs text-red-500" v-if="errors.model" v-text="errors.model"></span>
            </div>
            <div class="w-full mt-4 flex items-start space-x-4">
                <div class="w-3/4">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="size">
                        Tyre Size <span class="text-red-500">*</span>
                    </label>
                    <div id="size">
                        <SelectSearch
                            :modelValue="form.size"
                            @update:modelValue="newValue => form.size = newValue"
                            :data="tyre_sizes"
                            placeholder="Select a tyre size"
                            name="size"
                        ></SelectSearch>
                    </div>
                    <span class="text-xs text-red-500" v-if="errors.size" v-text="errors.size"></span>
                </div>
                <div class="w-1/4">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="speed">
                        Speed <span class="text-red-500">*</span>
                    </label>
                    <input
                        v-model="form.speed"
                        id="speed"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                        :class="{'border-b border-b-red-500': errors.speed}"
                        type="text"
                    >
                </div>
            </div>
            <div class="w-full mt-4 flex items-start space-x-4">
                <div class="w-1/5">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="fuel">
                        Fuel R. <span class="text-red-500">*</span>
                    </label>
                    <div id="fuel">
                        <SelectSearch
                            :modelValue="form.fuel"
                            @update:modelValue="newValue => form.fuel = newValue"
                            :data="rating"
                            :error="errors.fuel"
                            placeholder="Fuel"
                            name="fuel"
                        ></SelectSearch>
                    </div>
                </div>
                <div class="w-1/5">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="wet">
                        Wet Grip R. <span class="text-red-500">*</span>
                    </label>
                    <div id="wet">
                        <SelectSearch
                            :modelValue="form.wet"
                            @update:modelValue="newValue => form.wet = newValue"
                            :data="rating"
                            :error="errors.wet"
                            placeholder="Wet Grip"
                            name="wet"
                        ></SelectSearch>
                    </div>
                </div>
                <div class="w-1/5">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="noise">
                        Noise Lvl. <span class="text-red-500">*</span>
                    </label>
                    <input
                        v-model="form.noise"
                        id="noise"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                        :class="{'border-b border-b-red-500': errors.noise}"
                        type="number"
                    >
                </div>
            </div>

            <div class="mt-8">
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="quality">
                    Tyre Quality <span class="text-red-500">*</span>
                </label>

                <div class="mt-2 flex flex-row items-center space-x-4" id="quality">
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="budget" v-model="form.quality" value="budget">
                        <label class="block sm:text-sm text-xs text-gray-700" for="budget">Budget</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="midrange" v-model="form.quality" value="midrange">
                        <label class="block sm:text-sm text-xs text-gray-700" for="midrange">Mid-range</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="premium" v-model="form.quality" value="premium">
                        <label class="block sm:text-sm text-xs text-gray-700" for="premium">Premium</label>
                    </div>
                </div>
                <span class="text-xs text-red-500" v-if="errors.quality" v-text="errors.quality"></span>
            </div>
            <div class="mt-8">
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="usage">
                    Tyre Usage <span class="text-red-500">*</span>
                </label>

                <div class="mt-2 flex flex-row items-center space-x-4" id="usage">
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="passenger" v-model="form.usage" value="passenger">
                        <label class="block sm:text-sm text-xs text-gray-700" for="passenger">Passenger</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="4x4" v-model="form.usage" value="4x4">
                        <label class="block sm:text-sm text-xs text-gray-700" for="4x4">4x4</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="passenger_4x4" v-model="form.usage" value="passenger_4x4">
                        <label class="block sm:text-sm text-xs text-gray-700" for="passenger_4x4">Passenger & 4x4</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="commercial" v-model="form.usage" value="commercial">
                        <label class="block sm:text-sm text-xs text-gray-700" for="commercial">Commercial</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="other" v-model="form.usage" value="other">
                        <label class="block sm:text-sm text-xs text-gray-700" for="other">Other</label>
                    </div>
                </div>
                <span class="text-xs text-red-500" v-if="errors.usage" v-text="errors.usage"></span>
            </div>
            <div class="mt-8">
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="extra_load">
                    Extra Load? <span class="text-red-500">*</span>
                </label>

                <div class="mt-2 flex flex-row items-center space-x-4" id="extra_load">
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="yes" value="1" v-model="form.extra_load">
                        <label class="block sm:text-sm text-xs text-gray-700" for="yes">Yes</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="radio" id="no" value="0" v-model="form.extra_load">
                        <label class="block sm:text-sm text-xs text-gray-700" for="no">No</label>
                    </div>
                </div>
                <span class="text-xs text-red-500" v-if="errors.extra_load" v-text="errors.extra_load"></span>
            </div>

            <div class="mt-8">
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="extra_load">
                    Tyre Season <span class="text-red-500">*</span>
                </label>

                <div class="mt-2 flex space-x-1">
                    <button v-for="season in tyreSeasons" @click="form.season = season.toLowerCase()" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': form.season === season.toLowerCase(), 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': form.season !== season.toLowerCase()}">
                        <span class="uppercase text-xs font-semibold" v-text="season"></span>
                    </button>
                </div>
                <span class="text-xs text-red-500" v-if="errors.season" v-text="errors.season"></span>
            </div>
            <div class="mt-8">
                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="extra_load">
                    Product Header <span class="text-red-500">*</span>
                </label>

                <div class="mt-2 flex space-x-1">
                    <button v-for="header in productHeaders" @click="form.header = header.toLowerCase()" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': form.header === header.toLowerCase(), 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': form.header !== header.toLowerCase()}">
                        <span class="uppercase text-xs font-semibold" v-text="header"></span>
                    </button>
                </div>
                <span class="text-xs text-red-500" v-if="errors.header" v-text="errors.header"></span>
            </div>

            <div class="w-full mt-8 flex items-center space-x-4">
                <div class="w-1/5">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="price">
                        Price <span class="text-red-500">*</span>
                    </label>
                    <input
                        v-model="form.price"
                        id="price"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                        :class="{'border-b border-b-red-500': errors.price_offer}"
                        type="number"
                    >
                </div>
                <div class="w-1/5">
                    <label class="block font-medium sm:text-sm text-xs text-gray-700" for="price_offer">
                        Price (4+ Tyres) <span class="text-red-500">*</span>
                    </label>
                    <input
                        v-model="form.price_offer"
                        id="price_offer"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                        :class="{'border-b border-b-red-500': errors.price_offer}"
                        type="number"
                    >
                </div>
            </div>

            <button @click="submit" :class="{'relative mt-4 w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out': true, 'button--loading': form.processing}">
                <span v-if="!form.processing">Create Tyre</span>
            </button>
            <span class="block text-center text-xs text-green-500" v-if="$page.props.flash.success.admin" v-text="$page.props.flash.success.admin"></span>
        </div>
    </Container>

    <div class="min-h-[50vh]"></div>
</template>

<script>
import AdminLayout from "../../../Shared/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { useForm, Head } from "@inertiajs/vue3"
import Container from "../../../Shared/Container.vue";
import SelectSearch from "../../../Shared/SelectSearch.vue";

const props = defineProps({
    errors: {
        type: Object,
        required: false,
    },
    success: {
        type: String,
        required: false,
    },
    tyre: {
        type: Object,
        required: true,
    },
    tyre_brands: {
        type: Object,
        required: true,
    },
    tyre_sizes: {
        type: Object,
        required: true,
    },
})

const rating = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
}
const productHeaders = ['Default', 'Best Selling', 'High Performance', 'Popular Choice', 'Best Budget'];
const tyreSeasons = ['None', 'All-Season', 'Summer', 'Winter'];

const form = useForm({
    brand: props.tyre.brand,
    model: props.tyre.model,
    size: props.tyre.width + '/' + props.tyre.profile + ' R' + props.tyre.rim,
    speed: props.tyre.speed,
    fuel: props.tyre.fuel,
    wet: props.tyre.wet,
    noise: props.tyre.noise,
    quality: props.tyre.quality,
    usage: props.tyre.usage,
    extra_load: props.tyre.extra_load,
    header: props.tyre.header === props.tyre.quality ? 'default' : props.tyre.header,
    season: props.tyre.season,
    price: props.tyre.price,
    price_offer: props.tyre.price_offer,
})

function submit() {
    form.post('/admin/tyres', {
        preserveScroll: false,
        preserveState: true,
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
