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
    {id: 1, usuario:"felisa", password:"felisa123"},
    {id: 2, usuario:"felipe", password:"felipe123"},
    {id: 3, usuario:"federico", password:"federico123"},
    {id: 4, usuario:"greta", password:"greta123"},
    {id: 5, usuario:"markus", password:"markus123"},
    {id: 6, usuario:"ezequiel", password:"ezequiel123"},
    {id: 7, usuario:"gimena", password:"gimena123"},
    {id: 8, usuario:"gonzalo", password:"gonzalo123"},
    {id: 9, usuario:"franciso", password:"francisco123"},

    ]

  constructor(private router: Router) {

   }

  ngOnInit(): void {

  }

  submit(usuario: HTMLInputElement, password: HTMLInputElement){

    let centinela = false ;
    let currentUser = usuario.value;
    let currentPassword = password.value;
    for (let i = 0; i < this.userArray.length; i++){
      if(this.userArray[i].usuario == currentUser && this.userArray[i].password == currentPassword){
        centinela = true;
  }
}
    if(centinela){
      this.router.navigate(['/micuenta']);
    }
    else{
      alert(" usuario o contraseña incorrecta");

    }
    //blanquear input researt

    }
}
