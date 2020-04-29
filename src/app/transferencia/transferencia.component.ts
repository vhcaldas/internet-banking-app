import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExtratoSaldo } from '../extrato/interface.extratoSaldo';
import { LoginResponse } from '../login/interface.login.response';
import { Transferencia } from './interface.transferencia';
import { TransferenciaService } from './transferencia.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  erro = false;
  cliente: LoginResponse;
  extratoSaldo: ExtratoSaldo;
  transferencia: Transferencia;

  constructor(
    private router: Router,
    private transferenciaService: TransferenciaService,
    private http: HttpClient) { }

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

    this.transferencia = form.value;
    this.transferencia.IdCliente = this.cliente.ContaCorrente;
    this.transferencia.valor = this.transferencia.valor * (-1);
    this.transferenciaService.getTransferencia(this.transferencia)
    .subscribe(response => {
      console.log(response);
      if (response != null){
        this.router.navigateByUrl('/pagefinal');
      } else {
        return this.erro = true;
      }
    });

    console.log(this.transferencia);
  }

  msgError(nomeControle: string, form){
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
