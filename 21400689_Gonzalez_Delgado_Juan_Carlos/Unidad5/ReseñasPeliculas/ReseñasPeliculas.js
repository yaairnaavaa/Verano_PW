const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

//Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://JuanGlez:123456789.@cluster0.2mkhbik.mongodb.net/ReseñasPeliculas-db?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conexión a MongoDB exitosa desde ReseñasPeliculas-db'))
  .catch(error => console.log(error.message));

app.use(express.json());

const ResenaSchema = new mongoose.Schema({
  Pelicula: {type: String},
  Resena: {type: String}
});

const resena = mongoose.model('resena', ResenaSchema);

app.listen(PORT, () => {
  console.log(`Server escuchando en http://localhost:${PORT}`);
});


app.get('/getResena', async (req, res) => {
  try {
    const resenas = await resena.find();
    return res.status(200).json({
      message: "Reseñas obtenidas correctamente",
      resena: resenas
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al obtener las Reseñas",
      error: error
    });
  }
});

app.post('/newResena', async (req, res) => {
  try {
    const { Pelicula, Resena} = req.body;
    const newResena = new resena({ Pelicula, Resena});
    await newResena.save();
    return res.status(200).json({
      message: "Reseña creada correctamente"
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al crear las Reseñas",
      error: error
    });
  }
});

app.put('/updateResena/:PeliculaId', async (req, res) => {
  try {
    const PeliculaId = req.params.PeliculaId;
    const newData = req.body;

    const updatedResena = await resena.findByIdAndUpdate(PeliculaId, newData);

    return res.status(200).json({
      message: "Reseña actualizada correctamente"
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al actualizar las Reseñas",
      error: error
    });
  }
});

app.delete('/deleteResena/:PeliculaId', async (req, res) => {
  try {
    const PeliculaId = req.params.PeliculaId;
    await resena.findByIdAndDelete(PeliculaId);

    return res.status(200).json({
      message: "Reseña borrada correctamente"
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al eliminar las Reseñas",
      error: error
    });
  }
});