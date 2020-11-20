import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario}  from '../../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios: Usuario[];

  constructor() { }
  //private UsuarioService: UsuarioService
  //linea 14 : dentro del parametro del constructor

  ngOnInit(): void {
    // this.UsuarioService.getPersona().subscribe(resp =>{
    //   console.log(resp);
    // })

  }
  login()
  {
    alert(" hacer función para ingresar");
    //TOMAR VALOR DE INPUT USUARIO
    //TOMAR VAVAOR DE INPUT CONTRASEÑA


  }
  nuevoUsuario(){
    alert(" hacer función para ingresar");

  }

}
