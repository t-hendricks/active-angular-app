import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  profile: any;
  
  constructor(private authService: AuthService) { 
    this.profile = this.authService.profile;
  }
}
