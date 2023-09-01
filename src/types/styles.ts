import * as CSS from 'csstype';

export interface CSSProperties extends CSS.Properties<string | number> {

}


export type CSSStyleKey = keyof CSSStyleDeclaration;
