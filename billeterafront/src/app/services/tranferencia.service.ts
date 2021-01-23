import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuxClassModule } from '../models/aux-class/aux-class.module';
import { TransactionModule } from '../models/transaction/transaction.module';


@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {
  url = "https://localhost:44300/api/transaccion";
  transaccion: TransactionModule = new TransactionModule();


  constructor(private http: HttpClient) {
    console.log("transaction service is running");


  }
  createTransaction(aux: AuxClassModule): Observable<AuxClassModule> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('transferencia ssevice', aux);
    return this.http.post<AuxClassModule>(this.url, aux);


  }
}
