import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {CommentsComponent} from "./comments-component/comments-component.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ]
})
export class CommentsModule { }
