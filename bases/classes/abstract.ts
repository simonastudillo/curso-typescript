(() => {

   abstract class Mutant {

      constructor(
         public name: string,
         public realName: string,
      ) {
         // console.log('Constructor Mutant llamado');
      }

   }

   class Xmen extends Mutant {
      salvarMundo(): string {
         return `${this.name} está salvando el mundo`;
      }
   }

   class Villain extends Mutant {

      conquistarMundo(): string {
         return `${this.name} está conquistando el mundo`;
      }

   }

   const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
   // console.log(wolverine.salvarMundo());

   const magneto: Villain = new Villain('Magneto', 'Max Eisenhardt');
   // console.log(magneto.conquistarMundo());

   const printName = (character: Mutant): void => {
      console.log(`Nombre: ${character.name}`);
   }

   // printName(wolverine);
   // printName(magneto);

})();