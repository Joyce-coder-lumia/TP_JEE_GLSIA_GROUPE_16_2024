import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignserviceService {
  private apiUrl = 'URL_DE_VOTRE_API'; // je dois  remplacer lurl apres

  constructor(private http: HttpClient) { }

  inscrireUtilisateur(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/inscription`, data); //je dois changer apres le slash inscrp
  }
}
