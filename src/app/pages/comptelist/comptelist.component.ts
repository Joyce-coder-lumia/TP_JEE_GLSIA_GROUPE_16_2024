import { Component, OnInit } from '@angular/core';
import { ComptelistserviceService } from 'src/app/services/comptelistservice.service';



@Component({
  selector: 'app-comptelist',
  templateUrl: './comptelist.component.html',
  styleUrls: ['./comptelist.component.css']
})
export class ComptelistComponent implements OnInit{
  accounts: any[] = [];

  constructor(private accountService: ComptelistserviceService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }


}
