import { EditorState as $, DefaultDraftBlockRenderMap as Ff, RichUtils as Ge, Modifier as lr, AtomicBlockUtils as $f, SelectionState as mr, CompositeDecorator as cr, convertToRaw as jf, Editor as Nr, convertFromRaw as lo, ContentBlock as Vg, genKey as Jg, ContentState as Wf, getDefaultKeyBinding as Xg, convertFromHTML as Zg } from "draft-js";
import { convertToRaw as SR } from "draft-js";
import m from "prop-types";
import yo, { createContext as Qg, useReducer as eh, useContext as V, useEffect as ve, useState as le, useRef as mo } from "react";
import { Title as Pr, Button as ke, pxToRem as x, BoldIcon as rh, ItalicIcon as th, ListIcon as nh, AlignLeftIcon as ah, AlignCenterIcon as ih, AlignRightIcon as oh, ImageIcon as sh, VideoIcon as uh, LinkIcon as lh, EditorButtonIcon as ch, BlockquoteIcon as fh, Field as _r, TextInputWithButton as dh, KissKissLoadingAnimation as gh, VisuallyHidden as hh, ArrowContainer as ph, Text as co, ScreenConfig as Ke, Modal as J, ButtonGroup as fo, ImageDropUploader as vh, AlertBox as Nf, DropdownMenu as Je, EditIconNext as _h, LinkIconNext as Es, CrossIconNext as yh, GarbageIconNext as mh, parseHtml as br, ResponsiveIframeContainer as Kr, CONTAINER_PADDING as Kf, CONTAINER_PADDING_THIN as bh, useLazyObserver as Gf, LazyLoader as Ah, domElementHelper as Ar, TYPOGRAPHY as Br, Paragraph as Rh, Details as Eh, ArrowIcon as Ch, ParagraphIcon as Th, Title4Icon as Sh, Title3Icon as Ih, Title2Icon as wh, Title1Icon as qh } from "@kisskissbankbank/kitten";
import we from "classnames";
import Re, { createGlobalStyle as Uf, css as zf } from "styled-components";
import { Map as bo, OrderedMap as Oh } from "immutable";
import { useField as Fr, ErrorMessage as Hf, Formik as fr, useFormikContext as xh, Form as Yf } from "formik";
import Rr from "linkify-it";
import Er from "tlds";
import * as $r from "yup";
import Ph from "qs";
import { convertFromHTML as Vf } from "draft-convert";
import { convertToHTML as wR } from "draft-convert";
import { stateToHTML as kh } from "draft-js-export-html";
var kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gr = { exports: {} }, ur = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bt, Cs;
function Jf() {
  if (Cs)
    return bt;
  Cs = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bt = a() ? Object.assign : function(i, o) {
    for (var s, u = n(i), l, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var h in s)
        r.call(s, h) && (u[h] = s[h]);
      if (e) {
        l = e(s);
        for (var g = 0; g < l.length; g++)
          t.call(s, l[g]) && (u[l[g]] = s[l[g]]);
      }
    }
    return u;
  }, bt;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ts;
