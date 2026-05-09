<template>
    <header class="flex flex-col items-center justify-center pt-4">
        <div class="sm:w-[300px] w-[250px] mb-4">
            <Link href="/">
                <img
                    class="w-full"
                    src="/images/main/tyresanywhere.webp"
                    alt="Tyres Anywhere LTD"
                >
            </Link>
        </div>
    </header>

    <slot />

    <Footer />

</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Footer from "./Footer.vue"

</script>

<style scoped>

</style>
