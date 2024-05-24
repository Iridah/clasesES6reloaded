import Cliente from './cliente.js';
import Impuestos from './impuestos.js';
import chalk from 'chalk';

const cliente = new Cliente('Juan Perez');
const impuestos = new Impuestos(100000, 20000);
cliente.impuesto = impuestos;

console.log(chalk.green(`Cliente: ${cliente.nombre}`));
console.log(chalk.blue(`Monto Bruto Anual: ${impuestos.montoBrutoAnual}`));
console.log(chalk.blue(`Deducciones: ${impuestos.deducciones}`));
console.log(chalk.red(`Impuesto calculado: ${cliente.calcularImpuesto()}`));
