<template>
    <nav class="select-none shadow-[0_0px_10px_0px_rgba(0,0,0,0.8)] bg-black relative flex items-center justify-start">
        <Container class="md:block hidden relative">
            <div class="flex items-center">
                <ul class="flex flex-row list-none">
                    <li>
                        <NavLink class="border-l" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink class="border-l nav-link-gradient-animation nav-link-gradient-2" href="/mobile-tyre-fitting" title="Mobile Tyre Fitting">Mobile Tyre Fitting</NavLink>
                    </li>
                    <li>
                        <NavLink class="border-l nav-link-gradient-animation nav-link-gradient-1" href="/search-tyres" title="Search Tyres">Search Tyres</NavLink>
                    </li>
                    <li>
                        <NavLink class="border-l" href="/tyres" title="Tyres Information">Tyres</NavLink>
                    </li>
                    <li>
                        <NavbarDropdown>
                            <template v-slot:trigger>
                                <span class="border-l cursor-pointer flex items-center lg:text-sm text-[13px] text-gray-100 hover:text-wheelfit-600 border-gray-800 lg:py-3 lg:px-5 py-2 lg:px-4 px-3 block transition duration-150 ease-in-out">
                                    Other Services
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </template>
                            <template v-slot:content>
                                <div class="flex flex-row m-0">
                                    <div class="lg:w-1/4 w-1/3 px-3">
                                        <p class="pl-4 text-2xl font-light">Other Services</p>
                                        <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                        <div class="space-y-2">
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/mobile-tyre-repair" title="Mobile Tyre Repair">Mobile Tyre Repair</Link>
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/commercial-tyres" title="Commercial Tyres">Commercial Tyres</Link>
                                        </div>
                                    </div>
                                    <div class="lg:w-1/4 w-1/3 px-3">
                                        <p class="pl-4 text-2xl font-light">Book a Tyre</p>
                                        <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                        <div class="space-y-2">
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/search-tyres" title="Search Tyres">Search Tyres</Link>
                                        </div>
                                    </div>
                                    <div class="lg:w-1/4 w-1/3 lg:ml-auto px-3">
                                        <p class="pl-4 text-2xl font-light">Need Help?</p>
                                        <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                        <div class="space-y-2">
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/contact-us" title="Contact Us">Contact Us</Link>
                                            <a class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="tel:07442980101">
                                                07442 980101
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </template>

                        </NavbarDropdown>
                    </li>
                    <li>
                        <NavLink class="border-l" href="/contact-us" title="Contact Us">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink class="border-x" href="/cart" title="Your Cart">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Container>

        <!--Mobile Navigation-->
        <div class="md:hidden block w-full flex items-center justify-center relative h-[3.5rem]">
            <a class="flex items-center color-anim" href="tel:07442 980101">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span class="text-xl">07442 980101</span>
            </a>
            <button @click="toggleMobileNav()" class="menu-btn h-10 w-10 bg-wheelfit-500 hover:bg-wheelfit-400 text-white border-0 outline-0 text-xl flex items-center justify-center transition duration-150 absolute right-2.5 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <transition name="mobile-nav">
            <div v-show="mobileNavShow" class="md:hidden block mobile-nav w-72 fixed top-0 left-0 z-50">
                <div class="h-screen overflow-y-scroll">
                    <button @click="hideMobileNav" class="w-full flex items-center justify-center h-14 bg-[#ebebeb] text-wheelfit-600 text-lg" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        CLOSE
                    </button>
                    <div class="flex flex-col">
                        <NavLinkMob href="/" component="Index" class="border-b flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            HOME
                        </NavLinkMob>
                        <NavLinkMob href="/mobile-tyre-fitting" component="MobileTyreFitting" title="Mobile Tyre Fitting" class="border-b">Mobile Tyre Fitting</NavLinkMob>
                        <NavLinkMob href="/search-tyres" component="SearchTyres.vue" title="Search Tyres" class="border-b">Search Tyres</NavLinkMob>
                        <NavLinkMob href="/tyres" component="Tyres" title="Tyres" class="border-b">Tyres</NavLinkMob>
                        <div class="w-full py-4 pl-4 border-b border-[#ebebeb] text-sm text-gray-400">
                            <span @click="otherServicesOpen = !otherServicesOpen" class="flex items-center">
                                Other Services
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <div v-show="otherServicesOpen" class="flex flex-col space-y-2 mt-2">
                                <NavLinkMob href="/mobile-tyre-repair" component="MobileTyreRepair" title="Mobile Tyre Repair" class="border-l-2 border-dotted">Mobile Tyre Repair</NavLinkMob>
                                <NavLinkMob href="/commercial-tyres" component="CommercialTyres" title="Commercial Tyres" class="border-l-2 border-dotted">Commercial Tyres</NavLinkMob>
                            </div>
                        </div>
                        <NavLinkMob href="/contact-us" component="ContactUs" title="Contact Us" class="border-b"><a>Contact Us</a></NavLinkMob>
                        <NavLinkMob href="#" component="Cart" class="border-b flex justify-start items-center">
                            Your Cart
                            <span class="ml-2 bg-blue-500 text-white text-sm uppercase font-bold rounded-full px-1.5 py-px">0</span>
                        </NavLinkMob>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from "vue"
import { router, Link } from "@inertiajs/vue3";
import NavbarDropdown from "./NavbarDropdown.vue"
import Container from "./Container.vue"
import NavLink from "./NavLink.vue"
import NavLinkMob from "./NavLinkMob.vue"

router.on('start', (event) => {
    hideMobileNav()
})

const otherServicesOpen = ref(false)
const mobileNavShow = ref(false)
const sliding = ref(false)

function toggleMobileNav(){
    if(sliding.value) return;
    mobileNavShow.value = !mobileNavShow.value;
    setSliding();
}
function hideMobileNav(){
    if(sliding.value) return;
    mobileNavShow.value = false;
    setSliding();
}
function setSliding() {
    sliding.value = true;
    setTimeout(() => {
        sliding.value = false;
    }, 500)
}
</script>

<style scoped>
@keyframes bg-animation{
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }
}

.nav-link-gradient-animation{
    background-size: 400px !important;
    border: none !important;
    animation: bg-animation 25s infinite alternate;
}
.nav-link-gradient-1{
    background: linear-gradient(-45deg, #F09821, #E1F328, #85F758, #23E566);
    color: #000 !important;
}
.nav-link-gradient-2{
    background: linear-gradient(45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
    color: #fff;
}

.mobile-nav{
    background: linear-gradient(to right, #ffffff 72%, #ebebeb 100%);
}
.menu-btn{
    box-shadow:
        0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.25),
        0 0.125rem 0.5rem rgba(0, 0, 0, 0.25),
        0 0 0 1px inset rgba(255, 255, 255, 0.10);
}
.color-anim{
    animation: color-anim 1.5s infinite;
}

@keyframes color-anim {
    0%{ color: #fff }
    50%{ color: #ff3333 }
    100%{ color: #fff }
}

.mobile-nav-enter-active{
    animation: navInAnimation 0.5s ease;
}
.mobile-nav-leave-active{
    animation: navOutAnimation 0.5s ease;
}

@keyframes navInAnimation {
    from { transform: translateX(-100%); }
    to { transform: translateX(0) }
}
@keyframes navOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(-100%) }
}
</style>
