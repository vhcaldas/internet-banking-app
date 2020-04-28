import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ExtratoSaldo } from '../extrato/interface.extratoSaldo';
import { LoginResponse } from '../login/interface.login.response';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  erro = false;
  cliente: LoginResponse;
  extratoSaldo: ExtratoSaldo;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.http.get(`https://apiextrato20200428095025.azurewebsites.net/api/extrato/todos/${this.cliente.ContaCorrente}`)
    .subscribe((extrato: ExtratoSaldo) => {
      this.extratoSaldo = extrato;
    });
}


  onSubmit(form){
    if (!form.valid){
      form.controls.agencia.markAsTouched();
      form.controls.contacorrente.markAsTouched();
      form.controls.senha.markAsTouched();
    }
    console.log('Aqui envia');
  }

  msgError(nomeControle: string, form){
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
