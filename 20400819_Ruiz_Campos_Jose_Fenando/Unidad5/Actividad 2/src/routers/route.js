const express = require('express');
const router = express.Router();
const Pelicula = require('../models/model');

// Crear película (POST)
router.post('/peliculas/post', async (req, res) => {
  try {
    const nueva = new Pelicula(req.body);
    const guardada = await nueva.save();
    res.status(201).json({
      message: 'Película creada correctamente',
      pelicula: guardada
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las películas (GET)
router.get('/peliculas/get', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filtrar películas por género (GET) - DEBE IR ANTES que /:id
router.get('/peliculas/genero/:genero', async (req, res) => {
    try {
        const peliculas = await Pelicula.find({ genero: req.params.genero });
        if (peliculas.length === 0) return res.status(404).json({ error: 'No se encontraron películas de este género' });
        res.json(peliculas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener una película por ID (GET)
router.get('/peliculas/get/:id', async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (!pelicula) return res.status(404).json({ error: 'No encontrada' });
    res.json(pelicula);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar una película (PUT)
router.put('/peliculas/put/:id', async (req, res) => {
  try {
    const actualizada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!actualizada) return res.status(404).json({ error: 'No encontrada' });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar una película (DELETE)
router.delete('/peliculas/delete/:id', async (req, res) => {
  try {
    const eliminada = await Pelicula.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'No encontrada' });
    res.json({ mensaje: 'Película eliminada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;


