import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  public usuarios: Usuario[]
  selectedUsuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private route: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp;
    });
  }

  public onSubmit(usuario: Usuario) {
    if (usuario.id == 0) {
      this.usuarioService.onCreateUsuario(usuario).subscribe(resp => {
        this.usuarios.push(resp);
      })
    }
    else {
      this.usuarioService.onUpdateUsuario(usuario).subscribe(resp => {

      })
    }
    console.log(this.selectedUsuario);
    this.selectedUsuario = new Usuario();
    alert('Se creo tu cuenta correctamente');
    this.route.navigateByUrl('/ingresar');
  }

}


