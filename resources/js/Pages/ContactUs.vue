<template>
    <Head>
        <title>Contact Us | Tyres Anywhere LTD</title>
        <meta name="description" content="Contact Tyres Anywhere LTD easily. Get mobile tyre fitting quotes or any other assistance you seek here!">
        <link rel="canonical" href="https://tyresanywhere.com/contact-us">
    </Head>

    <div class="bg-black">
        <Container class="relative lg:h-[340px] md:h-[250px] h-[200px]">
            <img
                src="/images/showcase/contact.webp"
                srcset="/images/showcase/contact.webp 1000w,
                        /images/showcase/contact-500.webp 500w,
                        /images/showcase/contact.webp 300w"
                class="object-cover object-center w-full h-full brightness-50"
                sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw"
                alt="Contact Tyres Anywhere, Mobile Tyre Fitting"
            >
            <div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Contact Us</h1>
            </div>
        </Container>
    </div>

    <Container class="pt-10 pb-10">
        <div class="px-3">
            <div v-if="$page.props.success">

            </div>
            <div v-else>

            </div>
            <div v-if="!$page.props.success" class="mb-6">
                <p class="text-4xl font-light mb-2">Contact Us</p>
                <p class="text-sm">Contact us by giving us a call on <a class="underline font-semibold" href="tel:07442980101">07442 980101</a>, or by filling out the form below.</p>
            </div>

            <div class="w-full md:grid md:grid-cols-12 flex flex-col-reverse">
                <div class="lg:col-span-6 md:col-span-7 md:mt-0 mt-8">
                    <div v-if="$page.props.success">
                        <p class="font-montserrat uppercase tracking-wide font-semibold">Message sent successfully</p>
                        <span class="text-sm">We've received your message! Hold tight for our reply soon.</span>
                        <Link href="/" class="block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150">
                            Back to home
                        </Link>
                    </div>
                    <form v-else class="w-full space-y-4" @submit.prevent="submit">
                        <div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full">
                            <div class="sm:w-1/2 w-full">
                                <label for="name" class="text-sm">Name <span class="text-red-500">*</span></label>
                                <input v-model="form.name" type="text" id="name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.name" class="text-xs text-red-500">{{ errors.name }}</span>
                            </div>
                            <div class="sm:w-1/2 w-full">
                                <label for="phone" class="text-sm">Phone Number <span class="text-red-500">*</span></label>
                                <input v-model="form.phone" type="text" id="phone" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.phone" class="text-xs text-red-500">{{ errors.phone }}</span>
                            </div>
                        </div>
                        <div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full">
                            <div class="sm:w-1/2 w-full">
                                <label for="email" class="text-sm">E-mail <span class="text-red-500">*</span></label>
                                <input v-model="form.email" type="text" id="email" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</span>
                            </div>
                            <div class="sm:w-1/2 w-full">
                                <label for="postcode" class="text-sm"><span>Postcode</span><span class="text-gray-400 text-xs ml-2">Optional</span></label>
                                <input v-model="form.postcode" type="text" id="postcode" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                                <span v-if="errors.postcode" class="text-xs text-red-500">{{ errors.postcode }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="subject" class="text-sm">What are you looking for? <span class="text-red-500">*</span></label>
                            <input v-model="form.subject" type="text" id="subject" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition">
                            <span v-if="errors.subject" class="text-xs text-red-500">{{ errors.subject }}</span>
                        </div>
                        <div>
                            <label for="body" class="text-sm">Details <span class="text-red-500">*</span></label>
                            <textarea v-model="form.body" type="text" id="body" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"></textarea>
                            <span v-if="errors.body" class="text-xs text-red-500">{{ errors.body }}</span>
                        </div>
                        <div class="flex items-center justify-end">
                            <button type="submit" class="bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
                <div class="lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4">
                    <p class="xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2">Tel: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="tel:07442980101">07442 980101</a></p>
                    <p class="xl:text-3xl lg:text-2xl text-xl text-gray-600">Email: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="mailto:info@tyresanywhere.com">info@tyresanywhere.com</a></p>
                </div>
            </div>
        </div>
    </Container>
</template>


<script setup>
import { router, Head, Link } from "@inertiajs/vue3";
import { reactive } from "vue";
import Container from "../Shared/Container.vue";

defineProps({
    errors: Object,
})

const form = reactive({
    name: null,
    phone: null,
    email: null,
    postcode: null,
    subject: null,
    body: null,
})

function submit() {
    router.post('/contact-us', form, {
        preserveScroll: (page) => Object.keys(page.props.errors).length,
    });
}

</script>

<style scoped>

</style>
