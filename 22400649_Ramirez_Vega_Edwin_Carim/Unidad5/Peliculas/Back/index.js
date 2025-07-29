const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB conectado"))
.catch(error => console.log(error.message));

app.use(express.json());
app.use(cors());

const MovieSchema = new mongoose.Schema({
    titulo: {type: String},
    imagen: {type: String},
    director: {type: String},
    fecha: {type: Number},
    rating: {type: Number} 
});

const movie = mongoose.model('movie', MovieSchema);

app.get('/', (req, res) => {
    res.json({message: "Bienvenido a peliculas"});
})

app.get('/getMovies', async (req, res) => {
    try{
        const movies = await movie.find();
        return res.status(200).json({
            message: "Peliculas obtenidas con éxito",
            movies: movies
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al consultar peliculas",
            error: error
        });
    }
})

app.post('/newMovie', async (req, res) => {
    try{
        const {titulo, imagen, director, fecha, rating} = req.body;
        const newMovie = new movie({titulo, imagen, director, fecha, rating});
        await newMovie.save();

        return res.status(200).json({
            message: "Pelicula creada con éxito"
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al crear la pelicula",
            error: error
        });
    }
})

app.post('/updateMovie/:movieID', async (req, res) => {
    try{
        const movieID = req.params.movieID;
        const newData = req.body;

        const updatedMovie = await movie.findByIdAndUpdate(movieID, newData);

        return res.status(200).json({
            message: "Pelicula actualizada con éxito"
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al actualizar la pelicula",
            error: error
        });
    }
})

app.delete('/deleteMovie/:movieID', async (req, res) => {
    try{
        const movieID = req.params.movieID;
        await movie.findByIdAndDelete(movieID);

        return res.status(200).json({
            message: "Pelicula eliminada con éxito"
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al eliminar la pelicula",
            error: error
        });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en     ${PORT}`);
})  