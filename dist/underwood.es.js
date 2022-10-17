import { EditorState as F, DefaultDraftBlockRenderMap as Rf, RichUtils as Ge, Modifier as lr, AtomicBlockUtils as Ef, SelectionState as br, CompositeDecorator as cr, convertToRaw as Cf, Editor as Kr, convertFromRaw as eo, ContentBlock as Lg, genKey as Dg, ContentState as Tf, getDefaultKeyBinding as $g, convertFromHTML as Mg } from "draft-js";
import { convertToRaw as DR } from "draft-js";
import m from "prop-types";
import uo, { createContext as Bg, useReducer as Fg, useContext as V, useEffect as ve, useState as le, useRef as lo } from "react";
import { Title as kr, Button as ke, pxToRem as x, BoldIcon as Wg, ItalicIcon as jg, ListIcon as Ng, AlignLeftIcon as Kg, AlignCenterIcon as Gg, AlignRightIcon as Ug, ImageIcon as zg, VideoIcon as Hg, LinkIcon as Yg, EditorButtonIcon as Vg, BlockquoteIcon as Jg, Field as yr, TextInputWithButton as Xg, KissKissLoadingAnimation as Zg, VisuallyHidden as Qg, ArrowContainer as eh, Text as ro, ScreenConfig as Ke, Modal as J, ButtonGroup as to, ImageDropUploader as rh, AlertBox as Sf, DropdownMenu as Je, EditIconNext as th, LinkIconNext as hs, CrossIconNext as nh, GarbageIconNext as ah, parseHtml as Ar, ResponsiveIframeContainer as Gr, CONTAINER_PADDING as If, CONTAINER_PADDING_THIN as ih, useLazyObserver as wf, LazyLoader as oh, domElementHelper as Rr, TYPOGRAPHY as Br, Paragraph as sh, Details as uh, ArrowIcon as lh, ParagraphIcon as ch, Title4Icon as fh, Title3Icon as dh, Title2Icon as gh, Title1Icon as hh } from "@kisskissbankbank/kitten";
import we from "classnames";
import Re, { createGlobalStyle as qf, css as Of } from "styled-components";
import { Map as co, OrderedMap as ph } from "immutable";
import { useField as Fr, ErrorMessage as xf, Formik as fr, useFormikContext as vh, Form as Pf } from "formik";
import Er from "linkify-it";
import Cr from "tlds";
import * as Wr from "yup";
import _h from "qs";
import { convertFromHTML as kf } from "draft-convert";
import { convertToHTML as MR } from "draft-convert";
import { stateToHTML as yh } from "draft-js-export-html";
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ur = { exports: {} }, ur = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var At, ps;
function Lf() {
  if (ps)
    return At;
  ps = 1;
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
  return At = a() ? Object.assign : function(i, o) {
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
  }, At;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function mh() {
  if (vs)
    return ur;
  vs = 1, Lf();
  var e = uo, r = 60103;
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
var Rt = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function bh() {
  return _s || (_s = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = uo, t = Lf(), n = 60103, a = 60106;
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
      function M(c) {
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
      var fe = 0, $e, tr, Me, nr, ar, Ue, ze;
      function ie() {
      }
      ie.__reactDisabledLog = !0;
      function qe() {
        {
          if (fe === 0) {
            $e = console.log, tr = console.info, Me = console.warn, nr = console.error, ar = console.group, Ue = console.groupCollapsed, ze = console.groupEnd;
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
                value: $e
              }),
              info: t({}, c, {
                value: tr
              }),
              warn: t({}, c, {
                value: Me
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
      var B = !1, X;
      {
        var pe = typeof WeakMap == "function" ? WeakMap : Map;
        X = new pe();
      }
      function oe(c, R) {
        if (!c || B)
          return "";
        {
          var S = X.get(c);
          if (S !== void 0)
            return S;
        }
        var D;
        B = !0;
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
            for (var W = xe.stack.split(`
`), ge = D.stack.split(`
`), Z = W.length - 1, re = ge.length - 1; Z >= 1 && re >= 0 && W[Z] !== ge[re]; )
              re--;
            for (; Z >= 1 && re >= 0; Z--, re--)
              if (W[Z] !== ge[re]) {
                if (Z !== 1 || re !== 1)
                  do
                    if (Z--, re--, re < 0 || W[Z] !== ge[re]) {
                      var Oe = `
` + W[Z].replace(" at new ", " at ");
                      return typeof c == "function" && X.set(c, Oe), Oe;
                    }
                  while (Z >= 1 && re >= 0);
                break;
              }
          }
        } finally {
          B = !1, T.current = z, O(), Error.prepareStackTrace = U;
        }
        var sr = c ? c.displayName || c.name : "", gs = sr ? L(sr) : "";
        return typeof c == "function" && X.set(c, gs), gs;
      }
      function de(c, R, S) {
        return oe(c, !1);
      }
      function ir(c) {
        var R = c.prototype;
        return !!(R && R.isReactComponent);
      }
      function j(c, R, S) {
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
              return j(c.type, R, S);
            case _:
              return de(c._render);
            case p: {
              var D = c, U = D._payload, z = D._init;
              try {
                return j(z(U), R, S);
              } catch {
              }
            }
          }
        return "";
      }
      var He = {}, K = w.ReactDebugCurrentFrame;
      function be(c) {
        if (c) {
          var R = c._owner, S = j(c.type, c._source, R ? R.type : null);
          K.setExtraStackFrame(S);
        } else
          K.setExtraStackFrame(null);
      }
      function Be(c, R, S, D, U) {
        {
          var z = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var N in c)
            if (z(c, N)) {
              var W = void 0;
              try {
                if (typeof c[N] != "function") {
                  var ge = Error((D || "React class") + ": " + S + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ge.name = "Invariant Violation", ge;
                }
                W = c[N](R, N, D, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                W = Z;
              }
              W && !(W instanceof Error) && (be(U), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", S, N, typeof W), be(null)), W instanceof Error && !(W.message in He) && (He[W.message] = !0, be(U), k("Failed %s type: %s", S, W.message), be(null));
            }
        }
      }
      var Ye = w.ReactCurrentOwner, Fe = Object.prototype.hasOwnProperty, Se = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, se, Ve, We;
      We = {};
      function _t(c) {
        if (Fe.call(c, "ref")) {
          var R = Object.getOwnPropertyDescriptor(c, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return c.ref !== void 0;
      }
      function qr(c) {
        if (Fe.call(c, "key")) {
          var R = Object.getOwnPropertyDescriptor(c, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return c.key !== void 0;
      }
      function je(c, R) {
        if (typeof c.ref == "string" && Ye.current && R && Ye.current.stateNode !== R) {
          var S = ee(Ye.current.type);
          We[S] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(Ye.current.type), c.ref), We[S] = !0);
        }
      }
      function Or(c, R) {
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
      function xr(c, R) {
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
      var yt = function(c, R, S, D, U, z, N) {
        var W = {
          $$typeof: n,
          type: c,
          key: R,
          ref: S,
          props: N,
          _owner: z
        };
        return W._store = {}, Object.defineProperty(W._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(W, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: D
        }), Object.defineProperty(W, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
      };
      function Pr(c, R, S, D, U) {
        {
          var z, N = {}, W = null, ge = null;
          S !== void 0 && (W = "" + S), qr(R) && (W = "" + R.key), _t(R) && (ge = R.ref, je(R, U));
          for (z in R)
            Fe.call(R, z) && !Se.hasOwnProperty(z) && (N[z] = R[z]);
          if (c && c.defaultProps) {
            var Z = c.defaultProps;
            for (z in Z)
              N[z] === void 0 && (N[z] = Z[z]);
          }
          if (W || ge) {
            var re = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
            W && Or(N, re), ge && xr(N, re);
          }
          return yt(c, W, ge, U, D, Ye.current, N);
        }
      }
      var ye = w.ReactCurrentOwner, Ie = w.ReactDebugCurrentFrame;
      function or(c) {
        if (c) {
          var R = c._owner, S = j(c.type, c._source, R ? R.type : null);
          Ie.setExtraStackFrame(S);
        } else
          Ie.setExtraStackFrame(null);
      }
      var mt;
      mt = !1;
      function bt(c) {
        return typeof c == "object" && c !== null && c.$$typeof === n;
      }
      function us() {
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
      function Sg(c) {
        {
          if (c !== void 0) {
            var R = c.fileName.replace(/^.*[\\\/]/, ""), S = c.lineNumber;
            return `

Check your code at ` + R + ":" + S + ".";
          }
          return "";
        }
      }
      var ls = {};
      function Ig(c) {
        {
          var R = us();
          if (!R) {
            var S = typeof c == "string" ? c : c.displayName || c.name;
            S && (R = `

Check the top-level render call using <` + S + ">.");
          }
          return R;
        }
      }
      function cs(c, R) {
        {
          if (!c._store || c._store.validated || c.key != null)
            return;
          c._store.validated = !0;
          var S = Ig(R);
          if (ls[S])
            return;
          ls[S] = !0;
          var D = "";
          c && c._owner && c._owner !== ye.current && (D = " It was passed a child from " + ee(c._owner.type) + "."), or(c), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, D), or(null);
        }
      }
      function fs(c, R) {
        {
          if (typeof c != "object")
            return;
          if (Array.isArray(c))
            for (var S = 0; S < c.length; S++) {
              var D = c[S];
              bt(D) && cs(D, R);
            }
          else if (bt(c))
            c._store && (c._store.validated = !0);
          else if (c) {
            var U = q(c);
            if (typeof U == "function" && U !== c.entries)
              for (var z = U.call(c), N; !(N = z.next()).done; )
                bt(N.value) && cs(N.value, R);
          }
        }
      }
      function wg(c) {
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
            Be(S, c.props, "prop", D, c);
          } else if (R.PropTypes !== void 0 && !mt) {
            mt = !0;
            var U = ee(R);
            k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qg(c) {
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
      function ds(c, R, S, D, U, z) {
        {
          var N = M(c);
          if (!N) {
            var W = "";
            (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var ge = Sg(U);
            ge ? W += ge : W += us();
            var Z;
            c === null ? Z = "null" : Array.isArray(c) ? Z = "array" : c !== void 0 && c.$$typeof === n ? (Z = "<" + (ee(c.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof c, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, W);
          }
          var re = Pr(c, R, S, U, z);
          if (re == null)
            return re;
          if (N) {
            var Oe = R.children;
            if (Oe !== void 0)
              if (D)
                if (Array.isArray(Oe)) {
                  for (var sr = 0; sr < Oe.length; sr++)
                    fs(Oe[sr], c);
                  Object.freeze && Object.freeze(Oe);
                } else
                  k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                fs(Oe, c);
          }
          return c === e.Fragment ? qg(re) : wg(re), re;
        }
      }
      function Og(c, R, S) {
        return ds(c, R, S, !0);
      }
      function xg(c, R, S) {
        return ds(c, R, S, !1);
      }
      var Pg = xg, kg = Og;
      e.jsx = Pg, e.jsxs = kg;
    }();
  }(Rt)), Rt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = mh() : e.exports = bh();
})(Ur);
const ue = Ur.exports.Fragment, d = Ur.exports.jsx, $ = Ur.exports.jsxs, Df = {
  editorState: F.createEmpty(),
  focus: !1,
  editorRef: null,
  disabled: !1
}, H = Bg(Df), Ah = (e, r) => {
  switch (r.type) {
    case "update":
    case "focus":
      return {
        ...e,
        ...r
      };
  }
}, no = ({
  translations: e,
  configResponsiveImageHandler: r,
  children: t
}) => /* @__PURE__ */ d(H.Provider, {
  value: Fg(Ah, {
    ...Df,
    translations: e,
    configResponsiveImageHandler: r
  }),
  children: t
}), Y = (e) => ({
  type: "update",
  editorState: e
}), Rh = (e) => ({
  type: "update",
  editorRef: e
}), mr = (e) => ({
  type: "update",
  disabled: e
}), ys = (e) => ({
  type: "focus",
  focus: e
}), $f = Rf.merge(co({
  "header-one": {
    element: "span",
    wrapper: /* @__PURE__ */ d(kr, {
      tag: "h1",
      modifier: "secondary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@s-up"
    })
  },
  "header-two": {
    element: "span",
    wrapper: /* @__PURE__ */ d(kr, {
      tag: "h2",
      modifier: "tertiary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@l-up"
    })
  },
  "header-three": {
    element: "span",
    wrapper: /* @__PURE__ */ d(kr, {
      tag: "h3",
      modifier: "quaternary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf"
    })
  },
  "header-four": {
    element: "span",
    wrapper: /* @__PURE__ */ d(kr, {
      tag: "h4",
      modifier: "quinary",
      noMargin: !0,
      className: "k-u-margin-bottom-single k-u-margin-bottom-singleHalf@s-up"
    })
  }
}));
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
var Mf = fo.sanitizeUrl = void 0, Eh = /^([^\w]*)(javascript|data|vbscript)/im, Ch = /&#(\w+)(^\w|;)?/g, Th = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Sh = /^([^:]+):/gm, Ih = [".", "/"];
function wh(e) {
  return Ih.indexOf(e[0]) > -1;
}
function qh(e) {
  return e.replace(Ch, function(r, t) {
    return String.fromCharCode(t);
  });
}
function Oh(e) {
  var r = qh(e || "").replace(Th, "").trim();
  if (!r)
    return "about:blank";
  if (wh(r))
    return r;
  var t = r.match(Sh);
  if (!t)
    return r;
  var n = t[0];
  return Eh.test(n) ? "about:blank" : r;
}
Mf = fo.sanitizeUrl = Oh;
var Bf = {};
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
})(Bf);
var Et, ms;
function me() {
  return ms || (ms = 1, Et = {}), Et;
}
var ne = Bf, xh = me(), bs = Array.prototype.push;
function Ph(e, r) {
  return r == 2 ? function(t, n) {
    return e.apply(void 0, arguments);
  } : function(t) {
    return e.apply(void 0, arguments);
  };
}
function Ct(e, r) {
  return r == 2 ? function(t, n) {
    return e(t, n);
  } : function(t) {
    return e(t);
  };
}
function As(e) {
  for (var r = e ? e.length : 0, t = Array(r); r--; )
    t[r] = e[r];
  return t;
}
function kh(e) {
  return function(r) {
    return e({}, r);
  };
}
function Lh(e, r) {
  return function() {
    for (var t = arguments.length, n = t - 1, a = Array(t); t--; )
      a[t] = arguments[t];
    var i = a[r], o = a.slice(0, r);
    return i && bs.apply(o, i), r != n && bs.apply(o, a.slice(r + 1)), e.apply(this, o);
  };
}
function Tt(e, r) {
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
function ao(e, r, t, n) {
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
  }, s = a ? t : xh, u = "curry" in n && n.curry, l = "fixed" in n && n.fixed, f = "rearg" in n && n.rearg, h = a ? t.runInContext() : void 0, g = a ? t : {
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
  }, p = g.ary, _ = g.assign, v = g.clone, A = g.curry, b = g.forEach, y = g.isArray, E = g.isError, C = g.isFunction, P = g.isWeakMap, q = g.keys, w = g.rearg, k = g.toInteger, G = g.toPath, te = q(ne.aryMethod), M = {
    castArray: function(O) {
      return function() {
        var T = arguments[0];
        return y(T) ? O(As(T)) : O.apply(void 0, arguments);
      };
    },
    iteratee: function(O) {
      return function() {
        var T = arguments[0], I = arguments[1], L = O(T, I), B = L.length;
        return o.cap && typeof I == "number" ? (I = I > 2 ? I - 2 : 1, B && B <= I ? L : Ct(L, I)) : L;
      };
    },
    mixin: function(O) {
      return function(T) {
        var I = this;
        if (!C(I))
          return O(I, Object(T));
        var L = [];
        return b(q(T), function(B) {
          C(T[B]) && L.push([B, I.prototype[B]]);
        }), O(I, Object(T)), b(L, function(B) {
          var X = B[1];
          C(X) ? I.prototype[B[0]] = X : delete I.prototype[B[0]];
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
        return ao(e, O(T), n);
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
      var L = ne.methodSpread[O], B = L && L.start;
      return B === void 0 ? p(T, I) : Lh(T, B);
    }
    return T;
  }
  function fe(O, T, I) {
    return o.rearg && I > 1 && (f || !ne.skipRearg[O]) ? w(T, ne.methodRearg[O] || ne.aryRearg[I]) : T;
  }
  function $e(O, T) {
    T = G(T);
    for (var I = -1, L = T.length, B = L - 1, X = v(Object(O)), pe = X; pe != null && ++I < L; ) {
      var oe = T[I], de = pe[oe];
      de != null && !(C(de) || E(de) || P(de)) && (pe[oe] = v(I == B ? de : Object(de))), pe = pe[oe];
    }
    return X;
  }
  function tr(O) {
    return ie.runInContext.convert(O)(void 0);
  }
  function Me(O, T) {
    var I = ne.aliasToReal[O] || O, L = ne.remap[I] || I, B = n;
    return function(X) {
      var pe = a ? h : g, oe = a ? h[L] : T, de = _(_({}, B), X);
      return ao(pe, I, oe, de);
    };
  }
  function nr(O, T) {
    return Ue(O, function(I) {
      return typeof I == "function" ? Ct(I, T) : I;
    });
  }
  function ar(O, T) {
    return Ue(O, function(I) {
      var L = T.length;
      return Ph(w(Ct(I, L), T), L);
    });
  }
  function Ue(O, T) {
    return function() {
      var I = arguments.length;
      if (!I)
        return O();
      for (var L = Array(I); I--; )
        L[I] = arguments[I];
      var B = o.rearg ? 0 : I - 1;
      return L[B] = T(L[B]), O.apply(void 0, L);
    };
  }
  function ze(O, T, I) {
    var L, B = ne.aliasToReal[O] || O, X = T, pe = M[B];
    return pe ? X = pe(T) : o.immutable && (ne.mutate.array[B] ? X = Tt(T, As) : ne.mutate.object[B] ? X = Tt(T, kh(T)) : ne.mutate.set[B] && (X = Tt(T, $e))), b(te, function(oe) {
      return b(ne.aryMethod[oe], function(de) {
        if (B == de) {
          var ir = ne.methodSpread[B], j = ir && ir.afterRearg;
          return L = j ? ee(B, fe(B, X, oe), oe) : fe(B, ee(B, X, oe), oe), L = Q(B, L), L = ae(B, L, oe), !1;
        }
      }), !L;
    }), L || (L = X), L == T && (L = u ? A(L, 1) : function() {
      return T.apply(this, arguments);
    }), L.convert = Me(B, T), L.placeholder = T.placeholder = I, L;
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
      T.convert = Me(O, T), qe.push([O, T]);
    }
  }), b(qe, function(O) {
    ie[O[0]] = O[1];
  }), ie.convert = tr, ie.placeholder = ie, b(q(ie), function(O) {
    b(ne.realToAlias[O] || [], function(T) {
      ie[T] = ie[O];
    });
  }), ie;
}
var Dh = ao, St, Rs;
function go() {
  if (Rs)
    return St;
  Rs = 1;
  function e(r) {
    return r;
  }
  return St = e, St;
}
var It, Es;
function Ff() {
  if (Es)
    return It;
  Es = 1;
  var e = typeof Lr == "object" && Lr && Lr.Object === Object && Lr;
  return It = e, It;
}
var wt, Cs;
function _e() {
  if (Cs)
    return wt;
  Cs = 1;
  var e = Ff(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return wt = t, wt;
}
var $h = _e(), Mh = $h.Symbol, dr = Mh, Ts = dr, Wf = Object.prototype, Bh = Wf.hasOwnProperty, Fh = Wf.toString, vr = Ts ? Ts.toStringTag : void 0;
function Wh(e) {
  var r = Bh.call(e, vr), t = e[vr];
  try {
    e[vr] = void 0;
    var n = !0;
  } catch {
  }
  var a = Fh.call(e);
  return n && (r ? e[vr] = t : delete e[vr]), a;
}
var jh = Wh, Nh = Object.prototype, Kh = Nh.toString;
function Gh(e) {
  return Kh.call(e);
}
var Uh = Gh, Ss = dr, zh = jh, Hh = Uh, Yh = "[object Null]", Vh = "[object Undefined]", Is = Ss ? Ss.toStringTag : void 0;
function Jh(e) {
  return e == null ? e === void 0 ? Vh : Yh : Is && Is in Object(e) ? zh(e) : Hh(e);
}
var Xe = Jh;
function Xh(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Le = Xh, Zh = Xe, Qh = Le, ep = "[object AsyncFunction]", rp = "[object Function]", tp = "[object GeneratorFunction]", np = "[object Proxy]";
function ap(e) {
  if (!Qh(e))
    return !1;
  var r = Zh(e);
  return r == rp || r == tp || r == ep || r == np;
}
var ho = ap, qt, ws;
function ip() {
  if (ws)
    return qt;
  ws = 1;
  var e = _e(), r = e["__core-js_shared__"];
  return qt = r, qt;
}
var Ot, qs;
function op() {
  if (qs)
    return Ot;
  qs = 1;
  var e = ip(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return Ot = t, Ot;
}
var xt, Os;
function jf() {
  if (Os)
    return xt;
  Os = 1;
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
  return xt = t, xt;
}
var Pt, xs;
function sp() {
  if (xs)
    return Pt;
  xs = 1;
  var e = ho, r = op(), t = Le, n = jf(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, l = s.hasOwnProperty, f = RegExp("^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function h(g) {
    if (!t(g) || r(g))
      return !1;
    var p = e(g) ? f : i;
    return p.test(n(g));
  }
  return Pt = h, Pt;
}
var kt, Ps;
function up() {
  if (Ps)
    return kt;
  Ps = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return kt = e, kt;
}
var Lt, ks;
function Ze() {
  if (ks)
    return Lt;
  ks = 1;
  var e = sp(), r = up();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return Lt = t, Lt;
}
var Dt, Ls;
function Nf() {
  if (Ls)
    return Dt;
  Ls = 1;
  var e = Ze(), r = _e(), t = e(r, "WeakMap");
  return Dt = t, Dt;
}
var $t, Ds;
function Kf() {
  if (Ds)
    return $t;
  Ds = 1;
  var e = Nf(), r = e && new e();
  return $t = r, $t;
}
var lp = go(), $s = Kf(), cp = $s ? function(e, r) {
  return $s.set(e, r), e;
} : lp, Gf = cp, Mt, Ms;
function zr() {
  if (Ms)
    return Mt;
  Ms = 1;
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
  return Mt = t, Mt;
}
var fp = zr(), dp = Le;
function gp(e) {
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
    var t = fp(e.prototype), n = e.apply(t, r);
    return dp(n) ? n : t;
  };
}
var Hr = gp, hp = Hr, pp = _e(), vp = 1;
function _p(e, r, t) {
  var n = r & vp, a = hp(e);
  function i() {
    var o = this && this !== pp && this instanceof i ? a : e;
    return o.apply(n ? t : this, arguments);
  }
  return i;
}
var yp = _p, Bt, Bs;
function po() {
  if (Bs)
    return Bt;
  Bs = 1;
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
  return Bt = e, Bt;
}
var mp = Math.max;
function bp(e, r, t, n) {
  for (var a = -1, i = e.length, o = t.length, s = -1, u = r.length, l = mp(i - o, 0), f = Array(u + l), h = !n; ++s < u; )
    f[s] = r[s];
  for (; ++a < o; )
    (h || a < i) && (f[t[a]] = e[a]);
  for (; l--; )
    f[s++] = e[a++];
  return f;
}
var Uf = bp, Ap = Math.max;
function Rp(e, r, t, n) {
  for (var a = -1, i = e.length, o = -1, s = t.length, u = -1, l = r.length, f = Ap(i - s, 0), h = Array(f + l), g = !n; ++a < f; )
    h[a] = e[a];
  for (var p = a; ++u < l; )
    h[p + u] = r[u];
  for (; ++o < s; )
    (g || a < i) && (h[p + t[o]] = e[a++]);
  return h;
}
var zf = Rp;
function Ep(e, r) {
  for (var t = e.length, n = 0; t--; )
    e[t] === r && ++n;
  return n;
}
var Cp = Ep, Ft, Fs;
function vo() {
  if (Fs)
    return Ft;
  Fs = 1;
  function e() {
  }
  return Ft = e, Ft;
}
var Wt, Ws;
function _o() {
  if (Ws)
    return Wt;
  Ws = 1;
  var e = zr(), r = vo(), t = 4294967295;
  function n(a) {
    this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = t, this.__views__ = [];
  }
  return n.prototype = e(r.prototype), n.prototype.constructor = n, Wt = n, Wt;
}
var jt, js;
function Hf() {
  if (js)
    return jt;
  js = 1;
  function e() {
  }
  return jt = e, jt;
}
var Nt, Ns;
function yo() {
  if (Ns)
    return Nt;
  Ns = 1;
  var e = Kf(), r = Hf(), t = e ? function(n) {
    return e.get(n);
  } : r;
  return Nt = t, Nt;
}
var Kt, Ks;
function Tp() {
  if (Ks)
    return Kt;
  Ks = 1;
  var e = {};
  return Kt = e, Kt;
}
var Gt, Gs;
function Yf() {
  if (Gs)
    return Gt;
  Gs = 1;
  var e = Tp(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    for (var i = a.name + "", o = e[i], s = t.call(e, i) ? o.length : 0; s--; ) {
      var u = o[s], l = u.func;
      if (l == null || l == a)
        return u.name;
    }
    return i;
  }
  return Gt = n, Gt;
}
var Ut, Us;
function mo() {
  if (Us)
    return Ut;
  Us = 1;
  var e = zr(), r = vo();
  function t(n, a) {
    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = void 0;
  }
  return t.prototype = e(r.prototype), t.prototype.constructor = t, Ut = t, Ut;
}
var Sp = Array.isArray, ce = Sp;
function Ip(e) {
  return e != null && typeof e == "object";
}
var Ee = Ip;
function wp(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Yr = wp, zt, zs;
function qp() {
  if (zs)
    return zt;
  zs = 1;
  var e = _o(), r = mo(), t = Yr;
  function n(a) {
    if (a instanceof e)
      return a.clone();
    var i = new r(a.__wrapped__, a.__chain__);
    return i.__actions__ = t(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
  }
  return zt = n, zt;
}
var Ht, Hs;
function Op() {
  if (Hs)
    return Ht;
  Hs = 1;
  var e = _o(), r = mo(), t = vo(), n = ce, a = Ee, i = qp(), o = Object.prototype, s = o.hasOwnProperty;
  function u(l) {
    if (a(l) && !n(l) && !(l instanceof e)) {
      if (l instanceof r)
        return l;
      if (s.call(l, "__wrapped__"))
        return i(l);
    }
    return new r(l);
  }
  return u.prototype = t.prototype, u.prototype.constructor = u, Ht = u, Ht;
}
var Yt, Ys;
function Vf() {
  if (Ys)
    return Yt;
  Ys = 1;
  var e = _o(), r = yo(), t = Yf(), n = Op();
  function a(i) {
    var o = t(i), s = n[o];
    if (typeof s != "function" || !(o in e.prototype))
      return !1;
    if (i === s)
      return !0;
    var u = r(s);
    return !!u && i === u[0];
  }
  return Yt = a, Yt;
}
var Vt, Vs;
function Jf() {
  if (Vs)
    return Vt;
  Vs = 1;
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
  return Vt = n, Vt;
}
var xp = Gf, Pp = Jf(), kp = Pp(xp), Xf = kp, Lp = /\{\n\/\* \[wrapped with (.+)\] \*/, Dp = /,? & /;
function $p(e) {
  var r = e.match(Lp);
  return r ? r[1].split(Dp) : [];
}
var Mp = $p, Bp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function Fp(e, r) {
  var t = r.length;
  if (!t)
    return e;
  var n = t - 1;
  return r[n] = (t > 1 ? "& " : "") + r[n], r = r.join(t > 2 ? ", " : " "), e.replace(Bp, `{
/* [wrapped with ` + r + `] */
`);
}
var Wp = Fp, Jt, Js;
function jp() {
  if (Js)
    return Jt;
  Js = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return Jt = e, Jt;
}
var Xt, Xs;
function Zf() {
  if (Xs)
    return Xt;
  Xs = 1;
  var e = Ze(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return Xt = r, Xt;
}
var Zt, Zs;
function Np() {
  if (Zs)
    return Zt;
  Zs = 1;
  var e = jp(), r = Zf(), t = go(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return Zt = n, Zt;
}
var Qt, Qs;
function Qf() {
  if (Qs)
    return Qt;
  Qs = 1;
  var e = Np(), r = Jf(), t = r(e);
  return Qt = t, Qt;
}
function Kp(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var bo = Kp, en, eu;
function Gp() {
  if (eu)
    return en;
  eu = 1;
  function e(r, t, n, a) {
    for (var i = r.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (t(r[o], o, r))
        return o;
    return -1;
  }
  return en = e, en;
}
var rn, ru;
function Up() {
  if (ru)
    return rn;
  ru = 1;
  function e(r) {
    return r !== r;
  }
  return rn = e, rn;
}
var tn, tu;
function zp() {
  if (tu)
    return tn;
  tu = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return tn = e, tn;
}
var nn, nu;
function Ao() {
  if (nu)
    return nn;
  nu = 1;
  var e = Gp(), r = Up(), t = zp();
  function n(a, i, o) {
    return i === i ? t(a, i, o) : e(a, r, o);
  }
  return nn = n, nn;
}
var Hp = Ao();
function Yp(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && Hp(e, r, 0) > -1;
}
var ed = Yp, Vp = bo, Jp = ed, Xp = 1, Zp = 2, Qp = 8, ev = 16, rv = 32, tv = 64, nv = 128, av = 256, iv = 512, ov = [
  ["ary", nv],
  ["bind", Xp],
  ["bindKey", Zp],
  ["curry", Qp],
  ["curryRight", ev],
  ["flip", iv],
  ["partial", rv],
  ["partialRight", tv],
  ["rearg", av]
];
function sv(e, r) {
  return Vp(ov, function(t) {
    var n = "_." + t[0];
    r & t[1] && !Jp(e, n) && e.push(n);
  }), e.sort();
}
var uv = sv, lv = Mp, cv = Wp, fv = Qf(), dv = uv;
function gv(e, r, t) {
  var n = r + "";
  return fv(e, cv(n, dv(lv(n), t)));
}
var rd = gv, hv = Vf(), pv = Xf, vv = rd, _v = 1, yv = 2, mv = 4, bv = 8, au = 32, iu = 64;
function Av(e, r, t, n, a, i, o, s, u, l) {
  var f = r & bv, h = f ? o : void 0, g = f ? void 0 : o, p = f ? i : void 0, _ = f ? void 0 : i;
  r |= f ? au : iu, r &= ~(f ? iu : au), r & mv || (r &= ~(_v | yv));
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
  return hv(e) && pv(A, v), A.placeholder = n, vv(A, e, r);
}
var td = Av;
function Rv(e) {
  var r = e;
  return r.placeholder;
}
var nd = Rv, Ev = 9007199254740991, Cv = /^(?:0|[1-9]\d*)$/;
function Tv(e, r) {
  var t = typeof e;
  return r = r == null ? Ev : r, !!r && (t == "number" || t != "symbol" && Cv.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Vr = Tv, Sv = Yr, Iv = Vr, wv = Math.min;
function qv(e, r) {
  for (var t = e.length, n = wv(r.length, t), a = Sv(e); n--; ) {
    var i = r[n];
    e[n] = Iv(i, t) ? a[i] : void 0;
  }
  return e;
}
var Ov = qv, ou = "__lodash_placeholder__";
function xv(e, r) {
  for (var t = -1, n = e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    (o === r || o === ou) && (e[t] = ou, i[a++] = t);
  }
  return i;
}
var Ro = xv, Pv = Uf, kv = zf, Lv = Cp, su = Hr, Dv = td, $v = nd, Mv = Ov, Bv = Ro, Fv = _e(), Wv = 1, jv = 2, Nv = 8, Kv = 16, Gv = 128, Uv = 512;
function ad(e, r, t, n, a, i, o, s, u, l) {
  var f = r & Gv, h = r & Wv, g = r & jv, p = r & (Nv | Kv), _ = r & Uv, v = g ? void 0 : su(e);
  function A() {
    for (var b = arguments.length, y = Array(b), E = b; E--; )
      y[E] = arguments[E];
    if (p)
      var C = $v(A), P = Lv(y, C);
    if (n && (y = Pv(y, n, a, p)), i && (y = kv(y, i, o, p)), b -= P, p && b < l) {
      var q = Bv(y, C);
      return Dv(e, r, ad, A.placeholder, t, y, q, s, u, l - b);
    }
    var w = h ? t : this, k = g ? w[e] : e;
    return b = y.length, s ? y = Mv(y, s) : _ && b > 1 && y.reverse(), f && u < b && (y.length = u), this && this !== Fv && this instanceof A && (k = v || su(k)), k.apply(w, y);
  }
  return A;
}
var id = ad, zv = po(), Hv = Hr, Yv = id, Vv = td, Jv = nd, Xv = Ro, Zv = _e();
function Qv(e, r, t) {
  var n = Hv(e);
  function a() {
    for (var i = arguments.length, o = Array(i), s = i, u = Jv(a); s--; )
      o[s] = arguments[s];
    var l = i < 3 && o[0] !== u && o[i - 1] !== u ? [] : Xv(o, u);
    if (i -= l.length, i < t)
      return Vv(e, r, Yv, a.placeholder, void 0, o, l, void 0, void 0, t - i);
    var f = this && this !== Zv && this instanceof a ? n : e;
    return zv(f, this, o);
  }
  return a;
}
var e_ = Qv, r_ = po(), t_ = Hr, n_ = _e(), a_ = 1;
function i_(e, r, t, n) {
  var a = r & a_, i = t_(e);
  function o() {
    for (var s = -1, u = arguments.length, l = -1, f = n.length, h = Array(f + u), g = this && this !== n_ && this instanceof o ? i : e; ++l < f; )
      h[l] = n[l];
    for (; u--; )
      h[l++] = arguments[++s];
    return r_(g, a ? t : this, h);
  }
  return o;
}
var o_ = i_, s_ = Uf, u_ = zf, uu = Ro, lu = "__lodash_placeholder__", an = 1, l_ = 2, c_ = 4, cu = 8, _r = 128, fu = 256, f_ = Math.min;
function d_(e, r) {
  var t = e[1], n = r[1], a = t | n, i = a < (an | l_ | _r), o = n == _r && t == cu || n == _r && t == fu && e[7].length <= r[8] || n == (_r | fu) && r[7].length <= r[8] && t == cu;
  if (!(i || o))
    return e;
  n & an && (e[2] = r[2], a |= t & an ? 0 : c_);
  var s = r[3];
  if (s) {
    var u = e[3];
    e[3] = u ? s_(u, s, r[4]) : s, e[4] = u ? uu(e[3], lu) : r[4];
  }
  return s = r[5], s && (u = e[5], e[5] = u ? u_(u, s, r[6]) : s, e[6] = u ? uu(e[5], lu) : r[6]), s = r[7], s && (e[7] = s), n & _r && (e[8] = e[8] == null ? r[8] : f_(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = a, e;
}
var g_ = d_, on, du;
function h_() {
  if (du)
    return on;
  du = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return on = r, on;
}
var sn, gu;
function od() {
  if (gu)
    return sn;
  gu = 1;
  var e = h_(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return sn = t, sn;
}
var p_ = Xe, v_ = Ee, __ = "[object Symbol]";
function y_(e) {
  return typeof e == "symbol" || v_(e) && p_(e) == __;
}
var Tr = y_, m_ = od(), hu = Le, b_ = Tr, pu = 0 / 0, A_ = /^[-+]0x[0-9a-f]+$/i, R_ = /^0b[01]+$/i, E_ = /^0o[0-7]+$/i, C_ = parseInt;
function T_(e) {
  if (typeof e == "number")
    return e;
  if (b_(e))
    return pu;
  if (hu(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hu(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = m_(e);
  var t = R_.test(e);
  return t || E_.test(e) ? C_(e.slice(2), t ? 2 : 8) : A_.test(e) ? pu : +e;
}
var S_ = T_, I_ = S_, vu = 1 / 0, w_ = 17976931348623157e292;
function q_(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = I_(e), e === vu || e === -vu) {
    var r = e < 0 ? -1 : 1;
    return r * w_;
  }
  return e === e ? e : 0;
}
var O_ = q_, x_ = O_;
function P_(e) {
  var r = x_(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var sd = P_, k_ = Gf, L_ = yp, D_ = e_, $_ = id, M_ = o_, B_ = yo(), F_ = g_, W_ = Xf, j_ = rd, _u = sd, N_ = "Expected a function", yu = 1, K_ = 2, un = 8, ln = 16, cn = 32, mu = 64, bu = Math.max;
function G_(e, r, t, n, a, i, o, s) {
  var u = r & K_;
  if (!u && typeof e != "function")
    throw new TypeError(N_);
  var l = n ? n.length : 0;
  if (l || (r &= ~(cn | mu), n = a = void 0), o = o === void 0 ? o : bu(_u(o), 0), s = s === void 0 ? s : _u(s), l -= a ? a.length : 0, r & mu) {
    var f = n, h = a;
    n = a = void 0;
  }
  var g = u ? void 0 : B_(e), p = [
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
  if (g && F_(p, g), e = p[0], r = p[1], t = p[2], n = p[3], a = p[4], s = p[9] = p[9] === void 0 ? u ? 0 : e.length : bu(p[9] - l, 0), !s && r & (un | ln) && (r &= ~(un | ln)), !r || r == yu)
    var _ = L_(e, r, t);
  else
    r == un || r == ln ? _ = D_(e, r, s) : (r == cn || r == (yu | cn)) && !a.length ? _ = M_(e, r, t, n) : _ = $_.apply(void 0, p);
  var v = g ? k_ : W_;
  return j_(v(_, p), e, r);
}
var Eo = G_, U_ = Eo, z_ = 128;
function H_(e, r, t) {
  return r = t ? void 0 : r, r = e && r == null ? e.length : r, U_(e, z_, void 0, void 0, void 0, void 0, r);
}
var Y_ = H_, fn, Au;
function ud() {
  if (Au)
    return fn;
  Au = 1;
  var e = Zf();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return fn = r, fn;
}
var dn, Ru;
function Co() {
  if (Ru)
    return dn;
  Ru = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return dn = e, dn;
}
var gn, Eu;
function To() {
  if (Eu)
    return gn;
  Eu = 1;
  var e = ud(), r = Co(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, o, s) {
    var u = i[o];
    (!(n.call(i, o) && r(u, s)) || s === void 0 && !(o in i)) && e(i, o, s);
  }
  return gn = a, gn;
}
var hn, Cu;
function Sr() {
  if (Cu)
    return hn;
  Cu = 1;
  var e = To(), r = ud();
  function t(n, a, i, o) {
    var s = !i;
    i || (i = {});
    for (var u = -1, l = a.length; ++u < l; ) {
      var f = a[u], h = o ? o(i[f], n[f], f, i, n) : void 0;
      h === void 0 && (h = n[f]), s ? r(i, f, h) : e(i, f, h);
    }
    return i;
  }
  return hn = t, hn;
}
function V_(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var J_ = V_, pn, Tu;
function X_() {
  if (Tu)
    return pn;
  Tu = 1;
  var e = Xe, r = Ee, t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return pn = n, pn;
}
var vn, Su;
function Jr() {
  if (Su)
    return vn;
  Su = 1;
  var e = X_(), r = Ee, t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(function() {
    return arguments;
  }()) ? e : function(o) {
    return r(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return vn = i, vn;
}
var Dr = { exports: {} }, _n, Iu;
function Z_() {
  if (Iu)
    return _n;
  Iu = 1;
  function e() {
    return !1;
  }
  return _n = e, _n;
}
var wu;
function Xr() {
  return wu || (wu = 1, function(e, r) {
    var t = _e(), n = Z_(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? t.Buffer : void 0, u = s ? s.isBuffer : void 0, l = u || n;
    e.exports = l;
  }(Dr, Dr.exports)), Dr.exports;
}
var yn, qu;
function So() {
  if (qu)
    return yn;
  qu = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return yn = r, yn;
}
var mn, Ou;
function Q_() {
  if (Ou)
    return mn;
  Ou = 1;
  var e = Xe, r = So(), t = Ee, n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", l = "[object Map]", f = "[object Number]", h = "[object Object]", g = "[object RegExp]", p = "[object Set]", _ = "[object String]", v = "[object WeakMap]", A = "[object ArrayBuffer]", b = "[object DataView]", y = "[object Float32Array]", E = "[object Float64Array]", C = "[object Int8Array]", P = "[object Int16Array]", q = "[object Int32Array]", w = "[object Uint8Array]", k = "[object Uint8ClampedArray]", G = "[object Uint16Array]", te = "[object Uint32Array]", M = {};
  M[y] = M[E] = M[C] = M[P] = M[q] = M[w] = M[k] = M[G] = M[te] = !0, M[n] = M[a] = M[A] = M[i] = M[b] = M[o] = M[s] = M[u] = M[l] = M[f] = M[h] = M[g] = M[p] = M[_] = M[v] = !1;
  function Q(ae) {
    return t(ae) && r(ae.length) && !!M[e(ae)];
  }
  return mn = Q, mn;
}
var bn, xu;
function Io() {
  if (xu)
    return bn;
  xu = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return bn = e, bn;
}
var $r = { exports: {} }, Pu;
function wo() {
  return Pu || (Pu = 1, function(e, r) {
    var t = Ff(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && t.process, s = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }($r, $r.exports)), $r.exports;
}
var An, ku;
function qo() {
  if (ku)
    return An;
  ku = 1;
  var e = Q_(), r = Io(), t = wo(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return An = a, An;
}
var ey = J_, ry = Jr(), ty = ce, ny = Xr(), ay = Vr, iy = qo(), oy = Object.prototype, sy = oy.hasOwnProperty;
function uy(e, r) {
  var t = ty(e), n = !t && ry(e), a = !t && !n && ny(e), i = !t && !n && !a && iy(e), o = t || n || a || i, s = o ? ey(e.length, String) : [], u = s.length;
  for (var l in e)
    (r || sy.call(e, l)) && !(o && (l == "length" || a && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || ay(l, u))) && s.push(l);
  return s;
}
var ld = uy, ly = Object.prototype;
function cy(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || ly;
  return e === t;
}
var Zr = cy;
function fy(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var cd = fy, dy = cd, gy = dy(Object.keys, Object), hy = gy, py = Zr, vy = hy, _y = Object.prototype, yy = _y.hasOwnProperty;
function my(e) {
  if (!py(e))
    return vy(e);
  var r = [];
  for (var t in Object(e))
    yy.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var Oo = my, Rn, Lu;
function Qr() {
  if (Lu)
    return Rn;
  Lu = 1;
  var e = ho, r = So();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Rn = t, Rn;
}
var by = ld, Ay = Oo, Ry = Qr();
function Ey(e) {
  return Ry(e) ? by(e) : Ay(e);
}
var Ir = Ey, Cy = Sr(), Ty = Ir;
function Sy(e, r) {
  return e && Cy(r, Ty(r), e);
}
var fd = Sy, En, Du;
function Iy() {
  if (Du)
    return En;
  Du = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return En = e, En;
}
var Cn, $u;
function et() {
  if ($u)
    return Cn;
  $u = 1;
  var e = Co();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return Cn = r, Cn;
}
var Tn, Mu;
function wy() {
  if (Mu)
    return Tn;
  Mu = 1;
  var e = et(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : t.call(i, o, 1), --this.size, !0;
  }
  return Tn = n, Tn;
}
var Sn, Bu;
function qy() {
  if (Bu)
    return Sn;
  Bu = 1;
  var e = et();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return Sn = r, Sn;
}
var In, Fu;
function Oy() {
  if (Fu)
    return In;
  Fu = 1;
  var e = et();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return In = r, In;
}
var wn, Wu;
function xy() {
  if (Wu)
    return wn;
  Wu = 1;
  var e = et();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return wn = r, wn;
}
var qn, ju;
function rt() {
  if (ju)
    return qn;
  ju = 1;
  var e = Iy(), r = wy(), t = qy(), n = Oy(), a = xy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, qn = i, qn;
}
var On, Nu;
function Py() {
  if (Nu)
    return On;
  Nu = 1;
  var e = rt();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return On = r, On;
}
var xn, Ku;
function ky() {
  if (Ku)
    return xn;
  Ku = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return xn = e, xn;
}
var Pn, Gu;
function Ly() {
  if (Gu)
    return Pn;
  Gu = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Pn = e, Pn;
}
var kn, Uu;
function Dy() {
  if (Uu)
    return kn;
  Uu = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return kn = e, kn;
}
var Ln, zu;
function xo() {
  if (zu)
    return Ln;
  zu = 1;
  var e = Ze(), r = _e(), t = e(r, "Map");
  return Ln = t, Ln;
}
var Dn, Hu;
function tt() {
  if (Hu)
    return Dn;
  Hu = 1;
  var e = Ze(), r = e(Object, "create");
  return Dn = r, Dn;
}
var $n, Yu;
function $y() {
  if (Yu)
    return $n;
  Yu = 1;
  var e = tt();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return $n = r, $n;
}
var Mn, Vu;
function My() {
  if (Vu)
    return Mn;
  Vu = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Mn = e, Mn;
}
var Bn, Ju;
function By() {
  if (Ju)
    return Bn;
  Ju = 1;
  var e = tt(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === r ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Bn = a, Bn;
}
var Fn, Xu;
function Fy() {
  if (Xu)
    return Fn;
  Xu = 1;
  var e = tt(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Fn = n, Fn;
}
var Wn, Zu;
function Wy() {
  if (Zu)
    return Wn;
  Zu = 1;
  var e = tt(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Wn = t, Wn;
}
var jn, Qu;
function jy() {
  if (Qu)
    return jn;
  Qu = 1;
  var e = $y(), r = My(), t = By(), n = Fy(), a = Wy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, jn = i, jn;
}
var Nn, el;
function Ny() {
  if (el)
    return Nn;
  el = 1;
  var e = jy(), r = rt(), t = xo();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Nn = n, Nn;
}
var Kn, rl;
function Ky() {
  if (rl)
    return Kn;
  rl = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Kn = e, Kn;
}
var Gn, tl;
function nt() {
  if (tl)
    return Gn;
  tl = 1;
  var e = Ky();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Gn = r, Gn;
}
var Un, nl;
function Gy() {
  if (nl)
    return Un;
  nl = 1;
  var e = nt();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Un = r, Un;
}
var zn, al;
function Uy() {
  if (al)
    return zn;
  al = 1;
  var e = nt();
  function r(t) {
    return e(this, t).get(t);
  }
  return zn = r, zn;
}
var Hn, il;
function zy() {
  if (il)
    return Hn;
  il = 1;
  var e = nt();
  function r(t) {
    return e(this, t).has(t);
  }
  return Hn = r, Hn;
}
var Yn, ol;
function Hy() {
  if (ol)
    return Yn;
  ol = 1;
  var e = nt();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Yn = r, Yn;
}
var Vn, sl;
function Po() {
  if (sl)
    return Vn;
  sl = 1;
  var e = Ny(), r = Gy(), t = Uy(), n = zy(), a = Hy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Vn = i, Vn;
}
var Jn, ul;
function Yy() {
  if (ul)
    return Jn;
  ul = 1;
  var e = rt(), r = xo(), t = Po(), n = 200;
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
  return Jn = a, Jn;
}
var Xn, ll;
function ko() {
  if (ll)
    return Xn;
  ll = 1;
  var e = rt(), r = Py(), t = ky(), n = Ly(), a = Dy(), i = Yy();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = r, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, Xn = o, Xn;
}
var Zn, cl;
function Vy() {
  if (cl)
    return Zn;
  cl = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return Zn = e, Zn;
}
var Qn, fl;
function Jy() {
  if (fl)
    return Qn;
  fl = 1;
  var e = Le, r = Zr, t = Vy(), n = Object.prototype, a = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = r(o), u = [];
    for (var l in o)
      l == "constructor" && (s || !a.call(o, l)) || u.push(l);
    return u;
  }
  return Qn = i, Qn;
}
var ea, dl;
function Lo() {
  if (dl)
    return ea;
  dl = 1;
  var e = ld, r = Jy(), t = Qr();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ea = n, ea;
}
var ra, gl;
function Xy() {
  if (gl)
    return ra;
  gl = 1;
  var e = Sr(), r = Lo();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return ra = t, ra;
}
var Mr = { exports: {} }, hl;
function Zy() {
  return hl || (hl = 1, function(e, r) {
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
var ta, pl;
function Qy() {
  if (pl)
    return ta;
  pl = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, o = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (o[i++] = s);
    }
    return o;
  }
  return ta = e, ta;
}
var na, vl;
function dd() {
  if (vl)
    return na;
  vl = 1;
  function e() {
    return [];
  }
  return na = e, na;
}
var aa, _l;
function Do() {
  if (_l)
    return aa;
  _l = 1;
  var e = Qy(), r = dd(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : r;
  return aa = i, aa;
}
var ia, yl;
function em() {
  if (yl)
    return ia;
  yl = 1;
  var e = Sr(), r = Do();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ia = t, ia;
}
var oa, ml;
function $o() {
  if (ml)
    return oa;
  ml = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return oa = e, oa;
}
var rm = cd, tm = rm(Object.getPrototypeOf, Object), Mo = tm, sa, bl;
function gd() {
  if (bl)
    return sa;
  bl = 1;
  var e = $o(), r = Mo, t = Do(), n = dd(), a = Object.getOwnPropertySymbols, i = a ? function(o) {
    for (var s = []; o; )
      e(s, t(o)), o = r(o);
    return s;
  } : n;
  return sa = i, sa;
}
var ua, Al;
function nm() {
  if (Al)
    return ua;
  Al = 1;
  var e = Sr(), r = gd();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ua = t, ua;
}
var la, Rl;
function hd() {
  if (Rl)
    return la;
  Rl = 1;
  var e = $o(), r = ce;
  function t(n, a, i) {
    var o = a(n);
    return r(n) ? o : e(o, i(n));
  }
  return la = t, la;
}
var ca, El;
function pd() {
  if (El)
    return ca;
  El = 1;
  var e = hd(), r = Do(), t = Ir;
  function n(a) {
    return e(a, t, r);
  }
  return ca = n, ca;
}
var fa, Cl;
function Bo() {
  if (Cl)
    return fa;
  Cl = 1;
  var e = hd(), r = gd(), t = Lo();
  function n(a) {
    return e(a, t, r);
  }
  return fa = n, fa;
}
var da, Tl;
function am() {
  if (Tl)
    return da;
  Tl = 1;
  var e = Ze(), r = _e(), t = e(r, "DataView");
  return da = t, da;
}
var ga, Sl;
function im() {
  if (Sl)
    return ga;
  Sl = 1;
  var e = Ze(), r = _e(), t = e(r, "Promise");
  return ga = t, ga;
}
var ha, Il;
function vd() {
  if (Il)
    return ha;
  Il = 1;
  var e = Ze(), r = _e(), t = e(r, "Set");
  return ha = t, ha;
}
var pa, wl;
function gr() {
  if (wl)
    return pa;
  wl = 1;
  var e = am(), r = xo(), t = im(), n = vd(), a = Nf(), i = Xe, o = jf(), s = "[object Map]", u = "[object Object]", l = "[object Promise]", f = "[object Set]", h = "[object WeakMap]", g = "[object DataView]", p = o(e), _ = o(r), v = o(t), A = o(n), b = o(a), y = i;
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
  }), pa = y, pa;
}
var va, ql;
function om() {
  if (ql)
    return va;
  ql = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return va = t, va;
}
var _a, Ol;
function _d() {
  if (Ol)
    return _a;
  Ol = 1;
  var e = _e(), r = e.Uint8Array;
  return _a = r, _a;
}
var ya, xl;
function Fo() {
  if (xl)
    return ya;
  xl = 1;
  var e = _d();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return ya = r, ya;
}
var ma, Pl;
function sm() {
  if (Pl)
    return ma;
  Pl = 1;
  var e = Fo();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return ma = r, ma;
}
var ba, kl;
function um() {
  if (kl)
    return ba;
  kl = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return ba = r, ba;
}
var Aa, Ll;
function lm() {
  if (Ll)
    return Aa;
  Ll = 1;
  var e = dr, r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return Aa = n, Aa;
}
var Ra, Dl;
function cm() {
  if (Dl)
    return Ra;
  Dl = 1;
  var e = Fo();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return Ra = r, Ra;
}
var Ea, $l;
function fm() {
  if ($l)
    return Ea;
  $l = 1;
  var e = Fo(), r = sm(), t = um(), n = lm(), a = cm(), i = "[object Boolean]", o = "[object Date]", s = "[object Map]", u = "[object Number]", l = "[object RegExp]", f = "[object Set]", h = "[object String]", g = "[object Symbol]", p = "[object ArrayBuffer]", _ = "[object DataView]", v = "[object Float32Array]", A = "[object Float64Array]", b = "[object Int8Array]", y = "[object Int16Array]", E = "[object Int32Array]", C = "[object Uint8Array]", P = "[object Uint8ClampedArray]", q = "[object Uint16Array]", w = "[object Uint32Array]";
  function k(G, te, M) {
    var Q = G.constructor;
    switch (te) {
      case p:
        return e(G);
      case i:
      case o:
        return new Q(+G);
      case _:
        return r(G, M);
      case v:
      case A:
      case b:
      case y:
      case E:
      case C:
      case P:
      case q:
      case w:
        return a(G, M);
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
  return Ea = k, Ea;
}
var Ca, Ml;
function dm() {
  if (Ml)
    return Ca;
  Ml = 1;
  var e = zr(), r = Mo, t = Zr;
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return Ca = n, Ca;
}
var Ta, Bl;
function gm() {
  if (Bl)
    return Ta;
  Bl = 1;
  var e = gr(), r = Ee, t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ta = n, Ta;
}
var Sa, Fl;
function hm() {
  if (Fl)
    return Sa;
  Fl = 1;
  var e = gm(), r = Io(), t = wo(), n = t && t.isMap, a = n ? r(n) : e;
  return Sa = a, Sa;
}
var Ia, Wl;
function pm() {
  if (Wl)
    return Ia;
  Wl = 1;
  var e = gr(), r = Ee, t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ia = n, Ia;
}
var wa, jl;
function vm() {
  if (jl)
    return wa;
  jl = 1;
  var e = pm(), r = Io(), t = wo(), n = t && t.isSet, a = n ? r(n) : e;
  return wa = a, wa;
}
var qa, Nl;
function Wo() {
  if (Nl)
    return qa;
  Nl = 1;
  var e = ko(), r = bo, t = To(), n = fd, a = Xy(), i = Zy(), o = Yr, s = em(), u = nm(), l = pd(), f = Bo(), h = gr(), g = om(), p = fm(), _ = dm(), v = ce, A = Xr(), b = hm(), y = Le, E = vm(), C = Ir, P = Lo(), q = 1, w = 2, k = 4, G = "[object Arguments]", te = "[object Array]", M = "[object Boolean]", Q = "[object Date]", ae = "[object Error]", ee = "[object Function]", fe = "[object GeneratorFunction]", $e = "[object Map]", tr = "[object Number]", Me = "[object Object]", nr = "[object RegExp]", ar = "[object Set]", Ue = "[object String]", ze = "[object Symbol]", ie = "[object WeakMap]", qe = "[object ArrayBuffer]", O = "[object DataView]", T = "[object Float32Array]", I = "[object Float64Array]", L = "[object Int8Array]", B = "[object Int16Array]", X = "[object Int32Array]", pe = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", de = "[object Uint16Array]", ir = "[object Uint32Array]", j = {};
  j[G] = j[te] = j[qe] = j[O] = j[M] = j[Q] = j[T] = j[I] = j[L] = j[B] = j[X] = j[$e] = j[tr] = j[Me] = j[nr] = j[ar] = j[Ue] = j[ze] = j[pe] = j[oe] = j[de] = j[ir] = !0, j[ae] = j[ee] = j[ie] = !1;
  function He(K, be, Be, Ye, Fe, Se) {
    var se, Ve = be & q, We = be & w, _t = be & k;
    if (Be && (se = Fe ? Be(K, Ye, Fe, Se) : Be(K)), se !== void 0)
      return se;
    if (!y(K))
      return K;
    var qr = v(K);
    if (qr) {
      if (se = g(K), !Ve)
        return o(K, se);
    } else {
      var je = h(K), Or = je == ee || je == fe;
      if (A(K))
        return i(K, Ve);
      if (je == Me || je == G || Or && !Fe) {
        if (se = We || Or ? {} : _(K), !Ve)
          return We ? u(K, a(se, K)) : s(K, n(se, K));
      } else {
        if (!j[je])
          return Fe ? K : {};
        se = p(K, je, Ve);
      }
    }
    Se || (Se = new e());
    var xr = Se.get(K);
    if (xr)
      return xr;
    Se.set(K, se), E(K) ? K.forEach(function(ye) {
      se.add(He(ye, be, Be, ye, K, Se));
    }) : b(K) && K.forEach(function(ye, Ie) {
      se.set(Ie, He(ye, be, Be, Ie, K, Se));
    });
    var yt = _t ? We ? f : l : We ? P : C, Pr = qr ? void 0 : yt(K);
    return r(Pr || K, function(ye, Ie) {
      Pr && (Ie = ye, ye = K[Ie]), t(se, Ie, He(ye, be, Be, Ie, K, Se));
    }), se;
  }
  return qa = He, qa;
}
var _m = Wo(), ym = 4;
function mm(e) {
  return _m(e, ym);
}
var bm = mm, Am = Eo, Rm = 8;
function jo(e, r, t) {
  r = t ? void 0 : r;
  var n = Am(e, Rm, void 0, void 0, void 0, void 0, void 0, r);
  return n.placeholder = jo.placeholder, n;
}
jo.placeholder = {};
var Em = jo, Cm = Xe, Tm = Mo, Sm = Ee, Im = "[object Object]", wm = Function.prototype, qm = Object.prototype, yd = wm.toString, Om = qm.hasOwnProperty, xm = yd.call(Object);
function Pm(e) {
  if (!Sm(e) || Cm(e) != Im)
    return !1;
  var r = Tm(e);
  if (r === null)
    return !0;
  var t = Om.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && yd.call(t) == xm;
}
var md = Pm, km = Xe, Lm = Ee, Dm = md, $m = "[object DOMException]", Mm = "[object Error]";
function Bm(e) {
  if (!Lm(e))
    return !1;
  var r = km(e);
  return r == Mm || r == $m || typeof e.message == "string" && typeof e.name == "string" && !Dm(e);
}
var Fm = Bm, Wm = gr(), jm = Ee, Nm = "[object WeakMap]";
function Km(e) {
  return jm(e) && Wm(e) == Nm;
}
var Gm = Km, Oa, Kl;
function Um() {
  if (Kl)
    return Oa;
  Kl = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return Oa = r, Oa;
}
var xa, Gl;
function zm() {
  if (Gl)
    return xa;
  Gl = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return xa = e, xa;
}
var Pa, Ul;
function bd() {
  if (Ul)
    return Pa;
  Ul = 1;
  var e = Po(), r = Um(), t = zm();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Pa = n, Pa;
}
var ka, zl;
function Hm() {
  if (zl)
    return ka;
  zl = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return ka = e, ka;
}
var La, Hl;
function Ad() {
  if (Hl)
    return La;
  Hl = 1;
  function e(r, t) {
    return r.has(t);
  }
  return La = e, La;
}
var Da, Yl;
function Rd() {
  if (Yl)
    return Da;
  Yl = 1;
  var e = bd(), r = Hm(), t = Ad(), n = 1, a = 2;
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
  return Da = i, Da;
}
var $a, Vl;
function Ym() {
  if (Vl)
    return $a;
  Vl = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return $a = e, $a;
}
var Ma, Jl;
function No() {
  if (Jl)
    return Ma;
  Jl = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Ma = e, Ma;
}
var Ba, Xl;
function Vm() {
  if (Xl)
    return Ba;
  Xl = 1;
  var e = dr, r = _d(), t = Co(), n = Rd(), a = Ym(), i = No(), o = 1, s = 2, u = "[object Boolean]", l = "[object Date]", f = "[object Error]", h = "[object Map]", g = "[object Number]", p = "[object RegExp]", _ = "[object Set]", v = "[object String]", A = "[object Symbol]", b = "[object ArrayBuffer]", y = "[object DataView]", E = e ? e.prototype : void 0, C = E ? E.valueOf : void 0;
  function P(q, w, k, G, te, M, Q) {
    switch (k) {
      case y:
        if (q.byteLength != w.byteLength || q.byteOffset != w.byteOffset)
          return !1;
        q = q.buffer, w = w.buffer;
      case b:
        return !(q.byteLength != w.byteLength || !M(new r(q), new r(w)));
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
        var $e = n(ae(q), ae(w), G, te, M, Q);
        return Q.delete(q), $e;
      case A:
        if (C)
          return C.call(q) == C.call(w);
    }
    return !1;
  }
  return Ba = P, Ba;
}
var Fa, Zl;
function Jm() {
  if (Zl)
    return Fa;
  Zl = 1;
  var e = pd(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
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
  return Fa = a, Fa;
}
var Wa, Ql;
function Xm() {
  if (Ql)
    return Wa;
  Ql = 1;
  var e = ko(), r = Rd(), t = Vm(), n = Jm(), a = gr(), i = ce, o = Xr(), s = qo(), u = 1, l = "[object Arguments]", f = "[object Array]", h = "[object Object]", g = Object.prototype, p = g.hasOwnProperty;
  function _(v, A, b, y, E, C) {
    var P = i(v), q = i(A), w = P ? f : a(v), k = q ? f : a(A);
    w = w == l ? h : w, k = k == l ? h : k;
    var G = w == h, te = k == h, M = w == k;
    if (M && o(v)) {
      if (!o(A))
        return !1;
      P = !0, G = !1;
    }
    if (M && !G)
      return C || (C = new e()), P || s(v) ? r(v, A, b, y, E, C) : t(v, A, w, b, y, E, C);
    if (!(b & u)) {
      var Q = G && p.call(v, "__wrapped__"), ae = te && p.call(A, "__wrapped__");
      if (Q || ae) {
        var ee = Q ? v.value() : v, fe = ae ? A.value() : A;
        return C || (C = new e()), E(ee, fe, b, y, C);
      }
    }
    return M ? (C || (C = new e()), n(v, A, b, y, E, C)) : !1;
  }
  return Wa = _, Wa;
}
var ja, ec;
function Ko() {
  if (ec)
    return ja;
  ec = 1;
  var e = Xm(), r = Ee;
  function t(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, o, t, s);
  }
  return ja = t, ja;
}
var Na, rc;
function Zm() {
  if (rc)
    return Na;
  rc = 1;
  var e = ko(), r = Ko(), t = 1, n = 2;
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
  return Na = a, Na;
}
var Ka, tc;
function Ed() {
  if (tc)
    return Ka;
  tc = 1;
  var e = Le;
  function r(t) {
    return t === t && !e(t);
  }
  return Ka = r, Ka;
}
var Ga, nc;
function Qm() {
  if (nc)
    return Ga;
  nc = 1;
  var e = Ed(), r = Ir;
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Ga = t, Ga;
}
var Ua, ac;
function Cd() {
  if (ac)
    return Ua;
  ac = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return Ua = e, Ua;
}
var za, ic;
function eb() {
  if (ic)
    return za;
  ic = 1;
  var e = Zm(), r = Qm(), t = Cd();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return za = n, za;
}
var Ha, oc;
function Go() {
  if (oc)
    return Ha;
  oc = 1;
  var e = ce, r = Tr, t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || o != null && i in Object(o);
  }
  return Ha = a, Ha;
}
var Ya, sc;
function Td() {
  if (sc)
    return Ya;
  sc = 1;
  var e = Po(), r = "Expected a function";
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
  return t.Cache = e, Ya = t, Ya;
}
var rb = Td(), tb = 500;
function nb(e) {
  var r = rb(e, function(n) {
    return t.size === tb && t.clear(), n;
  }), t = r.cache;
  return r;
}
var ab = nb, ib = ab, ob = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sb = /\\(\\)?/g, ub = ib(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(ob, function(t, n, a, i) {
    r.push(a ? i.replace(sb, "$1") : n || t);
  }), r;
}), Sd = ub, Va, uc;
function at() {
  if (uc)
    return Va;
  uc = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return Va = e, Va;
}
var Ja, lc;
function Id() {
  if (lc)
    return Ja;
  lc = 1;
  var e = dr, r = at(), t = ce, n = Tr, a = 1 / 0, i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
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
  return Ja = s, Ja;
}
var Xa, cc;
function Uo() {
  if (cc)
    return Xa;
  cc = 1;
  var e = Id();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return Xa = r, Xa;
}
var Za, fc;
function hr() {
  if (fc)
    return Za;
  fc = 1;
  var e = ce, r = Go(), t = Sd, n = Uo();
  function a(i, o) {
    return e(i) ? i : r(i, o) ? [i] : t(n(i));
  }
  return Za = a, Za;
}
var lb = Tr, cb = 1 / 0;
function fb(e) {
  if (typeof e == "string" || lb(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -cb ? "-0" : r;
}
var Qe = fb, Qa, dc;
function it() {
  if (dc)
    return Qa;
  dc = 1;
  var e = hr(), r = Qe;
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[r(a[i++])];
    return i && i == o ? n : void 0;
  }
  return Qa = t, Qa;
}
var ei, gc;
function wd() {
  if (gc)
    return ei;
  gc = 1;
  var e = it();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return ei = r, ei;
}
var ri, hc;
function db() {
  if (hc)
    return ri;
  hc = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return ri = e, ri;
}
var ti, pc;
function gb() {
  if (pc)
    return ti;
  pc = 1;
  var e = hr(), r = Jr(), t = ce, n = Vr, a = So(), i = Qe;
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
  return ti = o, ti;
}
var ni, vc;
function qd() {
  if (vc)
    return ni;
  vc = 1;
  var e = db(), r = gb();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return ni = t, ni;
}
var ai, _c;
function hb() {
  if (_c)
    return ai;
  _c = 1;
  var e = Ko(), r = wd(), t = qd(), n = Go(), a = Ed(), i = Cd(), o = Qe, s = 1, u = 2;
  function l(f, h) {
    return n(f) && a(h) ? i(o(f), h) : function(g) {
      var p = r(g, f);
      return p === void 0 && p === h ? t(g, f) : e(h, p, s | u);
    };
  }
  return ai = l, ai;
}
var ii, yc;
function pb() {
  if (yc)
    return ii;
  yc = 1;
  function e(r) {
    return function(t) {
      return t == null ? void 0 : t[r];
    };
  }
  return ii = e, ii;
}
var oi, mc;
function vb() {
  if (mc)
    return oi;
  mc = 1;
  var e = it();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return oi = r, oi;
}
var si, bc;
function _b() {
  if (bc)
    return si;
  bc = 1;
  var e = pb(), r = vb(), t = Go(), n = Qe;
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return si = a, si;
}
var ui, Ac;
function ot() {
  if (Ac)
    return ui;
  Ac = 1;
  var e = eb(), r = hb(), t = go(), n = ce, a = _b();
  function i(o) {
    return typeof o == "function" ? o : o == null ? t : typeof o == "object" ? n(o) ? r(o[0], o[1]) : e(o) : a(o);
  }
  return ui = i, ui;
}
var yb = Wo(), mb = ot(), bb = 1;
function Ab(e) {
  return mb(typeof e == "function" ? e : yb(e, bb));
}
var Rb = Ab, li, Rc;
function Eb() {
  if (Rc)
    return li;
  Rc = 1;
  var e = dr, r = Jr(), t = ce, n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return li = a, li;
}
var ci, Ec;
function Cb() {
  if (Ec)
    return ci;
  Ec = 1;
  var e = $o(), r = Eb();
  function t(n, a, i, o, s) {
    var u = -1, l = n.length;
    for (i || (i = r), s || (s = []); ++u < l; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? t(f, a - 1, i, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return ci = t, ci;
}
var fi, Cc;
function Tb() {
  if (Cc)
    return fi;
  Cc = 1;
  var e = Cb();
  function r(t) {
    var n = t == null ? 0 : t.length;
    return n ? e(t, 1) : [];
  }
  return fi = r, fi;
}
var di, Tc;
function Sb() {
  if (Tc)
    return di;
  Tc = 1;
  var e = po(), r = Math.max;
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
  return di = t, di;
}
var gi, Sc;
function st() {
  if (Sc)
    return gi;
  Sc = 1;
  var e = Tb(), r = Sb(), t = Qf();
  function n(a) {
    return t(r(a, void 0, e), a + "");
  }
  return gi = n, gi;
}
var Ib = Eo, wb = st(), qb = 256, Ob = wb(function(e, r) {
  return Ib(e, qb, void 0, void 0, void 0, r);
}), xb = Ob, Pb = at(), kb = Yr, Lb = ce, Db = Tr, $b = Sd, Mb = Qe, Bb = Uo();
function Fb(e) {
  return Lb(e) ? Pb(e, Mb) : Db(e) ? [e] : kb($b(Bb(e)));
}
var Wb = Fb, jb = {
  ary: Y_,
  assign: fd,
  clone: bm,
  curry: Em,
  forEach: bo,
  isArray: ce,
  isError: Fm,
  isFunction: ho,
  isWeakMap: Gm,
  iteratee: Rb,
  keys: Oo,
  rearg: xb,
  toInteger: sd,
  toPath: Wb
}, Nb = Dh, Kb = jb;
function Gb(e, r, t) {
  return Nb(Kb, e, r, t);
}
var Ce = Gb, hi, Ic;
function Ub() {
  if (Ic)
    return hi;
  Ic = 1;
  var e = mo(), r = st(), t = yo(), n = Yf(), a = ce, i = Vf(), o = "Expected a function", s = 8, u = 32, l = 128, f = 256;
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
  return hi = h, hi;
}
var pi, wc;
function zb() {
  if (wc)
    return pi;
  wc = 1;
  var e = Ub(), r = e();
  return pi = r, pi;
}
var Hb = Ce, Od = Hb("flow", zb());
Od.placeholder = me();
var er = Od, Yb = Ce, xd = Yb("get", wd());
xd.placeholder = me();
var rr = xd, vi, qc;
function Vb() {
  if (qc)
    return vi;
  qc = 1;
  var e = Oo, r = gr(), t = Jr(), n = ce, a = Qr(), i = Xr(), o = Zr, s = qo(), u = "[object Map]", l = "[object Set]", f = Object.prototype, h = f.hasOwnProperty;
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
  return vi = g, vi;
}
var _i, Oc;
function Pd() {
  return Oc || (Oc = 1, _i = {
    cap: !1,
    curry: !1,
    fixed: !1,
    immutable: !1,
    rearg: !1
  }), _i;
}
var Jb = Ce, kd = Jb("isEmpty", Vb(), Pd());
kd.placeholder = me();
var De = kd, yi, xc;
function Xb() {
  if (xc)
    return yi;
  xc = 1;
  function e(r) {
    var t = r == null ? 0 : r.length;
    return t ? r[t - 1] : void 0;
  }
  return yi = e, yi;
}
var mi, Pc;
function Ld() {
  if (Pc)
    return mi;
  Pc = 1;
  function e(r, t, n) {
    var a = -1, i = r.length;
    t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = r[a + t];
    return o;
  }
  return mi = e, mi;
}
var bi, kc;
function Zb() {
  if (kc)
    return bi;
  kc = 1;
  var e = it(), r = Ld();
  function t(n, a) {
    return a.length < 2 ? n : e(n, r(a, 0, -1));
  }
  return bi = t, bi;
}
var Ai, Lc;
function Qb() {
  if (Lc)
    return Ai;
  Lc = 1;
  var e = hr(), r = Xb(), t = Zb(), n = Qe;
  function a(i, o) {
    return o = e(o, i), i = t(i, o), i == null || delete i[n(r(o))];
  }
  return Ai = a, Ai;
}
var Ri, Dc;
function e1() {
  if (Dc)
    return Ri;
  Dc = 1;
  var e = md;
  function r(t) {
    return e(t) ? void 0 : t;
  }
  return Ri = r, Ri;
}
var Ei, $c;
function r1() {
  if ($c)
    return Ei;
  $c = 1;
  var e = at(), r = Wo(), t = Qb(), n = hr(), a = Sr(), i = e1(), o = st(), s = Bo(), u = 1, l = 2, f = 4, h = o(function(g, p) {
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
  return Ei = h, Ei;
}
var t1 = Ce, Dd = t1("omit", r1());
Dd.placeholder = me();
var n1 = Dd, Ci, Mc;
function a1() {
  if (Mc)
    return Ci;
  Mc = 1;
  var e = To(), r = hr(), t = Vr, n = Le, a = Qe;
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
  return Ci = i, Ci;
}
var Ti, Bc;
function $d() {
  if (Bc)
    return Ti;
  Bc = 1;
  var e = it(), r = a1(), t = hr();
  function n(a, i, o) {
    for (var s = -1, u = i.length, l = {}; ++s < u; ) {
      var f = i[s], h = e(a, f);
      o(h, f) && r(l, t(f, a), h);
    }
    return l;
  }
  return Ti = n, Ti;
}
var Si, Fc;
function i1() {
  if (Fc)
    return Si;
  Fc = 1;
  var e = $d(), r = qd();
  function t(n, a) {
    return e(n, a, function(i, o) {
      return r(n, o);
    });
  }
  return Si = t, Si;
}
var Ii, Wc;
function o1() {
  if (Wc)
    return Ii;
  Wc = 1;
  var e = i1(), r = st(), t = r(function(n, a) {
    return n == null ? {} : e(n, a);
  });
  return Ii = t, Ii;
}
var s1 = Ce, Md = s1("pick", o1());
Md.placeholder = me();
var u1 = Md, wi, jc;
function l1() {
  if (jc)
    return wi;
  jc = 1;
  function e(r, t, n, a) {
    var i = -1, o = r == null ? 0 : r.length;
    for (a && o && (n = r[++i]); ++i < o; )
      n = t(n, r[i], i, r);
    return n;
  }
  return wi = e, wi;
}
var qi, Nc;
function c1() {
  if (Nc)
    return qi;
  Nc = 1;
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
  return qi = e, qi;
}
var Oi, Kc;
function f1() {
  if (Kc)
    return Oi;
  Kc = 1;
  var e = c1(), r = e();
  return Oi = r, Oi;
}
var xi, Gc;
function d1() {
  if (Gc)
    return xi;
  Gc = 1;
  var e = f1(), r = Ir;
  function t(n, a) {
    return n && e(n, a, r);
  }
  return xi = t, xi;
}
var Pi, Uc;
function g1() {
  if (Uc)
    return Pi;
  Uc = 1;
  var e = Qr();
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
  return Pi = r, Pi;
}
var ki, zc;
function h1() {
  if (zc)
    return ki;
  zc = 1;
  var e = d1(), r = g1(), t = r(e);
  return ki = t, ki;
}
var Li, Hc;
function p1() {
  if (Hc)
    return Li;
  Hc = 1;
  function e(r, t, n, a, i) {
    return i(r, function(o, s, u) {
      n = a ? (a = !1, o) : t(n, o, s, u);
    }), n;
  }
  return Li = e, Li;
}
var Di, Yc;
function v1() {
  if (Yc)
    return Di;
  Yc = 1;
  var e = l1(), r = h1(), t = ot(), n = p1(), a = ce;
  function i(o, s, u) {
    var l = a(o) ? e : n, f = arguments.length < 3;
    return l(o, t(s, 4), u, f, r);
  }
  return Di = i, Di;
}
var _1 = Ce, Bd = _1("reduce", v1());
Bd.placeholder = me();
var y1 = Bd, $i, Vc;
function m1() {
  if (Vc)
    return $i;
  Vc = 1;
  var e = Ld();
  function r(t, n, a) {
    var i = t.length;
    return a = a === void 0 ? i : a, !n && a >= i ? t : e(t, n, a);
  }
  return $i = r, $i;
}
var Mi, Jc;
function b1() {
  if (Jc)
    return Mi;
  Jc = 1;
  var e = Ao();
  function r(t, n) {
    for (var a = t.length; a-- && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return Mi = r, Mi;
}
var Bi, Xc;
function A1() {
  if (Xc)
    return Bi;
  Xc = 1;
  var e = Ao();
  function r(t, n) {
    for (var a = -1, i = t.length; ++a < i && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return Bi = r, Bi;
}
var Fi, Zc;
function R1() {
  if (Zc)
    return Fi;
  Zc = 1;
  function e(r) {
    return r.split("");
  }
  return Fi = e, Fi;
}
var Wi, Qc;
function E1() {
  if (Qc)
    return Wi;
  Qc = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(l) {
    return s.test(l);
  }
  return Wi = u, Wi;
}
var ji, ef;
function C1() {
  if (ef)
    return ji;
  ef = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + u + ")", f = "[^" + e + "]", h = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", _ = l + "?", v = "[" + i + "]?", A = "(?:" + p + "(?:" + [f, h, g].join("|") + ")" + v + _ + ")*", b = v + _ + A, y = "(?:" + [f + s + "?", s, h, g, o].join("|") + ")", E = RegExp(u + "(?=" + u + ")|" + y + b, "g");
  function C(P) {
    return P.match(E) || [];
  }
  return ji = C, ji;
}
var Ni, rf;
function T1() {
  if (rf)
    return Ni;
  rf = 1;
  var e = R1(), r = E1(), t = C1();
  function n(a) {
    return r(a) ? t(a) : e(a);
  }
  return Ni = n, Ni;
}
var Ki, tf;
function S1() {
  if (tf)
    return Ki;
  tf = 1;
  var e = Id(), r = od(), t = m1(), n = b1(), a = A1(), i = T1(), o = Uo();
  function s(u, l, f) {
    if (u = o(u), u && (f || l === void 0))
      return r(u);
    if (!u || !(l = e(l)))
      return u;
    var h = i(u), g = i(l), p = a(h, g), _ = n(h, g) + 1;
    return t(h, p, _).join("");
  }
  return Ki = s, Ki;
}
var I1 = Ce, Fd = I1("trim", S1());
Fd.placeholder = me();
var Wd = Fd;
const jd = Re(ke)`
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
`, w1 = {
  format_bold: Wg,
  format_italic: jg,
  format_list_bulleted: Ng,
  ["k-u-align-left"]: Kg,
  ["k-u-align-center"]: Gg,
  ["k-u-align-right"]: Ug,
  image: zg,
  video: Hg,
  link: Yg,
  button_link: Vg,
  quote: Jg
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
  }] = V(H), u = w1[a], l = s == null ? void 0 : s.controls[n ? `activated_${a}` : a];
  return /* @__PURE__ */ d(jd, {
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
  return /* @__PURE__ */ d(yr.Label, {
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
  }, []), /* @__PURE__ */ $(ue, {
    children: [/* @__PURE__ */ d("div", {
      style: f,
      className: h,
      children: /* @__PURE__ */ d(yr.Input, {
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
    }), /* @__PURE__ */ d(xf, {
      name: e,
      children: (P) => /* @__PURE__ */ d(yr.ErrorMessage, {
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
const ut = ({
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
    children: /* @__PURE__ */ d(Xg, {
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
ut.defaultProps = {
  onClick: () => {
  },
  isDisabled: !1
};
ut.propTypes = {
  name: m.string.isRequired,
  onClick: m.func,
  isDisabled: m.bool
};
const Nd = ({
  className: e,
  ...r
}) => {
  const [{
    translations: t
  }] = V(H);
  return /* @__PURE__ */ $(ke, {
    modifier: "helium",
    size: "large",
    "aria-live": "polite",
    as: "div",
    className: we("k-u-cursor-not-allowed", e),
    ...r,
    children: [/* @__PURE__ */ d(Zg, {
      color: "var(--color-grey-000)"
    }), /* @__PURE__ */ d(Qg, {
      children: t.button_loading
    })]
  });
}, q1 = Re(eh)`
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
`, Kd = ({
  onDelete: e,
  url: r
}) => {
  const [{
    translations: t
  }] = V(H);
  return /* @__PURE__ */ $(q1, {
    position: "top",
    shadow: !0,
    borderWidth: 1,
    contentEditable: !1,
    borderColor: "var(--color-grey-400)",
    color: "var(--color-grey-000)",
    borderRadius: 4,
    children: [/* @__PURE__ */ d(ro, {
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
    }), /* @__PURE__ */ d(ro, {
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
}, io = Er();
io.tlds(Cr);
const Gd = Re.div`
  position: relative;
  margin: ${x(30)} 0;

  @media (min-width: ${x(Ke.S.min)}) {
    display: inline-block;
  }
`, Ud = ({
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
}), O1 = ({
  contentState: e,
  entityKey: r,
  children: t
}) => {
  const [n, a] = le(!1), {
    url: i
  } = e.getEntity(r).getData(), [{
    editorState: o,
    focus: s
  }, u] = V(H), l = vt(e, o, r);
  return ve(() => {
    setTimeout(() => a(l && s), 0);
  }, [s, o]), /* @__PURE__ */ $(Gd, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ d(Ud, {
      href: i,
      children: t
    }), n && /* @__PURE__ */ d(Kd, {
      url: i,
      onDelete: () => {
        e.getBlockForKey(o.getSelection().getFocusKey()).findEntityRanges((h) => h.getEntity() === r, (h, g) => {
          const p = o.getSelection().merge({
            focusOffset: g,
            anchorOffset: h
          }), _ = lr.applyEntity(e, p, null);
          u(Y(F.push(o, _, "apply-entity")));
        });
      }
    })]
  });
}, zd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BUTTON_LINK";
  }, r);
}, x1 = {
  strategy: zd,
  component: O1
}, P1 = {
  strategy: zd,
  component: (e) => {
    const {
      url: r
    } = e.contentState.getEntity(e.entityKey).getData();
    return /* @__PURE__ */ d(Gd, {
      children: /* @__PURE__ */ d(Ud, {
        href: r,
        children: e.children
      })
    });
  }
}, zo = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = le(!1), [{
    editorState: a,
    editorRef: i,
    translations: o
  }, s] = V(H), u = pr(a), l = pt(a), f = () => u ? Qo(a, l) : Zo(a);
  return /* @__PURE__ */ $(ue, {
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
      }) => /* @__PURE__ */ $(ue, {
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
            const p = io.match(g), _ = a.getCurrentContent();
            if (u) {
              const v = _.replaceEntityData(l, {
                url: p[0].url
              });
              s(Y(F.push(a, v, "change-block-data")));
            } else {
              const v = _.createEntity("BUTTON_LINK", "MUTABLE", {
                url: p[0].url
              }), A = v.getLastCreatedEntityKey(), b = F.set(a, {
                currentContent: v
              });
              s(Y(Ge.toggleLink(b, b.getSelection(), A)));
            }
            h(), setTimeout(() => i.current.blur(), 0);
          },
          children: ({
            handleSubmit: g
          }) => /* @__PURE__ */ d("form", {
            children: /* @__PURE__ */ $(J.Content, {
              align: "left",
              children: [/* @__PURE__ */ $("div", {
                children: [/* @__PURE__ */ d(Ae, {
                  htmlFor: "",
                  children: o.button_link.text
                }), /* @__PURE__ */ d(Pe, {
                  name: "text",
                  disabled: !0
                })]
              }), /* @__PURE__ */ $("div", {
                children: [/* @__PURE__ */ d(Ae, {
                  htmlFor: "url",
                  children: o.button_link.url
                }), /* @__PURE__ */ d(Pe, {
                  name: "url",
                  validate: (p) => {
                    if (!io.test(p))
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
zo.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
zo.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const k1 = Re(to)`
  .k-ButtonGroup__button {
    width: 50%;
  }
`, L1 = Re.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
  background-color: var(--color-grey-200);
`, Ne = {
  URL: "URL",
  FILE: "FILE"
}, D1 = ({
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
  } = vh(), [, , f] = Fr("url"), [, , h] = Fr("file");
  return /* @__PURE__ */ $("form", {
    children: [/* @__PURE__ */ $(k1, {
      className: "k-u-margin-bottom-double",
      children: [/* @__PURE__ */ d(to.Button, {
        active: a === Ne.FILE,
        onClick: () => {
          i(Ne.FILE), r(void 0);
        },
        children: o.image_upload.button_file
      }), /* @__PURE__ */ d(to.Button, {
        active: a === Ne.URL,
        onClick: () => {
          i(Ne.URL), r(void 0);
        },
        children: o.image_upload.button_url
      })]
    }), /* @__PURE__ */ $("div", {
      "aria-live": "polite",
      children: [a === Ne.FILE && !e && /* @__PURE__ */ d(rh, {
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
        buttonText: /* @__PURE__ */ $("div", {
          className: "k-u-flex k-u-flex-direction-column k-u-flex-gap-noneHalf",
          children: [/* @__PURE__ */ d("span", {
            children: o.image_upload.help_file.formats
          }), /* @__PURE__ */ d("span", {
            children: o.image_upload.help_file.width
          }), /* @__PURE__ */ d("span", {
            children: o.image_upload.help_file.size
          })]
        })
      }), a === Ne.URL && /* @__PURE__ */ $(ue, {
        children: [/* @__PURE__ */ d("div", {
          className: "k-u-margin-top-single",
          children: /* @__PURE__ */ d(Ae, {
            htmlFor: "url",
            children: o.image_upload.label
          })
        }), /* @__PURE__ */ d(ut, {
          name: "url",
          placeholder: "https://",
          buttonValue: o.image_upload.preview,
          onClick: () => {
            r(u.url);
          },
          onKeyPress: (g) => {
            g.key === "Enter" && (g.preventDefault(), g.stopPropagation(), g.target.nextSibling.focus(), g.target.nextSibling.click());
          }
        }), /* @__PURE__ */ d(xf, {
          name: "url",
          children: (g) => /* @__PURE__ */ d(yr.ErrorMessage, {
            children: g
          })
        })]
      })]
    }), e && /* @__PURE__ */ $(ue, {
      children: [/* @__PURE__ */ $("div", {
        className: "k-u-margin-top-single",
        children: [/* @__PURE__ */ d(L1, {
          src: e,
          alt: ""
        }), a === Ne.FILE && /* @__PURE__ */ d("div", {
          className: "k-u-margin-top-singleHalf k-u-align-center",
          children: /* @__PURE__ */ d(ro, {
            size: "small",
            tag: "button",
            type: "button",
            weight: "regular",
            onClick: () => r(void 0),
            className: "k-u-reset-button k-u-link k-u-link-primary1",
            children: o.image_upload.modify_image
          })
        })]
      }), /* @__PURE__ */ $("div", {
        className: "k-u-margin-vertical-double",
        children: [/* @__PURE__ */ d(Ae, {
          htmlFor: "description",
          children: o.image_upload.description.label
        }), /* @__PURE__ */ d(Pe, {
          name: "description",
          tag: "autoresize",
          placeholder: o.image_upload.description.placeholder
        })]
      }), /* @__PURE__ */ d(Sf, {
        children: o.image_upload.description.helper
      }), /* @__PURE__ */ d(J.Actions, {
        className: "k-u-margin-top-triple",
        children: l ? /* @__PURE__ */ d(Nd, {
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
}, Hd = Er();
Hd.tlds(Cr);
const $1 = ({
  onClose: e,
  url: r = "",
  entityKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H);
  return ve(() => (i(mr(!0)), () => i(mr(!1))), []), /* @__PURE__ */ d(J, {
    isOpen: !0,
    onClose: e,
    zIndex: 1e3,
    children: ({
      close: o
    }) => /* @__PURE__ */ $(ue, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: a.link.title
      }), /* @__PURE__ */ d(fr, {
        initialValues: {
          url: r
        },
        onSubmit: ({
          url: s
        }) => {
          i(Y(vg(n, t, {
            url: s
          }))), o(), e();
        },
        children: () => /* @__PURE__ */ d(Pf, {
          children: /* @__PURE__ */ $(J.Content, {
            align: "left",
            children: [/* @__PURE__ */ $("div", {
              children: [/* @__PURE__ */ d(Ae, {
                htmlFor: "url",
                children: a.image_upload.url
              }), /* @__PURE__ */ d(Pe, {
                name: "url",
                validate: (s) => {
                  if (!Hd.test(s))
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
}, M1 = ({
  onClose: e,
  description: r,
  entityKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H);
  return ve(() => (i(mr(!0)), () => i(mr(!1))), []), /* @__PURE__ */ d(J, {
    isOpen: !0,
    onClose: e,
    zIndex: 1e3,
    children: ({
      close: o
    }) => /* @__PURE__ */ $(ue, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: a.image_upload.description.title
      }), /* @__PURE__ */ d(fr, {
        initialValues: {
          description: r
        },
        onSubmit: ({
          description: s
        }) => {
          i(Y(vg(n, t, {
            description: s
          }))), o(), e();
        },
        children: () => /* @__PURE__ */ d(Pf, {
          children: /* @__PURE__ */ $(J.Form, {
            children: [/* @__PURE__ */ $("div", {
              className: "k-u-margin-bottom-double",
              children: [/* @__PURE__ */ d(Ae, {
                htmlFor: "description",
                children: a.image_upload.description.label
              }), /* @__PURE__ */ d(Pe, {
                name: "description",
                tag: "autoresize",
                placeholder: a.image_upload.description.placeholder
              })]
            }), /* @__PURE__ */ d(Sf, {
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
}, B1 = ({
  contentState: e,
  entityKey: r,
  blockKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H), [o, s] = le(!1), [u, l] = le(!1), f = vt(n.getCurrentContent(), n, r), {
    src: h,
    url: g,
    description: p
  } = e.getEntity(r).getData(), [_, v] = le(f);
  ve(() => {
    v(f);
  }, [f, o, u]);
  const A = () => {
    setTimeout(() => i(Y(pg(n, t))), 1);
  }, b = (y) => {
    var w, k;
    y.preventDefault(), y.stopPropagation();
    const E = n.getCurrentContent().getBlockBefore(t), C = n.getCurrentContent().getKeyBefore(t), P = n.getCurrentContent().getKeyAfter(t);
    so(n, t);
    let q = br.createEmpty(C || P);
    q = q.merge({
      anchorOffset: (w = E == null ? void 0 : E.getLength()) != null ? w : 0,
      focusOffset: (k = E == null ? void 0 : E.getLength()) != null ? k : 0
    }), i(Y(F.forceSelection(so(n, t), q)));
  };
  return /* @__PURE__ */ $("div", {
    className: "u-Draft__image",
    onClick: A,
    children: [/* @__PURE__ */ $("div", {
      className: we("u-Draft__image-focus", {
        "u-Draft__image-focus__focused": f
      }),
      children: [/* @__PURE__ */ d("img", {
        src: Nr(h),
        alt: p
      }), /* @__PURE__ */ $(Je, {
        className: "u-Draft__image__menu",
        menuPosition: "center",
        positionedButton: !0,
        open: _,
        contentEditable: !1,
        onClose: () => v(!1),
        children: [/* @__PURE__ */ d(Je.Button, {
          onClick: () => s(!0),
          icon: /* @__PURE__ */ d(th, {}),
          children: De(p) ? a.image_upload.add_label : a.image_upload.modify_label
        }), !g && /* @__PURE__ */ d(Je.Button, {
          onClick: () => l(!0),
          icon: /* @__PURE__ */ d(hs, {}),
          children: a.link.title
        }), !!g && /* @__PURE__ */ $(ue, {
          children: [/* @__PURE__ */ d(Je.Separator, {}), /* @__PURE__ */ d(Je.Button, {
            onClick: (y) => {
              y.preventDefault(), y.stopPropagation(), i(Y(XA(n, r, ["url"])));
            },
            icon: /* @__PURE__ */ d(nh, {}),
            children: a.link.button.delete
          }), /* @__PURE__ */ $(Je.Link, {
            icon: /* @__PURE__ */ d(hs, {}),
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
          icon: /* @__PURE__ */ d(ah, {}),
          children: a.image_upload.remove_image
        })]
      })]
    }), o && /* @__PURE__ */ d(M1, {
      onClose: () => s(!1),
      entityKey: r,
      description: p
    }), u && /* @__PURE__ */ d($1, {
      entityKey: r,
      url: g,
      onClose: () => {
        l(!1);
      },
      isOpen: !0
    })]
  });
}, F1 = ({
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
        src: Nr(t),
        alt: a
      })
    }) : /* @__PURE__ */ d("img", {
      src: Nr(t),
      alt: a
    })
  });
}, Yd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, W1 = {
  strategy: Yd,
  component: B1
}, j1 = {
  strategy: Yd,
  component: F1
}, Ho = ({
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
  }, [a]), /* @__PURE__ */ $(ue, {
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
      }) => /* @__PURE__ */ $(ue, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: s.image_upload.title
        }), /* @__PURE__ */ d(J.Form, {
          children: /* @__PURE__ */ d(fr, {
            initialValues: {
              url: "",
              description: ""
            },
            validationSchema: Wr.object().shape({
              url: Wr.string().url(s.image.invalid_url).matches(/(?:jpg|jpeg|gif|png)$/, s.image.invalid_extension)
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
              }).getLastCreatedEntityKey(), q = Ef.insertAtomicBlock(o, P, " "), w = F.forceSelection(q, q.getCurrentContent().getSelectionAfter());
              if (gg(w)) {
                const k = hg(w);
                l(Y(k));
              } else
                l(Y(w));
              g(), i(!1), setTimeout(() => i(!1), 500);
            }),
            children: () => /* @__PURE__ */ d(D1, {
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
Ho.propTypes = {
  disabled: m.bool,
  onUpload: m.func,
  errorMessage: m.string
};
Ho.defaultProps = {
  disabled: !1,
  onUpload: () => null
};
const oo = Er();
oo.tlds(Cr);
const N1 = Re.div`
  display: flex;
  justify-content: center;
  img {
    max-height: ${x(200)};
    max-width: 100%;
  }
`, K1 = ({
  src: e
}) => /* @__PURE__ */ d(N1, {
  children: /* @__PURE__ */ d("img", {
    src: Nr(e),
    alt: ""
  })
}), Yo = ({
  onClose: e,
  isOpen: r,
  onChange: t
}) => {
  const [{
    editorState: n,
    editorRef: a,
    translations: i,
    disabled: o
  }, s] = V(H), u = pr(n), l = pt(n), f = () => u ? Qo(n, l) : Zo(n);
  return /* @__PURE__ */ d(J, {
    zIndex: 1e3,
    onClose: e,
    isOpen: r,
    children: ({
      close: h
    }) => /* @__PURE__ */ $(ue, {
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
          const p = oo.match(g), _ = n.getCurrentContent();
          if (t(), u)
            if ((u == null ? void 0 : u.get("type")) === "IMAGE") {
              const v = _.mergeEntityData(l, {
                url: p[0].url
              });
              s(Y(F.push(n, v, "change-block-data")));
            } else {
              const v = _.replaceEntityData(l, {
                url: p[0].url
              });
              s(Y(F.push(n, v, "change-block-data")));
            }
          else {
            const v = _.createEntity("LINK", "MUTABLE", {
              url: p[0].url
            }), A = v.getLastCreatedEntityKey(), b = F.set(n, {
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
            children: /* @__PURE__ */ $(J.Content, {
              align: "left",
              children: [/* @__PURE__ */ d("div", {
                children: (u == null ? void 0 : u.get("type")) === "IMAGE" ? /* @__PURE__ */ d(K1, {
                  src: (p = u == null ? void 0 : u.getData()) == null ? void 0 : p.src
                }) : /* @__PURE__ */ $(ue, {
                  children: [/* @__PURE__ */ d(Ae, {
                    htmlFor: "text",
                    children: i.link.text.label
                  }), /* @__PURE__ */ d(Pe, {
                    name: "text",
                    disabled: !0
                  })]
                })
              }), /* @__PURE__ */ $("div", {
                children: [/* @__PURE__ */ d(Ae, {
                  htmlFor: "url",
                  children: i.image_upload.url
                }), /* @__PURE__ */ d(Pe, {
                  name: "url",
                  validate: (_) => {
                    if (!oo.test(_))
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
Yo.propTypes = {
  onChange: m.func,
  onClose: m.func,
  isOpen: m.bool
};
Yo.defaultProps = {
  onChange: () => null,
  onClose: () => null,
  isOpen: !1
};
const G1 = Er();
G1.tlds(Cr);
const U1 = Re.div`
  display: inline-block;
  position: relative;
`, z1 = ({
  contentState: e,
  entityKey: r,
  children: t
}) => {
  const [n, a] = le(!1), {
    url: i
  } = e.getEntity(r).getData(), [{
    editorState: o,
    focus: s
  }, u] = V(H), l = vt(e, o, r);
  return ve(() => {
    setTimeout(() => a(l && s), 0);
  }, [s, o]), /* @__PURE__ */ $(U1, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ d("a", {
      href: i,
      target: "_blank",
      className: "k-u-link k-u-link-primary1",
      rel: "nofollow noopener",
      children: t
    }), n && /* @__PURE__ */ d(Kd, {
      url: i,
      onDelete: () => {
        var h;
        const f = e == null ? void 0 : e.getBlockForKey((h = o == null ? void 0 : o.getSelection()) == null ? void 0 : h.getFocusKey());
        !f || f.findEntityRanges((g) => g.getEntity() === r, (g, p) => {
          const _ = o.getSelection().merge({
            focusOffset: p,
            anchorOffset: g
          }), v = lr.applyEntity(e, _, null);
          u(Y(F.push(o, v, "apply-entity")));
        });
      }
    })]
  });
}, Vd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, H1 = {
  strategy: Vd,
  component: z1
}, Y1 = {
  strategy: Vd,
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
}, Vo = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = le(!1), [{
    editorState: a,
    editorRef: i,
    translations: o,
    disabled: s
  }, u] = V(H), l = pr(a), f = pt(a), h = () => l ? Qo(a, f) : Zo(a), g = () => {
    const _ = a.getSelection();
    setTimeout(() => i.current.focus(), 0);
    const v = _.merge({
      anchorOffset: _.getFocusOffset(),
      hasFocus: !0
    });
    u(Y(F.forceSelection(a, v)));
  }, p = !s && !e && (l || !De(h()));
  return /* @__PURE__ */ $(ue, {
    children: [/* @__PURE__ */ d(Te, {
      icon: "link",
      disabled: !p,
      onToggle: () => {
        n(!t);
      }
    }), /* @__PURE__ */ d(Yo, {
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
Vo.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
Vo.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const V1 = "https://api.embed.ly/1/", nf = (e) => {
  if (!e.key)
    throw new Error("You need an API key to call Embedly");
  return fetch(`${V1}oembed?${_h.stringify({
    secure: document.location.protocol === "https:",
    scheme: document.location.protocol.replace(":", ""),
    ...e
  })}`).then((r) => r.json());
}, Gi = ({ height: e, width: r }) => (e / r * 100).toPrecision(4), af = (e) => {
  var r, t;
  if (e.type === "video" || e.type === "rich" && e.provider_name !== "SoundCloud")
    return {
      ratio: Gi({
        height: e.height,
        width: e.width
      }),
      html: e.html
    };
  if (((r = e == null ? void 0 : e.url) == null ? void 0 : r.includes("/shorts/")) && ((t = e == null ? void 0 : e.url) == null ? void 0 : t.includes("youtube.")))
    return {
      ratio: 67.5,
      html: `<iframe class="embedly-embed" src="${encodeURI(e.url.replace("/shorts/", "/embed/"))}" width="100%" height="auto" title="YouTube shorts embed" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>`
    };
  switch (e.provider_name) {
    case "SoundCloud":
      return {
        ratio: Gi({ height: 6, width: 16 }),
        html: e.html
      };
    case "Ovizer":
      return {
        ratio: Gi({
          height: e.thumbnail_height || 1,
          width: e.thumbnail_width || 1
        }),
        html: `<iframe src="${e.url}" width="100%" height="auto" allowFullScreen></iframe>`
      };
    case "Apple Podcasts":
      const n = e.url.replace("podcasts.apple.com", "embed.podcasts.apple.com");
      return {
        height: 183,
        ratio: 0.1,
        html: `<iframe allow="autoplay *; encrypted-media *; fullscreen *" height="175" style=";overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${n}&theme=auto"></iframe>`
      };
    default:
      return {
        ratio: 67.5,
        html: `<iframe src="${e.url}" width="100%" height="auto" allowFullScreen></iframe>`
      };
  }
}, J1 = ({
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
      u(Y(pg(s, t)));
    }, 1);
  }, f = vt(e, s, r), h = Ar(n || i, {
    sanitize: !1
  });
  return h ? /* @__PURE__ */ d(Gr, {
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
      children: ht(h)
    })
  }) : null;
}, X1 = (e) => {
  const {
    embedlyHtml: r,
    embedRatio: t,
    height: n,
    html: a
  } = e.contentState.getEntity(e.entityKey).getData(), i = Ar(r || a, {
    sanitize: !1
  });
  return i ? /* @__PURE__ */ d(Gr, {
    ratio: t || 67.5,
    className: "kiss-Draft__media-read",
    style: {
      ...n && {
        height: n
      }
    },
    children: ht(i)
  }) : null;
}, Jd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && ["VIDEO", "MEDIA"].includes(t.getEntity(a).getType());
  }, r);
}, Z1 = {
  strategy: Jd,
  component: J1
}, Q1 = {
  strategy: Jd,
  component: X1
}, Jo = ({
  disabled: e,
  onChange: r,
  embedlyApiKey: t
}) => {
  const [{
    editorState: n,
    translations: a,
    disabled: i
  }, o] = V(H), [s, u] = le(!1), [l, f] = le(void 0), [h, g] = le(void 0), [p, _] = le(void 0), [v, A] = le(!1);
  return /* @__PURE__ */ $(ue, {
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
      }) => /* @__PURE__ */ $(ue, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: a.media_upload.title
        }), /* @__PURE__ */ d(J.Form, {
          align: "left",
          children: /* @__PURE__ */ d(fr, {
            initialValues: {
              url: ""
            },
            validationSchema: Wr.object().shape({
              url: Wr.string().url(a.video.invalid_url)
            }),
            onSubmit: ({
              url: y
            }) => (r(y), A(!1), nf({
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
              } = af(E), w = eR(n, {
                html: C,
                embedRatio: P,
                ...q && {
                  height: q
                }
              });
              if (gg(w)) {
                const k = hg(w);
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
            }) => /* @__PURE__ */ $(ue, {
              children: [/* @__PURE__ */ d(Ae, {
                className: "k-u-margin-bottom-single",
                htmlFor: "url",
                children: a.image_upload.label
              }), /* @__PURE__ */ d(ut, {
                name: "url",
                placeholder: "https://",
                buttonValue: a.image_upload.preview,
                onClick: () => {
                  A(!1), nf({
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
                    } = af(P);
                    g(w), f(q), _(k);
                  });
                }
              }), l && /* @__PURE__ */ d("div", {
                className: "k-u-margin-vertical-single",
                children: /* @__PURE__ */ d(Gr, {
                  ratio: h,
                  style: {
                    ...p && {
                      height: p
                    }
                  },
                  children: ht(Ar(l, {
                    sanitize: !1
                  }))
                })
              }), v && /* @__PURE__ */ d(yr.ErrorMessage, {
                children: a.video.problem
              }), l && /* @__PURE__ */ d(J.Actions, {
                children: E ? /* @__PURE__ */ d(Nd, {
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
Jo.propTypes = {
  embedlyApiKey: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
Jo.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const Xd = Er({
  fuzzyLink: !1
});
Xd.tlds(Cr);
const eA = (e, r) => {
  const t = Xd.match(e.get("text"));
  if (typeof t < "u" && t !== null)
    for (let n = 0; n < t.length; n += 1)
      r(t[n].index, t[n].lastIndex);
}, rA = (e) => /* @__PURE__ */ d("a", {
  target: "_blank",
  rel: "nofollow noopener",
  className: "k-u-link k-u-link-primary1",
  href: e.decoratedText,
  children: e.children
}), Zd = {
  strategy: eA,
  component: rA
}, tA = (e) => {
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
}, nA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, lt = {
  strategy: nA,
  component: tA
};
var Ui, of;
function aA() {
  if (of)
    return Ui;
  of = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return Ui = e, Ui;
}
var zi, sf;
function iA() {
  if (sf)
    return zi;
  sf = 1;
  var e = vd(), r = Hf(), t = No(), n = 1 / 0, a = e && 1 / t(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : r;
  return zi = a, zi;
}
var Hi, uf;
function oA() {
  if (uf)
    return Hi;
  uf = 1;
  var e = bd(), r = ed, t = aA(), n = Ad(), a = iA(), i = No(), o = 200;
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
  return Hi = s, Hi;
}
var Yi, lf;
function sA() {
  if (lf)
    return Yi;
  lf = 1;
  var e = oA();
  function r(t) {
    return t && t.length ? e(t) : [];
  }
  return Yi = r, Yi;
}
var uA = Ce, Qd = uA("uniq", sA(), Pd());
Qd.placeholder = me();
var lA = Qd;
const eg = (e) => /(.gif)$/gim.test(e), rg = (e) => /(.svg)$/gim.test(e), cA = ["jpg", "jpeg", "png", "webp"], tg = (e, r) => {
  const t = e.replace(/https?:\/\/([0-9a-z.:]+)\/\S+/gi, "$1");
  return (r == null ? void 0 : r.allowedServers.indexOf(t)) > -1;
}, fA = (e) => encodeURIComponent(encodeURIComponent(e)), cf = (e, { width: r = 0, height: t = 0, filters: n = [], upscale: a = !0 }, i) => {
  if (rg(e) || eg(e) || !ENABLE_RESPONSIVE_IMAGES)
    return e;
  const o = fA(e), u = `${i == null ? void 0 : i.host}/${r}x${t}`;
  a || n.push("no_upscale:1");
  let l = "";
  n.forEach((h) => {
    const [g, p] = h.split(":");
    g === "format" && cA.includes(p) && (l = `.${p}`);
  });
  const f = lA(n).join(",");
  return f ? `${u}/${f}/${o}${l}` : `${u}/options:false/${o}`;
}, ff = (e, {
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
  if (rg(e) || eg(e) || !ENABLE_RESPONSIVE_IMAGES || !tg(e, s))
    return { src: e, srcSet: "", sizes: "" };
  if (t.length !== n.length)
    return;
  const u = `format:${o}`, l = ["quality:90", u], h = [...r].sort((v, A) => A - v)[0], g = cf(e, {
    width: h,
    height: Math.floor(h * a),
    filters: l,
    upscale: i
  }, s), p = r.reduce((v, A) => v.concat(`${cf(e, {
    width: A,
    height: Math.floor(A * a),
    filters: l,
    upscale: i
  }, s)} ${A}w`), []).join(", "), _ = t.reduce((v, A, b) => v.concat(`(min-width: ${A}px) calc(${n[b]})`), [`calc(${n[0]})`]).reverse().join(", ");
  return { src: g, srcSet: p, sizes: _ };
}, dA = `100vw - ${ih * 2}px`, gA = `(100vw - ${If * 2}px) * (7/12)`, hA = `(${Ke.XL.min - If * 2}px) * (7/12))`, df = [280, 335, 380, 785, 944];
function pA(e, r) {
  for (var t = 0; t < e.length; t++)
    if (e[t] >= r)
      return e[t];
}
const vA = (e) => {
  const [{
    configResponsiveImageHandler: r
  }] = V(H), {
    src: t,
    alt: n,
    style: a,
    width: i,
    height: o,
    imageLink: s
  } = e.contentState.getEntity(e.entityKey).getData(), u = lo(null), l = wf(u), f = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>";
  let h = {
    src: t,
    sizes: null,
    srcSet: null
  };
  tg(t, r) && (h = a.width && a.height ? ff(t, {
    imageSizes: [pA(df, parseInt(a.width))],
    breakpoints: [0],
    imageSizesInViewport: [parseInt(a.width)],
    upscale: !1,
    resolutions: 1,
    config: r
  }) : ff(t, {
    imageSizes: df,
    breakpoints: [0, 1080, 1440],
    imageSizesInViewport: [dA, gA, hA],
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
}, _A = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, ng = {
  strategy: _A,
  component: vA
}, yA = (e) => {
  const {
    html: r
  } = e.contentState.getEntity(e.entityKey).getData(), t = Ar(r, {
    sanitize: !1
  });
  return t ? /* @__PURE__ */ d(oh, {
    children: /* @__PURE__ */ d(Gr, {
      ratio: 67.5,
      children: ht(t)
    })
  }) : null;
}, mA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "MEDIA";
  }, r);
}, ct = {
  strategy: mA,
  component: yA
}, bA = (e) => {
  const {
    src: r,
    alt: t,
    style: n,
    width: a,
    height: i,
    imageLink: o
  } = e.contentState.getEntity(e.entityKey).getData(), s = lo(null), u = wf(s), f = /* @__PURE__ */ d("img", {
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
}, AA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, ag = {
  strategy: AA,
  component: bA
}, RA = () => /* @__PURE__ */ d("hr", {}), EA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "SEPARATOR";
  }, r);
}, ft = {
  strategy: EA,
  component: RA
}, CA = (e) => e.children.length === 1 && e.children[0].props.text === " " ? null : /* @__PURE__ */ d("span", {
  children: e.children
}), TA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BLOCKQUOTE";
  }, r);
}, dt = {
  strategy: TA,
  component: CA
};
var Vi, gf;
function SA() {
  if (gf)
    return Vi;
  gf = 1;
  var e = Ko();
  function r(t, n) {
    return e(t, n);
  }
  return Vi = r, Vi;
}
var IA = Ce, ig = IA("isEqual", SA());
ig.placeholder = me();
var gt = ig, Ji, hf;
function wA() {
  if (hf)
    return Ji;
  hf = 1;
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
  return Ji = r, Ji;
}
var Xi, pf;
function qA() {
  if (pf)
    return Xi;
  pf = 1;
  var e = at(), r = ot(), t = $d(), n = Bo();
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
  return Xi = a, Xi;
}
var Zi, vf;
function OA() {
  if (vf)
    return Zi;
  vf = 1;
  var e = ot(), r = wA(), t = qA();
  function n(a, i) {
    return t(a, r(e(i)));
  }
  return Zi = n, Zi;
}
var xA = Ce, og = xA("omitBy", OA());
og.placeholder = me();
var sg = og;
const PA = rr("children[0]"), _f = er(rr("children[0].nodeName"), gt("IMG")), kA = er(rr("parentElement.nodeName"), gt("A")), yf = sg(De), LA = new cr([lt, ng, ct, ft, dt]), DA = new cr([lt, ag, ct, ft, dt]), $A = (e) => kf({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (_f(t)) {
        const a = PA(t);
        return n("IMAGE", "IMMUTABLE", {
          src: a.src,
          alt: a.alt,
          width: a.width,
          height: a.height,
          style: yf(a.style),
          imageLink: t.href
        });
      }
      return n("LINK", "MUTABLE", {
        url: t.href
      });
    }
    if (r === "img" && !kA(t))
      return n("IMAGE", "IMMUTABLE", {
        src: t.src,
        alt: t.alt,
        width: t.width,
        height: t.height,
        style: yf(t.style)
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
    if (["img", "iframe", "hr"].includes(r) || _f(t))
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
})(e), MA = rr("children[0]"), BA = er(rr("children[0].nodeName"), gt("IMG")), FA = er(rr("parentElement.nodeName"), gt("A")), mf = sg(De);
new cr([lt, ng, ct, ft, dt]);
new cr([lt, ag, ct, ft, dt]);
const WA = (e) => kf({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (BA(t)) {
        const a = MA(t);
        return n("IMAGE", "IMMUTABLE", {
          src: a.src,
          alt: a.alt,
          width: a.width,
          height: a.height,
          style: mf(a.style),
          imageLink: t.href
        });
      }
      return n("LINK", "MUTABLE", {
        url: t.href
      });
    }
    if (r === "img" && !FA(t))
      return n("IMAGE", "IMMUTABLE", {
        src: t.src,
        alt: t.alt,
        width: t.width,
        height: t.height,
        style: mf(t.style)
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
})(e), jA = co({
  paragraph: {
    element: "p"
  }
}), ug = (e, r = !1) => {
  const t = r ? WA(e) : $A(e);
  return t.set("blockMap", t.getBlockMap().filter((n) => !(!["atomic", "br"].includes(n.getType()) && n.getText() === "")));
}, lg = (e, r = !1) => Cf(ug(e, r)), cg = (e) => F.createWithContent(ug(e)), Xo = ({
  html: e,
  perfEnabled: r,
  useRichTextStyle: t
}) => {
  if (!e)
    return null;
  if (!Rr.canUseDom()) {
    const n = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>", a = /<img([\S ]*?) src="[\S]+?"/gm, i = `<img $1 src="${n}"`;
    return e = e.replaceAll(a, i), e = e.replaceAll(`
`, "<br/>"), r && (e = e.replace(/<(img|iframe)([\S ]+?) (src=")/gm, "<$1 $2 data-$3")), /* @__PURE__ */ d("section", {
      className: we({
        "kiss-RichText": t
      }),
      children: Ar(e)
    });
  }
  return /* @__PURE__ */ d("section", {
    className: we({
      "kiss-RichText": t
    }),
    children: /* @__PURE__ */ d(Kr, {
      editorState: F.set(cg(e), {
        decorator: r ? LA : DA
      }),
      onChange: () => null,
      blockRenderMap: Rf.merge(jA),
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
Xo.propTypes = {
  useRichTextStyle: m.bool
};
Xo.defaultProps = {
  useRichTextStyle: !0
};
const fg = (e) => {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}, ht = (e) => {
  var r;
  return {
    ...e,
    props: {
      ...u1([
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
      src: Mf((r = e == null ? void 0 : e.props) == null ? void 0 : r.src)
    }
  };
}, xR = (e) => Rr.canUseDom() ? fg(e) ? JSON.parse(e) : lg(e, !0) : {}, NA = (e) => {
  if (!Rr.canUseDom())
    return null;
  if (!e || De(e))
    return F.createEmpty();
  try {
    return F.createWithContent(fg(e) ? eo(JSON.parse(e)) : eo(lg(e, !0)));
  } catch {
    return F.createEmpty();
  }
}, dg = (e) => F.set(e, {
  decorator: new cr([
    W1,
    Z1,
    H1,
    x1,
    Zd
  ])
}), KA = (e) => {
  const r = e.getCurrentContent();
  return F.push(e, lr.setBlockType(r, r.getSelectionAfter(), "unstyled"), "change-block-type");
}, GA = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection();
  return r.getBlockForKey(t.getStartKey()).getData().get("alignmentStyle");
}, UA = (e) => {
  const t = e.getSelection().getAnchorKey();
  return e.getCurrentContent().getBlockForKey(t);
}, Zo = (e) => {
  const r = UA(e), t = e.getSelection(), n = t.getStartOffset(), a = t.getEndOffset();
  return r.getText().slice(n, a);
}, pt = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection().getStartKey(), n = e.getSelection().getStartOffset();
  return r.getBlockForKey(t).getEntityAt(n);
}, pr = (e) => {
  const r = e.getCurrentContent(), t = pt(e);
  return t ? r.getEntity(t) : void 0;
}, Qo = (e, r) => {
  let t;
  const n = e.getCurrentContent(), a = e.getSelection(), i = n.getBlockForKey(a.getFocusKey());
  return i.findEntityRanges((o) => o.getEntity() === r, (o, s) => {
    t = i.getText().slice(o, s);
  }), t;
}, vt = (e, r, t) => {
  const n = e.getBlockForKey(r.getSelection().getFocusKey());
  if (!n)
    return !1;
  const a = n.getEntityAt(r.getSelection().getStartOffset());
  return t === a;
}, PR = (e) => er(rr("blocks"), y1((r, t) => `${r}${t.text}`, ""), De)(e), zA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockBefore(n);
  return (a == null ? void 0 : a.get("type")) === "atomic";
}, HA = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection(), n = r.getBlockForKey(t.getAnchorKey()), a = n.getEntityAt(t.getStartOffset());
  let i = null;
  n.findEntityRanges((s) => s.getEntity() === a, (s, u) => {
    i = t.merge({
      anchorOffset: s,
      focusOffset: u
    });
  });
  const o = lr.applyEntity(r, i, null);
  return F.push(e, o, "apply-entity");
}, gg = (e) => {
  const r = e.getCurrentContent(), n = r.getSelectionBefore().getAnchorKey(), a = r.getBlockForKey(n);
  return er(Wd, De)(a.getText());
}, YA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockForKey(n);
  return er(Wd, De)(a.getText());
}, VA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey();
  return !r.getBlockBefore(n);
}, JA = (e) => {
  var u, l, f;
  const r = e.getSelection(), t = r.getAnchorKey(), a = e.getCurrentContent().getBlockForKey(t), i = (u = a == null ? void 0 : a.get("text")) == null ? void 0 : u.length, o = (l = r == null ? void 0 : r.getStartOffset()) != null ? l : 0, s = (f = r == null ? void 0 : r.getEndOffset()) != null ? f : 0;
  return i === s - o;
}, hg = (e) => {
  const r = e.getCurrentContent().getBlockMap().delete(e.getCurrentContent().getSelectionBefore().getFocusKey()), t = e.getCurrentContent().merge({
    blockMap: r
  });
  return F.push(e, t, "remove-range");
}, so = (e, r) => {
  const t = e.getCurrentContent(), n = t.getBlockForKey(r);
  let a = br.createEmpty(n.getKey());
  a = a.merge({
    anchorKey: n.getKey(),
    anchorOffset: 0,
    focusKey: n.getKey(),
    focusOffset: n.getLength()
  });
  const i = lr.removeRange(t, a, "backward"), o = i.getBlockMap().delete(r), s = i.merge({
    blockMap: o
  });
  return F.push(e, s, "remove-range");
}, pg = (e, r, t = 0) => {
  const n = br.createEmpty(r).merge({
    focusOffset: t
  });
  return F.forceSelection(e, n);
}, vg = (e, r, t) => {
  const a = e.getCurrentContent().mergeEntityData(r, t), i = e.getSelection(), o = F.push(e, a, "change-block-data");
  return F.forceSelection(o, i);
}, XA = (e, r, t) => {
  const n = e.getCurrentContent().getEntity(r).getData(), a = e.getCurrentContent().replaceEntityData(r, n1(t)(n));
  return F.push(e, a, "apply-entity");
}, Qi = (e) => {
  var s, u;
  const t = e.getSelection().getAnchorKey(), n = e.getCurrentContent().getKeyBefore(t), a = e.getCurrentContent().getKeyAfter(t), i = e.getCurrentContent().getBlockBefore(t);
  if (!a && !n) {
    const l = dg(F.createEmpty());
    return F.moveSelectionToEnd(l);
  }
  let o = br.createEmpty(n || a);
  return o = o.merge({
    anchorOffset: (s = i == null ? void 0 : i.getLength()) != null ? s : 0,
    focusOffset: (u = i == null ? void 0 : i.getLength()) != null ? u : 0
  }), F.forceSelection(so(e, t), o);
}, jr = (e) => {
  var t;
  const r = (t = e == null ? void 0 : e.get("data")) == null ? void 0 : t.src;
  return QA(r) || ZA(r);
}, ZA = (e) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e), QA = (e) => /<img.*?src="(.*?)"[^\\>]+>/.test(e), Nr = (e) => {
  var t;
  const [, r] = (t = e == null ? void 0 : e.match(/src\s*=\s*"(.+?)"/)) != null ? t : [];
  return r || e;
}, _g = (e) => {
  var r, t;
  return !!((r = e == null ? void 0 : e.get("data")) != null && r.embedlyHtml) || !!((t = e == null ? void 0 : e.get("data")) != null && t.html);
}, bf = (e, r, t = {}) => {
  const n = new Lg({
    key: Dg(),
    type: "unstyled",
    text: "",
    ...t
  }), a = e.getCurrentContent(), i = a.getBlockMap(), o = ph().withMutations((s) => {
    for (let [u, l] of i.entries())
      s.set(u, l), r === u && s.set(n.getKey(), n);
  });
  return F.forceSelection(F.push(e, Tf.createFromBlockArray(Array.from(o.values())).set("selectionBefore", a.getSelectionBefore()).set("selectionAfter", a.getSelectionAfter())), br.createEmpty(n.getKey()));
}, eR = (e, r = {}) => {
  const a = e.getCurrentContent().createEntity("VIDEO", "MUTABLE", r).getLastCreatedEntityKey();
  return Ef.insertAtomicBlock(e, a, " ");
}, rR = 8, tR = 38, nR = 40, aR = (e) => (r) => {
  const t = pr(e);
  return ![rR, tR, nR].includes(r.keyCode) && jr(t) ? "new-text-block" : $g(r);
}, iR = (e) => (r, t) => {
  const n = pr(t);
  if (r === "new-text-block" && jr(n))
    return "handled";
  if (r === "backspace" && jr(n) || _g(n))
    return e(Qi(t)), "handled";
  if (r === "backspace" && (n == null ? void 0 : n.getType()) === "IMAGE")
    return e(HA(t)), "handled";
  if (r === "backspace" && JA(t) && zA(t) || r === "backspace" && VA(t) && YA(t))
    return e(Qi(t)), "handled";
  const a = Ge.handleKeyCommand(t, r);
  return a ? (e(a), "handled") : "not-handled";
}, oR = (e) => (r, t) => {
  const n = t.getCurrentContent(), a = t.getSelection().getAnchorKey(), i = n.getBlockForKey(a), o = pr(t);
  return _g(o) || jr(o) ? (e(bf(t, a)), "handled") : i.getText() === "" && ["unordered-list-item", "blockquote"].includes(i.getType()) ? (e(KA(t)), "handled") : ["header-two", "header-three"].includes(i.getType()) ? (e(bf(t, a)), "handled") : "not-handled";
}, yg = qf`
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
`, mg = ({ isDisabled: e, useRichTextStyle: r, compact: t }) => (n) => {
  const a = n.getData().get("alignmentStyle");
  return we({
    "DraftEditor-editorContainer__disabled": e,
    "DraftEditor-editorContainer__richText": r,
    "DraftEditor-editorContainer__no-richText": !r,
    "DraftEditor-editorContainer__compact": t,
    [a]: a
  });
}, sR = Re.div`
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
`, bg = uo.forwardRef(({
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
  const p = lo(null), [{
    editorState: _,
    focus: v,
    disabled: A
  }, b] = V(H), y = (C) => b(Y(C));
  ve(() => {
    h.onChange(a ? Cf(_.getCurrentContent()) : _.getCurrentContent());
  }, [_]), ve(() => {
    b(Rh(g || p));
  }, [g, p]), ve(() => {
    y(dg(NA(i)));
  }, [i]);
  const E = () => {
    p != null && p.current ? p.current.focus() : g != null && g.current && g.current.focus();
  };
  return /* @__PURE__ */ $(sR, {
    className: we("u-Editor", e, {
      "u-Editor--hasError": r,
      "u-Editor--focused": v,
      "u-Editor--hasBorder": !s
    }),
    onClick: E,
    children: [/* @__PURE__ */ d(yg, {}), /* @__PURE__ */ d(sh, {
      "data-test-id": h["data-test-id"],
      tag: "section",
      modifier: "tertiary",
      noMargin: !0,
      className: we("u-Editor__root", {
        "u-Editor__compact": f
      }),
      children: /* @__PURE__ */ d(Kr, {
        stripPastedStyles: !0,
        ref: g || p,
        editorState: _,
        placeholder: o,
        readOnly: l || A,
        keyBindingFn: aR(_),
        handleKeyCommand: iR(y),
        handleReturn: oR(y),
        onChange: y,
        onFocus: () => {
          b(ys(!0)), t();
        },
        onBlur: () => {
          b(ys(!1)), n();
        },
        blockStyleFn: mg({
          isDisabled: l,
          useRichTextStyle: u,
          compact: f
        }),
        blockRenderMap: $f
      })
    })]
  });
});
bg.propTypes = {
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
bg.defaultProps = {
  onChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
  hasError: !1,
  initialValue: F.createEmpty(),
  rawValue: !0,
  placeholder: "",
  withoutBorder: !1,
  useRichTextStyle: !1,
  isDisabled: !1,
  compact: !1
};
const uR = Re.div`
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
`, wr = ({
  disabled: e,
  label: r,
  onChange: t
}) => {
  var s;
  const [{
    editorState: n,
    disabled: a
  }, i] = V(H), o = (s = GA(n)) != null ? s : "k-u-align-left";
  return /* @__PURE__ */ d(Te, {
    icon: r,
    disabled: a || e,
    active: o === r,
    onToggle: () => {
      t();
      const u = n.getCurrentContent(), l = n.getSelection();
      i(Y(F.push(n, lr.setBlockData(u, l, co({
        alignmentStyle: r
      })), "change-inline-style")));
    }
  }, r);
};
wr.propTypes = {
  label: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
wr.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const es = (e) => /* @__PURE__ */ d(wr, {
  label: "k-u-align-center",
  ...e
});
es.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
es.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const rs = (e) => /* @__PURE__ */ d(wr, {
  label: "k-u-align-left",
  ...e
});
rs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
rs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const ts = (e) => /* @__PURE__ */ d(wr, {
  label: "k-u-align-right",
  ...e
});
ts.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ts.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const ns = ({
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
ns.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ns.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const as = ({
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
as.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
as.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const is = ({
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
is.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
is.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const lR = Re(uh)`
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
}) => e && Of`
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
`, Af = (e) => {
  switch (e) {
    case "header-one":
      return /* @__PURE__ */ d(hh, {});
    case "header-two":
      return /* @__PURE__ */ d(gh, {});
    case "header-three":
      return /* @__PURE__ */ d(dh, {});
    case "header-four":
      return /* @__PURE__ */ d(fh, {});
    case "unstyled":
    default:
      return /* @__PURE__ */ d(ch, {});
  }
}, os = ({
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
  return /* @__PURE__ */ d(lR, {
    summaryRender: ({
      open: f
    }) => /* @__PURE__ */ $(jd, {
      className: "Editor__toolbar__tagListToggle__button",
      tabIndex: "-1",
      disabled: a || e,
      fit: "icon",
      tag: "span",
      active: f,
      children: [Af(u), /* @__PURE__ */ d(lh, {
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
        const h = Af(f);
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
os.propTypes = {
  tags: m.array,
  disabled: m.bool,
  onChange: m.func
};
os.defaultProps = {
  tags: ["header-one", "header-two", "header-three", "header-four", "unstyled"],
  disabled: !1,
  onChange: () => null
};
const cR = Re.div`
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
}) => e && Of`
      background-color: var(--color-grey-000);
    `}
`, ss = ({
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
ss.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ss.defaultProps = {
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
    i(mr(r));
  }, [r]), /* @__PURE__ */ d(cR, {
    className: we(t, {
      "Editor-Toolbar__whiteMode": e,
      "Editor-Toolbar__centered": n
    }),
    children: a
  });
};
he.Image = Ho;
he.TagList = os;
he.Bold = ns;
he.Italic = as;
he.Quote = is;
he.Left = rs;
he.Right = ts;
he.Center = es;
he.UnorderedList = ss;
he.Link = Vo;
he.Button = zo;
he.Video = Jo;
he.Group = uR;
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
var fR = Ce, Ag = fR("memoize", Td());
Ag.placeholder = me();
var dR = Ag;
const gR = dR((e) => {
  if (!Rr.canUseDom())
    return null;
  if (!e)
    return F.createEmpty();
  try {
    return F.createWithContent(eo(JSON.parse(e)), new cr([j1, Q1, Y1, P1, Zd]));
  } catch {
    const t = Mg(`<p>${e}</p>`), n = Tf.createFromBlockArray(t);
    return F.createWithContent(n);
  }
}), hR = (e) => {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}, pR = (e) => {
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
}, Rg = ({
  text: e,
  useRichTextStyle: r,
  perfEnabled: t,
  isDisabled: n,
  compact: a,
  configResponsiveImageHandler: i
}) => Rr.canUseDom() ? hR(e) ? /* @__PURE__ */ $(no, {
  configResponsiveImageHandler: i,
  children: [/* @__PURE__ */ d(yg, {}), /* @__PURE__ */ d("section", {
    className: we("u-Editor__root", {
      "u-Editor__compact": a
    }),
    children: /* @__PURE__ */ d(Kr, {
      onChange: () => null,
      editorState: gR(e),
      blockStyleFn: mg({
        isDisabled: n,
        useRichTextStyle: r,
        compact: a
      }),
      blockRenderMap: $f,
      readOnly: !0
    })
  })]
}) : /* @__PURE__ */ d(no, {
  configResponsiveImageHandler: i,
  children: /* @__PURE__ */ d(Xo, {
    html: e == null ? void 0 : e.replaceAll(`
`, "<br/>"),
    perfEnabled: t,
    useRichTextStyle: r
  })
}) : pR(e);
Rg.propTypes = {
  text: m.oneOfType([m.object, m.string]).isRequired,
  useRichTextStyle: m.bool,
  isDisabled: m.bool,
  perfEnabled: m.bool,
  compact: m.bool
};
Rg.defaultProps = {
  useRichTextStyle: !1,
  isDisabled: !1,
  perfEnabled: !1,
  compact: !1
};
const vR = qf`
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
`, Eg = ({
  onFocus: e,
  onBlur: r,
  onChange: t,
  initialValue: n,
  placeholder: a
}) => {
  const [i, o] = le(F.createEmpty());
  return ve(() => {
    o(cg(n));
  }, [n]), /* @__PURE__ */ $("div", {
    className: "DraftEditor-wrapper",
    children: [/* @__PURE__ */ d(vR, {}), /* @__PURE__ */ d(Kr, {
      editorState: i,
      onChange: (s) => {
        o(s), t(yh(s.getCurrentContent(), {
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
Eg.propTypes = {
  initialValue: m.string,
  placeholder: m.string,
  onFocus: m.func,
  onBlur: m.func,
  onChange: m.func
};
Eg.defaultProps = {
  initalValue: "",
  placeholder: "",
  onFocus: () => null,
  onBlur: () => null,
  onChange: () => null
};
const _R = {
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
      label: /* @__PURE__ */ $("span", {
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
}, Cg = ({
  onInit: e,
  translations: r,
  configResponsiveImageHandler: t,
  children: n
}) => (ve(() => {
  e();
}, []), /* @__PURE__ */ d(no, {
  translations: {
    ..._R,
    ...r
  },
  configResponsiveImageHandler: t,
  children: n
})), Tg = {
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
Cg.propTypes = Tg.props;
Cg.defaultProps = Tg.defaultProps;
export {
  he as Controls,
  Rg as Displayer,
  Cg as Editor,
  bg as Playground,
  Eg as Title,
  MR as convertToHTML,
  DR as convertToRaw,
  Tg as editorPropTypes,
  xR as getJSONContent,
  PR as isEditorEmpty
};
