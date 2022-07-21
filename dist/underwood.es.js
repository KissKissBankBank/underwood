import { EditorState as F, DefaultDraftBlockRenderMap as Tf, RichUtils as Ue, Modifier as cr, AtomicBlockUtils as Sf, SelectionState as Ar, CompositeDecorator as fr, convertToRaw as If, Editor as Gr, convertFromRaw as to, ContentBlock as Mg, genKey as Bg, ContentState as wf, getDefaultKeyBinding as Fg, convertFromHTML as Wg } from "draft-js";
import { convertToRaw as MR } from "draft-js";
import m from "prop-types";
import co, { createContext as jg, useReducer as Ng, useContext as V, useEffect as _e, useState as ce, useRef as fo } from "react";
import { Title as Lr, Button as Le, pxToRem as x, BoldIcon as Kg, ItalicIcon as Gg, ListIcon as Ug, AlignLeftIcon as zg, AlignCenterIcon as Hg, AlignRightIcon as Yg, ImageIcon as Vg, VideoIcon as Jg, LinkIcon as Xg, EditorButtonIcon as Zg, BlockquoteIcon as Qg, Field as mr, TextInputWithButton as eh, KissKissLoadingAnimation as rh, COLORS as ae, VisuallyHidden as th, ArrowContainer as nh, Text as no, ScreenConfig as Ge, Modal as J, ButtonGroup as ao, ImageDropUploader as ah, AlertBox as qf, DropdownMenu as Xe, EditIconNext as ih, LinkIconNext as vs, CrossIconNext as oh, GarbageIconNext as sh, parseHtml as Rr, ResponsiveIframeContainer as Ur, CONTAINER_PADDING as Of, CONTAINER_PADDING_THIN as uh, useLazyObserver as xf, LazyLoader as lh, domElementHelper as Er, TYPOGRAPHY as Fr, Paragraph as ch, Details as fh, ArrowIcon as dh, ParagraphIcon as gh, Title4Icon as hh, Title3Icon as ph, Title2Icon as vh, Title1Icon as _h } from "@kisskissbankbank/kitten";
import qe from "classnames";
import Ee, { createGlobalStyle as kf, css as Pf } from "styled-components";
import { Map as go, OrderedMap as yh } from "immutable";
import { useField as Wr, ErrorMessage as Lf, Formik as dr, useFormikContext as mh, Form as Df } from "formik";
import Cr from "linkify-it";
import Tr from "tlds";
import * as jr from "yup";
import bh from "qs";
import { convertFromHTML as $f } from "draft-convert";
import { convertToHTML as FR } from "draft-convert";
import { stateToHTML as Ah } from "draft-js-export-html";
var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zr = { exports: {} }, lr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rt, _s;
function Mf() {
  if (_s)
    return Rt;
  _s = 1;
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
var ys;
function Rh() {
  if (ys)
    return lr;
  ys = 1, Mf();
  var e = co, r = 60103;
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
var ms;
function Eh() {
  return ms || (ms = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = co, t = Mf(), n = 60103, a = 60106;
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
        var ur = c ? c.displayName || c.name : "", ps = ur ? L(ur) : "";
        return typeof c == "function" && X.set(c, ps), ps;
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
      function cs() {
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
      function qg(c) {
        {
          if (c !== void 0) {
            var R = c.fileName.replace(/^.*[\\\/]/, ""), S = c.lineNumber;
            return `

Check your code at ` + R + ":" + S + ".";
          }
          return "";
        }
      }
      var fs = {};
      function Og(c) {
        {
          var R = cs();
          if (!R) {
            var S = typeof c == "string" ? c : c.displayName || c.name;
            S && (R = `

Check the top-level render call using <` + S + ">.");
          }
          return R;
        }
      }
      function ds(c, R) {
        {
          if (!c._store || c._store.validated || c.key != null)
            return;
          c._store.validated = !0;
          var S = Og(R);
          if (fs[S])
            return;
          fs[S] = !0;
          var D = "";
          c && c._owner && c._owner !== me.current && (D = " It was passed a child from " + ee(c._owner.type) + "."), sr(c), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, D), sr(null);
        }
      }
      function gs(c, R) {
        {
          if (typeof c != "object")
            return;
          if (Array.isArray(c))
            for (var S = 0; S < c.length; S++) {
              var D = c[S];
              At(D) && ds(D, R);
            }
          else if (At(c))
            c._store && (c._store.validated = !0);
          else if (c) {
            var U = q(c);
            if (typeof U == "function" && U !== c.entries)
              for (var z = U.call(c), N; !(N = z.next()).done; )
                At(N.value) && ds(N.value, R);
          }
        }
      }
      function xg(c) {
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
      function kg(c) {
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
      function hs(c, R, S, D, U, z) {
        {
          var N = M(c);
          if (!N) {
            var W = "";
            (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var he = qg(U);
            he ? W += he : W += cs();
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
                    gs(xe[ur], c);
                  Object.freeze && Object.freeze(xe);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                gs(xe, c);
          }
          return c === e.Fragment ? kg(re) : xg(re), re;
        }
      }
      function Pg(c, R, S) {
        return hs(c, R, S, !0);
      }
      function Lg(c, R, S) {
        return hs(c, R, S, !1);
      }
      var Dg = Lg, $g = Pg;
      e.jsx = Dg, e.jsxs = $g;
    }();
  }(Et)), Et;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Rh() : e.exports = Eh();
})(zr);
const le = zr.exports.Fragment, d = zr.exports.jsx, $ = zr.exports.jsxs, Bf = {
  editorState: F.createEmpty(),
  focus: !1,
  editorRef: null,
  disabled: !1
}, H = jg(Bf), Ch = (e, r) => {
  switch (r.type) {
    case "update":
    case "focus":
      return {
        ...e,
        ...r
      };
  }
}, io = ({
  translations: e,
  configResponsiveImageHandler: r,
  children: t
}) => /* @__PURE__ */ d(H.Provider, {
  value: Ng(Ch, {
    ...Bf,
    translations: e,
    configResponsiveImageHandler: r
  }),
  children: t
}), Y = (e) => ({
  type: "update",
  editorState: e
}), Th = (e) => ({
  type: "update",
  editorRef: e
}), br = (e) => ({
  type: "update",
  disabled: e
}), bs = (e) => ({
  type: "focus",
  focus: e
}), Ff = Tf.merge(go({
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
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
var Wf = ho.sanitizeUrl = void 0, Sh = /^([^\w]*)(javascript|data|vbscript)/im, Ih = /&#(\w+)(^\w|;)?/g, wh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, qh = /^([^:]+):/gm, Oh = [".", "/"];
function xh(e) {
  return Oh.indexOf(e[0]) > -1;
}
function kh(e) {
  return e.replace(Ih, function(r, t) {
    return String.fromCharCode(t);
  });
}
function Ph(e) {
  var r = kh(e || "").replace(wh, "").trim();
  if (!r)
    return "about:blank";
  if (xh(r))
    return r;
  var t = r.match(qh);
  if (!t)
    return r;
  var n = t[0];
  return Sh.test(n) ? "about:blank" : r;
}
Wf = ho.sanitizeUrl = Ph;
var jf = {};
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
})(jf);
var Ct, As;
function be() {
  return As || (As = 1, Ct = {}), Ct;
}
var ne = jf, Lh = be(), Rs = Array.prototype.push;
function Dh(e, r) {
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
function Es(e) {
  for (var r = e ? e.length : 0, t = Array(r); r--; )
    t[r] = e[r];
  return t;
}
function $h(e) {
  return function(r) {
    return e({}, r);
  };
}
function Mh(e, r) {
  return function() {
    for (var t = arguments.length, n = t - 1, a = Array(t); t--; )
      a[t] = arguments[t];
    var i = a[r], o = a.slice(0, r);
    return i && Rs.apply(o, i), r != n && Rs.apply(o, a.slice(r + 1)), e.apply(this, o);
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
function oo(e, r, t, n) {
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
  }, s = a ? t : Lh, u = "curry" in n && n.curry, l = "fixed" in n && n.fixed, f = "rearg" in n && n.rearg, p = a ? t.runInContext() : void 0, g = a ? t : {
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
        return y(T) ? O(Es(T)) : O.apply(void 0, arguments);
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
        return oo(e, O(T), n);
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
      return B === void 0 ? h(T, I) : Mh(T, B);
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
      return oo(ve, I, se, ge);
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
      return Dh(w(Tt(I, L), T), L);
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
    return ve ? X = ve(T) : o.immutable && (ne.mutate.array[B] ? X = St(T, Es) : ne.mutate.object[B] ? X = St(T, $h(T)) : ne.mutate.set[B] && (X = St(T, Me))), b(te, function(se) {
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
var Bh = oo, It, Cs;
function po() {
  if (Cs)
    return It;
  Cs = 1;
  function e(r) {
    return r;
  }
  return It = e, It;
}
var wt, Ts;
function Nf() {
  if (Ts)
    return wt;
  Ts = 1;
  var e = typeof Dr == "object" && Dr && Dr.Object === Object && Dr;
  return wt = e, wt;
}
var qt, Ss;
function ye() {
  if (Ss)
    return qt;
  Ss = 1;
  var e = Nf(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return qt = t, qt;
}
var Fh = ye(), Wh = Fh.Symbol, gr = Wh, Is = gr, Kf = Object.prototype, jh = Kf.hasOwnProperty, Nh = Kf.toString, _r = Is ? Is.toStringTag : void 0;
function Kh(e) {
  var r = jh.call(e, _r), t = e[_r];
  try {
    e[_r] = void 0;
    var n = !0;
  } catch {
  }
  var a = Nh.call(e);
  return n && (r ? e[_r] = t : delete e[_r]), a;
}
var Gh = Kh, Uh = Object.prototype, zh = Uh.toString;
function Hh(e) {
  return zh.call(e);
}
var Yh = Hh, ws = gr, Vh = Gh, Jh = Yh, Xh = "[object Null]", Zh = "[object Undefined]", qs = ws ? ws.toStringTag : void 0;
function Qh(e) {
  return e == null ? e === void 0 ? Zh : Xh : qs && qs in Object(e) ? Vh(e) : Jh(e);
}
var Ze = Qh;
function ep(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var De = ep, rp = Ze, tp = De, np = "[object AsyncFunction]", ap = "[object Function]", ip = "[object GeneratorFunction]", op = "[object Proxy]";
function sp(e) {
  if (!tp(e))
    return !1;
  var r = rp(e);
  return r == ap || r == ip || r == np || r == op;
}
var vo = sp, Ot, Os;
function up() {
  if (Os)
    return Ot;
  Os = 1;
  var e = ye(), r = e["__core-js_shared__"];
  return Ot = r, Ot;
}
var xt, xs;
function lp() {
  if (xs)
    return xt;
  xs = 1;
  var e = up(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return xt = t, xt;
}
var kt, ks;
function Gf() {
  if (ks)
    return kt;
  ks = 1;
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
var Pt, Ps;
function cp() {
  if (Ps)
    return Pt;
  Ps = 1;
  var e = vo, r = lp(), t = De, n = Gf(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, l = s.hasOwnProperty, f = RegExp("^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function p(g) {
    if (!t(g) || r(g))
      return !1;
    var h = e(g) ? f : i;
    return h.test(n(g));
  }
  return Pt = p, Pt;
}
var Lt, Ls;
function fp() {
  if (Ls)
    return Lt;
  Ls = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Lt = e, Lt;
}
var Dt, Ds;
function Qe() {
  if (Ds)
    return Dt;
  Ds = 1;
  var e = cp(), r = fp();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return Dt = t, Dt;
}
var $t, $s;
function Uf() {
  if ($s)
    return $t;
  $s = 1;
  var e = Qe(), r = ye(), t = e(r, "WeakMap");
  return $t = t, $t;
}
var Mt, Ms;
function zf() {
  if (Ms)
    return Mt;
  Ms = 1;
  var e = Uf(), r = e && new e();
  return Mt = r, Mt;
}
var dp = po(), Bs = zf(), gp = Bs ? function(e, r) {
  return Bs.set(e, r), e;
} : dp, Hf = gp, Bt, Fs;
function Hr() {
  if (Fs)
    return Bt;
  Fs = 1;
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
var hp = Hr(), pp = De;
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
var Yr = vp, _p = Yr, yp = ye(), mp = 1;
function bp(e, r, t) {
  var n = r & mp, a = _p(e);
  function i() {
    var o = this && this !== yp && this instanceof i ? a : e;
    return o.apply(n ? t : this, arguments);
  }
  return i;
}
var Ap = bp, Ft, Ws;
function _o() {
  if (Ws)
    return Ft;
  Ws = 1;
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
var Rp = Math.max;
function Ep(e, r, t, n) {
  for (var a = -1, i = e.length, o = t.length, s = -1, u = r.length, l = Rp(i - o, 0), f = Array(u + l), p = !n; ++s < u; )
    f[s] = r[s];
  for (; ++a < o; )
    (p || a < i) && (f[t[a]] = e[a]);
  for (; l--; )
    f[s++] = e[a++];
  return f;
}
var Yf = Ep, Cp = Math.max;
function Tp(e, r, t, n) {
  for (var a = -1, i = e.length, o = -1, s = t.length, u = -1, l = r.length, f = Cp(i - s, 0), p = Array(f + l), g = !n; ++a < f; )
    p[a] = e[a];
  for (var h = a; ++u < l; )
    p[h + u] = r[u];
  for (; ++o < s; )
    (g || a < i) && (p[h + t[o]] = e[a++]);
  return p;
}
var Vf = Tp;
function Sp(e, r) {
  for (var t = e.length, n = 0; t--; )
    e[t] === r && ++n;
  return n;
}
var Ip = Sp, Wt, js;
function yo() {
  if (js)
    return Wt;
  js = 1;
  function e() {
  }
  return Wt = e, Wt;
}
var jt, Ns;
function mo() {
  if (Ns)
    return jt;
  Ns = 1;
  var e = Hr(), r = yo(), t = 4294967295;
  function n(a) {
    this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = t, this.__views__ = [];
  }
  return n.prototype = e(r.prototype), n.prototype.constructor = n, jt = n, jt;
}
var Nt, Ks;
function Jf() {
  if (Ks)
    return Nt;
  Ks = 1;
  function e() {
  }
  return Nt = e, Nt;
}
var Kt, Gs;
function bo() {
  if (Gs)
    return Kt;
  Gs = 1;
  var e = zf(), r = Jf(), t = e ? function(n) {
    return e.get(n);
  } : r;
  return Kt = t, Kt;
}
var Gt, Us;
function wp() {
  if (Us)
    return Gt;
  Us = 1;
  var e = {};
  return Gt = e, Gt;
}
var Ut, zs;
function Xf() {
  if (zs)
    return Ut;
  zs = 1;
  var e = wp(), r = Object.prototype, t = r.hasOwnProperty;
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
var zt, Hs;
function Ao() {
  if (Hs)
    return zt;
  Hs = 1;
  var e = Hr(), r = yo();
  function t(n, a) {
    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = void 0;
  }
  return t.prototype = e(r.prototype), t.prototype.constructor = t, zt = t, zt;
}
var Ht, Ys;
function fe() {
  if (Ys)
    return Ht;
  Ys = 1;
  var e = Array.isArray;
  return Ht = e, Ht;
}
function qp(e) {
  return e != null && typeof e == "object";
}
var Ce = qp;
function Op(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Vr = Op, Yt, Vs;
function xp() {
  if (Vs)
    return Yt;
  Vs = 1;
  var e = mo(), r = Ao(), t = Vr;
  function n(a) {
    if (a instanceof e)
      return a.clone();
    var i = new r(a.__wrapped__, a.__chain__);
    return i.__actions__ = t(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
  }
  return Yt = n, Yt;
}
var Vt, Js;
function kp() {
  if (Js)
    return Vt;
  Js = 1;
  var e = mo(), r = Ao(), t = yo(), n = fe(), a = Ce, i = xp(), o = Object.prototype, s = o.hasOwnProperty;
  function u(l) {
    if (a(l) && !n(l) && !(l instanceof e)) {
      if (l instanceof r)
        return l;
      if (s.call(l, "__wrapped__"))
        return i(l);
    }
    return new r(l);
  }
  return u.prototype = t.prototype, u.prototype.constructor = u, Vt = u, Vt;
}
var Jt, Xs;
function Zf() {
  if (Xs)
    return Jt;
  Xs = 1;
  var e = mo(), r = bo(), t = Xf(), n = kp();
  function a(i) {
    var o = t(i), s = n[o];
    if (typeof s != "function" || !(o in e.prototype))
      return !1;
    if (i === s)
      return !0;
    var u = r(s);
    return !!u && i === u[0];
  }
  return Jt = a, Jt;
}
var Xt, Zs;
function Qf() {
  if (Zs)
    return Xt;
  Zs = 1;
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
  return Xt = n, Xt;
}
var Pp = Hf, Lp = Qf(), Dp = Lp(Pp), ed = Dp, $p = /\{\n\/\* \[wrapped with (.+)\] \*/, Mp = /,? & /;
function Bp(e) {
  var r = e.match($p);
  return r ? r[1].split(Mp) : [];
}
var Fp = Bp, Wp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function jp(e, r) {
  var t = r.length;
  if (!t)
    return e;
  var n = t - 1;
  return r[n] = (t > 1 ? "& " : "") + r[n], r = r.join(t > 2 ? ", " : " "), e.replace(Wp, `{
/* [wrapped with ` + r + `] */
`);
}
var Np = jp, Zt, Qs;
function Kp() {
  if (Qs)
    return Zt;
  Qs = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return Zt = e, Zt;
}
var Qt, eu;
function rd() {
  if (eu)
    return Qt;
  eu = 1;
  var e = Qe(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return Qt = r, Qt;
}
var en, ru;
function Gp() {
  if (ru)
    return en;
  ru = 1;
  var e = Kp(), r = rd(), t = po(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return en = n, en;
}
var rn, tu;
function td() {
  if (tu)
    return rn;
  tu = 1;
  var e = Gp(), r = Qf(), t = r(e);
  return rn = t, rn;
}
function Up(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Ro = Up, tn, nu;
function zp() {
  if (nu)
    return tn;
  nu = 1;
  function e(r, t, n, a) {
    for (var i = r.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (t(r[o], o, r))
        return o;
    return -1;
  }
  return tn = e, tn;
}
var nn, au;
function Hp() {
  if (au)
    return nn;
  au = 1;
  function e(r) {
    return r !== r;
  }
  return nn = e, nn;
}
var an, iu;
function Yp() {
  if (iu)
    return an;
  iu = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return an = e, an;
}
var on, ou;
function Eo() {
  if (ou)
    return on;
  ou = 1;
  var e = zp(), r = Hp(), t = Yp();
  function n(a, i, o) {
    return i === i ? t(a, i, o) : e(a, r, o);
  }
  return on = n, on;
}
var Vp = Eo();
function Jp(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && Vp(e, r, 0) > -1;
}
var nd = Jp, Xp = Ro, Zp = nd, Qp = 1, ev = 2, rv = 8, tv = 16, nv = 32, av = 64, iv = 128, ov = 256, sv = 512, uv = [
  ["ary", iv],
  ["bind", Qp],
  ["bindKey", ev],
  ["curry", rv],
  ["curryRight", tv],
  ["flip", sv],
  ["partial", nv],
  ["partialRight", av],
  ["rearg", ov]
];
function lv(e, r) {
  return Xp(uv, function(t) {
    var n = "_." + t[0];
    r & t[1] && !Zp(e, n) && e.push(n);
  }), e.sort();
}
var cv = lv, fv = Fp, dv = Np, gv = td(), hv = cv;
function pv(e, r, t) {
  var n = r + "";
  return gv(e, dv(n, hv(fv(n), t)));
}
var ad = pv, vv = Zf(), _v = ed, yv = ad, mv = 1, bv = 2, Av = 4, Rv = 8, su = 32, uu = 64;
function Ev(e, r, t, n, a, i, o, s, u, l) {
  var f = r & Rv, p = f ? o : void 0, g = f ? void 0 : o, h = f ? i : void 0, _ = f ? void 0 : i;
  r |= f ? su : uu, r &= ~(f ? uu : su), r & Av || (r &= ~(mv | bv));
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
  return vv(e) && _v(A, v), A.placeholder = n, yv(A, e, r);
}
var id = Ev;
function Cv(e) {
  var r = e;
  return r.placeholder;
}
var od = Cv, Tv = 9007199254740991, Sv = /^(?:0|[1-9]\d*)$/;
function Iv(e, r) {
  var t = typeof e;
  return r = r == null ? Tv : r, !!r && (t == "number" || t != "symbol" && Sv.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Jr = Iv, wv = Vr, qv = Jr, Ov = Math.min;
function xv(e, r) {
  for (var t = e.length, n = Ov(r.length, t), a = wv(e); n--; ) {
    var i = r[n];
    e[n] = qv(i, t) ? a[i] : void 0;
  }
  return e;
}
var kv = xv, lu = "__lodash_placeholder__";
function Pv(e, r) {
  for (var t = -1, n = e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    (o === r || o === lu) && (e[t] = lu, i[a++] = t);
  }
  return i;
}
var Co = Pv, Lv = Yf, Dv = Vf, $v = Ip, cu = Yr, Mv = id, Bv = od, Fv = kv, Wv = Co, jv = ye(), Nv = 1, Kv = 2, Gv = 8, Uv = 16, zv = 128, Hv = 512;
function sd(e, r, t, n, a, i, o, s, u, l) {
  var f = r & zv, p = r & Nv, g = r & Kv, h = r & (Gv | Uv), _ = r & Hv, v = g ? void 0 : cu(e);
  function A() {
    for (var b = arguments.length, y = Array(b), E = b; E--; )
      y[E] = arguments[E];
    if (h)
      var C = Bv(A), k = $v(y, C);
    if (n && (y = Lv(y, n, a, h)), i && (y = Dv(y, i, o, h)), b -= k, h && b < l) {
      var q = Wv(y, C);
      return Mv(e, r, sd, A.placeholder, t, y, q, s, u, l - b);
    }
    var w = p ? t : this, P = g ? w[e] : e;
    return b = y.length, s ? y = Fv(y, s) : _ && b > 1 && y.reverse(), f && u < b && (y.length = u), this && this !== jv && this instanceof A && (P = v || cu(P)), P.apply(w, y);
  }
  return A;
}
var ud = sd, Yv = _o(), Vv = Yr, Jv = ud, Xv = id, Zv = od, Qv = Co, e_ = ye();
function r_(e, r, t) {
  var n = Vv(e);
  function a() {
    for (var i = arguments.length, o = Array(i), s = i, u = Zv(a); s--; )
      o[s] = arguments[s];
    var l = i < 3 && o[0] !== u && o[i - 1] !== u ? [] : Qv(o, u);
    if (i -= l.length, i < t)
      return Xv(e, r, Jv, a.placeholder, void 0, o, l, void 0, void 0, t - i);
    var f = this && this !== e_ && this instanceof a ? n : e;
    return Yv(f, this, o);
  }
  return a;
}
var t_ = r_, n_ = _o(), a_ = Yr, i_ = ye(), o_ = 1;
function s_(e, r, t, n) {
  var a = r & o_, i = a_(e);
  function o() {
    for (var s = -1, u = arguments.length, l = -1, f = n.length, p = Array(f + u), g = this && this !== i_ && this instanceof o ? i : e; ++l < f; )
      p[l] = n[l];
    for (; u--; )
      p[l++] = arguments[++s];
    return n_(g, a ? t : this, p);
  }
  return o;
}
var u_ = s_, l_ = Yf, c_ = Vf, fu = Co, du = "__lodash_placeholder__", sn = 1, f_ = 2, d_ = 4, gu = 8, yr = 128, hu = 256, g_ = Math.min;
function h_(e, r) {
  var t = e[1], n = r[1], a = t | n, i = a < (sn | f_ | yr), o = n == yr && t == gu || n == yr && t == hu && e[7].length <= r[8] || n == (yr | hu) && r[7].length <= r[8] && t == gu;
  if (!(i || o))
    return e;
  n & sn && (e[2] = r[2], a |= t & sn ? 0 : d_);
  var s = r[3];
  if (s) {
    var u = e[3];
    e[3] = u ? l_(u, s, r[4]) : s, e[4] = u ? fu(e[3], du) : r[4];
  }
  return s = r[5], s && (u = e[5], e[5] = u ? c_(u, s, r[6]) : s, e[6] = u ? fu(e[5], du) : r[6]), s = r[7], s && (e[7] = s), n & yr && (e[8] = e[8] == null ? r[8] : g_(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = a, e;
}
var p_ = h_, un, pu;
function v_() {
  if (pu)
    return un;
  pu = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return un = r, un;
}
var ln, vu;
function ld() {
  if (vu)
    return ln;
  vu = 1;
  var e = v_(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return ln = t, ln;
}
var __ = Ze, y_ = Ce, m_ = "[object Symbol]";
function b_(e) {
  return typeof e == "symbol" || y_(e) && __(e) == m_;
}
var Sr = b_, A_ = ld(), _u = De, R_ = Sr, yu = 0 / 0, E_ = /^[-+]0x[0-9a-f]+$/i, C_ = /^0b[01]+$/i, T_ = /^0o[0-7]+$/i, S_ = parseInt;
function I_(e) {
  if (typeof e == "number")
    return e;
  if (R_(e))
    return yu;
  if (_u(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _u(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = A_(e);
  var t = C_.test(e);
  return t || T_.test(e) ? S_(e.slice(2), t ? 2 : 8) : E_.test(e) ? yu : +e;
}
var w_ = I_, q_ = w_, mu = 1 / 0, O_ = 17976931348623157e292;
function x_(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = q_(e), e === mu || e === -mu) {
    var r = e < 0 ? -1 : 1;
    return r * O_;
  }
  return e === e ? e : 0;
}
var k_ = x_, P_ = k_;
function L_(e) {
  var r = P_(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var cd = L_, D_ = Hf, $_ = Ap, M_ = t_, B_ = ud, F_ = u_, W_ = bo(), j_ = p_, N_ = ed, K_ = ad, bu = cd, G_ = "Expected a function", Au = 1, U_ = 2, cn = 8, fn = 16, dn = 32, Ru = 64, Eu = Math.max;
function z_(e, r, t, n, a, i, o, s) {
  var u = r & U_;
  if (!u && typeof e != "function")
    throw new TypeError(G_);
  var l = n ? n.length : 0;
  if (l || (r &= ~(dn | Ru), n = a = void 0), o = o === void 0 ? o : Eu(bu(o), 0), s = s === void 0 ? s : bu(s), l -= a ? a.length : 0, r & Ru) {
    var f = n, p = a;
    n = a = void 0;
  }
  var g = u ? void 0 : W_(e), h = [
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
  if (g && j_(h, g), e = h[0], r = h[1], t = h[2], n = h[3], a = h[4], s = h[9] = h[9] === void 0 ? u ? 0 : e.length : Eu(h[9] - l, 0), !s && r & (cn | fn) && (r &= ~(cn | fn)), !r || r == Au)
    var _ = $_(e, r, t);
  else
    r == cn || r == fn ? _ = M_(e, r, s) : (r == dn || r == (Au | dn)) && !a.length ? _ = F_(e, r, t, n) : _ = B_.apply(void 0, h);
  var v = g ? D_ : N_;
  return K_(v(_, h), e, r);
}
var To = z_, H_ = To, Y_ = 128;
function V_(e, r, t) {
  return r = t ? void 0 : r, r = e && r == null ? e.length : r, H_(e, Y_, void 0, void 0, void 0, void 0, r);
}
var J_ = V_, gn, Cu;
function fd() {
  if (Cu)
    return gn;
  Cu = 1;
  var e = rd();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return gn = r, gn;
}
var hn, Tu;
function So() {
  if (Tu)
    return hn;
  Tu = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return hn = e, hn;
}
var pn, Su;
function Io() {
  if (Su)
    return pn;
  Su = 1;
  var e = fd(), r = So(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, o, s) {
    var u = i[o];
    (!(n.call(i, o) && r(u, s)) || s === void 0 && !(o in i)) && e(i, o, s);
  }
  return pn = a, pn;
}
var vn, Iu;
function Ir() {
  if (Iu)
    return vn;
  Iu = 1;
  var e = Io(), r = fd();
  function t(n, a, i, o) {
    var s = !i;
    i || (i = {});
    for (var u = -1, l = a.length; ++u < l; ) {
      var f = a[u], p = o ? o(i[f], n[f], f, i, n) : void 0;
      p === void 0 && (p = n[f]), s ? r(i, f, p) : e(i, f, p);
    }
    return i;
  }
  return vn = t, vn;
}
function X_(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Z_ = X_, _n, wu;
function Q_() {
  if (wu)
    return _n;
  wu = 1;
  var e = Ze, r = Ce, t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return _n = n, _n;
}
var yn, qu;
function Xr() {
  if (qu)
    return yn;
  qu = 1;
  var e = Q_(), r = Ce, t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(function() {
    return arguments;
  }()) ? e : function(o) {
    return r(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return yn = i, yn;
}
var $r = { exports: {} }, mn, Ou;
function ey() {
  if (Ou)
    return mn;
  Ou = 1;
  function e() {
    return !1;
  }
  return mn = e, mn;
}
var xu;
function Zr() {
  return xu || (xu = 1, function(e, r) {
    var t = ye(), n = ey(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? t.Buffer : void 0, u = s ? s.isBuffer : void 0, l = u || n;
    e.exports = l;
  }($r, $r.exports)), $r.exports;
}
var bn, ku;
function wo() {
  if (ku)
    return bn;
  ku = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return bn = r, bn;
}
var An, Pu;
function ry() {
  if (Pu)
    return An;
  Pu = 1;
  var e = Ze, r = wo(), t = Ce, n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", l = "[object Map]", f = "[object Number]", p = "[object Object]", g = "[object RegExp]", h = "[object Set]", _ = "[object String]", v = "[object WeakMap]", A = "[object ArrayBuffer]", b = "[object DataView]", y = "[object Float32Array]", E = "[object Float64Array]", C = "[object Int8Array]", k = "[object Int16Array]", q = "[object Int32Array]", w = "[object Uint8Array]", P = "[object Uint8ClampedArray]", G = "[object Uint16Array]", te = "[object Uint32Array]", M = {};
  M[y] = M[E] = M[C] = M[k] = M[q] = M[w] = M[P] = M[G] = M[te] = !0, M[n] = M[a] = M[A] = M[i] = M[b] = M[o] = M[s] = M[u] = M[l] = M[f] = M[p] = M[g] = M[h] = M[_] = M[v] = !1;
  function Q(ie) {
    return t(ie) && r(ie.length) && !!M[e(ie)];
  }
  return An = Q, An;
}
var Rn, Lu;
function qo() {
  if (Lu)
    return Rn;
  Lu = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Rn = e, Rn;
}
var Mr = { exports: {} }, Du;
function Oo() {
  return Du || (Du = 1, function(e, r) {
    var t = Nf(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && t.process, s = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Mr, Mr.exports)), Mr.exports;
}
var En, $u;
function xo() {
  if ($u)
    return En;
  $u = 1;
  var e = ry(), r = qo(), t = Oo(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return En = a, En;
}
var ty = Z_, ny = Xr(), ay = fe(), iy = Zr(), oy = Jr, sy = xo(), uy = Object.prototype, ly = uy.hasOwnProperty;
function cy(e, r) {
  var t = ay(e), n = !t && ny(e), a = !t && !n && iy(e), i = !t && !n && !a && sy(e), o = t || n || a || i, s = o ? ty(e.length, String) : [], u = s.length;
  for (var l in e)
    (r || ly.call(e, l)) && !(o && (l == "length" || a && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || oy(l, u))) && s.push(l);
  return s;
}
var dd = cy, fy = Object.prototype;
function dy(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || fy;
  return e === t;
}
var Qr = dy;
function gy(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var gd = gy, hy = gd, py = hy(Object.keys, Object), vy = py, _y = Qr, yy = vy, my = Object.prototype, by = my.hasOwnProperty;
function Ay(e) {
  if (!_y(e))
    return yy(e);
  var r = [];
  for (var t in Object(e))
    by.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var ko = Ay, Cn, Mu;
function et() {
  if (Mu)
    return Cn;
  Mu = 1;
  var e = vo, r = wo();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Cn = t, Cn;
}
var Ry = dd, Ey = ko, Cy = et();
function Ty(e) {
  return Cy(e) ? Ry(e) : Ey(e);
}
var wr = Ty, Sy = Ir(), Iy = wr;
function wy(e, r) {
  return e && Sy(r, Iy(r), e);
}
var hd = wy, Tn, Bu;
function qy() {
  if (Bu)
    return Tn;
  Bu = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Tn = e, Tn;
}
var Sn, Fu;
function rt() {
  if (Fu)
    return Sn;
  Fu = 1;
  var e = So();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return Sn = r, Sn;
}
var In, Wu;
function Oy() {
  if (Wu)
    return In;
  Wu = 1;
  var e = rt(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : t.call(i, o, 1), --this.size, !0;
  }
  return In = n, In;
}
var wn, ju;
function xy() {
  if (ju)
    return wn;
  ju = 1;
  var e = rt();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return wn = r, wn;
}
var qn, Nu;
function ky() {
  if (Nu)
    return qn;
  Nu = 1;
  var e = rt();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return qn = r, qn;
}
var On, Ku;
function Py() {
  if (Ku)
    return On;
  Ku = 1;
  var e = rt();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return On = r, On;
}
var xn, Gu;
function tt() {
  if (Gu)
    return xn;
  Gu = 1;
  var e = qy(), r = Oy(), t = xy(), n = ky(), a = Py();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, xn = i, xn;
}
var kn, Uu;
function Ly() {
  if (Uu)
    return kn;
  Uu = 1;
  var e = tt();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return kn = r, kn;
}
var Pn, zu;
function Dy() {
  if (zu)
    return Pn;
  zu = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return Pn = e, Pn;
}
var Ln, Hu;
function $y() {
  if (Hu)
    return Ln;
  Hu = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Ln = e, Ln;
}
var Dn, Yu;
function My() {
  if (Yu)
    return Dn;
  Yu = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Dn = e, Dn;
}
var $n, Vu;
function Po() {
  if (Vu)
    return $n;
  Vu = 1;
  var e = Qe(), r = ye(), t = e(r, "Map");
  return $n = t, $n;
}
var Mn, Ju;
function nt() {
  if (Ju)
    return Mn;
  Ju = 1;
  var e = Qe(), r = e(Object, "create");
  return Mn = r, Mn;
}
var Bn, Xu;
function By() {
  if (Xu)
    return Bn;
  Xu = 1;
  var e = nt();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Bn = r, Bn;
}
var Fn, Zu;
function Fy() {
  if (Zu)
    return Fn;
  Zu = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Fn = e, Fn;
}
var Wn, Qu;
function Wy() {
  if (Qu)
    return Wn;
  Qu = 1;
  var e = nt(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === r ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Wn = a, Wn;
}
var jn, el;
function jy() {
  if (el)
    return jn;
  el = 1;
  var e = nt(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return jn = n, jn;
}
var Nn, rl;
function Ny() {
  if (rl)
    return Nn;
  rl = 1;
  var e = nt(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Nn = t, Nn;
}
var Kn, tl;
function Ky() {
  if (tl)
    return Kn;
  tl = 1;
  var e = By(), r = Fy(), t = Wy(), n = jy(), a = Ny();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Kn = i, Kn;
}
var Gn, nl;
function Gy() {
  if (nl)
    return Gn;
  nl = 1;
  var e = Ky(), r = tt(), t = Po();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Gn = n, Gn;
}
var Un, al;
function Uy() {
  if (al)
    return Un;
  al = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Un = e, Un;
}
var zn, il;
function at() {
  if (il)
    return zn;
  il = 1;
  var e = Uy();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return zn = r, zn;
}
var Hn, ol;
function zy() {
  if (ol)
    return Hn;
  ol = 1;
  var e = at();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Hn = r, Hn;
}
var Yn, sl;
function Hy() {
  if (sl)
    return Yn;
  sl = 1;
  var e = at();
  function r(t) {
    return e(this, t).get(t);
  }
  return Yn = r, Yn;
}
var Vn, ul;
function Yy() {
  if (ul)
    return Vn;
  ul = 1;
  var e = at();
  function r(t) {
    return e(this, t).has(t);
  }
  return Vn = r, Vn;
}
var Jn, ll;
function Vy() {
  if (ll)
    return Jn;
  ll = 1;
  var e = at();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Jn = r, Jn;
}
var Xn, cl;
function Lo() {
  if (cl)
    return Xn;
  cl = 1;
  var e = Gy(), r = zy(), t = Hy(), n = Yy(), a = Vy();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var l = o[s];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Xn = i, Xn;
}
var Zn, fl;
function Jy() {
  if (fl)
    return Zn;
  fl = 1;
  var e = tt(), r = Po(), t = Lo(), n = 200;
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
  return Zn = a, Zn;
}
var Qn, dl;
function Do() {
  if (dl)
    return Qn;
  dl = 1;
  var e = tt(), r = Ly(), t = Dy(), n = $y(), a = My(), i = Jy();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = r, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, Qn = o, Qn;
}
var ea, gl;
function Xy() {
  if (gl)
    return ea;
  gl = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return ea = e, ea;
}
var ra, hl;
function Zy() {
  if (hl)
    return ra;
  hl = 1;
  var e = De, r = Qr, t = Xy(), n = Object.prototype, a = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = r(o), u = [];
    for (var l in o)
      l == "constructor" && (s || !a.call(o, l)) || u.push(l);
    return u;
  }
  return ra = i, ra;
}
var ta, pl;
function $o() {
  if (pl)
    return ta;
  pl = 1;
  var e = dd, r = Zy(), t = et();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ta = n, ta;
}
var na, vl;
function Qy() {
  if (vl)
    return na;
  vl = 1;
  var e = Ir(), r = $o();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return na = t, na;
}
var Br = { exports: {} }, _l;
function em() {
  return _l || (_l = 1, function(e, r) {
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
var aa, yl;
function rm() {
  if (yl)
    return aa;
  yl = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, o = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (o[i++] = s);
    }
    return o;
  }
  return aa = e, aa;
}
var ia, ml;
function pd() {
  if (ml)
    return ia;
  ml = 1;
  function e() {
    return [];
  }
  return ia = e, ia;
}
var oa, bl;
function Mo() {
  if (bl)
    return oa;
  bl = 1;
  var e = rm(), r = pd(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : r;
  return oa = i, oa;
}
var sa, Al;
function tm() {
  if (Al)
    return sa;
  Al = 1;
  var e = Ir(), r = Mo();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return sa = t, sa;
}
var ua, Rl;
function Bo() {
  if (Rl)
    return ua;
  Rl = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return ua = e, ua;
}
var nm = gd, am = nm(Object.getPrototypeOf, Object), Fo = am, la, El;
function vd() {
  if (El)
    return la;
  El = 1;
  var e = Bo(), r = Fo, t = Mo(), n = pd(), a = Object.getOwnPropertySymbols, i = a ? function(o) {
    for (var s = []; o; )
      e(s, t(o)), o = r(o);
    return s;
  } : n;
  return la = i, la;
}
var ca, Cl;
function im() {
  if (Cl)
    return ca;
  Cl = 1;
  var e = Ir(), r = vd();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ca = t, ca;
}
var fa, Tl;
function _d() {
  if (Tl)
    return fa;
  Tl = 1;
  var e = Bo(), r = fe();
  function t(n, a, i) {
    var o = a(n);
    return r(n) ? o : e(o, i(n));
  }
  return fa = t, fa;
}
var da, Sl;
function yd() {
  if (Sl)
    return da;
  Sl = 1;
  var e = _d(), r = Mo(), t = wr;
  function n(a) {
    return e(a, t, r);
  }
  return da = n, da;
}
var ga, Il;
function Wo() {
  if (Il)
    return ga;
  Il = 1;
  var e = _d(), r = vd(), t = $o();
  function n(a) {
    return e(a, t, r);
  }
  return ga = n, ga;
}
var ha, wl;
function om() {
  if (wl)
    return ha;
  wl = 1;
  var e = Qe(), r = ye(), t = e(r, "DataView");
  return ha = t, ha;
}
var pa, ql;
function sm() {
  if (ql)
    return pa;
  ql = 1;
  var e = Qe(), r = ye(), t = e(r, "Promise");
  return pa = t, pa;
}
var va, Ol;
function md() {
  if (Ol)
    return va;
  Ol = 1;
  var e = Qe(), r = ye(), t = e(r, "Set");
  return va = t, va;
}
var _a, xl;
function hr() {
  if (xl)
    return _a;
  xl = 1;
  var e = om(), r = Po(), t = sm(), n = md(), a = Uf(), i = Ze, o = Gf(), s = "[object Map]", u = "[object Object]", l = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", g = "[object DataView]", h = o(e), _ = o(r), v = o(t), A = o(n), b = o(a), y = i;
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
  }), _a = y, _a;
}
var ya, kl;
function um() {
  if (kl)
    return ya;
  kl = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return ya = t, ya;
}
var ma, Pl;
function bd() {
  if (Pl)
    return ma;
  Pl = 1;
  var e = ye(), r = e.Uint8Array;
  return ma = r, ma;
}
var ba, Ll;
function jo() {
  if (Ll)
    return ba;
  Ll = 1;
  var e = bd();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return ba = r, ba;
}
var Aa, Dl;
function lm() {
  if (Dl)
    return Aa;
  Dl = 1;
  var e = jo();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return Aa = r, Aa;
}
var Ra, $l;
function cm() {
  if ($l)
    return Ra;
  $l = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return Ra = r, Ra;
}
var Ea, Ml;
function fm() {
  if (Ml)
    return Ea;
  Ml = 1;
  var e = gr, r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return Ea = n, Ea;
}
var Ca, Bl;
function dm() {
  if (Bl)
    return Ca;
  Bl = 1;
  var e = jo();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return Ca = r, Ca;
}
var Ta, Fl;
function gm() {
  if (Fl)
    return Ta;
  Fl = 1;
  var e = jo(), r = lm(), t = cm(), n = fm(), a = dm(), i = "[object Boolean]", o = "[object Date]", s = "[object Map]", u = "[object Number]", l = "[object RegExp]", f = "[object Set]", p = "[object String]", g = "[object Symbol]", h = "[object ArrayBuffer]", _ = "[object DataView]", v = "[object Float32Array]", A = "[object Float64Array]", b = "[object Int8Array]", y = "[object Int16Array]", E = "[object Int32Array]", C = "[object Uint8Array]", k = "[object Uint8ClampedArray]", q = "[object Uint16Array]", w = "[object Uint32Array]";
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
  return Ta = P, Ta;
}
var Sa, Wl;
function hm() {
  if (Wl)
    return Sa;
  Wl = 1;
  var e = Hr(), r = Fo, t = Qr;
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return Sa = n, Sa;
}
var Ia, jl;
function pm() {
  if (jl)
    return Ia;
  jl = 1;
  var e = hr(), r = Ce, t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ia = n, Ia;
}
var wa, Nl;
function vm() {
  if (Nl)
    return wa;
  Nl = 1;
  var e = pm(), r = qo(), t = Oo(), n = t && t.isMap, a = n ? r(n) : e;
  return wa = a, wa;
}
var qa, Kl;
function _m() {
  if (Kl)
    return qa;
  Kl = 1;
  var e = hr(), r = Ce, t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return qa = n, qa;
}
var Oa, Gl;
function ym() {
  if (Gl)
    return Oa;
  Gl = 1;
  var e = _m(), r = qo(), t = Oo(), n = t && t.isSet, a = n ? r(n) : e;
  return Oa = a, Oa;
}
var xa, Ul;
function No() {
  if (Ul)
    return xa;
  Ul = 1;
  var e = Do(), r = Ro, t = Io(), n = hd, a = Qy(), i = em(), o = Vr, s = tm(), u = im(), l = yd(), f = Wo(), p = hr(), g = um(), h = gm(), _ = hm(), v = fe(), A = Zr(), b = vm(), y = De, E = ym(), C = wr, k = $o(), q = 1, w = 2, P = 4, G = "[object Arguments]", te = "[object Array]", M = "[object Boolean]", Q = "[object Date]", ie = "[object Error]", ee = "[object Function]", de = "[object GeneratorFunction]", Me = "[object Map]", nr = "[object Number]", Be = "[object Object]", ar = "[object RegExp]", ir = "[object Set]", ze = "[object String]", He = "[object Symbol]", oe = "[object WeakMap]", Oe = "[object ArrayBuffer]", O = "[object DataView]", T = "[object Float32Array]", I = "[object Float64Array]", L = "[object Int8Array]", B = "[object Int16Array]", X = "[object Int32Array]", ve = "[object Uint8Array]", se = "[object Uint8ClampedArray]", ge = "[object Uint16Array]", or = "[object Uint32Array]", j = {};
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
  return xa = Ye, xa;
}
var mm = No(), bm = 4;
function Am(e) {
  return mm(e, bm);
}
var Rm = Am, Em = To, Cm = 8;
function Ko(e, r, t) {
  r = t ? void 0 : r;
  var n = Em(e, Cm, void 0, void 0, void 0, void 0, void 0, r);
  return n.placeholder = Ko.placeholder, n;
}
Ko.placeholder = {};
var Tm = Ko, Sm = Ze, Im = Fo, wm = Ce, qm = "[object Object]", Om = Function.prototype, xm = Object.prototype, Ad = Om.toString, km = xm.hasOwnProperty, Pm = Ad.call(Object);
function Lm(e) {
  if (!wm(e) || Sm(e) != qm)
    return !1;
  var r = Im(e);
  if (r === null)
    return !0;
  var t = km.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Ad.call(t) == Pm;
}
var Rd = Lm, Dm = Ze, $m = Ce, Mm = Rd, Bm = "[object DOMException]", Fm = "[object Error]";
function Wm(e) {
  if (!$m(e))
    return !1;
  var r = Dm(e);
  return r == Fm || r == Bm || typeof e.message == "string" && typeof e.name == "string" && !Mm(e);
}
var jm = Wm, Nm = hr(), Km = Ce, Gm = "[object WeakMap]";
function Um(e) {
  return Km(e) && Nm(e) == Gm;
}
var zm = Um, ka, zl;
function Hm() {
  if (zl)
    return ka;
  zl = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return ka = r, ka;
}
var Pa, Hl;
function Ym() {
  if (Hl)
    return Pa;
  Hl = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Pa = e, Pa;
}
var La, Yl;
function Ed() {
  if (Yl)
    return La;
  Yl = 1;
  var e = Lo(), r = Hm(), t = Ym();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, La = n, La;
}
var Da, Vl;
function Vm() {
  if (Vl)
    return Da;
  Vl = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return Da = e, Da;
}
var $a, Jl;
function Cd() {
  if (Jl)
    return $a;
  Jl = 1;
  function e(r, t) {
    return r.has(t);
  }
  return $a = e, $a;
}
var Ma, Xl;
function Td() {
  if (Xl)
    return Ma;
  Xl = 1;
  var e = Ed(), r = Vm(), t = Cd(), n = 1, a = 2;
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
  return Ma = i, Ma;
}
var Ba, Zl;
function Jm() {
  if (Zl)
    return Ba;
  Zl = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Ba = e, Ba;
}
var Fa, Ql;
function Go() {
  if (Ql)
    return Fa;
  Ql = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Fa = e, Fa;
}
var Wa, ec;
function Xm() {
  if (ec)
    return Wa;
  ec = 1;
  var e = gr, r = bd(), t = So(), n = Td(), a = Jm(), i = Go(), o = 1, s = 2, u = "[object Boolean]", l = "[object Date]", f = "[object Error]", p = "[object Map]", g = "[object Number]", h = "[object RegExp]", _ = "[object Set]", v = "[object String]", A = "[object Symbol]", b = "[object ArrayBuffer]", y = "[object DataView]", E = e ? e.prototype : void 0, C = E ? E.valueOf : void 0;
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
  return Wa = k, Wa;
}
var ja, rc;
function Zm() {
  if (rc)
    return ja;
  rc = 1;
  var e = yd(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
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
  return ja = a, ja;
}
var Na, tc;
function Qm() {
  if (tc)
    return Na;
  tc = 1;
  var e = Do(), r = Td(), t = Xm(), n = Zm(), a = hr(), i = fe(), o = Zr(), s = xo(), u = 1, l = "[object Arguments]", f = "[object Array]", p = "[object Object]", g = Object.prototype, h = g.hasOwnProperty;
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
  return Na = _, Na;
}
var Ka, nc;
function Uo() {
  if (nc)
    return Ka;
  nc = 1;
  var e = Qm(), r = Ce;
  function t(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, o, t, s);
  }
  return Ka = t, Ka;
}
var Ga, ac;
function eb() {
  if (ac)
    return Ga;
  ac = 1;
  var e = Do(), r = Uo(), t = 1, n = 2;
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
  return Ga = a, Ga;
}
var Ua, ic;
function Sd() {
  if (ic)
    return Ua;
  ic = 1;
  var e = De;
  function r(t) {
    return t === t && !e(t);
  }
  return Ua = r, Ua;
}
var za, oc;
function rb() {
  if (oc)
    return za;
  oc = 1;
  var e = Sd(), r = wr;
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return za = t, za;
}
var Ha, sc;
function Id() {
  if (sc)
    return Ha;
  sc = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return Ha = e, Ha;
}
var Ya, uc;
function tb() {
  if (uc)
    return Ya;
  uc = 1;
  var e = eb(), r = rb(), t = Id();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Ya = n, Ya;
}
var Va, lc;
function zo() {
  if (lc)
    return Va;
  lc = 1;
  var e = fe(), r = Sr, t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || o != null && i in Object(o);
  }
  return Va = a, Va;
}
var Ja, cc;
function wd() {
  if (cc)
    return Ja;
  cc = 1;
  var e = Lo(), r = "Expected a function";
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
  return t.Cache = e, Ja = t, Ja;
}
var nb = wd(), ab = 500;
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
}), qd = cb, Xa, fc;
function it() {
  if (fc)
    return Xa;
  fc = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return Xa = e, Xa;
}
var Za, dc;
function Od() {
  if (dc)
    return Za;
  dc = 1;
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
  return Za = s, Za;
}
var Qa, gc;
function Ho() {
  if (gc)
    return Qa;
  gc = 1;
  var e = Od();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return Qa = r, Qa;
}
var ei, hc;
function pr() {
  if (hc)
    return ei;
  hc = 1;
  var e = fe(), r = zo(), t = qd, n = Ho();
  function a(i, o) {
    return e(i) ? i : r(i, o) ? [i] : t(n(i));
  }
  return ei = a, ei;
}
var fb = Sr, db = 1 / 0;
function gb(e) {
  if (typeof e == "string" || fb(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -db ? "-0" : r;
}
var er = gb, ri, pc;
function ot() {
  if (pc)
    return ri;
  pc = 1;
  var e = pr(), r = er;
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[r(a[i++])];
    return i && i == o ? n : void 0;
  }
  return ri = t, ri;
}
var ti, vc;
function xd() {
  if (vc)
    return ti;
  vc = 1;
  var e = ot();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return ti = r, ti;
}
var ni, _c;
function hb() {
  if (_c)
    return ni;
  _c = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return ni = e, ni;
}
var ai, yc;
function pb() {
  if (yc)
    return ai;
  yc = 1;
  var e = pr(), r = Xr(), t = fe(), n = Jr, a = wo(), i = er;
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
  return ai = o, ai;
}
var ii, mc;
function kd() {
  if (mc)
    return ii;
  mc = 1;
  var e = hb(), r = pb();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return ii = t, ii;
}
var oi, bc;
function vb() {
  if (bc)
    return oi;
  bc = 1;
  var e = Uo(), r = xd(), t = kd(), n = zo(), a = Sd(), i = Id(), o = er, s = 1, u = 2;
  function l(f, p) {
    return n(f) && a(p) ? i(o(f), p) : function(g) {
      var h = r(g, f);
      return h === void 0 && h === p ? t(g, f) : e(p, h, s | u);
    };
  }
  return oi = l, oi;
}
var si, Ac;
function _b() {
  if (Ac)
    return si;
  Ac = 1;
  function e(r) {
    return function(t) {
      return t == null ? void 0 : t[r];
    };
  }
  return si = e, si;
}
var ui, Rc;
function yb() {
  if (Rc)
    return ui;
  Rc = 1;
  var e = ot();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return ui = r, ui;
}
var li, Ec;
function mb() {
  if (Ec)
    return li;
  Ec = 1;
  var e = _b(), r = yb(), t = zo(), n = er;
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return li = a, li;
}
var ci, Cc;
function st() {
  if (Cc)
    return ci;
  Cc = 1;
  var e = tb(), r = vb(), t = po(), n = fe(), a = mb();
  function i(o) {
    return typeof o == "function" ? o : o == null ? t : typeof o == "object" ? n(o) ? r(o[0], o[1]) : e(o) : a(o);
  }
  return ci = i, ci;
}
var bb = No(), Ab = st(), Rb = 1;
function Eb(e) {
  return Ab(typeof e == "function" ? e : bb(e, Rb));
}
var Cb = Eb, fi, Tc;
function Tb() {
  if (Tc)
    return fi;
  Tc = 1;
  var e = gr, r = Xr(), t = fe(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return fi = a, fi;
}
var di, Sc;
function Sb() {
  if (Sc)
    return di;
  Sc = 1;
  var e = Bo(), r = Tb();
  function t(n, a, i, o, s) {
    var u = -1, l = n.length;
    for (i || (i = r), s || (s = []); ++u < l; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? t(f, a - 1, i, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return di = t, di;
}
var gi, Ic;
function Ib() {
  if (Ic)
    return gi;
  Ic = 1;
  var e = Sb();
  function r(t) {
    var n = t == null ? 0 : t.length;
    return n ? e(t, 1) : [];
  }
  return gi = r, gi;
}
var hi, wc;
function wb() {
  if (wc)
    return hi;
  wc = 1;
  var e = _o(), r = Math.max;
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
  return hi = t, hi;
}
var pi, qc;
function ut() {
  if (qc)
    return pi;
  qc = 1;
  var e = Ib(), r = wb(), t = td();
  function n(a) {
    return t(r(a, void 0, e), a + "");
  }
  return pi = n, pi;
}
var qb = To, Ob = ut(), xb = 256, kb = Ob(function(e, r) {
  return qb(e, xb, void 0, void 0, void 0, r);
}), Pb = kb, Lb = it(), Db = Vr, $b = fe(), Mb = Sr, Bb = qd, Fb = er, Wb = Ho();
function jb(e) {
  return $b(e) ? Lb(e, Fb) : Mb(e) ? [e] : Db(Bb(Wb(e)));
}
var Nb = jb, Kb = {
  ary: J_,
  assign: hd,
  clone: Rm,
  curry: Tm,
  forEach: Ro,
  isArray: fe(),
  isError: jm,
  isFunction: vo,
  isWeakMap: zm,
  iteratee: Cb,
  keys: ko,
  rearg: Pb,
  toInteger: cd,
  toPath: Nb
}, Gb = Bh, Ub = Kb;
function zb(e, r, t) {
  return Gb(Ub, e, r, t);
}
var Te = zb, vi, Oc;
function Hb() {
  if (Oc)
    return vi;
  Oc = 1;
  var e = Ao(), r = ut(), t = bo(), n = Xf(), a = fe(), i = Zf(), o = "Expected a function", s = 8, u = 32, l = 128, f = 256;
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
  return vi = p, vi;
}
var _i, xc;
function Yb() {
  if (xc)
    return _i;
  xc = 1;
  var e = Hb(), r = e();
  return _i = r, _i;
}
var Vb = Te, Pd = Vb("flow", Yb());
Pd.placeholder = be();
var rr = Pd, Jb = Te, Ld = Jb("get", xd());
Ld.placeholder = be();
var tr = Ld, yi, kc;
function Xb() {
  if (kc)
    return yi;
  kc = 1;
  var e = ko, r = hr(), t = Xr(), n = fe(), a = et(), i = Zr(), o = Qr, s = xo(), u = "[object Map]", l = "[object Set]", f = Object.prototype, p = f.hasOwnProperty;
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
  return yi = g, yi;
}
var mi, Pc;
function Dd() {
  return Pc || (Pc = 1, mi = {
    cap: !1,
    curry: !1,
    fixed: !1,
    immutable: !1,
    rearg: !1
  }), mi;
}
var Zb = Te, $d = Zb("isEmpty", Xb(), Dd());
$d.placeholder = be();
var $e = $d, bi, Lc;
function Qb() {
  if (Lc)
    return bi;
  Lc = 1;
  function e(r) {
    var t = r == null ? 0 : r.length;
    return t ? r[t - 1] : void 0;
  }
  return bi = e, bi;
}
var Ai, Dc;
function Md() {
  if (Dc)
    return Ai;
  Dc = 1;
  function e(r, t, n) {
    var a = -1, i = r.length;
    t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = r[a + t];
    return o;
  }
  return Ai = e, Ai;
}
var Ri, $c;
function e1() {
  if ($c)
    return Ri;
  $c = 1;
  var e = ot(), r = Md();
  function t(n, a) {
    return a.length < 2 ? n : e(n, r(a, 0, -1));
  }
  return Ri = t, Ri;
}
var Ei, Mc;
function r1() {
  if (Mc)
    return Ei;
  Mc = 1;
  var e = pr(), r = Qb(), t = e1(), n = er;
  function a(i, o) {
    return o = e(o, i), i = t(i, o), i == null || delete i[n(r(o))];
  }
  return Ei = a, Ei;
}
var Ci, Bc;
function t1() {
  if (Bc)
    return Ci;
  Bc = 1;
  var e = Rd;
  function r(t) {
    return e(t) ? void 0 : t;
  }
  return Ci = r, Ci;
}
var Ti, Fc;
function n1() {
  if (Fc)
    return Ti;
  Fc = 1;
  var e = it(), r = No(), t = r1(), n = pr(), a = Ir(), i = t1(), o = ut(), s = Wo(), u = 1, l = 2, f = 4, p = o(function(g, h) {
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
  return Ti = p, Ti;
}
var a1 = Te, Bd = a1("omit", n1());
Bd.placeholder = be();
var i1 = Bd, Si, Wc;
function o1() {
  if (Wc)
    return Si;
  Wc = 1;
  var e = Io(), r = pr(), t = Jr, n = De, a = er;
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
  return Si = i, Si;
}
var Ii, jc;
function Fd() {
  if (jc)
    return Ii;
  jc = 1;
  var e = ot(), r = o1(), t = pr();
  function n(a, i, o) {
    for (var s = -1, u = i.length, l = {}; ++s < u; ) {
      var f = i[s], p = e(a, f);
      o(p, f) && r(l, t(f, a), p);
    }
    return l;
  }
  return Ii = n, Ii;
}
var wi, Nc;
function s1() {
  if (Nc)
    return wi;
  Nc = 1;
  var e = Fd(), r = kd();
  function t(n, a) {
    return e(n, a, function(i, o) {
      return r(n, o);
    });
  }
  return wi = t, wi;
}
var qi, Kc;
function u1() {
  if (Kc)
    return qi;
  Kc = 1;
  var e = s1(), r = ut(), t = r(function(n, a) {
    return n == null ? {} : e(n, a);
  });
  return qi = t, qi;
}
var l1 = Te, Wd = l1("pick", u1());
Wd.placeholder = be();
var c1 = Wd, Oi, Gc;
function f1() {
  if (Gc)
    return Oi;
  Gc = 1;
  function e(r, t, n, a) {
    var i = -1, o = r == null ? 0 : r.length;
    for (a && o && (n = r[++i]); ++i < o; )
      n = t(n, r[i], i, r);
    return n;
  }
  return Oi = e, Oi;
}
var xi, Uc;
function d1() {
  if (Uc)
    return xi;
  Uc = 1;
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
  return xi = e, xi;
}
var ki, zc;
function g1() {
  if (zc)
    return ki;
  zc = 1;
  var e = d1(), r = e();
  return ki = r, ki;
}
var Pi, Hc;
function h1() {
  if (Hc)
    return Pi;
  Hc = 1;
  var e = g1(), r = wr;
  function t(n, a) {
    return n && e(n, a, r);
  }
  return Pi = t, Pi;
}
var Li, Yc;
function p1() {
  if (Yc)
    return Li;
  Yc = 1;
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
  return Li = r, Li;
}
var Di, Vc;
function v1() {
  if (Vc)
    return Di;
  Vc = 1;
  var e = h1(), r = p1(), t = r(e);
  return Di = t, Di;
}
var $i, Jc;
function _1() {
  if (Jc)
    return $i;
  Jc = 1;
  function e(r, t, n, a, i) {
    return i(r, function(o, s, u) {
      n = a ? (a = !1, o) : t(n, o, s, u);
    }), n;
  }
  return $i = e, $i;
}
var Mi, Xc;
function y1() {
  if (Xc)
    return Mi;
  Xc = 1;
  var e = f1(), r = v1(), t = st(), n = _1(), a = fe();
  function i(o, s, u) {
    var l = a(o) ? e : n, f = arguments.length < 3;
    return l(o, t(s, 4), u, f, r);
  }
  return Mi = i, Mi;
}
var m1 = Te, jd = m1("reduce", y1());
jd.placeholder = be();
var b1 = jd, Bi, Zc;
function A1() {
  if (Zc)
    return Bi;
  Zc = 1;
  var e = Md();
  function r(t, n, a) {
    var i = t.length;
    return a = a === void 0 ? i : a, !n && a >= i ? t : e(t, n, a);
  }
  return Bi = r, Bi;
}
var Fi, Qc;
function R1() {
  if (Qc)
    return Fi;
  Qc = 1;
  var e = Eo();
  function r(t, n) {
    for (var a = t.length; a-- && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return Fi = r, Fi;
}
var Wi, ef;
function E1() {
  if (ef)
    return Wi;
  ef = 1;
  var e = Eo();
  function r(t, n) {
    for (var a = -1, i = t.length; ++a < i && e(n, t[a], 0) > -1; )
      ;
    return a;
  }
  return Wi = r, Wi;
}
var ji, rf;
function C1() {
  if (rf)
    return ji;
  rf = 1;
  function e(r) {
    return r.split("");
  }
  return ji = e, ji;
}
var Ni, tf;
function T1() {
  if (tf)
    return Ni;
  tf = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(l) {
    return s.test(l);
  }
  return Ni = u, Ni;
}
var Ki, nf;
function S1() {
  if (nf)
    return Ki;
  nf = 1;
  var e = "\\ud800-\\udfff", r = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = r + t + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + u + ")", f = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", _ = l + "?", v = "[" + i + "]?", A = "(?:" + h + "(?:" + [f, p, g].join("|") + ")" + v + _ + ")*", b = v + _ + A, y = "(?:" + [f + s + "?", s, p, g, o].join("|") + ")", E = RegExp(u + "(?=" + u + ")|" + y + b, "g");
  function C(k) {
    return k.match(E) || [];
  }
  return Ki = C, Ki;
}
var Gi, af;
function I1() {
  if (af)
    return Gi;
  af = 1;
  var e = C1(), r = T1(), t = S1();
  function n(a) {
    return r(a) ? t(a) : e(a);
  }
  return Gi = n, Gi;
}
var Ui, of;
function w1() {
  if (of)
    return Ui;
  of = 1;
  var e = Od(), r = ld(), t = A1(), n = R1(), a = E1(), i = I1(), o = Ho();
  function s(u, l, f) {
    if (u = o(u), u && (f || l === void 0))
      return r(u);
    if (!u || !(l = e(l)))
      return u;
    var p = i(u), g = i(l), h = a(p, g), _ = n(p, g) + 1;
    return t(p, h, _).join("");
  }
  return Ui = s, Ui;
}
var q1 = Te, Nd = q1("trim", w1());
Nd.placeholder = be();
var Kd = Nd;
const Gd = Ee(Le)`
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
  format_bold: Kg,
  format_italic: Gg,
  format_list_bulleted: Ug,
  ["k-u-align-left"]: zg,
  ["k-u-align-center"]: Hg,
  ["k-u-align-right"]: Yg,
  image: Vg,
  video: Jg,
  link: Xg,
  button_link: Zg,
  quote: Qg
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
  return /* @__PURE__ */ d(Gd, {
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
    }), /* @__PURE__ */ d(Lf, {
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
    children: /* @__PURE__ */ d(eh, {
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
const Ud = ({
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
    children: [/* @__PURE__ */ d(rh, {
      color: ae.background1
    }), /* @__PURE__ */ d(th, {
      children: t.button_loading
    })]
  });
}, x1 = Ee(nh)`
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
`, zd = ({
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
    children: [/* @__PURE__ */ d(no, {
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
    }), /* @__PURE__ */ d(no, {
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
}, so = Cr();
so.tlds(Tr);
const Hd = Ee.div`
  position: relative;
  margin: ${x(30)} 0;

  @media (min-width: ${x(Ge.S.min)}) {
    display: inline-block;
  }
`, Yd = ({
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
  }, [s, o]), /* @__PURE__ */ $(Hd, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ d(Yd, {
      href: i,
      children: t
    }), n && /* @__PURE__ */ d(zd, {
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
}, Vd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "BUTTON_LINK";
  }, r);
}, P1 = {
  strategy: Vd,
  component: k1
}, L1 = {
  strategy: Vd,
  component: (e) => {
    const {
      url: r
    } = e.contentState.getEntity(e.entityKey).getData();
    return /* @__PURE__ */ d(Hd, {
      children: /* @__PURE__ */ d(Yd, {
        href: r,
        children: e.children
      })
    });
  }
}, Yo = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = ce(!1), [{
    editorState: a,
    editorRef: i,
    translations: o
  }, s] = V(H), u = vr(a), l = vt(a), f = () => u ? rs(a, l) : es(a);
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
            const h = so.match(g), _ = a.getCurrentContent();
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
                    if (!so.test(h))
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
Yo.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
Yo.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const D1 = Ee(ao)`
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
  } = mh(), [, , f] = Wr("url"), [, , p] = Wr("file");
  return /* @__PURE__ */ $("form", {
    children: [/* @__PURE__ */ $(D1, {
      className: "k-u-margin-bottom-double",
      children: [/* @__PURE__ */ d(ao.Button, {
        active: a === Ke.FILE,
        onClick: () => {
          i(Ke.FILE), r(void 0);
        },
        children: o.image_upload.button_file
      }), /* @__PURE__ */ d(ao.Button, {
        active: a === Ke.URL,
        onClick: () => {
          i(Ke.URL), r(void 0);
        },
        children: o.image_upload.button_url
      })]
    }), /* @__PURE__ */ $("div", {
      "aria-live": "polite",
      children: [a === Ke.FILE && !e && /* @__PURE__ */ d(ah, {
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
        }), /* @__PURE__ */ d(Lf, {
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
          children: /* @__PURE__ */ d(no, {
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
      }), /* @__PURE__ */ d(qf, {
        children: o.image_upload.description.helper
      }), /* @__PURE__ */ d(J.Actions, {
        className: "k-u-margin-top-triple",
        children: l ? /* @__PURE__ */ d(Ud, {
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
}, Jd = Cr();
Jd.tlds(Tr);
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
          i(Y(mg(n, t, {
            url: s
          }))), o(), e();
        },
        children: () => /* @__PURE__ */ d(Df, {
          children: /* @__PURE__ */ $(J.Content, {
            align: "left",
            children: [/* @__PURE__ */ $("div", {
              children: [/* @__PURE__ */ d(Re, {
                htmlFor: "url",
                children: a.image_upload.url
              }), /* @__PURE__ */ d(Pe, {
                name: "url",
                validate: (s) => {
                  if (!Jd.test(s))
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
          i(Y(mg(n, t, {
            description: s
          }))), o(), e();
        },
        children: () => /* @__PURE__ */ d(Df, {
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
            }), /* @__PURE__ */ d(qf, {
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
    setTimeout(() => i(Y(yg(n, t))), 1);
  }, b = (y) => {
    var w, P;
    y.preventDefault(), y.stopPropagation();
    const E = n.getCurrentContent().getBlockBefore(t), C = n.getCurrentContent().getKeyBefore(t), k = n.getCurrentContent().getKeyAfter(t);
    lo(n, t);
    let q = Ar.createEmpty(C || k);
    q = q.merge({
      anchorOffset: (w = E == null ? void 0 : E.getLength()) != null ? w : 0,
      focusOffset: (P = E == null ? void 0 : E.getLength()) != null ? P : 0
    }), i(Y(F.forceSelection(lo(n, t), q)));
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
          icon: /* @__PURE__ */ d(ih, {}),
          children: $e(h) ? a.image_upload.add_label : a.image_upload.modify_label
        }), !g && /* @__PURE__ */ d(Xe.Button, {
          onClick: () => l(!0),
          icon: /* @__PURE__ */ d(vs, {}),
          children: a.link.title
        }), !!g && /* @__PURE__ */ $(le, {
          children: [/* @__PURE__ */ d(Xe.Separator, {}), /* @__PURE__ */ d(Xe.Button, {
            onClick: (y) => {
              y.preventDefault(), y.stopPropagation(), i(Y(QA(n, r, ["url"])));
            },
            icon: /* @__PURE__ */ d(oh, {}),
            children: a.link.button.delete
          }), /* @__PURE__ */ $(Xe.Link, {
            icon: /* @__PURE__ */ d(vs, {}),
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
          icon: /* @__PURE__ */ d(sh, {}),
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
}, Xd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "IMAGE";
  }, r);
}, N1 = {
  strategy: Xd,
  component: W1
}, K1 = {
  strategy: Xd,
  component: j1
}, Vo = ({
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
              }).getLastCreatedEntityKey(), q = Sf.insertAtomicBlock(o, k, " "), w = F.forceSelection(q, q.getCurrentContent().getSelectionAfter());
              if (vg(w)) {
                const P = _g(w);
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
Vo.propTypes = {
  disabled: m.bool,
  onUpload: m.func,
  errorMessage: m.string
};
Vo.defaultProps = {
  disabled: !1,
  onUpload: () => null
};
const uo = Cr();
uo.tlds(Tr);
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
}), Jo = ({
  onClose: e,
  isOpen: r,
  onChange: t
}) => {
  const [{
    editorState: n,
    editorRef: a,
    translations: i,
    disabled: o
  }, s] = V(H), u = vr(n), l = vt(n), f = () => u ? rs(n, l) : es(n);
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
          const h = uo.match(g), _ = n.getCurrentContent();
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
                    if (!uo.test(_))
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
Jo.propTypes = {
  onChange: m.func,
  onClose: m.func,
  isOpen: m.bool
};
Jo.defaultProps = {
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
    }), n && /* @__PURE__ */ d(zd, {
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
}, Zd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && t.getEntity(a).getType() === "LINK";
  }, r);
}, V1 = {
  strategy: Zd,
  component: Y1
}, J1 = {
  strategy: Zd,
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
}, Xo = ({
  disabled: e,
  onChange: r
}) => {
  const [t, n] = ce(!1), [{
    editorState: a,
    editorRef: i,
    translations: o,
    disabled: s
  }, u] = V(H), l = vr(a), f = vt(a), p = () => l ? rs(a, f) : es(a), g = () => {
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
    }), /* @__PURE__ */ d(Jo, {
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
Xo.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
Xo.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const X1 = "https://api.embed.ly/1/", sf = (e) => {
  if (!e.key)
    throw new Error("You need an API key to call Embedly");
  return fetch(`${X1}oembed?${bh.stringify({
    secure: document.location.protocol === "https:",
    scheme: document.location.protocol.replace(":", ""),
    ...e
  })}`).then((r) => r.json());
}, zi = ({ height: e, width: r }) => (e / r * 100).toPrecision(4), uf = (e) => {
  var r, t;
  if (e.type === "video" || e.type === "rich" && e.provider_name !== "SoundCloud")
    return {
      ratio: zi({
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
        ratio: zi({ height: 6, width: 16 }),
        html: e.html
      };
    case "Ovizer":
      return {
        ratio: zi({
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
      u(Y(yg(s, t)));
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
}, Qd = (e, r, t) => {
  e.findEntityRanges((n) => {
    const a = n.getEntity();
    return a !== null && ["VIDEO", "MEDIA"].includes(t.getEntity(a).getType());
  }, r);
}, eA = {
  strategy: Qd,
  component: Z1
}, rA = {
  strategy: Qd,
  component: Q1
}, Zo = ({
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
            }) => (r(y), A(!1), sf({
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
              } = uf(E), w = tR(n, {
                html: C,
                embedRatio: k,
                ...q && {
                  height: q
                }
              });
              if (vg(w)) {
                const P = _g(w);
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
                  A(!1), sf({
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
                    } = uf(k);
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
                children: E ? /* @__PURE__ */ d(Ud, {
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
Zo.propTypes = {
  embedlyApiKey: m.string.isRequired,
  disabled: m.bool,
  onChange: m.func
};
Zo.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const eg = Cr({
  fuzzyLink: !1
});
eg.tlds(Tr);
const tA = (e, r) => {
  const t = eg.match(e.get("text"));
  if (typeof t < "u" && t !== null)
    for (let n = 0; n < t.length; n += 1)
      r(t[n].index, t[n].lastIndex);
}, nA = (e) => /* @__PURE__ */ d("a", {
  target: "_blank",
  rel: "nofollow noopener",
  className: "k-u-link k-u-link-primary1",
  href: e.decoratedText,
  children: e.children
}), rg = {
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
var Hi, lf;
function oA() {
  if (lf)
    return Hi;
  lf = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return Hi = e, Hi;
}
var Yi, cf;
function sA() {
  if (cf)
    return Yi;
  cf = 1;
  var e = md(), r = Jf(), t = Go(), n = 1 / 0, a = e && 1 / t(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : r;
  return Yi = a, Yi;
}
var Vi, ff;
function uA() {
  if (ff)
    return Vi;
  ff = 1;
  var e = Ed(), r = nd, t = oA(), n = Cd(), a = sA(), i = Go(), o = 200;
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
  return Vi = s, Vi;
}
var Ji, df;
function lA() {
  if (df)
    return Ji;
  df = 1;
  var e = uA();
  function r(t) {
    return t && t.length ? e(t) : [];
  }
  return Ji = r, Ji;
}
var cA = Te, tg = cA("uniq", lA(), Dd());
tg.placeholder = be();
var fA = tg;
const ng = (e) => /(.gif)$/gim.test(e), ag = (e) => /(.svg)$/gim.test(e), dA = ["jpg", "jpeg", "png", "webp"], ig = (e, r) => {
  const t = e.replace(/https?:\/\/([0-9a-z.:]+)\/\S+/gi, "$1");
  return (r == null ? void 0 : r.allowedServers.indexOf(t)) > -1;
}, gA = (e) => encodeURIComponent(encodeURIComponent(e)), gf = (e, { width: r = 0, height: t = 0, filters: n = [], upscale: a = !0 }, i) => {
  if (ag(e) || ng(e) || !ENABLE_RESPONSIVE_IMAGES)
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
}, hf = (e, {
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
  if (ag(e) || ng(e) || !ENABLE_RESPONSIVE_IMAGES || !ig(e, s))
    return { src: e, srcSet: "", sizes: "" };
  if (t.length !== n.length)
    return;
  const u = `format:${o}`, l = ["quality:90", u], p = [...r].sort((v, A) => A - v)[0], g = gf(e, {
    width: p,
    height: Math.floor(p * a),
    filters: l,
    upscale: i
  }, s), h = r.reduce((v, A) => v.concat(`${gf(e, {
    width: A,
    height: Math.floor(A * a),
    filters: l,
    upscale: i
  }, s)} ${A}w`), []).join(", "), _ = t.reduce((v, A, b) => v.concat(`(min-width: ${A}px) calc(${n[b]})`), [`calc(${n[0]})`]).reverse().join(", ");
  return { src: g, srcSet: h, sizes: _ };
}, hA = `100vw - ${uh * 2}px`, pA = `(100vw - ${Of * 2}px) * (7/12)`, vA = `(${Ge.XL.min - Of * 2}px) * (7/12))`, pf = [280, 335, 380, 785, 944];
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
  } = e.contentState.getEntity(e.entityKey).getData(), u = fo(null), l = xf(u), f = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>";
  let p = {
    src: t,
    sizes: null,
    srcSet: null
  };
  ig(t, r) && (p = a.width && a.height ? hf(t, {
    imageSizes: [_A(pf, parseInt(a.width))],
    breakpoints: [0],
    imageSizesInViewport: [parseInt(a.width)],
    upscale: !1,
    resolutions: 1,
    config: r
  }) : hf(t, {
    imageSizes: pf,
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
}, og = {
  strategy: mA,
  component: yA
}, bA = (e) => {
  const {
    html: r
  } = e.contentState.getEntity(e.entityKey).getData(), t = Rr(r, {
    sanitize: !1
  });
  return t ? /* @__PURE__ */ d(lh, {
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
  } = e.contentState.getEntity(e.entityKey).getData(), s = fo(null), u = xf(s), f = /* @__PURE__ */ d("img", {
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
}, sg = {
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
var Xi, vf;
function wA() {
  if (vf)
    return Xi;
  vf = 1;
  var e = Uo();
  function r(t, n) {
    return e(t, n);
  }
  return Xi = r, Xi;
}
var qA = Te, ug = qA("isEqual", wA());
ug.placeholder = be();
var ht = ug, Zi, _f;
function OA() {
  if (_f)
    return Zi;
  _f = 1;
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
  return Zi = r, Zi;
}
var Qi, yf;
function xA() {
  if (yf)
    return Qi;
  yf = 1;
  var e = it(), r = st(), t = Fd(), n = Wo();
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
  return Qi = a, Qi;
}
var eo, mf;
function kA() {
  if (mf)
    return eo;
  mf = 1;
  var e = st(), r = OA(), t = xA();
  function n(a, i) {
    return t(a, r(e(i)));
  }
  return eo = n, eo;
}
var PA = Te, lg = PA("omitBy", kA());
lg.placeholder = be();
var cg = lg;
const LA = tr("children[0]"), bf = rr(tr("children[0].nodeName"), ht("IMG")), DA = rr(tr("parentElement.nodeName"), ht("A")), Af = cg($e), $A = new fr([ct, og, ft, dt, gt]), MA = new fr([ct, sg, ft, dt, gt]), BA = (e) => $f({
  htmlToStyle: (r, t, n) => t.style && t.style["margin-left"] !== "" ? n.add("MARGIN_LEFT") : n,
  htmlToEntity: (r, t, n) => {
    if (r === "a") {
      if (bf(t)) {
        const a = LA(t);
        return n("IMAGE", "IMMUTABLE", {
          src: a.src,
          alt: a.alt,
          width: a.width,
          height: a.height,
          style: Af(a.style),
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
        style: Af(t.style)
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
    if (["img", "iframe", "hr"].includes(r) || bf(t))
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
})(e), FA = tr("children[0]"), WA = rr(tr("children[0].nodeName"), ht("IMG")), jA = rr(tr("parentElement.nodeName"), ht("A")), Rf = cg($e);
new fr([ct, og, ft, dt, gt]);
new fr([ct, sg, ft, dt, gt]);
const NA = (e) => $f({
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
          style: Rf(a.style),
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
        style: Rf(t.style)
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
})(e), KA = go({
  paragraph: {
    element: "p"
  }
}), fg = (e, r = !1) => {
  const t = r ? NA(e) : BA(e);
  return t.set("blockMap", t.getBlockMap().filter((n) => !(!["atomic", "br"].includes(n.getType()) && n.getText() === "")));
}, dg = (e, r = !1) => If(fg(e, r)), gg = (e) => F.createWithContent(fg(e)), Qo = ({
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
      editorState: F.set(gg(e), {
        decorator: r ? $A : MA
      }),
      onChange: () => null,
      blockRenderMap: Tf.merge(KA),
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
Qo.propTypes = {
  useRichTextStyle: m.bool
};
Qo.defaultProps = {
  useRichTextStyle: !0
};
const hg = (e) => {
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
      src: Wf((r = e == null ? void 0 : e.props) == null ? void 0 : r.src)
    }
  };
}, PR = (e) => Er.canUseDom() ? hg(e) ? JSON.parse(e) : dg(e, !0) : {}, GA = (e) => {
  if (!Er.canUseDom())
    return null;
  if (!e || $e(e))
    return F.createEmpty();
  try {
    return F.createWithContent(hg(e) ? to(JSON.parse(e)) : to(dg(e, !0)));
  } catch {
    return F.createEmpty();
  }
}, pg = (e) => F.set(e, {
  decorator: new fr([
    N1,
    eA,
    V1,
    P1,
    rg
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
}, es = (e) => {
  const r = HA(e), t = e.getSelection(), n = t.getStartOffset(), a = t.getEndOffset();
  return r.getText().slice(n, a);
}, vt = (e) => {
  const r = e.getCurrentContent(), t = e.getSelection().getStartKey(), n = e.getSelection().getStartOffset();
  return r.getBlockForKey(t).getEntityAt(n);
}, vr = (e) => {
  const r = e.getCurrentContent(), t = vt(e);
  return t ? r.getEntity(t) : void 0;
}, rs = (e, r) => {
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
}, vg = (e) => {
  const r = e.getCurrentContent(), n = r.getSelectionBefore().getAnchorKey(), a = r.getBlockForKey(n);
  return rr(Kd, $e)(a.getText());
}, JA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey(), a = r.getBlockForKey(n);
  return rr(Kd, $e)(a.getText());
}, XA = (e) => {
  const r = e.getCurrentContent(), n = e.getSelection().getAnchorKey();
  return !r.getBlockBefore(n);
}, ZA = (e) => {
  var u, l, f;
  const r = e.getSelection(), t = r.getAnchorKey(), a = e.getCurrentContent().getBlockForKey(t), i = (u = a == null ? void 0 : a.get("text")) == null ? void 0 : u.length, o = (l = r == null ? void 0 : r.getStartOffset()) != null ? l : 0, s = (f = r == null ? void 0 : r.getEndOffset()) != null ? f : 0;
  return i === s - o;
}, _g = (e) => {
  const r = e.getCurrentContent().getBlockMap().delete(e.getCurrentContent().getSelectionBefore().getFocusKey()), t = e.getCurrentContent().merge({
    blockMap: r
  });
  return F.push(e, t, "remove-range");
}, lo = (e, r) => {
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
}, yg = (e, r, t = 0) => {
  const n = Ar.createEmpty(r).merge({
    focusOffset: t
  });
  return F.forceSelection(e, n);
}, mg = (e, r, t) => {
  const a = e.getCurrentContent().mergeEntityData(r, t), i = e.getSelection(), o = F.push(e, a, "change-block-data");
  return F.forceSelection(o, i);
}, QA = (e, r, t) => {
  const n = e.getCurrentContent().getEntity(r).getData(), a = e.getCurrentContent().replaceEntityData(r, i1(t)(n));
  return F.push(e, a, "apply-entity");
}, ro = (e) => {
  var s, u;
  const t = e.getSelection().getAnchorKey(), n = e.getCurrentContent().getKeyBefore(t), a = e.getCurrentContent().getKeyAfter(t), i = e.getCurrentContent().getBlockBefore(t);
  if (!a && !n) {
    const l = pg(F.createEmpty());
    return F.moveSelectionToEnd(l);
  }
  let o = Ar.createEmpty(n || a);
  return o = o.merge({
    anchorOffset: (s = i == null ? void 0 : i.getLength()) != null ? s : 0,
    focusOffset: (u = i == null ? void 0 : i.getLength()) != null ? u : 0
  }), F.forceSelection(lo(e, t), o);
}, Nr = (e) => {
  var t;
  const r = (t = e == null ? void 0 : e.get("data")) == null ? void 0 : t.src;
  return rR(r) || eR(r);
}, eR = (e) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e), rR = (e) => /<img.*?src="(.*?)"[^\\>]+>/.test(e), Kr = (e) => {
  var t;
  const [, r] = (t = e == null ? void 0 : e.match(/src\s*=\s*"(.+?)"/)) != null ? t : [];
  return r || e;
}, bg = (e) => {
  var r, t;
  return !!((r = e == null ? void 0 : e.get("data")) != null && r.embedlyHtml) || !!((t = e == null ? void 0 : e.get("data")) != null && t.html);
}, Ef = (e, r, t = {}) => {
  const n = new Mg({
    key: Bg(),
    type: "unstyled",
    text: "",
    ...t
  }), a = e.getCurrentContent(), i = a.getBlockMap(), o = yh().withMutations((s) => {
    for (let [u, l] of i.entries())
      s.set(u, l), r === u && s.set(n.getKey(), n);
  });
  return F.forceSelection(F.push(e, wf.createFromBlockArray(Array.from(o.values())).set("selectionBefore", a.getSelectionBefore()).set("selectionAfter", a.getSelectionAfter())), Ar.createEmpty(n.getKey()));
}, tR = (e, r = {}) => {
  const a = e.getCurrentContent().createEntity("VIDEO", "MUTABLE", r).getLastCreatedEntityKey();
  return Sf.insertAtomicBlock(e, a, " ");
}, nR = 8, aR = 38, iR = 40, oR = (e) => (r) => {
  const t = vr(e);
  return ![nR, aR, iR].includes(r.keyCode) && Nr(t) ? "new-text-block" : Fg(r);
}, sR = (e) => (r, t) => {
  const n = vr(t);
  if (r === "new-text-block" && Nr(n))
    return "handled";
  if (r === "backspace" && Nr(n) || bg(n))
    return e(ro(t)), "handled";
  if (r === "backspace" && (n == null ? void 0 : n.getType()) === "IMAGE")
    return e(VA(t)), "handled";
  if (r === "backspace" && ZA(t) && YA(t) || r === "backspace" && XA(t) && JA(t))
    return e(ro(t)), "handled";
  const a = Ue.handleKeyCommand(t, r);
  return a ? (e(a), "handled") : "not-handled";
}, uR = (e) => (r, t) => {
  const n = t.getCurrentContent(), a = t.getSelection().getAnchorKey(), i = n.getBlockForKey(a), o = vr(t);
  return bg(o) || Nr(o) ? (e(Ef(t, a)), "handled") : i.getText() === "" && ["unordered-list-item", "blockquote"].includes(i.getType()) ? (e(UA(t)), "handled") : ["header-two", "header-three"].includes(i.getType()) ? (e(Ef(t, a)), "handled") : "not-handled";
}, Ag = kf`
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
    
    .u-Draft__image {
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
`, Rg = ({ isDisabled: e, useRichTextStyle: r, compact: t }) => (n) => {
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
`, Eg = co.forwardRef(({
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
  const h = fo(null), [{
    editorState: _,
    focus: v,
    disabled: A
  }, b] = V(H), y = (C) => b(Y(C));
  _e(() => {
    p.onChange(a ? If(_.getCurrentContent()) : _.getCurrentContent());
  }, [_]), _e(() => {
    b(Th(g || h));
  }, [g, h]), _e(() => {
    y(pg(GA(i)));
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
    children: [/* @__PURE__ */ d(Ag, {}), /* @__PURE__ */ d(ch, {
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
          b(bs(!0)), t();
        },
        onBlur: () => {
          b(bs(!1)), n();
        },
        blockStyleFn: Rg({
          isDisabled: l,
          useRichTextStyle: u,
          compact: f
        }),
        blockRenderMap: Ff
      })
    })]
  });
});
Eg.propTypes = {
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
Eg.defaultProps = {
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
      i(Y(F.push(n, cr.setBlockData(u, l, go({
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
const ts = (e) => /* @__PURE__ */ d(qr, {
  label: "k-u-align-center",
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
const ns = (e) => /* @__PURE__ */ d(qr, {
  label: "k-u-align-left",
  ...e
});
ns.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ns.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const as = (e) => /* @__PURE__ */ d(qr, {
  label: "k-u-align-right",
  ...e
});
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
is.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
is.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const os = ({
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
os.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
os.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const ss = ({
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
ss.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ss.defaultProps = {
  disabled: !1,
  onChange: () => null
};
const fR = Ee(fh)`
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
}) => e && Pf`
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
`, Cf = (e) => {
  switch (e) {
    case "header-one":
      return /* @__PURE__ */ d(_h, {});
    case "header-two":
      return /* @__PURE__ */ d(vh, {});
    case "header-three":
      return /* @__PURE__ */ d(ph, {});
    case "header-four":
      return /* @__PURE__ */ d(hh, {});
    case "unstyled":
    default:
      return /* @__PURE__ */ d(gh, {});
  }
}, us = ({
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
    }) => /* @__PURE__ */ $(Gd, {
      className: "Editor__toolbar__tagListToggle__button",
      tabIndex: "-1",
      disabled: a || e,
      fit: "icon",
      tag: "span",
      active: f,
      children: [Cf(u), /* @__PURE__ */ d(dh, {
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
        const p = Cf(f);
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
us.propTypes = {
  tags: m.array,
  disabled: m.bool,
  onChange: m.func
};
us.defaultProps = {
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
}) => e && Pf`
      background-color: ${ae.background1};
    `}
`, ls = ({
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
ls.propTypes = {
  disabled: m.bool,
  onChange: m.func
};
ls.defaultProps = {
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
pe.Image = Vo;
pe.TagList = us;
pe.Bold = is;
pe.Italic = os;
pe.Quote = ss;
pe.Left = ns;
pe.Right = as;
pe.Center = ts;
pe.UnorderedList = ls;
pe.Link = Xo;
pe.Button = Yo;
pe.Video = Zo;
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
var gR = Te, Cg = gR("memoize", wd());
Cg.placeholder = be();
var hR = Cg;
const pR = hR((e) => {
  if (!Er.canUseDom())
    return null;
  if (!e)
    return F.createEmpty();
  try {
    return F.createWithContent(to(JSON.parse(e)), new fr([K1, rA, J1, L1, rg]));
  } catch {
    const t = Wg(`<p>${e}</p>`), n = wf.createFromBlockArray(t);
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
}, Tg = ({
  text: e,
  useRichTextStyle: r,
  perfEnabled: t,
  isDisabled: n,
  compact: a,
  configResponsiveImageHandler: i
}) => Er.canUseDom() ? vR(e) ? /* @__PURE__ */ $(io, {
  configResponsiveImageHandler: i,
  children: [/* @__PURE__ */ d(Ag, {}), /* @__PURE__ */ d("section", {
    className: qe("u-Editor__root", {
      "u-Editor__compact": a
    }),
    children: /* @__PURE__ */ d(Gr, {
      onChange: () => null,
      editorState: pR(e),
      blockStyleFn: Rg({
        isDisabled: n,
        useRichTextStyle: r,
        compact: a
      }),
      blockRenderMap: Ff,
      readOnly: !0
    })
  })]
}) : /* @__PURE__ */ d(io, {
  configResponsiveImageHandler: i,
  children: /* @__PURE__ */ d(Qo, {
    html: e == null ? void 0 : e.replaceAll(`
`, "<br/>"),
    perfEnabled: t,
    useRichTextStyle: r
  })
}) : _R(e);
Tg.propTypes = {
  text: m.oneOfType([m.object, m.string]).isRequired,
  useRichTextStyle: m.bool,
  isDisabled: m.bool,
  perfEnabled: m.bool,
  compact: m.bool
};
Tg.defaultProps = {
  useRichTextStyle: !1,
  isDisabled: !1,
  perfEnabled: !1,
  compact: !1
};
const yR = kf`
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
`, Sg = ({
  onFocus: e,
  onBlur: r,
  onChange: t,
  initialValue: n,
  placeholder: a
}) => {
  const [i, o] = ce(F.createEmpty());
  return _e(() => {
    o(gg(n));
  }, [n]), /* @__PURE__ */ $("div", {
    className: "DraftEditor-wrapper",
    children: [/* @__PURE__ */ d(yR, {}), /* @__PURE__ */ d(Gr, {
      editorState: i,
      onChange: (s) => {
        o(s), t(Ah(s.getCurrentContent(), {
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
Sg.propTypes = {
  initialValue: m.string,
  placeholder: m.string,
  onFocus: m.func,
  onBlur: m.func,
  onChange: m.func
};
Sg.defaultProps = {
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
}, Ig = ({
  onInit: e,
  translations: r,
  configResponsiveImageHandler: t,
  children: n
}) => (_e(() => {
  e();
}, []), /* @__PURE__ */ d(io, {
  translations: {
    ...mR,
    ...r
  },
  configResponsiveImageHandler: t,
  children: n
})), wg = {
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
Ig.propTypes = wg.props;
Ig.defaultProps = wg.defaultProps;
export {
  pe as Controls,
  Tg as Displayer,
  Ig as Editor,
  Eg as Playground,
  Sg as Title,
  FR as convertToHTML,
  MR as convertToRaw,
  wg as editorPropTypes,
  PR as getJSONContent,
  LR as isEditorEmpty
};
