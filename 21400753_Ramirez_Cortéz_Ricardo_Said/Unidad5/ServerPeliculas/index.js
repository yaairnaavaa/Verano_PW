const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

let peliculas = [
    { id: 1, titulo: "titulo1", director: "director1", año: 2000},
];

app.get('/', (req,res) => {
    res.json({message: "Bienvenido"});
});

app.get('/getPeliculas', async (req, res) => {
    try {
        return res.status(200).json({
            message: "Películas obtenidas con éxito",
            peliculas: peliculas 
        });
    } catch(error) {
        return res.status(500).json({
            message: "Error al consultar películas",
            error: error
        });
    }
});

app.post('/newPeliculas', async (req, res) => {
    try {
        const {titulo, director, año} = req.body;
        
        const agregarPelicula = {
            id: peliculas.length +1,
            titulo,
            director,
            año
        };

        peliculas.push(agregarPelicula);
        
        return res.status(200).json({ 
            message: "Película creada con éxito",
            peliculas: agregarPelicula 
        });

    } catch(error) {
        return res.status(500).json({
            message: "Error al crear película",
            error: error
        });
    }
});

app.put('/updatePeliculas/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { titulo, director, año} = req.body;
        
        const index = peliculas.findIndex(p => p.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Película no encontrada" });
        }

        peliculas[index] = { id, titulo, director, año};
        
        return res.status(200).json({ 
            message: "Película actualizada con éxito",
            pelicula: peliculas[index] 
        });

    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar película",
            error: error
        });
    }
});

app.delete('/deletePeliculas/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        peliculas = peliculas.filter(p => p.id !== id); 
        
        return res.status(200).json({ 
            message: "Película eliminada con éxito" 
        });

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar película",
            error: error
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})