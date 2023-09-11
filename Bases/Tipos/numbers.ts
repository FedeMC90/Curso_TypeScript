(() => {
    let avengers: number = 10;

    console.log(avengers);

    const villians: number = 20;

    // Si no defino el tipo o el valor de una de las variables chilla. En JS no diría nada.
    if (avengers < villians) {
       console.log('Estamos en problemas');
    } else {
       console.log('Nos salvamos');
    }
})();