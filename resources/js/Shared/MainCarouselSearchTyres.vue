<template>
    <div class="lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 flex items-center justify-center flex-col pt-4 lg:mt-0 mt-4">
        <p class="text-shadow-red block xl:text-5xl sm:text-4xl text-2xl font-bold uppercase lg:text-white text-gray-800 mb-3">SEARCH TYRES</p>
        <div class="md:grid md:grid-cols-12 md:gap-x-6 flex flex-col-reverse items-center sm:bg-white bg-transparent lg:shadow-none sm:shadow-[0_5px_15px_rgba(255,102,102,0.35)] py-3 sm:px-5 px-2 rounded-t-lg lg:mb-4 xl:w-[50rem] lg:w-[44rem] w-full">
            <form @submit.prevent="submit" class="md:col-span-8 w-full">
                <div class="grid grid-cols-12 items-start gap-x-2 gap-y-2">
                    <div class="col-span-4">
                        <label for="width_size" class="block font-bold text-center text-sm">Width</label>
                        <select v-model="form.width" id="width_size" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                            <option>- Select -</option>
                            <optgroup label="Common">
                                <option v-for="width in getCommonWidths()" :value="width" v-text="width"></option>
                            </optgroup>
                            <optgroup label="Other">
                                <option v-for="width in getOtherWidths()" :value="width" v-text="width"></option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-span-4">
                        <label for="profile_size" class="block font-bold text-center text-sm">Profile</label>
                        <select v-model="form.profile" id="profile_size" :disabled="!profiles" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                            <option>- Select -</option>
                            <option v-for="profile in profiles" :value="profile" v-text="profile"></option>
                        </select>
                    </div>
                    <div class="col-span-4">
                        <label for="rim_size" class="block font-bold text-center text-sm">Rim Size</label>
                        <select v-model="form.rim" id="rim_size" :disabled="!rims" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                            <option>- Select -</option>
                            <option v-for="rim in rims" :value="rim" v-text="rim"></option>
                        </select>
                    </div>
                    <div class="sm:col-span-6 col-span-12">
                        <div class="relative">
                            <input type="text" v-model="form.postcode" id="postcode" name="postcode" autocomplete="postal-code" placeholder="Postcode" :class="{'block uppercase text-sm w-full h-10 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none': true, 'border-red-500':$page.props.flash.errors.postcode, 'border-gray-300':!$page.props.flash.errors.postcode}">
                            <svg v-if="$page.props.flash.errors.postcode" xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span class="w-full block text-center text-xs text-red-500" v-if="$page.props.flash.errors.postcode" v-text="$page.props.flash.errors.postcode"></span>
                    </div>
                    <div class="sm:col-span-6 col-span-12">
                        <button type="submit" :class="{'flex items-center justify-center bg-wheelfit-500 text-white w-full rounded outline-0 h-10 text-lg text-center uppercase': true, 'focus:ring-4 focus:ring-wheelfit-600/30 focus:border-wheelfit-600/30 hover:bg-wheelfit-400 transition duration-150 ease-in-out': valid, 'opacity-50 cursor-not-allowed': !valid, 'button--loading': form.processing }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                            FIND
                        </button>
                    </div>
                </div>
            </form>
            <div class="md:col-span-4 md:mb-0 mb-6 w-full">
                <img
                    src="/images/main/tyre-size-guide.webp"
                    srcset="/images/main/tyre-size-guide.webp 720w,
                            /images/main/tyre-size-guide-500.webp 500w,
                            /images/main/tyre-size-guide-300.webp 300w,
                            /images/main/tyre-size-guide-150.webp 150w"
                    alt="Tyre Size Guide"
                    sizes="(min-width: 1280px) 237px, (min-width:1024px) 205px, (min-width: 768px) 221px, (min-width: 640px) 520px, (min-width: 576px) 544px, 100vw"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import { usePage, useForm } from "@inertiajs/vue3"
import Container from "./Container.vue"

const tyre_sizes = computed(() => usePage().props.tyre_sizes)

const profiles = ref(null);
const rims = ref(null);

const valid = computed(() => {
    return (typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode)
});

const form = useForm({
    width: "- Select -",
    profile: "- Select -",
    rim: "- Select -",
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
.text-shadow-red{
    text-shadow: 0 4px 3px rgba(255,102,102,0.4), 0 8px 13px rgba(255,102,102,0.3), 0 18px 23px rgba(255,102,102,0.2), 0 24px 29px rgba(255,102,102,0.1);
}
@media screen and (max-width: 1024px){
    .text-shadow-red{
        text-shadow: none;
    }
}
select{
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'> <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /> </svg>");
    background-position: right 0.75rem center;
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
