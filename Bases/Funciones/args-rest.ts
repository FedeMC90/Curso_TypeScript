(() => {
    // Si necesito hacer una función que reciba N cantidad de parámetros puedo usar los argumentos rest.
    // Utilizando los 3 puntos y siempre definiendo su tipo como un array que es lo que es.
    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName } ${ restArgs.join(' ')}`
    };

    const superman = fullName( 'Clark', 'Joseph', 'Kent' );
    console.log('superman: ', superman);

})()