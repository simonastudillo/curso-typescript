"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Mutant llamado');
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return `${this.name} está salvando el mundo`;
        }
    }
    class Villain extends Mutant {
        conquistarMundo() {
            return `${this.name} está conquistando el mundo`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine.salvarMundo());
    const magneto = new Villain('Magneto', 'Max Eisenhardt');
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(`Nombre: ${character.name}`);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        getFullNameDesdeXmen() {
            return `Xmen: ${super.getFullName()}`;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe tener al menos 3 caracteres');
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Wolverine!!!';
    const nuevoAvenger = new Avenger('Ironman', 'Tony Stark');
})();
//# sourceMappingURL=main.js.map