import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { TransversComponent } from './pages/transvers/transvers.component';
import { TransretraitComponent } from './pages/transretrait/transretrait.component';
import { TransvirementComponent } from './pages/transvirement/transvirement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    LoginComponent,
    NavbarComponent,
    TransversComponent,
    TransretraitComponent,
    TransvirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
