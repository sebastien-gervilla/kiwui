export default class Dispatcher {
    static _current: Hook;

    static get current() {
        const current = Dispatcher._current;
        if (!current) throw new Error(
            "Invalid hook call.\n" +
            "Hooks can only be called in the body of function Components."
        );

        return Dispatcher._current
    }

    static set current(hook: Hook) { Dispatcher._current = hook }
}

// Relocate ?
type Hook = {
    useState<T>(initialState: (() => T) | T): [T, Setter<StateGetter<T>>],
}

type Setter<Getter> = (newState: Getter) => void;
type StateGetter<T> = ((currentState: T) => T) | T;