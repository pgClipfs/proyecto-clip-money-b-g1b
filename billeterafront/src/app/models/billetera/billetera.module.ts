import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BilleteraModule { 
    Id: number;
    Nombre: string;
    Cvu: string;
    TipoDeCuenta: string;
    Alias: string;
    NumeroDeCuenta: string;
    SituacionCrediticia: string;
    IdCuenta: number;
    NombreCuenta: string;
    Saldo: number;
  
}
