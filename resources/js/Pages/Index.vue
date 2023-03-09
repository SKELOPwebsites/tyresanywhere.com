<template>
    <Head>
        <title>Mobile Tyre Fitting - Car & Van Tyres Fitted At Home Or Work | Tyres Anywhere LTD</title>
        <meta name="description" content="We provide round-the-clock same day, 7 days a week mobile tyre fitting. Get our tyres fitted at home, work or roadside. We provide cheap & high quality tyres.">
        <link rel="canonical" href="https://tyresanywhere.com">
    </Head>

    <MainCarousel />

    <Container>
        <OurServices />
        <AreasWeCover :areas="$page.props.areas"/>
        <PopularTyreBrands />
        <CustomerRating class="px-3 pt-12"/>
    </Container>

    <Container>
        <Content>
            <div class="xl:px-11 sm:px-8 px-4">
                <h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase">Welcome to <span class="text-wheelfit-300">Tyres Anywhere</span>, Mobile Tyre Fitting</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">We bring our mobile tyre fitting service to your desired location.</h2>
                <p class="text-sm">
                    <b>Tyres Anywhere LTD</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom.
                    Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section,
                    and we are positive we can solve your problem quickly.
                    Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.</p>
                <br>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">24 Hour Mobile Tyre Fitting</h2>
                        <br>
                        <p class="text-sm">
                            At <b>Tyres Anywhere, Mobile Tyre Fitting</b>, we offer our customers 24 hour mobile tyre fitting service. When you're in need of an emergency tyre repair or change,
                            we have you covered. We know that you don't choose the day or time of your next tyre service needs, that's why we offer our service 24 hours.
                            We want to make sure that you have access to emergency mobile tyre fitting help when you need it.
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
                        <h2 class="lg:text-3xl text-2xl font-semibold">Mobile Tyre Repair - Your Mobile Tyre Fitters</h2>
                        <br>
                        <p class="text-sm">
                            Mobile tyres can offer you the security you need to confidently operate your vehicle.
                            Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work,
                            or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs.
                        </p>
                        <br>
                        <p class="text-sm">
                            During normal hours, we can send hour day mobile tyre team to come help you out. Don't worry,
                            we also have a night team on standby every night, as well as on holidays.
                            We know that your mobile tyre repair needs don't take holidays, so we don't either!
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
                        <h2 class="lg:text-3xl text-2xl font-semibold mb-2">Night and Day Mobile Tyre Services</h2>
                        <h2 class="text-xl">We can meet you anywhere, anytime</h2>
                        <br>
                        <p class="text-sm">We can help you out with all of your services, whether you need a particular piece of equipment, like a <a class="text-blue-600 underline" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Locknut">locking wheel nut</a> or just need a general tyre fitting mobile service, we're happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we're proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!</p>
                        <br>
                        <p class="text-sm">Whether you're stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you're deserted on the side of the road, our team will search for you to help provide you with great services day or night.</p>
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
                        <h2 class="lg:text-3xl text-2xl font-semibold">Commercial Tyre Fitting</h2>
                        <br>
                        <p class="text-sm">
                            Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus.
                            We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans.
                            We fit commercial tyres during day & night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution!
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
import MainCarousel from "../Shared/MainCarousel.vue";
import Container from "../Shared/Container.vue";
import CustomerRating from "../Shared/CustomerRating.vue";
import PopularTyreBrands from "../Shared/PopularTyreBrands.vue";
import AreasWeCover from "../Shared/AreasWeCover.vue";
import OurServices from "../Shared/OurServices.vue";
import Content from "../Shared/Content.vue";

</script>

<style scoped>

</style>
