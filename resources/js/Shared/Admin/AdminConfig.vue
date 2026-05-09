<template>
    <div class="flex flex-row items-center justify-start bg-gray-100 py-2 px-2 rounded-lg">
        <div class="flex flex-col">
            <span class="text-sm font-semibold capitalize" v-text="config.key.replaceAll('_', ' ')"></span>
            <span class="text-xs text-gray-400 font-semibold capitalize" v-text="config.description"></span>
        </div>
        <div class="ml-auto flex items-center space-x-2">
            <input
                v-model="form.value"
                type="text"
                class="w-16 h-6 px-3 text-xs border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25"
             >

            <div class="flex flex-row space-x-2">
                <button
                    :disabled="config.value === form.value" @click="$emit('save', config.id, form)"
                    class="block rounded text-white sm:text-sm text-xs font-semibold py-1 px-3"
                    :class="{'bg-green-400/30 cursor-not-allowed': config.value === form.value, 'bg-green-400': config.value !== form.value}"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12v7zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 11v5h8v-5H8z" fill="#ffffff"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3"

const props = defineProps({
    config: {
        type: Object,
        required: true,
    }
})

const form = useForm({
    value: props.config.value
})
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
