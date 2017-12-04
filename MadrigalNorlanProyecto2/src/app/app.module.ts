import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasComponent } from './personas/personas.component';
import { EstadosComponent } from './estados/estados.component';
import { InfoproyectoComponent } from './infoproyecto/infoproyecto.component';
import { ProyectoService } from './proyecto.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProyectosCrudComponent,
    PersonasComponent,
    EstadosComponent,
    InfoproyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
