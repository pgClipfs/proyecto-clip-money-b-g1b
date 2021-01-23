import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuarioModule } from 'src/app/models/login-usuario/login-usuario.module';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['../../app.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public login: LoginUsuarioModule[];

  selectedLogin: LoginUsuarioModule = new LoginUsuarioModule();

  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private usuarioLoginService: UsuarioLoginService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit(login: LoginUsuarioModule) {
    if (this.form.invalid) {
      return;
    }else{
      console.log(login);
      this.router.navigateByUrl('/secretanswer');
      this.usuarioLoginService.allowPasswordChange(login).subscribe( data => {
        console.log(data);
      });
    }
    return this.selectedLogin;
  }

}
