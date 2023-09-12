(() => {
    // Cuando debo definir una interfaz mayor a grado 1 (es decir, que tenga una propiedad objeto) es recomendable que esa propiedad sea otra interfaz. De esta manera conservo el código más ordenado. 
    interface Client {
        name: string;
        age?: number;
        address: Address;
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
    };

    const client2: Client = {
        name: "Melisa",
        age: 30,
        address: {
            city: "P.Ch",
            id: 123,
            zip: "JSJ33",
        },
    };
})();
