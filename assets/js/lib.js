!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 1));
})({
  "+aTx": function (e, t, n) {
    var i, r;
    (r = this),
      void 0 ===
        (i = function () {
          return (r.svg4everybody = (function () {
            function e(e, t, n) {
              if (n) {
                var i = document.createDocumentFragment(),
                  r = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
                r && t.setAttribute("viewBox", r);
                for (var a = n.cloneNode(!0); a.childNodes.length; )
                  i.appendChild(a.firstChild);
                e.appendChild(i);
              }
            }
            function t(t) {
              (t.onreadystatechange = function () {
                if (4 === t.readyState) {
                  var n = t._cachedDocument;
                  n ||
                    (((n = t._cachedDocument = document.implementation.createHTMLDocument(
                      ""
                    )).body.innerHTML = t.responseText),
                    (t._cachedTarget = {})),
                    t._embeds.splice(0).map(function (i) {
                      var r = t._cachedTarget[i.id];
                      r || (r = t._cachedTarget[i.id] = n.getElementById(i.id)),
                        e(i.parent, i.svg, r);
                    });
                }
              }),
                t.onreadystatechange();
            }
            function n(e) {
              for (
                var t = e;
                "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);

              );
              return t;
            }
            return function (i) {
              var r,
                a = Object(i),
                s = window.top !== window.self;
              r =
                "polyfill" in a
                  ? a.polyfill
                  : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(
                      navigator.userAgent
                    ) ||
                    (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) ||
                      [])[1] < 10547 ||
                    (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) ||
                      [])[1] < 537 ||
                    (/\bEdge\/.(\d+)\b/.test(navigator.userAgent) && s);
              var o = {},
                l = window.requestAnimationFrame || setTimeout,
                u = document.getElementsByTagName("use"),
                d = 0;
              r &&
                (function i() {
                  for (var s = 0; s < u.length; ) {
                    var c = u[s],
                      p = c.parentNode,
                      f = n(p),
                      h =
                        c.getAttribute("xlink:href") || c.getAttribute("href");
                    if (
                      (!h &&
                        a.attributeName &&
                        (h = c.getAttribute(a.attributeName)),
                      f && h)
                    ) {
                      if (r)
                        if (!a.validate || a.validate(h, f, c)) {
                          p.removeChild(c);
                          var v = h.split("#"),
                            g = v.shift(),
                            m = v.join("#");
                          if (g.length) {
                            var y = o[g];
                            y ||
                              ((y = o[g] = new XMLHttpRequest()).open("GET", g),
                              y.send(),
                              (y._embeds = [])),
                              y._embeds.push({ parent: p, svg: f, id: m }),
                              t(y);
                          } else e(p, f, document.getElementById(m));
                        } else ++s, ++d;
                    } else ++s;
                  }
                  (!u.length || u.length - d > 0) && l(i, 67);
                })();
            };
          })());
        }.apply(t, [])) || (e.exports = i);
  },
  1: function (e, t, n) {
    n("bEqN"), (e.exports = n("94FF"));
  },
  "94FF": function (e, t, n) {
    n("+aTx")({});
  },
  EVdn: function (e, t, n) {
    var i;
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";
      var a = [],
        s = n.document,
        o = Object.getPrototypeOf,
        l = a.slice,
        u = a.concat,
        d = a.push,
        c = a.indexOf,
        p = {},
        f = p.toString,
        h = p.hasOwnProperty,
        v = h.toString,
        g = v.call(Object),
        m = {},
        y = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        b = function (e) {
          return null != e && e === e.window;
        },
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function x(e, t, n) {
        var i,
          r,
          a = (n = n || s).createElement("script");
        if (((a.text = e), t))
          for (i in w)
            (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              a.setAttribute(i, r);
        n.head.appendChild(a).parentNode.removeChild(a);
      }
      function E(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? p[f.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
          return new T.fn.init(e, t);
        },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = E(e);
        return (
          !y(e) &&
          !b(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype = {
        jquery: "3.4.0",
        constructor: T,
        length: 0,
        toArray: function () {
          return l.call(this);
        },
        get: function (e) {
          return null == e
            ? l.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return T.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            T.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: d,
        sort: a.sort,
        splice: a.splice,
      }),
        (T.extend = T.fn.extend = function () {
          var e,
            t,
            n,
            i,
            r,
            a,
            s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof s && ((u = s), (s = arguments[o] || {}), o++),
              "object" == typeof s || y(s) || (s = {}),
              o === l && ((s = this), o--);
            o < l;
            o++
          )
            if (null != (e = arguments[o]))
              for (t in e)
                (i = e[t]),
                  "__proto__" !== t &&
                    s !== i &&
                    (u && i && (T.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((n = s[t]),
                        (a =
                          r && !Array.isArray(n)
                            ? []
                            : r || T.isPlainObject(n)
                            ? n
                            : {}),
                        (r = !1),
                        (s[t] = T.extend(u, a, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
        T.extend({
          expando: "jQuery" + ("3.4.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== f.call(e)) &&
              (!(t = o(e)) ||
                ("function" ==
                  typeof (n = h.call(t, "constructor") && t.constructor) &&
                  v.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t) {
            x(e, { nonce: t && t.nonce });
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (C(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(S, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : d.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, a = e.length, s = !n; r < a; r++)
              !t(e[r], r) !== s && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              a = 0,
              s = [];
            if (C(e))
              for (i = e.length; a < i; a++)
                null != (r = t(e[a], a, n)) && s.push(r);
            else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
            return u.apply([], s);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = a[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var k = (function (e) {
        var t,
          n,
          i,
          r,
          a,
          s,
          o,
          l,
          u,
          d,
          c,
          p,
          f,
          h,
          v,
          g,
          m,
          y,
          b,
          w = "sizzle" + 1 * new Date(),
          x = e.document,
          E = 0,
          T = 0,
          S = le(),
          C = le(),
          k = le(),
          P = le(),
          M = function (e, t) {
            return e === t && (c = !0), 0;
          },
          L = {}.hasOwnProperty,
          A = [],
          D = A.pop,
          z = A.push,
          N = A.push,
          I = A.slice,
          O = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          $ =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          R = "[\\x20\\t\\r\\n\\f]",
          j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          H =
            "\\[" +
            R +
            "*(" +
            j +
            ")(?:" +
            R +
            "*([*^$|!~]?=)" +
            R +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            j +
            "))|)" +
            R +
            "*\\]",
          q =
            ":(" +
            j +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            H +
            ")*)|.*)\\)|)",
          B = new RegExp(R + "+", "g"),
          F = new RegExp(
            "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
            "g"
          ),
          G = new RegExp("^" + R + "*," + R + "*"),
          X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
          W = new RegExp(R + "|>"),
          V = new RegExp(q),
          Y = new RegExp("^" + j + "$"),
          _ = {
            ID: new RegExp("^#(" + j + ")"),
            CLASS: new RegExp("^\\.(" + j + ")"),
            TAG: new RegExp("^(" + j + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                R +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                R +
                "*(?:([+-]|)" +
                R +
                "*(\\d+)|))" +
                R +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + $ + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                R +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                R +
                "*((?:-\\d)?\\d*)" +
                R +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          U = /HTML$/i,
          K = /^(?:input|select|textarea|button)$/i,
          Q = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
          ne = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n
              ? t
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          re = function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          ae = function () {
            p();
          },
          se = we(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          N.apply((A = I.call(x.childNodes)), x.childNodes),
            A[x.childNodes.length].nodeType;
        } catch (e) {
          N = {
            apply: A.length
              ? function (e, t) {
                  z.apply(e, I.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                },
          };
        }
        function oe(e, t, i, r) {
          var a,
            o,
            u,
            d,
            c,
            h,
            m,
            y = t && t.ownerDocument,
            E = t ? t.nodeType : 9;
          if (
            ((i = i || []),
            "string" != typeof e || !e || (1 !== E && 9 !== E && 11 !== E))
          )
            return i;
          if (
            !r &&
            ((t ? t.ownerDocument || t : x) !== f && p(t), (t = t || f), v)
          ) {
            if (11 !== E && (c = Z.exec(e)))
              if ((a = c[1])) {
                if (9 === E) {
                  if (!(u = t.getElementById(a))) return i;
                  if (u.id === a) return i.push(u), i;
                } else if (
                  y &&
                  (u = y.getElementById(a)) &&
                  b(t, u) &&
                  u.id === a
                )
                  return i.push(u), i;
              } else {
                if (c[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                if (
                  (a = c[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return N.apply(i, t.getElementsByClassName(a)), i;
              }
            if (
              n.qsa &&
              !P[e + " "] &&
              (!g || !g.test(e)) &&
              (1 !== E || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((m = e), (y = t), 1 === E && W.test(e))) {
                for (
                  (d = t.getAttribute("id"))
                    ? (d = d.replace(ie, re))
                    : t.setAttribute("id", (d = w)),
                    o = (h = s(e)).length;
                  o--;

                )
                  h[o] = "#" + d + " " + be(h[o]);
                (m = h.join(",")), (y = (ee.test(e) && me(t.parentNode)) || t);
              }
              try {
                return N.apply(i, y.querySelectorAll(m)), i;
              } catch (t) {
                P(e, !0);
              } finally {
                d === w && t.removeAttribute("id");
              }
            }
          }
          return l(e.replace(F, "$1"), t, i, r);
        }
        function le() {
          var e = [];
          return function t(n, r) {
            return (
              e.push(n + " ") > i.cacheLength && delete t[e.shift()],
              (t[n + " "] = r)
            );
          };
        }
        function ue(e) {
          return (e[w] = !0), e;
        }
        function de(e) {
          var t = f.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ce(e, t) {
          for (var n = e.split("|"), r = n.length; r--; )
            i.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function fe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function ve(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function ge(e) {
          return ue(function (t) {
            return (
              (t = +t),
              ue(function (n, i) {
                for (var r, a = e([], n.length, t), s = a.length; s--; )
                  n[(r = a[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = oe.support = {}),
        (a = oe.isXML = function (e) {
          var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
          return !U.test(t || (n && n.nodeName) || "HTML");
        }),
        (p = oe.setDocument = function (e) {
          var t,
            r,
            s = e ? e.ownerDocument || e : x;
          return s !== f && 9 === s.nodeType && s.documentElement
            ? ((h = (f = s).documentElement),
              (v = !a(f)),
              x !== f &&
                (r = f.defaultView) &&
                r.top !== r &&
                (r.addEventListener
                  ? r.addEventListener("unload", ae, !1)
                  : r.attachEvent && r.attachEvent("onunload", ae)),
              (n.attributes = de(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = de(function (e) {
                return (
                  e.appendChild(f.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = J.test(f.getElementsByClassName)),
              (n.getById = de(function (e) {
                return (
                  (h.appendChild(e).id = w),
                  !f.getElementsByName || !f.getElementsByName(w).length
                );
              })),
              n.getById
                ? ((i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                      var n,
                        i,
                        r,
                        a = t.getElementById(e);
                      if (a) {
                        if ((n = a.getAttributeNode("id")) && n.value === e)
                          return [a];
                        for (r = t.getElementsByName(e), i = 0; (a = r[i++]); )
                          if ((n = a.getAttributeNode("id")) && n.value === e)
                            return [a];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      a = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = a[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return a;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && v)
                    return t.getElementsByClassName(e);
                }),
              (m = []),
              (g = []),
              (n.qsa = J.test(f.querySelectorAll)) &&
                (de(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    w +
                    "'></a><select id='" +
                    w +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      g.push("[*^$]=" + R + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      g.push("\\[" + R + "*(?:value|" + $ + ")"),
                    e.querySelectorAll("[id~=" + w + "-]").length ||
                      g.push("~="),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + w + "+*").length ||
                      g.push(".#.+[+~]");
                }),
                de(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = f.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      g.push("name" + R + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      g.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:");
                })),
              (n.matchesSelector = J.test(
                (y =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                de(function (e) {
                  (n.disconnectedMatch = y.call(e, "*")),
                    y.call(e, "[s!='']:x"),
                    m.push("!=", q);
                }),
              (g = g.length && new RegExp(g.join("|"))),
              (m = m.length && new RegExp(m.join("|"))),
              (t = J.test(h.compareDocumentPosition)),
              (b =
                t || J.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (M = t
                ? function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var i =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === f || (e.ownerDocument === x && b(x, e))
                          ? -1
                          : t === f || (t.ownerDocument === x && b(x, t))
                          ? 1
                          : d
                          ? O(d, e) - O(d, t)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var n,
                      i = 0,
                      r = e.parentNode,
                      a = t.parentNode,
                      s = [e],
                      o = [t];
                    if (!r || !a)
                      return e === f
                        ? -1
                        : t === f
                        ? 1
                        : r
                        ? -1
                        : a
                        ? 1
                        : d
                        ? O(d, e) - O(d, t)
                        : 0;
                    if (r === a) return pe(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) o.unshift(n);
                    for (; s[i] === o[i]; ) i++;
                    return i
                      ? pe(s[i], o[i])
                      : s[i] === x
                      ? -1
                      : o[i] === x
                      ? 1
                      : 0;
                  }),
              f)
            : f;
        }),
        (oe.matches = function (e, t) {
          return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
          if (
            ((e.ownerDocument || e) !== f && p(e),
            n.matchesSelector &&
              v &&
              !P[t + " "] &&
              (!m || !m.test(t)) &&
              (!g || !g.test(t)))
          )
            try {
              var i = y.call(e, t);
              if (
                i ||
                n.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {
              P(t, !0);
            }
          return oe(t, f, null, [e]).length > 0;
        }),
        (oe.contains = function (e, t) {
          return (e.ownerDocument || e) !== f && p(e), b(e, t);
        }),
        (oe.attr = function (e, t) {
          (e.ownerDocument || e) !== f && p(e);
          var r = i.attrHandle[t.toLowerCase()],
            a =
              r && L.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
          return void 0 !== a
            ? a
            : n.attributes || !v
            ? e.getAttribute(t)
            : (a = e.getAttributeNode(t)) && a.specified
            ? a.value
            : null;
        }),
        (oe.escape = function (e) {
          return (e + "").replace(ie, re);
        }),
        (oe.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
          var t,
            i = [],
            r = 0,
            a = 0;
          if (
            ((c = !n.detectDuplicates),
            (d = !n.sortStable && e.slice(0)),
            e.sort(M),
            c)
          ) {
            for (; (t = e[a++]); ) t === e[a] && (r = i.push(a));
            for (; r--; ) e.splice(i[r], 1);
          }
          return (d = null), e;
        }),
        (r = oe.getText = function (e) {
          var t,
            n = "",
            i = 0,
            a = e.nodeType;
          if (a) {
            if (1 === a || 9 === a || 11 === a) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
            } else if (3 === a || 4 === a) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += r(t);
          return n;
        }),
        ((i = oe.selectors = {
          cacheLength: 50,
          createPseudo: ue,
          match: _,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return _.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      V.test(n) &&
                      (t = s(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = S[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                  S(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (i) {
                var r = oe.attr(i, e);
                return null == r
                  ? "!=" === t
                  : !t ||
                      ((r += ""),
                      "=" === t
                        ? r === n
                        : "!=" === t
                        ? r !== n
                        : "^=" === t
                        ? n && 0 === r.indexOf(n)
                        : "*=" === t
                        ? n && r.indexOf(n) > -1
                        : "$=" === t
                        ? n && r.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (r === n || r.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, i, r) {
              var a = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                o = "of-type" === t;
              return 1 === i && 0 === r
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var u,
                      d,
                      c,
                      p,
                      f,
                      h,
                      v = a !== s ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      m = o && t.nodeName.toLowerCase(),
                      y = !l && !o,
                      b = !1;
                    if (g) {
                      if (a) {
                        for (; v; ) {
                          for (p = t; (p = p[v]); )
                            if (
                              o
                                ? p.nodeName.toLowerCase() === m
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = v = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                        for (
                          b =
                            (f =
                              (u =
                                (d =
                                  (c = (p = g)[w] || (p[w] = {}))[p.uniqueID] ||
                                  (c[p.uniqueID] = {}))[e] || [])[0] === E &&
                              u[1]) && u[2],
                            p = f && g.childNodes[f];
                          (p = (++f && p && p[v]) || (b = f = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++b && p === t) {
                            d[e] = [E, f, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = f =
                            (u =
                              (d =
                                (c = (p = t)[w] || (p[w] = {}))[p.uniqueID] ||
                                (c[p.uniqueID] = {}))[e] || [])[0] === E &&
                            u[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (p = (++f && p && p[v]) || (b = f = 0) || h.pop()) &&
                          ((o
                            ? p.nodeName.toLowerCase() !== m
                            : 1 !== p.nodeType) ||
                            !++b ||
                            (y &&
                              ((d =
                                (c = p[w] || (p[w] = {}))[p.uniqueID] ||
                                (c[p.uniqueID] = {}))[e] = [E, b]),
                            p !== t));

                        );
                      return (b -= r) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                r =
                  i.pseudos[e] ||
                  i.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return r[w]
                ? r(t)
                : r.length > 1
                ? ((n = [e, e, "", t]),
                  i.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ue(function (e, n) {
                        for (var i, a = r(e, t), s = a.length; s--; )
                          e[(i = O(e, a[s]))] = !(n[i] = a[s]);
                      })
                    : function (e) {
                        return r(e, 0, n);
                      })
                : r;
            },
          },
          pseudos: {
            not: ue(function (e) {
              var t = [],
                n = [],
                i = o(e.replace(F, "$1"));
              return i[w]
                ? ue(function (e, t, n, r) {
                    for (var a, s = i(e, null, r, []), o = e.length; o--; )
                      (a = s[o]) && (e[o] = !(t[o] = a));
                  })
                : function (e, r, a) {
                    return (
                      (t[0] = e), i(t, null, a, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ue(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: ue(function (e) {
              return (
                (e = e.replace(te, ne)),
                function (t) {
                  return (t.textContent || r(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: ue(function (e) {
              return (
                Y.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(te, ne).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = v
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === f.activeElement &&
                (!f.hasFocus || f.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ve(!1),
            disabled: ve(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !i.pseudos.empty(e);
            },
            header: function (e) {
              return Q.test(e.nodeName);
            },
            input: function (e) {
              return K.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ge(function () {
              return [0];
            }),
            last: ge(function (e, t) {
              return [t - 1];
            }),
            eq: ge(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ge(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ge(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ge(function (e, t, n) {
              for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: ge(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          i.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
        function ye() {}
        function be(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function we(e, t, n) {
          var i = t.dir,
            r = t.next,
            a = r || i,
            s = n && "parentNode" === a,
            o = T++;
          return t.first
            ? function (t, n, r) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s) return e(t, n, r);
                return !1;
              }
            : function (t, n, l) {
                var u,
                  d,
                  c,
                  p = [E, o];
                if (l) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((d =
                          (c = t[w] || (t[w] = {}))[t.uniqueID] ||
                          (c[t.uniqueID] = {})),
                        r && r === t.nodeName.toLowerCase())
                      )
                        t = t[i] || t;
                      else {
                        if ((u = d[a]) && u[0] === E && u[1] === o)
                          return (p[2] = u[2]);
                        if (((d[a] = p), (p[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function xe(e) {
          return e.length > 1
            ? function (t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function Ee(e, t, n, i, r) {
          for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++)
            (a = e[o]) && ((n && !n(a, i, r)) || (s.push(a), u && t.push(o)));
          return s;
        }
        function Te(e, t, n, i, r, a) {
          return (
            i && !i[w] && (i = Te(i)),
            r && !r[w] && (r = Te(r, a)),
            ue(function (a, s, o, l) {
              var u,
                d,
                c,
                p = [],
                f = [],
                h = s.length,
                v =
                  a ||
                  (function (e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                    return n;
                  })(t || "*", o.nodeType ? [o] : o, []),
                g = !e || (!a && t) ? v : Ee(v, p, e, o, l),
                m = n ? (r || (a ? e : h || i) ? [] : s) : g;
              if ((n && n(g, m, o, l), i))
                for (u = Ee(m, f), i(u, [], o, l), d = u.length; d--; )
                  (c = u[d]) && (m[f[d]] = !(g[f[d]] = c));
              if (a) {
                if (r || e) {
                  if (r) {
                    for (u = [], d = m.length; d--; )
                      (c = m[d]) && u.push((g[d] = c));
                    r(null, (m = []), u, l);
                  }
                  for (d = m.length; d--; )
                    (c = m[d]) &&
                      (u = r ? O(a, c) : p[d]) > -1 &&
                      (a[u] = !(s[u] = c));
                }
              } else (m = Ee(m === s ? m.splice(h, m.length) : m)), r ? r(null, s, m, l) : N.apply(s, m);
            })
          );
        }
        function Se(e) {
          for (
            var t,
              n,
              r,
              a = e.length,
              s = i.relative[e[0].type],
              o = s || i.relative[" "],
              l = s ? 1 : 0,
              d = we(
                function (e) {
                  return e === t;
                },
                o,
                !0
              ),
              c = we(
                function (e) {
                  return O(t, e) > -1;
                },
                o,
                !0
              ),
              p = [
                function (e, n, i) {
                  var r =
                    (!s && (i || n !== u)) ||
                    ((t = n).nodeType ? d(e, n, i) : c(e, n, i));
                  return (t = null), r;
                },
              ];
            l < a;
            l++
          )
            if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
            else {
              if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                for (r = ++l; r < a && !i.relative[e[r].type]; r++);
                return Te(
                  l > 1 && xe(p),
                  l > 1 &&
                    be(
                      e
                        .slice(0, l - 1)
                        .concat({ value: " " === e[l - 2].type ? "*" : "" })
                    ).replace(F, "$1"),
                  n,
                  l < r && Se(e.slice(l, r)),
                  r < a && Se((e = e.slice(r))),
                  r < a && be(e)
                );
              }
              p.push(n);
            }
          return xe(p);
        }
        return (
          (ye.prototype = i.filters = i.pseudos),
          (i.setFilters = new ye()),
          (s = oe.tokenize = function (e, t) {
            var n,
              r,
              a,
              s,
              o,
              l,
              u,
              d = C[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (o = e, l = [], u = i.preFilter; o; ) {
              for (s in ((n && !(r = G.exec(o))) ||
                (r && (o = o.slice(r[0].length) || o), l.push((a = []))),
              (n = !1),
              (r = X.exec(o)) &&
                ((n = r.shift()),
                a.push({ value: n, type: r[0].replace(F, " ") }),
                (o = o.slice(n.length))),
              i.filter))
                !(r = _[s].exec(o)) ||
                  (u[s] && !(r = u[s](r))) ||
                  ((n = r.shift()),
                  a.push({ value: n, type: s, matches: r }),
                  (o = o.slice(n.length)));
              if (!n) break;
            }
            return t ? o.length : o ? oe.error(e) : C(e, l).slice(0);
          }),
          (o = oe.compile = function (e, t) {
            var n,
              r = [],
              a = [],
              o = k[e + " "];
            if (!o) {
              for (t || (t = s(e)), n = t.length; n--; )
                (o = Se(t[n]))[w] ? r.push(o) : a.push(o);
              (o = k(
                e,
                (function (e, t) {
                  var n = t.length > 0,
                    r = e.length > 0,
                    a = function (a, s, o, l, d) {
                      var c,
                        h,
                        g,
                        m = 0,
                        y = "0",
                        b = a && [],
                        w = [],
                        x = u,
                        T = a || (r && i.find.TAG("*", d)),
                        S = (E += null == x ? 1 : Math.random() || 0.1),
                        C = T.length;
                      for (
                        d && (u = s === f || s || d);
                        y !== C && null != (c = T[y]);
                        y++
                      ) {
                        if (r && c) {
                          for (
                            h = 0,
                              s || c.ownerDocument === f || (p(c), (o = !v));
                            (g = e[h++]);

                          )
                            if (g(c, s || f, o)) {
                              l.push(c);
                              break;
                            }
                          d && (E = S);
                        }
                        n && ((c = !g && c) && m--, a && b.push(c));
                      }
                      if (((m += y), n && y !== m)) {
                        for (h = 0; (g = t[h++]); ) g(b, w, s, o);
                        if (a) {
                          if (m > 0)
                            for (; y--; ) b[y] || w[y] || (w[y] = D.call(l));
                          w = Ee(w);
                        }
                        N.apply(l, w),
                          d &&
                            !a &&
                            w.length > 0 &&
                            m + t.length > 1 &&
                            oe.uniqueSort(l);
                      }
                      return d && ((E = S), (u = x)), b;
                    };
                  return n ? ue(a) : a;
                })(a, r)
              )).selector = e;
            }
            return o;
          }),
          (l = oe.select = function (e, t, n, r) {
            var a,
              l,
              u,
              d,
              c,
              p = "function" == typeof e && e,
              f = !r && s((e = p.selector || e));
            if (((n = n || []), 1 === f.length)) {
              if (
                (l = f[0] = f[0].slice(0)).length > 2 &&
                "ID" === (u = l[0]).type &&
                9 === t.nodeType &&
                v &&
                i.relative[l[1].type]
              ) {
                if (
                  !(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])
                )
                  return n;
                p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
              }
              for (
                a = _.needsContext.test(e) ? 0 : l.length;
                a-- && ((u = l[a]), !i.relative[(d = u.type)]);

              )
                if (
                  (c = i.find[d]) &&
                  (r = c(
                    u.matches[0].replace(te, ne),
                    (ee.test(l[0].type) && me(t.parentNode)) || t
                  ))
                ) {
                  if ((l.splice(a, 1), !(e = r.length && be(l))))
                    return N.apply(n, r), n;
                  break;
                }
            }
            return (
              (p || o(e, f))(
                r,
                t,
                !v,
                n,
                !t || (ee.test(e) && me(t.parentNode)) || t
              ),
              n
            );
          }),
          (n.sortStable = w.split("").sort(M).join("") === w),
          (n.detectDuplicates = !!c),
          p(),
          (n.sortDetached = de(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
          })),
          de(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            ce("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            de(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            ce("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          de(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            ce($, function (e, t, n) {
              var i;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
            }),
          oe
        );
      })(n);
      (T.find = k),
        (T.expr = k.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = k.uniqueSort),
        (T.text = k.getText),
        (T.isXMLDoc = k.isXML),
        (T.contains = k.contains),
        (T.escapeSelector = k.escape);
      var P = function (e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && T(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        M = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        L = T.expr.match.needsContext;
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function z(e, t, n) {
        return y(t)
          ? T.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? T.find.matchesSelector(i, e)
              ? [i]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
            return i > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(z(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(z(this, e || [], !0));
          },
          is: function (e) {
            return !!z(
              this,
              "string" == typeof e && L.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var N,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || N), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : I.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : s,
                  !0
                )
              ),
              D.test(i[1]) && T.isPlainObject(t))
            )
              for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = s.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (N = T(s));
      var O = /^(?:parents|prev(?:Until|All))/,
        $ = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            r = this.length,
            a = [],
            s = "string" != typeof e && T(e);
          if (!L.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  a.push(n);
                  break;
                }
          return this.pushStack(a.length > 1 ? T.uniqueSort(a) : a);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(T(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return P(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return P(e, "parentNode", n);
            },
            next: function (e) {
              return R(e, "nextSibling");
            },
            prev: function (e) {
              return R(e, "previousSibling");
            },
            nextAll: function (e) {
              return P(e, "nextSibling");
            },
            prevAll: function (e) {
              return P(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return P(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return P(e, "previousSibling", n);
            },
            siblings: function (e) {
              return M((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return M(e.firstChild);
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (A(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, i) {
              var r = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = T.filter(i, r)),
                this.length > 1 &&
                  ($[e] || T.uniqueSort(r), O.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var j = /[^\x20\t\r\n\f]+/g;
      function H(e) {
        return e;
      }
      function q(e) {
        throw e;
      }
      function B(e, t, n, i) {
        var r;
        try {
          e && y((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && y((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(j) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          i,
          r,
          a = [],
          s = [],
          o = -1,
          l = function () {
            for (r = r || e.once, i = t = !0; s.length; o = -1)
              for (n = s.shift(); ++o < a.length; )
                !1 === a[o].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((o = a.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                a &&
                  (n && !t && ((o = a.length - 1), s.push(n)),
                  (function t(n) {
                    T.each(n, function (n, i) {
                      y(i)
                        ? (e.unique && u.has(i)) || a.push(i)
                        : i && i.length && "string" !== E(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, a, n)) > -1; )
                    a.splice(n, 1), n <= o && o--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, a) > -1 : a.length > 0;
            },
            empty: function () {
              return a && (a = []), this;
            },
            disable: function () {
              return (r = s = []), (a = n = ""), this;
            },
            disabled: function () {
              return !a;
            },
            lock: function () {
              return (r = s = []), n || t || (a = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return u;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return a.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, i) {
                      var r = y(e[i[4]]) && e[i[4]];
                      a[i[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && y(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, r) {
                  var a = 0;
                  function s(e, t, i, r) {
                    return function () {
                      var o = this,
                        l = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < a)) {
                            if ((n = i.apply(o, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              y(u)
                                ? r
                                  ? u.call(n, s(a, t, H, r), s(a, t, q, r))
                                  : (a++,
                                    u.call(
                                      n,
                                      s(a, t, H, r),
                                      s(a, t, q, r),
                                      s(a, t, H, t.notifyWith)
                                    ))
                                : (i !== H && ((o = void 0), (l = [n])),
                                  (r || t.resolveWith)(o, l));
                          }
                        },
                        d = r
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, d.stackTrace),
                                  e + 1 >= a &&
                                    (i !== q && ((o = void 0), (l = [n])),
                                    t.rejectWith(o, l));
                              }
                            };
                      e
                        ? d()
                        : (T.Deferred.getStackHook &&
                            (d.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(d));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(s(0, n, y(r) ? r : H, n.notifyWith)),
                      t[1][3].add(s(0, n, y(e) ? e : H)),
                      t[2][3].add(s(0, n, y(i) ? i : q));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, r) : r;
                },
              },
              a = {};
            return (
              T.each(t, function (e, n) {
                var s = n[2],
                  o = n[5];
                (r[n[1]] = s.add),
                  o &&
                    s.add(
                      function () {
                        i = o;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (a[n[0]] = function () {
                    return (
                      a[n[0] + "With"](this === a ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (a[n[0] + "With"] = s.fireWith);
              }),
              r.promise(a),
              e && e.call(a, a),
              a
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = l.call(arguments),
              a = T.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || a.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (B(e, a.done(s(n)).resolve, a.reject, !t),
              "pending" === a.state() || y(r[n] && r[n].then))
            )
              return a.then();
            for (; n--; ) B(r[n], s(n), a.reject);
            return a.promise();
          },
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          F.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var G = T.Deferred();
      function X() {
        s.removeEventListener("DOMContentLoaded", X),
          n.removeEventListener("load", X),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          G.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || G.resolveWith(s, [T]));
          },
        }),
        (T.ready.then = G.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (s.addEventListener("DOMContentLoaded", X),
            n.addEventListener("load", X));
      var W = function (e, t, n, i, r, a, s) {
          var o = 0,
            l = e.length,
            u = null == n;
          if ("object" === E(n))
            for (o in ((r = !0), n)) W(e, t, o, n[o], !0, a, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            y(i) || (s = !0),
            u &&
              (s
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(T(e), n);
                  }))),
            t)
          )
            for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : a;
        },
        V = /^-ms-/,
        Y = /-([a-z])/g;
      function _(e, t) {
        return t.toUpperCase();
      }
      function U(e) {
        return e.replace(V, "ms-").replace(Y, _);
      }
      var K = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = T.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                K(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              r = this.cache(e);
            if ("string" == typeof t) r[U(t)] = n;
            else for (i in t) r[U(i)] = t[i];
            return r;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][U(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(U)
                  : (t = U(t)) in i
                  ? [t]
                  : t.match(j) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || T.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var J = new Q(),
        Z = new Q(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function (e, t) {
          Z.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              i,
              r,
              a = this[0],
              s = a && a.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = Z.get(a)), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = U(i.slice(5))), ne(a, i, r[i]));
                J.set(a, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Z.set(this, e);
                })
              : W(
                  this,
                  function (t) {
                    var n;
                    if (a && void 0 === t)
                      return void 0 !== (n = Z.get(a, e))
                        ? n
                        : void 0 !== (n = ne(a, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Z.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = J.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = J.access(e, t, T.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              i = n.length,
              r = n.shift(),
              a = T._queueHooks(e, t);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete a.stop,
                r.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  a
                )),
              !i && a && a.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              r = T.Deferred(),
              a = this,
              s = this.length,
              o = function () {
                --i || r.resolveWith(a, [a]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = J.get(a[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(o));
            return o(), r.promise(t);
          },
        });
      var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
        ae = ["Top", "Right", "Bottom", "Left"],
        se = s.documentElement,
        oe = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        le = { composed: !0 };
      se.attachShadow &&
        (oe = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(le) === e.ownerDocument
          );
        });
      var ue = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && oe(e) && "none" === T.css(e, "display"))
          );
        },
        de = function (e, t, n, i) {
          var r,
            a,
            s = {};
          for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
          for (a in ((r = n.apply(e, i || [])), t)) e.style[a] = s[a];
          return r;
        };
      function ce(e, t, n, i) {
        var r,
          a,
          s = 20,
          o = i
            ? function () {
                return i.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          l = o(),
          u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          d =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== u && +l)) &&
            re.exec(T.css(e, t));
        if (d && d[3] !== u) {
          for (l /= 2, u = u || d[3], d = +l || 1; s--; )
            T.style(e, t, d + u),
              (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (s = 0),
              (d /= a);
          (d *= 2), T.style(e, t, d + u), (n = n || []);
        }
        return (
          n &&
            ((d = +d || +l || 0),
            (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = d), (i.end = r))),
          r
        );
      }
      var pe = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = pe[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (pe[i] = r),
          r)
        );
      }
      function he(e, t) {
        for (var n, i, r = [], a = 0, s = e.length; a < s; a++)
          (i = e[a]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((r[a] = J.get(i, "display") || null),
                  r[a] || (i.style.display = "")),
                "" === i.style.display && ue(i) && (r[a] = fe(i)))
              : "none" !== n && ((r[a] = "none"), J.set(i, "display", n)));
        for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return he(this, !0);
        },
        hide: function () {
          return he(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var ve = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i,
        ye = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && A(e, t)) ? T.merge([e], n) : n
        );
      }
      function we(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (ye.optgroup = ye.option),
        (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td);
      var xe,
        Ee,
        Te = /<|&#?\w+;/;
      function Se(e, t, n, i, r) {
        for (
          var a,
            s,
            o,
            l,
            u,
            d,
            c = t.createDocumentFragment(),
            p = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((a = e[f]) || 0 === a)
            if ("object" === E(a)) T.merge(p, a.nodeType ? [a] : a);
            else if (Te.test(a)) {
              for (
                s = s || c.appendChild(t.createElement("div")),
                  o = (ge.exec(a) || ["", ""])[1].toLowerCase(),
                  l = ye[o] || ye._default,
                  s.innerHTML = l[1] + T.htmlPrefilter(a) + l[2],
                  d = l[0];
                d--;

              )
                s = s.lastChild;
              T.merge(p, s.childNodes), ((s = c.firstChild).textContent = "");
            } else p.push(t.createTextNode(a));
        for (c.textContent = "", f = 0; (a = p[f++]); )
          if (i && T.inArray(a, i) > -1) r && r.push(a);
          else if (
            ((u = oe(a)), (s = be(c.appendChild(a), "script")), u && we(s), n)
          )
            for (d = 0; (a = s[d++]); ) me.test(a.type || "") && n.push(a);
        return c;
      }
      (xe = s.createDocumentFragment().appendChild(s.createElement("div"))),
        (Ee = s.createElement("input")).setAttribute("type", "radio"),
        Ee.setAttribute("checked", "checked"),
        Ee.setAttribute("name", "t"),
        xe.appendChild(Ee),
        (m.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (xe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue);
      var Ce = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Pe = /^([^.]*)(?:\.(.+)|)/;
      function Me() {
        return !0;
      }
      function Le() {
        return !1;
      }
      function Ae(e, t) {
        return (
          (e ===
            (function () {
              try {
                return s.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function De(e, t, n, i, r, a) {
        var s, o;
        if ("object" == typeof t) {
          for (o in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            De(e, o, n, i, t[o], a);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = Le;
        else if (!r) return e;
        return (
          1 === a &&
            ((s = r),
            ((r = function (e) {
              return T().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, r, i, n);
          })
        );
      }
      function ze(e, t, n) {
        n
          ? (J.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  r,
                  a = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (a)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((a = l.call(arguments)),
                    J.set(this, t, a),
                    (i = n(this, t)),
                    this[t](),
                    a !== (r = J.get(this, t)) || i
                      ? J.set(this, t, !1)
                      : (r = void 0),
                    a !== r)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), r;
                } else
                  a &&
                    (J.set(
                      this,
                      t,
                      T.event.trigger(
                        T.extend(a.shift(), T.Event.prototype),
                        a,
                        this
                      )
                    ),
                    e.stopImmediatePropagation());
              },
            }))
          : T.event.add(e, t, Me);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, i, r) {
          var a,
            s,
            o,
            l,
            u,
            d,
            c,
            p,
            f,
            h,
            v,
            g = J.get(e);
          if (g)
            for (
              n.handler && ((n = (a = n).handler), (r = a.selector)),
                r && T.find.matchesSelector(se, r),
                n.guid || (n.guid = T.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) ||
                  (s = g.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                u = (t = (t || "").match(j) || [""]).length;
              u--;

            )
              (f = v = (o = Pe.exec(t[u]) || [])[1]),
                (h = (o[2] || "").split(".").sort()),
                f &&
                  ((c = T.event.special[f] || {}),
                  (f = (r ? c.delegateType : c.bindType) || f),
                  (c = T.event.special[f] || {}),
                  (d = T.extend(
                    {
                      type: f,
                      origType: v,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && T.expr.match.needsContext.test(r),
                      namespace: h.join("."),
                    },
                    a
                  )),
                  (p = l[f]) ||
                    (((p = l[f] = []).delegateCount = 0),
                    (c.setup && !1 !== c.setup.call(e, i, h, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  c.add &&
                    (c.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                  r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                  (T.event.global[f] = !0));
        },
        remove: function (e, t, n, i, r) {
          var a,
            s,
            o,
            l,
            u,
            d,
            c,
            p,
            f,
            h,
            v,
            g = J.hasData(e) && J.get(e);
          if (g && (l = g.events)) {
            for (u = (t = (t || "").match(j) || [""]).length; u--; )
              if (
                ((f = v = (o = Pe.exec(t[u]) || [])[1]),
                (h = (o[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  c = T.event.special[f] || {},
                    p = l[(f = (i ? c.delegateType : c.bindType) || f)] || [],
                    o =
                      o[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = a = p.length;
                  a--;

                )
                  (d = p[a]),
                    (!r && v !== d.origType) ||
                      (n && n.guid !== d.guid) ||
                      (o && !o.test(d.namespace)) ||
                      (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                      (p.splice(a, 1),
                      d.selector && p.delegateCount--,
                      c.remove && c.remove.call(e, d));
                s &&
                  !p.length &&
                  ((c.teardown && !1 !== c.teardown.call(e, h, g.handle)) ||
                    T.removeEvent(e, f, g.handle),
                  delete l[f]);
              } else for (f in l) T.event.remove(e, f + t[u], n, i, !0);
            T.isEmptyObject(l) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            r,
            a,
            s,
            o = T.event.fix(e),
            l = new Array(arguments.length),
            u = (J.get(this, "events") || {})[o.type] || [],
            d = T.event.special[o.type] || {};
          for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((o.delegateTarget = this),
            !d.preDispatch || !1 !== d.preDispatch.call(this, o))
          ) {
            for (
              s = T.event.handlers.call(this, o, u), t = 0;
              (r = s[t++]) && !o.isPropagationStopped();

            )
              for (
                o.currentTarget = r.elem, n = 0;
                (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();

              )
                (o.rnamespace &&
                  !1 !== a.namespace &&
                  !o.rnamespace.test(a.namespace)) ||
                  ((o.handleObj = a),
                  (o.data = a.data),
                  void 0 !==
                    (i = (
                      (T.event.special[a.origType] || {}).handle || a.handler
                    ).apply(r.elem, l)) &&
                    !1 === (o.result = i) &&
                    (o.preventDefault(), o.stopPropagation()));
            return d.postDispatch && d.postDispatch.call(this, o), o.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
            a,
            s,
            o = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== e.type || !0 !== u.disabled)
              ) {
                for (a = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = t[n]).selector + " ")] &&
                    (s[r] = i.needsContext
                      ? T(r, this).index(u) > -1
                      : T.find(r, this, null, [u]).length),
                    s[r] && a.push(i);
                a.length && o.push({ elem: u, handlers: a });
              }
          return (
            (u = this),
            l < t.length && o.push({ elem: u, handlers: t.slice(l) }),
            o
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ve.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  void 0 === J.get(t, "click") &&
                  ze(t, "click", Me),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ve.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  void 0 === J.get(t, "click") &&
                  ze(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ve.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  J.get(t, "click")) ||
                A(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Me
                  : Le),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Le,
          isPropagationStopped: Le,
          isImmediatePropagationStopped: Le,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Me),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Me),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Me),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Ce.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return ze(this, e, Ae), !1;
            },
            trigger: function () {
              return ze(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (i && (i === this || T.contains(this, i))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, i) {
            return De(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return De(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                T(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Le),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Re(e, t) {
        return (
          (A(e, "table") &&
            A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function je(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function He(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function qe(e, t) {
        var n, i, r, a, s, o, l, u;
        if (1 === t.nodeType) {
          if (
            J.hasData(e) &&
            ((a = J.access(e)), (s = J.set(t, a)), (u = a.events))
          )
            for (r in (delete s.handle, (s.events = {}), u))
              for (n = 0, i = u[r].length; n < i; n++)
                T.event.add(t, r, u[r][n]);
          Z.hasData(e) &&
            ((o = Z.access(e)), (l = T.extend({}, o)), Z.set(t, l));
        }
      }
      function Be(e, t, n, i) {
        t = u.apply([], t);
        var r,
          a,
          s,
          o,
          l,
          d,
          c = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          v = y(h);
        if (v || (p > 1 && "string" == typeof h && !m.checkClone && Oe.test(h)))
          return e.each(function (r) {
            var a = e.eq(r);
            v && (t[0] = h.call(this, r, a.html())), Be(a, t, n, i);
          });
        if (
          p &&
          ((a = (r = Se(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === r.childNodes.length && (r = a),
          a || i)
        ) {
          for (o = (s = T.map(be(r, "script"), je)).length; c < p; c++)
            (l = r),
              c !== f &&
                ((l = T.clone(l, !0, !0)), o && T.merge(s, be(l, "script"))),
              n.call(e[c], l, c);
          if (o)
            for (
              d = s[s.length - 1].ownerDocument, T.map(s, He), c = 0;
              c < o;
              c++
            )
              (l = s[c]),
                me.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  T.contains(d, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !l.noModule &&
                      T._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce"),
                      })
                    : x(l.textContent.replace($e, ""), l, d));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, a = 0; null != (i = r[a]); a++)
          n || 1 !== i.nodeType || T.cleanData(be(i)),
            i.parentNode &&
              (n && oe(i) && we(be(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var i,
            r,
            a,
            s,
            o,
            l,
            u,
            d = e.cloneNode(!0),
            c = oe(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (s = be(d), i = 0, r = (a = be(e)).length; i < r; i++)
              (o = a[i]),
                (l = s[i]),
                (u = void 0),
                "input" === (u = l.nodeName.toLowerCase()) && ve.test(o.type)
                  ? (l.checked = o.checked)
                  : ("input" !== u && "textarea" !== u) ||
                    (l.defaultValue = o.defaultValue);
          if (t)
            if (n)
              for (
                a = a || be(e), s = s || be(d), i = 0, r = a.length;
                i < r;
                i++
              )
                qe(a[i], s[i]);
            else qe(e, d);
          return (
            (s = be(d, "script")).length > 0 && we(s, !c && be(e, "script")), d
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, r = T.event.special, a = 0;
            void 0 !== (n = e[a]);
            a++
          )
            if (K(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return Fe(this, e, !0);
          },
          remove: function (e) {
            return Fe(this, e);
          },
          text: function (e) {
            return W(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Be(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Re(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Be(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Re(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Be(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Be(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return W(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Ie.test(e) &&
                  !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Be(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, i = [], r = T(e), a = r.length - 1, s = 0;
                s <= a;
                s++
              )
                (n = s === a ? this : this.clone(!0)),
                  T(r[s])[t](n),
                  d.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Ge = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
        Xe = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        We = new RegExp(ae.join("|"), "i");
      function Ve(e, t, n) {
        var i,
          r,
          a,
          s,
          o = e.style;
        return (
          (n = n || Xe(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              oe(e) ||
              (s = T.style(e, t)),
            !m.pixelBoxStyles() &&
              Ge.test(s) &&
              We.test(t) &&
              ((i = o.width),
              (r = o.minWidth),
              (a = o.maxWidth),
              (o.minWidth = o.maxWidth = o.width = s),
              (s = n.width),
              (o.width = i),
              (o.minWidth = r),
              (o.maxWidth = a))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ye(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (d) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (d.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              se.appendChild(u).appendChild(d);
            var e = n.getComputedStyle(d);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (d.style.right = "60%"),
              (o = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (d.style.position = "absolute"),
              (a = 12 === t(d.offsetWidth / 3)),
              se.removeChild(u),
              (d = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
          a,
          o,
          l,
          u = s.createElement("div"),
          d = s.createElement("div");
        d.style &&
          ((d.style.backgroundClip = "content-box"),
          (d.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
          T.extend(m, {
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), o;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), a;
            },
          }));
      })();
      var _e = ["Webkit", "Moz", "ms"],
        Ue = s.createElement("div").style,
        Ke = {};
      function Qe(e) {
        var t = T.cssProps[e] || Ke[e];
        return (
          t ||
          (e in Ue
            ? e
            : (Ke[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
                    n--;

                  )
                    if ((e = _e[n] + t) in Ue) return e;
                })(e) || e))
        );
      }
      var Je = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        et = { position: "absolute", visibility: "hidden", display: "block" },
        tt = { letterSpacing: "0", fontWeight: "400" };
      function nt(e, t, n) {
        var i = re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function it(e, t, n, i, r, a) {
        var s = "width" === t ? 1 : 0,
          o = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += T.css(e, n + ae[s], !0, r)),
            i
              ? ("content" === n && (l -= T.css(e, "padding" + ae[s], !0, r)),
                "margin" !== n &&
                  (l -= T.css(e, "border" + ae[s] + "Width", !0, r)))
              : ((l += T.css(e, "padding" + ae[s], !0, r)),
                "padding" !== n
                  ? (l += T.css(e, "border" + ae[s] + "Width", !0, r))
                  : (o += T.css(e, "border" + ae[s] + "Width", !0, r)));
        return (
          !i &&
            a >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    a -
                    l -
                    o -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function rt(e, t, n) {
        var i = Xe(e),
          r =
            (!m.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, i),
          a = r,
          s = Ve(e, t, i),
          o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ge.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!m.boxSizingReliable() && r) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
            (a = o in e) && (s = e[o])),
          (s = parseFloat(s) || 0) +
            it(e, t, n || (r ? "border" : "content"), a, i, s) +
            "px"
        );
      }
      function at(e, t, n, i, r) {
        return new at.prototype.init(e, t, n, i, r);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ve(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              a,
              s,
              o = U(t),
              l = Ze.test(t),
              u = e.style;
            if (
              (l || (t = Qe(o)),
              (s = T.cssHooks[t] || T.cssHooks[o]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : u[t];
            "string" === (a = typeof n) &&
              (r = re.exec(n)) &&
              r[1] &&
              ((n = ce(e, t, r)), (a = "number")),
              null != n &&
                n == n &&
                ("number" !== a ||
                  l ||
                  (n += (r && r[3]) || (T.cssNumber[o] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var r,
            a,
            s,
            o = U(t);
          return (
            Ze.test(t) || (t = Qe(o)),
            (s = T.cssHooks[t] || T.cssHooks[o]) &&
              "get" in s &&
              (r = s.get(e, !0, n)),
            void 0 === r && (r = Ve(e, t, i)),
            "normal" === r && t in tt && (r = tt[t]),
            "" === n || n
              ? ((a = parseFloat(r)), !0 === n || isFinite(a) ? a || 0 : r)
              : r
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Je.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, i)
                  : de(e, et, function () {
                      return rt(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var r,
                a = Xe(e),
                s = !m.scrollboxSize() && "absolute" === a.position,
                o = (s || i) && "border-box" === T.css(e, "boxSizing", !1, a),
                l = i ? it(e, t, i, o, a) : 0;
              return (
                o &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(a[t]) -
                      it(e, t, "border", !1, a) -
                      0.5
                  )),
                l &&
                  (r = re.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                nt(0, n, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  de(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  a = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + ae[i] + t] = a[i] || a[i - 2] || a[0];
              return r;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = nt);
        }),
        T.fn.extend({
          css: function (e, t) {
            return W(
              this,
              function (e, t, n) {
                var i,
                  r,
                  a = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = Xe(e), r = t.length; s < r; s++)
                    a[t[s]] = T.css(e, t[s], !1, i);
                  return a;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function (e, t, n, i, r, a) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = a || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = at.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : at.propHooks._default.set(this),
              this
            );
          },
        }),
        (at.prototype.init.prototype = at.prototype),
        (at.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = at.prototype.init),
        (T.fx.step = {});
      var st,
        ot,
        lt = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function dt() {
        ot &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(dt)
            : n.setTimeout(dt, T.fx.interval),
          T.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            st = void 0;
          }),
          (st = Date.now())
        );
      }
      function pt(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          r["margin" + (n = ae[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function ft(e, t, n) {
        for (
          var i,
            r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
            a = 0,
            s = r.length;
          a < s;
          a++
        )
          if ((i = r[a].call(n, t, e))) return i;
      }
      function ht(e, t, n) {
        var i,
          r,
          a = 0,
          s = ht.prefilters.length,
          o = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = st || ct(),
                n = Math.max(0, u.startTime + u.duration - t),
                i = 1 - (n / u.duration || 0),
                a = 0,
                s = u.tweens.length;
              a < s;
              a++
            )
              u.tweens[a].run(i);
            return (
              o.notifyWith(e, [u, i, n]),
              i < 1 && s
                ? n
                : (s || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
            );
          },
          u = o.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: st || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = T.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return (
                t
                  ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t]))
                  : o.rejectWith(e, [u, t]),
                this
              );
            },
          }),
          d = u.props;
        for (
          !(function (e, t) {
            var n, i, r, a, s;
            for (n in e)
              if (
                ((r = t[(i = U(n))]),
                (a = e[n]),
                Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])),
                n !== i && ((e[i] = a), delete e[n]),
                (s = T.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((a = s.expand(a)), delete e[i], a))
                  (n in e) || ((e[n] = a[n]), (t[n] = r));
              else t[i] = r;
          })(d, u.opts.specialEasing);
          a < s;
          a++
        )
          if ((i = ht.prefilters[a].call(u, e, d, u.opts)))
            return (
              y(i.stop) &&
                (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          T.map(d, ft, u),
          y(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (T.Animation = T.extend(ht, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          y(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (ht.tweeners[n] = ht.tweeners[n] || []),
              ht.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              r,
              a,
              s,
              o,
              l,
              u,
              d,
              c = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              v = e.nodeType && ue(e),
              g = J.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = T._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (o = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || o();
                })),
              s.unqueued++,
              p.always(function () {
                p.always(function () {
                  s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((r = t[i]), lt.test(r))) {
                if (
                  (delete t[i],
                  (a = a || "toggle" === r),
                  r === (v ? "hide" : "show"))
                ) {
                  if ("show" !== r || !g || void 0 === g[i]) continue;
                  v = !0;
                }
                f[i] = (g && g[i]) || T.style(e, i);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
              for (i in (c &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (u = g && g.display) && (u = J.get(e, "display")),
                "none" === (d = T.css(e, "display")) &&
                  (u
                    ? (d = u)
                    : (he([e], !0),
                      (u = e.style.display || u),
                      (d = T.css(e, "display")),
                      he([e]))),
                ("inline" === d || ("inline-block" === d && null != u)) &&
                  "none" === T.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = u;
                    }),
                    null == u &&
                      ((d = h.display), (u = "none" === d ? "" : d))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (g
                    ? "hidden" in g && (v = g.hidden)
                    : (g = J.access(e, "fxshow", { display: u })),
                  a && (g.hidden = !v),
                  v && he([e], !0),
                  p.done(function () {
                    for (i in (v || he([e]), J.remove(e, "fxshow"), f))
                      T.style(e, i, f[i]);
                  })),
                  (l = ft(v ? g[i] : 0, i, p)),
                  i in g ||
                    ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t),
                };
          return (
            T.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in T.fx.speeds
                  ? (i.duration = T.fx.speeds[i.duration])
                  : (i.duration = T.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
            }),
            i
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(ue)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var r = T.isEmptyObject(e),
              a = T.speed(t, n, i),
              s = function () {
                var t = ht(this, T.extend({}, e), a);
                (r || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  a = T.timers,
                  s = J.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ut.test(r) && i(s[r]);
                for (r = a.length; r--; )
                  a[r].elem !== this ||
                    (null != e && a[r].queue !== e) ||
                    (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = J.get(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  a = T.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = a.length;
                  t--;

                )
                  a[t].elem === this &&
                    a[t].queue === e &&
                    (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(pt(t, !0), e, i, r);
          };
        }),
        T.each(
          {
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (st = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          ot || ((ot = !0), dt());
        }),
        (T.fx.stop = function () {
          ot = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e = s.createElement("input"),
            t = s
              .createElement("select")
              .appendChild(s.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = s.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var vt,
        gt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return W(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var i,
              r,
              a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === a && T.isXMLDoc(e)) ||
                    (r =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? vt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : null == (i = T.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              r = t && t.match(j);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          },
        }),
        (vt = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || T.find.attr;
          gt[t] = function (e, t, i) {
            var r,
              a,
              s = t.toLowerCase();
            return (
              i ||
                ((a = gt[s]),
                (gt[s] = r),
                (r = null != n(e, t, i) ? s : null),
                (gt[s] = a)),
              r
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
      function bt(e) {
        return (e.match(j) || []).join(" ");
      }
      function wt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(j)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return W(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var i,
              r,
              a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
              return (
                (1 === a && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              i,
              r,
              a,
              s,
              o,
              l = 0;
            if (y(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, wt(this)));
              });
            if ((t = xt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = wt(n)), (i = 1 === n.nodeType && " " + bt(r) + " "))
                ) {
                  for (s = 0; (a = t[s++]); )
                    i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                  r !== (o = bt(i)) && n.setAttribute("class", o);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              r,
              a,
              s,
              o,
              l = 0;
            if (y(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, wt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = wt(n)), (i = 1 === n.nodeType && " " + bt(r) + " "))
                ) {
                  for (s = 0; (a = t[s++]); )
                    for (; i.indexOf(" " + a + " ") > -1; )
                      i = i.replace(" " + a + " ", " ");
                  r !== (o = bt(i)) && n.setAttribute("class", o);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, wt(this), t), t);
                })
              : this.each(function () {
                  var t, r, a, s;
                  if (i)
                    for (r = 0, a = T(this), s = xt(e); (t = s[r++]); )
                      a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = wt(this)) && J.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Et = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = y(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? e.call(this, n, T(this).val()) : e)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = T.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (t =
                T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(r, "value"))
              ? n
              : "string" == typeof (n = r.value)
              ? n.replace(Et, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : bt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  a = e.selectedIndex,
                  s = "select-one" === e.type,
                  o = s ? null : [],
                  l = s ? a + 1 : r.length;
                for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === a) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), s)) return t;
                    o.push(t);
                  }
                return o;
              },
              set: function (e, t) {
                for (
                  var n, i, r = e.options, a = T.makeArray(t), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    T.inArray(T.valHooks.option.get(i), a) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), a;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var Tt = /^(?:focusinfocus|focusoutblur)$/,
        St = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, i, r) {
          var a,
            o,
            l,
            u,
            d,
            c,
            p,
            f,
            v = [i || s],
            g = h.call(e, "type") ? e.type : e,
            m = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((o = f = l = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Tt.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (d = g.indexOf(":") < 0 && "on" + g),
              ((e = e[T.expando]
                ? e
                : new T.Event(g, "object" == typeof e && e)).isTrigger = r
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (p = T.event.special[g] || {}),
              r || !p.trigger || !1 !== p.trigger.apply(i, t)))
          ) {
            if (!r && !p.noBubble && !b(i)) {
              for (
                u = p.delegateType || g, Tt.test(u + g) || (o = o.parentNode);
                o;
                o = o.parentNode
              )
                v.push(o), (l = o);
              l === (i.ownerDocument || s) &&
                v.push(l.defaultView || l.parentWindow || n);
            }
            for (a = 0; (o = v[a++]) && !e.isPropagationStopped(); )
              (f = o),
                (e.type = a > 1 ? u : p.bindType || g),
                (c =
                  (J.get(o, "events") || {})[e.type] && J.get(o, "handle")) &&
                  c.apply(o, t),
                (c = d && o[d]) &&
                  c.apply &&
                  K(o) &&
                  ((e.result = c.apply(o, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              r ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(v.pop(), t)) ||
                !K(i) ||
                (d &&
                  y(i[g]) &&
                  !b(i) &&
                  ((l = i[d]) && (i[d] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && f.addEventListener(g, St),
                  i[g](),
                  e.isPropagationStopped() && f.removeEventListener(g, St),
                  (T.event.triggered = void 0),
                  l && (i[d] = l))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(i, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  r = J.access(i, t);
                r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  r = J.access(i, t) - 1;
                r
                  ? J.access(i, t, r)
                  : (i.removeEventListener(e, n, !0), J.remove(i, t));
              },
            };
          });
      var Ct = n.location,
        kt = Date.now(),
        Pt = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var Mt = /\[\]$/,
        Lt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
      function zt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          T.each(t, function (t, r) {
            n || Mt.test(e)
              ? i(e, r)
              : zt(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== E(t)) i(e, t);
        else for (r in t) zt(e + "[" + r + "]", t[r], n, i);
      }
      (T.param = function (e, t) {
        var n,
          i = [],
          r = function (e, t) {
            var n = y(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) zt(n, e[n], t, r);
        return i.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Dt.test(this.nodeName) &&
                  !At.test(e) &&
                  (this.checked || !ve.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(Lt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Lt, "\r\n") };
              })
              .get();
          },
        });
      var Nt = /%20/g,
        It = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ht = {},
        qt = {},
        Bt = "*/".concat("*"),
        Ft = s.createElement("a");
      function Gt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            a = t.toLowerCase().match(j) || [];
          if (y(n))
            for (; (i = a[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Xt(e, t, n, i) {
        var r = {},
          a = e === qt;
        function s(o) {
          var l;
          return (
            (r[o] = !0),
            T.each(e[o] || [], function (e, o) {
              var u = o(t, n, i);
              return "string" != typeof u || a || r[u]
                ? a
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!r["*"] && s("*"));
      }
      function Wt(e, t) {
        var n,
          i,
          r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e;
      }
      (Ft.href = Ct.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Ct.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Bt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
          },
          ajaxPrefilter: Gt(Ht),
          ajaxTransport: Gt(qt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              r,
              a,
              o,
              l,
              u,
              d,
              c,
              p,
              f,
              h = T.ajaxSetup({}, t),
              v = h.context || h,
              g = h.context && (v.nodeType || v.jquery) ? T(v) : T.event,
              m = T.Deferred(),
              y = T.Callbacks("once memory"),
              b = h.statusCode || {},
              w = {},
              x = {},
              E = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (d) {
                    if (!o)
                      for (o = {}; (t = $t.exec(a)); )
                        o[t[1].toLowerCase() + " "] = (
                          o[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = o[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return d ? a : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == d &&
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == d && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (d) S.always(e[S.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || E;
                  return i && i.abort(t), C(0, t), this;
                },
              };
            if (
              (m.promise(S),
              (h.url = ((e || h.url || Ct.href) + "").replace(
                jt,
                Ct.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(j) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              u = s.createElement("a");
              try {
                (u.href = h.url),
                  (u.href = u.href),
                  (h.crossDomain =
                    Ft.protocol + "//" + Ft.host != u.protocol + "//" + u.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = T.param(h.data, h.traditional)),
              Xt(Ht, h, t, S),
              d)
            )
              return S;
            for (p in ((c = T.event && h.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Rt.test(h.type)),
            (r = h.url.replace(It, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Nt, "+"))
              : ((f = h.url.slice(r.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((r += (Pt.test(r) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((r = r.replace(Ot, "$1")),
                  (f = (Pt.test(r) ? "&" : "?") + "_=" + kt++ + f)),
                (h.url = r + f)),
            h.ifModified &&
              (T.lastModified[r] &&
                S.setRequestHeader("If-Modified-Since", T.lastModified[r]),
              T.etag[r] && S.setRequestHeader("If-None-Match", T.etag[r])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(v, S, h) || d))
              return S.abort();
            if (
              ((E = "abort"),
              y.add(h.complete),
              S.done(h.success),
              S.fail(h.error),
              (i = Xt(qt, h, t, S)))
            ) {
              if (((S.readyState = 1), c && g.trigger("ajaxSend", [S, h]), d))
                return S;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function () {
                  S.abort("timeout");
                }, h.timeout));
              try {
                (d = !1), i.send(w, C);
              } catch (e) {
                if (d) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(e, t, s, o) {
              var u,
                p,
                f,
                w,
                x,
                E = t;
              d ||
                ((d = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (a = o || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (w = (function (e, t, n) {
                    for (
                      var i, r, a, s, o = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in o)
                        if (o[r] && o[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) a = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                          a = r;
                          break;
                        }
                        s || (s = r);
                      }
                      a = a || s;
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a];
                  })(h, S, s)),
                (w = (function (e, t, n, i) {
                  var r,
                    a,
                    s,
                    o,
                    l,
                    u = {},
                    d = e.dataTypes.slice();
                  if (d[1])
                    for (s in e.converters)
                      u[s.toLowerCase()] = e.converters[s];
                  for (a = d.shift(); a; )
                    if (
                      (e.responseFields[a] && (n[e.responseFields[a]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = a),
                      (a = d.shift()))
                    )
                      if ("*" === a) a = l;
                      else if ("*" !== l && l !== a) {
                        if (!(s = u[l + " " + a] || u["* " + a]))
                          for (r in u)
                            if (
                              (o = r.split(" "))[1] === a &&
                              (s = u[l + " " + o[0]] || u["* " + o[0]])
                            ) {
                              !0 === s
                                ? (s = u[r])
                                : !0 !== u[r] && ((a = o[0]), d.unshift(o[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + a,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, w, S, u)),
                u
                  ? (h.ifModified &&
                      ((x = S.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[r] = x),
                      (x = S.getResponseHeader("etag")) && (T.etag[r] = x)),
                    204 === e || "HEAD" === h.type
                      ? (E = "nocontent")
                      : 304 === e
                      ? (E = "notmodified")
                      : ((E = w.state), (p = w.data), (u = !(f = w.error))))
                  : ((f = E), (!e && E) || ((E = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || E) + ""),
                u ? m.resolveWith(v, [p, E, S]) : m.rejectWith(v, [S, E, f]),
                S.statusCode(b),
                (b = void 0),
                c &&
                  g.trigger(u ? "ajaxSuccess" : "ajaxError", [S, h, u ? p : f]),
                y.fireWith(v, [S, E]),
                c &&
                  (g.trigger("ajaxComplete", [S, h]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, i, r) {
            return (
              y(n) && ((r = r || i), (i = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (T._evalUrl = function (e, t) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return y(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = y(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Vt = { 0: 200, 1223: 204 },
        Yt = T.ajaxSettings.xhr();
      (m.cors = !!Yt && "withCredentials" in Yt),
        (m.ajax = Yt = !!Yt),
        T.ajaxTransport(function (e) {
          var t, i;
          if (m.cors || (Yt && !e.crossDomain))
            return {
              send: function (r, a) {
                var s,
                  o = e.xhr();
                if (
                  (o.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) o[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  o.setRequestHeader(s, r[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                      "abort" === e
                        ? o.abort()
                        : "error" === e
                        ? "number" != typeof o.status
                          ? a(0, "error")
                          : a(o.status, o.statusText)
                        : a(
                            Vt[o.status] || o.status,
                            o.statusText,
                            "text" !== (o.responseType || "text") ||
                              "string" != typeof o.responseText
                              ? { binary: o.response }
                              : { text: o.responseText },
                            o.getAllResponseHeaders()
                          ));
                  };
                }),
                  (o.onload = t()),
                  (i = o.onerror = o.ontimeout = t("error")),
                  void 0 !== o.onabort
                    ? (o.onabort = i)
                    : (o.onreadystatechange = function () {
                        4 === o.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  o.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, r) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && r("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  s.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var _t,
        Ut = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Ut.pop() || T.expando + "_" + kt++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
            a,
            s,
            o =
              !1 !== e.jsonp &&
              (Kt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Kt.test(e.data) &&
                  "data");
          if (o || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = y(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              o
                ? (e[o] = e[o].replace(Kt, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return s || T.error(r + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (a = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === a ? T(n).removeProp(r) : (n[r] = a),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(r)),
                  s && y(a) && a(s[0]),
                  (s = a = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((_t = s.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === _t.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((i = (t = s.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = s.location.href),
                    t.head.appendChild(i))
                  : (t = s)),
              (a = !n && []),
              (r = D.exec(e))
                ? [t.createElement(r[1])]
                : ((r = Se([e], t, a)),
                  a && a.length && T(a).remove(),
                  T.merge([], r.childNodes)));
          var i, r, a;
        }),
        (T.fn.load = function (e, t, n) {
          var i,
            r,
            a,
            s = this,
            o = e.indexOf(" ");
          return (
            o > -1 && ((i = bt(e.slice(o))), (e = e.slice(0, o))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            s.length > 0 &&
              T.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (a = arguments),
                    s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, a || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var i,
              r,
              a,
              s,
              o,
              l,
              u = T.css(e, "position"),
              d = T(e),
              c = {};
            "static" === u && (e.style.position = "relative"),
              (o = d.offset()),
              (a = T.css(e, "top")),
              (l = T.css(e, "left")),
              ("absolute" === u || "fixed" === u) &&
              (a + l).indexOf("auto") > -1
                ? ((s = (i = d.position()).top), (r = i.left))
                : ((s = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, T.extend({}, o))),
              null != t.top && (c.top = t.top - o.top + s),
              null != t.left && (c.left = t.left - o.left + r),
              "using" in t ? t.using.call(e, c) : d.css(c);
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === T.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (r.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - T.css(i, "marginTop", !0),
                left: t.left - r.left - T.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || se;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (i) {
              return W(
                this,
                function (e, i, r) {
                  var a;
                  if (
                    (b(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView),
                    void 0 === r)
                  )
                    return a ? a[t] : e[i];
                  a
                    ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Ye(m.pixelPosition, function (e, n) {
            if (n)
              return (n = Ve(e, t)), Ge.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              T.fn[i] = function (r, a) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  o = n || (!0 === r || !0 === a ? "margin" : "border");
                return W(
                  this,
                  function (t, n, r) {
                    var a;
                    return b(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((a = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          a["scroll" + e],
                          t.body["offset" + e],
                          a["offset" + e],
                          a["client" + e]
                        ))
                      : void 0 === r
                      ? T.css(t, n, o)
                      : T.style(t, n, r, o);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        T.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (T.proxy = function (e, t) {
          var n, i, r;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (i = l.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, i.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || T.guid++),
              r
            );
        }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = A),
        (T.isFunction = y),
        (T.isWindow = b),
        (T.camelCase = U),
        (T.type = E),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (i = function () {
            return T;
          }.apply(t, [])) || (e.exports = i);
      var Qt = n.jQuery,
        Jt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Jt), e && n.jQuery === T && (n.jQuery = Qt), T
          );
        }),
        r || (n.jQuery = n.$ = T),
        T
      );
    });
  },
  VyCv: function (e, t, n) {
    e.exports = (function () {
      "use strict";
      var e =
          "undefined" == typeof document
            ? {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                  return null;
                },
                querySelectorAll: function () {
                  return [];
                },
                getElementById: function () {
                  return null;
                },
                createEvent: function () {
                  return { initEvent: function () {} };
                },
                createElement: function () {
                  return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                      return [];
                    },
                  };
                },
                location: { hash: "" },
              }
            : document,
        t =
          "undefined" == typeof window
            ? {
                document: e,
                navigator: { userAgent: "" },
                location: {},
                history: {},
                CustomEvent: function () {
                  return this;
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                  return {
                    getPropertyValue: function () {
                      return "";
                    },
                  };
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {},
              }
            : window,
        n = function (e) {
          for (var t = 0; t < e.length; t += 1) this[t] = e[t];
          return (this.length = e.length), this;
        };
      function i(i, r) {
        var a = [],
          s = 0;
        if (i && !r && i instanceof n) return i;
        if (i)
          if ("string" == typeof i) {
            var o,
              l,
              u = i.trim();
            if (0 <= u.indexOf("<") && 0 <= u.indexOf(">")) {
              var d = "div";
              for (
                0 === u.indexOf("<li") && (d = "ul"),
                  0 === u.indexOf("<tr") && (d = "tbody"),
                  (0 !== u.indexOf("<td") && 0 !== u.indexOf("<th")) ||
                    (d = "tr"),
                  0 === u.indexOf("<tbody") && (d = "table"),
                  0 === u.indexOf("<option") && (d = "select"),
                  (l = e.createElement(d)).innerHTML = u,
                  s = 0;
                s < l.childNodes.length;
                s += 1
              )
                a.push(l.childNodes[s]);
            } else
              for (
                o =
                  r || "#" !== i[0] || i.match(/[ .<>:~]/)
                    ? (r || e).querySelectorAll(i.trim())
                    : [e.getElementById(i.trim().split("#")[1])],
                  s = 0;
                s < o.length;
                s += 1
              )
                o[s] && a.push(o[s]);
          } else if (i.nodeType || i === t || i === e) a.push(i);
          else if (0 < i.length && i[0].nodeType)
            for (s = 0; s < i.length; s += 1) a.push(i[s]);
        return new n(a);
      }
      function r(e) {
        for (var t = [], n = 0; n < e.length; n += 1)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      }
      (i.fn = n.prototype), (i.Class = n), (i.Dom7 = n);
      var a = {
        addClass: function (e) {
          if (void 0 === e) return this;
          for (var t = e.split(" "), n = 0; n < t.length; n += 1)
            for (var i = 0; i < this.length; i += 1)
              void 0 !== this[i] &&
                void 0 !== this[i].classList &&
                this[i].classList.add(t[n]);
          return this;
        },
        removeClass: function (e) {
          for (var t = e.split(" "), n = 0; n < t.length; n += 1)
            for (var i = 0; i < this.length; i += 1)
              void 0 !== this[i] &&
                void 0 !== this[i].classList &&
                this[i].classList.remove(t[n]);
          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          for (var t = e.split(" "), n = 0; n < t.length; n += 1)
            for (var i = 0; i < this.length; i += 1)
              void 0 !== this[i] &&
                void 0 !== this[i].classList &&
                this[i].classList.toggle(t[n]);
          return this;
        },
        attr: function (e, t) {
          var n = arguments;
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var i = 0; i < this.length; i += 1)
            if (2 === n.length) this[i].setAttribute(e, t);
            else
              for (var r in e)
                (this[i][r] = e[r]), this[i].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function (e, t) {
          var n;
          if (void 0 !== t) {
            for (var i = 0; i < this.length; i += 1)
              (n = this[i]).dom7ElementDataStorage ||
                (n.dom7ElementDataStorage = {}),
                (n.dom7ElementDataStorage[e] = t);
            return this;
          }
          if ((n = this[0])) {
            if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
              return n.dom7ElementDataStorage[e];
            var r = n.getAttribute("data-" + e);
            return r || void 0;
          }
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) {
            var n = this[t].style;
            (n.webkitTransform = e), (n.transform = e);
          }
          return this;
        },
        transition: function (e) {
          "string" != typeof e && (e += "ms");
          for (var t = 0; t < this.length; t += 1) {
            var n = this[t].style;
            (n.webkitTransitionDuration = e), (n.transitionDuration = e);
          }
          return this;
        },
        on: function () {
          for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            s = t[2],
            o = t[3];
          function l(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), i(t).is(a))) s.apply(t, n);
              else
                for (var r = i(t).parents(), o = 0; o < r.length; o += 1)
                  i(r[o]).is(a) && s.apply(r[o], n);
            }
          }
          function u(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          "function" == typeof t[1] &&
            ((r = (e = t)[0]), (s = e[1]), (o = e[2]), (a = void 0)),
            o || (o = !1);
          for (var d, c = r.split(" "), p = 0; p < this.length; p += 1) {
            var f = this[p];
            if (a)
              for (d = 0; d < c.length; d += 1) {
                var h = c[d];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[h] || (f.dom7LiveListeners[h] = []),
                  f.dom7LiveListeners[h].push({
                    listener: s,
                    proxyListener: l,
                  }),
                  f.addEventListener(h, l, o);
              }
            else
              for (d = 0; d < c.length; d += 1) {
                var v = c[d];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[v] || (f.dom7Listeners[v] = []),
                  f.dom7Listeners[v].push({ listener: s, proxyListener: u }),
                  f.addEventListener(v, u, o);
              }
          }
          return this;
        },
        off: function () {
          for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
          var i = t[0],
            r = t[1],
            a = t[2],
            s = t[3];
          "function" == typeof t[1] &&
            ((i = (e = t)[0]), (a = e[1]), (s = e[2]), (r = void 0)),
            s || (s = !1);
          for (var o = i.split(" "), l = 0; l < o.length; l += 1)
            for (var u = o[l], d = 0; d < this.length; d += 1) {
              var c = this[d],
                p = void 0;
              if (
                (!r && c.dom7Listeners
                  ? (p = c.dom7Listeners[u])
                  : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[u]),
                p && p.length)
              )
                for (var f = p.length - 1; 0 <= f; f -= 1) {
                  var h = p[f];
                  a && h.listener === a
                    ? (c.removeEventListener(u, h.proxyListener, s),
                      p.splice(f, 1))
                    : a &&
                      h.listener &&
                      h.listener.dom7proxy &&
                      h.listener.dom7proxy === a
                    ? (c.removeEventListener(u, h.proxyListener, s),
                      p.splice(f, 1))
                    : a ||
                      (c.removeEventListener(u, h.proxyListener, s),
                      p.splice(f, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (var n = [], i = arguments.length; i--; ) n[i] = arguments[i];
          for (var r = n[0].split(" "), a = n[1], s = 0; s < r.length; s += 1)
            for (var o = r[s], l = 0; l < this.length; l += 1) {
              var u = this[l],
                d = void 0;
              try {
                d = new t.CustomEvent(o, {
                  detail: a,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (n) {
                (d = e.createEvent("Event")).initEvent(o, !0, !0),
                  (d.detail = a);
              }
              (u.dom7EventData = n.filter(function (e, t) {
                return 0 < t;
              })),
                u.dispatchEvent(d),
                (u.dom7EventData = []),
                delete u.dom7EventData;
            }
          return this;
        },
        transitionEnd: function (e) {
          var t,
            n = ["webkitTransitionEnd", "transitionend"],
            i = this;
          function r(a) {
            if (a.target === this)
              for (e.call(this, a), t = 0; t < n.length; t += 1) i.off(n[t], r);
          }
          if (e) for (t = 0; t < n.length; t += 1) i.on(n[t], r);
          return this;
        },
        outerWidth: function (e) {
          if (0 < this.length) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (0 < this.length) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function () {
          if (0 < this.length) {
            var n = this[0],
              i = n.getBoundingClientRect(),
              r = e.body,
              a = n.clientTop || r.clientTop || 0,
              s = n.clientLeft || r.clientLeft || 0,
              o = n === t ? t.scrollY : n.scrollTop,
              l = n === t ? t.scrollX : n.scrollLeft;
            return { top: i.top + o - a, left: i.left + l - s };
          }
          return null;
        },
        css: function (e, n) {
          var i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (var r in e) this[i].style[r] = e[r];
              return this;
            }
            if (this[0])
              return t.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = n;
            return this;
          }
          return this;
        },
        each: function (e) {
          if (!e) return this;
          for (var t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (r) {
          var a,
            s,
            o = this[0];
          if (!o || void 0 === r) return !1;
          if ("string" == typeof r) {
            if (o.matches) return o.matches(r);
            if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
            if (o.msMatchesSelector) return o.msMatchesSelector(r);
            for (a = i(r), s = 0; s < a.length; s += 1)
              if (a[s] === o) return !0;
            return !1;
          }
          if (r === e) return o === e;
          if (r === t) return o === t;
          if (r.nodeType || r instanceof n) {
            for (a = r.nodeType ? [r] : r, s = 0; s < a.length; s += 1)
              if (a[s] === o) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t,
            i = this.length;
          return new n(
            i - 1 < e
              ? []
              : e < 0
              ? (t = i + e) < 0
                ? []
                : [this[t]]
              : [this[e]]
          );
        },
        append: function () {
          for (var t, i = [], r = arguments.length; r--; ) i[r] = arguments[r];
          for (var a = 0; a < i.length; a += 1) {
            t = i[a];
            for (var s = 0; s < this.length; s += 1)
              if ("string" == typeof t) {
                var o = e.createElement("div");
                for (o.innerHTML = t; o.firstChild; )
                  this[s].appendChild(o.firstChild);
              } else if (t instanceof n)
                for (var l = 0; l < t.length; l += 1) this[s].appendChild(t[l]);
              else this[s].appendChild(t);
          }
          return this;
        },
        prepend: function (t) {
          var i, r;
          for (i = 0; i < this.length; i += 1)
            if ("string" == typeof t) {
              var a = e.createElement("div");
              for (a.innerHTML = t, r = a.childNodes.length - 1; 0 <= r; r -= 1)
                this[i].insertBefore(a.childNodes[r], this[i].childNodes[0]);
            } else if (t instanceof n)
              for (r = 0; r < t.length; r += 1)
                this[i].insertBefore(t[r], this[i].childNodes[0]);
            else this[i].insertBefore(t, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return 0 < this.length
            ? e
              ? this[0].nextElementSibling &&
                i(this[0].nextElementSibling).is(e)
                ? new n([this[0].nextElementSibling])
                : new n([])
              : this[0].nextElementSibling
              ? new n([this[0].nextElementSibling])
              : new n([])
            : new n([]);
        },
        nextAll: function (e) {
          var t = [],
            r = this[0];
          if (!r) return new n([]);
          for (; r.nextElementSibling; ) {
            var a = r.nextElementSibling;
            e ? i(a).is(e) && t.push(a) : t.push(a), (r = a);
          }
          return new n(t);
        },
        prev: function (e) {
          if (0 < this.length) {
            var t = this[0];
            return e
              ? t.previousElementSibling && i(t.previousElementSibling).is(e)
                ? new n([t.previousElementSibling])
                : new n([])
              : t.previousElementSibling
              ? new n([t.previousElementSibling])
              : new n([]);
          }
          return new n([]);
        },
        prevAll: function (e) {
          var t = [],
            r = this[0];
          if (!r) return new n([]);
          for (; r.previousElementSibling; ) {
            var a = r.previousElementSibling;
            e ? i(a).is(e) && t.push(a) : t.push(a), (r = a);
          }
          return new n(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? i(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return i(r(t));
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var a = this[n].parentNode; a; )
              e ? i(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
          return i(r(t));
        },
        closest: function (e) {
          var t = this;
          return void 0 === e
            ? new n([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (
              var r = this[i].querySelectorAll(e), a = 0;
              a < r.length;
              a += 1
            )
              t.push(r[a]);
          return new n(t);
        },
        children: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var s = this[a].childNodes, o = 0; o < s.length; o += 1)
              e
                ? 1 === s[o].nodeType && i(s[o]).is(e) && t.push(s[o])
                : 1 === s[o].nodeType && t.push(s[o]);
          return new n(r(t));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n, r;
          for (n = 0; n < e.length; n += 1) {
            var a = i(e[n]);
            for (r = 0; r < a.length; r += 1)
              (this[this.length] = a[r]), (this.length += 1);
          }
          return this;
        },
        styles: function () {
          return this[0] ? t.getComputedStyle(this[0], null) : {};
        },
      };
      Object.keys(a).forEach(function (e) {
        i.fn[e] = a[e];
      });
      var s,
        o,
        l,
        u,
        d = {
          deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
              try {
                t[e] = null;
              } catch (e) {}
              try {
                delete t[e];
              } catch (e) {}
            });
          },
          nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
          },
          now: function () {
            return Date.now();
          },
          getTranslate: function (e, n) {
            var i, r, a;
            void 0 === n && (n = "x");
            var s = t.getComputedStyle(e, null);
            return (
              t.WebKitCSSMatrix
                ? (6 <
                    (r = s.transform || s.webkitTransform).split(",").length &&
                    (r = r
                      .split(", ")
                      .map(function (e) {
                        return e.replace(",", ".");
                      })
                      .join(", ")),
                  (a = new t.WebKitCSSMatrix("none" === r ? "" : r)))
                : (i = (a =
                    s.MozTransform ||
                    s.OTransform ||
                    s.MsTransform ||
                    s.msTransform ||
                    s.transform ||
                    s
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,"))
                    .toString()
                    .split(",")),
              "x" === n &&
                (r = t.WebKitCSSMatrix
                  ? a.m41
                  : 16 === i.length
                  ? parseFloat(i[12])
                  : parseFloat(i[4])),
              "y" === n &&
                (r = t.WebKitCSSMatrix
                  ? a.m42
                  : 16 === i.length
                  ? parseFloat(i[13])
                  : parseFloat(i[5])),
              r || 0
            );
          },
          parseUrlQuery: function (e) {
            var n,
              i,
              r,
              a,
              s = {},
              o = e || t.location.href;
            if ("string" == typeof o && o.length)
              for (
                a = (i = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "")
                  .split("&")
                  .filter(function (e) {
                    return "" !== e;
                  })).length,
                  n = 0;
                n < a;
                n += 1
              )
                (r = i[n].replace(/#\S+/g, "").split("=")),
                  (s[decodeURIComponent(r[0])] =
                    void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "");
            return s;
          },
          isObject: function (e) {
            return (
              "object" == typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object
            );
          },
          extend: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
              var r = e[i];
              if (null != r)
                for (
                  var a = Object.keys(Object(r)), s = 0, o = a.length;
                  s < o;
                  s += 1
                ) {
                  var l = a[s],
                    u = Object.getOwnPropertyDescriptor(r, l);
                  void 0 !== u &&
                    u.enumerable &&
                    (d.isObject(n[l]) && d.isObject(r[l])
                      ? d.extend(n[l], r[l])
                      : !d.isObject(n[l]) && d.isObject(r[l])
                      ? ((n[l] = {}), d.extend(n[l], r[l]))
                      : (n[l] = r[l]));
                }
            }
            return n;
          },
        },
        c =
          ((l = e.createElement("div")),
          {
            touch:
              (t.Modernizr && !0 === t.Modernizr.touch) ||
              !!(
                0 < t.navigator.maxTouchPoints ||
                "ontouchstart" in t ||
                (t.DocumentTouch && e instanceof t.DocumentTouch)
              ),
            pointerEvents: !!(
              t.navigator.pointerEnabled ||
              t.PointerEvent ||
              ("maxTouchPoints" in t.navigator &&
                0 < t.navigator.maxTouchPoints)
            ),
            prefixedPointerEvents: !!t.navigator.msPointerEnabled,
            transition:
              ((o = l.style),
              "transition" in o ||
                "webkitTransition" in o ||
                "MozTransition" in o),
            transforms3d:
              (t.Modernizr && !0 === t.Modernizr.csstransforms3d) ||
              ((s = l.style),
              "webkitPerspective" in s ||
                "MozPerspective" in s ||
                "OPerspective" in s ||
                "MsPerspective" in s ||
                "perspective" in s),
            flexbox: (function () {
              for (
                var e = l.style,
                  t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                  n = 0;
                n < t.length;
                n += 1
              )
                if (t[n] in e) return !0;
              return !1;
            })(),
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: (function () {
              var e = !1;
              try {
                var n = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                t.addEventListener("testPassiveListener", null, n);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in t,
          }),
        p = {
          isIE:
            !!t.navigator.userAgent.match(/Trident/g) ||
            !!t.navigator.userAgent.match(/MSIE/g),
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari:
            ((u = t.navigator.userAgent.toLowerCase()),
            0 <= u.indexOf("safari") &&
              u.indexOf("chrome") < 0 &&
              u.indexOf("android") < 0),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            t.navigator.userAgent
          ),
        },
        f = function (e) {
          void 0 === e && (e = {});
          var t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach(function (e) {
                t.on(e, t.params.on[e]);
              });
        },
        h = { components: { configurable: !0 } };
      (f.prototype.on = function (e, t, n) {
        var i = this;
        if ("function" != typeof t) return i;
        var r = n ? "unshift" : "push";
        return (
          e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][r](t);
          }),
          i
        );
      }),
        (f.prototype.once = function (e, t, n) {
          var i = this;
          if ("function" != typeof t) return i;
          function r() {
            for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
            t.apply(i, n), i.off(e, r), r.f7proxy && delete r.f7proxy;
          }
          return (r.f7proxy = t), i.on(e, r, n);
        }),
        (f.prototype.off = function (e, t) {
          var n = this;
          return (
            n.eventsListeners &&
              e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].length &&
                    n.eventsListeners[e].forEach(function (i, r) {
                      (i === t || (i.f7proxy && i.f7proxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
            n
          );
        }),
        (f.prototype.emit = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            i,
            r,
            a = this;
          return (
            a.eventsListeners &&
              ("string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (i = e.slice(1, e.length)), (r = a))
                : ((n = e[0].events), (i = e[0].data), (r = e[0].context || a)),
              (Array.isArray(n) ? n : n.split(" ")).forEach(function (e) {
                if (a.eventsListeners && a.eventsListeners[e]) {
                  var t = [];
                  a.eventsListeners[e].forEach(function (e) {
                    t.push(e);
                  }),
                    t.forEach(function (e) {
                      e.apply(r, i);
                    });
                }
              })),
            a
          );
        }),
        (f.prototype.useModulesParams = function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (n) {
              var i = t.modules[n];
              i.params && d.extend(e, i.params);
            });
        }),
        (f.prototype.useModules = function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (n) {
              var i = t.modules[n],
                r = e[n] || {};
              i.instance &&
                Object.keys(i.instance).forEach(function (e) {
                  var n = i.instance[e];
                  t[e] = "function" == typeof n ? n.bind(t) : n;
                }),
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach(function (e) {
                    t.on(e, i.on[e]);
                  }),
                i.create && i.create.bind(t)(r);
            });
        }),
        (h.components.set = function (e) {
          this.use && this.use(e);
        }),
        (f.installModule = function (e) {
          for (var t = [], n = arguments.length - 1; 0 < n--; )
            t[n] = arguments[n + 1];
          var i = this;
          i.prototype.modules || (i.prototype.modules = {});
          var r =
            e.name || Object.keys(i.prototype.modules).length + "_" + d.now();
          return (
            (i.prototype.modules[r] = e).proto &&
              Object.keys(e.proto).forEach(function (t) {
                i.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach(function (t) {
                i[t] = e.static[t];
              }),
            e.install && e.install.apply(i, t),
            i
          );
        }),
        (f.use = function (e) {
          for (var t = [], n = arguments.length - 1; 0 < n--; )
            t[n] = arguments[n + 1];
          var i = this;
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return i.installModule(e);
              }),
              i)
            : i.installModule.apply(i, [e].concat(t));
        }),
        Object.defineProperties(f, h);
      var v = {
          updateSize: function () {
            var e,
              t,
              n = this,
              i = n.$el;
            (e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth),
              (t =
                void 0 !== n.params.height
                  ? n.params.height
                  : i[0].clientHeight),
              (0 === e && n.isHorizontal()) ||
                (0 === t && n.isVertical()) ||
                ((e =
                  e -
                  parseInt(i.css("padding-left"), 10) -
                  parseInt(i.css("padding-right"), 10)),
                (t =
                  t -
                  parseInt(i.css("padding-top"), 10) -
                  parseInt(i.css("padding-bottom"), 10)),
                d.extend(n, {
                  width: e,
                  height: t,
                  size: n.isHorizontal() ? e : t,
                }));
          },
          updateSlides: function () {
            var e = this,
              n = e.params,
              i = e.$wrapperEl,
              r = e.size,
              a = e.rtlTranslate,
              s = e.wrongRTL,
              o = e.virtual && n.virtual.enabled,
              l = o ? e.virtual.slides.length : e.slides.length,
              u = i.children("." + e.params.slideClass),
              p = o ? e.virtual.slides.length : u.length,
              f = [],
              h = [],
              v = [],
              g = n.slidesOffsetBefore;
            "function" == typeof g && (g = n.slidesOffsetBefore.call(e));
            var m = n.slidesOffsetAfter;
            "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
            var y = e.snapGrid.length,
              b = e.snapGrid.length,
              w = n.spaceBetween,
              x = -g,
              E = 0,
              T = 0;
            if (void 0 !== r) {
              var S, C;
              "string" == typeof w &&
                0 <= w.indexOf("%") &&
                (w = (parseFloat(w.replace("%", "")) / 100) * r),
                (e.virtualSize = -w),
                a
                  ? u.css({ marginLeft: "", marginTop: "" })
                  : u.css({ marginRight: "", marginBottom: "" }),
                1 < n.slidesPerColumn &&
                  ((S =
                    Math.floor(p / n.slidesPerColumn) ===
                    p / e.params.slidesPerColumn
                      ? p
                      : Math.ceil(p / n.slidesPerColumn) * n.slidesPerColumn),
                  "auto" !== n.slidesPerView &&
                    "row" === n.slidesPerColumnFill &&
                    (S = Math.max(S, n.slidesPerView * n.slidesPerColumn)));
              for (
                var k,
                  P = n.slidesPerColumn,
                  M = S / P,
                  L = Math.floor(p / n.slidesPerColumn),
                  A = 0;
                A < p;
                A += 1
              ) {
                C = 0;
                var D = u.eq(A);
                if (1 < n.slidesPerColumn) {
                  var z = void 0,
                    N = void 0,
                    I = void 0;
                  "column" === n.slidesPerColumnFill
                    ? ((I = A - (N = Math.floor(A / P)) * P),
                      (L < N || (N === L && I === P - 1)) &&
                        P <= (I += 1) &&
                        ((I = 0), (N += 1)),
                      (z = N + (I * S) / P),
                      D.css({
                        "-webkit-box-ordinal-group": z,
                        "-moz-box-ordinal-group": z,
                        "-ms-flex-order": z,
                        "-webkit-order": z,
                        order: z,
                      }))
                    : (N = A - (I = Math.floor(A / M)) * M),
                    D.css(
                      "margin-" + (e.isHorizontal() ? "top" : "left"),
                      0 !== I && n.spaceBetween && n.spaceBetween + "px"
                    )
                      .attr("data-swiper-column", N)
                      .attr("data-swiper-row", I);
                }
                if ("none" !== D.css("display")) {
                  if ("auto" === n.slidesPerView) {
                    var O = t.getComputedStyle(D[0], null),
                      $ = D[0].style.transform,
                      R = D[0].style.webkitTransform;
                    if (
                      ($ && (D[0].style.transform = "none"),
                      R && (D[0].style.webkitTransform = "none"),
                      n.roundLengths)
                    )
                      C = e.isHorizontal()
                        ? D.outerWidth(!0)
                        : D.outerHeight(!0);
                    else if (e.isHorizontal()) {
                      var j = parseFloat(O.getPropertyValue("width")),
                        H = parseFloat(O.getPropertyValue("padding-left")),
                        q = parseFloat(O.getPropertyValue("padding-right")),
                        B = parseFloat(O.getPropertyValue("margin-left")),
                        F = parseFloat(O.getPropertyValue("margin-right")),
                        G = O.getPropertyValue("box-sizing");
                      C =
                        G && "border-box" === G ? j + B + F : j + H + q + B + F;
                    } else {
                      var X = parseFloat(O.getPropertyValue("height")),
                        W = parseFloat(O.getPropertyValue("padding-top")),
                        V = parseFloat(O.getPropertyValue("padding-bottom")),
                        Y = parseFloat(O.getPropertyValue("margin-top")),
                        _ = parseFloat(O.getPropertyValue("margin-bottom")),
                        U = O.getPropertyValue("box-sizing");
                      C =
                        U && "border-box" === U ? X + Y + _ : X + W + V + Y + _;
                    }
                    $ && (D[0].style.transform = $),
                      R && (D[0].style.webkitTransform = R),
                      n.roundLengths && (C = Math.floor(C));
                  } else
                    (C = (r - (n.slidesPerView - 1) * w) / n.slidesPerView),
                      n.roundLengths && (C = Math.floor(C)),
                      u[A] &&
                        (e.isHorizontal()
                          ? (u[A].style.width = C + "px")
                          : (u[A].style.height = C + "px"));
                  u[A] && (u[A].swiperSlideSize = C),
                    v.push(C),
                    n.centeredSlides
                      ? ((x = x + C / 2 + E / 2 + w),
                        0 === E && 0 !== A && (x = x - r / 2 - w),
                        0 === A && (x = x - r / 2 - w),
                        Math.abs(x) < 0.001 && (x = 0),
                        n.roundLengths && (x = Math.floor(x)),
                        T % n.slidesPerGroup == 0 && f.push(x),
                        h.push(x))
                      : (n.roundLengths && (x = Math.floor(x)),
                        T % n.slidesPerGroup == 0 && f.push(x),
                        h.push(x),
                        (x = x + C + w)),
                    (e.virtualSize += C + w),
                    (E = C),
                    (T += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, r) + m),
                a &&
                  s &&
                  ("slide" === n.effect || "coverflow" === n.effect) &&
                  i.css({ width: e.virtualSize + n.spaceBetween + "px" }),
                (c.flexbox && !n.setWrapperSize) ||
                  (e.isHorizontal()
                    ? i.css({ width: e.virtualSize + n.spaceBetween + "px" })
                    : i.css({ height: e.virtualSize + n.spaceBetween + "px" })),
                1 < n.slidesPerColumn &&
                  ((e.virtualSize = (C + n.spaceBetween) * S),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / n.slidesPerColumn) -
                    n.spaceBetween),
                  e.isHorizontal()
                    ? i.css({ width: e.virtualSize + n.spaceBetween + "px" })
                    : i.css({ height: e.virtualSize + n.spaceBetween + "px" }),
                  n.centeredSlides))
              ) {
                k = [];
                for (var K = 0; K < f.length; K += 1) {
                  var Q = f[K];
                  n.roundLengths && (Q = Math.floor(Q)),
                    f[K] < e.virtualSize + f[0] && k.push(Q);
                }
                f = k;
              }
              if (!n.centeredSlides) {
                k = [];
                for (var J = 0; J < f.length; J += 1) {
                  var Z = f[J];
                  n.roundLengths && (Z = Math.floor(Z)),
                    f[J] <= e.virtualSize - r && k.push(Z);
                }
                (f = k),
                  1 <
                    Math.floor(e.virtualSize - r) -
                      Math.floor(f[f.length - 1]) && f.push(e.virtualSize - r);
              }
              if (
                (0 === f.length && (f = [0]),
                0 !== n.spaceBetween &&
                  (e.isHorizontal()
                    ? a
                      ? u.css({ marginLeft: w + "px" })
                      : u.css({ marginRight: w + "px" })
                    : u.css({ marginBottom: w + "px" })),
                n.centerInsufficientSlides)
              ) {
                var ee = 0;
                if (
                  (v.forEach(function (e) {
                    ee += e + (n.spaceBetween ? n.spaceBetween : 0);
                  }),
                  (ee -= n.spaceBetween) < r)
                ) {
                  var te = (r - ee) / 2;
                  f.forEach(function (e, t) {
                    f[t] = e - te;
                  }),
                    h.forEach(function (e, t) {
                      h[t] = e + te;
                    });
                }
              }
              d.extend(e, {
                slides: u,
                snapGrid: f,
                slidesGrid: h,
                slidesSizesGrid: v,
              }),
                p !== l && e.emit("slidesLengthChange"),
                f.length !== y &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                h.length !== b && e.emit("slidesGridLengthChange"),
                (n.watchSlidesProgress || n.watchSlidesVisibility) &&
                  e.updateSlidesOffset();
            }
          },
          updateAutoHeight: function (e) {
            var t,
              n = this,
              i = [],
              r = 0;
            if (
              ("number" == typeof e
                ? n.setTransition(e)
                : !0 === e && n.setTransition(n.params.speed),
              "auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
            )
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var a = n.activeIndex + t;
                if (a > n.slides.length) break;
                i.push(n.slides.eq(a)[0]);
              }
            else i.push(n.slides.eq(n.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
              if (void 0 !== i[t]) {
                var s = i[t].offsetHeight;
                r = r < s ? s : r;
              }
            r && n.$wrapperEl.css("height", r + "px");
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                ? e[t].offsetLeft
                : e[t].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
              n = t.params,
              r = t.slides,
              a = t.rtlTranslate;
            if (0 !== r.length) {
              void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
              var s = -e;
              a && (s = e),
                r.removeClass(n.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (var o = 0; o < r.length; o += 1) {
                var l = r[o],
                  u =
                    (s +
                      (n.centeredSlides ? t.minTranslate() : 0) -
                      l.swiperSlideOffset) /
                    (l.swiperSlideSize + n.spaceBetween);
                if (n.watchSlidesVisibility) {
                  var d = -(s - l.swiperSlideOffset),
                    c = d + t.slidesSizesGrid[o];
                  ((0 <= d && d < t.size) ||
                    (0 < c && c <= t.size) ||
                    (d <= 0 && c >= t.size)) &&
                    (t.visibleSlides.push(l),
                    t.visibleSlidesIndexes.push(o),
                    r.eq(o).addClass(n.slideVisibleClass));
                }
                l.progress = a ? -u : u;
              }
              t.visibleSlides = i(t.visibleSlides);
            }
          },
          updateProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
              n = t.params,
              i = t.maxTranslate() - t.minTranslate(),
              r = t.progress,
              a = t.isBeginning,
              s = t.isEnd,
              o = a,
              l = s;
            0 === i
              ? (s = a = !(r = 0))
              : ((a = (r = (e - t.minTranslate()) / i) <= 0), (s = 1 <= r)),
              d.extend(t, { progress: r, isBeginning: a, isEnd: s }),
              (n.watchSlidesProgress || n.watchSlidesVisibility) &&
                t.updateSlidesProgress(e),
              a && !o && t.emit("reachBeginning toEdge"),
              s && !l && t.emit("reachEnd toEdge"),
              ((o && !a) || (l && !s)) && t.emit("fromEdge"),
              t.emit("progress", r);
          },
          updateSlidesClasses: function () {
            var e,
              t = this,
              n = t.slides,
              i = t.params,
              r = t.$wrapperEl,
              a = t.activeIndex,
              s = t.realIndex,
              o = t.virtual && i.virtual.enabled;
            n.removeClass(
              i.slideActiveClass +
                " " +
                i.slideNextClass +
                " " +
                i.slidePrevClass +
                " " +
                i.slideDuplicateActiveClass +
                " " +
                i.slideDuplicateNextClass +
                " " +
                i.slideDuplicatePrevClass
            ),
              (e = o
                ? t.$wrapperEl.find(
                    "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
                  )
                : n.eq(a)).addClass(i.slideActiveClass),
              i.loop &&
                (e.hasClass(i.slideDuplicateClass)
                  ? r
                      .children(
                        "." +
                          i.slideClass +
                          ":not(." +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          s +
                          '"]'
                      )
                      .addClass(i.slideDuplicateActiveClass)
                  : r
                      .children(
                        "." +
                          i.slideClass +
                          "." +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          s +
                          '"]'
                      )
                      .addClass(i.slideDuplicateActiveClass));
            var l = e
              .nextAll("." + i.slideClass)
              .eq(0)
              .addClass(i.slideNextClass);
            i.loop &&
              0 === l.length &&
              (l = n.eq(0)).addClass(i.slideNextClass);
            var u = e
              .prevAll("." + i.slideClass)
              .eq(0)
              .addClass(i.slidePrevClass);
            i.loop &&
              0 === u.length &&
              (u = n.eq(-1)).addClass(i.slidePrevClass),
              i.loop &&
                (l.hasClass(i.slideDuplicateClass)
                  ? r
                      .children(
                        "." +
                          i.slideClass +
                          ":not(." +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicateNextClass)
                  : r
                      .children(
                        "." +
                          i.slideClass +
                          "." +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicateNextClass),
                u.hasClass(i.slideDuplicateClass)
                  ? r
                      .children(
                        "." +
                          i.slideClass +
                          ":not(." +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          u.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicatePrevClass)
                  : r
                      .children(
                        "." +
                          i.slideClass +
                          "." +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          u.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicatePrevClass));
          },
          updateActiveIndex: function (e) {
            var t,
              n = this,
              i = n.rtlTranslate ? n.translate : -n.translate,
              r = n.slidesGrid,
              a = n.snapGrid,
              s = n.params,
              o = n.activeIndex,
              l = n.realIndex,
              u = n.snapIndex,
              c = e;
            if (void 0 === c) {
              for (var p = 0; p < r.length; p += 1)
                void 0 !== r[p + 1]
                  ? i >= r[p] && i < r[p + 1] - (r[p + 1] - r[p]) / 2
                    ? (c = p)
                    : i >= r[p] && i < r[p + 1] && (c = p + 1)
                  : i >= r[p] && (c = p);
              s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (
              ((t =
                0 <= a.indexOf(i)
                  ? a.indexOf(i)
                  : Math.floor(c / s.slidesPerGroup)) >= a.length &&
                (t = a.length - 1),
              c !== o)
            ) {
              var f = parseInt(
                n.slides.eq(c).attr("data-swiper-slide-index") || c,
                10
              );
              d.extend(n, {
                snapIndex: t,
                realIndex: f,
                previousIndex: o,
                activeIndex: c,
              }),
                n.emit("activeIndexChange"),
                n.emit("snapIndexChange"),
                l !== f && n.emit("realIndexChange"),
                n.emit("slideChange");
            } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
          },
          updateClickedSlide: function (e) {
            var t = this,
              n = t.params,
              r = i(e.target).closest("." + n.slideClass)[0],
              a = !1;
            if (r)
              for (var s = 0; s < t.slides.length; s += 1)
                t.slides[s] === r && (a = !0);
            if (!r || !a)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = r),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    i(r).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = i(r).index()),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        g = {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
              n = this.rtlTranslate,
              i = this.translate,
              r = this.$wrapperEl;
            if (t.virtualTranslate) return n ? -i : i;
            var a = d.getTranslate(r[0], e);
            return n && (a = -a), a || 0;
          },
          setTranslate: function (e, t) {
            var n = this,
              i = n.rtlTranslate,
              r = n.params,
              a = n.$wrapperEl,
              s = n.progress,
              o = 0,
              l = 0;
            n.isHorizontal() ? (o = i ? -e : e) : (l = e),
              r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
              r.virtualTranslate ||
                (c.transforms3d
                  ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)")
                  : a.transform("translate(" + o + "px, " + l + "px)")),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? o : l);
            var u = n.maxTranslate() - n.minTranslate();
            (0 === u ? 0 : (e - n.minTranslate()) / u) !== s &&
              n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
        },
        m = {
          slideTo: function (e, t, n, i) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0);
            var r = this,
              a = e;
            a < 0 && (a = 0);
            var s = r.params,
              o = r.snapGrid,
              l = r.slidesGrid,
              u = r.previousIndex,
              d = r.activeIndex,
              p = r.rtlTranslate;
            if (r.animating && s.preventInteractionOnTransition) return !1;
            var f = Math.floor(a / s.slidesPerGroup);
            f >= o.length && (f = o.length - 1),
              (d || s.initialSlide || 0) === (u || 0) &&
                n &&
                r.emit("beforeSlideChangeStart");
            var h,
              v = -o[f];
            if ((r.updateProgress(v), s.normalizeSlideIndex))
              for (var g = 0; g < l.length; g += 1)
                -Math.floor(100 * v) >= Math.floor(100 * l[g]) && (a = g);
            if (r.initialized && a !== d) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (d || 0) !== a
              )
                return !1;
            }
            return (
              (h = d < a ? "next" : a < d ? "prev" : "reset"),
              (p && -v === r.translate) || (!p && v === r.translate)
                ? (r.updateActiveIndex(a),
                  s.autoHeight && r.updateAutoHeight(),
                  r.updateSlidesClasses(),
                  "slide" !== s.effect && r.setTranslate(v),
                  "reset" !== h &&
                    (r.transitionStart(n, h), r.transitionEnd(n, h)),
                  !1)
                : (0 !== t && c.transition
                    ? (r.setTransition(t),
                      r.setTranslate(v),
                      r.updateActiveIndex(a),
                      r.updateSlidesClasses(),
                      r.emit("beforeTransitionStart", t, i),
                      r.transitionStart(n, h),
                      r.animating ||
                        ((r.animating = !0),
                        r.onSlideToWrapperTransitionEnd ||
                          (r.onSlideToWrapperTransitionEnd = function (e) {
                            r &&
                              !r.destroyed &&
                              e.target === this &&
                              (r.$wrapperEl[0].removeEventListener(
                                "transitionend",
                                r.onSlideToWrapperTransitionEnd
                              ),
                              r.$wrapperEl[0].removeEventListener(
                                "webkitTransitionEnd",
                                r.onSlideToWrapperTransitionEnd
                              ),
                              (r.onSlideToWrapperTransitionEnd = null),
                              delete r.onSlideToWrapperTransitionEnd,
                              r.transitionEnd(n, h));
                          }),
                        r.$wrapperEl[0].addEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].addEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        )))
                    : (r.setTransition(0),
                      r.setTranslate(v),
                      r.updateActiveIndex(a),
                      r.updateSlidesClasses(),
                      r.emit("beforeTransitionStart", t, i),
                      r.transitionStart(n, h),
                      r.transitionEnd(n, h)),
                  !0)
            );
          },
          slideToLoop: function (e, t, n, i) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0);
            var r = e;
            return (
              this.params.loop && (r += this.loopedSlides),
              this.slideTo(r, t, n, i)
            );
          },
          slideNext: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              r = i.params,
              a = i.animating;
            return r.loop
              ? !a &&
                  (i.loopFix(),
                  (i._clientLeft = i.$wrapperEl[0].clientLeft),
                  i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n))
              : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n);
          },
          slidePrev: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              r = i.params,
              a = i.animating,
              s = i.snapGrid,
              o = i.slidesGrid,
              l = i.rtlTranslate;
            if (r.loop) {
              if (a) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d,
              c = u(l ? i.translate : -i.translate),
              p = s.map(function (e) {
                return u(e);
              }),
              f =
                (o.map(function (e) {
                  return u(e);
                }),
                s[p.indexOf(c)],
                s[p.indexOf(c) - 1]);
            return (
              void 0 !== f && (d = o.indexOf(f)) < 0 && (d = i.activeIndex - 1),
              i.slideTo(d, e, t, n)
            );
          },
          slideReset: function (e, t, n) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, n)
            );
          },
          slideToClosest: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              r = i.activeIndex,
              a = Math.floor(r / i.params.slidesPerGroup);
            if (a < i.snapGrid.length - 1) {
              var s = i.rtlTranslate ? i.translate : -i.translate,
                o = i.snapGrid[a];
              (i.snapGrid[a + 1] - o) / 2 < s - o &&
                (r = i.params.slidesPerGroup);
            }
            return i.slideTo(r, e, t, n);
          },
          slideToClickedSlide: function () {
            var e,
              t = this,
              n = t.params,
              r = t.$wrapperEl,
              a =
                "auto" === n.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : n.slidesPerView,
              s = t.clickedIndex;
            if (n.loop) {
              if (t.animating) return;
              (e = parseInt(
                i(t.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                n.centeredSlides
                  ? s < t.loopedSlides - a / 2 ||
                    s > t.slides.length - t.loopedSlides + a / 2
                    ? (t.loopFix(),
                      (s = r
                        .children(
                          "." +
                            n.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            n.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      d.nextTick(function () {
                        t.slideTo(s);
                      }))
                    : t.slideTo(s)
                  : s > t.slides.length - a
                  ? (t.loopFix(),
                    (s = r
                      .children(
                        "." +
                          n.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          n.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    d.nextTick(function () {
                      t.slideTo(s);
                    }))
                  : t.slideTo(s);
            } else t.slideTo(s);
          },
        },
        y = {
          loopCreate: function () {
            var t = this,
              n = t.params,
              r = t.$wrapperEl;
            r.children(
              "." + n.slideClass + "." + n.slideDuplicateClass
            ).remove();
            var a = r.children("." + n.slideClass);
            if (n.loopFillGroupWithBlank) {
              var s = n.slidesPerGroup - (a.length % n.slidesPerGroup);
              if (s !== n.slidesPerGroup) {
                for (var o = 0; o < s; o += 1) {
                  var l = i(e.createElement("div")).addClass(
                    n.slideClass + " " + n.slideBlankClass
                  );
                  r.append(l);
                }
                a = r.children("." + n.slideClass);
              }
            }
            "auto" !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = a.length),
              (t.loopedSlides = parseInt(
                n.loopedSlides || n.slidesPerView,
                10
              )),
              (t.loopedSlides += n.loopAdditionalSlides),
              t.loopedSlides > a.length && (t.loopedSlides = a.length);
            var u = [],
              d = [];
            a.each(function (e, n) {
              var r = i(n);
              e < t.loopedSlides && d.push(n),
                e < a.length && e >= a.length - t.loopedSlides && u.push(n),
                r.attr("data-swiper-slide-index", e);
            });
            for (var c = 0; c < d.length; c += 1)
              r.append(i(d[c].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (var p = u.length - 1; 0 <= p; p -= 1)
              r.prepend(i(u[p].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            var e,
              t = this,
              n = t.params,
              i = t.activeIndex,
              r = t.slides,
              a = t.loopedSlides,
              s = t.allowSlidePrev,
              o = t.allowSlideNext,
              l = t.snapGrid,
              u = t.rtlTranslate;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            var d = -l[i] - t.getTranslate();
            i < a
              ? ((e = r.length - 3 * a + i),
                (e += a),
                t.slideTo(e, 0, !1, !0) &&
                  0 !== d &&
                  t.setTranslate((u ? -t.translate : t.translate) - d))
              : (("auto" === n.slidesPerView && 2 * a <= i) ||
                  i >= r.length - a) &&
                ((e = -r.length + i + a),
                (e += a),
                t.slideTo(e, 0, !1, !0) &&
                  0 !== d &&
                  t.setTranslate((u ? -t.translate : t.translate) - d)),
              (t.allowSlidePrev = s),
              (t.allowSlideNext = o);
          },
          loopDestroy: function () {
            var e = this.$wrapperEl,
              t = this.params,
              n = this.slides;
            e
              .children(
                "." +
                  t.slideClass +
                  "." +
                  t.slideDuplicateClass +
                  ",." +
                  t.slideClass +
                  "." +
                  t.slideBlankClass
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        },
        b = {
          setGrabCursor: function (e) {
            if (
              !(
                c.touch ||
                !this.params.simulateTouch ||
                (this.params.watchOverflow && this.isLocked)
              )
            ) {
              var t = this.el;
              (t.style.cursor = "move"),
                (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (t.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function () {
            c.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              (this.el.style.cursor = "");
          },
        },
        w = {
          appendSlide: function (e) {
            var t = this,
              n = t.$wrapperEl,
              i = t.params;
            if (
              (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
            else n.append(e);
            i.loop && t.loopCreate(), (i.observer && c.observer) || t.update();
          },
          prependSlide: function (e) {
            var t = this,
              n = t.params,
              i = t.$wrapperEl,
              r = t.activeIndex;
            n.loop && t.loopDestroy();
            var a = r + 1;
            if ("object" == typeof e && "length" in e) {
              for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
              a = r + e.length;
            } else i.prepend(e);
            n.loop && t.loopCreate(),
              (n.observer && c.observer) || t.update(),
              t.slideTo(a, 0, !1);
          },
          addSlide: function (e, t) {
            var n = this,
              i = n.$wrapperEl,
              r = n.params,
              a = n.activeIndex;
            r.loop &&
              ((a -= n.loopedSlides),
              n.loopDestroy(),
              (n.slides = i.children("." + r.slideClass)));
            var s = n.slides.length;
            if (e <= 0) n.prependSlide(t);
            else if (s <= e) n.appendSlide(t);
            else {
              for (
                var o = e < a ? a + 1 : a, l = [], u = s - 1;
                e <= u;
                u -= 1
              ) {
                var d = n.slides.eq(u);
                d.remove(), l.unshift(d);
              }
              if ("object" == typeof t && "length" in t) {
                for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                o = e < a ? a + t.length : a;
              } else i.append(t);
              for (var f = 0; f < l.length; f += 1) i.append(l[f]);
              r.loop && n.loopCreate(),
                (r.observer && c.observer) || n.update(),
                r.loop
                  ? n.slideTo(o + n.loopedSlides, 0, !1)
                  : n.slideTo(o, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this,
              n = t.params,
              i = t.$wrapperEl,
              r = t.activeIndex;
            n.loop &&
              ((r -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = i.children("." + n.slideClass)));
            var a,
              s = r;
            if ("object" == typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1)
                (a = e[o]),
                  t.slides[a] && t.slides.eq(a).remove(),
                  a < s && (s -= 1);
              s = Math.max(s, 0);
            } else
              (a = e),
                t.slides[a] && t.slides.eq(a).remove(),
                a < s && (s -= 1),
                (s = Math.max(s, 0));
            n.loop && t.loopCreate(),
              (n.observer && c.observer) || t.update(),
              n.loop
                ? t.slideTo(s + t.loopedSlides, 0, !1)
                : t.slideTo(s, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        x = (function () {
          var n = t.navigator.userAgent,
            i = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              windows: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              cordova: t.cordova || t.phonegap,
              phonegap: t.cordova || t.phonegap,
            },
            r = n.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            a = n.match(/(Android);?[\s\/]+([\d.]+)?/),
            s = n.match(/(iPad).*OS\s([\d_]+)/),
            o = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            l = !s && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          if (
            (r && ((i.os = "windows"), (i.osVersion = r[2]), (i.windows = !0)),
            a &&
              !r &&
              ((i.os = "android"),
              (i.osVersion = a[2]),
              (i.android = !0),
              (i.androidChrome = 0 <= n.toLowerCase().indexOf("chrome"))),
            (s || l || o) && ((i.os = "ios"), (i.ios = !0)),
            l &&
              !o &&
              ((i.osVersion = l[2].replace(/_/g, ".")), (i.iphone = !0)),
            s && ((i.osVersion = s[2].replace(/_/g, ".")), (i.ipad = !0)),
            o &&
              ((i.osVersion = o[3] ? o[3].replace(/_/g, ".") : null),
              (i.iphone = !0)),
            i.ios &&
              i.osVersion &&
              0 <= n.indexOf("Version/") &&
              "10" === i.osVersion.split(".")[0] &&
              (i.osVersion = n
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0]),
            (i.desktop = !(i.os || i.android || i.webView)),
            (i.webView =
              (l || s || o) && n.match(/.*AppleWebKit(?!.*Safari)/i)),
            i.os && "ios" === i.os)
          ) {
            var u = i.osVersion.split("."),
              d = e.querySelector('meta[name="viewport"]');
            i.minimalUi =
              !i.webView &&
              (o || l) &&
              (1 * u[0] == 7 ? 1 <= 1 * u[1] : 7 < 1 * u[0]) &&
              d &&
              0 <= d.getAttribute("content").indexOf("minimal-ui");
          }
          return (i.pixelRatio = t.devicePixelRatio || 1), i;
        })();
      function E() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            r = e.allowSlidePrev,
            a = e.snapGrid;
          if (
            ((e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            t.freeMode)
          ) {
            var s = Math.min(
              Math.max(e.translate, e.maxTranslate()),
              e.minTranslate()
            );
            e.setTranslate(s),
              e.updateActiveIndex(),
              e.updateSlidesClasses(),
              t.autoHeight && e.updateAutoHeight();
          } else
            e.updateSlidesClasses(),
              ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0);
          (e.allowSlidePrev = r),
            (e.allowSlideNext = i),
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
        }
      }
      var T = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsInverse: !1,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !0,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
        },
        S = {
          update: v,
          translate: g,
          transition: {
            setTransition: function (e, t) {
              this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                i = n.activeIndex,
                r = n.params,
                a = n.previousIndex;
              r.autoHeight && n.updateAutoHeight();
              var s = t;
              if (
                (s || (s = a < i ? "next" : i < a ? "prev" : "reset"),
                n.emit("transitionStart"),
                e && i !== a)
              ) {
                if ("reset" === s)
                  return void n.emit("slideResetTransitionStart");
                n.emit("slideChangeTransitionStart"),
                  "next" === s
                    ? n.emit("slideNextTransitionStart")
                    : n.emit("slidePrevTransitionStart");
              }
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                i = n.activeIndex,
                r = n.previousIndex;
              (n.animating = !1), n.setTransition(0);
              var a = t;
              if (
                (a || (a = r < i ? "next" : i < r ? "prev" : "reset"),
                n.emit("transitionEnd"),
                e && i !== r)
              ) {
                if ("reset" === a)
                  return void n.emit("slideResetTransitionEnd");
                n.emit("slideChangeTransitionEnd"),
                  "next" === a
                    ? n.emit("slideNextTransitionEnd")
                    : n.emit("slidePrevTransitionEnd");
              }
            },
          },
          slide: m,
          loop: y,
          grabCursor: b,
          manipulation: w,
          events: {
            attachEvents: function () {
              var n = this,
                r = n.params,
                a = n.touchEvents,
                s = n.el,
                o = n.wrapperEl;
              (n.onTouchStart = function (n) {
                var r = this,
                  a = r.touchEventsData,
                  s = r.params,
                  o = r.touches;
                if (!r.animating || !s.preventInteractionOnTransition) {
                  var l = n;
                  if (
                    (l.originalEvent && (l = l.originalEvent),
                    (a.isTouchEvent = "touchstart" === l.type),
                    (a.isTouchEvent || !("which" in l) || 3 !== l.which) &&
                      !(
                        (!a.isTouchEvent && "button" in l && 0 < l.button) ||
                        (a.isTouched && a.isMoved)
                      ))
                  )
                    if (
                      s.noSwiping &&
                      i(l.target).closest(
                        s.noSwipingSelector
                          ? s.noSwipingSelector
                          : "." + s.noSwipingClass
                      )[0]
                    )
                      r.allowClick = !0;
                    else if (
                      !s.swipeHandler ||
                      i(l).closest(s.swipeHandler)[0]
                    ) {
                      (o.currentX =
                        "touchstart" === l.type
                          ? l.targetTouches[0].pageX
                          : l.pageX),
                        (o.currentY =
                          "touchstart" === l.type
                            ? l.targetTouches[0].pageY
                            : l.pageY);
                      var u = o.currentX,
                        c = o.currentY,
                        p = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                        f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                      if (!p || !(u <= f || u >= t.screen.width - f)) {
                        if (
                          (d.extend(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0,
                          }),
                          (o.startX = u),
                          (o.startY = c),
                          (a.touchStartTime = d.now()),
                          (r.allowClick = !0),
                          r.updateSize(),
                          (r.swipeDirection = void 0),
                          0 < s.threshold && (a.allowThresholdMove = !1),
                          "touchstart" !== l.type)
                        ) {
                          var h = !0;
                          i(l.target).is(a.formElements) && (h = !1),
                            e.activeElement &&
                              i(e.activeElement).is(a.formElements) &&
                              e.activeElement !== l.target &&
                              e.activeElement.blur();
                          var v =
                            h && r.allowTouchMove && s.touchStartPreventDefault;
                          (s.touchStartForcePreventDefault || v) &&
                            l.preventDefault();
                        }
                        r.emit("touchStart", l);
                      }
                    }
                }
              }.bind(n)),
                (n.onTouchMove = function (t) {
                  var n = this,
                    r = n.touchEventsData,
                    a = n.params,
                    s = n.touches,
                    o = n.rtlTranslate,
                    l = t;
                  if ((l.originalEvent && (l = l.originalEvent), r.isTouched)) {
                    if (!r.isTouchEvent || "mousemove" !== l.type) {
                      var u =
                          "touchmove" === l.type
                            ? l.targetTouches[0].pageX
                            : l.pageX,
                        c =
                          "touchmove" === l.type
                            ? l.targetTouches[0].pageY
                            : l.pageY;
                      if (l.preventedByNestedSwiper)
                        return (s.startX = u), void (s.startY = c);
                      if (!n.allowTouchMove)
                        return (
                          (n.allowClick = !1),
                          void (
                            r.isTouched &&
                            (d.extend(s, {
                              startX: u,
                              startY: c,
                              currentX: u,
                              currentY: c,
                            }),
                            (r.touchStartTime = d.now()))
                          )
                        );
                      if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                        if (n.isVertical()) {
                          if (
                            (c < s.startY && n.translate <= n.maxTranslate()) ||
                            (c > s.startY && n.translate >= n.minTranslate())
                          )
                            return (r.isTouched = !1), void (r.isMoved = !1);
                        } else if (
                          (u < s.startX && n.translate <= n.maxTranslate()) ||
                          (u > s.startX && n.translate >= n.minTranslate())
                        )
                          return;
                      if (
                        r.isTouchEvent &&
                        e.activeElement &&
                        l.target === e.activeElement &&
                        i(l.target).is(r.formElements)
                      )
                        return (r.isMoved = !0), void (n.allowClick = !1);
                      if (
                        (r.allowTouchCallbacks && n.emit("touchMove", l),
                        !(l.targetTouches && 1 < l.targetTouches.length))
                      ) {
                        (s.currentX = u), (s.currentY = c);
                        var p,
                          f = s.currentX - s.startX,
                          h = s.currentY - s.startY;
                        if (
                          !(
                            n.params.threshold &&
                            Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) <
                              n.params.threshold
                          )
                        )
                          if (
                            (void 0 === r.isScrolling &&
                              ((n.isHorizontal() && s.currentY === s.startY) ||
                              (n.isVertical() && s.currentX === s.startX)
                                ? (r.isScrolling = !1)
                                : 25 <= f * f + h * h &&
                                  ((p =
                                    (180 *
                                      Math.atan2(Math.abs(h), Math.abs(f))) /
                                    Math.PI),
                                  (r.isScrolling = n.isHorizontal()
                                    ? p > a.touchAngle
                                    : 90 - p > a.touchAngle))),
                            r.isScrolling && n.emit("touchMoveOpposite", l),
                            void 0 === r.startMoving &&
                              ((s.currentX === s.startX &&
                                s.currentY === s.startY) ||
                                (r.startMoving = !0)),
                            r.isScrolling)
                          )
                            r.isTouched = !1;
                          else if (r.startMoving) {
                            (n.allowClick = !1),
                              l.preventDefault(),
                              a.touchMoveStopPropagation &&
                                !a.nested &&
                                l.stopPropagation(),
                              r.isMoved ||
                                (a.loop && n.loopFix(),
                                (r.startTranslate = n.getTranslate()),
                                n.setTransition(0),
                                n.animating &&
                                  n.$wrapperEl.trigger(
                                    "webkitTransitionEnd transitionend"
                                  ),
                                (r.allowMomentumBounce = !1),
                                !a.grabCursor ||
                                  (!0 !== n.allowSlideNext &&
                                    !0 !== n.allowSlidePrev) ||
                                  n.setGrabCursor(!0),
                                n.emit("sliderFirstMove", l)),
                              n.emit("sliderMove", l),
                              (r.isMoved = !0);
                            var v = n.isHorizontal() ? f : h;
                            (s.diff = v),
                              (v *= a.touchRatio),
                              o && (v = -v),
                              (n.swipeDirection = 0 < v ? "prev" : "next"),
                              (r.currentTranslate = v + r.startTranslate);
                            var g = !0,
                              m = a.resistanceRatio;
                            if (
                              (a.touchReleaseOnEdges && (m = 0),
                              0 < v && r.currentTranslate > n.minTranslate()
                                ? ((g = !1),
                                  a.resistance &&
                                    (r.currentTranslate =
                                      n.minTranslate() -
                                      1 +
                                      Math.pow(
                                        -n.minTranslate() +
                                          r.startTranslate +
                                          v,
                                        m
                                      )))
                                : v < 0 &&
                                  r.currentTranslate < n.maxTranslate() &&
                                  ((g = !1),
                                  a.resistance &&
                                    (r.currentTranslate =
                                      n.maxTranslate() +
                                      1 -
                                      Math.pow(
                                        n.maxTranslate() - r.startTranslate - v,
                                        m
                                      ))),
                              g && (l.preventedByNestedSwiper = !0),
                              !n.allowSlideNext &&
                                "next" === n.swipeDirection &&
                                r.currentTranslate < r.startTranslate &&
                                (r.currentTranslate = r.startTranslate),
                              !n.allowSlidePrev &&
                                "prev" === n.swipeDirection &&
                                r.currentTranslate > r.startTranslate &&
                                (r.currentTranslate = r.startTranslate),
                              0 < a.threshold)
                            ) {
                              if (
                                !(
                                  Math.abs(v) > a.threshold ||
                                  r.allowThresholdMove
                                )
                              )
                                return void (r.currentTranslate =
                                  r.startTranslate);
                              if (!r.allowThresholdMove)
                                return (
                                  (r.allowThresholdMove = !0),
                                  (s.startX = s.currentX),
                                  (s.startY = s.currentY),
                                  (r.currentTranslate = r.startTranslate),
                                  void (s.diff = n.isHorizontal()
                                    ? s.currentX - s.startX
                                    : s.currentY - s.startY)
                                );
                            }
                            a.followFinger &&
                              ((a.freeMode ||
                                a.watchSlidesProgress ||
                                a.watchSlidesVisibility) &&
                                (n.updateActiveIndex(),
                                n.updateSlidesClasses()),
                              a.freeMode &&
                                (0 === r.velocities.length &&
                                  r.velocities.push({
                                    position:
                                      s[n.isHorizontal() ? "startX" : "startY"],
                                    time: r.touchStartTime,
                                  }),
                                r.velocities.push({
                                  position:
                                    s[
                                      n.isHorizontal() ? "currentX" : "currentY"
                                    ],
                                  time: d.now(),
                                })),
                              n.updateProgress(r.currentTranslate),
                              n.setTranslate(r.currentTranslate));
                          }
                      }
                    }
                  } else
                    r.startMoving &&
                      r.isScrolling &&
                      n.emit("touchMoveOpposite", l);
                }.bind(n)),
                (n.onTouchEnd = function (e) {
                  var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    r = t.touches,
                    a = t.rtlTranslate,
                    s = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    u = e;
                  if (
                    (u.originalEvent && (u = u.originalEvent),
                    n.allowTouchCallbacks && t.emit("touchEnd", u),
                    (n.allowTouchCallbacks = !1),
                    !n.isTouched)
                  )
                    return (
                      n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                      (n.isMoved = !1),
                      void (n.startMoving = !1)
                    );
                  i.grabCursor &&
                    n.isMoved &&
                    n.isTouched &&
                    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                    t.setGrabCursor(!1);
                  var c,
                    p = d.now(),
                    f = p - n.touchStartTime;
                  if (
                    (t.allowClick &&
                      (t.updateClickedSlide(u),
                      t.emit("tap", u),
                      f < 300 &&
                        300 < p - n.lastClickTime &&
                        (n.clickTimeout && clearTimeout(n.clickTimeout),
                        (n.clickTimeout = d.nextTick(function () {
                          t && !t.destroyed && t.emit("click", u);
                        }, 300))),
                      f < 300 &&
                        p - n.lastClickTime < 300 &&
                        (n.clickTimeout && clearTimeout(n.clickTimeout),
                        t.emit("doubleTap", u))),
                    (n.lastClickTime = d.now()),
                    d.nextTick(function () {
                      t.destroyed || (t.allowClick = !0);
                    }),
                    !n.isTouched ||
                      !n.isMoved ||
                      !t.swipeDirection ||
                      0 === r.diff ||
                      n.currentTranslate === n.startTranslate)
                  )
                    return (
                      (n.isTouched = !1),
                      (n.isMoved = !1),
                      void (n.startMoving = !1)
                    );
                  if (
                    ((n.isTouched = !1),
                    (n.isMoved = !1),
                    (n.startMoving = !1),
                    (c = i.followFinger
                      ? a
                        ? t.translate
                        : -t.translate
                      : -n.currentTranslate),
                    i.freeMode)
                  ) {
                    if (c < -t.minTranslate())
                      return void t.slideTo(t.activeIndex);
                    if (c > -t.maxTranslate())
                      return void (t.slides.length < l.length
                        ? t.slideTo(l.length - 1)
                        : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                      if (1 < n.velocities.length) {
                        var h = n.velocities.pop(),
                          v = n.velocities.pop(),
                          g = h.position - v.position,
                          m = h.time - v.time;
                        (t.velocity = g / m),
                          (t.velocity /= 2),
                          Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                            (t.velocity = 0),
                          (150 < m || 300 < d.now() - h.time) &&
                            (t.velocity = 0);
                      } else t.velocity = 0;
                      (t.velocity *= i.freeModeMomentumVelocityRatio),
                        (n.velocities.length = 0);
                      var y = 1e3 * i.freeModeMomentumRatio,
                        b = t.velocity * y,
                        w = t.translate + b;
                      a && (w = -w);
                      var x,
                        E,
                        T = !1,
                        S =
                          20 *
                          Math.abs(t.velocity) *
                          i.freeModeMomentumBounceRatio;
                      if (w < t.maxTranslate())
                        i.freeModeMomentumBounce
                          ? (w + t.maxTranslate() < -S &&
                              (w = t.maxTranslate() - S),
                            (x = t.maxTranslate()),
                            (T = !0),
                            (n.allowMomentumBounce = !0))
                          : (w = t.maxTranslate()),
                          i.loop && i.centeredSlides && (E = !0);
                      else if (w > t.minTranslate())
                        i.freeModeMomentumBounce
                          ? (w - t.minTranslate() > S &&
                              (w = t.minTranslate() + S),
                            (x = t.minTranslate()),
                            (T = !0),
                            (n.allowMomentumBounce = !0))
                          : (w = t.minTranslate()),
                          i.loop && i.centeredSlides && (E = !0);
                      else if (i.freeModeSticky) {
                        for (var C, k = 0; k < l.length; k += 1)
                          if (l[k] > -w) {
                            C = k;
                            break;
                          }
                        w = -(w =
                          Math.abs(l[C] - w) < Math.abs(l[C - 1] - w) ||
                          "next" === t.swipeDirection
                            ? l[C]
                            : l[C - 1]);
                      }
                      if (
                        (E &&
                          t.once("transitionEnd", function () {
                            t.loopFix();
                          }),
                        0 !== t.velocity)
                      )
                        y = a
                          ? Math.abs((-w - t.translate) / t.velocity)
                          : Math.abs((w - t.translate) / t.velocity);
                      else if (i.freeModeSticky) return void t.slideToClosest();
                      i.freeModeMomentumBounce && T
                        ? (t.updateProgress(x),
                          t.setTransition(y),
                          t.setTranslate(w),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          s.transitionEnd(function () {
                            t &&
                              !t.destroyed &&
                              n.allowMomentumBounce &&
                              (t.emit("momentumBounce"),
                              t.setTransition(i.speed),
                              t.setTranslate(x),
                              s.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd();
                              }));
                          }))
                        : t.velocity
                        ? (t.updateProgress(w),
                          t.setTransition(y),
                          t.setTranslate(w),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                            ((t.animating = !0),
                            s.transitionEnd(function () {
                              t && !t.destroyed && t.transitionEnd();
                            })))
                        : t.updateProgress(w),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || f >= i.longSwipesMs) &&
                      (t.updateProgress(),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses());
                  } else {
                    for (
                      var P = 0, M = t.slidesSizesGrid[0], L = 0;
                      L < o.length;
                      L += i.slidesPerGroup
                    )
                      void 0 !== o[L + i.slidesPerGroup]
                        ? c >= o[L] &&
                          c < o[L + i.slidesPerGroup] &&
                          (M = o[(P = L) + i.slidesPerGroup] - o[L])
                        : c >= o[L] &&
                          ((P = L), (M = o[o.length - 1] - o[o.length - 2]));
                    var A = (c - o[P]) / M;
                    if (f > i.longSwipesMs) {
                      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                      "next" === t.swipeDirection &&
                        (A >= i.longSwipesRatio
                          ? t.slideTo(P + i.slidesPerGroup)
                          : t.slideTo(P)),
                        "prev" === t.swipeDirection &&
                          (A > 1 - i.longSwipesRatio
                            ? t.slideTo(P + i.slidesPerGroup)
                            : t.slideTo(P));
                    } else {
                      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                      "next" === t.swipeDirection &&
                        t.slideTo(P + i.slidesPerGroup),
                        "prev" === t.swipeDirection && t.slideTo(P);
                    }
                  }
                }.bind(n)),
                (n.onClick = function (e) {
                  this.allowClick ||
                    (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation &&
                      this.animating &&
                      (e.stopPropagation(), e.stopImmediatePropagation()));
                }.bind(n));
              var l = "container" === r.touchEventsTarget ? s : o,
                u = !!r.nested;
              if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
                if (c.touch) {
                  var p = !(
                    "touchstart" !== a.start ||
                    !c.passiveListener ||
                    !r.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  l.addEventListener(a.start, n.onTouchStart, p),
                    l.addEventListener(
                      a.move,
                      n.onTouchMove,
                      c.passiveListener ? { passive: !1, capture: u } : u
                    ),
                    l.addEventListener(a.end, n.onTouchEnd, p);
                }
                ((r.simulateTouch && !x.ios && !x.android) ||
                  (r.simulateTouch && !c.touch && x.ios)) &&
                  (l.addEventListener("mousedown", n.onTouchStart, !1),
                  e.addEventListener("mousemove", n.onTouchMove, u),
                  e.addEventListener("mouseup", n.onTouchEnd, !1));
              } else
                l.addEventListener(a.start, n.onTouchStart, !1),
                  e.addEventListener(a.move, n.onTouchMove, u),
                  e.addEventListener(a.end, n.onTouchEnd, !1);
              (r.preventClicks || r.preventClicksPropagation) &&
                l.addEventListener("click", n.onClick, !0),
                n.on(
                  x.ios || x.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  E,
                  !0
                );
            },
            detachEvents: function () {
              var t = this,
                n = t.params,
                i = t.touchEvents,
                r = t.el,
                a = t.wrapperEl,
                s = "container" === n.touchEventsTarget ? r : a,
                o = !!n.nested;
              if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
                if (c.touch) {
                  var l = !(
                    "onTouchStart" !== i.start ||
                    !c.passiveListener ||
                    !n.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  s.removeEventListener(i.start, t.onTouchStart, l),
                    s.removeEventListener(i.move, t.onTouchMove, o),
                    s.removeEventListener(i.end, t.onTouchEnd, l);
                }
                ((n.simulateTouch && !x.ios && !x.android) ||
                  (n.simulateTouch && !c.touch && x.ios)) &&
                  (s.removeEventListener("mousedown", t.onTouchStart, !1),
                  e.removeEventListener("mousemove", t.onTouchMove, o),
                  e.removeEventListener("mouseup", t.onTouchEnd, !1));
              } else
                s.removeEventListener(i.start, t.onTouchStart, !1),
                  e.removeEventListener(i.move, t.onTouchMove, o),
                  e.removeEventListener(i.end, t.onTouchEnd, !1);
              (n.preventClicks || n.preventClicksPropagation) &&
                s.removeEventListener("click", t.onClick, !0),
                t.off(
                  x.ios || x.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  E
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this,
                t = e.activeIndex,
                n = e.initialized,
                i = e.loopedSlides;
              void 0 === i && (i = 0);
              var r = e.params,
                a = r.breakpoints;
              if (a && (!a || 0 !== Object.keys(a).length)) {
                var s = e.getBreakpoint(a);
                if (s && e.currentBreakpoint !== s) {
                  var o = s in a ? a[s] : void 0;
                  o &&
                    ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
                      function (e) {
                        var t = o[e];
                        void 0 !== t &&
                          (o[e] =
                            "slidesPerView" !== e ||
                            ("AUTO" !== t && "auto" !== t)
                              ? "slidesPerView" === e
                                ? parseFloat(t)
                                : parseInt(t, 10)
                              : "auto");
                      }
                    );
                  var l = o || e.originalParams,
                    u = l.direction && l.direction !== r.direction,
                    c = r.loop && (l.slidesPerView !== r.slidesPerView || u);
                  u && n && e.changeDirection(),
                    d.extend(e.params, l),
                    d.extend(e, {
                      allowTouchMove: e.params.allowTouchMove,
                      allowSlideNext: e.params.allowSlideNext,
                      allowSlidePrev: e.params.allowSlidePrev,
                    }),
                    (e.currentBreakpoint = s),
                    c &&
                      n &&
                      (e.loopDestroy(),
                      e.loopCreate(),
                      e.updateSlides(),
                      e.slideTo(t - i + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", l);
                }
              }
            },
            getBreakpoint: function (e) {
              if (e) {
                var n = !1,
                  i = [];
                Object.keys(e).forEach(function (e) {
                  i.push(e);
                }),
                  i.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10);
                  });
                for (var r = 0; r < i.length; r += 1) {
                  var a = i[r];
                  this.params.breakpointsInverse
                    ? a <= t.innerWidth && (n = a)
                    : a >= t.innerWidth && !n && (n = a);
                }
                return n || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked;
              (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t &&
                  t !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              var e = this.classNames,
                t = this.params,
                n = this.rtl,
                i = this.$el,
                r = [];
              r.push("initialized"),
                r.push(t.direction),
                t.freeMode && r.push("free-mode"),
                c.flexbox || r.push("no-flexbox"),
                t.autoHeight && r.push("autoheight"),
                n && r.push("rtl"),
                1 < t.slidesPerColumn && r.push("multirow"),
                x.android && r.push("android"),
                x.ios && r.push("ios"),
                (p.isIE || p.isEdge) &&
                  (c.pointerEvents || c.prefixedPointerEvents) &&
                  r.push("wp8-" + t.direction),
                r.forEach(function (n) {
                  e.push(t.containerModifierClass + n);
                }),
                i.addClass(e.join(" "));
            },
            removeClasses: function () {
              var e = this.$el,
                t = this.classNames;
              e.removeClass(t.join(" "));
            },
          },
          images: {
            loadImage: function (e, n, i, r, a, s) {
              var o;
              function l() {
                s && s();
              }
              e.complete && a
                ? l()
                : n
                ? (((o = new t.Image()).onload = l),
                  (o.onerror = l),
                  r && (o.sizes = r),
                  i && (o.srcset = i),
                  n && (o.src = n))
                : l();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                var i = e.imagesToLoad[n];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        C = {},
        k = (function (e) {
          function t() {
            for (var n, r, a, s = [], o = arguments.length; o--; )
              s[o] = arguments[o];
            1 === s.length && s[0].constructor && s[0].constructor === Object
              ? (a = s[0])
              : ((r = (n = s)[0]), (a = n[1])),
              a || (a = {}),
              (a = d.extend({}, a)),
              r && !a.el && (a.el = r),
              e.call(this, a),
              Object.keys(S).forEach(function (e) {
                Object.keys(S[e]).forEach(function (n) {
                  t.prototype[n] || (t.prototype[n] = S[e][n]);
                });
              });
            var l = this;
            void 0 === l.modules && (l.modules = {}),
              Object.keys(l.modules).forEach(function (e) {
                var t = l.modules[e];
                if (t.params) {
                  var n = Object.keys(t.params)[0],
                    i = t.params[n];
                  if ("object" != typeof i || null === i) return;
                  if (!(n in a && "enabled" in i)) return;
                  !0 === a[n] && (a[n] = { enabled: !0 }),
                    "object" != typeof a[n] ||
                      "enabled" in a[n] ||
                      (a[n].enabled = !0),
                    a[n] || (a[n] = { enabled: !1 });
                }
              });
            var u = d.extend({}, T);
            l.useModulesParams(u),
              (l.params = d.extend({}, u, C, a)),
              (l.originalParams = d.extend({}, l.params)),
              (l.passedParams = d.extend({}, a));
            var p = (l.$ = i)(l.params.el);
            if ((r = p[0])) {
              if (1 < p.length) {
                var f = [];
                return (
                  p.each(function (e, n) {
                    var i = d.extend({}, a, { el: n });
                    f.push(new t(i));
                  }),
                  f
                );
              }
              (r.swiper = l), p.data("swiper", l);
              var h,
                v,
                g = p.children("." + l.params.wrapperClass);
              return (
                d.extend(l, {
                  $el: p,
                  el: r,
                  $wrapperEl: g,
                  wrapperEl: g[0],
                  classNames: [],
                  slides: i(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function () {
                    return "horizontal" === l.params.direction;
                  },
                  isVertical: function () {
                    return "vertical" === l.params.direction;
                  },
                  rtl:
                    "rtl" === r.dir.toLowerCase() ||
                    "rtl" === p.css("direction"),
                  rtlTranslate:
                    "horizontal" === l.params.direction &&
                    ("rtl" === r.dir.toLowerCase() ||
                      "rtl" === p.css("direction")),
                  wrongRTL: "-webkit-box" === g.css("display"),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: l.params.allowSlideNext,
                  allowSlidePrev: l.params.allowSlidePrev,
                  touchEvents:
                    ((h = ["touchstart", "touchmove", "touchend"]),
                    (v = ["mousedown", "mousemove", "mouseup"]),
                    c.pointerEvents
                      ? (v = ["pointerdown", "pointermove", "pointerup"])
                      : c.prefixedPointerEvents &&
                        (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    (l.touchEventsTouch = {
                      start: h[0],
                      move: h[1],
                      end: h[2],
                    }),
                    (l.touchEventsDesktop = {
                      start: v[0],
                      move: v[1],
                      end: v[2],
                    }),
                    c.touch || !l.params.simulateTouch
                      ? l.touchEventsTouch
                      : l.touchEventsDesktop),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements:
                      "input, select, option, textarea, button, video",
                    lastClickTime: d.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0,
                  },
                  allowClick: !0,
                  allowTouchMove: l.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0,
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
              );
            }
          }
          e && (t.__proto__ = e);
          var n = {
            extendedDefaults: { configurable: !0 },
            defaults: { configurable: !0 },
            Class: { configurable: !0 },
            $: { configurable: !0 },
          };
          return (
            (((t.prototype = Object.create(
              e && e.prototype
            )).constructor = t).prototype.slidesPerViewDynamic = function () {
              var e = this,
                t = e.params,
                n = e.slides,
                i = e.slidesGrid,
                r = e.size,
                a = e.activeIndex,
                s = 1;
              if (t.centeredSlides) {
                for (
                  var o, l = n[a].swiperSlideSize, u = a + 1;
                  u < n.length;
                  u += 1
                )
                  n[u] &&
                    !o &&
                    ((s += 1), r < (l += n[u].swiperSlideSize) && (o = !0));
                for (var d = a - 1; 0 <= d; d -= 1)
                  n[d] &&
                    !o &&
                    ((s += 1), r < (l += n[d].swiperSlideSize) && (o = !0));
              } else
                for (var c = a + 1; c < n.length; c += 1)
                  i[c] - i[a] < r && (s += 1);
              return s;
            }),
            (t.prototype.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t = e.snapGrid,
                  n = e.params;
                n.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode
                    ? (i(), e.params.autoHeight && e.updateAutoHeight())
                    : (("auto" === e.params.slidesPerView ||
                        1 < e.params.slidesPerView) &&
                      e.isEnd &&
                      !e.params.centeredSlides
                        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                        : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                  n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                  e.emit("update");
              }
              function i() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
            }),
            (t.prototype.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var n = this,
                i = n.params.direction;
              return (
                e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i ||
                  ("horizontal" !== e && "vertical" !== e) ||
                  ("vertical" === i &&
                    (n.$el
                      .removeClass(
                        n.params.containerModifierClass +
                          "vertical wp8-vertical"
                      )
                      .addClass("" + n.params.containerModifierClass + e),
                    (p.isIE || p.isEdge) &&
                      (c.pointerEvents || c.prefixedPointerEvents) &&
                      n.$el.addClass(
                        n.params.containerModifierClass + "wp8-" + e
                      )),
                  "horizontal" === i &&
                    (n.$el
                      .removeClass(
                        n.params.containerModifierClass +
                          "horizontal wp8-horizontal"
                      )
                      .addClass("" + n.params.containerModifierClass + e),
                    (p.isIE || p.isEdge) &&
                      (c.pointerEvents || c.prefixedPointerEvents) &&
                      n.$el.addClass(
                        n.params.containerModifierClass + "wp8-" + e
                      )),
                  (n.params.direction = e),
                  n.slides.each(function (t, n) {
                    "vertical" === e
                      ? (n.style.width = "")
                      : (n.style.height = "");
                  }),
                  n.emit("changeDirection"),
                  t && n.update()),
                n
              );
            }),
            (t.prototype.init = function () {
              var e = this;
              e.initialized ||
                (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                e.addClasses(),
                e.params.loop && e.loopCreate(),
                e.updateSize(),
                e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                e.params.loop
                  ? e.slideTo(
                      e.params.initialSlide + e.loopedSlides,
                      0,
                      e.params.runCallbacksOnInit
                    )
                  : e.slideTo(
                      e.params.initialSlide,
                      0,
                      e.params.runCallbacksOnInit
                    ),
                e.attachEvents(),
                (e.initialized = !0),
                e.emit("init"));
            }),
            (t.prototype.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var n = this,
                i = n.params,
                r = n.$el,
                a = n.$wrapperEl,
                s = n.slides;
              return (
                void 0 === n.params ||
                  n.destroyed ||
                  (n.emit("beforeDestroy"),
                  (n.initialized = !1),
                  n.detachEvents(),
                  i.loop && n.loopDestroy(),
                  t &&
                    (n.removeClasses(),
                    r.removeAttr("style"),
                    a.removeAttr("style"),
                    s &&
                      s.length &&
                      s
                        .removeClass(
                          [
                            i.slideVisibleClass,
                            i.slideActiveClass,
                            i.slideNextClass,
                            i.slidePrevClass,
                          ].join(" ")
                        )
                        .removeAttr("style")
                        .removeAttr("data-swiper-slide-index")
                        .removeAttr("data-swiper-column")
                        .removeAttr("data-swiper-row")),
                  n.emit("destroy"),
                  Object.keys(n.eventsListeners).forEach(function (e) {
                    n.off(e);
                  }),
                  !1 !== e &&
                    ((n.$el[0].swiper = null),
                    n.$el.data("swiper", null),
                    d.deleteProps(n)),
                  (n.destroyed = !0)),
                null
              );
            }),
            (t.extendDefaults = function (e) {
              d.extend(C, e);
            }),
            (n.extendedDefaults.get = function () {
              return C;
            }),
            (n.defaults.get = function () {
              return T;
            }),
            (n.Class.get = function () {
              return e;
            }),
            (n.$.get = function () {
              return i;
            }),
            Object.defineProperties(t, n),
            t
          );
        })(f),
        P = { name: "device", proto: { device: x }, static: { device: x } },
        M = { name: "support", proto: { support: c }, static: { support: c } },
        L = { name: "browser", proto: { browser: p }, static: { browser: p } },
        A = {
          name: "resize",
          create: function () {
            var e = this;
            d.extend(e, {
              resize: {
                resizeHandler: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit("orientationchange");
                },
              },
            });
          },
          on: {
            init: function () {
              t.addEventListener("resize", this.resize.resizeHandler),
                t.addEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
            destroy: function () {
              t.removeEventListener("resize", this.resize.resizeHandler),
                t.removeEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
          },
        },
        D = {
          func: t.MutationObserver || t.WebkitMutationObserver,
          attach: function (e, n) {
            void 0 === n && (n = {});
            var i = this,
              r = new D.func(function (e) {
                if (1 !== e.length) {
                  var n = function () {
                    i.emit("observerUpdate", e[0]);
                  };
                  t.requestAnimationFrame
                    ? t.requestAnimationFrame(n)
                    : t.setTimeout(n, 0);
                } else i.emit("observerUpdate", e[0]);
              });
            r.observe(e, {
              attributes: void 0 === n.attributes || n.attributes,
              childList: void 0 === n.childList || n.childList,
              characterData: void 0 === n.characterData || n.characterData,
            }),
              i.observer.observers.push(r);
          },
          init: function () {
            var e = this;
            if (c.observer && e.params.observer) {
              if (e.params.observeParents)
                for (var t = e.$el.parents(), n = 0; n < t.length; n += 1)
                  e.observer.attach(t[n]);
              e.observer.attach(e.$el[0], {
                childList: e.params.observeSlideChildren,
              }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function () {
            this.observer.observers.forEach(function (e) {
              e.disconnect();
            }),
              (this.observer.observers = []);
          },
        },
        z = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create: function () {
            d.extend(this, {
              observer: {
                init: D.init.bind(this),
                attach: D.attach.bind(this),
                destroy: D.destroy.bind(this),
                observers: [],
              },
            });
          },
          on: {
            init: function () {
              this.observer.init();
            },
            destroy: function () {
              this.observer.destroy();
            },
          },
        },
        N = {
          update: function (e) {
            var t = this,
              n = t.params,
              i = n.slidesPerView,
              r = n.slidesPerGroup,
              a = n.centeredSlides,
              s = t.params.virtual,
              o = s.addSlidesBefore,
              l = s.addSlidesAfter,
              u = t.virtual,
              c = u.from,
              p = u.to,
              f = u.slides,
              h = u.slidesGrid,
              v = u.renderSlide,
              g = u.offset;
            t.updateActiveIndex();
            var m,
              y,
              b,
              w = t.activeIndex || 0;
            (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
              a
                ? ((y = Math.floor(i / 2) + r + o),
                  (b = Math.floor(i / 2) + r + l))
                : ((y = i + (r - 1) + o), (b = r + l));
            var x = Math.max((w || 0) - b, 0),
              E = Math.min((w || 0) + y, f.length - 1),
              T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
              t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load();
            }
            if (
              (d.extend(t.virtual, {
                from: x,
                to: E,
                offset: T,
                slidesGrid: t.slidesGrid,
              }),
              c === x && p === E && !e)
            )
              return (
                t.slidesGrid !== h && T !== g && t.slides.css(m, T + "px"),
                void t.updateProgress()
              );
            if (t.params.virtual.renderExternal)
              return (
                t.params.virtual.renderExternal.call(t, {
                  offset: T,
                  from: x,
                  to: E,
                  slides: (function () {
                    for (var e = [], t = x; t <= E; t += 1) e.push(f[t]);
                    return e;
                  })(),
                }),
                void S()
              );
            var C = [],
              k = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
              for (var P = c; P <= p; P += 1)
                (P < x || E < P) &&
                  t.$wrapperEl
                    .find(
                      "." +
                        t.params.slideClass +
                        '[data-swiper-slide-index="' +
                        P +
                        '"]'
                    )
                    .remove();
            for (var M = 0; M < f.length; M += 1)
              x <= M &&
                M <= E &&
                (void 0 === p || e
                  ? k.push(M)
                  : (p < M && k.push(M), M < c && C.push(M)));
            k.forEach(function (e) {
              t.$wrapperEl.append(v(f[e], e));
            }),
              C.sort(function (e, t) {
                return t - e;
              }).forEach(function (e) {
                t.$wrapperEl.prepend(v(f[e], e));
              }),
              t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
              S();
          },
          renderSlide: function (e, t) {
            var n = this,
              r = n.params.virtual;
            if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t];
            var a = r.renderSlide
              ? i(r.renderSlide.call(n, e, t))
              : i(
                  '<div class="' +
                    n.params.slideClass +
                    '" data-swiper-slide-index="' +
                    t +
                    '">' +
                    e +
                    "</div>"
                );
            return (
              a.attr("data-swiper-slide-index") ||
                a.attr("data-swiper-slide-index", t),
              r.cache && (n.virtual.cache[t] = a),
              a
            );
          },
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (var t = 0; t < e.length; t += 1)
                e[t] && this.virtual.slides.push(e[t]);
            else this.virtual.slides.push(e);
            this.virtual.update(!0);
          },
          prependSlide: function (e) {
            var t = this,
              n = t.activeIndex,
              i = n + 1,
              r = 1;
            if (Array.isArray(e)) {
              for (var a = 0; a < e.length; a += 1)
                e[a] && t.virtual.slides.unshift(e[a]);
              (i = n + e.length), (r = e.length);
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
              var s = t.virtual.cache,
                o = {};
              Object.keys(s).forEach(function (e) {
                o[parseInt(e, 10) + r] = s[e];
              }),
                (t.virtual.cache = o);
            }
            t.virtual.update(!0), t.slideTo(i, 0);
          },
          removeSlide: function (e) {
            var t = this;
            if (null != e) {
              var n = t.activeIndex;
              if (Array.isArray(e))
                for (var i = e.length - 1; 0 <= i; i -= 1)
                  t.virtual.slides.splice(e[i], 1),
                    t.params.virtual.cache && delete t.virtual.cache[e[i]],
                    e[i] < n && (n -= 1),
                    (n = Math.max(n, 0));
              else
                t.virtual.slides.splice(e, 1),
                  t.params.virtual.cache && delete t.virtual.cache[e],
                  e < n && (n -= 1),
                  (n = Math.max(n, 0));
              t.virtual.update(!0), t.slideTo(n, 0);
            }
          },
          removeAllSlides: function () {
            var e = this;
            (e.virtual.slides = []),
              e.params.virtual.cache && (e.virtual.cache = {}),
              e.virtual.update(!0),
              e.slideTo(0, 0);
          },
        },
        I = {
          name: "virtual",
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          },
          create: function () {
            var e = this;
            d.extend(e, {
              virtual: {
                update: N.update.bind(e),
                appendSlide: N.appendSlide.bind(e),
                prependSlide: N.prependSlide.bind(e),
                removeSlide: N.removeSlide.bind(e),
                removeAllSlides: N.removeAllSlides.bind(e),
                renderSlide: N.renderSlide.bind(e),
                slides: e.params.virtual.slides,
                cache: {},
              },
            });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if (e.params.virtual.enabled) {
                e.classNames.push(e.params.containerModifierClass + "virtual");
                var t = { watchSlidesProgress: !0 };
                d.extend(e.params, t),
                  d.extend(e.originalParams, t),
                  e.params.initialSlide || e.virtual.update();
              }
            },
            setTranslate: function () {
              this.params.virtual.enabled && this.virtual.update();
            },
          },
        },
        O = {
          handle: function (n) {
            var i = this,
              r = i.rtlTranslate,
              a = n;
            a.originalEvent && (a = a.originalEvent);
            var s = a.keyCode || a.charCode;
            if (
              !i.allowSlideNext &&
              ((i.isHorizontal() && 39 === s) || (i.isVertical() && 40 === s))
            )
              return !1;
            if (
              !i.allowSlidePrev &&
              ((i.isHorizontal() && 37 === s) || (i.isVertical() && 38 === s))
            )
              return !1;
            if (
              !(
                a.shiftKey ||
                a.altKey ||
                a.ctrlKey ||
                a.metaKey ||
                (e.activeElement &&
                  e.activeElement.nodeName &&
                  ("input" === e.activeElement.nodeName.toLowerCase() ||
                    "textarea" === e.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (
                i.params.keyboard.onlyInViewport &&
                (37 === s || 39 === s || 38 === s || 40 === s)
              ) {
                var o = !1;
                if (
                  0 < i.$el.parents("." + i.params.slideClass).length &&
                  0 === i.$el.parents("." + i.params.slideActiveClass).length
                )
                  return;
                var l = t.innerWidth,
                  u = t.innerHeight,
                  d = i.$el.offset();
                r && (d.left -= i.$el[0].scrollLeft);
                for (
                  var c = [
                      [d.left, d.top],
                      [d.left + i.width, d.top],
                      [d.left, d.top + i.height],
                      [d.left + i.width, d.top + i.height],
                    ],
                    p = 0;
                  p < c.length;
                  p += 1
                ) {
                  var f = c[p];
                  0 <= f[0] && f[0] <= l && 0 <= f[1] && f[1] <= u && (o = !0);
                }
                if (!o) return;
              }
              i.isHorizontal()
                ? ((37 !== s && 39 !== s) ||
                    (a.preventDefault
                      ? a.preventDefault()
                      : (a.returnValue = !1)),
                  ((39 === s && !r) || (37 === s && r)) && i.slideNext(),
                  ((37 === s && !r) || (39 === s && r)) && i.slidePrev())
                : ((38 !== s && 40 !== s) ||
                    (a.preventDefault
                      ? a.preventDefault()
                      : (a.returnValue = !1)),
                  40 === s && i.slideNext(),
                  38 === s && i.slidePrev()),
                i.emit("keyPress", s);
            }
          },
          enable: function () {
            this.keyboard.enabled ||
              (i(e).on("keydown", this.keyboard.handle),
              (this.keyboard.enabled = !0));
          },
          disable: function () {
            this.keyboard.enabled &&
              (i(e).off("keydown", this.keyboard.handle),
              (this.keyboard.enabled = !1));
          },
        },
        $ = {
          name: "keyboard",
          params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
          create: function () {
            d.extend(this, {
              keyboard: {
                enabled: !1,
                enable: O.enable.bind(this),
                disable: O.disable.bind(this),
                handle: O.handle.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy: function () {
              this.keyboard.enabled && this.keyboard.disable();
            },
          },
        },
        R = {
          lastScrollTime: d.now(),
          event:
            -1 < t.navigator.userAgent.indexOf("firefox")
              ? "DOMMouseScroll"
              : (function () {
                  var t = "onwheel",
                    n = t in e;
                  if (!n) {
                    var i = e.createElement("div");
                    i.setAttribute(t, "return;"),
                      (n = "function" == typeof i[t]);
                  }
                  return (
                    !n &&
                      e.implementation &&
                      e.implementation.hasFeature &&
                      !0 !== e.implementation.hasFeature("", "") &&
                      (n = e.implementation.hasFeature("Events.wheel", "3.0")),
                    n
                  );
                })()
              ? "wheel"
              : "mousewheel",
          normalize: function (e) {
            var t = 0,
              n = 0,
              i = 0,
              r = 0;
            return (
              "detail" in e && (n = e.detail),
              "wheelDelta" in e && (n = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
              (i = 10 * t),
              (r = 10 * n),
              "deltaY" in e && (r = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              (i || r) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((i *= 40), (r *= 40))
                  : ((i *= 800), (r *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              r && !n && (n = r < 1 ? -1 : 1),
              { spinX: t, spinY: n, pixelX: i, pixelY: r }
            );
          },
          handleMouseEnter: function () {
            this.mouseEntered = !0;
          },
          handleMouseLeave: function () {
            this.mouseEntered = !1;
          },
          handle: function (e) {
            var n = e,
              i = this,
              r = i.params.mousewheel;
            if (!i.mouseEntered && !r.releaseOnEdges) return !0;
            n.originalEvent && (n = n.originalEvent);
            var a = 0,
              s = i.rtlTranslate ? -1 : 1,
              o = R.normalize(n);
            if (r.forceToAxis)
              if (i.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                a = o.pixelX * s;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                a = o.pixelY;
              }
            else
              a =
                Math.abs(o.pixelX) > Math.abs(o.pixelY)
                  ? -o.pixelX * s
                  : -o.pixelY;
            if (0 === a) return !0;
            if ((r.invert && (a = -a), i.params.freeMode)) {
              i.params.loop && i.loopFix();
              var l = i.getTranslate() + a * r.sensitivity,
                u = i.isBeginning,
                c = i.isEnd;
              if (
                (l >= i.minTranslate() && (l = i.minTranslate()),
                l <= i.maxTranslate() && (l = i.maxTranslate()),
                i.setTransition(0),
                i.setTranslate(l),
                i.updateProgress(),
                i.updateActiveIndex(),
                i.updateSlidesClasses(),
                ((!u && i.isBeginning) || (!c && i.isEnd)) &&
                  i.updateSlidesClasses(),
                i.params.freeModeSticky &&
                  (clearTimeout(i.mousewheel.timeout),
                  (i.mousewheel.timeout = d.nextTick(function () {
                    i.slideToClosest();
                  }, 300))),
                i.emit("scroll", n),
                i.params.autoplay &&
                  i.params.autoplayDisableOnInteraction &&
                  i.autoplay.stop(),
                l === i.minTranslate() || l === i.maxTranslate())
              )
                return !0;
            } else {
              if (60 < d.now() - i.mousewheel.lastScrollTime)
                if (a < 0)
                  if ((i.isEnd && !i.params.loop) || i.animating) {
                    if (r.releaseOnEdges) return !0;
                  } else i.slideNext(), i.emit("scroll", n);
                else if ((i.isBeginning && !i.params.loop) || i.animating) {
                  if (r.releaseOnEdges) return !0;
                } else i.slidePrev(), i.emit("scroll", n);
              i.mousewheel.lastScrollTime = new t.Date().getTime();
            }
            return (
              n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1
            );
          },
          enable: function () {
            var e = this;
            if (!R.event) return !1;
            if (e.mousewheel.enabled) return !1;
            var t = e.$el;
            return (
              "container" !== e.params.mousewheel.eventsTarged &&
                (t = i(e.params.mousewheel.eventsTarged)),
              t.on("mouseenter", e.mousewheel.handleMouseEnter),
              t.on("mouseleave", e.mousewheel.handleMouseLeave),
              t.on(R.event, e.mousewheel.handle),
              (e.mousewheel.enabled = !0)
            );
          },
          disable: function () {
            var e = this;
            if (!R.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            var t = e.$el;
            return (
              "container" !== e.params.mousewheel.eventsTarged &&
                (t = i(e.params.mousewheel.eventsTarged)),
              t.off(R.event, e.mousewheel.handle),
              !(e.mousewheel.enabled = !1)
            );
          },
        },
        j = {
          update: function () {
            var e = this,
              t = e.params.navigation;
            if (!e.params.loop) {
              var n = e.navigation,
                i = n.$nextEl,
                r = n.$prevEl;
              r &&
                0 < r.length &&
                (e.isBeginning
                  ? r.addClass(t.disabledClass)
                  : r.removeClass(t.disabledClass),
                r[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass)),
                i &&
                  0 < i.length &&
                  (e.isEnd
                    ? i.addClass(t.disabledClass)
                    : i.removeClass(t.disabledClass),
                  i[
                    e.params.watchOverflow && e.isLocked
                      ? "addClass"
                      : "removeClass"
                  ](t.lockClass));
            }
          },
          onPrevClick: function (e) {
            e.preventDefault(),
              (this.isBeginning && !this.params.loop) || this.slidePrev();
          },
          onNextClick: function (e) {
            e.preventDefault(),
              (this.isEnd && !this.params.loop) || this.slideNext();
          },
          init: function () {
            var e,
              t,
              n = this,
              r = n.params.navigation;
            (r.nextEl || r.prevEl) &&
              (r.nextEl &&
                ((e = i(r.nextEl)),
                n.params.uniqueNavElements &&
                  "string" == typeof r.nextEl &&
                  1 < e.length &&
                  1 === n.$el.find(r.nextEl).length &&
                  (e = n.$el.find(r.nextEl))),
              r.prevEl &&
                ((t = i(r.prevEl)),
                n.params.uniqueNavElements &&
                  "string" == typeof r.prevEl &&
                  1 < t.length &&
                  1 === n.$el.find(r.prevEl).length &&
                  (t = n.$el.find(r.prevEl))),
              e && 0 < e.length && e.on("click", n.navigation.onNextClick),
              t && 0 < t.length && t.on("click", n.navigation.onPrevClick),
              d.extend(n.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0],
              }));
          },
          destroy: function () {
            var e = this,
              t = e.navigation,
              n = t.$nextEl,
              i = t.$prevEl;
            n &&
              n.length &&
              (n.off("click", e.navigation.onNextClick),
              n.removeClass(e.params.navigation.disabledClass)),
              i &&
                i.length &&
                (i.off("click", e.navigation.onPrevClick),
                i.removeClass(e.params.navigation.disabledClass));
          },
        },
        H = {
          update: function () {
            var e = this,
              t = e.rtl,
              n = e.params.pagination;
            if (
              n.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var r,
                a =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                s = e.pagination.$el,
                o = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length;
              if (
                (e.params.loop
                  ? ((r = Math.ceil(
                      (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )) >
                      a - 1 - 2 * e.loopedSlides &&
                      (r -= a - 2 * e.loopedSlides),
                    o - 1 < r && (r -= o),
                    r < 0 &&
                      "bullets" !== e.params.paginationType &&
                      (r = o + r))
                  : (r =
                      void 0 !== e.snapIndex
                        ? e.snapIndex
                        : e.activeIndex || 0),
                "bullets" === n.type &&
                  e.pagination.bullets &&
                  0 < e.pagination.bullets.length)
              ) {
                var l,
                  u,
                  d,
                  c = e.pagination.bullets;
                if (
                  (n.dynamicBullets &&
                    ((e.pagination.bulletSize = c
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    s.css(
                      e.isHorizontal() ? "width" : "height",
                      e.pagination.bulletSize * (n.dynamicMainBullets + 4) +
                        "px"
                    ),
                    1 < n.dynamicMainBullets &&
                      void 0 !== e.previousIndex &&
                      ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                      e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1
                        ? (e.pagination.dynamicBulletIndex =
                            n.dynamicMainBullets - 1)
                        : e.pagination.dynamicBulletIndex < 0 &&
                          (e.pagination.dynamicBulletIndex = 0)),
                    (l = r - e.pagination.dynamicBulletIndex),
                    (d =
                      ((u =
                        l + (Math.min(c.length, n.dynamicMainBullets) - 1)) +
                        l) /
                      2)),
                  c.removeClass(
                    n.bulletActiveClass +
                      " " +
                      n.bulletActiveClass +
                      "-next " +
                      n.bulletActiveClass +
                      "-next-next " +
                      n.bulletActiveClass +
                      "-prev " +
                      n.bulletActiveClass +
                      "-prev-prev " +
                      n.bulletActiveClass +
                      "-main"
                  ),
                  1 < s.length)
                )
                  c.each(function (e, t) {
                    var a = i(t),
                      s = a.index();
                    s === r && a.addClass(n.bulletActiveClass),
                      n.dynamicBullets &&
                        (l <= s &&
                          s <= u &&
                          a.addClass(n.bulletActiveClass + "-main"),
                        s === l &&
                          a
                            .prev()
                            .addClass(n.bulletActiveClass + "-prev")
                            .prev()
                            .addClass(n.bulletActiveClass + "-prev-prev"),
                        s === u &&
                          a
                            .next()
                            .addClass(n.bulletActiveClass + "-next")
                            .next()
                            .addClass(n.bulletActiveClass + "-next-next"));
                  });
                else if (
                  (c.eq(r).addClass(n.bulletActiveClass), n.dynamicBullets)
                ) {
                  for (var p = c.eq(l), f = c.eq(u), h = l; h <= u; h += 1)
                    c.eq(h).addClass(n.bulletActiveClass + "-main");
                  p
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev-prev"),
                    f
                      .next()
                      .addClass(n.bulletActiveClass + "-next")
                      .next()
                      .addClass(n.bulletActiveClass + "-next-next");
                }
                if (n.dynamicBullets) {
                  var v = Math.min(c.length, n.dynamicMainBullets + 4),
                    g =
                      (e.pagination.bulletSize * v - e.pagination.bulletSize) /
                        2 -
                      d * e.pagination.bulletSize,
                    m = t ? "right" : "left";
                  c.css(e.isHorizontal() ? m : "top", g + "px");
                }
              }
              if (
                ("fraction" === n.type &&
                  (s
                    .find("." + n.currentClass)
                    .text(n.formatFractionCurrent(r + 1)),
                  s.find("." + n.totalClass).text(n.formatFractionTotal(o))),
                "progressbar" === n.type)
              ) {
                var y;
                y = n.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                var b = (r + 1) / o,
                  w = 1,
                  x = 1;
                "horizontal" === y ? (w = b) : (x = b),
                  s
                    .find("." + n.progressbarFillClass)
                    .transform(
                      "translate3d(0,0,0) scaleX(" + w + ") scaleY(" + x + ")"
                    )
                    .transition(e.params.speed);
              }
              "custom" === n.type && n.renderCustom
                ? (s.html(n.renderCustom(e, r + 1, o)),
                  e.emit("paginationRender", e, s[0]))
                : e.emit("paginationUpdate", e, s[0]),
                s[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](n.lockClass);
            }
          },
          render: function () {
            var e = this,
              t = e.params.pagination;
            if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var n =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                i = e.pagination.$el,
                r = "";
              if ("bullets" === t.type) {
                for (
                  var a = e.params.loop
                      ? Math.ceil(
                          (n - 2 * e.loopedSlides) / e.params.slidesPerGroup
                        )
                      : e.snapGrid.length,
                    s = 0;
                  s < a;
                  s += 1
                )
                  t.renderBullet
                    ? (r += t.renderBullet.call(e, s, t.bulletClass))
                    : (r +=
                        "<" +
                        t.bulletElement +
                        ' class="' +
                        t.bulletClass +
                        '"></' +
                        t.bulletElement +
                        ">");
                i.html(r), (e.pagination.bullets = i.find("." + t.bulletClass));
              }
              "fraction" === t.type &&
                ((r = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : '<span class="' +
                    t.currentClass +
                    '"></span> / <span class="' +
                    t.totalClass +
                    '"></span>'),
                i.html(r)),
                "progressbar" === t.type &&
                  ((r = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : '<span class="' + t.progressbarFillClass + '"></span>'),
                  i.html(r)),
                "custom" !== t.type &&
                  e.emit("paginationRender", e.pagination.$el[0]);
            }
          },
          init: function () {
            var e = this,
              t = e.params.pagination;
            if (t.el) {
              var n = i(t.el);
              0 !== n.length &&
                (e.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  1 < n.length &&
                  1 === e.$el.find(t.el).length &&
                  (n = e.$el.find(t.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  n.addClass(t.clickableClass),
                n.addClass(t.modifierClass + t.type),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (n.addClass("" + t.modifierClass + t.type + "-dynamic"),
                  (e.pagination.dynamicBulletIndex = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  n.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  n.on("click", "." + t.bulletClass, function (t) {
                    t.preventDefault();
                    var n = i(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (n += e.loopedSlides), e.slideTo(n);
                  }),
                d.extend(e.pagination, { $el: n, el: n[0] }));
            }
          },
          destroy: function () {
            var e = this,
              t = e.params.pagination;
            if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var n = e.pagination.$el;
              n.removeClass(t.hiddenClass),
                n.removeClass(t.modifierClass + t.type),
                e.pagination.bullets &&
                  e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && n.off("click", "." + t.bulletClass);
            }
          },
        },
        q = {
          setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
              var t = e.scrollbar,
                n = e.rtlTranslate,
                i = e.progress,
                r = t.dragSize,
                a = t.trackSize,
                s = t.$dragEl,
                o = t.$el,
                l = e.params.scrollbar,
                u = r,
                d = (a - r) * i;
              n
                ? 0 < (d = -d)
                  ? ((u = r - d), (d = 0))
                  : a < -d + r && (u = a + d)
                : d < 0
                ? ((u = r + d), (d = 0))
                : a < d + r && (u = a - d),
                e.isHorizontal()
                  ? (c.transforms3d
                      ? s.transform("translate3d(" + d + "px, 0, 0)")
                      : s.transform("translateX(" + d + "px)"),
                    (s[0].style.width = u + "px"))
                  : (c.transforms3d
                      ? s.transform("translate3d(0px, " + d + "px, 0)")
                      : s.transform("translateY(" + d + "px)"),
                    (s[0].style.height = u + "px")),
                l.hide &&
                  (clearTimeout(e.scrollbar.timeout),
                  (o[0].style.opacity = 1),
                  (e.scrollbar.timeout = setTimeout(function () {
                    (o[0].style.opacity = 0), o.transition(400);
                  }, 1e3)));
            }
          },
          setTransition: function (e) {
            this.params.scrollbar.el &&
              this.scrollbar.el &&
              this.scrollbar.$dragEl.transition(e);
          },
          updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
              var t = e.scrollbar,
                n = t.$dragEl,
                i = t.$el;
              (n[0].style.width = ""), (n[0].style.height = "");
              var r,
                a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                s = e.size / e.virtualSize,
                o = s * (a / e.size);
              (r =
                "auto" === e.params.scrollbar.dragSize
                  ? a * s
                  : parseInt(e.params.scrollbar.dragSize, 10)),
                e.isHorizontal()
                  ? (n[0].style.width = r + "px")
                  : (n[0].style.height = r + "px"),
                (i[0].style.display = 1 <= s ? "none" : ""),
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                d.extend(t, {
                  trackSize: a,
                  divider: s,
                  moveDivider: o,
                  dragSize: r,
                }),
                t.$el[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](e.params.scrollbar.lockClass);
            }
          },
          setDragPosition: function (e) {
            var t,
              n = this,
              i = n.scrollbar,
              r = n.rtlTranslate,
              a = i.$el,
              s = i.dragSize,
              o = i.trackSize;
            (t =
              ((n.isHorizontal()
                ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageX
                  : e.pageX || e.clientX
                : "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].pageY
                : e.pageY || e.clientY) -
                a.offset()[n.isHorizontal() ? "left" : "top"] -
                s / 2) /
              (o - s)),
              (t = Math.max(Math.min(t, 1), 0)),
              r && (t = 1 - t);
            var l =
              n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
            n.updateProgress(l),
              n.setTranslate(l),
              n.updateActiveIndex(),
              n.updateSlidesClasses();
          },
          onDragStart: function (e) {
            var t = this,
              n = t.params.scrollbar,
              i = t.scrollbar,
              r = t.$wrapperEl,
              a = i.$el,
              s = i.$dragEl;
            (t.scrollbar.isTouched = !0),
              e.preventDefault(),
              e.stopPropagation(),
              r.transition(100),
              s.transition(100),
              i.setDragPosition(e),
              clearTimeout(t.scrollbar.dragTimeout),
              a.transition(0),
              n.hide && a.css("opacity", 1),
              t.emit("scrollbarDragStart", e);
          },
          onDragMove: function (e) {
            var t = this.scrollbar,
              n = this.$wrapperEl,
              i = t.$el,
              r = t.$dragEl;
            this.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              t.setDragPosition(e),
              n.transition(0),
              i.transition(0),
              r.transition(0),
              this.emit("scrollbarDragMove", e));
          },
          onDragEnd: function (e) {
            var t = this,
              n = t.params.scrollbar,
              i = t.scrollbar.$el;
            t.scrollbar.isTouched &&
              ((t.scrollbar.isTouched = !1),
              n.hide &&
                (clearTimeout(t.scrollbar.dragTimeout),
                (t.scrollbar.dragTimeout = d.nextTick(function () {
                  i.css("opacity", 0), i.transition(400);
                }, 1e3))),
              t.emit("scrollbarDragEnd", e),
              n.snapOnRelease && t.slideToClosest());
          },
          enableDraggable: function () {
            var t = this;
            if (t.params.scrollbar.el) {
              var n = t.scrollbar,
                i = t.touchEventsTouch,
                r = t.touchEventsDesktop,
                a = t.params,
                s = n.$el[0],
                o = !(!c.passiveListener || !a.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                l = !(!c.passiveListener || !a.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              c.touch
                ? (s.addEventListener(i.start, t.scrollbar.onDragStart, o),
                  s.addEventListener(i.move, t.scrollbar.onDragMove, o),
                  s.addEventListener(i.end, t.scrollbar.onDragEnd, l))
                : (s.addEventListener(r.start, t.scrollbar.onDragStart, o),
                  e.addEventListener(r.move, t.scrollbar.onDragMove, o),
                  e.addEventListener(r.end, t.scrollbar.onDragEnd, l));
            }
          },
          disableDraggable: function () {
            var t = this;
            if (t.params.scrollbar.el) {
              var n = t.scrollbar,
                i = t.touchEventsTouch,
                r = t.touchEventsDesktop,
                a = t.params,
                s = n.$el[0],
                o = !(!c.passiveListener || !a.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                l = !(!c.passiveListener || !a.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              c.touch
                ? (s.removeEventListener(i.start, t.scrollbar.onDragStart, o),
                  s.removeEventListener(i.move, t.scrollbar.onDragMove, o),
                  s.removeEventListener(i.end, t.scrollbar.onDragEnd, l))
                : (s.removeEventListener(r.start, t.scrollbar.onDragStart, o),
                  e.removeEventListener(r.move, t.scrollbar.onDragMove, o),
                  e.removeEventListener(r.end, t.scrollbar.onDragEnd, l));
            }
          },
          init: function () {
            var e = this;
            if (e.params.scrollbar.el) {
              var t = e.scrollbar,
                n = e.$el,
                r = e.params.scrollbar,
                a = i(r.el);
              e.params.uniqueNavElements &&
                "string" == typeof r.el &&
                1 < a.length &&
                1 === n.find(r.el).length &&
                (a = n.find(r.el));
              var s = a.find("." + e.params.scrollbar.dragClass);
              0 === s.length &&
                ((s = i(
                  '<div class="' + e.params.scrollbar.dragClass + '"></div>'
                )),
                a.append(s)),
                d.extend(t, { $el: a, el: a[0], $dragEl: s, dragEl: s[0] }),
                r.draggable && t.enableDraggable();
            }
          },
          destroy: function () {
            this.scrollbar.disableDraggable();
          },
        },
        B = {
          setTransform: function (e, t) {
            var n = this.rtl,
              r = i(e),
              a = n ? -1 : 1,
              s = r.attr("data-swiper-parallax") || "0",
              o = r.attr("data-swiper-parallax-x"),
              l = r.attr("data-swiper-parallax-y"),
              u = r.attr("data-swiper-parallax-scale"),
              d = r.attr("data-swiper-parallax-opacity");
            if (
              (o || l
                ? ((o = o || "0"), (l = l || "0"))
                : this.isHorizontal()
                ? ((o = s), (l = "0"))
                : ((l = s), (o = "0")),
              (o =
                0 <= o.indexOf("%")
                  ? parseInt(o, 10) * t * a + "%"
                  : o * t * a + "px"),
              (l =
                0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px"),
              null != d)
            ) {
              var c = d - (d - 1) * (1 - Math.abs(t));
              r[0].style.opacity = c;
            }
            if (null == u)
              r.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
              var p = u - (u - 1) * (1 - Math.abs(t));
              r.transform(
                "translate3d(" + o + ", " + l + ", 0px) scale(" + p + ")"
              );
            }
          },
          setTranslate: function () {
            var e = this,
              t = e.$el,
              n = e.slides,
              r = e.progress,
              a = e.snapGrid;
            t
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function (t, n) {
                e.parallax.setTransform(n, r);
              }),
              n.each(function (t, n) {
                var s = n.progress;
                1 < e.params.slidesPerGroup &&
                  "auto" !== e.params.slidesPerView &&
                  (s += Math.ceil(t / 2) - r * (a.length - 1)),
                  (s = Math.min(Math.max(s, -1), 1)),
                  i(n)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    )
                    .each(function (t, n) {
                      e.parallax.setTransform(n, s);
                    });
              });
          },
          setTransition: function (e) {
            void 0 === e && (e = this.params.speed),
              this.$el
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function (t, n) {
                  var r = i(n),
                    a =
                      parseInt(r.attr("data-swiper-parallax-duration"), 10) ||
                      e;
                  0 === e && (a = 0), r.transition(a);
                });
          },
        },
        F = {
          getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX,
              n = e.targetTouches[0].pageY,
              i = e.targetTouches[1].pageX,
              r = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2));
          },
          onGestureStart: function (e) {
            var t = this,
              n = t.params.zoom,
              r = t.zoom,
              a = r.gesture;
            if (
              ((r.fakeGestureTouched = !1),
              (r.fakeGestureMoved = !1),
              !c.gestures)
            ) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (r.fakeGestureTouched = !0),
                (a.scaleStart = F.getDistanceBetweenTouches(e));
            }
            (a.$slideEl && a.$slideEl.length) ||
            ((a.$slideEl = i(e.target).closest(".swiper-slide")),
            0 === a.$slideEl.length &&
              (a.$slideEl = t.slides.eq(t.activeIndex)),
            (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
            (a.$imageWrapEl = a.$imageEl.parent("." + n.containerClass)),
            (a.maxRatio =
              a.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
            0 !== a.$imageWrapEl.length)
              ? (a.$imageEl.transition(0), (t.zoom.isScaling = !0))
              : (a.$imageEl = void 0);
          },
          onGestureChange: function (e) {
            var t = this.params.zoom,
              n = this.zoom,
              i = n.gesture;
            if (!c.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (n.fakeGestureMoved = !0),
                (i.scaleMove = F.getDistanceBetweenTouches(e));
            }
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((n.scale = c.gestures
                ? e.scale * n.currentScale
                : (i.scaleMove / i.scaleStart) * n.currentScale),
              n.scale > i.maxRatio &&
                (n.scale =
                  i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, 0.5)),
              n.scale < t.minRatio &&
                (n.scale =
                  t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, 0.5)),
              i.$imageEl.transform(
                "translate3d(0,0,0) scale(" + n.scale + ")"
              ));
          },
          onGestureEnd: function (e) {
            var t = this.params.zoom,
              n = this.zoom,
              i = n.gesture;
            if (!c.gestures) {
              if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !x.android)
              )
                return;
              (n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1);
            }
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio)),
              i.$imageEl
                .transition(this.params.speed)
                .transform("translate3d(0,0,0) scale(" + n.scale + ")"),
              (n.currentScale = n.scale),
              (n.isScaling = !1),
              1 === n.scale && (i.$slideEl = void 0));
          },
          onTouchStart: function (e) {
            var t = this.zoom,
              n = t.gesture,
              i = t.image;
            n.$imageEl &&
              0 !== n.$imageEl.length &&
              (i.isTouched ||
                (x.android && e.preventDefault(),
                (i.isTouched = !0),
                (i.touchesStart.x =
                  "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (i.touchesStart.y =
                  "touchstart" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove: function (e) {
            var t = this,
              n = t.zoom,
              i = n.gesture,
              r = n.image,
              a = n.velocity;
            if (
              i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.allowClick = !1), r.isTouched && i.$slideEl)
            ) {
              r.isMoved ||
                ((r.width = i.$imageEl[0].offsetWidth),
                (r.height = i.$imageEl[0].offsetHeight),
                (r.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
                (r.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
                (i.slideWidth = i.$slideEl[0].offsetWidth),
                (i.slideHeight = i.$slideEl[0].offsetHeight),
                i.$imageWrapEl.transition(0),
                t.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
              var s = r.width * n.scale,
                o = r.height * n.scale;
              if (!(s < i.slideWidth && o < i.slideHeight)) {
                if (
                  ((r.minX = Math.min(i.slideWidth / 2 - s / 2, 0)),
                  (r.maxX = -r.minX),
                  (r.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                  (r.maxY = -r.minY),
                  (r.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (r.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !r.isMoved && !n.isScaling)
                ) {
                  if (
                    t.isHorizontal() &&
                    ((Math.floor(r.minX) === Math.floor(r.startX) &&
                      r.touchesCurrent.x < r.touchesStart.x) ||
                      (Math.floor(r.maxX) === Math.floor(r.startX) &&
                        r.touchesCurrent.x > r.touchesStart.x))
                  )
                    return void (r.isTouched = !1);
                  if (
                    !t.isHorizontal() &&
                    ((Math.floor(r.minY) === Math.floor(r.startY) &&
                      r.touchesCurrent.y < r.touchesStart.y) ||
                      (Math.floor(r.maxY) === Math.floor(r.startY) &&
                        r.touchesCurrent.y > r.touchesStart.y))
                  )
                    return void (r.isTouched = !1);
                }
                e.preventDefault(),
                  e.stopPropagation(),
                  (r.isMoved = !0),
                  (r.currentX =
                    r.touchesCurrent.x - r.touchesStart.x + r.startX),
                  (r.currentY =
                    r.touchesCurrent.y - r.touchesStart.y + r.startY),
                  r.currentX < r.minX &&
                    (r.currentX =
                      r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
                  r.currentX > r.maxX &&
                    (r.currentX =
                      r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
                  r.currentY < r.minY &&
                    (r.currentY =
                      r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
                  r.currentY > r.maxY &&
                    (r.currentY =
                      r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
                  a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x),
                  a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y),
                  a.prevTime || (a.prevTime = Date.now()),
                  (a.x =
                    (r.touchesCurrent.x - a.prevPositionX) /
                    (Date.now() - a.prevTime) /
                    2),
                  (a.y =
                    (r.touchesCurrent.y - a.prevPositionY) /
                    (Date.now() - a.prevTime) /
                    2),
                  Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 &&
                    (a.x = 0),
                  Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 &&
                    (a.y = 0),
                  (a.prevPositionX = r.touchesCurrent.x),
                  (a.prevPositionY = r.touchesCurrent.y),
                  (a.prevTime = Date.now()),
                  i.$imageWrapEl.transform(
                    "translate3d(" + r.currentX + "px, " + r.currentY + "px,0)"
                  );
              }
            }
          },
          onTouchEnd: function () {
            var e = this.zoom,
              t = e.gesture,
              n = e.image,
              i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
              if (!n.isTouched || !n.isMoved)
                return (n.isTouched = !1), void (n.isMoved = !1);
              (n.isTouched = !1), (n.isMoved = !1);
              var r = 300,
                a = 300,
                s = i.x * r,
                o = n.currentX + s,
                l = i.y * a,
                u = n.currentY + l;
              0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)),
                0 !== i.y && (a = Math.abs((u - n.currentY) / i.y));
              var d = Math.max(r, a);
              (n.currentX = o), (n.currentY = u);
              var c = n.width * e.scale,
                p = n.height * e.scale;
              (n.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                (n.maxX = -n.minX),
                (n.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
                (n.maxY = -n.minY),
                (n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX)),
                (n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY)),
                t.$imageWrapEl
                  .transition(d)
                  .transform(
                    "translate3d(" + n.currentX + "px, " + n.currentY + "px,0)"
                  );
            }
          },
          onTransitionEnd: function () {
            var e = this.zoom,
              t = e.gesture;
            t.$slideEl &&
              this.previousIndex !== this.activeIndex &&
              (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              t.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (e.currentScale = 1),
              (t.$slideEl = void 0),
              (t.$imageEl = void 0),
              (t.$imageWrapEl = void 0));
          },
          toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in: function (e) {
            var t,
              n,
              r,
              a,
              s,
              o,
              l,
              u,
              d,
              c,
              p,
              f,
              h,
              v,
              g,
              m,
              y = this,
              b = y.zoom,
              w = y.params.zoom,
              x = b.gesture,
              E = b.image;
            x.$slideEl ||
              ((x.$slideEl = y.clickedSlide
                ? i(y.clickedSlide)
                : y.slides.eq(y.activeIndex)),
              (x.$imageEl = x.$slideEl.find("img, svg, canvas")),
              (x.$imageWrapEl = x.$imageEl.parent("." + w.containerClass))),
              x.$imageEl &&
                0 !== x.$imageEl.length &&
                (x.$slideEl.addClass("" + w.zoomedSlideClass),
                void 0 === E.touchesStart.x && e
                  ? ((t =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    (n =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageY
                        : e.pageY))
                  : ((t = E.touchesStart.x), (n = E.touchesStart.y)),
                (b.scale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                (b.currentScale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                e
                  ? ((g = x.$slideEl[0].offsetWidth),
                    (m = x.$slideEl[0].offsetHeight),
                    (r = x.$slideEl.offset().left + g / 2 - t),
                    (a = x.$slideEl.offset().top + m / 2 - n),
                    (l = x.$imageEl[0].offsetWidth),
                    (u = x.$imageEl[0].offsetHeight),
                    (d = l * b.scale),
                    (c = u * b.scale),
                    (h = -(p = Math.min(g / 2 - d / 2, 0))),
                    (v = -(f = Math.min(m / 2 - c / 2, 0))),
                    (s = r * b.scale) < p && (s = p),
                    h < s && (s = h),
                    (o = a * b.scale) < f && (o = f),
                    v < o && (o = v))
                  : (o = s = 0),
                x.$imageWrapEl
                  .transition(300)
                  .transform("translate3d(" + s + "px, " + o + "px,0)"),
                x.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
          },
          out: function () {
            var e = this,
              t = e.zoom,
              n = e.params.zoom,
              r = t.gesture;
            r.$slideEl ||
              ((r.$slideEl = e.clickedSlide
                ? i(e.clickedSlide)
                : e.slides.eq(e.activeIndex)),
              (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
              (r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass))),
              r.$imageEl &&
                0 !== r.$imageEl.length &&
                ((t.scale = 1),
                (t.currentScale = 1),
                r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                r.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                r.$slideEl.removeClass("" + n.zoomedSlideClass),
                (r.$slideEl = void 0));
          },
          enable: function () {
            var e = this,
              t = e.zoom;
            if (!t.enabled) {
              t.enabled = !0;
              var n = !(
                "touchstart" !== e.touchEvents.start ||
                !c.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              c.gestures
                ? (e.$wrapperEl.on(
                    "gesturestart",
                    ".swiper-slide",
                    t.onGestureStart,
                    n
                  ),
                  e.$wrapperEl.on(
                    "gesturechange",
                    ".swiper-slide",
                    t.onGestureChange,
                    n
                  ),
                  e.$wrapperEl.on(
                    "gestureend",
                    ".swiper-slide",
                    t.onGestureEnd,
                    n
                  ))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.on(
                    e.touchEvents.start,
                    ".swiper-slide",
                    t.onGestureStart,
                    n
                  ),
                  e.$wrapperEl.on(
                    e.touchEvents.move,
                    ".swiper-slide",
                    t.onGestureChange,
                    n
                  ),
                  e.$wrapperEl.on(
                    e.touchEvents.end,
                    ".swiper-slide",
                    t.onGestureEnd,
                    n
                  )),
                e.$wrapperEl.on(
                  e.touchEvents.move,
                  "." + e.params.zoom.containerClass,
                  t.onTouchMove
                );
            }
          },
          disable: function () {
            var e = this,
              t = e.zoom;
            if (t.enabled) {
              e.zoom.enabled = !1;
              var n = !(
                "touchstart" !== e.touchEvents.start ||
                !c.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              c.gestures
                ? (e.$wrapperEl.off(
                    "gesturestart",
                    ".swiper-slide",
                    t.onGestureStart,
                    n
                  ),
                  e.$wrapperEl.off(
                    "gesturechange",
                    ".swiper-slide",
                    t.onGestureChange,
                    n
                  ),
                  e.$wrapperEl.off(
                    "gestureend",
                    ".swiper-slide",
                    t.onGestureEnd,
                    n
                  ))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.off(
                    e.touchEvents.start,
                    ".swiper-slide",
                    t.onGestureStart,
                    n
                  ),
                  e.$wrapperEl.off(
                    e.touchEvents.move,
                    ".swiper-slide",
                    t.onGestureChange,
                    n
                  ),
                  e.$wrapperEl.off(
                    e.touchEvents.end,
                    ".swiper-slide",
                    t.onGestureEnd,
                    n
                  )),
                e.$wrapperEl.off(
                  e.touchEvents.move,
                  "." + e.params.zoom.containerClass,
                  t.onTouchMove
                );
            }
          },
        },
        G = {
          loadInSlide: function (e, t) {
            void 0 === t && (t = !0);
            var n = this,
              r = n.params.lazy;
            if (void 0 !== e && 0 !== n.slides.length) {
              var a =
                  n.virtual && n.params.virtual.enabled
                    ? n.$wrapperEl.children(
                        "." +
                          n.params.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]'
                      )
                    : n.slides.eq(e),
                s = a.find(
                  "." +
                    r.elementClass +
                    ":not(." +
                    r.loadedClass +
                    "):not(." +
                    r.loadingClass +
                    ")"
                );
              !a.hasClass(r.elementClass) ||
                a.hasClass(r.loadedClass) ||
                a.hasClass(r.loadingClass) ||
                (s = s.add(a[0])),
                0 !== s.length &&
                  s.each(function (e, s) {
                    var o = i(s);
                    o.addClass(r.loadingClass);
                    var l = o.attr("data-background"),
                      u = o.attr("data-src"),
                      d = o.attr("data-srcset"),
                      c = o.attr("data-sizes");
                    n.loadImage(o[0], u || l, d, c, !1, function () {
                      if (null != n && n && (!n || n.params) && !n.destroyed) {
                        if (
                          (l
                            ? (o.css("background-image", 'url("' + l + '")'),
                              o.removeAttr("data-background"))
                            : (d &&
                                (o.attr("srcset", d),
                                o.removeAttr("data-srcset")),
                              c &&
                                (o.attr("sizes", c),
                                o.removeAttr("data-sizes")),
                              u &&
                                (o.attr("src", u), o.removeAttr("data-src"))),
                          o.addClass(r.loadedClass).removeClass(r.loadingClass),
                          a.find("." + r.preloaderClass).remove(),
                          n.params.loop && t)
                        ) {
                          var e = a.attr("data-swiper-slide-index");
                          if (a.hasClass(n.params.slideDuplicateClass)) {
                            var i = n.$wrapperEl.children(
                              '[data-swiper-slide-index="' +
                                e +
                                '"]:not(.' +
                                n.params.slideDuplicateClass +
                                ")"
                            );
                            n.lazy.loadInSlide(i.index(), !1);
                          } else {
                            var s = n.$wrapperEl.children(
                              "." +
                                n.params.slideDuplicateClass +
                                '[data-swiper-slide-index="' +
                                e +
                                '"]'
                            );
                            n.lazy.loadInSlide(s.index(), !1);
                          }
                        }
                        n.emit("lazyImageReady", a[0], o[0]);
                      }
                    }),
                      n.emit("lazyImageLoad", a[0], o[0]);
                  });
            }
          },
          load: function () {
            var e = this,
              t = e.$wrapperEl,
              n = e.params,
              r = e.slides,
              a = e.activeIndex,
              s = e.virtual && n.virtual.enabled,
              o = n.lazy,
              l = n.slidesPerView;
            function u(e) {
              if (s) {
                if (
                  t.children(
                    "." + n.slideClass + '[data-swiper-slide-index="' + e + '"]'
                  ).length
                )
                  return !0;
              } else if (r[e]) return !0;
              return !1;
            }
            function d(e) {
              return s ? i(e).attr("data-swiper-slide-index") : i(e).index();
            }
            if (
              ("auto" === l && (l = 0),
              e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
              e.params.watchSlidesVisibility)
            )
              t.children("." + n.slideVisibleClass).each(function (t, n) {
                var r = s ? i(n).attr("data-swiper-slide-index") : i(n).index();
                e.lazy.loadInSlide(r);
              });
            else if (1 < l)
              for (var c = a; c < a + l; c += 1) u(c) && e.lazy.loadInSlide(c);
            else e.lazy.loadInSlide(a);
            if (o.loadPrevNext)
              if (1 < l || (o.loadPrevNextAmount && 1 < o.loadPrevNextAmount)) {
                for (
                  var p = o.loadPrevNextAmount,
                    f = l,
                    h = Math.min(a + f + Math.max(p, f), r.length),
                    v = Math.max(a - Math.max(f, p), 0),
                    g = a + l;
                  g < h;
                  g += 1
                )
                  u(g) && e.lazy.loadInSlide(g);
                for (var m = v; m < a; m += 1) u(m) && e.lazy.loadInSlide(m);
              } else {
                var y = t.children("." + n.slideNextClass);
                0 < y.length && e.lazy.loadInSlide(d(y));
                var b = t.children("." + n.slidePrevClass);
                0 < b.length && e.lazy.loadInSlide(d(b));
              }
          },
        },
        X = {
          LinearSpline: function (e, t) {
            var n, i, r, a, s;
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function (e) {
                return e
                  ? ((s = (function (e, t) {
                      for (i = -1, n = e.length; 1 < n - i; )
                        e[(r = (n + i) >> 1)] <= t ? (i = r) : (n = r);
                      return n;
                    })(this.x, e)),
                    (a = s - 1),
                    ((e - this.x[a]) * (this.y[s] - this.y[a])) /
                      (this.x[s] - this.x[a]) +
                      this.y[a])
                  : 0;
              }),
              this
            );
          },
          getInterpolateFunction: function (e) {
            var t = this;
            t.controller.spline ||
              (t.controller.spline = t.params.loop
                ? new X.LinearSpline(t.slidesGrid, e.slidesGrid)
                : new X.LinearSpline(t.snapGrid, e.snapGrid));
          },
          setTranslate: function (e, t) {
            var n,
              i,
              r = this,
              a = r.controller.control;
            function s(e) {
              var t = r.rtlTranslate ? -r.translate : r.translate;
              "slide" === r.params.controller.by &&
                (r.controller.getInterpolateFunction(e),
                (i = -r.controller.spline.interpolate(-t))),
                (i && "container" !== r.params.controller.by) ||
                  ((n =
                    (e.maxTranslate() - e.minTranslate()) /
                    (r.maxTranslate() - r.minTranslate())),
                  (i = (t - r.minTranslate()) * n + e.minTranslate())),
                r.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, r),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (var o = 0; o < a.length; o += 1)
                a[o] !== t && a[o] instanceof k && s(a[o]);
            else a instanceof k && t !== a && s(a);
          },
          setTransition: function (e, t) {
            var n,
              i = this,
              r = i.controller.control;
            function a(t) {
              t.setTransition(e, i),
                0 !== e &&
                  (t.transitionStart(),
                  t.params.autoHeight &&
                    d.nextTick(function () {
                      t.updateAutoHeight();
                    }),
                  t.$wrapperEl.transitionEnd(function () {
                    r &&
                      (t.params.loop &&
                        "slide" === i.params.controller.by &&
                        t.loopFix(),
                      t.transitionEnd());
                  }));
            }
            if (Array.isArray(r))
              for (n = 0; n < r.length; n += 1)
                r[n] !== t && r[n] instanceof k && a(r[n]);
            else r instanceof k && t !== r && a(r);
          },
        },
        W = {
          makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e;
          },
          addElRole: function (e, t) {
            return e.attr("role", t), e;
          },
          addElLabel: function (e, t) {
            return e.attr("aria-label", t), e;
          },
          disableEl: function (e) {
            return e.attr("aria-disabled", !0), e;
          },
          enableEl: function (e) {
            return e.attr("aria-disabled", !1), e;
          },
          onEnterKey: function (e) {
            var t = this,
              n = t.params.a11y;
            if (13 === e.keyCode) {
              var r = i(e.target);
              t.navigation &&
                t.navigation.$nextEl &&
                r.is(t.navigation.$nextEl) &&
                ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd
                  ? t.a11y.notify(n.lastSlideMessage)
                  : t.a11y.notify(n.nextSlideMessage)),
                t.navigation &&
                  t.navigation.$prevEl &&
                  r.is(t.navigation.$prevEl) &&
                  ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                  t.isBeginning
                    ? t.a11y.notify(n.firstSlideMessage)
                    : t.a11y.notify(n.prevSlideMessage)),
                t.pagination &&
                  r.is("." + t.params.pagination.bulletClass) &&
                  r[0].click();
            }
          },
          notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
          },
          updateNavigation: function () {
            var e = this;
            if (!e.params.loop) {
              var t = e.navigation,
                n = t.$nextEl,
                i = t.$prevEl;
              i &&
                0 < i.length &&
                (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                n &&
                  0 < n.length &&
                  (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n));
            }
          },
          updatePagination: function () {
            var e = this,
              t = e.params.a11y;
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.bullets.each(function (n, r) {
                var a = i(r);
                e.a11y.makeElFocusable(a),
                  e.a11y.addElRole(a, "button"),
                  e.a11y.addElLabel(
                    a,
                    t.paginationBulletMessage.replace(
                      /{{index}}/,
                      a.index() + 1
                    )
                  );
              });
          },
          init: function () {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t,
              n,
              i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
              e.navigation &&
                e.navigation.$prevEl &&
                (n = e.navigation.$prevEl),
              t &&
                (e.a11y.makeElFocusable(t),
                e.a11y.addElRole(t, "button"),
                e.a11y.addElLabel(t, i.nextSlideMessage),
                t.on("keydown", e.a11y.onEnterKey)),
              n &&
                (e.a11y.makeElFocusable(n),
                e.a11y.addElRole(n, "button"),
                e.a11y.addElLabel(n, i.prevSlideMessage),
                n.on("keydown", e.a11y.onEnterKey)),
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.$el.on(
                  "keydown",
                  "." + e.params.pagination.bulletClass,
                  e.a11y.onEnterKey
                );
          },
          destroy: function () {
            var e,
              t,
              n = this;
            n.a11y.liveRegion &&
              0 < n.a11y.liveRegion.length &&
              n.a11y.liveRegion.remove(),
              n.navigation &&
                n.navigation.$nextEl &&
                (e = n.navigation.$nextEl),
              n.navigation &&
                n.navigation.$prevEl &&
                (t = n.navigation.$prevEl),
              e && e.off("keydown", n.a11y.onEnterKey),
              t && t.off("keydown", n.a11y.onEnterKey),
              n.pagination &&
                n.params.pagination.clickable &&
                n.pagination.bullets &&
                n.pagination.bullets.length &&
                n.pagination.$el.off(
                  "keydown",
                  "." + n.params.pagination.bulletClass,
                  n.a11y.onEnterKey
                );
          },
        },
        V = {
          init: function () {
            var e = this;
            if (e.params.history) {
              if (!t.history || !t.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              var n = e.history;
              (n.initialized = !0),
                (n.paths = V.getPathValues()),
                (n.paths.key || n.paths.value) &&
                  (n.scrollToSlide(
                    0,
                    n.paths.value,
                    e.params.runCallbacksOnInit
                  ),
                  e.params.history.replaceState ||
                    t.addEventListener(
                      "popstate",
                      e.history.setHistoryPopState
                    ));
            }
          },
          destroy: function () {
            this.params.history.replaceState ||
              t.removeEventListener(
                "popstate",
                this.history.setHistoryPopState
              );
          },
          setHistoryPopState: function () {
            (this.history.paths = V.getPathValues()),
              this.history.scrollToSlide(
                this.params.speed,
                this.history.paths.value,
                !1
              );
          },
          getPathValues: function () {
            var e = t.location.pathname
                .slice(1)
                .split("/")
                .filter(function (e) {
                  return "" !== e;
                }),
              n = e.length;
            return { key: e[n - 2], value: e[n - 1] };
          },
          setHistory: function (e, n) {
            if (this.history.initialized && this.params.history.enabled) {
              var i = this.slides.eq(n),
                r = V.slugify(i.attr("data-history"));
              t.location.pathname.includes(e) || (r = e + "/" + r);
              var a = t.history.state;
              (a && a.value === r) ||
                (this.params.history.replaceState
                  ? t.history.replaceState({ value: r }, null, r)
                  : t.history.pushState({ value: r }, null, r));
            }
          },
          slugify: function (e) {
            return e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "");
          },
          scrollToSlide: function (e, t, n) {
            var i = this;
            if (t)
              for (var r = 0, a = i.slides.length; r < a; r += 1) {
                var s = i.slides.eq(r);
                if (
                  V.slugify(s.attr("data-history")) === t &&
                  !s.hasClass(i.params.slideDuplicateClass)
                ) {
                  var o = s.index();
                  i.slideTo(o, e, n);
                }
              }
            else i.slideTo(0, e, n);
          },
        },
        Y = {
          onHashCange: function () {
            var t = this,
              n = e.location.hash.replace("#", "");
            if (n !== t.slides.eq(t.activeIndex).attr("data-hash")) {
              var i = t.$wrapperEl
                .children("." + t.params.slideClass + '[data-hash="' + n + '"]')
                .index();
              if (void 0 === i) return;
              t.slideTo(i);
            }
          },
          setHash: function () {
            var n = this;
            if (n.hashNavigation.initialized && n.params.hashNavigation.enabled)
              if (
                n.params.hashNavigation.replaceState &&
                t.history &&
                t.history.replaceState
              )
                t.history.replaceState(
                  null,
                  null,
                  "#" + n.slides.eq(n.activeIndex).attr("data-hash") || !1
                );
              else {
                var i = n.slides.eq(n.activeIndex),
                  r = i.attr("data-hash") || i.attr("data-history");
                e.location.hash = r || "";
              }
          },
          init: function () {
            var n = this;
            if (
              !(
                !n.params.hashNavigation.enabled ||
                (n.params.history && n.params.history.enabled)
              )
            ) {
              n.hashNavigation.initialized = !0;
              var r = e.location.hash.replace("#", "");
              if (r)
                for (var a = 0, s = n.slides.length; a < s; a += 1) {
                  var o = n.slides.eq(a);
                  if (
                    (o.attr("data-hash") || o.attr("data-history")) === r &&
                    !o.hasClass(n.params.slideDuplicateClass)
                  ) {
                    var l = o.index();
                    n.slideTo(l, 0, n.params.runCallbacksOnInit, !0);
                  }
                }
              n.params.hashNavigation.watchState &&
                i(t).on("hashchange", n.hashNavigation.onHashCange);
            }
          },
          destroy: function () {
            this.params.hashNavigation.watchState &&
              i(t).off("hashchange", this.hashNavigation.onHashCange);
          },
        },
        _ = {
          run: function () {
            var e = this,
              t = e.slides.eq(e.activeIndex),
              n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              (e.autoplay.timeout = d.nextTick(function () {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
              }, n));
          },
          start: function () {
            var e = this;
            return (
              void 0 === e.autoplay.timeout &&
              !e.autoplay.running &&
              ((e.autoplay.running = !0),
              e.emit("autoplayStart"),
              e.autoplay.run(),
              !0)
            );
          },
          stop: function () {
            var e = this;
            return (
              !!e.autoplay.running &&
              void 0 !== e.autoplay.timeout &&
              (e.autoplay.timeout &&
                (clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = void 0)),
              (e.autoplay.running = !1),
              e.emit("autoplayStop"),
              !0)
            );
          },
          pause: function (e) {
            var t = this;
            t.autoplay.running &&
              (t.autoplay.paused ||
                (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                (t.autoplay.paused = !0),
                0 !== e && t.params.autoplay.waitForTransition
                  ? (t.$wrapperEl[0].addEventListener(
                      "transitionend",
                      t.autoplay.onTransitionEnd
                    ),
                    t.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      t.autoplay.onTransitionEnd
                    ))
                  : ((t.autoplay.paused = !1), t.autoplay.run())));
          },
        },
        U = {
          setTranslate: function () {
            for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
              var i = e.slides.eq(n),
                r = -i[0].swiperSlideOffset;
              e.params.virtualTranslate || (r -= e.translate);
              var a = 0;
              e.isHorizontal() || ((a = r), (r = 0));
              var s = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(i[0].progress), 0)
                : 1 + Math.min(Math.max(i[0].progress, -1), 0);
              i.css({ opacity: s }).transform(
                "translate3d(" + r + "px, " + a + "px, 0px)"
              );
            }
          },
          setTransition: function (e) {
            var t = this,
              n = t.slides,
              i = t.$wrapperEl;
            if ((n.transition(e), t.params.virtualTranslate && 0 !== e)) {
              var r = !1;
              n.transitionEnd(function () {
                if (!r && t && !t.destroyed) {
                  (r = !0), (t.animating = !1);
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], n = 0;
                    n < e.length;
                    n += 1
                  )
                    i.trigger(e[n]);
                }
              });
            }
          },
        },
        K = {
          setTranslate: function () {
            var e,
              t = this,
              n = t.$el,
              r = t.$wrapperEl,
              a = t.slides,
              s = t.width,
              o = t.height,
              l = t.rtlTranslate,
              u = t.size,
              d = t.params.cubeEffect,
              c = t.isHorizontal(),
              f = t.virtual && t.params.virtual.enabled,
              h = 0;
            d.shadow &&
              (c
                ? (0 === (e = r.find(".swiper-cube-shadow")).length &&
                    ((e = i('<div class="swiper-cube-shadow"></div>')),
                    r.append(e)),
                  e.css({ height: s + "px" }))
                : 0 === (e = n.find(".swiper-cube-shadow")).length &&
                  ((e = i('<div class="swiper-cube-shadow"></div>')),
                  n.append(e)));
            for (var v = 0; v < a.length; v += 1) {
              var g = a.eq(v),
                m = v;
              f && (m = parseInt(g.attr("data-swiper-slide-index"), 10));
              var y = 90 * m,
                b = Math.floor(y / 360);
              l && ((y = -y), (b = Math.floor(-y / 360)));
              var w = Math.max(Math.min(g[0].progress, 1), -1),
                x = 0,
                E = 0,
                T = 0;
              m % 4 == 0
                ? ((x = 4 * -b * u), (T = 0))
                : (m - 1) % 4 == 0
                ? ((x = 0), (T = 4 * -b * u))
                : (m - 2) % 4 == 0
                ? ((x = u + 4 * b * u), (T = u))
                : (m - 3) % 4 == 0 && ((x = -u), (T = 3 * u + 4 * u * b)),
                l && (x = -x),
                c || ((E = x), (x = 0));
              var S =
                "rotateX(" +
                (c ? 0 : -y) +
                "deg) rotateY(" +
                (c ? y : 0) +
                "deg) translate3d(" +
                x +
                "px, " +
                E +
                "px, " +
                T +
                "px)";
              if (
                (w <= 1 &&
                  -1 < w &&
                  ((h = 90 * m + 90 * w), l && (h = 90 * -m - 90 * w)),
                g.transform(S),
                d.slideShadows)
              ) {
                var C = c
                    ? g.find(".swiper-slide-shadow-left")
                    : g.find(".swiper-slide-shadow-top"),
                  k = c
                    ? g.find(".swiper-slide-shadow-right")
                    : g.find(".swiper-slide-shadow-bottom");
                0 === C.length &&
                  ((C = i(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "left" : "top") +
                      '"></div>'
                  )),
                  g.append(C)),
                  0 === k.length &&
                    ((k = i(
                      '<div class="swiper-slide-shadow-' +
                        (c ? "right" : "bottom") +
                        '"></div>'
                    )),
                    g.append(k)),
                  C.length && (C[0].style.opacity = Math.max(-w, 0)),
                  k.length && (k[0].style.opacity = Math.max(w, 0));
              }
            }
            if (
              (r.css({
                "-webkit-transform-origin": "50% 50% -" + u / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + u / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + u / 2 + "px",
                "transform-origin": "50% 50% -" + u / 2 + "px",
              }),
              d.shadow)
            )
              if (c)
                e.transform(
                  "translate3d(0px, " +
                    (s / 2 + d.shadowOffset) +
                    "px, " +
                    -s / 2 +
                    "px) rotateX(90deg) rotateZ(0deg) scale(" +
                    d.shadowScale +
                    ")"
                );
              else {
                var P = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  M =
                    1.5 -
                    (Math.sin((2 * P * Math.PI) / 360) / 2 +
                      Math.cos((2 * P * Math.PI) / 360) / 2),
                  L = d.shadowScale,
                  A = d.shadowScale / M,
                  D = d.shadowOffset;
                e.transform(
                  "scale3d(" +
                    L +
                    ", 1, " +
                    A +
                    ") translate3d(0px, " +
                    (o / 2 + D) +
                    "px, " +
                    -o / 2 / A +
                    "px) rotateX(-90deg)"
                );
              }
            var z = p.isSafari || p.isUiWebView ? -u / 2 : 0;
            r.transform(
              "translate3d(0px,0," +
                z +
                "px) rotateX(" +
                (t.isHorizontal() ? 0 : h) +
                "deg) rotateY(" +
                (t.isHorizontal() ? -h : 0) +
                "deg)"
            );
          },
          setTransition: function (e) {
            var t = this.$el;
            this.slides
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              this.params.cubeEffect.shadow &&
                !this.isHorizontal() &&
                t.find(".swiper-cube-shadow").transition(e);
          },
        },
        Q = {
          setTranslate: function () {
            for (
              var e = this, t = e.slides, n = e.rtlTranslate, r = 0;
              r < t.length;
              r += 1
            ) {
              var a = t.eq(r),
                s = a[0].progress;
              e.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(a[0].progress, 1), -1));
              var o = -180 * s,
                l = 0,
                u = -a[0].swiperSlideOffset,
                d = 0;
              if (
                (e.isHorizontal()
                  ? n && (o = -o)
                  : ((d = u), (l = -o), (o = u = 0)),
                (a[0].style.zIndex = -Math.abs(Math.round(s)) + t.length),
                e.params.flipEffect.slideShadows)
              ) {
                var c = e.isHorizontal()
                    ? a.find(".swiper-slide-shadow-left")
                    : a.find(".swiper-slide-shadow-top"),
                  p = e.isHorizontal()
                    ? a.find(".swiper-slide-shadow-right")
                    : a.find(".swiper-slide-shadow-bottom");
                0 === c.length &&
                  ((c = i(
                    '<div class="swiper-slide-shadow-' +
                      (e.isHorizontal() ? "left" : "top") +
                      '"></div>'
                  )),
                  a.append(c)),
                  0 === p.length &&
                    ((p = i(
                      '<div class="swiper-slide-shadow-' +
                        (e.isHorizontal() ? "right" : "bottom") +
                        '"></div>'
                    )),
                    a.append(p)),
                  c.length && (c[0].style.opacity = Math.max(-s, 0)),
                  p.length && (p[0].style.opacity = Math.max(s, 0));
              }
              a.transform(
                "translate3d(" +
                  u +
                  "px, " +
                  d +
                  "px, 0px) rotateX(" +
                  l +
                  "deg) rotateY(" +
                  o +
                  "deg)"
              );
            }
          },
          setTransition: function (e) {
            var t = this,
              n = t.slides,
              i = t.activeIndex,
              r = t.$wrapperEl;
            if (
              (n
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
              t.params.virtualTranslate && 0 !== e)
            ) {
              var a = !1;
              n.eq(i).transitionEnd(function () {
                if (!a && t && !t.destroyed) {
                  (a = !0), (t.animating = !1);
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], n = 0;
                    n < e.length;
                    n += 1
                  )
                    r.trigger(e[n]);
                }
              });
            }
          },
        },
        J = {
          setTranslate: function () {
            for (
              var e = this,
                t = e.width,
                n = e.height,
                r = e.slides,
                a = e.$wrapperEl,
                s = e.slidesSizesGrid,
                o = e.params.coverflowEffect,
                l = e.isHorizontal(),
                u = e.translate,
                d = l ? t / 2 - u : n / 2 - u,
                p = l ? o.rotate : -o.rotate,
                f = o.depth,
                h = 0,
                v = r.length;
              h < v;
              h += 1
            ) {
              var g = r.eq(h),
                m = s[h],
                y = ((d - g[0].swiperSlideOffset - m / 2) / m) * o.modifier,
                b = l ? p * y : 0,
                w = l ? 0 : p * y,
                x = -f * Math.abs(y),
                E = l ? 0 : o.stretch * y,
                T = l ? o.stretch * y : 0;
              Math.abs(T) < 0.001 && (T = 0),
                Math.abs(E) < 0.001 && (E = 0),
                Math.abs(x) < 0.001 && (x = 0),
                Math.abs(b) < 0.001 && (b = 0),
                Math.abs(w) < 0.001 && (w = 0);
              var S =
                "translate3d(" +
                T +
                "px," +
                E +
                "px," +
                x +
                "px)  rotateX(" +
                w +
                "deg) rotateY(" +
                b +
                "deg)";
              if (
                (g.transform(S),
                (g[0].style.zIndex = 1 - Math.abs(Math.round(y))),
                o.slideShadows)
              ) {
                var C = l
                    ? g.find(".swiper-slide-shadow-left")
                    : g.find(".swiper-slide-shadow-top"),
                  k = l
                    ? g.find(".swiper-slide-shadow-right")
                    : g.find(".swiper-slide-shadow-bottom");
                0 === C.length &&
                  ((C = i(
                    '<div class="swiper-slide-shadow-' +
                      (l ? "left" : "top") +
                      '"></div>'
                  )),
                  g.append(C)),
                  0 === k.length &&
                    ((k = i(
                      '<div class="swiper-slide-shadow-' +
                        (l ? "right" : "bottom") +
                        '"></div>'
                    )),
                    g.append(k)),
                  C.length && (C[0].style.opacity = 0 < y ? y : 0),
                  k.length && (k[0].style.opacity = 0 < -y ? -y : 0);
              }
            }
            (c.pointerEvents || c.prefixedPointerEvents) &&
              (a[0].style.perspectiveOrigin = d + "px 50%");
          },
          setTransition: function (e) {
            this.slides
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
          },
        },
        Z = {
          init: function () {
            var e = this,
              t = e.params.thumbs,
              n = e.constructor;
            t.swiper instanceof n
              ? ((e.thumbs.swiper = t.swiper),
                d.extend(e.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                d.extend(e.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }))
              : d.isObject(t.swiper) &&
                ((e.thumbs.swiper = new n(
                  d.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  })
                )),
                (e.thumbs.swiperCreated = !0)),
              e.thumbs.swiper.$el.addClass(
                e.params.thumbs.thumbsContainerClass
              ),
              e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
          },
          onThumbClick: function () {
            var e = this,
              t = e.thumbs.swiper;
            if (t) {
              var n = t.clickedIndex,
                r = t.clickedSlide;
              if (
                !(
                  (r && i(r).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
                  null == n
                )
              ) {
                var a;
                if (
                  ((a = t.params.loop
                    ? parseInt(
                        i(t.clickedSlide).attr("data-swiper-slide-index"),
                        10
                      )
                    : n),
                  e.params.loop)
                ) {
                  var s = e.activeIndex;
                  e.slides.eq(s).hasClass(e.params.slideDuplicateClass) &&
                    (e.loopFix(),
                    (e._clientLeft = e.$wrapperEl[0].clientLeft),
                    (s = e.activeIndex));
                  var o = e.slides
                      .eq(s)
                      .prevAll('[data-swiper-slide-index="' + a + '"]')
                      .eq(0)
                      .index(),
                    l = e.slides
                      .eq(s)
                      .nextAll('[data-swiper-slide-index="' + a + '"]')
                      .eq(0)
                      .index();
                  a =
                    void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o;
                }
                e.slideTo(a);
              }
            }
          },
          update: function (e) {
            var t = this,
              n = t.thumbs.swiper;
            if (n) {
              var i =
                "auto" === n.params.slidesPerView
                  ? n.slidesPerViewDynamic()
                  : n.params.slidesPerView;
              if (t.realIndex !== n.realIndex) {
                var r,
                  a = n.activeIndex;
                if (n.params.loop) {
                  n.slides.eq(a).hasClass(n.params.slideDuplicateClass) &&
                    (n.loopFix(),
                    (n._clientLeft = n.$wrapperEl[0].clientLeft),
                    (a = n.activeIndex));
                  var s = n.slides
                      .eq(a)
                      .prevAll(
                        '[data-swiper-slide-index="' + t.realIndex + '"]'
                      )
                      .eq(0)
                      .index(),
                    o = n.slides
                      .eq(a)
                      .nextAll(
                        '[data-swiper-slide-index="' + t.realIndex + '"]'
                      )
                      .eq(0)
                      .index();
                  r =
                    void 0 === s
                      ? o
                      : void 0 === o
                      ? s
                      : o - a == a - s
                      ? a
                      : o - a < a - s
                      ? o
                      : s;
                } else r = t.realIndex;
                n.visibleSlidesIndexes.indexOf(r) < 0 &&
                  (n.params.centeredSlides
                    ? (r =
                        a < r
                          ? r - Math.floor(i / 2) + 1
                          : r + Math.floor(i / 2) - 1)
                    : a < r && (r = r - i + 1),
                  n.slideTo(r, e ? 0 : void 0));
              }
              var l = 1,
                u = t.params.thumbs.slideThumbActiveClass;
              if (
                (1 < t.params.slidesPerView &&
                  !t.params.centeredSlides &&
                  (l = t.params.slidesPerView),
                n.slides.removeClass(u),
                n.params.loop)
              )
                for (var d = 0; d < l; d += 1)
                  n.$wrapperEl
                    .children(
                      '[data-swiper-slide-index="' + (t.realIndex + d) + '"]'
                    )
                    .addClass(u);
              else
                for (var c = 0; c < l; c += 1)
                  n.slides.eq(t.realIndex + c).addClass(u);
            }
          },
        },
        ee = [
          P,
          M,
          L,
          A,
          z,
          I,
          $,
          {
            name: "mousewheel",
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container",
              },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                mousewheel: {
                  enabled: !1,
                  enable: R.enable.bind(e),
                  disable: R.disable.bind(e),
                  handle: R.handle.bind(e),
                  handleMouseEnter: R.handleMouseEnter.bind(e),
                  handleMouseLeave: R.handleMouseLeave.bind(e),
                  lastScrollTime: d.now(),
                },
              });
            },
            on: {
              init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable();
              },
              destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable();
              },
            },
          },
          {
            name: "navigation",
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
              },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                navigation: {
                  init: j.init.bind(e),
                  update: j.update.bind(e),
                  destroy: j.destroy.bind(e),
                  onNextClick: j.onNextClick.bind(e),
                  onPrevClick: j.onPrevClick.bind(e),
                },
              });
            },
            on: {
              init: function () {
                this.navigation.init(), this.navigation.update();
              },
              toEdge: function () {
                this.navigation.update();
              },
              fromEdge: function () {
                this.navigation.update();
              },
              destroy: function () {
                this.navigation.destroy();
              },
              click: function (e) {
                var t,
                  n = this,
                  r = n.navigation,
                  a = r.$nextEl,
                  s = r.$prevEl;
                !n.params.navigation.hideOnClick ||
                  i(e.target).is(s) ||
                  i(e.target).is(a) ||
                  (a
                    ? (t = a.hasClass(n.params.navigation.hiddenClass))
                    : s && (t = s.hasClass(n.params.navigation.hiddenClass)),
                  !0 === t
                    ? n.emit("navigationShow", n)
                    : n.emit("navigationHide", n),
                  a && a.toggleClass(n.params.navigation.hiddenClass),
                  s && s.toggleClass(n.params.navigation.hiddenClass));
              },
            },
          },
          {
            name: "pagination",
            params: {
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                  return e;
                },
                formatFractionTotal: function (e) {
                  return e;
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass:
                  "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock",
              },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                pagination: {
                  init: H.init.bind(e),
                  render: H.render.bind(e),
                  update: H.update.bind(e),
                  destroy: H.destroy.bind(e),
                  dynamicBulletIndex: 0,
                },
              });
            },
            on: {
              init: function () {
                this.pagination.init(),
                  this.pagination.render(),
                  this.pagination.update();
              },
              activeIndexChange: function () {
                this.params.loop
                  ? this.pagination.update()
                  : void 0 === this.snapIndex && this.pagination.update();
              },
              snapIndexChange: function () {
                this.params.loop || this.pagination.update();
              },
              slidesLengthChange: function () {
                this.params.loop &&
                  (this.pagination.render(), this.pagination.update());
              },
              snapGridLengthChange: function () {
                this.params.loop ||
                  (this.pagination.render(), this.pagination.update());
              },
              destroy: function () {
                this.pagination.destroy();
              },
              click: function (e) {
                var t = this;
                t.params.pagination.el &&
                  t.params.pagination.hideOnClick &&
                  0 < t.pagination.$el.length &&
                  !i(e.target).hasClass(t.params.pagination.bulletClass) &&
                  (!0 ===
                  t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                    ? t.emit("paginationShow", t)
                    : t.emit("paginationHide", t),
                  t.pagination.$el.toggleClass(
                    t.params.pagination.hiddenClass
                  ));
              },
            },
          },
          {
            name: "scrollbar",
            params: {
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
              },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                scrollbar: {
                  init: q.init.bind(e),
                  destroy: q.destroy.bind(e),
                  updateSize: q.updateSize.bind(e),
                  setTranslate: q.setTranslate.bind(e),
                  setTransition: q.setTransition.bind(e),
                  enableDraggable: q.enableDraggable.bind(e),
                  disableDraggable: q.disableDraggable.bind(e),
                  setDragPosition: q.setDragPosition.bind(e),
                  onDragStart: q.onDragStart.bind(e),
                  onDragMove: q.onDragMove.bind(e),
                  onDragEnd: q.onDragEnd.bind(e),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null,
                },
              });
            },
            on: {
              init: function () {
                this.scrollbar.init(),
                  this.scrollbar.updateSize(),
                  this.scrollbar.setTranslate();
              },
              update: function () {
                this.scrollbar.updateSize();
              },
              resize: function () {
                this.scrollbar.updateSize();
              },
              observerUpdate: function () {
                this.scrollbar.updateSize();
              },
              setTranslate: function () {
                this.scrollbar.setTranslate();
              },
              setTransition: function (e) {
                this.scrollbar.setTransition(e);
              },
              destroy: function () {
                this.scrollbar.destroy();
              },
            },
          },
          {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create: function () {
              d.extend(this, {
                parallax: {
                  setTransform: B.setTransform.bind(this),
                  setTranslate: B.setTranslate.bind(this),
                  setTransition: B.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                this.params.parallax.enabled &&
                  ((this.params.watchSlidesProgress = !0),
                  (this.originalParams.watchSlidesProgress = !0));
              },
              init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e);
              },
            },
          },
          {
            name: "zoom",
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            },
            create: function () {
              var e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0,
                  },
                };
              "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                .split(" ")
                .forEach(function (n) {
                  t[n] = F[n].bind(e);
                }),
                d.extend(e, { zoom: t });
              var n = 1;
              Object.defineProperty(e.zoom, "scale", {
                get: function () {
                  return n;
                },
                set: function (t) {
                  if (n !== t) {
                    var i = e.zoom.gesture.$imageEl
                        ? e.zoom.gesture.$imageEl[0]
                        : void 0,
                      r = e.zoom.gesture.$slideEl
                        ? e.zoom.gesture.$slideEl[0]
                        : void 0;
                    e.emit("zoomChange", t, i, r);
                  }
                  n = t;
                },
              });
            },
            on: {
              init: function () {
                this.params.zoom.enabled && this.zoom.enable();
              },
              destroy: function () {
                this.zoom.disable();
              },
              touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
              },
              touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
              },
              doubleTap: function (e) {
                this.params.zoom.enabled &&
                  this.zoom.enabled &&
                  this.params.zoom.toggle &&
                  this.zoom.toggle(e);
              },
              transitionEnd: function () {
                this.zoom.enabled &&
                  this.params.zoom.enabled &&
                  this.zoom.onTransitionEnd();
              },
            },
          },
          {
            name: "lazy",
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader",
              },
            },
            create: function () {
              d.extend(this, {
                lazy: {
                  initialImageLoaded: !1,
                  load: G.load.bind(this),
                  loadInSlide: G.loadInSlide.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                this.params.lazy.enabled &&
                  this.params.preloadImages &&
                  (this.params.preloadImages = !1);
              },
              init: function () {
                this.params.lazy.enabled &&
                  !this.params.loop &&
                  0 === this.params.initialSlide &&
                  this.lazy.load();
              },
              scroll: function () {
                this.params.freeMode &&
                  !this.params.freeModeSticky &&
                  this.lazy.load();
              },
              resize: function () {
                this.params.lazy.enabled && this.lazy.load();
              },
              scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load();
              },
              transitionStart: function () {
                var e = this;
                e.params.lazy.enabled &&
                  (e.params.lazy.loadOnTransitionStart ||
                    (!e.params.lazy.loadOnTransitionStart &&
                      !e.lazy.initialImageLoaded)) &&
                  e.lazy.load();
              },
              transitionEnd: function () {
                this.params.lazy.enabled &&
                  !this.params.lazy.loadOnTransitionStart &&
                  this.lazy.load();
              },
            },
          },
          {
            name: "controller",
            params: {
              controller: { control: void 0, inverse: !1, by: "slide" },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                controller: {
                  control: e.params.controller.control,
                  getInterpolateFunction: X.getInterpolateFunction.bind(e),
                  setTranslate: X.setTranslate.bind(e),
                  setTransition: X.setTransition.bind(e),
                },
              });
            },
            on: {
              update: function () {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              resize: function () {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              observerUpdate: function () {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t);
              },
              setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t);
              },
            },
          },
          {
            name: "a11y",
            params: {
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
              },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                a11y: {
                  liveRegion: i(
                    '<span class="' +
                      e.params.a11y.notificationClass +
                      '" aria-live="assertive" aria-atomic="true"></span>'
                  ),
                },
              }),
                Object.keys(W).forEach(function (t) {
                  e.a11y[t] = W[t].bind(e);
                });
            },
            on: {
              init: function () {
                this.params.a11y.enabled &&
                  (this.a11y.init(), this.a11y.updateNavigation());
              },
              toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination();
              },
              destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy();
              },
            },
          },
          {
            name: "history",
            params: {
              history: { enabled: !1, replaceState: !1, key: "slides" },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                history: {
                  init: V.init.bind(e),
                  setHistory: V.setHistory.bind(e),
                  setHistoryPopState: V.setHistoryPopState.bind(e),
                  scrollToSlide: V.scrollToSlide.bind(e),
                  destroy: V.destroy.bind(e),
                },
              });
            },
            on: {
              init: function () {
                this.params.history.enabled && this.history.init();
              },
              destroy: function () {
                this.params.history.enabled && this.history.destroy();
              },
              transitionEnd: function () {
                this.history.initialized &&
                  this.history.setHistory(
                    this.params.history.key,
                    this.activeIndex
                  );
              },
            },
          },
          {
            name: "hash-navigation",
            params: {
              hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                hashNavigation: {
                  initialized: !1,
                  init: Y.init.bind(e),
                  destroy: Y.destroy.bind(e),
                  setHash: Y.setHash.bind(e),
                  onHashCange: Y.onHashCange.bind(e),
                },
              });
            },
            on: {
              init: function () {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.init();
              },
              destroy: function () {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.destroy();
              },
              transitionEnd: function () {
                this.hashNavigation.initialized &&
                  this.hashNavigation.setHash();
              },
            },
          },
          {
            name: "autoplay",
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
              },
            },
            create: function () {
              var e = this;
              d.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: _.run.bind(e),
                  start: _.start.bind(e),
                  stop: _.stop.bind(e),
                  pause: _.pause.bind(e),
                  onTransitionEnd: function (t) {
                    e &&
                      !e.destroyed &&
                      e.$wrapperEl &&
                      t.target === this &&
                      (e.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        e.autoplay.onTransitionEnd
                      ),
                      e.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        e.autoplay.onTransitionEnd
                      ),
                      (e.autoplay.paused = !1),
                      e.autoplay.running
                        ? e.autoplay.run()
                        : e.autoplay.stop());
                  },
                },
              });
            },
            on: {
              init: function () {
                this.params.autoplay.enabled && this.autoplay.start();
              },
              beforeTransitionStart: function (e, t) {
                this.autoplay.running &&
                  (t || !this.params.autoplay.disableOnInteraction
                    ? this.autoplay.pause(e)
                    : this.autoplay.stop());
              },
              sliderFirstMove: function () {
                this.autoplay.running &&
                  (this.params.autoplay.disableOnInteraction
                    ? this.autoplay.stop()
                    : this.autoplay.pause());
              },
              destroy: function () {
                this.autoplay.running && this.autoplay.stop();
              },
            },
          },
          {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function () {
              d.extend(this, {
                fadeEffect: {
                  setTranslate: U.setTranslate.bind(this),
                  setTransition: U.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if ("fade" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "fade");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  d.extend(e.params, t), d.extend(e.originalParams, t);
                }
              },
              setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate();
              },
              setTransition: function (e) {
                "fade" === this.params.effect &&
                  this.fadeEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-cube",
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            },
            create: function () {
              d.extend(this, {
                cubeEffect: {
                  setTranslate: K.setTranslate.bind(this),
                  setTransition: K.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if ("cube" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  };
                  d.extend(e.params, t), d.extend(e.originalParams, t);
                }
              },
              setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate();
              },
              setTransition: function (e) {
                "cube" === this.params.effect &&
                  this.cubeEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function () {
              d.extend(this, {
                flipEffect: {
                  setTranslate: Q.setTranslate.bind(this),
                  setTransition: Q.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if ("flip" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  d.extend(e.params, t), d.extend(e.originalParams, t);
                }
              },
              setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate();
              },
              setTransition: function (e) {
                "flip" === this.params.effect &&
                  this.flipEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-coverflow",
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0,
              },
            },
            create: function () {
              d.extend(this, {
                coverflowEffect: {
                  setTranslate: J.setTranslate.bind(this),
                  setTransition: J.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect &&
                  (e.classNames.push(
                    e.params.containerModifierClass + "coverflow"
                  ),
                  e.classNames.push(e.params.containerModifierClass + "3d"),
                  (e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
              },
              setTranslate: function () {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTranslate();
              },
              setTransition: function (e) {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTransition(e);
              },
            },
          },
          {
            name: "thumbs",
            params: {
              thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs",
              },
            },
            create: function () {
              d.extend(this, {
                thumbs: {
                  swiper: null,
                  init: Z.init.bind(this),
                  update: Z.update.bind(this),
                  onThumbClick: Z.onThumbClick.bind(this),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
              },
              slideChange: function () {
                this.thumbs.swiper && this.thumbs.update();
              },
              update: function () {
                this.thumbs.swiper && this.thumbs.update();
              },
              resize: function () {
                this.thumbs.swiper && this.thumbs.update();
              },
              observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update();
              },
              setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e);
              },
              beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
              },
            },
          },
        ];
      return (
        void 0 === k.use &&
          ((k.use = k.Class.use), (k.installModule = k.Class.installModule)),
        k.use(ee),
        k
      );
    })();
  },
  bEqN: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n("EVdn"),
      r = n.n(i),
      a = n("VyCv"),
      s = n.n(a),
      o = n("zSlN"),
      l = n.n(o),
      u = n("uvZ8"),
      d = n.n(u);
    (window.$ = window.jQuery = r.a),
      (window.Swiper = s.a),
      (window.ScrollMagic = l.a),
      (window.barba = d.a);
  },
  uvZ8: function (e, t, n) {
    e.exports = (function () {
      var e = (function () {
        function e() {}
        return (
          (e.prototype.then = function (n, i) {
            var r = new e(),
              a = this.s;
            if (a) {
              var s = 1 & a ? n : i;
              if (s) {
                try {
                  t(r, 1, s(this.v));
                } catch (e) {
                  t(r, 2, e);
                }
                return r;
              }
              return this;
            }
            return (
              (this.o = function (e) {
                try {
                  var a = e.v;
                  1 & e.s
                    ? t(r, 1, n ? n(a) : a)
                    : i
                    ? t(r, 1, i(a))
                    : t(r, 2, a);
                } catch (e) {
                  t(r, 2, e);
                }
              }),
              r
            );
          }),
          e
        );
      })();
      function t(n, i, r) {
        if (!n.s) {
          if (r instanceof e) {
            if (!r.s) return void (r.o = t.bind(null, n, i));
            1 & i && (i = r.s), (r = r.v);
          }
          if (r && r.then)
            return void r.then(t.bind(null, n, i), t.bind(null, n, 2));
          (n.s = i), (n.v = r);
          var a = n.o;
          a && a(n);
        }
      }
      function n(e, t) {
        try {
          var n = e();
        } catch (e) {
          return t(e);
        }
        return n && n.then ? n.then(void 0, t) : n;
      }
      var i = {};
      !(function () {
        function n(e) {
          (this.t = e),
            (this.i = null),
            (this.u = null),
            (this.h = null),
            (this.l = null);
        }
        function r(e) {
          return { value: e, done: !0 };
        }
        function a(e) {
          return { value: e, done: !1 };
        }
        (n.prototype[
          Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))
        ] = function () {
          return this;
        }),
          (n.prototype.p = function (t) {
            return this.u(t && t.then ? t.then(a) : a(t)), (this.i = new e());
          }),
          (n.prototype.next = function (n) {
            var a = this;
            return (a.l = new Promise(function (s) {
              var o = a.i;
              if (null === o) {
                var l = a.t;
                if (null === l) return s(a.l);
                function u(e) {
                  a.u(e && e.then ? e.then(r) : r(e)),
                    (a.i = null),
                    (a.u = null);
                }
                (a.t = null),
                  (a.u = s),
                  l(a).then(u, function (t) {
                    if (t === i) u(a.h);
                    else {
                      var n = new e();
                      a.u(n), (a.i = null), (a.u = null), _resolve(n, 2, t);
                    }
                  });
              } else (a.i = null), (a.u = s), t(o, 1, n);
            }));
          }),
          (n.prototype.return = function (e) {
            var n = this;
            return (n.l = new Promise(function (a) {
              var s = n.i;
              if (null === s)
                return null === n.t
                  ? a(n.l)
                  : ((n.t = null), a(e && e.then ? e.then(r) : r(e)));
              (n.h = e), (n.u = a), (n.i = null), t(s, 2, i);
            }));
          }),
          (n.prototype.throw = function (e) {
            var n = this;
            return (n.l = new Promise(function (i, r) {
              var a = n.i;
              if (null === a)
                return null === n.t ? i(n.l) : ((n.t = null), r(e));
              (n.u = i), (n.i = null), t(a, 2, e);
            }));
          });
      })();
      var r,
        a,
        s =
          ((function (e) {
            var t = (e.exports = function (e, t) {
              return (
                (t = t || function () {}),
                function () {
                  var n = !1,
                    i = arguments,
                    r = new Promise(function (t, r) {
                      var a,
                        s = e.apply(
                          {
                            async: function () {
                              return (
                                (n = !0),
                                function (e, n) {
                                  e ? r(e) : t(n);
                                }
                              );
                            },
                          },
                          Array.prototype.slice.call(i)
                        );
                      n ||
                        (!(a = s) ||
                        ("object" != typeof a && "function" != typeof a) ||
                        "function" != typeof a.then
                          ? t(s)
                          : s.then(t, r));
                    });
                  return r.then(t.bind(null, null), t), r;
                }
              );
            });
            t.cb = function (e, n) {
              return t(function () {
                var t = Array.prototype.slice.call(arguments);
                return (
                  t.length === e.length - 1 && t.push(this.async()),
                  e.apply(this, t)
                );
              }, n);
            };
          })((r = { exports: {} })),
          r.exports);
      !(function (e) {
        (e[(e.off = 0)] = "off"),
          (e[(e.error = 1)] = "error"),
          (e[(e.warning = 2)] = "warning"),
          (e[(e.info = 3)] = "info"),
          (e[(e.debug = 4)] = "debug");
      })(a || (a = {}));
      var o = a.off,
        l = function (e) {
          this.m = e;
        };
      (l.getLevel = function () {
        return o;
      }),
        (l.setLevel = function (e) {
          return (o = a[e]);
        }),
        (l.prototype.print = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          this.P(console.info, a.off, e);
        }),
        (l.prototype.error = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          this.P(console.error, a.error, e);
        }),
        (l.prototype.warn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          this.P(console.warn, a.warning, e);
        }),
        (l.prototype.info = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          this.P(console.info, a.info, e);
        }),
        (l.prototype.debug = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          this.P(console.log, a.debug, e);
        }),
        (l.prototype.P = function (e, t, n) {
          t <= l.getLevel() &&
            e.apply(console, ["[" + this.m + "] "].concat(n));
        });
      var u = function () {
        (this.logger = new l("@barba/core")),
          (this.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeAppear",
            "appear",
            "afterAppear",
            "appearCanceled",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "leaveCanceled",
            "beforeEnter",
            "enter",
            "afterEnter",
            "enterCanceled",
            "after",
          ]),
          (this.registered = new Map()),
          this.init();
      };
      (u.prototype.init = function () {
        var e = this;
        this.registered.clear(),
          this.all.forEach(function (t) {
            e[t] ||
              (e[t] = function (n, i) {
                void 0 === i && (i = null),
                  e.registered.has(t) || e.registered.set(t, new Set()),
                  e.registered.get(t).add({ ctx: i, fn: n });
              });
          });
      }),
        (u.prototype.do = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
          if (this.registered.has(e)) {
            var i = Promise.resolve();
            return (
              this.registered.get(e).forEach(function (e) {
                var n = e.ctx ? e.fn.bind(e.ctx) : e.fn;
                i = i.then(function () {
                  return s(n).apply(void 0, t);
                });
              }),
              i
            );
          }
          return Promise.resolve();
        }),
        (u.prototype.clear = function () {
          var e = this;
          this.all.forEach(function (t) {
            delete e[t];
          }),
            this.init();
        }),
        (u.prototype.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var e = [];
          this.registered.forEach(function (t, n) {
            return e.push(n);
          }),
            this.logger.info("Registered hooks: " + e.join(","));
        });
      var d = new u(),
        c = function e(t, n, i) {
          return t instanceof RegExp
            ? (function (e, t) {
                if (!t) return e;
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var i = 0; i < n.length; i++)
                    t.push({
                      name: i,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      pattern: null,
                    });
                return e;
              })(t, n)
            : Array.isArray(t)
            ? (function (t, n, i) {
                for (var r = [], a = 0; a < t.length; a++)
                  r.push(e(t[a], n, i).source);
                return new RegExp("(?:" + r.join("|") + ")", x(i));
              })(t, n, i)
            : (function (e, t, n) {
                return E(m(e, n), t, n);
              })(t, n, i);
        },
        p = m,
        f = y,
        h = E,
        v = "/",
        g = new RegExp(
          [
            "(\\\\.)",
            "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
          ].join("|"),
          "g"
        );
      function m(e, t) {
        for (
          var n,
            i = [],
            r = 0,
            a = 0,
            s = "",
            o = (t && t.delimiter) || v,
            l = (t && t.whitelist) || void 0,
            u = !1;
          null !== (n = g.exec(e));

        ) {
          var d = n[0],
            c = n[1],
            p = n.index;
          if (((s += e.slice(a, p)), (a = p + d.length), c))
            (s += c[1]), (u = !0);
          else {
            var f = "",
              h = n[2],
              m = n[3],
              y = n[4],
              x = n[5];
            if (!u && s.length) {
              var E = s.length - 1,
                T = s[E];
              (!l || l.indexOf(T) > -1) && ((f = T), (s = s.slice(0, E)));
            }
            s && (i.push(s), (s = ""), (u = !1));
            var S = m || y,
              C = f || o;
            i.push({
              name: h || r++,
              prefix: f,
              delimiter: C,
              optional: "?" === x || "*" === x,
              repeat: "+" === x || "*" === x,
              pattern: S ? w(S) : "[^" + b(C === o ? C : C + o) + "]+?",
            });
          }
        }
        return (s || a < e.length) && i.push(s + e.substr(a)), i;
      }
      function y(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++)
          "object" == typeof e[n] &&
            (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
        return function (n, i) {
          for (
            var r = "", a = (i && i.encode) || encodeURIComponent, s = 0;
            s < e.length;
            s++
          ) {
            var o = e[s];
            if ("string" != typeof o) {
              var l,
                u = n ? n[o.name] : void 0;
              if (Array.isArray(u)) {
                if (!o.repeat)
                  throw new TypeError(
                    'Expected "' + o.name + '" to not repeat, but got array'
                  );
                if (0 === u.length) {
                  if (o.optional) continue;
                  throw new TypeError(
                    'Expected "' + o.name + '" to not be empty'
                  );
                }
                for (var d = 0; d < u.length; d++) {
                  if (((l = a(u[d], o)), !t[s].test(l)))
                    throw new TypeError(
                      'Expected all "' +
                        o.name +
                        '" to match "' +
                        o.pattern +
                        '"'
                    );
                  r += (0 === d ? o.prefix : o.delimiter) + l;
                }
              } else if (
                "string" != typeof u &&
                "number" != typeof u &&
                "boolean" != typeof u
              ) {
                if (!o.optional)
                  throw new TypeError(
                    'Expected "' +
                      o.name +
                      '" to be ' +
                      (o.repeat ? "an array" : "a string")
                  );
              } else {
                if (((l = a(String(u), o)), !t[s].test(l)))
                  throw new TypeError(
                    'Expected "' +
                      o.name +
                      '" to match "' +
                      o.pattern +
                      '", but got "' +
                      l +
                      '"'
                  );
                r += o.prefix + l;
              }
            } else r += o;
          }
          return r;
        };
      }
      function b(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function w(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function x(e) {
        return e && e.sensitive ? "" : "i";
      }
      function E(e, t, n) {
        for (
          var i = (n = n || {}).strict,
            r = !1 !== n.start,
            a = !1 !== n.end,
            s = n.delimiter || v,
            o = []
              .concat(n.endsWith || [])
              .map(b)
              .concat("$")
              .join("|"),
            l = r ? "^" : "",
            u = 0;
          u < e.length;
          u++
        ) {
          var d = e[u];
          if ("string" == typeof d) l += b(d);
          else {
            var c = d.repeat
              ? "(?:" +
                d.pattern +
                ")(?:" +
                b(d.delimiter) +
                "(?:" +
                d.pattern +
                "))*"
              : d.pattern;
            t && t.push(d),
              (l += d.optional
                ? d.prefix
                  ? "(?:" + b(d.prefix) + "(" + c + "))?"
                  : "(" + c + ")?"
                : b(d.prefix) + "(" + c + ")");
          }
        }
        if (a)
          i || (l += "(?:" + b(s) + ")?"),
            (l += "$" === o ? "$" : "(?=" + o + ")");
        else {
          var p = e[e.length - 1],
            f = "string" == typeof p ? p[p.length - 1] === s : void 0 === p;
          i || (l += "(?:" + b(s) + "(?=" + o + "))?"),
            f || (l += "(?=" + b(s) + "|" + o + ")");
        }
        return new RegExp(l, x(n));
      }
      (c.parse = p),
        (c.compile = function (e, t) {
          return y(m(e, t));
        }),
        (c.tokensToFunction = f),
        (c.tokensToRegExp = h);
      var T = {
          container: "container",
          namespace: "namespace",
          prefix: "data-barba",
          prevent: "prevent",
          wrapper: "wrapper",
        },
        S = function () {
          (this.g = T), (this.A = new DOMParser());
        };
      (S.prototype.toString = function (e) {
        return e.outerHTML;
      }),
        (S.prototype.toDocument = function (e) {
          return this.A.parseFromString(e, "text/html");
        }),
        (S.prototype.toElement = function (e) {
          var t = document.createElement("div");
          return (t.innerHTML = e), t;
        }),
        (S.prototype.getHtml = function (e) {
          return (
            void 0 === e && (e = document), this.toString(e.documentElement)
          );
        }),
        (S.prototype.getWrapper = function (e) {
          return (
            void 0 === e && (e = document),
            e.querySelector("[" + this.g.prefix + '="' + this.g.wrapper + '"]')
          );
        }),
        (S.prototype.getContainer = function (e) {
          return (
            void 0 === e && (e = document),
            e.querySelector(
              "[" + this.g.prefix + '="' + this.g.container + '"]'
            )
          );
        }),
        (S.prototype.getNamespace = function (e) {
          void 0 === e && (e = document);
          var t = e.querySelector(
            "[" + this.g.prefix + "-" + this.g.namespace + "]"
          );
          return t
            ? t.getAttribute(this.g.prefix + "-" + this.g.namespace)
            : null;
        }),
        (S.prototype.getHref = function (e) {
          return e.getAttribute && e.getAttribute("href") ? e.href : null;
        });
      var C = new S(),
        k = function () {
          this.T = [];
        },
        P = { current: { configurable: !0 }, previous: { configurable: !0 } };
      (k.prototype.add = function (e, t) {
        this.T.push({ url: e, ns: t });
      }),
        (k.prototype.remove = function () {
          this.T.pop();
        }),
        (k.prototype.push = function (e, t) {
          this.add(e, t),
            window.history && window.history.pushState(null, "", e);
        }),
        (k.prototype.cancel = function () {
          this.remove(), window.history && window.history.back();
        }),
        (P.current.get = function () {
          return this.T[this.T.length - 1];
        }),
        (P.previous.get = function () {
          return this.T.length < 2 ? null : this.T[this.T.length - 2];
        }),
        Object.defineProperties(k.prototype, P);
      var M = new k(),
        L = function (e, t) {
          try {
            var n = (function () {
              if (!t.next.html)
                return Promise.resolve(e).then(function (e) {
                  var n = t.next,
                    i = t.trigger;
                  if (e) {
                    var r = C.toElement(e);
                    (n.namespace = C.getNamespace(r)),
                      (n.container = C.getContainer(r)),
                      (n.html = e),
                      "popstate" === i
                        ? M.add(n.url.href, n.namespace)
                        : M.push(n.url.href, n.namespace);
                    var a = C.toDocument(e);
                    document.title = a.title;
                  }
                });
            })();
            return Promise.resolve(
              n && n.then ? n.then(function () {}) : void 0
            );
          } catch (e) {
            return Promise.reject(e);
          }
        },
        A = function () {
          return new Promise(function (e) {
            window.requestAnimationFrame(e);
          });
        },
        D = c,
        z = { update: L, nextTick: A, pathToRegexp: D },
        N = function () {
          return window.location.origin;
        },
        I = function (e) {
          var t = e || window.location.port,
            n = window.location.protocol;
          return "" !== t ? parseInt(t, 10) : "https:" === n ? 443 : 80;
        },
        O = function (e) {
          var t,
            n = e.replace(N(), ""),
            i = {},
            r = n.indexOf("#");
          r >= 0 && ((t = n.slice(r + 1)), (n = n.slice(0, r)));
          var a = n.indexOf("?");
          return (
            a >= 0 && ((i = $(n.slice(a + 1))), (n = n.slice(0, a))),
            { hash: t, path: n, query: i }
          );
        },
        $ = function (e) {
          return e.split("&").reduce(function (e, t) {
            var n = t.split("=");
            return (e[n[0]] = n[1]), e;
          }, {});
        },
        R = function (e) {
          return e.replace(/#.*/, "");
        },
        j = {
          getHref: function () {
            return window.location.href;
          },
          getOrigin: N,
          getPort: I,
          getPath: function (e) {
            return O(e).path;
          },
          parse: O,
          parseQuery: $,
          clean: R,
        },
        H = function (e) {
          if (((this.j = []), "boolean" == typeof e)) this.R = e;
          else {
            var t = Array.isArray(e) ? e : [e];
            this.j = t.map(function (e) {
              return D(e);
            });
          }
        };
      H.prototype.checkUrl = function (e) {
        if ("boolean" == typeof this.R) return this.R;
        var t = O(e).path;
        return this.j.some(function (e) {
          return null !== e.exec(t);
        });
      };
      var q = (function (e) {
        function t(t) {
          e.call(this, t), (this.T = new Map());
        }
        return (
          e && (t.__proto__ = e),
          ((t.prototype = Object.create(e && e.prototype)).constructor = t),
          (t.prototype.set = function (e, t, n) {
            return (
              this.checkUrl(e) || this.T.set(e, { action: n, request: t }),
              { action: n, request: t }
            );
          }),
          (t.prototype.get = function (e) {
            return this.T.get(e);
          }),
          (t.prototype.getRequest = function (e) {
            return this.T.get(e).request;
          }),
          (t.prototype.getAction = function (e) {
            return this.T.get(e).action;
          }),
          (t.prototype.has = function (e) {
            return this.T.has(e);
          }),
          (t.prototype.delete = function (e) {
            return this.T.delete(e);
          }),
          (t.prototype.update = function (e, t) {
            var n = Object.assign({}, this.T.get(e), t);
            return this.T.set(e, n), n;
          }),
          t
        );
      })(H);
      function B(e, t, n) {
        return (
          void 0 === t && (t = 2e3),
          new Promise(function (i, r) {
            var a = new XMLHttpRequest();
            (a.onreadystatechange = function () {
              if (a.readyState === XMLHttpRequest.DONE)
                if (200 === a.status) i(a.responseText);
                else if (a.status) {
                  var t = { status: a.status, statusText: a.statusText };
                  n(e, t), r(t);
                }
            }),
              (a.ontimeout = function () {
                var i = new Error("Timeout error [" + t + "]");
                n(e, i), r(i);
              }),
              (a.onerror = function () {
                var t = new Error("Fetch error");
                n(e, t), r(t);
              }),
              a.open("GET", e),
              (a.timeout = t),
              a.setRequestHeader(
                "Accept",
                "text/html,application/xhtml+xml,application/xml"
              ),
              a.setRequestHeader("x-barba", "yes"),
              a.send();
          })
        );
      }
      var F = function () {
          return !window.history.pushState;
        },
        G = function (e) {
          return !e.el || !e.href;
        },
        X = function (e) {
          var t = e.event;
          return (
            t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
          );
        },
        W = function (e) {
          var t = e.el;
          return t.hasAttribute("target") && "_blank" === t.target;
        },
        V = function (e) {
          var t = e.el;
          return (
            window.location.protocol !== t.protocol ||
            window.location.hostname !== t.hostname
          );
        },
        Y = function (e) {
          var t = e.el;
          return I() !== I(t.port);
        },
        _ = function (e) {
          var t = e.el;
          return (
            t.getAttribute && "string" == typeof t.getAttribute("download")
          );
        },
        U = function (e) {
          return e.el.hasAttribute(T.prefix + "-" + T.prevent);
        },
        K = function (e) {
          return Boolean(
            e.el.closest("[" + T.prefix + "-" + T.prevent + '="all"]')
          );
        },
        Q = function (e) {
          return R(e.href) === R(window.location.href);
        },
        J = (function (e) {
          function t(t) {
            e.call(this, t),
              (this.suite = []),
              (this.tests = new Map()),
              this.init();
          }
          return (
            e && (t.__proto__ = e),
            ((t.prototype = Object.create(e && e.prototype)).constructor = t),
            (t.prototype.init = function () {
              this.add("pushState", F),
                this.add("exists", G),
                this.add("newTab", X),
                this.add("blank", W),
                this.add("corsDomain", V),
                this.add("corsPort", Y),
                this.add("download", _),
                this.add("preventSelf", U),
                this.add("preventAll", K),
                this.add("sameUrl", Q, !1);
            }),
            (t.prototype.add = function (e, t, n) {
              void 0 === n && (n = !0),
                this.tests.set(e, t),
                n && this.suite.push(e);
            }),
            (t.prototype.run = function (e, t, n, i) {
              return this.tests.get(e)({ el: t, event: n, href: i });
            }),
            (t.prototype.checkLink = function (e, t, n) {
              var i = this;
              return this.suite.some(function (r) {
                return i.run(r, e, t, n);
              });
            }),
            t
          );
        })(H),
        Z = function (e) {
          void 0 === e && (e = []),
            (this.logger = new l("@barba/core")),
            (this.all = []),
            (this.appear = []),
            (this.k = [
              { name: "namespace", type: "strings" },
              { name: "custom", type: "function" },
            ]),
            e && (this.all = this.all.concat(e)),
            this.update();
        };
      (Z.prototype.add = function (e, t) {
        switch (e) {
          case "rule":
            this.k.splice(t.position || 0, 0, t.value);
            break;
          case "transition":
          default:
            this.all.push(t);
        }
        this.update();
      }),
        (Z.prototype.resolve = function (e, t) {
          var n,
            i = this;
          void 0 === t && (t = {});
          var r = t.appear ? this.appear : this.all;
          r = r.filter(
            t.self
              ? function (e) {
                  return e.name && "self" === e.name;
                }
              : function (e) {
                  return !e.name || "self" !== e.name;
                }
          );
          var a = new Map(),
            s = r.find(function (n) {
              var r = !0,
                s = {};
              return (
                !(!t.self || "self" !== n.name) ||
                (i.k.reverse().forEach(function (a) {
                  r &&
                    ((r = i.O(n, a, e, s)),
                    t.appear ||
                      (n.from &&
                        n.to &&
                        (r = i.O(n, a, e, s, "from") && i.O(n, a, e, s, "to")),
                      n.from && !n.to && (r = i.O(n, a, e, s, "from")),
                      !n.from && n.to && (r = i.O(n, a, e, s, "to"))));
                }),
                a.set(n, s),
                r)
              );
            }),
            o = a.get(s),
            l = [];
          if (
            (l.push(t.appear ? "appear" : "page"), t.self && l.push("self"), o)
          ) {
            var u = [s];
            Object.keys(o).length > 0 && u.push(o),
              (n = this.logger).info.apply(
                n,
                ["Transition found [" + l.join(",") + "]"].concat(u)
              );
          } else this.logger.info("No transition found [" + l.join(",") + "]");
          return s;
        }),
        (Z.prototype.update = function () {
          var e = this;
          (this.all = this.all
            .map(function (t) {
              return e.L(t);
            })
            .sort(function (e, t) {
              return e.priority - t.priority;
            })
            .reverse()
            .map(function (e) {
              return delete e.priority, e;
            })),
            (this.appear = this.all.filter(function (e) {
              return void 0 !== e.appear;
            }));
        }),
        (Z.prototype.O = function (e, t, n, i, r) {
          var a = !0,
            s = !1,
            o = e,
            l = t.name,
            u = l,
            d = l,
            c = l,
            p = r ? o[r] : o,
            f = "to" === r ? n.next : n.current;
          if (r ? p && p[l] : p[l]) {
            switch (t.type) {
              case "strings":
              default:
                var h = Array.isArray(p[u]) ? p[u] : [p[u]];
                f[u] && -1 !== h.indexOf(f[u]) && (s = !0),
                  -1 === h.indexOf(f[u]) && (a = !1);
                break;
              case "object":
                var v = Array.isArray(p[d]) ? p[d] : [p[d]];
                f[d] &&
                  (f[d].name && -1 !== v.indexOf(f[d].name) && (s = !0),
                  -1 === v.indexOf(f[d].name) && (a = !1));
                break;
              case "function":
                p[c](n) ? (s = !0) : (a = !1);
            }
            s &&
              (r ? ((i[r] = i[r] || {}), (i[r][l] = o[r][l])) : (i[l] = o[l]));
          }
          return a;
        }),
        (Z.prototype.M = function (e, t, n) {
          var i = 0;
          return (
            (e[t] || (e.from && e.from[t]) || (e.to && e.to[t])) &&
              ((i += Math.pow(10, n)),
              e.from && e.from[t] && (i += 1),
              e.to && e.to[t] && (i += 2)),
            i
          );
        }),
        (Z.prototype.L = function (e) {
          var t = this;
          e.priority = 0;
          var n = 0;
          return (
            this.k.forEach(function (i, r) {
              n += t.M(e, i.name, r + 1);
            }),
            (e.priority = n),
            e
          );
        });
      var ee = function (e) {
          void 0 === e && (e = []),
            (this.logger = new l("@barba/core")),
            (this.S = !1),
            (this.store = new Z(e));
        },
        te = {
          isRunning: { configurable: !0 },
          hasAppear: { configurable: !0 },
          hasSelf: { configurable: !0 },
          shouldWait: { configurable: !0 },
        };
      (ee.prototype.get = function (e, t) {
        return this.store.resolve(e, t);
      }),
        (te.isRunning.get = function () {
          return this.S;
        }),
        (te.isRunning.set = function (e) {
          this.S = e;
        }),
        (te.hasAppear.get = function () {
          return this.store.appear.length > 0;
        }),
        (te.hasSelf.get = function () {
          return this.store.all.some(function (e) {
            return "self" === e.name;
          });
        }),
        (te.shouldWait.get = function () {
          return this.store.all.some(function (e) {
            return (e.to && !e.to.route) || e.sync;
          });
        }),
        (ee.prototype.doAppear = function (e) {
          var t = e.data,
            i = e.transition;
          try {
            var r = this;
            function a(e) {
              r.S = !1;
            }
            var s = i || {};
            r.S = !0;
            var o = n(
              function () {
                return Promise.resolve(r.$("beforeAppear", t, s)).then(
                  function () {
                    return Promise.resolve(r.appear(t, s)).then(function () {
                      return Promise.resolve(
                        r.$("afterAppear", t, s)
                      ).then(function () {});
                    });
                  }
                );
              },
              function (e) {
                throw (
                  ((r.S = !1),
                  r.logger.error(e),
                  new Error("Transition error [appear]"))
                );
              }
            );
            return o && o.then ? o.then(a) : a();
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.doPage = function (e) {
          var t = e.data,
            i = e.transition,
            r = e.page,
            a = e.wrapper;
          try {
            var s = this;
            function o(e) {
              s.S = !1;
            }
            var l = i || {},
              u = !0 === l.sync || !1;
            s.S = !0;
            var d = n(
              function () {
                function e() {
                  return Promise.resolve(s.$("before", t, l)).then(function () {
                    function e(e) {
                      return Promise.resolve(s.$("after", t, l)).then(
                        function () {
                          return Promise.resolve(
                            s.remove(t)
                          ).then(function () {});
                        }
                      );
                    }
                    var i = (function () {
                      if (u)
                        return n(
                          function () {
                            return Promise.resolve(s.add(t, a)).then(
                              function () {
                                return Promise.resolve(
                                  s.$("beforeLeave", t, l)
                                ).then(function () {
                                  return Promise.resolve(
                                    s.$("beforeEnter", t, l)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        s.leave(t, l),
                                        s.enter(t, l),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        s.$("afterLeave", t, l)
                                      ).then(function () {
                                        return Promise.resolve(
                                          s.$("afterEnter", t, l)
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              }
                            );
                          },
                          function () {
                            throw new Error("Transition error [page][sync]");
                          }
                        );
                      {
                        function e(e) {
                          return n(
                            function () {
                              var e = (function () {
                                if (!1 !== i)
                                  return Promise.resolve(s.add(t, a)).then(
                                    function () {
                                      return Promise.resolve(
                                        s.$("beforeEnter", t, l)
                                      ).then(function () {
                                        return Promise.resolve(
                                          s.enter(t, l, i)
                                        ).then(function () {
                                          return Promise.resolve(
                                            s.$("afterEnter", t, l)
                                          ).then(function () {});
                                        });
                                      });
                                    }
                                  );
                              })();
                              if (e && e.then) return e.then(function () {});
                            },
                            function () {
                              throw new Error("Transition error [page][enter]");
                            }
                          );
                        }
                        var i = !1,
                          o = n(
                            function () {
                              return Promise.resolve(
                                s.$("beforeLeave", t, l)
                              ).then(function () {
                                return Promise.resolve(
                                  Promise.all([s.leave(t, l), L(r, t)]).then(
                                    function (e) {
                                      return e[0];
                                    }
                                  )
                                ).then(function (e) {
                                  return (
                                    (i = e),
                                    Promise.resolve(
                                      s.$("afterLeave", t, l)
                                    ).then(function () {})
                                  );
                                });
                              });
                            },
                            function () {
                              throw new Error("Transition error [page][leave]");
                            }
                          );
                        return o && o.then ? o.then(e) : e();
                      }
                    })();
                    return i && i.then ? i.then(e) : e();
                  });
                }
                var i = (function () {
                  if (u) return Promise.resolve(L(r, t)).then(function () {});
                })();
                return i && i.then ? i.then(e) : e();
              },
              function (e) {
                throw (
                  ((s.S = !1), s.logger.error(e), new Error("Transition error"))
                );
              }
            );
            return d && d.then ? d.then(o) : o();
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.appear = function (e, t) {
          try {
            return Promise.resolve(d.do("appear", e, t)).then(function () {
              return t.appear ? s(t.appear)(e) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.leave = function (e, t) {
          try {
            return Promise.resolve(d.do("leave", e, t)).then(function () {
              return t.leave ? s(t.leave)(e) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.enter = function (e, t, n) {
          try {
            return Promise.resolve(d.do("enter", e, t)).then(function () {
              return t.enter ? s(t.enter)(e, n) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.add = function (e, t) {
          try {
            return (
              t.appendChild(e.next.container),
              Promise.resolve(A()).then(function () {
                d.do("nextAdded", e);
              })
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.remove = function (e) {
          try {
            var t = e.current.container,
              n = (function () {
                if (document.body.contains(t))
                  return Promise.resolve(A()).then(function () {
                    return (
                      t.parentNode.removeChild(t),
                      Promise.resolve(A()).then(function () {
                        d.do("currentRemoved", e);
                      })
                    );
                  });
              })();
            return n && n.then ? n.then(function () {}) : void 0;
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (ee.prototype.$ = function (e, t, n) {
          try {
            return Promise.resolve(d.do(e, t, n)).then(function () {
              return n[e] ? s(n[e])(t) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        Object.defineProperties(ee.prototype, te);
      var ne = function (e) {
        var t = this;
        (this.names = [
          "beforeAppear",
          "afterAppear",
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          0 !== e.length &&
            (e.forEach(function (e) {
              t.byNamespace.set(e.namespace, e);
            }),
            this.names.forEach(function (e) {
              d[e](t.q(e), t);
            }),
            d.ready(this.q("beforeEnter"), this));
      };
      (ne.prototype.q = function (e) {
        var t = this;
        return function (n) {
          var i = e.match(/enter/i) ? n.next : n.current,
            r = t.byNamespace.get(i.namespace);
          r && r[e] && r[e](n);
        };
      }),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (e) {
            var t = this;
            do {
              if (t.matches(e)) return t;
              t = t.parentElement || t.parentNode;
            } while (null !== t && 1 === t.nodeType);
            return null;
          });
      var ie = {
          container: void 0,
          html: void 0,
          namespace: void 0,
          url: { hash: void 0, href: void 0, path: void 0, query: {} },
        },
        re = function () {
          (this.version = "2.3.9"),
            (this.schemaPage = ie),
            (this.Logger = l),
            (this.logger = new l("@barba/core")),
            (this.plugins = []),
            (this.hooks = d),
            (this.dom = C),
            (this.helpers = z),
            (this.history = M),
            (this.request = B),
            (this.url = j);
        },
        ae = { data: { configurable: !0 }, wrapper: { configurable: !0 } };
      return (
        (re.prototype.use = function (e, t) {
          var n = this.plugins;
          n.indexOf(e) > -1
            ? this.logger.warn("Plugin [" + e.name + "] already installed.")
            : "function" == typeof e.install
            ? (e.install(this, t), n.push(e))
            : this.logger.warn(
                "Plugin [" + e.name + '] has no "install" method.'
              );
        }),
        (re.prototype.init = function (e) {
          void 0 === e && (e = {});
          var t = e.transitions;
          void 0 === t && (t = []);
          var n = e.views;
          void 0 === n && (n = []);
          var i = e.prevent;
          void 0 === i && (i = null);
          var r = e.timeout;
          void 0 === r && (r = 2e3);
          var a = e.requestError,
            s = e.cacheIgnore;
          void 0 === s && (s = !1);
          var o = e.prefetchIgnore;
          void 0 === o && (o = !1);
          var u = e.schema;
          void 0 === u && (u = T);
          var d = e.debug;
          void 0 === d && (d = !1);
          var c = e.logLevel;
          if (
            (void 0 === c && (c = "off"),
            l.setLevel(!0 === d ? "debug" : c),
            this.logger.print(this.version),
            Object.keys(u).forEach(function (e) {
              T[e] && (T[e] = u[e]);
            }),
            (this.C = a),
            (this.timeout = r),
            (this.cacheIgnore = s),
            (this.prefetchIgnore = o),
            (this.B = this.dom.getWrapper()),
            !this.B)
          )
            throw new Error("[@barba/core] No Barba wrapper found");
          this.B.setAttribute("aria-live", "polite"), this.H();
          var p = this.data.current;
          if (!p.container)
            throw new Error("[@barba/core] No Barba container found");
          if (
            ((this.cache = new q(s)),
            (this.prevent = new J(o)),
            (this.transitions = new ee(t)),
            (this.views = new ne(n)),
            null !== i)
          ) {
            if ("function" != typeof i)
              throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", i);
          }
          this.history.add(p.url.href, p.namespace),
            (this.I = this.I.bind(this)),
            (this.N = this.N.bind(this)),
            (this.U = this.U.bind(this)),
            this.D(),
            this.plugins.forEach(function (e) {
              return e.init();
            });
          var f = this.data;
          (f.trigger = "barba"),
            (f.next = f.current),
            this.hooks.do("ready", f),
            this.appear(),
            this.H();
        }),
        (re.prototype.destroy = function () {
          this.H(), this.X(), this.hooks.clear(), (this.plugins = []);
        }),
        (ae.data.get = function () {
          return this._;
        }),
        (ae.wrapper.get = function () {
          return this.B;
        }),
        (re.prototype.force = function (e) {
          window.location.assign(e);
        }),
        (re.prototype.go = function (e, t, n) {
          var i;
          if (
            (void 0 === t && (t = "barba"),
            !(i =
              "popstate" === t
                ? this.history.current &&
                  this.url.getPath(this.history.current.url) ===
                    this.url.getPath(e)
                : this.prevent.run("sameUrl", null, null, e)) ||
              this.transitions.hasSelf)
          )
            return (
              n && (n.stopPropagation(), n.preventDefault()), this.page(e, t, i)
            );
        }),
        (re.prototype.appear = function () {
          try {
            var e = this,
              t = (function () {
                if (e.transitions.hasAppear) {
                  var t = n(
                    function () {
                      var t = e._,
                        n = e.transitions.get(t, { appear: !0 });
                      return Promise.resolve(
                        e.transitions.doAppear({ transition: n, data: t })
                      ).then(function () {});
                    },
                    function (t) {
                      e.logger.error(t);
                    }
                  );
                  if (t && t.then) return t.then(function () {});
                }
              })();
            return t && t.then ? t.then(function () {}) : void 0;
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (re.prototype.page = function (e, t, i) {
          try {
            var r = this;
            function a() {
              var e = r.data;
              r.hooks.do("page", e);
              var t = n(
                function () {
                  var t = r.transitions.get(e, { appear: !1, self: i });
                  return Promise.resolve(
                    r.transitions.doPage({
                      data: e,
                      page: s,
                      transition: t,
                      wrapper: r.B,
                    })
                  ).then(function () {
                    r.H();
                  });
                },
                function (e) {
                  r.logger.error(e);
                }
              );
              if (t && t.then) return t.then(function () {});
            }
            if (r.transitions.isRunning) return void r.force(e);
            (r.data.next.url = Object.assign({}, { href: e }, r.url.parse(e))),
              (r.data.trigger = t);
            var s = r.cache.has(e)
                ? r.cache.update(e, { action: "click" }).request
                : r.cache.set(
                    e,
                    r.request(e, r.timeout, r.onRequestError.bind(r, t)),
                    "click"
                  ).request,
              o = (function () {
                if (r.transitions.shouldWait)
                  return Promise.resolve(L(s, r.data)).then(function () {});
              })();
            return o && o.then ? o.then(a) : a();
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (re.prototype.onRequestError = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
          this.transitions.isRunning = !1;
          var i = t[0],
            r = t[1],
            a = this.cache.getAction(i);
          return (
            this.cache.delete(i),
            !(
              (this.C && !1 === this.C(e, a, i, r)) ||
              ("click" === a && this.force(i), 1)
            )
          );
        }),
        (re.prototype.prefetch = function (e) {
          var t = this;
          this.cache.has(e) ||
            this.cache.set(
              e,
              this.request(
                e,
                this.timeout,
                this.onRequestError.bind(this, "barba")
              ).catch(function (e) {
                t.logger.error(e);
              }),
              "prefetch"
            );
        }),
        (re.prototype.D = function () {
          !0 !== this.prefetchIgnore &&
            (document.addEventListener("mouseover", this.I),
            document.addEventListener("touchstart", this.I)),
            document.addEventListener("click", this.N),
            window.addEventListener("popstate", this.U);
        }),
        (re.prototype.X = function () {
          !0 !== this.prefetchIgnore &&
            (document.removeEventListener("mouseover", this.I),
            document.removeEventListener("touchstart", this.I)),
            document.removeEventListener("click", this.N),
            window.removeEventListener("popstate", this.U);
        }),
        (re.prototype.I = function (e) {
          var t = this,
            n = this.F(e);
          if (n) {
            var i = this.dom.getHref(n);
            this.prevent.checkUrl(i) ||
              this.cache.has(i) ||
              this.cache.set(
                i,
                this.request(
                  i,
                  this.timeout,
                  this.onRequestError.bind(this, n)
                ).catch(function (e) {
                  t.logger.error(e);
                }),
                "enter"
              );
          }
        }),
        (re.prototype.N = function (e) {
          var t = this.F(e);
          t && this.go(this.dom.getHref(t), t, e);
        }),
        (re.prototype.U = function () {
          this.go(this.url.getHref(), "popstate");
        }),
        (re.prototype.F = function (e) {
          for (var t = e.target; t && !this.dom.getHref(t); ) t = t.parentNode;
          if (t && !this.prevent.checkLink(t, e, t.href)) return t;
        }),
        (re.prototype.H = function () {
          var e = this.url.getHref(),
            t = {
              container: this.dom.getContainer(),
              html: this.dom.getHtml(),
              namespace: this.dom.getNamespace(),
              url: Object.assign({}, { href: e }, this.url.parse(e)),
            };
          (this._ = {
            current: t,
            next: Object.assign({}, this.schemaPage),
            trigger: void 0,
          }),
            this.hooks.do("reset", this.data);
        }),
        Object.defineProperties(re.prototype, ae),
        new re()
      );
    })();
  },
  zSlN: function (e, t, n) {
    var i, r;
    void 0 ===
      (r =
        "function" ==
        typeof (i = function () {
          "use strict";
          var e = function () {
            i.log(
              2,
              "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene."
            );
          };
          (e.version = "2.0.6"),
            window.addEventListener("mousewheel", function () {}),
            (e.Controller = function (n) {
              var r,
                a,
                s = "ScrollMagic.Controller",
                o = t.defaults,
                l = this,
                u = i.extend({}, o, n),
                d = [],
                c = !1,
                p = 0,
                f = "PAUSED",
                h = !0,
                v = 0,
                g = !0,
                m = function () {
                  u.refreshInterval > 0 &&
                    (a = window.setTimeout(S, u.refreshInterval));
                },
                y = function () {
                  return u.vertical
                    ? i.get.scrollTop(u.container)
                    : i.get.scrollLeft(u.container);
                },
                b = function () {
                  return u.vertical
                    ? i.get.height(u.container)
                    : i.get.width(u.container);
                },
                w = (this._setScrollPos = function (e) {
                  u.vertical
                    ? h
                      ? window.scrollTo(i.get.scrollLeft(), e)
                      : (u.container.scrollTop = e)
                    : h
                    ? window.scrollTo(e, i.get.scrollTop())
                    : (u.container.scrollLeft = e);
                }),
                x = function () {
                  if (g && c) {
                    var e = i.type.Array(c) ? c : d.slice(0);
                    c = !1;
                    var t = p,
                      n = (p = l.scrollPos()) - t;
                    0 !== n && (f = n > 0 ? "FORWARD" : "REVERSE"),
                      "REVERSE" === f && e.reverse(),
                      e.forEach(function (t, n) {
                        C(
                          3,
                          "updating Scene " +
                            (n + 1) +
                            "/" +
                            e.length +
                            " (" +
                            d.length +
                            " total)"
                        ),
                          t.update(!0);
                      }),
                      0 === e.length &&
                        u.loglevel >= 3 &&
                        C(3, "updating 0 Scenes (nothing added to controller)");
                  }
                },
                E = function () {
                  r = i.rAF(x);
                },
                T = function (e) {
                  C(3, "event fired causing an update:", e.type),
                    "resize" == e.type && ((v = b()), (f = "PAUSED")),
                    !0 !== c && ((c = !0), E());
                },
                S = function () {
                  if (!h && v != b()) {
                    var e;
                    try {
                      e = new Event("resize", { bubbles: !1, cancelable: !1 });
                    } catch (t) {
                      (e = document.createEvent("Event")).initEvent(
                        "resize",
                        !1,
                        !1
                      );
                    }
                    u.container.dispatchEvent(e);
                  }
                  d.forEach(function (e, t) {
                    e.refresh();
                  }),
                    m();
                },
                C = (this._log = function (e, t) {
                  u.loglevel >= e &&
                    (Array.prototype.splice.call(
                      arguments,
                      1,
                      0,
                      "(" + s + ") ->"
                    ),
                    i.log.apply(window, arguments));
                });
              this._options = u;
              var k = function (e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return (
                  t.sort(function (e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
                  }),
                  t
                );
              };
              return (
                (this.addScene = function (t) {
                  if (i.type.Array(t))
                    t.forEach(function (e, t) {
                      l.addScene(e);
                    });
                  else if (t instanceof e.Scene) {
                    if (t.controller() !== l) t.addTo(l);
                    else if (d.indexOf(t) < 0) {
                      for (var n in (d.push(t),
                      (d = k(d)),
                      t.on("shift.controller_sort", function () {
                        d = k(d);
                      }),
                      u.globalSceneOptions))
                        t[n] && t[n].call(t, u.globalSceneOptions[n]);
                      C(3, "adding Scene (now " + d.length + " total)");
                    }
                  } else
                    C(1, "ERROR: invalid argument supplied for '.addScene()'");
                  return l;
                }),
                (this.removeScene = function (e) {
                  if (i.type.Array(e))
                    e.forEach(function (e, t) {
                      l.removeScene(e);
                    });
                  else {
                    var t = d.indexOf(e);
                    t > -1 &&
                      (e.off("shift.controller_sort"),
                      d.splice(t, 1),
                      C(3, "removing Scene (now " + d.length + " left)"),
                      e.remove());
                  }
                  return l;
                }),
                (this.updateScene = function (t, n) {
                  return (
                    i.type.Array(t)
                      ? t.forEach(function (e, t) {
                          l.updateScene(e, n);
                        })
                      : n
                      ? t.update(!0)
                      : !0 !== c &&
                        t instanceof e.Scene &&
                        (-1 == (c = c || []).indexOf(t) && c.push(t),
                        (c = k(c)),
                        E()),
                    l
                  );
                }),
                (this.update = function (e) {
                  return T({ type: "resize" }), e && x(), l;
                }),
                (this.scrollTo = function (t, n) {
                  if (i.type.Number(t)) w.call(u.container, t, n);
                  else if (t instanceof e.Scene)
                    t.controller() === l
                      ? l.scrollTo(t.scrollOffset(), n)
                      : C(
                          2,
                          "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",
                          t
                        );
                  else if (i.type.Function(t)) w = t;
                  else {
                    var r = i.get.elements(t)[0];
                    if (r) {
                      for (
                        ;
                        r.parentNode.hasAttribute(
                          "data-scrollmagic-pin-spacer"
                        );

                      )
                        r = r.parentNode;
                      var a = u.vertical ? "top" : "left",
                        s = i.get.offset(u.container),
                        o = i.get.offset(r);
                      h || (s[a] -= l.scrollPos()), l.scrollTo(o[a] - s[a], n);
                    } else
                      C(
                        2,
                        "scrollTo(): The supplied argument is invalid. Scroll cancelled.",
                        t
                      );
                  }
                  return l;
                }),
                (this.scrollPos = function (e) {
                  return arguments.length
                    ? (i.type.Function(e)
                        ? (y = e)
                        : C(
                            2,
                            "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."
                          ),
                      l)
                    : y.call(l);
                }),
                (this.info = function (e) {
                  var t = {
                    size: v,
                    vertical: u.vertical,
                    scrollPos: p,
                    scrollDirection: f,
                    container: u.container,
                    isDocument: h,
                  };
                  return arguments.length
                    ? void 0 !== t[e]
                      ? t[e]
                      : void C(1, 'ERROR: option "' + e + '" is not available')
                    : t;
                }),
                (this.loglevel = function (e) {
                  return arguments.length
                    ? (u.loglevel != e && (u.loglevel = e), l)
                    : u.loglevel;
                }),
                (this.enabled = function (e) {
                  return arguments.length
                    ? (g != e && ((g = !!e), l.updateScene(d, !0)), l)
                    : g;
                }),
                (this.destroy = function (e) {
                  window.clearTimeout(a);
                  for (var t = d.length; t--; ) d[t].destroy(e);
                  return (
                    u.container.removeEventListener("resize", T),
                    u.container.removeEventListener("scroll", T),
                    i.cAF(r),
                    C(
                      3,
                      "destroyed " +
                        s +
                        " (reset: " +
                        (e ? "true" : "false") +
                        ")"
                    ),
                    null
                  );
                }),
                (function () {
                  for (var t in u)
                    o.hasOwnProperty(t) ||
                      (C(2, 'WARNING: Unknown option "' + t + '"'),
                      delete u[t]);
                  if (
                    ((u.container = i.get.elements(u.container)[0]),
                    !u.container)
                  )
                    throw (
                      (C(
                        1,
                        "ERROR creating object " +
                          s +
                          ": No valid scroll container supplied"
                      ),
                      s + " init failed.")
                    );
                  (h =
                    u.container === window ||
                    u.container === document.body ||
                    !document.body.contains(u.container)) &&
                    (u.container = window),
                    (v = b()),
                    u.container.addEventListener("resize", T),
                    u.container.addEventListener("scroll", T);
                  var n = parseInt(u.refreshInterval, 10);
                  (u.refreshInterval = i.type.Number(n)
                    ? n
                    : o.refreshInterval),
                    m(),
                    C(3, "added new " + s + " controller (v" + e.version + ")");
                })(),
                l
              );
            });
          var t = {
            defaults: {
              container: window,
              vertical: !0,
              globalSceneOptions: {},
              loglevel: 2,
              refreshInterval: 100,
            },
          };
          (e.Controller.addOption = function (e, n) {
            t.defaults[e] = n;
          }),
            (e.Controller.extend = function (t) {
              var n = this;
              (e.Controller = function () {
                return (
                  n.apply(this, arguments),
                  (this.$super = i.extend({}, this)),
                  t.apply(this, arguments) || this
                );
              }),
                i.extend(e.Controller, n),
                (e.Controller.prototype = n.prototype),
                (e.Controller.prototype.constructor = e.Controller);
            }),
            (e.Scene = function (t) {
              var r,
                a,
                s = "ScrollMagic.Scene",
                o = n.defaults,
                l = this,
                u = i.extend({}, o, t),
                d = "BEFORE",
                c = 0,
                p = { start: 0, end: 0 },
                f = 0,
                h = !0,
                v = {};
              (this.on = function (e, t) {
                return (
                  i.type.Function(t)
                    ? (e = e.trim().split(" ")).forEach(function (e) {
                        var n = e.split("."),
                          i = n[0],
                          r = n[1];
                        "*" != i &&
                          (v[i] || (v[i] = []),
                          v[i].push({ namespace: r || "", callback: t }));
                      })
                    : g(
                        1,
                        "ERROR when calling '.on()': Supplied callback for '" +
                          e +
                          "' is not a valid function!"
                      ),
                  l
                );
              }),
                (this.off = function (e, t) {
                  return e
                    ? ((e = e.trim().split(" ")).forEach(function (e, n) {
                        var i = e.split("."),
                          r = i[0],
                          a = i[1] || "",
                          s = "*" === r ? Object.keys(v) : [r];
                        s.forEach(function (e) {
                          for (var n = v[e] || [], i = n.length; i--; ) {
                            var r = n[i];
                            !r ||
                              (a !== r.namespace && "*" !== a) ||
                              (t && t != r.callback) ||
                              n.splice(i, 1);
                          }
                          n.length || delete v[e];
                        });
                      }),
                      l)
                    : (g(1, "ERROR: Invalid event name supplied."), l);
                }),
                (this.trigger = function (t, n) {
                  if (t) {
                    var i = t.trim().split("."),
                      r = i[0],
                      a = i[1],
                      s = v[r];
                    g(3, "event fired:", r, n ? "->" : "", n || ""),
                      s &&
                        s.forEach(function (t, i) {
                          (a && a !== t.namespace) ||
                            t.callback.call(
                              l,
                              new e.Event(r, t.namespace, l, n)
                            );
                        });
                  } else g(1, "ERROR: Invalid event name supplied.");
                  return l;
                }),
                l
                  .on("change.internal", function (e) {
                    "loglevel" !== e.what &&
                      "tweenChanges" !== e.what &&
                      ("triggerElement" === e.what
                        ? x()
                        : "reverse" === e.what && l.update());
                  })
                  .on("shift.internal", function (e) {
                    b(), l.update();
                  });
              var g = (this._log = function (e, t) {
                u.loglevel >= e &&
                  (Array.prototype.splice.call(
                    arguments,
                    1,
                    0,
                    "(" + s + ") ->"
                  ),
                  i.log.apply(window, arguments));
              });
              (this.addTo = function (t) {
                return (
                  t instanceof e.Controller
                    ? a != t &&
                      (a && a.removeScene(l),
                      (a = t),
                      S(),
                      w(!0),
                      x(!0),
                      b(),
                      a.info("container").addEventListener("resize", E),
                      t.addScene(l),
                      l.trigger("add", { controller: a }),
                      g(3, "added " + s + " to controller"),
                      l.update())
                    : g(
                        1,
                        "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"
                      ),
                  l
                );
              }),
                (this.enabled = function (e) {
                  return arguments.length
                    ? (h != e && ((h = !!e), l.update(!0)), l)
                    : h;
                }),
                (this.remove = function () {
                  if (a) {
                    a.info("container").removeEventListener("resize", E);
                    var e = a;
                    (a = void 0),
                      e.removeScene(l),
                      l.trigger("remove"),
                      g(3, "removed " + s + " from controller");
                  }
                  return l;
                }),
                (this.destroy = function (e) {
                  return (
                    l.trigger("destroy", { reset: e }),
                    l.remove(),
                    l.off("*.*"),
                    g(
                      3,
                      "destroyed " +
                        s +
                        " (reset: " +
                        (e ? "true" : "false") +
                        ")"
                    ),
                    null
                  );
                }),
                (this.update = function (e) {
                  if (a)
                    if (e)
                      if (a.enabled() && h) {
                        var t,
                          n = a.info("scrollPos");
                        (t =
                          u.duration > 0
                            ? (n - p.start) / (p.end - p.start)
                            : n >= p.start
                            ? 1
                            : 0),
                          l.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: n,
                          }),
                          l.progress(t);
                      } else m && "DURING" === d && P(!0);
                    else a.updateScene(l, !1);
                  return l;
                }),
                (this.refresh = function () {
                  return w(), x(), l;
                }),
                (this.progress = function (e) {
                  if (arguments.length) {
                    var t = !1,
                      n = d,
                      i = a ? a.info("scrollDirection") : "PAUSED",
                      r = u.reverse || e >= c;
                    if (
                      (0 === u.duration
                        ? ((t = c != e),
                          (d =
                            0 == (c = e < 1 && r ? 0 : 1)
                              ? "BEFORE"
                              : "DURING"))
                        : e < 0 && "BEFORE" !== d && r
                        ? ((c = 0), (d = "BEFORE"), (t = !0))
                        : e >= 0 && e < 1 && r
                        ? ((c = e), (d = "DURING"), (t = !0))
                        : e >= 1 && "AFTER" !== d
                        ? ((c = 1), (d = "AFTER"), (t = !0))
                        : "DURING" !== d || r || P(),
                      t)
                    ) {
                      var s = { progress: c, state: d, scrollDirection: i },
                        o = d != n,
                        p = function (e) {
                          l.trigger(e, s);
                        };
                      o &&
                        "DURING" !== n &&
                        (p("enter"), p("BEFORE" === n ? "start" : "end")),
                        p("progress"),
                        o &&
                          "DURING" !== d &&
                          (p("BEFORE" === d ? "start" : "end"), p("leave"));
                    }
                    return l;
                  }
                  return c;
                });
              var m,
                y,
                b = function () {
                  (p = { start: f + u.offset }),
                    a &&
                      u.triggerElement &&
                      (p.start -= a.info("size") * u.triggerHook),
                    (p.end = p.start + u.duration);
                },
                w = function (e) {
                  r &&
                    C("duration", r.call(l)) &&
                    !e &&
                    (l.trigger("change", {
                      what: "duration",
                      newval: u.duration,
                    }),
                    l.trigger("shift", { reason: "duration" }));
                },
                x = function (e) {
                  var t = 0,
                    n = u.triggerElement;
                  if (a && (n || f > 0)) {
                    if (n)
                      if (n.parentNode) {
                        for (
                          var r = a.info(),
                            s = i.get.offset(r.container),
                            o = r.vertical ? "top" : "left";
                          n.parentNode.hasAttribute(
                            "data-scrollmagic-pin-spacer"
                          );

                        )
                          n = n.parentNode;
                        var d = i.get.offset(n);
                        r.isDocument || (s[o] -= a.scrollPos()),
                          (t = d[o] - s[o]);
                      } else
                        g(
                          2,
                          "WARNING: triggerElement was removed from DOM and will be reset to",
                          void 0
                        ),
                          l.triggerElement(void 0);
                    var c = t != f;
                    (f = t),
                      c &&
                        !e &&
                        l.trigger("shift", {
                          reason: "triggerElementPosition",
                        });
                  }
                },
                E = function (e) {
                  u.triggerHook > 0 &&
                    l.trigger("shift", { reason: "containerResize" });
                },
                T = i.extend(n.validate, {
                  duration: function (e) {
                    if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                      var t = parseFloat(e) / 100;
                      e = function () {
                        return a ? a.info("size") * t : 0;
                      };
                    }
                    if (i.type.Function(e)) {
                      r = e;
                      try {
                        e = parseFloat(r());
                      } catch (t) {
                        e = -1;
                      }
                    }
                    if (((e = parseFloat(e)), !i.type.Number(e) || e < 0))
                      throw r
                        ? ((r = void 0),
                          [
                            'Invalid return value of supplied function for option "duration":',
                            e,
                          ])
                        : ['Invalid value for option "duration":', e];
                    return e;
                  },
                }),
                S = function (e) {
                  (e = arguments.length ? [e] : Object.keys(T)).forEach(
                    function (e, t) {
                      var n;
                      if (T[e])
                        try {
                          n = T[e](u[e]);
                        } catch (t) {
                          n = o[e];
                          var r = i.type.String(t) ? [t] : t;
                          i.type.Array(r)
                            ? ((r[0] = "ERROR: " + r[0]),
                              r.unshift(1),
                              g.apply(this, r))
                            : g(
                                1,
                                "ERROR: Problem executing validation callback for option '" +
                                  e +
                                  "':",
                                t.message
                              );
                        } finally {
                          u[e] = n;
                        }
                    }
                  );
                },
                C = function (e, t) {
                  var n = !1,
                    i = u[e];
                  return u[e] != t && ((u[e] = t), S(e), (n = i != u[e])), n;
                },
                k = function (e) {
                  l[e] ||
                    (l[e] = function (t) {
                      return arguments.length
                        ? ("duration" === e && (r = void 0),
                          C(e, t) &&
                            (l.trigger("change", { what: e, newval: u[e] }),
                            n.shifts.indexOf(e) > -1 &&
                              l.trigger("shift", { reason: e })),
                          l)
                        : u[e];
                    });
                };
              (this.controller = function () {
                return a;
              }),
                (this.state = function () {
                  return d;
                }),
                (this.scrollOffset = function () {
                  return p.start;
                }),
                (this.triggerPosition = function () {
                  var e = u.offset;
                  return (
                    a &&
                      (u.triggerElement
                        ? (e += f)
                        : (e += a.info("size") * l.triggerHook())),
                    e
                  );
                }),
                l
                  .on("shift.internal", function (e) {
                    var t = "duration" === e.reason;
                    (("AFTER" === d && t) ||
                      ("DURING" === d && 0 === u.duration)) &&
                      P(),
                      t && M();
                  })
                  .on("progress.internal", function (e) {
                    P();
                  })
                  .on("add.internal", function (e) {
                    M();
                  })
                  .on("destroy.internal", function (e) {
                    l.removePin(e.reset);
                  });
              var P = function (e) {
                  if (m && a) {
                    var t = a.info(),
                      n = y.spacer.firstChild;
                    if (e || "DURING" !== d) {
                      var r = {
                          position: y.inFlow ? "relative" : "absolute",
                          top: 0,
                          left: 0,
                        },
                        s = i.css(n, "position") != r.position;
                      y.pushFollowers
                        ? u.duration > 0 &&
                          ("AFTER" === d &&
                          0 === parseFloat(i.css(y.spacer, "padding-top"))
                            ? (s = !0)
                            : "BEFORE" === d &&
                              0 ===
                                parseFloat(i.css(y.spacer, "padding-bottom")) &&
                              (s = !0))
                        : (r[t.vertical ? "top" : "left"] = u.duration * c),
                        i.css(n, r),
                        s && M();
                    } else {
                      "fixed" != i.css(n, "position") &&
                        (i.css(n, { position: "fixed" }), M());
                      var o = i.get.offset(y.spacer, !0),
                        l =
                          u.reverse || 0 === u.duration
                            ? t.scrollPos - p.start
                            : Math.round(c * u.duration * 10) / 10;
                      (o[t.vertical ? "top" : "left"] += l),
                        i.css(y.spacer.firstChild, {
                          top: o.top,
                          left: o.left,
                        });
                    }
                  }
                },
                M = function () {
                  if (m && a && y.inFlow) {
                    var e = "DURING" === d,
                      t = a.info("vertical"),
                      n = y.spacer.firstChild,
                      r = i.isMarginCollapseType(i.css(y.spacer, "display")),
                      s = {};
                    y.relSize.width || y.relSize.autoFullWidth
                      ? e
                        ? i.css(m, { width: i.get.width(y.spacer) })
                        : i.css(m, { width: "100%" })
                      : ((s["min-width"] = i.get.width(t ? m : n, !0, !0)),
                        (s.width = e ? s["min-width"] : "auto")),
                      y.relSize.height
                        ? e
                          ? i.css(m, {
                              height:
                                i.get.height(y.spacer) -
                                (y.pushFollowers ? u.duration : 0),
                            })
                          : i.css(m, { height: "100%" })
                        : ((s["min-height"] = i.get.height(t ? n : m, !0, !r)),
                          (s.height = e ? s["min-height"] : "auto")),
                      y.pushFollowers &&
                        ((s["padding" + (t ? "Top" : "Left")] = u.duration * c),
                        (s["padding" + (t ? "Bottom" : "Right")] =
                          u.duration * (1 - c))),
                      i.css(y.spacer, s);
                  }
                },
                L = function () {
                  a && m && "DURING" === d && !a.info("isDocument") && P();
                },
                A = function () {
                  a &&
                    m &&
                    "DURING" === d &&
                    (((y.relSize.width || y.relSize.autoFullWidth) &&
                      i.get.width(window) !=
                        i.get.width(y.spacer.parentNode)) ||
                      (y.relSize.height &&
                        i.get.height(window) !=
                          i.get.height(y.spacer.parentNode))) &&
                    M();
                },
                D = function (e) {
                  a &&
                    m &&
                    "DURING" === d &&
                    !a.info("isDocument") &&
                    (e.preventDefault(),
                    a._setScrollPos(
                      a.info("scrollPos") -
                        ((e.wheelDelta ||
                          e[
                            a.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"
                          ]) / 3 || 30 * -e.detail)
                    ));
                };
              (this.setPin = function (e, t) {
                if (
                  ((t = i.extend(
                    {},
                    {
                      pushFollowers: !0,
                      spacerClass: "scrollmagic-pin-spacer",
                    },
                    t
                  )),
                  !(e = i.get.elements(e)[0]))
                )
                  return (
                    g(
                      1,
                      "ERROR calling method 'setPin()': Invalid pin element supplied."
                    ),
                    l
                  );
                if ("fixed" === i.css(e, "position"))
                  return (
                    g(
                      1,
                      "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."
                    ),
                    l
                  );
                if (m) {
                  if (m === e) return l;
                  l.removePin();
                }
                var n = (m = e).parentNode.style.display,
                  r = [
                    "top",
                    "left",
                    "bottom",
                    "right",
                    "margin",
                    "marginLeft",
                    "marginRight",
                    "marginTop",
                    "marginBottom",
                  ];
                m.parentNode.style.display = "none";
                var a = "absolute" != i.css(m, "position"),
                  s = i.css(m, r.concat(["display"])),
                  o = i.css(m, ["width", "height"]);
                (m.parentNode.style.display = n),
                  !a &&
                    t.pushFollowers &&
                    (g(
                      2,
                      "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."
                    ),
                    (t.pushFollowers = !1)),
                  window.setTimeout(function () {
                    m &&
                      0 === u.duration &&
                      t.pushFollowers &&
                      g(
                        2,
                        "WARNING: pushFollowers =",
                        !0,
                        "has no effect, when scene duration is 0."
                      );
                  }, 0);
                var d = m.parentNode.insertBefore(
                    document.createElement("div"),
                    m
                  ),
                  c = i.extend(s, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box",
                  });
                if (
                  (a || i.extend(c, i.css(m, ["width", "height"])),
                  i.css(d, c),
                  d.setAttribute("data-scrollmagic-pin-spacer", ""),
                  i.addClass(d, t.spacerClass),
                  (y = {
                    spacer: d,
                    relSize: {
                      width: "%" === o.width.slice(-1),
                      height: "%" === o.height.slice(-1),
                      autoFullWidth:
                        "auto" === o.width &&
                        a &&
                        i.isMarginCollapseType(s.display),
                    },
                    pushFollowers: t.pushFollowers,
                    inFlow: a,
                  }),
                  !m.___origStyle)
                ) {
                  m.___origStyle = {};
                  var p = m.style,
                    f = r.concat([
                      "width",
                      "height",
                      "position",
                      "boxSizing",
                      "mozBoxSizing",
                      "webkitBoxSizing",
                    ]);
                  f.forEach(function (e) {
                    m.___origStyle[e] = p[e] || "";
                  });
                }
                return (
                  y.relSize.width && i.css(d, { width: o.width }),
                  y.relSize.height && i.css(d, { height: o.height }),
                  d.appendChild(m),
                  i.css(m, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto",
                  }),
                  (y.relSize.width || y.relSize.autoFullWidth) &&
                    i.css(m, {
                      boxSizing: "border-box",
                      mozBoxSizing: "border-box",
                      webkitBoxSizing: "border-box",
                    }),
                  window.addEventListener("scroll", L),
                  window.addEventListener("resize", L),
                  window.addEventListener("resize", A),
                  m.addEventListener("mousewheel", D),
                  m.addEventListener("DOMMouseScroll", D),
                  g(3, "added pin"),
                  P(),
                  l
                );
              }),
                (this.removePin = function (e) {
                  if (m) {
                    if (("DURING" === d && P(!0), e || !a)) {
                      var t = y.spacer.firstChild;
                      if (t.hasAttribute("data-scrollmagic-pin-spacer")) {
                        var n = y.spacer.style,
                          r = {};
                        [
                          "margin",
                          "marginLeft",
                          "marginRight",
                          "marginTop",
                          "marginBottom",
                        ].forEach(function (e) {
                          r[e] = n[e] || "";
                        }),
                          i.css(t, r);
                      }
                      y.spacer.parentNode.insertBefore(t, y.spacer),
                        y.spacer.parentNode.removeChild(y.spacer),
                        m.parentNode.hasAttribute(
                          "data-scrollmagic-pin-spacer"
                        ) || (i.css(m, m.___origStyle), delete m.___origStyle);
                    }
                    window.removeEventListener("scroll", L),
                      window.removeEventListener("resize", L),
                      window.removeEventListener("resize", A),
                      m.removeEventListener("mousewheel", D),
                      m.removeEventListener("DOMMouseScroll", D),
                      (m = void 0),
                      g(
                        3,
                        "removed pin (reset: " + (e ? "true" : "false") + ")"
                      );
                  }
                  return l;
                });
              var z,
                N = [];
              return (
                l.on("destroy.internal", function (e) {
                  l.removeClassToggle(e.reset);
                }),
                (this.setClassToggle = function (e, t) {
                  var n = i.get.elements(e);
                  return 0 !== n.length && i.type.String(t)
                    ? (N.length > 0 && l.removeClassToggle(),
                      (z = t),
                      (N = n),
                      l.on(
                        "enter.internal_class leave.internal_class",
                        function (e) {
                          var t =
                            "enter" === e.type ? i.addClass : i.removeClass;
                          N.forEach(function (e, n) {
                            t(e, z);
                          });
                        }
                      ),
                      l)
                    : (g(
                        1,
                        "ERROR calling method 'setClassToggle()': Invalid " +
                          (0 === n.length ? "element" : "classes") +
                          " supplied."
                      ),
                      l);
                }),
                (this.removeClassToggle = function (e) {
                  return (
                    e &&
                      N.forEach(function (e, t) {
                        i.removeClass(e, z);
                      }),
                    l.off("start.internal_class end.internal_class"),
                    (z = void 0),
                    (N = []),
                    l
                  );
                }),
                (function () {
                  for (var e in u)
                    o.hasOwnProperty(e) ||
                      (g(2, 'WARNING: Unknown option "' + e + '"'),
                      delete u[e]);
                  for (var t in o) k(t);
                  S();
                })(),
                l
              );
            });
          var n = {
            defaults: {
              duration: 0,
              offset: 0,
              triggerElement: void 0,
              triggerHook: 0.5,
              reverse: !0,
              loglevel: 2,
            },
            validate: {
              offset: function (e) {
                if (((e = parseFloat(e)), !i.type.Number(e)))
                  throw ['Invalid value for option "offset":', e];
                return e;
              },
              triggerElement: function (e) {
                if ((e = e || void 0)) {
                  var t = i.get.elements(e)[0];
                  if (!t || !t.parentNode)
                    throw [
                      'Element defined in option "triggerElement" was not found:',
                      e,
                    ];
                  e = t;
                }
                return e;
              },
              triggerHook: function (e) {
                var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
                if (i.type.Number(e))
                  e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                  if (!(e in t))
                    throw ['Invalid value for option "triggerHook": ', e];
                  e = t[e];
                }
                return e;
              },
              reverse: function (e) {
                return !!e;
              },
              loglevel: function (e) {
                if (((e = parseInt(e)), !i.type.Number(e) || e < 0 || e > 3))
                  throw ['Invalid value for option "loglevel":', e];
                return e;
              },
            },
            shifts: ["duration", "offset", "triggerHook"],
          };
          (e.Scene.addOption = function (t, i, r, a) {
            t in n.defaults
              ? e._util.log(
                  1,
                  "[static] ScrollMagic.Scene -> Cannot add Scene option '" +
                    t +
                    "', because it already exists."
                )
              : ((n.defaults[t] = i),
                (n.validate[t] = r),
                a && n.shifts.push(t));
          }),
            (e.Scene.extend = function (t) {
              var n = this;
              (e.Scene = function () {
                return (
                  n.apply(this, arguments),
                  (this.$super = i.extend({}, this)),
                  t.apply(this, arguments) || this
                );
              }),
                i.extend(e.Scene, n),
                (e.Scene.prototype = n.prototype),
                (e.Scene.prototype.constructor = e.Scene);
            }),
            (e.Event = function (e, t, n, i) {
              for (var r in (i = i || {})) this[r] = i[r];
              return (
                (this.type = e),
                (this.target = this.currentTarget = n),
                (this.namespace = t || ""),
                (this.timeStamp = this.timestamp = Date.now()),
                this
              );
            });
          var i = (e._util = (function (e) {
            var t,
              n = {},
              i = function (e) {
                return parseFloat(e) || 0;
              },
              r = function (t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
              },
              a = function (t, n, a, s) {
                if ((n = n === document ? e : n) === e) s = !1;
                else if (!h.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var o =
                  (a
                    ? n["offset" + t] || n["outer" + t]
                    : n["client" + t] || n["inner" + t]) || 0;
                if (a && s) {
                  var l = r(n);
                  o +=
                    "Height" === t
                      ? i(l.marginTop) + i(l.marginBottom)
                      : i(l.marginLeft) + i(l.marginRight);
                }
                return o;
              },
              s = function (e) {
                return e
                  .replace(/^[^a-z]+([a-z])/g, "$1")
                  .replace(/-([a-z])/g, function (e) {
                    return e[1].toUpperCase();
                  });
              };
            (n.extend = function (e) {
              for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                  for (var n in arguments[t])
                    arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
              return e;
            }),
              (n.isMarginCollapseType = function (e) {
                return (
                  [
                    "block",
                    "flex",
                    "list-item",
                    "table",
                    "-webkit-box",
                  ].indexOf(e) > -1
                );
              });
            var o = 0,
              l = ["ms", "moz", "webkit", "o"],
              u = e.requestAnimationFrame,
              d = e.cancelAnimationFrame;
            for (t = 0; !u && t < l.length; ++t)
              (u = e[l[t] + "RequestAnimationFrame"]),
                (d =
                  e[l[t] + "CancelAnimationFrame"] ||
                  e[l[t] + "CancelRequestAnimationFrame"]);
            u ||
              (u = function (t) {
                var n = new Date().getTime(),
                  i = Math.max(0, 16 - (n - o)),
                  r = e.setTimeout(function () {
                    t(n + i);
                  }, i);
                return (o = n + i), r;
              }),
              d ||
                (d = function (t) {
                  e.clearTimeout(t);
                }),
              (n.rAF = u.bind(e)),
              (n.cAF = d.bind(e));
            var c = ["error", "warn", "log"],
              p = e.console || {};
            for (p.log = p.log || function () {}, t = 0; t < c.length; t++) {
              var f = c[t];
              p[f] || (p[f] = p.log);
            }
            n.log = function (e) {
              (e > c.length || e <= 0) && (e = c.length);
              var t = new Date(),
                n =
                  ("0" + t.getHours()).slice(-2) +
                  ":" +
                  ("0" + t.getMinutes()).slice(-2) +
                  ":" +
                  ("0" + t.getSeconds()).slice(-2) +
                  ":" +
                  ("00" + t.getMilliseconds()).slice(-3),
                i = c[e - 1],
                r = Array.prototype.splice.call(arguments, 1),
                a = Function.prototype.bind.call(p[i], p);
              r.unshift(n), a.apply(p, r);
            };
            var h = (n.type = function (e) {
              return Object.prototype.toString
                .call(e)
                .replace(/^\[object (.+)\]$/, "$1")
                .toLowerCase();
            });
            (h.String = function (e) {
              return "string" === h(e);
            }),
              (h.Function = function (e) {
                return "function" === h(e);
              }),
              (h.Array = function (e) {
                return Array.isArray(e);
              }),
              (h.Number = function (e) {
                return !h.Array(e) && e - parseFloat(e) + 1 >= 0;
              }),
              (h.DomElement = function (e) {
                return "object" == typeof HTMLElement
                  ? e instanceof HTMLElement
                  : e &&
                      "object" == typeof e &&
                      null !== e &&
                      1 === e.nodeType &&
                      "string" == typeof e.nodeName;
              });
            var v = (n.get = {});
            return (
              (v.elements = function (t) {
                var n = [];
                if (h.String(t))
                  try {
                    t = document.querySelectorAll(t);
                  } catch (e) {
                    return n;
                  }
                if ("nodelist" === h(t) || h.Array(t))
                  for (var i = 0, r = (n.length = t.length); i < r; i++) {
                    var a = t[i];
                    n[i] = h.DomElement(a) ? a : v.elements(a);
                  }
                else
                  (h.DomElement(t) || t === document || t === e) && (n = [t]);
                return n;
              }),
              (v.scrollTop = function (t) {
                return t && "number" == typeof t.scrollTop
                  ? t.scrollTop
                  : e.pageYOffset || 0;
              }),
              (v.scrollLeft = function (t) {
                return t && "number" == typeof t.scrollLeft
                  ? t.scrollLeft
                  : e.pageXOffset || 0;
              }),
              (v.width = function (e, t, n) {
                return a("width", e, t, n);
              }),
              (v.height = function (e, t, n) {
                return a("height", e, t, n);
              }),
              (v.offset = function (e, t) {
                var n = { top: 0, left: 0 };
                if (e && e.getBoundingClientRect) {
                  var i = e.getBoundingClientRect();
                  (n.top = i.top),
                    (n.left = i.left),
                    t || ((n.top += v.scrollTop()), (n.left += v.scrollLeft()));
                }
                return n;
              }),
              (n.addClass = function (e, t) {
                t &&
                  (e.classList ? e.classList.add(t) : (e.className += " " + t));
              }),
              (n.removeClass = function (e, t) {
                t &&
                  (e.classList
                    ? e.classList.remove(t)
                    : (e.className = e.className.replace(
                        new RegExp(
                          "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                          "gi"
                        ),
                        " "
                      )));
              }),
              (n.css = function (e, t) {
                if (h.String(t)) return r(e)[s(t)];
                if (h.Array(t)) {
                  var n = {},
                    i = r(e);
                  return (
                    t.forEach(function (e, t) {
                      n[e] = i[s(e)];
                    }),
                    n
                  );
                }
                for (var a in t) {
                  var o = t[a];
                  o == parseFloat(o) && (o += "px"), (e.style[s(a)] = o);
                }
              }),
              n
            );
          })(window || {}));
          return (
            (e.Scene.prototype.addIndicators = function () {
              return (
                e._util.log(
                  1,
                  "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
                ),
                this
              );
            }),
            (e.Scene.prototype.removeIndicators = function () {
              return (
                e._util.log(
                  1,
                  "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
                ),
                this
              );
            }),
            (e.Scene.prototype.setTween = function () {
              return (
                e._util.log(
                  1,
                  "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
                ),
                this
              );
            }),
            (e.Scene.prototype.removeTween = function () {
              return (
                e._util.log(
                  1,
                  "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
                ),
                this
              );
            }),
            (e.Scene.prototype.setVelocity = function () {
              return (
                e._util.log(
                  1,
                  "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
                ),
                this
              );
            }),
            (e.Scene.prototype.removeVelocity = function () {
              return (
                e._util.log(
                  1,
                  "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
                ),
                this
              );
            }),
            e
          );
        })
          ? i.call(t, n, t, e)
          : i) || (e.exports = r);
  },
});
