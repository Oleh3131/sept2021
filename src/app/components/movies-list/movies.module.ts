import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {MoviesService} from "../../services/movies.service";
import {MoviesRoutingModule} from "./movies-routing.module";
import {MoviesComponent} from "./movies/movies.component";


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  providers:[
    MoviesService
  ]
})
export class MoviesModule { }
