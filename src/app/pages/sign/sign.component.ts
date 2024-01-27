import { Component } from '@angular/core';
import { SignserviceService } from 'src/app/services/signservice.service';
import { cpte } from 'src/app/models/inscrp.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  dateInput: string = ''; 
  confirmPassword: string = '';


  convertirEtInitialiserDate() {
    if (this.dateInput) {
      
      const dateParts = this.dateInput.split('/');
      const year = Number(dateParts[2]);
      const month = Number(dateParts[1]) - 1; 
      const day = Number(dateParts[0]);

      
      this.accountData.client.dnaiss = new Date(year, month, day);
    }
  }

  accountData: cpte ={
    client:{
      nom: '',
      prenom: '',
      dnaiss: new Date(),
      sexe: '',
      adresse: '',
      courriel: '',
      mot_de_passe: '',
      tel: 0,
      nationalite: '',
    },
    type_compe: '',
  }

  constructor(private signService: SignserviceService) { }

  onSubmit() {
    this.convertirEtInitialiserDate();
  
    // Comme il n'y a plus de confirmation de mot de passe, on enlève la condition.
    this.signService.inscrireUtilisateur(this.accountData).subscribe(
      (response: any) => {
        console.log(response);
        alert('Inscription réussie!');
        // Rediriger vers une autre page, par exemple la page de connexion
        // this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
        // Afficher un message d'erreur à partir de l'API si disponible, sinon un message par défaut.
        alert(`Erreur lors de l'inscription: ${error.error.message || 'Veuillez réessayer plus tard.'}`);
      }
    );
  }
  
  

};
  



  



