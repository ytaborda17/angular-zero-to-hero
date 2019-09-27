import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  public title = 'Componente de empleados';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public color_seleccionado: string;

  constructor() {
    this.empleado = new Empleado('Rosa', 45, 'Espia', true);
    this.trabajadores = [
      new Empleado('Elsa', 21, 'Bruja', true),
      new Empleado('Ana', 18, 'Guerrera', true),
      new Empleado('Olaf', 3, 'Snowman', false)
    ];

    this.color_seleccionado = '#ccc';
    console.log(this.color_seleccionado);
  }

  ngOnInit() {
    //console.log(this.trabajadores);
  }
}