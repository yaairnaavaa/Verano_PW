//Variables Iniciales
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4444;

//Conexion
mongoose.connect('mongodb+srv://ruilo:1499@root.pyt06wv.mongodb.net/Peliculas-DB?retryWrites=true&w=majority&appName=pelicula')
.then(() => console.log("MongoDB Conectado"))
.catch(error => console.log(error.message));

app.use(express.json()); //permite al servidor leer archivos .json

//Esquemas
const MovieSchema = new mongoose.Schema({
    titulo: {type: String},
    director: {type: String},
    genero: {type: String},
    año: {type: Number}
});

//Asignación de Esquema a variable
const Movie = new mongoose.model('Movie', MovieSchema);

//----------------OPERACIONES

//GET
app.get('/listMovies', async(req,res) =>{
    try{
        const movies = await Movie.find();
        return res.status(200).json({
            message: "Películas obtenidas con éxito",
            peliculas: movies
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al consultar películas",
            error: error
        });
    }
});

//POST
app.post('/addMovie/', async(req,res) =>{ 
    try{
        const {titulo, director, genero, fecha} = req.query; // cambie a body por query segun para facilitar mis inserciones
        const newMovie = new Movie({titulo, director, genero, fecha});
        await newMovie.save();

        return res.status(200).json({message: "Pelicula agregada con éxito"})
    }catch(error){
        return res.status(500).json({
            message: "Error al agregar la pelicula",
            error: error
        });
    }
});

//PUT
app.put('/editMovie/:Id', async(req,res) =>{ 
    try{
        const Id = req.params.Id;
        const newData = req.query;

        const editMovie = await Movie.findByIdAndUpdate(Id, newData);

        return res.status(200).json({message: "Película editada con éxito"})
    }catch(error){
        return res.status(500).json({
            message: "Error al editar la película",
            error: error
        });
    }
});

//DELETE
app.delete('/deleteMovie/:Id', async(req,res) =>{ 
    try{
        const Id = req.params.Id;
        await Movie.findByIdAndDelete(Id);
        return res.status(200).json({message: "Película eliminada con éxito"})
    }catch(error){
        return res.status(500).json({
            message: "Error al eliminar película",
            error: error
        });
    }
});

//INICIO
app.get('/', (req,res) =>{
    res.json({message: "Puro Cuevana Aquí loco"});
});

//SALIDA
app.listen(port, () => {
    console.log("servidor escuchando en: http://localhost:" + port);
});