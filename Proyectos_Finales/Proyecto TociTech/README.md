# TociTech - Tienda de Componentes de PC

LINK: https://github.com/PaulinaMartinezS/TociTech

**TociTech** es una página web de comercio electrónico moderna, completamente funcional y responsiva, diseñada para una tienda especializada en componentes de computadora y periféricos. El sitio ofrece una experiencia de usuario dinámica e interactiva, desde la exploración de productos hasta la finalización de la compra.

## Características Principales

### 🛍️ **Experiencia de Compra Completa**
* **Catálogo de Productos Detallado:** Muestra productos con imágenes, descripciones, precios y un botón para "Añadir al Carrito".
* **Carrito de Compras Persistente:** Utiliza `localStorage` para guardar los productos del carrito, de modo que los usuarios no pierdan su selección al recargar la página.
* **Gestión del Carrito:** Los usuarios pueden ver los productos añadidos, ajustar la cantidad, eliminar artículos y ver el subtotal actualizado en tiempo real.
* **Opciones de Envío:** Permite seleccionar entre diferentes métodos de entrega (Estándar, Express o Recogida en tienda), cada uno con un costo asociado que actualiza el total final.
* **Proceso de Pago Simulado:** Un botón de "Proceder al Pago" vacía el carrito y muestra un mensaje de confirmación, simulando una compra exitosa.

### 🎨 **Diseño e Interfaz de Usuario**
* **Diseño Moderno y Oscuro:** Utiliza una paleta de colores oscuros (`--color-dark`, `--color-light-dark`) con acentos vibrantes (`--color-primary`, `--color-secondary`) para una estética atractiva y enfocada en el gaming/tecnología.
* **Totalmente Responsivo:** El diseño se adapta fluidamente a diferentes tamaños de pantalla, desde dispositivos móviles hasta computadoras de escritorio, utilizando `media queries`.
* **Navegación Intuitiva:** Incluye una barra de navegación fija (`sticky`), un menú de hamburguesa para móviles y enlaces que se desplazan suavemente por las secciones de la página.
* **Carrusel de Imágenes Dinámico:** La sección principal (`hero`) cuenta con un carrusel automático y manual con imágenes de alta calidad, títulos llamativos y botones de llamada a la acción.
* **Microinteracciones y Efectos Visuales:**
    * Efectos `hover` en botones, enlaces y tarjetas de productos.
    * Mensajes de notificación no intrusivos para acciones como "Producto añadido al carrito" o "Pago realizado con éxito".
    * Animaciones de aparición (`fade-in`/`slide-in`) al hacer scroll, como en la sección de la línea de tiempo de "Sobre Nosotros".

### ⚙️ **Funcionalidad Dinámica (JavaScript)**
* **Filtro de Productos:** Los usuarios pueden filtrar el catálogo de productos por categorías. Los filtros se pueden activar desde la sección de "Categorías Destacadas" o mediante botones de filtro dedicados.
* **Validación de Formulario de Contacto:** El formulario de contacto valida que los campos (nombre, email, mensaje) no estén vacíos y que el correo electrónico tenga un formato válido, mostrando mensajes de error o éxito.
* **Actualización de Contenido sin Recargar:** El carrito de compras y el contador de artículos en el ícono del carrito se actualizan dinámicamente sin necesidad de refrescar la página.
