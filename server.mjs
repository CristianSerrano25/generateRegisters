import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Ruta al archivo JSON
const filePath = path.resolve('data', 'users.json');

// Ruta para servir el archivo JSON
app.get('/users', (req, res) => {
    try {
        // Leer el archivo JSON
        const data = readFileSync(filePath, 'utf-8');
        // Convertir el contenido a JSON y enviarlo como respuesta
        const users = JSON.parse(data);
        res.json(users);
    } catch (err) {
        res.status(500).send('Error al leer el archivo de usuarios');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
