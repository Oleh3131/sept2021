import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-component/users-component.component";
import {UserDetailsComponent} from "./user-details-component/user-details-component.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: '/:id', component:UserDetailsComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
