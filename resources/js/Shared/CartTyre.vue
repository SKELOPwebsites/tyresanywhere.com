<template>
    <div class="relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b">
        <div v-show="form.processing" class="absolute bg-gray-100/30 inset-0 z-10"></div>
        <div class="col-span-12 md:hidden flex pb-2">
            <span class="text-base text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ tyre.brand }} {{ tyre.model }} {{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }} {{ tyre.speed }}</span>
        </div>
        <div class="sm:col-span-2 col-span-3 flex items-center">
            <img class="w-full" :src="`/images/tyres/tyre_logo/${tyre.brand.toLowerCase()}.webp`" onerror="this.onerror=null; this.src=`/images/tyres/tyre/sample.webp`" :alt="capitalize(tyre.brand)">
        </div>
        <div class="sm:col-span-10 col-span-9 flex flex-col">
            <div class="flex justify-between pb-2">
                <span class="md:block hidden text-lg text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ tyre.brand }} {{ tyre.model }} {{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }} {{ tyre.speed }}</span>
                <div class="md:block hidden">
                    <span v-if="tyre.quantity < 4" class="text-black font-semibold md:text-lg text-base mt-auto">£{{ tyre.price }}</span>
                    <span v-else class="text-black mt-auto">
                        <del class="text-xs decoration-red-500 mr-2">£{{ tyre.price }}</del>
                        <span class="md:text-lg text-base font-semibold">£{{ tyre.price_offer }}</span>
                    </span>
                </div>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="text-xs"><b>Size:</b> {{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }}</span>
                <span class="text-xs"><b>Speed:</b> {{ tyre.speed }}</span>
            </div>
            <input v-model="form.tyre_id" type="hidden">
            <div class="mt-auto flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div class="w-fit relative">
                        <span class="absolute top-1/2 -translate-y-1/2 left-2 sm:text-sm text-xs bg-white pointer-events-none select-none">Qty: {{ form.quantity }}</span>
                        <select v-model="form.quantity" class="block sm:text-sm text-xs sm:w-20 w-16 py-1 px-2 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                            <option value="0">0</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <span class="text-sm text-gray-400">&#10072</span>
                    <button @click="deleteTyre">
                        <span class="text-xs text-sky-800 hover:underline">Delete</span>
                    </button>
                </div>
                <div class="md:hidden block">
                    <span v-if="tyre.quantity < 4" class="text-black font-semibold md:text-lg text-base mt-auto">£{{ tyre.price }}</span>
                    <span v-else class="flex flex-col items-start justify-start text-black mt-auto">
                        <del class="text-xs decoration-red-500 mr-2">£{{ tyre.price }}</del>
                        <span class="md:text-lg text-base font-semibold">£{{ tyre.price_offer }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch} from "vue"
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
    tyre: {
        type: Object,
        required: true,
    }
})

const form = useForm({
    tyre_id: props.tyre.id,
    quantity: props.tyre.quantity
})

watch(() => form.quantity, (quantity) => {
    form.submit('post', '/cart/quantity', {
        preserveScroll: true,
    })
})

function deleteTyre() {
    form.transform((data) => ({
        tyre_id: data.tyre_id,
        quantity: 0,
    }))
    .submit('post', '/cart/quantity', {
        preserveScroll: true,
    })
}

const capitalize = (text) => { return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase()); }
const convertToSlug = (text) => {
    return text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
</script>

<style scoped>
select{
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'> <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /> </svg>");
    background-position: right 0.25rem center;
    background-repeat: no-repeat;
    background-size: 1rem;
}

@media (min-width: 640px) {
    select{
        background-position: right 0.5rem center;
    }
}

</style>
