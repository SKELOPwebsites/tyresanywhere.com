<template>
    <div
        class="h-60 w-full mx-auto flex flex-row items-center justify-start rounded-lg overflow-hidden shadow-lg border"
        :class="['border-'+tyre.quality+'-primary', 'shadow-'+tyre.quality+'-primary']"
    >
        <div class="h-full xl:w-2/5 md:w-1/3 sm:w-[35%] w-2/5 bg-white overflow-hidden flex flex-col items-center justify-center product-head">
            <div class="relative flex items-start w-full h-48 2xl:pt-8 pt-2 md:ml-2 sm:ml-4 ml-0">
                <img class="absolute 2xl:h-[150px] xl:h-32 md:h-40 h-36 w-fit sm:-left-6 left-1/2 sm:translate-x-0 -translate-x-1/2 bottom-0 object-cover object-top" :src="`/images/tyres/tyre/${tyre.brand.toLowerCase()}.webp`" onerror="this.onerror=null; this.src=`/images/tyres/tyre/sample.webp`" :alt="capitalize(tyre.brand)">
                <div class="2xl:w-1/3 lg:w-5/12 md:w-1/3 sm:w-2/5 w-full sm:block flex justify-between sm:pl-1 sm:px-0 px-2 ml-auto relative z-10">
                    <div class="flex items-center text-budget-primary 2xl:text-lg xl:text-base lg:text-lg sm:text-base text-sm font-semibold">
                        <div v-tooltip="'Fuel Rating'">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="2xl:w-4 xl:w-3 sm:w-4 w-3 2xl:h-4 xl:h-3 sm:h-4 h-3 sm:mr-2 mr-1" fill="currentColor"><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path></svg>
                        </div>
                        <span v-text="tyre.fuel" class="uppercase"></span>
                    </div>
                    <div class="flex items-center text-budget-primary 2xl:text-lg xl:text-base lg:text-lg sm:text-base text-sm font-semibold">
                        <div v-tooltip="'Wet Grip Rating'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-4 xl:w-3 sm:w-4 w-3 2xl:h-4 xl:h-3 sm:h-4 h-3 sm:mr-2 mr-1" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"></path>
                            </svg>
                        </div>
                        <span v-text="tyre.wet" class="uppercase"></span>
                    </div>
                    <div class="flex items-center text-budget-primary 2xl:text-lg xl:text-base lg:text-lg sm:text-base text-sm font-semibold">
                        <div v-tooltip="'Noise Level'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-4 xl:w-3 sm:w-4 w-3 2xl:h-4 xl:h-3 sm:h-4 h-3 sm:mr-2 mr-1" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path>
                                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path>
                                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path>
                            </svg>
                        </div>
                        <span v-text="tyre.noise" class="uppercase"></span>
                    </div>
                </div>
            </div>
            <div class="w-full px-2 h-12 bg-white flex items-start justify-center">
                <div class="flex items-start justify-start w-full">
                    <img class="max-h-[42px]" :src="`/images/tyres/logo/${tyre.brand.toLowerCase()}.webp`" :alt="capitalize(tyre.brand)">
                </div>
            </div>
        </div>

        <div class="2xl:w-3/5 md:w-2/3 sm:w-[65%] w-3/5 h-full flex flex-col bg-white product-body px-2">
            <div class="product-name py-3 border-b">
                <span class="block text-lg font-bold" v-text="tyre.model"></span>
                <span class="block text-sm">{{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }} {{ tyre.speed }}</span>
            </div>

            <div class="flex items-center justify-start space-x-4">
                <img v-if="tyre.usage === 'passenger' || tyre.usage === 'passenger_4x4'" class="w-[30px] h-[30px]" src="/images/tyres/icons/passenger.webp" alt="" v-tooltip="'Passenger Tyre'">
                <img v-if="tyre.usage === '4x4' || tyre.usage === 'passenger_4x4'" class="w-[30px] h-[30px]" src="/images/tyres/icons/4x4.webp" alt="" v-tooltip="'4x4 Tyre'">
                <img v-if="tyre.usage === 'commercial'" class="w-[30px] h-[30px]" src="/images/tyres/icons/commercial.webp" alt="" v-tooltip="'Commercial Tyre'">

                <img v-if="tyre.extra_load" class="w-[30px] h-[30px]" src="/images/tyres/icons/extra-load.webp" alt="" v-tooltip="'Extra Load'">

                <img v-if="tyre.season === 'all-season'" class="w-[30px] h-[30px]" src="/images/tyres/icons/all-season.webp" alt="" v-tooltip="'All-Season Tyre'">
                <img v-if="tyre.season === 'summer'" class="w-[30px] h-[30px]" src="/images/tyres/icons/summer.webp" alt="" v-tooltip="'Summer Tyre'">
                <img v-if="tyre.season === 'winter'" class="w-[30px] h-[30px]" src="/images/tyres/icons/winter.webp" alt="" v-tooltip="'Winter Tyre'">
            </div>

            <div class="pt-2">
                <span class="sm:text-2xl text-xl font-bold text-center block">£{{ tyre.price }}</span>

                <span class="block mt-1 text-xs text-center text-gray-500">Or <span class="text-red-500 font-bold">£{{ tyre.price_offer }}</span> each when you purchase 4 or more tyres.</span>
            </div>

            <form @submit.prevent="$emit('addToCart', form, inCart)" class="grid grid-cols-3 gap-x-2 mt-auto mb-2">
                <div class="col-span-1">
                    <input v-model="form.tyre_id" type="hidden">
                    <select :disabled="inCart" v-model="form.quantity" class="sm:block hidden text-xs w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                    </select>
                    <select :disabled="inCart" v-model="form.quantity" class="sm:hidden block text-xs w-full py-1.5 sm:px-3 px-1.5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="col-span-2">
                    <button type="submit" :class="{'relative w-full rounded outline-0 h-[2.125rem] sm:text-base text-sm text-center uppercase transition duration-150 ease-in-out': true, 'bg-green-500 hover:bg-green-600 text-white font-semibold': !inCart, 'border border-gray-300 text-black hover:bg-gray-300': inCart, 'button--loading': form.processing}">
                            <span v-if="inCart" class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span>View Cart</span>
                            </span>
                        <span v-else-if="!form.processing">Buy Now</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useForm, usePage } from '@inertiajs/vue3'

