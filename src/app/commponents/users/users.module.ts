import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from './users-component/users-component.component';
import {UserComponent} from "./user-component/user-component.component";
import {UserDetailsComponent,} from './user-details-component/user-details-component.component';
import {UserService} from "../../services";
import {UserResolver, UsersResolver} from "../../resolvers";
import {UserGuard} from "../../guards";




@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService,
    UsersResolver,
    UserResolver,
    UserGuard
  ]
})
export class UsersModule { }
