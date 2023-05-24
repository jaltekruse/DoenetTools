import { r as reactExports, ax as commonjsGlobal, bx as useDoenetRenderer, o as Recoil_index_24, bC as rendererState, t as Recoil_index_20, j as jsx, c as FontAwesomeIcon, bA as faLevelDownAlt, ar as faCheck, bb as faTimes, bB as faCloud, b as jsxs, F as Fragment, R as React, s as styled, v as betterReactMathjax } from "./PageViewer-d914b069.js";
import { f as focusedMathField, a as focusedMathFieldReturn, p as palletRef, h as handleRef } from "./MathInputSelector-9ebf91fb.js";
/* empty css                    */var reactMathquillExports = {};
var reactMathquill = {
  get exports() {
    return reactMathquillExports;
  },
  set exports(v) {
    reactMathquillExports = v;
  }
};
var reactMathquill_minExports = {};
var reactMathquill_min = {
  get exports() {
    return reactMathquill_minExports;
  },
  set exports(v) {
    reactMathquill_minExports = v;
  }
};
/*! For license information please see react-mathquill.min.js.LICENSE.txt */
(function(module, exports) {
  !function(e, t) {
    module.exports = t(reactExports);
  }(commonjsGlobal, function(e) {
    return (() => {
      var t = { 991: (e2, t2, n2) => {
        n2.d(t2, { Z: () => h });
        var r2 = n2(156), i2 = n2.n(r2), o = n2(697), s = n2.n(o), a = n2(700), l = ["latex", "onChange", "config", "mathquillDidMount"];
        function c() {
          return c = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              for (var r3 in n3)
                Object.prototype.hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
            }
            return e3;
          }, c.apply(this, arguments);
        }
        function u(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e3);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function f(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? u(Object(n3), true).forEach(function(t4) {
              p(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : u(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function p(e3, t3, n3) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
        }
        var d = function(e3) {
          var t3 = e3.latex, n3 = e3.onChange, o2 = e3.config, s2 = e3.mathquillDidMount, u2 = function(e4, t4) {
            if (null == e4)
              return {};
            var n4, r3, i3 = function(e5, t5) {
              if (null == e5)
                return {};
              var n5, r4, i4 = {}, o4 = Object.keys(e5);
              for (r4 = 0; r4 < o4.length; r4++)
                n5 = o4[r4], t5.indexOf(n5) >= 0 || (i4[n5] = e5[n5]);
              return i4;
            }(e4, t4);
            if (Object.getOwnPropertySymbols) {
              var o3 = Object.getOwnPropertySymbols(e4);
              for (r3 = 0; r3 < o3.length; r3++)
                n4 = o3[r3], t4.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, n4) && (i3[n4] = e4[n4]);
            }
            return i3;
          }(e3, l), p2 = (0, r2.useRef)(2), d2 = (0, r2.useRef)(null), h2 = (0, r2.useRef)(null), m = (0, r2.useRef)(n3);
          return (0, r2.useEffect)(function() {
            m.current = n3;
          }, [n3]), (0, r2.useEffect)(function() {
            if (h2.current) {
              var e4 = { restrictMismatchedBrackets: true, handlers: {} };
              o2 && (e4 = f(f({}, e4), o2));
              var n4 = e4.handlers.edit;
              e4.handlers.edit = function(e5) {
                n4 && n4(), p2.current > 0 ? p2.current -= 1 : m.current && m.current(e5);
              }, d2.current = a.Z.MathField(h2.current, e4), d2.current.latex(t3 || ""), s2 && s2(d2.current);
            }
          }, [h2]), (0, r2.useEffect)(function() {
            d2.current && d2.current.latex() !== t3 && d2.current.latex(t3);
          }, [t3]), i2().createElement("span", c({}, u2, { ref: h2 }));
        };
        d.propTypes = { latex: s().string, onChange: s().func, config: s().object, mathquillDidMount: s().func };
        const h = d;
      }, 717: (e2, t2, n2) => {
        n2.d(t2, { Z: () => f });
        var r2 = n2(156), i2 = n2.n(r2), o = n2(697), s = n2.n(o), a = n2(700), l = ["mathquillDidMount", "children"];
        function c() {
          return c = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              for (var r3 in n3)
                Object.prototype.hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
            }
            return e3;
          }, c.apply(this, arguments);
        }
        var u = function(e3) {
          var t3 = e3.mathquillDidMount, n3 = e3.children, o2 = function(e4, t4) {
            if (null == e4)
              return {};
            var n4, r3, i3 = function(e5, t5) {
              if (null == e5)
                return {};
              var n5, r4, i4 = {}, o4 = Object.keys(e5);
              for (r4 = 0; r4 < o4.length; r4++)
                n5 = o4[r4], t5.indexOf(n5) >= 0 || (i4[n5] = e5[n5]);
              return i4;
            }(e4, t4);
            if (Object.getOwnPropertySymbols) {
              var o3 = Object.getOwnPropertySymbols(e4);
              for (r3 = 0; r3 < o3.length; r3++)
                n4 = o3[r3], t4.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, n4) && (i3[n4] = e4[n4]);
            }
            return i3;
          }(e3, l), s2 = (0, r2.useRef)(null), u2 = (0, r2.useRef)(null);
          return (0, r2.useLayoutEffect)(function() {
            s2 && (u2.current = a.Z.StaticMath(s2.current), t3 && t3(u2.current));
          }, [s2, n3]), i2().createElement("span", c({}, o2, { ref: s2 }), n3);
        };
        u.propTypes = { children: s().string, mathquillDidMount: s().func };
        const f = u;
      }, 700: (e2, t2, n2) => {
        n2.d(t2, { Z: () => r2 });
        const r2 = n2(338).getInterface(2);
      }, 527: (e2, t2, n2) => {
        n2.d(t2, { Z: () => a });
        var r2 = n2(81), i2 = n2.n(r2), o = n2(645), s = n2.n(o)()(i2());
        s.push([e2.id, `/*
 * MathQuill v0.11.0, by Han, Jeanine, and Mary
 * http://mathquill.com | maintainers@mathquill.com
 *
 * This Source Code Form is subject to the terms of the
 * Mozilla Public License, v. 2.0. If a copy of the MPL
 * was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 */
@font-face {
  /* Heavy fonts have been removed */
  font-family: Symbola;
}
.mq-editable-field {
  display: -moz-inline-box;
  display: inline-block;
}
.mq-editable-field .mq-cursor {
  border-left: 1px solid black;
  margin-left: -1px;
  position: relative;
  z-index: 1;
  padding: 0;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-editable-field .mq-cursor.mq-blink {
  visibility: hidden;
}
.mq-editable-field,
.mq-math-mode .mq-editable-field {
  border: 1px solid gray;
}
.mq-editable-field.mq-focused,
.mq-math-mode .mq-editable-field.mq-focused {
  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;
  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;
  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;
  border-color: #709AC0;
  border-radius: 1px;
}
.mq-math-mode .mq-editable-field {
  margin: 1px;
}
.mq-editable-field .mq-latex-command-input {
  color: inherit;
  font-family: "Courier New", monospace;
  border: 1px solid gray;
  padding-right: 1px;
  margin-right: 1px;
  margin-left: 2px;
}
.mq-editable-field .mq-latex-command-input.mq-empty {
  background: transparent;
}
.mq-editable-field .mq-latex-command-input.mq-hasCursor {
  border-color: ActiveBorder;
}
.mq-editable-field.mq-empty:after,
.mq-editable-field.mq-text-mode:after,
.mq-math-mode .mq-empty:after {
  visibility: hidden;
  content: 'c';
}
.mq-editable-field .mq-cursor:only-child:after,
.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {
  visibility: hidden;
  content: 'c';
}
.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {
  content: '';
}
.mq-editable-field.mq-text-mode {
  overflow-x: auto;
  overflow-y: hidden;
}
.mq-root-block,
.mq-math-mode .mq-root-block {
  display: -moz-inline-box;
  display: inline-block;
  width: 100%;
  padding: 2px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}
.mq-math-mode {
  font-variant: normal;
  font-weight: normal;
  font-style: normal;
  font-size: 115%;
  line-height: 1;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode .mq-non-leaf,
.mq-math-mode .mq-scaled {
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode var,
.mq-math-mode .mq-text-mode,
.mq-math-mode .mq-nonSymbola {
  font-family: "Times New Roman", Symbola, serif;
  line-height: 0.9;
}
.mq-math-mode * {
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  border-color: black;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  box-sizing: border-box;
}
.mq-math-mode .mq-empty {
  background: #ccc;
}
.mq-math-mode .mq-empty.mq-root-block {
  background: transparent;
}
.mq-math-mode.mq-empty {
  background: transparent;
}
.mq-math-mode .mq-text-mode {
  display: inline-block;
  white-space: pre;
}
.mq-math-mode .mq-text-mode.mq-hasCursor {
  box-shadow: inset darkgray 0 0.1em 0.2em;
  padding: 0 0.1em;
  margin: 0 -0.1em;
  min-width: 1ex;
}
.mq-math-mode .mq-font {
  font: 1em "Times New Roman", Symbola, serif;
}
.mq-math-mode .mq-font * {
  font-family: inherit;
  font-style: inherit;
}
.mq-math-mode b,
.mq-math-mode b.mq-font {
  font-weight: bolder;
}
.mq-math-mode var,
.mq-math-mode i,
.mq-math-mode i.mq-font {
  font-style: italic;
}
.mq-math-mode var.mq-f {
  margin-right: 0.2em;
  margin-left: 0.1em;
}
.mq-math-mode .mq-roman var.mq-f {
  margin: 0;
}
.mq-math-mode big {
  font-size: 200%;
}
.mq-math-mode .mq-int > big {
  display: inline-block;
  -webkit-transform: scaleX(0.7);
  -moz-transform: scaleX(0.7);
  -ms-transform: scaleX(0.7);
  -o-transform: scaleX(0.7);
  transform: scaleX(0.7);
  vertical-align: -0.16em;
}
.mq-math-mode .mq-int > .mq-supsub {
  font-size: 80%;
  vertical-align: -1.1em;
  padding-right: 0.2em;
}
.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {
  vertical-align: 1.3em;
}
.mq-math-mode .mq-int > .mq-supsub > .mq-sub {
  margin-left: -0.35em;
}
.mq-math-mode .mq-roman {
  font-style: normal;
}
.mq-math-mode .mq-sans-serif {
  font-family: sans-serif, Symbola, serif;
}
.mq-math-mode .mq-monospace {
  font-family: monospace, Symbola, serif;
}
.mq-math-mode .mq-overline {
  border-top: 1px solid black;
  margin-top: 1px;
}
.mq-math-mode .mq-underline {
  border-bottom: 1px solid black;
  margin-bottom: 1px;
}
.mq-math-mode .mq-binary-operator {
  padding: 0 0.2em;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode .mq-supsub {
  text-align: left;
  font-size: 90%;
  vertical-align: -0.5em;
}
.mq-math-mode .mq-supsub.mq-sup-only {
  vertical-align: 0.5em;
}
.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {
  display: inline-block;
  vertical-align: text-bottom;
}
.mq-math-mode .mq-supsub .mq-sup {
  display: block;
}
.mq-math-mode .mq-supsub .mq-sub {
  display: block;
  float: left;
}
.mq-math-mode .mq-supsub .mq-binary-operator {
  padding: 0 0.1em;
}
.mq-math-mode .mq-supsub .mq-fraction {
  font-size: 70%;
}
.mq-math-mode sup.mq-nthroot {
  font-size: 80%;
  vertical-align: 0.8em;
  margin-right: -0.6em;
  margin-left: 0.2em;
  min-width: 0.5em;
}
.mq-math-mode .mq-paren {
  padding: 0 0.1em;
  vertical-align: top;
  -webkit-transform-origin: center 0.06em;
  -moz-transform-origin: center 0.06em;
  -ms-transform-origin: center 0.06em;
  -o-transform-origin: center 0.06em;
  transform-origin: center 0.06em;
}
.mq-math-mode .mq-paren.mq-ghost {
  color: silver;
}
.mq-math-mode .mq-paren + span {
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}
.mq-math-mode .mq-array {
  vertical-align: middle;
  text-align: center;
}
.mq-math-mode .mq-array > span {
  display: block;
}
.mq-math-mode .mq-operator-name {
  font-family: Symbola, "Times New Roman", serif;
  line-height: 0.9;
  font-style: normal;
}
.mq-math-mode var.mq-operator-name.mq-first {
  padding-left: 0.2em;
}
.mq-math-mode var.mq-operator-name.mq-last,
.mq-math-mode .mq-supsub.mq-after-operator-name {
  padding-right: 0.2em;
}
.mq-math-mode .mq-fraction {
  font-size: 90%;
  text-align: center;
  vertical-align: -0.4em;
  padding: 0 0.2em;
}
.mq-math-mode .mq-fraction,
.mq-math-mode .mq-large-operator,
.mq-math-mode x:-moz-any-link {
  display: -moz-groupbox;
}
.mq-math-mode .mq-fraction,
.mq-math-mode .mq-large-operator,
.mq-math-mode x:-moz-any-link,
.mq-math-mode x:default {
  display: inline-block;
}
.mq-math-mode .mq-numerator,
.mq-math-mode .mq-denominator,
.mq-math-mode .mq-dot-recurring {
  display: block;
}
.mq-math-mode .mq-numerator {
  padding: 0 0.1em;
}
.mq-math-mode .mq-denominator {
  border-top: 1px solid;
  float: right;
  width: 100%;
  padding: 0.1em;
}
.mq-math-mode .mq-dot-recurring {
  text-align: center;
  height: 0.3em;
}
.mq-math-mode .mq-sqrt-prefix {
  padding-top: 0;
  position: relative;
  top: 0.1em;
  vertical-align: top;
  -webkit-transform-origin: top;
  -moz-transform-origin: top;
  -ms-transform-origin: top;
  -o-transform-origin: top;
  transform-origin: top;
}
.mq-math-mode .mq-sqrt-stem {
  border-top: 1px solid;
  margin-top: 1px;
  padding-left: 0.15em;
  padding-right: 0.2em;
  margin-right: 0.1em;
  padding-top: 1px;
}
.mq-math-mode .mq-diacritic-above {
  display: block;
  text-align: center;
  line-height: 0.4em;
}
.mq-math-mode .mq-diacritic-stem {
  display: block;
  text-align: center;
}
.mq-math-mode .mq-hat-prefix {
  display: block;
  text-align: center;
  line-height: 0.95em;
  margin-bottom: -0.7em;
  transform: scaleX(1.5);
  -moz-transform: scaleX(1.5);
  -o-transform: scaleX(1.5);
  -webkit-transform: scaleX(1.5);
}
.mq-math-mode .mq-hat-stem {
  display: block;
}
.mq-math-mode .mq-large-operator {
  vertical-align: -0.2em;
  padding: 0.2em;
  text-align: center;
}
.mq-math-mode .mq-large-operator .mq-from,
.mq-math-mode .mq-large-operator big,
.mq-math-mode .mq-large-operator .mq-to {
  display: block;
}
.mq-math-mode .mq-large-operator .mq-from,
.mq-math-mode .mq-large-operator .mq-to {
  font-size: 80%;
}
.mq-math-mode .mq-large-operator .mq-from {
  float: right;
  /* take out of normal flow to manipulate baseline */
  width: 100%;
}
.mq-math-mode,
.mq-math-mode .mq-editable-field {
  cursor: text;
  font-family: Symbola, "Times New Roman", serif;
}
.mq-math-mode .mq-overarc {
  border-top: 1px solid black;
  -webkit-border-top-right-radius: 50% 0.3em;
  -moz-border-radius-topright: 50% 0.3em;
  border-top-right-radius: 50% 0.3em;
  -webkit-border-top-left-radius: 50% 0.3em;
  -moz-border-radius-topleft: 50% 0.3em;
  border-top-left-radius: 50% 0.3em;
  margin-top: 1px;
  padding-top: 0.15em;
}
.mq-math-mode .mq-overarrow {
  min-width: 0.5em;
  border-top: 1px solid black;
  margin-top: 1px;
  padding-top: 0.2em;
  text-align: center;
}
.mq-math-mode .mq-overarrow:before {
  display: block;
  position: relative;
  top: -0.34em;
  font-size: 0.5em;
  line-height: 0em;
  content: '\\27A4';
  text-align: right;
}
.mq-math-mode .mq-overarrow.mq-arrow-left:before {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.mq-math-mode .mq-overarrow.mq-arrow-both {
  vertical-align: text-bottom;
}
.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {
  min-height: 1.23em;
}
.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {
  top: -0.34em;
}
.mq-math-mode .mq-overarrow.mq-arrow-both:before {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.mq-math-mode .mq-overarrow.mq-arrow-both:after {
  display: block;
  position: relative;
  top: -2.3em;
  font-size: 0.5em;
  line-height: 0em;
  content: '\\27A4';
  visibility: visible;
  text-align: right;
}
.mq-math-mode .mq-selection,
.mq-editable-field .mq-selection,
.mq-math-mode .mq-selection .mq-non-leaf,
.mq-editable-field .mq-selection .mq-non-leaf,
.mq-math-mode .mq-selection .mq-scaled,
.mq-editable-field .mq-selection .mq-scaled {
  background: #B4D5FE !important;
  background: Highlight !important;
  color: HighlightText;
  border-color: HighlightText;
}
.mq-math-mode .mq-selection .mq-matrixed,
.mq-editable-field .mq-selection .mq-matrixed {
  background: #39F !important;
}
.mq-math-mode .mq-selection .mq-matrixed-container,
.mq-editable-field .mq-selection .mq-matrixed-container {
  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;
}
.mq-math-mode .mq-selection.mq-blur,
.mq-editable-field .mq-selection.mq-blur,
.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,
.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,
.mq-math-mode .mq-selection.mq-blur .mq-scaled,
.mq-editable-field .mq-selection.mq-blur .mq-scaled,
.mq-math-mode .mq-selection.mq-blur .mq-matrixed,
.mq-editable-field .mq-selection.mq-blur .mq-matrixed {
  background: #D4D4D4 !important;
  color: black;
  border-color: black;
}
.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,
.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {
  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;
}
.mq-editable-field .mq-textarea,
.mq-math-mode .mq-textarea {
  position: relative;
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
}
.mq-editable-field .mq-textarea *,
.mq-math-mode .mq-textarea *,
.mq-editable-field .mq-selectable,
.mq-math-mode .mq-selectable {
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
  position: absolute;
  clip: rect(1em 1em 1em 1em);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  resize: none;
  width: 1px;
  height: 1px;
  box-sizing: content-box;
}
.mq-math-mode .mq-matrixed {
  background: white;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode .mq-matrixed-container {
  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');
  margin-top: -0.1em;
}
`, ""]);
        const a = s;
      }, 645: (e2) => {
        e2.exports = function(e3) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n2 = "", r2 = void 0 !== t3[5];
              return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), r2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e3(t3), r2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
            }).join("");
          }, t2.i = function(e4, n2, r2, i2, o) {
            "string" == typeof e4 && (e4 = [[null, e4, void 0]]);
            var s = {};
            if (r2)
              for (var a = 0; a < this.length; a++) {
                var l = this[a][0];
                null != l && (s[l] = true);
              }
            for (var c = 0; c < e4.length; c++) {
              var u = [].concat(e4[c]);
              r2 && s[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), n2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n2) : u[2] = n2), i2 && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = i2) : u[4] = "".concat(i2)), t2.push(u));
            }
          }, t2;
        };
      }, 81: (e2) => {
        e2.exports = function(e3) {
          return e3[1];
        };
      }, 338: (e2, t2, n2) => {
        var r2 = n2(755);
        window.jQuery = r2, function() {
          var e3, t3 = window.jQuery, n3 = "mathquill-command-id", r3 = "mathquill-block-id", i2 = Math.min, o = Math.max;
          if (!t3)
            throw "MathQuill requires jQuery 1.5.2+ to be loaded first";
          function s() {
          }
          var a = [].slice;
          function l(e4) {
            var t4 = e4.length - 1;
            return function() {
              var n4 = a.call(arguments, 0, t4), r4 = a.call(arguments, t4);
              return e4.apply(this, n4.concat([r4]));
            };
          }
          var c = l(function(e4, t4) {
            return l(function(n4, r4) {
              if (e4 in n4)
                return n4[e4].apply(n4, t4.concat(r4));
            });
          });
          function u(e4) {
            return l(function(t4, n4) {
              return "function" != typeof t4 && (t4 = c(t4)), e4.call(this, function(e5) {
                return t4.apply(e5, [e5].concat(n4));
              });
            });
          }
          function f(e4) {
            var t4 = a.call(arguments, 1);
            return function() {
              return e4.apply(this, t4);
            };
          }
          function p(e4, t4) {
            if (!t4)
              throw new Error("prayer failed: " + e4);
          }
          var d = function(e4, t4, n4) {
            function r4(e5) {
              return "object" == typeof e5;
            }
            function i3(e5) {
              return "function" == typeof e5;
            }
            function o2() {
            }
            return function e5(n5, s2) {
              function a2() {
                var e6 = new l2();
                return i3(e6.init) && e6.init.apply(e6, arguments), e6;
              }
              function l2() {
              }
              void 0 === s2 && (s2 = n5, n5 = Object), a2.Bare = l2;
              var c2, u2 = o2.prototype = n5.prototype, f2 = l2.prototype = a2.prototype = a2.p = new o2();
              return f2.constructor = a2, a2.extend = function(t5) {
                return e5(a2, t5);
              }, (a2.open = function(e6) {
                if (c2 = {}, i3(e6) ? c2 = e6.call(a2, f2, u2, a2, n5) : r4(e6) && (c2 = e6), r4(c2))
                  for (var o3 in c2)
                    t4.call(c2, o3) && (f2[o3] = c2[o3]);
                return i3(f2.init) || (f2.init = n5), a2;
              })(s2);
            };
          }(0, {}.hasOwnProperty), h = -1;
          function m(e4) {
            p("a direction was passed", e4 === h || 1 === e4);
          }
          var g = d(t3, function(e4) {
            e4.insDirOf = function(e5, t4) {
              return e5 === h ? this.insertBefore(t4.first()) : this.insertAfter(t4.last());
            }, e4.insAtDirEnd = function(e5, t4) {
              return e5 === h ? this.prependTo(t4) : this.appendTo(t4);
            };
          }), v = d(function(e4) {
            e4.parent = 0, e4[h] = 0, e4[1] = 0, e4.init = function(e5, t4, n4) {
              this.parent = e5, this[h] = t4, this[1] = n4;
            }, this.copy = function(e5) {
              return v(e5.parent, e5[h], e5[1]);
            };
          }), b = d(function(e4) {
            e4[h] = 0, e4[1] = 0, e4.parent = 0;
            var t4 = 0;
            this.byId = {}, e4.init = function() {
              this.id = t4 += 1, b.byId[this.id] = this, this.ends = {}, this.ends[h] = 0, this.ends[1] = 0;
            }, e4.dispose = function() {
              delete b.byId[this.id];
            }, e4.toString = function() {
              return "{{ MathQuill Node #" + this.id + " }}";
            }, e4.jQ = g(), e4.jQadd = function(e5) {
              return this.jQ = this.jQ.add(e5);
            }, e4.jQize = function(e5) {
              function t5(e6) {
                if (e6.getAttribute) {
                  var n5 = e6.getAttribute("mathquill-command-id"), r4 = e6.getAttribute("mathquill-block-id");
                  n5 && b.byId[n5].jQadd(e6), r4 && b.byId[r4].jQadd(e6);
                }
                for (e6 = e6.firstChild; e6; e6 = e6.nextSibling)
                  t5(e6);
              }
              e5 = g(e5 || this.html());
              for (var n4 = 0; n4 < e5.length; n4 += 1)
                t5(e5[n4]);
              return e5;
            }, e4.createDir = function(e5, t5) {
              m(e5);
              var n4 = this;
              return n4.jQize(), n4.jQ.insDirOf(e5, t5.jQ), t5[e5] = n4.adopt(t5.parent, t5[h], t5[1]), n4;
            }, e4.createLeftOf = function(e5) {
              return this.createDir(h, e5);
            }, e4.selectChildren = function(e5, t5) {
              return k(e5, t5);
            }, e4.bubble = u(function(e5) {
              for (var t5 = this; t5 && false !== e5(t5); t5 = t5.parent)
                ;
              return this;
            }), e4.postOrder = u(function(e5) {
              return function t5(n4) {
                n4.eachChild(t5), e5(n4);
              }(this), this;
            }), e4.isEmpty = function() {
              return 0 === this.ends[h] && 0 === this.ends[1];
            }, e4.isStyleBlock = function() {
              return false;
            }, e4.children = function() {
              return x(this.ends[h], this.ends[1]);
            }, e4.eachChild = function() {
              var e5 = this.children();
              return e5.each.apply(e5, arguments), this;
            }, e4.foldChildren = function(e5, t5) {
              return this.children().fold(e5, t5);
            }, e4.withDirAdopt = function(e5, t5, n4, r4) {
              return x(this, this).withDirAdopt(e5, t5, n4, r4), this;
            }, e4.adopt = function(e5, t5, n4) {
              return x(this, this).adopt(e5, t5, n4), this;
            }, e4.disown = function() {
              return x(this, this).disown(), this;
            }, e4.remove = function() {
              return this.jQ.remove(), this.postOrder("dispose"), this.disown();
            };
          });
          function y(e4, t4, n4) {
            p("a parent is always present", e4), p("leftward is properly set up", t4 ? t4[1] === n4 && t4.parent === e4 : e4.ends[h] === n4), p("rightward is properly set up", n4 ? n4[h] === t4 && n4.parent === e4 : e4.ends[1] === t4);
          }
          var x = d(function(t4) {
            t4.init = function(t5, n4, r4) {
              if (r4 === e3 && (r4 = h), m(r4), p("no half-empty fragments", !t5 == !n4), this.ends = {}, t5) {
                p("withDir is passed to Fragment", t5 instanceof b), p("oppDir is passed to Fragment", n4 instanceof b), p("withDir and oppDir have the same parent", t5.parent === n4.parent), this.ends[r4] = t5, this.ends[-r4] = n4;
                var i3 = this.fold([], function(e4, t6) {
                  return e4.push.apply(e4, t6.jQ.get()), e4;
                });
                this.jQ = this.jQ.add(i3);
              }
            }, t4.jQ = g(), t4.withDirAdopt = function(e4, t5, n4, r4) {
              return e4 === h ? this.adopt(t5, n4, r4) : this.adopt(t5, r4, n4);
            }, t4.adopt = function(e4, t5, n4) {
              y(e4, t5, n4);
              var r4 = this;
              r4.disowned = false;
              var i3 = r4.ends[h];
              if (!i3)
                return this;
              var o2 = r4.ends[1];
              return t5 || (e4.ends[h] = i3), n4 ? n4[h] = o2 : e4.ends[1] = o2, r4.ends[1][1] = n4, r4.each(function(n5) {
                n5[h] = t5, n5.parent = e4, t5 && (t5[1] = n5), t5 = n5;
              }), r4;
            }, t4.disown = function() {
              var e4 = this, t5 = e4.ends[h];
              if (!t5 || e4.disowned)
                return e4;
              e4.disowned = true;
              var n4 = e4.ends[1], r4 = t5.parent;
              return y(r4, t5[h], t5), y(r4, n4, n4[1]), t5[h] ? t5[h][1] = n4[1] : r4.ends[h] = n4[1], n4[1] ? n4[1][h] = t5[h] : r4.ends[1] = t5[h], e4;
            }, t4.remove = function() {
              return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
            }, t4.each = u(function(e4) {
              var t5 = this, n4 = t5.ends[h];
              if (!n4)
                return t5;
              for (; n4 !== t5.ends[1][1] && false !== e4(n4); n4 = n4[1])
                ;
              return t5;
            }), t4.fold = function(e4, t5) {
              return this.each(function(n4) {
                e4 = t5.call(this, e4, n4);
              }), e4;
            };
          }), q = {}, w = {}, T = d(v, function(t4) {
            t4.init = function(e4, t5) {
              this.parent = e4, this.options = t5;
              var n4 = this.jQ = this._jQ = g('<span class="mq-cursor">&#8203;</span>');
              this.blink = function() {
                n4.toggleClass("mq-blink");
              }, this.upDownCache = {};
            }, t4.show = function() {
              return this.jQ = this._jQ.removeClass("mq-blink"), "intervalId" in this ? clearInterval(this.intervalId) : (this[1] ? this.selection && this.selection.ends[h][h] === this[h] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[1].jQ.first()) : this.jQ.appendTo(this.parent.jQ), this.parent.focus()), this.intervalId = setInterval(this.blink, 500), this;
            }, t4.hide = function() {
              return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), this.jQ = g(), this;
            }, t4.withDirInsertAt = function(e4, t5, n4, r4) {
              var i3 = this.parent;
              this.parent = t5, this[e4] = n4, this[-e4] = r4, i3 !== t5 && i3.blur && i3.blur(this);
            }, t4.insDirOf = function(e4, t5) {
              return m(e4), this.jQ.insDirOf(e4, t5.jQ), this.withDirInsertAt(e4, t5.parent, t5[e4], t5), this.parent.jQ.addClass("mq-hasCursor"), this;
            }, t4.insLeftOf = function(e4) {
              return this.insDirOf(h, e4);
            }, t4.insRightOf = function(e4) {
              return this.insDirOf(1, e4);
            }, t4.insAtDirEnd = function(e4, t5) {
              return m(e4), this.jQ.insAtDirEnd(e4, t5.jQ), this.withDirInsertAt(e4, t5, 0, t5.ends[e4]), t5.focus(), this;
            }, t4.insAtLeftEnd = function(e4) {
              return this.insAtDirEnd(h, e4);
            }, t4.insAtRightEnd = function(e4) {
              return this.insAtDirEnd(1, e4);
            }, t4.jumpUpDown = function(e4, t5) {
              var n4 = this;
              n4.upDownCache[e4.id] = v.copy(n4);
              var r4 = n4.upDownCache[t5.id];
              if (r4)
                r4[1] ? n4.insLeftOf(r4[1]) : n4.insAtRightEnd(r4.parent);
              else {
                var i3 = n4.offset().left;
                t5.seek(i3, n4);
              }
            }, t4.offset = function() {
              var e4 = this.jQ.removeClass("mq-cursor").offset();
              return this.jQ.addClass("mq-cursor"), e4;
            }, t4.unwrapGramp = function() {
              var e4 = this.parent.parent, t5 = e4.parent, n4 = e4[1], r4 = e4[h];
              if (e4.disown().eachChild(function(i3) {
                i3.isEmpty() || (i3.children().adopt(t5, r4, n4).each(function(t6) {
                  t6.jQ.insertBefore(e4.jQ.first());
                }), r4 = i3.ends[1]);
              }), !this[1])
                if (this[h])
                  this[1] = this[h][1];
                else
                  for (; !this[1]; ) {
                    if (this.parent = this.parent[1], !this.parent) {
                      this[1] = e4[1], this.parent = t5;
                      break;
                    }
                    this[1] = this.parent.ends[h];
                  }
              this[1] ? this.insLeftOf(this[1]) : this.insAtRightEnd(t5), e4.jQ.remove(), e4[h].siblingDeleted && e4[h].siblingDeleted(this.options, 1), e4[1].siblingDeleted && e4[1].siblingDeleted(this.options, h);
            }, t4.startSelection = function() {
              for (var e4 = this.anticursor = v.copy(this), t5 = e4.ancestors = {}, n4 = e4; n4.parent; n4 = n4.parent)
                t5[n4.parent.id] = n4;
            }, t4.endSelection = function() {
              delete this.anticursor;
            }, t4.select = function() {
              var e4 = this.anticursor;
              if (this[h] === e4[h] && this.parent === e4.parent)
                return false;
              for (var t5 = this; t5.parent; t5 = t5.parent)
                if (t5.parent.id in e4.ancestors) {
                  var n4 = t5.parent;
                  break;
                }
              p("cursor and anticursor in the same tree", n4);
              var r4, i3, o2 = e4.ancestors[n4.id], s2 = 1;
              if (t5[h] !== o2) {
                for (var a2 = t5; a2; a2 = a2[1])
                  if (a2[1] === o2[1]) {
                    s2 = h, r4 = t5, i3 = o2;
                    break;
                  }
              }
              return 1 === s2 && (r4 = o2, i3 = t5), r4 instanceof v && (r4 = r4[1]), i3 instanceof v && (i3 = i3[h]), this.hide().selection = n4.selectChildren(r4, i3), this.insDirOf(s2, this.selection.ends[s2]), this.selectionChanged(), true;
            }, t4.clearSelection = function() {
              return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this;
            }, t4.deleteSelection = function() {
              this.selection && (this[h] = this.selection.ends[h][h], this[1] = this.selection.ends[1][1], this.selection.remove(), this.selectionChanged(), delete this.selection);
            }, t4.replaceSelection = function() {
              var e4 = this.selection;
              return e4 && (this[h] = e4.ends[h][h], this[1] = e4.ends[1][1], delete this.selection), e4;
            }, t4.depth = function() {
              for (var e4 = this, t5 = 0; e4 = e4.parent; )
                t5 += e4 instanceof U ? 1 : 0;
              return t5;
            }, t4.isTooDeep = function(t5) {
              if (this.options.maxDepth !== e3)
                return this.depth() + (t5 || 0) > this.options.maxDepth;
            };
          }), k = d(x, function(e4, t4) {
            e4.init = function() {
              t4.init.apply(this, arguments), this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
            }, e4.adopt = function() {
              return this.jQ.replaceWith(this.jQ = this.jQ.children()), t4.adopt.apply(this, arguments);
            }, e4.clear = function() {
              return this.jQ.replaceWith(this.jQ[0].childNodes), this;
            }, e4.join = function(e5) {
              return this.fold("", function(t5, n4) {
                return t5 + n4[e5]();
              });
            };
          }), C = d(function(e4) {
            e4.init = function(e5, t5, n4) {
              this.id = e5.id, this.data = {}, this.root = e5, this.container = t5, this.options = n4, e5.controller = this, this.cursor = e5.cursor = T(e5, n4);
            }, e4.handle = function(e5, t5) {
              var n4 = this.options.handlers;
              if (n4 && n4.fns[e5]) {
                var r4 = n4.APIClasses[this.KIND_OF_MQ](this);
                t5 === h || 1 === t5 ? n4.fns[e5](t5, r4) : n4.fns[e5](r4);
              }
            };
            var t4 = [];
            this.onNotify = function(e5) {
              t4.push(e5);
            }, e4.notify = function() {
              for (var e5 = 0; e5 < t4.length; e5 += 1)
                t4[e5].apply(this.cursor, arguments);
              return this;
            };
          }), O = {}, j = d(), S = {}, D = d(), E = {};
          function A() {
            window.console && console.warn('You are using the MathQuill API without specifying an interface version, which will fail in v1.0.0. Easiest fix is to do the following before doing anything else:\n\n    MathQuill = MathQuill.getInterface(1);\n    // now MathQuill.MathField() works like it used to\n\nSee also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide');
          }
          function L(e4) {
            return A(), Qe(e4);
          }
          L.prototype = D.p, L.VERSION = "v0.11.0", L.interfaceVersion = function(e4) {
            if (1 !== e4)
              throw "Only interface version 1 supported. You specified: " + e4;
            return (A = function() {
              window.console && console.warn('You called MathQuill.interfaceVersion(1); to specify the interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:\n\n    MathQuill = MathQuill.getInterface(1);\n    // now MathQuill.MathField() works like it used to\n\nSee also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide');
            })(), L;
          }, L.getInterface = Q;
          var _ = Q.MIN = 1, N = Q.MAX = 2;
          function Q(e4) {
            if (!(_ <= e4 && e4 <= N))
              throw "Only interface versions between " + _ + " and " + N + " supported. You specified: " + e4;
            function n4(e5) {
              if (!e5 || !e5.nodeType)
                return null;
              var t4 = g(e5).children(".mq-root-block").attr(r3), n5 = t4 && b.byId[t4].controller;
              return n5 ? i3[n5.KIND_OF_MQ](n5) : null;
            }
            var i3 = {};
            function o2(e5, t4) {
              for (var n5 in t4 && t4.handlers && (t4.handlers = { fns: t4.handlers, APIClasses: i3 }), t4)
                if (t4.hasOwnProperty(n5)) {
                  var r4 = t4[n5], o3 = S[n5];
                  e5[n5] = o3 ? o3(r4) : r4;
                }
            }
            n4.L = h, n4.R = 1, n4.saneKeyboardEvents = z, n4.config = function(e5) {
              return o2(j.p, e5), this;
            }, n4.registerEmbed = function(e5, t4) {
              if (!/^[a-z][a-z0-9]*$/i.test(e5))
                throw "Embed name must start with letter and be only letters and digits";
              E[e5] = t4;
            };
            var a2 = i3.AbstractMathQuill = d(D, function(e5) {
              e5.init = function(e6) {
                this.__controller = e6, this.__options = e6.options, this.id = e6.id, this.data = e6.data;
              }, e5.__mathquillify = function(e6) {
                var t4 = this.__controller, n5 = t4.root, i4 = t4.container;
                t4.createTextarea();
                var o3 = i4.addClass(e6).contents().detach();
                n5.jQ = g('<span class="mq-root-block"/>').attr(r3, n5.id).appendTo(i4), this.latex(o3.text()), this.revert = function() {
                  return i4.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(o3);
                };
              }, e5.config = function(e6) {
                return o2(this.__options, e6), this;
              }, e5.el = function() {
                return this.__controller.container[0];
              }, e5.text = function() {
                return this.__controller.exportText();
              }, e5.latex = function(e6) {
                return arguments.length > 0 ? (this.__controller.renderLatexMath(e6), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
              }, e5.html = function() {
                return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "").replace(/ mq-hasCursor|mq-hasCursor ?/, "").replace(/ class=(""|(?= |>))/g, "");
              }, e5.reflow = function() {
                return this.__controller.root.postOrder("reflow"), this;
              };
            });
            for (var l2 in n4.prototype = a2.prototype, i3.EditableField = d(a2, function(e5, n5) {
              e5.__mathquillify = function() {
                return n5.__mathquillify.apply(this, arguments), this.__controller.editable = true, this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents(), this;
              }, e5.focus = function() {
                return this.__controller.textarea.focus(), this;
              }, e5.blur = function() {
                return this.__controller.textarea.blur(), this;
              }, e5.write = function(e6) {
                return this.__controller.writeLatex(e6), this.__controller.scrollHoriz(), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this;
              }, e5.empty = function() {
                var e6 = this.__controller.root, t4 = this.__controller.cursor;
                return e6.eachChild("postOrder", "dispose"), e6.ends[h] = e6.ends[1] = 0, e6.jQ.empty(), delete t4.selection, t4.insAtRightEnd(e6), this;
              }, e5.cmd = function(e6) {
                var t4 = this.__controller.notify(), n6 = t4.cursor;
                if (/^\\[a-z]+$/i.test(e6) && !n6.isTooDeep()) {
                  e6 = e6.slice(1);
                  var r4 = q[e6];
                  r4 && (e6 = r4(e6), n6.selection && e6.replaces(n6.replaceSelection()), e6.createLeftOf(n6.show()), this.__controller.scrollHoriz());
                } else
                  n6.parent.write(n6, e6);
                return t4.blurred && n6.hide().parent.blur(), this;
              }, e5.select = function() {
                var e6 = this.__controller;
                for (e6.notify("move").cursor.insAtRightEnd(e6.root); e6.cursor[h]; )
                  e6.selectLeft();
                return this;
              }, e5.clearSelection = function() {
                return this.__controller.cursor.clearSelection(), this;
              }, e5.moveToDirEnd = function(e6) {
                return this.__controller.notify("move").cursor.insAtDirEnd(e6, this.__controller.root), this;
              }, e5.moveToLeftEnd = function() {
                return this.moveToDirEnd(h);
              }, e5.moveToRightEnd = function() {
                return this.moveToDirEnd(1);
              }, e5.keystroke = function(e6) {
                e6 = e6.replace(/^\s+|\s+$/g, "").split(/\s+/);
                for (var t4 = 0; t4 < e6.length; t4 += 1)
                  this.__controller.keystroke(e6[t4], { preventDefault: s });
                return this;
              }, e5.typedText = function(e6) {
                for (var t4 = 0; t4 < e6.length; t4 += 1)
                  this.__controller.typedText(e6.charAt(t4));
                return this;
              }, e5.dropEmbedded = function(e6, t4, n6) {
                var r4 = e6 - g(window).scrollLeft(), i4 = t4 - g(window).scrollTop(), o3 = document.elementFromPoint(r4, i4);
                this.__controller.seek(g(o3), e6, t4), ye().setOptions(n6).createLeftOf(this.__controller.cursor);
              }, e5.clickAt = function(e6, n6, r4) {
                r4 = r4 || document.elementFromPoint(e6, n6);
                var i4 = this.__controller, o3 = i4.root;
                return t3.contains(o3.jQ[0], r4) || (r4 = o3.jQ[0]), i4.seek(g(r4), e6 + pageXOffset, n6 + pageYOffset), i4.blurred && this.focus(), this;
              }, e5.ignoreNextMousedown = function(e6) {
                return this.__controller.cursor.options.ignoreNextMousedown = e6, this;
              };
            }), n4.EditableField = function() {
              throw "wtf don't call me, I'm 'abstract'";
            }, n4.EditableField.prototype = i3.EditableField.prototype, O)
              !function(t4, r4) {
                var o3 = i3[t4] = r4(i3);
                n4[t4] = function(r5, i4) {
                  var s2 = n4(r5);
                  if (s2 instanceof o3 || !r5 || !r5.nodeType)
                    return s2;
                  var a3 = C(o3.RootBlock(), g(r5), j());
                  return a3.KIND_OF_MQ = t4, o3(a3).__mathquillify(i4, e4);
                }, n4[t4].prototype = o3.prototype;
              }(l2, O[l2]);
            return n4;
          }
          L.noConflict = function() {
            return window.MathQuill = R, L;
          };
          var R = window.MathQuill;
          function I(e4) {
            for (var t4 = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" "), n4 = 0; n4 < t4.length; n4 += 1)
              !function(t5) {
                e4[t5] = function(e5) {
                  this.controller.handle(t5, e5);
                };
              }(t4[n4]);
            e4.reflow = function() {
              this.controller.handle("reflow"), this.controller.handle("edited"), this.controller.handle("edit");
            };
          }
          window.MathQuill = L;
          var M, z = (M = { 8: "Backspace", 9: "Tab", 10: "Enter", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Esc", 32: "Spacebar", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 45: "Insert", 46: "Del", 144: "NumLock" }, function(e4, n4) {
            var r4, i3 = null, o2 = null, a2 = t3(e4), l2 = t3(n4.container || a2), c2 = s;
            function u2(e5) {
              c2 = e5, clearTimeout(r4), r4 = setTimeout(e5);
            }
            function f2(e5) {
              u2(function(t4) {
                c2 = s, clearTimeout(r4), e5(t4);
              });
            }
            l2.bind("keydown keypress input keyup focusout paste", function(e5) {
              c2(e5);
            });
            var p2 = false;
            function d2() {
              n4.keystroke(function(e5) {
                var t4, n5 = e5.which || e5.keyCode, r5 = M[n5], i4 = [];
                return e5.ctrlKey && i4.push("Ctrl"), e5.originalEvent && e5.originalEvent.metaKey && i4.push("Meta"), e5.altKey && i4.push("Alt"), e5.shiftKey && i4.push("Shift"), t4 = r5 || String.fromCharCode(n5), i4.length || r5 ? (i4.push(t4), i4.join("-")) : t4;
              }(i3), i3);
            }
            function h2() {
              if (!("selectionStart" in (e5 = a2[0])) || e5.selectionStart === e5.selectionEnd) {
                var e5, t4 = a2.val();
                1 === t4.length ? (a2.val(""), n4.typedText(t4)) : t4 && a2[0].select && a2[0].select();
              }
            }
            function m2() {
              var e5 = a2.val();
              a2.val(""), e5 && n4.paste(e5);
            }
            return l2.bind({ keydown: function(e5) {
              i3 = e5, o2 = null, p2 && f2(function(e6) {
                e6 && "focusout" === e6.type || !a2[0].select || a2[0].select();
              }), d2();
            }, keypress: function(e5) {
              i3 && o2 && d2(), o2 = e5, u2(h2);
            }, keyup: function(e5) {
              i3 && !o2 && u2(h2);
            }, focusout: function() {
              i3 = o2 = null;
            }, cut: function() {
              f2(function() {
                n4.cut();
              });
            }, copy: function() {
              f2(function() {
                n4.copy();
              });
            }, paste: function(e5) {
              a2.focus(), u2(m2);
            } }), { select: function(e5) {
              c2(), c2 = s, clearTimeout(r4), a2.val(e5), e5 && a2[0].select && a2[0].select(), p2 = !!e5;
            } };
          }), P = d(function(e4, t4, n4) {
            function r4(e5, t5) {
              throw "Parse Error: " + t5 + " at " + (e5 ? "'" + e5 + "'" : "EOF");
            }
            e4.init = function(e5) {
              this._ = e5;
            }, e4.parse = function(e5) {
              return this.skip(s2)._("" + e5, function(e6, t5) {
                return t5;
              }, r4);
            }, e4.or = function(e5) {
              p("or is passed a parser", e5 instanceof n4);
              var t5 = this;
              return n4(function(n5, r5, i4) {
                return t5._(n5, r5, function(t6) {
                  return e5._(n5, r5, i4);
                });
              });
            }, e4.then = function(e5) {
              var t5 = this;
              return n4(function(r5, i4, o3) {
                return t5._(r5, function(t6, r6) {
                  var s3 = e5 instanceof n4 ? e5 : e5(r6);
                  return p("a parser is returned", s3 instanceof n4), s3._(t6, i4, o3);
                }, o3);
              });
            }, e4.many = function() {
              var e5 = this;
              return n4(function(t5, n5, r5) {
                for (var i4 = []; e5._(t5, o3, s3); )
                  ;
                return n5(t5, i4);
                function o3(e6, n6) {
                  return t5 = e6, i4.push(n6), true;
                }
                function s3() {
                  return false;
                }
              });
            }, e4.times = function(e5, t5) {
              arguments.length < 2 && (t5 = e5);
              var r5 = this;
              return n4(function(n5, i4, o3) {
                for (var s3, a2 = [], l2 = true, c2 = 0; c2 < e5; c2 += 1)
                  if (!(l2 = r5._(n5, u2, f2)))
                    return o3(n5, s3);
                for (; c2 < t5 && l2; c2 += 1)
                  l2 = r5._(n5, u2, p2);
                return i4(n5, a2);
                function u2(e6, t6) {
                  return a2.push(t6), n5 = e6, true;
                }
                function f2(e6, t6) {
                  return s3 = t6, n5 = e6, false;
                }
                function p2(e6, t6) {
                  return false;
                }
              });
            }, e4.result = function(e5) {
              return this.then(o2(e5));
            }, e4.atMost = function(e5) {
              return this.times(0, e5);
            }, e4.atLeast = function(e5) {
              var t5 = this;
              return t5.times(e5).then(function(e6) {
                return t5.many().map(function(t6) {
                  return e6.concat(t6);
                });
              });
            }, e4.map = function(e5) {
              return this.then(function(t5) {
                return o2(e5(t5));
              });
            }, e4.skip = function(e5) {
              return this.then(function(t5) {
                return e5.result(t5);
              });
            }, this.string = function(e5) {
              var t5 = e5.length, r5 = "expected '" + e5 + "'";
              return n4(function(n5, i4, o3) {
                var s3 = n5.slice(0, t5);
                return s3 === e5 ? i4(n5.slice(t5), s3) : o3(n5, r5);
              });
            };
            var i3 = this.regex = function(e5) {
              p("regexp parser is anchored", "^" === e5.toString().charAt(1));
              var t5 = "expected " + e5;
              return n4(function(n5, r5, i4) {
                var o3 = e5.exec(n5);
                if (o3) {
                  var s3 = o3[0];
                  return r5(n5.slice(s3.length), s3);
                }
                return i4(n5, t5);
              });
            }, o2 = n4.succeed = function(e5) {
              return n4(function(t5, n5) {
                return n5(t5, e5);
              });
            }, s2 = (n4.fail = function(e5) {
              return n4(function(t5, n5, r5) {
                return r5(t5, e5);
              });
            }, n4.letter = i3(/^[a-z]/i), n4.letters = i3(/^[a-z]*/i), n4.digit = i3(/^[0-9]/), n4.digits = i3(/^[0-9]*/), n4.whitespace = i3(/^\s+/), n4.optWhitespace = i3(/^\s*/), n4.any = n4(function(e5, t5, n5) {
              return e5 ? t5(e5.slice(1), e5.charAt(0)) : n5(e5, "expected any character");
            }), n4.all = n4(function(e5, t5, n5) {
              return t5("", e5);
            }), n4.eof = n4(function(e5, t5, n5) {
              return e5 ? n5(e5, "expected EOF") : t5(e5, e5);
            }));
          });
          C.open(function(e4) {
            e4.focusBlurEvents = function() {
              var e5, t4 = this, n4 = t4.root, r4 = t4.cursor;
              function i3() {
                clearTimeout(e5), r4.selection && r4.selection.jQ.addClass("mq-blur"), o2();
              }
              function o2() {
                r4.hide().parent.blur(), t4.container.removeClass("mq-focused"), g(window).unbind("blur", i3);
              }
              t4.textarea.focus(function() {
                t4.blurred = false, clearTimeout(e5), t4.container.addClass("mq-focused"), r4.parent || r4.insAtRightEnd(n4), r4.selection ? (r4.selection.jQ.removeClass("mq-blur"), t4.selectionChanged()) : r4.show();
              }).blur(function() {
                t4.blurred = true, e5 = setTimeout(function() {
                  n4.postOrder("intentionalBlur"), r4.clearSelection().endSelection(), o2();
                }), g(window).bind("blur", i3);
              }), t4.blurred = true, r4.hide().parent.blur();
            };
          }), C.open(function(e4, t4) {
            e4.exportText = function() {
              return this.root.foldChildren("", function(e5, t5) {
                return e5 + t5.text();
              });
            };
          }), C.open(function(t4) {
            j.p.ignoreNextMousedown = s, t4.delegateMouseEvents = function() {
              var t5 = this.root.jQ;
              this.container.bind("mousedown.mathquill", function(n4) {
                var i3, o2 = g(n4.target).closest(".mq-root-block"), a2 = b.byId[o2.attr(r3) || t5.attr(r3)].controller, l2 = a2.cursor, c2 = l2.blink, u2 = a2.textareaSpan, f2 = a2.textarea;
                function p2(e4) {
                  i3 = g(e4.target);
                }
                function d2(t6) {
                  l2.anticursor || l2.startSelection(), a2.seek(i3, t6.pageX, t6.pageY).cursor.select(), i3 = e3;
                }
                n4.preventDefault(), n4.target.unselectable = true, l2.options.ignoreNextMousedown(n4) || (l2.options.ignoreNextMousedown = s, a2.blurred && (a2.editable || o2.prepend(u2), f2.focus()), l2.blink = s, a2.seek(g(n4.target), n4.pageX, n4.pageY).cursor.startSelection(), o2.mousemove(p2), g(n4.target.ownerDocument).mousemove(d2).mouseup(function e4(t6) {
                  l2.blink = c2, l2.selection || (a2.editable ? l2.show() : u2.detach()), o2.unbind("mousemove", p2), g(t6.target.ownerDocument).unbind("mousemove", d2).unbind("mouseup", e4);
                }));
              });
            };
          }), C.open(function(e4) {
            e4.seek = function(e5, t4, i3) {
              var o2 = this.notify("select").cursor;
              if (e5) {
                var s2 = e5.attr(r3) || e5.attr(n3);
                if (!s2) {
                  var a2 = e5.parent();
                  s2 = a2.attr(r3) || a2.attr(n3);
                }
              }
              var l2 = s2 ? b.byId[s2] : this.root;
              return p("nodeId is the id of some Node that exists", l2), o2.clearSelection().show(), l2.seek(t4, o2), this.scrollHoriz(), this;
            };
          }), C.open(function(e4) {
            e4.keystroke = function(e5, t4) {
              this.cursor.parent.keystroke(e5, t4, this);
            };
          }), b.open(function(e4) {
            e4.keystroke = function(e5, t4, n4) {
              var r4 = n4.cursor;
              switch (e5) {
                case "Ctrl-Shift-Backspace":
                case "Ctrl-Backspace":
                  n4.ctrlDeleteDir(h);
                  break;
                case "Shift-Backspace":
                case "Backspace":
                  n4.backspace();
                  break;
                case "Esc":
                case "Tab":
                  return void n4.escapeDir(1, e5, t4);
                case "Shift-Tab":
                case "Shift-Esc":
                  return void n4.escapeDir(h, e5, t4);
                case "End":
                  n4.notify("move").cursor.insAtRightEnd(r4.parent);
                  break;
                case "Ctrl-End":
                  n4.notify("move").cursor.insAtRightEnd(n4.root);
                  break;
                case "Shift-End":
                  for (; r4[1]; )
                    n4.selectRight();
                  break;
                case "Ctrl-Shift-End":
                  for (; r4[1] || r4.parent !== n4.root; )
                    n4.selectRight();
                  break;
                case "Home":
                  n4.notify("move").cursor.insAtLeftEnd(r4.parent);
                  break;
                case "Ctrl-Home":
                  n4.notify("move").cursor.insAtLeftEnd(n4.root);
                  break;
                case "Shift-Home":
                  for (; r4[h]; )
                    n4.selectLeft();
                  break;
                case "Ctrl-Shift-Home":
                  for (; r4[h] || r4.parent !== n4.root; )
                    n4.selectLeft();
                  break;
                case "Left":
                  n4.moveLeft();
                  break;
                case "Shift-Left":
                  n4.selectLeft();
                  break;
                case "Ctrl-Left":
                  break;
                case "Right":
                  n4.moveRight();
                  break;
                case "Shift-Right":
                  n4.selectRight();
                  break;
                case "Ctrl-Right":
                  break;
                case "Up":
                  n4.moveUp();
                  break;
                case "Down":
                  n4.moveDown();
                  break;
                case "Shift-Up":
                  if (r4[h])
                    for (; r4[h]; )
                      n4.selectLeft();
                  else
                    n4.selectLeft();
                case "Shift-Down":
                  if (r4[1])
                    for (; r4[1]; )
                      n4.selectRight();
                  else
                    n4.selectRight();
                case "Ctrl-Up":
                case "Ctrl-Down":
                  break;
                case "Ctrl-Shift-Del":
                case "Ctrl-Del":
                  n4.ctrlDeleteDir(1);
                  break;
                case "Shift-Del":
                case "Del":
                  n4.deleteForward();
                  break;
                case "Meta-A":
                case "Ctrl-A":
                  for (n4.notify("move").cursor.insAtRightEnd(n4.root); r4[h]; )
                    n4.selectLeft();
                  break;
                default:
                  return;
              }
              t4.preventDefault(), n4.scrollHoriz();
            }, e4.moveOutOf = e4.moveTowards = e4.deleteOutOf = e4.deleteTowards = e4.unselectInto = e4.selectOutOf = e4.selectTowards = function() {
              p("overridden or never called on this node");
            };
          }), C.open(function(e4) {
            function t4(e5, t5) {
              var n4 = e5.notify("upDown").cursor, r4 = t5 + "Into", i3 = t5 + "OutOf";
              return n4[1][r4] ? n4.insAtLeftEnd(n4[1][r4]) : n4[h][r4] ? n4.insAtRightEnd(n4[h][r4]) : n4.parent.bubble(function(e6) {
                var t6 = e6[i3];
                if (t6 && ("function" == typeof t6 && (t6 = e6[i3](n4)), t6 instanceof b && n4.jumpUpDown(e6, t6), true !== t6))
                  return false;
              }), e5;
            }
            this.onNotify(function(e5) {
              "move" !== e5 && "upDown" !== e5 || this.show().clearSelection();
            }), e4.escapeDir = function(e5, t5, n4) {
              m(e5);
              var r4 = this.cursor;
              if (r4.parent !== this.root && n4.preventDefault(), r4.parent !== this.root)
                return r4.parent.moveOutOf(e5, r4), this.notify("move");
            }, S.leftRightIntoCmdGoes = function(e5) {
              if (e5 && "up" !== e5 && "down" !== e5)
                throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + e5 + '"';
              return e5;
            }, e4.moveDir = function(e5) {
              m(e5);
              var t5 = this.cursor, n4 = t5.options.leftRightIntoCmdGoes;
              return t5.selection ? t5.insDirOf(e5, t5.selection.ends[e5]) : t5[e5] ? t5[e5].moveTowards(e5, t5, n4) : t5.parent.moveOutOf(e5, t5, n4), this.notify("move");
            }, e4.moveLeft = function() {
              return this.moveDir(h);
            }, e4.moveRight = function() {
              return this.moveDir(1);
            }, e4.moveUp = function() {
              return t4(this, "up");
            }, e4.moveDown = function() {
              return t4(this, "down");
            }, this.onNotify(function(e5) {
              "upDown" !== e5 && (this.upDownCache = {});
            }), this.onNotify(function(e5) {
              "edit" === e5 && this.show().deleteSelection();
            }), e4.deleteDir = function(e5) {
              m(e5);
              var t5 = this.cursor, n4 = t5.selection;
              return this.notify("edit"), n4 || (t5[e5] ? t5[e5].deleteTowards(e5, t5) : t5.parent.deleteOutOf(e5, t5)), t5[h].siblingDeleted && t5[h].siblingDeleted(t5.options, 1), t5[1].siblingDeleted && t5[1].siblingDeleted(t5.options, h), t5.parent.bubble("reflow"), this;
            }, e4.ctrlDeleteDir = function(e5) {
              m(e5);
              var t5 = this.cursor;
              return !t5[e5] || t5.selection ? this.deleteDir(e5) : (this.notify("edit"), e5 === h ? x(t5.parent.ends[h], t5[h]).remove() : x(t5[1], t5.parent.ends[1]).remove(), t5.insAtDirEnd(e5, t5.parent), t5[h].siblingDeleted && t5[h].siblingDeleted(t5.options, 1), t5[1].siblingDeleted && t5[1].siblingDeleted(t5.options, h), t5.parent.bubble("reflow"), this);
            }, e4.backspace = function() {
              return this.deleteDir(h);
            }, e4.deleteForward = function() {
              return this.deleteDir(1);
            }, this.onNotify(function(e5) {
              "select" !== e5 && this.endSelection();
            }), e4.selectDir = function(e5) {
              var t5 = this.notify("select").cursor, n4 = t5.selection;
              m(e5), t5.anticursor || t5.startSelection();
              var r4 = t5[e5];
              r4 ? n4 && n4.ends[e5] === r4 && t5.anticursor[-e5] !== r4 ? r4.unselectInto(e5, t5) : r4.selectTowards(e5, t5) : t5.parent.selectOutOf(e5, t5), t5.clearSelection(), t5.select() || t5.show();
            }, e4.selectLeft = function() {
              return this.selectDir(h);
            }, e4.selectRight = function() {
              return this.selectDir(1);
            };
          }), C.open(function(n4) {
            j.p.substituteTextarea = function() {
              return g("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0];
            }, n4.createTextarea = function() {
              var e4 = this.textareaSpan = g('<span class="mq-textarea"></span>'), t4 = this.options.substituteTextarea();
              if (!t4.nodeType)
                throw "substituteTextarea() must return a DOM element, got " + t4;
              t4 = this.textarea = g(t4).appendTo(e4);
              var n5 = this;
              n5.cursor.selectionChanged = function() {
                n5.selectionChanged();
              };
            }, n4.selectionChanged = function() {
              var t4 = this;
              ne(t4.container[0]), t4.textareaSelectionTimeout === e3 && (t4.textareaSelectionTimeout = setTimeout(function() {
                t4.setTextareaSelection();
              }));
            }, n4.setTextareaSelection = function() {
              this.textareaSelectionTimeout = e3;
              var t4 = "";
              this.cursor.selection && (t4 = this.cursor.selection.join("latex"), this.options.statelessClipboard && (t4 = "$" + t4 + "$")), this.selectFn(t4);
            }, n4.staticMathTextareaEvents = function() {
              var e4 = this, n5 = (e4.root, e4.cursor), r4 = e4.textarea, i3 = e4.textareaSpan;
              function o2() {
                i3.detach(), e4.blurred = true;
              }
              this.container.prepend(t3('<span class="mq-selectable">').text("$" + e4.exportLatex() + "$")), e4.blurred = true, r4.bind("cut paste", false).bind("copy", function() {
                e4.setTextareaSelection();
              }).focus(function() {
                e4.blurred = false;
              }).blur(function() {
                n5.selection && n5.selection.clear(), setTimeout(o2);
              }), e4.selectFn = function(e5) {
                r4.val(e5), e5 && r4.select();
              };
            }, j.p.substituteKeyboardEvents = z, n4.editablesTextareaEvents = function() {
              var e4 = this.textarea, t4 = this.textareaSpan, n5 = this.options.substituteKeyboardEvents(e4, this);
              this.selectFn = function(e5) {
                n5.select(e5);
              }, this.container.prepend(t4), this.focusBlurEvents();
            }, n4.typedText = function(e4) {
              if ("\n" === e4)
                return this.handle("enter");
              var t4 = this.notify().cursor;
              t4.parent.write(t4, e4), this.scrollHoriz();
            }, n4.cut = function() {
              var e4 = this, t4 = e4.cursor;
              t4.selection && setTimeout(function() {
                e4.notify("edit"), t4.parent.bubble("reflow");
              });
            }, n4.copy = function() {
              this.setTextareaSelection();
            }, n4.paste = function(e4) {
              this.options.statelessClipboard && (e4 = "$" === e4.slice(0, 1) && "$" === e4.slice(-1) ? e4.slice(1, -1) : "\\text{" + e4 + "}"), this.writeLatex(e4).cursor.show();
            };
          });
          var H = function() {
            function e4(e5) {
              for (var t5 = e5[0] || U(), n5 = 1; n5 < e5.length; n5 += 1)
                e5[n5].children().adopt(t5, t5.ends[1], 0);
              return t5;
            }
            var t4 = P.string, n4 = P.regex, r4 = P.letter, i3 = P.any, o2 = P.optWhitespace, s2 = P.succeed, a2 = P.fail, l2 = r4.map(function(e5) {
              return we(e5);
            }), c2 = n4(/^[^${}\\_^]/).map(function(e5) {
              return W(e5);
            }), u2 = n4(/^[^\\a-eg-zA-Z]/).or(t4("\\").then(n4(/^[a-z]+/i).or(n4(/^\s+/).result(" ")).or(i3))).then(function(e5) {
              var t5 = q[e5];
              return t5 ? t5(e5).parser() : a2("unknown command: \\" + e5);
            }).or(l2).or(c2), f2 = t4("{").then(function() {
              return d2;
            }).skip(t4("}")), p2 = o2.then(f2.or(u2.map(function(e5) {
              var t5 = U();
              return e5.adopt(t5, 0, 0), t5;
            }))), d2 = p2.many().map(e4).skip(o2), h2 = t4("[").then(p2.then(function(e5) {
              return "]" !== e5.join("latex") ? s2(e5) : a2();
            }).many().map(e4).skip(o2)).skip(t4("]")), m2 = d2;
            return m2.block = p2, m2.optBlock = h2, m2;
          }();
          C.open(function(t4, n4) {
            t4.exportLatex = function() {
              return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
            }, S.maxDepth = function(t5) {
              return "number" == typeof t5 ? t5 : e3;
            }, t4.writeLatex = function(e4) {
              var t5 = this.notify("edit").cursor, n5 = P.all, r4 = P.eof, i3 = H.skip(r4).or(n5.result(false)).parse(e4);
              return i3 && !i3.isEmpty() && i3.prepareInsertionAt(t5) && (i3.children().adopt(t5.parent, t5[h], t5[1]), i3.jQize().insertBefore(t5.jQ), t5[h] = i3.ends[1], i3.finalizeInsert(t5.options, t5), i3.ends[1][1].siblingCreated && i3.ends[1][1].siblingCreated(t5.options, h), i3.ends[h][h].siblingCreated && i3.ends[h][h].siblingCreated(t5.options, 1), t5.parent.bubble("reflow")), this;
            }, t4.renderLatexMath = function(e4) {
              var t5 = this.root, n5 = this.cursor, r4 = (n5.options, t5.jQ), i3 = P.all, o2 = P.eof, s2 = H.skip(o2).or(i3.result(false)).parse(e4);
              if (t5.eachChild("postOrder", "dispose"), t5.ends[h] = t5.ends[1] = 0, s2 && s2.prepareInsertionAt(n5)) {
                s2.children().adopt(t5, 0, 0);
                var a2 = s2.join("html");
                r4.html(a2), t5.jQize(r4.children()), t5.finalizeInsert(n5.options);
              } else
                r4.empty();
              delete n5.selection, n5.insAtRightEnd(t5);
            }, t4.renderLatexText = function(e4) {
              var t5 = this.root, n5 = this.cursor;
              t5.jQ.children().slice(1).remove(), t5.eachChild("postOrder", "dispose"), t5.ends[h] = t5.ends[1] = 0, delete n5.selection, n5.show().insAtRightEnd(t5);
              var r4 = P.regex, i3 = P.string, o2 = P.eof, s2 = P.all, a2 = i3("$").then(H).skip(i3("$").or(o2)).map(function(e5) {
                var t6 = K(n5);
                t6.createBlocks();
                var r5 = t6.ends[h];
                return e5.children().adopt(r5, 0, 0), t6;
              }), l2 = i3("\\$").result("$").or(r4(/^[^$]/)).map(W), c2 = a2.or(l2).many().skip(o2).or(s2.result(false)).parse(e4);
              if (c2) {
                for (var u2 = 0; u2 < c2.length; u2 += 1)
                  c2[u2].adopt(t5, t5.ends[1], 0);
                t5.jQize().appendTo(t5.jQ), t5.finalizeInsert(n5.options);
              }
            };
          }), C.open(function(e4) {
            e4.scrollHoriz = function() {
              var e5 = this.cursor, t4 = e5.selection, n4 = this.root.jQ[0].getBoundingClientRect();
              if (t4) {
                var r4 = t4.jQ[0].getBoundingClientRect(), i3 = r4.left - (n4.left + 20), o2 = r4.right - (n4.right - 20);
                if (t4.ends[h] === e5[1])
                  if (i3 < 0)
                    a2 = i3;
                  else {
                    if (!(o2 > 0))
                      return;
                    a2 = r4.left - o2 < n4.left + 20 ? i3 : o2;
                  }
                else if (o2 > 0)
                  a2 = o2;
                else {
                  if (!(i3 < 0))
                    return;
                  a2 = r4.right - i3 > n4.right - 20 ? o2 : i3;
                }
              } else {
                var s2 = e5.jQ[0].getBoundingClientRect().left;
                if (s2 > n4.right - 20)
                  var a2 = s2 - (n4.right - 20);
                else {
                  if (!(s2 < n4.left + 20))
                    return;
                  a2 = s2 - (n4.left + 20);
                }
              }
              this.root.jQ.stop().animate({ scrollLeft: "+=" + a2 }, 100);
            };
          });
          var F = d(b, function(t4, n4) {
            t4.finalizeInsert = function(e4, t5) {
              var n5 = this;
              n5.postOrder("finalizeTree", e4), n5.postOrder("contactWeld", t5), n5.postOrder("blur"), n5.postOrder("reflow"), n5[1].siblingCreated && n5[1].siblingCreated(e4, h), n5[h].siblingCreated && n5[h].siblingCreated(e4, 1), n5.bubble("reflow");
            }, t4.prepareInsertionAt = function(t5) {
              var n5 = t5.options.maxDepth;
              if (n5 !== e3) {
                var r4 = t5.depth();
                if (r4 > n5)
                  return false;
                this.removeNodesDeeperThan(n5 - r4);
              }
              return true;
            }, t4.removeNodesDeeperThan = function(e4) {
              for (var t5, n5 = 0, r4 = [[this, n5]]; r4.length; )
                (t5 = r4.shift())[0].children().each(function(i3) {
                  var o2 = i3 instanceof U ? 1 : 0;
                  (n5 = t5[1] + o2) <= e4 ? r4.push([i3, n5]) : (o2 ? i3.children() : i3).remove();
                });
            };
          }), B = d(F, function(e4, t4) {
            e4.init = function(e5, n4, r4) {
              var i3 = this;
              t4.init.call(i3), i3.ctrlSeq || (i3.ctrlSeq = e5), n4 && (i3.htmlTemplate = n4), r4 && (i3.textTemplate = r4);
            }, e4.replaces = function(e5) {
              e5.disown(), this.replacedFragment = e5;
            }, e4.isEmpty = function() {
              return this.foldChildren(true, function(e5, t5) {
                return e5 && t5.isEmpty();
              });
            }, e4.parser = function() {
              var e5 = H.block, t5 = this;
              return e5.times(t5.numBlocks()).map(function(e6) {
                t5.blocks = e6;
                for (var n4 = 0; n4 < e6.length; n4 += 1)
                  e6[n4].adopt(t5, t5.ends[1], 0);
                return t5;
              });
            }, e4.createLeftOf = function(e5) {
              var n4 = this, r4 = n4.replacedFragment;
              n4.createBlocks(), t4.createLeftOf.call(n4, e5), r4 && (r4.adopt(n4.ends[h], 0, 0), r4.jQ.appendTo(n4.ends[h].jQ), n4.placeCursor(e5), n4.prepareInsertionAt(e5)), n4.finalizeInsert(e5.options), n4.placeCursor(e5);
            }, e4.createBlocks = function() {
              for (var e5 = this, t5 = e5.numBlocks(), n4 = e5.blocks = Array(t5), r4 = 0; r4 < t5; r4 += 1)
                (n4[r4] = U()).adopt(e5, e5.ends[1], 0);
            }, e4.placeCursor = function(e5) {
              e5.insAtRightEnd(this.foldChildren(this.ends[h], function(e6, t5) {
                return e6.isEmpty() ? e6 : t5;
              }));
            }, e4.moveTowards = function(e5, t5, n4) {
              var r4 = n4 && this[n4 + "Into"];
              t5.insAtDirEnd(-e5, r4 || this.ends[-e5]);
            }, e4.deleteTowards = function(e5, t5) {
              this.isEmpty() ? t5[e5] = this.remove()[e5] : this.moveTowards(e5, t5, null);
            }, e4.selectTowards = function(e5, t5) {
              t5[-e5] = this, t5[e5] = this[e5];
            }, e4.selectChildren = function() {
              return k(this, this);
            }, e4.unselectInto = function(e5, t5) {
              t5.insAtDirEnd(-e5, t5.anticursor.ancestors[this.id]);
            }, e4.seek = function(e5, t5) {
              function n4(e6) {
                var t6 = {};
                return t6[h] = e6.jQ.offset().left, t6[1] = t6[h] + e6.jQ.outerWidth(), t6;
              }
              var r4 = this, i3 = n4(r4);
              if (e5 < i3[h])
                return t5.insLeftOf(r4);
              if (e5 > i3[1])
                return t5.insRightOf(r4);
              var o2 = i3[h];
              r4.eachChild(function(s2) {
                var a2 = n4(s2);
                return e5 < a2[h] ? (e5 - o2 < a2[h] - e5 ? s2[h] ? t5.insAtRightEnd(s2[h]) : t5.insLeftOf(r4) : t5.insAtLeftEnd(s2), false) : e5 > a2[1] ? void (s2[1] ? o2 = a2[1] : i3[1] - e5 < e5 - a2[1] ? t5.insRightOf(r4) : t5.insAtRightEnd(s2)) : (s2.seek(e5, t5), false);
              });
            }, e4.numBlocks = function() {
              var e5 = this.htmlTemplate.match(/&\d+/g);
              return e5 ? e5.length : 0;
            }, e4.html = function() {
              var e5 = this, t5 = e5.blocks, n4 = " mathquill-command-id=" + e5.id, r4 = e5.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
              p("no unmatched angle brackets", r4.join("") === this.htmlTemplate);
              for (var i3 = 0, o2 = r4[0]; o2; o2 = r4[i3 += 1])
                if ("/>" === o2.slice(-2))
                  r4[i3] = o2.slice(0, -2) + n4 + "/>";
                else if ("<" === o2.charAt(0)) {
                  p("not an unmatched top-level close tag", "/" !== o2.charAt(1)), r4[i3] = o2.slice(0, -1) + n4 + ">";
                  var s2 = 1;
                  do {
                    p("no missing close tags", o2 = r4[i3 += 1]), "</" === o2.slice(0, 2) ? s2 -= 1 : "<" === o2.charAt(0) && "/>" !== o2.slice(-2) && (s2 += 1);
                  } while (s2 > 0);
                }
              return r4.join("").replace(/>&(\d+)/g, function(e6, n5) {
                return " mathquill-block-id=" + t5[n5].id + ">" + t5[n5].join("html");
              });
            }, e4.latex = function() {
              return this.foldChildren(this.ctrlSeq, function(e5, t5) {
                return e5 + "{" + (t5.latex() || " ") + "}";
              });
            }, e4.textTemplate = [""], e4.text = function() {
              var e5 = this, t5 = 0;
              return e5.foldChildren(e5.textTemplate[t5], function(n4, r4) {
                t5 += 1;
                var i3 = r4.text();
                return n4 && "(" === e5.textTemplate[t5] && "(" === i3[0] && ")" === i3.slice(-1) ? n4 + i3.slice(1, -1) + e5.textTemplate[t5] : n4 + i3 + (e5.textTemplate[t5] || "");
              });
            };
          }), $ = d(B, function(e4, t4) {
            e4.init = function(e5, n4, r4) {
              r4 || (r4 = e5 && e5.length > 1 ? e5.slice(1) : e5), t4.init.call(this, e5, n4, [r4]);
            }, e4.parser = function() {
              return P.succeed(this);
            }, e4.numBlocks = function() {
              return 0;
            }, e4.replaces = function(e5) {
              e5.remove();
            }, e4.createBlocks = s, e4.moveTowards = function(e5, t5) {
              t5.jQ.insDirOf(e5, this.jQ), t5[-e5] = this, t5[e5] = this[e5];
            }, e4.deleteTowards = function(e5, t5) {
              t5[e5] = this.remove()[e5];
            }, e4.seek = function(e5, t5) {
              e5 - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? t5.insLeftOf(this) : t5.insRightOf(this);
            }, e4.latex = function() {
              return this.ctrlSeq;
            }, e4.text = function() {
              return this.textTemplate;
            }, e4.placeCursor = s, e4.isEmpty = function() {
              return true;
            };
          }), W = d($, function(e4, t4) {
            e4.init = function(e5, n4) {
              t4.init.call(this, e5, "<span>" + (n4 || e5) + "</span>");
            };
          }), X = d($, function(e4, t4) {
            e4.init = function(e5, n4, r4) {
              t4.init.call(this, e5, '<span class="mq-binary-operator">' + n4 + "</span>", r4);
            };
          }), U = d(F, function(e4, t4) {
            e4.join = function(e5) {
              return this.foldChildren("", function(t5, n4) {
                return t5 + n4[e5]();
              });
            }, e4.html = function() {
              return this.join("html");
            }, e4.latex = function() {
              return this.join("latex");
            }, e4.text = function() {
              return this.ends[h] === this.ends[1] && 0 !== this.ends[h] ? this.ends[h].text() : this.join("text");
            }, e4.keystroke = function(e5, n4, r4) {
              return !r4.options.spaceBehavesLikeTab || "Spacebar" !== e5 && "Shift-Spacebar" !== e5 ? t4.keystroke.apply(this, arguments) : (n4.preventDefault(), void r4.escapeDir("Shift-Spacebar" === e5 ? h : 1, e5, n4));
            }, e4.moveOutOf = function(e5, t5, n4) {
              n4 && this.parent[n4 + "Into"] || !this[e5] ? t5.insDirOf(e5, this.parent) : t5.insAtDirEnd(-e5, this[e5]);
            }, e4.selectOutOf = function(e5, t5) {
              t5.insDirOf(e5, this.parent);
            }, e4.deleteOutOf = function(e5, t5) {
              t5.unwrapGramp();
            }, e4.seek = function(e5, t5) {
              var n4 = this.ends[1];
              if (!n4 || n4.jQ.offset().left + n4.jQ.outerWidth() < e5)
                return t5.insAtRightEnd(this);
              if (e5 < this.ends[h].jQ.offset().left)
                return t5.insAtLeftEnd(this);
              for (; e5 < n4.jQ.offset().left; )
                n4 = n4[h];
              return n4.seek(e5, t5);
            }, e4.chToCmd = function(e5, t5) {
              var n4;
              return e5.match(/^[a-eg-zA-Z]$/) ? we(e5) : /^\d$/.test(e5) ? xe(e5) : t5 && t5.typingSlashWritesDivisionSymbol && "/" === e5 ? q["÷"](e5) : t5 && t5.typingAsteriskWritesTimesSymbol && "*" === e5 ? q["×"](e5) : (n4 = w[e5] || q[e5]) ? n4(e5) : W(e5);
            }, e4.write = function(e5, t5) {
              var n4 = this.chToCmd(t5, e5.options);
              e5.selection && n4.replaces(e5.replaceSelection()), e5.isTooDeep() || n4.createLeftOf(e5.show());
            }, e4.focus = function() {
              return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
            }, e4.blur = function() {
              return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this;
            };
          });
          j.p.mouseEvents = true, O.StaticMath = function(e4) {
            return d(e4.AbstractMathQuill, function(t4, n4) {
              this.RootBlock = U, t4.__mathquillify = function(e5, t5) {
                return this.config(e5), n4.__mathquillify.call(this, "mq-math-mode"), this.__options.mouseEvents && (this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents()), this;
              }, t4.init = function() {
                n4.init.apply(this, arguments), this.__controller.root.postOrder("registerInnerField", this.innerFields = [], e4.MathField);
              }, t4.latex = function() {
                var t5 = n4.latex.apply(this, arguments);
                return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", this.innerFields = [], e4.MathField), t5;
              };
            });
          };
          var V = d(U, I);
          O.MathField = function(e4) {
            return d(e4.EditableField, function(e5, t4) {
              this.RootBlock = V, e5.__mathquillify = function(e6, n4) {
                return this.config(e6), n4 > 1 && (this.__controller.root.reflow = s), t4.__mathquillify.call(this, "mq-editable-field mq-math-mode"), delete this.__controller.root.reflow, this;
              };
            });
          };
          var G = d(b, function(e4, t4) {
            function n4(e5) {
              e5.jQ[0].normalize();
              var t5 = e5.jQ[0].firstChild;
              if (t5) {
                p("only node in TextBlock span is Text node", 3 === t5.nodeType);
                var n5 = Y(t5.data);
                return n5.jQadd(t5), e5.children().disown(), n5.adopt(e5, 0, 0);
              }
            }
            e4.ctrlSeq = "\\text", e4.replaces = function(e5) {
              e5 instanceof x ? this.replacedText = e5.remove().jQ.text() : "string" == typeof e5 && (this.replacedText = e5);
            }, e4.jQadd = function(e5) {
              t4.jQadd.call(this, e5), this.ends[h] && this.ends[h].jQadd(this.jQ[0].firstChild);
            }, e4.createLeftOf = function(e5) {
              var n5 = this;
              if (t4.createLeftOf.call(this, e5), n5[1].siblingCreated && n5[1].siblingCreated(e5.options, h), n5[h].siblingCreated && n5[h].siblingCreated(e5.options, 1), n5.bubble("reflow"), e5.insAtRightEnd(n5), n5.replacedText)
                for (var r4 = 0; r4 < n5.replacedText.length; r4 += 1)
                  n5.write(e5, n5.replacedText.charAt(r4));
            }, e4.parser = function() {
              var e5 = this, t5 = P.string, n5 = P.regex;
              return P.optWhitespace.then(t5("{")).then(n5(/^[^}]*/)).skip(t5("}")).map(function(t6) {
                return 0 === t6.length ? x() : (Y(t6).adopt(e5, 0, 0), e5);
              });
            }, e4.textContents = function() {
              return this.foldChildren("", function(e5, t5) {
                return e5 + t5.text;
              });
            }, e4.text = function() {
              return '"' + this.textContents() + '"';
            }, e4.latex = function() {
              var e5 = this.textContents();
              return 0 === e5.length ? "" : "\\text{" + e5.replace(/\\/g, "\\backslash ").replace(/[{}]/g, "\\$&") + "}";
            }, e4.html = function() {
              return '<span class="mq-text-mode" mathquill-command-id=' + this.id + ">" + this.textContents() + "</span>";
            }, e4.moveTowards = function(e5, t5) {
              t5.insAtDirEnd(-e5, this);
            }, e4.moveOutOf = function(e5, t5) {
              t5.insDirOf(e5, this);
            }, e4.unselectInto = e4.moveTowards, e4.selectTowards = B.prototype.selectTowards, e4.deleteTowards = B.prototype.deleteTowards, e4.selectOutOf = function(e5, t5) {
              t5.insDirOf(e5, this);
            }, e4.deleteOutOf = function(e5, t5) {
              this.isEmpty() && t5.insRightOf(this);
            }, e4.write = function(e5, n5) {
              if (e5.show().deleteSelection(), "$" !== n5)
                e5[h] ? e5[h].appendText(n5) : Y(n5).createLeftOf(e5);
              else if (this.isEmpty())
                e5.insRightOf(this), W("\\$", "$").createLeftOf(e5);
              else if (e5[1])
                if (e5[h]) {
                  var r4 = G(), i3 = this.ends[h];
                  i3.disown().jQ.detach(), i3.adopt(r4, 0, 0), e5.insLeftOf(this), t4.createLeftOf.call(r4, e5);
                } else
                  e5.insLeftOf(this);
              else
                e5.insRightOf(this);
            }, e4.seek = function(e5, t5) {
              t5.hide();
              var r4 = n4(this), i3 = this.jQ.width() / this.text.length, o2 = Math.round((e5 - this.jQ.offset().left) / i3);
              o2 <= 0 ? t5.insAtLeftEnd(this) : o2 >= r4.text.length ? t5.insAtRightEnd(this) : t5.insLeftOf(r4.splitRight(o2));
              for (var s2 = e5 - t5.show().offset().left, a2 = s2 && s2 < 0 ? h : 1, l2 = a2; t5[a2] && s2 * l2 > 0; )
                t5[a2].moveTowards(a2, t5), l2 = s2, s2 = e5 - t5.offset().left;
              if (a2 * s2 < -a2 * l2 && t5[-a2].moveTowards(-a2, t5), t5.anticursor) {
                if (t5.anticursor.parent === this) {
                  var c2 = t5[h] && t5[h].text.length;
                  if (this.anticursorPosition === c2)
                    t5.anticursor = v.copy(t5);
                  else {
                    if (this.anticursorPosition < c2) {
                      var u2 = t5[h].splitRight(this.anticursorPosition);
                      t5[h] = u2;
                    } else
                      u2 = t5[1].splitRight(this.anticursorPosition - c2);
                    t5.anticursor = v(this, u2[h], u2);
                  }
                }
              } else
                this.anticursorPosition = t5[h] && t5[h].text.length;
            }, e4.blur = function(e5) {
              U.prototype.blur.call(this), e5 && ("" === this.textContents() ? (this.remove(), e5[h] === this ? e5[h] = this[h] : e5[1] === this && (e5[1] = this[1])) : n4(this));
            }, e4.focus = U.prototype.focus;
          }), Y = d(b, function(e4, t4) {
            function n4(e5, t5) {
              return t5.charAt(e5 === h ? 0 : -1 + t5.length);
            }
            e4.init = function(e5) {
              t4.init.call(this), this.text = e5;
            }, e4.jQadd = function(e5) {
              this.dom = e5, this.jQ = g(e5);
            }, e4.jQize = function() {
              return this.jQadd(document.createTextNode(this.text));
            }, e4.appendText = function(e5) {
              this.text += e5, this.dom.appendData(e5);
            }, e4.prependText = function(e5) {
              this.text = e5 + this.text, this.dom.insertData(0, e5);
            }, e4.insTextAtDirEnd = function(e5, t5) {
              m(t5), 1 === t5 ? this.appendText(e5) : this.prependText(e5);
            }, e4.splitRight = function(e5) {
              var t5 = Y(this.text.slice(e5)).adopt(this.parent, this, this[1]);
              return t5.jQadd(this.dom.splitText(e5)), this.text = this.text.slice(0, e5), t5;
            }, e4.moveTowards = function(e5, t5) {
              m(e5);
              var r4 = n4(-e5, this.text), i3 = this[-e5];
              return i3 ? i3.insTextAtDirEnd(r4, e5) : Y(r4).createDir(-e5, t5), this.deleteTowards(e5, t5);
            }, e4.latex = function() {
              return this.text;
            }, e4.deleteTowards = function(e5, t5) {
              this.text.length > 1 ? 1 === e5 ? (this.dom.deleteData(0, 1), this.text = this.text.slice(1)) : (this.dom.deleteData(-1 + this.text.length, 1), this.text = this.text.slice(0, -1)) : (this.remove(), this.jQ.remove(), t5[e5] = this[e5]);
            }, e4.selectTowards = function(e5, t5) {
              m(e5);
              var r4 = t5.anticursor, i3 = n4(-e5, this.text);
              if (r4[e5] === this) {
                var o2 = Y(i3).createDir(e5, t5);
                r4[e5] = o2, t5.insDirOf(e5, o2);
              } else {
                var s2 = this[-e5];
                s2 ? s2.insTextAtDirEnd(i3, e5) : (o2 = Y(i3).createDir(-e5, t5)).jQ.insDirOf(-e5, t5.selection.jQ), 1 === this.text.length && r4[-e5] === this && (r4[-e5] = this[-e5]);
              }
              return this.deleteTowards(e5, t5);
            };
          });
          function Z(e4, t4, n4) {
            return d(G, { ctrlSeq: e4, htmlTemplate: "<" + t4 + " " + n4 + ">&0</" + t4 + ">" });
          }
          q.text = q.textnormal = q.textrm = q.textup = q.textmd = G, q.em = q.italic = q.italics = q.emph = q.textit = q.textsl = Z("\\textit", "i", 'class="mq-text-mode"'), q.strong = q.bold = q.textbf = Z("\\textbf", "b", 'class="mq-text-mode"'), q.sf = q.textsf = Z("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"'), q.tt = q.texttt = Z("\\texttt", "span", 'class="mq-monospace mq-text-mode"'), q.textsc = Z("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"'), q.uppercase = Z("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"'), q.lowercase = Z("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"');
          var K = d(B, function(e4, t4) {
            e4.init = function(e5) {
              t4.init.call(this, "$"), this.cursor = e5;
            }, e4.htmlTemplate = '<span class="mq-math-mode">&0</span>', e4.createBlocks = function() {
              t4.createBlocks.call(this), this.ends[h].cursor = this.cursor, this.ends[h].write = function(e5, t5) {
                "$" !== t5 ? U.prototype.write.call(this, e5, t5) : this.isEmpty() ? (e5.insRightOf(this.parent), this.parent.deleteTowards(dir, e5), W("\\$", "$").createLeftOf(e5.show())) : e5[1] ? e5[h] ? U.prototype.write.call(this, e5, t5) : e5.insLeftOf(this.parent) : e5.insRightOf(this.parent);
              };
            }, e4.latex = function() {
              return "$" + this.ends[h].latex() + "$";
            };
          }), J = d(V, function(e4, t4) {
            e4.keystroke = function(e5) {
              if ("Spacebar" !== e5 && "Shift-Spacebar" !== e5)
                return t4.keystroke.apply(this, arguments);
            }, e4.write = function(e5, t5) {
              var n4;
              e5.show().deleteSelection(), "$" === t5 ? K(e5).createLeftOf(e5) : ("<" === t5 ? n4 = "&lt;" : ">" === t5 && (n4 = "&gt;"), W(t5, n4).createLeftOf(e5));
            };
          });
          O.TextField = function(e4) {
            return d(e4.EditableField, function(e5, t4) {
              this.RootBlock = J, e5.__mathquillify = function() {
                return t4.__mathquillify.call(this, "mq-editable-field mq-text-mode");
              }, e5.latex = function(e6) {
                return arguments.length > 0 ? (this.__controller.renderLatexText(e6), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
              };
            });
          }, w["\\"] = d(B, function(e4, t4) {
            e4.ctrlSeq = "\\", e4.replaces = function(e5) {
              this._replacedFragment = e5.disown(), this.isEmpty = function() {
                return false;
              };
            }, e4.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>', e4.textTemplate = ["\\"], e4.createBlocks = function() {
              t4.createBlocks.call(this), this.ends[h].focus = function() {
                return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this;
              }, this.ends[h].blur = function() {
                return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this;
              }, this.ends[h].write = function(e5, t5) {
                e5.show().deleteSelection(), t5.match(/[a-z]/i) ? W(t5).createLeftOf(e5) : (this.parent.renderCommand(e5), "\\" === t5 && this.isEmpty() || e5.parent.write(e5, t5));
              }, this.ends[h].keystroke = function(e5, n4, r4) {
                return "Tab" === e5 || "Enter" === e5 || "Spacebar" === e5 ? (this.parent.renderCommand(r4.cursor), void n4.preventDefault()) : t4.keystroke.apply(this, arguments);
              };
            }, e4.createLeftOf = function(e5) {
              if (t4.createLeftOf.call(this, e5), this._replacedFragment) {
                var n4 = this.jQ[0];
                this.jQ = this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove", function(e6) {
                  return g(e6.target = n4).trigger(e6), false;
                }).insertBefore(this.jQ).add(this.jQ);
              }
            }, e4.latex = function() {
              return "\\" + this.ends[h].latex() + " ";
            }, e4.renderCommand = function(e5) {
              this.jQ = this.jQ.last(), this.remove(), this[1] ? e5.insLeftOf(this[1]) : e5.insAtRightEnd(this.parent);
              var t5 = this.ends[h].latex();
              t5 || (t5 = " ");
              var n4 = q[t5];
              n4 ? (n4 = n4(t5), this._replacedFragment && n4.replaces(this._replacedFragment), n4.createLeftOf(e5)) : ((n4 = G()).replaces(t5), n4.createLeftOf(e5), e5.insRightOf(n4), this._replacedFragment && this._replacedFragment.remove());
            };
          });
          var ee, te, ne = s, re = document.createElement("div").style;
          for (var ie in { transform: 1, WebkitTransform: 1, MozTransform: 1, OTransform: 1, msTransform: 1 })
            if (ie in re) {
              te = ie;
              break;
            }
          te ? ee = function(e4, t4, n4) {
            e4.css(te, "scale(" + t4 + "," + n4 + ")");
          } : "filter" in re ? (ne = function(e4) {
            e4.className = e4.className;
          }, ee = function(e4, t4, n4) {
            t4 /= 1 + (n4 - 1) / 2, e4.css("fontSize", n4 + "em"), e4.hasClass("mq-matrixed-container") || e4.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
            var r4 = e4.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + t4 + ",SizingMethod='auto expand')");
            function i3() {
              e4.css("marginRight", (r4.width() - 1) * (t4 - 1) / t4 + "px");
            }
            i3();
            var o2 = setInterval(i3);
            g(window).load(function() {
              clearTimeout(o2), i3();
            });
          }) : ee = function(e4, t4, n4) {
            e4.css("fontSize", n4 + "em");
          };
          var oe = d(B, function(e4, t4) {
            e4.init = function(e5, n4, r4) {
              t4.init.call(this, e5, "<" + n4 + " " + r4 + ">&0</" + n4 + ">");
            };
          });
          q.mathrm = f(oe, "\\mathrm", "span", 'class="mq-roman mq-font"'), q.mathit = f(oe, "\\mathit", "i", 'class="mq-font"'), q.mathbf = f(oe, "\\mathbf", "b", 'class="mq-font"'), q.mathsf = f(oe, "\\mathsf", "span", 'class="mq-sans-serif mq-font"'), q.mathtt = f(oe, "\\mathtt", "span", 'class="mq-monospace mq-font"'), q.underline = f(oe, "\\underline", "span", 'class="mq-non-leaf mq-underline"'), q.overline = q.bar = f(oe, "\\overline", "span", 'class="mq-non-leaf mq-overline"'), q.overrightarrow = f(oe, "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"'), q.overleftarrow = f(oe, "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"'), q.overleftrightarrow = f(oe, "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-both"'), q.overarc = f(oe, "\\overarc", "span", 'class="mq-non-leaf mq-overarc"'), q.dot = d(B, function(e4, t4) {
            e4.init = function() {
              t4.init.call(this, "\\dot", '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>');
            };
          }), q.textcolor = d(B, function(e4, t4) {
            e4.setColor = function(e5) {
              this.color = e5, this.htmlTemplate = '<span class="mq-textcolor" style="color:' + e5 + '">&0</span>';
            }, e4.latex = function() {
              return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
            }, e4.parser = function() {
              var e5 = this, n4 = P.optWhitespace, r4 = P.string, i3 = P.regex;
              return n4.then(r4("{")).then(i3(/^[#\w\s.,()%-]*/)).skip(r4("}")).then(function(n5) {
                return e5.setColor(n5), t4.parser.call(e5);
              });
            }, e4.isStyleBlock = function() {
              return true;
            };
          }), q.class = d(B, function(e4, t4) {
            e4.parser = function() {
              var e5 = this, n4 = P.string, r4 = P.regex;
              return P.optWhitespace.then(n4("{")).then(r4(/^[-\w\s\\\xA0-\xFF]*/)).skip(n4("}")).then(function(n5) {
                return e5.cls = n5 || "", e5.htmlTemplate = '<span class="mq-class ' + n5 + '">&0</span>', t4.parser.call(e5);
              });
            }, e4.latex = function() {
              return "\\class{" + this.cls + "}{" + this.blocks[0].latex() + "}";
            }, e4.isStyleBlock = function() {
              return true;
            };
          });
          var se = d(B, function(e4, t4) {
            e4.ctrlSeq = "_{...}^{...}", e4.createLeftOf = function(e5) {
              if (this.replacedFragment || e5[h] || !e5.options.supSubsRequireOperand)
                return t4.createLeftOf.apply(this, arguments);
            }, e4.contactWeld = function(e5) {
              for (var t5 = h; t5; t5 = t5 === h && 1)
                if (this[t5] instanceof se) {
                  for (var n4 = "sub"; n4; n4 = "sub" === n4 && "sup") {
                    var r4 = this[n4], i3 = this[t5][n4];
                    if (r4) {
                      if (i3)
                        if (r4.isEmpty())
                          s2 = v(i3, 0, i3.ends[h]);
                        else {
                          r4.jQ.children().insAtDirEnd(-t5, i3.jQ);
                          var o2 = r4.children().disown(), s2 = v(i3, o2.ends[1], i3.ends[h]);
                          t5 === h ? o2.adopt(i3, i3.ends[1], 0) : o2.adopt(i3, 0, i3.ends[h]);
                        }
                      else
                        this[t5].addBlock(r4.disown());
                      this.placeCursor = function(e6, n5) {
                        return function(r5) {
                          r5.insAtDirEnd(-t5, e6 || n5);
                        };
                      }(i3, r4);
                    }
                  }
                  this.remove(), e5 && e5[h] === this && (1 === t5 && s2 ? s2[h] ? e5.insRightOf(s2[h]) : e5.insAtLeftEnd(s2.parent) : e5.insRightOf(this[t5]));
                  break;
                }
            }, j.p.charsThatBreakOutOfSupSub = "", e4.finalizeTree = function() {
              this.ends[h].write = function(e5, t5) {
                if (e5.options.autoSubscriptNumerals && this === this.parent.sub) {
                  if ("_" === t5)
                    return;
                  var n4 = this.chToCmd(t5, e5.options);
                  return n4 instanceof $ ? e5.deleteSelection() : e5.clearSelection().insRightOf(this.parent), n4.createLeftOf(e5.show());
                }
                e5[h] && !e5[1] && !e5.selection && e5.options.charsThatBreakOutOfSupSub.indexOf(t5) > -1 && e5.insRightOf(this.parent), U.p.write.apply(this, arguments);
              };
            }, e4.moveTowards = function(e5, n4, r4) {
              n4.options.autoSubscriptNumerals && !this.sup ? n4.insDirOf(e5, this) : t4.moveTowards.apply(this, arguments);
            }, e4.deleteTowards = function(e5, n4) {
              if (n4.options.autoSubscriptNumerals && this.sub) {
                var r4 = this.sub.ends[-e5];
                r4 instanceof $ ? r4.remove() : r4 && r4.deleteTowards(e5, n4.insAtDirEnd(-e5, this.sub)), this.sub.isEmpty() && (this.sub.deleteOutOf(h, n4.insAtLeftEnd(this.sub)), this.sup && n4.insDirOf(-e5, this));
              } else
                t4.deleteTowards.apply(this, arguments);
            }, e4.latex = function() {
              function e5(e6, t5) {
                var n4 = t5 && t5.latex();
                return t5 ? e6 + (1 === n4.length ? n4 : "{" + (n4 || " ") + "}") : "";
              }
              return e5("_", this.sub) + e5("^", this.sup);
            }, e4.addBlock = function(e5) {
              "sub" === this.supsub ? (this.sup = this.upInto = this.sub.upOutOf = e5, e5.adopt(this, this.sub, 0).downOutOf = this.sub, e5.jQ = g('<span class="mq-sup"/>').append(e5.jQ.children()).attr(r3, e5.id).prependTo(this.jQ)) : (this.sub = this.downInto = this.sup.downOutOf = e5, e5.adopt(this, 0, this.sup).upOutOf = this.sup, e5.jQ = g('<span class="mq-sub"></span>').append(e5.jQ.children()).attr(r3, e5.id).appendTo(this.jQ.removeClass("mq-sup-only")), this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));
              for (var t5 = 0; t5 < 2; t5 += 1)
                !function(e6, t6, n4, r4) {
                  e6[t6].deleteOutOf = function(i3, o2) {
                    if (o2.insDirOf(this[i3] ? -i3 : i3, this.parent), !this.isEmpty()) {
                      var s2 = this.ends[i3];
                      this.children().disown().withDirAdopt(i3, o2.parent, o2[i3], o2[-i3]).jQ.insDirOf(-i3, o2.jQ), o2[-i3] = s2;
                    }
                    e6.supsub = n4, delete e6[t6], delete e6[r4 + "Into"], e6[n4][r4 + "OutOf"] = ae, delete e6[n4].deleteOutOf, "sub" === t6 && g(e6.jQ.addClass("mq-sup-only")[0].lastChild).remove(), this.remove();
                  };
                }(this, "sub sup".split(" ")[t5], "sup sub".split(" ")[t5], "down up".split(" ")[t5]);
            }, e4.reflow = function() {
              var e5 = this.jQ, t5 = e5.prev();
              if (t5.length) {
                var n4 = e5.children(".mq-sup");
                if (n4.length) {
                  var r4 = parseInt(n4.css("font-size")), i3 = n4.offset().top + n4.height() - t5.offset().top - 0.7 * r4, o2 = parseInt(n4.css("margin-bottom"));
                  n4.css("margin-bottom", o2 + i3);
                }
              }
            };
          });
          function ae(e4) {
            var t4 = this.parent, n4 = e4;
            do {
              if (n4[1])
                return e4.insLeftOf(t4);
              n4 = n4.parent.parent;
            } while (n4 !== t4);
            e4.insRightOf(t4);
          }
          q.subscript = q._ = d(se, function(e4, t4) {
            e4.supsub = "sub", e4.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>', e4.textTemplate = ["_"], e4.finalizeTree = function() {
              this.downInto = this.sub = this.ends[h], this.sub.upOutOf = ae, t4.finalizeTree.call(this);
            };
          }), q.superscript = q.supscript = q["^"] = d(se, function(e4, t4) {
            e4.supsub = "sup", e4.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>', e4.textTemplate = ["^"], e4.finalizeTree = function() {
              this.upInto = this.sup = this.ends[1], this.sup.downOutOf = ae, t4.finalizeTree.call(this);
            };
          });
          var le = d(B, function(e4, t4) {
            e4.init = function(e5, t5) {
              var n4 = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + t5 + '</big><span class="mq-from"><span>&0</span></span></span>';
              $.prototype.init.call(this, e5, n4);
            }, e4.createLeftOf = function(e5) {
              t4.createLeftOf.apply(this, arguments), e5.options.sumStartsWithNEquals && (we("n").createLeftOf(e5), Ne().createLeftOf(e5));
            }, e4.latex = function() {
              function e5(e6) {
                return 1 === e6.length ? e6 : "{" + (e6 || " ") + "}";
              }
              return this.ctrlSeq + "_" + e5(this.ends[h].latex()) + "^" + e5(this.ends[1].latex());
            }, e4.parser = function() {
              for (var e5 = P.string, t5 = P.optWhitespace, n4 = P.succeed, r4 = H.block, i3 = this, o2 = i3.blocks = [U(), U()], s2 = 0; s2 < o2.length; s2 += 1)
                o2[s2].adopt(i3, i3.ends[1], 0);
              return t5.then(e5("_").or(e5("^"))).then(function(e6) {
                var t6 = o2["_" === e6 ? 0 : 1];
                return r4.then(function(e7) {
                  return e7.children().adopt(t6, t6.ends[1], 0), n4(i3);
                });
              }).many().result(i3);
            }, e4.finalizeTree = function() {
              this.downInto = this.ends[h], this.upInto = this.ends[1], this.ends[h].upOutOf = this.ends[1], this.ends[1].downOutOf = this.ends[h];
            };
          });
          q["∑"] = q.sum = q.summation = f(le, "\\sum ", "&sum;"), q["∏"] = q.prod = q.product = f(le, "\\prod ", "&prod;"), q.coprod = q.coproduct = f(le, "\\coprod ", "&#8720;"), q["∫"] = q.int = q.integral = d(le, function(e4, t4) {
            e4.init = function() {
              $.prototype.init.call(this, "\\int ", '<span class="mq-int mq-non-leaf"><big>&int;</big><span class="mq-supsub mq-non-leaf"><span class="mq-sup"><span class="mq-sup-inner">&1</span></span><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>');
            }, e4.createLeftOf = B.p.createLeftOf;
          });
          var ce = q.frac = q.dfrac = q.cfrac = q.fraction = d(B, function(e4, t4) {
            e4.ctrlSeq = "\\frac", e4.htmlTemplate = '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>', e4.textTemplate = ["(", ")/(", ")"], e4.finalizeTree = function() {
              this.upInto = this.ends[1].upOutOf = this.ends[h], this.downInto = this.ends[h].downOutOf = this.ends[1];
            };
          }), ue = q.over = w["/"] = d(ce, function(e4, t4) {
            e4.createLeftOf = function(e5) {
              if (!this.replacedFragment) {
                for (var n4 = e5[h]; n4 && !(n4 instanceof X || n4 instanceof (q.text || s) || n4 instanceof le || "\\ " === n4.ctrlSeq || /^[,;:]$/.test(n4.ctrlSeq)); )
                  n4 = n4[h];
                n4 instanceof le && n4[1] instanceof se && (n4 = n4[1])[1] instanceof se && n4[1].ctrlSeq != n4.ctrlSeq && (n4 = n4[1]), n4 === e5[h] || e5.isTooDeep(1) || (this.replaces(x(n4[1] || e5.parent.ends[h], e5[h])), e5[h] = n4);
              }
              t4.createLeftOf.call(this, e5);
            };
          }), fe = q.sqrt = q["√"] = d(B, function(e4, t4) {
            e4.ctrlSeq = "\\sqrt", e4.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>', e4.textTemplate = ["sqrt(", ")"], e4.parser = function() {
              return H.optBlock.then(function(e5) {
                return H.block.map(function(t5) {
                  var n4 = pe();
                  return n4.blocks = [e5, t5], e5.adopt(n4, 0, 0), t5.adopt(n4, e5, 0), n4;
                });
              }).or(t4.parser.call(this));
            }, e4.reflow = function() {
              var e5 = this.ends[1].jQ;
              ee(e5.prev(), 1, e5.innerHeight() / +e5.css("fontSize").slice(0, -2) - 0.1);
            };
          }), pe = (q.hat = d(B, function(e4, t4) {
            e4.ctrlSeq = "\\hat", e4.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-hat-prefix">^</span><span class="mq-hat-stem">&0</span></span>', e4.textTemplate = ["hat(", ")"];
          }), q.nthroot = d(fe, function(e4, t4) {
            e4.htmlTemplate = '<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>', e4.textTemplate = ["sqrt[", "](", ")"], e4.latex = function() {
              return "\\sqrt[" + this.ends[h].latex() + "]{" + this.ends[1].latex() + "}";
            };
          })), de = d(B, function(e4, t4) {
            e4.init = function(e5, n4, r4) {
              var i3 = '<span class="mq-non-leaf"><span class="mq-diacritic-above">' + n4 + '</span><span class="mq-diacritic-stem">&0</span></span>';
              t4.init.call(this, e5, i3, r4);
            };
          });
          function he(e4, t4) {
            e4.jQadd = function() {
              t4.jQadd.apply(this, arguments), this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last")), this.contentjQ = this.jQ.children(":eq(1)");
            }, e4.reflow = function() {
              var e5 = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
              ee(this.delimjQs, i2(1 + 0.2 * (e5 - 1), 1.2), 1.2 * e5);
            };
          }
          q.vec = f(de, "\\vec", "&rarr;", ["vec(", ")"]), q.tilde = f(de, "\\tilde", "~", ["tilde(", ")"]);
          var me = d(d(B, he), function(t4, n4) {
            t4.init = function(t5, r4, i3, o2, s2) {
              n4.init.call(this, "\\left" + o2, e3, [r4, i3]), this.side = t5, this.sides = {}, this.sides[h] = { ch: r4, ctrlSeq: o2 }, this.sides[1] = { ch: i3, ctrlSeq: s2 };
            }, t4.numBlocks = function() {
              return 1;
            }, t4.html = function() {
              return this.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' + (1 === this.side ? " mq-ghost" : "") + '">' + this.sides[h].ch + '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' + (this.side === h ? " mq-ghost" : "") + '">' + this.sides[1].ch + "</span></span>", n4.html.call(this);
            }, t4.latex = function() {
              return "\\left" + this.sides[h].ctrlSeq + this.ends[h].latex() + "\\right" + this.sides[1].ctrlSeq;
            }, t4.matchBrack = function(e4, t5, n5) {
              return n5 instanceof me && n5.side && n5.side !== -t5 && (!e4.restrictMismatchedBrackets || ge[this.sides[this.side].ch] === n5.sides[n5.side].ch || { "(": "]", "[": ")" }[this.sides[h].ch] === n5.sides[1].ch) && n5;
            }, t4.closeOpposing = function(e4) {
              e4.side = 0, e4.sides[this.side] = this.sides[this.side], e4.delimjQs.eq(this.side === h ? 0 : 1).removeClass("mq-ghost").html(this.sides[this.side].ch);
            }, t4.createLeftOf = function(e4) {
              if (!this.replacedFragment) {
                var t5 = e4.options;
                if ("|" === this.sides[h].ch)
                  var r4 = this.matchBrack(t5, 1, e4[1]) || this.matchBrack(t5, h, e4[h]) || this.matchBrack(t5, 0, e4.parent.parent);
                else
                  r4 = this.matchBrack(t5, -this.side, e4[-this.side]) || this.matchBrack(t5, -this.side, e4.parent.parent);
              }
              if (r4) {
                var i3 = this.side = -r4.side;
                this.closeOpposing(r4), r4 === e4.parent.parent && e4[i3] && x(e4[i3], e4.parent.ends[i3], -i3).disown().withDirAdopt(-i3, r4.parent, r4, r4[i3]).jQ.insDirOf(i3, r4.jQ), r4.bubble("reflow");
              } else
                i3 = (r4 = this).side, r4.replacedFragment ? r4.side = 0 : e4[-i3] && (r4.replaces(x(e4[-i3], e4.parent.ends[-i3], i3)), e4[-i3] = 0), n4.createLeftOf.call(r4, e4);
              i3 === h ? e4.insAtLeftEnd(r4.ends[h]) : e4.insRightOf(r4);
            }, t4.placeCursor = s, t4.unwrap = function() {
              this.ends[h].children().disown().adopt(this.parent, this, this[1]).jQ.insertAfter(this.jQ), this.remove();
            }, t4.deleteSide = function(e4, t5, n5) {
              var r4 = this.parent, i3 = this[e4], o2 = r4.ends[e4];
              if (e4 === this.side)
                return this.unwrap(), void (i3 ? n5.insDirOf(-e4, i3) : n5.insAtDirEnd(e4, r4));
              var s2 = n5.options, a2 = !this.side;
              if (this.side = -e4, this.matchBrack(s2, e4, this.ends[h].ends[this.side])) {
                this.closeOpposing(this.ends[h].ends[this.side]);
                var l2 = this.ends[h].ends[e4];
                this.unwrap(), l2.siblingCreated && l2.siblingCreated(n5.options, e4), i3 ? n5.insDirOf(-e4, i3) : n5.insAtDirEnd(e4, r4);
              } else {
                if (this.matchBrack(s2, e4, this.parent.parent))
                  this.parent.parent.closeOpposing(this), this.parent.parent.unwrap();
                else {
                  if (t5 && a2)
                    return this.unwrap(), void (i3 ? n5.insDirOf(-e4, i3) : n5.insAtDirEnd(e4, r4));
                  this.sides[e4] = { ch: ge[this.sides[this.side].ch], ctrlSeq: ge[this.sides[this.side].ctrlSeq] }, this.delimjQs.removeClass("mq-ghost").eq(e4 === h ? 0 : 1).addClass("mq-ghost").html(this.sides[e4].ch);
                }
                i3 ? (l2 = this.ends[h].ends[e4], x(i3, o2, -e4).disown().withDirAdopt(-e4, this.ends[h], l2, 0).jQ.insAtDirEnd(e4, this.ends[h].jQ.removeClass("mq-empty")), l2.siblingCreated && l2.siblingCreated(n5.options, e4), n5.insDirOf(-e4, i3)) : t5 ? n5.insDirOf(e4, this) : n5.insAtDirEnd(e4, this.ends[h]);
              }
            }, t4.deleteTowards = function(e4, t5) {
              this.deleteSide(-e4, false, t5);
            }, t4.finalizeTree = function() {
              this.ends[h].deleteOutOf = function(e4, t5) {
                this.parent.deleteSide(e4, true, t5);
              }, this.finalizeTree = this.intentionalBlur = function() {
                this.delimjQs.eq(this.side === h ? 1 : 0).removeClass("mq-ghost"), this.side = 0;
              };
            }, t4.siblingCreated = function(e4, t5) {
              t5 === -this.side && this.finalizeTree();
            };
          }), ge = { "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "\\{": "\\}", "\\}": "\\{", "&lang;": "&rang;", "&rang;": "&lang;", "\\langle ": "\\rangle ", "\\rangle ": "\\langle ", "|": "|", "\\lVert ": "\\rVert ", "\\rVert ": "\\lVert " };
          function ve(e4, t4) {
            t4 = t4 || e4;
            var n4 = ge[e4], r4 = ge[t4];
            w[e4] = f(me, h, e4, n4, t4, r4), w[n4] = f(me, 1, e4, n4, t4, r4);
          }
          ve("("), ve("["), ve("{", "\\{"), q.langle = f(me, h, "&lang;", "&rang;", "\\langle ", "\\rangle "), q.rangle = f(me, 1, "&lang;", "&rang;", "\\langle ", "\\rangle "), w["|"] = f(me, h, "|", "|", "|", "|"), q.lVert = f(me, h, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), q.rVert = f(me, 1, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), q.left = d(B, function(e4) {
            e4.parser = function() {
              var e5 = P.regex, t4 = P.string, n4 = (P.succeed, P.optWhitespace);
              return n4.then(e5(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then(function(r4) {
                var i3 = "\\" === r4.charAt(0) ? r4.slice(1) : r4;
                return "\\langle" == r4 && (i3 = "&lang;", r4 += " "), "\\lVert" == r4 && (i3 = "&#8741;", r4 += " "), H.then(function(o2) {
                  return t4("\\right").skip(n4).then(e5(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/)).map(function(e6) {
                    var t5 = "\\" === e6.charAt(0) ? e6.slice(1) : e6;
                    "\\rangle" == e6 && (t5 = "&rang;", e6 += " "), "\\rVert" == e6 && (t5 = "&#8741;", e6 += " ");
                    var n5 = me(0, i3, t5, r4, e6);
                    return n5.blocks = [o2], o2.adopt(n5, 0, 0), n5;
                  });
                });
              });
            };
          }), q.right = d(B, function(e4) {
            e4.parser = function() {
              return P.fail("unmatched \\right");
            };
          });
          var be = q.binom = q.binomial = d(d(B, he), function(e4, t4) {
            e4.ctrlSeq = "\\binom", e4.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>', e4.textTemplate = ["choose(", ",", ")"];
          });
          q.choose = d(be, function(e4) {
            e4.createLeftOf = ue.prototype.createLeftOf;
          }), q.editable = q.MathQuillMathField = d(B, function(e4, t4) {
            e4.ctrlSeq = "\\MathQuillMathField", e4.htmlTemplate = '<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>', e4.parser = function() {
              var e5 = this, n4 = P.string, r4 = P.regex, i3 = P.succeed;
              return n4("[").then(r4(/^[a-z][a-z0-9]*/i)).skip(n4("]")).map(function(t5) {
                e5.name = t5;
              }).or(i3()).then(t4.parser.call(e5));
            }, e4.finalizeTree = function(e5) {
              var t5 = C(this.ends[h], this.jQ, e5);
              t5.KIND_OF_MQ = "MathField", t5.editable = true, t5.createTextarea(), t5.editablesTextareaEvents(), t5.cursor.insAtRightEnd(t5.root), I(t5.root);
            }, e4.registerInnerField = function(e5, t5) {
              e5.push(e5[this.name] = t5(this.ends[h].controller));
            }, e4.latex = function() {
              return this.ends[h].latex();
            }, e4.text = function() {
              return this.ends[h].text();
            };
          });
          var ye = q.embed = d($, function(e4, t4) {
            e4.setOptions = function(e5) {
              function t5() {
                return "";
              }
              return this.text = e5.text || t5, this.htmlTemplate = e5.htmlString || "", this.latex = e5.latex || t5, this;
            }, e4.parser = function() {
              var e5 = this, t5 = P.string, n4 = P.regex, r4 = P.succeed;
              return t5("{").then(n4(/^[a-z][a-z0-9]*/i)).skip(t5("}")).then(function(i3) {
                return t5("[").then(n4(/^[-\w\s]*/)).skip(t5("]")).or(r4()).map(function(t6) {
                  return e5.setOptions(E[i3](t6));
                });
              });
            };
          });
          q.notin = q.cong = q.equiv = q.oplus = q.otimes = d(X, function(e4, t4) {
            e4.init = function(e5) {
              t4.init.call(this, "\\" + e5 + " ", "&" + e5 + ";");
            };
          }), q["≠"] = q.ne = q.neq = f(X, "\\ne ", "&ne;"), q["∗"] = q.ast = q.star = q.loast = q.lowast = f(X, "\\ast ", "&lowast;"), q.therefor = q.therefore = f(X, "\\therefore ", "&there4;"), q.cuz = q.because = f(X, "\\because ", "&#8757;"), q.prop = q.propto = f(X, "\\propto ", "&prop;"), q["≈"] = q.asymp = q.approx = f(X, "\\approx ", "&asymp;"), q.isin = q.in = f(X, "\\in ", "&isin;"), q.ni = q.contains = f(X, "\\ni ", "&ni;"), q.notni = q.niton = q.notcontains = q.doesnotcontain = f(X, "\\not\\ni ", "&#8716;"), q.sub = q.subset = f(X, "\\subset ", "&sub;"), q.sup = q.supset = q.superset = f(X, "\\supset ", "&sup;"), q.nsub = q.notsub = q.nsubset = q.notsubset = f(X, "\\not\\subset ", "&#8836;"), q.nsup = q.notsup = q.nsupset = q.notsupset = q.nsuperset = q.notsuperset = f(X, "\\not\\supset ", "&#8837;"), q.sube = q.subeq = q.subsete = q.subseteq = f(X, "\\subseteq ", "&sube;"), q.supe = q.supeq = q.supsete = q.supseteq = q.supersete = q.superseteq = f(X, "\\supseteq ", "&supe;"), q.nsube = q.nsubeq = q.notsube = q.notsubeq = q.nsubsete = q.nsubseteq = q.notsubsete = q.notsubseteq = f(X, "\\not\\subseteq ", "&#8840;"), q.nsupe = q.nsupeq = q.notsupe = q.notsupeq = q.nsupsete = q.nsupseteq = q.notsupsete = q.notsupseteq = q.nsupersete = q.nsuperseteq = q.notsupersete = q.notsuperseteq = f(X, "\\not\\supseteq ", "&#8841;"), q.N = q.naturals = q.Naturals = f(W, "\\mathbb{N}", "&#8469;"), q.P = q.primes = q.Primes = q.projective = q.Projective = q.probability = q.Probability = f(W, "\\mathbb{P}", "&#8473;"), q.Z = q.integers = q.Integers = f(W, "\\mathbb{Z}", "&#8484;"), q.Q = q.rationals = q.Rationals = f(W, "\\mathbb{Q}", "&#8474;"), q.R = q.reals = q.Reals = f(W, "\\mathbb{R}", "&#8477;"), q.C = q.complex = q.Complex = q.complexes = q.Complexes = q.complexplane = q.Complexplane = q.ComplexPlane = f(W, "\\mathbb{C}", "&#8450;"), q.H = q.Hamiltonian = q.quaternions = q.Quaternions = f(W, "\\mathbb{H}", "&#8461;"), q.quad = q.emsp = f(W, "\\quad ", "    "), q.qquad = f(W, "\\qquad ", "        "), q.diamond = f(W, "\\diamond ", "&#9671;"), q.bigtriangleup = f(W, "\\bigtriangleup ", "&#9651;"), q.ominus = f(W, "\\ominus ", "&#8854;"), q.uplus = f(W, "\\uplus ", "&#8846;"), q.bigtriangledown = f(W, "\\bigtriangledown ", "&#9661;"), q.sqcap = f(W, "\\sqcap ", "&#8851;"), q.triangleleft = f(W, "\\triangleleft ", "&#8882;"), q.sqcup = f(W, "\\sqcup ", "&#8852;"), q.triangleright = f(W, "\\triangleright ", "&#8883;"), q.odot = q.circledot = f(W, "\\odot ", "&#8857;"), q.bigcirc = f(W, "\\bigcirc ", "&#9711;"), q.dagger = f(W, "\\dagger ", "&#0134;"), q.ddagger = f(W, "\\ddagger ", "&#135;"), q.wr = f(W, "\\wr ", "&#8768;"), q.amalg = f(W, "\\amalg ", "&#8720;"), q.models = f(W, "\\models ", "&#8872;"), q.prec = f(W, "\\prec ", "&#8826;"), q.succ = f(W, "\\succ ", "&#8827;"), q.preceq = f(W, "\\preceq ", "&#8828;"), q.succeq = f(W, "\\succeq ", "&#8829;"), q.simeq = f(W, "\\simeq ", "&#8771;"), q.mid = f(W, "\\mid ", "&#8739;"), q.ll = f(W, "\\ll ", "&#8810;"), q.gg = f(W, "\\gg ", "&#8811;"), q.parallel = f(W, "\\parallel ", "&#8741;"), q.nparallel = f(W, "\\nparallel ", "&#8742;"), q.bowtie = f(W, "\\bowtie ", "&#8904;"), q.sqsubset = f(W, "\\sqsubset ", "&#8847;"), q.sqsupset = f(W, "\\sqsupset ", "&#8848;"), q.smile = f(W, "\\smile ", "&#8995;"), q.sqsubseteq = f(W, "\\sqsubseteq ", "&#8849;"), q.sqsupseteq = f(W, "\\sqsupseteq ", "&#8850;"), q.doteq = f(W, "\\doteq ", "&#8784;"), q.frown = f(W, "\\frown ", "&#8994;"), q.vdash = f(W, "\\vdash ", "&#8870;"), q.dashv = f(W, "\\dashv ", "&#8867;"), q.nless = f(W, "\\nless ", "&#8814;"), q.ngtr = f(W, "\\ngtr ", "&#8815;"), q.longleftarrow = f(W, "\\longleftarrow ", "&#8592;"), q.longrightarrow = f(W, "\\longrightarrow ", "&#8594;"), q.Longleftarrow = f(W, "\\Longleftarrow ", "&#8656;"), q.Longrightarrow = f(W, "\\Longrightarrow ", "&#8658;"), q.longleftrightarrow = f(W, "\\longleftrightarrow ", "&#8596;"), q.updownarrow = f(W, "\\updownarrow ", "&#8597;"), q.Longleftrightarrow = f(W, "\\Longleftrightarrow ", "&#8660;"), q.Updownarrow = f(W, "\\Updownarrow ", "&#8661;"), q.mapsto = f(W, "\\mapsto ", "&#8614;"), q.nearrow = f(W, "\\nearrow ", "&#8599;"), q.hookleftarrow = f(W, "\\hookleftarrow ", "&#8617;"), q.hookrightarrow = f(W, "\\hookrightarrow ", "&#8618;"), q.searrow = f(W, "\\searrow ", "&#8600;"), q.leftharpoonup = f(W, "\\leftharpoonup ", "&#8636;"), q.rightharpoonup = f(W, "\\rightharpoonup ", "&#8640;"), q.swarrow = f(W, "\\swarrow ", "&#8601;"), q.leftharpoondown = f(W, "\\leftharpoondown ", "&#8637;"), q.rightharpoondown = f(W, "\\rightharpoondown ", "&#8641;"), q.nwarrow = f(W, "\\nwarrow ", "&#8598;"), q.ldots = f(W, "\\ldots ", "&#8230;"), q.cdots = f(W, "\\cdots ", "&#8943;"), q.vdots = f(W, "\\vdots ", "&#8942;"), q.ddots = f(W, "\\ddots ", "&#8945;"), q.surd = f(W, "\\surd ", "&#8730;"), q.triangle = f(W, "\\triangle ", "&#9651;"), q.ell = f(W, "\\ell ", "&#8467;"), q.top = f(W, "\\top ", "&#8868;"), q.flat = f(W, "\\flat ", "&#9837;"), q.natural = f(W, "\\natural ", "&#9838;"), q.sharp = f(W, "\\sharp ", "&#9839;"), q.wp = f(W, "\\wp ", "&#8472;"), q.bot = f(W, "\\bot ", "&#8869;"), q.clubsuit = f(W, "\\clubsuit ", "&#9827;"), q.diamondsuit = f(W, "\\diamondsuit ", "&#9826;"), q.heartsuit = f(W, "\\heartsuit ", "&#9825;"), q.spadesuit = f(W, "\\spadesuit ", "&#9824;"), q.parallelogram = f(W, "\\parallelogram ", "&#9649;"), q.square = f(W, "\\square ", "&#11036;"), q.oint = f(W, "\\oint ", "&#8750;"), q.bigcap = f(W, "\\bigcap ", "&#8745;"), q.bigcup = f(W, "\\bigcup ", "&#8746;"), q.bigsqcup = f(W, "\\bigsqcup ", "&#8852;"), q.bigvee = f(W, "\\bigvee ", "&#8744;"), q.bigwedge = f(W, "\\bigwedge ", "&#8743;"), q.bigodot = f(W, "\\bigodot ", "&#8857;"), q.bigotimes = f(W, "\\bigotimes ", "&#8855;"), q.bigoplus = f(W, "\\bigoplus ", "&#8853;"), q.biguplus = f(W, "\\biguplus ", "&#8846;"), q.lfloor = f(W, "\\lfloor ", "&#8970;"), q.rfloor = f(W, "\\rfloor ", "&#8971;"), q.lceil = f(W, "\\lceil ", "&#8968;"), q.rceil = f(W, "\\rceil ", "&#8969;"), q.opencurlybrace = q.lbrace = f(W, "\\lbrace ", "{"), q.closecurlybrace = q.rbrace = f(W, "\\rbrace ", "}"), q.lbrack = f(W, "["), q.rbrack = f(W, "]"), q.slash = f(W, "/"), q.vert = f(W, "|"), q.perp = q.perpendicular = f(W, "\\perp ", "&perp;"), q.nabla = q.del = f(W, "\\nabla ", "&nabla;"), q.hbar = f(W, "\\hbar ", "&#8463;"), q.AA = q.Angstrom = q.angstrom = f(W, "\\text\\AA ", "&#8491;"), q.ring = q.circ = q.circle = f(W, "\\circ ", "&#8728;"), q.bull = q.bullet = f(W, "\\bullet ", "&bull;"), q.setminus = q.smallsetminus = f(W, "\\setminus ", "&#8726;"), q.not = q["¬"] = q.neg = f(W, "\\neg ", "&not;"), q["…"] = q.dots = q.ellip = q.hellip = q.ellipsis = q.hellipsis = f(W, "\\dots ", "&hellip;"), q.converges = q.darr = q.dnarr = q.dnarrow = q.downarrow = f(W, "\\downarrow ", "&darr;"), q.dArr = q.dnArr = q.dnArrow = q.Downarrow = f(W, "\\Downarrow ", "&dArr;"), q.diverges = q.uarr = q.uparrow = f(W, "\\uparrow ", "&uarr;"), q.uArr = q.Uparrow = f(W, "\\Uparrow ", "&uArr;"), q.to = f(X, "\\to ", "&rarr;"), q.rarr = q.rightarrow = f(W, "\\rightarrow ", "&rarr;"), q.implies = f(X, "\\Rightarrow ", "&rArr;"), q.rArr = q.Rightarrow = f(W, "\\Rightarrow ", "&rArr;"), q.gets = f(X, "\\gets ", "&larr;"), q.larr = q.leftarrow = f(W, "\\leftarrow ", "&larr;"), q.impliedby = f(X, "\\Leftarrow ", "&lArr;"), q.lArr = q.Leftarrow = f(W, "\\Leftarrow ", "&lArr;"), q.harr = q.lrarr = q.leftrightarrow = f(W, "\\leftrightarrow ", "&harr;"), q.iff = f(X, "\\Leftrightarrow ", "&hArr;"), q.hArr = q.lrArr = q.Leftrightarrow = f(W, "\\Leftrightarrow ", "&hArr;"), q.Re = q.Real = q.real = f(W, "\\Re ", "&real;"), q.Im = q.imag = q.image = q.imagin = q.imaginary = q.Imaginary = f(W, "\\Im ", "&image;"), q.part = q.partial = f(W, "\\partial ", "&part;"), q.infty = q.infin = q.infinity = f(W, "\\infty ", "&infin;"), q.pounds = f(W, "\\pounds ", "&pound;"), q.alef = q.alefsym = q.aleph = q.alephsym = f(W, "\\aleph ", "&alefsym;"), q.xist = q.xists = q.exist = q.exists = f(W, "\\exists ", "&exist;"), q.nexists = q.nexist = f(W, "\\nexists ", "&#8708;"), q.and = q.land = q.wedge = f(X, "\\wedge ", "&and;"), q.or = q.lor = q.vee = f(X, "\\vee ", "&or;"), q.o = q.O = q.empty = q.emptyset = q.oslash = q.Oslash = q.nothing = q.varnothing = f(X, "\\varnothing ", "&empty;"), q.cup = q.union = f(X, "\\cup ", "&cup;"), q.cap = q.intersect = q.intersection = f(X, "\\cap ", "&cap;"), q.deg = q.degree = f(W, "\\degree ", "&deg;"), q.ang = q.angle = f(W, "\\angle ", "&ang;"), q.measuredangle = f(W, "\\measuredangle ", "&#8737;");
          var xe = d(W, function(e4, t4) {
            e4.createLeftOf = function(e5) {
              e5.options.autoSubscriptNumerals && e5.parent !== e5.parent.parent.sub && (e5[h] instanceof qe && false !== e5[h].isItalic || e5[h] instanceof se && e5[h][h] instanceof qe && false !== e5[h][h].isItalic) ? (q._().createLeftOf(e5), t4.createLeftOf.call(this, e5), e5.insRightOf(e5.parent.parent)) : t4.createLeftOf.call(this, e5);
            };
          }), qe = d($, function(e4, t4) {
            e4.init = function(e5, n4) {
              t4.init.call(this, e5, "<var>" + (n4 || e5) + "</var>");
            }, e4.text = function() {
              var e5 = this.ctrlSeq;
              return this.isPartOfOperator ? "\\" == e5[0] ? e5 = e5.slice(1, e5.length) : " " == e5[e5.length - 1] && (e5 = e5.slice(0, -1)) : (!this[h] || this[h] instanceof qe || this[h] instanceof X || "\\ " === this[h].ctrlSeq || (e5 = "*" + e5), !this[1] || this[1] instanceof X || this[1] instanceof se || (e5 += "*")), e5;
            };
          });
          j.p.autoCommands = { _maxLength: 0 }, S.autoCommands = function(e4) {
            if (!/^[a-z]+(?: [a-z]+)*$/i.test(e4))
              throw '"' + e4 + '" not a space-delimited list of only letters';
            for (var t4 = e4.split(" "), n4 = {}, r4 = 0, i3 = 0; i3 < t4.length; i3 += 1) {
              var s2 = t4[i3];
              if (s2.length < 2)
                throw 'autocommand "' + s2 + '" not minimum length of 2';
              if (q[s2] === Oe)
                throw '"' + s2 + '" is a built-in operator name';
              n4[s2] = 1, r4 = o(r4, s2.length);
            }
            return n4._maxLength = r4, n4;
          };
          var we = d(qe, function(e4, t4) {
            function n4(e5) {
              return !e5 || e5 instanceof X || e5 instanceof le;
            }
            e4.init = function(e5) {
              return t4.init.call(this, this.letter = e5);
            }, e4.createLeftOf = function(e5) {
              t4.createLeftOf.apply(this, arguments);
              var n5 = e5.options.autoCommands, r4 = n5._maxLength;
              if (r4 > 0) {
                for (var i3 = "", o2 = this, s2 = 0; o2 instanceof we && o2.ctrlSeq === o2.letter && s2 < r4; )
                  i3 = o2.letter + i3, o2 = o2[h], s2 += 1;
                for (; i3.length; ) {
                  if (n5.hasOwnProperty(i3)) {
                    for (s2 = 1, o2 = this; s2 < i3.length; s2 += 1, o2 = o2[h])
                      ;
                    return x(o2, this).remove(), e5[h] = o2[h], q[i3](i3).createLeftOf(e5);
                  }
                  i3 = i3.slice(1);
                }
              }
            }, e4.italicize = function(e5) {
              return this.isItalic = e5, this.isPartOfOperator = !e5, this.jQ.toggleClass("mq-operator-name", !e5), this;
            }, e4.finalizeTree = e4.siblingDeleted = e4.siblingCreated = function(e5, t5) {
              t5 !== h && this[1] instanceof we || this.autoUnItalicize(e5);
            }, e4.autoUnItalicize = function(e5) {
              var t5 = e5.autoOperatorNames;
              if (0 !== t5._maxLength) {
                for (var r4 = this.letter, o2 = this[h]; o2 instanceof we; o2 = o2[h])
                  r4 = o2.letter + r4;
                for (var s2 = this[1]; s2 instanceof we; s2 = s2[1])
                  r4 += s2.letter;
                x(o2[1] || this.parent.ends[h], s2[h] || this.parent.ends[1]).each(function(e6) {
                  e6.italicize(true).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"), e6.ctrlSeq = e6.letter;
                });
                e:
                  for (var a2 = 0, l2 = o2[1] || this.parent.ends[h]; a2 < r4.length; a2 += 1, l2 = l2[1])
                    for (var c2 = i2(t5._maxLength, r4.length - a2); c2 > 0; c2 -= 1) {
                      var u2 = r4.slice(a2, a2 + c2);
                      if (t5.hasOwnProperty(u2)) {
                        for (var f2 = 0, p2 = l2; f2 < c2; f2 += 1, p2 = p2[1]) {
                          p2.italicize(false);
                          var d2 = p2;
                        }
                        var m2 = Te.hasOwnProperty(u2);
                        if (l2.ctrlSeq = (m2 ? "\\" : "\\operatorname{") + l2.ctrlSeq, d2.ctrlSeq += m2 ? " " : "}", Ce.hasOwnProperty(u2) && d2[h][h][h].jQ.addClass("mq-last"), n4(l2[h]) || l2.jQ.addClass("mq-first"), !n4(d2[1]))
                          if (d2[1] instanceof se) {
                            var g2 = d2[1];
                            (g2.siblingCreated = g2.siblingDeleted = function() {
                              g2.jQ.toggleClass("mq-after-operator-name", !(g2[1] instanceof me));
                            })();
                          } else
                            d2.jQ.toggleClass("mq-last", !(d2[1] instanceof me));
                        a2 += c2 - 1, l2 = d2;
                        continue e;
                      }
                    }
              }
            };
          }), Te = {}, ke = j.p.autoOperatorNames = { _maxLength: 9 }, Ce = { limsup: 1, liminf: 1, projlim: 1, injlim: 1 };
          !function() {
            for (var e4 = "arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" "), t4 = 0; t4 < e4.length; t4 += 1)
              Te[e4[t4]] = ke[e4[t4]] = 1;
            var n4 = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");
            for (t4 = 0; t4 < n4.length; t4 += 1)
              Te[n4[t4]] = 1;
            var r4 = "sin cos tan sec cosec csc cotan cot ctg".split(" ");
            for (t4 = 0; t4 < r4.length; t4 += 1)
              ke[r4[t4]] = ke["arc" + r4[t4]] = ke[r4[t4] + "h"] = ke["ar" + r4[t4] + "h"] = ke["arc" + r4[t4] + "h"] = 1;
            var i3 = "gcf hcf lcm proj span".split(" ");
            for (t4 = 0; t4 < i3.length; t4 += 1)
              ke[i3[t4]] = 1;
          }(), S.autoOperatorNames = function(e4) {
            if (!/^[a-z]+(?: [a-z]+)*$/i.test(e4))
              throw '"' + e4 + '" not a space-delimited list of only letters';
            for (var t4 = e4.split(" "), n4 = {}, r4 = 0, i3 = 0; i3 < t4.length; i3 += 1) {
              var s2 = t4[i3];
              if (s2.length < 2)
                throw '"' + s2 + '" not minimum length of 2';
              n4[s2] = 1, r4 = o(r4, s2.length);
            }
            return n4._maxLength = r4, n4;
          };
          var Oe = d($, function(e4, t4) {
            e4.init = function(e5) {
              this.ctrlSeq = e5;
            }, e4.createLeftOf = function(e5) {
              for (var t5 = this.ctrlSeq, n4 = 0; n4 < t5.length; n4 += 1)
                we(t5.charAt(n4)).createLeftOf(e5);
            }, e4.parser = function() {
              for (var e5 = this.ctrlSeq, t5 = U(), n4 = 0; n4 < e5.length; n4 += 1)
                we(e5.charAt(n4)).adopt(t5, t5.ends[1], 0);
              return P.succeed(t5.children());
            };
          });
          for (var je in ke)
            ke.hasOwnProperty(je) && (q[je] = Oe);
          q.operatorname = d(B, function(e4) {
            e4.createLeftOf = s, e4.numBlocks = function() {
              return 1;
            }, e4.parser = function() {
              return H.block.map(function(e5) {
                return e5.children();
              });
            };
          }), q.f = d(we, function(e4, t4) {
            e4.init = function() {
              $.p.init.call(this, this.letter = "f", '<var class="mq-f">f</var>');
            }, e4.italicize = function(e5) {
              return this.jQ.html("f").toggleClass("mq-f", e5), t4.italicize.apply(this, arguments);
            };
          }), q[" "] = q.space = f(W, "\\ ", "&nbsp;"), q["'"] = q.prime = f(W, "'", "&prime;"), q["″"] = q.dprime = f(W, "″", "&Prime;"), q.backslash = f(W, "\\backslash ", "\\"), w["\\"] || (w["\\"] = q.backslash), q.$ = f(W, "\\$", "$");
          var Se = d($, function(e4, t4) {
            e4.init = function(e5, n4) {
              t4.init.call(this, e5, '<span class="mq-nonSymbola">' + (n4 || e5) + "</span>");
            };
          });
          q["@"] = Se, q["&"] = f(Se, "\\&", "&amp;"), q["%"] = f(Se, "\\%", "%"), q.alpha = q.beta = q.gamma = q.delta = q.zeta = q.eta = q.theta = q.iota = q.kappa = q.mu = q.nu = q.xi = q.rho = q.sigma = q.tau = q.chi = q.psi = q.omega = d(qe, function(e4, t4) {
            e4.init = function(e5) {
              t4.init.call(this, "\\" + e5 + " ", "&" + e5 + ";");
            };
          }), q.phi = f(qe, "\\phi ", "&#981;"), q.phiv = q.varphi = f(qe, "\\varphi ", "&phi;"), q.epsilon = f(qe, "\\epsilon ", "&#1013;"), q.epsiv = q.varepsilon = f(qe, "\\varepsilon ", "&epsilon;"), q.piv = q.varpi = f(qe, "\\varpi ", "&piv;"), q.sigmaf = q.sigmav = q.varsigma = f(qe, "\\varsigma ", "&sigmaf;"), q.thetav = q.vartheta = q.thetasym = f(qe, "\\vartheta ", "&thetasym;"), q.upsilon = q.upsi = f(qe, "\\upsilon ", "&upsilon;"), q.gammad = q.Gammad = q.digamma = f(qe, "\\digamma ", "&#989;"), q.kappav = q.varkappa = f(qe, "\\varkappa ", "&#1008;"), q.rhov = q.varrho = f(qe, "\\varrho ", "&#1009;"), q.pi = q["π"] = f(Se, "\\pi ", "&pi;"), q.lambda = f(Se, "\\lambda ", "&lambda;"), q.Upsilon = q.Upsi = q.upsih = q.Upsih = f($, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>'), q.Gamma = q.Delta = q.Theta = q.Lambda = q.Xi = q.Pi = q.Sigma = q.Phi = q.Psi = q.Omega = q.forall = d(W, function(e4, t4) {
            e4.init = function(e5) {
              t4.init.call(this, "\\" + e5 + " ", "&" + e5 + ";");
            };
          });
          var De = d(B, function(e4) {
            e4.init = function(e5) {
              this.latex = e5;
            }, e4.createLeftOf = function(e5) {
              var t4 = H.parse(this.latex);
              t4.children().adopt(e5.parent, e5[h], e5[1]), e5[h] = t4.ends[1], t4.jQize().insertBefore(e5.jQ), t4.finalizeInsert(e5.options, e5), t4.ends[1][1].siblingCreated && t4.ends[1][1].siblingCreated(e5.options, h), t4.ends[h][h].siblingCreated && t4.ends[h][h].siblingCreated(e5.options, 1), e5.parent.bubble("reflow");
            }, e4.parser = function() {
              var e5 = H.parse(this.latex).children();
              return P.succeed(e5);
            };
          });
          q["¹"] = f(De, "^1"), q["²"] = f(De, "^2"), q["³"] = f(De, "^3"), q["¼"] = f(De, "\\frac14"), q["½"] = f(De, "\\frac12"), q["¾"] = f(De, "\\frac34");
          var Ee = d(X, function(e4) {
            e4.init = W.prototype.init, e4.contactWeld = e4.siblingCreated = e4.siblingDeleted = function(e5, t4) {
              if (1 !== t4)
                return this.jQ[0].className = function e6(t5) {
                  return t5[h] ? t5[h] instanceof X || /^[,;:\(\[]$/.test(t5[h].ctrlSeq) ? "" : "mq-binary-operator" : t5.parent && t5.parent.parent && t5.parent.parent.isStyleBlock() ? e6(t5.parent.parent) : "";
                }(this), this;
            };
          });
          q["+"] = f(Ee, "+", "+"), q["–"] = q["-"] = f(Ee, "-", "&minus;"), q["±"] = q.pm = q.plusmn = q.plusminus = f(Ee, "\\pm ", "&plusmn;"), q.mp = q.mnplus = q.minusplus = f(Ee, "\\mp ", "&#8723;"), w["*"] = q.sdot = q.cdot = f(X, "\\cdot ", "&middot;", "*");
          var Ae = d(X, function(e4, t4) {
            e4.init = function(e5, n4) {
              this.data = e5, this.strict = n4;
              var r4 = n4 ? "Strict" : "";
              t4.init.call(this, e5["ctrlSeq" + r4], e5["html" + r4], e5["text" + r4]);
            }, e4.swap = function(e5) {
              this.strict = e5;
              var t5 = e5 ? "Strict" : "";
              this.ctrlSeq = this.data["ctrlSeq" + t5], this.jQ.html(this.data["html" + t5]), this.textTemplate = [this.data["text" + t5]];
            }, e4.deleteTowards = function(e5, n4) {
              if (e5 === h && !this.strict)
                return this.swap(true), void this.bubble("reflow");
              t4.deleteTowards.apply(this, arguments);
            };
          }), Le = { ctrlSeq: "\\le ", html: "&le;", text: "≤", ctrlSeqStrict: "<", htmlStrict: "&lt;", textStrict: "<" }, _e = { ctrlSeq: "\\ge ", html: "&ge;", text: "≥", ctrlSeqStrict: ">", htmlStrict: "&gt;", textStrict: ">" };
          q["<"] = q.lt = f(Ae, Le, true), q[">"] = q.gt = f(Ae, _e, true), q["≤"] = q.le = q.leq = f(Ae, Le, false), q["≥"] = q.ge = q.geq = f(Ae, _e, false);
          var Ne = d(X, function(e4, t4) {
            e4.init = function() {
              t4.init.call(this, "=", "=");
            }, e4.createLeftOf = function(e5) {
              if (e5[h] instanceof Ae && e5[h].strict)
                return e5[h].swap(false), void e5[h].bubble("reflow");
              t4.createLeftOf.apply(this, arguments);
            };
          });
          q["="] = Ne, q["×"] = q.times = f(X, "\\times ", "&times;", "[x]"), q["÷"] = q.div = q.divide = q.divides = f(X, "\\div ", "&divide;", "[/]"), w["~"] = q.sim = f(X, "\\sim ", "~", "~");
          var Qe = Q(1);
          for (var Re in Qe)
            !function(e4, t4) {
              "function" == typeof t4 ? (L[e4] = function() {
                return A(), t4.apply(this, arguments);
              }, L[e4].prototype = t4.prototype) : L[e4] = t4;
            }(Re, Qe[Re]);
        }(), e2.exports = window.MathQuill;
      }, 755: function(e2, t2) {
        var n2;
        !function(t3, n3) {
          "object" == typeof e2.exports ? e2.exports = t3.document ? n3(t3, true) : function(e3) {
            if (!e3.document)
              throw new Error("jQuery requires a window with a document");
            return n3(e3);
          } : n3(t3);
        }("undefined" != typeof window ? window : this, function(r2, i2) {
          var o = [], s = Object.getPrototypeOf, a = o.slice, l = o.flat ? function(e3) {
            return o.flat.call(e3);
          } : function(e3) {
            return o.concat.apply([], e3);
          }, c = o.push, u = o.indexOf, f = {}, p = f.toString, d = f.hasOwnProperty, h = d.toString, m = h.call(Object), g = {}, v = function(e3) {
            return "function" == typeof e3 && "number" != typeof e3.nodeType && "function" != typeof e3.item;
          }, b = function(e3) {
            return null != e3 && e3 === e3.window;
          }, y = r2.document, x = { type: true, src: true, nonce: true, noModule: true };
          function q(e3, t3, n3) {
            var r3, i3, o2 = (n3 = n3 || y).createElement("script");
            if (o2.text = e3, t3)
              for (r3 in x)
                (i3 = t3[r3] || t3.getAttribute && t3.getAttribute(r3)) && o2.setAttribute(r3, i3);
            n3.head.appendChild(o2).parentNode.removeChild(o2);
          }
          function w(e3) {
            return null == e3 ? e3 + "" : "object" == typeof e3 || "function" == typeof e3 ? f[p.call(e3)] || "object" : typeof e3;
          }
          var T = "3.6.0", k = function(e3, t3) {
            return new k.fn.init(e3, t3);
          };
          function C(e3) {
            var t3 = !!e3 && "length" in e3 && e3.length, n3 = w(e3);
            return !v(e3) && !b(e3) && ("array" === n3 || 0 === t3 || "number" == typeof t3 && t3 > 0 && t3 - 1 in e3);
          }
          k.fn = k.prototype = { jquery: T, constructor: k, length: 0, toArray: function() {
            return a.call(this);
          }, get: function(e3) {
            return null == e3 ? a.call(this) : e3 < 0 ? this[e3 + this.length] : this[e3];
          }, pushStack: function(e3) {
            var t3 = k.merge(this.constructor(), e3);
            return t3.prevObject = this, t3;
          }, each: function(e3) {
            return k.each(this, e3);
          }, map: function(e3) {
            return this.pushStack(k.map(this, function(t3, n3) {
              return e3.call(t3, n3, t3);
            }));
          }, slice: function() {
            return this.pushStack(a.apply(this, arguments));
          }, first: function() {
            return this.eq(0);
          }, last: function() {
            return this.eq(-1);
          }, even: function() {
            return this.pushStack(k.grep(this, function(e3, t3) {
              return (t3 + 1) % 2;
            }));
          }, odd: function() {
            return this.pushStack(k.grep(this, function(e3, t3) {
              return t3 % 2;
            }));
          }, eq: function(e3) {
            var t3 = this.length, n3 = +e3 + (e3 < 0 ? t3 : 0);
            return this.pushStack(n3 >= 0 && n3 < t3 ? [this[n3]] : []);
          }, end: function() {
            return this.prevObject || this.constructor();
          }, push: c, sort: o.sort, splice: o.splice }, k.extend = k.fn.extend = function() {
            var e3, t3, n3, r3, i3, o2, s2 = arguments[0] || {}, a2 = 1, l2 = arguments.length, c2 = false;
            for ("boolean" == typeof s2 && (c2 = s2, s2 = arguments[a2] || {}, a2++), "object" == typeof s2 || v(s2) || (s2 = {}), a2 === l2 && (s2 = this, a2--); a2 < l2; a2++)
              if (null != (e3 = arguments[a2]))
                for (t3 in e3)
                  r3 = e3[t3], "__proto__" !== t3 && s2 !== r3 && (c2 && r3 && (k.isPlainObject(r3) || (i3 = Array.isArray(r3))) ? (n3 = s2[t3], o2 = i3 && !Array.isArray(n3) ? [] : i3 || k.isPlainObject(n3) ? n3 : {}, i3 = false, s2[t3] = k.extend(c2, o2, r3)) : void 0 !== r3 && (s2[t3] = r3));
            return s2;
          }, k.extend({ expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e3) {
            throw new Error(e3);
          }, noop: function() {
          }, isPlainObject: function(e3) {
            var t3, n3;
            return !(!e3 || "[object Object]" !== p.call(e3) || (t3 = s(e3)) && ("function" != typeof (n3 = d.call(t3, "constructor") && t3.constructor) || h.call(n3) !== m));
          }, isEmptyObject: function(e3) {
            var t3;
            for (t3 in e3)
              return false;
            return true;
          }, globalEval: function(e3, t3, n3) {
            q(e3, { nonce: t3 && t3.nonce }, n3);
          }, each: function(e3, t3) {
            var n3, r3 = 0;
            if (C(e3))
              for (n3 = e3.length; r3 < n3 && false !== t3.call(e3[r3], r3, e3[r3]); r3++)
                ;
            else
              for (r3 in e3)
                if (false === t3.call(e3[r3], r3, e3[r3]))
                  break;
            return e3;
          }, makeArray: function(e3, t3) {
            var n3 = t3 || [];
            return null != e3 && (C(Object(e3)) ? k.merge(n3, "string" == typeof e3 ? [e3] : e3) : c.call(n3, e3)), n3;
          }, inArray: function(e3, t3, n3) {
            return null == t3 ? -1 : u.call(t3, e3, n3);
          }, merge: function(e3, t3) {
            for (var n3 = +t3.length, r3 = 0, i3 = e3.length; r3 < n3; r3++)
              e3[i3++] = t3[r3];
            return e3.length = i3, e3;
          }, grep: function(e3, t3, n3) {
            for (var r3 = [], i3 = 0, o2 = e3.length, s2 = !n3; i3 < o2; i3++)
              !t3(e3[i3], i3) !== s2 && r3.push(e3[i3]);
            return r3;
          }, map: function(e3, t3, n3) {
            var r3, i3, o2 = 0, s2 = [];
            if (C(e3))
              for (r3 = e3.length; o2 < r3; o2++)
                null != (i3 = t3(e3[o2], o2, n3)) && s2.push(i3);
            else
              for (o2 in e3)
                null != (i3 = t3(e3[o2], o2, n3)) && s2.push(i3);
            return l(s2);
          }, guid: 1, support: g }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e3, t3) {
            f["[object " + t3 + "]"] = t3.toLowerCase();
          });
          var O = function(e3) {
            var t3, n3, r3, i3, o2, s2, a2, l2, c2, u2, f2, p2, d2, h2, m2, g2, v2, b2, y2, x2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), q2 = e3.document, w2 = 0, T2 = 0, k2 = le2(), C2 = le2(), O2 = le2(), j2 = le2(), S2 = function(e4, t4) {
              return e4 === t4 && (f2 = true), 0;
            }, D2 = {}.hasOwnProperty, E2 = [], A2 = E2.pop, L2 = E2.push, _2 = E2.push, N2 = E2.slice, Q2 = function(e4, t4) {
              for (var n4 = 0, r4 = e4.length; n4 < r4; n4++)
                if (e4[n4] === t4)
                  return n4;
              return -1;
            }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I2 = "[\\x20\\t\\r\\n\\f]", M2 = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", z2 = "\\[[\\x20\\t\\r\\n\\f]*(" + M2 + ")(?:" + I2 + "*([*^$|!~]?=)" + I2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + M2 + "))|)" + I2 + "*\\]", P2 = ":(" + M2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + z2 + ")*)|.*)\\)|)", H2 = new RegExp(I2 + "+", "g"), F2 = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), B2 = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), $2 = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), W2 = new RegExp(I2 + "|>"), X2 = new RegExp(P2), U2 = new RegExp("^" + M2 + "$"), V2 = { ID: new RegExp("^#(" + M2 + ")"), CLASS: new RegExp("^\\.(" + M2 + ")"), TAG: new RegExp("^(" + M2 + "|[*])"), ATTR: new RegExp("^" + z2), PSEUDO: new RegExp("^" + P2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i") }, G2 = /HTML$/i, Y2 = /^(?:input|select|textarea|button)$/i, Z2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, J2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e4, t4) {
              var n4 = "0x" + e4.slice(1) - 65536;
              return t4 || (n4 < 0 ? String.fromCharCode(n4 + 65536) : String.fromCharCode(n4 >> 10 | 55296, 1023 & n4 | 56320));
            }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e4, t4) {
              return t4 ? "\0" === e4 ? "�" : e4.slice(0, -1) + "\\" + e4.charCodeAt(e4.length - 1).toString(16) + " " : "\\" + e4;
            }, oe2 = function() {
              p2();
            }, se2 = xe2(function(e4) {
              return true === e4.disabled && "fieldset" === e4.nodeName.toLowerCase();
            }, { dir: "parentNode", next: "legend" });
            try {
              _2.apply(E2 = N2.call(q2.childNodes), q2.childNodes), E2[q2.childNodes.length].nodeType;
            } catch (e4) {
              _2 = { apply: E2.length ? function(e5, t4) {
                L2.apply(e5, N2.call(t4));
              } : function(e5, t4) {
                for (var n4 = e5.length, r4 = 0; e5[n4++] = t4[r4++]; )
                  ;
                e5.length = n4 - 1;
              } };
            }
            function ae2(e4, t4, r4, i4) {
              var o3, a3, c3, u3, f3, h3, v3, b3 = t4 && t4.ownerDocument, q3 = t4 ? t4.nodeType : 9;
              if (r4 = r4 || [], "string" != typeof e4 || !e4 || 1 !== q3 && 9 !== q3 && 11 !== q3)
                return r4;
              if (!i4 && (p2(t4), t4 = t4 || d2, m2)) {
                if (11 !== q3 && (f3 = J2.exec(e4)))
                  if (o3 = f3[1]) {
                    if (9 === q3) {
                      if (!(c3 = t4.getElementById(o3)))
                        return r4;
                      if (c3.id === o3)
                        return r4.push(c3), r4;
                    } else if (b3 && (c3 = b3.getElementById(o3)) && y2(t4, c3) && c3.id === o3)
                      return r4.push(c3), r4;
                  } else {
                    if (f3[2])
                      return _2.apply(r4, t4.getElementsByTagName(e4)), r4;
                    if ((o3 = f3[3]) && n3.getElementsByClassName && t4.getElementsByClassName)
                      return _2.apply(r4, t4.getElementsByClassName(o3)), r4;
                  }
                if (n3.qsa && !j2[e4 + " "] && (!g2 || !g2.test(e4)) && (1 !== q3 || "object" !== t4.nodeName.toLowerCase())) {
                  if (v3 = e4, b3 = t4, 1 === q3 && (W2.test(e4) || $2.test(e4))) {
                    for ((b3 = ee2.test(e4) && ve2(t4.parentNode) || t4) === t4 && n3.scope || ((u3 = t4.getAttribute("id")) ? u3 = u3.replace(re2, ie2) : t4.setAttribute("id", u3 = x2)), a3 = (h3 = s2(e4)).length; a3--; )
                      h3[a3] = (u3 ? "#" + u3 : ":scope") + " " + ye2(h3[a3]);
                    v3 = h3.join(",");
                  }
                  try {
                    return _2.apply(r4, b3.querySelectorAll(v3)), r4;
                  } catch (t5) {
                    j2(e4, true);
                  } finally {
                    u3 === x2 && t4.removeAttribute("id");
                  }
                }
              }
              return l2(e4.replace(F2, "$1"), t4, r4, i4);
            }
            function le2() {
              var e4 = [];
              return function t4(n4, i4) {
                return e4.push(n4 + " ") > r3.cacheLength && delete t4[e4.shift()], t4[n4 + " "] = i4;
              };
            }
            function ce2(e4) {
              return e4[x2] = true, e4;
            }
            function ue2(e4) {
              var t4 = d2.createElement("fieldset");
              try {
                return !!e4(t4);
              } catch (e5) {
                return false;
              } finally {
                t4.parentNode && t4.parentNode.removeChild(t4), t4 = null;
              }
            }
            function fe2(e4, t4) {
              for (var n4 = e4.split("|"), i4 = n4.length; i4--; )
                r3.attrHandle[n4[i4]] = t4;
            }
            function pe2(e4, t4) {
              var n4 = t4 && e4, r4 = n4 && 1 === e4.nodeType && 1 === t4.nodeType && e4.sourceIndex - t4.sourceIndex;
              if (r4)
                return r4;
              if (n4) {
                for (; n4 = n4.nextSibling; )
                  if (n4 === t4)
                    return -1;
              }
              return e4 ? 1 : -1;
            }
            function de2(e4) {
              return function(t4) {
                return "input" === t4.nodeName.toLowerCase() && t4.type === e4;
              };
            }
            function he2(e4) {
              return function(t4) {
                var n4 = t4.nodeName.toLowerCase();
                return ("input" === n4 || "button" === n4) && t4.type === e4;
              };
            }
            function me2(e4) {
              return function(t4) {
                return "form" in t4 ? t4.parentNode && false === t4.disabled ? "label" in t4 ? "label" in t4.parentNode ? t4.parentNode.disabled === e4 : t4.disabled === e4 : t4.isDisabled === e4 || t4.isDisabled !== !e4 && se2(t4) === e4 : t4.disabled === e4 : "label" in t4 && t4.disabled === e4;
              };
            }
            function ge2(e4) {
              return ce2(function(t4) {
                return t4 = +t4, ce2(function(n4, r4) {
                  for (var i4, o3 = e4([], n4.length, t4), s3 = o3.length; s3--; )
                    n4[i4 = o3[s3]] && (n4[i4] = !(r4[i4] = n4[i4]));
                });
              });
            }
            function ve2(e4) {
              return e4 && void 0 !== e4.getElementsByTagName && e4;
            }
            for (t3 in n3 = ae2.support = {}, o2 = ae2.isXML = function(e4) {
              var t4 = e4 && e4.namespaceURI, n4 = e4 && (e4.ownerDocument || e4).documentElement;
              return !G2.test(t4 || n4 && n4.nodeName || "HTML");
            }, p2 = ae2.setDocument = function(e4) {
              var t4, i4, s3 = e4 ? e4.ownerDocument || e4 : q2;
              return s3 != d2 && 9 === s3.nodeType && s3.documentElement ? (h2 = (d2 = s3).documentElement, m2 = !o2(d2), q2 != d2 && (i4 = d2.defaultView) && i4.top !== i4 && (i4.addEventListener ? i4.addEventListener("unload", oe2, false) : i4.attachEvent && i4.attachEvent("onunload", oe2)), n3.scope = ue2(function(e5) {
                return h2.appendChild(e5).appendChild(d2.createElement("div")), void 0 !== e5.querySelectorAll && !e5.querySelectorAll(":scope fieldset div").length;
              }), n3.attributes = ue2(function(e5) {
                return e5.className = "i", !e5.getAttribute("className");
              }), n3.getElementsByTagName = ue2(function(e5) {
                return e5.appendChild(d2.createComment("")), !e5.getElementsByTagName("*").length;
              }), n3.getElementsByClassName = K2.test(d2.getElementsByClassName), n3.getById = ue2(function(e5) {
                return h2.appendChild(e5).id = x2, !d2.getElementsByName || !d2.getElementsByName(x2).length;
              }), n3.getById ? (r3.filter.ID = function(e5) {
                var t5 = e5.replace(te2, ne2);
                return function(e6) {
                  return e6.getAttribute("id") === t5;
                };
              }, r3.find.ID = function(e5, t5) {
                if (void 0 !== t5.getElementById && m2) {
                  var n4 = t5.getElementById(e5);
                  return n4 ? [n4] : [];
                }
              }) : (r3.filter.ID = function(e5) {
                var t5 = e5.replace(te2, ne2);
                return function(e6) {
                  var n4 = void 0 !== e6.getAttributeNode && e6.getAttributeNode("id");
                  return n4 && n4.value === t5;
                };
              }, r3.find.ID = function(e5, t5) {
                if (void 0 !== t5.getElementById && m2) {
                  var n4, r4, i5, o3 = t5.getElementById(e5);
                  if (o3) {
                    if ((n4 = o3.getAttributeNode("id")) && n4.value === e5)
                      return [o3];
                    for (i5 = t5.getElementsByName(e5), r4 = 0; o3 = i5[r4++]; )
                      if ((n4 = o3.getAttributeNode("id")) && n4.value === e5)
                        return [o3];
                  }
                  return [];
                }
              }), r3.find.TAG = n3.getElementsByTagName ? function(e5, t5) {
                return void 0 !== t5.getElementsByTagName ? t5.getElementsByTagName(e5) : n3.qsa ? t5.querySelectorAll(e5) : void 0;
              } : function(e5, t5) {
                var n4, r4 = [], i5 = 0, o3 = t5.getElementsByTagName(e5);
                if ("*" === e5) {
                  for (; n4 = o3[i5++]; )
                    1 === n4.nodeType && r4.push(n4);
                  return r4;
                }
                return o3;
              }, r3.find.CLASS = n3.getElementsByClassName && function(e5, t5) {
                if (void 0 !== t5.getElementsByClassName && m2)
                  return t5.getElementsByClassName(e5);
              }, v2 = [], g2 = [], (n3.qsa = K2.test(d2.querySelectorAll)) && (ue2(function(e5) {
                var t5;
                h2.appendChild(e5).innerHTML = "<a id='" + x2 + "'></a><select id='" + x2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e5.querySelectorAll("[msallowcapture^='']").length && g2.push(`[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|"")`), e5.querySelectorAll("[selected]").length || g2.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R2 + ")"), e5.querySelectorAll("[id~=" + x2 + "-]").length || g2.push("~="), (t5 = d2.createElement("input")).setAttribute("name", ""), e5.appendChild(t5), e5.querySelectorAll("[name='']").length || g2.push(`\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|"")`), e5.querySelectorAll(":checked").length || g2.push(":checked"), e5.querySelectorAll("a#" + x2 + "+*").length || g2.push(".#.+[+~]"), e5.querySelectorAll("\\\f"), g2.push("[\\r\\n\\f]");
              }), ue2(function(e5) {
                e5.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t5 = d2.createElement("input");
                t5.setAttribute("type", "hidden"), e5.appendChild(t5).setAttribute("name", "D"), e5.querySelectorAll("[name=d]").length && g2.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e5.querySelectorAll(":enabled").length && g2.push(":enabled", ":disabled"), h2.appendChild(e5).disabled = true, 2 !== e5.querySelectorAll(":disabled").length && g2.push(":enabled", ":disabled"), e5.querySelectorAll("*,:x"), g2.push(",.*:");
              })), (n3.matchesSelector = K2.test(b2 = h2.matches || h2.webkitMatchesSelector || h2.mozMatchesSelector || h2.oMatchesSelector || h2.msMatchesSelector)) && ue2(function(e5) {
                n3.disconnectedMatch = b2.call(e5, "*"), b2.call(e5, "[s!='']:x"), v2.push("!=", P2);
              }), g2 = g2.length && new RegExp(g2.join("|")), v2 = v2.length && new RegExp(v2.join("|")), t4 = K2.test(h2.compareDocumentPosition), y2 = t4 || K2.test(h2.contains) ? function(e5, t5) {
                var n4 = 9 === e5.nodeType ? e5.documentElement : e5, r4 = t5 && t5.parentNode;
                return e5 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e5.compareDocumentPosition && 16 & e5.compareDocumentPosition(r4)));
              } : function(e5, t5) {
                if (t5) {
                  for (; t5 = t5.parentNode; )
                    if (t5 === e5)
                      return true;
                }
                return false;
              }, S2 = t4 ? function(e5, t5) {
                if (e5 === t5)
                  return f2 = true, 0;
                var r4 = !e5.compareDocumentPosition - !t5.compareDocumentPosition;
                return r4 || (1 & (r4 = (e5.ownerDocument || e5) == (t5.ownerDocument || t5) ? e5.compareDocumentPosition(t5) : 1) || !n3.sortDetached && t5.compareDocumentPosition(e5) === r4 ? e5 == d2 || e5.ownerDocument == q2 && y2(q2, e5) ? -1 : t5 == d2 || t5.ownerDocument == q2 && y2(q2, t5) ? 1 : u2 ? Q2(u2, e5) - Q2(u2, t5) : 0 : 4 & r4 ? -1 : 1);
              } : function(e5, t5) {
                if (e5 === t5)
                  return f2 = true, 0;
                var n4, r4 = 0, i5 = e5.parentNode, o3 = t5.parentNode, s4 = [e5], a3 = [t5];
                if (!i5 || !o3)
                  return e5 == d2 ? -1 : t5 == d2 ? 1 : i5 ? -1 : o3 ? 1 : u2 ? Q2(u2, e5) - Q2(u2, t5) : 0;
                if (i5 === o3)
                  return pe2(e5, t5);
                for (n4 = e5; n4 = n4.parentNode; )
                  s4.unshift(n4);
                for (n4 = t5; n4 = n4.parentNode; )
                  a3.unshift(n4);
                for (; s4[r4] === a3[r4]; )
                  r4++;
                return r4 ? pe2(s4[r4], a3[r4]) : s4[r4] == q2 ? -1 : a3[r4] == q2 ? 1 : 0;
              }, d2) : d2;
            }, ae2.matches = function(e4, t4) {
              return ae2(e4, null, null, t4);
            }, ae2.matchesSelector = function(e4, t4) {
              if (p2(e4), n3.matchesSelector && m2 && !j2[t4 + " "] && (!v2 || !v2.test(t4)) && (!g2 || !g2.test(t4)))
                try {
                  var r4 = b2.call(e4, t4);
                  if (r4 || n3.disconnectedMatch || e4.document && 11 !== e4.document.nodeType)
                    return r4;
                } catch (e5) {
                  j2(t4, true);
                }
              return ae2(t4, d2, null, [e4]).length > 0;
            }, ae2.contains = function(e4, t4) {
              return (e4.ownerDocument || e4) != d2 && p2(e4), y2(e4, t4);
            }, ae2.attr = function(e4, t4) {
              (e4.ownerDocument || e4) != d2 && p2(e4);
              var i4 = r3.attrHandle[t4.toLowerCase()], o3 = i4 && D2.call(r3.attrHandle, t4.toLowerCase()) ? i4(e4, t4, !m2) : void 0;
              return void 0 !== o3 ? o3 : n3.attributes || !m2 ? e4.getAttribute(t4) : (o3 = e4.getAttributeNode(t4)) && o3.specified ? o3.value : null;
            }, ae2.escape = function(e4) {
              return (e4 + "").replace(re2, ie2);
            }, ae2.error = function(e4) {
              throw new Error("Syntax error, unrecognized expression: " + e4);
            }, ae2.uniqueSort = function(e4) {
              var t4, r4 = [], i4 = 0, o3 = 0;
              if (f2 = !n3.detectDuplicates, u2 = !n3.sortStable && e4.slice(0), e4.sort(S2), f2) {
                for (; t4 = e4[o3++]; )
                  t4 === e4[o3] && (i4 = r4.push(o3));
                for (; i4--; )
                  e4.splice(r4[i4], 1);
              }
              return u2 = null, e4;
            }, i3 = ae2.getText = function(e4) {
              var t4, n4 = "", r4 = 0, o3 = e4.nodeType;
              if (o3) {
                if (1 === o3 || 9 === o3 || 11 === o3) {
                  if ("string" == typeof e4.textContent)
                    return e4.textContent;
                  for (e4 = e4.firstChild; e4; e4 = e4.nextSibling)
                    n4 += i3(e4);
                } else if (3 === o3 || 4 === o3)
                  return e4.nodeValue;
              } else
                for (; t4 = e4[r4++]; )
                  n4 += i3(t4);
              return n4;
            }, r3 = ae2.selectors = { cacheLength: 50, createPseudo: ce2, match: V2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e4) {
              return e4[1] = e4[1].replace(te2, ne2), e4[3] = (e4[3] || e4[4] || e4[5] || "").replace(te2, ne2), "~=" === e4[2] && (e4[3] = " " + e4[3] + " "), e4.slice(0, 4);
            }, CHILD: function(e4) {
              return e4[1] = e4[1].toLowerCase(), "nth" === e4[1].slice(0, 3) ? (e4[3] || ae2.error(e4[0]), e4[4] = +(e4[4] ? e4[5] + (e4[6] || 1) : 2 * ("even" === e4[3] || "odd" === e4[3])), e4[5] = +(e4[7] + e4[8] || "odd" === e4[3])) : e4[3] && ae2.error(e4[0]), e4;
            }, PSEUDO: function(e4) {
              var t4, n4 = !e4[6] && e4[2];
              return V2.CHILD.test(e4[0]) ? null : (e4[3] ? e4[2] = e4[4] || e4[5] || "" : n4 && X2.test(n4) && (t4 = s2(n4, true)) && (t4 = n4.indexOf(")", n4.length - t4) - n4.length) && (e4[0] = e4[0].slice(0, t4), e4[2] = n4.slice(0, t4)), e4.slice(0, 3));
            } }, filter: { TAG: function(e4) {
              var t4 = e4.replace(te2, ne2).toLowerCase();
              return "*" === e4 ? function() {
                return true;
              } : function(e5) {
                return e5.nodeName && e5.nodeName.toLowerCase() === t4;
              };
            }, CLASS: function(e4) {
              var t4 = k2[e4 + " "];
              return t4 || (t4 = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e4 + "(" + I2 + "|$)")) && k2(e4, function(e5) {
                return t4.test("string" == typeof e5.className && e5.className || void 0 !== e5.getAttribute && e5.getAttribute("class") || "");
              });
            }, ATTR: function(e4, t4, n4) {
              return function(r4) {
                var i4 = ae2.attr(r4, e4);
                return null == i4 ? "!=" === t4 : !t4 || (i4 += "", "=" === t4 ? i4 === n4 : "!=" === t4 ? i4 !== n4 : "^=" === t4 ? n4 && 0 === i4.indexOf(n4) : "*=" === t4 ? n4 && i4.indexOf(n4) > -1 : "$=" === t4 ? n4 && i4.slice(-n4.length) === n4 : "~=" === t4 ? (" " + i4.replace(H2, " ") + " ").indexOf(n4) > -1 : "|=" === t4 && (i4 === n4 || i4.slice(0, n4.length + 1) === n4 + "-"));
              };
            }, CHILD: function(e4, t4, n4, r4, i4) {
              var o3 = "nth" !== e4.slice(0, 3), s3 = "last" !== e4.slice(-4), a3 = "of-type" === t4;
              return 1 === r4 && 0 === i4 ? function(e5) {
                return !!e5.parentNode;
              } : function(t5, n5, l3) {
                var c3, u3, f3, p3, d3, h3, m3 = o3 !== s3 ? "nextSibling" : "previousSibling", g3 = t5.parentNode, v3 = a3 && t5.nodeName.toLowerCase(), b3 = !l3 && !a3, y3 = false;
                if (g3) {
                  if (o3) {
                    for (; m3; ) {
                      for (p3 = t5; p3 = p3[m3]; )
                        if (a3 ? p3.nodeName.toLowerCase() === v3 : 1 === p3.nodeType)
                          return false;
                      h3 = m3 = "only" === e4 && !h3 && "nextSibling";
                    }
                    return true;
                  }
                  if (h3 = [s3 ? g3.firstChild : g3.lastChild], s3 && b3) {
                    for (y3 = (d3 = (c3 = (u3 = (f3 = (p3 = g3)[x2] || (p3[x2] = {}))[p3.uniqueID] || (f3[p3.uniqueID] = {}))[e4] || [])[0] === w2 && c3[1]) && c3[2], p3 = d3 && g3.childNodes[d3]; p3 = ++d3 && p3 && p3[m3] || (y3 = d3 = 0) || h3.pop(); )
                      if (1 === p3.nodeType && ++y3 && p3 === t5) {
                        u3[e4] = [w2, d3, y3];
                        break;
                      }
                  } else if (b3 && (y3 = d3 = (c3 = (u3 = (f3 = (p3 = t5)[x2] || (p3[x2] = {}))[p3.uniqueID] || (f3[p3.uniqueID] = {}))[e4] || [])[0] === w2 && c3[1]), false === y3)
                    for (; (p3 = ++d3 && p3 && p3[m3] || (y3 = d3 = 0) || h3.pop()) && ((a3 ? p3.nodeName.toLowerCase() !== v3 : 1 !== p3.nodeType) || !++y3 || (b3 && ((u3 = (f3 = p3[x2] || (p3[x2] = {}))[p3.uniqueID] || (f3[p3.uniqueID] = {}))[e4] = [w2, y3]), p3 !== t5)); )
                      ;
                  return (y3 -= i4) === r4 || y3 % r4 == 0 && y3 / r4 >= 0;
                }
              };
            }, PSEUDO: function(e4, t4) {
              var n4, i4 = r3.pseudos[e4] || r3.setFilters[e4.toLowerCase()] || ae2.error("unsupported pseudo: " + e4);
              return i4[x2] ? i4(t4) : i4.length > 1 ? (n4 = [e4, e4, "", t4], r3.setFilters.hasOwnProperty(e4.toLowerCase()) ? ce2(function(e5, n5) {
                for (var r4, o3 = i4(e5, t4), s3 = o3.length; s3--; )
                  e5[r4 = Q2(e5, o3[s3])] = !(n5[r4] = o3[s3]);
              }) : function(e5) {
                return i4(e5, 0, n4);
              }) : i4;
            } }, pseudos: { not: ce2(function(e4) {
              var t4 = [], n4 = [], r4 = a2(e4.replace(F2, "$1"));
              return r4[x2] ? ce2(function(e5, t5, n5, i4) {
                for (var o3, s3 = r4(e5, null, i4, []), a3 = e5.length; a3--; )
                  (o3 = s3[a3]) && (e5[a3] = !(t5[a3] = o3));
              }) : function(e5, i4, o3) {
                return t4[0] = e5, r4(t4, null, o3, n4), t4[0] = null, !n4.pop();
              };
            }), has: ce2(function(e4) {
              return function(t4) {
                return ae2(e4, t4).length > 0;
              };
            }), contains: ce2(function(e4) {
              return e4 = e4.replace(te2, ne2), function(t4) {
                return (t4.textContent || i3(t4)).indexOf(e4) > -1;
              };
            }), lang: ce2(function(e4) {
              return U2.test(e4 || "") || ae2.error("unsupported lang: " + e4), e4 = e4.replace(te2, ne2).toLowerCase(), function(t4) {
                var n4;
                do {
                  if (n4 = m2 ? t4.lang : t4.getAttribute("xml:lang") || t4.getAttribute("lang"))
                    return (n4 = n4.toLowerCase()) === e4 || 0 === n4.indexOf(e4 + "-");
                } while ((t4 = t4.parentNode) && 1 === t4.nodeType);
                return false;
              };
            }), target: function(t4) {
              var n4 = e3.location && e3.location.hash;
              return n4 && n4.slice(1) === t4.id;
            }, root: function(e4) {
              return e4 === h2;
            }, focus: function(e4) {
              return e4 === d2.activeElement && (!d2.hasFocus || d2.hasFocus()) && !!(e4.type || e4.href || ~e4.tabIndex);
            }, enabled: me2(false), disabled: me2(true), checked: function(e4) {
              var t4 = e4.nodeName.toLowerCase();
              return "input" === t4 && !!e4.checked || "option" === t4 && !!e4.selected;
            }, selected: function(e4) {
              return e4.parentNode && e4.parentNode.selectedIndex, true === e4.selected;
            }, empty: function(e4) {
              for (e4 = e4.firstChild; e4; e4 = e4.nextSibling)
                if (e4.nodeType < 6)
                  return false;
              return true;
            }, parent: function(e4) {
              return !r3.pseudos.empty(e4);
            }, header: function(e4) {
              return Z2.test(e4.nodeName);
            }, input: function(e4) {
              return Y2.test(e4.nodeName);
            }, button: function(e4) {
              var t4 = e4.nodeName.toLowerCase();
              return "input" === t4 && "button" === e4.type || "button" === t4;
            }, text: function(e4) {
              var t4;
              return "input" === e4.nodeName.toLowerCase() && "text" === e4.type && (null == (t4 = e4.getAttribute("type")) || "text" === t4.toLowerCase());
            }, first: ge2(function() {
              return [0];
            }), last: ge2(function(e4, t4) {
              return [t4 - 1];
            }), eq: ge2(function(e4, t4, n4) {
              return [n4 < 0 ? n4 + t4 : n4];
            }), even: ge2(function(e4, t4) {
              for (var n4 = 0; n4 < t4; n4 += 2)
                e4.push(n4);
              return e4;
            }), odd: ge2(function(e4, t4) {
              for (var n4 = 1; n4 < t4; n4 += 2)
                e4.push(n4);
              return e4;
            }), lt: ge2(function(e4, t4, n4) {
              for (var r4 = n4 < 0 ? n4 + t4 : n4 > t4 ? t4 : n4; --r4 >= 0; )
                e4.push(r4);
              return e4;
            }), gt: ge2(function(e4, t4, n4) {
              for (var r4 = n4 < 0 ? n4 + t4 : n4; ++r4 < t4; )
                e4.push(r4);
              return e4;
            }) } }, r3.pseudos.nth = r3.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
              r3.pseudos[t3] = de2(t3);
            for (t3 in { submit: true, reset: true })
              r3.pseudos[t3] = he2(t3);
            function be2() {
            }
            function ye2(e4) {
              for (var t4 = 0, n4 = e4.length, r4 = ""; t4 < n4; t4++)
                r4 += e4[t4].value;
              return r4;
            }
            function xe2(e4, t4, n4) {
              var r4 = t4.dir, i4 = t4.next, o3 = i4 || r4, s3 = n4 && "parentNode" === o3, a3 = T2++;
              return t4.first ? function(t5, n5, i5) {
                for (; t5 = t5[r4]; )
                  if (1 === t5.nodeType || s3)
                    return e4(t5, n5, i5);
                return false;
              } : function(t5, n5, l3) {
                var c3, u3, f3, p3 = [w2, a3];
                if (l3) {
                  for (; t5 = t5[r4]; )
                    if ((1 === t5.nodeType || s3) && e4(t5, n5, l3))
                      return true;
                } else
                  for (; t5 = t5[r4]; )
                    if (1 === t5.nodeType || s3)
                      if (u3 = (f3 = t5[x2] || (t5[x2] = {}))[t5.uniqueID] || (f3[t5.uniqueID] = {}), i4 && i4 === t5.nodeName.toLowerCase())
                        t5 = t5[r4] || t5;
                      else {
                        if ((c3 = u3[o3]) && c3[0] === w2 && c3[1] === a3)
                          return p3[2] = c3[2];
                        if (u3[o3] = p3, p3[2] = e4(t5, n5, l3))
                          return true;
                      }
                return false;
              };
            }
            function qe2(e4) {
              return e4.length > 1 ? function(t4, n4, r4) {
                for (var i4 = e4.length; i4--; )
                  if (!e4[i4](t4, n4, r4))
                    return false;
                return true;
              } : e4[0];
            }
            function we2(e4, t4, n4, r4, i4) {
              for (var o3, s3 = [], a3 = 0, l3 = e4.length, c3 = null != t4; a3 < l3; a3++)
                (o3 = e4[a3]) && (n4 && !n4(o3, r4, i4) || (s3.push(o3), c3 && t4.push(a3)));
              return s3;
            }
            function Te2(e4, t4, n4, r4, i4, o3) {
              return r4 && !r4[x2] && (r4 = Te2(r4)), i4 && !i4[x2] && (i4 = Te2(i4, o3)), ce2(function(o4, s3, a3, l3) {
                var c3, u3, f3, p3 = [], d3 = [], h3 = s3.length, m3 = o4 || function(e5, t5, n5) {
                  for (var r5 = 0, i5 = t5.length; r5 < i5; r5++)
                    ae2(e5, t5[r5], n5);
                  return n5;
                }(t4 || "*", a3.nodeType ? [a3] : a3, []), g3 = !e4 || !o4 && t4 ? m3 : we2(m3, p3, e4, a3, l3), v3 = n4 ? i4 || (o4 ? e4 : h3 || r4) ? [] : s3 : g3;
                if (n4 && n4(g3, v3, a3, l3), r4)
                  for (c3 = we2(v3, d3), r4(c3, [], a3, l3), u3 = c3.length; u3--; )
                    (f3 = c3[u3]) && (v3[d3[u3]] = !(g3[d3[u3]] = f3));
                if (o4) {
                  if (i4 || e4) {
                    if (i4) {
                      for (c3 = [], u3 = v3.length; u3--; )
                        (f3 = v3[u3]) && c3.push(g3[u3] = f3);
                      i4(null, v3 = [], c3, l3);
                    }
                    for (u3 = v3.length; u3--; )
                      (f3 = v3[u3]) && (c3 = i4 ? Q2(o4, f3) : p3[u3]) > -1 && (o4[c3] = !(s3[c3] = f3));
                  }
                } else
                  v3 = we2(v3 === s3 ? v3.splice(h3, v3.length) : v3), i4 ? i4(null, s3, v3, l3) : _2.apply(s3, v3);
              });
            }
            function ke2(e4) {
              for (var t4, n4, i4, o3 = e4.length, s3 = r3.relative[e4[0].type], a3 = s3 || r3.relative[" "], l3 = s3 ? 1 : 0, u3 = xe2(function(e5) {
                return e5 === t4;
              }, a3, true), f3 = xe2(function(e5) {
                return Q2(t4, e5) > -1;
              }, a3, true), p3 = [function(e5, n5, r4) {
                var i5 = !s3 && (r4 || n5 !== c2) || ((t4 = n5).nodeType ? u3(e5, n5, r4) : f3(e5, n5, r4));
                return t4 = null, i5;
              }]; l3 < o3; l3++)
                if (n4 = r3.relative[e4[l3].type])
                  p3 = [xe2(qe2(p3), n4)];
                else {
                  if ((n4 = r3.filter[e4[l3].type].apply(null, e4[l3].matches))[x2]) {
                    for (i4 = ++l3; i4 < o3 && !r3.relative[e4[i4].type]; i4++)
                      ;
                    return Te2(l3 > 1 && qe2(p3), l3 > 1 && ye2(e4.slice(0, l3 - 1).concat({ value: " " === e4[l3 - 2].type ? "*" : "" })).replace(F2, "$1"), n4, l3 < i4 && ke2(e4.slice(l3, i4)), i4 < o3 && ke2(e4 = e4.slice(i4)), i4 < o3 && ye2(e4));
                  }
                  p3.push(n4);
                }
              return qe2(p3);
            }
            return be2.prototype = r3.filters = r3.pseudos, r3.setFilters = new be2(), s2 = ae2.tokenize = function(e4, t4) {
              var n4, i4, o3, s3, a3, l3, c3, u3 = C2[e4 + " "];
              if (u3)
                return t4 ? 0 : u3.slice(0);
              for (a3 = e4, l3 = [], c3 = r3.preFilter; a3; ) {
                for (s3 in n4 && !(i4 = B2.exec(a3)) || (i4 && (a3 = a3.slice(i4[0].length) || a3), l3.push(o3 = [])), n4 = false, (i4 = $2.exec(a3)) && (n4 = i4.shift(), o3.push({ value: n4, type: i4[0].replace(F2, " ") }), a3 = a3.slice(n4.length)), r3.filter)
                  !(i4 = V2[s3].exec(a3)) || c3[s3] && !(i4 = c3[s3](i4)) || (n4 = i4.shift(), o3.push({ value: n4, type: s3, matches: i4 }), a3 = a3.slice(n4.length));
                if (!n4)
                  break;
              }
              return t4 ? a3.length : a3 ? ae2.error(e4) : C2(e4, l3).slice(0);
            }, a2 = ae2.compile = function(e4, t4) {
              var n4, i4 = [], o3 = [], a3 = O2[e4 + " "];
              if (!a3) {
                for (t4 || (t4 = s2(e4)), n4 = t4.length; n4--; )
                  (a3 = ke2(t4[n4]))[x2] ? i4.push(a3) : o3.push(a3);
                a3 = O2(e4, function(e5, t5) {
                  var n5 = t5.length > 0, i5 = e5.length > 0, o4 = function(o5, s3, a4, l3, u3) {
                    var f3, h3, g3, v3 = 0, b3 = "0", y3 = o5 && [], x3 = [], q3 = c2, T3 = o5 || i5 && r3.find.TAG("*", u3), k3 = w2 += null == q3 ? 1 : Math.random() || 0.1, C3 = T3.length;
                    for (u3 && (c2 = s3 == d2 || s3 || u3); b3 !== C3 && null != (f3 = T3[b3]); b3++) {
                      if (i5 && f3) {
                        for (h3 = 0, s3 || f3.ownerDocument == d2 || (p2(f3), a4 = !m2); g3 = e5[h3++]; )
                          if (g3(f3, s3 || d2, a4)) {
                            l3.push(f3);
                            break;
                          }
                        u3 && (w2 = k3);
                      }
                      n5 && ((f3 = !g3 && f3) && v3--, o5 && y3.push(f3));
                    }
                    if (v3 += b3, n5 && b3 !== v3) {
                      for (h3 = 0; g3 = t5[h3++]; )
                        g3(y3, x3, s3, a4);
                      if (o5) {
                        if (v3 > 0)
                          for (; b3--; )
                            y3[b3] || x3[b3] || (x3[b3] = A2.call(l3));
                        x3 = we2(x3);
                      }
                      _2.apply(l3, x3), u3 && !o5 && x3.length > 0 && v3 + t5.length > 1 && ae2.uniqueSort(l3);
                    }
                    return u3 && (w2 = k3, c2 = q3), y3;
                  };
                  return n5 ? ce2(o4) : o4;
                }(o3, i4)), a3.selector = e4;
              }
              return a3;
            }, l2 = ae2.select = function(e4, t4, n4, i4) {
              var o3, l3, c3, u3, f3, p3 = "function" == typeof e4 && e4, d3 = !i4 && s2(e4 = p3.selector || e4);
              if (n4 = n4 || [], 1 === d3.length) {
                if ((l3 = d3[0] = d3[0].slice(0)).length > 2 && "ID" === (c3 = l3[0]).type && 9 === t4.nodeType && m2 && r3.relative[l3[1].type]) {
                  if (!(t4 = (r3.find.ID(c3.matches[0].replace(te2, ne2), t4) || [])[0]))
                    return n4;
                  p3 && (t4 = t4.parentNode), e4 = e4.slice(l3.shift().value.length);
                }
                for (o3 = V2.needsContext.test(e4) ? 0 : l3.length; o3-- && (c3 = l3[o3], !r3.relative[u3 = c3.type]); )
                  if ((f3 = r3.find[u3]) && (i4 = f3(c3.matches[0].replace(te2, ne2), ee2.test(l3[0].type) && ve2(t4.parentNode) || t4))) {
                    if (l3.splice(o3, 1), !(e4 = i4.length && ye2(l3)))
                      return _2.apply(n4, i4), n4;
                    break;
                  }
              }
              return (p3 || a2(e4, d3))(i4, t4, !m2, n4, !t4 || ee2.test(e4) && ve2(t4.parentNode) || t4), n4;
            }, n3.sortStable = x2.split("").sort(S2).join("") === x2, n3.detectDuplicates = !!f2, p2(), n3.sortDetached = ue2(function(e4) {
              return 1 & e4.compareDocumentPosition(d2.createElement("fieldset"));
            }), ue2(function(e4) {
              return e4.innerHTML = "<a href='#'></a>", "#" === e4.firstChild.getAttribute("href");
            }) || fe2("type|href|height|width", function(e4, t4, n4) {
              if (!n4)
                return e4.getAttribute(t4, "type" === t4.toLowerCase() ? 1 : 2);
            }), n3.attributes && ue2(function(e4) {
              return e4.innerHTML = "<input/>", e4.firstChild.setAttribute("value", ""), "" === e4.firstChild.getAttribute("value");
            }) || fe2("value", function(e4, t4, n4) {
              if (!n4 && "input" === e4.nodeName.toLowerCase())
                return e4.defaultValue;
            }), ue2(function(e4) {
              return null == e4.getAttribute("disabled");
            }) || fe2(R2, function(e4, t4, n4) {
              var r4;
              if (!n4)
                return true === e4[t4] ? t4.toLowerCase() : (r4 = e4.getAttributeNode(t4)) && r4.specified ? r4.value : null;
            }), ae2;
          }(r2);
          k.find = O, k.expr = O.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = O.uniqueSort, k.text = O.getText, k.isXMLDoc = O.isXML, k.contains = O.contains, k.escapeSelector = O.escape;
          var j = function(e3, t3, n3) {
            for (var r3 = [], i3 = void 0 !== n3; (e3 = e3[t3]) && 9 !== e3.nodeType; )
              if (1 === e3.nodeType) {
                if (i3 && k(e3).is(n3))
                  break;
                r3.push(e3);
              }
            return r3;
          }, S = function(e3, t3) {
            for (var n3 = []; e3; e3 = e3.nextSibling)
              1 === e3.nodeType && e3 !== t3 && n3.push(e3);
            return n3;
          }, D = k.expr.match.needsContext;
          function E(e3, t3) {
            return e3.nodeName && e3.nodeName.toLowerCase() === t3.toLowerCase();
          }
          var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e3, t3, n3) {
            return v(t3) ? k.grep(e3, function(e4, r3) {
              return !!t3.call(e4, r3, e4) !== n3;
            }) : t3.nodeType ? k.grep(e3, function(e4) {
              return e4 === t3 !== n3;
            }) : "string" != typeof t3 ? k.grep(e3, function(e4) {
              return u.call(t3, e4) > -1 !== n3;
            }) : k.filter(t3, e3, n3);
          }
          k.filter = function(e3, t3, n3) {
            var r3 = t3[0];
            return n3 && (e3 = ":not(" + e3 + ")"), 1 === t3.length && 1 === r3.nodeType ? k.find.matchesSelector(r3, e3) ? [r3] : [] : k.find.matches(e3, k.grep(t3, function(e4) {
              return 1 === e4.nodeType;
            }));
          }, k.fn.extend({ find: function(e3) {
            var t3, n3, r3 = this.length, i3 = this;
            if ("string" != typeof e3)
              return this.pushStack(k(e3).filter(function() {
                for (t3 = 0; t3 < r3; t3++)
                  if (k.contains(i3[t3], this))
                    return true;
              }));
            for (n3 = this.pushStack([]), t3 = 0; t3 < r3; t3++)
              k.find(e3, i3[t3], n3);
            return r3 > 1 ? k.uniqueSort(n3) : n3;
          }, filter: function(e3) {
            return this.pushStack(L(this, e3 || [], false));
          }, not: function(e3) {
            return this.pushStack(L(this, e3 || [], true));
          }, is: function(e3) {
            return !!L(this, "string" == typeof e3 && D.test(e3) ? k(e3) : e3 || [], false).length;
          } });
          var _, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          (k.fn.init = function(e3, t3, n3) {
            var r3, i3;
            if (!e3)
              return this;
            if (n3 = n3 || _, "string" == typeof e3) {
              if (!(r3 = "<" === e3[0] && ">" === e3[e3.length - 1] && e3.length >= 3 ? [null, e3, null] : N.exec(e3)) || !r3[1] && t3)
                return !t3 || t3.jquery ? (t3 || n3).find(e3) : this.constructor(t3).find(e3);
              if (r3[1]) {
                if (t3 = t3 instanceof k ? t3[0] : t3, k.merge(this, k.parseHTML(r3[1], t3 && t3.nodeType ? t3.ownerDocument || t3 : y, true)), A.test(r3[1]) && k.isPlainObject(t3))
                  for (r3 in t3)
                    v(this[r3]) ? this[r3](t3[r3]) : this.attr(r3, t3[r3]);
                return this;
              }
              return (i3 = y.getElementById(r3[2])) && (this[0] = i3, this.length = 1), this;
            }
            return e3.nodeType ? (this[0] = e3, this.length = 1, this) : v(e3) ? void 0 !== n3.ready ? n3.ready(e3) : e3(k) : k.makeArray(e3, this);
          }).prototype = k.fn, _ = k(y);
          var Q = /^(?:parents|prev(?:Until|All))/, R = { children: true, contents: true, next: true, prev: true };
          function I(e3, t3) {
            for (; (e3 = e3[t3]) && 1 !== e3.nodeType; )
              ;
            return e3;
          }
          k.fn.extend({ has: function(e3) {
            var t3 = k(e3, this), n3 = t3.length;
            return this.filter(function() {
              for (var e4 = 0; e4 < n3; e4++)
                if (k.contains(this, t3[e4]))
                  return true;
            });
          }, closest: function(e3, t3) {
            var n3, r3 = 0, i3 = this.length, o2 = [], s2 = "string" != typeof e3 && k(e3);
            if (!D.test(e3)) {
              for (; r3 < i3; r3++)
                for (n3 = this[r3]; n3 && n3 !== t3; n3 = n3.parentNode)
                  if (n3.nodeType < 11 && (s2 ? s2.index(n3) > -1 : 1 === n3.nodeType && k.find.matchesSelector(n3, e3))) {
                    o2.push(n3);
                    break;
                  }
            }
            return this.pushStack(o2.length > 1 ? k.uniqueSort(o2) : o2);
          }, index: function(e3) {
            return e3 ? "string" == typeof e3 ? u.call(k(e3), this[0]) : u.call(this, e3.jquery ? e3[0] : e3) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }, add: function(e3, t3) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e3, t3))));
          }, addBack: function(e3) {
            return this.add(null == e3 ? this.prevObject : this.prevObject.filter(e3));
          } }), k.each({ parent: function(e3) {
            var t3 = e3.parentNode;
            return t3 && 11 !== t3.nodeType ? t3 : null;
          }, parents: function(e3) {
            return j(e3, "parentNode");
          }, parentsUntil: function(e3, t3, n3) {
            return j(e3, "parentNode", n3);
          }, next: function(e3) {
            return I(e3, "nextSibling");
          }, prev: function(e3) {
            return I(e3, "previousSibling");
          }, nextAll: function(e3) {
            return j(e3, "nextSibling");
          }, prevAll: function(e3) {
            return j(e3, "previousSibling");
          }, nextUntil: function(e3, t3, n3) {
            return j(e3, "nextSibling", n3);
          }, prevUntil: function(e3, t3, n3) {
            return j(e3, "previousSibling", n3);
          }, siblings: function(e3) {
            return S((e3.parentNode || {}).firstChild, e3);
          }, children: function(e3) {
            return S(e3.firstChild);
          }, contents: function(e3) {
            return null != e3.contentDocument && s(e3.contentDocument) ? e3.contentDocument : (E(e3, "template") && (e3 = e3.content || e3), k.merge([], e3.childNodes));
          } }, function(e3, t3) {
            k.fn[e3] = function(n3, r3) {
              var i3 = k.map(this, t3, n3);
              return "Until" !== e3.slice(-5) && (r3 = n3), r3 && "string" == typeof r3 && (i3 = k.filter(r3, i3)), this.length > 1 && (R[e3] || k.uniqueSort(i3), Q.test(e3) && i3.reverse()), this.pushStack(i3);
            };
          });
          var M = /[^\x20\t\r\n\f]+/g;
          function z(e3) {
            return e3;
          }
          function P(e3) {
            throw e3;
          }
          function H(e3, t3, n3, r3) {
            var i3;
            try {
              e3 && v(i3 = e3.promise) ? i3.call(e3).done(t3).fail(n3) : e3 && v(i3 = e3.then) ? i3.call(e3, t3, n3) : t3.apply(void 0, [e3].slice(r3));
            } catch (e4) {
              n3.apply(void 0, [e4]);
            }
          }
          k.Callbacks = function(e3) {
            e3 = "string" == typeof e3 ? function(e4) {
              var t4 = {};
              return k.each(e4.match(M) || [], function(e5, n4) {
                t4[n4] = true;
              }), t4;
            }(e3) : k.extend({}, e3);
            var t3, n3, r3, i3, o2 = [], s2 = [], a2 = -1, l2 = function() {
              for (i3 = i3 || e3.once, r3 = t3 = true; s2.length; a2 = -1)
                for (n3 = s2.shift(); ++a2 < o2.length; )
                  false === o2[a2].apply(n3[0], n3[1]) && e3.stopOnFalse && (a2 = o2.length, n3 = false);
              e3.memory || (n3 = false), t3 = false, i3 && (o2 = n3 ? [] : "");
            }, c2 = { add: function() {
              return o2 && (n3 && !t3 && (a2 = o2.length - 1, s2.push(n3)), function t4(n4) {
                k.each(n4, function(n5, r4) {
                  v(r4) ? e3.unique && c2.has(r4) || o2.push(r4) : r4 && r4.length && "string" !== w(r4) && t4(r4);
                });
              }(arguments), n3 && !t3 && l2()), this;
            }, remove: function() {
              return k.each(arguments, function(e4, t4) {
                for (var n4; (n4 = k.inArray(t4, o2, n4)) > -1; )
                  o2.splice(n4, 1), n4 <= a2 && a2--;
              }), this;
            }, has: function(e4) {
              return e4 ? k.inArray(e4, o2) > -1 : o2.length > 0;
            }, empty: function() {
              return o2 && (o2 = []), this;
            }, disable: function() {
              return i3 = s2 = [], o2 = n3 = "", this;
            }, disabled: function() {
              return !o2;
            }, lock: function() {
              return i3 = s2 = [], n3 || t3 || (o2 = n3 = ""), this;
            }, locked: function() {
              return !!i3;
            }, fireWith: function(e4, n4) {
              return i3 || (n4 = [e4, (n4 = n4 || []).slice ? n4.slice() : n4], s2.push(n4), t3 || l2()), this;
            }, fire: function() {
              return c2.fireWith(this, arguments), this;
            }, fired: function() {
              return !!r3;
            } };
            return c2;
          }, k.extend({ Deferred: function(e3) {
            var t3 = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]], n3 = "pending", i3 = { state: function() {
              return n3;
            }, always: function() {
              return o2.done(arguments).fail(arguments), this;
            }, catch: function(e4) {
              return i3.then(null, e4);
            }, pipe: function() {
              var e4 = arguments;
              return k.Deferred(function(n4) {
                k.each(t3, function(t4, r3) {
                  var i4 = v(e4[r3[4]]) && e4[r3[4]];
                  o2[r3[1]](function() {
                    var e5 = i4 && i4.apply(this, arguments);
                    e5 && v(e5.promise) ? e5.promise().progress(n4.notify).done(n4.resolve).fail(n4.reject) : n4[r3[0] + "With"](this, i4 ? [e5] : arguments);
                  });
                }), e4 = null;
              }).promise();
            }, then: function(e4, n4, i4) {
              var o3 = 0;
              function s2(e5, t4, n5, i5) {
                return function() {
                  var a2 = this, l2 = arguments, c2 = function() {
                    var r3, c3;
                    if (!(e5 < o3)) {
                      if ((r3 = n5.apply(a2, l2)) === t4.promise())
                        throw new TypeError("Thenable self-resolution");
                      c3 = r3 && ("object" == typeof r3 || "function" == typeof r3) && r3.then, v(c3) ? i5 ? c3.call(r3, s2(o3, t4, z, i5), s2(o3, t4, P, i5)) : (o3++, c3.call(r3, s2(o3, t4, z, i5), s2(o3, t4, P, i5), s2(o3, t4, z, t4.notifyWith))) : (n5 !== z && (a2 = void 0, l2 = [r3]), (i5 || t4.resolveWith)(a2, l2));
                    }
                  }, u2 = i5 ? c2 : function() {
                    try {
                      c2();
                    } catch (r3) {
                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(r3, u2.stackTrace), e5 + 1 >= o3 && (n5 !== P && (a2 = void 0, l2 = [r3]), t4.rejectWith(a2, l2));
                    }
                  };
                  e5 ? u2() : (k.Deferred.getStackHook && (u2.stackTrace = k.Deferred.getStackHook()), r2.setTimeout(u2));
                };
              }
              return k.Deferred(function(r3) {
                t3[0][3].add(s2(0, r3, v(i4) ? i4 : z, r3.notifyWith)), t3[1][3].add(s2(0, r3, v(e4) ? e4 : z)), t3[2][3].add(s2(0, r3, v(n4) ? n4 : P));
              }).promise();
            }, promise: function(e4) {
              return null != e4 ? k.extend(e4, i3) : i3;
            } }, o2 = {};
            return k.each(t3, function(e4, r3) {
              var s2 = r3[2], a2 = r3[5];
              i3[r3[1]] = s2.add, a2 && s2.add(function() {
                n3 = a2;
              }, t3[3 - e4][2].disable, t3[3 - e4][3].disable, t3[0][2].lock, t3[0][3].lock), s2.add(r3[3].fire), o2[r3[0]] = function() {
                return o2[r3[0] + "With"](this === o2 ? void 0 : this, arguments), this;
              }, o2[r3[0] + "With"] = s2.fireWith;
            }), i3.promise(o2), e3 && e3.call(o2, o2), o2;
          }, when: function(e3) {
            var t3 = arguments.length, n3 = t3, r3 = Array(n3), i3 = a.call(arguments), o2 = k.Deferred(), s2 = function(e4) {
              return function(n4) {
                r3[e4] = this, i3[e4] = arguments.length > 1 ? a.call(arguments) : n4, --t3 || o2.resolveWith(r3, i3);
              };
            };
            if (t3 <= 1 && (H(e3, o2.done(s2(n3)).resolve, o2.reject, !t3), "pending" === o2.state() || v(i3[n3] && i3[n3].then)))
              return o2.then();
            for (; n3--; )
              H(i3[n3], s2(n3), o2.reject);
            return o2.promise();
          } });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          k.Deferred.exceptionHook = function(e3, t3) {
            r2.console && r2.console.warn && e3 && F.test(e3.name) && r2.console.warn("jQuery.Deferred exception: " + e3.message, e3.stack, t3);
          }, k.readyException = function(e3) {
            r2.setTimeout(function() {
              throw e3;
            });
          };
          var B = k.Deferred();
          function $() {
            y.removeEventListener("DOMContentLoaded", $), r2.removeEventListener("load", $), k.ready();
          }
          k.fn.ready = function(e3) {
            return B.then(e3).catch(function(e4) {
              k.readyException(e4);
            }), this;
          }, k.extend({ isReady: false, readyWait: 1, ready: function(e3) {
            (true === e3 ? --k.readyWait : k.isReady) || (k.isReady = true, true !== e3 && --k.readyWait > 0 || B.resolveWith(y, [k]));
          } }), k.ready.then = B.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? r2.setTimeout(k.ready) : (y.addEventListener("DOMContentLoaded", $), r2.addEventListener("load", $));
          var W = function(e3, t3, n3, r3, i3, o2, s2) {
            var a2 = 0, l2 = e3.length, c2 = null == n3;
            if ("object" === w(n3))
              for (a2 in i3 = true, n3)
                W(e3, t3, a2, n3[a2], true, o2, s2);
            else if (void 0 !== r3 && (i3 = true, v(r3) || (s2 = true), c2 && (s2 ? (t3.call(e3, r3), t3 = null) : (c2 = t3, t3 = function(e4, t4, n4) {
              return c2.call(k(e4), n4);
            })), t3))
              for (; a2 < l2; a2++)
                t3(e3[a2], n3, s2 ? r3 : r3.call(e3[a2], a2, t3(e3[a2], n3)));
            return i3 ? e3 : c2 ? t3.call(e3) : l2 ? t3(e3[0], n3) : o2;
          }, X = /^-ms-/, U = /-([a-z])/g;
          function V(e3, t3) {
            return t3.toUpperCase();
          }
          function G(e3) {
            return e3.replace(X, "ms-").replace(U, V);
          }
          var Y = function(e3) {
            return 1 === e3.nodeType || 9 === e3.nodeType || !+e3.nodeType;
          };
          function Z() {
            this.expando = k.expando + Z.uid++;
          }
          Z.uid = 1, Z.prototype = { cache: function(e3) {
            var t3 = e3[this.expando];
            return t3 || (t3 = {}, Y(e3) && (e3.nodeType ? e3[this.expando] = t3 : Object.defineProperty(e3, this.expando, { value: t3, configurable: true }))), t3;
          }, set: function(e3, t3, n3) {
            var r3, i3 = this.cache(e3);
            if ("string" == typeof t3)
              i3[G(t3)] = n3;
            else
              for (r3 in t3)
                i3[G(r3)] = t3[r3];
            return i3;
          }, get: function(e3, t3) {
            return void 0 === t3 ? this.cache(e3) : e3[this.expando] && e3[this.expando][G(t3)];
          }, access: function(e3, t3, n3) {
            return void 0 === t3 || t3 && "string" == typeof t3 && void 0 === n3 ? this.get(e3, t3) : (this.set(e3, t3, n3), void 0 !== n3 ? n3 : t3);
          }, remove: function(e3, t3) {
            var n3, r3 = e3[this.expando];
            if (void 0 !== r3) {
              if (void 0 !== t3) {
                n3 = (t3 = Array.isArray(t3) ? t3.map(G) : (t3 = G(t3)) in r3 ? [t3] : t3.match(M) || []).length;
                for (; n3--; )
                  delete r3[t3[n3]];
              }
              (void 0 === t3 || k.isEmptyObject(r3)) && (e3.nodeType ? e3[this.expando] = void 0 : delete e3[this.expando]);
            }
          }, hasData: function(e3) {
            var t3 = e3[this.expando];
            return void 0 !== t3 && !k.isEmptyObject(t3);
          } };
          var K = new Z(), J = new Z(), ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;
          function ne(e3, t3, n3) {
            var r3;
            if (void 0 === n3 && 1 === e3.nodeType)
              if (r3 = "data-" + t3.replace(te, "-$&").toLowerCase(), "string" == typeof (n3 = e3.getAttribute(r3))) {
                try {
                  n3 = function(e4) {
                    return "true" === e4 || "false" !== e4 && ("null" === e4 ? null : e4 === +e4 + "" ? +e4 : ee.test(e4) ? JSON.parse(e4) : e4);
                  }(n3);
                } catch (e4) {
                }
                J.set(e3, t3, n3);
              } else
                n3 = void 0;
            return n3;
          }
          k.extend({ hasData: function(e3) {
            return J.hasData(e3) || K.hasData(e3);
          }, data: function(e3, t3, n3) {
            return J.access(e3, t3, n3);
          }, removeData: function(e3, t3) {
            J.remove(e3, t3);
          }, _data: function(e3, t3, n3) {
            return K.access(e3, t3, n3);
          }, _removeData: function(e3, t3) {
            K.remove(e3, t3);
          } }), k.fn.extend({ data: function(e3, t3) {
            var n3, r3, i3, o2 = this[0], s2 = o2 && o2.attributes;
            if (void 0 === e3) {
              if (this.length && (i3 = J.get(o2), 1 === o2.nodeType && !K.get(o2, "hasDataAttrs"))) {
                for (n3 = s2.length; n3--; )
                  s2[n3] && 0 === (r3 = s2[n3].name).indexOf("data-") && (r3 = G(r3.slice(5)), ne(o2, r3, i3[r3]));
                K.set(o2, "hasDataAttrs", true);
              }
              return i3;
            }
            return "object" == typeof e3 ? this.each(function() {
              J.set(this, e3);
            }) : W(this, function(t4) {
              var n4;
              if (o2 && void 0 === t4)
                return void 0 !== (n4 = J.get(o2, e3)) || void 0 !== (n4 = ne(o2, e3)) ? n4 : void 0;
              this.each(function() {
                J.set(this, e3, t4);
              });
            }, null, t3, arguments.length > 1, null, true);
          }, removeData: function(e3) {
            return this.each(function() {
              J.remove(this, e3);
            });
          } }), k.extend({ queue: function(e3, t3, n3) {
            var r3;
            if (e3)
              return t3 = (t3 || "fx") + "queue", r3 = K.get(e3, t3), n3 && (!r3 || Array.isArray(n3) ? r3 = K.access(e3, t3, k.makeArray(n3)) : r3.push(n3)), r3 || [];
          }, dequeue: function(e3, t3) {
            t3 = t3 || "fx";
            var n3 = k.queue(e3, t3), r3 = n3.length, i3 = n3.shift(), o2 = k._queueHooks(e3, t3);
            "inprogress" === i3 && (i3 = n3.shift(), r3--), i3 && ("fx" === t3 && n3.unshift("inprogress"), delete o2.stop, i3.call(e3, function() {
              k.dequeue(e3, t3);
            }, o2)), !r3 && o2 && o2.empty.fire();
          }, _queueHooks: function(e3, t3) {
            var n3 = t3 + "queueHooks";
            return K.get(e3, n3) || K.access(e3, n3, { empty: k.Callbacks("once memory").add(function() {
              K.remove(e3, [t3 + "queue", n3]);
            }) });
          } }), k.fn.extend({ queue: function(e3, t3) {
            var n3 = 2;
            return "string" != typeof e3 && (t3 = e3, e3 = "fx", n3--), arguments.length < n3 ? k.queue(this[0], e3) : void 0 === t3 ? this : this.each(function() {
              var n4 = k.queue(this, e3, t3);
              k._queueHooks(this, e3), "fx" === e3 && "inprogress" !== n4[0] && k.dequeue(this, e3);
            });
          }, dequeue: function(e3) {
            return this.each(function() {
              k.dequeue(this, e3);
            });
          }, clearQueue: function(e3) {
            return this.queue(e3 || "fx", []);
          }, promise: function(e3, t3) {
            var n3, r3 = 1, i3 = k.Deferred(), o2 = this, s2 = this.length, a2 = function() {
              --r3 || i3.resolveWith(o2, [o2]);
            };
            for ("string" != typeof e3 && (t3 = e3, e3 = void 0), e3 = e3 || "fx"; s2--; )
              (n3 = K.get(o2[s2], e3 + "queueHooks")) && n3.empty && (r3++, n3.empty.add(a2));
            return a2(), i3.promise(t3);
          } });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], se = y.documentElement, ae = function(e3) {
            return k.contains(e3.ownerDocument, e3);
          }, le = { composed: true };
          se.getRootNode && (ae = function(e3) {
            return k.contains(e3.ownerDocument, e3) || e3.getRootNode(le) === e3.ownerDocument;
          });
          var ce = function(e3, t3) {
            return "none" === (e3 = t3 || e3).style.display || "" === e3.style.display && ae(e3) && "none" === k.css(e3, "display");
          };
          function ue(e3, t3, n3, r3) {
            var i3, o2, s2 = 20, a2 = r3 ? function() {
              return r3.cur();
            } : function() {
              return k.css(e3, t3, "");
            }, l2 = a2(), c2 = n3 && n3[3] || (k.cssNumber[t3] ? "" : "px"), u2 = e3.nodeType && (k.cssNumber[t3] || "px" !== c2 && +l2) && ie.exec(k.css(e3, t3));
            if (u2 && u2[3] !== c2) {
              for (l2 /= 2, c2 = c2 || u2[3], u2 = +l2 || 1; s2--; )
                k.style(e3, t3, u2 + c2), (1 - o2) * (1 - (o2 = a2() / l2 || 0.5)) <= 0 && (s2 = 0), u2 /= o2;
              u2 *= 2, k.style(e3, t3, u2 + c2), n3 = n3 || [];
            }
            return n3 && (u2 = +u2 || +l2 || 0, i3 = n3[1] ? u2 + (n3[1] + 1) * n3[2] : +n3[2], r3 && (r3.unit = c2, r3.start = u2, r3.end = i3)), i3;
          }
          var fe = {};
          function pe(e3) {
            var t3, n3 = e3.ownerDocument, r3 = e3.nodeName, i3 = fe[r3];
            return i3 || (t3 = n3.body.appendChild(n3.createElement(r3)), i3 = k.css(t3, "display"), t3.parentNode.removeChild(t3), "none" === i3 && (i3 = "block"), fe[r3] = i3, i3);
          }
          function de(e3, t3) {
            for (var n3, r3, i3 = [], o2 = 0, s2 = e3.length; o2 < s2; o2++)
              (r3 = e3[o2]).style && (n3 = r3.style.display, t3 ? ("none" === n3 && (i3[o2] = K.get(r3, "display") || null, i3[o2] || (r3.style.display = "")), "" === r3.style.display && ce(r3) && (i3[o2] = pe(r3))) : "none" !== n3 && (i3[o2] = "none", K.set(r3, "display", n3)));
            for (o2 = 0; o2 < s2; o2++)
              null != i3[o2] && (e3[o2].style.display = i3[o2]);
            return e3;
          }
          k.fn.extend({ show: function() {
            return de(this, true);
          }, hide: function() {
            return de(this);
          }, toggle: function(e3) {
            return "boolean" == typeof e3 ? e3 ? this.show() : this.hide() : this.each(function() {
              ce(this) ? k(this).show() : k(this).hide();
            });
          } });
          var he, me, ge = /^(?:checkbox|radio)$/i, ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, be = /^$|^module$|\/(?:java|ecma)script/i;
          he = y.createDocumentFragment().appendChild(y.createElement("div")), (me = y.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), he.appendChild(me), g.checkClone = he.cloneNode(true).cloneNode(true).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!he.cloneNode(true).lastChild.defaultValue, he.innerHTML = "<option></option>", g.option = !!he.lastChild;
          var ye = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
          function xe(e3, t3) {
            var n3;
            return n3 = void 0 !== e3.getElementsByTagName ? e3.getElementsByTagName(t3 || "*") : void 0 !== e3.querySelectorAll ? e3.querySelectorAll(t3 || "*") : [], void 0 === t3 || t3 && E(e3, t3) ? k.merge([e3], n3) : n3;
          }
          function qe(e3, t3) {
            for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
              K.set(e3[n3], "globalEval", !t3 || K.get(t3[n3], "globalEval"));
          }
          ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
          var we = /<|&#?\w+;/;
          function Te(e3, t3, n3, r3, i3) {
            for (var o2, s2, a2, l2, c2, u2, f2 = t3.createDocumentFragment(), p2 = [], d2 = 0, h2 = e3.length; d2 < h2; d2++)
              if ((o2 = e3[d2]) || 0 === o2)
                if ("object" === w(o2))
                  k.merge(p2, o2.nodeType ? [o2] : o2);
                else if (we.test(o2)) {
                  for (s2 = s2 || f2.appendChild(t3.createElement("div")), a2 = (ve.exec(o2) || ["", ""])[1].toLowerCase(), l2 = ye[a2] || ye._default, s2.innerHTML = l2[1] + k.htmlPrefilter(o2) + l2[2], u2 = l2[0]; u2--; )
                    s2 = s2.lastChild;
                  k.merge(p2, s2.childNodes), (s2 = f2.firstChild).textContent = "";
                } else
                  p2.push(t3.createTextNode(o2));
            for (f2.textContent = "", d2 = 0; o2 = p2[d2++]; )
              if (r3 && k.inArray(o2, r3) > -1)
                i3 && i3.push(o2);
              else if (c2 = ae(o2), s2 = xe(f2.appendChild(o2), "script"), c2 && qe(s2), n3)
                for (u2 = 0; o2 = s2[u2++]; )
                  be.test(o2.type || "") && n3.push(o2);
            return f2;
          }
          var ke = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return true;
          }
          function Oe() {
            return false;
          }
          function je(e3, t3) {
            return e3 === function() {
              try {
                return y.activeElement;
              } catch (e4) {
              }
            }() == ("focus" === t3);
          }
          function Se(e3, t3, n3, r3, i3, o2) {
            var s2, a2;
            if ("object" == typeof t3) {
              for (a2 in "string" != typeof n3 && (r3 = r3 || n3, n3 = void 0), t3)
                Se(e3, a2, n3, r3, t3[a2], o2);
              return e3;
            }
            if (null == r3 && null == i3 ? (i3 = n3, r3 = n3 = void 0) : null == i3 && ("string" == typeof n3 ? (i3 = r3, r3 = void 0) : (i3 = r3, r3 = n3, n3 = void 0)), false === i3)
              i3 = Oe;
            else if (!i3)
              return e3;
            return 1 === o2 && (s2 = i3, i3 = function(e4) {
              return k().off(e4), s2.apply(this, arguments);
            }, i3.guid = s2.guid || (s2.guid = k.guid++)), e3.each(function() {
              k.event.add(this, t3, i3, r3, n3);
            });
          }
          function De(e3, t3, n3) {
            n3 ? (K.set(e3, t3, false), k.event.add(e3, t3, { namespace: false, handler: function(e4) {
              var r3, i3, o2 = K.get(this, t3);
              if (1 & e4.isTrigger && this[t3]) {
                if (o2.length)
                  (k.event.special[t3] || {}).delegateType && e4.stopPropagation();
                else if (o2 = a.call(arguments), K.set(this, t3, o2), r3 = n3(this, t3), this[t3](), o2 !== (i3 = K.get(this, t3)) || r3 ? K.set(this, t3, false) : i3 = {}, o2 !== i3)
                  return e4.stopImmediatePropagation(), e4.preventDefault(), i3 && i3.value;
              } else
                o2.length && (K.set(this, t3, { value: k.event.trigger(k.extend(o2[0], k.Event.prototype), o2.slice(1), this) }), e4.stopImmediatePropagation());
            } })) : void 0 === K.get(e3, t3) && k.event.add(e3, t3, Ce);
          }
          k.event = { global: {}, add: function(e3, t3, n3, r3, i3) {
            var o2, s2, a2, l2, c2, u2, f2, p2, d2, h2, m2, g2 = K.get(e3);
            if (Y(e3))
              for (n3.handler && (n3 = (o2 = n3).handler, i3 = o2.selector), i3 && k.find.matchesSelector(se, i3), n3.guid || (n3.guid = k.guid++), (l2 = g2.events) || (l2 = g2.events = /* @__PURE__ */ Object.create(null)), (s2 = g2.handle) || (s2 = g2.handle = function(t4) {
                return void 0 !== k && k.event.triggered !== t4.type ? k.event.dispatch.apply(e3, arguments) : void 0;
              }), c2 = (t3 = (t3 || "").match(M) || [""]).length; c2--; )
                d2 = m2 = (a2 = ke.exec(t3[c2]) || [])[1], h2 = (a2[2] || "").split(".").sort(), d2 && (f2 = k.event.special[d2] || {}, d2 = (i3 ? f2.delegateType : f2.bindType) || d2, f2 = k.event.special[d2] || {}, u2 = k.extend({ type: d2, origType: m2, data: r3, handler: n3, guid: n3.guid, selector: i3, needsContext: i3 && k.expr.match.needsContext.test(i3), namespace: h2.join(".") }, o2), (p2 = l2[d2]) || ((p2 = l2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(e3, r3, h2, s2) || e3.addEventListener && e3.addEventListener(d2, s2)), f2.add && (f2.add.call(e3, u2), u2.handler.guid || (u2.handler.guid = n3.guid)), i3 ? p2.splice(p2.delegateCount++, 0, u2) : p2.push(u2), k.event.global[d2] = true);
          }, remove: function(e3, t3, n3, r3, i3) {
            var o2, s2, a2, l2, c2, u2, f2, p2, d2, h2, m2, g2 = K.hasData(e3) && K.get(e3);
            if (g2 && (l2 = g2.events)) {
              for (c2 = (t3 = (t3 || "").match(M) || [""]).length; c2--; )
                if (d2 = m2 = (a2 = ke.exec(t3[c2]) || [])[1], h2 = (a2[2] || "").split(".").sort(), d2) {
                  for (f2 = k.event.special[d2] || {}, p2 = l2[d2 = (r3 ? f2.delegateType : f2.bindType) || d2] || [], a2 = a2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), s2 = o2 = p2.length; o2--; )
                    u2 = p2[o2], !i3 && m2 !== u2.origType || n3 && n3.guid !== u2.guid || a2 && !a2.test(u2.namespace) || r3 && r3 !== u2.selector && ("**" !== r3 || !u2.selector) || (p2.splice(o2, 1), u2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e3, u2));
                  s2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e3, h2, g2.handle) || k.removeEvent(e3, d2, g2.handle), delete l2[d2]);
                } else
                  for (d2 in l2)
                    k.event.remove(e3, d2 + t3[c2], n3, r3, true);
              k.isEmptyObject(l2) && K.remove(e3, "handle events");
            }
          }, dispatch: function(e3) {
            var t3, n3, r3, i3, o2, s2, a2 = new Array(arguments.length), l2 = k.event.fix(e3), c2 = (K.get(this, "events") || /* @__PURE__ */ Object.create(null))[l2.type] || [], u2 = k.event.special[l2.type] || {};
            for (a2[0] = l2, t3 = 1; t3 < arguments.length; t3++)
              a2[t3] = arguments[t3];
            if (l2.delegateTarget = this, !u2.preDispatch || false !== u2.preDispatch.call(this, l2)) {
              for (s2 = k.event.handlers.call(this, l2, c2), t3 = 0; (i3 = s2[t3++]) && !l2.isPropagationStopped(); )
                for (l2.currentTarget = i3.elem, n3 = 0; (o2 = i3.handlers[n3++]) && !l2.isImmediatePropagationStopped(); )
                  l2.rnamespace && false !== o2.namespace && !l2.rnamespace.test(o2.namespace) || (l2.handleObj = o2, l2.data = o2.data, void 0 !== (r3 = ((k.event.special[o2.origType] || {}).handle || o2.handler).apply(i3.elem, a2)) && false === (l2.result = r3) && (l2.preventDefault(), l2.stopPropagation()));
              return u2.postDispatch && u2.postDispatch.call(this, l2), l2.result;
            }
          }, handlers: function(e3, t3) {
            var n3, r3, i3, o2, s2, a2 = [], l2 = t3.delegateCount, c2 = e3.target;
            if (l2 && c2.nodeType && !("click" === e3.type && e3.button >= 1)) {
              for (; c2 !== this; c2 = c2.parentNode || this)
                if (1 === c2.nodeType && ("click" !== e3.type || true !== c2.disabled)) {
                  for (o2 = [], s2 = {}, n3 = 0; n3 < l2; n3++)
                    void 0 === s2[i3 = (r3 = t3[n3]).selector + " "] && (s2[i3] = r3.needsContext ? k(i3, this).index(c2) > -1 : k.find(i3, this, null, [c2]).length), s2[i3] && o2.push(r3);
                  o2.length && a2.push({ elem: c2, handlers: o2 });
                }
            }
            return c2 = this, l2 < t3.length && a2.push({ elem: c2, handlers: t3.slice(l2) }), a2;
          }, addProp: function(e3, t3) {
            Object.defineProperty(k.Event.prototype, e3, { enumerable: true, configurable: true, get: v(t3) ? function() {
              if (this.originalEvent)
                return t3(this.originalEvent);
            } : function() {
              if (this.originalEvent)
                return this.originalEvent[e3];
            }, set: function(t4) {
              Object.defineProperty(this, e3, { enumerable: true, configurable: true, writable: true, value: t4 });
            } });
          }, fix: function(e3) {
            return e3[k.expando] ? e3 : new k.Event(e3);
          }, special: { load: { noBubble: true }, click: { setup: function(e3) {
            var t3 = this || e3;
            return ge.test(t3.type) && t3.click && E(t3, "input") && De(t3, "click", Ce), false;
          }, trigger: function(e3) {
            var t3 = this || e3;
            return ge.test(t3.type) && t3.click && E(t3, "input") && De(t3, "click"), true;
          }, _default: function(e3) {
            var t3 = e3.target;
            return ge.test(t3.type) && t3.click && E(t3, "input") && K.get(t3, "click") || E(t3, "a");
          } }, beforeunload: { postDispatch: function(e3) {
            void 0 !== e3.result && e3.originalEvent && (e3.originalEvent.returnValue = e3.result);
          } } } }, k.removeEvent = function(e3, t3, n3) {
            e3.removeEventListener && e3.removeEventListener(t3, n3);
          }, k.Event = function(e3, t3) {
            if (!(this instanceof k.Event))
              return new k.Event(e3, t3);
            e3 && e3.type ? (this.originalEvent = e3, this.type = e3.type, this.isDefaultPrevented = e3.defaultPrevented || void 0 === e3.defaultPrevented && false === e3.returnValue ? Ce : Oe, this.target = e3.target && 3 === e3.target.nodeType ? e3.target.parentNode : e3.target, this.currentTarget = e3.currentTarget, this.relatedTarget = e3.relatedTarget) : this.type = e3, t3 && k.extend(this, t3), this.timeStamp = e3 && e3.timeStamp || Date.now(), this[k.expando] = true;
          }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Oe, isPropagationStopped: Oe, isImmediatePropagationStopped: Oe, isSimulated: false, preventDefault: function() {
            var e3 = this.originalEvent;
            this.isDefaultPrevented = Ce, e3 && !this.isSimulated && e3.preventDefault();
          }, stopPropagation: function() {
            var e3 = this.originalEvent;
            this.isPropagationStopped = Ce, e3 && !this.isSimulated && e3.stopPropagation();
          }, stopImmediatePropagation: function() {
            var e3 = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e3 && !this.isSimulated && e3.stopImmediatePropagation(), this.stopPropagation();
          } }, k.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, char: true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function(e3, t3) {
            k.event.special[e3] = { setup: function() {
              return De(this, e3, je), false;
            }, trigger: function() {
              return De(this, e3), true;
            }, _default: function() {
              return true;
            }, delegateType: t3 };
          }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e3, t3) {
            k.event.special[e3] = { delegateType: t3, bindType: t3, handle: function(e4) {
              var n3, r3 = this, i3 = e4.relatedTarget, o2 = e4.handleObj;
              return i3 && (i3 === r3 || k.contains(r3, i3)) || (e4.type = o2.origType, n3 = o2.handler.apply(this, arguments), e4.type = t3), n3;
            } };
          }), k.fn.extend({ on: function(e3, t3, n3, r3) {
            return Se(this, e3, t3, n3, r3);
          }, one: function(e3, t3, n3, r3) {
            return Se(this, e3, t3, n3, r3, 1);
          }, off: function(e3, t3, n3) {
            var r3, i3;
            if (e3 && e3.preventDefault && e3.handleObj)
              return r3 = e3.handleObj, k(e3.delegateTarget).off(r3.namespace ? r3.origType + "." + r3.namespace : r3.origType, r3.selector, r3.handler), this;
            if ("object" == typeof e3) {
              for (i3 in e3)
                this.off(i3, t3, e3[i3]);
              return this;
            }
            return false !== t3 && "function" != typeof t3 || (n3 = t3, t3 = void 0), false === n3 && (n3 = Oe), this.each(function() {
              k.event.remove(this, e3, n3, t3);
            });
          } });
          var Ee = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function _e(e3, t3) {
            return E(e3, "table") && E(11 !== t3.nodeType ? t3 : t3.firstChild, "tr") && k(e3).children("tbody")[0] || e3;
          }
          function Ne(e3) {
            return e3.type = (null !== e3.getAttribute("type")) + "/" + e3.type, e3;
          }
          function Qe(e3) {
            return "true/" === (e3.type || "").slice(0, 5) ? e3.type = e3.type.slice(5) : e3.removeAttribute("type"), e3;
          }
          function Re(e3, t3) {
            var n3, r3, i3, o2, s2, a2;
            if (1 === t3.nodeType) {
              if (K.hasData(e3) && (a2 = K.get(e3).events))
                for (i3 in K.remove(t3, "handle events"), a2)
                  for (n3 = 0, r3 = a2[i3].length; n3 < r3; n3++)
                    k.event.add(t3, i3, a2[i3][n3]);
              J.hasData(e3) && (o2 = J.access(e3), s2 = k.extend({}, o2), J.set(t3, s2));
            }
          }
          function Ie(e3, t3) {
            var n3 = t3.nodeName.toLowerCase();
            "input" === n3 && ge.test(e3.type) ? t3.checked = e3.checked : "input" !== n3 && "textarea" !== n3 || (t3.defaultValue = e3.defaultValue);
          }
          function Me(e3, t3, n3, r3) {
            t3 = l(t3);
            var i3, o2, s2, a2, c2, u2, f2 = 0, p2 = e3.length, d2 = p2 - 1, h2 = t3[0], m2 = v(h2);
            if (m2 || p2 > 1 && "string" == typeof h2 && !g.checkClone && Ae.test(h2))
              return e3.each(function(i4) {
                var o3 = e3.eq(i4);
                m2 && (t3[0] = h2.call(this, i4, o3.html())), Me(o3, t3, n3, r3);
              });
            if (p2 && (o2 = (i3 = Te(t3, e3[0].ownerDocument, false, e3, r3)).firstChild, 1 === i3.childNodes.length && (i3 = o2), o2 || r3)) {
              for (a2 = (s2 = k.map(xe(i3, "script"), Ne)).length; f2 < p2; f2++)
                c2 = i3, f2 !== d2 && (c2 = k.clone(c2, true, true), a2 && k.merge(s2, xe(c2, "script"))), n3.call(e3[f2], c2, f2);
              if (a2)
                for (u2 = s2[s2.length - 1].ownerDocument, k.map(s2, Qe), f2 = 0; f2 < a2; f2++)
                  c2 = s2[f2], be.test(c2.type || "") && !K.access(c2, "globalEval") && k.contains(u2, c2) && (c2.src && "module" !== (c2.type || "").toLowerCase() ? k._evalUrl && !c2.noModule && k._evalUrl(c2.src, { nonce: c2.nonce || c2.getAttribute("nonce") }, u2) : q(c2.textContent.replace(Le, ""), c2, u2));
            }
            return e3;
          }
          function ze(e3, t3, n3) {
            for (var r3, i3 = t3 ? k.filter(t3, e3) : e3, o2 = 0; null != (r3 = i3[o2]); o2++)
              n3 || 1 !== r3.nodeType || k.cleanData(xe(r3)), r3.parentNode && (n3 && ae(r3) && qe(xe(r3, "script")), r3.parentNode.removeChild(r3));
            return e3;
          }
          k.extend({ htmlPrefilter: function(e3) {
            return e3;
          }, clone: function(e3, t3, n3) {
            var r3, i3, o2, s2, a2 = e3.cloneNode(true), l2 = ae(e3);
            if (!(g.noCloneChecked || 1 !== e3.nodeType && 11 !== e3.nodeType || k.isXMLDoc(e3)))
              for (s2 = xe(a2), r3 = 0, i3 = (o2 = xe(e3)).length; r3 < i3; r3++)
                Ie(o2[r3], s2[r3]);
            if (t3)
              if (n3)
                for (o2 = o2 || xe(e3), s2 = s2 || xe(a2), r3 = 0, i3 = o2.length; r3 < i3; r3++)
                  Re(o2[r3], s2[r3]);
              else
                Re(e3, a2);
            return (s2 = xe(a2, "script")).length > 0 && qe(s2, !l2 && xe(e3, "script")), a2;
          }, cleanData: function(e3) {
            for (var t3, n3, r3, i3 = k.event.special, o2 = 0; void 0 !== (n3 = e3[o2]); o2++)
              if (Y(n3)) {
                if (t3 = n3[K.expando]) {
                  if (t3.events)
                    for (r3 in t3.events)
                      i3[r3] ? k.event.remove(n3, r3) : k.removeEvent(n3, r3, t3.handle);
                  n3[K.expando] = void 0;
                }
                n3[J.expando] && (n3[J.expando] = void 0);
              }
          } }), k.fn.extend({ detach: function(e3) {
            return ze(this, e3, true);
          }, remove: function(e3) {
            return ze(this, e3);
          }, text: function(e3) {
            return W(this, function(e4) {
              return void 0 === e4 ? k.text(this) : this.empty().each(function() {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e4);
              });
            }, null, e3, arguments.length);
          }, append: function() {
            return Me(this, arguments, function(e3) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e3).appendChild(e3);
            });
          }, prepend: function() {
            return Me(this, arguments, function(e3) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t3 = _e(this, e3);
                t3.insertBefore(e3, t3.firstChild);
              }
            });
          }, before: function() {
            return Me(this, arguments, function(e3) {
              this.parentNode && this.parentNode.insertBefore(e3, this);
            });
          }, after: function() {
            return Me(this, arguments, function(e3) {
              this.parentNode && this.parentNode.insertBefore(e3, this.nextSibling);
            });
          }, empty: function() {
            for (var e3, t3 = 0; null != (e3 = this[t3]); t3++)
              1 === e3.nodeType && (k.cleanData(xe(e3, false)), e3.textContent = "");
            return this;
          }, clone: function(e3, t3) {
            return e3 = null != e3 && e3, t3 = null == t3 ? e3 : t3, this.map(function() {
              return k.clone(this, e3, t3);
            });
          }, html: function(e3) {
            return W(this, function(e4) {
              var t3 = this[0] || {}, n3 = 0, r3 = this.length;
              if (void 0 === e4 && 1 === t3.nodeType)
                return t3.innerHTML;
              if ("string" == typeof e4 && !Ee.test(e4) && !ye[(ve.exec(e4) || ["", ""])[1].toLowerCase()]) {
                e4 = k.htmlPrefilter(e4);
                try {
                  for (; n3 < r3; n3++)
                    1 === (t3 = this[n3] || {}).nodeType && (k.cleanData(xe(t3, false)), t3.innerHTML = e4);
                  t3 = 0;
                } catch (e5) {
                }
              }
              t3 && this.empty().append(e4);
            }, null, e3, arguments.length);
          }, replaceWith: function() {
            var e3 = [];
            return Me(this, arguments, function(t3) {
              var n3 = this.parentNode;
              k.inArray(this, e3) < 0 && (k.cleanData(xe(this)), n3 && n3.replaceChild(t3, this));
            }, e3);
          } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e3, t3) {
            k.fn[e3] = function(e4) {
              for (var n3, r3 = [], i3 = k(e4), o2 = i3.length - 1, s2 = 0; s2 <= o2; s2++)
                n3 = s2 === o2 ? this : this.clone(true), k(i3[s2])[t3](n3), c.apply(r3, n3.get());
              return this.pushStack(r3);
            };
          });
          var Pe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), He = function(e3) {
            var t3 = e3.ownerDocument.defaultView;
            return t3 && t3.opener || (t3 = r2), t3.getComputedStyle(e3);
          }, Fe = function(e3, t3, n3) {
            var r3, i3, o2 = {};
            for (i3 in t3)
              o2[i3] = e3.style[i3], e3.style[i3] = t3[i3];
            for (i3 in r3 = n3.call(e3), t3)
              e3.style[i3] = o2[i3];
            return r3;
          }, Be = new RegExp(oe.join("|"), "i");
          function $e(e3, t3, n3) {
            var r3, i3, o2, s2, a2 = e3.style;
            return (n3 = n3 || He(e3)) && ("" !== (s2 = n3.getPropertyValue(t3) || n3[t3]) || ae(e3) || (s2 = k.style(e3, t3)), !g.pixelBoxStyles() && Pe.test(s2) && Be.test(t3) && (r3 = a2.width, i3 = a2.minWidth, o2 = a2.maxWidth, a2.minWidth = a2.maxWidth = a2.width = s2, s2 = n3.width, a2.width = r3, a2.minWidth = i3, a2.maxWidth = o2)), void 0 !== s2 ? s2 + "" : s2;
          }
          function We(e3, t3) {
            return { get: function() {
              if (!e3())
                return (this.get = t3).apply(this, arguments);
              delete this.get;
            } };
          }
          !function() {
            function e3() {
              if (u2) {
                c2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c2).appendChild(u2);
                var e4 = r2.getComputedStyle(u2);
                n3 = "1%" !== e4.top, l2 = 12 === t3(e4.marginLeft), u2.style.right = "60%", s2 = 36 === t3(e4.right), i3 = 36 === t3(e4.width), u2.style.position = "absolute", o2 = 12 === t3(u2.offsetWidth / 3), se.removeChild(c2), u2 = null;
              }
            }
            function t3(e4) {
              return Math.round(parseFloat(e4));
            }
            var n3, i3, o2, s2, a2, l2, c2 = y.createElement("div"), u2 = y.createElement("div");
            u2.style && (u2.style.backgroundClip = "content-box", u2.cloneNode(true).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u2.style.backgroundClip, k.extend(g, { boxSizingReliable: function() {
              return e3(), i3;
            }, pixelBoxStyles: function() {
              return e3(), s2;
            }, pixelPosition: function() {
              return e3(), n3;
            }, reliableMarginLeft: function() {
              return e3(), l2;
            }, scrollboxSize: function() {
              return e3(), o2;
            }, reliableTrDimensions: function() {
              var e4, t4, n4, i4;
              return null == a2 && (e4 = y.createElement("table"), t4 = y.createElement("tr"), n4 = y.createElement("div"), e4.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t4.style.cssText = "border:1px solid", t4.style.height = "1px", n4.style.height = "9px", n4.style.display = "block", se.appendChild(e4).appendChild(t4).appendChild(n4), i4 = r2.getComputedStyle(t4), a2 = parseInt(i4.height, 10) + parseInt(i4.borderTopWidth, 10) + parseInt(i4.borderBottomWidth, 10) === t4.offsetHeight, se.removeChild(e4)), a2;
            } }));
          }();
          var Xe = ["Webkit", "Moz", "ms"], Ue = y.createElement("div").style, Ve = {};
          function Ge(e3) {
            return k.cssProps[e3] || Ve[e3] || (e3 in Ue ? e3 : Ve[e3] = function(e4) {
              for (var t3 = e4[0].toUpperCase() + e4.slice(1), n3 = Xe.length; n3--; )
                if ((e4 = Xe[n3] + t3) in Ue)
                  return e4;
            }(e3) || e3);
          }
          var Ye = /^(none|table(?!-c[ea]).+)/, Ze = /^--/, Ke = { position: "absolute", visibility: "hidden", display: "block" }, Je = { letterSpacing: "0", fontWeight: "400" };
          function et(e3, t3, n3) {
            var r3 = ie.exec(t3);
            return r3 ? Math.max(0, r3[2] - (n3 || 0)) + (r3[3] || "px") : t3;
          }
          function tt(e3, t3, n3, r3, i3, o2) {
            var s2 = "width" === t3 ? 1 : 0, a2 = 0, l2 = 0;
            if (n3 === (r3 ? "border" : "content"))
              return 0;
            for (; s2 < 4; s2 += 2)
              "margin" === n3 && (l2 += k.css(e3, n3 + oe[s2], true, i3)), r3 ? ("content" === n3 && (l2 -= k.css(e3, "padding" + oe[s2], true, i3)), "margin" !== n3 && (l2 -= k.css(e3, "border" + oe[s2] + "Width", true, i3))) : (l2 += k.css(e3, "padding" + oe[s2], true, i3), "padding" !== n3 ? l2 += k.css(e3, "border" + oe[s2] + "Width", true, i3) : a2 += k.css(e3, "border" + oe[s2] + "Width", true, i3));
            return !r3 && o2 >= 0 && (l2 += Math.max(0, Math.ceil(e3["offset" + t3[0].toUpperCase() + t3.slice(1)] - o2 - l2 - a2 - 0.5)) || 0), l2;
          }
          function nt(e3, t3, n3) {
            var r3 = He(e3), i3 = (!g.boxSizingReliable() || n3) && "border-box" === k.css(e3, "boxSizing", false, r3), o2 = i3, s2 = $e(e3, t3, r3), a2 = "offset" + t3[0].toUpperCase() + t3.slice(1);
            if (Pe.test(s2)) {
              if (!n3)
                return s2;
              s2 = "auto";
            }
            return (!g.boxSizingReliable() && i3 || !g.reliableTrDimensions() && E(e3, "tr") || "auto" === s2 || !parseFloat(s2) && "inline" === k.css(e3, "display", false, r3)) && e3.getClientRects().length && (i3 = "border-box" === k.css(e3, "boxSizing", false, r3), (o2 = a2 in e3) && (s2 = e3[a2])), (s2 = parseFloat(s2) || 0) + tt(e3, t3, n3 || (i3 ? "border" : "content"), o2, r3, s2) + "px";
          }
          function rt(e3, t3, n3, r3, i3) {
            return new rt.prototype.init(e3, t3, n3, r3, i3);
          }
          k.extend({ cssHooks: { opacity: { get: function(e3, t3) {
            if (t3) {
              var n3 = $e(e3, "opacity");
              return "" === n3 ? "1" : n3;
            }
          } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e3, t3, n3, r3) {
            if (e3 && 3 !== e3.nodeType && 8 !== e3.nodeType && e3.style) {
              var i3, o2, s2, a2 = G(t3), l2 = Ze.test(t3), c2 = e3.style;
              if (l2 || (t3 = Ge(a2)), s2 = k.cssHooks[t3] || k.cssHooks[a2], void 0 === n3)
                return s2 && "get" in s2 && void 0 !== (i3 = s2.get(e3, false, r3)) ? i3 : c2[t3];
              "string" == (o2 = typeof n3) && (i3 = ie.exec(n3)) && i3[1] && (n3 = ue(e3, t3, i3), o2 = "number"), null != n3 && n3 == n3 && ("number" !== o2 || l2 || (n3 += i3 && i3[3] || (k.cssNumber[a2] ? "" : "px")), g.clearCloneStyle || "" !== n3 || 0 !== t3.indexOf("background") || (c2[t3] = "inherit"), s2 && "set" in s2 && void 0 === (n3 = s2.set(e3, n3, r3)) || (l2 ? c2.setProperty(t3, n3) : c2[t3] = n3));
            }
          }, css: function(e3, t3, n3, r3) {
            var i3, o2, s2, a2 = G(t3);
            return Ze.test(t3) || (t3 = Ge(a2)), (s2 = k.cssHooks[t3] || k.cssHooks[a2]) && "get" in s2 && (i3 = s2.get(e3, true, n3)), void 0 === i3 && (i3 = $e(e3, t3, r3)), "normal" === i3 && t3 in Je && (i3 = Je[t3]), "" === n3 || n3 ? (o2 = parseFloat(i3), true === n3 || isFinite(o2) ? o2 || 0 : i3) : i3;
          } }), k.each(["height", "width"], function(e3, t3) {
            k.cssHooks[t3] = { get: function(e4, n3, r3) {
              if (n3)
                return !Ye.test(k.css(e4, "display")) || e4.getClientRects().length && e4.getBoundingClientRect().width ? nt(e4, t3, r3) : Fe(e4, Ke, function() {
                  return nt(e4, t3, r3);
                });
            }, set: function(e4, n3, r3) {
              var i3, o2 = He(e4), s2 = !g.scrollboxSize() && "absolute" === o2.position, a2 = (s2 || r3) && "border-box" === k.css(e4, "boxSizing", false, o2), l2 = r3 ? tt(e4, t3, r3, a2, o2) : 0;
              return a2 && s2 && (l2 -= Math.ceil(e4["offset" + t3[0].toUpperCase() + t3.slice(1)] - parseFloat(o2[t3]) - tt(e4, t3, "border", false, o2) - 0.5)), l2 && (i3 = ie.exec(n3)) && "px" !== (i3[3] || "px") && (e4.style[t3] = n3, n3 = k.css(e4, t3)), et(0, n3, l2);
            } };
          }), k.cssHooks.marginLeft = We(g.reliableMarginLeft, function(e3, t3) {
            if (t3)
              return (parseFloat($e(e3, "marginLeft")) || e3.getBoundingClientRect().left - Fe(e3, { marginLeft: 0 }, function() {
                return e3.getBoundingClientRect().left;
              })) + "px";
          }), k.each({ margin: "", padding: "", border: "Width" }, function(e3, t3) {
            k.cssHooks[e3 + t3] = { expand: function(n3) {
              for (var r3 = 0, i3 = {}, o2 = "string" == typeof n3 ? n3.split(" ") : [n3]; r3 < 4; r3++)
                i3[e3 + oe[r3] + t3] = o2[r3] || o2[r3 - 2] || o2[0];
              return i3;
            } }, "margin" !== e3 && (k.cssHooks[e3 + t3].set = et);
          }), k.fn.extend({ css: function(e3, t3) {
            return W(this, function(e4, t4, n3) {
              var r3, i3, o2 = {}, s2 = 0;
              if (Array.isArray(t4)) {
                for (r3 = He(e4), i3 = t4.length; s2 < i3; s2++)
                  o2[t4[s2]] = k.css(e4, t4[s2], false, r3);
                return o2;
              }
              return void 0 !== n3 ? k.style(e4, t4, n3) : k.css(e4, t4);
            }, e3, t3, arguments.length > 1);
          } }), k.Tween = rt, rt.prototype = { constructor: rt, init: function(e3, t3, n3, r3, i3, o2) {
            this.elem = e3, this.prop = n3, this.easing = i3 || k.easing._default, this.options = t3, this.start = this.now = this.cur(), this.end = r3, this.unit = o2 || (k.cssNumber[n3] ? "" : "px");
          }, cur: function() {
            var e3 = rt.propHooks[this.prop];
            return e3 && e3.get ? e3.get(this) : rt.propHooks._default.get(this);
          }, run: function(e3) {
            var t3, n3 = rt.propHooks[this.prop];
            return this.options.duration ? this.pos = t3 = k.easing[this.easing](e3, this.options.duration * e3, 0, 1, this.options.duration) : this.pos = t3 = e3, this.now = (this.end - this.start) * t3 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n3 && n3.set ? n3.set(this) : rt.propHooks._default.set(this), this;
          } }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = { _default: { get: function(e3) {
            var t3;
            return 1 !== e3.elem.nodeType || null != e3.elem[e3.prop] && null == e3.elem.style[e3.prop] ? e3.elem[e3.prop] : (t3 = k.css(e3.elem, e3.prop, "")) && "auto" !== t3 ? t3 : 0;
          }, set: function(e3) {
            k.fx.step[e3.prop] ? k.fx.step[e3.prop](e3) : 1 !== e3.elem.nodeType || !k.cssHooks[e3.prop] && null == e3.elem.style[Ge(e3.prop)] ? e3.elem[e3.prop] = e3.now : k.style(e3.elem, e3.prop, e3.now + e3.unit);
          } } }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = { set: function(e3) {
            e3.elem.nodeType && e3.elem.parentNode && (e3.elem[e3.prop] = e3.now);
          } }, k.easing = { linear: function(e3) {
            return e3;
          }, swing: function(e3) {
            return 0.5 - Math.cos(e3 * Math.PI) / 2;
          }, _default: "swing" }, k.fx = rt.prototype.init, k.fx.step = {};
          var it, ot, st = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
          function lt() {
            ot && (false === y.hidden && r2.requestAnimationFrame ? r2.requestAnimationFrame(lt) : r2.setTimeout(lt, k.fx.interval), k.fx.tick());
          }
          function ct() {
            return r2.setTimeout(function() {
              it = void 0;
            }), it = Date.now();
          }
          function ut(e3, t3) {
            var n3, r3 = 0, i3 = { height: e3 };
            for (t3 = t3 ? 1 : 0; r3 < 4; r3 += 2 - t3)
              i3["margin" + (n3 = oe[r3])] = i3["padding" + n3] = e3;
            return t3 && (i3.opacity = i3.width = e3), i3;
          }
          function ft(e3, t3, n3) {
            for (var r3, i3 = (pt.tweeners[t3] || []).concat(pt.tweeners["*"]), o2 = 0, s2 = i3.length; o2 < s2; o2++)
              if (r3 = i3[o2].call(n3, t3, e3))
                return r3;
          }
          function pt(e3, t3, n3) {
            var r3, i3, o2 = 0, s2 = pt.prefilters.length, a2 = k.Deferred().always(function() {
              delete l2.elem;
            }), l2 = function() {
              if (i3)
                return false;
              for (var t4 = it || ct(), n4 = Math.max(0, c2.startTime + c2.duration - t4), r4 = 1 - (n4 / c2.duration || 0), o3 = 0, s3 = c2.tweens.length; o3 < s3; o3++)
                c2.tweens[o3].run(r4);
              return a2.notifyWith(e3, [c2, r4, n4]), r4 < 1 && s3 ? n4 : (s3 || a2.notifyWith(e3, [c2, 1, 0]), a2.resolveWith(e3, [c2]), false);
            }, c2 = a2.promise({ elem: e3, props: k.extend({}, t3), opts: k.extend(true, { specialEasing: {}, easing: k.easing._default }, n3), originalProperties: t3, originalOptions: n3, startTime: it || ct(), duration: n3.duration, tweens: [], createTween: function(t4, n4) {
              var r4 = k.Tween(e3, c2.opts, t4, n4, c2.opts.specialEasing[t4] || c2.opts.easing);
              return c2.tweens.push(r4), r4;
            }, stop: function(t4) {
              var n4 = 0, r4 = t4 ? c2.tweens.length : 0;
              if (i3)
                return this;
              for (i3 = true; n4 < r4; n4++)
                c2.tweens[n4].run(1);
              return t4 ? (a2.notifyWith(e3, [c2, 1, 0]), a2.resolveWith(e3, [c2, t4])) : a2.rejectWith(e3, [c2, t4]), this;
            } }), u2 = c2.props;
            for (function(e4, t4) {
              var n4, r4, i4, o3, s3;
              for (n4 in e4)
                if (i4 = t4[r4 = G(n4)], o3 = e4[n4], Array.isArray(o3) && (i4 = o3[1], o3 = e4[n4] = o3[0]), n4 !== r4 && (e4[r4] = o3, delete e4[n4]), (s3 = k.cssHooks[r4]) && "expand" in s3)
                  for (n4 in o3 = s3.expand(o3), delete e4[r4], o3)
                    n4 in e4 || (e4[n4] = o3[n4], t4[n4] = i4);
                else
                  t4[r4] = i4;
            }(u2, c2.opts.specialEasing); o2 < s2; o2++)
              if (r3 = pt.prefilters[o2].call(c2, e3, u2, c2.opts))
                return v(r3.stop) && (k._queueHooks(c2.elem, c2.opts.queue).stop = r3.stop.bind(r3)), r3;
            return k.map(u2, ft, c2), v(c2.opts.start) && c2.opts.start.call(e3, c2), c2.progress(c2.opts.progress).done(c2.opts.done, c2.opts.complete).fail(c2.opts.fail).always(c2.opts.always), k.fx.timer(k.extend(l2, { elem: e3, anim: c2, queue: c2.opts.queue })), c2;
          }
          k.Animation = k.extend(pt, { tweeners: { "*": [function(e3, t3) {
            var n3 = this.createTween(e3, t3);
            return ue(n3.elem, e3, ie.exec(t3), n3), n3;
          }] }, tweener: function(e3, t3) {
            v(e3) ? (t3 = e3, e3 = ["*"]) : e3 = e3.match(M);
            for (var n3, r3 = 0, i3 = e3.length; r3 < i3; r3++)
              n3 = e3[r3], pt.tweeners[n3] = pt.tweeners[n3] || [], pt.tweeners[n3].unshift(t3);
          }, prefilters: [function(e3, t3, n3) {
            var r3, i3, o2, s2, a2, l2, c2, u2, f2 = "width" in t3 || "height" in t3, p2 = this, d2 = {}, h2 = e3.style, m2 = e3.nodeType && ce(e3), g2 = K.get(e3, "fxshow");
            for (r3 in n3.queue || (null == (s2 = k._queueHooks(e3, "fx")).unqueued && (s2.unqueued = 0, a2 = s2.empty.fire, s2.empty.fire = function() {
              s2.unqueued || a2();
            }), s2.unqueued++, p2.always(function() {
              p2.always(function() {
                s2.unqueued--, k.queue(e3, "fx").length || s2.empty.fire();
              });
            })), t3)
              if (i3 = t3[r3], st.test(i3)) {
                if (delete t3[r3], o2 = o2 || "toggle" === i3, i3 === (m2 ? "hide" : "show")) {
                  if ("show" !== i3 || !g2 || void 0 === g2[r3])
                    continue;
                  m2 = true;
                }
                d2[r3] = g2 && g2[r3] || k.style(e3, r3);
              }
            if ((l2 = !k.isEmptyObject(t3)) || !k.isEmptyObject(d2))
              for (r3 in f2 && 1 === e3.nodeType && (n3.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (c2 = g2 && g2.display) && (c2 = K.get(e3, "display")), "none" === (u2 = k.css(e3, "display")) && (c2 ? u2 = c2 : (de([e3], true), c2 = e3.style.display || c2, u2 = k.css(e3, "display"), de([e3]))), ("inline" === u2 || "inline-block" === u2 && null != c2) && "none" === k.css(e3, "float") && (l2 || (p2.done(function() {
                h2.display = c2;
              }), null == c2 && (u2 = h2.display, c2 = "none" === u2 ? "" : u2)), h2.display = "inline-block")), n3.overflow && (h2.overflow = "hidden", p2.always(function() {
                h2.overflow = n3.overflow[0], h2.overflowX = n3.overflow[1], h2.overflowY = n3.overflow[2];
              })), l2 = false, d2)
                l2 || (g2 ? "hidden" in g2 && (m2 = g2.hidden) : g2 = K.access(e3, "fxshow", { display: c2 }), o2 && (g2.hidden = !m2), m2 && de([e3], true), p2.done(function() {
                  for (r3 in m2 || de([e3]), K.remove(e3, "fxshow"), d2)
                    k.style(e3, r3, d2[r3]);
                })), l2 = ft(m2 ? g2[r3] : 0, r3, p2), r3 in g2 || (g2[r3] = l2.start, m2 && (l2.end = l2.start, l2.start = 0));
          }], prefilter: function(e3, t3) {
            t3 ? pt.prefilters.unshift(e3) : pt.prefilters.push(e3);
          } }), k.speed = function(e3, t3, n3) {
            var r3 = e3 && "object" == typeof e3 ? k.extend({}, e3) : { complete: n3 || !n3 && t3 || v(e3) && e3, duration: e3, easing: n3 && t3 || t3 && !v(t3) && t3 };
            return k.fx.off ? r3.duration = 0 : "number" != typeof r3.duration && (r3.duration in k.fx.speeds ? r3.duration = k.fx.speeds[r3.duration] : r3.duration = k.fx.speeds._default), null != r3.queue && true !== r3.queue || (r3.queue = "fx"), r3.old = r3.complete, r3.complete = function() {
              v(r3.old) && r3.old.call(this), r3.queue && k.dequeue(this, r3.queue);
            }, r3;
          }, k.fn.extend({ fadeTo: function(e3, t3, n3, r3) {
            return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t3 }, e3, n3, r3);
          }, animate: function(e3, t3, n3, r3) {
            var i3 = k.isEmptyObject(e3), o2 = k.speed(t3, n3, r3), s2 = function() {
              var t4 = pt(this, k.extend({}, e3), o2);
              (i3 || K.get(this, "finish")) && t4.stop(true);
            };
            return s2.finish = s2, i3 || false === o2.queue ? this.each(s2) : this.queue(o2.queue, s2);
          }, stop: function(e3, t3, n3) {
            var r3 = function(e4) {
              var t4 = e4.stop;
              delete e4.stop, t4(n3);
            };
            return "string" != typeof e3 && (n3 = t3, t3 = e3, e3 = void 0), t3 && this.queue(e3 || "fx", []), this.each(function() {
              var t4 = true, i3 = null != e3 && e3 + "queueHooks", o2 = k.timers, s2 = K.get(this);
              if (i3)
                s2[i3] && s2[i3].stop && r3(s2[i3]);
              else
                for (i3 in s2)
                  s2[i3] && s2[i3].stop && at.test(i3) && r3(s2[i3]);
              for (i3 = o2.length; i3--; )
                o2[i3].elem !== this || null != e3 && o2[i3].queue !== e3 || (o2[i3].anim.stop(n3), t4 = false, o2.splice(i3, 1));
              !t4 && n3 || k.dequeue(this, e3);
            });
          }, finish: function(e3) {
            return false !== e3 && (e3 = e3 || "fx"), this.each(function() {
              var t3, n3 = K.get(this), r3 = n3[e3 + "queue"], i3 = n3[e3 + "queueHooks"], o2 = k.timers, s2 = r3 ? r3.length : 0;
              for (n3.finish = true, k.queue(this, e3, []), i3 && i3.stop && i3.stop.call(this, true), t3 = o2.length; t3--; )
                o2[t3].elem === this && o2[t3].queue === e3 && (o2[t3].anim.stop(true), o2.splice(t3, 1));
              for (t3 = 0; t3 < s2; t3++)
                r3[t3] && r3[t3].finish && r3[t3].finish.call(this);
              delete n3.finish;
            });
          } }), k.each(["toggle", "show", "hide"], function(e3, t3) {
            var n3 = k.fn[t3];
            k.fn[t3] = function(e4, r3, i3) {
              return null == e4 || "boolean" == typeof e4 ? n3.apply(this, arguments) : this.animate(ut(t3, true), e4, r3, i3);
            };
          }), k.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e3, t3) {
            k.fn[e3] = function(e4, n3, r3) {
              return this.animate(t3, e4, n3, r3);
            };
          }), k.timers = [], k.fx.tick = function() {
            var e3, t3 = 0, n3 = k.timers;
            for (it = Date.now(); t3 < n3.length; t3++)
              (e3 = n3[t3])() || n3[t3] !== e3 || n3.splice(t3--, 1);
            n3.length || k.fx.stop(), it = void 0;
          }, k.fx.timer = function(e3) {
            k.timers.push(e3), k.fx.start();
          }, k.fx.interval = 13, k.fx.start = function() {
            ot || (ot = true, lt());
          }, k.fx.stop = function() {
            ot = null;
          }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function(e3, t3) {
            return e3 = k.fx && k.fx.speeds[e3] || e3, t3 = t3 || "fx", this.queue(t3, function(t4, n3) {
              var i3 = r2.setTimeout(t4, e3);
              n3.stop = function() {
                r2.clearTimeout(i3);
              };
            });
          }, function() {
            var e3 = y.createElement("input"), t3 = y.createElement("select").appendChild(y.createElement("option"));
            e3.type = "checkbox", g.checkOn = "" !== e3.value, g.optSelected = t3.selected, (e3 = y.createElement("input")).value = "t", e3.type = "radio", g.radioValue = "t" === e3.value;
          }();
          var dt, ht = k.expr.attrHandle;
          k.fn.extend({ attr: function(e3, t3) {
            return W(this, k.attr, e3, t3, arguments.length > 1);
          }, removeAttr: function(e3) {
            return this.each(function() {
              k.removeAttr(this, e3);
            });
          } }), k.extend({ attr: function(e3, t3, n3) {
            var r3, i3, o2 = e3.nodeType;
            if (3 !== o2 && 8 !== o2 && 2 !== o2)
              return void 0 === e3.getAttribute ? k.prop(e3, t3, n3) : (1 === o2 && k.isXMLDoc(e3) || (i3 = k.attrHooks[t3.toLowerCase()] || (k.expr.match.bool.test(t3) ? dt : void 0)), void 0 !== n3 ? null === n3 ? void k.removeAttr(e3, t3) : i3 && "set" in i3 && void 0 !== (r3 = i3.set(e3, n3, t3)) ? r3 : (e3.setAttribute(t3, n3 + ""), n3) : i3 && "get" in i3 && null !== (r3 = i3.get(e3, t3)) ? r3 : null == (r3 = k.find.attr(e3, t3)) ? void 0 : r3);
          }, attrHooks: { type: { set: function(e3, t3) {
            if (!g.radioValue && "radio" === t3 && E(e3, "input")) {
              var n3 = e3.value;
              return e3.setAttribute("type", t3), n3 && (e3.value = n3), t3;
            }
          } } }, removeAttr: function(e3, t3) {
            var n3, r3 = 0, i3 = t3 && t3.match(M);
            if (i3 && 1 === e3.nodeType)
              for (; n3 = i3[r3++]; )
                e3.removeAttribute(n3);
          } }), dt = { set: function(e3, t3, n3) {
            return false === t3 ? k.removeAttr(e3, n3) : e3.setAttribute(n3, n3), n3;
          } }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e3, t3) {
            var n3 = ht[t3] || k.find.attr;
            ht[t3] = function(e4, t4, r3) {
              var i3, o2, s2 = t4.toLowerCase();
              return r3 || (o2 = ht[s2], ht[s2] = i3, i3 = null != n3(e4, t4, r3) ? s2 : null, ht[s2] = o2), i3;
            };
          });
          var mt = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;
          function vt(e3) {
            return (e3.match(M) || []).join(" ");
          }
          function bt(e3) {
            return e3.getAttribute && e3.getAttribute("class") || "";
          }
          function yt(e3) {
            return Array.isArray(e3) ? e3 : "string" == typeof e3 && e3.match(M) || [];
          }
          k.fn.extend({ prop: function(e3, t3) {
            return W(this, k.prop, e3, t3, arguments.length > 1);
          }, removeProp: function(e3) {
            return this.each(function() {
              delete this[k.propFix[e3] || e3];
            });
          } }), k.extend({ prop: function(e3, t3, n3) {
            var r3, i3, o2 = e3.nodeType;
            if (3 !== o2 && 8 !== o2 && 2 !== o2)
              return 1 === o2 && k.isXMLDoc(e3) || (t3 = k.propFix[t3] || t3, i3 = k.propHooks[t3]), void 0 !== n3 ? i3 && "set" in i3 && void 0 !== (r3 = i3.set(e3, n3, t3)) ? r3 : e3[t3] = n3 : i3 && "get" in i3 && null !== (r3 = i3.get(e3, t3)) ? r3 : e3[t3];
          }, propHooks: { tabIndex: { get: function(e3) {
            var t3 = k.find.attr(e3, "tabindex");
            return t3 ? parseInt(t3, 10) : mt.test(e3.nodeName) || gt.test(e3.nodeName) && e3.href ? 0 : -1;
          } } }, propFix: { for: "htmlFor", class: "className" } }), g.optSelected || (k.propHooks.selected = { get: function(e3) {
            var t3 = e3.parentNode;
            return t3 && t3.parentNode && t3.parentNode.selectedIndex, null;
          }, set: function(e3) {
            var t3 = e3.parentNode;
            t3 && (t3.selectedIndex, t3.parentNode && t3.parentNode.selectedIndex);
          } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            k.propFix[this.toLowerCase()] = this;
          }), k.fn.extend({ addClass: function(e3) {
            var t3, n3, r3, i3, o2, s2, a2, l2 = 0;
            if (v(e3))
              return this.each(function(t4) {
                k(this).addClass(e3.call(this, t4, bt(this)));
              });
            if ((t3 = yt(e3)).length) {
              for (; n3 = this[l2++]; )
                if (i3 = bt(n3), r3 = 1 === n3.nodeType && " " + vt(i3) + " ") {
                  for (s2 = 0; o2 = t3[s2++]; )
                    r3.indexOf(" " + o2 + " ") < 0 && (r3 += o2 + " ");
                  i3 !== (a2 = vt(r3)) && n3.setAttribute("class", a2);
                }
            }
            return this;
          }, removeClass: function(e3) {
            var t3, n3, r3, i3, o2, s2, a2, l2 = 0;
            if (v(e3))
              return this.each(function(t4) {
                k(this).removeClass(e3.call(this, t4, bt(this)));
              });
            if (!arguments.length)
              return this.attr("class", "");
            if ((t3 = yt(e3)).length) {
              for (; n3 = this[l2++]; )
                if (i3 = bt(n3), r3 = 1 === n3.nodeType && " " + vt(i3) + " ") {
                  for (s2 = 0; o2 = t3[s2++]; )
                    for (; r3.indexOf(" " + o2 + " ") > -1; )
                      r3 = r3.replace(" " + o2 + " ", " ");
                  i3 !== (a2 = vt(r3)) && n3.setAttribute("class", a2);
                }
            }
            return this;
          }, toggleClass: function(e3, t3) {
            var n3 = typeof e3, r3 = "string" === n3 || Array.isArray(e3);
            return "boolean" == typeof t3 && r3 ? t3 ? this.addClass(e3) : this.removeClass(e3) : v(e3) ? this.each(function(n4) {
              k(this).toggleClass(e3.call(this, n4, bt(this), t3), t3);
            }) : this.each(function() {
              var t4, i3, o2, s2;
              if (r3)
                for (i3 = 0, o2 = k(this), s2 = yt(e3); t4 = s2[i3++]; )
                  o2.hasClass(t4) ? o2.removeClass(t4) : o2.addClass(t4);
              else
                void 0 !== e3 && "boolean" !== n3 || ((t4 = bt(this)) && K.set(this, "__className__", t4), this.setAttribute && this.setAttribute("class", t4 || false === e3 ? "" : K.get(this, "__className__") || ""));
            });
          }, hasClass: function(e3) {
            var t3, n3, r3 = 0;
            for (t3 = " " + e3 + " "; n3 = this[r3++]; )
              if (1 === n3.nodeType && (" " + vt(bt(n3)) + " ").indexOf(t3) > -1)
                return true;
            return false;
          } });
          var xt = /\r/g;
          k.fn.extend({ val: function(e3) {
            var t3, n3, r3, i3 = this[0];
            return arguments.length ? (r3 = v(e3), this.each(function(n4) {
              var i4;
              1 === this.nodeType && (null == (i4 = r3 ? e3.call(this, n4, k(this).val()) : e3) ? i4 = "" : "number" == typeof i4 ? i4 += "" : Array.isArray(i4) && (i4 = k.map(i4, function(e4) {
                return null == e4 ? "" : e4 + "";
              })), (t3 = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t3 && void 0 !== t3.set(this, i4, "value") || (this.value = i4));
            })) : i3 ? (t3 = k.valHooks[i3.type] || k.valHooks[i3.nodeName.toLowerCase()]) && "get" in t3 && void 0 !== (n3 = t3.get(i3, "value")) ? n3 : "string" == typeof (n3 = i3.value) ? n3.replace(xt, "") : null == n3 ? "" : n3 : void 0;
          } }), k.extend({ valHooks: { option: { get: function(e3) {
            var t3 = k.find.attr(e3, "value");
            return null != t3 ? t3 : vt(k.text(e3));
          } }, select: { get: function(e3) {
            var t3, n3, r3, i3 = e3.options, o2 = e3.selectedIndex, s2 = "select-one" === e3.type, a2 = s2 ? null : [], l2 = s2 ? o2 + 1 : i3.length;
            for (r3 = o2 < 0 ? l2 : s2 ? o2 : 0; r3 < l2; r3++)
              if (((n3 = i3[r3]).selected || r3 === o2) && !n3.disabled && (!n3.parentNode.disabled || !E(n3.parentNode, "optgroup"))) {
                if (t3 = k(n3).val(), s2)
                  return t3;
                a2.push(t3);
              }
            return a2;
          }, set: function(e3, t3) {
            for (var n3, r3, i3 = e3.options, o2 = k.makeArray(t3), s2 = i3.length; s2--; )
              ((r3 = i3[s2]).selected = k.inArray(k.valHooks.option.get(r3), o2) > -1) && (n3 = true);
            return n3 || (e3.selectedIndex = -1), o2;
          } } } }), k.each(["radio", "checkbox"], function() {
            k.valHooks[this] = { set: function(e3, t3) {
              if (Array.isArray(t3))
                return e3.checked = k.inArray(k(e3).val(), t3) > -1;
            } }, g.checkOn || (k.valHooks[this].get = function(e3) {
              return null === e3.getAttribute("value") ? "on" : e3.value;
            });
          }), g.focusin = "onfocusin" in r2;
          var qt = /^(?:focusinfocus|focusoutblur)$/, wt = function(e3) {
            e3.stopPropagation();
          };
          k.extend(k.event, { trigger: function(e3, t3, n3, i3) {
            var o2, s2, a2, l2, c2, u2, f2, p2, h2 = [n3 || y], m2 = d.call(e3, "type") ? e3.type : e3, g2 = d.call(e3, "namespace") ? e3.namespace.split(".") : [];
            if (s2 = p2 = a2 = n3 = n3 || y, 3 !== n3.nodeType && 8 !== n3.nodeType && !qt.test(m2 + k.event.triggered) && (m2.indexOf(".") > -1 && (g2 = m2.split("."), m2 = g2.shift(), g2.sort()), c2 = m2.indexOf(":") < 0 && "on" + m2, (e3 = e3[k.expando] ? e3 : new k.Event(m2, "object" == typeof e3 && e3)).isTrigger = i3 ? 2 : 3, e3.namespace = g2.join("."), e3.rnamespace = e3.namespace ? new RegExp("(^|\\.)" + g2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e3.result = void 0, e3.target || (e3.target = n3), t3 = null == t3 ? [e3] : k.makeArray(t3, [e3]), f2 = k.event.special[m2] || {}, i3 || !f2.trigger || false !== f2.trigger.apply(n3, t3))) {
              if (!i3 && !f2.noBubble && !b(n3)) {
                for (l2 = f2.delegateType || m2, qt.test(l2 + m2) || (s2 = s2.parentNode); s2; s2 = s2.parentNode)
                  h2.push(s2), a2 = s2;
                a2 === (n3.ownerDocument || y) && h2.push(a2.defaultView || a2.parentWindow || r2);
              }
              for (o2 = 0; (s2 = h2[o2++]) && !e3.isPropagationStopped(); )
                p2 = s2, e3.type = o2 > 1 ? l2 : f2.bindType || m2, (u2 = (K.get(s2, "events") || /* @__PURE__ */ Object.create(null))[e3.type] && K.get(s2, "handle")) && u2.apply(s2, t3), (u2 = c2 && s2[c2]) && u2.apply && Y(s2) && (e3.result = u2.apply(s2, t3), false === e3.result && e3.preventDefault());
              return e3.type = m2, i3 || e3.isDefaultPrevented() || f2._default && false !== f2._default.apply(h2.pop(), t3) || !Y(n3) || c2 && v(n3[m2]) && !b(n3) && ((a2 = n3[c2]) && (n3[c2] = null), k.event.triggered = m2, e3.isPropagationStopped() && p2.addEventListener(m2, wt), n3[m2](), e3.isPropagationStopped() && p2.removeEventListener(m2, wt), k.event.triggered = void 0, a2 && (n3[c2] = a2)), e3.result;
            }
          }, simulate: function(e3, t3, n3) {
            var r3 = k.extend(new k.Event(), n3, { type: e3, isSimulated: true });
            k.event.trigger(r3, null, t3);
          } }), k.fn.extend({ trigger: function(e3, t3) {
            return this.each(function() {
              k.event.trigger(e3, t3, this);
            });
          }, triggerHandler: function(e3, t3) {
            var n3 = this[0];
            if (n3)
              return k.event.trigger(e3, t3, n3, true);
          } }), g.focusin || k.each({ focus: "focusin", blur: "focusout" }, function(e3, t3) {
            var n3 = function(e4) {
              k.event.simulate(t3, e4.target, k.event.fix(e4));
            };
            k.event.special[t3] = { setup: function() {
              var r3 = this.ownerDocument || this.document || this, i3 = K.access(r3, t3);
              i3 || r3.addEventListener(e3, n3, true), K.access(r3, t3, (i3 || 0) + 1);
            }, teardown: function() {
              var r3 = this.ownerDocument || this.document || this, i3 = K.access(r3, t3) - 1;
              i3 ? K.access(r3, t3, i3) : (r3.removeEventListener(e3, n3, true), K.remove(r3, t3));
            } };
          });
          var Tt = r2.location, kt = { guid: Date.now() }, Ct = /\?/;
          k.parseXML = function(e3) {
            var t3, n3;
            if (!e3 || "string" != typeof e3)
              return null;
            try {
              t3 = new r2.DOMParser().parseFromString(e3, "text/xml");
            } catch (e4) {
            }
            return n3 = t3 && t3.getElementsByTagName("parsererror")[0], t3 && !n3 || k.error("Invalid XML: " + (n3 ? k.map(n3.childNodes, function(e4) {
              return e4.textContent;
            }).join("\n") : e3)), t3;
          };
          var Ot = /\[\]$/, jt = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
          function Et(e3, t3, n3, r3) {
            var i3;
            if (Array.isArray(t3))
              k.each(t3, function(t4, i4) {
                n3 || Ot.test(e3) ? r3(e3, i4) : Et(e3 + "[" + ("object" == typeof i4 && null != i4 ? t4 : "") + "]", i4, n3, r3);
              });
            else if (n3 || "object" !== w(t3))
              r3(e3, t3);
            else
              for (i3 in t3)
                Et(e3 + "[" + i3 + "]", t3[i3], n3, r3);
          }
          k.param = function(e3, t3) {
            var n3, r3 = [], i3 = function(e4, t4) {
              var n4 = v(t4) ? t4() : t4;
              r3[r3.length] = encodeURIComponent(e4) + "=" + encodeURIComponent(null == n4 ? "" : n4);
            };
            if (null == e3)
              return "";
            if (Array.isArray(e3) || e3.jquery && !k.isPlainObject(e3))
              k.each(e3, function() {
                i3(this.name, this.value);
              });
            else
              for (n3 in e3)
                Et(n3, e3[n3], t3, i3);
            return r3.join("&");
          }, k.fn.extend({ serialize: function() {
            return k.param(this.serializeArray());
          }, serializeArray: function() {
            return this.map(function() {
              var e3 = k.prop(this, "elements");
              return e3 ? k.makeArray(e3) : this;
            }).filter(function() {
              var e3 = this.type;
              return this.name && !k(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e3) && (this.checked || !ge.test(e3));
            }).map(function(e3, t3) {
              var n3 = k(this).val();
              return null == n3 ? null : Array.isArray(n3) ? k.map(n3, function(e4) {
                return { name: t3.name, value: e4.replace(jt, "\r\n") };
              }) : { name: t3.name, value: n3.replace(jt, "\r\n") };
            }).get();
          } });
          var At = /%20/g, Lt = /#.*$/, _t = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Qt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Mt = {}, zt = "*/".concat("*"), Pt = y.createElement("a");
          function Ht(e3) {
            return function(t3, n3) {
              "string" != typeof t3 && (n3 = t3, t3 = "*");
              var r3, i3 = 0, o2 = t3.toLowerCase().match(M) || [];
              if (v(n3))
                for (; r3 = o2[i3++]; )
                  "+" === r3[0] ? (r3 = r3.slice(1) || "*", (e3[r3] = e3[r3] || []).unshift(n3)) : (e3[r3] = e3[r3] || []).push(n3);
            };
          }
          function Ft(e3, t3, n3, r3) {
            var i3 = {}, o2 = e3 === Mt;
            function s2(a2) {
              var l2;
              return i3[a2] = true, k.each(e3[a2] || [], function(e4, a3) {
                var c2 = a3(t3, n3, r3);
                return "string" != typeof c2 || o2 || i3[c2] ? o2 ? !(l2 = c2) : void 0 : (t3.dataTypes.unshift(c2), s2(c2), false);
              }), l2;
            }
            return s2(t3.dataTypes[0]) || !i3["*"] && s2("*");
          }
          function Bt(e3, t3) {
            var n3, r3, i3 = k.ajaxSettings.flatOptions || {};
            for (n3 in t3)
              void 0 !== t3[n3] && ((i3[n3] ? e3 : r3 || (r3 = {}))[n3] = t3[n3]);
            return r3 && k.extend(true, e3, r3), e3;
          }
          Pt.href = Tt.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e3, t3) {
            return t3 ? Bt(Bt(e3, k.ajaxSettings), t3) : Bt(k.ajaxSettings, e3);
          }, ajaxPrefilter: Ht(It), ajaxTransport: Ht(Mt), ajax: function(e3, t3) {
            "object" == typeof e3 && (t3 = e3, e3 = void 0), t3 = t3 || {};
            var n3, i3, o2, s2, a2, l2, c2, u2, f2, p2, d2 = k.ajaxSetup({}, t3), h2 = d2.context || d2, m2 = d2.context && (h2.nodeType || h2.jquery) ? k(h2) : k.event, g2 = k.Deferred(), v2 = k.Callbacks("once memory"), b2 = d2.statusCode || {}, x2 = {}, q2 = {}, w2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e4) {
              var t4;
              if (c2) {
                if (!s2)
                  for (s2 = {}; t4 = Nt.exec(o2); )
                    s2[t4[1].toLowerCase() + " "] = (s2[t4[1].toLowerCase() + " "] || []).concat(t4[2]);
                t4 = s2[e4.toLowerCase() + " "];
              }
              return null == t4 ? null : t4.join(", ");
            }, getAllResponseHeaders: function() {
              return c2 ? o2 : null;
            }, setRequestHeader: function(e4, t4) {
              return null == c2 && (e4 = q2[e4.toLowerCase()] = q2[e4.toLowerCase()] || e4, x2[e4] = t4), this;
            }, overrideMimeType: function(e4) {
              return null == c2 && (d2.mimeType = e4), this;
            }, statusCode: function(e4) {
              var t4;
              if (e4)
                if (c2)
                  T2.always(e4[T2.status]);
                else
                  for (t4 in e4)
                    b2[t4] = [b2[t4], e4[t4]];
              return this;
            }, abort: function(e4) {
              var t4 = e4 || w2;
              return n3 && n3.abort(t4), C2(0, t4), this;
            } };
            if (g2.promise(T2), d2.url = ((e3 || d2.url || Tt.href) + "").replace(Rt, Tt.protocol + "//"), d2.type = t3.method || t3.type || d2.method || d2.type, d2.dataTypes = (d2.dataType || "*").toLowerCase().match(M) || [""], null == d2.crossDomain) {
              l2 = y.createElement("a");
              try {
                l2.href = d2.url, l2.href = l2.href, d2.crossDomain = Pt.protocol + "//" + Pt.host != l2.protocol + "//" + l2.host;
              } catch (e4) {
                d2.crossDomain = true;
              }
            }
            if (d2.data && d2.processData && "string" != typeof d2.data && (d2.data = k.param(d2.data, d2.traditional)), Ft(It, d2, t3, T2), c2)
              return T2;
            for (f2 in (u2 = k.event && d2.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), d2.type = d2.type.toUpperCase(), d2.hasContent = !Qt.test(d2.type), i3 = d2.url.replace(Lt, ""), d2.hasContent ? d2.data && d2.processData && 0 === (d2.contentType || "").indexOf("application/x-www-form-urlencoded") && (d2.data = d2.data.replace(At, "+")) : (p2 = d2.url.slice(i3.length), d2.data && (d2.processData || "string" == typeof d2.data) && (i3 += (Ct.test(i3) ? "&" : "?") + d2.data, delete d2.data), false === d2.cache && (i3 = i3.replace(_t, "$1"), p2 = (Ct.test(i3) ? "&" : "?") + "_=" + kt.guid++ + p2), d2.url = i3 + p2), d2.ifModified && (k.lastModified[i3] && T2.setRequestHeader("If-Modified-Since", k.lastModified[i3]), k.etag[i3] && T2.setRequestHeader("If-None-Match", k.etag[i3])), (d2.data && d2.hasContent && false !== d2.contentType || t3.contentType) && T2.setRequestHeader("Content-Type", d2.contentType), T2.setRequestHeader("Accept", d2.dataTypes[0] && d2.accepts[d2.dataTypes[0]] ? d2.accepts[d2.dataTypes[0]] + ("*" !== d2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d2.accepts["*"]), d2.headers)
              T2.setRequestHeader(f2, d2.headers[f2]);
            if (d2.beforeSend && (false === d2.beforeSend.call(h2, T2, d2) || c2))
              return T2.abort();
            if (w2 = "abort", v2.add(d2.complete), T2.done(d2.success), T2.fail(d2.error), n3 = Ft(Mt, d2, t3, T2)) {
              if (T2.readyState = 1, u2 && m2.trigger("ajaxSend", [T2, d2]), c2)
                return T2;
              d2.async && d2.timeout > 0 && (a2 = r2.setTimeout(function() {
                T2.abort("timeout");
              }, d2.timeout));
              try {
                c2 = false, n3.send(x2, C2);
              } catch (e4) {
                if (c2)
                  throw e4;
                C2(-1, e4);
              }
            } else
              C2(-1, "No Transport");
            function C2(e4, t4, s3, l3) {
              var f3, p3, y2, x3, q3, w3 = t4;
              c2 || (c2 = true, a2 && r2.clearTimeout(a2), n3 = void 0, o2 = l3 || "", T2.readyState = e4 > 0 ? 4 : 0, f3 = e4 >= 200 && e4 < 300 || 304 === e4, s3 && (x3 = function(e5, t5, n4) {
                for (var r3, i4, o3, s4, a3 = e5.contents, l4 = e5.dataTypes; "*" === l4[0]; )
                  l4.shift(), void 0 === r3 && (r3 = e5.mimeType || t5.getResponseHeader("Content-Type"));
                if (r3) {
                  for (i4 in a3)
                    if (a3[i4] && a3[i4].test(r3)) {
                      l4.unshift(i4);
                      break;
                    }
                }
                if (l4[0] in n4)
                  o3 = l4[0];
                else {
                  for (i4 in n4) {
                    if (!l4[0] || e5.converters[i4 + " " + l4[0]]) {
                      o3 = i4;
                      break;
                    }
                    s4 || (s4 = i4);
                  }
                  o3 = o3 || s4;
                }
                if (o3)
                  return o3 !== l4[0] && l4.unshift(o3), n4[o3];
              }(d2, T2, s3)), !f3 && k.inArray("script", d2.dataTypes) > -1 && k.inArray("json", d2.dataTypes) < 0 && (d2.converters["text script"] = function() {
              }), x3 = function(e5, t5, n4, r3) {
                var i4, o3, s4, a3, l4, c3 = {}, u3 = e5.dataTypes.slice();
                if (u3[1])
                  for (s4 in e5.converters)
                    c3[s4.toLowerCase()] = e5.converters[s4];
                for (o3 = u3.shift(); o3; )
                  if (e5.responseFields[o3] && (n4[e5.responseFields[o3]] = t5), !l4 && r3 && e5.dataFilter && (t5 = e5.dataFilter(t5, e5.dataType)), l4 = o3, o3 = u3.shift()) {
                    if ("*" === o3)
                      o3 = l4;
                    else if ("*" !== l4 && l4 !== o3) {
                      if (!(s4 = c3[l4 + " " + o3] || c3["* " + o3])) {
                        for (i4 in c3)
                          if ((a3 = i4.split(" "))[1] === o3 && (s4 = c3[l4 + " " + a3[0]] || c3["* " + a3[0]])) {
                            true === s4 ? s4 = c3[i4] : true !== c3[i4] && (o3 = a3[0], u3.unshift(a3[1]));
                            break;
                          }
                      }
                      if (true !== s4)
                        if (s4 && e5.throws)
                          t5 = s4(t5);
                        else
                          try {
                            t5 = s4(t5);
                          } catch (e6) {
                            return { state: "parsererror", error: s4 ? e6 : "No conversion from " + l4 + " to " + o3 };
                          }
                    }
                  }
                return { state: "success", data: t5 };
              }(d2, x3, T2, f3), f3 ? (d2.ifModified && ((q3 = T2.getResponseHeader("Last-Modified")) && (k.lastModified[i3] = q3), (q3 = T2.getResponseHeader("etag")) && (k.etag[i3] = q3)), 204 === e4 || "HEAD" === d2.type ? w3 = "nocontent" : 304 === e4 ? w3 = "notmodified" : (w3 = x3.state, p3 = x3.data, f3 = !(y2 = x3.error))) : (y2 = w3, !e4 && w3 || (w3 = "error", e4 < 0 && (e4 = 0))), T2.status = e4, T2.statusText = (t4 || w3) + "", f3 ? g2.resolveWith(h2, [p3, w3, T2]) : g2.rejectWith(h2, [T2, w3, y2]), T2.statusCode(b2), b2 = void 0, u2 && m2.trigger(f3 ? "ajaxSuccess" : "ajaxError", [T2, d2, f3 ? p3 : y2]), v2.fireWith(h2, [T2, w3]), u2 && (m2.trigger("ajaxComplete", [T2, d2]), --k.active || k.event.trigger("ajaxStop")));
            }
            return T2;
          }, getJSON: function(e3, t3, n3) {
            return k.get(e3, t3, n3, "json");
          }, getScript: function(e3, t3) {
            return k.get(e3, void 0, t3, "script");
          } }), k.each(["get", "post"], function(e3, t3) {
            k[t3] = function(e4, n3, r3, i3) {
              return v(n3) && (i3 = i3 || r3, r3 = n3, n3 = void 0), k.ajax(k.extend({ url: e4, type: t3, dataType: i3, data: n3, success: r3 }, k.isPlainObject(e4) && e4));
            };
          }), k.ajaxPrefilter(function(e3) {
            var t3;
            for (t3 in e3.headers)
              "content-type" === t3.toLowerCase() && (e3.contentType = e3.headers[t3] || "");
          }), k._evalUrl = function(e3, t3, n3) {
            return k.ajax({ url: e3, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
            } }, dataFilter: function(e4) {
              k.globalEval(e4, t3, n3);
            } });
          }, k.fn.extend({ wrapAll: function(e3) {
            var t3;
            return this[0] && (v(e3) && (e3 = e3.call(this[0])), t3 = k(e3, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t3.insertBefore(this[0]), t3.map(function() {
              for (var e4 = this; e4.firstElementChild; )
                e4 = e4.firstElementChild;
              return e4;
            }).append(this)), this;
          }, wrapInner: function(e3) {
            return v(e3) ? this.each(function(t3) {
              k(this).wrapInner(e3.call(this, t3));
            }) : this.each(function() {
              var t3 = k(this), n3 = t3.contents();
              n3.length ? n3.wrapAll(e3) : t3.append(e3);
            });
          }, wrap: function(e3) {
            var t3 = v(e3);
            return this.each(function(n3) {
              k(this).wrapAll(t3 ? e3.call(this, n3) : e3);
            });
          }, unwrap: function(e3) {
            return this.parent(e3).not("body").each(function() {
              k(this).replaceWith(this.childNodes);
            }), this;
          } }), k.expr.pseudos.hidden = function(e3) {
            return !k.expr.pseudos.visible(e3);
          }, k.expr.pseudos.visible = function(e3) {
            return !!(e3.offsetWidth || e3.offsetHeight || e3.getClientRects().length);
          }, k.ajaxSettings.xhr = function() {
            try {
              return new r2.XMLHttpRequest();
            } catch (e3) {
            }
          };
          var $t = { 0: 200, 1223: 204 }, Wt = k.ajaxSettings.xhr();
          g.cors = !!Wt && "withCredentials" in Wt, g.ajax = Wt = !!Wt, k.ajaxTransport(function(e3) {
            var t3, n3;
            if (g.cors || Wt && !e3.crossDomain)
              return { send: function(i3, o2) {
                var s2, a2 = e3.xhr();
                if (a2.open(e3.type, e3.url, e3.async, e3.username, e3.password), e3.xhrFields)
                  for (s2 in e3.xhrFields)
                    a2[s2] = e3.xhrFields[s2];
                for (s2 in e3.mimeType && a2.overrideMimeType && a2.overrideMimeType(e3.mimeType), e3.crossDomain || i3["X-Requested-With"] || (i3["X-Requested-With"] = "XMLHttpRequest"), i3)
                  a2.setRequestHeader(s2, i3[s2]);
                t3 = function(e4) {
                  return function() {
                    t3 && (t3 = n3 = a2.onload = a2.onerror = a2.onabort = a2.ontimeout = a2.onreadystatechange = null, "abort" === e4 ? a2.abort() : "error" === e4 ? "number" != typeof a2.status ? o2(0, "error") : o2(a2.status, a2.statusText) : o2($t[a2.status] || a2.status, a2.statusText, "text" !== (a2.responseType || "text") || "string" != typeof a2.responseText ? { binary: a2.response } : { text: a2.responseText }, a2.getAllResponseHeaders()));
                  };
                }, a2.onload = t3(), n3 = a2.onerror = a2.ontimeout = t3("error"), void 0 !== a2.onabort ? a2.onabort = n3 : a2.onreadystatechange = function() {
                  4 === a2.readyState && r2.setTimeout(function() {
                    t3 && n3();
                  });
                }, t3 = t3("abort");
                try {
                  a2.send(e3.hasContent && e3.data || null);
                } catch (e4) {
                  if (t3)
                    throw e4;
                }
              }, abort: function() {
                t3 && t3();
              } };
          }), k.ajaxPrefilter(function(e3) {
            e3.crossDomain && (e3.contents.script = false);
          }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e3) {
            return k.globalEval(e3), e3;
          } } }), k.ajaxPrefilter("script", function(e3) {
            void 0 === e3.cache && (e3.cache = false), e3.crossDomain && (e3.type = "GET");
          }), k.ajaxTransport("script", function(e3) {
            var t3, n3;
            if (e3.crossDomain || e3.scriptAttrs)
              return { send: function(r3, i3) {
                t3 = k("<script>").attr(e3.scriptAttrs || {}).prop({ charset: e3.scriptCharset, src: e3.url }).on("load error", n3 = function(e4) {
                  t3.remove(), n3 = null, e4 && i3("error" === e4.type ? 404 : 200, e4.type);
                }), y.head.appendChild(t3[0]);
              }, abort: function() {
                n3 && n3();
              } };
          });
          var Xt, Ut = [], Vt = /(=)\?(?=&|$)|\?\?/;
          k.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var e3 = Ut.pop() || k.expando + "_" + kt.guid++;
            return this[e3] = true, e3;
          } }), k.ajaxPrefilter("json jsonp", function(e3, t3, n3) {
            var i3, o2, s2, a2 = false !== e3.jsonp && (Vt.test(e3.url) ? "url" : "string" == typeof e3.data && 0 === (e3.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e3.data) && "data");
            if (a2 || "jsonp" === e3.dataTypes[0])
              return i3 = e3.jsonpCallback = v(e3.jsonpCallback) ? e3.jsonpCallback() : e3.jsonpCallback, a2 ? e3[a2] = e3[a2].replace(Vt, "$1" + i3) : false !== e3.jsonp && (e3.url += (Ct.test(e3.url) ? "&" : "?") + e3.jsonp + "=" + i3), e3.converters["script json"] = function() {
                return s2 || k.error(i3 + " was not called"), s2[0];
              }, e3.dataTypes[0] = "json", o2 = r2[i3], r2[i3] = function() {
                s2 = arguments;
              }, n3.always(function() {
                void 0 === o2 ? k(r2).removeProp(i3) : r2[i3] = o2, e3[i3] && (e3.jsonpCallback = t3.jsonpCallback, Ut.push(i3)), s2 && v(o2) && o2(s2[0]), s2 = o2 = void 0;
              }), "script";
          }), g.createHTMLDocument = ((Xt = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), k.parseHTML = function(e3, t3, n3) {
            return "string" != typeof e3 ? [] : ("boolean" == typeof t3 && (n3 = t3, t3 = false), t3 || (g.createHTMLDocument ? ((r3 = (t3 = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t3.head.appendChild(r3)) : t3 = y), o2 = !n3 && [], (i3 = A.exec(e3)) ? [t3.createElement(i3[1])] : (i3 = Te([e3], t3, o2), o2 && o2.length && k(o2).remove(), k.merge([], i3.childNodes)));
            var r3, i3, o2;
          }, k.fn.load = function(e3, t3, n3) {
            var r3, i3, o2, s2 = this, a2 = e3.indexOf(" ");
            return a2 > -1 && (r3 = vt(e3.slice(a2)), e3 = e3.slice(0, a2)), v(t3) ? (n3 = t3, t3 = void 0) : t3 && "object" == typeof t3 && (i3 = "POST"), s2.length > 0 && k.ajax({ url: e3, type: i3 || "GET", dataType: "html", data: t3 }).done(function(e4) {
              o2 = arguments, s2.html(r3 ? k("<div>").append(k.parseHTML(e4)).find(r3) : e4);
            }).always(n3 && function(e4, t4) {
              s2.each(function() {
                n3.apply(this, o2 || [e4.responseText, t4, e4]);
              });
            }), this;
          }, k.expr.pseudos.animated = function(e3) {
            return k.grep(k.timers, function(t3) {
              return e3 === t3.elem;
            }).length;
          }, k.offset = { setOffset: function(e3, t3, n3) {
            var r3, i3, o2, s2, a2, l2, c2 = k.css(e3, "position"), u2 = k(e3), f2 = {};
            "static" === c2 && (e3.style.position = "relative"), a2 = u2.offset(), o2 = k.css(e3, "top"), l2 = k.css(e3, "left"), ("absolute" === c2 || "fixed" === c2) && (o2 + l2).indexOf("auto") > -1 ? (s2 = (r3 = u2.position()).top, i3 = r3.left) : (s2 = parseFloat(o2) || 0, i3 = parseFloat(l2) || 0), v(t3) && (t3 = t3.call(e3, n3, k.extend({}, a2))), null != t3.top && (f2.top = t3.top - a2.top + s2), null != t3.left && (f2.left = t3.left - a2.left + i3), "using" in t3 ? t3.using.call(e3, f2) : u2.css(f2);
          } }, k.fn.extend({ offset: function(e3) {
            if (arguments.length)
              return void 0 === e3 ? this : this.each(function(t4) {
                k.offset.setOffset(this, e3, t4);
              });
            var t3, n3, r3 = this[0];
            return r3 ? r3.getClientRects().length ? (t3 = r3.getBoundingClientRect(), n3 = r3.ownerDocument.defaultView, { top: t3.top + n3.pageYOffset, left: t3.left + n3.pageXOffset }) : { top: 0, left: 0 } : void 0;
          }, position: function() {
            if (this[0]) {
              var e3, t3, n3, r3 = this[0], i3 = { top: 0, left: 0 };
              if ("fixed" === k.css(r3, "position"))
                t3 = r3.getBoundingClientRect();
              else {
                for (t3 = this.offset(), n3 = r3.ownerDocument, e3 = r3.offsetParent || n3.documentElement; e3 && (e3 === n3.body || e3 === n3.documentElement) && "static" === k.css(e3, "position"); )
                  e3 = e3.parentNode;
                e3 && e3 !== r3 && 1 === e3.nodeType && ((i3 = k(e3).offset()).top += k.css(e3, "borderTopWidth", true), i3.left += k.css(e3, "borderLeftWidth", true));
              }
              return { top: t3.top - i3.top - k.css(r3, "marginTop", true), left: t3.left - i3.left - k.css(r3, "marginLeft", true) };
            }
          }, offsetParent: function() {
            return this.map(function() {
              for (var e3 = this.offsetParent; e3 && "static" === k.css(e3, "position"); )
                e3 = e3.offsetParent;
              return e3 || se;
            });
          } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e3, t3) {
            var n3 = "pageYOffset" === t3;
            k.fn[e3] = function(r3) {
              return W(this, function(e4, r4, i3) {
                var o2;
                if (b(e4) ? o2 = e4 : 9 === e4.nodeType && (o2 = e4.defaultView), void 0 === i3)
                  return o2 ? o2[t3] : e4[r4];
                o2 ? o2.scrollTo(n3 ? o2.pageXOffset : i3, n3 ? i3 : o2.pageYOffset) : e4[r4] = i3;
              }, e3, r3, arguments.length);
            };
          }), k.each(["top", "left"], function(e3, t3) {
            k.cssHooks[t3] = We(g.pixelPosition, function(e4, n3) {
              if (n3)
                return n3 = $e(e4, t3), Pe.test(n3) ? k(e4).position()[t3] + "px" : n3;
            });
          }), k.each({ Height: "height", Width: "width" }, function(e3, t3) {
            k.each({ padding: "inner" + e3, content: t3, "": "outer" + e3 }, function(n3, r3) {
              k.fn[r3] = function(i3, o2) {
                var s2 = arguments.length && (n3 || "boolean" != typeof i3), a2 = n3 || (true === i3 || true === o2 ? "margin" : "border");
                return W(this, function(t4, n4, i4) {
                  var o3;
                  return b(t4) ? 0 === r3.indexOf("outer") ? t4["inner" + e3] : t4.document.documentElement["client" + e3] : 9 === t4.nodeType ? (o3 = t4.documentElement, Math.max(t4.body["scroll" + e3], o3["scroll" + e3], t4.body["offset" + e3], o3["offset" + e3], o3["client" + e3])) : void 0 === i4 ? k.css(t4, n4, a2) : k.style(t4, n4, i4, a2);
                }, t3, s2 ? i3 : void 0, s2);
              };
            });
          }), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e3, t3) {
            k.fn[t3] = function(e4) {
              return this.on(t3, e4);
            };
          }), k.fn.extend({ bind: function(e3, t3, n3) {
            return this.on(e3, null, t3, n3);
          }, unbind: function(e3, t3) {
            return this.off(e3, null, t3);
          }, delegate: function(e3, t3, n3, r3) {
            return this.on(t3, e3, n3, r3);
          }, undelegate: function(e3, t3, n3) {
            return 1 === arguments.length ? this.off(e3, "**") : this.off(t3, e3 || "**", n3);
          }, hover: function(e3, t3) {
            return this.mouseenter(e3).mouseleave(t3 || e3);
          } }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e3, t3) {
            k.fn[t3] = function(e4, n3) {
              return arguments.length > 0 ? this.on(t3, null, e4, n3) : this.trigger(t3);
            };
          });
          var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          k.proxy = function(e3, t3) {
            var n3, r3, i3;
            if ("string" == typeof t3 && (n3 = e3[t3], t3 = e3, e3 = n3), v(e3))
              return r3 = a.call(arguments, 2), i3 = function() {
                return e3.apply(t3 || this, r3.concat(a.call(arguments)));
              }, i3.guid = e3.guid = e3.guid || k.guid++, i3;
          }, k.holdReady = function(e3) {
            e3 ? k.readyWait++ : k.ready(true);
          }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = E, k.isFunction = v, k.isWindow = b, k.camelCase = G, k.type = w, k.now = Date.now, k.isNumeric = function(e3) {
            var t3 = k.type(e3);
            return ("number" === t3 || "string" === t3) && !isNaN(e3 - parseFloat(e3));
          }, k.trim = function(e3) {
            return null == e3 ? "" : (e3 + "").replace(Gt, "");
          }, void 0 === (n2 = function() {
            return k;
          }.apply(t2, [])) || (e2.exports = n2);
          var Yt = r2.jQuery, Zt = r2.$;
          return k.noConflict = function(e3) {
            return r2.$ === k && (r2.$ = Zt), e3 && r2.jQuery === k && (r2.jQuery = Yt), k;
          }, void 0 === i2 && (r2.jQuery = r2.$ = k), k;
        });
      }, 703: (e2, t2, n2) => {
        var r2 = n2(414);
        function i2() {
        }
        function o() {
        }
        o.resetWarningCache = i2, e2.exports = function() {
          function e3(e4, t4, n4, i3, o2, s) {
            if (s !== r2) {
              var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw a.name = "Invariant Violation", a;
            }
          }
          function t3() {
            return e3;
          }
          e3.isRequired = e3;
          var n3 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: o, resetWarningCache: i2 };
          return n3.PropTypes = n3, n3;
        };
      }, 697: (e2, t2, n2) => {
        e2.exports = n2(703)();
      }, 414: (e2) => {
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, 156: (t2) => {
        t2.exports = e;
      } }, n = {};
      function r(e2) {
        var i2 = n[e2];
        if (void 0 !== i2)
          return i2.exports;
        var o = n[e2] = { id: e2, exports: {} };
        return t[e2].call(o.exports, o, o.exports, r), o.exports;
      }
      r.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return r.d(t2, { a: t2 }), t2;
      }, r.d = (e2, t2) => {
        for (var n2 in t2)
          r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var i = {};
      return (() => {
        r.r(i), r.d(i, { addStyles: () => t2, EditableMathField: () => n2, StaticMathField: () => o, default: () => s });
        var e2 = r(527);
        function t2() {
          if (null == document.getElementById("react-mathquill-styles")) {
            var t3 = document.createElement("style");
            t3.setAttribute("id", "react-mathquill-styles"), t3.innerHTML = e2.Z[0][1], document.getElementsByTagName("head")[0].appendChild(t3);
          }
        }
        var n2 = r(991).Z, o = r(717).Z;
        const s = n2;
      })(), i;
    })();
  });
})(reactMathquill_min);
(function(module) {
  {
    module.exports = reactMathquill_minExports;
  }
})(reactMathquill);
reactMathquillExports.addStyles();
const Button = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  color: #ffffff;
  background-color: var(--mainBlue);
  display: inline-block;
  text-align: center;
  padding: 2px;
  z-index: 0;
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`;
function MathInput(props) {
  let {
    name,
    id,
    SVs,
    actions,
    sourceOfUpdate,
    ignoreUpdate,
    rendererName,
    callAction
  } = useDoenetRenderer(props);
  MathInput.baseStateVariable = "rawRendererValue";
  const [mathField, setMathField] = reactExports.useState(null);
  const [focused, setFocused] = reactExports.useState(null);
  const textareaRef = reactExports.useRef(null);
  const setRendererState = Recoil_index_24(rendererState(rendererName));
  let rendererValue = reactExports.useRef(SVs.rawRendererValue);
  let includeCheckWork = reactExports.useRef(SVs.includeCheckWork && !SVs.suppressCheckwork);
  includeCheckWork.current = SVs.includeCheckWork && !SVs.suppressCheckwork;
  if (!ignoreUpdate) {
    rendererValue.current = SVs.rawRendererValue;
  }
  let validationState = reactExports.useRef(null);
  const setFocusedField = Recoil_index_24(focusedMathField);
  const setFocusedFieldReturn = Recoil_index_24(focusedMathFieldReturn);
  const containerRef = Recoil_index_20(palletRef);
  const dragHandleRef = Recoil_index_20(handleRef);
  const updateValidationState = () => {
    validationState.current = "unvalidated";
    if (SVs.valueHasBeenValidated) {
      if (SVs.creditAchieved === 1) {
        validationState.current = "correct";
      } else if (SVs.creditAchieved === 0) {
        validationState.current = "incorrect";
      } else {
        validationState.current = "partialcorrect";
      }
    }
  };
  const handleVirtualKeyboardClick = (text) => {
    mathField.focus();
    if (!text) {
      console.log("Empty value");
      return;
    }
    const splitCommand = text.split(" ");
    const command = splitCommand[0];
    const input = text.substring(command.length + 1);
    if (command == "cmd") {
      mathField.cmd(input);
    } else if (command == "write") {
      mathField.write(input);
    } else if (command == "keystroke") {
      mathField.keystroke(input);
    } else if (command == "type") {
      mathField.typedText(input);
    }
  };
  const handleDefaultVirtualKeyboardClick = (text) => {
    console.log("no mathinput field focused");
  };
  const handleDefaultVirtualKeyboardReturn = (text) => {
    console.log("no mathinput field focused");
  };
  const handlePressEnter = (e) => {
    callAction({
      action: actions.updateValue,
      baseVariableValue: rendererValue.current
    });
    if (includeCheckWork.current && validationState.current === "unvalidated") {
      callAction({
        action: actions.submitAnswer
      });
    }
  };
  const handleFocus = (e) => {
    setFocusedField(() => handleVirtualKeyboardClick);
    setFocusedFieldReturn(() => handlePressEnter);
    setFocused(true);
  };
  const handleBlur = (e) => {
    var _a, _b;
    if ((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.contains(e.relatedTarget)) {
      setTimeout(() => {
        mathField.focus();
      }, 100);
    } else if ((_b = dragHandleRef == null ? void 0 : dragHandleRef.current) == null ? void 0 : _b.contains(e.relatedTarget)) {
      setTimeout(() => {
        mathField.focus();
      }, 100);
    } else {
      callAction({
        action: actions.updateValue,
        baseVariableValue: rendererValue.current
      });
      setFocusedField(() => handleDefaultVirtualKeyboardClick);
      setFocusedFieldReturn(() => handleDefaultVirtualKeyboardReturn);
    }
    setFocused(false);
  };
  const onChangeHandler = (text) => {
    var _a;
    if (text.replace(/\s/g, "").replace(/\^{(\w)}/g, "^$1") !== ((_a = rendererValue.current) == null ? void 0 : _a.replace(/\s/g, "").replace(/\^{(\w)}/g, "^$1"))) {
      rendererValue.current = text;
      setRendererState((was) => {
        let newObj = { ...was };
        newObj.ignoreUpdate = true;
        return newObj;
      });
      callAction({
        action: actions.updateRawValue,
        args: {
          rawRendererValue: text
        },
        baseVariableValue: text
      });
    }
  };
  if (SVs.hidden) {
    return null;
  }
  updateValidationState();
  let checkWorkStyle = {
    cursor: "pointer",
    padding: "1px 6px 1px 6px"
  };
  let mathInputStyle = {
    /* Set each border attribute separately since the borderColor is updated during rerender (checking mathInput's disabled state)
    Currently does not work with border: "var(--mainBorder)" */
    borderColor: "var(--canvastext)",
    borderStyle: "solid",
    borderWidth: "2px",
    margin: "0px",
    boxShadow: "none",
    outlineOffset: "2px",
    outlineColor: "var(--canvastext)",
    outlineWidth: "2px",
    minWidth: `${SVs.minWidth > 0 ? SVs.minWidth : 0}px`
  };
  if (focused) {
    mathInputStyle.outlineStyle = "solid";
  }
  let mathInputWrapperCursor = "allowed";
  if (SVs.disabled) {
    checkWorkStyle.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--mainGray");
    checkWorkStyle.color = "black";
    checkWorkStyle.cursor = "not-allowed";
    mathInputStyle.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--mainGray");
    mathInputStyle.backgroundColor = "rgba(239, 239, 239, 0.3)";
    mathInputStyle.pointerEvents = "none";
    mathInputWrapperCursor = "not-allowed";
  }
  if (textareaRef.current && textareaRef.current.disabled !== SVs.disabled) {
    textareaRef.current.disabled = SVs.disabled;
  }
  let checkWorkButton = null;
  if (SVs.includeCheckWork && !SVs.suppressCheckwork) {
    if (validationState.current === "unvalidated") {
      checkWorkButton = /* @__PURE__ */ jsx(
        Button,
        {
          id: id + "_submit",
          tabIndex: "0",
          disabled: SVs.disabled,
          style: checkWorkStyle,
          onClick: () => callAction({
            action: actions.submitAnswer
          }),
          onKeyPress: (e) => {
            if (e.key === "Enter") {
              callAction({
                action: actions.submitAnswer
              });
            }
          },
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLevelDownAlt, transform: { rotate: 90 } })
        }
      );
    } else {
      if (SVs.showCorrectness) {
        if (validationState.current === "correct") {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainGreen");
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_correct", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCheck }) });
        } else if (validationState.current === "partialcorrect") {
          let percent = Math.round(SVs.creditAchieved * 100);
          let partialCreditContents = `${percent} %`;
          checkWorkStyle.width = "44px";
          checkWorkStyle.backgroundColor = "#efab34";
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_partial", style: checkWorkStyle, children: partialCreditContents });
        } else {
          checkWorkStyle.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--mainRed");
          checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_incorrect", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTimes }) });
        }
      } else {
        checkWorkStyle.backgroundColor = "rgb(74, 3, 217)";
        checkWorkStyle.padding = "1px 8px 1px 4px";
        checkWorkButton = /* @__PURE__ */ jsx(Button, { id: id + "_saved", style: checkWorkStyle, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCloud }) });
      }
    }
    if (SVs.numAttemptsLeft < 0) {
      checkWorkButton = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkWorkButton,
        /* @__PURE__ */ jsx("span", { children: "(no attempts remaining)" })
      ] });
    } else if (SVs.numAttemptsLeft == 1) {
      checkWorkButton = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkWorkButton,
        /* @__PURE__ */ jsx("span", { children: "(1 attempt remaining)" })
      ] });
    } else if (Number.isFinite(SVs.numAttemptsLeft)) {
      checkWorkButton = /* @__PURE__ */ jsxs(Fragment, { children: [
        checkWorkButton,
        /* @__PURE__ */ jsxs("span", { children: [
          "(",
          SVs.numAttemptsLeft,
          " attempts remaining)"
        ] })
      ] });
    }
  }
  let label = SVs.label;
  if (SVs.labelHasLatex) {
    label = /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: label });
  }
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsxs("span", { id, children: [
      /* @__PURE__ */ jsxs("label", { style: { display: "inline-flex", maxWidth: "100%" }, children: [
        label,
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "mathInputWrapper",
            style: { cursor: mathInputWrapperCursor },
            children: /* @__PURE__ */ jsx(
              reactMathquillExports.EditableMathField,
              {
                style: mathInputStyle,
                latex: rendererValue.current,
                config: {
                  autoCommands: "alpha beta gamma delta epsilon zeta eta mu nu xi omega rho sigma tau phi chi psi omega iota kappa lambda Gamma Delta Xi Omega Sigma Phi Psi Omega Lambda sqrt pi Pi theta Theta integral infinity forall exists",
                  autoOperatorNames: "arg deg det dim exp gcd hom ker lg lim ln log max min Pr cos cosh acos acosh arccos arccosh cot coth acot acoth arccot arccoth csc csch acsc acsch arccsc arccsch sec sech asec asech arcsec arcsech sin sinh asin asinh arcsin arcsinh tan tanh atan atanh arctan arctanh nPr nCr",
                  handlers: {
                    enter: handlePressEnter
                  },
                  substituteTextarea: function() {
                    textareaRef.current = document.createElement("textarea");
                    textareaRef.current.disabled = SVs.disabled;
                    textareaRef.current.addEventListener(
                      "focusout",
                      (e) => {
                        let keyboards = Array.from(
                          document.getElementsByClassName("keyboard")
                        );
                        keyboards.forEach((keyboard) => {
                          if (keyboard == null ? void 0 : keyboard.contains(e.relatedTarget)) {
                            e.target.focus();
                          }
                        });
                      },
                      false
                    );
                    return textareaRef.current;
                  }
                },
                onChange: (mField) => {
                  onChangeHandler(mField.latex());
                },
                onBlur: handleBlur,
                onFocus: handleFocus,
                mathquillDidMount: (mf) => {
                  setMathField(mf);
                }
              }
            )
          }
        )
      ] }),
      checkWorkButton
    ] })
  ] });
}
export {
  MathInput as default
};
