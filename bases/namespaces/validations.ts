namespace Validations {
   export const validateText = (text: string): boolean => {
      return (text.length > 3)
   }

   export const validateDate = (fecha: Date): boolean => {
      return (!isNaN(fecha.valueOf()) === false)
   }
}

console.log(Validations.validateText("Hello")); // true
console.log(Validations.validateText("Hi")); // false