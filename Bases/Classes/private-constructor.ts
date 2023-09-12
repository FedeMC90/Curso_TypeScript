(() => {
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(public name: string) {}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis!");
            }

            return Apocalipsis.instance;
        }
    }

    // (Esto no se usa mucho) De esta manera me aseguro que las instancias de mi clase sean siempre la misma.
    //? const apocalipsis = new Apocalipsis("Soy Apocalipsis");
    const apocalipsis = Apocalipsis.callApocalipsis();
    //?= console.log("apocalipsis: ", apocalipsis);
})();
