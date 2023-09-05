import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL: string = 'http://localhost/api/get/';

  getResponse() {
    return this.http.get(this.URL);
}
  constructor(private http:HttpClient) { }

}



