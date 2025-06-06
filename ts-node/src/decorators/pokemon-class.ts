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

function readonly(isWritable: boolean = true): Function {
   return function (target: any, propertyKey: string) {

      const descriptor: PropertyDescriptor = {
         get() {
            return '';
         },
         set(this, val) {
            if (!isWritable) {
               throw new Error(`No se puede modificar la propiedad ${propertyKey}`);
            }
            Object.defineProperty(this, propertyKey, {
               value: val,
               writable: !isWritable,
               configurable: true,
               enumerable: true
            });
         }
      }

      return descriptor;
   }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
   @readonly()
   public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

   constructor(
      public name: string,
   ) { }

   @CheckValidPokemonId()
   savePokemonToDB(id: number) {
      console.log(`Pokemon saved to DB ${this.name} with id ${id}`);
   }
}