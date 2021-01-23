import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['../../app.component.css']
})
export class TransferMoneyComponent implements OnInit {

  
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {

    if (this.form.invalid) {
      alert("Este formulario es invalido");
      return;
    }
    alert("cbu destino: ");
        //this.router.navigateByUrl('/ingresar');
  }
}
