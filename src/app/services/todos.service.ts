import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITodos} from "../interfaces";
import {urls} from "../contains";

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ITodos[]>{

    return this.http.get<ITodos[]>(urls.todos);

  }

  getById(id:string):Observable<ITodos>{

    return this.http.get<ITodos>(`${urls.todos}/${id}`)

  }


}
