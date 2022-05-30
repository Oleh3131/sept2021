import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-component/users-component.component";
import {UserDetailsComponent} from "./user-details-component/user-details-component.component";
import {UserResolver, UsersResolver} from "../../resolvers";
import {UserGuard} from "../../guards";


const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData:UsersResolver},
    canActivate:[UserGuard],
    canDeactivate:[UserGuard],
    children: [

      {path: 'user_details/:id', component: UserDetailsComponent,resolve:{userData:UserResolver}}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
