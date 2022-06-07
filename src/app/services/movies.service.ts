import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../contains";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) {}

  getAll():Observable<any>{

    return this.httpClient.get<any>(urls.movies);

  }

}
