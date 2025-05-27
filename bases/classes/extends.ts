(() => {

   class Avenger {

      constructor(
         public name: string,
         public realName: string,
      ) {
         console.log('Constructor Avenger llamado');
      }

      // private getFullName(): string {
      //    return `${this.name} ${this.realName}`;
      // }

      protected getFullName(): string {
         return `${this.name} ${this.realName}`;
      }

   }

   class Xmen extends Avenger {

      constructor(
         name: string,
         realName: string,
         public isMutant: boolean
      ) {
         super(name, realName);
         console.log('Constructor Xmen llamado');
      }

      public getFullNameDesdeXmen(): string {
         return `Xmen: ${super.getFullName()}`;
      }

   }

   const wolverine = new Xmen('Wolverine', 'Logan', true);

   console.log(wolverine);
   console.log(wolverine.getFullNameDesdeXmen());

   const nuevoAvenger = new Avenger('Ironman', 'Tony Stark');
   console.log(nuevoAvenger);
   // console.log(nuevoAvenger.getFullName()); // Error: getFullName is private in Avenger class

})();