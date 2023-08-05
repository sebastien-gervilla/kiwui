import { 
    HTMLAttributes, 
    Key, 
    SageElement, 
    SageHTML
} from '.';

declare global {
    namespace JSX {
        interface Element extends SageElement { }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        interface IntrinsicAttributes { key?: Key | null | undefined; }
        interface IntrinsicClassAttributes<T extends HTMLElement> extends HTMLAttributes { }

        interface IntrinsicElements extends SageHTML { }
    }
}