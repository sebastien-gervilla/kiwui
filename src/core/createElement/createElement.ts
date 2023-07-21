import { HTMLAttributes, SageElement, SageHTML, SageNode } from "../../types";

export const createElement = (
        tag: keyof SageHTML, 
        props?: HTMLAttributes | null | undefined, 
        ...children: SageNode[]
    ): SageElement => {
    return {
        key: props?.key || null,
        tag,
        props: {
            ...props,
            children
        }
    };
}