const apiURL = "http://localhost:3000";

function crearLibro() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const stock = document.getElementById("stock").value.trim();
    const imagen = document.getElementById("imagen").value.trim();

    if (!titulo || !autor || !stock || !imagen) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.className = "card";

    tarjeta.innerHTML = `
        <img src="${imagen}" alt="${titulo}">
        <h3>${titulo}</h3>
        <p><strong>Autor:</strong> <span class="autor">${autor}</span></p>
        <p class="stock"><strong>Stock:</strong> <span class="stock-value">${stock}</span></p>
        <div>
            <button onclick="actualizarLibro(this)">Actualizar</button>
            <button onclick="eliminarLibro(this)">Eliminar</button>
        </div>
    `;

    document.getElementById("libros").appendChild(tarjeta);

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

obtenerLibros();