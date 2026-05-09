<template>
    <div class="sticky top-0 z-40">
        <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">

            <!-- left navbar -->
            <div class="flex">

            </div>

            <!-- right navbar -->
            <div class="flex items-center relative">
                <button @click="logout">
                    <svg class="h-6 w-6 stroke-black mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 12h12l-3 -3" />
                        <path d="M18 15l3 -3" />
                    </svg>
                </button>
            </div>

        </div>

    </div>
</template>

<script setup>
import { Link, router } from "@inertiajs/vue3";
import NavbarDropdown from "/resources/js/Shared/Main/NavbarDropdown.vue"
import NavLink from "/resources/js/Shared/Main/NavLink.vue"

function logout() {
    router.post('/admin/logout')
}
</script>

<style scoped></style>
