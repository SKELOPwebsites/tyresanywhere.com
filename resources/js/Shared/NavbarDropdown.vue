<template>
    <div @mouseover="open = true" @mouseleave="open = false">
        <slot name="trigger"></slot>
    </div>

    <div
        @mouseover="open = true" @mouseleave="open = false"
        class="absolute shadow-[0_5px_15px_0px_rgba(0,0,0,0.35)] w-full z-50 left-0 bg-white pb-8 pt-6 border-x border-b border-gray-800 transition duration-400"
        :class="open ? 'visible opacity-100' : 'invisible opacity-0'"
    >
        <slot name="content"></slot>

    </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

</script>

<style scoped>

</style>
