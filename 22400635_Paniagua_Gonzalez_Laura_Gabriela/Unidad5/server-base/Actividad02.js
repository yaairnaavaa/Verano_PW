/*Actividad 2: 

Desarrollar un servidor básico con Node.js y Express que permita registrar, 
consultar, actualizar y eliminar información de películas.
 */


const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = 3000

mongoose.connect('mongodb+srv://root:LFWaV2wrViwoJdK2@Cluster0.sbibrpz.mongodb.net/books-db?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("MongoDB Conectado")) 
.catch(error => console.log(error.message))

app.use(express.json()); // Leer y recibir json, llamadas al servidor


const peliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    director: { type: String, required: true },
    año: { type: Number },
    genero: { type: String }
});


// Crear modelo
const Pelicula = mongoose.model('Pelicula', peliculaSchema);


// Consultar todas las películas
app.get('/peliculas', async (req, res) => {
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

app.get('/', (req, res) => {  // req // res todo lo que vamos a enviar al servidor
    res.json({ mensaje: 'Bienvenido' });
});


// Registrar una nueva película
app.post('/peliculas', async (req, res) => {
    try {
        const { titulo, director, año, genero } = req.body;
        const nuevaPelicula = new Pelicula({ titulo, director, año, genero });
        await nuevaPelicula.save();
        return res.status(200).json({ message: "Película creada con éxito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear película",
            error: error
        });
    }
});


// Actualizar una película
app.put('/peliculas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await Pelicula.findByIdAndUpdate(id, newData);
        return res.status(200).json({ message: "Película actualizada con éxito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar película",
            error: error
        });
    }
});


// Eliminar una película
app.delete('/peliculas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Pelicula.findByIdAndDelete(id);
        return res.status(200).json({ message: "Película eliminada con éxito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar película",
            error: error
        });
    }
});



app.listen(PORT, () =>{
    console.log(`Ya me conecte, escuchando en http://localhost:${PORT}`)
});


