import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaAltaComponent } from './pages/pizza-alta/pizza-alta.component';

const routes: Routes = [
  { path: 'altaPizza', component: PizzaAltaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
