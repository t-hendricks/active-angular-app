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
   * This function makes a http post request to 
   * register a new user with given credentials.
   * 
   * @param username a username string 
   * @param password a password string
   * @returns http Observable
   */
  register(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/register`, {userName: username, password: password});
  }

  /**
   * This function makes a http post request to 
   * log in an existing user with given credentials.
   * 
   * @param username a username string 
   * @param password a password string
   * @returns http Observable
   */
  login(username: string, password: string) {
    return this.http
    .post(`http://localhost:8080/auth/users/login`, {userName: username, password: password});
  }

  /**
   * This function makes a http get request to retreive 
   * current logged-in user's information.
   * 
   * @returns http Observable
   */
  getCurrentUserContent() {
    const token = localStorage.getItem('token');

    return this.http
    .get(`http://localhost:8080/api/user/activities`, {headers: {['Authorization']: `Bearer ${token}`}});
  }
}
