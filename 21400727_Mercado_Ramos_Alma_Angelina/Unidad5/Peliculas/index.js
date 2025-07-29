const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://admin:Angelina2307@movie.d9ljw2g.mongodb.net/movies-db?retryWrites=true&w=majority&appName=Movie')
.then(() => console.log("MongoDB Conectado"))
.catch(error => console.log(error.message));

app.use(express.json());

const MoviesSchema = new mongoose.Schema({
    nombre: {type: String},
    year: {type: Number},
    director: {type: String},
    productor: {type: String},
    genero: {type: String},
    recaudado: {type: Number}
});

const Movie = mongoose.model('Movie', MoviesSchema);

app.get('/getMovies', async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            message: "Peliculas obtenidas con exito",
            peliculas: movies
        })
    } catch (error) {
        return res.status(500).json({
            message: "ERROR al consultar peliculas",
            error: error
        })
    }
});

app.post('/newMovie', async (req, res) => {
    try {
        const {nombre, year, director, productor, genero, recaudado} = req.body;
        const newMovie = new Movie({nombre, year, director, productor, genero, recaudado});
        await newMovie.save();
        return res.status(200).json({
            message: "Pelicula creada con exito"
        });
    } catch (error) {
        return res.status(500).json({
            message: "ERROR al crear pelicula",
            error: error
        })
    }
});

app.put('/updateMovie/:movieId', async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const newData = req.body;
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData);
        return res.status(200).json({
            message: "Pelicula actualizada con exito"
        });
    } catch (error) {
        return res.status(500).json({
            message: "ERROR al actualizar pelicula",
            error: error
        })
    }
});

app.delete('/deleteMovie/:movieId', async (req, res) => {
    try {
        const movieId = req.params.movieId;
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json({
            message: "Pelicula eliminada con exito"
        });
    } catch (error) {
        return res.status(500).json({
            message: "ERROR al eliminar pelicula",
            error: error
        })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);

})