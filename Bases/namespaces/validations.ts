namespace Validations {
  // Es un agrupador global. Puedo meterle funciones, variables y lo que quiera y solo permitir que se use en el exterior lo que quiera exportar. No se usa mucho.
  export const validateText = (texto: string): boolean => {
    return texto.length > 3 ? true : false;
  };

  const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

//? console.log(Validations.validateText("Fede"));
