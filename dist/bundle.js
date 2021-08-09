(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.just = void 0;
/**
 * Uses just API to return just the thing that you want
 * @param me The thing that you want
 * @returns The thing that you want
 * @example
 * // Try this examples and see how justjs works!!!
 * just(3)
 * just("Hello World")
 * just(false)
 * just([1,2,3,4,5])
 * just(() => console.log(just("Hello World Again")))
 * just({foo: "bar", hello: "world"})
 */
var just = function (me) { return me; };
exports.just = just;
try {
    eval('if(window){ window.just = just }');
}
catch (_a) { }

},{}]},{},[1]);
