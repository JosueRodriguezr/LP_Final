import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost/api/controllers/api.php';

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
