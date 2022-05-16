import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';


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
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home_page', component: HomeComponent},
      {
        path: 'users_page', component: UsersComponent,
        children: [
          {path: 'user_details/:id', component: UserDetailsComponent}
        ]
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
