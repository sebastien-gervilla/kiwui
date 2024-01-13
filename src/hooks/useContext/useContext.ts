import { Dispatcher } from "../../classes";
import { Context } from "../../types";

const useContext = <T>(context: Context<T>) => {
    return Dispatcher.current.useContext(context);
}

export default useContext;