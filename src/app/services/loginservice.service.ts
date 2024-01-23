import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private apiUrl = 'URL_DE_VOTRE_API';

  constructor(private http: HttpClient) { }

  connecterUtilisateur(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/connexion`, data);
  }
}
