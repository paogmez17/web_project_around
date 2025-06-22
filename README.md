GitHub Pages
https://paogmez17.github.io/web_project_around/

##Titulo del proyecto: Around the US

##Descripcion:

Este proyecto permite explorar diferentes imágenes de lugares en Estados Unidos y agregar sitios personalizados. Ofrece un perfil interactivo y personalizable, donde es posible modificar el nombre, la profesión, las fotos y el contenido. Además, permite ampliar las imágenes y dar 'like' a las tarjetas favoritas.

##Uso
Este proyecto es una aplicación web interactiva para agregar lugares con nombre e imagen. Permite editar el perfil, agregar nuevas tarjetas con información visual y ver imágenes en tamaño completo.
A continuación algunos ejemplos de uso:

Funcionalidades principales:
Editar perfil:
Haz clic en el botón ✏️ para abrir el formulario. Puedes modificar tu nombre y ocupación. El botón “Guardar” solo se activa si ambos campos están completos y válidos.

Agregar nueva tarjeta:
Al hacer clic en el botón ➕, se abre un formulario para ingresar el nombre del lugar y la URL de la imagen.
El botón “Crear” se activa solo si ambos campos son válidos (el título no está vacío y la URL es válida).

Ver imagen ampliada:
Al hacer clic sobre una imagen en una tarjeta, se muestra un popup con la imagen en tamaño grande y su nombre.

Eliminar tarjeta:
Cada tarjeta tiene un ícono 🗑️ para eliminarla.

Dar “me gusta”:
Puedes hacer clic en el ícono ❤️ para marcar una tarjeta como favorita.

##Uso de CSS
Se implementó la propiedad position en ciertos elementos para lograr una ubicación adecuada dentro del diseño.

Se utilizó grid para organizar los elementos en una estructura de cuadrícula, facilitando una disposición ordenada y responsiva.

Se incorporaron media queries para adaptar el diseño de forma dinámica a diferentes tamaños de pantalla, incluyendo dispositivos móviles.

Uso de JavaScript
Se utilizaron variables para almacenar y manipular información de manera flexible.

Se crearon funciones para agregar métodos como addEventListener, lo cual permite asignar eventos a elementos específicos.

Se implementó el manejo de eventos para interactuar con el usuario y ejecutar acciones dinámicas según sus interacciones.

##Uso de JavaScript
document.querySelector: para seleccionar elementos del DOM y poder manipularlos.

addEventListener: para escuchar eventos como clics o envíos de formularios.

Funciones personalizadas: para abrir y cerrar popups, crear tarjetas, guardar datos del perfil, etc.

classList.add y classList.remove: para mostrar u ocultar los popups.

textContent, value, src, alt: para modificar el contenido o atributos de elementos HTML.

preventDefault(): para evitar que el formulario recargue la página al enviarlo.

forEach: para recorrer el array de tarjetas iniciales y mostrarlas al cargar la página.

cloneNode(true): para clonar una plantilla de tarjeta desde el HTML.

appendChild / prepend / remove(): para agregar o quitar elementos del DOM dinámicamente.

classList.toggle: para activar o desactivar el botón de "like".

##Autores

Paola Gomez
