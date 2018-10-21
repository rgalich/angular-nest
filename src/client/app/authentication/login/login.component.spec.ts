import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication.module';

let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let button: HTMLElement;

beforeEach(() => {
    const fakeRouter = jasmine.createSpyObj('Router', ['navigate']);
    const fakeAuthService = jasmine.createSpyObj('AuthService', ['login']);
    TestBed.configureTestingModule({
        imports: [
            AuthenticationModule
        ],
        providers: [
            { provide: AuthService, useValue: fakeAuthService },
            { provide: Router, useValue: fakeRouter }
          ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    button = fixture.nativeElement.querySelector('button');
});

it('should display original title', () => {
    fixture.detectChanges();
    expect(button.textContent).toContain('Connexion');
});