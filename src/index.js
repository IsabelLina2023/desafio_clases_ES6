import {Cliente} from './assets/js/cliente.js';
import { Impuesto } from './assets/js/impuesto.js';

let c1 = new Cliente('Mary');
let c2 = new Cliente('Pedro');

c1.impuesto = new Impuesto(25000, 300);
c2.impuesto = new Impuesto(8000, 200);

console.log(c1.calcularImpuesto());
console.log(c2.calcularImpuesto());