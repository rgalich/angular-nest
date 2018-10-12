import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NZ_I18N, fr_FR } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.modules';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
