<template>
    <div class="border-x border-t border-gray-300 pt-8 pb-16">
        <p class="text-center text-3xl font-montserrat font-bold mb-8">Our Emergency Services</p>
        <div class="sm:w-full w-64 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:px-8 md:px-28 sm:px-8 px-0 xl:gap-x-4 lg:gap-x-3 gap-x-4 lg:gap-y-0 gap-y-4 items-center justify-center">
            <Link class="col-span-1" href="/mobile-tyre-fitting" title="Mobile Tyre Fitting">
                <div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/mobile-tyre-fitting-emergency.webp" alt="Mobile Tyre Fitting">

                    <div class="z-10">
                        <h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Mobile Tyre Fitting</h2>
                    </div>
                </div>
            </Link>
            <Link class="col-span-1" href="/breakdown-recovery" title="Breakdown Recovery">
                <div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/recovery.webp" alt="Breakdown Recovery">

                    <div class="z-10">
                        <h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Breakdown Recovery</h2>
                    </div>
                </div>
            </Link>
            <div class="col-span-1">
                <div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/jump-start.webp" alt="Jump Starts">

                    <div class="z-10">
                        <h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Jump Starts</h2>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/battery-fitting.webp" alt="Battery">

                    <div class="z-10">
                        <h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Battery</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"
</script>

<style scoped>

</style>
