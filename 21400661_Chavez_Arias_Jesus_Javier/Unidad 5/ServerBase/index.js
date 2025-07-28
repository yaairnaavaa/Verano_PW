const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
    .then(() => console.log("MongoDB Conectado"))
    .catch(error => console.log(error.nessage));


app.use(express.json());
app.use(cors());

const BookSchema = new mongoose.Schema({
    titulo: { type: String },
    imagen: {type: String},
    autor: { type: String },
    stock: { type: Number }
    
});

const Book = mongoose.model('Book', BookSchema);

app.get('/', (req, res) => {
    res.json({ message: "Bienvenido" });
});

app.get('/getBooks', async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            message: "Libros obtenidos con exito",
            libros: books
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar libros",
            error: error
        });
    }
});

app.post('/newBook', async (req, res) => {
    try {
        console.log(req.body)
        const { titulo, imagen,autor, stock } = req.body;
        const newBook = new Book((titulo,imagen, autor,stock));
        console.log(newBook);
       const n = await newBook.save();
        console.log(n);

        return res.status(200).json({message: "Libro creado con éxito"});
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear libro",
            error: error
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})