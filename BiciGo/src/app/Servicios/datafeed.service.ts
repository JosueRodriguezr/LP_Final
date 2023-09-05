import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatafeedService {

  private URL: string = 'http://localhost/apiFeed/get/';
  private apiUrl: string = 'http://localhost/apiFeed/put/';

  getResponse() {
    return this.http.get(this.URL);
}

  constructor(private http:HttpClient) { }
  agregarUsuario( title: string, body: string, photoUrl:string,username: string) {
    const formData = new FormData();
    formData.append('postID', '1');
    formData.append('title', title);
    formData.append('body', body);
    formData.append('photoUrl', photoUrl);
    formData.append('username', username);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apiUrl, formData, { headers });
  }

}

