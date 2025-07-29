const expres = require('express');

const mongoose=require('mongoose');

const cors = require('cors');

const app = expres();

const port= 3000;

//mongoose.connect('mongodb+srv://root:DL878dbGMek691bT@books.kc3z9ao.mongodb.net/books-db?retryWrites=true&w=majority&appName=books')
//.then(()=> console.log("mongo db conectando")).catch(error => console.log(error.message));
mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(()=> console.log("mongo db conectando")).catch(error => console.log(error.message));

app.use(expres.json());
app.use(cors());


const bookSchema = new mongoose.Schema({
    titulo:{type: String},
    imagen:{type: String},
    autor:{type: String},
    stock:{type: Number}
})

const Book= mongoose.model("Book", bookSchema);


app.get('/deleteBooks/:bookId',async (req,res)=>{
    try {
        const bookId=req.params.bookId;
        await Book.findByIdAndDelete(bookId);
 
        return res.status(200).json({message:"libro borrado con exito"});
    } catch (error) {
        return res.status(500).json({
            message: "error al borrar libro",
            error: error
        });
    }
    
    
})


app.put('/updateBooks/:bookId',async (req,res)=>{
    try {
        const bookId=req.params.bookId;
        const newData= req.body;

        const updateBooks=await Book.findByIdAndUpdate(bookId, newData);
          
        return res.status(200).json({message:"libro actalizado con exito"});
    } catch (error) {
        return res.status(500).json({
            message: "error al Actualizar libro",
            error: error
        });
    }
    
    
})

app.post('/newBooks',async (req,res)=>{
    try {
         const{titulo, autor, stock}= req.body;
            const newBook = new Book({titulo, imagen, autor, stock});
            await newBook.save();
            return res.status(200).json({message:"libro creado con exito"});
    } catch (error) {
        return res.status(500).json({
            message: "error al crear libro",
            error: error
        });
    }
    
    
})

app.get('/getBooks',async (req,res)=>{
    try {
        const books= await Book.find();
        return res.status(200).json({
            message:"libros obtenidos con exito",
            libros: books
        });
    } catch (error) {
        return res.status(500).json({
            message: "error al consultar libros",
            error: error
        });
    }
    
    
})

app.get('/',(req,res)=>{
    res.json({message:"vienvenido"})
})

app.listen(port,() =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
});