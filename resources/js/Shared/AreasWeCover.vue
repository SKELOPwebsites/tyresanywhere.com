<template>
    <div class="h-[330px] relative select-none">
        <img
            src="/images/showcase/main.webp"
            srcset="/images/showcase/main.webp 1200w,
                        /images/showcase/main-500.webp 500w,
                        /images/showcase/main.webp 300w"
            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw"
            class="absolute inset-0 object-center object-cover h-full w-full brightness-[0.4]"
            alt="Tyres Anywhere LTD Mobile Tyres Van"
        >
        <div class="absolute md:right-[15%] md:left-[15%] right-[5%] left-[5%] top-5 sm:pt-8 pb-5 text-white text-center">
            <div class="mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
            </div>
            <h3 class="text-center sm:text-3xl text-2xl font-extrabold font-montserrat">Areas We Cover</h3>
            <div class="flex items-center justify-center flex-row flex-wrap mt-6 space-y-1 space-x-1.5 xl:text-base text-sm">
                <Link
                    v-for="area in areas"
                    :href="'/locations/' + area.slug"
                    :title="area.area"
                    class="flex items-center hover:text-cyan-400"
                    :class="{'font-semibold text-cyan-400': $page.url === '/locations/' + area.slug }"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="#ff6666">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ area.area }}
                </Link>
                <p>&amp; Surrounding Areas!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
const areasWeCover = [
    {
        name: 'Amersham',
        href: '/locations/amersham'
    },
    {
        name: 'Aylesbury',
        href: '/locations/aylesbury'
    },
    {
        name: 'Beaconsfield',
        href: '/locations/beaconsfield'
    },
    {
        name: 'Bicester',
        href: '/locations/bicester'
    },
    {
        name: 'Bracknell',
        href: '/locations/bracknell'
    },
    {
        name: 'High Wycombe',
        href: '/locations/high-wycombe'
    },
    {
        name: 'Maidenhead',
        href: '/locations/maidenhead'
    },
    {
        name: 'Marlow',
        href: '/locations/marlow'
    },
    {
        name: 'Oxford',
        href: '/locations/oxford'
    },
    {
        name: 'Reading',
        href: '/locations/reading'
    },
    {
        name: 'Slough',
        href: '/locations/slough'
    },
    {
        name: 'Stokenchurch',
        href: '/locations/stokenchurch'
    },
    {
        name: 'Uxbridge',
        href: '/locations/uxbridge'
    },
    {
        name: 'Watford',
        href: '/locations/watford'
    },
];

defineProps({
    areas: {
        type: Object,
        required: true,
    },
})

</script>

<style scoped>

</style>
