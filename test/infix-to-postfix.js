var test = require('tape');
var infixToPostfix = require('../infix-to-postfix');

test('infixToPostfix', function (t) {
  'use strict';

  t.plan(10);

  t.equal(infixToPostfix(), '');
  t.equal(infixToPostfix([]), '');
  t.equal(infixToPostfix({}), '');
  t.equal(infixToPostfix(''), '');
  t.equal(infixToPostfix(NaN), '');
  t.equal(infixToPostfix('1 + 2'), '1 2 +');
  t.equal(infixToPostfix('(1 + 2) * (-4)'), '1 2 + -4 *');
  t.equal(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)'), '3 4 * 2 5 + / 3 4 + *');
  t.equal(infixToPostfix('((3*4)/(2+5))*(3+4)'), '3 4 * 2 5 + / 3 4 + *');
  t.equal(infixToPostfix('((57.5 - -34.1) * (6 / 3.2)) + 4.3'), '57.5 -34.1 - 6 3.2 / * 4.3 +');
});
