const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Bienvenido" })
});;

app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT}');
})

mongoose.connect('mongodb+srv://rute:charmandel08@Books.ddyaxql.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
    .then(() => console.log("MongoDB Conectado"))
    .catch(error => console.log(error.message));

app.use(express.json());

const BooksSchema = new mongoose.Schema({
    title: typeof { String },
    autor: typeof { String },
    stock: typeof { Number },
});

app.delete('/deletebooks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        return res.status(200).json({ message: "Libro eliminado correctamente", Libro: book });
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar libro",
            error: error
        });
    }
});

app.post('/newbooks', async (req, res) => {
    try {
        const { title, autor, stock } = req.body;
        const newBook = new Book({
            title,
            autor,
            stock
        });
        await newBook.save();
        return res.status(201).json({ message: "Libro agregado correctamente", Libro: newBook });
    } catch (error) {
        return res.status(500).json({
            message: "Error al agregar libro",
            error: error
        });
    }
});

const Books = mongoose.model('Book', BooksSchema);

app.get('/getbooks', async (req, res) => {
    try {
        const books = await Books.find();
        return res.status(200).json({
            message: "Libros obtenidos",
            Libros: books
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener los libros",
            error: error
        });
    }
});

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido"
    })
})

app.listen(PORT, () => {
    console.log("Servidor escuchando en http://localhost:${PORT}");
})