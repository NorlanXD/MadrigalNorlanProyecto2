import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../proyectos';

@Component({
  selector: 'app-proyectos-crud',
  templateUrl: './proyectos-crud.component.html',
  styleUrls: ['./proyectos-crud.component.css']
})
export class ProyectosCrudComponent implements OnInit {
  listaproyectos: Proyectos[];
  variableProyecto: Proyectos;
  mostrarManteProyectos: { is_new: false, is_visible: false };
  constructor() { }

  ngOnInit() {
    this.listaproyectos = JSON.parse(localStorage.getItem('lsProyectos') || '[]');
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
    localStorage.setItem('lsProyectos',JSON.stringify(this.listaproyectos));
    this.variableProyecto = new Proyectos();
    this.mostrarManteProyectos.is_visible = false;
  }

}
