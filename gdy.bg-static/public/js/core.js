! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(i, o, s) {
        for (var a, l, c, u = 0, d = []; u < i.length; u++) l = i[u], r[l] && d.push(r[l][0]), r[l] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
        for (n && n(i, o, s); d.length;) d.shift()();
        if (s)
            for (u = 0; u < s.length; u++) c = e(e.s = s[u]);
        return c
    };
    var i = {},
        r = {
            8: 0
        };
    e.e = function(t) {
        function n() {
            a.onerror = a.onload = null, clearTimeout(l);
            var e = r[t];
            0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), r[t] = void 0)
        }
        var i = r[t];
        if (0 === i) return new Promise(function(t) {
            t()
        });
        if (i) return i[2];
        var o = new Promise(function(e, n) {
            i = r[t] = [e, n]
        });
        i[2] = o;
        var s = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, e.nc && a.setAttribute("nonce", e.nc), a.src = e.p + "" + t + ".min.js";
        var l = setTimeout(n, 12e4);
        return a.onerror = a.onload = n, s.appendChild(a), o
    }, e.m = t, e.c = i, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e.oe = function(t) {
        throw console.error(t), t
    }, e(e.s = 27)
}([function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = e;
        if ("." === n[0] && (n = e.substr(1)), t.classList) return t.classList.add(n);
        t.className += " " + n
    }

    function r(t, e, n) {
        return document.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
    }

    function o(t, e, n) {
        function i() {
            n.apply(this, arguments), X(t, e, i)
        }
        return r(t, e, i)
    }

    function s(t) {
        var e = document.createElement("div");
        return function(n) {
            for (e.innerHTML = n; e.children.length > 0;) t.appendChild(e.children[0]);
            e.innerHTML = ""
        }
    }

    function a(t) {
        return new Promise(function(e, n) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function(t) {
                4 === i.readyState && (i.onreadystatechange = null, 200 === i.status ? e({
                    event: t,
                    request: i
                }) : n({
                    event: t,
                    request: i
                }))
            }, i.open("GET", t.url), i.setRequestHeader("rollbar-referrer", document.location.href), i.send(null)
        })
    }

    function l(t) {
        for (var e = 0, n = arguments.length, i = null, r = ""; ++e < n;)
            if (i = arguments[e], M(i))
                for (r in i) L(i, r) && (t[r] = i[r]);
        return t
    }

    function c(t, e, n) {
        return 3 === arguments.length ? n < t ? t : n > e ? e : n : function(n) {
            return n < t ? t : n > e ? e : n
        }
    }

    function u(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function d(t) {
        for (var e = t.length, n = new Array(e), i = null; e--;) i = t[e], null === i || void 0 === i || H(i) ? n[e] = i : R(i) ? n[e] = d(i) : G(i) ? n[e] = f(i) : n[e] = i;
        return n
    }

    function h(t) {
        var e = {},
            n = "";
        for (n in t) L(t, n) && (e[n] = t[n]);
        return e
    }

    function f(t) {
        var e = {},
            n = "",
            i = null;
        for (n in t) L(t, n) && (i = t[n], null === i || void 0 === i || H(i) ? e[n] = i : R(i) ? e[n] = d(i) : G(i) ? e[n] = f(i) : e[n] = i);
        return e
    }

    function p(t, e, n) {
        var i = {
            bubbles: !1,
            target: e,
            timeStamp: Date.now(),
            type: t
        };
        if (n)
            for (var r in n) L(n, r) && (i[r] = n[r]);
        return i
    }

    function b(t, e, n, i) {
        var r;
        return function() {
            var o = n || this,
                s = arguments,
                a = i && !r,
                l = function() {
                    r = null, i || t.apply(o, s)
                };
            clearTimeout(r), r = setTimeout(l, e), a && t.apply(o, s)
        }
    }

    function g(t, e, n) {
        return function(i) {
            var r = O(i),
                o = null;
            r && (r.matches(t) || (r = A(r, t)), r && (o = n || r, i.delegateTarget = r, e.apply(o, arguments)))
        }
    }

    function m(t) {
        $(t, "", -1)
    }

    function _(t) {
        t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen()
    }

    function v(t, e, n, i) {
        var r = null;
        if (document.createEventObject) return r = document.createEventObject(), t.fireEvent("on" + e, r);
        var o = !!M(n) && n,
            s = !M(i) || i;
        return r = document.createEvent("HTMLEvents"), r.initEvent(e, o, s), !t.dispatchEvent(r)
    }

    function y(t) {
        if (t.getBoundingClientRect) return t.getBoundingClientRect();
        var e = t.innerHeight,
            n = t.innerWidth;
        return {
            bottom: e,
            height: e,
            left: 0,
            right: n,
            top: 0,
            width: n
        }
    }

    function w(t) {
        for (var e = document.cookie.split(";"), n = e.length, i = t + "=", r = null; n--;)
            if (r = e[n].trim(), 0 === r.indexOf(i)) return decodeURIComponent(r.substring(i.length, r.length));
        return null
    }

    function E(t) {
        var e = y(t),
            n = t.ownerDocument || t.document,
            i = n.body,
            r = n.documentElement,
            o = r.clientTop || i.clientTop || 0,
            s = r.clientLeft || i.clientLeft || 0,
            a = (window.pageYOffset || rt.f && r.scrollTop || i.scrollTop) - o,
            l = (window.pageXOffset || rt.f && r.scrollLeft || i.scrollLeft) - s,
            c = e.top + a,
            u = e.left + l,
            d = e.bottom + a,
            h = e.right + l;
        return {
            bottom: d,
            height: e.height,
            left: u,
            right: h,
            top: c,
            width: e.width
        }
    }

    function O(t) {
        var e = t || window.event;
        return e.target || e.srcElement
    }

    function S(t) {
        var e;
        try {
            e = t.frameElement || t.ownerDocument.defaultView.frameElement
        } catch (t) {
            return !1
        }
        return e
    }

    function k(t, e) {
        var n = e;
        M(n) || (n = Object.keys(t));
        for (var i = n.length, r = new Array(i); i--;) r[i] = t[n[i]];
        return r
    }

    function A(t, e) {
        if (t !== document && t.matches(e)) return t;
        var n = x(t, e);
        return !(n === document || !n.matches(e)) && n
    }

    function x(t, e) {
        var n = t.parentNode;
        do {
            if (n.matches(e)) return n
        } while ((n = n.parentNode) && 1 === n.nodeType);
        return n
    }

    function j(t) {
        return t && t !== window ? t.scrollLeft : I()
    }

    function T(t) {
        return t && t !== window ? t.scrollTop : N()
    }

    function C(t) {
        return "cnd_" + t
    }

    function I() {
        return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0)
    }

    function N() {
        return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    }

    function z(t, e) {
        var n = e;
        return "." === n[0] && (n = n.substr(1)), t.classList ? t.classList.contains(n) : !!t.className.match(new RegExp("(\\s|^)" + n + "(\\s|$)"))
    }

    function L(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function P(t, e) {
        var n = Object.create(t);
        if (e)
            for (var i in e) L(e, i) && (n[i] = e[i]);
        return n
    }

    function D(t, e) {
        return e.parentNode.insertBefore(t, e)
    }

    function R(t) {
        return Array.isArray(t)
    }

    function M(t) {
        return null !== t && void 0 !== t
    }

    function H(t) {
        return null !== t && "object" == typeof t && 1 === t.nodeType
    }

    function G(t) {
        var e = typeof t;
        return "object" === e || "function" === e
    }

    function B(t) {
        return t.self === t
    }

    function q(t, e) {
        return new Promise(function(n, i) {
            var r = null;
            r = e && e.node ? e.node : document.head || document.getElementsByTagName("head")[0];
            var o = document.createElement("script");
            o.async = !0, o.type = "text/javascript", o.src = t, o.onload = function() {
                this.onload = this.onerror = null, n(o)
            }, o.onerror = function() {
                this.onload = this.onerror = null, i(new Error("Error loading script: " + t))
            }, r.appendChild(o)
        })
    }

    function U() {
        var t = null,
            e = null,
            n = null,
            i = null,
            r = null;
        return t = "twttr" in window ? Promise.resolve() : q("//platform.twitter.com/widgets.js"), e = "VINE_EMBEDS" in window ? Promise.resolve() : q("https://platform.vine.co/static/scripts/embed.js"), n = "FB" in window ? Promise.resolve() : q("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3"), i = "instgrm" in window ? Promise.resolve() : q("//platform.instagram.com/en_US/embeds.js"), r = "imgurEmbed" in window ? Promise.resolve() : q("//s.imgur.com/min/embed.js"), Promise.all([t, e, n, i, r])
    }

    function F(t) {
        return "function" == typeof t ? function() {
            for (var e = arguments.length, n = new Array(e); e--;) n[e] = arguments[e];
            return !t.apply(null, n)
        } : !t
    }

    function W(t) {
        function e() {
            for (var t = null; t = W._fns.shift();) t()
        }
        "complete" === document.readyState ? t() : (W._fns.push(t), 1 === W._fns.length && o(window, "load", e))
    }

    function V(t) {
        function e() {
            for (var t = null; t = V._fns.shift();) t()
        }
        "complete" === document.readyState || "interactive" === document.readyState ? t() : (V._fns.push(t), 1 === V._fns.length && o(window, "DOMContentLoaded", e))
    }

    function Y() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function J(t, e) {
        var n = e;
        if ("." === n[0] && (n = e.substr(1)), t.classList) return t.classList.remove(n);
        if (z(t, n)) {
            var i = new RegExp("(\\s|^)" + n + "(\\s|$)");
            t.className = t.className.replace(i, " ")
        }
    }

    function K(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function X(t, e, n) {
        return document.removeEventListener ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function $(t, e, n) {
        var i = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + r.toGMTString()
        }
        document.cookie = t + "=" + e + i + "; path=/"
    }

    function Z(t, e, n) {
        void 0 === e && (e = 250);
        var i, r;
        return function() {
            var o = n || this,
                s = (new Date).getTime(),
                a = arguments;
            i && s < i + e ? (clearTimeout(r), r = setTimeout(function() {
                i = s, t.apply(o, a)
            }, e)) : (i = s, t.apply(o, a))
        }
    }

    function Q(t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var n = e.textContent;
        return e = null, n
    }

    function tt(t) {
        var e = t.indexOf("?");
        return -1 === e ? t : t.substring(0, e)
    }

    function et(t) {
        var e = t.indexOf("?"),
            n = {};
        if (-1 === e) return n;
        for (var i = t.substr(e + 1), r = i.split("&"), o = r.length, s = null, a = null, l = 0; l < o; l++) s = r[l].split("="), a = decodeURIComponent(s[0]), n.hasOwnProperty(a) || (n[a] = []), s.length > 1 && n[a].push(decodeURIComponent(s[1]));
        return n
    }

    function nt(t) {
        var e = "";
        for (var n in t) t.hasOwnProperty(n) && t[n].forEach(function(t) {
            e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t)
        });
        return e.substr(1)
    }

    function it(t, e) {
        var n = et(t);
        for (var i in e) e.hasOwnProperty(i) && (Array.isArray(e[i]) ? n[i] = e[i] : n[i] = [e[i]]);
        return tt(t) + "?" + nt(n)
    }
    e.a = i, e.b = r, e.c = o, e.d = s, e.e = a, e.f = l, e.g = c, e.h = u, e.i = h, e.j = f, e.k = p, e.l = b, e.m = g, e.n = m, e.o = _, e.p = v, e.q = y, e.r = w, e.s = E, e.t = S, e.v = k, e.w = A, e.x = x, e.y = j, e.z = T, e.u = C, e.A = N, e.B = z, e.C = L, e.D = P, e.E = D, e.F = M, e.G = B, e.H = q, e.I = U, e.J = F, e.K = W, e.L = V, e.M = Y, e.N = J, e.O = K, e.P = X, e.Q = $, e.R = Z, e.S = Q, e.T = it;
    var rt = n(3);
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector, W._fns = [], V._fns = []
}, function(t, e, n) {
    (function(i) {
        var r;
        ! function(o) {
            function s() {
                this._events = {}, this._conf && a.call(this, this._conf)
            }

            function a(t) {
                t ? (this._conf = t, t.delimiter && (this.delimiter = t.delimiter), this._maxListeners = t.maxListeners !== o ? t.maxListeners : f, t.wildcard && (this.wildcard = t.wildcard), t.newListener && (this.newListener = t.newListener), t.verboseMemoryLeak && (this.verboseMemoryLeak = t.verboseMemoryLeak), this.wildcard && (this.listenerTree = {})) : this._maxListeners = f
            }

            function l(t, e) {
                var n = "(node) warning: possible EventEmitter memory leak detected. " + t + " listeners added. Use emitter.setMaxListeners() to increase limit.";
                if (this.verboseMemoryLeak && (n += " Event name: " + e + "."), void 0 !== i && i.emitWarning) {
                    var r = new Error(n);
                    r.name = "MaxListenersExceededWarning", r.emitter = this, r.count = t, i.emitWarning(r)
                } else console.error(n), console.trace && console.trace()
            }

            function c(t) {
                this._events = {}, this.newListener = !1, this.verboseMemoryLeak = !1, a.call(this, t)
            }

            function u(t, e, n, i) {
                if (!n) return [];
                var r, o, s, a, l, c, d, h = [],
                    f = e.length,
                    p = e[i],
                    b = e[i + 1];
                if (i === f && n._listeners) {
                    if ("function" == typeof n._listeners) return t && t.push(n._listeners), [n];
                    for (r = 0, o = n._listeners.length; r < o; r++) t && t.push(n._listeners[r]);
                    return [n]
                }
                if ("*" === p || "**" === p || n[p]) {
                    if ("*" === p) {
                        for (s in n) "_listeners" !== s && n.hasOwnProperty(s) && (h = h.concat(u(t, e, n[s], i + 1)));
                        return h
                    }
                    if ("**" === p) {
                        d = i + 1 === f || i + 2 === f && "*" === b, d && n._listeners && (h = h.concat(u(t, e, n, f)));
                        for (s in n) "_listeners" !== s && n.hasOwnProperty(s) && ("*" === s || "**" === s ? (n[s]._listeners && !d && (h = h.concat(u(t, e, n[s], f))), h = h.concat(u(t, e, n[s], i))) : h = s === b ? h.concat(u(t, e, n[s], i + 2)) : h.concat(u(t, e, n[s], i)));
                        return h
                    }
                    h = h.concat(u(t, e, n[p], i + 1))
                }
                if (a = n["*"], a && u(t, e, a, i + 1), l = n["**"])
                    if (i < f) {
                        l._listeners && u(t, e, l, f);
                        for (s in l) "_listeners" !== s && l.hasOwnProperty(s) && (s === b ? u(t, e, l[s], i + 2) : s === p ? u(t, e, l[s], i + 1) : (c = {}, c[s] = l[s], u(t, e, {
                            "**": c
                        }, i + 1)))
                    } else l._listeners ? u(t, e, l, f) : l["*"] && l["*"]._listeners && u(t, e, l["*"], f);
                return h
            }

            function d(t, e) {
                t = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                for (var n = 0, i = t.length; n + 1 < i; n++)
                    if ("**" === t[n] && "**" === t[n + 1]) return;
                for (var r = this.listenerTree, s = t.shift(); s !== o;) {
                    if (r[s] || (r[s] = {}), r = r[s], 0 === t.length) return r._listeners ? ("function" == typeof r._listeners && (r._listeners = [r._listeners]), r._listeners.push(e), !r._listeners.warned && this._maxListeners > 0 && r._listeners.length > this._maxListeners && (r._listeners.warned = !0, l.call(this, r._listeners.length, s))) : r._listeners = e, !0;
                    s = t.shift()
                }
                return !0
            }
            var h = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                f = 10;
            c.EventEmitter2 = c, c.prototype.delimiter = ".", c.prototype.setMaxListeners = function(t) {
                t !== o && (this._maxListeners = t, this._conf || (this._conf = {}), this._conf.maxListeners = t)
            }, c.prototype.event = "", c.prototype.once = function(t, e) {
                return this._once(t, e, !1)
            }, c.prototype.prependOnceListener = function(t, e) {
                return this._once(t, e, !0)
            }, c.prototype._once = function(t, e, n) {
                return this._many(t, 1, e, n), this
            }, c.prototype.many = function(t, e, n) {
                return this._many(t, e, n, !1)
            }, c.prototype.prependMany = function(t, e, n) {
                return this._many(t, e, n, !0)
            }, c.prototype._many = function(t, e, n, i) {
                function r() {
                    return 0 == --e && o.off(t, r), n.apply(this, arguments)
                }
                var o = this;
                if ("function" != typeof n) throw new Error("many only accepts instances of Function");
                return r._origin = n, this._on(t, r, i), o
            }, c.prototype.emit = function() {
                this._events || s.call(this);
                var t = arguments[0];
                if ("newListener" === t && !this.newListener && !this._events.newListener) return !1;
                var e, n, i, r, o, a = arguments.length;
                if (this._all && this._all.length) {
                    if (o = this._all.slice(), a > 3)
                        for (e = new Array(a), r = 0; r < a; r++) e[r] = arguments[r];
                    for (i = 0, n = o.length; i < n; i++) switch (this.event = t, a) {
                        case 1:
                            o[i].call(this, t);
                            break;
                        case 2:
                            o[i].call(this, t, arguments[1]);
                            break;
                        case 3:
                            o[i].call(this, t, arguments[1], arguments[2]);
                            break;
                        default:
                            o[i].apply(this, e)
                    }
                }
                if (this.wildcard) {
                    o = [];
                    var l = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    u.call(this, o, l, this.listenerTree, 0)
                } else {
                    if ("function" == typeof(o = this._events[t])) {
                        switch (this.event = t, a) {
                            case 1:
                                o.call(this);
                                break;
                            case 2:
                                o.call(this, arguments[1]);
                                break;
                            case 3:
                                o.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (e = new Array(a - 1), r = 1; r < a; r++) e[r - 1] = arguments[r];
                                o.apply(this, e)
                        }
                        return !0
                    }
                    o && (o = o.slice())
                }
                if (o && o.length) {
                    if (a > 3)
                        for (e = new Array(a - 1), r = 1; r < a; r++) e[r - 1] = arguments[r];
                    for (i = 0, n = o.length; i < n; i++) switch (this.event = t, a) {
                        case 1:
                            o[i].call(this);
                            break;
                        case 2:
                            o[i].call(this, arguments[1]);
                            break;
                        case 3:
                            o[i].call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            o[i].apply(this, e)
                    }
                    return !0
                }
                if (!this._all && "error" === t) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                return !!this._all
            }, c.prototype.emitAsync = function() {
                this._events || s.call(this);
                var t = arguments[0];
                if ("newListener" === t && !this.newListener && !this._events.newListener) return Promise.resolve([!1]);
                var e, n, i, r, o, a = [],
                    l = arguments.length;
                if (this._all) {
                    if (l > 3)
                        for (e = new Array(l), r = 1; r < l; r++) e[r] = arguments[r];
                    for (i = 0, n = this._all.length; i < n; i++) switch (this.event = t, l) {
                        case 1:
                            a.push(this._all[i].call(this, t));
                            break;
                        case 2:
                            a.push(this._all[i].call(this, t, arguments[1]));
                            break;
                        case 3:
                            a.push(this._all[i].call(this, t, arguments[1], arguments[2]));
                            break;
                        default:
                            a.push(this._all[i].apply(this, e))
                    }
                }
                if (this.wildcard) {
                    o = [];
                    var c = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    u.call(this, o, c, this.listenerTree, 0)
                } else o = this._events[t];
                if ("function" == typeof o) switch (this.event = t, l) {
                    case 1:
                        a.push(o.call(this));
                        break;
                    case 2:
                        a.push(o.call(this, arguments[1]));
                        break;
                    case 3:
                        a.push(o.call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        for (e = new Array(l - 1), r = 1; r < l; r++) e[r - 1] = arguments[r];
                        a.push(o.apply(this, e))
                } else if (o && o.length) {
                    if (o = o.slice(), l > 3)
                        for (e = new Array(l - 1), r = 1; r < l; r++) e[r - 1] = arguments[r];
                    for (i = 0, n = o.length; i < n; i++) switch (this.event = t, l) {
                        case 1:
                            a.push(o[i].call(this));
                            break;
                        case 2:
                            a.push(o[i].call(this, arguments[1]));
                            break;
                        case 3:
                            a.push(o[i].call(this, arguments[1], arguments[2]));
                            break;
                        default:
                            a.push(o[i].apply(this, e))
                    }
                } else if (!this._all && "error" === t) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                return Promise.all(a)
            }, c.prototype.on = function(t, e) {
                return this._on(t, e, !1)
            }, c.prototype.prependListener = function(t, e) {
                return this._on(t, e, !0)
            }, c.prototype.onAny = function(t) {
                return this._onAny(t, !1)
            }, c.prototype.prependAny = function(t) {
                return this._onAny(t, !0)
            }, c.prototype.addListener = c.prototype.on, c.prototype._onAny = function(t, e) {
                if ("function" != typeof t) throw new Error("onAny only accepts instances of Function");
                return this._all || (this._all = []), e ? this._all.unshift(t) : this._all.push(t), this
            }, c.prototype._on = function(t, e, n) {
                if ("function" == typeof t) return this._onAny(t, e), this;
                if ("function" != typeof e) throw new Error("on only accepts instances of Function");
                return this._events || s.call(this), this.emit("newListener", t, e), this.wildcard ? (d.call(this, t, e), this) : (this._events[t] ? ("function" == typeof this._events[t] && (this._events[t] = [this._events[t]]), n ? this._events[t].unshift(e) : this._events[t].push(e), !this._events[t].warned && this._maxListeners > 0 && this._events[t].length > this._maxListeners && (this._events[t].warned = !0, l.call(this, this._events[t].length, t))) : this._events[t] = e, this)
            }, c.prototype.off = function(t, e) {
                function n(t) {
                    if (t !== o) {
                        var e = Object.keys(t);
                        for (var i in e) {
                            var r = e[i],
                                s = t[r];
                            s instanceof Function || "object" != typeof s || null === s || (Object.keys(s).length > 0 && n(t[r]), 0 === Object.keys(s).length && delete t[r])
                        }
                    }
                }
                if ("function" != typeof e) throw new Error("removeListener only takes instances of Function");
                var i, r = [];
                if (this.wildcard) {
                    var s = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    r = u.call(this, null, s, this.listenerTree, 0)
                } else {
                    if (!this._events[t]) return this;
                    i = this._events[t], r.push({
                        _listeners: i
                    })
                }
                for (var a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (i = l._listeners, h(i)) {
                        for (var c = -1, d = 0, f = i.length; d < f; d++)
                            if (i[d] === e || i[d].listener && i[d].listener === e || i[d]._origin && i[d]._origin === e) {
                                c = d;
                                break
                            }
                        if (c < 0) continue;
                        return this.wildcard ? l._listeners.splice(c, 1) : this._events[t].splice(c, 1), 0 === i.length && (this.wildcard ? delete l._listeners : delete this._events[t]), this.emit("removeListener", t, e), this
                    }(i === e || i.listener && i.listener === e || i._origin && i._origin === e) && (this.wildcard ? delete l._listeners : delete this._events[t], this.emit("removeListener", t, e))
                }
                return n(this.listenerTree), this
            }, c.prototype.offAny = function(t) {
                var e, n = 0,
                    i = 0;
                if (t && this._all && this._all.length > 0) {
                    for (e = this._all, n = 0, i = e.length; n < i; n++)
                        if (t === e[n]) return e.splice(n, 1), this.emit("removeListenerAny", t), this
                } else {
                    for (e = this._all, n = 0, i = e.length; n < i; n++) this.emit("removeListenerAny", e[n]);
                    this._all = []
                }
                return this
            }, c.prototype.removeListener = c.prototype.off, c.prototype.removeAllListeners = function(t) {
                if (0 === arguments.length) return !this._events || s.call(this), this;
                if (this.wildcard)
                    for (var e = "string" == typeof t ? t.split(this.delimiter) : t.slice(), n = u.call(this, null, e, this.listenerTree, 0), i = 0; i < n.length; i++) {
                        var r = n[i];
                        r._listeners = null
                    } else this._events && (this._events[t] = null);
                return this
            }, c.prototype.listeners = function(t) {
                if (this.wildcard) {
                    var e = [],
                        n = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    return u.call(this, e, n, this.listenerTree, 0), e
                }
                return this._events || s.call(this), this._events[t] || (this._events[t] = []), h(this._events[t]) || (this._events[t] = [this._events[t]]), this._events[t]
            }, c.prototype.eventNames = function() {
                return Object.keys(this._events)
            }, c.prototype.listenerCount = function(t) {
                return this.listeners(t).length
            }, c.prototype.listenersAny = function() {
                return this._all ? this._all : []
            }, (r = function() {
                return c
            }.call(e, n, e, t)) !== o && (t.exports = r)
        }()
    }).call(e, n(24))
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "c", function() {
        return a
    }), n.d(e, "d", function() {
        return l
    }), n.d(e, "e", function() {
        return c
    }), n.d(e, "f", function() {
        return u
    });
    var i = navigator.userAgent,
        r = navigator.platform,
        o = function() {
            var t, e = i,
                n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
                name: "IE",
                version: parseFloat(t[1] || "")
            }) : "Chrome" === n[1] && null !== (t = e.match(/\bOPR\/(\d+)/)) ? {
                name: "Opera",
                version: parseFloat(t[1])
            } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]), {
                name: n[0],
                version: parseFloat(n[1])
            })
        }(),
        s = !!("history" in window && "function" == typeof window.history.replaceState),
        a = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
        l = /Android/i.test(i),
        c = /(iPad|iPhone|iPod touch)/i.test(i),
        u = (/Linux/i.test(r), /Mac/i.test(r), /Win/i.test(r), function() {
            var t = document.createElement("div"),
                e = document.getElementsByTagName("body")[0];
            t.style.width = t.style.paddingLeft = "1px", e.appendChild(t);
            var n = 2 === t.offsetWidth;
            return e.removeChild(t), t = null, n
        }());
    ! function() {
        var t = document.createElement("video");
        t && t.play
    }()
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t.zone + "/" + t.unit
    }

    function r(t) {
        if (t || !1 === be) {
            be = {
                AD_UNIT: !1,
                AD_ZONE: !1
            };
            var e = Object(ae.u)(le.a.abbr),
                n = null;
            return n = window[e].Store.get(e + "_" + ge), n && (be.AD_UNIT = n, window[e].Store.remove(e + "_" + ge)), n = window[e].Store.get(e + "_" + me), n && (be.AD_ZONE = n, window[e].Store.remove(e + "_" + me)), be
        }
    }

    function o(t) {
        var e = googletag.sizeMapping();
        return t.forEach(function(t) {
            e.addSize(t[0], t[1])
        }), e
    }

    function s(t) {
        r();
        var e = null,
            n = "",
            i = {};
        for (n in we) Object(ae.C)(we, n) && t.hasAttribute("data-ad-" + n) ? (e = t.getAttribute("data-ad-" + n)) && (i[n] = e) : i[n] = we[n];
        return i
    }

    function a(t, e) {
        var n = t + "x" + e;
        return ve.hasOwnProperty(n) ? ve[n] : _e.UNKNOWN
    }

    function l(t) {
        if (null === ue || t) {
            var e = Object(ae.u)(le.a.abbr);
            ue = window[e].Store.get(e + "_ad_config")
        }
        return ue
    }

    function c(t) {
        return rubicontag.getSlot(t.id)
    }

    function u(t) {
        return t.slot
    }

    function d(t) {
        var e = {};
        return t.getTargetingKeys().forEach(function(n) {
            e[n] = t.getTargeting(n)
        }), e
    }

    function h(t) {
        return t.get("bidding")
    }

    function f(t) {
        return null !== t.group
    }

    function p(t) {
        return "ad_network_id" === t || "ad_custom_targeting" === t || "ad_tag_prefix" === t || "ad_unit" === t || "ad_url" === t || "ad_zone" === t || "targeting_doctype" === t || "targeting_tags" === t
    }

    function b(t) {
        return t.state === ye.DESTROYED
    }

    function g(t) {
        return t.state === ye.INITIALISED
    }

    function m(t) {
        return t.state === ye.RENDERED
    }

    function _(t) {
        return t.hasAttribute("data-ad-initialised")
    }

    function v() {
        return window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], Promise.all([O(), w()]).then(function() {
            return y()
        })
    }

    function y() {
        return window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], Object(ae.H)(ie)
    }

    function w() {
        return window.rubicontag = window.rubicontag || {}, window.rubicontag.cmd = window.rubicontag.cmd || [], null === re ? (console.warn("Rubicon library has no url specified to load. Ads will continue without Rubicon"), Promise.resolve()) : Object(ae.H)(re).then(function() {
            return ce = !0, Promise.resolve()
        }, function() {
            return console.warn("Error loading rubicon library"), ce = !1, Promise.resolve()
        }).catch(function() {
            return console.warn("Error loading rubicon library"), ce = !1, Promise.resolve()
        })
    }

    function E() {
        return window._ttf = window._ttf || [], Object(ae.H)(oe)
    }

    function O() {
        if (null === se) return console.warn("Prebid library has no url specified to load. Ads will continue without Prebid"), Promise.resolve();
        window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [];
        var t = Object(ae.H)(se).then(function() {
                return fe = !0, Promise.resolve()
            }, function() {
                return console.warn("Error loading prebid library"), fe = !1, Promise.resolve()
            }).catch(function() {
                return console.warn("Error loading prebid library"), fe = !1, Promise.resolve()
            }),
            e = x(he);
        return Promise.race([t, e])
    }

    function S(t) {
        if (!Object(ae.F)(t)) return null;
        var e = Object(ae.S)(t);
        return e = JSON.parse(e), "" === e ? null : e
    }

    function k(t) {
        var e = s(t);
        return e = A(e), e.dfp = i(e), e
    }

    function A(t) {
        var e = "";
        for (e in Ee)
            if (Object(ae.C)(Ee, e)) {
                if (Ee[e].required && !Object(ae.C)(t, e)) throw new TypeError(e + " property is required");
                Ee[e].map && (t[e] = Ee[e].map(t[e], t))
            }
        return t
    }

    function x(t) {
        return new Promise(function(e) {
            setTimeout(e, t)
        })
    }

    function j(t) {
        return new Promise(function(e, n) {
            googletag.cmd.push(function() {
                try {
                    var i = t(e);
                    void 0 !== i && e(i)
                } catch (t) {
                    n(t)
                }
            })
        }).then(function(t) {
            return Promise.resolve(t)
        }, function(t) {
            throw t
        })
    }

    function T(t, e) {
        function n(t) {
            rubicontag.setTargetingForGPTSlot(t)
        }
        return j(function(i) {
            var r = null,
                o = null;
            Array.isArray(t) ? (r = t.map(u), o = t.map(function(t) {
                return t.id
            })) : (r = [u(t)], o = [t.id]), ce && r.forEach(n), fe ? pbjs.que.push(function() {
                pbjs.requestBids({
                    timeout: he,
                    adUnitCodes: o,
                    bidsBackHandler: function() {
                        pbjs.setTargetingForGPTAsync(o), googletag.pubads().refresh(r, {
                            changeCorrelator: !!e
                        }), i()
                    }
                })
            }) : (googletag.pubads().refresh(r, {
                changeCorrelator: !!e
            }), i())
        })
    }

    function C(t) {
        return j(function(e) {
            if (!ce) return e();
            var n = null;
            if (n = Array.isArray(t) ? t.filter(h).map(c) : h(t) ? [c(t)] : [null], n = n.filter(function(t) {
                    return null !== t
                }), n.length < 1 && (n = null), null === n) return e();
            rubicontag.run(e, {
                slots: n
            })
        })
    }

    function I(t) {
        return j(function(e) {
            var n = googletag.defineSlot(t.get("dfp"), t.get("sizes"), t.id);
            if (n.addService(googletag.pubads()), null !== t.get("targets")) {
                var i = t.get("targets").filter(function(t) {
                    return "" !== t
                });
                i.length > 0 && n.setTargeting(l().ad_tag_prefix, i)
            }
            if (t.get("position") && n.setTargeting("position", t.get("position")), t.get("values")) {
                var r = "",
                    s = t.get("values");
                for (r in s)
                    if (Object(ae.C)(s, r) && !p(r))
                        if ("ad_keyvalue" === r)
                            for (var a in s[r]) Object(ae.C)(s[r], a) && n.setTargeting(a, s[r][a]);
                        else n.setTargeting(r, s[r])
            }
            return t.get("sizemap") && n.defineSizeMapping(o(t.get("sizemap")).build()), fe && pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync()
            }), t.slot = n, t.state = ye.REGISTERED, t.emit("register", Object(ae.k)("register", t, {
                slot: n
            })), t.manager.emit("register", Object(ae.k)("register", t.manager, {
                ad: t,
                slot: n
            })), t
        })
    }

    function N(t) {
        var e = [];
        return t.forEach(function(t) {
            if (h(t)) {
                var n = [];
                if (de.hasOwnProperty("RUBICON") && de.RUBICON.zoneId.forEach(function(t) {
                        n.push({
                            bidder: "rubicon",
                            params: {
                                accountId: de.RUBICON.accountId,
                                siteId: de.RUBICON.siteId,
                                zoneId: t
                            }
                        })
                    }), 0 !== n.length) {
                    var i = {
                        code: t.id,
                        sizes: t.get("sizes").filter(function(t) {
                            return pe.hasOwnProperty(t.join("x"))
                        }),
                        bids: n
                    };
                    if (t.get("sizemap")) {
                        var r = t.get("sizemap").map(function(t) {
                            return {
                                minWidth: t[0][0],
                                sizes: t[1].filter(function(t) {
                                    return pe.hasOwnProperty(t.join("x"))
                                }).map(function(t) {
                                    return t[0]
                                })
                            }
                        });
                        r.length > 0 && (i.sizeMapping = r)
                    }
                    e.push(i)
                }
            }
        }), e
    }

    function z(t) {
        return j(function(e) {
            fe && h(t) ? pbjs.que.push(function() {
                var n = N([t]);
                pbjs.addAdUnits(n), pbjs.requestBids({
                    bidsBackHandler: function(t) {
                        e()
                    }
                })
            }) : e()
        })
    }

    function L(t) {
        return j(function(e) {
            ce && h(t) && rubicontag.defineSlot(t.get("dfp"), t.get("sizes"), t.id), e()
        })
    }

    function P(t) {
        return j(function(e) {
            googletag.display(t.id), e()
        })
    }

    function D(t) {
        for (var e in t)
            if (Object(ae.C)(t, e)) switch (e) {
                case "GPT_URL":
                    ie = t[e];
                    break;
                case "RUBICON_URL":
                    re = t[e];
                    break;
                case "TEAD_URL":
                    oe = t[e];
                    break;
                case "PREBID_URL":
                    se = t[e];
                    break;
                case "PREBID_SETTINGS":
                    de = t[e]
            }
    }

    function R(t) {
        return t.state = ye.DESTROYED, t.el.setAttribute("data-ad-destroyed", !0), t
    }

    function M(t) {
        return t.state = ye.RENDERED, t.el.setAttribute("data-ad-rendered", !0), t
    }

    function H(t) {
        return t.state = ye.STOPPED, t.el.setAttribute("data-ad-stopped", !0), t
    }

    function G(t, e, n) {
        var i = {
                unit: t,
                zone: e,
                sizes: "[[5, 5]]",
                bidding: !1,
                sizemap: null,
                values: JSON.stringify(n),
                placement: "PAGE_IMPRESSION_TRACKER"
            },
            r = document.createElement("div");
        for (var o in i) i.hasOwnProperty(o) && r.setAttribute("data-ad-" + o, i[o]);
        return r
    }

    function B(t) {
        return function() {}
    }

    function q() {
        setTimeout(this.destroy.bind(this), 2e3)
    }

    function U() {
        this.el.innerHTML = ""
    }

    function F(t, e) {
        ke.a.SendAll(ke.a.SEND_HITTYPES.EVENT, {
            eventCategory: "Gallery",
            eventAction: t,
            eventLabel: e
        })
    }

    function W(t, e) {
        var n = Object(ae.F)(t.manHeight) ? t.manHeight : null,
            i = Object(ae.F)(t.manWidth) ? t.manWidth : null;
        return !e || Object(ae.F)(n) && Object(ae.F)(i) ? e || Object(ae.F)(n) && Object(ae.F)(i) || (Object(ae.F)(n) || (n = Ce), Object(ae.F)(i) || (i = Ie)) : (Object(ae.F)(n) || (n = je), Object(ae.F)(i) || (i = Te)), {
            height: n,
            width: i
        }
    }

    function V(t) {
        var e = "";
        if (t && t.length) {
            var n = Math.random() + "=" + Math.random();
            e = -1 !== t.indexOf("?") ? t.replace(/\?/, "?" + n + "&") : -1 !== t.indexOf("#") ? t.replace(/#/, "?" + n + "#") : t + "?" + n
        }
        return e
    }

    function Y(t, e) {
        return e && "" !== t.hiImgSrc ? t.hiImgSrc : "" === t.lowImgSrc ? t.hiImgSrc : t.lowImgSrc
    }

    function J(t) {
        return {
            button: t.querySelector("." + Ne),
            video: t.querySelector("." + ze)
        }
    }

    function K(t, e) {
        var n = !1;
        return function(i) {
            if (!n) {
                n = !0;
                var r = document.createElement("source");
                r.setAttribute("src", e), r.setAttribute("type", "video/mp4"), r.setAttribute("webkit-playsinline", "true"), r.setAttribute("autoplay", i), t.appendChild(r)
            }
        }
    }

    function X(t, e) {
        return $(t) && ("" !== e.hiImgSrc || "" !== e.lowImgSrc || "" !== e.videoSrcMp4)
    }

    function $(t) {
        return t.offsetHeight >= je && t.offsetWidth >= Te + Ae
    }

    function Z(t, e) {
        window.open(e), tt(t)
    }

    function Q(t) {
        var e = J(t.el);
        Object(ae.a)(e.button, "global__hidden"), e.video.play()
    }

    function tt(t) {
        var e = J(t.el);
        Object(ae.N)(e.button, "global__hidden"), e.video.pause(), e.video.currentTime = 0, e.video.load()
    }

    function et(t, e, n) {
        var i = Y(e, n),
            r = '<img src="' + V(i) + '" style="display:block;width:100%;" />';
        e.linkUrl && (r = '<a href="' + e.linkUrl + '" target="_top">' + r + "</a>"), t.el.innerHTML = r
    }

    function nt(t, e, n) {
        var i = document.createDocumentFragment(),
            r = document.createElement("video"),
            o = K(r, e.videoSrcMp4);
        rt(r, {
            width: "100%"
        }), r.className = ze;
        var s = Y(e);
        "" !== s ? r.setAttribute("poster", s) : o(!1), i.appendChild(r);
        var a = new Image;
        if (a.src = "https://cnda.condenast.co.uk/co/ads/adbuilder/playbutton.png", a.className = Ne, rt(a, {
                left: "50%",
                margin: "-35px 0 0 -35px",
                position: "absolute",
                top: "50%"
            }), i.appendChild(a), t.el.innerHTML = "", t.el.appendChild(i), rt(t.el, {
                position: "relative"
            }), "" !== e.linkUrl) {
            var l = J(t.el);
            Object(ae.b)(l.video, "click", function() {
                l.video.paused ? (o(!0), Q(t)) : Z(t, e.linkUrl)
            }), Object(ae.b)(l.video, "ended", function() {
                tt(t)
            }), Object(ae.b)(l.button, "click", function() {
                o(!0), Q(t)
            })
        }
    }

    function it() {
        throw new Error("Not sure what this is supposed to render")
    }

    function rt(t, e) {
        for (var n in e) Object(ae.C)(e, n) && (t.style[n] = e[n])
    }

    function ot(t) {
        switch (t.get("position")) {
            case "promotion-large":
                return De.LARGE;
            case "promotion-medium":
                return De.MEDIUM;
            case "promotion-small":
                return De.SMALL;
            default:
                return De.UNKNOWN
        }
    }

    function st(t) {
        switch (t) {
            case De.UNKNOWN:
                return "unknown";
            case De.SMALL:
                return "small";
            case De.MEDIUM:
                return "medium";
            case De.LARGE:
                return "large"
        }
    }

    function at(t, e, n) {
        return Re + "/" + t + lt({
            title: n.Title,
            brand: n.Brand,
            teaser_short: n.Teaser,
            image_uid: n.ImageUID,
            style: e
        })
    }

    function lt(t) {
        var e = [],
            n = "";
        for (n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + function(t) {
            return "object" == typeof t ? encodeURIComponent(JSON.stringify(t)) : encodeURIComponent(t)
        }(t[n]));
        return "?" + e.join("&")
    }

    function ct(t) {
        if (!t) throw new TypeError("defaults must be set");
        this._properties = Object(ae.j)(t)
    }

    function ut(t, e) {
        if (!t._properties.hasOwnProperty(e)) throw new ReferenceError(e + " is not a valid property");
        return !0
    }

    function dt(t, e, n) {
        Ue.a.call(this, {
            wildcard: !0
        }), Be.call(this, Ge), this.el = t, this.id = t.getAttribute("id"), this.group = null, this.manager = e, this.renderedSize = null, this.slot = null, this.state = ye.UNINITIALISED, this.type = _e.UNKNOWN, this.el.setAttribute("data-ad-initialised", !0), this.set(n), this.manager.slots[this.id] = this
    }

    function ht(t) {
        t.manager.slots[t.id] = null, t.el = null, t.id = null, t.group && t.group.remove(t), t.manager = null, t.renderedSize = null, t.slot = null, t.state = null
    }

    function ft(t, e) {
        Ue.a.call(this), this._autoplay = e.autoplay, this._eventHooks = {}, this._loop = e.loop, this._rendered = !1, this.el = t, this.isMuted = void 0 !== e.muted && e.muted, this.isReady = !1, this.isVisible = !1, this.options = e, this.video = null, this._render()
    }

    function pt(t) {
        return t + "?" + Math.random()
    }

    function bt(t, e) {
        var n = document.createElement("source");
        return n.setAttribute("type", t), n.setAttribute("src", e), n
    }

    function gt(t, e, n) {
        We.call(this, t, e, n), this._debug = "boolean" == typeof n.debug && n.debug, this._elementCache = null, this._eventHooks = {}, this._expandedAtStart = !1, this._expandPixels = !1, this._frameDocument = null, this._frameElement = null, this._frameWindow = null, this._windowHeight = 0, this._windowWidth = 0, this._properties.adConfig = null, this._properties.responsiveDimensions = null, this.video = null, this.type = _e.RESPONSIVE
    }

    function mt(t, e) {
        var n = {
            backgroundRepeat: "no-repeat"
        };
        wt(e.url) && (n.backgroundImage = "url(" + e.url + ")"), wt(e.colour) && (n.backgroundColor = e.colour), wt(e.y) && (n.backgroundPosition = "0 " + e.y + "%"), wt(e.repeat) && !0 === e.repeat && (n.backgroundSize = "cover", n.backgroundRepeat = "repeat"), jt(t, n)
    }

    function _t(t, e) {
        var n = {
            backgroundRepeat: "no-repeat"
        };
        wt(e.url) && (n.backgroundImage = "url(" + e.url + ")", n.backgroundAttachment = "fixed"), wt(e.colour) && (n.backgroundColor = e.colour), wt(e.repeat) && !0 === e.repeat && (n.backgroundSize = "cover", n.backgroundRepeat = "repeat"), jt(t.parentNode, n)
    }

    function vt(t) {
        var e = t.get("adConfig"),
            n = 0,
            i = t._windowWidth = t._frameWindow.innerWidth;
        return "number" == typeof e.videoWidth ? (i = Object(ae.g)(0, e.videoWidth, i), n = i / e.videoWidth, Math.floor(e.videoHeight * n)) : (i = Object(ae.g)(0, e.backgroundWidthPx, i), n = i / e.backgroundWidthPx, Math.floor(e.backgroundHeightPx * n))
    }

    function yt(t, e) {
        var n = e.get("responsiveDimensions"),
            i = t.normal.heightPx / t.normal.widthPx,
            r = 0,
            o = 0,
            s = 0,
            a = t.normal,
            l = gt.getDimensionsFromWidth(n[0], Et(e), !0)[0];
        if ((!Object(ae.C)(e.get("adConfig"), "isMobile") || !e.get("adConfig").isMobile) && Object(ae.C)(t, "mobileOverridePosition") && null !== t.mobileOverridePosition && e._windowWidth <= gt.MOBILE_MAX_WIDTH_INCL ? a = t.mobileOverridePosition : !0 === e.get("adConfig").isMobile && Object(ae.C)(t, "positions") && Object(ae.C)(t.positions, l) && (a = t.positions[l]), null === (r = a.heightPercent) || void 0 === r) {
            r = n[0] * (a.widthPercent / 100) * i / n[1] * 100
        }
        o = n[1] * (r / 100), o = e._windowHeight * (r / 100), o > a.heightPx && (o = a.heightPx), s = o / i;
        var c = 0,
            u = 0;
        return u = (e._windowHeight - o) * (a.topPercent / 100), u = u / e._windowHeight * 100, c = (n[0] - s) * (a.leftPercent / 100), c = c / n[0] * 100, {
            height: o,
            left: c,
            top: u
        }
    }

    function wt(t) {
        return null !== t && void 0 !== t
    }

    function Et(t) {
        return void 0 === t.get("adConfig").isMobile || !t.get("adConfig").isMobile
    }

    function Ot(t) {
        if (!t._expandPixels) {
            t._expandPixels = !0;
            var e = t.get("adConfig");
            if (void 0 !== e.onExpandPixelSrcs && e.onExpandPixelSrcs.length > 0) {
                var n = null;
                e.onExpandPixelSrcs.forEach(function(e) {
                    "" !== e && (n = new Image, n.className = "responsive-ad__pixel-tracking", n.src = e, t._frameDocument.body.appendChild(n))
                }), n = null
            }
        }
    }

    function St(t, e) {
        t && (e ? window.top.location.href = t : window.open(t))
    }

    function kt(t, e) {
        var n = !!wt(t.backgroundColour) && t.backgroundColour,
            i = !!wt(t.backgroundRepeat) && t.backgroundRepeat,
            r = !!wt(t.backgroundImageSrc) && t.backgroundImageSrc,
            o = 0;
        if (!1 !== r && e) {
            var s = t.backgroundFocalTop;
            Object(ae.C)(t, "backgroundFocals") && Object(ae.C)(t.backgroundFocals, e[0]) && (s = t.backgroundFocals[e[0]]);
            var a = e[1] / 2;
            if ((s *= e[0] / t.backgroundWidthPx) > a) {
                o = -100 * ((a - s) / (e[1] + a))
            }
        }
        return {
            colour: n,
            repeat: i,
            url: r,
            y: o
        }
    }

    function At(t) {
        function e(t) {
            return n = "", t.normal.visibleWhenContracted && (n += " responsive-ad__logo--contracted"), t.normal.visibleWhenExpanded && (n += " responsive-ad__logo--expanded"), t.normal.visibleOnMobile && (n += " responsive-ad__logo--mobile"), t.normal.visibleOnDesktop && (n += " responsive-ad__logo--desktop"), "pauseVideoAndCollapse" === t.clickAction && (n += " responsive-ad__logo--pause"), {
                cls: n,
                isPauseButton: "pauseVideoAndCollapse" === t.clickAction,
                url: t.normal.src
            }
        }
        var n = "";
        return t.logos.map(e)
    }

    function xt(t) {
        jt(t.parentNode, {
            backgroundAttachment: "",
            backgroundColor: "",
            backgroundImage: "",
            backgroundRepeat: "",
            backgroundSize: ""
        })
    }

    function jt(t, e) {
        for (var n in e) Object(ae.C)(e, n) && (t.style[n] = e[n])
    }

    function Tt(t, e) {
        return ["backgroundColour", "backgroundFixed", "backgroundFocalBottom", "backgroundFocalTop", "backgroundFocals", "backgroundHeightPx", "backgroundImageSrc", "backgroundRepeat", "backgroundShouldClipWidth", "backgroundWidthPx"].forEach(function(n) {
            Object(ae.C)(e, n) ? t[n] = e[n] : delete t[n]
        }), t
    }

    function Ct(t, e) {
        Ue.a.call(this, {
            wildcard: !0
        });
        var n = Object(ae.f)({
            id: "batch-" + Object(ae.M)(),
            maxSlots: Qe
        }, e);
        this._bounds = {
            bottom: -1 / 0,
            top: 1 / 0
        }, this.id = n.id, this.lazyload = !1, this.manager = t, this.maxSlots = n.maxSlots, this.size = 0, this.slots = {}, this.manager.groups[this.id] = this
    }

    function It() {
        this.manager = null, this.slots = null
    }

    function Nt(t) {
        return t.register()
    }

    function zt() {
        this.group.remove(this)
    }

    function Lt() {
        Ue.a.call(this, {
            wildcard: !0
        }), this._hooks = {}, this._lazyloadGroups = [], this.groups = {}, this.initialised = !1, this.slots = {}
    }

    function Pt(t) {
        var e = t || document,
            n = this.getSlots({
                el: e,
                filter: Object(ae.J)(_)
            }),
            i = n.map(k);
        if (0 !== n.length) {
            var r = n.map(function(t, e) {
                    return t.setAttribute("id", "ad_" + Object(ae.M)()), this.createAd(t, i[e])
                }.bind(this)),
                o = Rt(this, r),
                s = Promise.resolve().then(function() {
                    return Promise.all(o.map(Bt))
                }),
                a = Jt(o, function(t) {
                    return !1 === t.lazyload
                });
            a[1].length > 0 && (this._lazyloadGroups = this._lazyloadGroups.concat(a[1].slice(0))), s.then(function() {
                return Promise.all(a[0].map(qt))
            }).then(function() {
                return Promise.all(a[0].map(Gt))
            }), this._lazyloadGroups.length > 0 && (Mt.call(this), s.then(this.update.bind(this)))
        }
    }

    function Dt() {
        rn && (rn = !1, Object(ae.P)(window, "resize", this._hooks.resize), Object(ae.P)(window, "scroll", this._hooks.scroll), this._hooks.resize = null, this._hooks.scroll = null)
    }

    function Rt(t, e) {
        function n(e, n) {
            return i.hasOwnProperty(e) ? i[e].group : (i[e] = {
                group: new tn(t, {
                    id: e
                }),
                order: n
            }, i[e].group)
        }
        var i = {},
            r = [],
            o = "",
            s = 0;
        e.forEach(function(t) {
            s = t.get("order"), o = t.get("group"), o ? n(o, s).add(t) : n(Object(ae.M)(), s).add(t)
        });
        for (o in i) i.hasOwnProperty(o) && r.push(i[o]);
        return r.sort(function(t, e) {
            return t.order - e.order
        }), r.map(function(t) {
            return t.group
        })
    }

    function Mt() {
        rn || (rn = !0, this._hooks.resize = Object(ae.R)(Yt, 500, this), this._hooks.scroll = Object(ae.R)(this.update, 300, this), Object(ae.b)(window, "resize", this._hooks.resize), Object(ae.b)(window, "scroll", this._hooks.scroll), Object(ae.L)(Yt.bind(this)), Object(ae.K)(Yt.bind(this)))
    }

    function Ht(t) {
        var e = this.slots[t.slot.getSlotElementId()],
            n = "error";
        null !== e && (t.isEmpty || e.state === ye.STOPPED ? (H(e, t), n = "stop") : (M(e, t), e.set("creativeId", t.creativeId), e.set("lineItemId", t.lineItemId), e.renderedSize = t.size.slice(0), e.type = a(t.size[0], t.size[1]), Object(ae.N)(e.el.parentNode.parentNode, "is-hidden"), n = "render"), e.emit(n, Object(ae.k)(n, e, {
            originalEvent: t
        })), e.manager.emit(n, Object(ae.k)(n, e.manager, {
            ad: e,
            originalEvent: t
        })))
    }

    function Gt(t) {
        return t.refresh()
    }

    function Bt(t) {
        return t.register()
    }

    function qt(t) {
        return t.render()
    }

    function Ut(t) {
        return t.resize()
    }

    function Ft(t) {
        for (var e in t.slots)
            if (t.slots[e].state < ye.REGISTERED) return !1;
        return !0
    }

    function Wt(t, e) {
        var n = e.top - en,
            i = e.bottom + en;
        return !(n < t.top && i < t.top) && !(n > t.bottom && i > t.bottom)
    }

    function Vt(t) {
        return Promise.resolve().then(function() {
            return qt(t)
        }).then(function() {
            return Gt(t)
        })
    }

    function Yt() {
        this._lazyloadGroups.forEach(Ut), nn = window.innerHeight, this.update()
    }

    function Jt(t, e) {
        var n = new Array(2);
        if (n[0] = [], n[1] = [], t.length < 1) return n;
        for (var i = -1, r = t.length, o = null; ++i < r;) o = t[i], e(o) ? n[0].push(o) : n[1].push(o);
        return o = null, n
    }

    function Kt(t) {
        return t = t.replace(/^http:\/\/digital-assets\.condenast\.co\.uk\/co\/ads\/adbuilder/, "https://cnda.condenast.co.uk/co/ads/adbuilder"), t = t.replace(/^http:\/\//, "https://")
    }

    function Xt(t, e) {
        return !!t.hasOwnProperty(e) && ("" !== t[e] && null !== t[e] && void 0 !== t[e])
    }

    function $t(t) {
        return Xt(t, "backgroundImageSrc") && (t.backgroundImageSrc = Kt(t.backgroundImageSrc)), Xt(t, "videoSrcMp4") && (t.videoSrcMp4 = Kt(t.videoSrcMp4)), Xt(t, "videoSrcMp4Below720") && (t.videoSrcMp4Below720 = Kt(t.videoSrcMp4Below720)), Xt(t, "videoSrcMp4Below640") && (t.videoSrcMp4Below640 = Kt(t.videoSrcMp4Below640)), Xt(t, "videoSrcWebM") && (t.videoSrcWebM = Kt(t.videoSrcWebM)), Xt(t, "logos") && t.logos.forEach(function(t, e) {
            Xt(t.normal, "src") && (t.normal.src = Kt(t.normal.src))
        }), t
    }

    function Zt() {}

    function Qt(t) {
        t.el.removeAttribute("data-ad-debug");
        var e = t.el.parentNode.querySelector(".ad-debug");
        e.parentNode.removeChild(e)
    }

    function te(t) {
        return t.el.hasAttribute("data-ad-debug")
    }

    function ee(t) {
        t.el.setAttribute("data-ad-debug", "true");
        var e = document.createElement("div"),
            n = t.get("sizemap");
        null !== n && (n = {
            values: n.map(function(t) {
                return {
                    key: t[0].join("x"),
                    values: t[1].map(function(t) {
                        return t.join("x")
                    })
                }
            })
        });
        var i = t.get("values");
        i && (i = JSON.stringify(i)), e.innerHTML = an()({
            creativeId: t.get("creativeId"),
            dfp: t.get("dfp"),
            id: t.id,
            lineItemId: t.get("lineItemId"),
            renderedSize: t.renderedSize.join("x"),
            position: t.get("position"),
            sizeMapping: n,
            sizes: t.get("sizes").map(function(t) {
                return t.join("x")
            }),
            values: i
        }), t.el.parentNode.appendChild(e.firstChild)
    }
    var ne = {};
    n.d(ne, "AD_SIZES", function() {
        return _e
    }), n.d(ne, "AD_STATES", function() {
        return ye
    }), n.d(ne, "buildDFPUrl", function() {
        return i
    }), n.d(ne, "checkTestAdConfig", function() {
        return r
    }), n.d(ne, "getAdElementAttributes", function() {
        return s
    }), n.d(ne, "getAdTypeBySize", function() {
        return a
    }), n.d(ne, "getPageAdConfig", function() {
        return l
    }), n.d(ne, "getRubiconSlot", function() {
        return c
    }), n.d(ne, "getSlot", function() {
        return u
    }), n.d(ne, "getSlotTargeting", function() {
        return d
    }), n.d(ne, "hasHeaderBidding", function() {
        return h
    }), n.d(ne, "hasGroup", function() {
        return f
    }), n.d(ne, "isAdDestroyed", function() {
        return b
    }), n.d(ne, "isAdInitialised", function() {
        return g
    }), n.d(ne, "isAdRendered", function() {
        return m
    }), n.d(ne, "isElInitialised", function() {
        return _
    }), n.d(ne, "loadAdLibraries", function() {
        return v
    }), n.d(ne, "loadGPTLibrary", function() {
        return y
    }), n.d(ne, "loadRubiconLibrary", function() {
        return w
    }), n.d(ne, "loadTeadLibrary", function() {
        return E
    }), n.d(ne, "loadPrebidLibrary", function() {
        return O
    }), n.d(ne, "parseAdKeyValues", function() {
        return S
    }), n.d(ne, "parseAdAttributes", function() {
        return k
    }), n.d(ne, "mapAdElementAttributes", function() {
        return A
    }), n.d(ne, "promisifyTimeout", function() {
        return x
    }), n.d(ne, "pushToGoogleTag", function() {
        return j
    }), n.d(ne, "refreshGPT", function() {
        return T
    }), n.d(ne, "refreshRubicon", function() {
        return C
    }), n.d(ne, "registerGPT", function() {
        return I
    }), n.d(ne, "registerPrebid", function() {
        return z
    }), n.d(ne, "registerRubicon", function() {
        return L
    }), n.d(ne, "renderGPT", function() {
        return P
    }), n.d(ne, "setAdUrls", function() {
        return D
    }), n.d(ne, "setAdStateToDestroyed", function() {
        return R
    }), n.d(ne, "setAdStateToRendered", function() {
        return M
    }), n.d(ne, "setAdStateToStopped", function() {
        return H
    }), n.d(ne, "createPageImpressionElement", function() {
        return G
    });
    var ie, re, oe, se, ae = n(0),
        le = n(10),
        ie = "//www.googletagservices.com/tag/js/gpt.js",
        re = null,
        ce = !1,
        ue = null,
        oe = null,
        de = {},
        se = null,
        he = 1e3,
        fe = !1,
        pe = {
            "468x60": !0,
            "728x90": !0,
            "120x600": !0,
            "160x600": !0,
            "300x600": !0,
            "200x200": !0,
            "250x250": !0,
            "300x250": !0,
            "336x280": !0,
            "300x100": !0,
            "980x120": !0,
            "250x360": !0,
            "180x500": !0,
            "980x150": !0,
            "468x400": !0,
            "930x180": !0,
            "320x50": !0,
            "300x50": !0,
            "300x300": !0,
            "300x1050": !0,
            "970x90": !0,
            "970x250": !0,
            "1000x90": !0,
            "320x80": !0,
            "320x150": !0,
            "1000x1000": !0,
            "640x480": !0,
            "320x480": !0,
            "1800x1000": !0,
            "320x320": !0,
            "320x160": !0,
            "980x240": !0,
            "980x300": !0,
            "980x400": !0,
            "480x300": !0,
            "970x310": !0,
            "970x210": !0,
            "480x320": !0,
            "768x1024": !0,
            "480x280": !0,
            "1000x300": !0,
            "320x100": !0,
            "800x250": !0,
            "200x600": !0,
            "600x300": !0
        },
        be = !1,
        ge = "ad_test_unit",
        me = "ad_test_zone",
        _e = {
            UNKNOWN: -1,
            NATIVE: 0,
            MPU: 1,
            DOUBLESKY: 2,
            LEADERBOARD: 3,
            SUPERLEADER: 4,
            BILLBOARD: 5,
            RESPONSIVE: 6,
            GALLERY_INTERSTITIAL: 7,
            INCONTENT: 8,
            INREAD: 9,
            TRACKING_PIXEL: 10
        },
        ve = {
            "1x1": 0,
            "300x250": 1,
            "300x600": 2,
            "728x90": 3,
            "970x90": 4,
            "970x250": 5,
            "1520x300": 6,
            "700x400": 7,
            "420x160": 8,
            "100x100": 9,
            "5x5": 10
        },
        ye = {
            UNINITIALISED: 0,
            INITIALISED: 1,
            REGISTERED: 2,
            RENDERED: 3,
            STOPPED: 4,
            DESTROYED: 5
        },
        we = {
            bidding: !1,
            group: null,
            lazyload: !1,
            nativeStyle: 0,
            order: Number.MAX_VALUE,
            placement: null,
            position: null,
            sizemap: null,
            sizes: null,
            targets: null,
            unit: null,
            values: null,
            zone: null
        },
        Ee = {
            bidding: {
                map: function(t) {
                    return "true" === String(t).toLowerCase()
                },
                required: !0
            },
            group: {
                map: function(t) {
                    return null === t || "null" === t ? null : t.toString()
                },
                required: !1
            },
            lazyload: {
                map: function(t) {
                    return "true" === String(t).toLowerCase()
                },
                required: !1
            },
            nativeStyle: {
                map: Number,
                required: !1
            },
            order: {
                map: Number,
                required: !1
            },
            sizemap: {
                map: JSON.parse,
                required: !1
            },
            sizes: {
                map: JSON.parse,
                required: !0
            },
            targets: {
                map: JSON.parse,
                required: !1
            },
            unit: {
                map: function(t) {
                    return !1 === be.AD_UNIT ? t : be.AD_UNIT
                },
                required: !0
            },
            values: {
                map: S,
                required: !1
            },
            zone: {
                map: function(t) {
                    return !1 === be.AD_ZONE ? t : be.AD_ZONE
                },
                required: !0
            }
        },
        Oe = {
            render: function(t, e) {
                var n = Object(ae.j)(e);
                n.slot = "#" + t.id, n.callbacks = {
                    ad: B("ad"),
                    finish: q.bind(t),
                    skip: B("skip"),
                    mute: B("mute"),
                    unmute: B("unmute"),
                    pause: B("pause"),
                    play: B("play"),
                    loaded: B("loaded"),
                    launch: U.bind(t)
                }, window.teads && (window.teads = {}), E(), window._ttf.push(n)
            }
        },
        Se = Oe,
        ke = n(14),
        Ae = 12,
        xe = {
            linkUrl: "",
            lowImgSrc: "",
            hiImgSrc: "",
            videoSrcMp4: ""
        },
        je = 600,
        Te = 1e3,
        Ce = 400,
        Ie = 700,
        Ne = "js-ad-video-btn",
        ze = "js-ad-video-player",
        Le = {
            render: function(t, e, n) {
                var i = Object(ae.f)({}, xe, e);
                if (null !== i || null !== n) {
                    var r = X(t.el, i),
                        o = "" !== i.videoSrcMp4;
                    W(i, r);
                    null === i && null !== n ? it() : o ? nt(t, i, r) : et(t, i, r), F("InterstitialAdDisplayed", "BespokeRendered")
                }
            }
        },
        Pe = Le,
        De = {
            UNKNOWN: -1,
            SMALL: 0,
            MEDIUM: 1,
            LARGE: 2
        },
        Re = location.origin + "/xhr/ads/native",
        Me = {
            inheritFrom: function(t) {
                switch (t._properties.nativeSize = De.UNKNOWN, t.state) {
                    case ye.RENDERED:
                        M(t);
                        break;
                    case ye.DESTROYED:
                        R(t);
                        break;
                    case ye.STOPPED:
                        H(t)
                }
                return t
            },
            render: function(t, e) {
                t.set("nativeSize", ot(t)), Object(ae.e)({
                    url: at(st(t.get("nativeSize")), t.get("nativeStyle"), e)
                }).then(function(t) {
                    var n = null;
                    try {
                        n = JSON.parse(t.request.responseText)
                    } catch (e) {
                        throw new SyntaxError("Error parsing native ads json", t)
                    }
                    this.el.innerHTML = n.template, this.el.querySelector(".c-card__link, .c-feature__link").setAttribute("href", e.LinkUrl), e.ImpressionTrackingUrl ? this.el.querySelector(".js-native-ad__pixel").setAttribute("src", e.ImpressionTrackingUrl) : Object(ae.O)(this.el.querySelector(".js-native-ad__pixel")), this.emit("render", Object(ae.k)("render", this))
                }.bind(t))
            }
        },
        He = Me;
    ct.prototype = {
        clear: function() {
            var t = "";
            for (t in this._properties) Object(ae.C)(this._properties, t) && (this._properties[t] = null);
            this._properties = {}
        },
        constructor: ct,
        get: function(t) {
            return 0 === arguments.length ? Object(ae.j)(this._properties) : (ut(this, t), this._properties[t])
        },
        set: function(t, e) {
            if ("string" == typeof t) ut(this, t), this._properties[t] = e;
            else
                for (var n in t) Object(ae.C)(t, n) && this.set(n, t[n])
        }
    };
    var Ge, Be = ct,
        qe = n(1),
        Ue = n.n(qe),
        Ge = {
            bidding: !1,
            creativeId: null,
            dfp: null,
            group: null,
            lazyload: !1,
            lineItemId: null,
            nativeStyle: 0,
            order: Number.MAX_VALUE,
            placement: null,
            position: null,
            sizemap: null,
            sizes: null,
            targets: null,
            unit: null,
            values: null,
            zone: null
        },
        Fe = Object(ae.D)(Be.prototype, Ue.a.prototype);
    dt.prototype = Object(ae.D)(Fe, {
        constructor: dt,
        destroy: function() {
            this.clear(), ht(this), this.emit("destroy", Object(ae.k)("destroy", this)), this.removeAllListeners()
        },
        forceSizeChange: function(t, e) {
            this.type = a(t, e)
        },
        register: function() {
            return this.manager.register(this)
        }
    });
    var We = dt,
        Ve = n(3),
        Ye = n(41),
        Je = n.n(Ye),
        Ke = {
            ENDED: "ended",
            PAUSE: "pause",
            PLAY: "play",
            RENDER: "render",
            STOP: "stop",
            off: function(t, e, n) {
                Object(ae.P)(t, e, n)
            },
            on: function(t, e, n) {
                return Object(ae.b)(t, e, n)
            }
        };
    ft.prototype = Object(ae.D)(Ue.a.prototype, {
        _bindEvents: function() {
            this._eventHooks.ended = this._onVideoEnded.bind(this), Ke.on(this.video, Ke.ENDED, this._eventHooks.ended)
        },
        _onVideoEnded: function() {
            this.stop(), this.emit("ended")
        },
        _render: function() {
            this._rendered && this._unbindEvents(), this.many("ready", 1, this._bindEvents.bind(this)), this.video = this._renderHTML5Video(), this._rendered = !0, this.emit("render")
        },
        _renderHTML5Video: function() {
            function t() {
                Object(ae.P)(e, "loadedmetadata", t), this.isReady = !0, this.emit("ready")
            }
            var e = document.createElement("video");
            return e.appendChild(bt("video/webm", pt(this.options.webm))), e.appendChild(bt("video/mp4", pt(this.options.mp4))), this._autoplay && e.setAttribute("autoplay", !0), this.isMuted && e.setAttribute("muted", !0), this._loop && e.setAttribute("loop", !0), Object(ae.b)(e, "loadedmetadata", t.bind(this)), this.el.appendChild(e), e
        },
        _unbindEvents: function() {
            Ke.off(this.video, Ke.ENDED, this._eventHooks.ended), this._eventHooks.ended = null
        },
        constructor: ft,
        destroy: function() {
            this._rendered && this._unbindEvents(), this.el.parentNode.removeChild(this.el), this.emit("destroy")
        },
        hide: function() {
            this.isVisible && (this.isVisible = !1, Object(ae.N)(this.el, "responsive-ad__video--visible"))
        },
        mute: function() {
            this.isMuted || null === this.video || (this.video.setAttribute("muted", !0), this.emit("mute"))
        },
        pause: function() {
            this.isReady && (this.video.pause(), this.emit("pause"))
        },
        play: function() {
            this.isReady && (this.video.play(), this.emit("play"))
        },
        show: function() {
            this.isVisible || (this.isVisible = !0, Object(ae.a)(this.el, "responsive-ad__video--visible"))
        },
        stop: function() {
            this.isReady && (this.video.pause(), this.video.currentTime = 0, this.emit("stop"))
        },
        toggleMute: function() {
            if (this.isMuted) return this.unmute();
            this.mute()
        },
        unmute: function() {
            this.isMuted && null !== this.video && (this.video.setAttribute("muted", !1), this.emit("unmute"))
        }
    });
    var Xe = ft,
        $e = !1;
    gt.prototype = Object(ae.D)(We.prototype, {
        _bindResponsiveAdListeners: function() {
            this._eventHooks.resize = function() {
                if ($e) return $e = !1, void this.recalculate();
                this.resize()
            }.bind(this), Object(ae.b)(this._frameWindow, "resize", this._eventHooks.resize), this._debug || (this._eventHooks.handleClick = this._handleClick.bind(this), Object(ae.b)(this._frameDocument.getElementsByTagName("body")[0], "click", this._eventHooks.handleClick))
        },
        _bindVideoListeners: function() {
            null !== this.video && (this._eventHooks.videoEnded = this._onVideoEnded.bind(this), this.video.on("ended", this._eventHooks.videoEnded), Ve.e && (this._eventHooks.iosfullscreenEnd = this._onIOSFullscreenEnd.bind(this), Object(ae.b)(this.video.video, "webkitendfullscreen", this._eventHooks.iosfullscreenEnd)))
        },
        _handleClick: function(t) {
            var e = this.get("adConfig"),
                n = t.target;
            if (e.preventExpansion) St(e.clickUrl);
            else {
                if (this.video && !this.video.isReady) return;
                this.isExpanded ? (this._resetExpandedVideo(), this.contractPanel(), n.hasAttribute("data-pausebutton") && "false" !== n.getAttribute("data-pausebutton") || (St(e.clickUrl), null === this.video || e.videoLoop || this.video.stop())) : this.expandPanel(), this.recalculate()
            }
        },
        _onIOSFullscreenEnd: function() {
            this.contractPanel(), St(this.get("adConfig").clickUrl, !0)
        },
        _onVideoEnded: function() {
            this._resetExpandedVideo(), this.contractPanel(), Object(ae.o)(this.video.video), this.recalculate()
        },
        _resetExpandedVideo: function() {
            this._expandedAtStart && (this._expandedAtStart = !1, this.video.unmute())
        },
        _unbindResponsiveAdListeners: function() {
            null !== this._frameWindow && (Object(ae.P)(this._frameWindow, "resize", this._eventHooks.resize), this._eventHooks.resize = null, this._debug || (Object(ae.P)(this._frameWindow, "click", this._eventHooks.handleClick), this._eventHooks.handleClick = null))
        },
        _unbindVideoListeners: function() {
            null !== this.video && (this.video.removeAllListeners(), this._eventHooks.videoEnded = null, Ve.e && (Object(ae.P)(this.video.video, "webkitendfullscreen", this._eventHooks.iosfullscreenEnd), this._eventHooks.iosfullscreenEnd = null))
        },
        constructor: gt,
        contractPanel: function() {
            !this.get("adConfig").preventExpansion && this.isExpanded && (this.get("adConfig").videoLoop || (this._windowHeight = this.get("responsiveDimensions")[1], this._frameElement.style.height = this._windowHeight + "px", Object(ae.N)(this._frameDocument.body, "is-expanded"), this.isExpanded = !1, null !== this.video && (this.video.hide(), this.video.pause())), this.emit("contract", this._windowHeight))
        },
        destroy: function(t) {
            this.destroyed || (this._unbindVideoListeners(), this._unbindResponsiveAdListeners(), this._elementCache = null, this._eventHooks = {}, this._frameDocument = null, this._frameElement = null, this._frameWindow = null, this.set("adConfig", null), this.set("responsiveDimensions", null), this.isExpanded = !1, We.prototype.destroy.call(this, t))
        },
        expandPanel: function() {
            if (!this.get("adConfig").preventExpansion && !this.isExpanded) {
                this._frameElement.style.height = "";
                var t = vt(this);
                this._windowHeight = t, this._frameElement.style.height = t + "px", Object(ae.a)(this._frameDocument.body, "is-expanded"), this.isExpanded = !0, Ot(this), null !== this.video && (this.video.show(), this.video.play()), this.emit("expand", t)
            }
        },
        getDom: function() {
            if (null !== this._elementCache) return this._elementCache;
            var t = {};
            return t.logos = Object(ae.h)(this._frameDocument.querySelectorAll(".responsive-ad__logo")), t.advert = this._frameDocument.querySelector(".responsive-ad__container"), t.window = this._frameWindow, !0 === this.get("adConfig").backgroundFixed ? t.background = this._frameElement.parentNode : t.background = this._frameDocument.querySelector(".responsive-ad__background"), this._elementCache = t
        },
        recalculate: function(t) {
            function e(t, e) {
                r = i[e], n = yt(t, this), o = {
                    left: n.left + "%",
                    top: n.top + "%"
                }, o.height = n.height + "px", jt(r, o)
            }
            var n = null,
                i = this._frameDocument.querySelectorAll(".responsive-ad__logo"),
                r = null,
                o = null;
            "number" == typeof t ? e.call(this, this.get("adConfig").logos[t], t) : (this.get("adConfig").logos.forEach(e.bind(this)), this.updateBackgroundConfig(this.get("adConfig"))), this.emit("recalculate")
        },
        render: function(t) {
            if (void 0 !== t && (this.get("adConfig") && this.destroy(!0), this.set("adConfig", t)), !this.get("adConfig")) throw new TypeError("adConfig has not been defined");
            var e = null,
                n = null;
            this._elementCache = null, this._frameElement = this.el.getElementsByTagName("iframe")[0], this._frameDocument = this._frameElement.contentDocument || this._frameElement.contentWindow.document, this._frameWindow = this._frameDocument.defaultView || this._frameDocument.parentWindow;
            var i = !(!this.get("adConfig").videoSrcMp4 && !this.get("adConfig").videoSrcWebM),
                r = {
                    backgroundImage: !1,
                    hasVideo: i,
                    isLegacy: Et(this),
                    logos: At(this.get("adConfig"))
                };
            !0 !== this.get("adConfig").backgroundFixed ? r.backgroundImage = kt(this.get("adConfig"), this.get("responsiveDimensions")) : _t(this._frameElement, kt(this.get("adConfig"), this.get("responsiveDimensions"))), e = document.createElement("div"), jt(e, {
                height: "100%"
            }), e.innerHTML = Je()(r), n = this._frameDocument.getElementsByTagName("body")[0], n.appendChild(e), n.setAttribute("data-ad-rendered-into", this._frameElement.getAttribute("id")), i && (this.video = new Xe(e.querySelector(".responsive-ad__video"), {
                autoplay: !!this.get("adConfig").expandedAtStart,
                loop: !!this.get("adConfig").videoLoop,
                mp4: this.get("adConfig").videoSrcMp4,
                muted: !!this.get("adConfig").expandedAtStart,
                webm: this.get("adConfig").videoSrcWebM
            })), this._bindResponsiveAdListeners(), this._bindVideoListeners(), this.resize(), setTimeout(function() {
                this.recalculate(), this.resize()
            }.bind(this), 1), this._expandedAtStart = this.get("adConfig").expandedAtStart, !this._expandedAtStart || Ve.d || Ve.e || (this.expandPanel(), this.recalculate()), this.emit("render")
        },
        resize: function() {
            if (null !== this._frameWindow) {
                var t = this._frameWindow.innerWidth,
                    e = gt.getDimensionsFromWidth(t, Et(this));
                this._windowWidth = t, this._windowHeight = e[1], this.get("responsiveDimensions") && this.get("responsiveDimensions")[0] === e[0] && this.get("responsiveDimensions")[1] === e[1] && !this.isExpanded || (this.set("responsiveDimensions", e), this.isExpanded ? ($e = !0, this._frameElement.style.height = "", this._windowHeight = vt(this), this._frameElement.style.height = this._windowHeight + "px") : this._frameElement.style.height = e[1] + "px", this.recalculate(), this.emit("resize"))
            }
        },
        updateBackgroundConfig: function(t) {
            if (null !== this.get("adConfig")) {
                var e = this.get("adConfig").backgroundFixed;
                this.set("adConfig", Tt(this.get("adConfig"), t));
                var n = kt(this.get("adConfig"), this.get("responsiveDimensions"));
                if (e && !0 === this.get("adConfig").backgroundFixed) _t(this._frameElement, n);
                else if (e && !0 !== this.get("adConfig").backgroundFixed) xt(this._frameElement), mt(this._frameDocument.querySelector(".responsive-ad__background"), n);
                else if (e || !0 !== this.get("adConfig").backgroundFixed) {
                    if (e || !0 === this.get("adConfig").backgroundFixed) throw "DIZ SHUD NOT HAPEN!!!";
                    var i = this._frameDocument.querySelector(".responsive-ad__background"),
                        r = {};
                    !1 !== n.url && (r.backgroundImage = "url(" + n.url + ")"), !1 !== n.colour && (r.backgroundColor = n.colour), !1 !== n.y && (r.backgroundPosition = "0 " + n.y + "%"), !1 !== n.repeat && (r.backgroundRepeat = n.repeat), jt(i, r)
                } else xt(this._frameDocument.querySelector(".responsive-ad__background")), _t(this._frameElement, n)
            }
        },
        updateLogoConfig: function(t, e) {
            if (null !== this.get("adConfig")) {
                if (t < 0 || t > this.get("adConfig").logos.length - 1) throw new RangeError("logoIndex must be between 0 and " + this.get("adConfig").logos.length - 1);
                this.get("adConfig").logos[t] = e, this.recalculate(t)
            }
        }
    }), gt.ADVERT_SIZES = [
        [350, 1.25],
        [500, 1.05],
        [900, .7],
        [1400, .275],
        [1401, .225]
    ], gt.LEGACY_ADVERT_SIZES = [
        [320, 100],
        [400, 125],
        [500, 156],
        [630, 141],
        [760, 170],
        [1e3, 224],
        [1200, 268],
        [1400, 313],
        [1520, 340]
    ], gt.MOBILE_MAX_WIDTH_INCL = 500, gt.inheritFrom = function(t) {
        if (t instanceof gt) return t;
        var e = t.get(),
            n = new gt(t.el, t.manager, e);
        switch (n._all = Object(ae.j)(t._all), n._conf = Object(ae.j)(t._conf), n._events = Object(ae.j)(t._events), n.slot = t.slot, t.manager.slots[t.id] = n, null !== t.group && (n.group = t.group, n.group.slots[t.id] = n), t.state) {
            case ye.RENDERED:
                M(n);
                break;
            case ye.DESTROYED:
                R(n);
                break;
            case ye.STOPPED:
                H(n)
        }
        return n
    }, gt.getDimensionsFromWidth = function(t, e, n) {
        function i(e) {
            var n = t * e[1];
            return [t, n]
        }
        var r = gt.ADVERT_SIZES;
        e && (r = gt.LEGACY_ADVERT_SIZES);
        for (var o = -1, s = r.length; ++o < s;)
            if (t <= r[o][0]) return e || !0 === n ? r[o].slice(0) : i(r[o]);
        return e || !0 === n ? r[s - 1].slice(0) : i(r[s - 1])
    }, window.GptAdSlots = !0;
    var Ze = gt,
        Qe = 1 / 0;
    Ct.prototype = Object(ae.D)(Ue.a.prototype, {
        add: function(t) {
            if (f(t)) throw new TypeError("Ad is already part of a group");
            if (this.size >= this.maxSlots) throw new RangeError("Group has maxed its slots");
            this.slots[t.id] = t, t.group = this, t.once("destroy", zt), this.size++, !this.lazyload && t.get("lazyload") && (this.lazyload = !0), this.emit("add", Object(ae.k)("add", this, {
                ad: t
            }))
        },
        constructor: Ct,
        destroy: function() {
            var t = "";
            for (t in this.slots) Object(ae.C)(this.slots, t) && this.slots[t].destroy();
            It.call(this), this.emit("destroy", Object(ae.k)("destroy", this)), this.removeAllListeners()
        },
        refresh: function() {
            return this.manager.refresh(Object(ae.v)(this.slots), !1)
        },
        register: function() {
            return Promise.all(Object(ae.v)(this.slots).map(Nt))
        },
        release: function() {
            this.remove(), this.emit("release", Object(ae.k)("release", this))
        },
        remove: function(t) {
            if (0 === arguments.length) return void Object(ae.v)(this.slots).forEach(this.remove.bind(this));
            if (f(t)) {
                if (t.group !== this) throw new Error("Ad is not part of this group");
                t.off("destroy", zt), t.group = null, this.slots[t.id] = null, delete this.slots[t.id], this.size--, this.emit("remove", Object(ae.k)("remove", this, {
                    ad: t
                }))
            }
        },
        render: function() {
            return this.manager.render(Object(ae.v)(this.slots))
        },
        resize: function() {
            var t = Object(ae.v)(this.slots).map(function(t) {
                    return Object(ae.s)(t.el)
                }),
                e = 1 / 0,
                n = -1 / 0;
            t.forEach(function(t) {
                t.top < e && (e = t.top), t.bottom > n && (n = t.bottom)
            }), this._bounds.bottom = n, this._bounds.top = e
        }
    });
    var tn = Ct,
        en = 100,
        nn = window.innerHeight,
        rn = !1;
    Lt.prototype = Object(ae.D)(Ue.a.prototype, {
        constructor: Lt,
        createAd: function(t, e) {
            return new We(t, this, e || {})
        },
        display: function(t) {
            var e = k(t);
            t.setAttribute("id", "ad_" + Object(ae.M)());
            var n = this.createAd(t, e);
            return this.register(n).then(function() {
                return this.render(n)
            }.bind(this)).then(function() {
                return this.refresh(n)
            }.bind(this))
        },
        getSlots: function(t) {
            var e = Object(ae.f)({
                    cls: ".ad__container",
                    el: document,
                    filter: null
                }, t),
                n = Object(ae.h)(e.el.querySelectorAll(e.cls));
            return e.filter ? n.filter(e.filter) : n
        },
        init: function() {
            return this.initialised ? Promise.resolve() : (this.initialised = !0, v().then(function() {
                j(function(t) {
                    googletag.pubads().disableInitialLoad(), googletag.pubads().enableSingleRequest(), googletag.pubads().enableAsyncRendering(), googletag.pubads().collapseEmptyDivs(!0), googletag.enableServices(), googletag.pubads().addEventListener("slotRenderEnded", Ht.bind(this)), t()
                }.bind(this))
            }.bind(this)))
        },
        lazy: function(t) {
            return Pt.call(this, t), Promise.resolve()
        },
        refresh: function(t, e) {
            return C(t).then(function() {
                return T(t, e)
            }).catch(function(t) {
                throw console.error("There was an error refreshing the ads"), t
            })
        },
        register: function(t) {
            return Array.isArray(t) ? Promise.all(t.map(this.register)) : L(t).then(function() {
                return z(t)
            }).then(function() {
                return I(t)
            }).catch(function(t) {
                throw console.error("There was an error registering the ads"), t
            })
        },
        render: function(t) {
            return Array.isArray(t) ? Promise.all(t.map(this.render)).catch(function(t) {
                throw console.error("There was an error rendering the ads"), t
            }) : P(t).catch(function(t) {
                throw console.error("There was an error rendering the ads"), t
            })
        },
        update: function() {
            for (var t = Object(ae.A)(), e = {
                    bottom: t + nn,
                    top: t
                }, n = this._lazyloadGroups.length, i = null; n--;) i = this._lazyloadGroups[n], Wt(e, i._bounds) && Ft(i) && (Vt(i), this._lazyloadGroups.splice(n, 1));
            0 === this._lazyloadGroups.length && Dt.call(this)
        },
        updateCorrelator: function() {
            return j(function() {
                googletag.pubads().updateCorrelator()
            })
        }
    });
    var on = new Lt;
    window.GptAdSlots = {
        setSlotWindowAsBlankAdvert: function(t) {
            var e = null,
                n = null;
            if ((e = Object(ae.t)(t)) && (n = Object(ae.w)(e, ".ad__container"))) {
                Object(ae.a)(n.parentNode, "is-hidden");
                var i = on.slots[n.getAttribute("id")];
                H(i), i.emit("stop", Object(ae.k)("stop", i, {
                    originalEvent: null
                })), i.manager.emit("stop", Object(ae.k)("stop", i.manager, {
                    ad: i,
                    originalEvent: null
                }))
            }
        }
    }, window.PromotionButtons = {
        add: function(t, e) {
            var n = Object(ae.t)(e),
                i = Object(ae.w)(n, ".ad__container");
            if (i) {
                var r = i.getAttribute("id"),
                    o = on.slots[r];
                He.inheritFrom(o), He.render(o, t)
            }
        }
    }, window.RESPONSIVEADS = {
        renderCallbackForGpt: function(t, e) {
            var n = Object(ae.t)(e),
                i = n.contentDocument || n.contentWindow.document;
            n.setAttribute("width", "100%"), t(i.getElementsByTagName("body")[0])
        },
        renderIframeIntoElement: function(t, e) {
            t = $t(t);
            var n = e.ownerDocument,
                i = n.defaultView || n.parentWindow,
                r = i.frameElement,
                o = Object(ae.x)(r, ".ad__container");
            Object(ae.a)(o, "ad__container--responsive");
            var s = o.getAttribute("id"),
                a = on.slots[s];
            a = Ze.inheritFrom(a), a.render(t)
        }
    }, window.InreadSupport = {
        requestAd: function(t, e) {
            var n = Object(ae.t)(e),
                i = Object(ae.w)(n, ".ad__container");
            if (i) {
                var r = i.getAttribute("id"),
                    o = on.slots[r];
                Se.render(o, t)
            }
        }
    }, window.INTERSTITIAL_AD = {
        displayInterstitialAd: function(t, e, n) {
            var i = Object(ae.t)(n),
                r = Object(ae.w)(i, ".ad__container");
            if (r) {
                var o = r.getAttribute("id"),
                    s = on.slots[o];
                Pe.render(s, t, e)
            }
        },
        gptInterstitialRenderEndedCallback: function(t) {
            window.INTERSTITIAL_AD.displayInterstitialAd(null, t.sizeInfo)
        }
    }, window.cn_rubicon_resize = function(t, e) {
        var n = e.split("x");
        n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10);
        var i = Object(ae.w)(document.getElementById(t), ".ad__container");
        i && on.slots[i.getAttribute("id")].forceSizeChange(n[0], n[1])
    };
    var sn = n(44),
        an = n.n(sn);
    Zt.prototype = {
        clear: function() {
            for (var t in on.slots) on.slots.hasOwnProperty(t) && te(on.slots[t]) && Qt(on.slots[t])
        },
        constructor: Zt,
        debug: function(t) {
            for (var e in on.slots) on.slots.hasOwnProperty(e) && (!t && te(on.slots[e]) || on.slots[e].state === ye.RENDERED && (t && Qt(on.slots[e]), ee(on.slots[e])))
        }
    };
    var ln = new Zt;
    n.d(e, "c", function() {
        return cn
    }), n.d(e, !1, function() {
        return We
    }), n.d(e, "b", function() {
        return on
    }), n.d(e, "a", function() {
        return ln
    }), n.d(e, !1, function() {
        return He
    });
    var cn = ne
}, , function(t, e, n) {
    "use strict";

    function i() {
        E.a.call(this, {
            wildcard: !0
        }), this.el = document.querySelector("." + O), null !== this.el && (this.emit("visibilityChange", o(this, "visible")), s(this))
    }

    function r(t, e) {
        return Object(y.k)(e, t, {
            country: t.innerText,
            url: t.getAttribute("href")
        })
    }

    function o(t, e) {
        return Object(y.k)("visibilityChange", t, {
            visibility: e
        })
    }

    function s(t) {
        var e = document.getElementById(k);
        e._hookChange = a.bind(t), Object(y.c)(e, "change", e._hookChange), d(t.el.querySelectorAll("." + S)).forEach(function(e) {
            e._hookClick = l.bind(t), e._hookMouseover = c.bind(t), Object(y.c)(e, "click", e._hookClick), Object(y.b)(e, "mouseover", e._hookMouseover)
        })
    }

    function a() {
        this.emit("visibilityChange", o(this, "hidden")), this.destroy()
    }

    function l(t) {
        this.emit("linkClick", r(t.target, "linkClick")), t.target._hookClick = null
    }

    function c(t) {
        this.emit("linkHover", r(t.target, "linkHover"))
    }

    function u(t) {
        var e = document.getElementById(k);
        Object(y.P)(e, "change", e._hookChange), e._hookChange = null, d(t.el.querySelectorAll("." + S)).forEach(function(t) {
            Object(y.P)(t, "click", t._hookClick), Object(y.P)(t, "mouseover", t._hookMouseover), t._hookClick = null, t._hookMouseover = null
        })
    }

    function d(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function h() {
    }

    function f(t) {
        var e = Object(y.u)(_.a.abbr),
            n = e + "_",
            i = t;
        return t.substr(0, n.length) !== n && (i = n + i), window[e].Store.get(i)
    }

    function p() {
        null !== A.el && (b("Shown", null), A.on("visibilityChange", function(t) {
            b("Closed", null)
        }), A.on("linkClick", function(t) {
            b("Link Click", t.country)
        }), A.on("linkHover", function(t) {
            b("Link Hover", t.country)
        }))
    }

    function b(t, e) {
        v.a.SendAll(v.a.SEND_HITTYPES.EVENT, {
            eventAction: t,
            eventCategory: "CountryBanner",
            eventLabel: e,
            transport: "beacon"
        })
    }

    function g(t, e) {
        var n = Object(y.u)(_.a.abbr),
            i = n + "_",
            r = t;
        return t.substr(0, i.length) !== i && (r = i + r), window[n].Store.set(r, e)
    }

    function m(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }
    var _ = n(10),
        v = n(14),
        y = n(0),
        w = n(1),
        E = n.n(w),
        O = "c-int-redirect",
        S = "c-int-redirect__list__item a",
        k = "chkIntRedirectDisplay";
    i.prototype = Object(y.D)(E.a.prototype, {
        constructor: i,
        destroy: function() {
            u(this), Object(y.O)(this.el), this.el = null, this.removeAllListeners()
        }
    });
    var A = new i;
    e.a = h, e.b = f, e.c = p, e.d = g, e.e = m
}, , , function(t, e, n) {
    "use strict";
    var i = n(28),
        r = n.n(i),
        o = n(29);
    n.n(o);
    window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.init = !1, window.lazySizesConfig.lazyClass = "img-lazyload", window.lazySizesConfig.preloadClass = "img-lazypreload", window.lazySizesConfig.loadingClass = "img-lazyload--loading", window.lazySizesConfig.loadedClass = "img-lazyload--loaded", e.a = {
        init: function() {
            r.a.init()
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = {
        abbr: "sc",
        name: "SwagbagClub",
        promo_name: "SwagbagClub"
    };
    e.a = i
}, , function(t, e, n) {
    (function(e) {
        function n(t, e) {
            return function() {
                return e.apply(t, Array.prototype.slice.call(arguments, 0))
            }
        }

        function i(t, e) {
            return Array.prototype.slice.call(t, e || 0)
        }

        function r(t, e) {
            s(t, function(t, n) {
                return e(t, n), !1
            })
        }

        function o(t, e) {
            var n = a(t) ? [] : {};
            return s(t, function(t, i) {
                return n[i] = e(t, i), !1
            }), n
        }

        function s(t, e) {
            if (a(t)) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n], n)) return t[n]
            } else
                for (var i in t)
                    if (t.hasOwnProperty(i) && e(t[i], i)) return t[i]
        }

        function a(t) {
            return null != t && "function" != typeof t && "number" == typeof t.length
        }

        function l(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }

        function c(t) {
            return t && "[object Object]" === {}.toString.call(t)
        }
        var u = function() {
                return Object.assign ? Object.assign : function(t, e, n, i) {
                    for (var o = 1; o < arguments.length; o++) r(Object(arguments[o]), function(e, n) {
                        t[n] = e
                    });
                    return t
                }
            }(),
            d = function() {
                function t() {}
                return Object.create ? function(t, e, n, r) {
                    var o = i(arguments, 1);
                    return u.apply(this, [Object.create(t)].concat(o))
                } : function(e, n, r, o) {
                    var s = i(arguments, 1);
                    return t.prototype = e, u.apply(this, [new t].concat(s))
                }
            }(),
            h = function() {
                return String.prototype.trim ? function(t) {
                    return String.prototype.trim.call(t)
                } : function(t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }(),
            f = "undefined" != typeof window ? window : e;
        t.exports = {
            assign: u,
            create: d,
            trim: h,
            bind: n,
            slice: i,
            each: r,
            map: o,
            pluck: s,
            isList: a,
            isFunction: l,
            isObject: c,
            Global: f
        }
    }).call(e, n(26))
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return Object(b.k)("hide", t, {
            visible: e
        })
    }

    function r(t, e, n) {
        return Object(b.k)("update", t, {
            scrollY: e,
            scrollVelocity: n
        })
    }

    function o(t) {
        return Object(b.k)("pause", t)
    }

    function s(t) {
        return Object(b.k)("unpause", t)
    }

    function a(t) {
        return Object(b.k)("disable", t)
    }

    function l(t) {
        return Object(b.k)("enable", t)
    }

    function c(t, e) {
        return Object(b.k)("viewchange", t, {
            view: e
        })
    }

    function u(t, e) {
        v.a.call(this, {
            wildcard: !0
        }), this._isEnabled = !1, this._isPaused = !1, this._isVisible = !0, this._hooks = {
            scroll: null
        }, this._lastScrollY = 0, this._offsetY = 0, this.el = t
    }

    function d(t, e) {
        v.a.call(this, {
            wildcard: !0
        }), this.el = t, this._galleryCountLabel = this.el.querySelector(w), this._galleryCountTotal = this.el.querySelector(E), this._isGridView = !1, this._init()
    }

    function h(t) {
        null !== h._tmr && clearTimeout(h._tmr), h.isMuted = !0, h._tmr = setTimeout(function() {
            h._tmr = null, h.isMuted = !1
        }, t)
    }

    function f(t) {
        this.el = t, this.hasHeaderLogo = p(t), this.vanishingNavigation = null, this.galleryNavigation = null, this._hamburger = this.el.querySelector(k), this._hamburgerMenu = this.el.querySelector(A), this._search = this.el.querySelector(x), this._searchOverlay = document.querySelector(j), this._signpost = this.el.querySelector(T), this._logo = this.el.querySelector(C), this._sticker = this.el.querySelector(I), this._stickerChild = this.el.querySelector(N), this._offsets = {
            sticker: Object(b.s)(this._sticker)
        }, this._isStuck = !1, this._isGallery = !1, this._isMenuOpen = !1, this._galleryScrollY = 0, this._isGalleryHidden = !1, this._init()
    }

    function p(t) {
        return !!t.querySelector(".n-main__header")
    }
    var b = n(0),
        g = n(3),
        m = n(9),
        _ = n(1),
        v = n.n(_);
    u.prototype = Object(b.D)(v.a.prototype, {
        constructor: u,
        hide: function() {
            this._isVisible && (this._isVisible = !1, Object(b.a)(this.el, "is-hidden"), this.emit("visibilitychange", i(this, "hidden")))
        },
        show: function() {
            this._isVisible || (this._isVisible = !0, Object(b.N)(this.el, "is-hidden"), this.emit("visibilitychange", i(this, "visible")))
        },
        enable: function() {
            this.isEnabled || (this.isEnabled = !0, Object(b.a)(this.el, "n-vanishing-nav"), this._hooks.scroll = Object(b.R)(this.update, 300, this), Object(b.b)(window, "scroll", this._hooks.scroll), this.emit("enable", l(this)))
        },
        disable: function() {
            this._isEnabled && (this._isEnabled = !1, Object(b.N)(this.el, "n-vanishing-nav"), Object(b.P)(window, "scroll", this._hooks.scroll), this._hooks.scroll = null, this.emit("disable", a(this)))
        },
        update: function() {
            if (!this._isPaused) {
                var t = Object(b.A)(),
                    e = t - this._lastScrollY;
                return this._lastScrollY = t, this.emit("update", r(this, t, e)), t - this._offsetY <= 400 ? void(this._isVisible || this.show()) : !this._isVisible && e < 0 ? this.show() : this._isVisible && e > 0 ? this.hide() : void 0
            }
        },
        pause: function() {
            this._isPaused = !0, this.emit("pause", o(this))
        },
        unpause: function() {
            this._isPaused = !1, this.emit("unpause", s(this))
        }
    });
    var y = u,
        w = ".n-gallery-counter__current",
        E = ".n-gallery-counter__total",
        O = "global__hidden";
    d.prototype = Object(b.D)(v.a.prototype, {
        _init: function() {
            Object(b.b)(this.el.querySelector(".n-gallery-toggle"), "click", this._toggleView.bind(this))
        },
        constructor: d,
        setGalleryCounter: function(t, e) {
            this._galleryCountLabel.innerHTML = Number(t), void 0 !== e && (this._galleryCountTotal.innerHTML = Number(e))
        },
        setArticleTitle: function(t) {
            var e = this.el.querySelector(".n-main__nav-title");
            e.innerHTML = t, e.setAttribute("title", t)
        },
        displayGridView: function() {
            this._isGridView || (this._isGridView = !0, Object(b.a)(this.el.querySelector(".n-gallery-toggle--grid"), O), Object(b.N)(this.el.querySelector(".n-gallery-toggle--list"), O), Object(b.a)(this.el.querySelector(".n-gallery-counter"), O), this.emit("viewchange", c(this, "grid")))
        },
        displayListView: function() {
            this._isGridView && (this._isGridView = !1, Object(b.N)(this.el.querySelector(".n-gallery-toggle--grid"), O), Object(b.a)(this.el.querySelector(".n-gallery-toggle--list"), O), Object(b.N)(this.el.querySelector(".n-gallery-counter"), O), this.emit("viewchange", c(this, "list")))
        },
        _toggleView: function() {
            this._isGridView ? this.displayListView() : this.displayGridView()
        }
    });
    var S = d,
        k = ".n-main__nav-hamburger",
        A = ".n-menu",
        x = ".n-main__nav-search",
        j = ".n-search",
        T = ".n-main__nav-signpost",
        C = ".n-main__nav-logo",
        I = ".n-main__sticker",
        N = ".n-main__sticker-child",
        z = window.innerHeight / 2,
        L = 0;
    h._tmr = null, h.isMuted = !1, f.prototype = {
        _init: function() {
            Object(b.b)(window, "scroll", this.update.bind(this)), Object(b.b)(document.getElementById("chkNavSearch"), "change", this._onSearchBoxChange.bind(this)), this.hasHeaderLogo && Object(b.b)(window, "resize", Object(b.l)(function() {
                this.resize(), this.update()
            }, 200, this)), Object(b.b)(document.getElementById("chkNavHamburger"), "change", this._onHamburgerChange.bind(this)), g.c && Object(b.b)(this.el.querySelector(k), "touchstart", function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = document.getElementById("chkNavHamburger");
                e.checked = !e.checked, Object(b.p)(e, "change", !1, !0)
            }), (g.d || g.e) && (this.vanishingNavigation = new y(this.el), this.vanishingNavigation.enable()), this.el.querySelector(".n-gallery-nav") && (this.galleryNavigation = new S(this.el.querySelector(".n-gallery-nav")), this.galleryNavigation.on("viewchange", this._viewchangeMuteScroll.bind(this))), m.a.init()
        },
        _viewchangeMuteScroll: function() {
            h(500), this._galleryScrollY = Object(b.A)()
        },
        constructor: f,
        setSignpost: function(t) {
            this._signpost.innerHTML = t
        },
        resize: function() {
            this._offsets.sticker = Object(b.s)(this._sticker), z = window.innerHeight / 2
        },
        _galleryHide: function() {
            this._isGalleryHidden = !0, Object(b.N)(this.el.querySelector(".n-gallery-nav"), "is-visible")
        },
        _galleryShow: function() {
            this._isGalleryHidden = !1, Object(b.a)(this.el.querySelector(".n-gallery-nav"), "is-visible")
        },
        _galleryScroll: function(t) {
            if (this._isGallery && !h.isMuted) {
                var e = t - this._galleryScrollY;
                return this._galleryScrollY = t, !this._isGalleryHidden && e < 0 ? this._galleryHide() : this._isGalleryHidden && e > 0 ? this._galleryShow() : void 0
            }
        },
        hideGallery: function() {
            this._isGallery && (this._isGallery = !1, Object(b.N)(this.el.querySelector(".n-gallery-nav"), "is-visible"), this._unpauseVanishingHeader())
        },
        showGallery: function() {
            this._isGallery || (this._isGallery = !0, Object(b.a)(this.el.querySelector(".n-gallery-nav"), "is-visible"), this._pauseVanishingHeader())
        },
        stick: function() {
            this._isStuck || (this._isStuck = !0, Object(b.a)(this._stickerChild, "is-stuck"), Object(b.a)(this._searchOverlay, "is-stuck"), this._sticker.style.height = this._stickerChild.offsetHeight + "px")
        },
        unstick: function() {
            this._isStuck && (this._isStuck = !1, Object(b.N)(this._stickerChild, "is-stuck"), Object(b.N)(this._searchOverlay, "is-stuck"), this._sticker.style.height = "")
        },
        update: function() {
            var t = Object(b.A)();
            !this._isStuck && t > this._offsets.sticker.top ? (this.stick(), this.hasHeaderLogo && this._displayLogo()) : this._isStuck && t < this._offsets.sticker.top && (this.unstick(), this.hasHeaderLogo && this._hideLogo()), this._galleryScroll(t)
        },
        _displayHamburgerMenu: function() {
            this._isMenuOpen || (this._isMenuOpen = !0, L = Object(b.A)(), Object(b.a)(this._hamburgerMenu, "is-visible"), Object(b.a)(document.documentElement, "has-open-menu"), Object(b.a)(document.body, "has-open-menu"), Object(b.a)(this._hamburger.querySelector(".n-main__nav-hamburger__icon"), "global__hidden"), Object(b.N)(this._hamburger.querySelector(".n-main__nav-hamburger__close-icon"), "global__hidden"))
        },
        _hideHamburgerMenu: function() {
            this._isMenuOpen && (this._isMenuOpen = !1, Object(b.N)(this._hamburgerMenu, "is-visible"), Object(b.N)(document.documentElement, "has-open-menu"), Object(b.N)(document.body, "has-open-menu"), window.scrollTo(0, L), Object(b.N)(this._hamburger.querySelector(".n-main__nav-hamburger__icon"), "global__hidden"), Object(b.a)(this._hamburger.querySelector(".n-main__nav-hamburger__close-icon"), "global__hidden"))
        },
        _hideSearchOverlay: function() {
            Object(b.B)(this._searchOverlay, "has-overlay") && (Object(b.N)(this._searchOverlay, "has-overlay"), Object(b.N)(this._search.querySelector(".n-main__nav-search__icon"), "global__hidden"), Object(b.a)(this._search.querySelector(".n-main__nav-search__close-icon"), "global__hidden"))
        },
        _displaySearchOverlay: function(t) {
            Object(b.B)(this._searchOverlay, "has-overlay") || (Object(b.a)(this._searchOverlay, "has-overlay"), t && this._searchOverlay.getElementsByTagName("input")[0].focus(), Object(b.a)(this._search.querySelector(".n-main__nav-search__icon"), "global__hidden"), Object(b.N)(this._search.querySelector(".n-main__nav-search__close-icon"), "global__hidden"))
        },
        _displayLogo: function() {
            Object(b.B)(this._logo, "is-hidden") && Object(b.N)(this._logo, "is-hidden")
        },
        _hideLogo: function() {
            Object(b.B)(this._logo, "is-hidden") || Object(b.a)(this._logo, "is-hidden")
        },
        _onHamburgerChange: function(t) {
            t.target.checked ? (this._pauseVanishingHeader(), this._displayHamburgerMenu()) : (this._unpauseVanishingHeader(), this._hideHamburgerMenu())
        },
        _onSearchBoxChange: function(t) {
            console.log('_onSearchBoxChange');
            t.target.checked ? (this._pauseVanishingHeader(), this._displaySearchOverlay(!0)) : (this._unpauseVanishingHeader(), this._hideSearchOverlay())
        },
        _pauseVanishingHeader: function() {
            null !== this.vanishingNavigation && (this.vanishingNavigation.pause(), this.vanishingNavigation.show())
        },
        _unpauseVanishingHeader: function() {
            null !== this.vanishingNavigation && this.vanishingNavigation.unpause()
        }
    };
    var P;
    null !== document.querySelector(".n-main") && (P = new f(document.querySelector(".n-main")));
    e.a = P
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        this._name = e && void 0 !== e.name ? e.name : "TRACKER" + i.TRACKERS.length, this._id = t, this.type = e && void 0 !== e.type ? e.type : "brand";
        var n = {
            allowLinker: !(!e || !e.linker),
            cookieDomain: e && void 0 !== e.cookieDomain ? e.cookieDomain : "auto",
            name: this._name,
            trackingId: this._id
        };
        ga("create", n), e && !0 === e.displayFeatures && ga(this._name + ".require", "displayfeatures"), e && void 0 !== e.linker && (ga(this._name + ".require", "linker"), ga(this._name + ".linker:autoLink", e.linker)), e && void 0 !== e.optimizeId && ga(this._name + ".require", e.optimizeId), i.TRACKERS.push(this)
    }

    function r(t) {
        var e = {},
            n = "";
        for (n in t) t.hasOwnProperty(n) && (a.test(n) || (e[n] = t[n]));
        return e
    }

    function o(t) {
        return "COMSCORE" in window && null !== window.COMSCORE && COMSCORE.beacon({
            c1: "2",
            c2: i.COMSCORE_PUBLISHED_ID,
            c4: t
        })
    }
    var s = n(0),
        a = /^dimension/;
    i.TRACKERS = [], i.ResetCustomDimensions = function() {
        i.TRACKERS.forEach(function(t) {
            t.resetCustomDimensions()
        })
    }, i.SendAll = function(t, e) {
        i.TRACKERS.forEach(function(n) {
            n.send(t, e)
        })
    }, i.SetAll = function(t, e) {
        var n = arguments.length;
        i.TRACKERS.forEach(function(i) {
            2 === n ? i.set(t, e) : i.set(t)
        })
    }, i.prototype = {
        constructor: i,
        resetCustomDimensions: function() {
            var t = {};
            for (var e in i.DIMENSION_BY_INDEX) i.DIMENSION_BY_INDEX.hasOwnProperty(e) && (t[e] = null);
            this.set(t)
        },
        send: function(t, e) {
            var n = Object(s.f)({
                    comscore: !0
                }, e, {
                    hitType: t
                }),
                r = n.comscore;
            delete n.comscore, ga(this._name + ".send", n), t === i.SEND_HITTYPES.PAGEVIEW && r && "brand" === this.type && o(location.href)
        },
        set: function(t, e) {
            var n = t;
            2 === arguments.length && (n = {}, n[t] = e), "brand" !== this.type && (n = r(n)), ga(this._name + ".set", n)
        }
    }, i.getDimensionByIndex = function(t) {
        if (i.INDEX_BY_DIMENSION.hasOwnProperty(t)) return i.INDEX_BY_DIMENSION[t];
        throw new TypeError(t + " is not a valid index")
    }, i.getIndexByDimension = function(t) {
        if (i.DIMENSION_BY_INDEX.hasOwnProperty(t)) return i.DIMENSION_BY_INDEX[t];
        throw new TypeError(t + " is not a valid dimension")
    }, i.INDEX_BY_DIMENSION = {
        PAGE_TEMPLATE: "dimension1",
        BASE_URL: "dimension3",
        UPDATE_DATE: "dimension22",
        PUBLISH_DATE: "dimension10",
        AUTHOR: "dimension7",
        GALLERY_URL: "dimension33",
        PRIMARY_TAG: "dimension4",
        TAGS: "dimension6",
        MAGAZINE_CONTENT: "dimension19",
        MAGAZINE_ISSUE: "dimension20",
        UMBRACO_ID: "dimension35",
        MERLIN_ID: "dimension36",
        PAGE_AGE: "dimension9",
        GALLERY_LENGTH: "dimension13",
        GALLERY_POSITION: "dimension12",
        GALLERY_PHOTO_CREDIT: "dimension11",
        PLATFORM: "dimension5",
        AD_BLOCKER: "dimension43",
        WORD_COUNT: "dimension8",
        DISPLAY_DATE: "dimension45",
        NAME_OF_DAY: "dimension41",
        PUBLISH_DATE_HOUR: "dimension42",
        SYNDICATED: "dimension48",
        SYNDICATION_SOURCE: "dimension49",
        SYNDICATION_ORIGINAL_URL: "dimension50",
        SYNDICATION_ORIGINAL_LANGUAGE: "dimension51",
        SPONSORED: "dimension46",
        SPONSOR: "dimension47"
    }, i.DIMENSION_BY_INDEX = {
        dimension1: "PAGE_TEMPLATE",
        dimension3: "BASE_URL",
        dimension22: "UPDATE_DATE",
        dimension10: "PUBLISH_DATE",
        dimension7: "AUTHOR",
        dimension33: "GALLERY_URL",
        dimension4: "PRIMARY_TAG",
        dimension6: "TAGS",
        dimension19: "MAGAZINE_CONTENT",
        dimension20: "MAGAZINE_ISSUE",
        dimension35: "UMBRACO_ID",
        dimension36: "MERLIN_ID",
        dimension9: "PAGE_AGE",
        dimension13: "GALLERY_LENGTH",
        dimension12: "GALLERY_POSITION",
        dimension11: "GALLERY_PHOTO_CREDIT",
        dimension5: "PLATFORM",
        dimension43: "AD_BLOCKER",
        dimension8: "WORD_COUNT",
        dimension45: "DISPLAY_DATE",
        dimension41: "NAME_OF_DAY",
        dimension42: "PUBLISH_DATE_HOUR",
        dimension48: "SYNDICATED",
        dimension49: "SYNDICATION_SOURCE",
        dimension50: "SYNDICATION_ORIGINAL_URL",
        dimension51: "SYNDICATION_ORIGINAL_LANGUAGE",
        dimension46: "SPONSORED",
        dimension47: "SPONSOR"
    }, i.REFERRERS = {
        EXTERNAL: "External",
        HOMEPAGE: "Homepage",
        INCONTENT_LINK: "In-content link",
        INFINITE_SCROLL: "Infinite scroll",
        MAGAZINE_PAGE: "Magazine page",
        RELATED_READING_LIST: "Related reading list",
        TAG_PAGE: "Tag page",
        "TOP STORIES LIST": "Top stories list"
    }, i.SEND_HITTYPES = {
        EVENT: "event",
        EXCEPTION: "exception",
        ITEM: "item",
        PAGEVIEW: "pageview",
        SCREENVIEW: "screenview",
        SOCIAL: "social",
        TIMING: "timing",
        TRANSACTION: "transaction"
    }, i.TRACKING_BRAND_ID = null, i.TRACKING_CONDE_ID = null, i.COMSCORE_PUBLISHED_ID = 15335235, e.a = i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        c.a.call(this), this._frame = null, this._scrollStart = Object(u.i)(h), this._setPosition = Object(u.G)(t) ? a : s, this._timeStart = null, this._updateBound = this._update.bind(this), this._userInput = null, this.duration = 0, this.el = t, this.isScrolling = !1, this.offset = Object(u.i)(h), this.scrollTarget = null
    }

    function r(t, e, n, i) {
        return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
    }

    function o(t) {
        return cancelAnimationFrame(t._frame), t._unbindStopOnInput(), t.isScrolling = !1, t.scrollTarget = null, t._frame = null, t._scrollStart = null, t._timeStart = null, t
    }

    function s(t, e, n) {
        void 0 !== e && (t.scrollLeft = e), void 0 !== n && (t.scrollTop = n)
    }

    function a(t, e, n) {
        t.scrollTo(e, n)
    }
    var l = n(1),
        c = n.n(l),
        u = n(0),
        d = {
            offset: {
                x: 0,
                y: 0
            },
            relative: !0,
            stopOnUserInput: !0
        },
        h = {
            x: 0,
            y: 0
        };
    i.prototype = Object(u.D)(c.a.prototype, {
        constructor: i,
        _bindStopOnInput: function() {
            this._userInput = function() {
                this.stop()
            }.bind(this), Object(u.b)(this.el, "wheel", this._userInput), Object(u.b)(this.el, "touchstart", this._userInput)
        },
        _complete: function() {
            o(this), this.emit("complete")
        },
        _unbindStopOnInput: function() {
            null !== this._userInput && (Object(u.P)(this.el, "wheel", this._userInput), Object(u.P)(this.el, "touchstart", this._userInput), this._userInput = null)
        },
        _update: function(t) {
            null === this._timeStart && (this._timeStart = t);
            var e = t - this._timeStart,
                n = r(e, this._scrollStart.x, this.scrollTarget.x, this.duration),
                i = r(e, this._scrollStart.y, this.scrollTarget.y, this.duration);
            this._setPosition(this.el, n, i), this.emit("update", i), e < this.duration ? this._frame = requestAnimationFrame(this._updateBound) : (this._setPosition(this.el, this._scrollStart.x + this.scrollTarget.x, this._scrollStart.y + this.scrollTarget.y), this._complete())
        },
        destroy: function() {
            this.stop(), this.removeAllListeners(), this._setPosition = null, this._updateBound = null
        },
        start: function(t, e, n) {
            var i = Object(u.f)({}, d, n);
            this.isScrolling && this.stop(), this.isScrolling = !0, this.duration = e, this.offset.x = i.offset.x, this.offset.y = i.offset.y, i.stopOnUserInput && this._bindStopOnInput(), this._scrollStart = Object(u.f)({}, h, {
                x: Object(u.y)(this.el),
                y: Object(u.z)(this.el)
            }), this.scrollTarget = Object(u.i)(t), this.scrollTarget.x = Math.ceil(this.scrollTarget.x + this.offset.x), this.scrollTarget.y = Math.ceil(this.scrollTarget.y + this.offset.y), i.relative || (this.scrollTarget.x -= this._scrollStart.x, this.scrollTarget.y -= this._scrollStart.y), this.emit("start"), window.requestAnimationFrame ? this._frame = requestAnimationFrame(this._updateBound) : (this._setPosition(this.scrollTarget.x, this.scrollTarget.y), this._complete())
        },
        stop: function() {
            this.isScrolling && (o(this), this.emit("stop"))
        }
    }), e.a = i
}, , function(t, e, n) {
    "use strict";
    var i = n(9);
    e.a = {
        init: function() {
            i.a.init()
        }
    }
}, function(t, e, n) {
    var i = n(42);
    i.Template = n(43).Template, i.template = i.Template, t.exports = i
}, , function(t, e, n) {
    "use strict";
    var i = n(17);
    e.a = {
        init: function() {
            i.a.init()
        }
    }
}, , , , function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (d === clearTimeout) return clearTimeout(t);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
        try {
            return d(t)
        } catch (e) {
            try {
                return d.call(null, t)
            } catch (e) {
                return d.call(this, t)
            }
        }
    }

    function s() {
        b && f && (b = !1, f.length ? p = f.concat(p) : g = -1, p.length && a())
    }

    function a() {
        if (!b) {
            var t = r(s);
            b = !0;
            for (var e = p.length; e;) {
                for (f = p, p = []; ++g < e;) f && f[g].run();
                g = -1, e = p.length
            }
            f = null, b = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var u, d, h = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            d = i
        }
    }();
    var f, p = [],
        b = !1,
        g = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || b || r(a)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function(t) {
        return []
    }, h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return Object(c.k)("visibilitychange", t, {
            state: e
        })
    }

    function r(t) {
        return Object(c.k)("remove", t)
    }

    function o(t) {
        return Object(c.k)("limitexceeded", t)
    }

    function s(t) {
        l.a.call(this, {
            wildcard: !0
        }), this.el = t, this.isHidden = !0, this._hooks = {
            click: null
        }, this._init()
    }
    var a = n(1),
        l = n.n(a),
        c = n(0);
    s.prototype = Object(c.D)(l.a.prototype, {
        _bindListeners: function() {
            this._hooks.click = this.remove.bind(this), Object(c.b)(this.el.querySelector(".js-c-cookie-close-btn"), "click", this._hooks.click)
        },
        _unbindListeners: function() {
            null !== this._hooks && (Object(c.P)(this.el.querySelector(".js-c-cookie-close-btn"), "click", this._hooks.click), this._hooks = null)
        },
        _init: function() {
            if (Object(c.r)("cnd_cookie_dialog_closed")) return void this.remove();
            this.incrementCounter() && (this._bindListeners(), this.show())
        },
        constructor: s,
        hide: function() {
            this.isHidden || (this.isHidden = !0, Object(c.a)(this.el, "is-hidden"), this.emit("visibilitychange", i(this, "hidden")))
        },
        show: function() {
            this.isHidden && (this.isHidden = !1, Object(c.N)(this.el, "is-hidden"), this.emit("visibilitychange", i(this, "visible")))
        },
        remove: function() {
            Object(c.n)("cnd_cookie_dialog_count"), Object(c.Q)("cnd_cookie_dialog_closed", !0, 365), this.hide(), this._unbindListeners(), this.emit("remove", r(this)), this.removeAllListeners(), Object(c.O)(this.el), this.el = null
        },
        incrementCounter: function() {
            var t = Object(c.r)("cnd_cookie_dialog_count");
            if (null === t) Object(c.Q)("cnd_cookie_dialog_count", 1, 365);
            else if (t = parseInt(t, 10), isNaN(t)) Object(c.Q)("cnd_cookie_dialog_count", 1, 365);
            else {
                if (3 === ++t) return this.emit("limitexceeded", o(this)), Object(c.n)("cnd_cookie_dialog_count"), Object(c.Q)("cnd_cookie_dialog_closed", !0, 365), this.remove(), !1;
                Object(c.Q)("cnd_cookie_dialog_count", t, 365)
            }
            return !0
        }
    });
    var u;
    null !== document.getElementById("domCookieWarning") && (u = new s(document.getElementById("domCookieWarning")));
    e.a = u
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        this._btns = h(t.querySelectorAll(".c-top-stories__nav button")), this._elScroll = t.querySelector(".c-top-stories__overflow"), this._scroller = null, this.el = t, this._scrollOffset = e.scrollOffset || 0, Object(L.w)(t, ".n-menu__top-stories") || (Object(L.a)(t, "has-no-scroll"), Object(L.a)(t, "has-navigation")), Object(L.b)(this._elScroll, "scroll", Object(L.R)(d.bind(this), W)), this._btns.length > 0 && (Object(L.b)(this._btns[0], "click", this.previousItems.bind(this)), Object(L.b)(this._btns[1], "click", this.nextItems.bind(this)))
    }

    function r(t) {
        t.hasAttribute("disabled") || (t.setAttribute("disabled", !0), Object(L.a)(t, "btn-disabled"))
    }

    function o(t) {
        t.hasAttribute("disabled") && (t.removeAttribute("disabled"), Object(L.N)(t, "btn-disabled"))
    }

    function s(t) {
        return h(t.querySelectorAll(".js-c-card-list__item"))
    }

    function a(t) {
        return t.scrollLeft === t.scrollWidth - t.offsetWidth
    }

    function l(t) {
        return 0 === t.scrollLeft
    }

    function c() {
        this._scroller.destroy(), this._scroller = null, f(this._elScroll, this._btns)
    }

    function u(t) {
        return function(e) {
            return {
                bottom: e.bottom - t.top,
                height: e.height,
                left: e.left - t.left,
                right: e.right - t.left,
                top: e.top - t.top,
                width: e.width
            }
        }
    }

    function d() {
        window.innerWidth > 1024 && f(this._elScroll, this._btns)
    }

    function h(t) {
        for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
        return n
    }

    function f(t, e) {
        l(t) ? (r(e[0]), o(e[1])) : a(t) ? (o(e[0]), r(e[1])) : (o(e[0]), o(e[1]))
    }

    function p() {
        Object(L.H)("http://code.onion.com/fartscroll.js").then(function() {
            window.fartscroll()
        })
    }

    function b() {
        var t = _("style", {
            type: "text/css"
        });
        t.styleSheet ? t.styleSheet.cssText = et : t.appendChild(document.createTextNode(et)), document.head.appendChild(t)
    }

    function g() {
        return _("img", {
            id: Q,
            src: "../static/img/raptor.png",
            style: "position: fixed; bottom: -500px; right: 0%; z-index: 10"
        })
    }

    function m() {
        var t = _("audio", {
                id: Z,
                preload: "auto"
            }),
            e = _("source", {
                src: "../static/sounds/raptor-sound.mp3"
            }),
            n = _("source", {
                src: "../static/sounds/raptor-sound.ogg"
            });
        return t.appendChild(e), t.appendChild(n), t
    }

    function _(t, e) {
        var n = document.createElement(t);
        if (void 0 === e) return n;
        for (var i in e) e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
        return n
    }

    function v() {
        k(), S(), rt.length = 0, tt.length = 0
    }

    function y() {
        A(), window.addEventListener("keydown", w), it = !0
    }

    function w(t) {
        if (t.keyCode === rt[0]) {
            if (rt.shift(), rt.length > 0) return;
            k(), E()
        } else {
            if (rt.length === tt.length) return;
            A()
        }
    }

    function E() {
        b();
        var t = m(),
            e = g();
        nt = !0, document.body.appendChild(t), document.body.appendChild(e);
        e.offsetWidth;
        e.className = "do-the-raptor", x(function() {
            t.play()
        }), t = null, e = null, setTimeout(v, 6e3)
    }

    function O(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }

    function S() {
        nt && (O(document.getElementById(Z)), O(document.getElementById(Q)))
    }

    function k() {
        it && window.removeEventListener("keydown", w)
    }

    function A() {
        rt = tt.slice(0)
    }

    function x(t, e) {
        var n = e || function() {};
        try {
            t()
        } catch (t) {
            n(t)
        }
    }

    function j() {
        this.blur()
    }

    function T(t) {
        for (var e = t.get("sizes"), n = e.length; n--;)
            if (K.c.getAdTypeBySize(e[n][0], e[n][1]) === K.c.AD_SIZES.NATIVE && "promotion-small" === t.get("position")) return !0;
        return !1
    }

    function C(t) {
        T(t.ad) && (t.ad.once("render", I), t.ad.once("stop", N))
    }

    function I(t) {
        t.target.off("stop", N);
        var e = Object(L.w)(t.target.el, ".c-card-list__item--ad");
        Object(L.N)(e, at)
    }

    function N(t) {
        t.target.off("render", I)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var z = n(10),
        L = n(0),
        P = n(3),
        D = (n(13), n(25), n(9)),
        R = n(30),
        M = n.n(R),
        H = M.a;
    if (!M.a.enabled) {
        var G = {};
        H = {
            clear: function() {
                G = {}
            },
            forEach: function(t) {
                for (var e in G) G.hasOwnProperty(e) && t(e, this.get(e))
            },
            get: function(t, e) {
                var n = M.a.deserialize(G[t]);
                return void 0 === n ? e : n
            },
            getAll: function() {
                var t = {};
                for (var e in G) G.hasOwnProperty(e) && (t[e] = M.a.deserialize(G[e]));
                return t
            },
            remove: function(t) {
                G[t] = null, delete G[t]
            },
            set: function(t, e) {
                return void 0 === e ? this.remove(t) : (G[t] = M.a.serialize(e), e)
            }
        }
    }
    var B = H,
        q = n(14),
        U = n(17),
        F = n(15),
        W = 300,
        V = [],
        Y = {
            init: function(t) {
                for (var e = document.querySelectorAll(".c-top-stories"), n = e.length; n--;) V.push(new i(e[n], t || {}));
                U.a.init()
            }
        };
    i.prototype = {
        constructor: i,
        nextItems: function() {
            var t = Object(L.q)(this._elScroll),
                e = (this._elScroll.scrollLeft, s(this._elScroll)),
                n = e.map(L.q);
            n = n.map(u(t));
            for (var i = -1, r = -1, o = n.length; ++r < o;)
                if (n[r].right > t.width) {
                    i = r;
                    break
                } - 1 !== i && this.scrollTo(n[i].left + (window.innerWidth > t.width ? 0 : -this._scrollOffset))
        },
        previousItems: function() {
            var t = Object(L.q)(this._elScroll),
                e = (this._elScroll.scrollLeft, s(this._elScroll)),
                n = e.map(L.q);
            n = n.map(u(t));
            for (var i = -1, r = n.length; r--;)
                if (n[r].left < 0) {
                    i = r;
                    break
                } - 1 !== i && this.scrollTo(-t.width + n[i].right + (window.innerWidth > t.width ? 0 : this._scrollOffset))
        },
        scrollTo: function(t) {
            null !== this._scroller && (this._scroller.destroy(), this._scroller = null);
            var e = Object(L.g)(0, this._elScroll.scrollWidth - this._elScroll.offsetWidth, this._elScroll.scrollLeft + t);
            e -= this._elScroll.scrollLeft, this._scroller = new F.a(this._elScroll), this._scroller.on("complete", c.bind(this)), this._scroller.on("stop", c.bind(this)), this._scroller.start({
                x: e,
                y: 0
            }, 1e3, {
                stopOnUserInput: !1
            })
        }
    };
    var J = n(20),
        K = n(4),
        X = n(45),
        $ = n.n(X),
        Z = "elRaptorShriek",
        Q = "imgRaptor",
        tt = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        et = "@-webkit-keyframes raptor{0%{bottom:-500px;}70%{bottom:0;right:0%;}100%{bottom:0;right:110%;}}@keyframes raptor{0%{bottom:-500px;}70%{bottom:0;right:0%;}100%{bottom:0;right:110%;}}.do-the-raptor{-webkit-animation-duration:3s;-ms-animation-duration:3s;-moz-animation-duration:3s;-o-animation-duration:3s;animation-duration:3s;-webkit-animation-name:raptor;-ms-animation-name:raptor;-moz-animation-name:raptor;-o-animation-name:raptor;animation-name:raptor;}",
        nt = !1,
        it = !1,
        rt = null,
        ot = y,
        st = n(6),
        at = "is-hidden";
    K.b.on("register", C), $.a.polyfill(), "MSIE" === P.a.name && P.a.version >= 10 && Object(L.a)(document.getElementsByTagName("html")[0], "is-ie" + P.a.version), P.c && Object(L.a)(document.body, "has-touch"), K.c.setAdUrls({
        OPEN_X_URL: null,
        RUBICON_URL: "//ads.rubiconproject.com/header/11644.js",
        TEAD_URL: "//cdn.teads.tv/js/all-v2.js"
    }), D.a.init(), Y.init({
        scrollOffset: 30
    }), J.a.init(), Object(st.a)(), Object(st.c)(), ot();
    for (var lt = document.getElementsByTagName("button"), ct = 0; ct < lt.length; ct++) Object(L.b)(lt[ct], "touchend", j), Object(L.b)(lt[ct], "mouseup", j);
    window[Object(L.u)(z.a.abbr)] = {
        AdDebugger: K.a,
        AdManager: K.b,
        GATracker: q.a,
        Store: B
    };
    var ut = document.querySelector(".c-footer__list-item--logo svg");
    if (ut) {
        var dt = 0;
        Object(L.b)(ut, "click", function t() {
            ++dt >= 5 && (p(), Object(L.P)(ut, "click", t), ut = null, dt = 0)
        })
    }
}, function(t, e) {
    ! function(e, n) {
        var i = function(t, e) {
            "use strict";
            if (e.getElementsByClassName) {
                var n, i = e.documentElement,
                    r = t.HTMLPictureElement && "sizes" in e.createElement("img"),
                    o = t.addEventListener,
                    s = t.setTimeout,
                    a = t.requestAnimationFrame || s,
                    l = /^picture$/i,
                    c = ["load", "error", "lazyincluded", "_lazyloaded"],
                    u = {},
                    d = Array.prototype.forEach,
                    h = function(t, e) {
                        return u[e] || (u[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), u[e].test(t.getAttribute("class") || "") && u[e]
                    },
                    f = function(t, e) {
                        h(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
                    },
                    p = function(t, e) {
                        var n;
                        (n = h(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(n, " "))
                    },
                    b = function(t, e, n) {
                        var i = n ? "addEventListener" : "removeEventListener";
                        n && b(t, e), c.forEach(function(n) {
                            t[i](n, e)
                        })
                    },
                    g = function(t, n, i, r, o) {
                        var s = e.createEvent("CustomEvent");
                        return s.initCustomEvent(n, !r, !o, i || {}), t.dispatchEvent(s), s
                    },
                    m = function(e, i) {
                        var o;
                        !r && (o = t.picturefill || n.pf) ? o({
                            reevaluate: !0,
                            elements: [e]
                        }) : i && i.src && (e.src = i.src)
                    },
                    _ = function(t, e) {
                        return (getComputedStyle(t, null) || {})[e]
                    },
                    v = function(t, e, i) {
                        for (i = i || t.offsetWidth; i < n.minSize && e && !t._lazysizesWidth;) i = e.offsetWidth, e = e.parentNode;
                        return i
                    },
                    y = function(e) {
                        var n, i = 0,
                            r = t.Date,
                            o = function() {
                                n = !1, i = r.now(), e()
                            },
                            l = function() {
                                s(o)
                            },
                            c = function() {
                                a(l)
                            };
                        return function() {
                            if (!n) {
                                var t = 125 - (r.now() - i);
                                n = !0, t < 6 && (t = 6), s(c, t)
                            }
                        }
                    },
                    w = function() {
                        var r, c, u, v, w, O, S, k, A, x, j, T, C, I, N, z = /^img$/i,
                            L = /^iframe$/i,
                            P = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                            D = 0,
                            R = 0,
                            M = 0,
                            H = function(t) {
                                R--, t && t.target && b(t.target, H), (!t || R < 0 || !t.target) && (R = 0)
                            },
                            G = function(t, n) {
                                var r, o = t,
                                    s = "hidden" == _(e.body, "visibility") || "hidden" != _(t, "visibility");
                                for (A -= n, T += n, x -= n, j += n; s && (o = o.offsetParent) && o != e.body && o != i;)(s = (_(o, "opacity") || 1) > 0) && "visible" != _(o, "overflow") && (r = o.getBoundingClientRect(), s = j > r.left && x < r.right && T > r.top - 1 && A < r.bottom + 1);
                                return s
                            },
                            B = function() {
                                var t, e, o, s, a, l, d, h, f;
                                if ((w = n.loadMode) && R < 8 && (t = r.length)) {
                                    e = 0, M++, null == I && ("expand" in n || (n.expand = i.clientHeight > 600 ? i.clientWidth > 600 ? 550 : 410 : 359), C = n.expand, I = C * n.expFactor), D < I && R < 1 && M > 3 && w > 2 ? (D = I, M = 0) : D = w > 1 && M > 2 && R < 6 ? C : 0;
                                    for (; e < t; e++)
                                        if (r[e] && !r[e]._lazyRace)
                                            if (P)
                                                if ((h = r[e].getAttribute("data-expand")) && (l = 1 * h) || (l = D), f !== l && (S = innerWidth + l * N, k = innerHeight + l, d = -1 * l, f = l), o = r[e].getBoundingClientRect(), (T = o.bottom) >= d && (A = o.top) <= k && (j = o.right) >= d * N && (x = o.left) <= S && (T || j || x || A) && (u && R < 3 && !h && (w < 3 || M < 4) || G(r[e], l))) {
                                                    if (J(r[e]), a = !0, R > 9) break
                                                } else !a && u && !s && R < 4 && M < 4 && w > 2 && (c[0] || n.preloadAfterLoad) && (c[0] || !h && (T || j || x || A || "auto" != r[e].getAttribute(n.sizesAttr))) && (s = c[0] || r[e]);
                                    else J(r[e]);
                                    s && !a && J(s)
                                }
                            },
                            q = y(B),
                            U = function(t) {
                                f(t.target, n.loadedClass), p(t.target, n.loadingClass), b(t.target, F)
                            },
                            F = function(t) {
                                t = {
                                    target: t.target
                                }, a(function() {
                                    U(t)
                                })
                            },
                            W = function(t, e) {
                                try {
                                    t.contentWindow.location.replace(e)
                                } catch (n) {
                                    t.src = e
                                }
                            },
                            V = function(t) {
                                var e, i, r = t.getAttribute(n.srcsetAttr);
                                (e = n.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), r && t.setAttribute("srcset", r), e && (i = t.parentNode, i.insertBefore(t.cloneNode(), t), i.removeChild(t))
                            },
                            Y = function() {
                                var t, e = [],
                                    n = function() {
                                        for (; e.length;) e.shift()();
                                        t = !1
                                    };
                                return {
                                    add: function(i) {
                                        e.push(i), t || (t = !0, a(n))
                                    },
                                    run: n
                                }
                            }(),
                            J = function(t) {
                                var e, i, r, o, c, _, y, w = z.test(t.nodeName),
                                    O = w && (t.getAttribute(n.sizesAttr) || t.getAttribute("sizes")),
                                    S = "auto" == O;
                                (!S && u || !w || !t.src && !t.srcset || t.complete || h(t, n.errorClass)) && (S && (y = t.offsetWidth), t._lazyRace = !0, R++, n.rC && (y = n.rC(t, y) || y), Y.add(function() {
                                    (c = g(t, "lazybeforeunveil")).defaultPrevented || (O && (S ? (E.updateElem(t, !0, y), f(t, n.autosizesClass)) : t.setAttribute("sizes", O)), i = t.getAttribute(n.srcsetAttr), e = t.getAttribute(n.srcAttr), w && (r = t.parentNode, o = r && l.test(r.nodeName || "")), _ = c.detail.firesLoad || "src" in t && (i || e || o), c = {
                                        target: t
                                    }, _ && (b(t, H, !0), clearTimeout(v), v = s(H, 2500), f(t, n.loadingClass), b(t, F, !0)), o && d.call(r.getElementsByTagName("source"), V), i ? t.setAttribute("srcset", i) : e && !o && (L.test(t.nodeName) ? W(t, e) : t.src = e), (i || o) && m(t, {
                                        src: e
                                    })), a(function() {
                                        t._lazyRace && delete t._lazyRace, p(t, n.lazyClass), _ && !t.complete || (_ ? H(c) : R--, U(c))
                                    })
                                }))
                            },
                            K = function() {
                                if (!u) {
                                    if (Date.now() - O < 999) return void s(K, 999);
                                    var t, i = function() {
                                        n.loadMode = 3, q()
                                    };
                                    u = !0, n.loadMode = 3, e.hidden ? (B(), Y.run()) : q(), o("scroll", function() {
                                        3 == n.loadMode && (n.loadMode = 2), clearTimeout(t), t = s(i, 99)
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                O = Date.now(), r = e.getElementsByClassName(n.lazyClass), c = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass), N = n.hFac, o("scroll", q, !0), o("resize", q, !0), t.MutationObserver ? new MutationObserver(q).observe(i, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (i.addEventListener("DOMNodeInserted", q, !0), i.addEventListener("DOMAttrModified", q, !0), setInterval(q, 999)), o("hashchange", q, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                                    e.addEventListener(t, q, !0)
                                }), /d$|^c/.test(e.readyState) ? K() : (o("load", K), e.addEventListener("DOMContentLoaded", q), s(K, 2e4)), q(r.length > 0)
                            },
                            checkElems: q,
                            unveil: J
                        }
                    }(),
                    E = function() {
                        var t, i = function(t, e, n) {
                                var i, r, o, s, a = t.parentNode;
                                if (a && (n = v(t, a, n), s = g(t, "lazybeforesizes", {
                                        width: n,
                                        dataAttr: !!e
                                    }), !s.defaultPrevented && (n = s.detail.width) && n !== t._lazysizesWidth)) {
                                    if (t._lazysizesWidth = n, n += "px", t.setAttribute("sizes", n), l.test(a.nodeName || ""))
                                        for (i = a.getElementsByTagName("source"), r = 0, o = i.length; r < o; r++) i[r].setAttribute("sizes", n);
                                    s.detail.dataAttr || m(t, s.detail)
                                }
                            },
                            r = function() {
                                var e, n = t.length;
                                if (n)
                                    for (e = 0; e < n; e++) i(t[e])
                            },
                            s = y(r);
                        return {
                            _: function() {
                                t = e.getElementsByClassName(n.autosizesClass), o("resize", s)
                            },
                            checkElems: s,
                            updateElem: i
                        }
                    }(),
                    O = function() {
                        O.i || (O.i = !0, E._(), w._())
                    };
                return function() {
                    var e, i = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.7,
                        hFac: .8,
                        loadMode: 2
                    };
                    n = t.lazySizesConfig || t.lazysizesConfig || {};
                    for (e in i) e in n || (n[e] = i[e]);
                    t.lazySizesConfig = n, s(function() {
                        n.init && O()
                    })
                }(), {
                    cfg: n,
                    autoSizer: E,
                    loader: w,
                    init: O,
                    uP: m,
                    aC: f,
                    rC: p,
                    hC: h,
                    fire: g,
                    gW: v
                }
            }
        }(e, e.document);
        e.lazySizes = i, "object" == typeof t && t.exports && (t.exports = i)
    }(window)
}, function(t, e) { /*! lazysizes - v1.5.0 */
    ! function(t, e, n) {
        "use strict";
        var i, r, o = t.lazySizes && lazySizes.cfg || t.lazySizesConfig,
            s = e.createElement("img"),
            a = "sizes" in s && "srcset" in s,
            l = /\s+\d+h/g,
            c = Array.prototype.forEach,
            u = function(t) {
                var e = t.getAttribute(lazySizesConfig.srcsetAttr);
                e && t.setAttribute(lazySizesConfig.srcsetAttr, e.replace(l, ""))
            };
        if (o || (o = {}, t.lazySizesConfig = o), o.supportsType || (o.supportsType = function(t) {
                return !t
            }), !(t.picturefill || t.respimage || o.pf)) {
            if (t.HTMLPictureElement && a) return e.msElementsFromPoint && (r = navigator.userAgent.match(/Edge\/(\d+)/)) && r[1] < 15 && e.addEventListener("lazybeforeunveil", function(t) {
                var e = t.target.parentNode;
                e && c.call(e.getElementsByTagName("source"), u), u(t.target)
            }), void(o.pf = function() {});
            o.pf = function(e) {
                var n, r;
                if (!t.picturefill && !t.respimage)
                    for (n = 0, r = e.elements.length; r > n; n++) i(e.elements[n])
            }, i = function() {
                var n = function(t, e) {
                        return t.w - e.w
                    },
                    r = /^\s*\d+px\s*$/,
                    s = function(t) {
                        var e, n, i = t.length,
                            r = t[i - 1],
                            o = 0;
                        for (o; i > o; o++)
                            if (r = t[o], r.d = r.w / t.w, r.d >= t.d) {
                                !r.cached && (e = t[o - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (n = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * n), e.d + (r.d - t.d) * n > t.d && (r = e));
                                break
                            }
                        return r
                    },
                    c = function() {
                        var t, e = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                            n = /\s/,
                            i = function(e, n, i, r) {
                                t.push({
                                    c: n,
                                    u: i,
                                    w: 1 * r
                                })
                            };
                        return function(r) {
                            return t = [], r = r.trim(), r.replace(l, "").replace(e, i), t.length || !r || n.test(r) || t.push({
                                c: r,
                                u: r,
                                w: 99
                            }), t
                        }
                    }(),
                    u = function() {
                        u.init || (u.init = !0, addEventListener("resize", function() {
                            var t, n = e.getElementsByClassName("lazymatchmedia"),
                                r = function() {
                                    var t, e;
                                    for (t = 0, e = n.length; e > t; t++) i(n[t])
                                };
                            return function() {
                                clearTimeout(t), t = setTimeout(r, 66)
                            }
                        }()))
                    },
                    d = function(e, n) {
                        var i, r = e.getAttribute("srcset") || e.getAttribute(o.srcsetAttr);
                        !r && n && (r = e._lazypolyfill ? e._lazypolyfill._set : e.getAttribute("src") || e.getAttribute(o.srcAttr)), e._lazypolyfill && e._lazypolyfill._set == r || (i = c(r || ""), n && e.parentNode && (i.isPicture = "PICTURE" == e.parentNode.nodeName.toUpperCase(), i.isPicture && (t.matchMedia || t.Modernizr && Modernizr.mq) && (lazySizes.aC(e, "lazymatchmedia"), u())), i._set = r, Object.defineProperty(e, "_lazypolyfill", {
                            value: i,
                            writable: !0
                        }))
                    },
                    h = function(e) {
                        var n = t.devicePixelRatio || 1,
                            i = lazySizes.getX && lazySizes.getX(e);
                        return Math.min(i || n, 2.5, n)
                    },
                    f = function(e) {
                        return t.matchMedia ? (f = function(t) {
                            return !t || (matchMedia(t) || {}).matches
                        })(e) : t.Modernizr && Modernizr.mq ? !e || Modernizr.mq(e) : !e
                    },
                    p = function(t) {
                        var e, i, a, l, c, u, p;
                        if (l = t, d(l, !0), c = l._lazypolyfill, c.isPicture)
                            for (i = 0, e = t.parentNode.getElementsByTagName("source"), a = e.length; a > i; i++)
                                if (o.supportsType(e[i].getAttribute("type"), t) && f(e[i].getAttribute("media"))) {
                                    l = e[i], d(l), c = l._lazypolyfill;
                                    break
                                }
                        return c.length > 1 ? (p = l.getAttribute("sizes") || "", p = r.test(p) && parseInt(p, 10) || lazySizes.gW(t, t.parentNode), c.d = h(t), (!c.w || c.w < p) && (c.w = p, u = s(c.sort(n)))) : u = c[0], u
                    },
                    b = function(t) {
                        if (!a || !t.parentNode || "PICTURE" == t.parentNode.nodeName.toUpperCase()) {
                            var e = p(t);
                            e && e.u && t._lazypolyfill.cur != e.u && (t._lazypolyfill.cur = e.u, e.cached = !0, t.setAttribute(o.srcAttr, e.u), t.setAttribute("src", e.u))
                        }
                    };
                return b.parse = c, b
            }(), o.loadedClass && o.loadingClass && function() {
                var t = [];
                ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(e) {
                    t.push(e + o.loadedClass), t.push(e + o.loadingClass)
                }), o.pf({
                    elements: e.querySelectorAll(t.join(", "))
                })
            }()
        }
    }(window, document),
    function(t) {
        "use strict";
        var e, n = t.createElement("img");
        !("srcset" in n) || "sizes" in n || window.HTMLPictureElement || (e = /^picture$/i, t.addEventListener("lazybeforeunveil", function(n) {
            var i, r, o, s, a, l, c;
            !n.defaultPrevented && !lazySizesConfig.noIOSFix && (i = n.target) && (o = i.getAttribute(lazySizesConfig.srcsetAttr)) && (r = i.parentNode) && ((a = e.test(r.nodeName || "")) || (s = i.getAttribute("sizes") || i.getAttribute(lazySizesConfig.sizesAttr))) && (l = a ? r : t.createElement("picture"), i._lazyImgSrc || Object.defineProperty(i, "_lazyImgSrc", {
                value: t.createElement("source"),
                writable: !0
            }), c = i._lazyImgSrc, s && c.setAttribute("sizes", s), c.setAttribute(lazySizesConfig.srcsetAttr, o), i.setAttribute("data-pfsrcset", o), i.removeAttribute(lazySizesConfig.srcsetAttr), a || (r.insertBefore(l, i), l.appendChild(i)), l.insertBefore(c, i))
        }))
    }(document)
}, function(t, e, n) {
    var i = n(31),
        r = n(32),
        o = [n(39)];
    t.exports = i.createStore(r, o)
}, function(t, e, n) {
    function i() {
        var t = "undefined" == typeof console ? null : console;
        if (t) {
            (t.warn ? t.warn : t.log).apply(t, arguments)
        }
    }

    function r(t, e, n) {
        n || (n = ""), t && !d(t) && (t = [t]), e && !d(e) && (e = [e]);
        var r = n ? "__storejs_" + n + "_" : "",
            o = n ? new RegExp("^" + r) : null;
        if (!/^[a-zA-Z0-9_\-]*$/.test(n)) throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
        var b = {
                _namespacePrefix: r,
                _namespaceRegexp: o,
                _testStorage: function(t) {
                    try {
                        var e = "__storejs__test__";
                        t.write(e, e);
                        var n = t.read(e) === e;
                        return t.remove(e), n
                    } catch (t) {
                        return !1
                    }
                },
                _assignPluginFnProp: function(t, e) {
                    var n = this[e];
                    this[e] = function() {
                        function e() {
                            if (n) return l(arguments, function(t, e) {
                                i[e] = t
                            }), n.apply(r, i)
                        }
                        var i = s(arguments, 0),
                            r = this,
                            o = [e].concat(i);
                        return t.apply(r, o)
                    }
                },
                _serialize: function(t) {
                    return JSON.stringify(t)
                },
                _deserialize: function(t, e) {
                    if (!t) return e;
                    var n = "";
                    try {
                        n = JSON.parse(t)
                    } catch (e) {
                        n = t
                    }
                    return void 0 !== n ? n : e
                },
                _addStorage: function(t) {
                    this.enabled || this._testStorage(t) && (this.storage = t, this.enabled = !0)
                },
                _addPlugin: function(t) {
                    var e = this;
                    if (d(t)) return void l(t, function(t) {
                        e._addPlugin(t)
                    });
                    if (!a(this.plugins, function(e) {
                            return t === e
                        })) {
                        if (this.plugins.push(t), !h(t)) throw new Error("Plugins must be function values that return objects");
                        var n = t.call(this);
                        if (!f(n)) throw new Error("Plugins must return an object of function properties");
                        l(n, function(n, i) {
                            if (!h(n)) throw new Error("Bad plugin property: " + i + " from plugin " + t.name + ". Plugins should only return functions.");
                            e._assignPluginFnProp(n, i)
                        })
                    }
                },
                addStorage: function(t) {
                    i("store.addStorage(storage) is deprecated. Use createStore([storages])"), this._addStorage(t)
                }
            },
            g = u(b, p, {
                plugins: []
            });
        return g.raw = {}, l(g, function(t, e) {
            h(t) && (g.raw[e] = c(g, t))
        }), l(t, function(t) {
            g._addStorage(t)
        }), l(e, function(t) {
            g._addPlugin(t)
        }), g
    }
    var o = n(12),
        s = o.slice,
        a = o.pluck,
        l = o.each,
        c = o.bind,
        u = o.create,
        d = o.isList,
        h = o.isFunction,
        f = o.isObject;
    t.exports = {
        createStore: r
    };
    var p = {
        version: "2.0.12",
        enabled: !1,
        get: function(t, e) {
            var n = this.storage.read(this._namespacePrefix + t);
            return this._deserialize(n, e)
        },
        set: function(t, e) {
            return void 0 === e ? this.remove(t) : (this.storage.write(this._namespacePrefix + t, this._serialize(e)), e)
        },
        remove: function(t) {
            this.storage.remove(this._namespacePrefix + t)
        },
        each: function(t) {
            var e = this;
            this.storage.each(function(n, i) {
                t.call(e, e._deserialize(n), (i || "").replace(e._namespaceRegexp, ""))
            })
        },
        clearAll: function() {
            this.storage.clearAll()
        },
        hasNamespace: function(t) {
            return this._namespacePrefix == "__storejs_" + t + "_"
        },
        createStore: function() {
            return r.apply(this, arguments)
        },
        addPlugin: function(t) {
            this._addPlugin(t)
        },
        namespace: function(t) {
            return r(this.storage, this.plugins, t)
        }
    }
}, function(t, e, n) {
    t.exports = [n(33), n(34), n(35), n(36), n(37), n(38)]
}, function(t, e, n) {
    function i() {
        return u.localStorage
    }

    function r(t) {
        return i().getItem(t)
    }

    function o(t, e) {
        return i().setItem(t, e)
    }

    function s(t) {
        for (var e = i().length - 1; e >= 0; e--) {
            var n = i().key(e);
            t(r(n), n)
        }
    }

    function a(t) {
        return i().removeItem(t)
    }

    function l() {
        return i().clear()
    }
    var c = n(12),
        u = c.Global;
    t.exports = {
        name: "localStorage",
        read: r,
        write: o,
        each: s,
        remove: a,
        clearAll: l
    }
}, function(t, e, n) {
    function i(t) {
        return u[t]
    }

    function r(t, e) {
        u[t] = e
    }

    function o(t) {
        for (var e = u.length - 1; e >= 0; e--) {
            var n = u.key(e);
            t(u[n], n)
        }
    }

    function s(t) {
        return u.removeItem(t)
    }

    function a() {
        o(function(t, e) {
            delete u[t]
        })
    }
    var l = n(12),
        c = l.Global;
    t.exports = {
        name: "oldFF-globalStorage",
        read: i,
        write: r,
        each: o,
        remove: s,
        clearAll: a
    };
    var u = c.globalStorage
}, function(t, e, n) {
    function i(t, e) {
        if (!p) {
            var n = l(t);
            f(function(t) {
                t.setAttribute(n, e), t.save(d)
            })
        }
    }

    function r(t) {
        if (!p) {
            var e = l(t),
                n = null;
            return f(function(t) {
                n = t.getAttribute(e)
            }), n
        }
    }

    function o(t) {
        f(function(e) {
            for (var n = e.XMLDocument.documentElement.attributes, i = n.length - 1; i >= 0; i--) {
                var r = n[i];
                t(e.getAttribute(r.name), r.name)
            }
        })
    }

    function s(t) {
        var e = l(t);
        f(function(t) {
            t.removeAttribute(e), t.save(d)
        })
    }

    function a() {
        f(function(t) {
            var e = t.XMLDocument.documentElement.attributes;
            t.load(d);
            for (var n = e.length - 1; n >= 0; n--) t.removeAttribute(e[n].name);
            t.save(d)
        })
    }

    function l(t) {
        return t.replace(/^\d/, "___$&").replace(b, "___")
    }
    var c = n(12),
        u = c.Global;
    t.exports = {
        name: "oldIE-userDataStorage",
        write: i,
        read: r,
        each: o,
        remove: s,
        clearAll: a
    };
    var d = "storejs",
        h = u.document,
        f = function() {
            if (!h || !h.documentElement || !h.documentElement.addBehavior) return null;
            var t, e, n;
            try {
                e = new ActiveXObject("htmlfile"), e.open(), e.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'), e.close(), t = e.w.frames[0].document, n = t.createElement("div")
            } catch (e) {
                n = h.createElement("div"), t = h.body
            }
            return function(e) {
                var i = [].slice.call(arguments, 0);
                i.unshift(n), t.appendChild(n), n.addBehavior("#default#userData"), n.load(d), e.apply(this, i), t.removeChild(n)
            }
        }(),
        p = (u.navigator ? u.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),
        b = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
}, function(t, e, n) {
    function i(t) {
        if (!t || !l(t)) return null;
        var e = "(?:^|.*;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
        return unescape(h.cookie.replace(new RegExp(e), "$1"))
    }

    function r(t) {
        for (var e = h.cookie.split(/; ?/g), n = e.length - 1; n >= 0; n--)
            if (d(e[n])) {
                var i = e[n].split("="),
                    r = unescape(i[0]),
                    o = unescape(i[1]);
                t(o, r)
            }
    }

    function o(t, e) {
        t && (h.cookie = escape(t) + "=" + escape(e) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
    }

    function s(t) {
        t && l(t) && (h.cookie = escape(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
    }

    function a() {
        r(function(t, e) {
            s(e)
        })
    }

    function l(t) {
        return new RegExp("(?:^|;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(h.cookie)
    }
    var c = n(12),
        u = c.Global,
        d = c.trim;
    t.exports = {
        name: "cookieStorage",
        read: i,
        write: o,
        each: r,
        remove: s,
        clearAll: a
    };
    var h = u.document
}, function(t, e, n) {
    function i() {
        return u.sessionStorage
    }

    function r(t) {
        return i().getItem(t)
    }

    function o(t, e) {
        return i().setItem(t, e)
    }

    function s(t) {
        for (var e = i().length - 1; e >= 0; e--) {
            var n = i().key(e);
            t(r(n), n)
        }
    }

    function a(t) {
        return i().removeItem(t)
    }

    function l() {
        return i().clear()
    }
    var c = n(12),
        u = c.Global;
    t.exports = {
        name: "sessionStorage",
        read: r,
        write: o,
        each: s,
        remove: a,
        clearAll: l
    }
}, function(t, e) {
    function n(t) {
        return a[t]
    }

    function i(t, e) {
        a[t] = e
    }

    function r(t) {
        for (var e in a) a.hasOwnProperty(e) && t(a[e], e)
    }

    function o(t) {
        delete a[t]
    }

    function s(t) {
        a = {}
    }
    t.exports = {
        name: "memoryStorage",
        read: n,
        write: i,
        each: r,
        remove: o,
        clearAll: s
    };
    var a = {}
}, function(t, e, n) {
    function i() {
        return n(40), {}
    }
    t.exports = i
}, function(module, exports) {
    "object" != typeof JSON && (JSON = {}),
        function() {
            "use strict";

            function f(t) {
                return t < 10 ? "0" + t : t
            }

            function this_value() {
                return this.valueOf()
            }

            function quote(t) {
                return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }

            function str(t, e) {
                var n, i, r, o, s, a = gap,
                    l = e[t];
                switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                    case "string":
                        return quote(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                            for (o = l.length, n = 0; n < o; n += 1) s[n] = str(n, l) || "null";
                            return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r
                        }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && (i = rep[n], (r = str(i, l)) && s.push(quote(i) + (gap ? ": " : ":") + r));
                        else
                            for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l)) && s.push(quote(i) + (gap ? ": " : ":") + r);
                        return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
                }
            }
            var rx_one = /^[\],:{}\s]*$/,
                rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
            var gap, indent, meta, rep;
            "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, JSON.stringify = function(t, e, n) {
                var i;
                if (gap = "", indent = "", "number" == typeof n)
                    for (i = 0; i < n; i += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": t
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var n, i, r = t[e];
                    if (r && "object" == typeof r)
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                    return reviver.call(t, e, r)
                }
                var j;
                if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }()
}, function(t, e, n) {
    var i = n(18);
    t.exports = function() {
        var t = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<style type="text/css">'), i.b("\n"), i.b("\n" + n), i.b("    html, body {"), i.b("\n" + n), i.b("        height: 100%;"), i.b("\n" + n), i.b("        margin: 0;"), i.b("\n" + n), i.b("        overflow: hidden;"), i.b("\n" + n), i.b("        padding: 0;"), i.b("\n" + n), i.b("        position: relative;"), i.b("\n" + n), i.b("        width: 100%;"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.b("    .responsive-ad__container {"), i.b("\n" + n), i.b("        cursor: pointer;"), i.b("\n" + n), i.b("        height: 100%;"), i.b("\n" + n), i.b("        margin: 0 auto;"), i.b("\n" + n), i.s(i.f("isLegacy", t, e, 1), t, e, 0, 309, 349, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("            max-width: 1520px;"), i.b("\n" + n)
                }), t.pop()), i.b("        overflow: hidden;"), i.b("\n" + n), i.b("        position: relative;"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.b("    .responsive-ad__pixel-tracking {"), i.b("\n" + n), i.b("        height: 1px;"), i.b("\n" + n), i.b("        left: -1px;"), i.b("\n" + n), i.b("        position: absolute;"), i.b("\n" + n), i.b("        top: -1px;"), i.b("\n" + n), i.b("        width: 1px;"), i.b("\n" + n), i.b("        z-index: 0;"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.s(i.f("backgroundImage", t, e, 1), t, e, 0, 620, 1105, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("        .responsive-ad__background {"), i.b("\n" + n), i.s(i.f("colour", t, e, 1), t, e, 0, 681, 739, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b("                background-color: "), i.b(i.v(i.f("colour", t, e, 0))), i.b("\n" + n)
                    }), t.pop()), i.s(i.f("y", t, e, 1), t, e, 0, 769, 829, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b("                background-position: 0 "), i.b(i.v(i.f("y", t, e, 0))), i.b("%;"), i.b("\n" + n)
                    }), t.pop()), i.s(i.f("repeat", t, e, 1), t, e, 0, 859, 915, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b("                background-repeat: repeat;"), i.b("\n" + n)
                    }), t.pop()), i.s(i.f("repeat", t, e, 1), t, e, 1, 0, 0, "") || (i.b("                background-repeat: no-repeat;"), i.b("\n" + n), i.b("                background-size: 100% auto;"), i.b("\n" + n)), i.b("            height: 100%;"), i.b("\n" + n), i.b("        }"), i.b("\n" + n)
                }), t.pop()), i.s(i.f("backgroundImage", t, e, 1), t, e, 1, 0, 0, "") || (i.b("        .responsive-ad__background {"), i.b("\n" + n), i.b("            background-repeat: no-repeat;"), i.b("\n" + n), i.b("            background-size: 100% auto;"), i.b("\n" + n), i.b("            height: 100%;"), i.b("\n" + n), i.b("        }"), i.b("\n" + n)), i.b("\n" + n), i.b("    .responsive-ad__logo {"), i.b("\n" + n), i.b("        opacity: 0;"), i.b("\n" + n), i.b("        filter: alpha(opacity=0);"), i.b("\n" + n), i.b("        position: absolute;"), i.b("\n" + n), i.b("        -webkit-transition: opacity 0.3s ease-in-out,"), i.b("\n" + n), i.b("                            left 0.3s ease-in-out,"), i.b("\n" + n), i.b("                            top 0.3s ease-in-out;"), i.b("\n" + n), i.b("        -moz-transition: opacity 0.3s ease-in-out,"), i.b("\n" + n), i.b("                         left 0.3s ease-in-out,"), i.b("\n" + n), i.b("                         top 0.3s ease-in-out;"), i.b("\n" + n), i.b("        -ms-transition: opacity 0.3s ease-in-out,"), i.b("\n" + n), i.b("                        left 0.3s ease-in-out,"), i.b("\n" + n), i.b("                        top 0.3s ease-in-out;"), i.b("\n" + n), i.b("        -o-transition: opacity 0.3s ease-in-out,"), i.b("\n" + n), i.b("                       left 0.3s ease-in-out,"), i.b("\n" + n), i.b("                       top 0.3s ease-in-out;"), i.b("\n" + n), i.b("        transition: opacity 0.3s ease-in-out,"), i.b("\n" + n), i.b("                    left 0.3s ease-in-out,"), i.b("\n" + n), i.b("                    top 0.3s ease-in-out;"), i.b("\n" + n), i.b("        visibility: hidden;"), i.b("\n" + n), i.b("        z-index: 1;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    .responsive-ad__logo--pause {"), i.b("\n" + n), i.b("        z-index: 10;"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.b("    /**"), i.b("\n" + n), i.b("     * Hello confusion"), i.b("\n" + n), i.b("     *"), i.b("\n" + n), i.b("     * Mobile"), i.b("\n" + n), i.b("     */"), i.b("\n" + n), i.b("    .responsive-ad__logo--mobile.responsive-ad__logo--contracted {"), i.b("\n" + n), i.b("        opacity: 1;"), i.b("\n" + n), i.b("        filter: alpha(opacity=100);"), i.b("\n" + n), i.b("        visibility: visible;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    .is-expanded .responsive-ad__logo--mobile.responsive-ad__logo--contracted {"), i.b("\n" + n), i.b("        opacity: 0;"), i.b("\n" + n), i.b("        filter: alpha(opacity=0);"), i.b("\n" + n), i.b("        visibility: hidden;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    .is-expanded .responsive-ad__logo--mobile.responsive-ad__logo--expanded {"), i.b("\n" + n), i.b("        opacity: 1;"), i.b("\n" + n), i.b("        filter: alpha(opacity=100);"), i.b("\n" + n), i.b("        visibility: visible;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    @media screen and (min-width: 31.25em) {"), i.b("\n" + n), i.b("        .responsive-ad__logo--mobile.responsive-ad__logo--contracted,"), i.b("\n" + n), i.b("        .responsive-ad__logo--mobile.responsive-ad__logo--expanded {"), i.b("\n" + n), i.b("            opacity: 0 !important;"), i.b("\n" + n), i.b("            filter: alpha(opacity=0) !important;"), i.b("\n" + n), i.b("            visibility: hidden !important;"), i.b("\n" + n), i.b("        }"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.b("    /**"), i.b("\n" + n), i.b("     * Desktop"), i.b("\n" + n), i.b("     */"), i.b("\n" + n), i.b("    @media screen and (min-width: 31.25em) {"), i.b("\n" + n), i.b("        .responsive-ad__logo--desktop.responsive-ad__logo--contracted {"), i.b("\n" + n), i.b("            opacity: 1 !important;"), i.b("\n" + n), i.b("            filter: alpha(opacity=100) !important;"), i.b("\n" + n), i.b("            visibility: visible !important;"), i.b("\n" + n), i.b("        }"), i.b("\n" + n), i.b("        .is-expanded .responsive-ad__logo--desktop.responsive-ad__logo--contracted {"), i.b("\n" + n), i.b("            opacity: 0 !important;"), i.b("\n" + n), i.b("            filter: alpha(opacity=0) !important;"), i.b("\n" + n), i.b("            visibility: hidden !important;"), i.b("\n" + n), i.b("        }"), i.b("\n" + n), i.b("        .is-expanded .responsive-ad__logo--desktop.responsive-ad__logo--expanded {"), i.b("\n" + n), i.b("            opacity: 1 !important;"), i.b("\n" + n), i.b("            filter: alpha(opacity=100) !important;"), i.b("\n" + n), i.b("            visibility: visible !important;"), i.b("\n" + n), i.b("        }"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.b("    .responsive-ad__video {"), i.b("\n" + n), i.b("        bottom: 0;"), i.b("\n" + n), i.b("        left: 0;"), i.b("\n" + n), i.b("        opacity: 0;"), i.b("\n" + n), i.b("        filter: alpha(opacity=0);"), i.b("\n" + n), i.b("        position: absolute;"), i.b("\n" + n), i.b("        right: 0;"), i.b("\n" + n), i.b("        top: 0;"), i.b("\n" + n), i.b("        -webkit-transition: opacity 0.3s ease-in-out;"), i.b("\n" + n), i.b("        -moz-transition: opacity 0.3s ease-in-out;"), i.b("\n" + n), i.b("        -ms-transition: opacity 0.3s ease-in-out;"), i.b("\n" + n), i.b("        -o-transition: opacity 0.3s ease-in-out;"), i.b("\n" + n), i.b("        transition: opacity 0.3s ease-in-out;"), i.b("\n" + n), i.b("        visibility: hidden;"), i.b("\n" + n), i.b("        z-index: 2;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    .responsive-ad__video--visible {"), i.b("\n" + n), i.b("        opacity: 1;"), i.b("\n" + n), i.b("        filter: alpha(opacity=100);"), i.b("\n" + n), i.b("        visibility: visible;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    .responsive-ad__video video,"), i.b("\n" + n), i.b("    .responsive-ad__video div {"), i.b("\n" + n), i.b("        width: 100%;"), i.b("\n" + n), i.b("    }"), i.b("\n" + n), i.b("    .responsive-ad__video__overlay {"), i.b("\n" + n), i.b("        bottom: 0;"), i.b("\n" + n), i.b("        left: 0;"), i.b("\n" + n), i.b("        position: absolute;"), i.b("\n" + n), i.b("        right: 0;"), i.b("\n" + n), i.b("        top: 0;"), i.b("\n" + n), i.b("        z-index: 2;"), i.b("\n" + n), i.b("    }"), i.b("\n"), i.b("\n" + n), i.b("</style>"), i.b("\n"), i.b("\n" + n), i.b('<div class="responsive-ad__container">'), i.b("\n"), i.b("\n" + n), i.s(i.f("backgroundImage", t, e, 1), t, e, 0, 4835, 4937, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b('        <div class="responsive-ad__background" style="background-image:url(\''), i.b(i.v(i.f("url", t, e, 0))), i.b("');\"></div>"), i.b("\n" + n)
                }), t.pop()), i.s(i.f("backgroundImage", t, e, 1), t, e, 1, 0, 0, "") || (i.b('        <div class="responsive-ad__background"></div>'), i.b("\n" + n)), i.b("\n" + n), i.s(i.f("logos", t, e, 1), t, e, 0, 5077, 5221, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b('        <img class="responsive-ad__logo '), i.b(i.v(i.f("cls", t, e, 0))), i.b('" data-logo-index="'), i.b(i.v(i.f("index", t, e, 0))), i.b('" data-pausebutton="'), i.b(i.v(i.f("isPauseButton", t, e, 0))), i.b('" src="'), i.b(i.v(i.f("url", t, e, 0))), i.b('" />'), i.b("\n" + n)
                }), t.pop()), i.b("\n" + n), i.s(i.f("hasVideo", t, e, 1), t, e, 0, 5250, 5363, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b('    <div class="responsive-ad__video">'), i.b("\n" + n), i.b('        <div class="responsive-ad__video__overlay"></div>'), i.b("\n" + n), i.b("    </div>"), i.b("\n" + n)
                }), t.pop()), i.b("\n" + n), i.b("</div>"), i.fl()
            },
            partials: {},
            subs: {}
        }, '<style type="text/css">\n\n    html, body {\n        height: 100%;\n        margin: 0;\n        overflow: hidden;\n        padding: 0;\n        position: relative;\n        width: 100%;\n    }\n\n    .responsive-ad__container {\n        cursor: pointer;\n        height: 100%;\n        margin: 0 auto;\n        {{#isLegacy}}\n            max-width: 1520px;\n        {{/isLegacy}}\n        overflow: hidden;\n        position: relative;\n    }\n\n    .responsive-ad__pixel-tracking {\n        height: 1px;\n        left: -1px;\n        position: absolute;\n        top: -1px;\n        width: 1px;\n        z-index: 0;\n    }\n\n    {{#backgroundImage}}\n        .responsive-ad__background {\n            {{#colour}}\n                background-color: {{colour}}\n            {{/colour}}\n            {{#y}}\n                background-position: 0 {{y}}%;\n            {{/y}}\n            {{#repeat}}\n                background-repeat: repeat;\n            {{/repeat}}\n            {{^repeat}}\n                background-repeat: no-repeat;\n                background-size: 100% auto;\n            {{/repeat}}\n            height: 100%;\n        }\n    {{/backgroundImage}}\n    {{^backgroundImage}}\n        .responsive-ad__background {\n            background-repeat: no-repeat;\n            background-size: 100% auto;\n            height: 100%;\n        }\n    {{/backgroundImage}}\n\n    .responsive-ad__logo {\n        opacity: 0;\n        filter: alpha(opacity=0);\n        position: absolute;\n        -webkit-transition: opacity 0.3s ease-in-out,\n                            left 0.3s ease-in-out,\n                            top 0.3s ease-in-out;\n        -moz-transition: opacity 0.3s ease-in-out,\n                         left 0.3s ease-in-out,\n                         top 0.3s ease-in-out;\n        -ms-transition: opacity 0.3s ease-in-out,\n                        left 0.3s ease-in-out,\n                        top 0.3s ease-in-out;\n        -o-transition: opacity 0.3s ease-in-out,\n                       left 0.3s ease-in-out,\n                       top 0.3s ease-in-out;\n        transition: opacity 0.3s ease-in-out,\n                    left 0.3s ease-in-out,\n                    top 0.3s ease-in-out;\n        visibility: hidden;\n        z-index: 1;\n    }\n    .responsive-ad__logo--pause {\n        z-index: 10;\n    }\n\n    /**\n     * Hello confusion\n     *\n     * Mobile\n     */\n    .responsive-ad__logo--mobile.responsive-ad__logo--contracted {\n        opacity: 1;\n        filter: alpha(opacity=100);\n        visibility: visible;\n    }\n    .is-expanded .responsive-ad__logo--mobile.responsive-ad__logo--contracted {\n        opacity: 0;\n        filter: alpha(opacity=0);\n        visibility: hidden;\n    }\n    .is-expanded .responsive-ad__logo--mobile.responsive-ad__logo--expanded {\n        opacity: 1;\n        filter: alpha(opacity=100);\n        visibility: visible;\n    }\n    @media screen and (min-width: 31.25em) {\n        .responsive-ad__logo--mobile.responsive-ad__logo--contracted,\n        .responsive-ad__logo--mobile.responsive-ad__logo--expanded {\n            opacity: 0 !important;\n            filter: alpha(opacity=0) !important;\n            visibility: hidden !important;\n        }\n    }\n\n    /**\n     * Desktop\n     */\n    @media screen and (min-width: 31.25em) {\n        .responsive-ad__logo--desktop.responsive-ad__logo--contracted {\n            opacity: 1 !important;\n            filter: alpha(opacity=100) !important;\n            visibility: visible !important;\n        }\n        .is-expanded .responsive-ad__logo--desktop.responsive-ad__logo--contracted {\n            opacity: 0 !important;\n            filter: alpha(opacity=0) !important;\n            visibility: hidden !important;\n        }\n        .is-expanded .responsive-ad__logo--desktop.responsive-ad__logo--expanded {\n            opacity: 1 !important;\n            filter: alpha(opacity=100) !important;\n            visibility: visible !important;\n        }\n    }\n\n    .responsive-ad__video {\n        bottom: 0;\n        left: 0;\n        opacity: 0;\n        filter: alpha(opacity=0);\n        position: absolute;\n        right: 0;\n        top: 0;\n        -webkit-transition: opacity 0.3s ease-in-out;\n        -moz-transition: opacity 0.3s ease-in-out;\n        -ms-transition: opacity 0.3s ease-in-out;\n        -o-transition: opacity 0.3s ease-in-out;\n        transition: opacity 0.3s ease-in-out;\n        visibility: hidden;\n        z-index: 2;\n    }\n    .responsive-ad__video--visible {\n        opacity: 1;\n        filter: alpha(opacity=100);\n        visibility: visible;\n    }\n    .responsive-ad__video video,\n    .responsive-ad__video div {\n        width: 100%;\n    }\n    .responsive-ad__video__overlay {\n        bottom: 0;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        z-index: 2;\n    }\n\n</style>\n\n<div class="responsive-ad__container">\n\n    {{#backgroundImage}}\n        <div class="responsive-ad__background" style="background-image:url(\'{{ url }}\');"></div>\n    {{/backgroundImage}}\n    {{^backgroundImage}}\n        <div class="responsive-ad__background"></div>\n    {{/backgroundImage}}\n\n    {{#logos}}\n        <img class="responsive-ad__logo {{ cls }}" data-logo-index="{{ index }}" data-pausebutton="{{ isPauseButton }}" src="{{ url }}" />\n    {{/logos}}\n\n    {{#hasVideo}}\n    <div class="responsive-ad__video">\n        <div class="responsive-ad__video__overlay"></div>\n    </div>\n    {{/hasVideo}}\n\n</div>', i);
        return t.render.apply(t, arguments)
    }
}, function(t, e, n) {
    ! function(t) {
        function e(t) {
            "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
        }

        function n(t) {
            return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
        }

        function i(t, e, n) {
            if (e.charAt(n) != t.charAt(0)) return !1;
            for (var i = 1, r = t.length; i < r; i++)
                if (e.charAt(n + i) != t.charAt(i)) return !1;
            return !0
        }

        function r(e, n, i, a) {
            var l = [],
                c = null,
                u = null,
                d = null;
            for (u = i[i.length - 1]; e.length > 0;) {
                if (d = e.shift(), u && "<" == u.tag && !(d.tag in w)) throw new Error("Illegal content in < super tag.");
                if (t.tags[d.tag] <= t.tags.$ || o(d, a)) i.push(d), d.nodes = r(e, d.tag, i, a);
                else {
                    if ("/" == d.tag) {
                        if (0 === i.length) throw new Error("Closing tag without opener: /" + d.n);
                        if (c = i.pop(), d.n != c.n && !s(d.n, c.n, a)) throw new Error("Nesting error: " + c.n + " vs. " + d.n);
                        return c.end = d.i, l
                    }
                    "\n" == d.tag && (d.last = 0 == e.length || "\n" == e[0].tag)
                }
                l.push(d)
            }
            if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
            return l
        }

        function o(t, e) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n].o == t.n) return t.tag = "#", !0
        }

        function s(t, e, n) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i].c == t && n[i].o == e) return !0
        }

        function a(t) {
            var e = [];
            for (var n in t) e.push('"' + c(n) + '": function(c,p,t,i) {' + t[n] + "}");
            return "{ " + e.join(",") + " }"
        }

        function l(t) {
            var e = [];
            for (var n in t.partials) e.push('"' + c(n) + '":{name:"' + c(t.partials[n].name) + '", ' + l(t.partials[n]) + "}");
            return "partials: {" + e.join(",") + "}, subs: " + a(t.subs)
        }

        function c(t) {
            return t.replace(_, "\\\\").replace(b, '\\"').replace(g, "\\n").replace(m, "\\r").replace(v, "\\u2028").replace(y, "\\u2029")
        }

        function u(t) {
            return ~t.indexOf(".") ? "d" : "f"
        }

        function d(t, e) {
            var n = "<" + (e.prefix || ""),
                i = n + t.n + E++;
            return e.partials[i] = {
                name: t.n,
                partials: {}
            }, e.code += 't.b(t.rp("' + c(i) + '",c,p,"' + (t.indent || "") + '"));', i
        }

        function h(t, e) {
            e.code += "t.b(t.t(t." + u(t.n) + '("' + c(t.n) + '",c,p,0)));'
        }

        function f(t) {
            return "t.b(" + t + ");"
        }
        var p = /\S/,
            b = /\"/g,
            g = /\n/g,
            m = /\r/g,
            _ = /\\/g,
            v = /\u2028/,
            y = /\u2029/;
        t.tags = {
            "#": 1,
            "^": 2,
            "<": 3,
            $: 4,
            "/": 5,
            "!": 6,
            ">": 7,
            "=": 8,
            _v: 9,
            "{": 10,
            "&": 11,
            _t: 12
        }, t.scan = function(r, o) {
            function s() {
                f.length > 0 && (b.push({
                    tag: "_t",
                    text: new String(f)
                }), f = "")
            }

            function a() {
                for (var e = !0, n = _; n < b.length; n++)
                    if (!(e = t.tags[b[n].tag] < t.tags._v || "_t" == b[n].tag && null === b[n].text.match(p))) return !1;
                return e
            }

            function l(t, e) {
                if (s(), t && a())
                    for (var n, i = _; i < b.length; i++) b[i].text && ((n = b[i + 1]) && ">" == n.tag && (n.indent = b[i].text.toString()), b.splice(i, 1));
                else e || b.push({
                    tag: "\n"
                });
                g = !1, _ = b.length
            }
            var c = r.length,
                u = 0,
                d = null,
                h = null,
                f = "",
                b = [],
                g = !1,
                m = 0,
                _ = 0,
                v = "{{",
                y = "}}";
            for (o && (o = o.split(" "), v = o[0], y = o[1]), m = 0; m < c; m++) 0 == u ? i(v, r, m) ? (--m, s(), u = 1) : "\n" == r.charAt(m) ? l(g) : f += r.charAt(m) : 1 == u ? (m += v.length - 1, h = t.tags[r.charAt(m + 1)], d = h ? r.charAt(m + 1) : "_v", "=" == d ? (m = function(t, e) {
                var i = "=" + y,
                    r = t.indexOf(i, e),
                    o = n(t.substring(t.indexOf("=", e) + 1, r)).split(" ");
                return v = o[0], y = o[o.length - 1], r + i.length - 1
            }(r, m), u = 0) : (h && m++, u = 2), g = m) : i(y, r, m) ? (b.push({
                tag: d,
                n: n(f),
                otag: v,
                ctag: y,
                i: "/" == d ? g - v.length : m + y.length
            }), f = "", m += y.length - 1, u = 0, "{" == d && ("}}" == y ? m++ : e(b[b.length - 1]))) : f += r.charAt(m);
            return l(g, !0), b
        };
        var w = {
            _t: !0,
            "\n": !0,
            $: !0,
            "/": !0
        };
        t.stringify = function(e, n, i) {
            return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + l(e) + "}"
        };
        var E = 0;
        t.generate = function(e, n, i) {
            E = 0;
            var r = {
                code: "",
                subs: {},
                partials: {}
            };
            return t.walk(e, r), i.asString ? this.stringify(r, n, i) : this.makeTemplate(r, n, i)
        }, t.wrapMain = function(t) {
            return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
        }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
            var i = this.makePartials(t);
            return i.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(i, e, this, n)
        }, t.makePartials = function(t) {
            var e, n = {
                subs: {},
                partials: t.partials,
                name: t.name
            };
            for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
            for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
            return n
        }, t.codegen = {
            "#": function(e, n) {
                n.code += "if(t.s(t." + u(e.n) + '("' + c(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
            },
            "^": function(e, n) {
                n.code += "if(!t.s(t." + u(e.n) + '("' + c(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
            },
            ">": d,
            "<": function(e, n) {
                var i = {
                    partials: {},
                    code: "",
                    subs: {},
                    inPartial: !0
                };
                t.walk(e.nodes, i);
                var r = n.partials[d(e, n)];
                r.subs = i.subs, r.partials = i.partials
            },
            $: function(e, n) {
                var i = {
                    subs: {},
                    code: "",
                    partials: n.partials,
                    prefix: e.n
                };
                t.walk(e.nodes, i), n.subs[e.n] = i.code, n.inPartial || (n.code += 't.sub("' + c(e.n) + '",c,p,i);')
            },
            "\n": function(t, e) {
                e.code += f('"\\n"' + (t.last ? "" : " + i"))
            },
            _v: function(t, e) {
                e.code += "t.b(t.v(t." + u(t.n) + '("' + c(t.n) + '",c,p,0)));'
            },
            _t: function(t, e) {
                e.code += f('"' + c(t.text) + '"')
            },
            "{": h,
            "&": h
        }, t.walk = function(e, n) {
            for (var i, r = 0, o = e.length; r < o; r++)(i = t.codegen[e[r].tag]) && i(e[r], n);
            return n
        }, t.parse = function(t, e, n) {
            return n = n || {}, r(t, "", [], n.sectionTags || [])
        }, t.cache = {}, t.cacheKey = function(t, e) {
            return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
        }, t.compile = function(e, n) {
            n = n || {};
            var i = t.cacheKey(e, n),
                r = this.cache[i];
            if (r) {
                var o = r.partials;
                for (var s in o) delete o[s].instance;
                return r
            }
            return r = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[i] = r
        }
    }(e)
}, function(t, e, n) {
    ! function(t) {
        function e(t, e, n) {
            var i;
            return e && "object" == typeof e && (void 0 !== e[t] ? i = e[t] : n && e.get && "function" == typeof e.get && (i = e.get(t))), i
        }

        function n(t, e, n, i, r, o) {
            function s() {}

            function a() {}
            s.prototype = t, a.prototype = t.subs;
            var l, c = new s;
            c.subs = new a, c.subsText = {}, c.buf = "", i = i || {}, c.stackSubs = i, c.subsText = o;
            for (l in e) i[l] || (i[l] = e[l]);
            for (l in i) c.subs[l] = i[l];
            r = r || {}, c.stackPartials = r;
            for (l in n) r[l] || (r[l] = n[l]);
            for (l in r) c.partials[l] = r[l];
            return c
        }

        function i(t) {
            return String(null === t || void 0 === t ? "" : t)
        }

        function r(t) {
            return t = i(t), u.test(t) ? t.replace(o, "&amp;").replace(s, "&lt;").replace(a, "&gt;").replace(l, "&#39;").replace(c, "&quot;") : t
        }
        t.Template = function(t, e, n, i) {
            t = t || {}, this.r = t.code || this.r, this.c = n, this.options = i || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ""
        }, t.Template.prototype = {
            r: function(t, e, n) {
                return ""
            },
            v: r,
            t: i,
            render: function(t, e, n) {
                return this.ri([t], e || {}, n)
            },
            ri: function(t, e, n) {
                return this.r(t, e, n)
            },
            ep: function(t, e) {
                var i = this.partials[t],
                    r = e[i.name];
                if (i.instance && i.base == r) return i.instance;
                if ("string" == typeof r) {
                    if (!this.c) throw new Error("No compiler available.");
                    r = this.c.compile(r, this.options)
                }
                if (!r) return null;
                if (this.partials[t].base = r, i.subs) {
                    e.stackText || (e.stackText = {});
                    for (key in i.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                    r = n(r, i.subs, i.partials, this.stackSubs, this.stackPartials, e.stackText)
                }
                return this.partials[t].instance = r, r
            },
            rp: function(t, e, n, i) {
                var r = this.ep(t, n);
                return r ? r.ri(e, n, i) : ""
            },
            rs: function(t, e, n) {
                var i = t[t.length - 1];
                if (!d(i)) return void n(t, e, this);
                for (var r = 0; r < i.length; r++) t.push(i[r]), n(t, e, this), t.pop()
            },
            s: function(t, e, n, i, r, o, s) {
                var a;
                return (!d(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, i, r, o, s)), a = !!t, !i && a && e && e.push("object" == typeof t ? t : e[e.length - 1]), a)
            },
            d: function(t, n, i, r) {
                var o, s = t.split("."),
                    a = this.f(s[0], n, i, r),
                    l = this.options.modelGet,
                    c = null;
                if ("." === t && d(n[n.length - 2])) a = n[n.length - 1];
                else
                    for (var u = 1; u < s.length; u++) o = e(s[u], a, l), void 0 !== o ? (c = a, a = o) : a = "";
                return !(r && !a) && (r || "function" != typeof a || (n.push(c), a = this.mv(a, n, i), n.pop()), a)
            },
            f: function(t, n, i, r) {
                for (var o = !1, s = null, a = !1, l = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                    if (s = n[c], void 0 !== (o = e(t, s, l))) {
                        a = !0;
                        break
                    }
                return a ? (r || "function" != typeof o || (o = this.mv(o, n, i)), o) : !r && ""
            },
            ls: function(t, e, n, r, o) {
                var s = this.options.delimiters;
                return this.options.delimiters = o, this.b(this.ct(i(t.call(e, r)), e, n)), this.options.delimiters = s, !1
            },
            ct: function(t, e, n) {
                if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                return this.c.compile(t, this.options).render(e, n)
            },
            b: function(t) {
                this.buf += t
            },
            fl: function() {
                var t = this.buf;
                return this.buf = "", t
            },
            ms: function(t, e, n, i, r, o, s) {
                var a, l = e[e.length - 1],
                    c = t.call(l);
                return "function" == typeof c ? !!i || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, l, n, a.substring(r, o), s)) : c
            },
            mv: function(t, e, n) {
                var r = e[e.length - 1],
                    o = t.call(r);
                return "function" == typeof o ? this.ct(i(o.call(r)), r, n) : o
            },
            sub: function(t, e, n, i) {
                var r = this.subs[t];
                r && (this.activeSub = t, r(e, n, this, i), this.activeSub = !1)
            }
        };
        var o = /&/g,
            s = /</g,
            a = />/g,
            l = /\'/g,
            c = /\"/g,
            u = /[&<>\"\']/,
            d = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
    }(e)
}, function(t, e, n) {
    var i = n(18);
    t.exports = function() {
        var t = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="ad-debug">'), i.b("\n" + n), i.b("    <table>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Element id:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("id", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">DFP:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("dfp", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Creative ID:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("creativeId", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Line item ID:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("lineItemId", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Rendered size:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("renderedSize", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Ad position:</td>'), i.b("\n" + n), i.b("            <td>"), i.b(i.v(i.f("position", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.s(i.f("values", t, e, 1), t, e, 0, 761, 905, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("            <tr>"), i.b("\n" + n), i.b('                <td class="ad-debug__key">Ad key values:</td>'), i.b("\n" + n), i.b("                <td>"), i.b(i.v(i.f("values", t, e, 0))), i.b("</td>"), i.b("\n" + n), i.b("            </tr>"), i.b("\n" + n)
                }), t.pop()), i.b("        <tr>"), i.b("\n" + n), i.b('            <td class="ad-debug__key">Ad sizes:</td>'), i.b("\n" + n), i.b("            <td>"), i.b("\n" + n), i.b('                <ul class="global__list-reset">'), i.b("\n" + n), i.s(i.f("sizes", t, e, 1), t, e, 0, 1082, 1144, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("                        <li>"), i.b(i.v(i.d(".", t, e, 0))), i.b("</li>"), i.b("\n" + n)
                }), t.pop()), i.b("                </ul>"), i.b("\n" + n), i.b("            </td>"), i.b("\n" + n), i.b("        </tr>"), i.b("\n" + n), i.s(i.f("sizeMapping", t, e, 1), t, e, 0, 1237, 1725, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b("            <tr>"), i.b("\n" + n), i.b('                <td class="ad-debug__key">Ad sizeMapping:</td>'), i.b("\n" + n), i.b("                <td>"), i.b("\n" + n), i.s(i.f("values", t, e, 1), t, e, 0, 1372, 1663, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b("                        <strong>"), i.b(i.v(i.f("key", t, e, 0))), i.b("</strong>"), i.b("\n" + n), i.b('                        <ul class="global__list-reset">'), i.b("\n" + n), i.s(i.f("values", t, e, 1), t, e, 0, 1521, 1599, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                            i.b("                                <li>"), i.b(i.v(i.d(".", t, e, 0))), i.b("</li>"), i.b("\n" + n)
                        }), t.pop()), i.b("                        </ul>"), i.b("\n" + n)
                    }), t.pop()), i.b("                </td>"), i.b("\n" + n), i.b("            </tr>"), i.b("\n" + n)
                }), t.pop()), i.b("    </table>"), i.b("\n" + n), i.b("</div>"), i.fl()
            },
            partials: {},
            subs: {}
        }, '<div class="ad-debug">\n    <table>\n        <tr>\n            <td class="ad-debug__key">Element id:</td>\n            <td>{{ id }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">DFP:</td>\n            <td>{{ dfp }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Creative ID:</td>\n            <td>{{ creativeId }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Line item ID:</td>\n            <td>{{ lineItemId }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Rendered size:</td>\n            <td>{{ renderedSize }}</td>\n        </tr>\n        <tr>\n            <td class="ad-debug__key">Ad position:</td>\n            <td>{{ position }}</td>\n        </tr>\n        {{# values }}\n            <tr>\n                <td class="ad-debug__key">Ad key values:</td>\n                <td>{{ values }}</td>\n            </tr>\n        {{/ values }}\n        <tr>\n            <td class="ad-debug__key">Ad sizes:</td>\n            <td>\n                <ul class="global__list-reset">\n                    {{# sizes }}\n                        <li>{{ . }}</li>\n                    {{/ sizes }}\n                </ul>\n            </td>\n        </tr>\n        {{# sizeMapping }}\n            <tr>\n                <td class="ad-debug__key">Ad sizeMapping:</td>\n                <td>\n                    {{# values }}\n                        <strong>{{ key }}</strong>\n                        <ul class="global__list-reset">\n                            {{# values }}\n                                <li>{{ . }}</li>\n                            {{/ values }}\n                        </ul>\n                    {{/ values }}\n                </td>\n            </tr>\n        {{/ sizeMapping }}\n    </table>\n</div>', i);
        return t.render.apply(t, arguments)
    }
}, function(t, e, n) {
    (function(e, i) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   3.3.1
         */
        ! function(e, n) {
            t.exports = n()
        }(0, function() {
            "use strict";

            function t(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }

            function r(t) {
                return "function" == typeof t
            }

            function o(t) {
                W = t
            }

            function s(t) {
                V = t
            }

            function a() {
                return function() {
                    F(c)
                }
            }

            function l() {
                var t = setTimeout;
                return function() {
                    return t(c, 1)
                }
            }

            function c() {
                for (var t = 0; t < U; t += 2) {
                    (0, Z[t])(Z[t + 1]), Z[t] = void 0, Z[t + 1] = void 0
                }
                U = 0
            }

            function u(t, e) {
                var n = arguments,
                    i = this,
                    r = new this.constructor(h);
                void 0 === r[tt] && I(r);
                var o = i._state;
                return o ? function() {
                    var t = n[o - 1];
                    V(function() {
                        return j(o, r, t, i._result)
                    })
                }() : S(i, r, t, e), r
            }

            function d(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var n = new e(h);
                return y(n, t), n
            }

            function h() {}

            function f() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function p() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function b(t) {
                try {
                    return t.then
                } catch (t) {
                    return rt.error = t, rt
                }
            }

            function g(t, e, n, i) {
                try {
                    t.call(e, n, i)
                } catch (t) {
                    return t
                }
            }

            function m(t, e, n) {
                V(function(t) {
                    var i = !1,
                        r = g(n, e, function(n) {
                            i || (i = !0, e !== n ? y(t, n) : E(t, n))
                        }, function(e) {
                            i || (i = !0, O(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !i && r && (i = !0, O(t, r))
                }, t)
            }

            function _(t, e) {
                e._state === nt ? E(t, e._result) : e._state === it ? O(t, e._result) : S(e, void 0, function(e) {
                    return y(t, e)
                }, function(e) {
                    return O(t, e)
                })
            }

            function v(t, e, n) {
                e.constructor === t.constructor && n === u && e.constructor.resolve === d ? _(t, e) : n === rt ? O(t, rt.error) : void 0 === n ? E(t, e) : r(n) ? m(t, e, n) : E(t, e)
            }

            function y(e, n) {
                e === n ? O(e, f()) : t(n) ? v(e, n, b(n)) : E(e, n)
            }

            function w(t) {
                t._onerror && t._onerror(t._result), k(t)
            }

            function E(t, e) {
                t._state === et && (t._result = e, t._state = nt, 0 !== t._subscribers.length && V(k, t))
            }

            function O(t, e) {
                t._state === et && (t._state = it, t._result = e, V(w, t))
            }

            function S(t, e, n, i) {
                var r = t._subscribers,
                    o = r.length;
                t._onerror = null, r[o] = e, r[o + nt] = n, r[o + it] = i, 0 === o && t._state && V(k, t)
            }

            function k(t) {
                var e = t._subscribers,
                    n = t._state;
                if (0 !== e.length) {
                    for (var i = void 0, r = void 0, o = t._result, s = 0; s < e.length; s += 3) i = e[s], r = e[s + n], i ? j(n, i, r, o) : r(o);
                    t._subscribers.length = 0
                }
            }

            function A() {
                this.error = null
            }

            function x(t, e) {
                try {
                    return t(e)
                } catch (t) {
                    return ot.error = t, ot
                }
            }

            function j(t, e, n, i) {
                var o = r(n),
                    s = void 0,
                    a = void 0,
                    l = void 0,
                    c = void 0;
                if (o) {
                    if (s = x(n, i), s === ot ? (c = !0, a = s.error, s = null) : l = !0, e === s) return void O(e, p())
                } else s = i, l = !0;
                e._state !== et || (o && l ? y(e, s) : c ? O(e, a) : t === nt ? E(e, s) : t === it && O(e, s))
            }

            function T(t, e) {
                try {
                    e(function(e) {
                        y(t, e)
                    }, function(e) {
                        O(t, e)
                    })
                } catch (e) {
                    O(t, e)
                }
            }

            function C() {
                return st++
            }

            function I(t) {
                t[tt] = st++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function N(t, e) {
                this._instanceConstructor = t, this.promise = new t(h), this.promise[tt] || I(this.promise), q(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : O(this.promise, z())
            }

            function z() {
                return new Error("Array Methods must be provided an Array")
            }

            function L(t) {
                return new N(this, t).promise
            }

            function P(t) {
                var e = this;
                return new e(q(t) ? function(n, i) {
                    for (var r = t.length, o = 0; o < r; o++) e.resolve(t[o]).then(n, i)
                } : function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }

            function D(t) {
                var e = this,
                    n = new e(h);
                return O(n, t), n
            }

            function R() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function M() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function H(t) {
                this[tt] = C(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && R(), this instanceof H ? T(this, t) : M())
            }

            function G() {
                var t = void 0;
                if (void 0 !== i) t = i;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if ("[object Promise]" === n && !e.cast) return
                }
                t.Promise = H
            }
            var B = void 0;
            B = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var q = B,
                U = 0,
                F = void 0,
                W = void 0,
                V = function(t, e) {
                    Z[U] = t, Z[U + 1] = e, 2 === (U += 2) && (W ? W(c) : Q())
                },
                Y = "undefined" != typeof window ? window : void 0,
                J = Y || {},
                K = J.MutationObserver || J.WebKitMutationObserver,
                X = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                Z = new Array(1e3),
                Q = void 0;
            Q = X ? function() {
                return function() {
                    return e.nextTick(c)
                }
            }() : K ? function() {
                var t = 0,
                    e = new K(c),
                    n = document.createTextNode("");
                return e.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = t = ++t % 2
                    }
            }() : $ ? function() {
                var t = new MessageChannel;
                return t.port1.onmessage = c,
                    function() {
                        return t.port2.postMessage(0)
                    }
            }() : void 0 === Y ? function() {
                try {
                    var t = n(46);
                    return F = t.runOnLoop || t.runOnContext, a()
                } catch (t) {
                    return l()
                }
            }() : l();
            var tt = Math.random().toString(36).substring(16),
                et = void 0,
                nt = 1,
                it = 2,
                rt = new A,
                ot = new A,
                st = 0;
            return N.prototype._enumerate = function() {
                for (var t = this.length, e = this._input, n = 0; this._state === et && n < t; n++) this._eachEntry(e[n], n)
            }, N.prototype._eachEntry = function(t, e) {
                var n = this._instanceConstructor,
                    i = n.resolve;
                if (i === d) {
                    var r = b(t);
                    if (r === u && t._state !== et) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof r) this._remaining--, this._result[e] = t;
                    else if (n === H) {
                        var o = new n(h);
                        v(o, t, r), this._willSettleAt(o, e)
                    } else this._willSettleAt(new n(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(i(t), e)
            }, N.prototype._settledAt = function(t, e, n) {
                var i = this.promise;
                i._state === et && (this._remaining--, t === it ? O(i, n) : this._result[e] = n), 0 === this._remaining && E(i, this._result)
            }, N.prototype._willSettleAt = function(t, e) {
                var n = this;
                S(t, void 0, function(t) {
                    return n._settledAt(nt, e, t)
                }, function(t) {
                    return n._settledAt(it, e, t)
                })
            }, H.all = L, H.race = P, H.resolve = d, H.reject = D, H._setScheduler = o, H._setAsap = s, H._asap = V, H.prototype = {
                constructor: H,
                then: u,
                catch: function(t) {
                    return this.then(null, t)
                }
            }, G(), H.polyfill = G, H.Promise = H, H
        })
    }).call(e, n(24), n(26))
}, function(t, e) {}]);
//# sourceMappingURL=core.min.js.map