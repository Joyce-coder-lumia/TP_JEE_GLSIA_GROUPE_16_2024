import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: any = {};

  constructor(private connexionService: LoginserviceService) {}

  connecterUtilisateur(): void {
    this.connexionService.connecterUtilisateur(this.formData)
      .subscribe(response => {
        // Gérer la réponse du serveur ici
        console.log('Connexion réussie', response);
      }, error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la connexion', error);
      });
  }

}
