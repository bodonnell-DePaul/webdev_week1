# HOORAY MY FIRST COMMIT
## Introduction to Web Development


Web development is the process of creating websites and web applications that run in web browsers. Modern web applications consist of several layers:

- **Frontend (Client-side)**: What users see and interact with (HTML, CSS, JavaScript/TypeScript, React)
- **Backend (Server-side)**: Handles data processing, databases, and business logic (.NET in our case)
- **Database**: Stores and manages application data

### What We'll Learn
- **Frontend**: React components written in TypeScript
- **Styling**: CSS for making applications look professional
- **Backend**: .NET APIs that handle data and business logic
- **Version Control**: Git and GitHub for managing code changes

---

## Git and GitHub Essentials

### What is Git?
Git is a **version control system** that tracks changes in your code over time. Think of it as a sophisticated "undo" system that:
- Keeps a history of all changes to your files
- Allows multiple people to work on the same project
- Helps you experiment with new features without breaking existing code
- Lets you go back to previous versions if something goes wrong

### What is GitHub?
GitHub is a **cloud-based platform** that hosts Git repositories and provides additional features:
- **Remote storage** for your code (backup in the cloud)
- **Collaboration tools** for working with teammates
- **Issue tracking** for managing bugs and feature requests
- **GitHub Classroom** for submitting assignments

### Setting Up Git (First Time Only)
```bash
# Configure your identity (use your real name and email)
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"

# Verify your configuration
git config --list
```

### Essential Git Commands

#### Starting a New Project
```bash
# Create a new repository
git init

# Add files to tracking
git add .                    # Add all files
git add filename.txt         # Add specific file

# Commit your changes
git commit -m "Initial commit"
```

#### Working with Existing Projects
```bash
# Clone a repository from GitHub
git clone https://github.com/username/repository-name.git

# Check the status of your files
git status

# See what changes you've made
git diff
```

#### Daily Workflow
```bash
# 1. Check current status
git status

# 2. Add your changes
git add .

# 3. Commit with a descriptive message
git commit -m "Add user login form"

# 4. Push to GitHub
git push origin main
```

### GitHub Classroom Workflow

#### 1. Accepting Assignments
1. Click the assignment link provided by your instructor
2. Accept the assignment (this creates a copy of the starter code in your GitHub account)
3. Clone the repository to your computer:
   ```bash
   git clone [the-url-github-provides]
   cd [repository-name]
   ```

#### 2. Working on Assignments
1. Open the project in VS Code
2. Read the README.md file for instructions
3. Complete the required tasks
4. Test your code frequently

#### 3. Submitting Assignments
```bash
# Save your work frequently
git add .
git commit -m "Complete task 1: implement user interface"
git push origin main

# When finished with the assignment
git add .
git commit -m "Final submission: all requirements completed"
git push origin main
```

#### 4. Verifying Your Submission
1. Go to your repository on GitHub.com
2. Check that your latest commit appears with the correct timestamp
3. Verify that all your files are visible in the repository
4. Look for any automated feedback from GitHub Classroom

### Common Git Scenarios

#### Made a Mistake in Your Last Commit?
```bash
# Change the commit message
git commit --amend -m "Corrected commit message"

# Add forgotten files to the last commit
git add forgotten-file.txt
git commit --amend --no-edit
```

#### Want to See Your Commit History?
```bash
git log --oneline    # Compact view
git log              # Detailed view
```

#### Working with Branches (Advanced)
```bash
# Create and switch to a new branch
git checkout -b feature-branch

# Switch back to main branch
git checkout main

# Merge your feature branch
git merge feature-branch
```

---

## HTML Fundamentals

HTML (HyperText Markup Language) is the foundation of web pages. It provides the structure and content.

### Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>This is a paragraph of text.</p>
    
    <script src="script.js"></script>
</body>
</html>
```

### Essential HTML Elements
```html
<!-- Headings (h1 is largest, h6 is smallest) -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Paragraphs and text formatting -->
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<!-- Lists -->
<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
</ul>

<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
</ol>

<!-- Links -->
<a href="https://example.com">Visit Example.com</a>
<a href="about.html">About Page</a>

<!-- Images -->
<img src="photo.jpg" alt="Description of the image">

<!-- Divisions for grouping content -->
<div class="container">
    <p>Content grouped together</p>
</div>

<!-- Forms -->
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Submit</button>
</form>
```

### Semantic HTML Elements
Use these for better accessibility and SEO:
```html
<header>Page header content</header>
<nav>Navigation menu</nav>
<main>Main page content</main>
<section>A section of content</section>
<article>An article or blog post</article>
<aside>Sidebar content</aside>
<footer>Page footer content</footer>
```

---

## CSS Fundamentals

CSS (Cascading Style Sheets) controls the appearance and layout of HTML elements.

### Ways to Include CSS

#### 1. External CSS (Recommended)
```html
<link rel="stylesheet" href="styles.css">
```

#### 2. Internal CSS
```html
<head>
    <style>
        body { background-color: lightblue; }
    </style>
</head>
```

#### 3. Inline CSS (Avoid)
```html
<p style="color: red;">This text is red</p>
```

### CSS Selectors
```css
/* Element selector */
h1 {
    color: blue;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#main-title {
    font-size: 2rem;
}

