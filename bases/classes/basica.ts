(() => {

   class Avenger {
      static avgAge: number = 35;

      constructor(
         private name: string,
         public team: string,
         public realName?: string
      ) { }
   }

   const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');

})();