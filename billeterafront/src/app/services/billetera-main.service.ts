import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BilleteraModule } from '../models/billetera/billetera.module';

@Injectable({
  providedIn: 'root'
})
export class BilleteraMainService {
  url="https://localhost:44300/api/billetera";


  constructor(private http:HttpClient) {
    console.log("consultaSaldo service is running");

  }
  getSaldo(id: number):Observable<BilleteraModule>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get<BilleteraModule>(this.url + '/'+ id);

}
}

