import { Empleado } from './empleado';
import { Repartidor } from './repartidor';
import { Comercial } from './comercial';

class Entregable {
  readonly emp1: Empleado = new Repartidor('Gabriel', 50, 200, 'zona 2');
  readonly emp2: Empleado = new Repartidor('Alan', 22, 2000, 'zona 1');
  readonly com1: Empleado = new Comercial('Adrian', 50, 5000, 300);
  readonly com2: Empleado = new Comercial('Alberto', 28, 3000, 100);

  constructor() {
    this.com1.plus();
    this.com2.plus();
    this.emp1.plus();
    this.emp2.plus();
  }
}

const Entregable2 = new Entregable();
console.log(Entregable2);
