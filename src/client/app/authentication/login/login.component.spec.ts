import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { AuthenticationModule } from '../authentication.module';
import { FormControlsService } from 'app/core/service/form-controls.service';

describe('LoginComponent', () => {

    const fakeRouter = jasmine.createSpyObj('Router', ['navigate']);
    const fakeAuthService = jasmine.createSpyObj('AuthService', ['login']);
    const fakeFormControlsService = jasmine.createSpyObj('FormControlsService', ['validateControls']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AuthenticationModule
            ],
            providers: [
                { provide: AuthService, useValue: fakeAuthService },
                { provide: Router, useValue: fakeRouter },
                { provide: FormControlsService, useValue: fakeFormControlsService },
              ]
        });
    });

    it ('structure form', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();

        const element = fixture.nativeElement;

        const mailInput = element.querySelector('[formcontrolname="mail"]');
        const passwordInput = element.querySelector('[formcontrolname="password"]');
        const submitButton = element.querySelector('button');

        expect(mailInput).not.toBeNull('Input mail exist');
        expect(passwordInput).not.toBeNull('Input password exist');
        expect(submitButton).not.toBeNull('Button submit exist');
    });

    it('invalid form', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        const componentInstance = fixture.componentInstance;

        const element = fixture.nativeElement;

        const mailInput = element.querySelector('[formcontrolname="mail"]');
        const passwordInput = element.querySelector('[formcontrolname="password"]');
        const submitButton = element.querySelector('button');

        fixture.detectChanges();
        submitButton.click();

        expect(mailInput.classList.contains('ng-invalid')).toBe(true, 'Input mail is invalid');
        expect(passwordInput.classList.contains('ng-invalid')).toBe(true, 'Input password is invalid');
        expect(fakeFormControlsService.validateControls).toHaveBeenCalledWith(componentInstance.validateForm.controls);
        expect(componentInstance.validateForm.valid).toBe(false, 'Form is invalid');
    });

    it('valid form', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();

        fakeAuthService.login.and.returnValue(of());

        const componentInstance = fixture.componentInstance;

        const element = fixture.nativeElement;

        const mailInput = element.querySelector('[formcontrolname="mail"]');
        mailInput.value = 'mail';
        mailInput.dispatchEvent(new Event('input'));
        const passwordInput = element.querySelector('[formcontrolname="password"]');
        passwordInput.value = 'password';
        passwordInput.dispatchEvent(new Event('input'));
        const submitButton = element.querySelector('button');

        fixture.detectChanges();
        submitButton.click();

        expect(mailInput.classList.contains('ng-valid')).toBe(true, 'Input mail is valid');
        expect(passwordInput.classList.contains('ng-valid')).toBe(true, 'Input password is valid');
        expect(fakeFormControlsService.validateControls).toHaveBeenCalledWith(componentInstance.validateForm.controls);
        expect(componentInstance.validateForm.valid).toBe(true, 'Form is valid');
    });

    it('valid error response form', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();

        fakeAuthService.login.and.returnValue(throwError({ status: 401 }));

        const element = fixture.nativeElement;

        const mailInput = element.querySelector('[formcontrolname="mail"]');
        mailInput.value = 'mail';
        mailInput.dispatchEvent(new Event('input'));
        const passwordInput = element.querySelector('[formcontrolname="password"]');
        passwordInput.value = 'password';
        passwordInput.dispatchEvent(new Event('input'));
        const submitButton = element.querySelector('button');

        fixture.detectChanges();
        submitButton.click();

        expect(fakeRouter.navigate).not.toHaveBeenCalledWith(['/']);
    });

    it('valid success response form', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();

        fakeAuthService.login.and.returnValue(of({ expiresIn: 'date', accessToken: 'token' }));

        const element = fixture.nativeElement;

        const mailInput = element.querySelector('[formcontrolname="mail"]');
        mailInput.value = 'mail';
        mailInput.dispatchEvent(new Event('input'));
        const passwordInput = element.querySelector('[formcontrolname="password"]');
        passwordInput.value = 'password';
        passwordInput.dispatchEvent(new Event('input'));
        const submitButton = element.querySelector('button');

        fixture.detectChanges();
        submitButton.click();

        expect(fakeRouter.navigate).toHaveBeenCalledWith(['/']);
    });
});
