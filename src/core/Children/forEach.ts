import { KiwuiNode } from "../../types";
import { Children } from './index';

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each leaf child.
 */
export const forEachChildren = (
    children: KiwuiNode,
    forEachFunc: (child: KiwuiNode, index: number) => void,
    forEachContext: any,
): void => {
    Children.map(
        children,
        // $FlowFixMe[missing-this-annot]
        function () {
            forEachFunc.apply(this, arguments);
            // Don't return anything.
            return undefined;
        },
        forEachContext,
    );
}