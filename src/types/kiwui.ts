import { HTMLAttributes, KiwuiHTML } from "."

export type Key = string | number;

export type KiwuiElement<Type extends (keyof KiwuiHTML | FunctionComponent | ExoticComponent) = any> = {
    key: Key | null
    type: Type extends ExoticComponent
        ? Type & { exoticTag: string }
        : Type
    props: Type extends (FunctionComponent<infer Props> | ExoticComponent<infer Props>)
        ? Props 
        : ({ children?: SingleKiwuiNode[] } & Omit<HTMLAttributes, 'children'>)
}

export interface KiwuiAttributes {
    key?: Key | null | undefined;
}

export type KiwuiNode = SingleKiwuiNode | KiwuiNode[];

export type SingleKiwuiNode = KiwuiElement | string | number | boolean | null | undefined;

export type JSXElement<
    Attributes extends HTMLAttributes<Element>, 
    Element extends HTMLElement = HTMLElement
> = Attributes;

export type FunctionComponent<P extends {} = KiwuiAttributes> = 
    (props: P & KiwuiAttributes) => KiwuiElement<any> | null // TODO: KiwuiNode ?

export type ExoticComponent<P extends {} = KiwuiAttributes> = {
    (props: P & KiwuiAttributes): KiwuiElement<any> | null // TODO: KiwuiNode ?
    exoticTag: string
}

export type ContextConsumer<T> = {
    (props: {
        value: T
        children: KiwuiNode
    }): KiwuiNode;
    initialValue: T;
}