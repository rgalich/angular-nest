import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { NzLayoutComponent, NzSiderComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzDropDownComponent } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const fakeRouter = jasmine.createSpyObj('Router', ['navigate']);
  const fakeAuthService = jasmine.createSpyObj('AuthService', ['removeAuthStorage']);
  const fakeUserService = jasmine.createSpyObj('UserService', ['userConnect']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeModule,
        NoopAnimationsModule,
        HttpClientModule
      ],
      providers: [
        { provide: AuthService, useValue: fakeAuthService },
        { provide: Router, useValue: fakeRouter },
        { provide: UserService, useValue: fakeUserService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('structure form', () => {
    const element = fixture.debugElement;
    const nzLayout = element.query(By.directive(NzLayoutComponent));
    const nzSider = nzLayout.query(By.directive(NzSiderComponent));
    const nzMenu = nzSider.query(By.css('[nz-menu]'));
    const subNzLayout = nzLayout.query(By.directive(NzLayoutComponent));
    const nzHeader = subNzLayout.query(By.directive(NzHeaderComponent));
    const nzContent = subNzLayout.query(By.directive(NzContentComponent));
    const nzFooter = subNzLayout.query(By.directive(NzFooterComponent));
    expect(nzLayout).not.toBeNull('layout exist');
    expect(nzSider).not.toBeNull('nzSider exist');
    expect(nzMenu).not.toBeNull('nzMenu exist');
    expect(subNzLayout).not.toBeNull('subNzLayout exist');
    expect(nzHeader).not.toBeNull('nzHeader exist');
    expect(nzContent).not.toBeNull('nzContent exist');
    expect(nzFooter).not.toBeNull('nzFooter exist');
  });

  it('collapse Menu', () => {
    const element = fixture.debugElement;
    const nzHeader = element.query(By.directive(NzHeaderComponent));
    const collapseMenu = nzHeader.query(By.css('i'));
    expect(collapseMenu).not.toBeNull('collapseMenu exist');
    collapseMenu.nativeElement.click();

    expect(component.isCollapsed).toBe(true);

    collapseMenu.nativeElement.click();

    expect(component.isCollapsed).toBe(false);
  });

  it('collapse Profil', () => {
    const element = fixture.debugElement;
    const nzDropDown = element.query(By.directive(NzDropDownComponent));
    expect(nzDropDown).not.toBeNull('nzDropDown exist');
    nzDropDown.nativeElement.click();

    expect(component.isCollapsedProfil).toHaveBeenCalled();

  });
});
