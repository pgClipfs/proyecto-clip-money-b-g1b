import { LoginComponent } from './../login/login.component';
import { ModificarUsuario } from './../../models/ModificarUsuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['../../app.component.css']
})
export class MyaccountComponent implements OnInit {
  public usuarios: ModificarUsuario[]
  selectedUsuario: ModificarUsuario = new ModificarUsuario();

  constructor(private usuarioService: UsuarioService, private route: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp;
    });
  }

  public onSubmit(usuario: ModificarUsuario) {
    if (usuario.id) {
      console.log(usuario.id);
      this.usuarioService.onUpdateUsuario(usuario).subscribe(resp => {
        this.usuarios.push(resp);
        console.log(resp)
      })
    }
    console.log(this.selectedUsuario);
    this.selectedUsuario = new ModificarUsuario();
    alert('Datos completados correctamente');
    this.route.navigateByUrl('');
  }

}
