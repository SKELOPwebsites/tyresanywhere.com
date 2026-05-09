<template>
    <div class="relative xl:h-[32rem] lg:h-[28rem] sm:h-[300px] h-[200px] md:w-full overflow-hidden">
        <slot></slot>

        <button @click="this.$emit('next')" class="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </button>
        <button @click="this.$emit('prev')" class="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
