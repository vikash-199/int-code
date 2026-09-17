/*
Primitive data :- Primitive values are single, immutable values. When you assign them to another variable, the value is copied.
7 primitive data
string
number
boolean
undefined
null
bigint
symbol

Refrence data types - Objects are reference values. Examples include:

Object
Array
Function
Date
Map
Set

When you assign an object to another variable, both variables refer to the same object.

1. Mutable vs Immutable Data

Immutable means the original value cannot be changed after it is created.

Primitive values are immutable.

let name = "Vikash";
name[0] = "R";
console.log(name); // "Vikash"
You cannot directly modify the string.

But you can create a new value:
let name = "Vikash";
name = "Rahul";
console.log(name); // Rahul
Here, the original "Vikash" value was not modified. The variable now points to a different value.

Mutable

Mutable means the existing value/object can be changed after it is created.

Objects and arrays are mutable by default.

let user = {
  name: "Vikash",
  age: 29
};

user.age = 30;

console.log(user);
// { name: "Vikash", age: 30 }

Array example:

let arr = [10, 20, 30];
arr.push(40);
console.log(arr);
// [10, 20, 30, 40]

Important distinction

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
Primitive → changing b doesn't affect a.

But:

let a = { name: "Vikash" };
let b = a;
b.name = "Rahul";
console.log(a.name); // Rahul
Object → both variables reference the same object.

const does NOT make an object immutable:

const prevents reassignment, not object mutation.
*/
