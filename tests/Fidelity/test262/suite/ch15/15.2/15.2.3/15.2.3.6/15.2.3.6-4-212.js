/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-212.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' makes no change if the value of every field in 'desc' is the same value as the corresponding field in 'name'(desc is data property) (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        arrObj[0] = 100; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(arrObj, "0", {
            value: 100,
            writable: true,
            enumerable: true,
            configurable: true
        });

        return dataPropertyAttributesAreCorrect(arrObj, "0", 100, true, true, true);
    }
runTestCase(testcase);
