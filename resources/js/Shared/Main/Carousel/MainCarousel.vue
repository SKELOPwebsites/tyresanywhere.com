<template>
    <div class="relative">
        <div class="bg-black">
            <Container class="md:max-w-none sm:max-w-none mx-auto px-0">
                <Carousel
                    @next="next"
                    @prev="prev"
                    @mouseenter="pause"
                    @mouseleave="unpause"
                >
                    <CarouselSlide :index="0" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-1.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            alt="Tyres Anywhere LTD Mobile Tyres Van"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">We Come To You!</h1>
                            <p class="sm:text-sm text-xs text-center">Our mobile tyre fitting service is your convenient solution</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="1" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-2.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            alt="Mobile Tyre Fitting"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 v-if="!location" class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Fitting</h1>
                            <h1 v-else class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Fitting in {{location}}</h1>
                            <p class="sm:text-sm text-xs text-center">Same day service for emergencies & non-emergencies.</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="2" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-3.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w"
                            alt="Mobile tyre puncture repair"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 v-if="!location" class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">30-60 Minute Response</h1>
                            <h1 v-else class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Repair in {{location}}</h1>
                            <p class="sm:text-sm text-xs text-center">Maximum 30-60 minute response for emergencies.</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="3" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-4.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            alt="Tyres Anywhere LTD Mobile Tyres Van"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">We Come To You!</h1>
                            <p class="sm:text-sm text-xs text-center">Our mobile tyre fitting service is your convenient solution</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="4" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-5.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            alt="Mobile Tyre Fitting"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 v-if="!location" class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Fitting</h1>
                            <h1 v-else class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Fitting in {{location}}</h1>
                            <p class="sm:text-sm text-xs text-center">Same day service for emergencies & non-emergencies.</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="5" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-6.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w"
                            alt="Mobile tyre puncture repair"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 v-if="!location" class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">30-60 Minute Response</h1>
                            <h1 v-else class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Repair in {{location}}</h1>
                            <p class="sm:text-sm text-xs text-center">Maximum 30-60 minute response for emergencies.</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="6" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-7.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            alt="Tyres Anywhere LTD Mobile Tyres Van"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">We Come To You!</h1>
                            <p class="sm:text-sm text-xs text-center">Our mobile tyre fitting service is your convenient solution</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="7" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-8.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            alt="Mobile Tyre Fitting"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 v-if="!location" class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Fitting</h1>
                            <h1 v-else class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Fitting in {{location}}</h1>
                            <p class="sm:text-sm text-xs text-center">Same day service for emergencies & non-emergencies.</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide :index="8" :visibleSlide="visibleSlide" :direction="direction">
                        <img
                            src="/images/showcase/gallary/mobile-tyre-fitting-9.webp"
                            srcset="/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w"
                            alt="Mobile tyre puncture repair"
                            sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                            class="object-cover object-center w-full h-full brightness-[0.6]"
                        >
                        <div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                            <h1 v-if="!location" class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">30-60 Minute Response</h1>
                            <h1 v-else class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Tyre Repair in {{location}}</h1>
                            <p class="sm:text-sm text-xs text-center">Maximum 30-60 minute response for emergencies.</p>
                        </div>
                    </CarouselSlide>
                </Carousel>
            </Container>
        </div>

        <Container>
            <MainCarouselSearchTyres />
        </Container>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"
import Container from "../Shared/Container.vue"
import Carousel from "../Shared/Carousel.vue"
import CarouselSlide from "../Shared/CarouselSlide.vue"
import MainCarouselSearchTyres from "../Shared/MainCarouselSearchTyres.vue"

defineProps({
    location: {
        type: String,
        required: false,
        default: null,
    },
})

const isSliding = ref(false);
const visibleSlide = ref(0);
const direction = ref('left');
const slidesLen = 9;

const interval = 400;
const slideTimer = ref(interval);

const isPaused = ref(false)

watch(slideTimer, () => {
    if(slideTimer.value <= 0) {
        slideTimer.value = interval;
        next();
    }else if(!isPaused.value){
        setTimeout(() => {
            slideTimer.value--;
        }, 1);
    }
}, { immediate: true })

function next() {
    if(isSliding.value) return;

    if(visibleSlide.value >= slidesLen - 1) {
        visibleSlide.value = 0;
    }else {
        visibleSlide.value += 1
    }
    direction.value = 'left';
    setSliding();
}
function prev() {
    if(isSliding.value) return;

    if(visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen - 1;
    }else {
        visibleSlide.value--
    }
    direction.value = 'right';
    setSliding();
}

function setSliding() {
    isSliding.value = true;
    setTimeout(() => {
        isSliding.value = false;
    }, 600)
}

function pause() {
    isPaused.value = true
}

function unpause() {
    isPaused.value = false
    slideTimer.value--;
}

</script>
