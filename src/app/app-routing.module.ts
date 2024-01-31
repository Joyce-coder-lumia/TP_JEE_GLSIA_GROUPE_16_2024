import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { TransretraitComponent } from './pages/transretrait/transretrait.component';
import { TransversComponent } from './pages/transvers/transvers.component';
import { TransvirementComponent } from './pages/transvirement/transvirement.component';
import { ComptelistComponent } from './pages/comptelist/comptelist.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { CreecpteComponent } from './pages/creecpte/creecpte.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'sign',component:SignComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'transretrait',component:TransretraitComponent},
  {path:'transvers',component:TransversComponent},
  {path:'transvirement',component:TransvirementComponent},
  {path:'comptelist',component:ComptelistComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'creecpte',component:CreecpteComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
