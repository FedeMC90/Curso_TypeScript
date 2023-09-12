(() => {
    
    // Puedo definir un tipo nuevo con la palabra reservada "type". Y luego se lo asigno a una variable.
    // De esta manera si tengo varios objetos y tengo que modificar algo de la definición lo hago solo una vez
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    // Suponiendo que tenga que declarar varios objetos iguales y para ahorrar código, puedo reemplazar todo esto por...
    // let superheroes: { name: string, age?: number, powers: string[], getName?: () => string } = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['Super velocidad', 'Viajar en el tiempo']
    // }

    let superheroes: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    }

})()

