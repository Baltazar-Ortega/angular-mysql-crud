import { Cosmetico } from './../models/Cosmetico';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Es una interfaz

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosmeticosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCosmeticos() {
    return this.http.get(`${this.API_URI}/cosmeticos`);
  }

  getCosmetico(id: string) {
    return this.http.get(`${this.API_URI}/cosmeticos/${id}`);
  }

  deleteCosmetico(id: string) {
    return this.http.delete(`${this.API_URI}/cosmeticos/${id}`);
  }

  saveCosmetico(cosmetico: Cosmetico) {
    return this.http.post(`${this.API_URI}/cosmeticos`, cosmetico);
  }

  updateCosmetico(id: string|number, updatedCosmetico: Cosmetico): Observable<Cosmetico> {
    return this.http.put(`${this.API_URI}/cosmeticos/${id}`, updatedCosmetico);
  }
}
