import { 
    HTMLAttributes, 
    Key, 
    SageElement, 
    JSXElement, 
    HTMLElement,

    // HTML Elements
    AnchorHTMLAttributes
} from '.';

declare global {
    namespace JSX {
        interface Element extends SageElement { }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        interface IntrinsicAttributes { key: Key | null }
        interface IntrinsicClassAttributes<T extends HTMLElement> extends HTMLAttributes { }

        interface IntrinsicElements {
            // HTML
            a: JSXElement<AnchorHTMLAttributes>
            div: JSXElement<HTMLAttributes>
            p: JSXElement<HTMLAttributes>
        }
    }
}