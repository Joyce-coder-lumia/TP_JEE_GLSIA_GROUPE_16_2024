import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptelistserviceService {
  private apiUrl = 'URL_DE_VOTRE_API';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/accounts`);
  }
}
