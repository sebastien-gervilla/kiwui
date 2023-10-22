import { Dispatcher } from "../../classes";

const useRef = <T>(initialValue: T) => {
    return Dispatcher.current.useRef(initialValue);
}

export default useRef;