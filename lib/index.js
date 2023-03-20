"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupStyles = exports.classes = void 0;
var lodash_1 = require("lodash");
var aphrodite_1 = require("aphrodite");
var styles = {};
var AtomicStyled = /** @class */ (function () {
    function AtomicStyled() {
    }
    AtomicStyled.prototype.setupStyles = function (options) {
        var _a = options || {}, colorsArg = _a.colors, breakpointsArg = _a.breakpoints, stylesArg = _a.styles;
        var ultilize = {};
        var colors = __assign({ primary: '#167ffb', secondary: '#6b757d', success: '#169588', info: '#9577ca', warning: '#f37b22', danger: '#d23235', light: '#d0d8dc', dark: '#343a3f' }, colorsArg);
        var breakPoints = __assign({ mobile: 496, tablet: 768, desktop: 1024 }, breakpointsArg);
        var genColor = function () {
            return Object.entries(colors).reduce(function (nextObj, el) {
                var key = el[0], value = el[1];
                //key == color + key => capitalize
                nextObj["color".concat(key.charAt(0).toUpperCase() + key.slice(1, key.length))] = {
                    color: value,
                };
                nextObj["borderColor".concat(key.charAt(0).toUpperCase() + key.slice(1, key.length))] = {
                    borderColor: value,
                };
                nextObj["backgroundColor".concat(key.charAt(0).toUpperCase() + key.slice(1, key.length))] = {
                    backgroundColor: value,
                };
                return nextObj;
            }, {});
        };
        for (var i = 1; i <= 100; i++) {
            //* Width
            ultilize["w".concat(i, "vw")] = { width: "".concat(i, "vw") };
            ultilize["w".concat(i, "px")] = { width: "".concat(i, "px") };
            ultilize["w".concat(i)] = { width: "".concat(i, "%") };
            //* Height
            ultilize["h".concat(i, "vh")] = { height: "".concat(i, "vh") };
            ultilize["h".concat(i, "px")] = { height: "".concat(i, "px") };
            ultilize["h".concat(i)] = { height: "".concat(i, "%") };
            //* Padding
            ultilize["p".concat(i, "px")] = { padding: "".concat(i, "px") };
            ultilize["p".concat(i)] = { padding: "".concat(i, "%") };
            ultilize["pt".concat(i, "px")] = { paddingTop: "".concat(i, "px") };
            ultilize["pt".concat(i)] = { paddingTop: "".concat(i, "%") };
            ultilize["pl".concat(i, "px")] = { paddingLeft: "".concat(i, "px") };
            ultilize["pl".concat(i)] = { paddingLeft: "".concat(i, "%") };
            ultilize["pr".concat(i, "px")] = { paddingRight: "".concat(i, "px") };
            ultilize["pr".concat(i)] = { paddingRight: "".concat(i, "%") };
            ultilize["pb".concat(i, "px")] = { paddingBottom: "".concat(i, "px") };
            ultilize["pb".concat(i)] = { paddingBottom: "".concat(i, "%") };
            ultilize["px".concat(i, "px")] = { paddingLeft: "".concat(i, "px"), paddingRight: "".concat(i, "px") };
            ultilize["px".concat(i)] = { paddingLeft: "".concat(i, "%"), paddingRight: "".concat(i, "%") };
            ultilize["py".concat(i, "px")] = { paddingTop: "".concat(i, "px"), paddingBottom: "".concat(i, "px") };
            ultilize["py".concat(i)] = { paddingTop: "".concat(i, "%"), paddingBottom: "".concat(i, "%") };
            //* Margin
            ultilize["m".concat(i, "px")] = { margin: "".concat(i, "px") };
            ultilize["m".concat(i)] = { margin: "".concat(i, "%") };
            ultilize["mt".concat(i, "px")] = { marginTop: "".concat(i, "px") };
            ultilize["mt".concat(i)] = { marginTop: "".concat(i, "%") };
            ultilize["ml".concat(i, "px")] = { marginTop: "".concat(i, "px") };
            ultilize["ml".concat(i)] = { marginTop: "".concat(i, "%") };
            ultilize["mr".concat(i, "px")] = { marginRight: "".concat(i, "px") };
            ultilize["mr".concat(i)] = { marginRight: "".concat(i, "%") };
            ultilize["mb".concat(i, "px")] = { marginBottom: "".concat(i, "px") };
            ultilize["mb".concat(i)] = { marginBottom: "".concat(i, "%") };
            ultilize["mx".concat(i, "px")] = { marginLeft: "".concat(i, "px"), marginRight: "".concat(i, "px") };
            ultilize["mx".concat(i)] = { marginLeft: "".concat(i, "%"), marginRight: "".concat(i, "%") };
            ultilize["my".concat(i, "px")] = { marginTop: "".concat(i, "px"), marginBottom: "".concat(i, "px") };
            ultilize["my".concat(i)] = { marginTop: "".concat(i, "%"), marginBottom: "".concat(i, "%") };
            //* Gap
            ultilize["gap".concat(i, "px")] = { gap: "".concat(i, "px") };
            //* Row gap
            ultilize["rowGap".concat(i, "px")] = { rowGap: "".concat(i, "px") };
            //* Column gap
            ultilize["columnGap".concat(i, "px")] = { columnGap: "".concat(i, "px") };
            //* Position
            ultilize["top".concat(i, "px")] = { top: "".concat(i, "px") };
            ultilize["left".concat(i, "px")] = { left: "".concat(i, "px") };
            ultilize["right".concat(i, "px")] = { right: "".concat(i, "px") };
            ultilize["bottom".concat(i, "px")] = { bottom: "".concat(i, "px") };
            ultilize["top".concat(i)] = { top: "".concat(i, "%") };
            ultilize["left".concat(i)] = { left: "".concat(i, "%") };
            ultilize["right".concat(i)] = { right: "".concat(i, "%") };
            ultilize["bottom".concat(i)] = { bottom: "".concat(i, "%") };
            //* Border
            ultilize["border".concat(i, "px")] = { border: "".concat(i, "px solid") };
            ultilize["borderTop".concat(i, "px")] = { borderTop: "".concat(i, "px solid") };
            ultilize["borderLeft".concat(i, "px")] = { borderLeft: "".concat(i, "px solid") };
            ultilize["borderRight".concat(i, "px")] = { borderRight: "".concat(i, "px solid") };
            ultilize["borderBottom".concat(i, "px")] = { borderBottom: "".concat(i, "px solid") };
            ultilize["borderX".concat(i, "px")] = {
                borderLeft: "".concat(i, "px solid"),
                borderRight: "".concat(i, "px solid"),
            };
            ultilize["borderY".concat(i, "px")] = {
                borderTop: "".concat(i, "px solid"),
                borderBottom: "".concat(i, "px solid"),
            };
            //* Border radius
            ultilize["borderRadius".concat(i, "px")] = { borderRadius: "".concat(i, "px") };
            ultilize["borderTopLeftRadius".concat(i, "px")] = { borderTopLeftRadius: "".concat(i, "px") };
            ultilize["borderTopRightRadius".concat(i, "px")] = {
                borderTopRightRadius: "".concat(i, "px"),
            };
            ultilize["borderBottomLeftRadius".concat(i, "px")] = {
                borderBottomLeftRadius: "".concat(i, "px"),
            };
            ultilize["borderBottomRightRadius".concat(i, "px")] = {
                borderBottomRightRadius: "".concat(i, "px"),
            };
            //* Border collapse
            ultilize["borderCollapse"] = { borderCollapse: 'collapse' };
            //* Max height percent
            ultilize["maxH".concat(i)] = { maxHeight: "".concat(i, "%") };
            //* Max height vh
            ultilize["maxH".concat(i, "vh")] = { maxHeight: "".concat(i, "vh") };
            //* Max width percent
            ultilize["maxW".concat(i)] = { maxWidth: "".concat(i, "%") };
            //* Max width vw
            ultilize["maxW".concat(i, "vw")] = { maxWidth: "".concat(i, "vw") };
            //* opacity
            ultilize["opacity".concat(i)] = { opacity: "".concat(i / 100) };
        }
        var properties = {};
        var arr = [
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
        arr.forEach(function (el) {
            var _a, _b;
            properties[el.name] = (_a = {}, _a[el.property] = el.value, _a);
            properties["h-".concat(el.name)] = {
                ':hover': (_b = {},
                    _b[el.property] = el.value,
                    _b),
            };
            Object.entries(breakPoints).forEach(function (_a) {
                var _b, _c;
                var key = _a[0], value = _a[1];
                properties["".concat(key, "-").concat(el.name)] = (_b = {},
                    _b["@media (max-width: ".concat(value, "px)")] = (_c = {},
                        _c[el.property] = el.value,
                        _c),
                    _b);
            });
        });
        styles = aphrodite_1.StyleSheet.create(__assign(__assign(__assign(__assign(__assign({}, properties), { 
            //* Font
            fontSmall: {
                fontSize: '12px',
            }, fontMedium: {
                fontSize: '16px',
            }, fontLarge: {
                fontSize: '24px',
            }, 'h-fontSmall': {
                ':hover': {
                    fontSize: '12px',
                },
            }, 'h-fontMedium': {
                ':hover': {
                    fontSize: '16px',
                },
            }, 'h-fontLarge': {
                ':hover': {
                    fontSize: '24px',
                },
            }, 'elevation-1': {
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
            }, 'elevation-2': {
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
            }, 'elevation-3': {
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
            }, 'elevation-4': {
                boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.22)',
            }, 'elevation-5': {
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.22), 0px 15px 12px rgba(0, 0, 0, 0.25)',
            }, 'elevation-6': {
                boxShadow: '0px 25px 55px rgba(0, 0, 0, 0.25), 0px 20px 20px rgba(0, 0, 0, 0.22)',
            } }), ultilize), genColor()), stylesArg));
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
    };
    AtomicStyled.prototype.classes = function (arrStyles, externalClass) {
        if (externalClass) {
            return (externalClass +
                ' ' +
                (0, aphrodite_1.css)(arrStyles.map(function (style) {
                    return (0, lodash_1.get)(styles, "".concat(style));
                })));
        }
        return (0, aphrodite_1.css)(arrStyles.map(function (style) {
            return (0, lodash_1.get)(styles, "".concat(style));
        }));
    };
    return AtomicStyled;
}());
var atomicStyled = new AtomicStyled();
exports.classes = atomicStyled.classes;
exports.setupStyles = atomicStyled.setupStyles;
