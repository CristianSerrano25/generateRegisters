
import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';
import path from 'path';

// Ruta al archivo JSON
const filePath = path.resolve('data', 'users.json');

// Función para generar un usuario falso
let userId = 1;

const generateUser = () => ({
    id: userId++,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
    country: faker.address.country(),
    birthDate: faker.date.past(50, new Date()).toISOString().split('T')[0],
    avatar: faker.image.avatar(),
});

// Generar 1000 usuarios
const users = Array.from({ length: 1000 }, generateUser);

// Guardar los datos en un archivo JSON
writeFileSync(filePath, JSON.stringify(users, null, 2));

console.log('1000 usuarios generados y guardados en data/users.json exitosamente!');
