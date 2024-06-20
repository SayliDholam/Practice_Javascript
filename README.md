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

#### let
It has Block-scoped. The variable is accessible only within the block (e.g., {}) it is declared in. Variables declared with let are hoisted but not initialized. Accessing them before declaration results in a ReferenceError. Variables declared with let cannot be redeclared within the same scope

#### const
It has Block-scoped. The variable is accessible only within the block it is declared in. Variables declared with const are hoisted but not initialized. Accessing them before declaration results in a ReferenceError. Variables declared with const cannot be redeclared within the same scope. The value assigned to a const variable cannot be changed. However, if the value is an object or an array, the properties of the object or elements of the array can still be modified.

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

### Console 
1. #### console.log()
   - Used to print general messages to the console.
   - Useful for debugging and displaying variable values.
   - ```
     console.log("Hello, world!");
     let name = "John";
     console.log("Name:", name);
     ```
2. #### console.error()
   - Used to output error messages to the console.
   - Displays messages in red to indicate an error.
   - ```
     console.error("This is an error message.");
     ```
3. #### console.warn()
   - Used to output warning messages to the console.
   - Displays messages in yellow to indicate a warning.
   - ```
     console.warn("This is a warning message.");
     ```
4. #### console.info()
   - Used to output informational messages to the console.
   - Similar to console.log(), but with an informational context.
   - ```
     console.info("This is an informational message.");
     ```
5. #### console.table()
   - Used to display data in a table format.
   - Particularly useful for viewing arrays and objects.
   - ``` let users = [ { id: 1, name: "Alice", age: 25 }, { id: 2, name: "Bob", age: 30 } ]; console.table(users); ```
6. #### console.group() and console.groupEnd()
   - Used tUsed to group related log messages together.
   - Makes the console output more organized.
   - ``` console.group("User Details");  console.log("Name: Alice");  console.log("Age: 25");  console.groupEnd(); ```
7. #### console.time() and console.timeEnd()
   - Used to measure the time taken for a block of code to execute.
   - Useful for performance testing.
   - ```console.time("Timer"); for (let i = 0; i < 1000; i++) {//some code } console.timeEnd("Timer"); ```
8. #### console.clear()
   - Used to clear the console.
   - Clears all previously logged messages.
   - ```console.clear(); ```
                        
<br/>

### Functions
Functions in JavaScript are fundamental building blocks that allow you to encapsulate code for reuse, organization, and modularity.
#### Function Declarations
A function declaration defines a named function that can be called anywhere in the code, even before the function is declared due to hoisting.
```
function functionName(parameter1, parameter2, ..., parameterN) {
    // Function body
    // Code to be executed
}
```
#### Function Expressions
A function expression defines a function as part of a larger expression syntax, usually by assigning it to a variable. Function expressions are not hoisted.
```
const functionName = function(parameter1, parameter2, ..., parameterN) {
    // Function body
    // Code to be executed
};
```
#### Arrow Functions
Arrow functions provide a concise syntax for writing functions. They do not have their own this context and are always anonymous.
```
const functionName = (parameter1, parameter2, ..., parameterN) => {
    // Function body
    // Code to be executed
};
```

<br/>

### Loops
Loops are used to repeatedly execute a block of code as long as a specified condition is true. 
#### for loop
The for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and iteration.
```
for (initialization; condition; iteration) {
    // Code to be executed
}
```





<br/>










        
