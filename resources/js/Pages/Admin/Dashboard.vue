<template>
    <Head>
        <title>Admin - Tyres Anywhere LTD</title>
    </Head>

    <Container class="mt-12">
        <div class="grid grid-cols-12 lg:items-start gap-x-4">
            <div class="group lg:col-span-3 sm:col-span-6 col-span-12">
                <div class="w-full border-2 border-gray-400 text-gray-600 rounded-lg px-4 h-12 cursor-pointer flex items-center justify-between group-hover:text-black group-hover:border-gray-700 transition duration-150 ease-in-out">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-8 sm:h-6 h-4 lg:w-8 sm:w-6 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.66 9.64L19.3 8.7L21.16 8C20.24 5.88 18.6 4.18 16.54 3.14L15.74 4.92L14.82 4.5L15.62 2.7C14.5 2.26 13.28 2 12 2C10.94 2 9.92 2.22 8.96 2.5L9.64 4.34L8.7 4.7L8 2.84C5.88 3.76 4.18 5.4 3.14 7.46L4.92 8.26L4.5 9.18L2.7 8.38C2.26 9.5 2 10.72 2 12C2 13.06 2.22 14.08 2.5 15.04L4.34 14.36L4.7 15.3L2.84 16C3.76 18.12 5.4 19.82 7.46 20.86L8.26 19.08L9.18 19.5L8.38 21.3C9.5 21.74 10.72 22 12 22C13.06 22 14.08 21.78 15.04 21.5L14.36 19.66L15.3 19.3L16 21.16C18.12 20.24 19.82 18.6 20.86 16.54L19.08 15.74L19.5 14.82L21.3 15.62C21.74 14.5 22 13.28 22 12C22 10.94 21.78 9.92 21.5 8.96L19.66 9.64M14.3 17.54C11.24 18.8 7.72 17.36 6.46 14.3S6.64 7.72 9.7 6.46 16.28 6.64 17.54 9.7C18.82 12.76 17.36 16.28 14.3 17.54Z"></path></svg>
                        <span class="uppercase font-bold lg:text-lg sm:text-base text-sm ml-2">Tyre</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="h-0 overflow-hidden group-hover:h-48 flex flex-col mt-4 border-x transition-all duration-300 ease-in-out">
                    <Link href="/admin/tyres/create" class="w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Add Tyre</span>
                        </div>
                    </Link>
                    <Link href="/admin/manage-inventory" class="w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Manage Inventory</span>
                        </div>
                    </Link>
                    <Link href="/admin/manage-tyre-sizes" class="group w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Manage Tyre Sizes</span>
                        </div>
                    </Link>
                    <Link href="/admin/manage-local-stock" class="group w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Manage Local Stock</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="group lg:col-span-3 sm:col-span-6 col-span-12">
                <div class="w-full border-2 border-gray-400 text-gray-600 rounded-lg px-4 h-12 cursor-pointer flex items-center justify-between group-hover:text-black group-hover:border-gray-700 transition duration-150 ease-in-out">
                    <div class="flex items-center">
                        <svg class="lg:h-8 sm:h-6 h-4 lg:w-8 sm:w-6 w-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="8" width="30" height="36" rx="2" fill="#ffffff" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></rect>
                            <path d="M18 4V10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M30 4V10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M16 19L32 19" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M16 27L28 27" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M16 35H24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span class="uppercase font-bold lg:text-lg sm:text-base text-sm ml-2">Orders</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="h-0 overflow-hidden group-hover:h-24 flex flex-col mt-4 border-x transition-all duration-300 ease-in-out">
                    <Link href="/admin/orders/active" class="w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Active Orders</span>
                        </div>
                    </Link>
                    <Link href="/admin/orders/past" class="group w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Past Orders</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="group lg:col-span-3 sm:col-span-6 col-span-12">
                <div class="w-full border-2 border-gray-400 text-gray-600 rounded-lg px-4 h-12 cursor-pointer flex items-center justify-between group-hover:text-black group-hover:border-gray-700 transition duration-150 ease-in-out">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-8 sm:h-6 h-4 lg:w-8 sm:w-6 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.17,13.71l1.4-2.42c0.09-0.15,0.05-0.34-0.08-0.45l-1.48-1.16c0.03-0.22,0.05-0.45,0.05-0.68s-0.02-0.46-0.05-0.69 l1.48-1.16c0.13-0.11,0.17-0.3,0.08-0.45l-1.4-2.42c-0.09-0.15-0.27-0.21-0.43-0.15L12,4.83c-0.36-0.28-0.75-0.51-1.18-0.69 l-0.26-1.85C10.53,2.13,10.38,2,10.21,2h-2.8C7.24,2,7.09,2.13,7.06,2.3L6.8,4.15C6.38,4.33,5.98,4.56,5.62,4.84l-1.74-0.7 c-0.16-0.06-0.34,0-0.43,0.15l-1.4,2.42C1.96,6.86,2,7.05,2.13,7.16l1.48,1.16C3.58,8.54,3.56,8.77,3.56,9s0.02,0.46,0.05,0.69 l-1.48,1.16C2,10.96,1.96,11.15,2.05,11.3l1.4,2.42c0.09,0.15,0.27,0.21,0.43,0.15l1.74-0.7c0.36,0.28,0.75,0.51,1.18,0.69 l0.26,1.85C7.09,15.87,7.24,16,7.41,16h2.8c0.17,0,0.32-0.13,0.35-0.3l0.26-1.85c0.42-0.18,0.82-0.41,1.18-0.69l1.74,0.7 C13.9,13.92,14.08,13.86,14.17,13.71z M8.81,11c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C10.81,10.1,9.91,11,8.81,11z"></path><path d="M21.92,18.67l-0.96-0.74c0.02-0.14,0.04-0.29,0.04-0.44c0-0.15-0.01-0.3-0.04-0.44l0.95-0.74 c0.08-0.07,0.11-0.19,0.05-0.29l-0.9-1.55c-0.05-0.1-0.17-0.13-0.28-0.1l-1.11,0.45c-0.23-0.18-0.48-0.33-0.76-0.44l-0.17-1.18 C18.73,13.08,18.63,13,18.53,13h-1.79c-0.11,0-0.21,0.08-0.22,0.19l-0.17,1.18c-0.27,0.12-0.53,0.26-0.76,0.44l-1.11-0.45 c-0.1-0.04-0.22,0-0.28,0.1l-0.9,1.55c-0.05,0.1-0.04,0.22,0.05,0.29l0.95,0.74c-0.02,0.14-0.03,0.29-0.03,0.44 c0,0.15,0.01,0.3,0.03,0.44l-0.95,0.74c-0.08,0.07-0.11,0.19-0.05,0.29l0.9,1.55c0.05,0.1,0.17,0.13,0.28,0.1l1.11-0.45 c0.23,0.18,0.48,0.33,0.76,0.44l0.17,1.18c0.02,0.11,0.11,0.19,0.22,0.19h1.79c0.11,0,0.21-0.08,0.22-0.19l0.17-1.18 c0.27-0.12,0.53-0.26,0.75-0.44l1.12,0.45c0.1,0.04,0.22,0,0.28-0.1l0.9-1.55C22.03,18.86,22,18.74,21.92,18.67z M17.63,18.83 c-0.74,0-1.35-0.6-1.35-1.35s0.6-1.35,1.35-1.35s1.35,0.6,1.35,1.35S18.37,18.83,17.63,18.83z"></path></svg>
                        <span class="uppercase font-bold lg:text-lg sm:text-base text-sm ml-2">Charges</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="h-0 overflow-hidden group-hover:h-12 flex flex-col mt-4 border-x transition-all duration-300 ease-in-out">
                    <Link href="/admin/charges" class="group w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Service Charges</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="group lg:col-span-3 sm:col-span-6 col-span-12">
                <div class="w-full border-2 border-gray-400 text-gray-600 rounded-lg px-4 h-12 cursor-pointer flex items-center justify-between group-hover:text-black group-hover:border-gray-700 transition duration-150 ease-in-out">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-8 sm:h-6 h-4 lg:w-8 sm:w-6 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                        <span class="uppercase font-bold lg:text-lg sm:text-base text-sm ml-2">Other</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="h-0 overflow-hidden group-hover:h-36 flex flex-col mt-4 border-x transition-all duration-300 ease-in-out">
                    <Link href="/admin/covered-postcodes" class="w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Covered Postcodes</span>
                        </div>
                    </Link>
                    <Link href="/admin/covered-areas" class="group w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">Covered Areas</span>
                        </div>
                    </Link>
                    <Link href="/admin/pdf-invoice" class="group w-full text-gray-700">
                        <div class="flex items-center hover:translate-x-2 py-3 px-2 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="xl:text-base text-sm">PDF Invoice</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </Container>
</template>

<script>
import AdminLayout from "../../Shared/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import Container from "../../Shared/Container.vue"
import { Link, Head } from "@inertiajs/vue3"

</script>

<style scoped>

</style>
