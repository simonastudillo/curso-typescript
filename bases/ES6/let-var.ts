(() => {

   // console.log(a); // undefined
   // var a = 'Fernando';

   // console.log(b); // ReferenceError: Cannot access 'b' before initialization
   // let b = 'Fernando';


   const NOMBRE = 'Fernando';

   const heroe = {
      a: 1,
      b: 2
   }

   heroe.b = 100;

   const getName = () => {
      return NOMBRE;
   };


})();