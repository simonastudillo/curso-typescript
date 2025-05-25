(() => {

   let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
      name: 'Berry Allen',
      age: 24,
      powers: ['Súper velocidad', 'Viajar en el tiempo'],
   }

   let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
      name: 'Clark Kent',
      age: 60,
      powers: ['Súper velocidad'],
   }

   // flash = {
   //    name: 'Clark Kent',
   //    // age: 60,
   //    powers: ['Súper fuerza', 'Volar'],
   //    getName() {
   //       return this.name;
   //    }
   // }

   console.log(flash);

})();