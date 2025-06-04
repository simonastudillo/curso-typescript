import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
   .then(pokemon => console.log(pokemon.name))
   .catch(err => console.error(err))
   .finally(() => console.log('Finished fetching Pokémon data'));