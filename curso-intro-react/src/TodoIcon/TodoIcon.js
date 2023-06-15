import React from "react";
import '../css/TodoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
/*
Por ahora los íconos de nuestra aplicación solo son etiquetas span con algún carácter representando la acción que conseguirán los usuarios al presionarlos. No está mal, funciona. Pero queremos reutilizar estos íconos fuera del componente TodoItem.

Por eso el reto de esta clase es que crees tu propio componente TodoIcon, las reglas son:

Te debe permitir elegir qué tipo de ícono quieres (marcar como completado, borrar o incluso algunos más que podamos necesitar).
Cada ícono también debe poder tener estados (cambios al color o alguna otra propiedad del ícono para darle feedback a los usuarios de que realizaron alguna acción, como dar click o pasar el mouse por encima).
Es válido que uses varios componentes en vez de solo uno para definir la lógica de tus íconos.

Haz tu mayor esfuerzo por completar el reto y publicar tu solución en los comentarios. Luego de eso puedes ver mi propuesta de solución.

Solución:
La ventaja de usar letras para simular el comportamiento de nuestros íconos es que podemos cambiarles el color con CSS extremadamente fácil. La desventaja es que no son muy “estéticas”.

La ventaja de usar imágenes es que podemos tener la versión más estética de cada ícono. La desventaja es que no podemos cambiarles el color con CSS, necesitamos a fuerzas otra imagen con el nuevo color.

Afortunadamente, tenemos una tercera alternativa con las ventajas de ambos mundos: svg.

Las imágenes en SVG son diseñadas por la persona encargada del diseño, pero al exportarlas en formato SVG tenemos la imagen “maquetada” con etiquetas HTML que podemos modificar con CSS.

Su única desventaja es la complejidad de su implementación. Pero somos hijas e hijos de Platzi, no vinimos para lo fácil, sino para nunca parar de aprender. ¡Así que a la carga!

Empecemos creando un componente TodoIcon en su propia carpeta y con sus respectivos archivos de JavaScript y CSS:
-----------------------CODIGO ---------------------------------------------
YA ESTA PUESTO
----------------
Ahora debemos pensar qué propiedades pueden necesitar nuestros íconos, yo elegí las siguientes:

type: para seleccionar qué ícono svg vamos a mostrar.
color: para seleccionar el color de nuestro ícono svg, por defecto será gray.
onClick: para invocar alguna función cuando le demos click al contenedor de nuestro ícono.

Recuerda que los usuarios no siempre dan click o presionan la pantalla de sus celulares con completa precisión, por lo que es muy buena idea crear un contenedor invisible alrededor de nuestros íconos.

💡 Material Design tiene una excelente guía sobre diseño de íconos, te recomiendo estudiarla para descubrir más detalles interesantes.

Yo decidí utilizar una etiqueta span para el contenedor de los íconos. Así que este span recibirá la propiedad onClick, mientras que el SVG (que ya en un momento vamos a crear) recibirá las otras dos propiedades.

También utilizaré la prop type para darle clases personalizadas a cada contenedor de mis íconos.

¡Contenedor listo!

Ahora debemos encargarnos de los SVG. Está perfecto si quieres hacerlos a mano con herramientas como Figma o Illustrator.

En mi caso simplemente usaré alguna herramienta de íconos como Flaticon y descargaré los íconos que vea conveniente en la misma carpeta TodoIcon. De esta forma podremos importarlos como componentes de React gracias a la configuración por defecto que nos ofrece Create React App.

Te recomiendo importar tus íconos SVG desde tus componentes en REACT de esta forma:

ya puesto el import con el nombre de mi icono
import {ReactComponent as NomrbeDeMiIcono } from './icono.svg'
EJ import { FiArrowDownCircle } from'react-icons/fi'

Existe una librería de React donde solo tenemos que instalarla, importar el icono que queremos y ya podremos usarlo en nuestros componentes.
--------------------------------------npm install react-icons----------------------------------
*/
const iconTypes= {
    "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
    ),
    "delete": color =>(
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
};
function TodoIcon({type , color="gray", onClick}){
    //pendiente


    return(
        <span
            className={`Icon-container Icon-contaienr--${type}`}
            onClick={onClick}
        >
           {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };
