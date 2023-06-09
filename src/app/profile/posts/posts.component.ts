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

  getCurrentUserContent() {
    this.authService.getCurrentUserContent()
    .subscribe(res => {
      this.profile = res;
      this.authService.profile = res;
    })
  }

  addLike(id: number) {
    this.activityService.addLike(id)
    .subscribe(res => {
      console.log(res);
    })
  }
}
