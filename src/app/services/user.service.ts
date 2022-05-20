import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../contains";
import {IUser, IUserDetails} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 getAll():Observable<IUser[]>{

   return this.http.get<IUser[]>(urls.users);

 }

 getById(id:string):Observable<IUserDetails>{

    return this.http.get<IUserDetails>(`${urls.users}/${id}`)

 }

}
