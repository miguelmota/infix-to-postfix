# infix-to-postfix

> Returns a postfix ([Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)) expression from an [infix](https://en.wikipedia.org/wiki/Infix_notation) expression.

# Demo

[https://lab.miguelmota.com/infix-to-postfix](https://lab.miguelmota.com/infix-to-postfix)

# Install

```bash
npm install infix-to-postfix
```

# Usage

```javascript
const infixToPostfix = require('infix-to-postfix');

console.log(infixToPostfix('1 + 2')); // '1 2 +'
console.log(infixToPostfix('(1 + 2) * (-4)')); // '1 2 + -4 *'
console.log(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)')); // '3 4 * 2 5 + / 3 4 + *'
console.log(infixToPostfix('((57.5 - -34.1) * (6 / 3.2)) + 4.3')); // '57.5 -34.1 - 6 3.2 / * 4.3 +'
console.log(infixToPostfix('a & 5')); // null (invalid expressions return null)
```

Use the [postfix-calculator](https://github.com/miguelmota/postfix-calculator) module for calculating postfix expressions.

# Test

```bash
npm test
```

# Credit

- [Algorithms for Parsing Arithmetic Expressions](http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html)

# License

MIT
