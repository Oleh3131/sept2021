import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../../services";
import {ITodos} from "../../../interfaces";

@Component({
  selector: 'app-todos-component',
  templateUrl: './todos-component.component.html',
  styleUrls: ['./todos-component.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodos[];

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {

    this.todosService.getAll().subscribe(value => this.todos = value);

  }

}
