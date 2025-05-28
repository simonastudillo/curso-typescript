(() => {

   interface Xmen {
      name: string;
      realName: string;
      mutantPower(id: number): string;
   }

   interface Human {
      age: number;
   }

   class Mutant implements Xmen {

      public age: number = 0;

      constructor(
         public name: string,
         public realName: string
      ) {
         this.name = name;
         this.realName = realName;
      }

      mutantPower(id: number): string {
         return `${this.name} has the power of teleportation with ID: ${id}`;
      }
   }

})();