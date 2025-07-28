
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

//mongodb+srv://root:LFWaV2wrViwoJdK2@cluster0.sbibrpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(()=> console.log("MongoDB Conectado")) 
.catch(error => console.log(error.message))

app.use(express.json()); // Leer y recibir json, llamadas al servidor
app.use(cors());

const bookSchema = new mongoose.Schema({
    titulo: {type: String},
    imagen: {type: String},
    autor: {type: String},
    stock: {type: Number}
})

// Crear modelo

const Book = mongoose.model('Book', bookSchema);

app.get('/getBooks', async (req, res) => {  
    try {
        const libros = await Book.find();
        return res.status(200).json({
            message: "Libros obtenido con éxito",
            libros: libros
        }); //si recupero, mandar en formato json
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar libros",
            error: error
        });
    }
});

app.get('/', (req, res) => {  // req // res todo lo que vamos a enviar al servidor
    res.json({ mensaje: 'Bienvenido' });
});

app.post('/newBooks', async (req, res) => {  
    try {
        const { titulo, imagen, autor, stock } = req.body; //recupera la informacion de estos campos
        const newBook = new Book({ titulo, imagen, autor, stock });
        await newBook.save();

        console.log(newBook)

        return res.status(200).json({ message: "Libro creado con exito" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear libro",
            error: error
        });
    }
});

app.put('/updateBook/:bookId', async (req, res) => { 
    try{
        const bookId= req.params.bookId;
        const newData = req.body;
        const updateBook = await Book.findByIdAndUpdate(bookId,newData);
        return res.status(200).json({message: "Libro actualizado con éxito"});

    } catch(error){
        return res.status(500).json({
            message: "Error al actualizar libro",
            error:error


        })

    }
});

app.delete('/deleteBook/:bookId', async (req, res) => { 
    try{
        const bookId= req.params.bookId;
        await Book.findByIdAndDelete(bookId);
        return res.status(200).json({message: "Libro eliminado con éxito"});

    } catch(error){
        return res.status(500).json({
            message: "Error al eliminar libro",
            error:error
        })
    }
});



app.listen(PORT, () =>{
    console.log(`Ya me conecte, escuchando en http://localhost:${PORT}`)
});


