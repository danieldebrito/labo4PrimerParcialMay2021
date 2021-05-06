import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepartidorRoutingModule } from './repartidor-routing.module';
import { AltaComponent } from './pages/alta/alta.component';
import { RepartidorAltaFormComponent } from './components/repartidor-alta-form/repartidor-alta-form.component';
import { PaisesModule } from '../paises/paises.module';
import { RepartidorDetalleComponent } from './pages/repartidor-detalle/repartidor-detalle.component';
import { RepartidorInfoDetalleComponent } from './components/repartidor-info-detalle/repartidor-info-detalle.component';
import { RepartidorListadoComponent } from './components/repartidor-listado/repartidor-listado.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AltaComponent,
    RepartidorAltaFormComponent,
    RepartidorDetalleComponent,
    RepartidorInfoDetalleComponent,
    RepartidorListadoComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    PaisesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class RepartidorModule { }
