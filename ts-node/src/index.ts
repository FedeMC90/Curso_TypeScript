// Si llego a tener duplicado el valor de lo que estoy importando o simplemente quiero darle otro nombre puedo importarlo con un alias usando la palabra reservada "as"
//? import { Hero as Superhero } from "./classes/Hero";

// Otra forma de importar es trayendome todo y le asigno un alias. De esta manera lo que importe se comportará como si fuesen métodos de una clase
//? import * as HeroClasses from "./classes/Hero";

// También está el "export default". De esta manera al importar, no hace falta usar destructuring y puedo darle a la importación el nombre que yo quiera que JS va a entender lo que estoy importando porque viene por default (valga la redundancia)
//? import poderes from "./data/powers";
//? 
//? const Hero = 123;
//? 
//? const ironman = new HeroClasses.Hero("Ironman", 1, 55);
//? console.log("ironman: ", ironman);
//? 
//? console.log(poderes)

import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";

// printObject(123); 
// printObject(new Date());
// printObject({a: 1, b:2, c:3});
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// printObject('Hola mundo!');
const name = 'Federico';

// Al ser genericFunction una función genérica puedo mandarle como argumento cualqquier tipo de dato y aún así TS me va a corregir si le paso un método que no corresponde a ese tipo y me va a sugerir los métodos correspondientes a ese tipo.
console.log(genericFunction(3.14).toFixed(2))
console.log(genericFunctionArrow(name).toUpperCase())
console.log(genericFunction(new Date()).getDate())

