(function (t) {
    function e(e) {
        for (var s, r, n = e[0], c = e[1], l = e[2], u = 0, m = []; u < n.length; u++) 
            r = n[u],
            i[r] && m.push(i[r][0]),
            i[r] = 0;
        for (s in c) 
            Object
                .prototype
                .hasOwnProperty
                .call(c, s) && (t[s] = c[s]);
        d && d(e);
        while (m.length) 
            m.shift()();
        return o
            .push
            .apply(o, l || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < o.length; e++) {
            for (var a = o[e], s = !0, n = 1; n < a.length; n++) {
                var c = a[n];
                0 !== i[c] && (s = !1)
            }
            s && (o.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var s = {},
        i = {
            1: 0
        },
        o = [];
    function r(e) {
        if (s[e]) 
            return s[e].exports;
        var a = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = t,
    r.c = s,
    r.d = function (t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    },
    r.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(
            t,
            Symbol.toStringTag,
            {value: "Module"}
        ),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) 
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) 
            return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) 
            for (var s in t) 
                r.d(a, s, function (e) {
                    return t[e]
                }.bind(null, s));
    return a
    },
    r.n = function (t) {
        var e = t && t.__esModule
            ? function () {
                return t["default"]
            }
            : function () {
                return t
            };
        return r.d(e, "a", e),
        e
    },
    r.o = function (t, e) {
        return Object
            .prototype
            .hasOwnProperty
            .call(t, e)
    },
    r.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = n
            .push
            .bind(n);
    n.push = e,
    n = n.slice();
    for (var l = 0; l < n.length; l++) 
        e(n[l]);
    var d = c;
    o.push([8, 0]),
    a()
})({
    "/7q3": function (t, e, a) {},
    "0kNR": function (t, e, a) {
        "use strict";
        var s = a("/7q3"),
            i = a.n(s);
        i.a
    },
    "2ZpZ": function (t, e, a) {},
    "3kiN": function (t, e, a) {
        "use strict";
        var s = a("Rcce"),
            i = a.n(s);
        i.a
    },
    "7SAS": function (t, e, a) {
        "use strict";
        var s = a("Dbhh"),
            i = a.n(s);
        i.a
    },
    8: function (t, e, a) {
        t.exports = a("Vtdi")
    },
    CnBs: function (t, e, a) {},
    Dbhh: function (t, e, a) {},
    HOkd: function (t, e, a) {
        "use strict";
        var s = a("CnBs"),
            i = a.n(s);
        i.a
    },
    HXMr: function (t, e, a) {
        "use strict";
        var s = a("WKfL"),
            i = a.n(s);
        i.a
    },
    IPBt: function (t, e, a) {},
    Rcce: function (t, e, a) {},
    RnhZ: function (t, e, a) {
        var s = {
            "./af": "K/tc",
            "./af.js": "K/tc",
            "./ar": "jnO4",
            "./ar-dz": "o1bE",
            "./ar-dz.js": "o1bE",
            "./ar-kw": "Qj4J",
            "./ar-kw.js": "Qj4J",
            "./ar-ly": "HP3h",
            "./ar-ly.js": "HP3h",
            "./ar-ma": "CoRJ",
            "./ar-ma.js": "CoRJ",
            "./ar-sa": "gjCT",
            "./ar-sa.js": "gjCT",
            "./ar-tn": "bYM6",
            "./ar-tn.js": "bYM6",
            "./ar.js": "jnO4",
            "./az": "SFxW",
            "./az.js": "SFxW",
            "./be": "H8ED",
            "./be.js": "H8ED",
            "./bg": "hKrs",
            "./bg.js": "hKrs",
            "./bm": "p/rL",
            "./bm.js": "p/rL",
            "./bn": "kEOa",
            "./bn.js": "kEOa",
            "./bo": "0mo+",
            "./bo.js": "0mo+",
            "./br": "aIdf",
            "./br.js": "aIdf",
            "./bs": "JVSJ",
            "./bs.js": "JVSJ",
            "./ca": "1xZ4",
            "./ca.js": "1xZ4",
            "./cs": "PA2r",
            "./cs.js": "PA2r",
            "./cv": "A+xa",
            "./cv.js": "A+xa",
            "./cy": "l5ep",
            "./cy.js": "l5ep",
            "./da": "DxQv",
            "./da.js": "DxQv",
            "./de": "tGlX",
            "./de-at": "s+uk",
            "./de-at.js": "s+uk",
            "./de-ch": "u3GI",
            "./de-ch.js": "u3GI",
            "./de.js": "tGlX",
            "./dv": "WYrj",
            "./dv.js": "WYrj",
            "./el": "jUeY",
            "./el.js": "jUeY",
            "./en-au": "Dmvi",
            "./en-au.js": "Dmvi",
            "./en-ca": "OIYi",
            "./en-ca.js": "OIYi",
            "./en-gb": "Oaa7",
            "./en-gb.js": "Oaa7",
            "./en-ie": "4dOw",
            "./en-ie.js": "4dOw",
            "./en-il": "czMo",
            "./en-il.js": "czMo",
            "./en-nz": "b1Dy",
            "./en-nz.js": "b1Dy",
            "./eo": "Zduo",
            "./eo.js": "Zduo",
            "./es": "iYuL",
            "./es-do": "CjzT",
            "./es-do.js": "CjzT",
            "./es-us": "Vclq",
            "./es-us.js": "Vclq",
            "./es.js": "iYuL",
            "./et": "7BjC",
            "./et.js": "7BjC",
            "./eu": "D/JM",
            "./eu.js": "D/JM",
            "./fa": "jfSC",
            "./fa.js": "jfSC",
            "./fi": "gekB",
            "./fi.js": "gekB",
            "./fo": "ByF4",
            "./fo.js": "ByF4",
            "./fr": "nyYc",
            "./fr-ca": "2fjn",
            "./fr-ca.js": "2fjn",
            "./fr-ch": "Dkky",
            "./fr-ch.js": "Dkky",
            "./fr.js": "nyYc",
            "./fy": "cRix",
            "./fy.js": "cRix",
            "./gd": "9rRi",
            "./gd.js": "9rRi",
            "./gl": "iEDd",
            "./gl.js": "iEDd",
            "./gom-latn": "DKr+",
            "./gom-latn.js": "DKr+",
            "./gu": "4MV3",
            "./gu.js": "4MV3",
            "./he": "x6pH",
            "./he.js": "x6pH",
            "./hi": "3E1r",
            "./hi.js": "3E1r",
            "./hr": "S6ln",
            "./hr.js": "S6ln",
            "./hu": "WxRl",
            "./hu.js": "WxRl",
            "./hy-am": "1rYy",
            "./hy-am.js": "1rYy",
            "./id": "UDhR",
            "./id.js": "UDhR",
            "./is": "BVg3",
            "./is.js": "BVg3",
            "./it": "bpih",
            "./it.js": "bpih",
            "./ja": "B55N",
            "./ja.js": "B55N",
            "./jv": "tUCv",
            "./jv.js": "tUCv",
            "./ka": "IBtZ",
            "./ka.js": "IBtZ",
            "./kk": "bXm7",
            "./kk.js": "bXm7",
            "./km": "6B0Y",
            "./km.js": "6B0Y",
            "./kn": "PpIw",
            "./kn.js": "PpIw",
            "./ko": "Ivi+",
            "./ko.js": "Ivi+",
            "./ky": "lgnt",
            "./ky.js": "lgnt",
            "./lb": "RAwQ",
            "./lb.js": "RAwQ",
            "./lo": "sp3z",
            "./lo.js": "sp3z",
            "./lt": "JvlW",
            "./lt.js": "JvlW",
            "./lv": "uXwI",
            "./lv.js": "uXwI",
            "./me": "KTz0",
            "./me.js": "KTz0",
            "./mi": "aIsn",
            "./mi.js": "aIsn",
            "./mk": "aQkU",
            "./mk.js": "aQkU",
            "./ml": "AvvY",
            "./ml.js": "AvvY",
            "./mn": "lYtQ",
            "./mn.js": "lYtQ",
            "./mr": "Ob0Z",
            "./mr.js": "Ob0Z",
            "./ms": "6+QB",
            "./ms-my": "ZAMP",
            "./ms-my.js": "ZAMP",
            "./ms.js": "6+QB",
            "./mt": "G0Uy",
            "./mt.js": "G0Uy",
            "./my": "honF",
            "./my.js": "honF",
            "./nb": "bOMt",
            "./nb.js": "bOMt",
            "./ne": "OjkT",
            "./ne.js": "OjkT",
            "./nl": "+s0g",
            "./nl-be": "2ykv",
            "./nl-be.js": "2ykv",
            "./nl.js": "+s0g",
            "./nn": "uEye",
            "./nn.js": "uEye",
            "./pa-in": "8/+R",
            "./pa-in.js": "8/+R",
            "./pl": "jVdC",
            "./pl.js": "jVdC",
            "./pt": "8mBD",
            "./pt-br": "0tRk",
            "./pt-br.js": "0tRk",
            "./pt.js": "8mBD",
            "./ro": "lyxo",
            "./ro.js": "lyxo",
            "./ru": "lXzo",
            "./ru.js": "lXzo",
            "./sd": "Z4QM",
            "./sd.js": "Z4QM",
            "./se": "//9w",
            "./se.js": "//9w",
            "./si": "7aV9",
            "./si.js": "7aV9",
            "./sk": "e+ae",
            "./sk.js": "e+ae",
            "./sl": "gVVK",
            "./sl.js": "gVVK",
            "./sq": "yPMs",
            "./sq.js": "yPMs",
            "./sr": "zx6S",
            "./sr-cyrl": "E+lV",
            "./sr-cyrl.js": "E+lV",
            "./sr.js": "zx6S",
            "./ss": "Ur1D",
            "./ss.js": "Ur1D",
            "./sv": "X709",
            "./sv.js": "X709",
            "./sw": "dNwA",
            "./sw.js": "dNwA",
            "./ta": "PeUW",
            "./ta.js": "PeUW",
            "./te": "XLvN",
            "./te.js": "XLvN",
            "./tet": "V2x9",
            "./tet.js": "V2x9",
            "./tg": "Oxv6",
            "./tg.js": "Oxv6",
            "./th": "EOgW",
            "./th.js": "EOgW",
            "./tl-ph": "Dzi0",
            "./tl-ph.js": "Dzi0",
            "./tlh": "z3Vd",
            "./tlh.js": "z3Vd",
            "./tr": "DoHr",
            "./tr.js": "DoHr",
            "./tzl": "z1FC",
            "./tzl.js": "z1FC",
            "./tzm": "wQk9",
            "./tzm-latn": "tT3J",
            "./tzm-latn.js": "tT3J",
            "./tzm.js": "wQk9",
            "./ug-cn": "YRex",
            "./ug-cn.js": "YRex",
            "./uk": "raLr",
            "./uk.js": "raLr",
            "./ur": "UpQW",
            "./ur.js": "UpQW",
            "./uz": "Loxo",
            "./uz-latn": "AQ68",
            "./uz-latn.js": "AQ68",
            "./uz.js": "Loxo",
            "./vi": "KSF8",
            "./vi.js": "KSF8",
            "./x-pseudo": "/X5v",
            "./x-pseudo.js": "/X5v",
            "./yo": "fzPg",
            "./yo.js": "fzPg",
            "./zh-cn": "XDpg",
            "./zh-cn.js": "XDpg",
            "./zh-hk": "SatO",
            "./zh-hk.js": "SatO",
            "./zh-tw": "kOpN",
            "./zh-tw.js": "kOpN"
        };
        function i(t) {
            var e = o(t);
            return a(e)
        }
        function o(t) {
            var e = s[t];
            if (!(e + 1)) {
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND",
                a
            }
            return e
        }
        i.keys = function () {
            return Object.keys(s)
        },
        i.resolve = o,
        t.exports = i,
        i.id = "RnhZ"
    },
    Vtdi: function (t, e, a) {
        "use strict";
        a.r(e);
        a("f3/d"),
        a("VRzm");
        var s = a("Kw5r"),
            i = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [
                    a("div", {
                        staticClass: "bg-app"
                    }, [
                        a("div", {
                            staticClass: "bg-app sticky-top pb-3"
                        }, [a("div", {
                                staticClass: "container"
                            }, [
                                "login" !== t.$route.name
                                    ? a("nav", {
                                        staticClass: "navbar navbar-expand-md navbar-dark bg-dark px-0",
                                        attrs: {
                                            id: "navigation"
                                        }
                                    }, [
                                        a("a", {
                                            staticClass: "navbar-brand d-sm-inline-block d-md-none",
                                            attrs: {
                                                href: "#"
                                            }
                                        }, [a("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                    src: t.$store.state.logo,
                                                    alt: "Logo",
                                                    width: "50"
                                                }
                                            })]),
                                        t._m(0),
                                        a("div", {
                                            staticClass: "collapse navbar-collapse",
                                            attrs: {
                                                id: "navbarNav"
                                            }
                                        }, [a("ul", {
                                                staticClass: "navbar-nav w-100"
                                            }, [
                                                a("li", {
                                                    staticClass: "nav-item"
                                                }, [a("router-link", {
                                                        staticClass: "nav-item nav-link",
                                                        attrs: {
                                                            to: {
                                                                name: "invoice"
                                                            }
                                                        }
                                                    }, [
                                                        a("i", {staticClass: "fas fa-shopping-basket icon"}),
                                                        a("span", {
                                                            staticClass: "d-md-none"
                                                        }, [t._v("Factura")])
                                                    ])], 1),
                                                a("li", {
                                                    staticClass: "nav-item"
                                                }, [a("router-link", {
                                                        staticClass: "nav-item nav-link",
                                                        attrs: {
                                                            to: {
                                                                name: "tickets"
                                                            }
                                                        }
                                                    }, [
                                                        a("i", {staticClass: "fas fa-file-invoice icon"}),
                                                        a("span", {
                                                            staticClass: "d-md-none"
                                                        }, [t._v("Tickets")])
                                                    ])], 1),
                                                a("li", {
                                                    staticClass: "nav-item"
                                                }, [
                                                    "1" === t.user.role
                                                        ? a("a", {
                                                            staticClass: "nav-item nav-link",
                                                            attrs: {
                                                                href: "#cashModalCenter",
                                                                "data-toggle": "modal",
                                                                "data-focus": "true",
                                                                "data-backdrop": "static",
                                                                "data-keyboard": "true"
                                                            }
                                                        }, [
                                                            a("i", {staticClass: "fas fa-money-bill icon"}),
                                                            a("span", {
                                                                staticClass: "d-md-none"
                                                            }, [t._v("Caja")])
                                                        ])
                                                        : t._e()
                                                ]),
                                                a("li", {
                                                    staticClass: "nav-item"
                                                }, [
                                                    "1" === t.user.role
                                                        ? a("router-link", {
                                                            staticClass: "nav-item nav-link",
                                                            attrs: {
                                                                to: {
                                                                    name: "accounts"
                                                                }
                                                            }
                                                        }, [
                                                            a("i", {staticClass: "fas fa-users icon"}),
                                                            a("span", {
                                                                staticClass: "d-md-none"
                                                            }, [t._v("Cuentas")])
                                                        ])
                                                        : t._e()
                                                ], 1),
                                                a("li", {
                                                    staticClass: "nav-item"
                                                }, [
                                                    "1" === t.user.role
                                                        ? a("router-link", {
                                                            staticClass: "nav-item nav-link",
                                                            attrs: {
                                                                to: {
                                                                    name: "settings"
                                                                }
                                                            }
                                                        }, [
                                                            a("i", {staticClass: "fas fa-sliders-h icon"}),
                                                            a("span", {
                                                                staticClass: "d-md-none"
                                                            }, [t._v("Configuración")])
                                                        ])
                                                        : t._e()
                                                ], 1),
                                                a("li", {
                                                    staticClass: "nav-item"
                                                }, [a("a", {
                                                        staticClass: "nav-item nav-link",
                                                        attrs: {
                                                            href: "#"
                                                        },
                                                        on: {
                                                            click: function (e) {
                                                                return e.stopPropagation(),
                                                                e.preventDefault(),
                                                                t.logout(e)
                                                            }
                                                        }
                                                    }, [
                                                        a("i", {staticClass: "fas fa-door-open icon"}),
                                                        a("span", {
                                                            staticClass: "d-md-none"
                                                        }, [t._v("Salir")])
                                                    ])])
                                            ])])
                                    ])
                                    : t._e()
                            ])]),
                        a("transition", {
                            attrs: {
                                name: "fade",
                                mode: "out-in"
                            }
                        }, [a("router-view")], 1)
                    ], 1),
                    a("cash")
                ], 1)
            },
            o = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("button", {
                        staticClass: "navbar-toggler",
                        attrs: {
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navbarNav",
                            "aria-controls": "navbarNav",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        }
                    }, [a("span", {staticClass: "navbar-toggler-icon"})])
                }
            ],
            r = a("yT7P"),
            n = a("EVdn"),
            c = a.n(n),
            l = (a("rGqo"), a("yt8O"), {
                setAppFullHeight: function () {
                    c()(document).ready(function () {
                        c()("#app > div").css("minHeight", window.innerHeight)
                    })
                },
                setViewFullHeight: function () {
                    c()(document).ready(function () {
                        c()("#app > div").css("height", window.innerHeight)
                    })
                },
                resetViewFullHeight: function () {
                    c()(document).ready(function () {
                        c()("#app > div").css("height", "auto")
                    })
                },
                navigationCollapse: function () {
                    c()(".navbar-nav > .nav-item").on("click", "a", function () {
                        c()("#navbarNav").collapse("hide")
                    })
                },
                isValidTax: function (t) {
                    return "" !== t["id"] && "" !== t["name"] && "" !== t["value"]
                },
                isValidUser: function (t) {
                    return "" !== t.name && "" !== t.location
                },
                isValidLocations: function (t) {
                    for (var e = !0, a = 0; a < t.length; a++) 
                        for (var s in t[a]) 
                            if ("" === t[a][s]) {
                                e = !1;
                                break
                            }
                        return e
                },
                isValidDiscounts: function (t) {
                    for (var e = !0, a = 0; a < t.length; a++) 
                        for (var s in t[a]) 
                            if ("" === t[a][s] && "detalle" !== s) {
                                e = !1;
                                break
                            }
                        return e
                },
                isValidSAT: function (t) {
                    for (var e = !0, a = 0; a < t.length; a++) 
                        for (var s in t[a]) 
                            if ("" === t[a][s]) {
                                e = !1;
                                break
                            }
                        return e
                }
            }),
            d = "ADD_TO_CART",
            u = "EDIT_FROM_CART",
            m = "REMOVE_FROM_CART",
            p = "EMPTY_CART",
            v = "SET_ADDED",
            f = "SET_MOBILE",
            h = "SET_TARGET_PRODUCT",
            g = "SET_TARGET_CLIENT",
            C = "SET_TARGET_LOCATION",
            _ = "SET_EMPLOYEE_ID",
            b = "SET_SUBSIDIARY_ID",
            y = "SET_DISCOUNT_PRODUCTS",
            x = "SET_GLOBAL_DISCOUNT",
            w = "SET_TAX",
            P = "ADD_PRODUCT_TO_LIST",
            j = "EMPTY_PRODUCT_LIST",
            k = "SET_DEFAULT_CLIENT_ID",
            M = "SET_LOCATIONS",
            T = "SET_SAT",
            I = "SET_SAT_METHODS",
            E = "SET_SAT_PAYMENTS",
            O = "SET_SAT_CFDIS",
            S = "SET_SETTINGS",
            D = "SET_LOGO",
            $ = "ADD_PAYMENT_METHOD",
            N = "REMOVE_PAYMENT_METHOD",
            A = "EMPTY_PAYMENT_METHOD",
            R = "ADD_CASH",
            q = "REMOVE_CASH",
            L = "CLEAR_CASH",
            U = "SET_USER",
            Y = "SET_ADDRESS",
            F = "SET_SEARCH_INSERT",
            V = "SET_ITEM_REPLACE",
            B = "SET_ITEM_IMAGE",
            Q = "SET_ITEM_TAX",
            z = "SET_DECIMAL_NUMBERS",
            H = "SET_NAME_SEARCH",
            X = "SET_DECIMAL_QTY",
            W = "SET_PRICE_EDITION",
            J = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "modal fade",
                    attrs: {
                        id: "cashModalCenter",
                        tabindex: "-1",
                        role: "dialog",
                        "aria-labelledby": "cashModalCenterTitle",
                        "aria-hidden": "true"
                    }
                }, [a("div", {
                        staticClass: "modal-dialog modal-dialog-centered",
                        attrs: {
                            role: "document"
                        }
                    }, [
                        a("div", {
                            staticClass: "modal-content"
                        }, [
                        t._m(0),
                            a("div", {
                                staticClass: "modal-body"
                            }, [
                            a("form", {
                                    attrs: {
                                        id: "form-cash"
                                    },
                                    on: {
                                        submit: function (e) {
                                            e.preventDefault(),
                                            t.sendCash()
                                        }
                                    }
                                }),
                                a("div", {
                                    staticClass: "form-group"
                                }, [
                                    a("label", {
                                            attrs: {
                                                    for: "cashier"}
                                            },
                                            [t._v("Caja:")]
                                        ), a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.cashier,
                                                    expression: "cashier"
                                                }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                                type: "text",
                                                id: "cashier",
                                                disabled: "",
                                                required: ""
                                            },
                                            domProps: {
                                                value: t.cashier
                                            },
                                            on: {
                                                input: function (e) {
                                                    e.target.composing || (t.cashier = e.target.value)
                                                }
                                            }
                                        })]
                                ), a(
                                    "div", {
                                    staticClass: "form-group"
                                }, [
                                    a("label", {
                                            attrs: {
                                                    for: "cash"}
                                            },
                                            [t._v("Monto:")]
                                        ), a("vNumeric", {
                                            staticClass: "form-control",
                                            attrs: {
                                                min: 0,
                                                minus: !1,
                                                id: "cash",
                                                required: ""
                                            },
                                            model: {
                                                value: t.cash,
                                                callback: function (e) {
                                                    t.cash = t._n(e)
                                                },
                                                expression: "cash"
                                            }
                                        })],
                                    1
                                ), t.error
                                    ? a("p", {
                                        staticClass: "text-error"
                                    }, [t._v(t._s(t.error))])
                                    : t._e()
                                ]),
                            t._m(1)
                        ])
                    ])])
            }, Z = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "modal-header"
                    }, [
                        a("h5", {
                            staticClass: "modal-title",
                            attrs: {
                                id: "cashModalCenterTitle"
                            }
                        }, [t._v("Ajuste caja")]),
                        a("button", {
                            staticClass: "close",
                            attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                            }
                        }, [a("span", {
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            }, [t._v("×")])])
                    ])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "modal-footer"
                    }, [
                        a("button", {
                            staticClass: "btn btn-secondary",
                            attrs: {
                                type: "button",
                                "data-dismiss": "modal"
                            }
                        }, [t._v("Cerrar")]),
                        a("button", {
                            staticClass: "btn btn-primary",
                            attrs: {
                                type: "submit",
                                form: "form-cash"
                            }
                        }, [t._v("Guardar")])
                    ])
                }
            ], K = a("2F5j"), G = a.n(K), tt = {
                name: "Cash",
                components: {
                    vNumeric: G.a
                },
                data: function () {
                    return {cash: 0, cashier: "Caja 1"}
                },
                mounted: function () {
                    var t = this;
                    c()("#cashModalCenter").on("hidden.bs.modal", function () {
                        t.dataReset()
                    })
                },
                methods: {
                    sendCash: function () {
                        this.error = "",
                        this.isValidCash()
                            ? (this.dataReset(), c()("#cashModalCenter").modal("hide"))
                            : this.error = "Existen campos vacios"
                    },
                    isValidCash: function () {
                        return this.cash > 0 && this.cashier
                    }
                }
            }, et = tt, at = a("KHd+"), st = Object(at["a"])(
                et,
                J,
                Z,
                !1,
                null,
                null,
                null
            ), it = st.exports, ot = a("L2JU"), rt = {
                name: "app",
                components: {
                    cash: it
                },
                data: function () {
                    return {msg: "Welcome to POS"}
                },
                created: function () {
                    l.setAppFullHeight()
                },
                mounted: function () {
                    try {
                        this
                            .$store
                            .commit(D, document.getElementById("company-logo").textContent),
                        document
                            .getElementById("custpage_html_fs")
                            .classList
                            .remove("text");
                        var t = this;
                        c()(document).ready(function () {
                            t
                                .$store
                                .dispatch("setView", window.innerWidth)
                        }),
                        c()(window).resize(function () {
                            t
                                .$store
                                .dispatch("setView", window.innerWidth)
                        })
                    } catch (t) {
                        console.error("Mounting error", t.message)
                    }
                },
                computed: Object(r["a"])({}, Object(ot["c"])(["user"])),
                methods: {
                    logout: function () {
                        var t = this;
                        this
                            .$store
                            .dispatch("logout")
                            .then(function () {
                                t
                                    .$router
                                    .push("login")
                            })
                    }
                }
            }, nt = rt, ct = (a("nNx0"), Object(at["a"])(nt, i, o, !1, null, null, null)), lt = ct.exports, dt = a(
                "jE9Z"
            ), ut = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [
                    a("div", [
                        a("div", {
                                staticClass: "container pt-3"
                            }, [
                                a("div", {
                                        staticClass: "user"
                                    }, [a("div", {
                                            staticClass: "row"
                                        }, [
                                            a("div", {
                                                staticClass: "col-sm-6"
                                            }, [a("img", {
                                                    staticClass: "mx-auto mb-3 mx-sm-0 mb-sm-0 d-none d-md-block",
                                                    attrs: {
                                                        src: t.$store.state.logo,
                                                        alt: "Logo",
                                                        width: "50"
                                                    }
                                                })]),
                                            a("div", {
                                                staticClass: "col-sm-6 text-sm-right"
                                            }, [
                                                a("p", {
                                                    staticClass: "text-white"
                                                }, [t._v("Usario: " + t._s(t.user.name))]),
                                                a("p", {
                                                    staticClass: "text-white"
                                                }, [t._v("Fecha: " + t._s(t.formatDate(t.currentDate)))])
                                            ])
                                        ])]),
                                a(
                                        "div", {
                                        staticClass: "ticketClient"
                                    }, [
                                        a("div", {
                                                directives: [
                                                    {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: !t.editable || t.isMobile,
                                                        expression: "!editable || isMobile"
                                                    }
                                                ]
                                            }, [
                                                a("div", {
                                                        staticClass: "form-row"
                                                    }, [
                                                        a("div", {
                                                                staticClass: "col-sm-6"
                                                            }, [
                                                                a("div", {
                                                                        staticClass: "form-group"
                                                                    }, [
                                                                        a("label", {
                                                                                staticClass: "text-white",
                                                                                attrs: {
                                                                                        for: "location"}
                                                                                },
                                                                                [t._v("Ubicación:")]
                                                                            ), a("select", {
                                                                                directives: [
                                                                                    {
                                                                                        name: "model",
                                                                                        rawName: "v-model",
                                                                                        value: t.targetLocation,
                                                                                        expression: "targetLocation"
                                                                                    }
                                                                                ],
                                                                                staticClass: "form-control",
                                                                                attrs: {
                                                                                    name: "location",
                                                                                    id: "location"
                                                                                },
                                                                                on: {
                                                                                    change: function (e) {
                                                                                        var a = Array
                                                                                            .prototype
                                                                                            .filter
                                                                                            .call(e.target.options, function (t) {
                                                                                                return t.selected
                                                                                            })
                                                                                            .map(function (t) {
                                                                                                var e = "_value" in t
                                                                                                    ? t._value
                                                                                                    : t.value;
                                                                                                return e
                                                                                            });
                                                                                        t.targetLocation = e.target.multiple
                                                                                            ? a
                                                                                            : a[0]
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                a("option", {
                                                                                    attrs: {
                                                                                        value: "",
                                                                                        selected: "",
                                                                                        disabled: "",
                                                                                        hidden: ""
                                                                                    }
                                                                                }, [t._v("Seleccione una Ubicación\n                  ")]),
                                                                                t._l(t.locations, function (e) {
                                                                                    return a("option", {
                                                                                        key: e.id,
                                                                                        domProps: {
                                                                                            value: e.id
                                                                                        }
                                                                                    }, [t._v(
                                                                                            "\n                    " + t._s(e.name) + "\n                  "
                                                                                        )])
                                                                                })
                                                                            ], 2)]
                                                                    )]
                                                            ), a("div", {
                                                                staticClass: "col-sm-6"
                                                            }, [a("div", {
                                                                    staticClass: "form-group"
                                                                }, [
                                                                    a("label", {
                                                                        staticClass: "text-white"
                                                                    }, [t._v("Cliente:")]),
                                                                    a("v-select", {
                                                                        attrs: {
                                                                            options: t.options,
                                                                            placeholder: "Seleccione un cliente"
                                                                        },
                                                                        model: {
                                                                            value: t.targetClient,
                                                                            callback: function (e) {
                                                                                t.targetClient = e
                                                                            },
                                                                            expression: "targetClient"
                                                                        }
                                                                    }),
                                                                    a("p", {
                                                                        staticClass: "text-right"
                                                                    }, [
                                                                        a("button", {
                                                                            staticClass: "btn btn-link text-white",
                                                                            attrs: {
                                                                                type: "button"
                                                                            },
                                                                            on: {
                                                                                click: function (e) {
                                                                                    t.toggleClient(!0)
                                                                                }
                                                                            }
                                                                        }, [
                                                                            a("i", {staticClass: "fas fa-plus mr-2"}),
                                                                            t._v(" Cliente\n                    nuevo\n                  ")
                                                                        ]),
                                                                        t.isMobile
                                                                            ? a("button", {
                                                                                staticClass: "btn btn-link text-white",
                                                                                attrs: {
                                                                                    type: "button",
                                                                                    "data-toggle": "modal",
                                                                                    "data-target": "#clientModalCenter"
                                                                                }
                                                                            }, [
                                                                                a("i", {staticClass: "fas fa-eye mr-2"}),
                                                                                t._v("\n                    Mostrar datos\n                  ")
                                                                            ])
                                                                            : a("a", {
                                                                                staticClass: "btn btn-link text-white",
                                                                                attrs: {
                                                                                    "data-toggle": "collapse",
                                                                                    href: "#collapseClient",
                                                                                    role: "button",
                                                                                    id: "linkCollapseClient",
                                                                                    "aria-expanded": "false",
                                                                                    "aria-controls": "collapseClient"
                                                                                }
                                                                            }, [a("i", {staticClass: "fas fa-eye mr-2"})])
                                                                    ])
                                                                ], 1)])]
                                                    )]
                                            )]
                                    ), t.isMobile
                                        ? t._e()
                                        : a("div", {
                                            staticClass: "collapse mb-3",
                                            attrs: {
                                                id: "collapseClient"
                                            }
                                        }, [a("div", {
                                                staticClass: "card card-body"
                                            }, [a("client", {
                                                    attrs: {
                                                        editable: t.editable,
                                                        targetClient: t.getClient,
                                                        newClient: t.isNewClient
                                                    },
                                                    on: {
                                                        cancelClient: t.cancelClient,
                                                        saveClient: t.addClient
                                                    }
                                                })], 1)])
                                    ]
                            )]
                    ), a(
                    "div",
                    {
                            directives: [
                                {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.editable,
                                    expression: "!editable"
                                }
                            ],
                            staticClass: "sticky-top pt-1 pb-3 bg-app box-shadow-search"
                        },
                    [
                        a("div", {
                                staticClass: "container"
                            }, [
                                a(
                                    "label",
                                    {
                                        staticClass: "text-white",
                                        attrs: {
                                                for: "search-product"}
                                        },
                                        [t._v("Nombre o código del producto: ")]
                                    ),
                                    t.isMobile
                                        ? t._e()
                                        : a("a", {
                                            staticClass: "btn btn-link float-right text-white py-0",
                                            attrs: {
                                                "data-toggle": "modal",
                                                "data-target": "#cartModalCenter",
                                                role: "button"
                                            }
                                        }, [
                                            a("i", {staticClass: "fas fa-shopping-cart"}),
                                            t.cartCount
                                                ? a("span", {
                                                    staticClass: "badge badge-secondary ml-2"
                                                }, [t._v(t._s(t.cartCount))])
                                                : t._e()
                                        ]),
                                    a("div", {
                                        staticClass: "form-row"
                                    }, [
                                        a("div", {
                                                staticClass: "col-md-3 col-lg-2"
                                            }, [
                                                a("div", {
                                                        staticClass: "form-group"
                                                    }, [
                                                        a("label", {
                                                                staticClass: "sr-only",
                                                                attrs: {
                                                                        for: "itemType"}
                                                                },
                                                                [t._v("Tipo de producto")]
                                                            ), a("select", {
                                                                directives: [
                                                                    {
                                                                        name: "model",
                                                                        rawName: "v-model",
                                                                        value: t.searchType,
                                                                        expression: "searchType"
                                                                    }
                                                                ],
                                                                staticClass: "form-control",
                                                                attrs: {
                                                                    id: "itemType"
                                                                },
                                                                on: {
                                                                    change: function (e) {
                                                                        var a = Array
                                                                            .prototype
                                                                            .filter
                                                                            .call(e.target.options, function (t) {
                                                                                return t.selected
                                                                            })
                                                                            .map(function (t) {
                                                                                var e = "_value" in t
                                                                                    ? t._value
                                                                                    : t.value;
                                                                                return e
                                                                            });
                                                                        t.searchType = e.target.multiple
                                                                            ? a
                                                                            : a[0]
                                                                    }
                                                                }
                                                            }, [
                                                                a("option", {
                                                                    attrs: {
                                                                        value: "inventory"
                                                                    }
                                                                }, [t._v("Inventario")]),
                                                                a("option", {
                                                                    attrs: {
                                                                        value: "service"
                                                                    }
                                                                }, [t._v("Servicio")]),
                                                                a("option", {
                                                                    attrs: {
                                                                        value: "kit"
                                                                    }
                                                                }, [t._v("KIT / Package")])
                                                            ])]
                                                    )]
                                            ), a("div", {
                                                staticClass: "col-md-9 col-lg-10"
                                            }, [a("input", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.query,
                                                            expression: "query"
                                                        }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        type: "text",
                                                        id: "search-product",
                                                        disabled: !t.getClient || !t.getLocation,
                                                        placeholder: "XXXXX-XXXXX",
                                                        title: "Presione ENTER para buscar"
                                                    },
                                                    domProps: {
                                                        value: t.query
                                                    },
                                                    on: {
                                                        keyup: function (e) {
                                                            if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) 
                                                                return null;
                                                            t.searchProduct()
                                                        },
                                                        input: function (e) {
                                                            e.target.composing || (t.query = e.target.value)
                                                        }
                                                    }
                                                })])]
                                    )]
                                )]),
                        a(
                            "div",
                            {
                                directives: [
                                    {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !t.editable,
                                        expression: "!editable"
                                    }
                                ],
                                staticClass: "bg-light"
                            },
                            [a("transition-group", {
                                    attrs: {
                                        name: "fade",
                                        mode: "in-out"
                                    }
                                }, [
                                    a("div", {
                                        directives: [
                                            {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !t.query && !t.getFilteredProducts.length,
                                                expression: "!query && !getFilteredProducts.length"
                                            }
                                        ],
                                        key: "initial"
                                    }, [a("div", {
                                            staticClass: "d-flex align-items-center listProduct-message"
                                        }, [a("div", {
                                                staticClass: "jumbotron text-center w-100 bg-light"
                                            }, [
                                                a("h1", {
                                                    staticClass: "display-4"
                                                }, [a("i", {staticClass: "fas fa-shopping-basket text-muted"})]),
                                                a(
                                                    "p",
                                                    {
                                                        staticClass: "lead text-muted"
                                                    },
                                                    [t._v("Busca los productos por nombre, descripción ó código\n              de barra")]
                                                )
                                            ])])]),
                                    a("div", {
                                        directives: [
                                            {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.getFilteredProducts.length,
                                                expression: "getFilteredProducts.length"
                                            }
                                        ],
                                        key: "result",
                                        staticClass: "container py-3 listProduct-result"
                                    }, [a("listProducts", {
                                            attrs: {
                                                products: t.getFilteredProducts
                                            }
                                        })], 1),
                                    a("div", {
                                        directives: [
                                            {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !t.getFilteredProducts.length,
                                                expression: "!getFilteredProducts.length"
                                            }
                                        ],
                                        key: "empty"
                                    }, [a("div", {
                                            staticClass: "d-flex align-items-center listProduct-message"
                                        }, [a("div", {
                                                staticClass: "jumbotron text-center w-100 bg-light"
                                            }, [
                                                a("h1", {
                                                    staticClass: "display-4"
                                                }, [a("i", {staticClass: "fas fa-shopping-basket text-muted"})]),
                                                a("p", {
                                                    staticClass: "lead text-muted"
                                                }, [t._v("No se encontraron resultados")])
                                            ])])])
                                ])],
                            1
                        ),
                        a("div", {
                            class: [
                                {
                                    "accordion-laptop": !t.isMobile
                                },
                                "fixed-bottom"
                            ]
                        }, [a("div", {
                                staticClass: "card"
                            }, [
                                !t.editable && t.isMobile
                                    ? a("div", {
                                        staticClass: "card-header",
                                        attrs: {
                                            id: "headingInvoiceDetail"
                                        }
                                    }, [t._m(0)])
                                    : t._e(),
                                a("div", {
                                    class: [
                                        {
                                            collapse: t.isMobile
                                        }
                                    ],
                                    attrs: {
                                        id: "collapseInvoiceDetail"
                                    }
                                }, [a("div", {
                                        staticClass: "card-body"
                                    }, [
                                        a("h4", [t._v("Montos")]),
                                        a("invoiceDetail")
                                    ], 1)])
                            ])]),
                        t.isMobile
                            ? a("div", {
                                staticClass: "modal fade",
                                attrs: {
                                    id: "clientModalCenter",
                                    tabindex: "-1",
                                    role: "dialog",
                                    "aria-labelledby": "clientModalCenterTitle",
                                    "aria-hidden": "true"
                                }
                            }, [a("div", {
                                    staticClass: "modal-dialog modal-dialog-centered",
                                    attrs: {
                                        role: "document"
                                    }
                                }, [a("div", {
                                        staticClass: "modal-content"
                                    }, [
                                        t._m(1),
                                        a("div", {
                                            staticClass: "modal-body"
                                        }, [a("client", {
                                                attrs: {
                                                    editable: t.editable,
                                                    targetClient: t.getClient,
                                                    newClient: t.isNewClient
                                                },
                                                on: {
                                                    cancelClient: t.cancelClient,
                                                    saveClient: t.addClient
                                                }
                                            })], 1),
                                        t.editable
                                            ? t._e()
                                            : a("div", {
                                                staticClass: "modal-footer"
                                            }, [a("button", {
                                                    staticClass: "btn btn-secondary",
                                                    attrs: {
                                                        type: "button",
                                                        "data-dismiss": "modal"
                                                    }
                                                }, [t._v("Cerrar")])])
                                    ])])])
                            : t._e(),
                        void 0 !== t.targetProduct
                            ? a("div", {
                                staticClass: "modal fade",
                                attrs: {
                                    id: "productModalCenter",
                                    tabindex: "-1",
                                    role: "dialog",
                                    "aria-labelledby": "productModalCenterTitle",
                                    "aria-hidden": "true"
                                }
                            }, [a("div", {
                                    staticClass: "modal-dialog modal-lg modal-dialog-centered",
                                    attrs: {
                                        role: "document"
                                    }
                                }, [a("div", {
                                        staticClass: "modal-content"
                                    }, [
                                        a("div", {
                                            staticClass: "modal-header"
                                        }, [
                                            a("h5", {
                                                staticClass: "modal-title"
                                            }, [t._v(t._s(t.targetProduct.name))]),
                                            t._m(2)
                                        ]),
                                        a("div", {
                                            staticClass: "modal-body"
                                        }, [a("detailProduct", {
                                                attrs: {
                                                    product: t.targetProduct,
                                                    index: t.indexProduct
                                                }
                                            })], 1)
                                    ])])])
                            : t._e(),
                        a("div", {
                            staticClass: "modal fade",
                            attrs: {
                                id: "cartModalCenter",
                                tabindex: "-1",
                                role: "dialog",
                                "aria-labelledby": "cartModalCenterTitle",
                                "aria-hidden": "true"
                            }
                        }, [a("div", {
                                staticClass: "modal-dialog modal-lg modal-dialog-centered",
                                attrs: {
                                    role: "document"
                                }
                            }, [a("div", {
                                    staticClass: "modal-content"
                                }, [
                                    t._m(3),
                                    a("div", {
                                        staticClass: "modal-body"
                                    }, [
                                        t.cartCount
                                            ? a("div", [a("tableProduct", {
                                                    attrs: {
                                                        products: t.cart,
                                                        checkout: !1
                                                    },
                                                    on: {
                                                        indexProduct: t.setIndexProduct
                                                    }
                                                })], 1)
                                            : a("div", [a("p", [t._v("No hay productos en el carrito de compras")])])
                                    ]),
                                    t.editable
                                        ? t._e()
                                        : a("div", {
                                            staticClass: "modal-footer"
                                        }, [a("button", {
                                                staticClass: "btn btn-secondary",
                                                attrs: {
                                                    type: "button",
                                                    "data-dismiss": "modal"
                                                }
                                            }, [t._v("Cerrar")])])
                                ])])]),
                        a("location", {
                            attrs: {
                                url: t.urls.item
                            }
                        })
                    ],
                    1
                )},
            mt = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("h5", {
                        staticClass: "mb-0"
                    }, [a("a", {
                            staticClass: "btn btn-link d-block text-left",
                            attrs: {
                                id: "linkCollapseInvoiceDetail",
                                "data-toggle": "collapse",
                                href: "#collapseInvoiceDetail",
                                role: "button",
                                "aria-expanded": "false",
                                "aria-controls": "collapseInvoiceDetail"
                            }
                        }, [
                            t._v("\n            Detalle Factura "),
                            a("i", {staticClass: "fas fa-angle-up float-right mt-1"})
                        ])])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "modal-header"
                    }, [
                        a("h5", {
                            staticClass: "modal-title",
                            attrs: {
                                id: "clientModalCenterTitle"
                            }
                        }, [t._v("Datos del cliente")]),
                        a("button", {
                            staticClass: "close",
                            attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                            }
                        }, [a("span", {
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            }, [t._v("×")])])
                    ])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("button", {
                        staticClass: "close",
                        attrs: {
                            type: "button",
                            "data-dismiss": "modal",
                            "aria-label": "Close"
                        }
                    }, [a("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }, [t._v("×")])])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "modal-header"
                    }, [
                        a("h5", {
                            staticClass: "modal-title"
                        }, [t._v("Carrito")]),
                        a("button", {
                            staticClass: "close",
                            attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                            }
                        }, [a("span", {
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            }, [t._v("×")])])
                    ])
                }
            ],
            pt = (a("Z2Ku"), a("L9s1"), a("dRSK"), function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [
                    a("form", {
                        attrs: {
                            id: "form-client"
                        },
                        on: {
                            submit: function (e) {
                                e.preventDefault(),
                                t.createClient()
                            }
                        }
                    }, [
                        a("div", {
                            staticClass: "form-row"
                        }, [
                            a("div", {
                                staticClass: "form-group col-sm-6"
                            }, [
                                a("label", {
                                        attrs: {
                                                for: "names"}
                                        },
                                        [t._v("Nombres:")]
                                    ), a("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.client.names,
                                                expression: "client.names"
                                            }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                            type: "text",
                                            id: "names",
                                            required: "",
                                            readonly: !t.editable
                                        },
                                        domProps: {
                                            value: t.client.names
                                        },
                                        on: {
                                            input: function (e) {
                                                e.target.composing || t.$set(t.client, "names", e.target.value)
                                            }
                                        }
                                    })]
                            ), a("div", {
                                staticClass: "form-group col-sm-6"
                            }, [
                                a("label", {
                                        attrs: {
                                                for: "lastNames"}
                                        },
                                        [t._v("Apellidos:")]
                                    ), a("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.client.lastNames,
                                                expression: "client.lastNames"
                                            }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                            type: "text",
                                            id: "lastNames",
                                            required: "",
                                            readonly: !t.editable
                                        },
                                        domProps: {
                                            value: t.client.lastNames
                                        },
                                        on: {
                                            input: function (e) {
                                                e.target.composing || t.$set(t.client, "lastNames", e.target.value)
                                            }
                                        }
                                    })]
                            )]),
                        a("div", {
                            staticClass: "form-group"
                        }, [
                            a("label", {
                                    attrs: {
                                            for: "email"}
                                    },
                                    [t._v("Correo:")]
                                ), a("input", {
                                    directives: [
                                        {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.client.email,
                                            expression: "client.email"
                                        }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                        type: "email",
                                        id: "email",
                                        required: "",
                                        readonly: !t.editable
                                    },
                                    domProps: {
                                        value: t.client.email
                                    },
                                    on: {
                                        input: function (e) {
                                            e.target.composing || t.$set(t.client, "email", e.target.value)
                                        }
                                    }
                                })]
                        ), a(
                            "div", {
                            staticClass: "form-group"
                        }, [
                            a("label", {
                                    attrs: {
                                            for: "rfc"}
                                    },
                                    [t._v("RFC:")]
                                ), a("input", {
                                    directives: [
                                        {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.client.rfc,
                                            expression: "client.rfc"
                                        }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                        type: "text",
                                        id: "rfc",
                                        required: "",
                                        readonly: !t.editable
                                    },
                                    domProps: {
                                        value: t.client.rfc
                                    },
                                    on: {
                                        input: function (e) {
                                            e.target.composing || t.$set(t.client, "rfc", e.target.value)
                                        }
                                    }
                                })]
                        ), !t.newClient && t.targetClient
                            ? a("div", [
                                a("div", {
                                    staticClass: "form-group"
                                }, [
                                    a("label", {
                                            attrs: {
                                                    for: "address2"}
                                            },
                                            [t._v("Dirección 1:")]
                                        ), a("select", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model.number",
                                                    value: t.addressIndex,
                                                    expression: "addressIndex",
                                                    modifiers: {
                                                        number: !0
                                                    }
                                                }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                                name: "address",
                                                id: "address2",
                                                required: ""
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = Array
                                                        .prototype
                                                        .filter
                                                        .call(e.target.options, function (t) {
                                                            return t.selected
                                                        })
                                                        .map(function (e) {
                                                            var a = "_value" in e
                                                                ? e._value
                                                                : e.value;
                                                            return t._n(a)
                                                        });
                                                    t.addressIndex = e.target.multiple
                                                        ? a
                                                        : a[0]
                                                }
                                            }
                                        }, [
                                            a("option", {
                                                attrs: {
                                                    value: "",
                                                    disabled: "",
                                                    selected: "",
                                                    hidden: ""
                                                }
                                            }, [t._v("Seleccione una dirección")]),
                                            t._l(t.targetClient.address, function (e, s) {
                                                return a("option", {
                                                    key: s,
                                                    domProps: {
                                                        value: s
                                                    }
                                                }, [t._v(t._s(e.address1) + "\n          ")])
                                            })
                                        ], 2)]
                                ), a("div", {
                                    staticClass: "form-row"
                                }, [
                                a("div", {
                                            staticClass: "col-sm-4 form-group"
                                        }, [
                                            a("label", {
                                                    attrs: {
                                                            for: "state1"}
                                                    },
                                                    [t._v("Estado:")]
                                                ), a("input", {
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        type: "text",
                                                        id: "state1",
                                                        required: "",
                                                        readonly: !t.editable
                                                    },
                                                    domProps: {
                                                        value: "" !== t.addressIndex
                                                            ? t
                                                                .targetClient
                                                                .address[t.addressIndex]
                                                                .state
                                                            : ""
                                                    }
                                                })]
                                        ), a("div", {
                                            staticClass: "col-sm-4 form-group"
                                        }, [
                                            a("label", {
                                                    attrs: {
                                                            for: "country1"}
                                                    },
                                                    [t._v("País:")]
                                                ), a("input", {
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        type: "text",
                                                        id: "country1",
                                                        required: "",
                                                        readonly: !t.editable
                                                    },
                                                    domProps: {
                                                        value: "" !== t.addressIndex
                                                            ? t
                                                                .targetClient
                                                                .address[t.addressIndex]
                                                                .country
                                                            : ""
                                                    }
                                                })]
                                        ), a("div", {
                                            staticClass: "col-sm-4 form-group"
                                        }, [
                                            a("label", {
                                                    attrs: {
                                                            for: "zipCode1"}
                                                    },
                                                    [t._v("Código ZIP:")]
                                                ), a("input", {
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        type: "text",
                                                        id: "zipCode1",
                                                        required: "",
                                                        readonly: !t.editable
                                                    },
                                                    domProps: {
                                                        value: "" !== t.addressIndex
                                                            ? t
                                                                .targetClient
                                                                .address[t.addressIndex]
                                                                .zipcode
                                                            : ""
                                                    }
                                                })]
                                        )])]
                            )
                            : a("div", [
                    a("div", {
                                        staticClass: "form-group"
                                    }, [
                                        a("label", {
                                                attrs: {
                                                        for: "address"}
                                                },
                                                [t._v("Dirección 1:")]
                                            ), a("input", {
                                                directives: [
                                                    {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: t.client.address,
                                                        expression: "client.address"
                                                    }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                    type: "text",
                                                    id: "address",
                                                    required: "",
                                                    readonly: !t.editable
                                                },
                                                domProps: {
                                                    value: t.client.address
                                                },
                                                on: {
                                                    input: function (e) {
                                                        e.target.composing || t.$set(t.client, "address", e.target.value)
                                                    }
                                                }
                                            })]
                                    ), a("div", {
                                        staticClass: "form-row"
                                    }, [
                                    a("div", {
                                                staticClass: "col-sm-4 form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "state"}
                                                        },
                                                        [t._v("Estado:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.client.state,
                                                                expression: "client.state"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "text",
                                                            id: "state",
                                                            required: "",
                                                            readonly: !t.editable
                                                        },
                                                        domProps: {
                                                            value: t.client.state
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || t.$set(t.client, "state", e.target.value)
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "col-sm-4 form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "country"}
                                                        },
                                                        [t._v("País:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.client.country,
                                                                expression: "client.country"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "text",
                                                            id: "country",
                                                            required: "",
                                                            readonly: !t.editable
                                                        },
                                                        domProps: {
                                                            value: t.client.country
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || t.$set(t.client, "country", e.target.value)
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "col-sm-4 form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "zipCode"}
                                                        },
                                                        [t._v("Código ZIP:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.client.zipcode,
                                                                expression: "client.zipcode"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "text",
                                                            id: "zipCode",
                                                            required: "",
                                                            readonly: !t.editable
                                                        },
                                                        domProps: {
                                                            value: t.client.zipcode
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || t.$set(t.client, "zipcode", e.target.value)
                                                            }
                                                        }
                                                    })]
                                            )])]
                                ), a("div", {
                                    staticClass: "form-row"
                                }, [
                                a(
                                        "div", {
                                            staticClass: "col-sm-4 form-group"
                                        }, [
                                            a("label", {
                                                    attrs: {
                                                            for: "metodoPago"}
                                                    },
                                                    [t._v("Método de Pago")]
                                                ), a("select", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.client.payment,
                                                            expression: "client.payment"
                                                        }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        id: "metodoPago",
                                                        required: "",
                                                        disabled: !t.editable
                                                    },
                                                    on: {
                                                        change: function (e) {
                                                            var a = Array
                                                                .prototype
                                                                .filter
                                                                .call(e.target.options, function (t) {
                                                                    return t.selected
                                                                })
                                                                .map(function (t) {
                                                                    var e = "_value" in t
                                                                        ? t._value
                                                                        : t.value;
                                                                    return e
                                                                });
                                                            t.$set(
                                                                t.client,
                                                                "payment",
                                                                e.target.multiple
                                                                    ? a
                                                                    : a[0]
                                                            )
                                                        }
                                                    }
                                                }, [
                                                    a("option", {
                                                        attrs: {
                                                            value: "",
                                                            selected: "",
                                                            disabled: "",
                                                            hidden: ""
                                                        }
                                                    }, [t._v("Seleccióne un método de pago")]),
                                                    t._l(t.satPayments, function (e, s) {
                                                        return a("option", {
                                                            key: s,
                                                            domProps: {
                                                                value: e.id,
                                                                selected: t.client.payment === e.id
                                                            }
                                                        }, [t._v(t._s(e.name) + "\n          ")])
                                                    })
                                                ], 2)]
                                        ), a("div", {
                                            staticClass: "col-sm-4 form-group"
                                        }, [
                                            a("label", {
                                                    attrs: {
                                                            for: "formaPago"}
                                                    },
                                                    [t._v("Forma de Pago:")]
                                                ), a("select", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.client.method,
                                                            expression: "client.method"
                                                        }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        id: "formaPago",
                                                        required: "",
                                                        disabled: !t.editable
                                                    },
                                                    on: {
                                                        change: function (e) {
                                                            var a = Array
                                                                .prototype
                                                                .filter
                                                                .call(e.target.options, function (t) {
                                                                    return t.selected
                                                                })
                                                                .map(function (t) {
                                                                    var e = "_value" in t
                                                                        ? t._value
                                                                        : t.value;
                                                                    return e
                                                                });
                                                            t.$set(
                                                                t.client,
                                                                "method",
                                                                e.target.multiple
                                                                    ? a
                                                                    : a[0]
                                                            )
                                                        }
                                                    }
                                                }, [
                                                    a("option", {
                                                        attrs: {
                                                            value: "",
                                                            selected: "",
                                                            disabled: "",
                                                            hidden: ""
                                                        }
                                                    }, [t._v("Seleccióne una forma de pago")]),
                                                    t._l(t.satMethods, function (e, s) {
                                                        return a("option", {
                                                            key: s,
                                                            domProps: {
                                                                value: e.id,
                                                                selected: t.client.method == e.id
                                                            }
                                                        }, [t._v(t._s(e.name) + "\n          ")])
                                                    })
                                                ], 2)]
                                        ), a("div", {
                                            staticClass: "col-sm-4 form-group"
                                        }, [
                                            a("label", {
                                                    attrs: {
                                                            for: "cfdi"}
                                                    },
                                                    [t._v("Uso de CFDI")]
                                                ), a("select", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.client.cfdi,
                                                            expression: "client.cfdi"
                                                        }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                        name: "cfdi",
                                                        id: "cfdi",
                                                        required: "",
                                                        disabled: !t.editable
                                                    },
                                                    on: {
                                                        change: function (e) {
                                                            var a = Array
                                                                .prototype
                                                                .filter
                                                                .call(e.target.options, function (t) {
                                                                    return t.selected
                                                                })
                                                                .map(function (t) {
                                                                    var e = "_value" in t
                                                                        ? t._value
                                                                        : t.value;
                                                                    return e
                                                                });
                                                            t.$set(
                                                                t.client,
                                                                "cfdi",
                                                                e.target.multiple
                                                                    ? a
                                                                    : a[0]
                                                            )
                                                        }
                                                    }
                                                }, [
                                                    a("option", {
                                                        attrs: {
                                                            value: "",
                                                            selected: "",
                                                            disabled: "",
                                                            hidden: ""
                                                        }
                                                    }, [t._v("Seleccióne CFDI")]),
                                                    t._l(t.satCFDI, function (e, s) {
                                                        return a("option", {
                                                            key: s,
                                                            domProps: {
                                                                value: e.id,
                                                                selected: t.client.cfdi == e.id
                                                            }
                                                        }, [t._v(t._s(e.name) + "\n          ")])
                                                    })
                                                ], 2)]
                                        )]), t.editable
                                            ? a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("button", {
                                                    staticClass: "btn btn-danger mr-2",
                                                    attrs: {
                                                        type: "button"
                                                    },
                                                    on: {
                                                        click: function (e) {
                                                            t.cancelClient()
                                                        }
                                                    }
                                                }, [t._v("Cancelar")]),
                                                a("button", {
                                                    staticClass: "btn btn-primary",
                                                    attrs: {
                                                        type: "submit"
                                                    }
                                                }, [t._v("Registrar")])
                                            ])
                                            : t._e(),
                                    t.error
                                        ? a("div", [a("p", {
                                                staticClass: "text-danger"
                                            }, [t._v(t._s(t.error))])])
                                        : t._e(),
                                    t.loading
                                        ? a("loader")
                                        : t._e()
                                    ],
                                1
                            )])}
                ), vt = [], ft = (a("hhXQ"), a("RW0V"), a("vDqi")), ht = a.n(ft), gt = {
                    name: "Client",
                    props: {
                        editable: {
                            type: Boolean,
                            default: !1
                        },
                        targetClient: {
                            type: Object
                        },
                        newClient: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            client: {
                                names: "",
                                lastNames: "",
                                email: "",
                                state: "",
                                country: "",
                                address: "",
                                zipcode: "",
                                rfc: "",
                                payment: "",
                                method: "",
                                cfdi: ""
                            },
                            addressIndex: "",
                            url: ""
                        }
                    },
                    watch: {
                        targetClient: function (t) {
                            this.parseClient(),
                            t && 1 === t.address.length
                                ? this.addressIndex = 0
                                : this.addressIndex = ""
                        },
                        newClient: function (t) {
                            t && (this.cleanFields(), this.addressIndex = "")
                        },
                        addressIndex: function (t) {
                            this
                                .$store
                                .commit(Y, t)
                        }
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_customers_sl",
                            s = "customdeploy_efx_pos_vue_customers_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e
                            })
                    },
                    mounted: function () {
                        var t = this;
                        this.parseClient(),
                        setTimeout(function () {
                            t.addressIndex = t.$store.state.address
                        }, 1e3)
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])(
                        ["subsidiaryId", "satMethods", "satPayments", "satCFDI"]
                    )),
                    methods: {
                        parseClient: function () {
                            var t = this;
                            this.targetClient && Object
                                .keys(this.client)
                                .forEach(function (e) {
                                    t
                                        .targetClient
                                        .hasOwnProperty(e) && t
                                        .client
                                        .hasOwnProperty(e) && (t.client[e] = t.targetClient[e])
                                })
                        },
                        createClient: function () {
                            var t = this,
                                e = this.client;
                            t.error = "";
                            var a = {
                                custparam_mode: "create",
                                custparam_subsidiary: t.subsidiaryId
                            };
                            t.isValidClient()
                                ? (
                                    t.loading = !0,
                                    ht.a.post(t.url, e, {params: a}).then(function (e) {
                                        if (2 === e.data.StatusCode) {
                                            console.log(e.data.Message);
                                            var a = Object.values(e.data.Result);
                                            a.forEach(function (e) {
                                                t.$emit("saveClient", e)
                                            }),
                                            t.addressIndex = 0
                                        } else 
                                            3 === e.data.StatusCode && (
                                                console.error(e.data.Message),
                                                t.error = e.data.Message
                                            )
                                    }). finally(function () {
                                        t.loading = !1
                                    })
                                )
                                : t.error = "Existen campos vacios"
                        },
                        cleanFields: function () {
                            var t = this;
                            Object
                                .keys(this.client)
                                .forEach(function (e) {
                                    t.client[e] = ""
                                })
                        },
                        cancelClient: function () {
                            this.$emit("cancelClient"),
                            this.targetClient && this.parseClient()
                        },
                        isValidClient: function () {
                            var t = !0;
                            for (var e in this.client) 
                                if ("" === this.client[e]) {
                                    t = !1;
                                    break
                                }
                            return t
                        }
                    }
                }, Ct = gt, _t = Object(at["a"])(Ct, pt, vt, !1, null, null, null), bt = _t.exports, yt = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [
                        a("div", {
                            staticClass: "row"
                        }, [
                            t._m(0),
                            a("div", {
                                staticClass: "col"
                            }, [a("p", {
                                    staticClass: "text-right"
                                }, [t._v(t._s(t._f("round")(t.getSubTotal)))])])
                        ]),
                        a("div", {
                            staticClass: "row"
                        }, [
                            t._m(1),
                            a("div", {
                                staticClass: "col"
                            }, [a("p", {
                                    staticClass: "text-right"
                                }, [t._v(t._s(t._f("round")(t.getDiscount)))])])
                        ]),
                        a("div", {
                            staticClass: "row"
                        }, [
                            t._m(2),
                            a("div", {
                                staticClass: "col"
                            }, [a("p", {
                                    staticClass: "text-right"
                                }, [t._v(t._s(t._f("round")(t.getTaxes)))])])
                        ]),
                        a("hr"),
                        a("div", {
                            staticClass: "row"
                        }, [
                            t._m(3),
                            a("div", {
                                staticClass: "col"
                            }, [a("p", {
                                    staticClass: "text-right"
                                }, [t._v(t._s(t._f("round")(t.getTotalInvoice)))])])
                        ]),
                        t.cashNeeded < 0
                            ? a("div", {
                                staticClass: "row"
                            }, [
                                t._m(4),
                                a("div", {
                                    staticClass: "col"
                                }, [a("p", {
                                        staticClass: "text-right"
                                    }, [t._v(t._s(t._f("round")(Math.abs(t.cashNeeded))))])])
                            ])
                            : t._e(),
                        t.showButton
                            ? a("div", [
                                a("button", {
                                    staticClass: "btn btn-primary btn-block",
                                    attrs: {
                                        disabled: t.isEmptyCart,
                                        type: "button"
                                    },
                                    on: {
                                        click: function (e) {
                                            t.createInvoice()
                                        }
                                    }
                                }, [t._v("\n      Checkout\n    ")]),
                                a("button", {
                                    staticClass: "btn btn-danger btn-block",
                                    attrs: {
                                        disabled: t.isEmptyCart,
                                        type: "button"
                                    },
                                    on: {
                                        click: function (e) {
                                            t.emptyCart()
                                        }
                                    }
                                }, [t._v("Vaciar\n    ")])
                            ])
                            : t._e()
                    ])
                }, xt = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col"
                        }, [a("p", [t._v("+ Subtotal:")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col"
                        }, [a("p", [t._v("- Descuentos:")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col"
                        }, [a("p", [t._v("+ Impuestos")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col"
                        }, [a("p", [t._v("Total")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col"
                        }, [a("p", [t._v("- Cambio")])])
                    }
                ], wt = {
                    name: "DetailInvoice",
                    props: {
                        showButton: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: Object(r["a"])({
                        getSubTotal: function () {
                            return this
                                .$store
                                .getters
                                .getCartAmount("subtotal")
                        },
                        getDiscount: function () {
                            return this
                                .$store
                                .getters
                                .getCartAmount("discount")
                        },
                        getTaxes: function () {
                            return this
                                .$store
                                .getters
                                .getCartAmount("tax")
                        },
                        getTotalInvoice: function () {
                            return this
                                .$store
                                .getters
                                .getCartAmount("total")
                        },
                        isEmptyCart: function () {
                            return 0 === this.$store.getters.getCartItemsCount
                        },
                        isValidInvoice: function () {
                            return this.$store.getters.isValidClient && this.$store.getters.isValidLocation
                        },
                        isValidAddress: function () {
                            return this.$store.getters.isValidAddress
                        },
                        cashNeeded: function () {
                            return this.$store.getters.getCashNeeded
                        }
                    }, Object(ot["c"])(["isMobile"])),
                    methods: {
                        createInvoice: function () {
                            this.isValidInvoice
                                ? this.isValidAddress
                                    ? this
                                        .$router
                                        .push("checkout")
                                    : (
                                        alert("Debe seleccionar una direccion del usuario"),
                                        this.isMobile
                                            ? c()("#clientModalCenter").modal("show")
                                            : (c()("#collapseClient").collapse("show"), setTimeout(
                                                this.scrollAnimation("#collapseClient"),
                                                100
                                            ))
                                    )
                                : (
                                    alert("Debe seleccionar un ubicacion y un usuario"),
                                    setTimeout(this.scrollAnimation(".ticketClient", 64), 100)
                                )
                        },
                        emptyCart: function () {
                            confirm("Estas seguro deseas vaciar el carrito de compras") && this
                                .$store
                                .dispatch("emptyCart")
                        }
                    }
                }, Pt = wt, jt = Object(at["a"])(Pt, yt, xt, !1, null, null, null), kt = jt.exports, Mt = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("transition-group", {
                            staticClass: "row",
                            attrs: {
                                name: "fade",
                                mode: "out-in",
                                tag: "div"
                            }
                        }, t._l(t.products, function (t) {
                            return a("div", {
                                key: t.id,
                                staticClass: "col-sm-7 col-lg-4 mx-auto"
                            }, [a("card-product", {
                                    attrs: {
                                        product: t
                                    }
                                })], 1)
                        }))], 1)
                }, Tt = [], It = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "card mb-2 cardProduct"
                    }, [
                        a("img", {
                            class: [
                                t.showImage
                                    ? "card-img-top"
                                    : "d-none"
                            ],
                            attrs: {
                                src: t.image,
                                alt: "Card image cap"
                            }
                        }),
                        a("div", {
                            staticClass: "card-body"
                        }, [
                            a("h5", {
                                staticClass: "card-title"
                            }, [a("a", {
                                    attrs: {
                                        href: "#"
                                    },
                                    on: {
                                        click: function (e) {
                                            e.stopPropagation(),
                                            e.preventDefault(),
                                            t.setProduct(t.product, "detail")
                                        }
                                    }
                                }, [t._v(t._s(t.product.name))])]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                a("div", {
                                    staticClass: "col-7"
                                }, [
                                    a("span", {
                                        staticClass: "font-weight-bold lead"
                                    }, [t._v("$ " + t._s(t._f("round")(t.product.price)))]),
                                    t.showTaxes
                                        ? a("span", {
                                            staticClass: "d-block small"
                                        }, [t._v(" + $ " + t._s(t._f("round")(t.localTax)) + " Imp.")])
                                        : t._e(),
                                    t.showTaxes
                                        ? a("span", {
                                            staticClass: "d-block"
                                        }, [t._v("$ " + t._s(t._f("round")(t.localProductTax)))])
                                        : t._e()
                                ]),
                                a("div", {
                                    staticClass: "col-5 text-right"
                                }, [
                                    t.showStock
                                        ? a("a", {
                                            attrs: {
                                                href: "#"
                                            },
                                            on: {
                                                click: function (e) {
                                                    e.stopPropagation(),
                                                    e.preventDefault(),
                                                    t.setProduct(t.product, "locations")
                                                }
                                            }
                                        }, [a("span", {
                                                staticClass: "text-muted ml-2"
                                            }, [
                                                t.outOfStock
                                                    ? a("del", [t._v("Stock: " + t._s(t.product.qty))])
                                                    : a("span", [t._v("Stock: " + t._s(t.product.qty))])
                                            ])])
                                        : t._e()
                                ])
                            ]),
                            a("p", {
                                staticClass: "card-text cardProduct-description"
                            }, [t._v(t._s(t.product.description))]),
                            a("transition", {
                                attrs: {
                                    name: "fade",
                                    mode: "out-in"
                                }
                            }, [a("button", {
                                    class: [
                                        t.outOfStock
                                            ? "btn-light text-muted"
                                            : "btn-primary",
                                        "btn"
                                    ],
                                    attrs: {
                                        disabled: t.outOfStock,
                                        type: "button"
                                    },
                                    on: {
                                        click: t.addProduct
                                    }
                                }, [t._v(t._s(
                                        t.outOfStock
                                            ? "No disponible"
                                            : "Agregar"
                                    ) + "\n      ")])])
                        ], 1)
                    ])
                }, Et = [], Ot = {
                    name: "cardProduct",
                    props: {
                        product: {
                            type: Object
                        }
                    },
                    data: function () {
                        return {
                            image: "",
                            showImage: !0,
                            localTax: 0,
                            localProductTax: 0,
                            showTaxes: !0,
                            showStock: !0
                        }
                    },
                    created: function () {
                        this.showImage = this.$store.state.itemImage,
                        this.showTaxes = this.$store.state.itemTax,
                        this.showStock = "inventory" == this.product.type
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])(["tax", "client"]), {
                        outOfStock: function () {
                            return this
                                .product
                                .hasOwnProperty("qty")
                                    ? this.product.qty <= 0
                                    : !this.product.price
                        }
                    }),
                    mounted: function () {
                        this.image = this.product.image
                            ? this.product.image
                            : "https://system.netsuite.com/core/media/media.nl?id=3490&c=TSTDRV905028&h=9f0da" +
                                    "cfdcae8ec134da7",
                        this.localTax = parseFloat(this.tax.value * this.product.price),
                        this.localProductTax = this.localTax + parseFloat(this.product.price)
                    },
                    methods: {
                        addProduct: function () {
                            var t = clone(this.product),
                                e = 1,
                                a = t.price,
                                s = 0,
                                i = this.tax.value,
                                o = this.product.idPricelevel;
                            console.log("priceLevel:", o),
                            t["priceLevel"] = o,
                            t["qty"] = e,
                            t["discount"] = s * e * a,
                            t["discountCode"] = "N/A",
                            t["tax"] = i * e * a,
                            t["taxCode"] = this.tax.id,
                            t["subtotal"] = a * e,
                            t["total"] = t.subtotal - t.discount + t.tax,
                            t.qty && this
                                .$store
                                .dispatch("addProduct", t)
                                .then(function () {})
                        },
                        setProduct: function (t, e) {
                            var a;
                            switch (this.$store.commit(h, t), e) {
                                case "detail":
                                    a = "#productModalCenter";
                                    break;
                                case "locations":
                                    a = "#locationModalCenter";
                                    break
                            }
                            a && setTimeout(function () {
                                c()(a).modal("show")
                            }, 500)
                        }
                    }
                }, St = Ot, Dt = (a("bEkb"), Object(at["a"])(St, It, Et, !1, null, null, null)), $t = Dt.exports, Nt = {
                    name: "ListProducts",
                    props: ["products"],
                    components: {
                        cardProduct: $t
                    }
                }, At = Nt, Rt = Object(at["a"])(At, Mt, Tt, !1, null, null, null), qt = Rt.exports, Lt = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "cardProduct shadow-none"
                    }, [
                        a("form", {
                            on: {
                                submit: function (e) {
                                    return e.preventDefault(),
                                    t.addProduct(e)
                                }
                            }
                        }, [
                        a("div", {
                                    staticClass: "row"
                                }, [
                                a("div", {
                                            class: [
                                                t.showImage
                                                    ? "col-sm-6 col-lg-5 d-flex align-items-center"
                                                    : "d-none"
                                            ]
                                        }, [a("img", {
                                                staticClass: "img-fluid d-block mx-auto",
                                                attrs: {
                                                    src: t.image,
                                                    alt: "Card image cap"
                                                }
                                            })]),
                                a("div", {
                                            class: [
                                                t.showImage
                                                    ? "col-sm-6 col-lg-7"
                                                    : "col-12"
                                            ]
                                        }, [
                                        a("p", {
                                                    staticClass: "cardProduct-description"
                                                }, [t._v(t._s(t.product.description))]),
                                        a("div", {
                                                    staticClass: "form-group"
                                                }, [
                                                    a("label", {
                                                            attrs: {
                                                                    for: "detail-price"}
                                                            },
                                                            [t._v("Precio:")]
                                                        ), a("vNumeric", {
                                                            staticClass: "form-control",
                                                            attrs: {
                                                                minus: !1,
                                                                min: 0,
                                                                id: "detail-price",
                                                                currency: "$",
                                                                precision: 2,
                                                                required: !0,
                                                                disabled: !t.priceEdition
                                                            },
                                                            model: {
                                                                value: t.target.price,
                                                                callback: function (e) {
                                                                    t.$set(t.target, "price", t._n(e))
                                                                },
                                                                expression: "target.price"
                                                            }
                                                        })],
                                                    1
                                                ), a("div", {
                                                    staticClass: "form-group"
                                                }, [
                                                    a("label", {
                                                            attrs: {
                                                                    for: "detail-qty"}
                                                            },
                                                            [t._v("Cantidad:")]
                                                        ), a("vNumeric", {
                                                            staticClass: "form-control",
                                                            attrs: {
                                                                minus: !1,
                                                                min: t.outOfStock
                                                                    ? 0
                                                                    : 1,
                                                                id: "detail-qty",
                                                                max: t.target.maxQTY,
                                                                readOnly: t.outOfStock,
                                                                precision: t.decimalQTY
                                                                    ? 4
                                                                    : 0,
                                                                required: !0
                                                            },
                                                            model: {
                                                                value: t.target.qty,
                                                                callback: function (e) {
                                                                    t.$set(t.target, "qty", t._n(e))
                                                                },
                                                                expression: "target.qty"
                                                            }
                                                        })],
                                                    1
                                                ), a("div", {
                                                    staticClass: "form-group"
                                                }, [
                                                    a("label", {
                                                            attrs: {
                                                                    for: "detail-discount"}
                                                            },
                                                            [t._v("Descuento:")]
                                                        ), a("select", {
                                                            directives: [
                                                                {
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: t.target.discount,
                                                                    expression: "target.discount"
                                                                }
                                                            ],
                                                            staticClass: "form-control",
                                                            attrs: {
                                                                name: "discount",
                                                                id: "detail-discount"
                                                            },
                                                            on: {
                                                                change: function (e) {
                                                                    var a = Array
                                                                        .prototype
                                                                        .filter
                                                                        .call(e.target.options, function (t) {
                                                                            return t.selected
                                                                        })
                                                                        .map(function (t) {
                                                                            var e = "_value" in t
                                                                                ? t._value
                                                                                : t.value;
                                                                            return e
                                                                        });
                                                                    t.$set(
                                                                        t.target,
                                                                        "discount",
                                                                        e.target.multiple
                                                                            ? a
                                                                            : a[0]
                                                                    )
                                                                }
                                                            }
                                                        }, [
                                                            a("option", {
                                                                attrs: {
                                                                    disabled: "",
                                                                    selected: "",
                                                                    hidden: "",
                                                                    value: ""
                                                                }
                                                            }, [t._v("Seleccione un descuento")]),
                                                            t._l(t.discountProducts, function (e, s) {
                                                                return a("option", {
                                                                    key: s,
                                                                    domProps: {
                                                                        value: e.id,
                                                                        selected: e.id === t.target.discount
                                                                    }
                                                                }, [t._v(t._s(e.name) + "\n            ")])
                                                            })
                                                        ], 2)]
                                                )])]
                                    ), a("div", {
                                        staticClass: "text-right"
                                    }, [a("button", {
                                            class: [
                                                t.outOfStock
                                                    ? "btn-light text-muted"
                                                    : "btn-primary",
                                                "btn"
                                            ],
                                            attrs: {
                                                type: "submit",
                                                disabled: t.outOfStock
                                            }
                                        }, [t._v("\n        " + t._s(
                                                t.outOfStock
                                                    ? "No disponible"
                                                    : "Agregar"
                                            ) + "\n      ")])])]
                            )]
                    )},
                Ut = [],
                Yt = (a("xfY5"), {
                    name: "DetailProduct",
                    props: {
                        product: {
                            type: Object,
                            required: !0
                        },
                        index: {
                            type: Number,
                            default: -1
                        }
                    },
                    components: {
                        vNumeric: G.a
                    },
                    data: function () {
                        return {
                            image: "",
                            target: {
                                price: 0,
                                qty: 0,
                                discount: "",
                                maxQTY: 0
                            },
                            showImage: !0
                        }
                    },
                    watch: {
                        product: function (t) {
                            this.target.price = t.price,
                            this.target.qty = this.outOfStock
                                ? 0
                                : 1
                        }
                    },
                    created: function () {
                        this.showImage = this.$store.state.itemImage
                    },
                    mounted: function () {
                        this.image = this.product.image
                            ? this.product.image
                            : "https://system.netsuite.com/core/media/media.nl?id=3490&c=TSTDRV905028&h=9f0da" +
                                    "cfdcae8ec134da7",
                        this.index > -1
                            ? (
                                this.target.price = this.product.price,
                                this.target.maxQTY = parseInt(
                                    this.$store.getters.getProductAvailableQTY(this.product.id) + this.product.qty
                                ),
                                this.target.qty = this.product.qty,
                                this.target.discount = this.product.discountCode && "N/A" !== this.product.discountCode
                                    ? this.product.discountCode
                                    : ""
                            )
                            : (
                                this.target.price = this.product.price,
                                this.target.qty = this.outOfStock
                                    ? 0
                                    : 1,
                                this.target.maxQTY = parseInt(this.product.qty)
                            ),
                        isNaN(this.target.maxQTY) && (this.target.maxQTY = 9007199254740991);
                        var t = this;
                        c()("#productModalCenter").on("hide.bs.modal", function () {
                            t
                                .$store
                                .commit(h, void 0)
                        })
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])(
                        ["tax", "discountProducts", "client", "decimalQTY", "priceEdition"]
                    ), {
                        outOfStock: function () {
                            return !!this
                                .product
                                .hasOwnProperty("qty") && this.product.qty <= 0
                        }
                    }),
                    methods: {
                        addProduct: function () {
                            var t = this,
                                e = clone(this.product),
                                a = this.target.qty,
                                s = this.target.price,
                                i = 0,
                                o = this.tax.value;
                            if (e["discountCode"] = "N/A", "" !== this.target.discount) {
                                var r = this
                                    .discountProducts
                                    .find(function (e) {
                                        return e.id === t.target.discount
                                    });
                                r && (i = r.value, e["discountCode"] = r.id)
                            }
                            var n = this.product.price != this.target.price || "-1" == this.product.priceLevel
                                ? "-1"
                                : this.product.idPricelevel;
                            if (
                                console.log("priceLevel:", n),
                                e["priceLevel"] = n,
                                e["qty"] = a,
                                e["discount"] = i * a * s,
                                e["taxCode"] = this.tax.id,
                                e["subtotal"] = s * a,
                                e["tax"] = o * (e.subtotal - e.discount),
                                e["total"] = e.subtotal - e.discount + e.tax,
                                e["price"] = s,
                                e.qty
                            ) 
                                if (-1 === this.index) 
                                    this
                                        .$store
                                        .dispatch("addProduct", e)
                                        .then(function () {
                                            c()("#productModalCenter").modal("hide")
                                        });
                                else {
                                    var l = {
                                        product: e,
                                        index: this.index
                                    };
                                    this
                                        .$store
                                        .commit(u, l),
                                    c()("#productModalCenter").modal("hide")
                                }
                            }
                    }
                }),
                Ft = Yt,
                Vt = Object(at["a"])(Ft, Lt, Ut, !1, null, null, null),
                Bt = Vt.exports,
                Qt = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "modal fade",
                        attrs: {
                            id: "locationModalCenter",
                            tabindex: "-1",
                            role: "dialog",
                            "aria-labelledby": "locationModalCenterTitle",
                            "aria-hidden": "true"
                        }
                    }, [a("div", {
                            staticClass: "modal-dialog modal-dialog-centered",
                            attrs: {
                                role: "document"
                            }
                        }, [a("div", {
                                staticClass: "modal-content"
                            }, [
                                t._m(0),
                                a("div", {
                                    staticClass: "modal-body"
                                }, [
                                    t.loading
                                        ? a("div", [a("loader")], 1)
                                        : t.error
                                            ? a("p", {
                                                staticClass: "text-danger"
                                            }, [t._v(t._s(t.error))])
                                            : a("div", [a("table", {
                                                    staticClass: "table"
                                                }, [
                                                    t._m(1),
                                                    a("tbody", t._l(t.locations, function (e) {
                                                        return a("tr", {
                                                            key: e.id
                                                        }, [
                                                            a("td", [t._v(t._s(e.name))]),
                                                            a("td", [t._v(t._s(e.qty))])
                                                        ])
                                                    }))
                                                ])])
                                ]),
                                t._m(2)
                            ])])])
                },
                zt = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "modal-header"
                        }, [
                            a("h5", {
                                staticClass: "modal-title",
                                attrs: {
                                    id: "locationModalLongTitle"
                                }
                            }, [t._v("Ubicaciones")]),
                            a("button", {
                                staticClass: "close",
                                attrs: {
                                    type: "button",
                                    "data-dismiss": "modal",
                                    "aria-label": "Close"
                                }
                            }, [a("span", {
                                    attrs: {
                                        "aria-hidden": "true"
                                    }
                                }, [t._v("×")])])
                        ])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("thead", {
                            staticClass: "thead-dark"
                        }, [a("tr", [
                                a("th", [t._v("Ubicación")]),
                                a("th", [t._v("Cantidad")])
                            ])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "modal-footer"
                        }, [a("button", {
                                staticClass: "btn btn-secondary",
                                attrs: {
                                    type: "button",
                                    "data-dismiss": "modal"
                                }
                            }, [t._v("Close")])])
                    }
                ],
                Ht = {
                    name: "LocationProduct",
                    props: {
                        url: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function () {
                        return {locations: []}
                    },
                    computed: Object(r["a"])(
                        {},
                        Object(ot["c"])(["subsidiaryId", "targetProduct"])
                    ),
                    mounted: function () {
                        var t = this;
                        c()("#locationModalCenter").on("show.bs.modal", function () {
                            t.getLocationAvailableQTY()
                        })
                    },
                    methods: {
                        getLocationAvailableQTY: function () {
                            var t = this;
                            this.loading = !0,
                            this.error = "",
                            this.locations = [],
                            this
                                .getProductLocations(this.subsidiaryId, this.targetProduct.id)
                                .then(function (e) {
                                    2 === e.data.StatusCode
                                        ? (
                                            console.log(e.data.Message),
                                            t.locations = Object.values(Object.values(e.data.Result)[0].locations)
                                        )
                                        : 3 === e.data.StatusCode && (
                                            console.error(e.data.Message),
                                            t.error = e.data.Message
                                        )
                                })
                                .catch(function (e) {
                                    console.error(e.message),
                                    t.error = e.message
                                })
                                . finally(function () {
                                    t.loading = !1
                                })
                        },
                        getProductLocations: function (t, e) {
                            var a = this,
                                s = {
                                    custparam_mode: "detail",
                                    custparam_subsidiary: t,
                                    custparam_product: e
                                };
                            return ht
                                .a
                                .get(a.url, {params: s})
                        }
                    }
                },
                Xt = Ht,
                Wt = Object(at["a"])(Xt, Qt, zt, !1, null, null, null),
                Jt = Wt.exports,
                Zt = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "table-responsive mb-5"
                    }, [a("table", {
                            staticClass: "table table-hover table-dark"
                        }, [
                            a("thead", [a("tr", [
                                    t.checkout
                                        ? a("th")
                                        : t._e(),
                                    a("th", [t._v("Cantidad")]),
                                    a("th", [t._v("Nombre")]),
                                    a("th", [t._v("Precio")]),
                                    a("th", [t._v("Descuento")]),
                                    a("th", [t._v("Total")]),
                                    a("th")
                                ])]),
                            a("tbody", t._l(t.products, function (e, s) {
                                return a("tr", {
                                    key: s
                                }, [
                                    t.checkout
                                        ? a("td", [a("i", {
                                                staticClass: "fas fa-pencil-alt",
                                                on: {
                                                    click: function (a) {
                                                        t.setProduct(e, s)
                                                    }
                                                }
                                            })])
                                        : t._e(),
                                    a("td", [t._v(t._s(e.qty))]),
                                    a("td", [t._v(t._s(e.name))]),
                                    a("td", [t._v(t._s(t._f("round")(e.price)))]),
                                    a("td", [t._v(t._s(t._f("round")(e.discount)))]),
                                    a("td", [t._v(t._s(t._f("round")(e.total)))]),
                                    a("td", [a("i", {
                                            staticClass: "fas fa-trash-alt",
                                            on: {
                                                click: function (e) {
                                                    t.removeItemFromCart(s)
                                                }
                                            }
                                        })])
                                ])
                            }))
                        ])])
                },
                Kt = [],
                Gt = {
                    name: "TableProduct",
                    props: {
                        products: {
                            type: Array
                        },
                        checkout: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {indexProduct: -1}
                    },
                    methods: {
                        removeItemFromCart: function (t) {
                            this
                                .$store
                                .dispatch("removeProduct", t)
                                .then(function () {
                                    console.log("item eliminado")
                                })
                        },
                        setProduct: function (t, e) {
                            this.indexProduct = e,
                            this.$emit("indexProduct", e),
                            this
                                .$store
                                .commit(h, t)
                        }
                    }
                },
                te = Gt,
                ee = Object(at["a"])(te, Zt, Kt, !1, null, null, null),
                ae = ee.exports,
                se = {
                    name: "Invoice",
                    components: {
                        client: bt,
                        invoiceDetail: kt,
                        listProducts: qt,
                        detailProduct: Bt,
                        location: Jt,
                        tableProduct: ae
                    },
                    data: function () {
                        return {
                            editable: !1,
                            targetClient: null,
                            targetLocation: "",
                            query: "",
                            options: [],
                            clients: [],
                            isNewClient: !1,
                            urls: {
                                customer: "",
                                item: ""
                            },
                            indexProduct: -1,
                            searchType: "inventory",
                            getFilteredProducts: [],
                            draftQuery: ""
                        }
                    },
                    watch: {
                        targetLocation: function () {
                            this
                                .$store
                                .commit(C, this.getLocation),
                            (this.query || this.draftQuery) && this.searchProduct()
                        },
                        targetClient: function () {
                            (this.query || this.draftQuery) && this.searchProduct()
                        },
                        searchType: function () {
                            this.draftQuery = "",
                            this.query && this.searchProduct()
                        },
                        cartCount: function (t) {
                            if (this.isMobile) {
                                var e = t
                                    ? "show"
                                    : "hide";
                                setTimeout(function () {
                                    c()("#collapseInvoiceDetail").collapse(e)
                                }, 1e3)
                            }
                        },
                        added: function (t) {
                            t && this.refreshItemList()
                        }
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_customers_sl",
                            s = "customdeploy_efx_pos_vue_customers_sl",
                            i = "customscript_efx_pos_vue_items_sl",
                            o = "customdeploy_efx_pos_vue_items_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.urls.customer = e,
                                t.getClients()
                            }),
                        this
                            .getURL(e, i, o)
                            .then(function (e) {
                                t.urls.item = e
                            })
                    },
                    beforeMount: function () {
                        var t = this;
                        this.targetLocation = this.$store.getters.getTargetLocation;
                        var e = this;
                        c()(document).ready(function () {
                            c()(".listProduct-message").css("height", .7 * window.innerHeight),
                            c()(".listProduct-result").css("minHeight", .7 * window.innerHeight),
                            c()("#clientModalCenter").on("hidden.bs.modal", function () {
                                e.editable = !1,
                                e.isNewClient = !1
                            }),
                            c()(window).resize(function () {
                                t.isMobile && c()("#clientModalCenter").modal("hide"),
                                e.editable = !1,
                                e.isNewClient = !1
                            })
                        })
                    },
                    mounted: function () {
                        this.cartCount && this.isMobile && setTimeout(function () {
                            c()("#collapseInvoiceDetail").collapse("show")
                        }, 1e3)
                    },
                    computed: Object(r["a"])({
                        getClient: function () {
                            var t = this,
                                e = this.targetClient && this
                                    .targetClient
                                    .hasOwnProperty("value")
                                        ? this
                                            .clients
                                            .find(function (e) {
                                                return e.id === t.targetClient.value
                                            })
                                        : void 0;
                            return e && (
                                this.$store.commit(g, e),
                                this.setSAT(e.method, e.payment, e.cfdi)
                            ),
                            e
                        },
                        getLocation: function () {
                            var t = this;
                            return this.targetLocation
                                ? this
                                    .locations
                                    .find(function (e) {
                                        return e.id === t.targetLocation
                                    })
                                : void 0
                        }
                    }, Object(ot["c"])([
                        "isMobile",
                        "user",
                        "currentDate",
                        "targetProduct",
                        "address",
                        "subsidiaryId",
                        "tax",
                        "locations",
                        "defaultClientId",
                        "cart",
                        "nameSearch",
                        "added"
                    ]), Object(ot["b"])(
                        {cartCount: "getCartItemsCount", products: "getUpdatedProductList"}
                    )),
                    methods: {
                        getClients: function () {
                            var t = this,
                                e = this,
                                a = {
                                    custparam_mode: "view",
                                    custparam_subsidiary: e.subsidiaryId
                                };
                            ht
                                .a
                                .get(e.urls.customer, {params: a})
                                .then(function (t) {
                                    if (2 === t.data.StatusCode) {
                                        console.log(t.data.Message);
                                        var a = t.data.Result;
                                        e.clients = c
                                            .a
                                            .map(a, function (t) {
                                                return [t]
                                            }),
                                        e.options = e
                                            .clients
                                            .map(function (t) {
                                                return {
                                                    label: ""
                                                        .concat(t.entidyId, " - ")
                                                        .concat(t.rfc),
                                                    value: t.id
                                                }
                                            })
                                    } else 
                                        3 === t.data.StatusCode && console.error(t.data.Message)
                                })
                                . finally(function () {
                                    t.targetClient = t.$store.getters.getTargetClient,
                                    t.targetClient || t.getDefaultClient()
                                })
                        },
                        getDefaultClient: function () {
                            var t = this,
                                e = this
                                    .clients
                                    .find(function (e) {
                                        return e.id == t.defaultClientId
                                    });
                            this.targetClient = {
                                label: ""
                                    .concat(e.entidyId, " - ")
                                    .concat(e.rfc),
                                value: e.id
                            }
                        },
                        toggleClient: function (t) {
                            var e = t
                                ? "show"
                                : "hide";
                            this.isMobile && c()("#clientModalCenter").modal(e),
                            this.editable = t,
                            this.isNewClient = t,
                            c()("#collapseClient").collapse(e)
                        },
                        cancelClient: function () {
                            this.toggleClient(!1)
                        },
                        addClient: function (t) {
                            this
                                .clients
                                .push(t);
                            var e = {
                                label: ""
                                    .concat(t.entidyId, " - ")
                                    .concat(t.rfc),
                                value: t.id
                            };
                            this
                                .options
                                .push(e),
                            this.targetClient = e,
                            this.toggleClient(!1)
                        },
                        addProduct: function () {
                            var t = this;
                            if (this.$store.state.searchInsert && 1 === this.getFilteredProducts.length) {
                                var e = clone(this.getFilteredProducts[0]);
                                if (e.qty || "inventory" !== e.type) {
                                    var a = 1,
                                        s = e.price,
                                        i = 0,
                                        o = this.tax.value;
                                    e["priceLevel"] = this.getClient.priceLevel,
                                    e["qty"] = a,
                                    e["subtotal"] = s * a,
                                    e["discount"] = i * a * s,
                                    e["discountCode"] = "N/A",
                                    e["tax"] = o * a * s,
                                    e["taxCode"] = this.tax.id,
                                    e["total"] = e.subtotal - e.discount + e.tax,
                                    e.qty && this
                                        .$store
                                        .dispatch("addProduct", e)
                                        .then(function () {
                                            console.log("Product added"),
                                            t.refreshItemList()
                                        })
                                } else 
                                    alert("Producto no disponible en stock")
                            }
                        },
                        searchProduct: function () {
                            var t = this;
                            try {
                                var e = this.query || this.draftQuery,
                                    a = {
                                        url: this.urls.item,
                                        productId: e,
                                        subsidiaryId: this.subsidiaryId,
                                        priceLevelId: this.getClient.priceLevel,
                                        locationId: this.getLocation.id,
                                        currency: this.getClient.currency,
                                        name: this.nameSearch,
                                        searchType: this.searchType
                                    };
                                this
                                    .$store
                                    .dispatch("searchProduct", a)
                                    .then(function () {
                                        console.log("Products obtained"),
                                        setTimeout(function () {
                                            t.refreshItemList()
                                        }, 300),
                                        setTimeout(function () {
                                            t.addProduct()
                                        }, 500)
                                    })
                                    .catch(function () {
                                        console.error("No results"),
                                        t.getFilteredProducts = [],
                                        t.draftQuery = ""
                                    })
                                } catch (t) {
                                console.error("Search error", t.message)
                            }
                        },
                        refreshItemList: function () {
                            var t = this;
                            console.log("Refreshing Items"),
                            this.query && (this.draftQuery = this.query);
                            var e = this
                                .products
                                .filter(function (e) {
                                    return (
                                        e.productId === t.draftQuery || e.name.toLowerCase().includes(t.draftQuery.toLowerCase())
                                    ) && e.type === t.searchType
                                });
                            console.log("items", e),
                            e && e.length && (this.getFilteredProducts = e, this.query = ""),
                            this
                                .$store
                                .commit(v, !1)
                        },
                        setSAT: function (t, e, a) {
                            var s = {
                                method: t,
                                payment: e,
                                cfdi: a
                            };
                            this
                                .$store
                                .commit(T, s)
                        },
                        setIndexProduct: function (t) {
                            this.indexProduct = t
                        }
                    }
                },
                ie = se,
                oe = (a("7SAS"), Object(at["a"])(ie, ut, mt, !1, null, null, null)),
                re = oe.exports,
                ne = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "container py-5 position-relative"
                    }, [
                        a("div", {
                            staticClass: "text-white"
                        }, [
                            a("div", {
                                staticClass: "row mb-5"
                            }, [
                                a("div", {
                                    staticClass: "col-lg-10 order-12 order-lg-0"
                                }, [a("div", {
                                        staticClass: "row"
                                    }, [
                                        a("div", {
                                            staticClass: "col-sm-6"
                                        }, [
                                            a("h4", [t._v("Ticket")]),
                                            a("hr"),
                                            a("p", [
                                                a("span", [
                                                    a("strong", [t._v("Cajero:")]),
                                                    t._v(" " + t._s(t.user.name))
                                                ]),
                                                a("br"),
                                                a("span", [
                                                    a("strong", [t._v("Ubicación:")]),
                                                    t._v(" " + t._s(t.location.name))
                                                ]),
                                                a("br"),
                                                a("span", [
                                                    a("strong", [t._v("Impuesto:")]),
                                                    t._v(" " + t._s(t.tax.name))
                                                ]),
                                                a("br"),
                                                a("span", [
                                                    a("strong", [t._v("Fecha:")]),
                                                    t._v(" " + t._s(t.formatDate(t.currentDate)))
                                                ]),
                                                a("br"),
                                                a("span", [
                                                    a("strong", [t._v("Items:")]),
                                                    t._v(" " + t._s(t.getItemsCount))
                                                ])
                                            ])
                                        ]),
                                        a("div", {
                                            staticClass: "col-sm-6"
                                        }, [
                                            a("h4", [t._v("Cliente")]),
                                            a("hr"),
                                            a("p", [
                                                a("span", [
                                                    a("strong", [t._v("Nombre:")]),
                                                    t._v(" " + t._s(t.client.entidyId))
                                                ]),
                                                a("br"),
                                                a("span", [
                                                    a("strong", [t._v("Dirección:")]),
                                                    t._v(" " + t._s(t.client.address[t.address].address1))
                                                ]),
                                                a("br"),
                                                a("span", [
                                                    a("strong", [t._v("RFC:")]),
                                                    t._v(" " + t._s(t.client.rfc))
                                                ]),
                                                a("br")
                                            ])
                                        ])
                                    ])]),
                                a("div", {
                                    staticClass: "col-lg-2 order-0 order-lg-12"
                                }, [a("div", {
                                        staticClass: "text-center mb-5 d-none d-md-block"
                                    }, [a("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                                src: t.$store.state.logo,
                                                width: "50",
                                                alt: "logo"
                                            }
                                        })])])
                            ]),
                            a("div", {staticClass: "clearfix"}),
                            a("div", [a("tableProduct", {
                                    attrs: {
                                        products: t.localCart
                                    },
                                    on: {
                                        indexProduct: t.setIndexProduct
                                    }
                                })], 1),
                            a("div", {
                                staticClass: "mb-5"
                            }, [a("div", {
                                    staticClass: "row"
                                }, [
                                    a("div", {
                                        staticClass: "col-sm-6 col-lg-5 pr-sm-5 mb-5"
                                    }, [
                                        a("h4", [t._v("Método de pago")]),
                                        a("hr"),
                                        a("listPaymentMethods", {
                                            attrs: {
                                                paymentMethods: t.paymentMethods
                                            }
                                        }),
                                        a("div", {
                                            staticClass: "text-center"
                                        }, [a("a", {
                                                directives: [
                                                    {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: t.paymentMethods.length && t.isCashNeeded,
                                                        expression: "paymentMethods.length && isCashNeeded"
                                                    }
                                                ],
                                                staticClass: "btn btn-link",
                                                attrs: {
                                                    id: "linkCollapsePaymentMethod",
                                                    "data-toggle": "collapse",
                                                    href: "#collapsePaymentMethod",
                                                    role: "button",
                                                    "aria-expanded": "true",
                                                    "aria-controls": "collapsePaymentMethod"
                                                }
                                            })]),
                                        a("div", {
                                            class: [
                                                {
                                                    show: 0 === t.paymentMethods.length
                                                },
                                                "collapse"
                                            ],
                                            attrs: {
                                                id: "collapsePaymentMethod"
                                            }
                                        }, [a("div", {
                                                staticClass: "card card-body bg-transparent"
                                            }, [a("paymentMethod")], 1)])
                                    ], 1),
                                    a("div", {
                                        staticClass: "col-sm-6 col-lg-7"
                                    }, [
                                        a("h4", [t._v("Montos")]),
                                        a("hr"),
                                        a("detailInvoice", {
                                            attrs: {
                                                showButton: !1
                                            }
                                        }),
                                        a("transition", {
                                            attrs: {
                                                name: "fade"
                                            }
                                        }, [a("div", [
                                                t.canCheckout && t.getItemsCount
                                                    ? a("button", {
                                                        staticClass: "btn btn-primary btn-block",
                                                        attrs: {
                                                            type: "button"
                                                        },
                                                        on: {
                                                            click: function (e) {
                                                                t.checkout(!1)
                                                            }
                                                        }
                                                    }, [t._v("Crear Ticket\n              ")])
                                                    : t._e(),
                                                t.canCheckout && t.getItemsCount && t.showRingButton
                                                    ? a("button", {
                                                        staticClass: "btn btn-warning btn-block",
                                                        attrs: {
                                                            "data-toggle": "modal",
                                                            "data-target": "#satModalCenter",
                                                            type: "button"
                                                        }
                                                    }, [t._v("Timbrar Factura\n              ")])
                                                    : t._e()
                                            ])])
                                    ], 1)
                                ])])
                        ]),
                        t.loading
                            ? a("loader")
                            : t._e(),
                        void 0 !== t.targetProduct
                            ? a("div", {
                                staticClass: "modal fade",
                                attrs: {
                                    id: "productModalCenter",
                                    tabindex: "-1",
                                    role: "dialog",
                                    "aria-labelledby": "productModalCenterTitle",
                                    "aria-hidden": "true"
                                }
                            }, [a("div", {
                                    staticClass: "modal-dialog modal-lg modal-dialog-centered",
                                    attrs: {
                                        role: "document"
                                    }
                                }, [a("div", {
                                        staticClass: "modal-content"
                                    }, [
                                        a("div", {
                                            staticClass: "modal-header"
                                        }, [
                                            a("h5", {
                                                staticClass: "modal-title text-black"
                                            }, [t._v(t._s(t.targetProduct.name))]),
                                            t._m(0)
                                        ]),
                                        a("div", {
                                            staticClass: "modal-body"
                                        }, [a("detailProduct", {
                                                attrs: {
                                                    product: t.targetProduct,
                                                    index: t.indexProduct
                                                }
                                            })], 1)
                                    ])])])
                            : t._e(),
                        t.showRingButton
                            ? a("div", [a("satModal", {
                                    attrs: {
                                        url: t.url
                                    },
                                    on: {
                                        sendBill: t.showBillPDF,
                                        loading: t.enableLoading
                                    }
                                })], 1)
                            : t._e()
                    ], 1)
                },
                ce = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("button", {
                            staticClass: "close",
                            attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                            }
                        }, [a("span", {
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            }, [t._v("×")])])
                    }
                ],
                le = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("form", {
                        attrs: {
                            id: "form-payment-method"
                        },
                        on: {
                            submit: function (e) {
                                e.preventDefault(),
                                t.addPaymentMethod()
                            }
                        }
                    }, [
                        a("div", {
                            staticClass: "form-group"
                        }, [a("select", {
                                directives: [
                                    {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.targetMethod,
                                        expression: "targetMethod"
                                    }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                    name: "method",
                                    id: "method",
                                    required: ""
                                },
                                on: {
                                    change: function (e) {
                                        var a = Array
                                            .prototype
                                            .filter
                                            .call(e.target.options, function (t) {
                                                return t.selected
                                            })
                                            .map(function (t) {
                                                var e = "_value" in t
                                                    ? t._value
                                                    : t.value;
                                                return e
                                            });
                                        t.targetMethod = e.target.multiple
                                            ? a
                                            : a[0]
                                    }
                                }
                            }, [
                                a("option", {
                                    attrs: {
                                        value: "",
                                        selected: "",
                                        disabled: "",
                                        hidden: ""
                                    }
                                }, [t._v("Seleccione un método\n      ")]),
                                t._l(t.methods, function (e) {
                                    return a("option", {
                                        key: e.id,
                                        domProps: {
                                            value: e.id
                                        }
                                    }, [t._v("\n        " + t._s(e.name) + "\n      ")])
                                })
                            ], 2)]),
                        a("div", {
                            staticClass: "form-group"
                        }, [a("vueNumeric", {
                                staticClass: "form-control",
                                attrs: {
                                    required: !0,
                                    placeholder: "Digite el monto",
                                    min: 0,
                                    minus: !1,
                                    max: "1" === t.targetMethod
                                        ? 9007199254740991
                                        : t.cashNeeded,
                                    value: t.cashNeeded
                                },
                                model: {
                                    value: t.amount,
                                    callback: function (e) {
                                        t.amount = e
                                    },
                                    expression: "amount"
                                }
                            })], 1),
                        t._m(0)
                    ])
                },
                de = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "form-group"
                        }, [a("button", {
                                staticClass: "btn btn-warning btn-block",
                                attrs: {
                                    type: "submit"
                                }
                            }, [t._v("Agregar")])])
                    }
                ],
                ue = {
                    name: "PaymentMethod",
                    data: function () {
                        return {targetMethod: "", amount: 0, methods: [], url: ""}
                    },
                    watch: {
                        cashNeeded: function (t) {
                            this.amount = t
                        }
                    },
                    components: {
                        vueNumeric: G.a
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_invoice_sl",
                            s = "customdeploy_efx_pos_vue_invoice_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e,
                                t.getPaymentMethods()
                            })
                    },
                    mounted: function () {
                        this.amount = this.cashNeeded
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])(["totalCash"]), Object(ot["b"])(
                        {cashNeeded: "getCashNeeded"}
                    )),
                    methods: {
                        addPaymentMethod: function () {
                            var t = this,
                                e = "1" === this.targetMethod
                                    ? Math.abs(this.cashNeeded - this.amount)
                                    : 0,
                                a = {
                                    method: this
                                        .methods
                                        .find(function (e) {
                                            return e.id === t.targetMethod
                                        }),
                                    amount: this.amount,
                                    change: e
                                };
                            this
                                .$store
                                .dispatch("addPayment", a)
                                .then(function () {
                                    t.targetMethod = ""
                                })
                        },
                        getPaymentMethods: function () {
                            var t = this,
                                e = {
                                    custparam_mode: "view"
                                };
                            ht
                                .a
                                .get(t.url, {params: e})
                                .then(function (e) {
                                    2 === e.data.StatusCode
                                        ? (console.log(e.data.Message), t.methods = Object.values(e.data.Result))
                                        : 3 === e.data.StatusCode && console.error(e.data.Message)
                                })
                        }
                    }
                },
                me = ue,
                pe = Object(at["a"])(me, le, de, !1, null, null, null),
                ve = pe.exports,
                fe = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", t._l(t.paymentMethods, function (e, s) {
                        return a("div", {
                            key: e.method.id,
                            staticClass: "row"
                        }, [
                            a("div", {
                                staticClass: "col-5"
                            }, [t._v("\n      " + t._s(e.method.name) + "\n    ")]),
                            a("div", {
                                staticClass: "col-5 text-right"
                            }, [t._v("\n      " + t._s(t._f("round")(e.amount)) + "\n    ")]),
                            a("div", {
                                staticClass: "col-2 text-right"
                            }, [a("i", {
                                    staticClass: "fas fa-times",
                                    on: {
                                        click: function (e) {
                                            t.removePaymentMethod(s)
                                        }
                                    }
                                })])
                        ])
                    }))
                },
                he = [],
                ge = {
                    name: "ListPaymentMethods",
                    props: {
                        paymentMethods: {
                            type: Array
                        }
                    },
                    methods: {
                        removePaymentMethod: function (t) {
                            this
                                .$store
                                .dispatch("removePayment", t)
                                .then(function () {})
                        }
                    }
                },
                Ce = ge,
                _e = Object(at["a"])(Ce, fe, he, !1, null, null, null),
                be = _e.exports,
                ye = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "modal fade",
                        attrs: {
                            id: "satModalCenter",
                            tabindex: "-1",
                            role: "dialog",
                            "aria-labelledby": "satModalCenterTitle",
                            "aria-hidden": "true"
                        }
                    }, [
                        a("div", {
                            staticClass: "modal-dialog modal-dialog-centered modal-lg",
                            attrs: {
                                role: "document"
                            }
                        }, [
                        a("div", {
                                    staticClass: "modal-content"
                                }, [
                                t._m(0),
                                a("div", {
                                            staticClass: "modal-body"
                                        }, [
                                        a("form", {
                                                    attrs: {
                                                        id: "form-sat"
                                                    },
                                                    on: {
                                                        submit: function (e) {
                                                            e.preventDefault(),
                                                            t.checkout()
                                                        }
                                                    }
                                                }, [
                                                a("div", {
                                                            staticClass: "row"
                                                        }, [
                                                        a(
                                                                    "div", {
                                                                    staticClass: "col-sm-4 form-group"
                                                                }, [
                                                                    a("label", {
                                                                            attrs: {
                                                                                    for: "metodoPago"}
                                                                            },
                                                                            [t._v("Método de Pago")]
                                                                        ), a("select", {
                                                                            directives: [
                                                                                {
                                                                                    name: "model",
                                                                                    rawName: "v-model",
                                                                                    value: t.target.payment,
                                                                                    expression: "target.payment"
                                                                                }
                                                                            ],
                                                                            staticClass: "form-control",
                                                                            attrs: {
                                                                                id: "metodoPago",
                                                                                required: ""
                                                                            },
                                                                            on: {
                                                                                change: function (e) {
                                                                                    var a = Array
                                                                                        .prototype
                                                                                        .filter
                                                                                        .call(e.target.options, function (t) {
                                                                                            return t.selected
                                                                                        })
                                                                                        .map(function (t) {
                                                                                            var e = "_value" in t
                                                                                                ? t._value
                                                                                                : t.value;
                                                                                            return e
                                                                                        });
                                                                                    t.$set(
                                                                                        t.target,
                                                                                        "payment",
                                                                                        e.target.multiple
                                                                                            ? a
                                                                                            : a[0]
                                                                                    )
                                                                                }
                                                                            }
                                                                        }, [
                                                                            a("option", {
                                                                                attrs: {
                                                                                    value: "",
                                                                                    selected: "",
                                                                                    disabled: "",
                                                                                    hidden: ""
                                                                                }
                                                                            }, [t._v("Seleccióne un método de pago")]),
                                                                            t._l(t.satPayments, function (e, s) {
                                                                                return a("option", {
                                                                                    key: s,
                                                                                    domProps: {
                                                                                        value: e.id,
                                                                                        selected: t.target.payment === e.id
                                                                                    }
                                                                                }, [t._v(t._s(e.name) + "\n                ")])
                                                                            })
                                                                        ], 2)]
                                                                ), a("div", {
                                                                    staticClass: "col-sm-4 form-group"
                                                                }, [
                                                                    a("label", {
                                                                            attrs: {
                                                                                    for: "formaPago"}
                                                                            },
                                                                            [t._v("Forma de Pago:")]
                                                                        ), a("select", {
                                                                            directives: [
                                                                                {
                                                                                    name: "model",
                                                                                    rawName: "v-model",
                                                                                    value: t.target.method,
                                                                                    expression: "target.method"
                                                                                }
                                                                            ],
                                                                            staticClass: "form-control",
                                                                            attrs: {
                                                                                id: "formaPago",
                                                                                required: ""
                                                                            },
                                                                            on: {
                                                                                change: function (e) {
                                                                                    var a = Array
                                                                                        .prototype
                                                                                        .filter
                                                                                        .call(e.target.options, function (t) {
                                                                                            return t.selected
                                                                                        })
                                                                                        .map(function (t) {
                                                                                            var e = "_value" in t
                                                                                                ? t._value
                                                                                                : t.value;
                                                                                            return e
                                                                                        });
                                                                                    t.$set(
                                                                                        t.target,
                                                                                        "method",
                                                                                        e.target.multiple
                                                                                            ? a
                                                                                            : a[0]
                                                                                    )
                                                                                }
                                                                            }
                                                                        }, [
                                                                            a("option", {
                                                                                attrs: {
                                                                                    value: "",
                                                                                    selected: "",
                                                                                    disabled: "",
                                                                                    hidden: ""
                                                                                }
                                                                            }, [t._v("Seleccióne una forma de pago")]),
                                                                            t._l(t.satMethods, function (e, s) {
                                                                                return a("option", {
                                                                                    key: s,
                                                                                    domProps: {
                                                                                        value: e.id,
                                                                                        selected: t.target.method == e.id
                                                                                    }
                                                                                }, [t._v(t._s(e.name) + "\n                ")])
                                                                            })
                                                                        ], 2)]
                                                                ), a("div", {
                                                                    staticClass: "col-sm-4 form-group"
                                                                }, [
                                                                    a("label", {
                                                                            attrs: {
                                                                                    for: "cfdi"}
                                                                            },
                                                                            [t._v("Uso de CFDI")]
                                                                        ), a("select", {
                                                                            directives: [
                                                                                {
                                                                                    name: "model",
                                                                                    rawName: "v-model",
                                                                                    value: t.target.cfdi,
                                                                                    expression: "target.cfdi"
                                                                                }
                                                                            ],
                                                                            staticClass: "form-control",
                                                                            attrs: {
                                                                                name: "cfdi",
                                                                                id: "cfdi",
                                                                                required: ""
                                                                            },
                                                                            on: {
                                                                                change: function (e) {
                                                                                    var a = Array
                                                                                        .prototype
                                                                                        .filter
                                                                                        .call(e.target.options, function (t) {
                                                                                            return t.selected
                                                                                        })
                                                                                        .map(function (t) {
                                                                                            var e = "_value" in t
                                                                                                ? t._value
                                                                                                : t.value;
                                                                                            return e
                                                                                        });
                                                                                    t.$set(
                                                                                        t.target,
                                                                                        "cfdi",
                                                                                        e.target.multiple
                                                                                            ? a
                                                                                            : a[0]
                                                                                    )
                                                                                }
                                                                            }
                                                                        }, [
                                                                            a("option", {
                                                                                attrs: {
                                                                                    value: "",
                                                                                    selected: "",
                                                                                    disabled: "",
                                                                                    hidden: ""
                                                                                }
                                                                            }, [t._v("Seleccióne CFDI")]),
                                                                            t._l(t.satCFDI, function (e, s) {
                                                                                return a("option", {
                                                                                    key: s,
                                                                                    domProps: {
                                                                                        value: e.id,
                                                                                        selected: t.target.cfdi == e.id
                                                                                    }
                                                                                }, [t._v(t._s(e.name) + "\n                ")])
                                                                            })
                                                                        ], 2)]
                                                                )]), t.error
                                                                    ? a("div", [a("p", {
                                                                            staticClass: "text-danger"
                                                                        }, [t._v(t._s(t.error))])])
                                                                    : t._e()
                                                                ]
                                                    )]
                                            ), t._m(1)]
                                    )]
                            )]
                    )},
                xe = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "modal-header"
                        }, [
                            a("h5", {
                                staticClass: "modal-title",
                                attrs: {
                                    id: "satModalLongTitle"
                                }
                            }, [t._v("Opctiones del SAT")]),
                            a("button", {
                                staticClass: "close",
                                attrs: {
                                    type: "button",
                                    "data-dismiss": "modal",
                                    "aria-label": "Close"
                                }
                            }, [a("span", {
                                    attrs: {
                                        "aria-hidden": "true"
                                    }
                                }, [t._v("×")])])
                        ])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "modal-footer"
                        }, [
                            a("button", {
                                staticClass: "btn btn-secondary",
                                attrs: {
                                    type: "button",
                                    "data-dismiss": "modal"
                                }
                            }, [t._v("Cerrar")]),
                            a("button", {
                                staticClass: "btn btn-primary",
                                attrs: {
                                    type: "submit",
                                    form: "form-sat"
                                }
                            }, [t._v("Aceptar")])
                        ])
                    }
                ],
                we = (a("ls82"), a("MECJ")),
                Pe = {
                    name: "satModal",
                    props: {
                        url: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function () {
                        return {
                            target: {
                                payment: "",
                                method: "",
                                cfdi: ""
                            }
                        }
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])(
                        ["satMethods", "satPayments", "satCFDI", "sat"]
                    )),
                    created: function () {
                        var t = this;
                        Object
                            .keys(this.sat)
                            .forEach(function (e) {
                                t
                                    .target
                                    .hasOwnProperty(e) && (t.target[e] = t.sat[e])
                            })
                    },
                    methods: {
                        checkout: function () {
                            c()("#satModalCenter").modal("hide"),
                            this.setSAT(this.target.method, this.target.payment, this.target.cfdi);
                            var t = this;
                            t.error = "",
                            t.$emit("loading", !0);
                            var e = {
                                url: t.url,
                                ring: !0
                            };
                            function a(t) {
                                return s.apply(this, arguments)
                            }
                            function s() {
                                return s = Object(we["a"])(regeneratorRuntime.mark(function t(a) {
                                    var s,
                                        i,
                                        o,
                                        r,
                                        n,
                                        l;
                                    return regeneratorRuntime.wrap(function (t) {
                                        while (1) 
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0,
                                                    t.next = 3,
                                                    a
                                                        .$store
                                                        .dispatch("checkout", e);
                                                case 3:
                                                    return s = t.sent,
                                                    i = s.urlSatTimbrar,
                                                    o = s.idInvoice,
                                                    t.next = 8,
                                                    a.ringBill(i);
                                                case 8:
                                                    if (r = t.sent, 2 !== r) {
                                                        t.next = 15;
                                                        break
                                                    }
                                                    return n = {
                                                        invoice: o,
                                                        url: a.url
                                                    },
                                                    t.next = 13,
                                                    a
                                                        .$store
                                                        .dispatch("getSATPDF", n);
                                                case 13:
                                                    l = t.sent,
                                                    a.$emit("sendBill", l);
                                                case 15:
                                                    t.next = 23;
                                                    break;
                                                case 17:
                                                    t.prev = 17,
                                                    t.t0 = t["catch"](0),
                                                    a.$emit("loading", !1),
                                                    c()("#satModalCenter").modal("show"),
                                                    console.error(t.t0),
                                                    a.error = t.t0;
                                                case 23:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t, this, [
                                        [0, 17]
                                    ])
                                })),
                                s.apply(this, arguments)
                            }
                            a(t)
                        },
                        ringBill: function (t) {
                            return new Promise(function (e, a) {
                                ht
                                    .a
                                    .get(t)
                                    .then(function (t) {
                                        2 === t.data.StatusCode
                                            ? (console.log(t.data.Message), e(t.data.StatusCode))
                                            : 3 === t.data.StatusCode && (console.error(t.data.Message), a(t.data.Message))
                                    })
                                    .catch(function (t) {
                                        a(t.message)
                                    })
                                })
                        },
                        setSAT: function (t, e, a) {
                            var s = {
                                method: t,
                                payment: e,
                                cfdi: a
                            };
                            this
                                .$store
                                .commit(T, s)
                        }
                    }
                },
                je = Pe,
                ke = Object(at["a"])(je, ye, xe, !1, null, null, null),
                Me = ke.exports,
                Te = {
                    beforeRouteLeave: function (t, e, a) {
                        this
                            .$store
                            .commit(A),
                        this
                            .$store
                            .commit(L),
                        a()
                    },
                    name: "Checkout",
                    data: function () {
                        return {localCart: null, indexProduct: -1, url: ""}
                    },
                    components: {
                        paymentMethod: ve,
                        detailInvoice: kt,
                        detailProduct: Bt,
                        tableProduct: ae,
                        listPaymentMethods: be,
                        satModal: Me
                    },
                    watch: {
                        getItemsCount: function (t) {
                            t || this
                                .$router
                                .push("invoice")
                        },
                        targetProduct: function (t) {
                            t && setTimeout(function () {
                                c()("#productModalCenter").modal("show")
                            }, 500)
                        }
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_invoice_sl",
                            s = "customdeploy_efx_pos_vue_invoice_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e
                            })
                    },
                    mounted: function () {
                        this.localCart = this.$store.state.cart,
                        this
                            .$store
                            .commit(A),
                        this
                            .$store
                            .commit(L)
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])([
                        "location",
                        "client",
                        "totalCash",
                        "user",
                        "currentDate",
                        "targetProduct",
                        "address",
                        "satMethods",
                        "satPayments",
                        "satCFDI",
                        "defaultClientId",
                        "tax"
                    ]), Object(ot["b"])(["canCheckout"]), {
                        getItemsCount: function () {
                            return this.$store.getters.getCartItemsCount
                        },
                        paymentMethods: function () {
                            var t = this.$store.state.paymentMethods;
                            return t.length && c()("#collapsePaymentMethod").collapse("hide"),
                            t
                        },
                        isCashNeeded: function () {
                            return this.totalCash < this
                                .$store
                                .getters
                                .getCartAmount("total")
                        },
                        showRingButton: function () {
                            return this.client.id !== this.defaultClientId
                        }
                    }),
                    methods: {
                        checkout: function () {
                            var t = this,
                                e = this;
                            e.loading = !0,
                            e.error = "";
                            var a = {
                                url: e.url,
                                ring: !1
                            };
                            this
                                .$store
                                .dispatch("checkout", a)
                                .then(function (a) {
                                    e.loading = !1,
                                    e.showBillPDF(a.urlTiquet),
                                    t
                                        .$store
                                        .dispatch("restoreDefault")
                                })
                                .catch(function (t) {
                                    console.log(t),
                                    e.loading = !1,
                                    e.error = t
                                })
                            },
                        setIndexProduct: function (t) {
                            this.indexProduct = t
                        },
                        enableLoading: function (t) {
                            this.loading = t
                        },
                        showBillPDF: function (t) {
                            this.loading = !1,
                            window.open(t),
                            this
                                .$store
                                .dispatch("restoreDefault")
                        }
                    }
                },
                Ie = Te,
                Ee = (a("HOkd"), Object(at["a"])(Ie, ne, ce, !1, null, null, null)),
                Oe = Ee.exports,
                Se = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "main-container d-flex align-items-center"
                    }, [
                        a("div", {
                            staticClass: "position-relative py-5 bg-white px-3",
                            attrs: {
                                id: "container-login"
                            }
                        }, [
                            a("h3", {
                                staticClass: "text-center text-dark font-weight-bold"
                            }, [t._v("POS")]),
                            a("hr"),
                            a("img", {
                                staticClass: "mx-auto d-block mb-3",
                                attrs: {
                                    src: t.$store.state.logo,
                                    alt: "logo",
                                    width: "200"
                                }
                            }),
                            t.reset
                                ? t._e()
                                : a("form", {
                                    attrs: {
                                        id: "form-login"
                                    },
                                    on: {
                                        submit: function (e) {
                                            e.preventDefault(),
                                            t.logIn()
                                        }
                                    }
                                }, [
                            a("div", {
                                        staticClass: "form-group"
                                    }, [
                                        a("label", {
                                                staticClass: "sr-only",
                                                attrs: {
                                                        for: "user"}
                                                },
                                                [t._v("Usuario:")]
                                            ), a("input", {
                                                directives: [
                                                    {
                                                        name: "model",
                                                        rawName: "v-model.trim",
                                                        value: t.userName,
                                                        expression: "userName",
                                                        modifiers: {
                                                            trim: !0
                                                        }
                                                    }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                    type: "text",
                                                    id: "user",
                                                    required: "",
                                                    placeholder: "usuario"
                                                },
                                                domProps: {
                                                    value: t.userName
                                                },
                                                on: {
                                                    input: function (e) {
                                                        e.target.composing || (t.userName = e.target.value.trim())
                                                    },
                                                    blur: function (e) {
                                                        t.$forceUpdate()
                                                    }
                                                }
                                            })]
                                    ), a("div", {
                                        staticClass: "form-group"
                                    }, [
                                        a("label", {
                                                staticClass: "sr-only",
                                                attrs: {
                                                        for: "pass"}
                                                },
                                                [t._v("Contraseña:")]
                                            ), a("input", {
                                                directives: [
                                                    {
                                                        name: "model",
                                                        rawName: "v-model.trim",
                                                        value: t.password,
                                                        expression: "password",
                                                        modifiers: {
                                                            trim: !0
                                                        }
                                                    }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                    type: "password",
                                                    id: "pass",
                                                    required: "",
                                                    placeholder: "contraseña"
                                                },
                                                domProps: {
                                                    value: t.password
                                                },
                                                on: {
                                                    input: function (e) {
                                                        e.target.composing || (t.password = e.target.value.trim())
                                                    },
                                                    blur: function (e) {
                                                        t.$forceUpdate()
                                                    }
                                                }
                                            })]
                                    ), t._m(0), t._m(1)]),
                                t.reset
                                    ? a("form", {
                                        attrs: {
                                            id: "form-reset"
                                        },
                                        on: {
                                            submit: function (e) {
                                                e.preventDefault(),
                                                t.resetPassword()
                                            }
                                        }
                                    }, [
                                    a(
                                            "div", {
                                                staticClass: "form-group d-none"
                                            }, [
                                                a("label", {
                                                        staticClass: "sr-only",
                                                        attrs: {
                                                                for: "username"}
                                                        },
                                                        [t._v("Usuario:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model.trim",
                                                                value: t.userName,
                                                                expression: "userName",
                                                                modifiers: {
                                                                    trim: !0
                                                                }
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "text",
                                                            id: "username",
                                                            required: "",
                                                            placeholder: "usuario"
                                                        },
                                                        domProps: {
                                                            value: t.userName
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || (t.userName = e.target.value.trim())
                                                            },
                                                            blur: function (e) {
                                                                t.$forceUpdate()
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "newPass1"}
                                                        },
                                                        [t._v("Nueva contraseña:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model.trim",
                                                                value: t.newPass1,
                                                                expression: "newPass1",
                                                                modifiers: {
                                                                    trim: !0
                                                                }
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "password",
                                                            id: "newPass1",
                                                            required: ""
                                                        },
                                                        domProps: {
                                                            value: t.newPass1
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || (t.newPass1 = e.target.value.trim())
                                                            },
                                                            blur: function (e) {
                                                                t.$forceUpdate()
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "newPass2"}
                                                        },
                                                        [t._v("Repetir contraseña:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model.trim",
                                                                value: t.newPass2,
                                                                expression: "newPass2",
                                                                modifiers: {
                                                                    trim: !0
                                                                }
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "password",
                                                            id: "newPass2",
                                                            required: ""
                                                        },
                                                        domProps: {
                                                            value: t.newPass2
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || (t.newPass2 = e.target.value.trim())
                                                            },
                                                            blur: function (e) {
                                                                t.$forceUpdate()
                                                            }
                                                        }
                                                    })]
                                            ), t._m(2)])
                                            : t._e(), t.error
                                            ? a("div", [a("p", {
                                                    staticClass: "text-danger"
                                                }, [t._v(t._s(t.error))])])
                                            : t._e(),
                                        t.loading
                                            ? a("loader")
                                            : t._e()
                                        ],
                                    1
                                )]
                        )},
                De = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "form-group"
                        }, [a("button", {
                                staticClass: "btn btn-primary btn-block",
                                attrs: {
                                    type: "submit",
                                    form: "form-login"
                                }
                            }, [t._v("Ingresar")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "text-right"
                        }, [a("button", {
                                staticClass: "btn btn-link",
                                attrs: {
                                    type: "button"
                                }
                            }, [t._v("Olvide mi contraseña")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "form-group"
                        }, [a("button", {
                                staticClass: "btn btn-primary btn-block",
                                attrs: {
                                    type: "submit",
                                    form: "form-reset"
                                }
                            }, [t._v("Cambiar")])])
                    }
                ],
                $e = {
                    name: "Login",
                    beforeRouteLeave: function (t, e, a) {
                        l.resetViewFullHeight(),
                        l.setAppFullHeight(),
                        a()
                    },
                    data: function () {
                        return {
                            userName: "",
                            password: "",
                            newPass1: "",
                            newPass2: "",
                            reset: !1,
                            url: ""
                        }
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_userlogin_sl",
                            s = "customdeploy_efx_pos_vue_userlogin_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e
                            }),
                        l.setViewFullHeight()
                    },
                    computed: {
                        user: function () {
                            return this.$store.state.user
                        }
                    },
                    methods: {
                        logIn: function () {
                            if (this.error = "", this.userName && this.password) {
                                var t = this;
                                t.loading = !0;
                                var e = {
                                    custparam_mode: "login",
                                    custparam_username: t.userName,
                                    custparam_password: t.password
                                };
                                ht
                                    .a
                                    .post(t.url, e)
                                    .then(function (e) {
                                        if (2 === e.data.StatusCode) {
                                            console.log(e.data.Message);
                                            var a = e.data.Result.username,
                                                s = e
                                                    .data
                                                    .Result
                                                    .taxes[e.data.Result.initial.tax_code],
                                                i = e.data.Result.customer.id,
                                                o = e.data.Result.initial.subsidiary,
                                                r = a.employee,
                                                n = Object.values(e.data.Result.subsidiary.locations),
                                                c = Object.values(e.data.Result.discount_items),
                                                d = Object.values(e.data.Result.sat_payment_method),
                                                u = Object.values(e.data.Result.sat_payments_ways),
                                                m = Object.values(e.data.Result.cfdi),
                                                p = e.data.Result.settings;
                                            t.validateData(a, s, i, o, r, n, c, d, u, m),
                                            t
                                                .$store
                                                .commit(U, a),
                                            t
                                                .$store
                                                .commit(w, s),
                                            t
                                                .$store
                                                .commit(k, i),
                                            t
                                                .$store
                                                .commit(b, o),
                                            t
                                                .$store
                                                .commit(_, r),
                                            t
                                                .$store
                                                .commit(M, n),
                                            t
                                                .$store
                                                .commit(y, c),
                                            t
                                                .$store
                                                .commit(E, d),
                                            t
                                                .$store
                                                .commit(I, u),
                                            t
                                                .$store
                                                .commit(O, m),
                                            t
                                                .$store
                                                .dispatch(S, p)
                                                .then(function () {
                                                    console.log("Settings set")
                                                });
                                            var v = t
                                                .$store
                                                .getters
                                                .getLocationById(a.location);
                                            t
                                                .$store
                                                .commit(C, v),
                                            "T" === a.has_default_password
                                                ? t.reset = !0
                                                : (t.$router.push("invoice"), l.navigationCollapse())
                                        } else 
                                            3 === e.data.StatusCode && (
                                                console.error(e.data.Message),
                                                t.error = e.data.Message
                                            )
                                    })
                                    .catch(function (e) {
                                        console.error(e.message),
                                        t.error = e.message
                                    })
                                    . finally(function () {
                                        t.loading = !1
                                    })
                            } else 
                                this.error = "Existen campos vacios"
                        },
                        validateData: function (t, e, a, s, i, o, r, n, c, d) {
                            if (!l.isValidUser(t)) 
                                throw new Error("Usuario no valido");
                            if (!l.isValidTax(e)) 
                                throw new Error("Impuesto no definido");
                            if ("" === a) 
                                throw new Error("Cliente por defecto no definido");
                            if ("" === s) 
                                throw new Error("Subsidiary por defecto no definida");
                            if ("" === i) 
                                throw new Error("Empleado de Netsuite no definido");
                            if (!l.isValidLocations(o)) 
                                throw new Error("Existen ubicaciones no validas");
                            if (!l.isValidDiscounts(r)) 
                                throw new Error("Existen descuentos no validos");
                            if (!l.isValidSAT(n)) 
                                throw new Error("Existen metodos de pago no validos");
                            if (!l.isValidSAT(c)) 
                                throw new Error("Existen formas de pago no validos");
                            if (!l.isValidSAT(d)) 
                                throw new Error("Existen cfdis no validos")
                        },
                        resetPassword: function () {
                            if (
                                this.error = "",
                                this.newPass1 && this.newPass2 && this.newPass1 === this.newPass2
                            ) {
                                var t = this;
                                t.loading = !0;
                                var e = {
                                    custparam_mode: "changepassword",
                                    custparam_user: t.user.id,
                                    custparam_password: this.newPass1
                                };
                                ht
                                    .a
                                    .post(t.url, e)
                                    .then(function (e) {
                                        2 === e.data.StatusCode
                                            ? (console.log(e.data.Message), t.$router.push("invoice"), t.reset = !1)
                                            : 3 === e.data.StatusCode && console.error(e.data.Message)
                                    })
                                    . finally(function () {
                                        t.loading = !1
                                    })
                            } else 
                                this.error = "Las contrasenas no coinciden"
                        }
                    }
                },
                Ne = $e,
                Ae = (a("HXMr"), Object(at["a"])(Ne, Se, De, !1, null, null, null)),
                Re = Ae.exports,
                qe = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "container user pt-3"
                    }, [
                        a("div", {
                            staticClass: "row"
                        }, [
    a("div", {
                                    staticClass: "col-lg-4"
                                }, [
                                t.isMobile
                                        ? a("div", {
                                            staticClass: "mb-3"
                                        }, [a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", [t._v("Usuarios:")]),
                                                a("v-select", {
                                                    attrs: {
                                                        options: t.userSelectOption,
                                                        placeholder: "Seleccione una cuenta"
                                                    },
                                                    model: {
                                                        value: t.targetUser,
                                                        callback: function (e) {
                                                            t.targetUser = e
                                                        },
                                                        expression: "targetUser"
                                                    }
                                                })
                                            ], 1)])
                                        : a("div", {
                                            staticClass: "bg-white h-100 position-relative user-list"
                                        }, [
                                        a("ul", {
                                                staticClass: "list-group list-group-flush"
                                            }, t._l(t.users, function (e, s) {
                                                return a("li", {
                                                    key: "user-" + s,
                                                    staticClass: "list-group-item pointer",
                                                    class: {
                                                        active: e.username === t.targetUser
                                                },
                                                on: {
                                                    click: function (a) {
                                                        t.setTargetUser(e.username)
                                                    }
                                                }
                                            }, [t._v("\n            " + t._s(e.username) + "\n          ")])
                                        })),
                                        a("div", {
                                            staticClass: "position-absolute user-options bg-app"
                                        }, [
                                            a("button", {
                                                staticClass: "btn btn-dark px-2 py-0 btn-user-option",
                                                attrs: {
                                                    type: "button"
                                                },
                                                on: {
                                                    click: t.deleteUser
                                                }
                                            }, [t._v("-")]),
                                            a("button", {
                                                staticClass: "btn btn-dark px-2 py-0 btn-user-option",
                                                attrs: {
                                                    type: "button"
                                                },
                                                on: {
                                                    click: function (e) {
                                                        t.resetUser()
                                                    }
                                                }
                                            }, [t._v("+")])
                                        ])
                                    ])
                            ]),
    a("div", {
                                staticClass: "col-lg-8"
                            }, [
                        a(
                                "form", {
                                        on: {
                                            submit: function (e) {
                                                e.preventDefault(),
                                                t.saveUser()
                                            }
                                        }
                                    }, [
                                a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "name"}
                                                        },
                                                        [t._v("Nombre:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.user.name,
                                                                expression: "user.name"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "text",
                                                            id: "name",
                                                            required: ""
                                                        },
                                                        domProps: {
                                                            value: t.user.name
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || t.$set(t.user, "name", e.target.value)
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "email"}
                                                        },
                                                        [t._v("Correo:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.user.email,
                                                                expression: "user.email"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "email",
                                                            id: "email",
                                                            required: ""
                                                        },
                                                        domProps: {
                                                            value: t.user.email
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || t.$set(t.user, "email", e.target.value)
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "username"}
                                                        },
                                                        [t._v("Usuario:")]
                                                    ), a("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.user.username,
                                                                expression: "user.username"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            type: "text",
                                                            id: "username",
                                                            required: ""
                                                        },
                                                        domProps: {
                                                            value: t.user.username
                                                        },
                                                        on: {
                                                            input: function (e) {
                                                                e.target.composing || t.$set(t.user, "username", e.target.value)
                                                            }
                                                        }
                                                    })]
                                            ), a("div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "role"}
                                                        },
                                                        [t._v("Role:")]
                                                    ), a("select", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.user.role,
                                                                expression: "user.role"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            name: "role",
                                                            id: "role",
                                                            required: ""
                                                        },
                                                        on: {
                                                            change: function (e) {
                                                                var a = Array
                                                                    .prototype
                                                                    .filter
                                                                    .call(e.target.options, function (t) {
                                                                        return t.selected
                                                                    })
                                                                    .map(function (t) {
                                                                        var e = "_value" in t
                                                                            ? t._value
                                                                            : t.value;
                                                                        return e
                                                                    });
                                                                t.$set(
                                                                    t.user,
                                                                    "role",
                                                                    e.target.multiple
                                                                        ? a
                                                                        : a[0]
                                                                )
                                                            }
                                                        }
                                                    }, [
                                                        a("option", {
                                                            attrs: {
                                                                disabled: "",
                                                                selected: "",
                                                                hidden: "",
                                                                value: ""
                                                            }
                                                        }, [t._v("Seleccione un role")]),
                                                        t._l(t.roles, function (e, s) {
                                                            return a("option", {
                                                                key: s,
                                                                domProps: {
                                                                    value: e.id,
                                                                    selected: e.id === t.user.role
                                                                }
                                                            }, [t._v("\n              " + t._s(e.names) + "\n            ")])
                                                        })
                                                    ], 2)]
                                            ), a(
                                            "div", {
                                                staticClass: "form-group"
                                            }, [
                                                a("label", {
                                                        attrs: {
                                                                for: "location"}
                                                        },
                                                        [t._v("Ubicación")]
                                                    ), a("select", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.user.location,
                                                                expression: "user.location"
                                                            }
                                                        ],
                                                        staticClass: "form-control",
                                                        attrs: {
                                                            name: "location",
                                                            id: "location",
                                                            required: ""
                                                        },
                                                        on: {
                                                            change: function (e) {
                                                                var a = Array
                                                                    .prototype
                                                                    .filter
                                                                    .call(e.target.options, function (t) {
                                                                        return t.selected
                                                                    })
                                                                    .map(function (t) {
                                                                        var e = "_value" in t
                                                                            ? t._value
                                                                            : t.value;
                                                                        return e
                                                                    });
                                                                t.$set(
                                                                    t.user,
                                                                    "location",
                                                                    e.target.multiple
                                                                        ? a
                                                                        : a[0]
                                                                )
                                                            }
                                                        }
                                                    }, [
                                                        a("option", {
                                                            attrs: {
                                                                value: "",
                                                                selected: "",
                                                                disabled: "",
                                                                hidden: ""
                                                            }
                                                        }, [t._v("Seleccióne una ubicación")]),
                                                        t._l(t.locations, function (e, s) {
                                                            return a("option", {
                                                                key: s,
                                                                domProps: {
                                                                    value: e.id,
                                                                    selected: e.id === t.user.location
                                                                }
                                                            }, [t._v(t._s(e.name) + "\n            ")])
                                                        })
                                                    ], 2)]
                                            ), t.error
                                                ? a("div", [a("p", {
                                                        staticClass: "text-danger"
                                                    }, [t._v(t._s(t.error))])])
                                                : t._e(),
                                            a("div", {
                                                staticClass: "form-group text-right"
                                            }, [
                                                a("button", {
                                                    staticClass: "btn btn-danger mr-3 mb-3",
                                                    attrs: {
                                                        type: "button"
                                                    },
                                                    on: {
                                                        click: function (e) {
                                                            t.resetUser()
                                                        }
                                                    }
                                                }, [t._v("Cancelar")]),
                                                a("button", {
                                                    staticClass: "btn btn-primary mb-3",
                                                    attrs: {
                                                        type: "submit"
                                                    }
                                                }, [t._v("Guardar")]),
                                                t.targetUser
                                                    ? a("button", {
                                                        staticClass: "btn btn-primary ml-3 mb-3",
                                                        attrs: {
                                                            type: "button"
                                                        },
                                                        on: {
                                                            click: function (e) {
                                                                t.resetPassword()
                                                            }
                                                        }
                                                    }, [t._v("Restablecer\n            contraseña\n          ")])
                                                    : t._e()
                                            ])
                                        ])])]
                            ), t.loading
                                ? a("loader")
                                : t._e()
                            ],
                        1
                    )},
    Le = [],
    Ue = (a("INYr"), {
                    name: "Accounts",
                    data: function () {
                        return {
                            users: [],
                            targetUser: null,
                            user: {
                                name: "",
                                email: "",
                                username: "",
                                role: "",
                                id: "",
                                location: ""
                            },
                            url: "",
                            roles: []
                        }
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_accounts_sl",
                            s = "customdeploy_efx_pos_vue_accounts_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e,
                                t.getRoles(),
                                t.getUsers()
                            })
                    },
                    watch: {
                        getUser: function (t) {
                            var e = this;
                            Object
                                .keys(t)
                                .forEach(function (a) {
                                    e
                                        .user
                                        .hasOwnProperty(a) && (e.user[a] = t[a])
                                })
                        }
                    },
                    methods: {
                        resetUser: function () {
                            var t = this;
                            Object
                                .keys(t.user)
                                .forEach(function (e) {
                                    t.user[e] = ""
                                }),
                            this.targetUser = null
                        },
                        setTargetUser: function (t) {
                            this.targetUser = t
                        },
                        getUsers: function () {
                            var t = this;
                            t.loading = !0;
                            var e = {
                                custparam_mode: "getemployeeusers",
                                custparam_employee: t.employeeId
                            };
                            ht
                                .a
                                .get(t.url, {params: e})
                                .then(function (e) {
                                    2 === e.data.StatusCode
                                        ? (console.log(e.data.Message), t.users = Object.values(e.data.Result))
                                        : 3 === e.data.StatusCode && (
                                            console.error(e.data.Message),
                                            t.error = e.data.Message
                                        )
                                })
                                . finally(function () {
                                    t.loading = !1
                                })
                        },
                        getRoles: function () {
                            var t = this,
                                e = {
                                    custparam_mode: "getroles"
                                };
                            ht
                                .a
                                .get(t.url, {params: e})
                                .then(function (e) {
                                    2 === e.data.StatusCode
                                        ? (console.log(e.data.Message), t.roles = Object.values(e.data.Result))
                                        : 3 === e.data.StatusCode && console.error(e.data.Message)
                                })
                        },
                        saveUser: function () {
                            var t = this,
                                e = this;
                            e.error = "";
                            var a = e.user;
                            a["employee"] = e.employeeId,
                            e.targetUser
                                ? (a["custparam_mode"] = "edituser", a["custparam_user"] = e.user.id)
                                : a["custparam_mode"] = "createuser",
                            e.isValidUser()
                                ? (e.loading = !0, ht.a.post(e.url, a).then(function (a) {
                                    if (2 === a.data.StatusCode) {
                                        console.log(a.data.Message);
                                        var s = Object.values(a.data.Result)[0];
                                        if (e.targetUser) {
                                            var i = e
                                                .users
                                                .findIndex(function (t) {
                                                    return t.id == e.user.id
                                                });
                                            e
                                                .users
                                                .splice(i, 1, s)
                                        } else 
                                            e
                                                .users
                                                .push(s);
                                        t.resetUser()
                                    } else 
                                        3 === a.data.StatusCode && console.error(a.data.Message)
                                }). finally(function () {
                                    e.loading = !1
                                }))
                                : e.error = "Existen campos vacios"
                        },
                        deleteUser: function () {
                            var t = this;
                            if (this.targetUser) {
                                this.loading = !0;
                                var e = this,
                                    a = {
                                        custparam_mode: "deactivateuser",
                                        custparam_user: e.user.id
                                    };
                                ht
                                    .a
                                    .post(e.url, a)
                                    .then(function (a) {
                                        if (2 === a.data.StatusCode) {
                                            console.log(a.data.Message);
                                            var s = a.data.Id,
                                                i = e
                                                    .users
                                                    .findIndex(function (t) {
                                                        return t.id == s
                                                    });
                                            e
                                                .users
                                                .splice(i, 1),
                                            t.resetUser()
                                        } else 
                                            3 === a.data.StatusCode && (
                                                console.error(a.data.Message),
                                                e.error = a.data.Message
                                            )
                                    })
                                    . finally(function () {
                                        e.loading = !1
                                    })
                            } else 
                                alert("Debe seleccionar una cuenta primero")
                        },
                        resetPassword: function () {
                            var t = this;
                            if (confirm("Estas seguro desea reestablecer la contrasena para esta cuenta")) {
                                var e = this;
                                e.loading = !0;
                                var a = {
                                    custparam_mode: "resetpassword",
                                    custparam_user: e.user.id
                                };
                                ht
                                    .a
                                    .post(e.url, a)
                                    .then(function (a) {
                                        2 === a.data.StatusCode
                                            ? (console.log(a.data.Message), t.resetUser())
                                            : 3 === a.data.StatusCode && (
                                                console.error(a.data.Message),
                                                e.error = a.data.Message
                                            )
                                    })
                                    . finally(function () {
                                        e.loading = !1
                                    })
                            }
                        },
                        isValidUser: function () {
                            var t = !0;
                            for (var e in this.user) 
                                if ("" === this.user[e] && "id" !== e) {
                                    t = !1;
                                    break
                                }
                            return t
                        }
                    },
                    computed: Object(r["a"])({}, Object(ot["c"])(
                        ["isMobile", "employeeId", "locations"]
                    ), {
                        userSelectOption: function () {
                            return this
                                .users
                                .map(function (t) {
                                    return t.username
                                })
                        },
                        getUser: function () {
                            var t = this;
                            return this.targetUser
                                ? this
                                    .users
                                    .find(function (e) {
                                        return e.username === t.targetUser
                                    })
                                : {}
                        },
                        isEqualPassword: function () {
                            return this.user.pass1 === this.user.pass2
                        }
                    })
                }),
    Ye = Ue,
    Fe = (a("0kNR"), Object(at["a"])(Ye, qe, Le, !1, null, null, null)),
    Ve = Fe.exports,
    Be = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "container"
                    }, [
                        t.loading
                            ? a("div", [a("loader")], 1)
                            : t._e(),
                        a("div", {
                            staticClass: "pt-3 text-white"
                        }, [
                            a("div", {
                                    staticClass: "form-group"
                                }, [
                                    a("label", {
                                            attrs: {
                                                    for: "role"}
                                            },
                                            [t._v("Rol:")]
                                        ), a("select", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.roleID,
                                                    expression: "roleID"
                                                }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                                id: "role"
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = Array
                                                        .prototype
                                                        .filter
                                                        .call(e.target.options, function (t) {
                                                            return t.selected
                                                        })
                                                        .map(function (t) {
                                                            var e = "_value" in t
                                                                ? t._value
                                                                : t.value;
                                                            return e
                                                        });
                                                    t.roleID = e.target.multiple
                                                        ? a
                                                        : a[0]
                                                }
                                            }
                                        }, [
                                            a("option", {
                                                attrs: {
                                                    value: "",
                                                    selected: "",
                                                    disabled: "",
                                                    hidden: ""
                                                }
                                            }, [t._v("Seleccione el rol")]),
                                            t._l(t.roles, function (e, s) {
                                                return a("option", {
                                                    key: s,
                                                    domProps: {
                                                        value: e.id
                                                    }
                                                }, [t._v(t._s(e.name))])
                                            })
                                        ], 2)]
                                )]
                        ), a("div", {
                            staticClass: "pt-3 text-white"
                        }, [
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(0),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.replace,
                                                    expression: "replace"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.replace)
                                                    ? t._i(t.replace, null) > -1
                                                    : t.replace
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.replace,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.replace = a.concat([o]))
                                                            : r > -1 && (t.replace = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.replace = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(1),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.name,
                                                    expression: "name"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.name)
                                                    ? t._i(t.name, null) > -1
                                                    : t.name
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.name,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.name = a.concat([o]))
                                                            : r > -1 && (t.name = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.name = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(2),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.insert,
                                                    expression: "insert"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.insert)
                                                    ? t._i(t.insert, null) > -1
                                                    : t.insert
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.insert,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.insert = a.concat([o]))
                                                            : r > -1 && (t.insert = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.insert = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(3),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.decimals,
                                                    expression: "decimals"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.decimals)
                                                    ? t._i(t.decimals, null) > -1
                                                    : t.decimals
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.decimals,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.decimals = a.concat([o]))
                                                            : r > -1 && (t.decimals = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.decimals = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(4),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.image,
                                                    expression: "image"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.image)
                                                    ? t._i(t.image, null) > -1
                                                    : t.image
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.image,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.image = a.concat([o]))
                                                            : r > -1 && (t.image = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.image = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(5),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.tax,
                                                    expression: "tax"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.tax)
                                                    ? t._i(t.tax, null) > -1
                                                    : t.tax
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.tax,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.tax = a.concat([o]))
                                                            : r > -1 && (t.tax = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.tax = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ]),
                            a("div", {
                                staticClass: "row"
                            }, [
                                t._m(6),
                                a("div", {
                                    staticClass: "col-4 text-right"
                                }, [a("label", {
                                        staticClass: "switch"
                                    }, [
                                        a("input", {
                                            directives: [
                                                {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.decimalsQTY,
                                                    expression: "decimalsQTY"
                                                }
                                            ],
                                            attrs: {
                                                type: "checkbox"
                                            },
                                            domProps: {
                                                checked: Array.isArray(t.decimalsQTY)
                                                    ? t._i(t.decimalsQTY, null) > -1
                                                    : t.decimalsQTY
                                            },
                                            on: {
                                                change: function (e) {
                                                    var a = t.decimalsQTY,
                                                        s = e.target,
                                                        i = !!s.checked;
                                                    if (Array.isArray(a)) {
                                                        var o = null,
                                                            r = t._i(a, o);
                                                        s.checked
                                                            ? r < 0 && (t.decimalsQTY = a.concat([o]))
                                                            : r > -1 && (t.decimalsQTY = a.slice(0, r).concat(a.slice(r + 1)))
                                                    } else 
                                                        t.decimalsQTY = i
                                                }
                                            }
                                        }),
                                        a("span", {staticClass: "slider round"})
                                    ])])
                            ])
                        ])]
                    )},
                Qe = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Agrupar productos del mismo tipo")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Habilitar búsqueda de productos por palabra clave")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Insertar productos automáticamente al buscar")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Mostrar decimales en precios")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Mostrar imagen del producto")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Mostrar impuesto del producto")])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-8"
                        }, [a("p", [t._v("Permitir decimales en cantidad del producto")])])
                    }
                ],
                ze = {
                    name: "Settings",
                    data: function () {
                        return {
                            insert: !1,
                            replace: !1,
                            tax: !1,
                            image: !1,
                            decimals: !1,
                            name: !1,
                            decimalsQTY: !1,
                            price: !1,
                            roles: {},
                            roleID: "",
                            url: ""
                        }
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscriptefx_pos_vue_settings_sl",
                            s = "customdeployefx_pos_vue_settings_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e,
                                t.getRoles(),
                                t.roleID = t.$store.state.user.role
                            })
                    },
                    watch: {
                        insert: function (t) {
                            this.roleID && (this.$store.commit(F, t), this.sendSetting("searchInsert", t))
                        },
                        replace: function (t) {
                            this.roleID && (this.$store.commit(V, t), this.sendSetting("itemReplace", t))
                        },
                        tax: function (t) {
                            this.roleID && (this.$store.commit(Q, t), this.sendSetting("itemTax", t))
                        },
                        image: function (t) {
                            this.roleID && (this.$store.commit(B, t), this.sendSetting("itemImage", t))
                        },
                        decimals: function (t) {
                            this.roleID && (
                                this.$store.commit(z, t),
                                this.sendSetting("decimalNumbers", t)
                            )
                        },
                        name: function (t) {
                            this.roleID && (this.$store.commit(H, t), this.sendSetting("nameSearch", t))
                        },
                        decimalsQTY: function (t) {
                            this.roleID && (this.$store.commit(X, t), this.sendSetting("decimalQTY", t))
                        },
                        price: function (t) {
                            this.roleID && (this.$store.commit(W, t), this.sendSetting("priceEdition", t))
                        },
                        roleID: function (t) {
                            if (t) {
                                var e = this,
                                    a = {
                                        custparam_mode: "view",
                                        custparam_role: t
                                    };
                                e.loading = !0,
                                ht
                                    .a
                                    .get(e.url, {params: a})
                                    .then(function (t) {
                                        if (2 === t.data.StatusCode) {
                                            console.log(t.data.Message);
                                            var a = t
                                                .data
                                                .Result[0];
                                            console.log("Settings:", a),
                                            e
                                                .$store
                                                .dispatch(S, a)
                                                .then(function () {
                                                    console.log("Settings set"),
                                                    e.getSettings(),
                                                    e.loading = !1
                                                })
                                        } else 
                                            3 === t.data.StatusCode && console.error(t.data.Message)
                                    })
                            }
                        }
                    },
                    mounted: function () {
                        this.getSettings()
                    },
                    methods: {
                        sendSetting: function (t, e) {
                            var a = this,
                                s = {
                                    custparam_mode: "set",
                                    custparam_role: a.roleID,
                                    custparam_setting: t,
                                    custparam_setValue: e
                                };
                            ht
                                .a
                                .post(a.url, s)
                                .then(function (t) {
                                    2 === t.data.StatusCode
                                        ? console.log(t.data.Message)
                                        : 3 === t.data.StatusCode && console.error(t.data.Message)
                                })
                        },
                        getSettings: function () {
                            this.insert = this.$store.state.searchInsert,
                            this.replace = this.$store.state.itemReplace,
                            this.tax = this.$store.state.itemTax,
                            this.image = this.$store.state.itemImage,
                            this.decimals = this.$store.state.decimalNumbers,
                            this.name = this.$store.state.nameSearch,
                            this.decimalsQTY = this.$store.state.decimalQTY,
                            this.price = this.$store.state.priceEdition
                        },
                        getRoles: function () {
                            var t = this,
                                e = this,
                                a = {
                                    custparam_mode: "roles"
                                };
                            ht
                                .a
                                .get(e.url, {params: a})
                                .then(function (e) {
                                    2 === e.data.StatusCode
                                        ? (console.log(e.data.Message), t.roles = Object.values(e.data.Result))
                                        : 3 === e.data.StatusCode && console.error(e.data.Message)
                                })
                        }
                    }
                },
                He = ze,
                Xe = Object(at["a"])(He, Be, Qe, !1, null, null, null),
                We = Xe.exports,
                Je = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "container pt-3 pb-5"
                    }, [
                        a(
                                "form", {
                                on: {
                                    submit: function (e) {
                                        return e.preventDefault(),
                                        t.getPDF(e)
                                    }
                                }
                            }, [
                                a(
                                        "div", {
                                        staticClass: "form-row align-items-end"
                                    }, [
                                        a("div", {
                                                staticClass: "col-8 col-md-10"
                                            }, [
                                                a("div", {
                                                        staticClass: "form-group"
                                                    }, [
                                                        a("label", {
                                                                staticClass: "text-white",
                                                                attrs: {
                                                                        for: "ticket"}
                                                                },
                                                                [t._v("ID de la ticket:")]
                                                            ), a("input", {
                                                                directives: [
                                                                    {
                                                                        name: "model",
                                                                        rawName: "v-model",
                                                                        value: t.ticket,
                                                                        expression: "ticket"
                                                                    }
                                                                ],
                                                                staticClass: "form-control",
                                                                attrs: {
                                                                    type: "text",
                                                                    id: "ticket",
                                                                    required: ""
                                                                },
                                                                domProps: {
                                                                    value: t.ticket
                                                                },
                                                                on: {
                                                                    input: function (e) {
                                                                        e.target.composing || (t.ticket = e.target.value)
                                                                    }
                                                                }
                                                            })]
                                                    )]
                                            ), t._m(0)]
                                    ), t.error
                                        ? a("p", {
                                            staticClass: "text-danger"
                                        }, [t._v(t._s(t.error))])
                                        : t._e()
                                    ]
                            ), t.pdf
                                ? a("div", [
                                    a(
                                        "div",
                                        {
                                            staticClass: "Iframe-Master-CC-and-Rs set-margin set-padding set-border set-box-shadow cente" +
                                                    "r-block-horiz"
                                        },
                                        [a("div", {
                                                staticClass: "responsive-wrapper responsive-wrapper-wxh-572x612",
                                                staticStyle: {
                                                    "-webkit-overflow-scrolling": "touch",
                                                    overflow: "auto"
                                                }
                                            }, [a("iframe", {
                                                    attrs: {
                                                        src: t.pdf + "#zoom=100"
                                                    }
                                                }, [t._m(1)])])]
                                    ),
                                    a("div", [a("p", {
                                            staticClass: "text-right"
                                        }, [a("button", {
                                                staticClass: "btn btn-warning",
                                                attrs: {
                                                    type: "button"
                                                },
                                                on: {
                                                    click: t.openPDF
                                                }
                                            }, [t._v("Descargar")])])])
                                ])
                                : t._e(),
                            t.loading
                                ? a("loader")
                                : t._e()
                            ],
                        1
                    )},
                Ze = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "col-4 col-md-2"
                        }, [a("div", {
                                staticClass: "form-group"
                            }, [a("button", {
                                    staticClass: "btn btn-primary btn-block",
                                    attrs: {
                                        type: "submit"
                                    }
                                }, [t._v("Buscar")])])])
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("p", {
                            staticStyle: {
                                "font-size": "110%"
                            }
                        }, [
                            a("em", [
                                a("strong", [t._v("ERROR: ")]),
                                t._v(
                                    "\n            An iframe should be displayed here but your browser version does" +
                                    " not support iframes. "
                                )
                            ]),
                            t._v(
                                "Please\n            update your browser to its most recent version and try aga" +
                                "in."
                            )
                        ])
                    }
                ],
                Ke = {
                    name: "Ticket",
                    data: function () {
                        return {ticket: "", url: "", pdf: ""}
                    },
                    created: function () {
                        var t = this,
                            e = document
                                .getElementById("response-result-url")
                                .textContent,
                            a = "customscript_efx_pos_vue_invoice_sl",
                            s = "customdeploy_efx_pos_vue_invoice_sl";
                        this
                            .getURL(e, a, s)
                            .then(function (e) {
                                t.url = e
                            })
                    },
                    methods: {
                        getPDF: function () {
                            var t = this;
                            this.loading = !0;
                            var e = {
                                invoice: this.ticket,
                                url: this.url
                            };
                            this
                                .$store
                                .dispatch("getSATPDF", e)
                                .then(function (e) {
                                    t.pdf = e
                                })
                                .catch(function (e) {
                                    t.error = e
                                })
                                . finally(function () {
                                    t.loading = !1
                                })
                        },
                        openPDF: function () {
                            window.open(this.pdf)
                        }
                    }
                },
                Ge = Ke,
                ta = (a("e2+n"), Object(at["a"])(Ge, Je, Ze, !1, null, null, null)),
                ea = ta.exports;
            s["a"].use(dt["a"]);
            var aa,
                sa = new dt["a"]({
                    mode: "history",
                    routes: [
                        {
                            path: "/",
                            name: "login",
                            component: Re
                        }, {
                            path: "/invoice",
                            name: "invoice",
                            component: re
                        }, {
                            path: "/checkout",
                            name: "checkout",
                            component: Oe
                        }, {
                            path: "/accounts",
                            name: "accounts",
                            component: Ve
                        }, {
                            path: "/tickets",
                            name: "tickets",
                            component: ea
                        }, {
                            path: "/settings",
                            name: "settings",
                            component: We
                        }
                    ]
                }),
                ia = {
                    added: !1,
                    isMobile: !1,
                    targetProduct: void 0,
                    location: void 0,
                    client: void 0,
                    address: "",
                    cart: [],
                    paymentMethods: [],
                    totalCash: 0,
                    listProducts: [],
                    user: void 0,
                    currentDate: new Date,
                    employeeId: void 0,
                    subsidiaryId: void 0,
                    discountProducts: [],
                    globalDiscount: void 0,
                    tax: void 0,
                    defaultClientId: void 0,
                    locations: [],
                    sat: void 0,
                    satMethods: [],
                    satPayments: [],
                    satCFDI: [],
                    logo: "",
                    itemReplace: !1,
                    searchInsert: !1,
                    itemImage: !1,
                    decimalNumbers: !1,
                    itemTax: !1,
                    nameSearch: !1,
                    decimalQTY: !1,
                    priceEdition: !1
                },
                oa = a("oyJW"),
                ra = (
                    a("pIFo"),
                    aa = {},
                    Object(oa["a"])(aa, d, function (t, e) {
                        var a = e.product,
                            s = e.replace,
                            i = t
                                .cart
                                .findIndex(function (t) {
                                    return t.id === a.id
                                });
                        i > -1 && s
                            ? t
                                .cart
                                .splice(i, 1, a)
                            : t
                                .cart
                                .push(a)
                    }),
                    Object(oa["a"])(aa, u, function (t, e) {
                        var a = e.product,
                            s = e.index;
                        t
                            .cart
                            .splice(s, 1, a)
                    }),
                    Object(oa["a"])(aa, m, function (t, e) {
                        t
                            .cart
                            .splice(e, 1)
                    }),
                    Object(oa["a"])(aa, p, function (t) {
                        t.cart = []
                    }),
                    Object(oa["a"])(aa, v, function (t, e) {
                        t.added = e
                    }),
                    Object(oa["a"])(aa, f, function (t, e) {
                        t.isMobile = e
                    }),
                    Object(oa["a"])(aa, h, function (t, e) {
                        t.targetProduct = e
                    }),
                    Object(oa["a"])(aa, g, function (t, e) {
                        e && e.hasOwnProperty("id") && void 0 !== t.client && t.client.id !== e.id && (
                            t.cart = []
                        ),
                        t.client = e
                    }),
                    Object(oa["a"])(aa, C, function (t, e) {
                        e && e.hasOwnProperty("id") && void 0 !== t.location && t.location.id !== e.id && (
                            t.cart = []
                        ),
                        t.location = e
                    }),
                    Object(oa["a"])(aa, _, function (t, e) {
                        t.employeeId = e
                    }),
                    Object(oa["a"])(aa, b, function (t, e) {
                        t.subsidiaryId = e
                    }),
                    Object(oa["a"])(aa, y, function (t, e) {
                        t.discountProducts = e
                    }),
                    Object(oa["a"])(aa, x, function (t, e) {
                        t.globalDiscount = e
                    }),
                    Object(oa["a"])(aa, w, function (t, e) {
                        t.tax = e
                    }),
                    Object(oa["a"])(aa, k, function (t, e) {
                        t.defaultClientId = e
                    }),
                    Object(oa["a"])(aa, M, function (t, e) {
                        t.locations = e
                    }),
                    Object(oa["a"])(aa, T, function (t, e) {
                        t.sat = e
                    }),
                    Object(oa["a"])(aa, I, function (t, e) {
                        t.satMethods = e
                    }),
                    Object(oa["a"])(aa, E, function (t, e) {
                        t.satPayments = e
                    }),
                    Object(oa["a"])(aa, O, function (t, e) {
                        t.satCFDI = e
                    }),
                    Object(oa["a"])(aa, D, function (t, e) {
                        t.logo = e
                    }),
                    Object(oa["a"])(aa, P, function (t, e) {
                        var a = t
                            .listProducts
                            .findIndex(function (t) {
                                return t.id === e.id
                            });
                        a > -1
                            ? t
                                .listProducts
                                .splice(a, 1, e)
                            : t
                                .listProducts
                                .push(e)
                    }),
                    Object(oa["a"])(aa, j, function (t) {
                        t.listProducts = []
                    }),
                    Object(oa["a"])(aa, $, function (t, e) {
                        t
                            .paymentMethods
                            .push(e)
                    }),
                    Object(oa["a"])(aa, N, function (t, e) {
                        t
                            .paymentMethods
                            .splice(e, 1)
                    }),
                    Object(oa["a"])(aa, A, function (t) {
                        t.paymentMethods = []
                    }),
                    Object(oa["a"])(aa, R, function (t, e) {
                        t.totalCash += e
                    }),
                    Object(oa["a"])(aa, q, function (t, e) {
                        t.totalCash -= e
                    }),
                    Object(oa["a"])(aa, L, function (t) {
                        t.totalCash = 0
                    }),
                    Object(oa["a"])(aa, U, function (t, e) {
                        t.user = e
                    }),
                    Object(oa["a"])(aa, Y, function (t, e) {
                        t.address = e
                    }),
                    Object(oa["a"])(aa, F, function (t, e) {
                        t.searchInsert = e
                    }),
                    Object(oa["a"])(aa, V, function (t, e) {
                        t.itemReplace = e
                    }),
                    Object(oa["a"])(aa, B, function (t, e) {
                        t.itemImage = e
                    }),
                    Object(oa["a"])(aa, Q, function (t, e) {
                        t.itemTax = e
                    }),
                    Object(oa["a"])(aa, z, function (t, e) {
                        t.decimalNumbers = e
                    }),
                    Object(oa["a"])(aa, H, function (t, e) {
                        t.nameSearch = e
                    }),
                    Object(oa["a"])(aa, X, function (t, e) {
                        t.decimalQTY = e
                    }),
                    Object(oa["a"])(aa, W, function (t, e) {
                        t.priceEdition = e
                    }),
                    aa
                ),
                na = Object(oa["a"])({
                    setView: function (t, e) {
                        var a = t.commit;
                        a(f, e < 992)
                    },
                    addProduct: function (t, e) {
                        var a = t.commit,
                            s = t.getters,
                            i = t.state,
                            o = i.itemReplace,
                            r = !1;
                        if (o) {
                            var n = e.qty,
                                c = e.price * n,
                                l = e.discount * n,
                                u = e.tax * n,
                                m = s.getCartProductById(e.id);
                            m && o && (
                                e.price != m.price || e.discountCode != m.discountCode || e.taxCode != m.taxCode
                                    ? r = confirm(
                                        "Este producto ya se agrego. Desea reemplazarlo?\nCancel = Agregar linea adicio" +
                                        "nal"
                                    )
                                    : (n += m.qty, c *= n, l *= n, u *= n, r = !0)
                            ),
                            e["subtotal"] = c,
                            e["discount"] = l,
                            e["tax"] = u,
                            e["total"] = e.subtotal - e.discount + e.tax,
                            e["qty"] = n
                        }
                        var p = {
                            product: e,
                            replace: r
                        };
                        a(d, p),
                        a(v, !0)
                    },
                    removeProduct: function (t, e) {
                        var a = t.commit;
                        a(m, e),
                        a(v, !0)
                    },
                    emptyCart: function (t) {
                        var e = t.commit;
                        e(p),
                        e(v, !0)
                    },
                    addPayment: function (t, e) {
                        var a = t.commit;
                        a($, e),
                        a(R, e.amount)
                    },
                    removePayment: function (t, e) {
                        var a = t.commit,
                            s = t.state,
                            i = s
                                .paymentMethods[e]
                                .amount;
                        a(N, e),
                        a(q, i)
                    },
                    searchProduct: function (t, e) {
                        var a = t.commit,
                            s = e.url,
                            i = e.productId,
                            o = e.subsidiaryId,
                            r = e.priceLevelId,
                            n = e.locationId,
                            c = e.currency,
                            l = e.name,
                            d = e.searchType;
                        return new Promise(function (t, e) {
                            var u = {
                                custparam_mode: "view",
                                custparam_code: i,
                                custparam_price: r || "1",
                                custparam_location: n,
                                custparam_subsidiary: o,
                                custparam_currency: c,
                                custparam_name: l,
                                custparam_search: d
                            };
                            ht
                                .a
                                .get(s, {params: u})
                                .then(function (s) {
                                    if (2 === s.data.StatusCode) {
                                        console.log(s.data.Message);
                                        var i = Object.values(s.data.Result);
                                        i.length && (a(j), i.forEach(function (t) {
                                            a(P, t)
                                        })),
                                        t()
                                    } else 
                                        3 === s.data.StatusCode && (console.error(s.data.Message), e())
                                })
                        })
                    },
                    checkout: function (t, e) {
                        var a = t.state,
                            s = e.url,
                            i = e.ring;
                        return new Promise(function (t, e) {
                            try {
                                var o = a.globalDiscount && a
                                        .globalDiscount
                                        .hasOwnProperty("id")
                                            ? a.globalDiscount.id
                                            : "",
                                    r = i
                                        ? "T"
                                        : "",
                                    n = {
                                        custparam_mode: "create",
                                        custparam_timbrar: r,
                                        custparam_discauntglb: o,
                                        custparam_customer: a.client.id,
                                        custparam_subsidiary: a.subsidiaryId,
                                        custparam_location: a.location.id,
                                        custparam_memo: "Factura "
                                            .concat(a.client.names, " - ")
                                            .concat(a.client.rfc),
                                        custparam_items: {},
                                        custparam_payment: {},
                                        custparam_createdby: a.user.id
                                    };
                                i && (
                                    n["custparam_forma"] = a.sat.method,
                                    n["custparam_metodo"] = a.sat.payment,
                                    n["custparam_cfdi"] = a.sat.cfdi
                                ),
                                a
                                    .cart
                                    .forEach(function (t, e) {
                                        n.custparam_items[e] = {
                                            id: t.id,
                                            quantity: t.qty,
                                            amount: t.price,
                                            tax_code: t.taxCode,
                                            priceLevel: t.priceLevel,
                                            currency: t.currency,
                                            discounts: {}
                                        },
                                        t.hasOwnProperty("discountCode") && "N/A" !== t.discountCode && (
                                            n.custparam_items[e].discounts = {
                                                id: t.discountCode,
                                                tax_code: t.taxCode
                                            }
                                        )
                                    }),
                                a
                                    .paymentMethods
                                    .forEach(function (t, e) {
                                        n.custparam_payment[e] = {
                                            id: t.method.id,
                                            amount: t.amount,
                                            change: t.change
                                        }
                                    }),
                                ht
                                    .a
                                    .post(s, n)
                                    .then(function (a) {
                                        2 === a.data.StatusCode
                                            ? (console.log(a.data.Message), t(a.data.Result))
                                            : 3 === a.data.StatusCode && (console.error(a.data.Message), e(a.data.Message))
                                    })
                                    .catch(function (t) {
                                        e(t.message)
                                    })
                                } catch (t) {
                                console.error(t.message),
                                e(t.message)
                            }
                        })
                    },
                    getSATPDF: function (t, e) {
                        t.state;
                        var a = e.invoice,
                            s = e.url,
                            i = {
                                custparam_mode: "url",
                                custparam_invoice: a
                            };
                        return new Promise(function (t, e) {
                            ht
                                .a
                                .get(s, {params: i})
                                .then(function (a) {
                                    2 === a.data.StatusCode
                                        ? (console.log(a.data.Message), t(a.data.Result))
                                        : 3 === a.data.StatusCode && (
                                            console.error(a.data.Message),
                                            e("Ha ocurrido un error al obtener la URL")
                                        )
                                })
                                .catch(function (t) {
                                    e(t.message)
                                })
                            })
                    },
                    restoreDefault: function (t) {
                        var e = t.commit;
                        e(h, void 0),
                        e(p),
                        e(A),
                        e(L),
                        e(x, void 0),
                        e(T, void 0)
                    },
                    logout: function (t) {
                        var e = t.commit,
                            a = t.dispatch;
                        a("restoreDefault"),
                        e(C, void 0),
                        e(g, void 0),
                        e(Y, ""),
                        e(U, void 0),
                        e(_, void 0),
                        e(b, void 0),
                        e(y, []),
                        e(w, void 0),
                        e(k, void 0),
                        e(M, []),
                        e(I, []),
                        e(E, []),
                        e(O, [])
                    }
                }, S, function (t, e) {
                    var a = t.commit;
                    a(F, e.searchInsert),
                    a(V, e.itemReplace),
                    a(B, e.itemImage),
                    a(Q, e.itemTax),
                    a(z, e.decimalNumbers),
                    a(H, e.nameSearch),
                    a(X, e.decimalQTY),
                    a(W, e.priceEdition)
                }),
                ca = {
                    getCartItemsCount: function (t) {
                        var e = 0;
                        return t
                            .cart
                            .forEach(function (t) {
                                e += t.qty
                            }),
                        e
                    },
                    getCartAmount: function (t) {
                        return function (e) {
                            var a = 0;
                            return t
                                .cart
                                .forEach(function (t) {
                                    a += t[e]
                                }),
                            a
                        }
                    },
                    getTargetLocation: function (t) {
                        return t.location
                            ? t.location.id
                            : ""
                    },
                    getTargetClient: function (t) {
                        return t.client
                            ? {
                                label: ""
                                    .concat(t.client.entidyId, " - ")
                                    .concat(t.client.rfc),
                                value: t.client.id
                            }
                            : null
                    },
                    getProductAvailableQTY: function (t) {
                        return function (e) {
                            var a = t
                                    .listProducts
                                    .find(function (t) {
                                        return t.id === e
                                    }),
                                s = a.qty;
                            return t
                                .cart
                                .forEach(function (t) {
                                    t.id === a.id && (s -= t.qty)
                                }),
                            s
                        }
                    },
                    getCartProductById: function (t) {
                        return function (e) {
                            return t
                                .cart
                                .find(function (t) {
                                    return t.id === e
                                })
                        }
                    },
                    getLocationById: function (t) {
                        return function (e) {
                            return t
                                .locations
                                .find(function (t) {
                                    return t.id === e
                                })
                        }
                    },
                    isValidLocation: function (t) {
                        return void 0 !== t.location
                    },
                    isValidClient: function (t) {
                        return void 0 !== t.client
                    },
                    isValidAddress: function (t) {
                        return "" !== t.address
                    },
                    canCheckout: function (t, e) {
                        var a = 0;
                        return t
                            .paymentMethods
                            .forEach(function (t) {
                                a += t.amount
                            }),
                        a >= e.getCartAmount("total")
                    },
                    getCashNeeded: function (t, e) {
                        return e.getCartAmount("total") - t.totalCash
                    },
                    getUpdatedProductList: function (t) {
                        var e = clone(t.listProducts),
                            a = clone(t.cart);
                        return a.forEach(function (t) {
                            var a = e.findIndex(function (e) {
                                return e.id === t.id
                            });
                            -1 !== a && e[a].hasOwnProperty("qty") && (e[a].qty = e[a].qty - t.qty)
                        }),
                        e
                    }
                };
            s["a"].use(ot["a"]);
            var la = new ot["a"].Store(
                    {state: ia, mutations: ra, actions: na, getters: ca}
                ),
                da = a("Snq/"),
                ua = a.n(da),
                ma = function () {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                },
                pa = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", {
                            staticClass: "d-flex justify-content-center align-items-center loader-box",
                            attrs: {
                                id: "loader"
                            }
                        }, [a("div", {
                                staticClass: "position-relative d-flex loader-container"
                            }, [
                                a("div", {staticClass: "loader-element center-element"}),
                                a("div", {
                                    staticClass: "align-self-center text-center flex-fill animate-text text-white"
                                }, [t._v("Cargando")])
                            ])])
                    }
                ],
                va = {
                    name: "Loader"
                },
                fa = va,
                ha = (a("3kiN"), Object(at["a"])(fa, ma, pa, !1, null, null, null)),
                ga = ha.exports,
                Ca = a("a94B"),
                _a = (a("hLT2"), a("a1Th"), a("wd/R")),
                ba = a.n(_a),
                ya = {
                    data: function () {
                        return {
                            loading: !1,
                            error: ""
                        }
                    },
                    methods: {
                        getURL: function (t, e, a) {
                            return new Promise(function (s, i) {
                                var o = {
                                    custparam_script: e,
                                    custparam_deploy: a
                                };
                                ht
                                    .a
                                    .get(t, {params: o})
                                    .then(function (t) {
                                        2 === parseFloat(t.data.statusCode) && s(t.data.results)
                                    })
                                    .catch(function (t) {
                                        i(t)
                                    })
                                })
                        },
                        sendData: function (t, e) {
                            return new Promise(function (a, s) {
                                e = JSON.stringify(e);
                                var i = {
                                    "Content-Type": "application/json"
                                };
                                ht
                                    .a
                                    .post(t, e, {headers: i})
                                    .then(function (t) {
                                        a(t)
                                    })
                                    .catch(function (t) {
                                        s(t)
                                    })
                                })
                        },
                        getDatesDisabled: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 0,
                                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                s = this;
                            return {
                                customPredictor: function (i) {
                                    var o = t
                                            ? ba()()
                                                .add(e, "M")
                                                .startOf("month")
                                                .format("YYYY-MM-DD hh:mm")
                                            : new Date,
                                        r = ba()()
                                            .add(e + 1, "M")
                                            .startOf("month")
                                            .format("YYYY-MM-DD hh:mm");
                                    return s.formatDate(i) < s.formatDate(o) || (
                                        !!(a && s.formatDate(i) >= s.formatDate(r)) || void 0
                                    )
                                }
                            }
                        },
                        formatDate: function (t) {
                            return ba()(t).format("MM/DD/YYYY")
                        },
                        strToDate: function (t) {
                            return ba()(t, "DD-MM-YYYY").toString()
                        },
                        getDiffMonth: function (t, e) {
                            return Math.trunc(ba()(t, "MM-DD-YYYY").diff(
                                ba()(e, "MM-DD-YYYY"),
                                "months",
                                !0
                            ))
                        },
                        scrollAnimation: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                            c()("html, body").animate({
                                scrollTop: c()(t)
                                    .offset()
                                    .top - e
                            }, 500)
                        },
                        dataReset: function () {
                            var t = this;
                            Object
                                .keys(this._data)
                                .forEach(function (e) {
                                    switch (Object(Ca["a"])(t._data[e])) {
                                        case "string":
                                            t._data[e] = "";
                                            break;
                                        case "number":
                                            t._data[e] = 0;
                                            break;
                                        case "boolean":
                                            t._data[e] = !1
                                    }
                                })
                        }
                    }
                };
            a("SYky");
            s["a"].component("v-select", ua.a),
            s["a"].component("loader", ga),
            s["a"].mixin(ya),
            s["a"].filter("round", function (t) {
                try {
                    return localStorage.getItem("decimalNumbers") && "true" === localStorage
                        .getItem(
                            "decimalNumbers"
                        )
                        .toLowerCase()
                            ? parseFloat(t).toFixed(4)
                            : Math.round(t)
                } catch (t) {
                    console.log("Round", t.message)
                }
            }),
            s["a"].config.productionTip = !1,
            s["a"].config.devtools = !0,
            window.clone = function (t) {
                return JSON.parse(JSON.stringify(t))
            },
            sa.beforeEach(function (t, e, a) {
                la.state.user || "login" === t.name
                    ? "checkout" !== t.name || la.state.client && la.state.cart.length && la.state.location
                        ? a()
                        : (console.log("No es posible navegar al checkout"), a({name: "invoice"}))
                    : (console.log("Debe iniciar session"), a({name: "login"}))
            }),
            new s["a"]({
                router: sa,
                store: la,
                render: function (t) {
                    return t(lt)
                }
            }).$mount("#app")
        },
        WKfL: function (t, e, a) {},
        bEkb: function (t, e, a) {
            "use strict";
            var s = a("2ZpZ"),
                i = a.n(s);
            i.a
        },
        "e2+n"
        : function (t, e, a) {
            "use strict";
            var s = a("IPBt"),
                i = a.n(s);
            i.a
        },
        nNx0: function (t, e, a) {
            "use strict";
            var s = a("uWEC"),
                i = a.n(s);
            i.a
        },
        uWEC: function (t, e, a) {}
    }
);
//# sourceMappingURL=app.26ac07fe.js.map

//# sourceMappingURL=app.26ac07fe.js.map