import { HTMLAttributes, KiwuiElement, KiwuiHTML, FunctionComponent, KiwuiAttributes, KiwuiNode } from "../../types";

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
        ...children: KiwuiNode[]
    ) => {
    return {
        key: props?.key || null,
        type,
        props: {
            children: children.length > 1
                ? children
                : children[0],
            ...props
        }
    };
}