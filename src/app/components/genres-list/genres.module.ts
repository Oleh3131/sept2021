import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenresRoutingModule} from './genres-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {GenresService} from "../../services/genres.service";
import {GenresComponent} from "./genres/genres.component";
import {GenreComponent} from "./genre/genre.component";
import { GengeDetailsComponent } from './genge-details/genge-details.component';


@NgModule({
  declarations: [GenresComponent,GenreComponent, GengeDetailsComponent],
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
