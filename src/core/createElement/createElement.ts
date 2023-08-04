import { HTMLAttributes, SageElement, SageHTML, SageNode, FunctionComponent, SageAttributes } from "../../types";

// Functional Component

interface createElementImplementations {
    (
        type: keyof SageHTML, 
        props?: HTMLAttributes | null | undefined, 
        ...children: SageNode[]
    ): SageElement<keyof SageHTML>
    <Props extends {}>(
        type: FunctionComponent<Props>,
        props?: Props & SageAttributes,
        ...children: SageNode[]
    ): SageElement<FunctionComponent>
}

export const createElement: createElementImplementations = (
        type: any,
        props?: any,
        ...children: any
    ) => {
    return {
        key: props?.key || null,
        type,
        props: {
            ...props,
            children
        }
    };
}