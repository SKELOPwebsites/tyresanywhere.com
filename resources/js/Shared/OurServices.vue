<template>
    <div class="border-x border-t border-gray-300 pt-8 pb-16">
        <p class="text-center text-3xl font-montserrat font-bold mb-8">Our Services</p>
        <div class="sm:w-full w-64 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:px-8 md:px-28 sm:px-8 px-0 xl:gap-x-4 lg:gap-x-3 gap-x-4 lg:gap-y-0 gap-y-4 items-center justify-center">
            <a class="col-span-1" href="/mobile-tyre-fitting" title="Mobile Tyre Fitting">
                <div class="service-item w-full xl:h-44 lg:h-40 h-44 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <div class="p-2.5 relative border-4 border-gray-300 rounded-full transition duration-300 ease-in-out">
                        <img class="w-[4.25rem] h-[4.25rem]" src="/images/services/mobile-tyre-fitting.webp" alt="Mobile Tyre Fitting">
                    </div>
                    <h2 class="text-sm text-center whitespace-nowrap font-montserrat font-bold uppercase">Mobile Tyre Fitting</h2>
                </div>
            </a>
            <a class="col-span-1" href="/mobile-tyre-repair" title="Mobile Tyre Repair">
                <div class="service-item w-full xl:h-44 lg:h-40 h-44 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <div class="p-2.5 relative border-4 border-gray-300 rounded-full transition duration-300 ease-in-out">
                        <img class="w-[4.25rem] h-[4.25rem]" src="/images/services/mobile-tyre-repair.webp" alt="Mobile Tyre Repair">
                    </div>
                    <h2 class="text-sm text-center whitespace-nowrap font-montserrat font-bold uppercase">Mobile Tyre Repair</h2>
                </div>
            </a>
            <a class="col-span-1" href="/mobile-tyre-fitting" title="Same Day Tyre Fitting">
                <div class="service-item w-full xl:h-44 lg:h-40 h-44 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <div class="p-2.5 relative border-4 border-gray-300 rounded-full transition duration-300 ease-in-out">
                        <img class="w-[4.25rem] h-[4.25rem]" src="/images/services/same-day-tyre-fitting.webp" alt="Same Day Tyre Fitting">
                    </div>
                    <h2 class="text-sm text-center whitespace-nowrap font-montserrat font-bold uppercase">Same Day Tyre Fitting</h2>
                </div>
            </a>
            <a class="col-span-1" href="/commercial-tyres" title="Commercial Tyres">
                <div class="service-item w-full xl:h-44 lg:h-40 h-44 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out">
                    <div class="p-2.5 relative border-4 border-gray-300 rounded-full transition duration-300 ease-in-out">
                        <img class="w-[4.25rem] h-[4.25rem]" src="/images/services/commercial-tyres.webp" alt="Commercial Tyres">
                    </div>
                    <h2 class="text-sm text-center whitespace-nowrap font-montserrat font-bold uppercase">Commercial Tyres</h2>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.service-item div{
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.service-item div::before{
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
}
.service-item:hover div{
    transform: translateY(-5px);
}
.service-item:hover div::before{
    opacity: 1;
    transform: translateY(5px);
}

</style>
