import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { rotaguardGuard } from './guards/rotaguard.guard';
import { SaboreslistComponent } from './components/sabores/saboreslist/saboreslist.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { DragComponent } from './components/layout/drag/drag.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, canActivate: [rotaguardGuard], children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "pedidos", component: PedidoslistComponent },
      { path: "produtos", component: ProdutoslistComponent },
      { path: "sabores", component: SaboreslistComponent },
      { path: "drag", component: DragComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
