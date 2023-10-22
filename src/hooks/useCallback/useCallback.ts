import { Dispatcher } from "../../classes";
import { Dependencies } from "../../types";

const useCallback = <T extends Function>(getter: T, dependencies: Dependencies) => {
    return Dispatcher.current.useCallback(getter, dependencies);
}

export default useCallback;