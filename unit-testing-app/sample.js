// we are using node js native assert module
// try 'node sample.js' in cmd prompt
var assert = require('assert');
assert.strictEqual(1, 1, 'Not Equal'); // wont show any log

//change it to the following and check the console
//assert.strictEqual(1, 2, 'Not Equal');

// if we want more assertion methods / api's we can use chai
// chai provides api's such as expect, should, assert

