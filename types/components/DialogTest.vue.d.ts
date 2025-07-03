interface Props {
    modelValue: boolean;
    title?: string;
    maxWidth?: string | number;
    persistent?: boolean;
}
declare var __VLS_22: {}, __VLS_32: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_22) => any;
} & {
    actions?: (props: typeof __VLS_32) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    maxWidth: string | number;
    title: string;
    persistent: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
