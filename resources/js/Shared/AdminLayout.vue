<template>
    <header class="bg-white">
        <AdminHeader />
        <AdminNavbar />
    </header>

    <slot />
</template>

<script setup>
import AdminHeader from "./AdminHeader.vue"
import AdminNavbar from "./AdminNavbar.vue"

</script>

<style scoped>

</style>
