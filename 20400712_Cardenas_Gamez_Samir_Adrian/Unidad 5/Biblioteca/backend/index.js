const express =require('express')
const app = express();
const PORT =(3000);
const mongoose=require('mongoose')
const cors=require('cors')

mongoose.connect('mongodb+srv://root:1234567890@books.8bcr4g7.mongodb.net/books-db?retryWrites=true&w=majority&appName=Books')
.then(()=>console.log("MongoDb conectado")).catch(error=>console.log(error.message));
app.use(express.json());
const bookSchema = new mongoose.Schema({
    titulo:{type: String},
    imagen:{type:String},
    autor:{type: String},
    stock:{type: Number}
})

app.use(cors())


const Book= mongoose.model("Book", bookSchema);


app.get('/getBooks',async (req,res)=>{
    try {
        const books= await Book.find();
        return res.status(200).json({
            message:"Libros obtenidos con exito",
            libros:books
        });
    } catch (error) {
        return res.status(500).json({
            message:"Error al consultar libros, maricon", error:error
        });
  }
})

app.post('/newBook',async (req,res)=>{
    try {
        const  {titulo,autor,stock}=req.body;
        const newBook = new Book({titulo,autor,stock});
        await newBook.save()
         res.status(200).json({
            message:"Libro creado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al crear libros, maricon", error:error
        });
  }
})
app.get('/', (req,res) => {
    res.json({message:"Bienvenido"})
});
app.put('/updatebook/:bookId',async (req,res)=>{
    try {
        const bookId=req.params.bookId;
        const  NewData=req.body;
        const updatedBook=await Book.findByIdAndUpdate(bookid, NewData);
       
         res.status(200).json({
            message:"Libro actualizado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al actualizar libros, maricon", error:error
        });
  }
})
app.delete('/deleteBook/:bookId',async (req,res)=>{
    try {
        const bookId=req.params.bookId;
        await Book.findByIdAndDelete(bookId)
       
         res.status(200).json({
            message:"Libro aEliminado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al Eliminar libros, maricon", error:error
        });
  }
})


app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost: ${PORT}`)
})

