import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './auth/guards/usuario.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bienvenido',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'repartidor',
    loadChildren: () => import('./repartidor/repartidor.module').then(m => m.RepartidorModule),
    canActivate: [UsuarioGuard],
  },
  {
    path: '',
    loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaModule),
    canActivate: [UsuarioGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
