import { AuthService } from './../../services/auth.service';
import { LoginUsuario } from './../../models/LoginUsuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public login: LoginUsuario[];
  selectedLogin: LoginUsuario = new LoginUsuario();

  constructor(private authService: AuthService, private router: Router) {

   }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  public onSubmit(form: NgForm, login: LoginUsuario){
    if (form.invalid)
    {
      return;
    }
    else
    {
      this.authService.getToken(login).subscribe(resp =>{
        localStorage.setItem('token', resp);
        this.router.navigateByUrl('/micuenta');
        console.log(resp)
      },
      err =>{
        if(err.status == 401) alert("Compruebe su email o contraseña...")
      });
    }
    console.log(this.selectedLogin);
  }
}
