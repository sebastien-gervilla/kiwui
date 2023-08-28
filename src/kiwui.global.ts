import { 
    HTMLAttributes, 
    Key, 
    KiwuiElement, 
    KiwuiHTML
} from '.';

declare global {
    namespace JSX {
        interface Element extends KiwuiElement { }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        interface IntrinsicAttributes { key?: Key | null | undefined; }
        interface IntrinsicClassAttributes<T extends HTMLElement> extends HTMLAttributes { }

        interface IntrinsicElements extends KiwuiHTML { }
    }
}