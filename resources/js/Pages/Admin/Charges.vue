<template>
    <Head>
        <title>Manage Charges</title>
    </Head>
    <Container>
        <div class="lg:w-1/3 w-full mx-auto pt-8">
            <p class="font-semibold text-3xl text-center mb-8">Manage Charges</p>

            <div class="flex flex-col space-y-2">
                <AdminFee v-for="fee in service_fees" :fee="fee" @save="(id, form) => submit(id, form)"></AdminFee>
            </div>
        </div>
    </Container>

    <Transition name="success">
        <div v-show="success" v-text="success" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold"></div>
    </Transition>

    <div class="min-h-[50vh]"></div>
</template>

<script>
import AdminLayout from "../../Shared/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { useForm, Head, Link, usePage } from "@inertiajs/vue3"
import Container from "../../Shared/Container.vue";
import AdminFee from "../../Shared/AdminFee.vue";
import { computed, watch } from "vue";

const props = defineProps({
    errors: {
        type: Object,
        required: false,
    },
    service_fees: {
        type: Object,
        required: true,
    },
})

const success = computed(() => usePage().props.flash.success.admin);

watch(success, () => {
    if(success.value) {
        //play a ding sound
        let audio = new Audio('/audio/notify.mp3');
        audio.play();

        setTimeout(() => {
            usePage().props.flash.success.admin = '';
        }, 2000)
    }
})

function submit(id, form) {
    form.put('/admin/charges/' + id, {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => {
            form.reset();
        }
    })
}

</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.button--loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}
</style>
