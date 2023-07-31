export type SageElement = {
    key: Key | null
    type: keyof SageHTML | FunctionComponent
    props: HTMLAttributes | null | undefined | {}
}

export type HTMLElement = {

}

export interface SageAttributes {
    key?: Key | null | undefined;
}

export interface HTMLAttributes extends DOMAttributes {
    // Sage attributes
    key?: Key | null | undefined;

    // Standard HTML Attributes
    id?: string | undefined
    className?: string | undefined

    children?: SageNode[] | SageNode | undefined
}

export interface SageHTML {
    a: HTMLElement
    div: HTMLElement
    p: HTMLElement
}

export type Key = string | number;

export type SageNode = SageElement | string | number | boolean | null | undefined;

export interface DOMAttributes {
    onClick?: () => void | undefined
}

export type JSXElement<Attributes extends HTMLAttributes> = Attributes;

export type FunctionComponent<P = {}> = (props: P) => SageElement | null