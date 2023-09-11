(() => {

    // Las propiedades de los objetos también puedo definirlas como opcionales. 
    // A diferencia de las funciones, la propiedad opcional no hace falta que vaya al final
    let superheroes: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    // Una vez armado el objeto no puedo crearle otro campo o cambiar solamente uno. Si modifico algo debo
    // declarar nuevamente todos los campos del objeto.
    superheroes = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    }

    // console.log('superheroes: ', superheroes.getName());

})()