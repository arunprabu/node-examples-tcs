var { assert, expect } = require('chai');
var should = require('chai').should();

var scores = [10, 2342, 45, 435, 20, 56, 90];

assert.isArray(scores, 'scores - not an array'); //passes
assert.include(scores, 45, 'Array doesnt have 45'); //passes
assert.lengthOf(scores, 7, 'Array length is not 7. It should be 7'); //passes

expect(scores).to.be.an('array').that.includes(20);
expect(scores).to.have.lengthOf(7);


var x = '20';
x.should.be.a('string').that.includes('20');
scores.should.have.lengthOf(7);
