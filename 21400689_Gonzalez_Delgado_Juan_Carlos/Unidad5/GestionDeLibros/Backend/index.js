const express = require('express');
const corse = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

//Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(error => console.log(error.message));

app.use(express.json());
app.use(corse);

const BookSchema = new mongoose.Schema({
  title: {type: String},
  autor: {type: String},
  stock: {type: Number}
});

const Book = mongoose.model('Book', BookSchema);

app.get('/getbooks', async (req, res) => {
  console.log('Obteniendo libros...');
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

app.listen(PORT, () => {
  console.log(`Server escuchando en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.json("¡Bienvenido!");
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