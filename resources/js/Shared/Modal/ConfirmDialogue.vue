<template>
    <PopupModal ref="popup">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-sm mt-1 text-gray-600">{{ message }}</p>
        <div class="flex items-center justify-end space-x-2 mt-6">
            <span class="px-3 py-1 text-sm rounded uppercase text-indigo-500 font-medium cursor-pointer" @click="_cancel">
                {{ cancelButton }}
            </span>
            <span class="bg-gray-200 px-3 py-1 text-sm rounded uppercase text-indigo-500 font-medium cursor-pointer" @click="_confirm">
                {{ okButton }}
            </span>
        </div>
    </PopupModal>
</template>

<script setup>
import PopupModal from '/resources/js/Shared/Modal/PopupModal.vue'
import { ref } from "vue"

defineExpose({
    show
})

const popup = ref(null)

const title = ref('')
const message = ref('')
const okButton = ref('')
const cancelButton = ref('')

const resolvePromise = ref(undefined)
const rejectPromise = ref(undefined)

function show(opts = {}) {
    title.value = opts.title
    message.value = opts.message
    okButton.value = opts.okButton

    if(opts.cancelButton) {
        cancelButton.value = opts.cancelButton
    }

    popup.value.open()

    return new Promise((resolve, reject) => {
        resolvePromise.value = resolve
        rejectPromise.value = reject
    })
}

function _confirm() {
    popup.value.close()
    resolvePromise.value(true)
}

function _cancel() {
    popup.value.close()
    resolvePromise.value(false)
}

</script>

<style scoped>

</style>
