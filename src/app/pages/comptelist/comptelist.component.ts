import { Component, OnInit } from '@angular/core';
import { ComptelistserviceService } from 'src/app/services/comptelistservice.service';
import { comptel, compteForm } from 'src/app/models/compte.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-comptelist',
  templateUrl: './comptelist.component.html',
  styleUrls: ['./comptelist.component.css']
})
export class ComptelistComponent implements OnInit{
  comptes: comptel[] = [];
  clientId: number =1;
  //selectedAccount: compteForm | undefined;

  

  showDetails(account: any) {
    
  }


  

  

  deleteAccount(account: any) {
    
  }

  downloadData(account: any){

  }

  constructor(private accountService: ComptelistserviceService) {}

  
  

    

  ngOnInit(): void {
    this.accountService.getComptesByClientId(this.clientId).subscribe(
      (data) => {
        this.comptes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des comptes', error);
      }
    );
  }

  
  
  

  
  
}

  



