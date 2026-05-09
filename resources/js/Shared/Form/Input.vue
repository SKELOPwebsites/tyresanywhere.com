<template>
    <input
        @input="handleInput"
        :value="modelValue"
        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
    >
</template>

<script setup>

defineProps({
    modelValue: {
        default: '',
        required: false,
    },
})
const emit = defineEmits(['update:modelValue']);

function handleInput(e) {
    emit('update:modelValue', e.target.value)
}
</script>

<style scoped>

</style>
