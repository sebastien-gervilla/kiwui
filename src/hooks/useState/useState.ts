import { Dispatcher } from "../../classes";

const useState = <T>(initialValue: (() => T) | T) => {
    return Dispatcher.current.useState(initialValue);
}

export default useState;