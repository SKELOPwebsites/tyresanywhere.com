<template>
    <div
        class="relative flex items-center justify-center border-gray-300 h-full text-[11px] group"
    >
        <span v-if="!editMode" v-text="text"></span>
        <div v-if="editable" class="space-x-0.5" :class="{'hidden': !editMode}">
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
        <button v-if="editable && !editMode" @click="editMode = true" class="absolute right-1 hidden group-hover:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </button>

        <div v-if="editMode" class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50">
            <button class="bg-green-400 w-4 h-4" @click="saveEdit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4">
                    <path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path>
                </svg>
            </button>
            <button class="bg-red-400 w-4 h-4" @click="editMode = false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4">
                    <path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { usePage } from "@inertiajs/vue3"

const props = defineProps({
    text: {
        required: false,
        type: String,
    },
    value: {
        required: false,
        type: String
    },
    editable: {
        required: false,
        type: Boolean
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

const editMode = ref(false)

function saveEdit () {
    editMode.value = false;

    emit('update', 'brand', value.value)
}

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