function Lh() {
  if (Ts)
    return ur;
  Ts = 1, Jf();
  var e = yo, r = 60103;
  if (ur.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    r = t("react.element"), ur.Fragment = t("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, l) {
    var f, h = {}, g = null, p = null;
    l !== void 0 && (g = "" + l), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (f in u)
      a.call(u, f) && !i.hasOwnProperty(f) && (h[f] = u[f]);
    if (s && s.defaultProps)
      for (f in u = s.defaultProps, u)
        h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: r, type: s, key: g, ref: p, props: h, _owner: n.current };
  }
  return ur.jsx = o, ur.jsxs = o, ur;
}
var At = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Dh() {
  return Ss || (Ss = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = yo, t = Jf(), n = 60103, a = 60106;
      e.Fragment = 60107;
      var i = 60108, o = 60114, s = 60109, u = 60110, l = 60112, f = 60113, h = 60120, g = 60115, p = 60116, _ = 60121, v = 60122, A = 60117, b = 60129, y = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var E = Symbol.for;
        n = E("react.element"), a = E("react.portal"), e.Fragment = E("react.fragment"), i = E("react.strict_mode"), o = E("react.profiler"), s = E("react.provider"), u = E("react.context"), l = E("react.forward_ref"), f = E("react.suspense"), h = E("react.suspense_list"), g = E("react.memo"), p = E("react.lazy"), _ = E("react.block"), v = E("react.server.block"), A = E("react.fundamental"), E("react.scope"), E("react.opaque.id"), b = E("react.debug_trace_mode"), E("react.offscreen"), y = E("react.legacy_hidden");
      }
      var C = typeof Symbol == "function" && Symbol.iterator, P = "@@iterator";
      function q(c) {
        if (c === null || typeof c != "object")
          return null;
        var R = C && c[C] || c[P];
        return typeof R == "function" ? R : null;
      }
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function k(c) {
        {
          for (var R = arguments.length, S = new Array(R > 1 ? R - 1 : 0), D = 1; D < R; D++)
            S[D - 1] = arguments[D];
          G("error", c, S);
        }
      }
      function G(c, R, S) {
        {
          var D = w.ReactDebugCurrentFrame, U = D.getStackAddendum();
          U !== "" && (R += "%s", S = S.concat([U]));
          var z = S.map(function(N) {
            return "" + N;
          });
          z.unshift("Warning: " + R), Function.prototype.apply.call(console[c], console, z);
        }
      }
      var te = !1;
      function B(c) {
        return !!(typeof c == "string" || typeof c == "function" || c === e.Fragment || c === o || c === b || c === i || c === f || c === h || c === y || te || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === g || c.$$typeof === s || c.$$typeof === u || c.$$typeof === l || c.$$typeof === A || c.$$typeof === _ || c[0] === v));
      }
      function Q(c, R, S) {
        var D = R.displayName || R.name || "";
        return c.displayName || (D !== "" ? S + "(" + D + ")" : S);
      }
      function ae(c) {
        return c.displayName || "Context";
      }
      function ee(c) {
        if (c == null)
          return null;
        if (typeof c.tag == "number" && k("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof c == "function")
          return c.displayName || c.name || null;
        if (typeof c == "string")
          return c;
        switch (c) {
          case e.Fragment:
            return "Fragment";
          case a:
            return "Portal";
          case o:
            return "Profiler";
          case i:
            return "StrictMode";
          case f:
            return "Suspense";
          case h:
            return "SuspenseList";
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case u:
              var R = c;
              return ae(R) + ".Consumer";
            case s:
              var S = c;
              return ae(S._context) + ".Provider";
            case l:
              return Q(c, c.render, "ForwardRef");
            case g:
              return ee(c.type);
            case _:
              return ee(c._render);
            case p: {
              var D = c, U = D._payload, z = D._init;
              try {
                return ee(z(U));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fe = 0, Me, tr, Be, nr, ar, Ue, ze;
      function ie() {
      }
      ie.__reactDisabledLog = !0;
      function qe() {
        {
          if (fe === 0) {
            Me = console.log, tr = console.info, Be = console.warn, nr = console.error, ar = console.group, Ue = console.groupCollapsed, ze = console.groupEnd;
            var c = {
              configurable: !0,
              enumerable: !0,
              value: ie,
              writable: !0
            };
            Object.defineProperties(console, {
              info: c,
              log: c,
              warn: c,
              error: c,
              group: c,
              groupCollapsed: c,
              groupEnd: c
            });
          }
          fe++;
        }
      }
      function O() {
        {
          if (fe--, fe === 0) {
            var c = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, c, {
                value: Me
              }),
              info: t({}, c, {
                value: tr
              }),
              warn: t({}, c, {
                value: Be
              }),
              error: t({}, c, {
                value: nr
              }),
              group: t({}, c, {
                value: ar
              }),
              groupCollapsed: t({}, c, {
                value: Ue
              }),
              groupEnd: t({}, c, {
                value: ze
              })
            });
          }
          fe < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var T = w.ReactCurrentDispatcher, I;
      function L(c, R, S) {
        {
          if (I === void 0)
            try {
              throw Error();
            } catch (U) {
              var D = U.stack.trim().match(/\n( *(at )?)/);
              I = D && D[1] || "";
            }
          return `
` + I + c;
        }
      }
      var F = !1, X;
      {
        var pe = typeof WeakMap == "function" ? WeakMap : Map;
        X = new pe();
      }
      function oe(c, R) {
        if (!c || F)
          return "";
        {
          var S = X.get(c);
          if (S !== void 0)
            return S;
        }
        var D;
        F = !0;
        var U = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var z;
        z = T.current, T.current = null, qe();
        try {
          if (R) {
            var N = function() {
              throw Error();
            };
            if (Object.defineProperty(N.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(N, []);
              } catch (xe) {
                D = xe;
              }
              Reflect.construct(c, [], N);
            } else {
              try {
                N.call();
              } catch (xe) {
                D = xe;
              }
              c.call(N.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (xe) {
              D = xe;
            }
            c();
          }
        } catch (xe) {
          if (xe && D && typeof xe.stack == "string") {
            for (var j = xe.stack.split(`
`), ge = D.stack.split(`
`), Z = j.length - 1, re = ge.length - 1; Z >= 1 && re >= 0 && j[Z] !== ge[re]; )
              re--;
            for (; Z >= 1 && re >= 0; Z--, re--)
              if (j[Z] !== ge[re]) {
                if (Z !== 1 || re !== 1)
                  do
                    if (Z--, re--, re < 0 || j[Z] !== ge[re]) {
                      var Oe = `
` + j[Z].replace(" at new ", " at ");
                      return typeof c == "function" && X.set(c, Oe), Oe;
                    }
                  while (Z >= 1 && re >= 0);
                break;
              }
          }
        } finally {
          F = !1, T.current = z, O(), Error.prepareStackTrace = U;
        }
        var sr = c ? c.displayName || c.name : "", Rs = sr ? L(sr) : "";
        return typeof c == "function" && X.set(c, Rs), Rs;
      }
      function de(c, R, S) {
        return oe(c, !1);
      }
      function ir(c) {
        var R = c.prototype;
        return !!(R && R.isReactComponent);
      }
      function W(c, R, S) {
        if (c == null)
          return "";
        if (typeof c == "function")
          return oe(c, ir(c));
        if (typeof c == "string")
          return L(c);
        switch (c) {
          case f:
            return L("Suspense");
          case h:
            return L("SuspenseList");
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case l:
              return de(c.render);
            case g:
              return W(c.type, R, S);
            case _:
              return de(c._render);
            case p: {
              var D = c, U = D._payload, z = D._init;
              try {
                return W(z(U), R, S);
              } catch {
              }
            }
          }
        return "";
      }
      var He = {}, K = w.ReactDebugCurrentFrame;
      function be(c) {
        if (c) {
          var R = c._owner, S = W(c.type, c._source, R ? R.type : null);
          K.setExtraStackFrame(S);
        } else
          K.setExtraStackFrame(null);
      }
      function Fe(c, R, S, D, U) {
        {
          var z = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var N in c)
            if (z(c, N)) {
              var j = void 0;
              try {
                if (typeof c[N] != "function") {
                  var ge = Error((D || "React class") + ": " + S + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ge.name = "Invariant Violation", ge;
                }
                j = c[N](R, N, D, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                j = Z;
              }
              j && !(j instanceof Error) && (be(U), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", S, N, typeof j), be(null)), j instanceof Error && !(j.message in He) && (He[j.message] = !0, be(U), k("Failed %s type: %s", S, j.message), be(null));
            }
        }
      }
      var Ye = w.ReactCurrentOwner, $e = Object.prototype.hasOwnProperty, Se = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, se, Ve, je;
      je = {};
      function vt(c) {
        if ($e.call(c, "ref")) {
          var R = Object.getOwnPropertyDescriptor(c, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return c.ref !== void 0;
      }
      function wr(c) {
        if ($e.call(c, "key")) {
          var R = Object.getOwnPropertyDescriptor(c, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return c.key !== void 0;
      }
      function We(c, R) {
        if (typeof c.ref == "string" && Ye.current && R && Ye.current.stateNode !== R) {
          var S = ee(Ye.current.type);
          je[S] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(Ye.current.type), c.ref), je[S] = !0);
        }
      }
      function qr(c, R) {
        {
          var S = function() {
            se || (se = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
          };
          S.isReactWarning = !0, Object.defineProperty(c, "key", {
            get: S,
            configurable: !0
          });
        }
      }
      function Or(c, R) {
        {
          var S = function() {
            Ve || (Ve = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
          };
          S.isReactWarning = !0, Object.defineProperty(c, "ref", {
            get: S,
            configurable: !0
          });
        }
      }
      var _t = function(c, R, S, D, U, z, N) {
        var j = {
          $$typeof: n,
          type: c,
          key: R,
          ref: S,
          props: N,
          _owner: z
        };
        return j._store = {}, Object.defineProperty(j._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(j, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: D
        }), Object.defineProperty(j, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
      };
      function xr(c, R, S, D, U) {
        {
          var z, N = {}, j = null, ge = null;
          S !== void 0 && (j = "" + S), wr(R) && (j = "" + R.key), vt(R) && (ge = R.ref, We(R, U));
          for (z in R)
            $e.call(R, z) && !Se.hasOwnProperty(z) && (N[z] = R[z]);
          if (c && c.defaultProps) {
            var Z = c.defaultProps;
            for (z in Z)
              N[z] === void 0 && (N[z] = Z[z]);
          }
          if (j || ge) {
            var re = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
            j && qr(N, re), ge && Or(N, re);
          }
          return _t(c, j, ge, U, D, Ye.current, N);
        }
      }
      var ye = w.ReactCurrentOwner, Ie = w.ReactDebugCurrentFrame;
      function or(c) {
        if (c) {
          var R = c._owner, S = W(c.type, c._source, R ? R.type : null);
          Ie.setExtraStackFrame(S);
        } else
          Ie.setExtraStackFrame(null);
      }
      var yt;
      yt = !1;
      function mt(c) {
        return typeof c == "object" && c !== null && c.$$typeof === n;
      }
      function _s() {
        {
          if (ye.current) {
            var c = ee(ye.current.type);
            if (c)
              return `

Check the render method of \`` + c + "`.";
          }
          return "";
        }
      }
      function Wg(c) {
        {
          if (c !== void 0) {
            var R = c.fileName.replace(/^.*[\\\/]/, ""), S = c.lineNumber;
            return `

Check your code at ` + R + ":" + S + ".";
          }
          return "";
        }
      }
      var ys = {};
      function Ng(c) {
        {
          var R = _s();
          if (!R) {
            var S = typeof c == "string" ? c : c.displayName || c.name;
            S && (R = `

Check the top-level render call using <` + S + ">.");
          }
          return R;
        }
      }
      function ms(c, R) {
        {
          if (!c._store || c._store.validated || c.key != null)
            return;
          c._store.validated = !0;
          var S = Ng(R);
          if (ys[S])
            return;
          ys[S] = !0;
          var D = "";
          c && c._owner && c._owner !== ye.current && (D = " It was passed a child from " + ee(c._owner.type) + "."), or(c), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, D), or(null);
        }
      }
      function bs(c, R) {
        {
          if (typeof c != "object")
            return;
          if (Array.isArray(c))
            for (var S = 0; S < c.length; S++) {
              var D = c[S];
              mt(D) && ms(D, R);
            }
          else if (mt(c))
            c._store && (c._store.validated = !0);
          else if (c) {
            var U = q(c);
            if (typeof U == "function" && U !== c.entries)
              for (var z = U.call(c), N; !(N = z.next()).done; )
                mt(N.value) && ms(N.value, R);
          }
        }
      }
      function Kg(c) {
        {
          var R = c.type;
          if (R == null || typeof R == "string")
            return;
          var S;
          if (typeof R == "function")
            S = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === l || R.$$typeof === g))
            S = R.propTypes;
          else
            return;
          if (S) {
            var D = ee(R);
            Fe(S, c.props, "prop", D, c);
          } else if (R.PropTypes !== void 0 && !yt) {
            yt = !0;
            var U = ee(R);
            k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gg(c) {
        {
          for (var R = Object.keys(c.props), S = 0; S < R.length; S++) {
            var D = R[S];
            if (D !== "children" && D !== "key") {
              or(c), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), or(null);
              break;
            }
          }
          c.ref !== null && (or(c), k("Invalid attribute `ref` supplied to `React.Fragment`."), or(null));
        }
      }
      function As(c, R, S, D, U, z) {
        {
          var N = B(c);
          if (!N) {
            var j = "";
            (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var ge = Wg(U);
            ge ? j += ge : j += _s();
            var Z;
            c === null ? Z = "null" : Array.isArray(c) ? Z = "array" : c !== void 0 && c.$$typeof === n ? (Z = "<" + (ee(c.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof c, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, j);
          }
          var re = xr(c, R, S, U, z);
          if (re == null)
            return re;
          if (N) {
            var Oe = R.children;
            if (Oe !== void 0)
              if (D)
                if (Array.isArray(Oe)) {
                  for (var sr = 0; sr < Oe.length; sr++)
                    bs(Oe[sr], c);
                  Object.freeze && Object.freeze(Oe);
                } else
                  k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                bs(Oe, c);
          }
          return c === e.Fragment ? Gg(re) : Kg(re), re;
        }
      }
      function Ug(c, R, S) {
        return As(c, R, S, !0);
      }
      function zg(c, R, S) {
        return As(c, R, S, !1);
      }
      var Hg = zg, Yg = Ug;
      e.jsx = Hg, e.jsxs = Yg;
    }();
  }(At)), At;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Lh() : e.exports = Dh();
})(Gr);
const ue = Gr.exports.Fragment, d = Gr.exports.jsx, M = Gr.exports.jsxs, Xf = {
  editorState: $.createEmpty(),
  focus: !1,
  editorRef: null,
  disabled: !1
}, H = Qg(Xf), Mh = (e, r) => {
  switch (r.type) {
    case "update":
    case "focus":
      return {
        ...e,
        ...r
      };
  }
}, go = ({
  translations: e,
  configResponsiveImageHandler: r,
  children: t
}) => /* @__PURE__ */ d(H.Provider, {
  value: eh(Mh, {
    ...Xf,
    translations: e,
    configResponsiveImageHandler: r
  }),
  children: t
}), Y = (e) => ({
  type: "update",
  editorState: e
}), Bh = (e) => ({
  type: "update",
  editorRef: e
}), yr = (e) => ({
  type: "update",
  disabled: e
}), Is = (e) => ({
  type: "focus",
  focus: e
}), Zf = Ff.merge(bo({
  "header-one": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Pr, {
      tag: "h1",
      modifier: "secondary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@s-up"
    })
  },
  "header-two": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Pr, {
      tag: "h2",
      modifier: "tertiary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@l-up"
    })
  },
  "header-three": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Pr, {
      tag: "h3",
      modifier: "quaternary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf"
    })
  },
  "header-four": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Pr, {
      tag: "h4",
      modifier: "quinary",
      noMargin: !0,
      className: "k-u-margin-bottom-single k-u-margin-bottom-singleHalf@s-up"
    })
  }
}));
var Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
var Qf = Ao.sanitizeUrl = void 0, Fh = /^([^\w]*)(javascript|data|vbscript)/im, $h = /&#(\w+)(^\w|;)?/g, jh = /&(newline|tab);/gi, Wh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Nh = /^.+(:|&colon;)/gim, Kh = [".", "/"];
function Gh(e) {
  return Kh.indexOf(e[0]) > -1;
}
function Uh(e) {
  return e.replace($h, function(r, t) {
    return String.fromCharCode(t);
  });
}
function zh(e) {
  var r = Uh(e || "").replace(jh, "").replace(Wh, "").trim();
  if (!r)
    return "about:blank";
  if (Gh(r))
    return r;
  var t = r.match(Nh);
  if (!t)
    return r;
  var n = t[0];
  return Fh.test(n) ? "about:blank" : r;
}
Qf = Ao.sanitizeUrl = zh;
var ed = {};
(function(e) {
  e.aliasToReal = {
    each: "forEach",
    eachRight: "forEachRight",
    entries: "toPairs",
    entriesIn: "toPairsIn",
    extend: "assignIn",
    extendAll: "assignInAll",
    extendAllWith: "assignInAllWith",
    extendWith: "assignInWith",
    first: "head",
    conforms: "conformsTo",
    matches: "isMatch",
    property: "get",
    __: "placeholder",
    F: "stubFalse",
    T: "stubTrue",
    all: "every",
    allPass: "overEvery",
    always: "constant",
    any: "some",
    anyPass: "overSome",
    apply: "spread",
    assoc: "set",
    assocPath: "set",
    complement: "negate",
    compose: "flowRight",
    contains: "includes",
    dissoc: "unset",
    dissocPath: "unset",
    dropLast: "dropRight",
    dropLastWhile: "dropRightWhile",
    equals: "isEqual",
    identical: "eq",
    indexBy: "keyBy",
    init: "initial",
    invertObj: "invert",
    juxt: "over",
    omitAll: "omit",
    nAry: "ary",
    path: "get",
    pathEq: "matchesProperty",
    pathOr: "getOr",
    paths: "at",
    pickAll: "pick",
    pipe: "flow",
    pluck: "map",
    prop: "get",
    propEq: "matchesProperty",
    propOr: "getOr",
    props: "at",
    symmetricDifference: "xor",
    symmetricDifferenceBy: "xorBy",
    symmetricDifferenceWith: "xorWith",
    takeLast: "takeRight",
    takeLastWhile: "takeRightWhile",
    unapply: "rest",
    unnest: "flatten",
    useWith: "overArgs",
    where: "conformsTo",
    whereEq: "isMatch",
    zipObj: "zipObject"
  }, e.aryMethod = {
    1: [
      "assignAll",
      "assignInAll",
      "attempt",
      "castArray",
      "ceil",
      "create",
      "curry",
      "curryRight",
      "defaultsAll",
      "defaultsDeepAll",
      "floor",
      "flow",
      "flowRight",
      "fromPairs",
      "invert",
      "iteratee",
      "memoize",
      "method",
      "mergeAll",
      "methodOf",
      "mixin",
      "nthArg",
      "over",
      "overEvery",
      "overSome",
      "rest",
      "reverse",
      "round",
      "runInContext",
      "spread",
      "template",
      "trim",
      "trimEnd",
      "trimStart",
      "uniqueId",
      "words",
      "zipAll"
    ],
    2: [
      "add",
      "after",
      "ary",
      "assign",
      "assignAllWith",
      "assignIn",
      "assignInAllWith",
      "at",
      "before",
      "bind",
      "bindAll",
      "bindKey",
      "chunk",
      "cloneDeepWith",
      "cloneWith",
      "concat",
      "conformsTo",
      "countBy",
      "curryN",
      "curryRightN",
      "debounce",
      "defaults",
      "defaultsDeep",
      "defaultTo",
      "delay",
      "difference",
      "divide",
      "drop",
      "dropRight",
      "dropRightWhile",
      "dropWhile",
      "endsWith",
      "eq",
      "every",
      "filter",
      "find",
      "findIndex",
      "findKey",
      "findLast",
      "findLastIndex",
      "findLastKey",
      "flatMap",
      "flatMapDeep",
      "flattenDepth",
      "forEach",
      "forEachRight",
      "forIn",
      "forInRight",
      "forOwn",
      "forOwnRight",
      "get",
      "groupBy",
      "gt",
      "gte",
      "has",
      "hasIn",
      "includes",
      "indexOf",
      "intersection",
      "invertBy",
      "invoke",
      "invokeMap",
      "isEqual",
      "isMatch",
      "join",
      "keyBy",
      "lastIndexOf",
      "lt",
      "lte",
      "map",
      "mapKeys",
      "mapValues",
      "matchesProperty",
      "maxBy",
      "meanBy",
      "merge",
      "mergeAllWith",
      "minBy",
      "multiply",
      "nth",
      "omit",
      "omitBy",
      "overArgs",
      "pad",
      "padEnd",
      "padStart",
      "parseInt",
      "partial",
      "partialRight",
      "partition",
      "pick",
      "pickBy",
      "propertyOf",
      "pull",
      "pullAll",
      "pullAt",
      "random",
      "range",
      "rangeRight",
      "rearg",
      "reject",
      "remove",
      "repeat",
      "restFrom",
      "result",
      "sampleSize",
      "some",
      "sortBy",
      "sortedIndex",
      "sortedIndexOf",
      "sortedLastIndex",
      "sortedLastIndexOf",
      "sortedUniqBy",
      "split",
      "spreadFrom",
      "startsWith",
      "subtract",
      "sumBy",
      "take",
      "takeRight",
      "takeRightWhile",
      "takeWhile",
      "tap",
      "throttle",
      "thru",
      "times",
      "trimChars",
      "trimCharsEnd",
      "trimCharsStart",
      "truncate",
      "union",
      "uniqBy",
      "uniqWith",
      "unset",
      "unzipWith",
      "without",
      "wrap",
      "xor",
      "zip",
      "zipObject",
      "zipObjectDeep"
    ],
    3: [
      "assignInWith",
      "assignWith",
      "clamp",
      "differenceBy",
      "differenceWith",
      "findFrom",
      "findIndexFrom",
      "findLastFrom",
      "findLastIndexFrom",
      "getOr",
      "includesFrom",
      "indexOfFrom",
      "inRange",
      "intersectionBy",
      "intersectionWith",
      "invokeArgs",
      "invokeArgsMap",
      "isEqualWith",
      "isMatchWith",
      "flatMapDepth",
      "lastIndexOfFrom",
      "mergeWith",
      "orderBy",
      "padChars",
      "padCharsEnd",
      "padCharsStart",
      "pullAllBy",
      "pullAllWith",
      "rangeStep",
      "rangeStepRight",
      "reduce",
      "reduceRight",
      "replace",
      "set",
      "slice",
      "sortedIndexBy",
      "sortedLastIndexBy",
      "transform",
      "unionBy",
      "unionWith",
      "update",
      "xorBy",
      "xorWith",
      "zipWith"
    ],
    4: [
      "fill",
      "setWith",
      "updateWith"
    ]
  }, e.aryRearg = {
    2: [1, 0],
    3: [2, 0, 1],
    4: [3, 2, 0, 1]
  }, e.iterateeAry = {
    dropRightWhile: 1,
    dropWhile: 1,
    every: 1,
    filter: 1,
    find: 1,
    findFrom: 1,
    findIndex: 1,
    findIndexFrom: 1,
    findKey: 1,
    findLast: 1,
    findLastFrom: 1,
    findLastIndex: 1,
    findLastIndexFrom: 1,
    findLastKey: 1,
    flatMap: 1,
    flatMapDeep: 1,
    flatMapDepth: 1,
    forEach: 1,
    forEachRight: 1,
    forIn: 1,
    forInRight: 1,
    forOwn: 1,
    forOwnRight: 1,
    map: 1,
    mapKeys: 1,
    mapValues: 1,
    partition: 1,
    reduce: 2,
    reduceRight: 2,
    reject: 1,
    remove: 1,
    some: 1,
    takeRightWhile: 1,
    takeWhile: 1,
    times: 1,
    transform: 2
  }, e.iterateeRearg = {
    mapKeys: [1],
    reduceRight: [1, 0]
  }, e.methodRearg = {
    assignInAllWith: [1, 0],
    assignInWith: [1, 2, 0],
    assignAllWith: [1, 0],
    assignWith: [1, 2, 0],
    differenceBy: [1, 2, 0],
    differenceWith: [1, 2, 0],
    getOr: [2, 1, 0],
    intersectionBy: [1, 2, 0],
    intersectionWith: [1, 2, 0],
    isEqualWith: [1, 2, 0],
    isMatchWith: [2, 1, 0],
    mergeAllWith: [1, 0],
    mergeWith: [1, 2, 0],
    padChars: [2, 1, 0],
    padCharsEnd: [2, 1, 0],
    padCharsStart: [2, 1, 0],
    pullAllBy: [2, 1, 0],
    pullAllWith: [2, 1, 0],
    rangeStep: [1, 2, 0],
    rangeStepRight: [1, 2, 0],
    setWith: [3, 1, 2, 0],
    sortedIndexBy: [2, 1, 0],
    sortedLastIndexBy: [2, 1, 0],
    unionBy: [1, 2, 0],
    unionWith: [1, 2, 0],
    updateWith: [3, 1, 2, 0],
    xorBy: [1, 2, 0],
    xorWith: [1, 2, 0],
    zipWith: [1, 2, 0]
  }, e.methodSpread = {
    assignAll: { start: 0 },
    assignAllWith: { start: 0 },
    assignInAll: { start: 0 },
    assignInAllWith: { start: 0 },
    defaultsAll: { start: 0 },
    defaultsDeepAll: { start: 0 },
    invokeArgs: { start: 2 },
    invokeArgsMap: { start: 2 },
    mergeAll: { start: 0 },
    mergeAllWith: { start: 0 },
    partial: { start: 1 },
    partialRight: { start: 1 },
    without: { start: 1 },
    zipAll: { start: 0 }
  }, e.mutate = {
    array: {
      fill: !0,
      pull: !0,
      pullAll: !0,
      pullAllBy: !0,
      pullAllWith: !0,
      pullAt: !0,
      remove: !0,
      reverse: !0
    },
    object: {
      assign: !0,
      assignAll: !0,
      assignAllWith: !0,
      assignIn: !0,
      assignInAll: !0,
      assignInAllWith: !0,
      assignInWith: !0,
      assignWith: !0,
      defaults: !0,
      defaultsAll: !0,
      defaultsDeep: !0,
      defaultsDeepAll: !0,
      merge: !0,
      mergeAll: !0,
      mergeAllWith: !0,
      mergeWith: !0
    },
    set: {
      set: !0,
      setWith: !0,
      unset: !0,
      update: !0,
      updateWith: !0
    }
  }, e.realToAlias = function() {
    var r = Object.prototype.hasOwnProperty, t = e.aliasToReal, n = {};
    for (var a in t) {
      var i = t[a];
      r.call(n, i) ? n[i].push(a) : n[i] = [a];
    }
    return n;
  }(), e.remap = {
    assignAll: "assign",
    assignAllWith: "assignWith",
    assignInAll: "assignIn",
    assignInAllWith: "assignInWith",
    curryN: "curry",
    curryRightN: "curryRight",
    defaultsAll: "defaults",
    defaultsDeepAll: "defaultsDeep",
    findFrom: "find",
    findIndexFrom: "findIndex",
    findLastFrom: "findLast",
    findLastIndexFrom: "findLastIndex",
    getOr: "get",
    includesFrom: "includes",
    indexOfFrom: "indexOf",
    invokeArgs: "invoke",
    invokeArgsMap: "invokeMap",
    lastIndexOfFrom: "lastIndexOf",
    mergeAll: "merge",
    mergeAllWith: "mergeWith",
    padChars: "pad",
    padCharsEnd: "padEnd",
    padCharsStart: "padStart",
    propertyOf: "get",
    rangeStep: "range",
    rangeStepRight: "rangeRight",
    restFrom: "rest",
    spreadFrom: "spread",
    trimChars: "trim",
    trimCharsEnd: "trimEnd",
    trimCharsStart: "trimStart",
    zipAll: "zip"
  }, e.skipFixed = {
    castArray: !0,
    flow: !0,
    flowRight: !0,
    iteratee: !0,
    mixin: !0,
    rearg: !0,
    runInContext: !0
  }, e.skipRearg = {
    add: !0,
    assign: !0,
    assignIn: !0,
    bind: !0,
    bindKey: !0,
    concat: !0,
    difference: !0,
    divide: !0,
    eq: !0,
    gt: !0,
    gte: !0,
    isEqual: !0,
    lt: !0,
    lte: !0,
    matchesProperty: !0,
    merge: !0,
    multiply: !0,
    overArgs: !0,
    partial: !0,
    partialRight: !0,
    propertyOf: !0,
    random: !0,
    range: !0,
    rangeRight: !0,
    subtract: !0,
    zip: !0,
    zipObject: !0,
    zipObjectDeep: !0
  };
})(ed);
var Rt, ws;
function me() {
  return ws || (ws = 1, Rt = {}), Rt;
}
var ne = ed, Hh = me(), qs = Array.prototype.push;
function Yh(e, r) {
  return r == 2 ? function(t, n) {
    return e.apply(void 0, arguments);
  } : function(t) {
    return e.apply(void 0, arguments);
  };
}
function Et(e, r) {
  return r == 2 ? function(t, n) {
    return e(t, n);
  } : function(t) {
    return e(t);
  };
}
function Os(e) {
  for (var r = e ? e.length : 0, t = Array(r); r--; )
    t[r] = e[r];
  return t;
}
function Vh(e) {
  return function(r) {
    return e({}, r);
  };
}
function Jh(e, r) {
  return function() {
    for (var t = arguments.length, n = t - 1, a = Array(t); t--; )
      a[t] = arguments[t];
    var i = a[r], o = a.slice(0, r);
    return i && qs.apply(o, i), r != n && qs.apply(o, a.slice(r + 1)), e.apply(this, o);
  };
}
function Ct(e, r) {
  return function() {
    var t = arguments.length;
    if (!!t) {
      for (var n = Array(t); t--; )
        n[t] = arguments[t];
      var a = n[0] = r.apply(void 0, n);
      return e.apply(void 0, n), a;
    }
  };
}
function ho(e, r, t, n) {
  var a = typeof r == "function", i = r === Object(r);
  if (i && (n = t, t = r, r = void 0), t == null)
    throw new TypeError();
  n || (n = {});
  var o = {
    cap: "cap" in n ? n.cap : !0,
    curry: "curry" in n ? n.curry : !0,
    fixed: "fixed" in n ? n.fixed : !0,
    immutable: "immutable" in n ? n.immutable : !0,
    rearg: "rearg" in n ? n.rearg : !0
  }, s = a ? t : Hh, u = "curry" in n && n.curry, l = "fixed" in n && n.fixed, f = "rearg" in n && n.rearg, h = a ? t.runInContext() : void 0, g = a ? t : {
    ary: e.ary,
    assign: e.assign,
    clone: e.clone,
    curry: e.curry,
    forEach: e.forEach,
    isArray: e.isArray,
    isError: e.isError,
    isFunction: e.isFunction,
    isWeakMap: e.isWeakMap,
    iteratee: e.iteratee,
    keys: e.keys,
    rearg: e.rearg,
    toInteger: e.toInteger,
    toPath: e.toPath
  }, p = g.ary, _ = g.assign, v = g.clone, A = g.curry, b = g.forEach, y = g.isArray, E = g.isError, C = g.isFunction, P = g.isWeakMap, q = g.keys, w = g.rearg, k = g.toInteger, G = g.toPath, te = q(ne.aryMethod), B = {
    castArray: function(O) {
      return function() {
        var T = arguments[0];
        return y(T) ? O(Os(T)) : O.apply(void 0, arguments);
      };
    },
    iteratee: function(O) {
      return function() {
        var T = arguments[0], I = arguments[1], L = O(T, I), F = L.length;
        return o.cap && typeof I == "number" ? (I = I > 2 ? I - 2 : 1, F && F <= I ? L : Et(L, I)) : L;
      };
    },
    mixin: function(O) {
      return function(T) {
        var I = this;
        if (!C(I))
          return O(I, Object(T));
        var L = [];
        return b(q(T), function(F) {
          C(T[F]) && L.push([F, I.prototype[F]]);
        }), O(I, Object(T)), b(L, function(F) {
          var X = F[1];
          C(X) ? I.prototype[F[0]] = X : delete I.prototype[F[0]];
        }), I;
      };
    },
    nthArg: function(O) {
      return function(T) {
        var I = T < 0 ? 1 : k(T) + 1;
        return A(O(T), I);
      };
    },
    rearg: function(O) {
      return function(T, I) {
        var L = I ? I.length : 0;
        return A(O(T, I), L);
      };
    },
    runInContext: function(O) {
      return function(T) {
        return ho(e, O(T), n);
      };
    }
  };
  function Q(O, T) {
    if (o.cap) {
      var I = ne.iterateeRearg[O];
      if (I)
        return ar(T, I);
      var L = !a && ne.iterateeAry[O];
      if (L)
        return nr(T, L);
    }
    return T;
  }
  function ae(O, T, I) {
    return u || o.curry && I > 1 ? A(T, I) : T;
  }
  function ee(O, T, I) {
    if (o.fixed && (l || !ne.skipFixed[O])) {
      var L = ne.methodSpread[O], F = L && L.start;
      return F === void 0 ? p(T, I) : Jh(T, F);
    }
    return T;
  }
  function fe(O, T, I) {
    return o.rearg && I > 1 && (f || !ne.skipRearg[O]) ? w(T, ne.methodRearg[O] || ne.aryRearg[I]) : T;
  }
  function Me(O, T) {
    T = G(T);
    for (var I = -1, L = T.length, F = L - 1, X = v(Object(O)), pe = X; pe != null && ++I < L; ) {
      var oe = T[I], de = pe[oe];
      de != null && !(C(de) || E(de) || P(de)) && (pe[oe] = v(I == F ? de : Object(de))), pe = pe[oe];
    }
    return X;
  }
  function tr(O) {
    return ie.runInContext.convert(O)(void 0);
  }
  function Be(O, T) {
    var I = ne.aliasToReal[O] || O, L = ne.remap[I] || I, F = n;
    return function(X) {
      var pe = a ? h : g, oe = a ? h[L] : T, de = _(_({}, F), X);
      return ho(pe, I, oe, de);
    };
  }
  function nr(O, T) {
    return Ue(O, function(I) {
      return typeof I == "function" ? Et(I, T) : I;
    });
  }
  function ar(O, T) {
    return Ue(O, function(I) {
      var L = T.length;
      return Yh(w(Et(I, L), T), L);
    });
  }
  function Ue(O, T) {
    return function() {
      var I = arguments.length;
      if (!I)
        return O();
      for (var L = Array(I); I--; )
        L[I] = arguments[I];
      var F = o.rearg ? 0 : I - 1;
      return L[F] = T(L[F]), O.apply(void 0, L);
    };
  }
  function ze(O, T, I) {
    var L, F = ne.aliasToReal[O] || O, X = T, pe = B[F];
    return pe ? X = pe(T) : o.immutable && (ne.mutate.array[F] ? X = Ct(T, Os) : ne.mutate.object[F] ? X = Ct(T, Vh(T)) : ne.mutate.set[F] && (X = Ct(T, Me))), b(te, function(oe) {
      return b(ne.aryMethod[oe], function(de) {
        if (F == de) {
          var ir = ne.methodSpread[F], W = ir && ir.afterRearg;
          return L = W ? ee(F, fe(F, X, oe), oe) : fe(F, ee(F, X, oe), oe), L = Q(F, L), L = ae(F, L, oe), !1;
        }
      }), !L;
    }), L || (L = X), L == T && (L = u ? A(L, 1) : function() {
      return T.apply(this, arguments);
    }), L.convert = Be(F, T), L.placeholder = T.placeholder = I, L;
  }
  if (!i)
    return ze(r, t, s);
  var ie = t, qe = [];
  return b(te, function(O) {
    b(ne.aryMethod[O], function(T) {
      var I = ie[ne.remap[T] || T];
      I && qe.push([T, ze(T, I, ie)]);
    });
  }), b(q(ie), function(O) {
    var T = ie[O];
    if (typeof T == "function") {
      for (var I = qe.length; I--; )
        if (qe[I][0] == O)
          return;
      T.convert = Be(O, T), qe.push([O, T]);
    }
  }), b(qe, function(O) {
    ie[O[0]] = O[1];
  }), ie.convert = tr, ie.placeholder = ie, b(q(ie), function(O) {
    b(ne.realToAlias[O] || [], function(T) {
      ie[T] = ie[O];
    });
  }), ie;
}
var Xh = ho, Tt, xs;
function Ro() {
  if (xs)
    return Tt;
  xs = 1;
  function e(r) {
    return r;
  }
  return Tt = e, Tt;
}
var St, Ps;
function rd() {
  if (Ps)
    return St;
  Ps = 1;
  var e = typeof kr == "object" && kr && kr.Object === Object && kr;
  return St = e, St;
}
var It, ks;
function _e() {
  if (ks)
    return It;
  ks = 1;
  var e = rd(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return It = t, It;
}
var wt, Ls;
function dr() {
  if (Ls)
    return wt;
  Ls = 1;
  var e = _e(), r = e.Symbol;
  return wt = r, wt;
}
var qt, Ds;
function Zh() {
  if (Ds)
    return qt;
  Ds = 1;
  var e = dr(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var s = t.call(o, a), u = o[a];
    try {
      o[a] = void 0;
      var l = !0;
    } catch {
    }
    var f = n.call(o);
    return l && (s ? o[a] = u : delete o[a]), f;
  }
  return qt = i, qt;
}
var Ot, Ms;
function Qh() {
  if (Ms)
    return Ot;
  Ms = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Ot = t, Ot;
}
var xt, Bs;
function Xe() {
  if (Bs)
    return xt;
  Bs = 1;
  var e = dr(), r = Zh(), t = Qh(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? r(s) : t(s);
  }
  return xt = o, xt;
}
function ep(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Le = ep, rp = Xe(), tp = Le, np = "[object AsyncFunction]", ap = "[object Function]", ip = "[object GeneratorFunction]", op = "[object Proxy]";
function sp(e) {
  if (!tp(e))
    return !1;
  var r = rp(e);
  return r == ap || r == ip || r == np || r == op;
}
var Eo = sp, Pt, Fs;
function up() {
  if (Fs)
    return Pt;
  Fs = 1;
  var e = _e(), r = e["__core-js_shared__"];
  return Pt = r, Pt;
}
var kt, $s;
function lp() {
  if ($s)
    return kt;
  $s = 1;
  var e = up(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return kt = t, kt;
}
var Lt, js;
function td() {
  if (js)
    return Lt;
  js = 1;
  var e = Function.prototype, r = e.toString;
  function t(n) {
    if (n != null) {
      try {
        return r.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Lt = t, Lt;
}
var Dt, Ws;
function cp() {
  if (Ws)
    return Dt;
  Ws = 1;
  var e = Eo, r = lp(), t = Le, n = td(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, l = s.hasOwnProperty, f = RegExp(
    "^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(g) {
    if (!t(g) || r(g))
      return !1;
    var p = e(g) ? f : i;
    return p.test(n(g));
  }
  return Dt = h, Dt;
}
var Mt, Ns;
function fp() {
  if (Ns)
    return Mt;
  Ns = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Mt = e, Mt;
}
var Bt, Ks;
function Ze() {
  if (Ks)
    return Bt;
  Ks = 1;
  var e = cp(), r = fp();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return Bt = t, Bt;
}
var Ft, Gs;
function nd() {
  if (Gs)
    return Ft;
  Gs = 1;
  var e = Ze(), r = _e(), t = e(r, "WeakMap");
  return Ft = t, Ft;
}
var $t, Us;
function ad() {
  if (Us)
    return $t;
  Us = 1;
  var e = nd(), r = e && new e();
  return $t = r, $t;
}
var dp = Ro(), zs = ad(), gp = zs ? function(e, r) {
  return zs.set(e, r), e;
} : dp, id = gp, jt, Hs;
function Ur() {
  if (Hs)
    return jt;
  Hs = 1;
  var e = Le, r = Object.create, t = function() {
    function n() {
    }
    return function(a) {
      if (!e(a))
        return {};
      if (r)
        return r(a);
      n.prototype = a;
      var i = new n();
      return n.prototype = void 0, i;
    };
  }();
  return jt = t, jt;
}
var hp = Ur(), pp = Le;
function vp(e) {
  return function() {
    var r = arguments;
    switch (r.length) {
      case 0:
        return new e();
      case 1:
        return new e(r[0]);
      case 2:
        return new e(r[0], r[1]);
      case 3:
        return new e(r[0], r[1], r[2]);
      case 4:
        return new e(r[0], r[1], r[2], r[3]);
      case 5:
        return new e(r[0], r[1], r[2], r[3], r[4]);
      case 6:
        return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
      case 7:
        return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
    }
    var t = hp(e.prototype), n = e.apply(t, r);
    return pp(n) ? n : t;
  };
}
var zr = vp, _p = zr, yp = _e(), mp = 1;
function bp(e, r, t) {
  var n = r & mp, a = _p(e);
  function i() {
    var o = this && this !== yp && this instanceof i ? a : e;
    return o.apply(n ? t : this, arguments);
  }
  return i;
}
var Ap = bp, Wt, Ys;
function Co() {
  if (Ys)
    return Wt;
  Ys = 1;
  function e(r, t, n) {
    switch (n.length) {
      case 0:
        return r.call(t);
      case 1:
        return r.call(t, n[0]);
      case 2:
        return r.call(t, n[0], n[1]);
      case 3:
        return r.call(t, n[0], n[1], n[2]);
    }
    return r.apply(t, n);
  }
  return Wt = e, Wt;
}
var Rp = Math.max;
function Ep(e, r, t, n) {
  for (var a = -1, i = e.length, o = t.length, s = -1, u = r.length, l = Rp(i - o, 0), f = Array(u + l), h = !n; ++s < u; )
    f[s] = r[s];
  for (; ++a < o; )
    (h || a < i) && (f[t[a]] = e[a]);
  for (; l--; )
    f[s++] = e[a++];
  return f;
}
var od = Ep, Cp = Math.max;
function Tp(e, r, t, n) {
  for (var a = -1, i = e.length, o = -1, s = t.length, u = -1, l = r.length, f = Cp(i - s, 0), h = Array(f + l), g = !n; ++a < f; )
    h[a] = e[a];
  for (var p = a; ++u < l; )
    h[p + u] = r[u];
  for (; ++o < s; )
    (g || a < i) && (h[p + t[o]] = e[a++]);
  return h;
}
var sd = Tp;
function Sp(e, r) {
  for (var t = e.length, n = 0; t--; )
    e[t] === r && ++n;
  return n;
}
var Ip = Sp, Nt, Vs;
function To() {
  if (Vs)
    return Nt;
  Vs = 1;
  function e() {
  }
  return Nt = e, Nt;
}
var Kt, Js;
function So() {
  if (Js)
    return Kt;
  Js = 1;
  var e = Ur(), r = To(), t = 4294967295;
  function n(a) {
    this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = t, this.__views__ = [];
  }
  return n.prototype = e(r.prototype), n.prototype.constructor = n, Kt = n, Kt;
}
var Gt, Xs;
function ud() {
  if (Xs)
    return Gt;
  Xs = 1;
  function e() {
  }
  return Gt = e, Gt;
}
var Ut, Zs;
function Io() {
  if (Zs)
    return Ut;
  Zs = 1;
  var e = ad(), r = ud(), t = e ? function(n) {
    return e.get(n);
  } : r;
  return Ut = t, Ut;
}
var zt, Qs;
function wp() {
  if (Qs)
    return zt;
  Qs = 1;
  var e = {};
  return zt = e, zt;
}
var Ht, eu;
function ld() {
  if (eu)
    return Ht;
  eu = 1;
  var e = wp(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    for (var i = a.name + "", o = e[i], s = t.call(e, i) ? o.length : 0; s--; ) {
      var u = o[s], l = u.func;
      if (l == null || l == a)
        return u.name;
    }
    return i;
  }
  return Ht = n, Ht;
}
var Yt, ru;
function wo() {
  if (ru)
    return Yt;
  ru = 1;
  var e = Ur(), r = To();
  function t(n, a) {
    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = void 0;
  }
  return t.prototype = e(r.prototype), t.prototype.constructor = t, Yt = t, Yt;
}
var Vt, tu;
function ce() {
  if (tu)
    return Vt;
  tu = 1;
  var e = Array.isArray;
  return Vt = e, Vt;
}
var Jt, nu;
function Ee() {
  if (nu)
    return Jt;
  nu = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Jt = e, Jt;
}
function qp(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Hr = qp, Xt, au;
function Op() {
  if (au)
    return Xt;
  au = 1;
  var e = So(), r = wo(), t = Hr;
  function n(a) {
    if (a instanceof e)
      return a.clone();
    var i = new r(a.__wrapped__, a.__chain__);
    return i.__actions__ = t(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
  }
  return Xt = n, Xt;
}
var Zt, iu;
function xp() {
  if (iu)
    return Zt;
  iu = 1;
  var e = So(), r = wo(), t = To(), n = ce(), a = Ee(), i = Op(), o = Object.prototype, s = o.hasOwnProperty;
  function u(l) {
    if (a(l) && !n(l) && !(l instanceof e)) {
      if (l instanceof r)
        return l;
      if (s.call(l, "__wrapped__"))
        return i(l);
    }
    return new r(l);
  }
  return u.prototype = t.prototype, u.prototype.constructor = u, Zt = u, Zt;
}
var Qt, ou;
function cd() {
  if (ou)
    return Qt;
  ou = 1;
  var e = So(), r = Io(), t = ld(), n = xp();
  function a(i) {
    var o = t(i), s = n[o];
    if (typeof s != "function" || !(o in e.prototype))
      return !1;
    if (i === s)
      return !0;
    var u = r(s);
    return !!u && i === u[0];
  }
  return Qt = a, Qt;
}
var en, su;
function fd() {
  if (su)
    return en;
  su = 1;
  var e = 800, r = 16, t = Date.now;
  function n(a) {
    var i = 0, o = 0;
    return function() {
      var s = t(), u = r - (s - o);
      if (o = s, u > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return en = n, en;
}
var Pp = id, kp = fd(), Lp = kp(Pp), dd = Lp, Dp = /\{\n\/\* \[wrapped with (.+)\] \*/, Mp = /,? & /;
function Bp(e) {
  var r = e.match(Dp);
  return r ? r[1].split(Mp) : [];
}
var Fp = Bp, $p = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function jp(e, r) {
  var t = r.length;
  if (!t)
    return e;
  var n = t - 1;
  return r[n] = (t > 1 ? "& " : "") + r[n], r = r.join(t > 2 ? ", " : " "), e.replace($p, `{
/* [wrapped with ` + r + `] */
`);
}
var Wp = jp, rn, uu;
function Np() {
  if (uu)
    return rn;
  uu = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return rn = e, rn;
}
var tn, lu;
function gd() {
  if (lu)
    return tn;
  lu = 1;
  var e = Ze(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return tn = r, tn;
}
var nn, cu;
function Kp() {
  if (cu)
    return nn;
  cu = 1;
  var e = Np(), r = gd(), t = Ro(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return nn = n, nn;
}
var an, fu;
function hd() {
  if (fu)
    return an;
  fu = 1;
  var e = Kp(), r = fd(), t = r(e);
  return an = t, an;
}
function Gp(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var qo = Gp, on, du;
function Up() {
  if (du)
    return on;
  du = 1;
  function e(r, t, n, a) {
    for (var i = r.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (t(r[o], o, r))
        return o;
    return -1;
  }
  return on = e, on;
}
var sn, gu;
function zp() {
  if (gu)
    return sn;
  gu = 1;
  function e(r) {
    return r !== r;
  }
  return sn = e, sn;
}
var un, hu;
function Hp() {
  if (hu)
    return un;
  hu = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return un = e, un;
}
var ln, pu;
function Oo() {
  if (pu)
    return ln;
  pu = 1;
  var e = Up(), r = zp(), t = Hp();
  function n(a, i, o) {
    return i === i ? t(a, i, o) : e(a, r, o);
  }
  return ln = n, ln;
}
var Yp = Oo();
function Vp(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && Yp(e, r, 0) > -1;
}
var pd = Vp, Jp = qo, Xp = pd, Zp = 1, Qp = 2, ev = 8, rv = 16, tv = 32, nv = 64, av = 128, iv = 256, ov = 512, sv = [
  ["ary", av],
  ["bind", Zp],
  ["bindKey", Qp],
  ["curry", ev],
  ["curryRight", rv],
  ["flip", ov],
  ["partial", tv],
  ["partialRight", nv],
  ["rearg", iv]
];
function uv(e, r) {
  return Jp(sv, function(t) {
    var n = "_." + t[0];
    r & t[1] && !Xp(e, n) && e.push(n);
  }), e.sort();
}
var lv = uv, cv = Fp, fv = Wp, dv = hd(), gv = lv;
function hv(e, r, t) {
  var n = r + "";
  return dv(e, fv(n, gv(cv(n), t)));
}
var vd = hv, pv = cd(), vv = dd, _v = vd, yv = 1, mv = 2, bv = 4, Av = 8, vu = 32, _u = 64;
function Rv(e, r, t, n, a, i, o, s, u, l) {
  var f = r & Av, h = f ? o : void 0, g = f ? void 0 : o, p = f ? i : void 0, _ = f ? void 0 : i;
  r |= f ? vu : _u, r &= ~(f ? _u : vu), r & bv || (r &= ~(yv | mv));
  var v = [
    e,
    r,
    a,
    p,
    h,
    _,
    g,
    s,
    u,
    l
  ], A = t.apply(void 0, v);
  return pv(e) && vv(A, v), A.placeholder = n, _v(A, e, r);
}
var _d = Rv;
function Ev(e) {
  var r = e;
  return r.placeholder;
}
var yd = Ev, Cv = 9007199254740991, Tv = /^(?:0|[1-9]\d*)$/;
function Sv(e, r) {
  var t = typeof e;
  return r = r == null ? Cv : r, !!r && (t == "number" || t != "symbol" && Tv.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Yr = Sv, Iv = Hr, wv = Yr, qv = Math.min;
function Ov(e, r) {
  for (var t = e.length, n = qv(r.length, t), a = Iv(e); n--; ) {
    var i = r[n];
    e[n] = wv(i, t) ? a[i] : void 0;
  }
  return e;
}
var xv = Ov, yu = "__lodash_placeholder__";
function Pv(e, r) {
  for (var t = -1, n = e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    (o === r || o === yu) && (e[t] = yu, i[a++] = t);
  }
  return i;
}
var xo = Pv, kv = od, Lv = sd, Dv = Ip, mu = zr, Mv = _d, Bv = yd, Fv = xv, $v = xo, jv = _e(), Wv = 1, Nv = 2, Kv = 8, Gv = 16, Uv = 128, zv = 512;
function md(e, r, t, n, a, i, o, s, u, l) {
  var f = r & Uv, h = r & Wv, g = r & Nv, p = r & (Kv | Gv), _ = r & zv, v = g ? void 0 : mu(e);
  function A() {
    for (var b = arguments.length, y = Array(b), E = b; E--; )
      y[E] = arguments[E];
    if (p)
      var C = Bv(A), P = Dv(y, C);
    if (n && (y = kv(y, n, a, p)), i && (y = Lv(y, i, o, p)), b -= P, p && b < l) {
      var q = $v(y, C);
      return Mv(
        e,
        r,
        md,
        A.placeholder,
        t,
        y,
        q,
        s,
        u,
        l - b
      );
    }
    var w = h ? t : this, k = g ? w[e] : e;
    return b = y.length, s ? y = Fv(y, s) : _ && b > 1 && y.reverse(), f && u < b && (y.length = u), this && this !== jv && this instanceof A && (k = v || mu(k)), k.apply(w, y);
  }
  return A;
}
var bd = md, Hv = Co(), Yv = zr, Vv = bd, Jv = _d, Xv = yd, Zv = xo, Qv = _e();
function e_(e, r, t) {
  var n = Yv(e);
  function a() {
    for (var i = arguments.length, o = Array(i), s = i, u = Xv(a); s--; )
      o[s] = arguments[s];
    var l = i < 3 && o[0] !== u && o[i - 1] !== u ? [] : Zv(o, u);
    if (i -= l.length, i < t)
      return Jv(
        e,
        r,
        Vv,
        a.placeholder,
        void 0,
        o,
        l,
        void 0,
        void 0,
        t - i
      );
    var f = this && this !== Qv && this instanceof a ? n : e;
    return Hv(f, this, o);
  }
  return a;
}
var r_ = e_, t_ = Co(), n_ = zr, a_ = _e(), i_ = 1;
function o_(e, r, t, n) {
  var a = r & i_, i = n_(e);
  function o() {
    for (var s = -1, u = arguments.length, l = -1, f = n.length, h = Array(f + u), g = this && this !== a_ && this instanceof o ? i : e; ++l < f; )
      h[l] = n[l];
    for (; u--; )
      h[l++] = arguments[++s];
    return t_(g, a ? t : this, h);
  }
  return o;
}
var s_ = o_, u_ = od, l_ = sd, bu = xo, Au = "__lodash_placeholder__", cn = 1, c_ = 2, f_ = 4, Ru = 8, vr = 128, Eu = 256, d_ = Math.min;
function g_(e, r) {
  var t = e[1], n = r[1], a = t | n, i = a < (cn | c_ | vr), o = n == vr && t == Ru || n == vr && t == Eu && e[7].length <= r[8] || n == (vr | Eu) && r[7].length <= r[8] && t == Ru;
  if (!(i || o))
    return e;
  n & cn && (e[2] = r[2], a |= t & cn ? 0 : f_);
  var s = r[3];
  if (s) {
    var u = e[3];
    e[3] = u ? u_(u, s, r[4]) : s, e[4] = u ? bu(e[3], Au) : r[4];
  }
  return s = r[5], s && (u = e[5], e[5] = u ? l_(u, s, r[6]) : s, e[6] = u ? bu(e[5], Au) : r[6]), s = r[7], s && (e[7] = s), n & vr && (e[8] = e[8] == null ? r[8] : d_(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = a, e;
}
var h_ = g_, fn, Cu;
function p_() {
  if (Cu)
    return fn;
  Cu = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return fn = r, fn;
}
var dn, Tu;
function Ad() {
  if (Tu)
    return dn;
  Tu = 1;
  var e = p_(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return dn = t, dn;
}
var v_ = Xe(), __ = Ee(), y_ = "[object Symbol]";
function m_(e) {
  return typeof e == "symbol" || __(e) && v_(e) == y_;
}
var Cr = m_, b_ = Ad(), Su = Le, A_ = Cr, Iu = 0 / 0, R_ = /^[-+]0x[0-9a-f]+$/i, E_ = /^0b[01]+$/i, C_ = /^0o[0-7]+$/i, T_ = parseInt;
function S_(e) {
  if (typeof e == "number")
    return e;
  if (A_(e))
    return Iu;
  if (Su(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Su(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = b_(e);
  var t = E_.test(e);
  return t || C_.test(e) ? T_(e.slice(2), t ? 2 : 8) : R_.test(e) ? Iu : +e;
}
var I_ = S_, w_ = I_, wu = 1 / 0, q_ = 17976931348623157e292;
function O_(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = w_(e), e === wu || e === -wu) {
    var r = e < 0 ? -1 : 1;
    return r * q_;
  }
  return e === e ? e : 0;
}
var x_ = O_, P_ = x_;
function k_(e) {
  var r = P_(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var Rd = k_, L_ = id, D_ = Ap, M_ = r_, B_ = bd, F_ = s_, $_ = Io(), j_ = h_, W_ = dd, N_ = vd, qu = Rd, K_ = "Expected a function", Ou = 1, G_ = 2, gn = 8, hn = 16, pn = 32, xu = 64, Pu = Math.max;
function U_(e, r, t, n, a, i, o, s) {
  var u = r & G_;
  if (!u && typeof e != "function")
    throw new TypeError(K_);
  var l = n ? n.length : 0;
  if (l || (r &= ~(pn | xu), n = a = void 0), o = o === void 0 ? o : Pu(qu(o), 0), s = s === void 0 ? s : qu(s), l -= a ? a.length : 0, r & xu) {
    var f = n, h = a;
    n = a = void 0;
  }
  var g = u ? void 0 : $_(e), p = [
    e,
    r,
    t,
    n,
    a,
    f,
    h,
    i,
    o,
    s
  ];
  if (g && j_(p, g), e = p[0], r = p[1], t = p[2], n = p[3], a = p[4], s = p[9] = p[9] === void 0 ? u ? 0 : e.length : Pu(p[9] - l, 0), !s && r & (gn | hn) && (r &= ~(gn | hn)), !r || r == Ou)
    var _ = D_(e, r, t);
  else
    r == gn || r == hn ? _ = M_(e, r, s) : (r == pn || r == (Ou | pn)) && !a.length ? _ = F_(e, r, t, n) : _ = B_.apply(void 0, p);
  var v = g ? L_ : W_;
  return N_(v(_, p), e, r);
}
var Po = U_, z_ = Po, H_ = 128;
function Y_(e, r, t) {
  return r = t ? void 0 : r, r = e && r == null ? e.length : r, z_(e, H_, void 0, void 0, void 0, void 0, r);
}
var V_ = Y_, vn, ku;
function Ed() {
  if (ku)
    return vn;
  ku = 1;
  var e = gd();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return vn = r, vn;
}
var _n, Lu;
function ko() {
  if (Lu)
    return _n;
  Lu = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return _n = e, _n;
}
var yn, Du;
function Lo() {
  if (Du)
    return yn;
  Du = 1;
  var e = Ed(), r = ko(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, o, s) {
    var u = i[o];
    (!(n.call(i, o) && r(u, s)) || s === void 0 && !(o in i)) && e(i, o, s);
  }
  return yn = a, yn;
}
var mn, Mu;
function Tr() {
  if (Mu)
    return mn;
  Mu = 1;
  var e = Lo(), r = Ed();
  function t(n, a, i, o) {
    var s = !i;
    i || (i = {});
    for (var u = -1, l = a.length; ++u < l; ) {
      var f = a[u], h = o ? o(i[f], n[f], f, i, n) : void 0;
      h === void 0 && (h = n[f]), s ? r(i, f, h) : e(i, f, h);
    }
    return i;
  }
  return mn = t, mn;
}
function J_(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var X_ = J_, bn, Bu;
function Z_() {
  if (Bu)
    return bn;
  Bu = 1;
  var e = Xe(), r = Ee(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return bn = n, bn;
}
var An, Fu;
function Vr() {
  if (Fu)
    return An;
  Fu = 1;
  var e = Z_(), r = Ee(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(function() {
    return arguments;
  }()) ? e : function(o) {
    return r(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return An = i, An;
}
var Lr = { exports: {} }, Rn, $u;
function Q_() {
  if ($u)
    return Rn;
  $u = 1;
  function e() {
    return !1;
  }
  return Rn = e, Rn;
}
var ju;
function Jr() {
  return ju || (ju = 1, function(e, r) {
    var t = _e(), n = Q_(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? t.Buffer : void 0, u = s ? s.isBuffer : void 0, l = u || n;
    e.exports = l;
  }(Lr, Lr.exports)), Lr.exports;
}
var En, Wu;
function Do() {
  if (Wu)
    return En;
  Wu = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return En = r, En;
}
var Cn, Nu;
function ey() {
  if (Nu)
    return Cn;
  Nu = 1;
  var e = Xe(), r = Do(), t = Ee(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", l = "[object Map]", f = "[object Number]", h = "[object Object]", g = "[object RegExp]", p = "[object Set]", _ = "[object String]", v = "[object WeakMap]", A = "[object ArrayBuffer]", b = "[object DataView]", y = "[object Float32Array]", E = "[object Float64Array]", C = "[object Int8Array]", P = "[object Int16Array]", q = "[object Int32Array]", w = "[object Uint8Array]", k = "[object Uint8ClampedArray]", G = "[object Uint16Array]", te = "[object Uint32Array]", B = {};
  B[y] = B[E] = B[C] = B[P] = B[q] = B[w] = B[k] = B[G] = B[te] = !0, B[n] = B[a] = B[A] = B[i] = B[b] = B[o] = B[s] = B[u] = B[l] = B[f] = B[h] = B[g] = B[p] = B[_] = B[v] = !1;
  function Q(ae) {
    return t(ae) && r(ae.length) && !!B[e(ae)];
  }
  return Cn = Q, Cn;
}
var Tn, Ku;
function Mo() {
  if (Ku)
    return Tn;
  Ku = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Tn = e, Tn;
}
var Dr = { exports: {} }, Gu;
function Bo() {
  return Gu || (Gu = 1, function(e, r) {
    var t = rd(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && t.process, s = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Dr, Dr.exports)), Dr.exports;
}
var Sn, Uu;
function Fo() {
  if (Uu)
    return Sn;
  Uu = 1;
  var e = ey(), r = Mo(), t = Bo(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return Sn = a, Sn;
}
var ry = X_, ty = Vr(), ny = ce(), ay = Jr(), iy = Yr, oy = Fo(), sy = Object.prototype, uy = sy.hasOwnProperty;
function ly(e, r) {
  var t = ny(e), n = !t && ty(e), a = !t && !n && ay(e), i = !t && !n && !a && oy(e), o = t || n || a || i, s = o ? ry(e.length, String) : [], u = s.length;
  for (var l in e)
    (r || uy.call(e, l)) && !(o && (l == "length" || a && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || iy(l, u))) && s.push(l);
  return s;
}
var Cd = ly, In, zu;
function Xr() {
  if (zu)
    return In;
  zu = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return In = r, In;
}
var wn, Hu;
function Td() {
  if (Hu)
    return wn;
  Hu = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return wn = e, wn;
}
var qn, Yu;
function cy() {
  if (Yu)
    return qn;
  Yu = 1;
  var e = Td(), r = e(Object.keys, Object);
  return qn = r, qn;
}
var On, Vu;
function $o() {
  if (Vu)
    return On;
  Vu = 1;
  var e = Xr(), r = cy(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return On = a, On;
}
var xn, Ju;
function Zr() {
  if (Ju)
    return xn;
  Ju = 1;
  var e = Eo, r = Do();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return xn = t, xn;
}
var fy = Cd, dy = $o(), gy = Zr();
function hy(e) {
  return gy(e) ? fy(e) : dy(e);
}
var Sr = hy, py = Tr(), vy = Sr;
function _y(e, r) {
  return e && py(r, vy(r), e);
}
var Sd = _y, Pn, Xu;
function yy() {
  if (Xu)
    return Pn;
  Xu = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Pn = e, Pn;
}
var kn, Zu;
function Qr() {
  if (Zu)
    return kn;
  Zu = 1;
  var e = ko();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return kn = r, kn;
}
var Ln, Qu;
function my() {
  if (Qu)
    return Ln;
  Qu = 1;
  var e = Qr(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : t.call(i, o, 1), --this.size, !0;
  }
  return Ln = n, Ln;
}
var Dn, el;
function by() {
  if (el)
    return Dn;
  el = 1;
  var e = Qr();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return Dn = r, Dn;
}
var Mn, rl;
function Ay() {
  if (rl)
    return Mn;
  rl = 1;
  var e = Qr();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return Mn = r, Mn;
}
var Bn, tl;
function Ry() {
  if (tl)
    return Bn;
  tl = 1;
  var e = Qr();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return Bn = r, Bn;
}
var Fn, nl;
function et() {
  if (nl)
    return Fn;
  nl = 1;
  var e = yy(), r = my(), t = by(), n = Ay(), a = Ry();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Fn = i, Fn;
}
var $n, al;
function Ey() {
  if (al)
    return $n;
  al = 1;
  var e = et();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return $n = r, $n;
}
var jn, il;
function Cy() {
  if (il)
    return jn;
  il = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return jn = e, jn;
}
var Wn, ol;
function Ty() {
  if (ol)
    return Wn;
  ol = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Wn = e, Wn;
}
var Nn, sl;
function Sy() {
  if (sl)
    return Nn;
  sl = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Nn = e, Nn;
}
var Kn, ul;
function jo() {
  if (ul)
    return Kn;
  ul = 1;
  var e = Ze(), r = _e(), t = e(r, "Map");
  return Kn = t, Kn;
}
var Gn, ll;
function rt() {
  if (ll)
    return Gn;
  ll = 1;
  var e = Ze(), r = e(Object, "create");
  return Gn = r, Gn;
}
var Un, cl;
function Iy() {
  if (cl)
    return Un;
  cl = 1;
  var e = rt();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Un = r, Un;
}
var zn, fl;
function wy() {
  if (fl)
    return zn;
  fl = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return zn = e, zn;
}
var Hn, dl;
function qy() {
  if (dl)
    return Hn;
  dl = 1;
  var e = rt(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === r ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Hn = a, Hn;
}
var Yn, gl;
function Oy() {
  if (gl)
    return Yn;
  gl = 1;
  var e = rt(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Yn = n, Yn;
}
var Vn, hl;
function xy() {
  if (hl)
    return Vn;
  hl = 1;
  var e = rt(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Vn = t, Vn;
}
var Jn, pl;
function Py() {
  if (pl)
    return Jn;
  pl = 1;
  var e = Iy(), r = wy(), t = qy(), n = Oy(), a = xy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Jn = i, Jn;
}
var Xn, vl;
function ky() {
  if (vl)
    return Xn;
  vl = 1;
  var e = Py(), r = et(), t = jo();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Xn = n, Xn;
}
var Zn, _l;
function Ly() {
  if (_l)
    return Zn;
  _l = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Zn = e, Zn;
}
var Qn, yl;
function tt() {
  if (yl)
    return Qn;
  yl = 1;
  var e = Ly();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Qn = r, Qn;
}
var ea, ml;
function Dy() {
  if (ml)
    return ea;
  ml = 1;
  var e = tt();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return ea = r, ea;
}
var ra, bl;
function My() {
  if (bl)
    return ra;
  bl = 1;
  var e = tt();
  function r(t) {
    return e(this, t).get(t);
  }
  return ra = r, ra;
}
var ta, Al;
function By() {
  if (Al)
    return ta;
  Al = 1;
  var e = tt();
  function r(t) {
    return e(this, t).has(t);
  }
  return ta = r, ta;
}
var na, Rl;
function Fy() {
  if (Rl)
    return na;
  Rl = 1;
  var e = tt();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return na = r, na;
}
var aa, El;
function Wo() {
  if (El)
    return aa;
  El = 1;
  var e = ky(), r = Dy(), t = My(), n = By(), a = Fy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, aa = i, aa;
}
var ia, Cl;
function $y() {
  if (Cl)
    return ia;
  Cl = 1;
  var e = et(), r = jo(), t = Wo(), n = 200;
  function a(i, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var u = s.__data__;
      if (!r || u.length < n - 1)
        return u.push([i, o]), this.size = ++s.size, this;
      s = this.__data__ = new t(u);
    }
    return s.set(i, o), this.size = s.size, this;
  }
  return ia = a, ia;
}
var oa, Tl;
function No() {
  if (Tl)
    return oa;
  Tl = 1;
  var e = et(), r = Ey(), t = Cy(), n = Ty(), a = Sy(), i = $y();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = r, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, oa = o, oa;
}
var sa, Sl;
function jy() {
  if (Sl)
    return sa;
  Sl = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return sa = e, sa;
}
var ua, Il;
function Wy() {
  if (Il)
    return ua;
  Il = 1;
  var e = Le, r = Xr(), t = jy(), n = Object.prototype, a = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = r(o), u = [];
    for (var l in o)
      l == "constructor" && (s || !a.call(o, l)) || u.push(l);
    return u;
  }
  return ua = i, ua;
}
var la, wl;
function Ko() {
  if (wl)
    return la;
  wl = 1;
  var e = Cd, r = Wy(), t = Zr();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return la = n, la;
}
var ca, ql;
function Ny() {
  if (ql)
    return ca;
  ql = 1;
  var e = Tr(), r = Ko();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return ca = t, ca;
}
var Mr = { exports: {} }, Ol;
function Ky() {
  return Ol || (Ol = 1, function(e, r) {
    var t = _e(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? t.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
    function u(l, f) {
      if (f)
        return l.slice();
      var h = l.length, g = s ? s(h) : new l.constructor(h);
      return l.copy(g), g;
    }
    e.exports = u;
  }(Mr, Mr.exports)), Mr.exports;
}
var fa, xl;
function Gy() {
  if (xl)
    return fa;
  xl = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, o = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (o[i++] = s);
    }
    return o;
  }
  return fa = e, fa;
}
var da, Pl;
function Id() {
  if (Pl)
    return da;
  Pl = 1;
  function e() {
    return [];
  }
  return da = e, da;
}
var ga, kl;
function Go() {
  if (kl)
    return ga;
  kl = 1;
  var e = Gy(), r = Id(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : r;
  return ga = i, ga;
}
var ha, Ll;
function Uy() {
  if (Ll)
    return ha;
  Ll = 1;
  var e = Tr(), r = Go();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ha = t, ha;
}
var pa, Dl;
function Uo() {
  if (Dl)
    return pa;
  Dl = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return pa = e, pa;
}
var zy = Td(), Hy = zy(Object.getPrototypeOf, Object), zo = Hy, va, Ml;
function wd() {
  if (Ml)
    return va;
  Ml = 1;
  var e = Uo(), r = zo, t = Go(), n = Id(), a = Object.getOwnPropertySymbols, i = a ? function(o) {
    for (var s = []; o; )
      e(s, t(o)), o = r(o);
    return s;
  } : n;
  return va = i, va;
}
var _a, Bl;
function Yy() {
  if (Bl)
    return _a;
  Bl = 1;
  var e = Tr(), r = wd();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return _a = t, _a;
}
var ya, Fl;
function qd() {
  if (Fl)
    return ya;
  Fl = 1;
  var e = Uo(), r = ce();
  function t(n, a, i) {
    var o = a(n);
    return r(n) ? o : e(o, i(n));
  }
  return ya = t, ya;
}
var ma, $l;
function Od() {
  if ($l)
    return ma;
  $l = 1;
  var e = qd(), r = Go(), t = Sr;
  function n(a) {
    return e(a, t, r);
  }
  return ma = n, ma;
}
var ba, jl;
function Ho() {
  if (jl)
    return ba;
  jl = 1;
  var e = qd(), r = wd(), t = Ko();
  function n(a) {
    return e(a, t, r);
  }
  return ba = n, ba;
}
var Aa, Wl;
function Vy() {
  if (Wl)
    return Aa;
  Wl = 1;
  var e = Ze(), r = _e(), t = e(r, "DataView");
  return Aa = t, Aa;
}
var Ra, Nl;
function Jy() {
  if (Nl)
    return Ra;
  Nl = 1;
  var e = Ze(), r = _e(), t = e(r, "Promise");
  return Ra = t, Ra;
}
var Ea, Kl;
function xd() {
  if (Kl)
    return Ea;
  Kl = 1;
  var e = Ze(), r = _e(), t = e(r, "Set");
  return Ea = t, Ea;
}
var Ca, Gl;
function gr() {
  if (Gl)
    return Ca;
  Gl = 1;
  var e = Vy(), r = jo(), t = Jy(), n = xd(), a = nd(), i = Xe(), o = td(), s = "[object Map]", u = "[object Object]", l = "[object Promise]", f = "[object Set]", h = "[object WeakMap]", g = "[object DataView]", p = o(e), _ = o(r), v = o(t), A = o(n), b = o(a), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != g || r && y(new r()) != s || t && y(t.resolve()) != l || n && y(new n()) != f || a && y(new a()) != h) && (y = function(E) {
    var C = i(E), P = C == u ? E.constructor : void 0, q = P ? o(P) : "";
    if (q)
      switch (q) {
        case p:
          return g;
        case _:
          return s;
        case v:
          return l;
        case A:
          return f;
        case b:
          return h;
      }
    return C;
  }), Ca = y, Ca;
}
var Ta, Ul;
function Xy() {
  if (Ul)
    return Ta;
  Ul = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return Ta = t, Ta;
}
var Sa, zl;
function Pd() {
  if (zl)
    return Sa;
  zl = 1;
  var e = _e(), r = e.Uint8Array;
  return Sa = r, Sa;
}
var Ia, Hl;
function Yo() {
  if (Hl)
    return Ia;
  Hl = 1;
  var e = Pd();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return Ia = r, Ia;
}
var wa, Yl;
function Zy() {
  if (Yl)
    return wa;
  Yl = 1;
  var e = Yo();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return wa = r, wa;
}
var qa, Vl;
function Qy() {
  if (Vl)
    return qa;
  Vl = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return qa = r, qa;
}
var Oa, Jl;
function em() {
  if (Jl)
    return Oa;
  Jl = 1;
  var e = dr(), r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return Oa = n, Oa;
}
var xa, Xl;
function rm() {
  if (Xl)
    return xa;
  Xl = 1;
  var e = Yo();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return xa = r, xa;
}
var Pa, Zl;
function tm() {
  if (Zl)
    return Pa;
  Zl = 1;
  var e = Yo(), r = Zy(), t = Qy(), n = em(), a = rm(), i = "[object Boolean]", o = "[object Date]", s = "[object Map]", u = "[object Number]", l = "[object RegExp]", f = "[object Set]", h = "[object String]", g = "[object Symbol]", p = "[object ArrayBuffer]", _ = "[object DataView]", v = "[object Float32Array]", A = "[object Float64Array]", b = "[object Int8Array]", y = "[object Int16Array]", E = "[object Int32Array]", C = "[object Uint8Array]", P = "[object Uint8ClampedArray]", q = "[object Uint16Array]", w = "[object Uint32Array]";
  function k(G, te, B) {
    var Q = G.constructor;
    switch (te) {
      case p:
        return e(G);
      case i:
      case o:
        return new Q(+G);
      case _:
        return r(G, B);
      case v:
      case A:
      case b:
      case y:
      case E:
      case C:
      case P:
      case q:
      case w:
        return a(G, B);
      case s:
        return new Q();
      case u:
      case h:
        return new Q(G);
      case l:
        return t(G);
      case f:
        return new Q();
      case g:
        return n(G);
    }
  }
  return Pa = k, Pa;
}
var ka, Ql;
function nm() {
  if (Ql)
    return ka;
  Ql = 1;
  var e = Ur(), r = zo, t = Xr();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return ka = n, ka;
}
var La, ec;
function am() {
  if (ec)
    return La;
  ec = 1;
  var e = gr(), r = Ee(), t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return La = n, La;
}
var Da, rc;
function im() {
  if (rc)
    return Da;
  rc = 1;
  var e = am(), r = Mo(), t = Bo(), n = t && t.isMap, a = n ? r(n) : e;
  return Da = a, Da;
}
var Ma, tc;
function om() {
  if (tc)
    return Ma;
  tc = 1;
  var e = gr(), r = Ee(), t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ma = n, Ma;
}
var Ba, nc;
function sm() {
  if (nc)
    return Ba;
  nc = 1;
  var e = om(), r = Mo(), t = Bo(), n = t && t.isSet, a = n ? r(n) : e;
  return Ba = a, Ba;
}
var Fa, ac;
function Vo() {
  if (ac)
    return Fa;
  ac = 1;
  var e = No(), r = qo, t = Lo(), n = Sd, a = Ny(), i = Ky(), o = Hr, s = Uy(), u = Yy(), l = Od(), f = Ho(), h = gr(), g = Xy(), p = tm(), _ = nm(), v = ce(), A = Jr(), b = im(), y = Le, E = sm(), C = Sr, P = Ko(), q = 1, w = 2, k = 4, G = "[object Arguments]", te = "[object Array]", B = "[object Boolean]", Q = "[object Date]", ae = "[object Error]", ee = "[object Function]", fe = "[object GeneratorFunction]", Me = "[object Map]", tr = "[object Number]", Be = "[object Object]", nr = "[object RegExp]", ar = "[object Set]", Ue = "[object String]", ze = "[object Symbol]", ie = "[object WeakMap]", qe = "[object ArrayBuffer]", O = "[object DataView]", T = "[object Float32Array]", I = "[object Float64Array]", L = "[object Int8Array]", F = "[object Int16Array]", X = "[object Int32Array]", pe = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", de = "[object Uint16Array]", ir = "[object Uint32Array]", W = {};
  W[G] = W[te] = W[qe] = W[O] = W[B] = W[Q] = W[T] = W[I] = W[L] = W[F] = W[X] = W[Me] = W[tr] = W[Be] = W[nr] = W[ar] = W[Ue] = W[ze] = W[pe] = W[oe] = W[de] = W[ir] = !0, W[ae] = W[ee] = W[ie] = !1;
  function He(K, be, Fe, Ye, $e, Se) {
    var se, Ve = be & q, je = be & w, vt = be & k;
    if (Fe && (se = $e ? Fe(K, Ye, $e, Se) : Fe(K)), se !== void 0)
      return se;
    if (!y(K))
      return K;
    var wr = v(K);
    if (wr) {
      if (se = g(K), !Ve)
        return o(K, se);
    } else {
      var We = h(K), qr = We == ee || We == fe;
      if (A(K))
        return i(K, Ve);
      if (We == Be || We == G || qr && !$e) {
        if (se = je || qr ? {} : _(K), !Ve)
          return je ? u(K, a(se, K)) : s(K, n(se, K));
      } else {
        if (!W[We])
          return $e ? K : {};
        se = p(K, We, Ve);
      }
    }
    Se || (Se = new e());
    var Or = Se.get(K);
    if (Or)
      return Or;
    Se.set(K, se), E(K) ? K.forEach(function(ye) {
      se.add(He(ye, be, Fe, ye, K, Se));
    }) : b(K) && K.forEach(function(ye, Ie) {
      se.set(Ie, He(ye, be, Fe, Ie, K, Se));
    });
    var _t = vt ? je ? f : l : je ? P : C, xr = wr ? void 0 : _t(K);
    return r(xr || K, function(ye, Ie) {
      xr && (Ie = ye, ye = K[Ie]), t(se, Ie, He(ye, be, Fe, Ie, K, Se));
    }), se;
  }
  return Fa = He, Fa;
}
var um = Vo(), lm = 4;
function cm(e) {
  return um(e, lm);
}
var fm = cm, dm = Po, gm = 8;
function Jo(e, r, t) {
  r = t ? void 0 : r;
  var n = dm(e, gm, void 0, void 0, void 0, void 0, void 0, r);
  return n.placeholder = Jo.placeholder, n;
}
Jo.placeholder = {};
var hm = Jo, pm = Xe(), vm = zo, _m = Ee(), ym = "[object Object]", mm = Function.prototype, bm = Object.prototype, kd = mm.toString, Am = bm.hasOwnProperty, Rm = kd.call(Object);
function Em(e) {
  if (!_m(e) || pm(e) != ym)
    return !1;
  var r = vm(e);
  if (r === null)
    return !0;
  var t = Am.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && kd.call(t) == Rm;
}
var Ld = Em, Cm = Xe(), Tm = Ee(), Sm = Ld, Im = "[object DOMException]", wm = "[object Error]";
function qm(e) {
  if (!Tm(e))
    return !1;
  var r = Cm(e);
  return r == wm || r == Im || typeof e.message == "string" && typeof e.name == "string" && !Sm(e);
}
var Om = qm, xm = gr(), Pm = Ee(), km = "[object WeakMap]";
function Lm(e) {
  return Pm(e) && xm(e) == km;
}
var Dm = Lm, $a, ic;
function Mm() {
  if (ic)
    return $a;
  ic = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return $a = r, $a;
}
var ja, oc;
function Bm() {
  if (oc)
    return ja;
  oc = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return ja = e, ja;
}
var Wa, sc;
function Dd() {
  if (sc)
    return Wa;
  sc = 1;
  var e = Wo(), r = Mm(), t = Bm();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Wa = n, Wa;
}
var Na, uc;
function Fm() {
  if (uc)
    return Na;
  uc = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return Na = e, Na;
}
var Ka, lc;
function Md() {
  if (lc)
    return Ka;
  lc = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Ka = e, Ka;
}
var Ga, cc;
function Bd() {
  if (cc)
    return Ga;
  cc = 1;
  var e = Dd(), r = Fm(), t = Md(), n = 1, a = 2;
  function i(o, s, u, l, f, h) {
    var g = u & n, p = o.length, _ = s.length;
    if (p != _ && !(g && _ > p))
      return !1;
    var v = h.get(o), A = h.get(s);
    if (v && A)
      return v == s && A == o;
    var b = -1, y = !0, E = u & a ? new e() : void 0;
    for (h.set(o, s), h.set(s, o); ++b < p; ) {
      var C = o[b], P = s[b];
      if (l)
        var q = g ? l(P, C, b, s, o, h) : l(C, P, b, o, s, h);
      if (q !== void 0) {
        if (q)
          continue;
        y = !1;
        break;
      }
      if (E) {
        if (!r(s, function(w, k) {
          if (!t(E, k) && (C === w || f(C, w, u, l, h)))
            return E.push(k);
        })) {
          y = !1;
          break;
        }
      } else if (!(C === P || f(C, P, u, l, h))) {
        y = !1;
        break;
      }
    }
    return h.delete(o), h.delete(s), y;
  }
  return Ga = i, Ga;
}
var Ua, fc;
function $m() {
  if (fc)
    return Ua;
  fc = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Ua = e, Ua;
}
var za, dc;
function Xo() {
  if (dc)
    return za;
  dc = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return za = e, za;
}
var Ha, gc;
function jm() {
  if (gc)
    return Ha;
  gc = 1;
  var e = dr(), r = Pd(), t = ko(), n = Bd(), a = $m(), i = Xo(), o = 1, s = 2, u = "[object Boolean]", l = "[object Date]", f = "[object Error]", h = "[object Map]", g = "[object Number]", p = "[object RegExp]", _ = "[object Set]", v = "[object String]", A = "[object Symbol]", b = "[object ArrayBuffer]", y = "[object DataView]", E = e ? e.prototype : void 0, C = E ? E.valueOf : void 0;
  function P(q, w, k, G, te, B, Q) {
    switch (k) {
      case y:
        if (q.byteLength != w.byteLength || q.byteOffset != w.byteOffset)
          return !1;
        q = q.buffer, w = w.buffer;
      case b:
        return !(q.byteLength != w.byteLength || !B(new r(q), new r(w)));
      case u:
      case l:
      case g:
        return t(+q, +w);
      case f:
        return q.name == w.name && q.message == w.message;
      case p:
      case v:
        return q == w + "";
      case h:
        var ae = a;
      case _:
        var ee = G & o;
        if (ae || (ae = i), q.size != w.size && !ee)
          return !1;
        var fe = Q.get(q);
        if (fe)
          return fe == w;
        G |= s, Q.set(q, w);
        var Me = n(ae(q), ae(w), G, te, B, Q);
        return Q.delete(q), Me;
      case A:
        if (C)
          return C.call(q) == C.call(w);
    }
    return !1;
  }
  return Ha = P, Ha;
}
var Ya, hc;
function Wm() {
  if (hc)
    return Ya;
  hc = 1;
  var e = Od(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, o, s, u, l, f) {
    var h = s & r, g = e(i), p = g.length, _ = e(o), v = _.length;
    if (p != v && !h)
      return !1;
    for (var A = p; A--; ) {
      var b = g[A];
      if (!(h ? b in o : n.call(o, b)))
        return !1;
    }
    var y = f.get(i), E = f.get(o);
    if (y && E)
      return y == o && E == i;
    var C = !0;
    f.set(i, o), f.set(o, i);
    for (var P = h; ++A < p; ) {
      b = g[A];
      var q = i[b], w = o[b];
      if (u)
        var k = h ? u(w, q, b, o, i, f) : u(q, w, b, i, o, f);
      if (!(k === void 0 ? q === w || l(q, w, s, u, f) : k)) {
        C = !1;
        break;
      }
      P || (P = b == "constructor");
    }
    if (C && !P) {
      var G = i.constructor, te = o.constructor;
      G != te && "constructor" in i && "constructor" in o && !(typeof G == "function" && G instanceof G && typeof te == "function" && te instanceof te) && (C = !1);
    }
    return f.delete(i), f.delete(o), C;
  }
  return Ya = a, Ya;
}
var Va, pc;
function Nm() {
  if (pc)
    return Va;
  pc = 1;
  var e = No(), r = Bd(), t = jm(), n = Wm(), a = gr(), i = ce(), o = Jr(), s = Fo(), u = 1, l = "[object Arguments]", f = "[object Array]", h = "[object Object]", g = Object.prototype, p = g.hasOwnProperty;
  function _(v, A, b, y, E, C) {
    var P = i(v), q = i(A), w = P ? f : a(v), k = q ? f : a(A);
    w = w == l ? h : w, k = k == l ? h : k;
    var G = w == h, te = k == h, B = w == k;
    if (B && o(v)) {
      if (!o(A))
        return !1;
      P = !0, G = !1;
    }
    if (B && !G)
      return C || (C = new e()), P || s(v) ? r(v, A, b, y, E, C) : t(v, A, w, b, y, E, C);
    if (!(b & u)) {
      var Q = G && p.call(v, "__wrapped__"), ae = te && p.call(A, "__wrapped__");
      if (Q || ae) {
        var ee = Q ? v.value() : v, fe = ae ? A.value() : A;
        return C || (C = new e()), E(ee, fe, b, y, C);
      }
    }
    return B ? (C || (C = new e()), n(v, A, b, y, E, C)) : !1;
  }
  return Va = _, Va;
}
var Ja, vc;
function Zo() {
  if (vc)
    return Ja;
  vc = 1;
  var e = Nm(), r = Ee();
  function t(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, o, t, s);
  }
  return Ja = t, Ja;
}
var Xa, _c;
function Km() {
  if (_c)
    return Xa;
  _c = 1;
  var e = No(), r = Zo(), t = 1, n = 2;
  function a(i, o, s, u) {
    var l = s.length, f = l, h = !u;
    if (i == null)
      return !f;
    for (i = Object(i); l--; ) {
      var g = s[l];
      if (h && g[2] ? g[1] !== i[g[0]] : !(g[0] in i))
        return !1;
    }
    for (; ++l < f; ) {
      g = s[l];
      var p = g[0], _ = i[p], v = g[1];
      if (h && g[2]) {
        if (_ === void 0 && !(p in i))
          return !1;
      } else {
        var A = new e();
        if (u)
          var b = u(_, v, p, i, o, A);
        if (!(b === void 0 ? r(v, _, t | n, u, A) : b))
          return !1;
      }
    }
    return !0;
  }
  return Xa = a, Xa;
}
var Za, yc;
function Fd() {
  if (yc)
    return Za;
  yc = 1;
  var e = Le;
  function r(t) {
    return t === t && !e(t);
  }
  return Za = r, Za;
}
var Qa, mc;
function Gm() {
  if (mc)
    return Qa;
  mc = 1;
  var e = Fd(), r = Sr;
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Qa = t, Qa;
}
var ei, bc;
function $d() {
  if (bc)
    return ei;
  bc = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return ei = e, ei;
}
var ri, Ac;
function Um() {
  if (Ac)
    return ri;
  Ac = 1;
  var e = Km(), r = Gm(), t = $d();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return ri = n, ri;
}
var ti, Rc;
function Qo() {
  if (Rc)
    return ti;
  Rc = 1;
  var e = ce(), r = Cr, t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || o != null && i in Object(o);
  }
  return ti = a, ti;
}
var ni, Ec;
function jd() {
  if (Ec)
    return ni;
  Ec = 1;
  var e = Wo(), r = "Expected a function";
  function t(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(r);
    var i = function() {
      var o = arguments, s = a ? a.apply(this, o) : o[0], u = i.cache;
      if (u.has(s))
        return u.get(s);
      var l = n.apply(this, o);
      return i.cache = u.set(s, l) || u, l;
    };
    return i.cache = new (t.Cache || e)(), i;
  }
  return t.Cache = e, ni = t, ni;
}
var zm = jd(), Hm = 500;
function Ym(e) {
  var r = zm(e, function(n) {
    return t.size === Hm && t.clear(), n;
  }), t = r.cache;
  return r;
}
var Vm = Ym, Jm = Vm, Xm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zm = /\\(\\)?/g, Qm = Jm(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Xm, function(t, n, a, i) {
    r.push(a ? i.replace(Zm, "$1") : n || t);
  }), r;
}), Wd = Qm, ai, Cc;
function nt() {
  if (Cc)
    return ai;
  Cc = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return ai = e, ai;
}
var ii, Tc;
function Nd() {
  if (Tc)
    return ii;
  Tc = 1;
  var e = dr(), r = nt(), t = ce(), n = Cr, a = 1 / 0, i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
  function s(u) {
    if (typeof u == "string")
      return u;
    if (t(u))
      return r(u, s) + "";
    if (n(u))
      return o ? o.call(u) : "";
    var l = u + "";
    return l == "0" && 1 / u == -a ? "-0" : l;
  }
  return ii = s, ii;
}
var oi, Sc;
function es() {
  if (Sc)
    return oi;
  Sc = 1;
  var e = Nd();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return oi = r, oi;
}
var si, Ic;
function hr() {
  if (Ic)
    return si;
  Ic = 1;
  var e = ce(), r = Qo(), t = Wd, n = es();
  function a(i, o) {
    return e(i) ? i : r(i, o) ? [i] : t(n(i));
  }
  return si = a, si;
}
var eb = Cr, rb = 1 / 0;
function tb(e) {
  if (typeof e == "string" || eb(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -rb ? "-0" : r;
}
var Qe = tb, ui, wc;
function at() {
  if (wc)
    return ui;
  wc = 1;
  var e = hr(), r = Qe;
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[r(a[i++])];
    return i && i == o ? n : void 0;
  }
  return ui = t, ui;
}
var li, qc;
function Kd() {
  if (qc)
    return li;
  qc = 1;
  var e = at();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return li = r, li;
}
var ci, Oc;
function nb() {
  if (Oc)
    return ci;
  Oc = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return ci = e, ci;
}
var fi, xc;
function ab() {
  if (xc)
    return fi;
  xc = 1;
  var e = hr(), r = Vr(), t = ce(), n = Yr, a = Do(), i = Qe;
  function o(s, u, l) {
    u = e(u, s);
    for (var f = -1, h = u.length, g = !1; ++f < h; ) {
      var p = i(u[f]);
      if (!(g = s != null && l(s, p)))
        break;
      s = s[p];
    }
    return g || ++f != h ? g : (h = s == null ? 0 : s.length, !!h && a(h) && n(p, h) && (t(s) || r(s)));
  }
  return fi = o, fi;
}
var di, Pc;
function Gd() {
  if (Pc)
    return di;
  Pc = 1;
  var e = nb(), r = ab();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return di = t, di;
}
var gi, kc;
function ib() {
  if (kc)
    return gi;
  kc = 1;
  var e = Zo(), r = Kd(), t = Gd(), n = Qo(), a = Fd(), i = $d(), o = Qe, s = 1, u = 2;
  function l(f, h) {
    return n(f) && a(h) ? i(o(f), h) : function(g) {
      var p = r(g, f);
      return p === void 0 && p === h ? t(g, f) : e(h, p, s | u);
    };
  }
  return gi = l, gi;
}
var hi, Lc;
function ob() {
  if (Lc)
    return hi;
  Lc = 1;
  function e(r) {
    return function(t) {
      return t == null ? void 0 : t[r];
    };
  }
  return hi = e, hi;
}
var pi, Dc;
function sb() {
  if (Dc)
    return pi;
  Dc = 1;
  var e = at();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return pi = r, pi;
}
var vi, Mc;
function ub() {
  if (Mc)
    return vi;
  Mc = 1;
  var e = ob(), r = sb(), t = Qo(), n = Qe;
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return vi = a, vi;
}
var _i, Bc;
function it() {
  if (Bc)
    return _i;
  Bc = 1;
  var e = Um(), r = ib(), t = Ro(), n = ce(), a = ub();
  function i(o) {
    return typeof o == "function" ? o : o == null ? t : typeof o == "object" ? n(o) ? r(o[0], o[1]) : e(o) : a(o);
  }
  return _i = i, _i;
}
var lb = Vo(), cb = it(), fb = 1;
function db(e) {
  return cb(typeof e == "function" ? e : lb(e, fb));
}
var gb = db, yi, Fc;
function hb() {
  if (Fc)
    return yi;
  Fc = 1;
  var e = dr(), r = Vr(), t = ce(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return yi = a, yi;
}
var mi, $c;
function pb() {
  if ($c)
    return mi;
  $c = 1;
  var e = Uo(), r = hb();
  function t(n, a, i, o, s) {
    var u = -1, l = n.length;
    for (i || (i = r), s || (s = []); ++u < l; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? t(f, a - 1, i, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return mi = t, mi;
}
var bi, jc;
function vb() {
  if (jc)
    return bi;
  jc = 1;
  var e = pb();
  function r(t) {
    var n = t == null ? 0 : t.length;
    return n ? e(t, 1) : [];
  }
  return bi = r, bi;
}
var Ai, Wc;
function _b() {
  if (Wc)
    return Ai;
  Wc = 1;
  var e = Co(), r = Math.max;
  function t(n, a, i) {
    return a = r(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, s = -1, u = r(o.length - a, 0), l = Array(u); ++s < u; )
        l[s] = o[a + s];
      s = -1;
      for (var f = Array(a + 1); ++s < a; )
        f[s] = o[s];
      return f[a] = i(l), e(n, this, f);
    };
  }
  return Ai = t, Ai;
}
var Ri, Nc;
function ot() {
  if (Nc)
    return Ri;
  Nc = 1;
  var e = vb(), r = _b(), t = hd();
  function n(a) {
    return t(r(a, void 0, e), a + "");
  }
  return Ri = n, Ri;
}
var yb = Po, mb = ot(), bb = 256, Ab = mb(function(e, r) {
  return yb(e, bb, void 0, void 0, void 0, r);
}), Rb = Ab, Eb = nt(), Cb = Hr, Tb = ce(), Sb = Cr, Ib = Wd, wb = Qe, qb = es();
function Ob(e) {
  return Tb(e) ? Eb(e, wb) : Sb(e) ? [e] : Cb(Ib(qb(e)));
}
var xb = Ob, Pb = {
  ary: V_,
  assign: Sd,
  clone: fm,
  curry: hm,
  forEach: qo,
  isArray: ce(),
  isError: Om,
  isFunction: Eo,
  isWeakMap: Dm,
  iteratee: gb,
  keys: $o(),
  rearg: Rb,
  toInteger: Rd,
  toPath: xb
}, kb = Xh, Lb = Pb;
function Db(e, r, t) {
  return kb(Lb, e, r, t);
}
var Ce = Db, Ei, Kc;
function Mb() {
  if (Kc)
    return Ei;
  Kc = 1;
  var e = wo(), r = ot(), t = Io(), n = ld(), a = ce(), i = cd(), o = "Expected a function", s = 8, u = 32, l = 128, f = 256;
  function h(g) {
    return r(function(p) {
      var _ = p.length, v = _, A = e.prototype.thru;
      for (g && p.reverse(); v--; ) {
        var b = p[v];
        if (typeof b != "function")
          throw new TypeError(o);
        if (A && !y && n(b) == "wrapper")
          var y = new e([], !0);
      }
      for (v = y ? v : _; ++v < _; ) {
        b = p[v];
        var E = n(b), C = E == "wrapper" ? t(b) : void 0;
        C && i(C[0]) && C[1] == (l | s | u | f) && !C[4].length && C[9] == 1 ? y = y[n(C[0])].apply(y, C[3]) : y = b.length == 1 && i(b) ? y[E]() : y.thru(b);
      }
      return function() {
        var P = arguments, q = P[0];
        if (y && P.length == 1 && a(q))
          return y.plant(q).value();
        for (var w = 0, k = _ ? p[w].apply(this, P) : q; ++w < _; )
          k = p[w].call(this, k);
        return k;
      };
    });
  }
  return Ei = h, Ei;
}
var Ci, Gc;
function Bb() {
  if (Gc)
    return Ci;
  Gc = 1;
  var e = Mb(), r = e();
  return Ci = r, Ci;
}
var Fb = Ce, Ud = Fb("flow", Bb());
Ud.placeholder = me();
var er = Ud, $b = Ce, zd = $b("get", Kd());
zd.placeholder = me();
var rr = zd, Ti, Uc;
function jb() {
  if (Uc)
    return Ti;
  Uc = 1;
  var e = $o(), r = gr(), t = Vr(), n = ce(), a = Zr(), i = Jr(), o = Xr(), s = Fo(), u = "[object Map]", l = "[object Set]", f = Object.prototype, h = f.hasOwnProperty;
  function g(p) {
    if (p == null)
      return !0;
    if (a(p) && (n(p) || typeof p == "string" || typeof p.splice == "function" || i(p) || s(p) || t(p)))
      return !p.length;
    var _ = r(p);
    if (_ == u || _ == l)
      return !p.size;
    if (o(p))
      return !e(p).length;
    for (var v in p)
      if (h.call(p, v))
        return !1;
    return !0;
  }
  return Ti = g, Ti;
}
var Si, zc;
function Hd() {
  return zc || (zc = 1, Si = {
    cap: !1,
    curry: !1,
    fixed: !1,
    immutable: !1,
    rearg: !1
  }), Si;
}
var Wb = Ce, Yd = Wb("isEmpty", jb(), Hd());
Yd.placeholder = me();
var De = Yd, Ii, Hc;
function Nb() {
  if (Hc)
    return Ii;
  Hc = 1;
  function e(r) {
    var t = r == null ? 0 : r.length;
    return t ? r[t - 1] : void 0;
  }
  return Ii = e, Ii;
}
var wi, Yc;
function Vd() {
  if (Yc)
    return wi;
  Yc = 1;
  function e(r, t, n) {
    var a = -1, i = r.length;
    t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = r[a + t];
    return o;
  }
  return wi = e, wi;
}
var qi, Vc;
function Kb() {
  if (Vc)
    return qi;
  Vc = 1;
  var e = at(), r = Vd();
  function t(n, a) {
    return a.length < 2 ? n : e(n, r(a, 0, -1));
  }
  return qi = t, qi;
}
var Oi, Jc;
function Gb() {
  if (Jc)
    return Oi;
  Jc = 1;
  var e = hr(), r = Nb(), t = Kb(), n = Qe;
  function a(i, o) {
    return o = e(o, i), i = t(i, o), i == null || delete i[n(r(o))];
  }
  return Oi = a, Oi;
}
var xi, Xc;
function Ub() {
  if (Xc)
    return xi;
  Xc = 1;
  var e = Ld;
  function r(t) {
    return e(t) ? void 0 : t;
  }
  return xi = r, xi;
}
var Pi, Zc;
function zb() {
  if (Zc)
    return Pi;
  Zc = 1;
  var e = nt(), r = Vo(), t = Gb(), n = hr(), a = Tr(), i = Ub(), o = ot(), s = Ho(), u = 1, l = 2, f = 4, h = o(function(g, p) {
    var _ = {};
    if (g == null)
      return _;
    var v = !1;
    p = e(p, function(b) {
      return b = n(b, g), v || (v = b.length > 1), b;
    }), a(g, s(g), _), v && (_ = r(_, u | l | f, i));
    for (var A = p.length; A--; )
      t(_, p[A]);
    return _;
  });
  return Pi = h, Pi;
}
var Hb = Ce, Jd = Hb("omit", zb());
Jd.placeholder = me();
var Yb = Jd, ki, Qc;
function Vb() {
  if (Qc)
    return ki;
  Qc = 1;
  var e = Lo(), r = hr(), t = Yr, n = Le, a = Qe;
  function i(o, s, u, l) {
    if (!n(o))
      return o;
    s = r(s, o);
    for (var f = -1, h = s.length, g = h - 1, p = o; p != null && ++f < h; ) {
      var _ = a(s[f]), v = u;
      if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
        return o;
      if (f != g) {
        var A = p[_];
        v = l ? l(A, _, p) : void 0, v === void 0 && (v = n(A) ? A : t(s[f + 1]) ? [] : {});
      }
      e(p, _, v), p = p[_];
    }
    return o;
  }
  return ki = i, ki;
}
var Li, ef;
function Xd() {
  if (ef)
    return Li;
  ef = 1;
  var e = at(), r = Vb(), t = hr();
  function n(a, i, o) {
    for (var s = -1, u = i.length, l = {}; ++s < u; ) {
      var f = i[s], h = e(a, f);
      o(h, f) && r(l, t(f, a), h);
    }
    return l;
  }
  return Li = n, Li;
}
var Di, rf;
function Jb() {
  if (rf)
    return Di;
  rf = 1;
  var e = Xd(), r = Gd();
  function t(n, a) {
    return e(n, a, function(i, o) {
      return r(n, o);
    });
  }
  return Di = t, Di;
}
var Mi, tf;
function Xb() {
  if (tf)
    return Mi;
  tf = 1;
  var e = Jb(), r = ot(), t = r(function(n, a) {
    return n == null ? {} : e(n, a);
  });
  return Mi = t, Mi;
}
var Zb = Ce, Zd = Zb("pick", Xb());
Zd.placeholder = me();
var Qb = Zd, Bi, nf;
function e1() {
  if (nf)
    return Bi;
  nf = 1;
  function e(r, t, n, a) {
    var i = -1, o = r == null ? 0 : r.length;
    for (a && o && (n = r[++i]); ++i < o; )
      n = t(n, r[i], i, r);
    return n;
  }
  return Bi = e, Bi;
}
var Fi, af;
function r1() {
  if (af)
    return Fi;
  af = 1;
  function e(r) {
    return function(t, n, a) {
      for (var i = -1, o = Object(t), s = a(t), u = s.length; u--; ) {
        var l = s[r ? u : ++i];
        if (n(o[l], l, o) === !1)
          break;
      }
      return t;
    };
  }
  return Fi = e, Fi;
}
var $i, of;
function t1() {
  if (of)
    return $i;
  of = 1;
  var e = r1(), r = e();
  return $i = r, $i;
}
var ji, sf;
function n1() {
  if (sf)
    return ji;
  sf = 1;
  var e = t1(), r = Sr;
  function t(n, a) {
    return n && e(n, a, r);
  }
  return ji = t, ji;
}
var Wi, uf;
function a1() {
  if (uf)
    return Wi;
  uf = 1;
  var e = Zr();
  function r(t, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return t(a, i);
      for (var o = a.length, s = n ? o : -1, u = Object(a); (n ? s-- : ++s < o) && i(u[s], s, u) !== !1; )
        ;
      return a;
    };
  }
  return Wi = r, Wi;
}
var Ni, lf;
function i1() {
  if (lf)
    return Ni;
  lf = 1;
  var e = n1(), r = a1(), t = r(e);
  return Ni = t, Ni;
}
var Ki, cf;
function o1() {
  if (cf)
    return Ki;
  cf = 1;
  function e(r, t, n, a, i) {
    return i(r, function(o, s, u) {
      n = a ? (a = !1, o) : t(n, o, s, u);
    }), n;
  }
  return Ki = e, Ki;
}
var Gi, ff;
function s1() {
  if (ff)
    return Gi;
  ff = 1;
  var e = e1(), r = i1(), t = it(), n = o1(), a = ce();
  function i(o, s, u) {
    var l = a(o) ? e : n, f = arguments.length < 3;
    return l(o, t(s, 4), u, f, r);
  }
  return Gi = i, Gi;
}
var u1 = Ce, Qd = u1("reduce", s1());
Qd.placeholder = me();
var l1 = Qd, Ui, df;
function c1() {
  if (df)
    return Ui;
  df = 1;
  var e = Vd();
  function r(t, n, a) {
    var i = t.length;
    return a = a === void 0 ? i : a, !n && a >= i ? t : e(t, n, a);
  }
  return Ui = r, Ui;
}
var zi, gf;
function f1() {
  if (gf)
    return zi;
  gf = 1;
  var e = Oo();
  function r(t, n) {
    for (var a = t.length; a-- && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return zi = r, zi;
}
var Hi, hf;
function d1() {
  if (hf)
    return Hi;
  hf = 1;
  var e = Oo();
  function r(t, n) {
    for (var a = -1, i = t.length; ++a < i && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return Hi = r, Hi;
}
var Yi, pf;
function g1() {
  if (pf)
    return Yi;
  pf = 1;
  function e(r) {
    return r.split("");
  }
  return Yi = e, Yi;
}
var Vi, vf;
function h1() {
  if (vf)
    return Vi;
  vf = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(l) {
    return s.test(l);
  }
  return Vi = u, Vi;
}
var Ji, _f;
function p1() {
  if (_f)
    return Ji;
  _f = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + u + ")", f = "[^" + e + "]", h = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", _ = l + "?", v = "[" + i + "]?", A = "(?:" + p + "(?:" + [f, h, g].join("|") + ")" + v + _ + ")*", b = v + _ + A, y = "(?:" + [f + s + "?", s, h, g, o].join("|") + ")", E = RegExp(u + "(?=" + u + ")|" + y + b, "g");
  function C(P) {
    return P.match(E) || [];
  }
  return Ji = C, Ji;
}
var Xi, yf;
function v1() {
  if (yf)
    return Xi;
  yf = 1;
  var e = g1(), r = h1(), t = p1();
  function n(a) {
    return r(a) ? t(a) : e(a);
  }
  return Xi = n, Xi;
}
var Zi, mf;
function _1() {
  if (mf)
    return Zi;
  mf = 1;
  var e = Nd(), r = Ad(), t = c1(), n = f1(), a = d1(), i = v1(), o = es();
  function s(u, l, f) {
    if (u = o(u), u && (f || l === void 0))
      return r(u);
    if (!u || !(l = e(l)))
      return u;
    var h = i(u), g = i(l), p = a(h, g), _ = n(h, g) + 1;
    return t(h, p, _).join("");
  }
  return Zi = s, Zi;
}
var y1 = Ce, eg = y1("trim", _1());
eg.placeholder = me();
var rg = eg;
const tg = Re(ke)`
  &.Editor__toolbar__button--large {
    width: ${x(80)};
  }

  &:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &[aria-checked="true"] {
    z-index: 2;
    position: relative;
  }
`, m1 = {
  format_bold: rh,
  format_italic: th,
  format_list_bulleted: nh,
  ["k-u-align-left"]: ah,
  ["k-u-align-center"]: ih,
  ["k-u-align-right"]: oh,
  image: sh,
  video: uh,
  link: lh,
  button_link: ch,
  quote: fh
}, Te = ({
  tag: e,
  onToggle: r,
  style: t,
  active: n,
  icon: a,
  disabled: i
}) => {
  const [{
    focus: o,
    translations: s
  }] = V(H), u = m1[a], l = s == null ? void 0 : s.controls[n ? `activated_${a}` : a];
  return /* @__PURE__ */ d(tg, {
    disabled: i,
    active: n && o,
    "aria-checked": n && o,
    onMouseDown: (h) => {
      h.preventDefault(), !i && r(t);
    },
    title: l,
    "aria-label": l,
    fit: "icon",
    tag: e,
    type: e === "button" ? e : null,
    children: /* @__PURE__ */ d(u, {})
  });
};
Te.propTypes = {
  disabled: m.bool,
  active: m.bool,
  onToggle: m.func,
  tag: m.string
};
Te.defaultProps = {
  disabled: !1,
  active: !1,
  onToggle: () => null,
  tag: "button"
};
const Ae = ({
  htmlFor: e,
  size: r,
  label: t,
  children: n,
  tooltip: a
}) => {
  var o;
  const [{
    translations: i
  }] = V(H);
  return /* @__PURE__ */ d(_r.Label, {
    labelProps: {
      htmlFor: e,
      size: r
    },
    tooltipId: `tooltip-${e}`,
    tooltip: a,
    tooltipProps: {
      actionLabel: (o = i == null ? void 0 : i.form) == null ? void 0 : o.tooltip_action_label
    },
    children: t || n
  });
};
Ae.propTypes = {
  htmlFor: m.string.isRequired,
  size: m.string,
  label: m.string,
  tooltip: m.string
};
Ae.defaultProps = {
  size: "small"
};
const Pe = ({
  name: e,
  form: r,
  placeholder: t,
  limit: n,
  unit: a,
  type: i,
  digits: o,
  disabled: s,
  rows: u,
  defaultValue: l,
  style: f,
  className: h,
  onFocus: g,
  onChange: p,
  onBlur: _,
  normalize: v,
  validate: A,
  ...b
}) => {
  const [y, E, {
    setValue: C
  }] = Fr({
    name: e,
    validate: A
  });
  return ve(() => {
    !l || y.value || C(l);
  }, []), /* @__PURE__ */ M(ue, {
    children: [/* @__PURE__ */ d("div", {
      style: f,
      className: h,
      children: /* @__PURE__ */ d(_r.Input, {
        ...y,
        id: e,
        error: E.error && E.touched,
        onFocus: g,
        onChange: (P) => {
          y.onChange(P), v && C(v(P.target.value)), p(P);
        },
        onBlur: (P) => {
          y.onBlur(P), v && C(v(P.target.value)), _(P);
        },
        "data-test-id": e,
        placeholder: t,
        limit: n,
        unit: a,
        type: i,
        tag: i,
        rows: u,
        digits: o,
        disabled: s,
        ...b
      })
    }), /* @__PURE__ */ d(Hf, {
      name: e,
      children: (P) => /* @__PURE__ */ d(_r.ErrorMessage, {
        children: P
      })
    })]
  });
};
Pe.defaultProps = {
  type: "input",
  disabled: !1,
  validate: () => {
  },
  onFocus: () => {
  },
  onBlur: () => {
  },
  onChange: () => {
  }
};
Pe.propTypes = {
  name: m.string.isRequired,
  placeholder: m.string,
  defaultValue: m.string,
  rows: m.oneOfType([m.string, m.number]),
  limit: m.oneOfType([m.string, m.number]),
  unit: m.string,
  type: m.string,
  digits: m.oneOfType([m.string, m.number]),
  disabled: m.bool,
  validate: m.func,
  onFocus: m.func,
  onBlur: m.func,
  onChange: m.func,
  normalize: m.func
};
const st = ({
  name: e,
  onClick: r,
  isDisabled: t,
  ...n
}) => {
  const [{
    value: a,
    ...i
  }, o] = Fr(e);
  return /* @__PURE__ */ d(ue, {
    children: /* @__PURE__ */ d(dh, {
      id: e,
      buttonProps: {
        onClick: r,
        disabled: t || o.error && o.touched
      },
      error: o.error && o.touched,
      ...i,
      ...n
    })
  });
};
st.defaultProps = {
  onClick: () => {
  },
  isDisabled: !1
};
st.propTypes = {
  name: m.string.isRequired,
  onClick: m.func,
  isDisabled: m.bool
};
const ng = ({
  className: e,
  ...r
}) => {
  const [{
    translations: t
  }] = V(H);
  return /* @__PURE__ */ M(ke, {
    modifier: "helium",
    size: "large",
    "aria-live": "polite",
    as: "div",
    className: we("k-u-cursor-not-allowed", e),
    ...r,
    children: [/* @__PURE__ */ d(gh, {
      color: "var(--color-grey-000)"
    }), /* @__PURE__ */ d(hh, {
      children: t.button_loading
    })]
  });
}, b1 = Re(ph)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${x(20)};
  background-color: var(--color-grey-000);
  margin-top: ${x(0)};
  transition: opacity 0.1s ease-out, margin-top 0.1s ease-out;
  z-index: 99999;

  .u-link-delete {
    flex: 1 0 auto;
    text-align: center;
    display: block;
  }
  .u-link-separator {
    flex: 0 0 auto;
    border: none;
    border-left: var(--border);
    margin: ${x(5)} ${x(10)};
  }
  .u-link-visit {
    flex: 2 0 auto;
    max-width: ${x(240)};
  }
`, ag = ({
  onDelete: e,
  url: r
}) => {
  const [{
    translations: t
  }] = V(H);
  return /* @__PURE__ */ M(b1, {
    position: "top",
    shadow: !0,
    borderWidth: 1,
    contentEditable: !1,
    borderColor: "var(--color-grey-400)",
    color: "var(--color-grey-000)",
    borderRadius: 4,
    children: [/* @__PURE__ */ d(co, {
      className: "u-link u-link-delete k-u-reset-button",
      weight: "regular",
      tag: "button",
      type: "button",
      color: "error",
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), e(n);
      },
      children: t.link.button.delete
    }), /* @__PURE__ */ d("hr", {
      className: "u-link-separator"
    }), /* @__PURE__ */ d(co, {
      className: "u-link u-link-visit k-u-ellipsis k-u-link",
      weight: "regular",
      href: r,
      target: "_blank",
      rel: "noopener",
      tag: "a",
      color: "font1",
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), window.open(r, "_blank").focus();
      },
      children: r
    })]
  });
}, po = Rr();
po.tlds(Er);
const ig = Re.div`
  position: relative;
  margin: ${x(30)} 0;

  @media (min-width: ${x(Ke.S.min)}) {
    display: inline-block;
  }
`, og = ({
  href: e,
  children: r
}) => /* @__PURE__ */ d(ke, {
  tag: "a",
  href: e,
  target: "_blank",
  rel: "nofollow noopener",
  modifier: "helium",
  size: "large",
  fit: "content",
  mobileFit: "fluid",
  children: r
}), A1 = ({
  contentState: e,
  entityKey: r,
  children: t
}) => {
  const [n, a] = le(!1), {
    url: i
  } = e.getEntity(r).getData(), [{
    editorState: o,
    focus: s
  }, u] = V(H), l = pt(e, o, r);
  return ve(() => {
    setTimeout(() => a(l && s), 0);
  }, [s, o]), /* @__PURE__ */ M(ig, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ d(og, {
      href: i,
      children: t
    }), n && /* @__PURE__ */ d(ag, {
      url: i,
      onDelete: () => {
        e.getBlockForKey(o.getSelection().getFocusKey()).findEntityRanges((h) => h.getEntity() === r, (h, g) => {
          const p = o.getSelection().merge({
            focusOffset: g,
            anchorOffset: h
          }), _ = lr.applyEntity(e, p, null);
          u(Y($.push(o, _, "apply-entity")));
        });
      }
    })]
  });
}, sg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BUTTON_LINK";
  }, r);
}, R1 = {
  strategy: sg,
  component: A1
}, E1 = {
  strategy: sg,
  component: (e) => {
    const {
      url: r
    } = e.contentState.getEntity(e.entityKey).getData();
    return /* @__PURE__ */ d(ig, {
      children: /* @__PURE__ */ d(og, {
        href: r,
        children: e.children
      })
    });
  }
}, rs = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = le(!1), [{
    editorState: a,
    editorRef: i,
    translations: o
  }, s] = V(H), u = pr(a), l = ht(a), f = () => u ? us(a, l) : ss(a);
  return /* @__PURE__ */ M(ue, {
    children: [/* @__PURE__ */ d(Te, {
      icon: "button_link",
      className: "Editor__toolbar__button--large",
      disabled: e,
      onToggle: () => {
        n(!t);
      }
    }), /* @__PURE__ */ d(J, {
      onClose: () => {
        n(!1);
      },
      isOpen: t,
      zIndex: 1e3,
      children: ({
        close: h
      }) => /* @__PURE__ */ M(ue, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: o.button_link.title
        }), /* @__PURE__ */ d(fr, {
          enableReinitialize: !0,
          initialValues: {
            url: u ? u.getData().url : "",
            text: f()
          },
          onSubmit: ({
            url: g
          }) => {
            r(g);
            const p = po.match(g), _ = a.getCurrentContent();
            if (u) {
              const v = _.replaceEntityData(l, {
                url: p[0].url
              });
              s(Y($.push(a, v, "change-block-data")));
            } else {
              const v = _.createEntity("BUTTON_LINK", "MUTABLE", {
                url: p[0].url
              }), A = v.getLastCreatedEntityKey(), b = $.set(a, {
                currentContent: v
              });
              s(Y(Ge.toggleLink(b, b.getSelection(), A)));
            }
            h(), setTimeout(() => i.current.blur(), 0);
          },
          children: ({
            handleSubmit: g
          }) => /* @__PURE__ */ d("form", {
            children: /* @__PURE__ */ M(J.Content, {
              align: "left",
              children: [/* @__PURE__ */ M("div", {
                children: [/* @__PURE__ */ d(Ae, {
                  htmlFor: "",
                  children: o.button_link.text
                }), /* @__PURE__ */ d(Pe, {
                  name: "text",
                  disabled: !0
                })]
              }), /* @__PURE__ */ M("div", {
                children: [/* @__PURE__ */ d(Ae, {
                  htmlFor: "url",
                  children: o.button_link.url
                }), /* @__PURE__ */ d(Pe, {
                  name: "url",
                  validate: (p) => {
                    if (!po.test(p))
                      return o.link.error;
                  }
                })]
              }), /* @__PURE__ */ d(J.Actions, {
                children: /* @__PURE__ */ d(ke, {
                  modifier: "helium",
                  type: "submit",
                  onClick: g,
                  children: o.submit
                })
              })]
            })
          })
        })]
      })
    })]
  });
};
rs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
rs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const C1 = Re(fo)`
  .k-ButtonGroup__button {
    width: 50%;
  }
`, T1 = Re.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
  background-color: var(--color-grey-200);
`, Ne = {
  URL: "URL",
  FILE: "FILE"
}, S1 = ({
  imageUrl: e,
  setImageUrl: r,
  errorMessage: t,
  onChange: n = () => null
}) => {
  const [a, i] = le(Ne.FILE), [{
    translations: o
  }] = V(H), {
    handleSubmit: s,
    values: u,
    isSubmitting: l
  } = xh(), [, , f] = Fr("url"), [, , h] = Fr("file");
  return /* @__PURE__ */ M("form", {
    children: [/* @__PURE__ */ M(C1, {
      className: "k-u-margin-bottom-double",
      children: [/* @__PURE__ */ d(fo.Button, {
        active: a === Ne.FILE,
        onClick: () => {
          i(Ne.FILE), r(void 0);
        },
        children: o.image_upload.button_file
      }), /* @__PURE__ */ d(fo.Button, {
        active: a === Ne.URL,
        onClick: () => {
          i(Ne.URL), r(void 0);
        },
        children: o.image_upload.button_url
      })]
    }), /* @__PURE__ */ M("div", {
      "aria-live": "polite",
      children: [a === Ne.FILE && !e && /* @__PURE__ */ d(vh, {
        id: "underwood-image-drop-uploader",
        dimensionErrorText: o.image_upload.dimension_error,
        sizeErrorText: o.image_upload.max_size,
        errorMessage: t,
        onChange: (g) => {
          var _;
          n(g);
          const p = g.file;
          !((_ = p == null ? void 0 : p.type) != null && _.match("image.*")) || (h.setValue(p), f.setValue(""), r(g.value));
        },
        acceptedFileSize: 5242880,
        acceptedImageDimensions: {
          height: 4e3,
          width: 1e3
        },
        acceptedMimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
        buttonTitle: o.image_upload.button_title,
        buttonText: /* @__PURE__ */ M("div", {
          className: "k-u-flex k-u-flex-direction-column k-u-flex-gap-noneHalf",
          children: [/* @__PURE__ */ d("span", {
            children: o.image_upload.help_file.formats
          }), /* @__PURE__ */ d("span", {
            children: o.image_upload.help_file.width
          }), /* @__PURE__ */ d("span", {
            children: o.image_upload.help_file.size
          })]
        })
      }), a === Ne.URL && /* @__PURE__ */ M(ue, {
        children: [/* @__PURE__ */ d("div", {
          className: "k-u-margin-top-single",
          children: /* @__PURE__ */ d(Ae, {
            htmlFor: "url",
            children: o.image_upload.label
          })
        }), /* @__PURE__ */ d(st, {
          name: "url",
          placeholder: "https://",
          buttonValue: o.image_upload.preview,
          onClick: () => {
            r(u.url);
          },
          onKeyPress: (g) => {
            g.key === "Enter" && (g.preventDefault(), g.stopPropagation(), g.target.nextSibling.focus(), g.target.nextSibling.click());
          }
        }), /* @__PURE__ */ d(Hf, {
          name: "url",
          children: (g) => /* @__PURE__ */ d(_r.ErrorMessage, {
            children: g
          })
        })]
      })]
    }), e && /* @__PURE__ */ M(ue, {
      children: [/* @__PURE__ */ M("div", {
        className: "k-u-margin-top-single",
        children: [/* @__PURE__ */ d(T1, {
          src: e,
          alt: ""
        }), a === Ne.FILE && /* @__PURE__ */ d("div", {
          className: "k-u-margin-top-singleHalf k-u-align-center",
          children: /* @__PURE__ */ d(co, {
            size: "small",
            tag: "button",
            type: "button",
            weight: "regular",
            onClick: () => r(void 0),
            className: "k-u-reset-button k-u-link k-u-link-primary1",
            children: o.image_upload.modify_image
          })
        })]
      }), /* @__PURE__ */ M("div", {
        className: "k-u-margin-vertical-double",
        children: [/* @__PURE__ */ d(Ae, {
          htmlFor: "description",
          children: o.image_upload.description.label
        }), /* @__PURE__ */ d(Pe, {
          name: "description",
          tag: "autoresize",
          placeholder: o.image_upload.description.placeholder
        })]
      }), /* @__PURE__ */ d(Nf, {
        children: o.image_upload.description.helper
      }), /* @__PURE__ */ d(J.Actions, {
        className: "k-u-margin-top-triple",
        children: l ? /* @__PURE__ */ d(ng, {
          fit: "fluid"
        }) : /* @__PURE__ */ d(ke, {
          type: "submit",
          size: "large",
          modifier: "helium",
          onClick: s,
          children: o.submit
        })
      })]
    })]
  });
}, ug = Rr();
ug.tlds(Er);
const I1 = ({
  onClose: e,
  url: r = "",
  entityKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H);
  return ve(() => (i(yr(!0)), () => i(yr(!1))), []), /* @__PURE__ */ d(J, {
    isOpen: !0,
    onClose: e,
    zIndex: 1e3,
    children: ({
      close: o
    }) => /* @__PURE__ */ M(ue, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: a.link.title
      }), /* @__PURE__ */ d(fr, {
        initialValues: {
          url: r
        },
        onSubmit: ({
          url: s
        }) => {
          i(Y(xg(n, t, {
            url: s
          }))), o(), e();
        },
        children: () => /* @__PURE__ */ d(Yf, {
          children: /* @__PURE__ */ M(J.Content, {
            align: "left",
            children: [/* @__PURE__ */ M("div", {
              children: [/* @__PURE__ */ d(Ae, {
                htmlFor: "url",
                children: a.image_upload.url
              }), /* @__PURE__ */ d(Pe, {
                name: "url",
                validate: (s) => {
                  if (!ug.test(s))
                    return a.link.error;
                }
              })]
            }), /* @__PURE__ */ d(J.Actions, {
              children: /* @__PURE__ */ d(ke, {
                size: "large",
                type: "submit",
                modifier: "helium",
                children: a.submit
              })
            })]
          })
        })
      })]
    })
  });
}, w1 = ({
  onClose: e,
  description: r,
  entityKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H);
  return ve(() => (i(yr(!0)), () => i(yr(!1))), []), /* @__PURE__ */ d(J, {
    isOpen: !0,
    onClose: e,
    zIndex: 1e3,
    children: ({
      close: o
    }) => /* @__PURE__ */ M(ue, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: a.image_upload.description.title
      }), /* @__PURE__ */ d(fr, {
        initialValues: {
          description: r
        },
        onSubmit: ({
          description: s
        }) => {
          i(Y(xg(n, t, {
            description: s
          }))), o(), e();
        },
        children: () => /* @__PURE__ */ d(Yf, {
          children: /* @__PURE__ */ M(J.Form, {
            children: [/* @__PURE__ */ M("div", {
              className: "k-u-margin-bottom-double",
              children: [/* @__PURE__ */ d(Ae, {
                htmlFor: "description",
                children: a.image_upload.description.label
              }), /* @__PURE__ */ d(Pe, {
                name: "description",
                tag: "autoresize",
                placeholder: a.image_upload.description.placeholder
              })]
            }), /* @__PURE__ */ d(Nf, {
              children: a.image_upload.description.helper
            }), /* @__PURE__ */ d(J.Actions, {
              className: "k-u-margin-top-triple",
              children: /* @__PURE__ */ d(ke, {
                type: "submit",
                size: "large",
                modifier: "helium",
                children: a.submit
              })
            })]
          })
        })
      })]
    })
  });
}, q1 = ({
  contentState: e,
  entityKey: r,
  blockKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H), [o, s] = le(!1), [u, l] = le(!1), f = pt(n.getCurrentContent(), n, r), {
    src: h,
    url: g,
    description: p
  } = e.getEntity(r).getData(), [_, v] = le(f);
  ve(() => {
    v(f);
  }, [f, o, u]);
  const A = () => {
    setTimeout(() => i(Y(Og(n, t))), 1);
  }, b = (y) => {
    var w, k;
    y.preventDefault(), y.stopPropagation();
    const E = n.getCurrentContent().getBlockBefore(t), C = n.getCurrentContent().getKeyBefore(t), P = n.getCurrentContent().getKeyAfter(t);
    _o(n, t);
    let q = mr.createEmpty(C || P);
    q = q.merge({
      anchorOffset: (w = E == null ? void 0 : E.getLength()) != null ? w : 0,
      focusOffset: (k = E == null ? void 0 : E.getLength()) != null ? k : 0
    }), i(Y($.forceSelection(_o(n, t), q)));
  };
  return /* @__PURE__ */ M("div", {
    className: "u-Draft__image",
    onClick: A,
    children: [/* @__PURE__ */ M("div", {
      className: we("u-Draft__image-focus", {
        "u-Draft__image-focus__focused": f
      }),
      children: [/* @__PURE__ */ d("img", {
        src: Wr(h),
        alt: p
      }), /* @__PURE__ */ M(Je, {
        className: "u-Draft__image__menu",
        menuPosition: "center",
        positionedButton: !0,
        open: _,
        contentEditable: !1,
        onClose: () => v(!1),
        children: [/* @__PURE__ */ d(Je.Button, {
          onClick: () => s(!0),
          icon: /* @__PURE__ */ d(_h, {}),
          children: De(p) ? a.image_upload.add_label : a.image_upload.modify_label
        }), !g && /* @__PURE__ */ d(Je.Button, {
          onClick: () => l(!0),
          icon: /* @__PURE__ */ d(Es, {}),
          children: a.link.title
        }), !!g && /* @__PURE__ */ M(ue, {
          children: [/* @__PURE__ */ d(Je.Separator, {}), /* @__PURE__ */ d(Je.Button, {
            onClick: (y) => {
              y.preventDefault(), y.stopPropagation(), i(Y(NA(n, r, ["url"])));
            },
            icon: /* @__PURE__ */ d(yh, {}),
            children: a.link.button.delete
          }), /* @__PURE__ */ M(Je.Link, {
            icon: /* @__PURE__ */ d(Es, {}),
            href: g,
            target: "_blank",
            rel: "noopener",
            tag: "a",
            color: "font1",
            onClick: (y) => {
              y.preventDefault(), y.stopPropagation(), window.open(g, "_blank").focus();
            },
            textProps: {
              className: "k-u-ellipsis"
            },
            children: [a.link.button.visit, " ", g]
          })]
        }), /* @__PURE__ */ d(Je.Button, {
          onClick: b,
          icon: /* @__PURE__ */ d(mh, {}),
          children: a.image_upload.remove_image
        })]
      })]
    }), o && /* @__PURE__ */ d(w1, {
      onClose: () => s(!1),
      entityKey: r,
      description: p
    }), u && /* @__PURE__ */ d(I1, {
      entityKey: r,
      url: g,
      onClose: () => {
        l(!1);
      },
      isOpen: !0
    })]
  });
}, O1 = ({
  contentState: e,
  entityKey: r
}) => {
  const {
    src: t,
    url: n,
    description: a
  } = e.getEntity(r).getData();
  return /* @__PURE__ */ d("div", {
    className: "u-Draft__image-read",
    children: n ? /* @__PURE__ */ d("a", {
      href: n,
      target: "_blank",
      rel: "nofollow noopener",
      children: /* @__PURE__ */ d("img", {
        src: Wr(t),
        alt: a
      })
    }) : /* @__PURE__ */ d("img", {
      src: Wr(t),
      alt: a
    })
  });
}, lg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, x1 = {
  strategy: lg,
  component: q1
}, P1 = {
  strategy: lg,
  component: O1
}, ts = ({
  disabled: e,
  onUpload: r,
  onChange: t,
  errorMessage: n
}) => {
  const [a, i] = le(!1), [{
    editorState: o,
    translations: s,
    disabled: u
  }, l] = V(H), [f, h] = le("");
  return ve(() => {
    a || h("");
  }, [a]), /* @__PURE__ */ M(ue, {
    children: [/* @__PURE__ */ d(Te, {
      icon: "image",
      disabled: u || e,
      onToggle: () => {
        i(!a);
      }
    }), /* @__PURE__ */ d(J, {
      onClose: () => i(!1),
      isOpen: a,
      zIndex: 1e3,
      children: ({
        close: g
      }) => /* @__PURE__ */ M(ue, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: s.image_upload.title
        }), /* @__PURE__ */ d(J.Form, {
          children: /* @__PURE__ */ d(fr, {
            initialValues: {
              url: "",
              description: ""
            },
            validationSchema: $r.object().shape({
              url: $r.string().url(s.image.invalid_url).matches(/(?:jpg|jpeg|gif|png)$/, s.image.invalid_extension)
            }),
            onSubmit: ({
              url: p,
              fileSize: _,
              file: v,
              description: A
            }, {
              setSubmitting: b
            }) => new Promise((y, E) => {
              v && v.size === 0 && (E("WRONG"), b(!1)), De(p) ? r(v).then((C) => y(C)).catch(() => {
                b(!1);
              }) : y(p);
            }).then((y) => {
              const P = o.getCurrentContent().createEntity("IMAGE", "IMMUTABLE", {
                src: y,
                description: A
              }).getLastCreatedEntityKey(), q = $f.insertAtomicBlock(o, P, " "), w = $.forceSelection(q, q.getCurrentContent().getSelectionAfter());
              if (wg(w)) {
                const k = qg(w);
                l(Y(k));
              } else
                l(Y(w));
              g(), i(!1), setTimeout(() => i(!1), 500);
            }),
            children: () => /* @__PURE__ */ d(S1, {
              imageUrl: f,
              setImageUrl: h,
              errorMessage: n,
              onChange: t
            })
          })
        })]
      })
    })]
  });
};
ts.propTypes = {
  disabled: m.bool,
  onUpload: m.func,
  errorMessage: m.string
};
ts.defaultProps = {
  disabled: !1,
  onUpload: () => null
};
const vo = Rr();
vo.tlds(Er);
const k1 = Re.div`
  display: flex;
  justify-content: center;
  img {
    max-height: ${x(200)};
    max-width: 100%;
  }
`, L1 = ({
  src: e
}) => /* @__PURE__ */ d(k1, {
  children: /* @__PURE__ */ d("img", {
    src: Wr(e),
    alt: ""
  })
}), ns = ({
  onClose: e,
  isOpen: r,
  onChange: t
}) => {
  const [{
    editorState: n,
    editorRef: a,
    translations: i,
    disabled: o
  }, s] = V(H), u = pr(n), l = ht(n), f = () => u ? us(n, l) : ss(n);
  return /* @__PURE__ */ d(J, {
    zIndex: 1e3,
    onClose: e,
    isOpen: r,
    children: ({
      close: h
    }) => /* @__PURE__ */ M(ue, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: i.link.title
      }), /* @__PURE__ */ d(fr, {
        enableReinitialize: !0,
        initialValues: {
          url: u ? u.getData().url : "",
          text: f()
        },
        onSubmit: ({
          url: g
        }) => {
          const p = vo.match(g), _ = n.getCurrentContent();
          if (t(), u)
            if ((u == null ? void 0 : u.get("type")) === "IMAGE") {
              const v = _.mergeEntityData(l, {
                url: p[0].url
              });
              s(Y($.push(n, v, "change-block-data")));
            } else {
              const v = _.replaceEntityData(l, {
                url: p[0].url
              });
              s(Y($.push(n, v, "change-block-data")));
            }
          else {
            const v = _.createEntity("LINK", "MUTABLE", {
              url: p[0].url
            }), A = v.getLastCreatedEntityKey(), b = $.set(n, {
              currentContent: v
            });
            s(Y(Ge.toggleLink(b, b.getSelection(), A)));
          }
          h(), setTimeout(() => a.current.focus(), 0);
        },
        children: ({
          handleSubmit: g
        }) => {
          var p;
          return /* @__PURE__ */ d("form", {
            children: /* @__PURE__ */ M(J.Content, {
              align: "left",
              children: [/* @__PURE__ */ d("div", {
                children: (u == null ? void 0 : u.get("type")) === "IMAGE" ? /* @__PURE__ */ d(L1, {
                  src: (p = u == null ? void 0 : u.getData()) == null ? void 0 : p.src
                }) : /* @__PURE__ */ M(ue, {
                  children: [/* @__PURE__ */ d(Ae, {
                    htmlFor: "text",
                    children: i.link.text.label
                  }), /* @__PURE__ */ d(Pe, {
                    name: "text",
                    disabled: !0
                  })]
                })
              }), /* @__PURE__ */ M("div", {
                children: [/* @__PURE__ */ d(Ae, {
                  htmlFor: "url",
                  children: i.image_upload.url
                }), /* @__PURE__ */ d(Pe, {
                  name: "url",
                  validate: (_) => {
                    if (!vo.test(_))
                      return i.link.error;
                  }
                })]
              }), /* @__PURE__ */ d(J.Actions, {
                children: /* @__PURE__ */ d(ke, {
                  size: "large",
                  type: "submit",
                  modifier: "helium",
                  onClick: g,
                  children: i.submit
                })
              })]
            })
          });
        }
      })]
    })
  });
};
ns.propTypes = {
  onChange: m.func,
  onClose: m.func,
  isOpen: m.bool
};
ns.defaultProps = {
  onChange: () => null,
  onClose: () => null,
  isOpen: !1
};
const D1 = Rr();
D1.tlds(Er);
const M1 = Re.div`
  display: inline-block;
  position: relative;
`, B1 = ({
  contentState: e,
  entityKey: r,
  children: t
}) => {
  const [n, a] = le(!1), {
    url: i
  } = e.getEntity(r).getData(), [{
    editorState: o,
    focus: s
  }, u] = V(H), l = pt(e, o, r);
  return ve(() => {
    setTimeout(() => a(l && s), 0);
  }, [s, o]), /* @__PURE__ */ M(M1, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ d("a", {
      href: i,
      target: "_blank",
      className: "k-u-link k-u-link-primary1",
      rel: "nofollow noopener",
      children: t
    }), n && /* @__PURE__ */ d(ag, {
      url: i,
      onDelete: () => {
        var h;
        const f = e == null ? void 0 : e.getBlockForKey((h = o == null ? void 0 : o.getSelection()) == null ? void 0 : h.getFocusKey());
        !f || f.findEntityRanges((g) => g.getEntity() === r, (g, p) => {
          const _ = o.getSelection().merge({
            focusOffset: p,
            anchorOffset: g
          }), v = lr.applyEntity(e, _, null);
          u(Y($.push(o, v, "apply-entity")));
        });
      }
    })]
  });
}, cg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, F1 = {
  strategy: cg,
  component: B1
}, $1 = {
  strategy: cg,
  component: (e) => {
    const {
      url: r
    } = e.contentState.getEntity(e.entityKey).getData();
    return /* @__PURE__ */ d("a", {
      href: r,
      target: "_blank",
      rel: "nofollow noopener",
      className: "k-u-link k-u-link-primary1",
      children: e.children
    });
  }
}, as = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = le(!1), [{
    editorState: a,
    editorRef: i,
    translations: o,
    disabled: s
  }, u] = V(H), l = pr(a), f = ht(a), h = () => l ? us(a, f) : ss(a), g = () => {
    const _ = a.getSelection();
    setTimeout(() => i.current.focus(), 0);
    const v = _.merge({
      anchorOffset: _.getFocusOffset(),
      hasFocus: !0
    });
    u(Y($.forceSelection(a, v)));
  }, p = !s && !e && (l || !De(h()));
  return /* @__PURE__ */ M(ue, {
    children: [/* @__PURE__ */ d(Te, {
      icon: "link",
      disabled: !p,
      onToggle: () => {
        n(!t);
      }
    }), /* @__PURE__ */ d(ns, {
      onClose: () => {
        n(!1), g();
      },
      isOpen: t,
      onChange: () => {
        n(!1), r();
      },
      zIndex: 1e3
    })]
  });
};
as.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
as.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const j1 = "https://api.embed.ly/1/", bf = (e) => {
  if (!e.key)
    throw new Error("You need an API key to call Embedly");
  return fetch(
    `${j1}oembed?${Ph.stringify({
      secure: document.location.protocol === "https:",
      scheme: document.location.protocol.replace(":", ""),
      ...e
    })}`
  ).then((r) => r.json());
}, Qi = ({ height: e, width: r }) => (e / r * 100).toPrecision(4), Af = (e) => {
  var r, t;
  if (e.type === "video" || e.type === "rich" && e.provider_name !== "SoundCloud")
    return {
      ratio: Qi({
        height: e.height,
        width: e.width
      }),
      html: e.html
    };
  if (((r = e == null ? void 0 : e.url) == null ? void 0 : r.includes("/shorts/")) && ((t = e == null ? void 0 : e.url) == null ? void 0 : t.includes("youtube.")))
    return {
      ratio: 67.5,
      html: `<iframe class="embedly-embed" src="${encodeURI(
        e.url.replace("/shorts/", "/embed/")
      )}" width="100%" height="auto" title="YouTube shorts embed" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>`
    };
  switch (e.provider_name) {
    case "SoundCloud":
      return {
        ratio: Qi({ height: 6, width: 16 }),
        html: e.html
      };
    case "Ovizer":
      return {
        ratio: Qi({
          height: e.thumbnail_height || 1,
          width: e.thumbnail_width || 1
        }),
        html: `<iframe src="${e.url}" width="100%" height="auto" allowFullScreen></iframe>`
      };
    case "Apple Podcasts":
      return {
        height: 183,
        ratio: 0.1,
        html: `<iframe allow="autoplay *; encrypted-media *; fullscreen *" height="175" style=";overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${e.url.replace(
          "podcasts.apple.com",
          "embed.podcasts.apple.com"
        )}&theme=auto"></iframe>`
      };
    default:
      return {
        ratio: 67.5,
        html: `<iframe src="${e.url}" width="100%" height="auto" allowFullScreen></iframe>`
      };
  }
}, W1 = ({
  contentState: e,
  entityKey: r,
  blockKey: t
}) => {
  const {
    embedlyHtml: n,
    embedRatio: a,
    html: i,
    height: o
  } = e.getEntity(r).getData(), [{
    editorState: s
  }, u] = V(H), l = (g) => {
    g.preventDefault(), g.stopPropagation(), setTimeout(() => {
      u(Y(Og(s, t)));
    }, 1);
  }, f = pt(e, s, r), h = br(n || i, {
    sanitize: !1
  });
  return h ? /* @__PURE__ */ d(Kr, {
    ratio: a || 67.5,
    className: "kiss-Draft__media",
    style: {
      ...o && {
        height: o
      }
    },
    children: /* @__PURE__ */ d("div", {
      className: we("kiss-Draft__media-focus", {
        "kiss-Draft__media-focus__focused": f
      }),
      onClick: l,
      children: gt(h)
    })
  }) : null;
}, N1 = (e) => {
  const {
    embedlyHtml: r,
    embedRatio: t,
    height: n,
    html: a
  } = e.contentState.getEntity(e.entityKey).getData(), i = br(r || a, {
    sanitize: !1
  });
  return i ? /* @__PURE__ */ d(Kr, {
    ratio: t || 67.5,
    className: "kiss-Draft__media-read",
    style: {
      ...n && {
        height: n
      }
    },
    children: gt(i)
  }) : null;
}, fg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && ["VIDEO", "MEDIA"].includes(t.getEntity(a).getType());
  }, r);
}, K1 = {
  strategy: fg,
  component: W1
}, G1 = {
  strategy: fg,
  component: N1
}, is = ({
  disabled: e,
  onChange: r,
  embedlyApiKey: t
}) => {
  const [{
    editorState: n,
    translations: a,
    disabled: i
  }, o] = V(H), [s, u] = le(!1), [l, f] = le(void 0), [h, g] = le(void 0), [p, _] = le(void 0), [v, A] = le(!1);
  return /* @__PURE__ */ M(ue, {
    children: [/* @__PURE__ */ d(Te, {
      icon: "video",
      disabled: i || e,
      onToggle: () => {
        u(!s);
      }
    }), /* @__PURE__ */ d(J, {
      onClose: () => u(!1),
      isOpen: s,
      zIndex: 1e3,
      children: ({
        close: b
      }) => /* @__PURE__ */ M(ue, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: a.media_upload.title
        }), /* @__PURE__ */ d(J.Form, {
          align: "left",
          children: /* @__PURE__ */ d(fr, {
            initialValues: {
              url: ""
            },
            validationSchema: $r.object().shape({
              url: $r.string().url(a.video.invalid_url)
            }),
            onSubmit: ({
              url: y
            }) => (r(y), A(!1), bf({
              key: t,
              maxwidth: 640,
              url: y
            }).then((E) => {
              if (E.type === "error") {
                A(!0);
                return;
              }
              const {
                html: C,
                ratio: P,
                height: q
              } = Af(E), w = UA(n, {
                html: C,
                embedRatio: P,
                ...q && {
                  height: q
                }
              });
              if (wg(w)) {
                const k = qg(w);
                o(Y(k));
              } else
                o(Y(w));
              b(), setTimeout(() => {
                u(!1), f(void 0);
              }, 500);
            })),
            children: ({
              handleSubmit: y,
              isSubmitting: E,
              values: C
            }) => /* @__PURE__ */ M(ue, {
              children: [/* @__PURE__ */ d(Ae, {
                className: "k-u-margin-bottom-single",
                htmlFor: "url",
                children: a.image_upload.label
              }), /* @__PURE__ */ d(st, {
                name: "url",
                placeholder: "https://",
                buttonValue: a.image_upload.preview,
                onClick: () => {
                  A(!1), bf({
                    key: t,
                    maxwidth: 640,
                    url: C.url
                  }).then((P) => {
                    if (P.type === "error") {
                      A(!0);
                      return;
                    }
                    const {
                      html: q,
                      ratio: w,
                      height: k = void 0
                    } = Af(P);
                    g(w), f(q), _(k);
                  });
                }
              }), l && /* @__PURE__ */ d("div", {
                className: "k-u-margin-vertical-single",
                children: /* @__PURE__ */ d(Kr, {
                  ratio: h,
                  style: {
                    ...p && {
                      height: p
                    }
                  },
                  children: gt(br(l, {
                    sanitize: !1
                  }))
                })
              }), v && /* @__PURE__ */ d(_r.ErrorMessage, {
                children: a.video.problem
              }), l && /* @__PURE__ */ d(J.Actions, {
                children: E ? /* @__PURE__ */ d(ng, {
                  size: "large"
                }) : /* @__PURE__ */ d(ke, {
                  size: "large",
                  type: "submit",
                  modifier: "helium",
                  onClick: y,
                  children: a.submit
                })
              })]
            })
          })
        })]
      })
    })]
  });
};
is.propTypes = {
  embedlyApiKey: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
is.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const dg = Rr({
  fuzzyLink: !1
});
dg.tlds(Er);
const U1 = (e, r) => {
  const t = dg.match(e.get("text"));
  if (typeof t < "u" && t !== null)
    for (let n = 0; n < t.length; n += 1)
      r(t[n].index, t[n].lastIndex);
}, z1 = (e) => /* @__PURE__ */ d("a", {
  target: "_blank",
  rel: "nofollow noopener",
  className: "k-u-link k-u-link-primary1",
  href: e.decoratedText,
  children: e.children
}), gg = {
  strategy: U1,
  component: z1
}, H1 = (e) => {
  const {
    url: r
  } = e.contentState.getEntity(e.entityKey).getData();
  return /* @__PURE__ */ d("a", {
    href: r,
    className: "k-u-link k-u-link-primary1",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    children: e.children
  });
}, Y1 = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, ut = {
  strategy: Y1,
  component: H1
};
var eo, Rf;
function V1() {
  if (Rf)
    return eo;
  Rf = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return eo = e, eo;
}
var ro, Ef;
function J1() {
  if (Ef)
    return ro;
  Ef = 1;
  var e = xd(), r = ud(), t = Xo(), n = 1 / 0, a = e && 1 / t(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : r;
  return ro = a, ro;
}
var to, Cf;
function X1() {
  if (Cf)
    return to;
  Cf = 1;
  var e = Dd(), r = pd, t = V1(), n = Md(), a = J1(), i = Xo(), o = 200;
  function s(u, l, f) {
    var h = -1, g = r, p = u.length, _ = !0, v = [], A = v;
    if (f)
      _ = !1, g = t;
    else if (p >= o) {
      var b = l ? null : a(u);
      if (b)
        return i(b);
      _ = !1, g = n, A = new e();
    } else
      A = l ? [] : v;
    e:
      for (; ++h < p; ) {
        var y = u[h], E = l ? l(y) : y;
        if (y = f || y !== 0 ? y : 0, _ && E === E) {
          for (var C = A.length; C--; )
            if (A[C] === E)
              continue e;
          l && A.push(E), v.push(y);
        } else
          g(A, E, f) || (A !== v && A.push(E), v.push(y));
      }
    return v;
  }
  return to = s, to;
}
var no, Tf;
function Z1() {
  if (Tf)
    return no;
  Tf = 1;
  var e = X1();
  function r(t) {
    return t && t.length ? e(t) : [];
  }
  return no = r, no;
}
var Q1 = Ce, hg = Q1("uniq", Z1(), Hd());
hg.placeholder = me();
var eA = hg;
const pg = (e) => /(.gif)$/gim.test(e), vg = (e) => /(.svg)$/gim.test(e), rA = ["jpg", "jpeg", "png", "webp"], _g = (e, r) => {
  const t = e.replace(/https?:\/\/([0-9a-z.:]+)\/\S+/gi, "$1");
  return (r == null ? void 0 : r.allowedServers.indexOf(t)) > -1;
}, tA = (e) => encodeURIComponent(encodeURIComponent(e)), Sf = (e, { width: r = 0, height: t = 0, filters: n = [], upscale: a = !0 }, i) => {
  if (vg(e) || pg(e) || !ENABLE_RESPONSIVE_IMAGES)
    return e;
  const o = tA(e), u = `${i == null ? void 0 : i.host}/${r}x${t}`;
  a || n.push("no_upscale:1");
  let l = "";
  n.forEach((h) => {
    const [g, p] = h.split(":");
    g === "format" && rA.includes(p) && (l = `.${p}`);
  });
  const f = eA(n).join(",");
  return f ? `${u}/${f}/${o}${l}` : `${u}/options:false/${o}`;
}, If = (e, {
  imageSizes: r,
  breakpoints: t,
  imageSizesInViewport: n,
  ratio: a = 0,
  upscale: i = !0,
  format: o = "jpg",
  config: s
} = {}) => {
  if (!e)
    return;
  if (vg(e) || pg(e) || !ENABLE_RESPONSIVE_IMAGES || !_g(e, s))
    return { src: e, srcSet: "", sizes: "" };
  if (t.length !== n.length)
    return;
  const l = ["quality:90", `format:${o}`], h = [...r].sort((v, A) => A - v)[0], g = Sf(
    e,
    {
      width: h,
      height: Math.floor(h * a),
      filters: l,
      upscale: i
    },
    s
  ), p = r.reduce((v, A) => v.concat(
    `${Sf(
      e,
      {
        width: A,
        height: Math.floor(A * a),
        filters: l,
        upscale: i
      },
      s
    )} ${A}w`
  ), []).join(", "), _ = t.reduce(
    (v, A, b) => v.concat(
      `(min-width: ${A}px) calc(${n[b]})`
    ),
    [`calc(${n[0]})`]
  ).reverse().join(", ");
  return { src: g, srcSet: p, sizes: _ };
}, nA = `100vw - ${bh * 2}px`, aA = `(100vw - ${Kf * 2}px) * (7/12)`, iA = `(${Ke.XL.min - Kf * 2}px) * (7/12))`, wf = [280, 335, 380, 785, 944];
function oA(e, r) {
  for (var t = 0; t < e.length; t++)
    if (e[t] >= r)
      return e[t];
}
const sA = (e) => {
  const [{
    configResponsiveImageHandler: r
  }] = V(H), {
    src: t,
    alt: n,
    style: a,
    width: i,
    height: o,
    imageLink: s
  } = e.contentState.getEntity(e.entityKey).getData(), u = mo(null), l = Gf(u), f = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>";
  let h = {
    src: t,
    sizes: null,
    srcSet: null
  };
  _g(t, r) && (h = a.width && a.height ? If(t, {
    imageSizes: [oA(wf, parseInt(a.width))],
    breakpoints: [0],
    imageSizesInViewport: [parseInt(a.width)],
    upscale: !1,
    resolutions: 1,
    config: r
  }) : If(t, {
    imageSizes: wf,
    breakpoints: [0, 1080, 1440],
    imageSizesInViewport: [nA, aA, iA],
    upscale: !1,
    config: r
  }));
  const g = /* @__PURE__ */ d("img", {
    src: l ? h.src : f,
    srcSet: l ? h.srcSet : "",
    sizes: h.sizes,
    alt: n,
    width: i && o ? i : void 0,
    height: i && o ? o : void 0,
    style: {
      width: a.width
    }
  });
  return s ? /* @__PURE__ */ d("a", {
    href: s,
    className: "k-u-align-center",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    ref: u,
    children: g
  }) : /* @__PURE__ */ d("div", {
    className: "k-u-align-center",
    ref: u,
    children: g
  });
}, uA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, yg = {
  strategy: uA,
  component: sA
}, lA = (e) => {
  const {
    html: r
  } = e.contentState.getEntity(e.entityKey).getData(), t = br(r, {
    sanitize: !1
  });
  return t ? /* @__PURE__ */ d(Ah, {
    children: /* @__PURE__ */ d(Kr, {
      ratio: 67.5,
      children: gt(t)
    })
  }) : null;
}, cA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "MEDIA";
  }, r);
}, lt = {
  strategy: cA,
  component: lA
}, fA = (e) => {
  const {
    src: r,
    alt: t,
    style: n,
    width: a,
    height: i,
    imageLink: o
  } = e.contentState.getEntity(e.entityKey).getData(), s = mo(null), u = Gf(s), f = /* @__PURE__ */ d("img", {
    src: u ? r : "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>",
    alt: t,
    width: a && i ? a : void 0,
    height: a && i ? i : void 0,
    style: {
      width: n.width
    }
  });
  return o ? /* @__PURE__ */ d("a", {
    href: o,
    className: "k-u-align-center",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    ref: s,
    children: f
  }) : /* @__PURE__ */ d("div", {
    className: "k-u-align-center",
    ref: s,
    children: f
  });
}, dA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, mg = {
  strategy: dA,
  component: fA
}, gA = () => /* @__PURE__ */ d("hr", {}), hA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "SEPARATOR";
  }, r);
}, ct = {
  strategy: hA,
  component: gA
}, pA = (e) => e.children.length === 1 && e.children[0].props.text === " " ? null : /* @__PURE__ */ d("span", {
  children: e.children
}), vA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BLOCKQUOTE";
  }, r);
}, ft = {
  strategy: vA,
  component: pA
};
var ao, qf;
function _A() {
  if (qf)
    return ao;
  qf = 1;
  var e = Zo();
  function r(t, n) {
    return e(t, n);
  }
  return ao = r, ao;
}
var yA = Ce, bg = yA("isEqual", _A());
bg.placeholder = me();
var dt = bg, io, Of;
function mA() {
  if (Of)
    return io;
  Of = 1;
  var e = "Expected a function";
  function r(t) {
    if (typeof t != "function")
      throw new TypeError(e);
    return function() {
      var n = arguments;
      switch (n.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, n[0]);
        case 2:
          return !t.call(this, n[0], n[1]);
        case 3:
          return !t.call(this, n[0], n[1], n[2]);
      }
      return !t.apply(this, n);
    };
  }
  return io = r, io;
}
var oo, xf;
function bA() {
  if (xf)
    return oo;
  xf = 1;
  var e = nt(), r = it(), t = Xd(), n = Ho();
  function a(i, o) {
    if (i == null)
      return {};
    var s = e(n(i), function(u) {
      return [u];
    });
    return o = r(o), t(i, s, function(u, l) {
      return o(u, l[0]);
    });
  }
  return oo = a, oo;
}
var so, Pf;
function AA() {
  if (Pf)
    return so;
  Pf = 1;
  var e = it(), r = mA(), t = bA();
  function n(a, i) {
    return t(a, r(e(i)));
  }
  return so = n, so;
}
var RA = Ce, Ag = RA("omitBy", AA());
Ag.placeholder = me();
var Rg = Ag;
const EA = rr("children[0]"), kf = er(rr("children[0].nodeName"), dt("IMG")), CA = er(rr("parentElement.nodeName"), dt("A")), Lf = Rg(De), TA = new cr([ut, yg, lt, ct, ft]), SA = new cr([ut, mg, lt, ct, ft]), IA = (e) => Vf({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (kf(t)) {
        const a = EA(t);
        return n("IMAGE", "IMMUTABLE", {
          src: a.src,
          alt: a.alt,
          width: a.width,
          height: a.height,
          style: Lf(a.style),
          imageLink: t.href
        });
      }
      return n("LINK", "MUTABLE", {
        url: t.href
      });
    }
    if (r === "img" && !CA(t))
      return n("IMAGE", "IMMUTABLE", {
        src: t.src,
        alt: t.alt,
        width: t.width,
        height: t.height,
        style: Lf(t.style)
      });
    if (r === "iframe")
      return n("MEDIA", "IMMUTABLE", {
        html: t.outerHTML
      });
    if (r === "hr")
      return n("SEPARATOR", "IMMUTABLE");
    if (r === "blockquote")
      return n("BLOCKQUOTE", "IMMUTABLE");
  },
  htmlToBlock: (r, t) => {
    if (["img", "iframe", "hr"].includes(r) || kf(t))
      return "atomic";
    if (t.textContent === " ")
      return "br";
    if (r === "p" && t.style["text-align"] !== void 0)
      return {
        type: "paragraph",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "h2" && t.style["text-align"] !== void 0)
      return {
        type: "header-two",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "h3" && t.style["text-align"] !== void 0)
      return {
        type: "header-three",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "h4" && t.style["text-align"] !== void 0)
      return {
        type: "header-four",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "p")
      return "paragraph";
  }
})(e), wA = rr("children[0]"), qA = er(rr("children[0].nodeName"), dt("IMG")), OA = er(rr("parentElement.nodeName"), dt("A")), Df = Rg(De);
new cr([ut, yg, lt, ct, ft]);
new cr([ut, mg, lt, ct, ft]);
const xA = (e) => Vf({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (qA(t)) {
        const a = wA(t);
        return n("IMAGE", "IMMUTABLE", {
          src: a.src,
          alt: a.alt,
          width: a.width,
          height: a.height,
          style: Df(a.style),
          imageLink: t.href
        });
      }
      return n("LINK", "MUTABLE", {
        url: t.href
      });
    }
    if (r === "img" && !OA(t))
      return n("IMAGE", "IMMUTABLE", {
        src: t.src,
        alt: t.alt,
        width: t.width,
        height: t.height,
        style: Df(t.style)
      });
    if (r === "iframe")
      return n("MEDIA", "IMMUTABLE", {
        html: t.outerHTML
      });
    if (r === "hr")
      return n("SEPARATOR", "IMMUTABLE");
    if (r === "blockquote")
      return n("BLOCKQUOTE", "IMMUTABLE");
  },
  htmlToBlock: (r, t) => {
    if (["img", "iframe", "hr"].includes(r))
      return "atomic";
    if (t.textContent === " ")
      return "br";
    if (r === "p" && t.style["text-align"] !== void 0)
      return {
        type: "paragraph",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "h2" && t.style["text-align"] !== void 0)
      return {
        type: "header-two",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "h3" && t.style["text-align"] !== void 0)
      return {
        type: "header-three",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "h4" && t.style["text-align"] !== void 0)
      return {
        type: "header-four",
        data: {
          textAlign: t.style["text-align"]
        }
      };
    if (r === "p")
      return "paragraph";
  }
})(e), PA = bo({
  paragraph: {
    element: "p"
  }
}), Eg = (e, r = !1) => {
  const t = r ? xA(e) : IA(e);
  return t.set("blockMap", t.getBlockMap().filter((n) => !(!["atomic", "br"].includes(n.getType()) && n.getText() === "")));
}, Cg = (e, r = !1) => jf(Eg(e, r)), Tg = (e) => $.createWithContent(Eg(e)), os = ({
  html: e,
  perfEnabled: r,
  useRichTextStyle: t
}) => {
  if (!e)
    return null;
  if (!Ar.canUseDom()) {
    const n = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>", a = /<img([\S ]*?) src="[\S]+?"/gm, i = `<img $1 src="${n}"`;
    return e = e.replaceAll(a, i), e = e.replaceAll(`
`, "<br/>"), r && (e = e.replace(/<(img|iframe)([\S ]+?) (src=")/gm, "<$1 $2 data-$3")), /* @__PURE__ */ d("section", {
      className: we({
        "kiss-RichText": t
      }),
      children: br(e)
    });
  }
  return /* @__PURE__ */ d("section", {
    className: we({
      "kiss-RichText": t
    }),
    children: /* @__PURE__ */ d(Nr, {
      editorState: $.set(Tg(e), {
        decorator: r ? TA : SA
      }),
      onChange: () => null,
      blockRenderMap: Ff.merge(PA),
      blockStyleFn: (n) => {
        switch (n.getData().get("textAlign")) {
          case "right":
            return "draft-align-right";
          case "center":
            return "draft-align-center";
          case "left":
            return "draft-align-left";
          default:
            return "";
        }
      },
      readOnly: !0
    })
  });
};
os.propTypes = {
  useRichTextStyle: m.bool
};
os.defaultProps = {
  useRichTextStyle: !0
};
const Sg = (e) => {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}, gt = (e) => {
  var r;
  return {
    ...e,
    props: {
      ...Qb([
        "allow",
        "allowFullScreen",
        "className",
        "style",
        "sandbox",
        "frameBorder",
        "height",
        "scrolling",
        "title",
        "width"
      ])(e == null ? void 0 : e.props),
      src: Qf((r = e == null ? void 0 : e.props) == null ? void 0 : r.src)
    }
  };
}, RR = (e) => Ar.canUseDom() ? Sg(e) ? JSON.parse(e) : Cg(e, !0) : {}, kA = (e) => {
  if (!Ar.canUseDom())
    return null;
  if (!e || De(e))
    return $.createEmpty();
  try {
    return $.createWithContent(
      Sg(e) ? lo(JSON.parse(e)) : lo(Cg(e, !0))
    );
  } catch {
    return $.createEmpty();
  }
}, Ig = (e) => $.set(e, {
  decorator: new cr([
    x1,
    K1,
    F1,
    R1,
    gg
  ])
}), LA = (e) => {
  const r = e.getCurrentContent();
  return $.push(
    e,
    lr.setBlockType(
      r,
      r.getSelectionAfter(),
      "unstyled"
    ),
    "change-block-type"
  );
}, DA = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection();
  return r.getBlockForKey(t.getStartKey()).getData().get("alignmentStyle");
}, MA = (e) => {
  const t = e.getSelection().getAnchorKey();
  return e.getCurrentContent().getBlockForKey(t);
}, ss = (e) => {
  const r = MA(e), t = e.getSelection(), n = t.getStartOffset(), a = t.getEndOffset();
  return r.getText().slice(n, a);
}, ht = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection().getStartKey(), n = e.getSelection().getStartOffset();
  return r.getBlockForKey(t).getEntityAt(n);
}, pr = (e) => {
  const r = e.getCurrentContent(), t = ht(e);
  return t ? r.getEntity(t) : void 0;
}, us = (e, r) => {
  let t;
  const n = e.getCurrentContent(), a = e.getSelection(), i = n.getBlockForKey(a.getFocusKey());
  return i.findEntityRanges(
    (o) => o.getEntity() === r,
    (o, s) => {
      t = i.getText().slice(o, s);
    }
  ), t;
}, pt = (e, r, t) => {
  const n = e.getBlockForKey(
    r.getSelection().getFocusKey()
  );
  if (!n)
    return !1;
  const a = n.getEntityAt(
    r.getSelection().getStartOffset()
  );
  return t === a;
}, ER = (e) => er(
  rr("blocks"),
  l1((r, t) => `${r}${t.text}`, ""),
  De
)(e), BA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockBefore(n);
  return (a == null ? void 0 : a.get("type")) === "atomic";
}, FA = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection(), n = r.getBlockForKey(
    t.getAnchorKey()
  ), a = n.getEntityAt(t.getStartOffset());
  let i = null;
  n.findEntityRanges(
    (s) => s.getEntity() === a,
    (s, u) => {
      i = t.merge({
        anchorOffset: s,
        focusOffset: u
      });
    }
  );
  const o = lr.applyEntity(
    r,
    i,
    null
  );
  return $.push(e, o, "apply-entity");
}, wg = (e) => {
  const r = e.getCurrentContent(), n = r.getSelectionBefore().getAnchorKey(), a = r.getBlockForKey(n);
  return er(rg, De)(a.getText());
}, $A = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockForKey(n);
  return er(rg, De)(a.getText());
}, jA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey();
  return !r.getBlockBefore(n);
}, WA = (e) => {
  var u, l, f;
  const r = e.getSelection(), t = r.getAnchorKey(), a = e.getCurrentContent().getBlockForKey(t), i = (u = a == null ? void 0 : a.get("text")) == null ? void 0 : u.length, o = (l = r == null ? void 0 : r.getStartOffset()) != null ? l : 0, s = (f = r == null ? void 0 : r.getEndOffset()) != null ? f : 0;
  return i === s - o;
}, qg = (e) => {
  const r = e.getCurrentContent().getBlockMap().delete(e.getCurrentContent().getSelectionBefore().getFocusKey()), t = e.getCurrentContent().merge({
    blockMap: r
  });
  return $.push(
    e,
    t,
    "remove-range"
  );
}, _o = (e, r) => {
  const t = e.getCurrentContent(), n = t.getBlockForKey(r);
  let a = mr.createEmpty(n.getKey());
  a = a.merge({
    anchorKey: n.getKey(),
    anchorOffset: 0,
    focusKey: n.getKey(),
    focusOffset: n.getLength()
  });
  const i = lr.removeRange(
    t,
    a,
    "backward"
  ), o = i.getBlockMap().delete(r), s = i.merge({
    blockMap: o
  });
  return $.push(
    e,
    s,
    "remove-range"
  );
}, Og = (e, r, t = 0) => {
  const n = mr.createEmpty(r).merge({
    focusOffset: t
  });
  return $.forceSelection(e, n);
}, xg = (e, r, t) => {
  const a = e.getCurrentContent().mergeEntityData(r, t), i = e.getSelection(), o = $.push(
    e,
    a,
    "change-block-data"
  );
  return $.forceSelection(o, i);
}, NA = (e, r, t) => {
  const n = e.getCurrentContent().getEntity(r).getData(), a = e.getCurrentContent().replaceEntityData(r, Yb(t)(n));
  return $.push(e, a, "apply-entity");
}, uo = (e) => {
  var s, u;
  const t = e.getSelection().getAnchorKey(), n = e.getCurrentContent().getKeyBefore(t), a = e.getCurrentContent().getKeyAfter(t), i = e.getCurrentContent().getBlockBefore(t);
  if (!a && !n) {
    const l = Ig($.createEmpty());
    return $.moveSelectionToEnd(l);
  }
  let o = mr.createEmpty(n || a);
  return o = o.merge({
    anchorOffset: (s = i == null ? void 0 : i.getLength()) != null ? s : 0,
    focusOffset: (u = i == null ? void 0 : i.getLength()) != null ? u : 0
  }), $.forceSelection(
    _o(e, t),
    o
  );
}, jr = (e) => {
  var t;
  const r = (t = e == null ? void 0 : e.get("data")) == null ? void 0 : t.src;
  return GA(r) || KA(r);
}, KA = (e) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e), GA = (e) => /<img.*?src="(.*?)"[^\\>]+>/.test(e), Wr = (e) => {
  var t;
  const [, r] = (t = e == null ? void 0 : e.match(/src\s*=\s*"(.+?)"/)) != null ? t : [];
  return r || e;
}, Pg = (e) => {
  var r, t;
  return !!((r = e == null ? void 0 : e.get("data")) != null && r.embedlyHtml) || !!((t = e == null ? void 0 : e.get("data")) != null && t.html);
}, Mf = (e, r, t = {}) => {
  const n = new Vg({
    key: Jg(),
    type: "unstyled",
    text: "",
    ...t
  }), a = e.getCurrentContent(), i = a.getBlockMap(), o = Oh().withMutations((s) => {
    for (let [u, l] of i.entries())
      s.set(u, l), r === u && s.set(n.getKey(), n);
  });
  return $.forceSelection(
    $.push(
      e,
      Wf.createFromBlockArray(Array.from(o.values())).set("selectionBefore", a.getSelectionBefore()).set("selectionAfter", a.getSelectionAfter())
    ),
    mr.createEmpty(n.getKey())
  );
}, UA = (e, r = {}) => {
  const a = e.getCurrentContent().createEntity(
    "VIDEO",
    "MUTABLE",
    r
  ).getLastCreatedEntityKey();
  return $f.insertAtomicBlock(e, a, " ");
}, zA = 8, HA = 38, YA = 40, VA = (e) => (r) => {
  const t = pr(e);
  return ![zA, HA, YA].includes(
    r.keyCode
  ) && jr(t) ? "new-text-block" : Xg(r);
}, JA = (e) => (r, t) => {
  const n = pr(t);
  if (r === "new-text-block" && jr(n))
    return "handled";
  if (r === "backspace" && jr(n) || Pg(n))
    return e(uo(t)), "handled";
  if (r === "backspace" && (n == null ? void 0 : n.getType()) === "IMAGE")
    return e(FA(t)), "handled";
  if (r === "backspace" && WA(t) && BA(t) || r === "backspace" && jA(t) && $A(t))
    return e(uo(t)), "handled";
  const a = Ge.handleKeyCommand(t, r);
  return a ? (e(a), "handled") : "not-handled";
}, XA = (e) => (r, t) => {
  const n = t.getCurrentContent(), a = t.getSelection().getAnchorKey(), i = n.getBlockForKey(a), o = pr(t);
  return Pg(o) || jr(o) ? (e(Mf(t, a)), "handled") : i.getText() === "" && ["unordered-list-item", "blockquote"].includes(i.getType()) ? (e(LA(t)), "handled") : ["header-two", "header-three"].includes(i.getType()) ? (e(Mf(t, a)), "handled") : "not-handled";
}, kg = Uf`
  .public-DraftEditorPlaceholder-root {
    ${Br.fontStyles.light};
    font-size: ${x(20)};
    line-height: ${x(32)};
    color: var(--color-grey-500);
    position: absolute;
    z-index: -1;
  }

  .public-DraftEditor-content {
    font-size: ${x(20)};
    line-height: ${x(32)};
  }

  .DraftEditor-editorContainer {
    ${Br.fontStyles.light};
    color: var(--color-grey-900);
    cursor: text;
    word-break: break-word;
    letter-spacing: 0;

    .public-DraftStyleDefault-ul {
      margin-top: ${x(10)};
      margin-bottom: ${x(10)};
      list-style: disc;

      .public-DraftStyleDefault-unorderedListItem {
        margin-left: ${x(20)};
      }
    }

    .u-Draft__image-read, .kiss-Draft__media-read {
      margin: ${x(40)} auto;
      text-align: center;
    }
    
    .u-Draft__image, .u-Draft__image-read {
      position: relative;
      width: 100%;

      img {
        height: auto;
        max-width: 100%;
      }
    }

    .u-Draft__image__menu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      summary {
        pointer-events: none;
      }
    }

    .u-Draft__image, .kiss-Draft__media {
      margin: ${x(34)} auto;
      display: flex;
      justify-content: center;
      
      img {
        display: block;
      }
    }

    .kiss-Draft__media-focus {
      padding: ${x(2)};
      border: ${x(4)} solid var(--color-grey-000);
      cursor: pointer;
      transition: all ease-in-out 100ms;
      > iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }

    .u-Draft__image-focus {
      text-align: center;
      position: relative;
      width: fit-content;
      padding: ${x(2)};
      border: ${x(4)} solid var(--color-grey-000);
      cursor: pointer;
      transition: all var(--transition);
    }

    .u-Draft__image-focus:hover, .kiss-Draft__media-focus:hover {
      border-color: var(--color-primary-300);
    }

    .u-Draft__image-focus__focused, .kiss-Draft__media-focus__focused {
      border-color: var(--color-primary-500) !important;
      caret-color: transparent;
    }

    blockquote {
      font-style: italic;
      padding-left: ${x(15)};
      margin-left: ${x(50)};
      margin-top: ${x(20)};
      margin-bottom: ${x(20)};
      border-left: ${x(3)} solid var(--color-grey-300);
    }
  }

  .DraftEditor-editorContainer__disabled {
    color: var(--color-grey-500);
    cursor: not-allowed;

    a {
      color: var(--color-grey-400);
      &:hover,
      &:focus {
        color: var(--color-grey-400);
      }
    }
  }

  .DraftEditor-editorContainer__no-richText {
    font-size: ${x(14)};
  }

  .DraftEditor-editorContainer__compact {
    line-height: ${x(20)};
  }

  li.DraftEditor-editorContainer__compact,
  li.DraftEditor-editorContainer__richText {
    .public-DraftStyleDefault-block {
      margin: 0;
    }
  }

  .u-Editor__compact,
  .u-Editor__root {
    .public-DraftStyleDefault-ul {
      margin: 0;
    }
  }

  .public-DraftStyleDefault-block {
    margin: ${x(10)} auto;
  }
`, Lg = ({ isDisabled: e, useRichTextStyle: r, compact: t }) => (n) => {
  const a = n.getData().get("alignmentStyle");
  return we({
    "DraftEditor-editorContainer__disabled": e,
    "DraftEditor-editorContainer__richText": r,
    "DraftEditor-editorContainer__no-richText": !r,
    "DraftEditor-editorContainer__compact": t,
    [a]: a
  });
}, ZA = Re.div`
  border-radius: var(--border-radius-s);
  cursor: text;

  &.u-Editor--hasBorder {
    border: var(--border);
    padding: ${x(15)};

    &.u-Editor--focused,
    &:focus-within {
      border: var(--border-active);
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    &.u-Editor--hasError {
      border: var(--border-danger);
    }
  }
`, Dg = yo.forwardRef(({
  className: e,
  hasError: r,
  onFocus: t,
  onBlur: n,
  rawValue: a,
  initialValue: i,
  placeholder: o,
  withoutBorder: s,
  useRichTextStyle: u,
  isDisabled: l,
  compact: f,
  ...h
}, g) => {
  const p = mo(null), [{
    editorState: _,
    focus: v,
    disabled: A
  }, b] = V(H), y = (C) => b(Y(C));
  ve(() => {
    h.onChange(a ? jf(_.getCurrentContent()) : _.getCurrentContent());
  }, [_]), ve(() => {
    b(Bh(g || p));
  }, [g, p]), ve(() => {
    y(Ig(kA(i)));
  }, [i]);
  const E = () => {
    p != null && p.current ? p.current.focus() : g != null && g.current && g.current.focus();
  };
  return /* @__PURE__ */ M(ZA, {
    className: we("u-Editor", e, {
      "u-Editor--hasError": r,
      "u-Editor--focused": v,
      "u-Editor--hasBorder": !s
    }),
    onClick: E,
    children: [/* @__PURE__ */ d(kg, {}), /* @__PURE__ */ d(Rh, {
      "data-test-id": h["data-test-id"],
      tag: "section",
      modifier: "tertiary",
      noMargin: !0,
      className: we("u-Editor__root", {
        "u-Editor__compact": f
      }),
      children: /* @__PURE__ */ d(Nr, {
        stripPastedStyles: !0,
        ref: g || p,
        editorState: _,
        placeholder: o,
        readOnly: l || A,
        keyBindingFn: VA(_),
        handleKeyCommand: JA(y),
        handleReturn: XA(y),
        onChange: y,
        onFocus: () => {
          b(Is(!0)), t();
        },
        onBlur: () => {
          b(Is(!1)), n();
        },
        blockStyleFn: Lg({
          isDisabled: l,
          useRichTextStyle: u,
          compact: f
        }),
        blockRenderMap: Zf
      })
    })]
  });
});
Dg.propTypes = {
  onChange: m.func,
  onFocus: m.func,
  onBlur: m.func,
  onInit: m.func,
  hasError: m.bool,
  initialValue: m.oneOfType([m.string, m.object]),
  rawValue: m.bool,
  placeholder: m.string,
  withoutBorder: m.bool,
  useRichTextStyle: m.bool,
  isDisabled: m.bool,
  compact: m.bool
};
Dg.defaultProps = {
  onChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
  hasError: !1,
  initialValue: $.createEmpty(),
  rawValue: !0,
  placeholder: "",
  withoutBorder: !1,
  useRichTextStyle: !1,
  isDisabled: !1,
  compact: !1
};
const QA = Re.div`
  display: flex;

  > * {
    margin-left: calc(-1 * var(--border-width, 1px));
  }

  :first-child > :first-child {
    margin-left: 0;
  }

  margin-right: ${x(10)};

  @media (min-width: ${x(Ke.S.min)}) {
    margin-right: ${x(20)};

    > :not(:first-child) {
      margin-left: calc(-1 * var(--border-width, 1px));
    }
  }

  > :hover:not(:disabled),
  > :focus:not(:disabled) {
    z-index: 1;
  }

  .Editor__toolbar__button--isSelected {
    z-index: 2;
  }
`, Ir = ({
  disabled: e,
  label: r,
  onChange: t
}) => {
  var s;
  const [{
    editorState: n,
    disabled: a
  }, i] = V(H), o = (s = DA(n)) != null ? s : "k-u-align-left";
  return /* @__PURE__ */ d(Te, {
    icon: r,
    disabled: a || e,
    active: o === r,
    onToggle: () => {
      t();
      const u = n.getCurrentContent(), l = n.getSelection();
      i(Y($.push(n, lr.setBlockData(u, l, bo({
        alignmentStyle: r
      })), "change-inline-style")));
    }
  }, r);
};
Ir.propTypes = {
  label: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
Ir.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const ls = (e) => /* @__PURE__ */ d(Ir, {
  label: "k-u-align-center",
  ...e
});
ls.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ls.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const cs = (e) => /* @__PURE__ */ d(Ir, {
  label: "k-u-align-left",
  ...e
});
cs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
cs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const fs = (e) => /* @__PURE__ */ d(Ir, {
  label: "k-u-align-right",
  ...e
});
fs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
fs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const ds = ({
  disabled: e,
  onChange: r
}) => {
  const [{
    editorState: t,
    disabled: n
  }, a] = V(H), i = t.getCurrentInlineStyle();
  return /* @__PURE__ */ d(Te, {
    active: i.has("BOLD"),
    icon: "format_bold",
    onToggle: (o) => {
      r(), a(Y(Ge.toggleInlineStyle(t, o)));
    },
    style: "BOLD",
    disabled: n || e
  }, "format_bold");
};
ds.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ds.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const gs = ({
  disabled: e,
  onChange: r
}) => {
  const [{
    editorState: t,
    disabled: n
  }, a] = V(H), i = t.getCurrentInlineStyle();
  return /* @__PURE__ */ d(Te, {
    active: i.has("ITALIC"),
    icon: "format_italic",
    onToggle: (o) => {
      r(), a(Y(Ge.toggleInlineStyle(t, o)));
    },
    style: "ITALIC",
    disabled: n || e
  }, "format_italic");
};
gs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
gs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const hs = ({
  disabled: e,
  onChange: r
}) => {
  const [{
    editorState: t,
    disabled: n
  }, a] = V(H), i = t.getCurrentContent(), o = t.getSelection(), u = i.getBlockForKey(o.getStartKey()).get("type") === "blockquote";
  return /* @__PURE__ */ d(Te, {
    icon: "quote",
    active: u,
    disabled: n || e,
    onToggle: () => {
      r(), a(Y(Ge.toggleBlockType(t, "blockquote")));
    }
  });
};
hs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
hs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const eR = Re(Eh)`
  summary.Editor__toolbar__tagListToggle {
    border-radius: ${x(8)};

    .Editor__toolbar__tagListToggle__button {
      pointer-events: none;
      width: ${x(75)};
    }

    &:focus {
      z-index: 3;
    }
  }

  &[open] {
    summary.Editor__toolbar__tagListToggle {
      .Editor__toolbar__tagListToggle__button {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  ${({
  disabled: e
}) => e && zf`
      pointer-events: none;
      cursor: not-allowed;
    `}

  .Editor__toolbar__tagsList {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    width: ${x(75)};
    list-style: none;
    margin: 0;
    padding: 0;

    & li:last-child .Editor__toolbar__tagsList__Item {
      border-bottom: var(--border, ${x(1)} solid var(--color-grey-300);
    }

    .Editor__toolbar__tagsList__Item {
      width: 100%;
      position: relative;
      padding: ${x(15)} ${x(20)};
      background-color: var(--color-grey-000);
      border: ${x(1)} solid transparent;
      border-left: var(--border, ${x(1)} solid var(--color-grey-300);
      border-right: var(--border, ${x(1)} solid var(--color-grey-300);
      text-align: left;
      cursor: pointer;
      transition: border var(--transition), background-color var(--transition);

      appareance: none;
      box-sizing: border-box;

      &:hover,
      &:focus {
        background-color: var(--color-primary-100);
        border-color: var(--color-primary-700) !important;
      }

      &:focus {
        z-index: 3;
      }

      &[aria-selected="true"] {
        svg,
        path {
          fill: var(--color-primary-500);
        }
      }

    }

  }
`, Bf = (e) => {
  switch (e) {
    case "header-one":
      return /* @__PURE__ */ d(qh, {});
    case "header-two":
      return /* @__PURE__ */ d(wh, {});
    case "header-three":
      return /* @__PURE__ */ d(Ih, {});
    case "header-four":
      return /* @__PURE__ */ d(Sh, {});
    case "unstyled":
    default:
      return /* @__PURE__ */ d(Th, {});
  }
}, ps = ({
  disabled: e,
  onChange: r,
  tags: t
}) => {
  const [{
    editorState: n,
    disabled: a
  }, i] = V(H), o = n.getCurrentContent(), s = n.getSelection(), u = o.getBlockForKey(s.getStartKey()).getType();
  ve(() => {
    r(u);
  }, [u]);
  const l = (f) => () => {
    i(Y(Ge.toggleBlockType(n, f)));
  };
  return /* @__PURE__ */ d(eR, {
    summaryRender: ({
      open: f
    }) => /* @__PURE__ */ M(tg, {
      className: "Editor__toolbar__tagListToggle__button",
      tabIndex: "-1",
      disabled: a || e,
      fit: "icon",
      tag: "span",
      active: f,
      children: [Bf(u), /* @__PURE__ */ d(Ch, {
        width: "6",
        direction: f ? "top" : "bottom"
      })]
    }),
    summaryProps: {
      className: "Editor__toolbar__tagListToggle"
    },
    disabled: a || e,
    children: /* @__PURE__ */ d("ul", {
      className: "Editor__toolbar__tagsList",
      children: t.map((f) => {
        const h = Bf(f);
        if (!!h)
          return /* @__PURE__ */ d("li", {
            children: /* @__PURE__ */ d("button", {
              onClick: l(f),
              type: "button",
              "aria-selected": f === u,
              className: "Editor__toolbar__tagsList__Item",
              children: h
            })
          }, f);
      })
    })
  }, o);
};
ps.propTypes = {
  tags: m.array,
  disabled: m.bool,
  onChange: m.func
};
ps.defaultProps = {
  tags: ["header-one", "header-two", "header-three", "header-four", "unstyled"],
  disabled: !1,
  onChange: () => null
};
const rR = Re.div`
  display: flex;
  overflow-y: scroll;
  padding: ${x(12)} 0;
  background-color: var(--color-grey-200);

  > :last-child {
    margin-right: 0;
  }

  @media (min-width: ${x(Ke.M.min)}) {
    overflow-y: initial;
    padding: ${x(15)} 0;
  }

  &.Editor-Toolbar__whiteMode {
    background-color: var(--color-grey-000);
  }

  &.Editor-Toolbar__centered {
    justify-content: center;
  }

  ${({
  whiteMode: e
}) => e && zf`
      background-color: var(--color-grey-000);
    `}
`, vs = ({
  disabled: e,
  onChange: r
}) => {
  const [{
    editorState: t,
    disabled: n
  }, a] = V(H), i = t.getCurrentContent(), o = t.getSelection(), s = i.getBlockForKey(o.getStartKey()).get("type");
  return /* @__PURE__ */ d(Te, {
    active: s === "unordered-list-item",
    icon: "format_list_bulleted",
    onToggle: (u) => {
      r(), a(Y(Ge.toggleBlockType(t, u)));
    },
    style: "unordered-list-item",
    disabled: e || n
  }, "format_list_bulleted");
};
vs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
vs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const he = ({
  whiteMode: e,
  disabled: r,
  className: t,
  centered: n,
  children: a
}) => {
  const [, i] = V(H);
  return ve(() => {
    i(yr(r));
  }, [r]), /* @__PURE__ */ d(rR, {
    className: we(t, {
      "Editor-Toolbar__whiteMode": e,
      "Editor-Toolbar__centered": n
    }),
    children: a
  });
};
he.Image = ts;
he.TagList = ps;
he.Bold = ds;
he.Italic = gs;
he.Quote = hs;
he.Left = cs;
he.Right = fs;
he.Center = ls;
he.UnorderedList = vs;
he.Link = as;
he.Button = rs;
he.Video = is;
he.Group = QA;
he.propTypes = {
  disabled: m.bool,
  whiteMode: m.bool,
  centered: m.bool,
  className: m.string
};
he.defaultProps = {
  disabled: !1,
  whiteMode: !1,
  centered: !1
};
var tR = Ce, Mg = tR("memoize", jd());
Mg.placeholder = me();
var nR = Mg;
const aR = nR((e) => {
  if (!Ar.canUseDom())
    return null;
  if (!e)
    return $.createEmpty();
  try {
    return $.createWithContent(lo(JSON.parse(e)), new cr([P1, G1, $1, E1, gg]));
  } catch {
    const t = Zg(`<p>${e}</p>`), n = Wf.createFromBlockArray(t);
    return $.createWithContent(n);
  }
}), iR = (e) => {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}, oR = (e) => {
  try {
    const t = JSON.parse(e).blocks.reduce((n, a) => `${n} ${a.text}`, "");
    return /* @__PURE__ */ d("div", {
      children: t
    });
  } catch {
    return /* @__PURE__ */ d("div", {
      children: e
    });
  }
}, Bg = ({
  text: e,
  useRichTextStyle: r,
  perfEnabled: t,
  isDisabled: n,
  compact: a,
  configResponsiveImageHandler: i
}) => Ar.canUseDom() ? iR(e) ? /* @__PURE__ */ M(go, {
  configResponsiveImageHandler: i,
  children: [/* @__PURE__ */ d(kg, {}), /* @__PURE__ */ d("section", {
    className: we("u-Editor__root", {
      "u-Editor__compact": a
    }),
    children: /* @__PURE__ */ d(Nr, {
      onChange: () => null,
      editorState: aR(e),
      blockStyleFn: Lg({
        isDisabled: n,
        useRichTextStyle: r,
        compact: a
      }),
      blockRenderMap: Zf,
      readOnly: !0
    })
  })]
}) : /* @__PURE__ */ d(go, {
  configResponsiveImageHandler: i,
  children: /* @__PURE__ */ d(os, {
    html: e == null ? void 0 : e.replaceAll(`
`, "<br/>"),
    perfEnabled: t,
    useRichTextStyle: r
  })
}) : oR(e);
Bg.propTypes = {
  text: m.oneOfType([m.object, m.string]).isRequired,
  useRichTextStyle: m.bool,
  isDisabled: m.bool,
  perfEnabled: m.bool,
  compact: m.bool
};
Bg.defaultProps = {
  useRichTextStyle: !1,
  isDisabled: !1,
  perfEnabled: !1,
  compact: !1
};
const sR = Uf`
  .DraftEditor-wrapper {
      .public-DraftEditorPlaceholder-root {
        ${Br.fontStyles[700]};
        font-size: ${x(28)};
        @media (min-width: ${x(Ke.M.min)}) {
          font-size: ${x(36)};
        }
        @media (min-width: ${x(Ke.L.min)}) {
          font-size: ${x(48)};
        }
      }
  }
  .DraftEditor-editorContainer__title {
    ${Br.fontStyles[700]};
    font-size: ${x(28)};
    @media (min-width: ${x(Ke.M.min)}) {
      font-size: ${x(36)};
    }
    @media (min-width: ${x(Ke.L.min)}) {
      font-size: ${x(48)};
    }
  }
`, Fg = ({
  onFocus: e,
  onBlur: r,
  onChange: t,
  initialValue: n,
  placeholder: a
}) => {
  const [i, o] = le($.createEmpty());
  return ve(() => {
    o(Tg(n));
  }, [n]), /* @__PURE__ */ M("div", {
    className: "DraftEditor-wrapper",
    children: [/* @__PURE__ */ d(sR, {}), /* @__PURE__ */ d(Nr, {
      editorState: i,
      onChange: (s) => {
        o(s), t(kh(s.getCurrentContent(), {
          defaultBlockTag: "span",
          blockStyleFn: () => ({
            style: {
              display: "block"
            }
          })
        }));
      },
      onFocus: e,
      onBlur: r,
      placeholder: a,
      blockStyleFn: () => "DraftEditor-editorContainer__title"
    })]
  });
};
Fg.propTypes = {
  initialValue: m.string,
  placeholder: m.string,
  onFocus: m.func,
  onBlur: m.func,
  onChange: m.func
};
Fg.defaultProps = {
  initalValue: "",
  placeholder: "",
  onFocus: () => null,
  onBlur: () => null,
  onChange: () => null
};
const uR = {
  button_link: {
    title: "Add a button",
    text: "Button text",
    url: "button URL"
  },
  link: {
    text: {
      label: "Your text"
    },
    title: "Add a link",
    error: "This link seems incorrect",
    button: {
      visit: "Visit link:",
      delete: "Delete link"
    }
  },
  controls: {
    format_bold: "Bold",
    activated_format_bold: "Bold (activated)",
    format_italic: "Italic",
    activated_format_italic: "Italic (activated)",
    format_list_bulleted: "Add a list",
    activated_format_list_bulleted: "Add a list (activated)",
    ["k-u-align-left"]: "Left Alignment",
    ["activated_k-u-align-left"]: "Left Alignment (activated)",
    ["k-u-align-center"]: "Alignment in the center",
    ["activated_k-u-align-center"]: "Alignment in the center (activated)",
    ["k-u-align-right"]: "Right Alignment",
    ["activated_k-u-align-right"]: "Right Alignment (activated)",
    image: "Add an image",
    activated_image: "Add an image (activated)",
    video: "Add a video",
    activated_video: "Add a video (activated)",
    link: "Add a link",
    activated_link: "Add a link (activated)",
    quote: "Add a quote",
    activated_quote: "Add a quote (activated)"
  },
  image_upload: {
    title: "Insert a picture",
    button_title: "Insert a picture",
    button_file: "From my computer",
    button_url: "From a URL",
    modify_image: "Change image",
    modify_label: "Modify the image description",
    remove_image: "Remove the image",
    add_label: "Add a description to the image",
    label: "URL:",
    url: "URL:",
    preview: "Preview",
    upload: "Select a file on your computer",
    max_size: "The size of your image exceeds 5 MB",
    dimension_error: "Image dimensions too big (1000x4000 max)",
    description: {
      title: "Image description",
      label: /* @__PURE__ */ M("span", {
        children: ["Image description ", /* @__PURE__ */ d("span", {
          className: "k-u-weight-light",
          children: "(optional)"
        })]
      }),
      placeholder: 'Ex: Team photo "For us, cycling is freedom". ',
      helper: "Write a brief description of your image to make your content accessible to people with visual disabilities. Write the minimum text necessary to understand the context accurately (title, quote, graphic, description of the (title, quote, graphic, description of the image...). If your image is purely decorative, you can skip this step."
    },
    help_file: {
      formats: "Available formats: jpg, jpeg, gif, png, bmp",
      width: "Maximum weight: 5 MB",
      size: "Maximum width and height: 1000x4000 pixels"
    }
  },
  image: {
    invalid_url: "Your url doesn't seem correct",
    invalid_extension: "The format of your image is not supported",
    max_size: "The size of your image exceeds 5 MB"
  },
  media_upload: {
    title: "Insert a media"
  },
  video: {
    problem: "An error occurred while loading the content. Please try again",
    invalid_url: "Your url doesn't seem correct"
  },
  submit: "Validate",
  form: {
    tooltip_action_label: "More informations",
    button_loading: "Loading"
  }
}, $g = ({
  onInit: e,
  translations: r,
  configResponsiveImageHandler: t,
  children: n
}) => (ve(() => {
  e();
}, []), /* @__PURE__ */ d(go, {
  translations: {
    ...uR,
    ...r
  },
  configResponsiveImageHandler: t,
  children: n
})), jg = {
  props: {
    onInit: m.func,
    configResponsiveImageHandler: m.shape({}),
    translations: m.shape()
  },
  defaultProps: {
    onInit: () => null,
    configResponsiveImageHandler: {},
    translations: {}
  }
};
$g.propTypes = jg.props;
$g.defaultProps = jg.defaultProps;
export {
  he as Controls,
  Bg as Displayer,
  $g as Editor,
  Dg as Playground,
  Fg as Title,
  wR as convertToHTML,
  SR as convertToRaw,
  jg as editorPropTypes,
  RR as getJSONContent,
  ER as isEditorEmpty
};
