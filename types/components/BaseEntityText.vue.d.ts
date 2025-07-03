declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    r: {
        type: NumberConstructor;
        required: true;
    };
    x: {
        type: NumberConstructor;
        required: true;
    };
    y: {
        type: NumberConstructor;
        required: true;
    };
    dx: {
        type: NumberConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:entity": (...args: any[]) => void;
    "contextmenu:entity": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    r: {
        type: NumberConstructor;
        required: true;
    };
    x: {
        type: NumberConstructor;
        required: true;
    };
    y: {
        type: NumberConstructor;
        required: true;
    };
    dx: {
        type: NumberConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onClick:entity"?: ((...args: any[]) => any) | undefined;
    "onContextmenu:entity"?: ((...args: any[]) => any) | undefined;
}>, {
    rtl: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
