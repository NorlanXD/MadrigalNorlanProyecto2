import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasComponent } from './personas/personas.component';
import { EstadosComponent } from './estados/estados.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'estados', component: EstadosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
