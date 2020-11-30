import { Observable } from 'rxjs';
import { LoginUsuario } from './../models/LoginUsuario';
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

   getToken(login: LoginUsuario): Observable<string>{
     let header = new HttpHeaders().set('Content-Type', 'aplication/json');
     return this.http.post<string>(this.url, login);
   }
   
}
