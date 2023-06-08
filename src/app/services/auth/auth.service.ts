import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  
  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/register`, {userName: username, password: password});
  }

  login(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/login`, {userName: username, password: password});
  }
}
