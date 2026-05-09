<template>
    <div class="flex flex-col w-fit">
        <div class="flex flex-col border">
            <button
                class="w-4 h-4"
                :style="{backgroundColor: colorPalette[0]}"
                @click="changeColor(colorPalette[0])"
            ></button>
        </div>
        <div class="flex flex-col border mt-2">
            <button
                v-for="i in colorPalette.length - 1"
                class="w-4 h-4"
                :style="{backgroundColor: colorPalette[i]}"
                @click="changeColor(colorPalette[i])"
            ></button>
        </div>
    </div>
</template>

<script setup>

defineProps({
    colorPalette: {
        type: Array,
        required: true,
    }
})

const emit = defineEmits(['changeColor'])

function changeColor(_color) {
    emit('changeColor', _color)
}

</script>

<style scoped>

</style>
