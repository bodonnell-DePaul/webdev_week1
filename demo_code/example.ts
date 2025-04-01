   
   let static_message: string = "Hello, TypeScript!";
   console.log(static_message);

   //let count: number = "This will cause an error"; // Type error

   interface User {
      name: string;
      age: number;
  }

  let user: User = { name: "Alice", age: 25 };

class Person {
   constructor(public name: string, public age: number) {}
}

let person = new Person("Bob", 30);

function greet(name: string): string {  //function functionName(parameterName: parameterType): returnType {do stuff here};
   return `Hello, ${name}`;
}

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

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];

let tuple: [string, number];
tuple = ["hello", 42];

enum Color {
   Red,
   Green,
   Blue
}

let color: Color = Color.Green;

interface User {
   name: string;
   age: number;
}

let user1: User = {
   name: "Alice",
   age: 25
};

class NewPerson {
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

let newPerson = new NewPerson("Bob", 30);
newPerson.greet();

//map == dictionary
let map = new Map<string, number>();
map.set("apple", 1);
map.set("banana", 2);

console.log(map.get("apple")); // Output: 1


let set = new Set<number>();
set.add(1);
set.add(2);
set.add(2); // Duplicate value, will not be added

console.log(set.has(1)); // Output: true

function identity<T>(arg: T): T {
   return arg;
}

let output = identity<string>("myString");