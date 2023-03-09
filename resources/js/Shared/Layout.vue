<template>
    <header class="bg-white">
        <Header />
        <Navbar />
    </header>

    <slot />

    <Footer />

</template>

<script setup>
import Header from "./Header.vue"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"

</script>

<style scoped>

</style>
