function Dh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ws = { exports: {} }, gl = {};
var jp;
function n_() {
  if (jp) return gl;
  jp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(o, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return gl.Fragment = i, gl.jsx = r, gl.jsxs = r, gl;
}
var Np;
function a_() {
  return Np || (Np = 1, Ws.exports = n_()), Ws.exports;
}
var g = a_(), Ps = { exports: {} }, _l = {}, Fs = { exports: {} }, Is = {};
var Dp;
function i_() {
  return Dp || (Dp = 1, (function(n) {
    function i(A, q) {
      var F = A.length;
      A.push(q);
      e: for (; 0 < F; ) {
        var pe = F - 1 >>> 1, re = A[pe];
        if (0 < s(re, q))
          A[pe] = q, A[F] = re, F = pe;
        else break e;
      }
    }
    function r(A) {
      return A.length === 0 ? null : A[0];
    }
    function o(A) {
      if (A.length === 0) return null;
      var q = A[0], F = A.pop();
      if (F !== q) {
        A[0] = F;
        e: for (var pe = 0, re = A.length, w = re >>> 1; pe < w; ) {
          var N = 2 * (pe + 1) - 1, K = A[N], I = N + 1, de = A[I];
          if (0 > s(K, F))
            I < re && 0 > s(de, K) ? (A[pe] = de, A[I] = F, pe = I) : (A[pe] = K, A[N] = F, pe = N);
          else if (I < re && 0 > s(de, F))
            A[pe] = de, A[I] = F, pe = I;
          else break e;
        }
      }
      return q;
    }
    function s(A, q) {
      var F = A.sortIndex - q.sortIndex;
      return F !== 0 ? F : A.id - q.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      n.unstable_now = function() {
        return d.now() - m;
      };
    }
    var h = [], v = [], _ = 1, b = null, x = 3, E = !1, M = !1, Q = !1, G = !1, H = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function D(A) {
      for (var q = r(v); q !== null; ) {
        if (q.callback === null) o(v);
        else if (q.startTime <= A)
          o(v), q.sortIndex = q.expirationTime, i(h, q);
        else break;
        q = r(v);
      }
    }
    function L(A) {
      if (Q = !1, D(A), !M)
        if (r(h) !== null)
          M = !0, J || (J = !0, se());
        else {
          var q = r(v);
          q !== null && ee(L, q.startTime - A);
        }
    }
    var J = !1, $ = -1, me = 5, ce = -1;
    function _e() {
      return G ? !0 : !(n.unstable_now() - ce < me);
    }
    function ze() {
      if (G = !1, J) {
        var A = n.unstable_now();
        ce = A;
        var q = !0;
        try {
          e: {
            M = !1, Q && (Q = !1, W($), $ = -1), E = !0;
            var F = x;
            try {
              t: {
                for (D(A), b = r(h); b !== null && !(b.expirationTime > A && _e()); ) {
                  var pe = b.callback;
                  if (typeof pe == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var re = pe(
                      b.expirationTime <= A
                    );
                    if (A = n.unstable_now(), typeof re == "function") {
                      b.callback = re, D(A), q = !0;
                      break t;
                    }
                    b === r(h) && o(h), D(A);
                  } else o(h);
                  b = r(h);
                }
                if (b !== null) q = !0;
                else {
                  var w = r(v);
                  w !== null && ee(
                    L,
                    w.startTime - A
                  ), q = !1;
                }
              }
              break e;
            } finally {
              b = null, x = F, E = !1;
            }
            q = void 0;
          }
        } finally {
          q ? se() : J = !1;
        }
      }
    }
    var se;
    if (typeof V == "function")
      se = function() {
        V(ze);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), P = xe.port2;
      xe.port1.onmessage = ze, se = function() {
        P.postMessage(null);
      };
    } else
      se = function() {
        H(ze, 0);
      };
    function ee(A, q) {
      $ = H(function() {
        A(n.unstable_now());
      }, q);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, n.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : me = 0 < A ? Math.floor(1e3 / A) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(A) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = x;
      }
      var F = x;
      x = q;
      try {
        return A();
      } finally {
        x = F;
      }
    }, n.unstable_requestPaint = function() {
      G = !0;
    }, n.unstable_runWithPriority = function(A, q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var F = x;
      x = A;
      try {
        return q();
      } finally {
        x = F;
      }
    }, n.unstable_scheduleCallback = function(A, q, F) {
      var pe = n.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? pe + F : pe) : F = pe, A) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = F + re, A = {
        id: _++,
        callback: q,
        priorityLevel: A,
        startTime: F,
        expirationTime: re,
        sortIndex: -1
      }, F > pe ? (A.sortIndex = F, i(v, A), r(h) === null && A === r(v) && (Q ? (W($), $ = -1) : Q = !0, ee(L, F - pe))) : (A.sortIndex = re, i(h, A), M || E || (M = !0, J || (J = !0, se()))), A;
    }, n.unstable_shouldYield = _e, n.unstable_wrapCallback = function(A) {
      var q = x;
      return function() {
        var F = x;
        x = q;
        try {
          return A.apply(this, arguments);
        } finally {
          x = F;
        }
      };
    };
  })(Is)), Is;
}
var Zp;
function l_() {
  return Zp || (Zp = 1, Fs.exports = i_()), Fs.exports;
}
var ec = { exports: {} }, he = {};
var Rp;
function r_() {
  if (Rp) return he;
  Rp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function E(w) {
    return w === null || typeof w != "object" ? null : (w = x && w[x] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var M = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, G = {};
  function H(w, N, K) {
    this.props = w, this.context = N, this.refs = G, this.updater = K || M;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(w, N) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, N, "setState");
  }, H.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function W() {
  }
  W.prototype = H.prototype;
  function V(w, N, K) {
    this.props = w, this.context = N, this.refs = G, this.updater = K || M;
  }
  var D = V.prototype = new W();
  D.constructor = V, Q(D, H.prototype), D.isPureReactComponent = !0;
  var L = Array.isArray;
  function J() {
  }
  var $ = { H: null, A: null, T: null, S: null }, me = Object.prototype.hasOwnProperty;
  function ce(w, N, K) {
    var I = K.ref;
    return {
      $$typeof: n,
      type: w,
      key: N,
      ref: I !== void 0 ? I : null,
      props: K
    };
  }
  function _e(w, N) {
    return ce(w.type, N, w.props);
  }
  function ze(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function se(w) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(K) {
      return N[K];
    });
  }
  var xe = /\/+/g;
  function P(w, N) {
    return typeof w == "object" && w !== null && w.key != null ? se("" + w.key) : N.toString(36);
  }
  function ee(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(J, J) : (w.status = "pending", w.then(
          function(N) {
            w.status === "pending" && (w.status = "fulfilled", w.value = N);
          },
          function(N) {
            w.status === "pending" && (w.status = "rejected", w.reason = N);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function A(w, N, K, I, de) {
    var ve = typeof w;
    (ve === "undefined" || ve === "boolean") && (w = null);
    var be = !1;
    if (w === null) be = !0;
    else
      switch (ve) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case i:
              be = !0;
              break;
            case _:
              return be = w._init, A(
                be(w._payload),
                N,
                K,
                I,
                de
              );
          }
      }
    if (be)
      return de = de(w), be = I === "" ? "." + P(w, 0) : I, L(de) ? (K = "", be != null && (K = be.replace(xe, "$&/") + "/"), A(de, N, K, "", function(Wt) {
        return Wt;
      })) : de != null && (ze(de) && (de = _e(
        de,
        K + (de.key == null || w && w.key === de.key ? "" : ("" + de.key).replace(
          xe,
          "$&/"
        ) + "/") + be
      )), N.push(de)), 1;
    be = 0;
    var Ge = I === "" ? "." : I + ":";
    if (L(w))
      for (var $e = 0; $e < w.length; $e++)
        I = w[$e], ve = Ge + P(I, $e), be += A(
          I,
          N,
          K,
          ve,
          de
        );
    else if ($e = E(w), typeof $e == "function")
      for (w = $e.call(w), $e = 0; !(I = w.next()).done; )
        I = I.value, ve = Ge + P(I, $e++), be += A(
          I,
          N,
          K,
          ve,
          de
        );
    else if (ve === "object") {
      if (typeof w.then == "function")
        return A(
          ee(w),
          N,
          K,
          I,
          de
        );
      throw N = String(w), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function q(w, N, K) {
    if (w == null) return w;
    var I = [], de = 0;
    return A(w, I, "", "", function(ve) {
      return N.call(K, ve, de++);
    }), I;
  }
  function F(w) {
    if (w._status === -1) {
      var N = w._result;
      N = N(), N.then(
        function(K) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = K);
        },
        function(K) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = K);
        }
      ), w._status === -1 && (w._status = 0, w._result = N);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, re = {
    map: q,
    forEach: function(w, N, K) {
      q(
        w,
        function() {
          N.apply(this, arguments);
        },
        K
      );
    },
    count: function(w) {
      var N = 0;
      return q(w, function() {
        N++;
      }), N;
    },
    toArray: function(w) {
      return q(w, function(N) {
        return N;
      }) || [];
    },
    only: function(w) {
      if (!ze(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return he.Activity = b, he.Children = re, he.Component = H, he.Fragment = r, he.Profiler = s, he.PureComponent = V, he.StrictMode = o, he.Suspense = h, he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, he.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return $.H.useMemoCache(w);
    }
  }, he.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, he.cacheSignal = function() {
    return null;
  }, he.cloneElement = function(w, N, K) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var I = Q({}, w.props), de = w.key;
    if (N != null)
      for (ve in N.key !== void 0 && (de = "" + N.key), N)
        !me.call(N, ve) || ve === "key" || ve === "__self" || ve === "__source" || ve === "ref" && N.ref === void 0 || (I[ve] = N[ve]);
    var ve = arguments.length - 2;
    if (ve === 1) I.children = K;
    else if (1 < ve) {
      for (var be = Array(ve), Ge = 0; Ge < ve; Ge++)
        be[Ge] = arguments[Ge + 2];
      I.children = be;
    }
    return ce(w.type, de, I);
  }, he.createContext = function(w) {
    return w = {
      $$typeof: d,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: f,
      _context: w
    }, w;
  }, he.createElement = function(w, N, K) {
    var I, de = {}, ve = null;
    if (N != null)
      for (I in N.key !== void 0 && (ve = "" + N.key), N)
        me.call(N, I) && I !== "key" && I !== "__self" && I !== "__source" && (de[I] = N[I]);
    var be = arguments.length - 2;
    if (be === 1) de.children = K;
    else if (1 < be) {
      for (var Ge = Array(be), $e = 0; $e < be; $e++)
        Ge[$e] = arguments[$e + 2];
      de.children = Ge;
    }
    if (w && w.defaultProps)
      for (I in be = w.defaultProps, be)
        de[I] === void 0 && (de[I] = be[I]);
    return ce(w, ve, de);
  }, he.createRef = function() {
    return { current: null };
  }, he.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, he.isValidElement = ze, he.lazy = function(w) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: w },
      _init: F
    };
  }, he.memo = function(w, N) {
    return {
      $$typeof: v,
      type: w,
      compare: N === void 0 ? null : N
    };
  }, he.startTransition = function(w) {
    var N = $.T, K = {};
    $.T = K;
    try {
      var I = w(), de = $.S;
      de !== null && de(K, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(J, pe);
    } catch (ve) {
      pe(ve);
    } finally {
      N !== null && K.types !== null && (N.types = K.types), $.T = N;
    }
  }, he.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, he.use = function(w) {
    return $.H.use(w);
  }, he.useActionState = function(w, N, K) {
    return $.H.useActionState(w, N, K);
  }, he.useCallback = function(w, N) {
    return $.H.useCallback(w, N);
  }, he.useContext = function(w) {
    return $.H.useContext(w);
  }, he.useDebugValue = function() {
  }, he.useDeferredValue = function(w, N) {
    return $.H.useDeferredValue(w, N);
  }, he.useEffect = function(w, N) {
    return $.H.useEffect(w, N);
  }, he.useEffectEvent = function(w) {
    return $.H.useEffectEvent(w);
  }, he.useId = function() {
    return $.H.useId();
  }, he.useImperativeHandle = function(w, N, K) {
    return $.H.useImperativeHandle(w, N, K);
  }, he.useInsertionEffect = function(w, N) {
    return $.H.useInsertionEffect(w, N);
  }, he.useLayoutEffect = function(w, N) {
    return $.H.useLayoutEffect(w, N);
  }, he.useMemo = function(w, N) {
    return $.H.useMemo(w, N);
  }, he.useOptimistic = function(w, N) {
    return $.H.useOptimistic(w, N);
  }, he.useReducer = function(w, N, K) {
    return $.H.useReducer(w, N, K);
  }, he.useRef = function(w) {
    return $.H.useRef(w);
  }, he.useState = function(w) {
    return $.H.useState(w);
  }, he.useSyncExternalStore = function(w, N, K) {
    return $.H.useSyncExternalStore(
      w,
      N,
      K
    );
  }, he.useTransition = function() {
    return $.H.useTransition();
  }, he.version = "19.2.8", he;
}
var Up;
function bc() {
  return Up || (Up = 1, ec.exports = r_()), ec.exports;
}
var tc = { exports: {} }, ht = {};
var Yp;
function o_() {
  if (Yp) return ht;
  Yp = 1;
  var n = bc();
  function i(h) {
    var v = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        v += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
    d: {
      f: r,
      r: function() {
        throw Error(i(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function f(h, v, _) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: v,
      implementation: _
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, v) {
    if (h === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ht.createPortal = function(h, v) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(i(299));
    return f(h, v, null, _);
  }, ht.flushSync = function(h) {
    var v = d.T, _ = o.p;
    try {
      if (d.T = null, o.p = 2, h) return h();
    } finally {
      d.T = v, o.p = _, o.d.f();
    }
  }, ht.preconnect = function(h, v) {
    typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(h, v));
  }, ht.prefetchDNS = function(h) {
    typeof h == "string" && o.d.D(h);
  }, ht.preinit = function(h, v) {
    if (typeof h == "string" && v && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin), x = typeof v.integrity == "string" ? v.integrity : void 0, E = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      _ === "style" ? o.d.S(
        h,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: E
        }
      ) : _ === "script" && o.d.X(h, {
        crossOrigin: b,
        integrity: x,
        fetchPriority: E,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, ht.preinitModule = function(h, v) {
    if (typeof h == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var _ = m(
            v.as,
            v.crossOrigin
          );
          o.d.M(h, {
            crossOrigin: _,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(h);
  }, ht.preload = function(h, v) {
    if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin);
      o.d.L(h, _, {
        crossOrigin: b,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, ht.preloadModule = function(h, v) {
    if (typeof h == "string")
      if (v) {
        var _ = m(v.as, v.crossOrigin);
        o.d.m(h, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(h);
  }, ht.requestFormReset = function(h) {
    o.d.r(h);
  }, ht.unstable_batchedUpdates = function(h, v) {
    return h(v);
  }, ht.useFormState = function(h, v, _) {
    return d.H.useFormState(h, v, _);
  }, ht.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ht.version = "19.2.8", ht;
}
var Xp;
function u_() {
  if (Xp) return tc.exports;
  Xp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), tc.exports = o_(), tc.exports;
}
var Hp;
function s_() {
  if (Hp) return _l;
  Hp = 1;
  var n = l_(), i = bc(), r = u_();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (f(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (l = u.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === a) return h(u), e;
          if (c === l) return h(u), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) a = u, l = c;
      else {
        for (var p = !1, y = u.child; y; ) {
          if (y === a) {
            p = !0, a = u, l = c;
            break;
          }
          if (y === l) {
            p = !0, l = u, a = c;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = c.child; y; ) {
            if (y === a) {
              p = !0, a = c, l = u;
              break;
            }
            if (y === l) {
              p = !0, l = c, a = u;
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = _(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), me = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.activity"), _e = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ze = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != "object" ? null : (e = ze && e[ze] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var xe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function P(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case H:
        return "Profiler";
      case G:
        return "StrictMode";
      case L:
        return "Suspense";
      case J:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case W:
          return (e._context.displayName || "Context") + ".Consumer";
        case D:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : P(e.type) || "Memo";
        case me:
          t = e._payload, e = e._init;
          try {
            return P(e(t));
          } catch {
          }
      }
    return null;
  }
  var ee = Array.isArray, A = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], re = -1;
  function w(e) {
    return { current: e };
  }
  function N(e) {
    0 > re || (e.current = pe[re], pe[re] = null, re--);
  }
  function K(e, t) {
    re++, pe[re] = e.current, e.current = t;
  }
  var I = w(null), de = w(null), ve = w(null), be = w(null);
  function Ge(e, t) {
    switch (K(ve, t), K(de, e), K(I, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? tp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = tp(t), e = np(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    N(I), K(I, e);
  }
  function $e() {
    N(I), N(de), N(ve);
  }
  function Wt(e) {
    e.memoizedState !== null && K(be, e);
    var t = I.current, a = np(t, e.type);
    t !== a && (K(de, e), K(I, a));
  }
  function Ut(e) {
    de.current === e && (N(I), N(de)), be.current === e && (N(be), pl._currentValue = F);
  }
  var on, na;
  function St(e) {
    if (on === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        on = t && t[1] || "", na = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + on + e + na;
  }
  var xi = !1;
  function Ti(e, t) {
    if (!e || xi) return "";
    xi = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (j) {
                  var O = j;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (j) {
                  O = j;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                O = j;
              }
              (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
              });
            }
          } catch (j) {
            if (j && O && typeof j.stack == "string")
              return [j.stack, O.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), p = c[0], y = c[1];
      if (p && y) {
        var S = p.split(`
`), C = y.split(`
`);
        for (u = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === S.length || u === C.length)
          for (l = S.length - 1, u = C.length - 1; 1 <= l && 0 <= u && S[l] !== C[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (S[l] !== C[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || S[l] !== C[u]) {
                  var Z = `
` + S[l].replace(" at new ", " at ");
                  return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), Z;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      xi = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? St(a) : "";
  }
  function Hl(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return St(e.type);
      case 16:
        return St("Lazy");
      case 13:
        return e.child !== t && t !== null ? St("Suspense Fallback") : St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return Ti(e.type, !1);
      case 11:
        return Ti(e.type.render, !1);
      case 1:
        return Ti(e.type, !0);
      case 31:
        return St("Activity");
      default:
        return "";
    }
  }
  function Bl(e) {
    try {
      var t = "", a = null;
      do
        t += Hl(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ma = Object.prototype.hasOwnProperty, Oa = n.unstable_scheduleCallback, Ei = n.unstable_cancelCallback, No = n.unstable_shouldYield, aa = n.unstable_requestPaint, vt = n.unstable_now, Do = n.unstable_getCurrentPriorityLevel, ql = n.unstable_ImmediatePriority, $l = n.unstable_UserBlockingPriority, ja = n.unstable_NormalPriority, Zo = n.unstable_LowPriority, ia = n.unstable_IdlePriority, Ro = n.log, Uo = n.unstable_setDisableYieldValue, la = null, X = null;
  function le(e) {
    if (typeof Ro == "function" && Uo(e), X && typeof X.setStrictMode == "function")
      try {
        X.setStrictMode(la, e);
      } catch {
      }
  }
  var te = Math.clz32 ? Math.clz32 : qv, yt = Math.log, Bv = Math.LN2;
  function qv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yt(e) / Bv | 0) | 0;
  }
  var Ll = 256, Vl = 262144, Gl = 4194304;
  function ra(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ql(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return y !== 0 ? (l = y & ~c, l !== 0 ? u = ra(l) : (p &= y, p !== 0 ? u = ra(p) : a || (a = y & ~e, a !== 0 && (u = ra(a))))) : (y = l & ~c, y !== 0 ? u = ra(y) : p !== 0 ? u = ra(p) : a || (a = l & ~e, a !== 0 && (u = ra(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Ai(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $v(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zc() {
    var e = Gl;
    return Gl <<= 1, (Gl & 62914560) === 0 && (Gl = 4194304), e;
  }
  function Yo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ki(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Lv(e, t, a, l, u, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var y = e.entanglements, S = e.expirationTimes, C = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var Z = 31 - te(a), Y = 1 << Z;
      y[Z] = 0, S[Z] = -1;
      var O = C[Z];
      if (O !== null)
        for (C[Z] = null, Z = 0; Z < O.length; Z++) {
          var j = O[Z];
          j !== null && (j.lane &= -536870913);
        }
      a &= ~Y;
    }
    l !== 0 && Rc(e, l, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function Rc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - te(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Uc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - te(a), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), a &= ~u;
    }
  }
  function Yc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Xo(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Xo(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ho(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xc() {
    var e = q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Tp(e.type));
  }
  function Hc(e, t) {
    var a = q.p;
    try {
      return q.p = e, t();
    } finally {
      q.p = a;
    }
  }
  var An = Math.random().toString(36).slice(2), st = "__reactFiber$" + An, wt = "__reactProps$" + An, Na = "__reactContainer$" + An, Bo = "__reactEvents$" + An, Vv = "__reactListeners$" + An, Gv = "__reactHandles$" + An, Bc = "__reactResources$" + An, Ci = "__reactMarker$" + An;
  function qo(e) {
    delete e[st], delete e[wt], delete e[Bo], delete e[Vv], delete e[Gv];
  }
  function Da(e) {
    var t = e[st];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Na] || a[st]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = sp(e); e !== null; ) {
            if (a = e[st]) return a;
            e = sp(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Za(e) {
    if (e = e[st] || e[Na]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Mi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ra(e) {
    var t = e[Bc];
    return t || (t = e[Bc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ot(e) {
    e[Ci] = !0;
  }
  var qc = /* @__PURE__ */ new Set(), $c = {};
  function oa(e, t) {
    Ua(e, t), Ua(e + "Capture", t);
  }
  function Ua(e, t) {
    for ($c[e] = t, e = 0; e < t.length; e++)
      qc.add(t[e]);
  }
  var Qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lc = {}, Vc = {};
  function Kv(e) {
    return Ma.call(Vc, e) ? !0 : Ma.call(Lc, e) ? !1 : Qv.test(e) ? Vc[e] = !0 : (Lc[e] = !0, !1);
  }
  function Kl(e, t, a) {
    if (Kv(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Jl(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function un(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
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
  function Gc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Jv(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, c = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(p) {
          a = "" + p, c.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(p) {
          a = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function $o(e) {
    if (!e._valueTracker) {
      var t = Gc(e) ? "checked" : "value";
      e._valueTracker = Jv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Qc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Gc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Wl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wv = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      Wv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Lo(e, t, a, l, u, c, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Vo(e, p, Yt(t)) : a != null ? Vo(e, p, Yt(a)) : l != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Yt(y) : e.removeAttribute("name");
  }
  function Kc(e, t, a, l, u, c, p, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        $o(e);
        return;
      }
      a = a != null ? "" + Yt(a) : "", t = t != null ? "" + Yt(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = y ? e.checked : !!l, e.defaultChecked = !!l, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), $o(e);
  }
  function Vo(e, t, a) {
    t === "number" && Wl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ya(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        u = t.hasOwnProperty("$" + e[a].value), e[a].selected !== u && (e[a].selected = u), u && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Yt(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jc(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function Wc(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (ee(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), $o(e);
  }
  function Xa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Pv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Pc(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Pv.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Fc(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && a[u] !== l && Pc(e, u, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && Pc(e, c, t[c]);
  }
  function Go(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Fv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Iv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(e) {
    return Iv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function sn() {
  }
  var Qo = null;
  function Ko(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ha = null, Ba = null;
  function Ic(e) {
    var t = Za(e);
    if (t && (e = t.stateNode)) {
      var a = e[wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Lo(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var u = l[wt] || null;
                if (!u) throw Error(o(90));
                Lo(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Qc(l);
          }
          break e;
        case "textarea":
          Jc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ya(e, !!a.multiple, t, !1);
      }
    }
  }
  var Jo = !1;
  function ef(e, t, a) {
    if (Jo) return e(t, a);
    Jo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Jo = !1, (Ha !== null || Ba !== null) && (Yr(), Ha && (t = Ha, e = Ba, Ba = Ha = null, Ic(t), e)))
        for (t = 0; t < e.length; t++) Ic(e[t]);
    }
  }
  function Oi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[wt] || null;
    if (l === null) return null;
    a = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        o(231, t, typeof a)
      );
    return a;
  }
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wo = !1;
  if (cn)
    try {
      var ji = {};
      Object.defineProperty(ji, "passive", {
        get: function() {
          Wo = !0;
        }
      }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
    } catch {
      Wo = !1;
    }
  var kn = null, Po = null, Fl = null;
  function tf() {
    if (Fl) return Fl;
    var e, t = Po, a = t.length, l, u = "value" in kn ? kn.value : kn.textContent, c = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var p = a - e;
    for (l = 1; l <= p && t[a - l] === u[c - l]; l++) ;
    return Fl = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Il(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function er() {
    return !0;
  }
  function nf() {
    return !1;
  }
  function zt(e) {
    function t(a, l, u, c, p) {
      this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? er : nf, this.isPropagationStopped = nf, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = er);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = er);
      },
      persist: function() {
      },
      isPersistent: er
    }), t;
  }
  var ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, tr = zt(ua), Ni = b({}, ua, { view: 0, detail: 0 }), ey = zt(Ni), Fo, Io, Di, nr = b({}, Ni, {
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
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Di && (Di && e.type === "mousemove" ? (Fo = e.screenX - Di.screenX, Io = e.screenY - Di.screenY) : Io = Fo = 0, Di = e), Fo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Io;
    }
  }), af = zt(nr), ty = b({}, nr, { dataTransfer: 0 }), ny = zt(ty), ay = b({}, Ni, { relatedTarget: 0 }), eu = zt(ay), iy = b({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ly = zt(iy), ry = b({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), oy = zt(ry), uy = b({}, ua, { data: 0 }), lf = zt(uy), sy = {
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
    MozPrintableKey: "Unidentified"
  }, cy = {
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
    224: "Meta"
  }, fy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function dy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fy[e]) ? !!t[e] : !1;
  }
  function tu() {
    return dy;
  }
  var my = b({}, Ni, {
    key: function(e) {
      if (e.key) {
        var t = sy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function(e) {
      return e.type === "keypress" ? Il(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), py = zt(my), hy = b({}, nr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), rf = zt(hy), vy = b({}, Ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu
  }), yy = zt(vy), gy = b({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _y = zt(gy), by = b({}, nr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sy = zt(by), wy = b({}, ua, {
    newState: 0,
    oldState: 0
  }), zy = zt(wy), xy = [9, 13, 27, 32], nu = cn && "CompositionEvent" in window, Zi = null;
  cn && "documentMode" in document && (Zi = document.documentMode);
  var Ty = cn && "TextEvent" in window && !Zi, of = cn && (!nu || Zi && 8 < Zi && 11 >= Zi), uf = " ", sf = !1;
  function cf(e, t) {
    switch (e) {
      case "keyup":
        return xy.indexOf(t.keyCode) !== -1;
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
  function ff(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qa = !1;
  function Ey(e, t) {
    switch (e) {
      case "compositionend":
        return ff(t);
      case "keypress":
        return t.which !== 32 ? null : (sf = !0, uf);
      case "textInput":
        return e = t.data, e === uf && sf ? null : e;
      default:
        return null;
    }
  }
  function Ay(e, t) {
    if (qa)
      return e === "compositionend" || !nu && cf(e, t) ? (e = tf(), Fl = Po = kn = null, qa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return of && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ky = {
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
    week: !0
  };
  function df(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ky[e.type] : t === "textarea";
  }
  function mf(e, t, a, l) {
    Ha ? Ba ? Ba.push(l) : Ba = [l] : Ha = l, t = Vr(t, "onChange"), 0 < t.length && (a = new tr(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Ri = null, Ui = null;
  function Cy(e) {
    Jm(e, 0);
  }
  function ar(e) {
    var t = Mi(e);
    if (Qc(t)) return e;
  }
  function pf(e, t) {
    if (e === "change") return t;
  }
  var hf = !1;
  if (cn) {
    var au;
    if (cn) {
      var iu = "oninput" in document;
      if (!iu) {
        var vf = document.createElement("div");
        vf.setAttribute("oninput", "return;"), iu = typeof vf.oninput == "function";
      }
      au = iu;
    } else au = !1;
    hf = au && (!document.documentMode || 9 < document.documentMode);
  }
  function yf() {
    Ri && (Ri.detachEvent("onpropertychange", gf), Ui = Ri = null);
  }
  function gf(e) {
    if (e.propertyName === "value" && ar(Ui)) {
      var t = [];
      mf(
        t,
        Ui,
        e,
        Ko(e)
      ), ef(Cy, t);
    }
  }
  function My(e, t, a) {
    e === "focusin" ? (yf(), Ri = t, Ui = a, Ri.attachEvent("onpropertychange", gf)) : e === "focusout" && yf();
  }
  function Oy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ar(Ui);
  }
  function jy(e, t) {
    if (e === "click") return ar(t);
  }
  function Ny(e, t) {
    if (e === "input" || e === "change")
      return ar(t);
  }
  function Dy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : Dy;
  function Yi(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!Ma.call(t, u) || !Mt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function _f(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bf(e, t) {
    var a = _f(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = _f(a);
    }
  }
  function Sf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function wf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Wl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Wl(e.document);
    }
    return t;
  }
  function lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Zy = cn && "documentMode" in document && 11 >= document.documentMode, $a = null, ru = null, Xi = null, ou = !1;
  function zf(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ou || $a == null || $a !== Wl(l) || (l = $a, "selectionStart" in l && lu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Xi && Yi(Xi, l) || (Xi = l, l = Vr(ru, "onSelect"), 0 < l.length && (t = new tr(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = $a)));
  }
  function sa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var La = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, uu = {}, xf = {};
  cn && (xf = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function ca(e) {
    if (uu[e]) return uu[e];
    if (!La[e]) return e;
    var t = La[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in xf)
        return uu[e] = t[a];
    return e;
  }
  var Tf = ca("animationend"), Ef = ca("animationiteration"), Af = ca("animationstart"), Ry = ca("transitionrun"), Uy = ca("transitionstart"), Yy = ca("transitioncancel"), kf = ca("transitionend"), Cf = /* @__PURE__ */ new Map(), su = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  su.push("scrollEnd");
  function Pt(e, t) {
    Cf.set(e, t), oa(t, [e]);
  }
  var ir = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Ht = [], Va = 0, cu = 0;
  function lr() {
    for (var e = Va, t = cu = Va = 0; t < e; ) {
      var a = Ht[t];
      Ht[t++] = null;
      var l = Ht[t];
      Ht[t++] = null;
      var u = Ht[t];
      Ht[t++] = null;
      var c = Ht[t];
      if (Ht[t++] = null, l !== null && u !== null) {
        var p = l.pending;
        p === null ? u.next = u : (u.next = p.next, p.next = u), l.pending = u;
      }
      c !== 0 && Mf(a, u, c);
    }
  }
  function rr(e, t, a, l) {
    Ht[Va++] = e, Ht[Va++] = t, Ht[Va++] = a, Ht[Va++] = l, cu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function fu(e, t, a, l) {
    return rr(e, t, a, l), or(e);
  }
  function fa(e, t) {
    return rr(e, null, null, t), or(e);
  }
  function Mf(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, c = e.return; c !== null; )
      c.childLanes |= a, l = c.alternate, l !== null && (l.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - te(a), e = c.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = a | 536870912), c) : null;
  }
  function or(e) {
    if (50 < ol)
      throw ol = 0, bs = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ga = {};
  function Xy(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, a, l) {
    return new Xy(e, t, a, l);
  }
  function du(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function fn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Of(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ur(e, t, a, l, u, c) {
    var p = 0;
    if (l = e, typeof e == "function") du(e) && (p = 1);
    else if (typeof e == "string")
      p = Lg(
        e,
        a,
        I.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ce:
          return e = Ot(31, a, t, u), e.elementType = ce, e.lanes = c, e;
        case Q:
          return da(a.children, u, c, t);
        case G:
          p = 8, u |= 24;
          break;
        case H:
          return e = Ot(12, a, t, u | 2), e.elementType = H, e.lanes = c, e;
        case L:
          return e = Ot(13, a, t, u), e.elementType = L, e.lanes = c, e;
        case J:
          return e = Ot(19, a, t, u), e.elementType = J, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                p = 10;
                break e;
              case W:
                p = 9;
                break e;
              case D:
                p = 11;
                break e;
              case $:
                p = 14;
                break e;
              case me:
                p = 16, l = null;
                break e;
            }
          p = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ot(p, a, t, u), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function da(e, t, a, l) {
    return e = Ot(7, e, l, t), e.lanes = a, e;
  }
  function mu(e, t, a) {
    return e = Ot(6, e, null, t), e.lanes = a, e;
  }
  function jf(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function pu(e, t, a) {
    return t = Ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Nf = /* @__PURE__ */ new WeakMap();
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Nf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Bl(t)
      }, Nf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Bl(t)
    };
  }
  var Qa = [], Ka = 0, sr = null, Hi = 0, qt = [], $t = 0, Cn = null, nn = 1, an = "";
  function dn(e, t) {
    Qa[Ka++] = Hi, Qa[Ka++] = sr, sr = e, Hi = t;
  }
  function Df(e, t, a) {
    qt[$t++] = nn, qt[$t++] = an, qt[$t++] = Cn, Cn = e;
    var l = nn;
    e = an;
    var u = 32 - te(l) - 1;
    l &= ~(1 << u), a += 1;
    var c = 32 - te(t) + u;
    if (30 < c) {
      var p = u - u % 5;
      c = (l & (1 << p) - 1).toString(32), l >>= p, u -= p, nn = 1 << 32 - te(t) + u | a << u | l, an = c + e;
    } else
      nn = 1 << c | a << u | l, an = e;
  }
  function hu(e) {
    e.return !== null && (dn(e, 1), Df(e, 1, 0));
  }
  function vu(e) {
    for (; e === sr; )
      sr = Qa[--Ka], Qa[Ka] = null, Hi = Qa[--Ka], Qa[Ka] = null;
    for (; e === Cn; )
      Cn = qt[--$t], qt[$t] = null, an = qt[--$t], qt[$t] = null, nn = qt[--$t], qt[$t] = null;
  }
  function Zf(e, t) {
    qt[$t++] = nn, qt[$t++] = an, qt[$t++] = Cn, nn = t.id, an = t.overflow, Cn = e;
  }
  var ct = null, Le = null, Ae = !1, Mn = null, Lt = !1, yu = Error(o(519));
  function On(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Bi(Bt(t, e)), yu;
  }
  function Rf(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[st] = e, t[wt] = l, a) {
      case "dialog":
        we("cancel", t), we("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        we("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < sl.length; a++)
          we(sl[a], t);
        break;
      case "source":
        we("error", t);
        break;
      case "img":
      case "image":
      case "link":
        we("error", t), we("load", t);
        break;
      case "details":
        we("toggle", t);
        break;
      case "input":
        we("invalid", t), Kc(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        we("invalid", t);
        break;
      case "textarea":
        we("invalid", t), Wc(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Im(t.textContent, a) ? (l.popover != null && (we("beforetoggle", t), we("toggle", t)), l.onScroll != null && we("scroll", t), l.onScrollEnd != null && we("scrollend", t), l.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || On(e, !0);
  }
  function Uf(e) {
    for (ct = e.return; ct; )
      switch (ct.tag) {
        case 5:
        case 31:
        case 13:
          Lt = !1;
          return;
        case 27:
        case 3:
          Lt = !0;
          return;
        default:
          ct = ct.return;
      }
  }
  function Ja(e) {
    if (e !== ct) return !1;
    if (!Ae) return Uf(e), Ae = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Zs(e.type, e.memoizedProps)), a = !a), a && Le && On(e), Uf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Le = up(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Le = up(e);
    } else
      t === 27 ? (t = Le, Vn(e.type) ? (e = Hs, Hs = null, Le = e) : Le = t) : Le = ct ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ma() {
    Le = ct = null, Ae = !1;
  }
  function gu() {
    var e = Mn;
    return e !== null && (At === null ? At = e : At.push.apply(
      At,
      e
    ), Mn = null), e;
  }
  function Bi(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  var _u = w(null), pa = null, mn = null;
  function jn(e, t, a) {
    K(_u, t._currentValue), t._currentValue = a;
  }
  function pn(e) {
    e._currentValue = _u.current, N(_u);
  }
  function bu(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Su(e, t, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var p = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = u;
          for (var S = 0; S < t.length; S++)
            if (y.context === t[S]) {
              c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), bu(
                c.return,
                a,
                e
              ), l || (p = null);
              break e;
            }
          c = y.next;
        }
      } else if (u.tag === 18) {
        if (p = u.return, p === null) throw Error(o(341));
        p.lanes |= a, c = p.alternate, c !== null && (c.lanes |= a), bu(p, a, e), p = null;
      } else p = u.child;
      if (p !== null) p.return = u;
      else
        for (p = u; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (u = p.sibling, u !== null) {
            u.return = p.return, p = u;
            break;
          }
          p = p.return;
        }
      u = p;
    }
  }
  function Wa(e, t, a, l) {
    e = null;
    for (var u = t, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var p = u.alternate;
        if (p === null) throw Error(o(387));
        if (p = p.memoizedProps, p !== null) {
          var y = u.type;
          Mt(u.pendingProps.value, p.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (u === be.current) {
        if (p = u.alternate, p === null) throw Error(o(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(pl) : e = [pl]);
      }
      u = u.return;
    }
    e !== null && Su(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function cr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Mt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ha(e) {
    pa = e, mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return Yf(pa, e);
  }
  function fr(e, t) {
    return pa === null && ha(e), Yf(e, t);
  }
  function Yf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, mn === null) {
      if (e === null) throw Error(o(308));
      mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else mn = mn.next = t;
    return a;
  }
  var Hy = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, By = n.unstable_scheduleCallback, qy = n.unstable_NormalPriority, nt = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wu() {
    return {
      controller: new Hy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qi(e) {
    e.refCount--, e.refCount === 0 && By(qy, function() {
      e.controller.abort();
    });
  }
  var $i = null, zu = 0, Pa = 0, Fa = null;
  function $y(e, t) {
    if ($i === null) {
      var a = $i = [];
      zu = 0, Pa = Es(), Fa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return zu++, t.then(Xf, Xf), t;
  }
  function Xf() {
    if (--zu === 0 && $i !== null) {
      Fa !== null && (Fa.status = "fulfilled");
      var e = $i;
      $i = null, Pa = 0, Fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ly(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), l;
  }
  var Hf = A.S;
  A.S = function(e, t) {
    zm = vt(), typeof t == "object" && t !== null && typeof t.then == "function" && $y(e, t), Hf !== null && Hf(e, t);
  };
  var va = w(null);
  function xu() {
    var e = va.current;
    return e !== null ? e : qe.pooledCache;
  }
  function dr(e, t) {
    t === null ? K(va, va.current) : K(va, t.pool);
  }
  function Bf() {
    var e = xu();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Ia = Error(o(460)), Tu = Error(o(474)), mr = Error(o(542)), pr = { then: function() {
  } };
  function qf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function $f(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(sn, sn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Vf(e), e;
      default:
        if (typeof t.status == "string") t.then(sn, sn);
        else {
          if (e = qe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Vf(e), e;
        }
        throw ga = t, Ia;
    }
  }
  function ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ga = a, Ia) : a;
    }
  }
  var ga = null;
  function Lf() {
    if (ga === null) throw Error(o(459));
    var e = ga;
    return ga = null, e;
  }
  function Vf(e) {
    if (e === Ia || e === mr)
      throw Error(o(483));
  }
  var ei = null, Li = 0;
  function hr(e) {
    var t = Li;
    return Li += 1, ei === null && (ei = []), $f(ei, e, t);
  }
  function Vi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function vr(e, t) {
    throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Gf(e) {
    function t(T, z) {
      if (e) {
        var k = T.deletions;
        k === null ? (T.deletions = [z], T.flags |= 16) : k.push(z);
      }
    }
    function a(T, z) {
      if (!e) return null;
      for (; z !== null; )
        t(T, z), z = z.sibling;
      return null;
    }
    function l(T) {
      for (var z = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? z.set(T.key, T) : z.set(T.index, T), T = T.sibling;
      return z;
    }
    function u(T, z) {
      return T = fn(T, z), T.index = 0, T.sibling = null, T;
    }
    function c(T, z, k) {
      return T.index = k, e ? (k = T.alternate, k !== null ? (k = k.index, k < z ? (T.flags |= 67108866, z) : k) : (T.flags |= 67108866, z)) : (T.flags |= 1048576, z);
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, z, k, R) {
      return z === null || z.tag !== 6 ? (z = mu(k, T.mode, R), z.return = T, z) : (z = u(z, k), z.return = T, z);
    }
    function S(T, z, k, R) {
      var oe = k.type;
      return oe === Q ? Z(
        T,
        z,
        k.props.children,
        R,
        k.key
      ) : z !== null && (z.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === me && ya(oe) === z.type) ? (z = u(z, k.props), Vi(z, k), z.return = T, z) : (z = ur(
        k.type,
        k.key,
        k.props,
        null,
        T.mode,
        R
      ), Vi(z, k), z.return = T, z);
    }
    function C(T, z, k, R) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== k.containerInfo || z.stateNode.implementation !== k.implementation ? (z = pu(k, T.mode, R), z.return = T, z) : (z = u(z, k.children || []), z.return = T, z);
    }
    function Z(T, z, k, R, oe) {
      return z === null || z.tag !== 7 ? (z = da(
        k,
        T.mode,
        R,
        oe
      ), z.return = T, z) : (z = u(z, k), z.return = T, z);
    }
    function Y(T, z, k) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = mu(
          "" + z,
          T.mode,
          k
        ), z.return = T, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            return k = ur(
              z.type,
              z.key,
              z.props,
              null,
              T.mode,
              k
            ), Vi(k, z), k.return = T, k;
          case M:
            return z = pu(
              z,
              T.mode,
              k
            ), z.return = T, z;
          case me:
            return z = ya(z), Y(T, z, k);
        }
        if (ee(z) || se(z))
          return z = da(
            z,
            T.mode,
            k,
            null
          ), z.return = T, z;
        if (typeof z.then == "function")
          return Y(T, hr(z), k);
        if (z.$$typeof === V)
          return Y(
            T,
            fr(T, z),
            k
          );
        vr(T, z);
      }
      return null;
    }
    function O(T, z, k, R) {
      var oe = z !== null ? z.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return oe !== null ? null : y(T, z, "" + k, R);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case E:
            return k.key === oe ? S(T, z, k, R) : null;
          case M:
            return k.key === oe ? C(T, z, k, R) : null;
          case me:
            return k = ya(k), O(T, z, k, R);
        }
        if (ee(k) || se(k))
          return oe !== null ? null : Z(T, z, k, R, null);
        if (typeof k.then == "function")
          return O(
            T,
            z,
            hr(k),
            R
          );
        if (k.$$typeof === V)
          return O(
            T,
            z,
            fr(T, k),
            R
          );
        vr(T, k);
      }
      return null;
    }
    function j(T, z, k, R, oe) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return T = T.get(k) || null, y(z, T, "" + R, oe);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case E:
            return T = T.get(
              R.key === null ? k : R.key
            ) || null, S(z, T, R, oe);
          case M:
            return T = T.get(
              R.key === null ? k : R.key
            ) || null, C(z, T, R, oe);
          case me:
            return R = ya(R), j(
              T,
              z,
              k,
              R,
              oe
            );
        }
        if (ee(R) || se(R))
          return T = T.get(k) || null, Z(z, T, R, oe, null);
        if (typeof R.then == "function")
          return j(
            T,
            z,
            k,
            hr(R),
            oe
          );
        if (R.$$typeof === V)
          return j(
            T,
            z,
            k,
            fr(z, R),
            oe
          );
        vr(z, R);
      }
      return null;
    }
    function ne(T, z, k, R) {
      for (var oe = null, Ce = null, ie = z, ge = z = 0, Ee = null; ie !== null && ge < k.length; ge++) {
        ie.index > ge ? (Ee = ie, ie = null) : Ee = ie.sibling;
        var Me = O(
          T,
          ie,
          k[ge],
          R
        );
        if (Me === null) {
          ie === null && (ie = Ee);
          break;
        }
        e && ie && Me.alternate === null && t(T, ie), z = c(Me, z, ge), Ce === null ? oe = Me : Ce.sibling = Me, Ce = Me, ie = Ee;
      }
      if (ge === k.length)
        return a(T, ie), Ae && dn(T, ge), oe;
      if (ie === null) {
        for (; ge < k.length; ge++)
          ie = Y(T, k[ge], R), ie !== null && (z = c(
            ie,
            z,
            ge
          ), Ce === null ? oe = ie : Ce.sibling = ie, Ce = ie);
        return Ae && dn(T, ge), oe;
      }
      for (ie = l(ie); ge < k.length; ge++)
        Ee = j(
          ie,
          T,
          ge,
          k[ge],
          R
        ), Ee !== null && (e && Ee.alternate !== null && ie.delete(
          Ee.key === null ? ge : Ee.key
        ), z = c(
          Ee,
          z,
          ge
        ), Ce === null ? oe = Ee : Ce.sibling = Ee, Ce = Ee);
      return e && ie.forEach(function(Wn) {
        return t(T, Wn);
      }), Ae && dn(T, ge), oe;
    }
    function fe(T, z, k, R) {
      if (k == null) throw Error(o(151));
      for (var oe = null, Ce = null, ie = z, ge = z = 0, Ee = null, Me = k.next(); ie !== null && !Me.done; ge++, Me = k.next()) {
        ie.index > ge ? (Ee = ie, ie = null) : Ee = ie.sibling;
        var Wn = O(T, ie, Me.value, R);
        if (Wn === null) {
          ie === null && (ie = Ee);
          break;
        }
        e && ie && Wn.alternate === null && t(T, ie), z = c(Wn, z, ge), Ce === null ? oe = Wn : Ce.sibling = Wn, Ce = Wn, ie = Ee;
      }
      if (Me.done)
        return a(T, ie), Ae && dn(T, ge), oe;
      if (ie === null) {
        for (; !Me.done; ge++, Me = k.next())
          Me = Y(T, Me.value, R), Me !== null && (z = c(Me, z, ge), Ce === null ? oe = Me : Ce.sibling = Me, Ce = Me);
        return Ae && dn(T, ge), oe;
      }
      for (ie = l(ie); !Me.done; ge++, Me = k.next())
        Me = j(ie, T, ge, Me.value, R), Me !== null && (e && Me.alternate !== null && ie.delete(Me.key === null ? ge : Me.key), z = c(Me, z, ge), Ce === null ? oe = Me : Ce.sibling = Me, Ce = Me);
      return e && ie.forEach(function(t_) {
        return t(T, t_);
      }), Ae && dn(T, ge), oe;
    }
    function He(T, z, k, R) {
      if (typeof k == "object" && k !== null && k.type === Q && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case E:
            e: {
              for (var oe = k.key; z !== null; ) {
                if (z.key === oe) {
                  if (oe = k.type, oe === Q) {
                    if (z.tag === 7) {
                      a(
                        T,
                        z.sibling
                      ), R = u(
                        z,
                        k.props.children
                      ), R.return = T, T = R;
                      break e;
                    }
                  } else if (z.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === me && ya(oe) === z.type) {
                    a(
                      T,
                      z.sibling
                    ), R = u(z, k.props), Vi(R, k), R.return = T, T = R;
                    break e;
                  }
                  a(T, z);
                  break;
                } else t(T, z);
                z = z.sibling;
              }
              k.type === Q ? (R = da(
                k.props.children,
                T.mode,
                R,
                k.key
              ), R.return = T, T = R) : (R = ur(
                k.type,
                k.key,
                k.props,
                null,
                T.mode,
                R
              ), Vi(R, k), R.return = T, T = R);
            }
            return p(T);
          case M:
            e: {
              for (oe = k.key; z !== null; ) {
                if (z.key === oe)
                  if (z.tag === 4 && z.stateNode.containerInfo === k.containerInfo && z.stateNode.implementation === k.implementation) {
                    a(
                      T,
                      z.sibling
                    ), R = u(z, k.children || []), R.return = T, T = R;
                    break e;
                  } else {
                    a(T, z);
                    break;
                  }
                else t(T, z);
                z = z.sibling;
              }
              R = pu(k, T.mode, R), R.return = T, T = R;
            }
            return p(T);
          case me:
            return k = ya(k), He(
              T,
              z,
              k,
              R
            );
        }
        if (ee(k))
          return ne(
            T,
            z,
            k,
            R
          );
        if (se(k)) {
          if (oe = se(k), typeof oe != "function") throw Error(o(150));
          return k = oe.call(k), fe(
            T,
            z,
            k,
            R
          );
        }
        if (typeof k.then == "function")
          return He(
            T,
            z,
            hr(k),
            R
          );
        if (k.$$typeof === V)
          return He(
            T,
            z,
            fr(T, k),
            R
          );
        vr(T, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, z !== null && z.tag === 6 ? (a(T, z.sibling), R = u(z, k), R.return = T, T = R) : (a(T, z), R = mu(k, T.mode, R), R.return = T, T = R), p(T)) : a(T, z);
    }
    return function(T, z, k, R) {
      try {
        Li = 0;
        var oe = He(
          T,
          z,
          k,
          R
        );
        return ei = null, oe;
      } catch (ie) {
        if (ie === Ia || ie === mr) throw ie;
        var Ce = Ot(29, ie, null, T.mode);
        return Ce.lanes = R, Ce.return = T, Ce;
      }
    };
  }
  var _a = Gf(!0), Qf = Gf(!1), Nn = !1;
  function Eu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Au(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Dn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ne & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = or(e), Mf(e, null, a), t;
    }
    return rr(e, l, t, a), or(e);
  }
  function Gi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Uc(e, a);
    }
  }
  function ku(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var u = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = p : c = c.next = p, a = a.next;
        } while (a !== null);
        c === null ? u = c = t : c = c.next = t;
      } else u = c = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Cu = !1;
  function Qi() {
    if (Cu) {
      var e = Fa;
      if (e !== null) throw e;
    }
  }
  function Ki(e, t, a, l) {
    Cu = !1;
    var u = e.updateQueue;
    Nn = !1;
    var c = u.firstBaseUpdate, p = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var S = y, C = S.next;
      S.next = null, p === null ? c = C : p.next = C, p = S;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, y = Z.lastBaseUpdate, y !== p && (y === null ? Z.firstBaseUpdate = C : y.next = C, Z.lastBaseUpdate = S));
    }
    if (c !== null) {
      var Y = u.baseState;
      p = 0, Z = C = S = null, y = c;
      do {
        var O = y.lane & -536870913, j = O !== y.lane;
        if (j ? (Te & O) === O : (l & O) === O) {
          O !== 0 && O === Pa && (Cu = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var ne = e, fe = y;
            O = t;
            var He = a;
            switch (fe.tag) {
              case 1:
                if (ne = fe.payload, typeof ne == "function") {
                  Y = ne.call(He, Y, O);
                  break e;
                }
                Y = ne;
                break e;
              case 3:
                ne.flags = ne.flags & -65537 | 128;
              case 0:
                if (ne = fe.payload, O = typeof ne == "function" ? ne.call(He, Y, O) : ne, O == null) break e;
                Y = b({}, Y, O);
                break e;
              case 2:
                Nn = !0;
            }
          }
          O = y.callback, O !== null && (e.flags |= 64, j && (e.flags |= 8192), j = u.callbacks, j === null ? u.callbacks = [O] : j.push(O));
        } else
          j = {
            lane: O,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, Z === null ? (C = Z = j, S = Y) : Z = Z.next = j, p |= O;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          j = y, y = j.next, j.next = null, u.lastBaseUpdate = j, u.shared.pending = null;
        }
      } while (!0);
      Z === null && (S = Y), u.baseState = S, u.firstBaseUpdate = C, u.lastBaseUpdate = Z, c === null && (u.shared.lanes = 0), Hn |= p, e.lanes = p, e.memoizedState = Y;
    }
  }
  function Kf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Jf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Kf(a[e], t);
  }
  var ti = w(null), yr = w(0);
  function Wf(e, t) {
    e = zn, K(yr, e), K(ti, t), zn = e | t.baseLanes;
  }
  function Mu() {
    K(yr, zn), K(ti, ti.current);
  }
  function Ou() {
    zn = yr.current, N(ti), N(yr);
  }
  var jt = w(null), Vt = null;
  function Rn(e) {
    var t = e.alternate;
    K(et, et.current & 1), K(jt, e), Vt === null && (t === null || ti.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function ju(e) {
    K(et, et.current), K(jt, e), Vt === null && (Vt = e);
  }
  function Pf(e) {
    e.tag === 22 ? (K(et, et.current), K(jt, e), Vt === null && (Vt = e)) : Un();
  }
  function Un() {
    K(et, et.current), K(jt, jt.current);
  }
  function Nt(e) {
    N(jt), Vt === e && (Vt = null), N(et);
  }
  var et = w(0);
  function gr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Ys(a) || Xs(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var hn = 0, ye = null, Ye = null, at = null, _r = !1, ni = !1, ba = !1, br = 0, Ji = 0, ai = null, Vy = 0;
  function We() {
    throw Error(o(321));
  }
  function Nu(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Mt(e[a], t[a])) return !1;
    return !0;
  }
  function Du(e, t, a, l, u, c) {
    return hn = c, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = e === null || e.memoizedState === null ? Dd : Ju, ba = !1, c = a(l, u), ba = !1, ni && (c = If(
      t,
      a,
      l,
      u
    )), Ff(e), c;
  }
  function Ff(e) {
    A.H = Fi;
    var t = Ye !== null && Ye.next !== null;
    if (hn = 0, at = Ye = ye = null, _r = !1, Ji = 0, ai = null, t) throw Error(o(300));
    e === null || it || (e = e.dependencies, e !== null && cr(e) && (it = !0));
  }
  function If(e, t, a, l) {
    ye = e;
    var u = 0;
    do {
      if (ni && (ai = null), Ji = 0, ni = !1, 25 <= u) throw Error(o(301));
      if (u += 1, at = Ye = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      A.H = Zd, c = t(a, l);
    } while (ni);
    return c;
  }
  function Gy() {
    var e = A.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Wi(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (ye.flags |= 1024), t;
  }
  function Zu() {
    var e = br !== 0;
    return br = 0, e;
  }
  function Ru(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Uu(e) {
    if (_r) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      _r = !1;
    }
    hn = 0, at = Ye = ye = null, ni = !1, Ji = br = 0, ai = null;
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? ye.memoizedState = at = e : at = at.next = e, at;
  }
  function tt() {
    if (Ye === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = at === null ? ye.memoizedState : at.next;
    if (t !== null)
      at = t, Ye = e;
    else {
      if (e === null)
        throw ye.alternate === null ? Error(o(467)) : Error(o(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, at === null ? ye.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function Sr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wi(e) {
    var t = Ji;
    return Ji += 1, ai === null && (ai = []), e = $f(ai, e, t), t = ye, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? Dd : Ju), e;
  }
  function wr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Wi(e);
      if (e.$$typeof === V) return ft(e);
    }
    throw Error(o(438, String(e)));
  }
  function Yu(e) {
    var t = null, a = ye.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = ye.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Sr(), ye.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = _e;
    return t.index++, a;
  }
  function vn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zr(e) {
    var t = tt();
    return Xu(t, Ye, e);
  }
  function Xu(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (u !== null) {
        var p = u.next;
        u.next = c.next, c.next = p;
      }
      t.baseQueue = u = c, l.pending = null;
    }
    if (c = e.baseState, u === null) e.memoizedState = c;
    else {
      t = u.next;
      var y = p = null, S = null, C = t, Z = !1;
      do {
        var Y = C.lane & -536870913;
        if (Y !== C.lane ? (Te & Y) === Y : (hn & Y) === Y) {
          var O = C.revertLane;
          if (O === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Y === Pa && (Z = !0);
          else if ((hn & O) === O) {
            C = C.next, O === Pa && (Z = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (y = S = Y, p = c) : S = S.next = Y, ye.lanes |= O, Hn |= O;
          Y = C.action, ba && a(c, Y), c = C.hasEagerState ? C.eagerState : a(c, Y);
        } else
          O = {
            lane: Y,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (y = S = O, p = c) : S = S.next = O, ye.lanes |= Y, Hn |= Y;
        C = C.next;
      } while (C !== null && C !== t);
      if (S === null ? p = c : S.next = y, !Mt(c, e.memoizedState) && (it = !0, Z && (a = Fa, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = S, l.lastRenderedState = c;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Hu(e) {
    var t = tt(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, u = a.pending, c = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var p = u = u.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== u);
      Mt(c, t.memoizedState) || (it = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, l];
  }
  function ed(e, t, a) {
    var l = ye, u = tt(), c = Ae;
    if (c) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var p = !Mt(
      (Ye || u).memoizedState,
      a
    );
    if (p && (u.memoizedState = a, it = !0), u = u.queue, $u(ad.bind(null, l, u, e), [
      e
    ]), u.getSnapshot !== t || p || at !== null && at.memoizedState.tag & 1) {
      if (l.flags |= 2048, ii(
        9,
        { destroy: void 0 },
        nd.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), qe === null) throw Error(o(349));
      c || (hn & 127) !== 0 || td(l, t, a);
    }
    return a;
  }
  function td(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ye.updateQueue, t === null ? (t = Sr(), ye.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function nd(e, t, a, l) {
    t.value = a, t.getSnapshot = l, id(t) && ld(e);
  }
  function ad(e, t, a) {
    return a(function() {
      id(t) && ld(e);
    });
  }
  function id(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Mt(e, a);
    } catch {
      return !0;
    }
  }
  function ld(e) {
    var t = fa(e, 2);
    t !== null && kt(t, e, 2);
  }
  function Bu(e) {
    var t = gt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        le(!0);
        try {
          a();
        } finally {
          le(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vn,
      lastRenderedState: e
    }, t;
  }
  function rd(e, t, a, l) {
    return e.baseState = a, Xu(
      e,
      Ye,
      typeof l == "function" ? l : vn
    );
  }
  function Qy(e, t, a, l, u) {
    if (Er(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          c.listeners.push(p);
        }
      };
      A.T !== null ? a(!0) : c.isTransition = !1, l(c), a = t.pending, a === null ? (c.next = t.pending = c, od(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function od(e, t) {
    var a = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var c = A.T, p = {};
      A.T = p;
      try {
        var y = a(u, l), S = A.S;
        S !== null && S(p, y), ud(e, t, y);
      } catch (C) {
        qu(e, t, C);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), A.T = c;
      }
    } else
      try {
        c = a(u, l), ud(e, t, c);
      } catch (C) {
        qu(e, t, C);
      }
  }
  function ud(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        sd(e, t, l);
      },
      function(l) {
        return qu(e, t, l);
      }
    ) : sd(e, t, a);
  }
  function sd(e, t, a) {
    t.status = "fulfilled", t.value = a, cd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, od(e, a)));
  }
  function qu(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, cd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function cd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function fd(e, t) {
    return t;
  }
  function dd(e, t) {
    if (Ae) {
      var a = qe.formState;
      if (a !== null) {
        e: {
          var l = ye;
          if (Ae) {
            if (Le) {
              t: {
                for (var u = Le, c = Lt; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break t;
                  }
                  if (u = Gt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                Le = Gt(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            On(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = gt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fd,
      lastRenderedState: t
    }, a.queue = l, a = Od.bind(
      null,
      ye,
      l
    ), l.dispatch = a, l = Bu(!1), c = Ku.bind(
      null,
      ye,
      !1,
      l.queue
    ), l = gt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, a = Qy.bind(
      null,
      ye,
      u,
      c,
      a
    ), u.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function md(e) {
    var t = tt();
    return pd(t, Ye, e);
  }
  function pd(e, t, a) {
    if (t = Xu(
      e,
      t,
      fd
    )[0], e = zr(vn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Wi(t);
      } catch (p) {
        throw p === Ia ? mr : p;
      }
    else l = t;
    t = tt();
    var u = t.queue, c = u.dispatch;
    return a !== t.memoizedState && (ye.flags |= 2048, ii(
      9,
      { destroy: void 0 },
      Ky.bind(null, u, a),
      null
    )), [l, c, e];
  }
  function Ky(e, t) {
    e.action = t;
  }
  function hd(e) {
    var t = tt(), a = Ye;
    if (a !== null)
      return pd(t, a, e);
    tt(), t = t.memoizedState, a = tt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ii(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = ye.updateQueue, t === null && (t = Sr(), ye.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function vd() {
    return tt().memoizedState;
  }
  function xr(e, t, a, l) {
    var u = gt();
    ye.flags |= e, u.memoizedState = ii(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Tr(e, t, a, l) {
    var u = tt();
    l = l === void 0 ? null : l;
    var c = u.memoizedState.inst;
    Ye !== null && l !== null && Nu(l, Ye.memoizedState.deps) ? u.memoizedState = ii(t, c, a, l) : (ye.flags |= e, u.memoizedState = ii(
      1 | t,
      c,
      a,
      l
    ));
  }
  function yd(e, t) {
    xr(8390656, 8, e, t);
  }
  function $u(e, t) {
    Tr(2048, 8, e, t);
  }
  function Jy(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null)
      t = Sr(), ye.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function gd(e) {
    var t = tt().memoizedState;
    return Jy({ ref: t, nextImpl: e }), function() {
      if ((Ne & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function _d(e, t) {
    return Tr(4, 2, e, t);
  }
  function bd(e, t) {
    return Tr(4, 4, e, t);
  }
  function Sd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function wd(e, t, a) {
    a = a != null ? a.concat([e]) : null, Tr(4, 4, Sd.bind(null, t, e), a);
  }
  function Lu() {
  }
  function zd(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Nu(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function xd(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Nu(t, l[1]))
      return l[0];
    if (l = e(), ba) {
      le(!0);
      try {
        e();
      } finally {
        le(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Vu(e, t, a) {
    return a === void 0 || (hn & 1073741824) !== 0 && (Te & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Tm(), ye.lanes |= e, Hn |= e, a);
  }
  function Td(e, t, a, l) {
    return Mt(a, t) ? a : ti.current !== null ? (e = Vu(e, a, l), Mt(e, t) || (it = !0), e) : (hn & 42) === 0 || (hn & 1073741824) !== 0 && (Te & 261930) === 0 ? (it = !0, e.memoizedState = a) : (e = Tm(), ye.lanes |= e, Hn |= e, t);
  }
  function Ed(e, t, a, l, u) {
    var c = q.p;
    q.p = c !== 0 && 8 > c ? c : 8;
    var p = A.T, y = {};
    A.T = y, Ku(e, !1, t, a);
    try {
      var S = u(), C = A.S;
      if (C !== null && C(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Z = Ly(
          S,
          l
        );
        Pi(
          e,
          t,
          Z,
          Rt(e)
        );
      } else
        Pi(
          e,
          t,
          l,
          Rt(e)
        );
    } catch (Y) {
      Pi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        Rt()
      );
    } finally {
      q.p = c, p !== null && y.types !== null && (p.types = y.types), A.T = p;
    }
  }
  function Wy() {
  }
  function Gu(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Ad(e).queue;
    Ed(
      e,
      u,
      t,
      F,
      a === null ? Wy : function() {
        return kd(e), a(l);
      }
    );
  }
  function Ad(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vn,
        lastRenderedState: F
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function kd(e) {
    var t = Ad(e);
    t.next === null && (t = e.alternate.memoizedState), Pi(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function Qu() {
    return ft(pl);
  }
  function Cd() {
    return tt().memoizedState;
  }
  function Md() {
    return tt().memoizedState;
  }
  function Py(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Rt();
          e = Dn(a);
          var l = Zn(t, e, a);
          l !== null && (kt(l, t, a), Gi(l, t, a)), t = { cache: wu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Fy(e, t, a) {
    var l = Rt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Er(e) ? jd(t, a) : (a = fu(e, t, a, l), a !== null && (kt(a, e, l), Nd(a, t, l)));
  }
  function Od(e, t, a) {
    var l = Rt();
    Pi(e, t, a, l);
  }
  function Pi(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Er(e)) jd(t, u);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, y = c(p, a);
          if (u.hasEagerState = !0, u.eagerState = y, Mt(y, p))
            return rr(e, t, u, 0), qe === null && lr(), !1;
        } catch {
        }
      if (a = fu(e, t, u, l), a !== null)
        return kt(a, e, l), Nd(a, t, l), !0;
    }
    return !1;
  }
  function Ku(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Es(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Er(e)) {
      if (t) throw Error(o(479));
    } else
      t = fu(
        e,
        a,
        l,
        2
      ), t !== null && kt(t, e, 2);
  }
  function Er(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye;
  }
  function jd(e, t) {
    ni = _r = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Nd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Uc(e, a);
    }
  }
  var Fi = {
    readContext: ft,
    use: wr,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We
  };
  Fi.useEffectEvent = We;
  var Dd = {
    readContext: ft,
    use: wr,
    useCallback: function(e, t) {
      return gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: yd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, xr(
        4194308,
        4,
        Sd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return xr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      xr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = gt();
      t = t === void 0 ? null : t;
      var l = e();
      if (ba) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = gt();
      if (a !== void 0) {
        var u = a(t);
        if (ba) {
          le(!0);
          try {
            a(t);
          } finally {
            le(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = Fy.bind(
        null,
        ye,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Bu(e);
      var t = e.queue, a = Od.bind(null, ye, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lu,
    useDeferredValue: function(e, t) {
      var a = gt();
      return Vu(a, e, t);
    },
    useTransition: function() {
      var e = Bu(!1);
      return e = Ed.bind(
        null,
        ye,
        e.queue,
        !0,
        !1
      ), gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = ye, u = gt();
      if (Ae) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), qe === null)
          throw Error(o(349));
        (Te & 127) !== 0 || td(l, t, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return u.queue = c, yd(ad.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ii(
        9,
        { destroy: void 0 },
        nd.bind(
          null,
          l,
          c,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = gt(), t = qe.identifierPrefix;
      if (Ae) {
        var a = an, l = nn;
        a = (l & ~(1 << 32 - te(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = br++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Vy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Qu,
    useFormState: dd,
    useActionState: dd,
    useOptimistic: function(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ku.bind(
        null,
        ye,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Yu,
    useCacheRefresh: function() {
      return gt().memoizedState = Py.bind(
        null,
        ye
      );
    },
    useEffectEvent: function(e) {
      var t = gt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ne & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ju = {
    readContext: ft,
    use: wr,
    useCallback: zd,
    useContext: ft,
    useEffect: $u,
    useImperativeHandle: wd,
    useInsertionEffect: _d,
    useLayoutEffect: bd,
    useMemo: xd,
    useReducer: zr,
    useRef: vd,
    useState: function() {
      return zr(vn);
    },
    useDebugValue: Lu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Td(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = zr(vn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Wi(e),
        t
      ];
    },
    useSyncExternalStore: ed,
    useId: Cd,
    useHostTransitionStatus: Qu,
    useFormState: md,
    useActionState: md,
    useOptimistic: function(e, t) {
      var a = tt();
      return rd(a, Ye, e, t);
    },
    useMemoCache: Yu,
    useCacheRefresh: Md
  };
  Ju.useEffectEvent = gd;
  var Zd = {
    readContext: ft,
    use: wr,
    useCallback: zd,
    useContext: ft,
    useEffect: $u,
    useImperativeHandle: wd,
    useInsertionEffect: _d,
    useLayoutEffect: bd,
    useMemo: xd,
    useReducer: Hu,
    useRef: vd,
    useState: function() {
      return Hu(vn);
    },
    useDebugValue: Lu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Ye === null ? Vu(a, e, t) : Td(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hu(vn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Wi(e),
        t
      ];
    },
    useSyncExternalStore: ed,
    useId: Cd,
    useHostTransitionStatus: Qu,
    useFormState: hd,
    useActionState: hd,
    useOptimistic: function(e, t) {
      var a = tt();
      return Ye !== null ? rd(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Yu,
    useCacheRefresh: Md
  };
  Zd.useEffectEvent = gd;
  function Wu(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : b({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Pu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Rt(), u = Dn(l);
      u.payload = t, a != null && (u.callback = a), t = Zn(e, u, l), t !== null && (kt(t, e, l), Gi(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Rt(), u = Dn(l);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = Zn(e, u, l), t !== null && (kt(t, e, l), Gi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Rt(), l = Dn(a);
      l.tag = 2, t != null && (l.callback = t), t = Zn(e, l, a), t !== null && (kt(t, e, a), Gi(t, e, a));
    }
  };
  function Rd(e, t, a, l, u, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Yi(a, l) || !Yi(u, c) : !0;
  }
  function Ud(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Pu.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = b({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function Yd(e) {
    ir(e);
  }
  function Xd(e) {
    console.error(e);
  }
  function Hd(e) {
    ir(e);
  }
  function Ar(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Bd(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Fu(e, t, a) {
    return a = Dn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Ar(e, t);
    }, a;
  }
  function qd(e) {
    return e = Dn(e), e.tag = 3, e;
  }
  function $d(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = l.value;
      e.payload = function() {
        return u(c);
      }, e.callback = function() {
        Bd(t, a, l);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Bd(t, a, l), typeof u != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Iy(e, t, a, l, u) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Wa(
        t,
        a,
        u,
        !0
      ), a = jt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? Xr() : a.alternate === null && Pe === 0 && (Pe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, l === pr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), zs(e, l, u)), !1;
          case 22:
            return a.flags |= 65536, l === pr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), zs(e, l, u)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return zs(e, l, u), Xr(), !1;
    }
    if (Ae)
      return t = jt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== yu && (e = Error(o(422), { cause: l }), Bi(Bt(e, a)))) : (l !== yu && (t = Error(o(423), {
        cause: l
      }), Bi(
        Bt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Bt(l, a), u = Fu(
        e.stateNode,
        l,
        u
      ), ku(e, u), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(o(520), { cause: l });
    if (c = Bt(c, a), rl === null ? rl = [c] : rl.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    l = Bt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Fu(a.stateNode, l, e), ku(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Bn === null || !Bn.has(c))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = qd(u), $d(
              u,
              e,
              a,
              l
            ), ku(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Iu = Error(o(461)), it = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? Qf(t, null, a, l) : _a(
      t,
      e.child,
      a,
      l
    );
  }
  function Ld(e, t, a, l, u) {
    a = a.render;
    var c = t.ref;
    if ("ref" in l) {
      var p = {};
      for (var y in l)
        y !== "ref" && (p[y] = l[y]);
    } else p = l;
    return ha(t), l = Du(
      e,
      t,
      a,
      p,
      c,
      u
    ), y = Zu(), e !== null && !it ? (Ru(e, t, u), yn(e, t, u)) : (Ae && y && hu(t), t.flags |= 1, dt(e, t, l, u), t.child);
  }
  function Vd(e, t, a, l, u) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !du(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Gd(
        e,
        t,
        c,
        l,
        u
      )) : (e = ur(
        a.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !os(e, u)) {
      var p = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Yi, a(p, l) && e.ref === t.ref)
        return yn(e, t, u);
    }
    return t.flags |= 1, e = fn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Gd(e, t, a, l, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Yi(c, l) && e.ref === t.ref)
        if (it = !1, t.pendingProps = l = c, os(e, u))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, yn(e, t, u);
    }
    return es(
      e,
      t,
      a,
      l,
      u
    );
  }
  function Qd(e, t, a, l) {
    var u = l.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~c;
        } else l = 0, t.child = null;
        return Kd(
          e,
          t,
          c,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && dr(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Wf(t, c) : Mu(), Pf(t);
      else
        return l = t.lanes = 536870912, Kd(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          l
        );
    } else
      c !== null ? (dr(t, c.cachePool), Wf(t, c), Un(), t.memoizedState = null) : (e !== null && dr(t, null), Mu(), Un());
    return dt(e, t, u, a), t.child;
  }
  function Ii(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Kd(e, t, a, l, u) {
    var c = xu();
    return c = c === null ? null : { parent: nt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && dr(t, null), Mu(), Pf(t), e !== null && Wa(e, t, l, !0), t.childLanes = u, null;
  }
  function kr(e, t) {
    return t = Mr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Jd(e, t, a) {
    return _a(t, e.child, null, a), e = kr(t, t.pendingProps), e.flags |= 2, Nt(t), t.memoizedState = null, e;
  }
  function eg(e, t, a) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = kr(t, l), t.lanes = 536870912, Ii(null, e);
        if (ju(t), (e = Le) ? (e = op(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = jf(e), a.return = t, t.child = a, ct = t, Le = null)) : e = null, e === null) throw On(t);
        return t.lanes = 536870912, null;
      }
      return kr(t, l);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (ju(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Jd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (it || Wa(e, t, a, !1), u = (a & e.childLanes) !== 0, it || u) {
        if (l = qe, l !== null && (p = Yc(l, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, fa(e, p), kt(l, e, p), Iu;
        Xr(), t = Jd(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, Le = Gt(p.nextSibling), ct = t, Ae = !0, Mn = null, Lt = !1, e !== null && Zf(t, e), t = kr(t, l), t.flags |= 4096;
      return t;
    }
    return e = fn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Cr(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function es(e, t, a, l, u) {
    return ha(t), a = Du(
      e,
      t,
      a,
      l,
      void 0,
      u
    ), l = Zu(), e !== null && !it ? (Ru(e, t, u), yn(e, t, u)) : (Ae && l && hu(t), t.flags |= 1, dt(e, t, a, u), t.child);
  }
  function Wd(e, t, a, l, u, c) {
    return ha(t), t.updateQueue = null, a = If(
      t,
      l,
      a,
      u
    ), Ff(e), l = Zu(), e !== null && !it ? (Ru(e, t, c), yn(e, t, c)) : (Ae && l && hu(t), t.flags |= 1, dt(e, t, a, c), t.child);
  }
  function Pd(e, t, a, l, u) {
    if (ha(t), t.stateNode === null) {
      var c = Ga, p = a.contextType;
      typeof p == "object" && p !== null && (c = ft(p)), c = new a(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Pu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, Eu(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? ft(p) : Ga, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Wu(
        t,
        a,
        p,
        l
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Pu.enqueueReplaceState(c, c.state, null), Ki(t, l, c, u), Qi(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, S = Sa(a, y);
      c.props = S;
      var C = c.context, Z = a.contextType;
      p = Ga, typeof Z == "object" && Z !== null && (p = ft(Z));
      var Y = a.getDerivedStateFromProps;
      Z = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, Z || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || C !== p) && Ud(
        t,
        c,
        l,
        p
      ), Nn = !1;
      var O = t.memoizedState;
      c.state = O, Ki(t, l, c, u), Qi(), C = t.memoizedState, y || O !== C || Nn ? (typeof Y == "function" && (Wu(
        t,
        a,
        Y,
        l
      ), C = t.memoizedState), (S = Nn || Rd(
        t,
        a,
        S,
        l,
        O,
        C,
        p
      )) ? (Z || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = C), c.props = l, c.state = C, c.context = p, l = S) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, Au(e, t), p = t.memoizedProps, Z = Sa(a, p), c.props = Z, Y = t.pendingProps, O = c.context, C = a.contextType, S = Ga, typeof C == "object" && C !== null && (S = ft(C)), y = a.getDerivedStateFromProps, (C = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== Y || O !== S) && Ud(
        t,
        c,
        l,
        S
      ), Nn = !1, O = t.memoizedState, c.state = O, Ki(t, l, c, u), Qi();
      var j = t.memoizedState;
      p !== Y || O !== j || Nn || e !== null && e.dependencies !== null && cr(e.dependencies) ? (typeof y == "function" && (Wu(
        t,
        a,
        y,
        l
      ), j = t.memoizedState), (Z = Nn || Rd(
        t,
        a,
        Z,
        l,
        O,
        j,
        S
      ) || e !== null && e.dependencies !== null && cr(e.dependencies)) ? (C || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, j, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        j,
        S
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = j), c.props = l, c.state = j, c.context = S, l = Z) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, Cr(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = _a(
      t,
      e.child,
      null,
      u
    ), t.child = _a(
      t,
      null,
      a,
      u
    )) : dt(e, t, a, u), t.memoizedState = c.state, e = t.child) : e = yn(
      e,
      t,
      u
    ), e;
  }
  function Fd(e, t, a, l) {
    return ma(), t.flags |= 256, dt(e, t, a, l), t.child;
  }
  var ts = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ns(e) {
    return { baseLanes: e, cachePool: Bf() };
  }
  function as(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Zt), e;
  }
  function Id(e, t, a) {
    var l = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), p && (u = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (u ? Rn(t) : Un(), (e = Le) ? (e = op(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = jf(e), a.return = t, t.child = a, ct = t, Le = null)) : e = null, e === null) throw On(t);
        return Xs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = l.children;
      return l = l.fallback, u ? (Un(), u = t.mode, y = Mr(
        { mode: "hidden", children: y },
        u
      ), l = da(
        l,
        u,
        a,
        null
      ), y.return = t, l.return = t, y.sibling = l, t.child = y, l = t.child, l.memoizedState = ns(a), l.childLanes = as(
        e,
        p,
        a
      ), t.memoizedState = ts, Ii(null, l)) : (Rn(t), is(t, y));
    }
    var S = e.memoizedState;
    if (S !== null && (y = S.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Rn(t), t.flags &= -257, t = ls(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Un(), t.child = e.child, t.flags |= 128, t = null) : (Un(), y = l.fallback, u = t.mode, l = Mr(
          { mode: "visible", children: l.children },
          u
        ), y = da(
          y,
          u,
          a,
          null
        ), y.flags |= 2, l.return = t, y.return = t, l.sibling = y, t.child = l, _a(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = ns(a), l.childLanes = as(
          e,
          p,
          a
        ), t.memoizedState = ts, t = Ii(null, l));
      else if (Rn(t), Xs(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var C = p.dgst;
        p = C, l = Error(o(419)), l.stack = "", l.digest = p, Bi({ value: l, source: null, stack: null }), t = ls(
          e,
          t,
          a
        );
      } else if (it || Wa(e, t, a, !1), p = (a & e.childLanes) !== 0, it || p) {
        if (p = qe, p !== null && (l = Yc(p, a), l !== 0 && l !== S.retryLane))
          throw S.retryLane = l, fa(e, l), kt(p, e, l), Iu;
        Ys(y) || Xr(), t = ls(
          e,
          t,
          a
        );
      } else
        Ys(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Le = Gt(
          y.nextSibling
        ), ct = t, Ae = !0, Mn = null, Lt = !1, e !== null && Zf(t, e), t = is(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Un(), y = l.fallback, u = t.mode, S = e.child, C = S.sibling, l = fn(S, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? y = fn(
      C,
      y
    ) : (y = da(
      y,
      u,
      a,
      null
    ), y.flags |= 2), y.return = t, l.return = t, l.sibling = y, t.child = l, Ii(null, l), l = t.child, y = e.child.memoizedState, y === null ? y = ns(a) : (u = y.cachePool, u !== null ? (S = nt._currentValue, u = u.parent !== S ? { parent: S, pool: S } : u) : u = Bf(), y = {
      baseLanes: y.baseLanes | a,
      cachePool: u
    }), l.memoizedState = y, l.childLanes = as(
      e,
      p,
      a
    ), t.memoizedState = ts, Ii(e.child, l)) : (Rn(t), a = e.child, e = a.sibling, a = fn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function is(e, t) {
    return t = Mr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Mr(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function ls(e, t, a) {
    return _a(t, e.child, null, a), e = is(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function em(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), bu(e.return, t, a);
  }
  function rs(e, t, a, l, u, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: u,
      treeForkCount: c
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = a, p.tailMode = u, p.treeForkCount = c);
  }
  function tm(e, t, a) {
    var l = t.pendingProps, u = l.revealOrder, c = l.tail;
    l = l.children;
    var p = et.current, y = (p & 2) !== 0;
    if (y ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, K(et, p), dt(e, t, l, a), l = Ae ? Hi : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && em(e, a, t);
        else if (e.tag === 19)
          em(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && gr(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), rs(
          t,
          !1,
          u,
          a,
          c,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && gr(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = a, a = u, u = e;
        }
        rs(
          t,
          !0,
          a,
          null,
          c,
          l
        );
        break;
      case "together":
        rs(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function yn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Hn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Wa(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, a = fn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = fn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function os(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && cr(e)));
  }
  function tg(e, t, a) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), jn(t, nt, e.memoizedState.cache), ma();
        break;
      case 27:
      case 5:
        Wt(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        jn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ju(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Rn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Id(e, t, a) : (Rn(t), e = yn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Rn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Wa(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), u) {
          if (l)
            return tm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), K(et, et.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Qd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        jn(t, nt, e.memoizedState.cache);
    }
    return yn(e, t, a);
  }
  function nm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!os(e, a) && (t.flags & 128) === 0)
          return it = !1, tg(
            e,
            t,
            a
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, Ae && (t.flags & 1048576) !== 0 && Df(t, Hi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ya(t.elementType), t.type = e, typeof e == "function")
            du(e) ? (l = Sa(e, l), t.tag = 1, t = Pd(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = es(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === D) {
                t.tag = 11, t = Ld(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (u === $) {
                t.tag = 14, t = Vd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = P(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return es(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, u = Sa(
          l,
          t.pendingProps
        ), Pd(
          e,
          t,
          l,
          u,
          a
        );
      case 3:
        e: {
          if (Ge(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          u = c.element, Au(e, t), Ki(t, l, null, a);
          var p = t.memoizedState;
          if (l = p.cache, jn(t, nt, l), l !== c.cache && Su(
            t,
            [nt],
            a,
            !0
          ), Qi(), l = p.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Fd(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== u) {
              u = Bt(
                Error(o(424)),
                t
              ), Bi(u), t = Fd(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = Gt(e.firstChild), ct = t, Ae = !0, Mn = null, Lt = !0, a = Qf(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ma(), l === u) {
              t = yn(
                e,
                t,
                a
              );
              break e;
            }
            dt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Cr(e, t), e === null ? (a = mp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ae || (a = t.type, e = t.pendingProps, l = Gr(
          ve.current
        ).createElement(a), l[st] = t, l[wt] = e, mt(l, a, e), ot(l), t.stateNode = l) : t.memoizedState = mp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Wt(t), e === null && Ae && (l = t.stateNode = cp(
          t.type,
          t.pendingProps,
          ve.current
        ), ct = t, Lt = !0, u = Le, Vn(t.type) ? (Hs = u, Le = Gt(l.firstChild)) : Le = u), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Cr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((u = l = Le) && (l = Og(
          l,
          t.type,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, ct = t, Le = Gt(l.firstChild), Lt = !1, u = !0) : u = !1), u || On(t)), Wt(t), u = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = c.children, Zs(u, c) ? l = null : p !== null && Zs(u, p) && (t.flags |= 32), t.memoizedState !== null && (u = Du(
          e,
          t,
          Gy,
          null,
          null,
          a
        ), pl._currentValue = u), Cr(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && Ae && ((e = a = Le) && (a = jg(
          a,
          t.pendingProps,
          Lt
        ), a !== null ? (t.stateNode = a, ct = t, Le = null, e = !0) : e = !1), e || On(t)), null;
      case 13:
        return Id(e, t, a);
      case 4:
        return Ge(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = _a(
          t,
          null,
          l,
          a
        ) : dt(e, t, l, a), t.child;
      case 11:
        return Ld(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return dt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, jn(t, t.type, l.value), dt(e, t, l.children, a), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, ha(t), u = ft(u), l = l(u), t.flags |= 1, dt(e, t, l, a), t.child;
      case 14:
        return Vd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Gd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return tm(e, t, a);
      case 31:
        return eg(e, t, a);
      case 22:
        return Qd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ha(t), l = ft(nt), e === null ? (u = xu(), u === null && (u = qe, c = wu(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), t.memoizedState = { parent: l, cache: u }, Eu(t), jn(t, nt, u)) : ((e.lanes & a) !== 0 && (Au(e, t), Ki(t, null, null, a), Qi()), u = e.memoizedState, c = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), jn(t, nt, l)) : (l = c.cache, jn(t, nt, l), l !== u.cache && Su(
          t,
          [nt],
          a,
          !0
        ))), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function gn(e) {
    e.flags |= 4;
  }
  function us(e, t, a, l, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Cm()) e.flags |= 8192;
        else
          throw ga = pr, Tu;
    } else e.flags &= -16777217;
  }
  function am(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !gp(t))
      if (Cm()) e.flags |= 8192;
      else
        throw ga = pr, Tu;
  }
  function Or(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zc() : 536870912, e.lanes |= t, ui |= t);
  }
  function el(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function ng(e, t, a) {
    var l = t.pendingProps;
    switch (vu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ve(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), pn(nt), $e(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ja(t) ? gn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gu())), Ve(t), null;
      case 26:
        var u = t.type, c = t.memoizedState;
        return e === null ? (gn(t), c !== null ? (Ve(t), am(t, c)) : (Ve(t), us(
          t,
          u,
          null,
          l,
          a
        ))) : c ? c !== e.memoizedState ? (gn(t), Ve(t), am(t, c)) : (Ve(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && gn(t), Ve(t), us(
          t,
          u,
          e,
          l,
          a
        )), null;
      case 27:
        if (Ut(t), a = ve.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ve(t), null;
          }
          e = I.current, Ja(t) ? Rf(t) : (e = cp(u, l, a), t.stateNode = e, gn(t));
        }
        return Ve(t), null;
      case 5:
        if (Ut(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ve(t), null;
          }
          if (c = I.current, Ja(t))
            Rf(t);
          else {
            var p = Gr(
              ve.current
            );
            switch (c) {
              case 1:
                c = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                c = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    c = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    c = p.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof l.is == "string" ? p.createElement("select", {
                      is: l.is
                    }) : p.createElement("select"), l.multiple ? c.multiple = !0 : l.size && (c.size = l.size);
                    break;
                  default:
                    c = typeof l.is == "string" ? p.createElement(u, { is: l.is }) : p.createElement(u);
                }
            }
            c[st] = t, c[wt] = l;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                c.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = c;
            e: switch (mt(c, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && gn(t);
          }
        }
        return Ve(t), us(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && gn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ve.current, Ja(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, u = ct, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[st] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Im(e.nodeValue, a)), e || On(t, !0);
          } else
            e = Gr(e).createTextNode(
              l
            ), e[st] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Ja(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[st] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), e = !1;
          } else
            a = gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Ve(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ja(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[st] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), u = !1;
          } else
            u = gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
        }
        return Nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), c = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== u && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Or(t, t.updateQueue), Ve(t), null);
      case 4:
        return $e(), e === null && Ms(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return pn(t.type), Ve(t), null;
      case 19:
        if (N(et), l = t.memoizedState, l === null) return Ve(t), null;
        if (u = (t.flags & 128) !== 0, c = l.rendering, c === null)
          if (u) el(l, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = gr(e), c !== null) {
                  for (t.flags |= 128, el(l, !1), e = c.updateQueue, t.updateQueue = e, Or(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Of(a, e), a = a.sibling;
                  return K(
                    et,
                    et.current & 1 | 2
                  ), Ae && dn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && vt() > Rr && (t.flags |= 128, u = !0, el(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = gr(c), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Or(t, e), el(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !Ae)
                return Ve(t), null;
            } else
              2 * vt() - l.renderingStartTime > Rr && a !== 536870912 && (t.flags |= 128, u = !0, el(l, !1), t.lanes = 4194304);
          l.isBackwards ? (c.sibling = t.child, t.child = c) : (e = l.last, e !== null ? e.sibling = c : t.child = c, l.last = c);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = vt(), e.sibling = null, a = et.current, K(
          et,
          u ? a & 1 | 2 : a & 1
        ), Ae && dn(t, l.treeForkCount), e) : (Ve(t), null);
      case 22:
      case 23:
        return Nt(t), Ou(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), a = t.updateQueue, a !== null && Or(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && N(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pn(nt), Ve(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function ag(e, t) {
    switch (vu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pn(nt), $e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ut(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Nt(t), t.alternate === null)
            throw Error(o(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Nt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return N(et), null;
      case 4:
        return $e(), null;
      case 10:
        return pn(t.type), null;
      case 22:
      case 23:
        return Nt(t), Ou(), e !== null && N(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return pn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function im(e, t) {
    switch (vu(t), t.tag) {
      case 3:
        pn(nt), $e();
        break;
      case 26:
      case 27:
      case 5:
        Ut(t);
        break;
      case 4:
        $e();
        break;
      case 31:
        t.memoizedState !== null && Nt(t);
        break;
      case 13:
        Nt(t);
        break;
      case 19:
        N(et);
        break;
      case 10:
        pn(t.type);
        break;
      case 22:
      case 23:
        Nt(t), Ou(), e !== null && N(va);
        break;
      case 24:
        pn(nt);
    }
  }
  function tl(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var c = a.create, p = a.inst;
            l = c(), p.destroy = l;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (y) {
      Ue(t, t.return, y);
    }
  }
  function Yn(e, t, a) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var p = l.inst, y = p.destroy;
            if (y !== void 0) {
              p.destroy = void 0, u = t;
              var S = a, C = y;
              try {
                C();
              } catch (Z) {
                Ue(
                  u,
                  S,
                  Z
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (Z) {
      Ue(t, t.return, Z);
    }
  }
  function lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Jf(t, a);
      } catch (l) {
        Ue(e, e.return, l);
      }
    }
  }
  function rm(e, t, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ue(e, t, l);
    }
  }
  function nl(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (u) {
      Ue(e, t, u);
    }
  }
  function ln(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ue(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Ue(e, t, u);
        }
      else a.current = null;
  }
  function om(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function ss(e, t, a) {
    try {
      var l = e.stateNode;
      Tg(l, e.type, a, t), l[wt] = t;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function um(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vn(e.type) || e.tag === 4;
  }
  function cs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || um(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = sn));
    else if (l !== 4 && (l === 27 && Vn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (fs(e, t, a), e = e.sibling; e !== null; )
        fs(e, t, a), e = e.sibling;
  }
  function jr(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Vn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (jr(e, t, a), e = e.sibling; e !== null; )
        jr(e, t, a), e = e.sibling;
  }
  function sm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      mt(t, l, a), t[st] = e, t[wt] = a;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  var _n = !1, lt = !1, ds = !1, cm = typeof WeakSet == "function" ? WeakSet : Set, ut = null;
  function ig(e, t) {
    if (e = e.containerInfo, Ns = Ir, e = wf(e), lu(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var p = 0, y = -1, S = -1, C = 0, Z = 0, Y = e, O = null;
            t: for (; ; ) {
              for (var j; Y !== a || u !== 0 && Y.nodeType !== 3 || (y = p + u), Y !== c || l !== 0 && Y.nodeType !== 3 || (S = p + l), Y.nodeType === 3 && (p += Y.nodeValue.length), (j = Y.firstChild) !== null; )
                O = Y, Y = j;
              for (; ; ) {
                if (Y === e) break t;
                if (O === a && ++C === u && (y = p), O === c && ++Z === l && (S = p), (j = Y.nextSibling) !== null) break;
                Y = O, O = Y.parentNode;
              }
              Y = j;
            }
            a = y === -1 || S === -1 ? null : { start: y, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ds = { focusedElem: e, selectionRange: a }, Ir = !1, ut = t; ut !== null; )
      if (t = ut, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ut = e;
      else
        for (; ut !== null; ) {
          switch (t = ut, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  u = e[a], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, a = t, u = c.memoizedProps, c = c.memoizedState, l = a.stateNode;
                try {
                  var ne = Sa(
                    a.type,
                    u
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ne,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (fe) {
                  Ue(
                    a,
                    a.return,
                    fe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Us(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Us(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ut = e;
            break;
          }
          ut = t.return;
        }
  }
  function fm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Sn(e, a), l & 4 && tl(5, a);
        break;
      case 1:
        if (Sn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Ue(a, a.return, p);
            }
          else {
            var u = Sa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              Ue(
                a,
                a.return,
                p
              );
            }
          }
        l & 64 && lm(a), l & 512 && nl(a, a.return);
        break;
      case 3:
        if (Sn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Jf(e, t);
          } catch (p) {
            Ue(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && sm(a);
      case 26:
      case 5:
        Sn(e, a), t === null && l & 4 && om(a), l & 512 && nl(a, a.return);
        break;
      case 12:
        Sn(e, a);
        break;
      case 31:
        Sn(e, a), l & 4 && pm(e, a);
        break;
      case 13:
        Sn(e, a), l & 4 && hm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = mg.bind(
          null,
          a
        ), Ng(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || _n, !l) {
          t = t !== null && t.memoizedState !== null || lt, u = _n;
          var c = lt;
          _n = l, (lt = t) && !c ? wn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Sn(e, a), _n = u, lt = c;
        }
        break;
      case 30:
        break;
      default:
        Sn(e, a);
    }
  }
  function dm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && qo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, xt = !1;
  function bn(e, t, a) {
    for (a = a.child; a !== null; )
      mm(e, t, a), a = a.sibling;
  }
  function mm(e, t, a) {
    if (X && typeof X.onCommitFiberUnmount == "function")
      try {
        X.onCommitFiberUnmount(la, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || ln(a, t), bn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || ln(a, t);
        var l = Qe, u = xt;
        Vn(a.type) && (Qe = a.stateNode, xt = !1), bn(
          e,
          t,
          a
        ), fl(a.stateNode), Qe = l, xt = u;
        break;
      case 5:
        lt || ln(a, t);
      case 6:
        if (l = Qe, u = xt, Qe = null, bn(
          e,
          t,
          a
        ), Qe = l, xt = u, Qe !== null)
          if (xt)
            try {
              (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === "HTML" ? Qe.ownerDocument.body : Qe).removeChild(a.stateNode);
            } catch (c) {
              Ue(
                a,
                t,
                c
              );
            }
          else
            try {
              Qe.removeChild(a.stateNode);
            } catch (c) {
              Ue(
                a,
                t,
                c
              );
            }
        break;
      case 18:
        Qe !== null && (xt ? (e = Qe, lp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), vi(e)) : lp(Qe, a.stateNode));
        break;
      case 4:
        l = Qe, u = xt, Qe = a.stateNode.containerInfo, xt = !0, bn(
          e,
          t,
          a
        ), Qe = l, xt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yn(2, a, t), lt || Yn(4, a, t), bn(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (ln(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && rm(
          a,
          t,
          l
        )), bn(
          e,
          t,
          a
        );
        break;
      case 21:
        bn(
          e,
          t,
          a
        );
        break;
      case 22:
        lt = (l = lt) || a.memoizedState !== null, bn(
          e,
          t,
          a
        ), lt = l;
        break;
      default:
        bn(
          e,
          t,
          a
        );
    }
  }
  function pm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
    }
  }
  function hm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
  }
  function lg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new cm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new cm()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Nr(e, t) {
    var a = lg(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var u = pg.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function Tt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], c = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Vn(y.type)) {
                Qe = y.stateNode, xt = !1;
                break e;
              }
              break;
            case 5:
              Qe = y.stateNode, xt = !1;
              break e;
            case 3:
            case 4:
              Qe = y.stateNode.containerInfo, xt = !0;
              break e;
          }
          y = y.return;
        }
        if (Qe === null) throw Error(o(160));
        mm(c, p, u), Qe = null, xt = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        vm(t, e), t = t.sibling;
  }
  var Ft = null;
  function vm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), Et(e), l & 4 && (Yn(3, e, e.return), tl(3, e), Yn(5, e, e.return));
        break;
      case 1:
        Tt(t, e), Et(e), l & 512 && (lt || a === null || ln(a, a.return)), l & 64 && _n && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var u = Ft;
        if (Tt(t, e), Et(e), l & 512 && (lt || a === null || ln(a, a.return)), l & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Ci] || c[st] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(l), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), mt(c, l, a), c[st] = e, ot(c), l = c;
                      break e;
                    case "link":
                      var p = vp(
                        "link",
                        "href",
                        u
                      ).get(l + (a.href || ""));
                      if (p) {
                        for (var y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = u.createElement(l), mt(c, l, a), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = vp(
                        "meta",
                        "content",
                        u
                      ).get(l + (a.content || ""))) {
                        for (y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = u.createElement(l), mt(c, l, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  c[st] = e, ot(c), l = c;
                }
                e.stateNode = l;
              } else
                yp(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = hp(
                u,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, l === null ? yp(
              u,
              e.type,
              e.stateNode
            ) : hp(
              u,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && ss(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), Et(e), l & 512 && (lt || a === null || ln(a, a.return)), a !== null && l & 4 && ss(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), Et(e), l & 512 && (lt || a === null || ln(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Xa(u, "");
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        l & 4 && e.stateNode != null && (u = e.memoizedProps, ss(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), l & 1024 && (ds = !0);
        break;
      case 6:
        if (Tt(t, e), Et(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (Jr = null, u = Ft, Ft = Qr(t.containerInfo), Tt(t, e), Ft = u, Et(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            vi(t.containerInfo);
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        ds && (ds = !1, ym(e));
        break;
      case 4:
        l = Ft, Ft = Qr(
          e.stateNode.containerInfo
        ), Tt(t, e), Et(e), Ft = l;
        break;
      case 12:
        Tt(t, e), Et(e);
        break;
      case 31:
        Tt(t, e), Et(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Nr(e, l)));
        break;
      case 13:
        Tt(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Zr = vt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Nr(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null, C = _n, Z = lt;
        if (_n = C || u, lt = Z || S, Tt(t, e), lt = Z, _n = C, Et(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || S || _n || lt || wa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                S = a = t;
                try {
                  if (c = S.stateNode, u)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = S.stateNode;
                    var Y = S.memoizedProps.style, O = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    y.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (ne) {
                  Ue(S, S.return, ne);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (ne) {
                  Ue(S, S.return, ne);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                S = t;
                try {
                  var j = S.stateNode;
                  u ? rp(j, !0) : rp(S.stateNode, !1);
                } catch (ne) {
                  Ue(S, S.return, ne);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Nr(e, a))));
        break;
      case 19:
        Tt(t, e), Et(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Nr(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (um(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, c = cs(e);
            jr(e, c, u);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Xa(p, ""), a.flags &= -33);
            var y = cs(e);
            jr(e, y, p);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo, C = cs(e);
            fs(
              e,
              C,
              S
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (Z) {
        Ue(e, e.return, Z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ym(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ym(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        fm(e, t.alternate, t), t = t.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(4, t, t.return), wa(t);
          break;
        case 1:
          ln(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && rm(
            t,
            t.return,
            a
          ), wa(t);
          break;
        case 27:
          fl(t.stateNode);
        case 26:
        case 5:
          ln(t, t.return), wa(t);
          break;
        case 22:
          t.memoizedState === null && wa(t);
          break;
        case 30:
          wa(t);
          break;
        default:
          wa(t);
      }
      e = e.sibling;
    }
  }
  function wn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            u,
            c,
            a
          ), tl(4, c);
          break;
        case 1:
          if (wn(
            u,
            c,
            a
          ), l = c, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (C) {
              Ue(l, l.return, C);
            }
          if (l = c, u = l.updateQueue, u !== null) {
            var y = l.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  Kf(S[u], y);
            } catch (C) {
              Ue(l, l.return, C);
            }
          }
          a && p & 64 && lm(c), nl(c, c.return);
          break;
        case 27:
          sm(c);
        case 26:
        case 5:
          wn(
            u,
            c,
            a
          ), a && l === null && p & 4 && om(c), nl(c, c.return);
          break;
        case 12:
          wn(
            u,
            c,
            a
          );
          break;
        case 31:
          wn(
            u,
            c,
            a
          ), a && p & 4 && pm(u, c);
          break;
        case 13:
          wn(
            u,
            c,
            a
          ), a && p & 4 && hm(u, c);
          break;
        case 22:
          c.memoizedState === null && wn(
            u,
            c,
            a
          ), nl(c, c.return);
          break;
        case 30:
          break;
        default:
          wn(
            u,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ms(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && qi(a));
  }
  function ps(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qi(e));
  }
  function It(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        gm(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function gm(e, t, a, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        It(
          e,
          t,
          a,
          l
        ), u & 2048 && tl(9, t);
        break;
      case 1:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        It(
          e,
          t,
          a,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qi(e)));
        break;
      case 12:
        if (u & 2048) {
          It(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, p = c.id, y = c.onPostCommit;
            typeof y == "function" && y(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Ue(t, t.return, S);
          }
        } else
          It(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? It(
          e,
          t,
          a,
          l
        ) : al(e, t) : c._visibility & 2 ? It(
          e,
          t,
          a,
          l
        ) : (c._visibility |= 2, li(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && ms(p, t);
        break;
      case 24:
        It(
          e,
          t,
          a,
          l
        ), u & 2048 && ps(t.alternate, t);
        break;
      default:
        It(
          e,
          t,
          a,
          l
        );
    }
  }
  function li(e, t, a, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, y = a, S = l, C = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          li(
            c,
            p,
            y,
            S,
            u
          ), tl(8, p);
          break;
        case 23:
          break;
        case 22:
          var Z = p.stateNode;
          p.memoizedState !== null ? Z._visibility & 2 ? li(
            c,
            p,
            y,
            S,
            u
          ) : al(
            c,
            p
          ) : (Z._visibility |= 2, li(
            c,
            p,
            y,
            S,
            u
          )), u && C & 2048 && ms(
            p.alternate,
            p
          );
          break;
        case 24:
          li(
            c,
            p,
            y,
            S,
            u
          ), u && C & 2048 && ps(p.alternate, p);
          break;
        default:
          li(
            c,
            p,
            y,
            S,
            u
          );
      }
      t = t.sibling;
    }
  }
  function al(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            al(a, l), u & 2048 && ms(
              l.alternate,
              l
            );
            break;
          case 24:
            al(a, l), u & 2048 && ps(l.alternate, l);
            break;
          default:
            al(a, l);
        }
        t = t.sibling;
      }
  }
  var il = 8192;
  function ri(e, t, a) {
    if (e.subtreeFlags & il)
      for (e = e.child; e !== null; )
        _m(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function _m(e, t, a) {
    switch (e.tag) {
      case 26:
        ri(
          e,
          t,
          a
        ), e.flags & il && e.memoizedState !== null && Vg(
          a,
          Ft,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ri(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Ft;
        Ft = Qr(e.stateNode.containerInfo), ri(
          e,
          t,
          a
        ), Ft = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = il, il = 16777216, ri(
          e,
          t,
          a
        ), il = l) : ri(
          e,
          t,
          a
        ));
        break;
      default:
        ri(
          e,
          t,
          a
        );
    }
  }
  function bm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ll(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ut = l, wm(
            l,
            e
          );
        }
      bm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Sm(e), e = e.sibling;
  }
  function Sm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ll(e), e.flags & 2048 && Yn(9, e, e.return);
        break;
      case 3:
        ll(e);
        break;
      case 12:
        ll(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Dr(e)) : ll(e);
        break;
      default:
        ll(e);
    }
  }
  function Dr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ut = l, wm(
            l,
            e
          );
        }
      bm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, t, t.return), Dr(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Dr(t));
          break;
        default:
          Dr(t);
      }
      e = e.sibling;
    }
  }
  function wm(e, t) {
    for (; ut !== null; ) {
      var a = ut;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          qi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ut = l;
      else
        e: for (a = e; ut !== null; ) {
          l = ut;
          var u = l.sibling, c = l.return;
          if (dm(l), l === a) {
            ut = null;
            break e;
          }
          if (u !== null) {
            u.return = c, ut = u;
            break e;
          }
          ut = c;
        }
    }
  }
  var rg = {
    getCacheForType: function(e) {
      var t = ft(nt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ft(nt).controller.signal;
    }
  }, og = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, qe = null, Se = null, Te = 0, Re = 0, Dt = null, Xn = !1, oi = !1, hs = !1, zn = 0, Pe = 0, Hn = 0, za = 0, vs = 0, Zt = 0, ui = 0, rl = null, At = null, ys = !1, Zr = 0, zm = 0, Rr = 1 / 0, Ur = null, Bn = null, rt = 0, qn = null, si = null, xn = 0, gs = 0, _s = null, xm = null, ol = 0, bs = null;
  function Rt() {
    return (Ne & 2) !== 0 && Te !== 0 ? Te & -Te : A.T !== null ? Es() : Xc();
  }
  function Tm() {
    if (Zt === 0)
      if ((Te & 536870912) === 0 || Ae) {
        var e = Vl;
        Vl <<= 1, (Vl & 3932160) === 0 && (Vl = 262144), Zt = e;
      } else Zt = 536870912;
    return e = jt.current, e !== null && (e.flags |= 32), Zt;
  }
  function kt(e, t, a) {
    (e === qe && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (ci(e, 0), $n(
      e,
      Te,
      Zt,
      !1
    )), ki(e, a), ((Ne & 2) === 0 || e !== qe) && (e === qe && ((Ne & 2) === 0 && (za |= a), Pe === 4 && $n(
      e,
      Te,
      Zt,
      !1
    )), rn(e));
  }
  function Em(e, t, a) {
    if ((Ne & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ai(e, t), u = l ? cg(e, t) : ws(e, t, !0), c = l;
    do {
      if (u === 0) {
        oi && !l && $n(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !ug(a)) {
          u = ws(e, t, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var y = e;
              u = rl;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (ci(y, p).flags |= 256), p = ws(
                y,
                p,
                !1
              ), p !== 2) {
                if (hs && !S) {
                  y.errorRecoveryDisabledLanes |= c, za |= c, u = 4;
                  break e;
                }
                c = At, At = u, c !== null && (At === null ? At = c : At.push.apply(
                  At,
                  c
                ));
              }
              u = p;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ci(e, 0), $n(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = u, c) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              $n(
                l,
                t,
                Zt,
                !Xn
              );
              break e;
            case 2:
              At = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = Zr + 300 - vt(), 10 < u)) {
            if ($n(
              l,
              t,
              Zt,
              !Xn
            ), Ql(l, 0, !0) !== 0) break e;
            xn = t, l.timeoutHandle = ap(
              Am.bind(
                null,
                l,
                a,
                At,
                Ur,
                ys,
                t,
                Zt,
                za,
                ui,
                Xn,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Am(
            l,
            a,
            At,
            Ur,
            ys,
            t,
            Zt,
            za,
            ui,
            Xn,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rn(e);
  }
  function Am(e, t, a, l, u, c, p, y, S, C, Z, Y, O, j) {
    if (e.timeoutHandle = -1, Y = t.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
      Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn
      }, _m(
        t,
        c,
        Y
      );
      var ne = (c & 62914560) === c ? Zr - vt() : (c & 4194048) === c ? zm - vt() : 0;
      if (ne = Gg(
        Y,
        ne
      ), ne !== null) {
        xn = c, e.cancelPendingCommit = ne(
          Zm.bind(
            null,
            e,
            t,
            c,
            a,
            l,
            u,
            p,
            y,
            S,
            Z,
            Y,
            null,
            O,
            j
          )
        ), $n(e, c, p, !C);
        return;
      }
    }
    Zm(
      e,
      t,
      c,
      a,
      l,
      u,
      p,
      y,
      S
    );
  }
  function ug(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var u = a[l], c = u.getSnapshot;
          u = u.value;
          try {
            if (!Mt(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function $n(e, t, a, l) {
    t &= ~vs, t &= ~za, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var c = 31 - te(u), p = 1 << c;
      l[c] = -1, u &= ~p;
    }
    a !== 0 && Rc(e, a, t);
  }
  function Yr() {
    return (Ne & 6) === 0 ? (ul(0), !1) : !0;
  }
  function Ss() {
    if (Se !== null) {
      if (Re === 0)
        var e = Se.return;
      else
        e = Se, mn = pa = null, Uu(e), ei = null, Li = 0, e = Se;
      for (; e !== null; )
        im(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function ci(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, kg(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), xn = 0, Ss(), qe = e, Se = a = fn(e.current, null), Te = t, Re = 0, Dt = null, Xn = !1, oi = Ai(e, t), hs = !1, ui = Zt = vs = za = Hn = Pe = 0, At = rl = null, ys = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - te(l), c = 1 << u;
        t |= e[u], l &= ~c;
      }
    return zn = t, lr(), a;
  }
  function km(e, t) {
    ye = null, A.H = Fi, t === Ia || t === mr ? (t = Lf(), Re = 3) : t === Tu ? (t = Lf(), Re = 4) : Re = t === Iu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Dt = t, Se === null && (Pe = 1, Ar(
      e,
      Bt(t, e.current)
    ));
  }
  function Cm() {
    var e = jt.current;
    return e === null ? !0 : (Te & 4194048) === Te ? Vt === null : (Te & 62914560) === Te || (Te & 536870912) !== 0 ? e === Vt : !1;
  }
  function Mm() {
    var e = A.H;
    return A.H = Fi, e === null ? Fi : e;
  }
  function Om() {
    var e = A.A;
    return A.A = rg, e;
  }
  function Xr() {
    Pe = 4, Xn || (Te & 4194048) !== Te && jt.current !== null || (oi = !0), (Hn & 134217727) === 0 && (za & 134217727) === 0 || qe === null || $n(
      qe,
      Te,
      Zt,
      !1
    );
  }
  function ws(e, t, a) {
    var l = Ne;
    Ne |= 2;
    var u = Mm(), c = Om();
    (qe !== e || Te !== t) && (Ur = null, ci(e, t)), t = !1;
    var p = Pe;
    e: do
      try {
        if (Re !== 0 && Se !== null) {
          var y = Se, S = Dt;
          switch (Re) {
            case 8:
              Ss(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jt.current === null && (t = !0);
              var C = Re;
              if (Re = 0, Dt = null, fi(e, y, S, C), a && oi) {
                p = 0;
                break e;
              }
              break;
            default:
              C = Re, Re = 0, Dt = null, fi(e, y, S, C);
          }
        }
        sg(), p = Pe;
        break;
      } catch (Z) {
        km(e, Z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, mn = pa = null, Ne = l, A.H = u, A.A = c, Se === null && (qe = null, Te = 0, lr()), p;
  }
  function sg() {
    for (; Se !== null; ) jm(Se);
  }
  function cg(e, t) {
    var a = Ne;
    Ne |= 2;
    var l = Mm(), u = Om();
    qe !== e || Te !== t ? (Ur = null, Rr = vt() + 500, ci(e, t)) : oi = Ai(
      e,
      t
    );
    e: do
      try {
        if (Re !== 0 && Se !== null) {
          t = Se;
          var c = Dt;
          t: switch (Re) {
            case 1:
              Re = 0, Dt = null, fi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (qf(c)) {
                Re = 0, Dt = null, Nm(t);
                break;
              }
              t = function() {
                Re !== 2 && Re !== 9 || qe !== e || (Re = 7), rn(e);
              }, c.then(t, t);
              break e;
            case 3:
              Re = 7;
              break e;
            case 4:
              Re = 5;
              break e;
            case 7:
              qf(c) ? (Re = 0, Dt = null, Nm(t)) : (Re = 0, Dt = null, fi(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (Se.tag) {
                case 26:
                  p = Se.memoizedState;
                case 5:
                case 27:
                  var y = Se;
                  if (p ? gp(p) : y.stateNode.complete) {
                    Re = 0, Dt = null;
                    var S = y.sibling;
                    if (S !== null) Se = S;
                    else {
                      var C = y.return;
                      C !== null ? (Se = C, Hr(C)) : Se = null;
                    }
                    break t;
                  }
              }
              Re = 0, Dt = null, fi(e, t, c, 5);
              break;
            case 6:
              Re = 0, Dt = null, fi(e, t, c, 6);
              break;
            case 8:
              Ss(), Pe = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        fg();
        break;
      } catch (Z) {
        km(e, Z);
      }
    while (!0);
    return mn = pa = null, A.H = l, A.A = u, Ne = a, Se !== null ? 0 : (qe = null, Te = 0, lr(), Pe);
  }
  function fg() {
    for (; Se !== null && !No(); )
      jm(Se);
  }
  function jm(e) {
    var t = nm(e.alternate, e, zn);
    e.memoizedProps = e.pendingProps, t === null ? Hr(e) : Se = t;
  }
  function Nm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Wd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Te
        );
        break;
      case 11:
        t = Wd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Te
        );
        break;
      case 5:
        Uu(t);
      default:
        im(a, t), t = Se = Of(t, zn), t = nm(a, t, zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Hr(e) : Se = t;
  }
  function fi(e, t, a, l) {
    mn = pa = null, Uu(t), ei = null, Li = 0;
    var u = t.return;
    try {
      if (Iy(
        e,
        u,
        t,
        a,
        Te
      )) {
        Pe = 1, Ar(
          e,
          Bt(a, e.current)
        ), Se = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw Se = u, c;
      Pe = 1, Ar(
        e,
        Bt(a, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : oi || (Te & 536870912) !== 0 ? e = !1 : (Xn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = jt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Dm(t, e)) : Hr(t);
  }
  function Hr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Dm(
          t,
          Xn
        );
        return;
      }
      e = t.return;
      var a = ng(
        t.alternate,
        t,
        zn
      );
      if (a !== null) {
        Se = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Dm(e, t) {
    do {
      var a = ag(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Se = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Se = e;
        return;
      }
      Se = e = a;
    } while (e !== null);
    Pe = 6, Se = null;
  }
  function Zm(e, t, a, l, u, c, p, y, S) {
    e.cancelPendingCommit = null;
    do
      Br();
    while (rt !== 0);
    if ((Ne & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (c = t.lanes | t.childLanes, c |= cu, Lv(
        e,
        a,
        c,
        p,
        y,
        S
      ), e === qe && (Se = qe = null, Te = 0), si = t, qn = e, xn = a, gs = c, _s = u, xm = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, hg(ja, function() {
        return Hm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = A.T, A.T = null, u = q.p, q.p = 2, p = Ne, Ne |= 4;
        try {
          ig(e, t, a);
        } finally {
          Ne = p, q.p = u, A.T = l;
        }
      }
      rt = 1, Rm(), Um(), Ym();
    }
  }
  function Rm() {
    if (rt === 1) {
      rt = 0;
      var e = qn, t = si, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null;
        var l = q.p;
        q.p = 2;
        var u = Ne;
        Ne |= 4;
        try {
          vm(t, e);
          var c = Ds, p = wf(e.containerInfo), y = c.focusedElem, S = c.selectionRange;
          if (p !== y && y && y.ownerDocument && Sf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && lu(y)) {
              var C = S.start, Z = S.end;
              if (Z === void 0 && (Z = C), "selectionStart" in y)
                y.selectionStart = C, y.selectionEnd = Math.min(
                  Z,
                  y.value.length
                );
              else {
                var Y = y.ownerDocument || document, O = Y && Y.defaultView || window;
                if (O.getSelection) {
                  var j = O.getSelection(), ne = y.textContent.length, fe = Math.min(S.start, ne), He = S.end === void 0 ? fe : Math.min(S.end, ne);
                  !j.extend && fe > He && (p = He, He = fe, fe = p);
                  var T = bf(
                    y,
                    fe
                  ), z = bf(
                    y,
                    He
                  );
                  if (T && z && (j.rangeCount !== 1 || j.anchorNode !== T.node || j.anchorOffset !== T.offset || j.focusNode !== z.node || j.focusOffset !== z.offset)) {
                    var k = Y.createRange();
                    k.setStart(T.node, T.offset), j.removeAllRanges(), fe > He ? (j.addRange(k), j.extend(z.node, z.offset)) : (k.setEnd(z.node, z.offset), j.addRange(k));
                  }
                }
              }
            }
            for (Y = [], j = y; j = j.parentNode; )
              j.nodeType === 1 && Y.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < Y.length; y++) {
              var R = Y[y];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          Ir = !!Ns, Ds = Ns = null;
        } finally {
          Ne = u, q.p = l, A.T = a;
        }
      }
      e.current = t, rt = 2;
    }
  }
  function Um() {
    if (rt === 2) {
      rt = 0;
      var e = qn, t = si, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = A.T, A.T = null;
        var l = q.p;
        q.p = 2;
        var u = Ne;
        Ne |= 4;
        try {
          fm(e, t.alternate, t);
        } finally {
          Ne = u, q.p = l, A.T = a;
        }
      }
      rt = 3;
    }
  }
  function Ym() {
    if (rt === 4 || rt === 3) {
      rt = 0, aa();
      var e = qn, t = si, a = xn, l = xm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rt = 5 : (rt = 0, si = qn = null, Xm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Bn = null), Ho(a), t = t.stateNode, X && typeof X.onCommitFiberRoot == "function")
        try {
          X.onCommitFiberRoot(
            la,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = A.T, u = q.p, q.p = 2, A.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < l.length; p++) {
            var y = l[p];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          A.T = t, q.p = u;
        }
      }
      (xn & 3) !== 0 && Br(), rn(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === bs ? ol++ : (ol = 0, bs = e) : ol = 0, ul(0);
    }
  }
  function Xm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qi(t)));
  }
  function Br() {
    return Rm(), Um(), Ym(), Hm();
  }
  function Hm() {
    if (rt !== 5) return !1;
    var e = qn, t = gs;
    gs = 0;
    var a = Ho(xn), l = A.T, u = q.p;
    try {
      q.p = 32 > a ? 32 : a, A.T = null, a = _s, _s = null;
      var c = qn, p = xn;
      if (rt = 0, si = qn = null, xn = 0, (Ne & 6) !== 0) throw Error(o(331));
      var y = Ne;
      if (Ne |= 4, Sm(c.current), gm(
        c,
        c.current,
        p,
        a
      ), Ne = y, ul(0, !1), X && typeof X.onPostCommitFiberRoot == "function")
        try {
          X.onPostCommitFiberRoot(la, c);
        } catch {
        }
      return !0;
    } finally {
      q.p = u, A.T = l, Xm(e, t);
    }
  }
  function Bm(e, t, a) {
    t = Bt(a, t), t = Fu(e.stateNode, t, 2), e = Zn(e, t, 2), e !== null && (ki(e, 2), rn(e));
  }
  function Ue(e, t, a) {
    if (e.tag === 3)
      Bm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Bn === null || !Bn.has(l))) {
            e = Bt(a, e), a = qd(2), l = Zn(t, a, 2), l !== null && ($d(
              a,
              l,
              t,
              e
            ), ki(l, 2), rn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function zs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new og();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(a) || (hs = !0, u.add(a), e = dg.bind(null, e, t, a), t.then(e, e));
  }
  function dg(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, qe === e && (Te & a) === a && (Pe === 4 || Pe === 3 && (Te & 62914560) === Te && 300 > vt() - Zr ? (Ne & 2) === 0 && ci(e, 0) : vs |= a, ui === Te && (ui = 0)), rn(e);
  }
  function qm(e, t) {
    t === 0 && (t = Zc()), e = fa(e, t), e !== null && (ki(e, t), rn(e));
  }
  function mg(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), qm(e, a);
  }
  function pg(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), qm(e, a);
  }
  function hg(e, t) {
    return Oa(e, t);
  }
  var qr = null, di = null, xs = !1, $r = !1, Ts = !1, Ln = 0;
  function rn(e) {
    e !== di && e.next === null && (di === null ? qr = di = e : di = di.next = e), $r = !0, xs || (xs = !0, yg());
  }
  function ul(e, t) {
    if (!Ts && $r) {
      Ts = !0;
      do
        for (var a = !1, l = qr; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var p = l.suspendedLanes, y = l.pingedLanes;
              c = (1 << 31 - te(42 | e) + 1) - 1, c &= u & ~(p & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, Gm(l, c));
          } else
            c = Te, c = Ql(
              l,
              l === qe ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || Ai(l, c) || (a = !0, Gm(l, c));
          l = l.next;
        }
      while (a);
      Ts = !1;
    }
  }
  function vg() {
    $m();
  }
  function $m() {
    $r = xs = !1;
    var e = 0;
    Ln !== 0 && Ag() && (e = Ln);
    for (var t = vt(), a = null, l = qr; l !== null; ) {
      var u = l.next, c = Lm(l, t);
      c === 0 ? (l.next = null, a === null ? qr = u : a.next = u, u === null && (di = a)) : (a = l, (e !== 0 || (c & 3) !== 0) && ($r = !0)), l = u;
    }
    rt !== 0 && rt !== 5 || ul(e), Ln !== 0 && (Ln = 0);
  }
  function Lm(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - te(c), y = 1 << p, S = u[p];
      S === -1 ? ((y & a) === 0 || (y & l) !== 0) && (u[p] = $v(y, t)) : S <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = qe, a = Te, a = Ql(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ei(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ai(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ei(l), Ho(a)) {
        case 2:
        case 8:
          a = $l;
          break;
        case 32:
          a = ja;
          break;
        case 268435456:
          a = ia;
          break;
        default:
          a = ja;
      }
      return l = Vm.bind(null, e), a = Oa(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ei(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Vm(e, t) {
    if (rt !== 0 && rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Br() && e.callbackNode !== a)
      return null;
    var l = Te;
    return l = Ql(
      e,
      e === qe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Em(e, l, t), Lm(e, vt()), e.callbackNode != null && e.callbackNode === a ? Vm.bind(null, e) : null);
  }
  function Gm(e, t) {
    if (Br()) return null;
    Em(e, t, !0);
  }
  function yg() {
    Cg(function() {
      (Ne & 6) !== 0 ? Oa(
        ql,
        vg
      ) : $m();
    });
  }
  function Es() {
    if (Ln === 0) {
      var e = Pa;
      e === 0 && (e = Ll, Ll <<= 1, (Ll & 261888) === 0 && (Ll = 256)), Ln = e;
    }
    return Ln;
  }
  function Qm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pl("" + e);
  }
  function Km(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function gg(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var c = Qm(
        (u[wt] || null).action
      ), p = l.submitter;
      p && (t = (t = p[wt] || null) ? Qm(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var y = new tr(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ln !== 0) {
                  var S = p ? Km(u, p) : new FormData(u);
                  Gu(
                    a,
                    {
                      pending: !0,
                      data: S,
                      method: u.method,
                      action: c
                    },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), S = p ? Km(u, p) : new FormData(u), Gu(
                  a,
                  {
                    pending: !0,
                    data: S,
                    method: u.method,
                    action: c
                  },
                  c,
                  S
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var As = 0; As < su.length; As++) {
    var ks = su[As], _g = ks.toLowerCase(), bg = ks[0].toUpperCase() + ks.slice(1);
    Pt(
      _g,
      "on" + bg
    );
  }
  Pt(Tf, "onAnimationEnd"), Pt(Ef, "onAnimationIteration"), Pt(Af, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(Ry, "onTransitionRun"), Pt(Uy, "onTransitionStart"), Pt(Yy, "onTransitionCancel"), Pt(kf, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), oa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), oa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), oa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), oa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), oa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), oa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var sl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Sg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl)
  );
  function Jm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], u = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var y = l[p], S = y.instance, C = y.currentTarget;
            if (y = y.listener, S !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = C;
            try {
              c(u);
            } catch (Z) {
              ir(Z);
            }
            u.currentTarget = null, c = S;
          }
        else
          for (p = 0; p < l.length; p++) {
            if (y = l[p], S = y.instance, C = y.currentTarget, y = y.listener, S !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = C;
            try {
              c(u);
            } catch (Z) {
              ir(Z);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function we(e, t) {
    var a = t[Bo];
    a === void 0 && (a = t[Bo] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Wm(t, e, 2, !1), a.add(l));
  }
  function Cs(e, t, a) {
    var l = 0;
    t && (l |= 4), Wm(
      a,
      e,
      l,
      t
    );
  }
  var Lr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ms(e) {
    if (!e[Lr]) {
      e[Lr] = !0, qc.forEach(function(a) {
        a !== "selectionchange" && (Sg.has(a) || Cs(a, !1, e), Cs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Lr] || (t[Lr] = !0, Cs("selectionchange", !1, t));
    }
  }
  function Wm(e, t, a, l) {
    switch (Tp(t)) {
      case 2:
        var u = Jg;
        break;
      case 8:
        u = Wg;
        break;
      default:
        u = Vs;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function Os(e, t, a, l, u) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var y = l.stateNode.containerInfo;
          if (y === u) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var S = p.tag;
              if ((S === 3 || S === 4) && p.stateNode.containerInfo === u)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (p = Da(y), p === null) return;
            if (S = p.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              l = c = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    ef(function() {
      var C = c, Z = Ko(a), Y = [];
      e: {
        var O = Cf.get(e);
        if (O !== void 0) {
          var j = tr, ne = e;
          switch (e) {
            case "keypress":
              if (Il(a) === 0) break e;
            case "keydown":
            case "keyup":
              j = py;
              break;
            case "focusin":
              ne = "focus", j = eu;
              break;
            case "focusout":
              ne = "blur", j = eu;
              break;
            case "beforeblur":
            case "afterblur":
              j = eu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = af;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = ny;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = yy;
              break;
            case Tf:
            case Ef:
            case Af:
              j = ly;
              break;
            case kf:
              j = _y;
              break;
            case "scroll":
            case "scrollend":
              j = ey;
              break;
            case "wheel":
              j = Sy;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = oy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = rf;
              break;
            case "toggle":
            case "beforetoggle":
              j = zy;
          }
          var fe = (t & 4) !== 0, He = !fe && (e === "scroll" || e === "scrollend"), T = fe ? O !== null ? O + "Capture" : null : O;
          fe = [];
          for (var z = C, k; z !== null; ) {
            var R = z;
            if (k = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || k === null || T === null || (R = Oi(z, T), R != null && fe.push(
              cl(z, R, k)
            )), He) break;
            z = z.return;
          }
          0 < fe.length && (O = new j(
            O,
            ne,
            null,
            a,
            Z
          ), Y.push({ event: O, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", O && a !== Qo && (ne = a.relatedTarget || a.fromElement) && (Da(ne) || ne[Na]))
            break e;
          if ((j || O) && (O = Z.window === Z ? Z : (O = Z.ownerDocument) ? O.defaultView || O.parentWindow : window, j ? (ne = a.relatedTarget || a.toElement, j = C, ne = ne ? Da(ne) : null, ne !== null && (He = f(ne), fe = ne.tag, ne !== He || fe !== 5 && fe !== 27 && fe !== 6) && (ne = null)) : (j = null, ne = C), j !== ne)) {
            if (fe = af, R = "onMouseLeave", T = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (fe = rf, R = "onPointerLeave", T = "onPointerEnter", z = "pointer"), He = j == null ? O : Mi(j), k = ne == null ? O : Mi(ne), O = new fe(
              R,
              z + "leave",
              j,
              a,
              Z
            ), O.target = He, O.relatedTarget = k, R = null, Da(Z) === C && (fe = new fe(
              T,
              z + "enter",
              ne,
              a,
              Z
            ), fe.target = k, fe.relatedTarget = He, R = fe), He = R, j && ne)
              t: {
                for (fe = wg, T = j, z = ne, k = 0, R = T; R; R = fe(R))
                  k++;
                R = 0;
                for (var oe = z; oe; oe = fe(oe))
                  R++;
                for (; 0 < k - R; )
                  T = fe(T), k--;
                for (; 0 < R - k; )
                  z = fe(z), R--;
                for (; k--; ) {
                  if (T === z || z !== null && T === z.alternate) {
                    fe = T;
                    break t;
                  }
                  T = fe(T), z = fe(z);
                }
                fe = null;
              }
            else fe = null;
            j !== null && Pm(
              Y,
              O,
              j,
              fe,
              !1
            ), ne !== null && He !== null && Pm(
              Y,
              He,
              ne,
              fe,
              !0
            );
          }
        }
        e: {
          if (O = C ? Mi(C) : window, j = O.nodeName && O.nodeName.toLowerCase(), j === "select" || j === "input" && O.type === "file")
            var Ce = pf;
          else if (df(O))
            if (hf)
              Ce = Ny;
            else {
              Ce = Oy;
              var ie = My;
            }
          else
            j = O.nodeName, !j || j.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? C && Go(C.elementType) && (Ce = pf) : Ce = jy;
          if (Ce && (Ce = Ce(e, C))) {
            mf(
              Y,
              Ce,
              a,
              Z
            );
            break e;
          }
          ie && ie(e, O, C), e === "focusout" && C && O.type === "number" && C.memoizedProps.value != null && Vo(O, "number", O.value);
        }
        switch (ie = C ? Mi(C) : window, e) {
          case "focusin":
            (df(ie) || ie.contentEditable === "true") && ($a = ie, ru = C, Xi = null);
            break;
          case "focusout":
            Xi = ru = $a = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, zf(Y, a, Z);
            break;
          case "selectionchange":
            if (Zy) break;
          case "keydown":
          case "keyup":
            zf(Y, a, Z);
        }
        var ge;
        if (nu)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          qa ? cf(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (of && a.locale !== "ko" && (qa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && qa && (ge = tf()) : (kn = Z, Po = "value" in kn ? kn.value : kn.textContent, qa = !0)), ie = Vr(C, Ee), 0 < ie.length && (Ee = new lf(
          Ee,
          e,
          null,
          a,
          Z
        ), Y.push({ event: Ee, listeners: ie }), ge ? Ee.data = ge : (ge = ff(a), ge !== null && (Ee.data = ge)))), (ge = Ty ? Ey(e, a) : Ay(e, a)) && (Ee = Vr(C, "onBeforeInput"), 0 < Ee.length && (ie = new lf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          Z
        ), Y.push({
          event: ie,
          listeners: Ee
        }), ie.data = ge)), gg(
          Y,
          e,
          C,
          a,
          Z
        );
      }
      Jm(Y, t);
    });
  }
  function cl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Vr(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var u = e, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Oi(e, a), u != null && l.unshift(
        cl(e, u, c)
      ), u = Oi(e, t), u != null && l.push(
        cl(e, u, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function wg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Pm(e, t, a, l, u) {
    for (var c = t._reactName, p = []; a !== null && a !== l; ) {
      var y = a, S = y.alternate, C = y.stateNode;
      if (y = y.tag, S !== null && S === l) break;
      y !== 5 && y !== 26 && y !== 27 || C === null || (S = C, u ? (C = Oi(a, c), C != null && p.unshift(
        cl(a, C, S)
      )) : u || (C = Oi(a, c), C != null && p.push(
        cl(a, C, S)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var zg = /\r\n?/g, xg = /\u0000|\uFFFD/g;
  function Fm(e) {
    return (typeof e == "string" ? e : "" + e).replace(zg, `
`).replace(xg, "");
  }
  function Im(e, t) {
    return t = Fm(t), Fm(e) === t;
  }
  function Xe(e, t, a, l, u, c) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Xa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Xa(e, "" + l);
        break;
      case "className":
        Jl(e, "class", l);
        break;
      case "tabIndex":
        Jl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jl(e, a, l);
        break;
      case "style":
        Fc(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Jl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Pl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (a === "formAction" ? (t !== "input" && Xe(e, t, "name", u.name, u, null), Xe(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Xe(e, t, "encType", u.encType, u, null), Xe(e, t, "method", u.method, u, null), Xe(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Pl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = sn);
        break;
      case "onScroll":
        l != null && we("scroll", e);
        break;
      case "onScrollEnd":
        l != null && we("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Pl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        we("beforetoggle", e), we("toggle", e), Kl(e, "popover", l);
        break;
      case "xlinkActuate":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Kl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Fv.get(a) || a, Kl(e, a, l));
    }
  }
  function js(e, t, a, l, u, c) {
    switch (a) {
      case "style":
        Fc(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Xa(e, l) : (typeof l == "number" || typeof l == "bigint") && Xa(e, "" + l);
        break;
      case "onScroll":
        l != null && we("scroll", e);
        break;
      case "onScrollEnd":
        l != null && we("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = sn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!$c.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), c = e[wt] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof l == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, u);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Kl(e, a, l);
          }
    }
  }
  function mt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        we("error", e), we("load", e);
        var l = !1, u = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var p = a[c];
            if (p != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Xe(e, t, c, p, a, null);
              }
          }
        u && Xe(e, t, "srcSet", a.srcSet, a, null), l && Xe(e, t, "src", a.src, a, null);
        return;
      case "input":
        we("invalid", e);
        var y = c = p = u = null, S = null, C = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var Z = a[l];
            if (Z != null)
              switch (l) {
                case "name":
                  u = Z;
                  break;
                case "type":
                  p = Z;
                  break;
                case "checked":
                  S = Z;
                  break;
                case "defaultChecked":
                  C = Z;
                  break;
                case "value":
                  c = Z;
                  break;
                case "defaultValue":
                  y = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Xe(e, t, l, Z, a, null);
              }
          }
        Kc(
          e,
          c,
          y,
          S,
          C,
          p,
          u,
          !1
        );
        return;
      case "select":
        we("invalid", e), l = p = c = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (y = a[u], y != null))
            switch (u) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                p = y;
                break;
              case "multiple":
                l = y;
              default:
                Xe(e, t, u, y, a, null);
            }
        t = c, a = p, e.multiple = !!l, t != null ? Ya(e, !!l, t, !1) : a != null && Ya(e, !!l, a, !0);
        return;
      case "textarea":
        we("invalid", e), c = u = l = null;
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null))
            switch (p) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                u = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                Xe(e, t, p, y, a, null);
            }
        Wc(e, l, u, c);
        return;
      case "option":
        for (S in a)
          a.hasOwnProperty(S) && (l = a[S], l != null) && (S === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Xe(e, t, S, l, a, null));
        return;
      case "dialog":
        we("beforetoggle", e), we("toggle", e), we("cancel", e), we("close", e);
        break;
      case "iframe":
      case "object":
        we("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < sl.length; l++)
          we(sl[l], e);
        break;
      case "image":
        we("error", e), we("load", e);
        break;
      case "details":
        we("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        we("error", e), we("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in a)
          if (a.hasOwnProperty(C) && (l = a[C], l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Xe(e, t, C, l, a, null);
            }
        return;
      default:
        if (Go(t)) {
          for (Z in a)
            a.hasOwnProperty(Z) && (l = a[Z], l !== void 0 && js(
              e,
              t,
              Z,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && (l = a[y], l != null && Xe(e, t, y, l, a, null));
  }
  function Tg(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, c = null, p = null, y = null, S = null, C = null, Z = null;
        for (j in a) {
          var Y = a[j];
          if (a.hasOwnProperty(j) && Y != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Y;
              default:
                l.hasOwnProperty(j) || Xe(e, t, j, null, l, Y);
            }
        }
        for (var O in l) {
          var j = l[O];
          if (Y = a[O], l.hasOwnProperty(O) && (j != null || Y != null))
            switch (O) {
              case "type":
                c = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                C = j;
                break;
              case "defaultChecked":
                Z = j;
                break;
              case "value":
                p = j;
                break;
              case "defaultValue":
                y = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, t));
                break;
              default:
                j !== Y && Xe(
                  e,
                  t,
                  O,
                  j,
                  l,
                  Y
                );
            }
        }
        Lo(
          e,
          p,
          y,
          S,
          C,
          Z,
          c,
          u
        );
        return;
      case "select":
        j = p = y = O = null;
        for (c in a)
          if (S = a[c], a.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                l.hasOwnProperty(c) || Xe(
                  e,
                  t,
                  c,
                  null,
                  l,
                  S
                );
            }
        for (u in l)
          if (c = l[u], S = a[u], l.hasOwnProperty(u) && (c != null || S != null))
            switch (u) {
              case "value":
                O = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== S && Xe(
                  e,
                  t,
                  u,
                  c,
                  l,
                  S
                );
            }
        t = y, a = p, l = j, O != null ? Ya(e, !!a, O, !1) : !!l != !!a && (t != null ? Ya(e, !!a, t, !0) : Ya(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        j = O = null;
        for (y in a)
          if (u = a[y], a.hasOwnProperty(y) && u != null && !l.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, y, null, l, u);
            }
        for (p in l)
          if (u = l[p], c = a[p], l.hasOwnProperty(p) && (u != null || c != null))
            switch (p) {
              case "value":
                O = u;
                break;
              case "defaultValue":
                j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== c && Xe(e, t, p, u, l, c);
            }
        Jc(e, O, j);
        return;
      case "option":
        for (var ne in a)
          O = a[ne], a.hasOwnProperty(ne) && O != null && !l.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : Xe(
            e,
            t,
            ne,
            null,
            l,
            O
          ));
        for (S in l)
          O = l[S], j = a[S], l.hasOwnProperty(S) && O !== j && (O != null || j != null) && (S === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Xe(
            e,
            t,
            S,
            O,
            l,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var fe in a)
          O = a[fe], a.hasOwnProperty(fe) && O != null && !l.hasOwnProperty(fe) && Xe(e, t, fe, null, l, O);
        for (C in l)
          if (O = l[C], j = a[C], l.hasOwnProperty(C) && O !== j && (O != null || j != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  C,
                  O,
                  l,
                  j
                );
            }
        return;
      default:
        if (Go(t)) {
          for (var He in a)
            O = a[He], a.hasOwnProperty(He) && O !== void 0 && !l.hasOwnProperty(He) && js(
              e,
              t,
              He,
              void 0,
              l,
              O
            );
          for (Z in l)
            O = l[Z], j = a[Z], !l.hasOwnProperty(Z) || O === j || O === void 0 && j === void 0 || js(
              e,
              t,
              Z,
              O,
              l,
              j
            );
          return;
        }
    }
    for (var T in a)
      O = a[T], a.hasOwnProperty(T) && O != null && !l.hasOwnProperty(T) && Xe(e, t, T, null, l, O);
    for (Y in l)
      O = l[Y], j = a[Y], !l.hasOwnProperty(Y) || O === j || O == null && j == null || Xe(e, t, Y, O, l, j);
  }
  function ep(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Eg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var u = a[l], c = u.transferSize, p = u.initiatorType, y = u.duration;
        if (c && y && ep(p)) {
          for (p = 0, y = u.responseEnd, l += 1; l < a.length; l++) {
            var S = a[l], C = S.startTime;
            if (C > y) break;
            var Z = S.transferSize, Y = S.initiatorType;
            Z && ep(Y) && (S = S.responseEnd, p += Z * (S < y ? 1 : (y - C) / (S - C)));
          }
          if (--l, t += 8 * (c + p) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ns = null, Ds = null;
  function Gr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function tp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function np(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Zs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Rs = null;
  function Ag() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Rs ? !1 : (Rs = e, !0) : (Rs = null, !1);
  }
  var ap = typeof setTimeout == "function" ? setTimeout : void 0, kg = typeof clearTimeout == "function" ? clearTimeout : void 0, ip = typeof Promise == "function" ? Promise : void 0, Cg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ip < "u" ? function(e) {
    return ip.resolve(null).then(e).catch(Mg);
  } : ap;
  function Mg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vn(e) {
    return e === "head";
  }
  function lp(e, t) {
    var a = t, l = 0;
    do {
      var u = a.nextSibling;
      if (e.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(u), vi(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          fl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, fl(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, y = c.nodeName;
            c[Ci] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && fl(e.ownerDocument.body);
      a = u;
    } while (a);
    vi(t);
  }
  function rp(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function Us(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Us(a), qo(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Og(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ci])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Gt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function jg(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function op(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ys(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Xs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ng(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Hs = null;
  function up(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Gt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function sp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function cp(e, t, a) {
    switch (t = Gr(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function fl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    qo(e);
  }
  var Qt = /* @__PURE__ */ new Map(), fp = /* @__PURE__ */ new Set();
  function Qr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Tn = q.d;
  q.d = {
    f: Dg,
    r: Zg,
    D: Rg,
    C: Ug,
    L: Yg,
    m: Xg,
    X: Bg,
    S: Hg,
    M: qg
  };
  function Dg() {
    var e = Tn.f(), t = Yr();
    return e || t;
  }
  function Zg(e) {
    var t = Za(e);
    t !== null && t.tag === 5 && t.type === "form" ? kd(t) : Tn.r(e);
  }
  var mi = typeof document > "u" ? null : document;
  function dp(e, t, a) {
    var l = mi;
    if (l && typeof t == "string" && t) {
      var u = Xt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), fp.has(u) || (fp.add(u), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), mt(t, "link", e), ot(t), l.head.appendChild(t)));
    }
  }
  function Rg(e) {
    Tn.D(e), dp("dns-prefetch", e, null);
  }
  function Ug(e, t) {
    Tn.C(e, t), dp("preconnect", e, t);
  }
  function Yg(e, t, a) {
    Tn.L(e, t, a);
    var l = mi;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Xt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Xt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Xt(e) + '"]';
      var c = u;
      switch (t) {
        case "style":
          c = pi(e);
          break;
        case "script":
          c = hi(e);
      }
      Qt.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Qt.set(c, e), l.querySelector(u) !== null || t === "style" && l.querySelector(dl(c)) || t === "script" && l.querySelector(ml(c)) || (t = l.createElement("link"), mt(t, "link", e), ot(t), l.head.appendChild(t)));
    }
  }
  function Xg(e, t) {
    Tn.m(e, t);
    var a = mi;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Xt(l) + '"][href="' + Xt(e) + '"]', c = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = hi(e);
      }
      if (!Qt.has(c) && (e = b({ rel: "modulepreload", href: e }, t), Qt.set(c, e), a.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ml(c)))
              return;
        }
        l = a.createElement("link"), mt(l, "link", e), ot(l), a.head.appendChild(l);
      }
    }
  }
  function Hg(e, t, a) {
    Tn.S(e, t, a);
    var l = mi;
    if (l && e) {
      var u = Ra(l).hoistableStyles, c = pi(e);
      t = t || "default";
      var p = u.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = l.querySelector(
          dl(c)
        ))
          y.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Qt.get(c)) && Bs(e, a);
          var S = p = l.createElement("link");
          ot(S), mt(S, "link", e), S._p = new Promise(function(C, Z) {
            S.onload = C, S.onerror = Z;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Kr(p, t, l);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: y
        }, u.set(c, p);
      }
    }
  }
  function Bg(e, t) {
    Tn.X(e, t);
    var a = mi;
    if (a && e) {
      var l = Ra(a).hoistableScripts, u = hi(e), c = l.get(u);
      c || (c = a.querySelector(ml(u)), c || (e = b({ src: e, async: !0 }, t), (t = Qt.get(u)) && qs(e, t), c = a.createElement("script"), ot(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function qg(e, t) {
    Tn.M(e, t);
    var a = mi;
    if (a && e) {
      var l = Ra(a).hoistableScripts, u = hi(e), c = l.get(u);
      c || (c = a.querySelector(ml(u)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = Qt.get(u)) && qs(e, t), c = a.createElement("script"), ot(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function mp(e, t, a, l) {
    var u = (u = ve.current) ? Qr(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = pi(a.href), a = Ra(
          u
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = pi(a.href);
          var c = Ra(
            u
          ).hoistableStyles, p = c.get(e);
          if (p || (u = u.ownerDocument || u, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = u.querySelector(
            dl(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Qt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Qt.set(e, a), c || $g(
            u,
            e,
            a,
            p.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return p;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = hi(a), a = Ra(
          u
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function pi(e) {
    return 'href="' + Xt(e) + '"';
  }
  function dl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function pp(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function $g(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), mt(t, "link", a), ot(t), e.head.appendChild(t));
  }
  function hi(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function ml(e) {
    return "script[async]" + e;
  }
  function hp(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Xt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, ot(l), l;
          var u = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ot(l), mt(l, "style", u), Kr(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          u = pi(a.href);
          var c = e.querySelector(
            dl(u)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ot(c), c;
          l = pp(a), (u = Qt.get(u)) && Bs(l, u), c = (e.ownerDocument || e).createElement("link"), ot(c);
          var p = c;
          return p._p = new Promise(function(y, S) {
            p.onload = y, p.onerror = S;
          }), mt(c, "link", l), t.state.loading |= 4, Kr(c, a.precedence, e), t.instance = c;
        case "script":
          return c = hi(a.src), (u = e.querySelector(
            ml(c)
          )) ? (t.instance = u, ot(u), u) : (l = a, (u = Qt.get(c)) && (l = b({}, a), qs(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), ot(u), mt(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Kr(l, a.precedence, e));
    return t.instance;
  }
  function Kr(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, c = u, p = 0; p < l.length; p++) {
      var y = l[p];
      if (y.dataset.precedence === t) c = y;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Bs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Jr = null;
  function vp(e, t, a) {
    if (Jr === null) {
      var l = /* @__PURE__ */ new Map(), u = Jr = /* @__PURE__ */ new Map();
      u.set(a, l);
    } else
      u = Jr, l = u.get(a), l || (l = /* @__PURE__ */ new Map(), u.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var c = a[u];
      if (!(c[Ci] || c[st] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var y = l.get(p);
        y ? y.push(c) : l.set(p, [c]);
      }
    }
    return l;
  }
  function yp(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Lg(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function gp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Vg(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = pi(l.href), c = t.querySelector(
          dl(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Wr.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, ot(c);
          return;
        }
        c = t.ownerDocument || t, l = pp(l), (u = Qt.get(u)) && Bs(l, u), c = c.createElement("link"), ot(c);
        var p = c;
        p._p = new Promise(function(y, S) {
          p.onload = y, p.onerror = S;
        }), mt(c, "link", l), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Wr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var $s = 0;
  function Gg(e, t) {
    return e.stylesheets && e.count === 0 && Fr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Fr(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && $s === 0 && ($s = 62500 * Eg());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Fr(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > $s ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Wr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Fr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Pr = null;
  function Fr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Pr = /* @__PURE__ */ new Map(), t.forEach(Qg, e), Pr = null, Wr.call(e));
  }
  function Qg(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Pr.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Pr.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var p = u[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), l = p);
        }
        l && a.set(null, l);
      }
      u = t.instance, p = u.getAttribute("data-precedence"), c = a.get(p) || l, c === l && a.set(null, u), a.set(p, u), this.count++, l = Wr.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var pl = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function Kg(e, t, a, l, u, c, p, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.hiddenUpdates = Yo(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _p(e, t, a, l, u, c, p, y, S, C, Z, Y) {
    return e = new Kg(
      e,
      t,
      a,
      p,
      S,
      C,
      Z,
      Y,
      y
    ), t = 1, c === !0 && (t |= 24), c = Ot(3, null, null, t), e.current = c, c.stateNode = e, t = wu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Eu(c), e;
  }
  function bp(e) {
    return e ? (e = Ga, e) : Ga;
  }
  function Sp(e, t, a, l, u, c) {
    u = bp(u), l.context === null ? l.context = u : l.pendingContext = u, l = Dn(t), l.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (l.callback = c), a = Zn(e, l, t), a !== null && (kt(a, e, t), Gi(a, e, t));
  }
  function wp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ls(e, t) {
    wp(e, t), (e = e.alternate) && wp(e, t);
  }
  function zp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = fa(e, 67108864);
      t !== null && kt(t, e, 67108864), Ls(e, 67108864);
    }
  }
  function xp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = Xo(t);
      var a = fa(e, t);
      a !== null && kt(a, e, t), Ls(e, t);
    }
  }
  var Ir = !0;
  function Jg(e, t, a, l) {
    var u = A.T;
    A.T = null;
    var c = q.p;
    try {
      q.p = 2, Vs(e, t, a, l);
    } finally {
      q.p = c, A.T = u;
    }
  }
  function Wg(e, t, a, l) {
    var u = A.T;
    A.T = null;
    var c = q.p;
    try {
      q.p = 8, Vs(e, t, a, l);
    } finally {
      q.p = c, A.T = u;
    }
  }
  function Vs(e, t, a, l) {
    if (Ir) {
      var u = Gs(l);
      if (u === null)
        Os(
          e,
          t,
          l,
          eo,
          a
        ), Ep(e, l);
      else if (Fg(
        u,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Ep(e, l), t & 4 && -1 < Pg.indexOf(e)) {
        for (; u !== null; ) {
          var c = Za(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = ra(c.pendingLanes);
                  if (p !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var S = 1 << 31 - te(p);
                      y.entanglements[1] |= S, p &= ~S;
                    }
                    rn(c), (Ne & 6) === 0 && (Rr = vt() + 500, ul(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = fa(c, 2), y !== null && kt(y, c, 2), Yr(), Ls(c, 2);
            }
          if (c = Gs(l), c === null && Os(
            e,
            t,
            l,
            eo,
            a
          ), c === u) break;
          u = c;
        }
        u !== null && l.stopPropagation();
      } else
        Os(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Gs(e) {
    return e = Ko(e), Qs(e);
  }
  var eo = null;
  function Qs(e) {
    if (eo = null, e = Da(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return eo = e, null;
  }
  function Tp(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Do()) {
          case ql:
            return 2;
          case $l:
            return 8;
          case ja:
          case Zo:
            return 32;
          case ia:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ks = !1, Gn = null, Qn = null, Kn = null, hl = /* @__PURE__ */ new Map(), vl = /* @__PURE__ */ new Map(), Jn = [], Pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ep(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        hl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vl.delete(t.pointerId);
    }
  }
  function yl(e, t, a, l, u, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [u]
    }, t !== null && (t = Za(t), t !== null && zp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function Fg(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return Gn = yl(
          Gn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "dragenter":
        return Qn = yl(
          Qn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "mouseover":
        return Kn = yl(
          Kn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return hl.set(
          c,
          yl(
            hl.get(c) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, vl.set(
          c,
          yl(
            vl.get(c) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Ap(e) {
    var t = Da(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, Hc(e.priority, function() {
              xp(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, Hc(e.priority, function() {
              xp(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function to(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Gs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Qo = l, a.target.dispatchEvent(l), Qo = null;
      } else
        return t = Za(a), t !== null && zp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function kp(e, t, a) {
    to(e) && a.delete(t);
  }
  function Ig() {
    Ks = !1, Gn !== null && to(Gn) && (Gn = null), Qn !== null && to(Qn) && (Qn = null), Kn !== null && to(Kn) && (Kn = null), hl.forEach(kp), vl.forEach(kp);
  }
  function no(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Ig
    )));
  }
  var ao = null;
  function Cp(e) {
    ao !== e && (ao = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        ao === e && (ao = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (Qs(l || a) === null)
              continue;
            break;
          }
          var c = Za(a);
          c !== null && (e.splice(t, 3), t -= 3, Gu(
            c,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function vi(e) {
    function t(S) {
      return no(S, e);
    }
    Gn !== null && no(Gn, e), Qn !== null && no(Qn, e), Kn !== null && no(Kn, e), hl.forEach(t), vl.forEach(t);
    for (var a = 0; a < Jn.length; a++) {
      var l = Jn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Jn.length && (a = Jn[0], a.blockedOn === null); )
      Ap(a), a.blockedOn === null && Jn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var u = a[l], c = a[l + 1], p = u[wt] || null;
        if (typeof c == "function")
          p || Cp(a);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, p = c[wt] || null)
              y = p.formAction;
            else if (Qs(u) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? a[l + 1] = y : (a.splice(l, 3), l -= 3), Cp(a);
        }
      }
  }
  function Mp() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(p) {
            return u = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Js(e) {
    this._internalRoot = e;
  }
  io.prototype.render = Js.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Rt();
    Sp(a, l, e, t, null, null);
  }, io.prototype.unmount = Js.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Sp(e.current, 2, null, e, null, null), Yr(), t[Na] = null;
    }
  };
  function io(e) {
    this._internalRoot = e;
  }
  io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Jn.length && t !== 0 && t < Jn[a].priority; a++) ;
      Jn.splice(a, 0, e), a === 0 && Ap(e);
    }
  };
  var Op = i.version;
  if (Op !== "19.2.8")
    throw Error(
      o(
        527,
        Op,
        "19.2.8"
      )
    );
  q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var e_ = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lo.isDisabled && lo.supportsFiber)
      try {
        la = lo.inject(
          e_
        ), X = lo;
      } catch {
      }
  }
  return _l.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var a = !1, l = "", u = Yd, c = Xd, p = Hd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = _p(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      u,
      c,
      p,
      Mp
    ), e[Na] = t.current, Ms(e), new Js(t);
  }, _l.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", c = Yd, p = Xd, y = Hd, S = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (S = a.formState)), t = _p(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      u,
      S,
      c,
      p,
      y,
      Mp
    ), t.context = bp(null), a = t.current, l = Rt(), l = Xo(l), u = Dn(l), u.callback = null, Zn(a, u, l), a = l, t.current.lanes = a, ki(t, a), rn(t), e[Na] = t.current, Ms(e), new io(t);
  }, _l.version = "19.2.8", _l;
}
var Bp;
function c_() {
  if (Bp) return Ps.exports;
  Bp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Ps.exports = s_(), Ps.exports;
}
var f_ = c_();
const d_ = /* @__PURE__ */ Dh(f_);
var ae = bc();
const ko = /* @__PURE__ */ Dh(ae);
const Zh = (...n) => n.filter((i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim();
const m_ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const p_ = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, o) => o ? o.toUpperCase() : r.toLowerCase()
);
const qp = (n) => {
  const i = p_(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var h_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const v_ = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const y_ = ae.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, h) => ae.createElement(
    "svg",
    {
      ref: h,
      ...h_,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(r) * 24 / Number(i) : r,
      className: Zh("lucide", s),
      ...!f && !v_(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([v, _]) => ae.createElement(v, _)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const Ze = (n, i) => {
  const r = ae.forwardRef(
    ({ className: o, ...s }, f) => ae.createElement(y_, {
      ref: f,
      iconNode: i,
      className: Zh(
        `lucide-${m_(qp(n))}`,
        `lucide-${n}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = qp(n), r;
};
const g_ = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Rh = Ze("arrow-down-to-line", g_);
const __ = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], $p = Ze("arrow-down", __);
const b_ = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], S_ = Ze("arrow-up-from-line", b_);
const w_ = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Lp = Ze("arrow-up", w_);
const z_ = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], x_ = Ze("battery", z_);
const T_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], E_ = Ze("check", T_);
const A_ = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], k_ = Ze("clock-3", A_);
const C_ = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
], M_ = Ze("droplets", C_);
const O_ = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], j_ = Ze("eraser", O_);
const N_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], D_ = Ze("history", N_);
const Z_ = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Vp = Ze("house", Z_);
const R_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Gp = Ze("loader-circle", R_);
const U_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Y_ = Ze("lock-open", U_);
const X_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Uh = Ze("lock", X_);
const H_ = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], B_ = Ze("map-pin", H_);
const q_ = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], $_ = Ze("pause", q_);
const L_ = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Yh = Ze("play", L_);
const V_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Qp = Ze("plus", V_);
const G_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Sc = Ze("rotate-ccw", G_);
const Q_ = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], K_ = Ze("scan-line", Q_);
const J_ = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], W_ = Ze("sliders-horizontal", J_);
const P_ = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], dc = Ze("sparkles", P_);
const F_ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], I_ = Ze("square", F_);
const e0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], t0 = Ze("timer", e0);
const n0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], go = Ze("trash-2", n0);
const a0 = [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
], Kp = Ze("waves", a0);
const i0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Jp = Ze("wind", i0);
const l0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], wc = Ze("x", l0);
const r0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], o0 = Ze("zoom-in", r0);
const u0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], s0 = Ze("zoom-out", u0);
var Wp;
function U(n, i, r) {
  function o(m, h) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: h,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(n))
      return;
    m._zod.traits.add(n), i(m, h);
    const v = d.prototype, _ = Object.keys(v);
    for (let b = 0; b < _.length; b++) {
      const x = _[b];
      x in m || (m[x] = v[x].bind(m));
    }
  }
  const s = r?.Parent ?? Object;
  class f extends s {
  }
  Object.defineProperty(f, "name", { value: n });
  function d(m) {
    var h;
    const v = r?.Parent ? new f() : this;
    o(v, m), (h = v._zod).deferred ?? (h.deferred = []);
    for (const _ of v._zod.deferred)
      _();
    return v;
  }
  return Object.defineProperty(d, "init", { value: o }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (m) => r?.Parent && m instanceof r.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(d, "name", { value: n }), d;
}
class _i extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Xh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Wp = globalThis).__zod_globalConfig ?? (Wp.__zod_globalConfig = {});
const zc = globalThis.__zod_globalConfig;
function Aa(n) {
  return zc;
}
function Hh(n) {
  const i = Object.values(n).filter((o) => typeof o == "number");
  return Object.entries(n).filter(([o, s]) => i.indexOf(+o) === -1).map(([o, s]) => s);
}
function mc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function xc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Tc(n) {
  return n == null;
}
function Ec(n) {
  const i = n.startsWith("^") ? 1 : 0, r = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, r);
}
function c0(n, i) {
  const r = n / i, o = Math.round(r), s = Number.EPSILON * Math.max(Math.abs(r), 1);
  return Math.abs(r - o) < s ? 0 : r - o;
}
const Pp = /* @__PURE__ */ Symbol("evaluating");
function Be(n, i, r) {
  let o;
  Object.defineProperty(n, i, {
    get() {
      if (o !== Pp)
        return o === void 0 && (o = Pp, o = r()), o;
    },
    set(s) {
      Object.defineProperty(n, i, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ca(n, i, r) {
  Object.defineProperty(n, i, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function In(...n) {
  const i = {};
  for (const r of n) {
    const o = Object.getOwnPropertyDescriptors(r);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function Fp(n) {
  return JSON.stringify(n);
}
function f0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Bh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function _o(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const d0 = /* @__PURE__ */ xc(() => {
  if (zc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Cl(n) {
  if (_o(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const r = i.prototype;
  return !(_o(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function qh(n) {
  return Cl(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const m0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function bi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ea(n, i, r) {
  const o = new n._zod.constr(i ?? n._zod.def);
  return (!i || r?.parent) && (o._zod.parent = n), o;
}
function ue(n) {
  const i = n;
  if (!i)
    return {};
  if (typeof i == "string")
    return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function p0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const h0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function v0(n, i) {
  const r = n._zod.def, o = r.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const f = In(n._zod.def, {
    get shape() {
      const d = {};
      for (const m in i) {
        if (!(m in r.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (d[m] = r.shape[m]);
      }
      return Ca(this, "shape", d), d;
    },
    checks: []
  });
  return ea(n, f);
}
function y0(n, i) {
  const r = n._zod.def, o = r.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const f = In(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape };
      for (const m in i) {
        if (!(m in r.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete d[m];
      }
      return Ca(this, "shape", d), d;
    },
    checks: []
  });
  return ea(n, f);
}
function g0(n, i) {
  if (!Cl(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = n._zod.def.checks;
  if (r && r.length > 0) {
    const f = n._zod.def.shape;
    for (const d in i)
      if (Object.getOwnPropertyDescriptor(f, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = In(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape, ...i };
      return Ca(this, "shape", f), f;
    }
  });
  return ea(n, s);
}
function _0(n, i) {
  if (!Cl(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = In(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...i };
      return Ca(this, "shape", o), o;
    }
  });
  return ea(n, r);
}
function b0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const r = In(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...i._zod.def.shape };
      return Ca(this, "shape", o), o;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return ea(n, r);
}
function S0(n, i, r) {
  const s = i._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const d = In(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, h = { ...m };
      if (r)
        for (const v in r) {
          if (!(v in m))
            throw new Error(`Unrecognized key: "${v}"`);
          r[v] && (h[v] = n ? new n({
            type: "optional",
            innerType: m[v]
          }) : m[v]);
        }
      else
        for (const v in m)
          h[v] = n ? new n({
            type: "optional",
            innerType: m[v]
          }) : m[v];
      return Ca(this, "shape", h), h;
    },
    checks: []
  });
  return ea(i, d);
}
function w0(n, i, r) {
  const o = In(i._zod.def, {
    get shape() {
      const s = i._zod.def.shape, f = { ...s };
      if (r)
        for (const d in r) {
          if (!(d in f))
            throw new Error(`Unrecognized key: "${d}"`);
          r[d] && (f[d] = new n({
            type: "nonoptional",
            innerType: s[d]
          }));
        }
      else
        for (const d in s)
          f[d] = new n({
            type: "nonoptional",
            innerType: s[d]
          });
      return Ca(this, "shape", f), f;
    }
  });
  return ea(i, o);
}
function yi(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function z0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue === !1)
      return !0;
  return !1;
}
function $h(n, i) {
  return i.map((r) => {
    var o;
    return (o = r).path ?? (o.path = []), r.path.unshift(n), r;
  });
}
function ro(n) {
  return typeof n == "string" ? n : n?.message;
}
function ka(n, i, r) {
  const o = n.message ? n.message : ro(n.inst?._zod.def?.error?.(n)) ?? ro(i?.error?.(n)) ?? ro(r.customError?.(n)) ?? ro(r.localeError?.(n)) ?? "Invalid input", { inst: s, continue: f, input: d, ...m } = n;
  return m.path ?? (m.path = []), m.message = o, i?.reportInput && (m.input = d), m;
}
function Ac(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Ml(...n) {
  const [i, r, o] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: r,
    inst: o
  } : { ...i };
}
const Lh = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, mc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Vh = U("$ZodError", Lh), Gh = U("$ZodError", Lh, { Parent: Error });
function x0(n, i = (r) => r.message) {
  const r = {}, o = [];
  for (const s of n.issues)
    s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(i(s))) : o.push(i(s));
  return { formErrors: o, fieldErrors: r };
}
function T0(n, i = (r) => r.message) {
  const r = { _errors: [] }, o = (s, f = []) => {
    for (const d of s.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((m) => o({ issues: m }, [...f, ...d.path]));
      else if (d.code === "invalid_key")
        o({ issues: d.issues }, [...f, ...d.path]);
      else if (d.code === "invalid_element")
        o({ issues: d.issues }, [...f, ...d.path]);
      else {
        const m = [...f, ...d.path];
        if (m.length === 0)
          r._errors.push(i(d));
        else {
          let h = r, v = 0;
          for (; v < m.length; ) {
            const _ = m[v];
            v === m.length - 1 ? (h[_] = h[_] || { _errors: [] }, h[_]._errors.push(i(d))) : h[_] = h[_] || { _errors: [] }, h = h[_], v++;
          }
        }
      }
  };
  return o(n), r;
}
const kc = (n) => (i, r, o, s) => {
  const f = o ? { ...o, async: !1 } : { async: !1 }, d = i._zod.run({ value: r, issues: [] }, f);
  if (d instanceof Promise)
    throw new _i();
  if (d.issues.length) {
    const m = new (s?.Err ?? n)(d.issues.map((h) => ka(h, f, Aa())));
    throw Bh(m, s?.callee), m;
  }
  return d.value;
}, Cc = (n) => async (i, r, o, s) => {
  const f = o ? { ...o, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: r, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const m = new (s?.Err ?? n)(d.issues.map((h) => ka(h, f, Aa())));
    throw Bh(m, s?.callee), m;
  }
  return d.value;
}, Co = (n) => (i, r, o) => {
  const s = o ? { ...o, async: !1 } : { async: !1 }, f = i._zod.run({ value: r, issues: [] }, s);
  if (f instanceof Promise)
    throw new _i();
  return f.issues.length ? {
    success: !1,
    error: new (n ?? Vh)(f.issues.map((d) => ka(d, s, Aa())))
  } : { success: !0, data: f.value };
}, E0 = /* @__PURE__ */ Co(Gh), Mo = (n) => async (i, r, o) => {
  const s = o ? { ...o, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: r, issues: [] }, s);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new n(f.issues.map((d) => ka(d, s, Aa())))
  } : { success: !0, data: f.value };
}, A0 = /* @__PURE__ */ Mo(Gh), k0 = (n) => (i, r, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return kc(n)(i, r, s);
}, C0 = (n) => (i, r, o) => kc(n)(i, r, o), M0 = (n) => async (i, r, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Cc(n)(i, r, s);
}, O0 = (n) => async (i, r, o) => Cc(n)(i, r, o), j0 = (n) => (i, r, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Co(n)(i, r, s);
}, N0 = (n) => (i, r, o) => Co(n)(i, r, o), D0 = (n) => async (i, r, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Mo(n)(i, r, s);
}, Z0 = (n) => async (i, r, o) => Mo(n)(i, r, o), R0 = /^[cC][0-9a-z]{6,}$/, U0 = /^[0-9a-z]+$/, Y0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, X0 = /^[0-9a-vA-V]{20}$/, H0 = /^[A-Za-z0-9]{27}$/, B0 = /^[a-zA-Z0-9_-]{21}$/, q0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, $0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ip = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, L0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, V0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function G0() {
  return new RegExp(V0, "u");
}
const Q0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, K0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, J0 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, W0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, P0 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qh = /^[A-Za-z0-9_-]*$/, F0 = /^https?$/, I0 = /^\+[1-9]\d{6,14}$/, Kh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", eb = /* @__PURE__ */ new RegExp(`^${Kh}$`);
function Jh(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function tb(n) {
  return new RegExp(`^${Jh(n)}$`);
}
function nb(n) {
  const i = Jh({ precision: n.precision }), r = ["Z"];
  n.local && r.push(""), n.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${i}(?:${r.join("|")})`;
  return new RegExp(`^${Kh}T(?:${o})$`);
}
const ab = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, ib = /^-?\d+$/, lb = /^-?\d+(?:\.\d+)?$/, rb = /^(?:true|false)$/i, ob = /^[^A-Z]*$/, ub = /^[^a-z]*$/, Ct = /* @__PURE__ */ U("$ZodCheck", (n, i) => {
  var r;
  n._zod ?? (n._zod = {}), n._zod.def = i, (r = n._zod).onattach ?? (r.onattach = []);
}), Wh = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ph = /* @__PURE__ */ U("$ZodCheckLessThan", (n, i) => {
  Ct.init(n, i);
  const r = Wh[typeof i.value];
  n._zod.onattach.push((o) => {
    const s = o._zod.bag, f = (i.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < f && (i.inclusive ? s.maximum = i.value : s.exclusiveMaximum = i.value);
  }), n._zod.check = (o) => {
    (i.inclusive ? o.value <= i.value : o.value < i.value) || o.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), Fh = /* @__PURE__ */ U("$ZodCheckGreaterThan", (n, i) => {
  Ct.init(n, i);
  const r = Wh[typeof i.value];
  n._zod.onattach.push((o) => {
    const s = o._zod.bag, f = (i.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > f && (i.inclusive ? s.minimum = i.value : s.exclusiveMinimum = i.value);
  }), n._zod.check = (o) => {
    (i.inclusive ? o.value >= i.value : o.value > i.value) || o.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), sb = /* @__PURE__ */ U("$ZodCheckMultipleOf", (n, i) => {
  Ct.init(n, i), n._zod.onattach.push((r) => {
    var o;
    (o = r._zod.bag).multipleOf ?? (o.multipleOf = i.value);
  }), n._zod.check = (r) => {
    if (typeof r.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % i.value === BigInt(0) : c0(r.value, i.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), cb = /* @__PURE__ */ U("$ZodCheckNumberFormat", (n, i) => {
  Ct.init(n, i), i.format = i.format || "float64";
  const r = i.format?.includes("int"), o = r ? "int" : "number", [s, f] = h0[i.format];
  n._zod.onattach.push((d) => {
    const m = d._zod.bag;
    m.format = i.format, m.minimum = s, m.maximum = f, r && (m.pattern = ib);
  }), n._zod.check = (d) => {
    const m = d.value;
    if (r) {
      if (!Number.isInteger(m)) {
        d.issues.push({
          expected: o,
          format: i.format,
          code: "invalid_type",
          continue: !1,
          input: m,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(m)) {
        m > 0 ? d.issues.push({
          input: m,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: o,
          inclusive: !0,
          continue: !i.abort
        }) : d.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: o,
          inclusive: !0,
          continue: !i.abort
        });
        return;
      }
    }
    m < s && d.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    }), m > f && d.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: f,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    });
  };
}), fb = /* @__PURE__ */ U("$ZodCheckMaxLength", (n, i) => {
  var r;
  Ct.init(n, i), (r = n._zod.def).when ?? (r.when = (o) => {
    const s = o.value;
    return !Tc(s) && s.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const s = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < s && (o._zod.bag.maximum = i.maximum);
  }), n._zod.check = (o) => {
    const s = o.value;
    if (s.length <= i.maximum)
      return;
    const d = Ac(s);
    o.issues.push({
      origin: d,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !i.abort
    });
  };
}), db = /* @__PURE__ */ U("$ZodCheckMinLength", (n, i) => {
  var r;
  Ct.init(n, i), (r = n._zod.def).when ?? (r.when = (o) => {
    const s = o.value;
    return !Tc(s) && s.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const s = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > s && (o._zod.bag.minimum = i.minimum);
  }), n._zod.check = (o) => {
    const s = o.value;
    if (s.length >= i.minimum)
      return;
    const d = Ac(s);
    o.issues.push({
      origin: d,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !i.abort
    });
  };
}), mb = /* @__PURE__ */ U("$ZodCheckLengthEquals", (n, i) => {
  var r;
  Ct.init(n, i), (r = n._zod.def).when ?? (r.when = (o) => {
    const s = o.value;
    return !Tc(s) && s.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.minimum = i.length, s.maximum = i.length, s.length = i.length;
  }), n._zod.check = (o) => {
    const s = o.value, f = s.length;
    if (f === i.length)
      return;
    const d = Ac(s), m = f > i.length;
    o.issues.push({
      origin: d,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Oo = /* @__PURE__ */ U("$ZodCheckStringFormat", (n, i) => {
  var r, o;
  Ct.init(n, i), n._zod.onattach.push((s) => {
    const f = s._zod.bag;
    f.format = i.format, i.pattern && (f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(i.pattern));
  }), i.pattern ? (r = n._zod).check ?? (r.check = (s) => {
    i.pattern.lastIndex = 0, !i.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: s.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: n,
      continue: !i.abort
    });
  }) : (o = n._zod).check ?? (o.check = () => {
  });
}), pb = /* @__PURE__ */ U("$ZodCheckRegex", (n, i) => {
  Oo.init(n, i), n._zod.check = (r) => {
    i.pattern.lastIndex = 0, !i.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: i.pattern.toString(),
      inst: n,
      continue: !i.abort
    });
  };
}), hb = /* @__PURE__ */ U("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = ob), Oo.init(n, i);
}), vb = /* @__PURE__ */ U("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = ub), Oo.init(n, i);
}), yb = /* @__PURE__ */ U("$ZodCheckIncludes", (n, i) => {
  Ct.init(n, i);
  const r = bi(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${r}` : r);
  i.pattern = o, n._zod.onattach.push((s) => {
    const f = s._zod.bag;
    f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(o);
  }), n._zod.check = (s) => {
    s.value.includes(i.includes, i.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: s.value,
      inst: n,
      continue: !i.abort
    });
  };
}), gb = /* @__PURE__ */ U("$ZodCheckStartsWith", (n, i) => {
  Ct.init(n, i);
  const r = new RegExp(`^${bi(i.prefix)}.*`);
  i.pattern ?? (i.pattern = r), n._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), n._zod.check = (o) => {
    o.value.startsWith(i.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), _b = /* @__PURE__ */ U("$ZodCheckEndsWith", (n, i) => {
  Ct.init(n, i);
  const r = new RegExp(`.*${bi(i.suffix)}$`);
  i.pattern ?? (i.pattern = r), n._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), n._zod.check = (o) => {
    o.value.endsWith(i.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), bb = /* @__PURE__ */ U("$ZodCheckOverwrite", (n, i) => {
  Ct.init(n, i), n._zod.check = (r) => {
    r.value = i.tx(r.value);
  };
});
class Sb {
  constructor(i = []) {
    this.content = [], this.indent = 0, this && (this.args = i);
  }
  indented(i) {
    this.indent += 1, i(this), this.indent -= 1;
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    const o = i.split(`
`).filter((d) => d), s = Math.min(...o.map((d) => d.length - d.trimStart().length)), f = o.map((d) => d.slice(s)).map((d) => " ".repeat(this.indent * 2) + d);
    for (const d of f)
      this.content.push(d);
  }
  compile() {
    const i = Function, r = this?.args, s = [...(this?.content ?? [""]).map((f) => `  ${f}`)];
    return new i(...r, s.join(`
`));
  }
}
const wb = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ U("$ZodType", (n, i) => {
  var r;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = wb;
  const o = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && o.unshift(n);
  for (const s of o)
    for (const f of s._zod.onattach)
      f(n);
  if (o.length === 0)
    (r = n._zod).deferred ?? (r.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const s = (d, m, h) => {
      let v = yi(d), _;
      for (const b of m) {
        if (b._zod.def.when) {
          if (z0(d) || !b._zod.def.when(d))
            continue;
        } else if (v)
          continue;
        const x = d.issues.length, E = b._zod.check(d);
        if (E instanceof Promise && h?.async === !1)
          throw new _i();
        if (_ || E instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await E, d.issues.length !== x && (v || (v = yi(d, x)));
          });
        else {
          if (d.issues.length === x)
            continue;
          v || (v = yi(d, x));
        }
      }
      return _ ? _.then(() => d) : d;
    }, f = (d, m, h) => {
      if (yi(d))
        return d.aborted = !0, d;
      const v = s(m, o, h);
      if (v instanceof Promise) {
        if (h.async === !1)
          throw new _i();
        return v.then((_) => n._zod.parse(_, h));
      }
      return n._zod.parse(v, h);
    };
    n._zod.run = (d, m) => {
      if (m.skipChecks)
        return n._zod.parse(d, m);
      if (m.direction === "backward") {
        const v = n._zod.parse({ value: d.value, issues: [] }, { ...m, skipChecks: !0 });
        return v instanceof Promise ? v.then((_) => f(_, d, m)) : f(v, d, m);
      }
      const h = n._zod.parse(d, m);
      if (h instanceof Promise) {
        if (m.async === !1)
          throw new _i();
        return h.then((v) => s(v, o, m));
      }
      return s(h, o, m);
    };
  }
  Be(n, "~standard", () => ({
    validate: (s) => {
      try {
        const f = E0(n, s);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return A0(n, s).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Mc = /* @__PURE__ */ U("$ZodString", (n, i) => {
  Fe.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? ab(n._zod.bag), n._zod.parse = (r, o) => {
    if (i.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: n
    }), r;
  };
}), Ke = /* @__PURE__ */ U("$ZodStringFormat", (n, i) => {
  Oo.init(n, i), Mc.init(n, i);
}), zb = /* @__PURE__ */ U("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = $0), Ke.init(n, i);
}), xb = /* @__PURE__ */ U("$ZodUUID", (n, i) => {
  if (i.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Ip(o));
  } else
    i.pattern ?? (i.pattern = Ip());
  Ke.init(n, i);
}), Tb = /* @__PURE__ */ U("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = L0), Ke.init(n, i);
}), Eb = /* @__PURE__ */ U("$ZodURL", (n, i) => {
  Ke.init(n, i), n._zod.check = (r) => {
    try {
      const o = r.value.trim();
      if (!i.normalize && i.protocol?.source === F0.source && !/^https?:\/\//i.test(o)) {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: r.value,
          inst: n,
          continue: !i.abort
        });
        return;
      }
      const s = new URL(o);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(s.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: r.value,
        inst: n,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: r.value,
        inst: n,
        continue: !i.abort
      })), i.normalize ? r.value = s.href : r.value = o;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), Ab = /* @__PURE__ */ U("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = G0()), Ke.init(n, i);
}), kb = /* @__PURE__ */ U("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = B0), Ke.init(n, i);
}), Cb = /* @__PURE__ */ U("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = R0), Ke.init(n, i);
}), Mb = /* @__PURE__ */ U("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = U0), Ke.init(n, i);
}), Ob = /* @__PURE__ */ U("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = Y0), Ke.init(n, i);
}), jb = /* @__PURE__ */ U("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = X0), Ke.init(n, i);
}), Nb = /* @__PURE__ */ U("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = H0), Ke.init(n, i);
}), Db = /* @__PURE__ */ U("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = nb(i)), Ke.init(n, i);
}), Zb = /* @__PURE__ */ U("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = eb), Ke.init(n, i);
}), Rb = /* @__PURE__ */ U("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = tb(i)), Ke.init(n, i);
}), Ub = /* @__PURE__ */ U("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = q0), Ke.init(n, i);
}), Yb = /* @__PURE__ */ U("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = Q0), Ke.init(n, i), n._zod.bag.format = "ipv4";
}), Xb = /* @__PURE__ */ U("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = K0), Ke.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), Hb = /* @__PURE__ */ U("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = J0), Ke.init(n, i);
}), Bb = /* @__PURE__ */ U("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = W0), Ke.init(n, i), n._zod.check = (r) => {
    const o = r.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [s, f] = o;
      if (!f)
        throw new Error();
      const d = Number(f);
      if (`${d}` !== f)
        throw new Error();
      if (d < 0 || d > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
});
function Ih(n) {
  if (n === "")
    return !0;
  if (/\s/.test(n) || n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const qb = /* @__PURE__ */ U("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = P0), Ke.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (r) => {
    Ih(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function $b(n) {
  if (!Qh.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), r = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Ih(r);
}
const Lb = /* @__PURE__ */ U("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = Qh), Ke.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (r) => {
    $b(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Vb = /* @__PURE__ */ U("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = I0), Ke.init(n, i);
});
function Gb(n, i = null) {
  try {
    const r = n.split(".");
    if (r.length !== 3)
      return !1;
    const [o] = r;
    if (!o)
      return !1;
    const s = JSON.parse(atob(o));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || i && (!("alg" in s) || s.alg !== i));
  } catch {
    return !1;
  }
}
const Qb = /* @__PURE__ */ U("$ZodJWT", (n, i) => {
  Ke.init(n, i), n._zod.check = (r) => {
    Gb(r.value, i.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), ev = /* @__PURE__ */ U("$ZodNumber", (n, i) => {
  Fe.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? lb, n._zod.parse = (r, o) => {
    if (i.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const s = r.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return r;
    const f = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: n,
      ...f ? { received: f } : {}
    }), r;
  };
}), Kb = /* @__PURE__ */ U("$ZodNumberFormat", (n, i) => {
  cb.init(n, i), ev.init(n, i);
}), Jb = /* @__PURE__ */ U("$ZodBoolean", (n, i) => {
  Fe.init(n, i), n._zod.pattern = rb, n._zod.parse = (r, o) => {
    if (i.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const s = r.value;
    return typeof s == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: n
    }), r;
  };
}), Wb = /* @__PURE__ */ U("$ZodUnknown", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r) => r;
}), Pb = /* @__PURE__ */ U("$ZodNever", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r, o) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: n
  }), r);
});
function eh(n, i, r) {
  n.issues.length && i.issues.push(...$h(r, n.issues)), i.value[r] = n.value;
}
const Fb = /* @__PURE__ */ U("$ZodArray", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r, o) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: n
      }), r;
    r.value = Array(s.length);
    const f = [];
    for (let d = 0; d < s.length; d++) {
      const m = s[d], h = i.element._zod.run({
        value: m,
        issues: []
      }, o);
      h instanceof Promise ? f.push(h.then((v) => eh(v, r, d))) : eh(h, r, d);
    }
    return f.length ? Promise.all(f).then(() => r) : r;
  };
});
function bo(n, i, r, o, s, f) {
  const d = r in o;
  if (n.issues.length) {
    if (s && f && !d)
      return;
    i.issues.push(...$h(r, n.issues));
  }
  if (!d && !s) {
    n.issues.length || i.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [r]
    });
    return;
  }
  n.value === void 0 ? d && (i.value[r] = void 0) : i.value[r] = n.value;
}
function tv(n) {
  const i = Object.keys(n.shape);
  for (const o of i)
    if (!n.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const r = p0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(r)
  };
}
function nv(n, i, r, o, s, f) {
  const d = [], m = s.keySet, h = s.catchall._zod, v = h.def.type, _ = h.optin === "optional", b = h.optout === "optional";
  for (const x in i) {
    if (x === "__proto__" || m.has(x))
      continue;
    if (v === "never") {
      d.push(x);
      continue;
    }
    const E = h.run({ value: i[x], issues: [] }, o);
    E instanceof Promise ? n.push(E.then((M) => bo(M, r, x, i, _, b))) : bo(E, r, x, i, _, b);
  }
  return d.length && r.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: i,
    inst: f
  }), n.length ? Promise.all(n).then(() => r) : r;
}
const Ib = /* @__PURE__ */ U("$ZodObject", (n, i) => {
  if (Fe.init(n, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
    const m = i.shape;
    Object.defineProperty(i, "shape", {
      get: () => {
        const h = { ...m };
        return Object.defineProperty(i, "shape", {
          value: h
        }), h;
      }
    });
  }
  const o = xc(() => tv(i));
  Be(n._zod, "propValues", () => {
    const m = i.shape, h = {};
    for (const v in m) {
      const _ = m[v]._zod;
      if (_.values) {
        h[v] ?? (h[v] = /* @__PURE__ */ new Set());
        for (const b of _.values)
          h[v].add(b);
      }
    }
    return h;
  });
  const s = _o, f = i.catchall;
  let d;
  n._zod.parse = (m, h) => {
    d ?? (d = o.value);
    const v = m.value;
    if (!s(v))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: n
      }), m;
    m.value = {};
    const _ = [], b = d.shape;
    for (const x of d.keys) {
      const E = b[x], M = E._zod.optin === "optional", Q = E._zod.optout === "optional", G = E._zod.run({ value: v[x], issues: [] }, h);
      G instanceof Promise ? _.push(G.then((H) => bo(H, m, x, v, M, Q))) : bo(G, m, x, v, M, Q);
    }
    return f ? nv(_, v, m, h, o.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), e1 = /* @__PURE__ */ U("$ZodObjectJIT", (n, i) => {
  Ib.init(n, i);
  const r = n._zod.parse, o = xc(() => tv(i)), s = (x) => {
    const E = new Sb(["shape", "payload", "ctx"]), M = o.value, Q = (V) => {
      const D = Fp(V);
      return `shape[${D}]._zod.run({ value: input[${D}], issues: [] }, ctx)`;
    };
    E.write("const input = payload.value;");
    const G = /* @__PURE__ */ Object.create(null);
    let H = 0;
    for (const V of M.keys)
      G[V] = `key_${H++}`;
    E.write("const newResult = {};");
    for (const V of M.keys) {
      const D = G[V], L = Fp(V), J = x[V], $ = J?._zod?.optin === "optional", me = J?._zod?.optout === "optional";
      E.write(`const ${D} = ${Q(V)};`), $ && me ? E.write(`
        if (${D}.issues.length) {
          if (${L} in input) {
            payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${L}, ...iss.path] : [${L}]
            })));
          }
        }
        
        if (${D}.value === undefined) {
          if (${L} in input) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${D}.value;
        }
        
      `) : $ ? E.write(`
        if (${D}.issues.length) {
          payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${L}, ...iss.path] : [${L}]
          })));
        }
        
        if (${D}.value === undefined) {
          if (${L} in input) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${D}.value;
        }
        
      `) : E.write(`
        const ${D}_present = ${L} in input;
        if (${D}.issues.length) {
          payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${L}, ...iss.path] : [${L}]
          })));
        }
        if (!${D}_present && !${D}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${L}]
          });
        }

        if (${D}_present) {
          if (${D}.value === undefined) {
            newResult[${L}] = undefined;
          } else {
            newResult[${L}] = ${D}.value;
          }
        }

      `);
    }
    E.write("payload.value = newResult;"), E.write("return payload;");
    const W = E.compile();
    return (V, D) => W(x, V, D);
  };
  let f;
  const d = _o, m = !zc.jitless, v = m && d0.value, _ = i.catchall;
  let b;
  n._zod.parse = (x, E) => {
    b ?? (b = o.value);
    const M = x.value;
    return d(M) ? m && v && E?.async === !1 && E.jitless !== !0 ? (f || (f = s(i.shape)), x = f(x, E), _ ? nv([], M, x, E, b, n) : x) : r(x, E) : (x.issues.push({
      expected: "object",
      code: "invalid_type",
      input: M,
      inst: n
    }), x);
  };
});
function th(n, i, r, o) {
  for (const f of n)
    if (f.issues.length === 0)
      return i.value = f.value, i;
  const s = n.filter((f) => !yi(f));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: r,
    errors: n.map((f) => f.issues.map((d) => ka(d, o, Aa())))
  }), i);
}
const t1 = /* @__PURE__ */ U("$ZodUnion", (n, i) => {
  Fe.init(n, i), Be(n._zod, "optin", () => i.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), Be(n._zod, "optout", () => i.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), Be(n._zod, "values", () => {
    if (i.options.every((o) => o._zod.values))
      return new Set(i.options.flatMap((o) => Array.from(o._zod.values)));
  }), Be(n._zod, "pattern", () => {
    if (i.options.every((o) => o._zod.pattern)) {
      const o = i.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Ec(s.source)).join("|")})$`);
    }
  });
  const r = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (o, s) => {
    if (r)
      return r(o, s);
    let f = !1;
    const d = [];
    for (const m of i.options) {
      const h = m._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (h instanceof Promise)
        d.push(h), f = !0;
      else {
        if (h.issues.length === 0)
          return h;
        d.push(h);
      }
    }
    return f ? Promise.all(d).then((m) => th(m, o, n, s)) : th(d, o, n, s);
  };
}), n1 = /* @__PURE__ */ U("$ZodIntersection", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r, o) => {
    const s = r.value, f = i.left._zod.run({ value: s, issues: [] }, o), d = i.right._zod.run({ value: s, issues: [] }, o);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([h, v]) => nh(r, h, v)) : nh(r, f, d);
  };
});
function pc(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (Cl(n) && Cl(i)) {
    const r = Object.keys(i), o = Object.keys(n).filter((f) => r.indexOf(f) !== -1), s = { ...n, ...i };
    for (const f of o) {
      const d = pc(n[f], i[f]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [f, ...d.mergeErrorPath]
        };
      s[f] = d.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o], f = i[o], d = pc(s, f);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...d.mergeErrorPath]
        };
      r.push(d.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function nh(n, i, r) {
  const o = /* @__PURE__ */ new Map();
  let s;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      s ?? (s = m);
      for (const h of m.keys)
        o.has(h) || o.set(h, {}), o.get(h).l = !0;
    } else
      n.issues.push(m);
  for (const m of r.issues)
    if (m.code === "unrecognized_keys")
      for (const h of m.keys)
        o.has(h) || o.set(h, {}), o.get(h).r = !0;
    else
      n.issues.push(m);
  const f = [...o].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (f.length && s && n.issues.push({ ...s, keys: f }), yi(n))
    return n;
  const d = pc(i.value, r.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
const a1 = /* @__PURE__ */ U("$ZodEnum", (n, i) => {
  Fe.init(n, i);
  const r = Hh(i.entries), o = new Set(r);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${r.filter((s) => m0.has(typeof s)).map((s) => typeof s == "string" ? bi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, f) => {
    const d = s.value;
    return o.has(d) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: d,
      inst: n
    }), s;
  };
}), i1 = /* @__PURE__ */ U("$ZodLiteral", (n, i) => {
  if (Fe.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(i.values);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${i.values.map((o) => typeof o == "string" ? bi(o) : o ? bi(o.toString()) : String(o)).join("|")})$`), n._zod.parse = (o, s) => {
    const f = o.value;
    return r.has(f) || o.issues.push({
      code: "invalid_value",
      values: i.values,
      input: f,
      inst: n
    }), o;
  };
}), l1 = /* @__PURE__ */ U("$ZodTransform", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Xh(n.constructor.name);
    const s = i.transform(r.value, r);
    if (o.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((d) => (r.value = d, r.fallback = !0, r));
    if (s instanceof Promise)
      throw new _i();
    return r.value = s, r.fallback = !0, r;
  };
});
function ah(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const av = /* @__PURE__ */ U("$ZodOptional", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", Be(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Be(n._zod, "pattern", () => {
    const r = i.innerType._zod.pattern;
    return r ? new RegExp(`^(${Ec(r.source)})?$`) : void 0;
  }), n._zod.parse = (r, o) => {
    if (i.innerType._zod.optin === "optional") {
      const s = r.value, f = i.innerType._zod.run(r, o);
      return f instanceof Promise ? f.then((d) => ah(d, s)) : ah(f, s);
    }
    return r.value === void 0 ? r : i.innerType._zod.run(r, o);
  };
}), r1 = /* @__PURE__ */ U("$ZodExactOptional", (n, i) => {
  av.init(n, i), Be(n._zod, "values", () => i.innerType._zod.values), Be(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (r, o) => i.innerType._zod.run(r, o);
}), o1 = /* @__PURE__ */ U("$ZodNullable", (n, i) => {
  Fe.init(n, i), Be(n._zod, "optin", () => i.innerType._zod.optin), Be(n._zod, "optout", () => i.innerType._zod.optout), Be(n._zod, "pattern", () => {
    const r = i.innerType._zod.pattern;
    return r ? new RegExp(`^(${Ec(r.source)}|null)$`) : void 0;
  }), Be(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (r, o) => r.value === null ? r : i.innerType._zod.run(r, o);
}), u1 = /* @__PURE__ */ U("$ZodDefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Be(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(r, o);
    if (r.value === void 0)
      return r.value = i.defaultValue, r;
    const s = i.innerType._zod.run(r, o);
    return s instanceof Promise ? s.then((f) => ih(f, i)) : ih(s, i);
  };
});
function ih(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const s1 = /* @__PURE__ */ U("$ZodPrefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Be(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, o) => (o.direction === "backward" || r.value === void 0 && (r.value = i.defaultValue), i.innerType._zod.run(r, o));
}), c1 = /* @__PURE__ */ U("$ZodNonOptional", (n, i) => {
  Fe.init(n, i), Be(n._zod, "values", () => {
    const r = i.innerType._zod.values;
    return r ? new Set([...r].filter((o) => o !== void 0)) : void 0;
  }), n._zod.parse = (r, o) => {
    const s = i.innerType._zod.run(r, o);
    return s instanceof Promise ? s.then((f) => lh(f, n)) : lh(s, n);
  };
});
function lh(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const f1 = /* @__PURE__ */ U("$ZodCatch", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Be(n._zod, "optout", () => i.innerType._zod.optout), Be(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(r, o);
    const s = i.innerType._zod.run(r, o);
    return s instanceof Promise ? s.then((f) => (r.value = f.value, f.issues.length && (r.value = i.catchValue({
      ...r,
      error: {
        issues: f.issues.map((d) => ka(d, o, Aa()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r)) : (r.value = s.value, s.issues.length && (r.value = i.catchValue({
      ...r,
      error: {
        issues: s.issues.map((f) => ka(f, o, Aa()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r);
  };
}), d1 = /* @__PURE__ */ U("$ZodPipe", (n, i) => {
  Fe.init(n, i), Be(n._zod, "values", () => i.in._zod.values), Be(n._zod, "optin", () => i.in._zod.optin), Be(n._zod, "optout", () => i.out._zod.optout), Be(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (r, o) => {
    if (o.direction === "backward") {
      const f = i.out._zod.run(r, o);
      return f instanceof Promise ? f.then((d) => oo(d, i.in, o)) : oo(f, i.in, o);
    }
    const s = i.in._zod.run(r, o);
    return s instanceof Promise ? s.then((f) => oo(f, i.out, o)) : oo(s, i.out, o);
  };
});
function oo(n, i, r) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, r);
}
const m1 = /* @__PURE__ */ U("$ZodReadonly", (n, i) => {
  Fe.init(n, i), Be(n._zod, "propValues", () => i.innerType._zod.propValues), Be(n._zod, "values", () => i.innerType._zod.values), Be(n._zod, "optin", () => i.innerType?._zod?.optin), Be(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(r, o);
    const s = i.innerType._zod.run(r, o);
    return s instanceof Promise ? s.then(rh) : rh(s);
  };
});
function rh(n) {
  return n.value = Object.freeze(n.value), n;
}
const p1 = /* @__PURE__ */ U("$ZodCustom", (n, i) => {
  Ct.init(n, i), Fe.init(n, i), n._zod.parse = (r, o) => r, n._zod.check = (r) => {
    const o = r.value, s = i.fn(o);
    if (s instanceof Promise)
      return s.then((f) => oh(f, r, o, n));
    oh(s, r, o, n);
  };
});
function oh(n, i, r, o) {
  if (!n) {
    const s = {
      code: "custom",
      input: r,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (s.params = o._zod.def.params), i.issues.push(Ml(s));
  }
}
var uh;
class h1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...r) {
    const o = r[0];
    return this._map.set(i, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const r = this._map.get(i);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(i), this;
  }
  get(i) {
    const r = i._zod.parent;
    if (r) {
      const o = { ...this.get(r) ?? {} };
      delete o.id;
      const s = { ...o, ...this._map.get(i) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function v1() {
  return new h1();
}
(uh = globalThis).__zod_globalRegistry ?? (uh.__zod_globalRegistry = v1());
const zl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function y1(n, i) {
  return new n({
    type: "string",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function g1(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sh(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function b1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function S1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function w1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function z1(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function x1(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function T1(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function E1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function A1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function k1(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function C1(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function M1(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function O1(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function j1(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function D1(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function R1(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function U1(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X1(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function H1(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function B1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function q1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function $1(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function L1(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function V1(n, i) {
  return new n({
    type: "boolean",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function G1(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Q1(n, i) {
  return new n({
    type: "never",
    ...ue(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ch(n, i) {
  return new Ph({
    check: "less_than",
    ...ue(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function nc(n, i) {
  return new Ph({
    check: "less_than",
    ...ue(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function fh(n, i) {
  return new Fh({
    check: "greater_than",
    ...ue(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ac(n, i) {
  return new Fh({
    check: "greater_than",
    ...ue(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function dh(n, i) {
  return new sb({
    check: "multiple_of",
    ...ue(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function iv(n, i) {
  return new fb({
    check: "max_length",
    ...ue(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function So(n, i) {
  return new db({
    check: "min_length",
    ...ue(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function lv(n, i) {
  return new mb({
    check: "length_equals",
    ...ue(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function K1(n, i) {
  return new pb({
    check: "string_format",
    format: "regex",
    ...ue(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function J1(n) {
  return new hb({
    check: "string_format",
    format: "lowercase",
    ...ue(n)
  });
}
// @__NO_SIDE_EFFECTS__
function W1(n) {
  return new vb({
    check: "string_format",
    format: "uppercase",
    ...ue(n)
  });
}
// @__NO_SIDE_EFFECTS__
function P1(n, i) {
  return new yb({
    check: "string_format",
    format: "includes",
    ...ue(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function F1(n, i) {
  return new gb({
    check: "string_format",
    format: "starts_with",
    ...ue(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function I1(n, i) {
  return new _b({
    check: "string_format",
    format: "ends_with",
    ...ue(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function zi(n) {
  return new bb({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function eS(n) {
  return /* @__PURE__ */ zi((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function tS() {
  return /* @__PURE__ */ zi((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function nS() {
  return /* @__PURE__ */ zi((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function aS() {
  return /* @__PURE__ */ zi((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function iS() {
  return /* @__PURE__ */ zi((n) => f0(n));
}
// @__NO_SIDE_EFFECTS__
function lS(n, i, r) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...ue(r)
  });
}
// @__NO_SIDE_EFFECTS__
function rS(n, i, r) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...ue(r)
  });
}
// @__NO_SIDE_EFFECTS__
function oS(n, i) {
  const r = /* @__PURE__ */ uS((o) => (o.addIssue = (s) => {
    if (typeof s == "string")
      o.issues.push(Ml(s, o.value, r._zod.def));
    else {
      const f = s;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = r), f.continue ?? (f.continue = !r._zod.def.abort), o.issues.push(Ml(f));
    }
  }, n(o.value, o)), i);
  return r;
}
// @__NO_SIDE_EFFECTS__
function uS(n, i) {
  const r = new Ct({
    check: "custom",
    ...ue(i)
  });
  return r._zod.check = n, r;
}
function rv(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? zl,
    target: i,
    unrepresentable: n?.unrepresentable ?? "throw",
    override: n?.override ?? (() => {
    }),
    io: n?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: n?.cycles ?? "ref",
    reused: n?.reused ?? "inline",
    external: n?.external ?? void 0
  };
}
function pt(n, i, r = { path: [], schemaPath: [] }) {
  var o;
  const s = n._zod.def, f = i.seen.get(n);
  if (f)
    return f.count++, r.schemaPath.includes(n) && (f.cycle = r.path), f.schema;
  const d = { schema: {}, count: 1, cycle: void 0, path: r.path };
  i.seen.set(n, d);
  const m = n._zod.toJSONSchema?.();
  if (m)
    d.schema = m;
  else {
    const _ = {
      ...r,
      schemaPath: [...r.schemaPath, n],
      path: r.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(i, d.schema, _);
    else {
      const x = d.schema, E = i.processors[s.type];
      if (!E)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      E(n, i, x, _);
    }
    const b = n._zod.parent;
    b && (d.ref || (d.ref = b), pt(b, i, _), i.seen.get(b).isParent = !0);
  }
  const h = i.metadataRegistry.get(n);
  return h && Object.assign(d.schema, h), i.io === "input" && _t(n) && (delete d.schema.examples, delete d.schema.default), i.io === "input" && "_prefault" in d.schema && ((o = d.schema).default ?? (o.default = d.schema._prefault)), delete d.schema._prefault, i.seen.get(n).schema;
}
function ov(n, i) {
  const r = n.seen.get(i);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const d of n.seen.entries()) {
    const m = n.metadataRegistry.get(d[0])?.id;
    if (m) {
      const h = o.get(m);
      if (h && h !== d[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(m, d[0]);
    }
  }
  const s = (d) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const b = n.external.registry.get(d[0])?.id, x = n.external.uri ?? ((M) => M);
      if (b)
        return { ref: x(b) };
      const E = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = E, { defId: E, ref: `${x("__shared")}#/${m}/${E}` };
    }
    if (d[1] === r)
      return { ref: "#" };
    const v = `#/${m}/`, _ = d[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: _, ref: v + _ };
  }, f = (d) => {
    if (d[1].schema.$ref)
      return;
    const m = d[1], { ref: h, defId: v } = s(d);
    m.def = { ...m.schema }, v && (m.defId = v);
    const _ = m.schema;
    for (const b in _)
      delete _[b];
    _.$ref = h;
  };
  if (n.cycles === "throw")
    for (const d of n.seen.entries()) {
      const m = d[1];
      if (m.cycle)
        throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const d of n.seen.entries()) {
    const m = d[1];
    if (i === d[0]) {
      f(d);
      continue;
    }
    if (n.external) {
      const v = n.external.registry.get(d[0])?.id;
      if (i !== d[0] && v) {
        f(d);
        continue;
      }
    }
    if (n.metadataRegistry.get(d[0])?.id) {
      f(d);
      continue;
    }
    if (m.cycle) {
      f(d);
      continue;
    }
    if (m.count > 1 && n.reused === "ref") {
      f(d);
      continue;
    }
  }
}
function uv(n, i) {
  const r = n.seen.get(i);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (m) => {
    const h = n.seen.get(m);
    if (h.ref === null)
      return;
    const v = h.def ?? h.schema, _ = { ...v }, b = h.ref;
    if (h.ref = null, b) {
      o(b);
      const E = n.seen.get(b), M = E.schema;
      if (M.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(M)) : Object.assign(v, M), Object.assign(v, _), m._zod.parent === b)
        for (const G in v)
          G === "$ref" || G === "allOf" || G in _ || delete v[G];
      if (M.$ref && E.def)
        for (const G in v)
          G === "$ref" || G === "allOf" || G in E.def && JSON.stringify(v[G]) === JSON.stringify(E.def[G]) && delete v[G];
    }
    const x = m._zod.parent;
    if (x && x !== b) {
      o(x);
      const E = n.seen.get(x);
      if (E?.schema.$ref && (v.$ref = E.schema.$ref, E.def))
        for (const M in v)
          M === "$ref" || M === "allOf" || M in E.def && JSON.stringify(v[M]) === JSON.stringify(E.def[M]) && delete v[M];
    }
    n.override({
      zodSchema: m,
      jsonSchema: v,
      path: h.path ?? []
    });
  };
  for (const m of [...n.seen.entries()].reverse())
    o(m[0]);
  const s = {};
  if (n.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const m = n.external.registry.get(i)?.id;
    if (!m)
      throw new Error("Schema is missing an `id` property");
    s.$id = n.external.uri(m);
  }
  Object.assign(s, r.def ?? r.schema);
  const f = n.metadataRegistry.get(i)?.id;
  f !== void 0 && s.id === f && delete s.id;
  const d = n.external?.defs ?? {};
  for (const m of n.seen.entries()) {
    const h = m[1];
    h.def && h.defId && (h.def.id === h.defId && delete h.def.id, d[h.defId] = h.def);
  }
  n.external || Object.keys(d).length > 0 && (n.target === "draft-2020-12" ? s.$defs = d : s.definitions = d);
  try {
    const m = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(m, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: wo(i, "input", n.processors),
          output: wo(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function _t(n, i) {
  const r = i ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(n))
    return !1;
  r.seen.add(n);
  const o = n._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return _t(o.element, r);
  if (o.type === "set")
    return _t(o.valueType, r);
  if (o.type === "lazy")
    return _t(o.getter(), r);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return _t(o.innerType, r);
  if (o.type === "intersection")
    return _t(o.left, r) || _t(o.right, r);
  if (o.type === "record" || o.type === "map")
    return _t(o.keyType, r) || _t(o.valueType, r);
  if (o.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : _t(o.in, r) || _t(o.out, r);
  if (o.type === "object") {
    for (const s in o.shape)
      if (_t(o.shape[s], r))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const s of o.options)
      if (_t(s, r))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const s of o.items)
      if (_t(s, r))
        return !0;
    return !!(o.rest && _t(o.rest, r));
  }
  return !1;
}
const sS = (n, i = {}) => (r) => {
  const o = rv({ ...r, processors: i });
  return pt(n, o), ov(o, n), uv(o, n);
}, wo = (n, i, r = {}) => (o) => {
  const { libraryOptions: s, target: f } = o ?? {}, d = rv({ ...s ?? {}, target: f, io: i, processors: r });
  return pt(n, d), ov(d, n), uv(d, n);
}, cS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, fS = (n, i, r, o) => {
  const s = r;
  s.type = "string";
  const { minimum: f, maximum: d, format: m, patterns: h, contentEncoding: v } = n._zod.bag;
  if (typeof f == "number" && (s.minLength = f), typeof d == "number" && (s.maxLength = d), m && (s.format = cS[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), v && (s.contentEncoding = v), h && h.size > 0) {
    const _ = [...h];
    _.length === 1 ? s.pattern = _[0].source : _.length > 1 && (s.allOf = [
      ..._.map((b) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, dS = (n, i, r, o) => {
  const s = r, { minimum: f, maximum: d, format: m, multipleOf: h, exclusiveMaximum: v, exclusiveMinimum: _ } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const b = typeof _ == "number" && _ >= (f ?? Number.NEGATIVE_INFINITY), x = typeof v == "number" && v <= (d ?? Number.POSITIVE_INFINITY), E = i.target === "draft-04" || i.target === "openapi-3.0";
  b ? E ? (s.minimum = _, s.exclusiveMinimum = !0) : s.exclusiveMinimum = _ : typeof f == "number" && (s.minimum = f), x ? E ? (s.maximum = v, s.exclusiveMaximum = !0) : s.exclusiveMaximum = v : typeof d == "number" && (s.maximum = d), typeof h == "number" && (s.multipleOf = h);
}, mS = (n, i, r, o) => {
  r.type = "boolean";
}, pS = (n, i, r, o) => {
  r.not = {};
}, hS = (n, i, r, o) => {
}, vS = (n, i, r, o) => {
  const s = n._zod.def, f = Hh(s.entries);
  f.every((d) => typeof d == "number") && (r.type = "number"), f.every((d) => typeof d == "string") && (r.type = "string"), r.enum = f;
}, yS = (n, i, r, o) => {
  const s = n._zod.def, f = [];
  for (const d of s.values)
    if (d === void 0) {
      if (i.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof d == "bigint") {
      if (i.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      f.push(Number(d));
    } else
      f.push(d);
  if (f.length !== 0) if (f.length === 1) {
    const d = f[0];
    r.type = d === null ? "null" : typeof d, i.target === "draft-04" || i.target === "openapi-3.0" ? r.enum = [d] : r.const = d;
  } else
    f.every((d) => typeof d == "number") && (r.type = "number"), f.every((d) => typeof d == "string") && (r.type = "string"), f.every((d) => typeof d == "boolean") && (r.type = "boolean"), f.every((d) => d === null) && (r.type = "null"), r.enum = f;
}, gS = (n, i, r, o) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, _S = (n, i, r, o) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, bS = (n, i, r, o) => {
  const s = r, f = n._zod.def, { minimum: d, maximum: m } = n._zod.bag;
  typeof d == "number" && (s.minItems = d), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = pt(f.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
}, SS = (n, i, r, o) => {
  const s = r, f = n._zod.def;
  s.type = "object", s.properties = {};
  const d = f.shape;
  for (const v in d)
    s.properties[v] = pt(d[v], i, {
      ...o,
      path: [...o.path, "properties", v]
    });
  const m = new Set(Object.keys(d)), h = new Set([...m].filter((v) => {
    const _ = f.shape[v]._zod;
    return i.io === "input" ? _.optin === void 0 : _.optout === void 0;
  }));
  h.size > 0 && (s.required = Array.from(h)), f.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : f.catchall ? f.catchall && (s.additionalProperties = pt(f.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, wS = (n, i, r, o) => {
  const s = n._zod.def, f = s.inclusive === !1, d = s.options.map((m, h) => pt(m, i, {
    ...o,
    path: [...o.path, f ? "oneOf" : "anyOf", h]
  }));
  f ? r.oneOf = d : r.anyOf = d;
}, zS = (n, i, r, o) => {
  const s = n._zod.def, f = pt(s.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), d = pt(s.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), m = (v) => "allOf" in v && Object.keys(v).length === 1, h = [
    ...m(f) ? f.allOf : [f],
    ...m(d) ? d.allOf : [d]
  ];
  r.allOf = h;
}, xS = (n, i, r, o) => {
  const s = n._zod.def, f = pt(s.innerType, i, o), d = i.seen.get(n);
  i.target === "openapi-3.0" ? (d.ref = s.innerType, r.nullable = !0) : r.anyOf = [f, { type: "null" }];
}, TS = (n, i, r, o) => {
  const s = n._zod.def;
  pt(s.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = s.innerType;
}, ES = (n, i, r, o) => {
  const s = n._zod.def;
  pt(s.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
}, AS = (n, i, r, o) => {
  const s = n._zod.def;
  pt(s.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = s.innerType, i.io === "input" && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, kS = (n, i, r, o) => {
  const s = n._zod.def;
  pt(s.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = s.innerType;
  let d;
  try {
    d = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = d;
}, CS = (n, i, r, o) => {
  const s = n._zod.def, f = s.in._zod.traits.has("$ZodTransform"), d = i.io === "input" ? f ? s.out : s.in : s.out;
  pt(d, i, o);
  const m = i.seen.get(n);
  m.ref = d;
}, MS = (n, i, r, o) => {
  const s = n._zod.def;
  pt(s.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = s.innerType, r.readOnly = !0;
}, sv = (n, i, r, o) => {
  const s = n._zod.def;
  pt(s.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = s.innerType;
}, OS = /* @__PURE__ */ U("ZodISODateTime", (n, i) => {
  Db.init(n, i), Je.init(n, i);
});
function jS(n) {
  return /* @__PURE__ */ X1(OS, n);
}
const NS = /* @__PURE__ */ U("ZodISODate", (n, i) => {
  Zb.init(n, i), Je.init(n, i);
});
function DS(n) {
  return /* @__PURE__ */ H1(NS, n);
}
const ZS = /* @__PURE__ */ U("ZodISOTime", (n, i) => {
  Rb.init(n, i), Je.init(n, i);
});
function RS(n) {
  return /* @__PURE__ */ B1(ZS, n);
}
const US = /* @__PURE__ */ U("ZodISODuration", (n, i) => {
  Ub.init(n, i), Je.init(n, i);
});
function YS(n) {
  return /* @__PURE__ */ q1(US, n);
}
const XS = (n, i) => {
  Vh.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (r) => T0(n, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => x0(n, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        n.issues.push(r), n.message = JSON.stringify(n.issues, mc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        n.issues.push(...r), n.message = JSON.stringify(n.issues, mc, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Jt = /* @__PURE__ */ U("ZodError", XS, {
  Parent: Error
}), HS = /* @__PURE__ */ kc(Jt), BS = /* @__PURE__ */ Cc(Jt), qS = /* @__PURE__ */ Co(Jt), $S = /* @__PURE__ */ Mo(Jt), LS = /* @__PURE__ */ k0(Jt), VS = /* @__PURE__ */ C0(Jt), GS = /* @__PURE__ */ M0(Jt), QS = /* @__PURE__ */ O0(Jt), KS = /* @__PURE__ */ j0(Jt), JS = /* @__PURE__ */ N0(Jt), WS = /* @__PURE__ */ D0(Jt), PS = /* @__PURE__ */ Z0(Jt), mh = /* @__PURE__ */ new WeakMap();
function Zl(n, i, r) {
  const o = Object.getPrototypeOf(n);
  let s = mh.get(o);
  if (s || (s = /* @__PURE__ */ new Set(), mh.set(o, s)), !s.has(i)) {
    s.add(i);
    for (const f in r) {
      const d = r[f];
      Object.defineProperty(o, f, {
        configurable: !0,
        enumerable: !1,
        get() {
          const m = d.bind(this);
          return Object.defineProperty(this, f, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          }), m;
        },
        set(m) {
          Object.defineProperty(this, f, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          });
        }
      });
    }
  }
}
const Ie = /* @__PURE__ */ U("ZodType", (n, i) => (Fe.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: wo(n, "input"),
    output: wo(n, "output")
  }
}), n.toJSONSchema = sS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (r, o) => HS(n, r, o, { callee: n.parse }), n.safeParse = (r, o) => qS(n, r, o), n.parseAsync = async (r, o) => BS(n, r, o, { callee: n.parseAsync }), n.safeParseAsync = async (r, o) => $S(n, r, o), n.spa = n.safeParseAsync, n.encode = (r, o) => LS(n, r, o), n.decode = (r, o) => VS(n, r, o), n.encodeAsync = async (r, o) => GS(n, r, o), n.decodeAsync = async (r, o) => QS(n, r, o), n.safeEncode = (r, o) => KS(n, r, o), n.safeDecode = (r, o) => JS(n, r, o), n.safeEncodeAsync = async (r, o) => WS(n, r, o), n.safeDecodeAsync = async (r, o) => PS(n, r, o), Zl(n, "ZodType", {
  check(...r) {
    const o = this.def;
    return this.clone(In(o, {
      checks: [
        ...o.checks ?? [],
        ...r.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
      ]
    }), { parent: !0 });
  },
  with(...r) {
    return this.check(...r);
  },
  clone(r, o) {
    return ea(this, r, o);
  },
  brand() {
    return this;
  },
  register(r, o) {
    return r.add(this, o), this;
  },
  refine(r, o) {
    return this.check(L2(r, o));
  },
  superRefine(r, o) {
    return this.check(V2(r, o));
  },
  overwrite(r) {
    return this.check(/* @__PURE__ */ zi(r));
  },
  optional() {
    return yh(this);
  },
  exactOptional() {
    return O2(this);
  },
  nullable() {
    return gh(this);
  },
  nullish() {
    return yh(gh(this));
  },
  nonoptional(r) {
    return U2(this, r);
  },
  array() {
    return zo(this);
  },
  or(r) {
    return mv([this, r]);
  },
  and(r) {
    return E2(this, r);
  },
  transform(r) {
    return _h(this, C2(r));
  },
  default(r) {
    return D2(this, r);
  },
  prefault(r) {
    return R2(this, r);
  },
  catch(r) {
    return X2(this, r);
  },
  pipe(r) {
    return _h(this, r);
  },
  readonly() {
    return q2(this);
  },
  describe(r) {
    const o = this.clone();
    return zl.add(o, { description: r }), o;
  },
  meta(...r) {
    if (r.length === 0)
      return zl.get(this);
    const o = this.clone();
    return zl.add(o, r[0]), o;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(r) {
    return r(this);
  }
}), Object.defineProperty(n, "description", {
  get() {
    return zl.get(n)?.description;
  },
  configurable: !0
}), n)), cv = /* @__PURE__ */ U("_ZodString", (n, i) => {
  Mc.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, s, f) => fS(n, o, s);
  const r = n._zod.bag;
  n.format = r.format ?? null, n.minLength = r.minimum ?? null, n.maxLength = r.maximum ?? null, Zl(n, "_ZodString", {
    regex(...o) {
      return this.check(/* @__PURE__ */ K1(...o));
    },
    includes(...o) {
      return this.check(/* @__PURE__ */ P1(...o));
    },
    startsWith(...o) {
      return this.check(/* @__PURE__ */ F1(...o));
    },
    endsWith(...o) {
      return this.check(/* @__PURE__ */ I1(...o));
    },
    min(...o) {
      return this.check(/* @__PURE__ */ So(...o));
    },
    max(...o) {
      return this.check(/* @__PURE__ */ iv(...o));
    },
    length(...o) {
      return this.check(/* @__PURE__ */ lv(...o));
    },
    nonempty(...o) {
      return this.check(/* @__PURE__ */ So(1, ...o));
    },
    lowercase(o) {
      return this.check(/* @__PURE__ */ J1(o));
    },
    uppercase(o) {
      return this.check(/* @__PURE__ */ W1(o));
    },
    trim() {
      return this.check(/* @__PURE__ */ tS());
    },
    normalize(...o) {
      return this.check(/* @__PURE__ */ eS(...o));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ nS());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ aS());
    },
    slugify() {
      return this.check(/* @__PURE__ */ iS());
    }
  });
}), FS = /* @__PURE__ */ U("ZodString", (n, i) => {
  Mc.init(n, i), cv.init(n, i), n.email = (r) => n.check(/* @__PURE__ */ g1(IS, r)), n.url = (r) => n.check(/* @__PURE__ */ z1(e2, r)), n.jwt = (r) => n.check(/* @__PURE__ */ Y1(h2, r)), n.emoji = (r) => n.check(/* @__PURE__ */ x1(t2, r)), n.guid = (r) => n.check(/* @__PURE__ */ sh(ph, r)), n.uuid = (r) => n.check(/* @__PURE__ */ _1(uo, r)), n.uuidv4 = (r) => n.check(/* @__PURE__ */ b1(uo, r)), n.uuidv6 = (r) => n.check(/* @__PURE__ */ S1(uo, r)), n.uuidv7 = (r) => n.check(/* @__PURE__ */ w1(uo, r)), n.nanoid = (r) => n.check(/* @__PURE__ */ T1(n2, r)), n.guid = (r) => n.check(/* @__PURE__ */ sh(ph, r)), n.cuid = (r) => n.check(/* @__PURE__ */ E1(a2, r)), n.cuid2 = (r) => n.check(/* @__PURE__ */ A1(i2, r)), n.ulid = (r) => n.check(/* @__PURE__ */ k1(l2, r)), n.base64 = (r) => n.check(/* @__PURE__ */ Z1(d2, r)), n.base64url = (r) => n.check(/* @__PURE__ */ R1(m2, r)), n.xid = (r) => n.check(/* @__PURE__ */ C1(r2, r)), n.ksuid = (r) => n.check(/* @__PURE__ */ M1(o2, r)), n.ipv4 = (r) => n.check(/* @__PURE__ */ O1(u2, r)), n.ipv6 = (r) => n.check(/* @__PURE__ */ j1(s2, r)), n.cidrv4 = (r) => n.check(/* @__PURE__ */ N1(c2, r)), n.cidrv6 = (r) => n.check(/* @__PURE__ */ D1(f2, r)), n.e164 = (r) => n.check(/* @__PURE__ */ U1(p2, r)), n.datetime = (r) => n.check(jS(r)), n.date = (r) => n.check(DS(r)), n.time = (r) => n.check(RS(r)), n.duration = (r) => n.check(YS(r));
});
function bt(n) {
  return /* @__PURE__ */ y1(FS, n);
}
const Je = /* @__PURE__ */ U("ZodStringFormat", (n, i) => {
  Ke.init(n, i), cv.init(n, i);
}), IS = /* @__PURE__ */ U("ZodEmail", (n, i) => {
  Tb.init(n, i), Je.init(n, i);
}), ph = /* @__PURE__ */ U("ZodGUID", (n, i) => {
  zb.init(n, i), Je.init(n, i);
}), uo = /* @__PURE__ */ U("ZodUUID", (n, i) => {
  xb.init(n, i), Je.init(n, i);
}), e2 = /* @__PURE__ */ U("ZodURL", (n, i) => {
  Eb.init(n, i), Je.init(n, i);
}), t2 = /* @__PURE__ */ U("ZodEmoji", (n, i) => {
  Ab.init(n, i), Je.init(n, i);
}), n2 = /* @__PURE__ */ U("ZodNanoID", (n, i) => {
  kb.init(n, i), Je.init(n, i);
}), a2 = /* @__PURE__ */ U("ZodCUID", (n, i) => {
  Cb.init(n, i), Je.init(n, i);
}), i2 = /* @__PURE__ */ U("ZodCUID2", (n, i) => {
  Mb.init(n, i), Je.init(n, i);
}), l2 = /* @__PURE__ */ U("ZodULID", (n, i) => {
  Ob.init(n, i), Je.init(n, i);
}), r2 = /* @__PURE__ */ U("ZodXID", (n, i) => {
  jb.init(n, i), Je.init(n, i);
}), o2 = /* @__PURE__ */ U("ZodKSUID", (n, i) => {
  Nb.init(n, i), Je.init(n, i);
}), u2 = /* @__PURE__ */ U("ZodIPv4", (n, i) => {
  Yb.init(n, i), Je.init(n, i);
}), s2 = /* @__PURE__ */ U("ZodIPv6", (n, i) => {
  Xb.init(n, i), Je.init(n, i);
}), c2 = /* @__PURE__ */ U("ZodCIDRv4", (n, i) => {
  Hb.init(n, i), Je.init(n, i);
}), f2 = /* @__PURE__ */ U("ZodCIDRv6", (n, i) => {
  Bb.init(n, i), Je.init(n, i);
}), d2 = /* @__PURE__ */ U("ZodBase64", (n, i) => {
  qb.init(n, i), Je.init(n, i);
}), m2 = /* @__PURE__ */ U("ZodBase64URL", (n, i) => {
  Lb.init(n, i), Je.init(n, i);
}), p2 = /* @__PURE__ */ U("ZodE164", (n, i) => {
  Vb.init(n, i), Je.init(n, i);
}), h2 = /* @__PURE__ */ U("ZodJWT", (n, i) => {
  Qb.init(n, i), Je.init(n, i);
}), fv = /* @__PURE__ */ U("ZodNumber", (n, i) => {
  ev.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, s, f) => dS(n, o, s), Zl(n, "ZodNumber", {
    gt(o, s) {
      return this.check(/* @__PURE__ */ fh(o, s));
    },
    gte(o, s) {
      return this.check(/* @__PURE__ */ ac(o, s));
    },
    min(o, s) {
      return this.check(/* @__PURE__ */ ac(o, s));
    },
    lt(o, s) {
      return this.check(/* @__PURE__ */ ch(o, s));
    },
    lte(o, s) {
      return this.check(/* @__PURE__ */ nc(o, s));
    },
    max(o, s) {
      return this.check(/* @__PURE__ */ nc(o, s));
    },
    int(o) {
      return this.check(hh(o));
    },
    safe(o) {
      return this.check(hh(o));
    },
    positive(o) {
      return this.check(/* @__PURE__ */ fh(0, o));
    },
    nonnegative(o) {
      return this.check(/* @__PURE__ */ ac(0, o));
    },
    negative(o) {
      return this.check(/* @__PURE__ */ ch(0, o));
    },
    nonpositive(o) {
      return this.check(/* @__PURE__ */ nc(0, o));
    },
    multipleOf(o, s) {
      return this.check(/* @__PURE__ */ dh(o, s));
    },
    step(o, s) {
      return this.check(/* @__PURE__ */ dh(o, s));
    },
    finite() {
      return this;
    }
  });
  const r = n._zod.bag;
  n.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), n.isFinite = !0, n.format = r.format ?? null;
});
function v2(n) {
  return /* @__PURE__ */ $1(fv, n);
}
const y2 = /* @__PURE__ */ U("ZodNumberFormat", (n, i) => {
  Kb.init(n, i), fv.init(n, i);
});
function hh(n) {
  return /* @__PURE__ */ L1(y2, n);
}
const g2 = /* @__PURE__ */ U("ZodBoolean", (n, i) => {
  Jb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => mS(n, r, o);
});
function dv(n) {
  return /* @__PURE__ */ V1(g2, n);
}
const _2 = /* @__PURE__ */ U("ZodUnknown", (n, i) => {
  Wb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => hS();
});
function vh() {
  return /* @__PURE__ */ G1(_2);
}
const b2 = /* @__PURE__ */ U("ZodNever", (n, i) => {
  Pb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => pS(n, r, o);
});
function S2(n) {
  return /* @__PURE__ */ Q1(b2, n);
}
const w2 = /* @__PURE__ */ U("ZodArray", (n, i) => {
  Fb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => bS(n, r, o, s), n.element = i.element, Zl(n, "ZodArray", {
    min(r, o) {
      return this.check(/* @__PURE__ */ So(r, o));
    },
    nonempty(r) {
      return this.check(/* @__PURE__ */ So(1, r));
    },
    max(r, o) {
      return this.check(/* @__PURE__ */ iv(r, o));
    },
    length(r, o) {
      return this.check(/* @__PURE__ */ lv(r, o));
    },
    unwrap() {
      return this.element;
    }
  });
});
function zo(n, i) {
  return /* @__PURE__ */ lS(w2, n, i);
}
const z2 = /* @__PURE__ */ U("ZodObject", (n, i) => {
  e1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => SS(n, r, o, s), Be(n, "shape", () => i.shape), Zl(n, "ZodObject", {
    keyof() {
      return xo(Object.keys(this._zod.def.shape));
    },
    catchall(r) {
      return this.clone({ ...this._zod.def, catchall: r });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: vh() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: vh() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: S2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(r) {
      return g0(this, r);
    },
    safeExtend(r) {
      return _0(this, r);
    },
    merge(r) {
      return b0(this, r);
    },
    pick(r) {
      return v0(this, r);
    },
    omit(r) {
      return y0(this, r);
    },
    partial(...r) {
      return S0(pv, this, r[0]);
    },
    required(...r) {
      return w0(hv, this, r[0]);
    }
  });
});
function Ol(n, i) {
  const r = {
    type: "object",
    shape: n ?? {},
    ...ue(i)
  };
  return new z2(r);
}
const x2 = /* @__PURE__ */ U("ZodUnion", (n, i) => {
  t1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => wS(n, r, o, s), n.options = i.options;
});
function mv(n, i) {
  return new x2({
    type: "union",
    options: n,
    ...ue(i)
  });
}
const T2 = /* @__PURE__ */ U("ZodIntersection", (n, i) => {
  n1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => zS(n, r, o, s);
});
function E2(n, i) {
  return new T2({
    type: "intersection",
    left: n,
    right: i
  });
}
const hc = /* @__PURE__ */ U("ZodEnum", (n, i) => {
  a1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, s, f) => vS(n, o, s), n.enum = i.entries, n.options = Object.values(i.entries);
  const r = new Set(Object.keys(i.entries));
  n.extract = (o, s) => {
    const f = {};
    for (const d of o)
      if (r.has(d))
        f[d] = i.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new hc({
      ...i,
      checks: [],
      ...ue(s),
      entries: f
    });
  }, n.exclude = (o, s) => {
    const f = { ...i.entries };
    for (const d of o)
      if (r.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new hc({
      ...i,
      checks: [],
      ...ue(s),
      entries: f
    });
  };
});
function xo(n, i) {
  const r = Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n;
  return new hc({
    type: "enum",
    entries: r,
    ...ue(i)
  });
}
const A2 = /* @__PURE__ */ U("ZodLiteral", (n, i) => {
  i1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => yS(n, r, o), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function To(n, i) {
  return new A2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...ue(i)
  });
}
const k2 = /* @__PURE__ */ U("ZodTransform", (n, i) => {
  l1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => _S(n, r), n._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new Xh(n.constructor.name);
    r.addIssue = (f) => {
      if (typeof f == "string")
        r.issues.push(Ml(f, r.value, i));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = n), r.issues.push(Ml(d));
      }
    };
    const s = i.transform(r.value, r);
    return s instanceof Promise ? s.then((f) => (r.value = f, r.fallback = !0, r)) : (r.value = s, r.fallback = !0, r);
  };
});
function C2(n) {
  return new k2({
    type: "transform",
    transform: n
  });
}
const pv = /* @__PURE__ */ U("ZodOptional", (n, i) => {
  av.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => sv(n, r, o, s), n.unwrap = () => n._zod.def.innerType;
});
function yh(n) {
  return new pv({
    type: "optional",
    innerType: n
  });
}
const M2 = /* @__PURE__ */ U("ZodExactOptional", (n, i) => {
  r1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => sv(n, r, o, s), n.unwrap = () => n._zod.def.innerType;
});
function O2(n) {
  return new M2({
    type: "optional",
    innerType: n
  });
}
const j2 = /* @__PURE__ */ U("ZodNullable", (n, i) => {
  o1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => xS(n, r, o, s), n.unwrap = () => n._zod.def.innerType;
});
function gh(n) {
  return new j2({
    type: "nullable",
    innerType: n
  });
}
const N2 = /* @__PURE__ */ U("ZodDefault", (n, i) => {
  u1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => ES(n, r, o, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function D2(n, i) {
  return new N2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : qh(i);
    }
  });
}
const Z2 = /* @__PURE__ */ U("ZodPrefault", (n, i) => {
  s1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => AS(n, r, o, s), n.unwrap = () => n._zod.def.innerType;
});
function R2(n, i) {
  return new Z2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : qh(i);
    }
  });
}
const hv = /* @__PURE__ */ U("ZodNonOptional", (n, i) => {
  c1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => TS(n, r, o, s), n.unwrap = () => n._zod.def.innerType;
});
function U2(n, i) {
  return new hv({
    type: "nonoptional",
    innerType: n,
    ...ue(i)
  });
}
const Y2 = /* @__PURE__ */ U("ZodCatch", (n, i) => {
  f1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => kS(n, r, o, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function X2(n, i) {
  return new Y2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const H2 = /* @__PURE__ */ U("ZodPipe", (n, i) => {
  d1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => CS(n, r, o, s), n.in = i.in, n.out = i.out;
});
function _h(n, i) {
  return new H2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const B2 = /* @__PURE__ */ U("ZodReadonly", (n, i) => {
  m1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => MS(n, r, o, s), n.unwrap = () => n._zod.def.innerType;
});
function q2(n) {
  return new B2({
    type: "readonly",
    innerType: n
  });
}
const $2 = /* @__PURE__ */ U("ZodCustom", (n, i) => {
  p1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, o, s) => gS(n, r);
});
function L2(n, i = {}) {
  return /* @__PURE__ */ rS($2, n, i);
}
function V2(n, i) {
  return /* @__PURE__ */ oS(n, i);
}
const Eo = bt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Oe = Eo.optional(), G2 = Ol({
  segment_id: v2().int().nonnegative(),
  area_id: bt().min(1).optional(),
  name: bt().min(1),
  icon: bt().optional(),
  include_in_floor_clean: dv().optional().default(!0)
}).passthrough(), Q2 = Ol({
  id: bt().min(1),
  name: bt().min(1),
  map_entity: Eo,
  map_select_option: bt().min(1).optional(),
  vacuum_then_mop_routine: Eo.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: dv().optional().default(!1),
  rooms: zo(G2).min(1)
}).passthrough(), K2 = Ol({
  id: bt().min(1),
  name: bt().min(1),
  icon: bt().optional(),
  strategy: xo(["custom", "smartplan"]),
  cleaning_type: xo(["vacuum", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: bt().optional(),
  mop_mode: bt().optional(),
  mop_intensity: bt().optional(),
  cleaning_count: mv([To(1), To(2)]).optional()
}).passthrough(), vv = Ol({
  type: To("custom:roborock-vacuum-map-card").optional(),
  entity: Eo.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: bt().optional(),
  language: xo(["en", "nl"]).optional().default("en"),
  entities: Ol({
    map_select: Oe,
    cleaning_mode: Oe,
    vacuum_then_mop_script: Oe,
    mop_mode: Oe,
    mop_intensity: Oe,
    dock_mop_drying: Oe,
    dock_mop_drying_remaining_time: Oe,
    dock_child_lock: Oe,
    dock_mop_wash_frequency: Oe,
    dock_wash_mode: Oe,
    dock_wash_temperature: Oe,
    dock_auto_empty: Oe,
    dock_empty_mode: Oe,
    dock_auto_dry: Oe,
    dock_dry_duration: Oe,
    assisted_carry_stage: Oe,
    assisted_carry_job: Oe,
    assisted_carry_prepare_script: Oe,
    assisted_carry_start_script: Oe,
    assisted_carry_finish_script: Oe,
    water_shortage: Oe,
    mop_attached: Oe,
    water_box_attached: Oe,
    do_not_disturb: Oe,
    battery: Oe,
    current_room: Oe,
    cleaning_area: Oe,
    cleaning_time: Oe,
    cleaning_progress: Oe,
    status: Oe,
    error: Oe,
    last_clean_end: Oe
  }).passthrough().optional().default({}),
  floors: zo(Q2).min(1),
  presets: zo(K2).optional().default([]),
  default_preset: bt().optional().default("vacuum_only"),
  vacuum_mode_fallback: To("set_clean_motor_mode").optional()
}).passthrough().superRefine((n, i) => {
  if (n.floors.length > 1 && !n.entities.map_select && i.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" }), n.floors.filter((f) => f.assisted_carry).length > 0) {
    const f = [
      "assisted_carry_stage",
      "assisted_carry_job",
      "assisted_carry_prepare_script",
      "assisted_carry_start_script",
      "assisted_carry_finish_script"
    ];
    for (const d of f)
      n.entities[d] || i.addIssue({ code: "custom", path: ["entities", d], message: "Assisted carry requires this entity" });
  }
  const o = /* @__PURE__ */ new Set();
  for (const [f, d] of n.floors.entries()) {
    o.has(d.id) && i.addIssue({ code: "custom", path: ["floors", f, "id"], message: "Floor IDs must be unique" }), o.add(d.id);
    const m = /* @__PURE__ */ new Set();
    for (const [h, v] of d.rooms.entries())
      m.has(v.segment_id) && i.addIssue({
        code: "custom",
        path: ["floors", f, "rooms", h, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), m.add(v.segment_id);
  }
  const s = /* @__PURE__ */ new Set(["vacuum_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [f, d] of n.presets.entries())
    s.has(d.id) && i.addIssue({ code: "custom", path: ["presets", f, "id"], message: "Preset IDs must be unique" }), s.add(d.id);
  n.default_preset && !s.has(n.default_preset) && i.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function J2(n) {
  return vv.parse(n);
}
function W2(n) {
  const i = vv.safeParse(n);
  return i.success ? [] : i.error.issues.map((r) => `${r.path.join(".") || "config"}: ${r.message}`);
}
function yv() {
  return {
    type: "custom:roborock-vacuum-map-card",
    entity: "vacuum.roborock",
    language: "en",
    entities: {},
    floors: [
      {
        id: "floor",
        name: "Floor",
        map_entity: "image.roborock_custom_map",
        rooms: [{ segment_id: 1, name: "Room", include_in_floor_clean: !0 }]
      }
    ],
    default_preset: "vacuum_only"
  };
}
function so(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function gv(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((r) => {
    const o = r;
    return !so(o.vacuum?.x) || !so(o.vacuum?.y) || !so(o.map?.x) || !so(o.map?.y) ? [] : [o];
  }) : [];
}
function _v(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((o, s) => [String(s), o]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([o, s]) => {
    if (!s || typeof s != "object") return [];
    const f = s, d = f.number ?? f.room_id ?? f.segment_id ?? o, m = Number(d), h = Number(f.x0), v = Number(f.y0), _ = Number(f.x1), b = Number(f.y1);
    return [m, h, v, _, b].every(Number.isFinite) ? [
      {
        segment_id: m,
        source_name: typeof f.name == "string" ? f.name : `Room ${m}`,
        x0: h,
        y0: v,
        x1: _,
        y1: b
      }
    ] : [];
  }) : [];
}
function xl(n, i, r) {
  if (r.length < 3) throw new Error("At least three calibration points are required");
  const [o, s, f] = r, d = s.vacuum.x - o.vacuum.x, m = s.vacuum.y - o.vacuum.y, h = f.vacuum.x - o.vacuum.x, v = f.vacuum.y - o.vacuum.y, _ = d * v - m * h;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const b = n - o.vacuum.x, x = i - o.vacuum.y, E = (b * v - x * h) / _, M = (d * x - m * b) / _;
  return {
    x: o.map.x + E * (s.map.x - o.map.x) + M * (f.map.x - o.map.x),
    y: o.map.y + E * (s.map.y - o.map.y) + M * (f.map.y - o.map.y)
  };
}
function co(n, i, r) {
  if (r.length < 3) throw new Error("At least three calibration points are required");
  const [o, s, f] = r, d = s.map.x - o.map.x, m = s.map.y - o.map.y, h = f.map.x - o.map.x, v = f.map.y - o.map.y, _ = d * v - m * h;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const b = n - o.map.x, x = i - o.map.y, E = (b * v - x * h) / _, M = (d * x - m * b) / _;
  return {
    x: o.vacuum.x + E * (s.vacuum.x - o.vacuum.x) + M * (f.vacuum.x - o.vacuum.x),
    y: o.vacuum.y + E * (s.vacuum.y - o.vacuum.y) + M * (f.vacuum.y - o.vacuum.y)
  };
}
function Al(n) {
  return {
    x1: Math.min(n.x1, n.x2),
    y1: Math.min(n.y1, n.y2),
    x2: Math.max(n.x1, n.x2),
    y2: Math.max(n.y1, n.y2)
  };
}
function vc(n, i, r) {
  const o = Al(n), s = o.x2 - o.x1, f = o.y2 - o.y1, d = Math.min(Math.max(0, o.x1), Math.max(0, i - s)), m = Math.min(Math.max(0, o.y1), Math.max(0, r - f));
  return { x1: d, y1: m, x2: d + s, y2: m + f };
}
function P2(n, i) {
  const r = Al(n), o = [
    co(r.x1, r.y1, i),
    co(r.x2, r.y1, i),
    co(r.x2, r.y2, i),
    co(r.x1, r.y2, i)
  ], s = o.map(({ x: d }) => d), f = o.map(({ y: d }) => d);
  return {
    x1: Math.round(Math.min(...s)),
    y1: Math.round(Math.min(...f)),
    x2: Math.round(Math.max(...s)),
    y2: Math.round(Math.max(...f))
  };
}
function F2(n, i) {
  return `${[
    xl(n.x0, n.y0, i),
    xl(n.x1, n.y0, i),
    xl(n.x1, n.y1, i),
    xl(n.x0, n.y1, i)
  ].map((o, s) => `${s === 0 ? "M" : "L"} ${o.x} ${o.y}`).join(" ")} Z`;
}
function I2(n, i) {
  return xl((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function ew(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
function fo(n, i, r) {
  const o = [...n], [s] = o.splice(i, 1);
  return o.splice(r, 0, s), o;
}
function tw(n, i) {
  return Object.keys(n.states).filter((r) => r.startsWith(`${i}.`)).sort();
}
function mo({
  hass: n,
  domain: i,
  value: r,
  optional: o,
  onChange: s
}) {
  return /* @__PURE__ */ g.jsxs("select", { value: r ?? "", onChange: (f) => s(f.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: o ? "Not configured" : `Select ${i}` }),
    tw(n, i).map((f) => /* @__PURE__ */ g.jsx("option", { children: f }, f))
  ] });
}
function nw({
  areas: n,
  value: i,
  onChange: r
}) {
  const o = ae.useRef(null), [s, f] = ae.useState(() => !!customElements.get("ha-area-picker"));
  return ae.useEffect(() => {
    s || customElements.whenDefined("ha-area-picker").then(() => f(!0));
  }, [s]), ae.useEffect(() => {
    const d = o.current;
    if (!d) return;
    d.value = i, d.noAdd = !0;
    const m = (h) => r(h.detail.value || void 0);
    return d.addEventListener("value-changed", m), () => d.removeEventListener("value-changed", m);
  }, [s, r, i]), s ? /* @__PURE__ */ g.jsx("ha-area-picker", { ref: o, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ g.jsxs("select", { value: i ?? "", onChange: (d) => r(d.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: "Unmapped" }),
    n.map((d) => /* @__PURE__ */ g.jsxs("option", { value: d.area_id, children: [
      d.name,
      " (",
      d.area_id,
      ")"
    ] }, d.area_id)),
    i && !n.some((d) => d.area_id === i) && /* @__PURE__ */ g.jsx("option", { value: i, children: i })
  ] });
}
function aw({ hass: n, config: i, onChange: r }) {
  const o = W2(i), s = (m, h) => {
    const v = [...i.floors];
    v[m] = h, r({ ...i, floors: v });
  }, f = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], d = Object.values(n.areas ?? {}).sort((m, h) => m.name.localeCompare(h.name));
  return /* @__PURE__ */ g.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ g.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ g.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    o.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "editor-errors", role: "alert", children: o.map((m) => /* @__PURE__ */ g.jsx("div", { children: m }, m)) }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ g.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (m) => r({ ...i, name: m.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ g.jsxs("select", { value: i.language ?? "en", onChange: (m) => r({ ...i, language: m.target.value }), children: [
          /* @__PURE__ */ g.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ g.jsx("option", { value: "nl", children: "Nederlands" })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ g.jsx(mo, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && r({ ...i, entity: m }) })
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["cleaning_mode", "select", "Cleaning mode"],
        ["vacuum_then_mop_script", "script", "Legacy Vac followed by Mop script"],
        ["mop_mode", "select", "Mop mode"],
        ["mop_intensity", "select", "Mop intensity"],
        ["dock_mop_drying", "binary_sensor", "Dock mop drying"],
        ["dock_mop_drying_remaining_time", "sensor", "Dock mop drying remaining time"],
        ["dock_child_lock", "switch", "Dock child lock"],
        ["dock_mop_wash_frequency", "input_select", "Dock mop wash frequency"],
        ["dock_wash_mode", "input_select", "Dock washing mode"],
        ["dock_wash_temperature", "input_select", "Dock wash temperature"],
        ["dock_auto_empty", "input_boolean", "Dock auto-empty"],
        ["dock_empty_mode", "input_select", "Dock empty mode"],
        ["dock_auto_dry", "input_boolean", "Dock auto-drying"],
        ["dock_dry_duration", "input_select", "Dock drying duration"],
        ["assisted_carry_stage", "input_select", "Assisted carry stage"],
        ["assisted_carry_job", "input_text", "Assisted carry saved job"],
        ["assisted_carry_prepare_script", "script", "Assisted carry prepare script"],
        ["assisted_carry_start_script", "script", "Assisted carry start script"],
        ["assisted_carry_finish_script", "script", "Assisted carry finish script"],
        ["water_shortage", "binary_sensor", "Water shortage"],
        ["mop_attached", "binary_sensor", "Mop attached"],
        ["water_box_attached", "binary_sensor", "Water box attached"],
        ["do_not_disturb", "switch", "Do not disturb"],
        ["battery", "sensor", "Battery"],
        ["current_room", "sensor", "Current room"],
        ["cleaning_area", "sensor", "Cleaning area"],
        ["cleaning_time", "sensor", "Cleaning time"],
        ["cleaning_progress", "sensor", "Cleaning progress"],
        ["status", "sensor", "Status"],
        ["error", "sensor", "Error"],
        ["last_clean_end", "sensor", "Last clean end"]
      ].map(([m, h, v]) => /* @__PURE__ */ g.jsxs("label", { children: [
        v,
        /* @__PURE__ */ g.jsx(mo, { hass: n, domain: h, optional: !0, value: i.entities?.[m], onChange: (_) => r({ ...i, entities: { ...i.entities, [m]: _ } }) })
      ] }, m)),
      /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (m) => r({ ...i, vacuum_mode_fallback: m.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)"
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ g.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => r({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ g.jsx(Qp, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((m, h) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name || `Floor ${h + 1}` }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: h === 0, onClick: () => r({ ...i, floors: fo(i.floors, h, h - 1) }), children: /* @__PURE__ */ g.jsx(Lp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: h === i.floors.length - 1, onClick: () => r({ ...i, floors: fo(i.floors, h, h + 1) }), children: /* @__PURE__ */ g.jsx($p, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => r({ ...i, floors: i.floors.filter((v, _) => _ !== h) }), children: /* @__PURE__ */ g.jsx(go, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ g.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ g.jsx("input", { value: m.id, onChange: (v) => s(h, { ...m, id: v.target.value }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ g.jsx("input", { value: m.name, onChange: (v) => s(h, { ...m, name: v.target.value }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ g.jsx(mo, { hass: n, domain: "image", value: m.map_entity, onChange: (v) => {
              if (!v) return;
              const _ = _v(n.states[v]), b = new Map(m.rooms.map((E) => [E.segment_id, E])), x = _.map((E) => ({
                ...b.get(E.segment_id),
                segment_id: E.segment_id,
                name: b.get(E.segment_id)?.name ?? E.source_name,
                include_in_floor_clean: b.get(E.segment_id)?.include_in_floor_clean ?? !0
              }));
              s(h, { ...m, map_entity: v, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ g.jsxs("select", { value: m.map_select_option ?? "", onChange: (v) => s(h, { ...m, map_select_option: v.target.value || void 0 }), children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "Not configured" }),
              f.map((v) => /* @__PURE__ */ g.jsx("option", { children: v }, v))
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ g.jsx(mo, { hass: n, domain: "button", optional: !0, value: m.vacuum_then_mop_routine, onChange: (v) => s(h, { ...m, vacuum_then_mop_routine: v }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: m.assisted_carry === !0, onChange: (v) => s(h, { ...m, assisted_carry: v.target.checked }) }),
            " Guide this floor without its dock"
          ] })
        ] }),
        /* @__PURE__ */ g.jsx("h4", { children: "Discovered rooms" }),
        m.rooms.length === 0 ? /* @__PURE__ */ g.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ g.jsx("div", { className: "room-editor-list", children: m.rooms.map((v, _) => /* @__PURE__ */ g.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ g.jsxs("strong", { children: [
            "Segment ",
            v.segment_id
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ g.jsx("input", { value: v.name, onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, name: b.target.value }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ g.jsx(nw, { areas: d, value: v.area_id, onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, area_id: b }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ g.jsx("input", { value: v.icon ?? "", placeholder: "mdi:floor-plan", onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, icon: b.target.value || void 0 }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: v.include_in_floor_clean !== !1, onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, include_in_floor_clean: b.target.checked }, s(h, { ...m, rooms: x });
            } }),
            " Include in Entire floor"
          ] })
        ] }, v.segment_id)) })
      ] }, `${m.id}-${h}`))
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ g.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => {
          const m = { id: `preset_${(i.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          r({ ...i, presets: [...i.presets ?? [], m] });
        }, children: [
          /* @__PURE__ */ g.jsx(Qp, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((m, h) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: h === 0, onClick: () => r({ ...i, presets: fo(i.presets ?? [], h, h - 1) }), children: /* @__PURE__ */ g.jsx(Lp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: h === (i.presets?.length ?? 0) - 1, onClick: () => r({ ...i, presets: fo(i.presets ?? [], h, h + 1) }), children: /* @__PURE__ */ g.jsx($p, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => r({ ...i, presets: (i.presets ?? []).filter((v, _) => _ !== h) }), children: /* @__PURE__ */ g.jsx(go, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((v) => /* @__PURE__ */ g.jsxs("label", { children: [
            v.replaceAll("_", " "),
            /* @__PURE__ */ g.jsx("input", { value: m[v] ?? "", onChange: (_) => {
              const b = [...i.presets ?? []];
              b[h] = { ...m, [v]: _.target.value || void 0 }, r({ ...i, presets: b });
            } })
          ] }, v)),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ g.jsxs("select", { value: m.strategy, onChange: (v) => {
              const _ = [...i.presets ?? []];
              _[h] = { ...m, strategy: v.target.value }, r({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ g.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_type ?? "vacuum_and_mop", onChange: (v) => {
              const _ = [...i.presets ?? []];
              _[h] = { ...m, cleaning_type: v.target.value }, r({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_count ?? 1, onChange: (v) => {
              const _ = [...i.presets ?? []];
              _[h] = { ...m, cleaning_count: Number(v.target.value) }, r({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ g.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${m.id}-${h}`)),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ g.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (m) => r({ ...i, default_preset: m.target.value }), children: [
          /* @__PURE__ */ g.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ g.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ g.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ g.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (i.presets ?? []).map((m) => /* @__PURE__ */ g.jsx("option", { value: m.id, children: m.name }, m.id))
        ] })
      ] })
    ] })
  ] });
}
const iw = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class jl extends Error {
  constructor(i, r, o) {
    super(r, o), this.operation = i, this.name = "AssistedCarryError";
  }
  operation;
}
function lw(n, i) {
  return n.floors.find((r) => r.assisted_carry && r.id === i?.floor_id) ?? n.floors.find((r) => r.assisted_carry);
}
function rw(n, i) {
  const r = i.entities?.assisted_carry_stage, o = r ? n.states[r]?.state : void 0;
  return o && iw.has(o) ? o : "idle";
}
function ow(n) {
  return !["idle", "complete", "error"].includes(n);
}
function uw(n, i, r) {
  const o = r.cleaning_type === "vacuum_then_mop";
  if (r.strategy !== "smartplan" && !o && !r.fan_speed)
    throw new jl("prepare", "Suction is required");
  if (r.strategy !== "smartplan" && !o && r.cleaning_type !== "vacuum" && (!r.mop_mode || !r.mop_intensity))
    throw new jl("prepare", "Water flow and route are required");
  const s = [...new Set(i)], f = n.rooms.filter((m) => s.includes(m.segment_id)), d = n.rooms.filter((m) => m.include_in_floor_clean !== !1 && m.area_id).map((m) => m.segment_id);
  return {
    segment_ids: s,
    floor_id: n.id,
    map_select_option: n.map_select_option,
    area_ids: f.map((m) => m.area_id).filter((m) => !!m),
    whole_floor: s.length === d.length && d.every((m) => s.includes(m)),
    vacuum_then_mop_routine: n.vacuum_then_mop_routine,
    strategy: r.strategy,
    cleaning_type: r.cleaning_type,
    fan_speed: r.strategy === "smartplan" || o ? void 0 : r.fan_speed,
    mop_mode: r.strategy === "smartplan" || r.cleaning_type === "vacuum" || o ? void 0 : r.mop_mode,
    mop_intensity: r.strategy === "smartplan" || r.cleaning_type === "vacuum" || o ? void 0 : r.mop_intensity,
    cleaning_count: r.strategy === "smartplan" || r.cleaning_type === "vacuum_then_mop" ? 1 : r.cleaning_count
  };
}
function sw(n) {
  return JSON.stringify({
    s: n.segment_ids,
    d: n.floor_id,
    o: n.map_select_option,
    a: n.area_ids,
    e: n.whole_floor ? 1 : void 0,
    r: n.vacuum_then_mop_routine,
    g: n.strategy,
    t: n.cleaning_type,
    f: n.fan_speed,
    m: n.mop_mode,
    w: n.mop_intensity,
    c: n.cleaning_count
  });
}
function cw(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((h) => Number.isInteger(h)) || ![1, 2].includes(Number(i.c))) return;
      const r = i.g === void 0 ? "custom" : i.g, o = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(r)) || !["vacuum", "vacuum_and_mop", "vacuum_then_mop"].includes(String(o))) return;
      const s = typeof i.f == "string" ? i.f : void 0, f = typeof i.m == "string" ? i.m : void 0, d = typeof i.w == "string" ? i.w : void 0, m = o === "vacuum_then_mop";
      return r === "custom" && !m && !s || r === "custom" && !m && o !== "vacuum" && (!f || !d) ? void 0 : {
        segment_ids: i.s,
        floor_id: typeof i.d == "string" ? i.d : void 0,
        map_select_option: typeof i.o == "string" ? i.o : void 0,
        area_ids: Array.isArray(i.a) && i.a.every((h) => typeof h == "string") ? i.a : void 0,
        whole_floor: i.e === 1,
        vacuum_then_mop_routine: typeof i.r == "string" ? i.r : void 0,
        strategy: r,
        cleaning_type: o,
        fan_speed: s,
        mop_mode: f,
        mop_intensity: d,
        cleaning_count: Number(i.c)
      };
    } catch {
      return;
    }
}
function Si(n, i, r) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new jl(r, `${i ?? "entity"} is unavailable`);
  return i;
}
async function gi(n, i, r) {
  const o = Si(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: r }, { entity_id: o });
}
async function fw(n, i, r) {
  const o = Si(n, i.entities?.assisted_carry_job, "save_job"), s = Si(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: sw(r) }, { entity_id: o }), await gi(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function dw(n, i, r, o) {
  const s = Si(n, i.entities?.assisted_carry_start_script, "start_upstairs"), f = r.rooms.filter((m) => o.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (f.length === 0) throw new jl("start_upstairs", "No mapped rooms were saved");
  const d = {
    cleaning_area_id: f,
    strategy: o.strategy,
    cleaning_type: o.cleaning_type,
    cleaning_count: o.cleaning_count
  };
  o.fan_speed && (d.fan_speed = o.fan_speed), o.mop_mode && (d.mop_mode = o.mop_mode), o.mop_intensity && (d.mop_intensity = o.mop_intensity), await n.callService("script", "turn_on", {
    variables: d
  }, { entity_id: s });
}
async function mw(n, i) {
  const r = Si(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: r });
}
async function bh(n, i) {
  await gi(n, i, "idle");
  const r = Si(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: r });
}
const po = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function ho(n, i) {
  if (!i) return [];
  const r = n.states[i];
  return !r || r.state === "unavailable" ? [] : Array.isArray(r.attributes.options) ? r.attributes.options.map(String) : [];
}
function pw(n, i) {
  const r = n.states[i.entity], o = Number(r?.attributes.supported_features ?? 0), s = Array.isArray(r?.attributes.fan_speed_list) ? r.attributes.fan_speed_list.map(String) : [], f = ho(n, i.entities?.map_select), d = ho(n, i.entities?.cleaning_mode), m = ho(n, i.entities?.mop_mode), h = ho(n, i.entities?.mop_intensity);
  return {
    fanSpeeds: s,
    mapOptions: f,
    cleaningModes: d,
    mopModes: m,
    mopIntensities: h,
    canStart: !!(o & po.start),
    canPause: !!(o & po.pause),
    canStop: !!(o & po.stop),
    canDock: !!(o & po.returnHome),
    hasMapSelect: f.length > 0,
    hasCleaningMode: d.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: h.length > 0
  };
}
function hw(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function vw(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const yw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, gw = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, _w = {
  normal: 0,
  warm: 1,
  hot: 2
}, bw = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, Sw = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class En extends Error {
  constructor(i, r, o) {
    super(r, o), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function en(n, i, r, o) {
  const s = { command: r };
  o !== void 0 && (s.params = o), await n.callService("vacuum", "send_command", s, { entity_id: i.entity });
}
function vo(n, i, r) {
  const o = n[i];
  if (o === void 0) throw new En(r, `Unsupported value: ${i}`);
  return o;
}
function ww(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new En("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function zw(n, i, r, o) {
  const s = i.entities?.[yw[r]];
  if (!s) return;
  const f = s.split(".")[0];
  if (typeof o == "boolean") {
    if (!["input_boolean", "switch"].includes(f))
      throw new En(r, `${s} is not a boolean helper`);
    await n.callService(f, o ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(f))
    throw new En(r, `${s} is not a select helper`);
  await n.callService(f, "select_option", { option: o }, { entity_id: s });
}
async function xw(n, i, r, o) {
  try {
    switch (r) {
      case "mop_wash_frequency":
        await en(n, i, "set_smart_wash_params", ww(String(o)));
        break;
      case "wash_mode":
        await en(n, i, "set_wash_towel_mode", {
          wash_mode: vo(gw, String(o), r)
        });
        break;
      case "wash_temperature":
        await en(n, i, "set_wash_water_temperature", {
          values: vo(_w, String(o), r)
        });
        break;
      case "auto_empty":
        await en(n, i, "set_dust_collection_switch_status", { status: o ? 1 : 0 });
        break;
      case "empty_mode":
        await en(n, i, "set_dust_collection_mode", {
          mode: vo(bw, String(o), r)
        });
        break;
      case "auto_dry":
        await en(n, i, "app_set_dryer_setting", { status: o ? 1 : 0 });
        break;
      case "dry_duration":
        await en(n, i, "app_set_dryer_setting", {
          on: { dry_time: vo(Sw, String(o), r) }
        });
        break;
    }
    await zw(n, i, r, o);
  } catch (s) {
    throw s instanceof En ? s : new En(r, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function ic(n, i, r, o = !1) {
  const s = `${o ? "stop" : "start"}_${r}`;
  try {
    r === "empty" && await en(n, i, o ? "app_stop_collect_dust" : "app_start_collect_dust"), r === "wash" && await en(n, i, o ? "app_stop_wash" : "app_start_wash"), r === "dry" && await en(n, i, "app_set_dryer_status", { status: o ? 0 : 1 }), r === "drain" && await en(n, i, "app_empty_rinse_tank_water");
  } catch (f) {
    throw new En(s, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
const Tw = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class De extends Error {
  constructor(i, r, o) {
    super(r, o), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function Ew(n, i, r, o, s, f) {
  const d = Date.now();
  for (; Date.now() - d < o; ) {
    if (n().states[i]?.state === r) return;
    await f(s);
  }
  throw new De("wait_for_state", `${i} did not become “${r}” within ${o / 1e3}s`);
}
function Tl(n, i, r, o) {
  const s = n.states[i];
  if (!s || s.state === "unavailable") throw new De(o, `${i} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(r)) throw new De(o, `${i} does not support “${r}”`);
}
async function bl(n, i, r, o, s, f, d, m = !0) {
  const h = n();
  if (Tl(h, i, r, o), h.states[i]?.state !== r)
    try {
      if (await h.callService("select", "select_option", { option: r }, { entity_id: i }), !m) return;
      await Ew(n, i, r, s, f, d);
    } catch (v) {
      throw v instanceof De ? new De(o, v.message, { cause: v }) : new De(o, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function Aw(n, i) {
  const r = {
    fan_power: 102,
    water_box_mode: 200
  };
  i.entities?.mop_mode && (r.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [r] },
      { entity_id: i.entity }
    );
  } catch (o) {
    throw new De("set_cleaning_mode", o instanceof Error ? o.message : String(o), { cause: o });
  }
}
async function bv(n, i, r, o, s) {
  try {
    await n.callService("vacuum", "send_command", { command: r, params: o }, { entity_id: i.entity });
  } catch (f) {
    throw new De(s, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
async function Sh(n, i, r) {
  await bv(n, i, "set_clean_repeat_times", { repeat: r }, "set_cleaning_count");
}
async function kw(n, i) {
  await bv(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function wh(n, i, r) {
  const o = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(o) ? o.map(String) : []).includes(r))
    throw new De("set_fan_speed", `${i} does not support “${r}”`);
}
async function Cw({
  getHass: n,
  config: i,
  floor: r,
  rooms: o,
  draft: s,
  zone: f,
  timeoutMs: d = 1e4,
  pollMs: m = 150,
  sleep: h = (v) => new Promise((_) => setTimeout(_, v))
}) {
  const v = n(), _ = v.states[i.entity];
  if (!_ || _.state === "unavailable") throw new De("preflight", `${i.entity} is unavailable`);
  if (hw(_.state)) throw new De("preflight", `Vacuum is ${_.state}`);
  const b = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (b && !["none", "unknown", "unavailable", ""].includes(b.state))
    throw new De("preflight", `Vacuum error: ${b.state}`);
  const x = [...new Set(o.map((H) => H.area_id).filter((H) => !!H))];
  if (!f && x.length === 0) throw new De("preflight", "Select at least one room mapped to a Home Assistant area");
  if (f && (s.strategy !== "custom" || !["vacuum", "vacuum_and_mop"].includes(s.cleaning_type)))
    throw new De("preflight", "Zone cleaning supports only Vacuum and Vac & Mop");
  if (f && (![f.x1, f.y1, f.x2, f.y2].every(Number.isFinite) || f.x2 <= f.x1 || f.y2 <= f.y1))
    throw new De("preflight", "The selected zone is invalid");
  const E = i.entities?.map_select, M = async () => {
    if (!(i.floors.length <= 1)) {
      if (!E || !r.map_select_option) throw new De("select_floor", "This floor has no map selector mapping");
      if (await bl(n, E, r.map_select_option, "select_floor", d, m, h), m > 0 && await h(m), n().states[E]?.state !== r.map_select_option)
        throw new De("select_floor", `${E} did not stay on “${r.map_select_option}”`);
    }
  };
  if (await M(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const H = r.vacuum_then_mop_routine;
    if (H) {
      const L = n().states[H];
      if (!L || L.state === "unavailable")
        throw new De("start_vacuum_then_mop", `${H} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: H });
      } catch (J) {
        throw new De("start_vacuum_then_mop", J instanceof Error ? J.message : String(J), { cause: J });
      }
      return r.rooms.filter((J) => J.include_in_floor_clean !== !1).map((J) => J.area_id).filter((J) => !!J);
    }
    const W = i.entities?.vacuum_then_mop_script, V = W ? n().states[W] : void 0;
    if (!W || !V || V.state === "unavailable")
      throw new De("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const D = i.entities?.cleaning_mode;
    if (!D)
      throw new De("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (Tl(n(), D, "vacuum", "set_cleaning_mode"), Tl(n(), D, "mop", "set_cleaning_mode"), s.mop_mode) {
      const L = i.entities?.mop_mode;
      if (!L) throw new De("set_mop_mode", "The selected profile requires a mop-mode entity");
      Tl(n(), L, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const L = i.entities?.mop_intensity;
      if (!L) throw new De("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      Tl(n(), L, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && wh(n(), i.entity, s.fan_speed), await M();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: x,
            fan_speed: s.fan_speed,
            mop_mode: s.mop_mode,
            mop_intensity: s.mop_intensity
          }
        },
        { entity_id: W }
      );
    } catch (L) {
      throw new De("start_vacuum_then_mop", L instanceof Error ? L.message : String(L), { cause: L });
    }
    return x;
  }
  if (s.strategy === "smartplan")
    await kw(n(), i), await Sh(n(), i, 1);
  else {
    const H = i.entities?.cleaning_mode, W = s.cleaning_type === "vacuum" ? "vacuum" : "vac_and_mop", V = H && n().states[H]?.attributes.options;
    if (H && Array.isArray(V) && V.map(String).includes(W))
      await bl(
        n,
        H,
        W,
        "set_cleaning_mode",
        d,
        m,
        h,
        W !== "vac_and_mop"
      );
    else if (s.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await Aw(n(), i);
    else if (s.cleaning_type === "vacuum")
      throw new De("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
    const D = i.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!D) throw new De("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[D]?.state === "smart_mode" && Tw.has(s.mop_mode) && await bl(n, D, "custom", "leave_smartplan", d, m, h), await bl(n, D, s.mop_mode, "set_mop_mode", d, m, h);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const L = i.entities?.mop_intensity;
      if (!L) throw new De("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await bl(n, L, s.mop_intensity, "set_mop_intensity", d, m, h);
    }
    if (s.fan_speed) {
      const L = n();
      wh(L, i.entity, s.fan_speed);
      try {
        await L.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: i.entity });
      } catch (J) {
        throw new De("set_fan_speed", J instanceof Error ? J.message : String(J), { cause: J });
      }
    }
    f || await Sh(n(), i, s.cleaning_count);
  }
  await M();
  const Q = new Set(o.map((H) => H.segment_id)), G = o.length === r.rooms.length && r.rooms.every((H) => Q.has(H.segment_id));
  try {
    f ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...f, repeats: s.cleaning_count },
      { entity_id: i.entity }
    ) : G ? await n().callService("vacuum", "start", void 0, { entity_id: i.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: x },
      { entity_id: i.entity }
    );
  } catch (H) {
    const W = f ? "clean_zone" : G ? "start_floor" : "clean_area";
    throw new De(W, H instanceof Error ? H.message : String(H), { cause: H });
  }
  return x;
}
const Mw = {
  status: "Status",
  battery: "Battery",
  room: "Room",
  area: "Area",
  duration: "Duration",
  progress: "Progress",
  entireFloor: "Entire floor",
  configureJob: "Configure job",
  selectionMode: "Map selection mode",
  rooms: "Rooms",
  zone: "Zone",
  selectedRooms: "Selected rooms",
  noRoomsSelected: "Tap one or more rooms on the map",
  selectedZone: "Selected zone",
  noZoneSelected: "Drag on the map to draw a cleaning zone",
  zoneReady: "Drag to move or use the corners to resize",
  customZone: "Custom zone",
  clearZone: "Clear zone",
  resizeZone: "Resize zone",
  pause: "Pause",
  resume: "Resume",
  stop: "Stop",
  dock: "Dock",
  dryingMop: "Drying mop",
  washingMop: "Washing mop",
  remaining: "remaining",
  configureTitle: "Configure cleaning job",
  presets: "Presets",
  cleaningType: "Cleaning type",
  vacuumOnly: "Vacuum only",
  vacuumAndMop: "Vacuum and mop",
  vacuumThenMop: "Vac followed by Mop",
  smartPlanDescription: "Roborock AI chooses suction, water flow, and route for every selected room.",
  vacuumDescription: "Vacuum only. The mop stays raised.",
  vacuumAndMopDescription: "Vacuum and mop together for a daily clean.",
  vacuumThenMopDescription: "Runs the saved Roborock routine for this floor. Rooms, suction, water flow, passes, and route are defined in the Roborock app.",
  suction: "Suction",
  waterFlow: "Water flow",
  cleaningCount: "Cleaning count",
  savedProfiles: "Saved profiles",
  mopRoute: "Mop route",
  mopIntensity: "Mop intensity",
  cancel: "Cancel",
  start: "Start",
  starting: "Starting…",
  unsupported: "Unavailable",
  mapMissing: "The configured map entity is unavailable.",
  imageMissing: "The map entity does not expose an image.",
  calibrationMissing: "Roborock Custom Map calibration is missing. Install and configure Roborock Custom Map.",
  roomsMissing: "Roborock Custom Map room metadata is missing. No hitboxes were guessed.",
  roomUnmapped: "This segment is not mapped to a Home Assistant area.",
  launched: "Cleaning job sent",
  floor: "Floor",
  close: "Close",
  dockStation: "Dock station",
  dockOverview: "Wash, empty, dry, and dock settings",
  empty: "Empty",
  wash: "Wash",
  dry: "Dry",
  dockSettings: "Dock settings",
  mopWashFrequency: "Mop wash frequency",
  washingMode: "Washing mode",
  washTemperature: "Water temperature",
  dustbin: "Dustbin",
  autoEmpty: "Auto-empty",
  emptyMode: "Empty mode",
  drying: "Drying",
  autoDry: "Auto-drying",
  dryDuration: "Duration",
  safetyMaintenance: "Safety & maintenance",
  childLock: "Dock child lock",
  drainWaterTank: "Drain onboard dirty-water tank",
  drainWarning: "Unavailable through the current Home Assistant Roborock integration. Use the Roborock app.",
  confirmEmpty: "Start dock emptying? This will make noise.",
  confirmWash: "Start washing the mop? This will run the dock pump.",
  confirmDry: "Start drying the mop? This will run the dock fan.",
  confirmDrain: "Drain the onboard dirty-water tank now?",
  drainRejected: "Home Assistant cannot currently encode this Roborock command correctly. Use the Roborock app.",
  settingSaved: "Dock setting saved",
  dockActionSent: "Dock command sent",
  active: "Active",
  inactive: "Off",
  prepareUpstairs: "Prepare upstairs",
  preparingUpstairs: "Preparing…",
  startUpstairs: "Start upstairs",
  dockAndFinish: "Dock & finish",
  newUpstairsJob: "New upstairs job",
  assistedCarryTitle: "Upstairs assisted clean",
  assistedCarryDescription: "The dock prepares the mop, then the card guides both carries and finishes dock maintenance.",
  assisted_preparing_title: "Preparing at the dock",
  assisted_preparing_description: "Stopping drying, washing the mop, and moving the robot to its pickup point.",
  assisted_carry_upstairs_title: "Carry the robot upstairs",
  assisted_carry_upstairs_description: "Place it at a clear starting point, then start the saved Vac & Mop job.",
  assisted_cleaning_upstairs_title: "Cleaning upstairs",
  assisted_cleaning_upstairs_description: "The robot will return to this upstairs starting point when it is finished.",
  assisted_carry_downstairs_title: "Carry the robot downstairs",
  assisted_carry_downstairs_description: "Place it on the downstairs floor near the dock, or directly onto the dock.",
  assisted_finishing_title: "Finishing at the dock",
  assisted_finishing_description: "Docking, emptying, washing the mop, and verifying automatic drying.",
  assisted_complete_title: "Upstairs cleaning complete",
  assisted_complete_description: "The robot is docked, the mop is washed, and drying has started when configured.",
  assisted_error_title: "Assistant needs attention",
  assisted_error_description: "Check the robot and dock, then reset the workflow to try again.",
  lastClean: "Last clean",
  justNow: "just now",
  yesterday: "yesterday",
  ago: "ago",
  daysAgo: "days ago"
}, Ow = {
  status: "Status",
  battery: "Batterij",
  room: "Ruimte",
  area: "Oppervlak",
  duration: "Duur",
  progress: "Voortgang",
  entireFloor: "Hele verdieping",
  configureJob: "Taak instellen",
  selectionMode: "Kaartselectiemodus",
  rooms: "Kamers",
  zone: "Zone",
  selectedRooms: "Geselecteerde kamers",
  noRoomsSelected: "Tik één of meer kamers op de kaart aan",
  selectedZone: "Geselecteerde zone",
  noZoneSelected: "Sleep op de kaart om een schoonmaakzone te tekenen",
  zoneReady: "Sleep om te verplaatsen of gebruik de hoeken om het formaat aan te passen",
  customZone: "Aangepaste zone",
  clearZone: "Zone wissen",
  resizeZone: "Zone aanpassen",
  pause: "Pauze",
  resume: "Hervatten",
  stop: "Stop",
  dock: "Naar dock",
  dryingMop: "Dweil drogen",
  washingMop: "Dweil wassen",
  remaining: "resterend",
  configureTitle: "Schoonmaaktaak instellen",
  presets: "Presets",
  cleaningType: "Schoonmaaktype",
  vacuumOnly: "Alleen stofzuigen",
  vacuumAndMop: "Stofzuigen en dweilen",
  vacuumThenMop: "Stofzuigen, daarna dweilen",
  smartPlanDescription: "Roborock AI kiest per geselecteerde kamer de zuigkracht, waterhoeveelheid en route.",
  vacuumDescription: "Alleen stofzuigen. De dweil blijft opgetild.",
  vacuumAndMopDescription: "Tegelijk stofzuigen en dweilen voor de dagelijkse schoonmaak.",
  vacuumThenMopDescription: "Start de opgeslagen Roborock-routine voor deze verdieping. Kamers, zuigkracht, waterhoeveelheid, rondes en route zijn ingesteld in de Roborock-app.",
  suction: "Zuigkracht",
  waterFlow: "Waterhoeveelheid",
  cleaningCount: "Aantal keer",
  savedProfiles: "Opgeslagen profielen",
  mopRoute: "Dweilroute",
  mopIntensity: "Dweilintensiteit",
  cancel: "Annuleren",
  start: "Start",
  starting: "Starten…",
  unsupported: "Niet beschikbaar",
  mapMissing: "De ingestelde kaartentiteit is niet beschikbaar.",
  imageMissing: "De kaartentiteit bevat geen afbeelding.",
  calibrationMissing: "Roborock Custom Map-kalibratie ontbreekt. Installeer en configureer Roborock Custom Map.",
  roomsMissing: "Kamergegevens van Roborock Custom Map ontbreken. Er worden geen hitboxes gegokt.",
  roomUnmapped: "Dit segment is niet gekoppeld aan een Home Assistant-ruimte.",
  launched: "Schoonmaaktaak verzonden",
  floor: "Verdieping",
  close: "Sluiten",
  dockStation: "Dockstation",
  dockOverview: "Wassen, legen, drogen en dockinstellingen",
  empty: "Legen",
  wash: "Wassen",
  dry: "Drogen",
  dockSettings: "Dockinstellingen",
  mopWashFrequency: "Dweilwasfrequentie",
  washingMode: "Wasstand",
  washTemperature: "Watertemperatuur",
  dustbin: "Stofbak",
  autoEmpty: "Automatisch legen",
  emptyMode: "Leegstand",
  drying: "Drogen",
  autoDry: "Automatisch drogen",
  dryDuration: "Duur",
  safetyMaintenance: "Veiligheid en onderhoud",
  childLock: "Dock kinderslot",
  drainWaterTank: "Vuilwatertank in robot legen",
  drainWarning: "Niet beschikbaar via de huidige Roborock-integratie van Home Assistant. Gebruik de Roborock-app.",
  confirmEmpty: "Dock legen starten? Dit maakt geluid.",
  confirmWash: "Dweil wassen starten? Dit activeert de dockpomp.",
  confirmDry: "Dweil drogen starten? Dit activeert de dockventilator.",
  confirmDrain: "Vuilwatertank in de robot nu legen?",
  drainRejected: "Home Assistant kan deze Roborock-opdracht momenteel niet correct coderen. Gebruik de Roborock-app.",
  settingSaved: "Dockinstelling opgeslagen",
  dockActionSent: "Dockopdracht verzonden",
  active: "Actief",
  inactive: "Uit",
  prepareUpstairs: "Boven voorbereiden",
  preparingUpstairs: "Voorbereiden…",
  startUpstairs: "Start boven",
  dockAndFinish: "Docken en afronden",
  newUpstairsJob: "Nieuwe boventaak",
  assistedCarryTitle: "Begeleid boven schoonmaken",
  assistedCarryDescription: "Het dock bereidt de dweil voor; daarna begeleidt de kaart beide draagmomenten en de dockreiniging.",
  assisted_preparing_title: "Voorbereiden bij het dock",
  assisted_preparing_description: "Drogen stoppen, de dweil wassen en de robot naar het ophaalpunt rijden.",
  assisted_carry_upstairs_title: "Draag de robot naar boven",
  assisted_carry_upstairs_description: "Zet hem op een vrije startplek en start daarna de opgeslagen stofzuig- en dweiltaak.",
  assisted_cleaning_upstairs_title: "Boven wordt schoongemaakt",
  assisted_cleaning_upstairs_description: "Na afloop keert de robot terug naar deze startplek boven.",
  assisted_carry_downstairs_title: "Draag de robot naar beneden",
  assisted_carry_downstairs_description: "Zet hem beneden in de buurt van het dock, of plaats hem rechtstreeks op het dock.",
  assisted_finishing_title: "Afronden bij het dock",
  assisted_finishing_description: "Docken, stofbak legen, dweil wassen en automatisch drogen controleren.",
  assisted_complete_title: "Boven is klaar",
  assisted_complete_description: "De robot staat in het dock, de dweil is gewassen en drogen is gestart wanneer ingesteld.",
  assisted_error_title: "Assistent heeft aandacht nodig",
  assisted_error_description: "Controleer de robot en het dock en reset daarna de workflow.",
  lastClean: "Laatste schoonmaak",
  justNow: "zojuist",
  yesterday: "gisteren",
  ago: "geleden",
  daysAgo: "dagen geleden"
};
function B(n, i) {
  return (n === "nl" ? Ow : Mw)[i];
}
const jw = [
  {
    id: "smartplan",
    name: "SmartPlan",
    icon: "mdi:creation",
    strategy: "smartplan",
    cleaning_type: "vacuum_and_mop",
    cleaning_count: 1
  },
  {
    id: "vacuum_then_mop",
    name: "Vac followed by Mop",
    icon: "mdi:vacuum-outline",
    strategy: "custom",
    cleaning_type: "vacuum_then_mop",
    fan_speed: "balanced",
    mop_mode: "standard",
    mop_intensity: "medium",
    cleaning_count: 1
  },
  {
    id: "vacuum_and_mop",
    name: "Vac & Mop",
    icon: "mdi:water-plus",
    strategy: "custom",
    cleaning_type: "vacuum_and_mop",
    fan_speed: "balanced",
    mop_mode: "standard",
    mop_intensity: "medium",
    cleaning_count: 1
  },
  {
    id: "vacuum_only",
    name: "Vacuum only",
    icon: "mdi:vacuum",
    strategy: "custom",
    cleaning_type: "vacuum",
    fan_speed: "balanced",
    mop_mode: "standard",
    cleaning_count: 1
  }
];
function Nw(n, i, r, o) {
  const s = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (r.cleaning_type === "vacuum" && !s)
    return "cleaning mode “vacuum”";
  if (r.cleaning_type === "vacuum_then_mop") {
    if (o?.vacuum_then_mop_routine || o?.assisted_carry && n.entities?.assisted_carry_start_script) return;
    if (!n.entities?.vacuum_then_mop_script) return "Vac followed by Mop script";
    if (!i.cleaningModes.includes("vacuum") || !i.cleaningModes.includes("mop"))
      return "cleaning modes “vacuum” and “mop”";
  }
  if (r.fan_speed && !i.fanSpeeds.includes(r.fan_speed)) return `fan speed “${r.fan_speed}”`;
  if (r.cleaning_type !== "vacuum" && r.mop_mode && !i.mopModes.includes(r.mop_mode))
    return `mop mode “${r.mop_mode}”`;
  if (r.cleaning_type !== "vacuum" && r.mop_intensity && !i.mopIntensities.includes(r.mop_intensity))
    return `mop intensity “${r.mop_intensity}”`;
}
function Dw(n, i, r) {
  return [...jw, ...n.presets ?? []].map((o) => {
    const s = Nw(n, i, o, r);
    return {
      preset: o,
      available: !s,
      reason: s ? `Unsupported ${s}` : void 0
    };
  });
}
function kl(n) {
  return {
    preset_id: n.id,
    strategy: n.strategy,
    cleaning_type: n.cleaning_type ?? "vacuum_and_mop",
    fan_speed: n.fan_speed,
    mop_mode: n.mop_mode,
    mop_intensity: n.mop_intensity,
    cleaning_count: n.cleaning_count ?? 1
  };
}
const Zw = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, Rw = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, Uw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
};
function xa(n, i, r) {
  const o = i.entities?.[Uw[r]], s = o ? n.states[o]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? Rw[r] : r === "auto_empty" || r === "auto_dry" ? s === "on" : s;
}
function El(n, i) {
  const r = {
    smart: ["Smart", "Slim"],
    light: ["Light", "Licht"],
    balanced: ["Balanced", "Gebalanceerd"],
    deep: ["Deep", "Diep"],
    max: ["Max", "Max"],
    normal: ["Normal", "Normaal"],
    warm: ["Warm", "Warm"],
    hot: ["High temperature", "Hoge temperatuur"],
    "2h": ["2 hours", "2 uur"],
    "3h": ["3 hours · Standard", "3 uur · Standaard"],
    "4h": ["4 hours", "4 uur"]
  };
  return i.endsWith("_min") ? `${i.replace("_min", "")} min` : r[i]?.[n === "nl" ? 1 : 0] ?? i;
}
function Sl({
  label: n,
  setting: i,
  value: r,
  language: o,
  disabled: s,
  onChange: f
}) {
  return /* @__PURE__ */ g.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx("select", { "aria-label": n, value: r, disabled: s, onChange: (d) => f(d.target.value), children: Zw[i].map((d) => /* @__PURE__ */ g.jsx("option", { value: d, children: El(o, d) }, d)) })
  ] });
}
function lc({
  label: n,
  checked: i,
  disabled: r,
  onChange: o
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-label": n,
        "aria-checked": i,
        className: `dock-toggle ${i ? "active" : ""}`,
        disabled: r,
        onClick: () => o(!i),
        children: /* @__PURE__ */ g.jsx("span", {})
      }
    )
  ] });
}
function Yw({
  hass: n,
  config: i,
  language: r,
  washing: o,
  emptying: s,
  drying: f,
  dryingRemaining: d,
  pending: m,
  onClose: h,
  onAction: v,
  onSetting: _,
  onChildLock: b
}) {
  const x = !!m, E = i.entities?.dock_child_lock, M = E ? n.states[E]?.state === "on" : !1, Q = String(xa(n, i, "mop_wash_frequency")), G = String(xa(n, i, "wash_mode")), H = String(xa(n, i, "wash_temperature")), W = !!xa(n, i, "auto_empty"), V = String(xa(n, i, "empty_mode")), D = !!xa(n, i, "auto_dry"), L = String(xa(n, i, "dry_duration")), J = [
    { action: "empty", label: B(r, "empty"), active: s, icon: /* @__PURE__ */ g.jsx(go, {}), detail: El(r, V) },
    { action: "wash", label: B(r, "wash"), active: o, icon: /* @__PURE__ */ g.jsx(Kp, {}), detail: `${El(r, G)} · ${El(r, H)}` },
    { action: "dry", label: B(r, "dry"), active: f, icon: /* @__PURE__ */ g.jsx(Jp, {}), detail: f ? d : El(r, L) }
  ];
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": B(r, "close"), onClick: h }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "dock-sheet-title", children: B(r, "dockStation") }),
          /* @__PURE__ */ g.jsx("p", { children: B(r, "dockOverview") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": B(r, "close"), onClick: h, children: /* @__PURE__ */ g.jsx(wc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "dock-actions", children: J.map(($) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: $.active ? "active" : "",
            disabled: x,
            onClick: () => v($.action, $.active),
            children: [
              /* @__PURE__ */ g.jsx("span", { className: "dock-action-icon", children: $.icon }),
              /* @__PURE__ */ g.jsx("strong", { children: $.active ? B(r, "stop") : $.label }),
              /* @__PURE__ */ g.jsx("small", { children: $.active ? B(r, "active") : $.detail })
            ]
          },
          $.action
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Kp, {}),
            B(r, "dockSettings")
          ] }),
          /* @__PURE__ */ g.jsx(Sl, { label: B(r, "mopWashFrequency"), setting: "mop_wash_frequency", value: Q, language: r, disabled: x, onChange: ($) => _("mop_wash_frequency", $) }),
          /* @__PURE__ */ g.jsx(Sl, { label: B(r, "washingMode"), setting: "wash_mode", value: G, language: r, disabled: x, onChange: ($) => _("wash_mode", $) }),
          /* @__PURE__ */ g.jsx(Sl, { label: B(r, "washTemperature"), setting: "wash_temperature", value: H, language: r, disabled: x, onChange: ($) => _("wash_temperature", $) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(go, {}),
            B(r, "dustbin")
          ] }),
          /* @__PURE__ */ g.jsx(lc, { label: B(r, "autoEmpty"), checked: W, disabled: x, onChange: ($) => _("auto_empty", $) }),
          /* @__PURE__ */ g.jsx(Sl, { label: B(r, "emptyMode"), setting: "empty_mode", value: V, language: r, disabled: x, onChange: ($) => _("empty_mode", $) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Jp, {}),
            B(r, "drying")
          ] }),
          /* @__PURE__ */ g.jsx(lc, { label: B(r, "autoDry"), checked: D, disabled: x, onChange: ($) => _("auto_dry", $) }),
          /* @__PURE__ */ g.jsx(Sl, { label: B(r, "dryDuration"), setting: "dry_duration", value: L, language: r, disabled: x, onChange: ($) => _("dry_duration", $) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Uh, {}),
            B(r, "safetyMaintenance")
          ] }),
          E && /* @__PURE__ */ g.jsx(lc, { label: B(r, "childLock"), checked: M, disabled: x, onChange: b }),
          /* @__PURE__ */ g.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ g.jsx(M_, {}),
            /* @__PURE__ */ g.jsxs("span", { children: [
              /* @__PURE__ */ g.jsx("strong", { children: B(r, "drainWaterTank") }),
              /* @__PURE__ */ g.jsx("small", { children: B(r, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ g.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function yc({ icon: n, className: i }) {
  return n ? ae.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const zh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only"], Xw = ["quiet", "balanced", "turbo", "max", "max_plus"], Hw = ["quiet", "balanced", "turbo", "max"], Bw = ["fast", "standard", "deep"], qw = ["slight", "low", "medium", "moderate", "high", "extreme"], $w = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };
function Sv(n) {
  return n.replaceAll("_", " ").replace(/\b\w/g, (i) => i.toUpperCase());
}
function rc({
  value: n,
  options: i,
  onChange: r,
  title: o
}) {
  return i.length === 0 ? null : /* @__PURE__ */ g.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ g.jsx("span", { children: o }),
    /* @__PURE__ */ g.jsx("div", { className: "option-strip", children: i.map((s) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        className: n === s ? "active" : "",
        onClick: () => r(s),
        children: Sv(s)
      },
      s
    )) })
  ] });
}
function xh(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : n.cleaning_type === "vacuum_then_mop";
}
function Lw({
  language: n,
  draft: i,
  capabilities: r,
  presets: o,
  selectedRoomNames: s,
  submitting: f,
  assistedCarry: d = !1,
  zoneCleaning: m = !1,
  onDraftChange: h,
  onClose: v,
  onStart: _
}) {
  const x = (m ? ["vacuum_only", "vacuum_and_mop"] : zh).map((D) => o.find(({ preset: L }) => L.id === D)).filter(
    (D) => !!D
  ), E = o.filter(
    ({ preset: D }) => !zh.includes(D.id) && (!m || D.strategy === "custom" && ["vacuum", "vacuum_and_mop"].includes(D.cleaning_type ?? "vacuum"))
  ), Q = (i.cleaning_type === "vacuum" ? Xw : Hw).filter((D) => r.fanSpeeds.includes(D)), G = Bw.filter((D) => r.mopModes.includes(D)), H = qw.filter((D) => r.mopIntensities.includes(D)), W = Math.max(0, H.indexOf(i.mop_intensity ?? "medium")), V = i.strategy === "smartplan" ? B(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? B(n, "vacuumDescription") : i.cleaning_type === "vacuum_then_mop" ? B(n, "vacuumThenMopDescription") : B(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": B(n, "close"), onClick: v }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "job-sheet-title", children: d ? B(n, "assistedCarryTitle") : B(n, "configureTitle") }),
          /* @__PURE__ */ g.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": B(n, "close"), onClick: v, children: /* @__PURE__ */ g.jsx(wc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-tabs", role: "tablist", "aria-label": B(n, "cleaningType"), children: x.map(({ preset: D, available: L, reason: J }) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": xh(i, D.id),
            className: xh(i, D.id) ? "active" : "",
            disabled: !L || f,
            title: J,
            onClick: () => h(kl(D)),
            children: [
              /* @__PURE__ */ g.jsx(yc, { icon: D.icon }),
              /* @__PURE__ */ g.jsx("span", { children: D.id === "smartplan" ? "AI SmartPlan" : D.name })
            ]
          },
          D.id
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ g.jsx("p", { className: "mode-description", children: V }),
          i.strategy !== "smartplan" && i.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx(
              rc,
              {
                title: B(n, "suction"),
                value: i.fan_speed,
                options: Q,
                onChange: (D) => h({ ...i, preset_id: "custom_draft", fan_speed: D })
              }
            ),
            i.cleaning_type !== "vacuum" && H.length > 0 && /* @__PURE__ */ g.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ g.jsx("span", { children: B(n, "waterFlow") }),
              /* @__PURE__ */ g.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ g.jsx("strong", { children: Sv(H[W]) }),
                /* @__PURE__ */ g.jsx("output", { children: $w[H[W]] })
              ] }),
              /* @__PURE__ */ g.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: H.length - 1,
                  step: "1",
                  value: W,
                  "aria-label": B(n, "waterFlow"),
                  onChange: (D) => h({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: H[Number(D.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ g.jsx(
              rc,
              {
                title: B(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: ["1", "2"],
                onChange: (D) => h({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(D)
                })
              }
            ),
            /* @__PURE__ */ g.jsx(
              rc,
              {
                title: B(n, "mopRoute"),
                value: i.mop_mode,
                options: G,
                onChange: (D) => h({ ...i, preset_id: "custom_draft", mop_mode: D })
              }
            )
          ] })
        ] }),
        !d && E.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ g.jsx("span", { children: B(n, "savedProfiles") }),
          /* @__PURE__ */ g.jsx("div", { children: E.map(({ preset: D, available: L, reason: J }) => /* @__PURE__ */ g.jsxs(
            "button",
            {
              type: "button",
              disabled: !L || f,
              title: J,
              className: i.preset_id === D.id ? "active" : "",
              onClick: () => h(kl(D)),
              children: [
                /* @__PURE__ */ g.jsx(yc, { icon: D.icon }),
                " ",
                D.name
              ]
            },
            D.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("footer", { children: [
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: v, children: B(n, "cancel") }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "primary", disabled: f, onClick: _, children: f ? d ? B(n, "preparingUpstairs") : B(n, "starting") : d ? B(n, "prepareUpstairs") : B(n, "start") })
      ] })
    ] })
  ] });
}
var Ea = function(n, i) {
  return Number(n.toFixed(i));
}, Vw = function(n, i) {
  return i;
}, je = function(n, i, r) {
  r && typeof r == "function" && r(n, i);
}, Gw = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, Qw = function(n) {
  return n;
}, Kw = function(n) {
  return n * n;
}, Jw = function(n) {
  return n * (2 - n);
}, Ww = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, Pw = function(n) {
  return n * n * n;
}, Fw = function(n) {
  return --n * n * n + 1;
}, Iw = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, ez = function(n) {
  return n * n * n * n;
}, tz = function(n) {
  return 1 - --n * n * n * n;
}, nz = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, az = function(n) {
  return n * n * n * n * n;
}, iz = function(n) {
  return 1 + --n * n * n * n * n;
}, lz = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, wv = {
  easeOut: Gw,
  linear: Qw,
  easeInQuad: Kw,
  easeOutQuad: Jw,
  easeInOutQuad: Ww,
  easeInCubic: Pw,
  easeOutCubic: Fw,
  easeInOutCubic: Iw,
  easeInQuart: ez,
  easeOutQuart: tz,
  easeInOutQuart: nz,
  easeInQuint: az,
  easeOutQuint: iz,
  easeInOutQuint: lz
}, zv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, tn = function(n) {
  n.mounted && (zv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function xv(n, i, r, o) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    tn(n), n.animation = function() {
      if (!n.mounted)
        return zv(n.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - s, m = d / r, h = wv[i], v = h(m);
      d >= r ? (o(f), n.animation = null) : n.animation && (o(v), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function rz(n) {
  var i = n.scale, r = n.positionX, o = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(r) || Number.isNaN(o));
}
function ta(n, i, r, o) {
  var s = rz(i);
  if (!(!n.mounted || !s)) {
    var f = n.setState, d = n.state, m = d.scale, h = d.positionX, v = d.positionY, _ = i.scale - m, b = i.positionX - h, x = i.positionY - v;
    r === 0 ? f(i.scale, i.positionX, i.positionY) : xv(n, o, r, function(E) {
      E !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var M = m + _ * E, Q = h + b * E, G = v + x * E;
      f(M, Q, G);
    });
  }
}
function oz(n, i, r) {
  var o = n.offsetWidth, s = n.offsetHeight, f = i.offsetWidth, d = i.offsetHeight, m = f * r, h = d * r, v = o - m, _ = s - h;
  return {
    wrapperWidth: o,
    wrapperHeight: s,
    newContentWidth: m,
    newDiffWidth: v,
    newContentHeight: h,
    newDiffHeight: _
  };
}
var uz = function(n, i, r, o, s, f, d) {
  var m = n > i ? r * (d ? 0.5 : 1) : 0, h = o > s ? f * (d ? 0.5 : 1) : 0, v = n - i - m, _ = m, b = o - s - h, x = h;
  return {
    minPositionX: v,
    maxPositionX: _,
    minPositionY: b,
    maxPositionY: x,
    scaleWidthFactor: m,
    scaleHeightFactor: h
  };
}, Oc = function(n, i) {
  var r = n.wrapperComponent, o = n.contentComponent, s = n.setup, f = s.centerZoomedOut, d = s.disablePadding;
  if (!r || !o)
    throw new Error("Components are not mounted");
  var m = oz(r, o, i), h = m.wrapperWidth, v = m.wrapperHeight, _ = m.newContentWidth, b = m.newContentHeight, x = m.newDiffWidth, E = m.newDiffHeight, M = uz(h, _, x, v, b, E, !!f), Q = h >= _ && v >= b;
  d && Q && !f && (M.minPositionX = 0, M.maxPositionX = 0, M.minPositionY = 0, M.maxPositionY = 0);
  var G = n.setup, H = G.minPositionX, W = G.maxPositionX, V = G.minPositionY, D = G.maxPositionY;
  return H != null && (M.minPositionX = h * (1 - i) + H * i), W != null && (M.maxPositionX = W * i), V != null && (M.minPositionY = v * (1 - i) + V * i), D != null && (M.maxPositionY = D * i), M;
}, Nl = function(n, i, r, o) {
  return o ? n < i ? Ea(i, 2) : n > r ? Ea(r, 2) : Ea(n, 2) : Ea(n, 2);
}, wi = function(n, i) {
  var r = Oc(n, i);
  return n.bounds = r, r;
};
function Rl(n, i, r, o, s, f, d) {
  var m = r.minPositionX, h = r.minPositionY, v = r.maxPositionX, _ = r.maxPositionY, b = 0, x = 0;
  d && (b = s, x = f);
  var E = Nl(n, m - b, v + b, o), M = Nl(i, h - x, _ + x, o);
  return { x: E, y: M };
}
function jo(n, i, r, o, s, f) {
  var d = n.state, m = d.scale, h = d.positionX, v = d.positionY, _ = o - m;
  if (typeof i != "number" || typeof r != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: h, y: v };
  var b = h - i * _, x = v - r * _, E = Rl(b, x, s, f, 0, 0, null);
  return E;
}
var Th = 1e-7;
function Ul(n, i, r, o, s) {
  var f = s ? o : 0, d = Math.max(i - f, Th), m = r + f;
  return !Number.isNaN(r) && n >= m ? m : !Number.isNaN(i) && n <= d ? d : Math.max(n, Th);
}
var Eh = function(n, i) {
  var r = n.setup.panning.excluded, o = n.isInitialized, s = n.wrapperComponent, f = i.target, d = "shadowRoot" in f && "composedPath" in i, m = d ? i.composedPath().some(function(_) {
    return _ instanceof Element ? s?.contains(_) : !1;
  }) : s?.contains(f), h = o && f && m;
  if (!h)
    return !1;
  var v = Yl(f, r);
  return !(v || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, Ah = function(n) {
  var i = n.isInitialized, r = n.isPanning, o = n.setup, s = o.panning.disabled, f = i && r && !s;
  return !!f;
}, sz = function(n, i) {
  var r = n.state, o = r.positionX, s = r.positionY;
  n.isPanning = !0;
  var f = i.clientX, d = i.clientY;
  n.startCoords = { x: f - o, y: d - s };
}, cz = function(n, i) {
  var r = i.touches, o = n.state, s = o.positionX, f = o.positionY;
  n.isPanning = !0;
  var d = r.length === 1;
  if (d) {
    var m = r[0].clientX, h = r[0].clientY;
    n.startCoords = { x: m - s, y: h - f };
  }
};
function fz(n) {
  var i = n.state, r = i.positionX, o = i.positionY, s = i.scale, f = n.setup, d = f.disabled, m = f.limitToBounds, h = f.centerZoomedOut, v = n.wrapperComponent;
  if (!(d || !v || !n.bounds)) {
    var _ = n.bounds, b = _.maxPositionX, x = _.minPositionX, E = _.maxPositionY, M = _.minPositionY, Q = r > b || r < x, G = o > E || o < M, H = r > b ? v.offsetWidth : n.setup.minPositionX || 0, W = o > E ? v.offsetHeight : n.setup.minPositionY || 0, V = jo(n, H, W, s, n.bounds, m || h), D = V.x, L = V.y;
    return {
      scale: s,
      positionX: Q ? D : r,
      positionY: G ? L : o
    };
  }
}
function Tv(n, i, r, o, s) {
  var f = n.setup.limitToBounds, d = n.wrapperComponent, m = n.bounds, h = n.state, v = h.scale, _ = h.positionX, b = h.positionY;
  if (!(d === null || m === null || i === _ && r === b)) {
    var x = Rl(i, r, m, f, o, s, d), E = x.x, M = x.y;
    n.setState(v, E, M);
  }
}
var dz = function(n, i, r) {
  var o = n.startCoords, s = n.state, f = n.setup.panning, d = f.lockAxisX, m = f.lockAxisY, h = s.positionX, v = s.positionY;
  if (!o)
    return { x: h, y: v };
  var _ = i - o.x, b = r - o.y, x = d ? h : _, E = m ? v : b;
  return { x, y: E };
}, Fn = function(n, i, r) {
  var o = n.setup, s = n.state, f = o.minScale, d = o.disablePadding, m = o.centerZoomedOut, h = r ?? s.scale;
  return i > 0 && h >= f && !d && !m ? i : 0;
}, Pn;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(Pn || (Pn = {}));
var mz = function(n) {
  var i = n.mounted, r = n.wrapperComponent, o = n.contentComponent, s = n.setup, f = s.disabled, d = s.velocityAnimation, m = s.limitToBounds, h = n.state.scale, v = d.disabled;
  if (v || f || !i || !r || !o)
    return !1;
  if (!m)
    return !0;
  var _ = r.offsetWidth < o.offsetWidth * h || r.offsetHeight < o.offsetHeight * h;
  return _;
}, pz = function(n) {
  var i = n.mounted, r = n.velocity, o = n.bounds, s = n.setup, f = s.disabled, d = s.velocityAnimation, m = d.disabled, h = !m && !f && i;
  return !(!h || !r || !o);
};
function hz(n, i) {
  var r = n.setup.velocityAnimation, o = r.animationTime, s = r.maxAnimationTime, f = r.inertia;
  return Math.min(o * Math.max(1, Math.abs(i / f)), s);
}
function kh(n, i, r, o, s, f, d, m, h, v) {
  if (s) {
    if (i > d && r > d) {
      var _ = d + (n - d) * v;
      return _ > h ? h : _ < d ? d : _;
    }
    if (i < f && r < f) {
      var _ = f + (n - f) * v;
      return _ < m ? m : _ > f ? f : _;
    }
  }
  return o ? i : Nl(n, f, d, s);
}
function vz(n) {
  var i = 1, r = n.offsetWidth / window.innerWidth;
  return Number.isNaN(r) ? i : Math.min(i, r);
}
var oc = function(n, i, r) {
  var o = 0, s = n * r;
  return Number.isNaN(s) ? o : n < 0 ? Math.max(s, -i) : Math.min(s, i);
};
function yz(n, i, r) {
  var o, s, f = mz(n);
  if (f) {
    var d = n.lastMousePosition, m = n.velocityTime, h = n.setup, v = n.wrapperComponent, _ = h.velocityAnimation, b = _.maxStrengthMouse, x = _.maxStrengthTouch, E = _.sensitivityTouch, M = _.sensitivityMouse, Q = Date.now();
    if (d && m && v) {
      var G = vz(v), H = (o = {}, o[Pn.TOUCH] = E, o[Pn.MOUSE] = M, o)[r], W = (s = {}, s[Pn.TOUCH] = x, s[Pn.MOUSE] = b, s)[r], V = i.x - d.x, D = i.y - d.y, L = oc(V / G, W, H), J = oc(D / G, W, H), $ = Q - m, me = V * V + D * D, ce = oc(Math.sqrt(me) / $, W, H);
      n.velocity = { velocityX: L, velocityY: J, total: ce };
    }
    n.lastMousePosition = i, n.velocityTime = Q;
  }
}
function gz(n) {
  var i = n.velocity, r = n.bounds, o = n.setup, s = n.wrapperComponent, f = pz(n);
  if (!(!f || !i || !r || !s)) {
    var d = i.velocityX, m = i.velocityY, h = i.total, v = r.maxPositionX, _ = r.minPositionX, b = r.maxPositionY, x = r.minPositionY, E = o.limitToBounds, M = o.autoAlignment, Q = o.zoomAnimation, G = o.panning, H = G.lockAxisY, W = G.lockAxisX, V = Q.animationType, D = M.sizeX, L = M.sizeY, J = M.velocityAlignmentTime, $ = J, me = hz(n, h), ce = Math.max(me, $), _e = Fn(n, D), ze = Fn(n, L), se = _e * s.offsetWidth / 100, xe = ze * s.offsetHeight / 100, P = v + se, ee = _ - se, A = b + xe, q = x - xe, F = n.state, pe = (/* @__PURE__ */ new Date()).getTime();
    xv(n, V, ce, function(re) {
      var w = n.state, N = w.scale, K = w.positionX, I = w.positionY, de = (/* @__PURE__ */ new Date()).getTime() - pe, ve = de / $, be = wv[M.animationType], Ge = 1 - be(Math.min(1, ve)), $e = 1 - re, Wt = K + d * $e, Ut = I + m * $e, on = kh(Wt, F.positionX, K, W, E, _, v, ee, P, Ge), na = kh(Ut, F.positionY, I, H, E, x, b, q, A, Ge);
      if (K !== Wt || I !== Ut) {
        n.setState(N, on, na);
        var St = n.props.onPanning;
        St && St(ke(n), {});
      }
    });
  }
}
function Ch(n, i) {
  var r = n.state, o = r.scale, s = r.positionX, f = r.positionY;
  n.panStartPosition = { x: s, y: f }, tn(n), wi(n, o), window.TouchEvent !== void 0 && i instanceof TouchEvent ? cz(n, i) : sz(n, i);
}
function Ev(n, i) {
  var r = n.state.scale, o = n.setup, s = o.minScale, f = o.autoAlignment, d = f.disabled, m = f.sizeX, h = f.sizeY, v = f.animationTime, _ = f.animationType, b = d || r < s || !m && !h;
  if (!b) {
    var x = fz(n);
    x && ta(n, x, v, _);
  }
}
function Mh(n, i, r, o) {
  var s = n.startCoords, f = n.setup, d = f.autoAlignment, m = d.sizeX, h = d.sizeY;
  if (s) {
    var v = dz(n, i, r), _ = v.x, b = v.y, x = Fn(n, m), E = Fn(n, h);
    yz(n, { x: _, y: b }, o), Tv(n, _, b, x, E);
  }
}
function _z(n, i) {
  if (n.isPanning) {
    var r = n.velocity, o = n.wrapperComponent, s = n.contentComponent;
    n.isPanning = !1;
    var f = n.state, d = f.positionX, m = f.positionY, h = f.scale, v = n.panStartPosition;
    if (n.panStartPosition = null, v) {
      var _ = d - v.x, b = m - v.y;
      if (_ * _ + b * b <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var x = o?.offsetWidth || 0, E = o?.offsetHeight || 0, M = (s?.offsetWidth || 0) * h, Q = (s?.offsetHeight || 0) * h, G = !n.setup.limitToBounds || x < M || E < Q, H = !i && r && r.total > 0.1 && G;
    H ? gz(n) : Ev(n);
  }
}
function jc(n, i, r, o) {
  var s = n.setup, f = s.minScale, d = s.maxScale, m = s.limitToBounds, h = Ul(Ea(i, 2), f, d, 0, !1), v = wi(n, h), _ = jo(n, r, o, h, v, m), b = _.x, x = _.y;
  return { scale: h, positionX: b, positionY: x };
}
function Nc(n, i, r) {
  var o = n.state.scale, s = n.wrapperComponent, f = n.setup, d = f.minScale, m = f.maxScale, h = f.limitToBounds, v = f.zoomAnimation, _ = v.disabled, b = v.animationTime, x = v.animationType, E = o >= d && o <= m, M = _ || E;
  if ((o >= 1 || h) && Ev(n), !(M || !s || !n.mounted)) {
    var Q = i || s.offsetWidth / 2, G = r || s.offsetHeight / 2, H = o < d ? d : m, W = jc(n, H, Q, G);
    W && ta(n, W, b, x);
  }
}
var Kt = function() {
  return Kt = Object.assign || function(i) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (i[f] = r[f]);
    }
    return i;
  }, Kt.apply(this, arguments);
};
function Oh(n, i, r) {
  for (var o = 0, s = i.length, f; o < s; o++)
    (f || !(o in i)) && (f || (f = Array.prototype.slice.call(i, 0, o)), f[o] = i[o]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var uc = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, Ta = {
  disabled: !1,
  minPositionX: null,
  maxPositionX: null,
  minPositionY: null,
  maxPositionY: null,
  minScale: 1,
  maxScale: 8,
  limitToBounds: !0,
  centerZoomedOut: !1,
  centerOnInit: !1,
  disablePadding: !1,
  smooth: !0,
  detached: !1,
  wheel: {
    step: 0.015,
    disabled: !1,
    wheelDisabled: !1,
    touchPadDisabled: !1,
    activationKeys: [],
    excluded: []
  },
  trackPadPanning: {
    disabled: !0,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    activationKeys: [],
    excluded: []
  },
  panning: {
    disabled: !1,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    allowLeftClickPan: !0,
    allowMiddleClickPan: !0,
    allowRightClickPan: !0,
    activationKeys: [],
    excluded: []
  },
  pinch: {
    step: 5,
    disabled: !1,
    allowPanning: !0,
    excluded: []
  },
  doubleClick: {
    disabled: !1,
    step: 0.7,
    mode: "zoomIn",
    animationType: "easeOut",
    animationTime: 200,
    excluded: []
  },
  zoomAnimation: {
    disabled: !1,
    size: 0.4,
    animationTime: 200,
    animationType: "easeOut"
  },
  autoAlignment: {
    disabled: !1,
    sizeX: 100,
    sizeY: 100,
    animationTime: 200,
    velocityAlignmentTime: 400,
    animationType: "easeOut"
  },
  velocityAnimation: {
    disabled: !1,
    sensitivityMouse: 1,
    sensitivityTouch: 1.2,
    maxStrengthMouse: 20,
    maxStrengthTouch: 40,
    inertia: 1,
    animationTime: 300,
    maxAnimationTime: 800,
    animationType: "easeOut"
  }
}, gc = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Av = function(n) {
  var i, r, o, s, f, d, m, h, v, _ = Math.max((i = n.minScale) !== null && i !== void 0 ? i : Ta.minScale, 1e-7), b = (r = n.maxScale) !== null && r !== void 0 ? r : Ta.maxScale, x = (o = n.initialScale) !== null && o !== void 0 ? o : uc.scale, E = Math.min(Math.max(x, _), b), M = Nl((s = n.initialPositionX) !== null && s !== void 0 ? s : uc.positionX, (f = n.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = n.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, n.minPositionX != null || n.maxPositionX != null), Q = Nl((m = n.initialPositionY) !== null && m !== void 0 ? m : uc.positionY, (h = n.minPositionY) !== null && h !== void 0 ? h : -1 / 0, (v = n.maxPositionY) !== null && v !== void 0 ? v : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: E,
    scale: E,
    positionX: M,
    positionY: Q
  };
}, jh = function(n) {
  var i = Kt({}, Ta);
  return Object.keys(n).forEach(function(r) {
    var o = r, s = typeof n[o] < "u", f = typeof Ta[o] < "u";
    if (f && s) {
      var d = Object.prototype.toString.call(Ta[o]), m = d === "[object Object]", h = d === "[object Array]";
      m ? i[o] = Kt(Kt({}, Ta[o]), n[o]) : h ? i[o] = Oh(Oh([], Ta[o], !0), n[o]) : i[o] = n[o];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, kv = function(n, i, r) {
  var o = n.state.scale, s = n.wrapperComponent, f = n.setup, d = f.maxScale, m = f.minScale, h = f.zoomAnimation, v = f.smooth, _ = h.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var b = v ? o * Math.exp(i * r) : o + i * r, x = Ul(Ea(b, 3), m, d, _, !1);
  return x;
};
function Cv(n, i, r, o, s) {
  var f, d, m = n.wrapperComponent, h = n.state, v = h.scale, _ = h.positionX, b = h.positionY, x = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var E = x.disabled ? 0 : o, M = m.offsetWidth, Q = m.offsetHeight, G = (M / 2 - _) / v, H = (Q / 2 - b) / v, W = kv(n, i, r), V = jc(n, W, G, H);
  if (!V)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var D = n.props, L = D.onZoomStart, J = D.onZoom, $ = D.onZoomStop, me = new MouseEvent("mousemove", { bubbles: !0 }), ce = ke(n);
  je(ce, me, L), je(ce, me, J), ta(n, V, E, s);
  var _e = (d = (f = m.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  _e && _e.setTimeout(function() {
    n.mounted && je(ke(n), me, $);
  }, E);
}
function Mv(n, i, r, o) {
  var s, f, d = n.setup, m = n.wrapperComponent, h = n.contentComponent, v = d.limitToBounds, _ = d.centerOnInit, b = Av(n.props), x = n.state, E = x.scale, M = x.positionX, Q = x.positionY;
  if (m) {
    var G = b.positionX, H = b.positionY;
    if (_ && h) {
      var W = Dc(b.scale, m, h);
      G = W.positionX, H = W.positionY;
    }
    var V = Oc(n, b.scale), D = Rl(G, H, V, v, 0, 0, m), L = {
      scale: b.scale,
      positionX: D.x,
      positionY: D.y
    };
    if (!(E === b.scale && M === b.positionX && Q === b.positionY)) {
      o?.();
      var J = n.props, $ = J.onZoomStart, me = J.onZoom, ce = J.onZoomStop, _e = new MouseEvent("mousemove", { bubbles: !0 }), ze = ke(n);
      je(ze, _e, $), je(ze, _e, me), ta(n, L, i, r);
      var se = (f = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      se && se.setTimeout(function() {
        n.mounted && je(ke(n), _e, ce);
      }, i);
    }
  }
}
function bz(n, i, r, o) {
  var s = n.getBoundingClientRect(), f = i.getBoundingClientRect(), d = r.getBoundingClientRect(), m = f.x * o.scale, h = f.y * o.scale;
  return {
    x: (s.x - d.x + m) / o.scale,
    y: (s.y - d.y + h) / o.scale
  };
}
function Sz(n, i, r, o, s) {
  o === void 0 && (o = 0), s === void 0 && (s = 0);
  var f = n.wrapperComponent, d = n.contentComponent, m = n.state, h = n.setup, v = h.limitToBounds, _ = h.minScale, b = h.maxScale;
  if (!f || !d)
    return m;
  var x = f.getBoundingClientRect(), E = i.getBoundingClientRect(), M = bz(i, f, d, m), Q = M.x, G = M.y, H = E.width / m.scale, W = E.height / m.scale, V = f.offsetWidth / H, D = f.offsetHeight / W, L = Ul(r || Math.min(V, D), _, b, 0, !1), J = (x.width - H * L) / 2, $ = (x.height - W * L) / 2, me = (x.left - Q) * L + J + o, ce = (x.top - G) * L + $ + s, _e = Oc(n, L), ze = Rl(me, ce, _e, v, 0, 0, f), se = ze.x, xe = ze.y;
  return { positionX: se, positionY: xe, scale: L };
}
var wz = function(n) {
  return function(i, r, o) {
    i === void 0 && (i = 0.5), r === void 0 && (r = 300), o === void 0 && (o = "easeOut"), Cv(n, 1, i, r, o);
  };
}, zz = function(n) {
  return function(i, r, o) {
    i === void 0 && (i = 0.5), r === void 0 && (r = 300), o === void 0 && (o = "easeOut"), Cv(n, -1, i, r, o);
  };
}, xz = function(n) {
  return function(i, r, o, s, f) {
    s === void 0 && (s = 300), f === void 0 && (f = "easeOut");
    var d = n.state, m = d.positionX, h = d.positionY, v = d.scale, _ = n.wrapperComponent, b = n.contentComponent, x = n.setup.disabled;
    if (!(x || !_ || !b)) {
      var E = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(r) ? h : r,
        scale: Number.isNaN(o) ? v : o
      };
      ta(n, E, s, f);
    }
  };
}, Tz = function(n) {
  return function(i, r) {
    i === void 0 && (i = 200), r === void 0 && (r = "easeOut"), Mv(n, i, r);
  };
}, Ez = function(n) {
  return function(i, r, o) {
    r === void 0 && (r = 200), o === void 0 && (o = "easeOut");
    var s = n.state, f = n.wrapperComponent, d = n.contentComponent;
    if (f && d) {
      var m = Dc(i || s.scale, f, d);
      ta(n, m, r, o);
    }
  };
}, Az = function(n) {
  return function(i, r, o, s, f, d) {
    o === void 0 && (o = 600), s === void 0 && (s = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), tn(n);
    var m = n.wrapperComponent, h = typeof i == "string" ? document.getElementById(i) : i;
    if (m && h && m.contains(h)) {
      var v = Sz(n, h, r, f, d);
      ta(n, v, o, s);
    }
  };
}, Ao = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: wz(n),
    zoomOut: zz(n),
    setTransform: xz(n),
    resetTransform: Tz(n),
    centerView: Ez(n),
    zoomToElement: Az(n)
  };
}, kz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, ke = function(n) {
  var i = {};
  return Object.assign(i, kz(n)), Object.assign(i, Ao(n)), i;
}, sc = !1;
function cc() {
  try {
    var n = {
      get passive() {
        return sc = !0, !1;
      }
    };
    return n;
  } catch {
    return sc = !1, sc;
  }
}
var yo = ".".concat(gc.wrapperClass), Yl = function(n, i) {
  return i.some(function(r) {
    return n.matches("".concat(yo, " ").concat(r, ", ").concat(yo, " .").concat(r, ", ").concat(yo, " ").concat(r, " *, ").concat(yo, " .").concat(r, " *"));
  });
}, Dl = function(n) {
  n && clearTimeout(n);
}, Cz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Ov = function(n, i, r) {
  var o = Cz(r);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(o, ")");
}, Dc = function(n, i, r) {
  var o = r.offsetWidth * n, s = r.offsetHeight * n, f = (i.offsetWidth - o) / 2, d = (i.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: f,
    positionY: d
  };
};
function Mz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Oz(n) {
  return function(i) {
    n.forEach(function(r) {
      typeof r == "function" ? r(i) : r != null && (r.current = i);
    });
  };
}
var jv = function(n, i) {
  var r = n.setup.wheel, o = r.disabled, s = r.wheelDisabled, f = r.touchPadDisabled, d = r.excluded, m = n.isInitialized, h = n.isPanning, v = i.target, _ = m && !h && !o && v;
  if (!_ || s && !i.ctrlKey || f && i.ctrlKey)
    return !1;
  var b = Yl(v, d);
  if (b)
    return !1;
  var x = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!x;
}, jz = function(n, i) {
  var r = n.setup, o = r.disabled, s = r.trackPadPanning, f = s.activationKeys, d = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || o || s.disabled || i.ctrlKey)
    return !1;
  var m = jv(n, i);
  if (m)
    return !1;
  var h = i.target, v = Yl(h, d);
  if (v)
    return !1;
  var _ = n.isPressingKeys(f);
  return !!_;
}, Nz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Dz(n, i) {
  var r = Nz(n), o = Vw(i, r);
  return o;
}
function Nv(n, i, r) {
  var o = i.getBoundingClientRect(), s = 0, f = 0;
  if ("clientX" in n)
    s = (n.clientX - o.left) / r, f = (n.clientY - o.top) / r;
  else {
    var d = n.touches[0];
    s = (d.clientX - o.left) / r, f = (d.clientY - o.top) / r;
  }
  return (Number.isNaN(s) || Number.isNaN(f)) && console.error("No mouse or touch offset found"), {
    x: s,
    y: f
  };
}
var Zz = function(n, i, r, o, s) {
  var f = n.state.scale, d = n.wrapperComponent, m = n.setup, h = m.maxScale, v = m.minScale, _ = m.zoomAnimation, b = m.disablePadding, x = _.size, E = _.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var M = f + i * r, Q = o ? !1 : !E, G = Ul(M, v, h, x, Q && !b);
  return G;
}, Dv = function(n, i) {
  var r = n.previousWheelEvent, o = n.state.scale, s = n.setup, f = s.maxScale, d = s.minScale;
  return r ? o < f || o > d || Math.sign(r.deltaY) !== Math.sign(i.deltaY) || r.deltaY > 0 && r.deltaY < i.deltaY || r.deltaY < 0 && r.deltaY > i.deltaY || Math.sign(r.deltaY) !== Math.sign(i.deltaY) : !1;
}, Rz = function(n, i) {
  var r = n.setup.pinch, o = r.disabled, s = r.excluded, f = n.isInitialized, d = i.target, m = f && !o && d;
  if (!m)
    return !1;
  var h = Yl(d, s);
  return !h;
}, Uz = function(n) {
  var i = n.setup.pinch.disabled, r = n.isInitialized, o = n.pinchStartDistance, s = r && !i && o !== null;
  return !!s;
}, Yz = function(n, i, r) {
  var o = r.getBoundingClientRect(), s = n.touches, f = s[0].clientX - o.left, d = s[0].clientY - o.top, m = s[1].clientX - o.left, h = s[1].clientY - o.top;
  return {
    x: (f + m) / 2 / i,
    y: (d + h) / 2 / i
  };
}, Zv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, Xz = 5, Hz = function(n, i) {
  var r = n.pinchStartScale, o = n.pinchStartDistance, s = n.setup, f = s.maxScale, d = s.minScale, m = s.zoomAnimation, h = s.disablePadding, v = s.pinch, _ = m.size, b = m.disabled, x = v.step;
  if (!r || o === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var E = i / o, M = E * r, Q = (M - r) * (x / Xz), G = r + Q, H = G === 1 / 0 ? 0 : Ea(G, 10);
  return Ul(H, d, f, _, !b && !h);
}, Rv = 160, Uv = 100, Bz = function(n, i) {
  var r = n.props, o = r.onWheelStart, s = r.onZoomStart;
  n.wheelStopEventTimer || (tn(n), je(ke(n), i, o), je(ke(n), i, s));
}, qz = function(n, i) {
  var r = n.props, o = r.onWheel, s = r.onZoom, f = n.contentComponent, d = n.setup, m = n.state, h = m.scale, v = d.limitToBounds, _ = d.centerZoomedOut, b = d.zoomAnimation, x = d.wheel, E = d.disablePadding, M = d.smooth, Q = b.size, G = b.disabled, H = x.step;
  if (!f)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var W = Dz(i, null), V = M ? H * Math.abs(i.deltaY) : H, D = Zz(n, W, V, !i.ctrlKey);
  if (h !== D) {
    var L = wi(n, D), J = Nv(i, f, h), $ = G || Q === 0 || _ || E, me = v && $, ce = jo(n, J.x, J.y, D, L, me), _e = ce.x, ze = ce.y;
    n.previousWheelEvent = i, n.setState(D, _e, ze), je(ke(n), i, o), je(ke(n), i, s);
  }
}, $z = function(n, i) {
  var r = n.props, o = r.onWheelStop, s = r.onZoomStop;
  Dl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Nc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Uv);
  var f = Dv(n, i);
  f && (Dl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, je(ke(n), i, o), je(ke(n), i, s));
  }, Rv));
}, Lz = function(n, i) {
  var r = n.props, o = r.onWheelStart, s = r.onPanningStart;
  n.wheelStopEventTimer || (tn(n), je(ke(n), i, o), je(ke(n), i, s));
}, Vz = function(n, i) {
  var r = n.props, o = r.onWheelStop, s = r.onPanningStop;
  Dl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Nc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Uv);
  var f = Dv(n, i);
  f && (Dl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, je(ke(n), i, o), je(ke(n), i, s));
  }, Rv));
}, Yv = function(n) {
  for (var i = 0, r = 0, o = 0; o < 2; o += 1)
    i += n.touches[o].clientX, r += n.touches[o].clientY;
  var s = i / 2, f = r / 2;
  return { x: s, y: f };
}, Gz = function(n, i) {
  var r = Zv(i);
  n.pinchStartDistance = r, n.lastDistance = r, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Yv(i), tn(n);
}, Qz = function(n, i) {
  var r = n.contentComponent, o = n.pinchStartDistance, s = n.wrapperComponent, f = n.pinchPreviousCenter, d = n.state.scale, m = n.setup, h = m.limitToBounds, v = m.centerZoomedOut, _ = m.zoomAnimation, b = m.autoAlignment, x = m.pinch, E = m.panning, M = _.disabled, Q = _.size, G = x.allowPanning;
  if (!(o === null || !r)) {
    var H = Yz(i, d, r);
    if (!(!Number.isFinite(H.x) || !Number.isFinite(H.y))) {
      var W = Zv(i), V = Hz(n, W), D = Yv(i), L = d / V, J = (D.x - (f?.x || 0)) * L, $ = (D.y - (f?.y || 0)) * L;
      if (!(V === d && J === 0 && $ === 0)) {
        n.pinchPreviousCenter = D;
        var me = wi(n, V), ce = M || Q === 0 || v, _e = h && ce, ze = jo(n, H.x, H.y, V, me, _e), se = ze.x, xe = ze.y;
        if (n.pinchMidpoint = H, n.lastDistance = W, E.disabled || !G)
          n.setState(V, se, xe);
        else {
          var P = b.sizeX, ee = b.sizeY, A = Fn(n, P, V), q = Fn(n, ee, V), F = se + J, pe = xe + $, re = Rl(F, pe, me, h, A, q, s), w = re.x, N = re.y;
          n.setState(V, w, N);
        }
      }
    }
  }
}, Kz = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Nc(n, i?.x, i?.y);
}, Xv = function(n, i) {
  var r = n.props.onZoomStop, o = n.setup.doubleClick.animationTime;
  Dl(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, je(ke(n), i, r);
  }, o);
}, Jz = function(n, i) {
  var r = n.props, o = r.onZoomStart, s = r.onZoom, f = n.setup.doubleClick, d = f.animationTime, m = f.animationType;
  je(ke(n), i, o), Mv(n, d, m, function() {
    return je(ke(n), i, s);
  }), Xv(n, i);
};
function Wz(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function Pz(n, i) {
  var r = n.setup, o = n.doubleClickStopEventTimer, s = n.state, f = n.contentComponent, d = s.scale, m = n.props, h = m.onZoomStart, v = m.onZoom, _ = r.doubleClick, b = _.disabled, x = _.mode, E = _.step, M = _.animationTime, Q = _.animationType;
  if (!b && !o) {
    if (x === "reset")
      return Jz(n, i);
    if (!f)
      return console.error("No ContentComponent found");
    var G = Wz(x, n.state.scale), H = kv(n, G, E);
    if (d !== H) {
      je(ke(n), i, h);
      var W = Nv(i, f, d), V = jc(n, H, W.x, W.y);
      if (!V)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      je(ke(n), i, v), ta(n, V, M, Q), Xv(n, i);
    }
  }
}
var Fz = function(n, i) {
  var r = n.isInitialized, o = n.setup, s = n.wrapperComponent, f = o.doubleClick, d = f.disabled, m = f.excluded, h = i.target, v = s?.contains(h), _ = r && h && v && !d;
  if (!_)
    return !1;
  var b = Yl(h, m);
  return !b;
}, Iz = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var r = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        r.initializeWindowEvents();
      }, this.unmount = function() {
        r.cleanupWindowEvents();
      }, this.update = function(o) {
        r.props = o, r.wrapperComponent && r.contentComponent && wi(r, r.state.scale), r.setup = jh(o);
      }, this.initializeWindowEvents = function() {
        var o, s, f, d, m = cc(), h = (o = r.wrapperComponent) === null || o === void 0 ? void 0 : o.ownerDocument, v = h?.defaultView;
        (s = r.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", r.onWheelPanning, m), (f = r.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", r.setKeyUnPressed, m), (d = r.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", r.setKeyPressed, m), v?.addEventListener("mousedown", r.onPanningStart, m), v?.addEventListener("mousemove", r.onPanning, m), v?.addEventListener("mouseup", r.onPanningStop, m), h?.addEventListener("mouseleave", r.clearPanning, m), v?.addEventListener("keyup", r.setKeyUnPressed, m), v?.addEventListener("keydown", r.setKeyPressed, m), v?.addEventListener("blur", r.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var o, s, f, d, m, h = cc(), v = (o = r.wrapperComponent) === null || o === void 0 ? void 0 : o.ownerDocument, _ = v?.defaultView;
        _?.removeEventListener("mousedown", r.onPanningStart, h), _?.removeEventListener("mousemove", r.onPanning, h), _?.removeEventListener("mouseup", r.onPanningStop, h), v?.removeEventListener("mouseleave", r.clearPanning, h), _?.removeEventListener("keyup", r.setKeyUnPressed, h), _?.removeEventListener("keydown", r.setKeyPressed, h), _?.removeEventListener("blur", r.handleWindowBlur), document.removeEventListener("mouseleave", r.clearPanning, h), (s = r.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", r.onWheelPanning, h), (f = r.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", r.setKeyUnPressed, h), (d = r.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", r.setKeyPressed, h), tn(r), (m = r.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(o) {
        var s = cc();
        o.addEventListener("wheel", r.onWheelZoom, s), o.addEventListener("dblclick", r.onDoubleClick, s), o.addEventListener("touchstart", r.onTouchPanningStart, s), o.addEventListener("touchmove", r.onTouchPanning, s), o.addEventListener("touchend", r.onTouchPanningStop, s);
      }, this.handleInitialize = function(o) {
        var s = r.setup.centerOnInit;
        r.applyTransformation(), r.onInitCallbacks.forEach(function(f) {
          return f(ke(r));
        }), s && (r.setCenter(), r.observer = new ResizeObserver(function() {
          var f, d = o.offsetWidth, m = o.offsetHeight;
          (d > 0 || m > 0) && (r.onInitCallbacks.forEach(function(h) {
            return h(ke(r));
          }), r.setCenter(), (f = r.observer) === null || f === void 0 || f.disconnect());
        }), setTimeout(function() {
          var f;
          (f = r.observer) === null || f === void 0 || f.disconnect();
        }, 5e3), r.observer.observe(o));
      }, this.onWheelZoom = function(o) {
        var s = r.setup.disabled;
        if (!s) {
          r.syncModifierKeys(o);
          var f = jv(r, o);
          f && (Bz(r, o), qz(r, o), $z(r, o));
        }
      }, this.onWheelPanning = function(o) {
        var s = r.props.onPanning, f = r.setup.trackPadPanning, d = f.lockAxisX, m = f.lockAxisY;
        r.syncModifierKeys(o);
        var h = jz(r, o);
        if (h) {
          o.preventDefault(), o.stopPropagation();
          var v = r.state, _ = v.positionX, b = v.positionY, x = _ - o.deltaX, E = b - o.deltaY, M = d ? _ : x, Q = m ? b : E, G = r.setup.autoAlignment, H = G.sizeX, W = G.sizeY, V = Fn(r, H), D = Fn(r, W);
          M === _ && Q === b || (Lz(r, o), Tv(r, M, Q, V, D), je(ke(r), o, s), Vz(r, o));
        }
      }, this.onPanningStart = function(o) {
        var s = r.setup.disabled, f = r.props.onPanningStart;
        if (!s) {
          r.syncModifierKeys(o);
          var d = Eh(r, o);
          if (d) {
            var m = r.isPressingKeys(r.setup.panning.activationKeys);
            m && (o.button === 0 && !r.setup.panning.allowLeftClickPan || o.button === 1 && !r.setup.panning.allowMiddleClickPan || o.button === 2 && !r.setup.panning.allowRightClickPan || (o.preventDefault(), o.stopPropagation(), tn(r), Ch(r, o), je(ke(r), o, f)));
          }
        }
      }, this.onPanning = function(o) {
        var s = r.setup.disabled, f = r.props.onPanning;
        if (!s) {
          if (r.syncModifierKeys(o), r.isPanning && o.buttons === 0) {
            r.clearPanning(o);
            return;
          }
          var d = Ah(r);
          if (d) {
            var m = r.isPressingKeys(r.setup.panning.activationKeys);
            m && (o.preventDefault(), o.stopPropagation(), Mh(r, o.clientX, o.clientY, Pn.MOUSE), je(ke(r), o, f));
          }
        }
      }, this.onPanningStop = function(o) {
        var s = r.setup.panning.velocityDisabled, f = r.props.onPanningStop;
        r.isPanning && (_z(r, s), je(ke(r), o, f));
      }, this.onPinchStart = function(o) {
        var s = r.setup.disabled, f = r.props.onPinchStart;
        if (!s) {
          var d = Rz(r, o);
          d && (Gz(r, o), tn(r), je(ke(r), o, f));
        }
      }, this.onPinch = function(o) {
        var s = r.setup.disabled, f = r.props.onPinch;
        if (!s) {
          var d = Uz(r);
          d && (o.preventDefault(), o.stopPropagation(), Qz(r, o), je(ke(r), o, f));
        }
      }, this.onPinchStop = function(o) {
        var s = r.props.onPinchStop;
        r.pinchStartScale && (Kz(r), je(ke(r), o, s));
      }, this.onTouchPanningStart = function(o) {
        var s = r.setup, f = s.disabled, d = s.doubleClick, m = r.props.onPanningStart;
        if (!f) {
          var h = !d?.disabled, v = r.lastTouch && +/* @__PURE__ */ new Date() - r.lastTouch < 200;
          if (h && v && o.touches.length === 1)
            r.onDoubleClick(o);
          else {
            r.lastTouch = +/* @__PURE__ */ new Date(), tn(r);
            var _ = o.touches, b = _.length === 1, x = _.length === 2, E = Eh(r, o);
            if (b) {
              if (!E)
                return;
              tn(r), Ch(r, o), je(ke(r), o, m);
            }
            x && r.onPinchStart(o);
          }
        }
      }, this.onTouchPanning = function(o) {
        var s = r.setup.disabled, f = r.props.onPanning;
        if (r.isPanning && o.touches.length === 1) {
          if (s)
            return;
          var d = Ah(r);
          if (!d)
            return;
          o.cancelable && o.preventDefault(), o.stopPropagation();
          var m = o.touches[0];
          Mh(r, m.clientX, m.clientY, Pn.TOUCH), je(ke(r), o, f);
        } else o.touches.length > 1 && r.onPinch(o);
      }, this.onTouchPanningStop = function(o) {
        r.onPanningStop(o), r.onPinchStop(o);
      }, this.onDoubleClick = function(o) {
        var s = r.setup.disabled;
        if (!s) {
          var f = Fz(r, o);
          f && Pz(r, o);
        }
      }, this.clearPanning = function(o) {
        r.isPanning && r.onPanningStop(o);
      }, this.handleWindowBlur = function() {
        r.pressedKeys = {}, r.isPanning && (r.isPanning = !1, r.startCoords = null);
      }, this.syncModifierKeys = function(o) {
        var s = o.ctrlKey, f = o.metaKey, d = o.shiftKey, m = o.altKey;
        typeof s == "boolean" && (r.pressedKeys.Control = s), typeof f == "boolean" && (r.pressedKeys.Meta = f), typeof d == "boolean" && (r.pressedKeys.Shift = d), typeof m == "boolean" && (r.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(o) {
        r.pressedKeys[o.key] = !0;
      }, this.setKeyUnPressed = function(o) {
        r.pressedKeys[o.key] = !1;
      }, this.isPressingKeys = function(o) {
        return typeof o == "function" ? o(Object.entries(r.pressedKeys).filter(function(s) {
          var f = s[1];
          return f;
        }).map(function(s) {
          var f = s[0];
          return f;
        })) : o.length ? !!o.every(function(s) {
          return r.pressedKeys[s];
        }) : !0;
      }, this.setCenter = function() {
        if (r.wrapperComponent && r.contentComponent) {
          var o = Dc(r.state.scale, r.wrapperComponent, r.contentComponent);
          r.setState(o.scale, o.positionX, o.positionY);
        }
      }, this.handleTransformStyles = function(o, s, f) {
        return r.props.customTransform ? r.props.customTransform(o, s, f) : Ov(o, s, f);
      }, this.getContext = function() {
        return ke(r);
      }, this.applyTransformation = function() {
        if (!(!r.mounted || !r.contentComponent)) {
          var o = r.state, s = o.scale, f = o.positionX, d = o.positionY, m = r.handleTransformStyles(f, d, s);
          r.props.detached || (r.contentComponent.style.transform = m), r.onTransformCallbacks.forEach(function(h) {
            return h({
              scale: s,
              positionX: f,
              positionY: d,
              previousScale: r.state.previousScale,
              ref: ke(r)
            });
          });
        }
      }, this.setState = function(o, s, f) {
        var d = r.props.onTransform;
        if (!Number.isNaN(o) && !Number.isNaN(s) && !Number.isNaN(f)) {
          var m = Math.max(o, 1e-7);
          m !== r.state.scale && (r.state.previousScale = r.state.scale, r.state.scale = m), r.state.positionX = s, r.state.positionY = f, r.applyTransformation();
          var h = ke(r);
          r.onChangeCallbacks.forEach(function(v) {
            return v(h);
          }), je(h, { scale: r.state.scale, positionX: s, positionY: f }, d);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(o) {
        return r.onTransformCallbacks.has(o) || r.onTransformCallbacks.add(o), function() {
          r.onTransformCallbacks.delete(o);
        };
      }, this.onChange = function(o) {
        return r.onChangeCallbacks.has(o) || r.onChangeCallbacks.add(o), function() {
          r.onChangeCallbacks.delete(o);
        };
      }, this.onInit = function(o) {
        return r.onInitCallbacks.has(o) || r.onInitCallbacks.add(o), function() {
          r.onInitCallbacks.delete(o);
        };
      }, this.init = function(o, s) {
        r.cleanupWindowEvents(), r.wrapperComponent = o, r.contentComponent = s, wi(r, r.state.scale), r.handleInitializeWrapperEvents(o), r.handleInitialize(s), r.initializeWindowEvents(), r.isInitialized = !0;
        var f = ke(r);
        je(f, void 0, r.props.onInit), Mz(r.props.ref, f);
      }, this.props = i, this.setup = jh(this.props), this.state = Av(this.props);
    }
    return n;
  })()
), Xl = ko.createContext(null), ex = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, tx = ko.forwardRef(function(n, i) {
  var r = ae.useRef(new Iz(n)).current, o = ex(n.children, Ao(r));
  return ae.useImperativeHandle(i, function() {
    return Ao(r);
  }, [r]), ae.useEffect(function() {
    r.update(n);
  }, [r, n]), g.jsx(Xl.Provider, Kt({ value: r }, { children: o }));
});
ko.forwardRef(function(n, i) {
  var r = ae.useRef(null), o = ae.useContext(Xl);
  return ae.useEffect(function() {
    return o.onChange(function(s) {
      if (r.current) {
        var f = 0, d = 0;
        r.current.style.transform = o.handleTransformStyles(f, d, 1 / s.instance.state.scale);
      }
    });
  }, [o]), g.jsx("div", Kt({}, n, { ref: Oz([r, i]) }));
});
function nx(n, i) {
  i === void 0 && (i = {});
  var r = i.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", r === "top" && o.firstChild ? o.insertBefore(s, o.firstChild) : o.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var ax = `.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
.transform-component-module_infiniteGrid__Z-aP3 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.12) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  background-position: 0 0;
}
`, fc = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
nx(ax);
var ix = function(n) {
  var i = n.children, r = n.wrapperClass, o = r === void 0 ? "" : r, s = n.contentClass, f = s === void 0 ? "" : s, d = n.wrapperStyle, m = n.contentStyle, h = n.wrapperProps, v = h === void 0 ? {} : h, _ = n.contentProps, b = _ === void 0 ? {} : _, x = n.infinite, E = x === void 0 ? !1 : x, M = ae.useContext(Xl), Q = M.init, G = M.cleanupWindowEvents, H = ae.useRef(null), W = ae.useRef(null), V = ae.useRef(null);
  return ae.useEffect(function() {
    var D = H.current, L = W.current;
    return D !== null && L !== null && Q && Q?.(D, L), function() {
      G?.();
    };
  }, []), ae.useEffect(function() {
    if (E) {
      var D = V.current;
      if (D) {
        var L = function() {
          var J = M.state, $ = J.positionX, me = J.positionY;
          D.style.backgroundPosition = "".concat($, "px ").concat(me, "px");
        };
        return L(), M.onChange(L);
      }
    }
  }, [E, M]), g.jsxs("div", Kt({}, v, { ref: H, className: "".concat(gc.wrapperClass, " ").concat(fc.wrapper, " ").concat(o), style: d }, { children: [E && g.jsx("div", { ref: V, className: fc.infiniteGrid, "aria-hidden": !0 }), g.jsx("div", Kt({}, b, { ref: W, className: "".concat(gc.contentClass, " ").concat(fc.content, " ").concat(f), style: Kt(Kt({}, m), { transform: Ov(M.state.positionX, M.state.positionY, M.state.scale) }) }, { children: i }))] }));
};
function lx(n, i) {
  var r = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), o = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return r * o;
}
function rx(n) {
  var i = n.elementX, r = n.elementY, o = n.elementWidth, s = n.elementHeight, f = n.scale, d = n.positionX, m = n.positionY, h = n.viewportWidth, v = n.viewportHeight, _ = n.margin, b = _ === void 0 ? 0 : _, x = n.threshold, E = x === void 0 ? 0 : x, M = {
    x: -b,
    y: -b,
    width: h + 2 * b,
    height: v + 2 * b
  }, Q = {
    x: i * f + d,
    y: r * f + m,
    width: o * f,
    height: s * f
  };
  if (E <= 0) {
    var G = Q.x < M.x + M.width && Q.x + Q.width > M.x, H = Q.y < M.y + M.height && Q.y + Q.height > M.y;
    return G && H;
  }
  var W = Q.width * Q.height;
  if (W <= 0)
    return !1;
  var V = lx(M, Q);
  return V / W >= E;
}
ko.forwardRef(function(n, i) {
  var r = n.x, o = n.y, s = n.width, f = n.height, d = n.margin, m = d === void 0 ? 0 : d, h = n.threshold, v = h === void 0 ? 0 : h, _ = n.placeholder, b = _ === void 0 ? null : _, x = n.onShow, E = n.onHide, M = n.children, Q = n.className, G = n.style, H = ae.useContext(Xl), W = ae.useState(!1), V = W[0], D = W[1], L = ae.useRef(!1), J = ae.useRef(x), $ = ae.useRef(E);
  return J.current = x, $.current = E, ae.useEffect(function() {
    var me = function() {
      var ze, se, xe = H.wrapperComponent;
      if (xe) {
        var P = rx({
          elementX: r,
          elementY: o,
          elementWidth: s,
          elementHeight: f,
          scale: H.state.scale,
          positionX: H.state.positionX,
          positionY: H.state.positionY,
          viewportWidth: xe.offsetWidth,
          viewportHeight: xe.offsetHeight,
          margin: m,
          threshold: v
        });
        P !== L.current && (L.current = P, D(P), P ? (ze = J.current) === null || ze === void 0 || ze.call(J) : (se = $.current) === null || se === void 0 || se.call($));
      }
    };
    me();
    var ce = H.onChange(me), _e;
    return H.wrapperComponent || (_e = H.onInit(function() {
      return me();
    })), function() {
      ce(), _e?.();
    };
  }, [H, r, o, s, f, m, v]), V ? g.jsx("div", Kt({ ref: i, className: Q, style: G }, { children: M })) : b ? g.jsx(g.Fragment, { children: b }) : null;
});
var ox = function() {
  var n = ae.useContext(Xl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, ux = function() {
  var n = ox();
  return Ao(n);
};
const _c = 24;
function sx({ locked: n, zoneMode: i, hasZone: r, disabled: o, clearZoneLabel: s, onToggleLock: f, onClearZone: d }) {
  const { zoomIn: m, zoomOut: h, resetTransform: v } = ux();
  return /* @__PURE__ */ g.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => m(), disabled: n || i, children: /* @__PURE__ */ g.jsx(o0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => h(), disabled: n || i, children: /* @__PURE__ */ g.jsx(s0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => v(), children: /* @__PURE__ */ g.jsx(Sc, {}) }),
    i ? /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": s, onClick: d, disabled: !r || o, children: /* @__PURE__ */ g.jsx(j_, {}) }) : /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: f, children: n ? /* @__PURE__ */ g.jsx(Uh, {}) : /* @__PURE__ */ g.jsx(Y_, {}) })
  ] });
}
function cx(n, i, r) {
  const o = Math.min(Math.min(i, r), Math.max(_c, Math.min(i, r) * 0.22));
  return vc({
    x1: n.x - o / 2,
    y1: n.y - o / 2,
    x2: n.x + o / 2,
    y2: n.y + o / 2
  }, i, r);
}
function fx({
  hass: n,
  floor: i,
  language: r,
  selected: o,
  launched: s,
  active: f,
  disabled: d,
  selectionMode: m,
  zone: h,
  zoneLaunched: v,
  onToggle: _,
  onZoneChange: b
}) {
  const [x, E] = ae.useState(!0), [M, Q] = ae.useState({ width: 0, height: 0 }), [G, H] = ae.useState({ width: 0, height: 0 }), [W, V] = ae.useState(0), D = ae.useRef(null), L = ae.useRef(void 0), J = ae.useRef(h), $ = n.states[i.map_entity], me = ae.useMemo(() => _v($), [$]), ce = ae.useMemo(() => gv($), [$]), _e = ae.useMemo(() => ew(i), [i]), ze = typeof $?.attributes.entity_picture == "string" ? $.attributes.entity_picture : void 0, se = h ? Al(h) : void 0;
  ae.useEffect(() => {
    J.current = h;
  }, [h]), ae.useEffect(() => {
    if (!f) return;
    const P = setInterval(() => V((ee) => ee + 1), 5e3);
    return () => {
      clearInterval(P), V(0);
    };
  }, [f]), ae.useEffect(() => {
    const P = D.current;
    if (!P) return;
    const ee = new ResizeObserver(([A]) => {
      H({ width: A.contentRect.width, height: A.contentRect.height });
    });
    return ee.observe(P), () => ee.disconnect();
  }, []);
  let xe;
  return !$ || $.state === "unavailable" ? xe = B(r, "mapMissing") : ze ? ce.length < 3 ? xe = B(r, "calibrationMissing") : m === "rooms" && me.length === 0 && (xe = B(r, "roomsMissing")) : xe = B(r, "imageMissing"), xe ? /* @__PURE__ */ g.jsx("div", { className: "map-error", role: "alert", children: xe }) : /* @__PURE__ */ g.jsx("div", { className: `map-shell ${m === "zone" ? "zone-mode" : ""}`, ref: D, children: /* @__PURE__ */ g.jsxs(
    tx,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: x || m === "zone", step: 0.08 },
      pinch: { disabled: x || m === "zone" },
      panning: { disabled: x || m === "zone", excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ g.jsx(
          sx,
          {
            locked: x,
            zoneMode: m === "zone",
            hasZone: !!h,
            disabled: d,
            clearZoneLabel: B(r, "clearZone"),
            onToggleLock: () => E((P) => !P),
            onClearZone: () => b(void 0)
          }
        ),
        /* @__PURE__ */ g.jsx(ix, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!M.width || !M.height || !G.width || !G.height) return;
              const P = Math.min(G.width / M.width, G.height / M.height);
              return { width: M.width * P, height: M.height * P };
            })(),
            children: [
              /* @__PURE__ */ g.jsx(
                "img",
                {
                  src: (() => {
                    const P = n.hassUrl(ze);
                    if (P.startsWith("data:")) return P;
                    const ee = P.includes("?") ? "&" : "?", A = $?.last_updated ?? $?.state ?? "";
                    return `${P}${ee}v=${encodeURIComponent(A)}${f ? `&r=${W}` : ""}`;
                  })(),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (P) => Q({ width: P.currentTarget.naturalWidth, height: P.currentTarget.naturalHeight })
                }
              ),
              M.width > 0 && M.height > 0 && /* @__PURE__ */ g.jsxs(
                "svg",
                {
                  className: `room-overlay ${m === "zone" ? "drawing-zone" : ""}`,
                  viewBox: `0 0 ${M.width} ${M.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": m === "zone" ? `${i.name} zone map` : `${i.name} rooms`,
                  onPointerDown: (P) => {
                    if (m !== "zone" || d) return;
                    const ee = P.currentTarget.getBoundingClientRect();
                    if (!ee.width || !ee.height) return;
                    const A = {
                      x: Math.min(M.width, Math.max(0, (P.clientX - ee.left) / ee.width * M.width)),
                      y: Math.min(M.height, Math.max(0, (P.clientY - ee.top) / ee.height * M.height))
                    }, q = P.target, F = q.dataset.zoneHandle, pe = F ? "resize" : q.dataset.zoneMove === "true" && h ? "move" : "create";
                    if (L.current = { pointerId: P.pointerId, kind: pe, origin: A, initial: h, handle: F }, P.currentTarget.setPointerCapture?.(P.pointerId), pe === "create") {
                      const re = { x1: A.x, y1: A.y, x2: A.x, y2: A.y };
                      J.current = re, b(re);
                    }
                    P.preventDefault();
                  },
                  onPointerMove: (P) => {
                    const ee = L.current;
                    if (!ee || ee.pointerId !== P.pointerId || d) return;
                    const A = P.currentTarget.getBoundingClientRect();
                    if (!A.width || !A.height) return;
                    const q = {
                      x: Math.min(M.width, Math.max(0, (P.clientX - A.left) / A.width * M.width)),
                      y: Math.min(M.height, Math.max(0, (P.clientY - A.top) / A.height * M.height))
                    };
                    let F;
                    if (ee.kind === "create")
                      F = Al({ x1: ee.origin.x, y1: ee.origin.y, x2: q.x, y2: q.y });
                    else if (ee.kind === "move" && ee.initial) {
                      const pe = q.x - ee.origin.x, re = q.y - ee.origin.y;
                      F = vc({
                        x1: ee.initial.x1 + pe,
                        y1: ee.initial.y1 + re,
                        x2: ee.initial.x2 + pe,
                        y2: ee.initial.y2 + re
                      }, M.width, M.height);
                    } else if (ee.initial && ee.handle)
                      F = { ...ee.initial }, ee.handle.includes("w") && (F.x1 = q.x), ee.handle.includes("e") && (F.x2 = q.x), ee.handle.includes("n") && (F.y1 = q.y), ee.handle.includes("s") && (F.y2 = q.y), F = vc(F, M.width, M.height);
                    else return;
                    J.current = F, b(F), P.preventDefault();
                  },
                  onPointerUp: (P) => {
                    const ee = L.current;
                    if (!ee || ee.pointerId !== P.pointerId) return;
                    const A = J.current && Al(J.current);
                    if (ee.kind === "create" && A && (A.x2 - A.x1 < _c || A.y2 - A.y1 < _c)) {
                      const q = cx(ee.origin, M.width, M.height);
                      J.current = q, b(q);
                    }
                    L.current = void 0, P.currentTarget.releasePointerCapture?.(P.pointerId), P.preventDefault();
                  },
                  onPointerCancel: (P) => {
                    L.current = void 0, P.currentTarget.releasePointerCapture?.(P.pointerId);
                  },
                  children: [
                    me.map((P) => {
                      const ee = _e.get(P.segment_id), A = !!ee?.area_id, q = o.has(P.segment_id), F = s.has(P.segment_id), pe = I2(P, ce), re = ee?.name || P.source_name, w = d || m === "zone" || !A;
                      return /* @__PURE__ */ g.jsxs("g", { className: `room ${q ? "selected" : ""} ${F ? "launched" : ""} ${A ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ g.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: F2(P, ce),
                            role: "button",
                            tabIndex: w ? -1 : 0,
                            "aria-label": `${re}${A ? "" : ` — ${B(r, "roomUnmapped")}`}`,
                            "aria-pressed": q,
                            "aria-disabled": w,
                            onClick: () => !w && _(P.segment_id),
                            onKeyDown: (N) => {
                              !w && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), _(P.segment_id));
                            },
                            children: /* @__PURE__ */ g.jsx("title", { children: A ? re : `${re}: ${B(r, "roomUnmapped")}` })
                          }
                        ),
                        /* @__PURE__ */ g.jsxs("g", { className: "room-label", transform: `translate(${pe.x} ${pe.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ g.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ g.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ g.jsx(yc, { icon: ee?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ g.jsx("text", { y: "39", textAnchor: "middle", children: re })
                        ] })
                      ] }, P.segment_id);
                    }),
                    m === "zone" && se && /* @__PURE__ */ g.jsxs("g", { className: `zone-selection ${v ? "launched" : ""}`, children: [
                      /* @__PURE__ */ g.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: se.x1,
                          y: se.y1,
                          width: se.x2 - se.x1,
                          height: se.y2 - se.y1,
                          role: "img",
                          "aria-label": B(r, "selectedZone")
                        }
                      ),
                      [
                        ["nw", se.x1, se.y1],
                        ["ne", se.x2, se.y1],
                        ["se", se.x2, se.y2],
                        ["sw", se.x1, se.y2]
                      ].map(([P, ee, A]) => /* @__PURE__ */ g.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": P,
                          cx: ee,
                          cy: A,
                          r: "12",
                          "aria-label": `${B(r, "resizeZone")} ${P}`
                        },
                        P
                      ))
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}
const dx = {
  preparing: /* @__PURE__ */ g.jsx(Gp, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ g.jsx(S_, {}),
  cleaning_upstairs: /* @__PURE__ */ g.jsx(dc, {}),
  carry_downstairs: /* @__PURE__ */ g.jsx(Rh, {}),
  finishing: /* @__PURE__ */ g.jsx(Gp, { className: "spin" }),
  complete: /* @__PURE__ */ g.jsx(E_, {}),
  error: /* @__PURE__ */ g.jsx(Sc, {}),
  idle: /* @__PURE__ */ g.jsx(dc, {})
}, Nh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function mx({
  language: n,
  stage: i,
  roomNames: r,
  pending: o,
  onStart: s,
  onFinish: f,
  onReset: d,
  onCancel: m
}) {
  if (i === "idle") return null;
  const h = B(n, Nh[i].title), v = B(n, Nh[i].description), _ = !["complete", "error"].includes(i);
  return /* @__PURE__ */ g.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ g.jsx("div", { className: "assisted-icon", children: dx[i] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ g.jsx("strong", { children: h }),
      /* @__PURE__ */ g.jsx("p", { children: v }),
      r.length > 0 && /* @__PURE__ */ g.jsx("small", { children: r.join(" · ") })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: o, onClick: s, children: [
        /* @__PURE__ */ g.jsx(Yh, {}),
        B(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: o, onClick: f, children: [
        /* @__PURE__ */ g.jsx(Rh, {}),
        B(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", disabled: o, onClick: d, children: [
        /* @__PURE__ */ g.jsx(Sc, {}),
        B(n, "newUpstairsJob")
      ] }),
      _ && /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: o, onClick: m, children: B(n, "cancel") })
    ] })
  ] });
}
function wl(n, i) {
  if (!i) return;
  const r = n.states[i];
  return !r || ["unknown", "unavailable"].includes(r.state) ? void 0 : `${r.attributes.device_class === "duration" && !isNaN(Number(r.state)) ? String(Math.round(Number(r.state))) : r.state}${r.attributes.unit_of_measurement ? ` ${r.attributes.unit_of_measurement}` : ""}`;
}
function px(n, i, r) {
  if (!i) return;
  const o = n.states[i];
  if (!o || ["unknown", "unavailable"].includes(o.state)) return;
  const s = Number(o.state);
  if (!Number.isFinite(s) || s < 0) return;
  const f = String(o.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[f];
  if (m === void 0) return;
  const h = s * m, v = Math.max(0, Math.round(h)), _ = Math.floor(v / 60), b = v % 60;
  return `${[
    _ > 0 ? `${_} ${r === "nl" ? "u" : "h"}` : void 0,
    b > 0 || _ === 0 ? `${b} min` : void 0
  ].filter(Boolean).join(" ")} ${B(r, "remaining")}`;
}
function hx(n, i) {
  if (i === "washing_the_mop") return B(n, "washingMop");
}
function vx(n, i) {
  const r = new Date(n);
  if (isNaN(r.getTime())) return;
  const o = Date.now() - r.getTime();
  if (o < 0) return;
  const s = Math.floor(o / 6e4);
  if (s < 1) return B(i, "justNow");
  if (s < 60) return `${s} min ${B(i, "ago")}`;
  const f = Math.floor(s / 60);
  if (f < 24) return `${f}${i === "nl" ? " u" : "h"} ${B(i, "ago")}`;
  const d = Math.floor(f / 24);
  return d === 1 ? B(i, "yesterday") : `${d} ${B(i, "daysAgo")}`;
}
function yx(n, i) {
  const r = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((o) => o.map_select_option === r) ?? n.floors[0];
}
function gx({ hass: n, config: i }) {
  const r = ae.useRef(n), o = ae.useRef(!1), s = i.language, [f, d] = ae.useState(() => yx(i, n).id), m = i.floors.find((X) => X.id === f) ?? i.floors[0], [h, v] = ae.useState("rooms"), [_, b] = ae.useState(/* @__PURE__ */ new Set()), [x, E] = ae.useState(), [M, Q] = ae.useState(!1), [G, H] = ae.useState(!1), [W, V] = ae.useState(!1), [D, L] = ae.useState(!1), [J, $] = ae.useState(), [me, ce] = ae.useState(), [_e, ze] = ae.useState({ phase: "idle" }), se = ae.useMemo(() => pw(n, i), [n, i]), xe = ae.useMemo(() => Dw(i, se, m), [i, se, m]), P = xe.find(({ preset: X, available: le }) => X.id === i.default_preset && le)?.preset ?? xe.find(({ available: X }) => X)?.preset, [ee, A] = ae.useState(
    () => kl(P ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), q = n.states[i.entity], F = rw(n, i), pe = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, re = ae.useMemo(() => cw(pe), [pe]), w = lw(i, re), N = ow(F), K = i.entities?.map_select ? n.states[i.entities.map_select]?.state : void 0;
  ae.useEffect(() => {
    r.current = n;
  }, [n]), ae.useEffect(() => {
    !N || !w || !re || (d(w.id), v("rooms"), E(void 0), b(new Set(re.segment_ids)), A({
      preset_id: "assisted_carry",
      strategy: re.strategy,
      cleaning_type: re.cleaning_type,
      fan_speed: re.fan_speed,
      mop_mode: re.mop_mode,
      mop_intensity: re.mop_intensity,
      cleaning_count: re.cleaning_count
    }));
  }, [N, w, re]), ae.useEffect(() => {
    if (N || !K) return;
    const X = i.floors.find((le) => le.map_select_option === K);
    X && (d(X.id), b(/* @__PURE__ */ new Set()), E(void 0), X.assisted_carry && v("rooms"), Q(!1));
  }, [N, i.floors, K]);
  const I = i.entities?.status ? n.states[i.entities.status]?.state : void 0, de = ["washing_the_mop", "washing_the_mop_2"].includes(I ?? ""), ve = [q?.state, I].includes("emptying_the_bin"), be = vw(q?.state) || de, Ge = N || ["submitting", "starting", "active"].includes(_e.phase);
  ae.useEffect(() => {
    _e.phase === "starting" && be ? ze((X) => ({ ...X, phase: "active" })) : _e.phase === "active" && !be && (ze({ phase: "idle" }), b(/* @__PURE__ */ new Set()), E(void 0));
  }, [_e.phase, be]), ae.useEffect(() => {
    if (!me) return;
    const X = setTimeout(() => ce(void 0), 5e3);
    return () => clearTimeout(X);
  }, [me]);
  const $e = new Set(_e.floor_id === m.id ? _e.segment_ids ?? [] : []), Wt = m.rooms.filter((X) => _.has(X.segment_id)), Ut = Wt.map((X) => X.name), on = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, na = on ? px(n, i.entities?.dock_mop_drying_remaining_time, s) : void 0, St = i.entities?.last_clean_end ? n.states[i.entities.last_clean_end]?.state : void 0, xi = !be && St && !["unknown", "unavailable"].includes(St) ? vx(St, s) : void 0, Ti = [
    hx(s, I),
    on ? B(s, "dryingMop") : void 0,
    na
  ].filter((X) => !!X), Hl = [
    { icon: /* @__PURE__ */ g.jsx(x_, {}), label: B(s, "battery"), value: wl(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ g.jsx(B_, {}), label: B(s, "room"), value: wl(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ g.jsx(K_, {}), label: B(s, "area"), value: wl(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ g.jsx(k_, {}), label: B(s, "duration"), value: wl(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ g.jsx(t0, {}), label: B(s, "progress"), value: wl(n, i.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ g.jsx(D_, {}), label: B(s, "lastClean"), value: xi }
  ].filter((X) => X.value), Bl = (X) => {
    if (N) return;
    const le = i.floors.find((te) => te.id === X);
    d(X), b(/* @__PURE__ */ new Set()), E(void 0), le?.assisted_carry && v("rooms"), Q(!1);
  }, Ma = (X) => {
    X === "zone" && m.assisted_carry || (v(X), b(/* @__PURE__ */ new Set()), E(void 0), Q(!1));
  }, Oa = (X) => {
    if (X) {
      const le = xe.find(({ preset: te, available: yt }) => te.id === i.default_preset && yt)?.preset ?? xe.find(({ preset: te, available: yt }) => te.id === "vacuum_only" && yt)?.preset ?? xe.find(({ available: te }) => te)?.preset;
      if (!le) {
        ce(B(s, "unsupported"));
        return;
      }
      A(kl(le));
    }
    if (h === "zone" && (ee.strategy !== "custom" || !["vacuum", "vacuum_and_mop"].includes(ee.cleaning_type))) {
      const le = xe.find(({ preset: te, available: yt }) => te.id === "vacuum_only" && yt)?.preset ?? xe.find(({ preset: te, available: yt }) => te.id === "vacuum_and_mop" && yt)?.preset ?? xe.find(({ preset: te, available: yt }) => yt && te.strategy === "custom" && ["vacuum", "vacuum_and_mop"].includes(te.cleaning_type ?? "vacuum"))?.preset;
      if (!le) {
        ce(B(s, "unsupported"));
        return;
      }
      A(kl(le));
    }
    if (!X && ee.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const le = m.rooms.filter((te) => te.include_in_floor_clean !== !1 && te.area_id).map((te) => te.segment_id);
      b(new Set(le));
    }
    H(X), Q(!0);
  }, Ei = () => {
    const X = m.rooms.filter((le) => le.include_in_floor_clean !== !1 && le.area_id).map((le) => le.segment_id);
    b(new Set(X)), Oa(!!m.assisted_carry);
  }, No = (X) => {
    if (X.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const le = m.rooms.filter((te) => te.include_in_floor_clean !== !1 && te.area_id).map((te) => te.segment_id);
      b(new Set(le));
    }
    A(X);
  }, aa = (X) => X instanceof jl ? `${X.operation}: ${X.message}` : X instanceof Error ? X.message : String(X), vt = async () => {
    if (!o.current) {
      o.current = !0, V(!0);
      try {
        const X = uw(m, [..._], ee);
        await fw(r.current, i, X), Q(!1), ce(B(s, "preparingUpstairs"));
      } catch (X) {
        ce(aa(X));
        try {
          await gi(r.current, i, "error");
        } catch {
        }
      } finally {
        o.current = !1, V(!1);
      }
    }
  }, Do = async () => {
    if (!(o.current || !w || !re)) {
      o.current = !0, V(!0);
      try {
        await dw(r.current, i, w, re);
      } catch (X) {
        ce(aa(X));
        try {
          await gi(r.current, i, "error");
        } catch {
        }
      } finally {
        o.current = !1, V(!1);
      }
    }
  }, ql = async () => {
    if (!o.current) {
      o.current = !0, V(!0);
      try {
        await mw(r.current, i);
      } catch (X) {
        ce(aa(X));
        try {
          await gi(r.current, i, "error");
        } catch {
        }
      } finally {
        o.current = !1, V(!1);
      }
    }
  }, $l = async () => {
    if (!W) {
      V(!0);
      try {
        await bh(r.current, i), b(/* @__PURE__ */ new Set());
      } catch (X) {
        ce(aa(X));
      } finally {
        V(!1);
      }
    }
  }, ja = async () => {
    if (!W) {
      V(!0);
      try {
        const X = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((le) => !!(le && r.current.states[le]));
        X.length > 0 && await r.current.callService("script", "turn_off", {}, { entity_id: X }), F === "cleaning_upstairs" && await r.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), de && await ic(r.current, i, "wash", !0), ve && await ic(r.current, i, "empty", !0), await bh(r.current, i), b(/* @__PURE__ */ new Set());
      } catch (X) {
        ce(aa(X));
      } finally {
        V(!1);
      }
    }
  }, Zo = async () => {
    if (G) {
      await vt();
      return;
    }
    if (o.current) return;
    o.current = !0;
    const X = {
      floor_id: m.id,
      segment_ids: h === "rooms" ? [..._] : void 0,
      selection_mode: h,
      zone: h === "zone" ? x : void 0
    };
    ze({ phase: "submitting", ...X });
    try {
      const le = h === "zone" && x ? P2(x, gv(r.current.states[m.map_entity])) : void 0;
      await Cw({
        getHass: () => r.current,
        config: i,
        floor: m,
        rooms: h === "rooms" ? Wt : [],
        draft: ee,
        zone: le
      }), ze({ phase: "starting", ...X }), Q(!1), ce(B(s, "launched"));
    } catch (le) {
      const te = le instanceof De ? `${le.operation}: ${le.message}` : String(le);
      ze({ phase: "failed", ...X, error: te }), ce(te);
    } finally {
      o.current = !1;
    }
  }, ia = async (X) => {
    try {
      if (X === "stop" || X === "return_to_base") {
        const le = i.entities?.vacuum_then_mop_script;
        le && r.current.states[le] && r.current.states[le].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: le });
        const te = i.entities?.assisted_carry_start_script;
        N && te && r.current.states[te] && r.current.states[te].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: te });
      }
      await r.current.callService("vacuum", X, {}, { entity_id: i.entity }), X === "stop" && F === "cleaning_upstairs" && await gi(r.current, i, "carry_downstairs");
    } catch (le) {
      ce(`${X}: ${le instanceof Error ? le.message : String(le)}`);
    }
  }, Ro = async (X, le) => {
    if (!J) {
      $(B(s, "settingSaved"));
      try {
        await xw(r.current, i, X, le), ce(B(s, "settingSaved"));
      } catch (te) {
        const yt = te instanceof En ? `${te.operation}: ${te.message}` : String(te);
        ce(yt);
      } finally {
        $(void 0);
      }
    }
  }, Uo = async (X, le) => {
    if (!J) {
      if (!le) {
        const te = X === "empty" ? B(s, "confirmEmpty") : X === "wash" ? B(s, "confirmWash") : X === "dry" ? B(s, "confirmDry") : B(s, "confirmDrain");
        if (!window.confirm(te)) return;
      }
      $(B(s, "dockActionSent"));
      try {
        await ic(r.current, i, X, le), ce(B(s, "dockActionSent"));
      } catch (te) {
        const yt = X === "drain" ? B(s, "drainRejected") : te instanceof En ? `${te.operation}: ${te.message}` : String(te);
        ce(yt);
      } finally {
        $(void 0);
      }
    }
  }, la = async (X) => {
    const le = i.entities?.dock_child_lock;
    if (!(!le || J)) {
      $(B(s, "settingSaved"));
      try {
        await r.current.callService("switch", X ? "turn_on" : "turn_off", {}, { entity_id: le }), ce(B(s, "settingSaved"));
      } catch (te) {
        ce(`child_lock: ${te instanceof Error ? te.message : String(te)}`);
      } finally {
        $(void 0);
      }
    }
  };
  return /* @__PURE__ */ g.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("h1", { children: i.name ?? q?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ g.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ g.jsx("span", { className: `state-dot state-${q?.state ?? "unavailable"}` }),
          /* @__PURE__ */ g.jsx("span", { children: q?.state?.replaceAll("_", " ") ?? "unavailable" }),
          Ti.map((X) => /* @__PURE__ */ g.jsx("span", { className: "state-detail", children: ` · ${X}` }, X))
        ] })
      ] }),
      Hl.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "status-strip", children: Hl.map((X) => /* @__PURE__ */ g.jsxs("div", { title: X.label, children: [
        X.icon,
        /* @__PURE__ */ g.jsx("strong", { children: X.value })
      ] }, X.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ g.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": B(s, "floor"), children: i.floors.map((X) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === X.id,
        className: m.id === X.id ? "active" : "",
        disabled: N && m.id !== X.id,
        onClick: () => Bl(X.id),
        children: X.name
      },
      X.id
    )) }),
    !m.assisted_carry && /* @__PURE__ */ g.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": B(s, "selectionMode"), children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "rooms",
          className: h === "rooms" ? "active" : "",
          disabled: Ge,
          onClick: () => Ma("rooms"),
          children: B(s, "rooms")
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "zone",
          className: h === "zone" ? "active" : "",
          disabled: Ge,
          onClick: () => Ma("zone"),
          children: B(s, "zone")
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx(
      fx,
      {
        hass: n,
        floor: m,
        language: s,
        selected: _,
        launched: $e,
        active: be,
        disabled: Ge,
        selectionMode: h,
        zone: x,
        zoneLaunched: _e.floor_id === m.id && _e.selection_mode === "zone" && ["starting", "active"].includes(_e.phase),
        onToggle: (X) => b((le) => {
          const te = new Set(le);
          return te.has(X) ? te.delete(X) : te.add(X), te;
        }),
        onZoneChange: E
      }
    ),
    m.assisted_carry && /* @__PURE__ */ g.jsx(
      mx,
      {
        language: s,
        stage: F,
        roomNames: Ut,
        pending: W,
        onStart: Do,
        onFinish: ql,
        onReset: $l,
        onCancel: ja
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("strong", { children: h === "zone" ? B(s, "selectedZone") : B(s, "selectedRooms") }),
        /* @__PURE__ */ g.jsx("span", { children: h === "zone" ? x ? B(s, "zoneReady") : B(s, "noZoneSelected") : Ut.length ? Ut.join(" · ") : B(s, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: h === "zone" ? +!!x : _.size })
    ] }),
    !N && /* @__PURE__ */ g.jsxs("div", { className: "primary-actions", children: [
      h === "rooms" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", onClick: Ei, disabled: Ge, children: [
        /* @__PURE__ */ g.jsx(Vp, {}),
        " ",
        B(s, "entireFloor")
      ] }),
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => Oa(!!m.assisted_carry),
          disabled: (h === "zone" ? !x : _.size === 0) || Ge,
          children: [
            m.assisted_carry && /* @__PURE__ */ g.jsx(dc, {}),
            m.assisted_carry ? B(s, "prepareUpstairs") : B(s, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      q?.state === "paused" && se.canStart && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("start"), children: [
        /* @__PURE__ */ g.jsx(Yh, {}),
        B(s, "resume")
      ] }),
      q?.state === "cleaning" && se.canPause && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("pause"), children: [
        /* @__PURE__ */ g.jsx($_, {}),
        B(s, "pause")
      ] }),
      se.canStop && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("stop"), children: [
        /* @__PURE__ */ g.jsx(I_, {}),
        B(s, "stop")
      ] }),
      se.canDock && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("return_to_base"), children: [
        /* @__PURE__ */ g.jsx(Vp, {}),
        B(s, "dock")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => L(!0), children: [
        /* @__PURE__ */ g.jsx(W_, {}),
        B(s, "dockStation")
      ] })
    ] }),
    M && /* @__PURE__ */ g.jsx(
      Lw,
      {
        language: s,
        draft: ee,
        capabilities: se,
        presets: xe,
        selectedRoomNames: h === "zone" ? [B(s, "customZone")] : Ut,
        submitting: _e.phase === "submitting" || W,
        assistedCarry: G,
        zoneCleaning: h === "zone",
        onDraftChange: No,
        onClose: () => _e.phase !== "submitting" && !W && Q(!1),
        onStart: Zo
      }
    ),
    D && /* @__PURE__ */ g.jsx(
      Yw,
      {
        hass: n,
        config: i,
        language: s,
        washing: de,
        emptying: ve,
        drying: on,
        dryingRemaining: na,
        pending: J,
        onClose: () => !J && L(!1),
        onAction: Uo,
        onSetting: Ro,
        onChildLock: la
      }
    ),
    me && /* @__PURE__ */ g.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ g.jsx("span", { children: me }),
      /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": B(s, "close"), onClick: () => ce(void 0), children: /* @__PURE__ */ g.jsx(wc, {}) })
    ] })
  ] });
}
const _x = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', bx = "0.6.2";
class Hv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), r = document.createElement("style");
    r.textContent = _x, i.append(r), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= d_.createRoot(this.container), this.root.render(i);
  }
}
class Sx extends Hv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = J2(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ g.jsx(gx, { hass: this.homeAssistant, config: this.config }));
  }
  getCardSize() {
    return 10;
  }
  getGridOptions() {
    return { columns: 12, rows: "auto", min_rows: 10 };
  }
  static getConfigElement() {
    return document.createElement("roborock-vacuum-map-card-editor");
  }
  static getStubConfig() {
    return yv();
  }
}
class wx extends Hv {
  config = yv();
  homeAssistant;
  setConfig(i) {
    this.config = structuredClone(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ g.jsx(
        aw,
        {
          hass: this.homeAssistant,
          config: this.config,
          onChange: (i) => {
            this.config = i, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: i }, bubbles: !0, composed: !0 })), this.render();
          }
        }
      )
    );
  }
}
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Sx);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", wx);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${bx} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Sx as RoborockVacuumMapCard,
  wx as RoborockVacuumMapCardEditor
};
