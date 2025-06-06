function printToConsole(constructor: Function) {
   // console.log(new constructor('Pikachu'));
   console.log(constructor);
}

@printToConsole
export class Pokemon {

   public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

   constructor(
      public name: string,
   ) { }
}