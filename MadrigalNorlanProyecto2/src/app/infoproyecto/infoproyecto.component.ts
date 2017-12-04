import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from '../proyectos';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-infoproyecto',
  templateUrl: './infoproyecto.component.html',
  styleUrls: ['./infoproyecto.component.css']
})
export class InfoproyectoComponent implements OnInit, OnDestroy {

  proyectos: Proyectos;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: ProyectoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.proyectos = this.service.encontrarPorNombre(params['name']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
