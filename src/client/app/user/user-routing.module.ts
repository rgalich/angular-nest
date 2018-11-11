import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './userList/user-list.component';
import { UserDetailComponent } from './userDetail/user-detail.component';

const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: 'create', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
