import { Context } from "../../types"

export const createContext = <T>(initialValue: T): Context<T> => {
    const Provider: Context<T>['Provider'] = ({ children }) => 
        Array.isArray(children) ? children[0] : children; // TODO: Handle fragments

    Provider.exoticTag = 'Context';

    return {
        initialValue,
        Provider
    }
}