import { Component, OnInit } from '@angular/core';
import { ModificarUsuarioModule } from '../../models/modificar-usuario/modificar-usuario.module';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretanswer',
  templateUrl: './secretanswer.component.html',
  styleUrls: ['../../app.component.css']
})
export class SecretanswerComponent implements OnInit {
  public login: ModificarUsuarioModule[];
  selectedLogin: ModificarUsuarioModule = new ModificarUsuarioModule();
  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      secretanswer: ['', [Validators.required]] //Un tercer corchete trae validaciones del back
    })
  }

  public onSubmit(login: ModificarUsuarioModule) {
    //if (form.invalid) {
    if (this.form.invalid) {
      return;
    }
    else {
      console.log('this.form.value: '+this.form.value);
      if (this.selectedLogin.preguntasecreta == "respuesta"){
        alert('respondo correcti');
        this.router.navigateByUrl('/login');
      }
      else{
        alert('Respuesta Incorrecta, pruebe nuevamente');
        this.router.navigateByUrl('/secretanswer').then(() => {
          window.location.reload();
        });
      }
    return this.selectedLogin;
  }
  }
}
