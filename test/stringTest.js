var assert = require('assert');

describe('String Methods - Test Suite', function() {

    it('CharAt method', () => {
        var strOne = "Its the best time to learn programming";
        assert.equal(strOne.charAt(1).toUpperCase(), 'T');
        
    });

    it.skip('Concat method', () => {
        var s1 = "Hello ";
        var s2 = "World!";

        assert.equal(s1.concat(s2), "Hello World!");
    });

    it('String endsWith method', () => {
        var s1 = "This is a great year for building new skill";

        assert.equal(s1.endsWith("skill"), true);
    });
});