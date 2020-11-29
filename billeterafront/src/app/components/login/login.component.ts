import { LoginUsuario } from './../../models/LoginUsuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userArray:LoginUsuario [] = []

  constructor(private router: Router) {

   }

  ngOnInit(): void {

  }

  submit( email: HTMLInputElement, password: HTMLInputElement){

    let isActive = false ;
    let currentEmail = email.value;
    let currentPassword = password.value;
    for (let i = 0; i < this.userArray.length; i++){
      if(this.userArray[i].email == currentEmail && this.userArray[i].password == currentPassword){
        isActive = true;
  }
}
    if(isActive){
      this.router.navigate(['/micuenta']);
    }
    else{
      alert(" usuario o contraseña incorrecta");

    }
    //blanquear input researt

    }
}
