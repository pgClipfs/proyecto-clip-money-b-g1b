import { AuthService } from './../../services/auth.service';
import { LoginUsuario } from './../../models/LoginUsuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator.component';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css']
})
export class LoginComponent implements OnInit {
  public mailsinguardar: boolean=false;
  public login: LoginUsuario[];
  
  //selectedLogin: LoginUsuario = new LoginUsuario();
  // agregado por mi 
  public usuarios: Usuario[]
  selectedUsuario: Usuario = new Usuario(); // Aca llama a la clase usuario del back??
  form: FormGroup = new FormGroup({});
  //selectedmailsinguardar: Mail = new this.mailsinguardar(); //COMO SERIA ESTO??

  constructor(private authService: AuthService, private usuarioService: UsuarioService, private route: Router, private fb: FormBuilder) { }//ultimo agregue yo

  ngOnInit(): void {
    localStorage.removeItem('token');

    //agregao
    this.usuarioService.getUsuarios().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp;
    });

    //agregado
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['',[Validators.required]]
    })
  }

  //agre
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  //public onSubmit(form: NgForm, login: LoginUsuario, mailsinguardar: boolean=false,){
  public onSubmit(login: LoginUsuario){
    /*if (form.invalid)
    {
      return;
    }
    else
    {
      this.authService.getToken(login).subscribe(resp =>{
        localStorage.setItem('token', resp);
        //this.router.navigateByUrl('/micuenta');
        this.route.navigateByUrl('/micuenta');
        console.log(resp);
      },
      err =>{
        if(err.status == 401) alert("Compruebe su email o contraseña...")
      });
    }*/
    //console.log("Selected Login", this.selectedLogin);
    console.log("Selected Login", this.selectedUsuario);
    //console.log("Selected mail", this.selectedLogin.email);
    console.log("Selected mail", this.selectedUsuario.email);
    //if(this.selectedLogin.email == 'mail'){
      if(this.selectedUsuario.email == 'mail'){
      alert("Tu mail no esta registrado, quieres crear una cuenta nueva?");
      //public mailsinguardar: boolean=true;
      //mailsinguardar:boolean=false;
    }
    //return this.selectedLogin;
    return this.selectedUsuario;
  }
}
