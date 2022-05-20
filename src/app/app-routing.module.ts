import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./commponents/home/home.component";


let routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'users_page',loadChildren:() => import('./commponents/users/users.module').then(m =>m.UsersModule )},
  {path:'posts_page',loadChildren:() => import('./commponents/posts/posts.module').then(m=>m.PostsModule)},
  {path:'comments_page',}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
