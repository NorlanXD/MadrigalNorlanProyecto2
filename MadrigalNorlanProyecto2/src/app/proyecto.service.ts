import { Injectable } from '@angular/core';
import { Proyectos} from './proyectos';

@Injectable()
export class ProyectoService {
  listaproyectos: Proyectos[];
  constructor() {
    this.listaproyectos = JSON.parse(localStorage.getItem('proyectos') || '[]');
  }

  leer() {
    this.listaproyectos = JSON.parse(localStorage.getItem('proyectos') || '[]');
    return this.listaproyectos;
  }

  guardar(listaproyectos: Proyectos[]) {
    this.listaproyectos = listaproyectos;
    localStorage.setItem('proyectos', JSON.stringify(this.listaproyectos));
  }

  encontrarPorNombre(nombre: string) {
    return this.listaproyectos.find(x => x.nombre === nombre);
  }

}
