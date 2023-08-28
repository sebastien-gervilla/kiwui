import { HTMLAttributes, SageElement, SageHTML, FunctionComponent, SageAttributes, SingleSageNode } from "../../types";

// Functional Component

interface createElementImplementations {
    (
        type: keyof SageHTML, 
        props?: HTMLAttributes | null | undefined, 
        ...children: SingleSageNode[]
    ): SageElement<keyof SageHTML>
    <Props extends {}>(
        type: FunctionComponent<Props>,
        props?: Props & SageAttributes,
        ...children: SingleSageNode[]
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
            children: children.flat(Infinity)
        }
    };
}