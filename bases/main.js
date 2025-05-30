"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3);
    };
    Validations.validateDate = (fecha) => {
        return (!isNaN(fecha.valueOf()) === false);
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Hello"));
console.log(Validations.validateText("Hi"));
//# sourceMappingURL=main.js.map