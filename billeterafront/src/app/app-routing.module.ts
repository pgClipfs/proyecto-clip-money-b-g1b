import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { SingupComponent } from './components/singup/singup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretanswerComponent } from './components/secretanswer/secretanswer.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'registrarse', component: SingupComponent },
  { path: 'micuenta', component: MyaccountComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'secretanswer', component: SecretanswerComponent},
  { path: 'transfer', component: TransferMoneyComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }