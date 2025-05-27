(() => {

   class Avenger {
      static avgAge: number = 35;
      static getAvgAge(): number {
         return this.avgAge;
      }

      constructor(
         private name: string,
         public team: string,
         public realName?: string
      ) { }


      public bio(): string {
         return `${this.name} (${this.team})`;
      }

      // private bio(): string {
      //    return `${this.name} (${this.team})`;
      // }
   }

   // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');

   // console.log(antman);
   // console.log(antman.bio());
   // console.log(Avenger.getAvgAge());

})();