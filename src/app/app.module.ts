import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {HomeComponent} from './components/home/home.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home_page', pathMatch: 'full'},
      {path: 'home_page', component: HomeComponent},
      {
        path: 'users_page', component: UsersComponent,
        children: [
          {path: 'user_details/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts_page', component: PostsComponent,
        children: [
          {path: 'post_details/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments_page', component: CommentsComponent,
        children: [
          {path: 'comment_details/:id', component: CommentDetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
