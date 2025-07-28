const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

//Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://JuanGlez:123456789.@cluster0.2mkhbik.mongodb.net/books-db?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(error => console.log(error.message));

app.use(express.json());

const BookSchema = new mongoose.Schema({
  title: {type: String},
  autor: {type: String},
  stock: {type: Number}
});

const Book = mongoose.model('Book', BookSchema);

app.listen(PORT, () => {
  console.log(`Server escuchando en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.json("¡Bienvenido!");
});

app.get('/getbooks', async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      message: "Libros obtenidos correctamente",
      books: books
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al obtener los libros",
      error: error
    });
  }
});

app.post('/newbook', async (req, res) => {
  try {
    const { title, autor, stock } = req.body;
    const newBook = new Book({ title, autor, stock });
    await newBook.save();
    return res.status(200).json({
      message: "Libro creado correctamente"
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al crear los libros",
      error: error
    });
  }
});

app.put('/updatebook/:bookId', async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const newData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, newData);

    return res.status(200).json({
      message: "Libro actualizado correctamente"
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al actualizar los libros",
      error: error
    });
  }
});

app.delete('/deletebook/:bookId', async (req, res) => {
  try {
    const bookId = req.params.bookId;
    await Book.findByIdAndDelete(bookId);

    return res.status(200).json({
      message: "Libro borrado correctamente"
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al eliminar los libros",
      error: error
    });
  }
});