//// [detachedCommentAtStartOfFunctionBody2.js]
var TestFile = (function () {
    function TestFile() {
    }
    TestFile.prototype.foo = function (message) {
        /// <summary>Test summary</summary>
        /// <param name="message" type="String" />
        /// <returns type="Function" />
        var _this = this;
        return function () {
            return message + _this.name;
        };
    };
    return TestFile;
})();
