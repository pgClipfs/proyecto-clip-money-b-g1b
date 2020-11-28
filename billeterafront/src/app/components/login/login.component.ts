import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userArray:Usuario [] = [
    {id: 1, email: "felisabarberag@gmail.com", password:"felisa123"},
    {id: 2, email: "felipeilla@hotmail.com",  password:"felipe123"},
    {id: 3, email: "federico.kiwam@gmail.com", password:"federico123"},
    {id: 4, email: "greta.pereda@gmail.com", password:"greta123"},
    {id: 5, email: "eze.heredia023@gmail.com",  password:"markus123"},
    {id: 6, email: "eze.aballay@gmail.com", password:"ezequiel123"},
    {id: 7, email: "gimena.befer@gmail.com" , password:"gimena123"},
    {id: 8, email: "gonzalo5aguirre9@gmail.com", password:"gonzalo123"},
    {id: 9, email: "fran.ayrolo@gmail.com", password:"francisco123"},

    ]

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
