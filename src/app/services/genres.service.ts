import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../contains";
import {IGenreDetails} from "../interfaces/genre-details";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{

    return this.httpClient.get<any>(urls.genres)

  }

  getById(id:string):Observable<IGenreDetails>{

    return this.httpClient.get<IGenreDetails>(`${urls.movie}/${id}?api_key=c8a5151dd6ed753f530cc02f77fb85b9`)

  }


}
