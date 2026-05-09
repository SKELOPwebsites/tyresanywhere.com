<template>
    <Head>
        <title>Bulk Adjust Products</title>
    </Head>

    <Link href="/admin/view-products" class="text-sm underline text-blue-500 italic">Back</Link>
    <div v-if="warning" class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium">Warning alert!</span> This tool allows you to make bulk changes to the database, and some actions may be irreversible. Incorrect queries or operations can result in data loss or corruption.
        </div>
        <button class="ml-auto" @click="warning = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    <div v-if="$page.props.flash.success.admin" >
        <div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
            <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
                <span class="font-medium mr-3">Success alert!</span>
                <span v-text="$page.props.flash.success.admin"></span>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg">
            <span class="block font-semibold text-lg text-gray-700">Product Price Manipulator</span>
            <span class="text-gray-500 text-sm">Changes price to <b>EVERY</b> product accordingly.</span>
            <div class="mt-4 flex space-x-1">
                <button v-for="add in addPriceOps" @click="priceForm.add = add" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': priceForm.add === add, 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': priceForm.add !== add}">
                    <span class="uppercase text-xs font-semibold" v-text="'+' + add.toFixed(2)"></span>
                </button>
            </div>
            <div class="mt-2 mb-4 flex space-x-1">
                <button v-for="sub in subPriceOps" @click="priceForm.add = -sub" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': priceForm.add === -sub, 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': priceForm.add !== -sub}">
                    <span class="uppercase text-xs font-semibold" v-text="'- ' + sub.toFixed(2)"></span>
                </button>
            </div>
            <SelectSearch
                :modelValue="priceForm.query"
                @update:modelValue="newValue => priceForm.query = newValue"
                :data="deleteQueries"
                placeholder="Select a Query"
            ></SelectSearch>
            <div class="mt-2 mb-2 flex space-x-1">
                <button @click="priceForm.cols = 'all'" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': priceForm.cols === 'all', 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': priceForm.add !== -sub}">
                    <span class="uppercase text-xs font-semibold">All Price</span>
                </button>
                <button @click="priceForm.cols = 'price'" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': priceForm.cols === 'price', 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': priceForm.add !== -sub}">
                    <span class="uppercase text-xs font-semibold">Standard Price</span>
                </button>
                <button @click="priceForm.cols = 'price_offer'" :class="{'w-fit py-1 px-2 rounded-lg whitespace-nowrap': true, 'bg-white border-2 border-green-500 text-black': priceForm.cols === 'price_offer', 'bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out': priceForm.add !== -sub}">
                    <span class="uppercase text-xs font-semibold">Offer Price</span>
                </button>
            </div>

            <button @click="submitPriceForm" :disabled="priceForm.processing" :class="{'relative mt-4 w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out': true, 'button--loading': priceForm.processing}">
                <span v-if="!priceForm.processing">Proceed with Caution</span>
            </button>
        </div>
        <div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg flex flex-col">
            <span class="block font-semibold text-lg text-gray-700">Bulk Enable/Disable/Delete  Products</span>
            <div class="text-gray-500 text-sm flex items-center mt-4 mb-2">
                <div>
                    <select
                        class="bg-transparent border border-black rounded-sm mr-2"
                        v-model="deleteForm.bulkAction"
                    >
                        <option value="enable">Enable</option>
                        <option value="disable">Disable</option>
                        <option value="delete">Delete</option>
                    </select>
                </div>
                <b class="mr-1">EVERY</b>
                <span>product accordingly.</span>
            </div>
            <SelectSearch
                :modelValue="deleteForm.query"
                @update:modelValue="newValue => deleteForm.query = newValue"
                :data="deleteQueries"
                placeholder="Select a Query"
            ></SelectSearch>

            <button @click="submitBulkForm" :disabled="deleteForm.processing" :class="{'relative mt-auto w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out': true, 'button--loading': deleteForm.processing}">
                <span v-if="!deleteForm.processing">Proceed with Caution</span>
            </button>
        </div>
    </div>
</template>

<script>
import AdminLayout from "/resources/js/Shared/Layouts/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import {Link, Head, useForm, usePage} from "@inertiajs/vue3"
import {computed, ref, watch} from "vue";
import SelectSearch from "/resources/js/Shared/Form/SelectSearch.vue";

const warning = ref(true);

const addPriceOps = [ 1, 2.5, 5, 10, 20, 50 ];
const subPriceOps = [ 1, 2.5, 5, 10, 20, 50 ];

const priceForm = useForm({
    add: null,
    query: null,
    cols: 'all',
})
function submitPriceForm () {
    priceForm.post('/admin/tyres/bulk-price')
}



const deleteQueries = [
    'Everything', 'R14','R15','R16','R17','R18','R19','R20','R21','R22','Commercial',
]
const deleteForm = useForm({
    bulkAction: 'enable',
    query: null
})

function submitBulkForm () {
    deleteForm.post('/admin/tyres/bulk-action')
}

const success = computed(() => usePage().props.flash.success.admin);

watch(success, () => {
    if(success.value) {
        setTimeout(() => {
            usePage().props.flash.success.admin = '';
        }, 2000)
    }
})
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
