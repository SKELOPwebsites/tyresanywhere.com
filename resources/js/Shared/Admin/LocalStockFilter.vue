<template>
    <div class="w-full h-full ml-10">
        <div class="relative text-gray-600">
            <input type="search" name="serch" placeholder="Search inventory..." class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none">
            <button @click="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <svg class="h-4 w-4 fill-current" viewBox="0 0 56.966 56.966">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                </svg>
            </button>
        </div>

        <div class="grid grid-cols-4 gap-x-4 h-24 pt-2">
            <div class="col-span-1 px-2 py-1 h-full box-shadow bg-gray-200">
                <span class="text-xs font-semibold">Brand</span>
                <Brand
                    class="mt-2"
                    :value="form.brand"
                    @update="newValue => form.brand = newValue"
                />
            </div>
            <div class="col-span-1 px-2 py-1 h-full box-shadow bg-gray-200">
                <span class="text-xs font-semibold">Quality</span>

                <div class="mt-2 flex flex-col items-start space-y-1">
                    <div class="flex items-center space-x-1">
                        <input type="checkbox" v-model="form.budget">
                        <label class="block text-xs text-gray-700">Budget</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="checkbox" v-model="form.midrange">
                        <label class="block text-xs text-gray-700">Mid Range</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="checkbox" v-model="form.premium">
                        <label class="block text-xs text-gray-700">Premium</label>
                    </div>
                </div>
            </div>
            <div class="col-span-1 px-2 py-1 h-full box-shadow bg-gray-200">
                <span class="text-xs font-semibold">Attributes</span>

                <div class="mt-2 flex flex-col items-start space-y-1">
                    <div class="flex items-center space-x-1">
                        <input type="checkbox" v-model="form.commercial">
                        <label class="block text-xs text-gray-700">Commercial</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="checkbox" v-model="form.runflat">
                        <label class="block text-xs text-gray-700">Run Flat</label>
                    </div>
                    <div class="flex items-center space-x-1">
                        <input type="checkbox" v-model="form.xl">
                        <label class="block text-xs text-gray-700">XL</label>
                    </div>
                </div>
            </div>
            <div class="col-span-1 px-2 h-full flex justify-end items-start">
                <button class="text-xs underline text-blue-600">Reset to default</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm, usePage } from "@inertiajs/vue3"
import Brand from './AddLocalTyreFields/Brand.vue'

const form = useForm({
    size: null,
    brand: null,
    budget: null,
    midrange: null,
    premium: null,
    commercial: null,
    runflat: null,
    xl: null,
})

const submit = () => {
    form.get(usePage().url)
}
</script>

<style scoped>
.box-shadow{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
</style>
