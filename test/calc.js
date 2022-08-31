//Test Suite - Mathematical operations

//Test Cases

//1. Addition
//2. Substration
//3. Multiplication
//4. Division
var assert = require('assert');

describe('Mathematical operations - Test Suite', function() {

    it('Addition of two numbers', () => {
        var a = 10;
        var b = 10;

        var c = a + b;
        assert.equal(c, 20);
        
    });

    it('Substration of two numbers', () => {
        var a = 10;
        var b = 10;

        var c = a - b;
        assert.equal(c, 0);
    });

    it('Multiplication of two numbers', () => {
        var a = 10;
        var b = 10;

        var c = a * b;
        assert.equal(c, 100);
    });

    it('Division of two numbers', () => {
        var a = 10;
        var b = 10;

        var c = a / b;
        assert.equal(c, 1);
    });
    

})