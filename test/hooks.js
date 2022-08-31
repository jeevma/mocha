
var assert = require('assert');

describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        console.log('Execute After All Tests');
    });

    afterEach('Execute After Each Test', function(){
        console.log('Execute After Each Test');
    });

    it('Mocha Hooks Test', function(){
        console.log('Mocha - This is a Test for Mocha Hooks')
    });
    it('Concat method', () => {
        var s1 = "Hello ";
        var s2 = "World!";

        assert.equal(s1.concat(s2), "Hello World!");
    });

    it('String endsWith method', () => {
        var s1 = "This is a great year for building new skill";
        assert.equal(s1.endsWith("skill"), true);
    });
        
});