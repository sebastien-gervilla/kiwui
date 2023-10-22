import { Dispatcher } from "../../classes";
import { Dependencies, Effect } from "../../types";

const useLayoutEffect = (effect: Effect, dependencies?: Dependencies) => {
    return Dispatcher.current.useLayoutEffect(effect, dependencies);
}

export default useLayoutEffect;