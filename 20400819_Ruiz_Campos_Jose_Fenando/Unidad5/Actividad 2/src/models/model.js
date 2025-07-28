const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: [true, 'El título es obligatorio'],
        trim: true,
        maxlength: [200, 'El título no puede exceder 200 caracteres']
    },
    director: { 
        type: String, 
        required: [true, 'El director es obligatorio'],
        trim: true,
        maxlength: [100, 'El nombre del director no puede exceder 100 caracteres']
    },
    anio: { 
        type: Number, 
        required: [true, 'El año es obligatorio'],
        min: [1900, 'El año debe ser mayor a 1900'],
        max: [new Date().getFullYear() + 5, 'El año no puede ser muy futuro']
    },
    genero: { 
        type: String, 
        required: [true, 'El género es obligatorio'],
        enum: ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Romance', 'Aventura', 'Animación', 'Documental', 'Thriller'],
        trim: true
    },
    duracion: { 
        type: Number, 
        required: [true, 'La duración es obligatoria'],
        min: [1, 'La duración debe ser mayor a 0 minutos'],
        max: [600, 'La duración no puede exceder 600 minutos']
    },
    fechaCreacion: { 
        type: Date, 
        default: Date.now 
    },
    activo: { 
        type: Boolean, 
        default: true 
    }
}, {
    timestamps: true,
    versionKey: false
});

// Índices para mejor rendimiento
peliculaSchema.index({ titulo: 1 });
peliculaSchema.index({ genero: 1 });
peliculaSchema.index({ anio: -1 });

module.exports = mongoose.model('Pelicula', peliculaSchema);