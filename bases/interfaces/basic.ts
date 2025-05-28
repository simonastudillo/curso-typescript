(() => {

   interface hero {
      name: string;
      age?: number;
      powers: number[];
      getName?: () => string;
   }

   let flash: hero = {
      name: 'Berry Allen',
      age: 24,
      powers: [1, 2],
   }

   console.log(flash);

   let superman: hero = {
      name: 'Clark Kent',
      age: 60,
      powers: [1],
   }

   console.log(superman);

})();