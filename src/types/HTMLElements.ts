import { HTMLAttributes } from '.';

// =======================================
// =============      a      =============
// =======================================
export interface AnchorHTMLAttributes extends HTMLAttributes {
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    media?: string | undefined;
    ping?: string | undefined;
    rel?: string | undefined;
    target?: HTMLAttributeAnchorTarget | undefined;
    type?: string | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
}

type HTMLAttributeAnchorTarget =
    | '_self'
    | '_blank'
    | '_parent'
    | '_top'

type HTMLAttributeReferrerPolicy =
    | ''
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';

// =======================================
// ============    button    =============
// =======================================
export interface ButtonHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
}

// =======================================
// =============    form    ==============
// =======================================
export interface FormHTMLAttributes extends HTMLAttributes {
    acceptCharset?: string | undefined;
    action?: string | undefined;
    autoComplete?: string | undefined;
    encType?: string | undefined;
    method?: string | undefined;
    name?: string | undefined;
    noValidate?: boolean | undefined;
    target?: string | undefined;
    rel?: string | undefined;
}

// =======================================
// =============    html    ==============
// =======================================
export interface HtmlHTMLAttributes extends HTMLAttributes {
    manifest?: string | undefined;
}

// =======================================
// ==============    img    ==============
// =======================================
export interface ImgHTMLAttributes extends HTMLAttributes {
    alt?: string | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    decoding?: "async" | "auto" | "sync" | undefined;
    height?: number | string | undefined;
    loading?: "eager" | "lazy" | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    sizes?: string | undefined;
    src?: string | undefined;
    srcSet?: string | undefined;
    useMap?: string | undefined;
    width?: number | string | undefined;
}

// =======================================
// =============    input    =============
// =======================================
export interface InputHTMLAttributes extends HTMLAttributes {
    accept?: string | undefined;
    alt?: string | undefined;
    autoComplete?: string | undefined;
    capture?: boolean | 'user' | 'environment' | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    disabled?: boolean | undefined;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    height?: number | string | undefined;
    list?: string | undefined;
    max?: number | string | undefined;
    maxLength?: number | undefined;
    min?: number | string | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    size?: number | undefined;
    src?: string | undefined;
    step?: number | string | undefined;
    type?: HTMLInputTypeAttribute | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    width?: number | string | undefined;

    // onChange?: ChangeEventHandler<T> | undefined; TODO: handlers
}

type HTMLInputTypeAttribute =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | (string & {});

// =======================================
// ==============    li    ===============
// =======================================
export interface LiHTMLAttributes extends HTMLAttributes {
    value?: string | ReadonlyArray<string> | number | undefined;
}

// =======================================
// =============    link    ==============
// =======================================
export interface LinkHTMLAttributes extends HTMLAttributes {
    as?: string | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    href?: string | undefined;
    hrefLang?: string | undefined;
    integrity?: string | undefined;
    media?: string | undefined;
    imageSrcSet?: string | undefined;
    imageSizes?: string | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    rel?: string | undefined;
    sizes?: string | undefined;
    type?: string | undefined;
    charSet?: string | undefined;
}

// =======================================
// ==============    ol    ===============
// =======================================
export interface OlHTMLAttributes extends HTMLAttributes {
    reversed?: boolean | undefined;
    start?: number | undefined;
    type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined;
}

// =======================================
// ============    option    =============
// =======================================
export interface OptionHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | undefined;
    label?: string | undefined;
    selected?: boolean | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
}

// =======================================
// ============    script    =============
// =======================================
export interface ScriptHTMLAttributes extends HTMLAttributes {
    async?: boolean | undefined;
    /** @deprecated */
    charSet?: string | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    defer?: boolean | undefined;
    integrity?: string | undefined;
    noModule?: boolean | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    src?: string | undefined;
    type?: string | undefined;
}

// =======================================
// ============    select    =============
// =======================================
export interface SelectHTMLAttributes extends HTMLAttributes {
    autoComplete?: string | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    required?: boolean | undefined;
    size?: number | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    // onChange?: ChangeEventHandler<T> | undefined; TODO: handlers
}

// =======================================
// =============    style    =============
// =======================================
export interface StyleHTMLAttributes extends HTMLAttributes {
    media?: string | undefined;
    scoped?: boolean | undefined;
    type?: string | undefined;
}

// =======================================
// ============    textarea    ===========
// =======================================
export interface TextareaHTMLAttributes extends HTMLAttributes {
    autoComplete?: string | undefined;
    cols?: number | undefined;
    dirName?: string | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    rows?: number | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    wrap?: string | undefined;

    // onChange?: ChangeEventHandler<T> | undefined; TODO: handlers
}