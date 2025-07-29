const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;
const cors = require('cors');

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB CONECTADO")).catch(error => console.log(error.message));

app.use(express.json());
app.use(cors());

const BooksSchema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    stock: {type: Number}

});

const Book = mongoose.model('Book',BooksSchema);


app.get('/',(req,res) => {
    res.json({message:"Binevenido"})
})


app.get('/getBooks',async (req,res) => {
    try{
        const books = await Book.find();
        console.log(books);

        return res.status(200).json({
            message: "Libros obtenidos con exito",
            libros: books
        })
        
    }catch(error){
        return res.status(500).json({
            message: "Error al consultar libros",
            error: error
        })
    }
});


app.post('/newBooks',async (req,res) => {
    try{
        const{titulo,autor,stock} = req.body;
        const newBook = new Book({titulo,autor,stock});
        await newBook.save();

        return res.status(200).json({message: "Libro creado con exito"});
        
    }catch (error){
        return res.status(500).json({
            message: "Error al insertar libro",
            error: error
        })
    }
});

app.put('/updateBooks/:bookId',async (req,res) => {
    try{
        const bookId = req.params.bookId;
        const newData = req.body;

        const updateBook = await Book.findByIdAndUpdate(bookId,newData);

        return res.status(200).json({message: "Libro actualizado con exito"})
    }catch (error){
        return res.status(500).json({
            message: "Error al Actualizar libro",
            error: error
        })
    }
});

app.get('/deleteBooks/:bookId',async (req,res) => {
    try{
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);

        return res.status(200).json({message: "Libro eliminado con exito"})
    }catch (error){
        return res.status(500).json({
            message: "Error al Actualizar libro",
            error: error
        })
    }
});


app.listen(PORT, () => {
    console.log("Servidor escuchando en http://localhost:"+PORT);
})