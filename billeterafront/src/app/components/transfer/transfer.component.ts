import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {TransferModule} from '../../models/transfer/transfer.module';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['../../app.component.css']
})
export class TransferComponent implements OnInit {
  public transfer: TransferModule [];
  selectedTransfer: TransferModule = new TransferModule();

  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    let id = parseInt(localStorage.getItem('id'));

      this.form = this.fb.group({
        cvu: ['', [Validators.required]],
        monto: ['', [Validators.required]],
        descripcion: ['', [Validators.required]]
    });
  }
  get f() {
    return this.form.controls;
  }

  public onSubmit(transfer: TransferModule) {
    // ESTO VA??  usuario.id = parseInt(localStorage.getItem('id'));

    if (this.form.invalid) {
      alert("Este formulario es invalido");
      return;
    }
    this.selectedTransfer = new TransferModule();
    alert(this.selectedTransfer.descripcion);
    return this.selectedTransfer;
  }
}