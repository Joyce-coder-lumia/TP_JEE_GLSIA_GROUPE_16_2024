import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { TransversComponent } from './pages/transvers/transvers.component';
import { TransretraitComponent } from './pages/transretrait/transretrait.component';
import { TransvirementComponent } from './pages/transvirement/transvirement.component';
import { ComptelistComponent } from './pages/comptelist/comptelist.component';

import { ComptelistserviceService } from './services/comptelistservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    LoginComponent,
    NavbarComponent,
    TransversComponent,
    TransretraitComponent,
    TransvirementComponent,
    ComptelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ComptelistserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
