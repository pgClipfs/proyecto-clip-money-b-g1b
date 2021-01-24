import { UsuarioModule } from '../models/usuario/usuario.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModificarUsuarioModule } from '../models/modificar-usuario/modificar-usuario.module';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "https://localhost:44300/api/usuario"; //cambiar url //revision
  list: UsuarioModule[];

  constructor(private http: HttpClient) {
    console.log("UsuarioModule service is running");
  }

  getUsuarios(): Observable<UsuarioModule[]> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<UsuarioModule[]>(this.url);
  }

  onDeleteUsuario(id: number): Observable<number> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<number>(this.url + "/" + id);
  }

  onCreateUsuario(usuario: UsuarioModule): Observable<UsuarioModule> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<UsuarioModule>(this.url, usuario);
  }

  onUpdateUsuario(usuario: UsuarioModule): Observable<ModificarUsuarioModule> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<ModificarUsuarioModule>(this.url, usuario);
  }
}