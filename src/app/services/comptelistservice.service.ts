import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comptel } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class ComptelistserviceService {
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getComptesByClientId(clientId: number): Observable<comptel[]> {
    console.log('Fetching accounts for clientId:', clientId);
    return this.http.get<comptel[]>(`${this.apiUrl}lecture/${clientId}`);
  }

}
