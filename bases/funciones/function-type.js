"use strict";
(() => {
    const addNumnber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    // let myFunction: Function;
    // let myFunction: (a: number, b: number) => number;
    // let myFunction: (a: string) => string;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction); // 10
    // myFunction = addNumnber;
    // console.log(myFunction(1, 2)); // 3
    // myFunction = greet;
    // console.log(myFunction('Simon')); // 3
    myFunction = saveTheWorld;
    console.log(myFunction()); // 3
});
//# sourceMappingURL=function-type.js.map