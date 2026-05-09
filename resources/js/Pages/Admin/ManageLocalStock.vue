<template>
    <Head>
        <title>Manage Local Stock</title>
    </Head>
    <div class="mt-6">

        <div class="flex h-[90px]">
            <div class="w-[640px] shrink-0 grid grid-cols-2 gap-2">
                <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                    <div class="w-2/5 h-full flex items-center justify-center bg-neutral-400">
                        <span class="uppercase font-semibold">Stocks</span>
                    </div>
                    <div class="w-3/5 h-full flex items-center justify-center bg-neutral-200">
                        <span class="uppercase font-semibold" v-text="total_stocks"></span>
                    </div>
                </div>
                <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                    <div class="w-2/5 h-full flex items-center justify-center bg-neutral-400">
                        <span class="uppercase font-semibold">Sold Stocks</span>
                    </div>
                    <div class="w-3/5 h-full flex items-center justify-center bg-neutral-200">
                        <span class="uppercase font-semibold" v-text="total_sold_stocks"></span>
                    </div>
                </div>
                <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                    <div class="w-2/5 h-full flex items-center justify-center bg-neutral-400">
                        <span class="uppercase font-semibold">Value</span>
                    </div>
                    <div class="w-3/5 h-full flex items-center justify-center bg-neutral-200">
                        <span class="uppercase font-semibold" v-text="'£' + total_value"></span>
                    </div>
                </div>
                <div class="col-span-1 h-10 flex items-center justify-center text-center border border-black">
                    <div class="w-2/5 h-full flex items-center justify-center bg-neutral-400">
                        <span class="uppercase font-semibold">Stock Size</span>
                    </div>
                    <div class="w-3/5 h-full flex items-center justify-center bg-neutral-200">
                        <span class="uppercase font-semibold" v-text="stock_size"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full grid grid-cols-10 mb-4 mt-6">
            <div v-for="(sizes, index) in tyres" class="col-span-1">
                <button @click="changeCategory(index)" :class="{'w-full flex items-center justify-between py-2 px-2 border-y border-l border-gray-300': true, 'border-r': index === `com`, 'shadow-md shadow-green-500': selected_category === index}">
                    <span class="text-sm capitalize" v-text="index"></span>
                    <span class="text-xs px-2 py-1 bg-gray-500 rounded-full text-white">{{ sizes.length }}</span>
                </button>
            </div>
        </div>

        <div class="mb-2 flex items-center space-x-2 w-full border border-gray-300 p-2 rounded-lg">
            <AdminColorPicker @color="colorBackground" @click="closeOtherTools('bgTool')" ref="bgTool">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"></path>
                </svg>
            </AdminColorPicker>
            <AdminColorPicker @color="colorText" @click="closeOtherTools('txtTool')" ref="txtTool">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4">
                    <path d="M211.99414,55.99512v32a4,4,0,1,1-8,0v-28h-72v136h28a4,4,0,0,1,0,8h-64a4,4,0,0,1,0-8h28v-136h-72v28a4,4,0,0,1-8,0v-32a4.0002,4.0002,0,0,1,4-4h160A4.0002,4.0002,0,0,1,211.99414,55.99512Z"></path>
                </svg>
            </AdminColorPicker>
        </div>

        <div class="bg-indigo-400 grid grid-cols-21 w-full h-6 border border-gray-500">
            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>#</span></div>
            <div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Tyre Size</span></div>
            <div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Qty</span></div>
            <div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Brand</span></div>
            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Price</span></div>
            <div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>T Price</span></div>
            <div class="col-span-4 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Model</span></div>
            <div class="col-span-4 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Notes</span></div>
            <div class="col-span-1 flex items-center justify-center border-gray-500 h-full text-xs font-bold"><span>Sold</span></div>
        </div>

        <div>
            <div
                v-show="selected_category && index.toLowerCase() === selected_category.toLowerCase()"
                v-for="(sizes, index) in tyres"
                class="relative cursor-crosshair select-none"
                @mousedown="mousedown"
                @mouseup="mouseup"
                @mouseleave="mouseup"
                @dblclick="dblclick"
                @click="closeTools"
                :key="modified"
            >
                <template v-for="(tyre, index) in sizes">
                    <template v-if="index !== 'count'">
                        <AdminLocalTyre @change="change" :tyre="tyre" @copy="copy" @selectRow="selectRow" :class="{'bg-gray-200': index % 2 !== 0}" :index="index" :key="tyre.id" />
                    </template>
                </template>
            </div>
            <div ref="selectionBox" class="absolute border border-blue-500 z-50 pointer-events-none" style="top:0; left:0; height:0; width:0; background-color:rgba(59, 130, 246, 0.3)"></div>
            <div ref="selectionRect" class="selection-rect pointer-events-none"></div>
        </div>

        <AddLocalTyre :copyData="copyData" @inserted="selectInserted" />
    </div>

    <div class="min-h-[50vh]"></div>

    <Transition name="fade">
        <div
            v-if="copied"
            class="p-1 flex fixed"
            :style="{'left': copiedElement.getBoundingClientRect().left + 'px', 'top': copiedElement.getBoundingClientRect().bottom + 'px'}"
        >
            <div class="w-auto h-12 bg-white shadow-lg rounded flex">
                <div class="bg-green-400 w-2 h-full"></div>
                <div class="px-2 flex flex-col justify-center">
                    <span class="text-sm font-medium">Success</span>
                    <span class="text-xs text-gray-600">Copied to clipboard</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import AdminLayout from "/resources/js/Shared/Layouts/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { Link, Head, usePage, router } from "@inertiajs/vue3"
