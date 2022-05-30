import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IUserDetails} from "../interfaces";
import {UserService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUserDetails> {

  constructor(private userService:UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserDetails> | Promise<IUserDetails> | IUserDetails {

    let {id} = route.params;

    return this.userService.getById(id);

  }

}
