// Importar dependencias
const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const userModule = require('./modules/userModule');

// Configurar Express
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

// Definir ruta para la página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// ...código anterior...

// Definir ruta para verificar el DNI
app.post('/verificar-dni', (req, res) => {
    const dni = req.body.dni;
    userModule.getUserByDni(dni, (error, results) => {
      if (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).send('Error al consultar la base de datos.');
      } else {
        if (results.length > 0) {
          res.send('El DNI existe en la base de datos.');
        } else {
          res.send('El DNI no existe en la base de datos.');
        }
      }
    });
  });
  
  
  // ...código posterior...
  

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
