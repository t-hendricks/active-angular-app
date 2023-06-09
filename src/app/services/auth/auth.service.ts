import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  profile: any;
  
  constructor(private http: HttpClient) { }

  /**
   * This function returns an Observable htttp POST request.
   * 
   * @param username a username string 
   * @param password a password string
   * @returns void
   */
  register(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/register`, {userName: username, password: password});
  }

  /**
   * This function returns an Observable htttp POST request.
   * 
   * @param username a username string 
   * @param password a password string
   * @returns void
   */
  login(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/login`, {userName: username, password: password});
  }

  /**
   * This function returns an Observable htttp GET request.
   * 
   * @returns void
   */
  getCurrentUserContent() {
    const token = localStorage.getItem('token');

    return this.http
    .get(`http://localhost:8080/api/user/activities`, {headers: {['Authorization']: `Bearer ${token}`}});
  }
}
