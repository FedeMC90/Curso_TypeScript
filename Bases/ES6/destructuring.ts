(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number; 
    }
    
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1234
    }

    // Hago destructuring. Extraigo las propiedades del objeto. 
    // const { poder, vision } = avengers;
    // console.log('poder: ', poder.toFixed(2), 'vision: ', vision.toUpperCase());

    // En esta función sé que voy a recibir un objeto y de ese objeto quiero extraer las propiedades "ironman" y el spread (resto) usando destructuring. 
    const printAvengers = ( { ironman, ...resto }: Avengers ) => {
        console.log(ironman, resto.vision);
    }

    //? printAvengers(avengers);

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];

    // Destructuring de array: en este caso quiero obtener el segundo valor del array. Ignoro el 1ro, uso una coma y al segundo valor le pongo un nombre de variable, en este caso "ironman" y los siguientes los ignoro.
    // A diferencia del destructuring de objetos donde debo usar exactamente el mismo nombre de la propiedad, acá puedo usar cualquier nombre
    const [capi, seriaBoolean, unNumero] = avengersArr;
    // Las llaves en el console.log hacen que me muestre el nombre y el valor de la variable
    //? console.log({ seriaBoolean, capi });

})()