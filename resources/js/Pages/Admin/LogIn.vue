<template>
    <Head>
        <title>Admin Log In - Tyres Anywhere LTD</title>
    </Head>

    <div class="lg:py-24 sm:py-24 py-16 flex flex-col sm:justify-center items-center px-2 sm:px-0 bg-gray-100">
        <p class="font-semibold text-xl">Admin Log In</p>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg z-10">
            <!-- Validation Errors -->
<!--            <div v-if="errors" class="mb-4">-->
<!--                <div class="font-medium text-red-600">Error:</div>-->

<!--                <ul class="mt-3 list-disc list-inside text-sm text-red-600">-->
<!--                    <li v-for="error in errors" v-text="error"></li>-->
<!--                </ul>-->
<!--            </div>-->

            <form @submit.prevent="submit" method="post">
                <!-- Email Address -->
                <div>
                    <label for="username" class="block sm:text-sm text-xs text-gray-700">Username <span class="text-red-500 font-bold">*</span></label>
                    <input
                        v-model="form.username"
                        type="text"
                        id="username"
                        class="block mt-1 w-full py-2 px-3 border outline-0 rounded text-sm shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25"
                        autocomplete="username"
                        autofocus
                    >
                    <span v-if="errors.username" class="text-red-500 text-xs" v-text="errors.username"></span>
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <label for="password" class="block sm:text-sm text-xs text-gray-700">Password <span class="text-red-500 font-bold">*</span></label>

                    <div class="relative">
                        <input
                            v-model="form.password"
                            :type="togglePassword ? 'text' : 'password'"
                            id="password"
                            class="block mt-1 w-full py-2 px-3 border outline-0 rounded text-sm shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25"
                            autocomplete="current-password"
                        >

                        <button @click="togglePassword = !togglePassword" tabindex="-1" type="button" class="text-gray-400 absolute top-1/2 -translate-y-1/2 px-1 py-1 right-2 border-0 outline-0 bg-transparent fill-skl-primary">
                            <svg v-if="togglePassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span v-if="errors.password" class="text-red-500 text-xs" v-text="errors.password"></span>


                <div class="flex items-center justify-between mt-5">
                    <!-- Remember Me -->
                    <div class="flex">
                        <label for="remember_me" class="inline-flex items-center">
                            <input v-model="form.remember_me" id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                            <span class="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>
                </div>

                <button
                    :class="{'relative mt-4 w-full h-9 bg-blue-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:border-blue-600 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150': true, 'button--loading': form.processing}"
                    type="submit"
                >
                    <span v-if="!form.processing">Log In</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useForm, Head } from "@inertiajs/vue3"
import { ref } from "vue"

defineProps({
    errors: Object
})

const togglePassword = ref(false);

const form = useForm({
    username: null,
    password: null,
    remember_me: false,
})

function submit() {
    form.post('/admin/login', {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            form.reset();
        }
    })
}

</script>

<style scoped>
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
