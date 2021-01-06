import { Component, OnInit } from '@angular/core';
// AGREGADO
import { LoginUsuarioModule } from '../../models/login-usuario/login-usuario.module';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['../../app.component.css']
})
export class ResetpasswordComponent implements OnInit {
  // AGREGADO
  public login: LoginUsuarioModule[];
  selectedLogin: LoginUsuarioModule = new LoginUsuarioModule();
  form: FormGroup = new FormGroup({});
  //constructor() { }
  constructor(private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
     //agregado
  this.form = this.fb.group({
    email: ['', [Validators.required]]
  })
  }
  get f() {
    return this.form.controls;
  }
  
  //submit(email: HTMLInputElement){  }
  public onSubmit(login: LoginUsuarioModule) {
    //if (form.invalid) {
    console.log(this.selectedLogin.email); 
    if (this.form.invalid) {
      return;
    }
    else {
      this.router.navigateByUrl('/secretanswer');
    return this.selectedLogin;
  }
  }

}
