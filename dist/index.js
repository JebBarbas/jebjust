"use strict";
exports.__esModule = true;
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
var just = function (me) {
    return me;
};
eval('if(window){ window.just = just }');
exports["default"] = just;
//# sourceMappingURL=index.js.map