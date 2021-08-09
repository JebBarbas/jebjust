"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var assert_1 = __importDefault(require("assert"));
var _1 = __importDefault(require("."));
console.log('Starting tests ...');
for (var i = 0; i < Number.MAX_VALUE; i++) {
    _1["default"](i);
}
console.log('Tests finished :)');
assert_1["default"].ok(true);
//# sourceMappingURL=test.js.map