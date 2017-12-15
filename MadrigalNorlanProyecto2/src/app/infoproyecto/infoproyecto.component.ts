import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from '../proyectos';
import { ProyectoService } from '../proyecto.service';
import { Tareas } from '../tareas';
import { Estados } from '../estados';

@Component({
  selector: 'app-infoproyecto',
  templateUrl: './infoproyecto.component.html',
  styleUrls: ['./infoproyecto.component.css']
})
export class InfoproyectoComponent implements OnInit, OnDestroy {
  mostrarnuevatarea = { is_new: false, is_visible: false };
  agregarnuevatarea = { is_new: false, is_visible: false };
  proyectos: Proyectos;
  variableTareas: Tareas;
  nuevaTareas: Tareas;
  listaTareas: Tareas[];
  private sub: any;
  constructor(private route: ActivatedRoute, private service: ProyectoService) { }

  ngOnInit() {
    this.listaTareas = JSON.parse(localStorage.getItem('lsTareas') || '[]');
    this.variableTareas = new Tareas();
    this.sub = this.route.params.subscribe(params => {
    this.proyectos = this.service.encontrarPorNombre(params['nombre']);
    });
  }

  nuevotarea() {
    this.variableTareas = new Tareas();
    this.mostrarnuevatarea.is_visible = true;
    this.mostrarnuevatarea.is_new = true;
  }

  agregartarea() {
    this.variableTareas = new Tareas();
    this.agregarnuevatarea.is_visible = true;
    this.agregarnuevatarea.is_new = true;
  }

  guardartarea() {
    if (this.mostrarnuevatarea.is_new) {
      this.listaTareas.push(this.variableTareas);
    }
    localStorage.setItem('lsTareas',JSON.stringify(this.listaTareas));
    this.variableTareas = new Tareas();
    this.mostrarnuevatarea.is_visible = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  mover() {
    function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
    }
      var cols = document.querySelectorAll('#columns .column');
      [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
      });
  }

  eliminar(row) {
  this.mostrarnuevatarea.is_new = false;
  const index = this.listaTareas.indexOf(row, 0);
  if (index > -1) {
    this.listaTareas.splice(index, 1);
  }
  this.guardartarea();
}

agregar(row) {
this.mostrarnuevatarea.is_new = false;
this.listaTareas.splice(0, 1,this.nuevaTareas);
this.guardartarea();
}


}
