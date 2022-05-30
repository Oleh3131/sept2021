import { Component, OnInit } from '@angular/core';

import {IUser} from "../../../interfaces";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

   this.activatedRoute.data.subscribe(({usersData})=>this.users=usersData)

  }

}
