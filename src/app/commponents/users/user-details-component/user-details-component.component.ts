import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../../interfaces";

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  this.activatedRoute.data.subscribe(({userData})=>this.userDetails=userData)

  }

}
