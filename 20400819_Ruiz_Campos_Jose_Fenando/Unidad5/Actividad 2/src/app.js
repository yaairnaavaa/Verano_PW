
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const peliculaRoutes = require('./routers/route');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', peliculaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ 
        mensaje: 'API de Videoteca funcionando correctamente',
        version: '1.0.0',
        fecha: new Date().toISOString()
    });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        ruta: req.originalUrl 
    });
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Error interno del servidor',
        mensaje: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
    console.log(`Entorno: ${process.env.NODE_ENV}`);
});
