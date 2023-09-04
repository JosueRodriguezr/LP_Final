import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/api/controllers/api.php';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }
}
