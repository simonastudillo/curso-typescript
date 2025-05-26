(() => {

   type Avenger = {
      nick: string;
      ironman: string;
      vision: string;
      loki: string;
      capitan: string;
      thor: string;
      hulk: string;
      activo: boolean;
      poder: number;
   }

   const avengers: Avenger = {
      nick: 'Samuel L. Jackson',
      ironman: 'Robert Downey Jr.',
      vision: 'Paul Bettany',
      loki: 'Tom Hiddleston',
      capitan: 'Chris Evans',
      thor: 'Chris Hemsworth',
      hulk: 'Mark Ruffalo',
      activo: true,
      poder: 1500.3242
   }

   // Desestructuración de objetos
   const { poder, vision } = avengers;
   console.log(poder.toFixed(2), vision.toUpperCase());

   const printAvenger = ({ vision, ...resto }: Avenger) => {
      console.log(vision);
      console.log(resto);
   }

   printAvenger(avengers);


   // Desestructuración de arreglos
   const avengerArray: [string, boolean, number] = ['Cap. América', true, 150.15];
   // const ironman = avengerArray[1];
   // console.log(ironman);
   const [capitan, ironman, seriaUnNumero] = avengerArray;
   console.log(ironman);
   console.log('ironman');
}) 