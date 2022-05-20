import { Component, OnInit } from '@angular/core';

import {IUser} from "../../../interfaces";
import {UserService} from "../../../services";

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getAll().subscribe(value => this.users = value);

  }

}
