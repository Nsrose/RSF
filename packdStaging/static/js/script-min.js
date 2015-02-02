
var v8m = {
    'o5': 122.262702,
    'A5': "update",
    'Z5': 200,
    'g': function(m, l) {
        return m * l;
    },
    'V5': function(m, l) {
        return m > l;
    },
    'x3': "Sunday",
    'E5': "cookie",
    'n': function(m, l) {
        return m < l;
    },
    't': function(m, l) {
        return m - l;
    },
    'k6': "Not Crowded",
    'B': function(m, l) {
        return m * l;
    },
    'v6': "val",
    'y': function(m, l, Y, H) {
        return m * l * Y * H;
    },
    'h': function(m, l) {
        return m - l;
    },
    'g6': "RSF is Closed",
    'q5': "current_average",
    'y3': "weight",
    'B3': "66% - 89%",
    'l3': 2,
    'N3': "=",
    'T5': "",
    'X6': "89% - 100%",
    'D3': "Thursday",
    'm3': 3,
    'R6': "#percentage",
    'f6': "-JgOwwFlFThZOqBMUnP0",
    'Y5': function(m, l) {
        return m == l;
    },
    'F3': "Friday",
    'C': function(m, l) {
        return m * l;
    },
    'u3': "Tuesday",
    'n5': "Mildly Crowded",
    'O6': "#data",
    'v5': "text",
    'd6': "Very Crowded",
    'G5': function(m, l) {
        return m == l;
    },
    'L6': "measure",
    'J': function(m, l) {
        return m * l;
    },
    'u6': (function(i8) {
        return (function(P8, F8) {
            return (function(L8) {
                return {
                    j6: L8
                };
            })(function(n6) {
                var a8, m8 = 0;
                for (var t8 = P8; m8 < n6["length"]; m8++) {
                    var X8 = F8(n6, m8);
                    a8 = m8 === 0 ? X8 : a8 ^ X8;
                }
                return a8 ? t8 : !t8;
            });
        })((function(b8, Y8, l8, f8) {
            var H8 = 34;
            return b8(i8, H8) - f8(Y8, l8) > H8;
        })(parseInt, Date, (function(Y8) {
            return ('' + Y8)["substring"](1, (Y8 + '')["length"] - 1);
        })('_getTime2'), function(Y8, l8) {
            return new Y8()[l8]();
        }), function(n6, m8) {
            var E6 = parseInt(n6["charAt"](m8), 16)["toString"](2);
            return E6["charAt"](E6["length"] - 1);
        });
    })('r31ilfjm'),
    'k': function(m, l) {
        return m == l;
    },
    's6': "Monday",
    'R5': "26% - 65%",
    't3': 4,
    'b5': function(m, l) {
        return m == l;
    },
    'X5': function(m, l) {
        return m != l;
    },
    'J6': "Saturday",
    'Y3': 1,
    'v3': null,
    'G6': 0.050,
    'o3': 37.868501,
    'D6': "ready",
    's3': "Extreme",
    'e5': "0% - 25%",
    'P5': function(m, l) {
        return m * l;
    },
    'i3': "Size",
    'h3': "undefined",
    'b': function(m, l, Y) {
        return m * l / Y;
    },
    'w': function(m, l, Y, H, f) {
        return m * l * Y * H * f;
    },
    'c5': false,
    'p': function(m, l) {
        return m == l;
    },
    'r6': "add",
    'H3': 0,
    'G3': "child",
    'D5': function(m, l) {
        return m < l;
    },
    'B5': "Wednesday",
    'q': function(m, l) {
        return m > l;
    },
    'q6': "https://packd.firebaseio.com/",
    'U3': true
};

