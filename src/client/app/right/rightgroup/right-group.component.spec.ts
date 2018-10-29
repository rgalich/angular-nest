import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightGroupComponent } from './right-group.component';

describe('RightComponent', () => {
  let component: RightGroupComponent;
  let fixture: ComponentFixture<RightGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
