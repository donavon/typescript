//// [classWithMultipleBaseClasses.js]
var A = (function () {
    function A() {
    }
    A.prototype.foo = function () {
    };
    return A;
})();

var B = (function () {
    function B() {
    }
    B.prototype.bar = function () {
    };
    return B;
})();

var D = (function () {
    function D() {
    }
    D.prototype.baz = function () {
    };
    D.prototype.bat = function () {
    };
    return D;
})();
