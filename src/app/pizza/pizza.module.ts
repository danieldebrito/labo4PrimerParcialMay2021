import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaAltaComponent } from './pages/pizza-alta/pizza-alta.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaDetalleComponent } from './components/pizza-detalle/pizza-detalle.component';
import { PizzaBorrarComponent } from './components/pizza-borrar/pizza-borrar.component';


@NgModule({
  declarations: [
    PizzaAltaComponent,
    PizzaFormComponent,
    PizzaDetalleComponent,
    PizzaBorrarComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PizzaModule { }
