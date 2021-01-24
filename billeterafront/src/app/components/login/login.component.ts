import { AuthService } from './../../services/auth.service';
import { UsuarioLoginService } from '../../services/usuario-login.service';
import { LoginUsuarioModule } from '../../models/login-usuario/login-usuario.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css']
})
export class LoginComponent implements OnInit {

  public login: LoginUsuarioModule[];

  selectedLogin: LoginUsuarioModule = new LoginUsuarioModule();

  form: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router, private usuarioLoginService: UsuarioLoginService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    localStorage.removeItem('id');

    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit(login: LoginUsuarioModule) {
    if (this.form.invalid) {
      return;
    }
    else {
      this.authService.getToken(login).subscribe(resp => {
        localStorage.setItem('token', resp);
        localStorage.setItem('login', JSON.stringify(login));
        this.router.navigateByUrl('/main');
        console.log(resp);
      },
        err => {
          if (err.status == 401) alert("Compruebe su email o contraseña...")
        });
    }
    //console.log("Selected Login", this.selectedLogin);
    this.usuarioLoginService.getIdUsuario(login).subscribe(data => {
      let list = [];
      list = Object.values(data);
      localStorage.setItem('id', list[0]);
    });

    return this.selectedLogin;
  }
}
