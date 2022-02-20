import { Empleado } from './empleado';

export class Comercial extends Empleado {
  private comision: number;

  public constructor(nombre: string, edad: number, salario: number, comision: number) {
    super(nombre, edad, salario);
    this.comision = comision;
  }

  public getComision(): number {
    return this.comision;
  }

  public setComision(comision: number): void {
    this.comision = comision;
  }

  public toString(): string {
    return `${super.toString()} comision = ${this.comision}`;
  }

  public plus(): boolean {
    if (this.getEdad() > 30 && this.comision > 200) {
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
