const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
//mongoose.connect('mongodb+srv://root:admin@books.nrlnbjk.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(() =>console.log("mongoDB conectado"))
.catch(Error => console.log(Error.Message))
app.use(cors());
app.use(express.json());


const BooksSchema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    stock: {type: Number},
    imagen:{type: String}
});

const Book = mongoose.model('Book',BooksSchema);

app.get('/',async (req,res) => {
    res.json({Message: "Bienvenido"});
});

app.get('/getBooks',async (req,res) => {
    console.log("hola")
    try {
        const books = await Book.find();
        return res.status(200).json({
            Message:"libros obtenidos",
            libros: books
        })
    } catch (error) {
        return res.status(500).json({
            Message: "error al consultar libros",
            error:error
        })
    }
});

app.post('/getBooks',async (req,res) => {
    try {
        const{ titulo,autor,stock,imagen} = req.body;
        const newBook = new Book({titulo,autor,stock});
        await newBook.save()

        return res.status(200).json({Message:"libro creado con exito"})
        
    } catch (error) {
        return res.status(500).json({
            Message: "error al crear libro",
            error:error
        })
    }
});

app.put('/updateBooks/:bookId',async (req,res) => {
    try {
        const bookId = req.params.bookId;
        const newData = req.body;
        const updateBooks = await Book.findByIdAndUpdate(bookId,newData);

        return res.status(200).json({Message:"libro actualizado con exito"})
        
    } catch (error) {
        return res.status(500).json({
            Message: "error al crear libro",
            error:error
        })
    }
});

app.delete('/deleteBooks/:bookId',async (req,res) => {
    try {
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);

        return res.status(200).json({Message:"libro eliminado con exito"})
        
    } catch (error) {
        return res.status(500).json({
            Message: "error al eliminar libro",
            error:error
        })
    }
});

app.listen(port, () => {
    console.log("sevidor escuchado en http://localhost:"+port)
});