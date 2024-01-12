import { KiwuiElement, KiwuiNode, ExoticComponent } from "../../types";

export const mapIntoArray = (
    children: KiwuiNode,
    array: Array<KiwuiNode>,
    escapedPrefix: string,
    nameSoFar: string,
    callback: (KiwuiNode: KiwuiNode) => KiwuiNode,
): number => {
    const type = typeof children;

    // These are perceived as null.
    if (type === 'undefined' || type === 'boolean') 
        children = null;

    let invokeCallback = false;

    if (children === null)
        invokeCallback = true;
    else {
        if (type === 'number' || type === 'string')
            invokeCallback = true;
        else if (type === 'object')
            // TODO: watch for exact types
            if (!Array.isArray(children))
                invokeCallback = true;
    }

    if (shouldInvokeCallback(children)) {
        const child = children;
        let mappedChild = callback(child);

        // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:
        const childKey = nameSoFar === '' 
            ? SEPARATOR + getElementKey(child, 0) 
            : nameSoFar;

        if (Array.isArray(mappedChild)) {
            let escapedChildKey = '';
            if (childKey != null)
                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
            mapIntoArray(mappedChild, array, escapedChildKey, '', c => c);
        } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix +
                    // $FlowFixMe[incompatible-type] Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!child || child.key !== mappedChild.key)
                        ? escapeUserProvidedKey(`${mappedChild.key}`) + '/'
                        : '') +
                    childKey,
                );
            }

            array.push(mappedChild);
        }
        return 1;
    }

    let child;
    let nextName;
    let subtreeCount = 0; // Count of children found in the current subtree.
    const nextNamePrefix = nameSoFar === '' 
        ? SEPARATOR 
        : nameSoFar + SUBSEPARATOR;

    if (isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(
                child,
                array,
                escapedPrefix,
                nextName,
                callback,
            );
        }
    } else {
        const iteratorFn = getIteratorFn(children);
        if (typeof iteratorFn === 'function') {
            const iterableChildren: Iterable<KiwuiNode> & {
                entries: any,
            } = children;

            if (__DEV__) {
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                        console.warn(
                            'Using Maps as children is not supported. ' +
                            'Use an array of keyed ReactElements instead.',
                        );
                    }
                    didWarnAboutMaps = true;
                }
            }

            const iterator = iteratorFn.call(iterableChildren);
            let step;
            let ii = 0;
            // $FlowFixMe[incompatible-use] `iteratorFn` might return null according to typing.
            while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(
                    child,
                    array,
                    escapedPrefix,
                    nextName,
                    callback,
                );
            }
        } else if (type === 'object') {
            // eslint-disable-next-line react-internal/safe-string-coercion
            const childrenString = String(children);

            throw new Error(
                `Objects are not valid as a React child (found: ${childrenString === '[object Object]'
                    ? 'object with keys {' +
                    Object.keys(children).join(', ') +
                    '}'
                    : childrenString
                }). ` +
                'If you meant to render a collection of children, use an array ' +
                'instead.',
            );
        }
    }

    return subtreeCount;
}

const __DEV__ = false;
const SEPARATOR = '.';
const SUBSEPARATOR = ':';

const isValidElement = (element: any): element is KiwuiElement => element && typeof element === 'object';

const userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text: string): string {
    return text.replace(userProvidedKeyEscapeRegex, '$&/');
}

// Invoke callback if children is :
// undefined, null, boolean, string, number, Element or Portal
const shouldInvokeCallback = (children: KiwuiNode) => {
    const type = typeof children;

    if (children == null)
        return true;
    
    if (type === 'number' || type === 'string')
        return true;

    if (type === 'object')
        // TODO: watch for exact types
        if (!Array.isArray(children))
            return true;

    return false;
}