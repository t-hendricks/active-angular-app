import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileComponent,
    PostsComponent
  ]
})
export class ProfileModule { }
