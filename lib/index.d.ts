import { StyleDeclaration } from 'aphrodite';
import { Style, Colors, BreakPoints } from './types';
export interface AtomicStyles {
}
interface Options {
    styles?: StyleDeclaration<AtomicStyles>;
    colors?: Colors;
    breakpoints?: BreakPoints;
}
export declare const classes: (arrStyles: (Style | keyof StyleDeclaration<AtomicStyles>)[], externalClass?: string) => string;
export declare const setupStyles: (options?: Options) => void;
export {};
