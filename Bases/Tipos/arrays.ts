(() => {
    const numbers: ( string | number | boolean )[] = [1,2,3,4,5,'6',7,8,9,10];
    // Al definir "numbers" como tipo array de números y strings no me permite insertar un bool
    //numbers.push(true);
    numbers.push(11);
    numbers.push(true);
    console.log('numbers: ', numbers);

    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach( v => console.log( v.toUpperCase() ) );
})()