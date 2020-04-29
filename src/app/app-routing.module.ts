import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagefinalComponent } from './pagefinal/pagefinal.component';
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada/rota-nao-encontrada.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';



const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, {
  path: 'login',
  component: LoginComponent,
  }, {
    path: 'extrato',
    component: ExtratoComponent,
  }, {
    path: 'transferencia',
    component: TransferenciaComponent
  }, {
    path: 'pagefinal',
    component: PagefinalComponent
  }, {
    path: 'sucesso',
    component: SucessoComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '**',
    component: RotaNaoEncontradaComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
