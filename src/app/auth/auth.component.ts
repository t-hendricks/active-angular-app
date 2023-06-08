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
      },
      error: error => {
        this.response = error;
      }
    });
  }

  login() {
    console.log(this.response);
  }
}
