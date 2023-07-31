export default class Dispatcher {
    static _current: Hook;

    static get current() { return Dispatcher._current }
    static set current(hook: Hook) { Dispatcher._current = hook }
}

// Relocate ?
type Hook = {
    useState<T>(initialState: (() => T) | T): [T, Setter<StateGetter<T>>],
}

type Setter<Getter> = (getter: Getter) => void;
type StateGetter<T> = ((previousValue: T) => T) | T;

// export default class Dispatcher {

//     private static _instance: Dispatcher;

//     private _current!: Hook;

//     private constructor() {
//         if (!Dispatcher._instance)
//             Dispatcher._instance = new Dispatcher();

//         return Dispatcher._instance;
//     }

//     static get instance() { return Dispatcher._instance }

//     get current() { return Dispatcher.instance._current }
//     set current(hook: Hook) { Dispatcher.instance._current = hook }
// }