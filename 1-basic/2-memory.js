/*
2. Stack vs Heap Memory in JavaScript

This is commonly asked with Primitive vs Reference types.

Stack Memory

The stack is used for things like function execution and local variables. It is fast and automatically managed.

let a = 10;
let b = 20;

Conceptually:

Stack
┌─────────┐
│ b = 20  │
│ a = 10  │
└─────────┘
Heap Memory

The heap is used for dynamically allocated objects such as objects, arrays, and functions.

const user = {
  name: "Vikash",
  age: 29
};

Conceptually:

Stack                 Heap
┌─────────────┐       ┌──────────────────┐
│ user ───────┼──────>│ {                │
└─────────────┘       │   name: "Vikash" │
                      │   age: 29         │
                      └──────────────────┘

The variable user holds a reference to the object.

*/
