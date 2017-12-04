import { Component, OnInit } from '@angular/core';
import { Estados } from '../estados';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  listaEstados: Estados[];
  variableEstado: Estados;
  mostrarManteEstado= { is_new: false, is_visible: false };

  constructor() { }

  ngOnInit() {
    this.listaEstados = JSON.parse(localStorage.getItem('lsEstados') || '[]');
    this.variableEstado = new Estados();
  }

  nuevo() {
    this.variableEstado = new Estados();
    this.mostrarManteEstado.is_visible = true;
    this.mostrarManteEstado.is_new = true;
  }

  guardar() {
    if (this.mostrarManteEstado.is_new) {
      this.listaEstados.push(this.variableEstado);
    }
    localStorage.setItem('lsEstados',JSON.stringify(this.listaEstados));
    this.variableEstado = new Estados();
    this.mostrarManteEstado.is_visible = false;
  }

  editar(row) {
  this.mostrarManteEstado.is_visible = true;
  this.mostrarManteEstado.is_new = false;
  this.variableEstado = row;
}

  eliminar(row) {
  this.mostrarManteEstado.is_new = false;
  const index = this.listaEstados.indexOf(row, 0);
  if (index > -1) {
    this.listaEstados.splice(index, 1);
  }
  this.guardar();
}

}
