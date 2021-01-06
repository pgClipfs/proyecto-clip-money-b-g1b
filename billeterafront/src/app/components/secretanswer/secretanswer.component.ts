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
      console.log(this.selectedLogin.preguntasecreta);
      console.log('aqui');
      console.log(this.form.value);
      this.router.navigateByUrl('/login');
    return this.selectedLogin;
  }
  }

}
