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
    title: 'Activities',
    component: ActivityComponent
  },
  {
    path: 'profile',
    title: 'Username',
    component: ProfileComponent,
    children: [
      {
        path: 'posts',
        title: 'Username activities',
        component: PostsComponent
      },
      {
        path: 'likes',
        title: 'Username likes',
        component: LikesComponent
      }
    ],
  },
  {
    path: '',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: '/activity',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