function checkLoadFactor(m, l, Y) {
    var H = v8m.u6.j6("d31") ? "k" : "dayNumber",
        f = v8m.u6.j6("f3") ? "current" : "q",
        L = v8m.u6.j6("e466") ? "" : m[v8m.G3](v8m.i3)[v8m.v6]();
    if (v8m[f](L, LOAD_FACTOR)) {
        fireRef[v8m.A5]({
            Locked: v8m.U3
        });
        refactor(m);
    } else {
        var X = v8m.u6.j6("fdb1") ? "Saturday" : m[v8m.G3](v8m.f6)[v8m.G3](l)[v8m.G3](Y)[v8m.G3](v8m.q5)[v8m.G3](v8m.L6)[v8m.v6]();
        if (v8m[H](X, v8m.v3)) {
            $(v8m.O6)[v8m.v5](closedMessage);
            return;
        } else if (USE_PERCENTS) {
            $(v8m.R6)[v8m.v5](strings_to_percents[X]);
        }
        $(v8m.O6)[v8m.v5](X);
    }
}

function setCookie(l, Y, H) {
    var f = v8m.u6.j6("ef41") ? "day" : "toUTCString",
        L = v8m.u6.j6("ed3") ? "Locked" : "expires=",
        X = v8m.u6.j6("1d4") ? "Very Crowded" : 1000,
        i = v8m.u6.j6("efa") ? 60 : 37.868501,
        F = v8m.u6.j6("e76a") ? 24 : "Bad data input.",
        W = v8m.u6.j6("68f6") ? "w" : "c",
        P = v8m.u6.j6("82") ? "getCookie" : "getTime",
        V = v8m.u6.j6("aa") ? "getDay" : "setTime",
        r = function() {
            var m = "; ";
            document[v8m.E5] = l + v8m.N3 + Y + m + G;
        },
        a = v8m.u6.j6("143") ? "round" : new Date();
    a[V](a[P]() + (v8m[W](H, F, i, i, X)));
    var G = v8m.u6.j6("dbf") ? L + a[f]() : "#send_data_submit";
    r();
}

function getDenom(m) {
    var l = v8m.u6.j6("8714") ? "Bad data input." : v8m.H3;
    for (var Y in m) {
        var H = m[Y];
        l += H[v8m.y3];
    }
    return l;
}

function refactor(m) {
    var l = "p",
        Y = v8m.u6.j6("c32d") ? "ints_to_strings" : "set",
        H = "/",
        f = "https://packd.firebaseio.com/-JgOwwFlFThZOqBMUnP0/",
        L = "round",
        X = v8m.u6.j6("7c") ? "B" : "round",
        i = m[v8m.G3](v8m.f6)[v8m.v6]();
    for (var F in i) {
        for (var W in i[F]) {
            var P = i[F][W],
                V = getDenom(P),
                r = v8m.H3;
            for (var a in P) {
                var G = weight(P[a][v8m.L6]),
                    x = P[a][v8m.y3];
                r += v8m[X](G, (x / V));
            }
            var N = ints_to_strings[Math[L](r)],
                D = V,
                O = f + F + H + W,
                d = new Firebase(O);
            d[Y]({
                "current_average": {
                    "measure": N,
                    "weight": D,
                }
            });
        }
    }
    fireRef[v8m.A5]({
        Locked: v8m.c5
    });
    fireRef[v8m.A5]({
        Size: v8m.H3
    });
    var s = m[v8m.G3](v8m.f6)[v8m.G3](F)[v8m.G3](W)[v8m.G3](v8m.q5)[v8m.G3](v8m.L6)[v8m.v6]();
    if (v8m[l](s, v8m.v3)) {
        $(v8m.O6)[v8m.v5](closedMessage);
        return;
    } else if (USE_PERCENTS) {
        $(v8m.R6)[v8m.v5](strings_to_percents[s]);
    }
    $(v8m.O6)[v8m.v5](s);
}

function checkCookie(m) {
    var l = "You already voted, thanks!",
        Y = "X5",
        H = v8m.u6.j6("dd8") ? "val" : "user_data",
        f = getCookie(H);
    if (v8m[Y](f, v8m.T5)) {
        alert(l);
        return v8m.U3;
    } else {
        setCookie(H, m, v8m.Y3);
        return v8m.c5;
    }
}

function weight(m) {
    return strings_to_ints[m];
}

