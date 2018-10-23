import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    FlexLayoutModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
