import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts-component/posts-component.component";
import {PostDetailsComponent} from "./post-details-component/post-details-component.component";


const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: 'post_details/:id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
