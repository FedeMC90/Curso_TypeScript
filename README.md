
# TypeScript course

#### This are my notes of the TypeScript course that I made

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

## TS CONFIG

- **sourceMap**: crea un archivo .js.map para poder ver en la consola del browser el nombre del archivo y la línea donde está el mensaje o error. Sirve para debugear.
- **outFile**: al asignarle un archivo (_Ej: ./main.js_) guarda todos los .js y .js.map en ese solo archivo. De esta manera simplifica y elimina una excesiva cantidad de archivos.
- **removeComments**: los comentarios hechos en los archivos .ts no cumplen ninguna función en los archivos .js. Con esta función habilitada no transpila los comentarios.
- **strict**: hace que TS sea más estricto. Recomendable que esté siempre habilitada.
- **noImplicitAny**: toma el tipo de dato any como erróneo.
