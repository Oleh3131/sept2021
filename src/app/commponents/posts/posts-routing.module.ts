import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts-component/posts-component.component";
import {PostDetailsComponent} from "./post-details-component/post-details-component.component";
import {PostResolver, PostsResolver} from "../../resolvers";
import {PostGuard} from "../../guards";


const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve:{postsData:PostsResolver},
    canActivate:[PostGuard],
    canDeactivate:[PostGuard],
    children: [
      {path: 'post_details/:id', component: PostDetailsComponent,resolve:{postData:PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
