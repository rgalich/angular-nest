import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightGroupComponent } from './rightgroup/right-group.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RightRoutingModule } from './right-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RightComponent } from './right/right.component';

@NgModule({
  imports: [
    CommonModule,
    RightRoutingModule,
    NgZorroAntdModule,
    FlexLayoutModule
  ],
  declarations: [RightGroupComponent, RightComponent]
})
export class RightModule { }
