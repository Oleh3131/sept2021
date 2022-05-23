import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./todos-component/todos-component.component";
import {TodoDetailsComponent} from "./todo-details-component/todo-details-component.component";

const routes: Routes = [
  {path: '', component: TodosComponent,children:[
      {path:':id',component:TodoDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

