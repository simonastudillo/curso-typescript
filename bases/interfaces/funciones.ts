(() => {

   interface addTwoNumbers {
      (a: number, b: number): number;
   }

   let addFunction: addTwoNumbers;

   addFunction = (a: number, b: number) => {
      return 10;
   }

})();