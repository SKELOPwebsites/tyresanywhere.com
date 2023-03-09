<template>
    <div class="relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b">
        <div class="col-span-12 md:hidden flex pb-2">
            <span class="sm:text-base text-sm text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ tyre.brand }} {{ tyre.model }} {{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }} {{ tyre.speed }}</span>
        </div>
        <div class="sm:col-span-2 col-span-3 flex items-center">
            <img class="w-full" :src="`/images/tyres/tyre_logo/${tyre.brand.toLowerCase()}.webp`" onerror="this.onerror=null; this.src=`/images/tyres/tyre/sample.webp`" :alt="capitalize(tyre.brand)">
        </div>
        <div class="sm:col-span-10 col-span-9 flex flex-col">
            <div class="flex justify-between pb-2">
                <span class="md:block hidden text-lg text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ tyre.brand }} {{ tyre.model }} {{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }} {{ tyre.speed }}</span>
                <div class="md:block hidden">
                    <span v-if="tyre.pivot.quantity < 4" class="text-black font-semibold md:text-lg text-base mt-auto">£{{ tyre.price }}</span>
                    <span v-else class="text-black mt-auto">
                        <del class="text-xs decoration-red-500 mr-2">£{{ tyre.price }}</del>
                        <span class="md:text-lg text-base font-semibold">£{{ tyre.price_offer }}</span>
                    </span>
                </div>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="text-xs"><b>Size:</b> {{ tyre.width }}/{{ tyre.profile }} R{{ tyre.rim }}</span>
                <span class="text-xs"><b>Speed:</b> {{ tyre.speed }}</span>
                <span class="text-xs"><b>Quantity:</b> {{ tyre.pivot.quantity }}</span>
            </div>
            <div class="mt-auto flex items-center justify-end">
                <div class="md:hidden block">
                    <span v-if="tyre.pivot.quantity < 4" class="text-black font-semibold md:text-lg text-base mt-auto">£{{ tyre.price }}</span>
                    <span v-else class="flex flex-col items-start justify-start text-black mt-auto">
                        <del class="text-xs decoration-red-500 mr-2">£{{ tyre.price }}</del>
                        <span class="md:text-lg text-base font-semibold">£{{ tyre.price_offer }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    tyre: {
        type: Object,
        required: true,
    }
})


const capitalize = (text) => { return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase()); }
const convertToSlug = (text) => {
    return text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
</script>

<style scoped>

</style>
