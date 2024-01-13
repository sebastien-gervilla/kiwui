import { JSXElement } from './kiwui';

import {
    HTMLAttributes,
    AnchorHTMLAttributes,
    AreaHTMLAttributes,
    AudioHTMLAttributes,
    BaseHTMLAttributes,
    BlockquoteHTMLAttributes,
    ButtonHTMLAttributes,
    CanvasHTMLAttributes,
    ColHTMLAttributes,
    ColgroupHTMLAttributes,
    DataHTMLAttributes,
    DetailsHTMLAttributes,
    DelHTMLAttributes,
    DialogHTMLAttributes,
    EmbedHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes, 
    IframeHTMLAttributes,
    ImgHTMLAttributes, 
    InputHTMLAttributes, 
    InsHTMLAttributes,
    LabelHTMLAttributes, 
    LiHTMLAttributes, 
    LinkHTMLAttributes,
    MapHTMLAttributes, 
    MenuHTMLAttributes,
    MetaHTMLAttributes, 
    MeterHTMLAttributes,
    ObjectHTMLAttributes,
    OlHTMLAttributes, 
    OptgroupHTMLAttributes,
    OptionHTMLAttributes, 
    OutputHTMLAttributes,
    ProgressHTMLAttributes,
    QuoteHTMLAttributes,
    SlotHTMLAttributes,
    ScriptHTMLAttributes, 
    SelectHTMLAttributes, 
    SourceHTMLAttributes,
    StyleHTMLAttributes, 
    TableHTMLAttributes, 
    TdHTMLAttributes, 
    TextareaHTMLAttributes, 
    ThHTMLAttributes, 
    TimeHTMLAttributes,
    TrackHTMLAttributes,
    VideoHTMLAttributes,
    SVGAttributes
} from './attributes';

export interface KiwuiHTML {
    a: JSXElement<AnchorHTMLAttributes, HTMLAnchorElement>
    abbr: JSXElement<HTMLAttributes, HTMLElement>
    adress: JSXElement<HTMLAttributes, HTMLElement>
    area: JSXElement<AreaHTMLAttributes, HTMLAreaElement>
    article: JSXElement<HTMLAttributes, HTMLElement>
    aside: JSXElement<HTMLAttributes, HTMLElement>
    audio: JSXElement<AudioHTMLAttributes, HTMLAudioElement>

    b: JSXElement<HTMLAttributes, HTMLElement>;
    base: JSXElement<BaseHTMLAttributes, HTMLBaseElement>;
    bdi: JSXElement<HTMLAttributes, HTMLElement>;
    bdo: JSXElement<HTMLAttributes, HTMLElement>;
    blockquote: JSXElement<BlockquoteHTMLAttributes, HTMLQuoteElement>;
    body: JSXElement<HTMLAttributes, HTMLBodyElement>;
    br: JSXElement<HTMLAttributes, HTMLBRElement>;
    button: JSXElement<ButtonHTMLAttributes, HTMLButtonElement>;

    canvas: JSXElement<CanvasHTMLAttributes, HTMLCanvasElement>
    caption: JSXElement<HTMLAttributes, HTMLElement>
    cite: JSXElement<HTMLAttributes, HTMLElement>
    code: JSXElement<HTMLAttributes, HTMLElement>
    col: JSXElement<ColHTMLAttributes, HTMLTableColElement>
    colgroup: JSXElement<ColgroupHTMLAttributes, HTMLTableColElement>

    data: JSXElement<DataHTMLAttributes, HTMLDataElement>
    datalist: JSXElement<HTMLAttributes, HTMLDataListElement>
    dd: JSXElement<HTMLAttributes, HTMLElement>
    del: JSXElement<DelHTMLAttributes, HTMLModElement>
    details: JSXElement<DetailsHTMLAttributes, HTMLDetailsElement>
    dfn: JSXElement<HTMLAttributes, HTMLElement>
    dialog: JSXElement<DialogHTMLAttributes, HTMLDialogElement>
    div: JSXElement<HTMLAttributes, HTMLDivElement>
    dl: JSXElement<HTMLAttributes, HTMLDListElement>
    dt: JSXElement<HTMLAttributes, HTMLElement>

    em: JSXElement<HTMLAttributes, HTMLElement>
    embed: JSXElement<EmbedHTMLAttributes, HTMLEmbedElement>

    fieldset: JSXElement<FieldsetHTMLAttributes, HTMLFieldSetElement>
    figcaption: JSXElement<HTMLAttributes, HTMLElement>
    figure: JSXElement<HTMLAttributes, HTMLElement>
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
    hgroup: JSXElement<HTMLAttributes, HTMLElement>
    hr: JSXElement<HTMLAttributes, HTMLHRElement>
    html: JSXElement<HTMLAttributes, HTMLHtmlElement>

