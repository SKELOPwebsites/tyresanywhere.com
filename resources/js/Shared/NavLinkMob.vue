<template>
    <Link class="w-full py-4 pl-4 border-[#ebebeb] text-sm" :class="$page.component === component ? 'text-wheelfit-600 font-bold' : 'text-gray-400'">
        <slot></slot>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    component: String
})

</script>

<style scoped>

</style>