import { ref, watch, onMounted, onUnmounted } from "vue"

import AdminLocalTyre from "/resources/js/Shared/Admin/AdminLocalTyre.vue"
import AddLocalTyre from "/resources/js/Shared/Admin/AddLocalTyre.vue"
import AdminColorPicker from "/resources/js/Shared/Admin/AdminColorPicker.vue"
import AdminLocalStockSearch from "/resources/js/Shared/Admin/AdminLocalStockSearch.vue"
import LocalStockFilter from "/resources/js/Shared/Admin/LocalStockFilter.vue"

defineProps({
    selected_category: String,
    tyres: Object,
    total_stocks: Number,
    total_sold_stocks: Number,
    total_value: String,
    stock_size: Number,
})
function changeCategory (category) {
    router.get('/admin/inventory/show/' + category)
    unselect()
}

const modified = ref(0)

const copyData = ref(null)
const copy = (data) => {
    copyData.value = data
}

const x = ref(0)
const y = ref(0)
const dragging = ref(false)
const selectionBox = ref(null)
const selectionRect = ref(null)
const selectedElements = ref(null)

function update(event) {
    x.value = event.pageX
    y.value = event.pageY
}
onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

let interv
let x1
let y1
function mousedown(e){
    if(e.target.hasAttribute('data-no-click')) return
    dragging.value = true
    x1 = x.value
    y1 = y.value
    interv = setInterval(() => {
        drawRectangle(x1, y1, x.value, y.value);
    }, 50)
}
function mouseup(){
    if(!dragging.value) return
    dragging.value = false
    clearInterval(interv)
    drawRectangle(0, 0, 0, 0);
    selectRectangle(x1, y1, x.value, y.value);
}
function drawRectangle(x1, y1, x2, y2) {
    if(x2 < x1) {
        x1 = [x2, x2 = x1][0]
    }
    if(y2 < y1) {
        y1 = [y2, y2 = y1][0]
    }
    selectionBox.value.style.left = x1 + 'px';
    selectionBox.value.style.top = y1 + 'px';
    selectionBox.value.style.width = (x2 - x1) + 'px';
    selectionBox.value.style.height = (y2 - y1) + 'px';
}
let selectionRectangle = null
function selectRectangle(x1, y1, x2, y2) {
    let leftBound = Math.min(x1, x2);
    let rightBound = Math.max(x1, x2);
    let topBound = Math.min(y1, y2);
    let bottomBound = Math.max(y1, y2);

    let selectable = document.querySelectorAll('*')
    selectable = [...selectable]
    selectable = selectable.filter((function(el) {
        return el.hasAttribute('data-selectable')
    }))

    selectable = selectable.filter(function (el) {
        let rect = el.getBoundingClientRect()
        let top = rect.top + window.scrollY
        let bottom = top + rect.height
        let left = rect.left + window.scrollX
        let right = left + rect.width
        let corners = [[left, top], [left, bottom], [right, top], [right, bottom]];

        function inBox(point) {
            let x = point[0], y = point[1];
            return ((leftBound <= x && x <= rightBound) && (topBound <= y && y <= bottomBound))
        }
        function insideEl() {
            return (left <= leftBound && rightBound <= right) && (top <= topBound && bottomBound <= bottom)
        }
        function inEdge() {
            return (left <= leftBound && rightBound <= right) && (bottom >= topBound && top <= bottomBound) ||
                (top <= topBound && bottomBound <= bottom) && (left <= rightBound && right >= leftBound)
        }

        return corners.some(inBox) || insideEl() || inEdge();
    })

    if(selectable) {
        selectedElements.value = selectable
    }
}
const copied = ref(false)
const copiedElement = ref(null)
function dblclick(e){
    //if dbl clicked element is selectable or its a span tag and the parent is selectable...
    if(e.target.hasAttribute('data-selectable') || (e.target.tagName.toLowerCase() === 'span' && e.target.parentElement.hasAttribute('data-selectable'))){
        if(e.target.tagName.toLowerCase() === 'span') {
            navigator.clipboard.writeText(e.target.innerHTML)
        }
        else{
            navigator.clipboard.writeText(e.target.querySelector('span').innerHTML)
        }

        copied.value = true
        copiedElement.value = e.target.hasAttribute('data-selectable') ? e.target : e.target.parentElement;
        setTimeout(() => {
            copied.value = false
        }, 1000)
    }
}
const bgTool = ref(null)
const txtTool = ref(null)
function closeTools() {
    bgTool.value.closeColorPicker()
    txtTool.value.closeColorPicker()
}
function closeOtherTools(_tool) {
    if(_tool === 'bgTool' && txtTool.value.open) {
        txtTool.value.closeColorPicker()
    }
    else if(_tool === 'txtTool' && bgTool.value.open) {
        bgTool.value.closeColorPicker()
    }
}
function selectRow(id) {
    let row = Array.from(document.querySelectorAll('[data-id="'+id+'"]'))
    row.shift()
    selectedElements.value = row
}
watch(selectedElements, (newValue) => {
    if(!newValue || !newValue.length) {
        selectionRect.value.style.width = '0px'
        selectionRect.value.style.height = '0px'
        return
    }

    let firstEl = newValue[0].getBoundingClientRect()
    let lastEl = newValue[newValue.length-1].getBoundingClientRect()

    let top = firstEl.top + window.scrollY
    let left = firstEl.left + window.scrollX
    let right = lastEl.left + lastEl.width + window.scrollX
    let bottom = lastEl.top + lastEl.height + window.scrollY

    selectionRect.value.style.top = top + 'px'
    selectionRect.value.style.left = left + 'px'
    selectionRect.value.style.width = (right-left) + 'px'
    selectionRect.value.style.height = (bottom-top) + 'px'
})
function unselect () {
    selectedElements.value = null
}

function selectInserted(id) {
    selectedElements.value = document.querySelectorAll('[data-id="'+id+'"]')
    change()
}
function change() {
    modified.value ++;
}

function colorBackground(color) {
    if(!selectedElements.value) return

    let result = []

    selectedElements.value.forEach(function(el) {
        result.push({
            id: el.getAttribute('data-id'),
            column: el.getAttribute('data-column') + '_bg'
        })
    })

    router.post('/admin/inventory/color', {
        color: color,
        data: result,
    }, {
        preserveScroll: true,
        preserveState: true,
    })
}
function colorText(color) {
    if(!selectedElements.value.length) return

    let result = []

    selectedElements.value.forEach(function(el) {
        result.push({
            id: el.getAttribute('data-id'),
            column: el.getAttribute('data-column') + '_font'
        })
    })

    router.post('/admin/inventory/color', {
        color: color,
        data: result,
    }, {
        preserveScroll: true,
        preserveState: true,
    })
}

function sellTyre(_id) {
    router.post('/admin/inventory/sell-tyre', {
        id: _id,
    }, {
        preserveScroll: true,
        preserveState: true,
    })
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
