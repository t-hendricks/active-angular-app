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

  /**
   * This function subscribes to a http post request 
   * observable to add content and create a new post with 
   * the content.
   * 
   * @param text an input test string
   */
  postActivity(text: string) {
    this.activityService.createActivity(text)
    .subscribe(res => {
      console.log(res);
    });
  }
}
