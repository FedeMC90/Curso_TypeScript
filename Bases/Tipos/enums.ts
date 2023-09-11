(() => {
    
    // El tipo "enum" sirve para indicarle a una variable que pueda tomar ciertos valores y no
    // cualquier valor
    // Si no les asigno un valor a cada propiedad se autoasignan, secuencialmente a partir de cero
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }
    // Al poner un punto me aparecen las opciones que le definí
    let currentAudio = AudioLevel.max;
    console.log('AudioLevel: ', AudioLevel);
    console.log('currentAudio: ', currentAudio);

})()