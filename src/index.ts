import { StyleSheet, css, StyleDeclaration } from 'aphrodite';
import { Style, Colors, BreakPoints } from './types';

let styles: StyleDeclaration<unknown> | any = {};

class AtomicStyled {
  setupStyles(
    stylesArg?: StyleDeclaration<unknown>,
    colorsArg?: Colors,
    breakpointsArg?: BreakPoints,
  ) {
    const ultilize: any = {};

    const colors: Colors = {
      primary: '#167ffb',
      secondary: '#6b757d',
      success: '#169588',
      info: '#9577ca',
      warning: '#f37b22',
      danger: '#d23235',
      light: '#d0d8dc',
      dark: '#343a3f',
      ...colorsArg,
    };

    const breakPoints: BreakPoints = {
      mobile: 496,
      tablet: 768,
      desktop: 1024,
      ...breakpointsArg,
    };

    const genColor = () => {
      return Object.entries(colors).reduce((nextObj: any, el) => {
        const [key, value] = el;
        //key == color + key => capitalize
        nextObj[
          `color${key.charAt(0).toUpperCase() + key.slice(1, key.length)}`
        ] = { color: value };
        nextObj[
          `borderColor${key.charAt(0).toUpperCase() + key.slice(1, key.length)}`
        ] = { borderColor: value };
        return nextObj;
      }, {});
    };

    for (let i = 1; i <= 100; i++) {
      //* Width
      ultilize[`w${i}vw`] = { width: `${i}vw` };
      ultilize[`w${i}px`] = { width: `${i}px` };
      ultilize[`w${i}`] = { width: `${i}%` };

      //* Height
      ultilize[`h${i}vh`] = { height: `${i}vh` };
      ultilize[`h${i}px`] = { height: `${i}px` };
      ultilize[`h${i}`] = { height: `${i}%` };

      //* Padding
      ultilize[`p${i}px`] = { padding: `${i}px` };
      ultilize[`p${i}`] = { padding: `${i}%` };

      ultilize[`pt${i}px`] = { paddingTop: `${i}px` };
      ultilize[`pt${i}`] = { paddingTop: `${i}%` };

      ultilize[`pl${i}px`] = { paddingLeft: `${i}px` };
      ultilize[`pl${i}`] = { paddingLeft: `${i}%` };

      ultilize[`pr${i}px`] = { paddingRight: `${i}px` };
      ultilize[`pr${i}`] = { paddingRight: `${i}%` };

      ultilize[`pb${i}px`] = { paddingBottom: `${i}px` };
      ultilize[`pb${i}`] = { paddingBottom: `${i}%` };

      //* Margin
      ultilize[`m${i}px`] = { margin: `${i}px` };
      ultilize[`m${i}`] = { margin: `${i}%` };

      ultilize[`mt${i}px`] = { marginTop: `${i}px` };
      ultilize[`mt${i}`] = { marginTop: `${i}%` };

      ultilize[`ml${i}px`] = { marginTop: `${i}px` };
      ultilize[`ml${i}`] = { marginTop: `${i}%` };

      ultilize[`mr${i}px`] = { marginRight: `${i}px` };
      ultilize[`mr${i}`] = { marginRight: `${i}%` };

      ultilize[`mb${i}px`] = { marginBottom: `${i}px` };
      ultilize[`mb${i}`] = { marginBottom: `${i}%` };

      //* Gap
      ultilize[`gap${i}px`] = { gap: `${i}px` };

      //* Position
      ultilize[`top${i}px`] = { top: `${i}px` };
      ultilize[`left${i}px`] = { left: `${i}px` };
      ultilize[`right${i}px`] = { right: `${i}px` };
      ultilize[`bottom${i}px`] = { bottom: `${i}px` };

      ultilize[`top${i}`] = { top: `${i}%` };
      ultilize[`left${i}`] = { left: `${i}%` };
      ultilize[`right${i}`] = { right: `${i}%` };
      ultilize[`bottom${i}`] = { bottom: `${i}%` };

      //* Border
      ultilize[`border${i}px`] = { border: `${i}px solid` };
      ultilize[`borderTop${i}px`] = { borderTop: `${i}px solid` };
      ultilize[`borderLeft${i}px`] = { borderLeft: `${i}px solid` };
      ultilize[`borderRight${i}px`] = { borderRight: `${i}px solid` };
      ultilize[`borderBottom${i}px`] = { borderBottom: `${i}px solid` };

      //* Border radius
      ultilize[`borderRadius${i}px`] = { borderRadius: `${i}px` };
      ultilize[`borderTopLeftRadius${i}px`] = { borderTopLeftRadius: `${i}px` };
      ultilize[`borderTopRightRadius${i}px`] = {
        borderTopRightRadius: `${i}px`,
      };
      ultilize[`borderBottomLeftRadius${i}px`] = {
        borderBottomLeftRadius: `${i}px`,
      };
      ultilize[`borderBottomRightRadius${i}px`] = {
        borderBottomRightRadius: `${i}px`,
      };

      //* Max height percent
      ultilize[`maxH${i}`] = { maxHeight: `${i}%` };

      //* Max height vh
      ultilize[`maxH${i}vh`] = { maxHeight: `${i}vh` };

      //* Max width percent
      ultilize[`maxW${i}`] = { maxWidth: `${i}%` };

      //* Max width vw
      ultilize[`maxW${i}vw`] = { maxWidth: `${i}vw` };
    }

    const properties: any = {};
    const arr = [
      { name: 'posAbsolute', value: 'absolute', property: 'position' },
      { name: 'posRelative', value: 'relative', property: 'position' },
      { name: 'posFixed', value: 'fixed', property: 'position' },
      { name: 'posStatic', value: 'static', property: 'position' },
      { name: 'posUnset', value: 'unset', property: 'position' },
      { name: 'posSticky', value: 'sticky', property: 'position' },
      { name: 'dFlex', value: 'flex', property: 'display' },
      { name: 'dBlock', value: 'block', property: 'display' },
      { name: 'dInline', value: 'inline', property: 'display' },
      { name: 'dInlineBlock', value: 'inline-block', property: 'display' },
      { name: 'dNone', value: 'none', property: 'display' },
      { name: 'dUnset', value: 'unset', property: 'display' },
      { name: 'dGrid', value: 'grid', property: 'display' },
      {
        name: 'justifyContentStart',
        value: 'flex-start',
        property: 'justifyContent',
      },
      {
        name: 'justifyContentEnd',
        value: 'flex-end',
        property: 'justifyContent',
      },
      {
        name: 'justifyContentCenter',
        value: 'center',
        property: 'justifyContent',
      },
      {
        name: 'justifyContentBetween',
        value: 'space-between',
        property: 'justifyContent',
      },
      {
        name: 'justifyContentAround',
        value: 'space-around',
        property: 'justifyContent',
      },
      {
        name: 'justifyContentEvenly',
        value: 'space-evenly',
        property: 'justifyContent',
      },
      { name: 'alignItemsStart', value: 'flex-start', property: 'alignItems' },
      { name: 'alignItemsEnd', value: 'flex-end', property: 'alignItems' },
      { name: 'alignItemsCenter', value: 'center', property: 'alignItems' },
      { name: 'alignItemsBaseline', value: 'baseline', property: 'alignItems' },
      { name: 'alignItemsStretch', value: 'stretch', property: 'alignItems' },
      {
        name: 'alignContentStart',
        value: 'flex-start',
        property: 'alignContent',
      },
      { name: 'alignContentEnd', value: 'flex-end', property: 'alignContent' },
      { name: 'alignContentCenter', value: 'center', property: 'alignContent' },
      {
        name: 'alignContentBetween',
        value: 'space-between',
        property: 'alignContent',
      },
      {
        name: 'alignContentAround',
        value: 'space-around',
        property: 'alignContent',
      },
      {
        name: 'alignContentStretch',
        value: 'stretch',
        property: 'alignContent',
      },
      { name: 'borderNone', value: 'none', property: 'border' },
      { name: 'borderRound', value: '50%', property: 'borderRadius' },
      { name: 'flexWrap', value: 'wrap', property: 'flexWrap' },
      { name: 'flexWrapReverse', value: 'wrap-reverse', property: 'flexWrap' },
      { name: 'flexWrapNoWrap', value: 'nowrap', property: 'flexWrap' },
      { name: 'flexDirectionRow', value: 'row', property: 'flexDirection' },
      {
        name: 'flexDirectionRowReverse',
        value: 'row-reverse',
        property: 'flexDirection',
      },
      {
        name: 'flexDirectionColumn',
        value: 'column',
        property: 'flexDirection',
      },
      {
        name: 'flexDirectionColumnReverse',
        value: 'column-reverse',
        property: 'flexDirection',
      },
      { name: 'flexGrow', value: '1', property: 'flexGrow' },
      { name: 'flexShrink', value: '1', property: 'flexShrink' },
    ];

    arr.forEach((el) => {
      properties[el.name] = { [el.property]: el.value };
      properties[`h-${el.name}`] = {
        ':hover': {
          [el.property]: el.value,
        },
      };
      properties[`mobile-${el.name}`] = {
        [`@media (max-width: ${breakPoints.mobile}px)`]: {
          [el.property]: el.value,
        },
      };

      properties[`tablet-${el.name}`] = {
        [`@media (max-width: ${breakPoints.tablet}px)`]: {
          [el.property]: el.value,
        },
      };
    });

    styles = StyleSheet.create({
      //* Position
      ...properties,

      //* Font
      fontSmall: {
        fontSize: '12px',
      },
      fontMedium: {
        fontSize: '16px',
      },
      fontLarge: {
        fontSize: '24px',
      },
      'h-fontSmall': {
        ':hover': {
          fontSize: '12px',
        },
      },
      'h-fontMedium': {
        ':hover': {
          fontSize: '16px',
        },
      },
      'h-fontLarge': {
        ':hover': {
          fontSize: '24px',
        },
      },

      ...ultilize,
      ...genColor(),
      ...stylesArg,
    });

    //! Generate recommend code
    // console.log(
    //   Object.keys(styles).reduce((acc, cur, index) => {
    //     if (index === Object.keys(styles).length - 1) {
    //       return (acc += '"' + cur + '"');
    //     } else {
    //       return (acc += '"' + cur + '"' + '|');
    //     }
    //   }, ''),
    // );
  }

  classes(arrStyles: Style[]) {
    return css(arrStyles.map((style) => styles[style]));
  }
}

const atomicStyled = new AtomicStyled();

export const classes = atomicStyled.classes;
export const setupStyles = atomicStyled.setupStyles;
