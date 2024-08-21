import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';
import path from 'path';

// Ruta al archivo JSON
const filePath = path.resolve('data', 'transactions.json');

// Géneros disponibles
const genres = ['Acción', 'Terror', 'Anime'];

let id = 1;

// Función para generar una transacción de compra
const generateTransaction = () => ({
    id: id++,
    customerName: faker.name.fullName(),
    customerEmail: faker.internet.email(),
    movieTitle: faker.lorem.words(3),
    genre: faker.helpers.arrayElement(genres),
    purchaseDate: faker.date.recent().toISOString(),
    tickets: faker.datatype.number({ min: 1, max: 5 }),
    totalAmount: faker.datatype.number({ min: 1, max: 5 }) * 2000,
});

// Generar 1000 transacciones
const transactions = Array.from({ length: 1000 }, generateTransaction);

// Guardar los datos en un archivo JSON
writeFileSync(filePath, JSON.stringify(transactions, null, 2));

console.log('1000 transacciones generadas y guardadas en data/transactions.json exitosamente!');
