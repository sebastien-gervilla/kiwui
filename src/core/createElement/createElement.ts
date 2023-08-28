import { HTMLAttributes, KiwuiElement, KiwuiHTML, FunctionComponent, KiwuiAttributes, SingleKiwuiNode } from "../../types";

// Functional Component

interface createElementImplementations {
    (
        type: keyof KiwuiHTML, 
        props?: HTMLAttributes | null | undefined, 
        ...children: SingleKiwuiNode[]
    ): KiwuiElement<keyof KiwuiHTML>
    <Props extends {}>(
        type: FunctionComponent<Props>,
        props?: Props & KiwuiAttributes,
        ...children: SingleKiwuiNode[]
    ): KiwuiElement<FunctionComponent>
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