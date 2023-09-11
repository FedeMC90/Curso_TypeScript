(() => {
    
    // Ya no se trabaja con "var" porque es muy irregular y trae muchos errores
    
    // Usando "var" este código no tira errores pero está mal porque no debería poder usar una variable antes
    // de definirla. (Devuelve "undefined")
    //? console.log(a);
    //? var a = 'Federico';
    
    // Usando "let" o "const" sí me tira el error y debo definir la variable ANTES de utilizarla
    const a = 'Federico';
    //? console.log(a);

    // Se recomienda siempre definir las variables como "const" hasta necesitar que sea un "var"

})()