import { genericArrowFunction } from "./generics/generics";

// printObject(123);
// printObject(new Date());
// printObject({ name: "Alice", age: 30 });
// printObject("Hello, TypeScript!");
// printObject([1, 2, 3, 4, 5]);

console.log(genericArrowFunction(3.1416).toFixed(2));
console.log(genericArrowFunction('Hola mundo').toUpperCase());
console.log(genericArrowFunction(new Date()).toDateString());