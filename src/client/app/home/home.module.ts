import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RightModule } from 'app/right/right/right.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    RightModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
