import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BilleteraMainService } from '../../services/billetera-main.service';
import { SaldoModelsModule } from '../../models/saldo-models/saldo-models.module';
import { BilleteraModule } from 'src/app/models/billetera/billetera.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../app.component.css']
})
export class MainComponent implements OnInit {
   public saldoModelsModule:SaldoModelsModule = new SaldoModelsModule();
   public billeteraModelsModule: BilleteraModule = new BilleteraModule();

  constructor( private billeteraMainService: BilleteraMainService, private router: Router){    
  }  
  ngOnInit(): void {
    let id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    this.billeteraMainService.getSaldo(id).subscribe(data => {
      this.billeteraModelsModule = data;
      console.log(data);
   
    });
  }

}
