(() => {

    let avenger: any = 123;
    // Si no defino el tipo de dato TS lo considera como "any"
    let exists;
    // TS no me permite crear una constante sin definir el tipo de dato.
    // const exists;
    let power;

    // Al ser la variable "avenger" de tipo "any" puedo asignarle cualquier valor
    avenger = 'Dr Strange';
    // Pero al poner un punto no me despliega los métodos sugeridos.
    console.log(avenger.charAt(0));

    // Puedo castear el valor de la variable de tipo any. Esto hace que TS la trate como string
    // pero no cambia el tipo de variable
    console.log((avenger as string).charAt(0));

    avenger = 150.12415561312;
    // Otra manera de castear variables.
    console.log(<number>avenger.toFixed(2));
    
})()