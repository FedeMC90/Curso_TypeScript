(() => {
    // Las funciones de tipo "never" no tienen que tener un punto alcanzable. Quiere decir que
    // debe romper. 
    // Puedo definir para que devuelva más de un tipo de dato
    const error = ( message: string ):( never | number ) => {
        
        if ( false ) {
            throw new Error( message );
        }

        return 1;
    }

    error( 'Auxilio!' );

})()