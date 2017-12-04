import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../proyectos';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-proyectos-crud',
  templateUrl: './proyectos-crud.component.html',
  styleUrls: ['./proyectos-crud.component.css']
})
export class ProyectosCrudComponent implements OnInit {
  listaproyectos: Proyectos[];
  variableProyecto: Proyectos;
  mostrarManteProyectos = { is_new: false, is_visible: false };
  constructor(private service: ProyectoService) { }

  ngOnInit() {
    this.listaproyectos = this.service.leer();
    this.variableProyecto = new Proyectos();
  }

  nuevo() {
    this.variableProyecto = new Proyectos();
    this.mostrarManteProyectos.is_visible = true;
    this.mostrarManteProyectos.is_new = true;
  }

  guardar() {
    if (this.mostrarManteProyectos.is_new) {
      this.listaproyectos.push(this.variableProyecto);
    }
    this.service.guardar(this.listaproyectos);
    this.variableProyecto = new Proyectos();
    this.mostrarManteProyectos.is_visible = false;
  }

  editar(row) {
  this.mostrarManteProyectos.is_visible = true;
  this.mostrarManteProyectos.is_new = false;
  this.variableProyecto = row;
}

  eliminar(row) {
  this.mostrarManteProyectos.is_new = false;
  const index = this.listaproyectos.indexOf(row, 0);
  if (index > -1) {
    this.listaproyectos.splice(index, 1);
  }
  this.guardar();
}
}
