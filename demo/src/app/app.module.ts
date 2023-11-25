import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { PedidosdetailsComponent } from './components/pedidos/pedidosdetails/pedidosdetails.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { ProdutosdetailsComponent } from './components/produtos/produtosdetails/produtosdetails.component';
import { httpInterceptorProviders } from './interceptors/httpinterceptor.service';
import { SaboreslistComponent } from './components/sabores/saboreslist/saboreslist.component';
import { SaboresdetailsComponent } from './components/sabores/saboresdetails/saboresdetails.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { DragComponent } from './components/layout/drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDrag,CdkDropList,CdkDropListGroup} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    PedidoslistComponent,
    PedidosdetailsComponent,
    ProdutoslistComponent,
    ProdutosdetailsComponent,
    SaboreslistComponent,
    SaboresdetailsComponent,
    DashboardComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag

  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