/* Descendant selector */
.container p {
    margin-bottom: 1rem;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```

### Common CSS Properties
```css
.example {
    /* Colors */
    color: #333333;                    /* Text color */
    background-color: #f5f5f5;         /* Background color */
    
    /* Typography */
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    
    /* Box model */
    width: 300px;
    height: 200px;
    padding: 20px;                     /* Space inside element */
    margin: 10px;                      /* Space outside element */
    border: 1px solid #ccc;           /* Border around element */
    
    /* Layout */
    display: block;                    /* or inline, inline-block, flex, grid */
    position: relative;               /* or absolute, fixed, sticky */
    
    /* Effects */
    border-radius: 5px;               /* Rounded corners */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);  /* Drop shadow */
}
```

### Flexbox for Layout
```css
.container {
    display: flex;
    justify-content: center;          /* Horizontal alignment */
    align-items: center;              /* Vertical alignment */
    gap: 1rem;                        /* Space between items */
}

.flex-item {
    flex: 1;                          /* Equal width items */
}
```

### CSS Grid for Complex Layouts
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;  /* Three columns */
    grid-template-rows: auto;
    gap: 1rem;
}
```

### Responsive Design
```css
/* Mobile-first approach */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet and larger */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop and larger */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
```

---

## TypeScript Fundamentals

TypeScript is JavaScript with type checking. It helps catch errors early and makes code more maintainable.

### Why TypeScript?
- **Early Error Detection**: Catch mistakes before running code
- **Better IDE Support**: Autocompletion, refactoring, navigation
- **Self-Documenting Code**: Types serve as documentation
- **Team Collaboration**: Clear interfaces between code modules

### Basic Types
```typescript
// Primitive types
let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Alternative array syntax
let scores: Array<number> = [95, 87, 92];

// Tuples (fixed-length arrays with specific types)
let person: [string, number] = ["Alice", 25];

// Any type (avoid when possible)
let anything: any = "could be anything";
```

### Functions
```typescript
// Function with typed parameters and return type
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Function with optional parameters
function createUser(name: string, age?: number): string {
    if (age) {
        return `${name} is ${age} years old`;
    }
    return `${name}'s age is unknown`;
}

// Function with default parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}

// Arrow functions
const add = (a: number, b: number): number => a + b;

// Function that doesn't return anything
function logMessage(message: string): void {
    console.log(message);
}
```

### Interfaces
Interfaces define the shape of objects:
```typescript
// Define an interface
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;           // Optional property
    readonly created: Date; // Cannot be changed after creation
}

// Use the interface
const user: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    created: new Date()
};

// Function using interface
function displayUser(user: User): void {
    console.log(`${user.name} (${user.email})`);
}

// Interface for function signatures
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
```

### Classes
```typescript
class Student {
    // Properties
    private id: number;
    public name: string;
    protected grade: number;

    // Constructor
    constructor(id: number, name: string, grade: number) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    // Methods
    public getInfo(): string {
        return `${this.name} has grade ${this.grade}`;
    }

    private calculateGPA(): number {
        // Private method - only accessible within this class
        return this.grade / 25; // Simple calculation
    }

    // Getter
    get studentId(): number {
        return this.id;
    }

    // Setter
    set studentGrade(newGrade: number) {
        if (newGrade >= 0 && newGrade <= 100) {
            this.grade = newGrade;
        }
    }
}

// Create instance
const student = new Student(1, "Alice", 85);
console.log(student.getInfo());
```

### Enums
```typescript
// Numeric enum
enum UserRole {
    Admin,    // 0
    Teacher,  // 1
    Student   // 2
}

// String enum
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

// Usage
const userRole: UserRole = UserRole.Student;
const favoriteColor: Color = Color.Blue;
```

### Generics
Generics allow you to create reusable components:
```typescript
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Usage
const stringResult = identity<string>("hello");
const numberResult = identity<number>(42);

// Generic interface
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

// Usage
const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "Alice", email: "alice@example.com", created: new Date() },
    success: true,
    message: "User retrieved successfully"
};

// Generic class
class DataStore<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T | undefined {
        return this.items[index];
    }

    getAll(): T[] {
        return [...this.items]; // Return copy
    }
}

// Usage
const numberStore = new DataStore<number>();
const userStore = new DataStore<User>();
```

### Union Types
```typescript
// Variable can be string OR number
let id: string | number;
id = "abc123";  // Valid
id = 12345;     // Also valid

// Function parameter can be multiple types
function formatId(id: string | number): string {
    return id.toString().toUpperCase();
}

// Type guards
function processValue(value: string | number): void {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        console.log(value.toUpperCase());
    } else {
        // TypeScript knows value is number here
        console.log(value.toFixed(2));
    }
}
```

### Type Aliases
```typescript
// Create type aliases for complex types
type Status = "pending" | "approved" | "rejected";
type UserId = string | number;

// Use in interfaces
interface Order {
    id: UserId;
    status: Status;
    items: string[];
}

// Function type alias
type EventHandler = (event: Event) => void;
```

---