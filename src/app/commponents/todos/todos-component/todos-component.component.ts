import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ITodos} from "../../../interfaces";


@Component({
  selector: 'app-todos-component',
  templateUrl: './todos-component.component.html',
  styleUrls: ['./todos-component.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodos[];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({todosData}) => this.todos = todosData);

  }

}
