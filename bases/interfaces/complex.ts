(() => {

   interface Address {
      id: number;
      zip: string;
      city: string;
   }

   interface Client {
      name: string;
      age?: number;
      address?: Address;
      getFullAddress(id: string): string;
   }

   const client: Client = {
      name: 'Complex Client',
      age: 30,
      address: {
         id: 1,
         zip: '12345',
         city: 'New York'
      },
      getFullAddress(id: string): string {
         return `${this.address?.city}, ${this.address?.zip}`;
      }
   }

   const client2: Client = {
      name: 'Melissa',
      age: 25,
      address: {
         id: 2,
         zip: '54321',
         city: 'Los Angeles'
      },
      getFullAddress(id: string): string {
         return `${this.address?.city}, ${this.address?.zip}`;
      }
   }

})();