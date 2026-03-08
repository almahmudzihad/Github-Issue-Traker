    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?


### 1. var vs. let vs. const
In the past, JavaScript only had 'var', but modern development relies on 'let' and 'const' for better stability.

var: The old way. It is function-scoped and can be re-declared anywhere. It often causes issues because it doesn't respect block boundaries (like if statements or loops).
let: Introduced in ES6. It is block-scoped (stays inside { }). You can update its value, but you cannot re-declare it in the same scope.
const: Short for constant. Like let, it is block-scoped. However, once you assign a value, you cannot re-assign it. Use this by default unless you know the value must change.

### 2. The Spread Operator (...)
The spread operator consists of three dots (...). It allows you to spread or unpack elements from an array or object into a new one. 

It’s incredibly useful for:
- Copying arrays or objects without mutating the original.
- Merging multiple arrays into one.
- Passing array elements as individual arguments to a function.

### 3. map() vs. filter() vs. forEach()
All three are used to iterate over arrays, but they serve different purposes:

forEach(): Just a simple loop. It executes a function for every item but returns nothing (undefined). Use it when you just need to perform an action (like logging).
map(): Transforms an array. It runs through every element and returns a new array of the same length with modified values.
filter(): The "selector." It checks every element against a condition and returns a new array containing only the items that passed the test.

### 4. Arrow Functions
Arrow functions provide a shorter syntax for writing functions. They remove the need for the function keyword and use the => symbol.


### 5. Template Literals
Template literals are a better way to handle strings. Instead of single or double quotes, they use backticks (``).



**(I’m doing the entire assignment using my own intelligence, and occasionally I watch the module videos.)**
GitHub Repository Link: https://github.com/almahmudzihad/Github-Issue-Traker
Live Site Link: https://almahmudzihad.github.io/Github-Issue-Traker 
LinkedIn profile: www.linkedin.com/in/AlMahmudZihad 
