const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Ajusta este valor
  password: '', // Ajusta este valor
  database: 'PComponentes',
  port: 3308
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL en el puerto 3308');
});

const express = require('express');
const app = express();
const port = 3001;

app.get('/prueba', (req, res) => {
  db.query('SELECT * FROM componentes', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error en la consulta' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});

