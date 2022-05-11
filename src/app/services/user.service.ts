import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  // private - це модифікатор доступу, котрий каже що це поле класу (url = 'https://jsonplaceholder.typicode.com/users')

  // буде видний тільки в межах області видомості class UserService {}

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {

    return this
      .http
      .get<any[]>(this.url);

  }

  getUser(id:number): Observable<IUser> {

    return this
      .http
      .get<any>(this.url+'/'+id);

  }


}
