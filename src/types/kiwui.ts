import { HTMLAttributes, KiwuiHTML, Reference } from "."

export type Key = string | number;

export type KiwuiElement<Type extends (keyof KiwuiHTML | FunctionComponent<any> | ExoticComponent<any>) = any> = {
    key: Key | null
    type: Type extends ExoticComponent
        ? Type & { exoticTag: string }
        : Type
    props: Type extends (FunctionComponent<infer Props> | ExoticComponent<infer Props>)
        ? Props & KiwuiAttributes
        : JSXElement<HTMLAttributes>
}

export interface KiwuiAttributes {
    key?: Key | null | undefined;
}

export interface RefAttributes<T> {
    ref?: Reference<T> | undefined
}

export type KiwuiNode = SingleKiwuiNode | KiwuiNode[];

export type SingleKiwuiNode = KiwuiElement | string | number | boolean | null | undefined;

export type JSXElement<
    Attributes extends HTMLAttributes<Element>, 
    Element extends HTMLElement = HTMLElement
> = Attributes & RefAttributes<Element | null>;

export type FC<P extends {} = KiwuiAttributes> = FunctionComponent<P>
export type FunctionComponent<P extends {} = KiwuiAttributes> = 
    (props: P & KiwuiAttributes) => KiwuiNode

export type ExoticComponent<P extends {} = KiwuiAttributes, T extends {} = {}> = {
    (props: P & KiwuiAttributes): KiwuiNode
    exoticTag: string
} & T

// Memo
type ShouldUpdateCallback<Props extends {}> = 
    (oldProps: Readonly<Props>, newProps: Readonly<Props>) => boolean

export type MemoComponent<Props extends {} = {}> = ExoticComponent<Props, {
    shouldUpdate?: ShouldUpdateCallback<Props>
}>

// Portal
export type PortalComponent = ExoticComponent<{
    children: KiwuiNode
}, {
    container: HTMLElement
}>