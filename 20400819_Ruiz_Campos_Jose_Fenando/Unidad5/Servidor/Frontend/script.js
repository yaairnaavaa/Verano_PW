const apiURL = "http://localhost:3000";

// Crear libro
async function crearLibro() {
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const stock = document.getElementById("stock").value.trim();
  const imagen = document.getElementById("imagen").value.trim();
  if (!titulo || !autor || isNaN(stock) || !imagen) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }
  try {
    const res = await fetch(`${apiURL}/newBook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, autor, stock, imagen }),
    });
    const data = await res.json();
    alert(data.message);
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("imagen").value = "";
    obtenerLibros();
  } catch (error) {
    alert("Error al crear el libro: " + error.message);
  }
}

// Obtener libros
async function obtenerLibros() {
  try {
    const res = await fetch(`${apiURL}/getbooks`);
    const data = await res.json();
    const librosContainer = document.getElementById("libros");
    librosContainer.innerHTML = "";
    (Array.isArray(data.libros) ? data.libros : []).forEach((libro) => {
      const div = document.createElement("div");
      div.className = "libro";
      div.innerHTML = `
        <img src="${libro.imagen}">
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Stock:</strong> ${libro.stock}</p>
        <div class="card-buttons">
          <button class="update" onclick="actualizarLibro('${libro._id}')">Actualizar</button>
          <button class="delete" onclick="eliminarLibro('${libro._id}')">Eliminar</button>
        </div>
      `;
      librosContainer.appendChild(div);
    });
  } catch (error) {
    alert("Ocurrió un error al intentar obtener los libros. Detalles: " + error.message);
  }
}

// Eliminar libro
async function eliminarLibro(id) {
  try {
    const res = await fetch(`${apiURL}/deleteBook/${id}`, { method: "DELETE" });
    const data = await res.json();
    alert(data.message);
    obtenerLibros();
  } catch (error) {
    alert("Error al eliminar el libro: " + error.message);
  }
}

// Endpoint actualizar libro
async function actualizarLibro(id) {
    try {
        console.log("Actualizar libro con ID:", id); // <-- Agrega este log
        const res = await fetch(`${apiURL}/getbooks`);
        const data = await res.json();
        const libro = data.libros.find(libro => libro._id === id);
        if (!libro) {
            alert("Libro no encontrado.");
            return;
        }
        const crearBtn = document.querySelector(".btn");
        crearBtn.textContent = "Actualizar Libro";
        crearBtn.onclick = () => actualizarLibroConfirmado(id);
        document.getElementById("titulo").value = libro.titulo;
        document.getElementById("autor").value = libro.autor;
        document.getElementById("stock").value = libro.stock;
        document.getElementById("imagen").value = libro.imagen;
    } catch (error) {
        alert("Error al intentar obtener el libro para actualizar: " + error.message);
    }
}

// Confirmar actualización del libro
async function actualizarLibroConfirmado(id) {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const stock = document.getElementById("stock").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    if (!titulo || !autor || isNaN(stock) || !imagen) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    try {
        const res = await fetch(`${apiURL}/updateBook/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, autor, stock, imagen }),
        });
        const data = await res.json();
        alert(data.message);
        // Restaurar el botón a su estado original
        const crearBtn = document.querySelector(".btn");
        crearBtn.textContent = "Crear Libro";
        crearBtn.onclick = crearLibro;
        // Limpiar campos
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("stock").value = "";
        document.getElementById("imagen").value = "";
        obtenerLibros();
    } catch (error) {
        alert("Error al actualizar el libro: " + error.message);
    }
}



// Llama obtenerLibros al cargar la página
window.onload = obtenerLibros;