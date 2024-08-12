function JS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ag = { exports: {} },
  Va = {},
  Ng = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ui = Symbol.for("react.element"),
  eC = Symbol.for("react.portal"),
  tC = Symbol.for("react.fragment"),
  nC = Symbol.for("react.strict_mode"),
  rC = Symbol.for("react.profiler"),
  oC = Symbol.for("react.provider"),
  iC = Symbol.for("react.context"),
  sC = Symbol.for("react.forward_ref"),
  aC = Symbol.for("react.suspense"),
  lC = Symbol.for("react.memo"),
  cC = Symbol.for("react.lazy"),
  Cp = Symbol.iterator;
function uC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cp && e[Cp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mg = Object.assign,
  Dg = {};
function Po(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dg),
    (this.updater = n || Rg);
}
Po.prototype.isReactComponent = {};
Po.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Po.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _g() {}
_g.prototype = Po.prototype;
function ad(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dg),
    (this.updater = n || Rg);
}
var ld = (ad.prototype = new _g());
ld.constructor = ad;
Mg(ld, Po.prototype);
ld.isPureReactComponent = !0;
var Ep = Array.isArray,
  jg = Object.prototype.hasOwnProperty,
  cd = { current: null },
  Ig = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jg.call(t, r) && !Ig.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ui,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: cd.current,
  };
}
function dC(e, t) {
  return {
    $$typeof: Ui,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ud(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ui;
}
function fC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pp = /\/+/g;
function jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fC("" + e.key)
    : t.toString(36);
}
function Is(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ui:
          case eC:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + jl(s, 0) : r),
      Ep(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pp, "$&/") + "/"),
          Is(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (ud(o) &&
            (o = dC(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ep(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + jl(i, a);
      s += Is(i, t, n, l, o);
    }
  else if (((l = uC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + jl(i, a++)), (s += Is(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function is(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Is(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function pC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ze = { current: null },
  Ls = { transition: null },
  hC = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: Ls,
    ReactCurrentOwner: cd,
  };
function Og() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: is,
  forEach: function (e, t, n) {
    is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ud(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Po;
ee.Fragment = tC;
ee.Profiler = rC;
ee.PureComponent = ad;
ee.StrictMode = nC;
ee.Suspense = aC;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hC;
ee.act = Og;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Mg({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = cd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      jg.call(t, l) &&
        !Ig.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ui, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: iC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: oC, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Lg;
ee.createFactory = function (e) {
  var t = Lg.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: sC, render: e };
};
ee.isValidElement = ud;
ee.lazy = function (e) {
  return { $$typeof: cC, _payload: { _status: -1, _result: e }, _init: pC };
};
ee.memo = function (e, t) {
  return { $$typeof: lC, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = Ls.transition;
  Ls.transition = {};
  try {
    e();
  } finally {
    Ls.transition = t;
  }
};
ee.unstable_act = Og;
ee.useCallback = function (e, t) {
  return Ze.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return Ze.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return Ze.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return Ze.current.useEffect(e, t);
};
ee.useId = function () {
  return Ze.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return Ze.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return Ze.current.useRef(e);
};
ee.useState = function (e) {
  return Ze.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return Ze.current.useTransition();
};
ee.version = "18.3.1";
Ng.exports = ee;
var x = Ng.exports;
const J = sd(x),
  mC = JS({ __proto__: null, default: J }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gC = x,
  vC = Symbol.for("react.element"),
  yC = Symbol.for("react.fragment"),
  xC = Object.prototype.hasOwnProperty,
  wC = gC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  SC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) xC.call(t, r) && !SC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: vC,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: wC.current,
  };
}
Va.Fragment = yC;
Va.jsx = Fg;
Va.jsxs = Fg;
Ag.exports = Va;
var w = Ag.exports,
  Mc = {},
  Vg = { exports: {} },
  ht = {},
  zg = { exports: {} },
  Bg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, _) {
    var B = N.length;
    N.push(_);
    e: for (; 0 < B; ) {
      var W = (B - 1) >>> 1,
        K = N[W];
      if (0 < o(K, _)) (N[W] = _), (N[B] = K), (B = W);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var _ = N[0],
      B = N.pop();
    if (B !== _) {
      N[0] = B;
      e: for (var W = 0, K = N.length, ie = K >>> 1; W < ie; ) {
        var oe = 2 * (W + 1) - 1,
          fe = N[oe],
          te = oe + 1,
          V = N[te];
        if (0 > o(fe, B))
          te < K && 0 > o(V, fe)
            ? ((N[W] = V), (N[te] = B), (W = te))
            : ((N[W] = fe), (N[oe] = B), (W = oe));
        else if (te < K && 0 > o(V, B)) (N[W] = V), (N[te] = B), (W = te);
        else break e;
      }
    }
    return _;
  }
  function o(N, _) {
    var B = N.sortIndex - _.sortIndex;
    return B !== 0 ? B : N.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    u = null,
    f = 3,
    y = !1,
    m = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= N)
        r(c), (_.sortIndex = _.expirationTime), t(l, _);
      else break;
      _ = n(c);
    }
  }
  function C(N) {
    if (((v = !1), g(N), !m))
      if (n(l) !== null) (m = !0), O(E);
      else {
        var _ = n(c);
        _ !== null && I(C, _.startTime - N);
      }
  }
  function E(N, _) {
    (m = !1), v && ((v = !1), h(P), (P = -1)), (y = !0);
    var B = f;
    try {
      for (
        g(_), u = n(l);
        u !== null && (!(u.expirationTime > _) || (N && !R()));

      ) {
        var W = u.callback;
        if (typeof W == "function") {
          (u.callback = null), (f = u.priorityLevel);
          var K = W(u.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof K == "function" ? (u.callback = K) : u === n(l) && r(l),
            g(_);
        } else r(l);
        u = n(l);
      }
      if (u !== null) var ie = !0;
      else {
        var oe = n(c);
        oe !== null && I(C, oe.startTime - _), (ie = !1);
      }
      return ie;
    } finally {
      (u = null), (f = B), (y = !1);
    }
  }
  var T = !1,
    b = null,
    P = -1,
    A = 5,
    k = -1;
  function R() {
    return !(e.unstable_now() - k < A);
  }
  function M() {
    if (b !== null) {
      var N = e.unstable_now();
      k = N;
      var _ = !0;
      try {
        _ = b(!0, N);
      } finally {
        _ ? $() : ((T = !1), (b = null));
      }
    } else T = !1;
  }
  var $;
  if (typeof p == "function")
    $ = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      L = F.port2;
    (F.port1.onmessage = M),
      ($ = function () {
        L.postMessage(null);
      });
  } else
    $ = function () {
      S(M, 0);
    };
  function O(N) {
    (b = N), T || ((T = !0), $());
  }
  function I(N, _) {
    P = S(function () {
      N(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), O(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = f;
      }
      var B = f;
      f = _;
      try {
        return N();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, _) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var B = f;
      f = N;
      try {
        return _();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (N, _, B) {
      var W = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? W + B : W))
          : (B = W),
        N)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = B + K),
        (N = {
          id: d++,
          callback: _,
          priorityLevel: N,
          startTime: B,
          expirationTime: K,
          sortIndex: -1,
        }),
        B > W
          ? ((N.sortIndex = B),
            t(c, N),
            n(l) === null &&
              N === n(c) &&
              (v ? (h(P), (P = -1)) : (v = !0), I(C, B - W)))
          : ((N.sortIndex = K), t(l, N), m || y || ((m = !0), O(E))),
        N
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (N) {
      var _ = f;
      return function () {
        var B = f;
        f = _;
        try {
          return N.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(Bg);
zg.exports = Bg;
var CC = zg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var EC = x,
  dt = CC;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $g = new Set(),
  hi = {};
function kr(e, t) {
  co(e, t), co(e + "Capture", t);
}
function co(e, t) {
  for (hi[e] = t, e = 0; e < t.length; e++) $g.add(t[e]);
}
var an = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Dc = Object.prototype.hasOwnProperty,
  PC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bp = {},
  Tp = {};
function bC(e) {
  return Dc.call(Tp, e)
    ? !0
    : Dc.call(bp, e)
    ? !1
    : PC.test(e)
    ? (Tp[e] = !0)
    : ((bp[e] = !0), !1);
}
function TC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kC(e, t, n, r) {
  if (t === null || typeof t > "u" || TC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function qe(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var dd = /[\-:]([a-z])/g;
function fd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(dd, fd);
    Oe[t] = new qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(dd, fd);
    Oe[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(dd, fd);
  Oe[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pd(e, t, n, r) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kC(t, n, o, r) && (n = null),
    r || o === null
      ? bC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ss = Symbol.for("react.element"),
  Ir = Symbol.for("react.portal"),
  Lr = Symbol.for("react.fragment"),
  hd = Symbol.for("react.strict_mode"),
  _c = Symbol.for("react.profiler"),
  Wg = Symbol.for("react.provider"),
  Ug = Symbol.for("react.context"),
  md = Symbol.for("react.forward_ref"),
  jc = Symbol.for("react.suspense"),
  Ic = Symbol.for("react.suspense_list"),
  gd = Symbol.for("react.memo"),
  bn = Symbol.for("react.lazy"),
  Hg = Symbol.for("react.offscreen"),
  kp = Symbol.iterator;
function jo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kp && e[kp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pe = Object.assign,
  Il;
function Ho(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Ll = !1;
function Ol(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ho(e) : "";
}
function AC(e) {
  switch (e.tag) {
    case 5:
      return Ho(e.type);
    case 16:
      return Ho("Lazy");
    case 13:
      return Ho("Suspense");
    case 19:
      return Ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ol(e.type, !1)), e;
    case 11:
      return (e = Ol(e.type.render, !1)), e;
    case 1:
      return (e = Ol(e.type, !0)), e;
    default:
      return "";
  }
}
function Lc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Ir:
      return "Portal";
    case _c:
      return "Profiler";
    case hd:
      return "StrictMode";
    case jc:
      return "Suspense";
    case Ic:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ug:
        return (e.displayName || "Context") + ".Consumer";
      case Wg:
        return (e._context.displayName || "Context") + ".Provider";
      case md:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gd:
        return (
          (t = e.displayName || null), t !== null ? t : Lc(e.type) || "Memo"
        );
      case bn:
        (t = e._payload), (e = e._init);
        try {
          return Lc(e(t));
        } catch {}
    }
  return null;
}
function NC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Lc(t);
    case 8:
      return t === hd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function RC(e) {
  var t = Gg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function as(e) {
  e._valueTracker || (e._valueTracker = RC(e));
}
function Kg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ea(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oc(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ap(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yg(e, t) {
  (t = t.checked), t != null && pd(e, "checked", t, !1);
}
function Fc(e, t) {
  Yg(e, t);
  var n = Bn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vc(e, t.type, Bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Np(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vc(e, t, n) {
  (t !== "number" || ea(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Go = Array.isArray;
function qr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Rp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (Go(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bn(n) };
}
function Xg(e, t) {
  var n = Bn(t.value),
    r = Bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Mp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ls,
  Zg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ls = ls || document.createElement("div"),
          ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  MC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jo).forEach(function (e) {
  MC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jo[t] = Jo[e]);
  });
});
function qg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jo.hasOwnProperty(e) && Jo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Jg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = qg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var DC = Pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function $c(e, t) {
  if (t) {
    if (DC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Wc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Uc = null;
function vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hc = null,
  Jr = null,
  eo = null;
function Dp(e) {
  if ((e = Ki(e))) {
    if (typeof Hc != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Ua(t)), Hc(e.stateNode, e.type, t));
  }
}
function ev(e) {
  Jr ? (eo ? eo.push(e) : (eo = [e])) : (Jr = e);
}
function tv() {
  if (Jr) {
    var e = Jr,
      t = eo;
    if (((eo = Jr = null), Dp(e), t)) for (e = 0; e < t.length; e++) Dp(t[e]);
  }
}
function nv(e, t) {
  return e(t);
}
function rv() {}
var Fl = !1;
function ov(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return nv(e, t, n);
  } finally {
    (Fl = !1), (Jr !== null || eo !== null) && (rv(), tv());
  }
}
function gi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ua(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Gc = !1;
if (an)
  try {
    var Io = {};
    Object.defineProperty(Io, "passive", {
      get: function () {
        Gc = !0;
      },
    }),
      window.addEventListener("test", Io, Io),
      window.removeEventListener("test", Io, Io);
  } catch {
    Gc = !1;
  }
function _C(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var ei = !1,
  ta = null,
  na = !1,
  Kc = null,
  jC = {
    onError: function (e) {
      (ei = !0), (ta = e);
    },
  };
function IC(e, t, n, r, o, i, s, a, l) {
  (ei = !1), (ta = null), _C.apply(jC, arguments);
}
function LC(e, t, n, r, o, i, s, a, l) {
  if ((IC.apply(this, arguments), ei)) {
    if (ei) {
      var c = ta;
      (ei = !1), (ta = null);
    } else throw Error(D(198));
    na || ((na = !0), (Kc = c));
  }
}
function Ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function iv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _p(e) {
  if (Ar(e) !== e) throw Error(D(188));
}
function OC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ar(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return _p(o), e;
        if (i === r) return _p(o), t;
        i = i.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function sv(e) {
  return (e = OC(e)), e !== null ? av(e) : null;
}
function av(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = av(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lv = dt.unstable_scheduleCallback,
  jp = dt.unstable_cancelCallback,
  FC = dt.unstable_shouldYield,
  VC = dt.unstable_requestPaint,
  ke = dt.unstable_now,
  zC = dt.unstable_getCurrentPriorityLevel,
  yd = dt.unstable_ImmediatePriority,
  cv = dt.unstable_UserBlockingPriority,
  ra = dt.unstable_NormalPriority,
  BC = dt.unstable_LowPriority,
  uv = dt.unstable_IdlePriority,
  za = null,
  Wt = null;
function $C(e) {
  if (Wt && typeof Wt.onCommitFiberRoot == "function")
    try {
      Wt.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : HC,
  WC = Math.log,
  UC = Math.LN2;
function HC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((WC(e) / UC) | 0)) | 0;
}
var cs = 64,
  us = 4194304;
function Ko(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function oa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Ko(a)) : ((i &= s), i !== 0 && (r = Ko(i)));
  } else (s = n & ~o), s !== 0 ? (r = Ko(s)) : i !== 0 && (r = Ko(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Rt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function GC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function KC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Rt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = GC(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Yc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dv() {
  var e = cs;
  return (cs <<= 1), !(cs & 4194240) && (cs = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Rt(t)),
    (e[t] = n);
}
function YC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Rt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function xd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Rt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ce = 0;
function fv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pv,
  wd,
  hv,
  mv,
  gv,
  Xc = !1,
  ds = [],
  Mn = null,
  Dn = null,
  _n = null,
  vi = new Map(),
  yi = new Map(),
  kn = [],
  XC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ip(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mn = null;
      break;
    case "dragenter":
    case "dragleave":
      Dn = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      vi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yi.delete(t.pointerId);
  }
}
function Lo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ki(t)), t !== null && wd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function QC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Mn = Lo(Mn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Dn = Lo(Dn, e, t, n, r, o)), !0;
    case "mouseover":
      return (_n = Lo(_n, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return vi.set(i, Lo(vi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), yi.set(i, Lo(yi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function vv(e) {
  var t = ar(e.target);
  if (t !== null) {
    var n = Ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = iv(n)), t !== null)) {
          (e.blockedOn = t),
            gv(e.priority, function () {
              hv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Os(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Uc = r), n.target.dispatchEvent(r), (Uc = null);
    } else return (t = Ki(n)), t !== null && wd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lp(e, t, n) {
  Os(e) && n.delete(t);
}
function ZC() {
  (Xc = !1),
    Mn !== null && Os(Mn) && (Mn = null),
    Dn !== null && Os(Dn) && (Dn = null),
    _n !== null && Os(_n) && (_n = null),
    vi.forEach(Lp),
    yi.forEach(Lp);
}
function Oo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xc ||
      ((Xc = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, ZC)));
}
function xi(e) {
  function t(o) {
    return Oo(o, e);
  }
  if (0 < ds.length) {
    Oo(ds[0], e);
    for (var n = 1; n < ds.length; n++) {
      var r = ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mn !== null && Oo(Mn, e),
      Dn !== null && Oo(Dn, e),
      _n !== null && Oo(_n, e),
      vi.forEach(t),
      yi.forEach(t),
      n = 0;
    n < kn.length;
    n++
  )
    (r = kn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
    vv(n), n.blockedOn === null && kn.shift();
}
var to = hn.ReactCurrentBatchConfig,
  ia = !0;
function qC(e, t, n, r) {
  var o = ce,
    i = to.transition;
  to.transition = null;
  try {
    (ce = 1), Sd(e, t, n, r);
  } finally {
    (ce = o), (to.transition = i);
  }
}
function JC(e, t, n, r) {
  var o = ce,
    i = to.transition;
  to.transition = null;
  try {
    (ce = 4), Sd(e, t, n, r);
  } finally {
    (ce = o), (to.transition = i);
  }
}
function Sd(e, t, n, r) {
  if (ia) {
    var o = Qc(e, t, n, r);
    if (o === null) Xl(e, t, r, sa, n), Ip(e, r);
    else if (QC(o, e, t, n, r)) r.stopPropagation();
    else if ((Ip(e, r), t & 4 && -1 < XC.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ki(o);
        if (
          (i !== null && pv(i),
          (i = Qc(e, t, n, r)),
          i === null && Xl(e, t, r, sa, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var sa = null;
function Qc(e, t, n, r) {
  if (((sa = null), (e = vd(r)), (e = ar(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = iv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (sa = e), null;
}
function yv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zC()) {
        case yd:
          return 1;
        case cv:
          return 4;
        case ra:
        case BC:
          return 16;
        case uv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nn = null,
  Cd = null,
  Fs = null;
function xv() {
  if (Fs) return Fs;
  var e,
    t = Cd,
    n = t.length,
    r,
    o = "value" in Nn ? Nn.value : Nn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Fs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fs() {
  return !0;
}
function Op() {
  return !1;
}
function mt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fs
        : Op),
      (this.isPropagationStopped = Op),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fs));
      },
      persist: function () {},
      isPersistent: fs,
    }),
    t
  );
}
var bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ed = mt(bo),
  Gi = Pe({}, bo, { view: 0, detail: 0 }),
  eE = mt(Gi),
  zl,
  Bl,
  Fo,
  Ba = Pe({}, Gi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fo &&
            (Fo && e.type === "mousemove"
              ? ((zl = e.screenX - Fo.screenX), (Bl = e.screenY - Fo.screenY))
              : (Bl = zl = 0),
            (Fo = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  Fp = mt(Ba),
  tE = Pe({}, Ba, { dataTransfer: 0 }),
  nE = mt(tE),
  rE = Pe({}, Gi, { relatedTarget: 0 }),
  $l = mt(rE),
  oE = Pe({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iE = mt(oE),
  sE = Pe({}, bo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  aE = mt(sE),
  lE = Pe({}, bo, { data: 0 }),
  Vp = mt(lE),
  cE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  uE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dE[e]) ? !!t[e] : !1;
}
function Pd() {
  return fE;
}
var pE = Pe({}, Gi, {
    key: function (e) {
      if (e.key) {
        var t = cE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? uE[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pd,
    charCode: function (e) {
      return e.type === "keypress" ? Vs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  hE = mt(pE),
  mE = Pe({}, Ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zp = mt(mE),
  gE = Pe({}, Gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pd,
  }),
  vE = mt(gE),
  yE = Pe({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xE = mt(yE),
  wE = Pe({}, Ba, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  SE = mt(wE),
  CE = [9, 13, 27, 32],
  bd = an && "CompositionEvent" in window,
  ti = null;
an && "documentMode" in document && (ti = document.documentMode);
var EE = an && "TextEvent" in window && !ti,
  wv = an && (!bd || (ti && 8 < ti && 11 >= ti)),
  Bp = " ",
  $p = !1;
function Sv(e, t) {
  switch (e) {
    case "keyup":
      return CE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Or = !1;
function PE(e, t) {
  switch (e) {
    case "compositionend":
      return Cv(t);
    case "keypress":
      return t.which !== 32 ? null : (($p = !0), Bp);
    case "textInput":
      return (e = t.data), e === Bp && $p ? null : e;
    default:
      return null;
  }
}
function bE(e, t) {
  if (Or)
    return e === "compositionend" || (!bd && Sv(e, t))
      ? ((e = xv()), (Fs = Cd = Nn = null), (Or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return wv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var TE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TE[e.type] : t === "textarea";
}
function Ev(e, t, n, r) {
  ev(r),
    (t = aa(t, "onChange")),
    0 < t.length &&
      ((n = new Ed("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ni = null,
  wi = null;
function kE(e) {
  jv(e, 0);
}
function $a(e) {
  var t = zr(e);
  if (Kg(t)) return e;
}
function AE(e, t) {
  if (e === "change") return t;
}
var Pv = !1;
if (an) {
  var Wl;
  if (an) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var Up = document.createElement("div");
      Up.setAttribute("oninput", "return;"),
        (Ul = typeof Up.oninput == "function");
    }
    Wl = Ul;
  } else Wl = !1;
  Pv = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Hp() {
  ni && (ni.detachEvent("onpropertychange", bv), (wi = ni = null));
}
function bv(e) {
  if (e.propertyName === "value" && $a(wi)) {
    var t = [];
    Ev(t, wi, e, vd(e)), ov(kE, t);
  }
}
function NE(e, t, n) {
  e === "focusin"
    ? (Hp(), (ni = t), (wi = n), ni.attachEvent("onpropertychange", bv))
    : e === "focusout" && Hp();
}
function RE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $a(wi);
}
function ME(e, t) {
  if (e === "click") return $a(t);
}
function DE(e, t) {
  if (e === "input" || e === "change") return $a(t);
}
function _E(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : _E;
function Si(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Dc.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function Gp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kp(e, t) {
  var n = Gp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gp(n);
  }
}
function Tv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function kv() {
  for (var e = window, t = ea(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ea(e.document);
  }
  return t;
}
function Td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jE(e) {
  var t = kv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Td(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Kp(n, i));
        var s = Kp(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var IE = an && "documentMode" in document && 11 >= document.documentMode,
  Fr = null,
  Zc = null,
  ri = null,
  qc = !1;
function Yp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qc ||
    Fr == null ||
    Fr !== ea(r) ||
    ((r = Fr),
    "selectionStart" in r && Td(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ri && Si(ri, r)) ||
      ((ri = r),
      (r = aa(Zc, "onSelect")),
      0 < r.length &&
        ((t = new Ed("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fr))));
}
function ps(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vr = {
    animationend: ps("Animation", "AnimationEnd"),
    animationiteration: ps("Animation", "AnimationIteration"),
    animationstart: ps("Animation", "AnimationStart"),
    transitionend: ps("Transition", "TransitionEnd"),
  },
  Hl = {},
  Av = {};
an &&
  ((Av = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vr.animationend.animation,
    delete Vr.animationiteration.animation,
    delete Vr.animationstart.animation),
  "TransitionEvent" in window || delete Vr.transitionend.transition);
function Wa(e) {
  if (Hl[e]) return Hl[e];
  if (!Vr[e]) return e;
  var t = Vr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Av) return (Hl[e] = t[n]);
  return e;
}
var Nv = Wa("animationend"),
  Rv = Wa("animationiteration"),
  Mv = Wa("animationstart"),
  Dv = Wa("transitionend"),
  _v = new Map(),
  Xp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Yn(e, t) {
  _v.set(e, t), kr(t, [e]);
}
for (var Gl = 0; Gl < Xp.length; Gl++) {
  var Kl = Xp[Gl],
    LE = Kl.toLowerCase(),
    OE = Kl[0].toUpperCase() + Kl.slice(1);
  Yn(LE, "on" + OE);
}
Yn(Nv, "onAnimationEnd");
Yn(Rv, "onAnimationIteration");
Yn(Mv, "onAnimationStart");
Yn("dblclick", "onDoubleClick");
Yn("focusin", "onFocus");
Yn("focusout", "onBlur");
Yn(Dv, "onTransitionEnd");
co("onMouseEnter", ["mouseout", "mouseover"]);
co("onMouseLeave", ["mouseout", "mouseover"]);
co("onPointerEnter", ["pointerout", "pointerover"]);
co("onPointerLeave", ["pointerout", "pointerover"]);
kr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  FE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));
function Qp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), LC(r, t, void 0, e), (e.currentTarget = null);
}
function jv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Qp(o, a, c), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Qp(o, a, c), (i = l);
        }
    }
  }
  if (na) throw ((e = Kc), (na = !1), (Kc = null), e);
}
function me(e, t) {
  var n = t[ru];
  n === void 0 && (n = t[ru] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Iv(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Iv(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function Ci(e) {
  if (!e[hs]) {
    (e[hs] = !0),
      $g.forEach(function (n) {
        n !== "selectionchange" && (FE.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || ((t[hs] = !0), Yl("selectionchange", !1, t));
  }
}
function Iv(e, t, n, r) {
  switch (yv(t)) {
    case 1:
      var o = qC;
      break;
    case 4:
      o = JC;
      break;
    default:
      o = Sd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Gc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ar(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ov(function () {
    var c = i,
      d = vd(n),
      u = [];
    e: {
      var f = _v.get(e);
      if (f !== void 0) {
        var y = Ed,
          m = e;
        switch (e) {
          case "keypress":
            if (Vs(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = hE;
            break;
          case "focusin":
            (m = "focus"), (y = $l);
            break;
          case "focusout":
            (m = "blur"), (y = $l);
            break;
          case "beforeblur":
          case "afterblur":
            y = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Fp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = nE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = vE;
            break;
          case Nv:
          case Rv:
          case Mv:
            y = iE;
            break;
          case Dv:
            y = xE;
            break;
          case "scroll":
            y = eE;
            break;
          case "wheel":
            y = SE;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = aE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = zp;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          h = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              h !== null && ((C = gi(p, h)), C != null && v.push(Ei(p, C, g)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((f = new y(f, m, null, n, d)), u.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Uc &&
            (m = n.relatedTarget || n.fromElement) &&
            (ar(m) || m[ln]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = c),
              (m = m ? ar(m) : null),
              m !== null &&
                ((S = Ar(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((y = null), (m = c)),
          y !== m)
        ) {
          if (
            ((v = Fp),
            (C = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = zp),
              (C = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (S = y == null ? f : zr(y)),
            (g = m == null ? f : zr(m)),
            (f = new v(C, p + "leave", y, n, d)),
            (f.target = S),
            (f.relatedTarget = g),
            (C = null),
            ar(d) === c &&
              ((v = new v(h, p + "enter", m, n, d)),
              (v.target = g),
              (v.relatedTarget = S),
              (C = v)),
            (S = C),
            y && m)
          )
            t: {
              for (v = y, h = m, p = 0, g = v; g; g = Rr(g)) p++;
              for (g = 0, C = h; C; C = Rr(C)) g++;
              for (; 0 < p - g; ) (v = Rr(v)), p--;
              for (; 0 < g - p; ) (h = Rr(h)), g--;
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = Rr(v)), (h = Rr(h));
              }
              v = null;
            }
          else v = null;
          y !== null && Zp(u, f, y, v, !1),
            m !== null && S !== null && Zp(u, S, m, v, !0);
        }
      }
      e: {
        if (
          ((f = c ? zr(c) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var E = AE;
        else if (Wp(f))
          if (Pv) E = DE;
          else {
            E = RE;
            var T = NE;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = ME);
        if (E && (E = E(e, c))) {
          Ev(u, E, n, d);
          break e;
        }
        T && T(e, f, c),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Vc(f, "number", f.value);
      }
      switch (((T = c ? zr(c) : window), e)) {
        case "focusin":
          (Wp(T) || T.contentEditable === "true") &&
            ((Fr = T), (Zc = c), (ri = null));
          break;
        case "focusout":
          ri = Zc = Fr = null;
          break;
        case "mousedown":
          qc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qc = !1), Yp(u, n, d);
          break;
        case "selectionchange":
          if (IE) break;
        case "keydown":
        case "keyup":
          Yp(u, n, d);
      }
      var b;
      if (bd)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Or
          ? Sv(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (wv &&
          n.locale !== "ko" &&
          (Or || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Or && (b = xv())
            : ((Nn = d),
              (Cd = "value" in Nn ? Nn.value : Nn.textContent),
              (Or = !0))),
        (T = aa(c, P)),
        0 < T.length &&
          ((P = new Vp(P, e, null, n, d)),
          u.push({ event: P, listeners: T }),
          b ? (P.data = b) : ((b = Cv(n)), b !== null && (P.data = b)))),
        (b = EE ? PE(e, n) : bE(e, n)) &&
          ((c = aa(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Vp("onBeforeInput", "beforeinput", null, n, d)),
            u.push({ event: d, listeners: c }),
            (d.data = b)));
    }
    jv(u, t);
  });
}
function Ei(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function aa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = gi(e, n)),
      i != null && r.unshift(Ei(e, i, o)),
      (i = gi(e, t)),
      i != null && r.push(Ei(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Rr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((l = gi(n, i)), l != null && s.unshift(Ei(n, l, a)))
        : o || ((l = gi(n, i)), l != null && s.push(Ei(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var VE = /\r\n?/g,
  zE = /\u0000|\uFFFD/g;
function qp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      VE,
      `
`
    )
    .replace(zE, "");
}
function ms(e, t, n) {
  if (((t = qp(t)), qp(e) !== t && n)) throw Error(D(425));
}
function la() {}
var Jc = null,
  eu = null;
function tu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var nu = typeof setTimeout == "function" ? setTimeout : void 0,
  BE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jp = typeof Promise == "function" ? Promise : void 0,
  $E =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jp < "u"
      ? function (e) {
          return Jp.resolve(null).then(e).catch(WE);
        }
      : nu;
function WE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), xi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  xi(t);
}
function jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function eh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var To = Math.random().toString(36).slice(2),
  zt = "__reactFiber$" + To,
  Pi = "__reactProps$" + To,
  ln = "__reactContainer$" + To,
  ru = "__reactEvents$" + To,
  UE = "__reactListeners$" + To,
  HE = "__reactHandles$" + To;
function ar(e) {
  var t = e[zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ln] || n[zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = eh(e); e !== null; ) {
          if ((n = e[zt])) return n;
          e = eh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ki(e) {
  return (
    (e = e[zt] || e[ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Ua(e) {
  return e[Pi] || null;
}
var ou = [],
  Br = -1;
function Xn(e) {
  return { current: e };
}
function ge(e) {
  0 > Br || ((e.current = ou[Br]), (ou[Br] = null), Br--);
}
function pe(e, t) {
  Br++, (ou[Br] = e.current), (e.current = t);
}
var $n = {},
  He = Xn($n),
  nt = Xn(!1),
  vr = $n;
function uo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function rt(e) {
  return (e = e.childContextTypes), e != null;
}
function ca() {
  ge(nt), ge(He);
}
function th(e, t, n) {
  if (He.current !== $n) throw Error(D(168));
  pe(He, t), pe(nt, n);
}
function Lv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(D(108, NC(e) || "Unknown", o));
  return Pe({}, n, r);
}
function ua(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n),
    (vr = He.current),
    pe(He, e),
    pe(nt, nt.current),
    !0
  );
}
function nh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = Lv(e, t, vr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(nt),
      ge(He),
      pe(He, e))
    : ge(nt),
    pe(nt, n);
}
var Zt = null,
  Ha = !1,
  Zl = !1;
function Ov(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function GE(e) {
  (Ha = !0), Ov(e);
}
function Qn() {
  if (!Zl && Zt !== null) {
    Zl = !0;
    var e = 0,
      t = ce;
    try {
      var n = Zt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Zt = null), (Ha = !1);
    } catch (o) {
      throw (Zt !== null && (Zt = Zt.slice(e + 1)), lv(yd, Qn), o);
    } finally {
      (ce = t), (Zl = !1);
    }
  }
  return null;
}
var $r = [],
  Wr = 0,
  da = null,
  fa = 0,
  wt = [],
  St = 0,
  yr = null,
  qt = 1,
  Jt = "";
function rr(e, t) {
  ($r[Wr++] = fa), ($r[Wr++] = da), (da = e), (fa = t);
}
function Fv(e, t, n) {
  (wt[St++] = qt), (wt[St++] = Jt), (wt[St++] = yr), (yr = e);
  var r = qt;
  e = Jt;
  var o = 32 - Rt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Rt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (qt = (1 << (32 - Rt(t) + o)) | (n << o) | r),
      (Jt = i + e);
  } else (qt = (1 << i) | (n << o) | r), (Jt = e);
}
function kd(e) {
  e.return !== null && (rr(e, 1), Fv(e, 1, 0));
}
function Ad(e) {
  for (; e === da; )
    (da = $r[--Wr]), ($r[Wr] = null), (fa = $r[--Wr]), ($r[Wr] = null);
  for (; e === yr; )
    (yr = wt[--St]),
      (wt[St] = null),
      (Jt = wt[--St]),
      (wt[St] = null),
      (qt = wt[--St]),
      (wt[St] = null);
}
var ct = null,
  at = null,
  ve = !1,
  Nt = null;
function Vv(e, t) {
  var n = Ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (at = jn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yr !== null ? { id: qt, overflow: Jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ct = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function iu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function su(e) {
  if (ve) {
    var t = at;
    if (t) {
      var n = t;
      if (!rh(e, t)) {
        if (iu(e)) throw Error(D(418));
        t = jn(n.nextSibling);
        var r = ct;
        t && rh(e, t)
          ? Vv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (ct = e));
      }
    } else {
      if (iu(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (ct = e);
    }
  }
}
function oh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ct = e;
}
function gs(e) {
  if (e !== ct) return !1;
  if (!ve) return oh(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !tu(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (iu(e)) throw (zv(), Error(D(418)));
    for (; t; ) Vv(e, t), (t = jn(t.nextSibling));
  }
  if ((oh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              at = jn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = ct ? jn(e.stateNode.nextSibling) : null;
  return !0;
}
function zv() {
  for (var e = at; e; ) e = jn(e.nextSibling);
}
function fo() {
  (at = ct = null), (ve = !1);
}
function Nd(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var KE = hn.ReactCurrentBatchConfig;
function Vo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function vs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ih(e) {
  var t = e._init;
  return t(e._payload);
}
function Bv(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Fn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, g, C) {
    return p === null || p.tag !== 6
      ? ((p = oc(g, h.mode, C)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function l(h, p, g, C) {
    var E = g.type;
    return E === Lr
      ? d(h, p, g.props.children, C, g.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === bn &&
            ih(E) === p.type))
      ? ((C = o(p, g.props)), (C.ref = Vo(h, p, g)), (C.return = h), C)
      : ((C = Gs(g.type, g.key, g.props, null, h.mode, C)),
        (C.ref = Vo(h, p, g)),
        (C.return = h),
        C);
  }
  function c(h, p, g, C) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = ic(g, h.mode, C)), (p.return = h), p)
      : ((p = o(p, g.children || [])), (p.return = h), p);
  }
  function d(h, p, g, C, E) {
    return p === null || p.tag !== 7
      ? ((p = pr(g, h.mode, C, E)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function u(h, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = oc("" + p, h.mode, g)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ss:
          return (
            (g = Gs(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = Vo(h, null, p)),
            (g.return = h),
            g
          );
        case Ir:
          return (p = ic(p, h.mode, g)), (p.return = h), p;
        case bn:
          var C = p._init;
          return u(h, C(p._payload), g);
      }
      if (Go(p) || jo(p))
        return (p = pr(p, h.mode, g, null)), (p.return = h), p;
      vs(h, p);
    }
    return null;
  }
  function f(h, p, g, C) {
    var E = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return E !== null ? null : a(h, p, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ss:
          return g.key === E ? l(h, p, g, C) : null;
        case Ir:
          return g.key === E ? c(h, p, g, C) : null;
        case bn:
          return (E = g._init), f(h, p, E(g._payload), C);
      }
      if (Go(g) || jo(g)) return E !== null ? null : d(h, p, g, C, null);
      vs(h, g);
    }
    return null;
  }
  function y(h, p, g, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (h = h.get(g) || null), a(p, h, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ss:
          return (h = h.get(C.key === null ? g : C.key) || null), l(p, h, C, E);
        case Ir:
          return (h = h.get(C.key === null ? g : C.key) || null), c(p, h, C, E);
        case bn:
          var T = C._init;
          return y(h, p, g, T(C._payload), E);
      }
      if (Go(C) || jo(C)) return (h = h.get(g) || null), d(p, h, C, E, null);
      vs(p, C);
    }
    return null;
  }
  function m(h, p, g, C) {
    for (
      var E = null, T = null, b = p, P = (p = 0), A = null;
      b !== null && P < g.length;
      P++
    ) {
      b.index > P ? ((A = b), (b = null)) : (A = b.sibling);
      var k = f(h, b, g[P], C);
      if (k === null) {
        b === null && (b = A);
        break;
      }
      e && b && k.alternate === null && t(h, b),
        (p = i(k, p, P)),
        T === null ? (E = k) : (T.sibling = k),
        (T = k),
        (b = A);
    }
    if (P === g.length) return n(h, b), ve && rr(h, P), E;
    if (b === null) {
      for (; P < g.length; P++)
        (b = u(h, g[P], C)),
          b !== null &&
            ((p = i(b, p, P)), T === null ? (E = b) : (T.sibling = b), (T = b));
      return ve && rr(h, P), E;
    }
    for (b = r(h, b); P < g.length; P++)
      (A = y(b, h, P, g[P], C)),
        A !== null &&
          (e && A.alternate !== null && b.delete(A.key === null ? P : A.key),
          (p = i(A, p, P)),
          T === null ? (E = A) : (T.sibling = A),
          (T = A));
    return (
      e &&
        b.forEach(function (R) {
          return t(h, R);
        }),
      ve && rr(h, P),
      E
    );
  }
  function v(h, p, g, C) {
    var E = jo(g);
    if (typeof E != "function") throw Error(D(150));
    if (((g = E.call(g)), g == null)) throw Error(D(151));
    for (
      var T = (E = null), b = p, P = (p = 0), A = null, k = g.next();
      b !== null && !k.done;
      P++, k = g.next()
    ) {
      b.index > P ? ((A = b), (b = null)) : (A = b.sibling);
      var R = f(h, b, k.value, C);
      if (R === null) {
        b === null && (b = A);
        break;
      }
      e && b && R.alternate === null && t(h, b),
        (p = i(R, p, P)),
        T === null ? (E = R) : (T.sibling = R),
        (T = R),
        (b = A);
    }
    if (k.done) return n(h, b), ve && rr(h, P), E;
    if (b === null) {
      for (; !k.done; P++, k = g.next())
        (k = u(h, k.value, C)),
          k !== null &&
            ((p = i(k, p, P)), T === null ? (E = k) : (T.sibling = k), (T = k));
      return ve && rr(h, P), E;
    }
    for (b = r(h, b); !k.done; P++, k = g.next())
      (k = y(b, h, P, k.value, C)),
        k !== null &&
          (e && k.alternate !== null && b.delete(k.key === null ? P : k.key),
          (p = i(k, p, P)),
          T === null ? (E = k) : (T.sibling = k),
          (T = k));
    return (
      e &&
        b.forEach(function (M) {
          return t(h, M);
        }),
      ve && rr(h, P),
      E
    );
  }
  function S(h, p, g, C) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Lr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ss:
          e: {
            for (var E = g.key, T = p; T !== null; ) {
              if (T.key === E) {
                if (((E = g.type), E === Lr)) {
                  if (T.tag === 7) {
                    n(h, T.sibling),
                      (p = o(T, g.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === bn &&
                    ih(E) === T.type)
                ) {
                  n(h, T.sibling),
                    (p = o(T, g.props)),
                    (p.ref = Vo(h, T, g)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, T);
                break;
              } else t(h, T);
              T = T.sibling;
            }
            g.type === Lr
              ? ((p = pr(g.props.children, h.mode, C, g.key)),
                (p.return = h),
                (h = p))
              : ((C = Gs(g.type, g.key, g.props, null, h.mode, C)),
                (C.ref = Vo(h, p, g)),
                (C.return = h),
                (h = C));
          }
          return s(h);
        case Ir:
          e: {
            for (T = g.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = ic(g, h.mode, C)), (p.return = h), (h = p);
          }
          return s(h);
        case bn:
          return (T = g._init), S(h, p, T(g._payload), C);
      }
      if (Go(g)) return m(h, p, g, C);
      if (jo(g)) return v(h, p, g, C);
      vs(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, g)), (p.return = h), (h = p))
          : (n(h, p), (p = oc(g, h.mode, C)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return S;
}
var po = Bv(!0),
  $v = Bv(!1),
  pa = Xn(null),
  ha = null,
  Ur = null,
  Rd = null;
function Md() {
  Rd = Ur = ha = null;
}
function Dd(e) {
  var t = pa.current;
  ge(pa), (e._currentValue = t);
}
function au(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function no(e, t) {
  (ha = e),
    (Rd = Ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (tt = !0), (e.firstContext = null));
}
function Pt(e) {
  var t = e._currentValue;
  if (Rd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ur === null)) {
      if (ha === null) throw Error(D(308));
      (Ur = e), (ha.dependencies = { lanes: 0, firstContext: e });
    } else Ur = Ur.next = e;
  return t;
}
var lr = null;
function _d(e) {
  lr === null ? (lr = [e]) : lr.push(e);
}
function Wv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _d(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    cn(e, r)
  );
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function jd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function In(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), se & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      cn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _d(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    cn(e, n)
  );
}
function zs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xd(e, n);
  }
}
function sh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ma(e, t, n, r) {
  var o = e.updateQueue;
  Tn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var u = o.baseState;
    (s = 0), (d = c = l = null), (a = i);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            v = a;
          switch (((f = t), (y = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                u = m.call(y, u, f);
                break e;
              }
              u = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (f = typeof m == "function" ? m.call(y, u, f) : m),
                f == null)
              )
                break e;
              u = Pe({}, u, f);
              break e;
            case 2:
              Tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (l = u)) : (d = d.next = y),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = u),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (wr |= s), (e.lanes = s), (e.memoizedState = u);
  }
}
function ah(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(D(191, o));
        o.call(r);
      }
    }
}
var Yi = {},
  Ut = Xn(Yi),
  bi = Xn(Yi),
  Ti = Xn(Yi);
function cr(e) {
  if (e === Yi) throw Error(D(174));
  return e;
}
function Id(e, t) {
  switch ((pe(Ti, t), pe(bi, e), pe(Ut, Yi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bc(t, e));
  }
  ge(Ut), pe(Ut, t);
}
function ho() {
  ge(Ut), ge(bi), ge(Ti);
}
function Hv(e) {
  cr(Ti.current);
  var t = cr(Ut.current),
    n = Bc(t, e.type);
  t !== n && (pe(bi, e), pe(Ut, n));
}
function Ld(e) {
  bi.current === e && (ge(Ut), ge(bi));
}
var we = Xn(0);
function ga(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function Od() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Bs = hn.ReactCurrentDispatcher,
  Jl = hn.ReactCurrentBatchConfig,
  xr = 0,
  Ee = null,
  Ne = null,
  Me = null,
  va = !1,
  oi = !1,
  ki = 0,
  YE = 0;
function Ve() {
  throw Error(D(321));
}
function Fd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Vd(e, t, n, r, o, i) {
  if (
    ((xr = i),
    (Ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bs.current = e === null || e.memoizedState === null ? qE : JE),
    (e = n(r, o)),
    oi)
  ) {
    i = 0;
    do {
      if (((oi = !1), (ki = 0), 25 <= i)) throw Error(D(301));
      (i += 1),
        (Me = Ne = null),
        (t.updateQueue = null),
        (Bs.current = eP),
        (e = n(r, o));
    } while (oi);
  }
  if (
    ((Bs.current = ya),
    (t = Ne !== null && Ne.next !== null),
    (xr = 0),
    (Me = Ne = Ee = null),
    (va = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function zd() {
  var e = ki !== 0;
  return (ki = 0), e;
}
function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (Ee.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function bt() {
  if (Ne === null) {
    var e = Ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Me === null ? Ee.memoizedState : Me.next;
  if (t !== null) (Me = t), (Ne = e);
  else {
    if (e === null) throw Error(D(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Me === null ? (Ee.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function Ai(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ec(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = i;
    do {
      var d = c.lane;
      if ((xr & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var u = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = u), (s = r)) : (l = l.next = u),
          (Ee.lanes |= d),
          (wr |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (s = r) : (l.next = a),
      _t(r, t.memoizedState) || (tt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ee.lanes |= i), (wr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tc(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    _t(i, t.memoizedState) || (tt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Gv() {}
function Kv(e, t) {
  var n = Ee,
    r = bt(),
    o = t(),
    i = !_t(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (tt = !0)),
    (r = r.queue),
    Bd(Qv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ni(9, Xv.bind(null, n, r, o, t), void 0, null),
      _e === null)
    )
      throw Error(D(349));
    xr & 30 || Yv(n, t, o);
  }
  return o;
}
function Yv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zv(t) && qv(e);
}
function Qv(e, t, n) {
  return n(function () {
    Zv(t) && qv(e);
  });
}
function Zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function qv(e) {
  var t = cn(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function lh(e) {
  var t = Ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ai,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ZE.bind(null, Ee, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Jv() {
  return bt().memoizedState;
}
function $s(e, t, n, r) {
  var o = Ft();
  (Ee.flags |= e),
    (o.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ga(e, t, n, r) {
  var o = bt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ne !== null) {
    var s = Ne.memoizedState;
    if (((i = s.destroy), r !== null && Fd(r, s.deps))) {
      o.memoizedState = Ni(t, n, i, r);
      return;
    }
  }
  (Ee.flags |= e), (o.memoizedState = Ni(1 | t, n, i, r));
}
function ch(e, t) {
  return $s(8390656, 8, e, t);
}
function Bd(e, t) {
  return Ga(2048, 8, e, t);
}
function ey(e, t) {
  return Ga(4, 2, e, t);
}
function ty(e, t) {
  return Ga(4, 4, e, t);
}
function ny(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ry(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ga(4, 4, ny.bind(null, t, e), n)
  );
}
function $d() {}
function oy(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function iy(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sy(e, t, n) {
  return xr & 21
    ? (_t(n, t) || ((n = dv()), (Ee.lanes |= n), (wr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n));
}
function XE(e, t) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ce = n), (Jl.transition = r);
  }
}
function ay() {
  return bt().memoizedState;
}
function QE(e, t, n) {
  var r = On(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ly(e))
  )
    cy(t, n);
  else if (((n = Wv(e, t, n, r)), n !== null)) {
    var o = Xe();
    Mt(n, e, r, o), uy(n, t, r);
  }
}
function ZE(e, t, n) {
  var r = On(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ly(e)) cy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), _t(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), _d(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wv(e, t, o, r)),
      n !== null && ((o = Xe()), Mt(n, e, r, o), uy(n, t, r));
  }
}
function ly(e) {
  var t = e.alternate;
  return e === Ee || (t !== null && t === Ee);
}
function cy(e, t) {
  oi = va = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xd(e, n);
  }
}
var ya = {
    readContext: Pt,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1,
  },
  qE = {
    readContext: Pt,
    useCallback: function (e, t) {
      return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pt,
    useEffect: ch,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $s(4194308, 4, ny.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $s(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $s(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = QE.bind(null, Ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lh,
    useDebugValue: $d,
    useDeferredValue: function (e) {
      return (Ft().memoizedState = e);
    },
    useTransition: function () {
      var e = lh(!1),
        t = e[0];
      return (e = XE.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ee,
        o = Ft();
      if (ve) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(D(349));
        xr & 30 || Yv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ch(Qv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ni(9, Xv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ft(),
        t = _e.identifierPrefix;
      if (ve) {
        var n = Jt,
          r = qt;
        (n = (r & ~(1 << (32 - Rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ki++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = YE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  JE = {
    readContext: Pt,
    useCallback: oy,
    useContext: Pt,
    useEffect: Bd,
    useImperativeHandle: ry,
    useInsertionEffect: ey,
    useLayoutEffect: ty,
    useMemo: iy,
    useReducer: ec,
    useRef: Jv,
    useState: function () {
      return ec(Ai);
    },
    useDebugValue: $d,
    useDeferredValue: function (e) {
      var t = bt();
      return sy(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ec(Ai)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Gv,
    useSyncExternalStore: Kv,
    useId: ay,
    unstable_isNewReconciler: !1,
  },
  eP = {
    readContext: Pt,
    useCallback: oy,
    useContext: Pt,
    useEffect: Bd,
    useImperativeHandle: ry,
    useInsertionEffect: ey,
    useLayoutEffect: ty,
    useMemo: iy,
    useReducer: tc,
    useRef: Jv,
    useState: function () {
      return tc(Ai);
    },
    useDebugValue: $d,
    useDeferredValue: function (e) {
      var t = bt();
      return Ne === null ? (t.memoizedState = e) : sy(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = tc(Ai)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Gv,
    useSyncExternalStore: Kv,
    useId: ay,
    unstable_isNewReconciler: !1,
  };
function kt(e, t) {
  if (e && e.defaultProps) {
    (t = Pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function lu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ka = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      o = On(e),
      i = nn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = In(e, i, o)),
      t !== null && (Mt(t, e, o, r), zs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      o = On(e),
      i = nn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = In(e, i, o)),
      t !== null && (Mt(t, e, o, r), zs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xe(),
      r = On(e),
      o = nn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = In(e, o, r)),
      t !== null && (Mt(t, e, r, n), zs(t, e, r));
  },
};
function uh(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Si(n, r) || !Si(o, i)
      : !0
  );
}
function dy(e, t, n) {
  var r = !1,
    o = $n,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pt(i))
      : ((o = rt(t) ? vr : He.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? uo(e, o) : $n)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ka),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function dh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ka.enqueueReplaceState(t, t.state, null);
}
function cu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), jd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Pt(i))
    : ((i = rt(t) ? vr : He.current), (o.context = uo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (lu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ka.enqueueReplaceState(o, o.state, null),
      ma(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function mo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += AC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tP = typeof WeakMap == "function" ? WeakMap : Map;
function fy(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wa || ((wa = !0), (wu = r)), uu(e, t);
    }),
    n
  );
}
function py(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        uu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        uu(e, t),
          typeof r != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function fh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tP();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = mP.bind(null, e, t, n)), t.then(e, e));
}
function ph(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nn(-1, 1)), (t.tag = 2), In(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nP = hn.ReactCurrentOwner,
  tt = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? $v(t, null, n, r) : po(t, e.child, n, r);
}
function mh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    no(t, o),
    (r = Vd(e, t, n, r, i, o)),
    (n = zd()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (ve && n && kd(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  );
}
function gh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Qd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), hy(e, t, i, r, o))
      : ((e = Gs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Si), n(s, r) && e.ref === t.ref)
    )
      return un(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Si(i, r) && e.ref === t.ref)
      if (((tt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (tt = !0);
      else return (t.lanes = e.lanes), un(e, t, o);
  }
  return du(e, t, n, r, o);
}
function my(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(Gr, it),
        (it |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(Gr, it),
          (it |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        pe(Gr, it),
        (it |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(Gr, it),
      (it |= r);
  return Ke(e, t, o, n), t.child;
}
function gy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function du(e, t, n, r, o) {
  var i = rt(n) ? vr : He.current;
  return (
    (i = uo(t, i)),
    no(t, o),
    (n = Vd(e, t, n, r, i, o)),
    (r = zd()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (ve && r && kd(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  );
}
function vh(e, t, n, r, o) {
  if (rt(n)) {
    var i = !0;
    ua(t);
  } else i = !1;
  if ((no(t, o), t.stateNode === null))
    Ws(e, t), dy(t, n, r), cu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Pt(c))
      : ((c = rt(n) ? vr : He.current), (c = uo(t, c)));
    var d = n.getDerivedStateFromProps,
      u =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    u ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && dh(t, s, r, c)),
      (Tn = !1);
    var f = t.memoizedState;
    (s.state = f),
      ma(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || nt.current || Tn
        ? (typeof d == "function" && (lu(t, n, d, r), (l = t.memoizedState)),
          (a = Tn || uh(t, n, a, r, f, l, c))
            ? (u ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Uv(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : kt(t.type, a)),
      (s.props = c),
      (u = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Pt(l))
        : ((l = rt(n) ? vr : He.current), (l = uo(t, l)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== u || f !== l) && dh(t, s, r, l)),
      (Tn = !1),
      (f = t.memoizedState),
      (s.state = f),
      ma(t, r, s, o);
    var m = t.memoizedState;
    a !== u || f !== m || nt.current || Tn
      ? (typeof y == "function" && (lu(t, n, y, r), (m = t.memoizedState)),
        (c = Tn || uh(t, n, c, r, f, m, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (s.props = r),
        (s.state = m),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fu(e, t, n, r, i, o);
}
function fu(e, t, n, r, o, i) {
  gy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && nh(t, n, !1), un(e, t, i);
  (r = t.stateNode), (nP.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = po(t, e.child, null, i)), (t.child = po(t, null, a, i)))
      : Ke(e, t, a, i),
    (t.memoizedState = r.state),
    o && nh(t, n, !0),
    t.child
  );
}
function vy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? th(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && th(e, t.context, !1),
    Id(e, t.containerInfo);
}
function yh(e, t, n, r, o) {
  return fo(), Nd(o), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var pu = { dehydrated: null, treeContext: null, retryLane: 0 };
function hu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yy(e, t, n) {
  var r = t.pendingProps,
    o = we.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(we, o & 1),
    e === null)
  )
    return (
      su(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Qa(s, r, 0, null)),
              (e = pr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = hu(n)),
              (t.memoizedState = pu),
              e)
            : Wd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return rP(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Fn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Fn(a, i)) : ((i = pr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? hu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = pu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Fn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Wd(e, t) {
  return (
    (t = Qa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ys(e, t, n, r) {
  return (
    r !== null && Nd(r),
    po(t, e.child, null, n),
    (e = Wd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rP(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = nc(Error(D(422)))), ys(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Qa({ mode: "visible", children: r.children }, o, 0, null)),
        (i = pr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && po(t, e.child, null, s),
        (t.child.memoizedState = hu(s)),
        (t.memoizedState = pu),
        i);
  if (!(t.mode & 1)) return ys(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(D(419))), (r = nc(i, r, void 0)), ys(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), tt || a)) {
    if (((r = _e), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), cn(e, o), Mt(r, e, o, -1));
    }
    return Xd(), (r = nc(Error(D(421)))), ys(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gP.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (at = jn(o.nextSibling)),
      (ct = t),
      (ve = !0),
      (Nt = null),
      e !== null &&
        ((wt[St++] = qt),
        (wt[St++] = Jt),
        (wt[St++] = yr),
        (qt = e.id),
        (Jt = e.overflow),
        (yr = t)),
      (t = Wd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), au(e.return, t, n);
}
function rc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function xy(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ke(e, t, r.children, n), (r = we.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xh(e, n, t);
        else if (e.tag === 19) xh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(we, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ga(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          rc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ga(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        rc(t, !0, n, null, i);
        break;
      case "together":
        rc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ws(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function oP(e, t, n) {
  switch (t.tag) {
    case 3:
      vy(t), fo();
      break;
    case 5:
      Hv(t);
      break;
    case 1:
      rt(t.type) && ua(t);
      break;
    case 4:
      Id(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      pe(pa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(we, we.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yy(e, t, n)
          : (pe(we, we.current & 1),
            (e = un(e, t, n)),
            e !== null ? e.sibling : null);
      pe(we, we.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        pe(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), my(e, t, n);
  }
  return un(e, t, n);
}
var wy, mu, Sy, Cy;
wy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
mu = function () {};
Sy = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), cr(Ut.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Oc(e, o)), (r = Oc(e, r)), (i = []);
        break;
      case "select":
        (o = Pe({}, o, { value: void 0 })),
          (r = Pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = zc(e, o)), (r = zc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = la);
    }
    $c(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (hi.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (hi.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && me("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Cy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zo(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function iP(e, t, n) {
  var r = t.pendingProps;
  switch ((Ad(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null;
    case 1:
      return rt(t.type) && ca(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ho(),
        ge(nt),
        ge(He),
        Od(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (Eu(Nt), (Nt = null)))),
        mu(e, t),
        ze(t),
        null
      );
    case 5:
      Ld(t);
      var o = cr(Ti.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sy(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return ze(t), null;
        }
        if (((e = cr(Ut.current)), gs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[zt] = t), (r[Pi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              me("cancel", r), me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yo.length; o++) me(Yo[o], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              me("error", r), me("load", r);
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              Ap(r, i), me("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                me("invalid", r);
              break;
            case "textarea":
              Rp(r, i), me("invalid", r);
          }
          $c(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ms(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ms(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : hi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  me("scroll", r);
            }
          switch (n) {
            case "input":
              as(r), Np(r, i, !0);
              break;
            case "textarea":
              as(r), Mp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = la);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[zt] = t),
            (e[Pi] = r),
            wy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Wc(n, r)), n)) {
              case "dialog":
                me("cancel", e), me("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yo.length; o++) me(Yo[o], e);
                o = r;
                break;
              case "source":
                me("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), (o = r);
                break;
              case "details":
                me("toggle", e), (o = r);
                break;
              case "input":
                Ap(e, r), (o = Oc(e, r)), me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Pe({}, r, { value: void 0 })),
                  me("invalid", e);
                break;
              case "textarea":
                Rp(e, r), (o = zc(e, r)), me("invalid", e);
                break;
              default:
                o = r;
            }
            $c(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Jg(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Zg(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && mi(e, l)
                    : typeof l == "number" && mi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (hi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && me("scroll", e)
                      : l != null && pd(e, i, l, s));
              }
            switch (n) {
              case "input":
                as(e), Np(e, r, !1);
                break;
              case "textarea":
                as(e), Mp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = la);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Cy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = cr(Ti.current)), cr(Ut.current), gs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[zt] = t),
            (i = r.nodeValue !== n) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[zt] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (ge(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && at !== null && t.mode & 1 && !(t.flags & 128))
          zv(), fo(), (t.flags |= 98560), (i = !1);
        else if (((i = gs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(D(317));
            i[zt] = t;
          } else
            fo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (i = !1);
        } else Nt !== null && (Eu(Nt), (Nt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Re === 0 && (Re = 3) : Xd())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        ho(), mu(e, t), e === null && Ci(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return Dd(t.type._context), ze(t), null;
    case 17:
      return rt(t.type) && ca(), ze(t), null;
    case 19:
      if ((ge(we), (i = t.memoizedState), i === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) zo(i, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ga(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    zo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return pe(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ke() > go &&
            ((t.flags |= 128), (r = !0), zo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ga(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ve)
            )
              return ze(t), null;
          } else
            2 * ke() - i.renderingStartTime > go &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ke()),
          (t.sibling = null),
          (n = we.current),
          pe(we, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        Yd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? it & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function sP(e, t) {
  switch ((Ad(t), t.tag)) {
    case 1:
      return (
        rt(t.type) && ca(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ho(),
        ge(nt),
        ge(He),
        Od(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ld(t), null;
    case 13:
      if (
        (ge(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        fo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(we), null;
    case 4:
      return ho(), null;
    case 10:
      return Dd(t.type._context), null;
    case 22:
    case 23:
      return Yd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xs = !1,
  $e = !1,
  aP = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        be(e, t, r);
      }
    else n.current = null;
}
function gu(e, t, n) {
  try {
    n();
  } catch (r) {
    be(e, t, r);
  }
}
var wh = !1;
function lP(e, t) {
  if (((Jc = ia), (e = kv()), Td(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            u = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              u !== n || (o !== 0 && u.nodeType !== 3) || (a = s + o),
                u !== i || (r !== 0 && u.nodeType !== 3) || (l = s + r),
                u.nodeType === 3 && (s += u.nodeValue.length),
                (y = u.firstChild) !== null;

            )
              (f = u), (u = y);
            for (;;) {
              if (u === e) break t;
              if (
                (f === n && ++c === o && (a = s),
                f === i && ++d === r && (l = s),
                (y = u.nextSibling) !== null)
              )
                break;
              (u = f), (f = u.parentNode);
            }
            u = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (eu = { focusedElem: e, selectionRange: n }, ia = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    S = m.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : kt(t.type, v),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (C) {
          be(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (m = wh), (wh = !1), m;
}
function ii(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && gu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ya(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ey(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ey(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[zt], delete t[Pi], delete t[ru], delete t[UE], delete t[HE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Py(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Py(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = la));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yu(e, t, n), e = e.sibling; e !== null; ) yu(e, t, n), (e = e.sibling);
}
function xu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xu(e, t, n), e = e.sibling; e !== null; ) xu(e, t, n), (e = e.sibling);
}
var je = null,
  At = !1;
function xn(e, t, n) {
  for (n = n.child; n !== null; ) by(e, t, n), (n = n.sibling);
}
function by(e, t, n) {
  if (Wt && typeof Wt.onCommitFiberUnmount == "function")
    try {
      Wt.onCommitFiberUnmount(za, n);
    } catch {}
  switch (n.tag) {
    case 5:
      $e || Hr(n, t);
    case 6:
      var r = je,
        o = At;
      (je = null),
        xn(e, t, n),
        (je = r),
        (At = o),
        je !== null &&
          (At
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (At
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            xi(e))
          : Ql(je, n.stateNode));
      break;
    case 4:
      (r = je),
        (o = At),
        (je = n.stateNode.containerInfo),
        (At = !0),
        xn(e, t, n),
        (je = r),
        (At = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && gu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      xn(e, t, n);
      break;
    case 1:
      if (
        !$e &&
        (Hr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          be(n, t, a);
        }
      xn(e, t, n);
      break;
    case 21:
      xn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? (($e = (r = $e) || n.memoizedState !== null), xn(e, t, n), ($e = r))
        : xn(e, t, n);
      break;
    default:
      xn(e, t, n);
  }
}
function Ch(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new aP()),
      t.forEach(function (r) {
        var o = vP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (je = a.stateNode), (At = !1);
              break e;
            case 3:
              (je = a.stateNode.containerInfo), (At = !0);
              break e;
            case 4:
              (je = a.stateNode.containerInfo), (At = !0);
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(D(160));
        by(i, s, o), (je = null), (At = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (c) {
        be(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ty(t, e), (t = t.sibling);
}
function Ty(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), Ot(e), r & 4)) {
        try {
          ii(3, e, e.return), Ya(3, e);
        } catch (v) {
          be(e, e.return, v);
        }
        try {
          ii(5, e, e.return);
        } catch (v) {
          be(e, e.return, v);
        }
      }
      break;
    case 1:
      Tt(t, e), Ot(e), r & 512 && n !== null && Hr(n, n.return);
      break;
    case 5:
      if (
        (Tt(t, e),
        Ot(e),
        r & 512 && n !== null && Hr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          mi(o, "");
        } catch (v) {
          be(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Yg(o, i),
              Wc(a, s);
            var c = Wc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                u = l[s + 1];
              d === "style"
                ? Jg(o, u)
                : d === "dangerouslySetInnerHTML"
                ? Zg(o, u)
                : d === "children"
                ? mi(o, u)
                : pd(o, d, u, c);
            }
            switch (a) {
              case "input":
                Fc(o, i);
                break;
              case "textarea":
                Xg(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? qr(o, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qr(o, !!i.multiple, i.defaultValue, !0)
                      : qr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Pi] = i;
          } catch (v) {
            be(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          be(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          xi(t.containerInfo);
        } catch (v) {
          be(e, e.return, v);
        }
      break;
    case 4:
      Tt(t, e), Ot(e);
      break;
    case 13:
      Tt(t, e),
        Ot(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Gd = ke())),
        r & 4 && Ch(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? (($e = (c = $e) || d), Tt(t, e), ($e = c)) : Tt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (u = z = d; z !== null; ) {
              switch (((f = z), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ii(4, f, f.return);
                  break;
                case 1:
                  Hr(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      be(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Hr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ph(u);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (z = y)) : Ph(u);
            }
            d = d.sibling;
          }
        e: for (d = null, u = e; ; ) {
          if (u.tag === 5) {
            if (d === null) {
              d = u;
              try {
                (o = u.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = u.stateNode),
                      (l = u.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = qg("display", s)));
              } catch (v) {
                be(e, e.return, v);
              }
            }
          } else if (u.tag === 6) {
            if (d === null)
              try {
                u.stateNode.nodeValue = c ? "" : u.memoizedProps;
              } catch (v) {
                be(e, e.return, v);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === e) &&
            u.child !== null
          ) {
            (u.child.return = u), (u = u.child);
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            d === u && (d = null), (u = u.return);
          }
          d === u && (d = null), (u.sibling.return = u.return), (u = u.sibling);
        }
      }
      break;
    case 19:
      Tt(t, e), Ot(e), r & 4 && Ch(e);
      break;
    case 21:
      break;
    default:
      Tt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Py(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (mi(o, ""), (r.flags &= -33));
          var i = Sh(e);
          xu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Sh(e);
          yu(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      be(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cP(e, t, n) {
  (z = e), ky(e);
}
function ky(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || xs;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || $e;
        a = xs;
        var c = $e;
        if (((xs = s), ($e = l) && !c))
          for (z = o; z !== null; )
            (s = z),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? bh(o)
                : l !== null
                ? ((l.return = s), (z = l))
                : bh(o);
        for (; i !== null; ) (z = i), ky(i), (i = i.sibling);
        (z = o), (xs = a), ($e = c);
      }
      Eh(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : Eh(e);
  }
}
function Eh(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $e || Ya(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !$e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ah(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ah(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var u = d.dehydrated;
                    u !== null && xi(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        $e || (t.flags & 512 && vu(t));
      } catch (f) {
        be(t, t.return, f);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ph(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function bh(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ya(4, t);
          } catch (l) {
            be(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              be(t, o, l);
            }
          }
          var i = t.return;
          try {
            vu(t);
          } catch (l) {
            be(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            vu(t);
          } catch (l) {
            be(t, s, l);
          }
      }
    } catch (l) {
      be(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var uP = Math.ceil,
  xa = hn.ReactCurrentDispatcher,
  Ud = hn.ReactCurrentOwner,
  Et = hn.ReactCurrentBatchConfig,
  se = 0,
  _e = null,
  Ae = null,
  Le = 0,
  it = 0,
  Gr = Xn(0),
  Re = 0,
  Ri = null,
  wr = 0,
  Xa = 0,
  Hd = 0,
  si = null,
  et = null,
  Gd = 0,
  go = 1 / 0,
  Xt = null,
  wa = !1,
  wu = null,
  Ln = null,
  ws = !1,
  Rn = null,
  Sa = 0,
  ai = 0,
  Su = null,
  Us = -1,
  Hs = 0;
function Xe() {
  return se & 6 ? ke() : Us !== -1 ? Us : (Us = ke());
}
function On(e) {
  return e.mode & 1
    ? se & 2 && Le !== 0
      ? Le & -Le
      : KE.transition !== null
      ? (Hs === 0 && (Hs = dv()), Hs)
      : ((e = ce),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yv(e.type))),
        e)
    : 1;
}
function Mt(e, t, n, r) {
  if (50 < ai) throw ((ai = 0), (Su = null), Error(D(185)));
  Hi(e, n, r),
    (!(se & 2) || e !== _e) &&
      (e === _e && (!(se & 2) && (Xa |= n), Re === 4 && An(e, Le)),
      ot(e, r),
      n === 1 && se === 0 && !(t.mode & 1) && ((go = ke() + 500), Ha && Qn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  KC(e, t);
  var r = oa(e, e === _e ? Le : 0);
  if (r === 0)
    n !== null && jp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && jp(n), t === 1))
      e.tag === 0 ? GE(Th.bind(null, e)) : Ov(Th.bind(null, e)),
        $E(function () {
          !(se & 6) && Qn();
        }),
        (n = null);
    else {
      switch (fv(r)) {
        case 1:
          n = yd;
          break;
        case 4:
          n = cv;
          break;
        case 16:
          n = ra;
          break;
        case 536870912:
          n = uv;
          break;
        default:
          n = ra;
      }
      n = Iy(n, Ay.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ay(e, t) {
  if (((Us = -1), (Hs = 0), se & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (ro() && e.callbackNode !== n) return null;
  var r = oa(e, e === _e ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ca(e, r);
  else {
    t = r;
    var o = se;
    se |= 2;
    var i = Ry();
    (_e !== e || Le !== t) && ((Xt = null), (go = ke() + 500), fr(e, t));
    do
      try {
        pP();
        break;
      } catch (a) {
        Ny(e, a);
      }
    while (!0);
    Md(),
      (xa.current = i),
      (se = o),
      Ae !== null ? (t = 0) : ((_e = null), (Le = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Yc(e)), o !== 0 && ((r = o), (t = Cu(e, o)))), t === 1)
    )
      throw ((n = Ri), fr(e, 0), An(e, r), ot(e, ke()), n);
    if (t === 6) An(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !dP(o) &&
          ((t = Ca(e, r)),
          t === 2 && ((i = Yc(e)), i !== 0 && ((r = i), (t = Cu(e, i)))),
          t === 1))
      )
        throw ((n = Ri), fr(e, 0), An(e, r), ot(e, ke()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          or(e, et, Xt);
          break;
        case 3:
          if (
            (An(e, r), (r & 130023424) === r && ((t = Gd + 500 - ke()), 10 < t))
          ) {
            if (oa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = nu(or.bind(null, e, et, Xt), t);
            break;
          }
          or(e, et, Xt);
          break;
        case 4:
          if ((An(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Rt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * uP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = nu(or.bind(null, e, et, Xt), r);
            break;
          }
          or(e, et, Xt);
          break;
        case 5:
          or(e, et, Xt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return ot(e, ke()), e.callbackNode === n ? Ay.bind(null, e) : null;
}
function Cu(e, t) {
  var n = si;
  return (
    e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
    (e = Ca(e, t)),
    e !== 2 && ((t = et), (et = n), t !== null && Eu(t)),
    e
  );
}
function Eu(e) {
  et === null ? (et = e) : et.push.apply(et, e);
}
function dP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function An(e, t) {
  for (
    t &= ~Hd,
      t &= ~Xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Th(e) {
  if (se & 6) throw Error(D(327));
  ro();
  var t = oa(e, 0);
  if (!(t & 1)) return ot(e, ke()), null;
  var n = Ca(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yc(e);
    r !== 0 && ((t = r), (n = Cu(e, r)));
  }
  if (n === 1) throw ((n = Ri), fr(e, 0), An(e, t), ot(e, ke()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    or(e, et, Xt),
    ot(e, ke()),
    null
  );
}
function Kd(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    (se = n), se === 0 && ((go = ke() + 500), Ha && Qn());
  }
}
function Sr(e) {
  Rn !== null && Rn.tag === 0 && !(se & 6) && ro();
  var t = se;
  se |= 1;
  var n = Et.transition,
    r = ce;
  try {
    if (((Et.transition = null), (ce = 1), e)) return e();
  } finally {
    (ce = r), (Et.transition = n), (se = t), !(se & 6) && Qn();
  }
}
function Yd() {
  (it = Gr.current), ge(Gr);
}
function fr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), BE(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((Ad(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ca();
          break;
        case 3:
          ho(), ge(nt), ge(He), Od();
          break;
        case 5:
          Ld(r);
          break;
        case 4:
          ho();
          break;
        case 13:
          ge(we);
          break;
        case 19:
          ge(we);
          break;
        case 10:
          Dd(r.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (Ae = e = Fn(e.current, null)),
    (Le = it = t),
    (Re = 0),
    (Ri = null),
    (Hd = Xa = wr = 0),
    (et = si = null),
    lr !== null)
  ) {
    for (t = 0; t < lr.length; t++)
      if (((n = lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    lr = null;
  }
  return e;
}
function Ny(e, t) {
  do {
    var n = Ae;
    try {
      if ((Md(), (Bs.current = ya), va)) {
        for (var r = Ee.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        va = !1;
      }
      if (
        ((xr = 0),
        (Me = Ne = Ee = null),
        (oi = !1),
        (ki = 0),
        (Ud.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (Ri = t), (Ae = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Le),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            u = d.tag;
          if (!(d.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = ph(s);
          if (y !== null) {
            (y.flags &= -257),
              hh(y, s, a, i, t),
              y.mode & 1 && fh(i, c, t),
              (t = y),
              (l = c);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              fh(i, c, t), Xd();
              break e;
            }
            l = Error(D(426));
          }
        } else if (ve && a.mode & 1) {
          var S = ph(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              hh(S, s, a, i, t),
              Nd(mo(l, a));
            break e;
          }
        }
        (i = l = mo(l, a)),
          Re !== 4 && (Re = 2),
          si === null ? (si = [i]) : si.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = fy(i, l, t);
              sh(i, h);
              break e;
            case 1:
              a = l;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = py(i, a, t);
                sh(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dy(n);
    } catch (E) {
      (t = E), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ry() {
  var e = xa.current;
  return (xa.current = ya), e === null ? ya : e;
}
function Xd() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    _e === null || (!(wr & 268435455) && !(Xa & 268435455)) || An(_e, Le);
}
function Ca(e, t) {
  var n = se;
  se |= 2;
  var r = Ry();
  (_e !== e || Le !== t) && ((Xt = null), fr(e, t));
  do
    try {
      fP();
      break;
    } catch (o) {
      Ny(e, o);
    }
  while (!0);
  if ((Md(), (se = n), (xa.current = r), Ae !== null)) throw Error(D(261));
  return (_e = null), (Le = 0), Re;
}
function fP() {
  for (; Ae !== null; ) My(Ae);
}
function pP() {
  for (; Ae !== null && !FC(); ) My(Ae);
}
function My(e) {
  var t = jy(e.alternate, e, it);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dy(e) : (Ae = t),
    (Ud.current = null);
}
function Dy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sP(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), (Ae = null);
        return;
      }
    } else if (((n = iP(n, t, it)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function or(e, t, n) {
  var r = ce,
    o = Et.transition;
  try {
    (Et.transition = null), (ce = 1), hP(e, t, n, r);
  } finally {
    (Et.transition = o), (ce = r);
  }
  return null;
}
function hP(e, t, n, r) {
  do ro();
  while (Rn !== null);
  if (se & 6) throw Error(D(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (YC(e, i),
    e === _e && ((Ae = _e = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ws ||
      ((ws = !0),
      Iy(ra, function () {
        return ro(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Et.transition), (Et.transition = null);
    var s = ce;
    ce = 1;
    var a = se;
    (se |= 4),
      (Ud.current = null),
      lP(e, n),
      Ty(n, e),
      jE(eu),
      (ia = !!Jc),
      (eu = Jc = null),
      (e.current = n),
      cP(n),
      VC(),
      (se = a),
      (ce = s),
      (Et.transition = i);
  } else e.current = n;
  if (
    (ws && ((ws = !1), (Rn = e), (Sa = o)),
    (i = e.pendingLanes),
    i === 0 && (Ln = null),
    $C(n.stateNode),
    ot(e, ke()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wa) throw ((wa = !1), (e = wu), (wu = null), e);
  return (
    Sa & 1 && e.tag !== 0 && ro(),
    (i = e.pendingLanes),
    i & 1 ? (e === Su ? ai++ : ((ai = 0), (Su = e))) : (ai = 0),
    Qn(),
    null
  );
}
function ro() {
  if (Rn !== null) {
    var e = fv(Sa),
      t = Et.transition,
      n = ce;
    try {
      if (((Et.transition = null), (ce = 16 > e ? 16 : e), Rn === null))
        var r = !1;
      else {
        if (((e = Rn), (Rn = null), (Sa = 0), se & 6)) throw Error(D(331));
        var o = se;
        for (se |= 4, z = e.current; z !== null; ) {
          var i = z,
            s = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (z = c; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(8, d, i);
                  }
                  var u = d.child;
                  if (u !== null) (u.return = d), (z = u);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var f = d.sibling,
                        y = d.return;
                      if ((Ey(d), d === c)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (z = f);
                        break;
                      }
                      z = y;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (z = s);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ii(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (z = h);
                break e;
              }
              z = i.return;
            }
        }
        var p = e.current;
        for (z = p; z !== null; ) {
          s = z;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (z = g);
          else
            e: for (s = p; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ya(9, a);
                  }
                } catch (E) {
                  be(a, a.return, E);
                }
              if (a === s) {
                z = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (z = C);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((se = o), Qn(), Wt && typeof Wt.onPostCommitFiberRoot == "function")
        )
          try {
            Wt.onPostCommitFiberRoot(za, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ce = n), (Et.transition = t);
    }
  }
  return !1;
}
function kh(e, t, n) {
  (t = mo(n, t)),
    (t = fy(e, t, 1)),
    (e = In(e, t, 1)),
    (t = Xe()),
    e !== null && (Hi(e, 1, t), ot(e, t));
}
function be(e, t, n) {
  if (e.tag === 3) kh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(r)))
        ) {
          (e = mo(n, e)),
            (e = py(t, e, 1)),
            (t = In(t, e, 1)),
            (e = Xe()),
            t !== null && (Hi(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (Le & n) === n &&
      (Re === 4 || (Re === 3 && (Le & 130023424) === Le && 500 > ke() - Gd)
        ? fr(e, 0)
        : (Hd |= n)),
    ot(e, t);
}
function _y(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = us), (us <<= 1), !(us & 130023424) && (us = 4194304))
      : (t = 1));
  var n = Xe();
  (e = cn(e, t)), e !== null && (Hi(e, t, n), ot(e, n));
}
function gP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _y(e, n);
}
function vP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), _y(e, n);
}
var jy;
jy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (tt = !1), oP(e, t, n);
      tt = !!(e.flags & 131072);
    }
  else (tt = !1), ve && t.flags & 1048576 && Fv(t, fa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ws(e, t), (e = t.pendingProps);
      var o = uo(t, He.current);
      no(t, n), (o = Vd(null, t, r, e, o, n));
      var i = zd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            rt(r) ? ((i = !0), ua(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            jd(t),
            (o.updater = Ka),
            (t.stateNode = o),
            (o._reactInternals = t),
            cu(t, r, e, n),
            (t = fu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ve && i && kd(t), Ke(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ws(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = xP(r)),
          (e = kt(r, e)),
          o)
        ) {
          case 0:
            t = du(null, t, r, e, n);
            break e;
          case 1:
            t = vh(null, t, r, e, n);
            break e;
          case 11:
            t = mh(null, t, r, e, n);
            break e;
          case 14:
            t = gh(null, t, r, kt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        du(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        vh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((vy(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Uv(e, t),
          ma(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = mo(Error(D(423)), t)), (t = yh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = mo(Error(D(424)), t)), (t = yh(e, t, r, n, o));
            break e;
          } else
            for (
              at = jn(t.stateNode.containerInfo.firstChild),
                ct = t,
                ve = !0,
                Nt = null,
                n = $v(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fo(), r === o)) {
            t = un(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hv(t),
        e === null && su(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        tu(r, o) ? (s = null) : i !== null && tu(r, i) && (t.flags |= 32),
        gy(e, t),
        Ke(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && su(t), null;
    case 13:
      return yy(e, t, n);
    case 4:
      return (
        Id(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = po(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        mh(e, t, r, o, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          pe(pa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (_t(i.value, s)) {
            if (i.children === o.children && !nt.current) {
              t = un(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = nn(-1, n & -n)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      au(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(D(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  au(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ke(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        no(t, n),
        (o = Pt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = kt(r, t.pendingProps)),
        (o = kt(r.type, o)),
        gh(e, t, r, o, n)
      );
    case 15:
      return hy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : kt(r, o)),
        Ws(e, t),
        (t.tag = 1),
        rt(r) ? ((e = !0), ua(t)) : (e = !1),
        no(t, n),
        dy(t, r, o),
        cu(t, r, o, n),
        fu(null, t, r, !0, e, n)
      );
    case 19:
      return xy(e, t, n);
    case 22:
      return my(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Iy(e, t) {
  return lv(e, t);
}
function yP(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, n, r) {
  return new yP(e, t, n, r);
}
function Qd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xP(e) {
  if (typeof e == "function") return Qd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === md)) return 11;
    if (e === gd) return 14;
  }
  return 2;
}
function Fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Qd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Lr:
        return pr(n.children, o, i, t);
      case hd:
        (s = 8), (o |= 8);
        break;
      case _c:
        return (
          (e = Ct(12, n, t, o | 2)), (e.elementType = _c), (e.lanes = i), e
        );
      case jc:
        return (e = Ct(13, n, t, o)), (e.elementType = jc), (e.lanes = i), e;
      case Ic:
        return (e = Ct(19, n, t, o)), (e.elementType = Ic), (e.lanes = i), e;
      case Hg:
        return Qa(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wg:
              s = 10;
              break e;
            case Ug:
              s = 9;
              break e;
            case md:
              s = 11;
              break e;
            case gd:
              s = 14;
              break e;
            case bn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function pr(e, t, n, r) {
  return (e = Ct(7, e, r, t)), (e.lanes = n), e;
}
function Qa(e, t, n, r) {
  return (
    (e = Ct(22, e, r, t)),
    (e.elementType = Hg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oc(e, t, n) {
  return (e = Ct(6, e, null, t)), (e.lanes = n), e;
}
function ic(e, t, n) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wP(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vl(0)),
    (this.expirationTimes = Vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Zd(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new wP(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ct(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jd(i),
    e
  );
}
function SP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ir,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ly(e) {
  if (!e) return $n;
  e = e._reactInternals;
  e: {
    if (Ar(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return Lv(e, n, t);
  }
  return t;
}
function Oy(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Zd(n, r, !0, e, o, i, s, a, l)),
    (e.context = Ly(null)),
    (n = e.current),
    (r = Xe()),
    (o = On(n)),
    (i = nn(r, o)),
    (i.callback = t ?? null),
    In(n, i, o),
    (e.current.lanes = o),
    Hi(e, o, r),
    ot(e, r),
    e
  );
}
function Za(e, t, n, r) {
  var o = t.current,
    i = Xe(),
    s = On(o);
  return (
    (n = Ly(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = In(o, t, s)),
    e !== null && (Mt(e, o, s, i), zs(e, o, s)),
    s
  );
}
function Ea(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ah(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qd(e, t) {
  Ah(e, t), (e = e.alternate) && Ah(e, t);
}
function CP() {
  return null;
}
var Fy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Jd(e) {
  this._internalRoot = e;
}
qa.prototype.render = Jd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Za(e, t, null, null);
};
qa.prototype.unmount = Jd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sr(function () {
      Za(null, e, null, null);
    }),
      (t[ln] = null);
  }
};
function qa(e) {
  this._internalRoot = e;
}
qa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
    kn.splice(n, 0, e), n === 0 && vv(e);
  }
};
function ef(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ja(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nh() {}
function EP(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Ea(s);
        i.call(c);
      };
    }
    var s = Oy(t, r, e, 0, null, !1, !1, "", Nh);
    return (
      (e._reactRootContainer = s),
      (e[ln] = s.current),
      Ci(e.nodeType === 8 ? e.parentNode : e),
      Sr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Ea(l);
      a.call(c);
    };
  }
  var l = Zd(e, 0, !1, null, null, !1, !1, "", Nh);
  return (
    (e._reactRootContainer = l),
    (e[ln] = l.current),
    Ci(e.nodeType === 8 ? e.parentNode : e),
    Sr(function () {
      Za(t, l, n, r);
    }),
    l
  );
}
function el(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ea(s);
        a.call(l);
      };
    }
    Za(t, s, e, o);
  } else s = EP(n, t, e, o, r);
  return Ea(s);
}
pv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ko(t.pendingLanes);
        n !== 0 &&
          (xd(t, n | 1), ot(t, ke()), !(se & 6) && ((go = ke() + 500), Qn()));
      }
      break;
    case 13:
      Sr(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var o = Xe();
          Mt(r, e, 1, o);
        }
      }),
        qd(e, 1);
  }
};
wd = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = Xe();
      Mt(t, e, 134217728, n);
    }
    qd(e, 134217728);
  }
};
hv = function (e) {
  if (e.tag === 13) {
    var t = On(e),
      n = cn(e, t);
    if (n !== null) {
      var r = Xe();
      Mt(n, e, t, r);
    }
    qd(e, t);
  }
};
mv = function () {
  return ce;
};
gv = function (e, t) {
  var n = ce;
  try {
    return (ce = e), t();
  } finally {
    ce = n;
  }
};
Hc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ua(r);
            if (!o) throw Error(D(90));
            Kg(r), Fc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xg(e, n);
      break;
    case "select":
      (t = n.value), t != null && qr(e, !!n.multiple, t, !1);
  }
};
nv = Kd;
rv = Sr;
var PP = { usingClientEntryPoint: !1, Events: [Ki, zr, Ua, ev, tv, Kd] },
  Bo = {
    findFiberByHostInstance: ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  bP = {
    bundleType: Bo.bundleType,
    version: Bo.version,
    rendererPackageName: Bo.rendererPackageName,
    rendererConfig: Bo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Bo.findFiberByHostInstance || CP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ss.isDisabled && Ss.supportsFiber)
    try {
      (za = Ss.inject(bP)), (Wt = Ss);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PP;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ef(t)) throw Error(D(200));
  return SP(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!ef(e)) throw Error(D(299));
  var n = !1,
    r = "",
    o = Fy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Zd(e, 1, !1, null, null, n, !1, r, o)),
    (e[ln] = t.current),
    Ci(e.nodeType === 8 ? e.parentNode : e),
    new Jd(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = sv(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e) {
  return Sr(e);
};
ht.hydrate = function (e, t, n) {
  if (!Ja(t)) throw Error(D(200));
  return el(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!ef(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Fy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Oy(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[ln] = t.current),
    Ci(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new qa(t);
};
ht.render = function (e, t, n) {
  if (!Ja(t)) throw Error(D(200));
  return el(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!Ja(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Sr(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ln] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = Kd;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ja(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return el(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function Vy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vy);
    } catch (e) {
      console.error(e);
    }
}
Vy(), (Vg.exports = ht);
var Nr = Vg.exports;
const TP = sd(Nr);
var Rh = Nr;
(Mc.createRoot = Rh.createRoot), (Mc.hydrateRoot = Rh.hydrateRoot);
const kP = ({ page1: e, page2: t, transitionTime: n = 8500 }) => {
  const [r, o] = x.useState(!0),
    [i, s] = x.useState(!1);
  return (
    x.useEffect(() => {
      const a = setTimeout(() => {
          s(!0);
        }, n - 100),
        l = setTimeout(() => {
          o(!1);
        }, n);
      return () => {
        clearTimeout(a), clearTimeout(l);
      };
    }, []),
    w.jsxs(w.Fragment, {
      children: [
        w.jsx("main", {
          className: `transition-opacity duration-1000 ${
            i ? "opacity-0" : "opacity-100"
          }`,
          children: r && e,
        }),
        w.jsx("main", {
          className: `transition-opacity duration-1000 ${
            i && !r ? "opacity-100" : "opacity-0"
          }`,
          children: !r && t,
        }),
      ],
    })
  );
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  zy = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var NP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RP = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...NP,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: zy("lucide", o),
        ...a,
      },
      [
        ...s.map(([c, d]) => x.createElement(c, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gt = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(RP, {
      ref: i,
      iconNode: t,
      className: zy(`lucide-${AP(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MP = gt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DP = gt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _P = gt("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jP = gt("BookOpenCheck", [
  [
    "path",
    { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z", key: "1i8u0n" },
  ],
  ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
  [
    "path",
    {
      d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",
      key: "jb5l51",
    },
  ],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IP = gt("BrickWall", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M12 9v6", key: "199k2o" }],
  ["path", { d: "M16 15v6", key: "8rj2es" }],
  ["path", { d: "M16 3v6", key: "1j6rpj" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LP = gt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const By = gt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OP = gt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FP = gt("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VP = gt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zP = gt("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BP = gt("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $P = gt("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
function $y(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = $y(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function en() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = $y(e)) && (r && (r += " "), (r += t));
  return r;
}
const Mi = (e) => typeof e == "number" && !isNaN(e),
  hr = (e) => typeof e == "string",
  lt = (e) => typeof e == "function",
  Ks = (e) => (hr(e) || lt(e) ? e : null),
  Pu = (e) => x.isValidElement(e) || hr(e) || lt(e) || Mi(e);
function WP(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = "initial"),
      (o.height = r + "px"),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = "0"), (o.padding = "0"), (o.margin = "0"), setTimeout(t, n);
      });
  });
}
function tl(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e;
  return function (s) {
    let {
      children: a,
      position: l,
      preventExitTransition: c,
      done: d,
      nodeRef: u,
      isIn: f,
      playToast: y,
    } = s;
    const m = r ? `${t}--${l}` : t,
      v = r ? `${n}--${l}` : n,
      S = x.useRef(0);
    return (
      x.useLayoutEffect(() => {
        const h = u.current,
          p = m.split(" "),
          g = (C) => {
            C.target === u.current &&
              (y(),
              h.removeEventListener("animationend", g),
              h.removeEventListener("animationcancel", g),
              S.current === 0 &&
                C.type !== "animationcancel" &&
                h.classList.remove(...p));
          };
        h.classList.add(...p),
          h.addEventListener("animationend", g),
          h.addEventListener("animationcancel", g);
      }, []),
      x.useEffect(() => {
        const h = u.current,
          p = () => {
            h.removeEventListener("animationend", p), o ? WP(h, d, i) : d();
          };
        f ||
          (c
            ? p()
            : ((S.current = 1),
              (h.className += ` ${v}`),
              h.addEventListener("animationend", p)));
      }, [f]),
      J.createElement(J.Fragment, null, a)
    );
  };
}
function Mh(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Ye = new Map();
let Di = [];
const bu = new Set(),
  UP = (e) => bu.forEach((t) => t(e)),
  Wy = () => Ye.size > 0;
function Uy(e, t) {
  var n;
  if (t) return !((n = Ye.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    Ye.forEach((o) => {
      o.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function Hy(e, t) {
  Pu(e) &&
    (Wy() || Di.push({ content: e, options: t }),
    Ye.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function Dh(e, t) {
  Ye.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function HP(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = x.useRef(
    (function (i) {
      const s = i.containerId || 1;
      return {
        subscribe(a) {
          const l = (function (d, u, f) {
            let y = 1,
              m = 0,
              v = [],
              S = [],
              h = [],
              p = u;
            const g = new Map(),
              C = new Set(),
              E = () => {
                (h = Array.from(g.values())), C.forEach((P) => P());
              },
              T = (P) => {
                (S = P == null ? [] : S.filter((A) => A !== P)), E();
              },
              b = (P) => {
                const {
                    toastId: A,
                    onOpen: k,
                    updateId: R,
                    children: M,
                  } = P.props,
                  $ = R == null;
                P.staleId && g.delete(P.staleId),
                  g.set(A, P),
                  (S = [...S, P.props.toastId].filter((F) => F !== P.staleId)),
                  E(),
                  f(Mh(P, $ ? "added" : "updated")),
                  $ && lt(k) && k(x.isValidElement(M) && M.props);
              };
            return {
              id: d,
              props: p,
              observe: (P) => (C.add(P), () => C.delete(P)),
              toggle: (P, A) => {
                g.forEach((k) => {
                  (A != null && A !== k.props.toastId) ||
                    (lt(k.toggle) && k.toggle(P));
                });
              },
              removeToast: T,
              toasts: g,
              clearQueue: () => {
                (m -= v.length), (v = []);
              },
              buildToast: (P, A) => {
                if (
                  ((K) => {
                    let { containerId: ie, toastId: oe, updateId: fe } = K;
                    const te = ie ? ie !== d : d !== 1,
                      V = g.has(oe) && fe == null;
                    return te || V;
                  })(A)
                )
                  return;
                const {
                    toastId: k,
                    updateId: R,
                    data: M,
                    staleId: $,
                    delay: F,
                  } = A,
                  L = () => {
                    T(k);
                  },
                  O = R == null;
                O && m++;
                const I = {
                  ...p,
                  style: p.toastStyle,
                  key: y++,
                  ...Object.fromEntries(
                    Object.entries(A).filter((K) => {
                      let [ie, oe] = K;
                      return oe != null;
                    })
                  ),
                  toastId: k,
                  updateId: R,
                  data: M,
                  closeToast: L,
                  isIn: !1,
                  className: Ks(A.className || p.toastClassName),
                  bodyClassName: Ks(A.bodyClassName || p.bodyClassName),
                  progressClassName: Ks(
                    A.progressClassName || p.progressClassName
                  ),
                  autoClose:
                    !A.isLoading &&
                    ((N = A.autoClose),
                    (_ = p.autoClose),
                    N === !1 || (Mi(N) && N > 0) ? N : _),
                  deleteToast() {
                    const K = g.get(k),
                      { onClose: ie, children: oe } = K.props;
                    lt(ie) && ie(x.isValidElement(oe) && oe.props),
                      f(Mh(K, "removed")),
                      g.delete(k),
                      m--,
                      m < 0 && (m = 0),
                      v.length > 0 ? b(v.shift()) : E();
                  },
                };
                var N, _;
                (I.closeButton = p.closeButton),
                  A.closeButton === !1 || Pu(A.closeButton)
                    ? (I.closeButton = A.closeButton)
                    : A.closeButton === !0 &&
                      (I.closeButton = !Pu(p.closeButton) || p.closeButton);
                let B = P;
                x.isValidElement(P) && !hr(P.type)
                  ? (B = x.cloneElement(P, {
                      closeToast: L,
                      toastProps: I,
                      data: M,
                    }))
                  : lt(P) && (B = P({ closeToast: L, toastProps: I, data: M }));
                const W = { content: B, props: I, staleId: $ };
                p.limit && p.limit > 0 && m > p.limit && O
                  ? v.push(W)
                  : Mi(F)
                  ? setTimeout(() => {
                      b(W);
                    }, F)
                  : b(W);
              },
              setProps(P) {
                p = P;
              },
              setToggle: (P, A) => {
                g.get(P).toggle = A;
              },
              isToastActive: (P) => S.some((A) => A === P),
              getSnapshot: () => (p.newestOnTop ? h.reverse() : h),
            };
          })(s, i, UP);
          Ye.set(s, l);
          const c = l.observe(a);
          return (
            Di.forEach((d) => Hy(d.content, d.options)),
            (Di = []),
            () => {
              c(), Ye.delete(s);
            }
          );
        },
        setProps(a) {
          var l;
          (l = Ye.get(s)) == null || l.setProps(a);
        },
        getSnapshot() {
          var a;
          return (a = Ye.get(s)) == null ? void 0 : a.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const o = x.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (i) {
      if (!o) return [];
      const s = new Map();
      return (
        o.forEach((a) => {
          const { position: l } = a.props;
          s.has(l) || s.set(l, []), s.get(l).push(a);
        }),
        Array.from(s, (a) => i(a[0], a[1]))
      );
    },
    isToastActive: Uy,
    count: o == null ? void 0 : o.length,
  };
}
function GP(e) {
  const [t, n] = x.useState(!1),
    [r, o] = x.useState(!1),
    i = x.useRef(null),
    s = x.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: l,
      closeToast: c,
      onClick: d,
      closeOnClick: u,
    } = e;
  var f, y;
  function m() {
    n(!0);
  }
  function v() {
    n(!1);
  }
  function S(g) {
    const C = i.current;
    s.canDrag &&
      C &&
      ((s.didMove = !0),
      t && v(),
      (s.delta =
        e.draggableDirection === "x"
          ? g.clientX - s.start
          : g.clientY - s.start),
      s.start !== g.clientX && (s.canCloseOnClick = !1),
      (C.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${s.delta}px, var(--y)`
          : `0, calc(${s.delta}px + var(--y))`
      },0)`),
      (C.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance))));
  }
  function h() {
    document.removeEventListener("pointermove", S),
      document.removeEventListener("pointerup", h);
    const g = i.current;
    if (s.canDrag && s.didMove && g) {
      if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
        return o(!0), e.closeToast(), void e.collapseAll();
      (g.style.transition = "transform 0.2s, opacity 0.2s"),
        g.style.removeProperty("transform"),
        g.style.removeProperty("opacity");
    }
  }
  (y = Ye.get(
    (f = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || y.setToggle(f.id, f.fn),
    x.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || v(),
          window.addEventListener("focus", m),
          window.addEventListener("blur", v),
          () => {
            window.removeEventListener("focus", m),
              window.removeEventListener("blur", v);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const p = {
    onPointerDown: function (g) {
      if (e.draggable === !0 || e.draggable === g.pointerType) {
        (s.didMove = !1),
          document.addEventListener("pointermove", S),
          document.addEventListener("pointerup", h);
        const C = i.current;
        (s.canCloseOnClick = !0),
          (s.canDrag = !0),
          (C.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((s.start = g.clientX),
              (s.removalDistance = C.offsetWidth * (e.draggablePercent / 100)))
            : ((s.start = g.clientY),
              (s.removalDistance =
                (C.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (g) {
      const {
        top: C,
        bottom: E,
        left: T,
        right: b,
      } = i.current.getBoundingClientRect();
      g.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      g.clientX >= T &&
      g.clientX <= b &&
      g.clientY >= C &&
      g.clientY <= E
        ? v()
        : m();
    },
  };
  return (
    a && l && ((p.onMouseEnter = v), e.stacked || (p.onMouseLeave = m)),
    u &&
      (p.onClick = (g) => {
        d && d(g), s.canCloseOnClick && c();
      }),
    {
      playToast: m,
      pauseToast: v,
      isRunning: t,
      preventExitTransition: r,
      toastRef: i,
      eventHandlers: p,
    }
  );
}
function KP(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: o = "default",
    hide: i,
    className: s,
    style: a,
    controlledProgress: l,
    progress: c,
    rtl: d,
    isIn: u,
    theme: f,
  } = e;
  const y = i || (l && c === 0),
    m = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  l && (m.transform = `scaleX(${c})`);
  const v = en(
      "Toastify__progress-bar",
      l
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${f}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": d }
    ),
    S = lt(s) ? s({ rtl: d, type: o, defaultClassName: v }) : en(v, s),
    h = {
      [l && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        l && c < 1
          ? null
          : () => {
              u && r();
            },
    };
  return J.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": y },
    J.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${o}`,
    }),
    J.createElement("div", {
      role: "progressbar",
      "aria-hidden": y ? "true" : "false",
      "aria-label": "notification timer",
      className: S,
      style: m,
      ...h,
    })
  );
}
let YP = 1;
const Gy = () => "" + YP++;
function XP(e) {
  return e && (hr(e.toastId) || Mi(e.toastId)) ? e.toastId : Gy();
}
function li(e, t) {
  return Hy(e, t), t.toastId;
}
function Pa(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: XP(t) };
}
function Cs(e) {
  return (t, n) => li(t, Pa(e, n));
}
function ue(e, t) {
  return li(e, Pa("default", t));
}
(ue.loading = (e, t) =>
  li(
    e,
    Pa("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (ue.promise = function (e, t, n) {
    let r,
      { pending: o, error: i, success: s } = t;
    o && (r = hr(o) ? ue.loading(o, n) : ue.loading(o.render, { ...n, ...o }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (d, u, f) => {
        if (u == null) return void ue.dismiss(r);
        const y = { type: d, ...a, ...n, data: f },
          m = hr(u) ? { render: u } : u;
        return (
          r ? ue.update(r, { ...y, ...m }) : ue(m.render, { ...y, ...m }), f
        );
      },
      c = lt(e) ? e() : e;
    return c.then((d) => l("success", s, d)).catch((d) => l("error", i, d)), c;
  }),
  (ue.success = Cs("success")),
  (ue.info = Cs("info")),
  (ue.error = Cs("error")),
  (ue.warning = Cs("warning")),
  (ue.warn = ue.warning),
  (ue.dark = (e, t) => li(e, Pa("default", { theme: "dark", ...t }))),
  (ue.dismiss = function (e) {
    (function (t) {
      var n;
      if (Wy()) {
        if (t == null || hr((n = t)) || Mi(n))
          Ye.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = Ye.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : Ye.forEach((o) => {
                o.removeToast(t.id);
              });
        }
      } else Di = Di.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (ue.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      Ye.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (ue.isActive = Uy),
  (ue.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, o) => {
      var i;
      let { containerId: s } = o;
      return (i = Ye.get(s || 1)) == null ? void 0 : i.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: o } = n,
        i = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Gy() };
      i.toastId !== e && (i.staleId = e);
      const s = i.render || o;
      delete i.render, li(s, i);
    }
  }),
  (ue.done = (e) => {
    ue.update(e, { progress: 1 });
  }),
  (ue.onChange = function (e) {
    return (
      bu.add(e),
      () => {
        bu.delete(e);
      }
    );
  }),
  (ue.play = (e) => Dh(!0, e)),
  (ue.pause = (e) => Dh(!1, e));
const QP = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  Es = (e) => {
    let { theme: t, type: n, isLoading: r, ...o } = e;
    return J.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...o,
    });
  },
  sc = {
    info: function (e) {
      return J.createElement(
        Es,
        { ...e },
        J.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return J.createElement(
        Es,
        { ...e },
        J.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return J.createElement(
        Es,
        { ...e },
        J.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return J.createElement(
        Es,
        { ...e },
        J.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return J.createElement("div", { className: "Toastify__spinner" });
    },
  },
  ZP = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: o,
        playToast: i,
      } = GP(e),
      {
        closeButton: s,
        children: a,
        autoClose: l,
        onClick: c,
        type: d,
        hideProgressBar: u,
        closeToast: f,
        transition: y,
        position: m,
        className: v,
        style: S,
        bodyClassName: h,
        bodyStyle: p,
        progressClassName: g,
        progressStyle: C,
        updateId: E,
        role: T,
        progress: b,
        rtl: P,
        toastId: A,
        deleteToast: k,
        isIn: R,
        isLoading: M,
        closeOnClick: $,
        theme: F,
      } = e,
      L = en(
        "Toastify__toast",
        `Toastify__toast-theme--${F}`,
        `Toastify__toast--${d}`,
        { "Toastify__toast--rtl": P },
        { "Toastify__toast--close-on-click": $ }
      ),
      O = lt(v)
        ? v({ rtl: P, position: m, type: d, defaultClassName: L })
        : en(L, v),
      I = (function (W) {
        let { theme: K, type: ie, isLoading: oe, icon: fe } = W,
          te = null;
        const V = { theme: K, type: ie };
        return (
          fe === !1 ||
            (lt(fe)
              ? (te = fe({ ...V, isLoading: oe }))
              : x.isValidElement(fe)
              ? (te = x.cloneElement(fe, V))
              : oe
              ? (te = sc.spinner())
              : ((Y) => Y in sc)(ie) && (te = sc[ie](V))),
          te
        );
      })(e),
      N = !!b || !l,
      _ = { closeToast: f, type: d, theme: F };
    let B = null;
    return (
      s === !1 ||
        (B = lt(s)
          ? s(_)
          : x.isValidElement(s)
          ? x.cloneElement(s, _)
          : (function (W) {
              let { closeToast: K, theme: ie, ariaLabel: oe = "close" } = W;
              return J.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${ie}`,
                  type: "button",
                  onClick: (fe) => {
                    fe.stopPropagation(), K(fe);
                  },
                  "aria-label": oe,
                },
                J.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  J.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(_)),
      J.createElement(
        y,
        {
          isIn: R,
          done: k,
          position: m,
          preventExitTransition: n,
          nodeRef: r,
          playToast: i,
        },
        J.createElement(
          "div",
          {
            id: A,
            onClick: c,
            "data-in": R,
            className: O,
            ...o,
            style: S,
            ref: r,
          },
          J.createElement(
            "div",
            {
              ...(R && { role: T }),
              className: lt(h) ? h({ type: d }) : en("Toastify__toast-body", h),
              style: p,
            },
            I != null &&
              J.createElement(
                "div",
                {
                  className: en("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !M,
                  }),
                },
                I
              ),
            J.createElement("div", null, a)
          ),
          B,
          J.createElement(KP, {
            ...(E && !N ? { key: `pb-${E}` } : {}),
            rtl: P,
            theme: F,
            delay: l,
            isRunning: t,
            isIn: R,
            closeToast: f,
            hide: u,
            type: d,
            style: C,
            className: g,
            controlledProgress: N,
            progress: b || 0,
          })
        )
      )
    );
  },
  nl = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  qP = tl(nl("bounce", !0));
tl(nl("slide", !0));
tl(nl("zoom"));
const ac = tl(nl("flip")),
  JP = {
    position: "top-right",
    transition: qP,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  };
function eb(e) {
  let t = { ...JP, ...e };
  const n = e.stacked,
    [r, o] = x.useState(!0),
    i = x.useRef(null),
    { getToastToRender: s, isToastActive: a, count: l } = HP(t),
    { className: c, style: d, rtl: u, containerId: f } = t;
  function y(v) {
    const S = en(
      "Toastify__toast-container",
      `Toastify__toast-container--${v}`,
      { "Toastify__toast-container--rtl": u }
    );
    return lt(c)
      ? c({ position: v, rtl: u, defaultClassName: S })
      : en(S, Ks(c));
  }
  function m() {
    n && (o(!0), ue.play());
  }
  return (
    QP(() => {
      if (n) {
        var v;
        const S = i.current.querySelectorAll('[data-in="true"]'),
          h = 12,
          p = (v = t.position) == null ? void 0 : v.includes("top");
        let g = 0,
          C = 0;
        Array.from(S)
          .reverse()
          .forEach((E, T) => {
            const b = E;
            b.classList.add("Toastify__toast--stacked"),
              T > 0 && (b.dataset.collapsed = `${r}`),
              b.dataset.pos || (b.dataset.pos = p ? "top" : "bot");
            const P = g * (r ? 0.2 : 1) + (r ? 0 : h * T);
            b.style.setProperty("--y", `${p ? P : -1 * P}px`),
              b.style.setProperty("--g", `${h}`),
              b.style.setProperty("--s", "" + (1 - (r ? C : 0))),
              (g += b.offsetHeight),
              (C += 0.025);
          });
      }
    }, [r, l, n]),
    J.createElement(
      "div",
      {
        ref: i,
        className: "Toastify",
        id: f,
        onMouseEnter: () => {
          n && (o(!1), ue.pause());
        },
        onMouseLeave: m,
      },
      s((v, S) => {
        const h = S.length ? { ...d } : { ...d, pointerEvents: "none" };
        return J.createElement(
          "div",
          { className: y(v), style: h, key: `container-${v}` },
          S.map((p) => {
            let { content: g, props: C } = p;
            return J.createElement(
              ZP,
              {
                ...C,
                stacked: n,
                collapseAll: m,
                isIn: a(C.toastId, C.containerId),
                style: C.style,
                key: `toast-${C.key}`,
              },
              g
            );
          })
        );
      })
    )
  );
}
const tf = () => ({
  infoToast: (r, o) => {
    ue.info(r, {
      toastId: o,
      icon: w.jsx(jP, { color: "#3b82f6" }),
      closeOnClick: !0,
      draggable: !0,
      theme: "dark",
      transition: ac,
      progressClassName: "bg-blue-600",
    });
  },
  errorToast: (r, o) => {
    ue.error(r, {
      toastId: o,
      icon: w.jsx(_P, { color: "#b91c1c" }),
      closeOnClick: !0,
      draggable: !0,
      theme: "dark",
      transition: ac,
      progressClassName: "bg-red-700",
    });
  },
  warnToast: (r, o) => {
    ue.warn(r, {
      toastId: o,
      icon: w.jsx($P, { color: "#ca8a04" }),
      closeOnClick: !0,
      draggable: !0,
      theme: "dark",
      transition: ac,
      progressClassName: "bg-yellow-600",
    });
  },
});
function tb() {
  return w.jsx(eb, {
    limit: 3,
    toastClassName: "bg-background",
    autoClose: 6e3,
  });
}
const nb = { sm: "768px", md: "1000px", lg: "1280px" },
  vo = { rows: 21, nodes: 21 },
  Mr = {
    Small: { rows: 21, nodes: 21 },
    Medium: { rows: 29, nodes: 29 },
    Large: { rows: 39, nodes: 39 },
  },
  _h = { IS_INTRO_SHOWN: "isIntroShown", IS_GUID_SHOWN: "isGuidShown" },
  oo = { NONE: "none", BFS: "bfs", DFS: "dfs" },
  nf = { BTM: "btm" },
  De = {
    PathFound: "path-found",
    PathNotFound: "path-not-found",
    ExploredAlready: "explored-already",
    OutOfBoundary: "out-of-boundary",
    StopSearch: "stop-search",
    PathFoundButStopSearch: "path-found-stop-search",
  },
  rl = { MazeGenStop: "maz-gen-stop" },
  rf = "-";
function rb(e) {
  const t = ib(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(s) {
    const a = s.split(rf);
    return a[0] === "" && a.length !== 1 && a.shift(), Ky(a, t) || ob(s);
  }
  function i(s, a) {
    const l = n[s] || [];
    return a && r[s] ? [...l, ...r[s]] : l;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function Ky(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Ky(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(rf);
  return (s = t.validators.find(({ validator: a }) => a(i))) == null
    ? void 0
    : s.classGroupId;
}
const jh = /^\[(.+)\]$/;
function ob(e) {
  if (jh.test(e)) {
    const t = jh.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function ib(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    ab(Object.entries(e.classGroups), n).forEach(([i, s]) => {
      Tu(s, r, i, t);
    }),
    r
  );
}
function Tu(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Ih(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (sb(o)) {
        Tu(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      Tu(s, Ih(t, i), n, r);
    });
  });
}
function Ih(e, t) {
  let n = e;
  return (
    t.split(rf).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function sb(e) {
  return e.isThemeGetter;
}
function ab(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((i) =>
          typeof i == "string"
            ? t + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a]))
            : i
        );
        return [n, o];
      })
    : e;
}
function lb(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, s) {
    n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0) return s;
      if ((s = r.get(i)) !== void 0) return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    },
  };
}
const Yy = "!";
function cb(e) {
  const { separator: t, experimentalParseClassName: n } = e,
    r = t.length === 1,
    o = t[0],
    i = t.length;
  function s(a) {
    const l = [];
    let c = 0,
      d = 0,
      u;
    for (let S = 0; S < a.length; S++) {
      let h = a[S];
      if (c === 0) {
        if (h === o && (r || a.slice(S, S + i) === t)) {
          l.push(a.slice(d, S)), (d = S + i);
          continue;
        }
        if (h === "/") {
          u = S;
          continue;
        }
      }
      h === "[" ? c++ : h === "]" && c--;
    }
    const f = l.length === 0 ? a : a.substring(d),
      y = f.startsWith(Yy),
      m = y ? f.substring(1) : f,
      v = u && u > d ? u - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: y,
      baseClassName: m,
      maybePostfixModifierPosition: v,
    };
  }
  return n
    ? function (l) {
        return n({ className: l, parseClassName: s });
      }
    : s;
}
function ub(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function db(e) {
  return { cache: lb(e.cacheSize), parseClassName: cb(e), ...rb(e) };
}
const fb = /\s+/;
function pb(e, t) {
  const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    i = new Set();
  return e
    .trim()
    .split(fb)
    .map((s) => {
      const {
        modifiers: a,
        hasImportantModifier: l,
        baseClassName: c,
        maybePostfixModifierPosition: d,
      } = n(s);
      let u = !!d,
        f = r(u ? c.substring(0, d) : c);
      if (!f) {
        if (!u) return { isTailwindClass: !1, originalClassName: s };
        if (((f = r(c)), !f))
          return { isTailwindClass: !1, originalClassName: s };
        u = !1;
      }
      const y = ub(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? y + Yy : y,
        classGroupId: f,
        originalClassName: s,
        hasPostfixModifier: u,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: l, hasPostfixModifier: c } = s,
        d = a + l;
      return i.has(d)
        ? !1
        : (i.add(d), o(l, c).forEach((u) => i.add(a + u)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function hb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Xy(t)) && (r && (r += " "), (r += n));
  return r;
}
function Xy(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xy(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function mb(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const c = t.reduce((d, u) => u(d), e());
    return (n = db(c)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const d = pb(l, n);
    return o(l, d), d;
  }
  return function () {
    return i(hb.apply(null, arguments));
  };
}
function he(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Qy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  gb = /^\d+\/\d+$/,
  vb = new Set(["px", "full", "screen"]),
  yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  xb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Sb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Cb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Yt(e) {
  return ur(e) || vb.has(e) || gb.test(e);
}
function wn(e) {
  return ko(e, "length", Rb);
}
function ur(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ps(e) {
  return ko(e, "number", ur);
}
function $o(e) {
  return !!e && Number.isInteger(Number(e));
}
function Eb(e) {
  return e.endsWith("%") && ur(e.slice(0, -1));
}
function Q(e) {
  return Qy.test(e);
}
function Sn(e) {
  return yb.test(e);
}
const Pb = new Set(["length", "size", "percentage"]);
function bb(e) {
  return ko(e, Pb, Zy);
}
function Tb(e) {
  return ko(e, "position", Zy);
}
const kb = new Set(["image", "url"]);
function Ab(e) {
  return ko(e, kb, Db);
}
function Nb(e) {
  return ko(e, "", Mb);
}
function Wo() {
  return !0;
}
function ko(e, t, n) {
  const r = Qy.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Rb(e) {
  return xb.test(e) && !wb.test(e);
}
function Zy() {
  return !1;
}
function Mb(e) {
  return Sb.test(e);
}
function Db(e) {
  return Cb.test(e);
}
function _b() {
  const e = he("colors"),
    t = he("spacing"),
    n = he("blur"),
    r = he("brightness"),
    o = he("borderColor"),
    i = he("borderRadius"),
    s = he("borderSpacing"),
    a = he("borderWidth"),
    l = he("contrast"),
    c = he("grayscale"),
    d = he("hueRotate"),
    u = he("invert"),
    f = he("gap"),
    y = he("gradientColorStops"),
    m = he("gradientColorStopPositions"),
    v = he("inset"),
    S = he("margin"),
    h = he("opacity"),
    p = he("padding"),
    g = he("saturate"),
    C = he("scale"),
    E = he("sepia"),
    T = he("skew"),
    b = he("space"),
    P = he("translate"),
    A = () => ["auto", "contain", "none"],
    k = () => ["auto", "hidden", "clip", "visible", "scroll"],
    R = () => ["auto", Q, t],
    M = () => [Q, t],
    $ = () => ["", Yt, wn],
    F = () => ["auto", ur, Q],
    L = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    O = () => ["solid", "dashed", "dotted", "double", "none"],
    I = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    N = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    _ = () => ["", "0", Q],
    B = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    W = () => [ur, Ps],
    K = () => [ur, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Wo],
      spacing: [Yt, wn],
      blur: ["none", "", Sn, Q],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Sn, Q],
      borderSpacing: M(),
      borderWidth: $(),
      contrast: W(),
      grayscale: _(),
      hueRotate: K(),
      invert: _(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Eb, wn],
      inset: R(),
      margin: R(),
      opacity: W(),
      padding: M(),
      saturate: W(),
      scale: W(),
      sepia: _(),
      skew: K(),
      space: M(),
      translate: M(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", Q] }],
      container: ["container"],
      columns: [{ columns: [Sn] }],
      "break-after": [{ "break-after": B() }],
      "break-before": [{ "break-before": B() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...L(), Q] }],
      overflow: [{ overflow: k() }],
      "overflow-x": [{ "overflow-x": k() }],
      "overflow-y": [{ "overflow-y": k() }],
      overscroll: [{ overscroll: A() }],
      "overscroll-x": [{ "overscroll-x": A() }],
      "overscroll-y": [{ "overscroll-y": A() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [v] }],
      "inset-x": [{ "inset-x": [v] }],
      "inset-y": [{ "inset-y": [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", $o, Q] }],
      basis: [{ basis: R() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
      grow: [{ grow: _() }],
      shrink: [{ shrink: _() }],
      order: [{ order: ["first", "last", "none", $o, Q] }],
      "grid-cols": [{ "grid-cols": [Wo] }],
      "col-start-end": [{ col: ["auto", { span: ["full", $o, Q] }, Q] }],
      "col-start": [{ "col-start": F() }],
      "col-end": [{ "col-end": F() }],
      "grid-rows": [{ "grid-rows": [Wo] }],
      "row-start-end": [{ row: ["auto", { span: [$o, Q] }, Q] }],
      "row-start": [{ "row-start": F() }],
      "row-end": [{ "row-end": F() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
      gap: [{ gap: [f] }],
      "gap-x": [{ "gap-x": [f] }],
      "gap-y": [{ "gap-y": [f] }],
      "justify-content": [{ justify: ["normal", ...N()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...N(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...N(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [p] }],
      px: [{ px: [p] }],
      py: [{ py: [p] }],
      ps: [{ ps: [p] }],
      pe: [{ pe: [p] }],
      pt: [{ pt: [p] }],
      pr: [{ pr: [p] }],
      pb: [{ pb: [p] }],
      pl: [{ pl: [p] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [b] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [b] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
      "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            Q,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Sn] },
            Sn,
          ],
        },
      ],
      h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Sn, wn] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Ps,
          ],
        },
      ],
      "font-family": [{ font: [Wo] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            Q,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", ur, Ps] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Yt,
            Q,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", Q] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...O(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Yt, wn] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Yt, Q] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: M() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            Q,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", Q] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...L(), Tb] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", bb] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Ab,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [m] }],
      "gradient-via-pos": [{ via: [m] }],
      "gradient-to-pos": [{ to: [m] }],
      "gradient-from": [{ from: [y] }],
      "gradient-via": [{ via: [y] }],
      "gradient-to": [{ to: [y] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [...O(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: O() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...O()] }],
      "outline-offset": [{ "outline-offset": [Yt, Q] }],
      "outline-w": [{ outline: [Yt, wn] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: $() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [Yt, wn] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Sn, Nb] }],
      "shadow-color": [{ shadow: [Wo] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": [...I(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": I() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Sn, Q] }],
      grayscale: [{ grayscale: [c] }],
      "hue-rotate": [{ "hue-rotate": [d] }],
      invert: [{ invert: [u] }],
      saturate: [{ saturate: [g] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
      "backdrop-invert": [{ "backdrop-invert": [u] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [g] }],
      "backdrop-sepia": [{ "backdrop-sepia": [E] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            Q,
          ],
        },
      ],
      duration: [{ duration: K() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
      delay: [{ delay: K() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [$o, Q] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [T] }],
      "skew-y": [{ "skew-y": [T] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            Q,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            Q,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": M() }],
      "scroll-mx": [{ "scroll-mx": M() }],
      "scroll-my": [{ "scroll-my": M() }],
      "scroll-ms": [{ "scroll-ms": M() }],
      "scroll-me": [{ "scroll-me": M() }],
      "scroll-mt": [{ "scroll-mt": M() }],
      "scroll-mr": [{ "scroll-mr": M() }],
      "scroll-mb": [{ "scroll-mb": M() }],
      "scroll-ml": [{ "scroll-ml": M() }],
      "scroll-p": [{ "scroll-p": M() }],
      "scroll-px": [{ "scroll-px": M() }],
      "scroll-py": [{ "scroll-py": M() }],
      "scroll-ps": [{ "scroll-ps": M() }],
      "scroll-pe": [{ "scroll-pe": M() }],
      "scroll-pt": [{ "scroll-pt": M() }],
      "scroll-pr": [{ "scroll-pr": M() }],
      "scroll-pb": [{ "scroll-pb": M() }],
      "scroll-pl": [{ "scroll-pl": M() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", Q] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Yt, wn, Ps] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const jb = mb(_b);
function H(...e) {
  return jb(en(e));
}
const of = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ol = x.createContext({}),
  il = x.createContext(null),
  sf = typeof window < "u",
  qy = sf ? x.useLayoutEffect : x.useEffect,
  Jy = x.createContext({ strict: !1 }),
  sl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Ib = "framerAppearId",
  e0 = "data-" + sl(Ib),
  Lb = { skipAnimations: !1, useManualTiming: !1 };
function Ob(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    schedule: (c, d = !1, u = !1) => {
      const y = u && r ? t : n;
      return d && i.add(c), y.has(c) || y.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    process: (c) => {
      if (((s = c), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        o && ((o = !1), l.process(c));
    },
  };
  return l;
}
const bs = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Fb = 40;
function t0(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = bs.reduce((h, p) => ((h[p] = Ob(i)), h), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: d,
      render: u,
      postRender: f,
    } = s,
    y = () => {
      const h = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(h - o.timestamp, Fb), 1)),
        (o.timestamp = h),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        c.process(o),
        d.process(o),
        u.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    m = () => {
      (n = !0), (r = !0), o.isProcessing || e(y);
    };
  return {
    schedule: bs.reduce((h, p) => {
      const g = s[p];
      return (h[p] = (C, E = !1, T = !1) => (n || m(), g.schedule(C, E, T))), h;
    }, {}),
    cancel: (h) => {
      for (let p = 0; p < bs.length; p++) s[bs[p]].cancel(h);
    },
    state: o,
    steps: s,
  };
}
const { schedule: af, cancel: nL } = t0(queueMicrotask, !1);
function Kr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const n0 = x.createContext({});
let Lh = !1;
function Vb(e, t, n, r, o) {
  const { visualElement: i } = x.useContext(ol),
    s = x.useContext(Jy),
    a = x.useContext(il),
    l = x.useContext(of).reducedMotion,
    c = x.useRef();
  (r = r || s.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const d = c.current,
    u = x.useContext(n0);
  d &&
    !d.projection &&
    o &&
    (d.type === "html" || d.type === "svg") &&
    Bb(c.current, n, o, u),
    x.useInsertionEffect(() => {
      d && d.update(n, a);
    });
  const f = x.useRef(!!(n[e0] && !window.HandoffComplete));
  return (
    qy(() => {
      d &&
        (d.updateFeatures(),
        af.render(d.render),
        f.current && d.animationState && d.animationState.animateChanges());
    }),
    x.useEffect(() => {
      d &&
        (!f.current && d.animationState && d.animationState.animateChanges(),
        f.current && ((f.current = !1), Lh || ((Lh = !0), queueMicrotask(zb))));
    }),
    d
  );
}
function zb() {
  window.HandoffComplete = !0;
}
function Bb(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : r0(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Kr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function r0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : r0(e.parent);
}
function $b(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Kr(n) && (n.current = r));
    },
    [t]
  );
}
function _i(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ji(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const lf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  cf = ["initial", ...lf];
function al(e) {
  return ji(e.animate) || cf.some((t) => _i(e[t]));
}
function o0(e) {
  return !!(al(e) || e.variants);
}
function Wb(e, t) {
  if (al(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || _i(n) ? n : void 0,
      animate: _i(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Ub(e) {
  const { initial: t, animate: n } = Wb(e, x.useContext(ol));
  return x.useMemo(() => ({ initial: t, animate: n }), [Oh(t), Oh(n)]);
}
function Oh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Fh = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  yo = {};
for (const e in Fh) yo[e] = { isEnabled: (t) => Fh[e].some((n) => !!t[n]) };
function Hb(e) {
  for (const t in e) yo[t] = { ...yo[t], ...e[t] };
}
const uf = x.createContext({}),
  Gb = Symbol.for("motionComponentSymbol"),
  Ue = (e) => e;
let ku = Ue;
function Kb({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && Hb(e);
  function i(a, l) {
    let c;
    const d = { ...x.useContext(of), ...a, layoutId: Yb(a) },
      { isStatic: u } = d,
      f = Ub(a),
      y = r(a, u);
    if (!u && sf) {
      Xb();
      const m = Qb(d);
      (c = m.MeasureLayout),
        (f.visualElement = Vb(o, y, d, t, m.ProjectionNode));
    }
    return w.jsxs(ol.Provider, {
      value: f,
      children: [
        c && f.visualElement
          ? w.jsx(c, { visualElement: f.visualElement, ...d })
          : null,
        n(o, a, $b(y, f.visualElement, l), y, u, f.visualElement),
      ],
    });
  }
  const s = x.forwardRef(i);
  return (s[Gb] = o), s;
}
function Yb({ layoutId: e }) {
  const t = x.useContext(uf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Xb(e, t) {
  x.useContext(Jy).strict;
}
function Qb(e) {
  const { drag: t, layout: n } = yo;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Zb(e) {
  function t(r, o = {}) {
    return Kb(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const qb = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function df(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(qb.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const ba = {};
function Jb(e) {
  Object.assign(ba, e);
}
const Xi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Zn = new Set(Xi);
function i0(e, { layout: t, layoutId: n }) {
  return (
    Zn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ba[e] || e === "opacity"))
  );
}
const We = (e) => !!(e && e.getVelocity),
  eT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  tT = Xi.length;
function nT(e, t, n) {
  let r = "";
  for (let o = 0; o < tT; o++) {
    const i = Xi[o];
    if (e[i] !== void 0) {
      const s = eT[i] || i;
      r += `${s}(${e[i]}) `;
    }
  }
  return (r = r.trim()), n ? (r = n(e, t ? "" : r)) : t && (r = "none"), r;
}
const s0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  a0 = s0("--"),
  rT = s0("var(--"),
  ff = (e) => (rT(e) ? oT.test(e.split("/*")[0].trim()) : !1),
  oT =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  iT = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Wn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ao = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ci = { ...Ao, transform: (e) => Wn(0, 1, e) },
  Ts = { ...Ao, default: 1 },
  ui = (e) => Math.round(e * 1e5) / 1e5,
  pf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  sT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  aT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Qi(e) {
  return typeof e == "string";
}
function lT(e) {
  return e == null;
}
const Zi = (e) => ({
    test: (t) => Qi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  En = Zi("deg"),
  Ht = Zi("%"),
  G = Zi("px"),
  cT = Zi("vh"),
  uT = Zi("vw"),
  Vh = {
    ...Ht,
    parse: (e) => Ht.parse(e) / 100,
    transform: (e) => Ht.transform(e * 100),
  },
  zh = { ...Ao, transform: Math.round },
  l0 = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: En,
    rotateX: En,
    rotateY: En,
    rotateZ: En,
    scale: Ts,
    scaleX: Ts,
    scaleY: Ts,
    scaleZ: Ts,
    skew: En,
    skewX: En,
    skewY: En,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: ci,
    originX: Vh,
    originY: Vh,
    originZ: G,
    zIndex: zh,
    backgroundPositionX: G,
    backgroundPositionY: G,
    fillOpacity: ci,
    strokeOpacity: ci,
    numOctaves: zh,
  };
function hf(e, t, n) {
  const { style: r, vars: o, transform: i, transformOrigin: s } = e;
  let a = !1,
    l = !1,
    c = !0;
  for (const d in t) {
    const u = t[d];
    if (a0(d)) {
      o[d] = u;
      continue;
    }
    const f = l0[d],
      y = iT(u, f);
    if (Zn.has(d)) {
      if (((a = !0), (i[d] = y), !c)) continue;
      u !== (f.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((l = !0), (s[d] = y)) : (r[d] = y);
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = nT(e.transform, c, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: d = "50%", originY: u = "50%", originZ: f = 0 } = s;
    r.transformOrigin = `${d} ${u} ${f}`;
  }
}
const mf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function c0(e, t, n) {
  for (const r in t) !We(t[r]) && !i0(r, n) && (e[r] = t[r]);
}
function dT({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = mf();
    return hf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function fT(e, t) {
  const n = e.style || {},
    r = {};
  return c0(r, n, e), Object.assign(r, dT(e, t)), r;
}
function pT(e, t) {
  const n = {},
    r = fT(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const hT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ta(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    hT.has(e)
  );
}
let u0 = (e) => !Ta(e);
function mT(e) {
  e && (u0 = (t) => (t.startsWith("on") ? !Ta(t) : e(t)));
}
try {
  mT(require("@emotion/is-prop-valid").default);
} catch {}
function gT(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((u0(o) ||
        (n === !0 && Ta(o)) ||
        (!t && !Ta(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function Bh(e, t, n) {
  return typeof e == "string" ? e : G.transform(t + n * e);
}
function vT(e, t, n) {
  const r = Bh(t, e.x, e.width),
    o = Bh(n, e.y, e.height);
  return `${r} ${o}`;
}
const yT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  xT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function wT(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? yT : xT;
  e[i.offset] = G.transform(-r);
  const s = G.transform(t),
    a = G.transform(n);
  e[i.array] = `${s} ${a}`;
}
function gf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  d,
  u
) {
  if ((hf(e, c, u), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: y, dimensions: m } = e;
  f.transform && (m && (y.transform = f.transform), delete f.transform),
    m &&
      (o !== void 0 || i !== void 0 || y.transform) &&
      (y.transformOrigin = vT(
        m,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && wT(f, s, a, l, !1);
}
const d0 = () => ({ ...mf(), attrs: {} }),
  vf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ST(e, t, n, r) {
  const o = x.useMemo(() => {
    const i = d0();
    return (
      gf(i, t, vf(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    c0(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function CT(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (df(n) ? ST : pT)(r, i, s, n),
      c = gT(r, typeof n == "string", e),
      d = n !== x.Fragment ? { ...c, ...l, ref: o } : {},
      { children: u } = r,
      f = x.useMemo(() => (We(u) ? u.get() : u), [u]);
    return x.createElement(n, { ...d, children: f });
  };
}
function f0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const p0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function h0(e, t, n, r) {
  f0(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(p0.has(o) ? o : sl(o), t.attrs[o]);
}
function yf(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (We(o[s]) ||
      (t.style && We(t.style[s])) ||
      i0(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return (
    n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i
  );
}
function m0(e, t, n) {
  const r = yf(e, t, n);
  for (const o in e)
    if (We(e[o]) || We(t[o])) {
      const i =
        Xi.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function $h(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function xf(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = $h(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = $h(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function wf(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Au = (e) => Array.isArray(e),
  ET = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  PT = (e) => (Au(e) ? e[e.length - 1] || 0 : e);
function Ys(e) {
  const t = We(e) ? e.get() : e;
  return ET(t) ? t.toValue() : t;
}
const g0 = new Set(["opacity", "clipPath", "filter", "transform"]);
function v0(e) {
  if (Zn.has(e)) return "transform";
  if (g0.has(e)) return sl(e);
}
function ll(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cl(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function bT(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  o,
  i,
  s,
  a
) {
  const l = { latestValues: kT(o, i, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (c) => r(o, c, l)), l;
}
const y0 = (e) => (t, n) => {
  const r = x.useContext(ol),
    o = x.useContext(il),
    i = () => bT(e, t, r, o, n);
  return n ? i() : wf(i);
};
function TT(e, t) {
  const n = v0(t);
  n && ll(e, n);
}
function Wh(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = xf(e, r[o]);
    if (i) {
      const { transitionEnd: s, transition: a, ...l } = i;
      n(l, s);
    }
  }
}
function kT(e, t, n, r, o) {
  var i;
  const s = {},
    a = [],
    l =
      r &&
      ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) ===
        void 0,
    c = o(e, {});
  for (const S in c) s[S] = Ys(c[S]);
  let { initial: d, animate: u } = e;
  const f = al(e),
    y = o0(e);
  t &&
    y &&
    !f &&
    e.inherit !== !1 &&
    (d === void 0 && (d = t.initial), u === void 0 && (u = t.animate));
  let m = n ? n.initial === !1 : !1;
  m = m || d === !1;
  const v = m ? u : d;
  return (
    v &&
      typeof v != "boolean" &&
      !ji(v) &&
      Wh(e, v, (S, h) => {
        for (const p in S) {
          let g = S[p];
          if (Array.isArray(g)) {
            const C = m ? g.length - 1 : 0;
            g = g[C];
          }
          g !== null && (s[p] = g);
        }
        for (const p in h) s[p] = h[p];
      }),
    l &&
      (u &&
        d !== !1 &&
        !ji(u) &&
        Wh(e, u, (S) => {
          for (const h in S) TT(a, h);
        }),
      a.length && (s.willChange = a.join(","))),
    s
  );
}
const {
    schedule: de,
    cancel: dn,
    state: Ie,
    steps: lc,
  } = t0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0),
  AT = {
    useVisualState: y0({
      scrapeMotionValuesFromProps: m0,
      createRenderState: d0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        de.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          de.render(() => {
            gf(n, r, vf(t.tagName), e.transformTemplate), h0(t, n);
          });
      },
    }),
  },
  NT = {
    useVisualState: y0({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: yf,
      createRenderState: mf,
    }),
  };
function RT(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(df(e) ? AT : NT),
    preloadedFeatures: n,
    useRender: CT(t),
    createVisualElement: r,
    Component: e,
  };
}
function tn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const x0 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ul(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const MT = (e) => (t) => x0(t) && e(t, ul(t));
function rn(e, t, n, r) {
  return tn(e, t, MT(n), r);
}
const DT = (e, t) => (n) => t(e(n)),
  on = (...e) => e.reduce(DT);
function w0(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Uh = w0("dragHorizontal"),
  Hh = w0("dragVertical");
function S0(e) {
  let t = !1;
  if (e === "y") t = Hh();
  else if (e === "x") t = Uh();
  else {
    const n = Uh(),
      r = Hh();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function C0() {
  const e = S0(!0);
  return e ? (e(), !1) : !0;
}
class qn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Gh(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, s) => {
      if (i.pointerType === "touch" || C0()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && de.postRender(() => l(i, s));
    };
  return rn(e.current, n, o, { passive: !e.getProps()[r] });
}
class _T extends qn {
  mount() {
    this.unmount = on(Gh(this.node, !0), Gh(this.node, !1));
  }
  unmount() {}
}
class jT extends qn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = on(
      tn(this.node.current, "focus", () => this.onFocus()),
      tn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const E0 = (e, t) => (t ? (e === t ? !0 : E0(e, t.parentElement)) : !1);
function cc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ul(n));
}
class IT extends qn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ue),
      (this.removeEndListeners = Ue),
      (this.removeAccessibleListeners = Ue),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = rn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: c,
                  onTapCancel: d,
                  globalTapTarget: u,
                } = this.node.getProps(),
                f = !u && !E0(this.node.current, a.target) ? d : c;
              f && de.update(() => f(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = rn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = on(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                cc("up", (l, c) => {
                  const { onTap: d } = this.node.getProps();
                  d && de.postRender(() => d(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = tn(this.node.current, "keyup", s)),
              cc("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = tn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && cc("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = tn(this.node.current, "blur", r);
        this.removeAccessibleListeners = on(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && de.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !C0()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && de.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = rn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = tn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = on(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Nu = new WeakMap(),
  uc = new WeakMap(),
  LT = (e) => {
    const t = Nu.get(e.target);
    t && t(e);
  },
  OT = (e) => {
    e.forEach(LT);
  };
function FT({ root: e, ...t }) {
  const n = e || document;
  uc.has(n) || uc.set(n, {});
  const r = uc.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(OT, { root: e, ...t })), r[o];
}
function VT(e, t, n) {
  const r = FT(t);
  return (
    Nu.set(e, n),
    r.observe(e),
    () => {
      Nu.delete(e), r.unobserve(e);
    }
  );
}
const zT = { some: 0, all: 1 };
class BT extends qn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : zT[o],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: u } = this.node.getProps(),
          f = c ? d : u;
        f && f(l);
      };
    return VT(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some($T(t, n)) && this.startObserver();
  }
  unmount() {}
}
function $T({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const WT = {
  inView: { Feature: BT },
  tap: { Feature: IT },
  focus: { Feature: jT },
  hover: { Feature: _T },
};
function P0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function dl(e, t, n) {
  const r = e.getProps();
  return xf(r, t, n !== void 0 ? n : r.custom, e);
}
const Vn = (e) => e * 1e3,
  sn = (e) => e / 1e3,
  UT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  HT = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  GT = { type: "keyframes", duration: 0.8 },
  KT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  YT = (e, { keyframes: t }) =>
    t.length > 2
      ? GT
      : Zn.has(e)
      ? e.startsWith("scale")
        ? HT(t[1])
        : UT
      : KT;
function XT({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
function Sf(e, t) {
  return e[t] || e.default || e;
}
const QT = (e) => e !== null;
function fl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(QT),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
let Xs;
function ZT() {
  Xs = void 0;
}
const zn = {
    now: () => (
      Xs === void 0 &&
        zn.set(
          Ie.isProcessing || Lb.useManualTiming
            ? Ie.timestamp
            : performance.now()
        ),
      Xs
    ),
    set: (e) => {
      (Xs = e), queueMicrotask(ZT);
    },
  },
  b0 = (e) => /^0[^.\s]+$/u.test(e);
function qT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || b0(e)
    : !0;
}
const T0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  JT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ek(e) {
  const t = JT.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function k0(e, t, n = 1) {
  const [r, o] = ek(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return T0(s) ? parseFloat(s) : s;
  }
  return ff(o) ? k0(o, t, n + 1) : o;
}
const tk = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Kh = (e) => e === Ao || e === G,
  Yh = (e, t) => parseFloat(e.split(", ")[t]),
  Xh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return Yh(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Yh(i[1], e) : 0;
      }
    },
  nk = new Set(["x", "y", "z"]),
  rk = Xi.filter((e) => !nk.has(e));
function ok(e) {
  const t = [];
  return (
    rk.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const xo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Xh(4, 13),
  y: Xh(5, 14),
};
xo.translateX = xo.x;
xo.translateY = xo.y;
const A0 = (e) => (t) => t.test(e),
  ik = { test: (e) => e === "auto", parse: (e) => e },
  N0 = [Ao, G, Ht, En, uT, cT, ik],
  Qh = (e) => N0.find(A0(e)),
  mr = new Set();
let Ru = !1,
  Mu = !1;
function R0() {
  if (Mu) {
    const e = Array.from(mr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = ok(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Mu = !1), (Ru = !1), mr.forEach((e) => e.complete()), mr.clear();
}
function M0() {
  mr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Mu = !0);
  });
}
function sk() {
  M0(), R0();
}
class Cf {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (mr.add(this),
          Ru || ((Ru = !0), de.read(M0), de.resolveKeyframes(R0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      mr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), mr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ef = (e, t) => (n) =>
    !!(
      (Qi(n) && aT.test(n) && n.startsWith(e)) ||
      (t && !lT(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  D0 = (e, t, n) => (r) => {
    if (!Qi(r)) return r;
    const [o, i, s, a] = r.match(pf);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  ak = (e) => Wn(0, 255, e),
  dc = { ...Ao, transform: (e) => Math.round(ak(e)) },
  dr = {
    test: Ef("rgb", "red"),
    parse: D0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      dc.transform(e) +
      ", " +
      dc.transform(t) +
      ", " +
      dc.transform(n) +
      ", " +
      ui(ci.transform(r)) +
      ")",
  };
function lk(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Du = { test: Ef("#"), parse: lk, transform: dr.transform },
  Yr = {
    test: Ef("hsl", "hue"),
    parse: D0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ht.transform(ui(t)) +
      ", " +
      Ht.transform(ui(n)) +
      ", " +
      ui(ci.transform(r)) +
      ")",
  },
  Be = {
    test: (e) => dr.test(e) || Du.test(e) || Yr.test(e),
    parse: (e) =>
      dr.test(e) ? dr.parse(e) : Yr.test(e) ? Yr.parse(e) : Du.parse(e),
    transform: (e) =>
      Qi(e) ? e : e.hasOwnProperty("red") ? dr.transform(e) : Yr.transform(e),
  };
function ck(e) {
  var t, n;
  return (
    isNaN(e) &&
    Qi(e) &&
    (((t = e.match(pf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(sT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const _0 = "number",
  j0 = "color",
  uk = "var",
  dk = "var(",
  Zh = "${}",
  fk =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ii(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      fk,
      (l) => (
        Be.test(l)
          ? (r.color.push(i), o.push(j0), n.push(Be.parse(l)))
          : l.startsWith(dk)
          ? (r.var.push(i), o.push(uk), n.push(l))
          : (r.number.push(i), o.push(_0), n.push(parseFloat(l))),
        ++i,
        Zh
      )
    )
    .split(Zh);
  return { values: n, split: a, indexes: r, types: o };
}
function I0(e) {
  return Ii(e).values;
}
function L0(e) {
  const { split: t, types: n } = Ii(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === _0
          ? (i += ui(o[s]))
          : a === j0
          ? (i += Be.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const pk = (e) => (typeof e == "number" ? 0 : e);
function hk(e) {
  const t = I0(e);
  return L0(e)(t.map(pk));
}
const Un = {
    test: ck,
    parse: I0,
    createTransformer: L0,
    getAnimatableNone: hk,
  },
  mk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function gk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(pf) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = mk.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const vk = /\b([a-z-]*)\(.*?\)/gu,
  _u = {
    ...Un,
    getAnimatableNone: (e) => {
      const t = e.match(vk);
      return t ? t.map(gk).join(" ") : e;
    },
  },
  yk = {
    ...l0,
    color: Be,
    backgroundColor: Be,
    outlineColor: Be,
    fill: Be,
    stroke: Be,
    borderColor: Be,
    borderTopColor: Be,
    borderRightColor: Be,
    borderBottomColor: Be,
    borderLeftColor: Be,
    filter: _u,
    WebkitFilter: _u,
  },
  Pf = (e) => yk[e];
function O0(e, t) {
  let n = Pf(e);
  return (
    n !== _u && (n = Un), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const xk = new Set(["auto", "none", "0"]);
function wk(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !xk.has(i) && Ii(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = O0(n, o);
}
class F0 extends Cf {
  constructor(t, n, r, o) {
    super(t, n, r, o, o == null ? void 0 : o.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), ff(c))) {
        const d = k0(c, n.current);
        d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !tk.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = Qh(o),
      a = Qh(i);
    if (s !== a)
      if (Kh(s) && Kh(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) qT(t[o]) && r.push(o);
    r.length && wk(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xo[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = xo[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function V0(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const qh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Un.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Sk(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ck(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = qh(o, t),
    a = qh(i, t);
  return !s || !a ? !1 : Sk(e) || (n === "spring" && r);
}
class z0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && sk(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !Ck(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(fl(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function B0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ek = 5;
function $0(e, t, n) {
  const r = Math.max(t - Ek, 0);
  return B0(n - e(r), t - r);
}
const fc = 0.001,
  Pk = 0.01,
  bk = 10,
  Tk = 0.05,
  kk = 1;
function Ak({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Wn(Tk, kk, s)),
    (e = Wn(Pk, bk, sn(e))),
    s < 1
      ? ((o = (c) => {
          const d = c * s,
            u = d * e,
            f = d - n,
            y = ju(c, s),
            m = Math.exp(-u);
          return fc - (f / y) * m;
        }),
        (i = (c) => {
          const u = c * s * e,
            f = u * n + n,
            y = Math.pow(s, 2) * Math.pow(c, 2) * e,
            m = Math.exp(-u),
            v = ju(Math.pow(c, 2), s);
          return ((-o(c) + fc > 0 ? -1 : 1) * ((f - y) * m)) / v;
        }))
      : ((o = (c) => {
          const d = Math.exp(-c * e),
            u = (c - n) * e + 1;
          return -fc + d * u;
        }),
        (i = (c) => {
          const d = Math.exp(-c * e),
            u = (n - c) * (e * e);
          return d * u;
        }));
  const a = 5 / e,
    l = Rk(o, i, a);
  if (((e = Vn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
const Nk = 12;
function Rk(e, t, n) {
  let r = n;
  for (let o = 1; o < Nk; o++) r = r - e(r) / t(r);
  return r;
}
function ju(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Mk = ["duration", "bounce"],
  Dk = ["stiffness", "damping", "mass"];
function Jh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function _k(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Jh(e, Dk) && Jh(e, Mk)) {
    const n = Ak(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function W0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: d,
      velocity: u,
      isResolvedFromDuration: f,
    } = _k({ ...r, velocity: -sn(r.velocity || 0) }),
    y = u || 0,
    m = l / (2 * Math.sqrt(a * c)),
    v = i - o,
    S = sn(Math.sqrt(a / c)),
    h = Math.abs(v) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let p;
  if (m < 1) {
    const g = ju(S, m);
    p = (C) => {
      const E = Math.exp(-m * S * C);
      return (
        i - E * (((y + m * S * v) / g) * Math.sin(g * C) + v * Math.cos(g * C))
      );
    };
  } else if (m === 1) p = (g) => i - Math.exp(-S * g) * (v + (y + S * v) * g);
  else {
    const g = S * Math.sqrt(m * m - 1);
    p = (C) => {
      const E = Math.exp(-m * S * C),
        T = Math.min(g * C, 300);
      return (
        i - (E * ((y + m * S * v) * Math.sinh(T) + g * v * Math.cosh(T))) / g
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (g) => {
      const C = p(g);
      if (f) s.done = g >= d;
      else {
        let E = y;
        g !== 0 && (m < 1 ? (E = $0(p, g, C)) : (E = 0));
        const T = Math.abs(E) <= n,
          b = Math.abs(i - C) <= t;
        s.done = T && b;
      }
      return (s.value = s.done ? i : C), s;
    },
  };
}
function em({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const u = e[0],
    f = { done: !1, value: u },
    y = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    m = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let v = n * t;
  const S = u + v,
    h = s === void 0 ? S : s(S);
  h !== S && (v = h - u);
  const p = (P) => -v * Math.exp(-P / r),
    g = (P) => h + p(P),
    C = (P) => {
      const A = p(P),
        k = g(P);
      (f.done = Math.abs(A) <= c), (f.value = f.done ? h : k);
    };
  let E, T;
  const b = (P) => {
    y(f.value) &&
      ((E = P),
      (T = W0({
        keyframes: [f.value, m(f.value)],
        velocity: $0(g, P, f.value),
        damping: o,
        stiffness: i,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    b(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let A = !1;
        return (
          !T && E === void 0 && ((A = !0), C(P), b(P)),
          E !== void 0 && P >= E ? T.next(P - E) : (!A && C(P), f)
        );
      },
    }
  );
}
const U0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  jk = 1e-7,
  Ik = 12;
function Lk(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = U0(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > jk && ++a < Ik);
  return s;
}
function qi(e, t, n, r) {
  if (e === t && n === r) return Ue;
  const o = (i) => Lk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : U0(o(i), t, r));
}
const Ok = qi(0.42, 0, 1, 1),
  Fk = qi(0, 0, 0.58, 1),
  H0 = qi(0.42, 0, 0.58, 1),
  Vk = (e) => Array.isArray(e) && typeof e[0] != "number",
  G0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  K0 = (e) => (t) => 1 - e(1 - t),
  bf = (e) => 1 - Math.sin(Math.acos(e)),
  Y0 = K0(bf),
  zk = G0(bf),
  X0 = qi(0.33, 1.53, 0.69, 0.99),
  Tf = K0(X0),
  Bk = G0(Tf),
  $k = (e) =>
    (e *= 2) < 1 ? 0.5 * Tf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  tm = {
    linear: Ue,
    easeIn: Ok,
    easeInOut: H0,
    easeOut: Fk,
    circIn: bf,
    circInOut: zk,
    circOut: Y0,
    backIn: Tf,
    backInOut: Bk,
    backOut: X0,
    anticipate: $k,
  },
  nm = (e) => {
    if (Array.isArray(e)) {
      ku(e.length === 4);
      const [t, n, r, o] = e;
      return qi(t, n, r, o);
    } else if (typeof e == "string") return ku(tm[e] !== void 0), tm[e];
    return e;
  },
  Li = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Se = (e, t, n) => e + (t - e) * n;
function pc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Wk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = pc(l, a, e + 1 / 3)), (i = pc(l, a, e)), (s = pc(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ka(e, t) {
  return (n) => (n > 0 ? t : e);
}
const hc = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  Uk = [Du, dr, Yr],
  Hk = (e) => Uk.find((t) => t.test(e));
function rm(e) {
  const t = Hk(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Yr && (n = Wk(n)), n;
}
const om = (e, t) => {
    const n = rm(e),
      r = rm(t);
    if (!n || !r) return ka(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = hc(n.red, r.red, i)),
      (o.green = hc(n.green, r.green, i)),
      (o.blue = hc(n.blue, r.blue, i)),
      (o.alpha = Se(n.alpha, r.alpha, i)),
      dr.transform(o)
    );
  },
  Iu = new Set(["none", "hidden"]);
function Gk(e, t) {
  return Iu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Kk(e, t) {
  return (n) => Se(e, t, n);
}
function kf(e) {
  return typeof e == "number"
    ? Kk
    : typeof e == "string"
    ? ff(e)
      ? ka
      : Be.test(e)
      ? om
      : Qk
    : Array.isArray(e)
    ? Q0
    : typeof e == "object"
    ? Be.test(e)
      ? om
      : Yk
    : ka;
}
function Q0(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => kf(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function Yk(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = kf(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function Xk(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const Qk = (e, t) => {
  const n = Un.createTransformer(t),
    r = Ii(e),
    o = Ii(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Iu.has(e) && !o.values.length) || (Iu.has(t) && !r.values.length)
      ? Gk(e, t)
      : on(Q0(Xk(r, o), o.values), n)
    : ka(e, t);
};
function Z0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Se(e, t, n)
    : kf(e)(e, t);
}
function Zk(e, t, n) {
  const r = [],
    o = n || Z0,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ue : t;
      a = on(l, a);
    }
    r.push(a);
  }
  return r;
}
function qk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((ku(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = Zk(t, r, o),
    a = s.length,
    l = (c) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const u = Li(e[d], e[d + 1], c);
      return s[d](u);
    };
  return n ? (c) => l(Wn(e[0], e[i - 1], c)) : l;
}
function Jk(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Li(0, t, r);
    e.push(Se(n, 1, o));
  }
}
function eA(e) {
  const t = [0];
  return Jk(t, e.length - 1), t;
}
function tA(e, t) {
  return e.map((n) => n * t);
}
function nA(e, t) {
  return e.map(() => t || H0).splice(0, e.length - 1);
}
function Aa({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = Vk(r) ? r.map(nm) : nm(r),
    i = { done: !1, value: t[0] },
    s = tA(n && n.length === t.length ? n : eA(t), e),
    a = qk(s, t, { ease: Array.isArray(o) ? o : nA(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const im = 2e4;
function rA(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < im; ) (t += n), (r = e.next(t));
  return t >= im ? 1 / 0 : t;
}
const oA = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => de.update(t, !0),
      stop: () => dn(t),
      now: () => (Ie.isProcessing ? Ie.timestamp : zn.now()),
    };
  },
  iA = { decay: em, inertia: em, tween: Aa, keyframes: Aa, spring: W0 },
  sA = (e) => e / 100;
class Af extends z0 {
  constructor({ KeyframeResolver: t = Cf, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: o, keyframes: i } = this.options,
      s = (a, l) => this.onKeyframesResolved(a, l);
    r && o && o.owner
      ? (this.resolver = o.owner.resolveKeyframes(i, s, r, o))
      : (this.resolver = new t(i, s, r, o)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = iA[n] || Aa;
    let l, c;
    a !== Aa &&
      typeof t[0] != "number" &&
      ((l = on(sA, Z0(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      d.calculatedDuration === null && (d.calculatedDuration = rA(d));
    const { calculatedDuration: u } = d,
      f = u + o,
      y = f * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: u,
      resolvedDuration: f,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: u,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: m,
      repeatDelay: v,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? h < 0 : h > d;
    (this.currentTime = Math.max(h, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d);
    let g = this.currentTime,
      C = i;
    if (y) {
      const P = Math.min(this.currentTime, d) / u;
      let A = Math.floor(P),
        k = P % 1;
      !k && P >= 1 && (k = 1),
        k === 1 && A--,
        (A = Math.min(A, y + 1)),
        !!(A % 2) &&
          (m === "reverse"
            ? ((k = 1 - k), v && (k -= v / u))
            : m === "mirror" && (C = s)),
        (g = Wn(0, 1, k) * u);
    }
    const E = p ? { done: !1, value: l[0] } : C.next(g);
    a && (E.value = a(E.value));
    let { done: T } = E;
    !p &&
      c !== null &&
      (T = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const b =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      b && o !== void 0 && (E.value = fl(l, this.options, o)),
      S && S(E.value),
      b && this.finish(),
      E
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? sn(t.calculatedDuration) : 0;
  }
  get time() {
    return sn(this.currentTime);
  }
  set time(t) {
    (t = Vn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = sn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = oA, onPlay: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const q0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function J0(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Nf) ||
    q0(e) ||
    (Array.isArray(e) && e.every(J0))
  );
}
const Xo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Nf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Xo([0, 0.65, 0.55, 1]),
    circOut: Xo([0.55, 0, 1, 0.45]),
    backIn: Xo([0.31, 0.01, 0.66, -0.59]),
    backOut: Xo([0.33, 1.53, 0.69, 0.99]),
  };
function aA(e) {
  return ex(e) || Nf.easeOut;
}
function ex(e) {
  if (e) return q0(e) ? Xo(e) : Array.isArray(e) ? e.map(aA) : Nf[e];
}
function lA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = ex(a);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: o,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const cA = V0(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Na = 10,
  uA = 2e4;
function dA(e) {
  return e.type === "spring" || !J0(e.ease);
}
function fA(e, t) {
  const n = new Af({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < uA; ) (r = n.sample(i)), o.push(r.value), (i += Na);
  return { times: void 0, keyframes: o, duration: i - Na, ease: "linear" };
}
class sm extends z0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: o } = this.options;
    (this.resolver = new F0(o, (i, s) => this.onKeyframesResolved(i, s), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (dA(this.options)) {
      const { onComplete: u, onUpdate: f, motionValue: y, ...m } = this.options,
        v = fA(t, m);
      (t = v.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = v.duration),
        (i = v.times),
        (s = v.ease),
        (a = "keyframes");
    }
    const d = lA(l.owner.current, c, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = zn.now()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: u } = this.options;
            l.set(fl(t, this.options, n)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return sn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return sn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Vn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ue;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Ue;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const { motionValue: c, onUpdate: d, onComplete: u, ...f } = this.options,
        y = new Af({
          ...f,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        m = Vn(this.time);
      c.setWithVelocity(y.sample(m - Na).value, y.sample(m).value, Na);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    return (
      cA() &&
      r &&
      g0.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
function pA(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t,
      s = (o === null ? 0 : o.value) / 100;
    n !== s && e(s), (n = s);
  };
  return de.update(r, !0), () => dn(r);
}
const hA = V0(() => window.ScrollTimeline !== void 0);
class mA {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (hA() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          pA((o) => {
            r.time = r.duration * o;
          }, t)
        );
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Rf =
  (e, t, n, r = {}, o, i, s) =>
  (a) => {
    const l = Sf(r, e) || {},
      c = l.delay || r.delay || 0;
    let { elapsed: d = 0 } = r;
    d = d - Vn(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -d,
      onUpdate: (y) => {
        t.set(y), l.onUpdate && l.onUpdate(y);
      },
      onComplete: () => {
        a(), l.onComplete && l.onComplete(), s && s();
      },
      onStop: s,
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    XT(l) || (u = { ...u, ...YT(e, u) }),
      u.duration && (u.duration = Vn(u.duration)),
      u.repeatDelay && (u.repeatDelay = Vn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const y = fl(u.keyframes, l);
      if (y !== void 0)
        return (
          de.update(() => {
            u.onUpdate(y), u.onComplete();
          }),
          new mA([])
        );
    }
    return !i && sm.supports(u) ? new sm(u) : new Af(u);
  };
class Mf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ll(this.subscriptions, t), () => cl(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const am = 30,
  gA = (e) => !isNaN(parseFloat(e));
class tx {
  constructor(t, n = {}) {
    (this.version = "11.3.19"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = zn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = zn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = gA(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Mf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            de.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = zn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > am
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, am);
    return B0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Oi(e, t) {
  return new tx(e, t);
}
function vA(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Oi(n));
}
function yA(e, t) {
  const n = dl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = PT(i[s]);
    vA(e, s, a);
  }
}
function nx(e) {
  return e.getProps()[e0];
}
class xA extends tx {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = v0(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o) return;
      o = !0;
      const i = this.counts.get(n) - 1;
      this.counts.set(n, i), i === 0 && (cl(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function wA(e) {
  return !!(We(e) && e.add);
}
function Lu(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new xA("auto")), e.addValue("willChange", r)),
    wA(r))
  )
    return r.add(t);
}
function SA({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function rx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const c = [],
    d = o && e.animationState && e.animationState.getState()[o];
  for (const u in l) {
    const f = e.getValue(
        u,
        (i = e.latestValues[u]) !== null && i !== void 0 ? i : null
      ),
      y = l[u];
    if (y === void 0 || (d && SA(d, u))) continue;
    const m = { delay: n, elapsed: 0, ...Sf(s || {}, u) };
    let v = !1;
    if (window.HandoffAppearAnimations) {
      const h = nx(e);
      if (h) {
        const p = window.HandoffAppearAnimations(h, u, f, de);
        p !== null && ((m.elapsed = p), (v = !0));
      }
    }
    f.start(
      Rf(
        u,
        f,
        y,
        e.shouldReduceMotion && Zn.has(u) ? { type: !1 } : m,
        e,
        v,
        Lu(e, u)
      )
    );
    const S = f.animation;
    S && c.push(S);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        de.update(() => {
          a && yA(e, a);
        });
      }),
    c
  );
}
function Ou(e, t, n = {}) {
  var r;
  const o = dl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(rx(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: u,
              staggerDirection: f,
            } = i;
            return CA(e, t, d + c, u, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => d());
  } else return Promise.all([s(), a(n.delay)]);
}
function CA(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(EA)
      .forEach((c, d) => {
        c.notify("AnimationStart", t),
          s.push(
            Ou(c, t, { ...i, delay: n + l(d) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function EA(e, t) {
  return e.sortNodePosition(t);
}
function PA(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ou(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Ou(e, t, n);
  else {
    const o = typeof t == "function" ? dl(e, t, n.custom) : t;
    r = Promise.all(rx(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const bA = [...lf].reverse(),
  TA = lf.length;
function kA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => PA(e, n, r)));
}
function AA(e) {
  let t = kA(e),
    n = lm(),
    r = !0;
  const o = (l) => (c, d) => {
    var u;
    const f = dl(
      e,
      d,
      l === "exit"
        ? (u = e.presenceContext) === null || u === void 0
          ? void 0
          : u.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: m, ...v } = f;
      c = { ...c, ...v, ...m };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      u = [],
      f = new Set();
    let y = {},
      m = 1 / 0;
    for (let S = 0; S < TA; S++) {
      const h = bA[S],
        p = n[h],
        g = c[h] !== void 0 ? c[h] : d[h],
        C = _i(g),
        E = h === l ? p.isActive : null;
      E === !1 && (m = S);
      let T = g === d[h] && g !== c[h] && C;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && E === null) ||
          (!g && !p.prevProp) ||
          ji(g) ||
          typeof g == "boolean")
      )
        continue;
      let P =
          NA(p.prevProp, g) ||
          (h === l && p.isActive && !T && C) ||
          (S > m && C),
        A = !1;
      const k = Array.isArray(g) ? g : [g];
      let R = k.reduce(o(h), {});
      E === !1 && (R = {});
      const { prevResolvedValues: M = {} } = p,
        $ = { ...M, ...R },
        F = (L) => {
          (P = !0),
            f.has(L) && ((A = !0), f.delete(L)),
            (p.needsAnimating[L] = !0);
          const O = e.getValue(L);
          O && (O.liveStyle = !1);
        };
      for (const L in $) {
        const O = R[L],
          I = M[L];
        if (y.hasOwnProperty(L)) continue;
        let N = !1;
        Au(O) && Au(I) ? (N = !P0(O, I)) : (N = O !== I),
          N
            ? O != null
              ? F(L)
              : f.add(L)
            : O !== void 0 && f.has(L)
            ? F(L)
            : (p.protectedKeys[L] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = R),
        p.isActive && (y = { ...y, ...R }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!T || A) &&
          u.push(...k.map((L) => ({ animation: L, options: { type: h } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((h) => {
        const p = e.getBaseTarget(h),
          g = e.getValue(h);
        g && (g.liveStyle = !0), (S[h] = p ?? null);
      }),
        u.push({ animation: S });
    }
    let v = !!u.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(u) : Promise.resolve()
    );
  }
  function a(l, c) {
    var d;
    if (n[l].isActive === c) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, c);
      }),
      (n[l].isActive = c);
    const u = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = lm()), (r = !0);
    },
  };
}
function NA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !P0(t, e) : !1;
}
function nr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function lm() {
  return {
    animate: nr(!0),
    whileInView: nr(),
    whileHover: nr(),
    whileTap: nr(),
    whileDrag: nr(),
    whileFocus: nr(),
    exit: nr(),
  };
}
class RA extends qn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = AA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ji(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let MA = 0;
class DA extends qn {
  constructor() {
    super(...arguments), (this.id = MA++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const _A = { animation: { Feature: RA }, exit: { Feature: DA } },
  cm = (e, t) => Math.abs(e - t);
function jA(e, t) {
  const n = cm(e.x, t.x),
    r = cm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ox {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = gc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = jA(u.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: m } = u,
          { timestamp: v } = Ie;
        this.history.push({ ...m, timestamp: v });
        const { onStart: S, onMove: h } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, f) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = mc(f, this.transformPagePoint)),
          de.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: m, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = gc(
          u.type === "pointercancel"
            ? this.lastMoveEventInfo
            : mc(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(u, S), m && m(u, S);
      }),
      !x0(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = ul(t),
      a = mc(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Ie;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, gc(a, this.history)),
      (this.removeListeners = on(
        rn(this.contextWindow, "pointermove", this.handlePointerMove),
        rn(this.contextWindow, "pointerup", this.handlePointerUp),
        rn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), dn(this.updatePoint);
  }
}
function mc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function um(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function gc({ point: e }, t) {
  return {
    point: e,
    delta: um(e, ix(t)),
    offset: um(e, IA(t)),
    velocity: LA(t, 0.1),
  };
}
function IA(e) {
  return e[0];
}
function ix(e) {
  return e[e.length - 1];
}
function LA(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = ix(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Vn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = sn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const sx = 1e-4,
  OA = 1 - sx,
  FA = 1 + sx,
  ax = 0.01,
  VA = 0 - ax,
  zA = 0 + ax;
function ft(e) {
  return e.max - e.min;
}
function BA(e, t, n) {
  return Math.abs(e - t) <= n;
}
function dm(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Se(t.min, t.max, e.origin)),
    (e.scale = ft(n) / ft(t)),
    (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= OA && e.scale <= FA) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= VA && e.translate <= zA) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function di(e, t, n, r) {
  dm(e.x, t.x, n.x, r ? r.originX : void 0),
    dm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function fm(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + ft(t));
}
function $A(e, t, n) {
  fm(e.x, t.x, n.x), fm(e.y, t.y, n.y);
}
function pm(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + ft(t));
}
function fi(e, t, n) {
  pm(e.x, t.x, n.x), pm(e.y, t.y, n.y);
}
function WA(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function hm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function UA(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: hm(e.x, n, o), y: hm(e.y, t, r) };
}
function mm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function HA(e, t) {
  return { x: mm(e.x, t.x), y: mm(e.y, t.y) };
}
function GA(e, t) {
  let n = 0.5;
  const r = ft(e),
    o = ft(t);
  return (
    o > r
      ? (n = Li(t.min, t.max - r, e.min))
      : r > o && (n = Li(e.min, e.max - o, t.min)),
    Wn(0, 1, n)
  );
}
function KA(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Fu = 0.35;
function YA(e = Fu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Fu),
    { x: gm(e, "left", "right"), y: gm(e, "top", "bottom") }
  );
}
function gm(e, t, n) {
  return { min: vm(e, t), max: vm(e, n) };
}
function vm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ym = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xr = () => ({ x: ym(), y: ym() }),
  xm = () => ({ min: 0, max: 0 }),
  Te = () => ({ x: xm(), y: xm() });
function xt(e) {
  return [e("x"), e("y")];
}
function lx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function XA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function QA(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function vc(e) {
  return e === void 0 || e === 1;
}
function Vu({ scale: e, scaleX: t, scaleY: n }) {
  return !vc(e) || !vc(t) || !vc(n);
}
function ir(e) {
  return (
    Vu(e) ||
    cx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function cx(e) {
  return wm(e.x) || wm(e.y);
}
function wm(e) {
  return e && e !== "0%";
}
function Ra(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Sm(e, t, n, r, o) {
  return o !== void 0 && (e = Ra(e, o, r)), Ra(e, n, r) + t;
}
function zu(e, t = 0, n = 1, r, o) {
  (e.min = Sm(e.min, t, n, r, o)), (e.max = Sm(e.max, t, n, r, o));
}
function ux(e, { x: t, y: n }) {
  zu(e.x, t.translate, t.scale, t.originPoint),
    zu(e.y, n.translate, n.scale, n.originPoint);
}
const Cm = 0.999999999999,
  Em = 1.0000000000001;
function ZA(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Zr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), ux(e, s)),
      r && ir(i.latestValues) && Zr(e, i.latestValues));
  }
  t.x < Em && t.x > Cm && (t.x = 1), t.y < Em && t.y > Cm && (t.y = 1);
}
function Qr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Pm(e, t, n, r, o = 0.5) {
  const i = Se(e.min, e.max, o);
  zu(e, t, n, i, r);
}
function Zr(e, t) {
  Pm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function dx(e, t) {
  return lx(QA(e.getBoundingClientRect(), t));
}
function qA(e, t, n) {
  const r = dx(e, n),
    { scroll: o } = t;
  return o && (Qr(r.x, o.offset.x), Qr(r.y, o.offset.y)), r;
}
const fx = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  JA = new WeakMap();
class eN {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (d) => {
        const { dragSnapToOrigin: u } = this.getProps();
        u ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ul(d, "page").point);
      },
      i = (d, u) => {
        var f;
        const { drag: y, dragPropagation: m, onDragStart: v } = this.getProps();
        if (
          y &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = S0(y)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((h) => {
            let p = this.getAxisMotionValue(h).get() || 0;
            if (Ht.test(p)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const C = g.layout.layoutBox[h];
                C && (p = ft(C) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[h] = p;
          }),
          v && de.postRender(() => v(d, u)),
          (f = this.removeWillChange) === null || f === void 0 || f.call(this),
          (this.removeWillChange = Lu(this.visualElement, "transform"));
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      s = (d, u) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: m,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: S } = u;
        if (y && this.currentDirection === null) {
          (this.currentDirection = tN(S)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, S),
          this.updateAxis("y", u.point, S),
          this.visualElement.render(),
          v && v(d, u);
      },
      a = (d, u) => this.stop(d, u),
      l = () =>
        xt((d) => {
          var u;
          return (
            this.getAnimationState(d) === "paused" &&
            ((u = this.getAxisMotionValue(d).animation) === null || u === void 0
              ? void 0
              : u.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new ox(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: fx(this.visualElement),
      }
    );
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const o = this.isDragging;
    if ((this.cancel(), !o)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && de.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ks(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = WA(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Kr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = UA(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = YA(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = KA(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Kr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = qA(r, o.root, this.visualElement.getTransformPagePoint());
    let s = HA(o.layout.layoutBox, i);
    if (n) {
      const a = n(XA(s));
      (this.hasMutatedConstraints = !!a), a && (s = lx(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = xt((d) => {
        if (!ks(d, n, this.currentDirection)) return;
        let u = (l && l[d]) || {};
        s && (u = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          y = o ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...u,
          };
        return this.startAxisValueAnimation(d, m);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(
      Rf(t, r, 0, n, this.visualElement, !1, Lu(this.visualElement, t))
    );
  }
  stopAnimation() {
    xt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    xt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    xt((n) => {
      const { drag: r } = this.getProps();
      if (!ks(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - Se(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Kr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    xt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = GA({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      xt((s) => {
        if (!ks(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(Se(l, c, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    JA.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = rn(t, "pointerdown", (l) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Kr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      de.read(r);
    const s = tn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (xt((d) => {
              const u = this.getAxisMotionValue(d);
              u &&
                ((this.originPoint[d] += l[d].translate),
                u.set(u.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Fu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ks(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class nN extends qn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ue),
      (this.removeListeners = Ue),
      (this.controls = new eN(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ue);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const bm = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class rN extends qn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ue);
  }
  onPointerDown(t) {
    this.session = new ox(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: fx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: bm(t),
      onStart: bm(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && de.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = rn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function oN() {
  const e = x.useContext(il);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = x.useId();
  x.useEffect(() => r(o), []);
  const i = x.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const Qs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Tm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Uo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (G.test(e)) e = parseFloat(e);
        else return e;
      const n = Tm(e, t.target.x),
        r = Tm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  iN = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Un.parse(e);
      if (o.length > 5) return r;
      const i = Un.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const c = Se(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= c),
        typeof o[3 + s] == "number" && (o[3 + s] /= c),
        i(o)
      );
    },
  };
class sN extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    Jb(aN),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Qs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              de.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      af.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function px(e) {
  const [t, n] = oN(),
    r = x.useContext(uf);
  return w.jsx(sN, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(n0),
    isPresent: t,
    safeToRemove: n,
  });
}
const aN = {
    borderRadius: {
      ...Uo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Uo,
    borderTopRightRadius: Uo,
    borderBottomLeftRadius: Uo,
    borderBottomRightRadius: Uo,
    boxShadow: iN,
  },
  hx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  lN = hx.length,
  km = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Am = (e) => typeof e == "number" || G.test(e);
function cN(e, t, n, r, o, i) {
  o
    ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, uN(r))),
      (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, dN(r))))
    : i &&
      (e.opacity = Se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < lN; s++) {
    const a = `border${hx[s]}Radius`;
    let l = Nm(t, a),
      c = Nm(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Am(l) === Am(c)
        ? ((e[a] = Math.max(Se(km(l), km(c), r), 0)),
          (Ht.test(c) || Ht.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
}
function Nm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const uN = mx(0, 0.5, Y0),
  dN = mx(0.5, 0.95, Ue);
function mx(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Li(e, t, r)));
}
function Rm(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function yt(e, t) {
  Rm(e.x, t.x), Rm(e.y, t.y);
}
function Mm(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Dm(e, t, n, r, o) {
  return (
    (e -= t), (e = Ra(e, 1 / n, r)), o !== void 0 && (e = Ra(e, 1 / o, r)), e
  );
}
function fN(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Ht.test(t) &&
      ((t = parseFloat(t)), (t = Se(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Se(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Dm(e.min, t, n, a, o)),
    (e.max = Dm(e.max, t, n, a, o));
}
function _m(e, t, [n, r, o], i, s) {
  fN(e, t[n], t[r], t[o], t.scale, i, s);
}
const pN = ["x", "scaleX", "originX"],
  hN = ["y", "scaleY", "originY"];
function jm(e, t, n, r) {
  _m(e.x, t, pN, n ? n.x : void 0, r ? r.x : void 0),
    _m(e.y, t, hN, n ? n.y : void 0, r ? r.y : void 0);
}
function Im(e) {
  return e.translate === 0 && e.scale === 1;
}
function gx(e) {
  return Im(e.x) && Im(e.y);
}
function Lm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function mN(e, t) {
  return Lm(e.x, t.x) && Lm(e.y, t.y);
}
function Om(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function vx(e, t) {
  return Om(e.x, t.x) && Om(e.y, t.y);
}
function Fm(e) {
  return ft(e.x) / ft(e.y);
}
function Vm(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class gN {
  constructor() {
    this.members = [];
  }
  add(t) {
    ll(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (cl(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vN(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: u,
      rotateY: f,
      skewX: y,
      skewY: m,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      u && (r += `rotateX(${u}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const yN = (e, t) => e.depth - t.depth;
class xN {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ll(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    cl(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(yN),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function wN(e, t) {
  const n = zn.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (dn(r), e(i - t));
    };
  return de.read(r, !0), () => dn(r);
}
function SN(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function CN(e, t, n) {
  const r = We(e) ? e : Oi(e);
  return r.start(Rf("", r, t, n)), r.animation;
}
const sr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Qo = typeof window < "u" && window.MotionDebug !== void 0,
  yc = ["", "X", "Y", "Z"],
  EN = { visibility: "hidden" },
  zm = 1e3;
let PN = 0;
function xc(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function yx(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? nx(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? yx(e.parent)
      : !1
    : !1;
}
function xx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = PN++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Qo &&
              (sr.totalNodes =
                sr.resolvedTargetDeltas =
                sr.recalculatedProjection =
                  0),
            this.nodes.forEach(kN),
            this.nodes.forEach(DN),
            this.nodes.forEach(_N),
            this.nodes.forEach(AN),
            Qo && window.MotionDebug.record(sr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xN());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Mf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = SN(s)), (this.instance = s);
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let u;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            u && u(),
            (u = wN(f, 250)),
            Qs.hasAnimatedSinceResize &&
              ((Qs.hasAnimatedSinceResize = !1), this.nodes.forEach($m));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: u,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || FN,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: h } =
                  d.getProps(),
                p = !this.targetLayout || !vx(this.targetLayout, m) || y,
                g = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(u, g);
                const C = { ...Sf(v, "layout"), onPlay: S, onComplete: h };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || $m(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        dn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(jN),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          yx(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        (u.shouldResetTransform = !0),
          u.updateScroll("snapshot"),
          u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bm);
        return;
      }
      this.isUpdating || this.nodes.forEach(RN),
        (this.isUpdating = !1),
        this.nodes.forEach(MN),
        this.nodes.forEach(bN),
        this.nodes.forEach(TN),
        this.clearAllSnapshots();
      const a = zn.now();
      (Ie.delta = Wn(0, 1e3 / 60, a - Ie.timestamp)),
        (Ie.timestamp = a),
        (Ie.isProcessing = !0),
        lc.update.process(Ie),
        lc.preRender.process(Ie),
        lc.render.process(Ie),
        (Ie.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), af.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(NN), this.sharedNodes.forEach(IN);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        de.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      de.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !gx(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      s &&
        (a || ir(this.latestValues) || d) &&
        (o(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        VN(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return Te();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(zN)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Qr(l.x, d.offset.x), Qr(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = Te();
      if (
        (yt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: u, options: f } = d;
        d !== this.root &&
          u &&
          f.layoutScroll &&
          (u.wasRoot && yt(l, s), Qr(l.x, u.offset.x), Qr(l.y, u.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = Te();
      yt(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Zr(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          ir(d.latestValues) && Zr(l, d.latestValues);
      }
      return ir(this.latestValues) && Zr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Te();
      yt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !ir(c.latestValues)) continue;
        Vu(c.latestValues) && c.updateSnapshot();
        const d = Te(),
          u = c.measurePageBox();
        yt(d, u),
          jm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return ir(this.latestValues) && jm(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: f } = this.options;
      if (!(!this.layout || !(u || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ie.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Te()),
              (this.relativeTargetOrigin = Te()),
              fi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Te()), (this.targetWithTransforms = Te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                $A(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : yt(this.target, this.layout.layoutBox),
                ux(this.target, this.targetDelta))
              : yt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Te()),
                (this.relativeTargetOrigin = Te()),
                fi(this.relativeTargetOrigin, this.target, y.target),
                yt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Qo && sr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Vu(this.parent.latestValues) ||
          cx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ie.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || u))
      )
        return;
      yt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      ZA(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Te()));
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Mm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Mm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        di(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== y ||
          !Vm(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Vm(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Qo && sr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Xr()),
        (this.projectionDelta = Xr()),
        (this.projectionDeltaWithTransform = Xr());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        d = { ...this.latestValues },
        u = Xr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Te(),
        y = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        v = y !== m,
        S = this.getStack(),
        h = !S || S.members.length <= 1,
        p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(ON));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (C) => {
        const E = C / 1e3;
        Wm(u.x, s.x, E),
          Wm(u.y, s.y, E),
          this.setTargetDelta(u),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            LN(this.relativeTarget, this.relativeTargetOrigin, f, E),
            g && mN(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Te()),
            yt(g, this.relativeTarget)),
          v &&
            ((this.animationValues = d), cN(d, c, this.latestValues, E, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (dn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = de.update(() => {
          (Qs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = CN(0, zm, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(zm),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          wx(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Te();
          const u = ft(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + u);
          const f = ft(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        yt(a, l),
          Zr(a, d),
          di(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new gN()),
        this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && xc("z", s, c, this.animationValues);
      for (let d = 0; d < yc.length; d++)
        xc(`rotate${yc[d]}`, s, c, this.animationValues),
          xc(`skew${yc[d]}`, s, c, this.animationValues);
      s.render();
      for (const d in c)
        s.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return EN;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ys(s == null ? void 0 : s.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ys(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !ir(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = vN(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        d && (c.transform = d(f, c.transform));
      const { x: y, y: m } = this.projectionDelta;
      (c.transformOrigin = `${y.origin * 100}% ${m.origin * 100}% 0`),
        u.animationValues
          ? (c.opacity =
              u === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (c.opacity =
              u === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in ba) {
        if (f[v] === void 0) continue;
        const { correct: S, applyTo: h } = ba[v],
          p = c.transform === "none" ? f[v] : S(f[v], u);
        if (h) {
          const g = h.length;
          for (let C = 0; C < g; C++) c[h[C]] = p;
        } else c[v] = p;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            u === this
              ? Ys(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Bm),
        this.root.sharedNodes.clear();
    }
  };
}
function bN(e) {
  e.updateLayout();
}
function TN(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? xt((u) => {
          const f = s ? n.measuredBox[u] : n.layoutBox[u],
            y = ft(f);
          (f.min = r[u].min), (f.max = f.min + y);
        })
      : wx(i, n.layoutBox, r) &&
        xt((u) => {
          const f = s ? n.measuredBox[u] : n.layoutBox[u],
            y = ft(r[u]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[u].max = e.relativeTarget[u].min + y));
        });
    const a = Xr();
    di(a, r, n.layoutBox);
    const l = Xr();
    s ? di(l, e.applyTransform(o, !0), n.measuredBox) : di(l, r, n.layoutBox);
    const c = !gx(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: y } = u;
        if (f && y) {
          const m = Te();
          fi(m, n.layoutBox, f.layoutBox);
          const v = Te();
          fi(v, r, y.layoutBox),
            vx(m, v) || (d = !0),
            u.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = u));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function kN(e) {
  Qo && sr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function AN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function NN(e) {
  e.clearSnapshot();
}
function Bm(e) {
  e.clearMeasurements();
}
function RN(e) {
  e.isLayoutDirty = !1;
}
function MN(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function $m(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function DN(e) {
  e.resolveTargetDelta();
}
function _N(e) {
  e.calcProjection();
}
function jN(e) {
  e.resetSkewAndRotation();
}
function IN(e) {
  e.removeLeadSnapshot();
}
function Wm(e, t, n) {
  (e.translate = Se(t.translate, 0, n)),
    (e.scale = Se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Um(e, t, n, r) {
  (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
}
function LN(e, t, n, r) {
  Um(e.x, t.x, n.x, r), Um(e.y, t.y, n.y, r);
}
function ON(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const FN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Gm = Hm("applewebkit/") && !Hm("chrome/") ? Math.round : Ue;
function Km(e) {
  (e.min = Gm(e.min)), (e.max = Gm(e.max));
}
function VN(e) {
  Km(e.x), Km(e.y);
}
function wx(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !BA(Fm(t), Fm(n), 0.2))
  );
}
function zN(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const BN = xx({
    attachResizeListener: (e, t) => tn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  wc = { current: void 0 },
  Sx = xx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!wc.current) {
        const e = new BN({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (wc.current = e);
      }
      return wc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  $N = {
    pan: { Feature: rN },
    drag: { Feature: nN, ProjectionNode: Sx, MeasureLayout: px },
  },
  Bu = { current: null },
  Cx = { current: !1 };
function WN() {
  if (((Cx.current = !0), !!sf))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Bu.current = e.matches);
      e.addListener(t), t();
    } else Bu.current = !1;
}
function UN(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (We(o)) e.addValue(r, o);
    else if (We(i)) e.addValue(r, Oi(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Oi(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ym = new WeakMap(),
  HN = [...N0, Be, Un],
  GN = (e) => HN.find(A0(e)),
  Xm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  KN = cf.length;
class YN {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.resolveKeyframes = (f, y, m, v) =>
        new this.KeyframeResolver(f, y, m, v, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Cf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), de.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = al(n)),
      (this.isVariantNode = o0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...u } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in u) {
      const y = u[f];
      l[f] !== void 0 && We(y) && y.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Ym.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Cx.current || WN(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Bu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ym.delete(this.current),
      this.projection && this.projection.unmount(),
      dn(this.notifyUpdate),
      dn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Zn.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && de.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in yo) {
      const n = yo[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Xm.length; r++) {
      const o = Xm[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = UN(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < KN; r++) {
      const o = cf[r],
        i = this.props[o];
      (_i(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Oi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (T0(o) || b0(o))
          ? (o = parseFloat(o))
          : !GN(o) && Un.test(n) && (o = O0(t, n)),
        this.setBaseTarget(t, We(o) ? o.get() : o)),
      We(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = xf(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !We(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Mf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Ex extends YN {
  constructor() {
    super(...arguments), (this.KeyframeResolver = F0);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function XN(e) {
  return window.getComputedStyle(e);
}
class QN extends Ex {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = f0);
  }
  readValueFromInstance(t, n) {
    if (Zn.has(n)) {
      const r = Pf(n);
      return (r && r.default) || 0;
    } else {
      const r = XN(t),
        o = (a0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return dx(t, n);
  }
  build(t, n, r) {
    hf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return yf(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    We(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class ZN extends Ex {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Te);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zn.has(n)) {
      const r = Pf(n);
      return (r && r.default) || 0;
    }
    return (n = p0.has(n) ? n : sl(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return m0(t, n, r);
  }
  build(t, n, r) {
    gf(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    h0(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = vf(t.tagName)), super.mount(t);
  }
}
const qN = (e, t) =>
    df(e) ? new ZN(t) : new QN(t, { allowProjection: e !== x.Fragment }),
  JN = { layout: { ProjectionNode: Sx, MeasureLayout: px } },
  eR = { ..._A, ...WT, ...$N, ...JN },
  pl = Zb((e, t) => RT(e, t, eR, qN));
class tR extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function nR({ children: e, isPresent: t }) {
  const n = x.useId(),
    r = x.useRef(null),
    o = x.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = x.useContext(of);
  return (
    x.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: c } = o.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        i && (d.nonce = i),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    w.jsx(tR, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: x.cloneElement(e, { ref: r }),
    })
  );
}
const rR = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = wf(oR),
    l = x.useId(),
    c = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (d) => {
          a.set(d, !0);
          for (const u of a.values()) if (!u) return;
          r && r();
        },
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      i ? [Math.random()] : [n]
    );
  return (
    x.useMemo(() => {
      a.forEach((d, u) => a.set(u, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = w.jsx(nR, { isPresent: n, children: e })),
    w.jsx(il.Provider, { value: c, children: e })
  );
};
function oR() {
  return new Map();
}
const As = (e) => e.key || "";
function Qm(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const iR = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  const a = x.useMemo(() => Qm(e), [e]),
    l = a.map(As),
    c = x.useRef(!0),
    d = x.useRef(a),
    u = wf(() => new Map()),
    [f, y] = x.useState(a),
    [m, v] = x.useState(a);
  qy(() => {
    (c.current = !1), (d.current = a);
    for (let p = 0; p < m.length; p++) {
      const g = As(m[p]);
      l.includes(g) ? u.delete(g) : u.get(g) !== !0 && u.set(g, !1);
    }
  }, [m, l.length, l.join("-")]);
  const S = [];
  if (a !== f) {
    let p = [...a];
    for (let g = 0; g < m.length; g++) {
      const C = m[g],
        E = As(C);
      l.includes(E) || (p.splice(g, 0, C), S.push(C));
    }
    s === "wait" && S.length && (p = S), v(Qm(p)), y(a);
    return;
  }
  const { forceRender: h } = x.useContext(uf);
  return w.jsx(w.Fragment, {
    children: m.map((p) => {
      const g = As(p),
        C = a === m || l.includes(g),
        E = () => {
          if (u.has(g)) u.set(g, !0);
          else return;
          let T = !0;
          u.forEach((b) => {
            b || (T = !1);
          }),
            T && (h == null || h(), v(d.current), o && o());
        };
      return w.jsx(
        rR,
        {
          isPresent: C,
          initial: !c.current || r ? void 0 : !1,
          custom: C ? void 0 : n,
          presenceAffectsLayout: i,
          mode: s,
          onExitComplete: C ? void 0 : E,
          children: p,
        },
        g
      );
    }),
  });
};
function sR({
  width: e = 40,
  height: t = 40,
  x: n = -1,
  y: r = -1,
  strokeDasharray: o = 0,
  numSquares: i = 50,
  className: s,
  maxOpacity: a = 0.5,
  duration: l = 4,
  repeatDelay: c = 0.5,
  ...d
}) {
  const u = x.useId(),
    f = x.useRef(null),
    [y, m] = x.useState({ width: 0, height: 0 }),
    [v, S] = x.useState(() => p(i));
  function h() {
    return [
      Math.floor((Math.random() * y.width) / e),
      Math.floor((Math.random() * y.height) / t),
    ];
  }
  function p(C) {
    return Array.from({ length: C }, (E, T) => ({ id: T, pos: h() }));
  }
  const g = (C) => {
    S((E) => E.map((T) => (T.id === C ? { ...T, pos: h() } : T)));
  };
  return (
    x.useEffect(() => {
      y.width && y.height && S(p(i));
    }, [y, i]),
    x.useEffect(() => {
      const C = new ResizeObserver((E) => {
        for (let T of E)
          m({ width: T.contentRect.width, height: T.contentRect.height });
      });
      return (
        f.current && C.observe(f.current),
        () => {
          f.current && C.unobserve(f.current);
        }
      );
    }, [f]),
    w.jsxs("svg", {
      ref: f,
      "aria-hidden": "true",
      className: H(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        s
      ),
      ...d,
      children: [
        w.jsx("defs", {
          children: w.jsx("pattern", {
            id: u,
            width: e,
            height: t,
            patternUnits: "userSpaceOnUse",
            x: n,
            y: r,
            children: w.jsx("path", {
              d: `M.5 ${t}V.5H${e}`,
              fill: "none",
              strokeDasharray: o,
            }),
          }),
        }),
        w.jsx("rect", { width: "100%", height: "100%", fill: `url(#${u})` }),
        w.jsx("svg", {
          x: n,
          y: r,
          className: "overflow-visible",
          children: v.map(({ pos: [C, E], id: T }, b) =>
            w.jsx(
              pl.rect,
              {
                initial: { opacity: 0 },
                animate: { opacity: a },
                transition: {
                  duration: l,
                  repeat: 1,
                  delay: b * 0.1,
                  repeatType: "reverse",
                },
                onAnimationComplete: () => g(T),
                width: e - 1,
                height: t - 1,
                x: C * e + 1,
                y: E * t + 1,
                fill: "currentColor",
                strokeWidth: "0",
              },
              `${C}-${E}-${b}`
            )
          ),
        }),
      ],
    })
  );
}
const Ji = ({ className: e }) =>
  w.jsx(sR, {
    numSquares: 30,
    maxOpacity: 0.1,
    duration: 10,
    repeatDelay: 2,
    className: H(
      "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-3",
      "stroke-blue-400/20",
      e
    ),
  });
function aR({
  word: e,
  duration: t = 0.5,
  delayMultiple: n = 0.08,
  framerProps: r = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className: o,
}) {
  return w.jsx("div", {
    className: "flex justify-center space-x-0",
    children: w.jsx(iR, {
      mode: "sync",
      children: e
        .split("")
        .map((i, s) =>
          w.jsx(
            pl.span,
            {
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              variants: r,
              transition: { duration: t, delay: s * n },
              className: H("origin-center drop-shadow-sm", o),
              children: i,
            },
            s
          )
        ),
    }),
  });
}
const lR = ({
    text: e,
    colors: t = { first: "#9E7AFF", second: "#FE8BBB" },
    className: n,
    sparklesCount: r = 30,
    ...o
  }) => {
    const [i, s] = x.useState([]);
    return (
      x.useEffect(() => {
        const a = () => {
            const u = `${Math.random() * 100}%`,
              f = `${Math.random() * 100}%`,
              y = Math.random() > 0.5 ? t.first : t.second,
              m = Math.random() * 2,
              v = Math.random() * 1 + 0.3,
              S = Math.random() * 10 + 5;
            return {
              id: `${u}-${f}-${Date.now()}`,
              x: u,
              y: f,
              color: y,
              delay: m,
              scale: v,
              lifespan: S,
            };
          },
          l = () => {
            const u = Array.from({ length: r }, a);
            s(u);
          },
          c = () => {
            s((u) =>
              u.map((f) =>
                f.lifespan <= 0 ? a() : { ...f, lifespan: f.lifespan - 0.1 }
              )
            );
          };
        l();
        const d = setInterval(c, 100);
        return () => clearInterval(d);
      }, [t.first, t.second]),
      w.jsx("div", {
        className: H("text-6xl font-bold", n),
        ...o,
        style: {
          "--sparkles-first-color": `${t.first}`,
          "--sparkles-second-color": `${t.second}`,
        },
        children: w.jsxs("span", {
          className: "relative inline-block",
          children: [
            i.map((a) => w.jsx(cR, { ...a }, a.id)),
            w.jsx("div", { children: e }),
          ],
        }),
      })
    );
  },
  cR = ({ id: e, x: t, y: n, color: r, delay: o, scale: i }) =>
    w.jsx(
      pl.svg,
      {
        className: "pointer-events-none absolute z-20",
        initial: { opacity: 0, left: t, top: n },
        animate: {
          opacity: [0, 1, 0],
          scale: [0, i, 0],
          rotate: [75, 120, 150],
        },
        transition: { duration: 0.8, repeat: 1 / 0, delay: o },
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        children: w.jsx("path", {
          d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",
          fill: r,
        }),
      },
      e
    ),
  uR = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1);
    x.useEffect(() => {
      const i = setTimeout(() => {
          t(!0);
        }, 2e3),
        s = setTimeout(() => {
          r(!0);
        }, 4e3);
      return () => {
        clearTimeout(i), clearTimeout(s);
      };
    }, []);
    const o = H(
      "transition-colors duration-500",
      e && "text-[#87CEFA]/75",
      "text-7xl font-bold "
    );
    return w.jsxs("main", {
      className:
        "relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl",
      children: [
        w.jsx(Ji, {}),
        w.jsxs("div", {
          className: "cursor-default z-10  text-center text-5xl font-medium ",
          children: [
            w.jsx("p", { children: " Welcome to " }),
            w.jsx("span", {
              children: n
                ? w.jsx(lR, { className: o, text: "Algo-Lab" })
                : w.jsx(aR, { className: o, word: "Algo-Lab" }),
            }),
          ],
        }),
      ],
    });
  },
  $u = J.forwardRef(
    (
      {
        shimmerColor: e = "#ffffff",
        shimmerSize: t = "0.05em",
        shimmerDuration: n = "3s",
        borderRadius: r = "100px",
        background: o = "rgba(0, 0, 0, 1)",
        className: i,
        children: s,
        ...a
      },
      l
    ) =>
      w.jsxs("button", {
        style: {
          "--spread": "90deg",
          "--shimmer-color": e,
          "--radius": r,
          "--speed": n,
          "--cut": t,
          "--bg": o,
        },
        className: H(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
          i
        ),
        ref: l,
        ...a,
        children: [
          w.jsx("div", {
            className: H(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]"
            ),
            children: w.jsx("div", {
              className:
                "absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]",
              children: w.jsx("div", {
                className:
                  "animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]",
              }),
            }),
          }),
          s,
          w.jsx("div", {
            className: H(
              "insert-0 absolute h-full w-full",
              "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              "transform-gpu transition-all duration-300 ease-in-out",
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            ),
          }),
          w.jsx("div", {
            className: H(
              "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
            ),
          }),
        ],
      })
  );
$u.displayName = "ShimmerButton";
const dR = () =>
  w.jsxs("footer", {
    className: "relative min-h-14 overflow-hidden",
    children: [
      w.jsx(Ji, {}),
      w.jsxs("section", {
        className: "min-h-14 p-3 md:p-5 flex justify-end items-center gap-5",
        children: [
          w.jsx("a", {
            href: "https://linkedin.com/in/mohammed-hasan-41444b268",
            target: "_blank",
            rel: "noopener noreferrer",
            children: w.jsx($u, {
              shimmerColor:
                "rgb(59 130 246 / var(--tw-text-opacity)) /* #3b82f6 */",
              shimmerDuration: "2.5s",
              borderRadius: "20px",
              background: "hsl(var(--background))",
              className: "shadow-2xl",
              children: w.jsx(BP, {
                color: "rgb(59 130 246 / var(--tw-text-opacity)) /* #3b82f6 */",
              }),
            }),
          }),
          w.jsx("a", {
            href: "https://github.com/MohHasan1",
            target: "_blank",
            rel: "noopener noreferrer",
            children: w.jsx($u, {
              shimmerColor:
                "rgb(168 85 247 / var(--tw-text-opacity)) /* #a855f7 */",
              shimmerDuration: "2.5s",
              borderRadius: "20px",
              background: "hsl(var(--background))",
              className: "shadow-2xl ",
              children: w.jsx(zP, {
                color: "rgb(147 51 234 / var(--tw-text-opacity)) /* #9333ea */",
              }),
            }),
          }),
        ],
      }),
    ],
  });
var fR = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
const Zm = (e) => {
    let t;
    const n = new Set(),
      r = (d, u) => {
        const f = typeof d == "function" ? d(t) : d;
        if (!Object.is(f, t)) {
          const y = t;
          (t =
            u ?? (typeof f != "object" || f === null)
              ? f
              : Object.assign({}, t, f)),
            n.forEach((m) => m(t, y));
        }
      },
      o = () => t,
      l = {
        setState: r,
        getState: o,
        getInitialState: () => c,
        subscribe: (d) => (n.add(d), () => n.delete(d)),
        destroy: () => {
          (fR ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      c = (t = e(r, o, l));
    return l;
  },
  pR = (e) => (e ? Zm(e) : Zm);
var Px = { exports: {} },
  bx = {},
  Tx = { exports: {} },
  kx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wo = x;
function hR(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mR = typeof Object.is == "function" ? Object.is : hR,
  gR = wo.useState,
  vR = wo.useEffect,
  yR = wo.useLayoutEffect,
  xR = wo.useDebugValue;
function wR(e, t) {
  var n = t(),
    r = gR({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    yR(
      function () {
        (o.value = n), (o.getSnapshot = t), Sc(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    vR(
      function () {
        return (
          Sc(o) && i({ inst: o }),
          e(function () {
            Sc(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    xR(n),
    n
  );
}
function Sc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mR(e, n);
  } catch {
    return !0;
  }
}
function SR(e, t) {
  return t();
}
var CR =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? SR
    : wR;
kx.useSyncExternalStore =
  wo.useSyncExternalStore !== void 0 ? wo.useSyncExternalStore : CR;
Tx.exports = kx;
var ER = Tx.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hl = x,
  PR = ER;
function bR(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var TR = typeof Object.is == "function" ? Object.is : bR,
  kR = PR.useSyncExternalStore,
  AR = hl.useRef,
  NR = hl.useEffect,
  RR = hl.useMemo,
  MR = hl.useDebugValue;
bx.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = AR(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = RR(
    function () {
      function l(y) {
        if (!c) {
          if (((c = !0), (d = y), (y = r(y)), o !== void 0 && s.hasValue)) {
            var m = s.value;
            if (o(m, y)) return (u = m);
          }
          return (u = y);
        }
        if (((m = u), TR(d, y))) return m;
        var v = r(y);
        return o !== void 0 && o(m, v) ? m : ((d = y), (u = v));
      }
      var c = !1,
        d,
        u,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, o]
  );
  var a = kR(e, i[0], i[1]);
  return (
    NR(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    MR(a),
    a
  );
};
Px.exports = bx;
var DR = Px.exports;
const _R = sd(DR);
var Ax = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
const { useDebugValue: jR } = J,
  { useSyncExternalStoreWithSelector: IR } = _R;
let qm = !1;
const LR = (e) => e;
function OR(e, t = LR, n) {
  (Ax ? "production" : void 0) !== "production" &&
    n &&
    !qm &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (qm = !0));
  const r = IR(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return jR(r), r;
}
const FR = (e) => {
    (Ax ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? pR(e) : e,
      n = (r, o) => OR(t, r, o);
    return Object.assign(n, t), n;
  },
  VR = (e) => FR;
function Df(e = 19, t = 19) {
  const n = [];
  for (let r = 0; r < e; r++) {
    const o = zR(r, t);
    n.push(o);
  }
  return n;
}
function zR(e, t) {
  const n = [];
  for (let r = 0; r < t; r++)
    n.push({
      rowNum: e,
      nodeNum: r,
      isStart: !1,
      isGoal: !1,
      isWall: !1,
      isPath: !0,
    });
  return n;
}
const Fi = (e, t) => {
  const n = Df(e, t),
    r = n[1][1],
    o = n[e - 2][t - 2];
  return { grid: n, startNode: r, goalNode: o };
};
function io(e) {
  return JSON.parse(JSON.stringify(e));
}
function Nx(e = 19, t = 19) {
  const n = Df(e, t),
    r = BR(n);
  return $R(r), UR(r);
}
function BR(e) {
  const t = [];
  for (let n of e) {
    const r = [];
    for (let o of n)
      (o.rowNum % 2 === 0 || o.nodeNum % 2 === 0) &&
        ((o.isWall = !0), (o.isPath = !1)),
        r.push(o);
    t.push(r);
  }
  return t;
}
function $R(e) {
  e.forEach((t) => t.forEach((n) => WR(e, n.rowNum, n.nodeNum)));
}
function WR(e, t, n) {
  if (t >= e.length || n >= e[0].length) return;
  const r = e.length,
    o = e[0].length,
    i = r - 2,
    s = o - 2,
    a = Math.random() < 0.5 ? "left" : "right";
  if (t % 2 !== 0 && n % 2 !== 0) {
    if (t === i && n !== s) {
      (e[t][n + 1].isWall = !1), (e[t][n + 1].isPath = !0);
      return;
    }
    if (n === s && t !== i) {
      (e[t + 1][n].isWall = !1), (e[t + 1][n].isPath = !0);
      return;
    }
    t !== i &&
      n !== s &&
      (a == "left"
        ? ((e[t][n + 1].isWall = !1), (e[t][n + 1].isPath = !0))
        : ((e[t + 1][n].isWall = !1), (e[t + 1][n].isPath = !0)));
  }
}
function UR(e) {
  return (
    (e[1][1].isStart = !0), (e[e.length - 2][e[0].length - 2].isGoal = !0), e
  );
}
const { grid: Jm, startNode: HR, goalNode: GR } = Fi(vo.rows, vo.nodes),
  KR = (e, t) => ({
    isGridMaze: !1,
    rows: vo.rows,
    nodes: vo.rows,
    grid: Jm,
    cleanMaze: Jm,
    gridSize: "sm",
    startNode: HR,
    goalNode: GR,
    inProgress: !1,
    setGrid: (n) => e({ grid: n }),
    clearGrid: () => {
      const { grid: n, startNode: r, goalNode: o } = Fi(t().rows, t().nodes);
      e({
        grid: n,
        cleanMaze: io(n),
        startNode: r,
        goalNode: o,
        isGridMaze: !1,
      });
    },
    setGridSize: (n) => {
      var s, a, l, c;
      n == "sm"
        ? e({ rows: Mr.Small.rows, nodes: Mr.Small.nodes, gridSize: "sm" })
        : n == "md"
        ? e({ rows: Mr.Medium.rows, nodes: Mr.Medium.nodes, gridSize: "md" })
        : e({ rows: Mr.Large.rows, nodes: Mr.Large.nodes, gridSize: "lg" });
      const {
        grid: r,
        startNode: o,
        goalNode: i,
      } = Fi(
        (s = t()) == null ? void 0 : s.rows,
        (a = t()) == null ? void 0 : a.nodes
      );
      if (t().isGridMaze) {
        const d = Nx(
          (l = t()) == null ? void 0 : l.rows,
          (c = t()) == null ? void 0 : c.nodes
        );
        e({ grid: d, cleanMaze: io(d), startNode: o, goalNode: i });
      } else e({ grid: r, startNode: o, goalNode: i });
    },
  }),
  YR = (e) => ({
    searchAlgo: oo.NONE,
    mazeAlgo: nf.BTM,
    isMazeAlgProgress: !1,
    isSearchAlgProgress: !1,
    setSearchAlgo: (t) => {
      e({ searchAlgo: t });
    },
    setMazeAlgo: (t) => {
      e({ mazeAlgo: t });
    },
    toggleMazeAlgProgress: () => {
      e((t) => ({ isMazeAlgProgress: !t.isMazeAlgProgress }));
    },
    toggleSearcgAlgProgress: () => {
      e((t) => ({ isSearchAlgProgress: !t.isSearchAlgProgress }));
    },
  }),
  XR = (e) => ({
    mazeV: 100,
    mazeSolveV: 32.5,
    setMazeV: (t) => {
      e({ mazeV: t });
    },
    setMazeSolveV: (t) => {
      e({ mazeSolveV: t });
    },
  }),
  { grid: QR, startNode: ZR, goalNode: qR } = Fi(vo.rows, vo.nodes),
  JR = (e, t) => ({
    cleanMaze: QR,
    isMazeClean: !0,
    isGridMaze: !1,
    startNode: ZR,
    goalNode: qR,
    setCleanMaze: (n) => e({ cleanMaze: n, isGridMaze: !0 }),
    resetMaze: () => {
      const n = t().cleanMaze,
        { startNode: r, goalNode: o } = Fi(t().rows, t().nodes);
      e({
        grid: io(n),
        startNode: r,
        goalNode: o,
        isGridMaze: !0,
        isMazeClean: !0,
      });
    },
    setIsMazeClean: (n) => {
      e({ isMazeClean: n });
    },
    setStartnGoalNodes: (n, r) => {
      e(() => ({ startNode: n, goalNode: r }));
    },
    setStartNode: (n) => {
      e(() => ({ startNode: n }));
    },
    setGoalNode: (n) => {
      e(() => ({ goalNode: n }));
    },
  }),
  ne = VR()((...e) => ({ ...KR(...e), ...JR(...e), ...YR(...e), ...XR(...e) }));
function e2(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Rx(...e) {
  return (t) => e.forEach((n) => e2(n, t));
}
function ae(...e) {
  return x.useCallback(Rx(...e), e);
}
var Cr = x.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = x.Children.toArray(n),
    i = o.find(t2);
  if (i) {
    const s = i.props.children,
      a = o.map((l) =>
        l === i
          ? x.Children.count(s) > 1
            ? x.Children.only(null)
            : x.isValidElement(s)
            ? s.props.children
            : null
          : l
      );
    return w.jsx(Wu, {
      ...r,
      ref: t,
      children: x.isValidElement(s) ? x.cloneElement(s, void 0, a) : null,
    });
  }
  return w.jsx(Wu, { ...r, ref: t, children: n });
});
Cr.displayName = "Slot";
var Wu = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const o = r2(n);
    return x.cloneElement(n, { ...n2(r, n.props), ref: t ? Rx(t, o) : o });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
Wu.displayName = "SlotClone";
var Mx = ({ children: e }) => w.jsx(w.Fragment, { children: e });
function t2(e) {
  return x.isValidElement(e) && e.type === Mx;
}
function n2(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function r2(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var o2 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  re = o2.reduce((e, t) => {
    const n = x.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? Cr : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(a, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function i2(e, t) {
  e && Nr.flushSync(() => e.dispatchEvent(t));
}
var s2 = "Label",
  Dx = x.forwardRef((e, t) =>
    w.jsx(re.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Dx.displayName = s2;
var _x = Dx;
function jx(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = jx(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function a2() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = jx(e)) && (r && (r += " "), (r += t));
  return r;
}
const eg = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  tg = a2,
  Ix = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return tg(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((c) => {
        const d = n == null ? void 0 : n[c],
          u = i == null ? void 0 : i[c];
        if (d === null) return null;
        const f = eg(d) || eg(u);
        return o[c][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [u, f] = d;
          return f === void 0 || (c[u] = f), c;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: u, className: f, ...y } = d;
              return Object.entries(y).every((m) => {
                let [v, S] = m;
                return Array.isArray(S)
                  ? S.includes({ ...i, ...a }[v])
                  : { ...i, ...a }[v] === S;
              })
                ? [...c, u, f]
                : c;
            }, []);
    return tg(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  l2 = Ix(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Lx = x.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(_x, { ref: n, className: H(l2(), e), ...t })
  );
Lx.displayName = _x.displayName;
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function c2(e, t) {
  const n = x.createContext(t);
  function r(i) {
    const { children: s, ...a } = i,
      l = x.useMemo(() => a, Object.values(a));
    return w.jsx(n.Provider, { value: l, children: s });
  }
  function o(i) {
    const s = x.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function mn(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = x.createContext(s),
      l = n.length;
    n = [...n, s];
    function c(u) {
      const { scope: f, children: y, ...m } = u,
        v = (f == null ? void 0 : f[e][l]) || a,
        S = x.useMemo(() => m, Object.values(m));
      return w.jsx(v.Provider, { value: S, children: y });
    }
    function d(u, f) {
      const y = (f == null ? void 0 : f[e][l]) || a,
        m = x.useContext(y);
      if (m) return m;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return (c.displayName = i + "Provider"), [c, d];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, u2(o, ...t)];
}
function u2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(i)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function _f(e) {
  const t = e + "CollectionProvider",
    [n, r] = mn(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (y) => {
      const { scope: m, children: v } = y,
        S = J.useRef(null),
        h = J.useRef(new Map()).current;
      return w.jsx(o, { scope: m, itemMap: h, collectionRef: S, children: v });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = J.forwardRef((y, m) => {
      const { scope: v, children: S } = y,
        h = i(a, v),
        p = ae(m, h.collectionRef);
      return w.jsx(Cr, { ref: p, children: S });
    });
  l.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    u = J.forwardRef((y, m) => {
      const { scope: v, children: S, ...h } = y,
        p = J.useRef(null),
        g = ae(m, p),
        C = i(c, v);
      return (
        J.useEffect(
          () => (
            C.itemMap.set(p, { ref: p, ...h }), () => void C.itemMap.delete(p)
          )
        ),
        w.jsx(Cr, { [d]: "", ref: g, children: S })
      );
    });
  u.displayName = c;
  function f(y) {
    const m = i(e + "CollectionConsumer", y);
    return J.useCallback(() => {
      const S = m.collectionRef.current;
      if (!S) return [];
      const h = Array.from(S.querySelectorAll(`[${d}]`));
      return Array.from(m.itemMap.values()).sort(
        (C, E) => h.indexOf(C.ref.current) - h.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: u }, f, r];
}
var Qe =
    globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  d2 = mC.useId || (() => {}),
  f2 = 0;
function gr(e) {
  const [t, n] = x.useState(d2());
  return (
    Qe(() => {
      n((r) => r ?? String(f2++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
function Gt(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function So({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = p2({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Gt(n),
    l = x.useCallback(
      (c) => {
        if (i) {
          const u = typeof c == "function" ? c(e) : c;
          u !== e && a(u);
        } else o(c);
      },
      [i, e, o, a]
    );
  return [s, l];
}
function p2({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    i = Gt(t);
  return (
    x.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var h2 = x.createContext(void 0);
function ml(e) {
  const t = x.useContext(h2);
  return e || t || "ltr";
}
var Cc = "rovingFocusGroup.onEntryFocus",
  m2 = { bubbles: !1, cancelable: !0 },
  gl = "RovingFocusGroup",
  [Uu, Ox, g2] = _f(gl),
  [v2, Fx] = mn(gl, [g2]),
  [y2, x2] = v2(gl),
  Vx = x.forwardRef((e, t) =>
    w.jsx(Uu.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: w.jsx(Uu.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: w.jsx(w2, { ...e, ref: t }),
      }),
    })
  );
Vx.displayName = gl;
var w2 = x.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: c,
        preventScrollOnEntryFocus: d = !1,
        ...u
      } = e,
      f = x.useRef(null),
      y = ae(t, f),
      m = ml(i),
      [v = null, S] = So({ prop: s, defaultProp: a, onChange: l }),
      [h, p] = x.useState(!1),
      g = Gt(c),
      C = Ox(n),
      E = x.useRef(!1),
      [T, b] = x.useState(0);
    return (
      x.useEffect(() => {
        const P = f.current;
        if (P)
          return P.addEventListener(Cc, g), () => P.removeEventListener(Cc, g);
      }, [g]),
      w.jsx(y2, {
        scope: n,
        orientation: r,
        dir: m,
        loop: o,
        currentTabStopId: v,
        onItemFocus: x.useCallback((P) => S(P), [S]),
        onItemShiftTab: x.useCallback(() => p(!0), []),
        onFocusableItemAdd: x.useCallback(() => b((P) => P + 1), []),
        onFocusableItemRemove: x.useCallback(() => b((P) => P - 1), []),
        children: w.jsx(re.div, {
          tabIndex: h || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: y,
          style: { outline: "none", ...e.style },
          onMouseDown: Z(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: Z(e.onFocus, (P) => {
            const A = !E.current;
            if (P.target === P.currentTarget && A && !h) {
              const k = new CustomEvent(Cc, m2);
              if ((P.currentTarget.dispatchEvent(k), !k.defaultPrevented)) {
                const R = C().filter((O) => O.focusable),
                  M = R.find((O) => O.active),
                  $ = R.find((O) => O.id === v),
                  L = [M, $, ...R].filter(Boolean).map((O) => O.ref.current);
                $x(L, d);
              }
            }
            E.current = !1;
          }),
          onBlur: Z(e.onBlur, () => p(!1)),
        }),
      })
    );
  }),
  zx = "RovingFocusGroupItem",
  Bx = x.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...s
      } = e,
      a = gr(),
      l = i || a,
      c = x2(zx, n),
      d = c.currentTabStopId === l,
      u = Ox(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: y } = c;
    return (
      x.useEffect(() => {
        if (r) return f(), () => y();
      }, [r, f, y]),
      w.jsx(Uu.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: w.jsx(re.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": c.orientation,
          ...s,
          ref: t,
          onMouseDown: Z(e.onMouseDown, (m) => {
            r ? c.onItemFocus(l) : m.preventDefault();
          }),
          onFocus: Z(e.onFocus, () => c.onItemFocus(l)),
          onKeyDown: Z(e.onKeyDown, (m) => {
            if (m.key === "Tab" && m.shiftKey) {
              c.onItemShiftTab();
              return;
            }
            if (m.target !== m.currentTarget) return;
            const v = E2(m, c.orientation, c.dir);
            if (v !== void 0) {
              if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
              m.preventDefault();
              let h = u()
                .filter((p) => p.focusable)
                .map((p) => p.ref.current);
              if (v === "last") h.reverse();
              else if (v === "prev" || v === "next") {
                v === "prev" && h.reverse();
                const p = h.indexOf(m.currentTarget);
                h = c.loop ? P2(h, p + 1) : h.slice(p + 1);
              }
              setTimeout(() => $x(h));
            }
          }),
        }),
      })
    );
  });
Bx.displayName = zx;
var S2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function C2(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function E2(e, t, n) {
  const r = C2(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return S2[r];
}
function $x(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function P2(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var b2 = Vx,
  T2 = Bx;
function jf(e) {
  const [t, n] = x.useState(void 0);
  return (
    Qe(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (s = c.inlineSize), (a = c.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
function If(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
function k2(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var es = (e) => {
  const { present: t, children: n } = e,
    r = A2(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = ae(r.ref, N2(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
es.displayName = "Presence";
function A2(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    i = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = k2(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const c = Ns(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    Qe(() => {
      const c = r.current,
        d = o.current;
      if (d !== e) {
        const f = i.current,
          y = Ns(c);
        e
          ? l("MOUNT")
          : y === "none" || (c == null ? void 0 : c.display) === "none"
          ? l("UNMOUNT")
          : l(d && f !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    Qe(() => {
      if (t) {
        const c = (u) => {
            const y = Ns(r.current).includes(u.animationName);
            u.target === t && y && Nr.flushSync(() => l("ANIMATION_END"));
          },
          d = (u) => {
            u.target === t && (i.current = Ns(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function Ns(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function N2(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Lf = "Radio",
  [R2, Wx] = mn(Lf),
  [M2, D2] = R2(Lf),
  Ux = x.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: o = !1,
        required: i,
        disabled: s,
        value: a = "on",
        onCheck: l,
        ...c
      } = e,
      [d, u] = x.useState(null),
      f = ae(t, (v) => u(v)),
      y = x.useRef(!1),
      m = d ? !!d.closest("form") : !0;
    return w.jsxs(M2, {
      scope: n,
      checked: o,
      disabled: s,
      children: [
        w.jsx(re.button, {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Kx(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: a,
          ...c,
          ref: f,
          onClick: Z(e.onClick, (v) => {
            o || l == null || l(),
              m &&
                ((y.current = v.isPropagationStopped()),
                y.current || v.stopPropagation());
          }),
        }),
        m &&
          w.jsx(_2, {
            control: d,
            bubbles: !y.current,
            name: r,
            value: a,
            checked: o,
            required: i,
            disabled: s,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
Ux.displayName = Lf;
var Hx = "RadioIndicator",
  Gx = x.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e,
      i = D2(Hx, n);
    return w.jsx(es, {
      present: r || i.checked,
      children: w.jsx(re.span, {
        "data-state": Kx(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t,
      }),
    });
  });
Gx.displayName = Hx;
var _2 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e,
    i = x.useRef(null),
    s = If(n),
    a = jf(t);
  return (
    x.useEffect(() => {
      const l = i.current,
        c = window.HTMLInputElement.prototype,
        u = Object.getOwnPropertyDescriptor(c, "checked").set;
      if (s !== n && u) {
        const f = new Event("click", { bubbles: r });
        u.call(l, n), l.dispatchEvent(f);
      }
    }, [s, n, r]),
    w.jsx("input", {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function Kx(e) {
  return e ? "checked" : "unchecked";
}
var j2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Of = "RadioGroup",
  [I2, oL] = mn(Of, [Fx, Wx]),
  Yx = Fx(),
  Xx = Wx(),
  [L2, O2] = I2(Of),
  Qx = x.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: o,
        value: i,
        required: s = !1,
        disabled: a = !1,
        orientation: l,
        dir: c,
        loop: d = !0,
        onValueChange: u,
        ...f
      } = e,
      y = Yx(n),
      m = ml(c),
      [v, S] = So({ prop: i, defaultProp: o, onChange: u });
    return w.jsx(L2, {
      scope: n,
      name: r,
      required: s,
      disabled: a,
      value: v,
      onValueChange: S,
      children: w.jsx(b2, {
        asChild: !0,
        ...y,
        orientation: l,
        dir: m,
        loop: d,
        children: w.jsx(re.div, {
          role: "radiogroup",
          "aria-required": s,
          "aria-orientation": l,
          "data-disabled": a ? "" : void 0,
          dir: m,
          ...f,
          ref: t,
        }),
      }),
    });
  });
Qx.displayName = Of;
var Zx = "RadioGroupItem",
  qx = x.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e,
      i = O2(Zx, n),
      s = i.disabled || r,
      a = Yx(n),
      l = Xx(n),
      c = x.useRef(null),
      d = ae(t, c),
      u = i.value === o.value,
      f = x.useRef(!1);
    return (
      x.useEffect(() => {
        const y = (v) => {
            j2.includes(v.key) && (f.current = !0);
          },
          m = () => (f.current = !1);
        return (
          document.addEventListener("keydown", y),
          document.addEventListener("keyup", m),
          () => {
            document.removeEventListener("keydown", y),
              document.removeEventListener("keyup", m);
          }
        );
      }, []),
      w.jsx(T2, {
        asChild: !0,
        ...a,
        focusable: !s,
        active: u,
        children: w.jsx(Ux, {
          disabled: s,
          required: i.required,
          checked: u,
          ...l,
          ...o,
          name: i.name,
          ref: d,
          onCheck: () => i.onValueChange(o.value),
          onKeyDown: Z((y) => {
            y.key === "Enter" && y.preventDefault();
          }),
          onFocus: Z(o.onFocus, () => {
            var y;
            f.current && ((y = c.current) == null || y.click());
          }),
        }),
      })
    );
  });
qx.displayName = Zx;
var F2 = "RadioGroupIndicator",
  Jx = x.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      o = Xx(n);
    return w.jsx(Gx, { ...o, ...r, ref: t });
  });
Jx.displayName = F2;
var e1 = Qx,
  t1 = qx,
  V2 = Jx;
const n1 = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(e1, { className: H("grid gap-2", e), ...t, ref: n })
);
n1.displayName = e1.displayName;
const r1 = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(t1, {
    ref: n,
    className: H(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: w.jsx(V2, {
      className: "flex items-center justify-center",
      children: w.jsx(VP, {
        className: "h-2.5 w-2.5 fill-current text-current",
      }),
    }),
  })
);
r1.displayName = t1.displayName;
const o1 = ({ initialVal: e, options: t, disabled: n = !1, setFn: r }) => {
    const o = (i) => {
      r(i);
    };
    return w.jsx(w.Fragment, {
      children: w.jsx(n1, {
        disabled: n,
        defaultValue: e,
        onValueChange: o,
        className: "flex",
        children: t.map((i) =>
          w.jsxs(
            "div",
            {
              className: "flex items-center space-x-2",
              children: [
                w.jsx(r1, { value: i.value, id: i.value }),
                w.jsx(Lx, { htmlFor: i.value, children: i.label }),
              ],
            },
            i.value
          )
        ),
      }),
    });
  },
  Jn = ({ children: e, className: t = "" }) =>
    w.jsx("p", {
      className: `pointer-events-none whitespace-pre-wrap bg-clip-text text-3xl font-medium text-transparent bg-gradient-to-b to-gray-400 from-blue-500/40 ${t}`,
      children: e,
    }),
  z2 = () => {
    const e = ne((r) => r.isMazeAlgProgress),
      t = ne((r) => r.isSearchAlgProgress),
      n = ne((r) => r.setGridSize);
    return w.jsxs("div", {
      className: "flex flex-col md:gap-3 lg:gap-5",
      children: [
        w.jsx(Jn, { children: "Grid Dimension" }),
        w.jsx(o1, {
          initialVal: "sm",
          options: B2,
          setFn: n,
          disabled: e || t,
        }),
      ],
    });
  },
  B2 = [
    { value: "sm", label: "SMALL", id: "s" },
    { value: "md", label: "MEDIUM", id: "m" },
    { value: "lg", label: "LARGE", id: "l" },
  ],
  Ff = Ix(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          blue: "bg-blue-dark hover:bg-blue-light",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  pt = x.forwardRef(
    (
      {
        className: e,
        variant: t = "secondary",
        size: n,
        asChild: r = !1,
        ...o
      },
      i
    ) => {
      const s = r ? Cr : "button";
      return w.jsx(s, {
        className: H("rounded-xl", Ff({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
pt.displayName = "Button";
function Ma(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function $2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var W2 = "DismissableLayer",
  Hu = "dismissableLayer.update",
  U2 = "dismissableLayer.pointerDownOutside",
  H2 = "dismissableLayer.focusOutside",
  ng,
  i1 = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Vf = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      c = x.useContext(i1),
      [d, u] = x.useState(null),
      f =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = x.useState({}),
      m = ae(t, (b) => u(b)),
      v = Array.from(c.layers),
      [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = v.indexOf(S),
      p = d ? v.indexOf(d) : -1,
      g = c.layersWithOutsidePointerEventsDisabled.size > 0,
      C = p >= h,
      E = Y2((b) => {
        const P = b.target,
          A = [...c.branches].some((k) => k.contains(P));
        !C ||
          A ||
          (o == null || o(b),
          s == null || s(b),
          b.defaultPrevented || a == null || a());
      }, f),
      T = X2((b) => {
        const P = b.target;
        [...c.branches].some((k) => k.contains(P)) ||
          (i == null || i(b),
          s == null || s(b),
          b.defaultPrevented || a == null || a());
      }, f);
    return (
      $2((b) => {
        p === c.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && a && (b.preventDefault(), a()));
      }, f),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ng = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            rg(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = ng);
            }
          );
      }, [d, f, n, c]),
      x.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            rg());
        },
        [d, c]
      ),
      x.useEffect(() => {
        const b = () => y({});
        return (
          document.addEventListener(Hu, b),
          () => document.removeEventListener(Hu, b)
        );
      }, []),
      w.jsx(re.div, {
        ...l,
        ref: m,
        style: {
          pointerEvents: g ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Z(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Z(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
Vf.displayName = W2;
var G2 = "DismissableLayerBranch",
  K2 = x.forwardRef((e, t) => {
    const n = x.useContext(i1),
      r = x.useRef(null),
      o = ae(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      w.jsx(re.div, { ...e, ref: o })
    );
  });
K2.displayName = G2;
function Y2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              s1(U2, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function X2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          s1(H2, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function rg() {
  const e = new CustomEvent(Hu);
  document.dispatchEvent(e);
}
function s1(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? i2(o, i) : o.dispatchEvent(i);
}
var Ec = 0;
function a1() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? og()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? og()),
      Ec++,
      () => {
        Ec === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Ec--;
      }
    );
  }, []);
}
function og() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Pc = "focusScope.autoFocusOnMount",
  bc = "focusScope.autoFocusOnUnmount",
  ig = { bubbles: !1, cancelable: !0 },
  Q2 = "FocusScope",
  zf = x.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = x.useState(null),
      c = Gt(o),
      d = Gt(i),
      u = x.useRef(null),
      f = ae(t, (v) => l(v)),
      y = x.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    x.useEffect(() => {
      if (r) {
        let v = function (g) {
            if (y.paused || !a) return;
            const C = g.target;
            a.contains(C) ? (u.current = C) : Pn(u.current, { select: !0 });
          },
          S = function (g) {
            if (y.paused || !a) return;
            const C = g.relatedTarget;
            C !== null && (a.contains(C) || Pn(u.current, { select: !0 }));
          },
          h = function (g) {
            if (document.activeElement === document.body)
              for (const E of g) E.removedNodes.length > 0 && Pn(a);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", S);
        const p = new MutationObserver(h);
        return (
          a && p.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", S),
              p.disconnect();
          }
        );
      }
    }, [r, a, y.paused]),
      x.useEffect(() => {
        if (a) {
          ag.add(y);
          const v = document.activeElement;
          if (!a.contains(v)) {
            const h = new CustomEvent(Pc, ig);
            a.addEventListener(Pc, c),
              a.dispatchEvent(h),
              h.defaultPrevented ||
                (Z2(nM(l1(a)), { select: !0 }),
                document.activeElement === v && Pn(a));
          }
          return () => {
            a.removeEventListener(Pc, c),
              setTimeout(() => {
                const h = new CustomEvent(bc, ig);
                a.addEventListener(bc, d),
                  a.dispatchEvent(h),
                  h.defaultPrevented || Pn(v ?? document.body, { select: !0 }),
                  a.removeEventListener(bc, d),
                  ag.remove(y);
              }, 0);
          };
        }
      }, [a, c, d, y]);
    const m = x.useCallback(
      (v) => {
        if ((!n && !r) || y.paused) return;
        const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          h = document.activeElement;
        if (S && h) {
          const p = v.currentTarget,
            [g, C] = q2(p);
          g && C
            ? !v.shiftKey && h === C
              ? (v.preventDefault(), n && Pn(g, { select: !0 }))
              : v.shiftKey &&
                h === g &&
                (v.preventDefault(), n && Pn(C, { select: !0 }))
            : h === p && v.preventDefault();
        }
      },
      [n, r, y.paused]
    );
    return w.jsx(re.div, { tabIndex: -1, ...s, ref: f, onKeyDown: m });
  });
zf.displayName = Q2;
function Z2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Pn(r, { select: t }), document.activeElement !== n)) return;
}
function q2(e) {
  const t = l1(e),
    n = sg(t, e),
    r = sg(t.reverse(), e);
  return [n, r];
}
function l1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sg(e, t) {
  for (const n of e) if (!J2(n, { upTo: t })) return n;
}
function J2(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function eM(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && eM(e) && t && e.select();
  }
}
var ag = tM();
function tM() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = lg(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = lg(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function lg(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function nM(e) {
  return e.filter((t) => t.tagName !== "A");
}
const rM = ["top", "right", "bottom", "left"],
  $t = Math.min,
  st = Math.max,
  Da = Math.round,
  Rs = Math.floor,
  Hn = (e) => ({ x: e, y: e }),
  oM = { left: "right", right: "left", bottom: "top", top: "bottom" },
  iM = { start: "end", end: "start" };
function Gu(e, t, n) {
  return st(e, $t(t, n));
}
function fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pn(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function Bf(e) {
  return e === "x" ? "y" : "x";
}
function $f(e) {
  return e === "y" ? "height" : "width";
}
function Gn(e) {
  return ["top", "bottom"].includes(pn(e)) ? "y" : "x";
}
function Wf(e) {
  return Bf(Gn(e));
}
function sM(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e),
    o = Wf(e),
    i = $f(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = _a(s)), [s, _a(s)];
}
function aM(e) {
  const t = _a(e);
  return [Ku(e), t, Ku(t)];
}
function Ku(e) {
  return e.replace(/start|end/g, (t) => iM[t]);
}
function lM(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function cM(e, t, n, r) {
  const o = No(e);
  let i = lM(pn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Ku)))), i
  );
}
function _a(e) {
  return e.replace(/left|right|bottom|top/g, (t) => oM[t]);
}
function uM(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function c1(e) {
  return typeof e != "number"
    ? uM(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ja(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function cg(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Gn(t),
    s = Wf(t),
    a = $f(s),
    l = pn(t),
    c = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    u = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let y;
  switch (l) {
    case "top":
      y = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      y = { x: d, y: r.y + r.height };
      break;
    case "right":
      y = { x: r.x + r.width, y: u };
      break;
    case "left":
      y = { x: r.x - o.width, y: u };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (No(t)) {
    case "start":
      y[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      y[s] += f * (n && c ? -1 : 1);
      break;
  }
  return y;
}
const dM = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: u } = cg(c, r, l),
    f = r,
    y = {},
    m = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: S, fn: h } = a[v],
      {
        x: p,
        y: g,
        data: C,
        reset: E,
      } = await h({
        x: d,
        y: u,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: y,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = p ?? d),
      (u = g ?? u),
      (y = { ...y, [S]: { ...y[S], ...C } }),
      E &&
        m <= 50 &&
        (m++,
        typeof E == "object" &&
          (E.placement && (f = E.placement),
          E.rects &&
            (c =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: u } = cg(c, f, l))),
        (v = -1));
  }
  return { x: d, y: u, placement: f, strategy: o, middlewareData: y };
};
async function Vi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: u = "floating",
      altBoundary: f = !1,
      padding: y = 0,
    } = fn(t, e),
    m = c1(y),
    S = a[f ? (u === "floating" ? "reference" : "floating") : u],
    h = ja(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      })
    ),
    p =
      u === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    g = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = ja(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: g,
            strategy: l,
          })
        : p
    );
  return {
    top: (h.top - E.top + m.top) / C.y,
    bottom: (E.bottom - h.bottom + m.bottom) / C.y,
    left: (h.left - E.left + m.left) / C.x,
    right: (E.right - h.right + m.right) / C.x,
  };
}
const fM = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = fn(e, t) || {};
      if (c == null) return {};
      const u = c1(d),
        f = { x: n, y: r },
        y = Wf(o),
        m = $f(y),
        v = await s.getDimensions(c),
        S = y === "y",
        h = S ? "top" : "left",
        p = S ? "bottom" : "right",
        g = S ? "clientHeight" : "clientWidth",
        C = i.reference[m] + i.reference[y] - f[y] - i.floating[m],
        E = f[y] - i.reference[y],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let b = T ? T[g] : 0;
      (!b || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (b = a.floating[g] || i.floating[m]);
      const P = C / 2 - E / 2,
        A = b / 2 - v[m] / 2 - 1,
        k = $t(u[h], A),
        R = $t(u[p], A),
        M = k,
        $ = b - v[m] - R,
        F = b / 2 - v[m] / 2 + P,
        L = Gu(M, F, $),
        O =
          !l.arrow &&
          No(o) != null &&
          F !== L &&
          i.reference[m] / 2 - (F < M ? k : R) - v[m] / 2 < 0,
        I = O ? (F < M ? F - M : F - $) : 0;
      return {
        [y]: f[y] + I,
        data: {
          [y]: L,
          centerOffset: F - L - I,
          ...(O && { alignmentOffset: I }),
        },
        reset: O,
      };
    },
  }),
  pM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: u = !0,
              fallbackPlacements: f,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: m = "none",
              flipAlignment: v = !0,
              ...S
            } = fn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = pn(o),
            p = Gn(a),
            g = pn(a) === a,
            C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            E = f || (g || !v ? [_a(a)] : aM(a)),
            T = m !== "none";
          !f && T && E.push(...cM(a, v, m, C));
          const b = [a, ...E],
            P = await Vi(t, S),
            A = [];
          let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && A.push(P[h]), u)) {
            const F = sM(o, s, C);
            A.push(P[F[0]], P[F[1]]);
          }
          if (
            ((k = [...k, { placement: o, overflows: A }]),
            !A.every((F) => F <= 0))
          ) {
            var R, M;
            const F = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1,
              L = b[F];
            if (L)
              return {
                data: { index: F, overflows: k },
                reset: { placement: L },
              };
            let O =
              (M = k
                .filter((I) => I.overflows[0] <= 0)
                .sort((I, N) => I.overflows[1] - N.overflows[1])[0]) == null
                ? void 0
                : M.placement;
            if (!O)
              switch (y) {
                case "bestFit": {
                  var $;
                  const I =
                    ($ = k
                      .filter((N) => {
                        if (T) {
                          const _ = Gn(N.placement);
                          return _ === p || _ === "y";
                        }
                        return !0;
                      })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((_) => _ > 0)
                          .reduce((_, B) => _ + B, 0),
                      ])
                      .sort((N, _) => N[1] - _[1])[0]) == null
                      ? void 0
                      : $[0];
                  I && (O = I);
                  break;
                }
                case "initialPlacement":
                  O = a;
                  break;
              }
            if (o !== O) return { reset: { placement: O } };
          }
          return {};
        },
      }
    );
  };
function ug(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function dg(e) {
  return rM.some((t) => e[t] >= 0);
}
const hM = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = fn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Vi(t, { ...o, elementContext: "reference" }),
              s = ug(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: dg(s) },
            };
          }
          case "escaped": {
            const i = await Vi(t, { ...o, altBoundary: !0 }),
              s = ug(i, n.floating);
            return { data: { escapedOffsets: s, escaped: dg(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function mM(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = pn(n),
    a = No(n),
    l = Gn(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    d = i && l ? -1 : 1,
    u = fn(t, e);
  let {
    mainAxis: f,
    crossAxis: y,
    alignmentAxis: m,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
  return (
    a && typeof m == "number" && (y = a === "end" ? m * -1 : m),
    l ? { x: y * d, y: f * c } : { x: f * c, y: y * d }
  );
}
const gM = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await mM(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  vM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (S) => {
                  let { x: h, y: p } = S;
                  return { x: h, y: p };
                },
              },
              ...l
            } = fn(e, t),
            c = { x: n, y: r },
            d = await Vi(t, l),
            u = Gn(pn(o)),
            f = Bf(u);
          let y = c[f],
            m = c[u];
          if (i) {
            const S = f === "y" ? "top" : "left",
              h = f === "y" ? "bottom" : "right",
              p = y + d[S],
              g = y - d[h];
            y = Gu(p, y, g);
          }
          if (s) {
            const S = u === "y" ? "top" : "left",
              h = u === "y" ? "bottom" : "right",
              p = m + d[S],
              g = m - d[h];
            m = Gu(p, m, g);
          }
          const v = a.fn({ ...t, [f]: y, [u]: m });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  yM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = fn(e, t),
            d = { x: n, y: r },
            u = Gn(o),
            f = Bf(u);
          let y = d[f],
            m = d[u];
          const v = fn(a, t),
            S =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const g = f === "y" ? "height" : "width",
              C = i.reference[f] - i.floating[g] + S.mainAxis,
              E = i.reference[f] + i.reference[g] - S.mainAxis;
            y < C ? (y = C) : y > E && (y = E);
          }
          if (c) {
            var h, p;
            const g = f === "y" ? "width" : "height",
              C = ["top", "left"].includes(pn(o)),
              E =
                i.reference[u] -
                i.floating[g] +
                ((C && ((h = s.offset) == null ? void 0 : h[u])) || 0) +
                (C ? 0 : S.crossAxis),
              T =
                i.reference[u] +
                i.reference[g] +
                (C ? 0 : ((p = s.offset) == null ? void 0 : p[u]) || 0) -
                (C ? S.crossAxis : 0);
            m < E ? (m = E) : m > T && (m = T);
          }
          return { [f]: y, [u]: m };
        },
      }
    );
  },
  xM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: s = () => {}, ...a } = fn(e, t),
            l = await Vi(t, a),
            c = pn(n),
            d = No(n),
            u = Gn(n) === "y",
            { width: f, height: y } = r.floating;
          let m, v;
          c === "top" || c === "bottom"
            ? ((m = c),
              (v =
                d ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = c), (m = d === "end" ? "top" : "bottom"));
          const S = y - l.top - l.bottom,
            h = f - l.left - l.right,
            p = $t(y - l[m], S),
            g = $t(f - l[v], h),
            C = !t.middlewareData.shift;
          let E = p,
            T = g;
          if (
            (u ? (T = d || C ? $t(g, h) : h) : (E = d || C ? $t(p, S) : S),
            C && !d)
          ) {
            const P = st(l.left, 0),
              A = st(l.right, 0),
              k = st(l.top, 0),
              R = st(l.bottom, 0);
            u
              ? (T = f - 2 * (P !== 0 || A !== 0 ? P + A : st(l.left, l.right)))
              : (E =
                  y - 2 * (k !== 0 || R !== 0 ? k + R : st(l.top, l.bottom)));
          }
          await s({ ...t, availableWidth: T, availableHeight: E });
          const b = await o.getDimensions(i.floating);
          return f !== b.width || y !== b.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ro(e) {
  return u1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function gn(e) {
  var t;
  return (t = (u1(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function u1(e) {
  return e instanceof Node || e instanceof ut(e).Node;
}
function jt(e) {
  return e instanceof Element || e instanceof ut(e).Element;
}
function Kt(e) {
  return e instanceof HTMLElement || e instanceof ut(e).HTMLElement;
}
function fg(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
function ts(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = It(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function wM(e) {
  return ["table", "td", "th"].includes(Ro(e));
}
function vl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Uf(e) {
  const t = Hf(),
    n = jt(e) ? It(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function SM(e) {
  let t = Kn(e);
  for (; Kt(t) && !Co(t); ) {
    if (Uf(t)) return t;
    if (vl(t)) return null;
    t = Kn(t);
  }
  return null;
}
function Hf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Co(e) {
  return ["html", "body", "#document"].includes(Ro(e));
}
function It(e) {
  return ut(e).getComputedStyle(e);
}
function yl(e) {
  return jt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Kn(e) {
  if (Ro(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (fg(e) && e.host) || gn(e);
  return fg(t) ? t.host : t;
}
function d1(e) {
  const t = Kn(e);
  return Co(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Kt(t) && ts(t)
    ? t
    : d1(t);
}
function zi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = d1(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ut(o);
  if (i) {
    const a = Yu(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ts(o) ? o : [],
      a && n ? zi(a) : []
    );
  }
  return t.concat(o, zi(o, [], n));
}
function Yu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function f1(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Kt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Da(n) !== i || Da(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Gf(e) {
  return jt(e) ? e : e.contextElement;
}
function so(e) {
  const t = Gf(e);
  if (!Kt(t)) return Hn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = f1(t);
  let s = (i ? Da(n.width) : n.width) / r,
    a = (i ? Da(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const CM = Hn(0);
function p1(e) {
  const t = ut(e);
  return !Hf() || !t.visualViewport
    ? CM
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function EM(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ut(e)) ? !1 : t;
}
function Er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Gf(e);
  let s = Hn(1);
  t && (r ? jt(r) && (s = so(r)) : (s = so(e)));
  const a = EM(i, n, r) ? p1(i) : Hn(0);
  let l = (o.left + a.x) / s.x,
    c = (o.top + a.y) / s.y,
    d = o.width / s.x,
    u = o.height / s.y;
  if (i) {
    const f = ut(i),
      y = r && jt(r) ? ut(r) : r;
    let m = f,
      v = Yu(m);
    for (; v && r && y !== m; ) {
      const S = so(v),
        h = v.getBoundingClientRect(),
        p = It(v),
        g = h.left + (v.clientLeft + parseFloat(p.paddingLeft)) * S.x,
        C = h.top + (v.clientTop + parseFloat(p.paddingTop)) * S.y;
      (l *= S.x),
        (c *= S.y),
        (d *= S.x),
        (u *= S.y),
        (l += g),
        (c += C),
        (m = ut(v)),
        (v = Yu(m));
    }
  }
  return ja({ width: d, height: u, x: l, y: c });
}
function PM(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = gn(r),
    a = t ? vl(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = Hn(1);
  const d = Hn(0),
    u = Kt(r);
  if (
    (u || (!u && !i)) &&
    ((Ro(r) !== "body" || ts(s)) && (l = yl(r)), Kt(r))
  ) {
    const f = Er(r);
    (c = so(r)), (d.x = f.x + r.clientLeft), (d.y = f.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y,
  };
}
function bM(e) {
  return Array.from(e.getClientRects());
}
function h1(e) {
  return Er(gn(e)).left + yl(e).scrollLeft;
}
function TM(e) {
  const t = gn(e),
    n = yl(e),
    r = e.ownerDocument.body,
    o = st(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = st(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + h1(e);
  const a = -n.scrollTop;
  return (
    It(r).direction === "rtl" && (s += st(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function kM(e, t) {
  const n = ut(e),
    r = gn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const c = Hf();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function AM(e, t) {
  const n = Er(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Kt(e) ? so(e) : Hn(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    c = r * i.y;
  return { width: s, height: a, x: l, y: c };
}
function pg(e, t, n) {
  let r;
  if (t === "viewport") r = kM(e, n);
  else if (t === "document") r = TM(gn(e));
  else if (jt(t)) r = AM(t, n);
  else {
    const o = p1(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return ja(r);
}
function m1(e, t) {
  const n = Kn(e);
  return n === t || !jt(n) || Co(n)
    ? !1
    : It(n).position === "fixed" || m1(n, t);
}
function NM(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = zi(e, [], !1).filter((a) => jt(a) && Ro(a) !== "body"),
    o = null;
  const i = It(e).position === "fixed";
  let s = i ? Kn(e) : e;
  for (; jt(s) && !Co(s); ) {
    const a = It(s),
      l = Uf(s);
    !l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ts(s) && !l && m1(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = a),
      (s = Kn(s));
  }
  return t.set(e, r), r;
}
function RM(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? vl(t)
          ? []
          : NM(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce((c, d) => {
      const u = pg(t, d, o);
      return (
        (c.top = st(u.top, c.top)),
        (c.right = $t(u.right, c.right)),
        (c.bottom = $t(u.bottom, c.bottom)),
        (c.left = st(u.left, c.left)),
        c
      );
    }, pg(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function MM(e) {
  const { width: t, height: n } = f1(e);
  return { width: t, height: n };
}
function DM(e, t, n) {
  const r = Kt(t),
    o = gn(t),
    i = n === "fixed",
    s = Er(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Hn(0);
  if (r || (!r && !i))
    if (((Ro(t) !== "body" || ts(o)) && (a = yl(t)), r)) {
      const u = Er(t, !0, i, t);
      (l.x = u.x + t.clientLeft), (l.y = u.y + t.clientTop);
    } else o && (l.x = h1(o));
  const c = s.left + a.scrollLeft - l.x,
    d = s.top + a.scrollTop - l.y;
  return { x: c, y: d, width: s.width, height: s.height };
}
function Tc(e) {
  return It(e).position === "static";
}
function hg(e, t) {
  return !Kt(e) || It(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function g1(e, t) {
  const n = ut(e);
  if (vl(e)) return n;
  if (!Kt(e)) {
    let o = Kn(e);
    for (; o && !Co(o); ) {
      if (jt(o) && !Tc(o)) return o;
      o = Kn(o);
    }
    return n;
  }
  let r = hg(e, t);
  for (; r && wM(r) && Tc(r); ) r = hg(r, t);
  return r && Co(r) && Tc(r) && !Uf(r) ? n : r || SM(e) || n;
}
const _M = async function (e) {
  const t = this.getOffsetParent || g1,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: DM(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function jM(e) {
  return It(e).direction === "rtl";
}
const IM = {
  convertOffsetParentRelativeRectToViewportRelativeRect: PM,
  getDocumentElement: gn,
  getClippingRect: RM,
  getOffsetParent: g1,
  getElementRects: _M,
  getClientRects: bM,
  getDimensions: MM,
  getScale: so,
  isElement: jt,
  isRTL: jM,
};
function LM(e, t) {
  let n = null,
    r;
  const o = gn(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const { left: c, top: d, width: u, height: f } = e.getBoundingClientRect();
    if ((a || t(), !u || !f)) return;
    const y = Rs(d),
      m = Rs(o.clientWidth - (c + u)),
      v = Rs(o.clientHeight - (d + f)),
      S = Rs(c),
      p = {
        rootMargin: -y + "px " + -m + "px " + -v + "px " + -S + "px",
        threshold: st(0, $t(1, l)) || 1,
      };
    let g = !0;
    function C(E) {
      const T = E[0].intersectionRatio;
      if (T !== l) {
        if (!g) return s();
        T
          ? s(!1, T)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, p);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function OM(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = Gf(e),
    d = o || i ? [...(c ? zi(c) : []), ...zi(t)] : [];
  d.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n);
  });
  const u = c && a ? LM(c, n) : null;
  let f = -1,
    y = null;
  s &&
    ((y = new ResizeObserver((h) => {
      let [p] = h;
      p &&
        p.target === c &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var g;
          (g = y) == null || g.observe(t);
        }))),
        n();
    })),
    c && !l && y.observe(c),
    y.observe(t));
  let m,
    v = l ? Er(e) : null;
  l && S();
  function S() {
    const h = Er(e);
    v &&
      (h.x !== v.x ||
        h.y !== v.y ||
        h.width !== v.width ||
        h.height !== v.height) &&
      n(),
      (v = h),
      (m = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var h;
      d.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        u == null || u(),
        (h = y) == null || h.disconnect(),
        (y = null),
        l && cancelAnimationFrame(m);
    }
  );
}
const FM = gM,
  VM = vM,
  zM = pM,
  BM = xM,
  $M = hM,
  mg = fM,
  WM = yM,
  UM = (e, t, n) => {
    const r = new Map(),
      o = { platform: IM, ...n },
      i = { ...o.platform, _c: r };
    return dM(e, t, { ...o, platform: i });
  };
var Zs = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Ia(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ia(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ia(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function v1(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gg(e, t) {
  const n = v1(e);
  return Math.round(t * n) / n;
}
function vg(e) {
  const t = x.useRef(e);
  return (
    Zs(() => {
      t.current = e;
    }),
    t
  );
}
function HM(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [d, u] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, y] = x.useState(r);
  Ia(f, r) || y(r);
  const [m, v] = x.useState(null),
    [S, h] = x.useState(null),
    p = x.useCallback((I) => {
      I !== T.current && ((T.current = I), v(I));
    }, []),
    g = x.useCallback((I) => {
      I !== b.current && ((b.current = I), h(I));
    }, []),
    C = i || m,
    E = s || S,
    T = x.useRef(null),
    b = x.useRef(null),
    P = x.useRef(d),
    A = l != null,
    k = vg(l),
    R = vg(o),
    M = x.useCallback(() => {
      if (!T.current || !b.current) return;
      const I = { placement: t, strategy: n, middleware: f };
      R.current && (I.platform = R.current),
        UM(T.current, b.current, I).then((N) => {
          const _ = { ...N, isPositioned: !0 };
          $.current &&
            !Ia(P.current, _) &&
            ((P.current = _),
            Nr.flushSync(() => {
              u(_);
            }));
        });
    }, [f, t, n, R]);
  Zs(() => {
    c === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), u((I) => ({ ...I, isPositioned: !1 })));
  }, [c]);
  const $ = x.useRef(!1);
  Zs(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    []
  ),
    Zs(() => {
      if ((C && (T.current = C), E && (b.current = E), C && E)) {
        if (k.current) return k.current(C, E, M);
        M();
      }
    }, [C, E, M, k, A]);
  const F = x.useMemo(
      () => ({ reference: T, floating: b, setReference: p, setFloating: g }),
      [p, g]
    ),
    L = x.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    O = x.useMemo(() => {
      const I = { position: n, left: 0, top: 0 };
      if (!L.floating) return I;
      const N = gg(L.floating, d.x),
        _ = gg(L.floating, d.y);
      return a
        ? {
            ...I,
            transform: "translate(" + N + "px, " + _ + "px)",
            ...(v1(L.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: _ };
    }, [n, a, L.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: M, refs: F, elements: L, floatingStyles: O }),
    [d, M, F, L, O]
  );
}
const GM = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? mg({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? mg({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  KM = (e, t) => ({ ...FM(e), options: [e, t] }),
  YM = (e, t) => ({ ...VM(e), options: [e, t] }),
  XM = (e, t) => ({ ...WM(e), options: [e, t] }),
  QM = (e, t) => ({ ...zM(e), options: [e, t] }),
  ZM = (e, t) => ({ ...BM(e), options: [e, t] }),
  qM = (e, t) => ({ ...$M(e), options: [e, t] }),
  JM = (e, t) => ({ ...GM(e), options: [e, t] });
var eD = "Arrow",
  y1 = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return w.jsx(re.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : w.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
y1.displayName = eD;
var tD = y1,
  Kf = "Popper",
  [x1, w1] = mn(Kf),
  [nD, S1] = x1(Kf),
  C1 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = x.useState(null);
    return w.jsx(nD, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
C1.displayName = Kf;
var E1 = "PopperAnchor",
  P1 = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = S1(E1, n),
      s = x.useRef(null),
      a = ae(t, s);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : w.jsx(re.div, { ...o, ref: a })
    );
  });
P1.displayName = E1;
var Yf = "PopperContent",
  [rD, oD] = x1(Yf),
  b1 = x.forwardRef((e, t) => {
    var V, Y, ye, q, U, j;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: u = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: y = "optimized",
        onPlaced: m,
        ...v
      } = e,
      S = S1(Yf, n),
      [h, p] = x.useState(null),
      g = ae(t, (X) => p(X)),
      [C, E] = x.useState(null),
      T = jf(C),
      b = (T == null ? void 0 : T.width) ?? 0,
      P = (T == null ? void 0 : T.height) ?? 0,
      A = r + (i !== "center" ? "-" + i : ""),
      k =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      R = Array.isArray(c) ? c : [c],
      M = R.length > 0,
      $ = { padding: k, boundary: R.filter(sD), altBoundary: M },
      {
        refs: F,
        floatingStyles: L,
        placement: O,
        isPositioned: I,
        middlewareData: N,
      } = HM({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...X) =>
          OM(...X, { animationFrame: y === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          KM({ mainAxis: o + P, alignmentAxis: s }),
          l &&
            YM({
              mainAxis: !0,
              crossAxis: !1,
              limiter: u === "partial" ? XM() : void 0,
              ...$,
            }),
          l && QM({ ...$ }),
          ZM({
            ...$,
            apply: ({
              elements: X,
              rects: le,
              availableWidth: xe,
              availableHeight: Fe,
            }) => {
              const { width: Ge, height: vt } = le.reference,
                Je = X.floating.style;
              Je.setProperty("--radix-popper-available-width", `${xe}px`),
                Je.setProperty("--radix-popper-available-height", `${Fe}px`),
                Je.setProperty("--radix-popper-anchor-width", `${Ge}px`),
                Je.setProperty("--radix-popper-anchor-height", `${vt}px`);
            },
          }),
          C && JM({ element: C, padding: a }),
          aD({ arrowWidth: b, arrowHeight: P }),
          f && qM({ strategy: "referenceHidden", ...$ }),
        ],
      }),
      [_, B] = A1(O),
      W = Gt(m);
    Qe(() => {
      I && (W == null || W());
    }, [I, W]);
    const K = (V = N.arrow) == null ? void 0 : V.x,
      ie = (Y = N.arrow) == null ? void 0 : Y.y,
      oe = ((ye = N.arrow) == null ? void 0 : ye.centerOffset) !== 0,
      [fe, te] = x.useState();
    return (
      Qe(() => {
        h && te(window.getComputedStyle(h).zIndex);
      }, [h]),
      w.jsx("div", {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...L,
          transform: I ? L.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: fe,
          "--radix-popper-transform-origin": [
            (q = N.transformOrigin) == null ? void 0 : q.x,
            (U = N.transformOrigin) == null ? void 0 : U.y,
          ].join(" "),
          ...(((j = N.hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: w.jsx(rD, {
          scope: n,
          placedSide: _,
          onArrowChange: E,
          arrowX: K,
          arrowY: ie,
          shouldHideArrow: oe,
          children: w.jsx(re.div, {
            "data-side": _,
            "data-align": B,
            ...v,
            ref: g,
            style: { ...v.style, animation: I ? void 0 : "none" },
          }),
        }),
      })
    );
  });
b1.displayName = Yf;
var T1 = "PopperArrow",
  iD = { top: "bottom", right: "left", bottom: "top", left: "right" },
  k1 = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = oD(T1, r),
      s = iD[i.placedSide];
    return w.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: w.jsx(tD, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
k1.displayName = T1;
function sD(e) {
  return e !== null;
}
var aD = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, h, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [c, d] = A1(n),
      u = { start: "0%", center: "50%", end: "100%" }[d],
      f = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + a / 2,
      y = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let m = "",
      v = "";
    return (
      c === "bottom"
        ? ((m = s ? u : `${f}px`), (v = `${-l}px`))
        : c === "top"
        ? ((m = s ? u : `${f}px`), (v = `${r.floating.height + l}px`))
        : c === "right"
        ? ((m = `${-l}px`), (v = s ? u : `${y}px`))
        : c === "left" &&
          ((m = `${r.floating.width + l}px`), (v = s ? u : `${y}px`)),
      { data: { x: m, y: v } }
    );
  },
});
function A1(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var lD = C1,
  cD = P1,
  uD = b1,
  dD = k1,
  fD = "Portal",
  Xf = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    Qe(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? TP.createPortal(w.jsx(re.div, { ...r, ref: t }), s) : null;
  });
Xf.displayName = fD;
var pD = "VisuallyHidden",
  N1 = x.forwardRef((e, t) =>
    w.jsx(re.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
N1.displayName = pD;
var hD = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Dr = new WeakMap(),
  Ms = new WeakMap(),
  Ds = {},
  kc = 0,
  R1 = function (e) {
    return e && (e.host || R1(e.parentNode));
  },
  mD = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = R1(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  gD = function (e, t, n, r) {
    var o = mD(t, Array.isArray(e) ? e : [e]);
    Ds[n] || (Ds[n] = new WeakMap());
    var i = Ds[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      c = function (u) {
        !u || a.has(u) || (a.add(u), c(u.parentNode));
      };
    o.forEach(c);
    var d = function (u) {
      !u ||
        l.has(u) ||
        Array.prototype.forEach.call(u.children, function (f) {
          if (a.has(f)) d(f);
          else
            try {
              var y = f.getAttribute(r),
                m = y !== null && y !== "false",
                v = (Dr.get(f) || 0) + 1,
                S = (i.get(f) || 0) + 1;
              Dr.set(f, v),
                i.set(f, S),
                s.push(f),
                v === 1 && m && Ms.set(f, !0),
                S === 1 && f.setAttribute(n, "true"),
                m || f.setAttribute(r, "true");
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", f, h);
            }
        });
    };
    return (
      d(t),
      a.clear(),
      kc++,
      function () {
        s.forEach(function (u) {
          var f = Dr.get(u) - 1,
            y = i.get(u) - 1;
          Dr.set(u, f),
            i.set(u, y),
            f || (Ms.has(u) || u.removeAttribute(r), Ms.delete(u)),
            y || u.removeAttribute(n);
        }),
          kc--,
          kc ||
            ((Dr = new WeakMap()),
            (Dr = new WeakMap()),
            (Ms = new WeakMap()),
            (Ds = {}));
      }
    );
  },
  M1 = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = hD(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        gD(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Bt = function () {
    return (
      (Bt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Bt.apply(this, arguments)
    );
  };
function D1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function vD(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var qs = "right-scroll-bar-position",
  Js = "width-before-scroll-bar",
  yD = "with-scroll-bars-hidden",
  xD = "--removed-body-scroll-bar-size";
function Ac(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wD(e, t) {
  var n = x.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var SD = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  yg = new WeakMap();
function CD(e, t) {
  var n = wD(null, function (r) {
    return e.forEach(function (o) {
      return Ac(o, r);
    });
  });
  return (
    SD(
      function () {
        var r = yg.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || Ac(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Ac(a, s);
            });
        }
        yg.set(n, e);
      },
      [e]
    ),
    n
  );
}
function ED(e) {
  return e;
}
function PD(e, t) {
  t === void 0 && (t = ED);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var d = s;
            (s = []), d.forEach(i);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (d) {
              s.push(d), c();
            },
            filter: function (d) {
              return (s = s.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function bD(e) {
  e === void 0 && (e = {});
  var t = PD(null);
  return (t.options = Bt({ async: !0, ssr: !1 }, e)), t;
}
var _1 = function (e) {
  var t = e.sideCar,
    n = D1(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return x.createElement(r, Bt({}, n));
};
_1.isSideCarExport = !0;
function TD(e, t) {
  return e.useMedium(t), _1;
}
var j1 = bD(),
  Nc = function () {},
  xl = x.forwardRef(function (e, t) {
    var n = x.useRef(null),
      r = x.useState({
        onScrollCapture: Nc,
        onWheelCapture: Nc,
        onTouchMoveCapture: Nc,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      u = e.shards,
      f = e.sideCar,
      y = e.noIsolation,
      m = e.inert,
      v = e.allowPinchZoom,
      S = e.as,
      h = S === void 0 ? "div" : S,
      p = e.gapMode,
      g = D1(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = f,
      E = CD([n, t]),
      T = Bt(Bt({}, g), o);
    return x.createElement(
      x.Fragment,
      null,
      d &&
        x.createElement(C, {
          sideCar: j1,
          removeScrollBar: c,
          shards: u,
          noIsolation: y,
          inert: m,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: p,
        }),
      s
        ? x.cloneElement(x.Children.only(a), Bt(Bt({}, T), { ref: E }))
        : x.createElement(h, Bt({}, T, { className: l, ref: E }), a)
    );
  });
xl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
xl.classNames = { fullWidth: Js, zeroRight: qs };
var kD = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function AD() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = kD();
  return t && e.setAttribute("nonce", t), e;
}
function ND(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function RD(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var MD = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = AD()) && (ND(t, n), RD(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  DD = function () {
    var e = MD();
    return function (t, n) {
      x.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  I1 = function () {
    var e = DD(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  _D = { left: 0, top: 0, right: 0, gap: 0 },
  Rc = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  jD = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Rc(n), Rc(r), Rc(o)];
  },
  ID = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return _D;
    var t = jD(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  LD = I1(),
  ao = "data-scroll-locked",
  OD = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          yD,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          ao,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          qs,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Js,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(qs, " .")
        .concat(
          qs,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Js, " .")
        .concat(
          Js,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          ao,
          `] {
    `
        )
        .concat(xD, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  xg = function () {
    var e = parseInt(document.body.getAttribute(ao) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  FD = function () {
    x.useEffect(function () {
      return (
        document.body.setAttribute(ao, (xg() + 1).toString()),
        function () {
          var e = xg() - 1;
          e <= 0
            ? document.body.removeAttribute(ao)
            : document.body.setAttribute(ao, e.toString());
        }
      );
    }, []);
  },
  VD = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    FD();
    var i = x.useMemo(
      function () {
        return ID(o);
      },
      [o]
    );
    return x.createElement(LD, { styles: OD(i, !t, o, n ? "" : "!important") });
  },
  Xu = !1;
if (typeof window < "u")
  try {
    var _s = Object.defineProperty({}, "passive", {
      get: function () {
        return (Xu = !0), !0;
      },
    });
    window.addEventListener("test", _s, _s),
      window.removeEventListener("test", _s, _s);
  } catch {
    Xu = !1;
  }
var _r = Xu ? { passive: !1 } : !1,
  zD = function (e) {
    return e.tagName === "TEXTAREA";
  },
  L1 = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !zD(e) && n[t] === "visible")
    );
  },
  BD = function (e) {
    return L1(e, "overflowY");
  },
  $D = function (e) {
    return L1(e, "overflowX");
  },
  wg = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = O1(e, r);
      if (o) {
        var i = F1(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  WD = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  UD = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  O1 = function (e, t) {
    return e === "v" ? BD(t) : $D(t);
  },
  F1 = function (e, t) {
    return e === "v" ? WD(t) : UD(t);
  },
  HD = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  GD = function (e, t, n, r, o) {
    var i = HD(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      d = s > 0,
      u = 0,
      f = 0;
    do {
      var y = F1(e, a),
        m = y[0],
        v = y[1],
        S = y[2],
        h = v - S - i * m;
      (m || h) && O1(e, a) && ((u += h), (f += m)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((d && (Math.abs(u) < 1 || !o)) || (!d && (Math.abs(f) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  js = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Sg = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Cg = function (e) {
    return e && "current" in e ? e.current : e;
  },
  KD = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  YD = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  XD = 0,
  jr = [];
function QD(e) {
  var t = x.useRef([]),
    n = x.useRef([0, 0]),
    r = x.useRef(),
    o = x.useState(XD++)[0],
    i = x.useState(I1)[0],
    s = x.useRef(e);
  x.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    x.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = vD([e.lockRef.current], (e.shards || []).map(Cg), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = x.useCallback(function (v, S) {
      if ("touches" in v && v.touches.length === 2)
        return !s.current.allowPinchZoom;
      var h = js(v),
        p = n.current,
        g = "deltaX" in v ? v.deltaX : p[0] - h[0],
        C = "deltaY" in v ? v.deltaY : p[1] - h[1],
        E,
        T = v.target,
        b = Math.abs(g) > Math.abs(C) ? "h" : "v";
      if ("touches" in v && b === "h" && T.type === "range") return !1;
      var P = wg(b, T);
      if (!P) return !0;
      if ((P ? (E = b) : ((E = b === "v" ? "h" : "v"), (P = wg(b, T))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (g || C) && (r.current = E), !E)
      )
        return !0;
      var A = r.current || E;
      return GD(A, S, v, A === "h" ? g : C, !0);
    }, []),
    l = x.useCallback(function (v) {
      var S = v;
      if (!(!jr.length || jr[jr.length - 1] !== i)) {
        var h = "deltaY" in S ? Sg(S) : js(S),
          p = t.current.filter(function (E) {
            return (
              E.name === S.type &&
              (E.target === S.target || S.target === E.shadowParent) &&
              KD(E.delta, h)
            );
          })[0];
        if (p && p.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!p) {
          var g = (s.current.shards || [])
              .map(Cg)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(S.target);
              }),
            C = g.length > 0 ? a(S, g[0]) : !s.current.noIsolation;
          C && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    c = x.useCallback(function (v, S, h, p) {
      var g = { name: v, delta: S, target: h, should: p, shadowParent: ZD(h) };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== g;
          });
        }, 1);
    }, []),
    d = x.useCallback(function (v) {
      (n.current = js(v)), (r.current = void 0);
    }, []),
    u = x.useCallback(function (v) {
      c(v.type, Sg(v), v.target, a(v, e.lockRef.current));
    }, []),
    f = x.useCallback(function (v) {
      c(v.type, js(v), v.target, a(v, e.lockRef.current));
    }, []);
  x.useEffect(function () {
    return (
      jr.push(i),
      e.setCallbacks({
        onScrollCapture: u,
        onWheelCapture: u,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, _r),
      document.addEventListener("touchmove", l, _r),
      document.addEventListener("touchstart", d, _r),
      function () {
        (jr = jr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, _r),
          document.removeEventListener("touchmove", l, _r),
          document.removeEventListener("touchstart", d, _r);
      }
    );
  }, []);
  var y = e.removeScrollBar,
    m = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    m ? x.createElement(i, { styles: YD(o) }) : null,
    y ? x.createElement(VD, { gapMode: e.gapMode }) : null
  );
}
function ZD(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const qD = TD(j1, QD);
var Qf = x.forwardRef(function (e, t) {
  return x.createElement(xl, Bt({}, e, { ref: t, sideCar: qD }));
});
Qf.classNames = xl.classNames;
var JD = [" ", "Enter", "ArrowUp", "ArrowDown"],
  e_ = [" ", "Enter"],
  ns = "Select",
  [wl, Sl, t_] = _f(ns),
  [Mo, iL] = mn(ns, [t_, w1]),
  Cl = w1(),
  [n_, er] = Mo(ns),
  [r_, o_] = Mo(ns),
  V1 = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: s,
        defaultValue: a,
        onValueChange: l,
        dir: c,
        name: d,
        autoComplete: u,
        disabled: f,
        required: y,
      } = e,
      m = Cl(t),
      [v, S] = x.useState(null),
      [h, p] = x.useState(null),
      [g, C] = x.useState(!1),
      E = ml(c),
      [T = !1, b] = So({ prop: r, defaultProp: o, onChange: i }),
      [P, A] = So({ prop: s, defaultProp: a, onChange: l }),
      k = x.useRef(null),
      R = v ? !!v.closest("form") : !0,
      [M, $] = x.useState(new Set()),
      F = Array.from(M)
        .map((L) => L.props.value)
        .join(";");
    return w.jsx(lD, {
      ...m,
      children: w.jsxs(n_, {
        required: y,
        scope: t,
        trigger: v,
        onTriggerChange: S,
        valueNode: h,
        onValueNodeChange: p,
        valueNodeHasChildren: g,
        onValueNodeHasChildrenChange: C,
        contentId: gr(),
        value: P,
        onValueChange: A,
        open: T,
        onOpenChange: b,
        dir: E,
        triggerPointerDownPosRef: k,
        disabled: f,
        children: [
          w.jsx(wl.Provider, {
            scope: t,
            children: w.jsx(r_, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: x.useCallback((L) => {
                $((O) => new Set(O).add(L));
              }, []),
              onNativeOptionRemove: x.useCallback((L) => {
                $((O) => {
                  const I = new Set(O);
                  return I.delete(L), I;
                });
              }, []),
              children: n,
            }),
          }),
          R
            ? w.jsxs(
                uw,
                {
                  "aria-hidden": !0,
                  required: y,
                  tabIndex: -1,
                  name: d,
                  autoComplete: u,
                  value: P,
                  onChange: (L) => A(L.target.value),
                  disabled: f,
                  children: [
                    P === void 0 ? w.jsx("option", { value: "" }) : null,
                    Array.from(M),
                  ],
                },
                F
              )
            : null,
        ],
      }),
    });
  };
V1.displayName = ns;
var z1 = "SelectTrigger",
  B1 = x.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      i = Cl(n),
      s = er(z1, n),
      a = s.disabled || r,
      l = ae(t, s.onTriggerChange),
      c = Sl(n),
      [d, u, f] = dw((m) => {
        const v = c().filter((p) => !p.disabled),
          S = v.find((p) => p.value === s.value),
          h = fw(v, m, S);
        h !== void 0 && s.onValueChange(h.value);
      }),
      y = () => {
        a || (s.onOpenChange(!0), f());
      };
    return w.jsx(cD, {
      asChild: !0,
      ...i,
      children: w.jsx(re.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": cw(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Z(o.onClick, (m) => {
          m.currentTarget.focus();
        }),
        onPointerDown: Z(o.onPointerDown, (m) => {
          const v = m.target;
          v.hasPointerCapture(m.pointerId) &&
            v.releasePointerCapture(m.pointerId),
            m.button === 0 &&
              m.ctrlKey === !1 &&
              (y(),
              (s.triggerPointerDownPosRef.current = {
                x: Math.round(m.pageX),
                y: Math.round(m.pageY),
              }),
              m.preventDefault());
        }),
        onKeyDown: Z(o.onKeyDown, (m) => {
          const v = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            u(m.key),
            !(v && m.key === " ") &&
              JD.includes(m.key) &&
              (y(), m.preventDefault());
        }),
      }),
    });
  });
B1.displayName = z1;
var $1 = "SelectValue",
  W1 = x.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: s = "",
        ...a
      } = e,
      l = er($1, n),
      { onValueNodeHasChildrenChange: c } = l,
      d = i !== void 0,
      u = ae(t, l.onValueNodeChange);
    return (
      Qe(() => {
        c(d);
      }, [c, d]),
      w.jsx(re.span, {
        ...a,
        ref: u,
        style: { pointerEvents: "none" },
        children: cw(l.value) ? w.jsx(w.Fragment, { children: s }) : i,
      })
    );
  });
W1.displayName = $1;
var i_ = "SelectIcon",
  U1 = x.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return w.jsx(re.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
U1.displayName = i_;
var s_ = "SelectPortal",
  H1 = (e) => w.jsx(Xf, { asChild: !0, ...e });
H1.displayName = s_;
var Pr = "SelectContent",
  G1 = x.forwardRef((e, t) => {
    const n = er(Pr, e.__scopeSelect),
      [r, o] = x.useState();
    if (
      (Qe(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const i = r;
      return i
        ? Nr.createPortal(
            w.jsx(K1, {
              scope: e.__scopeSelect,
              children: w.jsx(wl.Slot, {
                scope: e.__scopeSelect,
                children: w.jsx("div", { children: e.children }),
              }),
            }),
            i
          )
        : null;
    }
    return w.jsx(Y1, { ...e, ref: t });
  });
G1.displayName = Pr;
var Qt = 10,
  [K1, tr] = Mo(Pr),
  a_ = "SelectContentImpl",
  Y1 = x.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: d,
        arrowPadding: u,
        collisionBoundary: f,
        collisionPadding: y,
        sticky: m,
        hideWhenDetached: v,
        avoidCollisions: S,
        ...h
      } = e,
      p = er(Pr, n),
      [g, C] = x.useState(null),
      [E, T] = x.useState(null),
      b = ae(t, (V) => C(V)),
      [P, A] = x.useState(null),
      [k, R] = x.useState(null),
      M = Sl(n),
      [$, F] = x.useState(!1),
      L = x.useRef(!1);
    x.useEffect(() => {
      if (g) return M1(g);
    }, [g]),
      a1();
    const O = x.useCallback(
        (V) => {
          const [Y, ...ye] = M().map((j) => j.ref.current),
            [q] = ye.slice(-1),
            U = document.activeElement;
          for (const j of V)
            if (
              j === U ||
              (j == null || j.scrollIntoView({ block: "nearest" }),
              j === Y && E && (E.scrollTop = 0),
              j === q && E && (E.scrollTop = E.scrollHeight),
              j == null || j.focus(),
              document.activeElement !== U)
            )
              return;
        },
        [M, E]
      ),
      I = x.useCallback(() => O([P, g]), [O, P, g]);
    x.useEffect(() => {
      $ && I();
    }, [$, I]);
    const { onOpenChange: N, triggerPointerDownPosRef: _ } = p;
    x.useEffect(() => {
      if (g) {
        let V = { x: 0, y: 0 };
        const Y = (q) => {
            var U, j;
            V = {
              x: Math.abs(
                Math.round(q.pageX) -
                  (((U = _.current) == null ? void 0 : U.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(q.pageY) -
                  (((j = _.current) == null ? void 0 : j.y) ?? 0)
              ),
            };
          },
          ye = (q) => {
            V.x <= 10 && V.y <= 10
              ? q.preventDefault()
              : g.contains(q.target) || N(!1),
              document.removeEventListener("pointermove", Y),
              (_.current = null);
          };
        return (
          _.current !== null &&
            (document.addEventListener("pointermove", Y),
            document.addEventListener("pointerup", ye, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", Y),
              document.removeEventListener("pointerup", ye, { capture: !0 });
          }
        );
      }
    }, [g, N, _]),
      x.useEffect(() => {
        const V = () => N(!1);
        return (
          window.addEventListener("blur", V),
          window.addEventListener("resize", V),
          () => {
            window.removeEventListener("blur", V),
              window.removeEventListener("resize", V);
          }
        );
      }, [N]);
    const [B, W] = dw((V) => {
        const Y = M().filter((U) => !U.disabled),
          ye = Y.find((U) => U.ref.current === document.activeElement),
          q = fw(Y, V, ye);
        q && setTimeout(() => q.ref.current.focus());
      }),
      K = x.useCallback(
        (V, Y, ye) => {
          const q = !L.current && !ye;
          ((p.value !== void 0 && p.value === Y) || q) &&
            (A(V), q && (L.current = !0));
        },
        [p.value]
      ),
      ie = x.useCallback(() => (g == null ? void 0 : g.focus()), [g]),
      oe = x.useCallback(
        (V, Y, ye) => {
          const q = !L.current && !ye;
          ((p.value !== void 0 && p.value === Y) || q) && R(V);
        },
        [p.value]
      ),
      fe = r === "popper" ? Qu : X1,
      te =
        fe === Qu
          ? {
              side: a,
              sideOffset: l,
              align: c,
              alignOffset: d,
              arrowPadding: u,
              collisionBoundary: f,
              collisionPadding: y,
              sticky: m,
              hideWhenDetached: v,
              avoidCollisions: S,
            }
          : {};
    return w.jsx(K1, {
      scope: n,
      content: g,
      viewport: E,
      onViewportChange: T,
      itemRefCallback: K,
      selectedItem: P,
      onItemLeave: ie,
      itemTextRefCallback: oe,
      focusSelectedItem: I,
      selectedItemText: k,
      position: r,
      isPositioned: $,
      searchRef: B,
      children: w.jsx(Qf, {
        as: Cr,
        allowPinchZoom: !0,
        children: w.jsx(zf, {
          asChild: !0,
          trapped: p.open,
          onMountAutoFocus: (V) => {
            V.preventDefault();
          },
          onUnmountAutoFocus: Z(o, (V) => {
            var Y;
            (Y = p.trigger) == null || Y.focus({ preventScroll: !0 }),
              V.preventDefault();
          }),
          children: w.jsx(Vf, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: (V) => V.preventDefault(),
            onDismiss: () => p.onOpenChange(!1),
            children: w.jsx(fe, {
              role: "listbox",
              id: p.contentId,
              "data-state": p.open ? "open" : "closed",
              dir: p.dir,
              onContextMenu: (V) => V.preventDefault(),
              ...h,
              ...te,
              onPlaced: () => F(!0),
              ref: b,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...h.style,
              },
              onKeyDown: Z(h.onKeyDown, (V) => {
                const Y = V.ctrlKey || V.altKey || V.metaKey;
                if (
                  (V.key === "Tab" && V.preventDefault(),
                  !Y && V.key.length === 1 && W(V.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key))
                ) {
                  let q = M()
                    .filter((U) => !U.disabled)
                    .map((U) => U.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(V.key) &&
                      (q = q.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(V.key))
                  ) {
                    const U = V.target,
                      j = q.indexOf(U);
                    q = q.slice(j + 1);
                  }
                  setTimeout(() => O(q)), V.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Y1.displayName = a_;
var l_ = "SelectItemAlignedPosition",
  X1 = x.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      i = er(Pr, n),
      s = tr(Pr, n),
      [a, l] = x.useState(null),
      [c, d] = x.useState(null),
      u = ae(t, (b) => d(b)),
      f = Sl(n),
      y = x.useRef(!1),
      m = x.useRef(!0),
      {
        viewport: v,
        selectedItem: S,
        selectedItemText: h,
        focusSelectedItem: p,
      } = s,
      g = x.useCallback(() => {
        if (i.trigger && i.valueNode && a && c && v && S && h) {
          const b = i.trigger.getBoundingClientRect(),
            P = c.getBoundingClientRect(),
            A = i.valueNode.getBoundingClientRect(),
            k = h.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const U = k.left - P.left,
              j = A.left - U,
              X = b.left - j,
              le = b.width + X,
              xe = Math.max(le, P.width),
              Fe = window.innerWidth - Qt,
              Ge = Ma(j, [Qt, Fe - xe]);
            (a.style.minWidth = le + "px"), (a.style.left = Ge + "px");
          } else {
            const U = P.right - k.right,
              j = window.innerWidth - A.right - U,
              X = window.innerWidth - b.right - j,
              le = b.width + X,
              xe = Math.max(le, P.width),
              Fe = window.innerWidth - Qt,
              Ge = Ma(j, [Qt, Fe - xe]);
            (a.style.minWidth = le + "px"), (a.style.right = Ge + "px");
          }
          const R = f(),
            M = window.innerHeight - Qt * 2,
            $ = v.scrollHeight,
            F = window.getComputedStyle(c),
            L = parseInt(F.borderTopWidth, 10),
            O = parseInt(F.paddingTop, 10),
            I = parseInt(F.borderBottomWidth, 10),
            N = parseInt(F.paddingBottom, 10),
            _ = L + O + $ + N + I,
            B = Math.min(S.offsetHeight * 5, _),
            W = window.getComputedStyle(v),
            K = parseInt(W.paddingTop, 10),
            ie = parseInt(W.paddingBottom, 10),
            oe = b.top + b.height / 2 - Qt,
            fe = M - oe,
            te = S.offsetHeight / 2,
            V = S.offsetTop + te,
            Y = L + O + V,
            ye = _ - Y;
          if (Y <= oe) {
            const U = S === R[R.length - 1].ref.current;
            a.style.bottom = "0px";
            const j = c.clientHeight - v.offsetTop - v.offsetHeight,
              X = Math.max(fe, te + (U ? ie : 0) + j + I),
              le = Y + X;
            a.style.height = le + "px";
          } else {
            const U = S === R[0].ref.current;
            a.style.top = "0px";
            const X = Math.max(oe, L + v.offsetTop + (U ? K : 0) + te) + ye;
            (a.style.height = X + "px"), (v.scrollTop = Y - oe + v.offsetTop);
          }
          (a.style.margin = `${Qt}px 0`),
            (a.style.minHeight = B + "px"),
            (a.style.maxHeight = M + "px"),
            r == null || r(),
            requestAnimationFrame(() => (y.current = !0));
        }
      }, [f, i.trigger, i.valueNode, a, c, v, S, h, i.dir, r]);
    Qe(() => g(), [g]);
    const [C, E] = x.useState();
    Qe(() => {
      c && E(window.getComputedStyle(c).zIndex);
    }, [c]);
    const T = x.useCallback(
      (b) => {
        b && m.current === !0 && (g(), p == null || p(), (m.current = !1));
      },
      [g, p]
    );
    return w.jsx(u_, {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: y,
      onScrollButtonChange: T,
      children: w.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: w.jsx(re.div, {
          ...o,
          ref: u,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
X1.displayName = l_;
var c_ = "SelectPopperPosition",
  Qu = x.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Qt,
        ...i
      } = e,
      s = Cl(n);
    return w.jsx(uD, {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Qu.displayName = c_;
var [u_, Zf] = Mo(Pr, {}),
  Zu = "SelectViewport",
  Q1 = x.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      i = tr(Zu, n),
      s = Zf(Zu, n),
      a = ae(t, i.onViewportChange),
      l = x.useRef(0);
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        w.jsx(wl.Slot, {
          scope: n,
          children: w.jsx(re.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: a,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...o.style,
            },
            onScroll: Z(o.onScroll, (c) => {
              const d = c.currentTarget,
                { contentWrapper: u, shouldExpandOnScrollRef: f } = s;
              if (f != null && f.current && u) {
                const y = Math.abs(l.current - d.scrollTop);
                if (y > 0) {
                  const m = window.innerHeight - Qt * 2,
                    v = parseFloat(u.style.minHeight),
                    S = parseFloat(u.style.height),
                    h = Math.max(v, S);
                  if (h < m) {
                    const p = h + y,
                      g = Math.min(m, p),
                      C = p - g;
                    (u.style.height = g + "px"),
                      u.style.bottom === "0px" &&
                        ((d.scrollTop = C > 0 ? C : 0),
                        (u.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Q1.displayName = Zu;
var Z1 = "SelectGroup",
  [d_, f_] = Mo(Z1),
  p_ = x.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = gr();
    return w.jsx(d_, {
      scope: n,
      id: o,
      children: w.jsx(re.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
p_.displayName = Z1;
var q1 = "SelectLabel",
  J1 = x.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = f_(q1, n);
    return w.jsx(re.div, { id: o.id, ...r, ref: t });
  });
J1.displayName = q1;
var La = "SelectItem",
  [h_, ew] = Mo(La),
  tw = x.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...s
      } = e,
      a = er(La, n),
      l = tr(La, n),
      c = a.value === r,
      [d, u] = x.useState(i ?? ""),
      [f, y] = x.useState(!1),
      m = ae(t, (h) => {
        var p;
        return (p = l.itemRefCallback) == null ? void 0 : p.call(l, h, r, o);
      }),
      v = gr(),
      S = () => {
        o || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return w.jsx(h_, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: c,
      onItemTextChange: x.useCallback((h) => {
        u((p) => p || ((h == null ? void 0 : h.textContent) ?? "").trim());
      }, []),
      children: w.jsx(wl.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: w.jsx(re.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": f ? "" : void 0,
          "aria-selected": c && f,
          "data-state": c ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: m,
          onFocus: Z(s.onFocus, () => y(!0)),
          onBlur: Z(s.onBlur, () => y(!1)),
          onPointerUp: Z(s.onPointerUp, S),
          onPointerMove: Z(s.onPointerMove, (h) => {
            var p;
            o
              ? (p = l.onItemLeave) == null || p.call(l)
              : h.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Z(s.onPointerLeave, (h) => {
            var p;
            h.currentTarget === document.activeElement &&
              ((p = l.onItemLeave) == null || p.call(l));
          }),
          onKeyDown: Z(s.onKeyDown, (h) => {
            var g;
            (((g = l.searchRef) == null ? void 0 : g.current) !== "" &&
              h.key === " ") ||
              (e_.includes(h.key) && S(), h.key === " " && h.preventDefault());
          }),
        }),
      }),
    });
  });
tw.displayName = La;
var Zo = "SelectItemText",
  nw = x.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e,
      s = er(Zo, n),
      a = tr(Zo, n),
      l = ew(Zo, n),
      c = o_(Zo, n),
      [d, u] = x.useState(null),
      f = ae(
        t,
        (h) => u(h),
        l.onItemTextChange,
        (h) => {
          var p;
          return (p = a.itemTextRefCallback) == null
            ? void 0
            : p.call(a, h, l.value, l.disabled);
        }
      ),
      y = d == null ? void 0 : d.textContent,
      m = x.useMemo(
        () =>
          w.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: y },
            l.value
          ),
        [l.disabled, l.value, y]
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: S } = c;
    return (
      Qe(() => (v(m), () => S(m)), [v, S, m]),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx(re.span, { id: l.textId, ...i, ref: f }),
          l.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? Nr.createPortal(i.children, s.valueNode)
            : null,
        ],
      })
    );
  });
nw.displayName = Zo;
var rw = "SelectItemIndicator",
  ow = x.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ew(rw, n).isSelected
      ? w.jsx(re.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
ow.displayName = rw;
var qu = "SelectScrollUpButton",
  iw = x.forwardRef((e, t) => {
    const n = tr(qu, e.__scopeSelect),
      r = Zf(qu, e.__scopeSelect),
      [o, i] = x.useState(!1),
      s = ae(t, r.onScrollButtonChange);
    return (
      Qe(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const c = l.scrollTop > 0;
            i(c);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? w.jsx(aw, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: l } = n;
              a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
iw.displayName = qu;
var Ju = "SelectScrollDownButton",
  sw = x.forwardRef((e, t) => {
    const n = tr(Ju, e.__scopeSelect),
      r = Zf(Ju, e.__scopeSelect),
      [o, i] = x.useState(!1),
      s = ae(t, r.onScrollButtonChange);
    return (
      Qe(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const c = l.scrollHeight - l.clientHeight,
              d = Math.ceil(l.scrollTop) < c;
            i(d);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? w.jsx(aw, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: l } = n;
              a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
sw.displayName = Ju;
var aw = x.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      i = tr("SelectScrollButton", n),
      s = x.useRef(null),
      a = Sl(n),
      l = x.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      x.useEffect(() => () => l(), [l]),
      Qe(() => {
        var d;
        const c = a().find((u) => u.ref.current === document.activeElement);
        (d = c == null ? void 0 : c.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [a]),
      w.jsx(re.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: Z(o.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerMove: Z(o.onPointerMove, () => {
          var c;
          (c = i.onItemLeave) == null || c.call(i),
            s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerLeave: Z(o.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  m_ = "SelectSeparator",
  lw = x.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return w.jsx(re.div, { "aria-hidden": !0, ...r, ref: t });
  });
lw.displayName = m_;
var ed = "SelectArrow",
  g_ = x.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Cl(n),
      i = er(ed, n),
      s = tr(ed, n);
    return i.open && s.position === "popper"
      ? w.jsx(dD, { ...o, ...r, ref: t })
      : null;
  });
g_.displayName = ed;
function cw(e) {
  return e === "" || e === void 0;
}
var uw = x.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = x.useRef(null),
    i = ae(t, o),
    s = If(n);
  return (
    x.useEffect(() => {
      const a = o.current,
        l = window.HTMLSelectElement.prototype,
        d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (s !== n && d) {
        const u = new Event("change", { bubbles: !0 });
        d.call(a, n), a.dispatchEvent(u);
      }
    }, [s, n]),
    w.jsx(N1, {
      asChild: !0,
      children: w.jsx("select", { ...r, ref: i, defaultValue: n }),
    })
  );
});
uw.displayName = "BubbleSelect";
function dw(e) {
  const t = Gt(e),
    n = x.useRef(""),
    r = x.useRef(0),
    o = x.useCallback(
      (s) => {
        const a = n.current + s;
        t(a),
          (function l(c) {
            (n.current = c),
              window.clearTimeout(r.current),
              c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
          })(a);
      },
      [t]
    ),
    i = x.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function fw(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = v_(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find((c) =>
    c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function v_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var y_ = V1,
  pw = B1,
  x_ = W1,
  w_ = U1,
  S_ = H1,
  hw = G1,
  C_ = Q1,
  mw = J1,
  gw = tw,
  E_ = nw,
  P_ = ow,
  vw = iw,
  yw = sw,
  xw = lw;
const b_ = y_,
  T_ = x_,
  ww = x.forwardRef(({ className: e, children: t, ...n }, r) =>
    w.jsxs(pw, {
      ref: r,
      className: H(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        w.jsx(w_, {
          asChild: !0,
          children: w.jsx(By, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
ww.displayName = pw.displayName;
const Sw = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(vw, {
    ref: n,
    className: H("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: w.jsx(OP, { className: "h-4 w-4" }),
  })
);
Sw.displayName = vw.displayName;
const Cw = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(yw, {
    ref: n,
    className: H("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: w.jsx(By, { className: "h-4 w-4" }),
  })
);
Cw.displayName = yw.displayName;
const Ew = x.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    w.jsx(S_, {
      children: w.jsxs(hw, {
        ref: o,
        className: H(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          w.jsx(Sw, {}),
          w.jsx(C_, {
            className: H(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          w.jsx(Cw, {}),
        ],
      }),
    })
);
Ew.displayName = hw.displayName;
const k_ = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(mw, {
    ref: n,
    className: H("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
k_.displayName = mw.displayName;
const Pw = x.forwardRef(({ className: e, children: t, ...n }, r) =>
  w.jsxs(gw, {
    ref: r,
    className: H(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      w.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: w.jsx(P_, { children: w.jsx(LP, { className: "h-4 w-4" }) }),
      }),
      w.jsx(E_, { children: t }),
    ],
  })
);
Pw.displayName = gw.displayName;
const A_ = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(xw, { ref: n, className: H("-mx-1 my-1 h-px bg-muted", e), ...t })
);
A_.displayName = xw.displayName;
const El = ({
  className: e,
  defaultVal: t,
  placeHolder: n,
  selectItems: r,
  disabled: o,
  Fn: i,
}) => {
  const s = (a) => {
    i(a);
  };
  return w.jsx(w.Fragment, {
    children: w.jsxs(b_, {
      onValueChange: s,
      defaultValue: t,
      disabled: o,
      children: [
        w.jsx(ww, {
          className: H("w-[180px]", e),
          children: w.jsx(T_, { placeholder: n }),
        }),
        w.jsx(Ew, {
          children: r.map((a) =>
            w.jsx(
              Pw,
              { className: "p-2", value: a.value, children: a.label },
              a.value
            )
          ),
        }),
      ],
    }),
  });
};
function Vt(...e) {
  console.info("DEBUG-INFO: ", ...e);
}
let qf = !0;
function N_(e) {
  qf = e;
}
function Jf() {
  return qf;
}
function R_() {
  qf = !1;
}
async function M_(e, t, n) {
  N_(!0);
  const r = Df(e, t);
  try {
    await D_(r, n), await __(r, n), await I_(r, n);
  } catch (o) {
    return o;
  }
  return r;
}
async function D_(e, t) {
  const n = e.length,
    r = e[0].length;
  async function o(i, s) {
    if (!Jf()) throw rl.MazeGenStop;
    if (i >= n) return;
    const a = e[i],
      l = e[i][s],
      c = i % 2 === 0 || s % 2 === 0;
    let d = i,
      u = s + 1;
    s >= r && ((d = i + 1), (u = 0)),
      a && l && c && ((e[i][s].isWall = !0), (e[i][s].isPath = !1)),
      t([...e]),
      await new Promise((f) => {
        setTimeout(f, 0);
      }),
      await o(d, u);
  }
  await o(0, 0);
}
async function __(e, t) {
  const n = e.length,
    r = e[0].length;
  async function o(i, s) {
    if (!Jf()) throw rl.MazeGenStop;
    if (i >= n) return;
    const a = e[i],
      l = e[i][s];
    let c = i,
      d = s + 1;
    s >= r && ((c = i + 1), (d = 0)),
      a && l && (j_(e, i, s), t([...e])),
      await new Promise((u) => {
        setTimeout(u, 0);
      }),
      await o(c, d);
  }
  return await o(0, 0), e;
}
function j_(e, t, n) {
  if (t >= e.length || n >= e[0].length) return;
  const r = e.length,
    o = e[0].length,
    i = r - 2,
    s = o - 2,
    a = Math.random() < 0.5 ? "left" : "right";
  if (t % 2 !== 0 && n % 2 !== 0) {
    if (t === i && n !== s) {
      (e[t][n + 1].isWall = !1), (e[t][n + 1].isPath = !0);
      return;
    }
    if (n === s && t !== i) {
      (e[t + 1][n].isWall = !1), (e[t + 1][n].isPath = !0);
      return;
    }
    t !== i &&
      n !== s &&
      (a == "left"
        ? ((e[t][n + 1].isWall = !1), (e[t][n + 1].isPath = !0))
        : ((e[t + 1][n].isWall = !1), (e[t + 1][n].isPath = !0)));
  }
}
async function I_(e, t) {
  const n = [e[1][1], e[e.length - 2][e[0].length - 2]];
  async function r(o) {
    if (!Jf()) throw rl.MazeGenStop;
    o >= n.length ||
      (o === 0 ? (n[o].isStart = !0) : (n[o].isGoal = !0),
      t([...e]),
      await new Promise((i) => setTimeout(i, 150)),
      await r(o + 1));
  }
  await r(0);
}
const L_ = () => {
    const e = ne((u) => u.rows),
      t = ne((u) => u.nodes),
      n = ne((u) => u.mazeAlgo),
      r = ne((u) => u.isMazeAlgProgress),
      o = ne((u) => u.isSearchAlgProgress),
      i = ne((u) => u.setGrid),
      s = ne((u) => u.setMazeAlgo),
      a = ne((u) => u.setCleanMaze),
      l = ne((u) => u.toggleMazeAlgProgress);
    async function c() {
      let u;
      l(),
        n === nf.BTM && (u = await M_(e, t, i)),
        u !== rl.MazeGenStop && a(io(u)),
        l();
    }
    function d() {
      R_();
      const u = Nx(e, t);
      i(io(u)), a(io(u));
    }
    return w.jsx(w.Fragment, {
      children: w.jsxs("div", {
        className: "flex flex-col md:gap-3 lg:gap-5",
        children: [
          w.jsx(Jn, { children: "Maze Algorithm" }),
          w.jsxs("div", {
            className: "flex gap-5",
            children: [
              w.jsx(El, {
                placeHolder: "Maze Algorithm",
                selectItems: O_,
                Fn: s,
                className: "w-full",
                disabled: r || o,
              }),
              w.jsx(pt, { disabled: o, onClick: d, children: "Quick Maze" }),
            ],
          }),
          w.jsx(pt, {
            disabled: r || o,
            variant: "blue",
            onClick: c,
            children: "Generate Maze",
          }),
        ],
      }),
    });
  },
  O_ = [{ value: nf.BTM, label: "Binary Tree Maze (BTM)" }];
let ep = !0,
  tp = [];
function bw(e) {
  ep = e;
}
function Eo() {
  return ep;
}
function F_() {
  ep = !1;
}
function Pl(e) {
  tp.push(e);
}
function V_() {
  return tp;
}
function Tw() {
  Vt("Search Alg Stoped!"), V_().forEach(clearTimeout), (tp = []);
}
function kw(e, t, n) {
  var s;
  let r = [],
    o = `${n.rowNum},${n.nodeNum}`;
  for (; o !== `${t.rowNum},${t.nodeNum}`; )
    r.push(o), (o = (s = e.get(o)) == null ? void 0 : s.toString());
  r.push(o);
  const i = [...r].reverse();
  return { revPath: r, fwdPath: i };
}
async function Aw(e, t, n) {
  async function r(o) {
    if (!Eo() || o >= t.length) return;
    const i = t[o],
      [s, a] = i.split(",").map(Number);
    (e[s][a].isRevPath = !0),
      n([...e]),
      await new Promise((l) => {
        const c = setTimeout(l, 50);
        Pl(c);
      }),
      await r(o + 1);
  }
  await r(0);
}
async function Nw(e, t, n) {
  async function r(o) {
    if (!Eo() || o >= t.length) return;
    const i = t[o],
      [s, a] = i.split(",").map(Number);
    (e[s][a].isRevPath = !1),
      (e[s][a].isFwdPath = !0),
      n([...e]),
      await new Promise((l) => {
        const c = setTimeout(l, 50);
        Pl(c);
      }),
      await r(o + 1);
  }
  await r(0);
}
async function z_(e, t, n, r, o = 100) {
  bw(!0);
  let i = 0;
  const s = e.length,
    a = e[0].length;
  let l = [e[r.rowNum][r.nodeNum]],
    c = new Map();
  async function d() {
    return new Promise(async (f) => {
      if (!Eo()) {
        f(De.StopSearch);
        return;
      }
      if (l.length === 0) {
        f(i === 1 ? De.ExploredAlready : De.PathNotFound);
        return;
      }
      const y = l.shift();
      if (!y) {
        f(De.OutOfBoundary);
        return;
      }
      const { rowNum: m, nodeNum: v } = y,
        S = [
          { row: m - 1, node: v },
          { row: m + 1, node: v },
          { row: m, node: v - 1 },
          { row: m, node: v + 1 },
        ];
      for (const p of S) {
        const { row: g, node: C } = p,
          E = e[g][C].isWall,
          T = e[g][C].isExplored;
        if (E || T) continue;
        const b = g > 0 && g < s,
          P = C > 0 && C < a;
        if (b && P) {
          (e[g][C].isExplored = !0),
            l.push(e[g][C]),
            c.set(`${g},${C}`, [y.rowNum, y.nodeNum]);
          const { rowNum: A, nodeNum: k } = n;
          if (g === A && C === k) {
            const { revPath: R, fwdPath: M } = kw(c, r, n);
            await Aw(e, R, t),
              await Nw(e, M, t),
              Eo() || f(De.PathFoundButStopSearch),
              f(De.PathFound);
            return;
          }
        }
      }
      t([...e]);
      const h = setTimeout(() => d().then(f), o);
      Pl(h), (i += 1);
    });
  }
  const u = await d();
  return u === De.StopSearch && Tw(), u;
}
var Rw = ["PageUp", "PageDown"],
  Mw = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Dw = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  Do = "Slider",
  [td, B_, $_] = _f(Do),
  [_w, sL] = mn(Do, [$_]),
  [W_, bl] = _w(Do),
  jw = x.forwardRef((e, t) => {
    const {
        name: n,
        min: r = 0,
        max: o = 100,
        step: i = 1,
        orientation: s = "horizontal",
        disabled: a = !1,
        minStepsBetweenThumbs: l = 0,
        defaultValue: c = [r],
        value: d,
        onValueChange: u = () => {},
        onValueCommit: f = () => {},
        inverted: y = !1,
        ...m
      } = e,
      v = x.useRef(new Set()),
      S = x.useRef(0),
      p = s === "horizontal" ? U_ : H_,
      [g = [], C] = So({
        prop: d,
        defaultProp: c,
        onChange: (k) => {
          var M;
          (M = [...v.current][S.current]) == null || M.focus(), u(k);
        },
      }),
      E = x.useRef(g);
    function T(k) {
      const R = Q_(g, k);
      A(k, R);
    }
    function b(k) {
      A(k, S.current);
    }
    function P() {
      const k = E.current[S.current];
      g[S.current] !== k && f(g);
    }
    function A(k, R, { commit: M } = { commit: !1 }) {
      const $ = ej(i),
        F = tj(Math.round((k - r) / i) * i + r, $),
        L = Ma(F, [r, o]);
      C((O = []) => {
        const I = Y_(O, L, R);
        if (J_(I, l * i)) {
          S.current = I.indexOf(L);
          const N = String(I) !== String(O);
          return N && M && f(I), N ? I : O;
        } else return O;
      });
    }
    return w.jsx(W_, {
      scope: e.__scopeSlider,
      name: n,
      disabled: a,
      min: r,
      max: o,
      valueIndexToChangeRef: S,
      thumbs: v.current,
      values: g,
      orientation: s,
      children: w.jsx(td.Provider, {
        scope: e.__scopeSlider,
        children: w.jsx(td.Slot, {
          scope: e.__scopeSlider,
          children: w.jsx(p, {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...m,
            ref: t,
            onPointerDown: Z(m.onPointerDown, () => {
              a || (E.current = g);
            }),
            min: r,
            max: o,
            inverted: y,
            onSlideStart: a ? void 0 : T,
            onSlideMove: a ? void 0 : b,
            onSlideEnd: a ? void 0 : P,
            onHomeKeyDown: () => !a && A(r, 0, { commit: !0 }),
            onEndKeyDown: () => !a && A(o, g.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: k, direction: R }) => {
              if (!a) {
                const F =
                    Rw.includes(k.key) || (k.shiftKey && Mw.includes(k.key))
                      ? 10
                      : 1,
                  L = S.current,
                  O = g[L],
                  I = i * F * R;
                A(O + I, L, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
jw.displayName = Do;
var [Iw, Lw] = _w(Do, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  U_ = x.forwardRef((e, t) => {
    const {
        min: n,
        max: r,
        dir: o,
        inverted: i,
        onSlideStart: s,
        onSlideMove: a,
        onSlideEnd: l,
        onStepKeyDown: c,
        ...d
      } = e,
      [u, f] = x.useState(null),
      y = ae(t, (g) => f(g)),
      m = x.useRef(),
      v = ml(o),
      S = v === "ltr",
      h = (S && !i) || (!S && i);
    function p(g) {
      const C = m.current || u.getBoundingClientRect(),
        E = [0, C.width],
        b = np(E, h ? [n, r] : [r, n]);
      return (m.current = C), b(g - C.left);
    }
    return w.jsx(Iw, {
      scope: e.__scopeSlider,
      startEdge: h ? "left" : "right",
      endEdge: h ? "right" : "left",
      direction: h ? 1 : -1,
      size: "width",
      children: w.jsx(Ow, {
        dir: v,
        "data-orientation": "horizontal",
        ...d,
        ref: y,
        style: {
          ...d.style,
          "--radix-slider-thumb-transform": "translateX(-50%)",
        },
        onSlideStart: (g) => {
          const C = p(g.clientX);
          s == null || s(C);
        },
        onSlideMove: (g) => {
          const C = p(g.clientX);
          a == null || a(C);
        },
        onSlideEnd: () => {
          (m.current = void 0), l == null || l();
        },
        onStepKeyDown: (g) => {
          const E = Dw[h ? "from-left" : "from-right"].includes(g.key);
          c == null || c({ event: g, direction: E ? -1 : 1 });
        },
      }),
    });
  }),
  H_ = x.forwardRef((e, t) => {
    const {
        min: n,
        max: r,
        inverted: o,
        onSlideStart: i,
        onSlideMove: s,
        onSlideEnd: a,
        onStepKeyDown: l,
        ...c
      } = e,
      d = x.useRef(null),
      u = ae(t, d),
      f = x.useRef(),
      y = !o;
    function m(v) {
      const S = f.current || d.current.getBoundingClientRect(),
        h = [0, S.height],
        g = np(h, y ? [r, n] : [n, r]);
      return (f.current = S), g(v - S.top);
    }
    return w.jsx(Iw, {
      scope: e.__scopeSlider,
      startEdge: y ? "bottom" : "top",
      endEdge: y ? "top" : "bottom",
      size: "height",
      direction: y ? 1 : -1,
      children: w.jsx(Ow, {
        "data-orientation": "vertical",
        ...c,
        ref: u,
        style: {
          ...c.style,
          "--radix-slider-thumb-transform": "translateY(50%)",
        },
        onSlideStart: (v) => {
          const S = m(v.clientY);
          i == null || i(S);
        },
        onSlideMove: (v) => {
          const S = m(v.clientY);
          s == null || s(S);
        },
        onSlideEnd: () => {
          (f.current = void 0), a == null || a();
        },
        onStepKeyDown: (v) => {
          const h = Dw[y ? "from-bottom" : "from-top"].includes(v.key);
          l == null || l({ event: v, direction: h ? -1 : 1 });
        },
      }),
    });
  }),
  Ow = x.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        onSlideStart: r,
        onSlideMove: o,
        onSlideEnd: i,
        onHomeKeyDown: s,
        onEndKeyDown: a,
        onStepKeyDown: l,
        ...c
      } = e,
      d = bl(Do, n);
    return w.jsx(re.span, {
      ...c,
      ref: t,
      onKeyDown: Z(e.onKeyDown, (u) => {
        u.key === "Home"
          ? (s(u), u.preventDefault())
          : u.key === "End"
          ? (a(u), u.preventDefault())
          : Rw.concat(Mw).includes(u.key) && (l(u), u.preventDefault());
      }),
      onPointerDown: Z(e.onPointerDown, (u) => {
        const f = u.target;
        f.setPointerCapture(u.pointerId),
          u.preventDefault(),
          d.thumbs.has(f) ? f.focus() : r(u);
      }),
      onPointerMove: Z(e.onPointerMove, (u) => {
        u.target.hasPointerCapture(u.pointerId) && o(u);
      }),
      onPointerUp: Z(e.onPointerUp, (u) => {
        const f = u.target;
        f.hasPointerCapture(u.pointerId) &&
          (f.releasePointerCapture(u.pointerId), i(u));
      }),
    });
  }),
  Fw = "SliderTrack",
  Vw = x.forwardRef((e, t) => {
    const { __scopeSlider: n, ...r } = e,
      o = bl(Fw, n);
    return w.jsx(re.span, {
      "data-disabled": o.disabled ? "" : void 0,
      "data-orientation": o.orientation,
      ...r,
      ref: t,
    });
  });
Vw.displayName = Fw;
var nd = "SliderRange",
  zw = x.forwardRef((e, t) => {
    const { __scopeSlider: n, ...r } = e,
      o = bl(nd, n),
      i = Lw(nd, n),
      s = x.useRef(null),
      a = ae(t, s),
      l = o.values.length,
      c = o.values.map((f) => $w(f, o.min, o.max)),
      d = l > 1 ? Math.min(...c) : 0,
      u = 100 - Math.max(...c);
    return w.jsx(re.span, {
      "data-orientation": o.orientation,
      "data-disabled": o.disabled ? "" : void 0,
      ...r,
      ref: a,
      style: { ...e.style, [i.startEdge]: d + "%", [i.endEdge]: u + "%" },
    });
  });
zw.displayName = nd;
var rd = "SliderThumb",
  Bw = x.forwardRef((e, t) => {
    const n = B_(e.__scopeSlider),
      [r, o] = x.useState(null),
      i = ae(t, (a) => o(a)),
      s = x.useMemo(
        () => (r ? n().findIndex((a) => a.ref.current === r) : -1),
        [n, r]
      );
    return w.jsx(G_, { ...e, ref: i, index: s });
  }),
  G_ = x.forwardRef((e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...i } = e,
      s = bl(rd, n),
      a = Lw(rd, n),
      [l, c] = x.useState(null),
      d = ae(t, (p) => c(p)),
      u = l ? !!l.closest("form") : !0,
      f = jf(l),
      y = s.values[r],
      m = y === void 0 ? 0 : $w(y, s.min, s.max),
      v = X_(r, s.values.length),
      S = f == null ? void 0 : f[a.size],
      h = S ? Z_(S, m, a.direction) : 0;
    return (
      x.useEffect(() => {
        if (l)
          return (
            s.thumbs.add(l),
            () => {
              s.thumbs.delete(l);
            }
          );
      }, [l, s.thumbs]),
      w.jsxs("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${m}% + ${h}px)`,
        },
        children: [
          w.jsx(td.ItemSlot, {
            scope: e.__scopeSlider,
            children: w.jsx(re.span, {
              role: "slider",
              "aria-label": e["aria-label"] || v,
              "aria-valuemin": s.min,
              "aria-valuenow": y,
              "aria-valuemax": s.max,
              "aria-orientation": s.orientation,
              "data-orientation": s.orientation,
              "data-disabled": s.disabled ? "" : void 0,
              tabIndex: s.disabled ? void 0 : 0,
              ...i,
              ref: d,
              style: y === void 0 ? { display: "none" } : e.style,
              onFocus: Z(e.onFocus, () => {
                s.valueIndexToChangeRef.current = r;
              }),
            }),
          }),
          u &&
            w.jsx(
              K_,
              {
                name:
                  o ??
                  (s.name
                    ? s.name + (s.values.length > 1 ? "[]" : "")
                    : void 0),
                value: y,
              },
              r
            ),
        ],
      })
    );
  });
Bw.displayName = rd;
var K_ = (e) => {
  const { value: t, ...n } = e,
    r = x.useRef(null),
    o = If(t);
  return (
    x.useEffect(() => {
      const i = r.current,
        s = window.HTMLInputElement.prototype,
        l = Object.getOwnPropertyDescriptor(s, "value").set;
      if (o !== t && l) {
        const c = new Event("input", { bubbles: !0 });
        l.call(i, t), i.dispatchEvent(c);
      }
    }, [o, t]),
    w.jsx("input", {
      style: { display: "none" },
      ...n,
      ref: r,
      defaultValue: t,
    })
  );
};
function Y_(e = [], t, n) {
  const r = [...e];
  return (r[n] = t), r.sort((o, i) => o - i);
}
function $w(e, t, n) {
  const i = (100 / (n - t)) * (e - t);
  return Ma(i, [0, 100]);
}
function X_(e, t) {
  return t > 2
    ? `Value ${e + 1} of ${t}`
    : t === 2
    ? ["Minimum", "Maximum"][e]
    : void 0;
}
function Q_(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
function Z_(e, t, n) {
  const r = e / 2,
    i = np([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
function q_(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function J_(e, t) {
  if (t > 0) {
    const n = q_(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function np(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ej(e) {
  return (String(e).split(".")[1] || "").length;
}
function tj(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Ww = jw,
  nj = Vw,
  rj = zw,
  oj = Bw;
const rp = x.forwardRef(({ className: e, disabled: t, ...n }, r) =>
  w.jsxs(Ww, {
    ref: r,
    className: H(
      "relative flex w-full touch-none select-none items-center cursor-pointer",
      t ? "opacity-50 pointer-events-none" : "",
      e
    ),
    ...n,
    children: [
      w.jsx(nj, {
        className:
          "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
        children: w.jsx(rj, { className: "absolute h-full bg-primary" }),
      }),
      w.jsx(oj, {
        className:
          "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      }),
    ],
  })
);
rp.displayName = Ww.displayName;
async function ij(e, t, n, r, o = 100) {
  bw(!0);
  let i = 0;
  const s = e.length,
    a = e[0].length;
  let l = [e[r.rowNum][r.nodeNum]],
    c = new Map();
  async function d() {
    return new Promise(async (f) => {
      if (!Eo()) {
        f(De.StopSearch);
        return;
      }
      if (l.length === 0) {
        f(i === 1 ? De.ExploredAlready : De.PathNotFound);
        return;
      }
      const y = l.pop();
      if (!y) {
        f(De.OutOfBoundary);
        return;
      }
      const { rowNum: m, nodeNum: v } = y,
        S = [
          { row: m - 1, node: v },
          { row: m + 1, node: v },
          { row: m, node: v - 1 },
          { row: m, node: v + 1 },
        ];
      for (const p of S) {
        const { row: g, node: C } = p,
          E = e[g][C].isWall,
          T = e[g][C].isExplored;
        if (E || T) continue;
        const b = g > 0 && g < s,
          P = C > 0 && C < a;
        if (b && P) {
          (e[g][C].isExplored = !0),
            l.push(e[g][C]),
            c.set(`${g},${C}`, [y.rowNum, y.nodeNum]);
          const { rowNum: A, nodeNum: k } = n;
          if (g === A && C === k) {
            const { revPath: R, fwdPath: M } = kw(c, r, n);
            await Aw(e, R, t),
              await Nw(e, M, t),
              Eo() || f(De.PathFoundButStopSearch),
              f(De.PathFound);
            return;
          }
        }
      }
      t([...e]);
      const h = setTimeout(() => d().then(f), o);
      Pl(h), (i += 1);
    });
  }
  const u = await d();
  return u === De.StopSearch && Tw(), u;
}
const sj = () => {
    const e = ne((p) => p.grid),
      t = ne((p) => p.isGridMaze),
      n = ne((p) => p.startNode),
      r = ne((p) => p.goalNode),
      o = ne((p) => p.mazeSolveV),
      i = ne((p) => p.searchAlgo),
      s = ne((p) => p.isMazeAlgProgress),
      a = ne((p) => p.isSearchAlgProgress),
      l = ne((p) => p.setGrid),
      c = ne((p) => p.setIsMazeClean),
      d = ne((p) => p.setMazeSolveV),
      u = ne((p) => p.setSearchAlgo),
      f = ne((p) => p.toggleSearcgAlgProgress),
      { infoToast: y, errorToast: m, warnToast: v } = tf();
    async function S() {
      if (!t) {
        y("The grid is empty!", "grid-empty"),
          y("Please generate a maze.", "gen-maze");
        return;
      }
      if (i === oo.NONE) {
        y("Please select a Search Algorithm", "select=search");
        return;
      }
      let p;
      switch (
        (c(!1),
        f(),
        i === oo.BFS
          ? (p = await z_(e, l, r, n, o))
          : i === oo.DFS && (p = await ij(e, l, r, n, o)),
        f(),
        p)
      ) {
        case De.PathNotFound:
          v("No path is found!", "no-path"),
            y(
              "The path is either blocked by walls or explored path!",
              "no-path-info"
            );
          break;
        case De.ExploredAlready:
          v("The path is already found!", "explored-already"),
            y(
              "Please change the start and goal nodes, or generate a new maze.",
              "change-maze"
            );
          break;
        case De.OutOfBoundary:
          m(
            "Error Searching the maze, please create another maze.",
            "out-of-bound"
          );
          break;
        case De.PathFound:
          y("Path found!", "path-found");
          break;
      }
    }
    function h(p) {
      Vt(200 - p[0]), d(200 - p[0]);
    }
    return w.jsx(w.Fragment, {
      children: w.jsxs("div", {
        className: "flex flex-col md:gap-3 lg:gap-5",
        children: [
          w.jsx(Jn, { children: "Search Algorithm" }),
          w.jsx(rp, {
            defaultValue: [200 - 33.5],
            max: 200,
            step: 33.5,
            onValueChange: h,
            disabled: a || s,
          }),
          w.jsx(El, {
            placeHolder: "Search Algorithm",
            selectItems: aj,
            disabled: a || s,
            Fn: u,
            className: "w-full",
          }),
          w.jsx(pt, {
            disabled: a || s,
            variant: "blue",
            onClick: S,
            children: "Search Maze",
          }),
        ],
      }),
    });
  },
  aj = [
    { value: oo.BFS, label: "Breadth-First Search (BFS)" },
    { value: oo.DFS, label: "Deep-First Search (DFS)" },
  ],
  lj = () => {
    const e = ne((c) => c.isGridMaze),
      t = ne((c) => c.isMazeClean),
      n = ne((c) => c.isMazeAlgProgress),
      r = ne((c) => c.isSearchAlgProgress),
      o = ne((c) => c.clearGrid),
      i = ne((c) => c.resetMaze),
      { infoToast: s } = tf();
    function a() {
      if (e)
        if (e && t) {
          s("The maze is clean.", "reset-maze");
          return;
        } else Vt("stopping search"), F_(), Vt("reseting maze"), i();
      else {
        s("There is no maze to reset.", "reset-no-maze");
        return;
      }
    }
    function l() {
      if (!e) {
        s("The grid is already clean.", "clean-grid");
        return;
      }
      o();
    }
    return w.jsxs("div", {
      className: "flex flex-col  md:gap-3 lg:gap-5",
      children: [
        w.jsx(Jn, { children: "Grid and Maze Controls" }),
        w.jsx(pt, {
          disabled: n,
          variant: "destructive",
          onClick: a,
          children: "Reset Maze",
        }),
        w.jsx(pt, {
          disabled: n || r,
          variant: "destructive",
          onClick: l,
          children: "Clear Grid",
        }),
      ],
    });
  },
  cj = () =>
    w.jsx(w.Fragment, {
      children: w.jsxs("section", {
        className: "flex flex-col gap-4",
        children: [w.jsx(z2, {}), w.jsx(L_, {}), w.jsx(sj, {}), w.jsx(lj, {})],
      }),
    });
function uj(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const { useRef: dj } = J;
function fj(e) {
  const t = dj();
  return (n) => {
    const r = e(n);
    return uj(t.current, r) ? t.current : (t.current = r);
  };
}
const pj = ({
    className: e,
    padding: t,
    children: n,
    borderSize: r = 1,
    borderRadius: o = 20,
    neonColors: i = { secondColor: "black", firstColor: "#1E90FF" },
    ...s
  }) => {
    const a = x.useRef(null),
      [l, c] = x.useState({ width: 0, height: 0 });
    return (
      x.useEffect(() => {
        const d = () => {
          if (a.current) {
            const { offsetWidth: u, offsetHeight: f } = a.current;
            c({ width: u, height: f });
          }
        };
        return (
          d(),
          window.addEventListener("resize", d),
          () => {
            window.removeEventListener("resize", d);
          }
        );
      }, []),
      x.useEffect(() => {
        if (a.current) {
          const { offsetWidth: d, offsetHeight: u } = a.current;
          c({ width: d, height: u });
        }
      }, [n]),
      w.jsx("div", {
        ref: a,
        style: {
          "--border-size": `${r}px`,
          "--border-radius": `${o}px`,
          "--neon-first-color": i.firstColor,
          "--neon-second-color": i.secondColor,
          "--card-width": `${l.width}px`,
          "--card-height": `${l.height}px`,
          "--card-content-radius": `${o - r}px`,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${i.firstColor}, ${i.secondColor})`,
          "--pseudo-element-width": `${l.width + r * 2}px`,
          "--pseudo-element-height": `${l.height + r * 2}px`,
          "--after-blur": `${l.width / 3}px`,
        },
        className: H(
          "relative z-10 h-full w-full rounded-[var(--border-radius)]",
          e
        ),
        ...s,
        children: w.jsx("div", {
          className: H(
            "relative h-full min-h-[inherit] w-full rounded-[var(--card-content-radius)] bg-gray-100 p-6",
            "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
            "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
            "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
            "before:animate-backgroundPositionSpin",
            "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
            "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
            "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
            "after:animate-backgroundPositionSpin",
            "dark:bg-neutral-900",
            t
          ),
          children: n,
        }),
      })
    );
  },
  hj = () => {
    const e = ne((p) => p.grid),
      t = ne((p) => p.gridSize),
      n = ne((p) => p.setGrid),
      {
        startNode: r,
        goalNode: o,
        setStartNode: i,
        setGoalNode: s,
      } = ne(
        fj((p) => ({
          startNode: p.startNode,
          goalNode: p.goalNode,
          setStartNode: p.setStartNode,
          setGoalNode: p.setGoalNode,
        }))
      ),
      { errorToast: a } = tf(),
      [l, c] = x.useState(!1),
      [d, u] = x.useState(!1);
    function f(p) {
      c(!1),
        u(!1),
        Cn(p, r)
          ? (c(!0), Vt("start node"))
          : Cn(p, o) && (Vt("goal node"), u(!0)),
        Vt("start", l),
        Vt("goal", d),
        y(p);
    }
    function y(p) {
      if (!(Cn(p, r) || Cn(p, o))) {
        if (p.isWall) {
          a("Sorry, its a wall", "wall");
          return;
        }
        l
          ? (Vt("moving start node"),
            (e[r.rowNum][r.nodeNum].isStart = !1),
            i(p),
            (e[p.rowNum][p.nodeNum].isStart = !0),
            n(e))
          : d &&
            (Vt("moving goal node"),
            (e[o.rowNum][o.nodeNum].isGoal = !1),
            s(p),
            (e[p.rowNum][p.nodeNum].isGoal = !0),
            n(e));
      }
    }
    const [m, v] = x.useState(null);
    function S(p) {
      v(p);
    }
    function h(p) {
      if (!m || Cn(p, r) || Cn(p, o)) return;
      if (p.isWall) {
        a("Sorry, its a wall", "wall");
        return;
      }
      const g = [...e];
      Cn(m, r)
        ? ((g[r.rowNum][r.nodeNum].isStart = !1),
          i(p),
          (g[p.rowNum][p.nodeNum].isStart = !0))
        : Cn(m, o) &&
          ((g[o.rowNum][o.nodeNum].isGoal = !1),
          s(p),
          (g[p.rowNum][p.nodeNum].isGoal = !0)),
        n(g),
        v(null);
    }
    return w.jsx(w.Fragment, {
      children: w.jsx(pj, {
        className: "w-fit",
        padding: "p-0",
        borderRadius: 0,
        children: w.jsx("section", {
          className: "relative w-fit  border-blue-300",
          children:
            e == null
              ? void 0
              : e.map((p, g) =>
                  w.jsx(
                    "div",
                    {
                      className: "flex",
                      children:
                        p == null
                          ? void 0
                          : p.map((C) =>
                              w.jsx(
                                "div",
                                {
                                  onClick: () => f(C),
                                  draggable: C.isStart || C.isGoal,
                                  onDragStart: () => S(C),
                                  onDragOver: (E) => E.preventDefault(),
                                  onDrop: () => h(C),
                                  className: H(
                                    `${
                                      t === "sm" &&
                                      "sm:size-[1.5rem] md:size-[1.4rem] lg:size-[1.81rem]"
                                    }`,
                                    `${
                                      t === "md" &&
                                      "md:size-[1.01rem] lg:size-[1.31rem]"
                                    }`,
                                    `${
                                      t === "lg" &&
                                      "md:size-[0.751rem] lg:size-[0.971rem]"
                                    }`,
                                    "border-blue-800/70 border hover:bg-blue-200 hover:cursor-pointer ",
                                    `${
                                      C.isPath && C.isExplored
                                        ? "bg-blue-400"
                                        : "bg-blue-800/55"
                                    }`,
                                    `${
                                      C.isWall &&
                                      "bg-yellow-500 transition-colors duration-500 ease-linear"
                                    }`,
                                    `${
                                      C.nodeNum === 0 &&
                                      C.isWall &&
                                      "bg-red-600"
                                    }`,
                                    `${
                                      C.nodeNum === e[0].length - 1 &&
                                      C.isWall &&
                                      "bg-red-600"
                                    }`,
                                    `${
                                      C.rowNum === 0 && C.isWall && "bg-red-600"
                                    }`,
                                    `${
                                      C.rowNum === e.length - 1 &&
                                      C.isWall &&
                                      "bg-red-600"
                                    }`,
                                    `${
                                      C.isStart &&
                                      "bg-orange-950 transition-colors duration-500 ease-linear"
                                    }`,
                                    `${
                                      C.isGoal &&
                                      "bg-emerald-500 transition-colors duration-1000 ease-linear"
                                    }`,
                                    `${
                                      C.isRevPath &&
                                      !C.isGoal &&
                                      !C.isStart &&
                                      "bg-purple-500 transition-colors duration-500 ease-out"
                                    }`,
                                    `${
                                      C.isFwdPath &&
                                      !C.isGoal &&
                                      !C.isStart &&
                                      "bg-green-100 transition-colors duration-500 ease-linear"
                                    }`
                                  ),
                                  children:
                                    C.isWall &&
                                    w.jsx(IP, {
                                      color: "grey",
                                      className: "size-full",
                                    }),
                                },
                                C.rowNum + "-" + C.nodeNum
                              )
                            ),
                    },
                    g
                  )
                ),
        }),
      }),
    });
  };
function Cn(e, t) {
  return e.rowNum === t.rowNum && e.nodeNum === t.nodeNum;
}
function mj({
  borderRadius: e = 8,
  borderWidth: t = 1,
  duration: n = 14,
  color: r = "#000000",
  className: o,
  children: i,
}) {
  return w.jsxs("div", {
    style: { "--border-radius": `${e}px` },
    className: H(
      "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] ",
      o
    ),
    children: [
      w.jsx("div", {
        style: {
          "--border-width": `${t}px`,
          "--border-radius": `${e}px`,
          "--shine-pulse-duration": `${n}s`,
          "--mask-linear-gradient":
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            r instanceof Array ? r.join(",") : r
          },transparent,transparent)`,
        },
        className:
          'before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]',
      }),
      i,
    ],
  });
}
const gj = ({ children: e, className: t, colors: n, borderRadius: r = 8 }) =>
    w.jsx(mj, {
      className: H(t),
      borderRadius: r,
      color: n || [
        "#191970",
        "#4169E1",
        "#708090",
        "#4682B4",
        "#5F9EA0",
        "#87CEEB",
      ],
      children: w.jsx("div", { className: "absolute w-full", children: e }),
    }),
  vj = () =>
    w.jsx(w.Fragment, {
      children: w.jsx(gj, {
        className:
          "overflow-hidden h-[calc(100vh-10.11rem)] w-full flex justify-around items-center rounded-lg border bg-background shadow-xl",
        children: w.jsxs("section", {
          className: "flex flex-col md:flex-row justify-evenly items-center",
          children: [
            w.jsx("div", {
              className: "w-[40%] flex justify-center",
              children: w.jsx(hj, {}),
            }),
            w.jsx("nav", {
              className:
                "hidden md:block md:overflow-auto md:h-full md:max-h-[calc(85vh-40px)] min-w-80",
              children: w.jsx(cj, {}),
            }),
          ],
        }),
      }),
    }),
  Uw = x.forwardRef(({ className: e, ...t }, n) =>
    w.jsx("div", {
      ref: n,
      className: H(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
Uw.displayName = "Card";
const yj = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", {
    ref: n,
    className: H("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
yj.displayName = "CardHeader";
const xj = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("h3", {
    ref: n,
    className: H("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
xj.displayName = "CardTitle";
const wj = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("p", { ref: n, className: H("text-sm text-muted-foreground", e), ...t })
);
wj.displayName = "CardDescription";
const Hw = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", { ref: n, className: H("p-6 pt-0", e), ...t })
);
Hw.displayName = "CardContent";
const Sj = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("div", { ref: n, className: H("flex items-center p-6 pt-0", e), ...t })
);
Sj.displayName = "CardFooter";
const Tl = ({ children: e }) =>
    w.jsx(w.Fragment, {
      children: w.jsx(Uw, {
        className:
          "w-full shadow-lg rounded-lg overflow-hidden h-[27rem] flex justify-center items-center border border-blue-300",
        children: w.jsx(Hw, {
          className: "flex flex-col items-center justify-center p-6",
          children: e,
        }),
      }),
    }),
  Cj = () =>
    w.jsx(w.Fragment, {
      children: w.jsxs(Tl, {
        children: [
          w.jsx("p", {
            className:
              "text-3xl font-semibold text-blue-300 mb-4 subpixel-antialiased",
            children: "Clearing and Reseting Maze",
          }),
          w.jsxs("div", {
            className: "flex items-center text-left",
            children: [
              w.jsx(Ej, {}),
              w.jsxs("div", {
                className: "mt-14 md:text-sm lg:text-lg ",
                children: [
                  w.jsxs("p", {
                    className: "text-lg text-gray-200",
                    children: [
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: '"Reset Maze"',
                      }),
                      " is used to clear the maze if there are any paths or explored nodes.",
                    ],
                  }),
                  w.jsxs("p", {
                    className: "text-lg text-gray-200 mt-5",
                    children: [
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: '"Clear Grid"',
                      }),
                      " clears the maze and removes it completely.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Ej = () =>
    w.jsxs("div", {
      className: "flex flex-col md:gap-3 lg:gap-5 md:min-w-72 xl:min-w-96 p-4",
      children: [
        w.jsx(Jn, {
          className: "text-center",
          children: "Grid and Maze Controls",
        }),
        w.jsx(pt, { variant: "destructive", children: "Reset Maze" }),
        w.jsx(pt, { variant: "destructive", children: "Clear Grid" }),
      ],
    }),
  Pj = () =>
    w.jsx(w.Fragment, {
      children: w.jsxs(Tl, {
        children: [
          w.jsx("p", {
            className: "text-3xl font-semibold text-blue-300 mb-4",
            children: "Changing Grid Dimension",
          }),
          w.jsx(bj, {}),
          w.jsxs("p", {
            className: "text-xl text-gray-200 text-center mt-5",
            children: [
              "There are ",
              w.jsx("span", {
                className: "text-blue-400",
                children: "three grid sizes ",
              }),
              " ",
              "available. Select one by",
              " ",
              w.jsx("span", {
                className: "text-blue-400",
                children: " clicking a radio button",
              }),
              " 🎯 to dynamically",
              w.jsxs("span", {
                className: "text-blue-400",
                children: [" ", "adjust the grid or maze size 🧩"],
              }),
              " ",
              "and explore different",
              " ",
              w.jsx("span", {
                className: "text-blue-400",
                children: "dimensions and maze complexities 🌐",
              }),
              ".",
            ],
          }),
        ],
      }),
    }),
  bj = () =>
    w.jsxs("div", {
      className: "flex flex-col md:gap-3 lg:gap-5 md:min-w-72 xl:min-w-96 p-4",
      children: [
        w.jsx(Jn, { className: "text-center", children: "Grid Dimension" }),
        w.jsx(o1, { initialVal: "sm", options: Tj, setFn: () => {} }),
      ],
    }),
  Tj = [
    { value: "sm", label: "SMALL", id: "s" },
    { value: "md", label: "MEDIUM", id: "m" },
    { value: "lg", label: "LARGE", id: "l" },
  ],
  kj = () =>
    w.jsxs(Tl, {
      children: [
        w.jsx("p", {
          className:
            "text-3xl font-semibold text-blue-300 mb-4 subpixel-antialiased",
          children: "Maze Generation Algorithm",
        }),
        w.jsxs("div", {
          className: "flex items-center text-left",
          children: [
            w.jsx(Aj, {}),
            w.jsxs("p", {
              className: "text-lg text-gray-200",
              children: [
                "Quickly generate different mazes with this",
                w.jsx("span", {
                  className: "text-blue-400",
                  children: ' "Quick Maze" ',
                }),
                "button.",
              ],
            }),
          ],
        }),
        w.jsxs("p", {
          className: "text-xl text-gray-200 mt-5",
          children: [
            "Select a",
            " ",
            w.jsx("span", {
              className: "text-blue-400",
              children: " maze-generating algorithm ",
            }),
            " and press 'Generate Maze' to",
            w.jsx("span", {
              className: "text-blue-400",
              children: " visualize ",
            }),
            "the maze creation.",
          ],
        }),
      ],
    }),
  Aj = () =>
    w.jsxs("div", {
      className: "flex flex-col md:gap-3 lg:gap-5 max-w-full px-5 py-6",
      children: [
        w.jsx(Jn, { className: "text-center", children: "Maze Algorithm" }),
        w.jsxs("div", {
          className: "flex gap-5",
          children: [
            w.jsx(El, {
              placeHolder: "Maze Algorithm",
              selectItems: Nj,
              Fn: () => {},
              className: "max-w-full",
            }),
            w.jsx(pt, { children: "Quick Maze" }),
          ],
        }),
        w.jsx(pt, { variant: "blue", children: "Generate Maze" }),
      ],
    }),
  Nj = [{ value: "btm", label: "Binary Tree Maze (BTM)" }],
  Rj = () =>
    w.jsx(w.Fragment, {
      children: w.jsxs(Tl, {
        children: [
          w.jsx("p", {
            className:
              "text-3xl font-semibold text-blue-300 mb-4 subpixel-antialiased",
            children: "Choosing a Search Algorithm",
          }),
          w.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              w.jsx(Mj, {}),
              w.jsxs("div", {
                className: "mt-14 md:text-sm lg:text-lg text-left",
                children: [
                  w.jsxs("p", {
                    className: " text-gray-200",
                    children: [
                      "This ",
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: "slider",
                      }),
                      " is to set the",
                      " ",
                      "Search algorithms",
                      " ",
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: "visualization speed",
                      }),
                      " 🚀. Slide it to the right ➡️, to increase the speed, and to the left ⬅️ to slow down 🐢.",
                    ],
                  }),
                  w.jsxs("p", {
                    className: "text-gray-200 mt-4",
                    children: [
                      "Note that you",
                      " ",
                      w.jsx("span", {
                        className: "text-blue-400",
                        children:
                          "cannot change the speed when the visualization starts.",
                      }),
                      " ",
                      "(To change the speed when the visualization is on, press",
                      " ",
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: "reset",
                      }),
                      " 🔄 and adjust the speed.)",
                    ],
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("p", {
            className: "text-xl text-gray-200 text-center mt-5",
            children: [
              "Select a ",
              w.jsx("span", {
                className: "text-blue-400",
                children: "Search algorithm",
              }),
              " you want to explore 🔍 and press",
              " ",
              w.jsx("span", {
                className: "text-blue-400",
                children: '"Search Maze"',
              }),
              " to start the",
              " ",
              w.jsx("span", {
                className: "text-blue-400",
                children: "visualization",
              }),
              " 🚀.",
            ],
          }),
        ],
      }),
    }),
  Mj = () =>
    w.jsxs("div", {
      className: "flex flex-col md:gap-3 lg:gap-5 md:min-w-72 xl:min-w-96 p-4",
      children: [
        w.jsx(Jn, { className: "text-center", children: "Search Algorithm" }),
        w.jsx(rp, { defaultValue: [200 - 33.5], max: 200, step: 33.5 }),
        w.jsx(El, {
          placeHolder: "Search Algorithm",
          selectItems: Dj,
          Fn: () => {},
          className: "w-full",
        }),
        w.jsx(pt, {
          variant: "blue",
          onClick: () => {},
          children: "Search Maze",
        }),
      ],
    }),
  Dj = [
    { value: "bfs", label: "Breadth-First Search (BFS)" },
    { value: "dfs", label: "Deep-First Search (DFS)" },
  ];
function _j(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Eg(e) {
  return _j(e) || Array.isArray(e);
}
function jj() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function op(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i
    ? !1
    : n.every((s) => {
        const a = e[s],
          l = t[s];
        return typeof a == "function"
          ? `${a}` == `${l}`
          : !Eg(a) || !Eg(l)
          ? a === l
          : op(a, l);
      });
}
function Pg(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function Ij(e, t) {
  if (e.length !== t.length) return !1;
  const n = Pg(e),
    r = Pg(t);
  return n.every((o, i) => {
    const s = r[i];
    return op(o, s);
  });
}
function ip(e) {
  return typeof e == "number";
}
function od(e) {
  return typeof e == "string";
}
function sp(e) {
  return typeof e == "boolean";
}
function bg(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ce(e) {
  return Math.abs(e);
}
function ap(e) {
  return Math.sign(e);
}
function pi(e, t) {
  return Ce(e - t);
}
function Lj(e, t) {
  if (e === 0 || t === 0 || Ce(e) <= Ce(t)) return 0;
  const n = pi(Ce(e), Ce(t));
  return Ce(n / e);
}
function Bi(e) {
  return $i(e).map(Number);
}
function Dt(e) {
  return e[rs(e)];
}
function rs(e) {
  return Math.max(0, e.length - 1);
}
function lp(e, t) {
  return t === rs(e);
}
function Tg(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function $i(e) {
  return Object.keys(e);
}
function Gw(e, t) {
  return [e, t].reduce(
    (n, r) => (
      $i(r).forEach((o) => {
        const i = n[o],
          s = r[o],
          a = bg(i) && bg(s);
        n[o] = a ? Gw(i, s) : s;
      }),
      n
    ),
    {}
  );
}
function id(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Oj(e, t) {
  const n = { start: r, center: o, end: i };
  function r() {
    return 0;
  }
  function o(l) {
    return i(l) / 2;
  }
  function i(l) {
    return t - l;
  }
  function s(l, c) {
    return od(e) ? n[e](l) : e(t, l, c);
  }
  return { measure: s };
}
function Wi() {
  let e = [];
  function t(o, i, s, a = { passive: !0 }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(i, s, a), (l = () => o.removeEventListener(i, s, a));
    else {
      const c = o;
      c.addListener(s), (l = () => c.removeListener(s));
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = { add: t, clear: n };
  return r;
}
function Fj(e, t, n, r) {
  const o = Wi(),
    i = 1e3 / 60;
  let s = null,
    a = 0,
    l = 0;
  function c() {
    o.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function d() {
    y(), o.clear();
  }
  function u(S) {
    if (!l) return;
    s || (s = S);
    const h = S - s;
    for (s = S, a += h; a >= i; ) n(i), (a -= i);
    const p = a / i;
    r(p), l && t.requestAnimationFrame(u);
  }
  function f() {
    l || (l = t.requestAnimationFrame(u));
  }
  function y() {
    t.cancelAnimationFrame(l), (s = null), (a = 0), (l = 0);
  }
  function m() {
    (s = null), (a = 0);
  }
  return {
    init: c,
    destroy: d,
    start: f,
    stop: y,
    update: () => n(i),
    render: r,
  };
}
function Vj(e, t) {
  const n = t === "rtl",
    r = e === "y",
    o = r ? "y" : "x",
    i = r ? "x" : "y",
    s = !r && n ? -1 : 1,
    a = d(),
    l = u();
  function c(m) {
    const { height: v, width: S } = m;
    return r ? v : S;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function u() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(m) {
    return m * s;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: a,
    endEdge: l,
    measureSize: c,
    direction: f,
  };
}
function br(e = 0, t = 0) {
  const n = Ce(e - t);
  function r(c) {
    return c < e;
  }
  function o(c) {
    return c > t;
  }
  function i(c) {
    return r(c) || o(c);
  }
  function s(c) {
    return i(c) ? (r(c) ? e : t) : c;
  }
  function a(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: a,
  };
}
function Kw(e, t, n) {
  const { constrain: r } = br(0, e),
    o = e + 1;
  let i = s(t);
  function s(f) {
    return n ? Ce((o + f) % o) : r(f);
  }
  function a() {
    return i;
  }
  function l(f) {
    return (i = s(f)), u;
  }
  function c(f) {
    return d().set(a() + f);
  }
  function d() {
    return Kw(e, a(), n);
  }
  const u = { get: a, set: l, add: c, clone: d };
  return u;
}
function zj(e, t, n, r, o, i, s, a, l, c, d, u, f, y, m, v, S, h, p) {
  const { cross: g, direction: C } = e,
    E = ["INPUT", "SELECT", "TEXTAREA"],
    T = { passive: !1 },
    b = Wi(),
    P = Wi(),
    A = br(50, 225).constrain(y.measure(20)),
    k = { mouse: 300, touch: 400 },
    R = { mouse: 500, touch: 600 },
    M = m ? 43 : 25;
  let $ = !1,
    F = 0,
    L = 0,
    O = !1,
    I = !1,
    N = !1,
    _ = !1;
  function B(j) {
    if (!p) return;
    function X(xe) {
      (sp(p) || p(j, xe)) && te(xe);
    }
    const le = t;
    b.add(le, "dragstart", (xe) => xe.preventDefault(), T)
      .add(le, "touchmove", () => {}, T)
      .add(le, "touchend", () => {})
      .add(le, "touchstart", X)
      .add(le, "mousedown", X)
      .add(le, "touchcancel", Y)
      .add(le, "contextmenu", Y)
      .add(le, "click", ye, !0);
  }
  function W() {
    b.clear(), P.clear();
  }
  function K() {
    const j = _ ? n : t;
    P.add(j, "touchmove", V, T)
      .add(j, "touchend", Y)
      .add(j, "mousemove", V, T)
      .add(j, "mouseup", Y);
  }
  function ie(j) {
    const X = j.nodeName || "";
    return E.includes(X);
  }
  function oe() {
    return (m ? R : k)[_ ? "mouse" : "touch"];
  }
  function fe(j, X) {
    const le = u.add(ap(j) * -1),
      xe = d.byDistance(j, !m).distance;
    return m || Ce(j) < A
      ? xe
      : S && X
      ? xe * 0.5
      : d.byIndex(le.get(), 0).distance;
  }
  function te(j) {
    const X = id(j, r);
    (_ = X),
      (N = m && X && !j.buttons && $),
      ($ = pi(o.get(), s.get()) >= 2),
      !(X && j.button !== 0) &&
        (ie(j.target) ||
          ((O = !0),
          i.pointerDown(j),
          c.useFriction(0).useDuration(0),
          o.set(s),
          K(),
          (F = i.readPoint(j)),
          (L = i.readPoint(j, g)),
          f.emit("pointerDown")));
  }
  function V(j) {
    if (!id(j, r) && j.touches.length >= 2) return Y(j);
    const le = i.readPoint(j),
      xe = i.readPoint(j, g),
      Fe = pi(le, F),
      Ge = pi(xe, L);
    if (!I && !_ && (!j.cancelable || ((I = Fe > Ge), !I))) return Y(j);
    const vt = i.pointerMove(j);
    Fe > v && (N = !0),
      c.useFriction(0.3).useDuration(0.75),
      a.start(),
      o.add(C(vt)),
      j.preventDefault();
  }
  function Y(j) {
    const le = d.byDistance(0, !1).index !== u.get(),
      xe = i.pointerUp(j) * oe(),
      Fe = fe(C(xe), le),
      Ge = Lj(xe, Fe),
      vt = M - 10 * Ge,
      Je = h + Ge / 50;
    (I = !1),
      (O = !1),
      P.clear(),
      c.useDuration(vt).useFriction(Je),
      l.distance(Fe, !m),
      (_ = !1),
      f.emit("pointerUp");
  }
  function ye(j) {
    N && (j.stopPropagation(), j.preventDefault(), (N = !1));
  }
  function q() {
    return O;
  }
  return { init: B, destroy: W, pointerDown: q };
}
function Bj(e, t) {
  let r, o;
  function i(u) {
    return u.timeStamp;
  }
  function s(u, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (id(u, t) ? u : u.touches[0])[m];
  }
  function a(u) {
    return (r = u), (o = u), s(u);
  }
  function l(u) {
    const f = s(u) - s(o),
      y = i(u) - i(r) > 170;
    return (o = u), y && (r = u), f;
  }
  function c(u) {
    if (!r || !o) return 0;
    const f = s(o) - s(r),
      y = i(u) - i(r),
      m = i(u) - i(o) > 170,
      v = f / y;
    return y && !m && Ce(v) > 0.1 ? v : 0;
  }
  return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: s };
}
function $j() {
  function e(n) {
    const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: s } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + s,
      left: o,
      width: i,
      height: s,
    };
  }
  return { measure: e };
}
function Wj(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function Uj(e, t, n, r, o, i, s) {
  const a = [e].concat(r);
  let l,
    c,
    d = [],
    u = !1;
  function f(S) {
    return o.measureSize(s.measure(S));
  }
  function y(S) {
    if (!i) return;
    (c = f(e)), (d = r.map(f));
    function h(p) {
      for (const g of p) {
        if (u) return;
        const C = g.target === e,
          E = r.indexOf(g.target),
          T = C ? c : d[E],
          b = f(C ? e : r[E]);
        if (Ce(b - T) >= 0.5) {
          S.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (l = new ResizeObserver((p) => {
      (sp(i) || i(S, p)) && h(p);
    })),
      n.requestAnimationFrame(() => {
        a.forEach((p) => l.observe(p));
      });
  }
  function m() {
    (u = !0), l && l.disconnect();
  }
  return { init: y, destroy: m };
}
function Hj(e, t, n, r, o, i) {
  let s = 0,
    a = 0,
    l = o,
    c = i,
    d = e.get(),
    u = 0;
  function f(T) {
    const b = T / 1e3,
      P = l * b,
      A = r.get() - e.get(),
      k = !l;
    let R = 0;
    return (
      k
        ? ((s = 0), n.set(r), e.set(r), (R = A))
        : (n.set(e),
          (s += A / P),
          (s *= c),
          (d += s),
          e.add(s * b),
          (R = d - u)),
      (a = ap(R)),
      (u = d),
      E
    );
  }
  function y() {
    const T = r.get() - t.get();
    return Ce(T) < 0.001;
  }
  function m() {
    return l;
  }
  function v() {
    return a;
  }
  function S() {
    return s;
  }
  function h() {
    return g(o);
  }
  function p() {
    return C(i);
  }
  function g(T) {
    return (l = T), E;
  }
  function C(T) {
    return (c = T), E;
  }
  const E = {
    direction: v,
    duration: m,
    velocity: S,
    seek: f,
    settled: y,
    useBaseFriction: p,
    useBaseDuration: h,
    useFriction: C,
    useDuration: g,
  };
  return E;
}
function Gj(e, t, n, r, o) {
  const i = o.measure(10),
    s = o.measure(50),
    a = br(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(y) {
    if (!c()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max",
      v = Ce(e[m] - t.get()),
      S = n.get() - t.get(),
      h = a.constrain(v / s);
    n.subtract(S * h),
      !y &&
        Ce(S) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function u(y) {
    l = !y;
  }
  return { shouldConstrain: c, constrain: d, toggleActive: u };
}
function Kj(e, t, n, r, o) {
  const i = br(-t + e, 0),
    s = u(),
    a = d(),
    l = f();
  function c(m, v) {
    return pi(m, v) < 1;
  }
  function d() {
    const m = s[0],
      v = Dt(s),
      S = s.lastIndexOf(m),
      h = s.indexOf(v) + 1;
    return br(S, h);
  }
  function u() {
    return n
      .map((m, v) => {
        const { min: S, max: h } = i,
          p = i.constrain(m),
          g = !v,
          C = lp(n, v);
        return g ? h : C || c(S, p) ? S : c(h, p) ? h : p;
      })
      .map((m) => parseFloat(m.toFixed(3)));
  }
  function f() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return s;
    const { min: m, max: v } = a;
    return s.slice(m, v);
  }
  return { snapsContained: l, scrollContainLimit: a };
}
function Yj(e, t, n) {
  const r = t[0],
    o = n ? r - e : Dt(t);
  return { limit: br(o, r) };
}
function Xj(e, t, n, r) {
  const i = t.min + 0.1,
    s = t.max + 0.1,
    { reachedMin: a, reachedMax: l } = br(i, s);
  function c(f) {
    return f === 1 ? l(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function d(f) {
    if (!c(f)) return;
    const y = e * (f * -1);
    r.forEach((m) => m.add(y));
  }
  return { loop: d };
}
function Qj(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const s = i - t;
    return n ? s / -n : 0;
  }
  return { get: r };
}
function Zj(e, t, n, r, o) {
  const { startEdge: i, endEdge: s } = e,
    { groupSlides: a } = o,
    l = u().map(t.measure),
    c = f(),
    d = y();
  function u() {
    return a(r)
      .map((v) => Dt(v)[s] - v[0][i])
      .map(Ce);
  }
  function f() {
    return r.map((v) => n[i] - v[i]).map((v) => -Ce(v));
  }
  function y() {
    return a(c)
      .map((v) => v[0])
      .map((v, S) => v + l[S]);
  }
  return { snaps: c, snapsAligned: d };
}
function qj(e, t, n, r, o, i) {
  const { groupSlides: s } = o,
    { min: a, max: l } = r,
    c = d();
  function d() {
    const f = s(i),
      y = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : y
      ? f
      : f.slice(a, l).map((m, v, S) => {
          const h = !v,
            p = lp(S, v);
          if (h) {
            const g = Dt(S[0]) + 1;
            return Tg(g);
          }
          if (p) {
            const g = rs(i) - Dt(S)[0] + 1;
            return Tg(g, Dt(S)[0]);
          }
          return m;
        });
  }
  return { slideRegistry: c };
}
function Jj(e, t, n, r, o) {
  const { reachedAny: i, removeOffset: s, constrain: a } = r;
  function l(m) {
    return m.concat().sort((v, S) => Ce(v) - Ce(S))[0];
  }
  function c(m) {
    const v = e ? s(m) : a(m),
      S = t
        .map((p, g) => ({ diff: d(p - v, 0), index: g }))
        .sort((p, g) => Ce(p.diff) - Ce(g.diff)),
      { index: h } = S[0];
    return { index: h, distance: v };
  }
  function d(m, v) {
    const S = [m, m + n, m - n];
    if (!e) return m;
    if (!v) return l(S);
    const h = S.filter((p) => ap(p) === v);
    return h.length ? l(h) : Dt(S) - n;
  }
  function u(m, v) {
    const S = t[m] - o.get(),
      h = d(S, v);
    return { index: m, distance: h };
  }
  function f(m, v) {
    const S = o.get() + m,
      { index: h, distance: p } = c(S),
      g = !e && i(S);
    if (!v || g) return { index: h, distance: m };
    const C = t[h] - p,
      E = m + d(C, 0);
    return { index: h, distance: E };
  }
  return { byDistance: f, byIndex: u, shortcut: d };
}
function eI(e, t, n, r, o, i, s) {
  function a(u) {
    const f = u.distance,
      y = u.index !== t.get();
    i.add(f),
      f && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      y && (n.set(t.get()), t.set(u.index), s.emit("select"));
  }
  function l(u, f) {
    const y = o.byDistance(u, f);
    a(y);
  }
  function c(u, f) {
    const y = t.clone().set(u),
      m = o.byIndex(y.get(), f);
    a(m);
  }
  return { distance: l, index: c };
}
function tI(e, t, n, r, o, i, s) {
  let a = 0;
  function l() {
    i.add(document, "keydown", c, !1), t.forEach(d);
  }
  function c(f) {
    f.code === "Tab" && (a = new Date().getTime());
  }
  function d(f) {
    const y = () => {
      if (new Date().getTime() - a > 10) return;
      e.scrollLeft = 0;
      const S = t.indexOf(f),
        h = n.findIndex((p) => p.includes(S));
      ip(h) && (o.useDuration(0), r.index(h, 0), s.emit("slideFocus"));
    };
    i.add(f, "focus", y, { passive: !0, capture: !0 });
  }
  return { init: l };
}
function qo(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = s(l);
  }
  function o(l) {
    t += s(l);
  }
  function i(l) {
    t -= s(l);
  }
  function s(l) {
    return ip(l) ? l : l.get();
  }
  return { get: n, set: r, add: o, subtract: i };
}
function Yw(e, t) {
  const n = e.scroll === "x" ? i : s,
    r = t.style;
  let o = !1;
  function i(u) {
    return `translate3d(${u}px,0px,0px)`;
  }
  function s(u) {
    return `translate3d(0px,${u}px,0px)`;
  }
  function a(u) {
    o || (r.transform = n(e.direction(u)));
  }
  function l(u) {
    o = !u;
  }
  function c() {
    o ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: c, to: a, toggleActive: l };
}
function nI(e, t, n, r, o, i, s, a, l) {
  const d = Bi(o),
    u = Bi(o).reverse(),
    f = h().concat(p());
  function y(b, P) {
    return b.reduce((A, k) => A - o[k], P);
  }
  function m(b, P) {
    return b.reduce((A, k) => (y(A, P) > 0 ? A.concat([k]) : A), []);
  }
  function v(b) {
    return i.map((P, A) => ({
      start: P - r[A] + 0.5 + b,
      end: P + t - 0.5 + b,
    }));
  }
  function S(b, P, A) {
    const k = v(P);
    return b.map((R) => {
      const M = A ? 0 : -n,
        $ = A ? n : 0,
        F = A ? "end" : "start",
        L = k[R][F];
      return {
        index: R,
        loopPoint: L,
        slideLocation: qo(-1),
        translate: Yw(e, l[R]),
        target: () => (a.get() > L ? M : $),
      };
    });
  }
  function h() {
    const b = s[0],
      P = m(u, b);
    return S(P, n, !1);
  }
  function p() {
    const b = t - s[0] - 1,
      P = m(d, b);
    return S(P, -n, !0);
  }
  function g() {
    return f.every(({ index: b }) => {
      const P = d.filter((A) => A !== b);
      return y(P, t) <= 0.1;
    });
  }
  function C() {
    f.forEach((b) => {
      const { target: P, translate: A, slideLocation: k } = b,
        R = P();
      R !== k.get() && (A.to(R), k.set(R));
    });
  }
  function E() {
    f.forEach((b) => b.translate.clear());
  }
  return { canLoop: g, clear: E, loop: C, loopPoints: f };
}
function rI(e, t, n) {
  let r,
    o = !1;
  function i(l) {
    if (!n) return;
    function c(d) {
      for (const u of d)
        if (u.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((d) => {
      o || ((sp(n) || n(l, d)) && c(d));
    })),
      r.observe(e, { childList: !0 });
  }
  function s() {
    r && r.disconnect(), (o = !0);
  }
  return { init: i, destroy: s };
}
function oI(e, t, n, r) {
  const o = {};
  let i = null,
    s = null,
    a,
    l = !1;
  function c() {
    (a = new IntersectionObserver(
      (m) => {
        l ||
          (m.forEach((v) => {
            const S = t.indexOf(v.target);
            o[S] = v;
          }),
          (i = null),
          (s = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((m) => a.observe(m));
  }
  function d() {
    a && a.disconnect(), (l = !0);
  }
  function u(m) {
    return $i(o).reduce((v, S) => {
      const h = parseInt(S),
        { isIntersecting: p } = o[h];
      return ((m && p) || (!m && !p)) && v.push(h), v;
    }, []);
  }
  function f(m = !0) {
    if (m && i) return i;
    if (!m && s) return s;
    const v = u(m);
    return m && (i = v), m || (s = v), v;
  }
  return { init: c, destroy: d, get: f };
}
function iI(e, t, n, r, o, i) {
  const { measureSize: s, startEdge: a, endEdge: l } = e,
    c = n[0] && o,
    d = m(),
    u = v(),
    f = n.map(s),
    y = S();
  function m() {
    if (!c) return 0;
    const p = n[0];
    return Ce(t[a] - p[a]);
  }
  function v() {
    if (!c) return 0;
    const p = i.getComputedStyle(Dt(r));
    return parseFloat(p.getPropertyValue(`margin-${l}`));
  }
  function S() {
    return n
      .map((p, g, C) => {
        const E = !g,
          T = lp(C, g);
        return E ? f[g] + d : T ? f[g] + u : C[g + 1][a] - p[a];
      })
      .map(Ce);
  }
  return { slideSizes: f, slideSizesWithGaps: y, startGap: d, endGap: u };
}
function sI(e, t, n, r, o, i, s, a, l) {
  const { startEdge: c, endEdge: d, direction: u } = e,
    f = ip(n);
  function y(h, p) {
    return Bi(h)
      .filter((g) => g % p === 0)
      .map((g) => h.slice(g, g + p));
  }
  function m(h) {
    return h.length
      ? Bi(h)
          .reduce((p, g, C) => {
            const E = Dt(p) || 0,
              T = E === 0,
              b = g === rs(h),
              P = o[c] - i[E][c],
              A = o[c] - i[g][d],
              k = !r && T ? u(s) : 0,
              R = !r && b ? u(a) : 0,
              M = Ce(A - R - (P + k));
            return C && M > t + l && p.push(g), b && p.push(h.length), p;
          }, [])
          .map((p, g, C) => {
            const E = Math.max(C[g - 1] || 0);
            return h.slice(E, p);
          })
      : [];
  }
  function v(h) {
    return f ? y(h, n) : m(h);
  }
  return { groupSlides: v };
}
function aI(e, t, n, r, o, i, s) {
  const {
      align: a,
      axis: l,
      direction: c,
      startIndex: d,
      loop: u,
      duration: f,
      dragFree: y,
      dragThreshold: m,
      inViewThreshold: v,
      slidesToScroll: S,
      skipSnaps: h,
      containScroll: p,
      watchResize: g,
      watchSlides: C,
      watchDrag: E,
    } = i,
    T = 2,
    b = $j(),
    P = b.measure(t),
    A = n.map(b.measure),
    k = Vj(l, c),
    R = k.measureSize(P),
    M = Wj(R),
    $ = Oj(a, R),
    F = !u && !!p,
    L = u || !!p,
    {
      slideSizes: O,
      slideSizesWithGaps: I,
      startGap: N,
      endGap: _,
    } = iI(k, P, A, n, L, o),
    B = sI(k, R, S, u, P, A, N, _, T),
    { snaps: W, snapsAligned: K } = Zj(k, $, P, A, B),
    ie = -Dt(W) + Dt(I),
    { snapsContained: oe, scrollContainLimit: fe } = Kj(R, ie, K, p, T),
    te = F ? oe : K,
    { limit: V } = Yj(ie, te, u),
    Y = Kw(rs(te), d, u),
    ye = Y.clone(),
    q = Bi(n),
    U = (
      {
        dragHandler: yn,
        scrollBody: Ml,
        scrollBounds: Dl,
        options: { loop: os },
      },
      _l
    ) => {
      os || Dl.constrain(yn.pointerDown()), Ml.seek(_l);
    },
    j = (
      {
        scrollBody: yn,
        translate: Ml,
        location: Dl,
        offsetLocation: os,
        scrollLooper: _l,
        slideLooper: KS,
        dragHandler: YS,
        animation: XS,
        eventHandler: vp,
        scrollBounds: QS,
        options: { loop: yp },
      },
      xp
    ) => {
      const wp = yn.settled(),
        ZS = !QS.shouldConstrain(),
        Sp = yp ? wp : wp && ZS;
      Sp && !YS.pointerDown() && (XS.stop(), vp.emit("settle")),
        Sp || vp.emit("scroll");
      const qS = Dl.get() * xp + Ge.get() * (1 - xp);
      os.set(qS), yp && (_l.loop(yn.direction()), KS.loop()), Ml.to(os.get());
    },
    X = Fj(
      r,
      o,
      (yn) => U(Rl, yn),
      (yn) => j(Rl, yn)
    ),
    le = 0.68,
    xe = te[Y.get()],
    Fe = qo(xe),
    Ge = qo(xe),
    vt = qo(xe),
    Je = qo(xe),
    _o = Hj(Fe, vt, Ge, Je, f, le),
    Al = Jj(u, te, ie, V, Je),
    Nl = eI(X, Y, ye, _o, Al, Je, s),
    hp = Qj(V),
    mp = Wi(),
    HS = oI(t, n, s, v),
    { slideRegistry: gp } = qj(F, p, te, fe, B, q),
    GS = tI(e, n, gp, Nl, _o, mp, s),
    Rl = {
      ownerDocument: r,
      ownerWindow: o,
      eventHandler: s,
      containerRect: P,
      slideRects: A,
      animation: X,
      axis: k,
      dragHandler: zj(
        k,
        e,
        r,
        o,
        Je,
        Bj(k, o),
        Fe,
        X,
        Nl,
        _o,
        Al,
        Y,
        s,
        M,
        y,
        m,
        h,
        le,
        E
      ),
      eventStore: mp,
      percentOfView: M,
      index: Y,
      indexPrevious: ye,
      limit: V,
      location: Fe,
      offsetLocation: vt,
      previousLocation: Ge,
      options: i,
      resizeHandler: Uj(t, s, o, n, k, g, b),
      scrollBody: _o,
      scrollBounds: Gj(V, vt, Je, _o, M),
      scrollLooper: Xj(ie, V, vt, [Fe, vt, Ge, Je]),
      scrollProgress: hp,
      scrollSnapList: te.map(hp.get),
      scrollSnaps: te,
      scrollTarget: Al,
      scrollTo: Nl,
      slideLooper: nI(k, R, ie, O, I, W, te, vt, n),
      slideFocus: GS,
      slidesHandler: rI(t, s, C),
      slidesInView: HS,
      slideIndexes: q,
      slideRegistry: gp,
      slidesToScroll: B,
      target: Je,
      translate: Yw(k, t),
    };
  return Rl;
}
function lI() {
  let e = {},
    t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((d) => d(t, c)), l;
  }
  function i(c, d) {
    return (e[c] = r(c).concat([d])), l;
  }
  function s(c, d) {
    return (e[c] = r(c).filter((u) => u !== d)), l;
  }
  function a() {
    e = {};
  }
  const l = { init: n, emit: o, off: s, on: i, clear: a };
  return l;
}
const cI = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function uI(e) {
  function t(i, s) {
    return Gw(i, s || {});
  }
  function n(i) {
    const s = i.breakpoints || {},
      a = $i(s)
        .filter((l) => e.matchMedia(l).matches)
        .map((l) => s[l])
        .reduce((l, c) => t(l, c), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((s) => $i(s.breakpoints || {}))
      .reduce((s, a) => s.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function dI(e) {
  let t = [];
  function n(i, s) {
    return (
      (t = s.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      s.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function Oa(e, t, n) {
  const r = e.ownerDocument,
    o = r.defaultView,
    i = uI(o),
    s = dI(i),
    a = Wi(),
    l = lI(),
    { mergeOptions: c, optionsAtMedia: d, optionsMediaQueries: u } = i,
    { on: f, off: y, emit: m } = l,
    v = R;
  let S = !1,
    h,
    p = c(cI, Oa.globalOptions),
    g = c(p),
    C = [],
    E,
    T,
    b;
  function P() {
    const { container: U, slides: j } = g;
    T = (od(U) ? e.querySelector(U) : U) || e.children[0];
    const le = od(j) ? T.querySelectorAll(j) : j;
    b = [].slice.call(le || T.children);
  }
  function A(U) {
    const j = aI(e, T, b, r, o, U, l);
    if (U.loop && !j.slideLooper.canLoop()) {
      const X = Object.assign({}, U, { loop: !1 });
      return A(X);
    }
    return j;
  }
  function k(U, j) {
    S ||
      ((p = c(p, U)),
      (g = d(p)),
      (C = j || C),
      P(),
      (h = A(g)),
      u([p, ...C.map(({ options: X }) => X)]).forEach((X) =>
        a.add(X, "change", R)
      ),
      g.active &&
        (h.translate.to(h.location.get()),
        h.animation.init(),
        h.slidesInView.init(),
        h.slideFocus.init(),
        h.eventHandler.init(q),
        h.resizeHandler.init(q),
        h.slidesHandler.init(q),
        h.options.loop && h.slideLooper.loop(),
        T.offsetParent && b.length && h.dragHandler.init(q),
        (E = s.init(q, C))));
  }
  function R(U, j) {
    const X = W();
    M(), k(c({ startIndex: X }, U), j), l.emit("reInit");
  }
  function M() {
    h.dragHandler.destroy(),
      h.eventStore.clear(),
      h.translate.clear(),
      h.slideLooper.clear(),
      h.resizeHandler.destroy(),
      h.slidesHandler.destroy(),
      h.slidesInView.destroy(),
      h.animation.destroy(),
      s.destroy(),
      a.clear();
  }
  function $() {
    S || ((S = !0), a.clear(), M(), l.emit("destroy"), l.clear());
  }
  function F(U, j, X) {
    !g.active ||
      S ||
      (h.scrollBody.useBaseFriction().useDuration(j === !0 ? 0 : g.duration),
      h.scrollTo.index(U, X || 0));
  }
  function L(U) {
    const j = h.index.add(1).get();
    F(j, U, -1);
  }
  function O(U) {
    const j = h.index.add(-1).get();
    F(j, U, 1);
  }
  function I() {
    return h.index.add(1).get() !== W();
  }
  function N() {
    return h.index.add(-1).get() !== W();
  }
  function _() {
    return h.scrollSnapList;
  }
  function B() {
    return h.scrollProgress.get(h.location.get());
  }
  function W() {
    return h.index.get();
  }
  function K() {
    return h.indexPrevious.get();
  }
  function ie() {
    return h.slidesInView.get();
  }
  function oe() {
    return h.slidesInView.get(!1);
  }
  function fe() {
    return E;
  }
  function te() {
    return h;
  }
  function V() {
    return e;
  }
  function Y() {
    return T;
  }
  function ye() {
    return b;
  }
  const q = {
    canScrollNext: I,
    canScrollPrev: N,
    containerNode: Y,
    internalEngine: te,
    destroy: $,
    off: y,
    on: f,
    emit: m,
    plugins: fe,
    previousScrollSnap: K,
    reInit: v,
    rootNode: V,
    scrollNext: L,
    scrollPrev: O,
    scrollProgress: B,
    scrollSnapList: _,
    scrollTo: F,
    selectedScrollSnap: W,
    slideNodes: ye,
    slidesInView: ie,
    slidesNotInView: oe,
  };
  return k(t, n), setTimeout(() => l.emit("init"), 0), q;
}
Oa.globalOptions = void 0;
function cp(e = {}, t = []) {
  const n = x.useRef(e),
    r = x.useRef(t),
    [o, i] = x.useState(),
    [s, a] = x.useState(),
    l = x.useCallback(() => {
      o && o.reInit(n.current, r.current);
    }, [o]);
  return (
    x.useEffect(() => {
      if (jj() && s) {
        Oa.globalOptions = cp.globalOptions;
        const c = Oa(s, n.current, r.current);
        return i(c), () => c.destroy();
      } else i(void 0);
    }, [s, i]),
    x.useEffect(() => {
      op(n.current, e) || ((n.current = e), l());
    }, [e, l]),
    x.useEffect(() => {
      Ij(r.current, t) || ((r.current = t), l());
    }, [t, l]),
    [a, o]
  );
}
cp.globalOptions = void 0;
const Xw = x.createContext(null);
function kl() {
  const e = x.useContext(Xw);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Qw = x.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: r,
      className: o,
      children: i,
      ...s
    },
    a
  ) => {
    const [l, c] = cp({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
      [d, u] = x.useState(!1),
      [f, y] = x.useState(!1),
      m = x.useCallback((p) => {
        p && (u(p.canScrollPrev()), y(p.canScrollNext()));
      }, []),
      v = x.useCallback(() => {
        c == null || c.scrollPrev();
      }, [c]),
      S = x.useCallback(() => {
        c == null || c.scrollNext();
      }, [c]),
      h = x.useCallback(
        (p) => {
          p.key === "ArrowLeft"
            ? (p.preventDefault(), v())
            : p.key === "ArrowRight" && (p.preventDefault(), S());
        },
        [v, S]
      );
    return (
      x.useEffect(() => {
        !c || !n || n(c);
      }, [c, n]),
      x.useEffect(() => {
        if (c)
          return (
            m(c),
            c.on("reInit", m),
            c.on("select", m),
            () => {
              c == null || c.off("select", m);
            }
          );
      }, [c, m]),
      w.jsx(Xw.Provider, {
        value: {
          carouselRef: l,
          api: c,
          opts: t,
          orientation:
            e ||
            ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: S,
          canScrollPrev: d,
          canScrollNext: f,
        },
        children: w.jsx("div", {
          ref: a,
          onKeyDownCapture: h,
          className: H("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          ...s,
          children: i,
        }),
      })
    );
  }
);
Qw.displayName = "Carousel";
const Zw = x.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = kl();
  return w.jsx("div", {
    ref: r,
    className: "overflow-hidden",
    children: w.jsx("div", {
      ref: n,
      className: H("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
Zw.displayName = "CarouselContent";
const qw = x.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = kl();
  return w.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: H(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      e
    ),
    ...t,
  });
});
qw.displayName = "CarouselItem";
const Jw = x.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollPrev: s, canScrollPrev: a } = kl();
    return w.jsxs(pt, {
      ref: o,
      variant: t,
      size: n,
      className: H(
        "absolute  h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !a,
      onClick: s,
      ...r,
      children: [
        w.jsx(MP, { className: "h-4 w-4" }),
        w.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  }
);
Jw.displayName = "CarouselPrevious";
const eS = x.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollNext: s, canScrollNext: a } = kl();
    return w.jsxs(pt, {
      ref: o,
      variant: t,
      size: n,
      className: H(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !a,
      onClick: s,
      ...r,
      children: [
        w.jsx(DP, { className: "h-4 w-4" }),
        w.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  }
);
eS.displayName = "CarouselNext";
function fI() {
  const [e, t] = x.useState(),
    [n, r] = x.useState(0),
    [o, i] = x.useState(0);
  x.useEffect(() => {
    e &&
      (i(e.scrollSnapList().length),
      r(e.selectedScrollSnap() + 1),
      e.on("select", () => {
        r(e.selectedScrollSnap() + 1);
      }));
  }, [e]);
  const s = [w.jsx(Pj, {}), w.jsx(kj, {}), w.jsx(Rj, {}), w.jsx(Cj, {})];
  return w.jsxs("div", {
    className: "flex flex-col items-center ",
    children: [
      w.jsxs(Qw, {
        setApi: t,
        className: "md:max-w-[50%] lg:max-w-[55%] h-[100%]",
        children: [
          w.jsx(Zw, {
            children: s.map((a, l) => w.jsx(qw, { children: a }, l)),
          }),
          w.jsx(Jw, {}),
          w.jsx(eS, {}),
        ],
      }),
      w.jsxs("div", {
        className: "pt-7 text-center text-sm text-muted-foreground",
        children: ["Guide Slide ", n, " of ", o],
      }),
    ],
  });
}
const pI = ({ children: e, className: t, shimmerWidth: n = 90 }) =>
  w.jsx("p", {
    style: { "--shimmer-width": `${n}px` },
    className: H(
      "max-w-md text-neutral-600/70",
      "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
      "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
      t
    ),
    children: e,
  });
var up = "Dialog",
  [tS, nS] = mn(up),
  [hI, Lt] = tS(up),
  rS = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = x.useRef(null),
      l = x.useRef(null),
      [c = !1, d] = So({ prop: r, defaultProp: o, onChange: i });
    return w.jsx(hI, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: gr(),
      titleId: gr(),
      descriptionId: gr(),
      open: c,
      onOpenChange: d,
      onOpenToggle: x.useCallback(() => d((u) => !u), [d]),
      modal: s,
      children: n,
    });
  };
rS.displayName = up;
var oS = "DialogTrigger",
  iS = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(oS, n),
      i = ae(t, o.triggerRef);
    return w.jsx(re.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": pp(o.open),
      ...r,
      ref: i,
      onClick: Z(e.onClick, o.onOpenToggle),
    });
  });
iS.displayName = oS;
var dp = "DialogPortal",
  [mI, sS] = tS(dp, { forceMount: void 0 }),
  aS = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Lt(dp, t);
    return w.jsx(mI, {
      scope: t,
      forceMount: n,
      children: x.Children.map(r, (s) =>
        w.jsx(es, {
          present: n || i.open,
          children: w.jsx(Xf, { asChild: !0, container: o, children: s }),
        })
      ),
    });
  };
aS.displayName = dp;
var Fa = "DialogOverlay",
  lS = x.forwardRef((e, t) => {
    const n = sS(Fa, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Lt(Fa, e.__scopeDialog);
    return i.modal
      ? w.jsx(es, {
          present: r || i.open,
          children: w.jsx(gI, { ...o, ref: t }),
        })
      : null;
  });
lS.displayName = Fa;
var gI = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(Fa, n);
    return w.jsx(Qf, {
      as: Cr,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: w.jsx(re.div, {
        "data-state": pp(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Tr = "DialogContent",
  cS = x.forwardRef((e, t) => {
    const n = sS(Tr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Lt(Tr, e.__scopeDialog);
    return w.jsx(es, {
      present: r || i.open,
      children: i.modal
        ? w.jsx(vI, { ...o, ref: t })
        : w.jsx(yI, { ...o, ref: t }),
    });
  });
cS.displayName = Tr;
var vI = x.forwardRef((e, t) => {
    const n = Lt(Tr, e.__scopeDialog),
      r = x.useRef(null),
      o = ae(t, n.contentRef, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i) return M1(i);
      }, []),
      w.jsx(uS, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: Z(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: Z(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  yI = x.forwardRef((e, t) => {
    const n = Lt(Tr, e.__scopeDialog),
      r = x.useRef(!1),
      o = x.useRef(!1);
    return w.jsx(uS, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, a;
        (s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var l, c;
        (l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  uS = x.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      a = Lt(Tr, n),
      l = x.useRef(null),
      c = ae(t, l);
    return (
      a1(),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx(zf, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: w.jsx(Vf, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": pp(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          w.jsxs(w.Fragment, {
            children: [
              w.jsx(wI, { titleId: a.titleId }),
              w.jsx(CI, { contentRef: l, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  fp = "DialogTitle",
  dS = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(fp, n);
    return w.jsx(re.h2, { id: o.titleId, ...r, ref: t });
  });
dS.displayName = fp;
var fS = "DialogDescription",
  pS = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(fS, n);
    return w.jsx(re.p, { id: o.descriptionId, ...r, ref: t });
  });
pS.displayName = fS;
var hS = "DialogClose",
  mS = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Lt(hS, n);
    return w.jsx(re.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Z(e.onClick, () => o.onOpenChange(!1)),
    });
  });
mS.displayName = hS;
function pp(e) {
  return e ? "open" : "closed";
}
var gS = "DialogTitleWarning",
  [xI, vS] = c2(gS, { contentName: Tr, titleName: fp, docsSlug: "dialog" }),
  wI = ({ titleId: e }) => {
    const t = vS(gS),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      x.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  SI = "DialogDescriptionWarning",
  CI = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      vS(SI).contentName
    }}.`;
    return (
      x.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  EI = rS,
  PI = iS,
  bI = aS,
  TI = lS,
  kI = cS,
  AI = dS,
  NI = pS,
  yS = mS,
  xS = "AlertDialog",
  [RI, aL] = mn(xS, [nS]),
  vn = nS(),
  wS = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = vn(t);
    return w.jsx(EI, { ...r, ...n, modal: !0 });
  };
wS.displayName = xS;
var MI = "AlertDialogTrigger",
  SS = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = vn(n);
    return w.jsx(PI, { ...o, ...r, ref: t });
  });
SS.displayName = MI;
var DI = "AlertDialogPortal",
  CS = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = vn(t);
    return w.jsx(bI, { ...r, ...n });
  };
CS.displayName = DI;
var _I = "AlertDialogOverlay",
  ES = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = vn(n);
    return w.jsx(TI, { ...o, ...r, ref: t });
  });
ES.displayName = _I;
var lo = "AlertDialogContent",
  [jI, II] = RI(lo),
  PS = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e,
      i = vn(n),
      s = x.useRef(null),
      a = ae(t, s),
      l = x.useRef(null);
    return w.jsx(xI, {
      contentName: lo,
      titleName: bS,
      docsSlug: "alert-dialog",
      children: w.jsx(jI, {
        scope: n,
        cancelRef: l,
        children: w.jsxs(kI, {
          role: "alertdialog",
          ...i,
          ...o,
          ref: a,
          onOpenAutoFocus: Z(o.onOpenAutoFocus, (c) => {
            var d;
            c.preventDefault(),
              (d = l.current) == null || d.focus({ preventScroll: !0 });
          }),
          onPointerDownOutside: (c) => c.preventDefault(),
          onInteractOutside: (c) => c.preventDefault(),
          children: [w.jsx(Mx, { children: r }), w.jsx(OI, { contentRef: s })],
        }),
      }),
    });
  });
PS.displayName = lo;
var bS = "AlertDialogTitle",
  TS = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = vn(n);
    return w.jsx(AI, { ...o, ...r, ref: t });
  });
TS.displayName = bS;
var kS = "AlertDialogDescription",
  AS = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = vn(n);
    return w.jsx(NI, { ...o, ...r, ref: t });
  });
AS.displayName = kS;
var LI = "AlertDialogAction",
  NS = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = vn(n);
    return w.jsx(yS, { ...o, ...r, ref: t });
  });
NS.displayName = LI;
var RS = "AlertDialogCancel",
  MS = x.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: o } = II(RS, n),
      i = vn(n),
      s = ae(t, o);
    return w.jsx(yS, { ...i, ...r, ref: s });
  });
MS.displayName = RS;
var OI = ({ contentRef: e }) => {
    const t = `\`${lo}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${lo}\` by passing a \`${kS}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${lo}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      x.useEffect(() => {
        var r;
        document.getElementById(
          (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
        ) || console.warn(t);
      }, [t, e]),
      null
    );
  },
  FI = wS,
  VI = SS,
  zI = CS,
  DS = ES,
  _S = PS,
  jS = NS,
  IS = MS,
  LS = TS,
  OS = AS;
const BI = FI,
  $I = VI,
  WI = zI,
  FS = x.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(DS, {
      className: H(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
FS.displayName = DS.displayName;
const VS = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsxs(WI, {
    children: [
      w.jsx(FS, {}),
      w.jsx(_S, {
        ref: n,
        className: H(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...t,
      }),
    ],
  })
);
VS.displayName = _S.displayName;
const zS = ({ className: e, ...t }) =>
  w.jsx("div", {
    className: H("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
zS.displayName = "AlertDialogHeader";
const BS = ({ className: e, ...t }) =>
  w.jsx("div", {
    className: H(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
BS.displayName = "AlertDialogFooter";
const $S = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(LS, { ref: n, className: H("text-lg font-semibold", e), ...t })
);
$S.displayName = LS.displayName;
const WS = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(OS, { ref: n, className: H("text-sm text-muted-foreground", e), ...t })
);
WS.displayName = OS.displayName;
const UI = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(jS, { ref: n, className: H(Ff(), e), ...t })
);
UI.displayName = jS.displayName;
const US = x.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(IS, {
    ref: n,
    className: H(Ff({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t,
  })
);
US.displayName = IS.displayName;
const HI = ({ label: e, children: t }) => {
  const [n, r] = x.useState(!1);
  return (
    x.useEffect(() => {
      const o = window.matchMedia(`(max-width: ${nb.md})`),
        i = (s) => {
          s.matches && r(!1);
        };
      return (
        o.addEventListener("change", i),
        () => {
          o.removeEventListener("change", i);
        }
      );
    }, []),
    w.jsxs(BI, {
      open: n,
      onOpenChange: r,
      children: [
        w.jsx($I, { children: e }),
        w.jsxs(VS, {
          className:
            "max-w-screen h-[80%] overflow-hidden flex flex-col items-center justify-center",
          children: [
            w.jsx(Ji, { className: "h-screen" }),
            w.jsx($S, { children: "Getting Started Guide" }),
            w.jsx(zS, { children: t }),
            w.jsx(WS, { hidden: !0 }),
            w.jsx(BS, { children: w.jsx(US, { children: "Close Guide" }) }),
          ],
        }),
      ],
    })
  );
};
function GI({ children: e, className: t }) {
  return w.jsxs("div", {
    className: H(
      "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
      t
    ),
    children: [
      w.jsx("div", {
        className:
          "absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#39d1dc]/50 via-[#9c40ff]/50 to-[#508eea]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
      }),
      e,
    ],
  });
}
const KI = ({ className: e, children: t, icon: n }) =>
    w.jsx("div", {
      className: "z-10 flex items-center justify-center",
      children: w.jsxs(GI, {
        children: [
          n,
          " ",
          w.jsx("hr", { className: "mx-2 h-4 w-[1px] shrink-0 bg-blue-300" }),
          " ",
          w.jsx("span", {
            className: H(
              "inline animate-gradient bg-gradient-to-r from-[#40b6ff] via-[#9c40ff] to-[#18c5e3] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
              e
            ),
            children: t,
          }),
        ],
      }),
    }),
  YI = () =>
    w.jsxs("header", {
      className:
        "relative min-h-14 flex justify-between items-center p-4 gap-4",
      children: [
        w.jsx(Ji, {}),
        w.jsx(pI, {
          className: "text-[#87CEFA]/85 cursor-default text-4xl font-medium ",
          children: "Algo-Lab",
        }),
        w.jsx(HI, { label: w.jsx(XI, {}), children: w.jsx(fI, {}) }),
      ],
    }),
  XI = () =>
    w.jsx(KI, {
      icon: w.jsx(FP, { size: 20, color: "#5dcef4", strokeWidth: 1.75 }),
      className:
        "inline animate-gradient bg-gradient-to-r from-[#00aaff]  via-[#265d77] to-[#00aaff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
      children: w.jsx("p", { className: "text-md", children: "Quick Guide" }),
    }),
  QI = () =>
    w.jsx(w.Fragment, {
      children: w.jsxs("section", {
        className: "h-screen xl:overflow-hidden",
        children: [w.jsx(YI, {}), w.jsx(vj, {}), w.jsx(dR, {})],
      }),
    }),
  kg = ({
    children: e,
    word: t,
    className: n,
    variant: r,
    duration: o = 1,
  }) => {
    const s = r || {
      hidden: { filter: "blur(10px)", opacity: 0 },
      visible: { filter: "blur(0px)", opacity: 1 },
    };
    return w.jsx(pl.h1, {
      initial: "hidden",
      animate: "visible",
      transition: { duration: o },
      variants: s,
      className: H(
        n,
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      ),
      children: t || e,
    });
  },
  ZI = () =>
    w.jsxs("main", {
      className:
        "relative flex h-screen w-screen items-center justify-center overflow-hidden p-6 md:p-20 border border-blue-300 shadow-xl",
      children: [
        w.jsx(Ji, {}),
        w.jsxs("div", {
          className: "relative z-10 text-center",
          children: [
            w.jsx(kg, {
              children: w.jsx("p", {
                className:
                  "text-lg md:text-2xl font-semibold mb-4 text-blue-600",
                children: "Sorry, this screen size is not supported.",
              }),
            }),
            w.jsx(kg, {
              children: w.jsx("p", {
                className: "text-md md:text-lg text-blue-400",
                children: "Please rotate your screen or use a larger display.",
              }),
            }),
          ],
        }),
      ],
    });
function qI() {
  const e = sessionStorage.getItem(_h.IS_INTRO_SHOWN),
    t = w.jsxs(w.Fragment, {
      children: [
        w.jsx("div", { className: "hidden md:block", children: w.jsx(QI, {}) }),
        w.jsx("div", { className: "block md:hidden", children: w.jsx(ZI, {}) }),
        w.jsx(tb, {}),
      ],
    });
  return e === null
    ? (sessionStorage.setItem(_h.IS_INTRO_SHOWN, "true"),
      w.jsx(w.Fragment, {
        children: w.jsx(kP, { page1: w.jsx(uR, {}), page2: t }),
      }))
    : t;
}
const JI = { theme: "system", setTheme: () => null },
  eL = x.createContext(JI);
function tL({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = "vite-ui-theme",
  ...r
}) {
  const [o, i] = x.useState(() => localStorage.getItem(n) || t);
  x.useEffect(() => {
    const a = window.document.documentElement;
    if ((a.classList.remove("light", "dark"), o === "system")) {
      const l = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      a.classList.add(l);
      return;
    }
    a.classList.add(o);
  }, [o]);
  const s = {
    theme: o,
    setTheme: (a) => {
      localStorage.setItem(n, a), i(a);
    },
  };
  return w.jsx(eL.Provider, { ...r, value: s, children: e });
}
Mc.createRoot(document.getElementById("root")).render(
  w.jsx(tL, {
    defaultTheme: "dark",
    storageKey: "vite-ui-theme",
    children: w.jsx(qI, {}),
  })
);
