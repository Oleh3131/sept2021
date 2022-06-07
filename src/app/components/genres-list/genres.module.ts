import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenresRoutingModule} from './genres-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {GenresService} from "../../services/genres.service";
import {GenresComponent} from "./genres/genres.component";
import {GenreComponent} from "./genre/genre.component";


@NgModule({
  declarations: [GenresComponent,GenreComponent],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule
  ],
  providers: [
    GenresService
  ]
})
export class GenresModule {
}
