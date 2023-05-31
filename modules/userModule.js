// Importa las dependencias necesarias para acceder a la base de datos
const mysql = require('mysql');

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lorena',
    password: 'oysadmin',
    database: 'ingreso'
});

// Conecta a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión a la base de datos establecida correctamente.');
  }
});

// Define las funciones para acceder a la tabla de usuarios
module.exports = {
  getUserByDni: (dni, callback) => {
    const query = 'SELECT * FROM personas WHERE DNI = ?';
    connection.query(query, [dni], callback);
  },
};
