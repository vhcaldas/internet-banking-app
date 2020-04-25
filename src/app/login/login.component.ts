import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  agencia: number;
  conta: number;
  password: any;

  constructor() { }

  ngOnInit(): void {
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

}
