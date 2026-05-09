<template>
    <div class="relative border-t border-stone-800" v-click-outside="() => open = false">
        <div @click="open = !open" class="cursor-pointer">
            <button type="button" class="w-full flex items-center justify-start select-none text-xs px-2 py-3 font-semibold border-gray-300 cursor-pointer">
                <span class="text-site-400" v-text="name"></span>
                <span class="ml-auto text-right" v-text="value ? value : 'Any'"></span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>

        <Transition>
            <div v-show="open"
                 class="absolute z-50 right-0 top-0 translate-x-full flex drop-shadow-[0_10px_8px_rgba(255,255,255,0.5)]"
            >
                <div class="w-0 h-0 border-r-stone-700 border-t-[20px] border-b-[20px] border-r-[20px] border-b-transparent border-t-transparent"></div>
                <div class="rounded-r-md rounded-bl-md overflow-hidden bg-stone-700 -ml-px px-4 pt-4 -translate-y-6 w-[600px]">
                    <div class="flex justify-between pb-2">
                        <span>Select Brand</span>
                        <button class="text-site-400 underline" @click="open = false">Close</button>
                    </div>

                    <template v-if="Array.isArray(options)">
                        <div v-for="option in options" class="grid grid-cols-3 gap-y-2 px-4 py-2">
                            <button @click="update(option)" class="col-span-1 py-2 group flex justify-start text-xs">
                                <span class="mr-2 group-hover:underline group-hover:text-site-400" v-text="option"></span>
                                <span class="text-stone-400">(4)</span>
                            </button>
                        </div>
                    </template>
                    <template v-else>
                        <div v-for="optionGroup in options">
                            <div class="py-2 px-4 bg-stone-600" v-text="optionGroup.name"></div>
                            <div class="grid grid-cols-3 gap-y-2 px-4 py-2">
                                <button @click="update(option)" v-for="option in optionGroup.options" class="col-span-1 py-2 group flex justify-start text-xs">
                                    <span class="mr-2 group-hover:underline group-hover:text-site-400" v-text="option"></span>
                                    <span class="text-stone-400">(4)</span>
                                </button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    options: {
        required: true,
    },
    name: String,
    value: {
        required: true,
    },
    id: String,
})

const open = ref(false);

const emit = defineEmits(['update'])

watch(() => props.value, (newValue) => {
    value.value = newValue
})

const value = ref(props.value);

const update = (val) => {
    open.value = false
    value.value = val
    emit('update', props.id, value.value)
}
</script>

<style scoped>
.v-enter-active{
    transition: all 0.3s ease-out;
}
.v-leave-active {
    transition: all 0.1s ease-out;
}
.v-enter-from{
    transform: translateX(calc(100% + 20px));
    opacity: 0;
}
.v-leave-to{
    opacity: 0;
}
</style>
