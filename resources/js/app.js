import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";

import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css'

FloatingVue.options.themes.tooltip.delay.show = 50;

const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
        document.removeEventListener("click", el.clickOutsideEvent);
    },
};

const app = createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .directive("click-outside", clickOutside)
            .use(plugin)
            .use(FloatingVue)
            .mount(el)
    },
})
