export const printObject = (argument: any) => {
  console.log(argument);
};

// Al agregarle el <T> en el argumento de entrada como en el de salida estoy definiendo que el tipo va a ser el mismo de la entrada com el de salida. Esto es una función genérica y lo que me permite es que la función acepte cualquier tipo de dato y a su vez poder contar con la corrección de TS y la lista de métodos sugeridos correspondiente al tipo de dato que estoy ingresando.
// Se pone "T" meramente por convención pero puede ir cualquier letra o cualquier otra cosa siempre y cuando no sea una palabra reservada.
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;