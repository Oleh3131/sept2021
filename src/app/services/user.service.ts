import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {urls} from "../contains";
import {UserInterface} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {

    return this.http.get<UserInterface[]>(urls.users);

  }

  getUser(id:number):Observable<UserInterface>{

    return this.http.get<UserInterface>(urls.users + '/' + id);

  }

}
