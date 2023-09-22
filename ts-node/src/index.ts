// Si llego a tener duplicado el valor de lo que estoy importando o simplemente quiero darle otro nombre puedo importarlo con un alias usando la palabra reservada "as"
//? import { Hero as Superhero } from "./classes/Hero";

// Otra forma de importar es trayendome todo y le asigno un alias. De esta manera lo que importe se comportará como si fuesen métodos de una clase
import * as HeroClasses from "./classes/Hero";

// También está el "export default". De esta manera al importar, no hace falta usar destructuring y puedo darle a la importación el nombre que yo quiera que JS va a entender lo que estoy importando porque viene por default (valga la redundancia)
import poderes from "./data/powers";

const Hero = 123;

const ironman = new HeroClasses.Hero("Ironman", 1, 55);
console.log("ironman: ", ironman);

console.log(poderes)