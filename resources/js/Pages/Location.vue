<template>
    <Head>
        <title>Mobile Tyre Fitting in {{ location }} | Tyres Anywhere LTD</title>
        <meta name="description" :content="`We provide same day, 7 days a week mobile tyre fitting in ${location}. Get our high quality & cheap tyres fitted in & around ${location}`">
        <link rel="canonical" :href="'https://tyresanywhere.com/locations/' + slug">
    </Head>

    <LocationCarousel :location="location" />

    <Container>
        <OurServices />
        <AreasWeCover :areas="$page.props.areas" />
        <PopularTyreBrands />
        <CustomerRating class="px-3 pt-12"/>
    </Container>

    <Container>
        <Content>
            <div class="xl:px-11 sm:px-8 px-4">
                <h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase">Mobile Tyre Fitting & Services in {{ location }}</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">We bring our mobile tyre fitting service to your desired location.</h2>
                <p class="text-sm">
                    <b>Tyres Anywhere LTD</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom.
                    We carry out 24/7 mobile tyre services in <b>{{ location }}</b> and surrounding areas.
                    Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section,
                    and we are positive we can solve your problem quickly.
                    Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.</p>
                <br>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Same day mobile tyre fitting & puncture repair in {{ location }}</h2>
                        <br>
                        <p class="text-sm">
                            We offer same day mobile tyre fitting or mobile tyre repair in & around {{ location }}.
                            Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile
                            tyre service you can depend on every day of the week in {{ location }}.
                        </p>
                        <br>
                        <p class="text-sm">We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker.</p>
                        <br>
                        <p class="text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101">07442 980101</a> for a prompt service</span>
                        </p>
                    </div>
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Motorway or roadside mobile tyre fitting</h2>
                        <br>
                        <p class="text-sm">
                            If your tyre has failed you, and you're stranded on the roadside in or near {{ location }} - look no further
                        </p>
                        <br>
                        <p class="text-sm">
                            Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer.
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
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold mb-2">What do you require from me?</h2>
                        <h2 class="text-xl">Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car.</h2>
                        <br>
                        <p class="text-sm">The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.</p>
                    </div>

                    <div class="col-span-6 lg:p-4">
                        <h3 class="lg:text-3xl text-2xl">Why choose Tyres Anywhere LTD?</h3>
                        <br>
                        <p class="text-sm">
                            We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible,
                            be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout.
                            It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about.
                        </p>
                        <br>
                        <p class="text-sm">
                            At <b>Tyres Anywhere, Mobile Tyre Fitting</b> we bring the expertise of a garage right to your chosen location.
                            We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely.
                            We fit budget, mid-range or premium tyres of all major brands and sizes.
                        </p>
                    </div>
                    <div class="col-span-6 lg:p-4">
                        <h3 class="lg:text-3xl text-2xl">Tyre brands we supply</h3>
                        <br>
                        <b class="text-sm">Budget/Mid-range Brands</b>
                        <ul class="text-sm list-disc pl-5 mt-2">
                            <li>Farroad</li>
                            <li>Hifly</li>
                            <li>Churchill</li>
                            <li>RoadX</li>
                            <li>Infinity</li>
                        </ul>
                        <br>
                        <b class="text-sm">Premium Brands</b>
                        <ul class="text-sm list-disc pl-5 mt-2">
                            <li>Michelin</li>
                            <li>Pirelli</li>
                            <li>Bridgestone</li>
                            <li>Goodyear</li>
                            <li>Continental</li>
                        </ul>
                        <br>
                        <p class="text-sm">If you require any specific brands, you can <a href="tel:07442980101" class="text-blue-600 underline">call us</a> and ask our operator to book it for you.</p>
                    </div>
                </div>
            </div>
        </Content>
    </Container>
</template>


<script setup>
import { Head } from "@inertiajs/vue3";
import LocationCarousel from "../Shared/LocationCarousel.vue";
import Container from "../Shared/Container.vue";
import CustomerRating from "../Shared/CustomerRating.vue";
import PopularTyreBrands from "../Shared/PopularTyreBrands.vue";
import AreasWeCover from "../Shared/AreasWeCover.vue";
import OurServices from "../Shared/OurServices.vue";
import Content from "../Shared/Content.vue";

defineProps({
    location: String,
    slug: String,
})
</script>

<style scoped>

</style>
