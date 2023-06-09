import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  profile: any;
  
  constructor(private authService: AuthService, private activityService: ActivityService) { 
    this.profile = this.authService.profile;
  }

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

  /**
   * This function subscribes to a http delete request 
   * observable to remove an existing activity post from current 
   * logged-in user like list.
   */
  removeLike(id: number) {
    this.activityService.removeLike(id)
    .subscribe(res => {
      console.log(res);
    })
  }
}
