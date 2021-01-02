import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuarioModule } from '../models/login-usuario/login-usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  url="https://localhost:44300/api/usuarioLogin";

  constructor(private http:HttpClient) { 
    console.log("UsuarioLogin service is running");
  }

  getIdUsuario(login: LoginUsuarioModule): Observable<LoginUsuarioModule>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<LoginUsuarioModule>(this.url, login);
  }
}
