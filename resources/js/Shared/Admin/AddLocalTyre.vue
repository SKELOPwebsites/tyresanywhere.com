<template>
    <div class="relative">
        <div class="grid grid-cols-21 h-7 w-full border-x border-b border-gray-300">
            <div class="col-span-1"></div>
            <div class="col-span-3 border-x relative flex items-center justify-center border-gray-300 h-full text-[11px]">
                <div class="space-x-0.5 flex items-center">
                    <select v-model="form.width" class="bg-transparent border border-black rounded-sm w-12 text-center">
                        <option v-for="width in widths" :value="width" v-text="width"></option>
                    </select>
                    <select v-model="form.profile" class="bg-transparent border border-black rounded-sm w-10 text-center">
                        <option v-for="profile in profiles" :value="profile" v-text="profile"></option>
                    </select>
                    <select v-model="form.rim" class="bg-transparent border border-black rounded-sm w-10 text-center">
                        <option v-for="rim in rims" :value="rim" v-text="rim"></option>
                    </select>
                    <div class="relative w-5 h-5">
                        <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">C</span>
                        <input class="w-5 h-5" type="checkbox" :checked="form.commercial" v-model="form.commercial">
                    </div>
                </div>
            </div>
            <div class="col-span-1 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]">
                <input
                    type="number"
                    min="0"
                    v-model="form.quantity"
                    class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"
                >
            </div>
            <div class="col-span-3 border-r relative flex items-center justify-center border-gray-300 h-full">
                <Brand
                    :value="form.brand"
                    @update="newValue => form.brand = newValue"
                />
            </div>
            <div class="col-span-2 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]">
                <input
                    type="text"
                    v-model="form.cost"
                    class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"
                >
            </div>
            <div class="col-span-2 border-r relative border-gray-300 h-full"></div>
            <div class="col-span-4 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]">
                <input
                    type="text"
                    v-model="form.model"
                    class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"
                >
            </div>
            <div class="col-span-4 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]">
                <input
                    type="text"
                    v-model="form.notes"
                    class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"
                >
            </div>
            <div class="col-span-1 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]">
                <input
                    type="number"
                    v-model="form.sold"
                    class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"
                >
            </div>
        </div>

        <button @click="submit" class="absolute bg-green-400 top-1/2 -translate-y-1/2 translate-x-full right-0 w-7 h-7 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { watch } from "vue"
import { useForm, usePage } from "@inertiajs/vue3"
import Brand from "/resources/js/Shared/Admin/AddLocalTyreFields/Brand.vue"

const props = defineProps({
    copyData: {
        type: Object,
        required: false
    }
})
const emit = defineEmits(['inserted'])

watch(() => props.copyData, (newValue) => {
    form.width = newValue.width
    form.profile = newValue.profile
    form.rim = newValue.rim
    form.commercial = newValue.commercial
    form.brand = newValue.brand
    form.model = newValue.model
    form.cost = newValue.cost
    form.quantity = newValue.quantity
    form.notes = newValue.notes
    form.sold = newValue.sold
    console.log(newValue)
})
watch(() => usePage().props.insert_id, (newValue) => {
    if(!newValue) return

    setTimeout(() => {
        emit('inserted', newValue)
    }, 1000)
})
const form = useForm({
    width: null,
    profile: null,
    rim: null,
    commercial: false,
    brand: null,
    model: null,
    cost: null,
    quantity: null,
    notes: null,
    sold: 0,
})

const widths = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335]
const profiles = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
const rims = [14, 15, 16, 17, 18, 19, 20, 21, 22]

function submit() {
    form.post('/admin/inventory', {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            form.reset()
        }
    })
}
</script>

<style scoped>

</style>
