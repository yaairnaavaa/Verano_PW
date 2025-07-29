const apiURL = "http://localhost:3000";

async function crearLibro() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const stock = parseInt(document.getElementById("stock").value.trim());
    const imagen = document.getElementById("imagen").value.trim();

    if (!titulo || !autor || !stock || !imagen) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const libroData = { titulo, autor, stock, imagen };

    try {
        const response = await fetch("http://localhost:3000/newBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(libroData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Libro creado con éxito");
            obtenerLibros(); // Mostrar en la página
        } else {
            alert("Error al crear libro: " + data.message);
        }
    } catch (error) {
        console.error("Error de red:", error);
        alert("Error de conexión al servidor.");
    }

    // Limpiar formulario
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("imagen").value = "";
}

async function obtenerLibros() {
    try{
        const res = await fetch(`${apiURL}/getBooks`);
        const data = await res.json();
        console.log(data);

        const librosDiv = document.getElementById('libros');
        librosDiv.innerHTML = '';

        data.libros.forEach(libro => {
            const div = document.createElement('div');
            div.className = 'libro';
            div.innerHTML = `
                <img src="${libro.imagen}">
                <h3>${libro.titulo}</h3>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Stock:</strong> ${libro.stock}</p>
                <div class="card-buttons">
                <button class="update"
                onclick="actualizarLibro('${libro._id}')">Actualizar</button>

                <button class="delete"
                onclick="eliminarLibro('${libro._id}')">Eliminar</button>
                </div>
                `;
                librosDiv.appendChild(div);
        });
    }catch(error){
        alert("error al obtener libro");
        console.log(error);
    }
}
async function actualizarLibro(id) {
    // Buscar la tarjeta del libro usando el ID (si lo necesitas)
    const tarjeta = [...document.querySelectorAll('.libro')]
        .find(div => div.querySelector('button.update').onclick.toString().includes(id));

    if (!tarjeta) {
        alert("No se encontró el libro en la vista.");
        return;
    }

    // Obtener valores actuales de la tarjeta
    const tituloActual = tarjeta.querySelector('h3').textContent;
    const autorActual = tarjeta.querySelector('p:nth-of-type(1)').textContent.replace("Autor: ", "");
    const stockActual = tarjeta.querySelector('p:nth-of-type(2)').textContent.replace("Stock: ", "");
    const imagenActual = tarjeta.querySelector('img').src;

    // Pedir nuevos valores
    const nuevoTitulo = prompt("Nuevo título:", tituloActual);
    const nuevoAutor  = prompt("Nuevo autor:", autorActual);
    const nuevoStock  = prompt("Nuevo stock:", stockActual);
    const nuevaImagen = prompt("Nueva URL de imagen:", imagenActual);

    if (!nuevoTitulo || !nuevoAutor || !nuevoStock || !nuevaImagen) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        const res = await fetch(`${apiURL}/updateBook/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: nuevoTitulo,
                autor: nuevoAutor,
                stock: parseInt(nuevoStock),
                imagen: nuevaImagen
            })
        });

        const data = await res.json();

        if (res.ok) {
            alert("Libro actualizado correctamente");
            obtenerLibros(); // Recargar la lista de libros
        } else {
            alert("Error al actualizar libro: " + data.message);
        }
    } catch (error) {
        console.error("Error de red:", error);
        alert("Error al conectar con el servidor.");
    }
}

async function eliminarLibro(id){
   try {
        const res = await fetch(`${apiURL}/deleteBook/${id}`);
        const data = await res.json();

        if (res.ok) {
            alert("Libro eliminado correctamente");
            obtenerLibros(); // Recargar la lista
        } else {
            alert("Error al eliminar libro: " + data.message);
        }
    } catch (error) {
        console.error("Error al eliminar:", error);
        alert("Error al conectar con el servidor.");
    }
} 
obtenerLibros();