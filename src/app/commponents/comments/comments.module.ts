import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {CommentsComponent} from "./comments-component/comments-component.component";
import {HttpClientModule} from "@angular/common/http";
import {CommentComponent} from "./comment-component/comment-component.component";
import { CommentDetailsComponent } from './comment-details-component/comment-details-component.component';
import {CommentService} from "../../services";




@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentsModule { }
