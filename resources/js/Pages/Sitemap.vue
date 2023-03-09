<template>
    <Head>
        <title>Sitemap | Tyres Anywhere LTD</title>
        <meta name="description" content="Sitemap of our site tyresanywhere.com. This includes a list of all the pages in Tyres Anywhere LTD's website.">
        <link rel="canonical" href="https://tyresanywhere.com/sitemap">
    </Head>

    <Container>
        <div class="border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8">
            <h1 class="sm:text-3xl text-2xl sm:mb-12 mb-6">Tyres Anywhere LTD Site Map</h1>

            <div class="grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8">
                <div class="xl:col-span-3 md:col-span-4 col-span-6">
                    <p class="md:text-lg text-base font-semibold">Tyres Anywhere LTD</p>
                    <div class="flex flex-col items-start mt-4 space-y-2">
                        <Link href="/" class="md:text-base text-sm text-blue-600 hover:underline">Home</Link>
                        <Link href="/mobile-tyre-fitting" class="md:text-base text-sm text-blue-500 hover:underline">Mobile Tyre Fitting</Link>
                        <Link href="/mobile-tyre-repair" class="md:text-base text-sm text-blue-600 hover:underline">Mobile Tyre Repair</Link>
                        <Link href="/commercial-tyres" class="md:text-base text-sm text-blue-600 hover:underline">Commercial Tyres</Link>
                        <Link href="/tyres" class="md:text-base text-sm text-blue-600 hover:underline">Tyres</Link>
                        <Link href="/contact-us" class="md:text-base text-sm text-blue-600 hover:underline">Contact Us</Link>
                        <Link href="/our-terms-and-conditions" class="md:text-base text-sm text-blue-600 hover:underline">Terms & Conditions</Link>
                        <Link href="/privacy-policy" class="md:text-base text-sm text-blue-600 hover:underline">Privacy Policy</Link>
                    </div>
                </div>
                <div class="xl:col-span-3 md:col-span-4 col-span-6">
                    <p class="md:text-lg text-base font-semibold">Service</p>
                    <div class="flex flex-col items-start mt-4 space-y-2">
                        <Link href="/search-tyres" class="md:text-base text-sm text-blue-600 hover:underline">Search Tyres</Link>
                        <Link href="/checkout/basket" class="md:text-base text-sm text-blue-500 hover:underline">Basket</Link>
                    </div>
                </div>
                <div class="xl:col-span-3 md:col-span-4 col-span-6">
                    <p class="md:text-lg text-base font-semibold">Coverage</p>
                    <div class="flex flex-col items-start mt-4 space-y-2">
                        <Link href="/locations/amersham" class="md:text-base text-sm text-blue-600 hover:underline">Amersham</Link>
                        <Link href="/locations/aylesbury" class="md:text-base text-sm text-blue-500 hover:underline">Aylesbury</Link>
                        <Link href="/locations/bicester" class="md:text-base text-sm text-blue-500 hover:underline">Bicester</Link>
                        <Link href="/locations/bracknell" class="md:text-base text-sm text-blue-500 hover:underline">Bracknell</Link>
                        <Link href="/locations/high-wycombe" class="md:text-base text-sm text-blue-500 hover:underline">High Wycombe</Link>
                        <Link href="/locations/maidenhead" class="md:text-base text-sm text-blue-500 hover:underline">Maidenhead</Link>
                        <Link href="/locations/marlow" class="md:text-base text-sm text-blue-500 hover:underline">Marlow</Link>
                        <Link href="/locations/oxford" class="md:text-base text-sm text-blue-500 hover:underline">Oxford</Link>
                        <Link href="/locations/reading" class="md:text-base text-sm text-blue-500 hover:underline">Reading</Link>
                        <Link href="/locations/slough" class="md:text-base text-sm text-blue-500 hover:underline">Slough</Link>
                        <Link href="/locations/stokenchurch" class="md:text-base text-sm text-blue-500 hover:underline">Stokenchurch</Link>
                        <Link href="/locations/uxbridge" class="md:text-base text-sm text-blue-500 hover:underline">Uxbridge</Link>
                        <Link href="/locations/watford" class="md:text-base text-sm text-blue-500 hover:underline">Watford</Link>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>


<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Container from "../Shared/Container.vue";

</script>

<style scoped>

</style>
