/**
 * @credit http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html
 */

(function(root) {
  'use strict';

  function infixToPostfix(expression) {
    var result = '';

    if (typeof expression !== 'string') {
      if (expression instanceof String) {
        expression = expression.toString();
      } else {
        return result;
      }
    }

    var stack = [];
    var operators = ['*','/','+','-'];
    var tokens = expression.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*/]/gi);

    if (Array.isArray(tokens)) {
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (operators.indexOf(token) > -1) {
          while (stack.length && operators.indexOf(stack[stack.length-1]) > -1) {
            var operator = stack.pop();
            result += ' ' + operator;
          }

          stack.push(token);
        } else if (token === '(' ){
          stack.push(token);
        } else if (token === ')' ){
          var item = stack.pop();

          while (item !== '(') {
            result += ' ' + item;
            item = stack.pop();
          }
        } else if (!isNaN(token)) {
          result += ' ' + token;
        }
      }
    }

    while (stack.length) {
      var item = stack.pop();
      result += ' ' + item;
    }

    return result.trim();
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = infixToPostfix;
    }
    exports.infixToPostfix = infixToPostfix;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return infixToPostfix;
    });
  } else {
    root.infixToPostfix = infixToPostfix;
  }

})(this);
