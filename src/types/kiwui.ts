import { HTMLAttributes, KiwuiHTML } from "."

export type Key = string | number;

export type KiwuiElement<Type extends (keyof KiwuiHTML | FunctionComponent) = any> = {
    key: Key | null
    type: Type
    props: Type extends FunctionComponent<infer Props> ? Props : HTMLAttributes
}

export interface KiwuiAttributes {
    key?: Key | null | undefined;
}

export type KiwuiNode = KiwuiElement | string | number | boolean | null | undefined | KiwuiNode[];

export type JSXElement<
    Attributes extends HTMLAttributes<Element>, 
    Element extends HTMLElement = HTMLElement
> = Attributes;

export type FunctionComponent<P extends {} = KiwuiAttributes> = (props: P & KiwuiAttributes) => 
    KiwuiElement<FunctionComponent> | null