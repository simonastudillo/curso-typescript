import powers from "../data/powers";

export class Hero {

   constructor(
      public name: string,
      public powerId: number,
      public age: number
   ) {

   }

   get power(): string {
      // return powers.find(power => power.id === this.powerId) || 'Unknown Power';
      return powers.find(power => power.id === this.powerId)?.desc || 'Unknown Power';
   }
}

export class Hero2 { }
export class Hero3 { }
export class Hero4 { }

export const PI = 3.14;