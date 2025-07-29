const express = require('express');
const mongoose = require('mongoose')
const app = express();a
const PORT = 3000;

mongoose.connect('mongodb+srv://eddilson:6Gg5NU1WThRlHlbf@root.umf2imb.mongodb.net/Peliculas-db?retryWrites=true&w=majority&appName=Peliculas')
.then(() => console.log("MongoDB CONECTADO")).catch(error => console.log(error.message));

app.use(express.json());

const MovieSchema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    año: {type: String},
    protagonista: {type: String}
});

const Movie = mongoose.model('Movie',MovieSchema);


app.get('/',(req,res) => {
    res.json({message:"Binevenido"})
})


app.get('/getMovie',async (req,res) => {
    try{
        const Movies = await Movie.find();
        return res.status(200).json({
            message: "Pelicula obtenidas con exito",
            Movie: Movie
        })
    }catch(error){
        return res.status(500).json({
            message: "Error al consultar pelicula",
            error: error
        })
    }
});


app.post('/newMovie',async (req,res) => {
    try{
        const{titulo,autor,año,protagonista} = req.body;
        const newMovie = new Book({titulo,autor,año,protagonista});
        await newMovie.save();

        return res.status(200).json({message: "Pelicula creada con exito"});
        
    }catch (error){
        return res.status(500).json({
            message: "Error al insertar pelicula",
            error: error
        })
    }
});

app.put('/updateMovie/:MovieId',async (req,res) => {
    try{
        const MovieId = req.params.MovieId;
        const newData = req.body;

        const updateMovie = await Book.findByIdAndUpdate(MovieId,newData);

        return res.status(200).json({message: "Pelicula actualizada con exito"})
    }catch (error){
        return res.status(500).json({
            message: "Error al Actualizar pelicula",
            error: error
        })
    }
});

app.get('/deleteMovie/:MovieId',async (req,res) => {
    try{
        const MovieId = req.params.MovieId;
        await Movie.findByIdAndDelete(MovieId);

        return res.status(200).json({message: "Pelicula eliminado con exito"})
    }catch (error){
        return res.status(500).json({
            message: "Error al Actualizar Pelicula",
            error: error
        })
    }
});


app.listen(PORT, () => {
    console.log("Servidor escuchando en http://localhost:"+PORT);
})