(() => {
    
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado!`;

    // Define el tipo de variable de tipo función
    // let myFunction: Function;

    // Defino la variable como tipo "función" y el tipo de dato que deberá devolver
    let myFunction: ( x: number, y: number ) => number;

    // Como myFunction es una variable de tipo función puedo asignarle cualquier valor que sea de tipo función
    // myFunction = 10;
    // console.log('myFunction: ', myFunction);

    myFunction = addNumbers;
    console.log('myFunction: ', myFunction( 1 , 2 ));

    // myFunction = greet;
    // console.log('myFunction: ', myFunction( 'Federico' ));

    // myFunction = saveTheWorld;
    // console.log('myFunction: ', myFunction());

})()
