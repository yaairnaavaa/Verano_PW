const apiURL = 'http://localhost:3000';

async function crearLibro() {
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const stock = parseInt(document.getElementById('stock').value.trim()); 
    const imagen = document.getElementById('imagen').value.trim();

    if(!titulo || !autor || isNaN(stock) || !imagen) {
        alert("Por favor completa todos los campos correctamente.");
        return;
    }

    try {
        const res = await fetch(`${apiURL}/newBook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({titulo, autor, stock, imagen})
        });

        const data = await res.json();
        alert(data.message);

        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('stock').value = '';
        document.getElementById('imagen').value = '';

        obtenerLibros();
    } catch(error) {
        alert("Error al crear el Libro.");
        console.log(error)
    }
}

async function obtenerLibros() {
    try {
        const res = await fetch(`${apiURL}/getBooks`);
        const data = await res.json();

        const librosDiv = document.getElementById('libros');
        librosDiv.innerHTML = '';

        data.libros.forEach(libro => {
            const div = document.createElement('div');
            
            div.className = 'libro';
            div.innerHTML = `
                <img src="${libro.imagen}">
                <h3>${libro.titulo}</h3>
                <p><strong>Autor: </strong> ${libro.autor}</p>
                <p><strong>Stock: </strong> ${libro.stock}</p>
                <div class="card-buttons">
                    <button class="update" onclick="actualizarLibro('${libro._id}')">Actualizar</button>
                    <button class="delete" onclick="eliminarLibro('${libro._id}')">Eliminar</button>
                </div>
            `;
            librosDiv.appendChild(div);
        });
    } catch(error) {
        alert("Error al obtener los Libros.");
        console.log(error)
    }
}

async function eliminarLibro(id) {
    try {
        const res = await fetch(`${apiURL}/deleteBook/${id}`, {
            method: 'DELETE'
        });

        const data = await res.json();
        alert(data.message);

        obtenerLibros();
    } catch(error) {
        alert("Error al eliminar Libro.");
        console.log(error)
    }
}

async function actualizarLibro(id) {
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const stock = parseInt(document.getElementById('stock').value.trim()); 
    const imagen = document.getElementById('imagen').value.trim();
    
    try {
        const res = await fetch(`${apiURL}/updateBook/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({titulo, autor, stock, imagen})
        });

        const data = await res.json();
        alert(data.message);

        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('stock').value = '';
        document.getElementById('imagen').value = '';

        obtenerLibros();
    } catch(error) {
        alert("Error al actualizar Libro.");
        console.log(error)
    }
}

obtenerLibros();
