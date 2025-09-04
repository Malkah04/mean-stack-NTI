"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1
var isString = false;
var t = "malak";
if (typeof t === "string") {
    isString = true;
}
// 2
var circle_1 = require("./module/circle");
var rectangle_1 = require("./module/rectangle");
var sh;
sh = new circle_1.default(10, 1);
console.log(sh.area());
sh = new rectangle_1.default(5, 1);
console.log(sh.area());
var user = { id: 1, name: "malak", email: "eee@gmail", isAdmin: true };
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge(user, sh));
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(user, "name"));
function firstElement(arr) {
    return arr[0];
}
var Decorator = /** @class */ (function () {
    function Decorator(route) {
        this.route = route;
    }
    Decorator.prototype.get = function (Path) {
        console.log(this.route);
    };
    return Decorator;
}());
function isPromise(value) { }
function getUserById(id) {
    console.log(id);
}
