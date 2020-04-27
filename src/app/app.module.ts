import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada/rota-nao-encontrada.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { PagefinalComponent } from './pagefinal/pagefinal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ExtratoComponent,
    HomeComponent,
    RotaNaoEncontradaComponent,
    TransferenciaComponent,
    PagefinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
