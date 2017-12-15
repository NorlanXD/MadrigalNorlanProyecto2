import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasComponent } from './personas/personas.component';
import { EstadosComponent } from './estados/estados.component';
import { InfoproyectoComponent } from './infoproyecto/infoproyecto.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'estados', component: EstadosComponent },
  { path: 'proyectos/:nombre', component: InfoproyectoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
