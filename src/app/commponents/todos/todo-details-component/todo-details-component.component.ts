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

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private todosService:TodosService
              ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{

      const state = this.router.getCurrentNavigation()?.extras.state?.['todo'] as ITodoDetails;

      if(state){

        this.todoDetails = state;

      } else {

        this.todosService.getById(id).subscribe(value => this.todoDetails = value);

      }

    })

  }

}
