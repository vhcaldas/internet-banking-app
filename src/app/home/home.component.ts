import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ExtratoSaldo } from '../extrato/interface.extratoSaldo';
import { LoginResponse } from '../login/interface.login.response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 cliente: LoginResponse;
 extratoSaldo: ExtratoSaldo;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.http.get(`https://apiextrato20200428095025.azurewebsites.net/api/extrato/todos/${this.cliente.ContaCorrente}`)
    .subscribe((extrato: ExtratoSaldo) => {
      this.extratoSaldo = extrato;
      console.log(this.extratoSaldo);
    });

  }
}
