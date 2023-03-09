<template>
    <Head>
        <title>Orders</title>
    </Head>

    <Container class="mt-12">
        <div v-for="order in orders">
            <div @click="selectOrder(order.id)" class="w-full mt-2 px-2 py-3 cursor-pointer flex items-center justify-start border border-gray-300 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" :class="{'h-6 w-6 mr-2': true, 'rotate-180': selectedOrder === order.id}" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-lg mr-2 font-semibold">{{ order.user.firstname }}</span>
                <span class="text-lg mr-2 font-light">{{ order.user.timeslot.slot_from }} - {{ order.user.timeslot.slot_to }} | {{ order.user.timeslot.day }}/{{ order.user.timeslot.month }}/{{ order.user.timeslot.year }}</span>

                <div class="flex flex-row space-x-2 ml-auto" @click="stopPropagation">
                    <a :href="'/admin/orders/'+order.id+'/pdf'" target="_blank" class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-2 px-4">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 8.25C12.0625 8.25 11.75 8.59375 11.75 9C11.75 9.4375 12.0625 9.75 12.5 9.75C12.9062 9.75 13.25 9.4375 13.25 9C13.25 8.59375 12.9062 8.25 12.5 8.25ZM13.5 5.5V3.125C13.5 2.75 13.3125 2.34375 13.0312 2.0625L11.4375 0.46875C11.1562 0.1875 10.75 0 10.375 0H3.4375C2.90625 0 2.5 0.46875 2.5 1V5.5C1.09375 5.5 0 6.625 0 8V12C0 12.2812 0.21875 12.5 0.5 12.5H2.5V15.5C2.5 15.7812 2.71875 16 3 16H13C13.25 16 13.5 15.7812 13.5 15.5V12.5H15.5C15.75 12.5 16 12.2812 16 12V8C16 6.625 14.875 5.5 13.5 5.5ZM4 1.5H10V3C10 3.28125 10.2188 3.5 10.5 3.5H12V5.5H4V1.5ZM12 14.5H4V12.5H12V14.5ZM14.5 11H1.5V8C1.5 7.46875 1.9375 7 2.5 7H13.5C14.0312 7 14.5 7.46875 14.5 8V11Z" fill="#ffffff"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div :class="{'max-h-0 overflow-hidden transition-all duration-300 ease-in-out': true, 'max-h-[600px]': selectedOrder === order.id}">
                <table class="flex flex-col w-full text-sm px-3">
                    <tbody class="md:space-y-0 space-y-4 text-left">
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">First Name</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.firstname }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Last Name</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.lastname }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Email</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.email }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Phone</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.phone }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Car Registration</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center uppercase">{{ order.user.registration }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Billing Address 1</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.address_1 }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Billing Address 2</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.address_2 }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Billing Town</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.town }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Billing Postcode</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center uppercase">{{ order.user.postcode }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Fitting Address 1</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.fitting_address_1 }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Fitting Address 2</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.fitting_address_2 }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Fitting Town</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.fitting_town }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Fitting Postcode</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center uppercase">{{ order.user.fitting_postcode }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Timeslot</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">{{ order.user.timeslot.slot_from }} - {{ order.user.timeslot.slot_to }} | {{ order.user.timeslot.day }}/{{ order.user.timeslot.month }}/{{ order.user.timeslot.year }}</td>
                    </tr>
                    <tr class="flex md:flex-row flex-col">
                        <th class="border px-4 py-2 md:w-40 md:shrink-0">Paid</th>
                        <td class="border px-2 py-2 md:grow md:text-left text-center">£{{ Math.round((order.total / 100) * 100) / 100 }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Container>
</template>

<script>
import AdminLayout from "../../Shared/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { Head } from "@inertiajs/vue3"
import { ref } from "vue";
import Container from "../../Shared/Container.vue";

defineProps({
    orders: {
        type: Object,
        required: true,
    },
});

const selectedOrder = ref(null);

function selectOrder(id) {
    selectedOrder.value === id ? selectedOrder.value = null : selectedOrder.value = id
}

function stopPropagation(e) {
    e.stopPropagation()
}
</script>

<style scoped>

</style>
