import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from "./todos-component/todos-component.component";
import {TodoDetailsComponent} from "./todo-details-component/todo-details-component.component";
import {TodoResolver, TodosResolver} from "../../resolvers";

const routes: Routes = [
  {path: '', component: TodosComponent,
    resolve:{todosData:TodosResolver},
    children:[
      {path:':id',component:TodoDetailsComponent,resolve:{todoData:TodoResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

