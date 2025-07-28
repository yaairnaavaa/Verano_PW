# API de Videoteca

Una API REST para gestionar una videoteca de películas usando Node.js, Express y MongoDB.

## Características

- CRUD completo de películas
- Validación de datos
- Filtrado por género
- Conexión a MongoDB Atlas
- Manejo de errores

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno en el archivo `.env`:
```
MONGODB_URI=tu_cadena_de_conexion_mongodb
PORT=3000
NODE_ENV=development
```

4. Ejecuta la aplicación:
```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

## API Endpoints

### Películas

- `GET /api/peliculas` - Obtener todas las películas
- `GET /api/peliculas/:id` - Obtener película por ID
- `GET /api/peliculas/genero/:genero` - Filtrar por género
- `POST /api/peliculas` - Crear nueva película
- `PUT /api/peliculas/:id` - Actualizar película
- `DELETE /api/peliculas/:id` - Eliminar película

### Ejemplo de película

```json
{
  "titulo": "El Padrino",
  "director": "Francis Ford Coppola",
  "anio": 1972,
  "genero": "Drama",
  "duracion": 175
}
```

### Géneros disponibles
- Acción
- Comedia
- Drama
- Terror
- Ciencia Ficción
- Romance
- Aventura
- Animación
- Documental
- Thriller

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS
