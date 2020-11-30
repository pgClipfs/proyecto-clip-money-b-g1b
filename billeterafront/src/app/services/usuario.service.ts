import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url="https://localhost:44300/api/usuario"; //cambiar url //revision
  list : Usuario[];

  constructor(private http:HttpClient) {
    console.log("Usuario service is running");
   }

  getUsuarios(): Observable<Usuario[]>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get<Usuario[]>(this.url);
  }

  onDeleteUsuario(id:number): Observable<number>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.delete<number>(this.url + "/" + id);
  }

  onCreateUsuario(usuario:Usuario): Observable<Usuario>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<Usuario>(this.url, usuario);
  }

  onUpdateUsuario (usuario:Usuario): Observable<Usuario>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put<Usuario>(this.url, usuario);
  }

  

}
