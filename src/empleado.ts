export abstract class Empleado {
  private nombre: string;
  private edad: number;
  private salario: number;

  public readonly PLUS: number = 300;

  protected constructor(nombre: string, edad: number, salario: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.salario = salario;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number) {
    this.edad = edad;
  }

  public getSalario(): number {
    return this.salario;
  }

  public setSalario(salario: number) {
    this.salario = salario;
  }

  public toString(): string {
    return `nombre = ${this.nombre}, edad = ${this.edad}, salario, ${this.salario}`;
  }

  abstract plus(): boolean;
}
