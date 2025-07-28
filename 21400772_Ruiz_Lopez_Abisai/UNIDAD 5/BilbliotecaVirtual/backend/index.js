const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB Conectado"))
.catch(error => console.log(error.message));

app.use(express.json()); //permite al servidor leer archivos .json
app.use(cors());

const BooksSchema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    stock: {type: Number}
});

const Book = new mongoose.model('Book', BooksSchema);

app.get('/getBooks', async(req,res) =>{ //async permite que sea una funcion asíncrona /getBooks es una extension de la URL
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
});

app.post('/newBook/', async(req,res) =>{ //async permite que sea una funcion asíncrona /getBooks es una extension de la URL
    try{
        const { titulo, autor, stock } = req.body; // cambia entre body por query segun postman
        const newBook = new Book({titulo, autor, stock});
        await newBook.save();

        return res.status(200).json({message: "Libro creado con éxito"})
    }catch(error){
        return res.status(500).json({
            message: "Error al crear libro",
            error: error
        });
    }
});

app.put('/updateBook/:bookId', async(req,res) =>{ //async permite que sea una funcion asíncrona /getBooks es una extension de la URL
    try{
        const bookId = req.params.bookId;
        const newData = req.query;

        const updateBook = await Book.findByIdAndUpdate(bookId, newData);

        return res.status(200).json({message: "Libro actualizado con éxito"})
    }catch(error){
        return res.status(500).json({
            message: "Error al actualizar libro",
            error: error
        });
    }
});

app.delete('/deleteBook/:bookId', async(req,res) =>{ //async permite que sea una funcion asíncrona /getBooks es una extension de la URL
    try{
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);
        return res.status(200).json({message: "Libro eliminado con éxito"})
    }catch(error){
        return res.status(500).json({
            message: "Error al eliminar libro",
            error: error
        });
    }
});

app.get('/', (req,res) =>{
    res.json({message: "Bienvenido"});
});

app.listen(port, () => {
    console.log("servidor escuchando en: http://localhost:" + port);
});
