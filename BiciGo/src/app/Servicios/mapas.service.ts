import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapasService {


  private URL: string = 'http://localhost/apiMapa/get/';

  getResponse() {
    return this.http.get(this.URL);
}
  constructor(private http:HttpClient) { }

}
