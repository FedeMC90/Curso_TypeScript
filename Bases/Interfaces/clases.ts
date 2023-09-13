(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number):string;
    }

    interface Human {
        age: number;
    }

    // Para que una clase herede las propiedades de una interaz uso la palabra reservada "implements". Es lo mismo que hace el "extends" entre clases. Usando la coma puedo implementar varias interfaces a una clase.
    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        mutantPower( id: number ): string {
            return this.name + ' ' + this.realName;
        }
    }
})()