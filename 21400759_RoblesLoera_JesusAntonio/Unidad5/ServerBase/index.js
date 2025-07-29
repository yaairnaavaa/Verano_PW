const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:root@books.tdrxuar.mongodb.net/?retryWrites=true&w=majority&appName=books')
.then(()=> console.log("MongoDB Conectado")) 
.catch(error => console.log(error.message)) ;


app.use(express.json());
const BooksShcema = new mongoose.Schema({
  titulo: {type: String,},
  autor: {type: String},
  stock : {type: Number}
});

const Book = mongoose.model('Book', BooksShcema);
app.get('/books',async (req, res) => {
  try {
   const books = await Book.find(); 
   return res.status(200).json({
    message: "Libros cpm exito",
    libros: books
   });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los libros",
      error: error.message
    });
  }
});
app.post('/newbooks', async (req, res) => {
  try {
    const { titulo, autor, stock } = req.body;
    const newBook = new Book({ titulo, autor, stock });
    await newBook.save();
    return res.status(201).json({
      message: "Libro creado con éxito",
      libro: newBook
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el libro",
      error: error
    });
  }
});

app.put('/updatebook/:bookId', async (req, res) => {
  try {
      const bookId = req.params.bookId;
      const newData = req.body;
      const updatedBook = await Book.findByIdAndUpdate(bookId, newData,
         { new: true });
      if (!updatedBook) {
        return res.status(404).json({
          message: "Libro no encontrado"
        });
      }
      return res.status(200).json({
          message: "Libro actualizado con éxito",
          libro: updatedBook
      });
  } catch (error) {
      return res.status(500).json({
          message: "Error al actualizar el libro",
          error: error.message
      });
  }
});

app.get('/deletebook/:bookId', async (req, res) => {
  try { 
    const bookId = req.params.bookId;
   await Book.findByIdAndDelete(bookId);
    return res.status(200).json({
      message: "Libro eliminado con éxito",
      libro: deletedBook
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el libro",
      error: error.message
    });
  }
});

app.get('/', (req, res) => {
    res.json({message: "Bienvenido"});
});
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

