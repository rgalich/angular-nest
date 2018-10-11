import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    NgZorroAntdModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
