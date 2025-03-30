# webdev_week1

# What is TypeScript?
TypeScript is a superset of JavaScript that adds static typing to the language. Developed and maintained by Microsoft, TypeScript builds on JavaScript by introducing type definitions, which help catch errors during development rather than at runtime.
## How TypeScript Compiles into JavaScript
TypeScript code is not directly executed by browsers or Node.js. Instead, it needs to be transpiled into plain JavaScript. This process involves the TypeScript compiler (`tsc`), which converts TypeScript code into JavaScript code that can run in any JavaScript environment.
Here's a simple example:
### TypeScript Code (`example.ts`):
```TypeScript
   let message: string = "Hello, TypeScript!";
   console.log(message);
```


### Transpiled JavaScript Code (`example.js`):
```TypeScript
   var message = "Hello, TypeScript!";
   console.log(message);
```


To transpile TypeScript to JavaScript, you can use the TypeScript compiler:
```
tsc example.ts
```



## Advantages of TypeScript Over Pure JavaScript
1. Static Typing: TypeScript's type system helps catch errors at compile time, reducing runtime errors and improving code quality.
   ```TypeScript
   let count: number = "This will cause an error"; // Type error
   ```



2. Enhanced IDE Support: TypeScript provides better autocompletion, navigation, and refactoring capabilities in IDEs like Visual Studio Code, making development more efficient.
3. Improved Readability and Maintainability: Type annotations and interfaces make the code more self-documenting, easier to understand, and maintain.
```TypeScript
   interface User {
       name: string;
       age: number;
   }

   let user: User = { name: "Alice", age: 25 };
   ```



4. Modern JavaScript Features: TypeScript supports the latest JavaScript features (ES6 and beyond) and compiles them down to a version of JavaScript that can run in older environments.
   ```TypeScript
   class Person {
       constructor(public name: string, public age: number) {}
   }

   let person = new Person("Bob", 30);
   ```


5. Large Community and Ecosystem: TypeScript has a large and active community, with many libraries and frameworks providing type definitions, making it easier to integrate with existing JavaScript projects.
6. Optional Typing: You can gradually adopt TypeScript in your project. You can start with plain JavaScript and add type annotations as needed, making the transition smooth.
## Example: TypeScript vs. JavaScript
### JavaScript:
```Javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet(42)); // Runtime error: 42 is not a string
```


### TypeScript:
```TypeScript
function greet(name: string): string {
    return `Hello, ${name}`;
}

console.log(greet(42)); // Compile-time error: Argument of type 'number' is not assignable to parameter of type 'string'
```


TypeScript's ability to catch errors early, provide better tooling, and support modern JavaScript features makes it a powerful tool for developing robust and maintainable web applications.

## Fundamentals of TypeScript
1. Type Annotations: Explain how TypeScript allows you to add type annotations to variables, function parameters, and return types.
   ```TypeScript
   let message: string = "Hello, TypeScript!";
   function greet(name: string): string {
       return `Hello, ${name}!`;
   }
    ```

2. Interfaces: Introduce interfaces to define the shape of objects.
   ```TypeScript
   interface User {
       name: string;
       age: number;
   }

   const user: User = {
       name: "Alice",
       age: 25
   };
    ```

3. Classes: Show how TypeScript supports classes and inheritance.
   ```TypeScript
   class Animal {
       name: string;
       constructor(name: string) {
           this.name = name;
       }
       move(distance: number = 0) {
           console.log(`${this.name} moved ${distance} meters.`);
       }
   }

   class Dog extends Animal {
       bark() {
           console.log("Woof! Woof!");
       }
   }

   const dog = new Dog("Buddy");
   dog.bark();
   dog.move(10);
    ```

4. Generics: Explain the concept of generics for creating reusable components.
   ```TypeScript
   function identity<T>(arg: T): T {
       return arg;
   }

   let output = identity<string>("myString");

    ```

## Data Structures in TypeScript
### Arrays
Arrays are used to store multiple values in a single variable.
```TypeScript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];
```

### Tuples
Tuples allow you to store a fixed number of elements with specific types.
```TypeScript
let tuple: [string, number];
tuple = ["hello", 42];
```

### Enums
Enums are a way to define a set of named constants.
```TypeScript
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Green;
```

### Interfaces
Interfaces define the shape of objects.
```TypeScript
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: "Alice",
    age: 25
};
```

### Classes
Classes are blueprints for creating objects with properties and methods.
```TypeScript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Bob", 30);
person.greet();
```

