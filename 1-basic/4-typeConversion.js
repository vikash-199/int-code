/*

Type Coercion in JavaScript

Type coercion means JavaScript automatically or explicitly converts one data type into another.

There are two types:

Implicit coercion → JavaScript converts automatically.
Explicit coercion → You convert the type yourself.

1. Implicit Type Coercion

JavaScript automatically converts the type:

console.log("5" + 2);
// "52"

Here, 2 is converted to a string because + with a string performs string concatenation.

But:

console.log("5" - 2);
// 3

Here, "5" is converted to a number because - expects numeric operands.

More examples:

"10" * 2    // 20
"10" / 2    // 5
"10" - 2    // 8

2. Explicit Type Coercion

You manually convert the type:

Number("10");    // 10
String(10);      // "10"
Boolean(1);      // true


== vs === in JavaScript

The main difference is type coercion.

== — Loose Equality

== compares two values after performing type coercion when needed.

console.log(5 == "5");
// true

JavaScript converts "5" → 5, then compares:


More examples:

true == 1        // true
false == 0       // true
null == undefined // true



=== — Strict Equality

=== compares both value and data type.

It does not perform type coercion.

console.log(5 === "5");
// false

Because:

5   → number
"5" → string

Different types → false.

5 === 5       // true
"5" === "5"   // true
true === 1    // false
null === undefined // false


typeof is a JavaScript operator used to determine the type of a value. It returns a string such as string, number, boolean, undefined, object, function, bigint, or symbol. One important exception is typeof null, which returns object because of a historical JavaScript bug.

typeof null;
// "object"

Object.is() in JavaScript

Object.is() is used to determine whether two values are exactly the same. It is similar to ===, but there are two important differences.

Basic example
Object.is(5, 5);
// true

Object.is(5, "5");
// false

Object.is("hello", "hello");
// true
Important difference 1: NaN

With ===:

NaN === NaN
// false

With Object.is():

Object.is(NaN, NaN)
// true

This is because Object.is() considers NaN the same as NaN.

*/
