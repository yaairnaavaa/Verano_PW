const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB conectado"))
.catch(error => console.log(error.message));

app.use(express.json());
app.use(cors());

const BooksSchema = new mongoose.Schema({
    titulo: {type: String},
    imagen: {type: String},
    autor: {type: String},
    stock: {type: Number}
});

const Book = mongoose.model('Book', BooksSchema);

app.get('/', (req, res) => {
    res.json({message: "Bienvenido"});
})

app.get('/getBooks', async (req, res) => {
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
        });
    }
})

app.post('/newBook', async (req, res) => {
    try{
        const {titulo, imagen, autor, stock} = req.body;
        const newBook = new Book({titulo, imagen, autor, stock});
        await newBook.save();

        return res.status(200).json({
            message: "Libro creado con éxito"
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al crear el libro",
            error: error
            
        });
    }
})

app.post('/updateBook/:bookID', async (req, res) => {
    try{
        const bookID = req.params.bookID;
        const newData = req.body;

        const updatedBook = await Book.findByIdAndUpdate(bookID, newData);

        return res.status(200).json({
            message: "Libro actualizado con éxito"
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al actualizar el libro",
            error: error
            
        });
    }
})

app.delete('/deleteBook/:bookID', async (req, res) => {
    try{
        const bookID = req.params.bookID;
        await Book.findByIdAndDelete(bookID);

        return res.status(200).json({
            message: "Libro eliminado con éxito"
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al eliminar el libro",
            error: error
            
        });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en     ${PORT}`);
})  