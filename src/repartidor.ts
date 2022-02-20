import { Empleado } from './empleado';

export class Repartidor extends Empleado {
  private zona: string;

  public constructor(nombre: string, edad: number, salario: number, zona: string) {
    super(nombre, edad, salario);
    this.zona = zona;
  }

  public getZona(): string {
    return this.zona;
  }

  public setZona(zona: string): void {
    this.zona = zona;
  }

  public toString(): string {
    return `${super.toString()} zona = ${this.zona}`;
  }

  public plus(): boolean {
    if (this.getEdad() <= 23 && this.zona === 'zona 1') {
      const nuevoSalario: number = this.getSalario() + this.PLUS;
      this.setSalario(nuevoSalario);
      console.log(`Se aumento el salarios a ${nuevoSalario} a ${this.getNombre()}`);
      return true;
    } else {
      console.log(`No se aumenta el salario ya no cumple con los requisitos.`);
      return false;
    }
  }
}
