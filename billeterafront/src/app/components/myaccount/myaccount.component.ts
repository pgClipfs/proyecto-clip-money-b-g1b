import { ModificarUsuarioModule } from '../../models/modificar-usuario/modificar-usuario.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['../../app.component.css']
})
export class MyaccountComponent implements OnInit {
  public usuarios: ModificarUsuarioModule[]
  selectedUsuario: ModificarUsuarioModule = new ModificarUsuarioModule();

  constructor(private usuarioService: UsuarioService, private route: Router) { }

  ngOnInit(): void {
    let id = parseInt(localStorage.getItem('id'));
  }

  public onSubmit(usuario: ModificarUsuarioModule) {
    usuario.id = parseInt(localStorage.getItem('id'));
    if (usuario.id) {
      console.log(usuario.id);
      this.usuarioService.onUpdateUsuario(usuario).subscribe(resp => {
        this.usuarios.push(resp);
        console.log(resp)
      })
    }
    console.log(this.selectedUsuario);
    this.selectedUsuario = new ModificarUsuarioModule();
    console.log(this.selectedUsuario.fechaNacimiento);
    alert('Datos completados correctamente');
    this.route.navigateByUrl('');
    return this.selectedUsuario;
  }
  
}