import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../../services";
import {ITodos} from "../../../interfaces";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";
import {filter, map} from "rxjs";

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
