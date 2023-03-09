<template>
    <Container class="select-none relative flex flex-row items-center md:justify-between justify-center py-3">
        <div class="sm:w-[300px] w-[250px]">
            <Link href="/">
                <img
                    class="w-full"
                    src="/images/main/tyresanywhere.webp"
                    alt="Tyres Anywhere LTD"
                >
            </Link>
        </div>
        <div class="lg:block hidden absolute left-1/2 lg:top-1/2 bottom-auto -translate-y-1/2 -translate-x-1/2">
            <p class="typed-text xl:text-4xl lg:text-2xl text-xl font-extrabold font-['Codystar'] whitespace-nowrap">{{ typeWriter }}<span class="cursor" :class="typing ? 'typing' : ''">|</span></p>
        </div>
        <div class="md:block hidden">
            <p class="mb-1 text-sm">Roadside mobile tyre service or<br>Emergency tyre fitting</p>
            <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a class="text-xl text-wheelfit-300" href="tel:07442980101" title="Phone Number">07442 980101</a>
            </span>
        </div>
    </Container>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import Container from "./Container.vue";

const txt = 'We come to you'
const speed = 50;
const delayOff = 2000;
const delayOn = 4000;
let delayBetweenTimer = 0;
let i = 0;
let dir = 1;

const typeWriter = ref('')
const typing = ref(true)

setInterval(() => {
    if(typeWriter.value === txt) {
        dir = -1;
        typing.value = false;

        delayBetweenTimer += speed;
        if(delayBetweenTimer >= delayOn) delayBetweenTimer = 0;
        else return
    }
    if(typeWriter.value === ''){
        dir = 1;

        delayBetweenTimer += speed;
        if(delayBetweenTimer >= delayOff) delayBetweenTimer = 0;
        else return
    }

    if(dir === 1){
        typeWriter.value += txt.charAt(i);
        i++;
    }
    else if(dir === -1){
        typeWriter.value = typeWriter.value.slice(0, -1);
        i--;
    }
    typing.value = true;
}, speed)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Codystar&display=swap');

.cursor{
    display: inline-block;
    animation: cursorBlink 1s infinite;
}
.typing{
    animation: none !important;
    display: none;
}
@keyframes cursorBlink {
    49% { visibility: visible; }
    50% { visibility: hidden; }
    99% { visibility: hidden; }
}
</style>
