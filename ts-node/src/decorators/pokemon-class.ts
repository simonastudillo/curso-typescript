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

const bloquearPrototipo = function (constructor: Function) {
   Object.seal(constructor);
   Object.seal(constructor.prototype);
}


function CheckValidPokemonId(): Function {
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

      const originalMethod = descriptor.value;

      descriptor.value = (id: number) => {
         if (id < 1 || id > 800) {
            throw new Error('El id del pokemon debe ser un número entre 1 y 800');
         }
         return originalMethod.value(id)
      }

   }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

   public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

   constructor(
      public name: string,
   ) { }

   @CheckValidPokemonId()
   savePokemonToDB(id: number) {
      console.log(`Pokemon saved to DB ${this.name} with id ${id}`);
   }
}