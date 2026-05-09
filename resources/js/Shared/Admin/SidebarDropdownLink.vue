<template>
    <Link
        :href="href"
        class="w-full flex items-center text-wheelfit-300 h-9 pl-4 rounded-lg cursor-pointer"
    >
        <slot />
        <span class="text-gray-700 text-sm" v-text="title"></span>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"

defineProps({
    title: String,
    href: String,
})
</script>

<style scoped>

</style>
