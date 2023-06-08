import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './profile/posts/posts.component';
import { LikesComponent } from './profile/likes/likes.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'activity',
    title: 'Activities',
    component: ActivityComponent
  },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent,
    children: [
      {
        path: 'posts',
        title: 'Posts',
        component: PostsComponent
      },
      {
        path: 'likes',
        title: 'Likes',
        component: LikesComponent
      }
    ],
  },
  {
    path: 'post',
    title: 'Activate',
    component: PostComponent
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
