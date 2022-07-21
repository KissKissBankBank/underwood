import { EditorState as F, DefaultDraftBlockRenderMap as Mf, RichUtils as Ue, Modifier as cr, AtomicBlockUtils as Bf, SelectionState as Ar, CompositeDecorator as fr, convertToRaw as Ff, Editor as Gr, convertFromRaw as uo, ContentBlock as Vg, genKey as Jg, ContentState as Wf, getDefaultKeyBinding as Xg, convertFromHTML as Zg } from "draft-js";
import { convertToRaw as MR } from "draft-js";
import m from "prop-types";
import _o, { createContext as Qg, useReducer as eh, useContext as V, useEffect as _e, useState as ce, useRef as yo } from "react";
import { Title as Lr, Button as Le, pxToRem as x, BoldIcon as rh, ItalicIcon as th, ListIcon as nh, AlignLeftIcon as ah, AlignCenterIcon as ih, AlignRightIcon as oh, ImageIcon as sh, VideoIcon as uh, LinkIcon as lh, EditorButtonIcon as ch, BlockquoteIcon as fh, Field as mr, TextInputWithButton as dh, KissKissLoadingAnimation as gh, COLORS as ae, VisuallyHidden as hh, ArrowContainer as ph, Text as lo, ScreenConfig as Ge, Modal as J, ButtonGroup as co, ImageDropUploader as vh, AlertBox as jf, DropdownMenu as Xe, EditIconNext as _h, LinkIconNext as Rs, CrossIconNext as yh, GarbageIconNext as mh, parseHtml as Rr, ResponsiveIframeContainer as Ur, CONTAINER_PADDING as Nf, CONTAINER_PADDING_THIN as bh, useLazyObserver as Kf, LazyLoader as Ah, domElementHelper as Er, TYPOGRAPHY as Fr, Paragraph as Rh, Details as Eh, ArrowIcon as Ch, ParagraphIcon as Th, Title4Icon as Sh, Title3Icon as Ih, Title2Icon as wh, Title1Icon as qh } from "@kisskissbankbank/kitten";
import qe from "classnames";
import Ee, { createGlobalStyle as Gf, css as Uf } from "styled-components";
import { Map as mo, OrderedMap as Oh } from "immutable";
import { useField as Wr, ErrorMessage as zf, Formik as dr, useFormikContext as xh, Form as Hf } from "formik";
import Cr from "linkify-it";
import Tr from "tlds";
import * as jr from "yup";
import kh from "qs";
import { convertFromHTML as Yf } from "draft-convert";
import { convertToHTML as FR } from "draft-convert";
import { stateToHTML as Ph } from "draft-js-export-html";
var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zr = { exports: {} }, lr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rt, Es;
function Vf() {
  if (Es)
    return Rt;
  Es = 1;
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
  return Rt = a() ? Object.assign : function(i, o) {
    for (var s, u = n(i), l, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var p in s)
        r.call(s, p) && (u[p] = s[p]);
      if (e) {
        l = e(s);
        for (var g = 0; g < l.length; g++)
          t.call(s, l[g]) && (u[l[g]] = s[l[g]]);
      }
    }
    return u;
  }, Rt;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs;
