import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { CreecpteComponent } from './pages/creecpte/creecpte.component';
import { AdmihomeComponent } from './backoffice/admihome/admihome.component';
import { AdmilistecpteComponent } from './backoffice/admilistecpte/admilistecpte.component';
import { AdmitransacComponent } from './backoffice/admitransac/admitransac.component';

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
    ComptelistComponent,
    DashbordComponent,
    CreecpteComponent,
    AdmihomeComponent,
    AdmilistecpteComponent,
    AdmitransacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComptelistserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
