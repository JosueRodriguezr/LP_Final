import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost/api/put/'; // Reemplaza con la URL correcta de tu controlador PHP

  constructor(private http: HttpClient) { }

  agregarUsuario(usuario: string, contrasena: string, rol: string) {
    const formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('contrasena', contrasena);
    formData.append('rol', rol);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
