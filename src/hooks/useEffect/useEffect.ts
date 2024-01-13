import { Dispatcher } from "../../classes";
import { Dependencies, Effect } from "../../types";

const useEffect = (effect: Effect, dependencies?: Dependencies) => {
    return Dispatcher.current.useEffect(effect, dependencies);
}

export default useEffect;