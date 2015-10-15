# infix-to-postfix

> Returns a postfix ([Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)) expression from an [infix](https://en.wikipedia.org/wiki/Infix_notation) expression.

# Install

```bash
npm install infix-to-postix
```

```bash
bower install infix-to-postfix
```

# Usage

```javascript
var infixToPostfix = require('infix-to-postfix');

console.log(infixToPostfix('1 + 2')); // '1 2 +'
console.log(infixToPostfix('(1 + 2) * (-4)')); // '1 2 + -4 *'
console.log(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)')); // '3 4 * 2 5 + / 3 4 + *'
console.log(infixToPostfix('((57.5 - -34.1) * (6 / 3.2)) + 4.3')); // '57.5 -34.1 - 6 3.2 / * 4.3 +'
```

# Test

```bash
npm test
```

# Credits

[Algorithms for Parsing Arithmetic Expressions](http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html)

# License

MIT
