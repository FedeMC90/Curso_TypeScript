(() => {

    // Los argumentos opcionales deben ir al final a menos que un argumento obligatorio tenga
    // asignado un valor por default
    // Puedo asignarle un valor por default a los argumentos
    const fullName = ( firstName:string, lastName?:string, upper: boolean = false ):string => {
        
        if ( upper ) {
            return `${ firstName } ${ lastName || 'no lastname'}`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'no lastname'}`;
        }
    }

    const name = fullName( 'Tony', 'Stark', true );
    console.log('name: ', name);

})()
