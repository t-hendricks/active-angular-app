import { Component } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  profile: any;

  constructor(private authService: AuthService, private activityService: ActivityService) { 
    this.profile = this.authService.profile;
  }

  addLike(id: number) {
    this.activityService.addLike(id)
    .subscribe(res => {
      console.log(res);
    })
  }
}
