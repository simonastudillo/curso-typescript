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

      get fullName(): string {
         return `${this.name} - ${this.realName}`;
      }

      set fullName(name: string) {
         if (name.length < 3) {
            throw new Error('El nombre debe tener al menos 3 caracteres');
         }
         this.name = name;
      }

   }

   const wolverine = new Xmen('Wolverine', 'Logan', true);

   console.log(wolverine);
   console.log(wolverine.getFullNameDesdeXmen());
   console.log(wolverine.fullName);
   wolverine.fullName = 'Wolverine!!!';
   console.log(wolverine.fullName);

   const nuevoAvenger = new Avenger('Ironman', 'Tony Stark');
   console.log(nuevoAvenger);
   // console.log(nuevoAvenger.getFullName()); // Error: getFullName is private in Avenger class

})();