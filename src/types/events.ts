export interface KiwuiEvents<Target extends HTMLElement | SVGElement> {

    // Drag events
    onDrag?: DragEventHandler<Target> | undefined;
    onDragEnd?: DragEventHandler<Target> | undefined;
    onDragEnter?: DragEventHandler<Target> | undefined;
    onDragExit?: DragEventHandler<Target> | undefined;
    onDragLeave?: DragEventHandler<Target> | undefined;
    onDragOver?: DragEventHandler<Target> | undefined;
    onDragStart?: DragEventHandler<Target> | undefined;
    onDrop?: DragEventHandler<Target> | undefined;

    // Clipboard Events
    onCopy?: ClipboardEventHandler<Target> | undefined;
    onCut?: ClipboardEventHandler<Target> | undefined;
    onPaste?: ClipboardEventHandler<Target> | undefined;

    // Composition Events
    onCompositionEnd?: CompositionEventHandler<Target> | undefined;
    onCompositionStart?: CompositionEventHandler<Target> | undefined;
    onCompositionUpdate?: CompositionEventHandler<Target> | undefined;

    // Focus Events
    onFocus?: FocusEventHandler<Target> | undefined;
    onBlur?: FocusEventHandler<Target> | undefined;

    // Form Events
    onChange?: FormEventHandler<Target> | undefined;
    onBeforeInput?: FormEventHandler<Target> | undefined;
    onInput?: FormEventHandler<Target> | undefined;
    onReset?: FormEventHandler<Target> | undefined;
    onSubmit?: FormEventHandler<Target> | undefined;
    onInvalid?: FormEventHandler<Target> | undefined;

    // Keyboard Events
    onKeyDown?: KeyboardEventHandler<Target> | undefined;
    onKeyUp?: KeyboardEventHandler<Target> | undefined;

    // MouseEvents
    onAuxClick?: MouseEventHandler<Target> | undefined;
    onClick?: MouseEventHandler<Target> | undefined;
    onContextMenu?: MouseEventHandler<Target> | undefined;
    onDoubleClick?: MouseEventHandler<Target> | undefined;
    onMouseDown?: MouseEventHandler<Target> | undefined;
    onMouseEnter?: MouseEventHandler<Target> | undefined;
    onMouseLeave?: MouseEventHandler<Target> | undefined;
    onMouseMove?: MouseEventHandler<Target> | undefined;
    onMouseOut?: MouseEventHandler<Target> | undefined;
    onMouseOver?: MouseEventHandler<Target> | undefined;
    onMouseUp?: MouseEventHandler<Target> | undefined;

    // Touch Events
    onTouchCancel?: TouchEventHandler<Target> | undefined;
    onTouchEnd?: TouchEventHandler<Target> | undefined;
    onTouchMove?: TouchEventHandler<Target> | undefined;
    onTouchStart?: TouchEventHandler<Target> | undefined;

    // Pointer Events
    onPointerDown?: PointerEventHandler<Target> | undefined;
    onPointerMove?: PointerEventHandler<Target> | undefined;
    onPointerUp?: PointerEventHandler<Target> | undefined;
    onPointerCancel?: PointerEventHandler<Target> | undefined;
    onPointerEnter?: PointerEventHandler<Target> | undefined;
    onPointerLeave?: PointerEventHandler<Target> | undefined;
    onPointerOver?: PointerEventHandler<Target> | undefined;
    onPointerOut?: PointerEventHandler<Target> | undefined;
    onGotPointerCapture?: PointerEventHandler<Target> | undefined;
    onLostPointerCapture?: PointerEventHandler<Target> | undefined;

    // UI Events
    onScroll?: UIEventHandler<Target> | undefined;

    // Wheel Events
    onWheel?: WheelEventHandler<Target> | undefined;

    // Animation Events
    onAnimationStart?: AnimationEventHandler<Target> | undefined;
    onAnimationEnd?: AnimationEventHandler<Target> | undefined;
    onAnimationIteration?: AnimationEventHandler<Target> | undefined;

    // Transition Events
    onTransitionEnd?: TransitionEventHandler<Target> | undefined;
}

//
// Event Handlers
// ======================================================================

type EventHandler<Event extends KiwuiEvent<Element>> = (event: Event) => void

