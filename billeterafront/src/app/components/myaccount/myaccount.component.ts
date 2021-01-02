import { LoginComponent } from './../login/login.component';
import { ModificarUsuario } from './../../models/ModificarUsuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, PatternValidator} from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['../../app.component.css']
})
export class MyaccountComponent implements OnInit {
  public usuarios: ModificarUsuario[];
  selectedUsuario: ModificarUsuario = new ModificarUsuario();
  form: FormGroup = new FormGroup({});

  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode <9 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }


  constructor(private usuarioService: UsuarioService, private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp;
    });
    // this.form = new FormGroup({
    this.form = this.fb.group({


      email: new FormControl(this.email, [Validators.required]),
      name: new FormControl( this.name, [Validators.required,Validators.minLength(4),]),
      lastname: new FormControl(this.lastname, [
      Validators.required,
         Validators.minLength(4),

       ]),
     dni: new FormControl(this.dni,  [
        Validators.required,
        Validators.maxLength(8),

       ]),
       frontdni: new FormControl(this.frontdni,  [
        Validators.required,

       ]),
       backdni: new FormControl(this.backdni,  [
        Validators.required,

       ]),
       street: new FormControl(this.street,  [
        Validators.required,

       ]),
       neighborhood: new FormControl(this.neighborhood,  [
        Validators.required,

       ]),
      streetnumber: new FormControl(this.streetnumber,  [
        Validators.required,

       ]),
       zip: new FormControl(this.zip,  [
        Validators.required,

       ]),
        city: new FormControl(this.city,  [
        Validators.required,

       ]),
       secretanswer: new FormControl(this.secretanswer,  [
        Validators.required,

       ])


    });
    // this.form = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(3)]],
    //   lastname: ['', [Validators.required, Validators.minLength(3)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   dni: ['', [Validators.required, Validators.maxLength(8)]],
    //   gender:['',[Validators.required]],
    //   frontdni: ['', [Validators.required]],
    //   backdni: ['', [Validators.required]],
    //   date: ['', [Validators.required]],
    //   street: ['', [Validators.required]],
    //   streetnumber: ['', [Validators.required]],
    //   neighborhood: ['', [Validators.required]],
    //   postalcode: ['', [Validators.required]],
    //   city: ['', [Validators.required]],
    //   secretanswer: ['', [Validators.required]],


    // });


  }
  get FormGroup(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
  get name() { return this.form.get('name'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get dni() { return this.form.get('dni'); }
  get gender() {return this.form.get('dni');}
  get date() {return this.form.get('date');}
  get frontdni() { return this.form.get('frontdni'); }
  get backdni() { return this.form.get('backdni'); }
  get street() { return this.form.get('street'); }
  get neighborhood() { return this.form.get('neighborhood'); }
  get streetnumber() { return this.form.get('streetnumber'); }
  get zip() { return this.form.get('zip'); }
  get city() { return this.form.get('city'); }
  get secretanswer() { return this.form.get('secretanswer'); }















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
