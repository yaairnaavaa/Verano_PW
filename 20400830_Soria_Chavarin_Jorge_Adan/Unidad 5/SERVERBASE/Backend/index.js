
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://root:iyAwzNyiLGcS5JKj@books.7ot1lg0.mongodb.net/?retryWrites=true&w=majority&appName=Books')
    .then(() => console.log("MongoDB Conectado"))
    .catch(error => console.log(error));

app.use(express.json());
app.use(cors());


const BooksSchema = new mongoose.Schema({
    titulo: {type: String},
    auto: {type: String},
    stock: {type: Number},
});

const Book = mongoose.model('Book',BooksSchema);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


app.get('/',(req,res) => {
    res.json( {message: "Bienvenido"});
});



app.get('/getBooks', async (req,res) => {
    try{
        const books = await Book.find();
        return res.status(200).json({
            message: "Libros obtenidos con exito",
            libros: books
        }); 
    }catch(error){
        return res.status(500).json({
            message: "Error al consultar libros",
            error: error
        });
    }
});

app.post('/newBooks', async (req,res) => {
    try{
        const {titulo,autor,stock} = req.body;
        const newBook = new Book({titulo,autor,stock});
        await newBook.save();

        return res.status(200).json({message: "Libro creado con exito"});
        
    }catch(error){
        return res.status(500).json({
            message: "Error al agregar libro",
            error: error
        });
    }
});

app.put('/updateBooks/:bookId', async (req,res) => {
    try{
        const bookId = req.params.bookId;
        const newData = req.body;

        const updateBook = await Book.findByIdAndUpdate(bookId,newData);

        return res.status(200).json({message: "Libro Actualizado con exito"});
        
    }catch(error){
        return res.status(500).json({
            message: "Error al Actualizar libro",
            error: error
        });
    }
});

app.delete('/deleteBooks/:bookId', async (req,res) => {
    try{
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);

        return res.status(200).json({message: "Libro Eliminado con exito"});
        
    }catch(error){
        return res.status(500).json({
            message: "Error al Eliminar libro",
            error: error
        });
    }
});




/*
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


mongoose.connect('mongodb+srv://user2000:Adan123@Books.7ot1lg0.mongodb.net/Peliculas?retryWrites=true&w=majority&appName=Pelis')
  .then(() => console.log(" MongoDB Conectado"))
  .catch(error => console.log(" Error de conexión:", error.message));

app.use(express.json());


const PeliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  director: { type: String, required: true },
  genero: { type: String },
  anio: { type: Number }
});

const Pelicula = mongoose.model('Pelis', PeliculaSchema); // colección: Pelis

app.get('/', (req, res) => {
  res.json({ message: "Bienvenido a películas" });
});

app.get('/getpeliculas', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.status(200).json({
      message: "Películas obtenidas con éxito",
      data: peliculas
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener películas", error });
  }
});

app.post('/postPeliculas', async (req, res) => {
  try {
    const { titulo, director, genero, anio } = req.body;
    const nuevaPelicula = new Pelicula({ titulo, director, genero, anio });
    await nuevaPelicula.save();
    res.status(201).json({ message: "Película registrada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar película", error });
  }
});

app.put('/putPeliculas/:id', async (req, res) => {
  try {
    const peliculaId = req.params.id;
    const nuevaData = req.body;
    const peliculaActualizada = await Pelicula.findByIdAndUpdate(peliculaId, nuevaData, { new: true });
   
    res.status(200).json({ message: "Película actualizada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar película", error });
  }
});

app.delete('/deletePeliculas/:id', async (req, res) => {
  try {
    const peliculaId = req.params.id;
    const peliculaEliminada = await Pelicula.findByIdAndDelete(peliculaId);
    res.status(200).json({ message: "Película eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar película", error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
*/
