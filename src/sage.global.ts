import { 
    HTMLAttributes, 
    Key, 
    SageElement, 
    JSXElement, 
    HTMLElement,

    // HTML Elements
    AnchorHTMLAttributes
} from '.';
import { ButtonHTMLAttributes, FormHTMLAttributes, ImgHTMLAttributes, InputHTMLAttributes, LiHTMLAttributes, LinkHTMLAttributes, OlHTMLAttributes, OptionHTMLAttributes, ScriptHTMLAttributes, SelectHTMLAttributes, StyleHTMLAttributes, TextareaHTMLAttributes } from './types/HTMLElements';

declare global {
    namespace JSX {
        interface Element extends SageElement { }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        interface IntrinsicAttributes { key: Key | null }
        interface IntrinsicClassAttributes<T extends HTMLElement> extends HTMLAttributes { }

        interface IntrinsicElements {
            // HTML | TODO: Implement native props
            a: JSXElement<AnchorHTMLAttributes>
            article: JSXElement<HTMLAttributes>
            b: JSXElement<HTMLAttributes>;
            body: JSXElement<HTMLAttributes>;
            button: JSXElement<ButtonHTMLAttributes>;
            code: JSXElement<HTMLAttributes>
            div: JSXElement<HTMLAttributes>
            em: JSXElement<HTMLAttributes>
            footer: JSXElement<HTMLAttributes>
            form: JSXElement<FormHTMLAttributes>
            h1: JSXElement<HTMLAttributes>
            h2: JSXElement<HTMLAttributes>
            h3: JSXElement<HTMLAttributes>
            h4: JSXElement<HTMLAttributes>
            h5: JSXElement<HTMLAttributes>
            h6: JSXElement<HTMLAttributes>
            head: JSXElement<HTMLAttributes>
            header: JSXElement<HTMLAttributes>
            html: JSXElement<HTMLAttributes>
            img: JSXElement<ImgHTMLAttributes>
            input: JSXElement<InputHTMLAttributes>
            li: JSXElement<LiHTMLAttributes>
            link: JSXElement<LinkHTMLAttributes>
            main: JSXElement<HTMLAttributes>
            nav: JSXElement<HTMLAttributes>
            ol: JSXElement<OlHTMLAttributes>
            option: JSXElement<OptionHTMLAttributes>
            p: JSXElement<HTMLAttributes>
            pre: JSXElement<HTMLAttributes>
            script: JSXElement<ScriptHTMLAttributes>
            section: JSXElement<HTMLAttributes>
            select: JSXElement<SelectHTMLAttributes>
            span: JSXElement<HTMLAttributes>
            strong: JSXElement<HTMLAttributes>
            style: JSXElement<StyleHTMLAttributes>
            textarea: JSXElement<TextareaHTMLAttributes>
            title: JSXElement<HTMLAttributes>
            ul: JSXElement<HTMLAttributes>
        }
    }
}