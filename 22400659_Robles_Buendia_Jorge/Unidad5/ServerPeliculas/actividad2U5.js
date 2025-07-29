const expres = require('express');

const mongoose=require('mongoose');

const app = expres();

const port= 3000;

mongoose.connect('mongodb+srv://root:DL878dbGMek691bT@books.kc3z9ao.mongodb.net/books-db?retryWrites=true&w=majority&appName=books')
.then(()=> console.log("mongo db conectando")).catch(error => console.log(error.message));


app.use(expres.json());


const peliSchema = new mongoose.Schema({
    titulo:{type: String},
    director:{type: String},
    genero:{type: String},
    anio:{type: Number}
})

const Pelicula= mongoose.model("Pelicula", peliSchema);

// Crear una nueva pelicula
app.post('/newPeliculas', async (req, res) => {
  try {
    const { titulo, director, genero, anio } = req.body;
    const nuevaPelicula = new Pelicula({ titulo, director, genero, anio });
    await nuevaPelicula.save();
    return res.status(200).json({ message: "Pelicula creada con éxito" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear pelicula",
      error: error
    });
  }
});

// Consultar todas las películas
app.get('/getPeliculas', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    return res.status(200).json({
      message: "Películas obtenidas con éxito",
      peliculas: peliculas
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al consultar películas",
      error: error
    });
  }
});

// Actualizar una película
app.put('/updatePeliculas/:peliculaId', async (req, res) => {
  try {
    const peliculaId = req.params.peliculaId;
    const nuevosDatos = req.body;

    await Pelicula.findByIdAndUpdate(peliculaId, nuevosDatos);
    return res.status(200).json({ message: "Película actualizada con éxito" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar película",
      error: error
    });
  }
});

// Eliminar una película
app.delete('/deletePeliculas/:peliculaId', async (req, res) => {
  try {
    const peliculaId = req.params.peliculaId;
    await Pelicula.findByIdAndDelete(peliculaId);
    return res.status(200).json({ message: "Pelicula borrada con éxito" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al borrar pelicula",
      error: error
    });
  }
});

app.get('/',(req,res)=>{
    res.json({message:"bienvenido"})
})

app.listen(port,() =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
});