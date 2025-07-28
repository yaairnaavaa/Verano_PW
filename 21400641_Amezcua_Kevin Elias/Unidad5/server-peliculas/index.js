const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:Zf5xqWhfLHzwRXyt@movies.2ozazsq.mongodb.net/?retryWrites=true&w=majority&appName=Movies')
.then(() => console.log("MongoDB Conectado"))
.catch(error => console.log(error.message));

app.use(express.json());

const moviesSchema = new mongoose.Schema({
    titulo: {type: String},
    genero: {type: String},
    sinopsis: {type: String},
    duracion: {type: Number},
    anio: {type: Number},
    pais: {type: String}
});

const Movie = mongoose.model('movie', moviesSchema);

app.get('/', (req, res) => {
    res.json({
        message: "!Bienvenido¡"
    });
});

app.get('/getMovies', async (req, res) => {
    try {
        const movies = await Movie.find();

        return res.status(200).json({
            message: "Películas obtenidas con éxito",
            peliculas: movies
        });
    } catch(error) {
        return res.status(500).json({
            message: "Error al consultar Películas",
            error: error
        });
    }
});

app.post('/newMovie', async (req, res) => {
    try {
        const {titulo, genero, sinopsis, duracion, anio, pais} = req.body;
        const newMovie = new Movie({titulo, genero, sinopsis, duracion, anio, pais});

        await newMovie.save();
        
        return res.status(200).json({
            message: "Película creada con éxito"
        });
    } catch(error) {
        return res.status(500).json({
            message: "Error al crear Película",
            error: error
        });
    }
});

app.put('/updateMovie/:movieId', async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const newData = req.body;
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData);

        return res.status(200).json({
            message: "Películas actualizada con éxito",
            pelicula: updateMovie
        })
    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar Película",
            error: error
        });
    }
});

app.delete('/deleteMovie/:movieId', async (req, res) => {
    try {
        const movieId = req.params.movieId;
        
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json({
            message: "Película eliminada con éxito"
        })
    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar Película",
            error: error
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
