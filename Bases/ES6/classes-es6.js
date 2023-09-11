(() => {
    
    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    // Al "extender" o heredar esta clase de la clase "Avenger" puedo utilizar todas sus propiedades y su constructor
    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power) {
            super(name, power)  // Llamo al constructor de la clase heredada
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9001);
    const falcon = new FlyingAvenger('Falcon', 50);
    
    console.log(hulk);
    console.log(falcon);

})()