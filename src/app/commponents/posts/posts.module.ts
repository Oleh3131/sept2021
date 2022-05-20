import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from "./posts-component/posts-component.component";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "./post-component/post-component.component";
import {PostDetailsComponent} from "./post-details-component/post-details-component.component";
import {PostService, UserService} from "../../services";




@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostService
  ]
})
export class PostsModule { }
