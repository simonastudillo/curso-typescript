(() => {

   type hero = {
      name: string;
      age?: number;
      powers: number[];
      getName?: () => string;
   }

   let myCustomVariable: (string | number | boolean | hero) = 'Fernando';
   console.log(typeof myCustomVariable);

   myCustomVariable = 123;
   console.log(typeof myCustomVariable);

   myCustomVariable = {
      name: 'Fernando',
      age: 23,
      powers: [1, 2, 3],
   };
   console.log(typeof myCustomVariable);

})();