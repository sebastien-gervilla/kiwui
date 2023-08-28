import { HTMLAttributes, KiwuiElement, KiwuiHTML, KiwuiNode, FunctionComponent, KiwuiAttributes } from "../../types";

// Functional Component

interface createElementImplementations {
    (
        type: keyof KiwuiHTML, 
        props?: HTMLAttributes | null | undefined, 
        ...children: KiwuiNode[]
    ): KiwuiElement<keyof KiwuiHTML>
    <Props extends {}>(
        type: FunctionComponent<Props>,
        props?: Props & KiwuiAttributes,
        ...children: KiwuiNode[]
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
            children
        }
    };
}