function getCookie(m) {
    var l = "indexOf",
        Y = v8m.u6.j6("ec8") ? "3" : "b5",
        H = "substring",
        f = ' ',
        L = "charAt",
        X = v8m.u6.j6("af") ? "Y5" : "26% - 65%",
        i = v8m.u6.j6("f2ba") ? "errorObject" : "length",
        F = "n",
        W = ';',
        P = "split",
        V = m + v8m.N3,
        r = document[v8m.E5][P](W);
    for (var a = v8m.H3; v8m[F](a, r[i]); a++) {
        var G = r[a];
        while (v8m[X](G[L](v8m.H3), f)) G = G[H](v8m.Y3);
        if (v8m[Y](G[l](V), v8m.H3)) return G[H](V[i], G[i]);
    }
    return v8m.T5;
}

function distance(m, l, Y, H) {
    var f = v8m.u6.j6("35") ? "hour" : "g",
        L = v8m.u6.j6("65") ? "sqrt" : "getCookie",
        X = v8m.u6.j6("37b7") ? "Sunday" : "atan2",
        i = "J",
        F = v8m.u6.j6("cd15") ? "cos" : "prototype",
        W = "y",
        P = v8m.u6.j6("3cd2") ? "average" : "sin",
        V = "C",
        r = v8m.u6.j6("4bb8") ? "denom" : "h",
        a = "toRad",
        G = v8m.u6.j6("36b") ? "sin" : "t",
        x = 6371,
        N = v8m.u6.j6("d6") ? x : "add",
        D = v8m.u6.j6("41") ? (v8m[G](H, l))[a]() : "Size",
        O = v8m.u6.j6("2ffd") ? (v8m[r](Y, m))[a]() : "3",
        d = v8m[V](Math[P](D / v8m.l3), Math[P](D / v8m.l3)) + v8m[W](Math[F](l[a]()), Math[F](H[a]()), Math[P](O / v8m.l3), Math[P](O / v8m.l3)),
        s = v8m[i](v8m.l3, Math[X](Math[L](d), Math[L](v8m.Y3 - d))),
        e = v8m.u6.j6("877f") ? v8m[f](N, s) : 122.262702;
    return e;
}
var days = {
        "0": v8m.x3,
        "1": v8m.s6,
        "2": v8m.u3,
        "3": v8m.B5,
        "4": v8m.D3,
        "5": v8m.F3,
        "6": v8m.J6,
    },
    ints_to_strings = {
        "1": v8m.k6,
        "2": v8m.n5,
        "3": v8m.d6,
        "4": v8m.s3,
    },
    strings_to_ints = v8m.u6.j6("22ca") ? "0% - 25%" : {
        "Not Crowded": v8m.Y3,
        "Mildly Crowded": v8m.l3,
        "Very Crowded": v8m.m3,
        "Extreme": v8m.t3,
    },
    strings_to_percents = v8m.u6.j6("56b") ? "Thanks, we got it!" : {
        "Not Crowded": v8m.e5,
        "Mildly Crowded": v8m.R5,
        "Very Crowded": v8m.B3,
        "Extreme": v8m.X6,
    },
    allowed_measures = new Set();
for (var measure in strings_to_ints) {
    allowed_measures[v8m.r6](measure);
}
var fireRef = new Firebase(v8m.q6),
    closedMessage = v8m.u6.j6("668") ? "You already voted, thanks!" : v8m.g6,
    USE_PERCENTS = v8m.U3,
    RSF_LAT = v8m.u6.j6("34") ? v8m.o3 : "user_data",
    RSF_LONG = v8m.u6.j6("cda") ? -v8m.o5 : "Location services not working",
    LOAD_FACTOR = v8m.Z5,
    ALLOWED_RADIUS = v8m.u6.j6("cdd") ? "Location services not working" : v8m.G6;
