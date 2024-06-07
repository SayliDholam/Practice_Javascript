# Practice_Javascript

Welcome to my Practice_Javascript GitHub repository! <br/>
This repository serves as a beginner-friendly guide to JavaScript, covering fundamental concepts such as variables, data types, functions, and more.
<br/>
<br/>

## Table of Contents

- Variables
- Data Types
- Console
- Functions
- Loops
<br/>

### Variables
#### var
It has Function-scoped. This ty of variable is accessible within the function it is declared in. If declared outside any function, it is globally scoped. Variables declared with var are hoisted to the top of their scope and initialized with undefined.Variables declared with var can be redeclared within the same scope.
```
function exampleVar() {
    console.log(x); // undefined 
    var x = 10;
    console.log(x); // 10
}

exampleVar();

// Global scope example
var y = 20;
console.log(y); // 20
```

#### let
It has Block-scoped. The variable is accessible only within the block (e.g., {}) it is declared in. Variables declared with let are hoisted but not initialized. Accessing them before declaration results in a ReferenceError. Variables declared with let cannot be redeclared within the same scope
```
function exampleLet() {
    // console.log(a); // ReferenceError 
    let a = 30;
    console.log(a); // 30
}

exampleLet();

// Block scope example
{
    let b = 40;
    console.log(b); // 40
}
// console.log(b); // ReferenceError (b is not defined outside the block)
```
<br/>

### Data Types
#### Primitive Data Types :<br/>
number: Numeric values, both integer and floating-point ```let age = 25;// Integer ``` ```let price = 19.99;  // Floating-point```<br/>
string: Sequence of characters ```let name = "John";```<br/>
boolean: True or false values ```let isActive = true;```<br/>
#### Reference Data Types<br/>
Arrays: A collection of elements, all of the same or different types. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size.```let numbers = [1, 2, 3, 4, 5];``` ``` let names = ["Alice", "Bob", "Charlie"]; ```.<br/>
Objects: A collection of key-value pairs. ```let person = { name: "John", age: 30 }; ```<br/>

<br/>

