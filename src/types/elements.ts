import { JSXElement } from './kiwui';

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
    VideoHTMLAttributes,
    SVGAttributes
} from './attributes';

export interface KiwuiHTML {
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

    // SVG
    svg: SVGAttributes<SVGSVGElement>;

    animate: SVGAttributes<SVGAnimateElement>;
    animateMotion: SVGAttributes<SVGElement>;
    animateTransform: SVGAttributes<SVGAnimateTransformElement>;
    circle: SVGAttributes<SVGCircleElement>;
    clipPath: SVGAttributes<SVGClipPathElement>;
    defs: SVGAttributes<SVGDefsElement>;
    desc: SVGAttributes<SVGDescElement>;
    ellipse: SVGAttributes<SVGEllipseElement>;
    feBlend: SVGAttributes<SVGFEBlendElement>;
    feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
    feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
    feComposite: SVGAttributes<SVGFECompositeElement>;
    feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
    feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
    feDistantLight: SVGAttributes<SVGFEDistantLightElement>;
    feDropShadow: SVGAttributes<SVGFEDropShadowElement>;
    feFlood: SVGAttributes<SVGFEFloodElement>;
    feFuncA: SVGAttributes<SVGFEFuncAElement>;
    feFuncB: SVGAttributes<SVGFEFuncBElement>;
    feFuncG: SVGAttributes<SVGFEFuncGElement>;
    feFuncR: SVGAttributes<SVGFEFuncRElement>;
    feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
    feImage: SVGAttributes<SVGFEImageElement>;
    feMerge: SVGAttributes<SVGFEMergeElement>;
    feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
    feMorphology: SVGAttributes<SVGFEMorphologyElement>;
    feOffset: SVGAttributes<SVGFEOffsetElement>;
    fePointLight: SVGAttributes<SVGFEPointLightElement>;
    feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
    feSpotLight: SVGAttributes<SVGFESpotLightElement>;
    feTile: SVGAttributes<SVGFETileElement>;
    feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
    filter: SVGAttributes<SVGFilterElement>;
    foreignObject: SVGAttributes<SVGForeignObjectElement>;
    g: SVGAttributes<SVGGElement>;
    image: SVGAttributes<SVGImageElement>;
    line: SVGAttributes<SVGLineElement>;
    linearGradient: SVGAttributes<SVGLinearGradientElement>;
    marker: SVGAttributes<SVGMarkerElement>;
    mask: SVGAttributes<SVGMaskElement>;
    metadata: SVGAttributes<SVGMetadataElement>;
    mpath: SVGAttributes<SVGElement>;
    path: SVGAttributes<SVGPathElement>;
    pattern: SVGAttributes<SVGPatternElement>;
    polygon: SVGAttributes<SVGPolygonElement>;
    polyline: SVGAttributes<SVGPolylineElement>;
    radialGradient: SVGAttributes<SVGRadialGradientElement>;
    rect: SVGAttributes<SVGRectElement>;
    stop: SVGAttributes<SVGStopElement>;
    switch: SVGAttributes<SVGSwitchElement>;
    symbol: SVGAttributes<SVGSymbolElement>;
    text: SVGAttributes<SVGTextElement>;
    textPath: SVGAttributes<SVGTextPathElement>;
    tspan: SVGAttributes<SVGTSpanElement>;
    use: SVGAttributes<SVGUseElement>;
    view: SVGAttributes<SVGViewElement>;
}