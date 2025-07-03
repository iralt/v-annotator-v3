declare const _default: import("vue").DefineComponent<{}, {
    $emit: (event: "click:entity" | "contextmenu:entity" | "mouseleave" | "mouseover", ...args: any[]) => void;
    rtl: boolean;
    level: number;
    ranges: Record<string, any>;
    noText: boolean;
    margin: number;
    fontSize: number;
    selected: boolean;
    label?: string | undefined;
    color?: string | undefined;
    $props: {
        readonly rtl?: boolean | undefined;
        readonly level?: number | undefined;
        readonly ranges?: Record<string, any> | undefined;
        readonly noText?: boolean | undefined;
        readonly margin?: number | undefined;
        readonly fontSize?: number | undefined;
        readonly selected?: boolean | undefined;
        readonly label?: string | undefined;
        readonly color?: string | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
