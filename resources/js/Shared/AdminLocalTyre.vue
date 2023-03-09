<template>
    <div class="relative">
        <div class="grid grid-cols-20 h-7 w-full border-x border-b border-gray-300">
            <TyreSize
                class="col-span-3 border-r"
                :text="form.width + '/' + form.profile + ' R' + form.rim"
                :width="form.width"
                :profile="form.profile"
                :rim="form.rim"
                :editable="true"
                @update="update"
            />
            <Brand
                class="col-span-3 border-r"
                :text="form.brand"
                :value="form.brand"
                :editable="true"
                @update="update"
            />
            <Text
                class="col-span-2 border-r"
                :text="form.cost"
                :value="form.cost"
                :editable="true"
                property="cost"
                @update="update"
            />
            <Text
                class="col-span-2 border-r"
                :text="(tyre.cost * tyre.quantity).toFixed(2).toString()"
                :editable="false"
            />
            <Quantity
                class="col-span-1 border-r"
                :text="form.quantity"
                :value="form.quantity"
                :editable="true"
                property="quantity"
                @update="update"
            />
            <Text
                class="col-span-4 border-r"
                :text="form.model"
                :value="form.model"
                :editable="true"
                property="model"
                @update="update"
            />
            <Text
                class="col-span-5"
                :text="form.notes"
                :value="form.notes"
                :editable="true"
                property="notes"
                @update="update"
            />
        </div>

        <button @click="deleteTyre" class="absolute text-red-500 top-1/2 -translate-y-1/2 translate-x-full right-0 w-7 h-7 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { router, Link, useForm } from "@inertiajs/vue3"
import Text from "./LocalTyreFields/Text.vue"
import Quantity from "./LocalTyreFields/Quantity.vue"
import TyreSize from "./LocalTyreFields/TyreSize.vue"
import Brand from "./LocalTyreFields/Brand.vue"

const props = defineProps({
    tyre: {
        type: Object,
        required: true,
    }
})

const form = useForm({
    width: props.tyre.width,
    profile: props.tyre.profile,
    rim: props.tyre.rim,
    brand: props.tyre.brand,
    model: props.tyre.model,
    cost: props.tyre.cost,
    quantity: props.tyre.quantity,
    notes: props.tyre.notes,
})

function update(property, value) {
    switch (property) {
        case 'size':
            form.width = value.width
            form.profile = value.profile
            form.rim = value.rim
            break
        case 'brand':
            form.brand = value
            break
        case 'model':
            form.model = value
            break
        case 'cost':
            form.cost = value
            break
        case 'quantity':
            form.quantity = value
            break
        case 'notes':
            form.notes = value
            break
    }

    form.put('/admin/manage-local-stock/'+props.tyre.id)
}

function deleteTyre() {
    if(confirm('Are you sure you want to delete this?')) {
        router.delete('/admin/manage-local-stock/' + props.tyre.id, {
            preserveState: true,
            preserveScroll: true,
        })
    }
}
</script>

<style scoped>

</style>
