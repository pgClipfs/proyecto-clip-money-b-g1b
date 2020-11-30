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

  constructor(private usuarioService : UsuarioService) { }


  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(resp =>{
      console.log(resp);
    })

  }

}
