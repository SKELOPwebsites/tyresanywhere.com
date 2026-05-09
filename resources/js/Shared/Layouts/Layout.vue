<template>
    <header class="bg-white">
        <Header />
        <Navbar />
    </header>

    <slot />

    <Footer />

    <WhatsappIcon name="Tyres Anywhere LTD" phoneNumber="+447989606060"/>
</template>

<script setup>
import Header from "/resources/js/Shared/Main/Header.vue"
import Navbar from "/resources/js/Shared/Main/Navbar.vue"
import Footer from "/resources/js/Shared/Main/Footer.vue"
import WhatsappIcon from "/resources/js/Shared/Main/WhatsappIcon.vue"

</script>

<style scoped>

</style>
