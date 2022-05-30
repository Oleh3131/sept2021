import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IPostDetails} from "../interfaces";
import {PostService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPostDetails> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPostDetails> | Promise<IPostDetails> | IPostDetails {
    let {id} = route.params;
    return this.postService.getById(id);
  }

}
