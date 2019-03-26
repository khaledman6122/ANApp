import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {FilmsComponent} from './films/films.component'
import {CaseComponent} from './case/case.component';
import {AboutComponent} from './about/about.component'
const arr:Routes=[
  //{path:'',redirectTo:'/HomeComponent',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'films',component:FilmsComponent},
  {path:'case',component:CaseComponent},
  {path:'about',component:AboutComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(arr)
  ],
  exports:[RouterModule]
})

export class RoutingModule {
  constructor() { }
 }
