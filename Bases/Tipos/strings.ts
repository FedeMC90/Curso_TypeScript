// Diferentes formas de declarar un string
(() => {
    const batman: string = 'Batman';
    // La comilla doble me permite poner un apóstrofe cosa que la simple no
    const linternaVerda: string = "Linterna's Verda";
    const volcanNegro: string = `Héroe: Volcan Negro`;
    // Con el tipo de la variable declarado me habilita a ver los métodos (al poner punto) 
    // disponibles para ese tipo.
    console.log(batman.toUpperCase())
    
    console.log(`I'm ${batman}`);

    // El string batman no tiene 10 caracteres, por lo tanto con el signo "?" me parmite decir.
    // "Si existe hace el upperCase, si no hacé otra cosa" evitando el error. 
    console.log(batman[10]?.toUpperCase() || 'No está presente');
})();