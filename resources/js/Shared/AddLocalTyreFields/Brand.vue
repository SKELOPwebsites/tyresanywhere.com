<template>
    <div
        class="relative flex items-center justify-center border-gray-300 h-full text-[11px] group"
    >
        <div class="space-x-0.5">
            <div class="w-full">
                <div
                    class="relative"
                    v-click-outside="closeListbox"
                    @keydown.esc="closeListbox"
                >
                    <span class="inline-block w-full rounded-sm">
                        <button
                            ref="button"
                            @click="toggleListboxVisibility"
                            @keyup.space.prevent
                            :aria-expanded="open"
                            aria-haspopup="listbox"
                            class="relative z-0 w-full pl-2 pr-8 text-left transition duration-150 ease-in-out bg-transparent border border-black rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-[11px] sm:leading-5"
                        >
                            <span v-show="!open" v-text="Object.values(options).indexOf(value) >= 0 ? value : placeholder" :class="{'text-gray-500': !(Object.values(options).indexOf(value) >= 0)}" class="block truncate"></span>

                            <input
                                ref="searchInput"
                                v-show="open"
                                v-model="search"
                                @keydown.enter.stop.prevent="selectOption"
                                @keydown.up.stop.prevent="focusPreviousOption"
                                @keydown.down.stop.prevent="focusNextOption"
                                type="search"
                                class="w-full h-full form-control focus:outline-none"
                            />

                            <span class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </span>

                    <Transition name="listbox">
                        <div v-show="open" class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                            <ul
                                role="listbox"
                                tabindex="-1"
                                ref="listbox"
                                class="py-1 overflow-auto rounded-md shadow-xs max-h-60 focus:outline-none"
                            >
                                <template v-for="(key, index) in Object.keys(options)" :key="index">
                                    <li
                                        :id="'Option' + index"
                                        role="option"
                                        :aria-selected="focusedOptionIndex === index"
                                        @click="selectOption"
                                        @mouseenter="focusedOptionIndex = index"
                                        @mouseleave="focusedOptionIndex = null"
                                        :class="{'text-white bg-indigo-600': index === focusedOptionIndex, 'text-gray-900': index !== focusedOptionIndex }"
                                        class="relative py-1 pl-3 text-gray-900 cursor-default select-none pr-9"
                                    >
                                        <span class="block font-normal truncate" :class="{'font-semibold text-white': index === focusedOptionIndex, 'font-normal': index !== focusedOptionIndex }" v-text="Object.values(options)[index]"></span>

                                        <span v-show="key === value" :class="{ 'text-white': index === focusedOptionIndex, 'text-indigo-600': index !== focusedOptionIndex }" class="absolute inset-y-0 right-0 flex items-center pr-4">
                                            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>
                                </template>

                                <div
                                    v-show="! Object.keys(options).length"
                                    v-text="emptyOptionsMessage"
                                    class="cursor-default select-none py-2 px-3 text-gray-900"
                                ></div>
                            </ul>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { usePage } from "@inertiajs/vue3"

const props = defineProps({
    value: {
        required: true,
    },
    placeholder: {
        type: String,
        required: false,
        default: 'Select an option'
    },
    emptyOptionsMessage: {
        type: String,
        required: false,
        default: 'No results match your search'
    },
})
const emit = defineEmits(['update'])

const button = ref(null);
const searchInput = ref(null);
const listbox = ref(null);

const open = ref(false);
const value = ref(props.value);
const options = ref(usePage().props.brands);
const focusedOptionIndex = ref(null);

const search = ref('');

function closeListbox() {
    open.value = false;

    focusedOptionIndex.value = null;
}

function focusNextOption() {
    if(focusedOptionIndex.value === null) return focusedOptionIndex.value = Object.keys(options.value).length - 1;

    if (focusedOptionIndex.value + 1 >= Object.keys(options.value).length) return;

    focusedOptionIndex.value++;

    listbox.value.children[focusedOptionIndex.value].scrollIntoView({
        block: "center"
    })
}

function focusPreviousOption() {
    if(focusedOptionIndex.value === null) return focusedOptionIndex.value = 0;

    if (focusedOptionIndex.value <= 0) return;

    focusedOptionIndex.value--;

    listbox.value.children[focusedOptionIndex.value].scrollIntoView({
        block: "center"
    })
}


function selectOption() {
    if (! open.value) return toggleListboxVisibility()

    search.value = '';
    value.value = Object.values(options.value)[focusedOptionIndex.value];
    emit('update', value.value)

    closeListbox();
}

function toggleListboxVisibility() {
    if(open.value) return closeListbox();

    focusedOptionIndex.value = Object.values(options.value).indexOf(value.value)

    if(focusedOptionIndex.value < 0) focusedOptionIndex.value = 0;

    open.value = true;

    nextTick(() => {
        searchInput.value.focus();

        listbox.value.children[focusedOptionIndex.value].scrollIntoView({
            block: "center"
        })
    })
}

watch(search, (value) => {
    if(!open.value || !value) return options.value = props.data;

    options.value = Object.keys(props.data)
        .filter((key) => props.data[key].toLowerCase().includes(value.toLowerCase()))
        .reduce((options, key) => {
            options[key] = props.data[key]
            return options
        }, {})
});

</script>

<style scoped>

</style>
