const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public')); // Declaramos como pública esa ruta

// Método get(ruta, función flecha con req y res)

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/contacto', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/contacto.html');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})