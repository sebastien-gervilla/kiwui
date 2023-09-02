// Global
export type Hooks = {
    useState<T>(initialState: (() => T) | T): [T, Setter<StateGetter<T>>]
    useEffect(effect: Effect, dependencies?: Dependencies): void
}

// States
export type Setter<Getter> = (newState: Getter) => void;
export type StateGetter<T> = ((currentState: T) => T) | T;

// Effects
export type Effect = () => Cleanup | void;
export type Cleanup = () => void;
export type Dependencies = ReadonlyArray<unknown>;