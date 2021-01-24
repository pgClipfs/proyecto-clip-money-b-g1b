import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModificarUsuarioModule { 
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confirm_password: string;
  dni: string;
  genero: string;
  telefono : string;
  fechaNacimiento: Date;
  cuil_cuit: string;
  calle: string; 
  numero_de_calle: string;
  barrio: string;
  codigo_postal: number; 
  ciudad: string;
  estado : boolean;
}
