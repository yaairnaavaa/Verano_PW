

const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json()); // Leer y recibir json, llamadas al servidor

app.get('/', (req,res) => {  // req // res todo lo que vamos a enviar al servidor
    res.json({mensaje:'Bienvenido'})
})

app.listen(PORT, () =>{
    console.log(`Ya me conecte, escuchando en http://localhost:${PORT}`)
});