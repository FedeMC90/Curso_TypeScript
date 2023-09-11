(() => {

    // En TS debo definir el tipo de dato de los argumentos que paso a una función
    const fullName = ( firstName:string, lastName:string ):string => {
        return `${ firstName } ${ lastName }`;
    }

    // Si llamo a una función y no le paso uno de los argumentos me avisa
    const name = fullName( 'Tony', 'Stark' );
    console.log('name: ', name);

})()