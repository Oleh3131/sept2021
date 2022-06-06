import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";


let routes: Routes = [
  {path: '', component: HomeComponent,children:[

      {path:'list_of_movies',loadChildren:()=>import('./components/movies-list/movies.module').then(m=>m.MoviesModule)}

    ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
