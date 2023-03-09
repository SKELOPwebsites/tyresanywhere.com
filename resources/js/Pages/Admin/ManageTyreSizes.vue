<template>
    <Head>
        <title>Manage Tyre Sizes</title>
    </Head>
    <Container>
        <div class="lg:w-1/3 w-full mx-auto pt-8">
            <p class="font-semibold text-3xl text-center mb-8">Manage Tyre Sizes</p>

            <div class="grid grid-cols-12 space-x-2 mb-4">
                <div class="col-span-3">
                    <input
                        v-model="form.width"
                        type="number"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full"
                        placeholder="Width"
                    >
                </div>
                <div class="col-span-3">
                    <input
                        v-model="form.profile"
                        type="number"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full"
                        placeholder="Profile"
                    >
                </div>
                <div class="col-span-3">
                    <input
                        v-model="form.rim"
                        type="number"
                        class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full"
                        placeholder="Rim"
                    >
                </div>
                <div class="col-span-3">
                    <button @click="submit" :class="{'relative w-full rounded outline-0 h-[2.375rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out': true, 'button--loading': form.processing}">
                        <span v-if="!form.processing">Add</span>
                    </button>
                </div>
            </div>

            <div class="flex flex-col space-y-2">
                <div v-for="size in sizes" class="flex flex-row items-center justify-between bg-gray-100 py-2 px-2 rounded-lg">
                    <span class="text-sm font-semibold" v-text="size.width + '/' + size.profile + ' R' + size.rim"></span>

                    <div class="flex flex-row space-x-2">
                        <button @click="deleteSize(size.id)" class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-1 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="16" height="16" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="7" x2="20" y2="7"></line>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
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
import { router, useForm, Head, Link, usePage } from "@inertiajs/vue3"
import Container from "../../Shared/Container.vue";
import {computed, watch} from "vue";

const props = defineProps({
    errors: {
        type: Object,
        required: false,
    },
    sizes: {
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

const form = useForm({
    width: null,
    profile: null,
    rim: null
})

function submit() {
    if(confirm('Are you sure you want to delete this?')) {
        form.post('/admin/sizes', {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                form.reset();
            }
        })
    }
}

function deleteSize(id) {
    router.delete('/admin/sizes/' + id, {
        preserveScroll: true,
        preserveState: true,
    });
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
