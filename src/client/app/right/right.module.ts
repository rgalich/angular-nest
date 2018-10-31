import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightGroupComponent } from './rightgroup/right-group.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RightRoutingModule } from './right-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RightComponent } from './right/right.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RightRoutingModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RightGroupComponent, RightComponent]
})
export class RightModule { }
