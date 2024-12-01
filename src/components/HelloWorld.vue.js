/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, defineComponent, onMounted } from 'vue';
import ProductCatalog from './ProductCatalog';
export default defineComponent({
    name: 'App',
    components: {
        ProductCatalog,
    },
    setup() {
        const darkMode = ref(false);
        const toggleDarkMode = () => {
            darkMode.value = !darkMode.value;
            if (darkMode.value) {
                document.body.classList.add('dark');
            }
            else {
                document.body.classList.remove('dark');
            }
        };
        // Ensure dark mode is applied on initial load if needed
        onMounted(() => {
            if (darkMode.value) {
                document.body.classList.add('dark');
            }
        });
        return {
            toggleDarkMode,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            ProductCatalog,
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleDarkMode) }, id: ("btn"), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ProductCatalog;
    /** @type { [typeof __VLS_components.ProductCatalog, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
