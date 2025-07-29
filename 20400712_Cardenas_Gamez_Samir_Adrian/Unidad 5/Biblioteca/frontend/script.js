const apiUrl = 'http://localhost:3000/';

async function crearLibro(){
    const titulo = document.getElementById('titulo').value.trim();
    console.log(titulo)
    const autor = document.getElementById('autor').value.trim();
    console.log(autor)
    const stock = parseInt(document.getElementById('stock').value);
    console.log(stock);
    const imagen = document.getElementById('imagen').value;
    console.log(imagen)
    if(!titulo || !autor || isNaN(stock) || !imagen){
        alert('por favor completa todos los campos correctamente');return;
    }
    try {
        const res = await fetch(`${apiUrl}newBook`,{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({titulo, autor, stock, imagen})
        })

        const data = await res.json();
        alert(data.message);

        document.getElementById('titulo').values = '';
        document.getElementById('autor').values = '';
        document.getElementById('stock').values = '';
        document.getElementById('imagen').values = '';


    } catch (error) {
        alert('erooor al crear un libro');
        console.error(error);
    }
}

async function obtenerLibros(){
    try {
        const res = await fetch(`${apiUrl}getBooks`)
        const data = await res.json();

        const librosDiv = document.getElementById('libros');
        librosDiv.innerHTML='';

        data.libros.forEach(libro => {
            const div = document.createElement('div');
            div.className = 'libro';
            div.innerHTML=`
                <img src="${libro.imagen}">
                <h3>${libro.titulo}</h3>
                <p><strong>Autor: </strong>${libro.autor}</p>
                <p><strong>Stock: </strong>${libro.stock}</p>
                <div class="card-buttons">
                    <button class="update" onclick="actualizarLibro ('${libro._id}')">Actualizar</button>
                    <button class="delete" onclick="eliminarLibro ('${libro._id}')">eliminar</button>
                </div>
            `;
            librosDiv.appendChild(div);
        });
 


    } catch (error) {
        alert('erooor al obtener un libro');
        console.error(error);
    }
    
}
obtenerLibros();