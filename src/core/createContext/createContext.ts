import { Context } from "../../types"

export const createContext = <T>(initialValue: T): Context<T> => {
    const Provider: Context<T>['Provider'] = ({ children }) => children;
    Provider.exoticTag = 'Context';

    return {
        initialValue,
        Provider
    }
}