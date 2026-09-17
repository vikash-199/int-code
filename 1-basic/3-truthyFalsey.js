/*
1. Truthy / Falsy in JavaScript

In JavaScript, every value can be evaluated as truthy or falsy in a Boolean context such as if, while, or !.

Falsy values

There are only 8 falsy values in JavaScript:

false
0
-0
0n
""
null
undefined
NaN

Example:

if (0) {
  console.log("Yes");
} else {
  console.log("No");
}

// No
Truthy values

Everything else is truthy.

Examples:

"hello"    // truthy
"0"        // truthy
[]         // truthy
{}         // truthy
1          // truthy
-1         // truthy
Infinity   // truthy

Important interview example:

Boolean([]); // true
Boolean({}); // true
Boolean("0"); // true

Even an empty array and empty object are truthy.

Common interview examples
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
if example
let username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username is empty");
}

Because "" is falsy, the else block executes.

null in JavaScript

null is a primitive value that represents the intentional absence of a value.

let user = null;

console.log(user); // null

It means: “There is no value right now, and I intentionally set it to empty.”

undefined in JavaScript

undefined means a variable has been declared, but no value has been assigned to it.it is premitive value

let name;

console.log(name);
// undefined


NaN in JavaScript

NaN means “Not a Number.” It represents a value that is not a valid numeric result.

console.log(10 - "hello");
// NaN
Important points for interview

1. NaN has type number

console.log(typeof NaN);
// "number"

This can be confusing. NaN is a special numeric value in JavaScript.

2. NaN is not equal to itself

console.log(NaN === NaN);
// false

This is a very important interview question.

To check for NaN, prefer:

Number.isNaN(NaN);
// true

3. How can NaN occur?

console.log(0 / 0);
// NaN

console.log(Number("hello"));
// NaN

console.log(Math.sqrt(-1));
// NaN

4. NaN is falsy

if (NaN) {
  console.log("true");
} else {
  console.log("false");
}

// false



*/
