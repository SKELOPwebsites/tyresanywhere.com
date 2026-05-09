<template>
    <div class="relative">
        <div class="flex items-center" @click="open = !open">
            <div class="flex items-center justify-center w-5 h-5 border border-gray-500 rounded-l">
                <slot></slot>
            </div>
            <div class="h-5 w-3 border-r border-y border-gray-500 rounded-r flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24"><path d="m11.998 17 7-8h-14z"></path></svg>
            </div>
        </div>

        <div v-if="open" class="absolute shadow-lg bg-white border border-gray-500 rounded bottom-0 translate-y-full z-50">
            <div class="flex h-8">
                <button @click="$emit('color', 'default')" class="grow px-2 flex items-center justify-start hover:bg-gray-100">
                    <span class="border border-gray-300 rounded mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="red" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                        </svg>
                    </span>
                    <span class="text-xs">Default</span>
                </button>
            </div>

            <div class="py-0.5 px-2 bg-gray-100">
                <span class="text-xs">Color Palette</span>
            </div>

            <div class="px-2 py-1 flex space-x-2">
                <AdminColorTheme :colorPalette="colorPalette[0]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[1]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[2]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[3]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[4]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[5]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[6]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[7]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[8]" @changeColor="changeColor"/>
                <AdminColorTheme :colorPalette="colorPalette[9]" @changeColor="changeColor"/>
            </div>
        </div>
        <div v-show="open" @click="open = false" class="fixed w-screen h-screen left-0 top-0 z-40"></div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import AdminColorTheme from "/resources/js/Shared/Admin/AdminColorTheme.vue"

const emit = defineEmits(['color'])
const open = ref(false)

const colorPalette = ref([
    ['#ffffff', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280'],
    ['#000000', '#4b5563', '#374151', '#1f2937', '#111827', '#030712'],
    ['#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e'],
    ['#2563eb', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6'],
    ['#0284c7', '#e0f2fe', '#e0f2fe', '#7dd3fc', '#38bdf8', '#0ea5e9'],
    ['#dc2626', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444'],
    ['#65a30d', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16'],
    ['#7c3aed', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6'],
    ['#0891b2', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4'],
    ['#ea580c', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316'],
])

function changeColor(_color) {
    emit('color', _color)
}
function closeColorPicker() {
    if(!open.value) return
    open.value = false
}

defineExpose({closeColorPicker, open})
</script>

<style scoped>

</style>
