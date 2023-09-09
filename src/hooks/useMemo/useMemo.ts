import { Dispatcher } from "../../classes";
import { Dependencies } from "../../types";

const useMemo = <T>(getter: () => T, dependencies?: Dependencies) => {
    return Dispatcher.current.useMemo(getter, dependencies);
}

export default useMemo;