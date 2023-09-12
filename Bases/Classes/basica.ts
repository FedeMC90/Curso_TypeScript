(() => {
    /**
    class Avenger {
        //* Las propiedades privadas solo viven dentro de esta clase. Las públicas pueden accederse desde fuera
        //* Las propiedades públicas no hace falta ponerles el "public" pero es buena práctica
        private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35; 

        constructor( name: string, team: string, realName?: string ) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
     
    **/ 
    
    // Forma corta para declarar las propiedades y el constructor al mismo tiempo
    class AvengerCorto {
        static avgAge: number = 35;
        static getAvgAge(){
            // Esta propiedad no apunta al "name" del constructor si no al "name" de la clase. 
            return this.name;
        };
        
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        public bio() {
            return `${this.name} (${this.team})`
        }
    }
    
    const antman: AvengerCorto = new AvengerCorto('Antman', 'Capitan', 'Scott Lang');
    //? console.log('antman: ', antman);

    //? console.log(antman.bio());

    // Las propiedades estáticas puedo accederlas desde fuera pero desde clase, no desde la instancia
    // console.log(Avenger.avgAge);

})()