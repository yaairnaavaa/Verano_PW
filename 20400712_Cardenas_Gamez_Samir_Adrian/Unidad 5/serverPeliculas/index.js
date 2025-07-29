const express = require('express');
const app=express();
const PORT=(3000);
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://root:1234567890@movies.q6lugbd.mongodb.net/?retryWrites=true&w=majority&appName=Movies')
.then(()=>console.log("MongoDb conectado")).catch(error=>console.log(error.message));
app.use(express.json());

const movieSchema = new mongoose.Schema({
    titulo:{type:String},
    director:{type:String},
    calificacion:{type:Number}
})

const Movie = mongoose.model("Movie", movieSchema)

app.get('/',(req,res) =>{
 res.json("Bienvenido a peliculas")
})

app.get('/getMovies',async (req,res)=>{
    try {
        const movies= await Movie.find();
        return res.status(200).json({
            message:"peliculas obtenidas con exito :  ",
            peliculas:movies
        });
    } catch (error) {
        return res.status(500).json({
            message:"Error al consultar peliculas", error:error
        });
  }
})

app.post('/newMovie', async (req,res) =>{
   try{ const {titulo,director,calificacion}= req.body;
    const newMovie= new Movie({titulo,director,calificacion})
     await newMovie.save()
    res.status(200).json(
        {
            message:"pelicula creada con exito"
        }
    )}catch(error){
        res.status(500)(
            {
                message:"Fallo al crear la pelicula" ,error:error
            }
        )
    }

})
app.delete('/deleteMovie/:movieId',async (req,res)=>{
    try {
        const movieId=req.params.movieId;
        await Movie.findByIdAndDelete(movieId)
       
         res.status(200).json({
            message:"Pelicula Eliminado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al Eliminar peliculas", error:error
        });
  }
})

app.put('/updateMovie/:movieId',async (req,res)=>{
    try {
        const movieId=req.params.movieId;
        const  NewData=req.body;
        const updatedBook=await Movie.findByIdAndUpdate(movieId, NewData);
       
         res.status(200).json({
            message:"Libro actualizado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al actualizar libros, maricon", error:error
        });
  }
})

app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost: ${PORT}`)
})