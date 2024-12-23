import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DLTCGService {

  baseUrl : string = "https://api.lorcana-api.com/bulk";
  setsUrl : string = this.baseUrl.concat("/sets");
  cardsUrl : string = this.baseUrl.concat("/cards");

  constructor(private http: HttpClient) { }

  getSets(): Observable<any> {
    return this.http.get<any>(this.setsUrl);
  }

  getCards(): Observable<any> {
    return this.http.get<any>(this.cardsUrl);
  }
}
