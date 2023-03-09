<template>
    <Container>
        <div class="pt-6 sm:pb-8 pb-6 shadow-red bg-white">

            <form @submit.prevent="submit" class="grid lg:grid-cols-8 grid-cols-12 items-end gap-x-2 gap-y-4 xl:px-24 sm:px-4 px-3 w-full">
                <div class="lg:col-span-1 sm:col-span-3 col-span-6">
                    <label for="width_size" class="block font-bold text-center text-sm mb-1">Width</label>
                    <select v-model="form.width" id="width_size" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                        <option>- Select -</option>
                        <optgroup label="Common">
                            <option v-for="width in getCommonWidths()" :value="width" v-text="width"></option>
                        </optgroup>
                        <optgroup label="Other">
                            <option v-for="width in getOtherWidths()" :value="width" v-text="width"></option>
                        </optgroup>
                    </select>
                </div>
                <div class="lg:col-span-1 sm:col-span-3 col-span-6">
                    <label for="profile_size" class="block font-bold text-center text-sm mb-1">Profile</label>
                    <select v-model="form.profile" id="profile_size" :disabled="!profiles" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                        <option>- Select -</option>
                        <option v-for="profile in profiles" :value="profile" v-text="profile"></option>
                    </select>
                </div>
                <div class="lg:col-span-1 sm:col-span-3 col-span-6">
                    <label for="rim_size" class="block font-bold text-center text-sm mb-1">Rim</label>
                    <select v-model="form.rim" id="rim_size" :disabled="!rims" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none">
                        <option>- Select -</option>
                        <option v-for="rim in rims" :value="rim" v-text="rim"></option>
                    </select>
                </div>
                <div class="lg:col-span-1 sm:col-span-3 col-span-6">
                    <label for="speed" class="block font-bold text-center text-sm mb-1">Speed</label>
                    <select id="speed" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                        <option selected>Any</option>
                    </select>
                </div>
                <div class="lg:col-span-2 sm:col-span-6 col-span-12 relative">
                    <label for="postcode" class="block font-bold text-center text-sm mb-1">Postcode</label>
                    <div class="relative">
                        <input type="text" v-model="form.postcode" id="postcode" name="postcode" autocomplete="postal-code" :class="{'block uppercase text-sm w-full py-1.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none': true, 'border-red-500':$page.props.flash.errors.postcode, 'border-gray-300':!$page.props.flash.errors.postcode}">
                        <svg v-if="$page.props.flash.errors.postcode" xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span class="w-full absolute left-1/2 -translate-x-1/2 block text-center text-xs text-red-500" v-if="$page.props.flash.errors.postcode" v-text="$page.props.flash.errors.postcode"></span>
                </div>
                <div class="lg:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-4">
                    <button type="submit" :disabled="form.processing || !valid" :class="{'relative w-full rounded outline-0 h-[2.125rem] text-white text-lg text-center uppercase transition duration-150 ease-in-out': true, 'bg-wheelfit-600 cursor-pointer hover:bg-wheelfit-500 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600': valid, 'bg-wheelfit-600/30 cursor-not-allowed': !valid, 'button--loading': form.processing}">
                        <span v-if="!form.processing" class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                            FIND
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </Container>
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
