import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovies} from "../interfaces/movies";
import {urls} from "../contains";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) {}

  getAll():Observable<IMovies[]>{

    return this.httpClient.get<IMovies[]>(urls.movies);

  }

}
