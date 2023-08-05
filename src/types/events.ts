export interface SageEvents<Target extends HTMLElement> {
    // MouseEvents
    onAuxClick?: MouseEventHandler<Target> | undefined;
    onAuxClickCapture?: MouseEventHandler<Target> | undefined;
    onClick?: MouseEventHandler<Target> | undefined;
    onClickCapture?: MouseEventHandler<Target> | undefined;
    onContextMenu?: MouseEventHandler<Target> | undefined;
    onContextMenuCapture?: MouseEventHandler<Target> | undefined;
    onDoubleClick?: MouseEventHandler<Target> | undefined;
    onDoubleClickCapture?: MouseEventHandler<Target> | undefined;
    onMouseDown?: MouseEventHandler<Target> | undefined;
    onMouseDownCapture?: MouseEventHandler<Target> | undefined;
    onMouseEnter?: MouseEventHandler<Target> | undefined;
    onMouseLeave?: MouseEventHandler<Target> | undefined;
    onMouseMove?: MouseEventHandler<Target> | undefined;
    onMouseMoveCapture?: MouseEventHandler<Target> | undefined;
    onMouseOut?: MouseEventHandler<Target> | undefined;
    onMouseOutCapture?: MouseEventHandler<Target> | undefined;
    onMouseOver?: MouseEventHandler<Target> | undefined;
    onMouseOverCapture?: MouseEventHandler<Target> | undefined;
    onMouseUp?: MouseEventHandler<Target> | undefined;
    onMouseUpCapture?: MouseEventHandler<Target> | undefined;

    // Drag events
    onDrag?: DragEventHandler<Target> | undefined;
    onDragCapture?: DragEventHandler<Target> | undefined;
    onDragEnd?: DragEventHandler<Target> | undefined;
    onDragEndCapture?: DragEventHandler<Target> | undefined;
    onDragEnter?: DragEventHandler<Target> | undefined;
    onDragEnterCapture?: DragEventHandler<Target> | undefined;
    onDragExit?: DragEventHandler<Target> | undefined;
    onDragExitCapture?: DragEventHandler<Target> | undefined;
    onDragLeave?: DragEventHandler<Target> | undefined;
    onDragLeaveCapture?: DragEventHandler<Target> | undefined;
    onDragOver?: DragEventHandler<Target> | undefined;
    onDragOverCapture?: DragEventHandler<Target> | undefined;
    onDragStart?: DragEventHandler<Target> | undefined;
    onDragStartCapture?: DragEventHandler<Target> | undefined;
    onDrop?: DragEventHandler<Target> | undefined;
    onDropCapture?: DragEventHandler<Target> | undefined;

    // Form Events
    onChange?: FormEventHandler<Target> | undefined;
    onChangeCapture?: FormEventHandler<Target> | undefined;
    onBeforeInput?: FormEventHandler<Target> | undefined;
    onBeforeInputCapture?: FormEventHandler<Target> | undefined;
    onInput?: FormEventHandler<Target> | undefined;
    onInputCapture?: FormEventHandler<Target> | undefined;
    onReset?: FormEventHandler<Target> | undefined;
    onResetCapture?: FormEventHandler<Target> | undefined;
    onSubmit?: FormEventHandler<Target> | undefined;
    onSubmitCapture?: FormEventHandler<Target> | undefined;
    onInvalid?: FormEventHandler<Target> | undefined;
    onInvalidCapture?: FormEventHandler<Target> | undefined;

    // Selection Events
    onSelect?: ReactEventHandler<Target> | undefined;
    onSelectCapture?: ReactEventHandler<Target> | undefined;

    // Keyboard Events
    onKeyDown?: KeyboardEventHandler<Target> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<Target> | undefined;
    onKeyUp?: KeyboardEventHandler<Target> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<Target> | undefined;

    // Clipboard Events
    onCopy?: ClipboardEventHandler<Target> | undefined;
    onCopyCapture?: ClipboardEventHandler<Target> | undefined;
    onCut?: ClipboardEventHandler<Target> | undefined;
    onCutCapture?: ClipboardEventHandler<Target> | undefined;
    onPaste?: ClipboardEventHandler<Target> | undefined;
    onPasteCapture?: ClipboardEventHandler<Target> | undefined;

    // Focus Events
    onFocus?: FocusEventHandler<Target> | undefined;
    onFocusCapture?: FocusEventHandler<Target> | undefined;
    onBlur?: FocusEventHandler<Target> | undefined;
    onBlurCapture?: FocusEventHandler<Target> | undefined;
}

//
// Event Handlers
// ======================================================================

type EventHandler<Event extends SageEvent<Element>> = (event: Event) => void

// TODO: Some events must be handled by Sage itself
type ReactEventHandler<Target extends Element> = EventHandler<SageEvent<Target>>;

type MouseEventHandler<Target extends Element> = EventHandler<MouseEvent<Target>>;
type DragEventHandler<Target extends Element> = EventHandler<DragEvent<Target>>;
type FormEventHandler<Target extends Element> = EventHandler<FormEvent<Target>>;
type KeyboardEventHandler<Target extends Element> = EventHandler<FormEvent<Target>>;
type ClipboardEventHandler<Target extends Element> = EventHandler<ClipboardEvent<Target>>;
type FocusEventHandler<Target extends Element> = EventHandler<FocusEvent<Target>>;

// Element specifics
export type ChangeEventHandler<Target extends Element> = EventHandler<ChangeEvent<Target>>;

//
// Events
// ======================================================================

// TODO: "Event" is for the "nativeEvent", which should be added when processing events in Sage
// TODO: "target" should extend EventTarget by default, which is a pain to dev really
interface SageEvent<
    CurrentTarget extends Element,
    NativeEvent = any,
    Target = any
> {
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
> extends SageEvent<Target, Event> {
    detail: number;
    view: Window;
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

export interface DragEvent<Target extends Element> extends MouseEvent<Target, NativeDragEvent> {
    dataTransfer: DataTransfer;
}

export interface FormEvent<Target extends Element> extends SageEvent<Target> { }

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

export interface ClipboardEvent<Target extends Element> extends SageEvent<Target, NativeClipboardEvent> {
    clipboardData: DataTransfer;
}

export interface FocusEvent<Target extends Element, RelatedTarget = Element> extends SageEvent<Target, NativeFocusEvent> {
    relatedTarget: (EventTarget & RelatedTarget) | null;
    target: EventTarget & Target;
}

// Element specifics

export interface ChangeEvent<Target extends Element> extends SageEvent<Target> {
    target: EventTarget & Target;
}

//
// Native Events
// ======================================================================

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent<Element>;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent<Element>;
type NativeFocusEvent = FocusEvent<Element>;
type NativeKeyboardEvent = KeyboardEvent<Element>;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type NativeEvent = Event;

//
// Global
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