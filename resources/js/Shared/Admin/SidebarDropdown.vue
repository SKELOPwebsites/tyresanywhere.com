<template>
    <div
        class="w-full  text-wheelfit-300 cursor-pointer"
    >
        <div>
            <Link
                :href="href"
                class="w-full flex items-center text-wheelfit-300 h-9 pl-4 hover:bg-gray-300 rounded-lg cursor-pointer"
                :class="{ 'bg-gray-300': $page.url.includes(href), 'bg-gray-200': $page.url !== href  }"
            >
                <slot name="icon" />
                <span class="text-gray-700 text-sm" v-text="title"></span>

                <div @click="dropdown" class="text-black ml-1">
                    <svg v-if="!open" class="w-3 h-3" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" />
                    </svg>
                    <svg v-else class="w-3 h-3" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" stroke-width="0" fill="currentColor" />
                    </svg>
                </div>
            </Link>
        </div>

        <div v-show="open" class="ml-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { Link } from "@inertiajs/vue3"
import SidebarLink from "./SidebarLink.vue"

const open = ref(false)

defineProps({
    title: String,
    href: String,
})

function dropdown(e) {
    e.preventDefault()

    open.value = !open.value

    console.log("hi")
}
</script>

<style scoped>

</style>
