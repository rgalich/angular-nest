import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { fr_FR, NZ_I18N, NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.modules';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LoggedGuard } from './guards/logged.guard';
import { NotLoggedGuard } from './guards/notlogged.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LoggedGuard,
    NotLoggedGuard,
    { provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptor, multi: true },
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
