import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapasService {


  private URL: string = 'http://localhost/apiMapa/get/';
  private apiUrl = 'http://localhost/apiMapa/put/';
  constructor(private http: HttpClient) { }
  getResponse() {
    return this.http.get(this.URL);
  }
  

  agregarRuta(puntoPartida1: string, puntoPartida2: string, nombrePuntoPartida: string, nombrePuntoFinal: string, lider: string) {
    //PuntoPartida1,PuntoFinal1,PuntoPartida2,PuntoFinal2,NombrePuntoPartida,NombrePuntoFinal,lider
    const formData = new FormData();
    formData.append('PuntoPartida1', puntoPartida1);
    formData.append('PuntoPartida2', puntoPartida2);
    formData.append('NombrePuntoPartida', nombrePuntoPartida);
    formData.append('NombrePuntoFinal', nombrePuntoFinal);
    formData.append('lider', lider);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
