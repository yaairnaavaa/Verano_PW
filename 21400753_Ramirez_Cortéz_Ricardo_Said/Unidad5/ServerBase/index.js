const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
    .then(() => console.log("MongoDB Conectado"))
    .catch(error => console.log(error.message));

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json({message: "Bienvenido"});
});

const BooksSchema = new mongoose.Schema({
    titulo: {type: String},
    auto: {type: String},
    stock: {type: Number}
});

const Book = mongoose.model('Book', BooksSchema);

app.get('/getBooks', async (req,res) => {
    try{
        const books = await Book.find();
        return res.status(200).json({
            message: "Libros obtenidos con éxito",
            libros: books
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al consultar libros",
            error: error
        })
    }
});

app.post('/newBook', async (req,res) => {
    try{
        const { titulo, autor, stock} = req.body;
        const newBook = new Book({titulo, autor, stock});
        await newBook.save();

        return res.status(200).json({message: "Libro creado con éxito"});

    }catch(error){
        return res.status(500).json({
            message: "Error al crear libros",
            error: error
        })
    }
});

app.put('/updateBook/:bookId', async (req,res) => {
    try{
        const bookId = req.params.bookId;
        const newData = req.body;

        const updateBook = await Book.findByIdAndUpdate(bookId, newData);

        return res.status(200).json({message: "Libro actualizado con éxito"});

    }catch(error){
        return res.status(500).json({
            message: "Error al actualizar libros",
            error: error
        })
    }
});

app.delete('/deleteBook/:bookId', async (req,res) => {
    try{
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);

        return res.status(200).json({message: "Libro eliminado con éxito"});

    }catch(error){
        return res.status(500).json({
            message: "Error al eliminar libros",
            error: error
        })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})