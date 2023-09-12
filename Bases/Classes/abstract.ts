(() => {
    // Las clases "abstractas" no pueden ser instanciadas directamente. Se usa para construir una estructura base para otras clases hijas lo cual sirve para definir que estas clases hijas tenrán los mismos atributos y comportamientos definidos por su clase padre.
    abstract class Mutante {
        constructor(public name: string, public realName: string) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo salvado!";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado!";
        }
    }

    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    //? console.log(wolverine.salvarMundo());
    //? console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) => {
        //? console.log(character.realName);
    };

    printName(magneto);
})();
