import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  profile: any;
  
  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/register`, {userName: username, password: password});
  }

  login(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/login`, {userName: username, password: password});
  }

  getCurrentUserContent() {
    const token = localStorage.getItem('token');
    console.log(token);

    return this.http
    .get(`http://localhost:8080/api/user/activities`, {headers: {['Authorization']: `Bearer ${token}`}});
  }
}
