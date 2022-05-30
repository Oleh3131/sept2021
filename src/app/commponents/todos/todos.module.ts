import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import {TodosComponent} from "./todos-component/todos-component.component";
import { TodoComponent} from './todo-component/todo-component.component';
import {TodosService} from "../../services";
import {TodoDetailsComponent,} from './todo-details-component/todo-details-component.component';
import {TodoResolver, TodosResolver} from "../../resolvers";



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodosService,
    TodosResolver,
    TodoResolver
  ]
})
export class TodosModule { }
