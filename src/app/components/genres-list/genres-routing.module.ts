import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GenresComponent} from "./genres/genres.component";
import {GengeDetailsComponent} from "./genge-details/genge-details.component";

const routes: Routes = [
  {path: '', component: GenresComponent,children:[
      {path:':id',component:GengeDetailsComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class GenresRoutingModule {
}
