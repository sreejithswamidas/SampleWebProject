import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedAlertComponent } from './user-created-alert.component';

describe('UserCreatedAlertComponent', () => {
  let component: UserCreatedAlertComponent;
  let fixture: ComponentFixture<UserCreatedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreatedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
