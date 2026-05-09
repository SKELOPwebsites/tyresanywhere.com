<template>
    <div class="leading-normal tracking-normal" style="min-width: 1700px;">
        <div class="flex flex-wrap">

            <Sidebar @sidebar="sidebar" />

            <div class="w-full bg-gray-100 min-h-[936px] transition-all duration-500" :class="sideBarOpen ? 'pl-64' : 'pl-20'">

                <Navbar />

                <div class="py-6 px-10 bg-gray-100 mb-20">
                    <slot />
                </div>
            </div>
        </div>
    </div>

    <Transition>
        <div v-if="$page.props.success" class="bg-white w-auto h-12 flex absolute right-12 bottom-8">
            <div class="bg-green-400 w-2 h-full"></div>
            <div class="px-2 flex flex-col justify-center">
                <span class="text-sm font-medium">Success</span>
                <span class="text-xs text-gray-600" v-text="$page.props.success"></span>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from "vue"
import Navbar from "/resources/js/Shared/Admin/Navbar.vue"
import Sidebar from "/resources/js/Shared/Admin/Sidebar.vue"

const sideBarOpen = ref(true)

function sidebar(value) {
    sideBarOpen.value = value;
}
</script>

<style scoped>

</style>
