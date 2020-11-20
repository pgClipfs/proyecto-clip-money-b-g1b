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
    {id: 1, usuario:"admin", password:"password123"},
    {id: 2, usuario:"admin1", password:"password124"},
    {id: 3, usuario:"admin2", password:"password125"}
    ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(usuario: HTMLInputElement, password: HTMLInputElement){
    for (let i = 0; i < this.userArray.length; i++){
      if(this.userArray[i].usuario == usuario.value && this.userArray[i].password == password.value){
        this.router.navigate(['/micuenta']);
    }
    }
    }

}