type ClipboardEventHandler<Target extends Element> = EventHandler<ClipboardEvent<Target>>;
type CompositionEventHandler<Target extends Element> = EventHandler<CompositionEvent<Target>>;
type DragEventHandler<Target extends Element> = EventHandler<DragEvent<Target>>;
type FocusEventHandler<Target extends Element> = EventHandler<FocusEvent<Target>>;
type FormEventHandler<Target extends Element> = EventHandler<FormEvent<Target>>;
type KeyboardEventHandler<Target extends Element> = EventHandler<FormEvent<Target>>;
type MouseEventHandler<Target extends Element> = EventHandler<MouseEvent<Target>>;
type TouchEventHandler<Target extends Element> = EventHandler<TouchEvent<Target>>;
type PointerEventHandler<Target extends Element> = EventHandler<PointerEvent<Target>>;
type UIEventHandler<Target extends Element> = EventHandler<UIEvent<Target>>;
type WheelEventHandler<Target extends Element> = EventHandler<WheelEvent<Target>>;
type AnimationEventHandler<Target extends Element> = EventHandler<AnimationEvent<Target>>;
type TransitionEventHandler<Target extends Element> = EventHandler<TransitionEvent<Target>>;

// Element specifics
export type ChangeEventHandler<Target extends Element> = EventHandler<ChangeEvent<Target>>;

//
// Events
// ======================================================================

// TODO: "Event" is for the "nativeEvent", which should be added when processing events in Kiwui
// TODO: "target" should extend EventTarget by default, which is a pain to dev really
interface KiwuiEvent<
    CurrentTarget extends Element,
    NativeEvent = any,
    Target extends EventTarget = any
> extends Event {
    nativeEvent: NativeEvent;
    currentTarget: CurrentTarget & EventTarget;
    target: Target;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
}

interface UIEvent<
    Target extends Element = Element, 
    Event = NativeEvent
> extends KiwuiEvent<Target, Event> {
    detail: number;
    view: Window;
}

export interface ClipboardEvent<Target extends Element> extends KiwuiEvent<Target, NativeClipboardEvent> {
    clipboardData: DataTransfer;
}

export interface CompositionEvent<T extends Element> extends KiwuiEvent<T, NativeCompositionEvent> {
    data: string;
}

export interface DragEvent<Target extends Element> extends MouseEvent<Target, NativeDragEvent> {
    dataTransfer: DataTransfer;
}

export interface FocusEvent<Target extends Element, RelatedTarget = Element> extends KiwuiEvent<Target, NativeFocusEvent> {
    relatedTarget: (EventTarget & RelatedTarget) | null;
    target: EventTarget & Target;
}

export interface FormEvent<Target extends Element> extends KiwuiEvent<Target> { }

export interface KeyboardEvent<Target extends Element> extends UIEvent<Target, NativeKeyboardEvent> {
    altKey: boolean;
    ctrlKey: boolean;
    code: string;
    getModifierState(key: ModifierKey): boolean;
    key: string;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
}

export interface MouseEvent<
    Target extends Element = Element, 
    Event = NativeMouseEvent
> extends UIEvent<Target, Event> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    getModifierState(key: ModifierKey): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget | null;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}

export interface TouchEvent<T extends Element> extends UIEvent<T, NativeTouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    getModifierState(key: ModifierKey): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}

export interface PointerEvent<T extends Element> extends MouseEvent<T, NativePointerEvent> {
    pointerId: number;
    pressure: number;
    tangentialPressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
    width: number;
    height: number;
    pointerType: 'mouse' | 'pen' | 'touch';
    isPrimary: boolean;
}

export interface WheelEvent<T extends Element> extends MouseEvent<T, NativeWheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}

export interface AnimationEvent<T extends Element> extends KiwuiEvent<T, NativeAnimationEvent> {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
}

export interface TransitionEvent<T extends Element> extends KiwuiEvent<T, NativeTransitionEvent> {
    elapsedTime: number;
    propertyName: string;
    pseudoElement: string;
}

// Element specifics

export interface ChangeEvent<Target extends Element> extends KiwuiEvent<Target> {
    target: EventTarget & Target;
}

//
// Native Events
// ======================================================================

type NativeEvent = Event;
type NativeClipboardEvent = ClipboardEvent<Element>;
type NativeCompositionEvent = CompositionEvent<Element>;
type NativeDragEvent = DragEvent<Element>;
type NativeFocusEvent = FocusEvent<Element>;
type NativeKeyboardEvent = KeyboardEvent<Element>;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent<Element>;
type NativePointerEvent = PointerEvent<Element>;
type NativeWheelEvent = WheelEvent<Element>;
type NativeAnimationEvent = AnimationEvent<Element>;
type NativeTransitionEvent = TransitionEvent<Element>;

//
// Event types
// ======================================================================

/**
 * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier).
 * For a list of valid (case-sensitive) arguments to this method.
*/
type ModifierKey = 
    | "Alt" 
    | "AltGraph" 
    | "CapsLock" 
    | "Control" 
    | "Fn" 
    | "FnLock" 
    | "Hyper" 
    | "Meta" 
    | "NumLock" 
    | "ScrollLock" 
    | "Shift" 
    | "Super" 
    | "Symbol" 
    | "SymbolLock";