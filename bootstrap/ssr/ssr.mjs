import { ref, useSSRContext, unref, mergeProps, withCtx, renderSlot, createVNode, toDisplayString, openBlock, createBlock, watch, computed, resolveDirective, createTextVNode, onMounted, onUnmounted, withDirectives, vShow, vModelText, createCommentVNode, Fragment, renderList, withModifiers, vModelSelect, reactive, nextTick, createSSRApp, h } from "vue";
import { ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderDynamicModel } from "vue/server-renderer";
import { Link, usePage, useForm, Head, router, createInertiaApp } from "@inertiajs/vue3";
import { SwitchGroup, Switch, SwitchLabel } from "@headlessui/vue";
import { loadStripe } from "@stripe/stripe-js";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$1y = {
  __name: "NavbarDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div class="${ssrRenderClass([open.value ? "visible opacity-100" : "invisible opacity-0", "absolute shadow-[0_5px_15px_0px_rgba(0,0,0,0.35)] w-full z-50 left-0 bg-white pb-8 pt-6 border-x border-b border-gray-800 transition duration-400"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/NavbarDropdown.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const _sfc_main$1x = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "lg:text-sm text-[13px] text-gray-100 hover:text-wheelfit-600 border-gray-800 lg:py-3 lg:px-5 py-2 lg:px-4 px-3 block transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/NavLink.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const _sfc_main$1w = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-40" }, _attrs))}><div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between"><div class="flex"></div><div class="flex items-center relative"><button><svg class="h-6 w-6 stroke-black mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M9 12h12l-3 -3"></path><path d="M18 15l3 -3"></path></svg></button></div></div></div>`);
    };
  }
};
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/Navbar.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const _sfc_main$1v = {
  __name: "SidebarLink",
  __ssrInlineRender: true,
  props: {
    title: String,
    href: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: ["w-full flex items-center text-wheelfit-300 h-9 pl-4 hover:bg-gray-300 rounded-lg cursor-pointer", { "bg-gray-300": _ctx.$page.url === __props.href, "bg-gray-200": _ctx.$page.url !== __props.href }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<span class="text-gray-700 text-sm"${_scopeId}>${ssrInterpolate(__props.title)}</span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode("span", {
                class: "text-gray-700 text-sm",
                textContent: toDisplayString(__props.title)
              }, null, 8, ["textContent"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/SidebarLink.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const _sfc_main$1u = {
  __name: "SidebarDropdown",
  __ssrInlineRender: true,
  props: {
    title: String,
    href: String
  },
  setup(__props) {
    const open = ref(false);
    function dropdown(e) {
      e.preventDefault();
      open.value = !open.value;
      console.log("hi");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-wheelfit-300 cursor-pointer" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.href,
        class: ["w-full flex items-center text-wheelfit-300 h-9 pl-4 hover:bg-gray-300 rounded-lg cursor-pointer", { "bg-gray-300": _ctx.$page.url.includes(__props.href), "bg-gray-200": _ctx.$page.url !== __props.href }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
            _push2(`<span class="text-gray-700 text-sm"${_scopeId}>${ssrInterpolate(__props.title)}</span><div class="text-black ml-1"${_scopeId}>`);
            if (!open.value) {
              _push2(`<svg class="w-3 h-3" viewBox="0 0 24 24"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg class="w-3 h-3" viewBox="0 0 24 24"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" stroke-width="0" fill="currentColor"${_scopeId}></path></svg>`);
            }
            _push2(`</div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "icon"),
              createVNode("span", {
                class: "text-gray-700 text-sm",
                textContent: toDisplayString(__props.title)
              }, null, 8, ["textContent"]),
              createVNode("div", {
                onClick: dropdown,
                class: "text-black ml-1"
              }, [
                !open.value ? (openBlock(), createBlock("svg", {
                  key: 0,
                  class: "w-3 h-3",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createVNode("path", {
                    d: "M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z",
                    "stroke-width": "0",
                    fill: "currentColor"
                  })
                ])) : (openBlock(), createBlock("svg", {
                  key: 1,
                  class: "w-3 h-3",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createVNode("path", {
                    d: "M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z",
                    "stroke-width": "0",
                    fill: "currentColor"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="ml-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/SidebarDropdown.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const _sfc_main$1t = {
  __name: "SidebarDropdownLink",
  __ssrInlineRender: true,
  props: {
    title: String,
    href: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "w-full flex items-center text-wheelfit-300 h-9 pl-4 rounded-lg cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<span class="text-gray-700 text-sm"${_scopeId}>${ssrInterpolate(__props.title)}</span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode("span", {
                class: "text-gray-700 text-sm",
                textContent: toDisplayString(__props.title)
              }, null, 8, ["textContent"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/SidebarDropdownLink.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const _sfc_main$1s = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  emits: ["sidebar"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const sideBarOpen = ref(true);
    watch(() => sideBarOpen.value, (newVal) => {
      emit("sidebar", newVal);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 h-full block bg-gray-200 border-r border-gray-300 z-30 transition-all duration-500 overflow-y-scroll select-none", sideBarOpen.value ? "w-64" : "w-20"]
      }, _attrs))}><div class="w-full h-20 border-b border-gray-300 flex items-center">`);
      if (sideBarOpen.value) {
        _push(`<img class="w-52 mx-auto" src="/images/main/tyresanywhere.webp" alt="Tyres Anywhere">`);
      } else {
        _push(`<img class="w-14 mx-auto" src="/images/main/tyresanywhere-icon.webp" alt="Tyres Anywhere">`);
      }
      _push(`</div><div class="${ssrRenderClass([sideBarOpen.value ? "" : "opacity-0", "h-fit w-full pt-8"])}"><div class="${ssrRenderClass(sideBarOpen.value ? "" : "pointer-events-none")}"><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">MAIN</p>`);
      _push(ssrRenderComponent(_sfc_main$1u, {
        title: "Inventory",
        href: "/admin/inventory"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"${_scopeId}></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"${_scopeId}></path><path d="M12 12l0 .01"${_scopeId}></path><path d="M3 13a20 20 0 0 0 18 0"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }),
                createVNode("path", { d: "M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" }),
                createVNode("path", { d: "M12 12l0 .01" }),
                createVNode("path", { d: "M3 13a20 20 0 0 0 18 0" })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1t, {
              title: "Search Tyre",
              href: "/admin/inventory/search"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId2}></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"${_scopeId2}></path><path d="M21 21l-6 -6"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-5 w-5 stroke-current mr-2",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                      }),
                      createVNode("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
                      createVNode("path", { d: "M21 21l-6 -6" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1t, {
                title: "Search Tyre",
                href: "/admin/inventory/search"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "h-5 w-5 stroke-current mr-2",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    fill: "none"
                  }, [
                    createVNode("path", {
                      stroke: "none",
                      d: "M0 0h24v24H0z",
                      fill: "none"
                    }),
                    createVNode("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
                    createVNode("path", { d: "M21 21l-6 -6" })
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Configurations",
        href: "/admin/config"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-5 h-5 mr-2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">ORDERS</p>`);
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Upcoming",
        href: "/admin/orders/active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"${_scopeId}></path><path d="M16 3v4"${_scopeId}></path><path d="M8 3v4"${_scopeId}></path><path d="M4 11h16"${_scopeId}></path><path d="M11 15h1"${_scopeId}></path><path d="M12 15v3"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" }),
                createVNode("path", { d: "M16 3v4" }),
                createVNode("path", { d: "M8 3v4" }),
                createVNode("path", { d: "M4 11h16" }),
                createVNode("path", { d: "M11 15h1" }),
                createVNode("path", { d: "M12 15v3" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Archive",
        href: "/admin/orders"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"${_scopeId}></path><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"${_scopeId}></path><path d="M10 12l4 0"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }),
                createVNode("path", { d: "M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" }),
                createVNode("path", { d: "M10 12l4 0" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">PRODUCTS</p>`);
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Add Product",
        href: "/admin/tyres/create"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"${_scopeId}></path><path d="M9 12h6"${_scopeId}></path><path d="M12 9v6"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
                createVNode("path", { d: "M9 12h6" }),
                createVNode("path", { d: "M12 9v6" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "View Products",
        href: "/admin/view-products"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"${_scopeId}></path><path d="M13 8l2 0"${_scopeId}></path><path d="M13 12l2 0"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" }),
                createVNode("path", { d: "M13 8l2 0" }),
                createVNode("path", { d: "M13 12l2 0" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Service Charges",
        href: "/admin/service-charges"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M17 10l-2 -6"${_scopeId}></path><path d="M7 10l2 -6"${_scopeId}></path><path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.267 1.522"${_scopeId}></path><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"${_scopeId}></path><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"${_scopeId}></path><path d="M19.001 15.5v1.5"${_scopeId}></path><path d="M19.001 21v1.5"${_scopeId}></path><path d="M22.032 17.25l-1.299 .75"${_scopeId}></path><path d="M17.27 20l-1.3 .75"${_scopeId}></path><path d="M15.97 17.25l1.3 .75"${_scopeId}></path><path d="M20.733 20l1.3 .75"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M17 10l-2 -6" }),
                createVNode("path", { d: "M7 10l2 -6" }),
                createVNode("path", { d: "M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.267 1.522" }),
                createVNode("path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
                createVNode("path", { d: "M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
                createVNode("path", { d: "M19.001 15.5v1.5" }),
                createVNode("path", { d: "M19.001 21v1.5" }),
                createVNode("path", { d: "M22.032 17.25l-1.299 .75" }),
                createVNode("path", { d: "M17.27 20l-1.3 .75" }),
                createVNode("path", { d: "M15.97 17.25l1.3 .75" }),
                createVNode("path", { d: "M20.733 20l1.3 .75" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">TYRES</p>`);
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Sizes",
        href: "/admin/manage-tyre-sizes"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1"${_scopeId}></path><path d="M4 8l2 0"${_scopeId}></path><path d="M4 12l3 0"${_scopeId}></path><path d="M4 16l2 0"${_scopeId}></path><path d="M8 4l0 2"${_scopeId}></path><path d="M12 4l0 3"${_scopeId}></path><path d="M16 4l0 2"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" }),
                createVNode("path", { d: "M4 8l2 0" }),
                createVNode("path", { d: "M4 12l3 0" }),
                createVNode("path", { d: "M4 16l2 0" }),
                createVNode("path", { d: "M8 4l0 2" }),
                createVNode("path", { d: "M12 4l0 3" }),
                createVNode("path", { d: "M16 4l0 2" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Brands",
        href: "/admin/manage-tyre-brands"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">INVOICING</p>`);
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Receipt",
        href: "/admin/pdf-invoice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">MISC</p>`);
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Covered Areas",
        href: "/admin/covered-areas"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"${_scopeId}></path><path d="M13 7l0 .01"${_scopeId}></path><path d="M17 7l0 .01"${_scopeId}></path><path d="M17 11l0 .01"${_scopeId}></path><path d="M17 15l0 .01"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" }),
                createVNode("path", { d: "M13 7l0 .01" }),
                createVNode("path", { d: "M17 7l0 .01" }),
                createVNode("path", { d: "M17 11l0 .01" }),
                createVNode("path", { d: "M17 15l0 .01" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1v, {
        title: "Covered Postcodes",
        href: "/admin/covered-postcodes"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"${_scopeId}></path><path d="M13 7l0 .01"${_scopeId}></path><path d="M17 7l0 .01"${_scopeId}></path><path d="M17 11l0 .01"${_scopeId}></path><path d="M17 15l0 .01"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-5 w-5 stroke-current mr-2",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                fill: "none"
              }, [
                createVNode("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" }),
                createVNode("path", { d: "M13 7l0 .01" }),
                createVNode("path", { d: "M17 7l0 .01" }),
                createVNode("path", { d: "M17 11l0 .01" }),
                createVNode("path", { d: "M17 15l0 .01" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/Sidebar.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const _sfc_main$1r = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const sideBarOpen = ref(true);
    function sidebar(value) {
      sideBarOpen.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="leading-normal tracking-normal" style="${ssrRenderStyle({ "min-width": "1700px" })}"><div class="flex flex-wrap">`);
      _push(ssrRenderComponent(_sfc_main$1s, { onSidebar: sidebar }, null, _parent));
      _push(`<div class="${ssrRenderClass([sideBarOpen.value ? "pl-64" : "pl-20", "w-full bg-gray-100 min-h-[936px] transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_sfc_main$1w, null, null, _parent));
      _push(`<div class="py-6 px-10 bg-gray-100 mb-20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
      if (_ctx.$page.props.success) {
        _push(`<div class="bg-white w-auto h-12 flex absolute right-12 bottom-8"><div class="bg-green-400 w-2 h-full"></div><div class="px-2 flex flex-col justify-center"><span class="text-sm font-medium">Success</span><span class="text-xs text-gray-600">${ssrInterpolate(_ctx.$page.props.success)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layouts/AdminLayout.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const Brands_vue_vue_type_style_index_0_scoped_7305d9a1_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$j = {
  layout: _sfc_main$1r
};
const _sfc_main$1q = /* @__PURE__ */ Object.assign(__default__$j, {
  __name: "Brands",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    brands: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    const form = useForm({
      brand: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-7305d9a1${_scopeId}>Manage Brands</title>`);
          } else {
            return [
              createVNode("title", null, "Manage Brands")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-7305d9a1><div class="lg:w-1/3 w-full mx-auto pt-8" data-v-7305d9a1><p class="font-semibold text-3xl text-center mb-8" data-v-7305d9a1>Manage Brands</p><div class="grid grid-cols-12 space-x-2 mb-4" data-v-7305d9a1><div class="col-span-9" data-v-7305d9a1><input${ssrRenderAttr("value", unref(form).brand)} type="text" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full" placeholder="Brand" data-v-7305d9a1></div><div class="col-span-3" data-v-7305d9a1><button class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.375rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-7305d9a1>`);
      if (!unref(form).processing) {
        _push(`<span data-v-7305d9a1>Add</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><div class="flex flex-col space-y-2" data-v-7305d9a1><!--[-->`);
      ssrRenderList(__props.brands, (brand) => {
        _push(`<div class="flex flex-row items-center justify-between bg-gray-100 py-2 px-2 rounded-lg" data-v-7305d9a1><span class="text-sm font-semibold" data-v-7305d9a1>${ssrInterpolate(brand.brand)}</span><div class="flex flex-row space-x-2" data-v-7305d9a1><button class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-1 px-3" data-v-7305d9a1><svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="16" height="16" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7305d9a1><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-7305d9a1></path><line x1="4" y1="7" x2="20" y2="7" data-v-7305d9a1></line><line x1="10" y1="11" x2="10" y2="17" data-v-7305d9a1></line><line x1="14" y1="11" x2="14" y2="17" data-v-7305d9a1></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" data-v-7305d9a1></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" data-v-7305d9a1></path></svg></button></div></div>`);
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-7305d9a1>${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]" data-v-7305d9a1></div><!--]-->`);
    };
  }
});
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Brands.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const Brands = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["__scopeId", "data-v-7305d9a1"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Brands
}, Symbol.toStringTag, { value: "Module" }));
const SelectSearch_vue_vue_type_style_index_0_scoped_0c7dddfc_lang = "";
const _sfc_main$1p = {
  __name: "SelectSearch",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: "Select an option"
    },
    emptyOptionsMessage: {
      type: String,
      required: false,
      default: "No results match your search"
    },
    name: {
      type: String,
      required: false
    },
    modelValue: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(null);
    ref(null);
    ref(null);
    const open = ref(false);
    const value = ref(props.modelValue);
    const options = ref(props.data);
    const focusedOptionIndex = ref(null);
    const search = ref("");
    function closeListbox() {
      open.value = false;
      focusedOptionIndex.value = null;
    }
    watch(search, (value2) => {
      if (!open.value || !value2)
        return options.value = props.data;
      options.value = Object.keys(props.data).filter((key) => props.data[key].toLowerCase().includes(value2.toLowerCase())).reduce((options2, key) => {
        options2[key] = props.data[key];
        return options2;
      }, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-0c7dddfc><div${ssrRenderAttrs(mergeProps({ class: "relative" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, closeListbox)))} data-v-0c7dddfc><span class="inline-block w-full rounded-md shadow-sm" data-v-0c7dddfc><button${ssrRenderAttr("aria-expanded", open.value)} aria-haspopup="listbox" class="${ssrRenderClass([{ "border-b border-b-red-500": __props.error }, "relative z-0 w-full py-2 pl-3 pr-10 mt-1 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-sm sm:leading-5"])}" data-v-0c7dddfc><span style="${ssrRenderStyle(!open.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "text-gray-500": !(Object.values(options.value).indexOf(value.value) >= 0) }, "block truncate"])}" data-v-0c7dddfc>${ssrInterpolate(Object.values(options.value).indexOf(value.value) >= 0 ? value.value : __props.placeholder)}</span><input style="${ssrRenderStyle(open.value ? null : { display: "none" })}"${ssrRenderAttr("value", search.value)} type="search" class="w-full h-full form-control focus:outline-none" data-v-0c7dddfc><span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" data-v-0c7dddfc><svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" data-v-0c7dddfc><path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0c7dddfc></path></svg></span></button></span><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg" data-v-0c7dddfc><ul role="listbox"${ssrRenderAttr("aria-activedescendant", focusedOptionIndex.value ? __props.name + "Option" + focusedOptionIndex.value : null)} tabindex="-1" class="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5" data-v-0c7dddfc><!--[-->`);
      ssrRenderList(Object.keys(options.value), (key, index) => {
        _push(`<li${ssrRenderAttr("id", "Option" + index)} role="option"${ssrRenderAttr("aria-selected", focusedOptionIndex.value === index)} class="${ssrRenderClass([{ "text-white bg-indigo-600": index === focusedOptionIndex.value, "text-gray-900": index !== focusedOptionIndex.value }, "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"])}" data-v-0c7dddfc><span class="${ssrRenderClass([{ "font-semibold text-white": index === focusedOptionIndex.value, "font-normal": index !== focusedOptionIndex.value }, "block font-normal truncate"])}" data-v-0c7dddfc>${ssrInterpolate(Object.values(options.value)[index])}</span><span style="${ssrRenderStyle(key === value.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "text-white": index === focusedOptionIndex.value, "text-indigo-600": index !== focusedOptionIndex.value }, "absolute inset-y-0 right-0 flex items-center pr-4"])}" data-v-0c7dddfc><svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" data-v-0c7dddfc><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-0c7dddfc></path></svg></span></li>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle(!Object.keys(options.value).length ? null : { display: "none" })}" class="cursor-default select-none py-2 px-3 text-gray-900" data-v-0c7dddfc>${ssrInterpolate(__props.emptyOptionsMessage)}</div></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Form/SelectSearch.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const SelectSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["__scopeId", "data-v-0c7dddfc"]]);
const BulkAdjustProducts_vue_vue_type_style_index_0_scoped_dc3c48cc_lang = "";
const __default__$i = {
  layout: _sfc_main$1r
};
const _sfc_main$1o = /* @__PURE__ */ Object.assign(__default__$i, {
  __name: "BulkAdjustProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const warning = ref(true);
    const addPriceOps = [1, 2.5, 5, 10, 20, 50];
    const subPriceOps = [1, 2.5, 5, 10, 20, 50];
    const priceForm = useForm({
      add: null,
      query: null,
      cols: "all"
    });
    const deleteQueries = [
      "Everything",
      "R14",
      "R15",
      "R16",
      "R17",
      "R18",
      "R19",
      "R20",
      "R21",
      "R22",
      "Commercial"
    ];
    const deleteForm = useForm({
      bulkAction: "enable",
      query: null
    });
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-dc3c48cc${_scopeId}>Bulk Adjust Products</title>`);
          } else {
            return [
              createVNode("title", null, "Bulk Adjust Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/admin/view-products",
        class: "text-sm underline text-blue-500 italic"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back`);
          } else {
            return [
              createTextVNode("Back")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (warning.value) {
        _push(`<div class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert" data-v-dc3c48cc><svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-dc3c48cc><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-dc3c48cc></path></svg><div data-v-dc3c48cc><span class="font-medium" data-v-dc3c48cc>Warning alert!</span> This tool allows you to make bulk changes to the database, and some actions may be irreversible. Incorrect queries or operations can result in data loss or corruption. </div><button class="ml-auto" data-v-dc3c48cc><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-dc3c48cc><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-v-dc3c48cc></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.flash.success.admin) {
        _push(`<div data-v-dc3c48cc><div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" data-v-dc3c48cc><svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-dc3c48cc><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-dc3c48cc></path></svg><div data-v-dc3c48cc><span class="font-medium mr-3" data-v-dc3c48cc>Success alert!</span><span data-v-dc3c48cc>${ssrInterpolate(_ctx.$page.props.flash.success.admin)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-12 gap-6" data-v-dc3c48cc><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-dc3c48cc><span class="block font-semibold text-lg text-gray-700" data-v-dc3c48cc>Product Price Manipulator</span><span class="text-gray-500 text-sm" data-v-dc3c48cc>Changes price to <b data-v-dc3c48cc>EVERY</b> product accordingly.</span><div class="mt-4 flex space-x-1" data-v-dc3c48cc><!--[-->`);
      ssrRenderList(addPriceOps, (add) => {
        _push(`<button class="${ssrRenderClass({ "w-fit py-1 px-2 rounded-lg whitespace-nowrap": true, "bg-white border-2 border-green-500 text-black": unref(priceForm).add === add, "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": unref(priceForm).add !== add })}" data-v-dc3c48cc><span class="uppercase text-xs font-semibold" data-v-dc3c48cc>${ssrInterpolate("+" + add.toFixed(2))}</span></button>`);
      });
      _push(`<!--]--></div><div class="mt-2 mb-4 flex space-x-1" data-v-dc3c48cc><!--[-->`);
      ssrRenderList(subPriceOps, (sub) => {
        _push(`<button class="${ssrRenderClass({ "w-fit py-1 px-2 rounded-lg whitespace-nowrap": true, "bg-white border-2 border-green-500 text-black": unref(priceForm).add === -sub, "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": unref(priceForm).add !== -sub })}" data-v-dc3c48cc><span class="uppercase text-xs font-semibold" data-v-dc3c48cc>${ssrInterpolate("- " + sub.toFixed(2))}</span></button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(SelectSearch, {
        modelValue: unref(priceForm).query,
        "onUpdate:modelValue": (newValue) => unref(priceForm).query = newValue,
        data: deleteQueries,
        placeholder: "Select a Query"
      }, null, _parent));
      _push(`<div class="mt-2 mb-2 flex space-x-1" data-v-dc3c48cc><button class="${ssrRenderClass({ "w-fit py-1 px-2 rounded-lg whitespace-nowrap": true, "bg-white border-2 border-green-500 text-black": unref(priceForm).cols === "all", "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": unref(priceForm).add !== -_ctx.sub })}" data-v-dc3c48cc><span class="uppercase text-xs font-semibold" data-v-dc3c48cc>All Price</span></button><button class="${ssrRenderClass({ "w-fit py-1 px-2 rounded-lg whitespace-nowrap": true, "bg-white border-2 border-green-500 text-black": unref(priceForm).cols === "price", "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": unref(priceForm).add !== -_ctx.sub })}" data-v-dc3c48cc><span class="uppercase text-xs font-semibold" data-v-dc3c48cc>Standard Price</span></button><button class="${ssrRenderClass({ "w-fit py-1 px-2 rounded-lg whitespace-nowrap": true, "bg-white border-2 border-green-500 text-black": unref(priceForm).cols === "price_offer", "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": unref(priceForm).add !== -_ctx.sub })}" data-v-dc3c48cc><span class="uppercase text-xs font-semibold" data-v-dc3c48cc>Offer Price</span></button></div><button${ssrIncludeBooleanAttr(unref(priceForm).processing) ? " disabled" : ""} class="${ssrRenderClass({ "relative mt-4 w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(priceForm).processing })}" data-v-dc3c48cc>`);
      if (!unref(priceForm).processing) {
        _push(`<span data-v-dc3c48cc>Proceed with Caution</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg flex flex-col" data-v-dc3c48cc><span class="block font-semibold text-lg text-gray-700" data-v-dc3c48cc>Bulk Enable/Disable/Delete Products</span><div class="text-gray-500 text-sm flex items-center mt-4 mb-2" data-v-dc3c48cc><div data-v-dc3c48cc><select class="bg-transparent border border-black rounded-sm mr-2" data-v-dc3c48cc><option value="enable" data-v-dc3c48cc${ssrIncludeBooleanAttr(Array.isArray(unref(deleteForm).bulkAction) ? ssrLooseContain(unref(deleteForm).bulkAction, "enable") : ssrLooseEqual(unref(deleteForm).bulkAction, "enable")) ? " selected" : ""}>Enable</option><option value="disable" data-v-dc3c48cc${ssrIncludeBooleanAttr(Array.isArray(unref(deleteForm).bulkAction) ? ssrLooseContain(unref(deleteForm).bulkAction, "disable") : ssrLooseEqual(unref(deleteForm).bulkAction, "disable")) ? " selected" : ""}>Disable</option><option value="delete" data-v-dc3c48cc${ssrIncludeBooleanAttr(Array.isArray(unref(deleteForm).bulkAction) ? ssrLooseContain(unref(deleteForm).bulkAction, "delete") : ssrLooseEqual(unref(deleteForm).bulkAction, "delete")) ? " selected" : ""}>Delete</option></select></div><b class="mr-1" data-v-dc3c48cc>EVERY</b><span data-v-dc3c48cc>product accordingly.</span></div>`);
      _push(ssrRenderComponent(SelectSearch, {
        modelValue: unref(deleteForm).query,
        "onUpdate:modelValue": (newValue) => unref(deleteForm).query = newValue,
        data: deleteQueries,
        placeholder: "Select a Query"
      }, null, _parent));
      _push(`<button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="${ssrRenderClass({ "relative mt-auto w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(deleteForm).processing })}" data-v-dc3c48cc>`);
      if (!unref(deleteForm).processing) {
        _push(`<span data-v-dc3c48cc>Proceed with Caution</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/BulkAdjustProducts.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const BulkAdjustProducts = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["__scopeId", "data-v-dc3c48cc"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BulkAdjustProducts
}, Symbol.toStringTag, { value: "Module" }));
const AdminFee_vue_vue_type_style_index_0_scoped_f1b7cee4_lang = "";
const _sfc_main$1n = {
  __name: "AdminFee",
  __ssrInlineRender: true,
  props: {
    fee: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      price: props.fee.price
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-start bg-gray-100 py-2 px-2 rounded-lg" }, _attrs))} data-v-f1b7cee4><span class="text-sm font-semibold capitalize" data-v-f1b7cee4>${ssrInterpolate(__props.fee.name.replaceAll("_", " "))}</span><div class="ml-auto flex items-center space-x-2" data-v-f1b7cee4><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-16 h-6 px-3 text-xs border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25" placeholder="£££" data-v-f1b7cee4><div class="flex flex-row space-x-2" data-v-f1b7cee4><button${ssrIncludeBooleanAttr(__props.fee.price === unref(form).price) ? " disabled" : ""} class="${ssrRenderClass([{ "bg-green-400/30 cursor-not-allowed": __props.fee.price === unref(form).price, "bg-green-400": __props.fee.price !== unref(form).price }, "block rounded text-white sm:text-sm text-xs font-semibold py-1 px-3"])}" data-v-f1b7cee4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" data-v-f1b7cee4><g data-v-f1b7cee4><path fill="none" d="M0 0h24v24H0z" data-v-f1b7cee4></path><path d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12v7zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 11v5h8v-5H8z" fill="#ffffff" data-v-f1b7cee4></path></g></svg></button></div></div></div>`);
    };
  }
};
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminFee.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const AdminFee = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["__scopeId", "data-v-f1b7cee4"]]);
const Charges_vue_vue_type_style_index_0_scoped_67d9a1ef_lang = "";
const __default__$h = {
  layout: _sfc_main$1r
};
const _sfc_main$1m = /* @__PURE__ */ Object.assign(__default__$h, {
  __name: "Charges",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    service_fees: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    function submit(id, form) {
      form.put("/admin/service-charges/" + id, {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => {
          form.reset();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-67d9a1ef${_scopeId}>Manage Charges</title>`);
          } else {
            return [
              createVNode("title", null, "Manage Charges")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-67d9a1ef><div class="lg:w-1/3 w-full mx-auto pt-8" data-v-67d9a1ef><p class="font-semibold text-3xl text-center mb-8" data-v-67d9a1ef>Manage Charges</p><div class="flex flex-col space-y-2" data-v-67d9a1ef><!--[-->`);
      ssrRenderList(__props.service_fees, (fee) => {
        _push(ssrRenderComponent(AdminFee, {
          fee,
          onSave: (id, form) => submit(id, form)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-67d9a1ef>${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]" data-v-67d9a1ef></div><!--]-->`);
    };
  }
});
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Charges.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const Charges = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["__scopeId", "data-v-67d9a1ef"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Charges
}, Symbol.toStringTag, { value: "Module" }));
const AdminConfig_vue_vue_type_style_index_0_scoped_50525258_lang = "";
const _sfc_main$1l = {
  __name: "AdminConfig",
  __ssrInlineRender: true,
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      value: props.config.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-start bg-gray-100 py-2 px-2 rounded-lg" }, _attrs))} data-v-50525258><div class="flex flex-col" data-v-50525258><span class="text-sm font-semibold capitalize" data-v-50525258>${ssrInterpolate(__props.config.key.replaceAll("_", " "))}</span><span class="text-xs text-gray-400 font-semibold capitalize" data-v-50525258>${ssrInterpolate(__props.config.description)}</span></div><div class="ml-auto flex items-center space-x-2" data-v-50525258><input${ssrRenderAttr("value", unref(form).value)} type="text" class="w-16 h-6 px-3 text-xs border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25" data-v-50525258><div class="flex flex-row space-x-2" data-v-50525258><button${ssrIncludeBooleanAttr(__props.config.value === unref(form).value) ? " disabled" : ""} class="${ssrRenderClass([{ "bg-green-400/30 cursor-not-allowed": __props.config.value === unref(form).value, "bg-green-400": __props.config.value !== unref(form).value }, "block rounded text-white sm:text-sm text-xs font-semibold py-1 px-3"])}" data-v-50525258><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" data-v-50525258><g data-v-50525258><path fill="none" d="M0 0h24v24H0z" data-v-50525258></path><path d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12v7zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 11v5h8v-5H8z" fill="#ffffff" data-v-50525258></path></g></svg></button></div></div></div>`);
    };
  }
};
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminConfig.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const AdminConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["__scopeId", "data-v-50525258"]]);
const __default__$g = {
  layout: _sfc_main$1r
};
const _sfc_main$1k = /* @__PURE__ */ Object.assign(__default__$g, {
  __name: "Configurations",
  __ssrInlineRender: true,
  props: {
    configs: {
      required: true
    }
  },
  setup(__props) {
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    function submit(id, form) {
      form.put("/admin/config/" + id, {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => {
          form.reset();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Configurations</title>`);
          } else {
            return [
              createVNode("title", null, "Configurations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container"><div class="lg:w-1/3 w-full mx-auto pt-8"><p class="font-semibold text-3xl text-center mb-8">Manage Site Configurations</p><div class="flex flex-col space-y-2"><!--[-->`);
      ssrRenderList(__props.configs, (config) => {
        _push(ssrRenderComponent(AdminConfig, {
          config,
          onSave: (id, form) => submit(id, form)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold">${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]"></div><!--]-->`);
    };
  }
});
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Configurations.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1k
}, Symbol.toStringTag, { value: "Module" }));
const CoveredAreas_vue_vue_type_style_index_0_scoped_c6c5b4a3_lang = "";
const __default__$f = {
  layout: _sfc_main$1r
};
const _sfc_main$1j = /* @__PURE__ */ Object.assign(__default__$f, {
  __name: "CoveredAreas",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    areas: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    const form = useForm({
      area: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-c6c5b4a3${_scopeId}>Covered Areas</title>`);
          } else {
            return [
              createVNode("title", null, "Covered Areas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-c6c5b4a3><div class="lg:w-1/3 w-full mx-auto pt-8" data-v-c6c5b4a3><p class="font-semibold text-3xl text-center mb-8" data-v-c6c5b4a3>Covered Areas</p><div class="grid grid-cols-12 space-x-2 mb-4" data-v-c6c5b4a3><div class="col-span-9" data-v-c6c5b4a3><input${ssrRenderAttr("value", unref(form).area)} type="text" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full" placeholder="Area" data-v-c6c5b4a3></div><div class="col-span-3" data-v-c6c5b4a3><button class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.375rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-c6c5b4a3>`);
      if (!unref(form).processing) {
        _push(`<span data-v-c6c5b4a3>Add</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><div class="flex flex-col space-y-2" data-v-c6c5b4a3><!--[-->`);
      ssrRenderList(__props.areas, (area) => {
        _push(`<div class="flex flex-row items-center justify-between bg-gray-100 py-2 px-2 rounded-lg" data-v-c6c5b4a3><span class="text-sm font-semibold" data-v-c6c5b4a3>${ssrInterpolate(area.area)}</span><div class="flex flex-row space-x-2" data-v-c6c5b4a3><button class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-1 px-3" data-v-c6c5b4a3><svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="16" height="16" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c6c5b4a3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-c6c5b4a3></path><line x1="4" y1="7" x2="20" y2="7" data-v-c6c5b4a3></line><line x1="10" y1="11" x2="10" y2="17" data-v-c6c5b4a3></line><line x1="14" y1="11" x2="14" y2="17" data-v-c6c5b4a3></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" data-v-c6c5b4a3></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" data-v-c6c5b4a3></path></svg></button></div></div>`);
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-c6c5b4a3>${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]" data-v-c6c5b4a3></div><!--]-->`);
    };
  }
});
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/CoveredAreas.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const CoveredAreas = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-c6c5b4a3"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CoveredAreas
}, Symbol.toStringTag, { value: "Module" }));
const __default__$e = {
  layout: _sfc_main$1r
};
const _sfc_main$1i = /* @__PURE__ */ Object.assign(__default__$e, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Admin - Tyres Anywhere</title>`);
          } else {
            return [
              createVNode("title", null, "Admin - Tyres Anywhere")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="home"><nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb"><ol class="list-none p-0 inline-flex"><li class="flex items-center text-blue-500"><a href="#" class="text-gray-700">Home</a><svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></li><li class="flex items-center"><a href="#" class="text-gray-600">Dashboard</a></li></ol></nav><div class="lg:flex justify-between items-center mb-6"><p class="text-2xl font-semibold mb-2 lg:mb-0">Good afternoon, Joe!</p><button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Logs</button></div><div class="flex flex-wrap -mx-3 mb-20"><div class="w-1/2 xl:w-1/4 px-3"><div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"><svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20"><path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path></svg><div class="text-gray-700"><p class="font-semibold text-3xl">237</p><p>Products Sold</p></div></div></div><div class="w-1/2 xl:w-1/4 px-3"><div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"><svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20"><path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path></svg><div class="text-gray-700"><p class="font-semibold text-3xl">177</p><p>Product Reviews</p></div></div></div><div class="w-1/2 xl:w-1/4 px-3"><div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6"><svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20"><path d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path></svg><div class="text-gray-700"><p class="font-semibold text-3xl">31</p><p>New Enquiries</p></div></div></div><div class="w-1/2 xl:w-1/4 px-3"><div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6"><svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20"><path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path></svg><div class="text-gray-700"><p class="font-semibold text-3xl">1,653</p><p>Product Views</p></div></div></div></div><div class="flex flex-wrap -mx-3"><div class="w-full xl:w-1/3 px-3"><p class="text-xl font-semibold mb-4">Recent Sales</p><div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0"><canvas id="buyers-chart" width="600" height="400"></canvas></div></div><div class="w-full xl:w-1/3 px-3"><p class="text-xl font-semibold mb-4">Recent Reviews</p><div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0"><canvas id="reviews-chart" width="600" height="400"></canvas></div></div><div class="w-full xl:w-1/3 px-3"><p class="text-xl font-semibold mb-4">Recent Transactions</p><div class="w-full bg-white border rounded-lg p-4"><div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4"><div><p class="font-semibold text-xl">Trent Murphy</p><p>Product 1</p></div><span class="text-green-500 font-semibold text-lg">$25.00</span></div><div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4"><div><p class="font-semibold text-xl">Joseph Brent</p><p>Product 34</p></div><span class="text-red-500 font-semibold text-lg">$74.99</span></div><div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4"><div><p class="font-semibold text-xl">Jacob Bator</p><p>Product 23</p></div><span class="text-green-500 font-semibold text-lg">$14.95</span></div><div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2"><div><p class="font-semibold text-xl">Alex Mason</p><p>Product 66</p></div><span class="text-green-500 font-semibold text-lg">$44.99</span></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1h = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layouts/BlankLayout.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const BlankLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["ssrRender", _sfc_ssrRender$4]]);
const Login_vue_vue_type_style_index_0_scoped_de99137c_lang = "";
const __default__$d = {
  layout: BlankLayout
};
const _sfc_main$1g = /* @__PURE__ */ Object.assign(__default__$d, {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    errors: Object
  },
  setup(__props) {
    const togglePassword = ref(false);
    const form = useForm({
      username: null,
      password: null,
      remember_me: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-de99137c${_scopeId}>Admin Log In - Tyres Anywhere</title>`);
          } else {
            return [
              createVNode("title", null, "Admin Log In - Tyres Anywhere")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-screen w-screen flex flex-col justify-center items-center px-2 sm:px-0 bg-gray-100" data-v-de99137c><p class="font-semibold text-xl" data-v-de99137c>Admin Log In</p><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg z-10" data-v-de99137c><form method="post" data-v-de99137c><div data-v-de99137c><label for="username" class="block sm:text-sm text-xs text-gray-700" data-v-de99137c>Username <span class="text-red-500 font-bold" data-v-de99137c>*</span></label><input${ssrRenderAttr("value", unref(form).username)} type="text" id="username" class="block mt-1 w-full py-2 px-3 border outline-0 rounded text-sm shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25" autocomplete="username" autofocus data-v-de99137c>`);
      if (__props.errors.username) {
        _push(`<span class="text-red-500 text-xs" data-v-de99137c>${ssrInterpolate(__props.errors.username)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4" data-v-de99137c><label for="password" class="block sm:text-sm text-xs text-gray-700" data-v-de99137c>Password <span class="text-red-500 font-bold" data-v-de99137c>*</span></label><div class="relative" data-v-de99137c><input${ssrRenderDynamicModel(togglePassword.value ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", togglePassword.value ? "text" : "password")} id="password" class="block mt-1 w-full py-2 px-3 border outline-0 rounded text-sm shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25" autocomplete="current-password" data-v-de99137c><button tabindex="-1" type="button" class="text-gray-400 absolute top-1/2 -translate-y-1/2 px-1 py-1 right-2 border-0 outline-0 bg-transparent fill-skl-primary" data-v-de99137c>`);
      if (togglePassword.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-de99137c><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-v-de99137c></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-v-de99137c></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-de99137c><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" data-v-de99137c></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" data-v-de99137c></path></svg>`);
      }
      _push(`</button></div></div>`);
      if (__props.errors.password) {
        _push(`<span class="text-red-500 text-xs" data-v-de99137c>${ssrInterpolate(__props.errors.password)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between mt-5" data-v-de99137c><div class="flex" data-v-de99137c><label for="remember_me" class="inline-flex items-center" data-v-de99137c><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember_me) ? ssrLooseContain(unref(form).remember_me, null) : unref(form).remember_me) ? " checked" : ""} id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" data-v-de99137c><span class="ml-2 text-sm text-gray-600" data-v-de99137c>Remember me</span></label></div></div><button class="${ssrRenderClass({ "relative mt-4 w-full h-9 bg-blue-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:border-blue-600 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150": true, "button--loading": unref(form).processing })}" type="submit" data-v-de99137c>`);
      if (!unref(form).processing) {
        _push(`<span data-v-de99137c>Log In</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Login.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-de99137c"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1f = {
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    text: {
      required: false
    },
    value: {
      required: false,
      type: String
    },
    editable: {
      required: false,
      type: Boolean
    },
    property: {
      required: false,
      type: String
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const editMode = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center border-gray-300 h-full text-xs group" }, _attrs))}>`);
      if (!editMode.value) {
        _push(`<span>${ssrInterpolate(__props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable) {
        _push(`<input${ssrRenderAttr("value", __props.value)} type="text" class="${ssrRenderClass([{ "hidden": !editMode.value }, "bg-transparent border border-black rounded-sm w-4/5 text-center"])}">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable && !editMode.value) {
        _push(`<button class="absolute right-1 hidden group-hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50"><button class="bg-green-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path></svg></button><button class="bg-red-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalTyreFields/Text.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = {
  __name: "Quantity",
  __ssrInlineRender: true,
  props: {
    text: {
      required: false
    },
    value: {
      required: false
    },
    editable: {
      required: false,
      type: Boolean
    },
    property: {
      required: true,
      type: String
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const editMode = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center border-gray-300 h-full text-xs group" }, _attrs))}>`);
      if (!editMode.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable) {
        _push(`<input${ssrRenderAttr("value", __props.value)} type="number" min="0" class="${ssrRenderClass([{ "hidden": !editMode.value }, "bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"])}">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable && !editMode.value) {
        _push(`<button class="absolute right-1 hidden group-hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50"><button class="bg-green-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path></svg></button><button class="bg-red-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalTyreFields/Quantity.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const _sfc_main$1d = {
  __name: "TyreSize",
  __ssrInlineRender: true,
  props: {
    text: {
      required: false,
      type: String
    },
    width: {
      required: false,
      type: String
    },
    profile: {
      required: false,
      type: String
    },
    rim: {
      required: false,
      type: String
    },
    commercial: {
      required: false
    },
    editable: {
      required: false,
      type: Boolean
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const editMode = ref(false);
    const widths = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335];
    const profiles = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
    const rims = [14, 15, 16, 17, 18, 19, 20, 21, 22];
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center border-gray-300 h-full text-xs group" }, _attrs))}>`);
      if (!editMode.value) {
        _push(`<span>${ssrInterpolate(__props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable) {
        _push(`<div class="${ssrRenderClass([{ "hidden": !editMode.value }, "space-x-0.5 flex items-center text-[11px]"])}"><select${ssrRenderAttr("value", __props.width)} class="bg-transparent border border-black rounded-sm w-8 outline-0 appearance-none text-center"><!--[-->`);
        ssrRenderList(widths, (width) => {
          _push(`<option${ssrRenderAttr("value", width)}>${ssrInterpolate(width)}</option>`);
        });
        _push(`<!--]--></select><select${ssrRenderAttr("value", __props.profile)} class="bg-transparent border border-black rounded-sm w-6 outline-0 appearance-none text-center"><!--[-->`);
        ssrRenderList(profiles, (profile) => {
          _push(`<option${ssrRenderAttr("value", profile)}>${ssrInterpolate(profile)}</option>`);
        });
        _push(`<!--]--></select><select${ssrRenderAttr("value", __props.rim)} class="bg-transparent border border-black rounded-sm w-6 outline-0 appearance-none text-center"><!--[-->`);
        ssrRenderList(rims, (rim) => {
          _push(`<option${ssrRenderAttr("value", rim)}>${ssrInterpolate(rim)}</option>`);
        });
        _push(`<!--]--></select><div class="relative w-4 h-4"><span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">C</span><input class="w-4 h-4" type="checkbox"${ssrIncludeBooleanAttr(__props.commercial) ? " checked" : ""}></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable && !editMode.value) {
        _push(`<button class="absolute right-1 hidden group-hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50"><button class="bg-green-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path></svg></button><button class="bg-red-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalTyreFields/TyreSize.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const _sfc_main$1c = {
  __name: "Brand",
  __ssrInlineRender: true,
  props: {
    text: {
      required: false,
      type: String
    },
    value: {
      required: false,
      type: String
    },
    editable: {
      required: false,
      type: Boolean
    },
    placeholder: {
      type: String,
      required: false,
      default: "Select an option"
    },
    emptyOptionsMessage: {
      type: String,
      required: false,
      default: "No results match your search"
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const editMode = ref(false);
    ref(null);
    ref(null);
    ref(null);
    const open = ref(false);
    const value = ref(props.value);
    const options = ref(usePage().props.brands);
    const focusedOptionIndex = ref(null);
    const search = ref("");
    function closeListbox() {
      open.value = false;
      focusedOptionIndex.value = null;
    }
    watch(search, (value2) => {
      if (!open.value || !value2)
        return options.value = props.data;
      options.value = Object.keys(props.data).filter((key) => props.data[key].toLowerCase().includes(value2.toLowerCase())).reduce((options2, key) => {
        options2[key] = props.data[key];
        return options2;
      }, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center border-gray-300 h-full text-xs group" }, _attrs))}>`);
      if (!editMode.value) {
        _push(`<span>${ssrInterpolate(__props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable) {
        _push(`<div class="${ssrRenderClass([{ "hidden": !editMode.value }, "space-x-0.5"])}"><div class="w-full"><div${ssrRenderAttrs(mergeProps({ class: "relative" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, closeListbox)))}><span class="inline-block w-full rounded-sm"><button${ssrRenderAttr("aria-expanded", open.value)} aria-haspopup="listbox" class="relative z-0 w-full pl-2 pr-8 text-left transition duration-150 ease-in-out bg-transparent border border-black rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-xs sm:leading-5"><span style="${ssrRenderStyle(!open.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "text-gray-500": !(Object.values(options.value).indexOf(value.value) >= 0) }, "block truncate"])}">${ssrInterpolate(Object.values(options.value).indexOf(value.value) >= 0 ? value.value : __props.placeholder)}</span><input style="${ssrRenderStyle(open.value ? null : { display: "none" })}"${ssrRenderAttr("value", search.value)} type="search" class="w-full h-full form-control focus:outline-none"><span class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none"><svg class="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></span><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"><ul role="listbox" tabindex="-1" class="py-1 overflow-auto rounded-md shadow-xs max-h-60 focus:outline-none"><!--[-->`);
        ssrRenderList(Object.keys(options.value), (key, index) => {
          _push(`<li${ssrRenderAttr("id", "Option" + index)} role="option"${ssrRenderAttr("aria-selected", focusedOptionIndex.value === index)} class="${ssrRenderClass([{ "text-white bg-indigo-600": index === focusedOptionIndex.value, "text-gray-900": index !== focusedOptionIndex.value }, "relative py-1 pl-3 text-gray-900 cursor-default select-none pr-9"])}"><span class="${ssrRenderClass([{ "font-semibold text-white": index === focusedOptionIndex.value, "font-normal": index !== focusedOptionIndex.value }, "block font-normal truncate"])}">${ssrInterpolate(Object.values(options.value)[index])}</span><span style="${ssrRenderStyle(key === value.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "text-white": index === focusedOptionIndex.value, "text-indigo-600": index !== focusedOptionIndex.value }, "absolute inset-y-0 right-0 flex items-center pr-4"])}"><svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span></li>`);
        });
        _push(`<!--]--><div style="${ssrRenderStyle(!Object.keys(options.value).length ? null : { display: "none" })}" class="cursor-default select-none py-2 px-3 text-gray-900">${ssrInterpolate(__props.emptyOptionsMessage)}</div></ul></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable && !editMode.value) {
        _push(`<button class="absolute right-1 hidden group-hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50"><button class="bg-green-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path></svg></button><button class="bg-red-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalTyreFields/Brand.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const PopupModal_vue_vue_type_style_index_0_scoped_dbf3c228_lang = "";
const _sfc_main$1b = {
  __name: "PopupModal",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    __expose({
      open,
      close
    });
    const isVisible = ref(false);
    function open() {
      isVisible.value = true;
    }
    function close() {
      isVisible.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (isVisible.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-modal" }, _attrs))} data-v-dbf3c228><div class="window" data-v-dbf3c228>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Modal/PopupModal.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const PopupModal = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-dbf3c228"]]);
const _sfc_main$1a = {
  __name: "ConfirmDialogue",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    __expose({
      show
    });
    const popup = ref(null);
    const title = ref("");
    const message = ref("");
    const okButton = ref("");
    const cancelButton = ref("");
    const resolvePromise = ref(void 0);
    const rejectPromise = ref(void 0);
    function show(opts = {}) {
      title.value = opts.title;
      message.value = opts.message;
      okButton.value = opts.okButton;
      if (opts.cancelButton) {
        cancelButton.value = opts.cancelButton;
      }
      popup.value.open();
      return new Promise((resolve, reject) => {
        resolvePromise.value = resolve;
        rejectPromise.value = reject;
      });
    }
    function _confirm() {
      popup.value.close();
      resolvePromise.value(true);
    }
    function _cancel() {
      popup.value.close();
      resolvePromise.value(false);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(PopupModal, mergeProps({
        ref_key: "popup",
        ref: popup
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(title.value)}</h2><p class="text-sm mt-1 text-gray-600"${_scopeId}>${ssrInterpolate(message.value)}</p><div class="flex items-center justify-end space-x-2 mt-6"${_scopeId}><span class="px-3 py-1 text-sm rounded uppercase text-indigo-500 font-medium cursor-pointer"${_scopeId}>${ssrInterpolate(cancelButton.value)}</span><span class="bg-gray-200 px-3 py-1 text-sm rounded uppercase text-indigo-500 font-medium cursor-pointer"${_scopeId}>${ssrInterpolate(okButton.value)}</span></div>`);
          } else {
            return [
              createVNode("h2", { class: "text-lg font-semibold" }, toDisplayString(title.value), 1),
              createVNode("p", { class: "text-sm mt-1 text-gray-600" }, toDisplayString(message.value), 1),
              createVNode("div", { class: "flex items-center justify-end space-x-2 mt-6" }, [
                createVNode("span", {
                  class: "px-3 py-1 text-sm rounded uppercase text-indigo-500 font-medium cursor-pointer",
                  onClick: _cancel
                }, toDisplayString(cancelButton.value), 1),
                createVNode("span", {
                  class: "bg-gray-200 px-3 py-1 text-sm rounded uppercase text-indigo-500 font-medium cursor-pointer",
                  onClick: _confirm
                }, toDisplayString(okButton.value), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Modal/ConfirmDialogue.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const _sfc_main$19 = {
  __name: "AdminLocalTyre",
  __ssrInlineRender: true,
  props: {
    tyre: {
      type: Object,
      required: true
    },
    index: {
      required: true
    }
  },
  emits: ["copy", "change"],
  setup(__props, { emit: __emit }) {
    const confirmDialogue = ref(null);
    const props = __props;
    const emit = __emit;
    const form = useForm({
      width: props.tyre.width,
      profile: props.tyre.profile,
      rim: props.tyre.rim,
      commercial: props.tyre.commercial,
      brand: props.tyre.brand,
      model: props.tyre.model,
      cost: props.tyre.cost,
      quantity: props.tyre.quantity,
      desired_quantity: props.tyre.desired_quantity,
      notes: props.tyre.notes,
      sold: props.tyre.sold
    });
    ref(null);
    function update(property, value) {
      switch (property) {
        case "size":
          form.width = value.width;
          form.profile = value.profile;
          form.rim = value.rim;
          form.commercial = value.commercial;
          break;
        case "brand":
          form.brand = value;
          break;
        case "model":
          form.model = value;
          break;
        case "cost":
          form.cost = value;
          break;
        case "quantity":
          form.quantity = value;
          break;
        case "desired_quantity":
          form.desired_quantity = value;
          break;
        case "notes":
          form.notes = value;
          break;
        case "sold":
          form.sold = value;
          break;
      }
      form.put("/admin/inventory/" + props.tyre.id, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          emit("change");
        }
      });
    }
    function copySizeToClipboard(e) {
      e.preventDefault();
      navigator.clipboard.writeText(form.width + "  " + form.profile + "  " + form.rim);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="grid grid-cols-22 h-7 w-full border-x border-gray-300 font-semibold">`);
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-1 border font-normal",
        text: __props.index + 1,
        editable: false,
        onClick: ($event) => _ctx.$emit("selectRow", __props.tyre.id),
        "data-id": __props.tyre.id
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1d, {
        class: "col-span-3 border",
        style: { background: __props.tyre.tyre_size_bg, color: __props.tyre.tyre_size_font },
        text: unref(form).width + "/" + unref(form).profile + " R" + unref(form).rim + (unref(form).commercial ? "C" : ""),
        width: unref(form).width,
        profile: unref(form).profile,
        rim: unref(form).rim,
        commercial: unref(form).commercial,
        editable: true,
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "tyre_size",
        onContextmenu: copySizeToClipboard
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1e, {
        class: "col-span-1 border",
        style: {
          background: __props.tyre.quantity === 0 && __props.tyre.desired_quantity === 0 ? __props.tyre.quantity_bg : __props.tyre.quantity === 0 ? "#ff0000" : __props.tyre.quantity < __props.tyre.desired_quantity ? "#FFBF00" : __props.tyre.quantity > __props.tyre.desired_quantity ? "#AFEEEE" : __props.tyre.quantity_bg,
          color: __props.tyre.quantity_font
        },
        text: unref(form).quantity,
        value: unref(form).quantity,
        editable: true,
        property: "quantity",
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "quantity"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1c, {
        class: "col-span-3 border",
        style: { background: __props.tyre.brand_bg, color: __props.tyre.brand_font },
        text: unref(form).brand,
        value: unref(form).brand,
        editable: true,
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "brand"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-2 border",
        style: { background: __props.tyre.price_bg, color: __props.tyre.price_font },
        text: "£" + unref(form).cost,
        value: unref(form).cost,
        editable: true,
        property: "cost",
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "price"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-2 border font-normal",
        style: { background: __props.tyre.total_price_bg, color: __props.tyre.total_price_font },
        text: (__props.tyre.cost * __props.tyre.quantity).toFixed(2).toString(),
        editable: false,
        property: "total_price",
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "total_price"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-4 border",
        style: { background: __props.tyre.model_bg, color: __props.tyre.model_font },
        text: unref(form).model,
        value: unref(form).model,
        editable: true,
        property: "model",
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "model"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-4 border",
        style: { background: __props.tyre.notes_bg, color: __props.tyre.notes_font },
        text: unref(form).notes,
        value: unref(form).notes,
        editable: true,
        property: "notes",
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "notes"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1e, {
        class: "col-span-1 border",
        style: { background: __props.tyre.desired_quantity_bg, color: __props.tyre.desired_quantity_font },
        text: unref(form).desired_quantity,
        value: unref(form).desired_quantity,
        editable: true,
        property: "desired_quantity",
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "desired_quantity"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1e, {
        class: "col-span-1 border",
        style: { background: __props.tyre.sold_bg, color: __props.tyre.sold_font },
        text: unref(form).sold,
        value: unref(form).sold,
        editable: true,
        property: "sold",
        onUpdate: update,
        "data-selectable": "",
        "data-id": __props.tyre.id,
        "data-column": "sold"
      }, null, _parent));
      _push(`</div><button class="absolute text-red-500 top-1/2 -translate-y-1/2 translate-x-full right-0 w-7 h-7 flex items-center justify-center" data-no-click><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg></button><button class="absolute text-blue-500 top-1/2 -translate-y-1/2 -translate-x-full left-0 w-7 h-7 flex items-center justify-center" data-no-click><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg></button>`);
      _push(ssrRenderComponent(_sfc_main$1a, {
        ref_key: "confirmDialogue",
        ref: confirmDialogue
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminLocalTyre.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const _sfc_main$18 = {
  __name: "Brand",
  __ssrInlineRender: true,
  props: {
    value: {
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: "Select an option"
    },
    emptyOptionsMessage: {
      type: String,
      required: false,
      default: "No results match your search"
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    watch(() => props.value, (newValue) => {
      value.value = newValue;
    });
    ref(null);
    ref(null);
    ref(null);
    const open = ref(false);
    const value = ref(props.value);
    const options = ref(usePage().props.brands);
    const focusedOptionIndex = ref(null);
    const search = ref("");
    function closeListbox() {
      open.value = false;
      focusedOptionIndex.value = null;
    }
    watch(search, (value2) => {
      if (!open.value || !value2)
        return options.value = props.data;
      options.value = Object.keys(props.data).filter((key) => props.data[key].toLowerCase().includes(value2.toLowerCase())).reduce((options2, key) => {
        options2[key] = props.data[key];
        return options2;
      }, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-start border-gray-300 text-xs group" }, _attrs))}><div class="space-x-0.5"><div class="w-full"><div${ssrRenderAttrs(mergeProps({ class: "relative" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, closeListbox)))}><span class="inline-block w-full rounded-sm"><button${ssrRenderAttr("aria-expanded", open.value)} aria-haspopup="listbox" class="relative z-0 w-full pl-2 pr-8 text-left transition duration-150 ease-in-out bg-transparent border border-black rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 text-xs sm:leading-5"><span style="${ssrRenderStyle(!open.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "text-gray-500": !(Object.values(options.value).indexOf(value.value) >= 0) }, "block truncate"])}">${ssrInterpolate(Object.values(options.value).indexOf(value.value) >= 0 ? value.value : __props.placeholder)}</span><input style="${ssrRenderStyle(open.value ? null : { display: "none" })}"${ssrRenderAttr("value", search.value)} type="search" class="w-full h-full bg-transparent form-control focus:outline-none"><span class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none"><svg class="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></span><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"><ul role="listbox" tabindex="-1" class="py-1 overflow-auto rounded-md shadow-xs max-h-60 focus:outline-none"><!--[-->`);
      ssrRenderList(Object.keys(options.value), (key, index) => {
        _push(`<li${ssrRenderAttr("id", "Option" + index)} role="option"${ssrRenderAttr("aria-selected", focusedOptionIndex.value === index)} class="${ssrRenderClass([{ "text-white bg-indigo-600": index === focusedOptionIndex.value, "text-gray-900": index !== focusedOptionIndex.value }, "relative py-1 pl-3 text-gray-900 cursor-default select-none pr-9"])}"><span class="${ssrRenderClass([{ "font-semibold text-white": index === focusedOptionIndex.value, "font-normal": index !== focusedOptionIndex.value }, "block font-normal truncate"])}">${ssrInterpolate(Object.values(options.value)[index])}</span><span style="${ssrRenderStyle(key === value.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "text-white": index === focusedOptionIndex.value, "text-indigo-600": index !== focusedOptionIndex.value }, "absolute inset-y-0 right-0 flex items-center pr-4"])}"><svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span></li>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle(!Object.keys(options.value).length ? null : { display: "none" })}" class="cursor-default select-none py-2 px-3 text-gray-900">${ssrInterpolate(__props.emptyOptionsMessage)}</div></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AddLocalTyreFields/Brand.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _sfc_main$17 = {
  __name: "AddLocalTyre",
  __ssrInlineRender: true,
  props: {
    copyData: {
      type: Object,
      required: false
    }
  },
  emits: ["inserted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(() => props.copyData, (newValue) => {
      form.width = newValue.width;
      form.profile = newValue.profile;
      form.rim = newValue.rim;
      form.commercial = newValue.commercial;
      form.brand = newValue.brand;
      form.model = newValue.model;
      form.cost = newValue.cost;
      form.quantity = newValue.quantity;
      form.desired_quantity = newValue.desired_quantity;
      form.notes = newValue.notes;
      form.sold = newValue.sold;
      console.log(newValue);
    });
    watch(() => usePage().props.insert_id, (newValue) => {
      if (!newValue)
        return;
      setTimeout(() => {
        emit("inserted", newValue);
      }, 1e3);
    });
    const form = useForm({
      width: null,
      profile: null,
      rim: null,
      commercial: false,
      brand: null,
      model: null,
      cost: null,
      quantity: null,
      desired_quantity: null,
      notes: null,
      sold: 0
    });
    const widths = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335];
    const profiles = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
    const rims = [14, 15, 16, 17, 18, 19, 20, 21, 22];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="grid grid-cols-22 h-7 w-full border-x border-b border-gray-300"><div class="col-span-1"></div><div class="col-span-3 border-x relative flex items-center justify-center border-gray-300 h-full text-[11px]"><div class="space-x-0.5 flex items-center"><select class="bg-transparent border border-black rounded-sm w-12 text-center"><!--[-->`);
      ssrRenderList(widths, (width) => {
        _push(`<option${ssrRenderAttr("value", width)}>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></select><select class="bg-transparent border border-black rounded-sm w-10 text-center"><!--[-->`);
      ssrRenderList(profiles, (profile) => {
        _push(`<option${ssrRenderAttr("value", profile)}>${ssrInterpolate(profile)}</option>`);
      });
      _push(`<!--]--></select><select class="bg-transparent border border-black rounded-sm w-10 text-center"><!--[-->`);
      ssrRenderList(rims, (rim) => {
        _push(`<option${ssrRenderAttr("value", rim)}>${ssrInterpolate(rim)}</option>`);
      });
      _push(`<!--]--></select><div class="relative w-5 h-5"><span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">C</span><input class="w-5 h-5" type="checkbox"${ssrIncludeBooleanAttr(unref(form).commercial) ? " checked" : ""}${ssrIncludeBooleanAttr(Array.isArray(unref(form).commercial) ? ssrLooseContain(unref(form).commercial, null) : unref(form).commercial) ? " checked" : ""}></div></div></div><div class="col-span-1 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]"><input type="number" min="0"${ssrRenderAttr("value", unref(form).desired_quantity)} class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"></div><div class="col-span-3 border-r relative flex items-center justify-center border-gray-300 h-full">`);
      _push(ssrRenderComponent(_sfc_main$18, {
        value: unref(form).brand,
        onUpdate: (newValue) => unref(form).brand = newValue
      }, null, _parent));
      _push(`</div><div class="col-span-2 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]"><input type="text"${ssrRenderAttr("value", unref(form).cost)} class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"></div><div class="col-span-2 border-r relative border-gray-300 h-full"></div><div class="col-span-4 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]"><input type="text"${ssrRenderAttr("value", unref(form).model)} class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"></div><div class="col-span-4 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]"><input type="text"${ssrRenderAttr("value", unref(form).notes)} class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"></div><div class="col-span-1 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]"><input type="number" min="0"${ssrRenderAttr("value", unref(form).quantity)} class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"></div><div class="col-span-1 border-r relative flex items-center justify-center border-gray-300 h-full text-[11px]"><input type="number"${ssrRenderAttr("value", unref(form).sold)} class="bg-transparent outline-0 border border-black rounded-sm w-4/5 text-center"></div></div><button class="absolute bg-green-400 top-1/2 -translate-y-1/2 translate-x-full right-0 w-7 h-7 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AddLocalTyre.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const _sfc_main$16 = {
  __name: "AdminColorTheme",
  __ssrInlineRender: true,
  props: {
    colorPalette: {
      type: Array,
      required: true
    }
  },
  emits: ["changeColor"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-fit" }, _attrs))}><div class="flex flex-col border"><button class="w-4 h-4" style="${ssrRenderStyle({ backgroundColor: __props.colorPalette[0] })}"></button></div><div class="flex flex-col border mt-2"><!--[-->`);
      ssrRenderList(__props.colorPalette.length - 1, (i) => {
        _push(`<button class="w-4 h-4" style="${ssrRenderStyle({ backgroundColor: __props.colorPalette[i] })}"></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminColorTheme.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const _sfc_main$15 = {
  __name: "AdminColorPicker",
  __ssrInlineRender: true,
  emits: ["color"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const open = ref(false);
    const colorPalette = ref([
      ["#ffffff", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280"],
      ["#000000", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
      ["#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e"],
      ["#2563eb", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"],
      ["#0284c7", "#e0f2fe", "#e0f2fe", "#7dd3fc", "#38bdf8", "#0ea5e9"],
      ["#dc2626", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444"],
      ["#65a30d", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16"],
      ["#7c3aed", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6"],
      ["#0891b2", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4"],
      ["#ea580c", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316"]
    ]);
    function changeColor(_color) {
      emit("color", _color);
    }
    function closeColorPicker() {
      if (!open.value)
        return;
      open.value = false;
    }
    __expose({ closeColorPicker, open });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex items-center"><div class="flex items-center justify-center w-5 h-5 border border-gray-500 rounded-l">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="h-5 w-3 border-r border-y border-gray-500 rounded-r flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24"><path d="m11.998 17 7-8h-14z"></path></svg></div></div>`);
      if (open.value) {
        _push(`<div class="absolute shadow-lg bg-white border border-gray-500 rounded bottom-0 translate-y-full z-50"><div class="flex h-8"><button class="grow px-2 flex items-center justify-start hover:bg-gray-100"><span class="border border-gray-300 rounded mr-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="red" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path></svg></span><span class="text-xs">Default</span></button></div><div class="py-0.5 px-2 bg-gray-100"><span class="text-xs">Color Palette</span></div><div class="px-2 py-1 flex space-x-2">`);
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[0],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[1],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[2],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[3],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[4],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[5],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[6],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[7],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[8],
          onChangeColor: changeColor
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$16, {
          colorPalette: colorPalette.value[9],
          onChangeColor: changeColor
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed w-screen h-screen left-0 top-0 z-40"></div></div>`);
    };
  }
};
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminColorPicker.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const AdminLocalStockSearch_vue_vue_type_style_index_0_scoped_39c7fb41_lang = "";
const _sfc_main$14 = {
  __name: "AdminLocalStockSearch",
  __ssrInlineRender: true,
  props: {
    search_results: Object
  },
  emits: ["sellTyre"],
  setup(__props, { emit: __emit }) {
    const widths = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335];
    const profiles = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
    const rims = [14, 15, 16, 17, 18, 19, 20, 21, 22];
    const form = useForm({
      width: null,
      profile: null,
      rim: null
    });
    const selectedTyre = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<!--[--><h1 class="text-center text-3xl font-semibold" data-v-39c7fb41>Search Tyre</h1><div class="grid grid-cols-10 mt-4 gap-x-1 gap-y-2" data-v-39c7fb41><div class="col-span-3" data-v-39c7fb41><select class="block md:text-base text-sm w-full py-2 pl-4 sm:pr-9 pr-5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600" data-v-39c7fb41><option value="null" data-v-39c7fb41${ssrIncludeBooleanAttr(Array.isArray(unref(form).width) ? ssrLooseContain(unref(form).width, "null") : ssrLooseEqual(unref(form).width, "null")) ? " selected" : ""}>Width</option><!--[-->`);
      ssrRenderList(widths, (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-39c7fb41>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-3" data-v-39c7fb41><select class="block md:text-base text-sm w-full py-2 pl-4 sm:pr-9 pr-5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600" data-v-39c7fb41><option value="null" data-v-39c7fb41${ssrIncludeBooleanAttr(Array.isArray(unref(form).profile) ? ssrLooseContain(unref(form).profile, "null") : ssrLooseEqual(unref(form).profile, "null")) ? " selected" : ""}>Profile</option><!--[-->`);
      ssrRenderList(profiles, (profile) => {
        _push(`<option${ssrRenderAttr("value", profile)} data-v-39c7fb41>${ssrInterpolate(profile)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-3" data-v-39c7fb41><select class="block md:text-base text-sm w-full py-2 pl-4 sm:pr-9 pr-5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600" data-v-39c7fb41><option value="null" data-v-39c7fb41${ssrIncludeBooleanAttr(Array.isArray(unref(form).rim) ? ssrLooseContain(unref(form).rim, "null") : ssrLooseEqual(unref(form).rim, "null")) ? " selected" : ""}>Rim</option><!--[-->`);
      ssrRenderList(rims, (rim) => {
        _push(`<option${ssrRenderAttr("value", rim)} data-v-39c7fb41>${ssrInterpolate(rim)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-1" data-v-39c7fb41><button class="flex items-center justify-center bg-green-400 h-full w-full rounded-md text-white" data-v-39c7fb41><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-39c7fb41><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" data-v-39c7fb41></path></svg></button></div></div>`);
      if (__props.search_results && __props.search_results.length) {
        _push(`<h1 class="text-center text-2xl font-semibold mt-12" data-v-39c7fb41>${ssrInterpolate(__props.search_results[0].width + "/" + __props.search_results[0].profile + " R" + __props.search_results[0].rim)}</h1>`);
      } else {
        _push(`<h1 class="text-center text-2xl font-semibold mt-12" data-v-39c7fb41>No tyres in this size</h1>`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 space-y-2" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => selectedTyre.value = null)))} data-v-39c7fb41><!--[-->`);
      ssrRenderList(__props.search_results, (tyre) => {
        _push(`<div class="relative group overflow-hidden bg-white p-2 w-full rounded-lg shadow-lg flex items-center" data-v-39c7fb41><div class="h-7 mr-3" data-v-39c7fb41>`);
        if (tyre.commercial) {
          _push(`<img class="h-full" src="/images/tyres/icons/commercial.webp" data-v-39c7fb41>`);
        } else {
          _push(`<img class="h-full" src="/images/tyres/icons/passenger.webp" data-v-39c7fb41>`);
        }
        _push(`</div><div class="flex flex-col" data-v-39c7fb41><div data-v-39c7fb41><span class="font-semibold mr-2" data-v-39c7fb41>${ssrInterpolate(tyre.brand)}</span><span data-v-39c7fb41>(${ssrInterpolate(tyre.quantity)})</span></div><span class="text-xs text-left" data-v-39c7fb41>${ssrInterpolate(tyre.model)}</span></div><span class="ml-auto font-semibold" data-v-39c7fb41>${ssrInterpolate("£" + tyre.cost)}</span><button class="absolute right-0 bg-green-400 w-40 h-9" style="${ssrRenderStyle(selectedTyre.value === tyre.id ? null : { display: "none" })}" data-v-39c7fb41><span class="font-bold uppercase" data-v-39c7fb41>Sell 1</span></button></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminLocalStockSearch.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const AdminLocalStockSearch = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-39c7fb41"]]);
const LocalStockFilter_vue_vue_type_style_index_0_scoped_31314cb6_lang = "";
const _sfc_main$13 = {
  __name: "LocalStockFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      size: null,
      brand: null,
      budget: null,
      midrange: null,
      premium: null,
      commercial: null,
      runflat: null,
      xl: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full ml-10" }, _attrs))} data-v-31314cb6><div class="relative text-gray-600" data-v-31314cb6><input type="search" name="serch" placeholder="Search inventory..." class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" data-v-31314cb6><button class="absolute right-0 top-0 mt-3 mr-4" data-v-31314cb6><svg class="h-4 w-4 fill-current" viewBox="0 0 56.966 56.966" data-v-31314cb6><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" data-v-31314cb6></path></svg></button></div><div class="grid grid-cols-4 gap-x-4 h-24 pt-2" data-v-31314cb6><div class="col-span-1 px-2 py-1 h-full box-shadow bg-gray-200" data-v-31314cb6><span class="text-xs font-semibold" data-v-31314cb6>Brand</span>`);
      _push(ssrRenderComponent(_sfc_main$18, {
        class: "mt-2",
        value: unref(form).brand,
        onUpdate: (newValue) => unref(form).brand = newValue
      }, null, _parent));
      _push(`</div><div class="col-span-1 px-2 py-1 h-full box-shadow bg-gray-200" data-v-31314cb6><span class="text-xs font-semibold" data-v-31314cb6>Quality</span><div class="mt-2 flex flex-col items-start space-y-1" data-v-31314cb6><div class="flex items-center space-x-1" data-v-31314cb6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).budget) ? ssrLooseContain(unref(form).budget, null) : unref(form).budget) ? " checked" : ""} data-v-31314cb6><label class="block text-xs text-gray-700" data-v-31314cb6>Budget</label></div><div class="flex items-center space-x-1" data-v-31314cb6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).midrange) ? ssrLooseContain(unref(form).midrange, null) : unref(form).midrange) ? " checked" : ""} data-v-31314cb6><label class="block text-xs text-gray-700" data-v-31314cb6>Mid Range</label></div><div class="flex items-center space-x-1" data-v-31314cb6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).premium) ? ssrLooseContain(unref(form).premium, null) : unref(form).premium) ? " checked" : ""} data-v-31314cb6><label class="block text-xs text-gray-700" data-v-31314cb6>Premium</label></div></div></div><div class="col-span-1 px-2 py-1 h-full box-shadow bg-gray-200" data-v-31314cb6><span class="text-xs font-semibold" data-v-31314cb6>Attributes</span><div class="mt-2 flex flex-col items-start space-y-1" data-v-31314cb6><div class="flex items-center space-x-1" data-v-31314cb6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).commercial) ? ssrLooseContain(unref(form).commercial, null) : unref(form).commercial) ? " checked" : ""} data-v-31314cb6><label class="block text-xs text-gray-700" data-v-31314cb6>Commercial</label></div><div class="flex items-center space-x-1" data-v-31314cb6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).runflat) ? ssrLooseContain(unref(form).runflat, null) : unref(form).runflat) ? " checked" : ""} data-v-31314cb6><label class="block text-xs text-gray-700" data-v-31314cb6>Run Flat</label></div><div class="flex items-center space-x-1" data-v-31314cb6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).xl) ? ssrLooseContain(unref(form).xl, null) : unref(form).xl) ? " checked" : ""} data-v-31314cb6><label class="block text-xs text-gray-700" data-v-31314cb6>XL</label></div></div></div><div class="col-span-1 px-2 h-full flex justify-end items-start" data-v-31314cb6><button class="text-xs underline text-blue-600" data-v-31314cb6>Reset to default</button></div></div></div>`);
    };
  }
};
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalStockFilter.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const LocalStockFilter = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-31314cb6"]]);
const ManageLocalStock_vue_vue_type_style_index_0_scoped_7933143d_lang = "";
const __default__$c = {
  layout: _sfc_main$1r
};
const _sfc_main$12 = /* @__PURE__ */ Object.assign(__default__$c, {
  __name: "ManageLocalStock",
  __ssrInlineRender: true,
  props: {
    selected_category: String,
    tyres: Object,
    total_stocks: Number,
    total_sold_stocks: Number,
    total_value: String,
    stock_size: Number
  },
  setup(__props) {
    const modified = ref(0);
    const copyData = ref(null);
    const copy = (data) => {
      copyData.value = data;
    };
    const x = ref(0);
    const y = ref(0);
    ref(false);
    ref(null);
    const selectionRect = ref(null);
    const selectedElements = ref(null);
    function update(event) {
      x.value = event.pageX;
      y.value = event.pageY;
    }
    onMounted(() => window.addEventListener("mousemove", update));
    onUnmounted(() => window.removeEventListener("mousemove", update));
    const copied = ref(false);
    const copiedElement = ref(null);
    const bgTool = ref(null);
    const txtTool = ref(null);
    function closeOtherTools(_tool) {
      if (_tool === "bgTool" && txtTool.value.open) {
        txtTool.value.closeColorPicker();
      } else if (_tool === "txtTool" && bgTool.value.open) {
        bgTool.value.closeColorPicker();
      }
    }
    function selectRow(id) {
      let row = Array.from(document.querySelectorAll('[data-id="' + id + '"]'));
      row.shift();
      selectedElements.value = row;
    }
    watch(selectedElements, (newValue) => {
      if (!newValue || !newValue.length) {
        selectionRect.value.style.width = "0px";
        selectionRect.value.style.height = "0px";
        return;
      }
      let firstEl = newValue[0].getBoundingClientRect();
      let lastEl = newValue[newValue.length - 1].getBoundingClientRect();
      let top = firstEl.top + window.scrollY;
      let left = firstEl.left + window.scrollX;
      let right = lastEl.left + lastEl.width + window.scrollX;
      let bottom = lastEl.top + lastEl.height + window.scrollY;
      selectionRect.value.style.top = top + "px";
      selectionRect.value.style.left = left + "px";
      selectionRect.value.style.width = right - left + "px";
      selectionRect.value.style.height = bottom - top + "px";
    });
    function selectInserted(id) {
      selectedElements.value = document.querySelectorAll('[data-id="' + id + '"]');
      change();
    }
    function change() {
      modified.value++;
    }
    function colorBackground(color) {
      if (!selectedElements.value)
        return;
      let result = [];
      selectedElements.value.forEach(function(el) {
        result.push({
          id: el.getAttribute("data-id"),
          column: el.getAttribute("data-column") + "_bg"
        });
      });
      router.post("/admin/inventory/color", {
        color,
        data: result
      }, {
        preserveScroll: true,
        preserveState: true
      });
    }
    function colorText(color) {
      if (!selectedElements.value.length)
        return;
      let result = [];
      selectedElements.value.forEach(function(el) {
        result.push({
          id: el.getAttribute("data-id"),
          column: el.getAttribute("data-column") + "_font"
        });
      });
      router.post("/admin/inventory/color", {
        color,
        data: result
      }, {
        preserveScroll: true,
        preserveState: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-7933143d${_scopeId}>Manage Local Stock</title>`);
          } else {
            return [
              createVNode("title", null, "Manage Local Stock")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-6" data-v-7933143d><div class="flex" data-v-7933143d><div class="w-[640px] h-[90px] shrink-0 grid grid-cols-2 gap-2" data-v-7933143d><div class="col-span-1 h-10 flex items-center justify-center text-center border border-black" data-v-7933143d><div class="w-2/5 h-full flex items-center justify-center bg-neutral-400" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>Stocks</span></div><div class="w-3/5 h-full flex items-center justify-center bg-neutral-200" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>${ssrInterpolate(__props.total_stocks)}</span></div></div><div class="col-span-1 h-10 flex items-center justify-center text-center border border-black" data-v-7933143d><div class="w-2/5 h-full flex items-center justify-center bg-neutral-400" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>Sold Stocks</span></div><div class="w-3/5 h-full flex items-center justify-center bg-neutral-200" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>${ssrInterpolate(__props.total_sold_stocks)}</span></div></div><div class="col-span-1 h-10 flex items-center justify-center text-center border border-black" data-v-7933143d><div class="w-2/5 h-full flex items-center justify-center bg-neutral-400" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>Value</span></div><div class="w-3/5 h-full flex items-center justify-center bg-neutral-200" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>${ssrInterpolate("£" + __props.total_value)}</span></div></div><div class="col-span-1 h-10 flex items-center justify-center text-center border border-black" data-v-7933143d><div class="w-2/5 h-full flex items-center justify-center bg-neutral-400" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>Stock Size</span></div><div class="w-3/5 h-full flex items-center justify-center bg-neutral-200" data-v-7933143d><span class="uppercase font-semibold" data-v-7933143d>${ssrInterpolate(__props.stock_size)}</span></div></div></div>`);
      _push(ssrRenderComponent(LocalStockFilter, null, null, _parent));
      _push(`</div><div class="w-full grid grid-cols-10 mb-4 mt-6" data-v-7933143d><!--[-->`);
      ssrRenderList(__props.tyres, (sizes, index) => {
        _push(`<div class="col-span-1" data-v-7933143d><button class="${ssrRenderClass({ "w-full flex items-center justify-between py-2 px-2 border-y border-l border-gray-300": true, "border-r": index === `com`, "shadow-md shadow-green-500": __props.selected_category === index })}" data-v-7933143d><span class="text-sm capitalize" data-v-7933143d>${ssrInterpolate(index)}</span><span class="text-xs px-2 py-1 bg-gray-500 rounded-full text-white" data-v-7933143d>${ssrInterpolate(sizes.length)}</span></button></div>`);
      });
      _push(`<!--]--></div><div class="mb-2 flex items-center space-x-2 w-full border border-gray-300 p-2 rounded-lg" data-v-7933143d>`);
      _push(ssrRenderComponent(_sfc_main$15, {
        onColor: colorBackground,
        onClick: ($event) => closeOtherTools("bgTool"),
        ref_key: "bgTool",
        ref: bgTool
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 16 16" data-v-7933143d${_scopeId}><path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" data-v-7933143d${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                fill: "currentColor",
                viewBox: "0 0 16 16"
              }, [
                createVNode("path", { d: "M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$15, {
        onColor: colorText,
        onClick: ($event) => closeOtherTools("txtTool"),
        ref_key: "txtTool",
        ref: txtTool
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4" data-v-7933143d${_scopeId}><path d="M211.99414,55.99512v32a4,4,0,1,1-8,0v-28h-72v136h28a4,4,0,0,1,0,8h-64a4,4,0,0,1,0-8h28v-136h-72v28a4,4,0,0,1-8,0v-32a4.0002,4.0002,0,0,1,4-4h160A4.0002,4.0002,0,0,1,211.99414,55.99512Z" data-v-7933143d${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                class: "h-4 w-4"
              }, [
                createVNode("path", { d: "M211.99414,55.99512v32a4,4,0,1,1-8,0v-28h-72v136h28a4,4,0,0,1,0,8h-64a4,4,0,0,1,0-8h28v-136h-72v28a4,4,0,0,1-8,0v-32a4.0002,4.0002,0,0,1,4-4h160A4.0002,4.0002,0,0,1,211.99414,55.99512Z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-indigo-400 grid grid-cols-22 w-full h-6 border border-gray-500" data-v-7933143d><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>#</span></div><div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Tyre Size</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Qty</span></div><div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Brand</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Price</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>T Price</span></div><div class="col-span-4 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Model</span></div><div class="col-span-4 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Notes</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Req&#39;d Qty</span></div><div class="col-span-1 flex items-center justify-center border-gray-500 h-full text-xs font-bold" data-v-7933143d><span data-v-7933143d>Sold</span></div></div><div data-v-7933143d><!--[-->`);
      ssrRenderList(__props.tyres, (sizes, index) => {
        _push(`<div style="${ssrRenderStyle(__props.selected_category && index.toLowerCase() === __props.selected_category.toLowerCase() ? null : { display: "none" })}" class="relative cursor-crosshair select-none" data-v-7933143d><!--[-->`);
        ssrRenderList(sizes, (tyre, index2) => {
          _push(`<!--[-->`);
          if (index2 !== "count") {
            _push(ssrRenderComponent(_sfc_main$19, {
              onChange: change,
              tyre,
              onCopy: copy,
              onSelectRow: selectRow,
              class: { "bg-gray-200": index2 % 2 !== 0 },
              index: index2,
              key: tyre.id
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--><div class="absolute border border-blue-500 z-50 pointer-events-none" style="${ssrRenderStyle({ "top": "0", "left": "0", "height": "0", "width": "0", "background-color": "rgba(59, 130, 246, 0.3)" })}" data-v-7933143d></div><div class="selection-rect pointer-events-none" data-v-7933143d></div></div>`);
      _push(ssrRenderComponent(_sfc_main$17, {
        copyData: copyData.value,
        onInserted: selectInserted
      }, null, _parent));
      _push(`</div><div class="min-h-[50vh]" data-v-7933143d></div>`);
      if (copied.value) {
        _push(`<div class="p-1 flex fixed" style="${ssrRenderStyle({ "left": copiedElement.value.getBoundingClientRect().left + "px", "top": copiedElement.value.getBoundingClientRect().bottom + "px" })}" data-v-7933143d><div class="w-auto h-12 bg-white shadow-lg rounded flex" data-v-7933143d><div class="bg-green-400 w-2 h-full" data-v-7933143d></div><div class="px-2 flex flex-col justify-center" data-v-7933143d><span class="text-sm font-medium" data-v-7933143d>Success</span><span class="text-xs text-gray-600" data-v-7933143d>Copied to clipboard</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ManageLocalStock.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const ManageLocalStock = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-7933143d"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ManageLocalStock
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$11 = {
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    text: {
      required: false
    },
    value: {
      required: false,
      type: String
    },
    options: {
      required: true,
      type: Array
    },
    editable: {
      required: false,
      type: Boolean
    },
    property: {
      required: false,
      type: String
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const editMode = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center border-gray-300 h-full text-xs group" }, _attrs))}>`);
      if (!editMode.value) {
        _push(`<span>${ssrInterpolate(__props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable) {
        _push(`<select${ssrRenderAttr("value", __props.value)} class="${ssrRenderClass([{ "hidden": !editMode.value }, "bg-transparent border border-black rounded-sm w-4/5 text-center"])}"><!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable && !editMode.value) {
        _push(`<button class="absolute right-1 hidden group-hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50"><button class="bg-green-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path></svg></button><button class="bg-red-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalTyreFields/Select.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _sfc_main$10 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    value: {
      required: false
    },
    editable: {
      required: false,
      type: Boolean
    },
    property: {
      required: false,
      type: String
    }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const editMode = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center border-gray-300 h-full text-xs group" }, _attrs))}>`);
      if (!editMode.value) {
        _push(`<span>`);
        if (__props.value) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (!__props.value) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable) {
        _push(`<input${ssrIncludeBooleanAttr(__props.value) ? " checked" : ""} type="checkbox" class="${ssrRenderClass([{ "hidden": !editMode.value }, "bg-transparent border border-black rounded-sm w-4/5 text-center"])}">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.editable && !editMode.value) {
        _push(`<button class="absolute right-1 hidden group-hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full flex items-center z-50"><button class="bg-green-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M103.99951,190.00012a5.98047,5.98047,0,0,1-4.24219-1.75732l-56-55.99561a5.99971,5.99971,0,1,1,8.48438-8.48535l51.75781,51.75342L211.75732,67.76184a5.99971,5.99971,0,1,1,8.48438,8.48535l-112,111.99561A5.98045,5.98045,0,0,1,103.99951,190.00012Z"></path></svg></button><button class="bg-red-400 w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4"><path d="M204.24268,195.75732a6.00006,6.00006,0,0,1-8.48536,8.48536L128,136.48535,60.24268,204.24268a6.00006,6.00006,0,0,1-8.48536-8.48536L119.51465,128,51.75732,60.24268a6.00006,6.00006,0,0,1,8.48536-8.48536L128,119.51465l67.75732-67.75733a6.00006,6.00006,0,0,1,8.48536,8.48536L136.48535,128Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/LocalTyreFields/Checkbox.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _sfc_main$$ = {
  __name: "AdminTyre",
  __ssrInlineRender: true,
  props: {
    tyre: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    selectedTyre: {
      type: Number,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const selected = computed(() => {
      return props.selectedTyre === props.tyre.id;
    });
    const form = useForm({
      width: props.tyre.width,
      profile: props.tyre.profile,
      rim: props.tyre.rim,
      commercial: props.tyre.commercial,
      brand: props.tyre.brand,
      model: props.tyre.model,
      quality: props.tyre.quality,
      speed: props.tyre.speed,
      usage: props.tyre.usage,
      season: props.tyre.season,
      extra_load: props.tyre.extra_load,
      runflat: props.tyre.runflat,
      fuel: props.tyre.fuel,
      wet: props.tyre.wet,
      noise: props.tyre.noise,
      price: props.tyre.price,
      price_offer: props.tyre.price_offer
    });
    function update(property, value) {
      switch (property) {
        case "size":
          form.width = value.width;
          form.profile = value.profile;
          form.rim = value.rim;
          form.commercial = value.commercial;
          break;
        case "brand":
          form.brand = value;
          break;
        case "model":
          form.model = value;
          break;
        case "quality":
          form.quality = value;
          break;
        case "speed":
          form.speed = value;
          break;
        case "usage":
          form.usage = value;
          break;
        case "season":
          form.season = value;
          break;
        case "extra_load":
          form.extra_load = value;
          break;
        case "runflat":
          form.runflat = value;
          break;
        case "fuel":
          form.fuel = value;
          break;
        case "wet":
          form.wet = value;
          break;
        case "noise":
          form.noise = value;
          break;
        case "price":
          form.price = value;
          break;
        case "price_offer":
          form.price_offer = value;
          break;
      }
      form.post("/admin/products/" + props.tyre.id, {
        preserveState: true,
        preserveScroll: true
      });
    }
    function copySizeToClipboard(e) {
      e.preventDefault();
      navigator.clipboard.writeText(form.width + "  " + form.profile + "  " + form.rim);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([{ "bg-gray-200": __props.index % 2 !== 0 && !selected.value && __props.tyre.enabled, "bg-blue-500/50": selected.value && __props.tyre.enabled, "bg-red-300": !__props.tyre.enabled }, "relative grid grid-cols-27 h-7 w-full border-x border-gray-300 font-semibold"])}">`);
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-1 border font-normal",
        text: __props.tyre.id,
        editable: false
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1d, {
        class: "col-span-2 border",
        text: unref(form).width + "/" + unref(form).profile + " R" + unref(form).rim + (unref(form).commercial ? "C" : ""),
        width: unref(form).width,
        profile: unref(form).profile,
        rim: unref(form).rim,
        commercial: unref(form).commercial,
        editable: true,
        onUpdate: update,
        onContextmenu: copySizeToClipboard
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1c, {
        class: "col-span-3 border",
        text: unref(form).brand,
        value: unref(form).brand,
        editable: true,
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-5 border",
        text: unref(form).model,
        value: unref(form).model,
        editable: true,
        property: "model",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$11, {
        class: "col-span-2 border capitalize",
        text: unref(form).quality,
        value: unref(form).quality,
        options: ["budget", "midrange", "premium"],
        editable: true,
        property: "quality",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-1 border capitalize",
        text: unref(form).speed,
        value: unref(form).speed,
        editable: true,
        property: "speed",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$11, {
        class: "col-span-2 border capitalize",
        text: unref(form).usage,
        value: unref(form).usage,
        options: ["passenger", "4x4", "passenger_4x4", "commercial"],
        editable: true,
        property: "usage",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$11, {
        class: "col-span-2 border capitalize",
        text: unref(form).season,
        value: unref(form).season,
        options: ["none", "summer", "winter", "all-season"],
        editable: true,
        property: "season",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        class: "col-span-1 border",
        value: unref(form).extra_load,
        editable: true,
        property: "extra_load",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        class: "col-span-1 border",
        value: unref(form).runflat,
        editable: true,
        property: "runflat",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$11, {
        class: "col-span-1 border uppercase",
        text: unref(form).fuel,
        value: unref(form).fuel,
        options: ["A", "B", "C", "D", "E", "F", "G"],
        editable: true,
        property: "fuel",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$11, {
        class: "col-span-1 border capitalize",
        text: unref(form).wet,
        value: unref(form).wet,
        options: ["A", "B", "C", "D", "E"],
        editable: true,
        property: "wet",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$11, {
        class: "col-span-1 border capitalize",
        text: unref(form).noise,
        value: unref(form).noise,
        options: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77],
        editable: true,
        property: "noise",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-2 border font-normal",
        text: __props.tyre.price,
        value: __props.tyre.price,
        editable: true,
        property: "price",
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: "col-span-2 border font-normal",
        text: __props.tyre.price_offer,
        value: __props.tyre.price_offer,
        editable: true,
        property: "price_offer",
        onUpdate: update
      }, null, _parent));
      if (selected.value) {
        _push(`<div class="absolute right-0 bottom-0 translate-y-full bg-white p-1 flex flex-row space-x-2 ml-auto z-50">`);
        _push(ssrRenderComponent(unref(Link), mergeProps({
          href: "/admin/tyres/create?copy=" + __props.tyre.id,
          class: "block rounded bg-gray-400 text-white sm:text-sm text-xs font-semibold"
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Copy Tyre")), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><rect x="8" y="8" width="12" height="12" rx="2"${_scopeId}></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  stroke: "#ffffff",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createVNode("rect", {
                    x: "8",
                    y: "8",
                    width: "12",
                    height: "12",
                    rx: "2"
                  }),
                  createVNode("path", { d: "M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        if (__props.tyre.enabled) {
          _push(`<button${ssrRenderAttrs(mergeProps({ class: "block rounded bg-yellow-500 text-white sm:text-sm text-xs font-semibold" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Disable Tyre")))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>`);
        } else {
          _push(`<button${ssrRenderAttrs(mergeProps({ class: "block rounded bg-green-400 text-white sm:text-sm text-xs font-semibold" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Enable Tyre")))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>`);
        }
        _push(`<button${ssrRenderAttrs(mergeProps({ class: "block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Delete Tyre")))}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminTyre.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const ManageProducts_vue_vue_type_style_index_0_scoped_b2a21aae_lang = "";
const __default__$b = {
  layout: _sfc_main$1r
};
const _sfc_main$_ = /* @__PURE__ */ Object.assign(__default__$b, {
  __name: "ManageProducts",
  __ssrInlineRender: true,
  props: {
    tyres: Object
  },
  setup(__props) {
    const selectedCategory = ref(null);
    const selectedTyre = ref(null);
    function selectTyre(id) {
      selectedTyre.value = id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-b2a21aae${_scopeId}>Manage Products</title>`);
          } else {
            return [
              createVNode("title", null, "Manage Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4" data-v-b2a21aae>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/admin/bulk-adjust-products",
        class: "text-sm underline text-blue-500 italic"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Bulk Adjust Products`);
          } else {
            return [
              createTextVNode("Bulk Adjust Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full grid grid-cols-10 mb-8 mt-1" data-v-b2a21aae><!--[-->`);
      ssrRenderList(__props.tyres, (category, index) => {
        _push(`<div class="col-span-1" data-v-b2a21aae><button class="${ssrRenderClass({ "w-full flex items-center justify-between py-2 px-2 border-y border-l border-gray-300": true, "border-r": index === `Com`, "shadow-md shadow-green-500": selectedCategory.value === index })}" data-v-b2a21aae><span class="text-sm" data-v-b2a21aae>${ssrInterpolate(index)}</span><span class="text-xs px-2 py-1 bg-gray-500 rounded-full text-white" data-v-b2a21aae>${ssrInterpolate(category.count)}</span></button></div>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_click_outside, () => selectTyre(null)))} data-v-b2a21aae><!--[-->`);
      ssrRenderList(__props.tyres, (sizes, index) => {
        _push(`<!--[-->`);
        if (index === selectedCategory.value) {
          _push(`<!--[-->`);
          ssrRenderList(sizes, (ctyres, ind) => {
            _push(`<div data-v-b2a21aae>`);
            if (ind !== "count") {
              _push(`<div data-v-b2a21aae><div class="bg-indigo-400 grid grid-cols-27 w-full h-6 border border-gray-500" data-v-b2a21aae><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>#</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Tyre Size</span></div><div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Brand</span></div><div class="col-span-5 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Model</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Quality</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Speed</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Usage</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Season</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>XL</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Runflat</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2" fill="currentColor" data-v-b2a21aae><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z" data-v-b2a21aae></path></svg></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16" data-v-b2a21aae><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" data-v-b2a21aae></path></svg></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16" data-v-b2a21aae><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" data-v-b2a21aae></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" data-v-b2a21aae></path><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" data-v-b2a21aae></path></svg></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Price</span></div><div class="col-span-2 flex items-center justify-center border-gray-500 h-full text-xs font-bold" data-v-b2a21aae><span data-v-b2a21aae>Price (4+)</span></div></div><!--[-->`);
              ssrRenderList(ctyres, (tyre, index2) => {
                _push(ssrRenderComponent(_sfc_main$$, {
                  tyre,
                  index: index2,
                  key: tyre.id,
                  onSelectTyre: selectTyre,
                  selectedTyre: selectedTyre.value
                }, null, _parent));
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ManageProducts.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const ManageProducts = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-b2a21aae"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ManageProducts
}, Symbol.toStringTag, { value: "Module" }));
const ManageTyreSizes_vue_vue_type_style_index_0_scoped_59259ce9_lang = "";
const __default__$a = {
  layout: _sfc_main$1r
};
const _sfc_main$Z = /* @__PURE__ */ Object.assign(__default__$a, {
  __name: "ManageTyreSizes",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    sizes: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    const form = useForm({
      width: null,
      profile: null,
      rim: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-59259ce9${_scopeId}>Manage Tyre Sizes</title>`);
          } else {
            return [
              createVNode("title", null, "Manage Tyre Sizes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-59259ce9><div class="lg:w-1/3 w-full mx-auto pt-8" data-v-59259ce9><p class="font-semibold text-3xl text-center mb-8" data-v-59259ce9>Manage Tyre Sizes</p><div class="grid grid-cols-12 space-x-2 mb-4" data-v-59259ce9><div class="col-span-3" data-v-59259ce9><input${ssrRenderAttr("value", unref(form).width)} type="number" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full" placeholder="Width" data-v-59259ce9></div><div class="col-span-3" data-v-59259ce9><input${ssrRenderAttr("value", unref(form).profile)} type="number" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full" placeholder="Profile" data-v-59259ce9></div><div class="col-span-3" data-v-59259ce9><input${ssrRenderAttr("value", unref(form).rim)} type="number" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full" placeholder="Rim" data-v-59259ce9></div><div class="col-span-3" data-v-59259ce9><button class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.375rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-59259ce9>`);
      if (!unref(form).processing) {
        _push(`<span data-v-59259ce9>Add</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><div class="flex flex-col space-y-2" data-v-59259ce9><!--[-->`);
      ssrRenderList(__props.sizes, (size) => {
        _push(`<div class="flex flex-row items-center justify-between bg-gray-100 py-2 px-2 rounded-lg" data-v-59259ce9><span class="text-sm font-semibold" data-v-59259ce9>${ssrInterpolate(size.width + "/" + size.profile + " R" + size.rim)}</span><div class="flex flex-row space-x-2" data-v-59259ce9><button class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-1 px-3" data-v-59259ce9><svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="16" height="16" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-59259ce9><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-59259ce9></path><line x1="4" y1="7" x2="20" y2="7" data-v-59259ce9></line><line x1="10" y1="11" x2="10" y2="17" data-v-59259ce9></line><line x1="14" y1="11" x2="14" y2="17" data-v-59259ce9></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" data-v-59259ce9></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" data-v-59259ce9></path></svg></button></div></div>`);
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-59259ce9>${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]" data-v-59259ce9></div><!--]-->`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ManageTyreSizes.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const ManageTyreSizes = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-59259ce9"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ManageTyreSizes
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Y = {
  __name: "AdminOrder",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      required: true
    },
    selectedOrder: {
      type: Number,
      required: false
    },
    index: {
      type: Number,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const selected = computed(() => {
      return props.selectedOrder === props.order.id;
    });
    useForm({
      width: null
    });
    const customerDetailsOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(_attrs)}><div${ssrRenderAttrs(mergeProps({
        class: ["relative grid grid-cols-24 h-7 w-full border-x border-gray-300 font-semibold", { "bg-gray-200": __props.index % 2 !== 0 && !selected.value, "bg-blue-500/50": selected.value }]
      }, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => customerDetailsOpen.value = false)))}><div class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.id)}</span></div><div class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.tyres[0].id)}</span></div><div class="col-span-3 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.user.timeslot.slot_from + " - " + __props.order.user.timeslot.slot_to + " | " + __props.order.user.timeslot.day + "/" + __props.order.user.timeslot.month + "/" + __props.order.user.timeslot.year)}</span></div><div class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.tyres[0].pivot.quantity)}</span></div><div class="col-span-5 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><button class="flex items-center"><span class="mr-1">${ssrInterpolate(__props.order.user.firstname)} ${ssrInterpolate(__props.order.user.lastname)}</span>`);
      if (!customerDetailsOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w36 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path></svg>`);
      }
      _push(`</button>`);
      if (customerDetailsOpen.value) {
        _push(`<div class="absolute bottom-0 bg-white w-full translate-y-full p-2 z-10"><div>Email: ${ssrInterpolate(__props.order.user.email)}</div><div>Phone: ${ssrInterpolate(__props.order.user.phone)}</div><div>Registration: ${ssrInterpolate(__props.order.user.registration)}</div><div>Address: ${ssrInterpolate(__props.order.user.address_1)}</div><div>Town: ${ssrInterpolate(__props.order.user.town)}</div><div>Postcode: ${ssrInterpolate(__props.order.user.postcode)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-span-3 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.user.fitting_address_1)}</span></div><div class="col-span-2 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.user.fitting_town)}</span></div><div class="col-span-2 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(__props.order.user.fitting_postcode)}</span></div><div class="col-span-3 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate(new Date(__props.order.created_at).toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true }))}</span></div><div class="col-span-1 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate((__props.order.total / 100).toFixed(2))}</span></div><div class="col-span-2 border font-normal relative flex items-center justify-center border-gray-300 h-full text-xs group"><span>${ssrInterpolate((__props.order.remaining / 100).toFixed(2))}</span></div>`);
      if (selected.value) {
        _push(`<div class="absolute right-0 bottom-0 translate-y-full bg-white flex flex-row space-x-2 ml-auto z-50"><button${ssrRenderAttrs(mergeProps({ class: "block rounded p-1 text-black sm:text-sm text-xs font-semibold" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "PDF Invoice")))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/AdminOrder.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const __default__$9 = {
  layout: _sfc_main$1r
};
const _sfc_main$X = /* @__PURE__ */ Object.assign(__default__$9, {
  __name: "Orders",
  __ssrInlineRender: true,
  props: {
    orders: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const selectedOrder = ref(null);
    function selectOrder(id) {
      selectedOrder.value = id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Orders</title>`);
          } else {
            return [
              createVNode("title", null, "Orders")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4"><div class="bg-indigo-400 grid grid-cols-24 w-full h-6 border border-gray-500"><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>#</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Tyre #</span></div><div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Date &amp; Time</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Qty</span></div><div class="col-span-5 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Customer</span></div><div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Fitting Address</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Fitting Town</span></div><div class="col-span-2 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Fitting Postcode</span></div><div class="col-span-3 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Transaction Date</span></div><div class="col-span-1 flex items-center justify-center border-r border-gray-500 h-full text-xs font-bold"><span>Paid</span></div><div class="col-span-2 flex items-center justify-center border-gray-500 h-full text-xs font-bold"><span>Remaining</span></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_click_outside, () => selectOrder(null)))}><!--[-->`);
      ssrRenderList(__props.orders, (order, index) => {
        _push(ssrRenderComponent(_sfc_main$Y, {
          order,
          index,
          key: index,
          onSelectOrder: selectOrder,
          selectedOrder: selectedOrder.value
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="hidden mt-12 px-10"><!--[-->`);
      ssrRenderList(__props.orders, (order) => {
        _push(`<div><div class="w-full mt-2 px-2 py-3 cursor-pointer flex items-center justify-start border border-gray-300 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass({ "h-6 w-6 mr-2": true, "rotate-180": selectedOrder.value === order.id })}" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="text-lg mr-2 font-semibold">${ssrInterpolate(order.user.firstname)}</span><span class="text-lg mr-2 font-light">${ssrInterpolate(order.user.timeslot.slot_from)} - ${ssrInterpolate(order.user.timeslot.slot_to)} | ${ssrInterpolate(order.user.timeslot.day)}/${ssrInterpolate(order.user.timeslot.month)}/${ssrInterpolate(order.user.timeslot.year)}</span><div class="flex flex-row space-x-2 ml-auto"><a${ssrRenderAttr("href", "/admin/orders/" + order.id + "/pdf")} target="_blank" class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-2 px-4"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 8.25C12.0625 8.25 11.75 8.59375 11.75 9C11.75 9.4375 12.0625 9.75 12.5 9.75C12.9062 9.75 13.25 9.4375 13.25 9C13.25 8.59375 12.9062 8.25 12.5 8.25ZM13.5 5.5V3.125C13.5 2.75 13.3125 2.34375 13.0312 2.0625L11.4375 0.46875C11.1562 0.1875 10.75 0 10.375 0H3.4375C2.90625 0 2.5 0.46875 2.5 1V5.5C1.09375 5.5 0 6.625 0 8V12C0 12.2812 0.21875 12.5 0.5 12.5H2.5V15.5C2.5 15.7812 2.71875 16 3 16H13C13.25 16 13.5 15.7812 13.5 15.5V12.5H15.5C15.75 12.5 16 12.2812 16 12V8C16 6.625 14.875 5.5 13.5 5.5ZM4 1.5H10V3C10 3.28125 10.2188 3.5 10.5 3.5H12V5.5H4V1.5ZM12 14.5H4V12.5H12V14.5ZM14.5 11H1.5V8C1.5 7.46875 1.9375 7 2.5 7H13.5C14.0312 7 14.5 7.46875 14.5 8V11Z" fill="#ffffff"></path></svg></a></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Orders.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      default: "",
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        class: "py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Form/Input.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = {
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium sm:text-sm text-xs text-gray-700" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(` `);
      if (__props.required) {
        _push(`<span class="text-red-500">*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Form/Label.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const PDFInvoice_vue_vue_type_style_index_0_scoped_4c5d6033_lang = "";
const __default__$8 = {
  layout: _sfc_main$1r
};
const _sfc_main$U = /* @__PURE__ */ Object.assign(__default__$8, {
  __name: "PDFInvoice",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    details: {
      type: Object,
      required: false,
      default: {
        date: null,
        sender: null,
        name: null,
        phone: null,
        email: null,
        address: null,
        town: null,
        postcode: null,
        fitting_address: null,
        fitting_town: null,
        fitting_postcode: null,
        registration: null,
        fitting: null,
        callout: null,
        disposal: null,
        callout_type: null,
        tyres: [{ name: null, qty: null, total: null }],
        items: [{ name: null, qty: null, total: null }],
        payment_type: null,
        amount_to_pay: null,
        recipient_email: null,
        notes: null
      }
    }
  },
  setup(__props) {
    const props = __props;
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    const useCustomerEmail = ref(true);
    ref([{ name: null, qty: null, total: null }]);
    const form = useForm({
      date: props.details.date,
      sender: props.details.sender,
      name: props.details.name,
      phone: props.details.phone,
      email: props.details.email,
      address: props.details.address,
      town: props.details.town,
      postcode: props.details.postcode,
      fitting_address: props.details.fitting_address,
      fitting_town: props.details.fitting_town,
      fitting_postcode: props.details.fitting_postcode,
      registration: props.details.registration,
      fitting: props.details.fitting,
      callout: props.details.callout,
      disposal: props.details.disposal,
      callout_type: props.details.callout_type,
      tyres: props.details.tyres || [{ name: null, qty: null, total: null }],
      items: props.details.items || [{ name: null, qty: null, total: null }],
      payment_type: props.details.payment_type,
      amount_to_pay: props.details.amount_to_pay,
      recipient_email: props.details.recipient_email,
      notes: props.details.notes
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-4c5d6033${_scopeId}>PDF Invoice</title>`);
          } else {
            return [
              createVNode("title", null, "PDF Invoice")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-4c5d6033><div class="w-full mx-auto pt-8" data-v-4c5d6033><div class="flex justify-center items-center space-x-4 mb-8" data-v-4c5d6033><p class="font-semibold text-3xl text-center" data-v-4c5d6033>PDF Invoice</p><button class="relative mt-auto w-24 rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out" data-v-4c5d6033><span data-v-4c5d6033>Test</span></button></div><div class="grid grid-cols-12 gap-6" data-v-4c5d6033><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-4c5d6033><span class="block font-semibold text-lg text-gray-700" data-v-4c5d6033>Customer Details</span><div class="mt-4" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Name/Company`);
          } else {
            return [
              createTextVNode("Name/Company")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        type: "text",
        id: "name"
      }, null, _parent));
      if (__props.errors.name) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Phone`);
          } else {
            return [
              createTextVNode("Phone")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        type: "text",
        id: "phone"
      }, null, _parent));
      if (__props.errors.phone) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.phone)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "text",
        id: "email"
      }, null, _parent));
      if (__props.errors.email) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Address`);
          } else {
            return [
              createTextVNode("Address")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event,
        type: "text",
        id: "address",
        class: "py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
      }, null, _parent));
      _push(`</div><div class="flex items-start space-x-2 mt-2" data-v-4c5d6033><div class="w-1/2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Town/City`);
          } else {
            return [
              createTextVNode("Town/City")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).town,
        "onUpdate:modelValue": ($event) => unref(form).town = $event,
        type: "text",
        id: "town"
      }, null, _parent));
      if (__props.errors.town) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.town)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-1/2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Postcode`);
          } else {
            return [
              createTextVNode("Postcode")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).postcode,
        "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
        type: "text",
        id: "postcode",
        class: "uppercase"
      }, null, _parent));
      if (__props.errors.postcode) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.postcode)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-4c5d6033><span class="block font-semibold text-lg text-gray-700" data-v-4c5d6033>Fitting Details</span><div class="mt-4" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Address`);
          } else {
            return [
              createTextVNode("Address")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).fitting_address,
        "onUpdate:modelValue": ($event) => unref(form).fitting_address = $event,
        type: "text",
        id: "fitting_address"
      }, null, _parent));
      if (__props.errors.fitting_address) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.fitting_address)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-start space-x-2 mt-2" data-v-4c5d6033><div class="w-1/2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Town/City`);
          } else {
            return [
              createTextVNode("Town/City")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).fitting_town,
        "onUpdate:modelValue": ($event) => unref(form).fitting_town = $event,
        type: "text",
        id: "fitting_town"
      }, null, _parent));
      if (__props.errors.fitting_town) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.fitting_town)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-1/2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Postcode`);
          } else {
            return [
              createTextVNode("Postcode")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).fitting_postcode,
        "onUpdate:modelValue": ($event) => unref(form).fitting_postcode = $event,
        type: "text",
        id: "fitting_postcode",
        class: "uppercase"
      }, null, _parent));
      if (__props.errors.fitting_postcode) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.fitting_postcode)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Car Registration`);
          } else {
            return [
              createTextVNode("Car Registration")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).registration,
        "onUpdate:modelValue": ($event) => unref(form).registration = $event,
        type: "text",
        id: "registration",
        class: "uppercase"
      }, null, _parent));
      if (__props.errors.registration) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.registration)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Call-out Type`);
          } else {
            return [
              createTextVNode("Call-out Type")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2 flex flex-row items-center space-x-4" id="extra_load" data-v-4c5d6033><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="next_day" value="Next Day"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).callout_type, "Next Day")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="next_day" data-v-4c5d6033>Next Day</label></div><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="same_day" value="Same Day"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).callout_type, "Same Day")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="same_day" data-v-4c5d6033>Same Day</label></div><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="emergency" value="Emergency"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).callout_type, "Emergency")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="emergency" data-v-4c5d6033>Emergency</label></div></div>`);
      if (__props.errors.callout_type) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.callout_type)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-4c5d6033><span class="block font-semibold text-lg text-gray-700" data-v-4c5d6033>Tyre Details</span><div class="relative mt-4" data-v-4c5d6033><div class="absolute -right-6 bottom-2" data-v-4c5d6033><button class="flex items-center justify-center p-0 m-0" data-v-4c5d6033><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-4c5d6033><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-v-4c5d6033></path></svg></button></div><div class="flex items-start space-x-2" data-v-4c5d6033><div class="w-4/6" data-v-4c5d6033><span class="block font-medium sm:text-sm text-xs text-gray-700" data-v-4c5d6033> Tyre </span></div><div class="w-1/6" data-v-4c5d6033><span class="block font-medium sm:text-sm text-xs text-gray-700" data-v-4c5d6033> Qty </span></div><div class="w-1/6" data-v-4c5d6033><span class="block font-medium sm:text-sm text-xs text-gray-700" data-v-4c5d6033> Total </span></div></div><!--[-->`);
      ssrRenderList(unref(form).tyres, (tyre, index) => {
        _push(`<div class="relative flex items-start" data-v-4c5d6033><button class="absolute -left-5 bottom-2.5 text-red-500 flex items-center justify-center p-0 m-0" data-v-4c5d6033><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-4c5d6033><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-4c5d6033></path></svg></button><div class="w-4/6 mr-2" data-v-4c5d6033>`);
        _push(ssrRenderComponent(_sfc_main$W, {
          modelValue: tyre.name,
          "onUpdate:modelValue": ($event) => tyre.name = $event,
          type: "text"
        }, null, _parent));
        _push(`</div><div class="w-1/6 mr-2" data-v-4c5d6033>`);
        _push(ssrRenderComponent(_sfc_main$W, {
          modelValue: tyre.qty,
          "onUpdate:modelValue": ($event) => tyre.qty = $event,
          type: "number"
        }, null, _parent));
        _push(`</div><div class="w-1/6" data-v-4c5d6033>`);
        _push(ssrRenderComponent(_sfc_main$W, {
          modelValue: tyre.total,
          "onUpdate:modelValue": ($event) => tyre.total = $event,
          type: "number",
          placeholder: "£"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-4c5d6033><span class="block font-semibold text-lg text-gray-700" data-v-4c5d6033>Service Charges</span><div class="relative mt-4" data-v-4c5d6033><div class="absolute -right-6 bottom-2" data-v-4c5d6033><button class="flex items-center justify-center p-0 m-0" data-v-4c5d6033><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-4c5d6033><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" data-v-4c5d6033></path></svg></button></div><div class="flex items-start space-x-2" data-v-4c5d6033><div class="w-4/6" data-v-4c5d6033><span class="block font-medium sm:text-sm text-xs text-gray-700" data-v-4c5d6033> Extra Service </span></div><div class="w-1/6" data-v-4c5d6033><span class="block font-medium sm:text-sm text-xs text-gray-700" data-v-4c5d6033> Qty </span></div><div class="w-1/6" data-v-4c5d6033><span class="block font-medium sm:text-sm text-xs text-gray-700" data-v-4c5d6033> Total </span></div></div><!--[-->`);
      ssrRenderList(unref(form).items, (item, index) => {
        _push(`<div class="relative flex items-start" data-v-4c5d6033><button class="absolute -left-5 bottom-2.5 text-red-500 flex items-center justify-center p-0 m-0" data-v-4c5d6033><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-4c5d6033><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-4c5d6033></path></svg></button><div class="w-4/6 mr-2" data-v-4c5d6033>`);
        _push(ssrRenderComponent(_sfc_main$W, {
          modelValue: item.name,
          "onUpdate:modelValue": ($event) => item.name = $event,
          type: "text"
        }, null, _parent));
        _push(`</div><div class="w-1/6 mr-2" data-v-4c5d6033>`);
        _push(ssrRenderComponent(_sfc_main$W, {
          modelValue: item.qty,
          "onUpdate:modelValue": ($event) => item.qty = $event,
          type: "number"
        }, null, _parent));
        _push(`</div><div class="w-1/6" data-v-4c5d6033>`);
        _push(ssrRenderComponent(_sfc_main$W, {
          modelValue: item.total,
          "onUpdate:modelValue": ($event) => item.total = $event,
          type: "number",
          placeholder: "£"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-2 flex flex-row items-start space-x-2" data-v-4c5d6033><div class="w-1/3" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitting`);
          } else {
            return [
              createTextVNode("Fitting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).fitting,
        "onUpdate:modelValue": ($event) => unref(form).fitting = $event,
        type: "text",
        id: "fitting",
        placeholder: "£"
      }, null, _parent));
      _push(`</div><div class="w-1/3" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Call-out`);
          } else {
            return [
              createTextVNode("Call-out")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).callout,
        "onUpdate:modelValue": ($event) => unref(form).callout = $event,
        type: "text",
        id: "callout",
        placeholder: "£"
      }, null, _parent));
      _push(`</div><div class="w-1/3" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tyre Disposal`);
          } else {
            return [
              createTextVNode("Tyre Disposal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).disposal,
        "onUpdate:modelValue": ($event) => unref(form).disposal = $event,
        type: "text",
        id: "disposal",
        placeholder: "£"
      }, null, _parent));
      _push(`</div></div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Payment Type`);
          } else {
            return [
              createTextVNode("Payment Type")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2 flex flex-row items-center space-x-4" id="payment_type" data-v-4c5d6033><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="cash" value="Cash"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).payment_type, "Cash")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="cash" data-v-4c5d6033>Cash</label></div><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="card" value="Card"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).payment_type, "Card")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="card" data-v-4c5d6033>Card</label></div><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="bank_transfer" value="Bank Transfer"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).payment_type, "Bank Transfer")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="bank_transfer" data-v-4c5d6033>Bank Transfer</label></div><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="unpaid" value="Unpaid"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).payment_type, "Unpaid")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="unpaid" data-v-4c5d6033>Unpaid</label></div></div>`);
      if (__props.errors.payment_type) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.payment_type)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Amount to pay`);
          } else {
            return [
              createTextVNode("Amount to pay")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).amount_to_pay,
        "onUpdate:modelValue": ($event) => unref(form).amount_to_pay = $event,
        type: "text",
        id: "amount_to_pay",
        placeholder: "£"
      }, null, _parent));
      _push(`</div></div><div class="col-span-4 flex flex-col bg-white px-6 py-4 rounded-lg shadow-lg" data-v-4c5d6033><span class="block font-semibold text-lg text-gray-700" data-v-4c5d6033>Recipient</span><div class="mt-4" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Date`);
          } else {
            return [
              createTextVNode("Date")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).date,
        "onUpdate:modelValue": ($event) => unref(form).date = $event,
        type: "date",
        id: "date"
      }, null, _parent));
      if (__props.errors.date) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.date)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sender`);
          } else {
            return [
              createTextVNode("Sender")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2 flex flex-row items-center space-x-4" id="sender" data-v-4c5d6033><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="tyresanywhere" value="tyresanywhere"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).sender, "tyresanywhere")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="tyresanywhere" data-v-4c5d6033>Tyres Anywhere LTD</label></div><div class="flex items-center space-x-1" data-v-4c5d6033><input type="radio" id="wheelfit" value="wheelfit"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).sender, "wheelfit")) ? " checked" : ""} data-v-4c5d6033><label class="block sm:text-sm text-xs text-gray-700" for="wheelfit" data-v-4c5d6033>Wheel Fit</label></div></div>`);
      if (__props.errors.sender) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.sender)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-4c5d6033>`);
      _push(ssrRenderComponent(_sfc_main$V, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Notes`);
          } else {
            return [
              createTextVNode("Notes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        modelValue: unref(form).notes,
        "onUpdate:modelValue": ($event) => unref(form).notes = $event,
        type: "text",
        id: "notes"
      }, null, _parent));
      if (__props.errors.notes) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.notes)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4" data-v-4c5d6033>`);
      _push(ssrRenderComponent(unref(SwitchGroup), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4" data-v-4c5d6033${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Switch), {
              modelValue: useCustomerEmail.value,
              "onUpdate:modelValue": ($event) => useCustomerEmail.value = $event,
              class: [useCustomerEmail.value ? "bg-green-500" : "bg-gray-200", "relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([useCustomerEmail.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"])}" data-v-4c5d6033${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: [useCustomerEmail.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"]
                    }, null, 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwitchLabel), { class: "mr-4 sm:text-base text-sm sm:text-left text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Send to customer&#39;s email`);
                } else {
                  return [
                    createTextVNode("Send to customer's email")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4" }, [
                createVNode(unref(Switch), {
                  modelValue: useCustomerEmail.value,
                  "onUpdate:modelValue": ($event) => useCustomerEmail.value = $event,
                  class: [useCustomerEmail.value ? "bg-green-500" : "bg-gray-200", "relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"]
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: [useCustomerEmail.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"]
                    }, null, 2)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                createVNode(unref(SwitchLabel), { class: "mr-4 sm:text-base text-sm sm:text-left text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Send to customer's email")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!useCustomerEmail.value) {
        _push(`<div data-v-4c5d6033><label class="block font-medium sm:text-sm text-xs text-gray-700" for="recipient_email" data-v-4c5d6033> Email <span class="text-red-500" data-v-4c5d6033>*</span></label><input${ssrRenderAttr("value", unref(form).recipient_email)} type="text" id="recipient_email" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1" data-v-4c5d6033></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.errors.recipient_email) {
        _push(`<span class="text-xs text-red-500" data-v-4c5d6033>${ssrInterpolate(__props.errors.recipient_email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="${ssrRenderClass({ "relative mt-4 w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-4c5d6033>`);
      if (!unref(form).processing) {
        _push(`<span data-v-4c5d6033>Preview Invoice</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-4c5d6033>${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]" data-v-4c5d6033></div><!--]-->`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/PDFInvoice.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const PDFInvoice = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-4c5d6033"]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PDFInvoice
}, Symbol.toStringTag, { value: "Module" }));
const PDFInvoiceConfirm_vue_vue_type_style_index_0_scoped_15c1460d_lang = "";
const __default__$7 = {
  layout: _sfc_main$1r
};
const _sfc_main$T = /* @__PURE__ */ Object.assign(__default__$7, {
  __name: "PDFInvoiceConfirm",
  __ssrInlineRender: true,
  props: {
    details: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      date: props.details.date,
      sender: props.details.sender,
      name: props.details.name,
      phone: props.details.phone,
      email: props.details.email,
      address: props.details.address,
      town: props.details.town,
      postcode: props.details.postcode,
      fitting_address: props.details.fitting_address,
      fitting_town: props.details.fitting_town,
      fitting_postcode: props.details.fitting_postcode,
      registration: props.details.registration,
      fitting: props.details.fitting,
      callout: props.details.callout,
      disposal: props.details.disposal,
      callout_type: props.details.callout_type,
      tyres: props.details.tyres,
      items: props.details.items,
      payment_type: props.details.payment_type,
      amount_to_pay: props.details.amount_to_pay,
      recipient_email: props.details.recipient_email,
      notes: props.details.notes
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-15c1460d${_scopeId}>PDF Invoice</title>`);
          } else {
            return [
              createVNode("title", null, "PDF Invoice")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<iframe class="w-screen h-screen"${ssrRenderAttr("src", "/admin/pdf-invoice/stream")} data-v-15c1460d></iframe><button class="${ssrRenderClass({ "fixed bottom-4 left-1/2 -translate-x-1/2 mt-6 w-72 rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-15c1460d>`);
      if (!unref(form).processing) {
        _push(`<span data-v-15c1460d>Create &amp; Send Invoice</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><!--]-->`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/PDFInvoiceConfirm.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const PDFInvoiceConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-15c1460d"]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PDFInvoiceConfirm
}, Symbol.toStringTag, { value: "Module" }));
const Postcodes_vue_vue_type_style_index_0_scoped_f58b5e64_lang = "";
const __default__$6 = {
  layout: _sfc_main$1r
};
const _sfc_main$S = /* @__PURE__ */ Object.assign(__default__$6, {
  __name: "Postcodes",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    postcodes: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    const form = useForm({
      outcode: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-f58b5e64${_scopeId}>Covered Postcodes</title>`);
          } else {
            return [
              createVNode("title", null, "Covered Postcodes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container" data-v-f58b5e64><div class="lg:w-1/3 w-full mx-auto pt-8" data-v-f58b5e64><p class="font-semibold text-3xl text-center mb-8" data-v-f58b5e64>Covered Postcodes</p><div class="grid grid-cols-12 space-x-2 mb-4" data-v-f58b5e64><div class="col-span-9" data-v-f58b5e64><input${ssrRenderAttr("value", unref(form).outcode)} type="text" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full" placeholder="Outcode" data-v-f58b5e64></div><div class="col-span-3" data-v-f58b5e64><button class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.375rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-f58b5e64>`);
      if (!unref(form).processing) {
        _push(`<span data-v-f58b5e64>Add</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><div class="flex flex-col space-y-2" data-v-f58b5e64><!--[-->`);
      ssrRenderList(__props.postcodes, (postcode) => {
        _push(`<div class="flex flex-row items-center justify-between bg-gray-100 py-2 px-2 rounded-lg" data-v-f58b5e64><span class="text-sm font-semibold" data-v-f58b5e64>${ssrInterpolate(postcode.outcode)}</span><div class="flex flex-row space-x-2" data-v-f58b5e64><button class="block rounded bg-red-400 text-white sm:text-sm text-xs font-semibold py-1 px-3" data-v-f58b5e64><svg xmlns="http://www.w3.org/2000/svg" id="" class="" width="16" height="16" stroke="#ffffff" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f58b5e64><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-f58b5e64></path><line x1="4" y1="7" x2="20" y2="7" data-v-f58b5e64></line><line x1="10" y1="11" x2="10" y2="17" data-v-f58b5e64></line><line x1="14" y1="11" x2="14" y2="17" data-v-f58b5e64></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" data-v-f58b5e64></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" data-v-f58b5e64></path></svg></button></div></div>`);
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle(success.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-f58b5e64>${ssrInterpolate(success.value)}</div><div class="min-h-[50vh]" data-v-f58b5e64></div><!--]-->`);
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Postcodes.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const Postcodes = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-f58b5e64"]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Postcodes
}, Symbol.toStringTag, { value: "Module" }));
const __default__$5 = {
  layout: BlankLayout
};
const _sfc_main$R = /* @__PURE__ */ Object.assign(__default__$5, {
  __name: "SearchInventory",
  __ssrInlineRender: true,
  props: {
    search_results: Object
  },
  setup(__props) {
    function sellTyre(_id) {
      console.log(_id);
      router.post("/admin/inventory/sell-tyre", {
        id: _id
      }, {
        preserveScroll: true,
        preserveState: true
      });
    }
    const sideBarOpen = ref(true);
    function sidebar(value) {
      sideBarOpen.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Search Local Stock</title>`);
          } else {
            return [
              createVNode("title", null, "Search Local Stock")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="leading-normal tracking-normal lg:min-w-[1700px]"><div class="flex flex-wrap">`);
      _push(ssrRenderComponent(_sfc_main$1s, {
        class: "lg:block hidden",
        onSidebar: sidebar
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([sideBarOpen.value ? "lg:pl-64" : "lg:pl-20", "w-full bg-gray-100 lg:min-h-[936px] transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_sfc_main$1w, { class: "lg:block hidden" }, null, _parent));
      _push(`<div class="py-6 lg:px-[20rem] px-10 bg-gray-100 mb-20"><div class="mt-20 mx-auto">`);
      _push(ssrRenderComponent(AdminLocalStockSearch, {
        onSellTyre: sellTyre,
        search_results: __props.search_results
      }, null, _parent));
      _push(`</div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/SearchInventory.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$R
}, Symbol.toStringTag, { value: "Module" }));
const ProductForm_vue_vue_type_style_index_0_scoped_2f6aede9_lang = "";
const _sfc_main$Q = {
  __name: "ProductForm",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    success: {
      type: String,
      required: false
    },
    tyre: {
      type: Object,
      required: false
    },
    tyre_brands: {
      type: Object,
      required: true
    },
    tyre_sizes: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const rating = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G"
    };
    const tyreSeasons = ["None", "All-Season", "Summer", "Winter"];
    let form;
    if (props.tyre) {
      form = useForm({
        brand: props.tyre.brand,
        model: props.tyre.model,
        size: props.tyre.width + "/" + props.tyre.profile + " R" + props.tyre.rim,
        speed: props.tyre.speed,
        fuel: props.tyre.fuel,
        wet: props.tyre.wet,
        noise: props.tyre.noise,
        quality: props.tyre.quality,
        usage: props.tyre.usage,
        extra_load: props.tyre.extra_load,
        runflat: props.tyre.runflat,
        season: props.tyre.season,
        price: props.tyre.price,
        price_offer: props.tyre.price_offer
      });
    } else {
      form = useForm({
        brand: null,
        model: null,
        size: null,
        speed: null,
        fuel: null,
        wet: null,
        noise: null,
        quality: null,
        usage: null,
        extra_load: null,
        runflat: null,
        season: null,
        price: null,
        price_offer: null
      });
    }
    const success = computed(() => usePage().props.flash.success.admin);
    watch(success, () => {
      if (success.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.admin = "";
        }, 2e3);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-6" }, _attrs))} data-v-2f6aede9>`);
      if (_ctx.$page.props.flash.success.admin) {
        _push(`<div class="col-span-12" data-v-2f6aede9><div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" data-v-2f6aede9><svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-2f6aede9><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-2f6aede9></path></svg><div data-v-2f6aede9><span class="font-medium mr-3" data-v-2f6aede9>Success alert!</span><span data-v-2f6aede9>${ssrInterpolate(_ctx.$page.props.flash.success.admin)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-2f6aede9><span class="block font-semibold text-lg text-gray-700" data-v-2f6aede9>Tyre Details</span><div class="mt-4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="brand" data-v-2f6aede9> Brand <span class="text-red-500" data-v-2f6aede9>*</span></label><div id="brand" data-v-2f6aede9>`);
      _push(ssrRenderComponent(SelectSearch, {
        modelValue: unref(form).brand,
        "onUpdate:modelValue": (newValue) => unref(form).brand = newValue,
        data: __props.tyre_brands,
        placeholder: "Select a brand",
        name: "brand"
      }, null, _parent));
      _push(`</div>`);
      if (__props.errors.brand) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.brand)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="model" data-v-2f6aede9> Model <span class="text-red-500" data-v-2f6aede9>*</span></label><input${ssrRenderAttr("value", unref(form).model)} id="model" class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1" type="text" data-v-2f6aede9>`);
      if (__props.errors.model) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.model)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-full mt-4 flex items-start space-x-4" data-v-2f6aede9><div class="w-3/4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="size" data-v-2f6aede9> Tyre Size <span class="text-red-500" data-v-2f6aede9>*</span></label><div id="size" data-v-2f6aede9>`);
      _push(ssrRenderComponent(SelectSearch, {
        modelValue: unref(form).size,
        "onUpdate:modelValue": (newValue) => unref(form).size = newValue,
        data: __props.tyre_sizes,
        placeholder: "Select a tyre size",
        name: "size"
      }, null, _parent));
      _push(`</div>`);
      if (__props.errors.size) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.size)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-1/4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="speed" data-v-2f6aede9> Speed <span class="text-red-500" data-v-2f6aede9>*</span></label><input${ssrRenderAttr("value", unref(form).speed)} id="speed" class="${ssrRenderClass([{ "border-b border-b-red-500": __props.errors.speed }, "py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"])}" type="text" data-v-2f6aede9></div></div></div><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-2f6aede9><span class="block font-semibold text-lg text-gray-700" data-v-2f6aede9>Tyre Performance</span><div class="w-full mt-4 flex items-start space-x-4" data-v-2f6aede9><div class="w-1/3" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="fuel" data-v-2f6aede9> Fuel R. <span class="text-red-500" data-v-2f6aede9>*</span></label><div id="fuel" data-v-2f6aede9>`);
      _push(ssrRenderComponent(SelectSearch, {
        modelValue: unref(form).fuel,
        "onUpdate:modelValue": (newValue) => unref(form).fuel = newValue,
        data: rating,
        error: __props.errors.fuel,
        placeholder: "Fuel",
        name: "fuel"
      }, null, _parent));
      _push(`</div></div><div class="w-1/3" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="wet" data-v-2f6aede9> Wet Grip R. <span class="text-red-500" data-v-2f6aede9>*</span></label><div id="wet" data-v-2f6aede9>`);
      _push(ssrRenderComponent(SelectSearch, {
        modelValue: unref(form).wet,
        "onUpdate:modelValue": (newValue) => unref(form).wet = newValue,
        data: rating,
        error: __props.errors.wet,
        placeholder: "Wet Grip",
        name: "wet"
      }, null, _parent));
      _push(`</div></div><div class="w-1/3" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="noise" data-v-2f6aede9> Noise Lvl. <span class="text-red-500" data-v-2f6aede9>*</span></label><input${ssrRenderAttr("value", unref(form).noise)} id="noise" class="${ssrRenderClass([{ "border-b border-b-red-500": __props.errors.noise }, "py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"])}" type="number" data-v-2f6aede9></div></div><div class="mt-4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="quality" data-v-2f6aede9> Tyre Quality <span class="text-red-500" data-v-2f6aede9>*</span></label><div class="mt-2 flex flex-row items-center space-x-4" id="quality" data-v-2f6aede9><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="budget"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).quality, "budget")) ? " checked" : ""} value="budget" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="budget" data-v-2f6aede9>Budget</label></div><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="midrange"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).quality, "midrange")) ? " checked" : ""} value="midrange" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="midrange" data-v-2f6aede9>Mid-range</label></div><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="premium"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).quality, "premium")) ? " checked" : ""} value="premium" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="premium" data-v-2f6aede9>Premium</label></div></div>`);
      if (__props.errors.quality) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.quality)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="usage" data-v-2f6aede9> Tyre Usage <span class="text-red-500" data-v-2f6aede9>*</span></label><div class="mt-2 flex flex-row flex-wrap items-center" id="usage" data-v-2f6aede9><div class="flex items-center space-x-1 pr-4" data-v-2f6aede9><input type="radio" id="passenger"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).usage, "passenger")) ? " checked" : ""} value="passenger" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="passenger" data-v-2f6aede9>Passenger</label></div><div class="flex items-center space-x-1 pr-4" data-v-2f6aede9><input type="radio" id="4x4"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).usage, "4x4")) ? " checked" : ""} value="4x4" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="4x4" data-v-2f6aede9>4x4</label></div><div class="flex items-center space-x-1 pr-4" data-v-2f6aede9><input type="radio" id="passenger_4x4"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).usage, "passenger_4x4")) ? " checked" : ""} value="passenger_4x4" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="passenger_4x4" data-v-2f6aede9>Passenger &amp; 4x4</label></div><div class="flex items-center space-x-1 pr-4 mt-1" data-v-2f6aede9><input type="radio" id="commercial"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).usage, "commercial")) ? " checked" : ""} value="commercial" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="commercial" data-v-2f6aede9>Commercial</label></div><div class="flex items-center space-x-1 pr-4 mt-1" data-v-2f6aede9><input type="radio" id="other"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).usage, "other")) ? " checked" : ""} value="other" data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="other" data-v-2f6aede9>Other</label></div></div>`);
      if (__props.errors.usage) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.usage)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg" data-v-2f6aede9><span class="block font-semibold text-lg text-gray-700" data-v-2f6aede9>Tyre Attributes</span><div class="flex flex-row mt-4 space-x-8" data-v-2f6aede9><div class="" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="extra_load" data-v-2f6aede9> Extra Load <span class="text-red-500" data-v-2f6aede9>*</span></label><div class="mt-2 flex flex-row items-center space-x-4" id="extra_load" data-v-2f6aede9><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="yes" value="1"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).extra_load, "1")) ? " checked" : ""} data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="yes" data-v-2f6aede9>Yes</label></div><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="no" value="0"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).extra_load, "0")) ? " checked" : ""} data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="no" data-v-2f6aede9>No</label></div></div>`);
      if (__props.errors.extra_load) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.extra_load)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="extra_load" data-v-2f6aede9> Runflat <span class="text-red-500" data-v-2f6aede9>*</span></label><div class="mt-2 flex flex-row items-center space-x-4" id="runflat" data-v-2f6aede9><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="yes_runflat" value="1"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).runflat, "1")) ? " checked" : ""} data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="yes_runflat" data-v-2f6aede9>Yes</label></div><div class="flex items-center space-x-1" data-v-2f6aede9><input type="radio" id="no_runflat" value="0"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).runflat, "0")) ? " checked" : ""} data-v-2f6aede9><label class="block sm:text-sm text-xs text-gray-700" for="no_runflat" data-v-2f6aede9>No</label></div></div>`);
      if (__props.errors.runflat) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.extra_load)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-4" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="extra_load" data-v-2f6aede9> Tyre Season <span class="text-red-500" data-v-2f6aede9>*</span></label><div class="mt-2 flex space-x-1" data-v-2f6aede9><!--[-->`);
      ssrRenderList(tyreSeasons, (season) => {
        _push(`<button class="${ssrRenderClass({ "w-fit py-1 px-2 rounded-lg whitespace-nowrap": true, "bg-white border-2 border-green-500 text-black": unref(form).season === season.toLowerCase(), "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": unref(form).season !== season.toLowerCase() })}" data-v-2f6aede9><span class="uppercase text-xs font-semibold" data-v-2f6aede9>${ssrInterpolate(season)}</span></button>`);
      });
      _push(`<!--]--></div>`);
      if (__props.errors.season) {
        _push(`<span class="text-xs text-red-500" data-v-2f6aede9>${ssrInterpolate(__props.errors.season)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-full mt-4 flex items-center space-x-4" data-v-2f6aede9><div class="w-1/3" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="price" data-v-2f6aede9> Price <span class="text-red-500" data-v-2f6aede9>*</span></label><input${ssrRenderAttr("value", unref(form).price)} id="price" class="${ssrRenderClass([{ "border-b border-b-red-500": __props.errors.price_offer }, "py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"])}" type="number" data-v-2f6aede9></div><div class="w-1/3" data-v-2f6aede9><label class="block font-medium sm:text-sm text-xs text-gray-700" for="price_offer" data-v-2f6aede9> Price (4+ Tyres) <span class="text-red-500" data-v-2f6aede9>*</span></label><input${ssrRenderAttr("value", unref(form).price_offer)} id="price_offer" class="${ssrRenderClass([{ "border-b border-b-red-500": __props.errors.price_offer }, "py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"])}" type="number" data-v-2f6aede9></div></div><button class="${ssrRenderClass({ "relative mt-4 w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out": true, "button--loading": unref(form).processing })}" data-v-2f6aede9>`);
      if (!unref(form).processing) {
        _push(`<span data-v-2f6aede9>Create Tyre</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div>`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/ProductForm.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const ProductForm = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-2f6aede9"]]);
const __default__$4 = {
  layout: _sfc_main$1r
};
const _sfc_main$P = /* @__PURE__ */ Object.assign(__default__$4, {
  __name: "Copy",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    success: {
      type: String,
      required: false
    },
    tyre: {
      type: Object,
      required: true
    },
    tyre_brands: {
      type: Object,
      required: true
    },
    tyre_sizes: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Copy Product</title>`);
          } else {
            return [
              createVNode("title", null, "Copy Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container"><div class="w-full mx-auto pt-8"><div class="flex justify-center items-center space-x-4 mb-8"><p class="font-semibold text-3xl text-center">Copy Product</p></div>`);
      _push(ssrRenderComponent(ProductForm, {
        tyre: __props.tyre,
        tyre_brands: __props.tyre_brands,
        tyre_sizes: __props.tyre_sizes,
        errors: __props.errors
      }, null, _parent));
      _push(`</div></div><div class="min-h-[50vh]"></div><!--]-->`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Tyre/Copy.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const __default__$3 = {
  layout: _sfc_main$1r
};
const _sfc_main$O = /* @__PURE__ */ Object.assign(__default__$3, {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object,
      required: false
    },
    success: {
      type: String,
      required: false
    },
    tyre_brands: {
      type: Object,
      required: true
    },
    tyre_sizes: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Create Product</title>`);
          } else {
            return [
              createVNode("title", null, "Create Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container"><div class="w-full mx-auto pt-8"><div class="flex justify-center items-center space-x-4 mb-8"><p class="font-semibold text-3xl text-center">Add Product</p></div>`);
      _push(ssrRenderComponent(ProductForm, {
        tyre_brands: __props.tyre_brands,
        tyre_sizes: __props.tyre_sizes,
        errors: __props.errors
      }, null, _parent));
      _push(`</div></div><div class="min-h-[50vh]"></div><!--]-->`);
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Tyre/Create.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$O
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-screen 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-xl lg:px-0 px-2" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Container.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const Container = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$3]]);
const CartTyre_vue_vue_type_style_index_0_scoped_34209fad_lang = "";
const _sfc_main$M = {
  __name: "CartTyre",
  __ssrInlineRender: true,
  props: {
    tyre: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      tyre_id: props.tyre.id,
      quantity: props.tyre.quantity
    });
    watch(() => form.quantity, (quantity) => {
      form.submit("post", "/cart/quantity", {
        preserveScroll: true
      });
    });
    const capitalize = (text) => {
      return text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b" }, _attrs))} data-v-34209fad><div style="${ssrRenderStyle(unref(form).processing ? null : { display: "none" })}" class="absolute bg-gray-100/30 inset-0 z-10" data-v-34209fad></div><div class="col-span-12 md:hidden flex pb-2" data-v-34209fad><span class="text-base text-ellipsis whitespace-nowrap overflow-hidden pr-4" data-v-34209fad>${ssrInterpolate(__props.tyre.brand)} ${ssrInterpolate(__props.tyre.model)} ${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span></div><div class="sm:col-span-2 col-span-3 flex items-center" data-v-34209fad><img class="w-full"${ssrRenderAttr("src", `/images/tyres/tyre_logo/${__props.tyre.brand.toLowerCase()}.webp`)} onerror="this.onerror=null; this.src=\`/images/tyres/tyre/sample.webp\`"${ssrRenderAttr("alt", capitalize(__props.tyre.brand))} data-v-34209fad></div><div class="sm:col-span-10 col-span-9 flex flex-col" data-v-34209fad><div class="flex justify-between pb-2" data-v-34209fad><span class="md:block hidden text-lg text-ellipsis whitespace-nowrap overflow-hidden pr-4" data-v-34209fad>${ssrInterpolate(__props.tyre.brand)} ${ssrInterpolate(__props.tyre.model)} ${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span><div class="md:block hidden" data-v-34209fad>`);
      if (__props.tyre.quantity < 4) {
        _push(`<span class="text-black font-semibold md:text-lg text-base mt-auto" data-v-34209fad>£${ssrInterpolate(__props.tyre.price)}</span>`);
      } else {
        _push(`<span class="text-black mt-auto" data-v-34209fad><del class="text-xs decoration-red-500 mr-2" data-v-34209fad>£${ssrInterpolate(__props.tyre.price)}</del><span class="md:text-lg text-base font-semibold" data-v-34209fad>£${ssrInterpolate(__props.tyre.price_offer)}</span></span>`);
      }
      _push(`</div></div><div class="flex flex-col space-y-1" data-v-34209fad><span class="text-xs" data-v-34209fad><b data-v-34209fad>Size:</b> ${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)}</span><span class="text-xs" data-v-34209fad><b data-v-34209fad>Speed:</b> ${ssrInterpolate(__props.tyre.speed)}</span></div><input${ssrRenderAttr("value", unref(form).tyre_id)} type="hidden" data-v-34209fad><div class="mt-auto flex items-center justify-between" data-v-34209fad><div class="flex items-center space-x-2" data-v-34209fad><div class="w-fit relative" data-v-34209fad><span class="absolute top-1/2 -translate-y-1/2 left-2 sm:text-sm text-xs bg-white pointer-events-none select-none" data-v-34209fad>Qty: ${ssrInterpolate(unref(form).quantity)}</span><select class="block sm:text-sm text-xs sm:w-20 w-16 py-1 px-2 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-34209fad><option value="0" data-v-34209fad${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "0") : ssrLooseEqual(unref(form).quantity, "0")) ? " selected" : ""}>0</option><option value="2" data-v-34209fad${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "2") : ssrLooseEqual(unref(form).quantity, "2")) ? " selected" : ""}>2</option><option value="3" data-v-34209fad${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "3") : ssrLooseEqual(unref(form).quantity, "3")) ? " selected" : ""}>3</option><option value="4" data-v-34209fad${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "4") : ssrLooseEqual(unref(form).quantity, "4")) ? " selected" : ""}>4</option><option value="5" data-v-34209fad${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "5") : ssrLooseEqual(unref(form).quantity, "5")) ? " selected" : ""}>5</option></select></div><span class="text-sm text-gray-400" data-v-34209fad>❘</span><button data-v-34209fad><span class="text-xs text-sky-800 hover:underline" data-v-34209fad>Delete</span></button></div><div class="md:hidden block" data-v-34209fad>`);
      if (__props.tyre.quantity < 4) {
        _push(`<span class="text-black font-semibold md:text-lg text-base mt-auto" data-v-34209fad>£${ssrInterpolate(__props.tyre.price)}</span>`);
      } else {
        _push(`<span class="flex flex-col items-start justify-start text-black mt-auto" data-v-34209fad><del class="text-xs decoration-red-500 mr-2" data-v-34209fad>£${ssrInterpolate(__props.tyre.price)}</del><span class="md:text-lg text-base font-semibold" data-v-34209fad>£${ssrInterpolate(__props.tyre.price_offer)}</span></span>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Cart/CartTyre.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const CartTyre = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-34209fad"]]);
const _sfc_main$L = {
  __name: "Cart",
  __ssrInlineRender: true,
  props: {
    cart: {
      type: Object,
      required: false,
      default: {}
    },
    subtotal: {
      type: String,
      required: false
    },
    items: {
      type: Number,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Your Cart | Tyres Anywhere LTD</title><meta name="description" content="Your Cart"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/cart"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Your Cart | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Your Cart"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/cart"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-gray-200 pt-8">`);
      if (__props.cart) {
        _push(ssrRenderComponent(Container, { class: "pb-56 grid grid-cols-12 gap-x-4 gap-y-4 items-start" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="2xl:col-span-9 xl:col-span-8 col-span-12 w-full sm:px-5 px-3 py-5 bg-white"${_scopeId}><div class="flex items-center justify-between pb-3 border-b"${_scopeId}><span class="sm:text-2xl text-xl"${_scopeId}>Your Cart</span><span class="sm:block hidden text-gray-500 text-sm mt-auto"${_scopeId}>Price</span></div>`);
              _push2(ssrRenderComponent(CartTyre, { tyre: __props.cart }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center justify-end pt-3"${_scopeId}><span class="sm:text-lg"${_scopeId}>Subtotal (${ssrInterpolate(__props.items)} items): <b${_scopeId}>£${ssrInterpolate(__props.subtotal)}</b></span></div></div><div class="2xl:col-span-3 xl:col-span-4 col-span-12 w-full px-5 py-5 bg-white"${_scopeId}><div class="flex flex-col items-center justify-start"${_scopeId}><span class="sm:text-lg"${_scopeId}>Subtotal (${ssrInterpolate(__props.items)} items): <b${_scopeId}>£${ssrInterpolate(__props.subtotal)}</b></span><span class="flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2rem] bg-gray-400 hover:cursor-not-allowed text-white font-semibold text-sm text-center uppercase transition duration-150 ease-in-out"${_scopeId}> Unavailable </span><div class="text-xs flex items-center bg-yellow-300 rounded-lg py-1 px-2 mt-4"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 shrink-0 mr-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"${_scopeId}></path></svg><span${_scopeId}>Site Maintenance: please call us to complete your order.</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "2xl:col-span-9 xl:col-span-8 col-span-12 w-full sm:px-5 px-3 py-5 bg-white" }, [
                  createVNode("div", { class: "flex items-center justify-between pb-3 border-b" }, [
                    createVNode("span", { class: "sm:text-2xl text-xl" }, "Your Cart"),
                    createVNode("span", { class: "sm:block hidden text-gray-500 text-sm mt-auto" }, "Price")
                  ]),
                  createVNode(CartTyre, { tyre: __props.cart }, null, 8, ["tyre"]),
                  createVNode("div", { class: "flex items-center justify-end pt-3" }, [
                    createVNode("span", { class: "sm:text-lg" }, [
                      createTextVNode("Subtotal (" + toDisplayString(__props.items) + " items): ", 1),
                      createVNode("b", null, "£" + toDisplayString(__props.subtotal), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "2xl:col-span-3 xl:col-span-4 col-span-12 w-full px-5 py-5 bg-white" }, [
                  createVNode("div", { class: "flex flex-col items-center justify-start" }, [
                    createVNode("span", { class: "sm:text-lg" }, [
                      createTextVNode("Subtotal (" + toDisplayString(__props.items) + " items): ", 1),
                      createVNode("b", null, "£" + toDisplayString(__props.subtotal), 1)
                    ]),
                    createVNode("span", { class: "flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2rem] bg-gray-400 hover:cursor-not-allowed text-white font-semibold text-sm text-center uppercase transition duration-150 ease-in-out" }, " Unavailable "),
                    createVNode("div", { class: "text-xs flex items-center bg-yellow-300 rounded-lg py-1 px-2 mt-4" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-5 h-5 shrink-0 mr-4"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        })
                      ])),
                      createVNode("span", null, "Site Maintenance: please call us to complete your order.")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(Container, { class: "2xl:py-32 xl:py-28 lg:py-24 md:py-16 sm:py-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5 bg-white mx-auto"${_scopeId}><div class="h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden"${_scopeId}><img class="md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50" src="/images/cart/empty-shopping-cart.png" alt=""${_scopeId}><div class="flex flex-col z-10"${_scopeId}><span class="sm:text-2xl text-xl font-semibold"${_scopeId}>Your Cart is empty!</span><a class="flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out" href="/search-tyres"${_scopeId}> Search for Tyres </a></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5 bg-white mx-auto" }, [
                  createVNode("div", { class: "h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden" }, [
                    createVNode("img", {
                      class: "md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50",
                      src: "/images/cart/empty-shopping-cart.png",
                      alt: ""
                    }),
                    createVNode("div", { class: "flex flex-col z-10" }, [
                      createVNode("span", { class: "sm:text-2xl text-xl font-semibold" }, "Your Cart is empty!"),
                      createVNode("a", {
                        class: "flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out",
                        href: "/search-tyres"
                      }, " Search for Tyres ")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Cart.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$L
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {
  __name: "OrderSummary",
  __ssrInlineRender: true,
  props: {
    cart: {
      type: Object,
      required: true
    },
    tyre: {
      type: Object,
      required: true
    },
    summary: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-4 space-y-4" }, _attrs))}><div class="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-lg"><div class="flex items-center justify-between w-full bg-gray-700 py-2 px-2"><span class="text-white uppercase text-sm font-semibold tracking-wide">Order Summary</span>`);
      _push(ssrRenderComponent(unref(Link), {
        method: "post",
        href: "/cart/remove-details",
        as: "button",
        type: "button",
        class: "text-white text-sm underline tracking-wide"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Edit`);
          } else {
            return [
              createTextVNode("Edit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-4"><div class="py-4 border-b"><span class="block whitespace-nowrap overflow-hidden text-ellipsis xl:text-base lg:text-sm text-base">${ssrInterpolate(__props.tyre.brand)} ${ssrInterpolate(__props.tyre.model)}</span><span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500">${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span><div class="flex items-center justify-between"><span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500">Qty: ${ssrInterpolate(__props.tyre.quantity)}</span><span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-600 font-semibold">£${ssrInterpolate(__props.tyre.total)}</span></div></div>`);
      if (__props.cart.Timeslot.vue) {
        _push(`<div class="py-4 border-b"><span class="block whitespace-nowrap overflow-hidden text-ellipsis xl:text-base lg:text-sm text-base">Fitting ${ssrInterpolate(__props.cart.timeslot.day)}/${ssrInterpolate(__props.cart.timeslot.month)}/${ssrInterpolate(__props.cart.timeslot.year)}</span><span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500">${ssrInterpolate(__props.cart.timeslot.from)} - ${ssrInterpolate(__props.cart.timeslot.to)}</span><div class="flex items-center justify-between"><span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-500"></span>`);
        if (__props.cart.timeslot.price) {
          _push(`<span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-600 font-semibold">£${ssrInterpolate(__props.cart.timeslot.price)}</span>`);
        } else {
          _push(`<span class="block xl:text-sm lg:text-xs text-sm mt-3 text-gray-600 font-semibold">Free</span>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-8 pb-4 mx-4 space-y-4"><div class="flex items-center justify-between"><span class="block xl:text-sm lg:text-xs text-sm">Subtotal</span><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.subtotal)}</span></div><div class="flex items-start justify-between"><div><span class="block xl:text-sm lg:text-xs text-sm">Fitting &amp; Balancing</span><span class="block text-[10px]">£${ssrInterpolate(__props.summary.fitting_cost)} per tyre</span></div><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.fitting)}</span></div><div class="flex items-start justify-between"><div><span class="block xl:text-sm lg:text-xs text-sm">Call-out</span><span class="block text-[10px]">We Come To You</span></div><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.callout)}</span></div><div class="flex items-start justify-between"><div><span class="block xl:text-sm lg:text-xs text-sm">Tyre Disposal</span><span class="block text-[10px]">£${ssrInterpolate(__props.summary.disposal_cost)} per tyre</span></div><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.disposal)}</span></div></div></div><div class="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-lg"><div class="pt-8 pb-4 px-4 space-y-4 border-b"><div class="flex items-center justify-between"><span class="block xl:text-sm lg:text-xs text-sm">Total</span><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.total)}</span></div><div class="flex items-center justify-between"><span class="block xl:text-sm lg:text-xs text-sm">Pay 25% Today</span><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.total_today)}</span></div><div class="flex items-start justify-between"><div><span class="block xl:text-sm lg:text-xs text-sm text-red-500">Remaining Balance</span><span class="block text-[10px]">Pay when the tyre is fitted</span></div><span class="block xl:text-sm lg:text-xs text-sm text-gray-600 font-semibold">£${ssrInterpolate(__props.summary.total_later)}</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/OrderSummary/OrderSummary.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="bg-stone-800">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-3 md:gap-x-12 md:gap-y-0 gap-y-8 md:px-0 px-8 pt-10 pb-6"${_scopeId}><div class="md:col-span-1 col-span-3"${_scopeId}><p class="text-xl tracking-wide mb-2 text-white uppercase"${_scopeId}>Tyres Anywhere, Mobile Tyre Fitting</p><p class="mt-6 text-gray-500 text-sm"${_scopeId}> Having a punctured tyre can be a headache, especially on the middle of the motorway. That&#39;s why at <b class="text-gray-300"${_scopeId}>Tyres Anywhere, Mobile Tyre Fitting</b>, we bring our mobile service right to your vehicle, whether you&#39;re at home, work or on the hard shoulder. </p><p class="mt-3 text-sm text-gray-500"${_scopeId}>© 2022 Tyres Anywhere LTD | All Rights Reserved</p></div><div class="md:col-span-1 col-span-3"${_scopeId}><p class="text-xl tracking-wide mb-2 text-white"${_scopeId}>SERVICES</p><div class="space-y-3 flex flex-col items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/mobile-tyre-fitting",
              title: "Mobile Tyre Fitting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/mobile-tyre-repair",
              title: "Mobile Tyre Repair"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/commercial-tyres",
              title: "Commercial Tyres"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Commercial Tyres`);
                } else {
                  return [
                    createTextVNode("Commercial Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/search-tyres",
              title: "Book Tyres"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search Tyres`);
                } else {
                  return [
                    createTextVNode("Search Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="md:col-span-1 col-span-3"${_scopeId}><p class="text-xl tracking-wide mb-2 text-white"${_scopeId}>HELP</p><div class="space-y-3 flex flex-col items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/contact-us",
              title: "Contact Us"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/our-terms-and-conditions",
              title: "Terms and Conditions"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Terms and Conditions`);
                } else {
                  return [
                    createTextVNode("Terms and Conditions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/privacy-policy",
              title: "Privacy Policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/sitemap",
              title: "Sitemap"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sitemap`);
                } else {
                  return [
                    createTextVNode("Sitemap")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-3 md:gap-x-12 md:gap-y-0 gap-y-8 md:px-0 px-8 pt-10 pb-6" }, [
                createVNode("div", { class: "md:col-span-1 col-span-3" }, [
                  createVNode("p", { class: "text-xl tracking-wide mb-2 text-white uppercase" }, "Tyres Anywhere, Mobile Tyre Fitting"),
                  createVNode("p", { class: "mt-6 text-gray-500 text-sm" }, [
                    createTextVNode(" Having a punctured tyre can be a headache, especially on the middle of the motorway. That's why at "),
                    createVNode("b", { class: "text-gray-300" }, "Tyres Anywhere, Mobile Tyre Fitting"),
                    createTextVNode(", we bring our mobile service right to your vehicle, whether you're at home, work or on the hard shoulder. ")
                  ]),
                  createVNode("p", { class: "mt-3 text-sm text-gray-500" }, "© 2022 Tyres Anywhere LTD | All Rights Reserved")
                ]),
                createVNode("div", { class: "md:col-span-1 col-span-3" }, [
                  createVNode("p", { class: "text-xl tracking-wide mb-2 text-white" }, "SERVICES"),
                  createVNode("div", { class: "space-y-3 flex flex-col items-start" }, [
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/mobile-tyre-fitting",
                      title: "Mobile Tyre Fitting"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Mobile Tyre Fitting")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/mobile-tyre-repair",
                      title: "Mobile Tyre Repair"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Mobile Tyre Repair")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/commercial-tyres",
                      title: "Commercial Tyres"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Commercial Tyres")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/search-tyres",
                      title: "Book Tyres"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Search Tyres")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "md:col-span-1 col-span-3" }, [
                  createVNode("p", { class: "text-xl tracking-wide mb-2 text-white" }, "HELP"),
                  createVNode("div", { class: "space-y-3 flex flex-col items-start" }, [
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/contact-us",
                      title: "Contact Us"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Contact Us")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/our-terms-and-conditions",
                      title: "Terms and Conditions"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Terms and Conditions")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/privacy-policy",
                      title: "Privacy Policy"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Privacy Policy")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/sitemap",
                      title: "Sitemap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sitemap")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-stone-900">`);
      _push(ssrRenderComponent(Container, { class: "flex lg:flex-row lg:space-y-0 space-y-2 flex-col items-center justify-between py-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-row space-x-3"${_scopeId}><a href="https://www.facebook.com/people/Tyres-Anywhere/100094490663380/" target="_blank" class="text-gray-500"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"${_scopeId}><g${_scopeId}><path fill="none" d="M0 0h24v24H0z"${_scopeId}></path><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"${_scopeId}></path></g></svg></a><a href="https://www.instagram.com/tyresanywhere/" target="_blank" class="text-gray-500"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" viewBox="0 0 1000 1000"${_scopeId}><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"${_scopeId}></path></svg></a></div><p class="text-gray-300 text-center text-sm"${_scopeId}>Website by: <a class="text-white hover:underline" href="https://skelop.com" target="_blank" rel="noreferrer"${_scopeId}>SKELOP Website Design &amp; Development</a></p>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-row space-x-3" }, [
                createVNode("a", {
                  href: "https://www.facebook.com/people/Tyres-Anywhere/100094490663380/",
                  target: "_blank",
                  class: "text-gray-500"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    height: "24",
                    width: "24"
                  }, [
                    createVNode("g", null, [
                      createVNode("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }),
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                      })
                    ])
                  ]))
                ]),
                createVNode("a", {
                  href: "https://www.instagram.com/tyresanywhere/",
                  target: "_blank",
                  class: "text-gray-500"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    height: "24",
                    width: "24",
                    viewBox: "0 0 1000 1000"
                  }, [
                    createVNode("path", {
                      d: "M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34",
                      transform: "translate(-2.5 -2.5)"
                    })
                  ]))
                ])
              ]),
              createVNode("p", { class: "text-gray-300 text-center text-sm" }, [
                createTextVNode("Website by: "),
                createVNode("a", {
                  class: "text-white hover:underline",
                  href: "https://skelop.com",
                  target: "_blank",
                  rel: "noreferrer"
                }, "SKELOP Website Design & Development")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></footer>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Footer.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "CheckoutLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="flex flex-col items-center justify-center pt-4"><div class="sm:w-[300px] w-[250px] mb-4">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-full" src="/images/main/tyresanywhere.webp" alt="Tyres Anywhere LTD"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-full",
                src: "/images/main/tyresanywhere.webp",
                alt: "Tyres Anywhere LTD"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$J, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layouts/CheckoutLayout.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const Checkout_vue_vue_type_style_index_0_scoped_2d732592_lang = "";
const __default__$2 = {
  layout: _sfc_main$I
};
const _sfc_main$H = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "Checkout",
  __ssrInlineRender: true,
  props: {
    fitting_details: {
      type: Object,
      required: true
    },
    timeslot: {
      type: Object,
      required: true
    },
    cart: {
      type: Object,
      required: true
    },
    tyre: {
      type: Object,
      required: true
    },
    summary: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const useFittingAsBilling = ref(true);
    const processing = ref(false);
    const billingAddress = useForm({
      addressLine1: null,
      addressLine2: null,
      town: null,
      postcode: null
    });
    const customer = useForm({
      firstname: null,
      lastname: null,
      email: props.fitting_details.email,
      phone: props.fitting_details.phone,
      registration: props.fitting_details.registration,
      addressLine1: props.fitting_details.addressLine1,
      addressLine2: props.fitting_details.addressLine2,
      town: props.fitting_details.town,
      postcode: props.fitting_details.postcode,
      fitting_addressLine1: props.fitting_details.addressLine1,
      fitting_addressLine2: props.fitting_details.addressLine2,
      fitting_town: props.fitting_details.town,
      fitting_postcode: props.fitting_details.postcode,
      timeslot: props.timeslot
    });
    const stripe = ref({});
    const cardElement = ref({});
    const paymentProcessing = ref(false);
    onMounted(async () => {
      stripe.value = await loadStripe(process.env.MIX_STRIPE_KEY);
      const options = {
        classes: {
          base: "text-sm py-2 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 transition",
          focus: "ring-2",
          invalid: "border-red-500"
        },
        hidePostalCode: true
      };
      const elements = stripe.value.elements();
      cardElement.value = elements.create("card", options);
      cardElement.value.mount("#card-element");
    });
    async function processPayment() {
      paymentProcessing.value = true;
      customer.addressLine1 = useFittingAsBilling.value ? props.fitting_details.addressLine1 : billingAddress.addressLine1;
      customer.addressLine2 = useFittingAsBilling.value ? props.fitting_details.addressLine2 : billingAddress.addressLine2;
      customer.town = useFittingAsBilling.value ? props.fitting_details.town : billingAddress.town;
      customer.postcode = useFittingAsBilling.value ? props.fitting_details.postcode : billingAddress.postcode;
      const { paymentMethod, error } = await stripe.value.createPaymentMethod(
        "card",
        cardElement.value,
        {
          billing_details: {
            name: customer.firstname + " " + customer.lastname,
            email: customer.email,
            address: {
              line1: customer.addressLine1,
              line2: customer.addressLine2,
              city: customer.town,
              postal_code: customer.postcode
            }
          }
        }
      );
      if (error) {
        paymentProcessing.value = false;
        console.log(error);
      } else {
        customer.transform((data) => ({
          ...data,
          payment_method_id: paymentMethod.id,
          amount: props.summary.total_today_pence,
          cart: JSON.stringify(props.cart)
        }));
        customer.post("/checkout/purchase", {
          onSuccess: () => {
            paymentProcessing.value = false;
          },
          onError: (err) => {
            paymentProcessing.value = false;
            console.log(err);
          }
        });
      }
    }
    function returnToFittingDetails() {
      processing.value = true;
      router.post("/checkout/remove-details", null, {
        onSuccess: () => {
          processing.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-2d732592${_scopeId}>Checkout | Tyres Anywhere LTD</title><link rel="canonical" href="https://tyresanywhere.com/checkout" data-v-2d732592${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Checkout | Tyres Anywhere LTD"),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/checkout"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-24" data-v-2d732592>`);
      _push(ssrRenderComponent(Container, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative grid grid-cols-12 gap-x-6 gap-y-4" data-v-2d732592${_scopeId}><div class="col-span-12" data-v-2d732592${_scopeId}><div class="lg:w-3/4 w-full" data-v-2d732592${_scopeId}><div class="w-[250px] mx-auto flex text-xs flex-row justify-between items-center text-gray-400" data-v-2d732592${_scopeId}><span class="flex items-center text-gray-600" data-v-2d732592${_scopeId}> Fitting Details </span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-2d732592${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-2d732592${_scopeId}></path></svg><span class="flex items-center text-gray-600 font-bold" data-v-2d732592${_scopeId}> Payment </span></div></div></div><div class="lg:col-span-9 col-span-12 relative" data-v-2d732592${_scopeId}><div style="${ssrRenderStyle(processing.value ? null : { display: "none" })}" class="absolute bg-gray-100/40 inset-0 z-10" data-v-2d732592${_scopeId}></div><div class="bg-white rounded-lg border border-gray-300 shadow-lg" data-v-2d732592${_scopeId}><div class="flex items-center justify-start pt-2 pl-2" data-v-2d732592${_scopeId}><button class="flex items-center justify-start text-gray-600 hover:underline" data-v-2d732592${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" data-v-2d732592${_scopeId}><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" data-v-2d732592${_scopeId}></path></svg><span class="text-sm" data-v-2d732592${_scopeId}>Return to fitting details</span></button></div><div class="xl:px-24 sm:px-12 px-6 pb-12 pt-6" data-v-2d732592${_scopeId}><span class="block text-center text-2xl font-light" data-v-2d732592${_scopeId}>Billing Details</span><div class="mt-6" data-v-2d732592${_scopeId}><label for="firstname" class="text-sm" data-v-2d732592${_scopeId}>First Name <span class="text-red-500" data-v-2d732592${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(customer).firstname)} type="text" id="firstname" autocomplete="given-name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-2d732592${_scopeId}>`);
            if (__props.errors.firstname) {
              _push2(`<span class="text-xs text-red-500" data-v-2d732592${_scopeId}>${ssrInterpolate(__props.errors.firstname)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4" data-v-2d732592${_scopeId}><label for="lastname" class="text-sm" data-v-2d732592${_scopeId}>Last Name <span class="text-red-500" data-v-2d732592${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(customer).lastname)} type="text" id="lastname" autocomplete="family-name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-2d732592${_scopeId}>`);
            if (__props.errors.lastname) {
              _push2(`<span class="text-xs text-red-500" data-v-2d732592${_scopeId}>${ssrInterpolate(__props.errors.lastname)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(SwitchGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-12 w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4" data-v-2d732592${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Switch), {
                    modelValue: useFittingAsBilling.value,
                    "onUpdate:modelValue": ($event) => useFittingAsBilling.value = $event,
                    class: [useFittingAsBilling.value ? "bg-green-500" : "bg-gray-200", "relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass([useFittingAsBilling.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"])}" data-v-2d732592${_scopeId3}></span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: [useFittingAsBilling.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"]
                          }, null, 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwitchLabel), { class: "mr-4 sm:text-base text-sm sm:text-left text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Use my fitting address as my billing address`);
                      } else {
                        return [
                          createTextVNode("Use my fitting address as my billing address")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-12 w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4" }, [
                      createVNode(unref(Switch), {
                        modelValue: useFittingAsBilling.value,
                        "onUpdate:modelValue": ($event) => useFittingAsBilling.value = $event,
                        class: [useFittingAsBilling.value ? "bg-green-500" : "bg-gray-200", "relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"]
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: [useFittingAsBilling.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"]
                          }, null, 2)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      createVNode(unref(SwitchLabel), { class: "mr-4 sm:text-base text-sm sm:text-left text-center" }, {
                        default: withCtx(() => [
                          createTextVNode("Use my fitting address as my billing address")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 space-y-4" style="${ssrRenderStyle(!useFittingAsBilling.value ? null : { display: "none" })}" data-v-2d732592${_scopeId}><div data-v-2d732592${_scopeId}><label for="addressLine1" class="text-sm" data-v-2d732592${_scopeId}>Address Line 1 <span class="text-red-500" data-v-2d732592${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(billingAddress).addressLine1)} type="text" id="addressLine1" autocomplete="address-line1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-2d732592${_scopeId}>`);
            if (__props.errors.addressLine1) {
              _push2(`<span class="text-xs text-red-500" data-v-2d732592${_scopeId}>${ssrInterpolate(__props.errors.addressLine1)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-2d732592${_scopeId}><label for="addressLine2" class="text-sm" data-v-2d732592${_scopeId}>Address Line 2</label><input${ssrRenderAttr("value", unref(billingAddress).addressLine2)} type="text" id="addressLine2" autocomplete="address-line2" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-2d732592${_scopeId}>`);
            if (__props.errors.addressLine2) {
              _push2(`<span class="text-xs text-red-500" data-v-2d732592${_scopeId}>${ssrInterpolate(__props.errors.addressLine2)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-2d732592${_scopeId}><label for="town" class="text-sm" data-v-2d732592${_scopeId}>Town/City</label><input${ssrRenderAttr("value", unref(billingAddress).town)} type="text" id="town" autocomplete="address-level1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-2d732592${_scopeId}>`);
            if (__props.errors.town) {
              _push2(`<span class="text-xs text-red-500" data-v-2d732592${_scopeId}>${ssrInterpolate(__props.errors.town)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-2d732592${_scopeId}><label for="postcode" class="text-sm" data-v-2d732592${_scopeId}>Postcode <span class="text-red-500" data-v-2d732592${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(billingAddress).postcode)} type="text" id="postcode" autocomplete="postal-code" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-2d732592${_scopeId}>`);
            if (__props.errors.postcode) {
              _push2(`<span class="text-xs text-red-500" data-v-2d732592${_scopeId}>${ssrInterpolate(__props.errors.postcode)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="bg-white rounded-lg border border-gray-300 shadow-lg mt-4" data-v-2d732592${_scopeId}><div class="pb-12 xl:px-24 sm:px-12 px-6 pt-6" data-v-2d732592${_scopeId}><div class="flex flex-col items-center justify-center" data-v-2d732592${_scopeId}><span class="block text-center text-2xl" data-v-2d732592${_scopeId}>Total to pay now</span><span class="block text-center text-3xl font-bold mt-2" data-v-2d732592${_scopeId}>£${ssrInterpolate(__props.summary.total_today)}</span><span class="block text-center text-sm mt-2 text-gray-600" data-v-2d732592${_scopeId}>Pay <b data-v-2d732592${_scopeId}>£${ssrInterpolate(__props.summary.total_later)}</b> when the tyre is fitted</span></div><div class="flex flex-wrap -mx-2 mt-8" data-v-2d732592${_scopeId}><div class="p-2 w-full space-y-4" data-v-2d732592${_scopeId}><div data-v-2d732592${_scopeId}><label for="card-element" class="text-sm" data-v-2d732592${_scopeId}>Debit / Credit Card <span class="text-red-500" data-v-2d732592${_scopeId}>*</span></label><div id="card-element" data-v-2d732592${_scopeId}></div></div></div></div><div class="flex items-center justify-center mt-8" data-v-2d732592${_scopeId}><button${ssrIncludeBooleanAttr(paymentProcessing.value) ? " disabled" : ""} class="${ssrRenderClass({ "relative rounded-lg outline-0 h-12 w-64 text-base text-center uppercase transition duration-150 ease-in-out bg-green-500 hover:bg-green-600 text-white font-semibold": true, "button--loading": paymentProcessing.value })}" data-v-2d732592${_scopeId}>`);
            if (!paymentProcessing.value) {
              _push2(`<span class="flex items-center justify-center" data-v-2d732592${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-v-2d732592${_scopeId}><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-2d732592${_scopeId}></path></svg> Pay Securely </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div></div></div></div><div class="lg:col-span-3 col-span-12 space-y-4" data-v-2d732592${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$K, {
              summary: __props.summary,
              cart: __props.cart,
              tyre: __props.tyre
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative grid grid-cols-12 gap-x-6 gap-y-4" }, [
                createVNode("div", { class: "col-span-12" }, [
                  createVNode("div", { class: "lg:w-3/4 w-full" }, [
                    createVNode("div", { class: "w-[250px] mx-auto flex text-xs flex-row justify-between items-center text-gray-400" }, [
                      createVNode("span", { class: "flex items-center text-gray-600" }, " Fitting Details "),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", { class: "flex items-center text-gray-600 font-bold" }, " Payment ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-9 col-span-12 relative" }, [
                  withDirectives(createVNode("div", { class: "absolute bg-gray-100/40 inset-0 z-10" }, null, 512), [
                    [vShow, processing.value]
                  ]),
                  createVNode("div", { class: "bg-white rounded-lg border border-gray-300 shadow-lg" }, [
                    createVNode("div", { class: "flex items-center justify-start pt-2 pl-2" }, [
                      createVNode("button", {
                        onClick: returnToFittingDetails,
                        class: "flex items-center justify-start text-gray-600 hover:underline"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-4 w-4 mr-2",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createVNode("span", { class: "text-sm" }, "Return to fitting details")
                      ])
                    ]),
                    createVNode("div", { class: "xl:px-24 sm:px-12 px-6 pb-12 pt-6" }, [
                      createVNode("span", { class: "block text-center text-2xl font-light" }, "Billing Details"),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", {
                          for: "firstname",
                          class: "text-sm"
                        }, [
                          createTextVNode("First Name "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(customer).firstname = $event,
                          type: "text",
                          id: "firstname",
                          autocomplete: "given-name",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(customer).firstname]
                        ]),
                        __props.errors.firstname ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.firstname), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("label", {
                          for: "lastname",
                          class: "text-sm"
                        }, [
                          createTextVNode("Last Name "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(customer).lastname = $event,
                          type: "text",
                          id: "lastname",
                          autocomplete: "family-name",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(customer).lastname]
                        ]),
                        __props.errors.lastname ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.lastname), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(unref(SwitchGroup), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mt-12 w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4" }, [
                            createVNode(unref(Switch), {
                              modelValue: useFittingAsBilling.value,
                              "onUpdate:modelValue": ($event) => useFittingAsBilling.value = $event,
                              class: [useFittingAsBilling.value ? "bg-green-500" : "bg-gray-200", "relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"]
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: [useFittingAsBilling.value ? "translate-x-6" : "translate-x-1", "inline-block w-4 h-4 transition-transform transform bg-white rounded-full"]
                                }, null, 2)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(unref(SwitchLabel), { class: "mr-4 sm:text-base text-sm sm:text-left text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Use my fitting address as my billing address")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode("div", { class: "mt-6 space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "addressLine1",
                            class: "text-sm"
                          }, [
                            createTextVNode("Address Line 1 "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                            type: "text",
                            id: "addressLine1",
                            autocomplete: "address-line1",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(billingAddress).addressLine1]
                          ]),
                          __props.errors.addressLine1 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.addressLine1), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "addressLine2",
                            class: "text-sm"
                          }, "Address Line 2"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                            type: "text",
                            id: "addressLine2",
                            autocomplete: "address-line2",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(billingAddress).addressLine2]
                          ]),
                          __props.errors.addressLine2 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.addressLine2), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "town",
                            class: "text-sm"
                          }, "Town/City"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(billingAddress).town = $event,
                            type: "text",
                            id: "town",
                            autocomplete: "address-level1",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(billingAddress).town]
                          ]),
                          __props.errors.town ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.town), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "postcode",
                            class: "text-sm"
                          }, [
                            createTextVNode("Postcode "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(billingAddress).postcode = $event,
                            type: "text",
                            id: "postcode",
                            autocomplete: "postal-code",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(billingAddress).postcode]
                          ]),
                          __props.errors.postcode ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.postcode), 1)) : createCommentVNode("", true)
                        ])
                      ], 512), [
                        [vShow, !useFittingAsBilling.value]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white rounded-lg border border-gray-300 shadow-lg mt-4" }, [
                    createVNode("div", { class: "pb-12 xl:px-24 sm:px-12 px-6 pt-6" }, [
                      createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                        createVNode("span", { class: "block text-center text-2xl" }, "Total to pay now"),
                        createVNode("span", { class: "block text-center text-3xl font-bold mt-2" }, "£" + toDisplayString(__props.summary.total_today), 1),
                        createVNode("span", { class: "block text-center text-sm mt-2 text-gray-600" }, [
                          createTextVNode("Pay "),
                          createVNode("b", null, "£" + toDisplayString(__props.summary.total_later), 1),
                          createTextVNode(" when the tyre is fitted")
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap -mx-2 mt-8" }, [
                        createVNode("div", { class: "p-2 w-full space-y-4" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "card-element",
                              class: "text-sm"
                            }, [
                              createTextVNode("Debit / Credit Card "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode("div", { id: "card-element" })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center mt-8" }, [
                        createVNode("button", {
                          onClick: processPayment,
                          disabled: paymentProcessing.value,
                          class: { "relative rounded-lg outline-0 h-12 w-64 text-base text-center uppercase transition duration-150 ease-in-out bg-green-500 hover:bg-green-600 text-white font-semibold": true, "button--loading": paymentProcessing.value }
                        }, [
                          !paymentProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center justify-center"
                          }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 mr-2",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createTextVNode(" Pay Securely ")
                          ])) : createCommentVNode("", true)
                        ], 10, ["disabled"])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-3 col-span-12 space-y-4" }, [
                  createVNode(_sfc_main$K, {
                    summary: __props.summary,
                    cart: __props.cart,
                    tyre: __props.tyre
                  }, null, 8, ["summary", "cart", "tyre"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Checkout.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-2d732592"]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Checkout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {
  __name: "OrderSummaryTyre",
  __ssrInlineRender: true,
  props: {
    tyre: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const capitalize = (text) => {
      return text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b" }, _attrs))}><div class="col-span-12 md:hidden flex pb-2"><span class="sm:text-base text-sm text-ellipsis whitespace-nowrap overflow-hidden pr-4">${ssrInterpolate(__props.tyre.brand)} ${ssrInterpolate(__props.tyre.model)} ${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span></div><div class="sm:col-span-2 col-span-3 flex items-center"><img class="w-full"${ssrRenderAttr("src", `/images/tyres/tyre_logo/${__props.tyre.brand.toLowerCase()}.webp`)} onerror="this.onerror=null; this.src=\`/images/tyres/tyre/sample.webp\`"${ssrRenderAttr("alt", capitalize(__props.tyre.brand))}></div><div class="sm:col-span-10 col-span-9 flex flex-col"><div class="flex justify-between pb-2"><span class="md:block hidden text-lg text-ellipsis whitespace-nowrap overflow-hidden pr-4">${ssrInterpolate(__props.tyre.brand)} ${ssrInterpolate(__props.tyre.model)} ${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span><div class="md:block hidden">`);
      if (__props.tyre.pivot.quantity < 4) {
        _push(`<span class="text-black font-semibold md:text-lg text-base mt-auto">£${ssrInterpolate(__props.tyre.price)}</span>`);
      } else {
        _push(`<span class="text-black mt-auto"><del class="text-xs decoration-red-500 mr-2">£${ssrInterpolate(__props.tyre.price)}</del><span class="md:text-lg text-base font-semibold">£${ssrInterpolate(__props.tyre.price_offer)}</span></span>`);
      }
      _push(`</div></div><div class="flex flex-col space-y-1"><span class="text-xs"><b>Size:</b> ${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)}</span><span class="text-xs"><b>Speed:</b> ${ssrInterpolate(__props.tyre.speed)}</span><span class="text-xs"><b>Quantity:</b> ${ssrInterpolate(__props.tyre.pivot.quantity)}</span></div><div class="mt-auto flex items-center justify-end"><div class="md:hidden block">`);
      if (__props.tyre.pivot.quantity < 4) {
        _push(`<span class="text-black font-semibold md:text-lg text-base mt-auto">£${ssrInterpolate(__props.tyre.price)}</span>`);
      } else {
        _push(`<span class="flex flex-col items-start justify-start text-black mt-auto"><del class="text-xs decoration-red-500 mr-2">£${ssrInterpolate(__props.tyre.price)}</del><span class="md:text-lg text-base font-semibold">£${ssrInterpolate(__props.tyre.price_offer)}</span></span>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/OrderSummary/OrderSummaryTyre.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const __default__$1 = {
  layout: _sfc_main$I
};
const _sfc_main$F = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "OrderSummary",
  __ssrInlineRender: true,
  props: {
    order_summary: {
      type: Object,
      required: true
    },
    summary: {
      type: Object,
      required: true
    },
    cart: {
      type: Object,
      required: true
    },
    timeslot: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Order Summary | Tyres Anywhere LTD</title><link rel="canonical" href="https://tyresanywhere.com/checkout"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Order Summary | Tyres Anywhere LTD"),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/checkout"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="md:pb-24 sm:pb-12 pb-6">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}><div class="bg-white lg:px-24 md:px-12 px-4 sm:py-12 py-6 rounded-lg border border-gray-300 shadow-lg"${_scopeId}><span class="block text-center sm:text-2xl text-xl font-light"${_scopeId}>Thank you for your order!</span><span class="block mt-2 text-center text-gray-500 sm:text-sm text-xs font-light"${_scopeId}>Your order is confirmed, here is your order summary - this will also be emailed to you.</span><div class="mb-6 mt-12"${_scopeId}><div class="flex items-center justify-between pb-3 border-b"${_scopeId}><span class="sm:text-2xl text-xl"${_scopeId}>Your Fitting Details</span><span class="sm:block hidden text-gray-500 text-sm mt-auto"${_scopeId}>Price</span></div><div class="relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b"${_scopeId}><div class="col-span-12 md:hidden flex pb-2"${_scopeId}><span class="sm:text-base text-sm text-ellipsis whitespace-nowrap overflow-hidden pr-4"${_scopeId}>${ssrInterpolate(__props.timeslot.slot_from)}-${ssrInterpolate(__props.timeslot.slot_to)} ${ssrInterpolate(__props.timeslot.day)}/${ssrInterpolate(__props.timeslot.month)}/${ssrInterpolate(__props.timeslot.year)}</span></div><div class="sm:col-span-2 col-span-3 flex items-center"${_scopeId}><img class="w-full" src="/images/tyres/timeslot.webp" alt="Timeslot.vue"${_scopeId}></div><div class="sm:col-span-10 col-span-9 flex flex-col"${_scopeId}><div class="flex justify-between pb-2"${_scopeId}><span class="md:block hidden text-base text-ellipsis whitespace-nowrap overflow-hidden pr-4"${_scopeId}>${ssrInterpolate(__props.timeslot.slot_from)}-${ssrInterpolate(__props.timeslot.slot_to)} ${ssrInterpolate(__props.timeslot.day)}/${ssrInterpolate(__props.timeslot.month)}/${ssrInterpolate(__props.timeslot.year)}</span><div class="md:block hidden"${_scopeId}>`);
            if (__props.timeslot.price > 0) {
              _push2(`<span class="text-black font-semibold md:text-lg text-base mt-auto"${_scopeId}>£${ssrInterpolate(__props.timeslot.price)}</span>`);
            } else {
              _push2(`<span class="text-black font-semibold md:text-lg text-base mt-auto"${_scopeId}>FREE</span>`);
            }
            _push2(`</div></div><div class="flex flex-col space-y-1"${_scopeId}><span class="text-xs"${_scopeId}><b${_scopeId}>Timeslot:</b> ${ssrInterpolate(__props.timeslot.slot_from)}-${ssrInterpolate(__props.timeslot.slot_to)}</span><span class="text-xs"${_scopeId}><b${_scopeId}>Date:</b> ${ssrInterpolate(__props.timeslot.day)}/${ssrInterpolate(__props.timeslot.month)}/${ssrInterpolate(__props.timeslot.year)}</span><span class="text-xs"${_scopeId}><b${_scopeId}>Fitting Location:</b> ${ssrInterpolate(__props.user.fitting_address_1)}, ${ssrInterpolate(__props.user.fitting_town)}, ${ssrInterpolate(__props.user.fitting_postcode)}</span><span class="text-xs"${_scopeId}><b${_scopeId}>Vehicle Reg #:</b> ${ssrInterpolate(__props.user.registration)}</span><span class="text-[10px] text-gray-400"${_scopeId}>If any of these detail(s) are missing or incorrect, please let us know ASAP</span></div><div class="mt-auto flex items-center justify-end"${_scopeId}><div class="md:hidden block"${_scopeId}><span class="text-black font-semibold md:text-lg text-base mt-auto"${_scopeId}>£${ssrInterpolate(__props.timeslot.price)}</span></div></div></div></div></div><div${_scopeId}><div class="flex items-center justify-between pb-3 border-b"${_scopeId}><span class="sm:text-2xl text-xl"${_scopeId}>Your Cart</span><span class="sm:block hidden text-gray-500 text-sm mt-auto"${_scopeId}>Price</span></div><!--[-->`);
            ssrRenderList(__props.cart, (item) => {
              _push2(ssrRenderComponent(_sfc_main$G, { tyre: item }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="md:w-1/2 w-full mx-auto"${_scopeId}><div class="pt-8 pb-4 mx-4 space-y-4 border-b"${_scopeId}><div class="flex items-start justify-between"${_scopeId}><div${_scopeId}><span class="block text-sm"${_scopeId}>Subtotal</span><span class="block text-[10px]"${_scopeId}>(${ssrInterpolate(__props.summary.items)} items)</span></div><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>£${ssrInterpolate(__props.summary.subtotal)}</span></div><div class="flex items-start justify-between"${_scopeId}><div${_scopeId}><span class="block text-sm"${_scopeId}>Fitting &amp; Balancing</span><span class="block text-[10px]"${_scopeId}>£${ssrInterpolate(__props.summary.fitting_cost)} per tyre</span></div><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>£${ssrInterpolate(__props.summary.fitting)}</span></div><div class="flex items-start justify-between"${_scopeId}><div${_scopeId}><span class="block text-sm"${_scopeId}>Call-out</span><span class="block text-[10px]"${_scopeId}>We Come To You</span></div><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>£${ssrInterpolate(__props.summary.callout)}</span></div><div class="flex items-start justify-between"${_scopeId}><div${_scopeId}><span class="block text-sm"${_scopeId}>Tyre Disposal</span><span class="block text-[10px]"${_scopeId}>£${ssrInterpolate(__props.summary.disposal_cost)} per tyre</span></div><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>£${ssrInterpolate(__props.summary.disposal)}</span></div></div><div class="pt-8 pb-4 px-4 space-y-4 border-b"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="block text-sm"${_scopeId}>Total</span><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>£${ssrInterpolate(__props.summary.total)}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="block text-sm"${_scopeId}>Paid 25%</span><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>-£${ssrInterpolate(__props.summary.total_today)}</span></div><div class="flex items-start justify-between"${_scopeId}><div${_scopeId}><span class="block text-sm text-red-500"${_scopeId}>Remaining Balance</span><span class="block text-[10px]"${_scopeId}>Pay when the tyre is fitted</span></div><span class="block text-sm text-gray-600 font-semibold"${_scopeId}>£${ssrInterpolate(__props.summary.total_later)}</span></div></div><span class="block text-[11px] text-center text-gray-500"${_scopeId}>TXN: ${ssrInterpolate(__props.summary.txn_id)}</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode("div", { class: "bg-white lg:px-24 md:px-12 px-4 sm:py-12 py-6 rounded-lg border border-gray-300 shadow-lg" }, [
                  createVNode("span", { class: "block text-center sm:text-2xl text-xl font-light" }, "Thank you for your order!"),
                  createVNode("span", { class: "block mt-2 text-center text-gray-500 sm:text-sm text-xs font-light" }, "Your order is confirmed, here is your order summary - this will also be emailed to you."),
                  createVNode("div", { class: "mb-6 mt-12" }, [
                    createVNode("div", { class: "flex items-center justify-between pb-3 border-b" }, [
                      createVNode("span", { class: "sm:text-2xl text-xl" }, "Your Fitting Details"),
                      createVNode("span", { class: "sm:block hidden text-gray-500 text-sm mt-auto" }, "Price")
                    ]),
                    createVNode("div", { class: "relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b" }, [
                      createVNode("div", { class: "col-span-12 md:hidden flex pb-2" }, [
                        createVNode("span", { class: "sm:text-base text-sm text-ellipsis whitespace-nowrap overflow-hidden pr-4" }, toDisplayString(__props.timeslot.slot_from) + "-" + toDisplayString(__props.timeslot.slot_to) + " " + toDisplayString(__props.timeslot.day) + "/" + toDisplayString(__props.timeslot.month) + "/" + toDisplayString(__props.timeslot.year), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-2 col-span-3 flex items-center" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/tyres/timeslot.webp",
                          alt: "Timeslot.vue"
                        })
                      ]),
                      createVNode("div", { class: "sm:col-span-10 col-span-9 flex flex-col" }, [
                        createVNode("div", { class: "flex justify-between pb-2" }, [
                          createVNode("span", { class: "md:block hidden text-base text-ellipsis whitespace-nowrap overflow-hidden pr-4" }, toDisplayString(__props.timeslot.slot_from) + "-" + toDisplayString(__props.timeslot.slot_to) + " " + toDisplayString(__props.timeslot.day) + "/" + toDisplayString(__props.timeslot.month) + "/" + toDisplayString(__props.timeslot.year), 1),
                          createVNode("div", { class: "md:block hidden" }, [
                            __props.timeslot.price > 0 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-black font-semibold md:text-lg text-base mt-auto"
                            }, "£" + toDisplayString(__props.timeslot.price), 1)) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-black font-semibold md:text-lg text-base mt-auto"
                            }, "FREE"))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col space-y-1" }, [
                          createVNode("span", { class: "text-xs" }, [
                            createVNode("b", null, "Timeslot:"),
                            createTextVNode(" " + toDisplayString(__props.timeslot.slot_from) + "-" + toDisplayString(__props.timeslot.slot_to), 1)
                          ]),
                          createVNode("span", { class: "text-xs" }, [
                            createVNode("b", null, "Date:"),
                            createTextVNode(" " + toDisplayString(__props.timeslot.day) + "/" + toDisplayString(__props.timeslot.month) + "/" + toDisplayString(__props.timeslot.year), 1)
                          ]),
                          createVNode("span", { class: "text-xs" }, [
                            createVNode("b", null, "Fitting Location:"),
                            createTextVNode(" " + toDisplayString(__props.user.fitting_address_1) + ", " + toDisplayString(__props.user.fitting_town) + ", " + toDisplayString(__props.user.fitting_postcode), 1)
                          ]),
                          createVNode("span", { class: "text-xs" }, [
                            createVNode("b", null, "Vehicle Reg #:"),
                            createTextVNode(" " + toDisplayString(__props.user.registration), 1)
                          ]),
                          createVNode("span", { class: "text-[10px] text-gray-400" }, "If any of these detail(s) are missing or incorrect, please let us know ASAP")
                        ]),
                        createVNode("div", { class: "mt-auto flex items-center justify-end" }, [
                          createVNode("div", { class: "md:hidden block" }, [
                            createVNode("span", { class: "text-black font-semibold md:text-lg text-base mt-auto" }, "£" + toDisplayString(__props.timeslot.price), 1)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-between pb-3 border-b" }, [
                      createVNode("span", { class: "sm:text-2xl text-xl" }, "Your Cart"),
                      createVNode("span", { class: "sm:block hidden text-gray-500 text-sm mt-auto" }, "Price")
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.cart, (item) => {
                      return openBlock(), createBlock(_sfc_main$G, { tyre: item }, null, 8, ["tyre"]);
                    }), 256)),
                    createVNode("div", { class: "md:w-1/2 w-full mx-auto" }, [
                      createVNode("div", { class: "pt-8 pb-4 mx-4 space-y-4 border-b" }, [
                        createVNode("div", { class: "flex items-start justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-sm" }, "Subtotal"),
                            createVNode("span", { class: "block text-[10px]" }, "(" + toDisplayString(__props.summary.items) + " items)", 1)
                          ]),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "£" + toDisplayString(__props.summary.subtotal), 1)
                        ]),
                        createVNode("div", { class: "flex items-start justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-sm" }, "Fitting & Balancing"),
                            createVNode("span", { class: "block text-[10px]" }, "£" + toDisplayString(__props.summary.fitting_cost) + " per tyre", 1)
                          ]),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "£" + toDisplayString(__props.summary.fitting), 1)
                        ]),
                        createVNode("div", { class: "flex items-start justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-sm" }, "Call-out"),
                            createVNode("span", { class: "block text-[10px]" }, "We Come To You")
                          ]),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "£" + toDisplayString(__props.summary.callout), 1)
                        ]),
                        createVNode("div", { class: "flex items-start justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-sm" }, "Tyre Disposal"),
                            createVNode("span", { class: "block text-[10px]" }, "£" + toDisplayString(__props.summary.disposal_cost) + " per tyre", 1)
                          ]),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "£" + toDisplayString(__props.summary.disposal), 1)
                        ])
                      ]),
                      createVNode("div", { class: "pt-8 pb-4 px-4 space-y-4 border-b" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "block text-sm" }, "Total"),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "£" + toDisplayString(__props.summary.total), 1)
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "block text-sm" }, "Paid 25%"),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "-£" + toDisplayString(__props.summary.total_today), 1)
                        ]),
                        createVNode("div", { class: "flex items-start justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-sm text-red-500" }, "Remaining Balance"),
                            createVNode("span", { class: "block text-[10px]" }, "Pay when the tyre is fitted")
                          ]),
                          createVNode("span", { class: "block text-sm text-gray-600 font-semibold" }, "£" + toDisplayString(__props.summary.total_later), 1)
                        ])
                      ]),
                      createVNode("span", { class: "block text-[11px] text-center text-gray-500" }, "TXN: " + toDisplayString(__props.summary.txn_id), 1)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/OrderSummary.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __name: "Timeslot",
  __ssrInlineRender: true,
  props: {
    timeslot: {
      type: Object,
      required: true
    },
    date: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const timeslotSelected = computed(() => {
      let timeslot = usePage().props.cart.timeslot;
      if (!timeslot)
        return false;
      return timeslot.day === form.day && timeslot.month === form.month && timeslot.year === form.year && timeslot.from === form.from && timeslot.to === form.to;
    });
    const props = __props;
    const form = useForm({
      day: props.date.day,
      month: props.date.month,
      year: props.date.year,
      from: props.timeslot.from,
      to: props.timeslot.to
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        disabled: timeslotSelected.value,
        class: { "xl:w-20 md:w-16 w-14 xl:py-2 py-1 rounded-lg": true, "bg-white border-2 border-green-500 text-black": timeslotSelected.value, "bg-gray-100 text-gray-700 border border-gray-300 hover:shadow-lg hover:text-black transition duration-300 ease-in-out": !timeslotSelected.value }
      }, _attrs))}>`);
      if (__props.timeslot.type === "anytime") {
        _push(`<!--[-->`);
        if (__props.date.price_anytime === 0) {
          _push(`<span class="uppercase md:text-sm text-xs font-semibold">Free</span>`);
        } else {
          _push(`<span class="uppercase md:text-sm text-xs font-semibold">£${ssrInterpolate(__props.date.price_anytime)}</span>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (__props.timeslot.type === "specific") {
        _push(`<!--[-->`);
        if (__props.date.price_specific === 0) {
          _push(`<span class="uppercase md:text-sm text-xs font-semibold">Free</span>`);
        } else {
          _push(`<span class="uppercase md:text-sm text-xs font-semibold">£${ssrInterpolate(__props.date.price_specific)}</span>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Timeslot/Timeslot.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "TimeslotsPC",
  __ssrInlineRender: true,
  props: {
    timeslots: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-x border-b rounded-b-lg border-gray-300 font-montserrat" }, _attrs))}><div class="grid grid-cols-7 w-full py-4"><div class="col-span-2"></div><!--[-->`);
      ssrRenderList(__props.timeslots.dates, (date) => {
        _push(`<div class="col-span-1"><div class="flex items-center justify-center flex-col"><span>${ssrInterpolate(date.day_text)}</span><span class="font-semibold">${ssrInterpolate(date.day)}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-7 py-4 bg-gray-100 border-y"><div class="col-span-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg><span class="font-semibold text-sm">Anytime</span></div></div><div class="grid grid-cols-7 w-full py-4"><div class="col-span-2 flex items-center justify-center"><span class="font-semibold text-sm text-gray-700">${ssrInterpolate(__props.timeslots.slots[0])}</span></div><!--[-->`);
      ssrRenderList(__props.timeslots.dates, (date) => {
        _push(`<div class="col-span-1">`);
        if (date.timeslots[0]) {
          _push(`<div class="flex items-center justify-center flex-col">`);
          if (!date.timeslots[0].taken) {
            _push(ssrRenderComponent(_sfc_main$E, {
              onSelectTimeslot: (form, timeslotSelected) => _ctx.$emit("selectTimeslot", form, timeslotSelected),
              timeslot: date.timeslots[0],
              date,
              key: date.date
            }, null, _parent));
          } else {
            _push(`<span class="text-center block xl:w-20 md:w-16 w-14 xl:py-2 py-1 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed"><span class="uppercase text-[10px] font-semibold"> Taken </span></span>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-7 py-4 bg-gray-100 border-y"><div class="col-span-2 flex items-center justify-center"><span class="font-semibold text-sm">Specific Times</span></div></div><!--[-->`);
      ssrRenderList(__props.timeslots.slots, (slot, index) => {
        _push(`<!--[-->`);
        if (index !== 0) {
          _push(`<div class="${ssrRenderClass({ "grid grid-cols-7 w-full py-4": true, "bg-gray-50": index % 2 === 0 })}"><div class="col-span-2 flex items-center justify-center"><span class="font-semibold text-sm text-gray-700">${ssrInterpolate(slot)}</span></div><!--[-->`);
          ssrRenderList(__props.timeslots.dates, (date) => {
            _push(`<div class="col-span-1">`);
            if (date.timeslots[index]) {
              _push(`<div class="flex items-center justify-center flex-col">`);
              if (!date.timeslots[index].taken) {
                _push(ssrRenderComponent(_sfc_main$E, {
                  onSelectTimeslot: (form, timeslotSelected) => _ctx.$emit("selectTimeslot", form, timeslotSelected),
                  timeslot: date.timeslots[index],
                  date,
                  key: date.date
                }, null, _parent));
              } else {
                _push(`<span class="text-center block xl:w-20 md:w-16 w-14 xl:py-2 py-1 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed"><span class="uppercase text-[10px] font-semibold"> Taken </span></span>`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Timeslot/TimeslotsPC.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "TimeslotMob",
  __ssrInlineRender: true,
  props: {
    timeslot: {
      type: Object,
      required: true
    },
    date: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const timeslotSelected = computed(() => {
      let timeslot = usePage().props.cart.timeslot;
      if (!timeslot)
        return false;
      return timeslot.day === form.day && timeslot.month === form.month && timeslot.year === form.year && timeslot.from === form.from && timeslot.to === form.to;
    });
    const props = __props;
    const form = useForm({
      day: props.date.day,
      month: props.date.month,
      year: props.date.year,
      from: props.timeslot.from,
      to: props.timeslot.to
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.timeslot.taken) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          disabled: timeslotSelected.value,
          class: { "border rounded-lg w-full px-4 py-2 flex items-center justify-between": true, "bg-white border-2 border-green-500 text-black": timeslotSelected.value, "bg-gray-100 border-gray-300": !timeslotSelected.value }
        }, _attrs))}><div><span class="font-semibold text-sm text-gray-700">${ssrInterpolate(__props.timeslot.from)} - ${ssrInterpolate(__props.timeslot.to)}</span></div><div>`);
        if (__props.timeslot.type === "anytime") {
          _push(`<!--[-->`);
          if (__props.date.price_anytime <= 0) {
            _push(`<span class="uppercase text-sm font-semibold">Free</span>`);
          } else {
            _push(`<span class="uppercase text-sm font-semibold">£${ssrInterpolate(__props.date.price_anytime)}</span>`);
          }
          _push(`<!--]-->`);
        } else if (__props.timeslot.type === "specific") {
          _push(`<!--[-->`);
          if (__props.date.price_specific <= 0) {
            _push(`<span class="uppercase text-sm font-semibold">Free</span>`);
          } else {
            _push(`<span class="uppercase text-sm font-semibold">£${ssrInterpolate(__props.date.price_specific)}</span>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></button>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          disabled: "",
          class: "bg-gray-100 border-gray-300 opacity-50 border rounded-lg w-full px-4 py-2 flex items-center justify-between"
        }, _attrs))}><span class="font-semibold text-sm text-gray-700">${ssrInterpolate(__props.timeslot.from)} - ${ssrInterpolate(__props.timeslot.to)}</span><span class="uppercase text-sm font-semibold">TAKEN</span></button>`);
      }
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Timeslot/TimeslotMob.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {
  __name: "TimeslotsMob",
  __ssrInlineRender: true,
  props: {
    timeslots: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const selectedDate = ref(props.timeslots.dates[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-x border-b rounded-b-lg border-gray-300 font-montserrat" }, _attrs))}><div class="grid grid-cols-5 w-full py-4"><!--[-->`);
      ssrRenderList(__props.timeslots.dates, (date) => {
        _push(`<div class="col-span-1 p-1"><button class="${ssrRenderClass({ "border rounded-lg w-full px-4 py-2": true, "bg-white border-2 border-green-500 text-black": date.date === selectedDate.value.date, "bg-gray-100 border-gray-300": date.date !== selectedDate.value.date })}"><div class="flex items-center justify-center flex-col"><span class="text-sm">${ssrInterpolate(date.day_text)}</span><span class="text-sm font-semibold">${ssrInterpolate(date.day)}</span></div></button></div>`);
      });
      _push(`<!--]--></div><div class="p-4 bg-gray-100 border-y"><div class="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg><span class="font-semibold text-sm">Anytime</span></div></div><div class="w-full p-4"><!--[-->`);
      ssrRenderList(selectedDate.value.Timeslots.vue, (timeslot, index) => {
        _push(`<!--[-->`);
        if (timeslot.type === "anytime") {
          _push(ssrRenderComponent(_sfc_main$C, {
            onSelectTimeslot: (form, timeslotSelected) => _ctx.$emit("selectTimeslot", form, timeslotSelected),
            timeslot: _ctx.Timeslot.vue,
            date: selectedDate.value,
            key: selectedDate.value.date + timeslot.from
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="p-4 bg-gray-100 border-y"><span class="font-semibold text-sm">Specific Times</span></div><div class="w-full p-4 space-y-4"><!--[-->`);
      ssrRenderList(selectedDate.value.Timeslots.vue, (timeslot, index) => {
        _push(`<!--[-->`);
        if (timeslot.type === "specific") {
          _push(ssrRenderComponent(_sfc_main$C, {
            onSelectTimeslot: (form, timeslotSelected) => _ctx.$emit("selectTimeslot", form, timeslotSelected),
            timeslot: _ctx.Timeslot.vue,
            date: selectedDate.value,
            key: selectedDate.value.date + timeslot.from
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      if (selectedDate.value.timeslots.length < 2) {
        _push(`<div class=""> No specific times available </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Timeslot/TimeslotsMob.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __name: "Timeslots",
  __ssrInlineRender: true,
  props: {
    class: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const processing = ref(false);
    const timeslots = ref(null);
    const form = useForm({
      week: 0
    });
    onMounted(() => {
      getTimeslots(0);
    });
    function getTimeslots(dir) {
      if (dir === -1 && form.week === 0)
        return;
      if (dir === 1 && form.week === 3)
        return;
      form.week += dir;
      processing.value = true;
      form.get("/checkout/timeslots", {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          processing.value = false;
          timeslots.value = usePage().props.flash.checkout.timeslots;
          usePage().props.flash.errors.timeslot = void 0;
        }
      });
    }
    function selectTimeslot(form2, timeslotSelected) {
      if (timeslotSelected)
        return;
      processing.value = true;
      form2.post("/checkout/timeslots/select", {
        preserveScroll: true,
        onSuccess: () => {
          processing.value = false;
          usePage().props.flash.errors.timeslot = void 0;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div style="${ssrRenderStyle(processing.value ? null : { display: "none" })}" class="absolute bg-gray-100/40 inset-0 z-10"></div>`);
      if (_ctx.Timeslots.vue) {
        _push(`<div class="${ssrRenderClass(__props.class)}"><div class="py-4 md:space-x-16 space-x-4 flex items-center justify-center border border-gray-300 rounded-t-lg"><button${ssrIncludeBooleanAttr(unref(form).week === 0) ? " disabled" : ""} class="bg-gray-100 text-gray-800 rounded-lg md:px-8 px-4 md:py-3 py-1.5 disabled:opacity-75 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" class="sm:h-6 h-4 sm:w-6 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg></button><span class="font-light sm:text-lg text-base">${ssrInterpolate(timeslots.value.from)} - ${ssrInterpolate(timeslots.value.to)}</span><button${ssrIncludeBooleanAttr(unref(form).week === 3) ? " disabled" : ""} class="bg-gray-100 text-gray-800 rounded-lg md:px-8 px-4 md:py-3 py-1.5 disabled:opacity-75 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" class="sm:h-6 h-4 sm:w-6 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>`);
        if (_ctx.Timeslots.vue) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_sfc_main$D, {
            onSelectTimeslot: selectTimeslot.vue,
            timeslots: _ctx.Timeslots.vue,
            class: "sm:block hidden"
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$B, {
            onSelectTimeslot: selectTimeslot.vue,
            timeslots: _ctx.Timeslots.vue,
            class: "sm:hidden block"
          }, null, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Timeslot/Timeslots.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const PreCheckout_vue_vue_type_style_index_0_scoped_0f08197d_lang = "";
const __default__ = {
  layout: _sfc_main$I
};
const _sfc_main$z = /* @__PURE__ */ Object.assign(__default__, {
  __name: "PreCheckout",
  __ssrInlineRender: true,
  props: {
    cart: {
      type: Object,
      required: true
    },
    tyre: {
      type: Object,
      required: true
    },
    summary: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const showTimeslotError = ref(false);
    watch(() => usePage().props.flash.errors.timeslot, (err) => {
      if (err) {
        showTimeslotError.value = true;
      }
    });
    const form = useForm({
      phone: null,
      email: null,
      postcode: props.cart.postcode,
      addressLine1: null,
      addressLine2: null,
      town: null,
      registration: null
    });
    function submit() {
      form.post("/checkout");
    }
    function changePostcode() {
      router.post("/cart/remove");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-0f08197d${_scopeId}>Checkout - Fitting Details | Tyres Anywhere LTD</title><link rel="canonical" href="https://tyresanywhere.com/checkout" data-v-0f08197d${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Checkout - Fitting Details | Tyres Anywhere LTD"),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/checkout"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-24" data-v-0f08197d>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative grid grid-cols-12 gap-x-6 gap-y-4" data-v-0f08197d${_scopeId}><div class="col-span-12" data-v-0f08197d${_scopeId}><div class="lg:w-3/4 w-full" data-v-0f08197d${_scopeId}><div class="w-[250px] mx-auto flex text-xs flex-row justify-between items-center text-gray-400" data-v-0f08197d${_scopeId}><span class="flex items-center text-gray-600 font-bold" data-v-0f08197d${_scopeId}> Fitting Details </span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-0f08197d${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-0f08197d${_scopeId}></path></svg><span class="flex items-center" data-v-0f08197d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-0f08197d${_scopeId}><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-0f08197d${_scopeId}></path></svg> Payment </span></div></div></div><div class="lg:col-span-9 col-span-12 space-y-4" data-v-0f08197d${_scopeId}><div class="bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg" data-v-0f08197d${_scopeId}><span class="block text-center text-2xl font-light" data-v-0f08197d${_scopeId}>Your Contact Details</span><span class="block mt-2 text-center text-gray-500 text-sm font-light" data-v-0f08197d${_scopeId}>We&#39;ll use this to keep you updated on your order.</span><div class="mt-6" data-v-0f08197d${_scopeId}><label for="phone" class="text-sm" data-v-0f08197d${_scopeId}>Phone Number <span class="text-red-500" data-v-0f08197d${_scopeId}>*</span></label><div class="flex items-center w-full bg-white border border-gray-300 rounded" data-v-0f08197d${_scopeId}><span class="font-light text-sm px-4 py-1.5 bg-gray-100" data-v-0f08197d${_scopeId}>+44</span><input${ssrRenderAttr("value", unref(form).phone)} type="text" id="phone" class="grow-1 border-0 outline-0 text-sm py-1.5 px-3 w-full shadow-sm appearance-none outline-0 focus:ring-2 transition" data-v-0f08197d${_scopeId}></div>`);
            if (__props.errors.phone) {
              _push2(`<span class="text-xs text-red-500" data-v-0f08197d${_scopeId}>${ssrInterpolate(__props.errors.phone)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4" data-v-0f08197d${_scopeId}><label for="email" class="text-sm" data-v-0f08197d${_scopeId}>Email Address <span class="text-red-500" data-v-0f08197d${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="text" id="email" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-0f08197d${_scopeId}>`);
            if (__props.errors.email) {
              _push2(`<span class="text-xs text-red-500" data-v-0f08197d${_scopeId}>${ssrInterpolate(__props.errors.email)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg" data-v-0f08197d${_scopeId}><span class="block text-center text-2xl font-light" data-v-0f08197d${_scopeId}>Your Fitting Address</span><div class="mt-6" data-v-0f08197d${_scopeId}><div class="sm:w-1/3 w-full" data-v-0f08197d${_scopeId}><label for="postcode" class="text-sm" data-v-0f08197d${_scopeId}>Postcode <span class="text-red-500" data-v-0f08197d${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).postcode)} type="text" id="postcode" class="uppercase text-sm py-1.5 px-3 w-full border border-gray-300 bg-gray-200 cursor-not-allowed shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" readonly disabled data-v-0f08197d${_scopeId}></div><span class="text-xs text-gray-500" data-v-0f08197d${_scopeId}>To change your fitting address, please click <span class="text-blue-600 underline cursor-pointer" data-v-0f08197d${_scopeId}>here</span> - this will empty your cart.</span></div><div class="mt-4" data-v-0f08197d${_scopeId}><label for="addressLine1" class="text-sm" data-v-0f08197d${_scopeId}>Address Line 1 <span class="text-red-500" data-v-0f08197d${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).addressLine1)} type="text" id="addressLine1" autocomplete="address-line1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-0f08197d${_scopeId}>`);
            if (__props.errors.addressLine1) {
              _push2(`<span class="text-xs text-red-500" data-v-0f08197d${_scopeId}>${ssrInterpolate(__props.errors.addressLine1)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4" data-v-0f08197d${_scopeId}><label for="addressLine2" class="text-sm" data-v-0f08197d${_scopeId}>Address Line 2</label><input${ssrRenderAttr("value", unref(form).addressLine2)} type="text" id="addressLine2" autocomplete="address-line2" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-0f08197d${_scopeId}>`);
            if (__props.errors.addressLine2) {
              _push2(`<span class="text-xs text-red-500" data-v-0f08197d${_scopeId}>${ssrInterpolate(__props.errors.addressLine2)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4" data-v-0f08197d${_scopeId}><label for="town" class="text-sm" data-v-0f08197d${_scopeId}>Town/City <span class="text-red-500" data-v-0f08197d${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).town)} type="text" id="town" autocomplete="address-level1" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-0f08197d${_scopeId}>`);
            if (__props.errors.town) {
              _push2(`<span class="text-xs text-red-500" data-v-0f08197d${_scopeId}>${ssrInterpolate(__props.errors.town)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4" data-v-0f08197d${_scopeId}><div class="sm:w-1/3 w-full" data-v-0f08197d${_scopeId}><label for="registration" class="text-sm" data-v-0f08197d${_scopeId}>Vehicle Registration <span class="text-red-500" data-v-0f08197d${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).registration)} type="text" id="registration" class="uppercase text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition" data-v-0f08197d${_scopeId}>`);
            if (__props.errors.registration) {
              _push2(`<span class="text-xs text-red-500" data-v-0f08197d${_scopeId}>${ssrInterpolate(__props.errors.registration)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg" data-v-0f08197d${_scopeId}><span class="block text-center text-2xl font-light" data-v-0f08197d${_scopeId}>Your Fitting Timeslot</span><div style="${ssrRenderStyle(showTimeslotError.value ? null : { display: "none" })}" class="flex items-center justify-between bg-red-400 w-full py-3 px-4 mb-4 mt-6 rounded-lg" data-v-0f08197d${_scopeId}><span class="text-sm text-white" data-v-0f08197d${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.errors.Timeslot.vue)}</span><button class="text-white" data-v-0f08197d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-0f08197d${_scopeId}><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-0f08197d${_scopeId}></path></svg></button></div>`);
            _push2(ssrRenderComponent(_sfc_main$A, { class: "mt-4" }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-center mt-12" data-v-0f08197d${_scopeId}><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass({ "relative rounded-lg outline-0 h-12 w-64 text-base text-center uppercase transition duration-150 ease-in-out bg-green-500 hover:bg-green-600 text-white font-semibold": true, "button--loading": unref(form).processing })}" data-v-0f08197d${_scopeId}>`);
            if (!unref(form).processing) {
              _push2(`<span data-v-0f08197d${_scopeId}>Continue</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div></div></div><div class="lg:col-span-3 col-span-12 space-y-4" data-v-0f08197d${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$K, {
              summary: __props.summary,
              cart: __props.cart,
              tyre: __props.tyre
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative grid grid-cols-12 gap-x-6 gap-y-4" }, [
                createVNode("div", { class: "col-span-12" }, [
                  createVNode("div", { class: "lg:w-3/4 w-full" }, [
                    createVNode("div", { class: "w-[250px] mx-auto flex text-xs flex-row justify-between items-center text-gray-400" }, [
                      createVNode("span", { class: "flex items-center text-gray-600 font-bold" }, " Fitting Details "),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", { class: "flex items-center" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-3 w-3 mr-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createTextVNode(" Payment ")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-9 col-span-12 space-y-4" }, [
                  createVNode("div", { class: "bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg" }, [
                    createVNode("span", { class: "block text-center text-2xl font-light" }, "Your Contact Details"),
                    createVNode("span", { class: "block mt-2 text-center text-gray-500 text-sm font-light" }, "We'll use this to keep you updated on your order."),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "phone",
                        class: "text-sm"
                      }, [
                        createTextVNode("Phone Number "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode("div", { class: "flex items-center w-full bg-white border border-gray-300 rounded" }, [
                        createVNode("span", { class: "font-light text-sm px-4 py-1.5 bg-gray-100" }, "+44"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          type: "text",
                          id: "phone",
                          class: "grow-1 border-0 outline-0 text-sm py-1.5 px-3 w-full shadow-sm appearance-none outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).phone]
                        ])
                      ]),
                      __props.errors.phone ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-red-500"
                      }, toDisplayString(__props.errors.phone), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("label", {
                        for: "email",
                        class: "text-sm"
                      }, [
                        createTextVNode("Email Address "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        type: "text",
                        id: "email",
                        class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ]),
                      __props.errors.email ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-red-500"
                      }, toDisplayString(__props.errors.email), 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg" }, [
                    createVNode("span", { class: "block text-center text-2xl font-light" }, "Your Fitting Address"),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("div", { class: "sm:w-1/3 w-full" }, [
                        createVNode("label", {
                          for: "postcode",
                          class: "text-sm"
                        }, [
                          createTextVNode("Postcode "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
                          type: "text",
                          id: "postcode",
                          class: "uppercase text-sm py-1.5 px-3 w-full border border-gray-300 bg-gray-200 cursor-not-allowed shadow-sm appearance-none rounded outline-0 focus:ring-2 transition",
                          readonly: "",
                          disabled: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).postcode]
                        ])
                      ]),
                      createVNode("span", { class: "text-xs text-gray-500" }, [
                        createTextVNode("To change your fitting address, please click "),
                        createVNode("span", {
                          onClick: changePostcode,
                          class: "text-blue-600 underline cursor-pointer"
                        }, "here"),
                        createTextVNode(" - this will empty your cart.")
                      ])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("label", {
                        for: "addressLine1",
                        class: "text-sm"
                      }, [
                        createTextVNode("Address Line 1 "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).addressLine1 = $event,
                        type: "text",
                        id: "addressLine1",
                        autocomplete: "address-line1",
                        class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).addressLine1]
                      ]),
                      __props.errors.addressLine1 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-red-500"
                      }, toDisplayString(__props.errors.addressLine1), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("label", {
                        for: "addressLine2",
                        class: "text-sm"
                      }, "Address Line 2"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).addressLine2 = $event,
                        type: "text",
                        id: "addressLine2",
                        autocomplete: "address-line2",
                        class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).addressLine2]
                      ]),
                      __props.errors.addressLine2 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-red-500"
                      }, toDisplayString(__props.errors.addressLine2), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("label", {
                        for: "town",
                        class: "text-sm"
                      }, [
                        createTextVNode("Town/City "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).town = $event,
                        type: "text",
                        id: "town",
                        autocomplete: "address-level1",
                        class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).town]
                      ]),
                      __props.errors.town ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-red-500"
                      }, toDisplayString(__props.errors.town), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("div", { class: "sm:w-1/3 w-full" }, [
                        createVNode("label", {
                          for: "registration",
                          class: "text-sm"
                        }, [
                          createTextVNode("Vehicle Registration "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).registration = $event,
                          type: "text",
                          id: "registration",
                          class: "uppercase text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).registration]
                        ]),
                        __props.errors.registration ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.registration), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white xl:px-24 sm:px-12 px-6 py-12 rounded-lg border border-gray-300 shadow-lg" }, [
                    createVNode("span", { class: "block text-center text-2xl font-light" }, "Your Fitting Timeslot"),
                    withDirectives(createVNode("div", { class: "flex items-center justify-between bg-red-400 w-full py-3 px-4 mb-4 mt-6 rounded-lg" }, [
                      createVNode("span", {
                        class: "text-sm text-white",
                        textContent: toDisplayString(_ctx.$page.props.flash.errors.Timeslot.vue)
                      }, null, 8, ["textContent"]),
                      createVNode("button", {
                        onClick: ($event) => {
                          showTimeslotError.value = false;
                          _ctx.$page.props.flash.errors.timeslot = "";
                        },
                        class: "text-white"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ], 512), [
                      [vShow, showTimeslotError.value]
                    ]),
                    createVNode(_sfc_main$A, { class: "mt-4" }),
                    createVNode("div", { class: "flex items-center justify-center mt-12" }, [
                      createVNode("button", {
                        onClick: submit,
                        disabled: unref(form).processing,
                        class: { "relative rounded-lg outline-0 h-12 w-64 text-base text-center uppercase transition duration-150 ease-in-out bg-green-500 hover:bg-green-600 text-white font-semibold": true, "button--loading": unref(form).processing }
                      }, [
                        !unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Continue")) : createCommentVNode("", true)
                      ], 10, ["disabled"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-3 col-span-12 space-y-4" }, [
                  createVNode(_sfc_main$K, {
                    summary: __props.summary,
                    cart: __props.cart,
                    tyre: __props.tyre
                  }, null, 8, ["summary", "cart", "tyre"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/PreCheckout.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const PreCheckout = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-0f08197d"]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PreCheckout
}, Symbol.toStringTag, { value: "Module" }));
const Product_vue_vue_type_style_index_0_scoped_c84da68c_lang = "";
const _sfc_main$y = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    tyre: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      tyre_id: props.tyre.id,
      quantity: 2
    });
    const inCart = computed(() => {
      return usePage().props.cart.tyre ? usePage().props.cart.tyre.id === props.tyre.id : false;
    });
    const capitalize = (text) => {
      return text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["h-[500px] max-w-sm mx-auto flex flex-col items-center justify-start rounded-lg overflow-hidden shadow-lg border", ["border-" + __props.tyre.quality + "-primary", "shadow-" + __props.tyre.quality + "-primary"]]
      }, _attrs))} data-v-c84da68c><div class="h-[120px] w-full bg-white overflow-hidden flex items-center justify-center product-head" data-v-c84da68c><div class="w-2/5 shrink-0 pt-8" data-v-c84da68c><img class="w-full"${ssrRenderAttr("src", `/images/tyres/tyre/${__props.tyre.brand.toLowerCase()}.webp`)} onerror="this.onerror=null; this.src=\`/images/tyres/tyre/sample.webp\`"${ssrRenderAttr("alt", capitalize(__props.tyre.brand))} data-v-c84da68c></div><div class="w-3/5 pr-2 h-full shrink-0 flex flex-col items-start justify-end" data-v-c84da68c><div class="flex items-start justify-start w-full pt-1 pb-4 pr-1" data-v-c84da68c><img class="max-h-[42px]"${ssrRenderAttr("src", `/images/tyres/logo/${__props.tyre.brand.toLowerCase()}.webp`)}${ssrRenderAttr("alt", capitalize(__props.tyre.brand))} data-v-c84da68c></div><div class="product-name" data-v-c84da68c><span class="block text-[13px] font-bold" data-v-c84da68c>${ssrInterpolate(__props.tyre.model)}</span><span class="block text-sm" data-v-c84da68c>${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span></div></div></div><div class="grow w-full bg-white product-body" data-v-c84da68c><span class="block text-center text-gray-500 text-xs" data-v-c84da68c>Product may differ from image</span><div class="py-1.5 px-2.5 flex items-center justify-start space-x-4" data-v-c84da68c>`);
      if (__props.tyre.usage === "passenger" || __props.tyre.usage === "passenger_4x4") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/passenger.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Passenger Tyre")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.usage === "4x4" || __props.tyre.usage === "passenger_4x4") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/4x4.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "4x4 Tyre")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.usage === "commercial") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/commercial.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Commercial Tyre")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.extra_load) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/extra-load.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Extra Load")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.season === "all-season") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/all-season.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "All-Season Tyre")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.season === "summer") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/summer.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Summer Tyre")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.season === "winter") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/winter.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Winter Tyre")))} data-v-c84da68c>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-5 pl-2" data-v-c84da68c><div class="flex items-center text-budget-primary text-xl font-semibold" data-v-c84da68c><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, "Fuel Rating"))} data-v-c84da68c><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mr-2" fill="currentColor" data-v-c84da68c><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z" data-v-c84da68c></path></svg></div><span class="uppercase" data-v-c84da68c>${ssrInterpolate(__props.tyre.fuel)}</span></div><div class="flex items-center text-budget-primary text-xl font-semibold" data-v-c84da68c><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, "Wet Grip Rating"))} data-v-c84da68c><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16" data-v-c84da68c><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" data-v-c84da68c></path></svg></div><span class="uppercase" data-v-c84da68c>${ssrInterpolate(__props.tyre.wet)}</span></div><div class="flex items-center text-budget-primary text-xl font-semibold" data-v-c84da68c><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, "Noise Level"))} data-v-c84da68c><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16" data-v-c84da68c><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" data-v-c84da68c></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" data-v-c84da68c></path><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" data-v-c84da68c></path></svg></div><span class="uppercase" data-v-c84da68c>${ssrInterpolate(__props.tyre.noise)}</span></div></div><div class="mt-8" data-v-c84da68c><div class="flex flex-col items-center" data-v-c84da68c><span class="text-2xl font-bold" data-v-c84da68c>£${ssrInterpolate(__props.tyre.price)}</span><span class="text-xs text-gray-400" data-v-c84da68c>Per Tyre</span></div><span class="block px-12 mt-4 text-xs text-center text-gray-500" data-v-c84da68c>Or <span class="text-red-500 font-bold" data-v-c84da68c>£${ssrInterpolate(__props.tyre.price_offer)}</span> each when you purchase 4 or more tyres.</span><form class="grid grid-cols-3 gap-x-2 px-2 mt-4" data-v-c84da68c><div class="col-span-1" data-v-c84da68c><input${ssrRenderAttr("value", unref(form).tyre_id)} type="hidden" data-v-c84da68c><select${ssrIncludeBooleanAttr(inCart.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-c84da68c><option value="1" data-v-c84da68c${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "1") : ssrLooseEqual(unref(form).quantity, "1")) ? " selected" : ""}>Qty: 1</option><option selected value="2" data-v-c84da68c>Qty: 2</option><option value="3" data-v-c84da68c${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "3") : ssrLooseEqual(unref(form).quantity, "3")) ? " selected" : ""}>Qty: 3</option><option value="4" data-v-c84da68c${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "4") : ssrLooseEqual(unref(form).quantity, "4")) ? " selected" : ""}>Qty: 4</option><option value="5" data-v-c84da68c${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "5") : ssrLooseEqual(unref(form).quantity, "5")) ? " selected" : ""}>Qty: 5</option></select></div><div class="col-span-2" data-v-c84da68c><button type="submit" class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase transition duration-150 ease-in-out": true, "bg-green-500 hover:bg-green-600 text-white font-semibold": !inCart.value, "border border-gray-300 text-black hover:bg-gray-300": inCart.value, "button--loading": unref(form).processing })}" data-v-c84da68c>`);
      if (inCart.value) {
        _push(`<span class="flex items-center justify-center" data-v-c84da68c><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-c84da68c><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" data-v-c84da68c></path></svg><span data-v-c84da68c>View Cart</span></span>`);
      } else if (!unref(form).processing) {
        _push(`<span data-v-c84da68c>Buy Now</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/Product.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Product = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-c84da68c"]]);
const FilterDropdown_vue_vue_type_style_index_0_scoped_ba9525da_lang = "";
const _sfc_main$x = {
  __name: "FilterDropdown",
  __ssrInlineRender: true,
  props: {
    options: {
      required: true
    },
    name: String,
    value: {
      required: true
    },
    id: String
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const open = ref(false);
    watch(() => props.value, (newValue) => {
      value.value = newValue;
    });
    const value = ref(props.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative border-t border-gray-400" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => open.value = false)))} data-v-ba9525da><div class="cursor-pointer" data-v-ba9525da><button type="button" class="w-full flex items-center justify-start select-none text-xs px-2 py-3 font-semibold border-gray-300 cursor-pointer" data-v-ba9525da><span class="text-site-400" data-v-ba9525da>${ssrInterpolate(__props.name)}</span><span class="ml-auto text-right" data-v-ba9525da>${ssrInterpolate(value.value ? value.value : "Any")}</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-ba9525da><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" data-v-ba9525da></path></svg></button></div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute z-50 right-0 top-0 translate-x-full flex drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)]" data-v-ba9525da><div class="w-0 h-0 border-r-white border-t-[20px] border-b-[20px] border-r-[20px] border-b-transparent border-t-transparent" data-v-ba9525da></div><div class="rounded-r-md rounded-bl-md overflow-hidden bg-white -ml-px px-4 pt-4 -translate-y-6 w-[600px]" data-v-ba9525da><div class="flex justify-between pb-2" data-v-ba9525da><span data-v-ba9525da>Select Brand</span><button class="text-site-400 underline" data-v-ba9525da>Close</button></div>`);
      if (Array.isArray(__props.options)) {
        _push(`<!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<div class="grid grid-cols-3 gap-y-2 px-4 py-2" data-v-ba9525da><button class="col-span-1 py-2 group flex justify-start text-xs" data-v-ba9525da><span class="mr-2 group-hover:underline group-hover:text-site-400" data-v-ba9525da>${ssrInterpolate(option)}</span><span class="text-stone-400" data-v-ba9525da>(4)</span></button></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(__props.options, (optionGroup) => {
          _push(`<div data-v-ba9525da><div class="py-2 px-4 bg-gray-200" data-v-ba9525da>${ssrInterpolate(optionGroup.name)}</div><div class="grid grid-cols-3 gap-y-2 px-4 py-2" data-v-ba9525da><!--[-->`);
          ssrRenderList(optionGroup.options, (option) => {
            _push(`<button class="col-span-1 py-2 group flex justify-start text-xs" data-v-ba9525da><span class="mr-2 group-hover:underline group-hover:text-site-400" data-v-ba9525da>${ssrInterpolate(option)}</span><span class="text-stone-400" data-v-ba9525da>(4)</span></button>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/FilterDropdown.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const FilterDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-ba9525da"]]);
const FilterCheckbox_vue_vue_type_style_index_0_scoped_f14cd25f_lang = "";
const _sfc_main$w = {
  __name: "FilterCheckbox",
  __ssrInlineRender: true,
  props: {
    options: {
      required: true
    },
    name: String,
    value: {
      required: true
    },
    id: String
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const open = ref(false);
    watch(() => props.value, (newValue) => {
      value.value = newValue;
    });
    const value = ref(props.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative border-t border-gray-400" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => open.value = false)))} data-v-f14cd25f><div class="w-full flex items-center justify-start select-none text-xs px-2 py-3 font-semibold cursor-pointer" data-v-f14cd25f><span class="text-site-400" data-v-f14cd25f>${ssrInterpolate(__props.name)}</span></div><div class="w-full px-2 pt-1 pb-3 space-y-2" data-v-f14cd25f><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<div class="flex items-center justify-start" data-v-f14cd25f><div class="mr-2" data-v-f14cd25f><input type="checkbox"${ssrRenderAttr("id", option.value)}${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(Array.isArray(value.value) && value.value.includes(option.value)) ? " checked" : ""} data-v-f14cd25f></div><label${ssrRenderAttr("for", option.value)} class="text-sm" data-v-f14cd25f>${ssrInterpolate(option.label)}</label></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/FilterCheckbox.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const FilterCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-f14cd25f"]]);
const FilterRadio_vue_vue_type_style_index_0_scoped_96484668_lang = "";
const _sfc_main$v = {
  __name: "FilterRadio",
  __ssrInlineRender: true,
  props: {
    options: {
      required: true
    },
    name: String,
    value: {
      required: true
    },
    id: String
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const open = ref(false);
    watch(() => props.value, (newValue) => {
      value.value = newValue;
    });
    const value = ref(props.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative border-t border-gray-400" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => open.value = false)))} data-v-96484668><div class="w-full flex items-center justify-start select-none text-xs px-2 py-3 font-semibold cursor-pointer" data-v-96484668><span class="text-site-400" data-v-96484668>${ssrInterpolate(__props.name)}</span></div><div class="w-full px-2 pt-1 pb-3 space-y-2" data-v-96484668><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<div class="flex items-center justify-start" data-v-96484668><div class="mr-2" data-v-96484668><input type="radio"${ssrRenderAttr("id", option.value)}${ssrRenderAttr("name", __props.id)}${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(value.value === option.value) ? " checked" : ""} data-v-96484668></div><label${ssrRenderAttr("for", option.value)} class="text-sm" data-v-96484668>${ssrInterpolate(option.label)}</label></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/FilterRadio.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const FilterRadio = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-96484668"]]);
const _sfc_main$u = {
  __name: "ProductFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const page = usePage();
    const brands = {
      1: {
        name: "Premium",
        options: ["Bridgestone", "Continental", "Dunlop", "Goodyear", "Michelin", "Pirelli"]
      },
      2: {
        name: "Mid-Range",
        options: ["Avon", "Falken", "Firestone", "Hankook", "Nexen", "Yokohama"]
      },
      3: {
        name: "Budget",
        options: ["Banoze", "Farroad", "Churchill"]
      }
    };
    const tyre_type = [{ label: "4x4", value: "4x4" }, { label: "Car", value: "passenger" }];
    const tyre_quality = [
      { label: "Budget", value: "budget" },
      { label: "Mid Range", value: "midrange" },
      { label: "Premium", value: "premium" }
    ];
    const tyre_attr = [
      { label: "Commercial", value: "commercial" },
      { label: "Run Flat", value: "runflat" },
      { label: "Extra Load", value: "extra_load" }
    ];
    const speed_rating = [
      { label: "T or better", value: "T" },
      { label: "H or better", value: "H" },
      { label: "V or better", value: "V" },
      { label: "W or better", value: "W" }
    ];
    let filterForm;
    if (page.props.filters) {
      filterForm = useForm({
        brand: page.props.filters.brand,
        tyre_type: page.props.filters.tyre_type,
        tyre_quality: page.props.filters.tyre_quality,
        tyre_attr: page.props.filters.tyre_attr,
        speed_rating: page.props.filters.speed_rating
      });
    } else {
      filterForm = useForm({
        brand: null,
        tyre_type: null,
        tyre_quality: null,
        tyre_attr: null,
        speed_rating: null
      });
    }
    function update(property, value) {
      switch (property) {
        case "brand":
          filterForm.brand = value;
          break;
        case "tyre_type":
          filterForm.tyre_type = value;
          break;
        case "tyre_quality":
          filterForm.tyre_quality = value;
          break;
        case "tyre_attr":
          filterForm.tyre_attr = value;
          break;
        case "speed_rating":
          filterForm.speed_rating = value;
          break;
      }
      filterForm.post("/tyre/filter");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full pt-2 rounded-md bg-gray-100 border border-gray-400 shadow-2xl font-montserrat" }, _attrs))}><div class="flex flex-row xl:justify-center justify-between items-center pb-2 xl:mb-8 xl:px-0 px-4"><div class="xl:hidden block">`);
      if (!open.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"></path><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"></path></svg>`);
      }
      _push(`</div><div class="flex flex-col justify-center items-center"><span class="lowercase text-center">${ssrInterpolate(unref(usePage)().props.products_count + " products found")}</span><span class="lowercase text-xs text-center mb-1">${ssrInterpolate(unref(usePage)().props.filter_count + " filters selected")}</span><a class="flex items-center justify-center text-xs uppercase font-semibold text-site-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg> Reset </a></div><div class="xl:hidden block">`);
      if (!open.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"></path><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"></path></svg>`);
      }
      _push(`</div></div><div class="xl:block hidden bg-transparent transition-all duration-300 ease-in-out"><div class="w-full xl:text-base text-sm">`);
      _push(ssrRenderComponent(FilterDropdown, {
        options: brands,
        name: "Brand",
        id: "brand",
        value: unref(filterForm).brand,
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(FilterCheckbox, {
        options: tyre_type,
        name: "Tyre Type",
        id: "tyre_type",
        value: unref(filterForm).tyre_type,
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(FilterCheckbox, {
        options: tyre_quality,
        name: "Tyre Quality",
        id: "tyre_quality",
        value: unref(filterForm).tyre_quality,
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(FilterCheckbox, {
        options: tyre_attr,
        name: "Tyre Attributes",
        id: "tyre_attr",
        value: unref(filterForm).tyre_attr,
        onUpdate: update
      }, null, _parent));
      _push(ssrRenderComponent(FilterRadio, {
        options: speed_rating,
        name: "Speed Rating",
        id: "speed_rating",
        value: unref(filterForm).speed_rating,
        onUpdate: update
      }, null, _parent));
      _push(`</div></div>`);
      if (open.value) {
        _push(`<div class="xl:hidden block bg-transparent transition-all duration-300 ease-in-out"><div class="w-full xl:text-base text-sm">`);
        _push(ssrRenderComponent(FilterDropdown, {
          options: brands,
          name: "Brand",
          id: "brand",
          value: unref(filterForm).brand,
          onUpdate: update
        }, null, _parent));
        _push(ssrRenderComponent(FilterCheckbox, {
          options: tyre_type,
          name: "Tyre Type",
          id: "tyre_type",
          value: unref(filterForm).tyre_type,
          onUpdate: update
        }, null, _parent));
        _push(ssrRenderComponent(FilterCheckbox, {
          options: tyre_quality,
          name: "Tyre Quality",
          id: "tyre_quality",
          value: unref(filterForm).tyre_quality,
          onUpdate: update
        }, null, _parent));
        _push(ssrRenderComponent(FilterCheckbox, {
          options: tyre_attr,
          name: "Tyre Attributes",
          id: "tyre_attr",
          value: unref(filterForm).tyre_attr,
          onUpdate: update
        }, null, _parent));
        _push(ssrRenderComponent(FilterRadio, {
          options: speed_rating,
          name: "Speed Rating",
          id: "speed_rating",
          value: unref(filterForm).speed_rating,
          onUpdate: update
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filterForm).processing) {
        _push(`<div class="fixed w-full h-full bg-white opacity-10 inset-0 z-50"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/ProductFilter.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const RecommendedProduct_vue_vue_type_style_index_0_scoped_6a5e01be_lang = "";
const _sfc_main$t = {
  __name: "RecommendedProduct",
  __ssrInlineRender: true,
  props: {
    tyre: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      tyre_id: props.tyre.id,
      quantity: 2
    });
    const inCart = computed(() => {
      return usePage().props.cart.tyre ? usePage().props.cart.tyre.id === props.tyre.id : false;
    });
    const capitalize = (text) => {
      return text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["h-60 w-full mx-auto flex flex-row items-center justify-start rounded-lg overflow-hidden shadow-lg border", ["border-" + __props.tyre.quality + "-primary", "shadow-" + __props.tyre.quality + "-primary"]]
      }, _attrs))} data-v-6a5e01be><div class="h-full xl:w-2/5 md:w-1/3 sm:w-[35%] w-2/5 bg-white overflow-hidden flex flex-col items-center justify-center product-head" data-v-6a5e01be><div class="relative flex items-start w-full h-48 2xl:pt-8 pt-2 md:ml-2 sm:ml-4 ml-0" data-v-6a5e01be><img class="absolute 2xl:h-[150px] xl:h-32 md:h-40 h-36 w-fit sm:-left-6 left-1/2 sm:translate-x-0 -translate-x-1/2 bottom-0 object-cover object-top"${ssrRenderAttr("src", `/images/tyres/tyre/${__props.tyre.brand.toLowerCase()}.webp`)} onerror="this.onerror=null; this.src=\`/images/tyres/tyre/sample.webp\`"${ssrRenderAttr("alt", capitalize(__props.tyre.brand))} data-v-6a5e01be><div class="2xl:w-1/3 lg:w-5/12 md:w-1/3 sm:w-2/5 w-full sm:block flex justify-between sm:pl-1 sm:px-0 px-2 ml-auto relative z-10" data-v-6a5e01be><div class="flex items-center text-budget-primary 2xl:text-lg xl:text-base lg:text-lg sm:text-base text-sm font-semibold" data-v-6a5e01be><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, "Fuel Rating"))} data-v-6a5e01be><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="2xl:w-4 xl:w-3 sm:w-4 w-3 2xl:h-4 xl:h-3 sm:h-4 h-3 sm:mr-2 mr-1" fill="currentColor" data-v-6a5e01be><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z" data-v-6a5e01be></path></svg></div><span class="uppercase" data-v-6a5e01be>${ssrInterpolate(__props.tyre.fuel)}</span></div><div class="flex items-center text-budget-primary 2xl:text-lg xl:text-base lg:text-lg sm:text-base text-sm font-semibold" data-v-6a5e01be><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, "Wet Grip Rating"))} data-v-6a5e01be><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-4 xl:w-3 sm:w-4 w-3 2xl:h-4 xl:h-3 sm:h-4 h-3 sm:mr-2 mr-1" fill="currentColor" viewBox="0 0 16 16" data-v-6a5e01be><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" data-v-6a5e01be></path></svg></div><span class="uppercase" data-v-6a5e01be>${ssrInterpolate(__props.tyre.wet)}</span></div><div class="flex items-center text-budget-primary 2xl:text-lg xl:text-base lg:text-lg sm:text-base text-sm font-semibold" data-v-6a5e01be><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, "Noise Level"))} data-v-6a5e01be><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-4 xl:w-3 sm:w-4 w-3 2xl:h-4 xl:h-3 sm:h-4 h-3 sm:mr-2 mr-1" fill="currentColor" viewBox="0 0 16 16" data-v-6a5e01be><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" data-v-6a5e01be></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" data-v-6a5e01be></path><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" data-v-6a5e01be></path></svg></div><span class="uppercase" data-v-6a5e01be>${ssrInterpolate(__props.tyre.noise)}</span></div></div></div><div class="w-full px-2 h-12 bg-white flex items-start justify-center" data-v-6a5e01be><div class="flex items-start justify-start w-full" data-v-6a5e01be><img class="max-h-[42px]"${ssrRenderAttr("src", `/images/tyres/logo/${__props.tyre.brand.toLowerCase()}.webp`)}${ssrRenderAttr("alt", capitalize(__props.tyre.brand))} data-v-6a5e01be></div></div></div><div class="2xl:w-3/5 md:w-2/3 sm:w-[65%] w-3/5 h-full flex flex-col bg-white product-body px-2" data-v-6a5e01be><div class="product-name py-3 border-b" data-v-6a5e01be><span class="block text-lg font-bold" data-v-6a5e01be>${ssrInterpolate(__props.tyre.model)}</span><span class="block text-sm" data-v-6a5e01be>${ssrInterpolate(__props.tyre.width)}/${ssrInterpolate(__props.tyre.profile)} R${ssrInterpolate(__props.tyre.rim)} ${ssrInterpolate(__props.tyre.speed)}</span></div><div class="flex items-center justify-start space-x-4" data-v-6a5e01be>`);
      if (__props.tyre.usage === "passenger" || __props.tyre.usage === "passenger_4x4") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/passenger.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Passenger Tyre")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.usage === "4x4" || __props.tyre.usage === "passenger_4x4") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/4x4.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "4x4 Tyre")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.usage === "commercial") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/commercial.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Commercial Tyre")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.extra_load) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/extra-load.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Extra Load")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.season === "all-season") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/all-season.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "All-Season Tyre")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.season === "summer") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/summer.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Summer Tyre")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tyre.season === "winter") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "w-[30px] h-[30px]",
          src: "/images/tyres/icons/winter.webp",
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Winter Tyre")))} data-v-6a5e01be>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-2" data-v-6a5e01be><span class="sm:text-2xl text-xl font-bold text-center block" data-v-6a5e01be>£${ssrInterpolate(__props.tyre.price)}</span><span class="block mt-1 text-xs text-center text-gray-500" data-v-6a5e01be>Or <span class="text-red-500 font-bold" data-v-6a5e01be>£${ssrInterpolate(__props.tyre.price_offer)}</span> each when you purchase 4 or more tyres.</span></div><form class="grid grid-cols-3 gap-x-2 mt-auto mb-2" data-v-6a5e01be><div class="col-span-1" data-v-6a5e01be><input${ssrRenderAttr("value", unref(form).tyre_id)} type="hidden" data-v-6a5e01be><select${ssrIncludeBooleanAttr(inCart.value) ? " disabled" : ""} class="sm:block hidden text-xs w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-6a5e01be><option value="1" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "1") : ssrLooseEqual(unref(form).quantity, "1")) ? " selected" : ""}>Qty: 1</option><option value="2" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "2") : ssrLooseEqual(unref(form).quantity, "2")) ? " selected" : ""}>Qty: 2</option><option value="3" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "3") : ssrLooseEqual(unref(form).quantity, "3")) ? " selected" : ""}>Qty: 3</option><option value="4" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "4") : ssrLooseEqual(unref(form).quantity, "4")) ? " selected" : ""}>Qty: 4</option><option value="5" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "5") : ssrLooseEqual(unref(form).quantity, "5")) ? " selected" : ""}>Qty: 5</option></select><select${ssrIncludeBooleanAttr(inCart.value) ? " disabled" : ""} class="sm:hidden block text-xs w-full py-1.5 sm:px-3 px-1.5 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-6a5e01be><option value="1" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "1") : ssrLooseEqual(unref(form).quantity, "1")) ? " selected" : ""}>1</option><option value="2" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "2") : ssrLooseEqual(unref(form).quantity, "2")) ? " selected" : ""}>2</option><option value="3" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "3") : ssrLooseEqual(unref(form).quantity, "3")) ? " selected" : ""}>3</option><option value="4" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "4") : ssrLooseEqual(unref(form).quantity, "4")) ? " selected" : ""}>4</option><option value="5" data-v-6a5e01be${ssrIncludeBooleanAttr(Array.isArray(unref(form).quantity) ? ssrLooseContain(unref(form).quantity, "5") : ssrLooseEqual(unref(form).quantity, "5")) ? " selected" : ""}>5</option></select></div><div class="col-span-2" data-v-6a5e01be><button type="submit" class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.125rem] sm:text-base text-sm text-center uppercase transition duration-150 ease-in-out": true, "bg-green-500 hover:bg-green-600 text-white font-semibold": !inCart.value, "border border-gray-300 text-black hover:bg-gray-300": inCart.value, "button--loading": unref(form).processing })}" data-v-6a5e01be>`);
      if (inCart.value) {
        _push(`<span class="flex items-center justify-center" data-v-6a5e01be><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-6a5e01be><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" data-v-6a5e01be></path></svg><span data-v-6a5e01be>View Cart</span></span>`);
      } else if (!unref(form).processing) {
        _push(`<span data-v-6a5e01be>Buy Now</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></form></div></div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/RecommendedProduct.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const RecommendedProduct = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-6a5e01be"]]);
const _sfc_main$s = {
  __name: "RecommendedProducts",
  __ssrInlineRender: true,
  props: {
    recommended_tyres: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:p-6 p-0 sm:bg-stone-600 mb-10 rounded-lg" }, _attrs))}><h1 class="mb-3 sm:text-3xl text-2xl text-white text-center font-poppins font-bold">Recommended Tyres for you</h1><div class="grid xl:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-4 gap-y-6 lg:px-0"><!--[-->`);
      ssrRenderList(__props.recommended_tyres, (tyre) => {
        _push(ssrRenderComponent(RecommendedProduct, {
          onAddToCart: (a, b) => _ctx.$emit("addToCart", a, b),
          tyre
        }, null, _parent));
      });
      _push(`<!--]--></div><hr class="sm:hidden block mt-6 border-stone-900"></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Checkout/RecommendedProducts.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const Products_vue_vue_type_style_index_0_scoped_d2a0d6df_lang = "";
const _sfc_main$r = {
  __name: "Products",
  __ssrInlineRender: true,
  props: {
    tyres: Object,
    recommended_tyres: Object
  },
  setup(__props) {
    const cartSuccess = computed(() => usePage().props.flash.success.cart.add);
    watch(cartSuccess, () => {
      if (cartSuccess.value) {
        let audio = new Audio("/audio/notify.mp3");
        audio.play();
        setTimeout(() => {
          usePage().props.flash.success.cart.add = "";
        }, 2e3);
      }
    });
    function addToCart(form, inCart) {
      if (inCart) {
        router.get("/cart");
        return;
      }
      if (form.tyre_id && form.quantity) {
        form.submit("post", "/cart/add", {
          preserveScroll: true
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-d2a0d6df${_scopeId}>Products | Tyres Anywhere LTD</title><meta name="description" content="Products" data-v-d2a0d6df${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/checkout/products" data-v-d2a0d6df${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Products | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Products"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/checkout/products"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, { class: "font-montserrat" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 sm:px-4 px-2" data-v-d2a0d6df${_scopeId}><div class="grid grid-cols-12 gap-x-4 xl:gap-y-0 gap-y-4" data-v-d2a0d6df${_scopeId}><div class="xl:col-span-2 col-span-12" data-v-d2a0d6df${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$u, null, null, _parent2, _scopeId));
            _push2(`</div><div class="xl:col-span-10 col-span-12" data-v-d2a0d6df${_scopeId}>`);
            if (__props.recommended_tyres.length > 0) {
              _push2(ssrRenderComponent(_sfc_main$s, {
                onAddToCart: addToCart,
                recommended_tyres: __props.recommended_tyres
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-12 gap-y-6" data-v-d2a0d6df${_scopeId}><!--[-->`);
            ssrRenderList(__props.tyres, (tyre) => {
              _push2(ssrRenderComponent(Product, {
                onAddToCart: addToCart,
                tyre
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (__props.tyres.length + __props.recommended_tyres.length <= 0) {
              _push2(`<div class="container" data-v-d2a0d6df${_scopeId}><div class="lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5 mx-auto" data-v-d2a0d6df${_scopeId}><div class="h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden" data-v-d2a0d6df${_scopeId}><img class="md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50" src="/images/cart/empty-shopping-cart.png" alt="" data-v-d2a0d6df${_scopeId}><div class="flex flex-col z-10" data-v-d2a0d6df${_scopeId}><span class="sm:text-2xl text-xl font-semibold" data-v-d2a0d6df${_scopeId}>No products found!</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/",
                class: "flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Search for Tyres `);
                  } else {
                    return [
                      createTextVNode(" Search for Tyres ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 sm:px-4 px-2" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-x-4 xl:gap-y-0 gap-y-4" }, [
                  createVNode("div", { class: "xl:col-span-2 col-span-12" }, [
                    createVNode(_sfc_main$u)
                  ]),
                  createVNode("div", { class: "xl:col-span-10 col-span-12" }, [
                    __props.recommended_tyres.length > 0 ? (openBlock(), createBlock(_sfc_main$s, {
                      key: 0,
                      onAddToCart: addToCart,
                      recommended_tyres: __props.recommended_tyres
                    }, null, 8, ["recommended_tyres"])) : createCommentVNode("", true),
                    createVNode("div", { class: "grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-6 sm:gap-y-12 gap-y-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.tyres, (tyre) => {
                        return openBlock(), createBlock(Product, {
                          onAddToCart: addToCart,
                          tyre
                        }, null, 8, ["tyre"]);
                      }), 256)),
                      __props.tyres.length + __props.recommended_tyres.length <= 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "container"
                      }, [
                        createVNode("div", { class: "lg:w-[800px] md:w-[650px] sm:h-auto h-64 w-full px-5 py-5 mx-auto" }, [
                          createVNode("div", { class: "h-full flex items-center justify-center sm:space-x-12 relative overflow-hidden" }, [
                            createVNode("img", {
                              class: "md:w-56 md:h-56 sm:w-40 sm:h-40 h-full sm:static absolute top-0 bottom-0 left-1/2 sm:translate-x-0 -translate-x-1/2 object-contain object-center sm:opacity-100 opacity-50",
                              src: "/images/cart/empty-shopping-cart.png",
                              alt: ""
                            }),
                            createVNode("div", { class: "flex flex-col z-10" }, [
                              createVNode("span", { class: "sm:text-2xl text-xl font-semibold" }, "No products found!"),
                              createVNode(unref(Link), {
                                href: "/",
                                class: "flex items-center justify-center mt-4 relative w-full rounded outline-0 h-[2.125rem] bg-green-500 hover:bg-green-600 text-white font-semibold text-base text-center uppercase transition duration-150 ease-in-out"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Search for Tyres ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle(cartSuccess.value ? null : { display: "none" })}" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold" data-v-d2a0d6df> Item successfully added to your cart. </div><!--]-->`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Products.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Products = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-d2a0d6df"]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Products
}, Symbol.toStringTag, { value: "Module" }));
const CustomerRating_vue_vue_type_style_index_0_scoped_66814047_lang = "";
const _sfc_main$q = {
  __name: "CustomerRating",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        rating: 5,
        author: "Tracy Wong",
        message: "I initially phoned Malik on his mobile and then sent him my car tyre details, my location including photo on WhstsApp. He stuck to the ball park costs..."
      },
      {
        rating: 5,
        author: "Catherine",
        message: "Speedy response to phone call, and call out.  Very efficient, fair price - job done!  Would recommend."
      },
      {
        rating: 5,
        author: "Gavin Hoh",
        message: "Excellent customer services and job well done !  Highly recommended"
      },
      {
        rating: 5,
        author: "Paul",
        message: "Excellent prompt & professional service. Highly recommended"
      },
      {
        rating: 5,
        author: "Jasmin Freeman",
        message: "I am so grateful for the service that was provided! I called whilst broken down on a dual carriage way, 120 miles away from home with two flat tyres!!..."
      },
      {
        rating: 5,
        author: "Rebecca Cooper",
        message: "Tyres Anywhere LTD came out today to sort my tyre out after a bad blowout, they gave me a quote straight away and were with me within the hour even though I was..."
      },
      {
        rating: 5,
        author: "Christopher Arkell",
        message: "Superb service, great price came to help in no time highly recommended"
      },
      {
        rating: 5,
        author: "Darren Smith",
        message: "I called at 3am on a Saturday night/Sunday morning due to a puncture and no spare in my model of car.  Just over an hour later I was back on the road..."
      },
      {
        rating: 5,
        author: "Waleed Humayun",
        message: "Great service, arrived and changed our tyre within 35 mins of our call."
      },
      {
        rating: 5,
        author: "Aaron Filmer",
        message: "Fantastic service!!! Out 3 companies I called at 7:30am they were the only ones who answered! They ordered 2 tyres there and then with a promise of fi..."
      },
      {
        rating: 5,
        author: "Joseph Alleyne",
        message: "Great service! Gave them a call and we’re out to me within half hr!"
      },
      {
        rating: 5,
        author: "Ben Chappell",
        message: "Just phone the number - problem solved. Very helpful chap came within 40 mins of phoning, sorted it all out for us. Price they charged was pretty reas..."
      },
      {
        rating: 5,
        author: "上燕梁",
        message: "Very good service！My car broke down near Bicester! AA is so expensive so I call them! And it help! The price is reasonable and provide good service"
      },
      {
        rating: 5,
        author: "Steve Jones",
        message: "Lifesaver! Had a blown tyre on the M40 and they came out in 30 minutes and fitted the tyre perfectly allowing us to get on with our weekend!"
      },
      {
        rating: 5,
        author: "Hugo French",
        message: "Excellent service from Malik, especially given he came out at 6:30pm on a Saturday. Efficiently fitted new tyre to wheel and was great value too. Woul..."
      },
      {
        rating: 5,
        author: "Austin Yandoon",
        message: "Very quick on coming to me. Changed my flat tyre fast. 10/10 thanks"
      },
      {
        rating: 5,
        author: "Fleur Brading",
        message: "Amazing service - thank you Malek! Only place open on bank holiday, rapid and professional service, fair price. Highly recommend"
      },
      {
        rating: 5,
        author: "Hamed Izadpanah",
        message: "Amazing service, Malek was with us in 30 minutes with the correct spare tire and we were back on the road in 15 minutes!"
      },
      {
        rating: 5,
        author: "Agata Kajzer",
        message: "Very quick response, professional service, very good after care support service, I would highly recommend."
      },
      {
        rating: 5,
        author: "Paula Nowlan",
        message: "Absolutely amazing service and got me out of a jam that the RAC could not help me out with thank you guys so so much"
      },
      {
        rating: 5,
        author: "Tom Lawson",
        message: "Highly recommended. Got me out of a tricky situation in good time. Serves London-end of M40 corridor. Very happy to pay a premium for this level of ser..."
      },
      {
        rating: 5,
        author: "Charlotte Pontin",
        message: "Brilliant service and very efficient! They were out to us within half an hour and had replaced two flat tyres within one hour of the call! Definitely r..."
      }
    ];
    shuffle(reviews);
    const translate = ref(0);
    const index = ref(0);
    ref(null);
    const reviewsPerSlide = ref(0);
    computed(() => {
      return Math.ceil(reviews.length / reviewsPerSlide.value);
    });
    onMounted(() => {
      window.addEventListener("resize", setReviewsPerSlide);
      setReviewsPerSlide();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", setReviewsPerSlide);
    });
    function setReviewsPerSlide() {
      reviewsPerSlide.value = getReviewsPerSlide();
      translate.value = 0;
      index.value = 0;
    }
    function getReviewsPerSlide() {
      let width = window.innerWidth;
      if (width >= 1024) {
        return 3;
      } else if (width < 1024 && width >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ];
      }
      return array;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-66814047><h2 class="text-center font-montserrat sm:text-3xl text-2xl font-bold mb-2" data-v-66814047>See what our customers think</h2><p class="text-center md:text-xl sm:text-lg text-sm font-light mb-4" data-v-66814047>Browse through our customers testimonials.</p><div class="flex items-center justify-center" data-v-66814047><div class="rating flex items-center justify-center bg-gray-100" data-v-66814047><span class="font-montserrat font-extrabold text-sm mr-2.5" data-v-66814047>RATED SUPERB</span><span class="flex items-center text-yellow-400" data-v-66814047><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg></span></div></div><div class="w-full md:h-[300px] h-auto pb-8 md:mt-0 sn:mt-12 mt-6 relative select-none" data-v-66814047><div class="review-wrapper mx-auto md:h-full flex items-center justify-center overflow-hidden" data-v-66814047><div class="flex items-start justify-start flex-nowrap w-full transition-transform duration-700 ease-in-out" style="${ssrRenderStyle(`transform: translateX(${translate.value}px)`)}" data-v-66814047><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(`<div class="lg:w-1/3 md:w-1/2 w-full md:p-7 p-5 shrink-0 grow-0" data-v-66814047><span class="flex items-center justify-center text-yellow-400" data-v-66814047><!--[-->`);
        ssrRenderList(review.rating, (rating) => {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-66814047><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-66814047></path></svg>`);
        });
        _push(`<!--]--></span><span class="block text-center text-sm my-4" data-v-66814047>${ssrInterpolate(review.message)}</span><span class="block text-center text-wheelfit-600 font-montserrat uppercase font-bold md:text-xl text-lg" data-v-66814047>${ssrInterpolate(review.author)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="md:hidden flex items-center justify-center flex-row space-x-3" data-v-66814047><button class="bg-gray-800 text-white w-10 h-10 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&lt;</button><button class="bg-gray-800 text-white w-10 h-10 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&gt;</button></div><button class="md:block hidden absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 m-1 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&lt;</button><button class="md:block hidden absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 m-1 outline-0 border-0 text-3xl" type="button" name="button" data-v-66814047>&gt;</button></div></div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/CustomerRating.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const CustomerRating = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-66814047"]]);
const _sfc_main$p = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 py-12 px-3" }, _attrs))}><h3 class="text-center font-montserrat mb-2 md:text-3xl text-2xl font-bold">Popular Tyre Brands Avaliable</h3><p class="text-center lg:text-xl text-lg font-light mb-4">We supply &amp; fit new, high-quality and branded tyres for all major vehicles</p><div class="w-full overflow-hidden grid md:grid-cols-9 grid-cols-3 md:gap-x-3 md:gap-y-0 sm:gap-x-6 gap-x-2 sm:gap-y-6 gap-y-2 items-center"><img class="col-span-1" src="/images/tyres/logo/bridgestone.webp" alt="Bridgestone Logo" width="129" height="18"><img class="col-span-1" src="/images/tyres/logo/continental.webp" alt="Continental Logo" width="129" height="30"><img class="col-span-1" src="/images/tyres/logo/pirelli.webp" alt="Pirelli Logo" width="129" height="34"><img class="col-span-1" src="/images/tyres/logo/goodyear.webp" alt="Goodyear Logo" width="129" height="31"><img class="col-span-1" src="/images/tyres/logo/hankook.webp" alt="Hankook Logo" width="129" height="17"><img class="col-span-1" src="/images/tyres/logo/yokohama.webp" alt="Yokohama Logo" width="129" height="19"><img class="col-span-1" src="/images/tyres/logo/dunlop.webp" alt="Dunlop Logo" width="129" height="55"><img class="col-span-1" src="/images/tyres/logo/avon.webp" alt="Avon Logo" width="129" height="22"><img class="col-span-1" src="/images/tyres/logo/michelin.webp" alt="Michelin Logo" width="129" height="22"></div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/PopularTyreBrands.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const PopularTyreBrands = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$o = {
  __name: "AreasWeCover",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[330px] relative select-none" }, _attrs))}><img src="/images/showcase/gallary/mobile-tyre-fitting-7.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" class="absolute inset-0 object-center object-cover h-full w-full brightness-[0.4]" alt="Tyres Anywhere LTD Mobile Tyres Van"><div class="absolute md:right-[15%] md:left-[15%] right-[5%] left-[5%] top-5 sm:pt-8 pb-5 text-white text-center"><div class="mb-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div><h3 class="text-center sm:text-3xl text-2xl font-extrabold font-montserrat">Areas We Cover</h3><div class="mt-6 text-base"><p>We cover the majority of England and are able to send one of our tyre fitters to your location promptly</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/sitemap",
        class: "block mt-4 underline hover:text-cyan-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See all areas`);
          } else {
            return [
              createTextVNode("See all areas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/AreasWeCover.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "OurServices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-x border-t border-gray-300 pt-8 pb-16" }, _attrs))}><p class="text-center text-3xl font-montserrat font-bold mb-8">Our Emergency Services</p><div class="sm:w-full w-64 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:px-8 md:px-28 sm:px-8 px-0 xl:gap-x-4 lg:gap-x-3 gap-x-4 lg:gap-y-0 gap-y-4 items-center justify-center">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "col-span-1",
        href: "/mobile-tyre-fitting",
        title: "Mobile Tyre Fitting"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"${_scopeId}><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/mobile-tyre-fitting-emergency.webp" alt="Mobile Tyre Fitting"${_scopeId}><div class="z-10"${_scopeId}><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase"${_scopeId}>Mobile Tyre Fitting</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out" }, [
                createVNode("img", {
                  class: "absolute inset-0 w-full h-full brightness-50 object-cover",
                  src: "/images/services/mobile-tyre-fitting-emergency.webp",
                  alt: "Mobile Tyre Fitting"
                }),
                createVNode("div", { class: "z-10" }, [
                  createVNode("h2", { class: "xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase" }, "Mobile Tyre Fitting")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "col-span-1",
        href: "/breakdown-recovery",
        title: "Breakdown Recovery"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"${_scopeId}><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/recovery.webp" alt="Breakdown Recovery"${_scopeId}><div class="z-10"${_scopeId}><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase"${_scopeId}>Breakdown Recovery</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out" }, [
                createVNode("img", {
                  class: "absolute inset-0 w-full h-full brightness-50 object-cover",
                  src: "/images/services/recovery.webp",
                  alt: "Breakdown Recovery"
                }),
                createVNode("div", { class: "z-10" }, [
                  createVNode("h2", { class: "xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase" }, "Breakdown Recovery")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="col-span-1"><div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/jump-start.webp" alt="Jump Starts"><div class="z-10"><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Jump Starts</h2></div></div></div><div class="col-span-1"><div class="relative w-full xl:h-60 lg:h-40 h-48 relative border border-gray-600 rounded flex flex-col items-center justify-center space-y-4 p-2 hover:shadow-xl transition duration-300 ease-in-out"><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/images/services/battery-fitting.webp" alt="Battery"><div class="z-10"><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase">Battery</h2></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/OurServices.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const SearchTyres_vue_vue_type_style_index_0_scoped_30e8e2d2_lang = "";
const _sfc_main$m = {
  __name: "SearchTyres",
  __ssrInlineRender: true,
  setup(__props) {
    const tyre_sizes = computed(() => usePage().props.tyre_sizes);
    const profiles = ref(null);
    const rims = ref(null);
    const valid = computed(() => {
      return typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode;
    });
    const form = useForm({
      width: "- Select -",
      profile: "- Select -",
      rim: "- Select -",
      postcode: null
    });
    watch(() => form.width, (width, prevWidth) => {
      if (width !== prevWidth) {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
      if (typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map((size) => size.profile))].sort();
      } else {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
    });
    watch(() => form.profile, (profile, prevProfile) => {
      if (profile !== prevProfile) {
        form.reset("rim");
        rims.value = null;
      }
      if (typeof form.width !== "number") {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
        return;
      }
      if (typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => size.width === form.width && size.profile === profile).map((size) => size.rim))].sort();
      } else {
        form.reset("profile", "rim");
        rims.value = null;
      }
    });
    const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];
    function getCommonWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return commonWidths.includes(width);
      });
    }
    function getOtherWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return !commonWidths.includes(width);
      });
    }
    function submit() {
      if (valid.value) {
        let url = "/tyre/" + form.width + form.profile + form.rim + "?postcode=" + form.postcode;
        router.get(url);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Container, mergeProps({ class: "hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-6 sm:pb-8 pb-6 shadow-red bg-white" data-v-30e8e2d2${_scopeId}><form class="grid lg:grid-cols-8 grid-cols-12 items-end gap-x-2 gap-y-4 xl:px-24 sm:px-4 px-3 w-full" data-v-30e8e2d2${_scopeId}><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-30e8e2d2${_scopeId}><label for="width_size" class="block font-bold text-center text-sm mb-1" data-v-30e8e2d2${_scopeId}>Width</label><select id="width_size" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-30e8e2d2${_scopeId}><option data-v-30e8e2d2${ssrIncludeBooleanAttr(Array.isArray(unref(form).width) ? ssrLooseContain(unref(form).width, null) : ssrLooseEqual(unref(form).width, null)) ? " selected" : ""}${_scopeId}>- Select -</option><optgroup label="Common" data-v-30e8e2d2${_scopeId}><!--[-->`);
            ssrRenderList(getCommonWidths(), (width) => {
              _push2(`<option${ssrRenderAttr("value", width)} data-v-30e8e2d2${_scopeId}>${ssrInterpolate(width)}</option>`);
            });
            _push2(`<!--]--></optgroup><optgroup label="Other" data-v-30e8e2d2${_scopeId}><!--[-->`);
            ssrRenderList(getOtherWidths(), (width) => {
              _push2(`<option${ssrRenderAttr("value", width)} data-v-30e8e2d2${_scopeId}>${ssrInterpolate(width)}</option>`);
            });
            _push2(`<!--]--></optgroup></select></div><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-30e8e2d2${_scopeId}><label for="profile_size" class="block font-bold text-center text-sm mb-1" data-v-30e8e2d2${_scopeId}>Profile</label><select id="profile_size"${ssrIncludeBooleanAttr(!profiles.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-30e8e2d2${_scopeId}><option data-v-30e8e2d2${ssrIncludeBooleanAttr(Array.isArray(unref(form).profile) ? ssrLooseContain(unref(form).profile, null) : ssrLooseEqual(unref(form).profile, null)) ? " selected" : ""}${_scopeId}>- Select -</option><!--[-->`);
            ssrRenderList(profiles.value, (profile) => {
              _push2(`<option${ssrRenderAttr("value", profile)} data-v-30e8e2d2${_scopeId}>${ssrInterpolate(profile)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-30e8e2d2${_scopeId}><label for="rim_size" class="block font-bold text-center text-sm mb-1" data-v-30e8e2d2${_scopeId}>Rim</label><select id="rim_size"${ssrIncludeBooleanAttr(!rims.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-30e8e2d2${_scopeId}><option data-v-30e8e2d2${ssrIncludeBooleanAttr(Array.isArray(unref(form).rim) ? ssrLooseContain(unref(form).rim, null) : ssrLooseEqual(unref(form).rim, null)) ? " selected" : ""}${_scopeId}>- Select -</option><!--[-->`);
            ssrRenderList(rims.value, (rim) => {
              _push2(`<option${ssrRenderAttr("value", rim)} data-v-30e8e2d2${_scopeId}>${ssrInterpolate(rim)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="lg:col-span-1 sm:col-span-3 col-span-6" data-v-30e8e2d2${_scopeId}><label for="speed" class="block font-bold text-center text-sm mb-1" data-v-30e8e2d2${_scopeId}>Speed</label><select id="speed" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-30e8e2d2${_scopeId}><option selected data-v-30e8e2d2${_scopeId}>Any</option></select></div><div class="lg:col-span-2 sm:col-span-6 col-span-12 relative" data-v-30e8e2d2${_scopeId}><label for="postcode" class="block font-bold text-center text-sm mb-1" data-v-30e8e2d2${_scopeId}>Postcode</label><div class="relative" data-v-30e8e2d2${_scopeId}><input type="text"${ssrRenderAttr("value", unref(form).postcode)} id="postcode" name="postcode" autocomplete="postal-code" class="${ssrRenderClass({ "block uppercase text-sm w-full py-1.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode })}" data-v-30e8e2d2${_scopeId}>`);
            if (_ctx.$page.props.flash.errors.postcode) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-30e8e2d2${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-30e8e2d2${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.$page.props.flash.errors.postcode) {
              _push2(`<span class="w-full absolute left-1/2 -translate-x-1/2 block text-center text-xs text-red-500" data-v-30e8e2d2${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.errors.postcode)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-4" data-v-30e8e2d2${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !valid.value) ? " disabled" : ""} class="${ssrRenderClass({ "relative w-full rounded outline-0 h-[2.125rem] text-white text-lg text-center uppercase transition duration-150 ease-in-out": true, "bg-wheelfit-600 cursor-pointer hover:bg-wheelfit-500 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600": valid.value, "bg-wheelfit-600/30 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing })}" data-v-30e8e2d2${_scopeId}>`);
            if (!unref(form).processing) {
              _push2(`<span class="flex items-center justify-center" data-v-30e8e2d2${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-30e8e2d2${_scopeId}><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-v-30e8e2d2${_scopeId}></path></svg> FIND </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-6 sm:pb-8 pb-6 shadow-red bg-white" }, [
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: "grid lg:grid-cols-8 grid-cols-12 items-end gap-x-2 gap-y-4 xl:px-24 sm:px-4 px-3 w-full"
                }, [
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "width_size",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Width"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).width = $event,
                      id: "width_size",
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", null, "- Select -"),
                      createVNode("optgroup", { label: "Common" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(getCommonWidths(), (width) => {
                          return openBlock(), createBlock("option", {
                            value: width,
                            textContent: toDisplayString(width)
                          }, null, 8, ["value", "textContent"]);
                        }), 256))
                      ]),
                      createVNode("optgroup", { label: "Other" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(getOtherWidths(), (width) => {
                          return openBlock(), createBlock("option", {
                            value: width,
                            textContent: toDisplayString(width)
                          }, null, 8, ["value", "textContent"]);
                        }), 256))
                      ])
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).width]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "profile_size",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Profile"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).profile = $event,
                      id: "profile_size",
                      disabled: !profiles.value,
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", null, "- Select -"),
                      (openBlock(true), createBlock(Fragment, null, renderList(profiles.value, (profile) => {
                        return openBlock(), createBlock("option", {
                          value: profile,
                          textContent: toDisplayString(profile)
                        }, null, 8, ["value", "textContent"]);
                      }), 256))
                    ], 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelSelect, unref(form).profile]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "rim_size",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Rim"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).rim = $event,
                      id: "rim_size",
                      disabled: !rims.value,
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", null, "- Select -"),
                      (openBlock(true), createBlock(Fragment, null, renderList(rims.value, (rim) => {
                        return openBlock(), createBlock("option", {
                          value: rim,
                          textContent: toDisplayString(rim)
                        }, null, 8, ["value", "textContent"]);
                      }), 256))
                    ], 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelSelect, unref(form).rim]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1 sm:col-span-3 col-span-6" }, [
                    createVNode("label", {
                      for: "speed",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Speed"),
                    createVNode("select", {
                      id: "speed",
                      class: "block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none"
                    }, [
                      createVNode("option", { selected: "" }, "Any")
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-2 sm:col-span-6 col-span-12 relative" }, [
                    createVNode("label", {
                      for: "postcode",
                      class: "block font-bold text-center text-sm mb-1"
                    }, "Postcode"),
                    createVNode("div", { class: "relative" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
                        id: "postcode",
                        name: "postcode",
                        autocomplete: "postal-code",
                        class: { "block uppercase text-sm w-full py-1.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode }
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).postcode]
                      ]),
                      _ctx.$page.props.flash.errors.postcode ? (openBlock(), createBlock("svg", {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ])) : createCommentVNode("", true)
                    ]),
                    _ctx.$page.props.flash.errors.postcode ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "w-full absolute left-1/2 -translate-x-1/2 block text-center text-xs text-red-500",
                      textContent: toDisplayString(_ctx.$page.props.flash.errors.postcode)
                    }, null, 8, ["textContent"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "lg:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-4" }, [
                    createVNode("button", {
                      type: "submit",
                      disabled: unref(form).processing || !valid.value,
                      class: { "relative w-full rounded outline-0 h-[2.125rem] text-white text-lg text-center uppercase transition duration-150 ease-in-out": true, "bg-wheelfit-600 cursor-pointer hover:bg-wheelfit-500 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600": valid.value, "bg-wheelfit-600/30 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing }
                    }, [
                      !unref(form).processing ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "flex items-center justify-center"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createTextVNode(" FIND ")
                      ])) : createCommentVNode("", true)
                    ], 10, ["disabled"])
                  ])
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Misc/SearchTyres.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const SearchTyres$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-30e8e2d2"]]);
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-300 pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Content.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$k = {
  __name: "BreakdownRecovery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>24Hr Breakdown Recovery &amp; Assistance | Tyres Anywhere LTD</title><meta name="description" content="Broken down? Need vehicle recovery? Call us now, we&#39;re here to help 24/7"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/breakdown-recovery"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "24Hr Breakdown Recovery & Assistance | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Broken down? Need vehicle recovery? Call us now, we're here to help 24/7"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/breakdown-recovery"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/breakdown-recovery.webp" srcset="/images/showcase/breakdown-recovery.webp 1200w,
                                /images/showcase/breakdown-recovery-500.webp 500w,
                                /images/showcase/breakdown-recovery.webp 300w" class="object-cover object-center w-full h-full brightness-50" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Breakdown Recovery</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/breakdown-recovery.webp",
                srcset: "/images/showcase/breakdown-recovery.webp 1200w,\n                                /images/showcase/breakdown-recovery-500.webp 500w,\n                                /images/showcase/breakdown-recovery.webp 300w",
                class: "object-cover object-center w-full h-full brightness-50",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Breakdown Recovery"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(SearchTyres$1, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Breakdown Recovery</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>If you&#39;re broken down at the side of the road, we&#39;re here to help!</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That&#39;s why we&#39;re here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you&#39;re stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere LTD?</h3><ol class="text-sm space-y-3 mt-4"${_scopeId2}><li${_scopeId2}><b${_scopeId2}>Swift Response Time:</b> We know that time is of the essence when you&#39;re facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we&#39;re just a phone call away whenever you need us. Our rapid response time means you won&#39;t be left waiting for hours. </li><li${_scopeId2}><b${_scopeId2}>24/7 Emergency Assistance:</b> Breakdowns rarely happen at convenient times. That&#39;s why we provide 24/7 emergency assistance, 365 days a year. No matter if it&#39;s the dead of night or a public holiday, we&#39;re committed to helping you get back on the road as quickly as possible. </li><li${_scopeId2}><b${_scopeId2}>Expert Technicians:</b> Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. </li><li${_scopeId2}><b${_scopeId2}>Comprehensive Coverage:</b> We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you&#39;re driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. </li><li${_scopeId2}><b${_scopeId2}>Towing and On-Site Repairs:</b> Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it&#39;s a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. </li><li${_scopeId2}><b${_scopeId2}>Transparent Pricing:</b> We believe in transparent pricing, so you&#39;ll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we&#39;ll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. </li><li${_scopeId2}><b${_scopeId2}>Customer Satisfaction:</b> Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer&#39;s experience with TyresAnywhere is a positive one. Don&#39;t just take our word for it—check out the glowing testimonials from our satisfied clients. </li></ol></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/showcase/gallary/mobile-tyre-fitting-6.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Breakdown rescue"${_scopeId2}></div><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere LTD is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you&#39;ll be prepared for any unexpected breakdowns. Remember, we&#39;re just a phone call away, ready to help you get back on the road with minimal disruption. </p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Breakdown Recovery"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "If you're broken down at the side of the road, we're here to help!"),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That's why we're here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you're stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                          createVNode("ol", { class: "text-sm space-y-3 mt-4" }, [
                            createVNode("li", null, [
                              createVNode("b", null, "Swift Response Time:"),
                              createTextVNode(" We know that time is of the essence when you're facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we're just a phone call away whenever you need us. Our rapid response time means you won't be left waiting for hours. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "24/7 Emergency Assistance:"),
                              createTextVNode(" Breakdowns rarely happen at convenient times. That's why we provide 24/7 emergency assistance, 365 days a year. No matter if it's the dead of night or a public holiday, we're committed to helping you get back on the road as quickly as possible. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Expert Technicians:"),
                              createTextVNode(" Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Comprehensive Coverage:"),
                              createTextVNode(" We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you're driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Towing and On-Site Repairs:"),
                              createTextVNode(" Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it's a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Transparent Pricing:"),
                              createTextVNode(" We believe in transparent pricing, so you'll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we'll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Customer Satisfaction:"),
                              createTextVNode(" Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer's experience with TyresAnywhere is a positive one. Don't just take our word for it—check out the glowing testimonials from our satisfied clients. ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Breakdown rescue"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere LTD is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you'll be prepared for any unexpected breakdowns. Remember, we're just a phone call away, ready to help you get back on the road with minimal disruption. ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Breakdown Recovery"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "If you're broken down at the side of the road, we're here to help!"),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That's why we're here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you're stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                        createVNode("ol", { class: "text-sm space-y-3 mt-4" }, [
                          createVNode("li", null, [
                            createVNode("b", null, "Swift Response Time:"),
                            createTextVNode(" We know that time is of the essence when you're facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we're just a phone call away whenever you need us. Our rapid response time means you won't be left waiting for hours. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "24/7 Emergency Assistance:"),
                            createTextVNode(" Breakdowns rarely happen at convenient times. That's why we provide 24/7 emergency assistance, 365 days a year. No matter if it's the dead of night or a public holiday, we're committed to helping you get back on the road as quickly as possible. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Expert Technicians:"),
                            createTextVNode(" Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Comprehensive Coverage:"),
                            createTextVNode(" We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you're driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Towing and On-Site Repairs:"),
                            createTextVNode(" Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it's a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Transparent Pricing:"),
                            createTextVNode(" We believe in transparent pricing, so you'll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we'll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Customer Satisfaction:"),
                            createTextVNode(" Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer's experience with TyresAnywhere is a positive one. Don't just take our word for it—check out the glowing testimonials from our satisfied clients. ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Breakdown rescue"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere LTD is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you'll be prepared for any unexpected breakdowns. Remember, we're just a phone call away, ready to help you get back on the road with minimal disruption. ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/BreakdownRecovery.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  __name: "CommercialTyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Commercial Mobile Tyre Fitting - Van Tyres Fitted at Home or Work | Tyres Anywhere LTD</title><meta name="description" content="Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/commercial-tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Commercial Mobile Tyre Fitting - Van Tyres Fitted at Home or Work | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/commercial-tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/commercial-tyres.webp" srcset="/images/showcase/commercial-tyres.webp 1000w,
                                /images/showcase/commercial-tyres-500.webp 500w,
                                /images/showcase/commercial-tyres.webp 300w" class="object-cover object-center w-full h-full brightness-75" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Commercial Tyres</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/commercial-tyres.webp",
                srcset: "/images/showcase/commercial-tyres.webp 1000w,\n                                /images/showcase/commercial-tyres-500.webp 500w,\n                                /images/showcase/commercial-tyres.webp 300w",
                class: "object-cover object-center w-full h-full brightness-75",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Commercial Tyres"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(SearchTyres$1, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Commercial Mobile Tyre Fitting</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Yes, we also provide &amp; fit commercial tyres alongside normal passenger tyres.</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> Why not take advantage of our convenient commercial mobile tyre fitting service? </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our services comes to your desired fitting location to fit your new commercial tyre so you don&#39;t have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Commercial Mobile Tyre Fitting"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, we also provide & fit commercial tyres alongside normal passenger tyres."),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " Why not take advantage of our convenient commercial mobile tyre fitting service? "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our services comes to your desired fitting location to fit your new commercial tyre so you don't have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Commercial Mobile Tyre Fitting"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, we also provide & fit commercial tyres alongside normal passenger tyres."),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " Why not take advantage of our convenient commercial mobile tyre fitting service? "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our services comes to your desired fitting location to fit your new commercial tyre so you don't have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/CommercialTyres.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  props: {
    errors: Object
  },
  setup(__props) {
    const form = reactive({
      name: null,
      phone: null,
      email: null,
      postcode: null,
      subject: null,
      body: null
    });
    function submit() {
      router.post("/contact-us", form, {
        preserveScroll: (page) => Object.keys(page.props.errors).length
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Contact Us | Tyres Anywhere LTD</title><meta name="description" content="Contact Tyres Anywhere LTD easily. Get mobile tyre fitting quotes or any other assistance you seek here!"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/contact-us"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Contact Us | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Contact Tyres Anywhere LTD easily. Get mobile tyre fitting quotes or any other assistance you seek here!"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/contact-us"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/contact.webp" srcset="/images/showcase/contact.webp 1000w,
                        /images/showcase/contact-500.webp 500w,
                        /images/showcase/contact.webp 300w" class="object-cover object-center w-full h-full brightness-50" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Contact Tyres Anywhere, Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Contact Us</h1></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/contact.webp",
                srcset: "/images/showcase/contact.webp 1000w,\n                        /images/showcase/contact-500.webp 500w,\n                        /images/showcase/contact.webp 300w",
                class: "object-cover object-center w-full h-full brightness-50",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Contact Tyres Anywhere, Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Contact Us")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, { class: "pt-10 pb-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-3"${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<div${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}></div>`);
            }
            if (!_ctx.$page.props.success) {
              _push2(`<div class="mb-6"${_scopeId}><p class="text-4xl font-light mb-2"${_scopeId}>Contact Us</p><p class="text-sm"${_scopeId}>Contact us by giving us a call on <a class="underline font-semibold" href="tel:07989606060"${_scopeId}>07989 606060</a>, or by filling out the form below.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full md:grid md:grid-cols-12 flex flex-col-reverse"${_scopeId}><div class="lg:col-span-6 md:col-span-7 md:mt-0 mt-8"${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<div${_scopeId}><p class="font-montserrat uppercase tracking-wide font-semibold"${_scopeId}>Message sent successfully</p><span class="text-sm"${_scopeId}>We&#39;ve received your message! Hold tight for our reply soon.</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/",
                class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Back to home `);
                  } else {
                    return [
                      createTextVNode(" Back to home ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<form class="w-full space-y-4"${_scopeId}><div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full"${_scopeId}><div class="sm:w-1/2 w-full"${_scopeId}><label for="name" class="text-sm"${_scopeId}>Name <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.name)} type="text" id="name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.name) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="sm:w-1/2 w-full"${_scopeId}><label for="phone" class="text-sm"${_scopeId}>Phone Number <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.phone)} type="text" id="phone" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.phone) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.phone)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full"${_scopeId}><div class="sm:w-1/2 w-full"${_scopeId}><label for="email" class="text-sm"${_scopeId}>E-mail <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.email)} type="text" id="email" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.email) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.email)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="sm:w-1/2 w-full"${_scopeId}><label for="postcode" class="text-sm"${_scopeId}><span${_scopeId}>Postcode</span><span class="text-gray-400 text-xs ml-2"${_scopeId}>Optional</span></label><input${ssrRenderAttr("value", form.postcode)} type="text" id="postcode" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.postcode) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.postcode)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div${_scopeId}><label for="subject" class="text-sm"${_scopeId}>What are you looking for? <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.subject)} type="text" id="subject" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.subject) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.subject)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><label for="body" class="text-sm"${_scopeId}>Details <span class="text-red-500"${_scopeId}>*</span></label><textarea type="text" id="body" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>${ssrInterpolate(form.body)}</textarea>`);
              if (__props.errors.body) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.body)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center justify-end"${_scopeId}><button type="submit" class="bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out"${_scopeId}> Send message </button></div></form>`);
            }
            _push2(`</div><div class="lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4"${_scopeId}><p class="xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2"${_scopeId}>Tel: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="tel:07989606060"${_scopeId}>07989 606060</a></p><p class="xl:text-3xl lg:text-2xl text-xl text-gray-600"${_scopeId}>Email: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="mailto:info@tyresanywhere.com"${_scopeId}>info@tyresanywhere.com</a></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-3" }, [
                _ctx.$page.props.success ? (openBlock(), createBlock("div", { key: 0 })) : (openBlock(), createBlock("div", { key: 1 })),
                !_ctx.$page.props.success ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mb-6"
                }, [
                  createVNode("p", { class: "text-4xl font-light mb-2" }, "Contact Us"),
                  createVNode("p", { class: "text-sm" }, [
                    createTextVNode("Contact us by giving us a call on "),
                    createVNode("a", {
                      class: "underline font-semibold",
                      href: "tel:07989606060"
                    }, "07989 606060"),
                    createTextVNode(", or by filling out the form below.")
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "w-full md:grid md:grid-cols-12 flex flex-col-reverse" }, [
                  createVNode("div", { class: "lg:col-span-6 md:col-span-7 md:mt-0 mt-8" }, [
                    _ctx.$page.props.success ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("p", { class: "font-montserrat uppercase tracking-wide font-semibold" }, "Message sent successfully"),
                      createVNode("span", { class: "text-sm" }, "We've received your message! Hold tight for our reply soon."),
                      createVNode(unref(Link), {
                        href: "/",
                        class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back to home ")
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("form", {
                      key: 1,
                      class: "w-full space-y-4",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full" }, [
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "name",
                            class: "text-sm"
                          }, [
                            createTextVNode("Name "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.name = $event,
                            type: "text",
                            id: "name",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "phone",
                            class: "text-sm"
                          }, [
                            createTextVNode("Phone Number "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.phone = $event,
                            type: "text",
                            id: "phone",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.phone]
                          ]),
                          __props.errors.phone ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.phone), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full" }, [
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "email",
                            class: "text-sm"
                          }, [
                            createTextVNode("E-mail "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.email = $event,
                            type: "text",
                            id: "email",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.email]
                          ]),
                          __props.errors.email ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "postcode",
                            class: "text-sm"
                          }, [
                            createVNode("span", null, "Postcode"),
                            createVNode("span", { class: "text-gray-400 text-xs ml-2" }, "Optional")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.postcode = $event,
                            type: "text",
                            id: "postcode",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.postcode]
                          ]),
                          __props.errors.postcode ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.postcode), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "subject",
                          class: "text-sm"
                        }, [
                          createTextVNode("What are you looking for? "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.subject = $event,
                          type: "text",
                          id: "subject",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.subject]
                        ]),
                        __props.errors.subject ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.subject), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "body",
                          class: "text-sm"
                        }, [
                          createTextVNode("Details "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => form.body = $event,
                          type: "text",
                          id: "body",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.body]
                        ]),
                        __props.errors.body ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.body), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out"
                        }, " Send message ")
                      ])
                    ], 32))
                  ]),
                  createVNode("div", { class: "lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4" }, [
                    createVNode("p", { class: "xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2" }, [
                      createTextVNode("Tel: "),
                      createVNode("a", {
                        class: "text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out",
                        href: "tel:07989606060"
                      }, "07989 606060")
                    ]),
                    createVNode("p", { class: "xl:text-3xl lg:text-2xl text-xl text-gray-600" }, [
                      createTextVNode("Email: "),
                      createVNode("a", {
                        class: "text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out",
                        href: "mailto:info@tyresanywhere.com"
                      }, "info@tyresanywhere.com")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/ContactUs.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative xl:h-[32rem] lg:h-[28rem] sm:h-[300px] h-[200px] md:w-full overflow-hidden" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<button class="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button><button class="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/Carousel.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender]]);
const CarouselSlide_vue_vue_type_style_index_0_scoped_1d88a252_lang = "";
const _sfc_main$g = {
  __name: "CarouselSlide",
  __ssrInlineRender: true,
  props: {
    visibleSlide: Number,
    index: Number,
    direction: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.visibleSlide === __props.index ? null : { display: "none" },
        class: "absolute inset-0"
      }, _attrs))} data-v-1d88a252>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/CarouselSlide.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-1d88a252"]]);
const MainCarouselSearchTyres_vue_vue_type_style_index_0_scoped_308ccf6a_lang = "";
const _sfc_main$f = {
  __name: "MainCarouselSearchTyres",
  __ssrInlineRender: true,
  setup(__props) {
    const tyre_sizes = computed(() => usePage().props.tyre_sizes);
    const profiles = ref(null);
    const rims = ref(null);
    const formOpen = ref(false);
    const valid = computed(() => {
      return typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode;
    });
    const form = useForm({
      width: "- Select -",
      profile: "- Select -",
      rim: "- Select -",
      postcode: null
    });
    watch(() => form.width, (width, prevWidth) => {
      if (width !== prevWidth) {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
      if (typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map((size) => size.profile))].sort();
      } else {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
    });
    watch(() => form.profile, (profile, prevProfile) => {
      if (profile !== prevProfile) {
        form.reset("rim");
        rims.value = null;
      }
      if (typeof form.width !== "number") {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
        return;
      }
      if (typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => size.width === form.width && size.profile === profile).map((size) => size.rim))].sort();
      } else {
        form.reset("profile", "rim");
        rims.value = null;
      }
    });
    const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];
    function getCommonWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return commonWidths.includes(width);
      });
    }
    function getOtherWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return !commonWidths.includes(width);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 aaamd:flex hidden items-center justify-center flex-col pt-4 lg:mt-0 mt-4" }, _attrs))} data-v-308ccf6a><p class="cursor-pointer flex items-center justify-center space-x-4 text-shadow-red block xl:text-5xl sm:text-4xl text-2xl font-bold uppercase lg:text-white text-gray-800 mb-3" data-v-308ccf6a><span class="lg:block hidden" data-v-308ccf6a>`);
      if (!formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-308ccf6a><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" data-v-308ccf6a></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-308ccf6a><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" data-v-308ccf6a></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span><span data-v-308ccf6a>SEARCH TYRES</span><span class="lg:block hidden" data-v-308ccf6a>`);
      if (!formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-308ccf6a><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" data-v-308ccf6a></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (formOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 anim" data-v-308ccf6a><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" data-v-308ccf6a></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></p><div class="${ssrRenderClass([{ "lg:h-0": !formOpen.value, "lg:h-36": formOpen.value }, "overflow-hidden transition-all"])}" data-v-308ccf6a><div class="md:grid md:grid-cols-12 md:gap-x-6 flex flex-col-reverse items-center sm:bg-white bg-transparent lg:shadow-none sm:shadow-[0_5px_15px_rgba(255,102,102,0.35)] py-3 sm:px-5 px-2 rounded-t-lg lg:mb-4 xl:w-[50rem] lg:w-[44rem] w-full" data-v-308ccf6a><form class="md:col-span-8 w-full" data-v-308ccf6a><div class="grid grid-cols-12 items-start gap-x-2 gap-y-2" data-v-308ccf6a><div class="col-span-4" data-v-308ccf6a><label for="width_size" class="block font-bold text-center text-sm" data-v-308ccf6a>Width</label><select id="width_size" class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-308ccf6a><option data-v-308ccf6a${ssrIncludeBooleanAttr(Array.isArray(unref(form).width) ? ssrLooseContain(unref(form).width, null) : ssrLooseEqual(unref(form).width, null)) ? " selected" : ""}>- Select -</option><optgroup label="Common" data-v-308ccf6a><!--[-->`);
      ssrRenderList(getCommonWidths(), (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-308ccf6a>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></optgroup><optgroup label="Other" data-v-308ccf6a><!--[-->`);
      ssrRenderList(getOtherWidths(), (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-308ccf6a>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></optgroup></select></div><div class="col-span-4" data-v-308ccf6a><label for="profile_size" class="block font-bold text-center text-sm" data-v-308ccf6a>Profile</label><select id="profile_size"${ssrIncludeBooleanAttr(!profiles.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-308ccf6a><option data-v-308ccf6a${ssrIncludeBooleanAttr(Array.isArray(unref(form).profile) ? ssrLooseContain(unref(form).profile, null) : ssrLooseEqual(unref(form).profile, null)) ? " selected" : ""}>- Select -</option><!--[-->`);
      ssrRenderList(profiles.value, (profile) => {
        _push(`<option${ssrRenderAttr("value", profile)} data-v-308ccf6a>${ssrInterpolate(profile)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-4" data-v-308ccf6a><label for="rim_size" class="block font-bold text-center text-sm" data-v-308ccf6a>Rim Size</label><select id="rim_size"${ssrIncludeBooleanAttr(!rims.value) ? " disabled" : ""} class="block text-sm w-full py-1.5 px-3 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/40 focus:border-wheelfit-600 appearance-none" data-v-308ccf6a><option data-v-308ccf6a${ssrIncludeBooleanAttr(Array.isArray(unref(form).rim) ? ssrLooseContain(unref(form).rim, null) : ssrLooseEqual(unref(form).rim, null)) ? " selected" : ""}>- Select -</option><!--[-->`);
      ssrRenderList(rims.value, (rim) => {
        _push(`<option${ssrRenderAttr("value", rim)} data-v-308ccf6a>${ssrInterpolate(rim)}</option>`);
      });
      _push(`<!--]--></select></div><div class="sm:col-span-6 col-span-12" data-v-308ccf6a><div class="relative" data-v-308ccf6a><input type="text"${ssrRenderAttr("value", unref(form).postcode)} id="postcode" name="postcode" autocomplete="postal-code" placeholder="Postcode" class="${ssrRenderClass({ "block uppercase text-sm w-full h-10 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode })}" data-v-308ccf6a>`);
      if (_ctx.$page.props.flash.errors.postcode) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-308ccf6a><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-308ccf6a></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$page.props.flash.errors.postcode) {
        _push(`<span class="w-full block text-center text-xs text-red-500" data-v-308ccf6a>${ssrInterpolate(_ctx.$page.props.flash.errors.postcode)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sm:col-span-6 col-span-12" data-v-308ccf6a><button type="submit" class="${ssrRenderClass({ "flex items-center justify-center bg-wheelfit-500 text-white w-full rounded outline-0 h-10 text-lg text-center uppercase": true, "focus:ring-4 focus:ring-wheelfit-600/30 focus:border-wheelfit-600/30 hover:bg-wheelfit-400 transition duration-150 ease-in-out": valid.value, "opacity-50 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing })}" data-v-308ccf6a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-308ccf6a><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-v-308ccf6a></path></svg> FIND </button></div></div></form><div class="md:col-span-4 md:mb-0 mb-6 w-full" data-v-308ccf6a><img src="/images/main/tyre-size-guide.webp" srcset="/images/main/tyre-size-guide.webp 720w,
                            /images/main/tyre-size-guide-500.webp 500w,
                            /images/main/tyre-size-guide-300.webp 300w,
                            /images/main/tyre-size-guide-150.webp 150w" alt="Tyre Size Guide" sizes="(min-width: 1280px) 237px, (min-width:1024px) 205px, (min-width: 768px) 221px, (min-width: 640px) 520px, (min-width: 576px) 544px, 100vw" data-v-308ccf6a></div></div></div></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/MainCarouselSearchTyres.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const MainCarouselSearchTyres = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-308ccf6a"]]);
const slidesLen = 9;
const interval = 400;
const _sfc_main$e = {
  __name: "MainCarousel",
  __ssrInlineRender: true,
  props: {
    location: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(__props) {
    const isSliding = ref(false);
    const visibleSlide = ref(0);
    const direction = ref("left");
    const slideTimer = ref(interval);
    const isPaused = ref(false);
    watch(slideTimer, () => {
      if (slideTimer.value <= 0) {
        slideTimer.value = interval;
        next();
      } else if (!isPaused.value) {
        setTimeout(() => {
          slideTimer.value--;
        }, 1);
      }
    }, { immediate: true });
    function next() {
      if (isSliding.value)
        return;
      if (visibleSlide.value >= slidesLen - 1) {
        visibleSlide.value = 0;
      } else {
        visibleSlide.value += 1;
      }
      direction.value = "left";
      setSliding();
    }
    function prev() {
      if (isSliding.value)
        return;
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen - 1;
      } else {
        visibleSlide.value--;
      }
      direction.value = "right";
      setSliding();
    }
    function setSliding() {
      isSliding.value = true;
      setTimeout(() => {
        isSliding.value = false;
      }, 600);
    }
    function pause() {
      isPaused.value = true;
    }
    function unpause() {
      isPaused.value = false;
      slideTimer.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "md:max-w-none sm:max-w-none mx-auto px-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Carousel, {
              onNext: next,
              onPrev: prev,
              onMouseenter: pause,
              onMouseleave: unpause
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 0,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-1-300.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId3}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-1-300.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            alt: "Tyres Anywhere LTD Mobile Tyres Van"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 1,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-2.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" alt="Mobile Tyre Fitting" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            alt: "Mobile Tyre Fitting",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 2,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-3.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" class="object-cover object-center w-full h-full brightness-[0.6]" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>30-60 Minute Response</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Maximum 30-60 minute response for emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                            alt: "Mobile tyre puncture repair",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 3,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-4.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" alt="Tyres Anywhere LTD Mobile Tyres Van" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId3}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            alt: "Tyres Anywhere LTD Mobile Tyres Van",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 4,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-5.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" alt="Mobile Tyre Fitting" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            alt: "Mobile Tyre Fitting",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 5,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-6.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" class="object-cover object-center w-full h-full brightness-[0.6]" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>30-60 Minute Response</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Maximum 30-60 minute response for emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                            alt: "Mobile tyre puncture repair",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 6,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-7.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" alt="Tyres Anywhere LTD Mobile Tyres Van" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId3}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            alt: "Tyres Anywhere LTD Mobile Tyres Van",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 7,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-8.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" alt="Mobile Tyre Fitting" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            alt: "Mobile Tyre Fitting",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CarouselSlide, {
                    index: 8,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img src="/images/showcase/gallary/mobile-tyre-fitting-9.webp" srcset="/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,
                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,
                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px,
                               (min-width: 1280px) 1152px,
                               (min-width: 1024px) 896px,
                               (min-width: 768px) 400px,
                               (min-width: 640px) 200px,
                               200px" class="object-cover object-center w-full h-full brightness-[0.6]" loading="lazy"${_scopeId3}><div class="absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId3}>`);
                        if (!__props.location) {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>30-60 Minute Response</h1>`);
                        } else {
                          _push4(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId3}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                        }
                        _push4(`<p class="sm:text-sm text-xs text-center"${_scopeId3}>Maximum 30-60 minute response for emergencies.</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: "/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                            srcset: "/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                            alt: "Mobile tyre puncture repair",
                            sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                            class: "object-cover object-center w-full h-full brightness-[0.6]",
                            loading: "lazy"
                          }),
                          createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                            !__props.location ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                              key: 1,
                              class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                            }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                            createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CarouselSlide, {
                      index: 0,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-1-300.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          alt: "Tyres Anywhere LTD Mobile Tyres Van"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 1,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          alt: "Mobile Tyre Fitting",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 2,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                          alt: "Mobile tyre puncture repair",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 3,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          alt: "Tyres Anywhere LTD Mobile Tyres Van",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 4,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          alt: "Mobile Tyre Fitting",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 5,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                          alt: "Mobile tyre puncture repair",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 6,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          alt: "Tyres Anywhere LTD Mobile Tyres Van",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 7,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          alt: "Mobile Tyre Fitting",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"]),
                    createVNode(CarouselSlide, {
                      index: 8,
                      visibleSlide: visibleSlide.value,
                      direction: direction.value
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: "/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                          srcset: "/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                          alt: "Mobile tyre puncture repair",
                          sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                          class: "object-cover object-center w-full h-full brightness-[0.6]",
                          loading: "lazy"
                        }),
                        createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                          !__props.location ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                            key: 1,
                            class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                          }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                          createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                        ])
                      ]),
                      _: 1
                    }, 8, ["visibleSlide", "direction"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Carousel, {
                onNext: next,
                onPrev: prev,
                onMouseenter: pause,
                onMouseleave: unpause
              }, {
                default: withCtx(() => [
                  createVNode(CarouselSlide, {
                    index: 0,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-1-300.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        alt: "Tyres Anywhere LTD Mobile Tyres Van"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 1,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        alt: "Mobile Tyre Fitting",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 2,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                        alt: "Mobile tyre puncture repair",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 3,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        alt: "Tyres Anywhere LTD Mobile Tyres Van",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 4,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        alt: "Mobile Tyre Fitting",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 5,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                        alt: "Mobile tyre puncture repair",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 6,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        alt: "Tyres Anywhere LTD Mobile Tyres Van",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 7,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        alt: "Mobile Tyre Fitting",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"]),
                  createVNode(CarouselSlide, {
                    index: 8,
                    visibleSlide: visibleSlide.value,
                    direction: direction.value
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                        srcset: "/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                        alt: "Mobile tyre puncture repair",
                        sizes: "(min-width: 1536px) 1280px,\n                               (min-width: 1280px) 1152px,\n                               (min-width: 1024px) 896px,\n                               (min-width: 768px) 400px,\n                               (min-width: 640px) 200px,\n                               200px",
                        class: "object-cover object-center w-full h-full brightness-[0.6]",
                        loading: "lazy"
                      }),
                      createVNode("div", { class: "absolute left-[15%] right-[15%] md:top-24 md:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                        !__props.location ? (openBlock(), createBlock("h1", {
                          key: 0,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                          key: 1,
                          class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                        }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                        createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                      ])
                    ]),
                    _: 1
                  }, 8, ["visibleSlide", "direction"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(MainCarouselSearchTyres, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(MainCarouselSearchTyres)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Carousel/MainCarousel.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting - Car &amp; Van Tyres Fitted At Home Or Work | Tyres Anywhere LTD</title><meta name="description" content="We provide round-the-clock same day, 7 days a week mobile tyre fitting. Get our tyres fitted at home, work or roadside. We provide cheap &amp; high quality tyres."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting - Car & Van Tyres Fitted At Home Or Work | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "We provide round-the-clock same day, 7 days a week mobile tyre fitting. Get our tyres fitted at home, work or roadside. We provide cheap & high quality tyres."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Welcome to <span class="text-wheelfit-300"${_scopeId2}>Tyres Anywhere</span>, Mobile Tyre Fitting</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We bring our mobile tyre fitting service to your desired location.</h2><p class="text-sm"${_scopeId2}><b${_scopeId2}>Tyres Anywhere LTD</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.</p><br${_scopeId2}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>24 Hour Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>, we offer our customers 24 hour mobile tyre fitting service. When you&#39;re in need of an emergency tyre repair or change, we have you covered. We know that you don&#39;t choose the day or time of your next tyre service needs, that&#39;s why we offer our service 24 hours. We want to make sure that you have access to emergency mobile tyre fitting help when you need it. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker.</p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Mobile Tyre Repair - Your Mobile Tyre Fitters</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Mobile tyres can offer you the security you need to confidently operate your vehicle. Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work, or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> During normal hours, we can send hour day mobile tyre team to come help you out. Don&#39;t worry, we also have a night team on standby every night, as well as on holidays. We know that your mobile tyre repair needs don&#39;t take holidays, so we don&#39;t either! </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>Night and Day Mobile Tyre Services</h2><h2 class="text-xl"${_scopeId2}>We can meet you anywhere, anytime</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>We can help you out with all of your services, whether you need a particular piece of equipment, like a <a class="text-blue-600 underline" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Locknut"${_scopeId2}>locking wheel nut</a> or just need a general tyre fitting mobile service, we&#39;re happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we&#39;re proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!</p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Whether you&#39;re stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you&#39;re deserted on the side of the road, our team will search for you to help provide you with great services day or night.</p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Commercial Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus. We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans. We fit commercial tyres during day &amp; night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution! </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere LTD?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> We&#39;ve provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It&#39;s an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b> we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Tyre brands we supply</h3><br${_scopeId2}><b class="text-sm"${_scopeId2}>Budget/Mid-range Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Farroad</li><li${_scopeId2}>Hifly</li><li${_scopeId2}>Churchill</li><li${_scopeId2}>RoadX</li><li${_scopeId2}>Infinity</li></ul><br${_scopeId2}><b class="text-sm"${_scopeId2}>Premium Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Michelin</li><li${_scopeId2}>Pirelli</li><li${_scopeId2}>Bridgestone</li><li${_scopeId2}>Goodyear</li><li${_scopeId2}>Continental</li></ul><br${_scopeId2}><p class="text-sm"${_scopeId2}>If you require any specific brands, you can <a href="tel:07989606060" class="text-blue-600 underline"${_scopeId2}>call us</a> and ask our operator to book it for you.</p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                        createTextVNode("Welcome to "),
                        createVNode("span", { class: "text-wheelfit-300" }, "Tyres Anywhere"),
                        createTextVNode(", Mobile Tyre Fitting")
                      ]),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                      createVNode("p", { class: "text-sm" }, [
                        createVNode("b", null, "Tyres Anywhere LTD"),
                        createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                      ]),
                      createVNode("br"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24 Hour Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(", we offer our customers 24 hour mobile tyre fitting service. When you're in need of an emergency tyre repair or change, we have you covered. We know that you don't choose the day or time of your next tyre service needs, that's why we offer our service 24 hours. We want to make sure that you have access to emergency mobile tyre fitting help when you need it. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Mobile Tyre Repair - Your Mobile Tyre Fitters"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Mobile tyres can offer you the security you need to confidently operate your vehicle. Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work, or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " During normal hours, we can send hour day mobile tyre team to come help you out. Don't worry, we also have a night team on standby every night, as well as on holidays. We know that your mobile tyre repair needs don't take holidays, so we don't either! "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "Night and Day Mobile Tyre Services"),
                          createVNode("h2", { class: "text-xl" }, "We can meet you anywhere, anytime"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("We can help you out with all of your services, whether you need a particular piece of equipment, like a "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://en.wikipedia.org/wiki/Locknut"
                            }, "locking wheel nut"),
                            createTextVNode(" or just need a general tyre fitting mobile service, we're happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we're proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Whether you're stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you're deserted on the side of the road, our team will search for you to help provide you with great services day or night."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Commercial Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus. We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans. We fit commercial tyres during day & night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution! "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Farroad"),
                            createVNode("li", null, "Hifly"),
                            createVNode("li", null, "Churchill"),
                            createVNode("li", null, "RoadX"),
                            createVNode("li", null, "Infinity")
                          ]),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Premium Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Michelin"),
                            createVNode("li", null, "Pirelli"),
                            createVNode("li", null, "Bridgestone"),
                            createVNode("li", null, "Goodyear"),
                            createVNode("li", null, "Continental")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("If you require any specific brands, you can "),
                            createVNode("a", {
                              href: "tel:07989606060",
                              class: "text-blue-600 underline"
                            }, "call us"),
                            createTextVNode(" and ask our operator to book it for you.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                      createTextVNode("Welcome to "),
                      createVNode("span", { class: "text-wheelfit-300" }, "Tyres Anywhere"),
                      createTextVNode(", Mobile Tyre Fitting")
                    ]),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Tyres Anywhere LTD"),
                      createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                    ]),
                    createVNode("br"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24 Hour Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(", we offer our customers 24 hour mobile tyre fitting service. When you're in need of an emergency tyre repair or change, we have you covered. We know that you don't choose the day or time of your next tyre service needs, that's why we offer our service 24 hours. We want to make sure that you have access to emergency mobile tyre fitting help when you need it. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Mobile Tyre Repair - Your Mobile Tyre Fitters"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Mobile tyres can offer you the security you need to confidently operate your vehicle. Whether you need emergency service from our mobile service team in the early hours of the morning on your way to work, or in the middle of the night, at an inconvenient roadside emergency. We are here to help you with all of your tyre repair needs. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " During normal hours, we can send hour day mobile tyre team to come help you out. Don't worry, we also have a night team on standby every night, as well as on holidays. We know that your mobile tyre repair needs don't take holidays, so we don't either! "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "Night and Day Mobile Tyre Services"),
                        createVNode("h2", { class: "text-xl" }, "We can meet you anywhere, anytime"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("We can help you out with all of your services, whether you need a particular piece of equipment, like a "),
                          createVNode("a", {
                            class: "text-blue-600 underline",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://en.wikipedia.org/wiki/Locknut"
                          }, "locking wheel nut"),
                          createTextVNode(" or just need a general tyre fitting mobile service, we're happy to provide our help and support. Fitting mobile tyre to your vehicle is what we do, and we're proud to offer this important service to our communities. Whenever someone is in need of services mobile tyre, we can be there to help them out - all they need to do is call!")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Whether you're stuck on the roadside or motorway, day or night, high or low, just call us! We can assist large size vehicles, medium size vehicles and small size vehicles.  If you're deserted on the side of the road, our team will search for you to help provide you with great services day or night."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Commercial Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Yes, you heard right! Alongside your normal passenger tyres, we also provide tyre services for commercial vehicles, such as mini-vans, vans, minibus. We provide mobile tyre fitting to all van sizes, from SWB vans all the way to LWB vans. We fit commercial tyres during day & night, 7 days a week, so the next time your commercial tyre has a blowout, call us for a quick and easy solution! "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Farroad"),
                          createVNode("li", null, "Hifly"),
                          createVNode("li", null, "Churchill"),
                          createVNode("li", null, "RoadX"),
                          createVNode("li", null, "Infinity")
                        ]),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Premium Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Michelin"),
                          createVNode("li", null, "Pirelli"),
                          createVNode("li", null, "Bridgestone"),
                          createVNode("li", null, "Goodyear"),
                          createVNode("li", null, "Continental")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("If you require any specific brands, you can "),
                          createVNode("a", {
                            href: "tel:07989606060",
                            class: "text-blue-600 underline"
                          }, "call us"),
                          createTextVNode(" and ask our operator to book it for you.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "Location",
  __ssrInlineRender: true,
  props: {
    location: String,
    slug: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)} | Tyres Anywhere LTD</title><meta name="description"${ssrRenderAttr("content", `We provide same day, 7 days a week mobile tyre fitting in ${__props.location}. Get our high quality & cheap tyres fitted in & around ${__props.location}.`)}${_scopeId}><link rel="canonical"${ssrRenderAttr("href", "https://tyresanywhere.com/locations/" + __props.slug)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting in " + toDisplayString(__props.location) + " | Tyres Anywhere LTD", 1),
              createVNode("meta", {
                name: "description",
                content: `We provide same day, 7 days a week mobile tyre fitting in ${__props.location}. Get our high quality & cheap tyres fitted in & around ${__props.location}.`
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/locations/" + __props.slug
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$e, { location: __props.location }, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Fitting &amp; Services in ${ssrInterpolate(__props.location)}</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We bring our mobile tyre fitting service to your desired location.</h2><p class="text-sm"${_scopeId2}><b${_scopeId2}>Tyres Anywhere LTD</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom. We carry out 24/7 mobile tyre services in <b${_scopeId2}>${ssrInterpolate(__props.location)}</b> and surrounding areas. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.</p><br${_scopeId2}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Same day mobile tyre fitting &amp; puncture repair in ${ssrInterpolate(__props.location)}</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> We offer same day mobile tyre fitting or mobile tyre repair in &amp; around ${ssrInterpolate(__props.location)}. Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile tyre service you can depend on every day of the week in ${ssrInterpolate(__props.location)}. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker.</p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Motorway or roadside mobile tyre fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If your tyre has failed you, and you&#39;re stranded on the roadside in or near ${ssrInterpolate(__props.location)} - look no further </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>What do you require from me?</h2><h2 class="text-xl"${_scopeId2}>Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car.</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.</p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere LTD?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> We&#39;ve provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It&#39;s an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b> we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Tyre brands we supply</h3><br${_scopeId2}><b class="text-sm"${_scopeId2}>Budget/Mid-range Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Farroad</li><li${_scopeId2}>Hifly</li><li${_scopeId2}>Churchill</li><li${_scopeId2}>RoadX</li><li${_scopeId2}>Infinity</li></ul><br${_scopeId2}><b class="text-sm"${_scopeId2}>Premium Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Michelin</li><li${_scopeId2}>Pirelli</li><li${_scopeId2}>Bridgestone</li><li${_scopeId2}>Goodyear</li><li${_scopeId2}>Continental</li></ul><br${_scopeId2}><p class="text-sm"${_scopeId2}>If you require any specific brands, you can <a href="tel:07989606060" class="text-blue-600 underline"${_scopeId2}>call us</a> and ask our operator to book it for you.</p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting & Services in " + toDisplayString(__props.location), 1),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                      createVNode("p", { class: "text-sm" }, [
                        createVNode("b", null, "Tyres Anywhere LTD"),
                        createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. We carry out 24/7 mobile tyre services in "),
                        createVNode("b", null, toDisplayString(__props.location), 1),
                        createTextVNode(" and surrounding areas. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                      ]),
                      createVNode("br"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre fitting & puncture repair in " + toDisplayString(__props.location), 1),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We offer same day mobile tyre fitting or mobile tyre repair in & around " + toDisplayString(__props.location) + ". Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile tyre service you can depend on every day of the week in " + toDisplayString(__props.location) + ". ", 1),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Motorway or roadside mobile tyre fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If your tyre has failed you, and you're stranded on the roadside in or near " + toDisplayString(__props.location) + " - look no further ", 1),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do you require from me?"),
                          createVNode("h2", { class: "text-xl" }, "Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car."),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.")
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Farroad"),
                            createVNode("li", null, "Hifly"),
                            createVNode("li", null, "Churchill"),
                            createVNode("li", null, "RoadX"),
                            createVNode("li", null, "Infinity")
                          ]),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Premium Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Michelin"),
                            createVNode("li", null, "Pirelli"),
                            createVNode("li", null, "Bridgestone"),
                            createVNode("li", null, "Goodyear"),
                            createVNode("li", null, "Continental")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("If you require any specific brands, you can "),
                            createVNode("a", {
                              href: "tel:07989606060",
                              class: "text-blue-600 underline"
                            }, "call us"),
                            createTextVNode(" and ask our operator to book it for you.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting & Services in " + toDisplayString(__props.location), 1),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile tyre fitting service to your desired location."),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Tyres Anywhere LTD"),
                      createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. We carry out 24/7 mobile tyre services in "),
                      createVNode("b", null, toDisplayString(__props.location), 1),
                      createTextVNode(" and surrounding areas. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder.")
                    ]),
                    createVNode("br"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre fitting & puncture repair in " + toDisplayString(__props.location), 1),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We offer same day mobile tyre fitting or mobile tyre repair in & around " + toDisplayString(__props.location) + ". Our services operate 7 days a week and are open 24 hours a day, giving you a reliable mobile tyre service you can depend on every day of the week in " + toDisplayString(__props.location) + ". ", 1),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "We will come out to you as soon as possible and fit or repair your tyre so you can be back to your own business quicker."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Motorway or roadside mobile tyre fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If your tyre has failed you, and you're stranded on the roadside in or near " + toDisplayString(__props.location) + " - look no further ", 1),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre technician will come to you wherever you are and fit or repair your tyre so you can be back to your own business quicker and safer. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do you require from me?"),
                        createVNode("h2", { class: "text-xl" }, "Please have your locking wheel nut key available for our tyre fitter, if your wheels are fitted with a locking wheel nut. We require the key in order to remove the wheel in question from your car."),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "The locking wheel nut key can usually be found in the glove box or under the boot carpet with the spare tyre.")
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere LTD?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We've provided mobile tyre services to thousands of our customers and helped them get back onto their journeys as safely as possible, be it on their garage, a roadside or even on the motorway. No one wants or knows when their tyres may have a blowout. It's an inconvenient event, so we believe it is our duty to replace or repair your tyres as quickly and safely as possible, so you can have more to do and less to worry about. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Tyre brands we supply"),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Farroad"),
                          createVNode("li", null, "Hifly"),
                          createVNode("li", null, "Churchill"),
                          createVNode("li", null, "RoadX"),
                          createVNode("li", null, "Infinity")
                        ]),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Premium Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Michelin"),
                          createVNode("li", null, "Pirelli"),
                          createVNode("li", null, "Bridgestone"),
                          createVNode("li", null, "Goodyear"),
                          createVNode("li", null, "Continental")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("If you require any specific brands, you can "),
                          createVNode("a", {
                            href: "tel:07989606060",
                            class: "text-blue-600 underline"
                          }, "call us"),
                          createTextVNode(" and ask our operator to book it for you.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Location.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "MobileTyreFitting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting - Same Day, 7 Days A Week | Tyres Anywhere LTD</title><meta name="description" content="We provide same day mobile tyre fitting for your convenience. Tyres Anywhere LTD supplies and fits car or van tyres at your home, work or roadside."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting - Same Day, 7 Days A Week | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "We provide same day mobile tyre fitting for your convenience. Tyres Anywhere LTD supplies and fits car or van tyres at your home, work or roadside."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/mobile-tyre-fitting.webp" srcset="/images/showcase/mobile-tyre-fitting.webp 1000w,
                        /images/showcase/mobile-tyre-fitting-500.webp 500w,
                        /images/showcase/mobile-tyre-fitting.webp 300w" class="object-cover object-center w-full h-full" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Mobile Tyre Fitting</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/mobile-tyre-fitting.webp",
                srcset: "/images/showcase/mobile-tyre-fitting.webp 1000w,\n                        /images/showcase/mobile-tyre-fitting-500.webp 500w,\n                        /images/showcase/mobile-tyre-fitting.webp 300w",
                class: "object-cover object-center w-full h-full",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Mobile Tyre Fitting"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(SearchTyres$1, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Fitting Services</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Your brand new tyre fitted safely at your desired location.</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Why choose mobile tyre fitting?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Taking your vehicle to a garage can take up valuable time, and it can be difficult to fit into your busy day. At <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>, we provide 24/7 mobile tyre fitting, so you can have your tyres fitted at anytime and anyplace, without the need of driving to an auto center. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre fitting service comes to you within minutes of your call, whether your at home, work, roadside or on the hard-shoulder of a motorway! Our tyre fitters are equipped with years of experience and knowledge, and will efficiently fit your new tyres at your convenience. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> We provide high-quality, cheap tyres from well-known brands, so if you&#39;re looking to change your tyres without giving up your day -our mobile tyre fitting is your convenient solution. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/mobile-tyre-fitting.webp" srcset="/images/main/mobile-tyre-fitting.webp 1024w,
                                    /images/main/mobile-tyre-fitting-500.webp 500w,
                                    /images/main/mobile-tyre-fitting-300.webp 300w,
                                    /images/main/mobile-tyre-fitting-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Can I get my tyres fitted on a roadside or motorway?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> You may be surprised, but 9 out of 10 times we can fit your tyre on the roadside or motorway. As long as the vehicle is parked in a safe spot, our tyre fitters are completely able to fit your tyre as they would normally, on any road or under any weather conditions. Safety is our top priority, so if the tyre fitter sees any danger, they may decide to move you to another spot. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether you&#39;re parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your location. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Sidewall Damage?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a new tyre. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> This is because the sidewall sustains the most load when the tyre is in use, and weakening the sidewall&#39;s structure might be bad news. In this circumstance, any repairs made on the sidewalls is highly likely to fall off as the repair patch applied to the sidewall can flex when travelling, leading to tyre failure. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you require new high-quality tyres urgently, our mobile tyre fitting service is the most convenient and simple solution. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Emergency Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you need a new tyre within minutes, look no further <br${_scopeId2}> A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. <br${_scopeId2}> We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Before you call, have ready your:</p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>Tyre Size</li><li${_scopeId2}>Exact location, or send us your live location via WhatsApp / Waze / Google Maps.</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Mobile Tyre Fitting at Home</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> You and your vehicle&#39;s safety is our top priority at <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>. <br${_scopeId2}> If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it&#39;s illegal once the tyre treads are less than 1.6mm. <br${_scopeId2}> We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get a new tyre?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting Services"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Your brand new tyre fitted safely at your desired location."),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Why choose mobile tyre fitting?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Taking your vehicle to a garage can take up valuable time, and it can be difficult to fit into your busy day. At "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(", we provide 24/7 mobile tyre fitting, so you can have your tyres fitted at anytime and anyplace, without the need of driving to an auto center. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service comes to you within minutes of your call, whether your at home, work, roadside or on the hard-shoulder of a motorway! Our tyre fitters are equipped with years of experience and knowledge, and will efficiently fit your new tyres at your convenience. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We provide high-quality, cheap tyres from well-known brands, so if you're looking to change your tyres without giving up your day -our mobile tyre fitting is your convenient solution. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/mobile-tyre-fitting.webp",
                            srcset: "/images/main/mobile-tyre-fitting.webp 1024w,\n                                    /images/main/mobile-tyre-fitting-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Can I get my tyres fitted on a roadside or motorway?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You may be surprised, but 9 out of 10 times we can fit your tyre on the roadside or motorway. As long as the vehicle is parked in a safe spot, our tyre fitters are completely able to fit your tyre as they would normally, on any road or under any weather conditions. Safety is our top priority, so if the tyre fitter sees any danger, they may decide to move you to another spot. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether you're parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your location. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sidewall Damage?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a new tyre. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " This is because the sidewall sustains the most load when the tyre is in use, and weakening the sidewall's structure might be bad news. In this circumstance, any repairs made on the sidewalls is highly likely to fall off as the repair patch applied to the sidewall can flex when travelling, leading to tyre failure. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you require new high-quality tyres urgently, our mobile tyre fitting service is the most convenient and simple solution. ")
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Emergency Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" If you need a new tyre within minutes, look no further "),
                            createVNode("br"),
                            createTextVNode(" A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. "),
                            createVNode("br"),
                            createTextVNode(" We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Before you call, have ready your:"),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "Tyre Size"),
                            createVNode("li", null, "Exact location, or send us your live location via WhatsApp / Waze / Google Maps.")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting at Home"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" You and your vehicle's safety is our top priority at "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(". "),
                            createVNode("br"),
                            createTextVNode(" If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it's illegal once the tyre treads are less than 1.6mm. "),
                            createVNode("br"),
                            createTextVNode(" We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting Services"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Your brand new tyre fitted safely at your desired location."),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Why choose mobile tyre fitting?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Taking your vehicle to a garage can take up valuable time, and it can be difficult to fit into your busy day. At "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(", we provide 24/7 mobile tyre fitting, so you can have your tyres fitted at anytime and anyplace, without the need of driving to an auto center. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service comes to you within minutes of your call, whether your at home, work, roadside or on the hard-shoulder of a motorway! Our tyre fitters are equipped with years of experience and knowledge, and will efficiently fit your new tyres at your convenience. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We provide high-quality, cheap tyres from well-known brands, so if you're looking to change your tyres without giving up your day -our mobile tyre fitting is your convenient solution. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/mobile-tyre-fitting.webp",
                          srcset: "/images/main/mobile-tyre-fitting.webp 1024w,\n                                    /images/main/mobile-tyre-fitting-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Can I get my tyres fitted on a roadside or motorway?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You may be surprised, but 9 out of 10 times we can fit your tyre on the roadside or motorway. As long as the vehicle is parked in a safe spot, our tyre fitters are completely able to fit your tyre as they would normally, on any road or under any weather conditions. Safety is our top priority, so if the tyre fitter sees any danger, they may decide to move you to another spot. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether you're parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your location. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sidewall Damage?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a new tyre. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " This is because the sidewall sustains the most load when the tyre is in use, and weakening the sidewall's structure might be bad news. In this circumstance, any repairs made on the sidewalls is highly likely to fall off as the repair patch applied to the sidewall can flex when travelling, leading to tyre failure. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you require new high-quality tyres urgently, our mobile tyre fitting service is the most convenient and simple solution. ")
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Emergency Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" If you need a new tyre within minutes, look no further "),
                          createVNode("br"),
                          createTextVNode(" A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. "),
                          createVNode("br"),
                          createTextVNode(" We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Before you call, have ready your:"),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "Tyre Size"),
                          createVNode("li", null, "Exact location, or send us your live location via WhatsApp / Waze / Google Maps.")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "Mobile Tyre Fitting at Home"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" You and your vehicle's safety is our top priority at "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(". "),
                          createVNode("br"),
                          createTextVNode(" If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it's illegal once the tyre treads are less than 1.6mm. "),
                          createVNode("br"),
                          createTextVNode(" We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/MobileTyreFitting.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "MobileTyreRepair",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Repair - Same Day Emergency Tyre Repair | Tyres Anywhere LTD</title><meta name="description" content="Tyres Anywhere LTD offer mobile tyre repairs to ensures your punctured tyre is taken care of at your convenience, whether your at home, work or roadside"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/mobile-tyre-repair"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Repair - Same Day Emergency Tyre Repair | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere LTD offer mobile tyre repairs to ensures your punctured tyre is taken care of at your convenience, whether your at home, work or roadside"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/mobile-tyre-repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black">`);
      _push(ssrRenderComponent(Container, { class: "relative lg:h-[340px] md:h-[250px] h-[200px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/showcase/mobile-puncture-repair.webp" srcset="/images/showcase/mobile-puncture-repair.webp 1000w,
                                /images/showcase/mobile-puncture-repair-500.webp 500w,
                                /images/showcase/mobile-puncture-repair.webp 300w" class="object-cover object-center w-full h-full" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Mobile Tyre Fitting</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/showcase/mobile-puncture-repair.webp",
                srcset: "/images/showcase/mobile-puncture-repair.webp 1000w,\n                                /images/showcase/mobile-puncture-repair-500.webp 500w,\n                                /images/showcase/mobile-puncture-repair.webp 300w",
                class: "object-cover object-center w-full h-full",
                sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, (min-width: 768px) 752px, (min-width: 576px) 560px, 100vw",
                alt: "Mobile Tyre Fitting"
              }),
              createVNode("div", { class: "absolute left-[15%] right-[15%] lg:top-28 lg:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Mobile Tyre Fitting"),
                createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(SearchTyres$1, null, null, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Repair Services</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We seal your punctured tyre securely at your desired location.</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Is your punctured tyre repairable?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> It&#39;s actually quite complicated... Whether the tyre is repairable depends on many factors, such as: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6 space-y-2"${_scopeId2}><li${_scopeId2}>The location of the puncture</li><li${_scopeId2}>The size of the puncture</li><li${_scopeId2}>The condition &amp; age of the tyre</li><li${_scopeId2}>Whether the tyre is a run-flat tyre</li></ul><br${_scopeId2}><p class="text-sm"${_scopeId2}> A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If your tyre is repairable, make sure that you do not drive on that flat tyre to maximise the chance of repairing it. This is because there is no air pressure to keep the tyre shaped correctly and the tyre sidewall will be pinched between the wheel rim and the road which can gravely damage it. </p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>If the puncture is located on the sidewall of the tyre.</li><li${_scopeId2}>Run-flat tyres cannot be repaired.</li><li${_scopeId2}>If the diameter of the damaged area is larger than 6mm.</li><li${_scopeId2}>If your tyre treads are worn less than 1.6mm.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li></ul><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/puncture-repair-guide.webp" srcset="/images/main/puncture-repair-guide.webp 1024w,
                                    /images/main/puncture-repair-guide-500.webp 500w,
                                    /images/main/puncture-repair-guide-300.webp 300w,
                                    /images/main/puncture-repair-guide-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Mobile puncture repair guide"${_scopeId2}></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Sometimes it&#39;s better to go for a new tyre</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you&#39;ve repaired the same tyre once before. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> It can be more cost-efficient to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre quality. </p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get a new tyre?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Repair Services"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We seal your punctured tyre securely at your desired location."),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Is your punctured tyre repairable?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " It's actually quite complicated... Whether the tyre is repairable depends on many factors, such as: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                            createVNode("li", null, "The location of the puncture"),
                            createVNode("li", null, "The size of the puncture"),
                            createVNode("li", null, "The condition & age of the tyre"),
                            createVNode("li", null, "Whether the tyre is a run-flat tyre")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If your tyre is repairable, make sure that you do not drive on that flat tyre to maximise the chance of repairing it. This is because there is no air pressure to keep the tyre shaped correctly and the tyre sidewall will be pinched between the wheel rim and the road which can gravely damage it. "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "If the puncture is located on the sidewall of the tyre."),
                            createVNode("li", null, "Run-flat tyres cannot be repaired."),
                            createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                            createVNode("li", null, "If your tyre treads are worn less than 1.6mm."),
                            createVNode("li", null, "If your tyre shows signs of ageing.")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/puncture-repair-guide.webp",
                            srcset: "/images/main/puncture-repair-guide.webp 1024w,\n                                    /images/main/puncture-repair-guide-500.webp 500w,\n                                    /images/main/puncture-repair-guide-300.webp 300w,\n                                    /images/main/puncture-repair-guide-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Mobile puncture repair guide"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sometimes it's better to go for a new tyre"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you've repaired the same tyre once before. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " It can be more cost-efficient to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre quality. ")
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Repair Services"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We seal your punctured tyre securely at your desired location."),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Is your punctured tyre repairable?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " It's actually quite complicated... Whether the tyre is repairable depends on many factors, such as: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                          createVNode("li", null, "The location of the puncture"),
                          createVNode("li", null, "The size of the puncture"),
                          createVNode("li", null, "The condition & age of the tyre"),
                          createVNode("li", null, "Whether the tyre is a run-flat tyre")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If your tyre is repairable, make sure that you do not drive on that flat tyre to maximise the chance of repairing it. This is because there is no air pressure to keep the tyre shaped correctly and the tyre sidewall will be pinched between the wheel rim and the road which can gravely damage it. "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "If the puncture is located on the sidewall of the tyre."),
                          createVNode("li", null, "Run-flat tyres cannot be repaired."),
                          createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                          createVNode("li", null, "If your tyre treads are worn less than 1.6mm."),
                          createVNode("li", null, "If your tyre shows signs of ageing.")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/puncture-repair-guide.webp",
                          srcset: "/images/main/puncture-repair-guide.webp 1024w,\n                                    /images/main/puncture-repair-guide-500.webp 500w,\n                                    /images/main/puncture-repair-guide-300.webp 300w,\n                                    /images/main/puncture-repair-guide-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Mobile puncture repair guide"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Sometimes it's better to go for a new tyre"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you've repaired the same tyre once before. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " It can be more cost-efficient to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre quality. ")
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "When should I get a new tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/MobileTyreRepair.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Privacy Policy | Tyres Anywhere LTD</title><meta name="description" content="Tyres Anywhere LTD&#39;s Privacy Policy"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/privacy-policy"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Privacy Policy | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere LTD's Privacy Policy"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/privacy-policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8"${_scopeId}><h1 class="sm:text-4xl text-3xl sm:mb-12 mb-6"${_scopeId}>Privacy Policy</h1><p class="text-sm"${_scopeId}> Tyres Anywhere LTD respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Controller</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Tyres Anywhere LTD is the controller and responsible for your personal data. </p><br${_scopeId}><p class="text-sm"${_scopeId}> If you have any questions about this privacy notice, please contact the data privacy manager here <a href="mailto:info@tyresanywhere.com"${_scopeId}>info@tyresanywhere.com</a>. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Third-party links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Cookies</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Cookies are set by the services that we use: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc space-y-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Analytics</span> we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit <a class="text-blue-600 underline" href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" rel="noreferrer"${_scopeId}> https://policies.google.com/technologies/cookies?hl=en-US </a></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Advertising</span> We use Google Adsense to place adverts on our site. Google&#39;s use of advertising cookies enables it and its partners to serve ads based on your visit to Tyres Anywhere LTD and/or other sites on the Internet. You can opt out of personalised ads by visiting <a class="text-blue-600 underline" href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noreferrer"${_scopeId}> https://myaccount.google.com/data-and-privacy </a></li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>The type of personal information we collect</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We currently collect and process the following information: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Identity data</span> (for example first name, last name, title, date of birth)</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Contact data</span> (for example address, email address, mobile number)</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How is the personal information collected?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Most of the personal information we process is directly provided by you for the following reasons: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>apply for services</li><li${_scopeId}>make an enquiry</li><li${_scopeId}>book an appointment</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How we use your personal data</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. </p><br${_scopeId}><b class="text-sm"${_scopeId}>Information provided by you:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to provide you with information/services that you request from us</li><li${_scopeId}>to comply with a legal or regulatory obligation</li></ul><br${_scopeId}><b class="text-sm"${_scopeId}>Information we automatically collect:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to administer our site including troubleshooting, testing, research and statistical purposes</li><li${_scopeId}>to improve our site to ensure that content is presented in the most effective manner for you and your computer</li><li${_scopeId}>to keep our site safe and secure</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Where is your data stored?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Your information is securely stored in our database </p><br${_scopeId}><p class="text-sm"${_scopeId}> We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Your data protection rights</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For details, see our `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/privacy-policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`privacy policy`);
                } else {
                  return [
                    createTextVNode("privacy policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` page. </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right of access</span> - You have the right to ask us for copies of your personal information.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to rectification</span> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to erasure</span> - You have the right to ask us to erase your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to restriction of processing</span> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to object to processing</span> - You have the the right to object to the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to data portability</span> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li></ul><br${_scopeId}><p class="text-sm"${_scopeId}> You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-4xl text-3xl sm:mb-12 mb-6" }, "Privacy Policy"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Controller"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD is the controller and responsible for your personal data. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" If you have any questions about this privacy notice, please contact the data privacy manager here "),
                  createVNode("a", { href: "mailto:info@tyresanywhere.com" }, "info@tyresanywhere.com"),
                  createTextVNode(". ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Third-party links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Cookies"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Cookies are set by the services that we use: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc space-y-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Analytics"),
                    createTextVNode(" we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://policies.google.com/technologies/cookies?hl=en-US",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://policies.google.com/technologies/cookies?hl=en-US ")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Advertising"),
                    createTextVNode(" We use Google Adsense to place adverts on our site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Tyres Anywhere LTD and/or other sites on the Internet. You can opt out of personalised ads by visiting "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://myaccount.google.com/data-and-privacy",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://myaccount.google.com/data-and-privacy ")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "The type of personal information we collect"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We currently collect and process the following information: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Identity data"),
                    createTextVNode(" (for example first name, last name, title, date of birth)")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Contact data"),
                    createTextVNode(" (for example address, email address, mobile number)")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How is the personal information collected?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Most of the personal information we process is directly provided by you for the following reasons: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "apply for services"),
                  createVNode("li", null, "make an enquiry"),
                  createVNode("li", null, "book an appointment")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How we use your personal data"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. "),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information provided by you:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to provide you with information/services that you request from us"),
                  createVNode("li", null, "to comply with a legal or regulatory obligation")
                ]),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information we automatically collect:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to administer our site including troubleshooting, testing, research and statistical purposes"),
                  createVNode("li", null, "to improve our site to ensure that content is presented in the most effective manner for you and your computer"),
                  createVNode("li", null, "to keep our site safe and secure")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Where is your data stored?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your information is securely stored in our database "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Your data protection rights"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" For details, see our "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/privacy-policy"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("privacy policy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" page. ")
                ]),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right of access"),
                    createTextVNode(" - You have the right to ask us for copies of your personal information.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to rectification"),
                    createTextVNode(" - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to erasure"),
                    createTextVNode(" - You have the right to ask us to erase your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to restriction of processing"),
                    createTextVNode(" - You have the right to ask us to restrict the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to object to processing"),
                    createTextVNode(" - You have the the right to object to the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to data portability"),
                    createTextVNode(" - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.")
                  ])
                ]),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/PrivacyPolicy.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const SearchTyres_vue_vue_type_style_index_0_scoped_cf2cd4a8_lang = "";
const _sfc_main$8 = {
  __name: "SearchTyres",
  __ssrInlineRender: true,
  setup(__props) {
    const tyre_sizes = computed(() => usePage().props.tyre_sizes);
    const profiles = ref(null);
    const rims = ref(null);
    const valid = computed(() => {
      return typeof form.width === "number" && typeof form.profile === "number" && typeof form.rim === "number" && form.postcode;
    });
    const form = useForm({
      width: "Width",
      profile: "Profile",
      rim: "Rim",
      postcode: null
    });
    watch(() => form.width, (width, prevWidth) => {
      if (width !== prevWidth) {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
      if (typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map((size) => size.profile))].sort();
      } else {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
      }
    });
    watch(() => form.profile, (profile, prevProfile) => {
      if (profile !== prevProfile) {
        form.reset("rim");
        rims.value = null;
      }
      if (typeof form.width !== "number") {
        form.reset("profile", "rim");
        profiles.value = null;
        rims.value = null;
        return;
      }
      if (typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => size.width === form.width && size.profile === profile).map((size) => size.rim))].sort();
      } else {
        form.reset("profile", "rim");
        rims.value = null;
      }
    });
    const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];
    function getCommonWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return commonWidths.includes(width);
      });
    }
    function getOtherWidths() {
      return [...new Set(tyre_sizes.value.map((size) => size.width))].filter((width) => {
        return !commonWidths.includes(width);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-cf2cd4a8${_scopeId}>Search Tyres | Tyres Anywhere LTD</title><meta name="description" content="Enter your tyre size to search a wide range of high-quality tyres and decide when &amp; where to have it fitted by our mobile tyre fitters." data-v-cf2cd4a8${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/search-tyres" data-v-cf2cd4a8${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Search Tyres | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Enter your tyre size to search a wide range of high-quality tyres and decide when & where to have it fitted by our mobile tyre fitters."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/search-tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative md:max-w-xl sm:max-w-lg max-w-xs mx-auto w-full sm:my-12 my-6" data-v-cf2cd4a8><div class="flex flex-col items-center justify-center w-full h-full absolute inset-0 bg-black/70 rounded-lg z-10" data-v-cf2cd4a8><p class="font-extrabold sm:text-6xl text-4xl text-center text-white" data-v-cf2cd4a8>Currently unavailable</p><p class="font-semibold text-3xl text-gray-200 text-center mt-8" data-v-cf2cd4a8>Please <b class="text-white" data-v-cf2cd4a8>call</b> us for assistance</p></div><div class="sm:flex hidden text-xs flex-row justify-between items-center md:px-4 mb-2 text-gray-400" data-v-cf2cd4a8><span class="underline text-gray-800" data-v-cf2cd4a8>Your Tyre Size</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg><span class="flex items-center" data-v-cf2cd4a8><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg> Choose Tyres </span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg><span class="flex items-center" data-v-cf2cd4a8><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg> Fitting Location </span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg><span class="flex items-center" data-v-cf2cd4a8><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg> Date &amp; Time </span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg><span class="flex items-center-400" data-v-cf2cd4a8><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-cf2cd4a8><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" data-v-cf2cd4a8></path></svg> Checkout </span></div><div class="w-full bg-white rounded-md py-8 md:px-16 sm:px-8 px-4 shadow-xl" data-v-cf2cd4a8><p class="text-center text-lg" data-v-cf2cd4a8>Enter your tyre size</p><hr class="w-1/2 mx-auto my-4" data-v-cf2cd4a8><img src="/images/main/tyre-size-guide.webp" srcset="/images/main/tyre-size-guide.webp 720w,
                                /images/main/tyre-size-guide-500.webp 500w,
                                /images/main/tyre-size-guide-300.webp 300w,
                                /images/main/tyre-size-guide-150.webp 150w" alt="Tyre Size Guide" sizes="(min-width: 640px) 448px, (min-width: 320px) 288px, calc(100vw - 32px)" data-v-cf2cd4a8><div class="grid grid-cols-3 mt-4 gap-x-1 gap-y-2" data-v-cf2cd4a8><div class="col-span-1" data-v-cf2cd4a8><select class="block sm:text-base text-sm w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-cf2cd4a8><option data-v-cf2cd4a8${ssrIncludeBooleanAttr(Array.isArray(unref(form).width) ? ssrLooseContain(unref(form).width, null) : ssrLooseEqual(unref(form).width, null)) ? " selected" : ""}>Width</option><optgroup label="Common" data-v-cf2cd4a8><!--[-->`);
      ssrRenderList(getCommonWidths(), (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-cf2cd4a8>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></optgroup><optgroup label="Other" data-v-cf2cd4a8><!--[-->`);
      ssrRenderList(getOtherWidths(), (width) => {
        _push(`<option${ssrRenderAttr("value", width)} data-v-cf2cd4a8>${ssrInterpolate(width)}</option>`);
      });
      _push(`<!--]--></optgroup></select></div><div class="col-span-1" data-v-cf2cd4a8><select${ssrIncludeBooleanAttr(!profiles.value) ? " disabled" : ""} class="block sm:text-base text-sm w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-cf2cd4a8><option data-v-cf2cd4a8${ssrIncludeBooleanAttr(Array.isArray(unref(form).profile) ? ssrLooseContain(unref(form).profile, null) : ssrLooseEqual(unref(form).profile, null)) ? " selected" : ""}>Profile</option><!--[-->`);
      ssrRenderList(profiles.value, (profile) => {
        _push(`<option${ssrRenderAttr("value", profile)} data-v-cf2cd4a8>${ssrInterpolate(profile)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-1" data-v-cf2cd4a8><select${ssrIncludeBooleanAttr(!rims.value) ? " disabled" : ""} class="block sm:text-base text-sm w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none" data-v-cf2cd4a8><option data-v-cf2cd4a8${ssrIncludeBooleanAttr(Array.isArray(unref(form).rim) ? ssrLooseContain(unref(form).rim, null) : ssrLooseEqual(unref(form).rim, null)) ? " selected" : ""}>Rim</option><!--[-->`);
      ssrRenderList(rims.value, (rim) => {
        _push(`<option${ssrRenderAttr("value", rim)} data-v-cf2cd4a8>${ssrInterpolate(rim)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-3" data-v-cf2cd4a8><span class="block text-xs text-gray-400" data-v-cf2cd4a8>We recommend customers to check the tyre size on the side wall of their tyre(s) before proceeding</span></div></div><div class="mt-6" data-v-cf2cd4a8><div class="relative" data-v-cf2cd4a8><input type="text"${ssrRenderAttr("value", unref(form).postcode)} id="postcode" name="postcode" autocomplete="postal-code" placeholder="Postcode" class="${ssrRenderClass({ "block uppercase text-sm w-full py-2.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none": true, "border-red-500": _ctx.$page.props.flash.errors.postcode, "border-gray-300": !_ctx.$page.props.flash.errors.postcode })}" data-v-cf2cd4a8>`);
      if (_ctx.$page.props.flash.errors.postcode) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-cf2cd4a8><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-cf2cd4a8></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$page.props.flash.errors.postcode) {
        _push(`<span class="w-full block text-center text-xs text-red-500" data-v-cf2cd4a8>${ssrInterpolate(_ctx.$page.props.flash.errors.postcode)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="button"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""} class="${ssrRenderClass({ "relative flex items-center justify-center mt-4 bg-wheelfit-500 text-white w-full rounded outline-0 h-12 text-white text-lg text-center": true, "focus:ring-2 focus:ring-wheelfit-600/30 focus:border focus:border-wheelfit-600 hover:bg-wheelfit-600 transition duration-150 ease-in-out": valid.value, "opacity-50 cursor-not-allowed": !valid.value, "button--loading": unref(form).processing })}" data-v-cf2cd4a8>`);
      if (!unref(form).processing) {
        _push(`<span data-v-cf2cd4a8>Continue to tyres</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/SearchTyres.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SearchTyres = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-cf2cd4a8"]]);
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SearchTyres
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "Sitemap",
  __ssrInlineRender: true,
  props: {
    areas: Object
  },
  setup(__props) {
    const openSections = ref([]);
    const toggleSection = (letter) => {
      if (openSections.value.includes(letter)) {
        openSections.value = openSections.value.filter((l) => l !== letter);
      } else {
        openSections.value.push(letter);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Sitemap | Tyres Anywhere LTD</title><meta name="description" content="Sitemap of our site tyresanywhere.com. This includes a list of all the pages in Tyres Anywhere LTD&#39;s website."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/sitemap"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Sitemap | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Sitemap of our site tyresanywhere.com. This includes a list of all the pages in Tyres Anywhere LTD's website."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/sitemap"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8"${_scopeId}><h1 class="sm:text-3xl text-2xl sm:mb-12 mb-6"${_scopeId}>Tyres Anywhere LTD Site Map</h1><div class="grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8"${_scopeId}><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Tyres Anywhere LTD</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-fitting",
              class: "md:text-base text-sm text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-repair",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/commercial-tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Commercial Tyres`);
                } else {
                  return [
                    createTextVNode("Commercial Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tyres`);
                } else {
                  return [
                    createTextVNode("Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact-us",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/our-terms-and-conditions",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Terms &amp; Conditions`);
                } else {
                  return [
                    createTextVNode("Terms & Conditions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/privacy-policy",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Service</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/search-tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search Tyres`);
                } else {
                  return [
                    createTextVNode("Search Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/cart",
              class: "md:text-base text-sm text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cart`);
                } else {
                  return [
                    createTextVNode("Cart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-6 col-span-12"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Coverage (expand sections)</p><!--[-->`);
            ssrRenderList(__props.areas, (areaGroup, letter) => {
              _push2(`<div class="mt-4"${_scopeId}><button class="flex justify-between items-center w-full border p-3"${_scopeId}><span${_scopeId}>${ssrInterpolate(letter)}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="${ssrRenderClass([{ "rotate-180": openSections.value.includes(letter) }, "size-6 transition"])}"${_scopeId}><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"${_scopeId}></path></svg></button><div style="${ssrRenderStyle(openSections.value.includes(letter) ? null : { display: "none" })}" class="grid grid-cols-12 gap-2 items-start mt-4 px-2"${_scopeId}><!--[-->`);
              ssrRenderList(areaGroup, (area) => {
                _push2(`<div class="col-span-4"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: "/locations/" + area.slug,
                  class: "md:text-base text-sm text-blue-600 hover: capitalize"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-3xl text-2xl sm:mb-12 mb-6" }, "Tyres Anywhere LTD Site Map"),
                createVNode("div", { class: "grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8" }, [
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Tyres Anywhere LTD"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode(unref(Link), {
                        href: "/",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-fitting",
                        class: "md:text-base text-sm text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Fitting")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-repair",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Repair")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/commercial-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Commercial Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/contact-us",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Contact Us")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/our-terms-and-conditions",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Terms & Conditions")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/privacy-policy",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Privacy Policy")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Service"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode(unref(Link), {
                        href: "/search-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Search Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/cart",
                        class: "md:text-base text-sm text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cart")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-6 col-span-12" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Coverage (expand sections)"),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.areas, (areaGroup, letter) => {
                      return openBlock(), createBlock("div", {
                        key: letter,
                        class: "mt-4"
                      }, [
                        createVNode("button", {
                          onClick: ($event) => toggleSection(letter),
                          class: "flex justify-between items-center w-full border p-3"
                        }, [
                          createVNode("span", null, toDisplayString(letter), 1),
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            class: [{ "rotate-180": openSections.value.includes(letter) }, "size-6 transition"]
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
                              "clip-rule": "evenodd"
                            })
                          ], 2))
                        ], 8, ["onClick"]),
                        withDirectives(createVNode("div", { class: "grid grid-cols-12 gap-2 items-start mt-4 px-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(areaGroup, (area) => {
                            return openBlock(), createBlock("div", {
                              key: area.slug,
                              class: "col-span-4"
                            }, [
                              createVNode(unref(Link), {
                                href: "/locations/" + area.slug,
                                class: "md:text-base text-sm text-blue-600 hover: capitalize",
                                textContent: toDisplayString(area.area)
                              }, null, 8, ["href", "textContent"])
                            ]);
                          }), 128))
                        ], 512), [
                          [vShow, openSections.value.includes(letter)]
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Sitemap.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "TermsAndConditions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Terms &amp; Conditions | Tyres Anywhere LTD</title><meta name="description" content="Tyres Anywhere LTD&#39;s Terms &amp; Conditions"${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/our-terms-and-conditions"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Terms & Conditions | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere LTD's Terms & Conditions"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/our-terms-and-conditions"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8"${_scopeId}><h1 class="sm:text-4xl text-3xl sm:mb-12 mb-6"${_scopeId}>Terms &amp; Conditions</h1><p class="text-sm"${_scopeId}> Tyres Anywhere LTD is a mobile tyre fitting business in the UK that provides emergency or non-emergency tyre fitting or repairs. Contact information is as followed: telephone: (07989 606060), email: (info@tyresanywhere.com) </p><br${_scopeId}><p class="text-sm"${_scopeId}> The terms and conditions declared on this page control the bond within the company Tyres Anywhere LTD and the visitors. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Henceforth, </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;We&quot;, &quot;Our&quot;, or &quot;Us&quot; represents the company Tyres Anywhere LTD </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;Our website&quot; represents the website of https://www.tyresanywhere.com </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;You&quot; represents our customers or visitors/users of this website </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>1. How to contact us</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Call us on 07989 606060 </p><br${_scopeId}><p class="text-sm"${_scopeId}> Email at info@tyresanywhere.com </p><br${_scopeId}><p class="text-sm"${_scopeId}> Contact us through our website&#39;s `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/contact-us"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`contact page`);
                } else {
                  return [
                    createTextVNode("contact page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>2. Online Prices and Booking</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The price of all the products that we offer is in GBP (£), with cost of labour and parts. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Online purchases and transactions does not put you in any binding contracts with us. There is only a one-time charge either on the website or in-person. </p><br${_scopeId}><p class="text-sm"${_scopeId}> We have the right to postpone or cancel the order (even after the order confirmation), if we are unable to carry out the order. We may be unable to carry out the order if the purchased product is out of stock in our local stock &amp; our products provider&#39;s stock or if the information about the purchased product is incorrect. In this situation, we will offer you an alternative product or reschedule the arrangement. If you have already paid for this product and we cannot come to an agreement, then you may cancel the order and acquire a full refund - this only applies to online payment or deposits. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>3. Products</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The products may also vary from their online pictures. The images of the products on our website are for illustrative purposes only, so your product may not be the exact product as the image. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Customers ordering tyres online for mobile fitting should confirm the tyre size with the tyre size currently fitted to the vehicle before placing the order. If incorrect tyres are ordered on our website, we may reschedule your fitting appointment for either later on in the day or any approaching days. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>4. Orders and delivery</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Ordered products that are unavailable in our local stock will be delivered from our wholesale providers. We cannot guarantee delivery times for our providers and therefore in this situation we may be required to reschedule your fitting appointment. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>5. Order Cancellations</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For online orders/deposits only, the cancellation request must be made within 24 hours of when the order was placed to claim a refund. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>6. Copyright</h3><br${_scopeId}><p class="text-sm"${_scopeId}> All the materials present on our website is copyrighted to us. Any unauthorised use of our material for commercial use is strictly disallowed and considered as copyright infringement. Threats will be taken seriously, and we will be forced to take actions such as site restriction, financial compensation and legal proceedings. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>7. Privacy Policy</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For details, see our `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/privacy-policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`privacy policy`);
                } else {
                  return [
                    createTextVNode("privacy policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` page. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>8. Guarantees</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The products we sell on our site are covered by the manufacturer&#39;s guarantee. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Any guarantee claims should be notified to us immediately. You will need to present an invoice that provides us with proof of purchase. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Your guarantee claim may be rejected if: </p><br${_scopeId}><p class="text-sm"${_scopeId}> The product in question has been damaged due to failure of commitment to the manufacturer&#39;s instructions </p><br${_scopeId}><p class="text-sm"${_scopeId}> The product in question has been damaged due to natural causes, theft, wear or improper driving. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>9. Third-party website links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Links to third-party websites are provided for your information only </p><br${_scopeId}><p class="text-sm"${_scopeId}> We have no control over those websites so we request you examine the privacy policy and terms &amp; conditions of these websites before using their services. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>10. Updating terms &amp; conditions</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We have the right to alter the terms and conditions on this page when required. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-4xl text-3xl sm:mb-12 mb-6" }, "Terms & Conditions"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD is a mobile tyre fitting business in the UK that provides emergency or non-emergency tyre fitting or repairs. Contact information is as followed: telephone: (07989 606060), email: (info@tyresanywhere.com) "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The terms and conditions declared on this page control the bond within the company Tyres Anywhere LTD and the visitors. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Henceforth, "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "We", "Our", or "Us" represents the company Tyres Anywhere LTD '),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "Our website" represents the website of https://www.tyresanywhere.com '),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "You" represents our customers or visitors/users of this website '),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "1. How to contact us"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Call us on 07989 606060 "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Email at info@tyresanywhere.com "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" Contact us through our website's "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/contact-us"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("contact page")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "2. Online Prices and Booking"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The price of all the products that we offer is in GBP (£), with cost of labour and parts. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Online purchases and transactions does not put you in any binding contracts with us. There is only a one-time charge either on the website or in-person. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have the right to postpone or cancel the order (even after the order confirmation), if we are unable to carry out the order. We may be unable to carry out the order if the purchased product is out of stock in our local stock & our products provider's stock or if the information about the purchased product is incorrect. In this situation, we will offer you an alternative product or reschedule the arrangement. If you have already paid for this product and we cannot come to an agreement, then you may cancel the order and acquire a full refund - this only applies to online payment or deposits. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "3. Products"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The products may also vary from their online pictures. The images of the products on our website are for illustrative purposes only, so your product may not be the exact product as the image. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Customers ordering tyres online for mobile fitting should confirm the tyre size with the tyre size currently fitted to the vehicle before placing the order. If incorrect tyres are ordered on our website, we may reschedule your fitting appointment for either later on in the day or any approaching days. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "4. Orders and delivery"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Ordered products that are unavailable in our local stock will be delivered from our wholesale providers. We cannot guarantee delivery times for our providers and therefore in this situation we may be required to reschedule your fitting appointment. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "5. Order Cancellations"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " For online orders/deposits only, the cancellation request must be made within 24 hours of when the order was placed to claim a refund. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "6. Copyright"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " All the materials present on our website is copyrighted to us. Any unauthorised use of our material for commercial use is strictly disallowed and considered as copyright infringement. Threats will be taken seriously, and we will be forced to take actions such as site restriction, financial compensation and legal proceedings. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "7. Privacy Policy"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" For details, see our "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/privacy-policy"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("privacy policy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" page. ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "8. Guarantees"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The products we sell on our site are covered by the manufacturer's guarantee. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Any guarantee claims should be notified to us immediately. You will need to present an invoice that provides us with proof of purchase. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your guarantee claim may be rejected if: "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The product in question has been damaged due to failure of commitment to the manufacturer's instructions "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The product in question has been damaged due to natural causes, theft, wear or improper driving. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "9. Third-party website links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Links to third-party websites are provided for your information only "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have no control over those websites so we request you examine the privacy policy and terms & conditions of these websites before using their services. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "10. Updating terms & conditions"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have the right to alter the terms and conditions on this page when required. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/TermsAndConditions.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Tyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Tyres | Tyres Anywhere LTD</title><meta name="description" content="High quality &amp; cheap tyres at Tyres Anywhere LTD. We have high performance tyres ready to be on your vehicle by our mobile tyre fitting service."${_scopeId}><link rel="canonical" href="https://tyresanywhere.com/tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Tyres | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "High quality & cheap tyres at Tyres Anywhere LTD. We have high performance tyres ready to be on your vehicle by our mobile tyre fitting service."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresanywhere.com/tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="md:flex hidden flex-row flex-wrap space-x-4 items-center justify-center"${_scopeId2}><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/bridgestone-118.webp" alt="Bridgestone Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/dunlop-118.webp" alt="Dunlop Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/michelin-118.webp" alt="Michelin Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/pirelli-118.webp" alt="Pirelli Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/continental-118.webp" alt="Continental Tyre"${_scopeId2}></div><div class="lg:p-4 p-2 border border-gray-300"${_scopeId2}><img class="xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/goodyear-118.webp" alt="Goodyear Tyre"${_scopeId2}></div></div><div class="md:hidden flex flex-col px-2 sm:space-y-4 space-y-2 items-center justify-center"${_scopeId2}><div class="flex flex-row sm:space-x-4 space-x-2 items-center justify-center"${_scopeId2}><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/bridgestone-118.webp" alt="Bridgestone Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/dunlop-118.webp" alt="Dunlop Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/michelin-118.webp" alt="Michelin Tyre"${_scopeId2}></div></div><div class="flex flex-row sm:space-x-4 space-x-2 items-center justify-center"${_scopeId2}><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/pirelli-118.webp" alt="Pirelli Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/continental-118.webp" alt="Continental Tyre"${_scopeId2}></div><div class="p-2 border border-gray-300"${_scopeId2}><img class="w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease" src="/images/tyres/tyre_logo/goodyear-118.webp" alt="Goodyear Tyre"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "md:flex hidden flex-row flex-wrap space-x-4 items-center justify-center" }, [
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                          alt: "Bridgestone Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/dunlop-118.webp",
                          alt: "Dunlop Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/michelin-118.webp",
                          alt: "Michelin Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/pirelli-118.webp",
                          alt: "Pirelli Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/continental-118.webp",
                          alt: "Continental Tyre"
                        })
                      ]),
                      createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/goodyear-118.webp",
                          alt: "Goodyear Tyre"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "md:hidden flex flex-col px-2 sm:space-y-4 space-y-2 items-center justify-center" }, [
                      createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                            alt: "Bridgestone Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/dunlop-118.webp",
                            alt: "Dunlop Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/michelin-118.webp",
                            alt: "Michelin Tyre"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/pirelli-118.webp",
                            alt: "Pirelli Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/continental-118.webp",
                            alt: "Continental Tyre"
                          })
                        ]),
                        createVNode("div", { class: "p-2 border border-gray-300" }, [
                          createVNode("img", {
                            class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                            src: "/images/tyres/tyre_logo/goodyear-118.webp",
                            alt: "Goodyear Tyre"
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "md:flex hidden flex-row flex-wrap space-x-4 items-center justify-center" }, [
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                        alt: "Bridgestone Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/dunlop-118.webp",
                        alt: "Dunlop Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/michelin-118.webp",
                        alt: "Michelin Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/pirelli-118.webp",
                        alt: "Pirelli Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/continental-118.webp",
                        alt: "Continental Tyre"
                      })
                    ]),
                    createVNode("div", { class: "lg:p-4 p-2 border border-gray-300" }, [
                      createVNode("img", {
                        class: "xl:w-[118px] w-[88px] xl:h-[118px] h-[88px] hover:scale-110 transition-transform duration-150 ease",
                        src: "/images/tyres/tyre_logo/goodyear-118.webp",
                        alt: "Goodyear Tyre"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "md:hidden flex flex-col px-2 sm:space-y-4 space-y-2 items-center justify-center" }, [
                    createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/bridgestone-118.webp",
                          alt: "Bridgestone Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/dunlop-118.webp",
                          alt: "Dunlop Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/michelin-118.webp",
                          alt: "Michelin Tyre"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-row sm:space-x-4 space-x-2 items-center justify-center" }, [
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/pirelli-118.webp",
                          alt: "Pirelli Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/continental-118.webp",
                          alt: "Continental Tyre"
                        })
                      ]),
                      createVNode("div", { class: "p-2 border border-gray-300" }, [
                        createVNode("img", {
                          class: "w-[88px] h-auto object-contain hover:scale-110 transition-transform duration-150 ease",
                          src: "/images/tyres/tyre_logo/goodyear-118.webp",
                          alt: "Goodyear Tyre"
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-light md:text-3xl sm:text-2xl text-xl mb-2"${_scopeId2}>We provide and fit high quality <b class="font-semibold"${_scopeId2}>Tyres</b> for you in no time!</h1><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/mobile-tyre-fitting-tyres-500.webp" srcset="/images/main/mobile-tyre-fitting-tyres.webp 2560w,
                                    /images/main/mobile-tyre-fitting-tyres-500.webp 500w,
                                    /images/main/mobile-tyre-fitting-tyres-300.webp 300w,
                                    /images/main/mobile-tyre-fitting-tyres-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Mobile tyre fitting jack"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><p class="text-sm"${_scopeId2}> Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK, the minimum tyre tread depth is 1.6mm. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> The depth of the tyre treads can be tested using the &#39;20p Check&#39;, a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Regardless of the vehicle you drive, here at <b${_scopeId2}>Tyres Anywhere, Mobile Tyre Fitting</b>, we have the right tyres for you, whether it&#39;s Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>How can I find my tyre size?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> The best option would be to check the tyre itself. On the sidewall of the tyre, there are a few numbers printed on it that show the size of the tyre. The number before the forward slash is the width in mm. The number after the forward slash is height of the tyre sidewall as a percentage of the width. The number after the ‘R’ is the diameter of the tyre’s inner rim size in inches. You will need these when purchasing a tyre for your vehicle as every vehicle requires different sizes of tyres to be fitted onto them. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Another way to find the size of your tyres is by using a vehicle registration lookup tool online, but it can be less accurate so it&#39;s recommended to double check against the size on the tyre. </p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/tyre-size-guide.webp" srcset="/images/main/tyre-size-guide.webp 720w,
                                    /images/main/tyre-size-guide-500.webp 500w,
                                    /images/main/tyre-size-guide-300.webp 300w,
                                    /images/main/tyre-size-guide-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Tyre Size Guide"${_scopeId2}></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/images/main/tyre-changing-500.webp" srcset="/images/main/tyre-changing.webp 5472w,
                                    /images/main/tyre-changing-500.webp 500w,
                                    /images/main/tyre-changing-300.webp 300w,
                                    /images/main/tyre-changing-150.webp 150w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Tyre Changing"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get my tyres changed?</h3><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="list-disc text-sm pl-6 space-y-2"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07989606060"${_scopeId2}>07989 606060</a> for a prompt service</span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-light md:text-3xl sm:text-2xl text-xl mb-2" }, [
                        createTextVNode("We provide and fit high quality "),
                        createVNode("b", { class: "font-semibold" }, "Tyres"),
                        createTextVNode(" for you in no time!")
                      ]),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/mobile-tyre-fitting-tyres-500.webp",
                            srcset: "/images/main/mobile-tyre-fitting-tyres.webp 2560w,\n                                    /images/main/mobile-tyre-fitting-tyres-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-tyres-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-tyres-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Mobile tyre fitting jack"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("p", { class: "text-sm" }, " Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK, the minimum tyre tread depth is 1.6mm. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Regardless of the vehicle you drive, here at "),
                            createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                            createTextVNode(", we have the right tyres for you, whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "How can I find my tyre size?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " The best option would be to check the tyre itself. On the sidewall of the tyre, there are a few numbers printed on it that show the size of the tyre. The number before the forward slash is the width in mm. The number after the forward slash is height of the tyre sidewall as a percentage of the width. The number after the ‘R’ is the diameter of the tyre’s inner rim size in inches. You will need these when purchasing a tyre for your vehicle as every vehicle requires different sizes of tyres to be fitted onto them. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Another way to find the size of your tyres is by using a vehicle registration lookup tool online, but it can be less accurate so it's recommended to double check against the size on the tyre. ")
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/tyre-size-guide.webp",
                            srcset: "/images/main/tyre-size-guide.webp 720w,\n                                    /images/main/tyre-size-guide-500.webp 500w,\n                                    /images/main/tyre-size-guide-300.webp 300w,\n                                    /images/main/tyre-size-guide-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Tyre Size Guide"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/images/main/tyre-changing-500.webp",
                            srcset: "/images/main/tyre-changing.webp 5472w,\n                                    /images/main/tyre-changing-500.webp 500w,\n                                    /images/main/tyre-changing-300.webp 300w,\n                                    /images/main/tyre-changing-150.webp 150w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Tyre Changing"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get my tyres changed?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07989606060"
                              }, "07989 606060"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-light md:text-3xl sm:text-2xl text-xl mb-2" }, [
                      createTextVNode("We provide and fit high quality "),
                      createVNode("b", { class: "font-semibold" }, "Tyres"),
                      createTextVNode(" for you in no time!")
                    ]),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/mobile-tyre-fitting-tyres-500.webp",
                          srcset: "/images/main/mobile-tyre-fitting-tyres.webp 2560w,\n                                    /images/main/mobile-tyre-fitting-tyres-500.webp 500w,\n                                    /images/main/mobile-tyre-fitting-tyres-300.webp 300w,\n                                    /images/main/mobile-tyre-fitting-tyres-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Mobile tyre fitting jack"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("p", { class: "text-sm" }, " Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK, the minimum tyre tread depth is 1.6mm. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Regardless of the vehicle you drive, here at "),
                          createVNode("b", null, "Tyres Anywhere, Mobile Tyre Fitting"),
                          createTextVNode(", we have the right tyres for you, whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "How can I find my tyre size?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " The best option would be to check the tyre itself. On the sidewall of the tyre, there are a few numbers printed on it that show the size of the tyre. The number before the forward slash is the width in mm. The number after the forward slash is height of the tyre sidewall as a percentage of the width. The number after the ‘R’ is the diameter of the tyre’s inner rim size in inches. You will need these when purchasing a tyre for your vehicle as every vehicle requires different sizes of tyres to be fitted onto them. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Another way to find the size of your tyres is by using a vehicle registration lookup tool online, but it can be less accurate so it's recommended to double check against the size on the tyre. ")
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/tyre-size-guide.webp",
                          srcset: "/images/main/tyre-size-guide.webp 720w,\n                                    /images/main/tyre-size-guide-500.webp 500w,\n                                    /images/main/tyre-size-guide-300.webp 300w,\n                                    /images/main/tyre-size-guide-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Tyre Size Guide"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/images/main/tyre-changing-500.webp",
                          srcset: "/images/main/tyre-changing.webp 5472w,\n                                    /images/main/tyre-changing-500.webp 500w,\n                                    /images/main/tyre-changing-300.webp 300w,\n                                    /images/main/tyre-changing-150.webp 150w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Tyre Changing"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl font-light" }, "When should I get my tyres changed?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "list-disc text-sm pl-6 space-y-2" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07989606060"
                            }, "07989 606060"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularTyreBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomerRating, { class: "px-3 pt-12" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$o),
              createVNode(PopularTyreBrands),
              createVNode(CustomerRating, { class: "px-3 pt-12" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main/Tyres.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const Header_vue_vue_type_style_index_0_scoped_7759b69d_lang = "";
const txt = "We come to you";
const speed = 50;
const delayOff = 2e3;
const delayOn = 4e3;
const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let delayBetweenTimer = 0;
    let i = 0;
    let dir = 1;
    const typeWriter = ref("");
    const typing = ref(true);
    setInterval(() => {
      if (typeWriter.value === txt) {
        dir = -1;
        typing.value = false;
        delayBetweenTimer += speed;
        if (delayBetweenTimer >= delayOn)
          delayBetweenTimer = 0;
        else
          return;
      }
      if (typeWriter.value === "") {
        dir = 1;
        delayBetweenTimer += speed;
        if (delayBetweenTimer >= delayOff)
          delayBetweenTimer = 0;
        else
          return;
      }
      if (dir === 1) {
        typeWriter.value += txt.charAt(i);
        i++;
      } else if (dir === -1) {
        typeWriter.value = typeWriter.value.slice(0, -1);
        i--;
      }
      typing.value = true;
    }, speed);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Container, mergeProps({ class: "select-none relative flex flex-row items-center md:justify-between justify-center py-3" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:w-[300px] w-[250px]" data-v-7759b69d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full" src="/images/main/tyresanywhere.webp" alt="Tyres Anywhere LTD" width="300" height="113" data-v-7759b69d${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full",
                      src: "/images/main/tyresanywhere.webp",
                      alt: "Tyres Anywhere LTD",
                      width: "300",
                      height: "113"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="lg:block hidden absolute left-1/2 lg:top-1/2 bottom-auto -translate-y-1/2 -translate-x-1/2" data-v-7759b69d${_scopeId}><p class="typed-text xl:text-4xl lg:text-2xl text-xl font-extrabold font-[&#39;Codystar&#39;] whitespace-nowrap" data-v-7759b69d${_scopeId}>${ssrInterpolate(typeWriter.value)}<span class="${ssrRenderClass([typing.value ? "typing" : "", "cursor"])}" data-v-7759b69d${_scopeId}>|</span></p></div><div class="md:block hidden" data-v-7759b69d${_scopeId}><p class="mb-1 text-sm" data-v-7759b69d${_scopeId}>Roadside mobile tyre service or<br data-v-7759b69d${_scopeId}>Emergency tyre fitting</p><span class="flex items-center" data-v-7759b69d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-7759b69d${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" data-v-7759b69d${_scopeId}></path></svg><a class="text-xl text-wheelfit-300" href="tel:07989606060" title="Phone Number" data-v-7759b69d${_scopeId}>07989 606060</a></span></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:w-[300px] w-[250px]" }, [
                createVNode(unref(Link), { href: "/" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full",
                      src: "/images/main/tyresanywhere.webp",
                      alt: "Tyres Anywhere LTD",
                      width: "300",
                      height: "113"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "lg:block hidden absolute left-1/2 lg:top-1/2 bottom-auto -translate-y-1/2 -translate-x-1/2" }, [
                createVNode("p", { class: "typed-text xl:text-4xl lg:text-2xl text-xl font-extrabold font-['Codystar'] whitespace-nowrap" }, [
                  createTextVNode(toDisplayString(typeWriter.value), 1),
                  createVNode("span", {
                    class: ["cursor", typing.value ? "typing" : ""]
                  }, "|", 2)
                ])
              ]),
              createVNode("div", { class: "md:block hidden" }, [
                createVNode("p", { class: "mb-1 text-sm" }, [
                  createTextVNode("Roadside mobile tyre service or"),
                  createVNode("br"),
                  createTextVNode("Emergency tyre fitting")
                ]),
                createVNode("span", { class: "flex items-center" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-4 w-4 mr-1",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("a", {
                    class: "text-xl text-wheelfit-300",
                    href: "tel:07989606060",
                    title: "Phone Number"
                  }, "07989 606060")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7759b69d"]]);
const _sfc_main$3 = {
  __name: "NavLinkMob",
  __ssrInlineRender: true,
  props: {
    component: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        class: ["w-full py-4 pl-4 border-[#ebebeb] text-sm", _ctx.$page.component === __props.component ? "text-wheelfit-600 font-bold" : "text-gray-400"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/NavLinkMob.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar_vue_vue_type_style_index_0_scoped_802e4c46_lang = "";
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      hideMobileNav();
    });
    const otherServicesOpen = ref(false);
    const mobileNavShow = ref(false);
    const sliding = ref(false);
    function hideMobileNav() {
      if (sliding.value)
        return;
      mobileNavShow.value = false;
      setSliding();
    }
    function setSliding() {
      sliding.value = true;
      setTimeout(() => {
        sliding.value = false;
      }, 500);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "select-none shadow-[0_0px_10px_0px_rgba(0,0,0,0.8)] bg-black relative flex items-center justify-start" }, _attrs))} data-v-802e4c46>`);
      _push(ssrRenderComponent(Container, { class: "md:block hidden relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center" data-v-802e4c46${_scopeId}><ul class="flex flex-row list-none" data-v-802e4c46${_scopeId}><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1x, {
              class: "border-l",
              href: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46${_scopeId2}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-v-802e4c46${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1x, {
              class: "border-l nav-link-gradient-animation nav-link-gradient-2",
              href: "/mobile-tyre-fitting",
              title: "Mobile Tyre Fitting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1x, {
              class: "border-l nav-link-gradient-animation nav-link-gradient-1",
              href: "/search-tyres",
              title: "Search Tyres"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search Tyres`);
                } else {
                  return [
                    createTextVNode("Search Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1x, {
              class: "border-l",
              href: "/tyres",
              title: "Tyres Information"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tyres`);
                } else {
                  return [
                    createTextVNode("Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1y, null, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="border-l cursor-pointer flex items-center lg:text-sm text-[13px] text-gray-100 hover:text-wheelfit-600 border-gray-800 lg:py-3 lg:px-5 py-2 lg:px-4 px-3 block transition duration-150 ease-in-out" data-v-802e4c46${_scopeId2}> Other Services <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46${_scopeId2}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-802e4c46${_scopeId2}></path></svg></span>`);
                } else {
                  return [
                    createVNode("span", { class: "border-l cursor-pointer flex items-center lg:text-sm text-[13px] text-gray-100 hover:text-wheelfit-600 border-gray-800 lg:py-3 lg:px-5 py-2 lg:px-4 px-3 block transition duration-150 ease-in-out" }, [
                      createTextVNode(" Other Services "),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 ml-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          "clip-rule": "evenodd"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-row m-0" data-v-802e4c46${_scopeId2}><div class="lg:w-1/4 w-1/3 px-3" data-v-802e4c46${_scopeId2}><p class="pl-4 text-2xl font-light" data-v-802e4c46${_scopeId2}>Other Services</p><hr class="my-2 border-t-2 border-wheelfit-300/30" data-v-802e4c46${_scopeId2}><div class="space-y-2" data-v-802e4c46${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                    href: "/mobile-tyre-repair",
                    title: "Mobile Tyre Repair"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Mobile Tyre Repair`);
                      } else {
                        return [
                          createTextVNode("Mobile Tyre Repair")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                    href: "/commercial-tyres",
                    title: "Commercial Tyres"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Commercial Tyres`);
                      } else {
                        return [
                          createTextVNode("Commercial Tyres")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="lg:w-1/4 w-1/3 px-3" data-v-802e4c46${_scopeId2}><p class="pl-4 text-2xl font-light" data-v-802e4c46${_scopeId2}>Book a Tyre</p><hr class="my-2 border-t-2 border-wheelfit-300/30" data-v-802e4c46${_scopeId2}><div class="space-y-2" data-v-802e4c46${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                    href: "/search-tyres",
                    title: "Search Tyres"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Search Tyres`);
                      } else {
                        return [
                          createTextVNode("Search Tyres")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="lg:w-1/4 w-1/3 lg:ml-auto px-3" data-v-802e4c46${_scopeId2}><p class="pl-4 text-2xl font-light" data-v-802e4c46${_scopeId2}>Need Help?</p><hr class="my-2 border-t-2 border-wheelfit-300/30" data-v-802e4c46${_scopeId2}><div class="space-y-2" data-v-802e4c46${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                    href: "/contact-us",
                    title: "Contact Us"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Contact Us`);
                      } else {
                        return [
                          createTextVNode("Contact Us")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<a class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="tel:07989606060" data-v-802e4c46${_scopeId2}> 07989 606060 </a></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-row m-0" }, [
                      createVNode("div", { class: "lg:w-1/4 w-1/3 px-3" }, [
                        createVNode("p", { class: "pl-4 text-2xl font-light" }, "Other Services"),
                        createVNode("hr", { class: "my-2 border-t-2 border-wheelfit-300/30" }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(Link), {
                            class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                            href: "/mobile-tyre-repair",
                            title: "Mobile Tyre Repair"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Mobile Tyre Repair")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Link), {
                            class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                            href: "/commercial-tyres",
                            title: "Commercial Tyres"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Commercial Tyres")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "lg:w-1/4 w-1/3 px-3" }, [
                        createVNode("p", { class: "pl-4 text-2xl font-light" }, "Book a Tyre"),
                        createVNode("hr", { class: "my-2 border-t-2 border-wheelfit-300/30" }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(Link), {
                            class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                            href: "/search-tyres",
                            title: "Search Tyres"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Search Tyres")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "lg:w-1/4 w-1/3 lg:ml-auto px-3" }, [
                        createVNode("p", { class: "pl-4 text-2xl font-light" }, "Need Help?"),
                        createVNode("hr", { class: "my-2 border-t-2 border-wheelfit-300/30" }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(Link), {
                            class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                            href: "/contact-us",
                            title: "Contact Us"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Contact Us")
                            ]),
                            _: 1
                          }),
                          createVNode("a", {
                            class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                            href: "tel:07989606060"
                          }, " 07989 606060 ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1x, {
              class: "border-l",
              href: "/contact-us",
              title: "Contact Us"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-802e4c46${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1x, {
              class: "border-x",
              href: "/cart",
              title: "Your Cart"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46${_scopeId2}><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" data-v-802e4c46${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("ul", { class: "flex flex-row list-none" }, [
                  createVNode("li", null, [
                    createVNode(_sfc_main$1x, {
                      class: "border-l",
                      href: "/"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
                        ]))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_sfc_main$1x, {
                      class: "border-l nav-link-gradient-animation nav-link-gradient-2",
                      href: "/mobile-tyre-fitting",
                      title: "Mobile Tyre Fitting"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Mobile Tyre Fitting")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_sfc_main$1x, {
                      class: "border-l nav-link-gradient-animation nav-link-gradient-1",
                      href: "/search-tyres",
                      title: "Search Tyres"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Search Tyres")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_sfc_main$1x, {
                      class: "border-l",
                      href: "/tyres",
                      title: "Tyres Information"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tyres")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_sfc_main$1y, null, {
                      trigger: withCtx(() => [
                        createVNode("span", { class: "border-l cursor-pointer flex items-center lg:text-sm text-[13px] text-gray-100 hover:text-wheelfit-600 border-gray-800 lg:py-3 lg:px-5 py-2 lg:px-4 px-3 block transition duration-150 ease-in-out" }, [
                          createTextVNode(" Other Services "),
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 ml-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                              "clip-rule": "evenodd"
                            })
                          ]))
                        ])
                      ]),
                      content: withCtx(() => [
                        createVNode("div", { class: "flex flex-row m-0" }, [
                          createVNode("div", { class: "lg:w-1/4 w-1/3 px-3" }, [
                            createVNode("p", { class: "pl-4 text-2xl font-light" }, "Other Services"),
                            createVNode("hr", { class: "my-2 border-t-2 border-wheelfit-300/30" }),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(Link), {
                                class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                                href: "/mobile-tyre-repair",
                                title: "Mobile Tyre Repair"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Mobile Tyre Repair")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Link), {
                                class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                                href: "/commercial-tyres",
                                title: "Commercial Tyres"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Commercial Tyres")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "lg:w-1/4 w-1/3 px-3" }, [
                            createVNode("p", { class: "pl-4 text-2xl font-light" }, "Book a Tyre"),
                            createVNode("hr", { class: "my-2 border-t-2 border-wheelfit-300/30" }),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(Link), {
                                class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                                href: "/search-tyres",
                                title: "Search Tyres"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Search Tyres")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "lg:w-1/4 w-1/3 lg:ml-auto px-3" }, [
                            createVNode("p", { class: "pl-4 text-2xl font-light" }, "Need Help?"),
                            createVNode("hr", { class: "my-2 border-t-2 border-wheelfit-300/30" }),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(Link), {
                                class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                                href: "/contact-us",
                                title: "Contact Us"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact Us")
                                ]),
                                _: 1
                              }),
                              createVNode("a", {
                                class: "block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200",
                                href: "tel:07989606060"
                              }, " 07989 606060 ")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_sfc_main$1x, {
                      class: "border-l",
                      href: "/contact-us",
                      title: "Contact Us"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Contact Us")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_sfc_main$1x, {
                      class: "border-x",
                      href: "/cart",
                      title: "Your Cart"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
                        ]))
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="md:hidden block w-full flex items-center justify-center relative h-[3.5rem]" data-v-802e4c46><a class="flex items-center color-anim" href="tel:07989 606060" data-v-802e4c46><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" data-v-802e4c46></path></svg><span class="text-xl" data-v-802e4c46>07989 606060</span></a><button class="menu-btn h-10 w-10 bg-wheelfit-500 hover:bg-wheelfit-400 text-white border-0 outline-0 text-xl flex items-center justify-center transition duration-150 absolute right-2.5 top-1/2 -translate-y-1/2" data-v-802e4c46><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-802e4c46></path></svg></button></div><div style="${ssrRenderStyle(mobileNavShow.value ? null : { display: "none" })}" class="md:hidden block mobile-nav w-72 fixed top-0 left-0 z-50" data-v-802e4c46><div class="h-screen overflow-y-scroll" data-v-802e4c46><button class="w-full flex items-center justify-center h-14 bg-[#ebebeb] text-wheelfit-600 text-lg" type="button" data-v-802e4c46><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-802e4c46></path></svg> CLOSE </button><div class="flex flex-col" data-v-802e4c46>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/",
        component: "Index",
        class: "border-b flex items-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46${_scopeId}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-v-802e4c46${_scopeId}></path></svg> HOME `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5 mr-1",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
              ])),
              createTextVNode(" HOME ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/mobile-tyre-fitting",
        component: "MobileTyreFitting",
        title: "Mobile Tyre Fitting",
        class: "border-b"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mobile Tyre Fitting`);
          } else {
            return [
              createTextVNode("Mobile Tyre Fitting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/search-tyres",
        component: "SearchTyres.vue",
        title: "Search Tyres",
        class: "border-b"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Search Tyres`);
          } else {
            return [
              createTextVNode("Search Tyres")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/tyres",
        component: "Tyres",
        title: "Tyres",
        class: "border-b"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tyres`);
          } else {
            return [
              createTextVNode("Tyres")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full py-4 pl-4 border-b border-[#ebebeb] text-sm text-gray-400" data-v-802e4c46><span class="flex items-center" data-v-802e4c46> Other Services <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-v-802e4c46><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-802e4c46></path></svg></span><div style="${ssrRenderStyle(otherServicesOpen.value ? null : { display: "none" })}" class="flex flex-col space-y-2 mt-2" data-v-802e4c46>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/mobile-tyre-repair",
        component: "MobileTyreRepair",
        title: "Mobile Tyre Repair",
        class: "border-l-2 border-dotted"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mobile Tyre Repair`);
          } else {
            return [
              createTextVNode("Mobile Tyre Repair")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/commercial-tyres",
        component: "CommercialTyres",
        title: "Commercial Tyres",
        class: "border-l-2 border-dotted"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Commercial Tyres`);
          } else {
            return [
              createTextVNode("Commercial Tyres")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "/contact-us",
        component: "ContactUs",
        title: "Contact Us",
        class: "border-b"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-802e4c46${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("a", null, "Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: "#",
        component: "Cart",
        class: "border-b flex justify-start items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Your Cart <span class="ml-2 bg-blue-500 text-white text-sm uppercase font-bold rounded-full px-1.5 py-px" data-v-802e4c46${_scopeId}>0</span>`);
          } else {
            return [
              createTextVNode(" Your Cart "),
              createVNode("span", { class: "ml-2 bg-blue-500 text-white text-sm uppercase font-bold rounded-full px-1.5 py-px" }, "0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-802e4c46"]]);
const WhatsappIcon_vue_vue_type_style_index_0_scoped_b0746dda_lang = "";
const _sfc_main$1 = {
  __name: "WhatsappIcon",
  __ssrInlineRender: true,
  props: {
    phoneNumber: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const whatsappUrl = computed(() => {
      let baseUrl = "https://wa.me/";
      let encodedMessage = encodeURIComponent(message.value);
      return `${baseUrl}${props.phoneNumber}?text=${encodedMessage}`;
    });
    const textOpen = ref(false);
    let time = "";
    onMounted(() => {
      let date = /* @__PURE__ */ new Date();
      time = date.getHours() + ":" + date.getMinutes();
    });
    const message = ref("");
    const textarea = ref(null);
    const adjustHeight = () => {
      const el = textarea.value;
      if (!el)
        return;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
      const maxHeight = 3 * parseFloat(getComputedStyle(el).lineHeight);
      if (el.scrollHeight > maxHeight) {
        el.style.height = `${maxHeight}px`;
        el.style.overflowY = "auto";
      } else {
        el.style.overflowY = "hidden";
      }
    };
    watch(textOpen, (newVal) => {
      if (newVal) {
        nextTick(() => {
          adjustHeight();
        });
      }
    });
    onMounted(() => {
      nextTick(() => {
        adjustHeight();
      });
    });
    watch(message, () => {
      adjustHeight();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-4 left-4 z-50" }, _attrs))} data-v-b0746dda><button data-v-b0746dda><svg xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" role="img" class="size-14" viewBox="0 0 512 512" data-v-b0746dda><rect width="512" height="512" rx="15%" fill="#25d366" data-v-b0746dda></rect><path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z" data-v-b0746dda></path><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18" data-v-b0746dda></path></svg></button><div style="${ssrRenderStyle(textOpen.value ? null : { display: "none" })}" class="absolute -top-4 -translate-y-full bg-white border sm:w-96 w-72 rounded-xl overflow-hidden" data-v-b0746dda><div class="flex items-center relative p-4" data-v-b0746dda><div class="size-14 rounded-full relative" data-v-b0746dda><img src="/android-chrome-192x192.png" alt="VelocityTech" class="w-full h-full object-cover" data-v-b0746dda><div class="absolute size-2 bg-green-500 absolute bottom-0.5 right-0.5 rounded-full animate-pulse" data-v-b0746dda></div></div><div class="flex flex-col ml-4" data-v-b0746dda><span class="font-medium" data-v-b0746dda>${ssrInterpolate(__props.name)}</span><span class="text-sm" data-v-b0746dda>Typically replies within 15 minutes</span></div><button class="absolute top-2 right-2 text-gray-500" data-v-b0746dda><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5" data-v-b0746dda><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" data-v-b0746dda></path></svg></button></div><div class="bg-whatsapp px-5 pt-5 pb-8" data-v-b0746dda><div class="relative py-1.5 px-3.5 bg-white rounded-b-full rounded-tr-full" data-v-b0746dda><span data-v-b0746dda>How Can We Help?</span><span class="text-xs ml-3 text-gray-400" data-v-b0746dda>${ssrInterpolate(unref(time))}</span><svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="currentColor" class="absolute top-0 -left-[9px] text-white" data-v-b0746dda><path d="M0.772965 3.01404C-0.0113096 1.68077 0.950002 0 2.49683 0H9V17L0.772965 3.01404Z" fill="currentColor" data-v-b0746dda></path></svg></div></div><div class="relative py-3 pl-5 pr-16" data-v-b0746dda><textarea area-required="false" placeholder="Enter Your Message..." inputmode="text" class="h-auto border-0 outline-0 ring-0 focus:ring-0 resize-none w-full m-0 p-0 overflow-y-auto custom-scrollbar" rows="1" data-v-b0746dda>${ssrInterpolate(message.value)}</textarea><a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener noreferrer" class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-green-500 hover:bg-green-400 rounded-full size-7 flex items-center justify-center transition" data-v-b0746dda><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4" data-v-b0746dda><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" data-v-b0746dda></path></svg></a></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Main/WhatsappIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WhatsappIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b0746dda"]]);
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="bg-white">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`</header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$J, null, null, _parent));
      _push(ssrRenderComponent(WhatsappIcon, {
        name: "Tyres Anywhere LTD",
        phoneNumber: "+447989606060"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Brands.vue": __vite_glob_0_0, "./Pages/Admin/BulkAdjustProducts.vue": __vite_glob_0_1, "./Pages/Admin/Charges.vue": __vite_glob_0_2, "./Pages/Admin/Configurations.vue": __vite_glob_0_3, "./Pages/Admin/CoveredAreas.vue": __vite_glob_0_4, "./Pages/Admin/Dashboard.vue": __vite_glob_0_5, "./Pages/Admin/Login.vue": __vite_glob_0_6, "./Pages/Admin/ManageLocalStock.vue": __vite_glob_0_7, "./Pages/Admin/ManageProducts.vue": __vite_glob_0_8, "./Pages/Admin/ManageTyreSizes.vue": __vite_glob_0_9, "./Pages/Admin/Orders.vue": __vite_glob_0_10, "./Pages/Admin/PDFInvoice.vue": __vite_glob_0_11, "./Pages/Admin/PDFInvoiceConfirm.vue": __vite_glob_0_12, "./Pages/Admin/Postcodes.vue": __vite_glob_0_13, "./Pages/Admin/SearchInventory.vue": __vite_glob_0_14, "./Pages/Admin/Tyre/Copy.vue": __vite_glob_0_15, "./Pages/Admin/Tyre/Create.vue": __vite_glob_0_16, "./Pages/Checkout/Cart.vue": __vite_glob_0_17, "./Pages/Checkout/Checkout.vue": __vite_glob_0_18, "./Pages/Checkout/OrderSummary.vue": __vite_glob_0_19, "./Pages/Checkout/PreCheckout.vue": __vite_glob_0_20, "./Pages/Checkout/Products.vue": __vite_glob_0_21, "./Pages/Main/BreakdownRecovery.vue": __vite_glob_0_22, "./Pages/Main/CommercialTyres.vue": __vite_glob_0_23, "./Pages/Main/ContactUs.vue": __vite_glob_0_24, "./Pages/Main/Index.vue": __vite_glob_0_25, "./Pages/Main/Location.vue": __vite_glob_0_26, "./Pages/Main/MobileTyreFitting.vue": __vite_glob_0_27, "./Pages/Main/MobileTyreRepair.vue": __vite_glob_0_28, "./Pages/Main/PrivacyPolicy.vue": __vite_glob_0_29, "./Pages/Main/SearchTyres.vue": __vite_glob_0_30, "./Pages/Main/Sitemap.vue": __vite_glob_0_31, "./Pages/Main/TermsAndConditions.vue": __vite_glob_0_32, "./Pages/Main/Tyres.vue": __vite_glob_0_33 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || _sfc_main;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  }),
  3002
);
