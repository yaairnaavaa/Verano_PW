const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// CONEXIÓN A LA BASE DE DATOS CORRECTA: Peliculas-db
mongoose.connect('mongodb+srv://brfecurielgo:CUGB031206HNTRNRA6@books.zyjp0vh.mongodb.net/Peliculas-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB Conectado"))
.catch(error => console.log(error.message));

// Middleware para recibir datos en JSON
app.use(express.json());

// ESQUEMA Y MODELO
const PeliSchema = new mongoose.Schema({
    titulo: { type: String },
    director: { type: String },
    duracion: { type: Number }
});

const Pelicula = mongoose.model('Pelicula', PeliSchema);

// RUTAS
app.get('/', (req, res) => {
    res.json({ message: "Bienvenido" });
});

app.get('/getPelicula', async (req, res) => {
    try {
        const pelis = await Pelicula.find();
        return res.status(200).json({
            message: "Películas obtenidas con éxito",
            pelic: pelis
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar películas",
            error: error.message
        });
    }
});


app.post('/newPelicula', async (req, res) => {
    try {
        const { titulo, director, duracion } = req.body;
        const newPelicula = new Pelicula({ titulo, director, duracion });
        await newPelicula.save();

        return res.status(200).json({ message: "Película creada con éxito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear película",
            error: error.message
        });
    }
});

app.put('/updatePelicula/:PeliculaId', async (req, res) => {
    try {
        const PeliculaId = req.params.PeliculaId;
        const newData = req.body;

        await Pelicula.findByIdAndUpdate(PeliculaId, newData);

        return res.status(200).json({ message: "Película actualizada con éxito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar película",
            error: error.message
        });
    }
});

app.get('/deletePelicula/:PeliculaId', async (req, res) => {
    try {
        const PeliculaId = req.params.PeliculaId;
        await Pelicula.findByIdAndDelete(PeliculaId);

        return res.status(200).json({ message: "Película eliminada con éxito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar película",
            error: error.message
        });
    }
});

// INICIAR SERVIDOR
app.listen(PORT, () => {
 console.log(`Servidor escuchando en http://localhost:${PORT}`);
});