function Lh() {
  if (Cs)
    return lr;
  Cs = 1, Vf();
  var e = _o, r = 60103;
  if (lr.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    r = t("react.element"), lr.Fragment = t("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, l) {
    var f, p = {}, g = null, h = null;
    l !== void 0 && (g = "" + l), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (f in u)
      a.call(u, f) && !i.hasOwnProperty(f) && (p[f] = u[f]);
    if (s && s.defaultProps)
      for (f in u = s.defaultProps, u)
        p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: r, type: s, key: g, ref: h, props: p, _owner: n.current };
  }
  return lr.jsx = o, lr.jsxs = o, lr;
}
var Et = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ts;
function Dh() {
  return Ts || (Ts = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = _o, t = Vf(), n = 60103, a = 60106;
      e.Fragment = 60107;
      var i = 60108, o = 60114, s = 60109, u = 60110, l = 60112, f = 60113, p = 60120, g = 60115, h = 60116, _ = 60121, v = 60122, A = 60117, b = 60129, y = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var E = Symbol.for;
        n = E("react.element"), a = E("react.portal"), e.Fragment = E("react.fragment"), i = E("react.strict_mode"), o = E("react.profiler"), s = E("react.provider"), u = E("react.context"), l = E("react.forward_ref"), f = E("react.suspense"), p = E("react.suspense_list"), g = E("react.memo"), h = E("react.lazy"), _ = E("react.block"), v = E("react.server.block"), A = E("react.fundamental"), E("react.scope"), E("react.opaque.id"), b = E("react.debug_trace_mode"), E("react.offscreen"), y = E("react.legacy_hidden");
      }
      var C = typeof Symbol == "function" && Symbol.iterator, k = "@@iterator";
      function q(c) {
        if (c === null || typeof c != "object")
          return null;
        var R = C && c[C] || c[k];
        return typeof R == "function" ? R : null;
      }
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(c) {
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
        return !!(typeof c == "string" || typeof c == "function" || c === e.Fragment || c === o || c === b || c === i || c === f || c === p || c === y || te || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === g || c.$$typeof === s || c.$$typeof === u || c.$$typeof === l || c.$$typeof === A || c.$$typeof === _ || c[0] === v));
      }
      function Q(c, R, S) {
        var D = R.displayName || R.name || "";
        return c.displayName || (D !== "" ? S + "(" + D + ")" : S);
      }
      function ie(c) {
        return c.displayName || "Context";
      }
      function ee(c) {
        if (c == null)
          return null;
        if (typeof c.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
          case p:
            return "SuspenseList";
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case u:
              var R = c;
              return ie(R) + ".Consumer";
            case s:
              var S = c;
              return ie(S._context) + ".Provider";
            case l:
              return Q(c, c.render, "ForwardRef");
            case g:
              return ee(c.type);
            case _:
              return ee(c._render);
            case h: {
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
      var de = 0, Me, nr, Be, ar, ir, ze, He;
      function oe() {
      }
      oe.__reactDisabledLog = !0;
      function Oe() {
        {
          if (de === 0) {
            Me = console.log, nr = console.info, Be = console.warn, ar = console.error, ir = console.group, ze = console.groupCollapsed, He = console.groupEnd;
            var c = {
              configurable: !0,
              enumerable: !0,
              value: oe,
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
          de++;
        }
      }
      function O() {
        {
          if (de--, de === 0) {
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
                value: nr
              }),
              warn: t({}, c, {
                value: Be
              }),
              error: t({}, c, {
                value: ar
              }),
              group: t({}, c, {
                value: ir
              }),
              groupCollapsed: t({}, c, {
                value: ze
              }),
              groupEnd: t({}, c, {
                value: He
              })
            });
          }
          de < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
        var ve = typeof WeakMap == "function" ? WeakMap : Map;
        X = new ve();
      }
      function se(c, R) {
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
        z = T.current, T.current = null, Oe();
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
              } catch (ke) {
                D = ke;
              }
              Reflect.construct(c, [], N);
            } else {
              try {
                N.call();
              } catch (ke) {
                D = ke;
              }
              c.call(N.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ke) {
              D = ke;
            }
            c();
          }
        } catch (ke) {
          if (ke && D && typeof ke.stack == "string") {
            for (var W = ke.stack.split(`
`), he = D.stack.split(`
`), Z = W.length - 1, re = he.length - 1; Z >= 1 && re >= 0 && W[Z] !== he[re]; )
              re--;
            for (; Z >= 1 && re >= 0; Z--, re--)
              if (W[Z] !== he[re]) {
                if (Z !== 1 || re !== 1)
                  do
                    if (Z--, re--, re < 0 || W[Z] !== he[re]) {
                      var xe = `
` + W[Z].replace(" at new ", " at ");
                      return typeof c == "function" && X.set(c, xe), xe;
                    }
                  while (Z >= 1 && re >= 0);
                break;
              }
          }
        } finally {
          B = !1, T.current = z, O(), Error.prepareStackTrace = U;
        }
        var ur = c ? c.displayName || c.name : "", As = ur ? L(ur) : "";
        return typeof c == "function" && X.set(c, As), As;
      }
      function ge(c, R, S) {
        return se(c, !1);
      }
      function or(c) {
        var R = c.prototype;
        return !!(R && R.isReactComponent);
      }
      function j(c, R, S) {
        if (c == null)
          return "";
        if (typeof c == "function")
          return se(c, or(c));
        if (typeof c == "string")
          return L(c);
        switch (c) {
          case f:
            return L("Suspense");
          case p:
            return L("SuspenseList");
        }
        if (typeof c == "object")
          switch (c.$$typeof) {
            case l:
              return ge(c.render);
            case g:
              return j(c.type, R, S);
            case _:
              return ge(c._render);
            case h: {
              var D = c, U = D._payload, z = D._init;
              try {
                return j(z(U), R, S);
              } catch {
              }
            }
          }
        return "";
      }
      var Ye = {}, K = w.ReactDebugCurrentFrame;
      function Ae(c) {
        if (c) {
          var R = c._owner, S = j(c.type, c._source, R ? R.type : null);
          K.setExtraStackFrame(S);
        } else
          K.setExtraStackFrame(null);
      }
      function Fe(c, R, S, D, U) {
        {
          var z = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var N in c)
            if (z(c, N)) {
              var W = void 0;
              try {
                if (typeof c[N] != "function") {
                  var he = Error((D || "React class") + ": " + S + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw he.name = "Invariant Violation", he;
                }
                W = c[N](R, N, D, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                W = Z;
              }
              W && !(W instanceof Error) && (Ae(U), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", S, N, typeof W), Ae(null)), W instanceof Error && !(W.message in Ye) && (Ye[W.message] = !0, Ae(U), P("Failed %s type: %s", S, W.message), Ae(null));
            }
        }
      }
      var Ve = w.ReactCurrentOwner, We = Object.prototype.hasOwnProperty, Ie = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ue, Je, je;
      je = {};
      function yt(c) {
        if (We.call(c, "ref")) {
          var R = Object.getOwnPropertyDescriptor(c, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return c.ref !== void 0;
      }
      function Or(c) {
        if (We.call(c, "key")) {
          var R = Object.getOwnPropertyDescriptor(c, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return c.key !== void 0;
      }
      function Ne(c, R) {
        if (typeof c.ref == "string" && Ve.current && R && Ve.current.stateNode !== R) {
          var S = ee(Ve.current.type);
          je[S] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(Ve.current.type), c.ref), je[S] = !0);
        }
      }
      function xr(c, R) {
        {
          var S = function() {
            ue || (ue = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
          };
          S.isReactWarning = !0, Object.defineProperty(c, "key", {
            get: S,
            configurable: !0
          });
        }
      }
      function kr(c, R) {
        {
          var S = function() {
            Je || (Je = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
          };
          S.isReactWarning = !0, Object.defineProperty(c, "ref", {
            get: S,
            configurable: !0
          });
        }
      }
      var mt = function(c, R, S, D, U, z, N) {
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
          var z, N = {}, W = null, he = null;
          S !== void 0 && (W = "" + S), Or(R) && (W = "" + R.key), yt(R) && (he = R.ref, Ne(R, U));
          for (z in R)
            We.call(R, z) && !Ie.hasOwnProperty(z) && (N[z] = R[z]);
          if (c && c.defaultProps) {
            var Z = c.defaultProps;
            for (z in Z)
              N[z] === void 0 && (N[z] = Z[z]);
          }
          if (W || he) {
            var re = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
            W && xr(N, re), he && kr(N, re);
          }
          return mt(c, W, he, U, D, Ve.current, N);
        }
      }
      var me = w.ReactCurrentOwner, we = w.ReactDebugCurrentFrame;
      function sr(c) {
        if (c) {
          var R = c._owner, S = j(c.type, c._source, R ? R.type : null);
          we.setExtraStackFrame(S);
        } else
          we.setExtraStackFrame(null);
      }
      var bt;
      bt = !1;
      function At(c) {
        return typeof c == "object" && c !== null && c.$$typeof === n;
      }
      function vs() {
        {
          if (me.current) {
            var c = ee(me.current.type);
            if (c)
              return `

Check the render method of \`` + c + "`.";
          }
          return "";
        }
      }
      function jg(c) {
        {
          if (c !== void 0) {
            var R = c.fileName.replace(/^.*[\\\/]/, ""), S = c.lineNumber;
            return `

Check your code at ` + R + ":" + S + ".";
          }
          return "";
        }
      }
      var _s = {};
      function Ng(c) {
        {
          var R = vs();
          if (!R) {
            var S = typeof c == "string" ? c : c.displayName || c.name;
            S && (R = `

Check the top-level render call using <` + S + ">.");
          }
          return R;
        }
      }
      function ys(c, R) {
        {
          if (!c._store || c._store.validated || c.key != null)
            return;
          c._store.validated = !0;
          var S = Ng(R);
          if (_s[S])
            return;
          _s[S] = !0;
          var D = "";
          c && c._owner && c._owner !== me.current && (D = " It was passed a child from " + ee(c._owner.type) + "."), sr(c), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, D), sr(null);
        }
      }
      function ms(c, R) {
        {
          if (typeof c != "object")
            return;
          if (Array.isArray(c))
            for (var S = 0; S < c.length; S++) {
              var D = c[S];
              At(D) && ys(D, R);
            }
          else if (At(c))
            c._store && (c._store.validated = !0);
          else if (c) {
            var U = q(c);
            if (typeof U == "function" && U !== c.entries)
              for (var z = U.call(c), N; !(N = z.next()).done; )
                At(N.value) && ys(N.value, R);
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
          } else if (R.PropTypes !== void 0 && !bt) {
            bt = !0;
            var U = ee(R);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gg(c) {
        {
          for (var R = Object.keys(c.props), S = 0; S < R.length; S++) {
            var D = R[S];
            if (D !== "children" && D !== "key") {
              sr(c), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), sr(null);
              break;
            }
          }
          c.ref !== null && (sr(c), P("Invalid attribute `ref` supplied to `React.Fragment`."), sr(null));
        }
      }
      function bs(c, R, S, D, U, z) {
        {
          var N = M(c);
          if (!N) {
            var W = "";
            (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var he = jg(U);
            he ? W += he : W += vs();
            var Z;
            c === null ? Z = "null" : Array.isArray(c) ? Z = "array" : c !== void 0 && c.$$typeof === n ? (Z = "<" + (ee(c.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof c, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, W);
          }
          var re = Pr(c, R, S, U, z);
          if (re == null)
            return re;
          if (N) {
            var xe = R.children;
            if (xe !== void 0)
              if (D)
                if (Array.isArray(xe)) {
                  for (var ur = 0; ur < xe.length; ur++)
                    ms(xe[ur], c);
                  Object.freeze && Object.freeze(xe);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ms(xe, c);
          }
          return c === e.Fragment ? Gg(re) : Kg(re), re;
        }
      }
      function Ug(c, R, S) {
        return bs(c, R, S, !0);
      }
      function zg(c, R, S) {
        return bs(c, R, S, !1);
      }
      var Hg = zg, Yg = Ug;
      e.jsx = Hg, e.jsxs = Yg;
    }();
  }(Et)), Et;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Lh() : e.exports = Dh();
})(zr);
const le = zr.exports.Fragment, d = zr.exports.jsx, $ = zr.exports.jsxs, Jf = {
  editorState: F.createEmpty(),
  focus: !1,
  editorRef: null,
  disabled: !1
}, H = Qg(Jf), $h = (e, r) => {
  switch (r.type) {
    case "update":
    case "focus":
      return {
        ...e,
        ...r
      };
  }
}, fo = ({
  translations: e,
  configResponsiveImageHandler: r,
  children: t
}) => /* @__PURE__ */ d(H.Provider, {
  value: eh($h, {
    ...Jf,
    translations: e,
    configResponsiveImageHandler: r
  }),
  children: t
}), Y = (e) => ({
  type: "update",
  editorState: e
}), Mh = (e) => ({
  type: "update",
  editorRef: e
}), br = (e) => ({
  type: "update",
  disabled: e
}), Ss = (e) => ({
  type: "focus",
  focus: e
}), Xf = Mf.merge(mo({
  "header-one": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Lr, {
      tag: "h1",
      modifier: "secondary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@s-up"
    })
  },
  "header-two": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Lr, {
      tag: "h2",
      modifier: "tertiary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@l-up"
    })
  },
  "header-three": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Lr, {
      tag: "h3",
      modifier: "quaternary",
      noMargin: !0,
      className: "k-u-margin-bottom-singleHalf"
    })
  },
  "header-four": {
    element: "span",
    wrapper: /* @__PURE__ */ d(Lr, {
      tag: "h4",
      modifier: "quinary",
      noMargin: !0,
      className: "k-u-margin-bottom-single k-u-margin-bottom-singleHalf@s-up"
    })
  }
}));
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
var Zf = bo.sanitizeUrl = void 0, Bh = /^([^\w]*)(javascript|data|vbscript)/im, Fh = /&#(\w+)(^\w|;)?/g, Wh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, jh = /^([^:]+):/gm, Nh = [".", "/"];
function Kh(e) {
  return Nh.indexOf(e[0]) > -1;
}
function Gh(e) {
  return e.replace(Fh, function(r, t) {
    return String.fromCharCode(t);
  });
}
function Uh(e) {
  var r = Gh(e || "").replace(Wh, "").trim();
  if (!r)
    return "about:blank";
  if (Kh(r))
    return r;
  var t = r.match(jh);
  if (!t)
    return r;
  var n = t[0];
  return Bh.test(n) ? "about:blank" : r;
}
Zf = bo.sanitizeUrl = Uh;
var Qf = {};
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
})(Qf);
var Ct, Is;
function be() {
  return Is || (Is = 1, Ct = {}), Ct;
}
var ne = Qf, zh = be(), ws = Array.prototype.push;
function Hh(e, r) {
  return r == 2 ? function(t, n) {
    return e.apply(void 0, arguments);
  } : function(t) {
    return e.apply(void 0, arguments);
  };
}
function Tt(e, r) {
  return r == 2 ? function(t, n) {
    return e(t, n);
  } : function(t) {
    return e(t);
  };
}
function qs(e) {
  for (var r = e ? e.length : 0, t = Array(r); r--; )
    t[r] = e[r];
  return t;
}
function Yh(e) {
  return function(r) {
    return e({}, r);
  };
}
function Vh(e, r) {
  return function() {
    for (var t = arguments.length, n = t - 1, a = Array(t); t--; )
      a[t] = arguments[t];
    var i = a[r], o = a.slice(0, r);
    return i && ws.apply(o, i), r != n && ws.apply(o, a.slice(r + 1)), e.apply(this, o);
  };
}
function St(e, r) {
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
function go(e, r, t, n) {
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
  }, s = a ? t : zh, u = "curry" in n && n.curry, l = "fixed" in n && n.fixed, f = "rearg" in n && n.rearg, p = a ? t.runInContext() : void 0, g = a ? t : {
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
  }, h = g.ary, _ = g.assign, v = g.clone, A = g.curry, b = g.forEach, y = g.isArray, E = g.isError, C = g.isFunction, k = g.isWeakMap, q = g.keys, w = g.rearg, P = g.toInteger, G = g.toPath, te = q(ne.aryMethod), M = {
    castArray: function(O) {
      return function() {
        var T = arguments[0];
        return y(T) ? O(qs(T)) : O.apply(void 0, arguments);
      };
    },
    iteratee: function(O) {
      return function() {
        var T = arguments[0], I = arguments[1], L = O(T, I), B = L.length;
        return o.cap && typeof I == "number" ? (I = I > 2 ? I - 2 : 1, B && B <= I ? L : Tt(L, I)) : L;
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
        var I = T < 0 ? 1 : P(T) + 1;
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
        return go(e, O(T), n);
      };
    }
  };
  function Q(O, T) {
    if (o.cap) {
      var I = ne.iterateeRearg[O];
      if (I)
        return ir(T, I);
      var L = !a && ne.iterateeAry[O];
      if (L)
        return ar(T, L);
    }
    return T;
  }
  function ie(O, T, I) {
    return u || o.curry && I > 1 ? A(T, I) : T;
  }
  function ee(O, T, I) {
    if (o.fixed && (l || !ne.skipFixed[O])) {
      var L = ne.methodSpread[O], B = L && L.start;
      return B === void 0 ? h(T, I) : Vh(T, B);
    }
    return T;
  }
  function de(O, T, I) {
    return o.rearg && I > 1 && (f || !ne.skipRearg[O]) ? w(T, ne.methodRearg[O] || ne.aryRearg[I]) : T;
  }
  function Me(O, T) {
    T = G(T);
    for (var I = -1, L = T.length, B = L - 1, X = v(Object(O)), ve = X; ve != null && ++I < L; ) {
      var se = T[I], ge = ve[se];
      ge != null && !(C(ge) || E(ge) || k(ge)) && (ve[se] = v(I == B ? ge : Object(ge))), ve = ve[se];
    }
    return X;
  }
  function nr(O) {
    return oe.runInContext.convert(O)(void 0);
  }
  function Be(O, T) {
    var I = ne.aliasToReal[O] || O, L = ne.remap[I] || I, B = n;
    return function(X) {
      var ve = a ? p : g, se = a ? p[L] : T, ge = _(_({}, B), X);
      return go(ve, I, se, ge);
    };
  }
  function ar(O, T) {
    return ze(O, function(I) {
      return typeof I == "function" ? Tt(I, T) : I;
    });
  }
  function ir(O, T) {
    return ze(O, function(I) {
      var L = T.length;
      return Hh(w(Tt(I, L), T), L);
    });
  }
  function ze(O, T) {
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
  function He(O, T, I) {
    var L, B = ne.aliasToReal[O] || O, X = T, ve = M[B];
    return ve ? X = ve(T) : o.immutable && (ne.mutate.array[B] ? X = St(T, qs) : ne.mutate.object[B] ? X = St(T, Yh(T)) : ne.mutate.set[B] && (X = St(T, Me))), b(te, function(se) {
      return b(ne.aryMethod[se], function(ge) {
        if (B == ge) {
          var or = ne.methodSpread[B], j = or && or.afterRearg;
          return L = j ? ee(B, de(B, X, se), se) : de(B, ee(B, X, se), se), L = Q(B, L), L = ie(B, L, se), !1;
        }
      }), !L;
    }), L || (L = X), L == T && (L = u ? A(L, 1) : function() {
      return T.apply(this, arguments);
    }), L.convert = Be(B, T), L.placeholder = T.placeholder = I, L;
  }
  if (!i)
    return He(r, t, s);
  var oe = t, Oe = [];
  return b(te, function(O) {
    b(ne.aryMethod[O], function(T) {
      var I = oe[ne.remap[T] || T];
      I && Oe.push([T, He(T, I, oe)]);
    });
  }), b(q(oe), function(O) {
    var T = oe[O];
    if (typeof T == "function") {
      for (var I = Oe.length; I--; )
        if (Oe[I][0] == O)
          return;
      T.convert = Be(O, T), Oe.push([O, T]);
    }
  }), b(Oe, function(O) {
    oe[O[0]] = O[1];
  }), oe.convert = nr, oe.placeholder = oe, b(q(oe), function(O) {
    b(ne.realToAlias[O] || [], function(T) {
      oe[T] = oe[O];
    });
  }), oe;
}
var Jh = go, It, Os;
function Ao() {
  if (Os)
    return It;
  Os = 1;
  function e(r) {
    return r;
  }
  return It = e, It;
}
var wt, xs;
function ed() {
  if (xs)
    return wt;
  xs = 1;
  var e = typeof Dr == "object" && Dr && Dr.Object === Object && Dr;
  return wt = e, wt;
}
var qt, ks;
function ye() {
  if (ks)
    return qt;
  ks = 1;
  var e = ed(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return qt = t, qt;
}
var Xh = ye(), Zh = Xh.Symbol, gr = Zh, Ps = gr, rd = Object.prototype, Qh = rd.hasOwnProperty, ep = rd.toString, _r = Ps ? Ps.toStringTag : void 0;
function rp(e) {
  var r = Qh.call(e, _r), t = e[_r];
  try {
    e[_r] = void 0;
    var n = !0;
  } catch {
  }
  var a = ep.call(e);
  return n && (r ? e[_r] = t : delete e[_r]), a;
}
var tp = rp, np = Object.prototype, ap = np.toString;
function ip(e) {
  return ap.call(e);
}
var op = ip, Ls = gr, sp = tp, up = op, lp = "[object Null]", cp = "[object Undefined]", Ds = Ls ? Ls.toStringTag : void 0;
function fp(e) {
  return e == null ? e === void 0 ? cp : lp : Ds && Ds in Object(e) ? sp(e) : up(e);
}
var Ze = fp;
function dp(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var De = dp, gp = Ze, hp = De, pp = "[object AsyncFunction]", vp = "[object Function]", _p = "[object GeneratorFunction]", yp = "[object Proxy]";
function mp(e) {
  if (!hp(e))
    return !1;
  var r = gp(e);
  return r == vp || r == _p || r == pp || r == yp;
}
var Ro = mp, Ot, $s;
function bp() {
  if ($s)
    return Ot;
  $s = 1;
  var e = ye(), r = e["__core-js_shared__"];
  return Ot = r, Ot;
}
var xt, Ms;
function Ap() {
  if (Ms)
    return xt;
  Ms = 1;
  var e = bp(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return xt = t, xt;
}
var kt, Bs;
function td() {
  if (Bs)
    return kt;
  Bs = 1;
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
  return kt = t, kt;
}
var Pt, Fs;
function Rp() {
  if (Fs)
    return Pt;
  Fs = 1;
  var e = Ro, r = Ap(), t = De, n = td(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, l = s.hasOwnProperty, f = RegExp("^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function p(g) {
    if (!t(g) || r(g))
      return !1;
    var h = e(g) ? f : i;
    return h.test(n(g));
  }
  return Pt = p, Pt;
}
var Lt, Ws;
function Ep() {
  if (Ws)
    return Lt;
  Ws = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Lt = e, Lt;
}
var Dt, js;
function Qe() {
  if (js)
    return Dt;
  js = 1;
  var e = Rp(), r = Ep();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return Dt = t, Dt;
}
var $t, Ns;
function nd() {
  if (Ns)
    return $t;
  Ns = 1;
  var e = Qe(), r = ye(), t = e(r, "WeakMap");
  return $t = t, $t;
}
var Mt, Ks;
function ad() {
  if (Ks)
    return Mt;
  Ks = 1;
  var e = nd(), r = e && new e();
  return Mt = r, Mt;
}
var Cp = Ao(), Gs = ad(), Tp = Gs ? function(e, r) {
  return Gs.set(e, r), e;
} : Cp, id = Tp, Bt, Us;
function Hr() {
  if (Us)
    return Bt;
  Us = 1;
  var e = De, r = Object.create, t = function() {
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
  return Bt = t, Bt;
}
var Sp = Hr(), Ip = De;
function wp(e) {
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
    var t = Sp(e.prototype), n = e.apply(t, r);
    return Ip(n) ? n : t;
  };
}
var Yr = wp, qp = Yr, Op = ye(), xp = 1;
function kp(e, r, t) {
  var n = r & xp, a = qp(e);
  function i() {
    var o = this && this !== Op && this instanceof i ? a : e;
    return o.apply(n ? t : this, arguments);
  }
  return i;
}
var Pp = kp, Ft, zs;
function Eo() {
  if (zs)
    return Ft;
  zs = 1;
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
  return Ft = e, Ft;
}
var Lp = Math.max;
function Dp(e, r, t, n) {
  for (var a = -1, i = e.length, o = t.length, s = -1, u = r.length, l = Lp(i - o, 0), f = Array(u + l), p = !n; ++s < u; )
    f[s] = r[s];
  for (; ++a < o; )
    (p || a < i) && (f[t[a]] = e[a]);
  for (; l--; )
    f[s++] = e[a++];
  return f;
}
var od = Dp, $p = Math.max;
function Mp(e, r, t, n) {
  for (var a = -1, i = e.length, o = -1, s = t.length, u = -1, l = r.length, f = $p(i - s, 0), p = Array(f + l), g = !n; ++a < f; )
    p[a] = e[a];
  for (var h = a; ++u < l; )
    p[h + u] = r[u];
  for (; ++o < s; )
    (g || a < i) && (p[h + t[o]] = e[a++]);
  return p;
}
var sd = Mp;
function Bp(e, r) {
  for (var t = e.length, n = 0; t--; )
    e[t] === r && ++n;
  return n;
}
var Fp = Bp, Wt, Hs;
function Co() {
  if (Hs)
    return Wt;
  Hs = 1;
  function e() {
  }
  return Wt = e, Wt;
}
var jt, Ys;
function To() {
  if (Ys)
    return jt;
  Ys = 1;
  var e = Hr(), r = Co(), t = 4294967295;
  function n(a) {
    this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = t, this.__views__ = [];
  }
  return n.prototype = e(r.prototype), n.prototype.constructor = n, jt = n, jt;
}
var Nt, Vs;
function ud() {
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
  var e = ad(), r = ud(), t = e ? function(n) {
    return e.get(n);
  } : r;
  return Kt = t, Kt;
}
var Gt, Xs;
function Wp() {
  if (Xs)
    return Gt;
  Xs = 1;
  var e = {};
  return Gt = e, Gt;
}
var Ut, Zs;
function ld() {
  if (Zs)
    return Ut;
  Zs = 1;
  var e = Wp(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    for (var i = a.name + "", o = e[i], s = t.call(e, i) ? o.length : 0; s--; ) {
      var u = o[s], l = u.func;
      if (l == null || l == a)
        return u.name;
    }
    return i;
  }
  return Ut = n, Ut;
}
var zt, Qs;
function Io() {
  if (Qs)
    return zt;
  Qs = 1;
  var e = Hr(), r = Co();
  function t(n, a) {
    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = void 0;
  }
  return t.prototype = e(r.prototype), t.prototype.constructor = t, zt = t, zt;
}
var Ht, eu;
function fe() {
  if (eu)
    return Ht;
  eu = 1;
  var e = Array.isArray;
  return Ht = e, Ht;
}
var Yt, ru;
function Ce() {
  if (ru)
    return Yt;
  ru = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Yt = e, Yt;
}
var Vt, tu;
function Vr() {
  if (tu)
    return Vt;
  tu = 1;
  function e(r, t) {
    var n = -1, a = r.length;
    for (t || (t = Array(a)); ++n < a; )
      t[n] = r[n];
    return t;
  }
  return Vt = e, Vt;
}
var Jt, nu;
function jp() {
  if (nu)
    return Jt;
  nu = 1;
  var e = To(), r = Io(), t = Vr();
  function n(a) {
    if (a instanceof e)
      return a.clone();
    var i = new r(a.__wrapped__, a.__chain__);
    return i.__actions__ = t(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
  }
  return Jt = n, Jt;
}
var Xt, au;
function Np() {
  if (au)
    return Xt;
  au = 1;
  var e = To(), r = Io(), t = Co(), n = fe(), a = Ce(), i = jp(), o = Object.prototype, s = o.hasOwnProperty;
  function u(l) {
    if (a(l) && !n(l) && !(l instanceof e)) {
      if (l instanceof r)
        return l;
      if (s.call(l, "__wrapped__"))
        return i(l);
    }
    return new r(l);
  }
  return u.prototype = t.prototype, u.prototype.constructor = u, Xt = u, Xt;
}
var Zt, iu;
function cd() {
  if (iu)
    return Zt;
  iu = 1;
  var e = To(), r = So(), t = ld(), n = Np();
  function a(i) {
    var o = t(i), s = n[o];
    if (typeof s != "function" || !(o in e.prototype))
      return !1;
    if (i === s)
      return !0;
    var u = r(s);
    return !!u && i === u[0];
  }
  return Zt = a, Zt;
}
var Qt, ou;
function fd() {
  if (ou)
    return Qt;
  ou = 1;
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
  return Qt = n, Qt;
}
var Kp = id, Gp = fd(), Up = Gp(Kp), dd = Up, zp = /\{\n\/\* \[wrapped with (.+)\] \*/, Hp = /,? & /;
function Yp(e) {
  var r = e.match(zp);
  return r ? r[1].split(Hp) : [];
}
var Vp = Yp, Jp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function Xp(e, r) {
  var t = r.length;
  if (!t)
    return e;
  var n = t - 1;
  return r[n] = (t > 1 ? "& " : "") + r[n], r = r.join(t > 2 ? ", " : " "), e.replace(Jp, `{
/* [wrapped with ` + r + `] */
`);
}
var Zp = Xp, en, su;
function Qp() {
  if (su)
    return en;
  su = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return en = e, en;
}
var rn, uu;
function gd() {
  if (uu)
    return rn;
  uu = 1;
  var e = Qe(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return rn = r, rn;
}
var tn, lu;
function ev() {
  if (lu)
    return tn;
  lu = 1;
  var e = Qp(), r = gd(), t = Ao(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return tn = n, tn;
}
var nn, cu;
function hd() {
  if (cu)
    return nn;
  cu = 1;
  var e = ev(), r = fd(), t = r(e);
  return nn = t, nn;
}
function rv(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var wo = rv, an, fu;
function tv() {
  if (fu)
    return an;
  fu = 1;
  function e(r, t, n, a) {
    for (var i = r.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (t(r[o], o, r))
        return o;
    return -1;
  }
  return an = e, an;
}
var on, du;
function nv() {
  if (du)
    return on;
  du = 1;
  function e(r) {
    return r !== r;
  }
  return on = e, on;
}
var sn, gu;
function av() {
  if (gu)
    return sn;
  gu = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return sn = e, sn;
}
var un, hu;
function qo() {
  if (hu)
    return un;
  hu = 1;
  var e = tv(), r = nv(), t = av();
  function n(a, i, o) {
    return i === i ? t(a, i, o) : e(a, r, o);
  }
  return un = n, un;
}
var iv = qo();
function ov(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && iv(e, r, 0) > -1;
}
var pd = ov, sv = wo, uv = pd, lv = 1, cv = 2, fv = 8, dv = 16, gv = 32, hv = 64, pv = 128, vv = 256, _v = 512, yv = [
  ["ary", pv],
  ["bind", lv],
  ["bindKey", cv],
  ["curry", fv],
  ["curryRight", dv],
  ["flip", _v],
  ["partial", gv],
  ["partialRight", hv],
  ["rearg", vv]
];
function mv(e, r) {
  return sv(yv, function(t) {
    var n = "_." + t[0];
    r & t[1] && !uv(e, n) && e.push(n);
  }), e.sort();
}
var bv = mv, Av = Vp, Rv = Zp, Ev = hd(), Cv = bv;
function Tv(e, r, t) {
  var n = r + "";
  return Ev(e, Rv(n, Cv(Av(n), t)));
}
var vd = Tv, Sv = cd(), Iv = dd, wv = vd, qv = 1, Ov = 2, xv = 4, kv = 8, pu = 32, vu = 64;
function Pv(e, r, t, n, a, i, o, s, u, l) {
  var f = r & kv, p = f ? o : void 0, g = f ? void 0 : o, h = f ? i : void 0, _ = f ? void 0 : i;
  r |= f ? pu : vu, r &= ~(f ? vu : pu), r & xv || (r &= ~(qv | Ov));
  var v = [
    e,
    r,
    a,
    h,
    p,
    _,
    g,
    s,
    u,
    l
  ], A = t.apply(void 0, v);
  return Sv(e) && Iv(A, v), A.placeholder = n, wv(A, e, r);
}
var _d = Pv;
function Lv(e) {
  var r = e;
  return r.placeholder;
}
var yd = Lv, Dv = 9007199254740991, $v = /^(?:0|[1-9]\d*)$/;
function Mv(e, r) {
  var t = typeof e;
  return r = r == null ? Dv : r, !!r && (t == "number" || t != "symbol" && $v.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Jr = Mv, Bv = Vr(), Fv = Jr, Wv = Math.min;
function jv(e, r) {
  for (var t = e.length, n = Wv(r.length, t), a = Bv(e); n--; ) {
    var i = r[n];
    e[n] = Fv(i, t) ? a[i] : void 0;
  }
  return e;
}
var Nv = jv, _u = "__lodash_placeholder__";
function Kv(e, r) {
  for (var t = -1, n = e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    (o === r || o === _u) && (e[t] = _u, i[a++] = t);
  }
  return i;
}
var Oo = Kv, Gv = od, Uv = sd, zv = Fp, yu = Yr, Hv = _d, Yv = yd, Vv = Nv, Jv = Oo, Xv = ye(), Zv = 1, Qv = 2, e_ = 8, r_ = 16, t_ = 128, n_ = 512;
function md(e, r, t, n, a, i, o, s, u, l) {
  var f = r & t_, p = r & Zv, g = r & Qv, h = r & (e_ | r_), _ = r & n_, v = g ? void 0 : yu(e);
  function A() {
    for (var b = arguments.length, y = Array(b), E = b; E--; )
      y[E] = arguments[E];
    if (h)
      var C = Yv(A), k = zv(y, C);
    if (n && (y = Gv(y, n, a, h)), i && (y = Uv(y, i, o, h)), b -= k, h && b < l) {
      var q = Jv(y, C);
      return Hv(e, r, md, A.placeholder, t, y, q, s, u, l - b);
    }
    var w = p ? t : this, P = g ? w[e] : e;
    return b = y.length, s ? y = Vv(y, s) : _ && b > 1 && y.reverse(), f && u < b && (y.length = u), this && this !== Xv && this instanceof A && (P = v || yu(P)), P.apply(w, y);
  }
  return A;
}
var bd = md, a_ = Eo(), i_ = Yr, o_ = bd, s_ = _d, u_ = yd, l_ = Oo, c_ = ye();
function f_(e, r, t) {
  var n = i_(e);
  function a() {
    for (var i = arguments.length, o = Array(i), s = i, u = u_(a); s--; )
      o[s] = arguments[s];
    var l = i < 3 && o[0] !== u && o[i - 1] !== u ? [] : l_(o, u);
    if (i -= l.length, i < t)
      return s_(e, r, o_, a.placeholder, void 0, o, l, void 0, void 0, t - i);
    var f = this && this !== c_ && this instanceof a ? n : e;
    return a_(f, this, o);
  }
  return a;
}
var d_ = f_, g_ = Eo(), h_ = Yr, p_ = ye(), v_ = 1;
function __(e, r, t, n) {
  var a = r & v_, i = h_(e);
  function o() {
    for (var s = -1, u = arguments.length, l = -1, f = n.length, p = Array(f + u), g = this && this !== p_ && this instanceof o ? i : e; ++l < f; )
      p[l] = n[l];
    for (; u--; )
      p[l++] = arguments[++s];
    return g_(g, a ? t : this, p);
  }
  return o;
}
var y_ = __, m_ = od, b_ = sd, mu = Oo, bu = "__lodash_placeholder__", ln = 1, A_ = 2, R_ = 4, Au = 8, yr = 128, Ru = 256, E_ = Math.min;
function C_(e, r) {
  var t = e[1], n = r[1], a = t | n, i = a < (ln | A_ | yr), o = n == yr && t == Au || n == yr && t == Ru && e[7].length <= r[8] || n == (yr | Ru) && r[7].length <= r[8] && t == Au;
  if (!(i || o))
    return e;
  n & ln && (e[2] = r[2], a |= t & ln ? 0 : R_);
  var s = r[3];
  if (s) {
    var u = e[3];
    e[3] = u ? m_(u, s, r[4]) : s, e[4] = u ? mu(e[3], bu) : r[4];
  }
  return s = r[5], s && (u = e[5], e[5] = u ? b_(u, s, r[6]) : s, e[6] = u ? mu(e[5], bu) : r[6]), s = r[7], s && (e[7] = s), n & yr && (e[8] = e[8] == null ? r[8] : E_(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = a, e;
}
var T_ = C_, cn, Eu;
function S_() {
  if (Eu)
    return cn;
  Eu = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return cn = r, cn;
}
var fn, Cu;
function Ad() {
  if (Cu)
    return fn;
  Cu = 1;
  var e = S_(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return fn = t, fn;
}
var I_ = Ze, w_ = Ce(), q_ = "[object Symbol]";
function O_(e) {
  return typeof e == "symbol" || w_(e) && I_(e) == q_;
}
var Sr = O_, x_ = Ad(), Tu = De, k_ = Sr, Su = 0 / 0, P_ = /^[-+]0x[0-9a-f]+$/i, L_ = /^0b[01]+$/i, D_ = /^0o[0-7]+$/i, $_ = parseInt;
function M_(e) {
  if (typeof e == "number")
    return e;
  if (k_(e))
    return Su;
  if (Tu(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Tu(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = x_(e);
  var t = L_.test(e);
  return t || D_.test(e) ? $_(e.slice(2), t ? 2 : 8) : P_.test(e) ? Su : +e;
}
var B_ = M_, F_ = B_, Iu = 1 / 0, W_ = 17976931348623157e292;
function j_(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = F_(e), e === Iu || e === -Iu) {
    var r = e < 0 ? -1 : 1;
    return r * W_;
  }
  return e === e ? e : 0;
}
var N_ = j_, K_ = N_;
function G_(e) {
  var r = K_(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var Rd = G_, U_ = id, z_ = Pp, H_ = d_, Y_ = bd, V_ = y_, J_ = So(), X_ = T_, Z_ = dd, Q_ = vd, wu = Rd, ey = "Expected a function", qu = 1, ry = 2, dn = 8, gn = 16, hn = 32, Ou = 64, xu = Math.max;
function ty(e, r, t, n, a, i, o, s) {
  var u = r & ry;
  if (!u && typeof e != "function")
    throw new TypeError(ey);
  var l = n ? n.length : 0;
  if (l || (r &= ~(hn | Ou), n = a = void 0), o = o === void 0 ? o : xu(wu(o), 0), s = s === void 0 ? s : wu(s), l -= a ? a.length : 0, r & Ou) {
    var f = n, p = a;
    n = a = void 0;
  }
  var g = u ? void 0 : J_(e), h = [
    e,
    r,
    t,
    n,
    a,
    f,
    p,
    i,
    o,
    s
  ];
  if (g && X_(h, g), e = h[0], r = h[1], t = h[2], n = h[3], a = h[4], s = h[9] = h[9] === void 0 ? u ? 0 : e.length : xu(h[9] - l, 0), !s && r & (dn | gn) && (r &= ~(dn | gn)), !r || r == qu)
    var _ = z_(e, r, t);
  else
    r == dn || r == gn ? _ = H_(e, r, s) : (r == hn || r == (qu | hn)) && !a.length ? _ = V_(e, r, t, n) : _ = Y_.apply(void 0, h);
  var v = g ? U_ : Z_;
  return Q_(v(_, h), e, r);
}
var xo = ty, ny = xo, ay = 128;
function iy(e, r, t) {
  return r = t ? void 0 : r, r = e && r == null ? e.length : r, ny(e, ay, void 0, void 0, void 0, void 0, r);
}
var oy = iy, pn, ku;
function Ed() {
  if (ku)
    return pn;
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
  return pn = r, pn;
}
var vn, Pu;
function ko() {
  if (Pu)
    return vn;
  Pu = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return vn = e, vn;
}
var _n, Lu;
function Po() {
  if (Lu)
    return _n;
  Lu = 1;
  var e = Ed(), r = ko(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, o, s) {
    var u = i[o];
    (!(n.call(i, o) && r(u, s)) || s === void 0 && !(o in i)) && e(i, o, s);
  }
  return _n = a, _n;
}
var yn, Du;
function Ir() {
  if (Du)
    return yn;
  Du = 1;
  var e = Po(), r = Ed();
  function t(n, a, i, o) {
    var s = !i;
    i || (i = {});
    for (var u = -1, l = a.length; ++u < l; ) {
      var f = a[u], p = o ? o(i[f], n[f], f, i, n) : void 0;
      p === void 0 && (p = n[f]), s ? r(i, f, p) : e(i, f, p);
    }
    return i;
  }
  return yn = t, yn;
}
function sy(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var uy = sy, mn, $u;
function ly() {
  if ($u)
    return mn;
  $u = 1;
  var e = Ze, r = Ce(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return mn = n, mn;
}
var bn, Mu;
function Xr() {
  if (Mu)
    return bn;
  Mu = 1;
  var e = ly(), r = Ce(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(function() {
    return arguments;
  }()) ? e : function(o) {
    return r(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return bn = i, bn;
}
var $r = { exports: {} }, An, Bu;
function cy() {
  if (Bu)
    return An;
  Bu = 1;
  function e() {
    return !1;
  }
  return An = e, An;
}
var Fu;
function Zr() {
  return Fu || (Fu = 1, function(e, r) {
    var t = ye(), n = cy(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? t.Buffer : void 0, u = s ? s.isBuffer : void 0, l = u || n;
    e.exports = l;
  }($r, $r.exports)), $r.exports;
}
var Rn, Wu;
function Lo() {
  if (Wu)
    return Rn;
  Wu = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Rn = r, Rn;
}
var En, ju;
function fy() {
  if (ju)
    return En;
  ju = 1;
  var e = Ze, r = Lo(), t = Ce(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", l = "[object Map]", f = "[object Number]", p = "[object Object]", g = "[object RegExp]", h = "[object Set]", _ = "[object String]", v = "[object WeakMap]", A = "[object ArrayBuffer]", b = "[object DataView]", y = "[object Float32Array]", E = "[object Float64Array]", C = "[object Int8Array]", k = "[object Int16Array]", q = "[object Int32Array]", w = "[object Uint8Array]", P = "[object Uint8ClampedArray]", G = "[object Uint16Array]", te = "[object Uint32Array]", M = {};
  M[y] = M[E] = M[C] = M[k] = M[q] = M[w] = M[P] = M[G] = M[te] = !0, M[n] = M[a] = M[A] = M[i] = M[b] = M[o] = M[s] = M[u] = M[l] = M[f] = M[p] = M[g] = M[h] = M[_] = M[v] = !1;
  function Q(ie) {
    return t(ie) && r(ie.length) && !!M[e(ie)];
  }
  return En = Q, En;
}
var Cn, Nu;
function Do() {
  if (Nu)
    return Cn;
  Nu = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Cn = e, Cn;
}
var Mr = { exports: {} }, Ku;
function $o() {
  return Ku || (Ku = 1, function(e, r) {
    var t = ed(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && t.process, s = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Mr, Mr.exports)), Mr.exports;
}
var Tn, Gu;
function Mo() {
  if (Gu)
    return Tn;
  Gu = 1;
  var e = fy(), r = Do(), t = $o(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return Tn = a, Tn;
}
var dy = uy, gy = Xr(), hy = fe(), py = Zr(), vy = Jr, _y = Mo(), yy = Object.prototype, my = yy.hasOwnProperty;
function by(e, r) {
  var t = hy(e), n = !t && gy(e), a = !t && !n && py(e), i = !t && !n && !a && _y(e), o = t || n || a || i, s = o ? dy(e.length, String) : [], u = s.length;
  for (var l in e)
    (r || my.call(e, l)) && !(o && (l == "length" || a && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || vy(l, u))) && s.push(l);
  return s;
}
var Cd = by, Sn, Uu;
function Qr() {
  if (Uu)
    return Sn;
  Uu = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Sn = r, Sn;
}
var In, zu;
function Td() {
  if (zu)
    return In;
  zu = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return In = e, In;
}
var wn, Hu;
function Ay() {
  if (Hu)
    return wn;
  Hu = 1;
  var e = Td(), r = e(Object.keys, Object);
  return wn = r, wn;
}
var qn, Yu;
function Bo() {
  if (Yu)
    return qn;
  Yu = 1;
  var e = Qr(), r = Ay(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return qn = a, qn;
}
var On, Vu;
function et() {
  if (Vu)
    return On;
  Vu = 1;
  var e = Ro, r = Lo();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return On = t, On;
}
var Ry = Cd, Ey = Bo(), Cy = et();
function Ty(e) {
  return Cy(e) ? Ry(e) : Ey(e);
}
var wr = Ty, Sy = Ir(), Iy = wr;
function wy(e, r) {
  return e && Sy(r, Iy(r), e);
}
var Sd = wy, xn, Ju;
function qy() {
  if (Ju)
    return xn;
  Ju = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return xn = e, xn;
}
var kn, Xu;
function rt() {
  if (Xu)
    return kn;
  Xu = 1;
  var e = ko();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return kn = r, kn;
}
var Pn, Zu;
function Oy() {
  if (Zu)
    return Pn;
  Zu = 1;
  var e = rt(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : t.call(i, o, 1), --this.size, !0;
  }
  return Pn = n, Pn;
}
var Ln, Qu;
function xy() {
  if (Qu)
    return Ln;
  Qu = 1;
  var e = rt();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return Ln = r, Ln;
}
var Dn, el;
function ky() {
  if (el)
    return Dn;
  el = 1;
  var e = rt();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return Dn = r, Dn;
}
var $n, rl;
function Py() {
  if (rl)
    return $n;
  rl = 1;
  var e = rt();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return $n = r, $n;
}
var Mn, tl;
function tt() {
  if (tl)
    return Mn;
  tl = 1;
  var e = qy(), r = Oy(), t = xy(), n = ky(), a = Py();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Mn = i, Mn;
}
var Bn, nl;
function Ly() {
  if (nl)
    return Bn;
  nl = 1;
  var e = tt();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return Bn = r, Bn;
}
var Fn, al;
function Dy() {
  if (al)
    return Fn;
  al = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return Fn = e, Fn;
}
var Wn, il;
function $y() {
  if (il)
    return Wn;
  il = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Wn = e, Wn;
}
var jn, ol;
function My() {
  if (ol)
    return jn;
  ol = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return jn = e, jn;
}
var Nn, sl;
function Fo() {
  if (sl)
    return Nn;
  sl = 1;
  var e = Qe(), r = ye(), t = e(r, "Map");
  return Nn = t, Nn;
}
var Kn, ul;
function nt() {
  if (ul)
    return Kn;
  ul = 1;
  var e = Qe(), r = e(Object, "create");
  return Kn = r, Kn;
}
var Gn, ll;
function By() {
  if (ll)
    return Gn;
  ll = 1;
  var e = nt();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Gn = r, Gn;
}
var Un, cl;
function Fy() {
  if (cl)
    return Un;
  cl = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Un = e, Un;
}
var zn, fl;
function Wy() {
  if (fl)
    return zn;
  fl = 1;
  var e = nt(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === r ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return zn = a, zn;
}
var Hn, dl;
function jy() {
  if (dl)
    return Hn;
  dl = 1;
  var e = nt(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Hn = n, Hn;
}
var Yn, gl;
function Ny() {
  if (gl)
    return Yn;
  gl = 1;
  var e = nt(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Yn = t, Yn;
}
var Vn, hl;
function Ky() {
  if (hl)
    return Vn;
  hl = 1;
  var e = By(), r = Fy(), t = Wy(), n = jy(), a = Ny();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Vn = i, Vn;
}
var Jn, pl;
function Gy() {
  if (pl)
    return Jn;
  pl = 1;
  var e = Ky(), r = tt(), t = Fo();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Jn = n, Jn;
}
var Xn, vl;
function Uy() {
  if (vl)
    return Xn;
  vl = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Xn = e, Xn;
}
var Zn, _l;
function at() {
  if (_l)
    return Zn;
  _l = 1;
  var e = Uy();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Zn = r, Zn;
}
var Qn, yl;
function zy() {
  if (yl)
    return Qn;
  yl = 1;
  var e = at();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Qn = r, Qn;
}
var ea, ml;
function Hy() {
  if (ml)
    return ea;
  ml = 1;
  var e = at();
  function r(t) {
    return e(this, t).get(t);
  }
  return ea = r, ea;
}
var ra, bl;
function Yy() {
  if (bl)
    return ra;
  bl = 1;
  var e = at();
  function r(t) {
    return e(this, t).has(t);
  }
  return ra = r, ra;
}
var ta, Al;
function Vy() {
  if (Al)
    return ta;
  Al = 1;
  var e = at();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return ta = r, ta;
}
var na, Rl;
function Wo() {
  if (Rl)
    return na;
  Rl = 1;
  var e = Gy(), r = zy(), t = Hy(), n = Yy(), a = Vy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, na = i, na;
}
var aa, El;
function Jy() {
  if (El)
    return aa;
  El = 1;
  var e = tt(), r = Fo(), t = Wo(), n = 200;
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
  return aa = a, aa;
}
var ia, Cl;
function jo() {
  if (Cl)
    return ia;
  Cl = 1;
  var e = tt(), r = Ly(), t = Dy(), n = $y(), a = My(), i = Jy();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = r, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, ia = o, ia;
}
var oa, Tl;
function Xy() {
  if (Tl)
    return oa;
  Tl = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return oa = e, oa;
}
var sa, Sl;
function Zy() {
  if (Sl)
    return sa;
  Sl = 1;
  var e = De, r = Qr(), t = Xy(), n = Object.prototype, a = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = r(o), u = [];
    for (var l in o)
      l == "constructor" && (s || !a.call(o, l)) || u.push(l);
    return u;
  }
  return sa = i, sa;
}
var ua, Il;
function No() {
  if (Il)
    return ua;
  Il = 1;
  var e = Cd, r = Zy(), t = et();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ua = n, ua;
}
var la, wl;
function Qy() {
  if (wl)
    return la;
  wl = 1;
  var e = Ir(), r = No();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return la = t, la;
}
var Br = { exports: {} }, ql;
function em() {
  return ql || (ql = 1, function(e, r) {
    var t = ye(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? t.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
    function u(l, f) {
      if (f)
        return l.slice();
      var p = l.length, g = s ? s(p) : new l.constructor(p);
      return l.copy(g), g;
    }
    e.exports = u;
  }(Br, Br.exports)), Br.exports;
}
var ca, Ol;
function rm() {
  if (Ol)
    return ca;
  Ol = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, o = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (o[i++] = s);
    }
    return o;
  }
  return ca = e, ca;
}
var fa, xl;
function Id() {
  if (xl)
    return fa;
  xl = 1;
  function e() {
    return [];
  }
  return fa = e, fa;
}
var da, kl;
function Ko() {
  if (kl)
    return da;
  kl = 1;
  var e = rm(), r = Id(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : r;
  return da = i, da;
}
var ga, Pl;
function tm() {
  if (Pl)
    return ga;
  Pl = 1;
  var e = Ir(), r = Ko();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ga = t, ga;
}
var ha, Ll;
function Go() {
  if (Ll)
    return ha;
  Ll = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return ha = e, ha;
}
var nm = Td(), am = nm(Object.getPrototypeOf, Object), Uo = am, pa, Dl;
function wd() {
  if (Dl)
    return pa;
  Dl = 1;
  var e = Go(), r = Uo, t = Ko(), n = Id(), a = Object.getOwnPropertySymbols, i = a ? function(o) {
    for (var s = []; o; )
      e(s, t(o)), o = r(o);
    return s;
  } : n;
  return pa = i, pa;
}
var va, $l;
function im() {
  if ($l)
    return va;
  $l = 1;
  var e = Ir(), r = wd();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return va = t, va;
}
var _a, Ml;
function qd() {
  if (Ml)
    return _a;
  Ml = 1;
  var e = Go(), r = fe();
  function t(n, a, i) {
    var o = a(n);
    return r(n) ? o : e(o, i(n));
  }
  return _a = t, _a;
}
var ya, Bl;
function Od() {
  if (Bl)
    return ya;
  Bl = 1;
  var e = qd(), r = Ko(), t = wr;
  function n(a) {
    return e(a, t, r);
  }
  return ya = n, ya;
}
var ma, Fl;
function zo() {
  if (Fl)
    return ma;
  Fl = 1;
  var e = qd(), r = wd(), t = No();
  function n(a) {
    return e(a, t, r);
  }
  return ma = n, ma;
}
var ba, Wl;
function om() {
  if (Wl)
    return ba;
  Wl = 1;
  var e = Qe(), r = ye(), t = e(r, "DataView");
  return ba = t, ba;
}
var Aa, jl;
function sm() {
  if (jl)
    return Aa;
  jl = 1;
  var e = Qe(), r = ye(), t = e(r, "Promise");
  return Aa = t, Aa;
}
var Ra, Nl;
function xd() {
  if (Nl)
    return Ra;
  Nl = 1;
  var e = Qe(), r = ye(), t = e(r, "Set");
  return Ra = t, Ra;
}
var Ea, Kl;
function hr() {
  if (Kl)
    return Ea;
  Kl = 1;
  var e = om(), r = Fo(), t = sm(), n = xd(), a = nd(), i = Ze, o = td(), s = "[object Map]", u = "[object Object]", l = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", g = "[object DataView]", h = o(e), _ = o(r), v = o(t), A = o(n), b = o(a), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != g || r && y(new r()) != s || t && y(t.resolve()) != l || n && y(new n()) != f || a && y(new a()) != p) && (y = function(E) {
    var C = i(E), k = C == u ? E.constructor : void 0, q = k ? o(k) : "";
    if (q)
      switch (q) {
        case h:
          return g;
        case _:
          return s;
        case v:
          return l;
        case A:
          return f;
        case b:
          return p;
      }
    return C;
  }), Ea = y, Ea;
}
var Ca, Gl;
function um() {
  if (Gl)
    return Ca;
  Gl = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return Ca = t, Ca;
}
var Ta, Ul;
function kd() {
  if (Ul)
    return Ta;
  Ul = 1;
  var e = ye(), r = e.Uint8Array;
  return Ta = r, Ta;
}
var Sa, zl;
function Ho() {
  if (zl)
    return Sa;
  zl = 1;
  var e = kd();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return Sa = r, Sa;
}
var Ia, Hl;
function lm() {
  if (Hl)
    return Ia;
  Hl = 1;
  var e = Ho();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return Ia = r, Ia;
}
var wa, Yl;
function cm() {
  if (Yl)
    return wa;
  Yl = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return wa = r, wa;
}
var qa, Vl;
function fm() {
  if (Vl)
    return qa;
  Vl = 1;
  var e = gr, r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return qa = n, qa;
}
var Oa, Jl;
function dm() {
  if (Jl)
    return Oa;
  Jl = 1;
  var e = Ho();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return Oa = r, Oa;
}
var xa, Xl;
function gm() {
  if (Xl)
    return xa;
  Xl = 1;
  var e = Ho(), r = lm(), t = cm(), n = fm(), a = dm(), i = "[object Boolean]", o = "[object Date]", s = "[object Map]", u = "[object Number]", l = "[object RegExp]", f = "[object Set]", p = "[object String]", g = "[object Symbol]", h = "[object ArrayBuffer]", _ = "[object DataView]", v = "[object Float32Array]", A = "[object Float64Array]", b = "[object Int8Array]", y = "[object Int16Array]", E = "[object Int32Array]", C = "[object Uint8Array]", k = "[object Uint8ClampedArray]", q = "[object Uint16Array]", w = "[object Uint32Array]";
  function P(G, te, M) {
    var Q = G.constructor;
    switch (te) {
      case h:
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
      case k:
      case q:
      case w:
        return a(G, M);
      case s:
        return new Q();
      case u:
      case p:
        return new Q(G);
      case l:
        return t(G);
      case f:
        return new Q();
      case g:
        return n(G);
    }
  }
  return xa = P, xa;
}
var ka, Zl;
function hm() {
  if (Zl)
    return ka;
  Zl = 1;
  var e = Hr(), r = Uo, t = Qr();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return ka = n, ka;
}
var Pa, Ql;
function pm() {
  if (Ql)
    return Pa;
  Ql = 1;
  var e = hr(), r = Ce(), t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Pa = n, Pa;
}
var La, ec;
function vm() {
  if (ec)
    return La;
  ec = 1;
  var e = pm(), r = Do(), t = $o(), n = t && t.isMap, a = n ? r(n) : e;
  return La = a, La;
}
var Da, rc;
function _m() {
  if (rc)
    return Da;
  rc = 1;
  var e = hr(), r = Ce(), t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Da = n, Da;
}
var $a, tc;
function ym() {
  if (tc)
    return $a;
  tc = 1;
  var e = _m(), r = Do(), t = $o(), n = t && t.isSet, a = n ? r(n) : e;
  return $a = a, $a;
}
var Ma, nc;
function Yo() {
  if (nc)
    return Ma;
  nc = 1;
  var e = jo(), r = wo, t = Po(), n = Sd, a = Qy(), i = em(), o = Vr(), s = tm(), u = im(), l = Od(), f = zo(), p = hr(), g = um(), h = gm(), _ = hm(), v = fe(), A = Zr(), b = vm(), y = De, E = ym(), C = wr, k = No(), q = 1, w = 2, P = 4, G = "[object Arguments]", te = "[object Array]", M = "[object Boolean]", Q = "[object Date]", ie = "[object Error]", ee = "[object Function]", de = "[object GeneratorFunction]", Me = "[object Map]", nr = "[object Number]", Be = "[object Object]", ar = "[object RegExp]", ir = "[object Set]", ze = "[object String]", He = "[object Symbol]", oe = "[object WeakMap]", Oe = "[object ArrayBuffer]", O = "[object DataView]", T = "[object Float32Array]", I = "[object Float64Array]", L = "[object Int8Array]", B = "[object Int16Array]", X = "[object Int32Array]", ve = "[object Uint8Array]", se = "[object Uint8ClampedArray]", ge = "[object Uint16Array]", or = "[object Uint32Array]", j = {};
  j[G] = j[te] = j[Oe] = j[O] = j[M] = j[Q] = j[T] = j[I] = j[L] = j[B] = j[X] = j[Me] = j[nr] = j[Be] = j[ar] = j[ir] = j[ze] = j[He] = j[ve] = j[se] = j[ge] = j[or] = !0, j[ie] = j[ee] = j[oe] = !1;
  function Ye(K, Ae, Fe, Ve, We, Ie) {
    var ue, Je = Ae & q, je = Ae & w, yt = Ae & P;
    if (Fe && (ue = We ? Fe(K, Ve, We, Ie) : Fe(K)), ue !== void 0)
      return ue;
    if (!y(K))
      return K;
    var Or = v(K);
    if (Or) {
      if (ue = g(K), !Je)
        return o(K, ue);
    } else {
      var Ne = p(K), xr = Ne == ee || Ne == de;
      if (A(K))
        return i(K, Je);
      if (Ne == Be || Ne == G || xr && !We) {
        if (ue = je || xr ? {} : _(K), !Je)
          return je ? u(K, a(ue, K)) : s(K, n(ue, K));
      } else {
        if (!j[Ne])
          return We ? K : {};
        ue = h(K, Ne, Je);
      }
    }
    Ie || (Ie = new e());
    var kr = Ie.get(K);
    if (kr)
      return kr;
    Ie.set(K, ue), E(K) ? K.forEach(function(me) {
      ue.add(Ye(me, Ae, Fe, me, K, Ie));
    }) : b(K) && K.forEach(function(me, we) {
      ue.set(we, Ye(me, Ae, Fe, we, K, Ie));
    });
    var mt = yt ? je ? f : l : je ? k : C, Pr = Or ? void 0 : mt(K);
    return r(Pr || K, function(me, we) {
      Pr && (we = me, me = K[we]), t(ue, we, Ye(me, Ae, Fe, we, K, Ie));
    }), ue;
  }
  return Ma = Ye, Ma;
}
var mm = Yo(), bm = 4;
function Am(e) {
  return mm(e, bm);
}
var Rm = Am, Em = xo, Cm = 8;
function Vo(e, r, t) {
  r = t ? void 0 : r;
  var n = Em(e, Cm, void 0, void 0, void 0, void 0, void 0, r);
  return n.placeholder = Vo.placeholder, n;
}
Vo.placeholder = {};
var Tm = Vo, Sm = Ze, Im = Uo, wm = Ce(), qm = "[object Object]", Om = Function.prototype, xm = Object.prototype, Pd = Om.toString, km = xm.hasOwnProperty, Pm = Pd.call(Object);
function Lm(e) {
  if (!wm(e) || Sm(e) != qm)
    return !1;
  var r = Im(e);
  if (r === null)
    return !0;
  var t = km.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Pd.call(t) == Pm;
}
var Ld = Lm, Dm = Ze, $m = Ce(), Mm = Ld, Bm = "[object DOMException]", Fm = "[object Error]";
function Wm(e) {
  if (!$m(e))
    return !1;
  var r = Dm(e);
  return r == Fm || r == Bm || typeof e.message == "string" && typeof e.name == "string" && !Mm(e);
}
var jm = Wm, Nm = hr(), Km = Ce(), Gm = "[object WeakMap]";
function Um(e) {
  return Km(e) && Nm(e) == Gm;
}
var zm = Um, Ba, ac;
function Hm() {
  if (ac)
    return Ba;
  ac = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return Ba = r, Ba;
}
var Fa, ic;
function Ym() {
  if (ic)
    return Fa;
  ic = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Fa = e, Fa;
}
var Wa, oc;
function Dd() {
  if (oc)
    return Wa;
  oc = 1;
  var e = Wo(), r = Hm(), t = Ym();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Wa = n, Wa;
}
var ja, sc;
function Vm() {
  if (sc)
    return ja;
  sc = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return ja = e, ja;
}
var Na, uc;
function $d() {
  if (uc)
    return Na;
  uc = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Na = e, Na;
}
var Ka, lc;
function Md() {
  if (lc)
    return Ka;
  lc = 1;
  var e = Dd(), r = Vm(), t = $d(), n = 1, a = 2;
  function i(o, s, u, l, f, p) {
    var g = u & n, h = o.length, _ = s.length;
    if (h != _ && !(g && _ > h))
      return !1;
    var v = p.get(o), A = p.get(s);
    if (v && A)
      return v == s && A == o;
    var b = -1, y = !0, E = u & a ? new e() : void 0;
    for (p.set(o, s), p.set(s, o); ++b < h; ) {
      var C = o[b], k = s[b];
      if (l)
        var q = g ? l(k, C, b, s, o, p) : l(C, k, b, o, s, p);
      if (q !== void 0) {
        if (q)
          continue;
        y = !1;
        break;
      }
      if (E) {
        if (!r(s, function(w, P) {
          if (!t(E, P) && (C === w || f(C, w, u, l, p)))
            return E.push(P);
        })) {
          y = !1;
          break;
        }
      } else if (!(C === k || f(C, k, u, l, p))) {
        y = !1;
        break;
      }
    }
    return p.delete(o), p.delete(s), y;
  }
  return Ka = i, Ka;
}
var Ga, cc;
function Jm() {
  if (cc)
    return Ga;
  cc = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Ga = e, Ga;
}
var Ua, fc;
function Jo() {
  if (fc)
    return Ua;
  fc = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Ua = e, Ua;
}
var za, dc;
function Xm() {
  if (dc)
    return za;
  dc = 1;
  var e = gr, r = kd(), t = ko(), n = Md(), a = Jm(), i = Jo(), o = 1, s = 2, u = "[object Boolean]", l = "[object Date]", f = "[object Error]", p = "[object Map]", g = "[object Number]", h = "[object RegExp]", _ = "[object Set]", v = "[object String]", A = "[object Symbol]", b = "[object ArrayBuffer]", y = "[object DataView]", E = e ? e.prototype : void 0, C = E ? E.valueOf : void 0;
  function k(q, w, P, G, te, M, Q) {
    switch (P) {
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
      case h:
      case v:
        return q == w + "";
      case p:
        var ie = a;
      case _:
        var ee = G & o;
        if (ie || (ie = i), q.size != w.size && !ee)
          return !1;
        var de = Q.get(q);
        if (de)
          return de == w;
        G |= s, Q.set(q, w);
        var Me = n(ie(q), ie(w), G, te, M, Q);
        return Q.delete(q), Me;
      case A:
        if (C)
          return C.call(q) == C.call(w);
    }
    return !1;
  }
  return za = k, za;
}
var Ha, gc;
function Zm() {
  if (gc)
    return Ha;
  gc = 1;
  var e = Od(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, o, s, u, l, f) {
    var p = s & r, g = e(i), h = g.length, _ = e(o), v = _.length;
    if (h != v && !p)
      return !1;
    for (var A = h; A--; ) {
      var b = g[A];
      if (!(p ? b in o : n.call(o, b)))
        return !1;
    }
    var y = f.get(i), E = f.get(o);
    if (y && E)
      return y == o && E == i;
    var C = !0;
    f.set(i, o), f.set(o, i);
    for (var k = p; ++A < h; ) {
      b = g[A];
      var q = i[b], w = o[b];
      if (u)
        var P = p ? u(w, q, b, o, i, f) : u(q, w, b, i, o, f);
      if (!(P === void 0 ? q === w || l(q, w, s, u, f) : P)) {
        C = !1;
        break;
      }
      k || (k = b == "constructor");
    }
    if (C && !k) {
      var G = i.constructor, te = o.constructor;
      G != te && "constructor" in i && "constructor" in o && !(typeof G == "function" && G instanceof G && typeof te == "function" && te instanceof te) && (C = !1);
    }
    return f.delete(i), f.delete(o), C;
  }
  return Ha = a, Ha;
}
var Ya, hc;
function Qm() {
  if (hc)
    return Ya;
  hc = 1;
  var e = jo(), r = Md(), t = Xm(), n = Zm(), a = hr(), i = fe(), o = Zr(), s = Mo(), u = 1, l = "[object Arguments]", f = "[object Array]", p = "[object Object]", g = Object.prototype, h = g.hasOwnProperty;
  function _(v, A, b, y, E, C) {
    var k = i(v), q = i(A), w = k ? f : a(v), P = q ? f : a(A);
    w = w == l ? p : w, P = P == l ? p : P;
    var G = w == p, te = P == p, M = w == P;
    if (M && o(v)) {
      if (!o(A))
        return !1;
      k = !0, G = !1;
    }
    if (M && !G)
      return C || (C = new e()), k || s(v) ? r(v, A, b, y, E, C) : t(v, A, w, b, y, E, C);
    if (!(b & u)) {
      var Q = G && h.call(v, "__wrapped__"), ie = te && h.call(A, "__wrapped__");
      if (Q || ie) {
        var ee = Q ? v.value() : v, de = ie ? A.value() : A;
        return C || (C = new e()), E(ee, de, b, y, C);
      }
    }
    return M ? (C || (C = new e()), n(v, A, b, y, E, C)) : !1;
  }
  return Ya = _, Ya;
}
var Va, pc;
function Xo() {
  if (pc)
    return Va;
  pc = 1;
  var e = Qm(), r = Ce();
  function t(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, o, t, s);
  }
  return Va = t, Va;
}
var Ja, vc;
function eb() {
  if (vc)
    return Ja;
  vc = 1;
  var e = jo(), r = Xo(), t = 1, n = 2;
  function a(i, o, s, u) {
    var l = s.length, f = l, p = !u;
    if (i == null)
      return !f;
    for (i = Object(i); l--; ) {
      var g = s[l];
      if (p && g[2] ? g[1] !== i[g[0]] : !(g[0] in i))
        return !1;
    }
    for (; ++l < f; ) {
      g = s[l];
      var h = g[0], _ = i[h], v = g[1];
      if (p && g[2]) {
        if (_ === void 0 && !(h in i))
          return !1;
      } else {
        var A = new e();
        if (u)
          var b = u(_, v, h, i, o, A);
        if (!(b === void 0 ? r(v, _, t | n, u, A) : b))
          return !1;
      }
    }
    return !0;
  }
  return Ja = a, Ja;
}
var Xa, _c;
function Bd() {
  if (_c)
    return Xa;
  _c = 1;
  var e = De;
  function r(t) {
    return t === t && !e(t);
  }
  return Xa = r, Xa;
}
var Za, yc;
function rb() {
  if (yc)
    return Za;
  yc = 1;
  var e = Bd(), r = wr;
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Za = t, Za;
}
var Qa, mc;
function Fd() {
  if (mc)
    return Qa;
  mc = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return Qa = e, Qa;
}
var ei, bc;
function tb() {
  if (bc)
    return ei;
  bc = 1;
  var e = eb(), r = rb(), t = Fd();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return ei = n, ei;
}
var ri, Ac;
function Zo() {
  if (Ac)
    return ri;
  Ac = 1;
  var e = fe(), r = Sr, t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || o != null && i in Object(o);
  }
  return ri = a, ri;
}
var ti, Rc;
function Wd() {
  if (Rc)
    return ti;
  Rc = 1;
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
  return t.Cache = e, ti = t, ti;
}
var nb = Wd(), ab = 500;
function ib(e) {
  var r = nb(e, function(n) {
    return t.size === ab && t.clear(), n;
  }), t = r.cache;
  return r;
}
var ob = ib, sb = ob, ub = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lb = /\\(\\)?/g, cb = sb(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(ub, function(t, n, a, i) {
    r.push(a ? i.replace(lb, "$1") : n || t);
  }), r;
}), jd = cb, ni, Ec;
function it() {
  if (Ec)
    return ni;
  Ec = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return ni = e, ni;
}
var ai, Cc;
function Nd() {
  if (Cc)
    return ai;
  Cc = 1;
  var e = gr, r = it(), t = fe(), n = Sr, a = 1 / 0, i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
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
  return ai = s, ai;
}
var ii, Tc;
function Qo() {
  if (Tc)
    return ii;
  Tc = 1;
  var e = Nd();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return ii = r, ii;
}
var oi, Sc;
function pr() {
  if (Sc)
    return oi;
  Sc = 1;
  var e = fe(), r = Zo(), t = jd, n = Qo();
  function a(i, o) {
    return e(i) ? i : r(i, o) ? [i] : t(n(i));
  }
  return oi = a, oi;
}
var fb = Sr, db = 1 / 0;
function gb(e) {
  if (typeof e == "string" || fb(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -db ? "-0" : r;
}
var er = gb, si, Ic;
function ot() {
  if (Ic)
    return si;
  Ic = 1;
  var e = pr(), r = er;
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[r(a[i++])];
    return i && i == o ? n : void 0;
  }
  return si = t, si;
}
var ui, wc;
function Kd() {
  if (wc)
    return ui;
  wc = 1;
  var e = ot();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return ui = r, ui;
}
var li, qc;
function hb() {
  if (qc)
    return li;
  qc = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return li = e, li;
}
var ci, Oc;
function pb() {
  if (Oc)
    return ci;
  Oc = 1;
  var e = pr(), r = Xr(), t = fe(), n = Jr, a = Lo(), i = er;
  function o(s, u, l) {
    u = e(u, s);
    for (var f = -1, p = u.length, g = !1; ++f < p; ) {
      var h = i(u[f]);
      if (!(g = s != null && l(s, h)))
        break;
      s = s[h];
    }
    return g || ++f != p ? g : (p = s == null ? 0 : s.length, !!p && a(p) && n(h, p) && (t(s) || r(s)));
  }
  return ci = o, ci;
}
var fi, xc;
function Gd() {
  if (xc)
    return fi;
  xc = 1;
  var e = hb(), r = pb();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return fi = t, fi;
}
var di, kc;
function vb() {
  if (kc)
    return di;
  kc = 1;
  var e = Xo(), r = Kd(), t = Gd(), n = Zo(), a = Bd(), i = Fd(), o = er, s = 1, u = 2;
  function l(f, p) {
    return n(f) && a(p) ? i(o(f), p) : function(g) {
      var h = r(g, f);
      return h === void 0 && h === p ? t(g, f) : e(p, h, s | u);
    };
  }
  return di = l, di;
}
var gi, Pc;
function _b() {
  if (Pc)
    return gi;
  Pc = 1;
  function e(r) {
    return function(t) {
      return t == null ? void 0 : t[r];
    };
  }
  return gi = e, gi;
}
var hi, Lc;
function yb() {
  if (Lc)
    return hi;
  Lc = 1;
  var e = ot();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return hi = r, hi;
}
var pi, Dc;
function mb() {
  if (Dc)
    return pi;
  Dc = 1;
  var e = _b(), r = yb(), t = Zo(), n = er;
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return pi = a, pi;
}
var vi, $c;
function st() {
  if ($c)
    return vi;
  $c = 1;
  var e = tb(), r = vb(), t = Ao(), n = fe(), a = mb();
  function i(o) {
    return typeof o == "function" ? o : o == null ? t : typeof o == "object" ? n(o) ? r(o[0], o[1]) : e(o) : a(o);
  }
  return vi = i, vi;
}
var bb = Yo(), Ab = st(), Rb = 1;
function Eb(e) {
  return Ab(typeof e == "function" ? e : bb(e, Rb));
}
var Cb = Eb, _i, Mc;
function Tb() {
  if (Mc)
    return _i;
  Mc = 1;
  var e = gr, r = Xr(), t = fe(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return _i = a, _i;
}
var yi, Bc;
function Sb() {
  if (Bc)
    return yi;
  Bc = 1;
  var e = Go(), r = Tb();
  function t(n, a, i, o, s) {
    var u = -1, l = n.length;
    for (i || (i = r), s || (s = []); ++u < l; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? t(f, a - 1, i, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return yi = t, yi;
}
var mi, Fc;
function Ib() {
  if (Fc)
    return mi;
  Fc = 1;
  var e = Sb();
  function r(t) {
    var n = t == null ? 0 : t.length;
    return n ? e(t, 1) : [];
  }
  return mi = r, mi;
}
var bi, Wc;
function wb() {
  if (Wc)
    return bi;
  Wc = 1;
  var e = Eo(), r = Math.max;
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
  return bi = t, bi;
}
var Ai, jc;
function ut() {
  if (jc)
    return Ai;
  jc = 1;
  var e = Ib(), r = wb(), t = hd();
  function n(a) {
    return t(r(a, void 0, e), a + "");
  }
  return Ai = n, Ai;
}
var qb = xo, Ob = ut(), xb = 256, kb = Ob(function(e, r) {
  return qb(e, xb, void 0, void 0, void 0, r);
}), Pb = kb, Lb = it(), Db = Vr(), $b = fe(), Mb = Sr, Bb = jd, Fb = er, Wb = Qo();
function jb(e) {
  return $b(e) ? Lb(e, Fb) : Mb(e) ? [e] : Db(Bb(Wb(e)));
}
var Nb = jb, Kb = {
  ary: oy,
  assign: Sd,
  clone: Rm,
  curry: Tm,
  forEach: wo,
  isArray: fe(),
  isError: jm,
  isFunction: Ro,
  isWeakMap: zm,
  iteratee: Cb,
  keys: Bo(),
  rearg: Pb,
  toInteger: Rd,
  toPath: Nb
}, Gb = Jh, Ub = Kb;
function zb(e, r, t) {
  return Gb(Ub, e, r, t);
}
var Te = zb, Ri, Nc;
function Hb() {
  if (Nc)
    return Ri;
  Nc = 1;
  var e = Io(), r = ut(), t = So(), n = ld(), a = fe(), i = cd(), o = "Expected a function", s = 8, u = 32, l = 128, f = 256;
  function p(g) {
    return r(function(h) {
      var _ = h.length, v = _, A = e.prototype.thru;
      for (g && h.reverse(); v--; ) {
        var b = h[v];
        if (typeof b != "function")
          throw new TypeError(o);
        if (A && !y && n(b) == "wrapper")
          var y = new e([], !0);
      }
      for (v = y ? v : _; ++v < _; ) {
        b = h[v];
        var E = n(b), C = E == "wrapper" ? t(b) : void 0;
        C && i(C[0]) && C[1] == (l | s | u | f) && !C[4].length && C[9] == 1 ? y = y[n(C[0])].apply(y, C[3]) : y = b.length == 1 && i(b) ? y[E]() : y.thru(b);
      }
      return function() {
        var k = arguments, q = k[0];
        if (y && k.length == 1 && a(q))
          return y.plant(q).value();
        for (var w = 0, P = _ ? h[w].apply(this, k) : q; ++w < _; )
          P = h[w].call(this, P);
        return P;
      };
    });
  }
  return Ri = p, Ri;
}
var Ei, Kc;
function Yb() {
  if (Kc)
    return Ei;
  Kc = 1;
  var e = Hb(), r = e();
  return Ei = r, Ei;
}
var Vb = Te, Ud = Vb("flow", Yb());
Ud.placeholder = be();
var rr = Ud, Jb = Te, zd = Jb("get", Kd());
zd.placeholder = be();
var tr = zd, Ci, Gc;
function Xb() {
  if (Gc)
    return Ci;
  Gc = 1;
  var e = Bo(), r = hr(), t = Xr(), n = fe(), a = et(), i = Zr(), o = Qr(), s = Mo(), u = "[object Map]", l = "[object Set]", f = Object.prototype, p = f.hasOwnProperty;
  function g(h) {
    if (h == null)
      return !0;
    if (a(h) && (n(h) || typeof h == "string" || typeof h.splice == "function" || i(h) || s(h) || t(h)))
      return !h.length;
    var _ = r(h);
    if (_ == u || _ == l)
      return !h.size;
    if (o(h))
      return !e(h).length;
    for (var v in h)
      if (p.call(h, v))
        return !1;
    return !0;
  }
  return Ci = g, Ci;
}
var Ti, Uc;
function Hd() {
  return Uc || (Uc = 1, Ti = {
    cap: !1,
    curry: !1,
    fixed: !1,
    immutable: !1,
    rearg: !1
  }), Ti;
}
var Zb = Te, Yd = Zb("isEmpty", Xb(), Hd());
Yd.placeholder = be();
var $e = Yd, Si, zc;
function Qb() {
  if (zc)
    return Si;
  zc = 1;
  function e(r) {
    var t = r == null ? 0 : r.length;
    return t ? r[t - 1] : void 0;
  }
  return Si = e, Si;
}
var Ii, Hc;
function Vd() {
  if (Hc)
    return Ii;
  Hc = 1;
  function e(r, t, n) {
    var a = -1, i = r.length;
    t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = r[a + t];
    return o;
  }
  return Ii = e, Ii;
}
var wi, Yc;
function e1() {
  if (Yc)
    return wi;
  Yc = 1;
  var e = ot(), r = Vd();
  function t(n, a) {
    return a.length < 2 ? n : e(n, r(a, 0, -1));
  }
  return wi = t, wi;
}
var qi, Vc;
function r1() {
  if (Vc)
    return qi;
  Vc = 1;
  var e = pr(), r = Qb(), t = e1(), n = er;
  function a(i, o) {
    return o = e(o, i), i = t(i, o), i == null || delete i[n(r(o))];
  }
  return qi = a, qi;
}
var Oi, Jc;
function t1() {
  if (Jc)
    return Oi;
  Jc = 1;
  var e = Ld;
  function r(t) {
    return e(t) ? void 0 : t;
  }
  return Oi = r, Oi;
}
var xi, Xc;
function n1() {
  if (Xc)
    return xi;
  Xc = 1;
  var e = it(), r = Yo(), t = r1(), n = pr(), a = Ir(), i = t1(), o = ut(), s = zo(), u = 1, l = 2, f = 4, p = o(function(g, h) {
    var _ = {};
    if (g == null)
      return _;
    var v = !1;
    h = e(h, function(b) {
      return b = n(b, g), v || (v = b.length > 1), b;
    }), a(g, s(g), _), v && (_ = r(_, u | l | f, i));
    for (var A = h.length; A--; )
      t(_, h[A]);
    return _;
  });
  return xi = p, xi;
}
var a1 = Te, Jd = a1("omit", n1());
Jd.placeholder = be();
var i1 = Jd, ki, Zc;
function o1() {
  if (Zc)
    return ki;
  Zc = 1;
  var e = Po(), r = pr(), t = Jr, n = De, a = er;
  function i(o, s, u, l) {
    if (!n(o))
      return o;
    s = r(s, o);
    for (var f = -1, p = s.length, g = p - 1, h = o; h != null && ++f < p; ) {
      var _ = a(s[f]), v = u;
      if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
        return o;
      if (f != g) {
        var A = h[_];
        v = l ? l(A, _, h) : void 0, v === void 0 && (v = n(A) ? A : t(s[f + 1]) ? [] : {});
      }
      e(h, _, v), h = h[_];
    }
    return o;
  }
  return ki = i, ki;
}
var Pi, Qc;
function Xd() {
  if (Qc)
    return Pi;
  Qc = 1;
  var e = ot(), r = o1(), t = pr();
  function n(a, i, o) {
    for (var s = -1, u = i.length, l = {}; ++s < u; ) {
      var f = i[s], p = e(a, f);
      o(p, f) && r(l, t(f, a), p);
    }
    return l;
  }
  return Pi = n, Pi;
}
var Li, ef;
function s1() {
  if (ef)
    return Li;
  ef = 1;
  var e = Xd(), r = Gd();
  function t(n, a) {
    return e(n, a, function(i, o) {
      return r(n, o);
    });
  }
  return Li = t, Li;
}
var Di, rf;
function u1() {
  if (rf)
    return Di;
  rf = 1;
  var e = s1(), r = ut(), t = r(function(n, a) {
    return n == null ? {} : e(n, a);
  });
  return Di = t, Di;
}
var l1 = Te, Zd = l1("pick", u1());
Zd.placeholder = be();
var c1 = Zd, $i, tf;
function f1() {
  if (tf)
    return $i;
  tf = 1;
  function e(r, t, n, a) {
    var i = -1, o = r == null ? 0 : r.length;
    for (a && o && (n = r[++i]); ++i < o; )
      n = t(n, r[i], i, r);
    return n;
  }
  return $i = e, $i;
}
var Mi, nf;
function d1() {
  if (nf)
    return Mi;
  nf = 1;
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
  return Mi = e, Mi;
}
var Bi, af;
function g1() {
  if (af)
    return Bi;
  af = 1;
  var e = d1(), r = e();
  return Bi = r, Bi;
}
var Fi, of;
function h1() {
  if (of)
    return Fi;
  of = 1;
  var e = g1(), r = wr;
  function t(n, a) {
    return n && e(n, a, r);
  }
  return Fi = t, Fi;
}
var Wi, sf;
function p1() {
  if (sf)
    return Wi;
  sf = 1;
  var e = et();
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
var ji, uf;
function v1() {
  if (uf)
    return ji;
  uf = 1;
  var e = h1(), r = p1(), t = r(e);
  return ji = t, ji;
}
var Ni, lf;
function _1() {
  if (lf)
    return Ni;
  lf = 1;
  function e(r, t, n, a, i) {
    return i(r, function(o, s, u) {
      n = a ? (a = !1, o) : t(n, o, s, u);
    }), n;
  }
  return Ni = e, Ni;
}
var Ki, cf;
function y1() {
  if (cf)
    return Ki;
  cf = 1;
  var e = f1(), r = v1(), t = st(), n = _1(), a = fe();
  function i(o, s, u) {
    var l = a(o) ? e : n, f = arguments.length < 3;
    return l(o, t(s, 4), u, f, r);
  }
  return Ki = i, Ki;
}
var m1 = Te, Qd = m1("reduce", y1());
Qd.placeholder = be();
var b1 = Qd, Gi, ff;
function A1() {
  if (ff)
    return Gi;
  ff = 1;
  var e = Vd();
  function r(t, n, a) {
    var i = t.length;
    return a = a === void 0 ? i : a, !n && a >= i ? t : e(t, n, a);
  }
  return Gi = r, Gi;
}
var Ui, df;
function R1() {
  if (df)
    return Ui;
  df = 1;
  var e = qo();
  function r(t, n) {
    for (var a = t.length; a-- && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return Ui = r, Ui;
}
var zi, gf;
function E1() {
  if (gf)
    return zi;
  gf = 1;
  var e = qo();
  function r(t, n) {
    for (var a = -1, i = t.length; ++a < i && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return zi = r, zi;
}
var Hi, hf;
function C1() {
  if (hf)
    return Hi;
  hf = 1;
  function e(r) {
    return r.split("");
  }
  return Hi = e, Hi;
}
var Yi, pf;
function T1() {
  if (pf)
    return Yi;
  pf = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(l) {
    return s.test(l);
  }
  return Yi = u, Yi;
}
var Vi, vf;
function S1() {
  if (vf)
    return Vi;
  vf = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + u + ")", f = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", _ = l + "?", v = "[" + i + "]?", A = "(?:" + h + "(?:" + [f, p, g].join("|") + ")" + v + _ + ")*", b = v + _ + A, y = "(?:" + [f + s + "?", s, p, g, o].join("|") + ")", E = RegExp(u + "(?=" + u + ")|" + y + b, "g");
  function C(k) {
    return k.match(E) || [];
  }
  return Vi = C, Vi;
}
var Ji, _f;
function I1() {
  if (_f)
    return Ji;
  _f = 1;
  var e = C1(), r = T1(), t = S1();
  function n(a) {
    return r(a) ? t(a) : e(a);
  }
  return Ji = n, Ji;
}
var Xi, yf;
function w1() {
  if (yf)
    return Xi;
  yf = 1;
  var e = Nd(), r = Ad(), t = A1(), n = R1(), a = E1(), i = I1(), o = Qo();
  function s(u, l, f) {
    if (u = o(u), u && (f || l === void 0))
      return r(u);
    if (!u || !(l = e(l)))
      return u;
    var p = i(u), g = i(l), h = a(p, g), _ = n(p, g) + 1;
    return t(p, h, _).join("");
  }
  return Xi = s, Xi;
}
var q1 = Te, eg = q1("trim", w1());
eg.placeholder = be();
var rg = eg;
const tg = Ee(Le)`
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
`, O1 = {
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
}, Se = ({
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
  }] = V(H), u = O1[a], l = s == null ? void 0 : s.controls[n ? `activated_${a}` : a];
  return /* @__PURE__ */ d(tg, {
    disabled: i,
    active: n && o,
    "aria-checked": n && o,
    onMouseDown: (p) => {
      p.preventDefault(), !i && r(t);
    },
    title: l,
    "aria-label": l,
    fit: "icon",
    tag: e,
    type: e === "button" ? e : null,
    children: /* @__PURE__ */ d(u, {})
  });
};
Se.propTypes = {
  disabled: m.bool,
  active: m.bool,
  onToggle: m.func,
  tag: m.string
};
Se.defaultProps = {
  disabled: !1,
  active: !1,
  onToggle: () => null,
  tag: "button"
};
const Re = ({
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
  return /* @__PURE__ */ d(mr.Label, {
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
Re.propTypes = {
  htmlFor: m.string.isRequired,
  size: m.string,
  label: m.string,
  tooltip: m.string
};
Re.defaultProps = {
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
  className: p,
  onFocus: g,
  onChange: h,
  onBlur: _,
  normalize: v,
  validate: A,
  ...b
}) => {
  const [y, E, {
    setValue: C
  }] = Wr({
    name: e,
    validate: A
  });
  return _e(() => {
    !l || y.value || C(l);
  }, []), /* @__PURE__ */ $(le, {
    children: [/* @__PURE__ */ d("div", {
      style: f,
      className: p,
      children: /* @__PURE__ */ d(mr.Input, {
        ...y,
        id: e,
        error: E.error && E.touched,
        onFocus: g,
        onChange: (k) => {
          y.onChange(k), v && C(v(k.target.value)), h(k);
        },
        onBlur: (k) => {
          y.onBlur(k), v && C(v(k.target.value)), _(k);
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
    }), /* @__PURE__ */ d(zf, {
      name: e,
      children: (k) => /* @__PURE__ */ d(mr.ErrorMessage, {
        children: k
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
const lt = ({
  name: e,
  onClick: r,
  isDisabled: t,
  ...n
}) => {
  const [{
    value: a,
    ...i
  }, o] = Wr(e);
  return /* @__PURE__ */ d(le, {
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
lt.defaultProps = {
  onClick: () => {
  },
  isDisabled: !1
};
lt.propTypes = {
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
  return /* @__PURE__ */ $(Le, {
    modifier: "helium",
    size: "large",
    "aria-live": "polite",
    as: "div",
    className: qe("k-u-cursor-not-allowed", e),
    ...r,
    children: [/* @__PURE__ */ d(gh, {
      color: ae.background1
    }), /* @__PURE__ */ d(hh, {
      children: t.button_loading
    })]
  });
}, x1 = Ee(ph)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${x(20)};
  background-color: ${ae.background1};
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
  return /* @__PURE__ */ $(x1, {
    position: "top",
    shadow: !0,
    borderWidth: 1,
    contentEditable: !1,
    borderColor: "var(--color-grey-400)",
    color: "var(--color-grey-000)",
    borderRadius: 4,
    children: [/* @__PURE__ */ d(lo, {
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
    }), /* @__PURE__ */ d(lo, {
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
}, ho = Cr();
ho.tlds(Tr);
const ig = Ee.div`
  position: relative;
  margin: ${x(30)} 0;

  @media (min-width: ${x(Ge.S.min)}) {
    display: inline-block;
  }
`, og = ({
  href: e,
  children: r
}) => /* @__PURE__ */ d(Le, {
  tag: "a",
  href: e,
  target: "_blank",
  rel: "nofollow noopener",
  modifier: "helium",
  size: "large",
  fit: "content",
  mobileFit: "fluid",
  children: r
}), k1 = ({
  contentState: e,
  entityKey: r,
  children: t
}) => {
  const [n, a] = ce(!1), {
    url: i
  } = e.getEntity(r).getData(), [{
    editorState: o,
    focus: s,
    translations: u
  }, l] = V(H), f = _t(e, o, r);
  return _e(() => {
    setTimeout(() => a(f && s), 0);
  }, [s, o]), /* @__PURE__ */ $(ig, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ d(og, {
      href: i,
      children: t
    }), n && /* @__PURE__ */ d(ag, {
      url: i,
      onDelete: () => {
        e.getBlockForKey(o.getSelection().getFocusKey()).findEntityRanges((g) => g.getEntity() === r, (g, h) => {
          const _ = o.getSelection().merge({
            focusOffset: h,
            anchorOffset: g
          }), v = cr.applyEntity(e, _, null);
          l(Y(F.push(o, v, "apply-entity")));
        });
      }
    })]
  });
}, sg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BUTTON_LINK";
  }, r);
}, P1 = {
  strategy: sg,
  component: k1
}, L1 = {
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
}, es = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = ce(!1), [{
    editorState: a,
    editorRef: i,
    translations: o
  }, s] = V(H), u = vr(a), l = vt(a), f = () => u ? ss(a, l) : os(a);
  return /* @__PURE__ */ $(le, {
    children: [/* @__PURE__ */ d(Se, {
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
        close: p
      }) => /* @__PURE__ */ $(le, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: o.button_link.title
        }), /* @__PURE__ */ d(dr, {
          enableReinitialize: !0,
          initialValues: {
            url: u ? u.getData().url : "",
            text: f()
          },
          onSubmit: ({
            url: g
          }) => {
            r(g);
            const h = ho.match(g), _ = a.getCurrentContent();
            if (u) {
              const v = _.replaceEntityData(l, {
                url: h[0].url
              });
              s(Y(F.push(a, v, "change-block-data")));
            } else {
              const v = _.createEntity("BUTTON_LINK", "MUTABLE", {
                url: h[0].url
              }), A = v.getLastCreatedEntityKey(), b = F.set(a, {
                currentContent: v
              });
              s(Y(Ue.toggleLink(b, b.getSelection(), A)));
            }
            p(), setTimeout(() => i.current.blur(), 0);
          },
          children: ({
            handleSubmit: g
          }) => /* @__PURE__ */ d("form", {
            children: /* @__PURE__ */ $(J.Content, {
              align: "left",
              children: [/* @__PURE__ */ $("div", {
                children: [/* @__PURE__ */ d(Re, {
                  htmlFor: "",
                  children: o.button_link.text
                }), /* @__PURE__ */ d(Pe, {
                  name: "text",
                  disabled: !0
                })]
              }), /* @__PURE__ */ $("div", {
                children: [/* @__PURE__ */ d(Re, {
                  htmlFor: "url",
                  children: o.button_link.url
                }), /* @__PURE__ */ d(Pe, {
                  name: "url",
                  validate: (h) => {
                    if (!ho.test(h))
                      return o.link.error;
                  }
                })]
              }), /* @__PURE__ */ d(J.Actions, {
                children: /* @__PURE__ */ d(Le, {
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
es.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
es.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const D1 = Ee(co)`
  .k-ButtonGroup__button {
    width: 50%;
  }
`, $1 = Ee.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
  background-color: var(--color-grey-200);
`, Ke = {
  URL: "URL",
  FILE: "FILE"
}, M1 = ({
  imageUrl: e,
  setImageUrl: r,
  errorMessage: t,
  onChange: n = () => null
}) => {
  const [a, i] = ce(Ke.FILE), [{
    translations: o
  }] = V(H), {
    handleSubmit: s,
    values: u,
    isSubmitting: l
  } = xh(), [, , f] = Wr("url"), [, , p] = Wr("file");
  return /* @__PURE__ */ $("form", {
    children: [/* @__PURE__ */ $(D1, {
      className: "k-u-margin-bottom-double",
      children: [/* @__PURE__ */ d(co.Button, {
        active: a === Ke.FILE,
        onClick: () => {
          i(Ke.FILE), r(void 0);
        },
        children: o.image_upload.button_file
      }), /* @__PURE__ */ d(co.Button, {
        active: a === Ke.URL,
        onClick: () => {
          i(Ke.URL), r(void 0);
        },
        children: o.image_upload.button_url
      })]
    }), /* @__PURE__ */ $("div", {
      "aria-live": "polite",
      children: [a === Ke.FILE && !e && /* @__PURE__ */ d(vh, {
        id: "underwood-image-drop-uploader",
        dimensionErrorText: o.image_upload.dimension_error,
        sizeErrorText: o.image_upload.max_size,
        errorMessage: t,
        onChange: (g) => {
          var _;
          n(g);
          const h = g.file;
          !((_ = h == null ? void 0 : h.type) != null && _.match("image.*")) || (p.setValue(h), f.setValue(""), r(g.value));
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
      }), a === Ke.URL && /* @__PURE__ */ $(le, {
        children: [/* @__PURE__ */ d("div", {
          className: "k-u-margin-top-single",
          children: /* @__PURE__ */ d(Re, {
            htmlFor: "url",
            children: o.image_upload.label
          })
        }), /* @__PURE__ */ d(lt, {
          name: "url",
          placeholder: "https://",
          buttonValue: o.image_upload.preview,
          onClick: () => {
            r(u.url);
          },
          onKeyPress: (g) => {
            g.key === "Enter" && (g.preventDefault(), g.stopPropagation(), g.target.nextSibling.focus(), g.target.nextSibling.click());
          }
        }), /* @__PURE__ */ d(zf, {
          name: "url",
          children: (g) => /* @__PURE__ */ d(mr.ErrorMessage, {
            children: g
          })
        })]
      })]
    }), e && /* @__PURE__ */ $(le, {
      children: [/* @__PURE__ */ $("div", {
        className: "k-u-margin-top-single",
        children: [/* @__PURE__ */ d($1, {
          src: e,
          alt: ""
        }), a === Ke.FILE && /* @__PURE__ */ d("div", {
          className: "k-u-margin-top-singleHalf k-u-align-center",
          children: /* @__PURE__ */ d(lo, {
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
        children: [/* @__PURE__ */ d(Re, {
          htmlFor: "description",
          children: o.image_upload.description.label
        }), /* @__PURE__ */ d(Pe, {
          name: "description",
          tag: "autoresize",
          placeholder: o.image_upload.description.placeholder
        })]
      }), /* @__PURE__ */ d(jf, {
        children: o.image_upload.description.helper
      }), /* @__PURE__ */ d(J.Actions, {
        className: "k-u-margin-top-triple",
        children: l ? /* @__PURE__ */ d(ng, {
          fit: "fluid"
        }) : /* @__PURE__ */ d(Le, {
          type: "submit",
          size: "large",
          modifier: "helium",
          onClick: s,
          children: o.submit
        })
      })]
    })]
  });
}, ug = Cr();
ug.tlds(Tr);
const B1 = ({
  onClose: e,
  url: r = "",
  entityKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H);
  return _e(() => (i(br(!0)), () => i(br(!1))), []), /* @__PURE__ */ d(J, {
    isOpen: !0,
    onClose: e,
    zIndex: 1e3,
    children: ({
      close: o
    }) => /* @__PURE__ */ $(le, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: a.link.title
      }), /* @__PURE__ */ d(dr, {
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
        children: () => /* @__PURE__ */ d(Hf, {
          children: /* @__PURE__ */ $(J.Content, {
            align: "left",
            children: [/* @__PURE__ */ $("div", {
              children: [/* @__PURE__ */ d(Re, {
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
              children: /* @__PURE__ */ d(Le, {
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
}, F1 = ({
  onClose: e,
  description: r,
  entityKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H);
  return _e(() => (i(br(!0)), () => i(br(!1))), []), /* @__PURE__ */ d(J, {
    isOpen: !0,
    onClose: e,
    zIndex: 1e3,
    children: ({
      close: o
    }) => /* @__PURE__ */ $(le, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: a.image_upload.description.title
      }), /* @__PURE__ */ d(dr, {
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
        children: () => /* @__PURE__ */ d(Hf, {
          children: /* @__PURE__ */ $(J.Form, {
            children: [/* @__PURE__ */ $("div", {
              className: "k-u-margin-bottom-double",
              children: [/* @__PURE__ */ d(Re, {
                htmlFor: "description",
                children: a.image_upload.description.label
              }), /* @__PURE__ */ d(Pe, {
                name: "description",
                tag: "autoresize",
                placeholder: a.image_upload.description.placeholder
              })]
            }), /* @__PURE__ */ d(jf, {
              children: a.image_upload.description.helper
            }), /* @__PURE__ */ d(J.Actions, {
              className: "k-u-margin-top-triple",
              children: /* @__PURE__ */ d(Le, {
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
}, W1 = ({
  contentState: e,
  entityKey: r,
  blockKey: t
}) => {
  const [{
    editorState: n,
    translations: a
  }, i] = V(H), [o, s] = ce(!1), [u, l] = ce(!1), f = _t(n.getCurrentContent(), n, r), {
    src: p,
    url: g,
    description: h
  } = e.getEntity(r).getData(), [_, v] = ce(f);
  _e(() => {
    v(f);
  }, [f, o, u]);
  const A = () => {
    setTimeout(() => i(Y(Og(n, t))), 1);
  }, b = (y) => {
    var w, P;
    y.preventDefault(), y.stopPropagation();
    const E = n.getCurrentContent().getBlockBefore(t), C = n.getCurrentContent().getKeyBefore(t), k = n.getCurrentContent().getKeyAfter(t);
    vo(n, t);
    let q = Ar.createEmpty(C || k);
    q = q.merge({
      anchorOffset: (w = E == null ? void 0 : E.getLength()) != null ? w : 0,
      focusOffset: (P = E == null ? void 0 : E.getLength()) != null ? P : 0
    }), i(Y(F.forceSelection(vo(n, t), q)));
  };
  return /* @__PURE__ */ $("div", {
    className: "u-Draft__image",
    onClick: A,
    children: [/* @__PURE__ */ $("div", {
      className: qe("u-Draft__image-focus", {
        "u-Draft__image-focus__focused": f
      }),
      children: [/* @__PURE__ */ d("img", {
        src: Kr(p),
        alt: h
      }), /* @__PURE__ */ $(Xe, {
        className: "u-Draft__image__menu",
        menuPosition: "center",
        positionedButton: !0,
        open: _,
        contentEditable: !1,
        onClose: () => v(!1),
        children: [/* @__PURE__ */ d(Xe.Button, {
          onClick: () => s(!0),
          icon: /* @__PURE__ */ d(_h, {}),
          children: $e(h) ? a.image_upload.add_label : a.image_upload.modify_label
        }), !g && /* @__PURE__ */ d(Xe.Button, {
          onClick: () => l(!0),
          icon: /* @__PURE__ */ d(Rs, {}),
          children: a.link.title
        }), !!g && /* @__PURE__ */ $(le, {
          children: [/* @__PURE__ */ d(Xe.Separator, {}), /* @__PURE__ */ d(Xe.Button, {
            onClick: (y) => {
              y.preventDefault(), y.stopPropagation(), i(Y(QA(n, r, ["url"])));
            },
            icon: /* @__PURE__ */ d(yh, {}),
            children: a.link.button.delete
          }), /* @__PURE__ */ $(Xe.Link, {
            icon: /* @__PURE__ */ d(Rs, {}),
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
        }), /* @__PURE__ */ d(Xe.Button, {
          onClick: b,
          icon: /* @__PURE__ */ d(mh, {}),
          children: a.image_upload.remove_image
        })]
      })]
    }), o && /* @__PURE__ */ d(F1, {
      onClose: () => s(!1),
      entityKey: r,
      description: h
    }), u && /* @__PURE__ */ d(B1, {
      entityKey: r,
      url: g,
      onClose: () => {
        l(!1);
      },
      isOpen: !0
    })]
  });
}, j1 = ({
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
        src: Kr(t),
        alt: a
      })
    }) : /* @__PURE__ */ d("img", {
      src: Kr(t),
      alt: a
    })
  });
}, lg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, N1 = {
  strategy: lg,
  component: W1
}, K1 = {
  strategy: lg,
  component: j1
}, rs = ({
  disabled: e,
  onUpload: r,
  onChange: t,
  errorMessage: n
}) => {
  const [a, i] = ce(!1), [{
    editorState: o,
    translations: s,
    disabled: u
  }, l] = V(H), [f, p] = ce("");
  return _e(() => {
    a || p("");
  }, [a]), /* @__PURE__ */ $(le, {
    children: [/* @__PURE__ */ d(Se, {
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
      }) => /* @__PURE__ */ $(le, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: s.image_upload.title
        }), /* @__PURE__ */ d(J.Form, {
          children: /* @__PURE__ */ d(dr, {
            initialValues: {
              url: "",
              description: ""
            },
            validationSchema: jr.object().shape({
              url: jr.string().url(s.image.invalid_url).matches(/(?:jpg|jpeg|gif|png)$/, s.image.invalid_extension)
            }),
            onSubmit: ({
              url: h,
              fileSize: _,
              file: v,
              description: A
            }, {
              setSubmitting: b
            }) => new Promise((y, E) => {
              v && v.size === 0 && (E("WRONG"), b(!1)), $e(h) ? r(v).then((C) => y(C)).catch(() => {
                b(!1);
              }) : y(h);
            }).then((y) => {
              const k = o.getCurrentContent().createEntity("IMAGE", "IMMUTABLE", {
                src: y,
                description: A
              }).getLastCreatedEntityKey(), q = Bf.insertAtomicBlock(o, k, " "), w = F.forceSelection(q, q.getCurrentContent().getSelectionAfter());
              if (wg(w)) {
                const P = qg(w);
                l(Y(P));
              } else
                l(Y(w));
              g(), i(!1), setTimeout(() => i(!1), 500);
            }),
            children: () => /* @__PURE__ */ d(M1, {
              imageUrl: f,
              setImageUrl: p,
              errorMessage: n,
              onChange: t
            })
          })
        })]
      })
    })]
  });
};
rs.propTypes = {
  disabled: m.bool,
  onUpload: m.func,
  errorMessage: m.string
};
rs.defaultProps = {
  disabled: !1,
  onUpload: () => null
};
const po = Cr();
po.tlds(Tr);
const G1 = Ee.div`
  display: flex;
  justify-content: center;
  img {
    max-height: ${x(200)};
    max-width: 100%;
  }
`, U1 = ({
  src: e
}) => /* @__PURE__ */ d(G1, {
  children: /* @__PURE__ */ d("img", {
    src: Kr(e),
    alt: ""
  })
}), ts = ({
  onClose: e,
  isOpen: r,
  onChange: t
}) => {
  const [{
    editorState: n,
    editorRef: a,
    translations: i,
    disabled: o
  }, s] = V(H), u = vr(n), l = vt(n), f = () => u ? ss(n, l) : os(n);
  return /* @__PURE__ */ d(J, {
    zIndex: 1e3,
    onClose: e,
    isOpen: r,
    children: ({
      close: p
    }) => /* @__PURE__ */ $(le, {
      children: [/* @__PURE__ */ d(J.Title, {
        children: i.link.title
      }), /* @__PURE__ */ d(dr, {
        enableReinitialize: !0,
        initialValues: {
          url: u ? u.getData().url : "",
          text: f()
        },
        onSubmit: ({
          url: g
        }) => {
          const h = po.match(g), _ = n.getCurrentContent();
          if (t(), u)
            if ((u == null ? void 0 : u.get("type")) === "IMAGE") {
              const v = _.mergeEntityData(l, {
                url: h[0].url
              });
              s(Y(F.push(n, v, "change-block-data")));
            } else {
              const v = _.replaceEntityData(l, {
                url: h[0].url
              });
              s(Y(F.push(n, v, "change-block-data")));
            }
          else {
            const v = _.createEntity("LINK", "MUTABLE", {
              url: h[0].url
            }), A = v.getLastCreatedEntityKey(), b = F.set(n, {
              currentContent: v
            });
            s(Y(Ue.toggleLink(b, b.getSelection(), A)));
          }
          p(), setTimeout(() => a.current.focus(), 0);
        },
        children: ({
          handleSubmit: g
        }) => {
          var h;
          return /* @__PURE__ */ d("form", {
            children: /* @__PURE__ */ $(J.Content, {
              align: "left",
              children: [/* @__PURE__ */ d("div", {
                children: (u == null ? void 0 : u.get("type")) === "IMAGE" ? /* @__PURE__ */ d(U1, {
                  src: (h = u == null ? void 0 : u.getData()) == null ? void 0 : h.src
                }) : /* @__PURE__ */ $(le, {
                  children: [/* @__PURE__ */ d(Re, {
                    htmlFor: "text",
                    children: i.link.text.label
                  }), /* @__PURE__ */ d(Pe, {
                    name: "text",
                    disabled: !0
                  })]
                })
              }), /* @__PURE__ */ $("div", {
                children: [/* @__PURE__ */ d(Re, {
                  htmlFor: "url",
                  children: i.image_upload.url
                }), /* @__PURE__ */ d(Pe, {
                  name: "url",
                  validate: (_) => {
                    if (!po.test(_))
                      return i.link.error;
                  }
                })]
              }), /* @__PURE__ */ d(J.Actions, {
                children: /* @__PURE__ */ d(Le, {
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
ts.propTypes = {
  onChange: m.func,
  onClose: m.func,
  isOpen: m.bool
};
ts.defaultProps = {
  onChange: () => null,
  onClose: () => null,
  isOpen: !1
};
const z1 = Cr();
z1.tlds(Tr);
const H1 = Ee.div`
  display: inline-block;
  position: relative;
`, Y1 = ({
  contentState: e,
  entityKey: r,
  children: t
}) => {
  const [n, a] = ce(!1), {
    url: i
  } = e.getEntity(r).getData(), [{
    editorState: o,
    focus: s
  }, u] = V(H), l = _t(e, o, r);
  return _e(() => {
    setTimeout(() => a(l && s), 0);
  }, [s, o]), /* @__PURE__ */ $(H1, {
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
        var p;
        const f = e == null ? void 0 : e.getBlockForKey((p = o == null ? void 0 : o.getSelection()) == null ? void 0 : p.getFocusKey());
        !f || f.findEntityRanges((g) => g.getEntity() === r, (g, h) => {
          const _ = o.getSelection().merge({
            focusOffset: h,
            anchorOffset: g
          }), v = cr.applyEntity(e, _, null);
          u(Y(F.push(o, v, "apply-entity")));
        });
      }
    })]
  });
}, cg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, V1 = {
  strategy: cg,
  component: Y1
}, J1 = {
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
}, ns = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = ce(!1), [{
    editorState: a,
    editorRef: i,
    translations: o,
    disabled: s
  }, u] = V(H), l = vr(a), f = vt(a), p = () => l ? ss(a, f) : os(a), g = () => {
    const _ = a.getSelection();
    setTimeout(() => i.current.focus(), 0);
    const v = _.merge({
      anchorOffset: _.getFocusOffset(),
      hasFocus: !0
    });
    u(Y(F.forceSelection(a, v)));
  }, h = !s && !e && (l || !$e(p()));
  return /* @__PURE__ */ $(le, {
    children: [/* @__PURE__ */ d(Se, {
      icon: "link",
      disabled: !h,
      onToggle: () => {
        n(!t);
      }
    }), /* @__PURE__ */ d(ts, {
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
ns.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ns.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const X1 = "https://api.embed.ly/1/", mf = (e) => {
  if (!e.key)
    throw new Error("You need an API key to call Embedly");
  return fetch(`${X1}oembed?${kh.stringify({
    secure: document.location.protocol === "https:",
    scheme: document.location.protocol.replace(":", ""),
    ...e
  })}`).then((r) => r.json());
}, Zi = ({ height: e, width: r }) => (e / r * 100).toPrecision(4), bf = (e) => {
  var r, t;
  if (e.type === "video" || e.type === "rich" && e.provider_name !== "SoundCloud")
    return {
      ratio: Zi({
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
        ratio: Zi({ height: 6, width: 16 }),
        html: e.html
      };
    case "Ovizer":
      return {
        ratio: Zi({
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
}, Z1 = ({
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
  }, f = _t(e, s, r), p = Rr(n || i, {
    sanitize: !1
  });
  return p ? /* @__PURE__ */ d(Ur, {
    ratio: a || 67.5,
    className: "kiss-Draft__media",
    style: {
      ...o && {
        height: o
      }
    },
    children: /* @__PURE__ */ d("div", {
      className: qe("kiss-Draft__media-focus", {
        "kiss-Draft__media-focus__focused": f
      }),
      onClick: l,
      children: pt(p)
    })
  }) : null;
}, Q1 = (e) => {
  const {
    embedlyHtml: r,
    embedRatio: t,
    height: n,
    html: a
  } = e.contentState.getEntity(e.entityKey).getData(), i = Rr(r || a, {
    sanitize: !1
  });
  return i ? /* @__PURE__ */ d(Ur, {
    ratio: t || 67.5,
    className: "kiss-Draft__media-read",
    style: {
      ...n && {
        height: n
      }
    },
    children: pt(i)
  }) : null;
}, fg = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && ["VIDEO", "MEDIA"].includes(t.getEntity(a).getType());
  }, r);
}, eA = {
  strategy: fg,
  component: Z1
}, rA = {
  strategy: fg,
  component: Q1
}, as = ({
  disabled: e,
  onChange: r,
  embedlyApiKey: t
}) => {
  const [{
    editorState: n,
    translations: a,
    disabled: i
  }, o] = V(H), [s, u] = ce(!1), [l, f] = ce(void 0), [p, g] = ce(void 0), [h, _] = ce(void 0), [v, A] = ce(!1);
  return /* @__PURE__ */ $(le, {
    children: [/* @__PURE__ */ d(Se, {
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
      }) => /* @__PURE__ */ $(le, {
        children: [/* @__PURE__ */ d(J.Title, {
          children: a.media_upload.title
        }), /* @__PURE__ */ d(J.Form, {
          align: "left",
          children: /* @__PURE__ */ d(dr, {
            initialValues: {
              url: ""
            },
            validationSchema: jr.object().shape({
              url: jr.string().url(a.video.invalid_url)
            }),
            onSubmit: ({
              url: y
            }) => (r(y), A(!1), mf({
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
                ratio: k,
                height: q
              } = bf(E), w = tR(n, {
                html: C,
                embedRatio: k,
                ...q && {
                  height: q
                }
              });
              if (wg(w)) {
                const P = qg(w);
                o(Y(P));
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
            }) => /* @__PURE__ */ $(le, {
              children: [/* @__PURE__ */ d(Re, {
                className: "k-u-margin-bottom-single",
                htmlFor: "url",
                children: a.image_upload.label
              }), /* @__PURE__ */ d(lt, {
                name: "url",
                placeholder: "https://",
                buttonValue: a.image_upload.preview,
                onClick: () => {
                  A(!1), mf({
                    key: t,
                    maxwidth: 640,
                    url: C.url
                  }).then((k) => {
                    if (k.type === "error") {
                      A(!0);
                      return;
                    }
                    const {
                      html: q,
                      ratio: w,
                      height: P = void 0
                    } = bf(k);
                    g(w), f(q), _(P);
                  });
                }
              }), l && /* @__PURE__ */ d("div", {
                className: "k-u-margin-vertical-single",
                children: /* @__PURE__ */ d(Ur, {
                  ratio: p,
                  style: {
                    ...h && {
                      height: h
                    }
                  },
                  children: pt(Rr(l, {
                    sanitize: !1
                  }))
                })
              }), v && /* @__PURE__ */ d(mr.ErrorMessage, {
                children: a.video.problem
              }), l && /* @__PURE__ */ d(J.Actions, {
                children: E ? /* @__PURE__ */ d(ng, {
                  size: "large"
                }) : /* @__PURE__ */ d(Le, {
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
as.propTypes = {
  embedlyApiKey: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
as.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const dg = Cr({
  fuzzyLink: !1
});
dg.tlds(Tr);
const tA = (e, r) => {
  const t = dg.match(e.get("text"));
  if (typeof t < "u" && t !== null)
    for (let n = 0; n < t.length; n += 1)
      r(t[n].index, t[n].lastIndex);
}, nA = (e) => /* @__PURE__ */ d("a", {
  target: "_blank",
  rel: "nofollow noopener",
  className: "k-u-link k-u-link-primary1",
  href: e.decoratedText,
  children: e.children
}), gg = {
  strategy: tA,
  component: nA
}, aA = (e) => {
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
}, iA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, ct = {
  strategy: iA,
  component: aA
};
var Qi, Af;
function oA() {
  if (Af)
    return Qi;
  Af = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return Qi = e, Qi;
}
var eo, Rf;
function sA() {
  if (Rf)
    return eo;
  Rf = 1;
  var e = xd(), r = ud(), t = Jo(), n = 1 / 0, a = e && 1 / t(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : r;
  return eo = a, eo;
}
var ro, Ef;
function uA() {
  if (Ef)
    return ro;
  Ef = 1;
  var e = Dd(), r = pd, t = oA(), n = $d(), a = sA(), i = Jo(), o = 200;
  function s(u, l, f) {
    var p = -1, g = r, h = u.length, _ = !0, v = [], A = v;
    if (f)
      _ = !1, g = t;
    else if (h >= o) {
      var b = l ? null : a(u);
      if (b)
        return i(b);
      _ = !1, g = n, A = new e();
    } else
      A = l ? [] : v;
    e:
      for (; ++p < h; ) {
        var y = u[p], E = l ? l(y) : y;
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
  return ro = s, ro;
}
var to, Cf;
function lA() {
  if (Cf)
    return to;
  Cf = 1;
  var e = uA();
  function r(t) {
    return t && t.length ? e(t) : [];
  }
  return to = r, to;
}
var cA = Te, hg = cA("uniq", lA(), Hd());
hg.placeholder = be();
var fA = hg;
const pg = (e) => /(.gif)$/gim.test(e), vg = (e) => /(.svg)$/gim.test(e), dA = ["jpg", "jpeg", "png", "webp"], _g = (e, r) => {
  const t = e.replace(/https?:\/\/([0-9a-z.:]+)\/\S+/gi, "$1");
  return (r == null ? void 0 : r.allowedServers.indexOf(t)) > -1;
}, gA = (e) => encodeURIComponent(encodeURIComponent(e)), Tf = (e, { width: r = 0, height: t = 0, filters: n = [], upscale: a = !0 }, i) => {
  if (vg(e) || pg(e) || !ENABLE_RESPONSIVE_IMAGES)
    return e;
  const o = gA(e), u = `${i == null ? void 0 : i.host}/${r}x${t}`;
  a || n.push("no_upscale:1");
  let l = "";
  n.forEach((p) => {
    const [g, h] = p.split(":");
    g === "format" && dA.includes(h) && (l = `.${h}`);
  });
  const f = fA(n).join(",");
  return f ? `${u}/${f}/${o}${l}` : `${u}/options:false/${o}`;
}, Sf = (e, {
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
  const u = `format:${o}`, l = ["quality:90", u], p = [...r].sort((v, A) => A - v)[0], g = Tf(e, {
    width: p,
    height: Math.floor(p * a),
    filters: l,
    upscale: i
  }, s), h = r.reduce((v, A) => v.concat(`${Tf(e, {
    width: A,
    height: Math.floor(A * a),
    filters: l,
    upscale: i
  }, s)} ${A}w`), []).join(", "), _ = t.reduce((v, A, b) => v.concat(`(min-width: ${A}px) calc(${n[b]})`), [`calc(${n[0]})`]).reverse().join(", ");
  return { src: g, srcSet: h, sizes: _ };
}, hA = `100vw - ${bh * 2}px`, pA = `(100vw - ${Nf * 2}px) * (7/12)`, vA = `(${Ge.XL.min - Nf * 2}px) * (7/12))`, If = [280, 335, 380, 785, 944];
function _A(e, r) {
  for (var t = 0; t < e.length; t++)
    if (e[t] >= r)
      return e[t];
}
const yA = (e) => {
  const [{
    configResponsiveImageHandler: r
  }] = V(H), {
    src: t,
    alt: n,
    style: a,
    width: i,
    height: o,
    imageLink: s
  } = e.contentState.getEntity(e.entityKey).getData(), u = yo(null), l = Kf(u), f = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>";
  let p = {
    src: t,
    sizes: null,
    srcSet: null
  };
  _g(t, r) && (p = a.width && a.height ? Sf(t, {
    imageSizes: [_A(If, parseInt(a.width))],
    breakpoints: [0],
    imageSizesInViewport: [parseInt(a.width)],
    upscale: !1,
    resolutions: 1,
    config: r
  }) : Sf(t, {
    imageSizes: If,
    breakpoints: [0, 1080, 1440],
    imageSizesInViewport: [hA, pA, vA],
    upscale: !1,
    config: r
  }));
  const g = /* @__PURE__ */ d("img", {
    src: l ? p.src : f,
    srcSet: l ? p.srcSet : "",
    sizes: p.sizes,
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
}, mA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, yg = {
  strategy: mA,
  component: yA
}, bA = (e) => {
  const {
    html: r
  } = e.contentState.getEntity(e.entityKey).getData(), t = Rr(r, {
    sanitize: !1
  });
  return t ? /* @__PURE__ */ d(Ah, {
    children: /* @__PURE__ */ d(Ur, {
      ratio: 67.5,
      children: pt(t)
    })
  }) : null;
}, AA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "MEDIA";
  }, r);
}, ft = {
  strategy: AA,
  component: bA
}, RA = (e) => {
  const {
    src: r,
    alt: t,
    style: n,
    width: a,
    height: i,
    imageLink: o
  } = e.contentState.getEntity(e.entityKey).getData(), s = yo(null), u = Kf(s), f = /* @__PURE__ */ d("img", {
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
}, EA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, mg = {
  strategy: EA,
  component: RA
}, CA = () => /* @__PURE__ */ d("hr", {}), TA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "SEPARATOR";
  }, r);
}, dt = {
  strategy: TA,
  component: CA
}, SA = (e) => e.children.length === 1 && e.children[0].props.text === " " ? null : /* @__PURE__ */ d("span", {
  children: e.children
}), IA = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BLOCKQUOTE";
  }, r);
}, gt = {
  strategy: IA,
  component: SA
};
var no, wf;
function wA() {
  if (wf)
    return no;
  wf = 1;
  var e = Xo();
  function r(t, n) {
    return e(t, n);
  }
  return no = r, no;
}
var qA = Te, bg = qA("isEqual", wA());
bg.placeholder = be();
var ht = bg, ao, qf;
function OA() {
  if (qf)
    return ao;
  qf = 1;
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
  return ao = r, ao;
}
var io, Of;
function xA() {
  if (Of)
    return io;
  Of = 1;
  var e = it(), r = st(), t = Xd(), n = zo();
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
  return io = a, io;
}
var oo, xf;
function kA() {
  if (xf)
    return oo;
  xf = 1;
  var e = st(), r = OA(), t = xA();
  function n(a, i) {
    return t(a, r(e(i)));
  }
  return oo = n, oo;
}
var PA = Te, Ag = PA("omitBy", kA());
Ag.placeholder = be();
var Rg = Ag;
const LA = tr("children[0]"), kf = rr(tr("children[0].nodeName"), ht("IMG")), DA = rr(tr("parentElement.nodeName"), ht("A")), Pf = Rg($e), $A = new fr([ct, yg, ft, dt, gt]), MA = new fr([ct, mg, ft, dt, gt]), BA = (e) => Yf({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (kf(t)) {
        const a = LA(t);
        return n("IMAGE", "IMMUTABLE", {
          src: a.src,
          alt: a.alt,
          width: a.width,
          height: a.height,
          style: Pf(a.style),
          imageLink: t.href
        });
      }
      return n("LINK", "MUTABLE", {
        url: t.href
      });
    }
    if (r === "img" && !DA(t))
      return n("IMAGE", "IMMUTABLE", {
        src: t.src,
        alt: t.alt,
        width: t.width,
        height: t.height,
        style: Pf(t.style)
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
})(e), FA = tr("children[0]"), WA = rr(tr("children[0].nodeName"), ht("IMG")), jA = rr(tr("parentElement.nodeName"), ht("A")), Lf = Rg($e);
new fr([ct, yg, ft, dt, gt]);
new fr([ct, mg, ft, dt, gt]);
const NA = (e) => Yf({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (WA(t)) {
        const a = FA(t);
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
    if (r === "img" && !jA(t))
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
})(e), KA = mo({
  paragraph: {
    element: "p"
  }
}), Eg = (e, r = !1) => {
  const t = r ? NA(e) : BA(e);
  return t.set("blockMap", t.getBlockMap().filter((n) => !(!["atomic", "br"].includes(n.getType()) && n.getText() === "")));
}, Cg = (e, r = !1) => Ff(Eg(e, r)), Tg = (e) => F.createWithContent(Eg(e)), is = ({
  html: e,
  perfEnabled: r,
  useRichTextStyle: t
}) => {
  if (!e)
    return null;
  if (!Er.canUseDom()) {
    const n = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>", a = /<img([\S ]*?) src="[\S]+?"/gm, i = `<img $1 src="${n}"`;
    return e = e.replaceAll(a, i), e = e.replaceAll(`
`, "<br/>"), r && (e = e.replace(/<(img|iframe)([\S ]+?) (src=")/gm, "<$1 $2 data-$3")), /* @__PURE__ */ d("section", {
      className: qe({
        "kiss-RichText": t
      }),
      children: Rr(e)
    });
  }
  return /* @__PURE__ */ d("section", {
    className: qe({
      "kiss-RichText": t
    }),
    children: /* @__PURE__ */ d(Gr, {
      editorState: F.set(Tg(e), {
        decorator: r ? $A : MA
      }),
      onChange: () => null,
      blockRenderMap: Mf.merge(KA),
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
is.propTypes = {
  useRichTextStyle: m.bool
};
is.defaultProps = {
  useRichTextStyle: !0
};
const Sg = (e) => {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}, pt = (e) => {
  var r;
  return {
    ...e,
    props: {
      ...c1([
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
      src: Zf((r = e == null ? void 0 : e.props) == null ? void 0 : r.src)
    }
  };
}, PR = (e) => Er.canUseDom() ? Sg(e) ? JSON.parse(e) : Cg(e, !0) : {}, GA = (e) => {
  if (!Er.canUseDom())
    return null;
  if (!e || $e(e))
    return F.createEmpty();
  try {
    return F.createWithContent(Sg(e) ? uo(JSON.parse(e)) : uo(Cg(e, !0)));
  } catch {
    return F.createEmpty();
  }
}, Ig = (e) => F.set(e, {
  decorator: new fr([
    N1,
    eA,
    V1,
    P1,
    gg
  ])
}), UA = (e) => {
  const r = e.getCurrentContent();
  return F.push(e, cr.setBlockType(r, r.getSelectionAfter(), "unstyled"), "change-block-type");
}, zA = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection();
  return r.getBlockForKey(t.getStartKey()).getData().get("alignmentStyle");
}, HA = (e) => {
  const t = e.getSelection().getAnchorKey();
  return e.getCurrentContent().getBlockForKey(t);
}, os = (e) => {
  const r = HA(e), t = e.getSelection(), n = t.getStartOffset(), a = t.getEndOffset();
  return r.getText().slice(n, a);
}, vt = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection().getStartKey(), n = e.getSelection().getStartOffset();
  return r.getBlockForKey(t).getEntityAt(n);
}, vr = (e) => {
  const r = e.getCurrentContent(), t = vt(e);
  return t ? r.getEntity(t) : void 0;
}, ss = (e, r) => {
  let t;
  const n = e.getCurrentContent(), a = e.getSelection(), i = n.getBlockForKey(a.getFocusKey());
  return i.findEntityRanges((o) => o.getEntity() === r, (o, s) => {
    t = i.getText().slice(o, s);
  }), t;
}, _t = (e, r, t) => {
  const n = e.getBlockForKey(r.getSelection().getFocusKey());
  if (!n)
    return !1;
  const a = n.getEntityAt(r.getSelection().getStartOffset());
  return t === a;
}, LR = (e) => rr(tr("blocks"), b1((r, t) => `${r}${t.text}`, ""), $e)(e), YA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockBefore(n);
  return (a == null ? void 0 : a.get("type")) === "atomic";
}, VA = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection(), n = r.getBlockForKey(t.getAnchorKey()), a = n.getEntityAt(t.getStartOffset());
  let i = null;
  n.findEntityRanges((s) => s.getEntity() === a, (s, u) => {
    i = t.merge({
      anchorOffset: s,
      focusOffset: u
    });
  });
  const o = cr.applyEntity(r, i, null);
  return F.push(e, o, "apply-entity");
}, wg = (e) => {
  const r = e.getCurrentContent(), n = r.getSelectionBefore().getAnchorKey(), a = r.getBlockForKey(n);
  return rr(rg, $e)(a.getText());
}, JA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockForKey(n);
  return rr(rg, $e)(a.getText());
}, XA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey();
  return !r.getBlockBefore(n);
}, ZA = (e) => {
  var u, l, f;
  const r = e.getSelection(), t = r.getAnchorKey(), a = e.getCurrentContent().getBlockForKey(t), i = (u = a == null ? void 0 : a.get("text")) == null ? void 0 : u.length, o = (l = r == null ? void 0 : r.getStartOffset()) != null ? l : 0, s = (f = r == null ? void 0 : r.getEndOffset()) != null ? f : 0;
  return i === s - o;
}, qg = (e) => {
  const r = e.getCurrentContent().getBlockMap().delete(e.getCurrentContent().getSelectionBefore().getFocusKey()), t = e.getCurrentContent().merge({
    blockMap: r
  });
  return F.push(e, t, "remove-range");
}, vo = (e, r) => {
  const t = e.getCurrentContent(), n = t.getBlockForKey(r);
  let a = Ar.createEmpty(n.getKey());
  a = a.merge({
    anchorKey: n.getKey(),
    anchorOffset: 0,
    focusKey: n.getKey(),
    focusOffset: n.getLength()
  });
  const i = cr.removeRange(t, a, "backward"), o = i.getBlockMap().delete(r), s = i.merge({
    blockMap: o
  });
  return F.push(e, s, "remove-range");
}, Og = (e, r, t = 0) => {
  const n = Ar.createEmpty(r).merge({
    focusOffset: t
  });
  return F.forceSelection(e, n);
}, xg = (e, r, t) => {
  const a = e.getCurrentContent().mergeEntityData(r, t), i = e.getSelection(), o = F.push(e, a, "change-block-data");
  return F.forceSelection(o, i);
}, QA = (e, r, t) => {
  const n = e.getCurrentContent().getEntity(r).getData(), a = e.getCurrentContent().replaceEntityData(r, i1(t)(n));
  return F.push(e, a, "apply-entity");
}, so = (e) => {
  var s, u;
  const t = e.getSelection().getAnchorKey(), n = e.getCurrentContent().getKeyBefore(t), a = e.getCurrentContent().getKeyAfter(t), i = e.getCurrentContent().getBlockBefore(t);
  if (!a && !n) {
    const l = Ig(F.createEmpty());
    return F.moveSelectionToEnd(l);
  }
  let o = Ar.createEmpty(n || a);
  return o = o.merge({
    anchorOffset: (s = i == null ? void 0 : i.getLength()) != null ? s : 0,
    focusOffset: (u = i == null ? void 0 : i.getLength()) != null ? u : 0
  }), F.forceSelection(vo(e, t), o);
}, Nr = (e) => {
  var t;
  const r = (t = e == null ? void 0 : e.get("data")) == null ? void 0 : t.src;
  return rR(r) || eR(r);
}, eR = (e) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e), rR = (e) => /<img.*?src="(.*?)"[^\\>]+>/.test(e), Kr = (e) => {
  var t;
  const [, r] = (t = e == null ? void 0 : e.match(/src\s*=\s*"(.+?)"/)) != null ? t : [];
  return r || e;
}, kg = (e) => {
  var r, t;
  return !!((r = e == null ? void 0 : e.get("data")) != null && r.embedlyHtml) || !!((t = e == null ? void 0 : e.get("data")) != null && t.html);
}, Df = (e, r, t = {}) => {
  const n = new Vg({
    key: Jg(),
    type: "unstyled",
    text: "",
    ...t
  }), a = e.getCurrentContent(), i = a.getBlockMap(), o = Oh().withMutations((s) => {
    for (let [u, l] of i.entries())
      s.set(u, l), r === u && s.set(n.getKey(), n);
  });
  return F.forceSelection(F.push(e, Wf.createFromBlockArray(Array.from(o.values())).set("selectionBefore", a.getSelectionBefore()).set("selectionAfter", a.getSelectionAfter())), Ar.createEmpty(n.getKey()));
}, tR = (e, r = {}) => {
  const a = e.getCurrentContent().createEntity("VIDEO", "MUTABLE", r).getLastCreatedEntityKey();
  return Bf.insertAtomicBlock(e, a, " ");
}, nR = 8, aR = 38, iR = 40, oR = (e) => (r) => {
  const t = vr(e);
  return ![nR, aR, iR].includes(r.keyCode) && Nr(t) ? "new-text-block" : Xg(r);
}, sR = (e) => (r, t) => {
  const n = vr(t);
  if (r === "new-text-block" && Nr(n))
    return "handled";
  if (r === "backspace" && Nr(n) || kg(n))
    return e(so(t)), "handled";
  if (r === "backspace" && (n == null ? void 0 : n.getType()) === "IMAGE")
    return e(VA(t)), "handled";
  if (r === "backspace" && ZA(t) && YA(t) || r === "backspace" && XA(t) && JA(t))
    return e(so(t)), "handled";
  const a = Ue.handleKeyCommand(t, r);
  return a ? (e(a), "handled") : "not-handled";
}, uR = (e) => (r, t) => {
  const n = t.getCurrentContent(), a = t.getSelection().getAnchorKey(), i = n.getBlockForKey(a), o = vr(t);
  return kg(o) || Nr(o) ? (e(Df(t, a)), "handled") : i.getText() === "" && ["unordered-list-item", "blockquote"].includes(i.getType()) ? (e(UA(t)), "handled") : ["header-two", "header-three"].includes(i.getType()) ? (e(Df(t, a)), "handled") : "not-handled";
}, Pg = Gf`
  .public-DraftEditorPlaceholder-root {
    ${Fr.fontStyles.light};
    font-size: ${x(20)};
    line-height: ${x(32)};
    color: ${ae.font2};
    position: absolute;
    z-index: -1;
  }

  .public-DraftEditor-content {
    font-size: ${x(20)};
    line-height: ${x(32)};
  }

  .DraftEditor-editorContainer {
    ${Fr.fontStyles.light};
    color: ${ae.font1};
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
      border: ${x(4)} solid ${ae.background1};
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
      border: ${x(4)} solid ${ae.background1};
      cursor: pointer;
      transition: all var(--transition);
    }

    .u-Draft__image-focus:hover, .kiss-Draft__media-focus:hover {
      border-color: ${ae.primary4};
    }

    .u-Draft__image-focus__focused, .kiss-Draft__media-focus__focused {
      border-color: ${ae.primary1} !important;
      caret-color: transparent;
    }

    blockquote {
      font-style: italic;
      padding-left: ${x(15)};
      margin-left: ${x(50)};
      margin-top: ${x(20)};
      margin-bottom: ${x(20)};
      border-left: ${x(3)} solid ${ae.line1};
    }
  }

  .DraftEditor-editorContainer__disabled {
    color: ${ae.font2};
    cursor: not-allowed;

    a {
      color: ${ae.line2};
      &:hover,
      &:focus {
        color: ${ae.line2};
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
  return qe({
    "DraftEditor-editorContainer__disabled": e,
    "DraftEditor-editorContainer__richText": r,
    "DraftEditor-editorContainer__no-richText": !r,
    "DraftEditor-editorContainer__compact": t,
    [a]: a
  });
}, lR = Ee.div`
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
`, Dg = _o.forwardRef(({
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
  ...p
}, g) => {
  const h = yo(null), [{
    editorState: _,
    focus: v,
    disabled: A
  }, b] = V(H), y = (C) => b(Y(C));
  _e(() => {
    p.onChange(a ? Ff(_.getCurrentContent()) : _.getCurrentContent());
  }, [_]), _e(() => {
    b(Mh(g || h));
  }, [g, h]), _e(() => {
    y(Ig(GA(i)));
  }, [i]);
  const E = () => {
    h != null && h.current ? h.current.focus() : g != null && g.current && g.current.focus();
  };
  return /* @__PURE__ */ $(lR, {
    className: qe("u-Editor", e, {
      "u-Editor--hasError": r,
      "u-Editor--focused": v,
      "u-Editor--hasBorder": !s
    }),
    onClick: E,
    children: [/* @__PURE__ */ d(Pg, {}), /* @__PURE__ */ d(Rh, {
      "data-test-id": p["data-test-id"],
      tag: "section",
      modifier: "tertiary",
      noMargin: !0,
      className: qe("u-Editor__root", {
        "u-Editor__compact": f
      }),
      children: /* @__PURE__ */ d(Gr, {
        stripPastedStyles: !0,
        ref: g || h,
        editorState: _,
        placeholder: o,
        readOnly: l || A,
        keyBindingFn: oR(_),
        handleKeyCommand: sR(y),
        handleReturn: uR(y),
        onChange: y,
        onFocus: () => {
          b(Ss(!0)), t();
        },
        onBlur: () => {
          b(Ss(!1)), n();
        },
        blockStyleFn: Lg({
          isDisabled: l,
          useRichTextStyle: u,
          compact: f
        }),
        blockRenderMap: Xf
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
  initialValue: F.createEmpty(),
  rawValue: !0,
  placeholder: "",
  withoutBorder: !1,
  useRichTextStyle: !1,
  isDisabled: !1,
  compact: !1
};
const cR = Ee.div`
  display: flex;

  > * {
    margin-left: calc(-1 * var(--border-width, 1px));
  }

  :first-child > :first-child {
    margin-left: 0;
  }

  margin-right: ${x(10)};

  @media (min-width: ${x(Ge.S.min)}) {
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
`, qr = ({
  disabled: e,
  label: r,
  onChange: t
}) => {
  var s;
  const [{
    editorState: n,
    disabled: a
  }, i] = V(H), o = (s = zA(n)) != null ? s : "k-u-align-left";
  return /* @__PURE__ */ d(Se, {
    icon: r,
    disabled: a || e,
    active: o === r,
    onToggle: () => {
      t();
      const u = n.getCurrentContent(), l = n.getSelection();
      i(Y(F.push(n, cr.setBlockData(u, l, mo({
        alignmentStyle: r
      })), "change-inline-style")));
    }
  }, r);
};
qr.propTypes = {
  label: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
qr.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const us = (e) => /* @__PURE__ */ d(qr, {
  label: "k-u-align-center",
  ...e
});
us.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
us.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const ls = (e) => /* @__PURE__ */ d(qr, {
  label: "k-u-align-left",
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
const cs = (e) => /* @__PURE__ */ d(qr, {
  label: "k-u-align-right",
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
const fs = ({
  disabled: e,
  onChange: r
}) => {
  const [{
    editorState: t,
    disabled: n
  }, a] = V(H), i = t.getCurrentInlineStyle();
  return /* @__PURE__ */ d(Se, {
    active: i.has("BOLD"),
    icon: "format_bold",
    onToggle: (o) => {
      r(), a(Y(Ue.toggleInlineStyle(t, o)));
    },
    style: "BOLD",
    disabled: n || e
  }, "format_bold");
};
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
  return /* @__PURE__ */ d(Se, {
    active: i.has("ITALIC"),
    icon: "format_italic",
    onToggle: (o) => {
      r(), a(Y(Ue.toggleInlineStyle(t, o)));
    },
    style: "ITALIC",
    disabled: n || e
  }, "format_italic");
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
  }, a] = V(H), i = t.getCurrentContent(), o = t.getSelection(), u = i.getBlockForKey(o.getStartKey()).get("type") === "blockquote";
  return /* @__PURE__ */ d(Se, {
    icon: "quote",
    active: u,
    disabled: n || e,
    onToggle: () => {
      r(), a(Y(Ue.toggleBlockType(t, "blockquote")));
    }
  });
};
gs.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
gs.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const fR = Ee(Eh)`
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
}) => e && Uf`
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
      border-bottom: var(--border, ${x(1)} solid ${ae.line1});
    }

    .Editor__toolbar__tagsList__Item {
      width: 100%;
      position: relative;
      padding: ${x(15)} ${x(20)};
      background-color: var(--color-grey-000);
      border: ${x(1)} solid transparent;
      border-left: var(--border, ${x(1)} solid ${ae.line1});
      border-right: var(--border, ${x(1)} solid ${ae.line1});
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
          fill: ${ae.primary1};
        }
      }

    }

  }
`, $f = (e) => {
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
}, hs = ({
  disabled: e,
  onChange: r,
  tags: t
}) => {
  const [{
    editorState: n,
    disabled: a
  }, i] = V(H), o = n.getCurrentContent(), s = n.getSelection(), u = o.getBlockForKey(s.getStartKey()).getType();
  _e(() => {
    r(u);
  }, [u]);
  const l = (f) => () => {
    i(Y(Ue.toggleBlockType(n, f)));
  };
  return /* @__PURE__ */ d(fR, {
    summaryRender: ({
      open: f
    }) => /* @__PURE__ */ $(tg, {
      className: "Editor__toolbar__tagListToggle__button",
      tabIndex: "-1",
      disabled: a || e,
      fit: "icon",
      tag: "span",
      active: f,
      children: [$f(u), /* @__PURE__ */ d(Ch, {
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
        const p = $f(f);
        if (!!p)
          return /* @__PURE__ */ d("li", {
            children: /* @__PURE__ */ d("button", {
              onClick: l(f),
              type: "button",
              "aria-selected": f === u,
              className: "Editor__toolbar__tagsList__Item",
              children: p
            })
          }, f);
      })
    })
  }, o);
};
hs.propTypes = {
  tags: m.array,
  disabled: m.bool,
  onChange: m.func
};
hs.defaultProps = {
  tags: ["header-one", "header-two", "header-three", "header-four", "unstyled"],
  disabled: !1,
  onChange: () => null
};
const dR = Ee.div`
  display: flex;
  overflow-y: scroll;
  padding: ${x(12)} 0;
  background-color: ${ae.background3};

  > :last-child {
    margin-right: 0;
  }

  @media (min-width: ${x(Ge.M.min)}) {
    overflow-y: initial;
    padding: ${x(15)} 0;
  }

  &.Editor-Toolbar__whiteMode {
    background-color: ${ae.background1};
  }

  &.Editor-Toolbar__centered {
    justify-content: center;
  }

  ${({
  whiteMode: e
}) => e && Uf`
      background-color: ${ae.background1};
    `}
`, ps = ({
  disabled: e,
  onChange: r
}) => {
  const [{
    editorState: t,
    disabled: n
  }, a] = V(H), i = t.getCurrentContent(), o = t.getSelection(), s = i.getBlockForKey(o.getStartKey()).get("type");
  return /* @__PURE__ */ d(Se, {
    active: s === "unordered-list-item",
    icon: "format_list_bulleted",
    onToggle: (u) => {
      r(), a(Y(Ue.toggleBlockType(t, u)));
    },
    style: "unordered-list-item",
    disabled: e || n
  }, "format_list_bulleted");
};
ps.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ps.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const pe = ({
  whiteMode: e,
  disabled: r,
  className: t,
  centered: n,
  children: a
}) => {
  const [, i] = V(H);
  return _e(() => {
    i(br(r));
  }, [r]), /* @__PURE__ */ d(dR, {
    className: qe(t, {
      "Editor-Toolbar__whiteMode": e,
      "Editor-Toolbar__centered": n
    }),
    children: a
  });
};
pe.Image = rs;
pe.TagList = hs;
pe.Bold = fs;
pe.Italic = ds;
pe.Quote = gs;
pe.Left = ls;
pe.Right = cs;
pe.Center = us;
pe.UnorderedList = ps;
pe.Link = ns;
pe.Button = es;
pe.Video = as;
pe.Group = cR;
pe.propTypes = {
  disabled: m.bool,
  whiteMode: m.bool,
  centered: m.bool,
  className: m.string
};
pe.defaultProps = {
  disabled: !1,
  whiteMode: !1,
  centered: !1
};
var gR = Te, $g = gR("memoize", Wd());
$g.placeholder = be();
var hR = $g;
const pR = hR((e) => {
  if (!Er.canUseDom())
    return null;
  if (!e)
    return F.createEmpty();
  try {
    return F.createWithContent(uo(JSON.parse(e)), new fr([K1, rA, J1, L1, gg]));
  } catch {
    const t = Zg(`<p>${e}</p>`), n = Wf.createFromBlockArray(t);
    return F.createWithContent(n);
  }
}), vR = (e) => {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}, _R = (e) => {
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
}, Mg = ({
  text: e,
  useRichTextStyle: r,
  perfEnabled: t,
  isDisabled: n,
  compact: a,
  configResponsiveImageHandler: i
}) => Er.canUseDom() ? vR(e) ? /* @__PURE__ */ $(fo, {
  configResponsiveImageHandler: i,
  children: [/* @__PURE__ */ d(Pg, {}), /* @__PURE__ */ d("section", {
    className: qe("u-Editor__root", {
      "u-Editor__compact": a
    }),
    children: /* @__PURE__ */ d(Gr, {
      onChange: () => null,
      editorState: pR(e),
      blockStyleFn: Lg({
        isDisabled: n,
        useRichTextStyle: r,
        compact: a
      }),
      blockRenderMap: Xf,
      readOnly: !0
    })
  })]
}) : /* @__PURE__ */ d(fo, {
  configResponsiveImageHandler: i,
  children: /* @__PURE__ */ d(is, {
    html: e == null ? void 0 : e.replaceAll(`
`, "<br/>"),
    perfEnabled: t,
    useRichTextStyle: r
  })
}) : _R(e);
Mg.propTypes = {
  text: m.oneOfType([m.object, m.string]).isRequired,
  useRichTextStyle: m.bool,
  isDisabled: m.bool,
  perfEnabled: m.bool,
  compact: m.bool
};
Mg.defaultProps = {
  useRichTextStyle: !1,
  isDisabled: !1,
  perfEnabled: !1,
  compact: !1
};
const yR = Gf`
  .DraftEditor-wrapper {
      .public-DraftEditorPlaceholder-root {
        ${Fr.fontStyles[700]};
        font-size: ${x(28)};
        @media (min-width: ${x(Ge.M.min)}) {
          font-size: ${x(36)};
        }
        @media (min-width: ${x(Ge.L.min)}) {
          font-size: ${x(48)};
        }
      }
  }
  .DraftEditor-editorContainer__title {
    ${Fr.fontStyles[700]};
    font-size: ${x(28)};
    @media (min-width: ${x(Ge.M.min)}) {
      font-size: ${x(36)};
    }
    @media (min-width: ${x(Ge.L.min)}) {
      font-size: ${x(48)};
    }
  }
`, Bg = ({
  onFocus: e,
  onBlur: r,
  onChange: t,
  initialValue: n,
  placeholder: a
}) => {
  const [i, o] = ce(F.createEmpty());
  return _e(() => {
    o(Tg(n));
  }, [n]), /* @__PURE__ */ $("div", {
    className: "DraftEditor-wrapper",
    children: [/* @__PURE__ */ d(yR, {}), /* @__PURE__ */ d(Gr, {
      editorState: i,
      onChange: (s) => {
        o(s), t(Ph(s.getCurrentContent(), {
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
Bg.propTypes = {
  initialValue: m.string,
  placeholder: m.string,
  onFocus: m.func,
  onBlur: m.func,
  onChange: m.func
};
Bg.defaultProps = {
  initalValue: "",
  placeholder: "",
  onFocus: () => null,
  onBlur: () => null,
  onChange: () => null
};
const mR = {
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
}, Fg = ({
  onInit: e,
  translations: r,
  configResponsiveImageHandler: t,
  children: n
}) => (_e(() => {
  e();
}, []), /* @__PURE__ */ d(fo, {
  translations: {
    ...mR,
    ...r
  },
  configResponsiveImageHandler: t,
  children: n
})), Wg = {
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
Fg.propTypes = Wg.props;
Fg.defaultProps = Wg.defaultProps;
export {
  pe as Controls,
  Mg as Displayer,
  Fg as Editor,
  Dg as Playground,
  Bg as Title,
  FR as convertToHTML,
  MR as convertToRaw,
  Wg as editorPropTypes,
  PR as getJSONContent,
  LR as isEditorEmpty
};
