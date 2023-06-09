import { Component } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  profile: any;
  
  constructor(private authService: AuthService, private activityService: ActivityService) { 
    this.profile = this.authService.profile;
  }

  removeLike(id: number) {
    this.activityService.removeLike(id)
    .subscribe(res => {
      console.log(res);
    })
  }
}
