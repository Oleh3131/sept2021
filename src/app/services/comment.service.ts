import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {urls} from "../contains";
import {ICommentDetails} from "../interfaces/comment-details-interface";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http:HttpClient) { }

  getAll():Observable<IComment[]>{

    return this.http.get<IComment[]>(urls.comments);

  }

  getById(id:string):Observable<ICommentDetails>{

    return this.http.get<ICommentDetails>(`${urls.comments}/${id}`)

  }

}
