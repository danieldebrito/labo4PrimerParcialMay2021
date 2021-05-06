import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './pages/alta/alta.component';
import { RepartidorDetalleComponent } from './pages/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  { path: 'alta', component: AltaComponent},
  { path: 'detalle', component: RepartidorDetalleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
