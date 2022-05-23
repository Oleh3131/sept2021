import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ITodos} from "../../../interfaces";


@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodos;


  constructor(private router: Router,private activatedRoute:ActivatedRoute) {
  }

  getDetails(): void {

    this.router.navigate([this.todo.id], {
      relativeTo:this.activatedRoute,
      state:{todo:this.todo}
    })

  }

  ngOnInit(): void {
  }

}
