import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getServicios() {
    return this.http.get(`${this.API_URI}/servicios`);
  }

  getServicio(id: string) {
    return this.http.get(`${this.API_URI}/servicios/${id}`);
  }


}
