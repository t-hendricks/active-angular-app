import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  response: any;

  constructor(private authService: AuthService) { }

  /**
   * This function subscribes to a http post request to 
   * register a new user with given credentials.
   * 
   * @param username a username string 
   * @param password a password string
   */
  register(username: string, password: string) {
    this.authService.register(username, password)
    .subscribe({
      next: data => {
        this.response = data;
        this.login(username, password);
      },
      error: error => {
        this.response = error;
        console.log(this.response.error.message);
      }
    });
  }

  /**
   * This function subscribes to a http post request to 
   * login an existing user with given credentials.
   * 
   * @param username a username string 
   * @param password a password string
   */
  login(username: string, password: string) {
    this.authService.login(username, password)
    .subscribe({
      next: data => {
        this.response = data;
        localStorage.setItem('token', this.response.message);
      },
      error: error => {
        this.response = error;
        console.log(this.response.error.message);
      }
    });
  }
}
