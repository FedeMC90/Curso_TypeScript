(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            //? console.log('Constructor Avenger llamado')
        }

        // El "protected" me permite acceder a esta propiedad desde una clase que extiende de esta
        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName())
        }

        // Los "getter" parecen una propiedad pero no lo son. Son métodos y siempre tienen que devolver algo
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        // Los "setter" a diferencia de los "getter", siempre deben recibir un argumento y solo uno, no pueden recibir más. Pueden llamarse igual que los "getter"
        set fullName(name: string) {
            
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras.');
            }
            
            this.name = name; 
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    //? console.log('wolverine: ', wolverine);

    // A los "getter" no hace falta invocarlos
    //? console.log(wolverine.fullName) 

    //? wolverine.getFullNameDesdeXmen();

    // Si le paso un valor llama al "setter", si lo leo llama al "getter"
    wolverine.fullName = 'Federico';
    //? console.log(wolverine.fullName);

})()