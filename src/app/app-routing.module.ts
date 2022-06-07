import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";


let routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list_of_movies',loadChildren:()=>import('./components/movies-list/movies.module').then(m=>m.MoviesModule)}


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
