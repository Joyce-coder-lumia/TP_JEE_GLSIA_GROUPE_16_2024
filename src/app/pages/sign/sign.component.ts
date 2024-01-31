import { Component } from '@angular/core';
import { SignserviceService } from 'src/app/services/signservice.service';
import { cpte } from 'src/app/models/inscrp.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  dateInput: string = ''; 

  convertirEtInitialiserDate() {
    if (this.dateInput) {
      
      this.accountData.client.dnaiss = new Date(this.dateInput);
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

  constructor(private signService: SignserviceService, private router: Router) { }

  onSubmit() {
    this.convertirEtInitialiserDate();
  
    // Comme il n'y a plus de confirmation de mot de passe, on enlève la condition.
    this.signService.inscrireUtilisateur(this.accountData).subscribe(
      (response: any) => {
        console.log(response);
        alert('Inscription réussie!');
        
         this.router.navigate(['/comptelist']);
      },
      (error: any) => {
        console.error(error);
        
        alert(`Erreur lors de l'inscription: ${error.error.message || 'Veuillez réessayer plus tard.'}`);
      }
    );
  }
  
  

};
  



  



