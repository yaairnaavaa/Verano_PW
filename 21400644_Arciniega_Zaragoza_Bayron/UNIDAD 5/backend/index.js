const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books")
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((error) =>  console.error('Error de conexión a MongoDB:', error));

app.use(express.json());
app.use(cors());
const bookschema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    stock: {type: Number},
    imagen: {type: String}
});

const Book = mongoose.model('Book', bookschema);

app.listen(port, () => {
    console.log(`Server escuchando en http://localhost:${port}`);
});      

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos' });
});

app.get('/getBooks', async(req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({message: 'Libros obtenidos con éxito',
            libros: books });

    }catch (error) {
        return res.status(500).json({message: 'Error al obtener los libros', 
            error: error});
    }
});


app.post('/newBook', async(req, res) => {
    try {
        const { titulo, autor, stock, imagen } = req.body;
        const newBook = new Book({ titulo, autor, stock, imagen });

        await newBook.save();
        return res.status(200).json({message: 'Libro creado con éxito'});

    }catch (error) {
        return res.status(500).json({message: 'Error al crear los libros', 
            error: error});
    }
});  



app.put('/updateBook/:bookid', async(req, res) => {
    try {
        const bookid = req.params.id;
        const newdata = req.body;
        const updatedBook = await Book.findByIdAndUpdate(bookid, newdata);

        return res.status(200).json({message: 'Libro actualizado con éxito'});

    }catch (error) {
        return res.status(500).json({message: 'Error al actualizar los libros', 
            error: error});
    }
});  

app.delete('/deleteBook/:bookid', async(req, res) => {
    try {
        const bookid = req.params.bookid;
        await Book.findByIdAndDelete(bookid);

        return res.status(200).json({message: 'Libro eliminado con éxito'});

    }catch (error) {
        return res.status(500).json({message: 'Error al eliminar los libros', 
            error: error});
    }
});  
