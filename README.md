# ⚛⚛⚛ nlv-atomic-styled ⚛⚛⚛

_**nlv-atomic-styled** The class AtomicStyled is a helper class that generates CSS styles for specific HTML elements based on the atomic design methodology. This methodology involves breaking down UI components into smaller, reusable building blocks called atoms, and then combining them to create more complex molecules, organisms, and templates._

# 👷👷👷 Installation 👷👷👷

**nlv-atomic-styled** is available on [npm/**nlv-atomic-styled**](https://www.npmjs.com/package/nlv-atomic-styled)

```
npm intall --save nlv-atomic-styled
```

# 🚀🚀🚀 Usage 🚀🚀🚀

```jsx
import React from 'react';
import {setupStyles, classes} from './AtomicStyled';


const stylesArg = {
  fontLarge: {
    fontSize: '80px',
  },
}

const colorArg = {
  primary: '#167ffb',
  secondary: '#6b757d',
  success: '#169588',
  info: '#9577ca',
  warning: '#f37b22',
  danger: '#d23235',
  light: '#d0d8dc',
  dark: '#343a3f',
  black: '#000000',
  white: '#ffffff',
}

const breakpoingArg = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1440,
}

setupStyles(stylesArg, colorsArg, breakpointsArg)



const App = () => {
    return(
        <div
            className={classes([
                'dFlex',                                        => display: flex
                'alignItemsCenter',                             => align-items: center
                'justifyContentCenter',                         => justify-content: center
                'gap15px',                                      => gap : 15px
                'fontLarge',                                    => font-size: 80px
                'colorDanger',                                  => color: #d23235
                'border1px',                                    => border: 1px solid
                'borderColorPrimary',                           => border-color: #167ffb
                'borderRound',                                  => border-radius: 50%
            ])}
        >
            This is example of nlv-atomic-styled
        </div
    )
}
```

# 📄📄📄 Default classes 📄📄📄

```
ClassName rules:

    [property][value][unit || ''] ( Camel case 🐪🐪🐪 )

    unit :["px", "vw", "vh"] (Default unit: %)

    Example:
     dFlex = display : flex
     mr **[i]**  = margin-right:  **[i]** %
```

- w **[i]** vw: { width: ' **[i]** vw' },
- w **[i]** px: { width: ' **[i]** px' },
- w **[i]** : { width: ' **[i]** %' },
- h **[i]** vh: { height: ' **[i]** vh' },
- h **[i]** px: { height: ' **[i]** px' },
- h **[i]** : { height: ' **[i]** %' },
- p **[i]** px: { padding: ' **[i]** px' },
- p **[i]** : { padding: ' **[i]** %' },
- pt **[i]** px: { paddingTop: ' **[i]** px' },
- pt **[i]** : { paddingTop: ' **[i]** %' },
- pl **[i]** px: { paddingLeft: ' **[i]** px' },
- pl **[i]** : { paddingLeft: ' **[i]** %' },
- pr **[i]** px: { paddingRight: ' **[i]** px' },
- pr **[i]** : { paddingRight: ' **[i]** %' },
- pb **[i]** px: { paddingBottom: ' **[i]** px' },
- pb **[i]** : { paddingBottom: ' **[i]** %' },
- m **[i]** px: { margin: ' **[i]** px' },
- m **[i]** : { margin: ' **[i]** %' },
- mt **[i]** px: { marginTop: ' **[i]** px' },
- mt **[i]** : { marginTop: ' **[i]** %' },
- ml **[i]** px: { marginTop: ' **[i]** px' },
- ml **[i]** : { marginTop: ' **[i]** %' },
- mr **[i]** px: { marginRight: ' **[i]** px' },
- mr **[i]** : { marginRight: ' **[i]** %' },
- mb **[i]** px: { marginBottom: ' **[i]** px' },
- mb **[i]** : { marginBottom: ' **[i]** %' },
- gap **[i]** px: { gap: ' **[i]** px' },
- top **[i]** px: { top: ' **[i]** px' },
- left **[i]** px: { left: ' **[i]** px' },
- right **[i]** px: { right: ' **[i]** px' },
- bottom **[i]** px: { bottom: ' **[i]** px' },
- top **[i]** : { top: ' **[i]** %' },
- left **[i]** : { left: ' **[i]** %' },
- right **[i]** : { right: ' **[i]** %' },
- bottom **[i]** : { bottom: ' **[i]** %' },
- border **[i]** px: { border: ' **[i]** px solid' },
- borderTop **[i]** px: { borderTop: ' **[i]** px solid' },
- borderLeft **[i]** px: { borderLeft: ' **[i]** px solid' },
- borderRight **[i]** px: { borderRight: ' **[i]** px solid' },
- borderBottom **[i]** px: { borderBottom: ' **[i]** px solid' },
- borderRadius **[i]** px: { borderRadius: ' **[i]** px' },
- borderTopLeftRadius **[i]** px: { borderTopLeftRadius: ' **[i]** px' },
- borderTopRightRadius **[i]** px: { borderTopRightRadius: ' **[i]** px' },
- borderBottomLeftRadius **[i]** px: { borderBottomLeftRadius: ' **[i]** px' },
- borderBottomRightRadius **[i]** px: { borderBottomRightRadius: ' **[i]** px' },
- maxH **[i]** : { maxHeight: ' **[i]** %' },
- maxH **[i]** vh: { maxHeight: ' **[i]** vh' },
- maxW **[i]** : { maxWidth: ' **[i]** %' },
- maxW **[i]** vw: { maxWidth: ' **[i]** vw' },
- posAbsolute: { position: 'absolute' }
- posRelative: { position: 'relative' }
- posFixed: { position: 'fixed' }
- posStatic: { position: 'static' }
- posUnset: { position: 'unset' }
- posSticky: { position: 'sticky' }
- dFlex: { display: 'flex' }
- dBlock: { display: 'block' }
- dInline: { display: 'inline' }
- dInlineBlock: { display: 'inline-block' }
- dNone: { display: 'none' }
- dUnset: { display: 'unset' }
- dGrid: { display: 'grid' }
- justifyContentStart: { justifyContent: 'flex-start' }
- justifyContentEnd: { justifyContent: 'flex-end' }
- justifyContentCenter: { justifyContent: 'center' }
- justifyContentBetween: { justifyContent: 'space-between' }
- justifyContentAround: { justifyContent: 'space-around' }
- justifyContentEvenly: { justifyContent: 'space-evenly' }
- alignItemsStart: { alignItems: 'flex-start' }
- alignItemsEnd: { alignItems: 'flex-end' }
- alignItemsCenter: { alignItems: 'center' }
- alignItemsBaseline: { alignItems: 'baseline' }
- alignItemsStretch: { alignItems: 'stretch' }
- alignContentStart: { alignContent: 'flex-start' }
- alignContentEnd: { alignContent: 'flex-end' }
- alignContentCenter: { alignContent: 'center' }
- alignContentBetween: { alignContent: 'space-between' }
- alignContentAround: { alignContent: 'space-around' }
- alignContentStretch: { alignContent: 'stretch' }
- borderNone: { border: 'none' }
- borderRound: { borderRadius: '50%' }
- flexWrap: { flexWrap: 'wrap' }
- flexWrapReverse: { flexWrap: 'wrap-reverse' }
- flexWrapNoWrap: { flexWrap: 'nowrap' }
- flexDirectionRow: { flexDirection: 'row' }
- flexDirectionRowReverse: { flexDirection: 'row-reverse' }
- flexDirectionColumn: { flexDirection: 'column' }
- flexDirectionColumnReverse: { flexDirection: 'column-reverse' }
- flexGrow: { flexGrow: '1' }
- flexShrink: { flexShrink: '1' }
- fontSmall: { fontSize: '12px' }
- fontMedium: { fontSize: '16px' }
- fontLarge: { fontSize: '24px' }
- fontXLarge: { fontSize: '32px' }