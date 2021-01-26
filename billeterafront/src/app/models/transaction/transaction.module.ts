import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TransactionModule {
  Id: number;
  Id_billetera: number;
  Id_cuentaDestino: number;
  Id_operacion: number;
  Monto: number;
  Descripcion: string;
  Fecha: Date;
}

