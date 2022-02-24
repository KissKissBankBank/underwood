var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import require$$0, { createContext, useReducer, useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { EditorState, RichUtils, Modifier, AtomicBlockUtils, CompositeDecorator, convertToRaw, Editor as Editor$1, DefaultDraftBlockRenderMap, ContentState, SelectionState, convertFromRaw, ContentBlock, genKey, convertFromHTML as convertFromHTML$1 } from "draft-js";
export { convertToRaw } from "draft-js";
import { Button as Button$1, pxToRem, BoldIcon, ItalicIcon, ListIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon, ImageIcon, VideoIcon, LinkIcon, EditorButtonIcon, BlockquoteIcon, Field, TextInputWithButton, KissKissLoadingAnimation, COLORS, VisuallyHidden, ScreenConfig, ArrowContainer, Text, ModalNext, Title as Title$1, ResponsiveIframeContainer, parseHtml, CONTAINER_PADDING, CONTAINER_PADDING_THIN, useLazyObserver, LazyLoader, domElementHelper, TYPOGRAPHY, Paragraph, Details, ArrowIcon, ParagraphIcon, Title4Icon, Title3Icon, Title2Icon, Title1Icon } from "@kisskissbankbank/kitten";
import classNames from "classnames";
import styled, { createGlobalStyle, css } from "styled-components";
import { Map as Map$4, OrderedMap } from "immutable";
import { useField, ErrorMessage, Formik, useFormikContext } from "formik";
import linkifyIt from "linkify-it";
import tlds from "tlds";
import * as Yup from "yup";
import qs from "qs";
import { convertFromHTML } from "draft-convert";
export { convertToHTML } from "draft-convert";
import { stateToHTML } from "draft-js-export-html";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$g = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$g.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const initialState = {
  editorState: EditorState.createEmpty(),
  focus: false,
  editorRef: null,
  disabled: false
};
const EditorContext = createContext(initialState);
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
    case "focus":
      return __spreadValues(__spreadValues({}, state), action);
    case "updateState":
      return __spreadValues(__spreadValues({}, state), action.state);
  }
};
const EditorProvider = ({
  translations,
  configResponsiveImageHandler,
  children
}) => {
  return /* @__PURE__ */ jsx(EditorContext.Provider, {
    value: useReducer(reducer, __spreadProps(__spreadValues({}, initialState), {
      translations,
      configResponsiveImageHandler
    })),
    children
  });
};
const updateState = (state) => ({
  type: "updateState",
  state
});
const updateEditor = (editorState) => ({
  type: "update",
  editorState
});
const updateEditorRef = (editorRef) => ({
  type: "update",
  editorRef
});
const setFocus = (focus) => ({
  type: "focus",
  focus
});
var _mapping = {};
(function(exports) {
  exports.aliasToReal = {
    "each": "forEach",
    "eachRight": "forEachRight",
    "entries": "toPairs",
    "entriesIn": "toPairsIn",
    "extend": "assignIn",
    "extendAll": "assignInAll",
    "extendAllWith": "assignInAllWith",
    "extendWith": "assignInWith",
    "first": "head",
    "conforms": "conformsTo",
    "matches": "isMatch",
    "property": "get",
    "__": "placeholder",
    "F": "stubFalse",
    "T": "stubTrue",
    "all": "every",
    "allPass": "overEvery",
    "always": "constant",
    "any": "some",
    "anyPass": "overSome",
    "apply": "spread",
    "assoc": "set",
    "assocPath": "set",
    "complement": "negate",
    "compose": "flowRight",
    "contains": "includes",
    "dissoc": "unset",
    "dissocPath": "unset",
    "dropLast": "dropRight",
    "dropLastWhile": "dropRightWhile",
    "equals": "isEqual",
    "identical": "eq",
    "indexBy": "keyBy",
    "init": "initial",
    "invertObj": "invert",
    "juxt": "over",
    "omitAll": "omit",
    "nAry": "ary",
    "path": "get",
    "pathEq": "matchesProperty",
    "pathOr": "getOr",
    "paths": "at",
    "pickAll": "pick",
    "pipe": "flow",
    "pluck": "map",
    "prop": "get",
    "propEq": "matchesProperty",
    "propOr": "getOr",
    "props": "at",
    "symmetricDifference": "xor",
    "symmetricDifferenceBy": "xorBy",
    "symmetricDifferenceWith": "xorWith",
    "takeLast": "takeRight",
    "takeLastWhile": "takeRightWhile",
    "unapply": "rest",
    "unnest": "flatten",
    "useWith": "overArgs",
    "where": "conformsTo",
    "whereEq": "isMatch",
    "zipObj": "zipObject"
  };
  exports.aryMethod = {
    "1": [
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
    "2": [
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
    "3": [
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
    "4": [
      "fill",
      "setWith",
      "updateWith"
    ]
  };
  exports.aryRearg = {
    "2": [1, 0],
    "3": [2, 0, 1],
    "4": [3, 2, 0, 1]
  };
  exports.iterateeAry = {
    "dropRightWhile": 1,
    "dropWhile": 1,
    "every": 1,
    "filter": 1,
    "find": 1,
    "findFrom": 1,
    "findIndex": 1,
    "findIndexFrom": 1,
    "findKey": 1,
    "findLast": 1,
    "findLastFrom": 1,
    "findLastIndex": 1,
    "findLastIndexFrom": 1,
    "findLastKey": 1,
    "flatMap": 1,
    "flatMapDeep": 1,
    "flatMapDepth": 1,
    "forEach": 1,
    "forEachRight": 1,
    "forIn": 1,
    "forInRight": 1,
    "forOwn": 1,
    "forOwnRight": 1,
    "map": 1,
    "mapKeys": 1,
    "mapValues": 1,
    "partition": 1,
    "reduce": 2,
    "reduceRight": 2,
    "reject": 1,
    "remove": 1,
    "some": 1,
    "takeRightWhile": 1,
    "takeWhile": 1,
    "times": 1,
    "transform": 2
  };
  exports.iterateeRearg = {
    "mapKeys": [1],
    "reduceRight": [1, 0]
  };
  exports.methodRearg = {
    "assignInAllWith": [1, 0],
    "assignInWith": [1, 2, 0],
    "assignAllWith": [1, 0],
    "assignWith": [1, 2, 0],
    "differenceBy": [1, 2, 0],
    "differenceWith": [1, 2, 0],
    "getOr": [2, 1, 0],
    "intersectionBy": [1, 2, 0],
    "intersectionWith": [1, 2, 0],
    "isEqualWith": [1, 2, 0],
    "isMatchWith": [2, 1, 0],
    "mergeAllWith": [1, 0],
    "mergeWith": [1, 2, 0],
    "padChars": [2, 1, 0],
    "padCharsEnd": [2, 1, 0],
    "padCharsStart": [2, 1, 0],
    "pullAllBy": [2, 1, 0],
    "pullAllWith": [2, 1, 0],
    "rangeStep": [1, 2, 0],
    "rangeStepRight": [1, 2, 0],
    "setWith": [3, 1, 2, 0],
    "sortedIndexBy": [2, 1, 0],
    "sortedLastIndexBy": [2, 1, 0],
    "unionBy": [1, 2, 0],
    "unionWith": [1, 2, 0],
    "updateWith": [3, 1, 2, 0],
    "xorBy": [1, 2, 0],
    "xorWith": [1, 2, 0],
    "zipWith": [1, 2, 0]
  };
  exports.methodSpread = {
    "assignAll": { "start": 0 },
    "assignAllWith": { "start": 0 },
    "assignInAll": { "start": 0 },
    "assignInAllWith": { "start": 0 },
    "defaultsAll": { "start": 0 },
    "defaultsDeepAll": { "start": 0 },
    "invokeArgs": { "start": 2 },
    "invokeArgsMap": { "start": 2 },
    "mergeAll": { "start": 0 },
    "mergeAllWith": { "start": 0 },
    "partial": { "start": 1 },
    "partialRight": { "start": 1 },
    "without": { "start": 1 },
    "zipAll": { "start": 0 }
  };
  exports.mutate = {
    "array": {
      "fill": true,
      "pull": true,
      "pullAll": true,
      "pullAllBy": true,
      "pullAllWith": true,
      "pullAt": true,
      "remove": true,
      "reverse": true
    },
    "object": {
      "assign": true,
      "assignAll": true,
      "assignAllWith": true,
      "assignIn": true,
      "assignInAll": true,
      "assignInAllWith": true,
      "assignInWith": true,
      "assignWith": true,
      "defaults": true,
      "defaultsAll": true,
      "defaultsDeep": true,
      "defaultsDeepAll": true,
      "merge": true,
      "mergeAll": true,
      "mergeAllWith": true,
      "mergeWith": true
    },
    "set": {
      "set": true,
      "setWith": true,
      "unset": true,
      "update": true,
      "updateWith": true
    }
  };
  exports.realToAlias = function() {
    var hasOwnProperty2 = Object.prototype.hasOwnProperty, object = exports.aliasToReal, result = {};
    for (var key in object) {
      var value = object[key];
      if (hasOwnProperty2.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }
    return result;
  }();
  exports.remap = {
    "assignAll": "assign",
    "assignAllWith": "assignWith",
    "assignInAll": "assignIn",
    "assignInAllWith": "assignInWith",
    "curryN": "curry",
    "curryRightN": "curryRight",
    "defaultsAll": "defaults",
    "defaultsDeepAll": "defaultsDeep",
    "findFrom": "find",
    "findIndexFrom": "findIndex",
    "findLastFrom": "findLast",
    "findLastIndexFrom": "findLastIndex",
    "getOr": "get",
    "includesFrom": "includes",
    "indexOfFrom": "indexOf",
    "invokeArgs": "invoke",
    "invokeArgsMap": "invokeMap",
    "lastIndexOfFrom": "lastIndexOf",
    "mergeAll": "merge",
    "mergeAllWith": "mergeWith",
    "padChars": "pad",
    "padCharsEnd": "padEnd",
    "padCharsStart": "padStart",
    "propertyOf": "get",
    "rangeStep": "range",
    "rangeStepRight": "rangeRight",
    "restFrom": "rest",
    "spreadFrom": "spread",
    "trimChars": "trim",
    "trimCharsEnd": "trimEnd",
    "trimCharsStart": "trimStart",
    "zipAll": "zip"
  };
  exports.skipFixed = {
    "castArray": true,
    "flow": true,
    "flowRight": true,
    "iteratee": true,
    "mixin": true,
    "rearg": true,
    "runInContext": true
  };
  exports.skipRearg = {
    "add": true,
    "assign": true,
    "assignIn": true,
    "bind": true,
    "bindKey": true,
    "concat": true,
    "difference": true,
    "divide": true,
    "eq": true,
    "gt": true,
    "gte": true,
    "isEqual": true,
    "lt": true,
    "lte": true,
    "matchesProperty": true,
    "merge": true,
    "multiply": true,
    "overArgs": true,
    "partial": true,
    "partialRight": true,
    "propertyOf": true,
    "random": true,
    "range": true,
    "rangeRight": true,
    "subtract": true,
    "zip": true,
    "zipObject": true,
    "zipObjectDeep": true
  };
})(_mapping);
var placeholder = {};
var mapping = _mapping, fallbackHolder = placeholder;
var push = Array.prototype.push;
function baseArity(func2, n2) {
  return n2 == 2 ? function(a, b) {
    return func2.apply(void 0, arguments);
  } : function(a) {
    return func2.apply(void 0, arguments);
  };
}
function baseAry(func2, n2) {
  return n2 == 2 ? function(a, b) {
    return func2(a, b);
  } : function(a) {
    return func2(a);
  };
}
function cloneArray(array) {
  var length = array ? array.length : 0, result = Array(length);
  while (length--) {
    result[length] = array[length];
  }
  return result;
}
function createCloner(func2) {
  return function(object) {
    return func2({}, object);
  };
}
function flatSpread(func2, start) {
  return function() {
    var length = arguments.length, lastIndex = length - 1, args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start], otherArgs = args.slice(0, start);
    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func2.apply(this, otherArgs);
  };
}
function wrapImmutable(func2, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(void 0, args);
    func2.apply(void 0, args);
    return result;
  };
}
function baseConvert$1(util2, name, func2, options) {
  var isLib = typeof name == "function", isObj = name === Object(name);
  if (isObj) {
    options = func2;
    func2 = name;
    name = void 0;
  }
  if (func2 == null) {
    throw new TypeError();
  }
  options || (options = {});
  var config = {
    "cap": "cap" in options ? options.cap : true,
    "curry": "curry" in options ? options.curry : true,
    "fixed": "fixed" in options ? options.fixed : true,
    "immutable": "immutable" in options ? options.immutable : true,
    "rearg": "rearg" in options ? options.rearg : true
  };
  var defaultHolder = isLib ? func2 : fallbackHolder, forceCurry = "curry" in options && options.curry, forceFixed = "fixed" in options && options.fixed, forceRearg = "rearg" in options && options.rearg, pristine = isLib ? func2.runInContext() : void 0;
  var helpers = isLib ? func2 : {
    "ary": util2.ary,
    "assign": util2.assign,
    "clone": util2.clone,
    "curry": util2.curry,
    "forEach": util2.forEach,
    "isArray": util2.isArray,
    "isError": util2.isError,
    "isFunction": util2.isFunction,
    "isWeakMap": util2.isWeakMap,
    "iteratee": util2.iteratee,
    "keys": util2.keys,
    "rearg": util2.rearg,
    "toInteger": util2.toInteger,
    "toPath": util2.toPath
  };
  var ary2 = helpers.ary, assign = helpers.assign, clone2 = helpers.clone, curry2 = helpers.curry, each = helpers.forEach, isArray2 = helpers.isArray, isError2 = helpers.isError, isFunction2 = helpers.isFunction, isWeakMap2 = helpers.isWeakMap, keys2 = helpers.keys, rearg2 = helpers.rearg, toInteger2 = helpers.toInteger, toPath2 = helpers.toPath;
  var aryMethodKeys = keys2(mapping.aryMethod);
  var wrappers = {
    "castArray": function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray2(value) ? castArray(cloneArray(value)) : castArray.apply(void 0, arguments);
      };
    },
    "iteratee": function(iteratee2) {
      return function() {
        var func3 = arguments[0], arity = arguments[1], result = iteratee2(func3, arity), length = result.length;
        if (config.cap && typeof arity == "number") {
          arity = arity > 2 ? arity - 2 : 1;
          return length && length <= arity ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    "mixin": function(mixin) {
      return function(source) {
        var func3 = this;
        if (!isFunction2(func3)) {
          return mixin(func3, Object(source));
        }
        var pairs2 = [];
        each(keys2(source), function(key) {
          if (isFunction2(source[key])) {
            pairs2.push([key, func3.prototype[key]]);
          }
        });
        mixin(func3, Object(source));
        each(pairs2, function(pair) {
          var value = pair[1];
          if (isFunction2(value)) {
            func3.prototype[pair[0]] = value;
          } else {
            delete func3.prototype[pair[0]];
          }
        });
        return func3;
      };
    },
    "nthArg": function(nthArg) {
      return function(n2) {
        var arity = n2 < 0 ? 1 : toInteger2(n2) + 1;
        return curry2(nthArg(n2), arity);
      };
    },
    "rearg": function(rearg3) {
      return function(func3, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry2(rearg3(func3, indexes), arity);
      };
    },
    "runInContext": function(runInContext) {
      return function(context) {
        return baseConvert$1(util2, runInContext(context), options);
      };
    }
  };
  function castCap(name2, func3) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name2];
      if (indexes) {
        return iterateeRearg(func3, indexes);
      }
      var n2 = !isLib && mapping.iterateeAry[name2];
      if (n2) {
        return iterateeAry(func3, n2);
      }
    }
    return func3;
  }
  function castCurry(name2, func3, n2) {
    return forceCurry || config.curry && n2 > 1 ? curry2(func3, n2) : func3;
  }
  function castFixed(name2, func3, n2) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name2])) {
      var data = mapping.methodSpread[name2], start = data && data.start;
      return start === void 0 ? ary2(func3, n2) : flatSpread(func3, start);
    }
    return func3;
  }
  function castRearg(name2, func3, n2) {
    return config.rearg && n2 > 1 && (forceRearg || !mapping.skipRearg[name2]) ? rearg2(func3, mapping.methodRearg[name2] || mapping.aryRearg[n2]) : func3;
  }
  function cloneByPath(object, path) {
    path = toPath2(path);
    var index = -1, length = path.length, lastIndex = length - 1, result = clone2(Object(object)), nested = result;
    while (nested != null && ++index < length) {
      var key = path[index], value = nested[key];
      if (value != null && !(isFunction2(value) || isError2(value) || isWeakMap2(value))) {
        nested[key] = clone2(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }
  function convertLib(options2) {
    return _.runInContext.convert(options2)(void 0);
  }
  function createConverter(name2, func3) {
    var realName = mapping.aliasToReal[name2] || name2, methodName = mapping.remap[realName] || realName, oldOptions = options;
    return function(options2) {
      var newUtil = isLib ? pristine : helpers, newFunc = isLib ? pristine[methodName] : func3, newOptions = assign(assign({}, oldOptions), options2);
      return baseConvert$1(newUtil, realName, newFunc, newOptions);
    };
  }
  function iterateeAry(func3, n2) {
    return overArg2(func3, function(func4) {
      return typeof func4 == "function" ? baseAry(func4, n2) : func4;
    });
  }
  function iterateeRearg(func3, indexes) {
    return overArg2(func3, function(func4) {
      var n2 = indexes.length;
      return baseArity(rearg2(baseAry(func4, n2), indexes), n2);
    });
  }
  function overArg2(func3, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func3();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : length - 1;
      args[index] = transform(args[index]);
      return func3.apply(void 0, args);
    };
  }
  function wrap(name2, func3, placeholder2) {
    var result, realName = mapping.aliasToReal[name2] || name2, wrapped = func3, wrapper = wrappers[realName];
    if (wrapper) {
      wrapped = wrapper(func3);
    } else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func3, cloneArray);
      } else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func3, createCloner(func3));
      } else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func3, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName], afterRearg = data && data.afterRearg;
          result = afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });
    result || (result = wrapped);
    if (result == func3) {
      result = forceCurry ? curry2(result, 1) : function() {
        return func3.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func3);
    result.placeholder = func3.placeholder = placeholder2;
    return result;
  }
  if (!isObj) {
    return wrap(name, func2, defaultHolder);
  }
  var _ = func2;
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func3 = _[mapping.remap[key] || key];
      if (func3) {
        pairs.push([key, wrap(key, func3, _)]);
      }
    });
  });
  each(keys2(_), function(key) {
    var func3 = _[key];
    if (typeof func3 == "function") {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func3.convert = createConverter(key, func3);
      pairs.push([key, func3]);
    }
  });
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });
  _.convert = convertLib;
  _.placeholder = _;
  each(keys2(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });
  return _;
}
var _baseConvert = baseConvert$1;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$c = freeGlobal || freeSelf || Function("return this")();
var _root = root$c;
var root$b = _root;
var Symbol$7 = root$b.Symbol;
var _Symbol = Symbol$7;
var Symbol$6 = _Symbol;
var objectProto$i = Object.prototype;
var hasOwnProperty$f = objectProto$i.hasOwnProperty;
var nativeObjectToString$1 = objectProto$i.toString;
var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$f.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$h = Object.prototype;
var nativeObjectToString = objectProto$h.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$5 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$7(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$7;
function isObject$9(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$9;
var baseGetTag$6 = _baseGetTag, isObject$8 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$8(value)) {
    return false;
  }
  var tag = baseGetTag$6(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$a = _root;
var coreJsData$1 = root$a["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func2) {
  return !!maskSrcKey && maskSrcKey in func2;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func2) {
  if (func2 != null) {
    try {
      return funcToString$2.call(func2);
    } catch (e) {
    }
    try {
      return func2 + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$7 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$g = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$e = objectProto$g.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$e).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$7(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$9 = _root;
var WeakMap$2 = getNative$6(root$9, "WeakMap");
var _WeakMap = WeakMap$2;
var WeakMap$1 = _WeakMap;
var metaMap$2 = WeakMap$1 && new WeakMap$1();
var _metaMap = metaMap$2;
var identity$2 = identity_1, metaMap$1 = _metaMap;
var baseSetData$2 = !metaMap$1 ? identity$2 : function(func2, data) {
  metaMap$1.set(func2, data);
  return func2;
};
var _baseSetData = baseSetData$2;
var isObject$6 = isObject_1;
var objectCreate = Object.create;
var baseCreate$4 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$4;
var baseCreate$3 = _baseCreate, isObject$5 = isObject_1;
function createCtor$4(Ctor) {
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate$3(Ctor.prototype), result = Ctor.apply(thisBinding, args);
    return isObject$5(result) ? result : thisBinding;
  };
}
var _createCtor = createCtor$4;
var createCtor$3 = _createCtor, root$8 = _root;
var WRAP_BIND_FLAG$6 = 1;
function createBind$1(func2, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG$6, Ctor = createCtor$3(func2);
  function wrapper() {
    var fn = this && this !== root$8 && this instanceof wrapper ? Ctor : func2;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
var _createBind = createBind$1;
function apply$3(func2, thisArg, args) {
  switch (args.length) {
    case 0:
      return func2.call(thisArg);
    case 1:
      return func2.call(thisArg, args[0]);
    case 2:
      return func2.call(thisArg, args[0], args[1]);
    case 3:
      return func2.call(thisArg, args[0], args[1], args[2]);
  }
  return func2.apply(thisArg, args);
}
var _apply = apply$3;
var nativeMax$3 = Math.max;
function composeArgs$2(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax$3(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}
var _composeArgs = composeArgs$2;
var nativeMax$2 = Math.max;
function composeArgsRight$2(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax$2(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}
var _composeArgsRight = composeArgsRight$2;
function countHolders$1(array, placeholder2) {
  var length = array.length, result = 0;
  while (length--) {
    if (array[length] === placeholder2) {
      ++result;
    }
  }
  return result;
}
var _countHolders = countHolders$1;
function baseLodash$3() {
}
var _baseLodash = baseLodash$3;
var baseCreate$2 = _baseCreate, baseLodash$2 = _baseLodash;
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper$3(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper$3.prototype = baseCreate$2(baseLodash$2.prototype);
LazyWrapper$3.prototype.constructor = LazyWrapper$3;
var _LazyWrapper = LazyWrapper$3;
function noop$2() {
}
var noop_1 = noop$2;
var metaMap = _metaMap, noop$1 = noop_1;
var getData$3 = !metaMap ? noop$1 : function(func2) {
  return metaMap.get(func2);
};
var _getData = getData$3;
var realNames$1 = {};
var _realNames = realNames$1;
var realNames = _realNames;
var objectProto$f = Object.prototype;
var hasOwnProperty$d = objectProto$f.hasOwnProperty;
function getFuncName$2(func2) {
  var result = func2.name + "", array = realNames[result], length = hasOwnProperty$d.call(realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func2) {
      return data.name;
    }
  }
  return result;
}
var _getFuncName = getFuncName$2;
var baseCreate$1 = _baseCreate, baseLodash$1 = _baseLodash;
function LodashWrapper$3(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper$3.prototype = baseCreate$1(baseLodash$1.prototype);
LodashWrapper$3.prototype.constructor = LodashWrapper$3;
var _LodashWrapper = LodashWrapper$3;
var isArray$f = Array.isArray;
var isArray_1 = isArray$f;
function isObjectLike$b(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$b;
function copyArray$4(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$4;
var LazyWrapper$2 = _LazyWrapper, LodashWrapper$2 = _LodashWrapper, copyArray$3 = _copyArray;
function wrapperClone$1(wrapper) {
  if (wrapper instanceof LazyWrapper$2) {
    return wrapper.clone();
  }
  var result = new LodashWrapper$2(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray$3(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var _wrapperClone = wrapperClone$1;
var LazyWrapper$1 = _LazyWrapper, LodashWrapper$1 = _LodashWrapper, baseLodash = _baseLodash, isArray$e = isArray_1, isObjectLike$a = isObjectLike_1, wrapperClone = _wrapperClone;
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
function lodash$1(value) {
  if (isObjectLike$a(value) && !isArray$e(value) && !(value instanceof LazyWrapper$1)) {
    if (value instanceof LodashWrapper$1) {
      return value;
    }
    if (hasOwnProperty$c.call(value, "__wrapped__")) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper$1(value);
}
lodash$1.prototype = baseLodash.prototype;
lodash$1.prototype.constructor = lodash$1;
var wrapperLodash = lodash$1;
var LazyWrapper = _LazyWrapper, getData$2 = _getData, getFuncName$1 = _getFuncName, lodash = wrapperLodash;
function isLaziable$2(func2) {
  var funcName = getFuncName$1(func2), other = lodash[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func2 === other) {
    return true;
  }
  var data = getData$2(other);
  return !!data && func2 === data[0];
}
var _isLaziable = isLaziable$2;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$2(func2) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func2.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$2;
var baseSetData$1 = _baseSetData, shortOut$1 = _shortOut;
var setData$2 = shortOut$1(baseSetData$1);
var _setData = setData$2;
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
function getWrapDetails$1(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}
var _getWrapDetails = getWrapDetails$1;
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function insertWrapDetails$1(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
  details = details.join(length > 2 ? ", " : " ");
  return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
var _insertWrapDetails = insertWrapDetails$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var getNative$5 = _getNative;
var defineProperty$2 = function() {
  try {
    var func2 = getNative$5(Object, "defineProperty");
    func2({}, "", {});
    return func2;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var constant = constant_1, defineProperty$1 = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty$1 ? identity$1 : function(func2, string) {
  return defineProperty$1(func2, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$2 = shortOut(baseSetToString);
var _setToString = setToString$2;
function arrayEach$2(array, iteratee2) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee2(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$2;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$3(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$3;
var baseIndexOf$2 = _baseIndexOf;
function arrayIncludes$2(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf$2(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$2;
var arrayEach$1 = _arrayEach, arrayIncludes$1 = _arrayIncludes;
var WRAP_BIND_FLAG$5 = 1, WRAP_BIND_KEY_FLAG$4 = 2, WRAP_CURRY_FLAG$6 = 8, WRAP_CURRY_RIGHT_FLAG$2 = 16, WRAP_PARTIAL_FLAG$3 = 32, WRAP_PARTIAL_RIGHT_FLAG$2 = 64, WRAP_ARY_FLAG$4 = 128, WRAP_REARG_FLAG$3 = 256, WRAP_FLIP_FLAG$1 = 512;
var wrapFlags = [
  ["ary", WRAP_ARY_FLAG$4],
  ["bind", WRAP_BIND_FLAG$5],
  ["bindKey", WRAP_BIND_KEY_FLAG$4],
  ["curry", WRAP_CURRY_FLAG$6],
  ["curryRight", WRAP_CURRY_RIGHT_FLAG$2],
  ["flip", WRAP_FLIP_FLAG$1],
  ["partial", WRAP_PARTIAL_FLAG$3],
  ["partialRight", WRAP_PARTIAL_RIGHT_FLAG$2],
  ["rearg", WRAP_REARG_FLAG$3]
];
function updateWrapDetails$1(details, bitmask) {
  arrayEach$1(wrapFlags, function(pair) {
    var value = "_." + pair[0];
    if (bitmask & pair[1] && !arrayIncludes$1(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}
var _updateWrapDetails = updateWrapDetails$1;
var getWrapDetails = _getWrapDetails, insertWrapDetails = _insertWrapDetails, setToString$1 = _setToString, updateWrapDetails = _updateWrapDetails;
function setWrapToString$2(wrapper, reference, bitmask) {
  var source = reference + "";
  return setToString$1(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}
var _setWrapToString = setWrapToString$2;
var isLaziable$1 = _isLaziable, setData$1 = _setData, setWrapToString$1 = _setWrapToString;
var WRAP_BIND_FLAG$4 = 1, WRAP_BIND_KEY_FLAG$3 = 2, WRAP_CURRY_BOUND_FLAG$1 = 4, WRAP_CURRY_FLAG$5 = 8, WRAP_PARTIAL_FLAG$2 = 32, WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
function createRecurry$2(func2, bitmask, wrapFunc, placeholder2, thisArg, partials, holders, argPos, ary2, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$5, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG$2 : WRAP_PARTIAL_RIGHT_FLAG$1;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$2);
  if (!(bitmask & WRAP_CURRY_BOUND_FLAG$1)) {
    bitmask &= ~(WRAP_BIND_FLAG$4 | WRAP_BIND_KEY_FLAG$3);
  }
  var newData = [
    func2,
    bitmask,
    thisArg,
    newPartials,
    newHolders,
    newPartialsRight,
    newHoldersRight,
    argPos,
    ary2,
    arity
  ];
  var result = wrapFunc.apply(void 0, newData);
  if (isLaziable$1(func2)) {
    setData$1(result, newData);
  }
  result.placeholder = placeholder2;
  return setWrapToString$1(result, func2, bitmask);
}
var _createRecurry = createRecurry$2;
function getHolder$2(func2) {
  var object = func2;
  return object.placeholder;
}
var _getHolder = getHolder$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$4(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$4;
var copyArray$2 = _copyArray, isIndex$3 = _isIndex;
var nativeMin$1 = Math.min;
function reorder$1(array, indexes) {
  var arrLength = array.length, length = nativeMin$1(indexes.length, arrLength), oldArray = copyArray$2(array);
  while (length--) {
    var index = indexes[length];
    array[length] = isIndex$3(index, arrLength) ? oldArray[index] : void 0;
  }
  return array;
}
var _reorder = reorder$1;
var PLACEHOLDER$1 = "__lodash_placeholder__";
function replaceHolders$3(array, placeholder2) {
  var index = -1, length = array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (value === placeholder2 || value === PLACEHOLDER$1) {
      array[index] = PLACEHOLDER$1;
      result[resIndex++] = index;
    }
  }
  return result;
}
var _replaceHolders = replaceHolders$3;
var composeArgs$1 = _composeArgs, composeArgsRight$1 = _composeArgsRight, countHolders = _countHolders, createCtor$2 = _createCtor, createRecurry$1 = _createRecurry, getHolder$1 = _getHolder, reorder = _reorder, replaceHolders$2 = _replaceHolders, root$7 = _root;
var WRAP_BIND_FLAG$3 = 1, WRAP_BIND_KEY_FLAG$2 = 2, WRAP_CURRY_FLAG$4 = 8, WRAP_CURRY_RIGHT_FLAG$1 = 16, WRAP_ARY_FLAG$3 = 128, WRAP_FLIP_FLAG = 512;
function createHybrid$2(func2, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$3, isBind = bitmask & WRAP_BIND_FLAG$3, isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2, isCurried = bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$1), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor$2(func2);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder2 = getHolder$1(wrapper), holdersCount = countHolders(args, placeholder2);
    }
    if (partials) {
      args = composeArgs$1(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight$1(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders$2(args, placeholder2);
      return createRecurry$1(func2, bitmask, createHybrid$2, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
    }
    var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func2] : func2;
    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary2 < length) {
      args.length = ary2;
    }
    if (this && this !== root$7 && this instanceof wrapper) {
      fn = Ctor || createCtor$2(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}
var _createHybrid = createHybrid$2;
var apply$2 = _apply, createCtor$1 = _createCtor, createHybrid$1 = _createHybrid, createRecurry = _createRecurry, getHolder = _getHolder, replaceHolders$1 = _replaceHolders, root$6 = _root;
function createCurry$1(func2, bitmask, arity) {
  var Ctor = createCtor$1(func2);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length, placeholder2 = getHolder(wrapper);
    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder2 && args[length - 1] !== placeholder2 ? [] : replaceHolders$1(args, placeholder2);
    length -= holders.length;
    if (length < arity) {
      return createRecurry(func2, bitmask, createHybrid$1, wrapper.placeholder, void 0, args, holders, void 0, void 0, arity - length);
    }
    var fn = this && this !== root$6 && this instanceof wrapper ? Ctor : func2;
    return apply$2(fn, this, args);
  }
  return wrapper;
}
var _createCurry = createCurry$1;
var apply$1 = _apply, createCtor = _createCtor, root$5 = _root;
var WRAP_BIND_FLAG$2 = 1;
function createPartial$1(func2, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$2, Ctor = createCtor(func2);
  function wrapper() {
    var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root$5 && this instanceof wrapper ? Ctor : func2;
    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply$1(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}
var _createPartial = createPartial$1;
var composeArgs = _composeArgs, composeArgsRight = _composeArgsRight, replaceHolders = _replaceHolders;
var PLACEHOLDER = "__lodash_placeholder__";
var WRAP_BIND_FLAG$1 = 1, WRAP_BIND_KEY_FLAG$1 = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG$3 = 8, WRAP_ARY_FLAG$2 = 128, WRAP_REARG_FLAG$2 = 256;
var nativeMin = Math.min;
function mergeData$1(data, source) {
  var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG$1 | WRAP_BIND_KEY_FLAG$1 | WRAP_ARY_FLAG$2);
  var isCombo = srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_CURRY_FLAG$3 || srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_REARG_FLAG$2 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$2) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$3;
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & WRAP_BIND_FLAG$1) {
    data[2] = source[2];
    newBitmask |= bitmask & WRAP_BIND_FLAG$1 ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  value = source[7];
  if (value) {
    data[7] = value;
  }
  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
var _mergeData = mergeData$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$2(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$2;
var baseGetTag$5 = _baseGetTag, isObjectLike$9 = isObjectLike_1;
var symbolTag$3 = "[object Symbol]";
function isSymbol$5(value) {
  return typeof value == "symbol" || isObjectLike$9(value) && baseGetTag$5(value) == symbolTag$3;
}
var isSymbol_1 = isSymbol$5;
var baseTrim$1 = _baseTrim, isObject$4 = isObject_1, isSymbol$4 = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$4(value)) {
    return NAN;
  }
  if (isObject$4(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$4(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim$1(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var toNumber = toNumber_1;
var INFINITY$3 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$3 || value === -INFINITY$3) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$1;
var baseSetData = _baseSetData, createBind = _createBind, createCurry = _createCurry, createHybrid = _createHybrid, createPartial = _createPartial, getData$1 = _getData, mergeData = _mergeData, setData = _setData, setWrapToString = _setWrapToString, toInteger = toInteger_1;
var FUNC_ERROR_TEXT$3 = "Expected a function";
var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG$2 = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG$1 = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
var nativeMax$1 = Math.max;
function createWrap$3(func2, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func2 != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$1 | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = void 0;
  }
  ary2 = ary2 === void 0 ? ary2 : nativeMax$1(toInteger(ary2), 0);
  arity = arity === void 0 ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;
  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials, holdersRight = holders;
    partials = holders = void 0;
  }
  var data = isBindKey ? void 0 : getData$1(func2);
  var newData = [
    func2,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary2,
    arity
  ];
  if (data) {
    mergeData(newData, data);
  }
  func2 = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func2.length : nativeMax$1(newData[9] - length, 0);
  if (!arity && bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func2, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG$2 || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func2, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$1 || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG$1)) && !holders.length) {
    result = createPartial(func2, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(void 0, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func2, bitmask);
}
var _createWrap = createWrap$3;
var createWrap$2 = _createWrap;
var WRAP_ARY_FLAG$1 = 128;
function ary(func2, n2, guard) {
  n2 = guard ? void 0 : n2;
  n2 = func2 && n2 == null ? func2.length : n2;
  return createWrap$2(func2, WRAP_ARY_FLAG$1, void 0, void 0, void 0, void 0, n2);
}
var ary_1 = ary;
var defineProperty = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$3;
var baseAssignValue$1 = _baseAssignValue, eq$2 = eq_1;
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$b.call(object, key) && eq$2(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
function baseTimes$1(n2, iteratee2) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee2(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$4 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var argsTag$3 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$8(value) && baseGetTag$4(value) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$7 = isObjectLike_1;
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;
var isArguments$4 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$7(value) && hasOwnProperty$a.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$4 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$4, isBuffer$4.exports);
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$3 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$6 = isObjectLike_1;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$3 = "[object Error]", funcTag$1 = "[object Function]", mapTag$6 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$6 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$3 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$3] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$6] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$6] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$3] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$6(value) && isLength$2(value.length) && !!typedArrayTags[baseGetTag$3(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func2) {
  return function(value) {
    return func2(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$d = isArray_1, isBuffer$3 = isBuffer$4.exports, isIndex$2 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$d(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$3(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$9.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$a = Object.prototype;
function isPrototype$4(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}
var _isPrototype = isPrototype$4;
function overArg$2(func2, transform) {
  return function(arg) {
    return func2(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$3 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function baseKeys$2(object) {
  if (!isPrototype$3(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$2;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$4(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$4;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys$1 = _baseKeys, isArrayLike$3 = isArrayLike_1;
function keys$5(object) {
  return isArrayLike$3(object) ? arrayLikeKeys$1(object) : baseKeys$1(object);
}
var keys_1 = keys$5;
var copyObject$4 = _copyObject, keys$4 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$4(source), object);
}
var _baseAssign = baseAssign$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var getNative$4 = _getNative, root$4 = _root;
var Map$3 = getNative$4(root$4, "Map");
var _Map = Map$3;
var getNative$3 = _getNative;
var nativeCreate$4 = getNative$3(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$3(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$3.prototype.clear = stackClear;
Stack$3.prototype["delete"] = stackDelete;
Stack$3.prototype.get = stackGet;
Stack$3.prototype.has = stackHas;
Stack$3.prototype.set = stackSet;
var _Stack = Stack$3;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype$2 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$2(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$5 = Object.prototype;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$2 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
function arrayPush$3(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var overArg = _overArg;
var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var arrayPush$2 = _arrayPush, getPrototype$2 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$2(result, getSymbols$1(object));
    object = getPrototype$2(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush$1 = _arrayPush, isArray$c = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$c(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$3 = keys_1;
function getAllKeys$2(object) {
  return baseGetAllKeys$1(object, keys$3, getSymbols);
}
var _getAllKeys = getAllKeys$2;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$3(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$3;
var getNative$2 = _getNative, root$3 = _root;
var DataView$1 = getNative$2(root$3, "DataView");
var _DataView = DataView$1;
var getNative$1 = _getNative, root$2 = _root;
var Promise$2 = getNative$1(root$2, "Promise");
var _Promise = Promise$2;
var getNative = _getNative, root$1 = _root;
var Set$2 = getNative(root$1, "Set");
var _Set = Set$2;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap2 = _WeakMap, baseGetTag$2 = _baseGetTag, toSource = _toSource;
var mapTag$5 = "[object Map]", objectTag$3 = "[object Object]", promiseTag = "[object Promise]", setTag$5 = "[object Set]", weakMapTag$2 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap2);
var getTag$6 = baseGetTag$2;
if (DataView && getTag$6(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map && getTag$6(new Map()) != mapTag$5 || Promise$1 && getTag$6(Promise$1.resolve()) != promiseTag || Set$1 && getTag$6(new Set$1()) != setTag$5 || WeakMap2 && getTag$6(new WeakMap2()) != weakMapTag$2) {
  getTag$6 = function(value) {
    var result = baseGetTag$2(value), Ctor = result == objectTag$3 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$5;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$5;
        case weakMapCtorString:
          return weakMapTag$2;
      }
    }
    return result;
  };
}
var _getTag = getTag$6;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$4.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var root = _root;
var Uint8Array$2 = root.Uint8Array;
var _Uint8Array = Uint8Array$2;
var Uint8Array$1 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$4 = _Symbol;
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$4:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$4:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype$1 = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype$1(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$5 = _getTag, isObjectLike$5 = isObjectLike_1;
var mapTag$3 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$5(value) && getTag$5(value) == mapTag$3;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$4 = _getTag, isObjectLike$4 = isObjectLike_1;
var setTag$3 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$4(value) && getTag$4(value) == setTag$3;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$2 = _Stack, arrayEach = _arrayEach, assignValue$1 = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys$1 = _getAllKeys, getAllKeysIn$2 = _getAllKeysIn, getTag$3 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$b = isArray_1, isBuffer$2 = isBuffer$4.exports, isMap = isMap_1, isObject$2 = isObject_1, isSet = isSet_1, keys$2 = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$2 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$2 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$2 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$2] = cloneableTags[numberTag$1] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$1] = cloneableTags[setTag$2] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag] = cloneableTags[weakMapTag$1] = false;
function baseClone$3(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$2, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$2(value)) {
    return value;
  }
  var isArr = isArray$b(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag = getTag$3(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$2(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$2());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$3(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$3(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$2 : getAllKeys$1 : isFlat ? keysIn : keys$2;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue$1(result, key2, baseClone$3(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$3;
var baseClone$2 = _baseClone;
var CLONE_SYMBOLS_FLAG$1 = 4;
function clone(value) {
  return baseClone$2(value, CLONE_SYMBOLS_FLAG$1);
}
var clone_1 = clone;
var createWrap$1 = _createWrap;
var WRAP_CURRY_FLAG$1 = 8;
function curry(func2, arity, guard) {
  arity = guard ? void 0 : arity;
  var result = createWrap$1(func2, WRAP_CURRY_FLAG$1, void 0, void 0, void 0, void 0, void 0, arity);
  result.placeholder = curry.placeholder;
  return result;
}
curry.placeholder = {};
var curry_1 = curry;
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$3 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike$3(value) || baseGetTag$1(value) != objectTag$1) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$2;
var baseGetTag = _baseGetTag, isObjectLike$2 = isObjectLike_1, isPlainObject$1 = isPlainObject_1;
var domExcTag = "[object DOMException]", errorTag$1 = "[object Error]";
function isError(value) {
  if (!isObjectLike$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag$1 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject$1(value);
}
var isError_1 = isError;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var weakMapTag = "[object WeakMap]";
function isWeakMap(value) {
  return isObjectLike$1(value) && getTag$2(value) == weakMapTag;
}
var isWeakMap_1 = isWeakMap;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$2(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
SetCache$2.prototype.has = setCacheHas;
var _SetCache = SetCache$2;
function arraySome$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$2(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$2;
var SetCache$1 = _SetCache, arraySome = _arraySome, cacheHas$1 = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache$1() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas$1(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
function mapToArray$1(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$3(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$3;
var Symbol$3 = _Symbol, Uint8Array2 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray$2 = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag$1:
      var convert2 = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert2 || (convert2 = setToArray$2);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag$1 = _getTag, isArray$a = isArray_1, isBuffer$1 = isBuffer$4.exports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$a(object), othIsArr = isArray$a(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;
var Stack = _Stack, baseIsEqual$2 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$1 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$1 = keys_1;
function getMatchData$1(object) {
  var result = keys$1(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var isArray$9 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT$2 = "Expected a function";
function memoize$2(func2, resolver) {
  if (typeof func2 != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func2.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache)();
  return memoized;
}
memoize$2.Cache = MapCache;
var memoize_1 = memoize$2;
var memoize$1 = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func2) {
  var result = memoize$1(func2, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$2 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$2;
function arrayMap$4(array, iteratee2) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee2(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$4;
var Symbol$2 = _Symbol, arrayMap$3 = _arrayMap, isArray$8 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$2 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$2(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$8(value)) {
    return arrayMap$3(value, baseToString$2) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _baseToString = baseToString$2;
var baseToString$1 = _baseToString;
function toString$3(value) {
  return value == null ? "" : baseToString$1(value);
}
var toString_1 = toString$3;
var isArray$7 = isArray_1, isKey$2 = _isKey, stringToPath$1 = _stringToPath, toString$2 = toString_1;
function castPath$6(value, object) {
  if (isArray$7(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath$1(toString$2(value));
}
var _castPath = castPath$6;
var isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
function toKey$7(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _toKey = toKey$7;
var castPath$5 = _castPath, toKey$6 = _toKey;
function baseGet$4(object, path) {
  path = castPath$5(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$6(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$4;
var baseGet$3 = _baseGet;
function get$2(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$3(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$2;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath$4 = _castPath, isArguments$2 = isArguments_1, isArray$6 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$5 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath$4(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$5(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key, length) && (isArray$6(object) || isArguments$2(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual$1 = _baseIsEqual, get$1 = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$4 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$4(path), srcValue);
  }
  return function(object) {
    var objValue = get$1(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$2 = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$2(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$3 = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey$3(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray$5 = isArray_1, property = property_1;
function baseIteratee$4(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$5(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$4;
var baseClone$1 = _baseClone, baseIteratee$3 = _baseIteratee;
var CLONE_DEEP_FLAG$1 = 1;
function iteratee(func2) {
  return baseIteratee$3(typeof func2 == "function" ? func2 : baseClone$1(func2, CLONE_DEEP_FLAG$1));
}
var iteratee_1 = iteratee;
var Symbol$1 = _Symbol, isArguments$1 = isArguments_1, isArray$4 = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$4(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func2, start, transform) {
  start = nativeMax(start === void 0 ? func2.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func2, this, otherArgs);
  };
}
var _overRest = overRest$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$3(func2) {
  return setToString(overRest(func2, void 0, flatten), func2 + "");
}
var _flatRest = flatRest$3;
var createWrap = _createWrap, flatRest$2 = _flatRest;
var WRAP_REARG_FLAG$1 = 256;
var rearg = flatRest$2(function(func2, indexes) {
  return createWrap(func2, WRAP_REARG_FLAG$1, void 0, void 0, void 0, indexes);
});
var rearg_1 = rearg;
var arrayMap$2 = _arrayMap, copyArray = _copyArray, isArray$3 = isArray_1, isSymbol = isSymbol_1, stringToPath = _stringToPath, toKey$2 = _toKey, toString$1 = toString_1;
function toPath(value) {
  if (isArray$3(value)) {
    return arrayMap$2(value, toKey$2);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString$1(value)));
}
var toPath_1 = toPath;
var _util = {
  "ary": ary_1,
  "assign": _baseAssign,
  "clone": clone_1,
  "curry": curry_1,
  "forEach": _arrayEach,
  "isArray": isArray_1,
  "isError": isError_1,
  "isFunction": isFunction_1,
  "isWeakMap": isWeakMap_1,
  "iteratee": iteratee_1,
  "keys": _baseKeys,
  "rearg": rearg_1,
  "toInteger": toInteger_1,
  "toPath": toPath_1
};
var baseConvert = _baseConvert, util = _util;
function convert$a(name, func2, options) {
  return baseConvert(util, name, func2, options);
}
var convert_1 = convert$a;
var LodashWrapper = _LodashWrapper, flatRest$1 = _flatRest, getData = _getData, getFuncName = _getFuncName, isArray$2 = isArray_1, isLaziable = _isLaziable;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
function createFlow$1(fromRight) {
  return flatRest$1(function(funcs) {
    var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func2 = funcs[index];
      if (typeof func2 != "function") {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      if (prereq && !wrapper && getFuncName(func2) == "wrapper") {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func2 = funcs[index];
      var funcName = getFuncName(func2), data = funcName == "wrapper" ? getData(func2) : void 0;
      if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func2.length == 1 && isLaziable(func2) ? wrapper[funcName]() : wrapper.thru(func2);
      }
    }
    return function() {
      var args = arguments, value = args[0];
      if (wrapper && args.length == 1 && isArray$2(value)) {
        return wrapper.plant(value).value();
      }
      var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
      while (++index2 < length) {
        result = funcs[index2].call(this, result);
      }
      return result;
    };
  });
}
var _createFlow = createFlow$1;
var createFlow = _createFlow;
var flow$1 = createFlow();
var flow_1 = flow$1;
var convert$9 = convert_1, func$9 = convert$9("flow", flow_1);
func$9.placeholder = placeholder;
var flow = func$9;
var convert$8 = convert_1, func$8 = convert$8("get", get_1);
func$8.placeholder = placeholder;
var get = func$8;
var baseKeys = _baseKeys, getTag = _getTag, isArguments = isArguments_1, isArray$1 = isArray_1, isArrayLike$1 = isArrayLike_1, isBuffer = isBuffer$4.exports, isPrototype = _isPrototype, isTypedArray = isTypedArray_1;
var mapTag = "[object Map]", setTag = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty$1(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike$1(value) && (isArray$1(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_1 = isEmpty$1;
var _falseOptions = {
  "cap": false,
  "curry": false,
  "fixed": false,
  "immutable": false,
  "rearg": false
};
var convert$7 = convert_1, func$7 = convert$7("isEmpty", isEmpty_1, _falseOptions);
func$7.placeholder = placeholder;
var isEmpty = func$7;
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
function baseSlice$2(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var _baseSlice = baseSlice$2;
var baseGet$1 = _baseGet, baseSlice$1 = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet$1(object, baseSlice$1(path, 0, -1));
}
var _parent = parent$1;
var castPath$3 = _castPath, last = last_1, parent = _parent, toKey$1 = _toKey;
function baseUnset$1(object, path) {
  path = castPath$3(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey$1(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var arrayMap$1 = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath$2 = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn$1 = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit$1 = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap$1(paths, function(path) {
    path = castPath$2(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn$1(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit$1;
var convert$6 = convert_1, func$6 = convert$6("omit", omit_1);
func$6.placeholder = placeholder;
var omit = func$6;
function arrayReduce$1(array, iteratee2, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee2(accumulator, array[index], index, array);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function createBaseFor$1(fromRight) {
  return function(object, iteratee2, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee2(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var baseFor = _baseFor, keys = keys_1;
function baseForOwn$1(object, iteratee2) {
  return object && baseFor(object, iteratee2, keys);
}
var _baseForOwn = baseForOwn$1;
var isArrayLike = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee2) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee2);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee2(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$1 = createBaseEach(baseForOwn);
var _baseEach = baseEach$1;
function baseReduce$1(collection, iteratee2, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection2) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee2(accumulator, value, index, collection2);
  });
  return accumulator;
}
var _baseReduce = baseReduce$1;
var arrayReduce = _arrayReduce, baseEach = _baseEach, baseIteratee$2 = _baseIteratee, baseReduce = _baseReduce, isArray = isArray_1;
function reduce$1(collection, iteratee2, accumulator) {
  var func2 = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
  return func2(collection, baseIteratee$2(iteratee2), accumulator, initAccum, baseEach);
}
var reduce_1 = reduce$1;
var convert$5 = convert_1, func$5 = convert$5("reduce", reduce_1);
func$5.placeholder = placeholder;
var reduce = func$5;
var baseSlice = _baseSlice;
function castSlice$1(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
var _castSlice = castSlice$1;
var baseIndexOf$1 = _baseIndexOf;
function charsEndIndex$1(strSymbols, chrSymbols) {
  var index = strSymbols.length;
  while (index-- && baseIndexOf$1(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var _charsEndIndex = charsEndIndex$1;
var baseIndexOf = _baseIndexOf;
function charsStartIndex$1(strSymbols, chrSymbols) {
  var index = -1, length = strSymbols.length;
  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var _charsStartIndex = charsStartIndex$1;
function asciiToArray$1(string) {
  return string.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode$1(string) {
  return reHasUnicode.test(string);
}
var _hasUnicode = hasUnicode$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray$1(string) {
  return string.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
var _stringToArray = stringToArray$1;
var baseToString = _baseToString, baseTrim = _baseTrim, castSlice = _castSlice, charsEndIndex = _charsEndIndex, charsStartIndex = _charsStartIndex, stringToArray = _stringToArray, toString = toString_1;
function trim$1(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === void 0)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
  return castSlice(strSymbols, start, end).join("");
}
var trim_1 = trim$1;
var convert$4 = convert_1, func$4 = convert$4("trim", trim_1);
func$4.placeholder = placeholder;
var trim = func$4;
const StyledButton = styled(Button$1)`
  &.Editor__toolbar__button--large {
    width: ${pxToRem(80)};
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
`;
const iconComponents = {
  format_bold: BoldIcon,
  format_italic: ItalicIcon,
  format_list_bulleted: ListIcon,
  ["k-u-align-left"]: AlignLeftIcon,
  ["k-u-align-center"]: AlignCenterIcon,
  ["k-u-align-right"]: AlignRightIcon,
  image: ImageIcon,
  video: VideoIcon,
  link: LinkIcon,
  button_link: EditorButtonIcon,
  quote: BlockquoteIcon
};
const Button = ({
  tag,
  onToggle,
  style,
  active,
  icon,
  disabled
}) => {
  const [{
    focus,
    translations
  }] = useContext(EditorContext);
  const Icon = iconComponents[icon];
  const title = translations == null ? void 0 : translations.controls[active ? `activated_${icon}` : icon];
  const handleMouseDown = (e) => {
    e.preventDefault();
    if (disabled)
      return;
    onToggle(style);
  };
  return /* @__PURE__ */ jsx(StyledButton, {
    disabled,
    active: active && focus,
    "aria-checked": active && focus,
    onMouseDown: handleMouseDown,
    title,
    "aria-label": title,
    fit: "icon",
    tag,
    type: tag === "button" ? tag : null,
    children: /* @__PURE__ */ jsx(Icon, {})
  });
};
Button.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onToggle: PropTypes.func,
  tag: PropTypes.string
};
Button.defaultProps = {
  disabled: false,
  active: false,
  onToggle: () => null,
  tag: "button"
};
const Label = ({
  htmlFor,
  size,
  label,
  children,
  tooltip
}) => {
  var _a;
  const [{
    translations
  }] = useContext(EditorContext);
  return /* @__PURE__ */ jsx(Field.Label, {
    labelProps: {
      htmlFor,
      size
    },
    tooltipId: `tooltip-${htmlFor}`,
    tooltip,
    tooltipProps: {
      actionLabel: (_a = translations == null ? void 0 : translations.form) == null ? void 0 : _a.tooltip_action_label
    },
    children: label || children
  });
};
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  size: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string
};
Label.defaultProps = {
  size: "micro"
};
const InputText = (_a) => {
  var _b = _a, {
    name,
    form,
    placeholder: placeholder2,
    limit,
    unit,
    type,
    digits,
    disabled,
    rows,
    defaultValue,
    style,
    className,
    onFocus,
    onChange,
    onBlur,
    normalize,
    validate
  } = _b, others = __objRest(_b, [
    "name",
    "form",
    "placeholder",
    "limit",
    "unit",
    "type",
    "digits",
    "disabled",
    "rows",
    "defaultValue",
    "style",
    "className",
    "onFocus",
    "onChange",
    "onBlur",
    "normalize",
    "validate"
  ]);
  const [field, meta, {
    setValue
  }] = useField({
    name,
    validate
  });
  useEffect(() => {
    if (!defaultValue)
      return;
    if (field.value)
      return;
    setValue(defaultValue);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      style,
      className,
      children: /* @__PURE__ */ jsx(Field.Input, __spreadValues(__spreadProps(__spreadValues({}, field), {
        id: name,
        error: meta.error && meta.touched,
        onFocus,
        onChange: (e) => {
          field.onChange(e);
          if (normalize) {
            setValue(normalize(e.target.value));
          }
          onChange(e);
        },
        onBlur: (e) => {
          field.onBlur(e);
          if (normalize) {
            setValue(normalize(e.target.value));
          }
          onBlur(e);
        },
        "data-test-id": name,
        placeholder: placeholder2,
        limit,
        unit,
        type,
        tag: type,
        rows,
        digits,
        disabled
      }), others))
    }), /* @__PURE__ */ jsx(ErrorMessage, {
      name,
      children: (msg) => /* @__PURE__ */ jsx(Field.ErrorMessage, {
        children: msg
      })
    })]
  });
};
InputText.defaultProps = {
  type: "text",
  disabled: false,
  validate: () => {
  },
  onFocus: () => {
  },
  onBlur: () => {
  },
  onChange: () => {
  }
};
InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
  type: PropTypes.string,
  digits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  normalize: PropTypes.func
};
const FormikInputWithButton = (_c) => {
  var _d = _c, {
    name,
    onClick,
    isDisabled
  } = _d, props = __objRest(_d, [
    "name",
    "onClick",
    "isDisabled"
  ]);
  const [_a, ..._b] = useField(name), _c2 = _a, {
    value
  } = _c2, field = __objRest(_c2, [
    "value"
  ]), [meta] = _b;
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(TextInputWithButton, __spreadValues(__spreadValues({
      id: name,
      buttonProps: {
        onClick,
        disabled: isDisabled || meta.error && meta.touched
      },
      error: meta.error && meta.touched
    }, field), props))
  });
};
FormikInputWithButton.defaultProps = {
  onClick: () => {
  },
  isDisabled: false
};
FormikInputWithButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
};
var SubmitLoader = (_e) => {
  var _f = _e, {
    className
  } = _f, props = __objRest(_f, [
    "className"
  ]);
  const [{
    translations
  }] = useContext(EditorContext);
  return /* @__PURE__ */ jsxs(Button$1, __spreadProps(__spreadValues({
    modifier: "helium",
    size: "big",
    "aria-live": "polite",
    as: "div",
    className: classNames("kiss-SubmitLoader", "k-u-cursor-not-allowed", className)
  }, props), {
    children: [/* @__PURE__ */ jsx(KissKissLoadingAnimation, {
      color: COLORS.background1
    }), /* @__PURE__ */ jsx(VisuallyHidden, {
      children: translations.button_loading
    })]
  }));
};
const linkify$3 = linkifyIt();
linkify$3.tlds(tlds);
const Wrapper$3 = styled.div`
  position: relative;
  margin: ${pxToRem(30)} 0;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    display: inline-block;
  }
`;
const ButtonLinkWithFluidStyle = styled(Button$1)`
  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    min-width: initial;
    width: 100%;
  }
`;
const StyledArrowContainer$1 = styled(ArrowContainer)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${pxToRem(20)};
  background-color: ${COLORS.background1};
  margin-top: ${pxToRem(5)};
  transition: opacity 0.1s ease-out, margin-top 0.1s ease-out;
`;
const DeleteLink$1 = styled(Text)`
  display: block;
  width: 100%;
  padding: 0;
  text-align: center;
`;
const VerticalSeparator$1 = styled.span`
  margin: ${pxToRem(5)} ${pxToRem(10)};
  border-left: var(--border-width, 1px) solid ${COLORS.font2};
`;
const ShareLink$1 = styled(Text)`
  overflow: hidden;
  display: inline-block;
  max-width: ${pxToRem(150)};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledButtonLink = ({
  href,
  children
}) => {
  return /* @__PURE__ */ jsx(ButtonLinkWithFluidStyle, {
    tag: "a",
    href,
    target: "_blank",
    rel: "nofollow noopener",
    modifier: "helium",
    size: "big",
    children
  });
};
const ButtonLink = ({
  contentState,
  entityKey,
  children
}) => {
  const [isVisible, setVisible] = useState(false);
  const {
    url
  } = contentState.getEntity(entityKey).getData();
  const [{
    editorState,
    focus,
    translations
  }, dispatch] = useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0);
  }, [focus, editorState]);
  return /* @__PURE__ */ jsxs(Wrapper$3, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ jsx(StyledButtonLink, {
      href: url,
      children
    }), isVisible && /* @__PURE__ */ jsxs(StyledArrowContainer$1, {
      position: "top",
      shadow: true,
      borderWidth: 1,
      borderColor: COLORS.line1,
      contentEditable: false,
      children: [/* @__PURE__ */ jsx(DeleteLink$1, {
        href: "#",
        tag: "a",
        size: "micro",
        weight: "regular",
        color: "error",
        onClick: (e) => {
          e.preventDefault();
          const currentContent = contentState.getBlockForKey(editorState.getSelection().getFocusKey());
          currentContent.findEntityRanges((character) => {
            return character.getEntity() === entityKey;
          }, (start, end) => {
            const newsSelection = editorState.getSelection().merge({
              focusOffset: end,
              anchorOffset: start
            });
            const newsEditorState = Modifier.applyEntity(contentState, newsSelection, null);
            dispatch(updateEditor(EditorState.push(editorState, newsEditorState, "apply-entity")));
          });
        },
        children: translations.link.button.delete
      }), /* @__PURE__ */ jsx(VerticalSeparator$1, {}), /* @__PURE__ */ jsx(ShareLink$1, {
        href: url,
        target: "_blank",
        rel: "noopener",
        tag: "a",
        size: "micro",
        weight: "regular",
        color: "font1",
        children: url
      })]
    })]
  });
};
const buttonLinkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "BUTTON_LINK";
  }, callback);
};
const decorator$3 = {
  strategy: buttonLinkStrategy,
  component: ButtonLink
};
const readDecorator$3 = {
  strategy: buttonLinkStrategy,
  component: (props) => {
    const {
      url
    } = props.contentState.getEntity(props.entityKey).getData();
    return /* @__PURE__ */ jsx(Wrapper$3, {
      children: /* @__PURE__ */ jsx(StyledButtonLink, {
        href: url,
        children: props.children
      })
    });
  }
};
const ButtonLinkControls = ({
  disabled,
  onChange
}) => {
  const [{
    editorState,
    editorRef,
    translations
  }, dispatch] = useContext(EditorContext);
  const entity = getEntity(editorState);
  const entityKey = getEntityKey(editorState);
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState);
    }
    return getEntityText(editorState, entityKey);
  };
  return /* @__PURE__ */ jsx(ModalNext, {
    headerTitle: /* @__PURE__ */ jsx(Title$1, {
      noMargin: true,
      modifier: "quaternary",
      children: translations.button_link.title
    }),
    trigger: /* @__PURE__ */ jsx(Button, {
      icon: "button_link",
      className: "Editor__toolbar__button--large",
      disabled
    }),
    children: ({
      close
    }) => {
      return /* @__PURE__ */ jsx(Formik, {
        enableReinitialize: true,
        initialValues: {
          url: entity ? entity.getData().url : "",
          text: textToShow()
        },
        onSubmit: ({
          url
        }) => {
          onChange(url);
          const link = linkify$3.match(url);
          const contentState = editorState.getCurrentContent();
          if (entity) {
            const newContentState = contentState.replaceEntityData(entityKey, {
              url: link[0].url
            });
            dispatch(updateEditor(EditorState.push(editorState, newContentState, "change-block-data")));
          } else {
            const contentStateWithEntity = contentState.createEntity("BUTTON_LINK", "MUTABLE", {
              url: link[0].url
            });
            const entityKey2 = contentStateWithEntity.getLastCreatedEntityKey();
            const newEditorState = EditorState.set(editorState, {
              currentContent: contentStateWithEntity
            });
            dispatch(updateEditor(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey2)));
          }
          close();
          setTimeout(() => editorRef.current.blur(), 0);
        },
        children: ({
          handleSubmit
        }) => {
          return /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsxs(ModalNext.Block, {
              className: "k-u-margin-bottom-quadruple",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "k-u-margin-bottom-double",
                children: [/* @__PURE__ */ jsx(Label, {
                  htmlFor: "",
                  children: translations.button_link.text
                }), /* @__PURE__ */ jsx(InputText, {
                  name: "text",
                  disabled: true
                })]
              }), /* @__PURE__ */ jsx(Label, {
                htmlFor: "url",
                children: translations.button_link.url
              }), /* @__PURE__ */ jsx(InputText, {
                name: "url",
                validate: (value) => {
                  if (!linkify$3.test(value)) {
                    return translations.link.error;
                  }
                }
              })]
            }), /* @__PURE__ */ jsx(ModalNext.Button, {
              fluid: true,
              size: "big",
              type: "button",
              modifier: "helium",
              onClick: handleSubmit,
              children: translations.submit
            })]
          });
        }
      });
    }
  });
};
ButtonLinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
ButtonLinkControls.defaultProps = {
  disabled: false,
  onChange: () => null
};
const StyledArrowContainer = styled(ArrowContainer)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${pxToRem(20)};
  background-color: ${COLORS.background1};
  margin-top: ${pxToRem(0)};
  transition: opacity 0.1s ease-out, margin-top 0.1s ease-out;
  z-index: 99999;
`;
const DeleteLink = styled(Text)`
  flex: 1;
  width: 100%;
  text-align: center;
  display: block;
  padding: 0;
`;
const VerticalSeparator = styled.span`
  flex: 0;
  border-left: var(--border-width, 1px) solid ${COLORS.font2};
  margin: ${pxToRem(5)} ${pxToRem(10)};
`;
const ShareLink = styled(Text)`
  flex: 2;
  max-width: ${pxToRem(240)};
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;
const LinkInline = ({
  onDelete,
  url
}) => {
  const [{
    translations
  }] = useContext(EditorContext);
  return /* @__PURE__ */ jsxs(StyledArrowContainer, {
    position: "top",
    shadow: true,
    borderWidth: 1,
    borderColor: COLORS.line1,
    contentEditable: false,
    children: [/* @__PURE__ */ jsx(DeleteLink, {
      href: "#",
      tag: "a",
      size: "micro",
      color: "error",
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(e);
      },
      children: translations.link.button.delete
    }), /* @__PURE__ */ jsx(VerticalSeparator, {}), /* @__PURE__ */ jsx(ShareLink, {
      href: url,
      target: "_blank",
      rel: "noopener",
      tag: "a",
      size: "micro",
      color: "font1",
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(url, "_blank").focus();
      },
      children: url
    })]
  });
};
const StyledImage = styled.div`
  width: 100%;
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
`;
const LinkManager = ({
  url,
  entityKey
}) => {
  const [{
    editorState
  }, dispatch] = useContext(EditorContext);
  return /* @__PURE__ */ jsx(LinkInline, {
    url,
    onDelete: () => {
      dispatch(updateEditor(removeDataFromEntity(editorState, entityKey, ["url"])));
    }
  });
};
const ImageEditor = ({
  contentState,
  entityKey,
  blockKey
}) => {
  const [{
    editorState
  }, dispatch] = useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  const {
    src,
    url
  } = contentState.getEntity(entityKey).getData();
  const onClick = () => {
    dispatch(updateEditor(moveSelectionTo(editorState, blockKey)));
  };
  return /* @__PURE__ */ jsx(StyledImage, {
    className: "kiss-Draft__image",
    onClick,
    children: /* @__PURE__ */ jsxs("div", {
      className: classNames("kiss-Draft__image-focus", {
        "kiss-Draft__image-focus__focused": hasFocus
      }),
      children: [/* @__PURE__ */ jsx("div", {
        className: "k-u-align-center",
        children: /* @__PURE__ */ jsx("img", {
          src: getImageUrl(src),
          alt: ""
        })
      }), hasFocus && !!url && /* @__PURE__ */ jsx(LinkManager, {
        url,
        entityKey
      })]
    })
  });
};
const ImageDisplayer = ({
  contentState,
  entityKey
}) => {
  const {
    src,
    url
  } = contentState.getEntity(entityKey).getData();
  return /* @__PURE__ */ jsx(StyledImage, {
    className: "kiss-Draft__image-read",
    children: url ? /* @__PURE__ */ jsx("a", {
      href: url,
      target: "_blank",
      rel: "nofollow noopener",
      children: /* @__PURE__ */ jsx("div", {
        className: "k-u-align-center",
        children: /* @__PURE__ */ jsx("img", {
          src: getImageUrl(src),
          alt: ""
        })
      })
    }) : /* @__PURE__ */ jsx("div", {
      className: "k-u-align-center",
      children: /* @__PURE__ */ jsx("img", {
        src: getImageUrl(src),
        alt: ""
      })
    })
  });
};
const HiddenInput = styled.input`
  display: none;
`;
const imageStrategy$2 = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "IMAGE";
  }, callback);
};
const decorator$2 = {
  strategy: imageStrategy$2,
  component: ImageEditor
};
const readDecorator$2 = {
  strategy: imageStrategy$2,
  component: ImageDisplayer
};
const Form = ({
  imageUrl,
  setImageUrl,
  errorMessage
}) => {
  const [{
    translations
  }] = useContext(EditorContext);
  const {
    handleSubmit,
    values,
    isSubmitting
  } = useFormikContext();
  const [, , fileSizeHelpers] = useField("fileSize");
  const [, , urlHelpers] = useField("url");
  const [, , fileHelpers] = useField("file");
  const fileInputRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(HiddenInput, {
      ref: fileInputRef,
      name: "file",
      type: "file",
      id: "imageFile",
      onChange: (event) => {
        const file = event.target.files[0];
        if (!file.type.match("image.*")) {
          return;
        }
        fileHelpers.setValue(file);
        fileSizeHelpers.setValue(file.size);
        urlHelpers.setValue("");
        const reader = new FileReader();
        reader.addEventListener("load", (file2) => {
          setImageUrl(file2.target.result);
        });
        reader.readAsDataURL(file);
      },
      accept: "image/gif, image/jpeg, image/jpg, image/png"
    }), /* @__PURE__ */ jsx("div", {
      className: "k-u-margin-top-single",
      children: /* @__PURE__ */ jsx(Label, {
        htmlFor: "url",
        children: translations.image_upload.label
      })
    }), /* @__PURE__ */ jsx(FormikInputWithButton, {
      name: "url",
      placeholder: "https://",
      buttonValue: translations.image_upload.preview,
      onClick: () => {
        setImageUrl(values.url);
        fileSizeHelpers.setValue(0);
      }
    }), /* @__PURE__ */ jsx("div", {
      className: "k-u-margin-vertical-single",
      children: imageUrl && /* @__PURE__ */ jsx("img", {
        src: imageUrl,
        width: "100%",
        alt: ""
      })
    }), /* @__PURE__ */ jsx(ErrorMessage, {
      name: "url",
      children: (msg) => /* @__PURE__ */ jsx(Field.ErrorMessage, {
        children: msg
      })
    }), /* @__PURE__ */ jsx(ErrorMessage, {
      name: "fileSize",
      children: (msg) => /* @__PURE__ */ jsx(Field.ErrorMessage, {
        children: msg
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "k-u-margin-top-single",
      children: [/* @__PURE__ */ jsx("div", {
        className: "k-u-margin-bottom-single",
        children: /* @__PURE__ */ jsx("a", {
          href: "#",
          className: "k-u-link k-u-link-primary1",
          onClick: (e) => {
            e.preventDefault();
            fileInputRef.current.click();
          },
          children: /* @__PURE__ */ jsx(Text, {
            tag: "span",
            decoration: "underline",
            children: translations.image_upload.upload
          })
        })
      }), /* @__PURE__ */ jsxs(ModalNext.Paragraph, {
        align: "left",
        noMargin: true,
        children: [translations.image_upload.help_file.formats, /* @__PURE__ */ jsx("br", {}), translations.image_upload.help_file.width, /* @__PURE__ */ jsx("br", {}), translations.image_upload.help_file.size, errorMessage && /* @__PURE__ */ jsx(Field.ErrorMessage, {
          children: errorMessage
        })]
      }), /* @__PURE__ */ jsx(ModalNext.Actions, {
        children: isSubmitting ? /* @__PURE__ */ jsx(SubmitLoader, {
          fluid: true
        }) : /* @__PURE__ */ jsx(ModalNext.Button, {
          type: "button",
          size: "big",
          modifier: "helium",
          onClick: handleSubmit,
          children: translations.submit
        })
      })]
    })]
  });
};
const ImageControls = ({
  disabled,
  onUpload,
  errorMessage
}) => {
  const [modalOpened, openModal] = useState(false);
  const [{
    editorState,
    translations,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (!modalOpened) {
      setImageUrl("");
    }
  }, [modalOpened]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Button, {
      icon: "image",
      disabled: contextDisabled || disabled,
      onToggle: () => {
        if (modalOpened) {
          openModal(false);
        } else {
          openModal(true);
        }
      }
    }), /* @__PURE__ */ jsx(ModalNext, {
      onClose: () => openModal(false),
      isOpen: modalOpened,
      headerTitle: /* @__PURE__ */ jsx(Title$1, {
        modifier: "quaternary",
        children: translations.image_upload.title
      }),
      children: ({
        close
      }) => {
        return /* @__PURE__ */ jsx(ModalNext.Block, {
          children: /* @__PURE__ */ jsx(Formik, {
            initialValues: {
              url: "",
              fileSize: 0
            },
            validationSchema: Yup.object().shape({
              url: Yup.string().url(translations.image.invalid_url).matches(/(?:jpg|jpeg|gif|png)$/, translations.image.invalid_extension),
              fileSize: Yup.number().max(5e6, translations.image.max_size)
            }),
            onSubmit: ({
              url,
              fileSize,
              file
            }) => {
              return new Promise((resolve, reject) => {
                if (isEmpty(url) && fileSize === 0) {
                  reject("WRONG");
                }
                if (!isEmpty(url) && fileSize === 0) {
                  resolve(url);
                }
                onUpload(file).then((url2) => resolve(url2));
              }).then((url2) => {
                const contentState = editorState.getCurrentContent();
                const contentStateWithEntity = contentState.createEntity("IMAGE", "IMMUTABLE", {
                  src: url2
                });
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, " ");
                const newState = EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter());
                if (isPreviousEmptyBlock(newState)) {
                  const newStateWithoutPreviousEmptyBlock = removePreviousEmptyBlock(newState);
                  dispatch(updateEditor(newStateWithoutPreviousEmptyBlock));
                } else {
                  dispatch(updateEditor(newState));
                }
                close();
                openModal(false);
                setTimeout(() => openModal(false), 500);
              });
            },
            children: () => /* @__PURE__ */ jsx(Form, {
              imageUrl,
              setImageUrl,
              errorMessage
            })
          })
        });
      }
    })]
  });
};
ImageControls.propTypes = {
  disabled: PropTypes.bool,
  onUpload: PropTypes.func,
  errorMessage: PropTypes.string
};
ImageControls.defaultProps = {
  disabled: false,
  onUpload: () => null
};
const linkify$2 = linkifyIt();
linkify$2.tlds(tlds);
const Wrapper$2 = styled.div`
  display: inline-block;
  position: relative;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: ${pxToRem(200)};
    max-width: 100%;
  }
`;
const ImageLinked = ({
  src
}) => {
  return /* @__PURE__ */ jsx(ImageWrapper, {
    children: /* @__PURE__ */ jsx("img", {
      src: getImageUrl(src),
      alt: ""
    })
  });
};
const Link$2 = ({
  contentState,
  entityKey,
  children
}) => {
  const [isVisible, setVisible] = useState(false);
  const {
    url
  } = contentState.getEntity(entityKey).getData();
  const [{
    editorState,
    focus
  }, dispatch] = useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0);
  }, [focus, editorState]);
  return /* @__PURE__ */ jsxs(Wrapper$2, {
    "aria-live": "assertive",
    children: [/* @__PURE__ */ jsx("a", {
      href: url,
      target: "_blank",
      className: "k-u-link k-u-link-primary1",
      rel: "nofollow noopener",
      children
    }), isVisible && /* @__PURE__ */ jsx(LinkInline, {
      url,
      onDelete: () => {
        var _a;
        const currentContent = contentState == null ? void 0 : contentState.getBlockForKey((_a = editorState == null ? void 0 : editorState.getSelection()) == null ? void 0 : _a.getFocusKey());
        if (!currentContent)
          return;
        currentContent.findEntityRanges((character) => {
          return character.getEntity() === entityKey;
        }, (start, end) => {
          const newsSelection = editorState.getSelection().merge({
            focusOffset: end,
            anchorOffset: start
          });
          const newsEditorState = Modifier.applyEntity(contentState, newsSelection, null);
          dispatch(updateEditor(EditorState.push(editorState, newsEditorState, "apply-entity")));
        });
      }
    })]
  });
};
const linkStrategy$2 = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "LINK";
  }, callback);
};
const decorator$1 = {
  strategy: linkStrategy$2,
  component: Link$2
};
const readDecorator$1 = {
  strategy: linkStrategy$2,
  component: (props) => {
    const {
      url
    } = props.contentState.getEntity(props.entityKey).getData();
    return /* @__PURE__ */ jsx(Wrapper$2, {
      children: /* @__PURE__ */ jsx("a", {
        href: url,
        target: "_blank",
        rel: "nofollow noopener",
        className: "k-u-link k-u-link-primary1",
        children: props.children
      })
    });
  }
};
const LinkControls = ({
  disabled,
  onChange
}) => {
  const [modalOpened, openModal] = useState(false);
  const [{
    editorState,
    editorRef,
    translations,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const entity = getEntity(editorState);
  const entityKey = getEntityKey(editorState);
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState);
    }
    return getEntityText(editorState, entityKey);
  };
  const forceFocus = () => {
    const currentSelection = editorState.getSelection();
    setTimeout(() => editorRef.current.focus(), 0);
    const newSelectionAtTheEnd = currentSelection.merge({
      anchorOffset: currentSelection.getFocusOffset(),
      hasFocus: true
    });
    dispatch(updateEditor(EditorState.forceSelection(editorState, newSelectionAtTheEnd)));
  };
  const active = !contextDisabled && !disabled && (entity || !isEmpty(textToShow()));
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Button, {
      icon: "link",
      disabled: !active,
      onToggle: () => {
        if (modalOpened) {
          openModal(false);
        } else {
          openModal(true);
        }
      }
    }), /* @__PURE__ */ jsx(ModalNext, {
      onClose: () => {
        openModal(false);
        forceFocus();
      },
      isOpen: modalOpened,
      headerTitle: /* @__PURE__ */ jsx(Title$1, {
        modifier: "quaternary",
        children: translations.link.title
      }),
      children: ({
        close
      }) => {
        return /* @__PURE__ */ jsx(ModalNext.Block, {
          children: /* @__PURE__ */ jsx(Formik, {
            enableReinitialize: true,
            initialValues: {
              url: entity ? entity.getData().url : "",
              text: textToShow()
            },
            onSubmit: ({
              url
            }) => {
              const link = linkify$2.match(url);
              const contentState = editorState.getCurrentContent();
              onChange();
              if (entity) {
                if ((entity == null ? void 0 : entity.get("type")) === "IMAGE") {
                  const newImageContentState = contentState.mergeEntityData(entityKey, {
                    url: link[0].url
                  });
                  dispatch(updateEditor(EditorState.push(editorState, newImageContentState, "change-block-data")));
                } else {
                  const newContentState = contentState.replaceEntityData(entityKey, {
                    url: link[0].url
                  });
                  dispatch(updateEditor(EditorState.push(editorState, newContentState, "change-block-data")));
                }
              } else {
                const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", {
                  url: link[0].url
                });
                const entityKey2 = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = EditorState.set(editorState, {
                  currentContent: contentStateWithEntity
                });
                dispatch(updateEditor(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey2)));
              }
              close();
              openModal(false);
              setTimeout(() => editorRef.current.focus(), 0);
            },
            children: ({
              handleSubmit
            }) => {
              var _a;
              return /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "k-u-margin-bottom-double",
                  children: (entity == null ? void 0 : entity.get("type")) === "IMAGE" ? /* @__PURE__ */ jsx(ImageLinked, {
                    src: (_a = entity == null ? void 0 : entity.getData()) == null ? void 0 : _a.src
                  }) : /* @__PURE__ */ jsxs(Fragment, {
                    children: [/* @__PURE__ */ jsx(Label, {
                      htmlFor: "",
                      children: translations.link.text.label
                    }), /* @__PURE__ */ jsx(InputText, {
                      name: "text",
                      disabled: true
                    })]
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "k-u-margin-vertical-double",
                  children: [/* @__PURE__ */ jsx(Label, {
                    size: "micro",
                    htmlFor: "url",
                    children: translations.image_upload.url
                  }), /* @__PURE__ */ jsx(InputText, {
                    name: "url",
                    validate: (value) => {
                      if (!linkify$2.test(value)) {
                        return translations.link.error;
                      }
                    }
                  })]
                }), /* @__PURE__ */ jsx(ModalNext.Actions, {
                  children: /* @__PURE__ */ jsx(ModalNext.Button, {
                    size: "big",
                    type: "button",
                    modifier: "helium",
                    onClick: handleSubmit,
                    children: translations.submit
                  })
                })]
              });
            }
          })
        });
      }
    })]
  });
};
LinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
LinkControls.defaultProps = {
  disabled: false,
  onChange: () => null
};
const EMBEDLY_API_URL = "https://api.embed.ly/1/";
const oembed = (customConfig) => {
  if (!customConfig.key) {
    throw new Error("You need an API key to call Embedly");
  }
  return fetch(`${EMBEDLY_API_URL}oembed?${qs.stringify(__spreadValues({
    secure: document.location.protocol === "https:",
    scheme: document.location.protocol.replace(":", "")
  }, customConfig))}`).then((response) => response.json());
};
const calculRatio = ({ height, width }) => (height / width * 100).toPrecision(4);
const getDataForProvider = (response) => {
  console.log(response);
  if (response.type === "video" || response.type === "rich" && response.provider_name !== "SoundCloud") {
    return {
      ratio: calculRatio({
        height: response.height,
        width: response.width
      }),
      html: response.html
    };
  }
  switch (response.provider_name) {
    case "SoundCloud":
      return {
        ratio: calculRatio({ height: 6, width: 16 }),
        html: response.html
      };
    case "Ovizer":
      return {
        ratio: calculRatio({
          height: response.thumbnail_height || 1,
          width: response.thumbnail_width || 1
        }),
        html: `<iframe src="${response.url}" width="100%" height="auto" allowFullScreen></iframe>`
      };
    case "Apple Podcasts":
      const embededUrl = response.url.replace("podcasts.apple.com", "embed.podcasts.apple.com");
      return {
        height: 183,
        ratio: 0.1,
        html: `<iframe allow="autoplay *; encrypted-media *; fullscreen *" height="175" style=";overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${embededUrl}&theme=auto"></iframe>`
      };
    default:
      return {
        ratio: 67.5,
        html: `<iframe src="${response.url}" width="100%" height="auto" allowFullScreen></iframe>`
      };
  }
};
const VideoEditor = ({
  contentState,
  entityKey,
  blockKey
}) => {
  const {
    embedlyHtml,
    embedRatio,
    html,
    height
  } = contentState.getEntity(entityKey).getData();
  const [{
    editorState
  }, dispatch] = useContext(EditorContext);
  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateEditor(moveSelectionTo(editorState, blockKey)));
  };
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  return /* @__PURE__ */ jsx(ResponsiveIframeContainer, {
    ratio: embedRatio || 67.5,
    className: "kiss-Draft__media",
    style: __spreadValues({}, height && {
      height
    }),
    children: /* @__PURE__ */ jsx("div", {
      className: classNames("kiss-Draft__media-focus", {
        "kiss-Draft__media-focus__focused": hasFocus
      }),
      onClick,
      children: parseHtml(embedlyHtml || html, {
        sanitize: false
      })
    })
  });
};
const VideoDisplayer = (props) => {
  const {
    embedlyHtml,
    embedRatio,
    height,
    html
  } = props.contentState.getEntity(props.entityKey).getData();
  return /* @__PURE__ */ jsx(ResponsiveIframeContainer, {
    ratio: embedRatio || 67.5,
    className: "kiss-Draft__media-read",
    style: __spreadValues({}, height && {
      height
    }),
    children: parseHtml(embedlyHtml || html, {
      sanitize: false
    })
  });
};
const videoStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && ["VIDEO", "MEDIA"].includes(contentState.getEntity(entityKey).getType());
  }, callback);
};
const decorator = {
  strategy: videoStrategy,
  component: VideoEditor
};
const readDecorator = {
  strategy: videoStrategy,
  component: VideoDisplayer
};
const VideoControls = ({
  disabled,
  onChange,
  embedlyApiKey
}) => {
  const [{
    editorState,
    translations,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const [modalOpened, openModal] = useState(false);
  const [embedlyHtml, setEmbedlyHtml] = useState(void 0);
  const [embedRatio, setEmbedRatio] = useState(void 0);
  const [height, setHeight] = useState(void 0);
  const [hasOembedError, oembedError] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Button, {
      icon: "video",
      disabled: contextDisabled || disabled,
      onToggle: () => {
        if (modalOpened) {
          openModal(false);
        } else {
          openModal(true);
        }
      }
    }), /* @__PURE__ */ jsx(ModalNext, {
      onClose: () => openModal(false),
      isOpen: modalOpened,
      headerTitle: /* @__PURE__ */ jsx(Title$1, {
        modifier: "quaternary",
        children: translations.media_upload.title
      }),
      children: ({
        close
      }) => {
        return /* @__PURE__ */ jsx(ModalNext.Block, {
          children: /* @__PURE__ */ jsx(Formik, {
            initialValues: {
              url: ""
            },
            validationSchema: Yup.object().shape({
              url: Yup.string().url(translations.video.invalid_url)
            }),
            onSubmit: ({
              url
            }) => {
              onChange(url);
              oembedError(false);
              return oembed({
                key: embedlyApiKey,
                maxwidth: 640,
                url
              }).then((response) => {
                if (response.type === "error") {
                  oembedError(true);
                  return;
                }
                const {
                  html,
                  ratio,
                  height: height2
                } = getDataForProvider(response);
                const newState = createMediaBlock(editorState, __spreadValues({
                  html,
                  embedRatio: ratio
                }, height2 && {
                  height: height2
                }));
                if (isPreviousEmptyBlock(newState)) {
                  const newStateWithoutPreviousEmptyBlock = removePreviousEmptyBlock(newState);
                  dispatch(updateEditor(newStateWithoutPreviousEmptyBlock));
                } else {
                  dispatch(updateEditor(newState));
                }
                close();
                setTimeout(() => {
                  openModal(false);
                  setEmbedlyHtml(void 0);
                }, 500);
              });
            },
            children: ({
              handleSubmit,
              isSubmitting,
              values
            }) => {
              return /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx(Label, {
                  size: "micro",
                  className: "k-u-margin-bottom-single",
                  htmlFor: "url",
                  children: translations.image_upload.label
                }), /* @__PURE__ */ jsx(FormikInputWithButton, {
                  name: "url",
                  placeholder: "https://",
                  buttonValue: translations.image_upload.preview,
                  onClick: () => {
                    oembedError(false);
                    oembed({
                      key: embedlyApiKey,
                      maxwidth: 640,
                      url: values.url
                    }).then((response) => {
                      if (response.type === "error") {
                        oembedError(true);
                        return;
                      }
                      const {
                        html,
                        ratio,
                        height: height2 = void 0
                      } = getDataForProvider(response);
                      setEmbedRatio(ratio);
                      setEmbedlyHtml(html);
                      setHeight(height2);
                    });
                  }
                }), embedlyHtml && /* @__PURE__ */ jsx("div", {
                  className: "k-u-margin-vertical-single",
                  children: /* @__PURE__ */ jsx(ResponsiveIframeContainer, {
                    ratio: embedRatio,
                    style: __spreadValues({}, height && {
                      height
                    }),
                    children: parseHtml(embedlyHtml, {
                      sanitize: false
                    })
                  })
                }), hasOembedError && /* @__PURE__ */ jsx(Field.ErrorMessage, {
                  children: translations.video.problem
                }), /* @__PURE__ */ jsx(ModalNext.Actions, {
                  children: isSubmitting ? /* @__PURE__ */ jsx(SubmitLoader, {
                    fluid: true
                  }) : /* @__PURE__ */ jsx(ModalNext.Button, {
                    size: "big",
                    type: "button",
                    modifier: "helium",
                    onClick: handleSubmit,
                    children: translations.submit
                  })
                })]
              });
            }
          })
        });
      }
    })]
  });
};
VideoControls.propTypes = {
  embedlyApiKey: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
VideoControls.defaultProps = {
  disabled: false,
  onChange: () => null
};
const linkify = linkifyIt({
  fuzzyLink: false
});
linkify.tlds(tlds);
const linkStrategy$1 = (contentBlock, callback) => {
  const links = linkify.match(contentBlock.get("text"));
  if (typeof links !== "undefined" && links !== null) {
    for (let i = 0; i < links.length; i += 1) {
      callback(links[i].index, links[i].lastIndex);
    }
  }
};
const Link$1 = (props) => {
  return /* @__PURE__ */ jsx("a", {
    target: "_blank",
    rel: "nofollow noopener",
    className: "k-u-link k-u-link-primary1",
    href: props.decoratedText,
    children: props.children
  });
};
var linkify$1 = {
  strategy: linkStrategy$1,
  component: Link$1
};
const Link = (props) => {
  const {
    url
  } = props.contentState.getEntity(props.entityKey).getData();
  return /* @__PURE__ */ jsx("a", {
    href: url,
    className: "k-u-link k-u-link-primary1",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    children: props.children
  });
};
const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "LINK";
  }, callback);
};
var linkDecorator = {
  strategy: linkStrategy,
  component: Link
};
function arrayIncludesWith$1(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
var Set = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set && 1 / setToArray$1(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array, iteratee2, comparator) {
  var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee2 ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee2 ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee2) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var _baseUniq = baseUniq$1;
var baseUniq = _baseUniq;
function uniq$1(array) {
  return array && array.length ? baseUniq(array) : [];
}
var uniq_1 = uniq$1;
var convert$3 = convert_1, func$3 = convert$3("uniq", uniq_1, _falseOptions);
func$3.placeholder = placeholder;
var uniq = func$3;
const isGif = (url) => /(.gif)$/gim.test(url);
const isSvg = (url) => /(.svg)$/gim.test(url);
const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];
const isServerAllowed = (path, config) => {
  const server = path.replace(/https?:\/\/([0-9a-z.:]+)\/\S+/gi, "$1");
  return (config == null ? void 0 : config.allowedServers.indexOf(server)) > -1;
};
const assetUrl = (assetPath) => {
  return encodeURIComponent(encodeURIComponent(assetPath));
};
const urlBuilder = (path, { width = 0, height = 0, filters = [], upscale = true }, config) => {
  if (isSvg(path) || isGif(path) || !ENABLE_RESPONSIVE_IMAGES) {
    return path;
  }
  const imageUrl = assetUrl(path);
  const server = config == null ? void 0 : config.host;
  const hostAndSize = `${server}/${width}x${height}`;
  if (!upscale) {
    filters.push("no_upscale:1");
  }
  let extension = "";
  filters.forEach((filter) => {
    const [filterKey, filterValue] = filter.split(":");
    if (filterKey === "format" && ALLOWED_EXTENSIONS.includes(filterValue)) {
      extension = `.${filterValue}`;
    }
  });
  const chainedFilters = uniq(filters).join(",");
  if (!chainedFilters)
    return `${hostAndSize}/options:false/${imageUrl}`;
  return `${hostAndSize}/${chainedFilters}/${imageUrl}${extension}`;
};
const responsiveImageAttributes = (imagePath, {
  imageSizes,
  breakpoints,
  imageSizesInViewport,
  ratio = 0,
  upscale = true,
  format = "jpg",
  config
} = {}) => {
  if (!imagePath)
    return;
  if (isSvg(imagePath) || isGif(imagePath) || !ENABLE_RESPONSIVE_IMAGES || !isServerAllowed(imagePath, config)) {
    return { src: imagePath, srcSet: "", sizes: "" };
  }
  if (breakpoints.length !== imageSizesInViewport.length)
    return;
  const formatString = `format:${format}`;
  const filters = ["quality:90", formatString];
  const sortedImageSizes = [...imageSizes].sort((a, b) => b - a);
  const imageWidth = sortedImageSizes[0];
  const src = urlBuilder(imagePath, {
    width: imageWidth,
    height: Math.floor(imageWidth * ratio),
    filters,
    upscale
  }, config);
  const srcSet = imageSizes.reduce((sizeAcc, sizeCur) => {
    return sizeAcc.concat(`${urlBuilder(imagePath, {
      width: sizeCur,
      height: Math.floor(sizeCur * ratio),
      filters,
      upscale
    }, config)} ${sizeCur}w`);
  }, []).join(", ");
  const sizes = breakpoints.reduce((acc, cur, idx) => {
    return acc.concat(`(min-width: ${cur}px) calc(${imageSizesInViewport[idx]})`);
  }, [`calc(${imageSizesInViewport[0]})`]).reverse().join(", ");
  return { src, srcSet, sizes };
};
const ONE_IN_XXS_CONTAINER = `100vw - ${CONTAINER_PADDING_THIN * 2}px`;
const ONE_IN_7_COLS = `(100vw - ${CONTAINER_PADDING * 2}px) * (7/12)`;
const ONE_IN_XL_7_COLS = `(${ScreenConfig.XL.min - CONTAINER_PADDING * 2}px) * (7/12))`;
const IMAGE_SIZES = [280, 335, 380, 785, 944];
function getNextClosestValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= value) {
      return array[i];
    }
  }
}
const Image$1 = (props) => {
  const [{
    configResponsiveImageHandler
  }] = useContext(EditorContext);
  const {
    src,
    alt,
    style,
    width,
    height,
    imageLink
  } = props.contentState.getEntity(props.entityKey).getData();
  const lazyComponentRef = useRef(null);
  const isLazyTriggered = useLazyObserver(lazyComponentRef);
  const defaultImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>`;
  let responsiveImage = {
    src,
    sizes: null,
    srcSet: null
  };
  if (isServerAllowed(src, configResponsiveImageHandler)) {
    responsiveImage = style.width && style.height ? responsiveImageAttributes(src, {
      imageSizes: [getNextClosestValue(IMAGE_SIZES, parseInt(style.width))],
      breakpoints: [0],
      imageSizesInViewport: [parseInt(style.width)],
      upscale: false,
      resolutions: 1,
      config: configResponsiveImageHandler
    }) : responsiveImageAttributes(src, {
      imageSizes: IMAGE_SIZES,
      breakpoints: [0, 1080, 1440],
      imageSizesInViewport: [ONE_IN_XXS_CONTAINER, ONE_IN_7_COLS, ONE_IN_XL_7_COLS],
      upscale: false,
      config: configResponsiveImageHandler
    });
  }
  const image = /* @__PURE__ */ jsx("img", {
    src: isLazyTriggered ? responsiveImage.src : defaultImage,
    srcSet: isLazyTriggered ? responsiveImage.srcSet : "",
    sizes: responsiveImage.sizes,
    alt,
    width: width && height ? width : void 0,
    height: width && height ? height : void 0,
    style: {
      width: style["width"]
    }
  });
  if (imageLink) {
    return /* @__PURE__ */ jsx("a", {
      href: imageLink,
      className: "k-u-align-center",
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      ref: lazyComponentRef,
      children: image
    });
  }
  return /* @__PURE__ */ jsx("div", {
    className: "k-u-align-center",
    ref: lazyComponentRef,
    children: image
  });
};
const imageStrategy$1 = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "IMAGE";
  }, callback);
};
var responsiveImageDecorator = {
  strategy: imageStrategy$1,
  component: Image$1
};
const Media = (props) => {
  const {
    html
  } = props.contentState.getEntity(props.entityKey).getData();
  return /* @__PURE__ */ jsx(LazyLoader, {
    children: /* @__PURE__ */ jsx(ResponsiveIframeContainer, {
      ratio: 67.5,
      children: parseHtml(html, {
        sanitize: false
      })
    })
  });
};
const mediaStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "MEDIA";
  }, callback);
};
var lazyMediaDecorator = {
  strategy: mediaStrategy,
  component: Media
};
const Image = (props) => {
  const {
    src,
    alt,
    style,
    width,
    height,
    imageLink
  } = props.contentState.getEntity(props.entityKey).getData();
  const lazyComponentRef = useRef(null);
  const isLazyTriggered = useLazyObserver(lazyComponentRef);
  const defaultImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>`;
  const image = /* @__PURE__ */ jsx("img", {
    src: isLazyTriggered ? src : defaultImage,
    alt,
    width: width && height ? width : void 0,
    height: width && height ? height : void 0,
    style: {
      width: style["width"]
    }
  });
  if (imageLink) {
    return /* @__PURE__ */ jsx("a", {
      href: imageLink,
      className: "k-u-align-center",
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      ref: lazyComponentRef,
      children: image
    });
  }
  return /* @__PURE__ */ jsx("div", {
    className: "k-u-align-center",
    ref: lazyComponentRef,
    children: image
  });
};
const imageStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "IMAGE";
  }, callback);
};
var lazyImageDecorator = {
  strategy: imageStrategy,
  component: Image
};
const Separator = () => {
  return /* @__PURE__ */ jsx("hr", {});
};
const separatorStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "SEPARATOR";
  }, callback);
};
var separatorDecorator = {
  strategy: separatorStrategy,
  component: Separator
};
const BlockQuote = (props) => {
  return props.children.length === 1 && props.children[0].props.text === " " ? null : /* @__PURE__ */ jsx("span", {
    children: props.children
  });
};
const blockQuoteStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "BLOCKQUOTE";
  }, callback);
};
var quoteDecorator = {
  strategy: blockQuoteStrategy,
  component: BlockQuote
};
var baseIsEqual = _baseIsEqual;
function isEqual$1(value, other) {
  return baseIsEqual(value, other);
}
var isEqual_1 = isEqual$1;
var convert$2 = convert_1, func$2 = convert$2("isEqual", isEqual_1);
func$2.placeholder = placeholder;
var isEqual = func$2;
var FUNC_ERROR_TEXT = "Expected a function";
function negate$1(predicate) {
  if (typeof predicate != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return !predicate.call(this);
      case 1:
        return !predicate.call(this, args[0]);
      case 2:
        return !predicate.call(this, args[0], args[1]);
      case 3:
        return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}
var negate_1 = negate$1;
var assignValue = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject = isObject_1, toKey = _toKey;
function baseSet$1(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath$1(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$1;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var arrayMap = _arrayMap, baseIteratee$1 = _baseIteratee, basePickBy = _basePickBy, getAllKeysIn = _getAllKeysIn;
function pickBy$1(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee$1(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_1 = pickBy$1;
var baseIteratee = _baseIteratee, negate = negate_1, pickBy = pickBy_1;
function omitBy$1(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}
var omitBy_1 = omitBy$1;
var convert$1 = convert_1, func$1 = convert$1("omitBy", omitBy_1);
func$1.placeholder = placeholder;
var omitBy = func$1;
const getImageNode$1 = get("children[0]");
const isImageWrapper$1 = flow(get("children[0].nodeName"), isEqual("IMG"));
const isLinkWrapped$1 = flow(get("parentElement.nodeName"), isEqual("A"));
const filterEmptyStyleProps$1 = omitBy(isEmpty);
const performanceDecorators = new CompositeDecorator([linkDecorator, responsiveImageDecorator, lazyMediaDecorator, separatorDecorator, quoteDecorator]);
const lazyDecorators = new CompositeDecorator([linkDecorator, lazyImageDecorator, lazyMediaDecorator, separatorDecorator, quoteDecorator]);
const converter$1 = (html) => {
  return convertFromHTML({
    htmlToStyle: (nodeName, node, currentStyle) => {
      if (node.style && node.style["margin-left"] !== "") {
        return currentStyle.add("MARGIN_LEFT");
      }
      return currentStyle;
    },
    htmlToEntity: (nodeName, node, createEntity) => {
      if (nodeName === "a") {
        if (isImageWrapper$1(node)) {
          const imageNode = getImageNode$1(node);
          return createEntity("IMAGE", "IMMUTABLE", {
            src: imageNode.src,
            alt: imageNode.alt,
            width: imageNode.width,
            height: imageNode.height,
            style: filterEmptyStyleProps$1(imageNode.style),
            imageLink: node.href
          });
        }
        return createEntity("LINK", "MUTABLE", {
          url: node.href
        });
      }
      if (nodeName === "img" && !isLinkWrapped$1(node)) {
        return createEntity("IMAGE", "IMMUTABLE", {
          src: node.src,
          alt: node.alt,
          width: node.width,
          height: node.height,
          style: filterEmptyStyleProps$1(node.style)
        });
      }
      if (nodeName === "iframe") {
        return createEntity("MEDIA", "IMMUTABLE", {
          html: node.outerHTML
        });
      }
      if (nodeName === "hr") {
        return createEntity("SEPARATOR", "IMMUTABLE");
      }
      if (nodeName === "blockquote") {
        return createEntity("BLOCKQUOTE", "IMMUTABLE");
      }
    },
    htmlToBlock: (nodeName, node) => {
      if (["img", "iframe", "hr"].includes(nodeName) || isImageWrapper$1(node)) {
        return "atomic";
      }
      if (node.textContent === " ") {
        return "br";
      }
      if (nodeName === "p" && node.style["text-align"] !== void 0) {
        return {
          type: "paragraph",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "h2" && node.style["text-align"] !== void 0) {
        return {
          type: "header-two",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "h3" && node.style["text-align"] !== void 0) {
        return {
          type: "header-three",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "h4" && node.style["text-align"] !== void 0) {
        return {
          type: "header-four",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "p") {
        return "paragraph";
      }
    }
  })(html);
};
const getImageNode = get("children[0]");
const isImageWrapper = flow(get("children[0].nodeName"), isEqual("IMG"));
const isLinkWrapped = flow(get("parentElement.nodeName"), isEqual("A"));
const filterEmptyStyleProps = omitBy(isEmpty);
new CompositeDecorator([linkDecorator, responsiveImageDecorator, lazyMediaDecorator, separatorDecorator, quoteDecorator]);
new CompositeDecorator([linkDecorator, lazyImageDecorator, lazyMediaDecorator, separatorDecorator, quoteDecorator]);
const converter = (html) => {
  return convertFromHTML({
    htmlToStyle: (nodeName, node, currentStyle) => {
      if (node.style && node.style["margin-left"] !== "") {
        return currentStyle.add("MARGIN_LEFT");
      }
      return currentStyle;
    },
    htmlToEntity: (nodeName, node, createEntity) => {
      if (nodeName === "a") {
        if (isImageWrapper(node)) {
          const imageNode = getImageNode(node);
          return createEntity("IMAGE", "IMMUTABLE", {
            src: imageNode.src,
            alt: imageNode.alt,
            width: imageNode.width,
            height: imageNode.height,
            style: filterEmptyStyleProps(imageNode.style),
            imageLink: node.href
          });
        }
        return createEntity("LINK", "MUTABLE", {
          url: node.href
        });
      }
      if (nodeName === "img" && !isLinkWrapped(node)) {
        return createEntity("IMAGE", "IMMUTABLE", {
          src: node.src,
          alt: node.alt,
          width: node.width,
          height: node.height,
          style: filterEmptyStyleProps(node.style)
        });
      }
      if (nodeName === "iframe") {
        return createEntity("MEDIA", "IMMUTABLE", {
          html: node.outerHTML
        });
      }
      if (nodeName === "hr") {
        return createEntity("SEPARATOR", "IMMUTABLE");
      }
      if (nodeName === "blockquote") {
        return createEntity("BLOCKQUOTE", "IMMUTABLE");
      }
    },
    htmlToBlock: (nodeName, node) => {
      if (["img", "iframe", "hr"].includes(nodeName)) {
        return "atomic";
      }
      if (node.textContent === " ") {
        return "br";
      }
      if (nodeName === "p" && node.style["text-align"] !== void 0) {
        return {
          type: "paragraph",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "h2" && node.style["text-align"] !== void 0) {
        return {
          type: "header-two",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "h3" && node.style["text-align"] !== void 0) {
        return {
          type: "header-three",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "h4" && node.style["text-align"] !== void 0) {
        return {
          type: "header-four",
          data: {
            textAlign: node.style["text-align"]
          }
        };
      }
      if (nodeName === "p") {
        return "paragraph";
      }
    }
  })(html);
};
const blockRenderMap = Map$4({
  paragraph: {
    element: "p"
  }
});
const convertContent = (html, isEdition = false) => {
  const initialContentState = isEdition ? converter(html) : converter$1(html);
  return initialContentState.set("blockMap", initialContentState.getBlockMap().filter((contentblock) => {
    return !(!["atomic", "br"].includes(contentblock.getType()) && contentblock.getText() === "");
  }));
};
const getRawContent = (html, isEdition = false) => {
  return convertToRaw(convertContent(html, isEdition));
};
const createContent = (html) => {
  return EditorState.createWithContent(convertContent(html));
};
const HtmlEditor = ({
  html,
  perfEnabled,
  useRichTextStyle
}) => {
  if (!html)
    return null;
  if (!domElementHelper.canUseDom()) {
    const defaultImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>`;
    const imageRegEx = /<img([\S ]*?) src="[\S]+?"/gm;
    const imageReplacer = `<img $1 src="${defaultImage}"`;
    html = html.replace(imageRegEx, imageReplacer);
    if (perfEnabled) {
      html = html.replace(/<(img|iframe)([\S ]+?) (src=")/gm, "<$1 $2 data-$3");
    }
    return /* @__PURE__ */ jsx("section", {
      className: classNames({
        "kiss-RichText": useRichTextStyle
      }),
      children: parseHtml(html)
    });
  }
  return /* @__PURE__ */ jsx("section", {
    className: classNames({
      "kiss-RichText": useRichTextStyle
    }),
    children: /* @__PURE__ */ jsx(Editor$1, {
      editorState: EditorState.set(html !== null ? createContent(html) : EditorState.createEmpty(), {
        decorator: perfEnabled ? performanceDecorators : lazyDecorators
      }),
      onChange: () => null,
      blockRenderMap: DefaultDraftBlockRenderMap.merge(blockRenderMap),
      blockStyleFn: (contentBlock) => {
        const textAlignStyle = contentBlock.getData().get("textAlign");
        switch (textAlignStyle) {
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
      readOnly: true
    })
  });
};
HtmlEditor.propTypes = {
  useRichTextStyle: PropTypes.bool
};
HtmlEditor.defaultProps = {
  useRichTextStyle: true
};
const isJSONContent$1 = (content) => {
  try {
    JSON.parse(content);
    return true;
  } catch (e) {
    return false;
  }
};
const getJSONContent = (value) => {
  if (!domElementHelper.canUseDom())
    return {};
  return isJSONContent$1(value) ? JSON.parse(value) : getRawContent(value, true);
};
const getEditorValue = (value) => {
  if (!domElementHelper.canUseDom())
    return null;
  if (!value || isEmpty(value)) {
    return EditorState.createEmpty();
  }
  try {
    return EditorState.createWithContent(isJSONContent$1(value) ? convertFromRaw(JSON.parse(value)) : convertFromRaw(getRawContent(value, true)));
  } catch (e) {
    return EditorState.createEmpty();
  }
};
const resetEditor = (editorState) => {
  return EditorState.set(editorState, {
    decorator: new CompositeDecorator([
      decorator$2,
      decorator,
      decorator$1,
      decorator$3,
      linkify$1
    ])
  });
};
const resetTypeOnSelectionAfter = (editorState) => {
  const contentState = editorState.getCurrentContent();
  return EditorState.push(editorState, Modifier.setBlockType(contentState, contentState.getSelectionAfter(), "unstyled"), "change-block-type");
};
const getCurrentAlignmentStyle = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  return currentContent.getBlockForKey(selection.getStartKey()).getData().get("alignmentStyle");
};
const getCurrentBlock = (editorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  return currentContent.getBlockForKey(anchorKey);
};
const getCurrentSelection = (editorState) => {
  const currentContentBlock = getCurrentBlock(editorState);
  const selectionState = editorState.getSelection();
  const start = selectionState.getStartOffset();
  const end = selectionState.getEndOffset();
  return currentContentBlock.getText().slice(start, end);
};
const getEntityKey = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const startKey = editorState.getSelection().getStartKey();
  const startOffset = editorState.getSelection().getStartOffset();
  const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
  return blockWithLinkAtBeginning.getEntityAt(startOffset);
};
const getEntity = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const entityKey = getEntityKey(editorState);
  return !entityKey ? void 0 : contentState.getEntity(entityKey);
};
const getEntityText = (editorState, entityKey) => {
  let text = void 0;
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentContent = contentState.getBlockForKey(selection.getFocusKey());
  currentContent.findEntityRanges((char) => char.getEntity() === entityKey, (start, end) => {
    text = currentContent.getText().slice(start, end);
  });
  return text;
};
const hasEntityFocus = (contentState, editorState, entityKey) => {
  const currentContent = contentState.getBlockForKey(editorState.getSelection().getFocusKey());
  if (!currentContent)
    return false;
  const currentEntityFocused = currentContent.getEntityAt(editorState.getSelection().getStartOffset());
  return entityKey === currentEntityFocused;
};
const isEditorEmpty = (rawTextEditor) => {
  return flow(get("blocks"), reduce((acc, block) => `${acc}${block.text}`, ""), isEmpty)(rawTextEditor);
};
const isPreviousBlockAnImage = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const beforeBlock = currentContent.getBlockBefore(anchorKey);
  const blockType = beforeBlock == null ? void 0 : beforeBlock.get("type");
  return blockType === "atomic";
};
const removeEntities = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const currentBlock = currentContent.getBlockForKey(selectionState.getAnchorKey());
  const entity = currentBlock.getEntityAt(selectionState.getStartOffset());
  let entitySelection = null;
  currentBlock.findEntityRanges((character) => {
    return character.getEntity() === entity;
  }, (start, end) => {
    entitySelection = selectionState.merge({
      anchorOffset: start,
      focusOffset: end
    });
  });
  const newContentState = Modifier.applyEntity(currentContent, entitySelection, null);
  return EditorState.push(editorState, newContentState, "apply-entity");
};
const isPreviousEmptyBlock = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = currentContent.getSelectionBefore();
  const anchorKey = selectionState.getAnchorKey();
  const curentBlock = currentContent.getBlockForKey(anchorKey);
  return flow(trim, isEmpty)(curentBlock.getText());
};
const isEmptyBlock = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const curentBlock = currentContent.getBlockForKey(anchorKey);
  return flow(trim, isEmpty)(curentBlock.getText());
};
const isFirstBlock = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const beforeBlock = currentContent.getBlockBefore(anchorKey);
  return !beforeBlock;
};
const isCurrentBlockAllSelected = (editorState) => {
  var _a, _b, _c;
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const blockTextLength = (_a = currentContentBlock == null ? void 0 : currentContentBlock.get("text")) == null ? void 0 : _a.length;
  const start = (_b = selectionState == null ? void 0 : selectionState.getStartOffset()) != null ? _b : 0;
  const end = (_c = selectionState == null ? void 0 : selectionState.getEndOffset()) != null ? _c : 0;
  return blockTextLength === end - start;
};
const removePreviousEmptyBlock = (editorState) => {
  const blockMap = editorState.getCurrentContent().getBlockMap().delete(editorState.getCurrentContent().getSelectionBefore().getFocusKey());
  const newContentStateWithoutBlock = editorState.getCurrentContent().merge({
    blockMap
  });
  return EditorState.push(editorState, newContentStateWithoutBlock, "remove-range");
};
const removeCurrentBlock = (editorState, blockKey) => {
  const contentState = editorState.getCurrentContent();
  const contentBlock = contentState.getBlockForKey(blockKey);
  let targetRange = SelectionState.createEmpty(contentBlock.getKey());
  targetRange = targetRange.merge({
    anchorKey: contentBlock.getKey(),
    anchorOffset: 0,
    focusKey: contentBlock.getKey(),
    focusOffset: contentBlock.getLength()
  });
  const newContentState = Modifier.removeRange(contentState, targetRange, "backward");
  const blockMap = newContentState.getBlockMap().delete(blockKey);
  const newContentStateWithoutBlock = newContentState.merge({
    blockMap
  });
  return EditorState.push(editorState, newContentStateWithoutBlock, "remove-range");
};
const moveSelectionTo = (editorState, anchorKey, focusOffset = 0) => {
  const selectionState = SelectionState.createEmpty(anchorKey).merge({
    focusOffset
  });
  return EditorState.forceSelection(editorState, selectionState);
};
const removeDataFromEntity = (editorState, entityKey, propsArray) => {
  const entityData = editorState.getCurrentContent().getEntity(entityKey).getData();
  const newContentState = editorState.getCurrentContent().replaceEntityData(entityKey, omit(propsArray)(entityData));
  return EditorState.push(editorState, newContentState, "apply-entity");
};
const forceSelection = (editorState) => {
  var _a, _b;
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const previousKey = editorState.getCurrentContent().getKeyBefore(anchorKey);
  const nextKey = editorState.getCurrentContent().getKeyAfter(anchorKey);
  const previousBlock = editorState.getCurrentContent().getBlockBefore(anchorKey);
  if (!nextKey && !previousKey) {
    const emptyEditor = resetEditor(EditorState.createEmpty());
    return EditorState.moveSelectionToEnd(emptyEditor);
  }
  let newSelectionState = SelectionState.createEmpty(previousKey || nextKey);
  newSelectionState = newSelectionState.merge({
    anchorOffset: (_a = previousBlock == null ? void 0 : previousBlock.getLength()) != null ? _a : 0,
    focusOffset: (_b = previousBlock == null ? void 0 : previousBlock.getLength()) != null ? _b : 0
  });
  return EditorState.forceSelection(removeCurrentBlock(editorState, anchorKey), newSelectionState);
};
const isImageBlock = (entity) => {
  var _a;
  const src = (_a = entity == null ? void 0 : entity.get("data")) == null ? void 0 : _a.src;
  return isImageDom(src) || isImageFile(src);
};
const isImageFile = (src) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(src);
const isImageDom = (src) => /<img.*?src="(.*?)"[^\\>]+>/.test(src);
const getImageUrl = (src) => {
  var _a;
  const [, url] = (_a = src == null ? void 0 : src.match(/src\s*=\s*"(.+?)"/)) != null ? _a : [];
  return url || src;
};
const isVideoBlock = (entity) => {
  var _a, _b;
  return !!((_a = entity == null ? void 0 : entity.get("data")) == null ? void 0 : _a.embedlyHtml) || !!((_b = entity == null ? void 0 : entity.get("data")) == null ? void 0 : _b.html);
};
const addBlockAfter = (editorState, keyBefore, blockParams = {}) => {
  const newBlock = new ContentBlock(__spreadValues({
    key: genKey(),
    type: "unstyled",
    text: ""
  }, blockParams));
  const contentState = editorState.getCurrentContent();
  const oldBlockMap = contentState.getBlockMap();
  const newBlockMap = OrderedMap().withMutations((map) => {
    for (let [k, v] of oldBlockMap.entries()) {
      map.set(k, v);
      if (keyBefore === k) {
        map.set(newBlock.getKey(), newBlock);
      }
    }
  });
  return EditorState.forceSelection(EditorState.push(editorState, ContentState.createFromBlockArray(Array.from(newBlockMap.values())).set("selectionBefore", contentState.getSelectionBefore()).set("selectionAfter", contentState.getSelectionAfter())), SelectionState.createEmpty(newBlock.getKey()));
};
const createMediaBlock = (editorState, data = {}) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity("VIDEO", "MUTABLE", data);
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, " ");
};
const EditorStyle = createGlobalStyle`
  .public-DraftEditorPlaceholder-root {
    ${TYPOGRAPHY.fontStyles.light};
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(32)};
    color: ${COLORS.font2};
    position: absolute;
    z-index: -1;
  }

  .public-DraftEditor-content {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(32)};
  }

  .DraftEditor-editorContainer {
    ${TYPOGRAPHY.fontStyles.light};
    color: ${COLORS.font1};
    cursor: text;
    word-break: break-word;
    letter-spacing: 0;

    .public-DraftStyleDefault-ul {
      margin-top: ${pxToRem(10)};
      margin-bottom: ${pxToRem(10)};
      list-style: disc;

      .public-DraftStyleDefault-unorderedListItem {
        margin-left: ${pxToRem(20)};
      }
    }

    .kiss-Draft__image-read, .kiss-Draft__media-read {
      margin: ${pxToRem(40)} auto;
    }
    
    .kiss-Draft__image, .kiss-Draft__media {
      margin: ${pxToRem(34)} auto;
      display: flex;
      justify-content: center;
      
      img {
        display: block;
      }
    }

    .kiss-Draft__media-focus {
      padding: ${pxToRem(2)};
      border: ${pxToRem(4)} solid ${COLORS.background1};
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

    .kiss-Draft__image-focus {
      width: fit-content;
      padding: ${pxToRem(2)};
      border: ${pxToRem(4)} solid ${COLORS.background1};
      cursor: pointer;
      transition: all ease-in-out 100ms;
    }

    .kiss-Draft__image-focus:hover, .kiss-Draft__media-focus:hover {
      border-color: ${COLORS.primary4};
    }

    .kiss-Draft__image-focus__focused, .kiss-Draft__media-focus__focused {
      border-color: ${COLORS.primary1} !important;
      caret-color: transparent;
    }

    blockquote {
      font-style: italic;
      padding-left: ${pxToRem(15)};
      margin-left: ${pxToRem(50)};
      margin-top: ${pxToRem(20)};
      margin-bottom: ${pxToRem(20)};
      border-left: ${pxToRem(3)} solid ${COLORS.line1};
    }
  }

  .DraftEditor-editorContainer__disabled {
    color: ${COLORS.font2};
    cursor: not-allowed;

    a {
      color: ${COLORS.line2};
      &:hover,
      &:focus {
        color: ${COLORS.line2};
      }
    }
  }

  .DraftEditor-editorContainer__no-richText {
    font-size: ${pxToRem(14)};
  }

  .DraftEditor-editorContainer__compact {
    line-height: ${pxToRem(20)};
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
    margin: ${pxToRem(10)} auto;
  }
`;
const styleBlock = ({ isDisabled, useRichTextStyle, compact }) => (contentBlock) => {
  const alignmentStyle = contentBlock.getData().get("alignmentStyle");
  return classNames({
    "DraftEditor-editorContainer__disabled": isDisabled,
    "DraftEditor-editorContainer__richText": useRichTextStyle,
    "DraftEditor-editorContainer__no-richText": !useRichTextStyle,
    "DraftEditor-editorContainer__compact": compact,
    [alignmentStyle]: alignmentStyle
  });
};
var keyCommandHandler = (onChange) => (command, editorState) => {
  const currentEntity = getEntity(editorState);
  if (command === "backspace" && isImageBlock(currentEntity) || isVideoBlock(currentEntity)) {
    onChange(forceSelection(editorState));
    return "handled";
  }
  if (command === "backspace" && (currentEntity == null ? void 0 : currentEntity.getType()) === "IMAGE") {
    onChange(removeEntities(editorState));
    return "handled";
  }
  if (command === "backspace" && isCurrentBlockAllSelected(editorState) && isPreviousBlockAnImage(editorState)) {
    onChange(forceSelection(editorState));
    return "handled";
  }
  if (command === "backspace" && isFirstBlock(editorState) && isEmptyBlock(editorState)) {
    onChange(forceSelection(editorState));
    return "handled";
  }
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    onChange(newState);
    return "handled";
  }
  return "not-handled";
};
var returnHandler = (onChange) => (event, editorState) => {
  const contentState = editorState.getCurrentContent();
  const currentKey = editorState.getSelection().getAnchorKey();
  const currentBlock = contentState.getBlockForKey(currentKey);
  const currentEntity = getEntity(editorState);
  if (isVideoBlock(currentEntity) || isImageBlock(currentEntity)) {
    onChange(addBlockAfter(editorState, currentKey));
    return "handled";
  }
  if (currentBlock.getText() === "" && ["unordered-list-item", "blockquote"].includes(currentBlock.getType())) {
    onChange(resetTypeOnSelectionAfter(editorState));
    return "handled";
  }
  if (["header-two", "header-three"].includes(currentBlock.getType())) {
    onChange(addBlockAfter(editorState, currentKey));
    return "handled";
  }
  return "not-handled";
};
const customBlockRenderMap = DefaultDraftBlockRenderMap.merge(Map$4({
  "header-one": {
    element: "span",
    wrapper: /* @__PURE__ */ jsx(Title$1, {
      tag: "h1",
      modifier: "secondary",
      noMargin: true,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@s-up"
    })
  },
  "header-two": {
    element: "span",
    wrapper: /* @__PURE__ */ jsx(Title$1, {
      tag: "h2",
      modifier: "tertiary",
      noMargin: true,
      className: "k-u-margin-bottom-singleHalf k-u-margin-bottom-double@l-up"
    })
  },
  "header-three": {
    element: "span",
    wrapper: /* @__PURE__ */ jsx(Title$1, {
      tag: "h3",
      modifier: "quaternary",
      noMargin: true,
      className: "k-u-margin-bottom-singleHalf"
    })
  },
  "header-four": {
    element: "span",
    wrapper: /* @__PURE__ */ jsx(Title$1, {
      tag: "h4",
      modifier: "quinary",
      noMargin: true,
      className: "k-u-margin-bottom-single k-u-margin-bottom-singleHalf@s-up"
    })
  }
}));
const Wrapper$1 = styled.div`
  border-radius: var(--border-radius-s);
  cursor: text;

  &.u-Editor--hasBorder {
    border: var(--border);
    padding: ${pxToRem(15)};

    &.u-Editor--focused, &:focus-within {
      border: var(--border-active);
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    &.u-Editor--hasError {
      border: var(--border-danger);
    }
  }
`;
const Playground = (_g) => {
  var _h = _g, {
    className,
    hasError,
    onFocus,
    onBlur,
    rawValue,
    initialValue,
    placeholder: placeholder2,
    withoutBorder,
    useRichTextStyle,
    isDisabled,
    compact
  } = _h, props = __objRest(_h, [
    "className",
    "hasError",
    "onFocus",
    "onBlur",
    "rawValue",
    "initialValue",
    "placeholder",
    "withoutBorder",
    "useRichTextStyle",
    "isDisabled",
    "compact"
  ]);
  const playgroundRef = useRef(null);
  const [{
    editorState,
    focus
  }, dispatch] = useContext(EditorContext);
  const onChange = (editorState2) => dispatch(updateEditor(editorState2));
  useEffect(() => {
    props.onChange(rawValue ? convertToRaw(editorState.getCurrentContent()) : editorState.getCurrentContent());
  }, [editorState]);
  useEffect(() => {
    dispatch(updateEditorRef(playgroundRef));
  }, [playgroundRef]);
  useEffect(() => {
    onChange(resetEditor(getEditorValue(initialValue)));
  }, [initialValue]);
  const handleWrapperClick = (event) => {
    if (!(playgroundRef == null ? void 0 : playgroundRef.current))
      return;
    playgroundRef.current.focus();
  };
  return /* @__PURE__ */ jsxs(Wrapper$1, {
    className: classNames("u-Editor", className, {
      "u-Editor--hasError": hasError,
      "u-Editor--focused": focus,
      "u-Editor--hasBorder": !withoutBorder
    }),
    onClick: handleWrapperClick,
    children: [/* @__PURE__ */ jsx(EditorStyle, {}), /* @__PURE__ */ jsx(Paragraph, {
      "data-test-id": props["data-test-id"],
      tag: "section",
      modifier: "tertiary",
      noMargin: true,
      className: classNames("u-Editor__root", {
        "u-Editor__compact": compact
      }),
      children: /* @__PURE__ */ jsx(Editor$1, {
        ref: playgroundRef,
        editorState,
        placeholder: placeholder2,
        readOnly: isDisabled,
        handleKeyCommand: keyCommandHandler(onChange),
        handleReturn: returnHandler(onChange),
        onChange,
        onFocus: () => {
          dispatch(setFocus(true));
          onFocus();
        },
        onBlur: () => {
          dispatch(setFocus(false));
          onBlur();
        },
        blockStyleFn: styleBlock({
          isDisabled,
          useRichTextStyle,
          compact
        }),
        blockRenderMap: customBlockRenderMap
      })
    })]
  });
};
Playground.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInit: PropTypes.func,
  hasError: PropTypes.bool,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rawValue: PropTypes.bool,
  placeholder: PropTypes.string,
  withoutBorder: PropTypes.bool,
  useRichTextStyle: PropTypes.bool,
  isDisabled: PropTypes.bool,
  compact: PropTypes.bool
};
Playground.defaultProps = {
  onChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
  hasError: false,
  initialValue: EditorState.createEmpty(),
  rawValue: true,
  placeholder: "",
  withoutBorder: false,
  useRichTextStyle: false,
  isDisabled: false,
  compact: false
};
const Toolbar = styled.div`
  display: flex;
  overflow-y: scroll;
  padding: ${pxToRem(12)} 0;
  background-color: ${COLORS.background3};

  > :last-child {
    margin-right: 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    overflow-y: initial;
    padding: ${pxToRem(15)} 0;
  }

  &.Editor-Toolbar__whiteMode {
    background-color: ${COLORS.background1};
  }

  &.Editor-Toolbar__centered {
    justify-content: center;
  }

  ${({
  whiteMode
}) => whiteMode && css`
      background-color: ${COLORS.background1};
    `}
`;
const Wrapper = styled(Details)`
  summary.Editor__toolbar__tagListToggle {
    border-radius: ${pxToRem(8)};

    .Editor__toolbar__tagListToggle__button {
      pointer-events: none;
      width: ${pxToRem(75)};
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
  disabled
}) => disabled && css`
      pointer-events: none;
      cursor: not-allowed;
    `}

  .Editor__toolbar__tagsList {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    width: ${pxToRem(75)};
    list-style: none;
    margin: 0;
    padding: 0;

    & li:last-child .Editor__toolbar__tagsList__Item {
      border-bottom: var(--border, ${pxToRem(1)} solid ${COLORS.line1});
    }

    .Editor__toolbar__tagsList__Item {
      width: 100%;
      position: relative;
      padding: ${pxToRem(15)} ${pxToRem(20)};
      background-color: var(--color-grey-000);
      border: ${pxToRem(1)} solid transparent;
      border-left: var(--border, ${pxToRem(1)} solid ${COLORS.line1});
      border-right: var(--border, ${pxToRem(1)} solid ${COLORS.line1});
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
          fill: ${COLORS.primary1};
        }
      }

    }

  }
`;
const componentByTagType = (tagType) => {
  switch (tagType) {
    case "header-one":
      return /* @__PURE__ */ jsx(Title1Icon, {});
    case "header-two":
      return /* @__PURE__ */ jsx(Title2Icon, {});
    case "header-three":
      return /* @__PURE__ */ jsx(Title3Icon, {});
    case "header-four":
      return /* @__PURE__ */ jsx(Title4Icon, {});
    case "unstyled":
    default:
      return /* @__PURE__ */ jsx(ParagraphIcon, {});
  }
};
const TagsList = ({
  disabled,
  onChange,
  tags
}) => {
  const [{
    editorState,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentBlockType = currentContent.getBlockForKey(selection.getStartKey()).getType();
  useEffect(() => {
    onChange(currentBlockType);
  }, [currentBlockType]);
  const handleClick = (type) => () => {
    dispatch(updateEditor(RichUtils.toggleBlockType(editorState, type)));
  };
  return /* @__PURE__ */ jsx(Wrapper, {
    summaryRender: ({
      open
    }) => /* @__PURE__ */ jsxs(StyledButton, {
      className: "Editor__toolbar__tagListToggle__button",
      tabIndex: "-1",
      disabled: contextDisabled || disabled,
      fit: "icon",
      tag: "span",
      active: open,
      children: [componentByTagType(currentBlockType), /* @__PURE__ */ jsx(ArrowIcon, {
        width: "6",
        direction: open ? "top" : "bottom"
      })]
    }),
    summaryProps: {
      className: "Editor__toolbar__tagListToggle"
    },
    disabled: contextDisabled || disabled,
    children: /* @__PURE__ */ jsx("ul", {
      className: "Editor__toolbar__tagsList",
      children: tags.map((tag) => {
        const component = componentByTagType(tag);
        if (!component)
          return;
        return /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx("button", {
            onClick: handleClick(tag),
            type: "button",
            "aria-selected": tag === currentBlockType,
            className: "Editor__toolbar__tagsList__Item",
            children: component
          })
        }, tag);
      })
    })
  }, currentContent);
};
TagsList.propTypes = {
  tags: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
TagsList.defaultProps = {
  tags: ["header-one", "header-two", "header-three", "header-four", "unstyled"],
  disabled: false,
  onChange: () => null
};
const Actions = styled.div`
  display: flex;

  > * {
    margin-left: calc(-1 * var(--border-width, 1px));
  }

  :first-child > :first-child {
    margin-left: 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-right: ${pxToRem(20)};

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
`;
const Quote = ({
  disabled,
  onChange
}) => {
  const [{
    editorState,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentBlockType = currentContent.getBlockForKey(selection.getStartKey()).get("type");
  const active = currentBlockType === "blockquote";
  return /* @__PURE__ */ jsx(Button, {
    icon: "quote",
    active,
    disabled: contextDisabled || disabled,
    onToggle: () => {
      onChange();
      dispatch(updateEditor(RichUtils.toggleBlockType(editorState, "blockquote")));
    }
  });
};
Quote.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Quote.defaultProps = {
  disabled: false,
  onChange: () => null
};
const UnorderedList = ({
  disabled,
  onChange
}) => {
  const [{
    editorState,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentBlockType = currentContent.getBlockForKey(selection.getStartKey()).get("type");
  return /* @__PURE__ */ jsx(Button, {
    active: currentBlockType === "unordered-list-item",
    icon: "format_list_bulleted",
    onToggle: (blockType) => {
      onChange();
      dispatch(updateEditor(RichUtils.toggleBlockType(editorState, blockType)));
    },
    style: "unordered-list-item",
    disabled: disabled || contextDisabled
  }, "format_list_bulleted");
};
UnorderedList.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
UnorderedList.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Bold = ({
  disabled,
  onChange
}) => {
  const [{
    editorState,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const currentStyle = editorState.getCurrentInlineStyle();
  return /* @__PURE__ */ jsx(Button, {
    active: currentStyle.has("BOLD"),
    icon: "format_bold",
    onToggle: (style) => {
      onChange();
      dispatch(updateEditor(RichUtils.toggleInlineStyle(editorState, style)));
    },
    style: "BOLD",
    disabled: contextDisabled || disabled
  }, "format_bold");
};
Bold.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Bold.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Italic = ({
  disabled,
  onChange
}) => {
  const [{
    editorState,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const currentStyle = editorState.getCurrentInlineStyle();
  return /* @__PURE__ */ jsx(Button, {
    active: currentStyle.has("ITALIC"),
    icon: "format_italic",
    onToggle: (style) => {
      onChange();
      dispatch(updateEditor(RichUtils.toggleInlineStyle(editorState, style)));
    },
    style: "ITALIC",
    disabled: contextDisabled || disabled
  }, "format_italic");
};
Italic.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Italic.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Generic = ({
  disabled,
  label,
  onChange
}) => {
  var _a;
  const [{
    editorState,
    disabled: contextDisabled
  }, dispatch] = useContext(EditorContext);
  const currentAlignmentStyle = (_a = getCurrentAlignmentStyle(editorState)) != null ? _a : "k-u-align-left";
  return /* @__PURE__ */ jsx(Button, {
    icon: label,
    disabled: contextDisabled || disabled,
    active: currentAlignmentStyle === label,
    onToggle: () => {
      onChange();
      const currentContent = editorState.getCurrentContent();
      const selection = editorState.getSelection();
      dispatch(updateEditor(EditorState.push(editorState, Modifier.setBlockData(currentContent, selection, Map$4({
        alignmentStyle: label
      })), "change-inline-style")));
    }
  }, label);
};
Generic.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Generic.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Left = (props) => {
  return /* @__PURE__ */ jsx(Generic, __spreadValues({
    label: "k-u-align-left"
  }, props));
};
Left.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Left.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Right = (props) => {
  return /* @__PURE__ */ jsx(Generic, __spreadValues({
    label: "k-u-align-right"
  }, props));
};
Right.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Right.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Center = (props) => {
  return /* @__PURE__ */ jsx(Generic, __spreadValues({
    label: "k-u-align-center"
  }, props));
};
Center.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Center.defaultProps = {
  disabled: false,
  onChange: () => null
};
const Controls = ({
  whiteMode,
  disabled,
  className,
  centered,
  children
}) => {
  const [, dispatch] = useContext(EditorContext);
  useEffect(() => {
    dispatch(updateState({
      disabled
    }));
  }, [disabled]);
  return /* @__PURE__ */ jsx(Toolbar, {
    className: classNames(className, {
      "Editor-Toolbar__whiteMode": whiteMode,
      "Editor-Toolbar__centered": centered
    }),
    children
  });
};
Controls.Image = ImageControls;
Controls.TagList = TagsList;
Controls.Bold = Bold;
Controls.Italic = Italic;
Controls.Quote = Quote;
Controls.Left = Left;
Controls.Right = Right;
Controls.Center = Center;
Controls.UnorderedList = UnorderedList;
Controls.Link = LinkControls;
Controls.Button = ButtonLinkControls;
Controls.Video = VideoControls;
Controls.Group = Actions;
Controls.propTypes = {
  disabled: PropTypes.bool,
  whiteMode: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string
};
Controls.defaultProps = {
  disabled: false,
  whiteMode: false,
  centered: false
};
var convert = convert_1, func = convert("memoize", memoize_1);
func.placeholder = placeholder;
var memoize = func;
const getinitialValue = memoize((value) => {
  if (!domElementHelper.canUseDom())
    return null;
  if (!value) {
    return EditorState.createEmpty();
  }
  try {
    return EditorState.createWithContent(convertFromRaw(JSON.parse(value)), new CompositeDecorator([readDecorator$2, readDecorator, readDecorator$1, readDecorator$3, linkify$1]));
  } catch (e) {
    const blocksFromHTML = convertFromHTML$1(`<p>${value}</p>`);
    const contentState = ContentState.createFromBlockArray(blocksFromHTML);
    return EditorState.createWithContent(contentState);
  }
});
const isJSONContent = (content) => {
  try {
    JSON.parse(content);
    return true;
  } catch (e) {
    return false;
  }
};
const renderRaw = (text) => {
  try {
    const value = JSON.parse(text);
    const render = value.blocks.reduce((acc, value2) => `${acc} ${value2.text}`, "");
    return /* @__PURE__ */ jsx("div", {
      children: render
    });
  } catch (e) {
    return /* @__PURE__ */ jsx("div", {
      children: text
    });
  }
};
const DraftDisplayer = ({
  text,
  useRichTextStyle,
  perfEnabled,
  isDisabled,
  compact,
  configResponsiveImageHandler
}) => {
  if (!domElementHelper.canUseDom())
    return renderRaw(text);
  return isJSONContent(text) ? /* @__PURE__ */ jsxs(EditorProvider, {
    configResponsiveImageHandler,
    children: [/* @__PURE__ */ jsx(EditorStyle, {}), /* @__PURE__ */ jsx("section", {
      className: classNames("u-Editor__root", {
        "u-Editor__compact": compact
      }),
      children: /* @__PURE__ */ jsx(Editor$1, {
        onChange: () => null,
        editorState: getinitialValue(text),
        blockStyleFn: styleBlock({
          isDisabled,
          useRichTextStyle,
          compact
        }),
        blockRenderMap: customBlockRenderMap,
        readOnly: true
      })
    })]
  }) : /* @__PURE__ */ jsx(EditorProvider, {
    configResponsiveImageHandler,
    children: /* @__PURE__ */ jsx(HtmlEditor, {
      html: text,
      perfEnabled,
      useRichTextStyle
    })
  });
};
DraftDisplayer.propTypes = {
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  useRichTextStyle: PropTypes.bool,
  isDisabled: PropTypes.bool,
  perfEnabled: PropTypes.bool,
  compact: PropTypes.bool
};
DraftDisplayer.defaultProps = {
  useRichTextStyle: false,
  isDisabled: false,
  perfEnabled: false,
  compact: false
};
const TitleStyle = createGlobalStyle`
  .DraftEditor-wrapper {
      .public-DraftEditorPlaceholder-root {
        ${TYPOGRAPHY.fontStyles.bold};
        font-size: ${pxToRem(28)};
        @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
          font-size: ${pxToRem(36)};
        }
        @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
          font-size: ${pxToRem(48)};
        }
      }
  }
  .DraftEditor-editorContainer__title {
    ${TYPOGRAPHY.fontStyles.bold};
    font-size: ${pxToRem(28)};
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      font-size: ${pxToRem(36)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      font-size: ${pxToRem(48)};
    }
  }
`;
const Title = ({
  onFocus,
  onBlur,
  onChange,
  initialValue,
  placeholder: placeholder2
}) => {
  const [editorState, updateEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    updateEditorState(createContent(initialValue));
  }, [initialValue]);
  return /* @__PURE__ */ jsxs("div", {
    className: "DraftEditor-wrapper",
    children: [/* @__PURE__ */ jsx(TitleStyle, {}), /* @__PURE__ */ jsx(Editor$1, {
      editorState,
      onChange: (newsEditorState) => {
        updateEditorState(newsEditorState);
        onChange(stateToHTML(newsEditorState.getCurrentContent(), {
          defaultBlockTag: "span",
          blockStyleFn: () => {
            return {
              style: {
                display: "block"
              }
            };
          }
        }));
      },
      onFocus,
      onBlur,
      placeholder: placeholder2,
      blockStyleFn: () => {
        return "DraftEditor-editorContainer__title";
      }
    })]
  });
};
Title.propTypes = {
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};
Title.defaultProps = {
  initalValue: "",
  placeholder: "",
  onFocus: () => null,
  onBlur: () => null,
  onChange: () => null
};
const defaultTranslations = {
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
      delete: "Delete"
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
    label: "URL:",
    url: "URL:",
    preview: "Preview",
    upload: "Select a file on your computer",
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
};
const Editor = ({
  onInit,
  translations,
  configResponsiveImageHandler,
  children
}) => {
  useEffect(() => {
    onInit();
  }, []);
  return /* @__PURE__ */ jsx(EditorProvider, {
    translations: __spreadValues(__spreadValues({}, defaultTranslations), translations),
    configResponsiveImageHandler,
    children
  });
};
const editorPropTypes = {
  props: {
    onInit: PropTypes.func,
    configResponsiveImageHandler: PropTypes.shape({}),
    translations: PropTypes.shape()
  },
  defaultProps: {
    onInit: () => null,
    configResponsiveImageHandler: {},
    translations: {}
  }
};
Editor.propTypes = editorPropTypes.props;
Editor.defaultProps = editorPropTypes.defaultProps;
export { Controls, DraftDisplayer as Displayer, Editor, Playground, Title, editorPropTypes, getJSONContent, isEditorEmpty };
