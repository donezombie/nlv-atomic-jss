import { get } from 'lodash';
import { StyleSheet, css, StyleDeclaration } from 'aphrodite';
import { Style, Colors, BreakPoints } from './types';

let styles: StyleDeclaration<unknown> | any = {};

export interface AtomicStyles {}

interface Options {
  styles?: StyleDeclaration<AtomicStyles>;
  colors?: Colors;
  breakpoints?: BreakPoints;
}

class AtomicStyled {
  setupStyles(options?: Options) {
    const {
      colors: colorsArg,
      breakpoints: breakpointsArg,
      styles: stylesArg,
    } = options || {};
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
        ] = {
          color: value,
        };
        nextObj[
          `borderColor${key.charAt(0).toUpperCase() + key.slice(1, key.length)}`
        ] = {
          borderColor: value,
        };
        nextObj[
          `backgroundColor${
            key.charAt(0).toUpperCase() + key.slice(1, key.length)
          }`
        ] = {
          backgroundColor: value,
        };

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

      ultilize[`px${i}px`] = { paddingLeft: `${i}px`, paddingRight: `${i}px` };
      ultilize[`px${i}`] = { paddingLeft: `${i}%`, paddingRight: `${i}%` };

      ultilize[`py${i}px`] = { paddingTop: `${i}px`, paddingBottom: `${i}px` };
      ultilize[`py${i}`] = { paddingTop: `${i}%`, paddingBottom: `${i}%` };

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

      ultilize[`mx${i}px`] = { marginLeft: `${i}px`, marginRight: `${i}px` };
      ultilize[`mx${i}`] = { marginLeft: `${i}%`, marginRight: `${i}%` };

      ultilize[`my${i}px`] = { marginTop: `${i}px`, marginBottom: `${i}px` };
      ultilize[`my${i}`] = { marginTop: `${i}%`, marginBottom: `${i}%` };

      //* Gap
      ultilize[`gap${i}px`] = { gap: `${i}px` };

      //* Row gap
      ultilize[`rowGap${i}px`] = { rowGap: `${i}px` };

      //* Column gap
      ultilize[`columnGap${i}px`] = { columnGap: `${i}px` };

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
      ultilize[`borderX${i}px`] = {
        borderLeft: `${i}px solid`,
        borderRight: `${i}px solid`,
      };
      ultilize[`borderY${i}px`] = {
        borderTop: `${i}px solid`,
        borderBottom: `${i}px solid`,
      };

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

      //* Border collapse
      ultilize[`borderCollapse`] = { borderCollapse: 'collapse' };

      //* Max height percent
      ultilize[`maxH${i}`] = { maxHeight: `${i}%` };

      //* Max height vh
      ultilize[`maxH${i}vh`] = { maxHeight: `${i}vh` };

      //* Max width percent
      ultilize[`maxW${i}`] = { maxWidth: `${i}%` };

      //* Max width vw
      ultilize[`maxW${i}vw`] = { maxWidth: `${i}vw` };

      //* opacity
      ultilize[`opacity${i}`] = { opacity: `${i / 100}` };
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

      //* Text
      { name: 'textLeft', value: 'left', property: 'textAlign' },
      { name: 'textRight', value: 'right', property: 'textAlign' },
      { name: 'textCenter', value: 'center', property: 'textAlign' },
      { name: 'textJustify', value: 'justify', property: 'textAlign' },
      { name: 'textUnset', value: 'unset', property: 'textAlign' },
      { name: 'textNowrap', value: 'nowrap', property: 'whiteSpace' },
      { name: 'textPre', value: 'pre', property: 'whiteSpace' },
      { name: 'textPreLine', value: 'pre-line', property: 'whiteSpace' },
      { name: 'textPreWrap', value: 'pre-wrap', property: 'whiteSpace' },
      { name: 'textBreakAll', value: 'break-all', property: 'wordBreak' },
      { name: 'textBreakWord', value: 'break-word', property: 'wordBreak' },
      { name: 'textUppercase', value: 'uppercase', property: 'textTransform' },
      { name: 'textLowercase', value: 'lowercase', property: 'textTransform' },
      {
        name: 'textCapitalize',
        value: 'capitalize',
        property: 'textTransform',
      },
      { name: 'textNormal', value: 'normal', property: 'textTransform' },
      { name: 'textItalic', value: 'italic', property: 'fontStyle' },
      { name: 'textBold', value: 'bold', property: 'fontWeight' },
      { name: 'textUnderline', value: 'underline', property: 'textDecoration' },
      {
        name: 'textLineThrough',
        value: 'line-through',
        property: 'textDecoration',
      },
      { name: 'textNoDecoration', value: 'none', property: 'textDecoration' },
      { name: 'textTruncate', value: 'ellipsis', property: 'textOverflow' },

      //* Overflow
      { name: 'overflowHidden', value: 'hidden', property: 'overflow' },
      { name: 'overflowVisible', value: 'visible', property: 'overflow' },
      { name: 'overflowScroll', value: 'scroll', property: 'overflow' },
      { name: 'overflowAuto', value: 'auto', property: 'overflow' },
      { name: 'overflowXHidden', value: 'hidden', property: 'overflowX' },
      { name: 'overflowXVisible', value: 'visible', property: 'overflowX' },
      { name: 'overflowXScroll', value: 'scroll', property: 'overflowX' },
      { name: 'overflowXAuto', value: 'auto', property: 'overflowX' },
      { name: 'overflowYHidden', value: 'hidden', property: 'overflowY' },
      { name: 'overflowYVisible', value: 'visible', property: 'overflowY' },
      { name: 'overflowYScroll', value: 'scroll', property: 'overflowY' },
      { name: 'overflowYAuto', value: 'auto', property: 'overflowY' },
    ];

    arr.forEach((el) => {
      properties[el.name] = { [el.property]: el.value };
      properties[`h-${el.name}`] = {
        ':hover': {
          [el.property]: el.value,
        },
      };

      Object.entries(breakPoints).forEach(([key, value]) => {
        properties[`${key}-${el.name}`] = {
          [`@media (max-width: ${value}px)`]: {
            [el.property]: el.value,
          },
        };
      });
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

      'elevation-1': {
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
      },
      'elevation-2': {
        boxShadow:
          '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
      },
      'elevation-3': {
        boxShadow:
          '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
      },
      'elevation-4': {
        boxShadow:
          '0px 15px 25px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.22)',
      },
      'elevation-5': {
        boxShadow:
          '0px 20px 40px rgba(0, 0, 0, 0.22), 0px 15px 12px rgba(0, 0, 0, 0.25)',
      },
      'elevation-6': {
        boxShadow:
          '0px 25px 55px rgba(0, 0, 0, 0.25), 0px 20px 20px rgba(0, 0, 0, 0.22)',
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

  classes(
    arrStyles: (Style | keyof StyleDeclaration<AtomicStyles>)[],
    externalClass?: string,
  ) {
    if (externalClass) {
      return (
        externalClass +
        ' ' +
        css(
          arrStyles.map((style) => {
            return get(styles, `${style}`);
          }),
        )
      );
    }

    return css(
      arrStyles.map((style) => {
        return get(styles, `${style}`);
      }),
    );
  }
}

const atomicStyled = new AtomicStyled();

export const classes = atomicStyled.classes;
export const setupStyles = atomicStyled.setupStyles;
