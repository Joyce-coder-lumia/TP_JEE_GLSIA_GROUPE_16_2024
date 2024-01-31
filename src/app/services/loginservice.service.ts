import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { connexion } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private apiUrl = 'http://localhost:8080/api/connexion';

  constructor(private http: HttpClient) { }

  connecterUtilisateur(logData: connexion): Observable<any> {
    return this.http.post<any>(this.apiUrl, logData);
  }
}
