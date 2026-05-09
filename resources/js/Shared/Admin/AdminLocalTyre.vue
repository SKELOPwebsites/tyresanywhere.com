<template>
    <div class="relative">
        <div class="grid grid-cols-21 h-7 w-full border-x border-gray-300 font-semibold">
            <Text
                class="col-span-1 border font-normal"
                :text="index + 1"
                :editable="false"
                @click="$emit('selectRow', tyre.id)"
                :data-id="tyre.id"
            />
            <TyreSize
                class="col-span-3 border"
                :style="{ background: tyre.tyre_size_bg, color: tyre.tyre_size_font }"
                :text="form.width + '/' + form.profile + ' R' + form.rim + (form.commercial ? 'C' : '')"
                :width="form.width"
                :profile="form.profile"
                :rim="form.rim"
                :commercial="form.commercial"
                :editable="true"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="tyre_size"
                @contextmenu="copySizeToClipboard"
            />
            <Quantity
                class="col-span-1 border"
                :style="{ background: tyre.quantity === 0 ? '#ff0000' : tyre.quantity_bg, color: tyre.quantity_font }"
                :text="form.quantity"
                :value="form.quantity"
                :editable="true"
                property="quantity"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="quantity"
            />
            <Brand
                class="col-span-3 border"
                :style="{ background: tyre.brand_bg, color: tyre.brand_font }"
                :text="form.brand"
                :value="form.brand"
                :editable="true"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="brand"
            />
            <Text
                class="col-span-2 border"
                :style="{ background: tyre.price_bg, color: tyre.price_font }"
                :text="'£'+form.cost"
                :value="form.cost"
                :editable="true"
                property="cost"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="price"
            />
            <Text
                class="col-span-2 border font-normal"
                :style="{ background: tyre.total_price_bg, color: tyre.total_price_font }"
                :text="(tyre.cost * tyre.quantity).toFixed(2).toString()"
                :editable="false"
                property="total_price"
                data-selectable
                :data-id="tyre.id"
                data-column="total_price"
            />
            <Text
                class="col-span-4 border"
                :style="{ background: tyre.model_bg, color: tyre.model_font }"
                :text="form.model"
                :value="form.model"
                :editable="true"
                property="model"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="model"
            />
            <Text
                class="col-span-4 border"
                :style="{ background: tyre.notes_bg, color: tyre.notes_font }"
                :text="form.notes"
                :value="form.notes"
                :editable="true"
                property="notes"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="notes"
            />
            <Quantity
                class="col-span-1 border"
                :style="{ background: tyre.sold_bg, color: tyre.sold_font }"
                :text="form.sold"
                :value="form.sold"
                :editable="true"
                property="sold"
                @update="update"
                data-selectable
                :data-id="tyre.id"
                data-column="sold"
            />
        </div>

        <button @click="deleteTyre" class="absolute text-red-500 top-1/2 -translate-y-1/2 translate-x-full right-0 w-7 h-7 flex items-center justify-center" data-no-click>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
        <button @click="copyTyre" class="absolute text-blue-500 top-1/2 -translate-y-1/2 -translate-x-full left-0 w-7 h-7 flex items-center justify-center" data-no-click>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
        </button>

        <ConfirmDialogue ref="confirmDialogue"></ConfirmDialogue>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { router, Link, useForm } from "@inertiajs/vue3"
import Text from "/resources/js/Shared/Admin/LocalTyreFields/Text.vue"
import Quantity from "/resources/js/Shared/Admin/LocalTyreFields/Quantity.vue"
import TyreSize from "/resources/js/Shared/Admin/LocalTyreFields/TyreSize.vue"
import Brand from "/resources/js/Shared/Admin/LocalTyreFields/Brand.vue"
import ConfirmDialogue from '/resources/js/Shared/Modal/ConfirmDialogue.vue'

const confirmDialogue = ref(null)

const props = defineProps({
    tyre: {
        type: Object,
        required: true,
    },
    index: {
        required: true,
    }
})
const emit = defineEmits(['copy', 'change'])

const form = useForm({
    width: props.tyre.width,
    profile: props.tyre.profile,
    rim: props.tyre.rim,
    commercial: props.tyre.commercial,
    brand: props.tyre.brand,
    model: props.tyre.model,
    cost: props.tyre.cost,
    quantity: props.tyre.quantity,
    notes: props.tyre.notes,
    sold: props.tyre.sold,
})

const tyreWrapper = ref(null)

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
        case 'cost':
            form.cost = value
            break
        case 'quantity':
            form.quantity = value
            break
        case 'notes':
            form.notes = value
            break
        case 'sold':
            form.sold = value
            break
    }

    form.put('/admin/inventory/'+props.tyre.id, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
            emit('change')
        }
    })
}

async function deleteTyre() {
    const ok = await confirmDialogue.value.show({
        title: 'Delete Tyre',
        message: 'Are you sure you want to delete this?',
        okButton: 'Delete',
        cancelButton: 'Cancel'
    })
    if(ok) {
        router.delete('/admin/inventory/' + props.tyre.id, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                emit('change')
            }
        })
    }
    else {
        //
    }
}
function copyTyre() {
    let data = {
        width: form.width,
        profile: form.profile,
        rim: form.rim,
        commercial: form.commercial,
        brand: form.brand,
        model: form.model,
        cost: form.cost,
        quantity: form.quantity,
        notes: form.notes,
        sold: form.sold,
    }
    emit('copy', data)
}

function focusTyre() {
    tyreWrapper.value.classList.add('bg-blue-300')
}
function blurTyre() {
    tyreWrapper.value.classList.remove('bg-blue-300')
}
function copySizeToClipboard(e) {
    e.preventDefault()
    navigator.clipboard.writeText(form.width + '  ' + form.profile + '  ' + form.rim)
}

</script>

<style scoped>

</style>