    i: JSXElement<HTMLAttributes, HTMLElement>
    iframe: JSXElement<IframeHTMLAttributes, HTMLIFrameElement>
    img: JSXElement<ImgHTMLAttributes, HTMLImageElement>
    input: JSXElement<InputHTMLAttributes, HTMLInputElement>
    ins: JSXElement<InsHTMLAttributes, HTMLModElement>

    kbd: JSXElement<HTMLAttributes, HTMLElement>

    label: JSXElement<LabelHTMLAttributes, HTMLLabelElement>
    legend: JSXElement<HTMLAttributes, HTMLLegendElement>
    li: JSXElement<LiHTMLAttributes, HTMLLIElement>
    link: JSXElement<LinkHTMLAttributes, HTMLLinkElement>

    main: JSXElement<HTMLAttributes, HTMLElement>
    map: JSXElement<MapHTMLAttributes, HTMLMapElement>
    mark: JSXElement<HTMLAttributes, HTMLElement>
    menu: JSXElement<MenuHTMLAttributes, HTMLMenuElement>
    meta: JSXElement<MetaHTMLAttributes, HTMLMetaElement>
    meter: JSXElement<MeterHTMLAttributes, HTMLMeterElement>

    nav: JSXElement<HTMLAttributes, HTMLElement>
    noscript: JSXElement<HTMLAttributes, HTMLElement>

    object: JSXElement<ObjectHTMLAttributes, HTMLObjectElement>
    ol: JSXElement<OlHTMLAttributes, HTMLOListElement>
    optgroup: JSXElement<OptgroupHTMLAttributes, HTMLOptGroupElement>
    option: JSXElement<OptionHTMLAttributes, HTMLOptionElement>
    output: JSXElement<OutputHTMLAttributes, HTMLOutputElement>

    p: JSXElement<HTMLAttributes, HTMLParagraphElement>
    picture: JSXElement<HTMLAttributes, HTMLElement>
    pre: JSXElement<HTMLAttributes, HTMLPreElement>
    progress: JSXElement<ProgressHTMLAttributes, HTMLProgressElement>

    q: JSXElement<QuoteHTMLAttributes, HTMLQuoteElement>

    rp: JSXElement<HTMLAttributes, HTMLElement>
    rt: JSXElement<HTMLAttributes, HTMLElement>
    ruby: JSXElement<HTMLAttributes, HTMLElement>

    s: JSXElement<HTMLAttributes, HTMLElement>
    samp: JSXElement<HTMLAttributes, HTMLElement>
    slot: JSXElement<SlotHTMLAttributes, HTMLSlotElement>
    script: JSXElement<ScriptHTMLAttributes, HTMLScriptElement>
    section: JSXElement<HTMLAttributes, HTMLElement>
    select: JSXElement<SelectHTMLAttributes, HTMLSelectElement>
    small: JSXElement<HTMLAttributes, HTMLElement>
    source: JSXElement<SourceHTMLAttributes, HTMLSourceElement>
    span: JSXElement<HTMLAttributes, HTMLSpanElement>
    strong: JSXElement<HTMLAttributes, HTMLElement>
    style: JSXElement<StyleHTMLAttributes, HTMLStyleElement>
    sub: JSXElement<HTMLAttributes, HTMLElement>
    summary: JSXElement<HTMLAttributes, HTMLElement>
    sup: JSXElement<HTMLAttributes, HTMLElement>

    table: JSXElement<TableHTMLAttributes,HTMLTableElement>
    template: JSXElement<HTMLAttributes, HTMLTemplateElement>
    tbody: JSXElement<HTMLAttributes, HTMLTableSectionElement>
    td: JSXElement<TdHTMLAttributes, HTMLTableCellElement>
    textarea: JSXElement<TextareaHTMLAttributes, HTMLTextAreaElement>
    tfoot: JSXElement<HTMLAttributes, HTMLTableSectionElement>
    th: JSXElement<ThHTMLAttributes, HTMLTableCellElement>
    thead: JSXElement<HTMLAttributes, HTMLTableSectionElement>
    time: JSXElement<TimeHTMLAttributes, HTMLTimeElement>
    title: JSXElement<HTMLAttributes, HTMLTitleElement>
    tr: JSXElement<HTMLAttributes, HTMLTableRowElement>
    track: JSXElement<TrackHTMLAttributes, HTMLTrackElement>

    u: JSXElement<HTMLAttributes, HTMLElement>
    ul: JSXElement<HTMLAttributes, HTMLUListElement>

    'var': JSXElement<HTMLAttributes, HTMLElement>
    video: JSXElement<VideoHTMLAttributes, HTMLVideoElement>

    wbr: JSXElement<HTMLAttributes, HTMLElement>

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