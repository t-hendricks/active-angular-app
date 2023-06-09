import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
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
   * This function subscribes to a http post request 
   * observable to add an existing activity post to current 
   * logged-in user like list.
   * 
   * @param id a number representing activity id
   */
  addLike(id: number) {
    this.activityService.addLike(id)
    .subscribe(res => {
      console.log(res);
    })
  }
}
