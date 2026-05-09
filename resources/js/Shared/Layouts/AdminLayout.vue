<template>
    <header class="bg-white">
        <AdminHeader />
        <AdminNavbar />
    </header>

    <slot />

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
import AdminHeader from "./AdminHeader.vue"
import AdminNavbar from "./AdminNavbar.vue"

</script>

<style scoped>

</style>
