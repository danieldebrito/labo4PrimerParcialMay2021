import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepartidorRoutingModule } from './repartidor-routing.module';
import { AltaComponent } from './pages/alta/alta.component';
import { RepartidorAltaFormComponent } from './components/repartidor-alta-form/repartidor-alta-form.component';
import { PaisesModule } from '../paises/paises.module';



@NgModule({
  declarations: [
    AltaComponent,
    RepartidorAltaFormComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    PaisesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RepartidorModule { }
