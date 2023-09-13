(() => {
    // Cuando debo definir una interfaz mayor a grado 1 (es decir, que tenga una propiedad de tipo objeto) es recomendable que esa propiedad sea otra interfaz. De esta manera conservo el código más ordenado.
    interface Client {
        name: string;
        age?: number;
        address: Address;
        // Puedo agregar métodos a las interfaces pero solo declararlos. Es decir, requerir que exitan en sus instancias. No puedo definirlos. Eso debe hacerse dentro de cada instancia. Debido a esto, si necesito definir un método es recomendable crear una clase en vez de una interfaz. 
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 126,
            zip: "DWE122",
            city: "CABA",
        },
        getFullAddress(id: string) {
            return this.address.city;
        },
    };

    const client2: Client = {
        name: "Melisa",
        age: 30,
        address: {
            city: "P.Ch",
            id: 123,
            zip: "JSJ33",
        },
        getFullAddress(id: string) {
            return this.address.city;
        },
    };
})();
