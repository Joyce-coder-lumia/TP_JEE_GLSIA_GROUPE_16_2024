import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cpte } from '../models/inscrp.model';

@Injectable({
  providedIn: 'root'
})
export class SignserviceService {
  private apiUrl = 'http://localhost:8080/compte/creation_cpt'; 

  constructor(private http: HttpClient) { }

  /*inscrireUtilisateur(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data); 
  }*/

  inscrireUtilisateur(accountData: cpte): Observable<any> {
    return this.http.post<any>(this.apiUrl, accountData);
  }
  


}
