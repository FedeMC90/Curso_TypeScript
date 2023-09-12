(() => {
    // Las "interfaces" y los "tipos" son casi lo mismo, excepto que las "interfaces" pueden expandirse como su fuese una clase
    //? type Hero = {
    interface Hero  {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        },
    };

    superman
})();
