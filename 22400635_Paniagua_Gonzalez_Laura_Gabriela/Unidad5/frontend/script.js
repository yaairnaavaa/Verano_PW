
const apiURL='http://localhost:3000'


// Como obtener todos los valores de los inputs
// document accedes al html
// getElementBtId identifica ids, etiquetas 
// .value es el valor que tiene 
// trim elimina espacios dentro de la cadena


async function crearLibro(){
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const stock = parseInt(document.getElementById('stock').value);
    const imagen = document.getElementById('imagen').value.trim();

    console.log(titulo)    
    console.log(imagen)
    console.log(autor)    
    console.log(stock)

    if (!titulo || !autor || isNaN(stock) || !imagen){
        alert("Por favor completa todos los cmapos correctamente.")
        return
    }
   

    try{

        const res = await fetch(`${(apiURL)}/newBooks`,{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({titulo, imagen, autor, stock})
        });

         const data = await res.json();
        alert(data.message);

        document.getElementById('titulo').value = "";
        document.getElementById('imagen').value = "";
        document.getElementById('autor').value = "";
        document.getElementById('stock').value = "";

        obtenerLibros()

    }catch(error){
        alert("Error al crear Libro.")
        console.error(error)
    }


}


async function obtenerLibros(){
    try{
        const res = await fetch(`${(apiURL)}/getBooks`);
        const data = await res.json(); // lleva la respuesta del api pero a formato json
            console.log(data)
        const LibrosDiv = document.getElementById('libros');
        LibrosDiv.innerHTML='';

        //por cada elemento del arreglo vamos a hacer
        data.libros.forEach(Libro => {
            // en cada una de las constante va crear un div  
            // de elemnto html con className llamada Libro
            const div = document.createElement('div');
            div.className= 'libro';

            // Dise;o de la estructura de cada lirbro
            div.innerHTML = `
                <img src="${Libro.imagen}">
                <h3>${Libro.titulo}</h3>
                <p><strong>Autor:</strong> ${Libro.autor}</p>
                <p><strong>Stock:</strong> ${Libro.stock}</p>
                <div class="card-buttons">
                    <button class="update" onclick="actualizarLibro('${Libro._id}')">Actualizar</button>
                    <button class="delete" onclick="eliminarLibro('${Libro._id}')">Eliminar</button>
                </div>
            `;
            LibrosDiv.appendChild(div);
        })
    }catch(error){
        alert("Error al obtener Libro.")
        console.error(error)
    }
}

async function actualizarLibro(){
    
}

async function eliminarLibro(id){
    try{
        const res = await fetch(`${(apiURL)}/deleteBook/${id}`,{
            method:'DELETE',
            headers: {'Content-Type':'application/json'}
        });
        const data = await res.json(); // Proceso la respuesta
            console.log(data)

        alert(data.message);

        obtenerLibros()

    }catch(error){
        alert("Error al eliminar Libro.")
        console.error(error)
    }


}



obtenerLibros();
