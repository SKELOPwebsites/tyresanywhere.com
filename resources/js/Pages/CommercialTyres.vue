<template>
    <Head>
        <title>Commercial Mobile Tyre Fitting - Van Tyres Fitted at Home or Work | Tyres Anywhere LTD</title>
        <meta name="description" content="Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience.">
        <link rel="canonical" href="https://tyresanywhere.com/commercial-tyres">
    </Head>

    <div class="bg-black">
        <Container class="relative lg:h-[340px] md:h-[250px] h-[200px]">
            <img
                src="/images/showcase/commercial-tyres.webp"
                srcset="/images/showcase/commercial-tyres.webp 1000w,
                                /images/showcase/commercial-tyres-500.webp 500w,
                                /images/showcase/commercial-tyres.webp 300w"
                class="object-cover object-center w-full h-full brightness-75"
                sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw"
                alt="Mobile Tyre Fitting"
            >
            <div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Commercial Tyres</h1>
                <p class="sm:text-sm text-xs text-center">Same day service for emergencies & non-emergencies</p>
            </div>
        </Container>
    </div>

    <SearchTyres></SearchTyres>

    <Container>
        <Content>
            <div class="xl:px-11 sm:px-8 px-4">
                <h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase">Commercial Mobile Tyre Fitting</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">Yes, we also provide & fit commercial tyres alongside normal passenger tyres.</h2>

                <div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4">
                    <div class="col-span-12">
                        <p class="text-sm">
                            Why not take advantage of our convenient commercial mobile tyre fitting service?
                        </p>
                        <br>
                        <p class="text-sm">
                            Our services comes to your desired fitting location to fit your new commercial tyre so
                            you don't have to waste your time to get your tyres fitted at a garage, and best of all,
                            we operate every day of the week and can fit your tyre on the same day of your call so you
                            and your commercial vehicle are safe on the road.
                        </p>
                        <br>
                        <p class="text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101">07442 980101</a> for a prompt service</span>
                        </p>
                    </div>
                </div>
            </div>
        </Content>
    </Container>

    <Container>
        <OurServices />
        <AreasWeCover :areas="$page.props.areas" />
        <PopularTyreBrands />
        <CustomerRating class="px-3 pt-12"/>
    </Container>
</template>


<script setup>
import { Head } from "@inertiajs/vue3";
import Container from "../Shared/Container.vue";
import CustomerRating from "../Shared/CustomerRating.vue";
import PopularTyreBrands from "../Shared/PopularTyreBrands.vue";
import AreasWeCover from "../Shared/AreasWeCover.vue";
import OurServices from "../Shared/OurServices.vue";
import SearchTyres from "../Shared/SearchTyres.vue";
import Content from "../Shared/Content.vue";

</script>

<style scoped>

</style>
