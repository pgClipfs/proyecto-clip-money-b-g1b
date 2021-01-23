import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaldoModelsModule } from '../models/saldo-models/saldo-models.module';

@Injectable({
  providedIn: 'root'
})
export class BilleteraMainService {
  url="https://localhost:44300/api/consultaSaldo";


  constructor(private http:HttpClient) {
    console.log("consultaSaldo service is running");

  }
  getSaldo(id: number):Observable<SaldoModelsModule>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<SaldoModelsModule>(this.url, id);

}
}