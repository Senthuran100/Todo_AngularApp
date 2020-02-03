import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import{TodoComponent} from './todo/todo.component';
import {CallRestComponent} from './call-rest/call-rest.component';


const routes: Routes = [
  {path: 'navbar', component: NavBarComponent},
  {path: 'todo', component: TodoComponent},
  {path:'rest',component:CallRestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
