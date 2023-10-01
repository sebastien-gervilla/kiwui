import { ExoticComponent, KiwuiNode } from "../../types";

const Fragment: ExoticComponent<{ children: KiwuiNode }> = ({ children }) => children
Fragment.exoticTag = 'Fragment';

export { Fragment };