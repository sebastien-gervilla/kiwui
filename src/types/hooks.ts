import { ExoticComponent, KiwuiElement } from "./kiwui"

// Global
export type Hooks = {
    useState<T>(initialState: (() => T) | T): [T, Setter<StateGetter<T>>]
    useEffect(effect: Effect, dependencies?: Dependencies): void
    useLayoutEffect(effect: Effect, dependencies?: Dependencies): void
    useMemo<T>(getter: () => T, dependencies: Dependencies): T
    useCallback<T extends Function>(callback: T, dependencies: Dependencies): T
    useRef<T>(initialValue: T): ReferenceObject<T>
    useContext<T>(context: Context<T>): T
}

// States
export type Setter<Getter> = (newState: Getter) => void;
export type StateGetter<T> = ((currentState: T) => T) | T;

// Effects
export type Effect = () => Cleanup | void;
export type Cleanup = () => void;
export type Dependencies = ReadonlyArray<unknown>;

// Reference
export type Reference<T> = ReferenceObject<T> | ReferenceCallback<T>

export type ReferenceObject<T> = {
    current: T
}

export type ReferenceCallback<T> = (instance: T | null) => void

// Context
export type Context<T> = {
    initialValue: T
    Provider: ExoticComponent<{
        value: T
        children: KiwuiElement<any>
    }>
}