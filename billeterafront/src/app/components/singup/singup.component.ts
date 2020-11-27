import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';
import { Router} from '@angular/router';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
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





  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submit(usuario: HTMLInputElement, password: HTMLInputElement,passwordrepetead:HTMLInputElement, email:HTMLInputElement){
    for (let i = 0; i < this.userArray.length; i++){
       if(this.userArray[i].usuario == usuario.value){
        alert("Nombre de usuario utilizado, prueba con otro nombre de usuario");
       }
       else{
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


