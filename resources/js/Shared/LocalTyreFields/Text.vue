<template>
    <div
        class="relative flex items-center justify-center border-gray-300 h-full text-[11px] group"
    >
        <span v-if="!editMode" v-text="text"></span>
        <input
            v-if="editable"
            :value="value"
            ref="input"
            type="text"
            class="bg-transparent border border-black rounded-sm w-4/5 text-center"
            :class="{'hidden': !editMode}"
        >
        <button v-if="editable && !editMode" @click="editMode = true" class="absolute right-1 hidden group-hover:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </button>

        <div v-if="editMode" class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50">
            <button class="bg-green-400 w-4 h-4" @click="saveEdit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4">
                    <path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path>
                </svg>
            </button>
            <button class="bg-red-400 w-4 h-4" @click="editMode = false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4">
                    <path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    text: {
        required: false,
        type: String,
    },
    value: {
        required: false,
        type: String
    },
    editable: {
        required: false,
        type: Boolean
    },
    property: {
        required: false,
        type: String,
    }
})
const emit = defineEmits(['update'])
const editMode = ref(false)

const input = ref(null)

function saveEdit () {
    editMode.value = false;

    emit('update', props.property, input.value.value)
}
</script>

<style scoped>

</style>
