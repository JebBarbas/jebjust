"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var assert_1 = __importDefault(require("assert"));
var _1 = require(".");
var test = "Test Ended In";
console.time(test);
console.log('Starting tests ...');
for (var i = 0; i < 100000000000; i++) {
    _1.just(i);
}
console.timeEnd(test);
console.log('Tests finished :)');
assert_1["default"].ok(true);
//# sourceMappingURL=test.js.map