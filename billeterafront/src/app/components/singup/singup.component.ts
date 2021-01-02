import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator.component';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['../../app.component.css']
})
export class SingupComponent implements OnInit {
  public usuarios: Usuario[]
  selectedUsuario: Usuario = new Usuario();
  form: FormGroup = new FormGroup({});

  constructor(private usuarioService: UsuarioService, private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp;
    });
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['',[Validators.required]]
    },
    {
      validator: ConfirmedValidator( 'password', 'confirm_password'),
    })
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
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

