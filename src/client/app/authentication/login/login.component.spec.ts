import { LoginComponent } from './login.component';
import { TestBed } from '@angular/core/testing';
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
    
    it('should display original title', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        const componentInstance = fixture.componentInstance;
        
        const element = fixture.nativeElement;

        const mailInput = element.querySelector('[formcontrolname="mail"]');
        // mailInput.value = 'mail';
        // mailInput.dispatchEvent(new Event('input'));
        const passwordInput = element.querySelector('[formcontrolname="password"]');
        // passwordInput.value = 'password';
        // passwordInput.dispatchEvent(new Event('input'));

        componentInstance.submitForm();
        fixture.detectChanges();

        expect(fakeFormControlsService.validateControls).toHaveBeenCalledWith(componentInstance.validateForm.controls);
        expect(mailInput).not.toBeNull('You should have an input mail');
        expect(mailInput.classList.contains("ng-invalid")).toBe(true, 'The mail is invalid');
        expect(passwordInput).not.toBeNull('You should have an input password');
        expect(passwordInput.classList.contains("ng-invalid")).toBe(true, 'The password is invalid');
        expect(componentInstance.validateForm.valid).toBe(false, 'The button should be enabled if the form is valid');
    });
})
