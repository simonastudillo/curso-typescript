"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        loki: 'Tom Hiddleston',
        capitan: 'Chris Evans',
        thor: 'Chris Hemsworth',
        hulk: 'Mark Ruffalo',
        activo: true,
        poder: 1500.3242
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision);
        console.log(resto);
    };
    printAvenger(avengers);
    const avengerArray = ['Cap. América', true, 150.15];
    const [capitan, ironman, seriaUnNumero] = avengerArray;
    console.log(ironman);
    console.log('ironman');
});
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armored Suit'
    };
    const captainAmerica = {
        name: 'Capitán América',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (let index = 0; index < avengers.length; index++) {
        const avenger = avengers[index];
        console.log(avenger.name, avenger.weapon);
    }
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const NOMBRE = 'Fernando';
    const heroe = {
        a: 1,
        b: 2
    };
    heroe.b = 100;
    const getName = () => {
        return NOMBRE;
    };
})();
//# sourceMappingURL=main.js.map