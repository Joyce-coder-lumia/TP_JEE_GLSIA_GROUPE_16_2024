import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cpte } from '../models/inscrp.model';

@Injectable({
  providedIn: 'root'
})
export class SignserviceService {
  private apiUrl = 'http://localhost:8080/api/creation_cpt'; 

  constructor(private http: HttpClient) { }

  inscrireUtilisateur(accountData: cpte): Observable<any> {
    return this.http.post<any>(this.apiUrl, accountData);
  }
  


}
