(() => {

    // Con el signo "?" en el argumento permito que el mismo no sea obligatorio
    // En JS, todos los argumentos de las funciones son opcionales
    const fullName = ( firstName:string, lastName?:string ):string => {
        return `${ firstName } ${ lastName || 'no lastname'}`;
    }

    const name = fullName( 'Tony' );
    console.log('name: ', name);

})()