### Maps
Maps are collections of key-value pairs.
```TypeScript
let map = new Map<string, number>();
map.set("apple", 1);
map.set("banana", 2);

console.log(map.get("apple")); // Output: 1

```
### Sets
Sets are collections of unique values.
```TypeScript
let set = new Set<number>();
set.add(1);
set.add(2);
set.add(2); // Duplicate value, will not be added

console.log(set.has(1)); // Output: true
```

Generics
Generics allow you to create reusable components that work with any data type.
```TypeScript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```


## Calculator App
### Project Structure
Create the following files and folders:
```
/calculator-app
  ├── index.html
  ├── styles.css
  └── app.ts
```

### Step 1: HTML Structure
Create the index.html file with the basic structure and elements for the calculator.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn" data-value="/">/</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn" data-value="*">*</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn" data-value="-">-</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn" data-value="=">=</button>
            <button class="btn" data-value="+">+</button>
            <button class="btn" data-value="C">C</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

### Step 2: CSS Styling
Create the styles.css file to style the calculator.
```CSS
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

.calculator {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 200px;
}

#display {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: right;
    font-size: 1.2em;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.btn {
    padding: 15px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}

```

### Step 3: TypeScript Logic
Create the app.ts file to handle the logic for the calculator.

```TypeScript
// Get references to DOM elements
const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn");

let currentInput: string = "";
let operator: string | null = null;
let previousInput: string = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = (button as HTMLButtonElement).dataset.value;

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculateResult();
        } else if (["+", "-", "*", "/"].includes(value!)) {
            setOperator(value!);
        } else {
            appendToDisplay(value!);
        }
    });
});

function clearDisplay() {
    currentInput = "";
    operator = null;
    previousInput = "";
    display.value = "";
}

function appendToDisplay(value: string) {
    currentInput += value;
    display.value = currentInput;
}

function setOperator(op: string) {
    if (currentInput === "") return;
    if (operator !== null) calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (operator === null || currentInput === "") return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result: number;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result.toString();
    currentInput = result.toString();
    operator = null;
    previousInput = "";
}
```

### Step 4: Compile TypeScript
Compile the TypeScript file to JavaScript using the TypeScript compiler.
```bash
tsc app.ts
```

This will generate an app.js file that you can include in your HTML.

### Running the Application
Open the index.html file in a web browser. You should see a simple calculator application where you can perform basic arithmetic operations.

## What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, in speech, or on other media. It allows developers to separate content (HTML) from design (CSS), making it easier to maintain and update web pages.
Different Approaches to Using CSS
### Inline CSS:
CSS is applied directly within HTML elements using the style attribute.
Example:
```CSS
     <p style="color: blue; font-size: 14px;">This is a paragraph.</p>
```

#### Pros: Quick and easy for small changes.
#### Cons: Not scalable, harder to maintain, and can lead to code duplication.
### Internal CSS:
CSS is defined within a style tag in the head section of an HTML document.
Example:
```CSS
     <head>
       <style>
         p {
           color: blue;
           font-size: 14px;
         }
       </style>
     </head>
```

#### Pros: Useful for single-page styles.
#### Cons: Not reusable across multiple pages.
### External CSS:
CSS is written in a separate .css file and linked to the HTML document using the <link> tag.
Example:
```CSS
     <head>
       <link rel="stylesheet" href="styles.css">
     </head>
```

#### Pros: Reusable across multiple pages, easier to maintain, and promotes cleaner HTML.
#### Cons: Requires an additional HTTP request to load the CSS file.

### CSS Frameworks:
Predefined libraries like Bootstrap, Foundation, and Tailwind CSS that provide ready-to-use styles and components.
#### Pros: Speeds up development, ensures consistency, and offers responsive design out of the box.
#### Cons: Can lead to bloated code if not used carefully, and may require customization to fit specific needs.

### Best Practices for Using CSS
1. Keep It Simple:
Write clean, readable, and maintainable CSS.
Use meaningful class and ID names.
2. Use a CSS Reset or Normalize:
Reset or normalize CSS to ensure consistent styling across different browsers.
3. Organize Your CSS:
Group related styles together.
Use comments to separate sections.
4. Avoid Inline Styles:
Use external or internal CSS for better maintainability.
5. Use Shorthand Properties:
Simplify your CSS by using shorthand properties where possible.
Example:
```CSS
     margin: 10px 20px 30px 40px; /* top right bottom left */
```

6. Leverage CSS Variables:
Use CSS variables for reusable values.
Example:
```CSS
     :root {
       --main-color: blue;
     }
     p {
       color: var(--main-color);
     }
```

7. Optimize for Performance:
Minimize and compress CSS files.
Use tools like Autoprefixer to handle vendor prefixes.
8. Responsive Design:
Use media queries to create responsive layouts.
Example:
```CSS
     @media (max-width: 600px) {
       body {
         background-color: lightblue;
       }
     }

```
