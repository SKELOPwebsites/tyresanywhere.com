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
                    <input @input="update" type="radio" :id="option.value" :name="id" :value="option.value" :checked="value === option.value">
                </div>
                <label :for="option.value" v-text="option.label" class="text-sm"></label>
            </div>
        </div>
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

const update = (e) => {
    value.value = e.target.value
    emit('update', props.id, value.value)
}

</script>

<style scoped>
input[type="radio"] {
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
    border-radius: 999px;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 999px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em rgb(41, 37, 36);
}

input[type="radio"]:checked::before {
    transform: scale(1);
}
</style>
