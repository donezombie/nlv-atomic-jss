import { StyleDeclaration } from 'aphrodite';
import { Style, Colors, BreakPoints } from './types';
export declare const classes: (arrStyles: Style[]) => string;
export declare const setupStyles: (stylesArg?: StyleDeclaration<unknown>, colorsArg?: Colors, breakpointsArg?: BreakPoints) => void;
