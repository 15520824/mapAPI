'use strict'

var EncodingClass = {
    func: {
        tempFunc : null,
        exec : function (st) {
            eval(st);
        },
        encode : function (st) {
            eval("EncodingClass.func.tempFunc = " + st + ";");
            return EncodingClass.func.tempFunc;
        },
        encodeBody : function (st) {
            return new Function (st);
        },
        decode : function (fn) {
            return fn.toString();
        },
        decodeBody : function (fn) {
            return fn.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1];
        }
    },
    type : {
        isNumber : function (obj) {
            if (typeof obj === "number") return true;
            return false;
        },
        isString: function (obj) {
            if (typeof obj === "string") return true;
            if (obj instanceof String) return true;
            return false;
        },
        isBoolean: function (obj) {
            if (typeof obj === "boolean") return true;
            return false;
        },
        isObject: function (obj) {
            if (typeof obj === "object") return true;
            return false;
        },
        isFunction: function (obj) {
            if (typeof obj === "function") return true;
            return false;
        },
        isDate: function (obj) {
            if (!(obj instanceof Date)) return false;
            if (typeof obj.getDate !== 'function') return false;
            if (typeof obj.getDay !== 'function') return false;
            if (typeof obj.getFullYear !== 'function') return false;
            if (typeof obj.getHours !== 'function') return false;
            if (typeof obj.getMilliseconds !== 'function') return false;
            if (typeof obj.getMinutes !== 'function') return false;
            if (typeof obj.getMonth !== 'function') return false;
            if (typeof obj.getSeconds !== 'function') return false;
            if (typeof obj.getTime !== 'function') return false;
            return true;
        },
        isArray : function (obj) {
            if (obj === undefined) return false;
            if (obj == null) return false;
            if (Array !== undefined) {
                if (Array.isArray !== undefined) return Array.isArray(obj);
                if (obj.constructor !== undefined) {
                    if (obj.constructor === Array) return true;
                }
                if (obj instanceof Array) return true;
            }
            if (Object !== undefined) {
                if (Object.prototype !== undefined) {
                    if (Object.prototype.toString !== undefined) {
                        if (Object.prototype.toString.call !== undefined) {
                            if (Object.prototype.toString.call(obj) == "[object Array]") return true;
                        }
                    }
                }
            }
            return false;
        },
    },
    color : {
        nameToHex : function (name) {
            var t = {
                "aliceblue": "#f0f8ff",
                "antiquewhite": "#faebd7",
                "aqua": "#00ffff",
                "aquamarine": "#7fffd4",
                "azure": "#f0ffff",
                "beige": "#f5f5dc",
                "bisque": "#ffe4c4",
                "black": "#000000",
                "blanchedalmond": "#ffebcd",
                "blue": "#0000ff",
                "blueviolet": "#8a2be2",
                "brown": "#a52a2a",
                "burlywood": "#deb887",
                "cadetblue": "#5f9ea0",
                "chartreuse": "#7fff00",
                "chocolate": "#d2691e",
                "coral": "#ff7f50",
                "cornflowerblue": "#6495ed",
                "cornsilk": "#fff8dc",
                "crimson": "#dc143c",
                "cyan": "#00ffff",
                "darkblue": "#00008b",
                "darkcyan": "#008b8b",
                "darkgoldenrod": "#b8860b",
                "darkgray": "#a9a9a9",
                "darkgreen": "#006400",
                "darkkhaki": "#bdb76b",
                "darkmagenta": "#8b008b",
                "darkolivegreen": "#556b2f",
                "darkorange": "#ff8c00",
                "darkorchid": "#9932cc",
                "darkred": "#8b0000",
                "darksalmon": "#e9967a",
                "darkseagreen": "#8fbc8f",
                "darkslateblue": "#483d8b",
                "darkslategray": "#2f4f4f",
                "darkturquoise": "#00ced1",
                "darkviolet": "#9400d3",
                "deeppink": "#ff1493",
                "deepskyblue": "#00bfff",
                "dimgray": "#696969",
                "dodgerblue": "#1e90ff",
                "firebrick": "#b22222",
                "floralwhite": "#fffaf0",
                "forestgreen": "#228b22",
                "fuchsia": "#ff00ff",
                "gainsboro": "#dcdcdc",
                "ghostwhite": "#f8f8ff",
                "gold": "#ffd700",
                "goldenrod": "#daa520",
                "gray": "#808080",
                "green": "#008000",
                "greenyellow": "#adff2f",
                "honeydew": "#f0fff0",
                "hotpink": "#ff69b4",
                "indianred ": "#cd5c5c",
                "indigo": "#4b0082",
                "ivory": "#fffff0",
                "khaki": "#f0e68c",
                "lavender": "#e6e6fa",
                "lavenderblush": "#fff0f5",
                "lawngreen": "#7cfc00",
                "lemonchiffon": "#fffacd",
                "lightblue": "#add8e6",
                "lightcoral": "#f08080",
                "lightcyan": "#e0ffff",
                "lightgoldenrodyellow": "#fafad2",
                "lightgrey": "#d3d3d3",
                "lightgreen": "#90ee90",
                "lightpink": "#ffb6c1",
                "lightsalmon": "#ffa07a",
                "lightseagreen": "#20b2aa",
                "lightskyblue": "#87cefa",
                "lightslategray": "#778899",
                "lightsteelblue": "#b0c4de",
                "lightyellow": "#ffffe0",
                "lime": "#00ff00",
                "limegreen": "#32cd32",
                "linen": "#faf0e6",
                "magenta": "#ff00ff",
                "maroon": "#800000",
                "mediumaquamarine": "#66cdaa",
                "mediumblue": "#0000cd",
                "mediumorchid": "#ba55d3",
                "mediumpurple": "#9370d8",
                "mediumseagreen": "#3cb371",
                "mediumslateblue": "#7b68ee",
                "mediumspringgreen": "#00fa9a",
                "mediumturquoise": "#48d1cc",
                "mediumvioletred": "#c71585",
                "midnightblue": "#191970",
                "mintcream": "#f5fffa",
                "mistyrose": "#ffe4e1",
                "moccasin": "#ffe4b5",
                "navajowhite": "#ffdead",
                "navy": "#000080",
                "oldlace": "#fdf5e6",
                "olive": "#808000",
                "olivedrab": "#6b8e23",
                "orange": "#ffa500",
                "orangered": "#ff4500",
                "orchid": "#da70d6",
                "palegoldenrod": "#eee8aa",
                "palegreen": "#98fb98",
                "paleturquoise": "#afeeee",
                "palevioletred": "#d87093",
                "papayawhip": "#ffefd5",
                "peachpuff": "#ffdab9",
                "peru": "#cd853f",
                "pink": "#ffc0cb",
                "plum": "#dda0dd",
                "powderblue": "#b0e0e6",
                "purple": "#800080",
                "red": "#ff0000",
                "rosybrown": "#bc8f8f",
                "royalblue": "#4169e1",
                "saddlebrown": "#8b4513",
                "salmon": "#fa8072",
                "sandybrown": "#f4a460",
                "seagreen": "#2e8b57",
                "seashell": "#fff5ee",
                "sienna": "#a0522d",
                "silver": "#c0c0c0",
                "skyblue": "#87ceeb",
                "slateblue": "#6a5acd",
                "slategray": "#708090",
                "snow": "#fffafa",
                "springgreen": "#00ff7f",
                "steelblue": "#4682b4",
                "tan": "#d2b48c",
                "teal": "#008080",
                "thistle": "#d8bfd8",
                "tomato": "#ff6347",
                "turquoise": "#40e0d0",
                "violet": "#ee82ee",
                "wheat": "#f5deb3",
                "white": "#ffffff",
                "whitesmoke": "#f5f5f5",
                "yellow": "#ffff00",
                "yellowgreen": "#9acd32",
                "transparent": "#ffffff"
            };
            name = name.toLowerCase();
            if (name == "") name = "transparent";
            if (t[name] !== undefined) return t[name];
            return name;
        },

        /////////
        hex2rgb : function (c) {
            if (c[0] === '#') c = c.substr(1);
            var r = parseInt(c.slice(0,2), 16),
            g = parseInt(c.slice(2,4), 16),
            b = parseInt(c.slice(4,6), 16);
            return {
                r: r,
                g: g,
                b: b
            }
        }
    },
    string : {
            merge: function (stringArray) {
                var i, k, x, t;
                while (true) {
                    t = [];
                    k = stringArray.length;
                    if (k > 1) {
                        for (i = 0; i < k; i += 2) {
                            if (i+1 == k) {
                                x = stringArray[i];
                            }
                            else {
                                x = stringArray[i] + stringArray[i+1];
                            }
                            t.push(x);
                        }
                    }
                    else if (k == 1) {
                        return stringArray[0];
                    }
                    else {
                        return "";
                    }
                    stringArray = t;
                }
            },
            cvtest : function (varname) {
                var sx, st;
                eval("sx = EncodingClass.string.fromVariable(" + varname + ");");
                st = "Length = " + sx.length;
                console.log(st);
                console.log(sx);
                st = EncodingClass.string.toVariable(sx);
                console.log(st);
            },
            exportVariable : function (obj, level) {
                var i, k, n, x, z, st, sx, keys;
                if (obj === undefined) return "undefined";
                if (obj == null) return "null";
                if (level === undefined) level = 0;
                if (EncodingClass.type.isArray(obj)) {
                    n = obj.length;
                    if (n == 0) return "[]";
                    st = "[\r\n";
                    for (i = 0; i < n; i++) {
                        for (k = 0; k < level+4; k++) st += " ";
                        st += EncodingClass.string.exportVariable(obj[i], level + 4);
                        if (i+1 < n) st += ",";
                        st += "\r\n";
                    }
                    for (k = 0; k < level; k++) st += " ";
                    return st + "]";
                }
                else if (EncodingClass.type.isDate(obj)) {
                    return "new Date(" + obj.getTime() + ")";
                }
                else if (EncodingClass.type.isObject(obj)) {
                    keys = Object.keys(obj);
                    n = keys.length;
                    st = "{\r\n";
                    for (i = 0; i < n; i++) {
                        for (k = 0; k < level+4; k++) st += " ";
                        st += keys[i] + ": " + EncodingClass.string.exportVariable(obj[keys[i]], level + 4);
                        if (i+1 < n) st += ",";
                        st += "\r\n";
                    }
                    for (k = 0; k < level; k++) st += " ";
                    return st + "}";
                }
                else if (EncodingClass.type.isFunction(obj)) {
                    return obj.toString();
                }
                else if (EncodingClass.type.isBoolean(obj)) {
                    if (obj) return "true";
                    return "false";
                }
                else if (EncodingClass.type.isNumber(obj)) {
                    return obj;
                }
                else if (EncodingClass.type.isString(obj)) {
                    return "\"" + obj + "\"";
                }
                else {
                    return "unknown";
                }
            },
            compare : function (obj1, obj2) {
                var i, k, m, n, x, z, keys, keys2;
                if ((obj1 === undefined) && (obj2 === undefined)) return 0;
                if (obj1 === undefined) return -1;
                if (obj2 === undefined) return 1;
                if ((obj1 === null) && (obj2 === null)) return 0;
                if (obj1 === null) return -1;
                if (obj2 === null) return 1;
                if (EncodingClass.type.isArray(obj1) && EncodingClass.type.isArray(obj2)) {
                    n = obj1.length;
                    m = obj2.length;
                    for (i = 0; i < n; i++) {
                        if (i >= m) return 1;
                        k = EncodingClass.string.compare(obj1[i], obj2[i]);
                        if (k != 0) return k;
                    }
                    if (n < m) return -1;
                    return 0;
                }
                else if (EncodingClass.type.isDate(obj1)) {
                    return EncodingClass.string.compare(obj1.getTime(), obj2);
                }
                else if (EncodingClass.type.isDate(obj2)) {
                    return EncodingClass.string.compare(obj1, obj2.getTime());
                }
                else if (EncodingClass.type.isObject(obj1) && EncodingClass.type.isObject(obj2)) {
                    keys = Object.keys(obj1);
                    n = keys.length;
                    keys2 = Object.keys(obj2);
                    m = keys2.length;
                    keys.sort();
                    keys2.sort();
                    for (i = 0; i < n; i++) {
                        if (i >= m) return 1;
                        k = EncodingClass.string.compare(keys[i], keys2[i]);
                        if (k != 0) return k;
                        k = EncodingClass.string.compare(obj1[keys[i]], obj2[keys2[i]]);
                        if (k != 0) return k;
                    }
                    if (n < m) return -1;
                    return 0;
                }
                else if (EncodingClass.type.isObject(obj1) && EncodingClass.type.isArray(obj2)) {
                    keys = Object.keys(obj1);
                    n = keys.length;
                    keys.sort();
                    m = obj2.length;
                    for (i = 0; i < n; i++) {
                        if (i >= m) return 1;
                        k = EncodingClass.string.compare(obj1[keys[i]], obj2[i]);
                        if (k != 0) return k;
                    }
                    if (n < m) return -1;
                    return 0;
                }
                else if (EncodingClass.type.isArray(obj1) && EncodingClass.type.isObject(obj2)) {
                    n = obj1.length;
                    keys2 = Object.keys(obj2);
                    m = keys2.length;
                    keys2.sort();
                    for (i = 0; i < n; i++) {
                        if (i >= m) return 1;
                        k = EncodingClass.string.compare(obj1[i], obj2[keys2[i]]);
                        if (k != 0) return k;
                    }
                    if (n < m) return -1;
                    return 0;
                }
                else if (EncodingClass.type.isArray(obj1)) {
                    if (obj1.length == 0) return -1;
                    k = EncodingClass.string.compare(obj1[0], obj2);
                    if (k != 0) return k;
                    if (obj1.length > 0) return 1;
                    return 0;
                }
                else if (EncodingClass.type.isArray(obj2)) {
                    if (obj2.length == 0) return 1;
                    k = EncodingClass.string.compare(obj1, obj2[0]);
                    if (k != 0) return k;
                    if (obj2.length > 0) return -1;
                    return 0;
                }
                else if (EncodingClass.type.isObject(obj1)) {
                    keys = Object.keys(obj1);
                    if (keys.length == 0) return -1;
                    keys.sort();
                    k = EncodingClass.string.compare(obj1[keys[0]], obj2);
                    if (k != 0) return k;
                    if (keys.length > 0) return 1;
                    return 0;
                }
                else if (EncodingClass.type.isObject(obj2)) {
                    keys = Object.keys(obj2);
                    if (keys.length == 0) return 1;
                    keys.sort();
                    k = EncodingClass.string.compare(obj1, obj2[keys[0]]);
                    if (k != 0) return k;
                    if (keys.length > 0) return -1;
                    return 0;
                }
                else if (EncodingClass.type.isBoolean(obj1)) {
                    if (obj1) {
                        return EncodingClass.string.compare(1, obj2);
                    }
                    else {
                        return EncodingClass.string.compare(0, obj2);
                    }
                }
                else if (EncodingClass.type.isBoolean(obj2)) {
                    if (obj2) {
                        return EncodingClass.string.compare(obj1, 1);
                    }
                    else {
                        return EncodingClass.string.compare(obj1, 0);
                    }
                }
                else if (EncodingClass.type.isNumber(obj1) && EncodingClass.type.isNumber(obj2)) {
                    if (obj1 < obj2) return -1;
                    if (obj1 > obj2) return 1;
                    return 0;
                }
                else if (EncodingClass.type.isFunction(obj1)) {
                    return  EncodingClass.string.compare(obj1.toString(), obj2);
                }
                else if (EncodingClass.type.isFunction(obj2)) {
                    return  EncodingClass.string.compare(obj1, obj2.toString());
                }
                else if (EncodingClass.type.isString(obj1) && EncodingClass.type.isString(obj2)) {
                    if (obj1 < obj2) return -1;
                    if (obj1 > obj2) return 1;
                    return 0;
                }
                else if (EncodingClass.type.isString(obj1)) {
                    return  EncodingClass.string.compare(obj1, obj2.toString());
                }
                else if (EncodingClass.type.isString(obj2)) {
                    return  EncodingClass.string.compare(obj1.toString(), obj2);
                }
                return EncodingClass.string.compare(obj1.toString(), obj2.toString());
            },

            duplicate : function (obj) {
                var i, n, m, x, z, st, sx, keys, ss;
                if (obj === undefined) return undefined;
                if (obj === null) return null;
                if (EncodingClass.type.isArray(obj)) {
                    n = obj.length;
                    st = [];
                    for (i = 0; i < n; i++) {
                        st.push(EncodingClass.string.duplicate(obj[i]));
                    }
                    return st;
                }
                else if (EncodingClass.type.isDate(obj)) {
                    return new Date(obj.getTime());
                }
                else if (EncodingClass.type.isObject(obj)) {
                    keys = Object.keys(obj);
                    n = keys.length;
                    st = {};
                    for (i = 0; i < n; i++) {
                        st[keys[i]] = EncodingClass.string.duplicate(obj[keys[i]]);
                    }
                    return st;
                }
                else if (EncodingClass.type.isFunction(obj)) {
                    return obj;
                }
                else if (EncodingClass.type.isBoolean(obj)) {
                    if (obj) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else if (EncodingClass.type.isNumber(obj)) {
                    return obj;
                }
                else if (EncodingClass.type.isString(obj)) {
                    return obj + "";
                }
                return obj;
            },
            fromVariable : function (obj) {
                var i, n, x, z, st, sx, keys, ss;
                if (obj === undefined) return "undefined#";
                if (obj == null) return "null#";
                if (EncodingClass.type.isArray(obj)) {
                    n = obj.length;
                    st = [];
                    for (i = 0; i < n; i++) {
                        sx = EncodingClass.string.fromVariable(obj[i]);
                        st.push(sx.length + "#" + sx);
                    }
                    return "array#" + n + "#" + EncodingClass.string.merge(st);
                }
                else if (EncodingClass.type.isDate(obj)) {
                    obj = obj.getTime();
                    sx = EncodingClass.base64.encode(obj + "");
                    return "date#" + sx.length + "#" + sx;
                }
                else if (EncodingClass.type.isObject(obj)) {
                    keys = Object.keys(obj);
                    n = keys.length;
                    st = [];
                    for (i = 0; i < n; i++) {
                        sx = EncodingClass.base64.encode(keys[i]);
                        st.push(sx.length + "#" + sx);
                        sx = EncodingClass.string.fromVariable(obj[keys[i]]);
                        st.push(sx.length + "#" + sx);
                    }
                    return "obj#" + n + "#" + EncodingClass.string.merge(st);
                }
                else if (EncodingClass.type.isFunction(obj)) {
                    sx = EncodingClass.base64.encode(EncodingClass.utf8.encode(obj.toString() + ""));
                    return "function#" + sx.length + "#" + sx;
                }
                else if (EncodingClass.type.isBoolean(obj)) {
                    if (obj) {
                        st = "1";
                    }
                    else {
                        st = "0";
                    }
                    return "bool#" + st;
                }
                else if (EncodingClass.type.isNumber(obj)) {
                    sx = EncodingClass.base64.encode(obj + "");
                    return "number#" + sx.length + "#" + sx;
                }
                else if (EncodingClass.type.isString(obj)) {
                    sx = EncodingClass.base64.encode(EncodingClass.utf8.encode(obj + ""));
                    return "string#" + sx.length + "#" + sx;
                }
                else {
                    return "unknown#";
                }
            },
            toVariable : function (str) {
                var i, j, k, t, x, n, m, z, r, sx, st, kv;
                k = str.indexOf("#");
                if (k <= 0) return undefined;
                st = str.substr(0, k);
                str = str.substr(k + 1);
                switch (st) {
                    case "null":
                        return null;
                    case "string":
                    case "number":
                    case "date":
                    case "function":
                        k = str.indexOf("#");
                        if (k <= 0) return undefined;
                        sx = str.substr(0, k);
                        str = str.substr(k + 1);
                        if (st == "date") return new Date(parseInt(EncodingClass.base64.decode(str), 10));
                        if (st == "number") return parseFloat(EncodingClass.base64.decode(str));
                        sx = EncodingClass.utf8.decode(EncodingClass.base64.decode(str));
                        if (st == "string") return sx;
                        return (new Function("return " + sx))();
                    case "sarray":
                        r = [];
                        k = str.indexOf("#");
                        if (k <= 0) return undefined;
                        n = parseInt(str.substr(0, k), 10);
                        str = str.substr(k + 1);
                        k = str.indexOf("#");
                        if (k <= 0) return undefined;
                        m = parseInt(str.substr(0, k), 10);
                        str = str.substr(k + 1);
                        kv = [];
                        for (i = 0; i < m; i++) {
                            k = str.indexOf("#");
                            if (k <= 0) return undefined;
                            j = parseInt(str.substr(0, k), 10);
                            kv.push(str.substr(k + 1, j));
                            str = str.substr(k + j + 1);
                        }
                        for (i = 0; i < n; i++) {
                            t = {};
                            for (j = 0; j < m; j++) {
                                k = str.indexOf("#");
                                if (k <= 0) return undefined;
                                z = parseInt(str.substr(0, k), 10);
                                x = str.substr(k + 1, z);
                                str = str.substr(k + z + 1);
                                t[kv[j]] = EncodingClass.string.toVariable(x);
                            }
                            r.push(t);
                        }
                        return r;
                    case "array":
                        r = [];
                        k = str.indexOf("#");
                        if (k <= 0) return undefined;
                        n = parseInt(str.substr(0, k), 10);
                        str = str.substr(k + 1);
                        for (i = 0; i < n; i++) {
                            k = str.indexOf("#");
                            if (k <= 0) return undefined;
                            z = parseInt(str.substr(0, k), 10);
                            x = str.substr(k + 1, z);
                            str = str.substr(k + z + 1);
                            r.push(EncodingClass.string.toVariable(x));
                        }
                        return r;
                    case "obj":
                        r = {};
                        k = str.indexOf("#");
                        if (k <= 0) return undefined;
                        n = parseInt(str.substr(0, k), 10);
                        str = str.substr(k + 1);
                        for (i = 0; i < n; i++) {
                            k = str.indexOf("#");
                            if (k <= 0) return undefined;
                            z = parseInt(str.substr(0, k), 10);
                            x = str.substr(k + 1, z);
                            str = str.substr(k + z + 1);
                            kv = EncodingClass.base64.decode(x);
                            k = str.indexOf("#");
                            if (k <= 0) return undefined;
                            z = parseInt(str.substr(0, k), 10);
                            x = str.substr(k + 1, z);
                            str = str.substr(k + z + 1);
                            r[kv] = EncodingClass.string.toVariable(x);
                        }
                        return r;
                    case "bool":
                        if (str == "1") return true;
                        if (str == "0") return false;
                    case "undefined":
                    case "unknown":
                    default:
                        return undefined;
                };
            },
            fromDouble : function (value, precise) {
                var s, d, k, sign;
                if (precise === undefined) precise = -3;
                if (precise < 0) {
                    if (value >= 0) {
                        sign = "";
                    }
                    else {
                        sign = "-";
                        value = -value;
                    }
                    s = value.toFixed(-precise) + "";
                    k = s.indexOf(".");
                    if (k >= 0) {
                        d = s.substr(0, k);
                        s = s.substr(k+1);
                        while (s != "") {
                            k = s.length - 1;
                            if (s.substr(k, 1) == "0") {
                                s = s.substr(0, k - 1);
                            }
                            else {
                                break;
                            }
                        }
                        if (s == "") return d;
                        return sign + d + "." + s;
                    }
                    return sign + s;
                }
                if (value >= 0) return value.toFixed(precise);
                return "-" + (-value).toFixed(precise);
            },
            addslashes : function (str) {
                return str.replace(/\\/g, '\\\\').
                    replace(/\u0008/g, '\\b').
                    replace(/\t/g, '\\t').
                    replace(/\n/g, '\\n').
                    replace(/\f/g, '\\f').
                    replace(/\r/g, '\\r').
                    replace(/'/g, '\\\'').
                    replace(/"/g, '\\"');
            },
            readln: function (str) {
                var k = str.indexOf("\n");
                if (k == -1) return {
                    result: str,
                    remain: ""
                }
                return {
                    result: str.substr(0, k),
                    remain: str.substr(k+1)
                }
            },
            readlnInt : function (str) {
                var t = EncodingClass.string.readln(str);
                return {
                    result: parseInt(t.result, 10),
                    remain: t.remain
                }
            },
            readlnHex : function (str) {
                var t = EncodingClass.string.readln(str);
                return {
                    result: parseInt(t.result, 16),
                    remain: t.remain
                }
            },
            readlnFloat : function (str) {
                var t = EncodingClass.string.readln(str);
                return {
                    result: parseFloat(t.result, 10),
                    remain: t.remain
                }
            },
            toHex : function (number, width) {
                var i, t, h;
                if (width === undefined) width = 0;
                t = number.toString(16);
                if (width == 0) return t;
                h = t.length;
                if (width > 0) {
                    for (i = h; i < width; i++) {
                        t = "0" + t;
                    }
                    return t;
                }
                else {
                    width = -width;
                    if (h <= width) {
                        for (i = h; i < width; i++) {
                            t = "0" + t;
                        }
                        return t;
                    }
                    else {
                        return t.substr(width - h);
                    }
                }
            },
            fromHex : function (str) {
                return parseInt(str, 16);
            },

            getStringLine : function (st) {
                var k;
                k = st.indexOf("\n");
                if (k == -1) return {
                    result: st,
                    remain: null
                };
                return {
                    result: st.substr(0, k),
                    remain: st.substr(k+1)
                };
            },

            getBase64StringLine : function (st) {
                var k;
                k = st.indexOf("\n");
                if (k == -1) return {
                    result: EncodingClass.utf8.decode(EncodingClass.base64.decode(st)),
                    remain: null
                };
                return {
                    result: EncodingClass.utf8.decode(EncodingClass.base64.decode(st.substr(0, k))),
                    remain: st.substr(k+1)
                };
            },

            innerHTML2Text : function (st) {
                var x = document.createElement("div");
                x.innerHTML = st;
                if (x.textContent !== undefined) return x.textContent;
                if (x.innerText !== undefined) return x.innerText;
                return "";
            }
    },
    utf8 : {
        encode : function (sx) {
            var i, k, x, st;
            sx = sx + "";
            k = sx.length;
            st = "";
            for (i = 0; i < k; i++) {
                x = sx.charCodeAt(i);
                if (x <= 0x7f) {
                    st += String.fromCharCode(x);
                }
                else if (x <= 0x7FF) {
                    st += String.fromCharCode(192 + (x >> 6)) + String.fromCharCode(128 + (x & 0x3f));
                }
                else if (x <= 0xFFFF) {
                    st += String.fromCharCode(224 + (x >> 12)) + String.fromCharCode(128 + ((x >> 6) & 0x3f)) + String.fromCharCode(128 + (x & 0x3f));
                }
                else {
                    st += String.fromCharCode(240 + (x >> 18)) + String.fromCharCode(128 + ((x >> 12) & 0x3f)) + String.fromCharCode(128 + ((x >> 6) & 0x3f)) + String.fromCharCode(128 + (x & 0x3f));
                }
            }
            return st;
        },

        decode : function (sx) {
            var i, k, x, m, st;
            sx = sx + "";
            k = sx.length;
            st = "";
            for (i = 0; i < k; i++) {
                x = sx.charCodeAt(i);
                if (x >= 240) {
                    m = x & 0x7;
                    x = sx.charCodeAt(++i);
                    m = (m << 6) + (x & 0x3F);
                    x = sx.charCodeAt(++i);
                    m = (m << 6) + (x & 0x3F);
                    x = sx.charCodeAt(++i);
                    m = (m << 6) + (x & 0x3F);
                    st += String.fromCharCode(m);
                }
                else if (x >= 224) {
                    m = x & 0xF;
                    x = sx.charCodeAt(++i);
                    m = (m << 6) + (x & 0x3F);
                    x = sx.charCodeAt(++i);
                    m = (m << 6) + (x & 0x3F);
                    st += String.fromCharCode(m);
                }
                else if (x >= 192) {
                    m = x & 0x1F;
                    x = sx.charCodeAt(++i);
                    m = (m << 6) + (x & 0x3F);
                    st += String.fromCharCode(m);
                }
                else {
                    st += String.fromCharCode(x);
                }
            }
            return st;
        }
    },

    quickEncrypt : function (sx) {
        var i, k, x, st;
        var i, k, x, st;
        sx = EncodingClass.utf8.encode(sx);
        k = sx.length;
        st = "";
        for (i = 0; i < k; i++) {
            x = sx.charCodeAt(i);
            st += String.fromCharCode(65 + (x & 0xF)) + String.fromCharCode(65 + ((x >> 4) & 0xF));
        }
        return st;
    },

    quickDecrypt : function (sx) {
        var i, k, x, y, st;
        k = sx.length;
        st = "";
        for (i = 0; i < k; i++) {
            x = sx.charCodeAt(i++) - 65;
            y = sx.charCodeAt(i) - 65;
            st += String.fromCharCode((y << 4) + x);
        }
        return EncodingClass.utf8.decode(st);
    },

    inputvalue : function (str) {
        var st = "";
        str = "" + str;
        var i;
        var x = str.length;
        for (i = 0; i < x; i++) {
            st = st + "&#" + str.charCodeAt(i) + ";";
        }
        return st;
    },

    textshow : function (str, tabEnabled) {
        var st = "", t;
        str = "" + str;
        var i;
        var x = str.length;
        for (i = 0; i < x; i++) {
            t = str.charCodeAt(i);
            if ((t != 10) && (t != 13)) {
                st += "&#" + t + ";";
            }
            else if (t == 10) st += "<br>";
        }
        if (tabEnabled === undefined) tabEnabled = false;
        if (tabEnabled) return "<pre>" + st + "</pre>";
        return st;
    },

    base64 : {
        encode : function (st) {
            var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var i, j, k, x, sx, v1, v2, v3, t1, t2, t3, t4;
            sx = "";
            x = st.length;
            for (i = 0; i + 3 <= x; ) {
                v1 = st.charCodeAt(i++) & 255;
                v2 = st.charCodeAt(i++) & 255;
                v3 = st.charCodeAt(i++) & 255;
                t1 = v1 >> 2;
                t2 = ((v1 & 3) << 4) + (v2 >> 4);
                t3 = ((v2 & 15) << 2) + (v3 >> 6);
                t4 = v3 & 63;
                sx += keyStr.substr(t1, 1) + keyStr.substr(t2, 1) + keyStr.substr(t3, 1) + keyStr.substr(t4, 1);
            }
            if (i + 1 == x) {
                v1 = st.charCodeAt(i++) & 255;
                t1 = v1 >> 2;
                t2 = (v1 & 3) << 4;
                sx += keyStr.substr(t1, 1) + keyStr.substr(t2, 1) + "==";
            }
            else if (i + 2 == x) {
                v1 = st.charCodeAt(i++) & 255;
                v2 = st.charCodeAt(i++) & 255;
                t1 = v1 >> 2;
                t2 = ((v1 & 3) << 4) + (v2 >> 4);
                t3 = (v2 & 15) << 2;
                sx += keyStr.substr(t1, 1) + keyStr.substr(t2, 1) + keyStr.substr(t3, 1) + "=";
            }
            return sx;
        },

        chartovalue : function (c) {
            if ((65 <= c) && (c <= 90)) return c - 65;
            if ((97 <= c) && (c <= 122)) return c + 26 - 97;
            if ((48 <= c) && (c <= 57)) return c + 52 - 48;
            if (c == 43) return 62;
            if (c == 47) return 63;
            return 64;
        },

        decode : function (st) {
            var i, j, k, x, sx, v1, v2, v3, t1, t2, t3, t4;
            sx = "";
            x = st.length;
            for (i = 0; i < x; ) {
                t1 = EncodingClass.base64.chartovalue(st.charCodeAt(i++));
                t2 = EncodingClass.base64.chartovalue(st.charCodeAt(i++));
                t3 = EncodingClass.base64.chartovalue(st.charCodeAt(i++));
                t4 = EncodingClass.base64.chartovalue(st.charCodeAt(i++));
                if (t3 == 64) {
                    v1 = (t1 << 2) + (t2 >> 4);
                    sx += String.fromCharCode(v1);
                }
                else if (t4 == 64) {
                    v1 = (t1 << 2) + (t2 >> 4);
                    v2 = ((t2 & 15) << 4) + (t3 >> 2);
                    sx += String.fromCharCode(v1) + String.fromCharCode(v2);
                }
                else {
                    v1 = (t1 << 2) + (t2 >> 4);
                    v2 = ((t2 & 15) << 4) + (t3 >> 2);
                    v3 = ((t3 & 3) << 6) + t4;
                    sx += String.fromCharCode(v1) + String.fromCharCode(v2) + String.fromCharCode(v3);
                }
            }
            return sx;
        },
    },

    md5 : {
        encode : function (str) {
            var x = EncodingClass.md5.str2blks_MD5(str);
            var a =  1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d =  271733878;
            var olda, oldb, oldc, oldd, i;

            for (i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;

                a = EncodingClass.md5.local_md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
                d = EncodingClass.md5.local_md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
                c = EncodingClass.md5.local_md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
                b = EncodingClass.md5.local_md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
                a = EncodingClass.md5.local_md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
                d = EncodingClass.md5.local_md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
                c = EncodingClass.md5.local_md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
                b = EncodingClass.md5.local_md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
                a = EncodingClass.md5.local_md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
                d = EncodingClass.md5.local_md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
                c = EncodingClass.md5.local_md5_ff(c, d, a, b, x[i+10], 17, -42063);
                b = EncodingClass.md5.local_md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
                a = EncodingClass.md5.local_md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
                d = EncodingClass.md5.local_md5_ff(d, a, b, c, x[i+13], 12, -40341101);
                c = EncodingClass.md5.local_md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
                b = EncodingClass.md5.local_md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

                a = EncodingClass.md5.local_md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
                d = EncodingClass.md5.local_md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
                c = EncodingClass.md5.local_md5_gg(c, d, a, b, x[i+11], 14,  643717713);
                b = EncodingClass.md5.local_md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
                a = EncodingClass.md5.local_md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
                d = EncodingClass.md5.local_md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
                c = EncodingClass.md5.local_md5_gg(c, d, a, b, x[i+15], 14, -660478335);
                b = EncodingClass.md5.local_md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
                a = EncodingClass.md5.local_md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
                d = EncodingClass.md5.local_md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
                c = EncodingClass.md5.local_md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
                b = EncodingClass.md5.local_md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
                a = EncodingClass.md5.local_md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
                d = EncodingClass.md5.local_md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
                c = EncodingClass.md5.local_md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
                b = EncodingClass.md5.local_md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

                a = EncodingClass.md5.local_md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
                d = EncodingClass.md5.local_md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
                c = EncodingClass.md5.local_md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
                b = EncodingClass.md5.local_md5_hh(b, c, d, a, x[i+14], 23, -35309556);
                a = EncodingClass.md5.local_md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
                d = EncodingClass.md5.local_md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
                c = EncodingClass.md5.local_md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
                b = EncodingClass.md5.local_md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
                a = EncodingClass.md5.local_md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
                d = EncodingClass.md5.local_md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
                c = EncodingClass.md5.local_md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
                b = EncodingClass.md5.local_md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
                a = EncodingClass.md5.local_md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
                d = EncodingClass.md5.local_md5_hh(d, a, b, c, x[i+12], 11, -421815835);
                c = EncodingClass.md5.local_md5_hh(c, d, a, b, x[i+15], 16,  530742520);
                b = EncodingClass.md5.local_md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

                a = EncodingClass.md5.local_md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
                d = EncodingClass.md5.local_md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
                c = EncodingClass.md5.local_md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
                b = EncodingClass.md5.local_md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
                a = EncodingClass.md5.local_md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
                d = EncodingClass.md5.local_md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
                c = EncodingClass.md5.local_md5_ii(c, d, a, b, x[i+10], 15, -1051523);
                b = EncodingClass.md5.local_md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
                a = EncodingClass.md5.local_md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
                d = EncodingClass.md5.local_md5_ii(d, a, b, c, x[i+15], 10, -30611744);
                c = EncodingClass.md5.local_md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
                b = EncodingClass.md5.local_md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
                a = EncodingClass.md5.local_md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
                d = EncodingClass.md5.local_md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
                c = EncodingClass.md5.local_md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
                b = EncodingClass.md5.local_md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

                a = EncodingClass.md5.local_md5_add(a, olda);
                b = EncodingClass.md5.local_md5_add(b, oldb);
                c = EncodingClass.md5.local_md5_add(c, oldc);
                d = EncodingClass.md5.local_md5_add(d, oldd);
            }
            return EncodingClass.md5.local_md5_rhex(a) + EncodingClass.md5.local_md5_rhex(b) + EncodingClass.md5.local_md5_rhex(c) + EncodingClass.md5.local_md5_rhex(d);
        },

        local_md5_hex_chr : "0123456789abcdef",
        local_md5_rhex : function (num) {
            var str = "";
            var j;
            for (j = 0; j <= 3; j++)
            str += EncodingClass.md5.local_md5_hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
            EncodingClass.md5.local_md5_hex_chr.charAt((num >> (j * 8)) & 0x0F);
            return str;
        },
        str2blks_MD5 : function (str) {
            var nblk, blks, i;
            nblk = ((str.length + 8) >> 6) + 1;
            blks = new Array(nblk * 16);
            for(i = 0; i < nblk * 16; i++) blks[i] = 0;
            for(i = 0; i < str.length; i++)
            blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
            blks[i >> 2] |= 0x80 << ((i % 4) * 8);
            blks[nblk * 16 - 2] = str.length * 8;
            return blks;
        },
        local_md5_add : function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        },
        local_md5_rol : function (num, cnt) {
            return (num << cnt) | (num >>> (32 - cnt));
        },
        local_md5_cmn : function (q, a, b, x, s, t) {
            return EncodingClass.md5.local_md5_add(EncodingClass.md5.local_md5_rol(EncodingClass.md5.local_md5_add(EncodingClass.md5.local_md5_add(a, q), EncodingClass.md5.local_md5_add(x, t)), s), b);
        },
        local_md5_ff : function (a, b, c, d, x, s, t) {
            return EncodingClass.md5.local_md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
        },
        local_md5_gg : function (a, b, c, d, x, s, t) {
            return EncodingClass.md5.local_md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
        },
        local_md5_hh : function (a, b, c, d, x, s, t) {
            return EncodingClass.md5.local_md5_cmn(b ^ c ^ d, a, b, x, s, t);
        },
        local_md5_ii : function (a, b, c, d, x, s, t) {
            return EncodingClass.md5.local_md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
        }
    }
};

if (ModuleManagerClass !== undefined) {
    ModuleManagerClass.register("EncodingClass");
}
//# sourceURL=module:///src/jsencoding.php.js?
