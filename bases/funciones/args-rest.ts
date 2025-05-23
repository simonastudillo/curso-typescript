(() => {

   const fullName = (firstName: string, ...restArgs: string[]): string => {
      return `${firstName} ${restArgs.join(' ')}`;
   }

   const superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');
   console.log({ superman }); // Clark Joseph Kent

})();