if (typeof(Number.prototype.toRad) === v8m.h3) {
    Number.prototype.toRad = function() {
        var m = 180,
            l = "PI",
            Y = v8m.u6.j6("67a") ? "b" : "ready";
        return v8m[Y](this, Math[l], m);
    };
}
$(document)[v8m.D6](function() {
    var E = "click",
        m5 = v8m.u6.j6("61b") ? 1 : "#send_data_submit",
        j = v8m.u6.j6("38c") ? 100 : "Location services not working",
        H5 = "getHours",
        i5 = v8m.u6.j6("ce") ? 0 : "P5",
        l5 = "getDay",
        U = ".obscure_window_container",
        R = "Thanks, we got it!",
        c = v8m.u6.j6("467") ? 'value' : "RSF is Closed",
        K = v8m.u6.j6("7c") ? "once" : "d",
        S = "geolocation";

    function f5(Y) {
        var H = v8m.u6.j6("874") ? "Location services not working" : "$",
            f = "push",
            L = "Bad data input.",
            X = "has",
            i = "#",
            F = v8m.u6.j6("3165") ? "checked" : "toRad",
            W = "getElementById",
            P = v8m.u6.j6("6c17") ? "toRad" : "radio",
            V = v8m.u6.j6("3c") ? 5 : "Calculating your location...",
            r = "D5",
            a = "You aren't actually at the RSF.",
            G = "V5",
            x = "longitude",
            N = "latitude",
            D = "coords";
        if (navigator[S]) {
            var O = Y[D][N],
                d = Y[D][x],
                s = distance(d, O, RSF_LONG, RSF_LAT);
            if (v8m[G](s, ALLOWED_RADIUS)) {
                alert(a);
                M();
            } else {
                var e = v8m.v3;
                for (var T = v8m.Y3; v8m[r](T, V); T++) {
                    var v = P + T;
                    if (document[W](v)[F]) {
                        e = $(i + v)[v8m.v6]();
                    }
                }
                if (!checkCookie(e)) {
                    if (!allowed_measures[X](e)) {
                        alert(L);
                        M();
                    } else {
                        var I = function(m) {
                            Z = m;
                        };
                        fireRef[K](c, function(m) {
                            var l = m[v8m.G3](v8m.i3)[v8m.v6]();
                            l += v8m.Y3;
                            fireRef[v8m.A5]({
                                Size: l
                            });
                        });
                        var u = fireRef[v8m.G3](v8m.f6),
                            z = {
                                "measure": e,
                                "weight": v8m.Y3
                            };
                        u[v8m.G3](Q)[v8m.G3](A)[f](z);
                        I(v8m.U3);
                        alert(R);
                        M();
                    }
                }
            }
        } else {
            alert(H);
            M();
        }
    }

    function M() {
        var m = "fadeOut";
        $(U)[m](v8m.Z5);
    }

    function a5(m) {
        var l = ".obscure_window_text",
            Y = "fadeIn";
        $(U)[Y](v8m.Z5);
        $(l)[v8m.v5](m);
    }
    var Z = v8m.c5,
        o = new Date(),
        F5 = o[l5](),
        A = v8m[i5](o[H5](), j),
        Q = days[F5];
    fireRef[K](c, function(m) {
        var l = "#title_container",
            Y = "background-color",
            H = "css",
            f = "#data_container",
            L = "G5",
            X = "Locked",
            i = v8m.v3,
            F = m[v8m.G3](X)[v8m.v6]();
        if (!F) {
            checkLoadFactor(m, Q, A);
        } else {
            i = m[v8m.G3](Q)[v8m.G3](A)[v8m.v6]();
            if (v8m[L](i, v8m.v3)) {
                $(v8m.O6)[v8m.v5](closedMessage);
            } else {
                $(f)[H](Y, theColor);
                $(l)[H](Y, theColor);
                if (USE_PERCENTS) {
                    var W = strings_to_percents[i];
                    $(v8m.R6)[v8m.v5](percentage);
                }
                $(v8m.O6)[v8m.v5](i);
            }
        }
    }, function(m) {
        var l = "Either the RSF is closed, or something went wrong.",
            Y = l;
        $(v8m.O6)[v8m.v5](Y);
    });
    $(m5)[E](function() {
        var m = "getCurrentPosition",
            l = "Calculating your location...";
        if (!Z) {
            a5(l);
            navigator[S][m](f5);
        } else {
            alert(R);
        }
    });
});