import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {ITodoDetails} from "../interfaces/todo-details-interface";
import {TodosService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodoDetails> {

  constructor(private todosService:TodosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodoDetails> | Promise<ITodoDetails> | ITodoDetails {

    let {id} = route.params;
    return this.todosService.getById(id);

  }



}
