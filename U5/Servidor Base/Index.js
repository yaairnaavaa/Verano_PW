const express = require('express');
const { default: mongoose } = require('mongoose');
const mongose = require('mongoose')
const app = express();
const PORT = 3000;
mongose.connect('mongodb+srv://egmt:cCLWIi6hSFtPNZMe@root.3no4nxd.mongodb.net/Books-db?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("Mongo DB conectado"))
.catch(error => console.log(error.message));

app.use(express.json());

const BooksSchema = new mongose.Schema({
   titulo: {type:String},
   auto:  {type:String},
   stock: {type: Number}

});

const Book = new mongoose.model('Book',BooksSchema);

app.get('/',(req,res) => {
    res.json({message:"Binevenido"})
});

app.get('/getBooks',async (req,res) => {
    try{
       const books = await Book.find();//Consulata todos los registros del modelo 
       return res.status(200).json({
        message: "Libos ontenidos con exito",
        libros: books
       });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar libros",
            error: error
        });
    }
});

app.post('/newBook',async (req,res) => {
    try{
        const { titulo, autor, stock } = req.body;
        const newBook = new Book({titulo,autor,stock});
        await newBook.save();
        
        return res.status(200).json({message: "Libro creado con exito"});
    }catch(error){
        return res.status(500).json({
            message : "Error al crear libro",
            error: error
        });
    }
});

app.put('/updateBook/:bookId',async (req,res) => {
    try{
        const bookId = req.params.bookId;
        const newData = req.body;

        const updateBook = await Book.findByIdAndUpdate(bookId, newData);
        
        return res.status(200).json({message: "Libro actulizado con exito"});
    }catch(error){
        return res.status(500).json({
            message : "Error al actullizar libro",
            error: error
        });
    }
});

app.get('/deleteBook/:bookId',async (req,res) => {
    try{
        const bookId = req.params.bookId;
        await Book.findByIdAndUpdate(bookId);
        
        return res.status(200).json({message: "Libro eliminado con exito"});
    }catch(error){
        return res.status(500).json({
            message : "Error al actullizar libro",
            error: error
        });
    }
});



app.listen(PORT, () => {
    console.log("Servidor escuchando en http://localhost:"+PORT);
});

