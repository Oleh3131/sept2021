import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./comments-component/comments-component.component";
import {CommentDetailsComponent} from "./comment-details-component/comment-details-component.component";

const routes: Routes = [
  {path: "", component: CommentsComponent,children:[
      {path:'comment_details/:id',component:CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
