(() => {

   const addNumnber = (a: number, b: number): number => a + b;
   const greet = (name: string): string => `Hola ${name}`;
   const saveTheWorld = (): string => `El mundo esta salvado!`;

   // let myFunction: Function;
   // let myFunction: (a: number, b: number) => number;
   // let myFunction: (a: string) => string;
   let myFunction: () => string;

   // myFunction = 10;
   // console.log(myFunction); // 10

   // myFunction = addNumnber;
   // console.log(myFunction(1, 2)); // 3
   // myFunction = greet;
   // console.log(myFunction('Simon')); // 3
   myFunction = saveTheWorld;
   console.log(myFunction()); // 3

})