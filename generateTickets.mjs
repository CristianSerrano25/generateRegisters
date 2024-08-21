import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';
import path from 'path';

// Ruta al archivo JSON
const filePath = path.resolve('data', 'tickets.json');

// Función para generar un número de asiento (e.g., A1, B2, C3)
const generateSeatNumber = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seat = faker.datatype.number({ min: 1, max: 10 });
    const row = faker.helpers.arrayElement(rows);
    return `${row}${seat}`;
};

// Función para generar un registro de boleto
const generateTicket = (id) => ({
    TicketID: id,
    ScreeningID: faker.datatype.number({ min: 1, max: 5 }), // Puede variar según la cantidad de funciones disponibles
    SeatNumber: generateSeatNumber(),
    CustomerName: faker.name.fullName(),
    PurchaseDate: faker.date.recent().toString(),
});

// Generar 100 registros de boletos
const tickets = Array.from({ length: 100 }, (_, index) => generateTicket(index + 1));

// Guardar los datos en un archivo JSON
writeFileSync(filePath, JSON.stringify(tickets, null, 2));

console.log('100 boletos generados y guardados en data/tickets.json exitosamente!');
