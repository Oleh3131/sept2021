import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ICommentDetails} from "../interfaces/comment-details-interface";
import {CommentService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<ICommentDetails> {

  constructor(private commentService:CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICommentDetails> | Promise<ICommentDetails> | ICommentDetails {

    let {id} = route.params;
    return this.commentService.getById(id);

  }

}
