"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log({ batman });
    console.log({ linternaVerde });
    console.log({ volcanNegro });
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(`I'm ${batman.toUpperCase()}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay un héroe en la posición 10');
})();
