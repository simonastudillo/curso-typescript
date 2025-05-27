(() => {

   class Avenger {
      name;
      power;

      constructor(name = 'No name', power = 0) {
         this.name = name;
         this.power = power;
      }
   }

   class FlyingAvenger extends Avenger {
      flying;

      constructor(name, power, flying = false) {
         super(name, power);
         this.flying = flying;
      }
   }

   const hulk = new Avenger('Hulk', 9001);
   console.log(hulk);


   const falcon = new FlyingAvenger('Falcon', 1000, true);
   console.log(falcon);

})();