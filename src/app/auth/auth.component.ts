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
