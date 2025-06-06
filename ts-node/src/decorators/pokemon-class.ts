function printToConsole(constructor: Function) {
   // console.log(new constructor('Pikachu'));
   console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
   if (print) {
      return printToConsole
   } else {
      return () => { }
   }
}

@printToConsoleConditional(true)
export class Pokemon {

   public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

   constructor(
      public name: string,
   ) { }
}