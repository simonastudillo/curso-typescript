import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
   .then(resp => console.log(resp))
   .catch(err => console.error(err))
   .finally(() => console.log('Finished fetching Pokémon data'));