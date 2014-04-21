/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-b-ii-1.js
 * @description Array.prototype.lastIndexOf - type of array element is different from type of search element
 */


function testcase() {

        return ["true"].lastIndexOf(true) === -1 &&
            ["0"].lastIndexOf(0) === -1 &&
            [false].lastIndexOf(0) === -1 &&
            [undefined].lastIndexOf(0) === -1 &&
            [null].lastIndexOf(0) === -1 &&
            [[]].lastIndexOf(0) === -1;
    }
runTestCase(testcase);
