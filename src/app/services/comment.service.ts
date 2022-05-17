import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../interfaces";
import {urls} from "../contains";
import {CommentDetailsInterface} from "../interfaces/comment-details-interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getComments():Observable<CommentInterface[]>{

   return this.http.get<CommentInterface[]>(urls.comments)

  }

  getComment(id:number):Observable<CommentDetailsInterface>{

    return this.http.get<CommentDetailsInterface>(urls.comments + '/' + id);

  }

}
