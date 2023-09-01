import { Hooks } from "../../types";

export default class Dispatcher {
    static _current: Hooks;

    static get current() {
        const current = Dispatcher._current;
        if (!current) throw new Error(
            "Invalid hook call.\n" +
            "Hooks can only be called in the body of function Components."
        );

        return Dispatcher._current
    }

    static set current(hooks: Hooks) { Dispatcher._current = hooks }
}