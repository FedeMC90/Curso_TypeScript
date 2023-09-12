"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo salvado!";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado!";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
    };
    printName(magneto);
})();
(() => {
    class AvengerCorto {
        static getAvgAge() {
            return this.name;
        }
        ;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    AvengerCorto.avgAge = 35;
    const antman = new AvengerCorto('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras.');
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Federico';
})();
//# sourceMappingURL=main.js.map