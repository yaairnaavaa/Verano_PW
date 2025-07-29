const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3001; 

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/movies-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB Conectado - Servidor de Películas"))
.catch(error => console.log(error.message));

app.use(express.json());
app.use(cors());
const MoviesSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    director: { type: String, required: true },
    año: { type: Number, required: true },
    genero: { type: String, required: true },
    duracion: { type: Number }, // en minutos
    calificacion: { type: Number, min: 1, max: 10 },
    sinopsis: { type: String },
    poster: { type: String }
});

const Movie = mongoose.model('Movie', MoviesSchema);

app.get('/', (req, res) => { 
    res.json({ message: "Bienvenido al servidor de películas 🎬" });
});

app.get('/getMovies', async (req, res) => { 
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            message: "Películas obtenidas con éxito",
            peliculas: movies
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar películas",
            error: error.message
        });
    }
});

app.get('/getMovie/:movieId', async (req, res) => { 
    try {
        const movieId = req.params.movieId;
        const movie = await Movie.findById(movieId);
        
        if (!movie) {
            return res.status(404).json({
                message: "Película no encontrada"
            });
        }

        return res.status(200).json({
            message: "Película obtenida con éxito",
            pelicula: movie
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar película",
            error: error.message
        });
    }
});

app.post('/newMovie', async (req, res) => { 
    try {
        const { titulo, director, año, genero, duracion, calificacion, sinopsis, poster } = req.body;
        
        if (!titulo || !director || !año || !genero) {
            return res.status(400).json({
                message: "Los campos título, director, año y género son obligatorios"
            });
        }

        const newMovie = new Movie({
            titulo,
            director,
            año,
            genero,
            duracion,
            calificacion,
            sinopsis,
            poster
        });

        await newMovie.save();
        return res.status(201).json({
            message: "Película creada con éxito",
            pelicula: newMovie
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al crear película",
            error: error.message
        });
    }
});

app.put('/updateMovie/:movieId', async (req, res) => { 
    try {
        const movieId = req.params.movieId;
        const newData = req.body;
        
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId, 
            newData, 
            { new: true, runValidators: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({
                message: "Película no encontrada"
            });
        }

        return res.status(200).json({
            message: "Película actualizada con éxito",
            pelicula: updatedMovie
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar película",
            error: error.message
        });
    }
});

app.delete('/deleteMovie/:movieId', async (req, res) => { 
    try {
        const movieId = req.params.movieId;
        const deletedMovie = await Movie.findByIdAndDelete(movieId);

        if (!deletedMovie) {
            return res.status(404).json({
                message: "Película no encontrada"
            });
        }

        return res.status(200).json({
            message: "Película eliminada con éxito",
            pelicula: deletedMovie
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar película",
            error: error.message
        });
    }
});

app.get('/moviesByGenre/:genero', async (req, res) => { 
    try {
        const genero = req.params.genero;
        const movies = await Movie.find({ 
            genero: { $regex: genero, $options: 'i' } 
        });

        return res.status(200).json({
            message: `Películas del género "${genero}" obtenidas con éxito`,
            peliculas: movies
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al buscar películas por género",
            error: error.message
        });
    }
});

app.get('/moviesByDirector/:director', async (req, res) => { 
    try {
        const director = req.params.director;
        const movies = await Movie.find({ 
            director: { $regex: director, $options: 'i' } 
        });

        return res.status(200).json({
            message: `Películas del director "${director}" obtenidas con éxito`,
            peliculas: movies
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al buscar películas por director",
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`🎬 Servidor de películas escuchando en http://localhost:${port}`);
});
