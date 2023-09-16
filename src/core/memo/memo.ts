import { FunctionComponent, MemoComponent } from "../../types";

export const memo = <Props extends {}>(
    Component: FunctionComponent<Props>, 
    shouldUpdate?: MemoComponent<Props>['shouldUpdate']
): MemoComponent<Props> => {
    const MemoizedComponent = Component as MemoComponent<Props>;
    MemoizedComponent.exoticTag = 'Memo';
    MemoizedComponent.shouldUpdate = shouldUpdate;
    return MemoizedComponent;
}