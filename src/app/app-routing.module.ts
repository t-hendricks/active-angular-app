import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './profile/posts/posts.component';
import { LikesComponent } from './profile/likes/likes.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'likes',
        component: LikesComponent
      }
    ],
  },
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
