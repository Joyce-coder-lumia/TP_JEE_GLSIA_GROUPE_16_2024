import { Component } from '@angular/core';
import { SignserviceService } from 'src/app/services/signservice.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  formData: any = {};
  constructor(private inscriptionService: SignserviceService) {}

  inscriptionUtilisateur(formData: any): void {
    this.inscriptionService.inscrireUtilisateur(formData)
      .subscribe(response => {
        // Gérer la réponse du serveur ici
        console.log('Inscription réussie', response);
      }, error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de l\'inscription', error);
      });
  }

}
