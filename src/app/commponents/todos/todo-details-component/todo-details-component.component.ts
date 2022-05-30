import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {TodosService} from "../../../services";
import {ITodoDetails} from "../../../interfaces/todo-details-interface";

@Component({
  selector: 'app-todo-details-component',
  templateUrl: './todo-details-component.component.html',
  styleUrls: ['./todo-details-component.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todoDetails: ITodoDetails;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({todoData}) => this.todoDetails = todoData);

  }

}
