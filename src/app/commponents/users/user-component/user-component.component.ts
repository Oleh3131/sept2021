import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../interfaces";

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input()
  user: IUser;


  ngOnInit(): void {
  }

}
