// Global
export type Hooks = {
    useState<T>(initialState: (() => T) | T): [T, Setter<StateGetter<T>>],
}

// States
export type Setter<Getter> = (newState: Getter) => void;
export type StateGetter<T> = ((currentState: T) => T) | T;