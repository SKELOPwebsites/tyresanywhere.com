<template>
    <footer>
        <div class="bg-stone-800">
            <Container>
                <div class="grid grid-cols-3 md:gap-x-12 md:gap-y-0 gap-y-8 md:px-0 px-8 py-10">
                    <div class="md:col-span-1 col-span-3">
                        <p class="text-xl tracking-wide mb-2 text-white uppercase">Tyres Anywhere, Mobile Tyre Fitting</p>
                        <p class="mt-6 text-gray-500 text-sm">
                            Having a punctured tyre can be a headache, especially on the middle of the motorway. That's why at <b class="text-gray-300">Tyres Anywhere, Mobile Tyre Fitting</b>, we bring our mobile service right to your vehicle, whether you're at home, work or on the hard shoulder.
                        </p>
                    </div>
                    <div class="md:col-span-1 col-span-3">
                        <p class="text-xl tracking-wide mb-2 text-white">SERVICES</p>
                        <div class="space-y-3 flex flex-col items-start">
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/mobile-tyre-fitting" title="Mobile Tyre Fitting">Mobile Tyre Fitting</Link>
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/mobile-tyre-repair" title="Mobile Tyre Repair">Mobile Tyre Repair</Link>
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/commercial-tyres" title="Commercial Tyres">Commercial Tyres</Link>
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/search-tyres" title="Book Tyres">Search Tyres</Link>
                        </div>
                    </div>
                    <div class="md:col-span-1 col-span-3">
                        <p class="text-xl tracking-wide mb-2 text-white">HELP</p>
                        <div class="space-y-3 flex flex-col items-start">
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/contact-us" title="Contact Us">Contact Us</Link>
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/our-terms-and-conditions" title="Terms and Conditions">Terms and Conditions</Link>
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/privacy-policy" title="Privacy Policy">Privacy Policy</Link>
                            <Link class="text-sm text-gray-500 underline hover:text-gray-300" href="/sitemap" title="Sitemap">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div class="bg-stone-900">
            <Container class="flex lg:flex-row lg:space-y-0 space-y-2 flex-col items-center justify-between py-5">
                <p class="text-sm text-center text-gray-500">© 2022 Tyres Anywhere LTD | All Rights Reserved</p>
                <p class="text-gray-300 text-center text-sm">Website by: <a class="text-white hover:underline" href="https://skelop.com" target="_blank" rel="noreferrer">SKELOP Website Design &amp; Development</a></p>
            </Container>
        </div>
    </footer>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Container from "./Container.vue";

</script>

<style scoped>

</style>
