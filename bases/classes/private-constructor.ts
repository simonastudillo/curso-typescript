(() => {

   class Apocalipsis {

      static instance: Apocalipsis;

      private constructor(
         public name: string
      ) { }

      static callApocalipsis(): Apocalipsis {
         if (!Apocalipsis.instance) {
            Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
         }
         return Apocalipsis.instance;
      }

      changeName(newName: string): void {
         this.name = newName;
      }

   }


   // const apocalipsis = new Apocalipsis('Soy Apocalipsis 1');
   // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis 2');
   // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis 3');
   // console.log(apocalipsis, apocalipsis2, apocalipsis3);

   const apocalipsis1 = Apocalipsis.callApocalipsis();
   const apocalipsis2 = Apocalipsis.callApocalipsis();
   const apocalipsis3 = Apocalipsis.callApocalipsis();

   apocalipsis1.changeName('Soy Apocalipsis 1 modificado');
   console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})();