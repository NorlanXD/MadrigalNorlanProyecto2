import { Component, OnInit } from '@angular/core';
import { Personas } from '../personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  listapersonas: Personas[];
  variablePersonas: Personas;
  mostrarMantePersonas: { is_new: false, is_visible: false };
  constructor() { }

  ngOnInit() {
    this.listapersonas = JSON.parse(localStorage.getItem('lsPersonas') || '[]');
    this.variablePersonas = new Personas();
  }

  nuevo() {
    this.variablePersonas = new Personas();
    this.mostrarMantePersonas.is_visible = true;
    this.mostrarMantePersonas.is_new = true;
  }

  guardar() {
      this.listapersonas.push(this.variablePersonas);
    localStorage.setItem('lsPersonas',JSON.stringify(this.listapersonas));
    this.variablePersonas = new Personas();
    this.mostrarMantePersonas.is_visible = false;
  }

}
