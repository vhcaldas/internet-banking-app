import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  agencia: number;
  conta: number;
  password: any;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getLogin()
    .subscribe(response => {
      console.log(response);
    });
  }

  onSubmit(form){
    if (!form.valid){
      form.controls.agencia.markAsTouched();
      form.controls.password.markAsTouched();
    }
    console.log(this.agencia);
    console.log(this.conta);
    console.log(this.password);
  }

  msgError(nomeControle: string, form){
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
