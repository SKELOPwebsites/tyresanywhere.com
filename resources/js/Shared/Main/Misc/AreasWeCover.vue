<template>
    <div class="h-[330px] relative select-none">
        <img
            src="/images/showcase/gallary/mobile-tyre-fitting-7.webp"
            srcset="/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w"
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
            <div class="mt-6 text-base">
                <p>We cover the majority of England and are able to send one of our tyre fitters to your location promptly</p>
                <Link href="/sitemap" class="block mt-4 underline hover:text-cyan-400">See all areas</Link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<style scoped>

</style>
