import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
