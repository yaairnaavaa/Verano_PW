const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //permite al servidor leer archivos .json

app.get('/', (req,res) =>{
    req.json({message: "Bienvenido"});
});

app.listen(port, () => {
    console.log("servidor escuchando en: https://localhost:" + port);
});