function printToConsole(constructor: Function) {
  // console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Un factory decorator es una función que retorna otra función. 
// En este caso este decorador está validando que el id del Pokemon sea correcto
function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del Pokemon debe estar entre 1 y 800')
      } else {
        return originalMethod(id)
      }
    }
  };
}

// Es un decorador cuya función es limitar la edición de propiedades
function readOnly(isWritable: boolean = true):Function {
  return function(target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      // Se activa cuando leo la propiedad a la que aplica este decorador (getter)
      get() {
        console.log(this)
        return 'Federico'
      },
      // Cuando intente disparar un cambio al valor de la propiedad a la que va a aplicar este decorador se va a avtivar el setter
      set(this, val){
        //? console.log(this, val)
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }

    return descriptor;
  }
}

// Decoradores de una clase
@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  // Decorador de un método
  // En los factory decorators, a diferencia de los decoradores normales deben ir los () para que se ejecute
  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado ${id}`);
  }
}
