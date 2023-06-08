import { Component } from '@angular/core';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  text: string = '';

  constructor(private activityService: ActivityService) { }

  postActivity(text: string) {
    this.activityService.createActivity(text)
    .subscribe(res => {
      console.log(res);
    });
  }
}
