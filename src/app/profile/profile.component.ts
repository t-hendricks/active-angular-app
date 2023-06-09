import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUserContent();
  }

  /**
   * This function subscribes to a http get request 
   * observable to receive user's info.
   */
  getCurrentUserContent() {
    this.authService.getCurrentUserContent()
    .subscribe(res => {
      this.profile = res;
      this.authService.profile = res;
    })
  }
}
