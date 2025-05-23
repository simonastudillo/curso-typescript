(() => {

   const batman: string = 'Batman';
   const linternaVerde: string = "Linterna Verde";
   const volcanNegro: string = `Héroe: Volcan Negro`;

   console.log({ batman });
   console.log({ linternaVerde });
   console.log({ volcanNegro });

   const abc = 123;

   console.log(`I'm ${batman}, ${abc}`);
   console.log(`I'm ${batman.toUpperCase()}`);

   console.log(batman[10]?.toUpperCase() || 'No hay un héroe en la posición 10');

})();