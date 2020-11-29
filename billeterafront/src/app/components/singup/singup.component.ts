import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';
import { Router} from '@angular/router';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  userArray:Usuario [] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submit( email:HTMLInputElement, password: HTMLInputElement,passwordrepetead:HTMLInputElement){
    let currentEmail = email.value;
    let currentPassword = password.value;
    for (let i = 0; i < this.userArray.length; i++){
       if(this.userArray[i].email == currentEmail){
        alert("Existe un usuario registrado con esta cuenta de correo");
        console.log(currentEmail);
       }
       else if(currentPassword == passwordrepetead.value){
         alert("las contraseñas coinciden")

         //validacion de contraseña
       }
      }
    }
    // onClick (){
    //   this.router.navigate(['/micuenta']);

    // }
  //usuario1 = new Usuario ;
  //fijar si el nombre de usaurio existe
  //si si crear sino  devolver que genere uno nuevo
  // this.router.navigate(['/micuenta']);
  }
  // onChange(password: HTMLInputElement){
  //   //variable local
  //   //for para recorrer password
  // }


