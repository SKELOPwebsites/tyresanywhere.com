<template>
    <div class="relative border-t border-stone-800" v-click-outside="() => open = false">
        <div class="w-full flex items-center justify-start select-none text-xs px-2 py-3 font-semibold cursor-pointer">
            <span class="text-site-400" v-text="name"></span>
        </div>
        <div class="w-full px-2 pt-1 pb-3 space-y-2">
            <div
                v-for="option in options"
                class="flex items-center justify-start"
            >
                <div class="mr-2">
                    <input type="checkbox" :id="option.value" :value="option.value" @input="update(option.value)" :checked="Array.isArray(value) && value.includes(option.value)">
                </div>
                <label :for="option.value" v-text="option.label" class="text-sm"></label>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from "vue"

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
    if(!Array.isArray(value.value)) {
        value.value = []
    }
    if(value.value.includes(val)){
        let ind = value.value.indexOf(val)
        if (ind > -1) {
            value.value.splice(ind, 1)
        }
    }
    else {
        value.value.push(val)
    }

    emit('update', props.id, value.value)
}
</script>

<style scoped>
input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: rgb(68, 64, 60);
    margin: 0;

    padding:1px;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid rgb(41, 37, 36);
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="checkbox"]::before {
    content: '\2713';
    transform: scale(0);
    font-size: 12px;
    transition: 120ms transform ease-in-out;
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}
</style>
