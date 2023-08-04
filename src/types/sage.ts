import { HTMLAttributes } from "."

export type Key = string | number;

export type SageElement<Type extends (keyof SageHTML | FunctionComponent) = keyof SageHTML> = {
    key: Key | null
    type: Type
    props: Type extends FunctionComponent<infer Props> ? Props : HTMLAttributes
}

export interface SageAttributes {
    key?: Key | null | undefined;
}

export type SageNode = SageElement | string | number | boolean | null | undefined | SageNode[];

export type JSXElement<
    Attributes extends HTMLAttributes<Element>, 
    Element extends HTMLElement = HTMLElement
> = Attributes;

export type FunctionComponent<P extends {} = SageAttributes> = (props: P & SageAttributes) => 
    SageElement<FunctionComponent> | null

// This seems to be useful only as "keyof SageHTML"
export interface SageHTML {
    a: HTMLElement
    div: HTMLElement
    p: HTMLElement
}