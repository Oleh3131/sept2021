import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./comments-component/comments-component.component";
import {CommentDetailsComponent} from "./comment-details-component/comment-details-component.component";
import {CommentResolver, CommentsResolver} from "../../resolvers";

const routes: Routes = [
  {path: "", component: CommentsComponent,
    resolve:{commentsData:CommentsResolver},
    children:[
      {path:'comment_details/:id',component:CommentDetailsComponent,resolve:{commentData:CommentResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
