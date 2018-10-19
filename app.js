// Requires
var express = require('express');
var mongoose = require('mongoose');



// Inicializar variables
var app = express();

// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/megaDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

// Rutas
app.get('/', (req, res, next) => {

    res.status(403).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
});

// Escuchar perticiones
app.listen(3000, () => {
    console.log('Exress server puerto 3000: \x1b[32m%s\x1b[0m', 'online');

});