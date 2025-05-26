"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log(mystique);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '-----'}`.toUpperCase();
        }
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');
    console.log({ superman });
})();
(() => {
    const addNumnber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
});
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(activateBatiSignal());
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Berry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad'],
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Berry Allen',
        age: 24,
        powers: [1, 2],
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
    };
    console.log(superman);
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Fernando',
        age: 23,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Doctor Strange';
    console.log(avenger.charAt(0));
    avenger = 150.235652;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villians = ['Lex Luthor', 'Red Skull', 'Doom'];
    villians.forEach(villian => {
        console.log(villian.toUpperCase());
    });
    numbers.forEach(villian => {
        console.log(villian);
    });
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isSuperman = (isBatman);
    console.log({ isSuperman });
    console.log({ isBatman });
})();
(() => {
    let audioLevel = 5;
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Nunca se ejecuta');
})();
(() => {
    let nada = undefined;
    console.log(nada);
    let isActive = null;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
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
(() => {
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 200;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
    const b = callSuperman();
    console.log(b);
})();
//# sourceMappingURL=main.js.map