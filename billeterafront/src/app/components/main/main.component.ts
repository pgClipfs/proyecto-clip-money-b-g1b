import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BilleteraMainService } from '../../services/billetera-main.service';
import { SaldoModelsModule } from '../../models/saldo-models/saldo-models.module';
import { BilleteraModule } from 'src/app/models/billetera/billetera.module';
import { TransactionModule } from 'src/app/models/transaction/transaction.module';
import { TranferenciaService } from 'src/app/services/tranferencia.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../app.component.css']
})
export class MainComponent implements OnInit {
  public saldoModelsModule: SaldoModelsModule = new SaldoModelsModule();
  public billeteraModelsModule: BilleteraModule = new BilleteraModule();
  public trasaccionModelModulo: TransactionModule[] = [];
  constructor(private billeteraMainService: BilleteraMainService, private router: Router, private tranferenciaService: TranferenciaService) {
  }
  ngOnInit(): void {
    let id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    this.billeteraMainService.getSaldo(id).subscribe(data => {
      this.billeteraModelsModule = data;
      localStorage.setItem('monto', JSON.stringify(data.Saldo));
      // console.log(data);

    });

    this.tranferenciaService.getTransaccion(id).subscribe(data => {
      console.log(data);
      this.trasaccionModelModulo = Object.assign([], data);
      console.log("transaccion");
      console.log(this.trasaccionModelModulo[0]);


    })
  }

}
