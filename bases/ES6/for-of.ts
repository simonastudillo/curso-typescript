(() => {
   type Avenger = {
      name: string;
      weapon: string;
   }

   const ironman: Avenger = {
      name: 'Ironman',
      weapon: 'Armored Suit'
   }

   const captainAmerica: Avenger = {
      name: 'Capitán América',
      weapon: 'Escudo'
   }

   const thor: Avenger = {
      name: 'Thor',
      weapon: 'Mjolnir'
   }

   const avengers: Avenger[] = [ironman, captainAmerica, thor];

   for (let index = 0; index < avengers.length; index++) {
      const avenger = avengers[index];
      console.log(avenger.name, avenger.weapon);
   }

   // For-of loop
   for (const avenger of avengers) {
      console.log(avenger);
   }

})();