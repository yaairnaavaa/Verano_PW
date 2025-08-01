const apiURL = 'http://localhost:3000'

async function crearLibro(){
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const stock = parseInt(document.getElementById('stock').value);
    const imagen = document.getElementById('imagen').value.trim();


if(!titulo || !autor || isNaN(stock) || !imagen){
    alert("Por favor completa todos los campos correctamente");
    return;
}
try{
    const res = await fetch(`${apiURL}/newBooks`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({titulo,autor,stock,imagen})
    });
    const data = await res.json();
    alert(data.message);

    document.getElementById('titulo').value='';
    document.getElementById('autor').value='';
    document.getElementById('stock').value='';
    document.getElementById('imagen').value='';
    
    obtenerLibros();
}catch(error){
    alert("Error al crear libro");
    console.log(error);
}
}

async function obtenerLibros() {
    try{
        const res = await fetch (`${apiURL}/getBooks`)
        const data = await res.json()
        
        const librosDiv = document.getElementById('libros')
        librosDiv.innerHTML = ''

        data.libros.forEach(libro => {
            const div = document.createElement('div')
            div.className = 'libro'
            div.innerHTML = `
            <img src="${libro.imagen}" alt="Portada del libro">
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Stock:</strong> ${libro.stock}</p>
            <div class="card-buttons">
            <button class="update" onclick="actualizarLibro('${libro._id}')">Actualizar</button>
            <button class="delete" onclick="eliminarLibro('${libro._id}')">Eliminar</button>
            </div>
            `;
            librosDiv.appendChild(div);

        })

    } catch{
        alert("Error al obtener los libros")
        console.error(error)
    }
}
obtenerLibros() 

async function eliminarLibro(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar este libro?')) return;
    try {
        const res = await fetch(`${apiURL}/deleteBooks/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (res.ok) {
            alert(data.message || 'Libro eliminado con éxito');
            obtenerLibros();
        } else {
            alert(data.message || 'Error al eliminar libro');
        }
    } catch (error) {
        alert('Error al eliminar libro');
        console.error(error);
    }
}