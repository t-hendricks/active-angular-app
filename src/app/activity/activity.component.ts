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

  ngOnInit() {
    this.activityService.getRandomActivity()
    .subscribe(res => {
      console.log(res);
      
      this.activity = res;
    })
  }

}
