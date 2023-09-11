(() => {

    // Una variable con tipo definido no puede tener valor "undefined" pero puede tener más
    // de un tipo
    let isActive: (number | undefined) = undefined;
    console.log('isActive: ', isActive);
    
})()