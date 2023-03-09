<template>
    <Head>
        <title>Search Tyres | Tyres Anywhere LTD</title>
        <meta name="description" content="Enter your tyre size to search a wide range of high-quality tyres and decide when & where to have it fitted by our mobile tyre fitters.">
        <link rel="canonical" href="https://tyresanywhere.com/search-tyres">
    </Head>

    <div class="md:max-w-xl sm:max-w-lg max-w-xs mx-auto w-full sm:my-12 my-6">
        <div class="sm:flex hidden text-xs flex-row justify-between items-center md:px-4 mb-2 text-gray-400">
            <span class="underline text-gray-800">Your Tyre Size</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Choose Tyres
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Fitting Location
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Date & Time
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="flex items-center-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Checkout
            </span>
        </div>
        <div class="w-full bg-white rounded-md py-8 md:px-16 sm:px-8 px-4 shadow-xl">
            <p class="text-center text-lg">Enter your tyre size</p>
            <hr class="w-1/2 mx-auto my-4">
            <img
                src="/images/main/tyre-size-guide.webp"
                srcset="/images/main/tyre-size-guide.webp 720w,
                                /images/main/tyre-size-guide-500.webp 500w,
                                /images/main/tyre-size-guide-300.webp 300w,
                                /images/main/tyre-size-guide-150.webp 150w"
                alt="Tyre Size Guide"
                sizes="(min-width: 640px) 448px, (min-width: 320px) 288px, calc(100vw - 32px)"
            >

            <div class="grid grid-cols-3 mt-4 gap-x-1 gap-y-2">
                <div class="col-span-1">
                    <select v-model="form.width" class="block sm:text-base text-sm w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                        <option>Width</option>
                        <optgroup label="Common">
                            <option v-for="width in getCommonWidths()" :value="width" v-text="width"></option>
                        </optgroup>
                        <optgroup label="Other">
                            <option v-for="width in getOtherWidths()" :value="width" v-text="width"></option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-span-1">
                    <select v-model="form.profile" :disabled="!profiles" class="block sm:text-base text-sm w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                        <option>Profile</option>
                        <option v-for="profile in profiles" :value="profile" v-text="profile"></option>
                    </select>
                </div>
                <div class="col-span-1">
                    <select v-model="form.rim" :disabled="!rims" class="block sm:text-base text-sm w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                        <option>Rim</option>
                        <option v-for="rim in rims" :value="rim" v-text="rim"></option>
                    </select>
                </div>
                <div class="col-span-3">
                    <span class="block text-xs text-gray-400">We recommend customers to check the tyre size on the side wall of their tyre(s) before proceeding</span>
                </div>
            </div>

            <div class="mt-6">
                <div class="relative">
                    <input type="text" v-model="form.postcode" id="postcode" name="postcode" autocomplete="postal-code" placeholder="Postcode" :class="{'block uppercase text-sm w-full py-2.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none': true, 'border-red-500':$page.props.flash.errors.postcode, 'border-gray-300':!$page.props.flash.errors.postcode}">
                    <svg v-if="$page.props.flash.errors.postcode" xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span class="w-full block text-center text-xs text-red-500" v-if="$page.props.flash.errors.postcode" v-text="$page.props.flash.errors.postcode"></span>
            </div>

            <button type="button" :disabled="!valid" @click="submit" :class="{'relative flex items-center justify-center mt-4 bg-wheelfit-500 text-white w-full rounded outline-0 h-12 text-white text-lg text-center': true, 'focus:ring-2 focus:ring-wheelfit-600/30 focus:border focus:border-wheelfit-600 hover:bg-wheelfit-600 transition duration-150 ease-in-out': valid, 'opacity-50 cursor-not-allowed': !valid, 'button--loading': form.processing}">
                <span v-if="!form.processing">Continue to tyres</span>
            </button>
        </div>
    </div>
</template>


<script setup>
import { watch, ref, computed } from "vue";
import { Head, usePage, useForm } from "@inertiajs/vue3"

const tyre_sizes = computed(() => usePage().props.tyre_sizes)

const profiles = ref(null);
const rims = ref(null);

const valid = computed(() => {
    return (typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode)
});

const form = useForm({
    width: "Width",
    profile: "Profile",
    rim: "Rim",
    postcode: null,
})

watch(() => form.width, (width, prevWidth) => {
    if(width !== prevWidth){
        form.reset("profile", "rim")
        profiles.value = null;
        rims.value = null;
    }

    if(typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map(size => size.profile))].sort();
    }else{
        form.reset("profile", "rim")
        profiles.value = null;
        rims.value = null;
    }
})
watch(() => form.profile, (profile, prevProfile) => {
    if(profile !== prevProfile){
        form.reset("rim")
        rims.value = null;
    }

    if(typeof form.width !== "number") {
        form.reset("profile", "rim")
        profiles.value = null;
        rims.value = null;
        return;
    }
    if(typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => (size.width === form.width && size.profile === profile)).map(size => size.rim))].sort();
    }else{
        form.reset("profile", "rim")
        rims.value = null;
    }
})

const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];

function getCommonWidths() {
    return [...new Set(tyre_sizes.value.map(size => size.width))].filter(width => {
        return commonWidths.includes(width)
    });
}
function getOtherWidths() {
    return [...new Set(tyre_sizes.value.map(size => size.width))].filter(width => {
        return !commonWidths.includes(width)
    });
}

function submit() {
    if(valid.value){
        form.submit('post' ,'/search-tyres', {
            preserveScroll: true
        })
    }
}

</script>

<style scoped>
input[type=checkbox] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
input[type=checkbox]:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.shadow-red{
    box-shadow: rgba(255, 102, 102, 0.35) 0 5px 15px;
}
select{
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'> <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /> </svg>");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.25rem;
}
select:disabled{
    color: transparent;
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
