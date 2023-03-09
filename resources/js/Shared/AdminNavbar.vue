<template>
    <nav class="select-none shadow-[0_0px_10px_0px_rgba(0,0,0,0.8)] bg-black relative flex items-center justify-start">
        <div class="mx-auto w-screen 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-xl">
            <div class="mx-2 relative">
                <div class="flex items-center">
                    <ul class="flex flex-row list-none">
                        <li>
                            <NavLink class="border-l" href="/admin">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavbarDropdown>
                                <template v-slot:trigger>
                                <span class="border-x cursor-pointer flex items-center text-sm text-gray-100 hover:text-wheelfit-600 border-gray-800 py-3 px-5 block transition duration-150 ease-in-out">
                                    Welcome Admin
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                </template>
                                <template v-slot:content>
                                    <div class="grid grid-cols-12 gap-x-2 gap-y-6 mx-2">
                                        <div class="lg:col-span-3 sm:col-span-6 col-span-12">
                                            <p class="pl-4 sm:text-2xl text-xl sm:font-normal font-semibold">Tyres</p>
                                            <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                            <div class="space-y-2">
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/tyres/create" title="Add Tyre">Add Tyre</Link>
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/manage-inventory" title="Manage Inventory">Manage Inventory</Link>
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/manage-tyre-sizes" title="Manage Tyre Sizes">Manage Tyre Sizes</Link>
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/manage-local-stock" title="Manage Local Stock">Manage Local Stock</Link>
                                            </div>
                                        </div>
                                        <div class="lg:col-span-3 sm:col-span-6 col-span-12">
                                            <p class="pl-4 sm:text-2xl text-xl sm:font-normal font-semibold">Orders</p>
                                            <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                            <div class="space-y-2">
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/orders/active" title="Active Orders">Active Orders</Link>
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/orders/past" title="View All Orders">Past Orders</Link>
                                            </div>
                                        </div>
                                        <div class="lg:col-span-3 sm:col-span-6 col-span-12">
                                            <p class="pl-4 sm:text-2xl text-xl sm:font-normal font-semibold">Charges</p>
                                            <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                            <div class="space-y-2">
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/charges" title="Service Charges">Service Charges</Link>
                                            </div>
                                        </div>
                                        <div class="lg:col-span-3 sm:col-span-6 col-span-12">
                                            <p class="pl-4 sm:text-2xl text-xl sm:font-normal font-semibold">Other</p>
                                            <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                            <div class="space-y-2">
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/covered-postcodes" title="Covered Postcodes">Covered Postcodes</Link>
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/covered-areas" title="Covered Areas">Covered Areas</Link>
                                                <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/admin/pdf-invoice" title="PDF Invoice">PDF Invoice</Link>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </NavbarDropdown>
                        </li>
                        <li>
                            <Link href="/admin/logout" as="button" method="post" class="border-r text-sm text-gray-100 hover:text-wheelfit-600 border-gray-800 py-3 px-5 block transition duration-150 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import NavbarDropdown from "./NavbarDropdown.vue"
import NavLink from "./NavLink.vue"


</script>

<style scoped></style>
