import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [RightComponent]
})
export class RightModule { }
