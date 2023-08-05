import { JSXElement } from './sage';

import {
    HTMLAttributes,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes, 
    FormHTMLAttributes, 
    ImgHTMLAttributes, 
    InputHTMLAttributes, 
    LabelHTMLAttributes, 
    LiHTMLAttributes, 
    LinkHTMLAttributes, 
    MetaHTMLAttributes, 
    OlHTMLAttributes, 
    OptionHTMLAttributes, 
    ScriptHTMLAttributes, 
    SelectHTMLAttributes, 
    StyleHTMLAttributes, 
    TableHTMLAttributes, 
    TdHTMLAttributes, 
    TextareaHTMLAttributes, 
    ThHTMLAttributes, 
    VideoHTMLAttributes
} from './attributes';

export interface SageHTML {
    a: JSXElement<AnchorHTMLAttributes, HTMLAnchorElement>
    article: JSXElement<HTMLAttributes, HTMLElement>
    b: JSXElement<HTMLAttributes, HTMLElement>;
    body: JSXElement<HTMLAttributes, HTMLBodyElement>;
    button: JSXElement<ButtonHTMLAttributes, HTMLButtonElement>;
    code: JSXElement<HTMLAttributes, HTMLElement>
    div: JSXElement<HTMLAttributes, HTMLDivElement>
    em: JSXElement<HTMLAttributes, HTMLElement>
    footer: JSXElement<HTMLAttributes, HTMLElement>
    form: JSXElement<FormHTMLAttributes, HTMLFormElement>
    h1: JSXElement<HTMLAttributes, HTMLHeadingElement>
    h2: JSXElement<HTMLAttributes, HTMLHeadingElement>
    h3: JSXElement<HTMLAttributes, HTMLHeadingElement>
    h4: JSXElement<HTMLAttributes, HTMLHeadingElement>
    h5: JSXElement<HTMLAttributes, HTMLHeadingElement>
    h6: JSXElement<HTMLAttributes, HTMLHeadingElement>
    head: JSXElement<HTMLAttributes, HTMLHeadElement>
    header: JSXElement<HTMLAttributes, HTMLElement>
    html: JSXElement<HTMLAttributes, HTMLHtmlElement>
    img: JSXElement<ImgHTMLAttributes, HTMLImageElement>
    input: JSXElement<InputHTMLAttributes, HTMLInputElement>
    label: JSXElement<LabelHTMLAttributes, HTMLLabelElement>
    li: JSXElement<LiHTMLAttributes, HTMLLIElement>
    link: JSXElement<LinkHTMLAttributes, HTMLLinkElement>
    main: JSXElement<HTMLAttributes, HTMLElement>
    meta: JSXElement<MetaHTMLAttributes, HTMLMetaElement>
    nav: JSXElement<HTMLAttributes, HTMLElement>
    ol: JSXElement<OlHTMLAttributes, HTMLOListElement>
    option: JSXElement<OptionHTMLAttributes, HTMLOptionElement>
    p: JSXElement<HTMLAttributes, HTMLParagraphElement>
    pre: JSXElement<HTMLAttributes, HTMLPreElement>
    script: JSXElement<ScriptHTMLAttributes, HTMLScriptElement>
    section: JSXElement<HTMLAttributes, HTMLElement>
    select: JSXElement<SelectHTMLAttributes, HTMLSelectElement>
    span: JSXElement<HTMLAttributes, HTMLSpanElement>
    strong: JSXElement<HTMLAttributes, HTMLElement>
    style: JSXElement<StyleHTMLAttributes, HTMLStyleElement>
    table: JSXElement<TableHTMLAttributes,HTMLTableElement>
    td: JSXElement<TdHTMLAttributes, HTMLTableCellElement>
    textarea: JSXElement<TextareaHTMLAttributes, HTMLTextAreaElement>
    th: JSXElement<ThHTMLAttributes, HTMLTableCellElement>
    title: JSXElement<HTMLAttributes, HTMLTitleElement>
    ul: JSXElement<HTMLAttributes, HTMLUListElement>
    video: JSXElement<VideoHTMLAttributes, HTMLVideoElement>
}