import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getVentas() {
    return this.http.get(`${this.API_URI}/ventas`);
  }

  getVenta(id: string) {
    return this.http.get(`${this.API_URI}/ventas/${id}`);
  }
}
