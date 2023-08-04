import { HTMLElement } from "./SageElement";

export interface SageEvents<T extends HTMLElement> {
    // Form Events
    onChange?: FormEventHandler<T> | undefined;
    onChangeCapture?: FormEventHandler<T> | undefined;
    onBeforeInput?: FormEventHandler<T> | undefined;
    onBeforeInputCapture?: FormEventHandler<T> | undefined;
    onInput?: FormEventHandler<T> | undefined;
    onInputCapture?: FormEventHandler<T> | undefined;
    onReset?: FormEventHandler<T> | undefined;
    onResetCapture?: FormEventHandler<T> | undefined;
    onSubmit?: FormEventHandler<T> | undefined;
    onSubmitCapture?: FormEventHandler<T> | undefined;
    onInvalid?: FormEventHandler<T> | undefined;
    onInvalidCapture?: FormEventHandler<T> | undefined;
}

//
// Event Handlers
// ======================================================================

type EventHandler<Event extends SageEvent<HTMLElement>> = (event: Event) => void

type FormEventHandler<T extends HTMLElement> = EventHandler<FormEvent<T>>;

//
// From Events
// ======================================================================

interface SageEvent<
    Target extends HTMLElement
> {
    nativeEvent: Event;
    currentTarget: Target;
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

export interface FormEvent<T extends HTMLElement> extends SageEvent<T> { }