const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://joferuizca:N3FGeluwkMk89kGl@videoteca.lpo8j8m.mongodb.net/videoteca?retryWrites=true&w=majority&appName=Videoteca";

const BooksSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      index: true, // Agregar índice
    },
    autor: {
      type: String,
      required: true,
      index: true, // Agregar índice
    },
    stock: {
      type: Number,
      default: 0,
    },
    imagen: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Crear índices compuestos
BooksSchema.index({ titulo: 1, autor: 1 });

const Book = mongoose.model("Book", BooksSchema);

// Ruta para la raíz
app.get("/", (req, res) => {
  res.json({
    message: "Servidor funcionando correctamente",
    endpoints: {
      libros: "/getbooks",
    },
  });
});

// Obtener todos los libros
app.get("/getbooks", async (req, res) => {
  try {
    const libros = await Book.find();
    res.json({ libros });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// Crear un libro
app.post("/newBook", async (req, res) => {
  const { titulo, autor, stock, imagen } = req.body;
  if (!titulo || !autor || isNaN(stock) || !imagen) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios y el stock debe ser un número.",
    });
  }
  try {
    const nuevoLibro = new Book({ titulo, autor, stock, imagen });
    await nuevoLibro.save();
    res.json({ message: "Libro creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el libro" });
  }
});

// Eliminar un libro
app.delete("/deleteBook/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
});

// Actualizar un libro
app.put("/updateBook/:id", async (req, res) => {
  const { titulo, autor, stock, imagen } = req.body;
  if (!titulo || !autor || isNaN(stock) || !imagen) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios y el stock debe ser un número.",
    });
  }
  try {
    await Book.findByIdAndUpdate(req.params.id, { titulo, autor, stock, imagen });
    res.json({ message: "Libro actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
});

async function startServer() {
  await mongoose.connect(uri);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}

startServer();
