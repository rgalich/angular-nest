import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './userList/user-list.component';
import { UserDetailComponent } from './userDetail/user-detail.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    UserRoutingModule
  ]
})
export class UserModule { }
