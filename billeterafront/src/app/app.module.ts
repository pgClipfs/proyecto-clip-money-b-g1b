import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingupComponent } from './components/singup/singup.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecretanswerComponent } from './components/secretanswer/secretanswer.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    UsuarioComponent,
    HomeComponent,
    NavbarComponent,
    SingupComponent,
    MyaccountComponent,
    ResetpasswordComponent,
    SecretanswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // FormGroup,
    NgbModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
