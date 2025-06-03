export const printObject = (argument: any): void => {
   console.log(argument);
   console.log(typeof argument);
}

export function genericFunction<T>(argument: T): T {
   return argument;
}

export const genericArrowFunction = <T>(argument: T): T => {
   return argument;
}