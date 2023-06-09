import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile.component';
import { LikesComponent } from './likes/likes.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PostsComponent,
    LikesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileComponent,
    PostsComponent,
    LikesComponent
  ]
})
export class ProfileModule { }
