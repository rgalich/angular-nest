import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightGroupComponent } from './rightgroup/right-group.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RightRoutingModule } from './right-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RightRoutingModule,
    NgZorroAntdModule,
    FlexLayoutModule
  ],
  declarations: [RightGroupComponent]
})
export class RightModule { }
