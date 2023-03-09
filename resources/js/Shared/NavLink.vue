<template>
    <Link :href="href" class="lg:text-sm text-[13px] text-gray-100 hover:text-wheelfit-600 border-gray-800 lg:py-3 lg:px-5 py-2 lg:px-4 px-3 block transition duration-150 ease-in-out">
        <slot></slot>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    href: String
})

</script>

<style scoped>

</style>
