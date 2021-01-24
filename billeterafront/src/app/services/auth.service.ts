import { Observable } from 'rxjs';
import { LoginUsuarioModule } from '../models/login-usuario/login-usuario.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://localhost:44300/api/login/authenticate';

  constructor( private http: HttpClient) {
    console.log('Auth Service Running');
   }

   public isLogged: boolean = false;

   ngOnInit(){

   }

   getToken(login: LoginUsuarioModule): Observable<string>{
     let header = new HttpHeaders().set('Content-Type', 'aplication/json');
     return this.http.post<string>(this.url, login);
   }
   
}