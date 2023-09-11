(() => {
    
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando';
    console.log('myCustomVariable: ', typeof myCustomVariable); // string

    myCustomVariable = 20;
    console.log('myCustomVariable: ', typeof myCustomVariable); // number

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ninguno']
    }
    console.log('myCustomVariable: ', typeof myCustomVariable); // object

})()