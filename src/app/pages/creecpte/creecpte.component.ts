import { Component } from '@angular/core';
import { creetypc } from 'src/app/models/creetypc.model';
import { CreecpteserviceService } from 'src/app/services/creecpteservice.service';


@Component({
  selector: 'app-creecpte',
  templateUrl: './creecpte.component.html',
  styleUrls: ['./creecpte.component.css']
})
export class CreecpteComponent {
  creeData: creetypc ={
    client:{
      courriel: ''  
    },
    type_compe: '',
  }

  constructor(private creeService: CreecpteserviceService) { }

  onSubmit() {
    
  
    this.creeService.crecopmte(this.creeData).subscribe(
      (response: any) => {
        console.log(response);
        alert('creation typecopte réussie!');
        
      },
      (error: any) => {
        console.error(error);
        
        alert(`Erreur lors de la creation de compte: ${error.error.message || 'Veuillez réessayer plus tard.'}`);
      }
    );
  }

}
