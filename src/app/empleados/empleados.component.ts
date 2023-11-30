import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})

export class EmpleadosComponent {
  empleados = [
    { id: 1, nombre: "Alice", sueldo: 10000, activo: false },
    { id: 2, nombre: "Bob", sueldo: 11500, activo: true },
    { id: 3, nombre: "Charlie", sueldo: 9800, activo: true },
    { id: 4, nombre: "David", sueldo: 12200, activo: false },
    { id: 5, nombre: "Eve", sueldo: 9500, activo: true },
    { id: 6, nombre: "Frank", sueldo: 11800, activo: false },
    { id: 7, nombre: "Grace", sueldo: 13000, activo: true },
    { id: 8, nombre: "Hannah", sueldo: 8700, activo: true },
    { id: 9, nombre: "Isaac", sueldo: 14600, activo: false },
    { id: 10, nombre: "Julia", sueldo: 15000, activo: true }
  ];
}
