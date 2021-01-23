import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BilleteraMainService } from '../../services/billetera-main.service';
import { SaldoModelsModule } from '../../models/saldo-models/saldo-models.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../app.component.css']
})
export class MainComponent implements OnInit {
   public saldoModelsModule:SaldoModelsModule = new SaldoModelsModule();
  constructor( private billeteraMainService: BilleteraMainService, private router: Router){    
  }  
  ngOnInit(): void {
    let id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    let test ;
    test = this.billeteraMainService.getSaldo(id);
    console.log(test);
  }
}