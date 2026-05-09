<template>
    <div>
        <div
            class="relative grid grid-cols-27 h-7 w-full border-x border-gray-300 font-semibold"
            :class="{'bg-gray-200': (index % 2 !== 0) && !selected && tyre.enabled, 'bg-blue-500/50': selected && tyre.enabled, 'bg-red-300': !tyre.enabled}"
            @click="$emit('selectTyre', tyre.id)"
        >
            <Text
                class="col-span-1 border font-normal"
                :text="tyre.id"
                :editable="false"
            />
            <TyreSize
                class="col-span-2 border"
                :text="form.width + '/' + form.profile + ' R' + form.rim + (form.commercial ? 'C' : '')"
                :width="form.width"
                :profile="form.profile"
                :rim="form.rim"
                :commercial="form.commercial"
                :editable="true"
                @update="update"
                @contextmenu="copySizeToClipboard"
            />
            <Brand
                class="col-span-3 border"
                :text="form.brand"
                :value="form.brand"
                :editable="true"
                @update="update"
            />
            <Text
                class="col-span-5 border"
                :text="form.model"
                :value="form.model"
                :editable="true"
                property="model"
                @update="update"
            />
            <Select
                class="col-span-2 border capitalize"
                :text="form.quality"
                :value="form.quality"
                :options="['budget', 'midrange', 'premium']"
                :editable="true"
                property="quality"
                @update="update"
            />
            <Text
                class="col-span-1 border capitalize"
                :text="form.speed"
                :value="form.speed"
                :editable="true"
                property="speed"
                @update="update"
            />
            <Select
                class="col-span-2 border capitalize"
                :text="form.usage"
                :value="form.usage"
                :options="['passenger','4x4','passenger_4x4','commercial']"
                :editable="true"
                property="usage"
                @update="update"
            />
            <Select
                class="col-span-2 border capitalize"
                :text="form.season"
                :value="form.season"
                :options="['none','summer','winter','all-season']"
                :editable="true"
                property="season"
                @update="update"
            />
            <Checkbox
                class="col-span-1 border"
                :value="form.extra_load"
                :editable="true"
                property="extra_load"
                @update="update"
            />
            <Checkbox
                class="col-span-1 border"
                :value="form.runflat"
                :editable="true"
                property="runflat"
                @update="update"
            />
            <Select
                class="col-span-1 border uppercase"
                :text="form.fuel"
                :value="form.fuel"
                :options="['A','B','C','D','E','F','G']"
                :editable="true"
                property="fuel"
                @update="update"
            />
            <Select
                class="col-span-1 border capitalize"
                :text="form.wet"
                :value="form.wet"
                :options="['A','B','C','D','E']"
                :editable="true"
                property="wet"
                @update="update"
            />
            <Select
                class="col-span-1 border capitalize"
                :text="form.noise"
                :value="form.noise"
                :options="[67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]"
                :editable="true"
                property="noise"
                @update="update"
            />
            <Text
                class="col-span-2 border font-normal"
                :text="tyre.price"
                :value="tyre.price"
                :editable="true"
                property="price"
                @update="update"
            />
            <Text
                class="col-span-2 border font-normal"
                :text="tyre.price_offer"
                :value="tyre.price_offer"
                :editable="true"
                property="price_offer"
                @update="update"
            />



            <div v-if="selected" class="absolute right-0 bottom-0 translate-y-full bg-white p-1 flex flex-row space-x-2 ml-auto z-50" @click="stopPropagation">
                <Link :href="'/admin/tyres/create?copy='+tyre.id" class="block rounded bg-gray-400 text-white sm:text-sm text-xs font-semibold" v-tooltip="'Copy Tyre'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                    </svg>
                </Link>
                <button v-if="tyre.enabled" @click="enableTyre(false)" class="block rounded bg-yellow-500 text-white sm:text-sm text-xs font-semibold" v-tooltip="'Disable Tyre'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button v-else @click="enableTyre(true)" class="block rounded bg-green-400 text-white sm:text-sm text-xs font-semibold" v-tooltip="'Enable Tyre'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
                <button @click="deleteTyre" class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold" v-tooltip="'Delete Tyre'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
    </div>
</template>

<script setup>
import { computed } from "vue"
import {router, Link, useForm} from "@inertiajs/vue3"
import Text from "/resources/js/Shared/Admin/LocalTyreFields/Text.vue"
import Select from "/resources/js/Shared/Admin/LocalTyreFields/Select.vue"
import Checkbox from "/resources/js/Shared/Admin/LocalTyreFields/Checkbox.vue"
import Quantity from "/resources/js/Shared/Admin/LocalTyreFields/Quantity.vue"
import TyreSize from "/resources/js/Shared/Admin/LocalTyreFields/TyreSize.vue"
import Brand from "/resources/js/Shared/Admin/LocalTyreFields/Brand.vue"
import ConfirmDialogue from '/resources/js/Shared/Modal/ConfirmDialogue.vue'

const props = defineProps({
    tyre: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    selectedTyre: {
        type: Number,
        required: false,
    }
})

const selected = computed(() => {
    return props.selectedTyre === props.tyre.id;
})
const form = useForm({
    width: props.tyre.width,
    profile: props.tyre.profile,
    rim: props.tyre.rim,
    commercial: props.tyre.commercial,
    brand: props.tyre.brand,
    model: props.tyre.model,
    quality: props.tyre.quality,
    speed: props.tyre.speed,
    usage: props.tyre.usage,
    season: props.tyre.season,
    extra_load: props.tyre.extra_load,
    runflat: props.tyre.runflat,
    fuel: props.tyre.fuel,
    wet: props.tyre.wet,
    noise: props.tyre.noise,
    price: props.tyre.price,
    price_offer: props.tyre.price_offer,
})

function update(property, value) {
    switch (property) {
        case 'size':
            form.width = value.width
            form.profile = value.profile
            form.rim = value.rim
            form.commercial = value.commercial
            break
        case 'brand':
            form.brand = value
            break
        case 'model':
            form.model = value
            break
        case 'quality':
            form.quality = value
            break
        case 'speed':
            form.speed = value
            break
        case 'usage':
            form.usage = value
            break
        case 'season':
            form.season = value
            break
        case 'extra_load':
            form.extra_load = value
            break
        case 'runflat':
            form.runflat = value
            break
        case 'fuel':
            form.fuel = value
            break
        case 'wet':
            form.wet = value
            break
        case 'noise':
            form.noise = value
            break
        case 'price':
            form.price = value
            break
        case 'price_offer':
            form.price_offer = value
            break
    }

    form.post('/admin/products/'+props.tyre.id, {
        preserveState: true,
        preserveScroll: true
    })
}
function copySizeToClipboard(e) {
    e.preventDefault()
    navigator.clipboard.writeText(form.width + '  ' + form.profile + '  ' + form.rim)
}
function enableTyre(enable) {
    router.put('/admin/tyres/enable/' + props.tyre.id, { enabled: enable}, {
        preserveState: true,
        preserveScroll: true,
    })
}
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
