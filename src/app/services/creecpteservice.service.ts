import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { creetypc } from '../models/creetypc.model';

@Injectable({
  providedIn: 'root'
})
export class CreecpteserviceService {
  private apiUrle = 'http://localhost:8080/api/creation_cpt';

  constructor(private http: HttpClient) { }

  crecopmte(creeData: creetypc): Observable<any> {
    return this.http.post<any>(this.apiUrle, creeData);
  }
}
