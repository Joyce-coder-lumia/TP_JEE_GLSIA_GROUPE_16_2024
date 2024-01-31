import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { connexion } from 'src/app/models/login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logData: connexion ={
      username: '',
      password: '',
      
  }

  constructor(private connexionService: LoginserviceService, private router: Router) {}

  onSubmit(){
    this.connexionService.connecterUtilisateur(this.logData).subscribe(
      (response: any) => {
        console.log(response);
        alert('login reussie');
        this.router.navigate(['/comptelist']);
      },
      (error: any) => {
        console.error(error);
        alert(`Erreur lors de l'authentification: ${error.error.message || 'Veuillez réessayer plus tard.'}`);
      }
    );
  }

  

}