const props = defineProps({
    tyre: {
        type: Object,
        required: true,
    }
})

const form = useForm({
    tyre_id: props.tyre.id,
    quantity: 2,
})

const inCart = computed(() => {
    return usePage().props.cart.tyre ? usePage().props.cart.tyre.id === props.tyre.id : false;
})

const capitalize = (text) => { return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase()); }
const convertToSlug = (text) => {
    return text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

</script>

<style scoped>
select{
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'> <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /> </svg>");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.25rem;
}
select:disabled{
    color: transparent;
}

.product-quality::before,
.product-quality::after{
    content: '';
    height: 0;
    width: 0;
    border-bottom-width: 30px;
    border-bottom-style: solid;
    border-bottom-color: inherit;
    position: absolute;
    top: 0;
}
.product-quality::before{
    border-left: 30px solid transparent;
    left: -30px;
}
.product-quality::after{
    border-right: 30px solid transparent;
    right: -30px;
}

.bg-budget-primary span{
    text-shadow: 0 0 4px #00DAFF, 0 0 8px #00DAFF, 0 0 12px #00DAFF, 0 0 16px #00DAFF, 0 0 20px #00DAFF, 0 0 24px #00DAFF, 0 0 28px #00DAFF;
}
.bg-best-budget-primary span{
    text-shadow: 0 0 4px #008FFF, 0 0 8px #008FFF, 0 0 12px #008FFF, 0 0 16px #008FFF, 0 0 20px #008FFF, 0 0 24px #008FFF, 0 0 28px #008FFF;
}
.bg-midrange-primary span{
    text-shadow: 0 0 4px #BD83FF, 0 0 8px #BD83FF, 0 0 12px #BD83FF, 0 0 16px #BD83FF, 0 0 20px #BD83FF, 0 0 24px #BD83FF, 0 0 28px #BD83FF;
}
.bg-premium-primary span{
    text-shadow: 0 0 4px #FF7777, 0 0 8px #FF7777, 0 0 12px #FF7777, 0 0 16px #FF7777, 0 0 20px #FF7777, 0 0 24px #FF7777, 0 0 28px #F77;
}
.bg-best-selling-primary span{
    text-shadow: 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 16px #fff, 0 0 20px #fff, 0 0 24px #fff, 0 0 28px #fff;
}
.bg-high-performance-primary span{
    text-shadow: 0 0 4px #FF8C00, 0 0 8px #FF8C00, 0 0 12px #FF8C00, 0 0 16px #FF8C00, 0 0 20px #FF8C00, 0 0 24px #FF8C00, 0 0 28px #FF8C00;
}
.bg-popular-choice-primary span{
    text-shadow: 0 0 4px #f08804, 0 0 8px #f08804, 0 0 12px #f08804, 0 0 16px #f08804, 0 0 20px #f08804, 0 0 24px #f08804, 0 0 28px #f08804;
}
.bg-custom-primary span{
    text-shadow: 0 0 4px #FF7777, 0 0 8px #FF7777, 0 0 12px #FF7777, 0 0 16px #FF7777, 0 0 20px #FF7777, 0 0 24px #FF7777, 0 0 28px #F77;
}

.product-body{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.button--loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}
</style>
