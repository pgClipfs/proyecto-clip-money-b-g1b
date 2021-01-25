import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { 
  id: number = 0;
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  password: string;
  confirm_password: string;
  fechaNacimiento: Date;
  cuil_cuit: string;
  estado : boolean;
  telefono: string;
}
