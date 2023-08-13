import { HTMLAttributes, SageElement, SageHTML, SageNode, FunctionComponent, SageAttributes, SageElementChildren } from "../../types";

// Functional Component

interface createElementImplementations {
    (
        type: keyof SageHTML, 
        props?: HTMLAttributes | null | undefined, 
        ...children: SageElementChildren[]
    ): SageElement<keyof SageHTML>
    <Props extends {}>(
        type: FunctionComponent<Props>,
        props?: Props & SageAttributes,
        ...children: SageElementChildren[]
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