import { 
    HTMLAttributes, 
    Key, 
    KiwuiElement, 
    KiwuiHTML,
    KiwuiNode
} from '.';

declare global {
    namespace JSX {
        type Element = KiwuiNode
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        interface IntrinsicAttributes { key?: Key | null | undefined; }
        interface IntrinsicClassAttributes<T extends HTMLElement> extends HTMLAttributes<T> { }

        interface IntrinsicElements extends KiwuiHTML { }
    }
}