
# Curso TypeScript

#### Éstas son mis notas sobre TS

JS originalmente es un lenguaje muy abierto, flexible y dinámico. Esto, a pesar de tener muchas ventajas también causa algunos problemas, como por ejemplo: 
Hace muy difícil que pueda entenderse el código entre distintos programadores que trabajan en un mismo proyecto
Al no tener casi control de errores es muy fácil cometerlos

Typescript busca estructurar el tipado de JS para encausar el código y que sea más sencillo de entender para más personas. 
No se ejecuta directamente en el browser. TS transpila a JS para poder ser ejecutado.

Yo voy a escribir código TS en un archivo app.ts y con el comando tsc nombre_archivo traduzco o transpilo ese código TS a JS. Esto me va a crear el mismo archivo pero .js el cual sí el browser va a poder leer.
En el caso en el que quiera transpilar todos los archivos .ts a .js puedo usar el comando tsc sin aclarar ningún archivo en la terminal.  

- **tsc –init**: este comando crea el archivo de configuración de TS (tsconfig.json). Este archivo le dice a TS qué tan estricto queremos que sea.

- **tsc -w**: para no estar transpilando los archivos .ts con cada modificación que se le hace, se puede ejecutar el modo watcher en la terminal. Lo que hace este modo es que queda observando y con cada modificación que hagamos en un .ts lo transpila automáticamente a su .js correspondiente.


## TIPOS DE DATOS EN TS

Primitivos: String Number Boolean Symbol

Compuestos: Objetos literales Funciones Clases Arreglos

Especiales: null y undefined

Nuevos tipos de datos que TS nos permite:
- Crear nuevos tipos de datos
- Interfaces
- Genéricos
- Tuplas

Tipo de dato any: (evitar usarlo) funciona como un comodín. Permite usar cualquier tipo de dato.

## FUNCIONES GENÉRICAS

Al agregarle el <T> en el argumento de entrada como en el de salida estoy definiendo que el tipo va a ser el mismo en ambos casos. Esto es una función genérica y lo que me permite es que la función acepte cualquier tipo de dato y a su vez poder contar con la corrección de TS y la lista de métodos sugeridos correspondiente al tipo de dato que estoy ingresando.
Se pone "T" meramente por convención pero puede ir cualquier letra o cualquier otra cosa siempre y cuando no sea una palabra reservada.

    export function genericFunction<T>(argument: T): T {
        return argument;
    }

También puedo hacer que la función genérica obligue a TS a usar un cierto tipo de dato. En este caso el argumento que envío y el que va a devolver van a tener que ser de tipo <Hero>

    export const genericFunctionArrow = <T>(argument: T) => argument;

    console.log(genericFunctionArrow<Hero>(deadpool).realName)

## QUICKTYPE

Al recibir una data desde, por ejemplo un axios.get (respuesta HTTP) puedo darle formato a la interfaz que va a tener ese objeto. Copiar la respuesta en formato JSON (el objeto data), usar Quicktype (abrir paleta de comando Ctrl + Shift + P y escribir "Paste JSON as Code") para que me cree automáticamente las interfaces correspondientes a ese objeto y de esta manera contar con la ayuda de TS a la hora de trabajar con él.

## DECORADORES

Son funciones que me permiten agregar comportamientos o validaciones a clases, propiedades, métodos o parámetros de funciones. Se usan mucho en Angular. 

- **Clases:** los decoradores aplicados a las clases pueden aportar información sobre cómo se deben comportar. En este caso, este decorador está configurando un componente.
    
    @Component({
        selector: 'app-root',
        templateUrl: 'app.component.html'
    })
    export class AppComponent {
        // ...
    }
 
- **Propiedades:** los decoradores aplicados a propiedades pueden ser usados como validadores. En este caso, el decorador estaría validando que la propiedad *email* sea una dirección válida.

    class User {
      @IsEmail()
      email: string;
    }

- **Métodos:** los decoradores aplicados a métodos pueden agregar funcionalidad a los mismos. En este caso por ejemplo, el decorador podría tomar el tiempo de ejecución del método.

    class MyService {
      @logExecutionTime()
      fetchData() {
        // Realiza operaciones de búsqueda de datos
      }
    }

- **Parámetros de funciones:** los decoradores aplicados a los parámetros de las funciones pueden usarse por ejemplo para la inyección de dependencias. En este caso el decorador se utiliza para inyectar dependencias del servicio en el constructor.

    function InjectService(service: Service) {
      return function (target: any, key: string, index: number) {
        // Inyecta el servicio en el parámetro en la posición 'index'
      };
    }

    class MyComponent {
      constructor(@InjectService(MyService) private service: MyService) {
        // ...
      }
    }

## TS CONFIG

- **sourceMap**: crea un archivo .js.map para poder ver en la consola del browser el nombre del archivo y la línea donde está el mensaje o error. Sirve para debugear.
- **outFile**: al asignarle un archivo (_Ej: ./main.js_) guarda todos los .js y .js.map en ese solo archivo. De esta manera simplifica y elimina una excesiva cantidad de archivos.
- **removeComments**: los comentarios hechos en los archivos .ts no cumplen ninguna función en los archivos .js. Con esta función habilitada no transpila los comentarios.
- **strict**: hace que TS sea más estricto. Recomendable que esté siempre habilitada.
- **noImplicitAny**: toma el tipo de dato any como erróneo.

## IMPLEMENTAR TS SOBRE UNA NUEVA LIBRERÍA

Hay librerías que por defecto, si intentamos usar TS hay muchas palabras que éste no tiene configurado, por lo que se hace muy difícil de usar y tira errores. Para solucionar este problema hay que instalar un paquete de TS con las nomenclaturas propias de esa librería.
Por ejemplo, si quiero usar Express, lo importo y me va a tirar error. Al hacer Ctrl + . sobre "express" me va a dar la opción de instalar el paquete @types/express en el package.json lo cual va eliminar todos los errores y permitirme usar TS con Express.
