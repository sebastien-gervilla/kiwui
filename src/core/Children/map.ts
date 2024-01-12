import { KiwuiNode } from "../../types";
import { mapIntoArray } from "./toArray";

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each leaf child.
 */
export const mapChildren = (
    children: KiwuiNode,
    func: (child: KiwuiNode, index: number) => KiwuiNode,
    context: any,
): KiwuiNode[] | null | undefined => {
    if (children == null)
        return children;

    const result: KiwuiNode[] = [];
    let count = 0;

    mapIntoArray(children, result, '', '', function (child) {
        return func.call(context, child, count++);
    });

    return result;
}