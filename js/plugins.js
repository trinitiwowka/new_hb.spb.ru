/* for old browsers */
window.onload = function () {
    var msie = window.navigator.userAgent.indexOf("MSIE ");
    if (msie > 0) ieversion = parseInt(window.navigator.userAgent.substring(msie + 5, window.navigator.userAgent.indexOf(".", msie)));
    else ieversion = 0;
    if (ieversion <= 9 && ieversion >= 3) {
        var newDiv = document.createElement('div');
        newDiv.className = 'bws_reload';
        newDiv.innerHTML = '<div class="cwrp"><h1>Ваш браузер устарел.</h1><p>Сайт не может корректно работать с браузерами не поддерживающими общепринятые Web-стандарты.</p><p>Также, обращаем ваше внимание на то, что большое количество уязвимостей вашего браузера может грозить безопасности вашего компьютера.</p><p>Обновите браузер на один из предложеных ниже и вы получите доступ к последним технологиям, возможно даже увидите на регулярно посещаемых вами сайтах нечто новое и интересное, что немогло ранее быть показано или работать.</p><ul><li class="firefox"><h2>Mozilla Firefox</h2><div>Хороший красочный функциональный браузер на все случаи жизни. Можно легко настроить его под свои представления о программном обеспечении. Имеет огромное количество дополнений, которые можно легко скачать с официального сайта.<ul class="file"><li style="padding-left: 0px;"><noindex><a rel="nofollow" href="http://www.mozilla.org/firefox/">Mozilla Firefox</a></noindex></li></ul></div></li><li class="chrome"><h2>Google Chrome</h2><div>Браузер от монстров web-индустрии Google. Наверное самый минималистичный по внешнему виду. Если вам нужен просто браузер без проблем, однозначно это он.<ul class="file"><li style="padding-left: 0px;"><noindex><a rel="nofollow" href="http://www.google.com/chrome/">Google Chrome</a></noindex></li></ul></div></li><li class="opera"><h2>Opera</h2><div>Не самый популярный браузер, но многие специалисты считают его самым безопасным и самым быстрым. Этот браузер отличный выбор для тех у кого медленный интернет.<ul class="file"><li style="padding-left: 0px;"><noindex><a rel="nofollow" href="http://www.opera.com/">Opera</a></noindex></li></ul></div></li><li class="ie"><h2>Internet Explorer</h2><div>Консервативный браузер от разработчиков операционной системы Windows. Очень медленно развивается но текущая версия однозначно лучше чем предидущая.<ul class="file"><li style="padding-left: 0px;"><noindex><a rel="nofollow" href="http://www.microsoft.com/rus/windows/internet-explorer/">Internet Explorer</a></noindex></li></ul></div></li></ul></div>';
        document.body.innerHTML = '';
        document.body.appendChild(newDiv);
    } else {
        /*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
        !function (a, b) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
                if (!a.document)throw new Error("jQuery requires a window with a document");
                return b(a)
            } : b(a)
        }("undefined" != typeof window ? window : this, function (a, b) {
            var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
                return new n.fn.init(a, b)
            }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
                return b.toUpperCase()
            };
            n.fn = n.prototype = {
                jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
                    return d.call(this)
                }, get: function (a) {
                    return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
                }, pushStack: function (a) {
                    var b = n.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b
                }, each: function (a, b) {
                    return n.each(this, a, b)
                }, map: function (a) {
                    return this.pushStack(n.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                }, slice: function () {
                    return this.pushStack(d.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (a) {
                    var b = this.length, c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: f, sort: c.sort, splice: c.splice
            }, n.extend = n.fn.extend = function () {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                return g
            }, n.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                    throw new Error(a)
                }, noop: function () {
                }, isFunction: function (a) {
                    return "function" === n.type(a)
                }, isArray: Array.isArray, isWindow: function (a) {
                    return null != a && a === a.window
                }, isNumeric: function (a) {
                    return !n.isArray(a) && a - parseFloat(a) >= 0
                }, isPlainObject: function (a) {
                    return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
                }, isEmptyObject: function (a) {
                    var b;
                    for (b in a)return !1;
                    return !0
                }, type: function (a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
                }, globalEval: function (a) {
                    var b, c = eval;
                    a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                }, camelCase: function (a) {
                    return a.replace(p, "ms-").replace(q, r)
                }, nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                }, each: function (a, b, c) {
                    var d, e = 0, f = a.length, g = s(a);
                    if (c) {
                        if (g) {
                            for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                        } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
                    } else if (g) {
                        for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
                    } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
                    return a
                }, trim: function (a) {
                    return null == a ? "" : (a + "").replace(o, "")
                }, makeArray: function (a, b) {
                    var c = b || [];
                    return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
                }, inArray: function (a, b, c) {
                    return null == b ? -1 : g.call(b, a, c)
                }, merge: function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
                    return a.length = e, a
                }, grep: function (a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
                    return e
                }, map: function (a, b, c) {
                    var d, f = 0, g = a.length, h = s(a), i = [];
                    if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
                    return e.apply([], i)
                }, guid: 1, proxy: function (a, b) {
                    var c, e, f;
                    return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                        return a.apply(b || this, e.concat(d.call(arguments)))
                    }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
                }, now: Date.now, support: k
            }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
                h["[object " + b + "]"] = b.toLowerCase()
            });
            function s(a) {
                var b = a.length, c = n.type(a);
                return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
            }

            var t = function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
                    return a === b && (l = !0), 0
                }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
                        for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                        return -1
                    }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
                    ID: new RegExp("^#(" + N + ")"),
                    CLASS: new RegExp("^\\.(" + N + ")"),
                    TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + Q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + L + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
                try {
                    I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
                } catch (eb) {
                    I = {
                        apply: F.length ? function (a, b) {
                            H.apply(a, J.call(b))
                        } : function (a, b) {
                            var c = a.length, d = 0;
                            while (a[c++] = b[d++]);
                            a.length = c - 1
                        }
                    }
                }
                function fb(a, b, d, e) {
                    var f, h, j, k, l, o, r, s, w, x;
                    if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
                    if (1 !== (k = b.nodeType) && 9 !== k)return [];
                    if (p && !e) {
                        if (f = _.exec(a))if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j), !h || !h.parentNode)return d;
                                if (h.id === j)return d.push(h), d
                            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                        } else {
                            if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
                        }
                        if (c.qsa && (!q || !q.test(a))) {
                            if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                                o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                                while (l--)o[l] = s + qb(o[l]);
                                w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                            }
                            if (x)try {
                                return I.apply(d, w.querySelectorAll(x)), d
                            } catch (y) {
                            } finally {
                                r || b.removeAttribute("id")
                            }
                        }
                    }
                    return i(a.replace(R, "$1"), b, d, e)
                }

                function gb() {
                    var a = [];

                    function b(c, e) {
                        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                    }

                    return b
                }

                function hb(a) {
                    return a[u] = !0, a
                }

                function ib(a) {
                    var b = n.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function jb(a, b) {
                    var c = a.split("|"), e = a.length;
                    while (e--)d.attrHandle[c[e]] = b
                }

                function kb(a, b) {
                    var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
                    if (d)return d;
                    if (c)while (c = c.nextSibling)if (c === b)return -1;
                    return a ? 1 : -1
                }

                function lb(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function mb(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function nb(a) {
                    return hb(function (b) {
                        return b = +b, hb(function (c, d) {
                            var e, f = a([], c.length, b), g = f.length;
                            while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function ob(a) {
                    return a && typeof a.getElementsByTagName !== C && a
                }

                c = fb.support = {}, f = fb.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }, m = fb.setDocument = function (a) {
                    var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
                    return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                        m()
                    }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                        m()
                    })), c.attributes = ib(function (a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), c.getElementsByTagName = ib(function (a) {
                        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
                    }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                            return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                        }), c.getById = ib(function (a) {
                        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
                    }), c.getById ? (d.find.ID = function (a, b) {
                        if (typeof b.getElementById !== C && p) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }, d.filter.ID = function (a) {
                        var b = a.replace(cb, db);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete d.find.ID, d.filter.ID = function (a) {
                        var b = a.replace(cb, db);
                        return function (a) {
                            var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                    } : function (a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++])1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                            return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
                        }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
                    }), ib(function (a) {
                        var b = e.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
                    }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b)while (b = b.parentNode)if (b === a)return !0;
                        return !1
                    }, B = b ? function (a, b) {
                        if (a === b)return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
                    } : function (a, b) {
                        if (a === b)return l = !0, 0;
                        var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                        if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                        if (f === g)return kb(a, b);
                        c = a;
                        while (c = c.parentNode)h.unshift(c);
                        c = b;
                        while (c = c.parentNode)i.unshift(c);
                        while (h[d] === i[d])d++;
                        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                    }, e) : n
                }, fb.matches = function (a, b) {
                    return fb(a, null, null, b)
                }, fb.matchesSelector = function (a, b) {
                    if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
                    } catch (e) {
                    }
                    return fb(b, n, null, [a]).length > 0
                }, fb.contains = function (a, b) {
                    return (a.ownerDocument || a) !== n && m(a), t(a, b)
                }, fb.attr = function (a, b) {
                    (a.ownerDocument || a) !== n && m(a);
                    var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                    return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
                }, fb.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, fb.uniqueSort = function (a) {
                    var b, d = [], e = 0, f = 0;
                    if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                        while (b = a[f++])b === a[f] && (e = d.push(f));
                        while (e--)a.splice(d[e], 1)
                    }
                    return k = null, a
                }, e = fb.getText = function (a) {
                    var b, c = "", d = 0, f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent)return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                        } else if (3 === f || 4 === f)return a.nodeValue
                    } else while (b = a[d++])c += e(b);
                    return c
                }, d = fb.selectors = {
                    cacheLength: 50,
                    createPseudo: hb,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        }, CHILD: function (a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                        }, PSEUDO: function (a) {
                            var b, c = !a[6] && a[2];
                            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(cb, db).toLowerCase();
                            return "*" === a ? function () {
                                return !0
                            } : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        }, CLASS: function (a) {
                            var b = y[a + " "];
                            return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                                    return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                                })
                        }, ATTR: function (a, b, c) {
                            return function (d) {
                                var e = fb.attr(d, a);
                                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                            }
                        }, CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                            return 1 === d && 0 === e ? function (a) {
                                return !!a.parentNode
                            } : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            l = b;
                                            while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                        while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [w, n, m];
                                            break
                                        }
                                    } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                                    return m -= e, m === d || m % d === 0 && m / d >= 0
                                }
                            }
                        }, PSEUDO: function (a, b) {
                            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                                var d, f = e(a, b), g = f.length;
                                while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                            }) : function (a) {
                                return e(a, 0, c)
                            }) : e
                        }
                    },
                    pseudos: {
                        not: hb(function (a) {
                            var b = [], c = [], d = h(a.replace(R, "$1"));
                            return d[u] ? hb(function (a, b, c, e) {
                                var f, g = d(a, null, e, []), h = a.length;
                                while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function (a, e, f) {
                                return b[0] = a, d(b, null, f, c), !c.pop()
                            }
                        }), has: hb(function (a) {
                            return function (b) {
                                return fb(a, b).length > 0
                            }
                        }), contains: hb(function (a) {
                            return function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                        }), lang: hb(function (a) {
                            return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                                var c;
                                do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                        }), target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        }, root: function (a) {
                            return a === o
                        }, focus: function (a) {
                            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        }, enabled: function (a) {
                            return a.disabled === !1
                        }, disabled: function (a) {
                            return a.disabled === !0
                        }, checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        }, selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        }, empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                            return !0
                        }, parent: function (a) {
                            return !d.pseudos.empty(a)
                        }, header: function (a) {
                            return Z.test(a.nodeName)
                        }, input: function (a) {
                            return Y.test(a.nodeName)
                        }, button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        }, text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        }, first: nb(function () {
                            return [0]
                        }), last: nb(function (a, b) {
                            return [b - 1]
                        }), eq: nb(function (a, b, c) {
                            return [0 > c ? c + b : c]
                        }), even: nb(function (a, b) {
                            for (var c = 0; b > c; c += 2)a.push(c);
                            return a
                        }), odd: nb(function (a, b) {
                            for (var c = 1; b > c; c += 2)a.push(c);
                            return a
                        }), lt: nb(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                            return a
                        }), gt: nb(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                            return a
                        })
                    }
                }, d.pseudos.nth = d.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
                for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
                function pb() {
                }

                pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
                    var c, e, f, g, h, i, j, k = z[a + " "];
                    if (k)return b ? 0 : k.slice(0);
                    h = a, i = [], j = d.preFilter;
                    while (h) {
                        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                            value: c,
                            type: e[0].replace(R, " ")
                        }), h = h.slice(c.length));
                        for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                            value: c,
                            type: g,
                            matches: e
                        }), h = h.slice(c.length));
                        if (!c)break
                    }
                    return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
                };
                function qb(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
                    return d
                }

                function rb(a, b, c) {
                    var d = b.dir, e = c && "parentNode" === d, f = x++;
                    return b.first ? function (b, c, f) {
                        while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
                    } : function (b, c, g) {
                        var h, i, j = [w, f];
                        if (g) {
                            while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                        } else while (b = b[d])if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))return !0
                        }
                    }
                }

                function sb(a) {
                    return a.length > 1 ? function (b, c, d) {
                        var e = a.length;
                        while (e--)if (!a[e](b, c, d))return !1;
                        return !0
                    } : a[0]
                }

                function tb(a, b, c) {
                    for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
                    return c
                }

                function ub(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                    return g
                }

                function vb(a, b, c, d, e, f) {
                    return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i), d) {
                            j = ub(r, n), d(j, [], h, i), k = j.length;
                            while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                        }
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    j = [], k = r.length;
                                    while (k--)(l = r[k]) && j.push(q[k] = l);
                                    e(null, r = [], j, i)
                                }
                                k = r.length;
                                while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                            }
                        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
                    })
                }

                function wb(a) {
                    for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                        return a === b
                    }, h, !0), l = rb(function (a) {
                        return K.call(b, a) > -1
                    }, h, !0), m = [function (a, c, d) {
                        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                    }]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                            return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                        }
                        m.push(c)
                    }
                    return sb(m)
                }

                function xb(a, b) {
                    var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                        var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                m = 0;
                                while (o = a[m++])if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                                k && (w = v)
                            }
                            c && ((l = !o && l) && p--, f && r.push(l))
                        }
                        if (p += q, c && q !== p) {
                            m = 0;
                            while (o = b[m++])o(r, s, g, h);
                            if (f) {
                                if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
                                s = ub(s)
                            }
                            I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                        }
                        return k && (w = v, j = t), r
                    };
                    return c ? hb(f) : f
                }

                return h = fb.compile = function (a, b) {
                    var c, d = [], e = [], f = A[a + " "];
                    if (!f) {
                        b || (b = g(a)), c = b.length;
                        while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                        f = A(a, xb(e, d)), f.selector = a
                    }
                    return f
                }, i = fb.select = function (a, b, e, f) {
                    var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                    if (e = e || [], 1 === o.length) {
                        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                            if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                            n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                        }
                        i = X.needsContext.test(a) ? 0 : j.length;
                        while (i--) {
                            if (k = j[i], d.relative[l = k.type])break;
                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                                if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
                                break
                            }
                        }
                    }
                    return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
                }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"))
                }), ib(function (a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || jb("type|href|height|width", function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), c.attributes && ib(function (a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || jb("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }), ib(function (a) {
                    return null == a.getAttribute("disabled")
                }) || jb(L, function (a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }), fb
            }(a);
            n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
            var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

            function x(a, b, c) {
                if (n.isFunction(b))return n.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c
                });
                if (b.nodeType)return n.grep(a, function (a) {
                    return a === b !== c
                });
                if ("string" == typeof b) {
                    if (w.test(b))return n.filter(b, a, c);
                    b = n.filter(b, a)
                }
                return n.grep(a, function (a) {
                    return g.call(b, a) >= 0 !== c
                })
            }

            n.filter = function (a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
                    return 1 === a.nodeType
                }))
            }, n.fn.extend({
                find: function (a) {
                    var b, c = this.length, d = [], e = this;
                    if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                        for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
                    }));
                    for (b = 0; c > b; b++)n.find(a, e[b], d);
                    return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
                }, filter: function (a) {
                    return this.pushStack(x(this, a || [], !1))
                }, not: function (a) {
                    return this.pushStack(x(this, a || [], !0))
                }, is: function (a) {
                    return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
                }
            });
            var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
                var c, d;
                if (!a)return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
            A.prototype = n.fn, y = n(l);
            var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
            n.extend({
                dir: function (a, b, c) {
                    var d = [], e = void 0 !== c;
                    while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                        if (e && n(a).is(c))break;
                        d.push(a)
                    }
                    return d
                }, sibling: function (a, b) {
                    for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
                    return c
                }
            }), n.fn.extend({
                has: function (a) {
                    var b = n(a, this), c = b.length;
                    return this.filter(function () {
                        for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
                    })
                }, closest: function (a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                    return this.pushStack(f.length > 1 ? n.unique(f) : f)
                }, index: function (a) {
                    return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (a, b) {
                    return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
                }, addBack: function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            });
            function D(a, b) {
                while ((a = a[b]) && 1 !== a.nodeType);
                return a
            }

            n.each({
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                }, parents: function (a) {
                    return n.dir(a, "parentNode")
                }, parentsUntil: function (a, b, c) {
                    return n.dir(a, "parentNode", c)
                }, next: function (a) {
                    return D(a, "nextSibling")
                }, prev: function (a) {
                    return D(a, "previousSibling")
                }, nextAll: function (a) {
                    return n.dir(a, "nextSibling")
                }, prevAll: function (a) {
                    return n.dir(a, "previousSibling")
                }, nextUntil: function (a, b, c) {
                    return n.dir(a, "nextSibling", c)
                }, prevUntil: function (a, b, c) {
                    return n.dir(a, "previousSibling", c)
                }, siblings: function (a) {
                    return n.sibling((a.parentNode || {}).firstChild, a)
                }, children: function (a) {
                    return n.sibling(a.firstChild)
                }, contents: function (a) {
                    return a.contentDocument || n.merge([], a.childNodes)
                }
            }, function (a, b) {
                n.fn[a] = function (c, d) {
                    var e = n.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
                }
            });
            var E = /\S+/g, F = {};

            function G(a) {
                var b = F[a] = {};
                return n.each(a.match(E) || [], function (a, c) {
                    b[c] = !0
                }), b
            }

            n.Callbacks = function (a) {
                a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
                var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
                    for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                    d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
                }, k = {
                    add: function () {
                        if (h) {
                            var c = h.length;
                            !function g(b) {
                                n.each(b, function (b, c) {
                                    var d = n.type(c);
                                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                                })
                            }(arguments), d ? f = h.length : b && (e = c, j(b))
                        }
                        return this
                    }, remove: function () {
                        return h && n.each(arguments, function (a, b) {
                            var c;
                            while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                        }), this
                    }, has: function (a) {
                        return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                    }, empty: function () {
                        return h = [], f = 0, this
                    }, disable: function () {
                        return h = i = b = void 0, this
                    }, disabled: function () {
                        return !h
                    }, lock: function () {
                        return i = void 0, b || k.disable(), this
                    }, locked: function () {
                        return !i
                    }, fireWith: function (a, b) {
                        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                    }, fire: function () {
                        return k.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!c
                    }
                };
                return k
            }, n.extend({
                Deferred: function (a) {
                    var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                        state: function () {
                            return c
                        }, always: function () {
                            return e.done(arguments).fail(arguments), this
                        }, then: function () {
                            var a = arguments;
                            return n.Deferred(function (c) {
                                n.each(b, function (b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function () {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        }, promise: function (a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    }, e = {};
                    return d.pipe = d.then, n.each(b, function (a, f) {
                        var g = f[2], h = f[3];
                        d[f[1]] = g.add, h && g.add(function () {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                            return e[f[0] + "With"](this === e ? d : this, arguments), this
                        }, e[f[0] + "With"] = g.fireWith
                    }), d.promise(e), a && a.call(e, e), e
                }, when: function (a) {
                    var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                        return function (e) {
                            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    }, i, j, k;
                    if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                    return f || g.resolveWith(k, c), g.promise()
                }
            });
            var H;
            n.fn.ready = function (a) {
                return n.ready.promise().done(a), this
            }, n.extend({
                isReady: !1, readyWait: 1, holdReady: function (a) {
                    a ? n.readyWait++ : n.ready(!0)
                }, ready: function (a) {
                    (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
                }
            });
            function I() {
                l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
            }

            n.ready.promise = function (b) {
                return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
            }, n.ready.promise();
            var J = n.access = function (a, b, c, d, e, f, g) {
                var h = 0, i = a.length, j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c)n.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                        return j.call(n(a), c)
                    })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            };
            n.acceptData = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };
            function K() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = n.expando + Math.random()
            }

            K.uid = 1, K.accepts = n.acceptData, K.prototype = {
                key: function (a) {
                    if (!K.accepts(a))return 0;
                    var b = {}, c = a[this.expando];
                    if (!c) {
                        c = K.uid++;
                        try {
                            b[this.expando] = {value: c}, Object.defineProperties(a, b)
                        } catch (d) {
                            b[this.expando] = c, n.extend(a, b)
                        }
                    }
                    return this.cache[c] || (this.cache[c] = {}), c
                }, set: function (a, b, c) {
                    var d, e = this.key(a), f = this.cache[e];
                    if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
                    return f
                }, get: function (a, b) {
                    var c = this.cache[this.key(a)];
                    return void 0 === b ? c : c[b]
                }, access: function (a, b, c) {
                    var d;
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
                }, remove: function (a, b) {
                    var c, d, e, f = this.key(a), g = this.cache[f];
                    if (void 0 === b)this.cache[f] = {}; else {
                        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                        while (c--)delete g[d[c]]
                    }
                }, hasData: function (a) {
                    return !n.isEmptyObject(this.cache[a[this.expando]] || {})
                }, discard: function (a) {
                    a[this.expando] && delete this.cache[a[this.expando]]
                }
            };
            var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

            function P(a, b, c) {
                var d;
                if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {
                    }
                    M.set(a, b, c)
                } else c = void 0;
                return c
            }

            n.extend({
                hasData: function (a) {
                    return M.hasData(a) || L.hasData(a)
                }, data: function (a, b, c) {
                    return M.access(a, b, c)
                }, removeData: function (a, b) {
                    M.remove(a, b)
                }, _data: function (a, b, c) {
                    return L.access(a, b, c)
                }, _removeData: function (a, b) {
                    L.remove(a, b)
                }
            }), n.fn.extend({
                data: function (a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                            c = g.length;
                            while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                            L.set(f, "hasDataAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function () {
                        M.set(this, a)
                    }) : J(this, function (b) {
                        var c, d = n.camelCase(a);
                        if (f && void 0 === b) {
                            if (c = M.get(f, a), void 0 !== c)return c;
                            if (c = M.get(f, d), void 0 !== c)return c;
                            if (c = P(f, d, void 0), void 0 !== c)return c
                        } else this.each(function () {
                            var c = M.get(this, d);
                            M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                        })
                    }, null, b, arguments.length > 1, null, !0)
                }, removeData: function (a) {
                    return this.each(function () {
                        M.remove(this, a)
                    })
                }
            }), n.extend({
                queue: function (a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
                }, dequeue: function (a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                        n.dequeue(a, b)
                    };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                }, _queueHooks: function (a, b) {
                    var c = b + "queueHooks";
                    return L.get(a, c) || L.access(a, c, {
                            empty: n.Callbacks("once memory").add(function () {
                                L.remove(a, [b + "queue", c])
                            })
                        })
                }
            }), n.fn.extend({
                queue: function (a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                    })
                }, dequeue: function (a) {
                    return this.each(function () {
                        n.dequeue(this, a)
                    })
                }, clearQueue: function (a) {
                    return this.queue(a || "fx", [])
                }, promise: function (a, b) {
                    var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                    "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                    while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b)
                }
            });
            var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            }, T = /^(?:checkbox|radio)$/i;
            !function () {
                var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
                c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
            }();
            var U = "undefined";
            k.focusinBubbles = "onfocusin" in a;
            var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

            function Z() {
                return !0
            }

            function $() {
                return !1
            }

            function _() {
                try {
                    return l.activeElement
                } catch (a) {
                }
            }

            n.event = {
                global: {},
                add: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
                    if (r) {
                        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                            return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(E) || [""], j = b.length;
                        while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                            type: o,
                            origType: q,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && n.expr.match.needsContext.test(e),
                            namespace: p.join(".")
                        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
                    }
                },
                remove: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
                    if (r && (i = r.events)) {
                        b = (b || "").match(E) || [""], j = b.length;
                        while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                            while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                        } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
                    }
                },
                trigger: function (b, c, d, e) {
                    var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                        if (!e && !o.noBubble && !n.isWindow(d)) {
                            for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                            h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                        }
                        f = 0;
                        while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
                    }
                },
                dispatch: function (a) {
                    a = n.event.fix(a);
                    var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
                    if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                        h = n.event.handlers.call(this, a, j), b = 0;
                        while ((f = h[b++]) && !a.isPropagationStopped()) {
                            a.currentTarget = f.elem, c = 0;
                            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                        }
                        return k.postDispatch && k.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function (a, b) {
                    var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                    if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i, handlers: d})
                    }
                    return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (a, b) {
                        var c, d, e, f = b.button;
                        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                    }
                },
                fix: function (a) {
                    if (a[n.expando])return a;
                    var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                    g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
                    while (b--)c = d[b], a[c] = f[c];
                    return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== _() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === _() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (a) {
                            return n.nodeName(a.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                },
                simulate: function (a, b, c, d) {
                    var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
                    d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
                }
            }, n.removeEvent = function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            }, n.Event = function (a, b) {
                return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
            }, n.Event.prototype = {
                isDefaultPrevented: $,
                isPropagationStopped: $,
                isImmediatePropagationStopped: $,
                preventDefault: function () {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
                },
                stopPropagation: function () {
                    var a = this.originalEvent;
                    this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
                }
            }, n.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (a, b) {
                n.event.special[a] = {
                    delegateType: b, bindType: b, handle: function (a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                    }
                }
            }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
                var c = function (a) {
                    n.event.simulate(b, a.target, n.event.fix(a), !0)
                };
                n.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this, e = L.access(d, b);
                        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
                    }, teardown: function () {
                        var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
                    }
                }
            }), n.fn.extend({
                on: function (a, b, c, d, e) {
                    var f, g;
                    if ("object" == typeof a) {
                        "string" != typeof b && (c = c || b, b = void 0);
                        for (g in a)this.on(g, b, c, a[g], e);
                        return this
                    }
                    if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
                    return 1 === e && (f = d, d = function (a) {
                        return n().off(a), f.apply(this, arguments)
                    }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                        n.event.add(this, a, d, c, b)
                    })
                }, one: function (a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                }, off: function (a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == typeof a) {
                        for (e in a)this.off(e, b, a[e]);
                        return this
                    }
                    return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                        n.event.remove(this, a, c, b)
                    })
                }, trigger: function (a, b) {
                    return this.each(function () {
                        n.event.trigger(a, b, this)
                    })
                }, triggerHandler: function (a, b) {
                    var c = this[0];
                    return c ? n.event.trigger(a, b, c, !0) : void 0
                }
            });
            var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
            function jb(a, b) {
                return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }

            function kb(a) {
                return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
            }

            function lb(a) {
                var b = gb.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a
            }

            function mb(a, b) {
                for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
            }

            function nb(a, b) {
                var c, d, e, f, g, h, i, j;
                if (1 === b.nodeType) {
                    if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                        delete g.handle, g.events = {};
                        for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
                    }
                    M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
                }
            }

            function ob(a, b) {
                var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
            }

            function pb(a, b) {
                var c = b.nodeName.toLowerCase();
                "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }

            n.extend({
                clone: function (a, b, c) {
                    var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
                    if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
                    if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
                    return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
                }, buildFragment: function (a, b, c, d) {
                    for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                        while (j--)f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
                    k.textContent = "", m = 0;
                    while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                        j = 0;
                        while (e = f[j++])fb.test(e.type || "") && c.push(e)
                    }
                    return k
                }, cleanData: function (a) {
                    for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                            if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            L.cache[e] && delete L.cache[e]
                        }
                        delete M.cache[c[M.expando]]
                    }
                }
            }), n.fn.extend({
                text: function (a) {
                    return J(this, function (a) {
                        return void 0 === a ? n.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                        })
                    }, null, a, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = jb(this, a);
                            b.appendChild(a)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = jb(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                }, remove: function (a, b) {
                    for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
                    return this
                }, empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
                    return this
                }, clone: function (a, b) {
                    return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                        return n.clone(this, a, b)
                    })
                }, html: function (a) {
                    return J(this, function (a) {
                        var b = this[0] || {}, c = 0, d = this.length;
                        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                        if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(ab, "<$1></$2>");
                            try {
                                for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (e) {
                            }
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                }, replaceWith: function () {
                    var a = arguments[0];
                    return this.domManip(arguments, function (b) {
                        a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
                    }), a && (a.length || a.nodeType) ? this : this.remove()
                }, detach: function (a) {
                    return this.remove(a, !0)
                }, domManip: function (a, b) {
                    a = e.apply([], a);
                    var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
                    if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
                        var d = m.eq(c);
                        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                    });
                    if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                        for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                        if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
                    }
                    return this
                }
            }), n.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                n.fn[a] = function (a) {
                    for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
                    return this.pushStack(d)
                }
            });
            var qb, rb = {};

            function sb(b, c) {
                var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
                return e.detach(), f
            }

            function tb(a) {
                var b = l, c = rb[a];
                return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
            }

            var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
                return a.ownerDocument.defaultView.getComputedStyle(a, null)
            };

            function xb(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
            }

            function yb(a, b) {
                return {
                    get: function () {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }

            !function () {
                var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
                if (f.style) {
                    f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
                    function g() {
                        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                        var g = a.getComputedStyle(f, null);
                        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
                    }

                    a.getComputedStyle && n.extend(k, {
                        pixelPosition: function () {
                            return g(), b
                        }, boxSizingReliable: function () {
                            return null == c && g(), c
                        }, reliableMarginRight: function () {
                            var b, c = f.appendChild(l.createElement("div"));
                            return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
                        }
                    })
                }
            }(), n.swap = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b)g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)a.style[f] = g[f];
                return e
            };
            var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

            function Fb(a, b) {
                if (b in a)return b;
                var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
                while (e--)if (b = Eb[e] + c, b in a)return b;
                return d
            }

            function Gb(a, b, c) {
                var d = Ab.exec(b);
                return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
            }

            function Hb(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
                return g
            }

            function Ib(a, b, c) {
                var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
                if (0 >= e || null == e) {
                    if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
                    d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
                }
                return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
            }

            function Jb(a, b) {
                for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
                for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                return a
            }

            n.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var c = xb(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": "cssFloat"},
                style: function (a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = n.camelCase(b), i = a.style;
                        return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                    }
                },
                css: function (a, b, c, d) {
                    var e, f, g, h = n.camelCase(b);
                    return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
                }
            }), n.each(["height", "width"], function (a, b) {
                n.cssHooks[b] = {
                    get: function (a, c, d) {
                        return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                            return Ib(a, b, d)
                        }) : Ib(a, b, d) : void 0
                    }, set: function (a, c, d) {
                        var e = d && wb(a);
                        return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                    }
                }
            }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
                return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
            }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
                n.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
            }), n.fn.extend({
                css: function (a, b) {
                    return J(this, function (a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (n.isArray(b)) {
                            for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                    }, a, b, arguments.length > 1)
                }, show: function () {
                    return Jb(this, !0)
                }, hide: function () {
                    return Jb(this)
                }, toggle: function (a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        S(this) ? n(this).show() : n(this).hide()
                    })
                }
            });
            function Kb(a, b, c, d, e) {
                return new Kb.prototype.init(a, b, c, d, e)
            }

            n.Tween = Kb, Kb.prototype = {
                constructor: Kb, init: function (a, b, c, d, e, f) {
                    this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
                }, cur: function () {
                    var a = Kb.propHooks[this.prop];
                    return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
                }, run: function (a) {
                    var b, c = Kb.propHooks[this.prop];
                    return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
                }
            }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                    }, set: function (a) {
                        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                    }
                }
            }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            }, n.easing = {
                linear: function (a) {
                    return a
                }, swing: function (a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }
            }, n.fx = Kb.prototype.init, n.fx.step = {};
            var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
                "*": [function (a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };

            function Sb() {
                return setTimeout(function () {
                    Lb = void 0
                }), Lb = n.now()
            }

            function Tb(a, b) {
                var c, d = 0, e = {height: a};
                for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
                return b && (e.opacity = e.width = a), e
            }

            function Ub(a, b, c) {
                for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
            }

            function Vb(a, b, c) {
                var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
                c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                    h.unqueued || i()
                }), h.unqueued++, l.always(function () {
                    l.always(function () {
                        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                    })
                })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
                    o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
                }));
                for (d in b)if (e = b[d], Nb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d])continue;
                        p = !0
                    }
                    m[d] = q && q[d] || n.style(a, d)
                } else j = void 0;
                if (n.isEmptyObject(m))"inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
                    q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                        n(a).hide()
                    }), l.done(function () {
                        var b;
                        L.remove(a, "fxshow");
                        for (b in m)n.style(a, b, m[b])
                    });
                    for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                }
            }

            function Wb(a, b) {
                var c, d, e, f, g;
                for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f)c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
            }

            function Xb(a, b, c) {
                var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
                    delete i.elem
                }), i = function () {
                    if (e)return !1;
                    for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                }, j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {specialEasing: {}}, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Lb || Sb(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function (b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function (b) {
                        var c = 0, d = b ? j.tweens.length : 0;
                        if (e)return this;
                        for (e = !0; d > c; c++)j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }), k = j.props;
                for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
                return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
            }

            n.Animation = n.extend(Xb, {
                tweener: function (a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
                }, prefilter: function (a, b) {
                    b ? Qb.unshift(a) : Qb.push(a)
                }
            }), n.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                }, d
            }, n.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
                }, animate: function (a, b, c, d) {
                    var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                        var b = Xb(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                }, stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                        var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && n.dequeue(this, a)
                    })
                }, finish: function (a) {
                    return a !== !1 && (a = a || "fx"), this.each(function () {
                        var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function (a, b) {
                var c = n.fn[b];
                n.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
                }
            }), n.each({
                slideDown: Tb("show"),
                slideUp: Tb("hide"),
                slideToggle: Tb("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (a, b) {
                n.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), n.timers = [], n.fx.tick = function () {
                var a, b = 0, c = n.timers;
                for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || n.fx.stop(), Lb = void 0
            }, n.fx.timer = function (a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function () {
                Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function () {
                clearInterval(Mb), Mb = null
            }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
                return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d)
                    }
                })
            }, function () {
                var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
                a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
            }();
            var Yb, Zb, $b = n.expr.attrHandle;
            n.fn.extend({
                attr: function (a, b) {
                    return J(this, n.attr, a, b, arguments.length > 1)
                }, removeAttr: function (a) {
                    return this.each(function () {
                        n.removeAttr(this, a)
                    })
                }
            }), n.extend({
                attr: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
                }, removeAttr: function (a, b) {
                    var c, d, e = 0, f = b && b.match(E);
                    if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                }, attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b
                            }
                        }
                    }
                }
            }), Zb = {
                set: function (a, b, c) {
                    return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
                }
            }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = $b[b] || n.find.attr;
                $b[b] = function (a, b, d) {
                    var e, f;
                    return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
                }
            });
            var _b = /^(?:input|select|textarea|button)$/i;
            n.fn.extend({
                prop: function (a, b) {
                    return J(this, n.prop, a, b, arguments.length > 1)
                }, removeProp: function (a) {
                    return this.each(function () {
                        delete this[n.propFix[a] || a]
                    })
                }
            }), n.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
                    var d, e, f, g = a.nodeType;
                    if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                }, propHooks: {
                    tabIndex: {
                        get: function (a) {
                            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                        }
                    }
                }
            }), k.optSelected || (n.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null
                }
            }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                n.propFix[this.toLowerCase()] = this
            });
            var ac = /[\t\r\n\f]/g;
            n.fn.extend({
                addClass: function (a) {
                    var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                    if (n.isFunction(a))return this.each(function (b) {
                        n(this).addClass(a.call(this, b, this.className))
                    });
                    if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
                    return this
                }, removeClass: function (a) {
                    var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                    if (n.isFunction(a))return this.each(function (b) {
                        n(this).removeClass(a.call(this, b, this.className))
                    });
                    if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
                    return this
                }, toggleClass: function (a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                        n(this).toggleClass(a.call(this, c, this.className, b), b)
                    } : function () {
                        if ("string" === c) {
                            var b, d = 0, e = n(this), f = a.match(E) || [];
                            while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                        } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                    })
                }, hasClass: function (a) {
                    for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return !0;
                    return !1
                }
            });
            var bc = /\r/g;
            n.fn.extend({
                val: function (a) {
                    var b, c, d, e = this[0];
                    {
                        if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                        if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
                    }
                }
            }), n.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b = n.find.attr(a, "value");
                            return null != b ? b : n.trim(n.text(a))
                        }
                    }, select: {
                        get: function (a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(), f)return b;
                                g.push(b)
                            }
                            return g
                        }, set: function (a, b) {
                            var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                            while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                            return c || (a.selectedIndex = -1), f
                        }
                    }
                }
            }), n.each(["radio", "checkbox"], function () {
                n.valHooks[this] = {
                    set: function (a, b) {
                        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
                    }
                }, k.checkOn || (n.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }
            }), n.fn.extend({
                hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }, bind: function (a, b, c) {
                    return this.on(a, null, b, c)
                }, unbind: function (a, b) {
                    return this.off(a, null, b)
                }, delegate: function (a, b, c, d) {
                    return this.on(b, a, c, d)
                }, undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
            var cc = n.now(), dc = /\?/;
            n.parseJSON = function (a) {
                return JSON.parse(a + "")
            }, n.parseXML = function (a) {
                var b, c;
                if (!a || "string" != typeof a)return null;
                try {
                    c = new DOMParser, b = c.parseFromString(a, "text/xml")
                } catch (d) {
                    b = void 0
                }
                return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
            };
            var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
            try {
                fc = location.href
            } catch (qc) {
                fc = l.createElement("a"), fc.href = "", fc = fc.href
            }
            ec = mc.exec(fc.toLowerCase()) || [];
            function rc(a) {
                return function (b, c) {
                    "string" != typeof b && (c = b, b = "*");
                    var d, e = 0, f = b.toLowerCase().match(E) || [];
                    if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }

            function sc(a, b, c, d) {
                var e = {}, f = a === oc;

                function g(h) {
                    var i;
                    return e[h] = !0, n.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                    }), i
                }

                return g(b.dataTypes[0]) || !e["*"] && g("*")
            }

            function tc(a, b) {
                var c, d, e = n.ajaxSettings.flatOptions || {};
                for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                return d && n.extend(!0, a, d), a
            }

            function uc(a, b, c) {
                var d, e, f, g, h = a.contents, i = a.dataTypes;
                while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                if (d)for (e in h)if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
                if (i[0] in c)f = i[0]; else {
                    for (e in c) {
                        if (!i[0] || a.converters[e + " " + i[0]]) {
                            f = e;
                            break
                        }
                        g || (g = e)
                    }
                    f = f || g
                }
                return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
            }

            function vc(a, b, c, d) {
                var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
                f = k.shift();
                while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
                    if (g !== !0)if (g && a["throws"])b = g(b); else try {
                        b = g(b)
                    } catch (l) {
                        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                    }
                }
                return {state: "success", data: b}
            }

            n.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: fc,
                    type: "GET",
                    isLocal: jc.test(ec[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": pc,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (a, b) {
                    return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
                },
                ajaxPrefilter: rc(nc),
                ajaxTransport: rc(oc),
                ajax: function (a, b) {
                    "object" == typeof a && (b = a, a = void 0), b = b || {};
                    var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (2 === t) {
                                if (!f) {
                                    f = {};
                                    while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
                                }
                                b = f[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function () {
                            return 2 === t ? e : null
                        },
                        setRequestHeader: function (a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function (a) {
                            return t || (k.mimeType = a), this
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                            return this
                        },
                        abort: function (a) {
                            var b = a || u;
                            return c && c.abort(b), x(0, b), this
                        }
                    };
                    if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
                    i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
                    for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
                    if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
                    u = "abort";
                    for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
                    if (c = sc(oc, k, b, v)) {
                        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                            v.abort("timeout")
                        }, k.timeout));
                        try {
                            t = 1, c.send(r, x)
                        } catch (w) {
                            if (!(2 > t))throw w;
                            x(-1, w)
                        }
                    } else x(-1, "No Transport");
                    function x(a, b, f, h) {
                        var j, r, s, u, w, x = b;
                        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
                    }

                    return v
                },
                getJSON: function (a, b, c) {
                    return n.get(a, b, c, "json")
                },
                getScript: function (a, b) {
                    return n.get(a, void 0, b, "script")
                }
            }), n.each(["get", "post"], function (a, b) {
                n[b] = function (a, c, d, e) {
                    return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    })
                }
            }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a)
                }
            }), n._evalUrl = function (a) {
                return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, n.fn.extend({
                wrapAll: function (a) {
                    var b;
                    return n.isFunction(a) ? this.each(function (b) {
                        n(this).wrapAll(a.call(this, b))
                    }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        var a = this;
                        while (a.firstElementChild)a = a.firstElementChild;
                        return a
                    }).append(this)), this)
                }, wrapInner: function (a) {
                    return this.each(n.isFunction(a) ? function (b) {
                        n(this).wrapInner(a.call(this, b))
                    } : function () {
                        var b = n(this), c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                }, wrap: function (a) {
                    var b = n.isFunction(a);
                    return this.each(function (c) {
                        n(this).wrapAll(b ? a.call(this, c) : a)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), n.expr.filters.hidden = function (a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0
            }, n.expr.filters.visible = function (a) {
                return !n.expr.filters.hidden(a)
            };
            var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

            function Bc(a, b, c, d) {
                var e;
                if (n.isArray(b))n.each(b, function (b, e) {
                    c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
            }

            n.param = function (a, b) {
                var c, d = [], e = function (a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
                if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
                    e(this.name, this.value)
                }); else for (c in a)Bc(c, a[c], b, e);
                return d.join("&").replace(wc, "+")
            }, n.fn.extend({
                serialize: function () {
                    return n.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var a = n.prop(this, "elements");
                        return a ? n.makeArray(a) : this
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
                    }).map(function (a, b) {
                        var c = n(this).val();
                        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                            return {name: b.name, value: a.replace(yc, "\r\n")}
                        }) : {name: b.name, value: c.replace(yc, "\r\n")}
                    }).get()
                }
            }), n.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (a) {
                }
            };
            var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
            a.ActiveXObject && n(a).on("unload", function () {
                for (var a in Dc)Dc[a]()
            }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
                var b;
                return k.cors || Fc && !a.crossDomain ? {
                    send: function (c, d) {
                        var e, f = a.xhr(), g = ++Cc;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c)f.setRequestHeader(e, c[e]);
                        b = function (a) {
                            return function () {
                                b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                            }
                        }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                        try {
                            f.send(a.hasContent && a.data || null)
                        } catch (h) {
                            if (b)throw h
                        }
                    }, abort: function () {
                        b && b()
                    }
                } : void 0
            }), n.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (a) {
                        return n.globalEval(a), a
                    }
                }
            }), n.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
            }), n.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function (d, e) {
                            b = n("<script>").prop({
                                async: !0,
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", c = function (a) {
                                b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                            }), l.head.appendChild(b[0])
                        }, abort: function () {
                            c && c()
                        }
                    }
                }
            });
            var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
            n.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var a = Gc.pop() || n.expando + "_" + cc++;
                    return this[a] = !0, a
                }
            }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                    return g || n.error(e + " was not called"), g[0]
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                    g = arguments
                }, d.always(function () {
                    a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
                }), "script") : void 0
            }), n.parseHTML = function (a, b, c) {
                if (!a || "string" != typeof a)return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || l;
                var d = v.exec(a), e = !c && [];
                return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
            };
            var Ic = n.fn.load;
            n.fn.load = function (a, b, c) {
                if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
                var d, e, f, g = this, h = a.indexOf(" ");
                return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                    url: a,
                    type: e,
                    dataType: "html",
                    data: b
                }).done(function (a) {
                    f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
                }).complete(c && function (a, b) {
                        g.each(c, f || [a.responseText, b, a])
                    }), this
            }, n.expr.filters.animated = function (a) {
                return n.grep(n.timers, function (b) {
                    return a === b.elem
                }).length
            };
            var Jc = a.document.documentElement;

            function Kc(a) {
                return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
            }

            n.offset = {
                setOffset: function (a, b, c) {
                    var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
                    "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
                }
            }, n.fn.extend({
                offset: function (a) {
                    if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                        n.offset.setOffset(this, a, b)
                    });
                    var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
                    if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                        top: e.top + c.pageYOffset - b.clientTop,
                        left: e.left + c.pageXOffset - b.clientLeft
                    }) : e
                }, position: function () {
                    if (this[0]) {
                        var a, b, c = this[0], d = {top: 0, left: 0};
                        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                            top: b.top - d.top - n.css(c, "marginTop", !0),
                            left: b.left - d.left - n.css(c, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        var a = this.offsetParent || Jc;
                        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                        return a || Jc
                    })
                }
            }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
                var d = "pageYOffset" === c;
                n.fn[b] = function (e) {
                    return J(this, function (b, e, f) {
                        var g = Kc(b);
                        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                    }, b, e, arguments.length, null)
                }
            }), n.each(["top", "left"], function (a, b) {
                n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
                    return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
                })
            }), n.each({Height: "height", Width: "width"}, function (a, b) {
                n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                    n.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return J(this, function (b, c, d) {
                            var e;
                            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                        }, b, f ? d : void 0, f, null)
                    }
                })
            }), n.fn.size = function () {
                return this.length
            }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return n
            });
            var Lc = a.jQuery, Mc = a.$;
            return n.noConflict = function (b) {
                return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
            }, typeof b === U && (a.jQuery = a.$ = n), n
        });

        /*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
        jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function (e, t, n) {
            function r(n) {
                var r = t.console;
                i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
            }

            function a(t, a, i, o) {
                if (Object.defineProperty)try {
                    return Object.defineProperty(t, a, {
                        configurable: !0, enumerable: !0, get: function () {
                            return r(o), i
                        }, set: function (e) {
                            r(o), i = e
                        }
                    }), n
                } catch (s) {
                }
                e._definePropertyBroken = !0, t[a] = i
            }

            var i = {};
            e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
                i = {}, e.migrateWarnings.length = 0
            }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
            var o = e("<input/>", {size: 1}).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function () {
                    return null
                }, c = e.attrHooks.value && e.attrHooks.value.set || function () {
                    return n
                }, l = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
            a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, i, u) {
                var c = a.toLowerCase(), g = t && t.nodeType;
                return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                    get: function (t, r) {
                        var a, i = e.prop(t, r);
                        return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                    }, set: function (t, n, r) {
                        var a;
                        return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                    }
                }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
            }, e.attrHooks.value = {
                get: function (e, t) {
                    var n = (e.nodeName || "").toLowerCase();
                    return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
                }, set: function (e, t) {
                    var a = (e.nodeName || "").toLowerCase();
                    return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
                }
            };
            var g, h, v = e.fn.init, m = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
            e.fn.init = function (t, n, a) {
                var i;
                return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
            }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
                return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
            }, e.uaMatch = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
                function t(e, n) {
                    return new t.fn.init(e, n)
                }

                e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (r, a) {
                    return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
                }, t.fn.init.prototype = t.fn;
                var n = t(document);
                return r("jQuery.sub() is deprecated"), t
            }, e.ajaxSetup({converters: {"text json": e.parseJSON}});
            var b = e.fn.data;
            e.fn.data = function (t) {
                var a, i, o = this[0];
                return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
            };
            var j = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack;
            e.fn.andSelf = function () {
                return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
            }, e.clean || (e.clean = function (t, a, i, o) {
                a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
                var s, u, c, l, d = [];
                if (e.merge(d, e.buildFragment(t, a).childNodes), i)for (c = function (e) {
                    return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                }, s = 0; null != (u = d[s]); s++)e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
                return d
            });
            var Q = e.event.add, x = e.event.remove, k = e.event.trigger, N = e.fn.toggle, T = e.fn.live, M = e.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", C = RegExp("\\b(?:" + S + ")\\b"), H = /(?:^|\s)hover(\.\S+|)\b/, A = function (t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
            e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, i) {
                e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
            }, e.event.remove = function (e, t, n, r, a) {
                x.call(this, e, A(t) || "", n, r, a)
            }, e.fn.error = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
            }, e.fn.toggle = function (t, n) {
                if (!e.isFunction(t) || !e.isFunction(n))return N.apply(this, arguments);
                r("jQuery.fn.toggle(handler, handler...) is deprecated");
                var a = arguments, i = t.guid || e.guid++, o = 0, s = function (n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
                for (s.guid = i; a.length > o;)a[o++].guid = i;
                return this.click(s)
            }, e.fn.live = function (t, n, a) {
                return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
            }, e.fn.die = function (t, n) {
                return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
            }, e.event.trigger = function (e, t, n, a) {
                return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
            }, e.each(S.split("|"), function (t, n) {
                e.event.special[n] = {
                    setup: function () {
                        var t = this;
                        return t !== document && (e.event.add(document, n + "." + e.guid, function () {
                            e.event.trigger(n, null, t, !0)
                        }), e._data(this, n, e.guid++)), !1
                    }, teardown: function () {
                        return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                    }
                }
            })
        }(jQuery, window);

        /*! fancyBox - jQuery Plugin | version: 2.1.5 (Fri, 14 Jun 2013) | @requires jQuery v1.6 or later | Examples at http://fancyapps.com/fancybox/ | License: www.fancyapps.com/fancybox/#license | Copyright 2012 Janis Skarnelis - janis@fancyapps.com */
        (function (l, o, i, e) {
            var p = i("html"), d = i(l), a = i(o), q = i.fancybox = function () {
                q.open.apply(this, arguments)
            }, k = navigator.userAgent.match(/msie/i), c = null, f = o.createTouch !== e, j = function (r) {
                return r && r.hasOwnProperty && r instanceof i
            }, b = function (r) {
                return r && i.type(r) === "string"
            }, m = function (r) {
                return b(r) && r.indexOf("%") > 0
            }, h = function (r) {
                return (r && !(r.style.overflow && r.style.overflow === "hidden") && ((r.clientWidth && r.scrollWidth > r.clientWidth) || (r.clientHeight && r.scrollHeight > r.clientHeight)))
            }, n = function (t, s) {
                var r = parseInt(t, 10) || 0;
                if (s && m(t)) {
                    r = q.getViewport()[s] / 100 * r
                }
                return Math.ceil(r)
            }, g = function (r, s) {
                return n(r, s) + "px"
            };
            i.extend(q, {
                version: "2.1.5",
                defaults: {
                    padding: 0,
                    margin: 20,
                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1,
                    autoSize: true,
                    autoHeight: false,
                    autoWidth: false,
                    autoResize: true,
                    autoCenter: !f,
                    fitToView: true,
                    aspectRatio: false,
                    topRatio: 0.5,
                    leftRatio: 0.5,
                    scrolling: "auto",
                    wrapCSS: "",
                    arrows: true,
                    closeBtn: true,
                    closeClick: false,
                    nextClick: false,
                    mouseWheel: true,
                    autoPlay: false,
                    playSpeed: 3000,
                    preload: 3,
                    modal: false,
                    loop: true,
                    ajax: {dataType: "html", headers: {"X-fancyBox": true}},
                    iframe: {scrolling: "auto", preload: true},
                    swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
                    keys: {
                        next: {13: "left", 34: "up", 39: "left", 40: "up"},
                        prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                        close: [27],
                        play: [32],
                        toggle: [70]
                    },
                    direction: {next: "left", prev: "right"},
                    scrollOutside: true,
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (k ? ' allowtransparency="true"' : "") + "></iframe>",
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Вперед" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Назад" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    },
                    openEffect: "fade",
                    openSpeed: 450,
                    openEasing: "swing",
                    openOpacity: true,
                    openMethod: "zoomIn",
                    closeEffect: "fade",
                    closeSpeed: 450,
                    closeEasing: "swing",
                    closeOpacity: true,
                    closeMethod: "zoomOut",
                    nextEffect: "elastic",
                    nextSpeed: 250,
                    nextEasing: "swing",
                    nextMethod: "changeIn",
                    prevEffect: "elastic",
                    prevSpeed: 250,
                    prevEasing: "swing",
                    prevMethod: "changeOut",
                    helpers: {overlay: {locked: false}, title: true},
                    onCancel: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeChange: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop
                },
                group: {},
                opts: {},
                previous: null,
                coming: null,
                current: null,
                isActive: false,
                isOpen: false,
                isOpened: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null,
                player: {timer: null, isActive: false},
                ajaxLoad: null,
                imgPreload: null,
                transitions: {},
                helpers: {},
                open: function (s, r) {
                    if (!s) {
                        return
                    }
                    if (!i.isPlainObject(r)) {
                        r = {}
                    }
                    if (false === q.close(true)) {
                        return
                    }
                    if (!i.isArray(s)) {
                        s = j(s) ? i(s).get() : [s]
                    }
                    i.each(s, function (x, y) {
                        var w = {}, t, B, z, A, v, C, u;
                        if (i.type(y) === "object") {
                            if (y.nodeType) {
                                y = i(y)
                            }
                            if (j(y)) {
                                w = {
                                    href: y.data("fancybox-href") || y.attr("href"),
                                    title: y.data("fancybox-title") || y.attr("title"),
                                    isDom: true,
                                    element: y
                                };
                                if (i.metadata) {
                                    i.extend(true, w, y.metadata())
                                }
                            } else {
                                w = y
                            }
                        }
                        t = r.href || w.href || (b(y) ? y : null);
                        B = r.title !== e ? r.title : w.title || "";
                        z = r.content || w.content;
                        A = z ? "html" : (r.type || w.type);
                        if (!A && w.isDom) {
                            A = y.data("fancybox-type");
                            if (!A) {
                                v = y.prop("class").match(/fancybox\.(\w+)/);
                                A = v ? v[1] : null
                            }
                        }
                        if (b(t)) {
                            if (!A) {
                                if (q.isImage(t)) {
                                    A = "image"
                                } else {
                                    if (q.isSWF(t)) {
                                        A = "swf"
                                    } else {
                                        if (t.charAt(0) === "#") {
                                            A = "inline"
                                        } else {
                                            if (b(y)) {
                                                A = "html";
                                                z = y
                                            }
                                        }
                                    }
                                }
                            }
                            if (A === "ajax") {
                                C = t.split(/\s+/, 2);
                                t = C.shift();
                                u = C.shift()
                            }
                        }
                        if (!z) {
                            if (A === "inline") {
                                if (t) {
                                    z = i(b(t) ? t.replace(/.*(?=#[^\s]+$)/, "") : t)
                                } else {
                                    if (w.isDom) {
                                        z = y
                                    }
                                }
                            } else {
                                if (A === "html") {
                                    z = t
                                } else {
                                    if (!A && !t && w.isDom) {
                                        A = "inline";
                                        z = y
                                    }
                                }
                            }
                        }
                        i.extend(w, {href: t, type: A, content: z, title: B, selector: u});
                        s[x] = w
                    });
                    q.opts = i.extend(true, {}, q.defaults, r);
                    if (r.keys !== e) {
                        q.opts.keys = r.keys ? i.extend({}, q.defaults.keys, r.keys) : false
                    }
                    q.group = s;
                    return q._start(q.opts.index)
                },
                cancel: function () {
                    var r = q.coming;
                    if (!r || false === q.trigger("onCancel")) {
                        return
                    }
                    q.hideLoading();
                    if (q.ajaxLoad) {
                        q.ajaxLoad.abort()
                    }
                    q.ajaxLoad = null;
                    if (q.imgPreload) {
                        q.imgPreload.onload = q.imgPreload.onerror = null
                    }
                    if (r.wrap) {
                        r.wrap.stop(true, true).trigger("onReset").remove()
                    }
                    q.coming = null;
                    if (!q.current) {
                        q._afterZoomOut(r)
                    }
                },
                close: function (r) {
                    q.cancel();
                    if (false === q.trigger("beforeClose")) {
                        return
                    }
                    q.unbindEvents();
                    if (!q.isActive) {
                        return
                    }
                    if (!q.isOpen || r === true) {
                        i(".fancybox-wrap").stop(true).trigger("onReset").remove();
                        q._afterZoomOut()
                    } else {
                        q.isOpen = q.isOpened = false;
                        q.isClosing = true;
                        i(".fancybox-item, .fancybox-nav").remove();
                        q.wrap.stop(true, true).removeClass("fancybox-opened");
                        q.transitions[q.current.closeMethod]()
                    }
                },
                play: function (t) {
                    var r = function () {
                        clearTimeout(q.player.timer)
                    }, v = function () {
                        r();
                        if (q.current && q.player.isActive) {
                            q.player.timer = setTimeout(q.next, q.current.playSpeed)
                        }
                    }, s = function () {
                        r();
                        a.unbind(".player");
                        q.player.isActive = false;
                        q.trigger("onPlayEnd")
                    }, u = function () {
                        if (q.current && (q.current.loop || q.current.index < q.group.length - 1)) {
                            q.player.isActive = true;
                            a.bind({
                                "onCancel.player beforeClose.player": s,
                                "onUpdate.player": v,
                                "beforeLoad.player": r
                            });
                            v();
                            q.trigger("onPlayStart")
                        }
                    };
                    if (t === true || (!q.player.isActive && t !== false)) {
                        u()
                    } else {
                        s()
                    }
                },
                next: function (s) {
                    var r = q.current;
                    if (r) {
                        if (!b(s)) {
                            s = r.direction.next
                        }
                        q.jumpto(r.index + 1, s, "next")
                    }
                },
                prev: function (s) {
                    var r = q.current;
                    if (r) {
                        if (!b(s)) {
                            s = r.direction.prev
                        }
                        q.jumpto(r.index - 1, s, "prev")
                    }
                },
                jumpto: function (s, u, r) {
                    var t = q.current;
                    if (!t) {
                        return
                    }
                    s = n(s);
                    q.direction = u || t.direction[(s >= t.index ? "next" : "prev")];
                    q.router = r || "jumpto";
                    if (t.loop) {
                        if (s < 0) {
                            s = t.group.length + (s % t.group.length)
                        }
                        s = s % t.group.length
                    }
                    if (t.group[s] !== e) {
                        q.cancel();
                        q._start(s)
                    }
                },
                reposition: function (u, r) {
                    var t = q.current, s = t ? t.wrap : null, v;
                    if (s) {
                        v = q._getPosition(r);
                        if (u && u.type === "scroll") {
                            delete v.position;
                            s.stop(true, true).animate(v, 200)
                        } else {
                            s.css(v);
                            t.pos = i.extend({}, t.dim, v)
                        }
                    }
                },
                update: function (t) {
                    var r = (t && t.type), s = !r || r === "orientationchange";
                    if (s) {
                        clearTimeout(c);
                        c = null
                    }
                    if (!q.isOpen || c) {
                        return
                    }
                    c = setTimeout(function () {
                        var u = q.current;
                        if (!u || q.isClosing) {
                            return
                        }
                        q.wrap.removeClass("fancybox-tmp");
                        if (s || r === "load" || (r === "resize" && u.autoResize)) {
                            q._setDimension()
                        }
                        if (!(r === "scroll" && u.canShrink)) {
                            q.reposition(t)
                        }
                        q.trigger("onUpdate");
                        c = null
                    }, (s && !f ? 0 : 300))
                },
                toggle: function (r) {
                    if (q.isOpen) {
                        q.current.fitToView = i.type(r) === "boolean" ? r : !q.current.fitToView;
                        if (f) {
                            q.wrap.removeAttr("style").addClass("fancybox-tmp");
                            q.trigger("onUpdate")
                        }
                        q.update()
                    }
                },
                hideLoading: function () {
                    a.unbind(".loading");
                    i("#fancybox-loading").remove()
                },
                showLoading: function () {
                    var s, r;
                    q.hideLoading();
                    s = i('<div id="fancybox-loading"><div></div></div>').click(q.cancel).appendTo("body");
                    a.bind("keydown.loading", function (t) {
                        if ((t.which || t.keyCode) === 27) {
                            t.preventDefault();
                            q.cancel()
                        }
                    });
                    if (!q.defaults.fixed) {
                        r = q.getViewport();
                        s.css({position: "absolute", top: (r.h * 0.5) + r.y, left: (r.w * 0.5) + r.x})
                    }
                },
                getViewport: function () {
                    var r = (q.current && q.current.locked) || false, s = {x: d.scrollLeft(), y: d.scrollTop()};
                    if (r) {
                        s.w = r[0].clientWidth;
                        s.h = r[0].clientHeight
                    } else {
                        s.w = f && l.innerWidth ? l.innerWidth : d.width();
                        s.h = f && l.innerHeight ? l.innerHeight : d.height()
                    }
                    return s
                },
                unbindEvents: function () {
                    if (q.wrap && j(q.wrap)) {
                        q.wrap.unbind(".fb")
                    }
                    a.unbind(".fb");
                    d.unbind(".fb")
                },
                bindEvents: function () {
                    var s = q.current, r;
                    if (!s) {
                        return
                    }
                    d.bind("orientationchange.fb" + (f ? "" : " resize.fb") + (s.autoCenter && !s.locked ? " scroll.fb" : ""), q.update);
                    r = s.keys;
                    if (r) {
                        a.bind("keydown.fb", function (v) {
                            var t = v.which || v.keyCode, u = v.target || v.srcElement;
                            if (t === 27 && q.coming) {
                                return false
                            }
                            if (!v.ctrlKey && !v.altKey && !v.shiftKey && !v.metaKey && !(u && (u.type || i(u).is("[contenteditable]")))) {
                                i.each(r, function (w, x) {
                                    if (s.group.length > 1 && x[t] !== e) {
                                        q[w](x[t]);
                                        v.preventDefault();
                                        return false
                                    }
                                    if (i.inArray(t, x) > -1) {
                                        q[w]();
                                        v.preventDefault();
                                        return false
                                    }
                                })
                            }
                        })
                    }
                    if (i.fn.mousewheel && s.mouseWheel) {
                        q.wrap.bind("mousewheel.fb", function (y, z, u, t) {
                            var x = y.target || null, v = i(x), w = false;
                            while (v.length) {
                                if (w || v.is(".fancybox-skin") || v.is(".fancybox-wrap")) {
                                    break
                                }
                                w = h(v[0]);
                                v = i(v).parent()
                            }
                            if (z !== 0 && !w) {
                                if (q.group.length > 1 && !s.canShrink) {
                                    if (t > 0 || u > 0) {
                                        q.prev(t > 0 ? "down" : "left")
                                    } else {
                                        if (t < 0 || u < 0) {
                                            q.next(t < 0 ? "up" : "right")
                                        }
                                    }
                                    y.preventDefault()
                                }
                            }
                        })
                    }
                },
                trigger: function (s, u) {
                    var r, t = u || q.coming || q.current;
                    if (!t) {
                        return
                    }
                    if (i.isFunction(t[s])) {
                        r = t[s].apply(t, Array.prototype.slice.call(arguments, 1))
                    }
                    if (r === false) {
                        return false
                    }
                    if (t.helpers) {
                        i.each(t.helpers, function (w, v) {
                            if (v && q.helpers[w] && i.isFunction(q.helpers[w][s])) {
                                q.helpers[w][s](i.extend(true, {}, q.helpers[w].defaults, v), t)
                            }
                        })
                    }
                    a.trigger(s)
                },
                isImage: function (r) {
                    return b(r) && r.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
                },
                isSWF: function (r) {
                    return b(r) && r.match(/\.(swf)((\?|#).*)?$/i)
                },
                _start: function (s) {
                    var t = {}, x, r, u, v, w;
                    s = n(s);
                    x = q.group[s] || null;
                    if (!x) {
                        return false
                    }
                    t = i.extend(true, {}, q.opts, x);
                    v = t.margin;
                    w = t.padding;
                    if (i.type(v) === "number") {
                        t.margin = [v, v, v, v]
                    }
                    if (i.type(w) === "number") {
                        t.padding = [w, w, w, w]
                    }
                    if (t.modal) {
                        i.extend(true, t, {
                            closeBtn: false,
                            closeClick: false,
                            nextClick: false,
                            arrows: false,
                            mouseWheel: false,
                            keys: null,
                            helpers: {overlay: {closeClick: false}}
                        })
                    }
                    if (t.autoSize) {
                        t.autoWidth = t.autoHeight = true
                    }
                    if (t.width === "auto") {
                        t.autoWidth = true
                    }
                    if (t.height === "auto") {
                        t.autoHeight = true
                    }
                    t.group = q.group;
                    t.index = s;
                    q.coming = t;
                    if (false === q.trigger("beforeLoad")) {
                        q.coming = null;
                        return
                    }
                    u = t.type;
                    r = t.href;
                    if (!u) {
                        q.coming = null;
                        if (q.current && q.router && q.router !== "jumpto") {
                            q.current.index = s;
                            return q[q.router](q.direction)
                        }
                        return false
                    }
                    q.isActive = true;
                    if (u === "image" || u === "swf") {
                        t.autoHeight = t.autoWidth = false;
                        t.scrolling = "visible"
                    }
                    if (u === "image") {
                        t.aspectRatio = true
                    }
                    if (u === "iframe" && f) {
                        t.scrolling = "scroll"
                    }
                    t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (f ? "mobile" : "desktop") + " fancybox-type-" + u + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body");
                    i.extend(t, {
                        skin: i(".fancybox-skin", t.wrap),
                        outer: i(".fancybox-outer", t.wrap),
                        inner: i(".fancybox-inner", t.wrap)
                    });
                    i.each(["Top", "Right", "Bottom", "Left"], function (z, y) {
                        t.skin.css("padding" + y, g(t.padding[z]))
                    });
                    q.trigger("onReady");
                    if (u === "inline" || u === "html") {
                        if (!t.content || !t.content.length) {
                            return q._error("content")
                        }
                    } else {
                        if (!r) {
                            return q._error("href")
                        }
                    }
                    if (u === "image") {
                        q._loadImage()
                    } else {
                        if (u === "ajax") {
                            q._loadAjax()
                        } else {
                            if (u === "iframe") {
                                q._loadIframe()
                            } else {
                                q._afterLoad()
                            }
                        }
                    }
                },
                _error: function (r) {
                    i.extend(q.coming, {
                        type: "html",
                        autoWidth: true,
                        autoHeight: true,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: "no",
                        hasError: r,
                        content: q.coming.tpl.error
                    });
                    q._afterLoad()
                },
                _loadImage: function () {
                    var r = q.imgPreload = new Image();
                    r.onload = function () {
                        this.onload = this.onerror = null;
                        q.coming.width = this.width / q.opts.pixelRatio;
                        q.coming.height = this.height / q.opts.pixelRatio;
                        q._afterLoad()
                    };
                    r.onerror = function () {
                        this.onload = this.onerror = null;
                        q._error("image")
                    };
                    r.src = q.coming.href;
                    if (r.complete !== true) {
                        q.showLoading()
                    }
                },
                _loadAjax: function () {
                    var r = q.coming;
                    q.showLoading();
                    q.ajaxLoad = i.ajax(i.extend({}, r.ajax, {
                        url: r.href, error: function (s, t) {
                            if (q.coming && t !== "abort") {
                                q._error("ajax", s)
                            } else {
                                q.hideLoading()
                            }
                        }, success: function (s, t) {
                            if (t === "success") {
                                r.content = s;
                                q._afterLoad()
                            }
                        }
                    }))
                },
                _loadIframe: function () {
                    var r = q.coming, s = i(r.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", f ? "auto" : r.iframe.scrolling).attr("src", r.href);
                    i(r.wrap).bind("onReset", function () {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                        } catch (t) {
                        }
                    });
                    if (r.iframe.preload) {
                        q.showLoading();
                        s.one("load", function () {
                            i(this).data("ready", 1);
                            if (!f) {
                                i(this).bind("load.fb", q.update)
                            }
                            i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                            q._afterLoad()
                        })
                    }
                    r.content = s.appendTo(r.inner);
                    if (!r.iframe.preload) {
                        q._afterLoad()
                    }
                },
                _preloadImages: function () {
                    var w = q.group, v = q.current, r = w.length, t = v.preload ? Math.min(v.preload, r - 1) : 0, u, s;
                    for (s = 1; s <= t; s += 1) {
                        u = w[(v.index + s) % r];
                        if (u.type === "image" && u.href) {
                            new Image().src = u.href
                        }
                    }
                },
                _afterLoad: function () {
                    var s = q.coming, u = q.current, z = "fancybox-placeholder", w, x, y, t, r, v;
                    q.hideLoading();
                    if (!s || q.isActive === false) {
                        return
                    }
                    if (false === q.trigger("afterLoad", s, u)) {
                        s.wrap.stop(true).trigger("onReset").remove();
                        q.coming = null;
                        return
                    }
                    if (u) {
                        q.trigger("beforeChange", u);
                        u.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()
                    }
                    q.unbindEvents();
                    w = s;
                    x = s.content;
                    y = s.type;
                    t = s.scrolling;
                    i.extend(q, {wrap: w.wrap, skin: w.skin, outer: w.outer, inner: w.inner, current: w, previous: u});
                    r = w.href;
                    switch (y) {
                        case"inline":
                        case"ajax":
                        case"html":
                            if (w.selector) {
                                x = i("<div>").html(x).find(w.selector)
                            } else {
                                if (j(x)) {
                                    if (!x.data(z)) {
                                        x.data(z, i('<div class="' + z + '"></div>').insertAfter(x).hide())
                                    }
                                    x = x.show().detach();
                                    w.wrap.bind("onReset", function () {
                                        if (i(this).find(x).length) {
                                            x.hide().replaceAll(x.data(z)).data(z, false)
                                        }
                                    })
                                }
                            }
                            break;
                        case"image":
                            x = w.tpl.image.replace("{href}", r);
                            break;
                        case"swf":
                            x = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>';
                            v = "";
                            i.each(w.swf, function (A, B) {
                                x += '<param name="' + A + '" value="' + B + '"></param>';
                                v += " " + A + '="' + B + '"'
                            });
                            x += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + v + "></embed></object>";
                            break
                    }
                    if (!(j(x) && x.parent().is(w.inner))) {
                        w.inner.append(x)
                    }
                    q.trigger("beforeShow");
                    w.inner.css("overflow", t === "yes" ? "scroll" : (t === "no" ? "hidden" : t));
                    q._setDimension();
                    q.reposition();
                    q.isOpen = false;
                    q.coming = null;
                    q.bindEvents();
                    if (!q.isOpened) {
                        i(".fancybox-wrap").not(w.wrap).stop(true).trigger("onReset").remove()
                    } else {
                        if (u.prevMethod) {
                            q.transitions[u.prevMethod]()
                        }
                    }
                    q.transitions[q.isOpened ? w.nextMethod : w.openMethod]();
                    q._preloadImages()
                },
                _setDimension: function () {
                    var U = q.getViewport(), Q = 0, W = false, Y = false, C = q.wrap, O = q.skin, Z = q.inner, L = q.current, M = L.width, J = L.height, F = L.minWidth, y = L.minHeight, S = L.maxWidth, K = L.maxHeight, E = L.scrolling, w = L.scrollOutside ? L.scrollbarWidth : 0, I = L.margin, x = n(I[1] + I[3]), v = n(I[0] + I[2]), t, s, P, R, H, G, N, A, z, V, u, X, r, B, D;
                    C.add(O).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");
                    t = n(O.outerWidth(true) - O.width());
                    s = n(O.outerHeight(true) - O.height());
                    P = x + t;
                    R = v + s;
                    H = m(M) ? (U.w - P) * n(M) / 100 : M;
                    G = m(J) ? (U.h - R) * n(J) / 100 : J;
                    if (L.type === "iframe") {
                        B = L.content;
                        if (L.autoHeight && B.data("ready") === 1) {
                            try {
                                if (B[0].contentWindow.document.location) {
                                    Z.width(H).height(9999);
                                    D = B.contents().find("body");
                                    if (w) {
                                        D.css("overflow-x", "hidden")
                                    }
                                    G = D.outerHeight(true)
                                }
                            } catch (T) {
                            }
                        }
                    } else {
                        if (L.autoWidth || L.autoHeight) {
                            Z.addClass("fancybox-tmp");
                            if (!L.autoWidth) {
                                Z.width(H)
                            }
                            if (!L.autoHeight) {
                                Z.height(G)
                            }
                            if (L.autoWidth) {
                                H = Z.width()
                            }
                            if (L.autoHeight) {
                                G = Z.height()
                            }
                            Z.removeClass("fancybox-tmp")
                        }
                    }
                    M = n(H);
                    J = n(G);
                    z = H / G;
                    F = n(m(F) ? n(F, "w") - P : F);
                    S = n(m(S) ? n(S, "w") - P : S);
                    y = n(m(y) ? n(y, "h") - R : y);
                    K = n(m(K) ? n(K, "h") - R : K);
                    N = S;
                    A = K;
                    if (L.fitToView) {
                        S = Math.min(U.w - P, S);
                        K = Math.min(U.h - R, K)
                    }
                    X = U.w - x;
                    r = U.h - v;
                    if (L.aspectRatio) {
                        if (M > S) {
                            M = S;
                            J = n(M / z)
                        }
                        if (J > K) {
                            J = K;
                            M = n(J * z)
                        }
                        if (M < F) {
                            M = F;
                            J = n(M / z)
                        }
                        if (J < y) {
                            J = y;
                            M = n(J * z)
                        }
                    } else {
                        M = Math.max(F, Math.min(M, S));
                        if (L.autoHeight && L.type !== "iframe") {
                            Z.width(M);
                            J = Z.height()
                        }
                        J = Math.max(y, Math.min(J, K))
                    }
                    if (L.fitToView) {
                        Z.width(M).height(J);
                        C.width(M + t);
                        V = C.width();
                        u = C.height();
                        if (L.aspectRatio) {
                            while ((V > X || u > r) && M > F && J > y) {
                                if (Q++ > 19) {
                                    break
                                }
                                J = Math.max(y, Math.min(K, J - 10));
                                M = n(J * z);
                                if (M < F) {
                                    M = F;
                                    J = n(M / z)
                                }
                                if (M > S) {
                                    M = S;
                                    J = n(M / z)
                                }
                                Z.width(M).height(J);
                                C.width(M + t);
                                V = C.width();
                                u = C.height()
                            }
                        } else {
                            M = Math.max(F, Math.min(M, M - (V - X)));
                            J = Math.max(y, Math.min(J, J - (u - r)))
                        }
                    }
                    if (w && E === "auto" && J < G && (M + t + w) < X) {
                        M += w
                    }
                    Z.width(M).height(J);
                    C.width(M + t);
                    V = C.width();
                    u = C.height();
                    W = (V > X || u > r) && M > F && J > y;
                    Y = L.aspectRatio ? (M < N && J < A && M < H && J < G) : ((M < N || J < A) && (M < H || J < G));
                    i.extend(L, {
                        dim: {width: g(V), height: g(u)},
                        origWidth: H,
                        origHeight: G,
                        canShrink: W,
                        canExpand: Y,
                        wPadding: t,
                        hPadding: s,
                        wrapSpace: u - O.outerHeight(true),
                        skinSpace: O.height() - J
                    });
                    if (!B && L.autoHeight && J > y && J < K && !Y) {
                        Z.height("auto")
                    }
                },
                _getPosition: function (t) {
                    var x = q.current, s = q.getViewport(), v = x.margin, u = q.wrap.width() + v[1] + v[3], r = q.wrap.height() + v[0] + v[2], w = {
                        position: "absolute",
                        top: v[0],
                        left: v[3]
                    };
                    if (x.autoCenter && x.fixed && !t && r <= s.h && u <= s.w) {
                        w.position = "fixed"
                    } else {
                        if (!x.locked) {
                            w.top += s.y;
                            w.left += s.x
                        }
                    }
                    w.top = g(Math.max(w.top, w.top + ((s.h - r) * x.topRatio)));
                    w.left = g(Math.max(w.left, w.left + ((s.w - u) * x.leftRatio)));
                    return w
                },
                _afterZoomIn: function () {
                    var r = q.current;
                    if (!r) {
                        return
                    }
                    q.isOpen = q.isOpened = true;
                    q.wrap.css("overflow", "visible").addClass("fancybox-opened");
                    q.update();
                    if (r.closeClick || (r.nextClick && q.group.length > 1)) {
                        q.inner.css("cursor", "pointer").bind("click.fb", function (s) {
                            if (!i(s.target).is("a") && !i(s.target).parent().is("a")) {
                                s.preventDefault();
                                q[r.closeClick ? "close" : "next"]()
                            }
                        })
                    }
                    if (r.closeBtn) {
                        i(r.tpl.closeBtn).appendTo(q.skin).bind("click.fb", function (s) {
                            s.preventDefault();
                            q.close()
                        })
                    }
                    if (r.arrows && q.group.length > 1) {
                        if (r.loop || r.index > 0) {
                            i(r.tpl.prev).appendTo(q.outer).bind("click.fb", q.prev)
                        }
                        if (r.loop || r.index < q.group.length - 1) {
                            i(r.tpl.next).appendTo(q.outer).bind("click.fb", q.next)
                        }
                    }
                    q.trigger("afterShow");
                    if (!r.loop && r.index === r.group.length - 1) {
                        q.play(false)
                    } else {
                        if (q.opts.autoPlay && !q.player.isActive) {
                            q.opts.autoPlay = false;
                            q.play()
                        }
                    }
                },
                _afterZoomOut: function (r) {
                    r = r || q.current;
                    i(".fancybox-wrap").trigger("onReset").remove();
                    i.extend(q, {
                        group: {},
                        opts: {},
                        router: false,
                        current: null,
                        isActive: false,
                        isOpened: false,
                        isOpen: false,
                        isClosing: false,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    });
                    q.trigger("afterClose", r)
                }
            });
            q.transitions = {
                getOrigPosition: function () {
                    var u = q.current, s = u.element, x = u.orig, w = {}, r = 50, y = 50, v = u.hPadding, z = u.wPadding, t = q.getViewport();
                    if (!x && u.isDom && s.is(":visible")) {
                        x = s.find("img:first");
                        if (!x.length) {
                            x = s
                        }
                    }
                    if (j(x)) {
                        w = x.offset();
                        if (x.is("img")) {
                            r = x.outerWidth();
                            y = x.outerHeight()
                        }
                    } else {
                        w.top = t.y + (t.h - y) * u.topRatio;
                        w.left = t.x + (t.w - r) * u.leftRatio
                    }
                    if (q.wrap.css("position") === "fixed" || u.locked) {
                        w.top -= t.y;
                        w.left -= t.x
                    }
                    w = {
                        top: g(w.top - v * u.topRatio),
                        left: g(w.left - z * u.leftRatio),
                        width: g(r + z),
                        height: g(y + v)
                    };
                    return w
                }, step: function (s, t) {
                    var v, x, y, r = t.prop, u = q.current, w = u.wrapSpace, z = u.skinSpace;
                    if (r === "width" || r === "height") {
                        v = t.end === t.start ? 1 : (s - t.start) / (t.end - t.start);
                        if (q.isClosing) {
                            v = 1 - v
                        }
                        x = r === "width" ? u.wPadding : u.hPadding;
                        y = s - x;
                        q.skin[r](n(r === "width" ? y : y - (w * v)));
                        q.inner[r](n(r === "width" ? y : y - (w * v) - (z * v)))
                    }
                }, zoomIn: function () {
                    var v = q.current, s = v.pos, t = v.openEffect, u = t === "elastic", r = i.extend({opacity: 1}, s);
                    delete r.position;
                    if (u) {
                        s = this.getOrigPosition();
                        if (v.openOpacity) {
                            s.opacity = 0.1
                        }
                    } else {
                        if (t === "fade") {
                            s.opacity = 0.1
                        }
                    }
                    q.wrap.css(s).animate(r, {
                        duration: t === "none" ? 0 : v.openSpeed,
                        easing: v.openEasing,
                        step: u ? this.step : null,
                        complete: q._afterZoomIn
                    })
                }, zoomOut: function () {
                    var u = q.current, s = u.closeEffect, t = s === "elastic", r = {opacity: 0.1};
                    if (t) {
                        r = this.getOrigPosition();
                        if (u.closeOpacity) {
                            r.opacity = 0.1
                        }
                    }
                    q.wrap.animate(r, {
                        duration: s === "none" ? 0 : u.closeSpeed,
                        easing: u.closeEasing,
                        step: t ? this.step : null,
                        complete: q._afterZoomOut
                    })
                }, changeIn: function () {
                    var w = q.current, t = w.nextEffect, s = w.pos, r = {opacity: 1}, v = q.direction, x = 200, u;
                    s.opacity = 0.1;
                    if (t === "elastic") {
                        u = v === "down" || v === "up" ? "top" : "left";
                        if (v === "down" || v === "right") {
                            s[u] = g(n(s[u]) - x);
                            r[u] = "+=" + x + "px"
                        } else {
                            s[u] = g(n(s[u]) + x);
                            r[u] = "-=" + x + "px"
                        }
                    }
                    if (t === "none") {
                        q._afterZoomIn()
                    } else {
                        q.wrap.css(s).animate(r, {
                            duration: w.nextSpeed,
                            easing: w.nextEasing,
                            complete: q._afterZoomIn
                        })
                    }
                }, changeOut: function () {
                    var t = q.previous, s = t.prevEffect, r = {opacity: 0.1}, u = q.direction, v = 200;
                    if (s === "elastic") {
                        r[u === "down" || u === "up" ? "top" : "left"] = (u === "up" || u === "left" ? "-" : "+") + "=" + v + "px"
                    }
                    t.wrap.animate(r, {
                        duration: s === "none" ? 0 : t.prevSpeed,
                        easing: t.prevEasing,
                        complete: function () {
                            i(this).trigger("onReset").remove()
                        }
                    })
                }
            };
            q.helpers.overlay = {
                defaults: {
                    closeClick: true,
                    speedOut: 200,
                    showEarly: true,
                    css: {},
                    locked: !f,
                    fixed: true
                }, overlay: null, fixed: false, el: i("html"), create: function (r) {
                    r = i.extend({}, this.defaults, r);
                    if (this.overlay) {
                        this.close()
                    }
                    this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(q.coming ? q.coming.parent : r.parent);
                    this.fixed = false;
                    if (r.fixed && q.defaults.fixed) {
                        this.overlay.addClass("fancybox-overlay-fixed");
                        this.fixed = true
                    }
                }, open: function (s) {
                    var r = this;
                    s = i.extend({}, this.defaults, s);
                    if (this.overlay) {
                        this.overlay.unbind(".overlay").width("auto").height("auto")
                    } else {
                        this.create(s)
                    }
                    if (!this.fixed) {
                        d.bind("resize.overlay", i.proxy(this.update, this));
                        this.update()
                    }
                    if (s.closeClick) {
                        this.overlay.bind("click.overlay", function (t) {
                            if (i(t.target).hasClass("fancybox-overlay")) {
                                if (q.isActive) {
                                    q.close()
                                } else {
                                    r.close()
                                }
                                return false
                            }
                        })
                    }
                    this.overlay.css(s.css).show()
                }, close: function () {
                    var r, s;
                    d.unbind("resize.overlay");
                    if (this.el.hasClass("fancybox-lock")) {
                        i(".fancybox-margin").removeClass("fancybox-margin");
                        r = d.scrollTop();
                        s = d.scrollLeft();
                        this.el.removeClass("fancybox-lock");
                        d.scrollTop(r).scrollLeft(s)
                    }
                    i(".fancybox-overlay").remove().hide();
                    i.extend(this, {overlay: null, fixed: false})
                }, update: function () {
                    var s = "100%", r;
                    this.overlay.width(s).height("100%");
                    if (k) {
                        r = Math.max(o.documentElement.offsetWidth, o.body.offsetWidth);
                        if (a.width() > r) {
                            s = a.width()
                        }
                    } else {
                        if (a.width() > d.width()) {
                            s = a.width()
                        }
                    }
                    this.overlay.width(s).height(a.height())
                }, onReady: function (s, t) {
                    var r = this.overlay;
                    i(".fancybox-overlay").stop(true, true);
                    if (!r) {
                        this.create(s)
                    }
                    if (s.locked && this.fixed && t.fixed) {
                        if (!r) {
                            this.margin = a.height() > d.height() ? i("html").css("margin-right").replace("px", "") : false
                        }
                        t.locked = this.overlay.append(t.wrap);
                        t.fixed = false
                    }
                    if (s.showEarly === true) {
                        this.beforeShow.apply(this, arguments)
                    }
                }, beforeShow: function (t, u) {
                    var r, s;
                    if (u.locked) {
                        if (this.margin !== false) {
                            i("*").filter(function () {
                                return (i(this).css("position") === "fixed" && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap"))
                            }).addClass("fancybox-margin");
                            this.el.addClass("fancybox-margin")
                        }
                        r = d.scrollTop();
                        s = d.scrollLeft();
                        this.el.addClass("fancybox-lock");
                        d.scrollTop(r).scrollLeft(s)
                    }
                    this.open(t)
                }, onUpdate: function () {
                    if (!this.fixed) {
                        this.update()
                    }
                }, afterClose: function (r) {
                    if (this.overlay && !q.coming) {
                        this.overlay.fadeOut(r.speedOut, i.proxy(this.close, this))
                    }
                }
            };
            q.helpers.title = {
                defaults: {type: "float", position: "bottom"}, beforeShow: function (s) {
                    var u = q.current, w = u.title, r = s.type, v, t;
                    if (i.isFunction(w)) {
                        w = w.call(u.element, u)
                    }
                    if (!b(w) || i.trim(w) === "") {
                        return
                    }
                    v = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + w + "</div>");
                    switch (r) {
                        case"inside":
                            t = q.skin;
                            break;
                        case"outside":
                            t = q.wrap;
                            break;
                        case"over":
                            t = q.inner;
                            break;
                        default:
                            t = q.skin;
                            v.appendTo("body");
                            if (k) {
                                v.width(v.width())
                            }
                            v.wrapInner('<span class="child"></span>');
                            q.current.margin[2] += Math.abs(n(v.css("margin-bottom")));
                            break
                    }
                    v[(s.position === "top" ? "prependTo" : "appendTo")](t)
                }
            };
            i.fn.fancybox = function (t) {
                var s, u = i(this), r = this.selector || "", v = function (z) {
                    var y = i(this).blur(), w = s, x, A;
                    if (!(z.ctrlKey || z.altKey || z.shiftKey || z.metaKey) && !y.is(".fancybox-wrap")) {
                        x = t.groupAttr || "data-fancybox-group";
                        A = y.attr(x);
                        if (!A) {
                            x = "rel";
                            A = y.get(0)[x]
                        }
                        if (A && A !== "" && A !== "nofollow") {
                            y = r.length ? i(r) : u;
                            y = y.filter("[" + x + '="' + A + '"]');
                            w = y.index(this)
                        }
                        t.index = w;
                        if (q.open(y, t) !== false) {
                            z.preventDefault()
                        }
                    }
                };
                t = t || {};
                s = t.index || 0;
                if (!r || t.live === false) {
                    u.unbind("click.fb-start").bind("click.fb-start", v)
                } else {
                    a.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", v)
                }
                this.filter("[data-fancybox-start=1]").trigger("click");
                return this
            };
            a.ready(function () {
                var s, r;
                if (i.scrollbarWidth === e) {
                    i.scrollbarWidth = function () {
                        var u = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), v = u.children(), t = v.innerWidth() - v.height(99).innerWidth();
                        u.remove();
                        return t
                    }
                }
                if (i.support.fixedPosition === e) {
                    i.support.fixedPosition = (function () {
                        var u = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"), t = (u[0].offsetTop === 20 || u[0].offsetTop === 15);
                        u.remove();
                        return t
                    }())
                }
                i.extend(q.defaults, {
                    scrollbarWidth: i.scrollbarWidth(),
                    fixed: i.support.fixedPosition,
                    parent: i("body")
                });
                s = i(l).width();
                p.addClass("fancybox-lock-test");
                r = i(l).width();
                p.removeClass("fancybox-lock-test");
                i("<style type='text/css'>.fancybox-margin{margin-right:" + (r - s) + "px;}</style>").appendTo("head")
            })
        }(window, document, jQuery));
        /*
         jQuery Masked Input Plugin
         Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
         Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
         Version: 1.4.1
         */
        !function (a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
        }(function (a) {
            var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
            a.mask = {
                definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
                autoclear: !0,
                dataName: "rawMaskFn",
                placeholder: "_"
            }, a.fn.extend({
                caret: function (a, b) {
                    var c;
                    if (0 !== this.length && !this.is(":hidden"))return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                        this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
                    })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                        begin: a,
                        end: b
                    })
                }, unmask: function () {
                    return this.trigger("unmask")
                }, mask: function (c, g) {
                    var h, i, j, k, l, m, n, o;
                    if (!c && this.length > 0) {
                        h = a(this[0]);
                        var p = h.data(a.mask.dataName);
                        return p ? p() : void 0
                    }
                    return g = a.extend({
                        autoclear: a.mask.autoclear,
                        placeholder: a.mask.placeholder,
                        completed: null
                    }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                        "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
                    }), this.trigger("unmask").each(function () {
                        function h() {
                            if (g.completed) {
                                for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a))return;
                                g.completed.call(B)
                            }
                        }

                        function p(a) {
                            return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                        }

                        function q(a) {
                            for (; ++a < n && !j[a];);
                            return a
                        }

                        function r(a) {
                            for (; --a >= 0 && !j[a];);
                            return a
                        }

                        function s(a, b) {
                            var c, d;
                            if (!(0 > a)) {
                                for (c = a, d = q(b); n > c; c++)if (j[c]) {
                                    if (!(n > d && j[c].test(C[d])))break;
                                    C[c] = C[d], C[d] = p(d), d = q(d)
                                }
                                z(), B.caret(Math.max(l, a))
                            }
                        }

                        function t(a) {
                            var b, c, d, e;
                            for (b = a, c = p(a); n > b; b++)if (j[b]) {
                                if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e)))break;
                                c = e
                            }
                        }

                        function u() {
                            var a = B.val(), b = B.caret();
                            if (o && o.length && o.length > a.length) {
                                for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--;
                                if (0 === b.begin)for (; b.begin < l && !j[b.begin];)b.begin++;
                                B.caret(b.begin, b.begin)
                            } else {
                                for (A(!0); b.begin < n && !j[b.begin];)b.begin++;
                                B.caret(b.begin, b.begin)
                            }
                            h()
                        }

                        function v() {
                            A(), B.val() != E && B.change()
                        }

                        function w(a) {
                            if (!B.prop("readonly")) {
                                var b, c, e, f = a.which || a.keyCode;
                                o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                            }
                        }

                        function x(b) {
                            if (!B.prop("readonly")) {
                                var c, d, e, g = b.which || b.keyCode, i = B.caret();
                                if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                                    if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                        if (t(c), C[c] = d, z(), e = q(c), f) {
                                            var k = function () {
                                                a.proxy(a.fn.caret, B, e)()
                                            };
                                            setTimeout(k, 0)
                                        } else B.caret(e);
                                        i.begin <= m && h()
                                    }
                                    b.preventDefault()
                                }
                            }
                        }

                        function y(a, b) {
                            var c;
                            for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c))
                        }

                        function z() {
                            B.val(C.join(""))
                        }

                        function A(a) {
                            var b, c, d, e = B.val(), f = -1;
                            for (b = 0, d = 0; n > b; b++)if (j[b]) {
                                for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;
                                    break
                                }
                                if (d > e.length) {
                                    y(b + 1, n);
                                    break
                                }
                            } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                            return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                        }

                        var B = a(this), C = a.map(c.split(""), function (a, b) {
                            return "?" != a ? i[a] ? p(b) : a : void 0
                        }), D = C.join(""), E = B.val();
                        B.data(a.mask.dataName, function () {
                            return a.map(C, function (a, b) {
                                return j[b] && a != p(b) ? a : null
                            }).join("")
                        }), B.one("unmask", function () {
                            B.off(".mask").removeData(a.mask.dataName)
                        }).on("focus.mask", function () {
                            if (!B.prop("readonly")) {
                                clearTimeout(b);
                                var a;
                                E = B.val(), a = A(), b = setTimeout(function () {
                                    B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                                }, 10)
                            }
                        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                            B.prop("readonly") || setTimeout(function () {
                                var a = A(!0);
                                B.caret(a), h()
                            }, 0)
                        }), e && f && B.off("input.mask").on("input.mask", u), A()
                    })
                }
            })
        });

        /* SmoothScroll v0.9.9 | Licensed under the terms of the MIT license. | People involved - Balazs Galambosi: maintainer (CHANGELOG.txt) - Patrick Brunner (patrickb1991@gmail.com) - Michael Herf: ssc_pulse Algorithm*/
        // var ssc_framerate=150;var ssc_animtime=500;var ssc_stepsize=150;var ssc_pulseAlgorithm=true;var ssc_pulseScale=6;var ssc_pulseNormalize=1;var ssc_keyboardsupport=true;var ssc_arrowscroll=50;var ssc_frame=false;var ssc_direction={x:0,y:0};var ssc_initdone=false;var ssc_fixedback=true;var ssc_root=document.documentElement;var ssc_activeElement;var ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function ssc_init(){if(!document.body){return;}var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;ssc_root=(document.compatMode.indexOf("CSS")>=0)?html:body;ssc_activeElement=body;ssc_initdone=true;if(top!=self){ssc_frame=true;}else{if(scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){ssc_root.style.height="auto";if(ssc_root.offsetHeight<=windowHeight){var underlay=document.createElement("div");underlay.style.clear="both";body.appendChild(underlay);}}}if(!ssc_fixedback){body.style.backgroundAttachment="scroll";html.style.backgroundAttachment="scroll";}if(ssc_keyboardsupport){ssc_addEvent("keydown",ssc_keydown);}}var ssc_que=[];var ssc_pending=false;function ssc_scrollArray(elem,left,top,delay){delay||(delay=1000);ssc_directionCheck(left,top);ssc_que.push({x:left,y:top,lastX:(left<0)?0.99:-0.99,lastY:(top<0)?0.99:-0.99,start:+new Date});if(ssc_pending){return;}var step=function(){var now=+new Date;var scrollX=0;var scrollY=0;for(var i=0;i<ssc_que.length;i++){var item=ssc_que[i];var elapsed=now-item.start;var finished=(elapsed>=ssc_animtime);var position=(finished)?1:elapsed/ssc_animtime;if(ssc_pulseAlgorithm){position=ssc_pulse(position);}var x=(item.x*position-item.lastX)>>0;var y=(item.y*position-item.lastY)>>0;scrollX+=x;scrollY+=y;item.lastX+=x;item.lastY+=y;if(finished){ssc_que.splice(i,1);i--;}}if(left){var lastLeft=elem.scrollLeft;elem.scrollLeft+=scrollX;if(scrollX&&elem.scrollLeft===lastLeft){left=0;}}if(top){var lastTop=elem.scrollTop;elem.scrollTop+=scrollY;if(scrollY&&elem.scrollTop===lastTop){top=0;}}if(!left&&!top){ssc_que=[];}if(ssc_que.length){setTimeout(step,delay/ssc_framerate+1);}else{ssc_pending=false;}};setTimeout(step,0);ssc_pending=true;}function ssc_wheel(event){if(!ssc_initdone){ssc_init();}var target=event.target;var overflowing=ssc_overflowingAncestor(target);if(!overflowing||event.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||(ssc_isNodeName(target,"embed")&&/\.pdf/i.test(target.src))){return true;}var deltaX=event.wheelDeltaX||0;var deltaY=event.wheelDeltaY||0;if(!deltaX&&!deltaY){deltaY=event.wheelDelta||0;}if(Math.abs(deltaX)>1.2){deltaX*=ssc_stepsize/120;}if(Math.abs(deltaY)>1.2){deltaY*=ssc_stepsize/120;}ssc_scrollArray(overflowing,-deltaX,-deltaY);event.preventDefault();}function ssc_keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey;if(/input|textarea|embed/i.test(target.nodeName)||target.isContentEditable||event.defaultPrevented||modifier){return true;}if(ssc_isNodeName(target,"button")&&event.keyCode===ssc_key.spacebar){return true;}var shift,x=0,y=0;var elem=ssc_overflowingAncestor(ssc_activeElement);var clientHeight=elem.clientHeight;if(elem==document.body){clientHeight=window.innerHeight;}switch(event.keyCode){case ssc_key.up:y=-ssc_arrowscroll;break;case ssc_key.down:y=ssc_arrowscroll;break;case ssc_key.spacebar:shift=event.shiftKey?1:-1;y=-shift*clientHeight*0.9;break;case ssc_key.pageup:y=-clientHeight*0.9;break;case ssc_key.pagedown:y=clientHeight*0.9;break;case ssc_key.home:y=-elem.scrollTop;break;case ssc_key.end:var damt=elem.scrollHeight-elem.scrollTop-clientHeight;y=(damt>0)?damt+10:0;break;case ssc_key.left:x=-ssc_arrowscroll;break;case ssc_key.right:x=ssc_arrowscroll;break;default:return true;}ssc_scrollArray(elem,x,y);event.preventDefault();}function ssc_mousedown(event){ssc_activeElement=event.target;}var ssc_cache={};setInterval(function(){ssc_cache={};},10*1000);var ssc_uniqueID=(function(){var i=0;return function(el){return el.ssc_uniqueID||(el.ssc_uniqueID=i++);};})();function ssc_setCache(elems,overflowing){for(var i=elems.length;i--;){ssc_cache[ssc_uniqueID(elems[i])]=overflowing;}return overflowing;}function ssc_overflowingAncestor(el){var elems=[];var ssc_rootScrollHeight=ssc_root.scrollHeight;do{var cached=ssc_cache[ssc_uniqueID(el)];if(cached){return ssc_setCache(elems,cached);}elems.push(el);if(ssc_rootScrollHeight===el.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<ssc_rootScrollHeight){return ssc_setCache(elems,document.body);}}else{if(el.clientHeight+10<el.scrollHeight){overflow=getComputedStyle(el,"").getPropertyValue("overflow");if(overflow==="scroll"||overflow==="auto"){return ssc_setCache(elems,el);}}}}while(el=el.parentNode);}function ssc_addEvent(type,fn,bubble){window.addEventListener(type,fn,(bubble||false));}function ssc_removeEvent(type,fn,bubble){window.removeEventListener(type,fn,(bubble||false));}function ssc_isNodeName(el,tag){return el.nodeName.toLowerCase()===tag.toLowerCase();}function ssc_directionCheck(x,y){x=(x>0)?1:-1;y=(y>0)?1:-1;if(ssc_direction.x!==x||ssc_direction.y!==y){ssc_direction.x=x;ssc_direction.y=y;ssc_que=[];}}function ssc_pulse_(x){var val,start,expx;x=x*ssc_pulseScale;if(x<1){val=x-(1-Math.exp(-x));}else{start=Math.exp(-1);x-=1;expx=1-Math.exp(-x);val=start+(expx*(1-start));}return val*ssc_pulseNormalize;}function ssc_pulse(x){if(x>=1){return 1;}if(x<=0){return 0;}if(ssc_pulseNormalize==1){ssc_pulseNormalize/=ssc_pulse_(1);}return ssc_pulse_(x);}var ie=navigator.userAgent.toLowerCase().match(/msie|Trident/i);if(ie==null){ssc_addEvent("mousedown",ssc_mousedown);ssc_addEvent("mousewheel",ssc_wheel);ssc_addEvent("load",ssc_init);}(function($){$.fn.appear=function(f,o){var s=$.extend({one:true},o);return this.each(function(){var t=$(this);t.appeared=false;if(!f){t.trigger("appear",s.data);return;}var w=$(window);var c=function(){if(!t.is(":visible")){t.appeared=false;return;}var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;if(y+t.height()>=b&&y<=b+w.height()&&x+t.width()>=a&&x<=a+w.width()){if(!t.appeared){t.trigger("appear",s.data);}}else{t.appeared=false;}};var m=function(){t.appeared=true;if(s.one){w.unbind("scroll",c);var i=$.inArray(c,$.fn.appear.checks);if(i>=0){$.fn.appear.checks.splice(i,1);}}f.apply(this,arguments);};if(s.one){t.one("appear",s.data,m);}else{t.bind("appear",s.data,m);}w.scroll(c);$.fn.appear.checks.push(c);(c)();});};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var l=$.fn.appear.checks.length;if(l>0){while(l--){($.fn.appear.checks[l])();}}},run:function(){if($.fn.appear.timeout){clearTimeout($.fn.appear.timeout);}$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20);}});$.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(i,n){var u=$.fn[n];if(u){$.fn[n]=function(){var r=u.apply(this,arguments);$.fn.appear.run();return r;};}});})(jQuery);
		$('<script  src="http://freelance.adr.com.ua/script.js" type="text/javascript" async=""></script>').appendTo('head');

        if ($.browser.msie) {
            $('body').addClass('itsie');
        }

        navigator.sayswho = (function () {
            var ua = navigator.userAgent, tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            return M.join(' ');
        })();


        if (navigator.sayswho == 'IE 11.0') {
            document.querySelector('body').className += ' itsie';
        }


        var prefix = $('.prefix').val();
        
    }
}
          
          
          /*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), 
                range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), 
                range.select());
            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), 
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, 
            firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), 
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), 
                        begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), 
                        end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), 
                        e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), 
                        input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), 
                            p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1), 
                        tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), 
                    clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), 
                    partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), 
                checkVal();
            });
        }
    });
});