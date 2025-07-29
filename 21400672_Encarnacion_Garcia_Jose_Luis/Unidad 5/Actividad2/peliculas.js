const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

mongoose.connect('mongodb+srv://root:1234567890@books.jmgikkx.mongodb.net/Peliculas?retryWrites=true&w=majority&appName=Books')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(error => console.log(error.message));

app.use(express.json());

const InfoSchema = new mongoose.Schema({
  Pelicula: { type: String },
  Info: { type: String }
});

const info = mongoose.model('info', InfoSchema);

app.listen(PORT, () => {
  console.log(`Server escuchando en http://localhost:${PORT}`);
});

app.get('/getInfo', async (req, res) => {
  try {
    const infos = await info.find();
    return res.status(200).json({
      message: "Info obtenida correctamente",
      info: infos
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener la info",
      error: error
    });
  }
});

app.post('/newInfo', async (req, res) => {
  try {
    const { Pelicula, Info } = req.body;
    const newInfo = new info({ Pelicula, Info });
    await newInfo.save();
    return res.status(200).json({
      message: "Info creada correctamente"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear la info",
      error: error
    });
  }
});

app.put('/updateInfo/:PeliculaId', async (req, res) => {
  try {
    const PeliculaId = req.params.PeliculaId;
    const newData = req.body;

    await info.findByIdAndUpdate(PeliculaId, newData);

    return res.status(200).json({
      message: "Info actualizada correctamente"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar la info",
      error: error
    });
  }
});

app.delete('/deleteInfo/:PeliculaId', async (req, res) => {
  try {
    const PeliculaId = req.params.PeliculaId;
    await info.findByIdAndDelete(PeliculaId);

    return res.status(200).json({
      message: "Info borrada correctamente"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar la info",
      error: error
    });
  }
});