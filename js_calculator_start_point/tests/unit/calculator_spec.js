var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // add tests
  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 25);
  })

  it('can add two zero values', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 0);
  })

  it('can add more than two values', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 6);
  })

  it('can add values then subtract a value', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("-");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 7);
  })

  it('can add two large values', function(){
    calculator.clearClick();
    for (var i = 0; i < 11; i++) {
      calculator.numberClick(9);
    }
    calculator.operatorClick("+");
    for (var i = 0; i < 11; i++) {
      calculator.numberClick(8);
    }
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 188888888887);
  })

  // subtract tests
  it('can subtract, function', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("-");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 1);
  })

  it('can subtract, the result being a negative value', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("-");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, -5);
  })

  it('can subtract, two zero values', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 0);
  })

  it('can subtract zero leaving total unchanged', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("-");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 9);
  })

  it('can subtract a positive value from zero returning a negative value', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(9);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, -9);
  })

  it('can subtract, the result being a large negative value', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("-");
    for (var i = 0; i < 12; i++) {
      calculator.numberClick(9);
    }
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, -999999999997);
  })

  // multiply tests
  it('can multiply two values', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 6);
  })

  it('can multiply two zero values', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 0);
  })

  it('can multiply a positive value by zero, returning zero', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 0);
  })

  it('can multiply zero by a positive value, returning zero', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(9);
    calculator.operatorClick("=");
    assert.equal(0, calculator.runningTotal);
  })

  it('can multiply large values', function(){
    calculator.clearClick();
    for (var i = 0; i < 12; i++) {
      calculator.numberClick(9);
    }
    calculator.operatorClick("*");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 6999999999993);
  })

  // - calculator.divide()
  it('can divide one value by a smaller value returning an integer', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 2);
  })

  it('can divide one value by another returning a float', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 2.6666666666666667);
  })

  it('can divide one value by a larger value returning a float', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 0.5);
  })

  it('can divide a positive value by zero returning infinity', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick("/");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, Infinity);
  })

  it('can divide zero by a positive value, returning zero', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 0);
  })

  it('can store each of the numerical values', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(9);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 1234567890);
  })

  // operator clicks
  it('can store "+" operator click', function(){
    calculator.clearClick();
    calculator.operatorClick("+");
    assert.equal(calculator.previousOperator, "+");
  })
  it('can store "-" operator click', function(){
    calculator.clearClick();
    calculator.operatorClick("-");
    assert.equal(calculator.previousOperator, "-");
  })
  it('can store "*" operator click', function(){
    calculator.clearClick();
    calculator.operatorClick("*");
    assert.equal(calculator.previousOperator, "*");
  })
  it('can store "/" operator click', function(){
    calculator.clearClick();
    calculator.operatorClick("/");
    assert.equal(calculator.previousOperator, "/");
  })

  // - calculator.clearClick()
  it('can click the "clr" button to clear the display', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 1.25);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
