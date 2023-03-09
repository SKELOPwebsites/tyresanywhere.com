<template>
    <div
        class="relative flex items-center justify-center border-gray-300 h-full text-[11px] group"
    >
        <span v-if="!editMode" v-text="text"></span>
        <input
            v-if="editable"
            :value="value"
            type="text"
            class="bg-transparent border border-black rounded-sm w-4/5 text-center"
            :class="{'hidden': !editMode}"
        >
        <div class="hidden group-hover:block">
            <button class="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4" @click="decrement">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <button class="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-4" @click="increment">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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
    },
    value: {
        required: false,
    },
    editable: {
        required: false,
        type: Boolean
    }
})
const emit = defineEmits(['update'])
const editMode = ref(false)

function increment () {
    editMode.value = false;

    emit('update', 'quantity', parseInt(props.value) + 1)
}
function decrement () {
    editMode.value = false;

    if(parseInt(props.value) === 0) return
    emit('update', 'quantity', parseInt(props.value) - 1)
}
</script>

<style scoped>

</style>
