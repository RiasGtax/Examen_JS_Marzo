Raffle in the JSungle
=====================
#### Examen JS client-side DWEC Dual Febrero 2019

Jerry es un aficionado a coleccionar _sneakers_ de edición limitada. Para ello, ha de aplicar a las rifas que organizan las distintas tiendas de zapas.

Rifas hay muchas, y si introduce los datos por duplicado, lo descalifican.

Por ello, Jerry utiliza una sencilla app en el navegador donde señala si ha participado ya en dicha rifa o no.

El comportamiento de la app es como este:

https://www.soleretriever.com/sacai-x-nike-ldv-waffle-daybreak-blue/

Haz uso del inspector del navegador para hacerte con los estilos CSS y componentes visuales de la página que necesites. No se exige que la página quede exactamente igual. **Asegúrate, eso sí, de que el comportamiento de la app es igual**.

**Se proporciona un módulo llamado `data.js` que exporta un objeto JS en notación `JSON` con los datos de la zapatilla y sus rifas**. Simula el envío de datos por parte del servidor web.


## Instrucciones

- Crea un **repositorio en GitHub**.

- Realiza **_commits_** periódicamente mientras avanzas en el desarrollo de la aplicación y **publica tu solución en el repo creado en GitHub**. Sin estos dos requisitos, el examen no se corrige.

- No olvides configurar git en tu equipo para que el autor de los _commits_ seas tú.

- Puedes desplegar la app en el servicio que quieras.

- Envíame tu proyecto comprimido en un **ZIP** a gelpiorama@gmail.com

- Si sabes cómo hacer luego un _bundle_ para el navegador, divide el proyecto en los módulos que estimes necesarios para garantizar la modularidad, la reutilización y el testing de los componentes.

## Programa principal y casos test

El _script_ principal `main.js` está compuesto por el código necesario para completar las historias de usuario.

Si sabes cómo hacerlo, este código invocará a los módulos con las funciones que necesites, de modo que al final has de generar un `bundle.js` que consuma el navegador. Puedes utilizar la herramienta que prefieras. Con `browserify` y `npm` es fácil. Puedes utilizar el sistema que conozcas y automatizar las tareas con _Grunt_, _Gulp_, _Webpack_ o el que sea que utilices en tu empresa.

**Se proporciona un módulo llamado `data.js` que exporta un objeto JS en notación `JSON` con los datos de la zapatilla y sus rifas**. Simula el envío de datos por parte del servidor web.

Abrevia los casos test: hazlos mediante interacción con el usuario, comprobando la gestión adecuada de los eventos. También puedes completarlos leyendo el estado del  `localStorage`.


# Historias de usuario

## Clean Code

Intenta que el código cliente JS satisfaga las buenas prácticas que hemos tratado en clase (modularidad, asincronía, gestión de eventos, etc.). 

## Visualiza la zapatilla 

Al cargar la página, se observa el modelo de zapatillas y sus datos, que provienen del `data.js` en el objeto `shoe`.

Intenta que el formato de la fuente sea parecido en tamaño.

No es necesario que metas la imagen ni las llamadas a la API de StockX. 


## Visualiza las rifas

Los datos ser obtienen del fichero `data.js`, del objeto `raffles`.

- Al cargar la página, se observan las rifas. Significa que el `data.js` con el `JSON` ha sido parseado.
- Un **botón verde** con el texto **ENTER RAFFLE** indica las que están aun abiertas.
- Un **botón rojo** con el texto **CLOSED** indica las que ya han cerrado.
- Un **botón gris** con el texto **ANNOUNCED** indica que aun no se han abierto.

- El **nombre de la tienda está en negrita**

Intenta que la disposición de las rifas sea lo más parecida a la de la app original. Puedes usar un flex-box o la ñapa que se te ocurra para salir del paso. **No pierdas mucho tiempo en esto**.


## Visita la tienda

- Al hacer **clic sobre cualquiera de estos tres botones**, se abre una nueva pestaña del navegador con la página de la `url` indicada en el `dat.js`

- Al situar el puntero del ratón encima de calquiera de estos tres botones (sin clic), el comportamiento es como el que muestra la app real. Intenta simularlo. No es necesario que sea idéntico.

## Señalar la participación

- Cuando Jerry, por su cuenta, participa en la rifa, hace clic sobre el componente `Mark as entered`. El **texto del componente está en negrita** cambia a `Entered` y el relleno del icono de la estrella cambia a oscuro. Al hacer clic de nuevo, cambia al valor original `Mark as entered`. Puedes obtener el icono directamente de la página original haciendo uso del inspector del navegador.

- Este dato de **configuración de la app se guarda de manera local** en el navegador de Jerry, de modo que cuando recarga la página, puede consultar las rifas en las que ya ha entrado y en cuáles no.


## Filtro por criterio de búsqueda

A veces hay decenas de rifas, así que Jerry necesita filtrarlas en función de ciertos criterios.

- Has de listar los criterios en la interfaz. Ojo que los países, por ejemplo, se crean de manera dinámica.
- Cuando se hace clic en un criterio, este **cambia su color de fondo a verde**.

Crea un filtro que permita filtrar las rifas por:
- Envío postal (_post_) o recoger en tienda (_collect_)
- Cuáles son por rifa (_raffle_) y cuáles por _FCFS_.
- Cuáles se venden en tienda (_In-Store_).
- País de la tienda.
- Mostrarlas todas: _all_

## ¡Me ha tocado!

Veamos si tu código es _Open-Closed_.
Añade una nueva funcionalidad en cada rifa que te permita indicar si has tenido suerte o no (_get an L_). Implementa un componente visual con una ele mayúscula L en amarillo en caso de perder la rifa o una W en caso de ganarla.
