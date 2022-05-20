import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import {TodosComponent} from "./todos-component/todos-component.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ]
})
export class TodosModule { }
