import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../interfaces";
import {urls} from "../contains";
import {PostDetailsInterface} from "../interfaces/post-details-interface";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<PostInterface[]>{

    return this.http.get<PostInterface[]>(urls.posts);

  }

  getPost(id:number):Observable<PostDetailsInterface>{

    return this.http.get<PostDetailsInterface>(urls.posts+'/'+id)

  }

}
