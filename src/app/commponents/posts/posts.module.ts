import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from "./posts-component/posts-component.component";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "./post-component/post-component.component";
import {PostDetailsComponent} from "./post-details-component/post-details-component.component";
import {PostService, UserService} from "../../services";
import {PostResolver, PostsResolver} from "../../resolvers";
import {PostGuard} from "../../guards";




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
    PostService,
    PostResolver,
    PostsResolver,
    PostGuard
  ]
})
export class PostsModule { }
