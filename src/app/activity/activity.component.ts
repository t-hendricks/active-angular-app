import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activity: any;

  constructor(private activityService: ActivityService) {}

  /**
   * Initially subscribes to a http get request 
   * observable to retreive a random post activity 
   * from the database.
   */
  ngOnInit() {
    this.activityService.getRandomActivity()
    .subscribe(res => {
      this.activity = res;
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
