import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import {mapa} from '../Interfaces/mapa'
=======
>>>>>>> bf3b1c71147e5e1824062630b368922e97f4b14a

@Injectable({
  providedIn: 'root'
})
export class MapasService {


  private URL: string = 'http://localhost/apiMapa/get/';
<<<<<<< HEAD
  private apiUrl: string = 'http://localhost/apiMapa/put/';
  constructor(private http:HttpClient) { }


  getResponse() {
    return this.http.get(this.URL);
}

 agregarUsuario(
  PuntoPartida1: number,
  PuntoFinal1: number,
  PuntoPartida2: number,
  PuntoFinal2: number,
  NombrePuntoPartida: string,
  NombrePuntoFinal: string,
  lider: string
) {
  const formData = new FormData();
  formData.append('PuntoPartida1', PuntoPartida1.toString()); // Convertir a string
  formData.append('PuntoFinal1', PuntoFinal1.toString()); // Convertir a string
  formData.append('PuntoPartida2', PuntoPartida2.toString()); // Convertir a string
  formData.append('PuntoFinal2', PuntoFinal2.toString()); // Convertir a string
  formData.append('NombrePuntoPartida', NombrePuntoPartida);
  formData.append('NombrePuntoFinal', NombrePuntoFinal);
  formData.append('lider', lider);

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
  return this.http.post(this.apiUrl, formData, { headers });
}
=======
  private apiUrl = 'http://localhost/apiMapa/put/';
  constructor(private http: HttpClient) { }
  getResponse() {
    return this.http.get(this.URL);
  }
  
>>>>>>> bf3b1c71147e5e1824062630b368922e97f4b14a

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




