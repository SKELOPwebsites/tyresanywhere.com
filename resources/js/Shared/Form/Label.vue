<template>
    <label class="block font-medium sm:text-sm text-xs text-gray-700">
        <slot /> <span v-if="required" class="text-red-500">*</span>
    </label>
</template>

<script setup>

defineProps({
    required: {
        type: Boolean,
        required: false,
        default: false,
    }
})
</script>

<style scoped>

</style>
