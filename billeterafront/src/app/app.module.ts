import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingupComponent } from './components/singup/singup.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecretanswerComponent } from './components/secretanswer/secretanswer.component';
import { UsuarioLoginService } from './services/usuario-login.service';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SingupComponent,
    MyaccountComponent,
    ResetpasswordComponent,
    SecretanswerComponent,
    TransferMoneyComponent,
    TransferComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [UsuarioService, UsuarioLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
