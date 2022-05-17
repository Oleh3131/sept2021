import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {urls} from "../contains";
import {UserDetailsInterface, UserInterface} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {

    return this.http.get<UserInterface[]>(urls.users);

  }

  getUser(id:number):Observable<UserDetailsInterface>{

    return this.http.get<UserDetailsInterface>(urls.users + '/' + id);

  }

}
