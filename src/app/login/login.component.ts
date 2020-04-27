import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erro = false;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form){
    if (!form.valid){
      form.controls.agencia.markAsTouched();
      form.controls.password.markAsTouched();
    }
    this.loginService.getLogin(form.value)
    .subscribe(response => {
      console.log(response);
      if(response != null){
        this.router.navigate(['/home']);
      } else {
        return this.erro = true;
      }
    });

  }

  msgError(nomeControle: string, form){
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
