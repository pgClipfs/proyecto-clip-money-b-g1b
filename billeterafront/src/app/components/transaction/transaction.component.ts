
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TransactionModule } from 'src/app/models/transaction/transaction.module';
import { AuxClassModule } from 'src/app/models/aux-class/aux-class.module';
import { TranferenciaService } from 'src/app/services/tranferencia.service';



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public aux: AuxClassModule = new AuxClassModule();
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder, private transferencia : TranferenciaService) { }

  ngOnInit(): void {
    let id = parseInt(localStorage.getItem('id'));

    this.form = this.fb.group({
      operacion: ['', [Validators.required]],
      cvu: ['', [Validators.required]],
      monto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });

  }
  get f() {
    return this.form.controls;
  }
  public onSubmit(aux: AuxClassModule) {
    if (this.form.invalid) {
      alert("Este formulario es invalido");
      return;
    }
      aux.idCuenta = JSON.parse(localStorage.getItem('id'));
    this.transferencia.createTransaction(aux).subscribe(data => {
     
      console.log(data);
   
    });



    return this.aux;
  }
}



