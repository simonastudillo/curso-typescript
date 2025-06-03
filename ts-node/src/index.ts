import { genericFunction } from "./generics/generics";

// printObject(123);
// printObject(new Date());
// printObject({ name: "Alice", age: 30 });
// printObject("Hello, TypeScript!");
// printObject([1, 2, 3, 4, 5]);

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction('Hola mundo').toFixed(2));
console.log(genericFunction(new Date()).toFixed(2));