const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:1234567890@books.jmgikkx.mongodb.net/Books-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB Conectado"))
.catch(error => console.log(error.message));

app.use(express.json());

const BookSchema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    stock: {type: Number}
});

const Book = mongoose.model("Book",BookSchema);

app.get('/getBooks', async (req,res) => {
    try{
        const books = await Book.find();
        return res.status(200).json({
            message: "Libros obtenidos con éxito",
            libros: books
        })   
    }catch(error){
        return res.status(500).json({
            message:"Error",
            error:error
        })
    }
});

app.get('/Books', async (req,res) => {
    try{
        const {titulo, autor, stock} = req.body;
        const newBook = new Book({titulo, autor, stock});
        await newBook.save();

        return res.status(200).json({message:"Libro creado"});
    }catch(error){
        return res.status(500).json({
            message:"Error al crear libro",
            error:error
        })
    }
});

app.get('/updateBook/:bookId', async (req,res) => {
    try{
        const bookId = req.params.bookId
        const newData = req.body;
        const updateBook = await Book.findByIdAndUpdate(bookId,newData);
        return res.status(200).json({message:"Libro actualizado"});
    }catch(error){
        return res.status(500).json({
            message:"Error al actualizar el libro",
            error:error
        })
    }
});

app.get('/deleteBook/:bookId', async (req,res) => {
    try{
        const bookId = req.params.bookId
        await Book.findByIdAndDelete(bookId);
        return res.status(200).json({message:"Libro eliminado"});
    }catch(error){
        return res.status(500).json({
            message:"Error al eliminar el libro",
            error:error
        })
    }
});


app.get('/newBook', async (req,res) => {
   
});


app.get('/', (req,res) => {
    res.json({message: "Bienvenido"});
});
 
app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT}');
});